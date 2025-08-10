from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from forms.models import Form, FormSubmission
from .serializers import FormSerializer, FormSubmissionSerializer

class FormViewSet(viewsets.ModelViewSet):
    queryset = Form.objects.all().order_by('-created_at')
    serializer_class = FormSerializer

    @action(detail=True, methods=['post'], url_path='submit')
    def submit(self, request, pk=None):
        form = self.get_object()
        serializer = FormSubmissionSerializer(data={
            'form': form.id,
            'answers': request.data.get('answers', {})
        })
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['get'], url_path='submissions')
    def submissions(self, request, pk=None):
        form = self.get_object()
        subs = form.submissions.all().order_by('-submitted_at')
        data = FormSubmissionSerializer(subs, many=True).data
        return Response(data)