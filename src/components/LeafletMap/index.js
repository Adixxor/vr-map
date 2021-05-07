import { LatLngBounds, LatLng } from "leaflet";
import React from "react";
import { MapContainer, ScaleControl } from "react-leaflet";
import styled from "styled-components";
import { OpenStreetMap } from "./layers";

const defaultCenter = [51.1078, 17.0385]; // Wrocław

const MapContainerStyled = styled(MapContainer)`
  height: 100%;
  width: 100%;
`;

const maxBounds = new LatLngBounds(new LatLng(90, -180), new LatLng(-90, 180));

export default function LeafletMap({ children, ...props }) {
  return (
    <MapContainerStyled
      center={defaultCenter}
      zoom={12}
      zoomSnap={0.25}
      minZoom={2}
      maxBounds={maxBounds}
      maxBoundsViscosity={1}
      zoomControl={false}
      {...props}
    >
      <OpenStreetMap />
      <ScaleControl position={"bottomright"} />
      {children}
    </MapContainerStyled>
  );
}
