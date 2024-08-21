import React, { useContext } from "react";
import { BsTriangleFill } from "react-icons/bs";
import { SiWindows11 } from "react-icons/si";
import { FaBarsProgress } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import { StateContext } from "../Store/StateProvider";
import { actionType } from "../Store/constants";

const DropDown = () => {
  const [{ domainData, displayDomainData, searchString }, dispatch] =
    useContext(StateContext);
  const switchLayout = (layout) => {
    dispatch({ type: actionType.SET_LAYOUT, payload: layout });
  };
  const handleSort = () => {
    const cpyDomainDataList = displayDomainData?.data;
    cpyDomainDataList.sort((item1, item2) => item1.price - item2.price);
    const cpyDomainData = {
      ...displayDomainData,
      data: cpyDomainDataList,
    };

    dispatch({
      type: actionType.SET_DISPLAYDOMAINDATA,
      payload: cpyDomainData,
    });
  };

  const handleExactMatch = () => {
    const domainList = domainData?.data?.filter(
      (domainItem) =>
        domainItem.domainName.toLowerCase() == searchString.toLowerCase()
    );

    const cpyDomainData = {
      ...domainData,
      data: domainList,
    };

    console.log("exact-match -> ", cpyDomainData);

    dispatch({
      type: actionType.SET_DISPLAYDOMAINDATA,
      payload: cpyDomainData,
    });
  };

  const handleAllMatches = () => {
    dispatch({ type: actionType.SET_DISPLAYDOMAINDATA, payload: domainData });
  };

  return (
    <>
      <div className="">
        <BsTriangleFill className="text-indigo-500" />
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-[-2px] p-2">
          <button
            className="border-2 border-black text-sm font-bold rounded-md p-0.5 cursor-pointer"
            onClick={handleSort}
          >
            sort by price
          </button>
          <div className="flex items-center justify-center gap-0.5 p-2">
            <SiWindows11
              className="cursor-pointer"
              onClick={() => switchLayout("card")}
            />
            <RxDividerVertical />
            <FaBarsProgress
              className="cursor-pointer"
              onClick={() => switchLayout("rows")}
            />
          </div>
          <div className="text-sm font-bold flex flex-col gap-1 text-center">
            <p
              className="border-2 rounded-md border-black cursor-pointer"
              onClick={handleExactMatch}
            >
              Exact Match
            </p>
            <p
              className="border-2 rounded-md border-black cursor-pointer"
              onClick={handleAllMatches}
            >
              All Matches
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
