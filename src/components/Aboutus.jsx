import React from "react";

function Aboutus() {
  return (
    <div
      className="h-120 w-full bg-gradient-to-r from-slate-900 to-slate-700
     text-white border-t-2 border-slate-300 flex"
    >
<div className=" h-full w-[50%] pt-20 pl-10 text-xl">
      <h1 className="text-7xl">About Us</h1>
      <p>
        What if the next Olympic champion is running barefoot in a remote
        village, unseen by the world? In a country of 1.4 billion, millions of
        athletes dream and train hard but remain unnoticed. AthleteX changes
        that by using AI to bring every athlete’s skills into the
        spotlight—making discovery, evaluation, and opportunity seamless for
        athletes, coaches, and selectors. It’s more than a platform; it’s a
        bridge from dusty fields to Olympic glory, giving every dreamer a chance
        to be seen and celebrated
      </p>
    </div>
  <div className="h-full w-[50%] pl-50 pt-13  ">
    <img className="h-90 w-90 bg-cover rounded-2xl " src="/img/AboutUs.png" alt="img" loading="lazy" />
    </div>
    </div>
  );
}

export default Aboutus;
