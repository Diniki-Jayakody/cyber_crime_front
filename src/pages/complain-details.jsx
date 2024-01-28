import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ComplainDetails = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-screen h-screen p-7 overflow-hidden bg-[url('./image/bg.png')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
      <div className=" w-full h-full p-5 rounded-2xl backdrop-blur-sm bg-blue-600/30 border-2 border-blue-600 flex flex-col items-center">
        {/* top section */}
        <div className=" relative w-full h-fit flex justify-center">
          <button
            onClick={() => navigate("/add-complain")}
            className=" absolute -top-2 -left-2 w-7 h-7 backdrop-blur-sm bg-blue-600/30 border-2 border-blue-600 rounded-full flex flex-col items-center justify-center"
          >
            <AiOutlineLeft className=" text-xs text-gray-100" />
          </button>
          {/* title */}
          <div className=" flex flex-col items-center">
            <h2 className=" mb-3 text-gray-100 text-2xl font-semibold">
              Complain Details
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
          {/* top section */}
          <div className=" w-full grid grid-cols-2 gap-12">
            {/* complain */}
            <div>
              {/* title */}
              <div className=" w-full px-5 py-[5px] bg-white rounded-lg flex items-center">
                <h4 className=" text-base text-blue-600 font-bold">Complain</h4>
                {/* horizontal row */}
                <div className=" flex-1 flex items-center">
                  <div className=" ml-2 flex-1 h-[1px] bg-blue-600" />
                  <div className=" w-1 h-1 bg-blue-600 rounded-full" />
                </div>
              </div>
              {/* complain details */}
              <div className=" w-full h-72 mt-3 bg-white rounded-lg"></div>
            </div>
            {/* access list */}
            <div>
              {/* title */}
              <div className=" w-full px-5 py-[5px] bg-white rounded-lg flex items-center">
                <h4 className=" text-base text-blue-600 font-bold">
                  Access List
                </h4>
                {/* horizontal row */}
                <div className=" flex-1 flex items-center">
                  <div className=" ml-2 flex-1 h-[1px] bg-blue-600" />
                  <div className=" w-1 h-1 bg-blue-600 rounded-full" />
                </div>
              </div>
              {/* Access List details */}
              <div className=" w-full h-72 mt-3 bg-white rounded-lg"></div>
            </div>
          </div>
          {/* bottom section */}
          <div className=" mt-4">
            {/* title */}
            <div className=" w-full px-5 py-[5px] bg-white rounded-lg flex items-center">
              <h4 className=" text-base text-blue-600 font-bold">
                Access Requests
              </h4>
              {/* horizontal row */}
              <div className=" flex-1 flex items-center">
                <div className=" ml-2 flex-1 h-[1px] bg-blue-600" />
                <div className=" w-1 h-1 bg-blue-600 rounded-full" />
              </div>
            </div>
            {/* Access Requests details */}
            <div className=" w-full h-72 mt-3 bg-white rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplainDetails;
