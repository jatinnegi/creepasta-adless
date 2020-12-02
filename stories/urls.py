from django.urls import path
from .views import (StoriesView, PaginationView, StoryView)

urlpatterns = [
    path('api/stories/<int:page>', StoriesView.as_view()),
    path('api/pagination_update/<int:page>', PaginationView.as_view()),
    path('api/story/<str:title>', StoryView.as_view()),
]
