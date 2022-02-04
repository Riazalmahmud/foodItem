import React from "react";
import health from "../../image/service/health-bottle-cut.jpg";
import "./Home.css";
import { GiBurningTree } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import { GoPackage } from "react-icons/go";
import { BsCupStraw } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      {/* Healthy and tasty foods */}
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 healthy-style">
            <h1 className="healthy-title">
              Healthy and tasty foods with <span>natural ingredients</span>
            </h1>
            <p>
              Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam
              malesuada eros nec luctus laoreet. Fusce sodales consequat velit
              eget dictum. Integer ornare magna vitae ex eleifend congue. Morbi
              sit amet nisi iaculis, fringilla orci nec.
            </p>

            <button type="button" class="btn btn-danger my-2 ">
              Read more
            </button>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img
              className="img-fluid "
              src={health}
              alt="healthlty food image"
            />
          </div>
        </div>
      </div>

      {/* Only  food service */}

      <div className="container-fluid my-5 py-5 service-section">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-6 service-style">
            <h2>
              <GiBurningTree
                size={50}
                color={"#fff"}
                backgroundColor={"#83c52f"}
                borderRadiu={"100%"}
                s
              />
            </h2>
            <h5 className="service-title">Only natural food</h5>
            <p>Nam malesuada eros nec luctus laoreet fusce sodales consequat</p>
          </div>
          <div className="col-lg-3 col-md-3 col-6 service-style">
            <h2>
              <BiDish
                size={50}
                color={"#fff"}
                backgroundColor={"#83c52f"}
                borderRadiu={"100%"}
                s
              />
            </h2>
            <h5 className="service-title">Only natural food</h5>
            <p>Nam malesuada eros nec luctus laoreet fusce sodales consequat</p>
          </div>
          <div className="col-lg-3 col-md-3 col-6 service-style">
            <h2>
              <GoPackage
                size={50}
                color={"#fff"}
                backgroundColor={"#83c52f"}
                borderRadiu={"100%"}
                s
              />
            </h2>
            <h5 className="service-title">Only natural food</h5>
            <p>Nam malesuada eros nec luctus laoreet fusce sodales consequat</p>
          </div>
          <div className="col-lg-3 col-md-3 col-6 service-style">
            <h2>
              <BsCupStraw
                size={50}
                color={"#fff"}
                backgroundColor={"#83c52f"}
                borderRadiu={"100%"}
                s
              />
            </h2>
            <h5 className="service-title">Only natural food</h5>
            <p>Nam malesuada eros nec luctus laoreet fusce sodales consequat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
