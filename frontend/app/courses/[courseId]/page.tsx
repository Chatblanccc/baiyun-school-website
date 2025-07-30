"use client"

import { useActionState } from "react"
import PageHeader from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Book, Calendar, Users, Languages, Send } from "lucide-react"
import { registerForCourse } from "./actions"

// Mock data fetching function. Replace with actual API call.
const getCourseData = (courseId: string) => {
  const courses = {
    "bilingual-program": {
      id: "bilingual-program",
      title: "双语实验班",
      subtitle: "沉浸式中英双语环境，培养国际化人才",
      description:
        "采用中英文双语教学模式，部分学科使用英文授课，培养学生的国际视野和跨文化交流能力。课程旨在提升学生的语言能力、跨文化理解力和批判性思维。",
      imageUrl: "/placeholder.svg?width=1920&height=400",
      instructor: {
        name: "Dr. Emily Carter",
        title: "双语项目负责人",
        bio: "Dr. Carter 拥有超过15年的国际教育经验，专注于双语教学法研究，曾在多所国际学校担任领导职务。",
        avatarUrl: "/placeholder.svg?width=100&height=100",
      },
      details: {
        gradeLevel: "1-6 年级",
        duration: "1学年",
        language: "中文 & 英文",
      },
      syllabus: [
        { week: 1, topic: "Introduction to Bilingual Learning", details: "设定学习目标，理解双语学习的益处。" },
        { week: 2, topic: "English Literature: Classic Tales", details: "阅读和分析英文经典故事。" },
        { week: 3, topic: "中文国学启蒙", details: "学习《三字经》、《弟子规》等国学经典。" },
        { week: 4, topic: "Science in English", details: "用英语学习基础科学概念。" },
      ],
      prerequisites: ["对英语学习有浓厚兴趣", "通过入学语言能力评估", "家长认同双语教育理念"],
    },
    "tech-innovation-program": {
      id: "tech-innovation-program",
      title: "科技创新实验班",
      subtitle: "探索前沿科技，培养未来发明家",
      description:
        "专注于培养学生的科技创新能力，提供专业的实验设备和指导，鼓励学生参与科研项目。课程涵盖编程、机器人、3D打印等领域。",
      imageUrl: "/placeholder.svg?width=1920&height=400",
      instructor: {
        name: "张伟教授",
        title: "科技创新项目导师",
        bio: "张教授是机器人和人工智能领域的专家，拥有多项发明专利，致力于青少年科技教育的普及与发展。",
        avatarUrl: "/placeholder.svg?width=100&height=100",
      },
      details: {
        gradeLevel: "7-9 年级",
        duration: "1学年",
        language: "中文",
      },
      syllabus: [
        { week: 1, topic: "编程基础：Python入门", details: "学习Python语言的基本语法和逻辑控制。" },
        { week: 2, topic: "机器人导论", details: "了解机器人的基本构成和工作原理。" },
        { week: 3, topic: "3D建模与打印", details: "学习使用Tinkercad进行3D建模并实际打印作品。" },
        { week: 4, topic: "项目实践：智能小车", details: "分组完成智能避障小车的设计与制作。" },
      ],
      prerequisites: ["对计算机科学和工程有浓厚兴趣", "具备基本的逻辑思维能力", "有团队合作精神"],
    },
  }
  return courses[courseId as keyof typeof courses] || null
}

const initialState = {
  success: false,
  message: "",
  errors: null,
}

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const course = getCourseData(params.courseId)
  const [state, formAction, isPending] = useActionState(registerForCourse, initialState)

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">课程未找到</h1>
        <p className="mt-4 text-muted-foreground">您所请求的课程页面不存在。</p>
      </div>
    )
  }

  return (
    <main>
      <PageHeader title={course.title} subtitle={course.subtitle} imageUrl={course.imageUrl} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 左侧内容区 */}
          <div className="lg:col-span-2 space-y-12">
            {/* 课程描述 */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">课程介绍</h2>
              <p className="text-muted-foreground text-lg">{course.description}</p>
            </section>

            {/* 教学大纲 */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">教学大纲</h2>
              <Accordion type="single" collapsible className="w-full">
                {course.syllabus.map((item) => (
                  <AccordionItem key={item.week} value={`item-${item.week}`}>
                    <AccordionTrigger className="text-lg">
                      第 {item.week} 周: {item.topic}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{item.details}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* 先修要求 */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">先修要求</h2>
              <ul className="space-y-3">
                {course.prerequisites.map((req, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* 右侧信息卡片 */}
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>课程详情</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Book className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span>{course.title}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span>{course.details.gradeLevel}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span>{course.details.duration}</span>
                </div>
                <div className="flex items-center">
                  <Languages className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span>{course.details.language}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>授课教师</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={course.instructor.avatarUrl || "/placeholder.svg"} alt={course.instructor.name} />
                  <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{course.instructor.name}</h3>
                  <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                </div>
              </CardContent>
              <CardContent>
                <p className="text-sm text-muted-foreground">{course.instructor.bio}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 报名表单 */}
        <section id="register" className="mt-20 py-16 bg-muted rounded-lg">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-2 text-center">报名参加课程</h2>
              <p className="text-muted-foreground mb-8 text-center">填写以下信息，立即锁定您的名额！</p>
              <Card>
                <CardContent className="p-6">
                  <form action={formAction} className="space-y-4">
                    <input type="hidden" name="courseId" value={course.id} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="studentName">学生姓名</Label>
                        <Input id="studentName" name="studentName" placeholder="请输入学生姓名" required />
                      </div>
                      <div>
                        <Label htmlFor="studentGrade">学生当前年级</Label>
                        <Input id="studentGrade" name="studentGrade" placeholder="例如：三年级" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="parentName">家长姓名</Label>
                        <Input id="parentName" name="parentName" placeholder="请输入家长姓名" required />
                      </div>
                      <div>
                        <Label htmlFor="parentPhone">家长电话</Label>
                        <Input id="parentPhone" name="parentPhone" type="tel" placeholder="请输入联系电话" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="parentEmail">家长邮箱</Label>
                      <Input id="parentEmail" name="parentEmail" type="email" placeholder="用于接收确认信息" required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isPending}>
                      <Send className="h-4 w-4 mr-2" />
                      {isPending ? "正在提交..." : "确认报名"}
                    </Button>
                  </form>
                  {state?.message && (
                    <div className={`mt-4 text-center text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>
                      {state.message}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
