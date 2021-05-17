import React, { useContext, useEffect, useRef, useState } from "react";
import { ZoomControl, Polygon, Popup, FeatureGroup } from "react-leaflet";
import { AppContext } from "../../context/appContext";
import LeafletMap from "../LeafletMap";

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
                      <div>{set.cityName}</div>
                      <div>{set.name}</div>
                      <div>{photo.name}</div>
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
