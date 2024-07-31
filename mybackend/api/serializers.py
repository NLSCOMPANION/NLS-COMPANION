from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from .models import CustomUser, Task

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'first_name', 'last_name', 'email', 'phone_number', 'referral_email', 'heard_about')

class CustomUserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password_confirm = serializers.CharField(write_only=True, required=True)
    username = serializers.CharField(required=True)

    class Meta:
        model = CustomUser
        fields = ('first_name', 'last_name', 'username', 'email', 'phone_number', 'password', 'password_confirm', 'referral_email', 'heard_about')

    def validate_username(self, value):
        if CustomUser.objects.filter(username=value).exists():
            raise serializers.ValidationError("Username already exists")
        return value

    def validate(self, attrs):
        # Check if both passwords match
        if attrs['password'] != attrs['password_confirm']:
            raise serializers.ValidationError({"password": "Passwords must match."})
        return attrs

    def create(self, validated_data):
        # Remove password_confirm from validated_data
        validated_data.pop('password_confirm')
        # Create the user with the provided data
        user = CustomUser(**validated_data)
        user.set_password(validated_data['password'])  # Hash the password
        user.save()
        return user

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
