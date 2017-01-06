import {dynamodb} from "../resource/dynamodb";

const TABLE_NAME = 'articles';

dynamodb.deleteTable({TableName: TABLE_NAME}, (err, data) => {
    if (err) {
        console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});