import { cn } from "@/utils/cn";

export type ErrorProps = {
  errorClassName?: string;
  errorMessage?: string;
};

export const Error = ({ errorClassName = "", errorMessage }: ErrorProps) => {
  const mergedClassName = !errorMessage
    ? `${errorClassName} invisible `.trim()
    : errorClassName;

  const originClassName = "h-2"

  return (
    <div className={cn(originClassName, mergedClassName)}>
      <span className="text-sm font-sans text-red-500">{errorMessage}</span>
    </div>
  );
};

