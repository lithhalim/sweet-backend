const { TEXT, INTEGER } = require("sequelize")
const { STRING } = require("sequelize")
const database=require("../../database/database")

const  postes_model=database.define("posts",{
    postid:{
      type:TEXT
    },
    image:{
      type:TEXT,
    },
    Product:{
        type:TEXT,
    },
    price:{
      type:TEXT
    },
    quantity:{
      type:TEXT,
    },
    catagory:{
      type:TEXT,
    }
})


//---------------------------------------------all relation on postes ------------------------------------//
const post_comment=require("./post_comment");

postes_model.hasMany(post_comment,{
    constraints: false,
    timestamps: false,
    foreignKey:"commentOnPostId",
    sourceKey:"postid"
  })
  post_comment.belongsTo(postes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"commentOnPostId",
    targetKey:"postid"
  })






module.exports=postes_model