# Generated by Django 5.0.3 on 2024-03-19 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cyapp', '0010_ctf_caut'),
    ]

    operations = [
        migrations.CreateModel(
            name='ar',
            fields=[
                ('model_id', models.AutoField(primary_key=True, serialize=False)),
                ('model_name', models.TextField()),
                ('file', models.FileField(blank=True, upload_to='./files')),
                ('model_des', models.TextField()),
                ('modelQR', models.ImageField(upload_to='images/')),
            ],
        ),
    ]
