import React from "react";
import { AiOutlineFlag } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const BusinessSummary = () => {
  return (
    <section className="section-padding">
      <div className="Summary-area container mx-auto px-4">
        <h2 className="section-title">our Business Summary </h2>
        <div className="all-Summary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          <div className="summary text-4xl flex flex-col items-center">
            <div className="text-secondary text-6xl">
              <AiOutlineFlag></AiOutlineFlag>
            </div>
            <p className="text-5xl py-3">75+</p>
            <p className="capitalize text-secondary">country</p>
          </div>
          <div className="summary text-4xl flex flex-col items-center">
            <div className="text-secondary text-6xl">
              <AiOutlineFundProjectionScreen></AiOutlineFundProjectionScreen>
            </div>
            <p className="text-5xl py-3">175+</p>
            <p className="capitalize text-secondary">complete project</p>
          </div>
          <div className="summary text-4xl flex flex-col items-center">
            <div className="text-secondary text-6xl">
              <IoIosPeople></IoIosPeople>
            </div>
            <p className="text-5xl py-3">395+</p>
            <p className="capitalize text-secondary">happy client</p>
          </div>
          <div className="summary text-4xl flex flex-col items-center">
            <div className="text-secondary text-6xl">
              <VscFeedback></VscFeedback>
            </div>
            <p className="text-5xl py-3">590+</p>
            <p className="capitalize text-secondary">feedbacks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
