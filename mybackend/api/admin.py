# api/admin.py

from django.contrib import admin
from .models import CustomUser, Task

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = (
        'username', 'first_name', 'last_name', 'email', 
        'phone_number', 'referral_email', 'heard_about'
    )
    search_fields = ('username', 'email', 'phone_number')
    ordering = ('username',)
    readonly_fields = ('password',)  # If you want to make the password field read-only

    def get_form(self, request, obj=None, **kwargs):
        # Customize the form used to create or update users
        form = super().get_form(request, obj, **kwargs)
        if obj:
            form.base_fields['password'].widget = admin.widgets.AdminPasswordChangeWidget()
        return form

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'due_date', 'completed', 'user')
    list_filter = ('completed', 'due_date')
    search_fields = ('title', 'description', 'user__username')
    ordering = ('due_date',)
