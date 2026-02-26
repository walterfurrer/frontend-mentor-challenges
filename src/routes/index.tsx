import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: 'Frontend Mentor Challenges' }] }),
  component: App,
});

const challenges = [
  {
    title: "QR Code Component",
    path: "/front-end-mentor-challenges/qr-code-component" as const,
    difficulty: "Newbie",
  },
  {
    title: "Blog Preview Card",
    path: "/front-end-mentor-challenges/blog-preview-card" as const,
    difficulty: "Newbie",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Frontend Mentor Challenges</h1>
        <p className="text-muted-foreground mb-10">
          A collection of completed Frontend Mentor challenges.
        </p>
        <ul className="flex flex-col gap-4">
          {challenges.map((challenge) => (
            <li key={challenge.path}>
              <Link
                to={challenge.path}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-6 py-5 shadow-sm hover:bg-accent transition-colors"
              >
                <span className="font-medium">{challenge.title}</span>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground border border-border rounded-full px-3 py-1">
                  {challenge.difficulty}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
