import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const List = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      axios
        .get("http://localhost:8080")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    };

    getData();
  }, []);
  return (
    <>
      <div className="lg:w-2/3 mt-10 w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Sr No.
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Full Url
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                ShortUrl
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Visit Short Url
              </th>
              <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((url, i) => (
              <tr key={url._id}>
                <td className="px-4 py-3">{i + 1}</td>
                <td className="px-4 py-3">{url.fullUrl}</td>
                <td className="px-4 py-3">{url.shortUrl}</td>
                <td className="px-4 py-3 text-lg  text-blue-600 underline">
                  <a href={url.shortUrl} className="cursor-pointer font-bold">
                    Visit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
