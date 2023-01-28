const React = require('react')
const Def = require('./default')


function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                 <img src= '/images/casey-lee-awj7sRviVXo-unsplash.jpg'  alt= 'Salmon steak' />
              </div>
              <div>
                    Photo by <a href="Casey Lee">Casey Lee</a> on <a href="https://unsplash.com/@simplethemes">Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = home
