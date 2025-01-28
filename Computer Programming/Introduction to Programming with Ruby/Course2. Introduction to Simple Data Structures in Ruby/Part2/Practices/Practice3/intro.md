# Fix Array Manipulation Errors

Amazing progress so far! Now, let's identify and fix bugs in a Ruby code snippet that manages a list of `trip_destinations`. Your task is to find and correct the mistake that prevents the code from working as intended.

In Ruby, trying to access an item at an index that is beyond the current array size may result in `nil`. Understanding this behavior is important for correctly manipulating arrays. Similarly, if we insert an element at an index that is beyond the current array size, Ruby will fill the gap with nil values. This behavior can be useful in certain scenarios, but it's essential to be aware of it when working with arrays in Ruby.

With this, can you analyze and fix the code so that it inserts the new value properly at the end of the array without causing any nil values in between?