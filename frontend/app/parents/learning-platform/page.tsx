import PageHeader from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, GraduationCap, BarChart, MessageSquare, ExternalLink } from "lucide-react"

export default function LearningPlatformPage() {
  return (
    <main>
      <PageHeader
        title="在线学习平台"
        subtitle="随时随地掌握孩子的学习进度"
        imageUrl="/placeholder.svg?width=1920&height=400"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <GraduationCap className="h-16 w-16 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">家校互联，智慧成长</h2>
            <p className="text-lg text-muted-foreground">
              我们的在线学习平台是一个强大的工具，旨在帮助家长深入了解并参与到孩子的学习过程中。通过这个平台，您可以轻松查看作业、跟踪成绩、与老师沟通，并获取丰富的学习资源。
            </p>
            <Button size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                访问学习平台
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?width=600&height=400"
              alt="学习平台仪表盘"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">平台主要功能</h2>
            <p className="text-muted-foreground mt-2">专为家长设计的便捷功能</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <BarChart className="h-8 w-8 text-green-600" />
                <CardTitle>成绩与进度跟踪</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  实时查看孩子的考试成绩、作业完成情况和课堂表现，全面了解学习动态。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <MessageSquare className="h-8 w-8 text-purple-600" />
                <CardTitle>便捷的家校沟通</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">直接与各科老师在线沟通，及时了解孩子在校情况，预约家长会。</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
                <CardTitle>作业与通知提醒</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">自动接收作业布置、学校通知和活动提醒，不再错过任何重要信息。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
