from django.contrib import admin
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import User

# Register your models here.
@admin.register(User)
class UserAdmin(DjangoUserAdmin):
    """Define admin model for custom User model with no email field."""

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('Emp_Id','first_name', 'last_name','Department','Designation','Team_Type','Team_Name','image')}),
         (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                        'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2','is_staff','is_admin','groups', 'user_permissions',),
        }),
    )
    #exclude = ('is_active', 'is_superuser','last_login', 'date_joined')
    list_display = ('Emp_Id','email', 'first_name', 'last_name', 'Department','Designation','Team_Type','Team_Name','Profile_Pic','is_admin','is_staff','last_login')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('id',)
    list_filter = ['Department','Designation']
    #list_display_links = None
    #list_editable = ['Department','Designation']
    #readonly_fields = ['Department','Designation']
    readonly_fields = ['is_active','is_superuser','last_login']
    