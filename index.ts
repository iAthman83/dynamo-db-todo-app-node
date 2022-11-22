import  express  from "express";
import {dynamoClient, addOrUpdateTodo,deleteTodo,getTodoById,getTodos} from './dynamoDB'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send("hello world")
})



const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('listening on port ', port)
})