import React from "react";
import CustomButton from "./button";

const SectionTwo = () => {
  return (
    <div className="bg-white text-black grid place-items-center mt-6 md:p-16 p-6">
      <h2 className="text-[3rem] my-8 font-black headers text-center">Our Story</h2>
      <p className="text-center md:max-w-[80%] my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        aspernatur sequi. Dolore deserunt aperiam, cupiditate illum ratione et
        commodi iure maxime id unde! Aut, reiciendis eaque? Enim, libero
        repellat placeat sunt totam exercitationem quasi dolorum ipsum
        accusantium nam nostrum, necessitatibus ipsa labore. Nihil vitae
        deserunt eos neque, unde temporibus beatae maxime necessitatibus
        cupiditate, ullam nobis eligendi similique eaque. Molestias provident
        corporis temporibus nemo, nisi officiis! Quaerat illum natus expedita
        repellat eum, placeat quibusdam sequi explicabo, amet commodi sed!
        Placeat laudantium dignissimos, architecto nemo consequuntur ullam
        tenetur sed tempore ea soluta autem ex accusamus distinctio tempora
        natus earum corrupti dolores temporibus.
      </p>
      <div className="mt-4"><CustomButton text="Read more" background="black" textColor="white"/></div>
    </div>
  );
};

export default SectionTwo;
