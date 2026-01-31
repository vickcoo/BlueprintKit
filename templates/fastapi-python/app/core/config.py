"""Application Configuration"""
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application settings"""

    PROJECT_NAME: str = "__PROJECT_NAME__"
    VERSION: str = "1.0.0"
    DESCRIPTION: str = "FastAPI REST API"
    API_PREFIX: str = "/api/v1"

    # Database
    DATABASE_URL: str = "sqlite:///./app.db"

    # Security
    SECRET_KEY: str = "change-this-in-production-use-openssl-rand-hex-32"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # CORS
    ALLOWED_ORIGINS: list[str] = ["http://localhost:3000", "http://localhost:8000"]

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
