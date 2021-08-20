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
        => Linked List list  variant
        Single Linked List that has one pointer to next
        -> a -> b -> c -> d ->
        Double Linked List that has 2 pointers next and preview
        -> a <==> b <==> c <==> d ->
        Dummy head Linked List
        A linked List where you have a place holder even you have an empty linked list the node that you have in the dummy head linked list it is like a fake node and you don't have to handle any edge cases
        -> head -> a -> b -> c -> d ->
*/