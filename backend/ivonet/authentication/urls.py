# from django.urls import path
# from .views import register_user, login_user

# urlpatterns = [
#     path('register/', register_user, name='register_user'),
#     path('login/', login_user, name='login_user'),
# ]


# authentication/urls.py
# urls.py
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import register_user, login_user, UserProfileView

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

