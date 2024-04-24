import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AccordionItem from "./components/Accordion";
import OwnerInformation from "./components/OwnerInformation";
import "./App.scss";
import sevronLogo from "./assets/img/Sevron_Full.png";
import Rectangle_808 from "./assets/img/Rectangle_808.png";
import Rectangle_817 from "./assets/img/Rectangle_817.png";
import Rectangle_810 from "./assets/img/Rectangle_810.png";
import Rectangle_819 from "./assets/img/Rectangle_819.png";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <div className="container w-full">
        <img src={sevronLogo} alt="Sevron Logo" className="img-logo" />
      </div>
      <Navbar show={show} setShow={setShow} />
      <div id="accordion-collapse" data-accordion="collapse">
        <AccordionItem
          heading="Rating Before Controls: <strong>MEDIUM RISK</strong>"
          background="dark-orange"
          content={
            <>
              <div className="accordion-desk">
                <h5>SUBSTANCE INFORMATION</h5>
                <div className="list-desc">
                  <p>
                    <strong>Product Name:</strong>
                    <span className="muted-text">Industry Cleaner 500ml</span>
                  </p>
                  <p>
                    <strong>Product Code:</strong>
                    <span className="muted-text">0893 140</span>
                  </p>
                  <p>
                    <strong>Manufacturer:</strong>
                    <span className="muted-text">Wurth UK Ltd.</span>
                  </p>
                  <p>
                    <strong>Hazard Symbols</strong>
                  </p>
                </div>
                <div className="list-img">
                  <img src={Rectangle_808} alt="Rectangle_808" />
                  <img src={Rectangle_817} alt="Rectangle_817" />
                  <img src={Rectangle_810} alt="Rectangle_810" />
                  <img src={Rectangle_819} alt="Rectangle_819" />
                </div>
              </div>
            </>
          }
        />
      </div>
      <OwnerInformation />
      <h5 className="mt-6 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        REGULATORY STATEMENTS & CONTROLS
      </h5>
    </div>
  );
}

export default App;
