"""
URL configuration for cyco project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from cyapp import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.addusr,name="base"),
    path('login/', views.login_view, name="login"),
    path('logout/',views.Logout,name="logout"),
     path('home/',views.userhome,name="home"),
     path('co/',views.course,name='cos'),
     path('cd<int:id>/', views.cod, name='cd'),
     path('ts<int:id>/',views.ts,name='cc'),
     path('ctf/',views.ctf,name='ctf'),
    path('ct<int:id>/<int:id1>/',views.ctf2),
    path('dash<int:id>',views.dash),
    path('add/',views.enroll),
    path('cat/',views.cat),
    path('cot<int:id>/',views.cot),
    path('cactf/',views.cactf),
    path('cta<int:id>/',views.ctf3),
    path('getuc/<str:n>/',views.getuc),
    path('addc/',views.ccom),
    path('getcc/<str:n>/',views.getcc),
    path('ar',views.ar),
    
   
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)