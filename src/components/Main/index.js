import React, { useContext, useEffect, useRef, useState } from "react";
import { ZoomControl, Polygon, Popup, FeatureGroup } from "react-leaflet";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/appContext";
import LeafletMap from "../LeafletMap";
import { colors } from "../../consts/colors";
import styled from "styled-components";

const LinkButton = styled(Link)`
  border-radius: 5px;
  background: ${colors.gray100};
  margin-right: 8px;
  padding: 6px 20px;
  height: 10px;
  width: 33px;
  text-decoration: none;
  color: ${colors.gray700};

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${colors.gray700};
    cursor: pointer;
    transition: all 0.6s ease;
  }

  &:hover {
    text-decoration: none;
    background: #3388ff;
    box-shadow: 0px 3px 5px #d6e7ff;
    color: #ffffff;
  }
`;

export default function Main() {
  const { checkedSets } = useContext(AppContext);
  const [selectedPolygon, setSelectedPolygon] = useState();
  const [myMap, setMyMap] = useState();
  const groupRef = useRef();

  useEffect(() => {
    // jeśli w checkedSets nie ma zdjęcia z selectedPolygon ustaw selectedPolygon na null
    setSelectedPolygon((prevSelectedPolygon) => {
      let found = false;
      // sprawdz czy w checkedSets jest selectedPolygon
      checkedSets.forEach((set) => {
        set.photos?.forEach((photo) => {
          if (photo.name === prevSelectedPolygon) {
            found = true;
          }
        });
      });
      if (found) {
        // znaleziono, więc selectedPolygon pozostaje niezmieniony (zostaje zaznaczony na czerwono)
        return prevSelectedPolygon;
      } else {
        // nie znaleziono, więc selectedPolygon ustaw na null (odznaczanie zdjęcia)
        return null;
      }
    });
  }, [checkedSets]);

  useEffect(() => {
    if (myMap) {
      const bounds = groupRef.current.getBounds();
      if (bounds.isValid()) {
        myMap.fitBounds(bounds, { paddingTopLeft: [300, 0] });
      }
    }
  }, [checkedSets, myMap]);

  function handlePhotoClick(name) {
    setSelectedPolygon(name);
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <LeafletMap whenReady={(event) => setMyMap(event.target)}>
        <ZoomControl position={"topright"} />
        {/* pokaż poligony tylko zaznaczonych setów (checkedSets) */}
        <FeatureGroup ref={groupRef}>
          {checkedSets.map((set) => {
            return set?.photos?.map((photo) => {
              return (
                <Polygon
                  key={photo.name}
                  positions={photo.bounds}
                  // zapamiętaj nazwę klikniętego poligonu jako selected (setSelectedPolygon)
                  eventHandlers={{ click: () => handlePhotoClick(photo.name) }}
                  pathOptions={{
                    // jeśli poligon jest zaznaczony to nadaj mu kolor czerwony, a w innym wypadku niebieski
                    color:
                      selectedPolygon === photo.name ? "#ED254E" : "#3388ff",
                  }}
                >
                  <Popup>
                    <div>
                      <h3
                        style={{
                          marginTop: "20px",
                          marginBottom: "3px",
                        }}
                      >
                        {photo.name}
                      </h3>
                      <div
                        style={{
                          borderBottom: `solid 1px ${colors.gray100}`,
                          paddingBottom: "7px",
                          color: `${colors.gray700}`,
                        }}
                      >
                        {set.cityName}, {set.name}
                      </div>
                      <div>
                        <h4
                          style={{
                            marginBottom: "10px",
                          }}
                        >
                          Stereopara ze zdjeciem:
                        </h4>
                      </div>
                      <div style={{ display: "flex", marginBottom: "20px" }}>
                        <div>
                          {/* Jeśli zdjęcie ma lewą stereoparę wyświetl link do widoku stereopary, w innym wypadku wyświetl brak*/}
                          {photo.stereoPair?.left ? (
                            <LinkButton to={"/tutorial"}>Po lewej</LinkButton>
                          ) : null}
                        </div>
                        <div>
                          {/* Jeśli zdjęcie ma prawą stereoparę wyświetl link do widoku stereopary, w innym wypadku wyświetl brak*/}
                          {photo.stereoPair?.right ? (
                            <LinkButton to={"/tutorial"}>
                              {/* &rarr;  */}
                              Po prawej
                            </LinkButton>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Polygon>
              );
            });
          })}
        </FeatureGroup>
      </LeafletMap>
    </div>
  );
}
