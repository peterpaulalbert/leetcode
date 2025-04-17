// LeetCode 75: Linked List
// #2095. Delete the Middle Node of a Linked List
// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75


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
function deleteMiddle(head) {
	let fast = head;
	let slow = head;
	let preSlow;
	while (true) {
		if (fast?.next) {
			preSlow = slow;
			slow = slow.next;
			fast = fast.next.next;
		}
		else {
			if(preSlow){
				preSlow.next = slow.next;
				return head;
			}
			else{
				return null;
			}
		}
	
	}
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

function arrayFromLinkedList(head){
	if(head === null){
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

head = buildLinkedList([1,3,4,7,1,2,6]);
console.log(arrayFromLinkedList(head));
console.log(arrayFromLinkedList(deleteMiddle(head)));
// expected: [1,3,4,1,2,6]
console.log('-------------------------------------------------------');

head = buildLinkedList([1,2,3,4]);
console.log(arrayFromLinkedList(head));
console.log(arrayFromLinkedList(deleteMiddle(head)));
// expected: [1,2,4]
console.log('-------------------------------------------------------');

head = buildLinkedList([2,1]);
console.log(arrayFromLinkedList(head));
console.log(arrayFromLinkedList(deleteMiddle(head)));
// expected: [2]
console.log('-------------------------------------------------------');

head = buildLinkedList([1]);
console.log(arrayFromLinkedList(head));
console.log(arrayFromLinkedList(deleteMiddle(head)));
// expected: []
console.log('-------------------------------------------------------');

