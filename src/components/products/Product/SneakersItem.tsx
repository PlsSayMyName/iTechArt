/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";
import { FaShoppingCart } from "react-icons/fa";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function SneakersItem(props: { results: any }) {
  function displaySneakers(props: { results: any }) {
    const { results } = props;
    if (results.length > 0) {
      return results.map(
        (
          result: {
            id: Key | null | undefined;
            name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
          },
          index: any
        ) => {
          console.log(result);
          return (
            <div className="item" key={result.id}>
              <a className="img" href="#">
                <img src={result.image.original} alt={result.name} />
              </a>
              <h2>
                <a href="#">{result.name}</a>
              </h2>
              <button className="add-cart" type="button">
                <FaShoppingCart />
                Add to cart
              </button>
            </div>
          );
        }
      );
    }
    return <h3>No sneakers yet</h3>;
  }
  return <>{displaySneakers(props)}</>;
}
