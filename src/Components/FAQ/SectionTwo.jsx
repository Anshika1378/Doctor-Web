import { AiOutlineRight } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import Download from "./Download";
function SectionTwo() {
  return (
    <>
      <section className="bg-amber-100 px-4 sm:px-8 md:px-20 py-12 text-center">
        <div className="flex gap-8   flex-wrap items-center justify-center  bg-amber-100 p-5">
          <h1 className="text-black hover:border-0 border-b-2 mt-5">
            Consultations
          </h1>
          <h1 className="text-black hover:border-b-2 mt-5">Wallet</h1>
          <h1 className="text-black hover:border-b-2 mt-5">Forum</h1>
          <h1 className="text-black hover:border-b-2 mt-5">Shop</h1>
        </div>
        <div className="max-w-4xl mx-auto space-y-4 mt-5">
          {[
            "What types a consultations are available?",
            "Can i get refunds for the wallet money?",
            "What is Amrutam Forum?",
            "Can i pause the audio consultation?",
            "Can i get refunds for the wallet money?",
            "What is Amrutam Forum?",
            "Can i pause the audio consultation?",
            "Is there a minimum durtion for an audio consultation?",
          ].map((question, index) => (
            <div
              key={index}
              className="border-b border-gray-400 pb-3 flex justify-between items-center  "
            >
              <span className="text-gray-800 font-medium">{question}</span>
              <span className="text-green-700 text-2xl font-bold cursor-pointer">
                <IoIosArrowDropdown />
              </span>
            </div>
          ))}
          <div className="mt-10 flex justify-center">
            <button className="flex items-center bg-white text-green-700 px-6 py-2 rounded hover:bg-green-700 hover:text-white border-2 border-green-700 transition duration-300">
              Load More <AiOutlineRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      <hr className="text-gray-400  " />
      <Download />
    </>
  );
}
export default SectionTwo;
