# Generated by Django 2.0.3 on 2018-03-22 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticketapp', '0003_auto_20180322_0449'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticketdetail',
            name='status',
            field=models.BooleanField(default=False),
        ),
    ]
