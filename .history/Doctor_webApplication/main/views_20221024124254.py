from re import template
from django.http import HttpResponse
from django.template import loader
from .models import logo
def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render())


def login(request):
    template = loader.get_template('login.html')
    return HttpResponse(template.render())



def main(request):
    logo = logo()
    return logo
def main(request):
    template = loader.get_template('main.html')
    return HttpResponse(template.render())
