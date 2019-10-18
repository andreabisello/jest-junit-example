module.exports = {
    preset: "jest-puppeteer",
    setupFilesAfterEnv: [  // NOT setupFiles
        "./custom-configuration.js"
    ],
    "reporters": [ "default", "jest-junit" ]
	
};