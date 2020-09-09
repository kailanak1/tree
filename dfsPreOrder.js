//use for wide trees
//useful for storing data (root is first, then children)

function dfsPreOrder(){
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

