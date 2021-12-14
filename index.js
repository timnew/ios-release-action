const core = require("@actions/core");
const exec = require("@actions/exec");

async function run() {
  try {
    const apiKeyFilePath = core.getInput("api-key-file-path")
    const apiKyeContent = core.getInput("api-key-content")

    // Check p8 file
    if (apiKeyFilePath === '' && apiKyeContent === '') {
      throw new Error("Either api-key-file-path or api-key-content must be provided");
    }
    if (apiKeyFilePath !== '' && apiKyeContent !== '') {
      throw new Error("Only one value of api-key-file-path and api-key-content should be provided");
    }

    // Setup ENV
    process.env.IPA_PATH = core.getInput("ipa-path");

    process.env.API_KEY_ID = core.getInput("api-key-id");
    process.env.API_KEY_ISSUER = core.getInput("api-key-issuer");
    process.env.API_KEY_FILE_PATH = core.getInput("api-key-file-path");
    process.env.API_KEY_CONTENT = core.getInput("api-key-content");


    // Execute build.sh
    await exec.exec(`bash ${__dirname}/../build.sh`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
