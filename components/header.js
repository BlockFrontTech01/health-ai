import { useState, useCallback } from "react";
import HealthcareMenu from "./healthcare-menu";
import PortalPopup from "./portal-popup";

const Header = () => {
  const [isHealthcareMenuOpen, setHealthcareMenuOpen] = useState(false);

  const onFrameButtonClick = useCallback(() => {
    window.open("https://blockfronttech.vercel.app");
  }, []);

  const openHealthcareMenu = useCallback(() => {
    setHealthcareMenuOpen(true);
  }, []);

  const closeHealthcareMenu = useCallback(() => {
    setHealthcareMenuOpen(false);
  }, []);

  return (
    <>
      <div className="fixed my-0 mx-[!important] top-[0px] left-[0px] bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] w-[1440px] h-[60px] overflow-hidden shrink-0 z-[11]">
        <div className="absolute top-[9px] left-[0px] flex flex-row items-start justify-center gap-[400px] md:gap-[330px]">
          <img
            className="relative w-[50px] h-[50px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-135@2x.png"
          />
          <div className="relative w-[696px] h-10">
            <div className="absolute top-[9px] left-[77px] w-[619px] h-[22px] md:hidden">
              <button
                className="cursor-pointer [border:none] p-0 bg-white absolute top-[0px] left-[494px] rounded-3xs shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.5)] w-[125px] h-[22px] overflow-hidden"
                onClick={onFrameButtonClick}
              >
                <b className="absolute top-[0px] left-[24px] text-mid font-inika text-black text-center">
                  Developer
                </b>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-white absolute top-[0px] left-[332px] rounded-3xs shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.5)] w-[125px] h-[22px] overflow-hidden">
                <b className="absolute top-[0px] left-[34px] text-mid font-inika text-black text-center">
                  Contact
                </b>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-white absolute top-[0px] left-[170px] rounded-3xs shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.5)] w-[125px] h-[22px] overflow-hidden">
                <b className="absolute top-[0px] left-[45px] text-mid font-inika text-black text-center">
                  Docs
                </b>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-white absolute top-[0px] left-[0px] rounded-3xs shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.5)] w-[125px] h-[22px] overflow-hidden">
                <b className="absolute top-[0px] left-[20px] text-mid font-inika text-black text-center">
                  Healthcare
                </b>
              </button>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-10 h-10 bg-[url('/menu@2x.png')] bg-cover bg-no-repeat bg-[top] hidden md:flex"
              onClick={openHealthcareMenu}
            />
          </div>
        </div>
      </div>
      {isHealthcareMenuOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closeHealthcareMenu}>
          <HealthcareMenu onClose={closeHealthcareMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
