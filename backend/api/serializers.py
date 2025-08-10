from rest_framework import serializers
from forms.models import Form, FormSubmission

class FormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Form
        fields = ["id", "title", "description", "fields", "created_at"]
        read_only_fields = ["id", "created_at"]

class FormSubmissionSerializer(serializers.ModelSerializer):
    form = serializers.PrimaryKeyRelatedField(queryset=Form.objects.all())

    class Meta:
        model = FormSubmission
        fields = ["id", "form", "answers", "submitted_at"]
        read_only_fields = ["id", "submitted_at"]