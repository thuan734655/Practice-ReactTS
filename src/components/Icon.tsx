import { ComponentType, SVGProps } from "react";

interface IconProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, className }) => {
  return <IconComponent className={className} />;
};

export default Icon;
