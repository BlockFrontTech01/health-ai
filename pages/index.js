import { useEffect } from "react";
import Header from "../components/header";

const HealthAI = () => {
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
  return (
    <div className="relative bg-white w-full h-[3106px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-center text-21xl text-black font-inria-serif md:h-[4350px]">
      <b
        className="absolute my-0 mx-[!important] top-[191px] left-[0px] inline-block font-inika w-[1440px] shrink-0 z-[0] lg:w-[1150px] md:text-[25px] md:w-[400px] [&.animate]:md:animate-[1s_linear_0s_1_normal_forwards_fade-in] md:opacity-[0]"
        data-animate-on-scroll
      >
        <span className="text-burlywood">AI-Driven</span>
        <span>{` `}</span>
        <span className="text-darkcyan">Healthcare</span>
        <span>{` `}</span>
        <span className="text-red">Data</span>
        <span>{` `}</span>
        <span className="text-darkslategray-100">Management</span>
      </b>
      <div className="my-0 mx-[!important] absolute top-[952px] left-[0px] flex flex-row items-start justify-start gap-[520px] z-[1] text-left font-inknut-antiqua lg:gap-[400px] md:flex-col md:gap-[150px] md:pl-[70px] md:pt-0 md:box-border">
        <div className="relative w-2 h-[35px]" />
        <div
          className="relative rounded-xl bg-darkslategray-200 shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.5)] w-[306px] h-[71px] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:w-[270px] md:h-[50px]"
          data-animate-on-scroll
        >
          <div className="absolute top-[-14px] left-[67px] inline-block w-[199px] h-[85px] md:text-11xl">
            Utilities
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3005px] left-[0px] flex flex-row items-center justify-start gap-[13px] z-[2] text-[14px] font-inika lg:pb-0 lg:box-border md:pt-[1300px] md:box-border">
        <img
          className="relative w-[30px] h-[30px] object-cover"
          alt=""
          src="/circled-c@2x.png"
        />
        <div className="relative">Copy Right</div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1558px] left-[0px] flex flex-row items-start justify-start gap-[520px] z-[3] text-left font-inknut-antiqua lg:gap-[400px] md:flex-col md:gap-[0px] md:pl-20 md:pt-[700px] md:box-border">
        <div className="relative w-2 h-[35px]" />
        <div
          className="relative rounded-xl bg-darkslategray-200 shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.5)] w-[306px] h-[71px] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:w-60 md:h-[60px]"
          data-animate-on-scroll
        >
          <div className="absolute top-[-11px] left-[12px] inline-block w-[294px] h-[82px] md:text-11xl">
            Key features
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[298px] left-[0px] w-[1440px] flex flex-row items-start justify-center gap-[38px] z-[4] lg:pr-[300px] lg:box-border md:pt-20 md:pr-[1000px] md:box-border">
        <img
          className="relative w-[149px] h-[129px] object-cover [&.animate]:animate-[10s_linear_0s_infinite_normal_forwards_rotate-center] opacity-[1]"
          alt=""
          src="/virus@2x.png"
          data-animate-on-scroll
        />
        <img
          className="relative w-[206px] h-[206px] object-cover"
          alt=""
          src="/doctor-sitting-on-the-floor-with-books@2x.png"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[2910px] left-[0px] flex flex-row items-start justify-start gap-[50px] z-[5] md:gap-[20px] md:pt-[1300px] md:box-border">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[58px] bg-[url('/twitterx@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/telegramapp@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/youtube@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/discord@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
      </div>
      <div className="my-0 mx-[!important] absolute top-[1113px] left-[8px] w-[1432px] flex flex-row items-start justify-center gap-[202px] z-[6] text-mid lg:w-[1100px] md:flex-col md:gap-[98px] md:pl-[25px] md:pt-[200px] md:box-border">
        <div className="relative w-[357px] h-[354px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.25)] w-[357px] h-[126px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[8px] left-[7px] inline-block w-[344px] h-[118px]">
              {" "}
              Safeguard sensitive patient records, medical histories, and
              healthcare data with the highest level of blockchain security.
              Rest easy knowing that data breaches are a thing of the past.
            </div>
          </div>
          <div
            className="absolute top-[224px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.25)] w-[357px] h-[126px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[15px] left-[7px] inline-block w-[344px] h-[97px]">
              Tailor medical treatment plans, medications, and therapies based
              on an individual's unique genetic makeup, health history, and
              lifestyle.
            </div>
          </div>
        </div>
        <div className="relative w-[357px] h-[350px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.25)] w-[357px] h-[126px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[15px] left-[7px] inline-block w-[344px] h-[97px]">
              Harness the capabilities of AI to analyze medical data and make
              predictions about disease trends, treatment outcomes, and patient
              needs.
            </div>
          </div>
          <div
            className="absolute top-[224px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.25)] w-[357px] h-[126px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[15px] left-[7px] inline-block w-[344px] h-[97px]">
              {" "}
              Improve communication between healthcare providers, insurance
              companies, and patients by allowing seamless access to necessary
              medical data in a secure and compliant manner.
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1744px] left-[8px] w-[1432px] flex flex-row items-start justify-center gap-[202px] z-[7] text-mid lg:w-[1100px] lg:pl-0 lg:pr-0 lg:box-border md:flex-col md:gap-[98px] md:pl-[25px] md:pt-[800px] md:box-border">
        <div className="relative w-[357px] h-[365px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.25)] w-[357px] h-[126px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[27px] left-[7px] inline-block w-[344px] h-[77px]">
              Utilize the immutability and transparency of blockchain to ensure
              that healthcare data is tamper-proof and auditable.
            </div>
          </div>
          <div
            className="absolute top-[239px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.25)] w-[357px] h-[126px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[27px] left-[7px] inline-block w-[344px] h-[77px]">
              Allow patients to manage their healthcare data permissions,
              enhancing privacy and control.
            </div>
          </div>
        </div>
        <div className="relative w-[357px] h-[368px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.25)] w-[357px] h-[126px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[27px] left-[7px] inline-block w-[344px] h-[77px]">
              {" "}
              Leverage AI algorithms for advanced diagnostics, from medical
              imaging interpretation to predictive analytics for patient care.
            </div>
          </div>
          <div
            className="absolute top-[242px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.25)] w-[357px] h-[126px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[27px] left-[7px] inline-block w-[344px] h-[77px]">
              Ensure compatibility with existing healthcare systems and
              standards to enable seamless data sharing.
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2547px] left-[0px] w-[975px] flex flex-row items-center justify-start gap-[380px] z-[8] text-mid lg:gap-[240px] md:flex-col md:gap-[0px] md:pt-[1300px] md:pr-[565px] md:box-border">
        <div className="relative w-[29px] h-[60px]" />
        <b
          className="relative inline-block w-[558px] h-[116px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-bottom] opacity-[0] md:text-[15px] md:w-[280px]"
          data-animate-on-scroll
        >
          Transform the healthcare industry with our AI-Driven Healthcare Data
          Management platform. Whether you're a healthcare provider, insurer, or
          patient, our solution ensures the highest level of data security,
          empowers individuals, and improves healthcare outcomes. Join us in
          reimagining healthcare data management for a healthier future!
        </b>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2160px] left-[-4px] flex flex-row items-center justify-start gap-[530px] z-[9] lg:gap-[400px] lg:pr-0 lg:box-border md:flex-col md:pl-[70px] md:pt-[900px] md:box-border">
        <div className="relative w-4 h-[53px]" />
        <img
          className="relative w-[296px] h-[296px] object-cover"
          alt=""
          src="/young-dental-therapist-in-dentists-office@2x.png"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[592px] left-[0px] flex flex-row items-center justify-start gap-[420px] z-[10] text-[20px] lg:gap-[300px] lg:pr-0 lg:box-border md:flex-col md:gap-[0px] md:pl-10 md:pt-[100px] md:box-border sm:pt-[150px] sm:box-border">
        <div className="relative w-[13px] h-[41px]" />
        <div
          className="relative rounded-xl [background:linear-gradient(180deg,_#bcb7b3,_#ff80fa)] shadow-[0px_0px_40px_rgba(0,_0,_0,_0.5)] w-[515px] h-[173px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-bottom] opacity-[0] md:w-[340px] md:h-[210px]"
          data-animate-on-scroll
        >
          <div className="absolute top-[19px] left-[15px] font-light inline-block w-[485px] h-[154px] md:text-mid md:w-[300px]">
            Elevate healthcare data management to the next level with our
            cutting-edge AI-driven platform. We combine the power of artificial
            intelligence and blockchain technology to revolutionize healthcare
            data storage, sharing, and analysis, ensuring security, privacy, and
            efficiency.
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default HealthAI;
