// LeetCode 75: Linked List
// #206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=leetcode-75


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
function reverseList(head) {
	if (!head || !head.next) {
		return head;
	}

	let nodes = [];
	let next = head;
	while (next) {
		nodes.push(next);
		next = next.next;
	}

	head = nodes.at(-1);
	nodes[0].next = null;
	for (let i = nodes.length - 1; i > 0; i--) {
		nodes[i].next = nodes[i - 1];
	}

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
console.log(arrayFromLinkedList(reverseList(head)));
// expected: []
console.log('-------------------------------------------------------');

head = buildLinkedList([2]);
console.log(arrayFromLinkedList(head));
console.log(arrayFromLinkedList(reverseList(head)));
// expected: [2]
console.log('-------------------------------------------------------');

head = buildLinkedList([1, 2, 3, 4, 5]);
console.log(arrayFromLinkedList(head));
console.log(arrayFromLinkedList(reverseList(head)));
// expected: [5,4,3,2,1]
console.log('-------------------------------------------------------');

head = buildLinkedList([1, 2]);
console.log(arrayFromLinkedList(head));
console.log(arrayFromLinkedList(reverseList(head)));
// expected: [2,1]
console.log('-------------------------------------------------------');

