# Generated by Django 5.1 on 2024-10-26 16:03

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("contact", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="contact",
            name="submitted_at",
        ),
    ]
