import DownloadApp from "./EightSection";

function FrequntlyQuestion() {
  return (
    <>
      <div className="bg-[#FFF7E2] px-4 sm:px-8 md:px-20 py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Find quick answers to common questions to help you navigate the app
          and its features easily.
        </p>

        <div className="max-w-4xl mx-auto space-y-4 text-left">
          {[
            "What is Amrutam?",
            "How does Amrutam help me grow as a practitioner?",
            "How do I become a part of Amrutam Doctor?",
            "What is Amrutam Global as a platform?",
            "What documents do I need to provide?",
            "Is there a fee to join Amrutam?",
          ].map((question, index) => (
            <div
              key={index}
              className="border-b border-gray-400 pb-3 flex justify-between items-center"
            >
              <span className="text-gray-800 font-medium">{question}</span>
              <span className="text-green-700 text-2xl font-bold cursor-pointer">
                +
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-white hover:text-green-700 border-2 border-green-700 transition duration-300">
            See More
          </button>
        </div>
      </div>
      <DownloadApp />
    </>
  );
}
export default FrequntlyQuestion;
