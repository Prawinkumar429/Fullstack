from . import models
from rest_framework import serializers

class CurriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Curries
        fields = '__all__'