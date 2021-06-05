import React from "react";
import { ZoomControl } from "react-leaflet";
import LeafletMap from "../LeafletMap";

export default function StereoView() {
  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      <LeafletMap style={{ width: "50%", height: "100vh" }}>
        <ZoomControl position={"topright"} />
      </LeafletMap>
      <LeafletMap style={{ width: "50%", height: "100vh" }}>
        <ZoomControl position={"topright"} />
      </LeafletMap>
    </div>
  );
}
