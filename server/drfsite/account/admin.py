from django.contrib import admin
from .models import Some


@admin.register(Some)
class SomeAdmin(admin.ModelAdmin):
    list_display = ('id', )
