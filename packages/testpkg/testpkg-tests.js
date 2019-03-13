// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by testpkg.js.
import { name as packageName } from "meteor/testpkg";

// Write your tests here!
// Here is an example.
Tinytest.add('testpkg - example', function (test) {
  test.equal(packageName, "testpkg");
});
