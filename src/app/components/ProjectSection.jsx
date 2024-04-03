"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { getProjects } from '@/app/api/SanityRepository'


// const projectsData = [
//   {
//     id: 1,
//     title: "Project Web Template",
//     description: "Project description",
//     image: "/images/about-image.webp",
//     tag: ["All", "Web"],
//     gitUrl: "#",
//     prevUrl: "#",
//   },
//   {
//     id: 2,
//     title: "Project Web Template",
//     description: "Project description",
//     image: "/images/about-image.webp",
//     tag: ["All", "Mobile"],
//   },
//   {
//     id: 3,
//     title: "Project Web Template",
//     description: "Project description",
//     image: "/images/about-image.webp",
//     tag: ["All", "Web"],
//     gitUrl: "#",
//     prevUrl: "#",
//   },
//   {
//     id: 4,
//     title: "Project Web Template",
//     description: "Project description",
//     image: "/images/about-image.webp",
//     tag: ["All", "Mobile"],
//     gitUrl: "#",
//     prevUrl: "#",
//   },
//   {
//     id: 5,
//     title: "Project Web Template",
//     description: "Project description",
//     image: "/images/about-image.webp",
//     tag: ["All", "Back-end"],
//     gitUrl: "#",
//     prevUrl: "#",
//   },
// ];


const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [tag, setTag] = useState("All");

  const [projectsData, setProjectsData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // Data fetching
  useEffect(()=> {
    getProjects()
    .then((data) => {
      setProjectsData(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
    })
  }, [])


  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData ? projectsData.filter((project) =>
    project.appTypeTags.includes(tag)
  ): [];

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="">
      <section className="pt-28" id="projects">
        <h2 className="font-semibold text-4xl text-white mb-4 text-center">
          My projects
        </h2>
        <div className="text-white flex flex-row justify-center -items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>
        <ul
          ref={ref}
          className="grid md:grid-cols-3 gap-8 md:gap-12 mt-6 text-slate-400"
        >
          {
            !isLoading && filteredProjects.map((project, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProjectCard
                  key={project._id}
                  title={project.name}
                  description={project.content}
                  imgUrl={project.image ? project.image : '/images/about-image.webp'}
                  gitUrl={project.gitUrl}
                  previewUrl={project.prevUrl}
                />
              </motion.li>
            ))
          }
        </ul>
      </section>
    </div>
  );
};

export default ProjectSection;
