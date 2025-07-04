import { Toast, ToastProps } from "./toast";
import { useToast } from "./use-toast";

type toastContainerProp = {
  timeout?: number;
};

export const ToastContainer = ({ timeout = 5000 }: toastContainerProp) => {
  const { toasts, dismissToast } = useToast();
  
  return (
    <div className="w-[400px] h-full  z-40 absolute top-0 right-0">
      {toasts.map((item: ToastProps | undefined, index) => {
        if(!item) {
          return;
        }
        const { title, type, message, onDismiss = () => {} } = item;

        setTimeout(() => {
          dismissToast(index);
        }, timeout);

        return (
          <Toast
            key={index}
            title={title}
            onDismiss={() => {
              onDismiss();
              dismissToast(index);
            }}
            type={type}
            message={message}
          ></Toast>
        );
      })}
    </div>
  );
};
