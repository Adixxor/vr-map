import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { IoIosArrowBack } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import { SortedSidebarData } from "./SidebarData";
import { colors } from "../../consts/colors";

const Container = styled.div`
  background: rgba(249, 250, 252, 0.94);
  color: #0c0f12;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: fit-content;
  padding: 20px 0px;
  padding-left: 15px;
  padding-right: 20px;
`;

const IoIosArrowBackButton = styled(IoIosArrowBack)`
  color: ${colors.gray500};
  height: 40px;
  width: 40px;
  margin-right: 10px;
  padding-right: 4px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    color: ${colors.gray300};
    transition: all 0.4s ease;
  }
`;

const SearchContainer = styled.div`
  background: ${colors.gray100};
  display: flex;
  width: 100%;
  height: 28px;
  border-radius: 20px;
`;

const SearchInput = styled.input`
  background: none;
  color: ${colors.gray500};
  font-family: "Roboto", sans-serif;
  height: 20px;
  width: 100%;
  padding: 4px 14px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const IconSearchContainer = styled.div`
  color: ${colors.gray700};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.6s ease;

  &:hover {
    background: ${colors.gray300};
    border-radius: 20px;
    transition: all 0.6s ease;
  }
`;

const BiSearchButton = styled(BiSearch)`
  color: ${colors.gray500};
  height: 20px;
  width: 20px;
`;

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }} sidebar={sidebar}>
      <Container>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IoIosArrowBackButton onClick={showSidebar} />
          <SearchContainer>
            <SearchInput name="search" placeholder="Szukaj" />
            <IconSearchContainer type="submit">
              <BiSearchButton />
            </IconSearchContainer>
          </SearchContainer>
        </div>
        <div style={{ padding: "16px" }}>
          {SortedSidebarData.map((item) => (
            <MenuItem cityname={item.name} cityset={item.set} />
          ))}
        </div>
      </Container>
    </div>
  );
}
