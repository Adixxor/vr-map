import React, { useState, useRef } from "react";
import MenuItem from "./MenuItem";
import { IoIosArrowBack } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import styled from "styled-components";
import { SortedSidebarData } from "./SidebarData";
import { colors } from "../../consts/colors";

const SidebarContainer = styled.div`
  background: rgba(249, 250, 252, 0.94);
  color: #0c0f12;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: fit-content;
`;

const SidebarTop = styled.div`
  display: flex;
  align-items: center;
`;

const IoIosArrowBackButton = styled(IoIosArrowBack)`
  color: ${colors.gray500};
  height: 40px;
  width: 40px;
  padding: 15px 14px 15px 15px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    color: ${colors.gray300};
  }
`;

const SearchContainer = styled.div`
  background: ${colors.gray100};
  display: flex;
  width: 100%;
  height: 28px;
  margin-right: 19px;
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
  }
`;

const BiSearchButton = styled(BiSearch)`
  color: ${colors.gray500};
  height: 20px;
  width: 20px;
`;

const FiMenuButton = styled(FiMenu)`
  color: ${colors.gray500};
  background: rgba(249, 250, 252, 0.94);
  height: 30px;
  width: 30px;
  padding: 20px;
  border-radius: 0px 0px 25px 0px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    color: ${colors.gray300};
  }
`;

const SidebarListTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  padding: 20px 0px 15px 35px;
  color: ${colors.gray500};
  border-top: solid 2px ${colors.gray100};
`;

const SidebarContentList = styled.div`
  padding: 0px 0px;
`;

// TODO: kółeczko z liczbą zaznaczonych zestawów w danej miejscowości

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState("");
  const searchRef = useRef(search);
  // pofiltrowane dane z sidebaru na podstawie wpisywanej w wyszukiwarkę frazy (wielkość znaków nie ma znaczenia)
  const filteredSidebarData = SortedSidebarData.filter((item) =>
    item.name.toLocaleUpperCase().includes(search.toLocaleUpperCase())
  );

  // funkcja zczytująca wpisywane w wyszukiwarkę frazy (dzięki funkcji referencji)
  function handleSearch() {
    const value = searchRef.current.value;
    setSearch(value);
  }

  // alternatywny sposób wyszukiwania
  // function handleSearchChanged(event) {
  // setSearch(event.target.value);
  // }

  // funkcja ustawiająca stan sidebaru (czy otwarty czy zamknięty)
  function closeSidebar() {
    setIsOpen(false);
  }

  // jeśli stan sidebaru jest określony jako nie otwarty to
  // zastąp pasek nawigacji ikoną "burger menu", którego kliknięcie przywraca nawigację
  if (!isOpen) {
    return <FiMenuButton onClick={() => setIsOpen(true)} />;
  }

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <SidebarContainer>
        <SidebarTop>
          <IoIosArrowBackButton onClick={closeSidebar} />
          <SearchContainer>
            <SearchInput
              ref={searchRef}
              name="search"
              placeholder="Szukaj"
              autoComplete="off"
              onKeyUp={handleSearch}
              // alternatywnie bez ref
              // onChange={(event) => handleSearchChanged(event)}
              // value={search}
            />
            <IconSearchContainer type="submit" onClick={handleSearch}>
              <BiSearchButton />
            </IconSearchContainer>
          </SearchContainer>
        </SidebarTop>
        <SidebarListTitle>Dostępne zestawy zdjęć lotniczych</SidebarListTitle>
        <SidebarContentList>
          {filteredSidebarData.map((item) => (
            <MenuItem key={item.name} name={item.name} set={item.set} />
          ))}
        </SidebarContentList>
      </SidebarContainer>
    </div>
  );
}
