"use client"
import { useActionState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react"
import PageHeader from "@/components/page-header"
import { submitContactForm } from "./actions"

const initialState = {
  success: false,
  message: "",
  errors: null,
}

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <main>
      <PageHeader
        title="联系我们"
        subtitle="欢迎咨询，我们竭诚为您服务"
        imageUrl="/placeholder.svg?width=1920&height=400"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 联系信息 */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">联系信息</h2>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  学校地址
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">广州市白云区教育路123号</p>
                <p className="text-muted-foreground">邮政编码：510000</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 text-green-600 mr-2" />
                  联系电话
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="font-medium">招生咨询</p>
                  <p className="text-muted-foreground">020-8888-8888</p>
                </div>
                <div>
                  <p className="font-medium">教务处</p>
                  <p className="text-muted-foreground">020-8888-8889</p>
                </div>
                <div>
                  <p className="font-medium">学生处</p>
                  <p className="text-muted-foreground">020-8888-8890</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 text-purple-600 mr-2" />
                  电子邮箱
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="font-medium">招生邮箱</p>
                  <p className="text-muted-foreground">admission@baiyunschool.edu.cn</p>
                </div>
                <div>
                  <p className="font-medium">校长信箱</p>
                  <p className="text-muted-foreground">principal@baiyunschool.edu.cn</p>
                </div>
                <div>
                  <p className="font-medium">总务处</p>
                  <p className="text-muted-foreground">info@baiyunschool.edu.cn</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 text-orange-600 mr-2" />
                  办公时间
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>周一至周五</span>
                    <span className="font-medium">8:00 - 17:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>周六</span>
                    <span className="font-medium">9:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>周日</span>
                    <span className="font-medium">休息</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 联系表单 */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
                  在线留言
                </CardTitle>
                <CardDescription>请填写以下表单，我们会尽快回复您的咨询</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">姓名 *</Label>
                      <Input id="name" name="name" placeholder="请输入您的姓名" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">联系电话 *</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="请输入您的联系电话" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">电子邮箱</Label>
                    <Input id="email" name="email" type="email" placeholder="请输入您的邮箱地址" />
                  </div>
                  <div>
                    <Label htmlFor="category">咨询类别 *</Label>
                    <Select name="category" required>
                      <SelectTrigger>
                        <SelectValue placeholder="请选择咨询类别" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enrollment">招生咨询</SelectItem>
                        <SelectItem value="academic">学术问题</SelectItem>
                        <SelectItem value="student-life">学生生活</SelectItem>
                        <SelectItem value="other">其他问题</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="subject">主题 *</Label>
                    <Input id="subject" name="subject" placeholder="请简要描述您的咨询主题" required />
                  </div>
                  <div>
                    <Label htmlFor="message">详细内容 *</Label>
                    <Textarea id="message" name="message" placeholder="请详细描述您的问题或需求" required rows={6} />
                  </div>
                  <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isPending}>
                    <Send className="h-4 w-4 mr-2" />
                    {isPending ? "正在发送..." : "发送留言"}
                  </Button>
                  {state?.message && (
                    <p className={`text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 地图区域 */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">学校位置</h2>
          <Card className="overflow-hidden">
            <div className="aspect-[16/9] bg-muted">
              <img
                src="/placeholder.svg?width=1200&height=675"
                alt="学校地图位置"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
