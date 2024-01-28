import { useNavigate } from "react-router-dom";
import { AiOutlineLeft, AiOutlineStar } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import { RxListBullet } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { GrTextAlignLeft } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { complainTableData } from "../db/data";
import { CircularProgress, Rating } from "@mui/material";

const Complain = () => {
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
              Complains
            </h2>
            {/* horizontal row */}
            <div className=" flex items-center">
              <div className=" w-1 h-1 rounded-full bg-slate-100" />
              <div className=" w-[230px] h-[1px] bg-slate-100" />
              <div className=" w-1 h-1 rounded-full bg-slate-100" />
            </div>
          </div>
        </div>
        {/* complain data section */}
        <div className=" w-full h-full mt-5 bg-white rounded-2xl overflow-auto">
          {/* table */}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left" className=" border-r border-r-gray-300">
                  <div className=" flex items-center">
                    <MdDateRange className="text-lg mr-1 text-black" />
                    <span>Date</span>
                  </div>
                </TableCell>
                <TableCell align="left" className=" border-r border-r-gray-300">
                  <div className=" flex items-center">
                    <GrTextAlignLeft className="text-lg mr-1 text-black" />
                    <span>Title</span>
                  </div>
                </TableCell>
                <TableCell align="left" className=" border-r border-r-gray-300">
                  <div className=" flex items-center">
                    <FiUser className="text-lg mr-1 text-black" />
                    <span>Author</span>
                  </div>
                </TableCell>
                <TableCell align="left" className=" border-r border-r-gray-300">
                  <div className=" flex items-center">
                    <RxListBullet className="text-lg mr-1 text-black" />
                    <span>Genire</span>
                  </div>
                </TableCell>
                <TableCell
                  align="center"
                  className=" border-r border-r-gray-300"
                >
                  <div className=" flex items-center justify-center">
                    <BiLoaderCircle className="text-lg mr-1 text-black" />
                    <span>Progress</span>
                  </div>
                </TableCell>
                <TableCell
                  align="center"
                  className=" border-r border-r-gray-300"
                >
                  <div className=" flex items-center justify-center">
                    <AiOutlineStar className="text-lg mr-1 text-black" />
                    <span>Rating</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {complainTableData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    align="left"
                    className=" border-r border-r-gray-300"
                  >
                    {row.date}
                  </TableCell>
                  <TableCell
                    align="left"
                    className=" border-r border-r-gray-300"
                  >
                    {row.title}
                  </TableCell>
                  <TableCell
                    align="left"
                    className=" border-r border-r-gray-300"
                  >
                    {row.author}
                  </TableCell>
                  <TableCell
                    align="left"
                    className=" border-r border-r-gray-300"
                  >
                    <div className=" flex items-center gap-2">
                      {row.genire.map((g, index) => (
                        <div
                          key={index}
                          className=" w-fit py-1 px-2 rounded-[4px] text-xs bg-green-200"
                        >
                          {g}
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell
                    align="center"
                    className=" border-r border-r-gray-300"
                  >
                    <div className=" flex items-center justify-center gap-1">
                      <p>{row.progress}</p>
                      <CircularProgress
                        size={17}
                        thickness={7}
                        sx={{ color: "#0bfc03" }}
                        variant="determinate"
                        value={row.progress}
                      />
                    </div>
                  </TableCell>
                  <TableCell
                    align="center"
                    className=" border-r border-r-gray-300"
                  >
                    <div className=" w-full flex items-center justify-center">
                      <span className=" w-fit h-7 px-2 flex items-center rounded-md bg-yellow-300/30">
                        <Rating
                          value={row.rating}
                          precision={0.1}
                          readOnly
                          size="small"
                        />
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Complain;
