import {Node} from './Node.js'

class LinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
    }

    //adds a new node containing value to the end of the list
    append(value){
        const node = new Node(value);
        if (this.tail==null){
            this.head = node
            this.tail = node
        } else {
            this.tail.nextNode = node;
        }
        this.tail = node;
    } 

    //adds a new node containing value to the start of the list
    prepend(value){
        const node = new Node(value);
        if (this.head == null){
            this.head = node;
        } else {
            node.nextNode = this.head;
            this.head = node;
        }
    }

    //returns the total number of nodes in the list
    size(){
        let size = 0;
        if (this.head == null){
            return 0;
        } 
        
    } 

    //returns the first node in the list
    head(){
        return this.head;
    } 

    //returns the last node in the list
    tail(){
        return this.tail;
    } 

    //returns the node at the given index
    at(index){}

    //removes the last element from the list
    pop(){}

    //returns true if the passed in value is in the list and otherwise returns false.
    contains(value){} 

    //returns the index of the node containing value, or null if not found.
    find(value){} 

    // represents your LinkedList objects as strings, 
    // so you can print them out and preview them in the console. 
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString(){}
}