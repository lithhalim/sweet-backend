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
        type:STRING,
    },
    price:{
      type:INTEGER
    },
    quantity:{
      type:INTEGER,
    },
    catagory:{
      type:STRING,
    },
    personDoPostId:{
        type:STRING,
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

const post_like=require("./post_like");

postes_model.hasMany(post_like,{
    constraints: false,
    timestamps: false,
    foreignKey:"post_liked_id",
    sourceKey:"postid"
  })
  post_like.belongsTo(postes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"post_liked_id",
    targetKey:"postid"
  })






module.exports=postes_model