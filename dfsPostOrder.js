//use for wide trees

function dfsPostOrder(){
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
