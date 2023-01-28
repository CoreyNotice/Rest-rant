const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
         <head>
               
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
          <main>
              {/* <h1>404: PAGE NOT FOUND</h1> */}
              <div>
                 <img src= '/images/404.webp'   alt= '404 image' />
              </div>
              <div>
                    Photo by <a href="ROBYN COLLINGE">ROBYN COLLINGE</a> on <a href="https://www.getfeedback.com/resources/ux/fantastically-funny-404-pages/">Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
