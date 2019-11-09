```
for j <- 2 to length[A]
    do key <- A[j]  
    |> Insert A[j] into the sorted sequence A[1...j - 1]
    i <- j - 1
    while i > 0 and A[i] > key 
        do A[i + 1] <- A[i]
            i <- i - 1
        A[i + 1] <- key
```
    

Array:  `A = (31, 41, 59, 26, 41, 58)`

For the procedure InsertionSort, witch takes as a parameter an array `A[1...n]` 
containing a sequence of length `n` that is to be sorted.
(In the code, the number `n` of elements in `A` is denoted by `length[A]`).
The input numbers are `sorted in place:` the numbers are rearragned within the array `A`, with at most a constant number of them stored outside the array at any time. The input array `A` contains the sorted output sequence when InsertionSort is finished. 

- `j` indicates current card being inserted into the hand
- `A[j + 1..n]` constitue the currently sorted hand
- At each iteration of the "outer" `for loop` the element `A[j]` is picked out of the array (line 2)
- Then starting in position `j - 1`, elements are successively moved one position to the right until the proper position for `A[j]` is found (Line 4-7), at witch point is is inserted.