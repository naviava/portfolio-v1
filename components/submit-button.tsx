import { Loader2 } from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";

import { cn } from "@/lib/utils";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export default function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={cn(
        "group mx-auto !mt-[1.5rem] flex h-[3rem] w-full items-center justify-center gap-2 rounded-full bg-gray-800 text-white outline-none transition-all sm:w-[8rem]",
        !isSubmitting &&
          "hover:bg-gray-950 active:scale-95 dark:hover:bg-gray-800/80",
      )}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="h-6 w-6 animate-spin" />
        </>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs transition group-hover:-translate-y-1 group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
}
