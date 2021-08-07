import React, { useContext, useEffect, useRef, useState } from "react";
import { ZoomControl, FeatureGroup } from "react-leaflet";
import LeafletMap from "../LeafletMap";
import { MdArrowBack } from "react-icons/md";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { BiFullscreen } from "react-icons/bi";
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

const ControlButton = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  width: 34px;
  height: 34px;
  background-color: white;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, 0.25);
  z-index: 1000;
  text-align: center;

  &:hover {
    background-color: #f4f4f4;
  }
`;

const SwitchStereoViewTypeButton = styled(ControlButton)`
  top: 90px;
`;
const SwitchStereoViewTypeIcon = styled(HiOutlineSwitchHorizontal)`
  color: black;
  height: 18px;
  width: 18px;
  margin-top: 5px;
`;

const SwitchStereoViewTypeControl = (props) => {
  return (
    <SwitchStereoViewTypeButton onClick={props.onClick}>
      <SwitchStereoViewTypeIcon />
    </SwitchStereoViewTypeButton>
  );
};

const FullscreenButton = styled(ControlButton)`
  top: 140px;
`;

const FullscreenIcon = styled(BiFullscreen)`
  color: black;
  height: 18px;
  width: 18px;
  margin-top: 5px;
`;

const FullScreenControl = (props) => {
  return (
    <FullscreenButton onClick={props.onClick}>
      <FullscreenIcon />
    </FullscreenButton>
  );
};

// TODO: dodaj tooltipy do ikon

export default function StereoView() {
  const [leftMap, setLeftMap] = useState();
  const [rightMap, setRightMap] = useState();
  const [isReversed, setIsReversed] = useState(false);
  const { chosenStereopair } = useContext(AppContext);
  const containerRef = useRef();
  const leftImageRef = useRef();
  const rightImageRef = useRef();

  useEffect(() => {
    if (leftMap && rightMap) {
      leftMap.sync(rightMap);
      rightMap.sync(leftMap);
    }
  }, [leftMap, rightMap]);

  useEffect(() => {
    if (leftMap && rightMap && chosenStereopair) {
      const leftImage = L.imageOverlay.rotated(
        `${PUBLIC_IMAGES}${chosenStereopair.left.fileName}`,
        new LatLng(...chosenStereopair.left.bounds[0]),
        new LatLng(...chosenStereopair.left.bounds[1]),
        new LatLng(...chosenStereopair.left.bounds[3])
      );

      const rightImage = L.imageOverlay.rotated(
        `${PUBLIC_IMAGES}${chosenStereopair.right.fileName}`,
        new LatLng(...chosenStereopair.right.bounds[0]),
        new LatLng(...chosenStereopair.right.bounds[1]),
        new LatLng(...chosenStereopair.right.bounds[3])
      );

      // Usuń zdjęcia z mapy
      leftImageRef.current.clearLayers();
      rightImageRef.current.clearLayers();

      // Dodaj zdjęcia do mapy
      if (isReversed) {
        // patrzenie krzyżowe
        leftImage.addTo(rightImageRef.current);
        rightImage.addTo(leftImageRef.current);
      } else {
        // patrzenie normalne
        leftImage.addTo(leftImageRef.current);
        rightImage.addTo(rightImageRef.current);
      }

      // Wycentruj widok lewej mapy do bounds lewego zdjęcia. Dzięki synchronizowaniu mapek wystarczy centrowanie jednego widoku.
      leftMap.fitBounds(leftImage.getBounds());
    }
  }, [leftMap, rightMap, chosenStereopair, isReversed]);

  // Funkcja zmieniająca tryb wyświetlania map (patrzenie normalne (false) lub krzyżowe (true))
  function handleSwitchStereoViewClick() {
    setIsReversed(!isReversed);
  }

  function handleRequestFullscreen() {
    // Jeśli w trybie fullscreen to wyjdź z fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      // Jeśli nie w trybie fullcreen to zarządaj fullscreen
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) { // Safari
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) { // IE11
        containerRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div ref={containerRef} style={{ display: "flex", width: "100%", height: "100vh" }}>
      <LeafletMap
        style={{ width: "50%", height: "100vh" }}
        whenReady={(event) => setLeftMap(event.target)}
      >
        <ZoomControl position={"topright"} />
        <BackToMainPageControl />
        <SwitchStereoViewTypeControl
          onClick={() => handleSwitchStereoViewClick()}
        />
        <FullScreenControl 
          onClick={() => handleRequestFullscreen()}
        />
        <FeatureGroup ref={leftImageRef} />
      </LeafletMap>
      <LeafletMap
        style={{ width: "50%", height: "100vh" }}
        whenReady={(event) => setRightMap(event.target)}
      >
        <ZoomControl position={"topright"} />
        <BackToMainPageControl />
        <SwitchStereoViewTypeControl
          onClick={() => handleSwitchStereoViewClick()}
        />
        <FullScreenControl 
          onClick={() => handleRequestFullscreen()}
        />
        <FeatureGroup ref={rightImageRef} />
      </LeafletMap>
    </div>
  );
}
