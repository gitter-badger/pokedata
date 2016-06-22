import React, {Component} from 'react'
import { connect } from 'react-redux'
import { isEmpty } from '../helpers.js'
import SearchBar from '../containers/search-bar'
import PokemonDetail from '../containers/pokemon-detail'
import History from '../containers/history'

require('../css/semantic.css')
require('../css/style.css')

class App extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Favicon url={[require('../favicon.png')]}/>
        <div className='ui container'>
          <SearchBar />
          <PokemonDetail />
          <History />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { Pokémon: state.pokemon }
}

export default connect(mapStateToProps)(App)
