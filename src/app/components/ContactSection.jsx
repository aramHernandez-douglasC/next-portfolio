"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/icons/github-icon.svg";
import LinkedinIcon from "../../../public/icons/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      emailBody: e.target.emailBody.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (response.status === 200) {
      //   console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my12 py-24 gap-4"
      id="contact"
    >
      <div>
        <h2 className="text-xl font-bold text-white my-2">Contact Me!</h2>
        <p className="text-slate-200 mb-4 max-w-screen-md">
          <span className="font-semibold">📬 Ready to Elevate Your Digital Experience? </span>
          <br/>
          <br/>
          
          Let's Talk! Got a projectin mind or need expert advice on your digital
          strategy? We're here to help bring your ideas to life! Whether it's
          about integrating the latest SaaS tools, optimizing your existing
          platforms, or just a general inquiry about our services, we're all
          ears. Don't hesitate to reach out. Fill in the form, drop us an email,
          or simply give us a call. We’re excited to connect with you and
          explore how we can make your digital journey smooth, efficient, and
          impactful.
          <br/>
          <br/>
        
          <span className="font-semibold">🔗 Contact Us Today – Your Future Digital Success Awaits!</span>
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/aramHernandez-douglasC">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/aram-hernandez-136155163/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="jonsnow@thegoat.com"
              className="bg-slate-700 border border-slate-500 placeholder-slate-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
            <label
              htmlFor="subject"
              type="text"
              className="text-white block mb-2 mt-3 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="A quick hello"
              className="bg-slate-700 border border-slate-500 placeholder-slate-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="emailBody"
              type="textarea"
              className="text-white block mb-2 mt- text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="emailBody"
              id="emailBody"
              required
              placeholder="Whatever you are thinking 😜"
              className="bg-slate-700 border border-slate-500 placeholder-slate-400 text-gray-100 text-sm rounded-lg block w-full p-2.5 h-40"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 mt-6 w-full rounded-full mr-4 bg-pink-fairy-tale text-white hover:bg-slate-400 hover:text-black"
          >
            Send!
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm ">
              Email sent successfully! I'll contact you shortly
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
