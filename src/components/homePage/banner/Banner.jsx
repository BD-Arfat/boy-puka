import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen text-left">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="../../../../public/imgae/OIP-removebg-preview.png"
            className="w-96"
          />
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn mt-6 btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
