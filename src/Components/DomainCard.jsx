import React, { useContext } from "react";
import { StateContext } from "../Store/StateProvider";

const DomainCard = ({ domainItem }) => {
  const [{ layout }, dispatch] = useContext(StateContext);
  const { domainName, price, domainSuffix, websiteName, updated_at } =
    domainItem;
  // console.log(domainItem);
  return (
    <>
      {layout == "card" ? (
        <div className="lg:ml-[7vw] w-[120px] sm:w-[200px] flex flex-col bg-gray-900 p-3 text-white gap-2 shadow-sm shadow-black hover:scale-110 group transition-all duration-300">
          <p className="text-sm font-bold w-[125px] sm:w-[200px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black text-center ml-[-30px]">
            {domainName}.{domainSuffix?.suffix}
          </p>
          <p className="font-bold">${price}</p>
          <p></p>
          <p className="bg-blue-600 px-1 py-0.3 rounded-md text-center group-hover:bg-green-600 group-hover:font-bold">
            {websiteName?.name}
          </p>
          <p className="flex flex-col py-2">
            <span className="text-sm">updated_at</span>
            <span>{updated_at.slice(0, 10)}</span>
          </p>
        </div>
      ) : (
        <div className="h-[13vh] w-[80vw] ml-[20vh] flex justify-around items-center bg-gray-800 p-3 rounded-md text-white gap-2 shadow-lg shadow-black hover:scale-110 group transition-all duration-300">
          <p className="text-sm w-[20vh]">
            {domainName}.{domainSuffix?.suffix}
          </p>
          <p className="font-bold w-[20vh]">${price}</p>
          <p></p>
          <p className="w-[20vh] bg-blue-600 px-1 py-0.3 rounded-md text-center group-hover:bg-green-600 group-hover:font-bold">
            {websiteName?.name}
          </p>
          <p className="flex flex-col">
            <span className="text-sm">updated_at</span>
            <span>{updated_at.slice(0, 10)}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default DomainCard;
