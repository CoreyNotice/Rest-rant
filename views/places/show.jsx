const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            
    <div className="row"/>
      <div className="col-sm-6"></div>
            <img src='{data.place.image}' />
            <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
        <h2>
          Description
        </h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
    
      <div className="col-sm-6"/>
            <p>{data.place.cuisine}</p>
          </main>
          <a href="{`/places/${data.id}/edit" className="btn btn-warning"> 
  Edit
</a>  
<pre>



</pre>
<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form>     

        </Def>
    )
}

module.exports=show
