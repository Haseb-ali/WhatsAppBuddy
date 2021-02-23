from django.shortcuts import render

# Create your views here.
def loadSignUpPage(request):
    return render(request,'signup.html')