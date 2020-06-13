import React from 'react';
import {BbsfContainer, BbsfBedContainer, BbsfBathContainer, BbsfSfContainer,  SvgBed, SvgBath, SvgSf} from '../styles/Stats_1.js';
import {AddressContainer, PriceContainer, StatsContainer, CityStateContainer, StreetContainer} from '../styles/Stats_2.js';
import {Price, BedNum, BathNum, SfNum, Street, CityState} from '../styles/Stats_2.js';

// const priceConvert = new Intl.NumberFormat('en', {style: 'currency', currency: 'USD'}).format(props.propStats.current_list_price)

const SimilarStats = (props) => (
    <StatsContainer >
      <PriceContainer>
        <Price>{new Intl.NumberFormat('en', {style: 'currency', currency: 'USD'}).format(props.propStats.current_list_price)}</Price>
      </PriceContainer>
      <BbsfContainer>
        <BbsfBedContainer>
          <SvgBed src="https://webstockreview.net/images/clipart-bed-svg-2.png">
          </SvgBed>
          <BedNum>
              {`${props.propStats.num_bed}bd`}
          </BedNum>
        </BbsfBedContainer>
        <BbsfBathContainer>
          <SvgBath src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrawWK6_gDFqeMU-Uc2yB1WhiWbTxSQsCW1TDK1p26P_XtNnYD&usqp=CAU">
          </SvgBath>
          <BathNum>
              {`${props.propStats.num_bath}ba`}
          </BathNum>
        </BbsfBathContainer>
        <BbsfSfContainer>
          <SvgSf src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbUDUKuWFM-CmkckoSG_rWBU-8GWIYPH23t4UPlhMyvxkDNh6R&usqp=CAU">
          </SvgSf>
          <SfNum>
              {`${new Intl.NumberFormat('en', {notation: 'standard'}).format(props.propStats.listing_num)}sqft`}
          </SfNum>
        </BbsfSfContainer>
      </BbsfContainer>
      <AddressContainer>
        <StreetContainer>
            <Street>
                {`${props.propStats.house_num} ${props.propStats.street_name}`}
            </Street>
        </StreetContainer>
        <CityStateContainer>
            <CityState>
                {`${props.propStats.city}, ${props.propStats.state}`}
            </CityState>
        </CityStateContainer>
      </AddressContainer>
    </StatsContainer>
)

// <div className="stat-box">
//                       <div className="stat-padding">
//                         <div className="price-box">
//                           <div className="price">
//                             {`$ ${item.current_list_price}`}
//                           </div>
//                         </div>
//                         <div className="bbsf-box">
//                           <div className="bbsf-bed">
//                             <div className="bbsf-bed-svg">
//                             </div>
//                             <div className="bbsf-bed-stat">
//                               {item.num_bed}
//                             </div>
//                           </div>
//                           <div className="bbsf-bath">
//                             <div className="bbsf-bath-svg">
//                             </div>
//                             <div className="bbsf-bath-stat">
//                               {item.num_bath}
//                             </div>
//                           </div>
//                           <div className="bbsf-sf">
//                             <div className="bbsf-sf-svg">
//                               <img className={styles.bedSvg} src="https://webstockreview.net/images/clipart-bed-svg-2.png"/>
//                             </div>
//                             <div className="bbsf-sf-stat">
//                               {`SQ-FT`}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="street-box">
//                           <div className="street">
//                           </div>
//                         </div>
//                         <div className="city-state-box">
//                           <div className="city-state">
//                             {`${item.city} ${item.state}`}
//                           </div>
//                         </div>
//                       </div>
//                       </div>
//                   </div>

export default SimilarStats;