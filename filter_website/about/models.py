# models.py
from django.db import models

class About(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    founder_name = models.CharField(max_length=100)
    founder_photo = models.ImageField(upload_to='founder_photos/')
    additional_info = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title
