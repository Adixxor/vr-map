import React, { useContext, useState } from "react";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { AppContext } from "../../context/appContext";

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
  padding: 0px 25px 10px 35px;
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
  max-width: 250px;
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

const ChecboxContainer = styled.input`
  margin-right: 10px;
`;

export default function MenuItem(props) {
  const [open, setOpen] = useState(false);
  const { checkedSets, setCheckedSets } = useContext(AppContext);

  //  funkcja, która na kliknięcie otwórzy zamknięty element, bądź zamknie już otwarty
  function handleClick() {
    setOpen(!open);
  }

  function handleCheckboxClick(cityName, setObj) {
    setCheckedSets((prevCheckedSets) => {
      // funkcja zwracająca elementy, które są aktualnie zaznaczone
      if (
        prevCheckedSets.find(
          (item) => item.cityName === cityName && item.name === setObj.name
        )
      ) {
        // jeśli kliknięty element został już wcześniej zaznaczony to go usuń...
        return prevCheckedSets.filter(
          (item) => !(item.cityName === cityName && item.name === setObj.name)
        );
      } else {
        //... a jeśli nie był wcześniej zaznaczony to go dodaj
        return [...prevCheckedSets, { ...setObj, cityName }];
      }
    });
  }

  return (
    <CityName>
      <ListItem onClick={handleClick}>
        {props.name}
        <ArrowContainer>
          {!!props.set.length && <ArrowIcon open={open} />}
        </ArrowContainer>
      </ListItem>
      {open && (
        <CitySet>
          {props.set.map((item) => (
            <ListItem
              key={item.name}
              onClick={() => handleCheckboxClick(props.name, item)}
            >
              <ChecboxContainer
                type="checkbox"
                onChange={() => {}}
                checked={
                  !!checkedSets.find(
                    (set) =>
                      set.cityName === props.name && set.name === item.name
                  )
                }
              ></ChecboxContainer>
              {item.name}
            </ListItem>
          ))}
        </CitySet>
      )}
    </CityName>
  );
}
