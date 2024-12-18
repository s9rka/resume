import React from "react";
import greenhack from "../../assets/green_hack.png";

const GreenHack = () => {
  return (
    <div>
      <h2>Garage48 Greentech hackathon solution</h2>
      <p>
        <strong>Problem</strong>
        Many companies possess valuable data that could significantly benefit
        public sector projects. However, without tangible incentives, these
        resources remain underutilized and confined within private sectors.
      </p>
      <p>
        <strong>Solution</strong>
        Develop a platform or framework enabling companies to exchange their
        data with the public sector in return for tax incentives or other
        benefits, such as green credits.
      </p>
      <p>
        In addition to crafting the problem and solution, my main contribution
        was the design of the demo interface.
      </p>
      <div className="flex justify-center">
        
        <img src={greenhack} />
      </div>
      <span>UI</span>
    </div>
  );
};

export default GreenHack;
