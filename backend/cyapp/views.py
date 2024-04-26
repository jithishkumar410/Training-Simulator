
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import login, authenticate, logout
from .serialzers import Cos,Cod,Te,CtfSerializer,Cat,Cactf
from .models import Demo,Coudata,Courses,Catagory,Testq,Ctf,Catctf,Ar
from rest_framework import permissions, status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['POST'])
@permission_classes([AllowAny])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def addusr(request):
    user=User.objects.create_user(username=request.data['username'],email=request.data['email'],password=request.data['password'])
    user.save()
    if user:
        return Response({'message': 'Register successful'},status=200)
    return Response(status=400)



@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    user = authenticate(request, username=username, password=password)
    
    if user:
        login(request, user)
        refresh = RefreshToken.for_user(user)
        return Response({
            'message': 'Login successful',
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
def Logout(request):
    logout(request)
    return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
def course(request):
    if request.method == 'POST':
        print(request.data.get('cn'))
        if request.data.get('cn')=='all':
            m=Courses.objects.all
            serializer = Cos(m, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        category_name = request.data.get('cn')
        courses = Courses.objects.filter(cname__catname=category_name)
        serializer = Cos(courses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    courses = Courses.objects.all()
    serializer = Cos(courses, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def cod(request,id):
    a=Coudata.objects.filter(corname_id=id)
    s=Cod(a,many=True)
    return Response(s.data)

@api_view(['GET'])
def ts(request,id):
    a=Testq.objects.get(tid=id)
    s=Te(a,many=False)
    return Response(s.data)

@api_view(['GET'])
def cat(request):
    a=Catagory.objects.all()
    s=Cat(a,many=True)
    return Response(s.data)

@api_view(['GET'])
def cactf(request):
    a=Catctf.objects.all()
    s=Cactf(a,many=True)
    return Response(s.data)

# @api_view(['GET', 'POST'])
# def addusc(request):
#     if request.method == 'POST':
#         print(request.data.get('ui'))
#         a=request.data.get('ui')
#         b=
#         user=User.objects.get(id=a)
#         Courses.objects.
    

@api_view(['POST'])
def enroll(request):
    a=request.data.get('ui')
    b=request.data.get('ci')
    c=Courses.objects.get(courseid=b)
    d=User.objects.get(id=a)
    c.userid.add(d)
    c.save()
    e=d.courses_set.get(courseid=b)
    return Response({'s':'done'})

@api_view(['POST'])
def ccom(request):
    a=request.data.get('ui')
    b=request.data.get('ci')
    c=Ctf.objects.get(cif=b)
    d=User.objects.get(id=a)
    c.user.add(d)
    c.save()
    e=d.ctf_set.get(cif=b)
    print(e)
    return Response({'s':'done'})


@api_view(['GET'])
def getuc(request,n):
    u=User.objects.get(username=n)
    b=Courses.objects.filter(userid=u)
    s=Cos(b,many=True)
    return Response(s.data)

@api_view(['GET'])
def getcc(request,n):
    u=User.objects.get(username=n)
    b=Ctf.objects.filter(user=u)
    s=CtfSerializer(b,many=True)
    return Response(s.data)



@api_view(['GET'])
def cot(request, id):
    a=Coudata.objects.get(vid=id)
    s=Cod(a,many=False)
    return Response(s.data)
   
    

@api_view(['GET'])  
@permission_classes([IsAuthenticated])
def userhome(request):
    return Response({'message': 'User is authenticated', 'userid': request.user.id, 'username':request.user.username}, status=status.HTTP_200_OK)


@api_view(['GET','POST'])
def ctf(request):
    if request.method == 'POST':

        if request.data.get('cn')=='all':
            ctf_objects = Ctf.objects.all()
            serializer = CtfSerializer(ctf_objects, many=True)
            return Response(serializer.data)
        category_name = request.data.get('cn')
        courses = Ctf.objects.filter(cat__catname=category_name)
        serializer =  CtfSerializer(courses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    ctf_objects = Ctf.objects.all()
    serializer = CtfSerializer(ctf_objects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def ctf3(request,id):
    a=Ctf.objects.get(cif=id)
    serializer = CtfSerializer(a, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def ctf2(request,id,id1):
    user_instance = User.objects.get(id=id1)
    a = Ctf.objects.filter(cif=id, user=user_instance)
    if a:
        a[0].com=True
        a[0].save()
        serializer = CtfSerializer(a, many=True)
        return Response(serializer.data)
    return Response({'info':'no data found'})

@api_view(['GET'])
def dash(request,id):
    user_instance = User.objects.get(id=id)
    a = Ctf.objects.filter(user=user_instance,com=True)
    serializer = CtfSerializer(a, many=True)
    return Response(serializer.data)

def ar(request):
    a=Ar.objects.all()
    print(a)
    return render(request,'index.html',{'a':a})