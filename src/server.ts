import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sequelize } from "./DAO/DAO";
import router from "./router";
//-- Declare app variable
const app = express();
//-- Sync DB
sequelize.sync();

//-- User cors policy
app.use(cors());
//-- parse JSON
app.use(express.json());
//-- Parse form data /x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/v1/status", (req: any, res: any)=>{
    res.json({status: "online"});
});

app.use("/api/v1", router);

export default app;