const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
            <div className='form-group'>
                <label htmlFor='name'> Places Name</label>
                <input className='form-control' id='name' name='name' required/>
            </div>
            <div className='form-group'>
              <label htmlFor="pic">Place Picture</label>
              <input className='form-control' type="url" id="pic" name="pic" />
           </div>
           <div className='form-group'>
            <label htmlFor='city'>Place's City</label>
            <input className='form-control' type='name' id='city' name='city' />
           </div>
           <div className='form-group'>
           <label htmlFor='city'>Place's State</label>
            <input className='form-control' type='name' id='state' name='state' />
           </div>
           <div className='form-group'>
           <label htmlFor='Cuisines'>Place's Cuisines</label>
            <input className='form-control' type='name' id='Cuisines' name='Cuisines' required />
           </div>
           <input className='btn btn-primary' type="submit" value="Submit"/>

            </form>
          </main>
        </Def>
    )
}

module.exports = new_form

