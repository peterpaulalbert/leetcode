// LeetCode 75: Linked List
// #328. Odd Even Linked List
// https://leetcode.com/problems/odd-even-linked-list/?envType=study-plan-v2&envId=leetcode-75


"use strict";


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function oddEvenList(head) {
	if(!head || !head.next){
		return head;
	}

	let odd = head;
	let evenHead = head.next;
	let even = evenHead;

	while(even && even.next){
		odd.next = even.next;
		odd = odd.next;

		even.next = even.next.next;
		even = even.next;
	}
	odd.next = evenHead;

	return head;
};


/**
 * Tests
 */
class ListNode {
	constructor(val, next) {
		this.val = val;
		this.next = next;
	}
}

function buildLinkedList(values) {
	let head = new ListNode(values[0]);
	let next = head;
	for (let i = 1; i < values.length; i++) {
		next.next = new ListNode(values[i]);
		next = next.next;
	}
	return head;
}

function arrayFromLinkedList(head) {
	if (head === null) {
		return [];
	}

	let next = head;
	let values = [];
	while (true) {
		values.push(next.val);
		if (next.next) {
			next = next.next;
		}
		else {
			break;
		}

	}
	return values;
}

let head;

head = buildLinkedList([]);
console.log(arrayFromLinkedList(head));
console.log(arrayFromLinkedList(oddEvenList(head)));
// expected: []
console.log('-------------------------------------------------------');

head = buildLinkedList([2]);
console.log(arrayFromLinkedList(head));
console.log(arrayFromLinkedList(oddEvenList(head)));
// expected: [2]
console.log('-------------------------------------------------------');

head = buildLinkedList([1, 2, 3, 4, 5]);
console.log(arrayFromLinkedList(head));
console.log(arrayFromLinkedList(oddEvenList(head)));
// expected: [1,3,5,2,4]
console.log('-------------------------------------------------------');

head = buildLinkedList([2, 1, 3, 5, 6, 4, 7]);
console.log(arrayFromLinkedList(head));
console.log(arrayFromLinkedList(oddEvenList(head)));
// expected: [2,3,6,7,1,5,4]
console.log('-------------------------------------------------------');

