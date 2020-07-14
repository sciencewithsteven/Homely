import React from 'react';
import axios from 'axios';
import SimilarCard from './SimilarCard.js';
import NewestCard from './NewestCard.js';
import {MainContainer} from '../styles/Card.js';
import image1 from '../png/image1.png';
import image2 from '../png/image2.png';
import {Png1, Png2} from '../styles/Buttons.js';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      similar: [],
      similarArr: [],
      similarCard: 0,
      newlyListed: [],
      newlyListedArr: [],
      newlyListedCard: 0
    }
    this.previousSimilar = this.previousSimilar.bind(this);
    this.nextSimilar = this.nextSimilar.bind(this);
    this.previousNew = this.previousNew.bind(this);
    this.nextNew = this.nextNew.bind(this);
    this.savedSimilar = this.savedSimilar.bind(this);
    this.savedNewlyListed = this.savedNewlyListed.bind(this)
  }

  componentDidMount(){
    this.similarFetch();
    this.newlyListedFetch();
  }

  similarFetch(){
    axios('/home/similar')
    .then(results => {
      let initialCArds = results.data
      let setCardArray = initialCArds.slice(0, 12)
      console.log('similarResults', results.data[0], results.data[1], results.data[2])
      this.setState({similar: results.data,
        similarArr: setCardArray})
    })
    .catch(error => {
      console.error(error)
    })
  }

  newlyListedFetch(){
    axios('/home/newest')
    .then(results => {
      let initialCArds = results.data
      let setCardArray = initialCArds.slice(0, 12)
      console.log('newestResults', results.data)
      this.setState({newlyListed: results.data,  newlyListedArr: setCardArray})
    })
    .catch(error => {
      console.error(error)
    })
  }

  previousSimilar(){
    let {similarCard, similarArr, similar} = this.state;
    let previous = similarCard-4;
    let cardArray = similar.slice(similarCard, similarCard + 12);

    if (similarCard !== 0) {
      this.setState({similarCard: previous})
      this.setState({similarArr: cardArray})
    }
  }

  nextSimilar(){
    let {similarCard, similar} = this.state;
    let max = similar.length - 1;
    let next = similarCard + 4;
    let cardArray = similar.slice(next, similarCard + 12);

    if (similarCard !== (max - 2)) {
      this.setState({similarCard: next, similarArr: cardArray})
    }
  }

  previousNew(){
    let {newlyListedCard, newlyListed} = this.state;
    let previous = newlyListedCard - 4;
    let cardArray = newlyListed.slice(newlyListedCard, newlyListedCard + 12);

    if (newlyListedCard !== 0) {
      this.setState({newlyListedCard: previous, newlyListedArr: cardArray})
    }
  }

  nextNew(){
    let {newlyListedCard, newlyListed} = this.state;
    let max = newlyListed.length - 1;
    let next = newlyListedCard + 4;
    let cardArray = newlyListed.slice(next, newlyListedCard + 12);

    if (newlyListedCard !== (max - 2)) {
      this.setState({newlyListedCard: next, newlyListedArr: cardArray})
    }
  }

  savedSimilar(key){
    let {similar} = this.state
    let favorite = similar[key].favorite;

    if (favorite === true){
      this.state({favorite: false})
    } else {
      this.state({favorite: true})
    }
  }

  savedNewlyListed(key){
    let {newlyListed} = this.state
    let favorite = newlyListed[key].favorite;

    if (favorite === true){
      this.state({favorite: false})
    } else {
      this.state({favorite: true})
    }
  }

  render() {
    let {similar, similarArr, similarCard, newlyListed, newlyListedArr, newlyListedCard} = this.state;

    return (
      <MainContainer>
      <Png1
          src={image1}>
      </Png1>
          <SimilarCard
              similarData={similarArr}
              simCard={similarCard}
              prev={this.previousSimilar}
              next={this.nextSimilar}
              faveProp={this.savedSimilar}
          />
          <NewestCard
              newData={newlyListedArr}
              newCard={newlyListedCard}
              prev={this.previousNew}
              next={this.nextNew}
              faveProp={this.savedNewlyListed}
            />
        <Png2
            src={image2}>
        </Png2>
      </MainContainer>
    )
  }
}

export default App
