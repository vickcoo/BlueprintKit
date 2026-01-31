# {{PROJECT_NAME}}

{{DESCRIPTION}}

Created with DevKit - Production-ready Next.js 15 template with TypeScript, Tailwind CSS, and Shadcn UI.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **Code Quality:** ESLint + Prettier

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── dashboard/          # Dashboard section
│   └── auth/               # Auth pages (login, register)
├── components/
│   ├── ui/                 # Shadcn UI components
│   └── shared/             # Shared components
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
└── styles/
    └── globals.css         # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Customization

### Adding Shadcn UI Components

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

### Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Deployment

### Vercel (Recommended)
```bash
vercel
```

### Docker
```bash
docker build -t {{PROJECT_NAME}} .
docker run -p 3000:3000 {{PROJECT_NAME}}
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com)

## License

MIT

## Author

{{AUTHOR}}
