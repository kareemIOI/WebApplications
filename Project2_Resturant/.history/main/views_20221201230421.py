from django.shortcuts import redirect, render
# Create your views here.
def index(request):
    return render(request, 'index.html')


def chefs(request):
    return render(request, 'chefs.html')