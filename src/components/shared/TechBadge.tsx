import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  className?: string;
}

export function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "border border-white/8 bg-white/5 font-mono text-[10px] transition-colors hover:border-primary/25 hover:bg-primary/10 hover:text-primary sm:text-[11px]",
        className
      )}
    >
      {label}
    </Badge>
  );
}
