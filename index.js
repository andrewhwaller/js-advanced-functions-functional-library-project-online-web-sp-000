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

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArray = []

      for (let index = 0; index < collection.length; index++)
        if (predicate(collection[index])) newArray.push(collection[index])

      return newArray
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(collection, stop=false) {
      return (stop) ? collection.slice(0, stop) : collection[0]
    },

    last: function(collection, start=false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      const badBad = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(element => !badBad.has(element))
    },

    sortBy: function(collection, callback) {
      const newArray = [...collection]
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, array) {
     for (let val of array)
       receiver.push(val)
     },
    


    functions: function() {

    },


  }
})()

fi.libraryMethod()
