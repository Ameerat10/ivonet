# from rest_framework import serializers
# from .models import CustomUser

# class CustomUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         fields = ('id', 'username', 'password', 'email', 'name', 'birth_date', 'gender', 'phone_number', 'university', 'university_year', 'major', 'areas_of_interest')
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user = CustomUser.objects.create_user(**validated_data)
#         return user

# authentication/serializers.py
from rest_framework import serializers
from .models import CustomUser

# class CustomUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         fields = ('id', 'username', 'email', 'name', 'birth_date', 'gender', 'phone_number', 'university', 'university_year', 'major', 'areas_of_interest')
#         extra_kwargs = {
#             'password': {'write_only': True, 'required': False},
#             'username': {'read_only': True},
#         }

#     def update(self, instance, validated_data):
#         instance.name = validated_data.get('name', instance.name)
#         instance.birth_date = validated_data.get('birth_date', instance.birth_date)
#         instance.gender = validated_data.get('gender', instance.gender)
#         instance.phone_number = validated_data.get('phone_number', instance.phone_number)
#         instance.university = validated_data.get('university', instance.university)
#         instance.university_year = validated_data.get('university_year', instance.university_year)
#         instance.major = validated_data.get('major', instance.major)
#         instance.areas_of_interest = validated_data.get('areas_of_interest', instance.areas_of_interest)
#         instance.save()
#         return instance


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'name', 'birth_date', 'gender', 'phone_number', 'university', 'university_year', 'major', 'areas_of_interest', 'password')
        extra_kwargs = {
            'password': {'write_only': True, 'required': True},
            'username': {'required': True},  # Ensure username is required and writable
        }

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            name=validated_data['name'],
            password=validated_data['password'],
            birth_date=validated_data.get('birth_date'),
            gender=validated_data.get('gender'),
            phone_number=validated_data.get('phone_number'),
            university=validated_data.get('university'),
            university_year=validated_data.get('university_year'),
            major=validated_data.get('major'),
            areas_of_interest=validated_data.get('areas_of_interest'),
        )
        return user
