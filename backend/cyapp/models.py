from django.db import models
from django.contrib.auth.models import User

class Difficulty(models.TextChoices):
        EASY = 'easy', 'Easy'
        MEDIUM = 'medium', 'Medium'
        HARD = 'hard', 'Hard'
class Demo(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField()

class Catagory(models.Model):
    catid = models.AutoField(primary_key=True, unique=True)
    catname = models.TextField()

    def __str__(self):
        return self.catname

class Courses(models.Model):
    cname = models.ForeignKey(Catagory, on_delete=models.CASCADE)
    userid = models.ManyToManyField(User)
    corname = models.TextField()
    courseid = models.AutoField(primary_key=True)
    cimg = models.ImageField(upload_to='images/')
    cdes1 = models.TextField()
    cdes2 = models.TextField()
    cdes3 = models.TextField()
    cdate = models.DateField(auto_now_add=True)
    dur = models.TextField()
    author = models.TextField()
    enc = models.BooleanField(default=False)
    crating = models.IntegerField()
    com = models.BooleanField(default=False)

    def __str__(self):
        return self.corname

class Testq(models.Model):
    tid = models.IntegerField()
    test1 = models.TextField()
    o1 = models.TextField()
    o2 = models.TextField()
    o3 = models.TextField()
    o4 = models.TextField()
    ans = models.TextField()

class Coudata(models.Model):
    vid = models.AutoField(primary_key=True)
    corname = models.ForeignKey(Courses, on_delete=models.CASCADE)
    vhead = models.TextField()
    vilink = models.URLField(max_length=300)
    vdes1 = models.TextField()
    vdes2 = models.TextField(null=True)
    vdes3 = models.TextField(null=True)
    vdes4 = models.TextField(null=True)
    vdes5 = models.TextField()
    testid = models.IntegerField()
    userid = models.IntegerField()
    com = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.corname.corname} - {self.vhead}"

class Catctf(models.Model):
    catid=models.IntegerField()
    catname=models.TextField()

    def __str__(self):
        return self.catname

class Ctf(models.Model):
    cif = models.IntegerField() 
    cat = models.ForeignKey(Catctf, on_delete=models.CASCADE)
    cq = models.TextField()
    caut= models.TextField()
    cdes = models.TextField()
    ch1 = models.TextField()
    ch2 = models.TextField(null=False)
    ans = models.TextField()
    cp=models.IntegerField()
    user=models.ManyToManyField(User)
    cfile = models.FileField(upload_to='files/')
    com=models.BooleanField(default=False)
    diff = models.CharField(
        max_length=10,
        choices=Difficulty.choices,
        default=Difficulty.EASY,
    )
    def __str__(self):
        return self.cq

class Ar(models.Model):
    model_id=models.AutoField(primary_key=True)
    model_name=models.TextField()
    file=models.FileField(upload_to='./files', blank=True)
    model_des=models.TextField()
    modelQR = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.model_name
 
