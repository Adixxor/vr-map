import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../consts/colors";
import styled from "styled-components";

const PopupInfoContainer = styled.div`
  min-width: 180px;
`;

const PhotoTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 3px;
`;

const PhotoSetInfo = styled.div`
  border-bottom: solid 1px ${colors.gray100};
  padding-bottom: 7px;
  color: ${colors.gray700};
`;

const StereoSubheading = styled.h4`
  margin-bottom: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const LinkButton = styled(Link)`
  background: ${colors.gray100};
  text-decoration: none;
  color: ${colors.gray700};
  cursor: pointer;
  font-size: 1em;
  padding: 10px;
  margin-right: 10px;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  position: relative;
  text-align: center;
  display: block;
  min-width: 100px;

  &::after {
    content: "\\279C";
    font-family: "Font Awesome 5 Pro";
    font-weight: 100;
    position: absolute;
    left: 76%;
    top: 54%;
    right: 0;
    bottom: 0;
    opacity: 0;
    transform: translate(-50%, -50%);
  }

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${colors.gray700};
  }

  &:hover {
    text-decoration: none;
    background: #3388ff;
    transition: all 0.5s;
    box-shadow: 0px 3px 5px #d6e7ff;
    color: #ffffff;
    padding-left: 5px;
    padding-right: 15px;

    &::after {
      opacity: 1;
      transition: all 0.5s;
      color: #ffffff;
    }
  }
`;

export default function PopupContent({ photo, set }) {
  return (
    <PopupInfoContainer>
      <PhotoTitle>{photo.name}</PhotoTitle>
      <PhotoSetInfo>
        {set.cityName}, {set.name}
      </PhotoSetInfo>
      <StereoSubheading>Zobacz stereoparę ze zdjeciem:</StereoSubheading>
      <ButtonsContainer>
        <div>
          {/* Jeśli zdjęcie ma lewą stereoparę wyświetl link do widoku stereopary, w innym wypadku wyświetl brak*/}
          {photo.stereoPair?.left ? (
            <LinkButton to={"/stereo-view"}>Po lewej</LinkButton>
          ) : null}
        </div>
        <div>
          {/* Jeśli zdjęcie ma prawą stereoparę wyświetl link do widoku stereopary, w innym wypadku wyświetl brak*/}
          {photo.stereoPair?.right ? (
            <LinkButton to={"/stereo-view"}>
              {/* &rarr;  */}
              Po prawej
            </LinkButton>
          ) : null}
        </div>
      </ButtonsContainer>
    </PopupInfoContainer>
  );
}
