import Feedback from "@components/Feedback";
import Pricing from "@components/Pricing";
import QnA from "@components/QnA";
import Testimonial from "@components/Testimonial";
import React from "react";
const stats = [
  { id: 1, name: "Speeches created", value: "2 Thousands" },
  { id: 2, name: "Happy Premium Customers", value: "2.190" },
  { id: 3, name: "New users annually", value: "2,000" }
];

const Stats = () => {
  return (
    <div className="bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

const dashboard = () => {
  return (
    <div>
       <Testimonial />

<Stats />

      <Pricing />

    <Feedback />     

      <QnA />
    </div>
  );
};

export default dashboard;
