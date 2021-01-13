# Merge Sort

1. Write a function called mergeSort that takes in an unsorted array

2. Split the array with math.floor/roof (error check for a base case for recursion)

3. Set a variable to left and right

4. return merge with left and right as arguments.

5. Write a merge function that takes in left and right as arguments.

6. Create variables for resulting array default to empty, leftIndex = 0, and rightIndex = 0

7. while the arguments is less than the length of the array do...

8. if left[i] is less than right[i], push left[i] into the result array and left[i]++ 

9. else (when left is done) push right[j] into the result array and right[j]++

return resulting array with .concat (merge between two arrays) for each argument sliced at it's index point