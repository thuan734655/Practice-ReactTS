import { FormConfig, FormProps } from "@/components/ui/form/form-config";
import { cva } from "class-variance-authority";
import { FieldValues } from "react-hook-form";
import { ZodTypeAny } from "zod";

const authFormVariants = cva("");

export type AuthFormProps<Schema, Formvalue extends FieldValues> = FormProps<
  Schema,
  Formvalue
> & {
  h2: string;
  p?: string;
  className?: string;
};

export const AuthForm = <
  Schema extends ZodTypeAny,
  FormValue extends FieldValues
>({
  h2,
  p,
  className,
  ...formProps
}: AuthFormProps<Schema, FormValue>) => {
  return (
    <div className={authFormVariants({className})}>
      <h2 className = "text-center text-[32px] font-bold text-sky-500 ">{h2}</h2>
       <p className="text-center text-[25px] font-400 text-gray-500">{p}</p>
      <FormConfig {...formProps} />
    </div>
  );
};
