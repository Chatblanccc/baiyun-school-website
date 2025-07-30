import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Trophy, Heart, Music, BookOpen, Gamepad2, Camera, Globe } from "lucide-react"
import PageHeader from "@/components/page-header"

const clubsData = [
  {
    id: 1,
    name: "学生会",
    category: "学生组织",
    members: 45,
    description: "学生自治组织，负责组织各类校园活动，维护学生权益",
    icon: Users,
    color: "text-blue-600",
  },
  {
    id: 2,
    name: "文学社",
    category: "文化艺术",
    members: 32,
    description: "为热爱文学创作的同学提供交流平台，定期举办诗歌朗诵会",
    icon: BookOpen,
    color: "text-purple-600",
  },
  {
    id: 3,
    name: "合唱团",
    category: "文化艺术",
    members: 60,
    description: "学校重点艺术团体，多次在市级比赛中获奖",
    icon: Music,
    color: "text-pink-600",
  },
  {
    id: 4,
    name: "摄影社",
    category: "兴趣爱好",
    members: 28,
    description: "记录校园美好时光，培养同学们的摄影技能和艺术素养",
    icon: Camera,
    color: "text-green-600",
  },
  {
    id: 5,
    name: "英语角",
    category: "学术学习",
    members: 55,
    description: "提供英语交流平台，有外教定期参与，提升口语能力",
    icon: Globe,
    color: "text-orange-600",
  },
  {
    id: 6,
    name: "电竞社",
    category: "兴趣爱好",
    members: 40,
    description: "健康的电子竞技活动，培养团队协作和策略思维",
    icon: Gamepad2,
    color: "text-red-600",
  },
]

const sportsData = [
  {
    name: "足球队",
    level: "校队",
    achievements: "市级联赛冠军",
    members: 25,
    coach: "李教练",
  },
  {
    name: "篮球队",
    level: "校队",
    achievements: "区级比赛亚军",
    members: 18,
    coach: "王教练",
  },
  {
    name: "游泳队",
    level: "校队",
    achievements: "省级比赛第三名",
    members: 20,
    coach: "张教练",
  },
  {
    name: "田径队",
    level: "校队",
    achievements: "市运动会多项第一",
    members: 35,
    coach: "陈教练",
  },
  {
    name: "乒乓球社",
    level: "社团",
    achievements: "校际友谊赛冠军",
    members: 30,
    coach: "学生教练",
  },
  {
    name: "羽毛球社",
    level: "社团",
    achievements: "新兴社团",
    members: 25,
    coach: "学生教练",
  },
]

export default function StudentLifePage() {
  return (
    <main>
      <PageHeader
        title="学生生活"
        subtitle="丰富多彩的校园生活，全面发展的成长平台"
        imageUrl="/placeholder.svg?width=1920&height=400"
      />

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="clubs" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="clubs">学生社团</TabsTrigger>
            <TabsTrigger value="sports">体育运动</TabsTrigger>
            <TabsTrigger value="daily">校园生活</TabsTrigger>
          </TabsList>

          <TabsContent value="clubs">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">学生社团</h2>
                <p className="text-lg text-muted-foreground mb-8">发现兴趣，展现才华，结交志同道合的伙伴</p>
              </div>

              {/* 社团统计 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-sm text-muted-foreground">活跃社团</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">800+</div>
                  <div className="text-sm text-muted-foreground">参与学生</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-muted-foreground">年度活动</div>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">15+</div>
                  <div className="text-sm text-muted-foreground">获奖项目</div>
                </div>
              </div>

              {/* 社团展示 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubsData.map((club) => {
                  const IconComponent = club.icon
                  return (
                    <Card key={club.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <IconComponent className={`h-8 w-8 ${club.color}`} />
                          <Badge variant="secondary">{club.category}</Badge>
                        </div>
                        <CardTitle className="text-xl">{club.name}</CardTitle>
                        <CardDescription>成员数量: {club.members}人</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{club.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">活跃度很高</span>
                          <span className={`text-sm font-medium ${club.color}`}>了解更多</span>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* 加入社团指南 */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-center mb-6">如何加入社团？</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 dark:text-blue-300 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">选择感兴趣的社团</h4>
                    <p className="text-sm text-muted-foreground">了解各社团的活动内容和要求</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 dark:text-purple-300 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">提交申请表</h4>
                    <p className="text-sm text-muted-foreground">填写社团申请表并提交相关材料</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 dark:text-green-300 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">参加面试或试演</h4>
                    <p className="text-sm text-muted-foreground">展示你的兴趣和能力，开始精彩的社团生活</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sports">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">体育运动</h2>
                <p className="text-lg text-muted-foreground mb-8">强健体魄，磨砺意志，团结协作</p>
              </div>

              {/* 体育设施 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center p-6">
                  <Trophy className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
                  <CardTitle className="text-lg mb-2">标准运动场</CardTitle>
                  <CardDescription>400米标准跑道</CardDescription>
                </Card>
                <Card className="text-center p-6">
                  <Trophy className="h-12 w-12 mx-auto text-blue-500 mb-4" />
                  <CardTitle className="text-lg mb-2">室内体育馆</CardTitle>
                  <CardDescription>篮球、羽毛球场地</CardDescription>
                </Card>
                <Card className="text-center p-6">
                  <Trophy className="h-12 w-12 mx-auto text-green-500 mb-4" />
                  <CardTitle className="text-lg mb-2">游泳馆</CardTitle>
                  <CardDescription>50米标准泳池</CardDescription>
                </Card>
                <Card className="text-center p-6">
                  <Trophy className="h-12 w-12 mx-auto text-purple-500 mb-4" />
                  <CardTitle className="text-lg mb-2">健身房</CardTitle>
                  <CardDescription>现代化健身器材</CardDescription>
                </Card>
              </div>

              {/* 运动队展示 */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">运动队介绍</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sportsData.map((sport, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <CardTitle className="text-xl">{sport.name}</CardTitle>
                        <Badge variant={sport.level === "校队" ? "default" : "secondary"}>{sport.level}</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">成员数量:</span>
                          <span className="font-medium">{sport.members}人</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">指导教练:</span>
                          <span className="font-medium">{sport.coach}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">主要成就:</span>
                          <span className="font-medium text-green-600">{sport.achievements}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* 体育活动日程 */}
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-center mb-6">每周体育活动安排</h3>
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                  {["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((day, index) => (
                    <div key={day} className="text-center">
                      <h4 className="font-semibold mb-2">{day}</h4>
                      <div className="space-y-1 text-sm">
                        {index < 5 ? (
                          <>
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded">晨练</div>
                            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">体育课</div>
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded">社团活动</div>
                          </>
                        ) : index === 5 ? (
                          <>
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded">校队训练</div>
                            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">友谊赛</div>
                          </>
                        ) : (
                          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">自由活动</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="daily">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">校园日常生活</h2>
                <p className="text-lg text-muted-foreground mb-8">温馨和谐的校园环境，充实有序的学习生活</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card>
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src="/placeholder.svg?width=600&height=338"
                        alt="学校食堂"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Heart className="h-6 w-6 text-red-500 mr-2" />
                        餐饮服务
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 营养均衡的三餐供应</li>
                        <li>• 清真食堂满足不同需求</li>
                        <li>• 新鲜水果和健康小食</li>
                        <li>• 专业营养师配餐</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src="/placeholder.svg?width=600&height=338"
                        alt="学生宿舍"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Users className="h-6 w-6 text-green-500 mr-2" />
                        生活支持
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 24小时安保服务</li>
                        <li>• 专业心理咨询师</li>
                        <li>• 医务室健康保障</li>
                        <li>• 生活老师贴心照顾</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src="/placeholder.svg?width=600&height=338"
                      alt="学校图书馆"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-6 w-6 text-blue-500 mr-2" />
                      学习环境
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 现代化多媒体教室</li>
                      <li>• 藏书丰富的图书馆</li>
                      <li>• 安静舒适的自习室</li>
                      <li>• 高速无线网络覆盖</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* 学生感言 */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-center mb-8">学生感言</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">👨‍🎓</span>
                    </div>
                    <CardTitle className="text-lg mb-2">李明同学</CardTitle>
                    <CardDescription>
                      "在这里我找到了志同道合的朋友，参加社团让我发现了自己的潜能，学校生活非常充实有意义。"
                    </CardDescription>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">👩‍🎓</span>
                    </div>
                    <CardTitle className="text-lg mb-2">王小雅同学</CardTitle>
                    <CardDescription>
                      "老师和同学们都很友善，学校的各种活动让我们在学习之余也能全面发展自己的兴趣爱好。"
                    </CardDescription>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">👨‍🎓</span>
                    </div>
                    <CardTitle className="text-lg mb-2">陈浩然同学</CardTitle>
                    <CardDescription>
                      "学校的设施很完善，无论是学习还是运动都有很好的条件，这里真的是一个让人成长的地方。"
                    </CardDescription>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
