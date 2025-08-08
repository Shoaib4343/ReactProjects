import dashboardData from "./dashboardData";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

// Better palette - UX friendly
const bgColorOptions = [
  "bg-blue-50",
  "bg-indigo-50",
  "bg-purple-50",
  "bg-yellow-50",
  "bg-pink-50",
  "bg-sky-50",
  "bg-teal-50",
  "bg-orange-50",
  "bg-emerald-50",
  "bg-gray-50",
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 gap-5">
      {dashboardData.map((item, index) => {
        const Icon = item.icon;
        const { trend, pillText } = item;

        const cardBg = bgColorOptions[index % bgColorOptions.length];

        const badgeColor =
          trend === "up"
            ? "bg-green-100 text-green-700"
            : trend === "down"
            ? "bg-red-100 text-red-700"
            : "bg-gray-200 text-gray-600";

        const iconColor = "text-blue-600";

        return (
          <div
            key={index}
            className={`relative p-6 rounded-2xl shadow-md border border-gray-200 transition hover:shadow-lg ${cardBg}`}
          >
            {/* Top Badge */}
            {trend && pillText && (
              <div
                className={`absolute top-4 left-4 inline-flex items-center text-xs font-medium px-2 py-1 rounded-full ${badgeColor}`}
              >
                {trend === "up" ? (
                  <FiTrendingUp className="mr-1" />
                ) : (
                  <FiTrendingDown className="mr-1" />
                )}
                {pillText}
              </div>
            )}

            {/* Icon Top Right */}
            <div className="absolute top-4 right-4 p-3 rounded-full bg-white shadow-inner">
              <Icon size={28} className={`${iconColor}`} />
            </div>

            {/* Title & Number */}
            <div className="pt-10">
              <h4 className="text-lg font-semibold text-gray-700 mb-1">
                {item.title}
              </h4>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                {item.value}
              </p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatCards;
