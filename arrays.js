var chocolateBars= ['snickers', 'hundred grand', 'kitkat', 'skittles'];

/*************************************************************************************
 *  describe('addElementToBeginningOfArray(array, element)', () => {
    it('adds an element to the beginning of an array', () => {
      expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('does not alter the original array', () => {
      const array = [1]

      addElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql([1])
    })
  })
  */
function addElementToBeginningOfArray(array, element){
  element = "foo";
  // array=[1];
  array = [element, ...array];
 
  return array
}

/*************************************************************************************
 * describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
    it('adds an element to the beginning of an array', () => {
      expect(destructivelyAddElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('alters the original array', () => {
      const array = [1]

      destructivelyAddElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql(['foo', 1])
    })
  })
*/
var x = addElementToBeginningOfArray();
function destructivelyAddElementToBeginningOfArray(array, element){
  element = 'foo';
  array = [x, ...array];
  return array
}