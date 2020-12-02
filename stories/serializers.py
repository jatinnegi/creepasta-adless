from rest_framework import serializers


class StoriesSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=256)
    summary = serializers.CharField(max_length=500)
    link = serializers.CharField(max_length=256)
    thumbnail = serializers.CharField(max_length=256)
    date_published = serializers.CharField(max_length=100)


class PaginationSerializer(serializers.Serializer):
    next_page = serializers.BooleanField(default=True)
    next_to_next_page = serializers.BooleanField(default=True)
