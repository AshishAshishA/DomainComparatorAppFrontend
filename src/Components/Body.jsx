import React, { act, useContext, useEffect, useState } from "react";
import { StateContext } from "../Store/StateProvider";
import { actionType } from "../Store/constants";
import bgImage from "./../assets/dnsresolver.png";
import axios from "axios";
import DomainCard from "./DomainCard";

import { IoIosArrowDropdownCircle } from "react-icons/io";
import DropDown from "./DropDown";

const Body = () => {
  const [
    { suffixList, domainSuffix, displayDomainData, searchString, layout },
    dispatch,
  ] = useContext(StateContext);

  const [dropDown, setDropDown] = useState(false);

  const handleClick = async (suffix) => {
    dispatch({ type: actionType.SET_SUFFIX, payload: suffix });
  };

  const fetchDomainData = async () => {
    try {
      const response = await axios.get(
        `https://domaincomparatorappbackend0.onrender.com/domains/details/?suffix=${domainSuffix}&domainName=${searchString}`
      );
      // console.log(response);
      dispatch({ type: actionType.SET_DOMAINDATA, payload: response });
      dispatch({ type: actionType.SET_DISPLAYDOMAINDATA, payload: response });
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchDomainData();
  }, [domainSuffix]);

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center scrollbar-thin">
        <div
          className={`w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% z-1 ${
            searchString ? "mt-[45px]" : " mt-[-80px] "
          } transition-all duration-300`}
        >
          <div className="left-3 fixed rounded-full bg-yellow-300 w-[25px] h-[25px] flex-1 items-center justify-center text-black cursor-pointer">
            <IoIosArrowDropdownCircle
              onClick={() => setDropDown((prev) => !prev)}
              className="ml-[5px] mt-[5px]"
            />
            <div className="left-4 fixed">{dropDown && <DropDown />}</div>
          </div>

          <div>
            {suffixList.map((suffix, index) => (
              <button
                key={index}
                onClick={() => handleClick(suffix)}
                className={` px-1 py-0.5 m-1 rounded-md min-w-[52px] max-w-[65px] text-center overflow-hidden ${
                  domainSuffix == suffix
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200"
                }`}
              >
                .{suffix}
              </button>
            ))}
          </div>
        </div>

        {/* {displayDomainData} */}
        {searchString.trim() != "" ? (
          <div>
            {displayDomainData == null ||
            displayDomainData?.data.length == 0 ? (
              <p className={`h-[50vh] w-[70vh] mt-[30vh] font-bold`}>
                {`
            Currently this domainName is unAvailable in our database but It
          might be available by today Evening or tomorrow Evening, We are
          working hard to fullfil your request, You can search another
          DOMAIN NAME or change suffix(.com .in etc), Thankyou for using
          our service....
            `}
              </p>
            ) : (
              <div
                className={`${
                  layout == "card" ? "flex flex-wrap " : "w-full flex flex-col"
                } m-5 mt-10 gap-5`}
              >
                {displayDomainData?.data?.map((domainItem, index) => (
                  <DomainCard key={index} domainItem={domainItem} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <img
            src={bgImage}
            alt=""
            className={`h-[50vh] w-[70vh] ${
              searchString.trim() == "" ? "mt-[30vh]" : "mt-[20vh]"
            }`}
          />
        )}
      </div>
    </>
  );
};

export default Body;
