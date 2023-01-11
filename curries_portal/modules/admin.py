from cgi import test
from django.contrib import admin
from .models import Curries, user_currie
from import_export.admin import ImportExportModelAdmin
from datetime import timedelta
from django.utils.html import format_html

# from django.contrib.admin.models import LogEntry
# from django.contrib.sessions.models import Session
#from django.contrib.contenttypes.models import ContentType


# Register your models here.

# Curries Admin
#admin.site.register(ContentType)
# @admin.register(LogEntry)
# class LogEntryAdmin(admin.ModelAdmin):
#     # to have a date-based drilldown navigation in the admin page
#     date_hierarchy = 'action_time'

#     # to filter the resultes by users, content types and action flags
#     list_filter = [
#         'user',
#         'content_type',
#         'action_flag'
#     ]

#     # when searching the user will be able to search in both object_repr and change_message
#     search_fields = [
#         'object_repr',
#         'change_message'
#     ]

#     list_display = [
#         'action_time',
#         'user',
#         'content_type',
#         'action_flag',
        
#     ]

# class SessionAdmin(admin.ModelAdmin):
#     def _session_data(self, obj):
#         return obj.get_decoded()
#     list_display = ['session_key', '_session_data', 'expire_date',]
# admin.site.register(Session, SessionAdmin)
@admin.register(Curries) 
class CurriesAdmin(ImportExportModelAdmin):
  list_display = ('Order_No','Prog','Holds','Assigned_to','PO_Recd','Work_assigned_date','Time_Started','Review_date','Release_date','Delay_assign_to_start','Delay_start_to_current','Total_time_delay','Masterfile_delay','Customer_qtn_delay','Drafting_req_delay','Drafting_qtn_delay','Internal_qtn_delay','Order_check_delay',)
  #radio_fields = {"Program_Type": admin.VERTICAL}
  list_filter = ['Time_Started','Assigned_to','Holds','Prog']
  list_per_page = 20
  list_display_links = ['Order_No']
  search_fields = ['Order_No','Assigned_to','id']
  readonly_fields = ['Masterfile','Masterfile_start', 'Masterfile_end','Customer_qtn','Customer_qtn_start', 'Customer_qtn_end','Drafting_req','Drafting_req_start', 'Drafting_req_end','Drafting_qtn','Drafting_qtn_start', 'Drafting_qtn_end','Internal_qtn','Internal_qtn_start', 'Internal_qtn_end','Order_check','Order_check_start', 'Order_check_end',
                     'Masterfile_start2', 'Masterfile_end2','Masterfile_start3', 'Masterfile_end3','Masterfile_start4', 'Masterfile_end4','Masterfile_start5', 'Masterfile_end5',
                     'Customer_qtn_start2', 'Customer_qtn_end2','Customer_qtn_start3', 'Customer_qtn_end3','Customer_qtn_start4', 'Customer_qtn_end4','Customer_qtn_start5', 'Customer_qtn_end5',
                     'Drafting_req_start2', 'Drafting_req_end2','Drafting_req_start3', 'Drafting_req_end3','Drafting_req_start4', 'Drafting_req_end4','Drafting_req_start5', 'Drafting_req_end5',
                     'Drafting_qtn_start2', 'Drafting_qtn_end2','Drafting_qtn_start3', 'Drafting_qtn_end3','Drafting_qtn_start4', 'Drafting_qtn_end4','Drafting_qtn_start5', 'Drafting_qtn_end5',
                     'Internal_qtn_start2', 'Internal_qtn_end2','Internal_qtn_start3', 'Internal_qtn_end3','Internal_qtn_start4', 'Internal_qtn_end4','Internal_qtn_start5', 'Internal_qtn_end5',
                     'Order_check_start2', 'Order_check_end2','Order_check_start3', 'Order_check_end3','Order_check_start4', 'Order_check_end4','Order_check_start5', 'Order_check_end5']
  fieldsets = (
      ('PO info', {
          'fields': ('Order_No','Hdr','C','Prog','Est_Ship','Cust_Reqd_Ship','PO_Recd','Lines','Assigned_to','Holds','Value','Work_assigned_date','Time_Started','Review_date','Release_date','Hold')
      }),
      ('Masterfile info', {
          'fields': ('Masterfile','Masterfile_start', 'Masterfile_end','Masterfile_start2', 'Masterfile_end2','Masterfile_start3', 'Masterfile_end3','Masterfile_start4', 'Masterfile_end4','Masterfile_start5', 'Masterfile_end5')
      }),
      ('Customer Question info', {
          'fields': ('Customer_qtn','Customer_qtn_start', 'Customer_qtn_end','Customer_qtn_start2', 'Customer_qtn_end2','Customer_qtn_start3', 'Customer_qtn_end3','Customer_qtn_start4', 'Customer_qtn_end4','Customer_qtn_start5', 'Customer_qtn_end5')
      }),
      ('Drafting Request info', {
          'fields': ('Drafting_req','Drafting_req_start', 'Drafting_req_end','Drafting_req_start2', 'Drafting_req_end2','Drafting_req_start3', 'Drafting_req_end3','Drafting_req_start4', 'Drafting_req_end4','Drafting_req_start5', 'Drafting_req_end5')
      }),
      ('Drafting Question info', {
          'fields': ('Drafting_qtn','Drafting_qtn_start', 'Drafting_qtn_end','Drafting_qtn_start2', 'Drafting_qtn_end2','Drafting_qtn_start3', 'Drafting_qtn_end3','Drafting_qtn_start4', 'Drafting_qtn_end4','Drafting_qtn_start5', 'Drafting_qtn_end5')
      }),
      ('Internal Question info', {
          'fields': ('Internal_qtn','Internal_qtn_start', 'Internal_qtn_end','Internal_qtn_start2', 'Internal_qtn_end2','Internal_qtn_start3', 'Internal_qtn_end3','Internal_qtn_start4', 'Internal_qtn_end4','Internal_qtn_start5', 'Internal_qtn_end5')
      }),
      ('Order checking info', {
          'fields': ('Order_check','Order_check_start', 'Order_check_end','Order_check_start2', 'Order_check_end2','Order_check_start3', 'Order_check_end3','Order_check_start4', 'Order_check_end4','Order_check_start5', 'Order_check_end5')
      }),
      ('Addtional info', {
          'fields': ('Hot_orders', 'Remarks')
      }),
   )




  
  
@admin.register(user_currie) 
class user_currieAdmin(admin.ModelAdmin):
  list_display = ('id','Order_No','Assigned_to','Prog','Masterfile_delay','Customer_qtn_delay','Drafting_req_delay','Drafting_qtn_delay','Internal_qtn_delay','Order_check_delay',)
  #radio_fields = {"Program_Type": admin.VERTICAL}
  list_filter = ['Time_Started','Assigned_to','Holds','Prog']
  list_per_page = 20
  list_display_links = ['Order_No']
  search_fields = ['Order_No','Assigned_to','id']
  readonly_fields = ['Order_No','Hdr','C','Prog','Est_Ship','Cust_Reqd_Ship','PO_Recd','Lines','Assigned_to','Holds','Value','Work_assigned_date','Time_Started','Review_date','Release_date','Hold']
  fieldsets = (
      ('PO info', {
          'fields': ('Order_No','Hdr','C','Prog','Est_Ship','Cust_Reqd_Ship','PO_Recd','Lines','Assigned_to','Holds','Value','Work_assigned_date','Time_Started','Review_date','Release_date','Hold')
      }),
      ('Masterfile info', {
          'fields': ('Masterfile','Masterfile_start', 'Masterfile_end','Masterfile_start2', 'Masterfile_end2','Masterfile_start3', 'Masterfile_end3','Masterfile_start4', 'Masterfile_end4','Masterfile_start5', 'Masterfile_end5')
      }),
      ('Customer Question info', {
          'fields': ('Customer_qtn','Customer_qtn_start', 'Customer_qtn_end','Customer_qtn_start2', 'Customer_qtn_end2','Customer_qtn_start3', 'Customer_qtn_end3','Customer_qtn_start4', 'Customer_qtn_end4','Customer_qtn_start5', 'Customer_qtn_end5')
      }),
      ('Drafting Request info', {
          'fields': ('Drafting_req','Drafting_req_start', 'Drafting_req_end','Drafting_req_start2', 'Drafting_req_end2','Drafting_req_start3', 'Drafting_req_end3','Drafting_req_start4', 'Drafting_req_end4','Drafting_req_start5', 'Drafting_req_end5')
      }),
      ('Drafting Question info', {
          'fields': ('Drafting_qtn','Drafting_qtn_start', 'Drafting_qtn_end','Drafting_qtn_start2', 'Drafting_qtn_end2','Drafting_qtn_start3', 'Drafting_qtn_end3','Drafting_qtn_start4', 'Drafting_qtn_end4','Drafting_qtn_start5', 'Drafting_qtn_end5')
      }),
      ('Internal Question info', {
          'fields': ('Internal_qtn','Internal_qtn_start', 'Internal_qtn_end','Internal_qtn_start2', 'Internal_qtn_end2','Internal_qtn_start3', 'Internal_qtn_end3','Internal_qtn_start4', 'Internal_qtn_end4','Internal_qtn_start5', 'Internal_qtn_end5')
      }),
      ('Order checking info', {
          'fields': ('Order_check','Order_check_start', 'Order_check_end','Order_check_start2', 'Order_check_end2','Order_check_start3', 'Order_check_end3','Order_check_start4', 'Order_check_end4','Order_check_start5', 'Order_check_end5')
      }),
      ('Addtional info', {
          'fields': ('Hot_orders', 'Remarks')
      }),
   )

