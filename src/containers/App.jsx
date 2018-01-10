import React from 'react';
import TopFilter from '../components/topFilter.jsx';
import BottomFilter from '../components/bottomFilter.jsx';
import AdvertFilter from '../components/adverts.jsx';
import GameCard from '../components/card.jsx'; 
import {game_data} from '../common/utils';

export default class App extends React.Component {
  render() {

	    return (
   		<div>
   			<TopFilter />

	      	<GameCard />
      		<BottomFilter />
      	</div>
      );
  	}
}
