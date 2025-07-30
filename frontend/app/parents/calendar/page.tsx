"use client"

import { useState } from "react"
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isToday,
} from "date-fns"
import { zhCN } from "date-fns/locale"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react"

// Mock Data
const events = [
  { id: 1, date: "2025-08-05", title: "家长会", category: "meetings", color: "bg-blue-500" },
  { id: 2, date: "2025-08-15", title: "期中考试", category: "academics", color: "bg-purple-500" },
  { id: 3, date: "2025-08-22", title: "校运会", category: "sports", color: "bg-green-500" },
  { id: 4, date: "2025-08-29", title: "学校假期", category: "holidays", color: "bg-orange-500" },
  { id: 5, date: "2025-09-01", title: "开学日", category: "academics", color: "bg-purple-500" },
]

const eventCategories = [
  { id: "meetings", label: "家长会", color: "bg-blue-500" },
  { id: "academics", label: "学术活动", color: "bg-purple-500" },
  { id: "sports", label: "体育赛事", color: "bg-green-500" },
  { id: "holidays", label: "学校假期", color: "bg-orange-500" },
]

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedCategories, setSelectedCategories] = useState<string[]>(eventCategories.map((c) => c.id))

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)
  const days = eachDayOfInterval({ start: startDate, end: endDate })

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const filteredEvents = events.filter((event) => selectedCategories.includes(event.category))

  return (
    <main>
      <PageHeader
        title="学校日历"
        subtitle="掌握所有重要日期和活动安排"
        imageUrl="/placeholder.svg?width=1920&height=400"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters and Upcoming Events */}
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>筛选事件</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {eventCategories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => handleCategoryChange(category.id)}
                    />
                    <Label htmlFor={category.id} className="flex items-center">
                      <span className={`h-3 w-3 rounded-full mr-2 ${category.color}`}></span>
                      {category.label}
                    </Label>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>订阅日历</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  订阅 iCal
                </Button>
                <Button className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  添加到 Google 日历
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Calendar */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <h2 className="text-2xl font-bold">{format(currentDate, "yyyy年 MMMM", { locale: zhCN })}</h2>
                <div className="space-x-2">
                  <Button variant="outline" size="icon" onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-center font-semibold text-muted-foreground">
                  {["日", "一", "二", "三", "四", "五", "六"].map((day) => (
                    <div key={day} className="py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {days.map((day) => (
                    <div
                      key={day.toString()}
                      className={`h-32 border rounded-md p-2 flex flex-col ${
                        !isSameMonth(day, monthStart) ? "bg-muted/50 text-muted-foreground" : ""
                      } ${isToday(day) ? "bg-blue-100 dark:bg-blue-900/30" : ""}`}
                    >
                      <span className={`font-medium ${isToday(day) ? "text-blue-600" : ""}`}>{format(day, "d")}</span>
                      <div className="mt-1 space-y-1 overflow-y-auto">
                        {filteredEvents
                          .filter((event) => format(new Date(event.date), "yyyy-MM-dd") === format(day, "yyyy-MM-dd"))
                          .map((event) => (
                            <Badge key={event.id} className={`${event.color} text-white text-xs w-full block truncate`}>
                              {event.title}
                            </Badge>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
