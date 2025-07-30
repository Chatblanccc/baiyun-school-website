"use client"

import { useState } from "react"
import PageHeader from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Utensils, Wheat, Milk, Fish, Leaf } from "lucide-react"

const menuData = {
  monday: {
    main: "红烧牛肉面",
    side: "凉拌黄瓜",
    soup: "番茄鸡蛋汤",
    fruit: "苹果",
    allergens: ["gluten", "egg"],
  },
  tuesday: {
    main: "宫保鸡丁饭",
    side: "蒜蓉西兰花",
    soup: "冬瓜排骨汤",
    fruit: "香蕉",
    allergens: ["peanut", "soy"],
  },
  wednesday: {
    main: "意式肉酱面",
    side: "蔬菜沙拉",
    soup: "奶油蘑菇汤",
    fruit: "橙子",
    allergens: ["gluten", "dairy"],
  },
  thursday: {
    main: "清蒸鲈鱼饭",
    side: "蚝油生菜",
    soup: "紫菜蛋花汤",
    fruit: "葡萄",
    allergens: ["fish", "egg"],
  },
  friday: {
    main: "素食咖喱饭",
    side: "酸甜萝卜",
    soup: "玉米浓汤",
    fruit: "梨",
    allergens: ["dairy"],
    vegetarian: true,
  },
}

const allergenIcons = {
  gluten: { icon: Wheat, label: "麸质" },
  dairy: { icon: Milk, label: "乳制品" },
  fish: { icon: Fish, label: "鱼类" },
  egg: { icon: "🥚", label: "蛋类" },
  peanut: { icon: "🥜", label: "花生" },
  soy: { icon: "🌱", label: "大豆" },
}

export default function LunchMenuPage() {
  const today = new Date().toLocaleString("en-us", { weekday: "long" }).toLowerCase()
  const [activeTab, setActiveTab] = useState(Object.keys(menuData).includes(today) ? today : "monday")

  return (
    <main>
      <PageHeader title="午餐菜单" subtitle="营养均衡，美味健康" imageUrl="/placeholder.svg?width=1920&height=400" />
      <div className="container mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="monday">周一</TabsTrigger>
            <TabsTrigger value="tuesday">周二</TabsTrigger>
            <TabsTrigger value="wednesday">周三</TabsTrigger>
            <TabsTrigger value="thursday">周四</TabsTrigger>
            <TabsTrigger value="friday">周五</TabsTrigger>
          </TabsList>
          {Object.entries(menuData).map(([day, menu]) => (
            <TabsContent key={day} value={day}>
              <Card>
                <CardHeader>
                  <CardTitle className="capitalize text-2xl flex items-center">
                    <Utensils className="mr-3 h-6 w-6 text-orange-500" />
                    {new Date().toLocaleString("zh-CN", { weekday: "long" })}菜单
                  </CardTitle>
                  <CardDescription>我们致力于为学生提供营养均衡的午餐。</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">主菜</h3>
                      <p className="text-muted-foreground">{menu.main}</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">配菜</h3>
                      <p className="text-muted-foreground">{menu.side}</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">汤品</h3>
                      <p className="text-muted-foreground">{menu.soup}</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">水果</h3>
                      <p className="text-muted-foreground">{menu.fruit}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">过敏原信息</h3>
                    <div className="flex flex-wrap gap-4">
                      {menu.allergens.map((allergen) => {
                        const info = allergenIcons[allergen as keyof typeof allergenIcons]
                        if (!info) return null
                        const Icon = typeof info.icon === "string" ? null : info.icon
                        return (
                          <Badge key={allergen} variant="outline" className="p-2 text-sm">
                            {Icon ? <Icon className="h-4 w-4 mr-2" /> : <span className="mr-2">{info.icon}</span>}
                            {info.label}
                          </Badge>
                        )
                      })}
                      {menu.vegetarian && (
                        <Badge variant="outline" className="p-2 text-sm border-green-500 text-green-600">
                          <Leaf className="h-4 w-4 mr-2" />
                          素食
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="border-t pt-6 flex flex-col sm:flex-row gap-4">
                    <Button className="w-full sm:w-auto">预订本周餐点</Button>
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                      管理饮食偏好
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  )
}
