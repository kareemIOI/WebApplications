from django.shortcuts import render
from SignIn.models import Register
# Create your views here.

def index(request):
    if request.method == 'POST':
        First_Name = request.POST['First_Name']
        Last_Name = request.POST['Last_Name']
