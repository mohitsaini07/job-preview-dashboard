import { Eye, MessageSquare, Users } from "lucide-react";

export default function SideBar() {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-4 font-medium px-6">
        <div className="flex items-center gap-2 bg-[#FEF4F2] py-3 px-8 rounded-lg border-[0.8px] border-orange-600 cursor-pointer">
          <img src="./delete-icon.png" className="size-4" alt="delete" />
          <p className="text-orange-600">Delete job</p>
        </div>
        <div className="flex items-center gap-2 bg-orange-600 py-3 px-8 rounded-lg cursor-pointer border-2 border-light-orange">
          <img src="./edit-icon.png" className="size-4" alt="edit" />
          <p>Edit job</p>
        </div>
      </div>
      <div className="mt-6 font-medium text-[#4F4F4F] px-9">
        <div className="flex items-center justify-between border-b border-custom-gray py-4">
          <div className="flex items-center gap-2.5">
            <Users className="size-5" />
            <div className="font-medium"> Applicants</div>
          </div>
          <div
            className="text-black"
            style={{
              fontFamily: "GeneralSans-Semibold",
            }}
          >
            400
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-custom-gray py-4">
          <div className="flex items-center gap-2.5">
            <img className="size-5" src="./matches.png" alt="matches" />
            <div className="font-medium"> Matches</div>
          </div>
          <div
            className="text-black"
            style={{
              fontFamily: "GeneralSans-Semibold",
            }}
          >
            100
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-custom-gray py-4">
          <div className="flex items-center gap-2.5">
            <MessageSquare className="size-5" />
            <div className="font-medium"> Messages</div>
          </div>
          <div
            className="text-black"
            style={{
              fontFamily: "GeneralSans-Semibold",
            }}
          >
            147
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-custom-gray py-4">
          <div className="flex items-center gap-2.5">
            <Eye className="size-5" />
            <div className="font-medium"> Views</div>
          </div>
          <div
            className="text-black"
            style={{
              fontFamily: "GeneralSans-Semibold",
            }}
          >
            800
          </div>
        </div>
      </div>
    </div>
  );
}
