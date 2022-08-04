from rest_framework import serializers
from account.models import Some


class SomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Some
        fields = "__all__"
