"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
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
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('menu.urls')),  # Incluir URLs de la app
<<<<<<< HEAD
    path('', include('users.urls')),
    path('', include('order.urls')),
    # path('auth/', include('rest_framework.urls')),
]
=======
    path('api/usuarios/', include('users.urls')),
    # path('auth/', include('rest_framework.urls')),
    path('', include('order.urls')),
    ]
>>>>>>> 13ec01d80b240730dc7527bb2e0b422e082c2df7
