from .forms import ContactForm
from django.shortcuts import render, redirect
from django.contrib import messages
import os
from django.core.mail import BadHeaderError, send_mail
from decouple import config


def base(request):
    form = ContactForm()

    if "responded" not in request.session:
        request.session["responded"] = False
        request.session["name"] = None

    if request.method == "POST" and request.session["responded"] == False:
        form = ContactForm(request.POST)
        if form.is_valid():
            full_name = form.cleaned_data['full_name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            
            if full_name and email and message:
                try:
                    send_mail(
                        "Website User Message: " + full_name,
                        "Name: " + full_name + "\nEmail: " + email + "\nMessage: " + message,
                        email,
                        [str(os.environ.get('EMAIL_USER')),],
                        fail_silently=False,
                    )
                    request.session["responded"] = True
                    request.session["name"] = full_name
                    messages.success(request, ("Thank you for your message, " + full_name + "! We'll be in touch!"))
                    return redirect('main:base')
                    
                # protect against header injection
                except BadHeaderError:
                    messages.error(request, ("An error has occured! Please try again!"))
                    return redirect('main:base')

    return render(request, "main/base.html", {
        "form": form,
        "responded": request.session["responded"],
        "name": request.session["name"],
    })