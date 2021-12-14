const core = require("@actions/core");
const exec = require("@actions/exec");

async function run() {
  try {

    // Check p8 file
    if (!(core.getInput("api-key-file-path") ^ core.getInput("api-key-key-content"))) {
      throw new Error("api-key-file-path and api-key-key-content must be provided exactly one, not none, also not both.");
    }

    // Setup ENV
    process.env.IPA_PATH = core.getInput("ipa_path");

    process.env.API_KEY_ID = core.getInput("api-key-id");
    process.env.API_KEY_ISSUER = core.getInput("api-key-issuer");
    process.env.API_KEY_FILE_PATH = core.getInput("api-key-file-path");
    process.env.API_KEY_CONTENT = core.getInput("api-key-key-content");


    // Execute build.sh
    await exec.exec(`bash ${__dirname}/../build.sh`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
