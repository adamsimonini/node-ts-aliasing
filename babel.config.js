// guide outlining protected aliases like "modules" https://dev.to/larswaechter/path-aliases-with-typescript-in-nodejs-4353

module.exports = function (api) {
	api.cache(true);
	return {
		plugins: [
			[
				"module-resolver",
				{
					root: ["."],
					extensions: [".ios.ts", ".android.ts", ".ts", ".ios.tsx", ".android.tsx", ".tsx", ".jsx", ".js", ".json"],
					alias: {
						tests: ["./tests/"],
						"@": "./src",
						"@endpoints": "./endpoints"
					}
				}
			]
		]
	};
};
