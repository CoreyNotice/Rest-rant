const React = require('react')
const Def = require('../default')


function index () {
    let placesFormatted = places.map((place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              {/* {placesFormatted} */}
          </main>
      </Def>
  )
  }
  
  

module.exports = index