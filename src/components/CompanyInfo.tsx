const CompanyInfo = () => {
  return (
    <div className="border-t border-custom-gray mt-8 pb-9">
      <div className="px-[100px]">
        <div className="flex items-center gap-3 mt-8">
          <img src="./atlassian.png" className="size-10" alt="atlassian" />
          <h2 className="font-medium text-[#4F4F4F]"> Atlassian</h2>{" "}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="mt-4 mb-6">
            <p className="font-medium text-sm text-gray-400 mb-2">
              Company size
            </p>
            <p className="text-gray-600 font-medium">1k - 2k Employees</p>
          </div>

          <div className="mt-4 mb-6">
            <p className="font-medium text-sm text-gray-400 mb-2 ">Type</p>
            <p className="text-gray-600 font-medium">Private</p>
          </div>

          <div className="mb-6">
            <p className="font-medium text-sm text-gray-400 mb-2">Sector</p>
            <p className="text-gray-600 font-medium">
              {" "}
              Information Technology, Infrastructure
            </p>
          </div>

          <div className="mb-6">
            <p className="font-medium text-sm text-gray-400 mb-2">Funding</p>
            <p className="text-gray-600 font-medium">Bootstrapped</p>
          </div>

          <div className="mb-6">
            <p className="font-medium text-sm text-gray-400 mb-2">
              Founded In{" "}
            </p>
            <p className="text-gray-600 font-medium">2019</p>
          </div>

          <div className="mb-6">
            <p className="font-medium text-sm text-gray-400 mb-2">Founded by</p>
            <p className="text-gray-600 font-medium">
              Scott Farquhar, Mike Cannon-Brookes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
