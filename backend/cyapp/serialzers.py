from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Demo,Coudata,Courses,Catagory,Testq,Ctf,Catctf

class Demos(serializers.ModelSerializer):
    class Meta:
        model = Demo
        fields = '__all__'


class Cos(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = '__all__'

class Cat(serializers.ModelSerializer):
    class Meta:
        model = Catagory
        fields = '__all__'


class Cactf(serializers.ModelSerializer):
    class Meta:
        model = Catctf
        fields = '__all__'

class Cod(serializers.ModelSerializer):
    class Meta:
        model = Coudata
        fields = '__all__'

class Te(serializers.ModelSerializer):
    class Meta:
        model = Testq
        fields = '__all__'


class CtfSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ctf
        fields = '__all__'