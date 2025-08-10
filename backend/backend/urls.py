from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView
from rest_framework.routers import DefaultRouter
from api.views import FormViewSet

router = DefaultRouter()
router.register(r'forms', FormViewSet, basename='form')

urlpatterns = [
    path('', RedirectView.as_view(url='/api/', permanent=False)),  # <-- add this
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
