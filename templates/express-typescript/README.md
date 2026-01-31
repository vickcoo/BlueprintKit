# {{PROJECT_NAME}}

{{DESCRIPTION}}

Created with DevKit - Production-ready Express REST API with TypeScript.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Language:** TypeScript
- **Testing:** Jest
- **Code Quality:** ESLint + Prettier

## Features

- TypeScript with strict mode
- Express with modern middleware (helmet, cors, compression)
- Structured folder architecture (routes, controllers, middleware, services)
- Environment variable management
- Request validation
- Error handling middleware
- Rate limiting
- Logging with Winston
- Jest testing setup
- Hot reload in development

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Run development server:
```bash
npm run dev
```

Server runs on http://localhost:3000

## Project Structure

```
src/
├── index.ts              # App entry point
├── app.ts                # Express app configuration
├── config/               # Configuration files
│   └── config.ts
├── routes/               # Route definitions
│   └── api.routes.ts
├── controllers/          # Request handlers
│   └── health.controller.ts
├── middleware/           # Custom middleware
│   ├── errorHandler.ts
│   └── logger.ts
├── services/             # Business logic
│   └── example.service.ts
├── models/               # Data models (if using DB)
├── utils/                # Utility functions
└── types/                # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## API Endpoints

### Health Check
```
GET /api/health
```

### Example Routes
```
GET    /api/users
POST   /api/users
GET    /api/users/:id
PUT    /api/users/:id
DELETE /api/users/:id
```

## Environment Variables

See `.env.example` for all available options:

```env
NODE_ENV=development
PORT=3000
API_VERSION=v1
LOG_LEVEL=info
```

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## Production Deployment

1. Build the application:
```bash
npm run build
```

2. Set environment to production:
```bash
export NODE_ENV=production
```

3. Start the server:
```bash
npm start
```

### Docker

```bash
docker build -t {{PROJECT_NAME}} .
docker run -p 3000:3000 {{PROJECT_NAME}}
```

## Best Practices

- Use environment variables for configuration
- Validate all incoming requests
- Handle errors gracefully
- Write tests for critical paths
- Use DTOs for type safety
- Keep controllers thin, services fat
- Log appropriately (not too much, not too little)

## Learn More

- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Jest Documentation](https://jestjs.io/)

## License

MIT

## Author

{{AUTHOR}}
