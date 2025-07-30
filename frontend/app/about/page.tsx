import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Award, Users2, BookOpen, Heart } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="关于我们"
        subtitle="了解白云实验学校暨实校区的历史、使命与愿景"
        imageUrl="/placeholder.svg?width=1920&height=400"
      />

      {/* 学校简介 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">白云实验学校暨实校区</h2>
              <div className="prose prose-lg max-w-none prose-p:text-muted-foreground">
                <p className="text-muted-foreground mb-6">
                  白云实验学校暨实校区成立于2008年，是一所集小学、初中为一体的现代化实验学校。
                  学校秉承"博学笃行，止于至善"的校训，致力于培养具有国际视野、创新精神和社会责任感的优秀人才。
                </p>
                <p className="text-muted-foreground mb-6">
                  经过十多年的发展，学校已成为广州市优质教育资源的重要组成部分。我们拥有一支高素质的教师队伍，
                  现代化的教学设施，以及科学完善的管理体系，为学生提供优质的教育服务。
                </p>
                <p className="text-muted-foreground">
                  学校占地面积120亩，建筑面积8万平方米，设施完善，环境优美。现有学生2800余名，
                  教职工260余名，其中高级教师占35%，硕士研究生以上学历教师占60%。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?width=600&height=450"
                  alt="白云实验学校校园"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">学校主教学楼</p>
            </div>
          </div>
        </div>
      </section>

      {/* 使命愿景 */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">我们的使命与愿景</h2>
            <p className="text-xl text-muted-foreground">指引我们前进的核心价值和目标</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="text-center p-8">
              <CardHeader>
                <Target className="h-16 w-16 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-2xl">我们的使命</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  为每一位学生提供优质的教育服务，培养具有创新精神、国际视野和社会责任感的未来领导者，
                  让每个孩子都能在这里发现自己的潜能，实现全面发展。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <Eye className="h-16 w-16 mx-auto text-purple-600 mb-4" />
                <CardTitle className="text-2xl">我们的愿景</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  成为华南地区最具影响力的实验学校，以卓越的教育质量和创新的教学模式，
                  培养出一批又一批优秀的学生，为社会发展贡献力量。
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* 核心价值观 */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">核心价值观</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">追求卓越</h4>
                <p className="text-muted-foreground">在教学、研究和服务的各个方面都追求最高标准</p>
              </div>
              <div className="flex flex-col items-center">
                <Users2 className="h-12 w-12 text-green-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">协作共赢</h4>
                <p className="text-muted-foreground">倡导团队合作，共同成长，实现师生共同发展</p>
              </div>
              <div className="flex flex-col items-center">
                <Heart className="h-12 w-12 text-red-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">关爱包容</h4>
                <p className="text-muted-foreground">关爱每一个学生，尊重个体差异，包容多元文化</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 学校历史 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">学校发展历程</h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

            <div className="space-y-12">
              <div className="relative flex items-center">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <Badge className="mb-2">2008年</Badge>
                  <h3 className="text-xl font-semibold mb-2">学校成立</h3>
                  <p className="text-muted-foreground">
                    白云实验学校暨实校区正式成立，开始招收首批学生，奠定了学校发展的基础。
                  </p>
                </div>
              </div>

              <div className="relative flex items-center md:flex-row-reverse">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <Badge className="mb-2">2012年</Badge>
                  <h3 className="text-xl font-semibold mb-2">首届毕业生</h3>
                  <p className="text-muted-foreground">首届初中毕业生全部考入重点高中，创造了优异的成绩。</p>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <Badge className="mb-2">2016年</Badge>
                  <h3 className="text-xl font-semibold mb-2">设施升级</h3>
                  <p className="text-muted-foreground">
                    投资2000万元升级改造教学设施，建设现代化实验室、图书馆和体育场馆。
                  </p>
                </div>
              </div>

              <div className="relative flex items-center md:flex-row-reverse">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <Badge className="mb-2">2020年</Badge>
                  <h3 className="text-xl font-semibold mb-2">荣誉认证</h3>
                  <p className="text-muted-foreground">
                    获得"广州市义务教育标准化学校"称号，成为区域内知名的优质教育品牌。
                  </p>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <Badge className="mb-2">2024年</Badge>
                  <h3 className="text-xl font-semibold mb-2">持续发展</h3>
                  <p className="text-muted-foreground">
                    学校继续深化教育改革，推进国际化办学，为培养更多优秀人才而努力。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 荣誉成就 */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">荣誉与成就</h2>
            <p className="text-xl text-muted-foreground">多年来获得的重要认可和成就</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Award className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
              <CardTitle className="text-lg mb-2">广州市义务教育标准化学校</CardTitle>
              <CardDescription>2020年获得认证</CardDescription>
            </Card>

            <Card className="text-center p-6">
              <Award className="h-12 w-12 mx-auto text-blue-500 mb-4" />
              <CardTitle className="text-lg mb-2">全国教育创新学校</CardTitle>
              <CardDescription>2019年荣誉称号</CardDescription>
            </Card>

            <Card className="text-center p-6">
              <Award className="h-12 w-12 mx-auto text-green-500 mb-4" />
              <CardTitle className="text-lg mb-2">省级文明校园</CardTitle>
              <CardDescription>2021年获得表彰</CardDescription>
            </Card>

            <Card className="text-center p-6">
              <Award className="h-12 w-12 mx-auto text-purple-500 mb-4" />
              <CardTitle className="text-lg mb-2">优秀教学成果奖</CardTitle>
              <CardDescription>2022年省级奖项</CardDescription>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
