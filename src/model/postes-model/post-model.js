const { TEXT, INTEGER } = require("sequelize")
const database=require("../../database/database")



const  postes_model=database.define("posts",{
    Price:{
      type:INTEGER
    },
    calories:{
        type:TEXT,
    },
    categories:{
      type:TEXT
    },
    description:{
      type:TEXT,
    },
    popularity:{
      type:TEXT,
    },
    productName:{
      type:TEXT,
    },
    type:{
      type:TEXT,
    },
    postId:{
      type:TEXT,
    },
    quantity:{
      type:INTEGER,
      defaultValue:1
    }
})


//---------------------------------------------all relation on postes ------------------------------------//
const post_comment=require("./post_comment");

postes_model.hasMany(post_comment,{
    constraints: false,
    timestamps: false,
    foreignKey:"commentOnPostId",
    sourceKey:"postId"
  })
  post_comment.belongsTo(postes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"commentOnPostId",
    targetKey:"postId"
  })




const post_Images=require("./post_Images");

postes_model.hasMany(post_Images,{
    constraints: false,
    timestamps: false,
    foreignKey:"ImageOnPostId",
    sourceKey:"postId"
  })
  post_Images.belongsTo(postes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"ImageOnPostId",
    targetKey:"postId"
  })


module.exports=postes_model