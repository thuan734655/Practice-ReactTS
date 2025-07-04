import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";
import { z, ZodTypeAny } from "zod";

export type FormProps<Schema, FormValue extends FieldValues> = {
  schema: Schema;
  onSubmit: SubmitHandler<FormValue>;
  option?: UseFormProps<FormValue>;
  children: (control: UseFormReturn<FormValue>) => React.ReactNode;
  classname?: string;
};

export const FormConfig = <Schema extends ZodTypeAny, FormValue extends FieldValues = z.infer<Schema>>({
  onSubmit,
  option,
  children,
  classname,
  schema,
}: FormProps<Schema, FormValue>) => {
  const form = useForm<FormValue>({
    resolver: zodResolver(schema),
    ...option,
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={classname}>
      {children(form)}
    </form>
  );
};
