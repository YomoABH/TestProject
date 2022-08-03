from rest_framework import serializers
from account.models import Some


class SomeSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=50)
    number = serializers.CharField(max_length=12)
    age = serializers.IntegerField()
