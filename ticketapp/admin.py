from django.contrib import admin
from .models import Signup,AdminSignup,TicketDetail


# Register your models here.

admin.site.register(Signup)
admin.site.register(AdminSignup)
admin.site.register(TicketDetail)