import { cva, VariantProps } from "class-variance-authority";

const labelVariants = cva("font-sans");

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants>;

export const Label = ({ children, ...props }: LabelProps) => {
  return (
    <label
      className={labelVariants()}
      {...props}
    >
      {children}
    </label>
  );
};
