from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Item
from .serializers import ItemSerializer


@api_view(['GET'])
def health_check(request):
    """Health check endpoint."""
    return Response({'status': 'ok', 'message': '{{PROJECT_NAME}} API is running'})


class ItemViewSet(viewsets.ModelViewSet):
    """
    ViewSet for viewing and editing Item instances.
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
