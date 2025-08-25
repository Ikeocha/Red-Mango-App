import React, {useState} from 'react';
import { useDispatch, UseDispatch } from 'react-redux';
import './banner.css';

function Banner() {

  const [value, setvalue] = useState("");
  const dispatch = useDispatch();
  
  return (
   <div className="custom-banner">
      <div
        className="m-auto d-flex align-items-center"
        style={{
          width: "400px",
          height: "50vh",
        }}
      >
        <div className="d-flex align-items-center" style={{ width: "100%" }}>
          <input
            type={"text"}
            className="form-control rounded-pill"
            style={{
              width: "100%",
              padding: "20px 20px",
            }}
            placeholder="Search for Food Items!"
          />
          <span style={{ position: "relative", left: "-43px" }}>
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Banner