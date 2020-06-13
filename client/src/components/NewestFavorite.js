import React from 'react';
import {HeartFirstImg, RedHeartFirstImg, HeartBottomImg, RedHeartBottomImg} from '../styles/Buttons.js';
import EmptyHeart from '../png/empty_heart.png';
import RedHeart from '../png/red_heart.png';

function NewestFavorite(props) {
  const {favorite} = props.propData;

      if (favorite) {
          return (
              <React.Fragment>
              <HeartFirstImg
              src={EmptyHeart}
              hidden={false}
              onClick={() => alert("Hi")} />
              </React.Fragment>
          );
      } else {
          return (
              <React.Fragment>
              <RedHeartFirstImg
              src={RedHeart}
              hidden={false}
              onClick={() => alert("Bye")}/>
              </React.Fragment>
          );
      }
  }

export default NewestFavorite;