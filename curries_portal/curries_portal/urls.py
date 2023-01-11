"""curries_portal URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.conf.urls import url
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve 
from django.urls import re_path
from rest_framework.routers import DefaultRouter
from modules.views import *
from account.views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework.routers import DefaultRouter






router=DefaultRouter()
router.register('Currieslist',Curriesview,basename='curries')
router.register('Userslist',UserViewSet,basename='users')


# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]

# Customizing the built error pages
handler404 = 'modules.views.error_404'
handler500 = 'modules.views.error_500'
handler403 = 'modules.views.error_403'
handler400 = 'modules.views.error_400'
# handler404 = 'account.views.error_404'
# handler500 = 'account.views.error_500'
# handler403 = 'account.views.error_403'
# handler400 = 'account.views.error_400'

# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# urlpatterns += [
#   re_path(r'^static/(?:.*)$', serve, {'document_root': settings.STATIC_ROOT, })
# ]

urlpatterns = [

  url(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}),

  url(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
  path('admin/', admin.site.urls),
  path('api-auth/', include('rest_framework.urls')),
  path('api/', include(router.urls)),
  path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]