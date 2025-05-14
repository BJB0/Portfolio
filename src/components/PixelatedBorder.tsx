
import { cn } from "@/lib/utils";

interface PixelatedBorderProps {
  className?: string;
  children: React.ReactNode;
}

export function PixelatedBorder({ className, children }: PixelatedBorderProps) {
  const isRounded = className?.includes("rounded");
  
  return (
    <div className={cn("pixel-corners pixel-border", 
      isRounded && "rounded-full overflow-hidden", 
      className)}>
      {children}
    </div>
  );
}
