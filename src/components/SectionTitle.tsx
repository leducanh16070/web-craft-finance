export function SectionTitle({ start, accent, className = "" }: { start: string; accent: string; className?: string }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${className}`}>
      {start} <span className="text-primary">{accent}</span>
    </h2>
  );
}