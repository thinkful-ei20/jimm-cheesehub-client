import React from 'react';
import {connect} from 'react-redux';
import { fetchCheeses } from '../actions/cheeseActions';



export class CheeseList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCheeses());
    console.log(this.props.cheeses);
	}

  createListItems(){
    //console.log(this.props.cheeses);
    const cheeses = this.props.cheeses.map((cheese, index) => {
      return (
        <li key={index}>
          {cheese}
        </li>
      );    
    });
    return cheeses;
  }
  
  render() {
    return (
      <section>
        <ul>
          {this.createListItems()}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    cheeses: state.cheeses,
  }
};

export default connect(mapStateToProps)(CheeseList);