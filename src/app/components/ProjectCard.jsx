import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay space-x-4 items-center justify-center absolute top-0 left-0 w-full h-full bg-slate-900 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl != null ? gitUrl : '#'}
            className="h-14 w-14 border-2 relative rounded-full border-slate-400 hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-slate-400 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl != null ? previewUrl : '#'}
            className="h-14 w-14 border-2 relative rounded-full border-slate-400 hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-slate-400 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-slate-400 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <div className="text-slate-200">
          <PortableText value={description} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
