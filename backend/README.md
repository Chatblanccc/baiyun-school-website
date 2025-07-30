# 白云实验学校网站后端开发文档

## 项目概述

基于Django框架的白云实验学校网站后端API服务，为前端Next.js应用提供数据支持，使用Django Admin作为后台管理系统。专注于小学和初中教育内容管理。

## 技术栈

- **框架**: Django 5.x
- **数据库**: MySQL 8.0+
- **API**: Django REST Framework
- **后台管理**: Django Admin (内置)
- **认证**: 超级管理员后台管理

## 项目结构

```
backend/
├── baiyun_school/           # Django项目主目录
│   ├── __init__.py
│   ├── settings.py         # 开发环境设置
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── apps/                   # 应用模块
│   ├── __init__.py
│   ├── academics/         # 学术管理（小学初中）
│   ├── admissions/        # 招生管理
│   ├── news/             # 新闻公告
│   ├── gallery/          # 图片画廊
│   ├── contact/          # 联系表单
│   ├── parents/          # 家长专区
│   └── staff/            # 教职工信息
├── media/                # 媒体文件
├── static/              # 静态文件
├── requirements.txt     # 依赖包
├── manage.py
└── .env.example
```

## 数据库设计与Admin配置

### 1. academics (学术管理)

```python
# apps/academics/models.py
from django.db import models

class Grade(models.Model):
    LEVEL_CHOICES = [
        ('primary', '小学'),
        ('junior', '初中'),
    ]
    
    GRADE_CHOICES = [
        ('grade_1', '一年级'),
        ('grade_2', '二年级'),
        ('grade_3', '三年级'),
        ('grade_4', '四年级'),
        ('grade_5', '五年级'),
        ('grade_6', '六年级'),
        ('grade_7', '七年级'),
        ('grade_8', '八年级'),
        ('grade_9', '九年级'),
    ]
    
    name = models.CharField(max_length=50, choices=GRADE_CHOICES, unique=True, verbose_name='年级名称')
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES, verbose_name='学段')
    description = models.TextField(blank=True, verbose_name='年级介绍')
    class_count = models.PositiveIntegerField(default=1, verbose_name='班级数量')
    is_recruiting = models.BooleanField(default=True, verbose_name='是否招生')
    
    class Meta:
        verbose_name = '年级'
        verbose_name_plural = '年级管理'
        ordering = ['name']
    
    def __str__(self):
        return self.get_name_display()

class Course(models.Model):
    SUBJECT_CHOICES = [
        ('chinese', '语文'),
        ('math', '数学'),
        ('english', '英语'),
        ('science', '科学'),
        ('art', '美术'),
        ('music', '音乐'),
        ('pe', '体育'),
        ('moral', '道德与法治'),
        ('physics', '物理'),
        ('chemistry', '化学'),
        ('biology', '生物'),
        ('history', '历史'),
        ('geography', '地理'),
        ('politics', '思想品德'),
    ]
    
    name = models.CharField(max_length=50, choices=SUBJECT_CHOICES, verbose_name='课程名称')
    grades = models.ManyToManyField(Grade, verbose_name='适用年级')
    description = models.TextField(verbose_name='课程描述')
    weekly_hours = models.PositiveIntegerField(default=1, verbose_name='周课时')
    is_required = models.BooleanField(default=True, verbose_name='是否必修')
    
    class Meta:
        verbose_name = '课程'
        verbose_name_plural = '课程管理'
    
    def __str__(self):
        return self.get_name_display()

# apps/academics/admin.py
from django.contrib import admin
from .models import Grade, Course

@admin.register(Grade)
class GradeAdmin(admin.ModelAdmin):
    list_display = ['get_name_display', 'level', 'class_count', 'is_recruiting']
    list_filter = ['level', 'is_recruiting']
    list_editable = ['class_count', 'is_recruiting']

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['get_name_display', 'weekly_hours', 'is_required']
    list_filter = ['is_required']
    filter_horizontal = ['grades']
```

### 2. news (新闻公告)

```python
# apps/news/models.py
from django.db import models
from django.utils import timezone

class NewsCategory(models.Model):
    CATEGORY_CHOICES = [
        ('school_news', '学校新闻'),
        ('notice', '通知公告'),
        ('activity', '活动动态'),
        ('teaching', '教学教研'),
        ('student', '学生风采'),
    ]
    
    name = models.CharField(max_length=50, choices=CATEGORY_CHOICES, unique=True, verbose_name='分类名称')
    slug = models.SlugField(unique=True, verbose_name='URL标识')
    
    class Meta:
        verbose_name = '新闻分类'
        verbose_name_plural = '新闻分类管理'
    
    def __str__(self):
        return self.get_name_display()

class News(models.Model):
    STATUS_CHOICES = [
        ('draft', '草稿'),
        ('published', '已发布'),
    ]
    
    title = models.CharField(max_length=200, verbose_name='标题')
    slug = models.SlugField(unique=True, verbose_name='URL标识')
    category = models.ForeignKey(NewsCategory, on_delete=models.CASCADE, verbose_name='分类')
    content = models.TextField(verbose_name='内容')
    excerpt = models.CharField(max_length=300, blank=True, verbose_name='摘要')
    featured_image = models.ImageField(upload_to='news/', blank=True, verbose_name='特色图片')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft', verbose_name='状态')
    is_featured = models.BooleanField(default=False, verbose_name='是否置顶')
    published_at = models.DateTimeField(null=True, blank=True, verbose_name='发布时间')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    
    class Meta:
        verbose_name = '新闻'
        verbose_name_plural = '新闻管理'
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title

# apps/news/admin.py
from django.contrib import admin
from django.utils import timezone
from .models import NewsCategory, News

@admin.register(NewsCategory)
class NewsCategoryAdmin(admin.ModelAdmin):
    list_display = ['get_name_display', 'slug']
    prepopulated_fields = {'slug': ('name',)}

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'status', 'is_featured', 'published_at']
    list_filter = ['status', 'category', 'is_featured']
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)}
    actions = ['make_published']
    
    def make_published(self, request, queryset):
        queryset.update(status='published', published_at=timezone.now())
    make_published.short_description = "发布选中的新闻"
```

### 3. admissions (招生管理)

```python
# apps/admissions/models.py
from django.db import models
from apps.academics.models import Grade

class AdmissionApplication(models.Model):
    STATUS_CHOICES = [
        ('pending', '待处理'),
        ('approved', '已通过'),
        ('rejected', '已拒绝'),
    ]
    
    GENDER_CHOICES = [
        ('male', '男'),
        ('female', '女'),
    ]
    
    # 学生信息
    student_name = models.CharField(max_length=100, verbose_name='学生姓名')
    student_gender = models.CharField(max_length=10, choices=GENDER_CHOICES, verbose_name='性别')
    student_birth_date = models.DateField(verbose_name='出生日期')
    
    # 家长信息
    parent_name = models.CharField(max_length=100, verbose_name='家长姓名')
    parent_phone = models.CharField(max_length=15, verbose_name='联系电话')
    parent_email = models.EmailField(verbose_name='邮箱地址')
    address = models.CharField(max_length=200, verbose_name='家庭住址')
    
    # 申请信息
    grade_applying = models.ForeignKey(Grade, on_delete=models.CASCADE, verbose_name='申请年级')
    previous_school = models.CharField(max_length=100, blank=True, verbose_name='原就读学校')
    message = models.TextField(blank=True, verbose_name='备注信息')
    
    # 状态
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending', verbose_name='处理状态')
    admin_notes = models.TextField(blank=True, verbose_name='管理员备注')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='申请时间')
    
    class Meta:
        verbose_name = '入学申请'
        verbose_name_plural = '招生管理'
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.student_name} - {self.grade_applying}"

# apps/admissions/admin.py
from django.contrib import admin
from .models import AdmissionApplication

@admin.register(AdmissionApplication)
class AdmissionApplicationAdmin(admin.ModelAdmin):
    list_display = ['student_name', 'parent_name', 'parent_phone', 'grade_applying', 'status', 'created_at']
    list_filter = ['status', 'grade_applying', 'created_at']
    search_fields = ['student_name', 'parent_name', 'parent_phone']
    readonly_fields = ['created_at']
    
    fieldsets = (
        ('学生信息', {
            'fields': ('student_name', 'student_gender', 'student_birth_date')
        }),
        ('家长信息', {
            'fields': ('parent_name', 'parent_phone', 'parent_email', 'address')
        }),
        ('申请信息', {
            'fields': ('grade_applying', 'previous_school', 'message')
        }),
        ('处理状态', {
            'fields': ('status', 'admin_notes', 'created_at')
        }),
    )
```

### 4. gallery (图片画廊)

```python
# apps/gallery/models.py
from django.db import models

class GalleryCategory(models.Model):
    CATEGORY_CHOICES = [
        ('campus', '校园风光'),
        ('activity', '活动掠影'),
        ('classroom', '课堂风采'),
        ('competition', '竞赛获奖'),
        ('art', '学生作品'),
    ]
    
    name = models.CharField(max_length=50, choices=CATEGORY_CHOICES, unique=True, verbose_name='分类名称')
    slug = models.SlugField(unique=True, verbose_name='URL标识')
    
    class Meta:
        verbose_name = '画廊分类'
        verbose_name_plural = '画廊分类管理'
    
    def __str__(self):
        return self.get_name_display()

class GalleryImage(models.Model):
    title = models.CharField(max_length=200, verbose_name='图片标题')
    image = models.ImageField(upload_to='gallery/', verbose_name='图片')
    category = models.ForeignKey(GalleryCategory, on_delete=models.CASCADE, verbose_name='分类')
    description = models.TextField(blank=True, verbose_name='图片描述')
    uploaded_at = models.DateTimeField(auto_now_add=True, verbose_name='上传时间')
    
    class Meta:
        verbose_name = '画廊图片'
        verbose_name_plural = '画廊图片管理'
        ordering = ['-uploaded_at']
    
    def __str__(self):
        return self.title

# apps/gallery/admin.py
from django.contrib import admin
from .models import GalleryCategory, GalleryImage

@admin.register(GalleryCategory)
class GalleryCategoryAdmin(admin.ModelAdmin):
    list_display = ['get_name_display', 'slug']
    prepopulated_fields = {'slug': ('name',)}

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'uploaded_at']
    list_filter = ['category', 'uploaded_at']
    search_fields = ['title', 'description']
```

### 5. contact (联系表单)

```python
# apps/contact/models.py
from django.db import models

class ContactMessage(models.Model):
    STATUS_CHOICES = [
        ('new', '未处理'),
        ('replied', '已回复'),
    ]
    
    name = models.CharField(max_length=100, verbose_name='姓名')
    email = models.EmailField(verbose_name='邮箱')
    phone = models.CharField(max_length=15, blank=True, verbose_name='电话')
    subject = models.CharField(max_length=200, verbose_name='主题')
    message = models.TextField(verbose_name='留言内容')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new', verbose_name='处理状态')
    admin_reply = models.TextField(blank=True, verbose_name='管理员回复')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='提交时间')
    
    class Meta:
        verbose_name = '联系留言'
        verbose_name_plural = '联系留言管理'
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.subject}"

# apps/contact/admin.py
from django.contrib import admin
from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'status', 'created_at']
    list_filter = ['status', 'created_at']
    search_fields = ['name', 'email', 'subject']
    readonly_fields = ['created_at']
```

### 6. staff (教职工信息)

```python
# apps/staff/models.py
from django.db import models

class StaffMember(models.Model):
    POSITION_CHOICES = [
        ('principal', '校长'),
        ('vice_principal', '副校长'),
        ('director', '主任'),
        ('teacher', '教师'),
        ('counselor', '心理咨询师'),
        ('admin', '行政人员'),
    ]
    
    DEPARTMENT_CHOICES = [
        ('administration', '行政管理'),
        ('primary', '小学部'),
        ('junior', '初中部'),
        ('logistics', '后勤保障'),
    ]
    
    name = models.CharField(max_length=100, verbose_name='姓名')
    position = models.CharField(max_length=50, choices=POSITION_CHOICES, verbose_name='职位')
    department = models.CharField(max_length=50, choices=DEPARTMENT_CHOICES, verbose_name='部门')
    bio = models.TextField(blank=True, verbose_name='个人简介')
    photo = models.ImageField(upload_to='staff/', blank=True, verbose_name='照片')
    email = models.EmailField(blank=True, verbose_name='邮箱')
    phone = models.CharField(max_length=15, blank=True, verbose_name='电话')
    education = models.CharField(max_length=200, blank=True, verbose_name='学历背景')
    experience_years = models.PositiveIntegerField(default=0, verbose_name='工作年限')
    is_featured = models.BooleanField(default=False, verbose_name='首页展示')
    
    class Meta:
        verbose_name = '教职工'
        verbose_name_plural = '教职工管理'
        ordering = ['department', 'name']
    
    def __str__(self):
        return f"{self.name} - {self.get_position_display()}"

# apps/staff/admin.py
from django.contrib import admin
from .models import StaffMember

@admin.register(StaffMember)
class StaffMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'position', 'department', 'experience_years', 'is_featured']
    list_filter = ['position', 'department', 'is_featured']
    search_fields = ['name', 'bio']
    list_editable = ['is_featured']
```

## 本地开发环境设置

### 1. 环境准备

```bash
# 创建项目目录
cd C:\Users\Chatblanc\Desktop\baiyun-school-website\backend

# 创建虚拟环境
python -m venv venv

# 激活虚拟环境 (Windows)
venv\Scripts\activate

# 安装依赖
pip install -r requirements.txt
```

### 2. requirements.txt

```txt
Django==5.0.6
djangorestframework==3.14.0
django-cors-headers==4.3.1
mysqlclient==2.2.4
Pillow==10.3.0
django-environ==0.11.2
```

### 3. 基础配置

```python
# baiyun_school/settings.py
import os
from pathlib import Path
import environ

# 初始化环境变量
env = environ.Env(
    DEBUG=(bool, True)
)

BASE_DIR = Path(__file__).resolve().parent.parent

# 读取.env文件
environ.Env.read_env(os.path.join(BASE_DIR, '.env'))

SECRET_KEY = env('SECRET_KEY', default='your-secret-key-here')
DEBUG = env('DEBUG')
ALLOWED_HOSTS = ['localhost', '127.0.0.1']

# 应用配置
DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

THIRD_PARTY_APPS = [
    'rest_framework',
    'corsheaders',
]

LOCAL_APPS = [
    'apps.academics',
    'apps.admissions',
    'apps.news',
    'apps.gallery',
    'apps.contact',
    'apps.staff',
]

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'baiyun_school.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# 数据库配置
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': env('DB_NAME', default='baiyun_school'),
        'USER': env('DB_USER', default='root'),
        'PASSWORD': env('DB_PASSWORD', default=''),
        'HOST': env('DB_HOST', default='localhost'),
        'PORT': env('DB_PORT', default='3306'),
        'OPTIONS': {
            'charset': 'utf8mb4',
        }
    }
}

# REST Framework配置
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20
}

# CORS配置
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # Next.js前端
    "http://127.0.0.1:3000",
]

# 国际化
LANGUAGE_CODE = 'zh-hans'
TIME_ZONE = 'Asia/Shanghai'
USE_I18N = True
USE_TZ = True

# 静态文件
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'static'

# 媒体文件
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Admin配置
ADMIN_SITE_HEADER = '白云实验学校管理系统'
ADMIN_SITE_TITLE = '白云实验学校'
ADMIN_INDEX_TITLE = '内容管理面板'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
```

### 4. URL配置

```python
# baiyun_school/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# 自定义Admin标题
admin.site.site_header = settings.ADMIN_SITE_HEADER
admin.site.site_title = settings.ADMIN_SITE_TITLE
admin.site.index_title = settings.ADMIN_INDEX_TITLE

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.academics.urls')),
    path('api/', include('apps.news.urls')),
    path('api/', include('apps.gallery.urls')),
    path('api/', include('apps.contact.urls')),
    path('api/', include('apps.admissions.urls')),
    path('api/', include('apps.staff.urls')),
]

# 开发环境下提供媒体文件服务
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

### 5. .env.example文件

```env
# 数据库配置
DB_NAME=baiyun_school
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=3306

# Django配置
SECRET_KEY=your-secret-key-here
DEBUG=True
```

## 快速开始

```bash
# 1. 创建MySQL数据库
mysql -u root -p
CREATE DATABASE baiyun_school CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# 2. 配置环境变量
copy .env.example .env
# 编辑.env文件，设置数据库密码等信息

# 3. 安装依赖
pip install -r requirements.txt

# 4. 数据库迁移
python manage.py makemigrations
python manage.py migrate

# 5. 创建超级用户
python manage.py createsuperuser

# 6. 启动开发服务器
python manage.py runserver

# 7. 访问管理后台
# http://localhost:8000/admin/
```

## API接口

### 公开接口列表

- `GET /api/academics/grades/` - 获取年级信息
- `GET /api/academics/courses/` - 获取课程信息  
- `GET /api/news/` - 获取新闻列表
- `GET /api/news/{slug}/` - 获取新闻详情
- `GET /api/gallery/` - 获取图片画廊
- `GET /api/staff/` - 获取教职工信息
- `POST /api/contact/` - 提交联系表单
- `POST /api/admissions/apply/` - 提交入学申请

现在年级映射已经改为一年级到九年级的简化命名方式，更加直观易懂。