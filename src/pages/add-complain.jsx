import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const inputFields = {
  input1: {
    title: "Personal Details",
  },
  input2: {
    title: "First Name",
  },
  input3: {
    title: "Last Name",
  },
  input4: {
    title: "Email",
  },
  input5: {
    title: "Phone Number",
  },
  input6: {
    title: "City",
  },
  input7: {
    title: "Device",
  },
  input8: {
    title: "Platform",
  },
  input9: {
    title: "Incident Details",
  },
  input10: {
    title: "When",
    subtitle: "Date",
  },
  input11: {
    title: "How it Occured",
  },
  input12: {
    title: "Current Status of the Incident",
  },
  input13: {
    title: "Need the Intervention of Law",
    subtitle: "Yes/No",
  },
};

const inputFieldKeys = Object.keys(inputFields);

const AddComplain = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-screen h-screen p-7 overflow-hidden bg-[url('./image/bg.png')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
      <div className=" w-full h-full p-5 rounded-2xl backdrop-blur-sm bg-blue-600/30 border-2 border-blue-600 flex flex-col items-center">
        {/* top section */}
        <div className=" relative w-full h-fit flex justify-center">
          <button
            onClick={() => navigate("/")}
            className=" absolute -top-2 -left-2 w-7 h-7 backdrop-blur-sm bg-blue-600/30 border-2 border-blue-600 rounded-full flex flex-col items-center justify-center"
          >
            <AiOutlineLeft className=" text-xs text-gray-100" />
          </button>
          {/* title */}
          <div className=" flex flex-col items-center">
            <h2 className=" mb-3 text-gray-100 text-2xl font-semibold">
              Add Your Complain Here
            </h2>
            {/* horizontal row */}
            <div className=" flex items-center">
              <div className=" w-1 h-1 rounded-full bg-slate-100" />
              <div className=" w-[230px] h-[1px] bg-slate-100" />
              <div className=" w-1 h-1 rounded-full bg-slate-100" />
            </div>
          </div>
        </div>
        {/* data input section */}
        <div className=" w-full h-full mt-5 py-5 px-7 bg-white rounded-2xl overflow-x-hidden overflow-y-auto">
          {/* title */}
          <h3 className=" text-base font-semibold text-gray-900">
            Enter Your Complain Details
          </h3>
          {/* horizontal row */}
          <div className=" w-[60%] h-[1px] mt-3 bg-slate-200" />
          {/* input fields */}
          {inputFieldKeys.map((inputKey) => (
            <div key={inputKey} className=" mt-4 w-[60%]">
              <p className=" text-gray-700">
                {inputFields[inputKey].title}{" "}
                {inputFields[inputKey].subtitle && (
                  <span className=" text-gray-400">
                    ({inputFields[inputKey].subtitle})
                  </span>
                )}
              </p>
              <textarea
                rows={2}
                className=" w-full p-3 mt-1 bg-gray-100 resize-none outline-none rounded-lg border border-transparent focus:border-red-600"
              />
            </div>
          ))}
          <button
            onClick={() => navigate("/complain-details")}
            className=" absolute top-4 right-4 w-60 h-14 bg-gradient-to-r from-blue-600 to-blue-800 bg-blue-600/30 border-1 border-blue-600 rounded-lg shadow-lg hover:shadow-xl flex flex-col items-center justify-center text-white"
          >
            View Previous Complaints
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddComplain;
