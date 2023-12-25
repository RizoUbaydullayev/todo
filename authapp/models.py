from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser

class CustomUser(AbstractBaseUser):
    username = models.CharField(max_length=64)
    firstname = models.CharField(max_length=64)
    lastname = models.CharField(max_length=64)
    email = models.EmailField(unique=True, max_length=64)
