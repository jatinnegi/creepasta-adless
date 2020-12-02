from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import views
from .serializers import (
    StoriesSerializer, PaginationSerializer)
from .utilities import (get_stories, get_story)
from rest_framework import status

# Create your views here.


class StoriesView(views.APIView):
    def get(self, request, *args, **kwargs):
        page = kwargs['page']

        data = get_stories(page)

        results = StoriesSerializer(data, many=True).data

        return Response(results)


class PaginationView(views.APIView):
    def get(self, request, *args, **kwargs):
        page = kwargs['page']

        next_page = get_stories(page + 1)
        next_to_next_page = get_stories(page + 2)

        data = {
            'next_page': next_page.__len__() != 0,
            'next_to_next_page': next_to_next_page.__len__() != 0
        }

        results = PaginationSerializer(data).data

        return Response(results)

class StoryView(views.APIView):
    def get(self, request, title, format=None):
        story = get_story(title)

        if story == 0:
            return Response({}, status=status.HTTP_404_NOT_FOUND)
        return Response(story, status=status.HTTP_200_OK)
