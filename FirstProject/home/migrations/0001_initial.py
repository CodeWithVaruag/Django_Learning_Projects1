# Generated by Django 4.2.1 on 2023-09-22 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=112)),
                ('phone', models.CharField(max_length=12)),
                ('email', models.CharField(max_length=112)),
                ('desc', models.TextField()),
                ('date', models.DateField()),
            ],
        ),
    ]