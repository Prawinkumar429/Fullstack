from asyncio.windows_events import NULL
from django.db import models
from datetime import *
from django_userforeignkey.models.fields import UserForeignKey
from django.utils.translation import gettext as _
from datetime import date, timedelta
from account.models import User
from datetime import datetime, timezone
import pytz
from django.utils import timezone
from django import forms
import zoneinfo
from django.db import models
from datetime import timedelta




# Create your models here.
naive = datetime.now()
timezone = pytz.timezone("Asia/Kolkata")
aware1 = timezone.localize(naive)
# Curries Model




class Curries(models.Model):
    # Admin = UserForeignKey(auto_user_add=True, verbose_name="Admin", related_name="models")
    # User = models.ForeignKey(User, on_delete=models.PROTECT)
    Order_No = models.CharField(max_length=25, unique=True)
    Hdr = models.CharField(max_length=250,null=True,blank=True)
    C = models.CharField(max_length=250,null=True,blank=True)
    Prog = models.CharField(max_length=250,null=True,blank=True)
    Est_Ship = models.DateField(null=True,blank=True)
    Cust_Reqd_Ship = models.DateField(null=True,blank=True)
    PO_Recd = models.DateField(null=True,blank=True)
    Lines = models.FloatField(null=True,blank=True)
    Assigned_to = models.CharField(max_length=250,null=True,blank=True)
    Holds = models.CharField(max_length=250,null=True,blank=True)
    Time_Started = models.DateTimeField(null=True,blank=True)
    Value = models.FloatField(null=True,blank=True)
    # SMFG = 'SMFG'
    # PTYA = 'PTYA'
    # QIKS = 'QIKS'
    # PTYB = 'PTYB'
    # PTYC = 'PTYC'
    # ACCOUNT_TYPE_CHOICES = [
    #     (SMFG , 'SMFG'),
    #     (PTYA , 'PTYA'),
    #     (QIKS , 'QIKS'),
    #     (PTYB , 'PTYB'),
    #     (PTYC , 'PTYC'),
    # ]
    # Program_Type = models.CharField(
    #     max_length=11,
    #     choices=ACCOUNT_TYPE_CHOICES,
    # )
    # Lines = models.FloatField()
    Work_assigned_date = models.DateTimeField(null=True,blank=True)
    Review_date = models.DateTimeField(null=True,blank=True)
    Release_date = models.DateTimeField(null=True,blank=True,)
    Hold = models.BooleanField(default=False)
    # Y = 'Yes'
    # N = 'No'
    # CHOICES = [
    #     (Y , 'Yes'),
    #     (N , 'No'),
    # ]
    # Hold_Status = models.CharField(
    #     max_length=11,
    #     choices=CHOICES,
    # )
    #Master file
    Masterfile = models.BooleanField(default=False)
    Masterfile_start = models.DateTimeField(null=True,blank=True)
    Masterfile_end = models.DateTimeField(null=True,blank=True)
    Masterfile_start2 = models.DateTimeField(null=True,blank=True)
    Masterfile_end2 = models.DateTimeField(null=True,blank=True)
    Masterfile_start3 = models.DateTimeField(null=True,blank=True)
    Masterfile_end3 = models.DateTimeField(null=True,blank=True)
    Masterfile_start4 = models.DateTimeField(null=True,blank=True)
    Masterfile_end4 = models.DateTimeField(null=True,blank=True)
    Masterfile_start5 = models.DateTimeField(null=True,blank=True)
    Masterfile_end5 = models.DateTimeField(null=True,blank=True)
    Customer_qtn = models.BooleanField(default=False)
    Customer_qtn_start = models.DateTimeField(null=True,blank=True)
    Customer_qtn_end = models.DateTimeField(null=True,blank=True)
    Customer_qtn_start2 = models.DateTimeField(null=True,blank=True)
    Customer_qtn_end2 = models.DateTimeField(null=True,blank=True)
    Customer_qtn_start3 = models.DateTimeField(null=True,blank=True)
    Customer_qtn_end3 = models.DateTimeField(null=True,blank=True)
    Customer_qtn_start4 = models.DateTimeField(null=True,blank=True)
    Customer_qtn_end4 = models.DateTimeField(null=True,blank=True)
    Customer_qtn_start5 = models.DateTimeField(null=True,blank=True)
    Customer_qtn_end5 = models.DateTimeField(null=True,blank=True)
    Drafting_req = models.BooleanField(default=False)
    Drafting_req_start = models.DateTimeField(null=True,blank=True)
    Drafting_req_end = models.DateTimeField(null=True,blank=True)
    Drafting_req_start2 = models.DateTimeField(null=True,blank=True)
    Drafting_req_end2 = models.DateTimeField(null=True,blank=True)
    Drafting_req_start3 = models.DateTimeField(null=True,blank=True)
    Drafting_req_end3 = models.DateTimeField(null=True,blank=True)
    Drafting_req_start4 = models.DateTimeField(null=True,blank=True)
    Drafting_req_end4 = models.DateTimeField(null=True,blank=True)
    Drafting_req_start5 = models.DateTimeField(null=True,blank=True)
    Drafting_req_end5 = models.DateTimeField(null=True,blank=True)
    Drafting_qtn = models.BooleanField(default=False)
    Drafting_qtn_start = models.DateTimeField(null=True,blank=True)
    Drafting_qtn_end = models.DateTimeField(null=True,blank=True)
    Drafting_qtn_start2 = models.DateTimeField(null=True,blank=True)
    Drafting_qtn_end2 = models.DateTimeField(null=True,blank=True)
    Drafting_qtn_start3 = models.DateTimeField(null=True,blank=True)
    Drafting_qtn_end3 = models.DateTimeField(null=True,blank=True)
    Drafting_qtn_start4 = models.DateTimeField(null=True,blank=True)
    Drafting_qtn_end4 = models.DateTimeField(null=True,blank=True)
    Drafting_qtn_start5 = models.DateTimeField(null=True,blank=True)
    Drafting_qtn_end5 = models.DateTimeField(null=True,blank=True)
    Internal_qtn = models.BooleanField(default=False)
    Internal_qtn_start = models.DateTimeField(null=True,blank=True)
    Internal_qtn_end = models.DateTimeField(null=True,blank=True)
    Internal_qtn_start2 = models.DateTimeField(null=True,blank=True)
    Internal_qtn_end2 = models.DateTimeField(null=True,blank=True)
    Internal_qtn_start3 = models.DateTimeField(null=True,blank=True)
    Internal_qtn_end3 = models.DateTimeField(null=True,blank=True)
    Internal_qtn_start4 = models.DateTimeField(null=True,blank=True)
    Internal_qtn_end4 = models.DateTimeField(null=True,blank=True)
    Internal_qtn_start5 = models.DateTimeField(null=True,blank=True)
    Internal_qtn_end5 = models.DateTimeField(null=True,blank=True)
    Order_check = models.BooleanField(default=False)
    Order_check_start = models.DateTimeField(null=True,blank=True)
    Order_check_end = models.DateTimeField(null=True,blank=True)
    Order_check_start2 = models.DateTimeField(null=True,blank=True)
    Order_check_end2 = models.DateTimeField(null=True,blank=True)
    Order_check_start3 = models.DateTimeField(null=True,blank=True)
    Order_check_end3 = models.DateTimeField(null=True,blank=True)
    Order_check_start4 = models.DateTimeField(null=True,blank=True)
    Order_check_end4 = models.DateTimeField(null=True,blank=True)
    Order_check_start5 = models.DateTimeField(null=True,blank=True)
    Order_check_end5 = models.DateTimeField(null=True,blank=True)
    Hot_orders = models.CharField(max_length=250,null=True,blank=True)
    Remarks = models.CharField(max_length=250,null=True,blank=True)
    Created = models.DateTimeField(auto_now_add=True)
    Updated = models.DateTimeField(auto_now=True)
    # Masterfile_delay = models.DurationField(editable=False)
    # Customer_qtn_delay = models.DurationField(editable=False)
    # Drafting_req_delay = models.DurationField(editable=False)
    # Drafting_qtn_delay = models.DurationField(editable=False)
    # Internal_qtn_delay = models.DurationField(editable=False)
    # Order_check_delay = models.DurationField(editable=False)
    
    # @property
    # def us_release(self):
    #     if ((self.Release_date != None)):
    #         us_release = self.Release_date - timedelta(hours =10,minutes = 30)
    #         return us_release
    
    
    @property
    def Delay_assign_to_start(self):
        if ((self.Time_Started != None)and(self.Work_assigned_date != None)):
            Delay_assign_to_start = self.Time_Started-self.Work_assigned_date
            return Delay_assign_to_start
        
    @property
    def Total_time_delay(self):
        if ((self.Time_Started != None)and(self.Release_date != None)):
            Total_time_delay = self.Release_date-self.Time_Started
            return Total_time_delay
        
    @property
    def Delay_start_to_current(self):
        if ((self.Time_Started != None)and(self.Release_date == None)):
            Delay_start_to_current = aware1 - self.Time_Started
            return Delay_start_to_current.days


    @property
    def Masterfile_delay(self):
        if ((self.Masterfile_end != None)and(self.Masterfile_start != None)):
            Masterfile_delay = self.Masterfile_end-self.Masterfile_start
            return Masterfile_delay
    
    @property
    def Customer_qtn_delay(self):
        if ((self.Customer_qtn_end != None)and(self.Customer_qtn_start != None)):
            Customer_qtn_delay = self.Customer_qtn_end-self.Customer_qtn_start
            return Customer_qtn_delay
        
    @property
    def Drafting_req_delay(self):
        if ((self.Drafting_req_end != None)and(self.Drafting_req_start != None)):
            Drafting_req_delay = self.Drafting_req_end-self.Drafting_req_start
            return Drafting_req_delay
        
    @property
    def Drafting_qtn_delay(self):
        if ((self.Drafting_qtn_end != None)and(self.Drafting_qtn_start != None)):
            Drafting_qtn_delay = self.Drafting_qtn_end-self.Drafting_qtn_start
            return Drafting_qtn_delay
        
    @property
    def Internal_qtn_delay(self):
        if ((self.Internal_qtn_end != None)and(self.Internal_qtn_start != None)):
            Internal_qtn_delay = self.Internal_qtn_end-self.Internal_qtn_start
            return Internal_qtn_delay
        
    @property
    def Order_check_delay(self):
        if ((self.Order_check_end != None)and(self.Order_check_start != None)):
            Order_check_delay = self.Order_check_end-self.Order_check_start
            return Order_check_delay
        
        
        
    class Meta:
        verbose_name_plural='Admin Curries'
        
        
    def __str__(self):
        return str(self.Order_No)
    
class user_currie(Curries):
    class Meta:
        proxy = True
        verbose_name_plural='User Curries'
        
    def user_currie(self):
        return user_currie.objects.all()

    

        
    