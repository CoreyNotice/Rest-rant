const router = require('express').Router()
const places= require('../models/places')

router.get('/', (req, res) => {
    // let places = [{
    //     name: 'H-Burgers',
    //     city: 'Queens',
    //     state: 'NY',
    //     cuisines: 'Smokehouse Burger',
    //     pic: 'images/burger.jpg'
    //   }, {
    //     name: 'CMH Cakes',
    //     city: 'Bronx',
    //     state: 'NY',
    //     cuisines: 'Tea, Bakery',
    //     pic: 'images/cakepic.jpg'
    //   }]
      

    res.render('places/index',{places})

})

router.get('/new', (req, res) => {
    
    res.render('places/new')
  })
  
 
    router.post('/', (req, res) => {
      // console.log(req.body)
      if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
        req.body.city = 'Anytown'
      }
      if (!req.body.state) {
        req.body.state = 'USA'
      }
      let anArray = Array.from(places);
      anArray.push(req.body)
      res.redirect('/places')
    })
    
   

module.exports = router

