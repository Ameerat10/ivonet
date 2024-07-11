from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FeedViewSet, DashboardViewSet, ApplicationViewSet, MessageViewSet, OpportunityViewSet, JobListingViewSet, RecommendationViewSet, SettingViewSet

router = DefaultRouter()
router.register(r'feeds', FeedViewSet)
router.register(r'dashboard', DashboardViewSet)
router.register(r'applications', ApplicationViewSet)
router.register(r'messages', MessageViewSet)
router.register(r'opportunities', OpportunityViewSet)
router.register(r'job-listings', JobListingViewSet)
router.register(r'recommendations', RecommendationViewSet)
router.register(r'settings', SettingViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
