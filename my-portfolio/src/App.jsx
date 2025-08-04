import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WhyHireMeSection from './components/WhyHireMeSection';
import ProjectsSection from './components/ProjectsSection';
import LatestWorkSection from './components/LatestWorkSection';
import Testimonials from './components/TestimonialsSection';
import SlantedBanner from './components/SlantedBanner';
import ContactSection from './components/ContactSection';

const Home = () => (
  <>
    <HeroSection />
    
    <ServicesSection />
    
    <AboutSection />
    
    <WhyHireMeSection />
    
    <ProjectsSection />
    
   

    <Testimonials />

    <SlantedBanner />

    <LatestWorkSection />

    <ContactSection />
    
    
    
  </>
);

const About = () => (
  <div className="flex justify-center items-center h-96 text-2xl font-bold text-gray-500">About Page</div>
);
const Service = () => (
  <div className="flex justify-center items-center h-96 text-2xl font-bold text-gray-500">Service Page</div>
);
const Resume = () => (
  <div className="flex justify-center items-center h-96 text-2xl font-bold text-gray-500">Resume Page</div>
);
const Project = () => (
  <div className="flex justify-center items-center h-96 text-2xl font-bold text-gray-500">Project Page</div>
);
const Contact = () => (
  <div className="flex justify-center items-center h-96 text-2xl font-bold text-gray-500">Contact Page</div>
);
const NotFound = () => (
  <div className="flex justify-center items-center h-96 text-2xl font-bold text-red-500">404 - Page Not Found</div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'service', element: <Service /> },
      { path: 'resume', element: <Resume /> },
      { path: 'project', element: <Project /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;