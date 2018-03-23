from django.shortcuts import render
from .models import Signup,TicketDetail,AdminSignup
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.db import IntegrityError
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User

def usersignup(request):
    return render(request,'usersignup')

def forget_pass(request):
    return render(request,'forget_pass.html')

@csrf_exempt
def validate_username(request):
    contxt={}
    if request.method=="POST":
        name = request.POST.get('name')
        username = request.POST.get('username')
        email = request.POST.get('email')
        pwd = request.POST.get('pwd')
        contact = request.POST.get('contact')
        address=request.POST.get('address')
        city=request.POST.get('city')
        zipcode = request.POST.get('zipcode')
        # profile_picture=request.FILES('profile_picture')

        emp = Signup.objects.create(name=name, username=username, email=email,password=pwd,contact=contact,
                                    address=address,city=city,zipcode=zipcode)

        emp.save()

        request.session['email']=email

    return JsonResponse({"email":email,"success":True})

def userlogin(request):
    return render(request,'userlogin.html')


def z(request):
    return render(request,'new.html')

@csrf_exempt
def validate(request):
    dict={}
    if request.method=="POST":
        email = request.POST.get('email')
        get_pwd = request.POST.get('pwd')
        data = Signup.objects.get(email=email)
        email=data.email
        pwd=data.password
        if(get_pwd==pwd):
            request.session['email'] = email
            return JsonResponse({"email": email, "success": True})
        else:
            print("ppppppppp")
            return JsonResponse({"success": False})

def userhome(request):
    ticket_list1=[]

    if request.is_ajax() and request.method=="GET":
        print('hello ajax')
        email = request.GET.get('email')
        print ('hello code')
        print(email)
        data = Signup.objects.get(email=email)
        # print(data)
        data1 = TicketDetail.objects.filter(user=data)
        # print(data1)

        for i in data1:
            contxt = {
                'ticket_id': i.ticket_id,
                'catagory': i.catagory,
                'subject': i.subject,
                'description': i.description,
                'status': i.status
            }
            ticket_list1.append(contxt)
        print(ticket_list1)
        return JsonResponse({"success": True, 'ticket_list1': ticket_list1})

    elif request.method == "GET":
        print("HELLO")
        email=request.GET.get('Email')
        # print(email)
        return render(request, 'userhome.html',{'Email':email})



def adminlogin(request):
    return render(request,'adminlogin.html')

@csrf_exempt
def my_view(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    print(username)
    data = AdminSignup.objects.get(username=username)
    pwd=data.password
    if(password==pwd):
        print("success")
        return JsonResponse({"username": username, "success": True})
    else:
        print("invalid")
        return JsonResponse({"success": False})


    # pwd=pwd.split('$')
    # salt=pwd[1]
    # hsh=pwd[2]
    # print(salt)
    # print(hsh)
    # if (hsh==hashlib.sha1(salt+password).hexdigest()):
    #     print("Sucsess")
    # else:
    #     print("Not suceess"
def adminhome(request):
    return render(request,'adminhome.html')
@csrf_exempt
def new2(request):
    if request.method=='POST':
        get_email=request.POST.get("email")

    reset_pass1=Signup.objects.get(email=get_email)

    reset_pass=reset_pass1.password
    emailid=reset_pass1.email

    send_mail('Password email', str(reset_pass), 'shivam.mittal38@gmail.com', [emailid])

    return JsonResponse({"success": True,})



def adminload(requset):
        ticket_list = []
        data = TicketDetail.objects.all()
        if requset.method=="GET":
            for i in data:
                contxt={
                    'ticket_id':i.ticket_id,
                    'catagory':i.catagory,
                    'subject':i.subject,
                    'description':i.description,
                    'status':i.status
                }
                ticket_list.append(contxt)
            print(ticket_list)

        return JsonResponse({"success": True, 'ticket_list':ticket_list})


# def userload(requset):
#     ticket_list1 = []
#     if requset.method == "GET":
#         email=requset.GET.get('Email')
#         print(email)
#         data1=TicketDetail.objects.get()
#
#         for i in data1:
#             contxt = {
#                 'ticket_id': i.ticket_id,
#                 'catagory': i.catagory,
#                 'subject': i.subject,
#                 'description': i.description,
#                 'status': i.status
#             }
#             ticket_list1.append(contxt)
#         print(ticket_list1)
#
#     return JsonResponse({"success": True, 'ticket_list1': ticket_list1})
