import React from "react";
import health from "../../image/service/health-bottle-cut.jpg";
import pop_smoothie_04 from "../../image/product/pop_smoothie_04-720x1030.jpg";
import avocado from "../../image/product/avocado.png";
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
      {/* container section end */}

      {/* Popular Smoothies start  */}
      <div className="container my-5 py-5 popular-title">
        <h1 className="healthy-title py-3 ">Popular Smoothies</h1>
        <div className="row">
          <div
            className="col-lg-3 col-md-3 col-6 service-style popular-product"
            id="popular-product-rgba"
          >
            <div className="bg-rgba"></div>
            <div className="product-info">
              <h5 className="service-title fs-5">Pineapple Splash</h5>
              <p>Pineapple, mango & min</p>
              <button type="button" className="btn btn-danger fw-bold ">
                Add to cart
              </button>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-3 col-6 service-style popular-product02"
            id="popular-product-rgba"
          >
            <div className="bg-rgba"></div>
            <div className="product-info">
              <h5 className="service-title fs-5">Watermelon Cooler</h5>
              <p>Watermelon, lime and apple</p>
              <button type="button" className="btn btn-danger fw-bold ">
                Add to cart
              </button>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-3 col-6 service-style popular-product03"
            id="popular-product-rgba"
          >
            <div className="bg-rgba"></div>
            <div className="product-info">
              <h5 className="service-title fs-5">Violet Banana</h5>
              <p>Blackberry, banana & kiwi</p>
              <button type="button" className="btn btn-danger fw-bold ">
                Add to cart
              </button>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-3 col-6 service-style popular-product04"
            id="popular-product-rgba"
          >
            <div className="bg-rgba"></div>
            <div className="product-info">
              <h5 className="service-title fs-5">Pineapple Splash</h5>
              <p>Pineapple, mango & min</p>
              <button type="button" className="btn btn-danger fw-bold ">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* container section end */}
      <div className="container-fluid organic-food-style">
        <div className="organic-food">
          <img className="img-fluid organic-food" src={avocado} alt="" />
        </div>
      </div>
      {/* container organic section start */}
      <div class="container my-5 py-5">
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div class="col-lg-3 col-md-3 col-6">
            <div class="p-3 border bg-light">
              Row col-lg-3 col-md-3 col-6umn
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-6">
            <div class="p-3 border bg-light">
              Row col-lg-3 col-md-3 col-6umn
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-6">
            <div class="p-3 border bg-light">
              Row col-lg-3 col-md-3 col-6umn
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-6">
            <div class="p-3 border bg-light">Row column</div>
          </div>
        </div>
      </div>
      {/* container section end */}
    </div>
  );
};

export default Home;
