const items = [
  { number: 34, title: "Building Finished Now1", top: "15rem" },
  { number: 34, title: "Building Finished Now2", top: "15rem" },
  { number: 34, title: "Building Finished Now3", top: "15rem" },
];
const CardDetails = () => {
  return (
    <div className="h-[35rem] md:h-[25rem] flex flex-col md:flex-row gap-[2rem] md:gap-[6rem] xl:gap-[8rem] items-center md:items-start md:justify-center bg-white">
      {items.map((item, index) => (
        <div
          key={index}
          className="h-[5.5rem] w-[13rem] lg:h-[7rem] lg:w-[17rem] bg-orange-100 rounded-lg relative"
          style={{ top: item.top }}
        >
          <div className="flex flex-row justify-center items-center space-x-1">
            <div className="text-red-500 font-bold font-serif lg:text-1xl pt-9 md:text-lg p-1 flex items-center">
              <h1 className="text-center">{item.number}</h1>
            </div>
            <div className="text-black font-serif font-bold lg:text-[1.1rem] pt-10 md:text-2xl p-1 flex items-center">
              <h3 className="text-center">{item.title}</h3>
            </div>
          </div>

          <div className="absolute h-[2rem] w-[2rem] bg-red-500 rounded-full right-[-1rem] top-[-1rem]"></div>
        </div>
      ))}
    </div>
  );
};

export default CardDetails;
