from django.contrib import admin
from .models import Feed, Dashboard, Application, Message, Opportunity, JobListing, Recommendation, Setting

admin.site.register(Feed)
admin.site.register(Dashboard)
admin.site.register(Application)
admin.site.register(Message)
admin.site.register(Opportunity)
admin.site.register(JobListing)
admin.site.register(Recommendation)
admin.site.register(Setting)

