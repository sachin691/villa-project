import { Image } from "@nextui-org/react";

const Help = () => {
  return (
    <div className="bg-[white] flex">
      <div className="flex justify-center items-center grow">
        <div className="max-w-[50rem]">
          <h1 className="font-['Kalnia'] font-bold text-[3rem] text-[#191f22] leading-[3.7rem]">You deserve more.</h1>
          <h1 className="font-['Kalnia'] font-bold text-[3rem] text-[#191f22] leading-[3.7rem]">We can help.</h1>
          <p>
            The product or service that is being offered to help people could be anything that can improve their lives.
            This could include things like personal development programs, therapy, or financial assistance.
          </p>
        </div>
      </div>
      <Image
        isBlurred
        src="https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Help"
        width={500}
        radius="none"
        className="border border-[1rem]"
      />
    </div>
  );
};

export default Help;
