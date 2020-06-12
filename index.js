const core = require('@actions/core');
const fs = require('fs');

try {
	const manifest = core.getInput('manifest-path');
	const jsonObject = JSON.parse(fs.readFileSync(manifest, 'utf8'));
	core.setOutput("version", jsonObject.version);
} catch (error) {
	core.setFailed(error.message);
}