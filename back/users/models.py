from django.db import models

from mongoengine import *


class User(Document):
    email = EmailField(required=True, unique=True)
    name = StringField(required=True)
    pwd = StringField(required=True)

    def __init__(self, email, name, pwd, *args, **values):
        super().__init__(*args, **values)
        self.email = email
        self.name = name
        self.pwd = pwd
