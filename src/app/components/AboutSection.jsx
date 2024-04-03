"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "@/app/components/TabButton";
import { PortableText } from "@portabletext/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MarqueeInner from "@/app/components/MarqueeInner";

const AboutSection = ({ props }) => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white pt-28" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.webp"
          alt="etereal computer"
          width={500}
          height={500}
        />
        {/* TODO
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h3>Tools</h3>
          <div>
            Insert Tools
          </div>
          <h3>Languages</h3>
          <div>
            Insert Tools
          </div>
          <h3>Frameworks</h3>
          <div>
            Insert Tools
          </div>
          
        </div> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="font-semibold text-4xl text-white mb-4">About Me</h2>
          <div className="text-slate-200 mb-4 max-w-screen-md">
            <PortableText value={props.summary} />
          </div>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {tab == "skills" && (
              <Carousel>
                <CarouselContent>
                  {props.skills.map((skill, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-1/3 lg:basis-1/5"
                    >
                      <MarqueeInner src={skill.image} alt={skill.skillName} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            )}

            {tab == "education" &&
              props.education.map((skill) => (
                <li key={skill._key}>
                  {skill.area} - {skill.degree}
                </li>
              ))}

            {tab == "experience" &&
              props.experience.map((skill) => (
                <li key={skill._key}>
                  {skill.position} - {skill.employeer}
                </li>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
