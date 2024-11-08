import React from "react";

const Services: React.FC = () => (
  <div className="flex flex-col border items-center ">
    <h2 className="text-3xl font-semibold">Our Services</h2>
    <ul className="list-disc mt-4 pl-6">
      <li>Vaccinations</li>
      <li>Dental Care</li>
      <li>Spay & Neuter</li>
      <li>Emergency Care</li>
    </ul>
  </div>
);

export default Services;
