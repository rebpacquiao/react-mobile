import React from "react";
import { data, images, checkBoxData } from "../data/substanceData.js";

const DataSubstanceInformation = () => {
  return (
    <>
      <ul className="data-list">
        {data.map((item, index) => (
          <li key={index} className="data-item">
            <ul>
              <li>
                <strong>Product Name:</strong>
                <span className="muted-text">{item.productName}</span>
              </li>
              <li>
                <strong>Product Code:</strong>
                <span className="muted-text">{item.productCode}</span>
              </li>
              <li>
                <strong>Manufacturer:</strong>
                <span className="muted-text">{item.manufacturer}</span>
              </li>
              <li>
                <strong>SDS Number:</strong>
                <span className="muted-text">{item.sdsNumber}</span>
              </li>
            </ul>
          </li>
        ))}
      </ul>

      <h5 className="mt-3">
        <strong>Hazard Symbols</strong>
      </h5>
      <div className="list-img">
        {images.map((image, index) => (
          <div className="hazard-symbols" key={index}>
            <img src={image.src} alt={image.alt} />
            <p className="muted-text">{image.description}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center checkbox-section">
        <input
          id="disabled-checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="disabled-checked-checkbox"
          className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
        >
          {checkBoxData.map((item, index) => (
            <div className="hazard-symbols" key={index}>
              <p className="muted-text">{item.label}</p>
            </div>
          ))}
        </label>
      </div>
    </>
  );
};

export default DataSubstanceInformation;
