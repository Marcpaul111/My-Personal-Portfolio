'use client'
import ArrowUp from "@/assets/icons/arrow-up-right.svg"
import Link from 'next/link'

export const Footer = () => {
  const links = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/marco-paulo-lazaro-b216a920b/",
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/avgmarco",
    },
    {
      title: "Twitter",
      url: "",
    },
    {
      title: "GitHub",
      url: "",
    },
  ];

  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-16 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All Rights Reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {links.map((item, index) => (
              <Link
                key={`${item.title}-${index}`}
                href={item.url}
                className="inline-flex items-center gap-1.5 text-white hover:text-emerald-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold">{item.title}</span>
                <ArrowUp className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

