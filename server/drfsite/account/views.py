from rest_framework import generics
from django.forms import model_to_dict
from rest_framework.response import Response
from .models import Some
from .serializer import SomeSerializer
from rest_framework.views import APIView


class SomeApiView(APIView):
    def get(self, request):
        humans = Some.objects.all()
        return Response({'posts': SomeSerializer(humans, many=True).data})

    def post(self, request):
        serializer = SomeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'human': serializer.data})

    def put(self, request, *args, **kwargs):
        pk = kwargs.get('pk', None)
        if pk is None:
            return Response({'error': 'Метод PUT не рабочий'})

        try:
            instance = Some.objects.get(pk=pk)
        except:
            return Response({'error': 'такого обьекта не существует'})

        serializer = SomeSerializer(data=request.data, instance=instance)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'posts': serializer.data})

    def delete(self, request, *args, **kwargs):
        pk = kwargs.get('pk', None)

        if pk is None:
            return Response({'error': 'Метод Delete не рабочий'})
        some = Some.objects.get(pk=pk)
        name = some.name
        some.delete()
        return Response({'posts': '{}, удален'.format(name)})



