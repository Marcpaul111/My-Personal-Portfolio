import Star from "@/assets/icons/star.svg";
import { Fragment } from "react";

export const TapeSection = () => {
  const words = [
    "User friendly",
    "Reliable",
    "Scalable",
    "Secure",
    "Responsive",
    "Maintainable",
    "Interactive",
    "Searchable",
    "Optimized",
  ];

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-500 to-sky-500  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
          <div
            className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]"
          >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <span>
                      <Star className="size-6 text-gray-900 -rotate-12" />
                    </span>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
