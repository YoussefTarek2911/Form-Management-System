from django.db import models

class Form(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    fields = models.JSONField(default=list)  # list of field configs
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class FormSubmission(models.Model):
    form = models.ForeignKey(Form, on_delete=models.CASCADE, related_name='submissions')
    answers = models.JSONField(default=dict)  # {fieldKey: value}
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Submission #{self.id} to {self.form.title}"