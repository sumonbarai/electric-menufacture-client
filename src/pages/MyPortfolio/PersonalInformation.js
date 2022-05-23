import React from "react";

const PersonalInformation = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My personal information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="text-center">
            <p>
              First Name: <span className="font-bold">Sumon</span>
            </p>
          </div>
          <div className="text-center">
            <p>
              Last Name: <span className="font-bold">Barai</span>
            </p>
          </div>
          <div className="text-center">
            <p>
              Age: <span className="font-bold">28</span>
            </p>
          </div>
          <div className="text-center">
            <p>
              Nationality: <span className="font-bold">Bangladesh</span>
            </p>
          </div>
          <div className="text-center">
            <p>
              Phone: <span className="font-bold">+8801815223111</span>
            </p>
          </div>
          <div className="text-center">
            <p>
              Email: <span className="font-bold">sumonbarai78@gmail.com</span>
            </p>
          </div>
          <div className="text-center">
            <p>
              Address: <span className="font-bold">Khulna,Bangladesh</span>
            </p>
          </div>
          <div className="text-center">
            <p>
              Language: <span className="font-bold">Bangla</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;
