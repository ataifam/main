from django import forms
from captcha.fields import CaptchaField

class ContactForm(forms.Form):
    full_name = forms.CharField(required=True, min_length=1, max_length=25, widget=forms.TextInput(attrs={'class': "form-control"}))
    email = forms.EmailField(required=True, min_length=1, max_length=25, widget=forms.EmailInput(attrs={'class': "form-control"}))
    message = forms.CharField(required=True, min_length=1, max_length=100, widget=forms.Textarea(attrs={'class': "form-control"}))
    captcha = CaptchaField()
