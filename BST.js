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
    
    bfs(){

        let q = []
        let visited = []
        let node = this.root
    
        if(this.root===null){
            return undefined
        }
    
        q.push(node)
    
        while(q.length){
           node = q.shift()
           visited.push(node)
           if(node.left){
            q.push(node.left)
           }
           if (node.right){
               q.push(node.right)
           }
        }
    
        return visited
    }

    dfsPreOrder(){
        var visisted = []
        let current = this.root
        function traverse(node){
            visisted.push(node)
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }   
        }
        traverse(current)
        return visisted 
    }

    dfsPostOrder(){
        let visisted = []
        let current = this.root 
        function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
            visisted.push(node)
        }
        traverse(current)
        return visisted
    }

    dfsInOrder(){
        let visited = []
        let current = this.root 
    
        function traverse(node){
            if(node.left) traverse(node.left)
            visited.push(node)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return visited
    }
    
}

