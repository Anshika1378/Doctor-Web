import dr from "../../assets/media/Dr.png";
import Second from "./Second";

function AfterSection() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#FCED0A] to-[#FFFFFF] px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-black text-xl sm:text-2xl mb-2">
              Namaste, Welcome to Amrutam
            </h1>
            <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Join Amrutam -{" "}
              <span className="text-green-700">Grow Your Practice</span>
            </h1>
            <p className="text-green-700 text-base sm:text-lg mt-4">
              Connect with more patients, set your own schedule, and grow your
              Ayurvedic patients effortlessly.
            </p>
            <button className="bg-green-700 text-white hover:bg-green-500 px-4 py-2 rounded-2xl mt-5">
              Join Now
            </button>

            {/* Stats Section */}
            <div className="grid grid-cols-3 items-center text-center mt-6 max-w-xs sm:max-w-sm">
              {/* Left Stat */}
              <div>
                <h1 className="text-black text-xl font-bold">500+</h1>
                <p className="text-black text-sm">Avg. active users</p>
              </div>

              {/* Divider */}
              <div className="w-px h-12 bg-gray-300 mx-auto" />

              {/* Right Stat */}
              <div>
                <h1 className="text-black text-xl font-bold">40+</h1>
                <p className="text-black text-sm">Avg. daily free calls</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={dr}
              alt="Doctor"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </div>
      <Second />
    </>
  );
}

export default AfterSection;
