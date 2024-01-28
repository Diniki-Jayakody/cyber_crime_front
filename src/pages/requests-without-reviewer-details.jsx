import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const RequestsWithoutReviewerDetails = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-screen h-screen p-7 overflow-hidden bg-[url('./image/bg.png')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
      <div className=" w-full h-full p-5 rounded-2xl backdrop-blur-sm bg-blue-600/30 border-2 border-blue-600 flex flex-col items-center">
        {/* top section */}
        <div className=" relative w-full h-fit flex justify-center">
          <button
            onClick={() => navigate("/add-reviewer")}
            className=" absolute -top-2 -left-2 w-7 h-7 backdrop-blur-sm bg-blue-600/30 border-2 border-blue-600 rounded-full flex flex-col items-center justify-center"
          >
            <AiOutlineLeft className=" text-xs text-gray-100" />
          </button>
          {/* title */}
          <div className=" flex flex-col items-center">
            <h2 className=" mb-3 text-gray-100 text-2xl font-semibold">
              Requests Without Reviewer
            </h2>
            {/* horizontal row */}
            <div className=" flex items-center">
              <div className=" w-1 h-1 rounded-full bg-slate-100" />
              <div className=" w-[230px] h-[1px] bg-slate-100" />
              <div className=" w-1 h-1 rounded-full bg-slate-100" />
            </div>
          </div>
        </div>
        {/* data display section */}
        <div className=" w-full h-full mt-5 pb-5 px-7 overflow-x-hidden overflow-y-auto">
          <div className=" w-full grid grid-cols-2 gap-12">
              <div className=" w-full px-5 py-[20px] bg-white rounded-lg flex items-center"></div>
              <div className=" w-full px-5 py-[20px] bg-white rounded-lg flex items-center"></div>
              <div className=" w-full px-5 py-[20px] bg-white rounded-lg flex items-center"></div>
              <div className=" w-full px-5 py-[20px] bg-white rounded-lg flex items-center"></div>
              <div className=" w-full px-5 py-[20px] bg-white rounded-lg flex items-center"></div>
              <div className=" w-full px-5 py-[20px] bg-white rounded-lg flex items-center"></div>
              <div className=" w-full px-5 py-[20px] bg-white rounded-lg flex items-center"></div>
              <div className=" w-full px-5 py-[20px] bg-white rounded-lg flex items-center"></div>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default RequestsWithoutReviewerDetails;