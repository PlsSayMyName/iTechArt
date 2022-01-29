/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from "react";
import axios from "axios";
import SneakersItem from "./SneakersItem";
import "./Products.scss";

const options: object = {
  method: "GET",
  url: "https://the-sneaker-database.p.rapidapi.com/sneakers",
  params: { limit: "20" },
  headers: {
    "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
    "x-rapidapi-key": "84e427c595mshd5e0d6a0d22a7ebp12709ejsnaae2595f7f18",
  },
};
function Product() {
  const [sneakers, setSneakers] = useState([]);
  const getSneakers = () => {
    axios
      .request(options)
      .then((response) => {
        const allSneakers = response.data.results;
        // console.log(allSneakers);
        setSneakers(allSneakers);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getSneakers();
  }, []);

  return (
    <div className="products-grid">
      <SneakersItem results={sneakers} />
    </div>
  );
}

export default Product;
