"use client";

/** library import */
// import { useState, useEffect } from "react";
// import { BsFillArrowUpRightSquareFill, BsDashLg, BsDot } from "react-icons/bs";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import Link from "next/link";

/** custom import */
// import Pill from "./Pill";
// import { ExperienceDataType } from "@/utils/allInterfaces";

// interface ExperienceCardProps {
//   exp: ExperienceDataType;
// }

// const ExperienceCard = ({ exp }: ExperienceCardProps) => {
//   const allRoles = exp?.roles || [];
//   return (
//     <div>
//       {/* duration */}
//       <div className="text-xs flex gap-1 items-center uppercase">
//         {exp.start_date} <BsDashLg /> {exp.end_date}
//       </div>

//       {/* content */}
//       <div>
//         <div className="text-white flex items-center gap-2">
//           {exp?.cert_link ? (
//             <h1 className="font-bold hover:underline hover:underline-offset-4">
//               <Link
//                 href={exp.cert_link}
//                 target="_blank"
//                 className="flex items-center"
//               >
//                 {exp.company_name} <BsDot /> {exp.mode}
//               </Link>
//             </h1>
//           ) : (
//             <h1 className="text-white flex items-center font-bold">
//               {exp.company_name} <BsDot /> {exp.mode}
//             </h1>
//           )}
//           {exp?.cert_link && (
//             <BsFillArrowUpRightSquareFill className="text-md" />
//           )}
//         </div>
//         <div className="flex flex-col items-start gap-2">
//           {allRoles?.map((item, idx) => {
//             const pills = item?.tech_stack || [];
//             return (
//               <div key={idx}>
//                 <h2 className="font-bold text-gray-500">{item?.position}</h2>
//                 {allRoles?.length > 1 && (
//                   <div className="text-xs flex gap-1 items-center uppercase">
//                     {item?.start_date} <BsDashLg /> {item?.end_date}
//                   </div>
//                 )}
//                 <p className="text-sm mt-1">{item?.description}</p>
//                 <div className="flex flex-wrap">
//                   {pills?.length > 0
//                     ? pills?.map((pill) => {
//                         return <Pill key={exp.id} pill={pill} />;
//                       })
//                     : ""}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

const CaseStudies = () => {
  //   const [experiences, setExperiences] = useState<ExperienceDataType[] | null>(
  //     null,
  //   );
  //   useEffect(() => {
  //     const fetchExperiences = async () => {
  //       const res = await fetch("/api/experiences");
  //       const data = await res.json();
  //       setExperiences(data);
  //     };

  //     fetchExperiences();
  //   }, []);

  return (
    <div className="flex flex-col gap-8" id="case-studies">
      <h1 className="text-sm font-extrabold uppercase">Case Studies</h1>
      <p className="font-semibold animate-pulse text-sm">Coming soon...</p>
      {/* <div className="flex flex-col gap-8">
        {experiences ? (
          experiences.map((exp) => {
            return <ExperienceCard key={exp.id} exp={exp} />;
          })
        ) : (
          <div className="flex items-center gap-2">
            <span>Loading</span>
            <AiOutlineLoading3Quarters className="animate-spin" />
          </div>
        )}
      </div>
      <div className="text-white flex items-center gap-2 hover:underline hover:underline-offset-4">
        <h1 className="font-bold">
          <Link href={resumeLink} target="_blank">
            View Full Résumé
          </Link>
        </h1>
        <BsFillArrowUpRightSquareFill className="text-md" />
      </div> */}
    </div>
  );
};

export default CaseStudies;
