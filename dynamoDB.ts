import AWS from "aws-sdk";
import "dotenv/config";

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "todo-api";


// get all todos
const getTodos = async () => {
  const params = {
    TableName: TABLE_NAME
  }

  return await dynamoClient.scan(params).promise();
}

// get one todo
const getTodoById = async (id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {id}
  }

  return await dynamoClient.get(params).promise(); 
}

// add or update todo
const addOrUpdateTodo = async (title: object) => {
  const params = {
    TableName: TABLE_NAME,
    Item: title
  }

  return await dynamoClient.put(params).promise()
}

// delete todo
const deleteTodo = async (id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {id}
  }

  return await dynamoClient.delete(params).promise()
}

export {dynamoClient, getTodos, getTodoById, addOrUpdateTodo, deleteTodo}
