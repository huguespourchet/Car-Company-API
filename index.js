const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');

//ADD Routers
const customersRoutes = require("./routes/customers.route");
const employeesRoutes = require("./routes/employees.route");
const officesRoutes = require("./routes/offices.route");
const ordersRoutes = require("./routes/orders.route");
const productsRoutes = require("./routes/products.route");
const paymentsRoutes = require("./routes/payments.route");
const postsRoutes = require("./routes/posts.route");
const models = require('./models');

//ADD Swagger Modules
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//ADD MODELS
const Post = require("./services/posts.service");
const Comment = require("./services/comments.service");
const sequelize  = require("./config/db2.config");

//Pour BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', './views')
app.set('view engine', '.hbs');
app.engine(
    'hbs',
    engine({
        extname: ".hbs",
        defaultLayout: "",
        layoutsDir: "",
    })
);

//ADD dotenv
const dotenv = require("dotenv");
dotenv.config();
// Static Files
app.use(express.static('public'));
app.use('/img', express.static(__dirname + 'public/img'));
// Templating Engine
app.set('views', './views');
app.set('view engine', 'hbs');
//enable CORS

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


//later (this is a middleware)
app.use(bodyParser.json());

//Initialisation de Swagger
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "MYSQL EXPRESS",
            description: "API documentation",
            contact: {
                name: "Hugues Pourchet",
            },
            servers: [`http://localhost:${process.env.PORT}/`],
        },
    }),
    apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/customers",customersRoutes);
app.use("/employees",employeesRoutes);
app.use("/offices",officesRoutes);
app.use("/orders",ordersRoutes);
app.use("/products",productsRoutes);
app.use("/payments",paymentsRoutes);
app.use("/posts",postsRoutes);

//Synchronize Sequelize
Post.hasMany(Comment);
Comment.belongsTo(Post);

sequelize.sync()
    .then(console.log("Sequelize synchronized successfully"))
    .catch((error)=>{console.log("Sequelize failed synchronizing ", error)})

//Sync Database
models.sequelize.sync().then(function() {
    console.log('La base de données fonctionne bien')
}).catch(function(err) {
    console.log(err, "Quelque chose s'est mal passé avec la mise à jour de la base de données!")
});

app.listen(process.env.PORT,()=>{
    console.log(`Le serveur ecoute sur le port ${process.env.PORT}`);
});




