class Node {
    constructor(value){
        this.value = value; 
        this.right = null;
        this.left = null; 
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        var newNode = new Node(val)
        if (this.root === null){
            this.root = newNode
            return this;
        } else {
            var current = this.root; 
            while(true){
                if(value === current.value){
                    return undefined
                }
                if(value < current.value){
                    if(current.left === null){
                        current.left === newNode;
                        return this;
                    } else {
                        current = current.left
                    }
                } else if (value > current.value ) {
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right; 
                    }
                }
            }
        }   
        return this;
    }


    find(value){
        if(this.root === null) return false;
        var current = this.root; 
            found = false; 
        while(current && !found){
            if(value < current.value){
                current = current.left; 
            } else if (value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return false;
        return current;
    }  
}

