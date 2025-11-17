import { scrollContent } from "@/utils/constant";
import React from "react";

const ScrollSection = () => {
  return (
    <>
      {scrollContent.map((item, index) => (
        <section key={index} className="h-screen flex items-center">
          <div className="w-4/12"> 
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        </section>
      ))}
    </>
  );
};

export default ScrollSection;
