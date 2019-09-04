import { Triangle } from './../src/triangle.js';
// We use describe() to define a suite. A suite allows us to group and organize tests.
describe('Triangle', function() {

// Within our describe() block, we have a spec. Each spec begins with it(). Once again, we describe the content of the test, which generally begins with the word “should.”

// Here we declare reusableTriangle in the top-level scope. The beforeEach() function then assigns an instantiated object to the reusableTriangle variable.

  var reusableTriangle;

  beforeEach(function() {
    reusableTriangle = new Triangle(5, 5, 5);
  });

  it('should show how beforeEach() works', function() {
    console.log(reusableTriangle);
  });

  it('should test whether a Triangle has three sides', function() {
    //Test content will go here.
    var triangle = new Triangle(3,4,5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).not.toEqual(6);
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var notTriangle = new Triangle(3,9,22);
     console.log(triangle);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });


});
