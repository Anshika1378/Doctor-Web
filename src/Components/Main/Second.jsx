import img1 from "../../assets/media/img1.png";
import img2 from "../../assets/media/img2.png";
import img3 from "../../assets/media/img3.png";
import img4 from "../../assets/media/img4.png";
import img5 from "../../assets/media/img5.png";
import img6 from "../../assets/media/img6.png";
import img7 from "../../assets/media/img7.png";
import img8 from "../../assets/media/img8.png";
import img9 from "../../assets/media/img9.png";
import DoctorChoose from "./Third";

function Second() {
  return (
    <>
      <div className="text-center maw-w-0 mx-auto justify-center bg-white ">
        <h1 className="text-green-700 text-3xl text-center font-semibold">
          Fetured
        </h1>
        <span className="px-5 text-center items-center text-black">
          Recongnized and celebrated by leading publications - Amrutam is the
          spotlight.
        </span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 p-5 sm:py-6 md:m-4 bg-white">
        <img src={img1} alt="" className="w-20 sm:w-28 md:w-30" />
        <img src={img2} alt="" className="w-20 sm:w-25 md:w-40" />
        <img src={img3} alt="" className="w-20 sm:w-25 md:w-40" />
        <img src={img4} alt="" className="w-20 sm:w-25 md:w-40" />
        <img src={img5} alt="" className="w-20 sm:w-25 md:w-40" />
        <img src={img6} alt="" className="w-20 sm:w-25 md:w-40" />
        <img src={img7} alt="" className="w-20 sm:w-25 md:w-40" />
        <img src={img8} alt="" className="w-20 sm:w-25 md:w-40" />
        <img src={img9} alt="" className="w-20 sm:w-25 md:w-40" />
      </div>
      <DoctorChoose />
    </>
  );
}
export default Second;
