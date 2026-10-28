import { Badge } from "@/components/ui/badge";

export function TechStack({ tech }: { tech: string[] }) {
  return (
    <ul aria-label="Tech stack" className="flex flex-wrap gap-1.5">
      {tech.map((item) => (
        <li key={item}>
          <Badge variant="secondary">{item}</Badge>
        </li>
      ))}
    </ul>
  );
}
