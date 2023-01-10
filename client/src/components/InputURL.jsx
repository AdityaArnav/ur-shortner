import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputURL = () => {
  const [data, setData] = useState({
    fullUrl: "",
  });

  const notify = (msg) => toast(msg);
  const error = (msg) => toast.error(msg);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/shortUrl", data)
      .then((res) => {
        if (res.status === 200) {
          notify("Url Shrinked");
          setData({
            fullUrl: "",
          });
          window.location.reload();
        }
      })
      .catch((err) => error(err.response.data.message));
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-[40%] m-auto">
        <label htmlFor="fullUrl" className="text-2xl font-bold ">
          Url
          <input
            className="border rounded-md my-2 font-normal w-full border-gray-500 outline-none px-2 py-2 text-[16px]"
            type="text"
            name="fullUrl"
            id="fullUrl"
            value={data.fullUrl}
            placeholder="Enter url"
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <div className="text-center mt-2">
          <button
            type="submit"
            className="px-6 w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xl"
          >
            Shrink
          </button>
        </div>
      </form>
    </>
  );
};

export default InputURL;
