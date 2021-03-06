import React from "react";
import { Link } from "react-router-dom";

const PaymentCart = ({ img, title, index, offerPrice, _id, payment }) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>
          <img
            style={{ maxHeight: "50px", maxWidth: "30%" }}
            src={img}
            alt=""
          />{" "}
        </td>
        <td>{title}</td>
        <td>{offerPrice}</td>
        <td
          className={
            payment === "Paid" ? "text-success fw-bold" : "text-warning fw-bold"
          }
        >
          {payment}
        </td>
        {payment === "Paid" ? (
          <td>
            {" "}
            <img
              style={{ width: "20px" }}
              src="https://i.ibb.co/Dpxs09b/tick.gif"
              alt="tick"
            />{" "}
          </td>
        ) : (
          <td>
            {" "}
            <Link to={`/dashboard/pay/${_id}`}>
              <button className=" btn btn-success btn-md ">pay</button>
            </Link>
          </td>
        )}
      </tr>
    </tbody>
  );
};

export default PaymentCart;
