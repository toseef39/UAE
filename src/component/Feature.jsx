import React from "react";

export default function Feature({ icon: Icon, color, text }) {
  return (
    <div className="flex items-center space-x-3 justify-start md:justify-center">
      <Icon size={28} className={`text-${color}`} />
      <span className="text-base font-medium">{text}</span>
    </div>
  );
}
