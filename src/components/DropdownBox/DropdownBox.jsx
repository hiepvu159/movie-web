import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function DropdownBox() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <Select
        className="dropdown"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

export default DropdownBox;
