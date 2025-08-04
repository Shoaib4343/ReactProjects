import { FacebookIcon, TwitterIcon, MessageCircleIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-orange-100 pt-12 pb-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left: Slogan and logo */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            <span>let’s make </span>
            <span className="text-orange-500">something<br />amazing</span>
            <span> together.</span>
          </h2>
          <p className="text-gray-400 text-sm mb-5 max-w-xs text-white">
            better with something in each section. Web page designers, content writers, and layout artists use lorem.
          </p>
          {/* Logo row */}
          <div className="flex items-center gap-2">
            {/* Replace with your SVG/logo if needed */}
            <img src="/logo navbar.png" alt="Rahman Logo" className="w-20 h-12 object-contain" />
            
          </div>
        </div>

        {/* Center: Navigation */}
        <div className="flex-1 flex flex-col items-start md:items-center">
          <div className="font-semibold text-lg mb-2 text-white">Information</div>
          <ul className="space-y-1 text-gray-300 text-base">
            <li>
              <span className="text-orange-500 font-semibold">↜ Home ↝</span>
            </li>
            <li className="text-white">About Us</li>
            <li className="text-white">Services</li>
            <li className="text-white">Resume</li>
            <li className="text-white">Project</li>
            <li className="text-white">Contact Us</li>
            <li>Project</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Right: Social vertical */}
        <div className="flex flex-col items-center gap-4 flex-1 md:items-end">
          <span className="text-xs text-orange-500 font-semibold tracking-widest rotate-90 md:rotate-0 md:mb-4">FOLLOW ME ON</span>
          <div className="w-px h-14 bg-gray-300 mb-2"></div>
          <div className="flex flex-col gap-3 text-orange-500">
            <a href="#" className="hover:text-orange-600"><FacebookIcon size={18} /></a>
            <a href="#" className="hover:text-orange-600"><MessageCircleIcon size={18} /></a>
            <a href="#" className="hover:text-orange-600"><TwitterIcon size={18} /></a>
            
          </div>
        </div>
      </div>
      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-orange-100 pt-3 text-xs text-gray-400">
        <span>
          <span className="text-orange-500 font-semibold">Copyright© 2025</span> All Rights Reserved
        </span>
        <span>
          Designed By <span className="text-orange-500 font-semibold">Osama Rahman</span>
        </span>
      </div>
    </footer>
  );
}