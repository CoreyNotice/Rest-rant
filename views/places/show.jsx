const React = require('react')
const Def = require('../default')

function show (data) {
  let comments=(
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
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
            <h2>Comments</h2>
            {comments}
            <form method="POST" action={`/places/:id stub}?_method=PUT`}>
            <div className='row'>
            <div className='form-group col=sm-6'>
                <label htmlFor='author'> Author</label>
                <input className='form-control' id='author' name='author' type='text'/>
            </div>
            <pre>

            </pre>
            <div className='form-group'>
              <label htmlFor="content">Content </label>
              <input className='form-control' type="textarea" id="content" name="Content" />
           </div>
           <pre>
              
              </pre>
           <div className='form-group'>
            <label htmlFor='Star Rating'>Star Rating</label>
            <input className='form-control' type='number' id='Star  Rating' name='Star Rating'  />
           </div>
           <pre>
              
              </pre>
           <div className='form-group'>
           <label htmlFor='Rant<'>Rant</label>
            <input className='form-control' type='checkbox' id='Rant' name='Rant' />
           </div>
           <pre>
              
             </pre>
           <input className='btn btn-primary' type="submit" value="Submit"/>
           </div>
            </form>
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




