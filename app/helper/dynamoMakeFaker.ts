import {dynamodb, dynamodbClient} from "../resource/dynamodb";
import * as faker from "faker";

const TABLE_NAME = 'articles';

let paramsNewTable = {
    TableName: TABLE_NAME,
    KeySchema: [
        {AttributeName: "id", KeyType: "HASH"}
    ],
    AttributeDefinitions: [
        {AttributeName: "id", AttributeType: "N"}
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(paramsNewTable, (err, data) => {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});


for (let i: number = 0; i < 100; i++) {

    let params = {
        TableName: TABLE_NAME,
        Item: {
            "id": faker.random.number(999999999),
            "title": faker.name.title(),
            "date": faker.date.recent(),
            "body": faker.lorem.paragraph()
        }
    };

    dynamodbClient.put(params, (err, data) => {
        if (err) {
            console.error("Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", data);
        }
    });
}