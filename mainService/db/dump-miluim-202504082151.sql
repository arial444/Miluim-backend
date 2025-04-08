-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: miluim
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `archive`
--

DROP TABLE IF EXISTS `archive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `archive` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` bigint DEFAULT NULL,
  `fromModel` varchar(255) DEFAULT NULL,
  `originalRecord` longtext,
  `originalRecordId` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `archive`
--

LOCK TABLES `archive` WRITE;
/*!40000 ALTER TABLE `archive` DISABLE KEYS */;
/*!40000 ALTER TABLE `archive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assigns`
--

DROP TABLE IF EXISTS `assigns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assigns` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assigns`
--

LOCK TABLES `assigns` WRITE;
/*!40000 ALTER TABLE `assigns` DISABLE KEYS */;
/*!40000 ALTER TABLE `assigns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'מחלקה 1','2025-04-07 18:07:44','2025-04-07 18:07:44'),(2,'מחלקה 2','2025-04-07 18:08:52','2025-04-07 18:08:52');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `category` enum('personal','shooting','logistics','explosive','arsenal','other') DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ranks`
--

DROP TABLE IF EXISTS `ranks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ranks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `officer` tinyint(1) DEFAULT '0',
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ranks`
--

LOCK TABLES `ranks` WRITE;
/*!40000 ALTER TABLE `ranks` DISABLE KEYS */;
INSERT INTO `ranks` VALUES (1,'רס\"ל',0,'2025-04-07 18:21:31','2025-04-07 18:21:31');
/*!40000 ALTER TABLE `ranks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `signs`
--

DROP TABLE IF EXISTS `signs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `signs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `soldierId` int NOT NULL,
  `item` int NOT NULL,
  `currentHolder` int DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `signs_soldiers_FK` (`soldierId`),
  KEY `signs_items_FK` (`item`),
  KEY `signs_soldiers_FK_1` (`currentHolder`),
  CONSTRAINT `signs_items_FK` FOREIGN KEY (`item`) REFERENCES `items` (`id`),
  CONSTRAINT `signs_soldiers_FK` FOREIGN KEY (`soldierId`) REFERENCES `soldiers` (`id`),
  CONSTRAINT `signs_soldiers_FK_1` FOREIGN KEY (`currentHolder`) REFERENCES `soldiers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `signs`
--

LOCK TABLES `signs` WRITE;
/*!40000 ALTER TABLE `signs` DISABLE KEYS */;
/*!40000 ALTER TABLE `signs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `signsextra`
--

DROP TABLE IF EXISTS `signsextra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `signsextra` (
  `id` int NOT NULL AUTO_INCREMENT,
  `soldierId` int NOT NULL,
  `item` int NOT NULL,
  `number` varchar(255) NOT NULL,
  `currentHolder` int DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `signsextra_items_FK` (`item`),
  KEY `signsextra_soldiers_FK_1` (`soldierId`),
  CONSTRAINT `signsextra_items_FK` FOREIGN KEY (`item`) REFERENCES `items` (`id`),
  CONSTRAINT `signsextra_soldiers_FK` FOREIGN KEY (`soldierId`) REFERENCES `soldiers` (`id`),
  CONSTRAINT `signsextra_soldiers_FK_1` FOREIGN KEY (`soldierId`) REFERENCES `soldiers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `signsextra`
--

LOCK TABLES `signsextra` WRITE;
/*!40000 ALTER TABLE `signsextra` DISABLE KEYS */;
/*!40000 ALTER TABLE `signsextra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `soldierassigns`
--

DROP TABLE IF EXISTS `soldierassigns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `soldierassigns` (
  `id` int NOT NULL AUTO_INCREMENT,
  `soldierId` int NOT NULL,
  `assign` int NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `soldierassigns_soldiers_FK` (`soldierId`),
  KEY `soldierassigns_assigns_FK` (`assign`),
  CONSTRAINT `soldierassigns_assigns_FK` FOREIGN KEY (`assign`) REFERENCES `assigns` (`id`),
  CONSTRAINT `soldierassigns_soldiers_FK` FOREIGN KEY (`soldierId`) REFERENCES `soldiers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `soldierassigns`
--

LOCK TABLES `soldierassigns` WRITE;
/*!40000 ALTER TABLE `soldierassigns` DISABLE KEYS */;
/*!40000 ALTER TABLE `soldierassigns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `soldiers`
--

DROP TABLE IF EXISTS `soldiers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `soldiers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `personalNumber` varchar(255) DEFAULT NULL,
  `rank` int DEFAULT NULL,
  `department` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `license` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `soldiers_departments_FK` (`department`),
  KEY `soldiers_ranks_FK` (`rank`),
  CONSTRAINT `soldiers_departments_FK` FOREIGN KEY (`department`) REFERENCES `departments` (`id`),
  CONSTRAINT `soldiers_ranks_FK` FOREIGN KEY (`rank`) REFERENCES `ranks` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `soldiers`
--

LOCK TABLES `soldiers` WRITE;
/*!40000 ALTER TABLE `soldiers` DISABLE KEYS */;
INSERT INTO `soldiers` VALUES (1,'123456789',1,1,'Israel','Cohen','israel.cohen@example.com','0501234567','Tel Aviv','123 Herzl St','2024-01-01 02:00:00','auto','active','2025-04-07 17:18:49','2025-04-07 17:18:49'),(2,'123456789',1,1,'Israel','Cohen','israel.cohen@example.com','0501234567','Tel Aviv','123 Herzl St','2024-01-01 02:00:00','auto','active','2025-04-07 17:19:29','2025-04-07 17:19:29'),(3,'123456789',1,2,'Israel-new','Cohen','israel.cohen@example.com','0501234567','Tel Aviv','123 Herzl St','2024-01-01 02:00:00','auto','active','2025-04-07 17:19:34','2025-04-07 17:20:08');
/*!40000 ALTER TABLE `soldiers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'miluim'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-08 21:51:59
