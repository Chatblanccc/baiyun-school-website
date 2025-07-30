import PageHeader from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, Lightbulb, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function PTOPage() {
  return (
    <main>
      <PageHeader
        title="家校委员会 (PTO)"
        subtitle="携手共建更美好的校园社区"
        imageUrl="/placeholder.svg?width=1920&height=400"
      />
      <div className="container mx-auto px-4 py-16 space-y-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">我们的使命</h2>
            <p className="text-muted-foreground text-lg">
              白云实验学校家校委员会（PTO）致力于通过组织各类活动和项目，加强家长、教师和学校之间的沟通与合作，共同为孩子们创造一个积极、健康、富有支持性的学习和成长环境。
            </p>
          </div>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?width=600&height=338"
              alt="家长志愿者活动"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">核心价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-none">
              <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <CardTitle className="text-xl">合作</CardTitle>
              <CardContent className="pt-4 text-muted-foreground">
                我们相信家校之间的紧密合作是学生成功的关键。
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none">
              <Heart className="h-12 w-12 mx-auto text-red-600 mb-4" />
              <CardTitle className="text-xl">奉献</CardTitle>
              <CardContent className="pt-4 text-muted-foreground">
                我们鼓励家长志愿者积极参与，为学校社区贡献时间和才华。
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none">
              <Lightbulb className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
              <CardTitle className="text-xl">创新</CardTitle>
              <CardContent className="pt-4 text-muted-foreground">
                我们支持创新的想法和项目，以丰富学生的校园生活体验。
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted py-16 rounded-lg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">如何加入我们</h2>
              <p className="text-muted-foreground mt-2">我们欢迎所有家长的加入！</p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>成为会员</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    所有白云实验学校的学生家长自动成为PTO会员。我们鼓励您参加我们的月度会议。
                  </p>
                  <Button variant="outline">查看会议日程</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>成为志愿者</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    我们有许多需要志愿者支持的活动，如校园义卖、读书周等。您的参与至关重要。
                  </p>
                  <Button asChild>
                    <Link href="/parents/pto/volunteer">报名成为志愿者</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">联系我们</h2>
          <p className="text-muted-foreground mb-6">如果您有任何问题或建议，请随时与我们联系。</p>
          <Card className="max-w-md mx-auto p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>pto@baiyunschool.edu.cn</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>020-8888-8899 (PTO专线)</span>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </main>
  )
}
