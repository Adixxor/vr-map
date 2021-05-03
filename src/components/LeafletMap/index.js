import React from "react";
import { MapContainer } from "react-leaflet";
import styled from "styled-components";
import { OpenStreetMap } from "./layers";

const defaultCenter = [51.1078, 17.0385]; // Wrocław

const MapContainerStyled = styled(MapContainer)`
  height: 100%;
  width: 100%;
`;

export default function LeafletMap({ children, ...props }) {
  return (
    <MapContainerStyled
      center={defaultCenter}
      zoom={12}
      zoomControl={false}
      {...props}
    >
      <OpenStreetMap />
      {children}
    </MapContainerStyled>
  );
}
