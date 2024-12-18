import React from "react";
const PowerBIDashboard = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h3>
          <a href="https://grow.ee/en/teenused/arianaluutika/" target="_blank">
            Grow Finance Power BI dashboard
          </a>
        </h3>
        <p className="text-stone-600">2024</p>
      </div>

      <div className="mt-4 border py-2 px-3 rounded-md w-3/4">
        <p className="">
          During the internship in Grow Solutions, we launched a business
          intelligence product for business owners and executives.
        </p>

        <p className="">
          My contribution was to design and build the overall layout and global
          styling. While Power BI has limitations in design flexibility, its
          power and accessibility make it a strong and practical choice for data
          visualization.
        </p>
      </div>
      <div className="flex gap-2 pt-3">
        <span>UI</span>
        <span>Power BI</span>
      </div>
    </div>
  );
};

export default PowerBIDashboard;
