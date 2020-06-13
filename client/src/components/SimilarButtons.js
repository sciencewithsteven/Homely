import React from 'react';
import Prev from '../png/prev.png';
import Next from '../png/next.png';
import {SimilarPrevContainer, PrevPng, SimilarNextContainer, NextPng,} from '../styles/Buttons.js';

// onClick={props.prevChangeState()}
// onClick={props.nextChangeState()}

const SimilarButtons = (props) => (
  <React.Fragment>
      <SimilarPrevContainer
          onClick={props.prev}
          disabled={props.simCard === 0}>
          <PrevPng
              src={Prev}>
          </PrevPng>
    </SimilarPrevContainer>
    <SimilarNextContainer
        onClick={props.next}
        disabled={props.simCard === props.similarData.length-1}>
          <NextPng
              src={Next}>
          </NextPng>
    </SimilarNextContainer>
  </React.Fragment>
)

export default SimilarButtons;