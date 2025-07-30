import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 学校信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">白云实验学校</h3>
            <p className="text-muted-foreground mb-4">
              暨实校区致力于为学生提供优质的教育环境，培养具有国际视野和创新精神的未来领导者。
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-foreground">
                  课程设置
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-muted-foreground hover:text-foreground">
                  招生信息
                </Link>
              </li>
              <li>
                <Link href="/parents" className="text-muted-foreground hover:text-foreground">
                  家长中心
                </Link>
              </li>
            </ul>
          </div>

          {/* 探索更多 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">探索更多</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-foreground">
                  新闻动态
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-foreground">
                  校园图库
                </Link>
              </li>
              <li>
                <Link href="/staff" className="text-muted-foreground hover:text-foreground">
                  教职工名录
                </Link>
              </li>
              <li>
                <Link href="/virtual-tour" className="text-muted-foreground hover:text-foreground">
                  虚拟导览
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">广州市白云区教育路123号</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">020-8888-8888</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">info@baiyunschool.edu.cn</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 白云实验学校（暨实校区）. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}
