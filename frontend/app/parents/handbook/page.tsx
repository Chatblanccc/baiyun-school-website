import PageHeader from "@/components/page-header"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

const handbooks = [
  {
    id: 1,
    title: "学生行为手册",
    description: "包含学校的行为准则、奖惩制度和学生日常行为规范。",
    version: "v3.1.0",
    lastUpdated: "2024-08-01",
    fileUrl: "/path/to/student-handbook.pdf",
  },
  {
    id: 2,
    title: "校园安全指南",
    description: "详细说明了校园内的各项安全规定和应急处理流程。",
    version: "v2.5.0",
    lastUpdated: "2024-07-15",
    fileUrl: "/path/to/safety-guide.pdf",
  },
  {
    id: 3,
    title: "学术诚信政策",
    description: "关于考试、作业和研究的学术诚信要求。",
    version: "v1.8.0",
    lastUpdated: "2024-06-20",
    fileUrl: "/path/to/academic-policy.pdf",
  },
  {
    id: 4,
    title: "家校合作手册",
    description: "指导家长如何与学校有效沟通，共同促进学生成长。",
    version: "v1.2.0",
    lastUpdated: "2024-05-30",
    fileUrl: "/path/to/parent-school-cooperation.pdf",
  },
]

export default function HandbookPage() {
  return (
    <main>
      <PageHeader
        title="学校手册下载"
        subtitle="获取最新的学校规章制度和指南"
        imageUrl="/placeholder.svg?width=1920&height=400"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">家长资源中心</h2>
            <p className="text-muted-foreground mt-2">请下载并仔细阅读以下文件，以了解学校的各项政策。</p>
          </div>
          <div className="space-y-6">
            {handbooks.map((handbook) => (
              <Card key={handbook.id} className="hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row items-start sm:items-center p-6 gap-6">
                  <FileText className="h-12 w-12 text-blue-600 flex-shrink-0" />
                  <div className="flex-grow">
                    <CardTitle className="text-xl mb-1">{handbook.title}</CardTitle>
                    <CardDescription>{handbook.description}</CardDescription>
                    <div className="text-xs text-muted-foreground mt-2">
                      <span>版本: {handbook.version}</span> | <span>最后更新: {handbook.lastUpdated}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full sm:w-auto mt-4 sm:mt-0">
                    <a href={handbook.fileUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      下载 PDF
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
