import { useCallback, useEffect } from "react";

const HealthcareMenu = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open("https://parkingswing.vercel.app");
  }, []);

  return (
    <div
      className="rounded-xl bg-black w-[430px] h-[364px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full max-h-full"
      data-animate-on-scroll
    >
      <button className="cursor-pointer [border:none] p-0 bg-black absolute top-[56px] left-[93px] rounded-xl shadow-[0px_0px_0px_1px_rgba(245,_245,_245,_0.5)] w-[199px] h-[33px] overflow-hidden">
        <b className="absolute top-[5px] left-[57px] text-mid font-inika text-white text-center">
          Healthcare
        </b>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-black absolute top-[133px] left-[93px] rounded-xl shadow-[0px_0px_0px_1px_rgba(245,_245,_245,_0.5)] w-[199px] h-[33px] overflow-hidden">
        <b className="absolute top-[5px] left-[82px] text-mid font-inika text-white text-center">
          Docs
        </b>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-black absolute top-[210px] left-[93px] rounded-xl shadow-[0px_0px_0px_1px_rgba(245,_245,_245,_0.5)] w-[199px] h-[33px] overflow-hidden">
        <b className="absolute top-[5px] left-[71px] text-mid font-inika text-white text-center">
          Contact
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-black absolute top-[287px] left-[93px] rounded-xl shadow-[0px_0px_0px_1px_rgba(255,_255,_255,_0.5)] w-[199px] h-[33px] overflow-hidden"
        onClick={onFrameButton3Click}
      >
        <b className="absolute top-[5px] left-[61px] text-mid font-inika text-white text-center">
          Developer
        </b>
      </button>
    </div>
  );
};

export default HealthcareMenu;
