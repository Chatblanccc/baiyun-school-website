import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Trophy, Heart, ArrowRight, Calendar } from "lucide-react"
import ScrollingTestimonials from "@/components/scrolling-testimonials"

const testimonialsData = [
  {
    name: "张明同学",
    role: "学生",
    quote:
      "在白云实验学校的学习经历让我受益匪浅。老师们不仅在学术上给予我们悉心指导，更重要的是培养了我们的独立思考能力。",
    avatarUrl: "/placeholder.svg?width=40&height=40",
  },
  {
    name: "李女士",
    role: "家长",
    quote:
      "孩子在这里不仅学习成绩有了显著提升，更重要的是变得更加自信和独立。学校的教育理念很值得认同，我们作为家长非常放心。",
    avatarUrl: "/placeholder.svg?width=40&height=40",
  },
  {
    name: "王小华同学",
    role: "学生",
    quote: "学校丰富多彩的课外活动让我发现了自己的兴趣爱好，我参加了机器人社团，这真是太酷了！",
    avatarUrl: "/placeholder.svg?width=40&height=40",
  },
  {
    name: "陈先生",
    role: "家长",
    quote: "学校的设施很完善，无论是学习还是运动都有很好的条件。老师们对孩子非常有耐心和爱心，家校沟通也很顺畅。",
    avatarUrl: "/placeholder.svg?width=40&height=40",
  },
  {
    name: "刘悦同学",
    role: "学生",
    quote: "我最喜欢学校的图书馆，那里有很多有趣的书。在这里，我结交了很多志同道合的朋友，每天都过得很开心。",
    avatarUrl: "/placeholder.svg?width=40&height=40",
  },
]

export default function HomePage() {
  const heroImageUrl = "/placeholder.svg?width=1920&height=1080"

  return (
    <main>
      {/* 英雄部分 */}
      <section className="relative text-white py-20 md:py-32">
        <div className="absolute inset-0 -z-10">
          <img src={heroImageUrl || "/placeholder.svg"} alt="白云实验学校校园" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">欢迎来到白云实验学校</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">暨实校区 - 培养未来领导者的摇篮</p>
            <p className="text-lg mb-8 opacity-90">
              我们致力于提供卓越的教育体验，培养具有创新精神、国际视野和社会责任感的优秀学生。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">
                <Link href="/about" className="flex items-center">
                  了解更多
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 bg-transparent"
              >
                <Link href="/contact">联系我们</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 特色亮点 */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">为什么选择我们</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              白云实验学校暨实校区以其卓越的教学质量和全面的素质教育而闻名
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>优质教育</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>拥有经验丰富的教师团队，提供个性化的学习体验和全面的学科教育</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>小班教学</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>采用小班制教学模式，确保每个学生都能获得充分的关注和指导</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trophy className="h-12 w-12 mx-auto text-yellow-600 mb-4" />
                <CardTitle>卓越成就</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>学生在各类竞赛和升学考试中表现突出，获得了众多荣誉和认可</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 mx-auto text-red-600 mb-4" />
                <CardTitle>全人教育</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>注重学生的品格培养和综合素质发展，培养德智体美劳全面发展的人才</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 最新消息 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">最新消息</h2>
            <Button variant="outline">
              <Link href="/news" className="flex items-center">
                查看全部
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <img
                  src="/placeholder.svg?width=400&height=225"
                  alt="开学典礼"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  2024年1月15日
                </div>
                <CardTitle className="text-lg">2024年春季学期开学典礼圆满举行</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  新学期开学典礼在学校礼堂隆重举行，全校师生齐聚一堂，共同迎接新学期的到来...
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <img
                  src="/placeholder.svg?width=400&height=225"
                  alt="科技创新大赛"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  2024年1月10日
                </div>
                <CardTitle className="text-lg">我校学生在全国科技创新大赛中获得佳绩</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  在刚刚结束的全国青少年科技创新大赛中，我校学生代表队表现优异，获得多个奖项...
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <img
                  src="/placeholder.svg?width=400&height=225"
                  alt="新年音乐会"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  2024年1月5日
                </div>
                <CardTitle className="text-lg">新年音乐会精彩回顾</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  学校新年音乐会在师生们的精彩演出中落下帷幕，展现了我校艺术教育的丰硕成果...
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 学生评价 */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">学生和家长的声音</h2>
            <p className="text-xl text-muted-foreground">听听他们对学校的真实评价</p>
          </div>
          <ScrollingTestimonials testimonials={testimonialsData} />
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">准备好加入我们了吗？</h2>
          <p className="text-xl mb-8 opacity-90">了解更多关于入学信息和申请流程</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">立即咨询</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/courses">查看课程</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
