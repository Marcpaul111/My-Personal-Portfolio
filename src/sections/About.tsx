"use client"
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import BookCover from "@/assets/images/book-cover.png";
import Javascript from "@/assets/icons/javascript.svg";
import React from "@/assets/icons/react.svg";
import NextJs from "@/assets/icons/nextjs_logo_light.svg";
import Css from "@/assets/icons/css3.svg";
import Php from "@/assets/icons/Php_dark.svg";
import Mysql from "@/assets/icons/mysql.svg";
import Supabase from "@/assets/icons/supabase.svg";
import Github from "@/assets/icons/github.svg";
import MapImage from "@/assets/images/map.png";
import Avatar from "@/assets/images/memoji-smile.png";
import { motion } from "framer-motion"

import Image from "next/image";

import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { useRef } from "react";

export const AboutSection = () => {

  const constraintRef = useRef(null)  

  const toolboxItems = [
    {
      title: "Javascript",
      iconType: Javascript,
    },
    {
      title: "React",
      iconType: React,
    },
    {
      title: "NextJs",
      iconType: NextJs,
    },
    {
      title: "CSS 3",
      iconType: Css,
    },
    {
      title: "PHP",
      iconType: Php,
    },
    {
      title: "MySQL",
      iconType: Mysql,
    },
    {
      title: "Supabase",
      iconType: Supabase,
    },
    {
      title: "Github",
      iconType: Github,
    },
  ];

  const hobbies = [
    {
      title: "Cooking",
      icon: "🍳",
      left: "5%",
      top: "5%",
    },
    {
      title: "Listening to music",
      icon: "🎵",
      left: "50%",
      top: "5%",
    },
    {
      title: "Playing Basketball",
      icon: "🏀",
      left: "5%",
      top: "35%",
    },
    {
      title: "Watching anime",
      icon: "👀",
      left: "35%",
      top: "40%",
    },
    {
      title: "Eating",
      icon: "🍴",
      left: "70%",
      top: "45%",
    },
    {
      title: "Mobile gaming",
      icon: "🎮",
      left: "5%",
      top: "65%",
    },
  ];
  return (
    <div className="py-20 lg:py-28" id="About">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Of My World"
          description="Learn About Who I Am, What I do, and "
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description=" Explore the books shaping my perspectives."
              />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookCover} alt="Book image" />
              </div>
            </Card>
            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Skills"
                description="Some of the technologies I used and proficient in."
                className=""
              />
              <ToolboxItems
                className=""
                toolboxItems={toolboxItems}
                itemsWrapper=" -translate-x-1/2 animate-move-left [animation-duration:40s] "
              />
              <ToolboxItems className="mt-6" toolboxItems={toolboxItems} itemsWrapper="animate-move-right [animation-duration:40s]" />
            </Card>
          </div>

          <div className="grid frid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Learn about my journey to becoming a web developer."
                className="p-6"
              />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((item) => (
                  <motion.div 

                    className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-400 to-sky-500 rounded-full py-1.5 absolute"
                    key={item.title}
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span>{item.icon}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full animate-ping [animation-duration:3s] -z-20">

              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-10">

              </div>
                <Image src={Avatar} alt="avatar" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
