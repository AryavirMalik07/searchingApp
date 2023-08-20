import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/loading.css";

// 10f80fe4a9e94c19b3027fbaa03dc90c
// 4af101e429a64033981d6ff9410cb6b2
const SearchResult = (props) => {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (props.search) {
      axios({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${props.name}&from=2023-07-20&sortBy=published&apiKey=10f80fe4a9e94c19b3027fbaa03dc90c`,
      }).then((res) => {
        setMyData(res.data.articles);
        setLoading(false);
        props.setSearch(false);
      });
    }
  }, [props.search]);

  return (
    <div className="md:p-[10px] p-[50px] mt-[100px]  flex flex-col items-center justify-center ">
      {loading && (
        <div className="flex flex-col items-center justify-center gap-[20px]">
          <p className="text-white text-2xl font-semibold ">
            It's loading........
          </p>
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      <div className=" grid md:grid-cols-3  grid-cols-1 md:items-start items-center m-auto  gap-[20px] ">
        {!loading && (
          <>
            {myData.map((item) => {
              const { id, title, urlToImage, description, url, author } = item;

              return (
                <div
                  className="flex flex-col text-black bg-white md:w-[400px] md:p-[20px] w-[350px] p-[10px] gap-[5px] rounded-3xl "
                  key={id}
                >
                  {urlToImage ? (
                    <img
                      className="w-80% rounded-3xl"
                      src={urlToImage}
                      alt={urlToImage}
                    />
                  ) : (
                    <h1 className="font-2xl font-bold mb-[20px] w-80% text-center">
                      !!!!! Image not found !!!!!{" "}
                    </h1>
                  )}
                  <h1 className="w-[100%] font-bold  text-xl ">{title}</h1>
                  <p className="font-sm">
                    {description} <br></br>
                    <a className=" text-sky-500 font-semibold  " href={url}>
                      Read more...
                    </a>{" "}
                  </p>
                  <div className="flex item-center gap-[5px]">
                    <h2 className="font-bold">Author:</h2>
                    {author ? <h4>{author}</h4> : <h4>Not available</h4>}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
