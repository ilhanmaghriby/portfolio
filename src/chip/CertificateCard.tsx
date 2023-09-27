import React from "react";
import { certificate } from "../data/certificate";

const CertificateCard = () => {
  const certificates = [...certificate];
  return (
    <>
      {certificates.map((result) => {
        return (
          <div
            className="flex flex-col justify-center items-center gap-4 "
            key={result.id}
          >
            <div className="shadow-lg h-[280px] w-[90%] cursor-pointer">
              <img
                src={result.img}
                alt={result.title}
                className="object-fit h-full w-full "
              />
            </div>
            <p className="text-center">{result.title}</p>
          </div>
        );
      })}
    </>
  );
};

export default CertificateCard;
