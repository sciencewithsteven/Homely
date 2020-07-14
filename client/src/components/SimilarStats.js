import React from 'react';
import {BbsfContainer, BbsfBedContainer, BbsfBathContainer, BbsfSfContainer,  SvgBed, SvgBath, SvgSf} from '../styles/Stats_1.js';
import {AddressContainer, PriceContainer, StatsContainer, CityStateContainer, StreetContainer} from '../styles/Stats_2.js';
import {Price, BedNum, BathNum, SfNum, Street, CityState} from '../styles/Stats_2.js';

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

export default SimilarStats;