import React from "react";

const Myskill = () => {
  return (
    <section className="section-padding section-dark-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My skills</h2>
        <div className="mySkill grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="mb-3 text-3xl">Html</div>
            <div className="radial-progress text-secondary radial-progress-html">
              90%
            </div>
          </div>
          <div className="text-center">
            <div className="mb-3 text-3xl">Css</div>
            <div className="radial-progress text-secondary radial-progress-css">
              90%
            </div>
          </div>
          <div className="text-center">
            <div className="mb-3 text-3xl">JavaScript</div>
            <div className="radial-progress text-secondary radial-progress-javaScript">
              70%
            </div>
          </div>
          <div className="text-center">
            <div className="mb-3 text-3xl">Bootstrap</div>
            <div className="radial-progress text-secondary radial-progress-bootstrap">
              85%
            </div>
          </div>
          <div className="text-center">
            <div className="mb-3 text-3xl">React Js</div>
            <div className="radial-progress text-secondary radial-progress-reactJs">
              78%
            </div>
          </div>
          <div className="text-center">
            <div className="mb-3 text-3xl">Jquery</div>
            <div className="radial-progress text-secondary radial-progress-jquery">
              80%
            </div>
          </div>
          <div className="text-center">
            <div className="mb-3 text-3xl">Tailwind Css</div>
            <div className="radial-progress text-secondary radial-progress-tailwind">
              90%
            </div>
          </div>
          <div className="text-center">
            <div className="mb-3 text-3xl">Php</div>
            <div className="radial-progress text-secondary radial-progress-php">
              40%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myskill;
