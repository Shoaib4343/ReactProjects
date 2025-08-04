import { ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "UI/ UX Design",
    img: "/work1.png", // replace with your actual images
    bg: "bg-[#FFF6F1]",
  },
  {
    title: "Web Design",
    img: "/work2.png",
    bg: "bg-white",
  },
  {
    title: "Landing Page",
    img: "/work3.png",
    bg: "bg-[#FFF6F1]",
  },
];

export default function LatestWorkSection() {
  return (
    <section className="relative py-20 bg-[#FCF8F6] overflow-hidden">
      {/* Decorative blobs - optional */}
      {/* <img src="/blob1.png" alt="" className="absolute left-0 top-8 w-40 opacity-70 pointer-events-none" /> */}
      {/* <img src="/blob2.png" alt="" className="absolute right-0 bottom-0 w-56 opacity-70 pointer-events-none" /> */}
      {/* <img src="/blob3.png" alt="" className="absolute left-1/2 top-0 w-32 opacity-60 pointer-events-none" style={{ transform: "translateX(-50%)" }} /> */}

      {/* Section Title */}
      <div className="text-left mb-12 pl-2">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-black">My Latest </span>
          <span className="text-orange-500">Work</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="flex justify-center gap-8 relative z-10">
        {works.map((work, idx) => (
          <div
            key={work.title}
            className={`rounded-t-2xl rounded-b-xl shadow-xl w-[330px] ${work.bg} pb-6 flex flex-col items-center relative`}
          >
            {/* Card Header */}
            <div className="bg-orange-400 w-full rounded-t-2xl px-6 py-4 text-white text-lg font-medium text-left">
              {work.title}
            </div>
            {/* Card Content */}
            <div className="bg-white w-[90%] mx-auto rounded-xl shadow-md -mt-8 p-4 flex flex-col items-center">
              <img src={work.img} alt={work.title} className="w-full h-40 object-cover rounded-lg" />
            </div>
            {/* Arrow Button */}
            <button className="absolute -bottom-7 right-7 w-14 h-14 rounded-full bg-[#232B3B] flex items-center justify-center shadow-lg hover:scale-105 transition-all border-4 border-white">
              <ArrowUpRight className="text-white w-7 h-7" />
            </button>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="flex justify-center mt-16 gap-3">
        <span className="w-3 h-3 bg-[#D9D9D9] rounded-full block"></span>
        <span className="w-7 h-3 bg-[#FFA25B] rounded-full block"></span>
        <span className="w-3 h-3 bg-[#D9D9D9] rounded-full block"></span>
      </div>
    </section>
  );
}
