from django.shortcuts import render
from django.http import HttpResponse
from .serializers import *
from rest_framework import viewsets
from rest_framework.response import Response

# Create your views here.



def error_404(request, exception):
    return HttpResponse("<center><h1>Page not found, error_404</h1></center>")



def error_500(request, *args, **argv):
    return HttpResponse("<center><h1>Internal server error, error_500</h1></center>")

        
def error_403(request, exception):

        return HttpResponse("<center><h1>Forbidden page error, error_403</h1></center>")

def error_400(request,  exception):
        return HttpResponse("<center><h1>Bad request view, error_400</h1></center>")
    
class Curriesview(viewsets.ModelViewSet):
        queryset=models.Curries.objects.all()
        serializer_class= CurriesSerializer  


        
