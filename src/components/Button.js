import React from "react";
import { cn } from "@shadcn/ui";

export const Button = React.forwardRef(function Button(
  { className, variant, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        "px-4 py-2 text-white rounded",
        variant === "primary" ? "bg-blue-500" : "bg-gray-500",
        className
      )}
      {...props}
    />
  );
});
