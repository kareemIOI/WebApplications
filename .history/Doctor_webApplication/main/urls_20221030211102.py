from django.urls import include, path
from . import views
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('index/', views.index, name = 'index'),
    path('', views.main, name = 'main'),
]Doctor_webApplication/main/urls.py