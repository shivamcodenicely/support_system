from django.shortcuts import render
from .models import Signup,TicketDetail,AdminSignup,CommentBox
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
import jwt
import crypt
from django.db import IntegrityError

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
        profile_picture=request.FILES.get('profile_picture')

        emp = Signup.objects.create(name=name, username=username, email=email,password=pwd,contact=contact,
                                    address=address,city=city,zipcode=zipcode,profile_picture=profile_picture)

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
        if (get_pwd==pwd):
            request.session['email'] = email
            return JsonResponse({"email": email, "success": True})
        else:
            return JsonResponse({"success": False})

@csrf_exempt
def userhome(request):
    ticket_list1=[]

    if request.is_ajax() and request.method=="GET":

        email = request.GET.get('email')
        data = Signup.objects.get(email=email)
        data1 = TicketDetail.objects.filter(user=data)
        # key='secret'
        # encoded = jwt.encode({'email':email},key, algorithm='HS256')
        for i in data1:
            contxt = {
                'ticket_id': i.ticket_id,
                'catagory': i.catagory,
                'subject': i.subject,
                'description': i.description,
                'status': i.status,
                'created': (i.created.date().strftime('%d/%m/%Y'))
            }

            ticket_list1.append(contxt)
            ticket_list1 = sorted(ticket_list1, key=lambda contxt: contxt['created'])

        return JsonResponse({"success": True, 'ticket_list1': ticket_list1,'Email':email})

    elif request.method == "GET":
        email=request.GET.get('Email')
        return render(request, 'userhome.html',{'Email':email})



def adminlogin(request):
    return render(request,'adminlogin.html')

@csrf_exempt
def my_view(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    data = AdminSignup.objects.get(username=username)
    pwd=data.password
    if(password==pwd):
        return JsonResponse({"username": username, "success": True})
    else:
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


@csrf_exempt
def new2(request):
    if request.method=='POST':
        get_email=request.POST.get("email")

    reset_pass1=Signup.objects.get(email=get_email)

    reset_pass=reset_pass1.password
    emailid=reset_pass1.email

    send_mail('Password email', str(reset_pass), 'shivam.mittal38@gmail.com', [emailid])

    return JsonResponse({"success": True,})



def adminhome(request):
    if request.method=='GET':
        username=request.GET.get('Username')
    return render(request,'adminhome.html',{'username':username})


def adminload(requset):
        ticket_list = []
        data = TicketDetail.objects.all()
        if requset.method=="GET":
            username=requset.GET.get('username')
            for i in data:
                contxt={
                    'ticket_id':i.ticket_id,
                    'catagory':i.catagory,
                    'subject':i.subject,
                    'description':i.description,
                    'status':i.status,
                    'created': (i.created.date().strftime('%d/%m/%Y'))
                }
                ticket_list.append(contxt)
                ticket_list=sorted(ticket_list, key=lambda contxt: contxt['created'])
        return JsonResponse({"success": True, 'ticket_list':ticket_list,'username':username})


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

@csrf_exempt
def create_ticket(request):

    if request.method=="POST":
        email=request.POST.get('email')
        ticket_id=request.POST.get('ticket_id')
        catagory=request.POST.get('category')
        subject=request.POST.get('subject')
        description=request.POST.get('description')
        data1=Signup.objects.get(email=email)
        TicketDetail.objects.create(user=data1,ticket_id=ticket_id,catagory=catagory,subject=subject,description=description,status=True)


        request.session['ticket_id'] = ticket_id
        return JsonResponse({"success": True})

def adminlogout(requset):

    return render(requset,'adminlogin.html')

def userlogout(requset):
    return  render(requset,'userlogin.html')

@csrf_exempt
def comment(request):
    if request.method=="POST":
        ticket_id1=request.POST.get('ticket_id1')
        comment=request.POST.get('comment')
        data1=TicketDetail.objects.get(ticket_id=ticket_id1)
        data1.comment=comment
        data1.save()

        return JsonResponse({"success":True})

@csrf_exempt
def close(request):
    if request.method=="POST":
        ticket_id2=request.POST.get('ticket_id2')
        data1=TicketDetail.objects.get(ticket_id=ticket_id2)
        data1.status=False
        data1.save()
        return JsonResponse({'success':True})

@csrf_exempt
def rply(request):
    contxt ={}
    if request.method=='GET':
        id=request.GET.get('id')
        email=request.GET.get('email')

        data1=TicketDetail.objects.get(ticket_id=id)

        contxt={ 'ticket_id':data1.ticket_id,
                 'catagery':data1.get_catagory_display(),
                 'subject': data1.subject,
                 'description':data1.description,
                 'email':email,

        }
        print (contxt)
        data2=CommentBox.objects.filter(ticket=id)
        data1=Signup.objects.get(email=email)
        profile_picture=(data1.profile_picture)
        profile_picture= request.scheme + "://" + request.get_host() + '/media/' + str(profile_picture)

        msg1=[]
        for i in data2:

            msg={'message': i.message,
                 'created': i.created,
                 'msg_flag': i.msg_flag,

                 }
            msg1.append(msg)
        return render(request, 'comment.html', {'contxt': contxt,'msg1': msg1,'profile_picture':profile_picture})

    elif request.method=="POST":
        email=request.POST.get('email')
        ticket_id1=request.POST.get('ticket_id1')
        message=request.POST.get('comment')

        data2=TicketDetail.objects.get(ticket_id=ticket_id1)
        CommentBox.objects.create(user=data2.user, message=message,ticket=data2,msg_flag=False)

        return render(request,'comment.html')


@csrf_exempt
def adminrply(request):
    if request.method=='GET':
        id=request.GET.get('id')
        username=request.GET.get('username')
        data1=TicketDetail.objects.get(ticket_id=id)

        profile_picture=data1.user.profile_picture
        profile_picture = request.scheme + "://" + request.get_host() + '/media/' + str(profile_picture)
        contxt={ 'ticket_id': data1.ticket_id,
                 'catagery': data1.get_catagory_display(),
                 'subject': data1.subject,
                 'description':data1.description,
                 'username':username,
        }

        data2 = CommentBox.objects.filter(ticket=id)
        msg1 = []
        for i in data2:
            msg = {'message': i.message,
                   'created': i.created,
                   'msg_flag':i.msg_flag,
                   }
            msg1.append(msg)
        return render(request,'adminrply.html',{'contxt': contxt, 'msg1': msg1,'profile_picture':profile_picture})

    elif request.method=="POST":
        username=request.POST.get('username')
        ticket_id1=request.POST.get('ticket_id1')
        message=request.POST.get('comment')

        data2 = TicketDetail.objects.get(ticket_id=ticket_id1)
        data1=AdminSignup.objects.get(username=username)
        CommentBox.objects.create(admin=data1, message=message,ticket=data2,msg_flag=True)
    return render(request,'adminrply.html')

