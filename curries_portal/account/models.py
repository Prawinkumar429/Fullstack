from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.conf import settings
from django.utils.html import mark_safe


# Create your models here.
class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


class User(AbstractUser):
    """User model."""

    username = None
    email = models.EmailField(_('email address'), unique=True)
    IT = 'IT'
    Design = 'Design'
    Estimation = 'Estimation'
    ACCOUNT_TYPE_CHOICESS = [
        (IT , 'IT'),
        (Design , 'Design',),
        (Estimation , 'Estimation'),
    ]
    Engineer = 'Engineer'
    Sr_Engineer = 'Sr_Engineer'
    Manager = 'Manager'
    ACCOUNT_TYPE_CHOICES = [
        (Engineer , 'Engineer'),
        (Sr_Engineer , 'Sr_Engineer'),
        (Manager , 'Manager'),
    ]
    Department = models.CharField(
        max_length=10,
        choices=ACCOUNT_TYPE_CHOICESS,
    null=True,blank=True)
    Designation = models.CharField(
        max_length=11,
        choices=ACCOUNT_TYPE_CHOICES,
    null=True,blank=True)
    is_admin = models.BooleanField(default=False)
    image=models.ImageField(upload_to="photos/",default='photos/tandaslogodashboard.png')
    Frames = 'Frames'
    Doors = 'Doors'
    Team_Type_CHOICES = [
        (Frames , 'Frames'),
        (Doors , 'Doors'),
    ]
    Team1 = 'Team1'
    Team2 = 'Team2'
    Team3 = 'Team3'
    Team_CHOICES = [
        (Team1 , 'Team1'),
        (Team2 , 'Team2'),
        (Team3 , 'Team3'),
    ]
    Team_Type = models.CharField(
        max_length=10,
        choices=Team_Type_CHOICES,
    null=True,blank=True)
    Team_Name = models.CharField(
        max_length=11,
        choices=Team_CHOICES,
    null=True,blank=True)
    Emp_Id = models.IntegerField(null=True,blank=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()
    
    
    @property
    def Profile_Pic(self):
        if self.image:
            return mark_safe('<img src="%s" width="50" />' % (self.image.url))
    
