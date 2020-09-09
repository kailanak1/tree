//use for deep/long trees

function bfs(){
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

