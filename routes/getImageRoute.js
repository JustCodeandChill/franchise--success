/** @format */

const axios = require("axios");
const keys = require("../config/keys");
var AWS = require("aws-sdk");
//AWS config
const config = require("config");
const S3Config = config.get("AWS.S3");
//cloud storage
const accessKeyId = S3Config.accessKeyId;
const secretAccessKey = S3Config.secretAccessKey;
const region = S3Config.region;
AWS.config.update({
	accessKeyId,
	secretAccessKey,
	region,
});

AWS.config.setPromisesDependency();

var S3 = require("aws-sdk/clients/s3");
var s3 = new S3({
	apiVersion: "2006-03-01",
	region: "ap-southeast-1",
});

module.exports = (app) => {
	app.get("/api/franchiseImages", async (req, res) => {

		console.log("---aws:");
		AWS.config.getCredentials(function (err) {
			if (err) console.log("ss: ", err.stack);
			// credentials not loaded
			else {
				console.log("Access key:", AWS.config.credentials.accessKeyId);
				console.log(
					"Secret access key:",
					AWS.config.credentials.secretAccessKey
				);
			}
		});

		let content = null;
		const data = await s3
			.listObjectsV2({
				Bucket: "top26images",
			})
			.promise();

		// console.log("data: ", data);
		// Must have response
		res.send(data);
	});
};
