import React from "react";
import { VscBell } from "react-icons/vsc";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillCloud } from "react-icons/ai";

const Features = () => {
  return (
    <section className="pt-16 md:mt-12 md:pt-10 min-[1030px]:pt-16">
      <div className="container w-[80%] mx-auto">
        <div className="grid features-container gap-y-10 sm:grid-cols-2 gap-x-10 min-[1338px]:grid-cols-4">
          <div>
            <VscBell />
            <h2>Alert Messages</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div>
            <AiFillDashboard />
            <h2>Nice Dashboard</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div>
            <AiFillEdit />
            <h2>Update clients</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div>
            <AiFillCloud />
            <h2>Easy to Use</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
