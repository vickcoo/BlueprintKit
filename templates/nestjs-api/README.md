# {{PROJECT_NAME}}

A production-ready NestJS REST API with TypeScript, Prisma ORM, JWT authentication, and Swagger documentation.

## Tech Stack

- **NestJS** - Progressive Node.js framework for building efficient server-side applications
- **TypeScript** - Typed superset of JavaScript
- **Prisma** - Next-generation ORM for type-safe database access
- **PostgreSQL** - Powerful, open-source relational database
- **JWT** - JSON Web Tokens for authentication
- **Passport** - Authentication middleware
- **Swagger** - API documentation
- **Jest** - Testing framework
- **ESLint + Prettier** - Code quality and formatting

## Features

- Modular architecture (Auth, Users, Posts modules)
- JWT authentication with Passport
- Prisma ORM with PostgreSQL
- Swagger API documentation
- Global validation pipe
- Error handling
- Environment configuration
- CORS enabled
- Type-safe database queries
- Jest unit testing setup

## Project Structure

```
src/
├── common/              # Shared guards, decorators, filters
│   └── guards/          # JWT authentication guard
├── config/              # Configuration files
├── modules/             # Feature modules
│   ├── auth/            # Authentication module
│   │   ├── dto/         # Data transfer objects
│   │   ├── guards/      # Local auth guard
│   │   └── strategies/  # Passport strategies (JWT, Local)
│   ├── users/           # Users module
│   │   └── dto/         # User DTOs
│   └── posts/           # Posts module
│       └── dto/         # Post DTOs
├── prisma/              # Prisma module and service
├── app.module.ts        # Root module
└── main.ts              # Application entry point
```

## Quick Start

### Prerequisites

- Node.js >= 18.0.0
- PostgreSQL database
- npm or yarn

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/{{PROJECT_NAME}}?schema=public"

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d

# CORS
CORS_ORIGIN=http://localhost:3001
```

### Database Setup

Generate Prisma client:

```bash
npm run prisma:generate
```

Run database migrations:

```bash
npm run prisma:migrate
```

Open Prisma Studio (database GUI):

```bash
npm run prisma:studio
```

### Development

Start the development server:

```bash
npm run dev
```

The API will be available at:
- API: http://localhost:3000
- Swagger docs: http://localhost:3000/api

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start:prod
```

### Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run tests with coverage:

```bash
npm run test:cov
```

Run e2e tests:

```bash
npm run test:e2e
```

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user

### Users (Protected)

- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PATCH /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Posts (Protected)

- `POST /posts` - Create a new post
- `GET /posts` - Get all posts
- `GET /posts/:id` - Get post by ID
- `PATCH /posts/:id` - Update post
- `DELETE /posts/:id` - Delete post

## Authentication Flow

### Register

```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "name": "John Doe"
  }'
```

### Login

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

### Access Protected Routes

Use the JWT token from login/register response:

```bash
curl -X GET http://localhost:3000/users \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Prisma Schema

The database schema includes:

- **User** - User accounts with email, password, name
- **Post** - Blog posts with title, content, published status

Relations:
- One User can have many Posts
- Each Post belongs to one User (author)

## Development Guide

### Creating a New Module

```bash
nest generate module modules/feature
nest generate controller modules/feature
nest generate service modules/feature
```

### Adding DTOs

Create DTOs in the module's `dto` folder with validation decorators:

```typescript
import { IsString, IsEmail } from 'class-validator';

export class CreateDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;
}
```

### Prisma Migrations

After modifying `prisma/schema.prisma`:

```bash
npm run prisma:migrate
npm run prisma:generate
```

### Environment Variables

Access environment variables using ConfigService:

```typescript
constructor(private configService: ConfigService) {}

const secret = this.configService.get('JWT_SECRET');
```

## Deployment

### Environment Variables

Ensure all environment variables are set in production:
- `DATABASE_URL` - Production database connection string
- `JWT_SECRET` - Strong secret key for JWT
- `NODE_ENV=production`
- `PORT` - Server port
- `CORS_ORIGIN` - Frontend URL

### Build and Deploy

```bash
npm run build
npm run start:prod
```

### Recommended Platforms

- **Railway** - Easy deployment with PostgreSQL addon
- **Render** - Free tier with PostgreSQL
- **Heroku** - Classic PaaS platform
- **Vercel** - Serverless deployment
- **AWS/GCP/Azure** - Full control with EC2/Compute Engine/VM

## Best Practices

1. Use DTOs for all request/response data
2. Apply validation decorators to DTOs
3. Use Prisma for type-safe database queries
4. Protect routes with JWT authentication
5. Document endpoints with Swagger decorators
6. Handle errors with exception filters
7. Use dependency injection
8. Write unit tests for services
9. Use environment variables for configuration
10. Follow NestJS module structure

## Learn More

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Swagger/OpenAPI](https://swagger.io/)
- [Passport.js](http://www.passportjs.org/)
- [JWT](https://jwt.io/)

## License

MIT

---

Built with NestJS + TypeScript + Prisma
