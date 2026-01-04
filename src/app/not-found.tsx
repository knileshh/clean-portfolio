import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background font-sans text-foreground p-4">

            <div className="text-center">
                {/* Large 404 with Hatched Pattern - uses CSS variables for theme support */}
                <div
                    className="text-[200px] md:text-[300px] lg:text-[400px] font-bold leading-none tracking-tighter select-none"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
              45deg,
              var(--tech-300) 0,
              var(--tech-300) 2px,
              transparent 0,
              transparent 8px
            ), repeating-linear-gradient(
              -45deg,
              var(--tech-300) 0,
              var(--tech-300) 2px,
              transparent 0,
              transparent 8px
            )`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        WebkitTextStroke: '3px var(--tech-300)',
                    }}
                >
                    404
                </div>

                {/* Minimal info */}
                <p className="font-mono text-sm text-muted-foreground mt-4 mb-8">
                    Page not found
                </p>

                <Link
                    href="/"
                    className="font-mono text-xs text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                >
                    ← Go home
                </Link>
            </div>

        </div>
    );
}
