from rest_framework import generics
from django.forms import model_to_dict
from rest_framework.response import Response
from .models import Some
from .serializer import SomeSerializer
from rest_framework.views import APIView


class SomeApiView(generics.ListAPIView):
    queryset = Some.objects.all()
    serializer_class = SomeSerializer
