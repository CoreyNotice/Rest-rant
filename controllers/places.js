const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Burgers',
        city: 'Queens',
        state: 'NY',
        cuisines: 'Smokehouse Burger',
        pic: 'images/burger.jpg'
      }, {
        name: 'CMH Cakes',
        city: 'Bronx',
        state: 'NY',
        cuisines: 'Tea, Bakery',
        pic: 'images/cakepic.jpg'
      }]
      

    res.render('places/index',{places})

})

router.get('/new', (req, res) => {
    
    res.render('places/new')
  })
  
  router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  

module.exports = router

