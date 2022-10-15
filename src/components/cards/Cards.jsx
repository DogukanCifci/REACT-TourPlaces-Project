import React from "react";
import "./Cards.css";

const Cards = ({ dataa }) => {
  console.log(dataa);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {dataa.map((element) => {
            const { id, title, image, desc } = element;
            return (
              <div className="col g-3" sm={12} md={6} lg={4} key={id}>
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">{title.toUpperCase()} </div>
                  </div>

                  <div data-tooltip={desc} className="images mx-auto ">
                    <img
                      src={image}
                      alt=""
                      className="card-img-bottom mx-auto"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Cards;
