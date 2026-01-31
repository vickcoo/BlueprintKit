# __PROJECT_NAME__ - Django REST API

Enterprise Python REST API with Django REST Framework.

## 🚀 Quick Start

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## ✨ Features

- ✅ Django 5 + DRF
- ✅ Admin panel
- ✅ ORM & Migrations
- ✅ Authentication ready
- ✅ CORS configured

## 📁 Structure

```
project/
├── api/              # API app
├── project/          # Settings
└── manage.py         # Django CLI
```

## 🚀 Deploy

**Heroku**: Procfile included
**Railway**: Auto-detected
**AWS**: Use EB CLI

Production: `gunicorn project.wsgi`
