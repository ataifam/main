from django.urls import path
from django.contrib import admin
from . import views

app_name = "main"
urlpatterns = [
path("", views.base, name="base"),
path('admin/', admin.site.urls),
]