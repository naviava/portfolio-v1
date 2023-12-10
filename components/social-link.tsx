import { IconType } from "react-icons";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

interface Props {
  icon: IconType;
  label: string;
  url: string;
  className?: string;
}

export function SocialLink({ icon: Icon, label, url, className }: Props) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={url}
            target="_blank"
            className={cn(
              "flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-600 transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-gray-50",
              className,
            )}
          >
            <Icon />
          </a>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
