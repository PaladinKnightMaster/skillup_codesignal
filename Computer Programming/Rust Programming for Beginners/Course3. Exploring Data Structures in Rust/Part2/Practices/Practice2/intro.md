# Passing Arrays to Functions

Now, let's see how arrays can be passed as function parameters by running some code.

Arrays can be passed to functions in multiple ways:

* By reference, which allows reading without transferring ownership.
* By copying, where the data type stored in the array is copy-type.
* By transferring ownership when the data type stored in the array is not copy-type, making the original array unavailable after the function call.
Click `Run` to see how these concepts work in Rust!