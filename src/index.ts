// this module-alias package does all the heaving lifting, and must be importated at the upper-most place within your TS file: https://www.npmjs.com/package/module-alias
import "module-alias/register";

import Express from "express";

// these are my extra paths
import ExtraEndpoints from "@endpoints/other";
import TestEndpoints from "@modules/test";

const PORT = 3000;
const path = require("path");
const app = Express();

// adding extrapaths as middleware
let extraEndpoints = ExtraEndpoints(app);
let testEndpoints = TestEndpoints(app);

let extra = new extraEndpoints();
let test = new testEndpoints();

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`);
});
