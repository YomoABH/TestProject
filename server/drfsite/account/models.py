from django.db import models


class Some(models.Model):
    name = models.CharField(max_length=50)
    number = models.CharField(max_length=50)
    age = models.CharField(max_length=50)


