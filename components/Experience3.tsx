// import { HoverEffect } from "@/components/ui/card-hover-effect";

// const Experience3=()=> {
//   return (
//     <div className="max-w-5xl mx-auto px-8">
//       <HoverEffect items={projects} />
//     </div>
//   );
// }
// export const projects = [
//   {
//     title: "Stripe",
//     description:
//       "A technology company that builds economic infrastructure for the internet.",
//     link: "https://stripe.com",
//   },
//   {
//     title: "Netflix",
//     description:
//       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     link: "https://netflix.com",
//   },
//   {
//     title: "Google",
//     description:
//       "A multinational technology company that specializes in Internet-related services and products.",
//     link: "https://google.com",
//   },
//   {
//     title: "Meta",
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     link: "https://meta.com",
//   },
//   {
//     title: "Amazon",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     link: "https://amazon.com",
//   },
//   {
//     title: "Microsoft",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "https://microsoft.com",
//   },
// ];
// export default Experience3;


import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Experience3 = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 py-20">
      <h1 className="heading">
        My <span className="text-[#0ea5e9]">Work Experience</span>
      </h1>
      <HoverEffect items={workExperience} />
    </div>
  );
};

// Assuming workExperience is defined and exported from a data file
export const workExperience = [
  {
    id: 1,
    title: "MERN Stack Developer Intern",
    description: (
      //   "Assisted in the development of a website for GoodTechMind.\nSee Company",
      <>
        Assisted in the development of a website for GoodTechMind.
        <br />
        <samp className="text-cyan-400">Link</samp>
      </>
    ),
    // thumbnail: "path/to/thumbnail1.jpg",
    link: "https://www.linkedin.com/company/goodtechmind/mycompany/",
  },
  {
    id: 2,
    title: "Full Stack Web Developer Intern",
    description: (
      <>
        Designed and developed a website for both Desktop & Mobile platforms for
        DotSquare Pvt. Ltd. .
        <br />
        <samp className="text-cyan-400">Link</samp>
      </>
    ),
    // thumbnail: "path/to/thumbnail2.jpg",
    link: "https://www.dotsquares.com/",
  },


  {
    id: 5,
    title: "Hackathon Experince",
    description: (
      <>
        Reach Final Round in various Hackathon and made real problems projects.
        <br />
        <samp className="text-cyan-400">Link</samp>
      </>
    ),

    // thumbnail: "path/to/thumbnail4.jpg",
    link: "https://unstop.com/certificate-preview/7090600c-f2ee-4fc7-9ca8-45c2916b2331?utm_campaign=site-emails",
  },
];

export default Experience3;
