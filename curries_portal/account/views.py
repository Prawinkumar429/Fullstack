from django.shortcuts import render
from django.http import HttpResponse
from .serializers import *
from rest_framework import viewsets
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

def error_404(request, exception):
    return render(request, '404.html')



def error_500(request, *args, **argv):
    return render(request, '500.html', status=500)

        
def error_403(request, exception):

        return render(request,'403.html')

def error_400(request,  exception):
        return render(request,'400.html')
    
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
