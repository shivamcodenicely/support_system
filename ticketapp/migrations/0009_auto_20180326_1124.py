# Generated by Django 2.0.3 on 2018-03-26 11:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ticketapp', '0008_commentbox'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='commentbox',
            name='admincomment',
        ),
        migrations.RemoveField(
            model_name='commentbox',
            name='newcomment',
        ),
        migrations.RemoveField(
            model_name='commentbox',
            name='usercomment',
        ),
        migrations.AddField(
            model_name='commentbox',
            name='admin',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='ticketapp.AdminSignup'),
        ),
        migrations.AddField(
            model_name='commentbox',
            name='created',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='commentbox',
            name='message',
            field=models.TextField(blank=True, max_length=256, null=True),
        ),
        migrations.AddField(
            model_name='commentbox',
            name='msg_flag',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='commentbox',
            name='ticket',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='ticketapp.TicketDetail'),
        ),
        migrations.AddField(
            model_name='commentbox',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='ticketapp.Signup'),
        ),
    ]
