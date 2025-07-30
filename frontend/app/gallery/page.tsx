"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Video, PlayCircle, Loader2 } from "lucide-react"
import PageHeader from "@/components/page-header"

const galleryData = {
  photos: [
    {
      id: 1,
      title: "开学典礼",
      category: "校园活动",
      date: "2024-01-15",
      description: "2024年春季学期开学典礼现场",
      image: "/placeholder.svg?width=400&height=300",
    },
    {
      id: 2,
      title: "科技创新大赛",
      category: "学生成就",
      date: "2024-01-10",
      description: "学生参加全国科技创新大赛获奖现场",
      image: "/placeholder.svg?width=400&height=300",
    },
    {
      id: 3,
      title: "新年音乐会",
      category: "艺术表演",
      date: "2024-01-05",
      description: "学校新年音乐会精彩演出",
      image: "/placeholder.svg?width=400&height=300",
    },
    {
      id: 4,
      title: "冬季运动会",
      category: "体育活动",
      date: "2023-12-15",
      description: "学生在冬季运动会上的精彩表现",
      image: "/placeholder.svg?width=400&height=300",
    },
    {
      id: 5,
      title: "国际文化节",
      category: "国际交流",
      date: "2023-12-08",
      description: "多元文化展示活动",
      image: "/placeholder.svg?width=400&height=300",
    },
    {
      id: 6,
      title: "实验室学习",
      category: "学术学习",
      date: "2023-11-20",
      description: "学生在现代化实验室进行科学实验",
      image: "/placeholder.svg?width=400&height=300",
    },
    {
      id: 7,
      title: "艺术节画展",
      category: "艺术表演",
      date: "2023-11-15",
      description: "学生艺术节优秀作品画展",
      image: "/placeholder.svg?width=400&height=300",
    },
    {
      id: 8,
      title: "篮球比赛",
      category: "体育活动",
      date: "2023-11-10",
      description: "校际篮球友谊赛",
      image: "/placeholder.svg?width=400&height=300",
    },
    {
      id: 9,
      title: "编程马拉松",
      category: "学生成就",
      date: "2023-10-28",
      description: "高中部编程马拉松活动",
      image: "/placeholder.svg?width=400&height=300",
    },
    {
      id: 10,
      title: "秋季远足",
      category: "校园活动",
      date: "2023-10-15",
      description: "全体师生秋季远足活动",
      image: "/placeholder.svg?width=400&height=300",
    },
    {
      id: 11,
      title: "化学实验课",
      category: "学术学习",
      date: "2023-10-12",
      description: "九年级化学实验课堂",
      image: "/placeholder.svg?width=400&height=300",
    },
    {
      id: 12,
      title: "辩论赛决赛",
      category: "学生成就",
      date: "2023-09-30",
      description: "校园辩论赛总决赛",
      image: "/placeholder.svg?width=400&height=300",
    },
  ],
  videos: [
    {
      id: 1,
      title: "学校宣传片",
      duration: "5:30",
      description: "白云实验学校暨实校区2024年度宣传片",
      thumbnail: "/placeholder.svg?width=400&height=225",
    },
    {
      id: 2,
      title: "毕业典礼回顾",
      duration: "8:45",
      description: "2023年毕业典礼精彩回顾",
      thumbnail: "/placeholder.svg?width=400&height=225",
    },
    {
      id: 3,
      title: "师生访谈",
      duration: "12:20",
      description: "优秀师生代表访谈录",
      thumbnail: "/placeholder.svg?width=400&height=225",
    },
    {
      id: 4,
      title: "科学展览日",
      duration: "7:15",
      description: "年度科学展览日活动亮点集锦",
      thumbnail: "/placeholder.svg?width=400&height=225",
    },
    {
      id: 5,
      title: "校园歌手大赛",
      duration: "15:00",
      description: "第十届校园歌手大赛决赛全程录像",
      thumbnail: "/placeholder.svg?width=400&height=225",
    },
    {
      id: 6,
      title: "运动会精彩瞬间",
      duration: "4:55",
      description: "2023年秋季运动会精彩瞬间回顾",
      thumbnail: "/placeholder.svg?width=400&height=225",
    },
  ],
}

const PHOTO_PAGE_SIZE = 6
const VIDEO_PAGE_SIZE = 3
const photoCategories = ["全部", ...new Set(galleryData.photos.map((p) => p.category))]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("全部")
  const [visiblePhotosCount, setVisiblePhotosCount] = useState(PHOTO_PAGE_SIZE)
  const [isLoadingPhotos, setIsLoadingPhotos] = useState(false)

  const [visibleVideosCount, setVisibleVideosCount] = useState(VIDEO_PAGE_SIZE)
  const [isLoadingVideos, setIsLoadingVideos] = useState(false)

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "全部") {
      return galleryData.photos
    }
    return galleryData.photos.filter((photo) => photo.category === selectedCategory)
  }, [selectedCategory])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setVisiblePhotosCount(PHOTO_PAGE_SIZE)
  }

  const handleLoadMorePhotos = () => {
    setIsLoadingPhotos(true)
    setTimeout(() => {
      setVisiblePhotosCount((prevCount) => prevCount + PHOTO_PAGE_SIZE)
      setIsLoadingPhotos(false)
    }, 500) // Simulate network delay
  }

  const handleLoadMoreVideos = () => {
    setIsLoadingVideos(true)
    setTimeout(() => {
      setVisibleVideosCount((prevCount) => prevCount + VIDEO_PAGE_SIZE)
      setIsLoadingVideos(false)
    }, 500) // Simulate network delay
  }

  const visiblePhotos = filteredPhotos.slice(0, visiblePhotosCount)
  const hasMorePhotos = visiblePhotosCount < filteredPhotos.length

  const visibleVideos = galleryData.videos.slice(0, visibleVideosCount)
  const hasMoreVideos = visibleVideosCount < galleryData.videos.length

  return (
    <main>
      <PageHeader
        title="校园图库"
        subtitle="记录美好时光，分享精彩瞬间"
        imageUrl="/placeholder.svg?width=1920&height=400"
      />

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="photos" className="flex items-center">
              <Camera className="h-4 w-4 mr-2" />
              照片展示
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center">
              <Video className="h-4 w-4 mr-2" />
              视频回顾
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photos">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {photoCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visiblePhotos.map((photo) => (
                  <Card
                    key={photo.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={photo.image || "/placeholder.svg"}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="font-semibold text-lg">{photo.title}</h3>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{photo.category}</Badge>
                        <span className="text-sm text-muted-foreground">{photo.date}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                      <p className="text-sm text-muted-foreground">{photo.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                {hasMorePhotos && (
                  <Button variant="outline" size="lg" onClick={handleLoadMorePhotos} disabled={isLoadingPhotos}>
                    {isLoadingPhotos ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        加载中...
                      </>
                    ) : (
                      "加载更多图片"
                    )}
                  </Button>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">精彩视频回顾</h2>
                <p className="text-lg text-muted-foreground">通过视频了解学校生活的方方面面</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {visibleVideos.map((video) => (
                  <Card
                    key={video.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <div className="aspect-video relative overflow-hidden flex items-center justify-center">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                        <PlayCircle className="h-16 w-16 text-white/80 group-hover:text-white transition-colors" />
                      </div>
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{video.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">时长: {video.duration}</span>
                        <Button size="sm">播放视频</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                {hasMoreVideos && (
                  <Button variant="outline" size="lg" onClick={handleLoadMoreVideos} disabled={isLoadingVideos}>
                    {isLoadingVideos ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        加载中...
                      </>
                    ) : (
                      "加载更多视频"
                    )}
                  </Button>
                )}
              </div>

              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-center mb-4">视频投稿</h3>
                <p className="text-center text-muted-foreground mb-6">欢迎师生和家长分享校园生活的精彩瞬间！</p>
                <div className="text-center">
                  <Button>联系我们投稿</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
