from django.db import models
from django.conf import settings

class Feed(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Dashboard(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    stats = models.JSONField()  # Assuming stats are stored as JSON

    def __str__(self):
        return f"Dashboard for {self.user.username}"

class Application(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    opportunity = models.ForeignKey('Opportunity', on_delete=models.CASCADE)
    status = models.CharField(max_length=50)

    def __str__(self):
        return f"Application by {self.user.username} for {self.opportunity.title}"

class Message(models.Model):
    sender = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='sent_messages', on_delete=models.CASCADE)
    receiver = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='received_messages', on_delete=models.CASCADE)
    subject = models.CharField(max_length=200)
    body = models.TextField()
    date_sent = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.sender.username} to {self.receiver.username}"

class Opportunity(models.Model):
    CATEGORY_CHOICES = [
        ('internship', 'Internship'),
        ('summer_program', 'Summer Program'),
        ('scholarship', 'Scholarship'),
        ('grant', 'Grant'),
        ('summit', 'Summit'),
        ('conference', 'Conference')
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    link = models.URLField()
    deadline = models.DateField()

    def __str__(self):
        return self.title

class JobListing(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    description = models.TextField()
    link = models.URLField()
    date_posted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Recommendation(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Recommendation for {self.user.username}"

class Setting(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    preferences = models.JSONField()

    def __str__(self):
        return f"Settings for {self.user.username}"
