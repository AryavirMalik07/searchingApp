import React, { useState } from "react";
import SearchResult from "./SearchResult";
// import SearchSomething from "./SearchSomething";
import logo from "../images/ai.png";
import bg from "../images/bgvideo.mp4";
// ***************** Sir i have added an button beacause the api i am using have only few calls only so to prevent searching at eact and evert word and to prevent api crash i have added button by using this when user type all about what he want to search then only he/she will get the result
// That's why i have provide two api key if one crashed then you can use second one......
const Search = () => {
  const [data, setData] = useState("");
  const [search, setSearch] = useState(false);
  const inputEvent = (e) => {
    const data = e.target.value;
    // console.log(data);
    setData(data);
  };

  return (
    <div className="w-full">
      {/* <video
        className="absolute bottom-0 right-0 z-[-1] w-[100%]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bg} type="video/mp4" />
      </video> */}
      <div className="md:h-[80vh] h-[60vh]  flex flex-col items-center justify-center gap-8">
        <h1 className="font-semibold text-white md:text-6xl text-4xl md:w-[50%] mx-auto text-center leading-[1.3]">
          {" "}
          Find the{" "}
          <strong className="text-[rgb(229,25,60)] ">Latest News</strong> of
          your city with AI
        </h1>

        <div className="flex items-center ">
          <img className="w-[50px]" src={logo} alt="ai " />
          <h1 className="text-[rgb(229,25,60)] md:text-6xl text-4xl font-semibold">
            AI-Powered <strong className="text-white">search</strong>
          </h1>
        </div>
        <div className="flex items-center gap-[10px]">
          <input
            className="border-2 border-black md:w-[500px] md:px-[20px] md:py-[20px] rounded-2xl text-xl w-[250px] px-[10px] py-[10px]  "
            type="text"
            value={data}
            placeholder="search"
            onChange={inputEvent}
          />
          <button
            className="md:px-[20px] md:py-[20px] md:w-[120px] text-white md:text-xl bg-[rgb(229,25,60)] rounded-2xl w-[80px] text-medium py-[10px] px-[10px]"
            onClick={(e) => setSearch(true)}
          >
            search
          </button>
        </div>
      </div>

      <div>
        {data === "" ? null : (
          <SearchResult name={data} search={search} setSearch={setSearch} />
        )}
      </div>
    </div>
  );
};

export default Search;
