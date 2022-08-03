from rest_framework import generics
from django.forms import model_to_dict
from rest_framework.response import Response
from .models import Some
from .serializer import SomeSerializer
from rest_framework.views import APIView


class SomeApiView(APIView):
    def get(self, request):
        humans = Some.objects.all()
        return Response({'humans': SomeSerializer(humans, many=True).data})

    def post(self, request):
        serializer = SomeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        human = Some.objects.create(
            name=request.data['name'],
            number=request.data['number'],
            age=request.data['age'],
        )

        return Response({'human': SomeSerializer(human).data})
