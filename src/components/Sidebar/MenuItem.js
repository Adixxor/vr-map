import React, { useContext } from "react";
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
  width: 250px;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  @media (max-width: 410px) {
    font-size: 14px;
    padding-right: 10px;
  }
`;

const CitySet = styled.div`
  padding: 0px 14px;
  margin: 0px 5px 10px 5px;
  font-weight: 400;
  font-size: 14px;
  text-transform: lowercase;
  border-left: solid 3px ${colors.gray300};

  @media (max-width: 410px) {
    font-size: 13px;
  }
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

const ChecboxContainer = styled.input`
  margin-right: 10px;
`;

const CounterContainer = styled.div`
  margin-left: 10px;
  margin-top: 3px;
  min-height: 15px;
  min-width: 15px;
  max-height: 15px;
  max-width: 15px;
  border-radius: 50%;
  background: ${colors.accentColor};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

export default function MenuItem(props) {
  const {
    checkedSets,
    setCheckedSets,
    openedSidebarElements,
    setOpenedSidebarElements,
  } = useContext(AppContext);

  const open = openedSidebarElements.find((item) => item === props.name);

  //  funkcja, która na kliknięcie otwórzy zamknięty element, bądź zamknie już otwarty
  function handleClick(cityName) {
    setOpenedSidebarElements((prevOpened) => {
      if (prevOpened.find((item) => item === cityName)) {
        // jeśli MenuItem było open to usuń z setOpenedElements
        return prevOpened.filter((item) => item !== cityName);
      } else {
        // jeśli MenuItem nie było open to dodaj do setOpenedElements
        return [...prevOpened, cityName];
      }
    });
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

  const checkedSetsCount = checkedSets.filter(
    (set) => set.cityName === props.name
  ).length;

  return (
    <CityName>
      <ListItem onClick={() => handleClick(props.name)}>
        {props.name}
        {!!checkedSetsCount && (
          <CounterContainer>{checkedSetsCount}</CounterContainer>
        )}
        <ArrowContainer>
          {!!props.sets.length && <ArrowIcon open={open} />}
        </ArrowContainer>
      </ListItem>
      {open && (
        <CitySet>
          {props.sets.map((item) => (
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
