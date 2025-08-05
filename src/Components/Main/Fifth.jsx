import iphone1 from "../../assets/media/iphone1.png";
import iphone2 from "../../assets/media/iphone2.png";
import iphone3 from "../../assets/media/iphone3.png";
import Testinomials from "./Sixth";

function ConsultationMobile() {
  return (
    <>
      <div className="flex justify-center items-center gap-4 p-4 bg-amber-100">
        <button className="border-2 border-green-500 bg-green-700 text-white px-4 py-2 rounded hover:bg-white hover:text-green-700 transition">
          Consultations
        </button>
        <button className="border-2 border-green-500 bg-white text-green-700 px-4 py-2 rounded hover:bg-green-700 hover:text-white transition">
          Payment Withdrawal
        </button>
        <button className="border-2 border-green-500 bg-white text-green-700 px-4 py-2 rounded hover:bg-green-700 hover:text-white transition">
          Schedule
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 sm:px-6 bg-amber-100 p-4">
        {/* Column 1 */}
        <div className="text-center">
          <h1 className="text-lg font-semibold mb-2 text-green-700">Value Your Practice</h1>
          <img
            src={iphone1}
            alt="iPhone 1"
            className="mx-auto max-w-full h-auto"
          />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col justify-center items-center text-center">
          <img
            src={iphone2}
            alt="iPhone 2"
            className="max-w-full h-auto mb-2"
          />
          <h1 className="text-lg font-semibold text-green-700">Today's Healing Journey</h1>
        </div>

        {/* Column 3 */}
        <div className="text-center">
          <h1 className="text-lg font-semibold mb-2 text-green-700">Consultation Details</h1>
          <img
            src={iphone3}
            alt="iPhone 3"
            className="mx-auto max-w-full h-auto"
          />
        </div>

        {/* Button under the 2nd column */}
        <div className="md:col-start-2 flex justify-center mt-4">
          <button className="bg-green-700 text-white hover:bg-white hover:text-green-700 border-2 border-green-700 px-4 py-2 rounded">
            Join Now
          </button>
        </div>
      </div>
      <Testinomials />
    </>
  );
}
export default ConsultationMobile;
