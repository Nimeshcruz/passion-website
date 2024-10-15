import React from "react";

import HalfHeartInv from "../../svg/HalfHeartInv";
import BgBlackTriangle from "../../svg/BgBlackTriangle";
import CarImg from "../../../images/app-car.jpg";
import HomeImg from "../../../images/app-home.jpg";
import Google from "../../../images/google.png";
import Alexa from "../../../images/alexa.png";

export default function ContactApps() {
  return (
    <section className="pt-[33%] md:pt-[25%] lg:pt-[10.9%] relative bg-black">
      <div className="row flex flex-col lg:flex-row">
        <div className="col w-[100%] lg:w-[50%]">
          <div
            className="col-inner w-[100%] pb-[115%] md:pb-[80%] lg:pb-[70%] bg-top md:bg-bottom relative"
            style={{ backgroundImage: `url(${HomeImg})` }}
          >
            <div className="content-wrap absolute left-0 lg:left-[8%] bottom-0 lg:bottom-[20%] top-0 lg:top-auto w-[50%] md:w-[40%] lg:w-[50%] lg:p-0 text-xs text-center bg-[rgba(0,0,0,0.45)] lg:bg-transparent">
              <div className="triangle lg:hidden relative mb-12 md:mb-14">
                <BgBlackTriangle width="100%" fill="#101010" class="mt[-1px]" />
                <div className="content-wrap text-center font-light absolute top-1 md:top-2 left-1/2 -translate-x-1/2">
                  <div className="app-title text-lg md:text-2xl font-medium tracking-tight">
                    At Home
                  </div>
                  <p className="tracking-tighter text-[0.55rem] md:text-sm">
                    On your smart speaker
                  </p>
                </div>
              </div>
              <div className="google flex flex-col lg:flex-row items-center gap-5 mb-10 lg:mb-5 p-4 lg:p-0">
                <img
                  src={Google}
                  alt="Google icon"
                  className="w-12 lg:w-7"
                ></img>
                <p>&quot;Hey Google, talk to Passion Ibiza Radio&quot;</p>
              </div>
              <div className="alexa flex flex-col lg:flex-row items-center gap-5 p-4 lg:p-0">
                <img
                  src={Alexa}
                  alt="Google icon"
                  className="w-16 lg:w-8"
                ></img>
                <p>
                  Enable skills on Amazon, then say &quot;Alexa, play Passion
                  Ibiza Radio&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col w-[100%] lg:w-[50%] relative">
          <div
            className="col-inner w-[100%] pb-[115%] md:pb-[80%] lg:pb-[70%] bg-cover"
            style={{ backgroundImage: `url(${CarImg})` }}
          >
            <div className="content-wrap absolute left-0 lg:hidden bottom-0 top-0 w-[50%] md:w-[40%] text-xs text-center bg-[rgba(0,0,0,0.45)] lg:bg-transparent">
              <div className="triangle lg:hidden relative mb-14">
                <BgBlackTriangle width="100%" fill="#101010" class="mt[-1px]" />
                <div className="content-wrap text-center font-light absolute top-1 md:top-2 left-1/2 -translate-x-1/2">
                  <div className="app-title text-lg md:text-2xl font-medium tracking-tight">
                    In The Car
                  </div>
                  <p className="tracking-tighter text-[0.55rem] md:text-sm">
                    with Android Auto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row w-[80%] absolute top-0 mx-auto left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="bg-svg flex">
          <HalfHeartInv width="100%" fill="#101010" />
        </div>
      </div>
      <div className="row w-[80%] absolute top-0 mx-auto left-1/2 -translate-x-1/2">
        <h2 className="text-red text-2xl md:text-3xl tracking-tight text-center font-medium mb-12 pt-12 md:pt-20 lg:pt-7">
          Listen wherever you are!
        </h2>
        <div className="content-wrap hidden lg:flex">
          <div className="col w-[50%] text-center font-Trap font-light">
            <div className="app-title text-3xl font-medium tracking-tight">
              At Home
            </div>
            <p>On your smart speaker</p>
          </div>
          <div className="col w-[50%] text-center">
            <div className="app-title text-3xl font-medium tracking-tight">
              In The Car
            </div>
            <p>with Android Auto</p>
          </div>
        </div>
      </div>
    </section>
  );
}

