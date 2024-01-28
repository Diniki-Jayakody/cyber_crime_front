import { AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-screen h-screen overflow-hidden bg-[url('./image/bg.png')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
      <div className=" w-4/5 h-[270px] rounded-2xl backdrop-blur-sm bg-blue-600/30 border-2 border-blue-600 flex flex-col items-center justify-center">
        <h2 className=" mb-5 text-gray-100 text-2xl font-semibold">
          Manage Your Complains
        </h2>
        {/* horizontal row */}
        <div className=" flex items-center">
          <div className=" w-1 h-1 rounded-full bg-slate-100" />
          <div className=" w-[200px] h-[1px] bg-slate-100" />
          <div className=" w-1 h-1 rounded-full bg-slate-100" />
        </div>
        {/* buttons */}
        <div className=" mt-9 flex items-center gap-16">
          <button
            onClick={() => navigate("/add-complain")}
            className=" py-2 px-12 bg-violet-600 rounded-md flex items-center gap-1"
          >
            <AiOutlinePlusCircle className="text-sm text-gray-100" />
            <p className=" text-sm font-bold text-gray-100">Add Complain</p>
          </button>
          <button className=" py-2 px-12 bg-pink-600 rounded-md flex items-center gap-1">
            <AiOutlineSearch className=" text-sm text-gray-100" />
            <p className=" text-sm font-bold text-gray-100">View Complains</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
