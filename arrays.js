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
  // element = "foo";
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

function destructivelyAddElementToBeginningOfArray(array, element){
  // element = 'foo';
  array.unshift(element);
  return array
}

/*************************************************************************************
  describe('addElementToEndOfArray(array, element)', () => {
    it('adds an element to the end of an array', () => {
      expect(addElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('does not alter the original array', () => {
      const array = [1]

      addElementToEndOfArray(array, 'foo')

      expect(array).to.eql([1])
    })
  })*/
  
  function addElementToEndOfArray(array, element){
    array = [...array, element];
    return array
  }
  
  /*************************************************************************************
  describe('destructivelyAddElementToEndOfArray(array, element)', () => {
    it('adds an element to the end of an array', () => {
      expect(destructivelyAddElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('alters the original array', () => {
      const array = [1]

      destructivelyAddElementToEndOfArray(array, 'foo')

      expect(array).to.eql([1, 'foo'])
    })
  })
  */
  function destructivelyAddElementToEndOfArray(array, element){
    array.push(element);
    return array
  }
  
    /*************************************************************************************
  describe('accessElementInArray(array, index)', () => {
    it('accesses the element in array at the given index', () => {
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })
  */
  function accessElementInArray(array, index){
    return array[index]
  }
  
      /*************************************************************************************
       * 