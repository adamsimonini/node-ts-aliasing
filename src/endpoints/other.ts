import "module-alias/register";

const path = require("path");

export default (app: any) =>
	class Endpoints {
		constructor() {
			app.get("/", function (req: any, res: any) {
				// unfortunately, typescript demands that sendFile receive an absolute path, and doesn't understand that module aliasing will resolve for one
				res.sendFile(path.join(__dirname, "../index.html"));
				// res.sendFile("@/test_page.html"); // would have liked to use this
			});
		}
	};
