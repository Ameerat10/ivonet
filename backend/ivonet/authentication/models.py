from django.contrib.auth.models import AbstractUser
from django.db import models

# class CustomUser(AbstractUser):
#     name = models.CharField(max_length=255)
#     birth_date = models.DateField(null=True, blank=True)
#     gender = models.CharField(max_length=10, null=True, blank=True)
#     phone_number = models.CharField(max_length=20, null=True, blank=True)
#     university = models.CharField(max_length=255, null=True, blank=True)
#     university_year = models.CharField(max_length=20, null=True, blank=True)
#     major = models.CharField(max_length=255, null=True, blank=True)
#     areas_of_interest = models.TextField(null=True, blank=True)


class CustomUser(AbstractUser):
    name = models.CharField(max_length=255)
    birth_date = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=10, null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    university = models.CharField(max_length=255, null=True, blank=True)
    university_year = models.CharField(max_length=20, null=True, blank=True)
    major = models.CharField(max_length=255, null=True, blank=True)
    areas_of_interest = models.TextField(null=True, blank=True)
    # Ensure username is unique and required
    username = models.CharField(max_length=150, unique=True)
