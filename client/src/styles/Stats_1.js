import styled from 'styled-components';

const BbsfContainer = styled.div`
  height: auto;
  width: 100%;
  padding: 1px;
  display: flex;
  flex-direction: row;
`;

const BbsfBedContainer = styled.span`
height: 20px;
width: 20%;
padding: 0px 4px 0px 0px;
flex-direction: row;
align-items: center;
display: flex;
`;

const BbsfBathContainer = styled.span`
height: 20px;
width: 20%;
padding: 0px 4px 0px 0px;
flex-direction: row;
align-items: center;
display: flex;
`;

const BbsfSfContainer = styled.span`
height: 20px;
width: 40%;
padding: 0px 4px 0px 0px;
flex-direction: row;
align-items: center;
display: flex;
`;

const SvgBed = styled.img`
  height: 15px;
  width: 15px;
`;

//BATH
// https://upload.wikimedia.org/wikipedia/commons/f/fe/Font_Awesome_5_solid_bath.svg

const SvgBath = styled.img`
height: 15px;
width: 15px;
`;

const SvgSf = styled.img`
height: 15px;
width: 15px;
`;

export {BbsfContainer, BbsfBedContainer, BbsfBathContainer, BbsfSfContainer,  SvgBed, SvgBath, SvgSf};