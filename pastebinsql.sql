-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pastebin
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pastes`
--

DROP TABLE IF EXISTS `pastes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pastes` (
  `id` varchar(12) NOT NULL,
  `content` text NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  `max_views` int DEFAULT NULL,
  `views` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pastes`
--

LOCK TABLES `pastes` WRITE;
/*!40000 ALTER TABLE `pastes` DISABLE KEYS */;
INSERT INTO `pastes` VALUES ('boJnVl52','as','2025-12-30 22:23:40',10,1,'2025-12-30 16:53:29'),('oSPJ0bBa','asd','2025-12-30 22:23:03',1,0,'2025-12-30 16:53:02'),('ozMsFy-n','http://localhost:5173/','2025-12-30 21:22:21',10,1,'2025-12-30 15:52:11'),('RL8HSfdo','import dotenv from \"dotenv\";\ndotenv.config();\n\nimport mysql from \"mysql2/promise\";\n\nexport const pool = mysql.createPool({\n  host: process.env.DB_HOST,\n  user: process.env.DB_USER,\n  password: process.env.DB_PASS,\n  database: process.env.DB_NAME,\n  waitForConnections: true,\n  connectionLimit: 5\n});\n','2025-12-30 21:16:01',10,0,'2025-12-30 15:45:51'),('RNn91cDh','hi',NULL,NULL,3,'2025-12-30 15:54:14'),('YlCvmoe-','Hi hello','2025-12-30 23:04:30',10,1,'2025-12-30 17:34:19');
/*!40000 ALTER TABLE `pastes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-30 23:06:34
