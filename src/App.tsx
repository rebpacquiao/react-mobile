import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AccordionItem from "./components/Accordion";
import OwnerInformation from "./components/OwnerInformation";
import SwitchComponent from "./components/switchComponent";
import ConfirmationComponent from "./components/confirmationComponent";
import "./App.scss";
import sevronLogo from "./assets/img/Sevron_Full.png";
import Rectangle_808 from "./assets/img/Rectangle_808.png";
import Rectangle_817 from "./assets/img/Rectangle_817.png";
import Rectangle_810 from "./assets/img/Rectangle_810.png";
import Rectangle_819 from "./assets/img/Rectangle_819.png";
import Rectangle_750 from "./assets/img/Rectangle_750.png";
import Rectangle_751 from "./assets/img/Rectangle_751.png";
import Rectangle_754 from "./assets/img/Rectangle_754.png";
import Rectangle_756 from "./assets/img/Rectangle_756.png";
import Rectangle_760 from "./assets/img/Rectangle_760.png";
import Rectangle_758 from "./assets/img/Rectangle_758.png";
import Rectangle_767 from "./assets/img/Rectangle_767.png";
import Rectangle_768 from "./assets/img/Rectangle_768.png";
import Rectangle_776 from "./assets/img/Rectangle_776.png";
import Rectangle_772 from "./assets/img/Rectangle_772.png";
import Rectangle_768_2 from "./assets/img/Rectangle_768_2.png";
import Rectangle_770 from "./assets/img/Rectangle_770.png";
import Rectangle_778 from "./assets/img/Rectangle_778.png";
import Rectangle_780 from "./assets/img/Rectangle_780.png";
import Rectangle_786 from "./assets/img/Rectangle_786.png";
import Rectangle_788 from "./assets/img/Rectangle_788.png";
import Rectangle_790 from "./assets/img/Rectangle_790.png";
import Rectangle_792 from "./assets/img/Rectangle_792.png";
import Rectangle_794 from "./assets/img/Rectangle_794.png";
import Rectangle_796 from "./assets/img/Rectangle_796.png";

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
          background="medium-risk"
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

      <div id="accordion-collapse" data-accordion="collapse">
        <AccordionItem
          heading="Rating Before Controls: <strong>HIGH RISK</strong>"
          background="high-risk"
          content={
            <>
              <div className="accordion-desk">
                <div className="high-risk-border">
                  <div className="flex-two-column-row">
                    <img src={Rectangle_750} alt="Rectangle_750" />
                    <span className="muted-text">
                      H222: Extremely <br />
                      Flammable Aerosol
                    </span>
                  </div>
                </div>

                <div className="list-img">
                  <img
                    src={Rectangle_751}
                    alt="Rectangle_808"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_754}
                    alt="Rectangle_754"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_756}
                    alt="Rectangle_756"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_760}
                    className="high-risk-img"
                    alt="Rectangle_760"
                  />
                  <img
                    src={Rectangle_758}
                    className="high-risk-img"
                    alt="Rectangle_758"
                  />
                </div>
              </div>
            </>
          }
        />
      </div>

      <div className="mt-6" id="accordion-collapse" data-accordion="collapse">
        <AccordionItem
          heading="Rating Before Controls: <strong>HIGH RISK</strong>"
          background="high-risk"
          content={
            <>
              <div className="accordion-desk">
                <div className="high-risk-border">
                  <div className="flex-two-column-row">
                    <img src={Rectangle_767} alt="Rectangle_750" />
                    <span className="muted-text">
                      H229: Pressurized Container; <br />
                      May burst if heated
                    </span>
                  </div>
                </div>

                <div className="list-img">
                  <img
                    src={Rectangle_756}
                    alt="Rectangle_756"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_760}
                    className="high-risk-img"
                    alt="Rectangle_760"
                  />
                  <img
                    src={Rectangle_758}
                    className="high-risk-img"
                    alt="Rectangle_758"
                  />
                </div>
              </div>
            </>
          }
        />
      </div>
      <div className="mt-6" id="accordion-collapse" data-accordion="collapse">
        <AccordionItem
          heading="Rating Before Controls: <strong>HIGH RISK</strong>"
          background="medium-risk"
          content={
            <>
              <div className="accordion-desk">
                <div className="high-risk-border">
                  <div className="flex-two-column-row">
                    <img src={Rectangle_768} alt="Rectangle_750" />
                    <span className="muted-text">
                      H336: May cause drowsiness and dizziness
                    </span>
                  </div>
                </div>

                <div className="list-img">
                  <img
                    src={Rectangle_776}
                    alt="Rectangle_776"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_772}
                    className="high-risk-img"
                    alt="Rectangle_760"
                  />
                  <img
                    src={Rectangle_760}
                    className="high-risk-img"
                    alt="Rectangle_760"
                  />
                  <img
                    src={Rectangle_768_2}
                    className="high-risk-img"
                    alt="Rectangle_760"
                  />
                  <img
                    src={Rectangle_770}
                    className="high-risk-img"
                    alt="Rectangle_760"
                  />
                  <img
                    src={Rectangle_778}
                    className="high-risk-img"
                    alt="Rectangle_760"
                  />
                  <img
                    src={Rectangle_780}
                    className="high-risk-img"
                    alt="Rectangle_760"
                  />
                </div>
              </div>
            </>
          }
        />
      </div>
      <div className="mt-6" id="accordion-collapse" data-accordion="collapse">
        <AccordionItem
          heading="Rating Before Controls: <strong>LOW RISK</strong>"
          background="low-risk"
          content={
            <>
              <div className="accordion-desk">
                <div className="high-risk-border">
                  <div className="flex-two-column-row">
                    <img src={Rectangle_768} alt="Rectangle_750" />
                    <span className="muted-text">
                      H315: Causes skin irritation
                    </span>
                  </div>
                </div>

                <div className="list-img">
                  <img
                    src={Rectangle_786}
                    alt="Rectangle_786"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_788}
                    alt="Rectangle_788"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_790}
                    alt="Rectangle_788"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_770}
                    alt="Rectangle_788"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_792}
                    alt="Rectangle_792"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_794}
                    alt="Rectangle_792"
                    className="high-risk-img"
                  />
                </div>
              </div>
            </>
          }
        />
      </div>
      <div className="mt-6" id="accordion-collapse" data-accordion="collapse">
        <AccordionItem
          heading="Rating Before Controls: <strong>LOW RISK</strong>"
          background="low-risk"
          content={
            <>
              <div className="accordion-desk">
                <div className="high-risk-border">
                  <div className="flex-two-column-row">
                    <img src={Rectangle_768} alt="Rectangle_750" />
                    <span className="muted-text">
                      H317: May cause an allergic skin reaction
                    </span>
                  </div>
                </div>

                <div className="list-img">
                  <img
                    src={Rectangle_786}
                    alt="Rectangle_786"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_788}
                    alt="Rectangle_788"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_790}
                    alt="Rectangle_788"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_770}
                    alt="Rectangle_788"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_792}
                    alt="Rectangle_792"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_794}
                    alt="Rectangle_792"
                    className="high-risk-img"
                  />
                </div>
              </div>
            </>
          }
        />
      </div>
      <div className="mt-6" id="accordion-collapse" data-accordion="collapse">
        <AccordionItem
          heading="Rating Before Controls: <strong>LOW RISK</strong>"
          background="low-risk"
          content={
            <>
              <div className="accordion-desk">
                <div className="high-risk-border">
                  <div className="flex-two-column-row">
                    <img src={Rectangle_796} alt="Rectangle_750" />
                    <span className="muted-text">
                      H411: Toxic to aquatic life with long lasting effects
                    </span>
                  </div>
                </div>

                <div className="list-img">
                  <img
                    src={Rectangle_760}
                    alt="Rectangle_760"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_758}
                    alt="Rectangle_758"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_768_2}
                    alt="Rectangle_768_2"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_770}
                    alt="Rectangle_768_2"
                    className="high-risk-img"
                  />
                  <img
                    src={Rectangle_778}
                    alt="Rectangle_768_2"
                    className="high-risk-img"
                  />
                </div>
              </div>
            </>
          }
        />
      </div>
      <div className="mt-6" id="accordion-collapse" data-accordion="collapse">
        <AccordionItem
          heading="Training Recommendations from <strong>The Knights of Safety Academy</strong>"
          background="medium-risk"
          content={
            <>
              <div className="accordion-desk">
                <span className="muted-text">
                  <p>
                    View a list of recommended training courses tailored to the
                    hazards and controls above by identifying whether you are a
                    Risk Assessor or Task Operator.
                  </p>
                </span>
                <SwitchComponent />
              </div>
            </>
          }
        />
      </div>
      <div className="mt-6" id="accordion-collapse" data-accordion="collapse">
        <AccordionItem
          heading="Confirmation"
          background="confirmation"
          content={
            <>
              <div className="accordion-desk">
                <span className="muted-text">
                  <p>
                    I confirm that I have read & understood the content of the
                    above assessment, and that I have been instructed on the
                    hazards & control measures associated with the task
                    including the task specific information. I also confirm that
                    if the work environment changes or other hazards occur I
                    will bring it to the attention of my immediate supervisor.
                  </p>
                </span>

                <ConfirmationComponent />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
}

export default App;
