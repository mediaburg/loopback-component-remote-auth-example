var auth = require("./auth/server/server");
var data = require("./data/server/server");

auth.on("started", function() {
    data.start();
});
auth.start();