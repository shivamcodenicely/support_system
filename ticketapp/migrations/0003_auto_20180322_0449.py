# Generated by Django 2.0.3 on 2018-03-22 04:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticketapp', '0002_auto_20180322_0443'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ticketdetail',
            name='created',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
