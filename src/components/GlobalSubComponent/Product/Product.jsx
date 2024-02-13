import React from "react";
import p1 from "./assets/villa.jpg";

const content = [
  {
    villa: "Luxury Villa",
    price: "70 Lakh",
    Adress: "54 New Street Miami, OR 97212",
    bedroom: "8",
    bathroom: "2",
    area: "545m2",
    floor: "3",
    parking: "6 spots",
  },
  {
    villa: "Apartment",
    price: "70 Lakh",
    Adress: "54 Mid Street Florida, OR 27001",
    bedroom: "8",
    bathroom: "2",
    area: "545m2",
    floor: "3",
    parking: "6 spots",
  },
  {
    villa: "Penthouse",
    price: "70 Lakh",
    Adress: "22 New Street Portland, OR 16540",
    bedroom: "8",
    bathroom: "2",
    area: "545m2",
    floor: "3",
    parking: "6 spots",
  },
  {
    villa: "Modern Corendo",
    price: "70 Lakh",
    Adress: "12 New Street Miami, OR 12650",
    bedroom: "8",
    bathroom: "2",
    area: "545m2",
    floor: "3",
    parking: "6 spots",
  },
  {
    villa: "Luxury Villa",
    price: "70 Lakh",
    Adress: "34 Beach Street Miami, OR 42680",
    bedroom: "8",
    bathroom: "2",
    area: "545m2",
    floor: "3",
    parking: "6 spots",
  },
  {
    villa: "Apartment",
    price: "70 Lakh",
    Adress: "18 New Street Miami, OR 97219",
    bedroom: "8",
    bathroom: "2",
    area: "545m2",
    floor: "3",
    parking: "6 spots",
  },
];

const Product = () => {
  return (
    <>
      <div className="p-[2rem] xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 gap-6 flex flex-col">
        {content.map((e) => (
          <div className="flex flex-col justify-between items-center h-auto w-auto p-[1rem] rounded-xl  bg-gray-100">
            <div className="rounded-xl p-[1rem]">
              <img alt="productImage" className="h-[15rem] w-[22rem] rounded-xl" src={p1} />
            </div>
            <div className="flex flex-row  justify-evenly items-center gap-4">
              <div className="bg-pink-200 py-[0.5rem] rounded-xl p-[1rem] px-[2rem]">
                <h1 className="text-red-500 font-bold text-1xl font-serif">{e.villa}</h1>
              </div>
              <div className="py-[1rem] px-[2rem]">
                <h1 className="text-red-500 font-bold text-1xl font-serif">{e.price}</h1>
              </div>
            </div>
            <div className="px-[1rem]">
              <h2 className="md:text-[1.2rem] text-1xl font-serif font-semibold text-black text-center">{e.Adress}</h2>
            </div>
            <div className="grid grid-cols-2  py-[1rem] border-b-2 border-gray-500 ">
              <div className="sm:px-[1rem] px-[1rem]">
                <h3 className=" font-normal md:text-[1.2rem] text-1xl">
                  Bedrooms: <span className="text-black md:text-[1.2rem] font-bold">{e.bedroom}</span>
                </h3>
              </div>
              <div className="sm:px-[2rem] px-[1rem]">
                <h3 className="font-normal md:text-[1.2rem] text-1xl">
                  Bathroom: <span className="text-black md:text-[1.2rem] font-bold">{e.bathroom}</span>
                </h3>
              </div>
              <div className="sm:px-[1rem] px-[1rem]">
                <h3 className="font-normal md:text-[1.2rem] text-1xl">
                  Area: <span className="text-black md:text-[1.2rem] font-bold">{e.area}</span>
                </h3>
              </div>
              <div className="sm:px-[2.5rem] px-[1rem]">
                <h3 className=" font-normal md:text-[1.2rem] text-1xl">
                  Floor: <span className="text-black md:text-[1.2rem] font-bold">{e.floor}</span>
                </h3>
              </div>
              <div className="sm:px-[1rem] px-[1rem]">
                <h3 className=" font-normal md:text-[1.2rem] text-1xl">
                  Parking: <span className="text-black md:text-[1.2rem] font-bold">{e.parking}</span>
                </h3>
              </div>
            </div>

            {/* submit */}
            <div className="p-[2rem]">
              <div className="py-[1rem] px-[3rem] font-semibold bg-black text-white rounded-full">
                <button>Schedule a Visit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
