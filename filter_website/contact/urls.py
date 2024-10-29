from django.urls import path
from . import views

urlpatterns = [
    path('', views.contact_view, name='contact'),
    path('contact/', views.success_view, name='success'),  # New success path
    # Add other paths here
]

