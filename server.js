// Dependencies
const Express = require('express');
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

// Sets up the Express Server
var server = Express();
var PORT = process.env.PORT || 3000;

//Handle routes 
server.use('/', htmlRoutes);
server.use('/api', apiRoutes);

//Listening to port
server.listen(PORT, () => {
    console.log("App listening on PORT ", PORT);
});