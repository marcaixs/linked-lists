import {Node} from './Node.js'

class LinkedList {

    constructor(){
        this.head = null;
    }

    //adds a new node containing value to the end of the list
    append(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node
            return
        }

        let current = this.head;

        while(current.nextNode){
            current = current.nextNode
        }
        current.nextNode = node;
        
    } 

    //adds a new node containing value to the start of the list
    prepend(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node
            return
        }
        node.nextNode = this.head;
        this.head = node;
    }

    //returns the total number of nodes in the list
    size(){
        let size = 0;
        let current = this.head;
        while(current){
            size ++
            current = current.nextNode
        }
        return size
        
    } 

    //returns the first node in the list
    head(){
        return this.head;
    } 

    //returns the last node in the list
    tail(){
        let current = this.head;
        while(current && current.nextNode){
            current = current.nextNode
        }
        return current
    } 

    //returns the node at the given index
    at(index){
        let size = 0;
        let current = this.head;
        while(current){
            if(size == index){
                return current
            }
            size ++
            current = current.nextNode
        }
        return current;
    }

    //removes the last element from the list
    pop(){
        if(!this.head) return; 

        if(!this.head.nextNode) { 
            this.head = null;
            return;
        }
        let current = this.head;

        while(current.nextNode){
            current = current.nextNode
        }
        current.nextNode = null;
    }

    //returns true if the passed in value is in the list and otherwise returns false.
    contains(value){
        let current = this.head;
        while(current){
            if(current.data == value){
                return true
            }
            current = current.nextNode;
        }
        return false;
    } 

    //returns the index of the node containing value, or null if not found.
    find(value){} 

    // represents your LinkedList objects as strings, 
    // so you can print them out and preview them in the console. 
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString(){}
}