const mongoose = require("mongoose");
mongoose
    .connect("mongodb+srv://"+process.env.DB_USER_PASS + "@cluster0.ckji5.mongodb.net/teams",
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    )
    .then(() => console.log('connected to MongoDB'))
    .catch((err) => console.log("Failed to connect to MongoDB", err)); 