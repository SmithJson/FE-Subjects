/*
 * @Author: zhangl
 * @Date: 2019-12-03 23:24:00
 * @LastEditTime: 2019-12-06 00:58:34
 * @LastEditors: zhangl
 * @Description: 邻接表存储图结构
 * @FilePath: /FE-Subjects/8.图/code/index.js
 */

function Graph() {
	var vertices = [], // 顶点
		edges = {}; // 连接边

	// 插入顶点
	this.insertVertex = function (vertex) {
		vertices.push(vertex);
		edges[vertex] = [];
	};

	// 插入边
	this.insertEdge = function (vertex1, vertex2) {
		edges[vertex1].push(vertex2);
		edges[vertex2].push(vertex1);
	};

	var initVertexTraversalCase = function () {
		var caseTable = {},
			len = vertices.length,
			i = 0;

		for (; i < len; i++) {
			caseTable[vertices[i]] = 0;
		}

		return caseTable;
	};
	// 广度优先遍历
	this.breadthFirstTraversal = function (vertex, callback) {
		/**
		 * 顶点状态
		 * 	1. 已探索: explored -1
		 * 	2. 已发现未探索: unexplored 1
		 * 	3. 未发现: undiscovered 0
		 */
		var caseTable = initVertexTraversalCase(),
			queue = new Queue(),
			distance = {}, // 每个顶点间的距离
			pred = {}; // 回溯点

		for (var j = 0; j < vertices.length; j++) {
			distance[vertices[j]] = 0;
			pred[vertices[j]] = null;
		}

		queue.enqueue(vertex);

		while (!queue.isEmpty()) {
			var nowVertex = queue.dequeue(),
				edgesList = edges[nowVertex],
				len = edgesList.length,
				i = 0;

			for (; i < len; i++) {
				if (caseTable[edgesList[i]] === 0) {
					// 设置回溯点: 例 B 的回溯点为 A
					pred[edgesList[i]] = nowVertex;
					// 设置顶点间距: 回溯点距离 + 1
					distance[edgesList[i]] = distance[nowVertex] + 1;
					queue.enqueue(edgesList[i]);
					caseTable[edgesList[i]] = 1;
				}
			}

			caseTable[nowVertex] = -1;
			callback && callback(nowVertex);
		}

		return {
			distance,
			pred,
		};
	};

	// 最短路径
	this.getShortestPath = function (fromVertex, toVertex) {
		var { pred } = graph.breadthFirstTraversal(fromVertex),
			stack = new Stack(),
			result = '';

		while (toVertex !== fromVertex) {
			stack.push(toVertex);
			toVertex = pred[toVertex];
		}

		stack.push(toVertex);

		while (!stack.isEmpty()) {
			result += stack.pop() + '-';
		}

		return result.slice(0, result.length - 1);
	};

	// 打印
	this.print = function () {
		for (var i = 0; i < vertices.length; i++) {
			var vertex = vertices[i],
				edgeTableRow = edges[vertex] || [],
				str = vertex + '=>';

			for (var j = 0; j < edgeTableRow.length; j++) {
				str += edgeTableRow[j] + ' ';
			}

			str += '\n';
			console.log(str);
		}
	};
};

