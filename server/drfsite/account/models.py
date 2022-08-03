from django.db import models


class Some(models.Model):
    name = models.CharField(max_length=50)
    number = models.CharField(max_length=12)
    age = models.SmallIntegerField()


