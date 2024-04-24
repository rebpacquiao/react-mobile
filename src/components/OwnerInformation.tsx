import React from "react";

function OwnerInformation() {
  return (
    <div className="mt-6 p-6 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h6 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
          OWNER INFORMATION
        </h6>
      </a>
      <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <div className="owner-info">
          <p>
            <strong>Company:</strong>
            <span className="muted-text">Industry Cleaner 500ml</span>
          </p>
          <p>
            <strong>Assessed By</strong>
            <span className="muted-text">Sebastian Shaw</span>
          </p>
          <p>
            <strong>Assessed On</strong>
            <span className="muted-text">07/07/2022</span>
          </p>
          <p>
            <strong>Review Date</strong>
            <span className="muted-text">On SDS update</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OwnerInformation;
