const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, element) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let index = 0; index < newCollection.length; index++)
        element(newCollection[index])
      return collection
    },

    map: function(collection, element) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      const newArray = []
      for (let index = 0; index < collection.length; index++)
        newArray.push(element(collection[index]))
      return newArray
    },

    reduce: function(c = [], callback = () => {}, acc) {
      let collection = c.slice(0)
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      let collectionLength = collection.length;
      for (let i = 0; i < collectionLength; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (let index = 0; index < collection.length; index++)
        if (predicate(collection[index])) return collection[index]
    return undefined
    },


    functions: function() {

    },


  }
})()

fi.libraryMethod()
