import React from "react";
import Image from "next/image";
import MailIcon from "@/public/MailIcon.svg";
import MicIcon from "@/public/MicIcon.svg";
import CommandIcon from "@/public/CommandIcon.svg";

type Props = {};

const CoffeeCard = (props: Props) => {
  return (
    <div className="flex flex-col rounded-xl lg:w-[50%] bg-[#F2F2F3] border overflow-clip">
      {/* header */}
      <div className="flex items-center justify-between h-[50px] ">
        <div className="flex justify-start gap-4 items-center w-full ml-8">
          <Image
            src={MailIcon}
            width={30}
            height={30}
            className="rounded-t-xl"
            alt="mailIcon"
          />
          <p className="font-bold">Coffee?</p>
          <p className="text-[#9F9FA0]">Mail from Marisa Lu</p>
        </div>
        <div className="mr-10">
          <Image
            src={MicIcon}
            width={30}
            height={30}
            className="rounded-t-xl"
            alt="micIcon"
          />
        </div>
      </div>
        {/* body */}
        <div className="w-full bg-white">
            <div className="flex justify-between px-12 mt-10">
                    <div className="flex flex-col">
                            <p className="text-3xl">Marisa Lu</p>
                            <p className="text-3xl font-bold mt-2">Coffee?</p>
                    </div>
                    <p className="text-[#9F9FA0]">Just Now</p>
            </div>

            <div className="px-12 mt-10 font-medium">
                    <p>Hey Jason,</p>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente numquam perspiciatis asperiores quo beatae quisquam saepe animi repellat consequuntur ex ducimus voluptatibus obcaecati, deserunt omnis eveniet. Cum quisquam rem ut. Distinctio maxime iusto nobis a facere magnam illo. Expedita provident in tempore non voluptatem odit numquam amet mollitia accusamus aperiam.</p>
                    <p className="mt-4">Marisa</p>
            </div>
            <hr className="mx-12 mt-10"/>
            {/* Button Group */}
            <div className="flex flex-wrap md:justify-start justify-center  gap-6 mx-12 mt-4">
                <button className="bg-[#EFEFEF] rounded-2xl py-3 px-5 text-[#767676] font-bold"> 
                    Reply
                </button>
                <button className="bg-[#EFEFEF] rounded-2xl py-3 px-5 text-[#767676] font-bold"> 
                    Forward
                </button>
                <button className="bg-[#EFEFEF] rounded-2xl py-3 px-5 text-[#767676] font-bold"> 
                    Delete
                </button>
            </div>
            {/* more actions */}
            <div className="flex justify-start mx-12 mt-10 mb-10">
                <div className="flex gap-3 items-center">
                <Image src={CommandIcon} width={15} height={15} className="rounded-t-xl" alt="micIcon"/>
                <p className="text-[#9F9FA0] text-sm font-bold">More actions</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CoffeeCard;
