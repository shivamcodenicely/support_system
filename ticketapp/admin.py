from django.contrib import admin
from .models import Signup,AdminSignup,TicketDetail,CommentBox


# Register your models here.
class SignupAdmin(admin.ModelAdmin):
    list_display = ('name','email','username','address','city')
admin.site.register(Signup,SignupAdmin)
admin.site.register(AdminSignup)

class TicketAdmin(admin.ModelAdmin):
    list_display = ('user','ticket_id','subject','catagory','status','created')
admin.site.register(TicketDetail,TicketAdmin)

class CommentBoxAdmin(admin.ModelAdmin):
    list_display = ('admin','user','message','created')
admin.site.register(CommentBox,CommentBoxAdmin)