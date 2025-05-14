import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

export function ProfileImage({ imageUrl, alt, className }: ProfileImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative inline-block transition-all duration-300",
        isHovered && "animate-float",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-2 rounded-full bg-background/50 backdrop-blur">
        <div className="relative rounded-full overflow-hidden shadow-md transition-all duration-500">
          <Avatar
            className={cn(
              "w-[200px] h-[200px] rounded-full",
              isHovered && "scale-105"
            )}
          >
            <AvatarImage
              src={imageUrl}
              alt={alt}
              className="object-cover rounded-full"
            />
            <AvatarFallback className="text-xl font-pixel">BJB</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
