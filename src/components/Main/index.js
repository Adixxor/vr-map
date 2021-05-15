import React, { useContext, useEffect, useState } from "react";
import { ZoomControl, Polygon, Popup } from "react-leaflet";
import { AppContext } from "../../context/appContext";
import LeafletMap from "../LeafletMap";

export default function Main() {
  const { selectedSet } = useContext(AppContext);
  const [selectedPolygon, setSelectedPolygon] = useState();

  useEffect(() => {
    setSelectedPolygon(null);
  }, [selectedSet]);

  function handlePhotoClick(name) {
    setSelectedPolygon(name);
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <LeafletMap>
        <ZoomControl position={"topright"} />
        {selectedSet?.photos?.map((photo) => {
          return (
            <Polygon
              key={photo.name}
              positions={photo.bounds}
              eventHandlers={{ click: () => handlePhotoClick(photo.name) }}
              pathOptions={{
                color: selectedPolygon === photo.name ? "#ED254E" : "#3388ff",
              }}
            >
              <Popup>
                <div>
                  <div>{selectedSet.cityName}</div>
                  <div>{selectedSet.name}</div>
                  <div>{photo.name}</div>
                </div>
              </Popup>
            </Polygon>
          );
        })}
      </LeafletMap>
    </div>
  );
}
