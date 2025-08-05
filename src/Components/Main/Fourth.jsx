import care from "../../assets/media/care.png";
import back from "../../assets/media/background.png";
import ConsultationMobile from "./Fifth";

function DrCare() {
  return (
    <>
      <div className="bg-amber-100 text-center justify-center p-0 m-0">
        <h1 className="text-green-700  text-3xl font-semibold">
          Join Our Circle of Care
        </h1>
        <p className="text-black">Became a part of Amrutam is simple</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-amber-100">
        {/* Left Column – Referral Box */}
        <div className="flex flex-col items-center justify-center p-2 gap-4">
          <div className="border-2 border-green-700 w-100  px-8 py-3">
            <h1 className="text-green-700 font-medium text-[12px] sm:text-[13px] md:text-[15px]">
              Step 1: Get your referral code
            </h1>
            <p className="text-black text-[8px] sm:text-[10px]">
              Contact us to receive your unique referral code.
            </p>
          </div>
          <div className="border-2 border-green-700 w-100 text-center px-8 py-3">
            <h1 className="text-green-700 font-medium text-[12px] sm:text-[13px] md:text-[15px]">
              Step 2: Register on Amrutam
            </h1>
            <p className="text-black text-[8px] sm:text-[10px]">
              Sign up on the Amrutam Doctor app or website to join our
              specialist network.
            </p>
          </div>
          <div className="border-2 border-green-700 w-100 text-center px-8 py-3">
            <h1 className="text-green-700 font-medium text-[12px] sm:text-[13px] md:text-[15px]">
              Step 3: Complete KYC{" "}
            </h1>
            <p className="text-black text-[8px] sm:text-[10px]">
              Fill your details and upload the requried documents for
              verifications.
            </p>
          </div>
          <div className="border-2 border-green-700 w-100 text-center px-8 py-3">
            <h1 className="text-green-700 font-medium text-[12px] sm:text-[13px] md:text-[15px]">
              Step 4: Start Consulting
            </h1>
            <p className="text-black text-[8px] sm:text-[10px]">
              Once verified begin offering consultation helping patients.
            </p>
          </div>
        </div>

        {/* Right Column – Image */}
        <div className="relative flex items-center justify-center p-4">
          {/* Background Image */}
          <img src={back} alt="Background" className="w-full h-auto z-0" />

          {/* Foreground Image */}
          <img
            src={care}
            alt="Referral"
            className="absolute max-w-full h-auto z-10"
          />
        </div>
      </div>
      <ConsultationMobile />
    </>
  );
}
export default DrCare;
