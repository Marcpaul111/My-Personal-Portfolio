import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import GrainImage from "@/assets/images/grain.jpg";
import Check from "@/assets/icons/check-circle.svg";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Codebility Project",
    year: "2024",
    title: "Deadpool & Wolverine",
    results: [
      { title: "Build in NextJs 15" },
      { title: "Fully responsive for all device." },
      { title: "With animation using Framer Motion" },
    ],
    link: "https://codebility-third-project.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Codebility Project",
    year: "2024",
    title: "Ecommerce Admin with CMS",
    results: [
      { title: "Fullstack application using Nextjs 15" },
      {
        title:
          "Used Mysql for database and Prisma for creating database schema and database query",
      },
      { title: "Supabase buckets for image storage" },
      { title: "REST API endpoint via app router" },
    ],
    link: "https://ecommerce-admin-git-main-codebility.vercel.app/",
    image: aiStartupLandingPage,
  },
  {
    company: "Codebility Project",
    year: "2024",
    title: "Ecommerce Storefront",
    results: [
      { title: "Used the REST API from Ecommerce Admin" },
      { title: "Utilized Stripe for payment gateway for payment" },
      { title: "You can see the order status from Ecommerce admin" },
      {
        title:
          "You can your see order receipt from the email address you used in purchasing product",
      },
    ],
    link: "https://ecommerce-store-front-codebility.vercel.app/",
    image: darkSaasLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16" id="projects">
      <div className="container">
        <SectionHeader title="Featured Projects" eyebrow="Real world projects." description="Take a look at the projects i created recently."/>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project,projectIndex) => (
           
            <Card
              className="px-8 pt-8 pb-0 md:pt-12 lg:pt-16  md:px-10 lg:px-20 sticky top-16"
              key={project.title}
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span> {project.company}</span>
                    <span>&bull;</span>
                    <span className="">{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 lg:gap-8 mt-4 md:mt-5 ">
                    {project.results.map((result) => (
                      <li className="flex gap-2 item-center text-sm md:text-base  text-white/50">
                        <span><Check className="size-5 md:size-6 " /></span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center mt-8">
                      <span> Visit Live Site</span>
                      <ArrowUp className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                  
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
