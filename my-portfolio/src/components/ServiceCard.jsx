import React from 'react';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  isActive = false,
  iconBgColor = "bg-orange-500",
  textColor = "text-gray-800",
  bgColor = "bg-white"
}) => {
  return (
    <div className={`${isActive ? 'bg-orange-500 ' : bgColor} rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
      {/* Tailing effect for active card */}
      {isActive && (
        <div className="absolute top-0 right-0 w-16 h-16 bg-orange-400 rounded-bl-full opacity-20"></div>
      )}
      
      <div className="flex flex-col items-start text-center relative z-10">
        {/* Icon Container */}
        <div className={`${isActive ? 'bg-white bg-opacity-20' : iconBgColor} rounded-tr-2xl rounded-bl-2xl rounded-tl-2xl   p-2 mb-4 self-start`}>
          <div className="w-14 h-14 flex items-center justify-center">
            {typeof icon === 'string' ? (
              <img src={icon} alt={title} className="w-8 h-8 object-contain" />
            ) : (
              icon
            )}
          </div>
        </div>
        
        {/* Title */}
        <h3 className={`font-bold text-xl  mb-4 ${isActive ? 'text-white' : textColor} `}>
          {title}
        </h3>
        
        {/* Description */}
        <p className={`text-base  text-justify ${isActive ? 'text-white text-opacity-90' : textColor}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard; 