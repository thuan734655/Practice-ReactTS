import { IconApp } from "@/assets/icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

export type ToastProps = {
  title: string;
  message: string;
  type?: "success" | "error" | "info" | "default";
  onDismiss?: () => void;
};

export const Toast = ({
  title,
  message,
  type,
  onDismiss = () => {},
}: ToastProps) => {
  const originClassName =
    "flex w-full max-w-sm gap-5 rounded-lg p-4 ring-1 ring-black/5 drop-shadow-lg mt-[10px]";
  const typeToastClassName = {
    success: "bg-green-50",
    error: "bg-red-50",
    info: "bg-blue-50",
    default: "bg-white",
  }[type ?? "default"];

  return (
    <div className={cn(originClassName, typeToastClassName)}>
      <div className="flex flex-1 flex-col gap-1">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{message}</p>
      </div>
      <Button size={"icon"} onClick={onDismiss} className="pointer-events-auto">
        <IconApp name="CircleXmark" />
      </Button>
    </div>
  );
};
