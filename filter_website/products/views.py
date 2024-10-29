# products/views.py
from django.shortcuts import render
from .models import Product
from django.shortcuts import render, redirect
from .models import Product, CustomerInfo
from django.contrib import messages


def product_list(request):
    products = Product.objects.all()
    return render(request, 'products.html', {'products': products})
def customer_info(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        address = request.POST.get('address')
        contact_number = request.POST.get('contact')
        email = request.POST.get('email')

        customer = CustomerInfo(name=name, address=address, contact_number=contact_number, email=email)
        customer.save()

        messages.success(request,"Thank you for your order! We will contact you soon.")
        return redirect('product')  # Adjust this to the success page if needed

    return render(request, 'products/customerinfo.html')