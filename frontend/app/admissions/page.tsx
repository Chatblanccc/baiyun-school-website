"use client"

import { useActionState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"
import PageHeader from "@/components/page-header"
import { submitAdmissionsInquiry } from "./actions"

const initialState = {
  success: false,
  message: "",
  errors: null,
}

export default function AdmissionsPage() {
  const [state, formAction, isPending] = useActionState(submitAdmissionsInquiry, initialState)

  return (
    <main>
      <PageHeader
        title="招生信息"
        subtitle="欢迎加入白云实验学校大家庭"
        imageUrl="/placeholder.svg?width=1920&height=400"
      />

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* 招生流程 */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">招生流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">1</span>
              </div>
              <h3 className="text-lg font-semibold">在线咨询</h3>
              <p className="text-sm text-muted-foreground">通过网站或电话初步了解学校情况。</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">2</span>
              </div>
              <h3 className="text-lg font-semibold">提交申请</h3>
              <p className="text-sm text-muted-foreground">在线填写并提交入学申请表格。</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">3</span>
              </div>
              <h3 className="text-lg font-semibold">校园体验</h3>
              <p className="text-sm text-muted-foreground">邀请学生和家长参加校园开放日和面试。</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">4</span>
              </div>
              <h3 className="text-lg font-semibold">录取通知</h3>
              <p className="text-sm text-muted-foreground">发放录取通知书并办理入学手续。</p>
            </div>
          </div>
        </section>

        {/* 申请要求和在线申请 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">申请要求</h2>
            <img
              src="/placeholder.svg?width=600&height=400"
              alt="学生在课堂上"
              className="w-full h-auto rounded-lg mb-6 object-cover"
            />
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>符合入学年龄要求的适龄儿童。</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>认同我校的教育理念和价值观。</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>提供完整的申请材料，包括户口本、出生证明等。</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>通过学校组织的入学评估和面试。</span>
              </li>
            </ul>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>在线申请咨询</CardTitle>
              <CardDescription>请填写以下信息，我们的招生老师会尽快与您联系。</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <div>
                  <Label htmlFor="studentName">学生姓名</Label>
                  <Input id="studentName" name="studentName" placeholder="请输入学生姓名" required />
                </div>
                <div>
                  <Label htmlFor="applyGrade">申请年级</Label>
                  <Input id="applyGrade" name="applyGrade" placeholder="例如：一年级" required />
                </div>
                <div>
                  <Label htmlFor="parentName">家长姓名</Label>
                  <Input id="parentName" name="parentName" placeholder="请输入家长姓名" required />
                </div>
                <div>
                  <Label htmlFor="parentPhone">联系电话</Label>
                  <Input id="parentPhone" name="parentPhone" type="tel" placeholder="请输入您的联系电话" required />
                </div>
                <div>
                  <Label htmlFor="message">留言</Label>
                  <Textarea id="message" name="message" placeholder="如果您有任何问题，请在此留言" />
                </div>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "正在提交..." : "提交申请咨询"}
                </Button>
                {state?.message && (
                  <p className={`mt-4 text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
