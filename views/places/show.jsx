const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            {data.place.image}
            <p>{data.place.cuisine}</p>
          </main>
         <div>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     

<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <label htmlFor='Delete'>Delete</label>
  <input type="submit" className="btn btn-danger" name='Delete'/>
</form> 
 </div>
        </Def>
    )
}
   


module.exports = show
