-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: nightout
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(500) NOT NULL,
  `signUpDate` date NOT NULL,
  `accountType` varchar(45) NOT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `password_UNIQUE` (`password`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('ahm','ahm@ahm.com','$2b$10$u3NFtnV78beZFfoJ4BL9ZuxKOXx2KU1dncwzMRkLJawCF8dQjKKg.','2022-12-18','Venue'),('arch','arch@arch.com','$2b$10$Fm28bBTaxni2xathoosJUedwkhl8lrl20NX.tpsrd2JwT9g4kC0vC','2022-12-18','Venue'),('b018','b018@b018.com','$2b$10$eOlOS5pMQmIPcqjNdfveGuoyu/VLFuQPVOPjcyuvMz/gp7tqcKnty','2022-12-18','Venue'),('caprice','caprice@caprice.com','$2b$10$6cEuMVcHISUPEfxGpPKzkOQdCIM4dFmDIm4rx78HJj7TBpU2bMVdO','2022-12-18','Venue'),('cercle','cercle@cercle.com','$2b$10$jX7UT8i8Xn/8g3o5VlxY9e36VNiNLCNwgoH8p88Lk6UWlkK5Wqof6','2022-12-18','Venue'),('edoe','eliedoe@outlook.com','$2b$10$065U766vjHW2Sf/JlrJfOesstvUFciRv5hSHcdG0hzfrJYoQ1gteO','2022-12-18','Customer'),('frozencherry','frozencherry@frozencherry.com','$2b$10$GPB455aUXHePNewZ0g31guoCJd3pl5me1Y5PJFc8wnnY34IfIzAdy','2022-12-19','Venue'),('jdoe','janedoe@outlook.com','$2b$10$g3SgcdHfeutCPMu9Ixd//Or9PSr8s8fjOaFNZI4EmwsAGU6WF.2Pe','2022-12-18','Customer'),('Reem02','reem.shehayib@lau.edu','$2b$10$nrSO5o1GMbQtiYwQHszkYuKiTQYp7AcsOc4ZOMMEApFjL9EbGdGe6','2022-12-17','Manager'),('Sharbel02','sharbel.abousabha@lau.edu','$2b$10$nKKWoQ7uuyr6P11IIC.oOuog0YLbe2yXlo4cQlBZwfrnfAQ0eZEkW','2022-12-17','Manager'),('theballroomblitz','ballroom@ballroom.com','$2b$10$c1Xjnatj2Z4MMShoRjQZBOPAbNao1vpQFndjYa2fIpHDTFgQRx.ea','2022-12-18','Venue'),('zadnan2002','adnan.alzahabi@lau.edu','$2b$10$G5RNYf.qXavCGlaHS2Z2A.KIeyvQWO2eJ0YGDDv9lDtzHg35UQk36','2022-12-17','Manager');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customerID` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `phoneNumber` decimal(8,0) NOT NULL,
  `country` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `street` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`customerID`),
  UNIQUE KEY `idCUSTOMER_UNIQUE` (`customerID`),
  UNIQUE KEY `phoneNumber_UNIQUE` (`phoneNumber`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=10056 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (10054,'Jane','Doe','2002-02-15',70999123,'Lebanon','Beirut','Bliss','jdoe'),(10055,'Elie','Doe','1999-07-18',70899543,'Lebanon','Byblos','Blat','edoe');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_request`
--

DROP TABLE IF EXISTS `event_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_request` (
  `requestID` int NOT NULL AUTO_INCREMENT,
  `eventRequestName` varchar(100) NOT NULL,
  `eventRequestType` varchar(45) NOT NULL,
  `ageRestrictionRequest` varchar(45) NOT NULL,
  `dressCodeRequest` varchar(45) NOT NULL,
  `ticketRequestCount` int NOT NULL,
  `descriptionRequest` varchar(200) NOT NULL,
  `statusRequest` int NOT NULL,
  `dateRequest` date NOT NULL,
  `timeRequest` time NOT NULL,
  `performer` varchar(45) NOT NULL DEFAULT 'Joe Tekli',
  `ticketPrice` int NOT NULL,
  `venueUsername` varchar(45) NOT NULL,
  PRIMARY KEY (`requestID`),
  UNIQUE KEY `requestID_UNIQUE` (`requestID`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_request`
--

LOCK TABLES `event_request` WRITE;
/*!40000 ALTER TABLE `event_request` DISABLE KEYS */;
INSERT INTO `event_request` VALUES (18,'MONOLINK','Techno','18','Informal',3998,'MONOLINK concert in Lebanon hosted by AHM and the Factory People',2,'2022-12-10','01:00:00','Monolink',30,'ahm'),(19,'Omar Souleyman','Techno','20','Informal',1999,'Late Knights Presents: Omar Souleyman Live in Concert at AHM',1,'2022-12-17','22:00:00','Omar Souleyman',30,'ahm'),(20,'El Rass','Hip Hop','18','Informal',1000,'Late Knights Presents: El Rass Live in Concert at AHM',1,'2022-12-26','22:00:00','El Rass',10,'ahm'),(21,'Saint Levant','Hip Hop','19','Informal',1000,'Late Knights Presents: Saint Levant Live in Concert at AHM',1,'2022-12-28','22:00:00','Saint Levant',15,'ahm'),(22,'House Of Pop','Pop','21','Informal',1000,'House Of Pop: Fridays at AHM',1,'2022-12-30','22:00:00','Nareg',0,'ahm'),(23,'Love Night','Pop','20','Love Theme',999,'The Love Train event of the Christmas vacation!',1,'2022-12-22','22:00:00','Mayssa Wass',10,'ahm'),(24,'MASSANO','Techno','21','Informal',3000,'Massano in Concert!',1,'2022-12-24','22:00:00','Massano',30,'ahm'),(25,'ADRIATIQUE','Techno','19','Informal',5000,'New Year\'s Adriatique Performance at Seaside Arena',1,'2022-12-31','23:00:00','Adriatique',40,'ahm'),(26,'Virgin Radio: R&B Night','Hip Hop','18','Informal',1000,'Virgin Radio\'s R&B and Hip Hop Thursday night!',1,'2022-06-23','22:00:00','Jack Sleiman',10,'arch'),(27,'Oriental Night','Pop','18','Informal',1000,'Oriental Night at ARCH Rooftop with Dimi!',1,'2022-06-23','22:00:00','Dimi',0,'arch'),(28,'Hip Hop Night','Hip Hop','18','Informal',2000,'HipHop Night with ACE',1,'2022-06-03','22:00:00','ACE',0,'caprice'),(29,'AFRO NIGHT','Afro','18','Informal',2000,'AFRO BEATS with Fireboy DML at Caprice!',1,'2023-01-06','22:00:00','Fireboy DML',20,'caprice'),(30,'Pop Fridays','Pop','18','Informal',1000,'Friday\'s at CERCLE, Lebanon\'s Newest Night Club',1,'2022-12-16','22:00:00','Dimi',10,'cercle'),(31,'Francis Mercier','Techno','18','Informal',1000,'Francis Mercier in Concert!',1,'2022-12-23','22:00:00','Francis Mercier',30,'b018'),(32,'JUSTJ','Techno','18','Informal',1000,'JUSTJ live in Concert!',1,'2022-12-24','23:00:00','Joe Maalouf',15,'b018'),(33,'Virgin Radio Lebanon: Jingle Ball 2022','Pop','18','Informal',1000,'Virgin Radio Lebanon\'s \'Jingle Ball 2022\' at The Ballroom Blitz with Jack Sleiman & Friends.',1,'2022-12-23','22:00:00','Jack Sleiman',15,'theballroomblitz'),(34,'Pop On Top','Pop','18','Informal',2000,'Frozen Cherry Pop on Top!',1,'2022-10-28','22:00:00','EDDY',0,'frozencherry'),(35,'One Big Gathering','Pop','18','Informal',2000,'Virgin radio: One Big Gathering',1,'2022-08-12','22:00:00','Jack Sleiman',0,'frozencherry'),(36,'Halloween Gathering','Pop','18','Informal',2000,'Halloween Party at Frozen Cherry with SIMI!',1,'2022-11-25','22:00:00','Simi',0,'frozencherry'),(37,'Winter Festival 2023','Pop','18','Informal',2000,'Winter Festival 2023 with Jack Sleiman & Friends',1,'2022-12-30','22:00:00','Jack Sleiman',15,'frozencherry'),(38,'Fatima Hajji','Techno','18','Informal',2000,'Often considered as one of the most influential underground and hard-techno artists, Fatima Hajji finally makes her awaited return.',1,'2022-12-16','22:00:00','Fatima Hajji',18,'theballroomblitz'),(39,'Margaret Dygas','Country','18','Informal',2000,'The curtains are up and the Queen of Perlon is coming to town.',1,'2023-01-06','22:00:00','Margaret Dygas',20,'theballroomblitz'),(40,'SS.HH.A.N.A.','Pop','18','Informal',2000,'SS.HH.A.N.A. Live at The Ballroom Blitz',1,'2022-12-25','22:00:00','SS.HH.A.N.A.',15,'theballroomblitz'),(41,'Joris Voorn','Techno','19','Informal',1999,'Joris Voorn doesn’t require any introductions! The Dutch DJ and Producer has made a global impact through his music.',1,'2022-12-29','22:00:00','Joris Voorn',29,'theballroomblitz'),(42,'NYE at B 018','Techno','18','Informal',1999,'This New Year’s eve is like no other at B 018. An exceptional performance by non-other than Notre Dame to mark a historical night!',1,'2022-12-31','22:00:00','Notre Dame',13,'theballroomblitz'),(45,'Star Wars Fiesta','Techno','24','Bring your own Lightsaber',2000,'Ewoks are welcome',1,'2040-06-14','07:06:00','Princess Lea',20,'ahm');
/*!40000 ALTER TABLE `event_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manager` (
  `managerID` int NOT NULL,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `phoneNumber` decimal(8,0) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `address` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`managerID`),
  UNIQUE KEY `managerID_UNIQUE` (`managerID`),
  UNIQUE KEY `phoneNumber_UNIQUE` (`phoneNumber`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager`
--

LOCK TABLES `manager` WRITE;
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
INSERT INTO `manager` VALUES (1,'Adnan','Al Zahabi',71571855,'2002-02-13','Malla Street','zadnan2002'),(2,'Reem','Shehayib',81684922,'2002-10-03','Ain Hala','Reem02'),(3,'Sharbel','Abou Sabha',71471823,'2002-05-08','Al Midan','Sharbel02');
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `music_genre`
--

DROP TABLE IF EXISTS `music_genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `music_genre` (
  `genreType` varchar(30) NOT NULL,
  `beatsPerMinute` int NOT NULL,
  `genreDescription` varchar(200) NOT NULL,
  PRIMARY KEY (`genreType`),
  UNIQUE KEY `genreType_UNIQUE` (`genreType`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `music_genre`
--

LOCK TABLES `music_genre` WRITE;
/*!40000 ALTER TABLE `music_genre` DISABLE KEYS */;
INSERT INTO `music_genre` VALUES ('Afro',105,'Afrobeat is a mix of African music and American soul and jazz. On the other hand, Afrobeats, also known as Afropop.'),('Country',170,'music derived from or imitating the folk style of the Southern U.S. or of the Western cowboy.'),('Hip Hop',90,'Hip hop music or hip-hop music, also known as rap music and formerly known as disco rap, is a genre of popular music that originated in New York City in the 1970s.'),('Pop',120,'Popular music is music with wide appeal that is typically distributed to large audiences through the music industry.'),('Techno',130,' electronic dance music that features a fast beat and synthesized sounds usually without vocals or a conventional popular song structure.');
/*!40000 ALTER TABLE `music_genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `ticketID` int NOT NULL AUTO_INCREMENT,
  `ticketPrice` decimal(4,2) NOT NULL,
  `dateRequest` date NOT NULL,
  `timeRequest` time NOT NULL,
  `requestID` int NOT NULL,
  `eventRequestName` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `venueUsername` varchar(45) NOT NULL,
  PRIMARY KEY (`ticketID`),
  UNIQUE KEY `ticketID_UNIQUE` (`ticketID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (11,30.00,'2022-12-09','01:00:00',18,'MONOLINK','jdoe','ahm'),(13,29.00,'2022-12-28','22:00:00',41,'Joris Voorn','jdoe','theballroomblitz'),(14,13.00,'2022-12-30','22:00:00',42,'NYE at B 018','jdoe','theballroomblitz'),(15,10.00,'2022-12-21','22:00:00',23,'Love Night','jdoe','ahm'),(16,30.00,'2022-12-16','22:00:00',19,'Omar Souleyman','jdoe','ahm');
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venue`
--

DROP TABLE IF EXISTS `venue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venue` (
  `venueID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `phoneNumber` decimal(8,0) NOT NULL,
  `country` varchar(45) NOT NULL,
  `caza` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `street` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`venueID`),
  UNIQUE KEY `venueID_UNIQUE` (`venueID`),
  UNIQUE KEY `phoneNumber_UNIQUE` (`phoneNumber`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venue`
--

LOCK TABLES `venue` WRITE;
/*!40000 ALTER TABLE `venue` DISABLE KEYS */;
INSERT INTO `venue` VALUES (9,'AHM',1777888,'Lebanon','Beirut','Beirut','Beirut Waterfront','ahm'),(10,'ARCH',1456736,'Lebanon','Beirut','Beirut','Dora roundabout, Daoura','arch'),(11,'Caprice',1456732,'Lebanon','Beirut','Beirut','Sea Side Road','caprice'),(12,'The Ballroom Blitz',1456789,'Lebanon','Beirut','Beirut','Karantina','theballroomblitz'),(14,'B018',1333222,'Lebanon','Beirut','Beirut','Karantina','b018'),(15,'Cercle',1928323,'Lebanon','Beirut','Beirut','Zouk Mosbeh','cercle'),(16,'Frozen Cherry',1888797,'Lebanon','Mount Lebanon','Zaarour','Zaarour Club','frozencherry');
/*!40000 ALTER TABLE `venue` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-21 14:48:11
