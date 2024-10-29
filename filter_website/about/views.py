# views.py
from django.shortcuts import render

def about_view(request):
    return render(request, 'about.html')  # Ensure 'about.html' is in the correct templates folder
