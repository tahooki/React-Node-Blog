from django.http import HttpResponse

# Create your views here.
from users.models import User


def index(request):
    user = User("psi59@lalaworks.com", "sangil", "1234")
    user.save()

    return HttpResponse("Hello, world. You're at the polls index.")
