import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

const tourLocations = [
  { title: "学校大门", description: "欢迎来到白云实验学校", image: "/placeholder.svg?width=400&height=225" },
  { title: "图书馆", description: "知识的海洋，思想的殿堂", image: "/placeholder.svg?width=400&height=225" },
  { title: "科学实验室", description: "探索科学奥秘，培养创新精神", image: "/placeholder.svg?width=400&height=225" },
  { title: "艺术教室", description: "挥洒创意，描绘多彩童年", image: "/placeholder.svg?width=400&height=225" },
  { title: "室内体育馆", description: "强健体魄，磨砺意志", image: "/placeholder.svg?width=400&height=225" },
  { title: "学生食堂", description: "营养美味，健康成长", image: "/placeholder.svg?width=400&height=225" },
]

export default function VirtualTourPage() {
  return (
    <main>
      <section className="relative h-[60vh] bg-muted">
        <img src="/placeholder.svg?width=1200&height=720" alt="学校鸟瞰图" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">虚拟校园导览</h1>
          <p className="text-xl max-w-2xl mb-8">足不出户，探索美丽的白云实验学校校园</p>
          <Button size="lg">
            <PlayCircle className="mr-2 h-5 w-5" />
            观看导览视频
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">探索校园设施</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourLocations.map((location, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="aspect-video relative">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{location.title}</h3>
                <p className="text-sm text-muted-foreground">{location.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
