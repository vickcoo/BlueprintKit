export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-4">
          Welcome to {{PROJECT_NAME}}
        </h1>

        <p className="text-center text-muted-foreground mb-8">
          {{DESCRIPTION}}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Next.js 15</h2>
            <p className="text-muted-foreground">
              Built with the latest App Router and React Server Components
            </p>
          </div>

          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">TypeScript</h2>
            <p className="text-muted-foreground">
              Type-safe development with full TypeScript support
            </p>
          </div>

          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Tailwind CSS</h2>
            <p className="text-muted-foreground">
              Utility-first CSS with Shadcn UI components
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}
