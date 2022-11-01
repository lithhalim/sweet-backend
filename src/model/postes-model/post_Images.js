const { TEXT } = require("sequelize")
const { STRING } = require("sequelize")
const database=require("../../database/database")

module.exports=database.define("postImages",{
    ImageId:{
        type:STRING,
    },
    ImageOnPostId:{
        type:TEXT,
    }
})


