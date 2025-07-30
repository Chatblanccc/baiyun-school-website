"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import PageHeader from "@/components/page-header"
import { allNewsData } from "@/lib/news-data"

const NEWS_PER_PAGE = 9

export default function NewsPage() {
  const [visibleCount, setVisibleCount] = useState(NEWS_PER_PAGE)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const sortedNews = useMemo(
    () => allNewsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [],
  )

  const headlineNews = sortedNews[0]
  const latestNews = sortedNews.slice(1)

  const categories = useMemo(() => {
    const categoryCounts = allNewsData.reduce(
      (acc, news) => {
        acc[news.category] = (acc[news.category] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )
    return Object.entries(categoryCounts).map(([name, count]) => ({ name, count }))
  }, [])

  const filteredNews = useMemo(() => {
    if (!selectedCategory) return latestNews
    return latestNews.filter((news) => news.category === selectedCategory)
  }, [selectedCategory, latestNews])

  const currentNews = useMemo(() => filteredNews.slice(0, visibleCount), [filteredNews, visibleCount])
  const hasMore = visibleCount < filteredNews.length

  const handleLoadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setVisibleCount((prev) => prev + NEWS_PER_PAGE)
      setIsLoading(false)
    }, 500)
  }

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category)
    setVisibleCount(NEWS_PER_PAGE)
  }

  return (
    <main>
      <PageHeader title="新闻中心" breadcrumbs={[{ name: "首页", href: "/" }, { name: "新闻中心" }]} />

      <div className="container mx-auto px-4 py-16">
        {/* Headline News */}
        <section className="mb-16">
          <Link href={`/news/${headlineNews.slug}`}>
            <Card className="overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center group hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video">
                <img
                  src={headlineNews.image || "/placeholder.svg"}
                  alt={headlineNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <Badge variant="destructive" className="mb-4">
                  头条新闻
                </Badge>
                <h2 className="text-3xl font-bold mb-4">{headlineNews.title}</h2>
                <p className="text-muted-foreground mb-6">{headlineNews.excerpt}</p>
                <div className="text-sm text-muted-foreground">
                  <span>{headlineNews.author}</span> &middot;{" "}
                  <span>{new Date(headlineNews.date).toLocaleDateString("zh-CN")}</span>
                </div>
              </div>
            </Card>
          </Link>
        </section>

        {/* Latest News & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-9">
            <h2 className="text-3xl font-bold mb-8">最新新闻</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {currentNews.map((news) => (
                <Link key={news.id} href={`/news/${news.slug}`} className="flex">
                  <Card className="flex flex-col overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="default" className="w-fit">
                        {news.category}
                      </Badge>
                      <CardTitle className="text-lg mt-2">{news.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm line-clamp-3">{news.excerpt}</p>
                    </CardContent>
                    <div className="p-4 pt-0 text-xs text-muted-foreground">
                      <span>{new Date(news.date).toLocaleDateString("zh-CN")}</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            {hasMore && (
              <div className="text-center mt-12">
                <Button onClick={handleLoadMore} disabled={isLoading} size="lg">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      加载中...
                    </>
                  ) : (
                    "加载更多"
                  )}
                </Button>
              </div>
            )}
          </div>

          <aside className="lg:col-span-3">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold mb-6">新闻分类</h3>
              <ul className="space-y-2">
                <li>
                  <Button
                    variant={!selectedCategory ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => handleCategorySelect(null)}
                  >
                    <span className="flex-grow text-left">全部新闻</span>
                    <Badge variant="outline">{allNewsData.length}</Badge>
                  </Button>
                </li>
                {categories.map((category) => (
                  <li key={category.name}>
                    <Button
                      variant={selectedCategory === category.name ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => handleCategorySelect(category.name)}
                    >
                      <span className="flex-grow text-left">{category.name}</span>
                      <Badge variant="outline">{category.count}</Badge>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
