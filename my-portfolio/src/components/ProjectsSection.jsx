import React, { useState } from 'react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All',
    'Landing Page',
    'Product Design',
    'Animation',
    'Glassmorphism',
    'Cards'
  ];

  const projects = [
    {
      id: 1,
      title: "Air Calling Landing Page Design",
      category: "Landing Page",
      image: "/Rectangle 130.png",
      description: "AI Journey Landing Page"
    },
    {
      id: 2,
      title: "Business Landing Page Design",
      category: "Landing Page",
      image: "/Rectangle 129.png",
      description: "Beauty Routine Landing Page"
    },
    {
      id: 3,
      title: "Creative Portfolio Design",
      category: "Landing Page",
      image: "/landing page.png",
      description: "Creative Design Experience"
    },
    {
      id: 4,
      title: "E-commerce Product Design",
      category: "Product Design",
      image: "/landing page.png",
      description: "Modern E-commerce Interface"
    },
    {
      id: 5,
      title: "Mobile App Design",
      category: "Product Design",
      image: "/Rectangle 129.png",
      description: "User-Friendly Mobile Interface"
    },
    {
      id: 6,
      title: "Dashboard Design",
      category: "Product Design",
      image: "/Rectangle 130.png",
      description: "Analytics Dashboard Interface"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div className="flex-1">
            <p className="text-orange-500 text-lg font-medium mb-3">My Projects</p>
            <h2 className="text-5xl font-bold mb-6">
              Lets Have A Look At{" "}
              <span className="text-orange-500">My Portfolio</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              When you land on a sample web page or open an email template and see content beginning with lorem ipsum.
            </p>
          </div>
          <button className="bg-orange-500 text-white px-12 py-4 rounded-full text-2xl  hover:bg-orange-600 transition-colors duration-300 shadow-lg">
            See All
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 text-lg rounded-full  transition-all duration-300 cursor-pointer ${activeFilter === filter
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-orange-400 text-white hover:bg-orange-600'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(project => activeFilter === 'All' || project.category === activeFilter)
            .map((project) => (
              <div key={project.id} className="group">
                {/* Project Card */}
                <div className="bg-white rounded-lg overflow-hidden ">
                  {/* Project Image with Shadow */}
                  <div className="relative shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="text-gray-600 text-sm font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-orange-500 text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 