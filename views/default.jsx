const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {html.children}
                <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
            </body>
        </html>
    )
}

module.exports = Def

