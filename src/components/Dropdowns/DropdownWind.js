import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import "./Dropdown.css";

const DropdownWind = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}
    style={{
      position: 'absolute', left: '88%' ,top:'3%',
      transform: 'translate(-50%, -50%)'
  }} >
      <DropdownToggle caret>
        Velg et av Netlights kontorer
        </DropdownToggle>
      <DropdownMenu right>  
        <DropdownItem ><Link className="dropdownItem" to="/wind">Netlights Oslo-kontor</Link></DropdownItem>
        <DropdownItem> <Link className="dropdownItem" to="/stockholmWind">Netlights Stockholmskontorer</Link></DropdownItem>
        <DropdownItem>Netlights Københavnskontor</DropdownItem>
        <DropdownItem>Netlights München-kontor</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownWind;

