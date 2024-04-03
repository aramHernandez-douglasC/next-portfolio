"use client";
import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const ServicesCards = ( {props} ) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12 mt-6 text-slate-400">
      {props &&
        props.map((service, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <Card className="bg-slate-400 text-slate-200 min-h-80">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.shortDescription}</p>
              </CardContent>
              <CardFooter className="flex place-content-end">
                <Link href="#">
                  <Button className="">More</Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.li>
        ))}
    </ul>
  );
};

export default ServicesCards;
