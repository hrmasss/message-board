from django.urls import path
from . import views

app_name = "message_board"

urlpatterns = [
    path("", views.message_board, name="message_board"),
    path("create/", views.create_message, name="create_message"),
]
