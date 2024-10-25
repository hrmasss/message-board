from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
from django.utils import timezone
from datetime import timedelta
from .models import Message


def message_board(request):
    today = timezone.now().date()
    start_of_day = timezone.datetime.combine(today, timezone.datetime.min.time())
    end_of_day = timezone.datetime.combine(today, timezone.datetime.max.time())

    messages = Message.objects.filter(created_at__range=(start_of_day, end_of_day))
    return render(request, "message_board/message_board.html", {"messages": messages})


@require_http_methods(["POST"])
def create_message(request):
    content = request.POST.get("content", "").strip()
    if content:
        message = Message.objects.create(content=content)
        return render(
            request, "message_board/message_card_partial.html", {"message": message}
        )
    return HttpResponse(status=400)
