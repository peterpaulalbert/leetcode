// LeetCode 75: Linked List
// #2130. Maximum Twin Sum of a Linked List
// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75


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
 * @return {number}
 */
function pairSum(head) {
	let nodes = [];
	let next = head;
	while (next) {
		nodes.push(next.val);
		next = next.next;
	}
	let maxSum = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i < nodes.length / 2; i++) {
		let sum = nodes[i] + nodes[nodes.length - 1 - i];
		if (sum > maxSum) {
			maxSum = sum;
		}
	}
	return maxSum;
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

head = buildLinkedList([5,4,2,1]);
console.log(arrayFromLinkedList(head));
console.log(pairSum(head));
// expected: 6
console.log('-------------------------------------------------------');

head = buildLinkedList([4,2,2,3]);
console.log(arrayFromLinkedList(head));
console.log(pairSum(head));
// expected: 7
console.log('-------------------------------------------------------');

head = buildLinkedList([1,100000]);
console.log(arrayFromLinkedList(head));
console.log(pairSum(head));
// expected: 100001
console.log('-------------------------------------------------------');
