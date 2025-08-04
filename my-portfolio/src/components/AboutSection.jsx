import React from 'react';

const AboutSection = () => {
  const skills = [
    { name: "Ui/Ux Design", percentage: 85 },
    { name: "Website Design", percentage: 90 },
    { name: "App Design", percentage: 80 },
    { name: "Full Stack Development", percentage: 95 }
  ];

  return (
    <section className="py-20 bg-whie">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/about me image.png" 
                alt="About Me" 
                className="w-full h-auto "
              />
            </div>
            
            {/* Orange background shapes */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-orange-400 rounded-full opacity-30 -z-10"></div>
            <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-orange-300 rounded-full opacity-40 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-orange-500 rounded-full opacity-25 -z-10"></div>
            <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-orange-400 rounded-full opacity-35 -z-10"></div>
          </div>

          {/* Right Section - Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-orange-500">About</span>{" "}
                <span className="text-gray-800">Me</span>
              </h2>
              
              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800 text-lg">
                      {skill.name}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-orange-500 rounded-full relative"
                        style={{ width: `${skill.percentage}%` }}
                      >
                        {/* Orange circle indicator */}
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-orange-500 border-2 border-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 