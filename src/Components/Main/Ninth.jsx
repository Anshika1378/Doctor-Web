import besan from "../../assets/media/Besan.png";
import Footer from "../Home/Footer";

function Connect() {
  return (
    <>
      <div className="bg-[#FFF7E2] py-12 px-4 sm:px-6 lg:px-16">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-green-700 mb-2">
          Let’s Connect
        </h2>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          We’re here to help you on your wellness journey. Reach out to us for
          any questions, product inquiries, or personalized advice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="w-full">
            <img
              src={besan}
              alt="Let's Connect"
              className="w-160 h-auto rounded-md shadow-lg object-cover"
            />
          </div>

          {/* Right Form */}
          <form className="bg-[#F6F6F6] rounded-md p-6 space-y-4 shadow-md w-full">
            {/* Name & Contact */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your Contact Number"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
            />

            {/* Message */}
            <textarea
              placeholder="Message (Optional)"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
              rows="4"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded hover:bg-white hover:text-green-700 border-2 border-green-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Connect;
