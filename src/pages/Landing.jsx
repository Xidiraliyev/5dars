import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CarouselItem1 from "../assets/hero1.webp";
import CarouselItem2 from "../assets/hero2.webp";
import CarouselItem3 from "../assets/hero3.webp";
import CarouselItem4 from "../assets/hero4.webp";
import { useState,  useEffect } from "react";

function Landing() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://strapi-store-server.onrender.com/api/products?featured=true"
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="align-element py-20 container px-28">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h1 className="max-w-2xl text-4xl font-bold tracking-light sm:text-6xl">
              We are changing the way people shop
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <div className="mt-10">
              <Link className="btn btn-primary" to="/products">
                Our Products
              </Link>
            </div>
          </div>
          <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
              <img
                src={CarouselItem1}
                alt=""
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
            <div className="carousel-item">
              <img
                src={CarouselItem2}
                alt=""
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
            <div className="carousel-item">
              <img
                src={CarouselItem3}
                alt=""
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
            <div className="carousel-item">
              <img
                src={CarouselItem4}
                alt=""
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="pt-24">
          <div className="border-b border-base-300 pb-5">
            <h2 className="text-3xl font-medium tracking-wider capitalize">
              featured products
            </h2>
          </div>
          <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.map((data) => {
              return (
                <Link className="card w-full shadow-xl hover:shadow-2xl transition duration-300" to={`/products/${data.id}`}>
                  <figure className="px-4 pt-4">
                      <img src={data.attributes.image} alt="" className="rounded-xl h-64 md:h-48 w-full object-cover"/>
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title capitalize tracking-wider">
                      {data.attributes.title}
                    </h2>
                    <span className="text-[#463aa1]">${data.attributes.price.slice(0, (data.attributes.price.length-2))}.{data.attributes.price.slice(data.attributes.price.length-2)}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
