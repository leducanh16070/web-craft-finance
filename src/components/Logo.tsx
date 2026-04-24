import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-wider">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary">
        <span className="h-2 w-2 rounded-full bg-primary" />
      </span>
      <span className="text-foreground">ORDINEX</span>
    </Link>
  );
}