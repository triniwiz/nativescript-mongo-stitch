var MongoStitch = require("nativescript-mongo-stitch").MongoStitch;
var mongoStitch = new MongoStitch();

describe("greet function", function() {
    it("exists", function() {
        expect(mongoStitch.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(mongoStitch.greet()).toEqual("Hello, NS");
    });
});