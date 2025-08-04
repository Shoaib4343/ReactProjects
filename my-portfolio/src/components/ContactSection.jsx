import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-black">Let’s Discuss </span>
            <span className="text-orange-500">Your Project</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            I got a job that was in accordance with the salary and field of work. The process
            of submitting an application was quite cosy
          </p>
        </div>
        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-6 w-full md:w-1/3">
            <div className="flex items-center bg-white rounded-md shadow p-4 gap-4">
              <span className="bg-orange-500 rounded-md p-3 text-white">
                <Phone size={24} />
              </span>
              <div>
                <div className="text-orange-500 font-semibold text-sm">Call Me</div>
                <div className="text-xs text-gray-700">+923209150367</div>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-md shadow p-4 gap-4">
              <span className="bg-orange-500 rounded-md p-3 text-white">
                <Mail size={24} />
              </span>
              <div>
                <div className="text-orange-500 font-semibold text-sm">Email Me</div>
                <div className="text-xs text-gray-700">Software432@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-md shadow p-4 gap-4">
              <span className="bg-orange-500 rounded-md p-3 text-white">
                <MapPin size={24} />
              </span>
              <div>
                <div className="text-orange-500 font-semibold text-sm">Address</div>
                <div className="text-xs text-gray-700">Barkly, Saidu, Sharif, Swat #01</div>
              </div>
            </div>
          </div>
          {/* Right: Form */}
          <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="col-span-1 bg-white rounded-md border border-gray-200 p-3 outline-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="col-span-1 bg-white rounded-md border border-gray-200 p-3 outline-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="col-span-1 bg-white rounded-md border border-gray-200 p-3 outline-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              placeholder="Budget"
              className="col-span-1 bg-white rounded-md border border-gray-200 p-3 outline-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              placeholder="Message.."
              className="col-span-2 bg-white rounded-md border border-gray-200 p-3 outline-orange-400 min-h-[142px] resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div className="col-span-2 flex justify-center mt-2">
              <button
                type="submit"
                className="bg-orange-500 text-white px-10 py-2 rounded-full font-semibold text-base shadow hover:bg-orange-600 transition"
              >
                send now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}