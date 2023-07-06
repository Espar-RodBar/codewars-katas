function Node(data) {
    this.data = data;
    this.next = null;
}

function getNth(node, index) {
    // Your code goes here.
    let getNode = node;

    for (let i = 0; i < index; i++) {
        getNode = getNode.next;
    }
    if (getNode) return getNode;
    else throw error;
}
