import { MapPin } from "lucide-react";
import "../fonts.css";

const JobDetails = () => {
  return (
    <div>
      <div className="border-t-2 border-b ">
        <div className="px-[100px]">
          <div className="flex items-center gap-3 pt-9 mb-6">
            <h1
              className="text-3xl text-gray-800"
              style={{
                fontFamily: "GeneralSans",
              }}
            >
              Senior Product Designer
            </h1>
            <div className="size-1 rounded-full bg-gray-100"></div>
            <div className="flex items-center gap-3">
              <span className="text-gray-300 font-medium text-sm">
                posted 2 days ago
              </span>
              <div className="flex items-center gap-1 bg-green-100 border border-green-200 text-green-300 text-xs font-semibold mr-2 px-2 py-0.5 rounded-full">
                <div className="size-2 bg-green-400 rounded-full"></div>
                <div className="text-xs font-medium">Open</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-lightest-gray">
            <p className="text-gray-600 flex items-center gap-3 font-medium text-xl">
              <MapPin className="w-4 h-5" /> Delaware, USA
            </p>
            <div className="size-1 rounded-full bg-gray-100"></div>
            <p className="text-gray-600 flex items-center gap-3 font-medium text-xl">
              <img
                src="./coin-stack.png"
                className="w-5 h-[18px]"
                alt="coin-stack"
              />
              $300K-$400K
            </p>
          </div>
          +
        </div>
      </div>
      <div className="px-[100px] flex gap-16 mt-8">
        <div>
          <h2 className="text-sm font-medium text-gray-400">Skills Required</h2>
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex items-center gap-1 text-gray-800 text-xs font-semibold px-1.5 py-1 rounded-lg border border-gray-500 w-max">
              <img src="./figma.png" className="size-4" alt="figma" />
              <div
                className="text-[#344054]"
                style={{
                  fontFamily: "GeneralSans-Semibold",
                }}
              >
                Figma
              </div>
            </div>
            <div className="flex items-center gap-1 text-gray-800 text-xs font-semibold px-1.5 py-1 rounded-lg border border-gray-500 w-max">
              <img
                src="./adobe-illustrator.png"
                className="size-4"
                alt="illustrator"
              />
              <div
                className="text-[#344054]"
                style={{
                  fontFamily: "GeneralSans-Semibold",
                }}
              >
                Adobe Illustrator
              </div>
            </div>
            <div className="flex items-center gap-1 text-gray-800 text-xs font-semibold px-1.5 py-1 rounded-lg border border-gray-500 w-max">
              <img src="./adobe-xd.png" className="size-4" alt="adobe-xd" />
              <div
                className="text-[#344054]"
                style={{
                  fontFamily: "GeneralSans-Semibold",
                }}
              >
                Adobe XD
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-400 mb-2">
            Preferred Language
          </h2>
          <p
            className="font-semibold text-gray-600"
            style={{
              fontFamily: "GeneralSans-Semibold",
            }}
          >
            English
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-400 mb-2">Type</h2>
          <p
            className="font-semibold text-gray-600"
            style={{
              fontFamily: "GeneralSans-Semibold",
            }}
          >
            Full time
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-400 mb-2">
            Years of Experience
          </h2>
          <p
            className="text-gray-600 font-semibold"
            style={{
              fontFamily: "GeneralSans-Semibold",
            }}
          >
            3+ Years of Experience
          </p>
        </div>
      </div>

      {/* About the job */}
      <div className="text-black border-t border-custom-gray mt-8">
        <div className="px-[100px]">
          <h2 className="text-sm font-medium text-gray-400 mt-8">
            About the job
          </h2>
          <div className="font-medium text-dark-gray leading-7">
            <ul className="list-decimal ml-6 mt-2">
              <li>Handle the UI/UX research design</li>
              <li>
                Work on researching on latest web applications designs & trends
              </li>
              <li>Work on conceptualizing and visualizing</li>
              <li>
                Work on creating graphics content and other graphic related
                works
              </li>
            </ul>
            <h2>Benefits: </h2>
            <ul className="list-disc ml-6">
              <li>Health insurance</li>
              <li>Provident Fund</li>
            </ul>
            <ul>Schedule:</ul>
            <li className="ml-2">Day shift</li>
            <h2>Supplemental pay types: </h2>
            <ul className="list-disc ml-6">
              <li>Performance bonus</li>
              <li>Yearly bonus</li>
            </ul>
            <div className="flex items-center gap-1 ">
              <h2>Work Location: </h2>
              <p>In person</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
