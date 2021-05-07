import React from "react";
import { ZoomControl } from "react-leaflet";
import LeafletMap from "../LeafletMap";

export default function Main() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <LeafletMap>
        <ZoomControl position={"topright"} />
      </LeafletMap>
    </div>
  );
}
