import React from "react";
import  ServicesCards  from '@/app/components/ServicesCards'
import { getAllServices } from "@/app/api/SanityRepository";

const ServicesComponent = async () => {
  const data = await getAllServices();
  return (
    <section id="services" className="pt-28">
      <h2 className="font-semibold text-4xl text-white mb-4 text-center">Services</h2>
      <ServicesCards props={data}/>
    </section>
  );
};

export default ServicesComponent;
