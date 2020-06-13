import React from 'react';
import Prev from '../png/prev.png';
import Next from '../png/next.png';
import {NewestPrevContainer, PrevPng, NewestNextContainer, NextPng,} from '../styles/Buttons.js';

// onClick={props.prevChangeState()}
// onClick={props.nextChangeState()}

const NewestButtons = (props) => (
  <React.Fragment>
      <NewestPrevContainer
          onClick={props.prev}
          disabled={props.newCard === 0}>
          <PrevPng
              src={Prev}>
          </PrevPng>
    </NewestPrevContainer>
    <NewestNextContainer
        onClick={props.next}
        disabled={props.newCard === props.newData.length-1}>
          <NextPng
              src={Next}>
          </NextPng>
    </NewestNextContainer>
  </React.Fragment>
)

export default NewestButtons;