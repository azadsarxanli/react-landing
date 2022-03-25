import React, { useState } from "react";
import "./Companies.scss";
import "../App.scss";
import CompaniesApi from "./company.json";
import myImg from "../assets/images/companies/Nestle.png";

const Companies = () => {
  const [companies] = useState(CompaniesApi.cards);
  return (
    <section className="companies-section">
      {/* <h2>Our companies</h2> */}
      <div className="companies">
        {companies.map((card) => (
          <div key={card.id} className="card" id={card.id}>
            {card.description}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
