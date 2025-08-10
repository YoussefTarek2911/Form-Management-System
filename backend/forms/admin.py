from django.contrib import admin
from .models import Form, FormSubmission

@admin.register(Form)
class FormAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "created_at")
    search_fields = ("title",)

@admin.register(FormSubmission)
class FormSubmissionAdmin(admin.ModelAdmin):
    list_display = ("id", "form", "submitted_at")
    search_fields = ("form__title",)