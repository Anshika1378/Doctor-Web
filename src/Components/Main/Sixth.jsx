import frame1 from "../../assets/media/Frame1.png";
import frame2 from "../../assets/media/Frame2.png";
import frame3 from "../../assets/media/Frame3.png";
import FrequntlyQuestion from "./Seventh";

function Testinomials(){
    return(
        <>
            <div className="text-center justify-center p-0 m-0 mx-auto sm:px-10 px-4 bg-amber-100">
                <h1 className="text-green-700 font-semibold text-3xl text-center">What other Ayurvedic Doctors are Saying</h1>
                <p className="text-black ">Trusted by experts- Hear what Ayurvedic Doctors say about Amrutam.</p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 sm:p-6  bg-amber-100">
                <div className="col-span-1">
                    <img src={frame1} alt="" className="mx-auto" />
                </div>
                <div className="col-span-1">
                    <img src={frame2} alt="" className="mx-auto w-full h-full"/>
                </div>
                <div className="col-span-1">
                    <img src={frame3} alt="" className="mx-auto "/>
                </div>
            </div>
            <FrequntlyQuestion />
        </>
    )
}
export default Testinomials;