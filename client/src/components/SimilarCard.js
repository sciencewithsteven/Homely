import React from 'react';
import SimilarStats from './SimilarStats.js';
import SimilarButtons from './SimilarButtons.js';
import SimilarFavorite from './SimilarFavorite.js';
import {HeartImg, RedHeartImg} from '../styles/Buttons.js';
import {PropImage, CardContainer, ContentSlider, SimilarContainer, TitleContainer, TitleHeading, PropImageFrame, ColumnContainer, SeeMoreHomes, TakeALook} from '../styles/Card.js';

const SimilarCard = (props) => (
    <SimilarContainer>
        <TitleContainer>
            <TitleHeading>Similar Homes You May Like</TitleHeading>
        </TitleContainer>
        <ContentSlider>
            <SimilarButtons
                prev={props.prev}
                next={props.next}
                simCard={props.simCard}
                similarData={props.similarData}/>
            {props.similarData.map((item, i) => {
                return (
                    <ColumnContainer className={`card_${i}`} key={i}>
                    <a href={item.prop_url} target="_blank">
                        <CardContainer>
                            <PropImageFrame>
                                <SimilarFavorite
                                    key={i}
                                    propData={item}
                                    savedProp={props.savedProp}/>
                                <PropImage
                                    src={item.main_pic_url}
                                    width="1"
                                    height="1"
                                    href={item.prop_url}/>
                                </PropImageFrame>
                            <SimilarStats propStats={item} />
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

export default SimilarCard;

