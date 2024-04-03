import React from "react";
import SpringIcon from "../../../public/icons/spring-svgrepo-com.svg";
import JavaIcon from "../../../public/icons/java-svgrepo-com.svg";
import Image from "next/image";
import Marquee from "@/app/components/Marquee";
import MarqueeInner from "@/app/components/MarqueeInner";

const imgObjects = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/82708333ebe4ce2ceb4f7051cc7c7e9ad97b83d020779addf1e8709308929e7f?apiKey=52898207208b4d6f8657f9c93b8689d5&",
    alt: "lala",
    style: "aspect-square w-[100px] max-w-none",
  },

  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dce1d58a28821deb805258cd9ea9dfd482ab469bd51b2fe805d97333590f4c86?apiKey=52898207208b4d6f8657f9c93b8689d5&",
    alt: "",
    style: "",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/65c42aef78a12bbfd7c40ada3b288b998c4ff91ddd135bebd5490e3e46e82b29?apiKey=52898207208b4d6f8657f9c93b8689d5&",
    alt: "",
    style: "aspect-square w-[100px] max-w-none",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7616d0959d442d984d239352e91b5d45ffde39ded4b7584c1ccb992d6a4f70d?apiKey=52898207208b4d6f8657f9c93b8689d5&",
    alt: "",
    style: "aspect-square w-[100px] max-w-none",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3aef08cca6683121454832ac3d0f6191ba8ac94d8158098ead83b84ca97c57bb?apiKey=52898207208b4d6f8657f9c93b8689d5&",
    alt: "",
    style: "aspect-square w-[100px] max-w-none",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b135b78852de02b9f459b0b48dfbc4fabf509581d74457c15408863c3f73db5?apiKey=52898207208b4d6f8657f9c93b8689d5&",
    alt: "",
    style: "aspect-square w-[100px] max-w-none",
  },
];

const TechnologiesSection = () => {
  return (
    <div className="marquee border-t-2 border-b-2 border-slate-800 mt-4">
      <h2 className="font-semibold text-4xl text-white mb-4 text-center">
        Technologies/Skills
      </h2>
      <Marquee>
        {imgObjects.map((x) => (
          <MarqueeInner key={x.key} src={x.src} alt={x.alt} />))}
      </Marquee>
    </div>
  );
};

export default TechnologiesSection;
