import group from "../../assets/media/Group.png";
import box1 from "../../assets/media/box1.png";
import box2 from "../../assets/media/box2.png";
import box3 from "../../assets/media/box3.png";
import box4 from "../../assets/media/box4.png";
import Social from "../../assets/media/Social.png";
import Connect from "./Ninth";

function DownloadApp() {
  return (
    <>
      <div className="bg-amber-100 px-4 sm:px-6 md:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* Left Column - Text */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold text-green-700">
              Get Started Today – Download the App now!
            </h1>
            <p>
              Simplify consultation , manage patients, and grow your practice--
              all in one place.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-6">
              {/* Left Column */}
              <div className="flex flex-col items-center space-y-4">
                <img src={box1} alt="Box 1" className="w-full h-auto" />
                <img src={box2} alt="Box 2" className="w-full h-auto" />
              </div>

              {/* Right Column */}
              <div className="flex flex-col items-center space-y-4">
                <img src={box3} alt="Box 3" className="w-full h-auto" />
                <img src={box4} alt="Box 4" className="w-full h-auto" />
              </div>
            </div>
            <img src={Social} alt="" />
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-end">
            <img src={group} alt="Download App" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <Connect />
    </>
  );
}
export default DownloadApp;
