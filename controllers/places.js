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


module.exports = router

