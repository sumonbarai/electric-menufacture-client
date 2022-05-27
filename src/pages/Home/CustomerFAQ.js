import React from "react";

const CustomerFAQ = () => {
  return (
    <section className="section-padding section-dark-white">
      <div className="faq-area container mx-auto px-4">
        <h1 className="section-title">Customer faq question</h1>
        <div className="faq-question max-w-[800px] mx-auto">
          <div
            tabIndex="0"
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3"
          >
            <div className="collapse-title text-xl font-medium">
              What is a FAQ page?
            </div>
            <div className="collapse-content">
              <p>
                FAQ stands for “Frequently Asked Questions.” An FAQ is a list of
                commonly asked questions and answers on a website about topics
                such as hours, shipping and handling, product information, and
                return policies.
              </p>
            </div>
          </div>
          <div
            tabIndex="1"
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3"
          >
            <div className="collapse-title text-xl font-medium">
              Why you should make an FAQ page
            </div>
            <div className="collapse-content">
              <p>
                An FAQ page is a time-saving customer service tactic that
                provides the most commonly asked questions and answers for
                current or potential customers. Before diving into how to make
                an FAQ page, you need to know why having one is so important.
                There are so many reasons beyond improving the customer
                experience for perfecting your FAQ page. Keep in mind the
                importance of an FAQ page when developing your own e-commerce
                website so you can make sure it increases sales and not the
                other way around.
              </p>
            </div>
          </div>
          <div
            tabIndex="2"
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3"
          >
            <div className="collapse-title text-xl font-medium">
              Prevents negative reviews
            </div>
            <div className="collapse-content">
              <p>
                When looking through negative reviews, theres almost always one
                thing in common— the problem couldve been avoided. For example,
                theres always anger and confusion around e-commerce return
                policies. These issues are easily avoidable with a comprehensive
                section about questions relating to returns on an FAQ page.
                Instead of directing people to a support line, direct them to
                the FAQs. Theyll be happy to find an answer and avoid the phone
                call.
              </p>
            </div>
          </div>
          <div
            tabIndex="3"
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3"
          >
            <div className="collapse-title text-xl font-medium">
              FAQs are good for SEO
            </div>
            <div className="collapse-content">
              <p>
                In order to take full advantage of your FAQ pages ability to
                improve website SEO, create one page with all of the questions
                and then link out to dedicated pages that answer each question
                in more depth. Creating this web of connections will make search
                engines very happy, and when shoppers are googling questions
                about your product they will be directed to your dedicated page.
                Addressing these questions on separate pages will also help your
                URL appear when people are looking for answers about the
                competitors product or service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFAQ;
