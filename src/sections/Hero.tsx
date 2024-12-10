import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import Star from "@/assets/icons/star.svg";
import Sparkle from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotate={-72} isRotate rotateDuration="50s" isSpin spinDuration="15s">
          <Star className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={900} rotate={-12} isRotate rotateDuration="42s" isSpin spinDuration="15s">
          <Star className="size-20   text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={800} rotate={-180} isRotate rotateDuration="30s" isSpin spinDuration="15s">
          <Star className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={800} rotate={-210} isRotate rotateDuration="38s">
          <Star className="size-20 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={820} rotate={102} isRotate rotateDuration="40s">
          <Sparkle className="size-12 text-emerald-300 opacity-20" />
        </HeroOrbit>
        <HeroOrbit size={1220} rotate={102} isRotate rotateDuration="83s">
          <Sparkle className="size-12 text-emerald-300 opacity-20" />
        </HeroOrbit>
        <HeroOrbit size={820} rotate={-50} isRotate rotateDuration="70s">
          <Sparkle className="size-8 text-emerald-300 opacity-20" />
        </HeroOrbit>
        <HeroOrbit size={820} rotate={-110} >
          <Sparkle className="size-8 text-emerald-300 opacity-20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotate={-290}>
          <div className="size-3 rounded-full bg-emerald-300 opacity-20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotate={72}>
          <Star className="size-5 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={520} rotate={12} isSpin spinDuration="15s">
          <Star className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={580} rotate={-200} isSpin spinDuration="15s">
          <Star className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={400} rotate={-22}>
          <Sparkle className="size-5 text-emerald-300 opacity-20" />
        </HeroOrbit>
        <HeroOrbit size={620} rotate={-62} isSpin spinDuration="10s">
          <Sparkle className="size-12 text-emerald-300 opacity-20" />
        </HeroOrbit>
        <HeroOrbit size={460} rotate={-150} isRotate rotateDuration="23s">
          <div className="size-1 rounded-full bg-emerald-300 opacity-20" />
        </HeroOrbit>
        <HeroOrbit size={610} rotate={-110}>
          <div className="size-2 rounded-full bg-emerald-300 opacity-20" />
        </HeroOrbit>
        <HeroOrbit size={610} rotate={-240}>
          <div className="size-2 rounded-full bg-emerald-300 opacity-20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="person avatar"
          />
          <div className="bg-gray-800 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full  relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto ">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional Fullstack Web Applications
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specilize in tranforming designs and, high performing web
            applications. Let's discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
