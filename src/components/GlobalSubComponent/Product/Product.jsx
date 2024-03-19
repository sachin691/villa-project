// import p1 from "./assets/villa.jpg";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

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

const images = [
  "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpbGxhfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1593714604578-d9e41b00c6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpbGxhfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGx1eHVyeSUyMHZpbGxhfGVufDB8fDB8fHww",
];

const Product = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {content.map((e, index) => (
          <Card shadow="sm" key={index} className="w-full">
            <CardBody className="flex flex-col gap-5 overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={e.villa}
                className="w-full object-cover md:h-72 lg:h-80"
                src={images[index % images.length]} // Use modulus operator to cycle through images
              />
              <div className="flex flex-row justify-evenly items-center gap-4">
                <div className="bg-pink-200 py-2 px-4 rounded-xl">
                  <h1 className="text-red-500 font-bold text-lg font-serif">{e.villa}</h1>
                </div>
                <div className="py-2 px-4">
                  <h1 className="text-red-500 font-bold text-lg font-serif">{e.price}</h1>
                </div>
              </div>
              <h2 className="px-4 text-lg font-semibold text-black text-center">{e.Adress}</h2>
              <div className="grid grid-cols-2 gap-1 py-4 px-4 border-b-2 border-gray-500 ">
                <h3 className="font-normal text-lg">
                  Bedrooms: <span className="text-black font-bold">{e.bedroom}</span>
                </h3>
                <h3 className="font-normal text-lg">
                  Bathroom: <span className="text-black font-bold">{e.bathroom}</span>
                </h3>
                <h3 className="font-normal text-lg">
                  Area: <span className="text-black font-bold">{e.area}</span>
                </h3>
                <h3 className="font-normal text-lg">
                  Floor: <span className="text-black font-bold">{e.floor}</span>
                </h3>
                <h3 className="font-normal text-lg">
                  Parking: <span className="text-black font-bold">{e.parking}</span>
                </h3>
              </div>
            </CardBody>
            <CardFooter className="text-small justify-center p-6">
              <Button className="" size="lg" variant="bordered" color="danger">
                Schedule Visit
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Product;
