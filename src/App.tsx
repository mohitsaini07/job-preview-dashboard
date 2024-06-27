import CompanyInfo from "./components/CompanyInfo";
import JobDetails from "./components/JobDetails";
import JobPreview from "./components/JobPreview";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <JobPreview />
      <main className="flex">
        <div className="flex-1">
          <div>
            <JobDetails />
          </div>
          <div>
            <CompanyInfo />
          </div>
        </div>
        <div className="w-[26%] bg-[#FCFCFC] border-t-2 border-l border-custom-gray py-9 shadow-xl">
          <SideBar />
        </div>
      </main>
    </div>
  );
}
