import { notFound } from "next/navigation"
import { format } from "date-fns"
import { zhCN } from "date-fns/locale"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Tag } from "lucide-react"
import SocialShare from "@/components/social-share"
import Link from "next/link"
import { allNewsData } from "@/lib/news-data"

const getArticleData = async (slug: string) => {
  const article = allNewsData.find((a) => a.slug === slug)
  if (!article) return { article: null, relatedArticles: [] }

  const relatedArticles = allNewsData
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      // Prioritize articles in the same category
      const aIsSameCategory = a.category === article.category ? -1 : 1
      const bIsSameCategory = b.category === article.category ? -1 : 1
      if (aIsSameCategory !== bIsSameCategory) {
        return aIsSameCategory - bIsSameCategory
      }
      // Then sort by date
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, 3)

  return { article, relatedArticles }
}

export default async function NewsArticlePage({ params }: { params: { slug: string } }) {
  const { article, relatedArticles } = await getArticleData(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="bg-muted/40">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Article Content */}
          <div className="lg:col-span-9">
            <Card>
              <CardHeader>
                <Badge variant="default" className="w-fit mb-4">
                  {article.category}
                </Badge>
                <CardTitle className="text-3xl md:text-4xl font-bold leading-tight">{article.title}</CardTitle>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mt-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={article.date}>
                      {format(new Date(article.date), "yyyy年MM月dd日", { locale: zhCN })}
                    </time>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-8">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <article
                  className="prose dark:prose-invert max-w-none prose-p:text-lg prose-blockquote:text-lg"
                  dangerouslySetInnerHTML={{ __html: article.body }}
                />
                <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <SocialShare title={article.title} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>相关新闻</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/news/${relatedArticle.slug}`}
                    className="block hover:bg-muted p-2 rounded-md"
                  >
                    <h4 className="font-semibold leading-snug">{relatedArticle.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {format(new Date(relatedArticle.date), "yyyy-MM-dd")}
                    </p>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  )
}
