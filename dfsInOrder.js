//use for wide trees
//used for BSTs so you can return it IN ORDER

function dfsInOrder(){
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
