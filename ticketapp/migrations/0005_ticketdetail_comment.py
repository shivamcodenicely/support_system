# Generated by Django 2.0.3 on 2018-03-24 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticketapp', '0004_ticketdetail_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticketdetail',
            name='comment',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]
