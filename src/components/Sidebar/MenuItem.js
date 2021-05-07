import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const RiArrowDownSFillIcon = styled(RiArrowDownSFill)`
  color: ${colors.gray500};
  height: 20px;
  width: 20px;
`;

const RiArrowUpSFillIcon = styled(RiArrowUpSFill)`
  color: ${colors.gray700};
  height: 20px;
  width: 20px;
`;

const CityName = styled.div`
  padding: 0px 10px 10px 35px;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
`;

const CitySet = styled.div`
  padding: 0px 14px;
  margin: 0px 5px 10px 5px;
  font-weight: 400;
  font-size: 14px;
  text-transform: lowercase;
  border-left: solid 3px ${colors.gray300};
`;

const ListItem = styled.div`
  display: flex;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.6s ease;

  &:hover {
    color: ${colors.gray300};
  }
`;

const ArrowContainer = styled.div`
  padding-left: 5px;
`;

const ArrowIcon = ({ open }) => {
  return open ? <RiArrowUpSFillIcon /> : <RiArrowDownSFillIcon />;
};

export default function MenuItem(props) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <CityName>
      <ListItem onClick={handleClick}>
        {props.cityname}
        <ArrowContainer>
          {!!props.cityset.length && <ArrowIcon open={open} />}
        </ArrowContainer>
      </ListItem>
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
