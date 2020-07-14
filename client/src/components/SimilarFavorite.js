import React from 'react';
import {HeartFirstImg, RedHeartFirstImg, HeartBottomImg, RedHeartBottomImg} from '../styles/Buttons.js';
import EmptyHeart from '../png/empty_heart.png';
import RedHeart from '../png/red_heart.png';

function SimilarFavorite(props) {
  const {favorite} = props.propData;
  var heartsUp;

    if (heartsUp === undefined) {
      if (favorite) {
        heartsUp = true;
        return (
          <React.Fragment>
              <HeartFirstImg
                  src={EmptyHeart}
                  hidden={false}
                  onClick={() => alert("Hi")} />
          </React.Fragment>
        );
      } else {
        heartsUp = false;
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
  }

export default SimilarFavorite;