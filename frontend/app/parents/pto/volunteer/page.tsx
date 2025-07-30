"use client"

import { useActionState } from "react"
import PageHeader from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { submitVolunteerApplication } from "./actions"
import { HandHeart, Sparkles, Send, Loader2 } from "lucide-react"

const availabilityOptions = [
  { id: "weekdays-morning", label: "工作日 上午" },
  { id: "weekdays-afternoon", label: "工作日 下午" },
  { id: "evenings", label: "晚上" },
  { id: "weekends", label: "周末" },
  { id: "special-events", label: "特定活动日" },
]

const roleOptions = [
  { id: "event-support", label: "活动支持 (如校运会、艺术节)" },
  { id: "classroom-helper", label: "班级助理 (协助老师)" },
  { id: "fundraising-committee", label: "筹款委员会" },
  { id: "library-assistant", label: "图书馆助理" },
  { id: "communications", label: "宣传工作 (如撰写通讯稿)" },
]

const initialState = {
  success: false,
  message: "",
  errors: null,
}

export default function VolunteerPage() {
  const [state, formAction, isPending] = useActionState(submitVolunteerApplication, initialState)

  return (
    <main>
      <PageHeader
        title="成为志愿者"
        subtitle="您的参与，让校园更美好"
        imageUrl="/placeholder.svg?width=1920&height=400"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <HandHeart className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>为什么成为志愿者？</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• 更深入地了解孩子的学校生活。</p>
                <p>• 与其他家长和老师建立联系。</p>
                <p>• 为学校社区贡献您的宝贵技能。</p>
                <p>• 成为孩子成长道路上的榜样。</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Sparkles className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>志愿者机会</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>我们提供多种多样的志愿者岗位，无论您有多少时间，总有适合您的方式来参与其中。</p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">志愿者申请表</CardTitle>
                <CardDescription>请填写以下信息，我们期待您的加入！</CardDescription>
              </CardHeader>
              <CardContent>
                {state.success ? (
                  <div className="text-center p-8 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Sparkles className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">申请已提交！</h3>
                    <p className="text-green-600 dark:text-green-400 mt-2">{state.message}</p>
                  </div>
                ) : (
                  <form action={formAction} className="space-y-8">
                    {/* Personal Information */}
                    <fieldset className="space-y-4">
                      <legend className="text-lg font-semibold mb-2">个人信息</legend>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">姓名</Label>
                          <Input id="name" name="name" placeholder="请输入您的姓名" required />
                          {state.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">电子邮箱</Label>
                        <Input id="email" name="email" type="email" placeholder="请输入您的邮箱" required />
                        {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>}
                      </div>
                      <div>
                        <Label htmlFor="phone">联系电话</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="请输入您的电话" required />
                        {state.errors?.phone && <p className="text-red-500 text-sm mt-1">{state.errors.phone[0]}</p>}
                      </div>
                    </fieldset>

                    {/* Availability */}
                    <fieldset className="space-y-4">
                      <legend className="text-lg font-semibold">您的可用时间</legend>
                      <div className="grid grid-cols-2 gap-4">
                        {availabilityOptions.map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox id={option.id} name="availability" value={option.id} />
                            <Label htmlFor={option.id}>{option.label}</Label>
                          </div>
                        ))}
                      </div>
                      {state.errors?.availability && (
                        <p className="text-red-500 text-sm">{state.errors.availability[0]}</p>
                      )}
                    </fieldset>

                    {/* Preferred Roles */}
                    <fieldset className="space-y-4">
                      <legend className="text-lg font-semibold">您感兴趣的志愿者角色</legend>
                      <div className="space-y-2">
                        {roleOptions.map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox id={option.id} name="roles" value={option.id} />
                            <Label htmlFor={option.id}>{option.label}</Label>
                          </div>
                        ))}
                      </div>
                      {state.errors?.roles && <p className="text-red-500 text-sm">{state.errors.roles[0]}</p>}
                    </fieldset>

                    {/* Skills and Interests */}
                    <fieldset>
                      <Label htmlFor="skills" className="text-lg font-semibold">
                        您的技能或兴趣 (选填)
                      </Label>
                      <Textarea
                        id="skills"
                        name="skills"
                        placeholder="例如：活动策划、平面设计、摄影、烘焙等"
                        className="mt-2"
                      />
                    </fieldset>

                    <p className="text-xs text-muted-foreground">
                      我们尊重您的隐私。您提交的信息将仅用于PTO志愿者协调工作。
                    </p>

                    {state.message && !state.success && (
                      <p className="text-red-500 text-sm text-center">{state.message}</p>
                    )}

                    <Button type="submit" className="w-full" disabled={isPending}>
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          正在提交...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          提交申请
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
