/*
 * @Author: zhangl
 * @Date: 2019-12-03 23:24:00
 * @LastEditTime: 2019-12-05 12:35:51
 * @LastEditors: zhangl
 * @Description: 邻接表存储图结构
 * @FilePath: /FE-Subjects/8.图/code/index.js
 */

function Graph() {
	var vertices = [], // 顶点
		edges = {}; // 连接边

	// 插入顶点
	this.insertVertex = function(vertex) {
		vertices.push(vertex);
		edges[vertex] = [];
	};

	// 插入边
	this.insertEdge = function(vertex1, vertex2) {
		edges[vertex1].push(vertex2);
		edges[vertex2].push(vertex1);
	};

	var initVertexTraversalCase = function() {
		var caseTable = {},
			len = vertices.length,
			i = 0;

		for (; i < len; i++) {
			caseTable[vertices[i]] = 0;
		}

		return caseTable;
	};
	// 广度优先遍历
	this.breadthFirstTraversal = function(vertex, callback) {
		/**
		 * 顶点状态
		 * 	1. 已探索: explored -1
		 * 	2. 已发现未探索: unexplored 1
		 * 	3. 未发现: undiscovered 0
		 */
		var caseTable = initVertexTraversalCase();
		var queue = new Queue();

		queue.enqueue(vertex);

		while (!queue.isEmpty()) {
			var nowVertex = queue.dequeue(),
				edgesList = edges[nowVertex],
				len = edgesList.length,
				i = 0;

			for (; i < len; i++) {
				if (caseTable[edgesList[i]] === 0) {
					queue.enqueue(edgesList[i]);
					caseTable[edgesList[i]] = 1;
				}
			}

			caseTable[nowVertex] = -1;
			callback && callback(nowVertex);
		}
	};

	// 打印
	this.print = function() {
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
}
