import React from "react";
import IntroImage from "../../images/intro-image.png";

const Intro = () => {
  return (
    <section className="pt-12 md:mt-[5rem]">
      <div className="container w-[80%] mx-auto">
        <div className="intro-container grid gap-y-6 md:grid-cols-2">
          <div className="md:order-2">
            <img src={IntroImage} alt="" />
          </div>
          <div className="intro-content md:order-1">
            <h1 className="text-clr_secondary_800 font-bold text-4xl mb-4 max-w-[17ch]">
              Forgetting clients's payments, this is the right place for you.
            </h1>
            <p className="text-clr_para mb-8 max-w-[40ch]">
              Paybes makes it easier for you to plan and maintain the payments
              of your clients, while providing you with a remainder mail
            </p>
            <button className="nav-btn font-semibold text-clr_secondary_800 bg-clr_primary_400 rounded-full py-2 px-4">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
