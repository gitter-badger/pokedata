import React, { Component } from 'react'
import { Dropdown } from 'stardust'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPokemon } from '../actions/index'

import { findKey } from 'lodash'
import { toTitleCase } from '../helpers'
import pokemonList from '../pokemon'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.selectItem = this.selectItem.bind(this)
  }

  componentDidMount () {
    $('#pokemon-search').dropdown()
    this.props.fetchPokemon(Math.floor(Math.random() * (pokemonList.length + 1)))
  }

  selectItem (event) {
    document.getElementById('detail-loader').className = ''
    this.props.fetchPokemon(parseInt(findKey(pokemonList, ['name', event.target.value]), 10) + 1)
  }

  generateList (pokemon) {
    let options = []

    pokemon.map(function(item) {
      options.push({
        "text": toTitleCase(item.name),
        "value": item.id
      })
    })
    console.log(options)
    return options
  }

  render () {
    const dropdownOptions = this.generateList(pokemonList)
    return (
      <Dropdown
        placeholder='Search for a Pokémon!'
        multiple={false}
        options={dropdownOptions}
        fluid
        selection
        search={true}
        onChange={this.selectItem}
      />
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPokemon }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
