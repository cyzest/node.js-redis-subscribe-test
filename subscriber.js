
var sys = require("sys");
var redis = require("redis");

var subscriber = redis.createClient(6379, "host");

subscriber.auth("password");

subscriber.subscribe("test-channel");

subscriber.on("message", function(channel, message){
    sys.puts(channel + " : " + message);
});