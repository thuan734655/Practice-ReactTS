import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from "@/components/ui/form/field-wrapper";

const inputVariants = cva("w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", {
  variants: {
    authInput: {
      primary: ""
    }
  },
  defaultVariants: {

  }
});

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps &
  VariantProps<typeof inputVariants> & {
    register: Partial<UseFormRegisterReturn>;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, error, register, ...props }: InputProps,
  ref
) {
  return (
    <FieldWrapper
      label={label}
      error={error}
    >
      <input
        className={inputVariants({ className })}
        ref={ref}
        {...register}
        {...props}
      />
    </FieldWrapper>
  );
});
