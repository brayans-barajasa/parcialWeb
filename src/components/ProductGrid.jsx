import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import "../styles/ProductoGrid.css"


const ProductGrid = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const handleProductos = async () => {
    await axios
      .get("http://89.116.25.43:3500/api/productos/listar", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        console.log(resp);
        setData(resp.data.result);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else if (err.response.status == 401) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrio un error!", "error");
        }
      });
  };

  useEffect(() => {
    handleProductos();
  }, []);

  return (
    <div className="grid-container">
      {data.map((producto) => (
        <div className="producto" key={producto._id}>
          <div className="producImg">
            <img src={producto.imagen} alt={producto.descripcion} />
          </div>
          <div>{`${producto.descripcion}`}</div>
          <div>{`$${producto.valor}`}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
