import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Book, Users, LinkIcon, Utensils, Heart, GraduationCap } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function ParentsPage() {
  return (
    <main>
      <PageHeader title="家长中心" subtitle="家校携手，共育未来" imageUrl="/placeholder.svg?width=1920&height=400" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader>
              <Calendar className="h-10 w-10 text-emerald-600 mb-4" />
              <CardTitle>活动日历</CardTitle>
              <CardDescription>查看学校重要日期、假期安排和家长会时间。</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
              <img
                src="/placeholder.svg?width=400&height=225"
                alt="活动日历"
                className="w-full h-auto rounded-md mb-4 object-cover"
              />
              <Button className="w-full" asChild>
                <Link href="/parents/calendar">查看日历</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader>
              <Book className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>学校手册</CardTitle>
              <CardDescription>了解学生手册、行为准则和安全规定等重要文件。</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
              <img
                src="/placeholder.svg?width=400&height=225"
                alt="学校手册"
                className="w-full h-auto rounded-md mb-4 object-cover"
              />
              <Button className="w-full" asChild>
                <Link href="/parents/handbook">下载手册</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader>
              <Users className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>家校委员会 (PTO)</CardTitle>
              <CardDescription>加入我们，参与学校活动，为学校发展贡献力量。</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
              <img
                src="/placeholder.svg?width=400&height=225"
                alt="家校委员会"
                className="w-full h-auto rounded-md mb-4 object-cover"
              />
              <Button className="w-full" asChild>
                <Link href="/parents/pto">了解更多</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-3 hover:shadow-lg transition-shadow">
            <CardHeader>
              <LinkIcon className="h-10 w-10 text-orange-600 mb-4" />
              <CardTitle>家长资源</CardTitle>
              <CardDescription>提供有用的学习资源、讲座信息和家庭教育建议。</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" asChild>
                <Link href="/parents/learning-platform">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  在线学习平台
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/parents/mental-health">
                  <Heart className="mr-2 h-4 w-4" />
                  心理健康支持
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/parents/lunch-menu">
                  <Utensils className="mr-2 h-4 w-4" />
                  午餐菜单
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
