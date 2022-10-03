const path = require('path');
const express = require("express");
// const routes = require("./routes/routes");
const app = express();
const port = process.env.PORT || 3030;
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'))
app.listen(port, (req, res) => {
    console.log(`corriendo en el puerto ${port} 💻`)
});
// app.use(express.static(path.join(__dirname, '../public')));

// app.use(routes);