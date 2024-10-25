from django.db import models
from django.utils import timezone


class Message(models.Model):
    content = models.TextField(max_length=500)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"({self.created_at.strftime('%Y-%m-%d %H:%M')}): {self.content}"
