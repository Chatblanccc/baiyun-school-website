import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calculator, Beaker, Globe, Palette, Music, Trophy, Users } from "lucide-react"
import PageHeader from "@/components/page-header"
import Link from "next/link"

export default function CoursesPage() {
  return (
    <main>
      <PageHeader
        title="课程设置"
        subtitle="全面而富有特色的课程体系，助力学生全面发展"
        imageUrl="/placeholder.svg?width=1920&height=400"
      />

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="academic" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="academic">学术课程</TabsTrigger>
            <TabsTrigger value="activities">课外活动</TabsTrigger>
            <TabsTrigger value="special">特色项目</TabsTrigger>
          </TabsList>

          <TabsContent value="academic">
            <div className="space-y-12">
              {/* 小学部 */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">小学部课程 (1-6年级)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle>语文</CardTitle>
                      <Badge variant="secondary">核心课程</Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        注重阅读理解和写作能力培养，通过经典文学作品赏析，提升学生的语言文字运用能力和文学素养。
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Calculator className="h-8 w-8 text-green-600 mb-2" />
                      <CardTitle>数学</CardTitle>
                      <Badge variant="secondary">核心课程</Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        培养数学思维和逻辑推理能力，通过趣味数学和实践应用，让学生在探索中理解数学的美妙。
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Globe className="h-8 w-8 text-purple-600 mb-2" />
                      <CardTitle>英语</CardTitle>
                      <Badge variant="secondary">核心课程</Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        采用浸润式英语教学，外教与中教相结合，培养学生的国际视野和跨文化交流能力。
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Beaker className="h-8 w-8 text-red-600 mb-2" />
                      <CardTitle>科学</CardTitle>
                      <Badge variant="outline">综合课程</Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        通过观察、实验和探究，培养学生的科学思维和动手能力，激发对自然科学的兴趣。
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Palette className="h-8 w-8 text-orange-600 mb-2" />
                      <CardTitle>艺术</CardTitle>
                      <Badge variant="outline">素养课程</Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        包括美术、音乐、书法等艺术形式，培养学生的审美能力和艺术创造力。
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Trophy className="h-8 w-8 text-yellow-600 mb-2" />
                      <CardTitle>体育</CardTitle>
                      <Badge variant="outline">素养课程</Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        全面发展学生的身体素质，开设多种体育项目，培养运动技能和团队合作精神。
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 初中部 */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">初中部课程 (7-9年级)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle>语文、数学、英语</CardTitle>
                      <Badge variant="secondary">核心基础</Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>深化基础学科知识，为未来学习打下坚实基础，注重能力培养。</CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Beaker className="h-8 w-8 text-red-600 mb-2" />
                      <CardTitle>物理、化学、生物</CardTitle>
                      <Badge variant="secondary">科学探究</Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>理科课程，重视实验教学和科学探究，培养学生的科学素养。</CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Users className="h-8 w-8 text-orange-600 mb-2" />
                      <CardTitle>历史、地理、道德与法治</CardTitle>
                      <Badge variant="secondary">人文社科</Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>人文社科课程，培养学生的人文素养和社会责任感。</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activities">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">丰富多彩的课外活动</h2>
                <p className="text-lg text-muted-foreground">培养学生综合素质，发展个性特长</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Music className="h-10 w-10 text-purple-600 mb-2" />
                    <CardTitle>艺术社团</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      包括合唱团、舞蹈队、器乐社、戏剧社等，为有艺术天赋的学生提供展示平台。
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Trophy className="h-10 w-10 text-green-600 mb-2" />
                    <CardTitle>体育俱乐部</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      多种体育项目俱乐部，培养学生运动技能，增强体质，培养团队精神。
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Beaker className="h-10 w-10 text-blue-600 mb-2" />
                    <CardTitle>科技创新</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      机器人编程、科学实验、创客空间等，培养学生的创新思维和动手能力。
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="special">
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">特色教育项目</h2>
                <p className="text-lg text-muted-foreground">独具特色的教育创新项目</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-8 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">双语实验班</CardTitle>
                    <Badge className="mb-4 w-fit">特色项目</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <CardDescription className="text-base">
                      采用中英文双语教学模式，部分学科使用英文授课，培养学生的国际视野和跨文化交流能力。
                    </CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild>
                      <Link href="/courses/bilingual-program">了解详情</Link>
                    </Button>
                  </div>
                </Card>

                <Card className="p-8 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">科技创新实验班</CardTitle>
                    <Badge className="mb-4 w-fit">特色项目</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <CardDescription className="text-base">
                      专注于培养学生的科技创新能力，提供专业的实验设备和指导，鼓励学生参与科研项目。
                    </CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild>
                      <Link href="/courses/tech-innovation-program">了解详情</Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
