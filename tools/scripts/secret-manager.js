const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const fs = require('fs');
const path = require('path');
const { cwd } = require('process');

//loads every local secrets in process.env needed to load GOOGLE_PROJECT_ID from process.env
require('dotenv').config({
	path: path.resolve(`${__dirname}../../../.env`)
});

//default version defined => latest version
async function accessSecret(version = 'latest') {
	try {
		if (!process.env.GOOGLE_PROJECT_ID) {
			throw "Please set the GOOGLE_PROJECT_ID enviroment variabele.";
		}

		const fullName = `projects/elewa-group/secrets/elewa-group-intercom-config/versions/${version}`;

		const keyFileLoc = `${__dirname}/../../${process.env.GOOGLE_PROJECT_ID}-secrets.json`;
		console.log(`Loading keyfile :: ${keyFileLoc}`);
		const file = fs.readFileSync(keyFileLoc).toString('utf-8');

		const key = JSON.parse(file);

		const client = new SecretManagerServiceClient({
			credentials: {
				client_email: key.client_email,
				private_key: key.private_key
			}
		});

		console.log(`Loaded keyfile :: ${__dirname}/../../${process.env.GOOGLE_PROJECT_ID}-secrets.json`)

		const [response] = await client.accessSecretVersion({ name: fullName });
		const payload = response.payload.data.toString();

		createDotenvFileFromGoogleSecret(payload);

		return payload;
	} catch (exception) {
		console.log(exception);
	}
}

/**
 * Creates a .env file from the payload of the Google Secret Manager.
 * @param {*} payload the payload of the secret that was loaded from Google Secret Manager.
 */
async function createDotenvFileFromGoogleSecret(payload) {
	//determine the path of the .env file
	//do we use different .env files for different environments? or do we overwrite the .env file for every environment?
	const targetPath = `${__dirname}/../../.env`;

	fs.writeFile(targetPath, payload, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log(`.env.${process.env.GOOGLE_PROJECT_ID}-secret file has been created at ${path.resolve(targetPath)}`);
			loadSelectedEnvironmentVariables();
		}
	});
};

/**
 * Loads the selected environment variables from the .env file that was loaded from Google Secret Manager. 
 * Now these variables are available from process.env.
 */
async function loadSelectedEnvironmentVariables() {
	require('dotenv').config({path: path.resolve(`${__dirname}/../../.env`)});
}

accessSecret();
