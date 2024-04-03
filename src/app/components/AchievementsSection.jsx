"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Tools",
    value: "20",
  },
  {
    metric: "Years",
    value: "4",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-slate-500 sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3
                  })}
                />
              </h2>
              <p className="text-slate-100 text-base">
                {achievement.prefix ? (
                  <span> {achievement.prefix} </span>
                ) : null}
                {achievement.metric}
                {achievement.postfix ? (
                  <span> {achievement.postfix} </span>
                ) : null}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
