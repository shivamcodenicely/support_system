# Generated by Django 2.0.3 on 2018-03-26 06:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticketapp', '0006_auto_20180326_0628'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ticketdetail',
            name='ticket_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
