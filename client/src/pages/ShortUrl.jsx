import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ShortUrl = () => {
  const { id } = useParams();
  useEffect(() => {
    const getUrl = () => {
      axios
        .get(`http://localhost:8080/${id}`)
        .then((res) => {
          window.location.replace(res.data);
        })
        .catch((err) => console.log(err));
    };

    getUrl();
  }, []);
  return (
    <>
      <h1 className="text-center text-xl mt-6">
        Redirecting to the original site
      </h1>
    </>
  );
};

export default ShortUrl;
