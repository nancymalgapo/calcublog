from django.shortcuts import render

def index(request):
    return render(request, 'calcu/index.html')
# Create your views here.
