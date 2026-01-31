# __PROJECT_NAME__ - FastAPI REST API

A modern, production-ready REST API built with FastAPI, SQLAlchemy, and Pydantic.

## 🚀 Tech Stack

- **FastAPI** - Modern, fast web framework for building APIs
- **SQLAlchemy** - SQL toolkit and ORM
- **Pydantic** - Data validation using Python type annotations
- **Alembic** - Database migration tool
- **Uvicorn** - ASGI server

## ✨ Features

- ✅ Async/await support
- ✅ Automatic API documentation (Swagger/ReDoc)
- ✅ SQLAlchemy ORM with async support
- ✅ Pydantic schemas for validation
- ✅ Database migrations with Alembic
- ✅ CORS middleware configured
- ✅ Health check endpoints
- ✅ Environment-based configuration
- ✅ RESTful API structure

## 📁 Project Structure

```
fastapi-python/
├── app/
│   ├── api/              # API routes
│   │   ├── endpoints/    # Individual endpoint modules
│   │   └── __init__.py   # API router
│   ├── core/             # Core configurations
│   │   └── config.py     # Settings and environment variables
│   ├── db/               # Database
│   │   ├── database.py   # Database connection
│   │   └── models.py     # SQLAlchemy models
│   ├── schemas/          # Pydantic schemas
│   │   └── item.py       # Example schema
│   └── __init__.py
├── alembic/              # Database migrations
├── main.py               # Application entry point
├── requirements.txt      # Python dependencies
├── .env.example          # Example environment variables
└── README.md            # This file
```

## 🏁 Quick Start

### 1. Install Dependencies

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\\Scripts\\activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Configure Environment

```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your configuration
# DATABASE_URL, SECRET_KEY, etc.
```

### 3. Initialize Database

```bash
# Create initial migration
alembic revision --autogenerate -m "Initial migration"

# Run migrations
alembic upgrade head
```

### 4. Run Development Server

```bash
# Start the server
python main.py

# Or use uvicorn directly
uvicorn main:app --reload
```

The API will be available at:
- **API**: http://localhost:8000
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 📝 Environment Variables

Create a `.env` file with the following variables:

```env
PROJECT_NAME=__PROJECT_NAME__
VERSION=1.0.0
DESCRIPTION=FastAPI REST API
API_PREFIX=/api/v1

# Database
DATABASE_URL=sqlite:///./app.db

# Security
SECRET_KEY=your-secret-key-here-change-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# CORS
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8000
```

## 🔨 Development

### Adding New Endpoints

1. Create endpoint file in `app/api/endpoints/`
2. Define routes using FastAPI decorators
3. Import and include in `app/api/__init__.py`

Example:

```python
# app/api/endpoints/users.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/users")
async def get_users():
    return {"users": []}
```

### Database Models

Define models in `app/db/models.py`:

```python
from sqlalchemy import Column, Integer, String
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
```

### Pydantic Schemas

Define schemas in `app/schemas/`:

```python
from pydantic import BaseModel

class UserCreate(BaseModel):
    email: str
    name: str

class UserResponse(BaseModel):
    id: int
    email: str
    name: str

    class Config:
        from_attributes = True
```

## 🧪 Testing

```bash
# Install testing dependencies
pip install pytest pytest-asyncio httpx

# Run tests
pytest
```

## 🚀 Deployment

### Production Server

```bash
# Install production dependencies
pip install gunicorn

# Run with gunicorn
gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```

### Docker

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Recommended Platforms

- **Railway** - Easy deployment with database
- **Render** - Free tier available
- **Fly.io** - Global deployment
- **AWS Lambda** - Serverless with Mangum adapter
- **DigitalOcean App Platform** - Simple PaaS

## 📚 API Documentation

Once running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

Auto-generated documentation includes:
- All endpoints
- Request/response models
- Try-it-out functionality

## 🔐 Security Best Practices

- ✅ Never commit `.env` file
- ✅ Use strong SECRET_KEY in production
- ✅ Enable HTTPS in production
- ✅ Implement rate limiting
- ✅ Validate all inputs with Pydantic
- ✅ Use parameterized queries (SQLAlchemy handles this)

## 📖 Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [Pydantic Documentation](https://docs.pydantic.dev/)
- [Alembic Documentation](https://alembic.sqlalchemy.org/)

## 📄 License

MIT License
