CREATE DATABASE IF NOT EXISTS `manual_test` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin */;

USE `manual_test`;

CREATE TABLE IF NOT EXISTS `product` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL COLLATE 'utf8mb4_bin',
	`price` INT NOT NULL,
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_bin'
ENGINE=InnoDB
;

TRUNCATE `product`;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`name`, `price`) VALUES
	('りんご', 120),
	('みかん', 120),
	('バナナ', 90),
	('キウイ', 130),
	('パイナップル', 300),
	('ブドウ', 400),
	('もも', 350),
	('オレンジ', 100),
	('グレープフルーツ', 100),
	('梨', 190),
	('レモン', 100),
	('アジ', 130),
	('イワシ', 70),
	('サバ', 220),
	('サンマ', 360),
	('マグロ', 420),
	('ハマチ', 360),
	('タイ', 1200),
	('タラ', 540),
	('アンコウ', 2700),
	('サケ', 580)
;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `customer` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL COLLATE 'utf8mb4_bin',
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_bin'
ENGINE=InnoDB
;

TRUNCATE `customer`;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` (`name`) VALUES
	('神崎商会'),
	('山田商店'),
	('竹原マート'),
	('スーパー森久保'),
	('ラッセルフード')
;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `order` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`customerID` INT NOT NULL,
	`productID` INT NOT NULL,
	`amount` INT NOT NULL,
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_bin'
ENGINE=InnoDB
;

TRUNCATE `order`;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` (`CustomerID`, `productID`, `amount`) VALUES
	(1, 1, 20),
	(1, 2, 50),
	(1, 3, 25),
	(1, 5, 35)
;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
