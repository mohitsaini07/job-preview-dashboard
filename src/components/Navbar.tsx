import { ChevronDown } from "lucide-react";
export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between py-6 px-10">
        <div
          className="text-primary font-bold bg-gray-200 py-4 px-6 text-xl"
          style={{
            fontFamily: "Satoshi-Bold",
          }}
        >
          Logo
        </div>
        <div className="border rounded-[36px] border-gray-100 py-2 pl-2 pr-6 flex items-center gap-16">
          <div className="bg-primary border-2 border-muted-orange flex items-center gap-2 p-4 rounded-[49px]">
            <img
              src="./briefcase.png"
              className="w-5 h-[18px]"
              alt="briefcase"
            />
            <div className="font-medium">Jobs</div>
          </div>
          <div className="flex items-center text-gray-50 font-medium gap-2">
            <div className="relative">
              <img src="./message.png" className="w-5 h-5" alt="message" />
              <div className="absolute -top-[2px] -right-1 w-[6px] h-[6px] bg-orange-600 rounded-full"></div>
            </div>
            <div>Messages</div>
          </div>
          <div className="flex items-center text-gray-50 font-medium gap-2">
            <img src="./coins-hand.png" className="w-5 h-5" alt="coins-hand" />
            <div>Payments</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src="./bell-icon.png" className="w-6 h-[25.33px]" alt="user" />
            <div className="absolute -top-[2px] right-1 w-[5.5px] h-[6px] bg-orange-600 rounded-full"></div>
          </div>
          <div className="flex gap-[6px] items-center">
            <img src="./profile.png" className="w-10 h-10" alt="profile" />
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}
