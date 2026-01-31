"""Item Schemas"""
from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class ItemBase(BaseModel):
    """Base item schema"""

    title: str
    description: Optional[str] = None
    is_active: bool = True


class ItemCreate(ItemBase):
    """Create item schema"""

    pass


class ItemUpdate(BaseModel):
    """Update item schema (all fields optional)"""

    title: Optional[str] = None
    description: Optional[str] = None
    is_active: Optional[bool] = None


class ItemResponse(ItemBase):
    """Item response schema"""

    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
