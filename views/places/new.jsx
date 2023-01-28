const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
            <div>
                <label htmlFor='name'> Places Name</label>
                <input id='name' name='name' required/>
            </div>
            <div>
              <label htmlFor="pic">Place Picture</label>
              <input type="url" id="pic" name="pic" />
           </div>
           <div>
            <label htmlFor='city'>PLace's City</label>
            <input type='name' id='city' name='city' />
           </div>
           <div>
           <label htmlFor='city'>PLace's State</label>
            <input type='name' id='state' name='state' />
           </div>
           <div>
           <label htmlFor='Cuisines'>PLace's Cuisines</label>
            <input type='name' id='Cuisines' name='Cuisines' required />
           </div>
           <input type="submit" value="Submit"/>

            </form>
          </main>
        </Def>
    )
}

module.exports = new_form

