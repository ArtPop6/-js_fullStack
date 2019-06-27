function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let a1 = new TreeNode(3);
let a2 = new TreeNode(9);
let a3 = new TreeNode(20);
let a4 = new TreeNode(15);
let a5 = new TreeNode(7);
a1.left = a2;
a1.right = a3;
a3.left = a4;
a3.right = a5;

// 102 层序遍历 递归最简单性能消耗最大
// 从根开始, 一层层来分层遍历, 7 结束,
// 一层一个数组
// [[3], [9, 20], [15, 7]]
//    3
// 9     20
//    15     7
// 按层 每个节点把它的子节点情况告诉算法就ok了
// items []  子节点也可能有子节点
// 队列 QUEUE 

function levelOrderTravesal (root) {
    if (!root) return [];
    const items = [];
    // tree node left right 根节点到叶子结点快
    // 
    const queue = [root, null];  // 队列， 等待被了解情况的节点，了解之后出队
    // shift，push()
    let levelNodes = []; // 每一层的节点
    while(queue.length > 0) {
        const t = queue.shift();
        // root
        if (t) {
            levelNodes.push(t.val);
            if (t.left) {
                queue.push(t.left);
            }
            if (t.right) {
                queue.push(t.right);
            }
        } else {
            //null 层次分隔符号
            items.push(levelNodes);
            levelNodes = [];
            // null上一层 在队列里的节点是
            // 下一层的所有节点，绝对没有下下层节点
            // 因为是按层来遍历
            if (queue.length > 0) {
                queue.push(null);
            }
        }

    }
    return items;
}

console.log(levelOrderTravesal(a1));
// queue [root, null] 出队就剩[null]
// levelNodes []
// items []