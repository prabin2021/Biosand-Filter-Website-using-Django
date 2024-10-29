from django.shortcuts import render, redirect
from .forms import ContactForm


def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()  # Save the contact form data to the database
            return redirect('success')  # Redirect after saving
    else:
        form = ContactForm()
    return render(request, 'contact/contact.html', {'form': form})
def success_view(request):
    return render(request, 'contact/success.html')
