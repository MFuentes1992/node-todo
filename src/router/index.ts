import express from "express";
import Controller from "../controller";

const router = express.Router();

//-- Add todo
router.post("/add/", Controller.AddTodo);
//-- Update todo
router.put("/update/",Controller.UpdateTodo );
//-- Get todos
router.get("/todos/", Controller.GetTodos);
export default router;