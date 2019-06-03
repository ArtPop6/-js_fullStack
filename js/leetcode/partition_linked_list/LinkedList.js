import LinkedListNode from './LinkedListNode.js'
class LinkedList {
    constructor() {
        // 1->4->->2->5
        this.head = null;
        this.tail = null;
    }
    append(value) {
        const newNode = new LinkedListNode(value)
    }
}
// 构建抽象链表
export default LinkedList;
