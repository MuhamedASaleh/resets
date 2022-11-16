
const app = require(`express`).Router()
const auth = require(`../middleWare/auth`)

//#region login
const loginValidation = require(`../middleWare/loginValidation`)
const loginController = require(`../controller/user/login`)
app.post(`/login`,loginValidation,loginController)
//#endregion 


const restController = require(`../controller/restaurant/addRestaurant`)
app.post(`/restaurant`,restController)


const proudControl = require(`../controller/prouduct/prouduct`)
app.post(`/addProduct`,proudControl)

const resetContol = require(`../controller/reset/reset`)
app.get('/myReset',auth,resetContol)


const resetDetails = require(`../controller/reset/resetDetails`)
app.get('/resetD',auth,resetDetails)



module.exports = app