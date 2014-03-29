Package.describe({
  summary: "Meteor Edmund's API."
});

Package.on_use(function (api) {
	var path = Npm.require('path');
	var asset_path = path.join('lib');
	
	api.add_files(path.join(asset_path, 'edmunds.api.sdk.js'), 'client');

	if (api.export) {
		api.export("EDMUNDSAPI", "client");
	}
});

