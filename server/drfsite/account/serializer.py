from rest_framework import serializers
from account.models import Some


class SomeSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=50)
    number = serializers.CharField(max_length=12)
    age = serializers.IntegerField()

    def create(self, validated_data):
        return Some.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.number = validated_data.get("number", instance.number)
        instance.age = validated_data.get("age", instance.age)
        instance.save()

        return instance
