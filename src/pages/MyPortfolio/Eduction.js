import React from "react";

const Eduction = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Education Background</h2>
        <div className="myEduction grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="shadow p-5 rounded">
            <span className="bg-secondary rounded py-1 px-3 mb-1 inline-block">
              2008
            </span>
            <h3 className="font-bold mb-1 uppercase">
              School Secondary Degree
            </h3>
            <p>
              I have attended to chitalmari s.m high school in 2006 and Finished
              My Secondary school certificate program with success and I
              achieved GPA 4.88 on that program
            </p>
          </div>
          <div className="shadow p-5 rounded">
            <span className="bg-secondary rounded py-1 px-3 mb-1 inline-block">
              2010
            </span>
            <h3 className="font-bold mb-1 uppercase">Higer Secondary Degree</h3>
            <p>
              I have attended to Shere Bangla degree college in 2008 and
              Finished My Higher Secondary school certificate program with
              success and I achieved GPA 4.30 on that programgram
            </p>
          </div>
          <div className="shadow p-5 rounded">
            <span className="bg-secondary rounded py-1 px-3 mb-1 inline-block">
              2015
            </span>
            <h3 className="font-bold mb-1 uppercase">BACHELOR DEGREE</h3>
            <p>
              I have stated My Bachelor of Business Administration (BBA) degree
              in 2011 and Finished in 2015. After completed my degree and i got
              achieved GPA 3.19 (out of 4.00)
            </p>
          </div>
          <div className="shadow p-5 rounded">
            <span className="bg-secondary rounded py-1 px-3 mb-1 inline-block">
              2016
            </span>
            <h3 className="font-bold mb-1 uppercase">MASTER DEGREE</h3>
            <p>
              I have stated My Master of business administration (MBA) degree in
              2015 and Finished in 2016. After completing my degree and I got
              achieved a GPA of 3.41 (out of 4.00)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eduction;
