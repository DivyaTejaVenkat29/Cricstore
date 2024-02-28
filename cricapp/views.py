from django.shortcuts import render

# Create your views here.
def home_page_view(request):
    return render(request,'cricapp/index.html')
def product_page_view(request):
    return render(request,'cricapp/products.html')
def sell_page_view(request):
    return render(request,'cricapp/sell.html')
def about_page_view(request):
    return render(request,'cricapp/about_us.html')
def cart_page_view(request):
    return render(request,'cricapp/cart.html')
