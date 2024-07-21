from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('name', 'birth_date', 'gender', 'phone_number', 'university', 'university_year', 'major', 'areas_of_interest')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
