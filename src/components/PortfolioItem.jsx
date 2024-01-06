import React from "react";

function PortfolioItem({ title, imgUrl, stack, link , git, live }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <div className="flex justify-between">
          <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-mono font-semibold ">
            {title}
          </h3>
          <div className="flex gap-3">
          <a
            href={git}
            className="font-semibold text-white inline-flex items-center space-x-2 rounded-full"
          >
            <img
              className="w-5 h-5 fill-current"
              src="https://cdn-icons-png.flaticon.com/512/779/779088.png"
              alt=""
            />
          </a>

          <a
            href={live}
            className="font-semibold text-white inline-flex items-center space-x-2 rounded-full"
          >
            <img
              className="w-5 h-5 fill-current"
              src="https://cdn-icons-png.flaticon.com/512/5721/5721043.png"
              alt=""
            />
          </a>
          </div>
        </div>
        <p className="flex flex-wrap gap-2 flex-row font-mono items-center justify-start text-xs md:text-sm dark:text-white ">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
