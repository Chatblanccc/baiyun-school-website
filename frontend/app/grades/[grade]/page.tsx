import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import PageHeader from "@/components/page-header"

// 模拟获取年级数据的函数
const getGradeData = (grade: string) => {
  const gradeNum = Number.parseInt(grade)
  if (isNaN(gradeNum) || gradeNum < 1 || gradeNum > 9) {
    return null
  }

  const isPrimary = gradeNum <= 6
  const baseData = {
    grade: gradeNum,
    stage: isPrimary ? "小学" : "初中",
    headTeacher: `王老师 (Grade ${grade} Lead)`,
    teachers: [
      { name: "李老师", subject: "语文" },
      { name: "张老师", subject: "数学" },
      { name: "赵老师", subject: "英语" },
    ],
    curriculum: [
      { title: "核心课程", description: "语文、数学、英语等基础学科。" },
      { title: "拓展课程", description: "科学、信息技术、体育与健康。" },
      { title: "艺术素养", description: "音乐、美术、书法等。" },
    ],
    activities: [
      { name: "春季研学旅行", image: "/placeholder.svg?width=400&height=225" },
      { name: "校园读书节", image: "/placeholder.svg?width=400&height=225" },
      { name: "科技制作比赛", image: "/placeholder.svg?width=400&height=225" },
    ],
  }

  if (!isPrimary) {
    baseData.teachers.push({ name: "孙老师", subject: "物理" })
    baseData.curriculum[1].description = "物理、化学、生物、信息技术。"
  }

  return baseData
}

export default function GradePage({ params }: { params: { grade: string } }) {
  const data = getGradeData(params.grade)

  if (!data) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">未找到该年级</h1>
        <p className="mt-4 text-muted-foreground">您所请求的年级页面不存在。</p>
      </div>
    )
  }

  return (
    <main>
      <PageHeader
        title={`${data.grade} 年级`}
        subtitle={`${data.stage}阶段 - ${data.grade === 1 ? "开启学习新篇章" : "探索知识新天地"}`}
        imageUrl="/placeholder.svg?width=1920&height=400"
      />

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* 课程亮点 */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">课程亮点</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.curriculum.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 教师团队 */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">教师团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="col-span-1 md:col-span-2 lg:col-span-4 bg-muted p-6 text-center">
              <img
                src="/placeholder.svg?width=128&height=128"
                alt={data.headTeacher}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{data.headTeacher}</h3>
              <p className="text-muted-foreground">年级组长</p>
            </Card>
            {data.teachers.map((teacher, index) => (
              <Card key={index} className="text-center p-4">
                <img
                  src="/placeholder.svg?width=96&height=96"
                  alt={teacher.name}
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                />
                <h4 className="font-semibold">{teacher.name}</h4>
                <p className="text-sm text-muted-foreground">{teacher.subject} 老师</p>
              </Card>
            ))}
          </div>
        </section>

        {/* 特色活动 */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">年度特色活动</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="aspect-video relative">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{activity.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
