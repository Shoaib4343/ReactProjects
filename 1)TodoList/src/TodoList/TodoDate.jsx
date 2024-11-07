import React, { useEffect, useState } from "react";

const TodoDate = () => {
  const [dateAndTime, setDateAndTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatedDate = now.toLocaleDateString();
      const formatedTime = now.toLocaleTimeString();
      setDateAndTime(`${formatedDate}-${formatedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <h2 className="text-center text-xl text-gray-600 font-semibold mb-6">
      {dateAndTime}
    </h2>
  );
};

export default TodoDate;
