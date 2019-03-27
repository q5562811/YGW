/*
Navicat MySQL Data Transfer

Source Server         : html1812
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : ygw

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-03-27 20:40:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `quantity` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('8', '新西兰红玫瑰苹果4.5kg', '../images/201707211037975058.jpg', '258.00', '2');
INSERT INTO `cart` VALUES ('6', '佳沛阳光金奇异果（22-25枚）', '../images/201901081935893015.jpg', '328.00', '4');

-- ----------------------------
-- Table structure for commodity_new_product
-- ----------------------------
DROP TABLE IF EXISTS `commodity_new_product`;
CREATE TABLE `commodity_new_product` (
  `id` int(30) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `discounts` decimal(10,2) NOT NULL,
  `introduce` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=114 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of commodity_new_product
-- ----------------------------
INSERT INTO `commodity_new_product` VALUES ('1', '诺来原生葡萄籽油礼盒装500ml*2', 'images/201903051726275024.jpg', '260.00', '124.00', '诺来原生葡萄籽油礼盒装500ml*2');
INSERT INTO `commodity_new_product` VALUES ('2', 'Amalee冰糖燕窝（燕窝罐头礼盒装）420g', 'images/20170907110925051.jpg', '499.00', '485.00', 'Amalee冰糖燕窝（燕窝罐头礼盒装）420g');
INSERT INTO `commodity_new_product` VALUES ('3', '浪漫味道・粉百合+戴安娜玫瑰+桔梗花', 'images/201708231644120002.jpg', '528.00', '388.00', '浪漫味道・粉百合+戴安娜玫瑰+桔梗花');
INSERT INTO `commodity_new_product` VALUES ('4', '法国博堡幸福密码红葡萄酒750ml', 'images/201807301441895045.jpg', '450.00', '320.00', '法国博堡幸福密码红葡萄酒750ml');
INSERT INTO `commodity_new_product` VALUES ('5', '八马（常规）留香大红袍.富贵紫320g', 'images/201709061021239055.jpg', '1500.00', '1500.00', '八马（常规）留香大红袍.富贵紫320g');
INSERT INTO `commodity_new_product` VALUES ('6', '智利进口西梅1kg', 'images/201803060914937029.jpg', '98.00', '68.00', '智利进口西梅1kg');
INSERT INTO `commodity_new_product` VALUES ('7', '智利进口西梅1kg', 'images/201803060914937029.jpg', '98.00', '68.00', '智利进口西梅1kg');
INSERT INTO `commodity_new_product` VALUES ('8', '智利进口西梅1kg', 'images/201803060914937029.jpg', '98.00', '68.00', '智利进口西梅1kg');
INSERT INTO `commodity_new_product` VALUES ('9', '海南树上熟木瓜2个装', 'images/201803050943588006.jpg', '38.80', '22.80', '海南树上熟木瓜2个装');
INSERT INTO `commodity_new_product` VALUES ('10', '海南树上熟木瓜2个装', 'images/201803050943588006.jpg', '38.80', '22.80', '海南树上熟木瓜2个装');
INSERT INTO `commodity_new_product` VALUES ('11', '海南树上熟木瓜2个装', 'images/201803050943588006.jpg', '38.80', '22.80', '海南树上熟木瓜2个装');
INSERT INTO `commodity_new_product` VALUES ('12', '平平安安水果礼盒', 'images/201605251018165007.jpg', '88.00', '76.00', '平平安安水果礼盒');
INSERT INTO `commodity_new_product` VALUES ('13', '平平安安水果礼盒', 'images/201605251018165007.jpg', '88.00', '76.00', '平平安安水果礼盒');
INSERT INTO `commodity_new_product` VALUES ('14', '平平安安水果礼盒', 'images/201605251018165007.jpg', '88.00', '76.00', '平平安安水果礼盒');
INSERT INTO `commodity_new_product` VALUES ('15', '四川不知火丑柑6个装', 'images/201711211056647044.jpg', '39.80', '34.80', '四川不知火丑柑6个装');
INSERT INTO `commodity_new_product` VALUES ('16', '四川不知火丑柑6个装', 'images/201711211056647044.jpg', '39.80', '34.80', '四川不知火丑柑6个装');
INSERT INTO `commodity_new_product` VALUES ('17', '四川不知火丑柑6个装', 'images/201711211056647044.jpg', '39.80', '34.80', '四川不知火丑柑6个装');
INSERT INTO `commodity_new_product` VALUES ('18', '依谷（精品）生菜300g', 'images/201806221727501030.jpg', '9.80', '8.80', '依谷（精品）生菜300g');
INSERT INTO `commodity_new_product` VALUES ('19', '依谷（精品）生菜300g', 'images/201806221727501030.jpg', '9.80', '8.80', '依谷（精品）生菜300g');
INSERT INTO `commodity_new_product` VALUES ('20', '依谷（精品）生菜300g', 'images/201806221727501030.jpg', '9.80', '8.80', '依谷（精品）生菜300g');
INSERT INTO `commodity_new_product` VALUES ('21', '依谷（精品）生菜300g', 'images/201806221727501030.jpg', '9.80', '8.80', '依谷（精品）生菜300g');
INSERT INTO `commodity_new_product` VALUES ('22', '凿冰冲冲红酒烩排骨200g', 'images/201901171553802033.jpg', '49.00', '39.90', '凿冰冲冲红酒烩排骨200g');
INSERT INTO `commodity_new_product` VALUES ('23', '凿冰冲冲红酒烩排骨200g', 'images/201901171553802033.jpg', '49.00', '39.90', '凿冰冲冲红酒烩排骨200g');
INSERT INTO `commodity_new_product` VALUES ('24', '凿冰冲冲红酒烩排骨200g', 'images/201901171553802033.jpg', '49.00', '39.90', '凿冰冲冲红酒烩排骨200g');
INSERT INTO `commodity_new_product` VALUES ('25', '凿冰冲冲红酒烩排骨200g', 'images/201901171553802033.jpg', '49.00', '39.90', '凿冰冲冲红酒烩排骨200g');
INSERT INTO `commodity_new_product` VALUES ('26', '延边黄牛精选有机腱子肉1...', 'images/201701231205536029.jpg', '176.00', '158.00', '延边黄牛精选有机腱子肉1...');
INSERT INTO `commodity_new_product` VALUES ('27', '延边黄牛精选有机腱子肉1...', 'images/201701231205536029.jpg', '176.00', '158.00', '延边黄牛精选有机腱子肉1...');
INSERT INTO `commodity_new_product` VALUES ('28', '延边黄牛精选有机腱子肉1...', 'images/201701231205536029.jpg', '176.00', '158.00', '延边黄牛精选有机腱子肉1...');
INSERT INTO `commodity_new_product` VALUES ('29', '延边黄牛精选有机腱子肉1...', 'images/201701231205536029.jpg', '176.00', '158.00', '延边黄牛精选有机腱子肉1...');
INSERT INTO `commodity_new_product` VALUES ('30', '依谷五常稻花香大米2.5...', 'images/201901081722163048.jpg', '88.00', '79.90', '依谷五常稻花香大米2.5...');
INSERT INTO `commodity_new_product` VALUES ('31', '依谷五常稻花香大米2.5...', 'images/201901081722163048.jpg', '88.00', '79.90', '依谷五常稻花香大米2.5...');
INSERT INTO `commodity_new_product` VALUES ('32', '依谷五常稻花香大米2.5...', 'images/201901081722163048.jpg', '88.00', '79.90', '依谷五常稻花香大米2.5...');
INSERT INTO `commodity_new_product` VALUES ('33', '依谷五常稻花香大米2.5...', 'images/201901081722163048.jpg', '88.00', '79.90', '依谷五常稻花香大米2.5...');
INSERT INTO `commodity_new_product` VALUES ('34', '山茶山天然纯山茶油500ML', 'images/201810081653108001.jpg', '165.00', '148.00', '山茶山天然纯山茶油500ML');
INSERT INTO `commodity_new_product` VALUES ('35', '山茶山天然纯山茶油500ML', 'images/201810081653108001.jpg', '165.00', '148.00', '山茶山天然纯山茶油500ML');
INSERT INTO `commodity_new_product` VALUES ('36', '山茶山天然纯山茶油500ML', 'images/201810081653108001.jpg', '165.00', '148.00', '山茶山天然纯山茶油500ML');
INSERT INTO `commodity_new_product` VALUES ('37', '山茶山天然纯山茶油500ML', 'images/201810081653108001.jpg', '165.00', '148.00', '山茶山天然纯山茶油500ML');
INSERT INTO `commodity_new_product` VALUES ('38', '灵犀有机天然山茶油礼盒装...', 'images/201808021723565005.jpg', '138.00', '118.00', '灵犀有机天然山茶油礼盒装...');
INSERT INTO `commodity_new_product` VALUES ('39', '灵犀有机天然山茶油礼盒装...', 'images/201808021723565005.jpg', '138.00', '118.00', '灵犀有机天然山茶油礼盒装...');
INSERT INTO `commodity_new_product` VALUES ('40', '灵犀有机天然山茶油礼盒装...', 'images/201808021723565005.jpg', '138.00', '118.00', '灵犀有机天然山茶油礼盒装...');
INSERT INTO `commodity_new_product` VALUES ('41', '灵犀有机天然山茶油礼盒装...', 'images/201808021723565005.jpg', '138.00', '118.00', '灵犀有机天然山茶油礼盒装...');
INSERT INTO `commodity_new_product` VALUES ('42', '长白山天然虫草花250g', 'images/201812121039101007.jpg', '119.00', '79.00', '长白山天然虫草花250g');
INSERT INTO `commodity_new_product` VALUES ('43', '长白山天然虫草花250g', 'images/201812121039101007.jpg', '119.00', '79.00', '长白山天然虫草花250g');
INSERT INTO `commodity_new_product` VALUES ('44', '长白山天然虫草花250g', 'images/201812121039101007.jpg', '119.00', '79.00', '长白山天然虫草花250g');
INSERT INTO `commodity_new_product` VALUES ('45', '长白山天然虫草花250g', 'images/201812121039101007.jpg', '119.00', '79.00', '长白山天然虫草花250g');
INSERT INTO `commodity_new_product` VALUES ('46', '特级本港鱿鱼500g', 'images/201701221632925021.jpg', '220.00', '188.00', '特级本港鱿鱼500g');
INSERT INTO `commodity_new_product` VALUES ('47', '特级本港鱿鱼500g', 'images/201701221632925021.jpg', '220.00', '188.00', '特级本港鱿鱼500g');
INSERT INTO `commodity_new_product` VALUES ('48', '特级本港鱿鱼500g', 'images/201701221632925021.jpg', '220.00', '188.00', '特级本港鱿鱼500g');
INSERT INTO `commodity_new_product` VALUES ('49', '特级本港鱿鱼500g', 'images/201701221632925021.jpg', '220.00', '188.00', '特级本港鱿鱼500g');
INSERT INTO `commodity_new_product` VALUES ('50', '本港四宝礼盒', 'images/201804231127943012.jpg', '657.00', '528.00', '本港四宝礼盒');
INSERT INTO `commodity_new_product` VALUES ('51', '本港四宝礼盒', 'images/201804231127943012.jpg', '657.00', '528.00', '本港四宝礼盒');
INSERT INTO `commodity_new_product` VALUES ('52', '本港四宝礼盒', 'images/201804231127943012.jpg', '657.00', '528.00', '本港四宝礼盒');
INSERT INTO `commodity_new_product` VALUES ('53', '本港四宝礼盒', 'images/201804231127943012.jpg', '657.00', '528.00', '本港四宝礼盒');
INSERT INTO `commodity_new_product` VALUES ('54', '广发草原原味牛肉干228g', 'images/201810301708876042.jpg', '98.00', '89.90', '广发草原原味牛肉干228g');
INSERT INTO `commodity_new_product` VALUES ('55', '广发草原原味牛肉干228g', 'images/201810301708876042.jpg', '98.00', '89.90', '广发草原原味牛肉干228g');
INSERT INTO `commodity_new_product` VALUES ('56', '广发草原原味牛肉干228g', 'images/201810301708876042.jpg', '98.00', '89.90', '广发草原原味牛肉干228g');
INSERT INTO `commodity_new_product` VALUES ('57', '广发草原原味牛肉干228g', 'images/201810301708876042.jpg', '98.00', '89.90', '广发草原原味牛肉干228g');
INSERT INTO `commodity_new_product` VALUES ('58', '吉利莲吉馨牛奶巧克力制品...', 'images/201812191051519011.jpg', '120.00', '99.00', '吉利莲吉馨牛奶巧克力制品...');
INSERT INTO `commodity_new_product` VALUES ('59', '吉利莲吉馨牛奶巧克力制品...', 'images/201812191051519011.jpg', '120.00', '99.00', '吉利莲吉馨牛奶巧克力制品...');
INSERT INTO `commodity_new_product` VALUES ('60', '吉利莲吉馨牛奶巧克力制品...', 'images/201812191051519011.jpg', '120.00', '99.00', '吉利莲吉馨牛奶巧克力制品...');
INSERT INTO `commodity_new_product` VALUES ('61', '吉利莲吉馨牛奶巧克力制品...', 'images/201812191051519011.jpg', '120.00', '99.00', '吉利莲吉馨牛奶巧克力制品...');
INSERT INTO `commodity_new_product` VALUES ('62', '越南沙巴哇综合蔬果干100g', 'images/201707260903301037.jpg', '19.90', '15.80', '越南沙巴哇综合蔬果干100g');
INSERT INTO `commodity_new_product` VALUES ('63', '越南沙巴哇综合蔬果干100g', 'images/201707260903301037.jpg', '19.90', '15.80', '越南沙巴哇综合蔬果干100g');
INSERT INTO `commodity_new_product` VALUES ('64', '越南沙巴哇综合蔬果干100g', 'images/201707260903301037.jpg', '19.90', '15.80', '越南沙巴哇综合蔬果干100g');
INSERT INTO `commodity_new_product` VALUES ('65', '越南沙巴哇综合蔬果干100g', 'images/201707260903301037.jpg', '19.90', '15.80', '越南沙巴哇综合蔬果干100g');
INSERT INTO `commodity_new_product` VALUES ('66', '法国博堡幸福密码红葡萄酒...', 'images/201807301441895045.jpg', '450.00', '320.00', '法国博堡幸福密码红葡萄酒...');
INSERT INTO `commodity_new_product` VALUES ('67', '法国博堡幸福密码红葡萄酒...', 'images/201807301441895045.jpg', '450.00', '320.00', '法国博堡幸福密码红葡萄酒...');
INSERT INTO `commodity_new_product` VALUES ('68', '法国博堡幸福密码红葡萄酒...', 'images/201807301441895045.jpg', '450.00', '320.00', '法国博堡幸福密码红葡萄酒...');
INSERT INTO `commodity_new_product` VALUES ('69', '法国博堡幸福密码红葡萄酒...', 'images/201807301441895045.jpg', '450.00', '320.00', '法国博堡幸福密码红葡萄酒...');
INSERT INTO `commodity_new_product` VALUES ('70', '八马（常规）金色龙井500', 'images/201709060930573033.jpg', '500.00', '500.00', '八马（常规）金色龙井500');
INSERT INTO `commodity_new_product` VALUES ('71', '八马（常规）金色龙井500', 'images/201709060930573033.jpg', '500.00', '500.00', '八马（常规）金色龙井500');
INSERT INTO `commodity_new_product` VALUES ('72', '八马（常规）金色龙井500', 'images/201709060930573033.jpg', '500.00', '500.00', '八马（常规）金色龙井500');
INSERT INTO `commodity_new_product` VALUES ('73', '八马（常规）金色龙井500', 'images/201709060930573033.jpg', '500.00', '500.00', '八马（常规）金色龙井500');
INSERT INTO `commodity_new_product` VALUES ('74', '52度泸州老窖青瓷头曲5...', 'images/201809031047487003.jpg', '199.00', '186.00', '52度泸州老窖青瓷头曲5...');
INSERT INTO `commodity_new_product` VALUES ('75', '52度泸州老窖青瓷头曲5...', 'images/201809031047487003.jpg', '199.00', '186.00', '52度泸州老窖青瓷头曲5...');
INSERT INTO `commodity_new_product` VALUES ('76', '52度泸州老窖青瓷头曲5...', 'images/201809031047487003.jpg', '199.00', '186.00', '52度泸州老窖青瓷头曲5...');
INSERT INTO `commodity_new_product` VALUES ('77', '52度泸州老窖青瓷头曲5...', 'images/201809031047487003.jpg', '199.00', '186.00', '52度泸州老窖青瓷头曲5...');
INSERT INTO `commodity_new_product` VALUES ('78', '2019春节家居生活套餐E6', 'images/201812251723458017.jpg', '999.00', '888.00', '2019春节家居生活套餐E6');
INSERT INTO `commodity_new_product` VALUES ('79', '2019春节家居生活套餐E6', 'images/201812251723458017.jpg', '999.00', '888.00', '2019春节家居生活套餐E6');
INSERT INTO `commodity_new_product` VALUES ('80', '2019春节家居生活套餐E6', 'images/201812251723458017.jpg', '999.00', '888.00', '2019春节家居生活套餐E6');
INSERT INTO `commodity_new_product` VALUES ('81', '2019春节家居生活套餐E6', 'images/201812251723458017.jpg', '999.00', '888.00', '2019春节家居生活套餐E6');
INSERT INTO `commodity_new_product` VALUES ('82', '浪漫味道・绣球+香槟玫瑰', 'images/201708231642779004.jpg', '528.00', '388.00', '浪漫味道・绣球+香槟玫瑰');
INSERT INTO `commodity_new_product` VALUES ('83', '浪漫味道・绣球+香槟玫瑰', 'images/201708231642779004.jpg', '528.00', '388.00', '浪漫味道・绣球+香槟玫瑰');
INSERT INTO `commodity_new_product` VALUES ('84', '浪漫味道・绣球+香槟玫瑰', 'images/201708231642779004.jpg', '528.00', '388.00', '浪漫味道・绣球+香槟玫瑰');
INSERT INTO `commodity_new_product` VALUES ('85', '浪漫味道・绣球+香槟玫瑰', 'images/201708231642779004.jpg', '528.00', '388.00', '浪漫味道・绣球+香槟玫瑰');
INSERT INTO `commodity_new_product` VALUES ('86', '印尼三角白燕盏250g', 'images/201611211411312039.jpg', '5816.00', '4698.00', '印尼三角白燕盏250g');
INSERT INTO `commodity_new_product` VALUES ('87', '印尼三角白燕盏250g', 'images/201611211411312039.jpg', '5816.00', '4698.00', '印尼三角白燕盏250g');
INSERT INTO `commodity_new_product` VALUES ('88', '印尼三角白燕盏250g', 'images/201611211411312039.jpg', '5816.00', '4698.00', '印尼三角白燕盏250g');
INSERT INTO `commodity_new_product` VALUES ('89', '印尼三角白燕盏250g', 'images/201611211411312039.jpg', '5816.00', '4698.00', '印尼三角白燕盏250g');
INSERT INTO `commodity_new_product` VALUES ('90', 'CK ACCACIA臻品...', 'images/201711171534882058.jpg', '7800.00', '6900.00', 'CK ACCACIA臻品...');
INSERT INTO `commodity_new_product` VALUES ('91', 'CK ACCACIA臻品...', 'images/201711171534882058.jpg', '7800.00', '6900.00', 'CK ACCACIA臻品...');
INSERT INTO `commodity_new_product` VALUES ('92', 'CK ACCACIA臻品...', 'images/201711171534882058.jpg', '7800.00', '6900.00', 'CK ACCACIA臻品...');
INSERT INTO `commodity_new_product` VALUES ('93', 'CK ACCACIA臻品...', 'images/201711171534882058.jpg', '7800.00', '6900.00', 'CK ACCACIA臻品...');
INSERT INTO `commodity_new_product` VALUES ('94', 'CK ACCACIA臻品...', 'images/201711171534882058.jpg', '7800.00', '6900.00', 'CK ACCACIA臻品...');
INSERT INTO `commodity_new_product` VALUES ('95', 'CK ACCACIA臻品...', 'images/201711171534882058.jpg', '7800.00', '6900.00', 'CK ACCACIA臻品...');
INSERT INTO `commodity_new_product` VALUES ('96', 'CK ACCACIA臻品...', 'images/201711171534882058.jpg', '7800.00', '6900.00', 'CK ACCACIA臻品...');
INSERT INTO `commodity_new_product` VALUES ('97', 'CK ACCACIA臻品...', 'images/201711171534882058.jpg', '7800.00', '6900.00', 'CK ACCACIA臻品...');
INSERT INTO `commodity_new_product` VALUES ('98', 'CK ACCACIA臻品...', 'images/201711171534882058.jpg', '7800.00', '6900.00', 'CK ACCACIA臻品...');
INSERT INTO `commodity_new_product` VALUES ('99', 'CK ACCACIA臻品...', 'images/201711171534882058.jpg', '7800.00', '6900.00', 'CK ACCACIA臻品...');
INSERT INTO `commodity_new_product` VALUES ('100', 'CK ACCACIA臻品...', 'images/201711171534882058.jpg', '7800.00', '6900.00', 'CK ACCACIA臻品...');
INSERT INTO `commodity_new_product` VALUES ('101', 'CK ACCACIA臻品...', 'images/201711171534882058.jpg', '7800.00', '6900.00', 'CK ACCACIA臻品...');
INSERT INTO `commodity_new_product` VALUES ('102', '达氏桌面空气净化器DAC...', 'images/201708011109181053.jpg', '848.00', '820.00', '达氏桌面空气净化器DAC...');
INSERT INTO `commodity_new_product` VALUES ('103', '达氏桌面空气净化器DAC...', 'images/201708011109181053.jpg', '848.00', '820.00', '达氏桌面空气净化器DAC...');
INSERT INTO `commodity_new_product` VALUES ('104', '达氏桌面空气净化器DAC...', 'images/201708011109181053.jpg', '848.00', '820.00', '达氏桌面空气净化器DAC...');
INSERT INTO `commodity_new_product` VALUES ('105', '达氏桌面空气净化器DAC...', 'images/201708011109181053.jpg', '848.00', '820.00', '达氏桌面空气净化器DAC...');
INSERT INTO `commodity_new_product` VALUES ('106', '达氏桌面空气净化器DAC...', 'images/201708011109181053.jpg', '848.00', '820.00', '达氏桌面空气净化器DAC...');
INSERT INTO `commodity_new_product` VALUES ('107', '达氏桌面空气净化器DAC...', 'images/201708011109181053.jpg', '848.00', '820.00', '达氏桌面空气净化器DAC...');
INSERT INTO `commodity_new_product` VALUES ('108', '达氏桌面空气净化器DAC...', 'images/201708011109181053.jpg', '848.00', '820.00', '达氏桌面空气净化器DAC...');
INSERT INTO `commodity_new_product` VALUES ('109', '达氏桌面空气净化器DAC...', 'images/201708011109181053.jpg', '848.00', '820.00', '达氏桌面空气净化器DAC...');
INSERT INTO `commodity_new_product` VALUES ('110', '达氏桌面空气净化器DAC...', 'images/201708011109181053.jpg', '848.00', '820.00', '达氏桌面空气净化器DAC...');
INSERT INTO `commodity_new_product` VALUES ('111', '达氏桌面空气净化器DAC...', 'images/201708011109181053.jpg', '848.00', '820.00', '达氏桌面空气净化器DAC...');
INSERT INTO `commodity_new_product` VALUES ('112', '达氏桌面空气净化器DAC...', 'images/201708011109181053.jpg', '848.00', '820.00', '达氏桌面空气净化器DAC...');
INSERT INTO `commodity_new_product` VALUES ('113', '达氏桌面空气净化器DAC...', 'images/201708011109181053.jpg', '848.00', '820.00', '达氏桌面空气净化器DAC...');

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `Price` varchar(255) DEFAULT NULL,
  `property` varchar(255) DEFAULT NULL,
  `special` varchar(255) DEFAULT NULL,
  `particulars` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('6', '佳沛阳光金奇异果（22-25枚）', '../images/201901081935893015.jpg', '328.00', 'jk', '进口', '佳沛阳光金奇异果（22-25枚）');
INSERT INTO `goodslist` VALUES ('7', '美早樱桃尝鲜装800g', '../images/201903070957480027.jpg', '238.00', 'xp', '新品', '美早樱桃尝鲜装800g');
INSERT INTO `goodslist` VALUES ('8', '新西兰红玫瑰苹果4.5kg', '../images/201707211037975058.jpg', '258.00', 'jh', '', '香脆可口 汁多爽脆');
INSERT INTO `goodslist` VALUES ('9', '新疆库尔勒香梨1kg', '../images/201705121039297028.jpg', '21.60', 'cx', '促销', '梨中贵族 甘甜滋润 沙漠中的一股清泉');
INSERT INTO `goodslist` VALUES ('10', '河北丰水梨2kg', '../images/201803051012151011.jpg', '30.80', 'fp', '扶贫', '新鲜水果味道 脆脆地 甜甜地 皮');
INSERT INTO `goodslist` VALUES ('11', '佳沛阳光金奇异果（22-25枚）', '../images/201901081935893015.jpg', '328.00', 'jk', '进口', '佳沛阳光金奇异果（22-25枚）');
INSERT INTO `goodslist` VALUES ('12', '美早樱桃尝鲜装', '../images/201903070957480027.jpg', '238.00', 'xp', '新品', '美早樱桃尝鲜装');
INSERT INTO `goodslist` VALUES ('13', '新西兰红玫瑰苹果4.5kg', '../images/201707211037975058.jpg', '258.00', 'jh', '', '香脆可口 汁多爽脆');
INSERT INTO `goodslist` VALUES ('14', '新疆库尔勒香梨1kg', '../images/201705121039297028.jpg', '21.60', 'cx', '促销', '梨中贵族 甘甜滋润 沙漠中的一股清泉');
INSERT INTO `goodslist` VALUES ('15', '河北丰水梨2kg', '../images/201803051012151011.jpg', '30.80', 'fp', '扶贫', '新鲜水果味道 脆脆地 甜甜地 皮');
INSERT INTO `goodslist` VALUES ('16', '佳沛阳光金奇异果（22-25枚）', '../images/201901081935893015.jpg', '328.00', 'jk', '进口', '佳沛阳光金奇异果（22-25枚）');
INSERT INTO `goodslist` VALUES ('17', '美早樱桃尝鲜装800g', '../images/201903070957480027.jpg', '238.00', 'xp', '新品', '美早樱桃尝鲜装');
INSERT INTO `goodslist` VALUES ('18', '新西兰红玫瑰苹果4.5kg', '../images/201707211037975058.jpg', '258.00', 'jh', '', '香脆可口 汁多爽脆');
INSERT INTO `goodslist` VALUES ('19', '新疆库尔勒香梨1kg', '../images/201705121039297028.jpg', '21.60', 'cx', '促销', '梨中贵族 甘甜滋润 沙漠中的一股清泉');
INSERT INTO `goodslist` VALUES ('20', '河北丰水梨2kg', '../images/201803051012151011.jpg', '30.80', 'fp', '扶贫', '新鲜水果味道 脆脆地 甜甜地 皮');
INSERT INTO `goodslist` VALUES ('21', '佳沛阳光金奇异果（22-25枚）', '../images/201901081935893015.jpg', '328.00', 'jk', '进口', '佳沛阳光金奇异果（22-25枚）');
INSERT INTO `goodslist` VALUES ('22', '美早樱桃尝鲜装800g', '../images/201903070957480027.jpg', '238.00', 'xp', '新品', '美早樱桃尝鲜装');
INSERT INTO `goodslist` VALUES ('23', '新西兰红玫瑰苹果4.5kg', '../images/201707211037975058.jpg', '258.00', 'jh', '', '香脆可口 汁多爽脆');
INSERT INTO `goodslist` VALUES ('24', '新疆库尔勒香梨1kg', '../images/201705121039297028.jpg', '21.60', 'cx', '促销', '梨中贵族 甘甜滋润 沙漠中的一股清泉');
INSERT INTO `goodslist` VALUES ('25', '河北丰水梨2kg', '../images/201803051012151011.jpg', '30.80', 'fp', '扶贫', '新鲜水果味道 脆脆地 甜甜地 皮');
INSERT INTO `goodslist` VALUES ('26', '佳沛阳光金奇异果（22-25枚）', '../images/201901081935893015.jpg', '328.00', 'jk', '进口', '佳沛阳光金奇异果（22-25枚）');
INSERT INTO `goodslist` VALUES ('27', '美早樱桃尝鲜装800g', '../images/201903070957480027.jpg', '238.00', 'xp', '新品', '美早樱桃尝鲜装');
INSERT INTO `goodslist` VALUES ('28', '新西兰红玫瑰苹果4.5kg', '../images/201707211037975058.jpg', '258.00', 'jh', '', '香脆可口 汁多爽脆');
INSERT INTO `goodslist` VALUES ('29', '新疆库尔勒香梨1kg', '../images/201705121039297028.jpg', '21.60', 'cx', '促销', '梨中贵族 甘甜滋润 沙漠中的一股清泉');
INSERT INTO `goodslist` VALUES ('30', '河北丰水梨2kg', '../images/201803051012151011.jpg', '30.80', 'fp', '扶贫', '新鲜水果味道 脆脆地 甜甜地 皮');
INSERT INTO `goodslist` VALUES ('31', '佳沛阳光金奇异果（22-25枚）', '../images/201901081935893015.jpg', '328.00', 'jk', '进口', '佳沛阳光金奇异果（22-25枚）');
INSERT INTO `goodslist` VALUES ('32', '美早樱桃尝鲜装800g', '../images/201903070957480027.jpg', '238.00', 'xp', '新品', '美早樱桃尝鲜装');
INSERT INTO `goodslist` VALUES ('33', '新西兰红玫瑰苹果4.5kg', '../images/201707211037975058.jpg', '258.00', 'jh', '', '香脆可口 汁多爽脆');
INSERT INTO `goodslist` VALUES ('34', '新疆库尔勒香梨1kg', '../images/201705121039297028.jpg', '21.60', 'cx', '促销', '梨中贵族 甘甜滋润 沙漠中的一股清泉');
INSERT INTO `goodslist` VALUES ('35', '河北丰水梨2kg', '../images/201803051012151011.jpg', '30.80', 'fp', '扶贫', '新鲜水果味道 脆脆地 甜甜地 皮');
INSERT INTO `goodslist` VALUES ('36', '佳沛阳光金奇异果（22-25枚）', '../images/201901081935893015.jpg', '328.00', 'jk', '进口', '佳沛阳光金奇异果（22-25枚）');
INSERT INTO `goodslist` VALUES ('37', '美早樱桃尝鲜装800g', '../images/201903070957480027.jpg', '238.00', 'xp', '新品', '美早樱桃尝鲜装');
INSERT INTO `goodslist` VALUES ('38', '新西兰红玫瑰苹果4.5kg', '../images/201707211037975058.jpg', '258.00', 'jh', '', '香脆可口 汁多爽脆');
INSERT INTO `goodslist` VALUES ('39', '新疆库尔勒香梨1kg', '../images/201705121039297028.jpg', '21.60', 'cx', '促销', '梨中贵族 甘甜滋润 沙漠中的一股清泉');
INSERT INTO `goodslist` VALUES ('40', '河北丰水梨2kg', '../images/201803051012151011.jpg', '30.80', 'fp', '扶贫', '新鲜水果味道 脆脆地 甜甜地 皮');
INSERT INTO `goodslist` VALUES ('41', '佳沛阳光金奇异果（22-25枚）', '../images/201901081935893015.jpg', '328.00', 'jk', '进口', '佳沛阳光金奇异果（22-25枚）');
INSERT INTO `goodslist` VALUES ('42', '美早樱桃尝鲜装800g', '../images/201903070957480027.jpg', '238.00', 'xp', '新品', '美早樱桃尝鲜装');
INSERT INTO `goodslist` VALUES ('43', '新西兰红玫瑰苹果4.5kg', '../images/201707211037975058.jpg', '258.00', 'jh', '', '香脆可口 汁多爽脆');
INSERT INTO `goodslist` VALUES ('44', '新疆库尔勒香梨1kg', '../images/201705121039297028.jpg', '21.60', 'cx', '促销', '梨中贵族 甘甜滋润 沙漠中的一股清泉');
INSERT INTO `goodslist` VALUES ('45', '河北丰水梨2kg', '../images/201803051012151011.jpg', '30.80', 'fp', '扶贫', '新鲜水果味道 脆脆地 甜甜地 皮');
INSERT INTO `goodslist` VALUES ('46', '佳沛阳光金奇异果（22-25枚）', '../images/201901081935893015.jpg', '328.00', 'jk', '进口', '佳沛阳光金奇异果（22-25枚）');
INSERT INTO `goodslist` VALUES ('47', '美早樱桃尝鲜装800g', '../images/201903070957480027.jpg', '238.00', 'xp', '新品', '美早樱桃尝鲜装');
INSERT INTO `goodslist` VALUES ('48', '新西兰红玫瑰苹果4.5kg', '../images/201707211037975058.jpg', '258.00', 'jh', '', '香脆可口 汁多爽脆');
INSERT INTO `goodslist` VALUES ('49', '新疆库尔勒香梨1kg', '../images/201705121039297028.jpg', '21.60', 'cx', '促销', '梨中贵族 甘甜滋润 沙漠中的一股清泉');
INSERT INTO `goodslist` VALUES ('50', '河北丰水梨2kg', '../images/201803051012151011.jpg', '30.80', 'fp', '扶贫', '新鲜水果味道 脆脆地 甜甜地 皮');
INSERT INTO `goodslist` VALUES ('51', '佳沛阳光金奇异果（22-25枚）', '../images/201901081935893015.jpg', '328.00', 'jk', '进口', '佳沛阳光金奇异果（22-25枚）');
INSERT INTO `goodslist` VALUES ('52', '美早樱桃尝鲜装800g', '../images/201903070957480027.jpg', '238.00', 'xp', '新品', '美早樱桃尝鲜装');
INSERT INTO `goodslist` VALUES ('53', '新西兰红玫瑰苹果4.5kg', '../images/201707211037975058.jpg', '258.00', 'jh', '', '香脆可口 汁多爽脆');
INSERT INTO `goodslist` VALUES ('54', '新疆库尔勒香梨1kg', '../images/201705121039297028.jpg', '21.60', 'cx', '促销', '梨中贵族 甘甜滋润 沙漠中的一股清泉');
INSERT INTO `goodslist` VALUES ('55', '河北丰水梨2kg', '../images/201803051012151011.jpg', '30.80', 'fp', '扶贫', '新鲜水果味道 脆脆地 甜甜地 皮');
INSERT INTO `goodslist` VALUES ('56', '佳沛阳光金奇异果（22-25枚）', '../images/201901081935893015.jpg', '328.00', 'jk', '进口', '佳沛阳光金奇异果（22-25枚）');
INSERT INTO `goodslist` VALUES ('57', '美早樱桃尝鲜装800g', '../images/201903070957480027.jpg', '238.00', 'xp', '新品', '美早樱桃尝鲜装');
INSERT INTO `goodslist` VALUES ('58', '新西兰红玫瑰苹果4.5kg', '../images/201707211037975058.jpg', '258.00', 'jh', '', '香脆可口 汁多爽脆');
INSERT INTO `goodslist` VALUES ('59', '新疆库尔勒香梨1kg', '../images/201705121039297028.jpg', '21.60', 'cx', '促销', '梨中贵族 甘甜滋润 沙漠中的一股清泉');
INSERT INTO `goodslist` VALUES ('60', '河北丰水梨2kg', '../images/201803051012151011.jpg', '30.80', 'fp', '扶贫', '新鲜水果味道 脆脆地 甜甜地 皮');
INSERT INTO `goodslist` VALUES ('1', '佳沛阳光金奇异果（22-25枚）', '../images/201901081935893015.jpg', '328.00', 'jk', '进口', '佳沛阳光金奇异果（22-25枚）');
INSERT INTO `goodslist` VALUES ('2', '美早樱桃尝鲜装800g', '../images/201903070957480027.jpg', '238.00', 'xp', '新品', '美早樱桃尝鲜装');
INSERT INTO `goodslist` VALUES ('3', '新西兰红玫瑰苹果4.5kg', '../images/201707211037975058.jpg', '258.00', 'jh', '', '香脆可口 汁多爽脆');
INSERT INTO `goodslist` VALUES ('4', '新疆库尔勒香梨1kg', '../images/201705121039297028.jpg', '21.60', 'cx', '促销', '梨中贵族 甘甜滋润 沙漠中的一股清泉');
INSERT INTO `goodslist` VALUES ('5', '河北丰水梨2kg', '../images/201803051012151011.jpg', '30.80', 'fp', '扶贫', '新鲜水果味道 脆脆地 甜甜地 皮');

-- ----------------------------
-- Table structure for signin
-- ----------------------------
DROP TABLE IF EXISTS `signin`;
CREATE TABLE `signin` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of signin
-- ----------------------------
INSERT INTO `signin` VALUES ('13751885288', '5880996');
INSERT INTO `signin` VALUES ('13751885289', '5880996');
INSERT INTO `signin` VALUES ('13640856300', '5880996');
SET FOREIGN_KEY_CHECKS=1;
