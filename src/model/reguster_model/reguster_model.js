const {STRING,TEXT,VIRTUAL,ENUM}=require("sequelize")

const database=require("../../database/database")

const reguster = database.define('regusters', {
    // Model attributes are defined here
    regusterid:{
      type:STRING,
    },
    fullName: {
      type:STRING,
      allowNull:false
    },
    email: {//VERTUAL MEAN DONT SAVED IN DATABASE YOU CAN USE IN BACL END YOU JUST UNSERTET LIKE PROPERTY IN OBJECT
      type: STRING,
      allowNull: false
    },
    password: {//VERTUAL MEAN DONT SAVED IN DATABASE YOU CAN USE IN BACL END YOU JUST UNSERTET LIKE PROPERTY IN OBJECT
      type: STRING,
      allowNull: false
    },
    gender: {//VERTUAL MEAN DONT SAVED IN DATABASE YOU CAN USE IN BACL END YOU JUST UNSERTET LIKE PROPERTY IN OBJECT
      type: STRING,
      defaultValue:""
    },
    role:{//ENUM MEAN YOU NEED TO SELECT ON OF THISE JUST YOU CANT INSERT ANOTHER TYPE
      type:ENUM('admin','writer','editor','user'),
      defaultValue:"user",
    },
    image: {
      type: TEXT,//String Varchar(3360)
      defaultValue:"https://thumbs.dreamstime.com/z/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-user-icon-vector-male-person-symbol-profile-circle-avatar-sign-115922533.jpg",
      // allowNull defaults to true
    },
    isOnline:{
      type:STRING,
      defaultValue:false
    },
    verification:{
      type: STRING,//String Varchar(3360)
      defaultValue:"https://thumbs.dreamstime.com/z/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-user-icon-vector-male-person-symbol-profile-circle-avatar-sign-115922533.jpg",
      // allowNull defaults to true
    },
    accessToken: {//VERTUAL MEAN DONT SAVED IN DATABASE YOU CAN USE IN BACL END YOU JUST UNSERTET LIKE PROPERTY IN OBJECT
      type: VIRTUAL,
    },
    refreshtoken: {
      type:TEXT,
    },
    action:{ 
      type: VIRTUAL,//the data will get all the type
      get(){
        const acl={
          user:['read'],
          writer:['read','create'],
          editor:['read','create','update'],
          admin:['read','create','update']
        }
        //becuse this.role come as string we use [] to invoke not .
        return acl[this.role];
      }
    }
  }, {
    timestamps: false
  });

//-------------------------------------ALL RELATION REGUSTER---------------------------------------------//
const post_model=require("../../model/postes-model/post-model");

  reguster.hasMany(post_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"personDoPostId",
    sourceKey:"regusterid"
  })
  post_model.belongsTo(reguster,{
    constraints: false,
    timestamps: false,
    foreignKey:"personDoPostId",
    targetKey:"regusterid"
  })


  
  module.exports =reguster