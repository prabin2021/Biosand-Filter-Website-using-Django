# In products/urls.py
from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.index, name='index'), 
    path('contact/', include('contact.urls')), 
    
]
