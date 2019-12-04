/*
 * @Author: zhangl
 * @Date: 2019-12-03 23:24:00
 * @LastEditTime: 2019-12-04 21:28:56
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

	var initColor = function() {
		var color = {};

		for (var i = 0; i < vertices.length; i++) {
			color[vertices[i]] = 'white';
		}

		return color;
	};
	// 广度优先遍历
	this.breadthFirst = function(v, callback) {
		var color = initColor();
		var queue = new Queue();

		queue.enqueue(v);

		while (!queue.isEmpty()) {
			var now = queue.dequeue();
			var list = edges[now];

			for (var i = 0; i < list.length; i++) {
				var w = list[i];

				if (color[w] === 'white') {
					color[w] = 'grey';
					queue.enqueue(w);
				}
			}

			color[now] = 'black';
			callback && callback(now);
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
