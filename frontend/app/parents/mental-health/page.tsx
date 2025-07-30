import PageHeader from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Phone, Users, LinkIcon } from "lucide-react"

const resources = {
  forStudents: [
    { title: "青少年心理健康网", url: "#" },
    { title: "如何应对考试焦虑", url: "#" },
    { title: "同伴压力处理技巧", url: "#" },
  ],
  forParents: [
    { title: "如何与青少年子女沟通", url: "#" },
    { title: "识别孩子的情绪信号", url: "#" },
    { title: "营造积极的家庭氛围", url: "#" },
  ],
  helplines: [
    { name: "全国心理援助热线", number: "123-456-7890" },
    { name: "青少年希望热线", number: "098-765-4321" },
  ],
}

export default function MentalHealthPage() {
  return (
    <main>
      <PageHeader
        title="心理健康支持"
        subtitle="关爱心灵，健康成长"
        imageUrl="/placeholder.svg?width=1920&height=400"
      />
      <div className="container mx-auto px-4 py-16 space-y-16">
        <section className="text-center max-w-3xl mx-auto">
          <Heart className="h-16 w-16 text-pink-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground">我们关心每一位学生的心理健康</h2>
          <p className="text-lg text-muted-foreground mt-4">
            学校致力于为学生和家长提供一个充满关爱和支持的环境。我们提供专业的心理咨询服务和丰富的资源，帮助学生应对成长中的挑战。
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>校内心理咨询</CardTitle>
              <CardDescription>我们有专业的心理咨询师</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">学生可以预约一对一的心理咨询，所有谈话内容都将严格保密。</p>
              <p>
                <strong>咨询师:</strong> 周老师
              </p>
              <p>
                <strong>地点:</strong> 行政楼302室
              </p>
              <p>
                <strong>预约电话:</strong> 020-8888-8890
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>紧急求助热线</CardTitle>
              <CardDescription>24小时为您提供支持</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {resources.helplines.map((line) => (
                <div key={line.name} className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-red-500" />
                  <strong>{line.name}:</strong>
                  <span className="ml-2">{line.number}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>家长支持小组</CardTitle>
              <CardDescription>与其他家长交流经验</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                我们定期举办家长工作坊和支持小组活动，共同探讨家庭教育和心理健康话题。
              </p>
            </CardContent>
          </Card>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8">在线资源</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>给学生的资源</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {resources.forStudents.map((res) => (
                  <a key={res.title} href={res.url} className="flex items-center text-blue-600 hover:underline">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    {res.title}
                  </a>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-pink-500 mb-2" />
                <CardTitle>给家长的资源</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {resources.forParents.map((res) => (
                  <a key={res.title} href={res.url} className="flex items-center text-pink-600 hover:underline">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    {res.title}
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <Card className="bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800/40 p-6">
          <CardTitle>重要声明</CardTitle>
          <CardContent className="pt-4 text-yellow-800 dark:text-yellow-200">
            本页面提供的信息仅供参考，不能替代专业的医疗或心理咨询建议。如果您或您的孩子正面临严重的心理健康问题，请立即联系专业人士或紧急服务机构。
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
