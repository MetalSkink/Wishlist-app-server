import mongoose from "mongoose";

export const dbConnection = async() => {
  try {
    await mongoose.connect(process.env.BD_CNN,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    console.log("Database online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar la BD")
  }
}
