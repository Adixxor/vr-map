import React, { useState } from "react";
import styled from "styled-components";

const CityName = styled.div`
  margin-bottom: 4px;
`;

const CitySet = styled.div`
  padding-left: 8px;
`;

const ListItem = styled.div`
  cursor: pointer;
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
