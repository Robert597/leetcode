
/*class ListNode {
    constructor(element){
        this.val = element;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

        add = (element) => {
            var Node = new ListNode(element);

            var current;
            if(this.head == null){
                this.head = Node;
            }else {
                current = this.head;

                while(current.next){
                    current = current.next
                }

                current.next = Node
            }
            this.size++;
        };

     

        print = (index) => {
            var curr;
            if(index < 0 || index > this.size){
                return "Specified Index cant be found";
            }else{
             curr = this.head;
             var init = 0;
             while(init < index){
                init++;
                curr = curr.next;
             }
             console.log(curr);
            }
        }

        delete = (index) => {
            var curr , prev;
            if(index == 0){
                this.head == this.head.next;
            }else {
                var pos = 0;
                curr = this.head
                while(pos < index){
                    pos++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
                this.size--;
            }
        }
        
        inserAt = (element, index) => {
            if(index < 0 || index > this.size){
                return "Specified Index cant be found";
            }else {
                var node = new ListNode(element);

                var curr , prev;

                if(index == 0){
                    node.next = this.head;
                    this.head = node;
                }else {
                   var init = 0;
                   curr = this.head;
                   while(init < index){
                    init++;
                    prev = curr;
                    curr = curr.next;
                   }
                   node.next = curr;
                   prev.next = node;
                }
                this.size++;

            }
        };

      
    }

*/
   
class ListNode {
    constructor(element, next){
        this.val = element ? element : 0;
        this.next = next ? next : null;
    }
    add = (element) => {
        const node = new ListNode(element);
        var curr;
        if(this.next === null){
            this.next = node;
        }else{
            curr = this.next;
            while(curr.next){
                curr = curr.next
            }
            curr.next = node;
        }
    }
}

var l1 = new ListNode(2);
l1.add(4);
l1.add(3);

var l2 = new ListNode(5);
l2.add(6);
l2.add(4);

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let val1 = 0;
    let val2 = 0;

    let returningNode = new ListNode();
    let headNode = returningNode;
    while(l1 || l2 || carry){
        if(l1){
             val1 = l1.val;
            l1 = l1.next;
        }
        if(l2){
         val2 = l2.val;
            l2 = l2.next;
        }
        let sum = val1 + val2 + carry;
        carry= Math.floor(sum/10);
        let digit = sum%10;

        let currentNode = new ListNode(digit);
        returningNode.next = currentNode;
        returningNode = currentNode;
    }
console.log(returningNode);
console.log(headNode.next);
    }
addTwoNumbers(l1, l2);

   



