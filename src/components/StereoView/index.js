import React, { useContext, useEffect, useState } from "react";
import { ZoomControl } from "react-leaflet";
import LeafletMap from "../LeafletMap";
import { MdArrowBack } from "react-icons/md";
import "leaflet.sync";
import styled from "styled-components";
import { Link } from "react-router-dom";
import L, { LatLng } from "leaflet";
import "leaflet-imageoverlay-rotated";
import { AppContext } from "../../context/appContext";

const PUBLIC_IMAGES = `${process.env.PUBLIC_URL}/images/`;

const LinkButton = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, 0.25);
  z-index: 1000;
  text-align: center;

  &:hover {
    background-color: #f4f4f4;
  }
`;

const ArrowBackButton = styled(MdArrowBack)`
  color: black;
  height: 18px;
  width: 18px;
  margin-top: 6px;
`;

const BackToMainPageControl = () => {
  return (
    <LinkButton to={"/"}>
      <ArrowBackButton />
    </LinkButton>
  );
};

// TODO:dodaj opcję pełnego ekranu

export default function StereoView() {
  const [leftMap, setLeftMap] = useState();
  const [rightMap, setRightMap] = useState();
  const { chosenStereopair } = useContext(AppContext);

  useEffect(() => {
    if (leftMap && rightMap) {
      leftMap.sync(rightMap);
      rightMap.sync(leftMap);
    }
  }, [leftMap, rightMap]);

  useEffect(() => {
    if (leftMap && rightMap && chosenStereopair) {
      const leftImage = L.imageOverlay
        .rotated(
          `${PUBLIC_IMAGES}${chosenStereopair.left.fileName}`,
          new LatLng(...chosenStereopair.left.bounds[0]),
          new LatLng(...chosenStereopair.left.bounds[1]),
          new LatLng(...chosenStereopair.left.bounds[3])
        )
        .addTo(leftMap);

      L.imageOverlay
        .rotated(
          `${PUBLIC_IMAGES}${chosenStereopair.right.fileName}`,
          new LatLng(...chosenStereopair.right.bounds[0]),
          new LatLng(...chosenStereopair.right.bounds[1]),
          new LatLng(...chosenStereopair.right.bounds[3])
        )
        .addTo(rightMap);

      // Wycentruj widok lewej mapy do bounds lewego zdjęcia. Dzięki synchronizowaniu mapek wystarczy centrowanie jednego widoku.
      leftMap.fitBounds(leftImage.getBounds());
    }
  }, [leftMap, rightMap, chosenStereopair]);

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      <LeafletMap
        style={{ width: "50%", height: "100vh" }}
        whenReady={(event) => setLeftMap(event.target)}
      >
        <ZoomControl position={"topright"} />
        <BackToMainPageControl />
      </LeafletMap>
      <LeafletMap
        style={{ width: "50%", height: "100vh" }}
        whenReady={(event) => setRightMap(event.target)}
      >
        <ZoomControl position={"topright"} />
        <BackToMainPageControl />
      </LeafletMap>
    </div>
  );
}
