import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import Grain from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-14 md:px-8 lg:px-32" id="contact">
      <div className="constainer">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${Grain.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2 ">
                If you're interested in working together on a project, or just
                want to say hi, don't hesitate to reach out. I'm always here to
                help.
              </p>
            </div>
            <div className="">
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8">
                <span className="font-semibold w-max">Contact Me</span>
                <ArrowUp className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
