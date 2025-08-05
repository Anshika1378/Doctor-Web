import sec1 from "../../assets/media/FAQMEDIA/sec1.png";
import sec2 from "../../assets/media/FAQMEDIA/sec2.png";
import sec3 from "../../assets/media/FAQMEDIA/sec3.png";
import sec4 from "../../assets/media/FAQMEDIA/sec4.png";
import Social from "../../assets/media/Social.png";
import mobile from "../../assets/media/FAQMEDIA/mobile.png";
import green from "../../assets/media/FAQMEDIA/greenbox.png";
import up from "../../assets/media/FAQMEDIA/up.png";
import down from "../../assets/media/FAQMEDIA/down.png";
import human from "../../assets/media/FAQMEDIA/humanbox.png";
import Footer from "./Footer";

function Download() {
  return (
    <>
      <div className="bg-amber-100 px-4 sm:px-6 md:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* Left Column - Text */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold text-green-700">
              Download Amrutam  Ayurveda App Now
            </h1>
            <p>
             The Amrutam Ayurveda is your one stop-app <br />
             for all thing Ayurveda! Apart from mimicking the  <br />
             website the app has added benefits.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-6">
              {/* Left Column */}
              <div className="flex flex-col items-center space-y-4">
                <img src={sec1} alt="Box 1" className="w-full h-auto" />
                <img src={sec2} alt="Box 2" className="w-full h-auto" />
              </div>

              {/* Right Column */}
              <div className="flex flex-col items-center space-y-4">
                <img src={sec3} alt="Box 3" className="w-full h-auto" />
                <img src={sec4} alt="Box 4" className="w-full h-auto" />
              </div>
            </div>
            <img src={Social} alt="" className="h-20" />
          </div>

          {/* Right Column - Image */}
          <section className="items-center w-full overflow-hidden">
            {/* Top Row: green + up + mobile */}
            <div className="flex justify-end items-center gap-3 mt-4 px-4 md:px-0">
              <img
                src={green}
                alt="Download App"
                className="w-24 sm:w-32 md:w-40 h-auto"
              />
              <img
                src={up}
                alt="up-arrow"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mt-2"
              />
              <img
                src={mobile}
                alt="Download App"
                className="w-32 sm:w-40 md:w-52 h-auto"
              />
            </div>

            {/* Bottom Row: human + down */}
            <div className="flex justify-end items-end gap-3 mt-6 px-4 md:px-0">
              <img
                src={human}
                alt="humanbox"
                className="w-24 sm:w-32 md:w-40 h-auto"
              />
              <img
                src={down}
                alt="down-arrow"
                className="w-10 h-8 sm:w-10 sm:h-10 mt-2"
              />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Download;
