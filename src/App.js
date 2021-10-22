
import './App.css';
import people from './people.json'

import React, { Component } from 'react'

export default class App extends Component {
  state = { peoples: people };


  onClickBtn = () => {
    document.getElementById('cards').style.display = 'none'
    document.getElementById('cardCount').innerText = '0'
  };

  render() {
    return (
      <div className="CardHolder">
        <header>
          <span> <span id="cardCount">5</span> birthdays today</span>
        </header>
        <section className="cards" id="cards">
          {
            this.state.peoples.map((cards, i) => {
              return (
                <div className="card" key={i.toString()}>
                  <div className>
                    <img src={cards.pic} />
                  </div>
                  <div className="text">
                    <span className="name">{cards.name}</span>
                    <span className="age">{cards.age}</span>
                  </div>
                </div>
              )
            })
          }

        </section>
        <div className="clearAll" onClick={this.onClickBtn}>Clear All</div>
      </div>
    )
  }
}


