import mongoose from "mongoose"



// export const ConnectDB = async ()=>{
  
  // await mongoose.connect('mongodb+srv://nadiafahmi1:norhan01551230390@cluster0.kn8gsgu.mongodb.net/todo-app');
  // console.log("DB Connected")
// }
//mongodb+srv://nadiafahmi1:<password>@cluster0.kn8gsgu.mongodb.net/

export const ConnectDB = async ()=>{

  try{
    await mongoose.connect(process.env.MOGODB_URI);
    console.log("DB Connected")

  }catch(error){
    console.log(error)
  }
}

