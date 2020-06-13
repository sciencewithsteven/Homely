import styled from 'styled-components';

const PropImage = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  transition: transform 0.45s cubic-bezier(0.645, 0.045, 0.355, 1);
  grid-column: 1 / -1;
  grid-row: 1;
  &:hover {
    cursor: pointer;
    transform: scale(1.25);
  }
`;

// Deleted
// border-radius: 2em 2em 2em 2em;
// display: flex;
// margin-left: 25px;
// transform: scale(1.5);

const PropImageFrame = styled.div`
width: 224px;
height: 160px;
border-radius: 8px;
overflow: hidden;
display: grid;
grid-template-columns: repeat(20, 1fr);
position: relative;
`;

// Deleted
// border-radius: 1em 1em 1em 1em;

const SeeMoreHomes = styled.div`
width: 224px;
height: 160px;
border-radius: 8px;
background-color: rgb(232, 233, 234);
overflow: hidden;
display: grid;
grid-template-columns: repeat(20, 1fr);
position: relative;
`;

const TakeALook = styled.button`
font-family: Roboto;
cursor: pointer;
display: inline-block;
text-align: center;
font-weight: bold;
margin: 0px 0px 4px;
white-space: nowrap;
font-size: 16px;
line-height: 1.5;
background-color: rgb(255, 255, 255);
color: rgb(0, 120, 130);
border-radius: 8px;
border-width: 1px;
border-style: solid;
padding: 8px 16px;
border-color: transparent;
&:hover {
  cursor: pointer;
  background-color: rgb(0, 120, 130);
  color: rgb(255, 255, 255);
}
`;

const ColumnContainer = styled.div`
  float: left;
  width: 25%;
  &:hover {
    cursor: pointer;
  }
`;

// transition: transform 300ms cubic-bezier(0.455 0.03 0.515 0.995)

// Deleted
// padding: 0 20px;

const CardContainer = styled.div`
  height: auto;
  width: 250px;
  position: relative;
  border-color: transparent;
  border-width: 16px 8px 0px;
  display: block;
  flex-shrink: 0;
  flex-basis: auto;
  float: left;
  display: table;
`;

// Deleted
// padding: 40px;
// border-style: solid;

const ContentSlider = styled.div`
width: 980px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
overflow-x: hidden;
`;

// Testing
// Position: static;
// original width: 960px;

// Deleted
// overflow-x: scroll;
// overflow-x: auto;
// overflow-x: hidden;
// justify-content: center;
// transition: transform 300ms;
// transform: translateX(-33%);

const MainContainer = styled.div`
display: flex;
flex-direction: column;
height: 304;
margin: 32px 10%;
box-sizing: border-box;
`;

const SimilarContainer = styled.div`
display: flex;
flex-direction: column;
height: 304;
box-sizing: border-box;
`;

// Deleted
// margin: 32px 0px;

const TitleContainer = styled.div`
width: inherit
height: 100px;
`;

const TitleHeading = styled.h3`
 color: rgb(59, 65, 68);
 font-family: Roboto;
 font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
`;

export {PropImage, CardContainer, ContentSlider, SimilarContainer, TitleContainer, TitleHeading, PropImageFrame, ColumnContainer, MainContainer, SeeMoreHomes, TakeALook};