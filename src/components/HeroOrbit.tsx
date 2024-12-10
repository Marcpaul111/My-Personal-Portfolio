import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotate,
  isRotate = false,
  isSpin = false,
  spinDuration,
  rotateDuration,
}: PropsWithChildren<{
  size: number;
  rotate: number;
  isSpin?: boolean;
  spinDuration?: string;
  rotateDuration?: string;
  isRotate?: boolean;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={twMerge(isRotate === true && "animate-spin")}
        style={{
          animationDuration: rotateDuration,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotate}deg)`,
          }}
        >
          <div
            className={twMerge(isSpin === true && "animate-spin ")}
            style={{
              animationDuration: spinDuration,
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotate * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
