type WaveDividerProps = {
  colorClassName: string;
  flip?: boolean;
};

export default function WaveDivider({
  colorClassName,
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      aria-hidden
      className={`${colorClassName} ${flip ? "rotate-180" : ""} h-16 w-full sm:h-24`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,112 1440,48 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
