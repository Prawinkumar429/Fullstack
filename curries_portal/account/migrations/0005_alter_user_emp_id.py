# Generated by Django 3.2.16 on 2022-11-04 07:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0004_auto_20221104_1313'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='Emp_Id',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
