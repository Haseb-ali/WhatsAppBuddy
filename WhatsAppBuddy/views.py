from django.shortcuts import render
def loadLandingPage(request):
    return render(request,"bloglander.html")