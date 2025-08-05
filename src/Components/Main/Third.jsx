import left from "../../assets/media/left.png";
import right from "../../assets/media/right.png";
import left1 from "../../assets/media/left1.png";
import right1 from "../../assets/media/right1.png";
import left2 from "../../assets/media/left2.png";
import g from "../../assets/media/g.png";
import DrCare from "./Fourth";

function DoctorChoose() {
  return (
    <>
      <div className="text-center justify-center p-0 m-0  mx-auto bg-amber-100">
        <h1 className="text-green-700  text-3xl font-semibold">
          Why Doctor Choose Us?
        </h1>
        <p className="text-black">
          Unlock the Benefits of Smarter Healthcare Management and Patient Care
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-amber-100 px-6 py-6">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={left}
            alt=""
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-ful"
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-start md:justify-center items-center text-center mt-4 md:mt-0">
          <h1 className="text-green-600 font-medium text-lg sm:text-xl">
            Instant <span className="text-green-800 font-bold">FREE</span> 5 min
            call
          </h1>
          <p className="text-black text-center leading-relaxed max-w-xl mx-auto px-10 sm:px-10">
            We understand the importance of building trust with your patients.
            That's why Amrutam offers a
            <span className="text-black font-bold"> Free 5 min call </span>—
            helping you connect instantly and foster lasting patient
            relationships with ease.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-amber-100 px-6 py-6">
        {/* Right Text */}
        <div className="flex flex-col justify-start md:justify-center items-center text-center mt-4 md:mt-0">
          <h1 className="text-green-600 font-medium text-lg sm:text-xl">
            Forum for Meaningful Connection
          </h1>
          <p className="text-black text-center leading-relaxed max-w-xl mx-auto px-10 sm:px-10 mt-2">
            We value your journey in Ayurvedic. The Amrutam Forum helps you
            engage with patient, answer question while the "Thoughts" section
            allow to share deeper Ayurvedic wisdom.
          </p>
        </div>
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={right}
            alt=""
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-amber-100 px-6 py-6">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={left1}
            alt=""
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-ful"
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-start md:justify-center items-center text-center mt-4 md:mt-0">
          <h1 className="text-green-600 font-medium text-lg sm:text-xl">
            Choose your session Mode
          </h1>
          <p className="text-black text-center leading-relaxed max-w-xl mx-auto px-10 sm:px-10">
            Amrutam offers you to connect with patient via instant chat ,
            Instant call or Schedule video call. Each option offer flexbility
            and personalized care to suit individual needs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-amber-100 px-6 py-6">
        {/* Right Text */}
        <div className="flex flex-col justify-start md:justify-center items-center text-center mt-4 md:mt-0">
          <h1 className="text-green-600 font-medium text-lg sm:text-xl">
            Smart Wallet
          </h1>
          <p className="text-black text-center leading-relaxed max-w-xl mx-auto px-10 sm:px-10 mt-2">
            We understand the need for seamless transaction,with Amrutam
            wallet,We can easily withdraw paymetns and for your security, a one
            time password is send to your registered mobile number during
            withdraw.
          </p>
        </div>
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={right1}
            alt=""
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-amber-100 px-6 py-6">
        {/* Left Image */}
        <div className="relative flex justify-center items-center">
          <img
            src={left2}
            alt=""
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-full"
          />
          <img
            src={g}
            alt=""
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-15 w-50 ml-20"
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-start md:justify-center items-center text-center mt-4 md:mt-0">
          <h1 className="text-green-600 font-medium text-lg sm:text-xl">
            Flexible work Timing
          </h1>
          <p className="text-black text-center leading-relaxed max-w-xl mx-auto px-10 sm:px-10">
            We recognize the importance of managing your time with the
            availability toggle in the doctor's app.you control when patient can
            book consultations, ensuring balanced and stress-free practice.
          </p>
        </div>
      </div>
      <DrCare />
    </>
  );
}
export default DoctorChoose;
