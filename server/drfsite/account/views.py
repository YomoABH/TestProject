from rest_framework import generics, viewsets
from rest_framework.response import Response
from .models import Some
from .serializer import SomeSerializer


class SomeViewSet(viewsets.ModelViewSet):
    queryset = Some.objects.all()
    serializer_class = SomeSerializer



