import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import PageHeader from "@/components/page-header"

const staffData = [
  { id: 1, name: "刘校长", role: "校长", department: "行政管理", image: "/placeholder.svg?width=200&height=200" },
  { id: 2, name: "王主任", role: "教务处主任", department: "行政管理", image: "/placeholder.svg?width=200&height=200" },
  {
    id: 3,
    name: "李老师",
    role: "六年级语文老师",
    department: "小学部",
    image: "/placeholder.svg?width=200&height=200",
  },
  {
    id: 4,
    name: "张老师",
    role: "五年级数学老师",
    department: "小学部",
    image: "/placeholder.svg?width=200&height=200",
  },
  {
    id: 5,
    name: "赵老师",
    role: "八年级英语老师",
    department: "初中部",
    image: "/placeholder.svg?width=200&height=200",
  },
  {
    id: 6,
    name: "孙老师",
    role: "七年级物理老师",
    department: "初中部",
    image: "/placeholder.svg?width=200&height=200",
  },
  { id: 7, name: "陈医生", role: "校医", department: "后勤支持", image: "/placeholder.svg?width=200&height=200" },
  { id: 8, name: "周老师", role: "心理咨询师", department: "后勤支持", image: "/placeholder.svg?width=200&height=200" },
]

export default function StaffPage() {
  return (
    <main>
      <PageHeader
        title="教职工名录"
        subtitle="我们敬业、专业、充满爱心的教育团队"
        imageUrl="/placeholder.svg?width=1920&height=400"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <Button>全部</Button>
          <Button variant="outline">行政管理</Button>
          <Button variant="outline">小学部</Button>
          <Button variant="outline">初中部</Button>
          <Button variant="outline">后勤支持</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {staffData.map((staff) => (
            <Card key={staff.id} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src={staff.image || "/placeholder.svg"}
                  alt={staff.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{staff.name}</h3>
                <p className="text-muted-foreground">{staff.role}</p>
                <div className="mt-4 flex justify-center space-x-3">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Phone className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
