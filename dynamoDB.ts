import AWS from "aws-sdk";
import "dotenv/config";

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "todo-api";

const getTodos = async () => {
  const params = {
    TableName: TABLE_NAME
  }

  const todos = await dynamoClient.scan(params).promise();
  console.log(todos)
  return todos
}

getTodos()
