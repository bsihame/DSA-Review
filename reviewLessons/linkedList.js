/*
  Linked list
    - data structure where values are chained sequentially
    - more efficient for insertion/deletion than arrays
    - does not require contiguous  memory addressing

  objective:
  1) add a new value
  2) print the list
  3) search for an existing value

  NB: - if you want to insert in the middle of the linkedList it is O(n) because we have to change one address
        in contrast in the array we have to shift all the elements that are after the middle position: we shifting all the the addresses
      
        => comparing between the array and the linked list

                  Array       Linked List
        access      O(1)          O(n)
        insert      O(n)          O(1)
        delete      O(n)          O(1)   
        
        => Linked List structure 
        Compose of the nodes that contain a stored value and a reference to the next node.
*/