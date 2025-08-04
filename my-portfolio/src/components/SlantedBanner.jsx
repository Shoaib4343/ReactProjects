export default function SlantedBanner() {
    return (
        <div className="relative w-full bg-[#F5F1EE] pt-4 px-0">
            {/* Orange background with rounded corners */}
            <div className="relative w-full h-[70px] bg-orange-500 rounded-br-2xl rounded-tl-2xl overflow-hidden ">
                {/* White slanted banner with text */}
                <div
                    className="absolute top-0 left-0 w-full h-full flex items-center px-8"
                    style={{
                        clipPath: "polygon(0 25%, 100% 0, 100% 75%, 0% 100%)",
                        background: "white",
                        height: "70px",
                    }}
                >
                    <div className="overflow-hidden w-full">
                      <div
                        className="flex items-center gap-6 font-semibold text-[1.6rem] md:text-2xl text-black whitespace-nowrap animate-slantScroll"
                        style={{
                          animation: 'slantScroll 18s linear infinite',
                          display: 'inline-flex',
                        }}
                      >
                        <span>UX Design</span>
                        <span className="text-orange-500 text-xl md:text-2xl">✦</span>
                        <span>App Design</span>
                        <span className="text-orange-500 text-xl md:text-2xl">✦</span>
                        <span>Dashboard</span>
                        <span className="text-orange-500 text-xl md:text-2xl">✦</span>
                        <span>Wireframe</span>
                        <span className="text-orange-500 text-xl md:text-2xl">✦</span>
                        <span>User Research</span>
                        {/* Repeat for seamless scroll */}
                        <span>UX Design</span>
                        <span className="text-orange-500 text-xl md:text-2xl">✦</span>
                        <span>App Design</span>
                        <span className="text-orange-500 text-xl md:text-2xl">✦</span>
                        <span>Dashboard</span>
                        <span className="text-orange-500 text-xl md:text-2xl">✦</span>
                        <span>Wireframe</span>
                        <span className="text-orange-500 text-xl md:text-2xl">✦</span>
                        <span>User Research</span>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}