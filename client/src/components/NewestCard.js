import React from 'react';
import NewestStats from './NewestStats.js';
import NewestButtons from './NewestButtons.js';
import NewestFavorite from './NewestFavorite.js';
import {HeartImg, RedHeartImg} from '../styles/Buttons.js';
import {PropImage, CardContainer, ContentSlider, SimilarContainer, TitleContainer, TitleHeading, PropImageFrame, ColumnContainer, SeeMoreHomes, TakeALook} from '../styles/Card.js';

const currentListing = "143 Belmont Ave";

const NewestCard = (props) => (
  <SimilarContainer>
  <TitleContainer>
      <TitleHeading>{`New Listings near ${currentListing}`}</TitleHeading>
  </TitleContainer>
  <ContentSlider>
      <NewestButtons
          prev={props.prev}
          next={props.next}
          newCard={props.newCard}
          newData={props.newData}/>
      {props.newData.map((item, i) => {
          return (
              <ColumnContainer className={`card_${i}`} key={i}>
              <a href={item.prop_url} target="_blank">
                  <CardContainer>
                      <PropImageFrame>
                          <NewestFavorite
                              key={i}
                              propData={item}
                              savedProp={props.savedProp}/>
                          <PropImage
                              src={item.main_pic_url}
                              width="1"
                              height="1"/>
                          </PropImageFrame>
                      <NewestStats propStats={item} />
                  </CardContainer>
                  </a>
              </ColumnContainer>
          )
      })}
      <SeeMoreHomes>
                <TakeALook>
                    Take a look
                </TakeALook>
            </SeeMoreHomes>
  </ContentSlider>
</SimilarContainer>
)

export default NewestCard;