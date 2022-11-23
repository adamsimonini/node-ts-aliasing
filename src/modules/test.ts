import "module-alias/register";

const path = require("path");

export default (app: any) =>
	class Endpoints {
		constructor() {
			app.get("/test", function (req: any, res: any) {
				res.sendFile(path.join(__dirname, "../test_page.html"));
				// res.sendFile("@/test_page.html");
			});
		}
	};
