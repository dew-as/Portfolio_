import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="https://github.com/dew-as"
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <img
                className="w-5 h-5 fill-current"
                src="https://cdn-icons-png.flaticon.com/512/2175/2175377.png"
                alt=""
              />
            </a>
			<a
              href="http://www.linkedin.com/in/aswin-dev-4154b0294"
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <img
                className="w-5 h-5 fill-current"
                src="https://cdn-icons-png.flaticon.com/512/4138/4138173.png"
                alt=""
              />
            </a>
			<a
              href="mailto:dewasdevelops@gmail.com"
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <img
                className="w-5 h-5 fill-current"
                src="https://cdn-icons-png.flaticon.com/512/95/95627.png"
                alt=""
              />
            </a>
			<a
              href="https://wa.me/9745671496"
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <img
                className="w-5 h-5 fill-current"
                src="https://cdn-icons-png.flaticon.com/512/3128/3128217.png"
                alt=""
              />
            </a>
            
          </div>
        </div>
      </div>
      <p className="text-sm mt-2  opacity-50">
        &copy; {new Date().getFullYear()} Dewas Develops. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
