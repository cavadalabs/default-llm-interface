import { SvgSparkle } from "@opal/icons";
import { cn } from "@opal/utils";

export interface DefaultLogoMarkProps {
  size?: number;
  className?: string;
}

export default function DefaultLogoMark({
  size = 24,
  className,
}: DefaultLogoMarkProps) {
  const iconSize = Math.max(12, Math.round(size * 0.58));

  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border border-border-02 bg-background-tint-02 text-text-05",
        className
      )}
      style={{ width: size, height: size }}
    >
      <SvgSparkle size={iconSize} />
    </span>
  );
}
