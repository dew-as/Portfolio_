import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold font-mono">
        Aswindev
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium font-mono">
         MERN Stack Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Self-taught developer demonstrating a distinctive and innovative
        approach to creation. Delivers high-quality results within tight
        deadlines. Quick learner of new technologies. Seeking a challenging role
        to develop skills and contribute to organizational goals.
        <br /><br />{" "}
        <a
          href="https://github.com/dew-as/dew-as/blob/main/Aswindev.pdf"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-cyan-600"
          rel="noreferrer noopener"
        >
          <button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Download CV
          </button>
        </a>{" "}
      </p>
    </div>
  );
}

export default Intro;
