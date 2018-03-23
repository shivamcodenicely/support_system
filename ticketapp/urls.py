from django.conf.urls import url
from . import views

urlpatterns = [
    url('usersignup/',views.usersignup,name='usersignup'),
    url('validate_username',views.validate_username,name='validate_username'),
    url('userlogin/',views.userlogin,name='userlogin'),
    url('validate',views.validate,name='validate'),
    url('userhome',views.userhome,name='userhome'),
    url('adminlogin/',views.adminlogin,name='adminlogin'),
    url('myview/',views.my_view,name='my_view'),
    url('adminhome/',views.adminhome,name='adminhome'),
    url('forget/',views.forget_pass,name='forget_pass'),
    url('forget_function',views.new2,name='new2'),
    url('adminload',views.adminload,name='adminload'),
    # url('userload',views.userload,name='userload')
    url('z',views.z,name='z')
]