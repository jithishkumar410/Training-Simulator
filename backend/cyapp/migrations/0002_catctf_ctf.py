# Generated by Django 5.0.2 on 2024-02-27 07:55

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cyapp', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Catctf',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('catid', models.IntegerField()),
                ('catname', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Ctf',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cif', models.IntegerField()),
                ('cq', models.TextField()),
                ('cdes', models.TextField()),
                ('ch1', models.TextField()),
                ('ch2', models.TextField()),
                ('ans', models.TextField()),
                ('cp', models.IntegerField()),
                ('com', models.BooleanField(default=False)),
                ('cat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cyapp.catctf')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
