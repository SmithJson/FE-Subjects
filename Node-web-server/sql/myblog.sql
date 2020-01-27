/*
 * ENGINE：MySQl 引擎有 MyISAM 和 InnoDB
 * AUTO_INCREMENT：自动增长的初始值
 * DEFAULT CHARSET：默认字符集
 */
 -- 创建用户表
CREATE TABLE users (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(20) NOT NULL,
	`password` VARCHAR(20) NOT NULL,
	`realname` VARCHAR(10) NOT NULL,
	`state` INT(11) NOT NULL DEFAULT 1, -- 通过 state 来进行让软删除
	PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- 创建博客表
CREATE TABLE blogs (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) NOT NULL,
	`content` LONGTEXT NOT NULL,
	`createtime` BIGINT(20) NOT NULL DEFAULT 0,
	`author` VARCHAR(20) NOT NULL,
	`state` INT(11) NOT NULL DEFAULT 1,
	PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- 插入
INSERT INTO users(username, `password`, realname)
VALUES
('一叶小和尚', 'zl123456', '张三'),
('一叶障目', 'zl123456', '李四');

-- 查询
SELECT *
FROM users
WHERE username LIKE '_叶%'
ORDER BY id DESC;

-- 更新
UPDATE users
SET realname = '王五'
WHERE username = '一叶小和尚';

-- 查看 mysql 版本
SELECT VERSION();

-- 显示当前数据库拥有的表
SHOW TABLES;