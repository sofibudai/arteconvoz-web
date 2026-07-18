type WavePanelProps = {
  orientation: "vertical" | "horizontal";
  colorClassName: string;
  className?: string;
  flip?: boolean;
};

export default function WavePanel({
  orientation,
  colorClassName,
  className = "",
  flip = false,
}: WavePanelProps) {
  const isVertical = orientation === "vertical";

  return (
    <svg
      aria-hidden
      viewBox={isVertical ? "0 0 600 800" : "0 0 800 600"}
      preserveAspectRatio="none"
      className={`${colorClassName} ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      {isVertical ? (
        <path
          fill="currentColor"
          d="M0,0 L480,0 C570,140 410,260 500,400 C590,540 430,660 500,800 L0,800 Z"
        />
      ) : (
        <path
          fill="currentColor"
          d="M0,0 L800,0 L800,420 C660,500 540,380 400,440 C260,500 140,400 0,460 Z"
        />
      )}
    </svg>
  );
}
