import React from "react";
import gym from "../../assets/images/gym.png";
import singlePage from "../../assets/images/singlepage.png";
import landingPage from "../../assets/images/landingpage.png";

const Demo = () => {
  const handleGym = () => {
    window.open("https://sumonbarai.github.io/Gymnasium_project/", "_black");
  };
  const handleSingle = () => {
    window.open("https://sumonbarai.github.io/tajim-single-project/", "_black");
  };
  const handleLandingPage = () => {
    window.open("https://sumonbarai.github.io/headphone_project/", "_black");
  };
  return (
    <section className="section-padding section-dark-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">my portfolio website</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="text-center">
            <img className="demo-website" src={gym} alt="" />
            <button className="btn btn-secondary mt-4" onClick={handleGym}>
              Live link
            </button>
          </div>
          <div className="text-center">
            <img className="demo-website" src={singlePage} alt="" />
            <button className="btn btn-secondary mt-4" onClick={handleSingle}>
              Live link
            </button>
          </div>
          <div className="text-center">
            <img className="demo-website" src={landingPage} alt="" />
            <button
              className="btn btn-secondary mt-4"
              onClick={handleLandingPage}
            >
              Live link
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
