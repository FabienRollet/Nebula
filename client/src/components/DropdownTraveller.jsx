import { useState } from "react";
import "../styles/DropdownTraveller.scss";

function DropdownTraveller() {
  const [selectedOption, setSelectedOption] = useState("");

  const handelSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <label className="dropDownTravellerLabel" htmlFor="selectNumberTraveller">
        Nombre de passagers :
      </label>
      <select
        name="travellers"
        id="selectNumberTraveller"
        value={selectedOption}
        onChange={handelSelectChange}
        className="dropDownTravellerSelect"
      >
        {[...Array(25).keys()].map((number) => (
          <option key={number + 1} value={number + 1}>
            {number + 1}
          </option>
        ))}
      </select>
    </>
  );
}

export default DropdownTraveller;