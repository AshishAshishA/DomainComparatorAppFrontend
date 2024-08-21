import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { StateContext } from "../Store/StateProvider";
import { actionType } from "../Store/constants";
import axios from "axios";

const Header = () => {
  const [search, setSearch] = useState("");
  const [{ searchString, domainSuffix }, dispatch] = useContext(StateContext);
  const handleSearch = async () => {
    dispatch({ type: actionType.SET_SEARCH, payload: search });
  };

  const fetchDomainData = async () => {
    try {
      await axios.post(
        `https://domaincomparatorappbackend0.onrender.com/domains/searched/`,
        {
          searchedName: searchString,
          searchFreq: 0,
          stayIndex: 2,
        }
      );

      const response_for_suffix = await axios.get(
        `https://domaincomparatorappbackend0.onrender.com/domains/suffix/?domainName=${searchString}`
      );

      // console.log(response_for_suffix);
      const suffixListFromResponse = response_for_suffix?.data.map(
        (item) => item.suffix
      );

      dispatch({
        type: actionType.SET_SUFFIXLIST,
        payload: suffixListFromResponse,
      });
      dispatch({
        type: actionType.SET_SUFFIX,
        payload: suffixListFromResponse[0],
      });

      const response = await axios.get(
        `https://domaincomparatorappbackend0.onrender.com/details/?suffix=${domainSuffix}&domainName=${searchString}`
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
  }, [searchString]);
  return (
    <>
      <div className="w-full h-[8vh] flex justify-between items-center p-2 bg-[#066bc6] z-10 fixed">
        <img src={logo} alt="logo" className="h-[50px]" />

        <div className="w-[80%] px-4 mr-3 h-[6vh] flex items-center">
          <input
            type="text"
            placeholder="domain name without suffix(.com, .in, .org)"
            className="w-[95%] h-[5vh] py-1 rounded-l-md px-1 border-none outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="bg-green-500 py-1 h-[5vh] px-1.5 rounded-r-md text-gray-200 flex items-center cursor-pointer">
            <IoSearch className="scale-125" onClick={() => handleSearch()} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
