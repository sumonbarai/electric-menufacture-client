import React from "react";

const Contact = () => {
  const handleContact = (event) => {
    event.preventDefault();
  };
  return (
    <section className="section-padding">
      <div className="contact-area container mx-auto px-4">
        <h2 className="section-title">Contact Us </h2>
        <form onSubmit={handleContact} className="max-w-[800px] mx-auto">
          <input
            type="text"
            placeholder="NAME*"
            className="input input-bordered w-full mb-3"
          />
          <input
            type="email"
            placeholder="EMAIL*"
            className="input input-bordered w-full mb-3"
          />
          <input
            type="text"
            placeholder="PHONE*"
            className="input input-bordered w-full mb-3"
          />
          <textarea
            type="text"
            cols="1"
            rows="5"
            placeholder="HOW CAN WE HELP?*"
            className="textarea textarea-bordered w-full mb-3"
          ></textarea>
          <button className="btn btn-secondary rounded-2xl">LET'S TALK</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
