"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const gradeLinks: { title: string; href: string; description: string }[] = [
  { title: "一年级", href: "/grades/1", description: "开启学习之旅" },
  { title: "二年级", href: "/grades/2", description: "巩固基础知识" },
  { title: "三年级", href: "/grades/3", description: "培养学习习惯" },
  { title: "四年级", href: "/grades/4", description: "拓展学科视野" },
  { title: "五年级", href: "/grades/5", description: "提升综合能力" },
  { title: "六年级", href: "/grades/6", description: "衔接初中学习" },
  { title: "七年级", href: "/grades/7", description: "适应中学生活" },
  { title: "八年级", href: "/grades/8", description: "深化知识体系" },
  { title: "九年级", href: "/grades/9", description: "迎接未来挑战" },
]

const exploreLinks: { title: string; href: string; description: string }[] = [
  { title: "新闻动态", href: "/news", description: "获取最新的校园资讯" },
  { title: "校园图库", href: "/gallery", description: "记录校园的精彩瞬间" },
  { title: "学生生活", href: "/student-life", description: "探索丰富多彩的活动" },
  { title: "教职工名录", href: "/staff", description: "认识我们的专业团队" },
  { title: "虚拟导览", href: "/virtual-tour", description: "足不出户在线逛校园" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-foreground">白云实验学校</div>
              <div className="text-xs text-muted-foreground">暨实校区</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    首页
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    关于我们
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-md">
                  学术
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/courses"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">课程总览</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            探索我们为小学和初中阶段精心设计的课程体系。
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {gradeLinks.slice(0, 3).map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/admissions" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    招生
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/parents" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    家长
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-md">
                  探索更多
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] grid-cols-2">
                    {exploreLinks.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    联系
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">打开菜单</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-6">
                  {[
                    { name: "首页", href: "/" },
                    { name: "关于我们", href: "/about" },
                    { name: "课程总览", href: "/courses" },
                    { name: "招生", href: "/admissions" },
                    { name: "家长", href: "/parents" },
                    { name: "新闻动态", href: "/news" },
                    { name: "学生生活", href: "/student-life" },
                    { name: "图库", href: "/gallery" },
                    { name: "教职工", href: "/staff" },
                    { name: "虚拟导览", href: "/virtual-tour" },
                    { name: "联系", href: "/contact" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = ({ className, title, children, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          }
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
