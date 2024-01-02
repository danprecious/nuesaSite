import React from "react";

const SectionOne = () => {
  return (
    <div className="bg-white text-black grid place-items-center mt-6 md:p-16 p-6">
      <h2 className="text-[3rem] my-8 font-black headers text-center">Our Mission</h2>
      <div className="md:w-[80%] mt-8 flex flex-col md:flex-row ">
        <div className="md:w-[30%] w-[100%]">
          <div className="bg-zinc-200 h-[20rem] w-[100%] rounded-md">Image here</div>
          <p className="p-2 text-center">Tagline</p>
        </div>
        <div className="md:w-[70%] flex flex-col md:mt-0 mt-6 md:items-end">
          <h3 className="md:text-right text-[1.5rem] text-center font-bold  mb-4">Towards Optimal Student's Welfarism</h3>
          <p className="md:text-justify text-center md:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            nemo minus aperiam maxime quisquam doloremque asperiores nostrum
            inventore maiores tempora iste repudiandae distinctio, repellat
            incidunt voluptatum? Ea possimus libero alias hic! Amet architecto
            eum fuga, quo neque magni vero. Saepe tenetur rem, eaque vero iusto
            modi facere sequi dignissimos dolor?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
