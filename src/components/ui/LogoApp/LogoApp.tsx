import { IconApp } from "@/assets/icon";

export const LogoApp = ({ height = 50, width = 50 }) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
        <IconApp name="Logoo" height={height} width={width} />
      </div>
      <span className="font-sans text-5xl font-100 italic">RingkU</span>
    </div>
  );
};
