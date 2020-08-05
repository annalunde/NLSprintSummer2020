import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./Dropdown.css";

const DropdownPlace = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const [cities] = useState(["Oslo", "Stockholm", "Copenhagen", "Munich"]);


  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} >
      <DropdownToggle caret>
        Choose a Netlight Office Area
        </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={() => props.triggerGraphChange(""+cities[0])}>{cities[0]}</DropdownItem>
        <DropdownItem onClick={() => props.triggerGraphChange(""+cities[1])}>{cities[1]}</DropdownItem>
        <DropdownItem onClick={() => props.triggerGraphChange(""+cities[2])}>{cities[2]}</DropdownItem>
        <DropdownItem onClick={() => props.triggerGraphChange(""+cities[3])}>{cities[3]}</DropdownItem>
      </DropdownMenu >
    </Dropdown >
  );
}


export default DropdownPlace;