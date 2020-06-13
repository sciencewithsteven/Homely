import styled from 'styled-components';


const SimilarPrevContainer = styled.button`
height: 32px;
width: 32px;
position: absolute;
top: 76%;
left: calc(11% - 7px);
background-color: rgb(255, 255, 255);
border-radius: 2em;
z-index: 1;
border-width: 1px;
border-style: solid;
border-color: rgb(232, 233, 234);
&:hover {
  cursor: pointer;
}
&:active {
  background-color: rgb(202, 202, 205);
  border-color: rgb(202, 202, 205);
}
`;

const SimilarNextContainer = styled.div`
height: 32px;
width: 32px;
position: absolute;
top: 76%;
left: calc(50% - -358px);
background-color: rgb(255, 255, 255);
border-radius: 2em;
z-index: 1;
border-width: 1px;
border-style: solid;
border-color: rgb(232, 233, 234);
&:hover {
  cursor: pointer;
}
&:active {
  background-color: rgb(202, 202, 205);
  border-color: rgb(202, 202, 205);
}
`;

const NewestPrevContainer = styled.div`
height: 32px;
width: 32px;
position: absolute;
top: 116%;
left: calc(11% - 7px);
background-color: rgb(255, 255, 255);
border-radius: 2em;
z-index: 1;
border-width: 1px;
border-style: solid;
border-color: rgb(232, 233, 234);
&:hover {
  cursor: pointer;
}
&:active {
  background-color: rgb(202, 202, 205);
  border-color: rgb(202, 202, 205);
}
`;

const NewestNextContainer = styled.div`
height: 32px;
width: 32px;
position: absolute;
top: 116%;
left: calc(50% - -358px);
background-color: rgb(255, 255, 255);
border-radius: 2em;
z-index: 1;
border-width: 1px;
border-style: solid;
border-color: rgb(232, 233, 234);
&:hover {
  cursor: pointer;
}
&:active {
  background-color: rgb(202, 202, 205);
  border-color: rgb(202, 202, 205);
}
`;

const PrevPng = styled.img`
height: 15px;
width: 15px;
position: absolute;
top: 26%;
left: 30%;
&:hover {
  cursor: pointer;
}
`;

const NextPng = styled.img`
height: 15px;
width: 15px;
position: absolute;
top: 26%;
left: 30%;
&:hover {
  cursor: pointer;
}
`;

const Png1 = styled.img`
width: 85%;
height: 80%;
display: flex;
`;

const Png2 = styled.img`
width: 85%;
height: 80%;
`;

const HeartContainer = styled.div``;

const HeartFirstImg = styled.img`
width: 30px;
height: 30px;
color: red;
size; 200px;
grid-column: 18 / span 8;
grid-row: 1;
padding-top: 15%;
z-index: 1;
&:hover {
  cursor: pointer;
  transform: scale(1.25);
}
`;

const RedHeartFirstImg = styled.img`
width: 30px;
height: 30px;
color: red;
size; 200px;
grid-column: 18 / span 8;
grid-row: 1;
padding-top: 15%;
z-index: 1;
&:hover {
  cursor: pointer;
  transform: scale(1.25);
}
`;

const HeartBottomImg = styled.img`
width: 30px;
height: 30px;
color: red;
size; 200px;
grid-column: 18 / span 8;
grid-row: 1;
padding-top: 15%;
z-index: 1;
&:hover {
  cursor: pointer;
  transform: scale(1.25);
}
`;

const RedHeartBottomImg = styled.img`
width: 30px;
height: 30px;
color: red;
size; 200px;
grid-column: 18 / span 8;
grid-row: 1;
padding-top: 15%;
z-index: 1;
&:hover {
  cursor: pointer;
  transform: scale(1.25);
}
`;

export {SimilarPrevContainer, NewestPrevContainer, PrevPng, SimilarNextContainer, NewestNextContainer, NextPng, HeartContainer, HeartFirstImg, RedHeartFirstImg, HeartBottomImg, RedHeartBottomImg, Png1, Png2};