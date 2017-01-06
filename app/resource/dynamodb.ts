import * as AWS from 'aws-sdk';
import {config} from '../config/dynamodb';

AWS.config.update(config);

export let dynamodb = new AWS.DynamoDB();
export let dynamodbClient = new AWS.DynamoDB.DocumentClient();