import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../consts/colors";

const CityName = styled.div`
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
`;

const CitySet = styled.div`
  padding: 0px 14px;
  margin: 10px 5px;
  font-weight: 400;
  font-size: 14px;
  text-transform: lowercase;
  border-left: solid 3px ${colors.gray300};
`;

const ListItem = styled.div`
  margin-bottom: 6px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    color: ${colors.gray300};
    transition: all 0.4s ease;
  }
`;

export default function MenuItem(props) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <CityName>
      <ListItem onClick={handleClick}>{props.cityname}</ListItem>
      {open && (
        <CitySet>
          {props.cityset.map((item) => (
            <ListItem>{item.name}</ListItem>
          ))}
        </CitySet>
      )}
    </CityName>
  );
}
