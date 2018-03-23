from django.db import models
from datetime import datetime

class Signup(models.Model):
    name = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, primary_key=True)
    password = models.CharField(max_length=50)
    contact = models.IntegerField(default=0)
    address = models.TextField(blank=True, null=True, default="")
    city = models.CharField(max_length=255, null=True, blank=True, default="")
    zipcode = models.IntegerField(blank=True, null=True, default=0)
    profile_picture = models.ImageField(null=True, blank=True, upload_to='')

    def __str__(self):
        return "%s-%s" % (self.name, self.city)


class AdminSignup(models.Model):
    username=models.CharField(max_length=50 ,null=False)
    password=models.CharField(max_length=50,null=False)
    def __str__(self):
        return "%s" % (self.username)


CHOICES = (
    (0,'Low'),
    (1, 'Normal'),
    (2, 'High'),
)
class TicketDetail(models.Model):
    user=models.ForeignKey(Signup,on_delete=models.CASCADE)
    ticket_id=models.IntegerField(primary_key=True, default=0)
    catagory=models.IntegerField(choices=CHOICES,blank=False,null=False)
    subject=models.CharField(max_length=50,blank=False,null=False)
    description=models.CharField(max_length=256)
    file=models.FileField(blank=True,null=True,upload_to='')
    created=models.DateTimeField(auto_now=False,null=True,auto_now_add=True)
    modified=models.DateTimeField(auto_now=True,null=True,auto_now_add=False)
    status=models.BooleanField(default=False)
    def __str__(self):
        return "%s" % (self.user)
