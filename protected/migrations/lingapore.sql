-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 23, 2014 at 04:00 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `lingapore`
--

-- --------------------------------------------------------

--
-- Table structure for table `site_admin_user`
--

CREATE TABLE IF NOT EXISTS `site_admin_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(128) NOT NULL,
  `role` varchar(20) NOT NULL,
  `create_at` datetime NOT NULL COMMENT 'GMT+0',
  `update_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'GMT+0',
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `site_admin_user`
--

INSERT INTO `site_admin_user` (`id`, `name`, `email`, `password`, `role`, `create_at`, `update_at`, `status`) VALUES
(1, 'Sumanta', 'admin@infoway.us', 'e10adc3949ba59abbe56e057f20f883e', 'admin', '2014-09-08 00:00:00', '2014-10-22 20:55:35', 1);

-- --------------------------------------------------------

--
-- Table structure for table `site_blog`
--

CREATE TABLE IF NOT EXISTS `site_blog` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `blog_category_id` bigint(20) unsigned NOT NULL,
  `author_id` bigint(20) unsigned NOT NULL COMMENT 'user_id',
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` text COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `create_at` datetime NOT NULL COMMENT 'GMT+0',
  `update_at` datetime NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0=>draft,1=>active,2=>unpublish,3=>delete',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=128 ;

--
-- Dumping data for table `site_blog`
--

INSERT INTO `site_blog` (`id`, `blog_category_id`, `author_id`, `slug`, `title`, `content`, `image`, `create_at`, `update_at`, `status`) VALUES
(1, 1, 1, 'abc-fgd', 'Show How Social Amplifies the Work They Are Already Doing', 'Lorem Ipsum is simply dummy text e‑Learning pioneer, people and innovation have fueled our growth Lectora, our flagship product, has blazed the trail as the first authoring software making rapid e-Learning simple and cost-effective. From the beginning, content where you track the results.', '', '2014-08-19 14:43:00', '2014-08-19 14:43:00', 1),
(2, 1, 3, 'abc-fgd', 'Show How Social Amplifies the Work They Are Already Doing 2', '2 Lorem Ipsum is simply dummy text e‑Learning pioneer, people and innovation have fueled our growth Lectora, our flagship product, has blazed the trail as the first authoring software making rapid e-Learning simple and cost-effective. From the beginning, content where you track the results.', '', '2014-08-19 14:43:00', '2014-08-19 14:43:00', 1),
(27, 1, 4, 'abc-fgd', 'xyz blog', '2 Lorem Ipsum is simply dummy text e‑Learning pioneer, people and innovation have fueled our growth Lectora, our flagship product, has blazed the trail as the first authoring software making rapid e-Learning simple ', '', '2014-10-10 11:08:20', '2014-10-10 11:08:20', 1),
(28, 1, 4, 'abc-fgd', ' Show How Social Amplifies the Work They Are Already Doing 3', '2 Lorem Ipsum is simply dummy text e‑Learning pioneer, people and innovation have fueled our growth Lectora, our flagship product, has blazed the trail as the first authoring software making rapid e-Learning simple and....', '', '2014-10-10 11:15:18', '2014-10-10 11:15:18', 1),
(29, 1, 4, 'abc-fgd', 'new blog', 'new blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blog', 'abroad.png', '2014-10-10 12:45:33', '2014-10-10 12:45:33', 2),
(30, 1, 4, 'abc-fgd', 'new blog', 'new blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blog', 'abroad.png', '2014-10-10 12:53:05', '2014-10-10 12:53:05', 2),
(31, 1, 4, 'abc-fgd', 'new blog', 'new blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blog', 'abroad.png', '2014-10-10 12:53:30', '2014-10-10 12:53:30', 2),
(32, 1, 4, 'abc-fgd', 'new blog', 'new blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blog', 'abroad.png', '2014-10-10 12:56:12', '2014-10-10 12:56:12', 2),
(33, 1, 4, 'abc-fgd', 'new blog', 'new blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blog', 'abroad.png', '2014-10-10 12:56:26', '2014-10-10 12:56:26', 2),
(34, 1, 4, 'abc-fgd', 'new blog', 'new blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blog', 'abroad.png', '2014-10-10 12:57:17', '2014-10-10 12:57:17', 2),
(35, 1, 4, 'abc-fgd', 'new blog', 'new blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blognew blog', '1412926170abroad.png', '2014-10-10 12:59:30', '2014-10-10 12:59:30', 2),
(36, 1, 4, 'abc-fgd', 'new blog', 'Lorem Ipsum is simply dummy text e‑Learning pioneer, people and innovation have fueled our growth Lectora, our flagship product, has blazed the trail as the first authoring software making rapid e-Learning simple and cost-effective. From the beginning, content where you track the results.', '1412926205avatar.jpg', '2014-10-10 13:00:05', '2014-10-10 13:00:05', 2),
(37, 1, 4, 'abc-fgd', 'new blog', 'Lorem Ipsum is simply dummy text e‑Learning pioneer, people and innovation have fueled our growth Lectora, our flagship product, has blazed the trail as the first authoring software making rapid e-Learning simple and cost-effective. From the beginning, content where you track the results.', '1412926486banner.jpg', '2014-10-10 13:04:46', '2014-10-10 13:04:46', 2),
(38, 1, 4, 'abc-fgd', 'new blog', 'bfgbjdfngklsdfmllmdlkgd', '1412927029blog-img.jpg', '2014-10-10 13:13:49', '2014-10-10 13:13:49', 2),
(39, 1, 4, 'abc-fgd', 'some new', 'dfjblxfkgnpkghcpmnkhgp;mkpjh', '1412927070blog-img.jpg', '2014-10-10 13:14:30', '2014-10-10 13:14:30', 2),
(40, 1, 4, 'abc-fgd', 'abcd', 'abcddgkjfhkjhujlgrmblkbpimndiyhrednk', '1412927147blog-img.jpg', '2014-10-10 13:15:47', '2014-10-10 13:15:47', 2),
(41, 1, 4, 'abc-fgd', 'sdgdg', 'fgdfgbfdgb', '1412927247Kalimba.mp3', '2014-10-10 13:17:26', '2014-10-10 13:17:27', 2),
(42, 1, 4, 'abc-fgd', 'bklnfkgn', 'dfhdfhthg', '1412927407avatar.jpg', '2014-10-10 13:20:07', '2014-10-10 13:20:07', 2),
(43, 1, 4, 'abc-fgd', 'sdvdfg', 'dsfgfdsgf', '1412927770beginner.png', '2014-10-10 13:26:10', '2014-10-10 13:26:10', 2),
(44, 1, 4, 'abc-fgd', 'sefsdfgd', 'grddsfgdsfhfsgh', '1412927829Maid with the Flaxen Hair.mp3', '2014-10-10 13:27:09', '2014-10-10 13:27:09', 2),
(45, 1, 4, 'abc-fgd', 'dfgdfg', 'dfgdfhfghfghfghh', '1412927961Sleep Away.mp3', '2014-10-10 13:29:21', '2014-10-10 13:29:21', 2),
(46, 1, 4, 'abc-fgd', 'sDFzdxf', 'fghfdghfdhfdghf', '1412928074Maid with the Flaxen Hair.mp3', '2014-10-10 13:31:14', '2014-10-10 13:31:14', 2),
(47, 1, 4, 'abc-fgd', 'adsdfdf', 'fgdfgdfggffdg', '1412928132Sleep Away.mp3', '2014-10-10 13:32:12', '2014-10-10 13:32:12', 2),
(48, 1, 4, 'abc-fgd', 'new blog', ' Lorem Ipsum is simply dummy text e‑Learning pioneer, people and innovation have fueled our growth Lectora, our flagship product, has blazed the trail as the first authoring software making rapid e-Learning simple and....', '1412933404Chrysanthemum.jpg', '2014-10-10 15:00:04', '2014-10-10 15:00:04', 2),
(49, 1, 4, 'abc-fgd', 'new blog', ' Lorem Ipsum is simply dummy text e‑Learning pioneer, people and innovation have fueled our growth Lectora, our flagship product, has blazed the trail as the first authoring software making rapid e-Learning simple and....', '1412933421Chrysanthemum.jpg', '2014-10-10 15:00:21', '2014-10-10 15:00:21', 2),
(50, 1, 4, 'abc-fgd', 'new blog', '2 Lorem Ipsum is simply dummy text e‑Learning pioneer, people and innovation have fueled our growth Lectora, our flagship product, has blazed the trail as the first authoring software making rapid e-Learning simple and....', '1412933666Chrysanthemum.jpg', '2014-10-10 15:04:26', '2014-10-10 15:04:26', 1),
(51, 1, 4, 'abc-fgd', 'new blog', '2 Lorem Ipsum is simply dummy text e‑Learning pioneer, people and innovation have fueled our growth Lectora, our flagship product, has blazed the trail as the first authoring software making rapid e-Learning simple and....', '1412934037Sleep Away.mp3', '2014-10-10 15:10:37', '2014-10-10 15:10:37', 2),
(52, 1, 4, 'abc-fgd', 'new blognew blog', 'sdfsdgfsdg', '1412934115Sleep Away.mp3', '2014-10-10 15:11:54', '2014-10-10 15:11:55', 2),
(53, 1, 4, 'abc-fgd', 'SDFDG', 'DFHFGFGHGH', '1412934650Penguins.jpg', '2014-10-10 15:20:50', '2014-10-10 15:20:50', 2),
(54, 1, 4, 'abc-fgd', 'XZCVXVXCV', 'FVBDFGSDFGDSFDFS', '1412934663Chrysanthemum.jpg', '2014-10-10 15:21:03', '2014-10-10 15:21:03', 2),
(55, 1, 4, 'abc-fgd', 'XVCCBVCB', 'DFGDGDFBFVB', '14129348101.png', '2014-10-10 15:23:30', '2014-10-10 15:23:30', 2),
(56, 1, 4, 'abc-fgd', 'DFGDFG', 'DFGDFGDSFG', '14129348371.png', '2014-10-10 15:23:57', '2014-10-10 15:23:57', 2),
(57, 1, 4, 'abc-fgd', 'SDFSDG', 'SDGFSDGSDFG', '14129348961.png', '2014-10-10 15:24:55', '2014-10-10 15:24:56', 2),
(58, 1, 4, 'abc-fgd', 'UI6UYI', 'HYJKYUJKUJKIUK', '14129349631.png', '2014-10-10 15:26:03', '2014-10-10 15:26:03', 2),
(59, 1, 4, 'abc-fgd', 'DXGDFGHDFGF', 'FGHFGHFHFGHG', '1412935052Koala.jpg', '2014-10-10 15:27:32', '2014-10-10 15:27:32', 2),
(60, 1, 4, 'abc-fgd', 'RTHTDH', 'DGJHGFJHG', '1412935085Kalimba.mp3', '2014-10-10 15:28:05', '2014-10-10 15:28:05', 2),
(61, 1, 4, 'abc-fgd', 'dgdfg', 'edfgrgfrg', '1412939849Chrysanthemum.jpg', '2014-10-10 16:47:29', '2014-10-10 16:47:29', 2),
(62, 1, 4, 'abc-fgd', 'Blog', 'some n computing, a plug-in (or add-in / addin, plugin, extension or add-on / addon) is a software component that adds a specific feature to an existing software application. When an application supports plug-ins, it enables customization. The common examples are the plug-ins used in web browsers to add new features such as search-engines, virus scanners, or the ability to utilize a new file type such as a new video format. Well-known browser plug-ins include the Adobe Flash Player, the QuickTime Player, and the Java plug-in, which can launch a user-activated Java applet on a web page to its execution a local Java virtual machine.\r\n\r\nAdd-on (or addon) is the general term for what enhances an application. It comprises snap-in, plug-in, theme and skin.[1] An extension add-on tailors the core features of an application by adding an optional module, whereas a plug-in add-on would tailor the outer layers of an application to personalize functionality.\r\n\r\nA theme or skin add-on is a preset package containing additional or changed graphical appearance details, achieved by the use of a graphical user interface (GUI) that can be applied to specific software and websites to suit the purpose, topic, or tastes of different users to customize the look and feel of a piece of computer software or an operating system front-end GUI (and window managers).', '14129416821.png', '2014-10-10 17:18:02', '2014-10-10 17:18:02', 2),
(63, 1, 4, 'abc-fgd', 'asd', 'n computing, a plug-in (or add-in / addin, plugin, extension or add-on / addon) is a software component that adds a specific feature to an existing software application. When an application supports plug-ins, it enables customization. The common examples are the plug-ins used in web browsers to add new features such as search-engines, virus scanners, or the ability to utilize a new file type such as a new video format. Well-known browser plug-ins include the Adobe Flash Player, the QuickTime Player, and the Java plug-in, which can launch a user-activated Java applet on a web page to its execution a local Java virtual machine.\r\n\r\nAdd-on (or addon) is the general term for what enhances an application. It comprises snap-in, plug-in, theme and skin.[1] An extension add-on tailors the core features of an application by adding an optional module, whereas a plug-in add-on would tailor the outer layers of an application to personalize functionality.\r\n\r\nA theme or skin add-on is a preset package containing additional or changed graphical appearance details, achieved by the use of a graphical user interface (GUI) that can be applied to specific software and websites to suit the purpose, topic, or tastes of different users to customize the look and feel of a piece of computer software or an operating system front-end GUI (and window managers).', '1412941988Maid with the Flaxen Hair.mp3', '2014-10-10 17:23:08', '2014-10-10 17:23:08', 2),
(64, 1, 4, 'abc-fgd', 'sgdfgdfg', 'dfgfgdfbfdghfhfgh', '1412943521Chrysanthemum.jpg', '2014-10-10 17:48:41', '2014-10-10 17:48:41', 2),
(65, 1, 4, 'abc-fgd', 'aefsgdfg', 'dfgdfgdfgdfsgfdxgdgdfgg', '1412943549Maid with the Flaxen Hair.mp3', '2014-10-10 17:49:09', '2014-10-10 17:49:09', 2),
(66, 1, 4, 'abc-fgd', 'fdgdfgdf', 'sdfsdgfsgdfgdgdsf', '14129437701.png', '2014-10-10 17:52:50', '2014-10-10 17:52:50', 2),
(67, 1, 4, 'abc-fgd', 'dhfdhgjkdbdb', 'gfugbvjbjdbgjdfgdgdfghdhg', '1412943831Kalimba.mp3', '2014-10-10 17:53:51', '2014-10-10 17:53:51', 2),
(68, 1, 4, 'abc-fgd', 'dxcvsdfg', 'zdcxvxvb', '14129441201.png', '2014-10-10 17:58:40', '2014-10-10 17:58:40', 2),
(69, 1, 4, 'abc-fgd', 'asdsdf', 'asdsadfsdf', '1412944533Tulips.jpg', '2014-10-10 18:05:33', '2014-10-10 18:05:33', 2),
(70, 1, 4, 'abc-fgd', 'shdfgsjdbfjdbvjdb', 'hvjhbdfjvbnbjcvnb', '1412944556Penguins.jpg', '2014-10-10 18:05:56', '2014-10-10 18:05:56', 2),
(71, 1, 4, 'abc-fgd', 'srgdfgfd', 'sdfhgdshdhfhd', '1412945059Lighthouse.jpg', '2014-10-10 18:14:19', '2014-10-10 18:14:19', 2),
(72, 1, 4, 'abc-fgd', 'fhgv', 'hkhkhlhk', '1412945537Jellyfish.jpg', '2014-10-10 18:22:16', '2014-10-10 18:22:17', 2),
(73, 1, 4, 'abc-fgd', 'ddfh', 'srhfdh', '1412945660Maid with the Flaxen Hair.mp3', '2014-10-10 18:24:20', '2014-10-10 18:24:20', 2),
(74, 1, 4, 'abc-fgd', 'ddfh', 'srhfdh', '1412945691Maid with the Flaxen Hair.mp3', '2014-10-10 18:24:51', '2014-10-10 18:24:51', 2),
(75, 1, 4, 'abc-fgd', 'sdsdagads', 'dsfvdsgsdgsdfg', '1412945752Chrysanthemum.jpg', '2014-10-10 18:25:52', '2014-10-10 18:25:52', 2),
(76, 1, 4, 'abc-fgd', 'dffg', 'dfgdf', '1412945778Chrysanthemum.jpg', '2014-10-10 18:26:18', '2014-10-10 18:26:18', 2),
(77, 1, 4, 'abc-fgd', 'fsdfsdfs', 'sdvsdadfdf', '14129458241.png', '2014-10-10 18:27:04', '2014-10-10 18:27:04', 2),
(78, 1, 4, 'abc-fgd', 'fhgfgh', 'cfghfdhdfhfgh', '1412947457Hydrangeas.jpg', '2014-10-10 18:54:17', '2014-10-10 18:54:17', 2),
(79, 1, 4, 'abc-fgd', 'asdsdsa', 'sdsfd', '14130148721.png', '2014-10-11 13:37:52', '2014-10-11 13:37:52', 2),
(80, 1, 4, 'abc-fgd', 'sdfdf', 'dfgfghfghfg', '1413014883Tulips.jpg', '2014-10-11 13:38:03', '2014-10-11 13:38:03', 2),
(81, 1, 4, 'abc-fgd', 'sadasfsdafsdf', 'adsgdsfgbfshdghg', '1413015083Kalimba.mp3', '2014-10-11 13:41:23', '2014-10-11 13:41:23', 2),
(82, 1, 4, 'abc-fgd', 'sdrgertry', 'xfcgbgncbnvbnvcnn', '1413015106Desert.jpg', '2014-10-11 13:41:46', '2014-10-11 13:41:46', 2),
(83, 1, 4, 'abc-fgd', 'dfgdfghfgh', 'fgfshfdghdfhdfhfd', '14130152971.png', '2014-10-11 13:44:57', '2014-10-11 13:44:57', 2),
(84, 1, 4, 'abc-fgd', 'rthth', 'fhfghgjhgjhj', '1413015445Koala.jpg', '2014-10-11 13:47:25', '2014-10-11 13:47:25', 2),
(94, 1, 4, 'abc-fgd', 'reetre', 'ertfertgert', '14132914231.png', '2014-10-14 18:27:02', '2014-10-14 18:27:03', 2),
(95, 1, 4, 'abc-fgd', 'edgfghfg', 'sdfsdfsdfs', '1413292976Chrysanthemum.jpg', '2014-10-14 18:52:56', '2014-10-14 18:52:56', 2),
(96, 1, 4, 'abc-fgd', 'blog', 'abcd', '14132930091.png', '2014-10-14 18:53:28', '2014-10-14 18:53:29', 2),
(97, 1, 4, 'abc-fgd', 'cxvbcb', '<b>gffgff</b>', '1413295218Penguins.jpg', '2014-10-14 19:30:18', '2014-10-14 19:30:18', 2),
(98, 1, 4, 'abc-fgd', 'new blog', '<b>new blog</b><br>', '1413295244Chrysanthemum.jpg', '2014-10-14 19:30:44', '2014-10-14 19:30:44', 2),
(99, 1, 4, 'abc-fgd', 'xcvxcv', '<b>abcd</b>', '1413296168Penguins.jpg', '2014-10-14 19:46:08', '2014-10-14 19:46:08', 2),
(100, 1, 4, 'abc-fgd', 'sdfdsfdsf', 'gmjhgmjhlgjhmlmhlmjlhjmnl,l,mlnnk,', '14133529241.png', '2014-10-15 11:32:04', '2014-10-15 11:32:04', 2),
(101, 1, 4, 'abc-fgd', 'seafsdfsdfdfd', '<strike>rggffhfghhhhhhhhhhhhhhhsdfgf</strike>', '1413352967Chrysanthemum.jpg', '2014-10-15 11:32:47', '2014-10-15 11:32:47', 2),
(102, 1, 4, 'abc-fgd', 'sczxdvcv', '<b>sdfddgdsfg</b>', '1413353502Tulips.jpg', '2014-10-15 11:41:41', '2014-10-15 11:41:42', 2),
(103, 1, 4, 'abc-fgd', 'abcd', 'abcd', '1413353531Desert.jpg', '2014-10-15 11:42:10', '2014-10-15 11:42:11', 2),
(104, 1, 4, 'abc-fgd', 'jgxkfxhd', '<b>hsgdhghgjbfgbhfgb</b>', '1413353883Chrysanthemum.jpg', '2014-10-15 11:48:02', '2014-10-15 11:48:03', 2),
(105, 1, 4, 'abc-fgd', 'abcsdfjghg', '<font face="Arial Black">ffdgdfhfh</font>', '1413354297Penguins.jpg', '2014-10-15 11:54:57', '2014-10-15 11:54:57', 2),
(106, 1, 4, 'abc-fgd', 'sdfsfsdf', '<b>sdfsdfgdfgdsf</b>', '1413354381Lighthouse.jpg', '2014-10-15 11:56:21', '2014-10-15 11:56:21', 2),
(107, 1, 4, 'abc-fgd', 'cgcghcgh', '<font face="Arial">dnfgjnfgjhnfghfgh</font>', '1413354486Desert.jpg', '2014-10-15 11:58:06', '2014-10-15 11:58:06', 2),
(108, 1, 4, 'abc-fgd', 'bfjsdbfgjdsfgbjdfg', '<i>fghfdhdghgfjgj</i>', '1413354583Jellyfish.jpg', '2014-10-15 11:59:43', '2014-10-15 11:59:43', 2),
(109, 1, 4, 'abc-fgd', 'it is a new post', '<font size="5">new post</font><br>', '1413354670Tulips.jpg', '2014-10-15 12:01:10', '2014-10-15 12:01:10', 2),
(110, 1, 4, 'abc-fgd', 'asdsfgdffh', '<b>dfgvdfbfxbfbnvn</b>', '1413354868Koala.jpg', '2014-10-15 12:04:28', '2014-10-15 12:04:28', 2),
(111, 1, 4, 'abc-fgd', 'abcdefghi', 'abcdefghijklmnopqrstuvwxyz', '1413366179Koala.jpg', '2014-10-15 15:12:59', '2014-10-15 15:12:59', 2);
INSERT INTO `site_blog` (`id`, `blog_category_id`, `author_id`, `slug`, `title`, `content`, `image`, `create_at`, `update_at`, `status`) VALUES
(112, 1, 4, 'abc-fgd', 'flower', '<img src="data:image/jpeg;base64,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b20vZXhpZi8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6Y3JzPSJodHRwOi8vbnMuYWRvYmUuY29tL2NhbWVyYS1yYXctc2V0dGluZ3MvMS4wLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4YXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOk1pY3Jvc29mdFBob3RvXzFfPSJodHRwOi8vbnMubWljcm9zb2Z0LmNvbS9waG90by8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhhcFJpZ2h0czpNYXJrZWQ9IlRydWUiIHhhcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHA6Ly9wcm8uY29yYmlzLmNvbS9zZWFyY2gvc2VhcmNocmVzdWx0cy5hc3A/dHh0PTQyLTE3MTY3MjIyJmFtcDtvcGVuSW1hZ2U9NDItMTcxNjcyMjIiIGV4aWY6RXhpZlZlcnNpb249IjAyMjEiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxMDI0IiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNzY4IiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOkRhdGVUaW1lRGlnaXRpemVkPSIyMDA4LTAzLTE0VDExOjMxOjQ4Ljk4LTA3OjAwIiB0aWZmOk9yaWVudGF0aW9uPSIxIiB0aWZmOkltYWdlV2lkdGg9IjEwMjQiIHRpZmY6SW1hZ2VMZW5ndGg9Ijc2OCIgdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPSIyIiB0aWZmOlNhbXBsZXNQZXJQaXhlbD0iMyIgdGlmZjpYUmVzb2x1dGlvbj0iOTYvMSIgdGlmZjpZUmVzb2x1dGlvbj0iOTYvMSIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgY3JzOkFscmVhZHlBcHBsaWVkPSJUcnVlIiBwaG90b3Nob3A6TGVnYWN5SVBUQ0RpZ2VzdD0iNTdGRTdCNjY4NEIxRjU4REMxMzVDODBDMUUyRjE2N0EiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSIiIHhhcDpNZXRhZGF0YURhdGU9IjIwMDktMDItMDJUMTE6NDQ6MTAtMDg6MDAiIHhhcDpSYXRpbmc9IjQiIHhhcDpDcmVhdGVEYXRlPSIyMDA4LTAzLTE0VDIwOjU5OjI2LjUzNVoiIHhhcDpNb2RpZnlEYXRlPSIyMDA4LTAzLTE0VDExOjMxOjQ4Ljk4LTA3OjAwIiBNaWNyb3NvZnRQaG90b18xXzpSYXRpbmc9IjYzIj4NCgkJCTx0aWZmOkJpdHNQZXJTYW1wbGU+DQoJCQkJPHJkZjpTZXE+DQoJCQkJCTxyZGY6bGk+ODwvcmRmOmxpPg0KCQkJCQk8cmRmOmxpPjg8L3JkZjpsaT4NCgkJCQkJPHJkZjpsaT44PC9yZGY6bGk+DQoJCQkJPC9yZGY6U2VxPg0KCQkJPC90aWZmOkJpdHNQZXJTYW1wbGU+DQoJCQk8ZGM6cmlnaHRzPg0KCQkJCTxyZGY6QWx0Pg0KCQkJCQk8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPsKpIENvcmJpcy4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuPC9yZGY6bGk+DQoJCQkJPC9yZGY6QWx0Pg0KCQkJPC9kYzpyaWdodHM+DQoJCQk8ZGM6Y3JlYXRvcj4NCgkJCQk8cmRmOlNlcT4NCgkJCQkJPHJkZjpsaT5Db3JiaXM8L3JkZjpsaT4NCgkJCQk8L3JkZjpTZXE+DQoJCQk8L2RjOmNyZWF0b3I+DQoJCTwvcmRmOkRlc2NyaXB0aW9uPg0KCTwvcmRmOlJERj4NCjwveDp4bXBtZXRhPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAg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', '14133669341.png', '2014-10-15 15:25:33', '2014-10-15 15:25:34', 2);
INSERT INTO `site_blog` (`id`, `blog_category_id`, `author_id`, `slug`, `title`, `content`, `image`, `create_at`, `update_at`, `status`) VALUES
(113, 1, 4, 'abc-fgd', 'new blog', '<font size="5" face="Comic Sans MS"><b>Lorem Ipsum </b>is simply dummy text <u>e‑Learning pioneer,</u> people and \r\ninnovation have fueled our growth Lectora, our flagship product, has \r\nblazed the trail as the first authoring software making rapid e-Learning\r\n simple and cost-effective. From the beginning, content where you track \r\nthe results.</font>', '1413372997Tulips.jpg', '2014-10-15 17:06:37', '2014-10-15 17:06:37', 2),
(114, 1, 4, 'abc-fgd', 'title', ' sdfdsfdfddsdf<br>', '1413453092', '2014-10-16 15:21:32', '2014-10-16 15:21:32', 2),
(115, 1, 4, 'abc-fgd', 'abcd', ' Go ahead…abcd', '1413453107', '2014-10-16 15:21:47', '2014-10-16 15:21:47', 2),
(116, 1, 4, 'abc-fgd', 'first blog', ' <b>Go ahead…bsdafjdsbgkdnfgknbknnnnnnl</b>', '1413453243', '2014-10-16 15:24:03', '2014-10-16 15:24:03', 2),
(117, 1, 4, 'abc-fgd', 'first blog', ' <b>Go ahead…nsdvkdnfvklxfnbklcvnblcnvb</b>', '', '2014-10-16 15:25:36', '0000-00-00 00:00:00', 2),
(118, 1, 4, 'abc-fgd', 'First blog', ' 2 Lorem Ipsum is simply dummy text e‑Learning pioneer, people and \r\ninnovation have fueled our growth Lectora, our flagship product, has \r\nblazed the trail as the first authoring software making rapid e-Learning\r\n simple and', '', '2014-10-16 15:27:32', '0000-00-00 00:00:00', 2),
(119, 1, 4, 'abc-fgd', 'e-learning', '<font face="Comic Sans MS">&nbsp; <b><font size="5"></font></b><font size="5">Lorem Ipsum is simply dummy text e‑Learning pioneer, people and \r\ninnovation have fueled our growth Lectora, our flagship product, has \r\nblazed the trail as the first authoring software making rapid e-Learning\r\n simple</font></font><b><font size="5"><br></font></b>', '14134536141.png', '2014-10-16 15:30:13', '2014-10-16 15:30:14', 2),
(120, 1, 4, 'abc-fgd', 'blog', '  <font size="5" face="Courier New">Lorem Ipsum is simply dummy text e‑Learning pioneer, people and \r\ninnovation have fueled our growth Lectora, our flagship product, has \r\nblazed the trail as the first authoring software making rapid e-Learning\r\n simple</font><font size="5" face="Courier New"><br></font>', '', '2014-10-17 15:05:17', '0000-00-00 00:00:00', 2),
(121, 1, 4, 'abc-fgd', 'blog', '  <font size="5" face="Courier New">Lorem Ipsum is simply dummy text e‑Learning pioneer, people and \r\ninnovation have fueled our growth Lectora, our flagship product, has \r\nblazed the trail as the first authoring software making rapid e-Learning\r\n simple</font><font size="5" face="Courier New"><br></font>', '', '2014-10-17 15:06:02', '0000-00-00 00:00:00', 2),
(122, 1, 4, 'abc-fgd', 'blog', '  <font size="5" face="Courier New">Lorem Ipsum is simply dummy text e‑Learning pioneer, people and \r\ninnovation have fueled our growth Lectora, our flagship product, has \r\nblazed the trail as the first authoring software making rapid e-Learning\r\n simple</font><font size="5" face="Courier New"><br></font>', '', '2014-10-17 15:06:30', '0000-00-00 00:00:00', 2),
(123, 1, 4, 'abc-fgd', 'blog', '  <font size="5" face="Courier New">Lorem Ipsum is simply dummy text e‑Learning pioneer, people and \r\ninnovation have fueled our growth Lectora, our flagship product, has \r\nblazed the trail as the first authoring software making rapid e-Learning\r\n simple</font><font size="5" face="Courier New"><br></font>', '', '2014-10-17 15:06:48', '0000-00-00 00:00:00', 2),
(124, 1, 4, 'abc-fgd', 'blog', '  <font size="5" face="Courier New">Lorem Ipsum is simply dummy text e‑Learning pioneer, people and \r\ninnovation have fueled our growth Lectora, our flagship product, has \r\nblazed the trail as the first authoring software making rapid e-Learning\r\n simple</font><font size="5" face="Courier New"><br></font>', '', '2014-10-17 15:12:14', '0000-00-00 00:00:00', 2),
(125, 1, 4, 'abc-fgd', 'blog post', ' <div class="blog-desc">\r\n                    <p>  <font size="5" face="Times New Roman">Lorem Ipsum is simply dummy text e‑Learning pioneer, people and \r\ninnovation have fueled our growth Lectora, our flagship product, has \r\nblazed the trail as the first authoring software making rapid e-Learning\r\n simple</font><font size="5" face="Courier New"><br></font></p>\r\n\r\n                </div>', '', '2014-10-17 16:32:39', '0000-00-00 00:00:00', 2),
(126, 1, 4, 'abc-fgd', 'ABCD', ' <font size="3" face="Times New Roman"><font face="Courier New">2\r\n Lorem Ipsum is simply dummy text e‑Learning pioneer, people and \r\ninnovation have fueled our growth Lectora, our flagship product, has \r\nblazed the trail as the first authoring software making rapid e-Learning\r\n simple<br></font></font>', '1413548779Koala.jpg', '2014-10-17 17:56:19', '2014-10-17 17:56:19', 1),
(127, 1, 4, 'abc-fgd', 'XYZ', ' <font size="3" face="Times New Roman"><font size="5">2\r\n Lorem Ipsum is simply dummy text e‑Learning pioneer, people and \r\ninnovation have fueled our growth Lectora, our flagship product, has \r\nblazed the trail as the first authoring software making rapid e-Learning\r\n simple and....</font></font>', '', '2014-10-17 17:59:36', '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `site_blog_category`
--

CREATE TABLE IF NOT EXISTS `site_blog_category` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8 NOT NULL,
  `slug` varchar(200) CHARACTER SET utf8 NOT NULL,
  `status` tinyint(4) NOT NULL COMMENT '0=>inactive,1=>active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `site_blog_category`
--

INSERT INTO `site_blog_category` (`id`, `name`, `slug`, `status`) VALUES
(2, 'Programming1', 'programming1', 1),
(3, 'lingapore', 'lingapore', 0),
(4, 'e learner', 'e-learner', 0),
(5, 'mileage in e- learning', 'mileage-in-e-learning', 0);

-- --------------------------------------------------------

--
-- Table structure for table `site_blog_comment`
--

CREATE TABLE IF NOT EXISTS `site_blog_comment` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `blog_id` bigint(20) unsigned NOT NULL,
  `author_id` bigint(20) unsigned NOT NULL COMMENT 'user_id',
  `comment` text COLLATE utf8_unicode_ci NOT NULL,
  `create_at` datetime NOT NULL COMMENT 'GMT+0',
  `update_at` datetime NOT NULL COMMENT 'GMT+0',
  `status` tinyint(1) NOT NULL COMMENT '0=>inactive,1=>publish',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=17 ;

--
-- Dumping data for table `site_blog_comment`
--

INSERT INTO `site_blog_comment` (`id`, `blog_id`, `author_id`, `comment`, `create_at`, `update_at`, `status`) VALUES
(1, 1, 4, 'It is my first comment', '2014-08-19 14:43:00', '2014-08-19 14:43:00', 1),
(2, 1, 4, 'abc', '2014-10-09 15:47:20', '0000-00-00 00:00:00', 1),
(3, 1, 4, 'abc', '2014-10-09 15:48:59', '0000-00-00 00:00:00', 1),
(4, 1, 4, 'abc', '2014-10-09 15:50:11', '0000-00-00 00:00:00', 1),
(5, 1, 4, 'abc', '2014-10-09 15:50:28', '0000-00-00 00:00:00', 1),
(6, 1, 4, 'abc', '2014-10-09 15:50:36', '0000-00-00 00:00:00', 1),
(7, 2, 4, 'new comment', '2014-10-09 15:50:57', '0000-00-00 00:00:00', 1),
(8, 1, 4, 'abc', '2014-10-09 16:11:45', '0000-00-00 00:00:00', 1),
(9, 2, 4, 'another comment', '2014-10-09 16:13:05', '0000-00-00 00:00:00', 1),
(10, 1, 4, 'abc', '2014-10-09 17:10:32', '0000-00-00 00:00:00', 1),
(11, 2, 4, 'one more comment', '2014-10-09 17:25:01', '0000-00-00 00:00:00', 1),
(12, 2, 4, 'abcdef', '2014-10-09 17:53:41', '0000-00-00 00:00:00', 1),
(13, 28, 4, 'First comment\r\n', '2014-10-10 12:14:38', '0000-00-00 00:00:00', 1),
(14, 28, 4, 'this is the second comment', '2014-10-11 17:39:21', '0000-00-00 00:00:00', 1),
(15, 113, 4, 'nice thought', '2014-10-15 17:07:46', '0000-00-00 00:00:00', 1),
(16, 119, 4, 'new comment', '2014-10-17 10:58:53', '0000-00-00 00:00:00', 2);

-- --------------------------------------------------------

--
-- Table structure for table `site_cms_blocks`
--

CREATE TABLE IF NOT EXISTS `site_cms_blocks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8_unicode_ci NOT NULL,
  `language_id` tinyint(4) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '0=>inactive,1=>active',
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `block_lang` (`slug`,`language_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- Dumping data for table `site_cms_blocks`
--

INSERT INTO `site_cms_blocks` (`id`, `title`, `slug`, `content`, `language_id`, `status`, `create_at`, `update_at`) VALUES
(1, 'Up For Fun!', 'up-for-fun', 'Make your lessons more interesting with vibrant variations where you get to meet all the fun by reading, writing or even listening! Not those boring learning again, it''s gaming poured into everywhere!', 1, 1, '2014-08-29 07:01:34', '2014-09-14 22:52:05'),
(2, 'See My Score?', 'see-my-score', 'See your score live as you continue to solve challenges! When you miss a challenge, we show you the right answer. Be up for a game that helps you just to make things even more interesting.', 1, 1, '2014-08-29 07:03:36', '2014-08-29 07:03:36'),
(3, 'Collect Mileage!', 'collect-mileage', 'More mileage points make you win! Reach out to solve the levels to earn mileage points and collect your certificate! Race to be in the HALL OF FAME and get more free goodies!', 1, 1, '2014-08-29 05:58:35', '2014-08-29 05:58:35'),
(4, 'Way To Being a Pro!', 'way-to-being-a-pro', 'Get motivated as you cross levels! We show you all the levels you won, so you know your way to being a Pro! From being a learner to being a Pro, it,s a new world even beyond it!', 1, 1, '2014-08-29 07:03:36', '2014-08-29 07:03:36'),
(7, 'sadd sdsad', 'up-for-fun', 'sdsad s dasd sadasd', 2, 1, '0000-00-00 00:00:00', '2014-09-14 22:50:31'),
(8, 'new Cms', 'new Cms', 'new Cms', 1, 0, '2014-10-21 17:48:10', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `site_cms_page`
--

CREATE TABLE IF NOT EXISTS `site_cms_page` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8_unicode_ci NOT NULL,
  `language_id` tinyint(4) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '0=>inactive,1=>active',
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `block_lang` (`slug`,`language_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `site_contact_us`
--

CREATE TABLE IF NOT EXISTS `site_contact_us` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(254) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `create_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `site_contact_us`
--

INSERT INTO `site_contact_us` (`id`, `name`, `email`, `subject`, `message`, `create_at`) VALUES
(1, 'Sumanta Kr ghosh', 'sumanta.ghosh@infoway.us', 'Test', 'The only sure way to validate an email address is to send an email with a verification code or link. Determining that an address is syntactically valid doesn''t prove that it exists or belongs to the person who submitted it. ', '2014-09-07 00:00:00'),
(2, 'Sumanta Kr ghosh', 'sumanta.ghosh@infoway.us', 'Test', 'The only sure way to validate an email address is to send an email with a verification code or link. Determining that an address is syntactically valid doesn''t prove that it exists or belongs to the person who submitted it. ', '2014-09-23 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `site_correction`
--

CREATE TABLE IF NOT EXISTS `site_correction` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `display_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `language_id` tinyint(4) unsigned NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `intro_text` text COLLATE utf8_unicode_ci NOT NULL,
  `native_text` text COLLATE utf8_unicode_ci NOT NULL,
  `visible_to` tinyint(4) NOT NULL COMMENT '0=>Public,1=>Registered Users,2=>Friends,3=>Private',
  `total_views` int(11) NOT NULL,
  `total_comments` int(11) NOT NULL,
  `total_corrections` int(11) NOT NULL,
  `total_likes` int(11) NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0=>Draft,1=>Published,2=>Deleted',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`,`language_id`),
  KEY `language_id` (`language_id`),
  KEY `language_id_2` (`language_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=23 ;

--
-- Dumping data for table `site_correction`
--

INSERT INTO `site_correction` (`id`, `display_id`, `user_id`, `language_id`, `title`, `intro_text`, `native_text`, `visible_to`, `total_views`, `total_comments`, `total_corrections`, `total_likes`, `create_at`, `update_at`, `status`) VALUES
(10, '1413889944K5LI3U', 4, 1, 'asdasd', 'asda', 'sdasdasd', 1, 2, 0, 0, 0, '2014-10-21 16:42:24', '2014-10-22 19:20:50', 3),
(11, '1413901183CGI9BZ', 4, 1, 'asdas', 'dasdasd', 'asdasd', 0, 1, 0, 0, 0, '2014-10-21 19:49:43', '2014-10-22 19:22:14', 1),
(12, '1413901266LGVA15', 4, 2, 'asdas', 'dasdasd', 'asdasd', 0, 1, 0, 0, 0, '2014-10-21 19:51:06', '2014-10-22 19:29:32', 3),
(13, '1413958772LN7T5V', 4, 2, 'testing title', 'This is for title\r\nand this is for whole body\r\nanother content', 'i want to learn dutch', 2, 1, 0, 0, 0, '2014-10-22 11:49:32', '2014-10-22 20:03:39', 1),
(14, '1413973916LWFI70', 4, 1, 'asdqwerqwerwer', 'sdfsfdsf', 'werwerwer', 1, 0, 0, 0, 0, '2014-10-22 16:01:56', '2014-10-22 19:19:54', 3),
(15, '1413979142X6KMTI', 4, 1, 'asdasd', 'i want to learn spanish\r\nbut i can not speak it properly\r\ncan you guys help me with this\r\nthanks', 'sdasdasd', 1, 0, 0, 0, 0, '2014-10-22 17:29:02', '2014-10-22 19:12:59', 3),
(16, '1413986471ZWKQIC', 4, 1, 'asdas', 'dasdasd', 'asdasd', 0, 1, 0, 0, 0, '2014-10-22 19:31:11', '2014-10-22 19:31:12', 1),
(17, '14139865173AO4KT', 4, 1, 'asdas', 'dasdasd', 'asdasd', 0, 0, 0, 0, 0, '2014-10-22 19:31:57', '2014-10-22 19:31:57', 1),
(18, '14139865296BRFYC', 4, 1, 'asdas', 'dasdasd', 'asdasd', 0, 0, 0, 0, 0, '2014-10-22 19:32:09', '2014-10-22 19:32:09', 1),
(19, '1413987129WOFTQ6', 4, 1, 'asdas', 'dasdasd', '', 0, 0, 0, 0, 0, '2014-10-22 19:42:09', '2014-10-22 19:42:09', 1),
(20, '14139872284DUSO7', 4, 1, 'asdas', 'dasdasd', '', 0, 0, 0, 0, 0, '2014-10-22 19:43:48', '2014-10-22 19:43:48', 1),
(21, '14139872532GCSI4', 4, 1, 'asdas', 'dasdasd', '', 0, 0, 0, 0, 0, '2014-10-22 19:44:13', '2014-10-22 19:44:13', 1),
(22, '1413987268H6TBE9', 4, 1, 'asdas', 'dasdasd', '', 0, 1, 0, 0, 0, '2014-10-22 19:44:28', '2014-10-22 19:44:29', 1);

-- --------------------------------------------------------

--
-- Table structure for table `site_correction_comments`
--

CREATE TABLE IF NOT EXISTS `site_correction_comments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `correction_id` bigint(20) unsigned NOT NULL,
  `comment_text` text COLLATE utf8_unicode_ci NOT NULL,
  `create_at` datetime NOT NULL,
  `status` tinyint(1) NOT NULL COMMENT '0=>Inactive,1=>Active,3=>Deleted',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `correction_id` (`correction_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=23 ;

--
-- Dumping data for table `site_correction_comments`
--

INSERT INTO `site_correction_comments` (`id`, `user_id`, `correction_id`, `comment_text`, `create_at`, `status`) VALUES
(3, 4, 13, 'Testing', '2014-10-23 15:29:42', 1),
(4, 4, 13, 'Testing', '2014-10-23 15:34:19', 1),
(5, 4, 13, 'Testing', '2014-10-23 15:35:46', 1),
(6, 4, 13, 'Testing', '2014-10-23 15:36:05', 1),
(7, 4, 13, 'Testing', '2014-10-23 15:39:39', 1),
(8, 4, 13, 'Testing', '2014-10-23 15:41:49', 1),
(9, 4, 13, 'Testing', '2014-10-23 15:48:22', 1),
(10, 4, 13, 'Testing', '2014-10-23 15:49:24', 1),
(11, 4, 13, 'Testing', '2014-10-23 15:49:31', 1),
(12, 4, 13, 'Testing', '2014-10-23 15:49:37', 1),
(13, 4, 13, 'Testing', '2014-10-23 15:50:09', 1),
(14, 4, 13, 'Testing', '2014-10-23 15:51:09', 1),
(15, 4, 13, 'Testing', '2014-10-23 15:51:38', 1),
(16, 4, 13, 'Testing', '2014-10-23 15:52:08', 1),
(17, 4, 13, 'Testing', '2014-10-23 15:52:31', 1),
(18, 4, 13, 'Testing', '2014-10-23 15:54:04', 1),
(19, 4, 13, 'Testing', '2014-10-23 15:55:17', 1),
(20, 4, 13, 'Testing', '2014-10-23 15:56:05', 1),
(21, 4, 13, 'Testing', '2014-10-23 15:56:30', 1),
(22, 4, 13, 'Testing', '2014-10-23 15:57:33', 1);

-- --------------------------------------------------------

--
-- Table structure for table `site_correction_like`
--

CREATE TABLE IF NOT EXISTS `site_correction_like` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `correction_id` bigint(20) unsigned NOT NULL,
  `create_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `correction_id` (`correction_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `site_correction_like`
--

INSERT INTO `site_correction_like` (`id`, `user_id`, `correction_id`, `create_at`) VALUES
(2, 8, 10, '2014-10-21 14:35:37'),
(6, 4, 10, '2014-10-21 18:56:45'),
(7, 4, 12, '2014-10-21 20:18:00'),
(8, 4, 15, '2014-10-22 19:13:56'),
(9, 4, 11, '2014-10-22 19:25:27'),
(10, 4, 13, '2014-10-22 19:52:30');

-- --------------------------------------------------------

--
-- Table structure for table `site_correction_tags`
--

CREATE TABLE IF NOT EXISTS `site_correction_tags` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `correction_id` bigint(20) unsigned NOT NULL,
  `tag_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tag_id` (`tag_id`),
  KEY `correction_id` (`correction_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=42 ;

--
-- Dumping data for table `site_correction_tags`
--

INSERT INTO `site_correction_tags` (`id`, `correction_id`, `tag_id`) VALUES
(2, 12, 1),
(3, 12, 2),
(4, 12, 3),
(5, 12, 4),
(6, 12, 5),
(10, 14, 9),
(11, 15, 5),
(12, 16, 10),
(18, 22, 0),
(37, 13, 5),
(38, 13, 18),
(39, 13, 19),
(40, 13, 20),
(41, 13, 21);

-- --------------------------------------------------------

--
-- Table structure for table `site_correction_tag_master`
--

CREATE TABLE IF NOT EXISTS `site_correction_tag_master` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=22 ;

--
-- Dumping data for table `site_correction_tag_master`
--

INSERT INTO `site_correction_tag_master` (`id`, `name`) VALUES
(1, 'bengali'),
(2, 'hindi'),
(3, 'email'),
(4, 'spanish'),
(5, 'new'),
(6, 'english'),
(7, 'to'),
(8, 'duch'),
(9, 'werwer'),
(10, 'dfgdfgdfg'),
(11, 'and'),
(12, 'testing'),
(13, 'tag'),
(14, 'another'),
(15, 'for'),
(16, 'this'),
(17, 'post'),
(18, 'anotheashdhad'),
(19, 'asdhajksd'),
(20, 'asdhajksdh'),
(21, 'asd');

-- --------------------------------------------------------

--
-- Table structure for table `site_correction_visit`
--

CREATE TABLE IF NOT EXISTS `site_correction_visit` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `correction_id` bigint(20) unsigned NOT NULL,
  `create_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `correction_id` (`correction_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- Dumping data for table `site_correction_visit`
--

INSERT INTO `site_correction_visit` (`id`, `user_id`, `correction_id`, `create_at`) VALUES
(1, 2, 10, '2014-10-22 12:10:46'),
(2, 4, 10, '2014-10-22 12:11:29'),
(3, 4, 11, '2014-10-22 19:22:14'),
(4, 4, 12, '2014-10-22 19:29:16'),
(5, 4, 16, '2014-10-22 19:31:12'),
(6, 4, 22, '2014-10-22 19:44:29'),
(7, 4, 13, '2014-10-22 19:45:39');

-- --------------------------------------------------------

--
-- Table structure for table `site_forum_category`
--

CREATE TABLE IF NOT EXISTS `site_forum_category` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `forum_count` int(11) unsigned DEFAULT '0' COMMENT 'number of created forum',
  `sort` smallint(6) DEFAULT NULL COMMENT 'in which order it will appear in front end',
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL COMMENT '0=>inactive,1=>active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `site_forum_category`
--

INSERT INTO `site_forum_category` (`id`, `name`, `forum_count`, `sort`, `create_at`, `update_at`, `status`) VALUES
(1, 'Return the favor by helping others learn', 0, 1, '2014-09-15 18:35:14', '2014-09-15 18:37:21', 1),
(2, 'listening, translation, and multiple choice challenges.', 0, 2, '2014-09-15 19:42:48', '2014-10-18 12:30:56', 1),
(3, 'Support', 0, 3, '2014-09-18 09:32:41', '2014-10-21 16:52:58', 1),
(4, 'New forum category', 0, NULL, '2014-10-21 17:50:26', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `site_forum_name`
--

CREATE TABLE IF NOT EXISTS `site_forum_name` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `forum_category_id` bigint(20) unsigned NOT NULL,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `sort` smallint(6) DEFAULT NULL COMMENT 'in which order will it appeare in frontend',
  `last_thread_id` bigint(20) DEFAULT NULL,
  `last_post_id` bigint(20) unsigned DEFAULT NULL COMMENT 'when last post is submitted in this thread',
  `thread_count` bigint(20) unsigned DEFAULT '0' COMMENT 'total number of active thread under this frum',
  `post_count` bigint(20) unsigned DEFAULT '0' COMMENT 'total number of post under this thread,',
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `site_forum_name`
--

INSERT INTO `site_forum_name` (`id`, `forum_category_id`, `name`, `description`, `slug`, `sort`, `last_thread_id`, `last_post_id`, `thread_count`, `post_count`, `create_at`, `update_at`, `status`) VALUES
(1, 1, 'Gave us their highest accolades', 'Want to know how other people like your website? Post a link here to get ratings and reviews of other WDF members!', 'gave-us-their-highest-accolades', NULL, 3, 60, 3, 60, '2014-09-15 19:16:25', '2014-10-18 12:35:39', 1);

-- --------------------------------------------------------

--
-- Table structure for table `site_forum_post`
--

CREATE TABLE IF NOT EXISTS `site_forum_post` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `forum_thread_id` bigint(20) unsigned NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `content` longtext COLLATE utf8_unicode_ci,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_site_forum_post_site_forum_thread1_idx` (`forum_thread_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=61 ;

--
-- Dumping data for table `site_forum_post`
--

INSERT INTO `site_forum_post` (`id`, `forum_thread_id`, `user_id`, `content`, `create_at`, `update_at`) VALUES
(1, 1, 3, 'sdsadsadsadsada asdasdasd d asdasdas', '2014-09-16 00:00:00', '2014-09-25 00:00:00'),
(2, 1, 4, 'sdsadwaas asd sadsad asdas dasd asd sad asd as das', '2014-09-17 00:00:00', '2014-09-24 00:00:00'),
(3, 1, 4, 'abc', '2014-10-06 16:08:54', NULL),
(4, 1, 4, 'abc', '2014-10-06 17:34:13', NULL),
(5, 1, 4, 'abc', '2014-10-06 17:37:02', NULL),
(6, 1, 4, 'abc', '2014-10-06 17:37:33', NULL),
(7, 1, 4, 'abc', '2014-10-06 17:37:48', '2014-10-06 17:37:48'),
(8, 1, 4, 'abc', '2014-10-06 17:38:43', NULL),
(9, 1, 4, 'kl;klkl', '2014-10-06 17:43:52', NULL),
(10, 1, 4, '', '2014-10-06 18:00:49', NULL),
(11, 1, 4, '', '2014-10-06 18:01:27', NULL),
(12, 1, 4, 'new post', '2014-10-06 18:01:38', NULL),
(13, 1, 4, 'new', '2014-10-06 18:03:39', NULL),
(14, 1, 4, 'new', '2014-10-06 18:03:47', NULL),
(15, 1, 4, 'new', '2014-10-06 18:04:01', NULL),
(16, 1, 4, 'new', '2014-10-06 18:05:12', NULL),
(17, 1, 4, 'new', '2014-10-06 18:05:55', NULL),
(18, 1, 4, 'new', '2014-10-06 18:06:10', NULL),
(19, 1, 4, 'new', '2014-10-06 18:08:36', NULL),
(20, 1, 4, 'new', '2014-10-06 18:08:56', NULL),
(21, 1, 4, 'new post', '2014-10-06 18:09:29', NULL),
(22, 1, 4, 'new post', '2014-10-06 18:09:36', NULL),
(23, 1, 4, 'new post', '2014-10-06 18:10:34', NULL),
(24, 1, 4, 'xyz', '2014-10-06 18:10:50', NULL),
(25, 1, 4, 'xyz', '2014-10-06 18:19:00', NULL),
(26, 1, 4, 'xyz', '2014-10-06 18:22:28', NULL),
(27, 1, 4, '', '2014-10-06 18:23:27', NULL),
(28, 1, 4, 'abcxyz', '2014-10-06 18:28:24', NULL),
(29, 1, 4, 'a', '2014-10-06 18:28:35', NULL),
(30, 1, 4, '', '2014-10-06 18:29:38', NULL),
(31, 1, 4, '', '2014-10-06 18:30:21', NULL),
(32, 1, 4, '', '2014-10-06 18:34:22', NULL),
(33, 1, 4, 'sdgdfgdfhfg', '2014-10-06 18:35:16', NULL),
(34, 1, 4, '', '2014-10-06 18:35:38', NULL),
(35, 1, 4, 'abcdefghi', '2014-10-06 18:36:47', NULL),
(36, 1, 4, 'jdhgjdhbj', '2014-10-06 19:27:25', NULL),
(37, 1, 4, 'another post\r\n', '2014-10-07 10:42:20', NULL),
(38, 1, 4, 'jhdfjdshfjkgjdh', '2014-10-07 11:22:21', NULL),
(39, 1, 4, 'sdfdfdfgdfg', '2014-10-07 11:25:15', NULL),
(40, 2, 4, 'another post', '2014-10-07 11:25:58', NULL),
(41, 3, 4, 'hello world', '2014-10-07 11:30:01', NULL),
(42, 3, 4, 'Hello world 2', '2014-10-07 16:15:31', NULL),
(43, 3, 4, 'Good evening...\r\n', '2014-10-07 17:42:20', NULL),
(44, 1, 4, 'It was a good day.......', '2014-10-07 17:58:05', NULL),
(45, 1, 4, 'It was not a good day\r\n', '2014-10-07 18:23:34', NULL),
(46, 1, 4, 'It was not a good day', '2014-10-07 18:24:06', NULL),
(47, 2, 4, 'post 2', '2014-10-11 17:37:19', NULL),
(48, 3, 4, 'abc', '2014-10-11 18:56:25', NULL),
(49, 2, 4, 'post3\r\n', '2014-10-15 12:07:24', NULL),
(50, 2, 4, 'post4', '2014-10-15 13:10:36', NULL),
(51, 2, 4, 'post5', '2014-10-15 13:22:48', NULL),
(52, 2, 4, 'post6', '2014-10-15 13:30:54', NULL),
(53, 1, 4, 'It is a new post', '2014-10-15 13:54:53', NULL),
(54, 3, 4, 'post 1', '2014-10-15 14:55:31', NULL),
(55, 3, 4, 'post2', '2014-10-15 16:12:34', NULL),
(56, 3, 4, 'post3', '2014-10-15 16:55:07', NULL),
(57, 1, 4, 'another new post', '2014-10-15 17:17:11', NULL),
(58, 1, 4, 'post\r\n', '2014-10-15 17:19:28', NULL),
(59, 1, 4, 'abcdfhdjkhnjkgddfg', '2014-10-15 17:55:31', NULL),
(60, 1, 4, 'post', '2014-10-15 19:33:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `site_forum_thread`
--

CREATE TABLE IF NOT EXISTS `site_forum_thread` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `forum_name_id` bigint(20) unsigned NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL COMMENT 'who create this thread(site_user)',
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8_unicode_ci,
  `slug` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_post_id` bigint(20) unsigned DEFAULT NULL,
  `post_count` bigint(20) unsigned DEFAULT '0' COMMENT 'Total post under this thread',
  `view_count` bigint(20) unsigned DEFAULT '0',
  `create_at` datetime DEFAULT NULL COMMENT 'GMT+0',
  `update_at` datetime DEFAULT NULL COMMENT 'GMT+0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `site_forum_thread`
--

INSERT INTO `site_forum_thread` (`id`, `forum_name_id`, `user_id`, `title`, `content`, `slug`, `last_post_id`, `post_count`, `view_count`, `create_at`, `update_at`) VALUES
(1, 1, 1, 'Required a similar theme', '<p>Hello<br>\r\nBelow is the link to an image (of the homepage) where I want 5 blocks (with pop-up window when clicked) instead of having a slider, and some animation (optional) in the background.<br>\r\nIs there any theme for Drupal 7 which corresponds to this?</p>', 'required-a-similar-theme', 60, 47, 277, '2014-09-17 00:00:00', '2014-10-16 19:14:30'),
(2, 1, 1, 'Required a similar theme', '<p>Hello<br>\r\nBelow is the link to an image (of the homepage) where I want 5 blocks (with pop-up window when clicked) instead of having a slider, and some animation (optional) in the background.<br>\r\nIs there any theme for Drupal 7 which corresponds to this?</p>', 'required-a-similar-theme', 52, 6, 111, '2014-09-17 00:00:01', '2014-10-16 15:50:11'),
(3, 1, 2, 'botcha prevents ckeditor', '<p>I have upgraded to Drupal 7.31<br>\r\nI have installed CKEditor	4.4.3, Drupal 7.x-1.15<br>\r\nI have installed botcha 7.x-3.3</p>\r\n<p>My site <a href="http://www.aanimeri.fi">www.aanimeri.fi</a> allows authenticated users to add content into Forum. When logged in as an authenticated user and add Forum content ckeditor does not appear, only plain body box.</p>\r\n<p>When logged in as an administrator and add Forum content the ckeditor with its buttons is available</p>\r\n<p>If I uncheck botcha from the modules list then ckeditor is available for authenticated users</p>\r\n<p>When botcha is checked in the modules list ckeditor is available for comments for anonymous and authenticated users.</p>\r\n<p>Earlier botcha prevented as spam any new content from authenticated user into Forum declearing everything was spam. I got rid of that problem when I disabled Preview when adding Forum content.</p>\r\n<p>I upgraded from Drupal 6.28 and there were no that kind of problems</p>\r\n<p>I have been very satisfied with botcha but should also get available webeditor for users to add Forum content.</p>\r\n<p>Any solutions for this problem or should I change botcha with some other spam preventer? Or is it available some other web editor that works with botcha?</p>\r\n<p>Some information about the server:</p>\r\n<p>5.5.38-0+wheezy1 - (Debian)<br>\r\nDatabase system version	5.5.38-0+wheezy1<br>\r\nPHP	5.4.4-14+deb7u14</p>', 'required-a-similar-theme', 56, 7, 137, '2014-09-17 00:00:02', '2014-10-16 15:50:30');

-- --------------------------------------------------------

--
-- Table structure for table `site_language`
--

CREATE TABLE IF NOT EXISTS `site_language` (
  `id` tinyint(4) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `code` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `native_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '0=>inactive,1=>active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `site_language`
--

INSERT INTO `site_language` (`id`, `name`, `code`, `native_name`, `status`) VALUES
(1, 'English', 'en', 'English', 1),
(2, 'Dutch', 'nl', 'Dutch', 1);

-- --------------------------------------------------------

--
-- Table structure for table `site_lesson`
--

CREATE TABLE IF NOT EXISTS `site_lesson` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `language_id` bigint(20) unsigned NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `stage_id` tinyint(1) unsigned NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `level` tinyint(1) unsigned NOT NULL COMMENT '1-7 for beginner & intermediate, 0 for Advance',
  `memo` text COLLATE utf8_unicode_ci NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  `status` tinytext COLLATE utf8_unicode_ci NOT NULL COMMENT '0=>Draft,1=>publish,3=>deleted',
  PRIMARY KEY (`id`),
  KEY `language_id` (`language_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=133 ;

--
-- Dumping data for table `site_lesson`
--

INSERT INTO `site_lesson` (`id`, `language_id`, `title`, `user_id`, `stage_id`, `category_id`, `level`, `memo`, `create_at`, `update_at`, `status`) VALUES
(131, 2, 'Testing New', 4, 1, 3, 6, 'new memo', '2014-10-20 16:43:46', '2014-10-21 11:39:33', '0'),
(132, 1, 'Testing', 4, 3, 8, 0, 'new lesson memo', '2014-10-21 10:48:59', '2014-10-21 10:48:59', '0');

-- --------------------------------------------------------

--
-- Table structure for table `site_lesson_category`
--

CREATE TABLE IF NOT EXISTS `site_lesson_category` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=14 ;

--
-- Dumping data for table `site_lesson_category`
--

INSERT INTO `site_lesson_category` (`id`, `name`, `status`) VALUES
(1, 'Words', 1),
(2, 'Grammar', 1),
(3, 'Phrase', 1),
(4, 'Vocabulary', 1),
(5, 'Business', 1),
(6, 'Travel', 1),
(7, 'Local', 1),
(8, 'Sports', 1),
(9, 'Academic', 1),
(10, 'Kids', 1),
(11, 'Entertainment', 1),
(12, 'Others', 1),
(13, 'Music', 0);

-- --------------------------------------------------------

--
-- Table structure for table `site_lesson_question`
--

CREATE TABLE IF NOT EXISTS `site_lesson_question` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `lesson_id` bigint(20) unsigned NOT NULL,
  `type` enum('Q','S') COLLATE utf8_unicode_ci NOT NULL COMMENT 'Q=>Quiz,S=>Skit',
  `video_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `audio_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `question_text` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  `status` tinyint(1) NOT NULL COMMENT '0=>Inactive,1=>Active',
  PRIMARY KEY (`id`),
  KEY `lesson_id` (`lesson_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=50 ;

--
-- Dumping data for table `site_lesson_question`
--

INSERT INTO `site_lesson_question` (`id`, `lesson_id`, `type`, `video_name`, `image_name`, `audio_name`, `question_text`, `create_at`, `update_at`, `status`) VALUES
(46, 131, 'S', 'test_6.mp4', '', '', '', '2014-10-20 16:52:39', '2014-10-20 16:52:39', 1),
(47, 131, 'S', '', '', 'Maid with the Flaxen Hair_8.mp3', '', '2014-10-20 18:17:24', '2014-10-20 18:17:24', 1),
(48, 131, 'Q', '', '', 'Maid with the Flaxen Hair_7.mp3', 'Test Question', '2014-10-21 11:40:07', '2014-10-21 11:40:07', 1),
(49, 132, 'S', '', '', 'test - Copy_4.mp3', '', '2014-10-21 10:53:41', '2014-10-21 10:53:41', 1);

-- --------------------------------------------------------

--
-- Table structure for table `site_lesson_question_answer`
--

CREATE TABLE IF NOT EXISTS `site_lesson_question_answer` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `question_id` bigint(20) unsigned NOT NULL,
  `image_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `audio_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `answer_text` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `is_answer` enum('0','1') COLLATE utf8_unicode_ci NOT NULL COMMENT '0=>No,1=>Yes',
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  `status` tinyint(1) NOT NULL COMMENT '0=>Inactive,1=>Active',
  PRIMARY KEY (`id`),
  KEY `question_id` (`question_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=208 ;

--
-- Dumping data for table `site_lesson_question_answer`
--

INSERT INTO `site_lesson_question_answer` (`id`, `question_id`, `image_name`, `audio_name`, `answer_text`, `is_answer`, `create_at`, `update_at`, `status`) VALUES
(204, 48, '', '', 'New Option 1', '0', '2014-10-21 11:40:07', '2014-10-21 11:40:07', 1),
(205, 48, '', '', 'New Option 2', '0', '2014-10-21 11:40:07', '2014-10-21 11:40:07', 1),
(206, 48, 'Desert_1.jpg', '', 'Option 3', '1', '2014-10-21 11:40:07', '2014-10-21 11:40:07', 1),
(207, 48, '', '', 'Testing Answer', '0', '2014-10-21 11:40:07', '2014-10-21 11:40:07', 1);

-- --------------------------------------------------------

--
-- Table structure for table `site_lesson_skit`
--

CREATE TABLE IF NOT EXISTS `site_lesson_skit` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `lesson_id` bigint(20) unsigned NOT NULL,
  `video_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `audio_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  `status` enum('0','1') COLLATE utf8_unicode_ci NOT NULL COMMENT '0=>Inactive,1=>Active',
  PRIMARY KEY (`id`),
  KEY `lesson_id` (`lesson_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `site_lesson_stage`
--

CREATE TABLE IF NOT EXISTS `site_lesson_stage` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `site_lesson_stage`
--

INSERT INTO `site_lesson_stage` (`id`, `name`, `status`) VALUES
(1, 'Beginner', 1),
(2, 'Intermediate', 1),
(3, 'Advanced', 1);

-- --------------------------------------------------------

--
-- Table structure for table `site_lesson_stage_category`
--

CREATE TABLE IF NOT EXISTS `site_lesson_stage_category` (
  `lesson_stage_id` int(10) NOT NULL,
  `lesson_category_id` int(10) NOT NULL,
  PRIMARY KEY (`lesson_stage_id`,`lesson_category_id`),
  KEY `lesson_stage_id` (`lesson_stage_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='this is junction table between category and stage table';

--
-- Dumping data for table `site_lesson_stage_category`
--

INSERT INTO `site_lesson_stage_category` (`lesson_stage_id`, `lesson_category_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 13),
(2, 1),
(2, 2),
(2, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(3, 11),
(3, 12);

-- --------------------------------------------------------

--
-- Table structure for table `site_lesson_tag`
--

CREATE TABLE IF NOT EXISTS `site_lesson_tag` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `lesson_id` bigint(20) NOT NULL,
  `lesson_tag_master_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `lesson_tag_master_id` (`lesson_tag_master_id`),
  KEY `lesson_id` (`lesson_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=81 ;

--
-- Dumping data for table `site_lesson_tag`
--

INSERT INTO `site_lesson_tag` (`id`, `lesson_id`, `lesson_tag_master_id`) VALUES
(4, 61, 6),
(5, 62, 1),
(6, 63, 12),
(7, 64, 1),
(8, 64, 13),
(9, 65, 12),
(10, 66, 12),
(11, 67, 7),
(12, 68, 14),
(13, 69, 1),
(14, 70, 15),
(15, 71, 4),
(16, 72, 6),
(17, 73, 16),
(18, 74, 9),
(19, 74, 1),
(20, 74, 4),
(21, 75, 6),
(22, 76, 3),
(23, 77, 9),
(24, 78, 3),
(25, 79, 7),
(26, 80, 7),
(27, 81, 14),
(28, 82, 16),
(29, 83, 14),
(30, 84, 9),
(31, 85, 17),
(32, 86, 8),
(33, 87, 7),
(34, 88, 18),
(35, 89, 19),
(36, 90, 20),
(37, 91, 6),
(38, 92, 21),
(39, 93, 22),
(40, 94, 23),
(41, 95, 7),
(42, 96, 12),
(43, 97, 24),
(44, 98, 6),
(45, 99, 15),
(46, 100, 10),
(47, 101, 8),
(48, 102, 8),
(49, 103, 8),
(50, 104, 25),
(51, 105, 26),
(52, 106, 6),
(53, 107, 9),
(54, 108, 27),
(55, 109, 28),
(56, 110, 29),
(57, 111, 15),
(58, 112, 7),
(59, 113, 15),
(60, 114, 7),
(61, 115, 7),
(62, 116, 30),
(63, 117, 31),
(64, 118, 7),
(65, 119, 3),
(66, 120, 15),
(67, 121, 16),
(68, 121, 32),
(69, 122, 9),
(70, 123, 7),
(71, 124, 14),
(72, 125, 7),
(73, 126, 27),
(74, 127, 27),
(75, 128, 27),
(76, 129, 15),
(77, 130, 33),
(78, 131, 7),
(79, 131, 3),
(80, 132, 27);

-- --------------------------------------------------------

--
-- Table structure for table `site_lesson_tag_master`
--

CREATE TABLE IF NOT EXISTS `site_lesson_tag_master` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=35 ;

--
-- Dumping data for table `site_lesson_tag_master`
--

INSERT INTO `site_lesson_tag_master` (`id`, `name`, `description`) VALUES
(1, 'english', 'this is english learning'),
(2, 'learning', 'learning'),
(3, 'another tag', ''),
(4, 'english learning', ''),
(5, 'french learning', ''),
(6, 'new learning', ''),
(7, 'testing tag', ''),
(8, 'that''s a new tag', ''),
(9, 'thats a new lesson tag', ''),
(10, 'new tag for english', ''),
(11, 'learn spanish in 10 days', ''),
(12, 'new', ''),
(13, 'another', ''),
(14, 'testing', ''),
(15, 'new testing', ''),
(16, 'test', ''),
(17, 'new test', ''),
(18, 'dfg', ''),
(19, 'fnhgh', ''),
(20, 'dfgdg', ''),
(21, 'asd', ''),
(22, 'asdasd', ''),
(23, 'new tag', ''),
(24, 'nwe', ''),
(25, 'jkkk', ''),
(26, 'hjkhkj', ''),
(27, 'testing lesson', ''),
(28, 'testin lesson', ''),
(29, 'new lesson memo', ''),
(30, 'ert', ''),
(31, 'testing tags', ''),
(32, 'rana lesson', ''),
(33, 'enter tag', ''),
(34, 'bengali', '');

-- --------------------------------------------------------

--
-- Table structure for table `site_membership`
--

CREATE TABLE IF NOT EXISTS `site_membership` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  `status` enum('0','1','3') COLLATE utf8_unicode_ci NOT NULL COMMENT '0=>inactive,1=>active,3=>deleted',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `site_membership`
--

INSERT INTO `site_membership` (`id`, `name`, `create_at`, `update_at`, `status`) VALUES
(1, 'Free', '2014-09-09 10:30:31', '2014-09-09 10:30:31', '1'),
(2, 'Premium', '2014-09-09 10:30:31', '2014-09-09 10:30:31', '1');

-- --------------------------------------------------------

--
-- Table structure for table `site_membership_history`
--

CREATE TABLE IF NOT EXISTS `site_membership_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `membership_id` int(11) NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  `end_at` datetime NOT NULL,
  `status` enum('0','1','3') COLLATE utf8_unicode_ci NOT NULL COMMENT '0=>inactive,1=>active,3=>deleted',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `site_membership_history`
--

INSERT INTO `site_membership_history` (`id`, `user_id`, `membership_id`, `create_at`, `update_at`, `end_at`, `status`) VALUES
(1, 7, 2, '2014-09-09 15:21:48', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '1');

-- --------------------------------------------------------

--
-- Table structure for table `site_news`
--

CREATE TABLE IF NOT EXISTS `site_news` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `language_id` tinyint(4) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `content` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) unsigned NOT NULL COMMENT '0=>draft,1=>publish',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `site_news`
--

INSERT INTO `site_news` (`id`, `language_id`, `title`, `slug`, `content`, `status`, `create_at`, `update_at`) VALUES
(1, 1, 'Merchant privilege ', 'merchant-privilege', 'lingaporelingaporelingaporelingaporelingaporelingaporelingaporelingaporelingaporelingaporelingaporelingapo', 1, '2014-09-10 09:33:57', '2014-10-18 14:59:05'),
(2, 2, 'sumanta kr ghosh', 'sumanta-kr-ghosh', 'sdsadasdasdvadsbdasbdasdba', 0, '2014-09-10 13:33:40', '0000-00-00 00:00:00'),
(3, 2, 'sumanta kr ghosh', 'sumanta-kr-ghosh-2', 'dcas acsadsa dsadsa', 0, '2014-09-10 13:35:32', '2014-09-12 13:22:59'),
(4, 1, 'Lingapore blog', 'lingapore-blog', 'Lingapore blogLingapore blogLingapore blogLingapore blogLingapore blogLingapore blog', 0, '2014-10-21 11:59:55', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `site_newsletter_subscriber`
--

CREATE TABLE IF NOT EXISTS `site_newsletter_subscriber` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(254) NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  `status` tinyint(4) NOT NULL COMMENT '0=>unsubscribe1=>subscribe',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `site_newsletter_subscriber`
--

INSERT INTO `site_newsletter_subscriber` (`id`, `email`, `create_at`, `update_at`, `status`) VALUES
(2, 'sumanta.ghosh@infoway.us', '2014-09-15 00:01:01', '2014-10-21 15:59:03', 1),
(3, 'abc@infoway.us', '2014-10-21 15:59:28', '0000-00-00 00:00:00', 0),
(4, 'xyz@infoway.us', '2014-10-21 17:48:40', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `site_seo`
--

CREATE TABLE IF NOT EXISTS `site_seo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `keyword` text COLLATE utf8_unicode_ci NOT NULL,
  `page_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT 'ex:contact_us,about_us',
  `language_id` tinyint(4) NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '0=>inactive,1=>active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `site_seo`
--

INSERT INTO `site_seo` (`id`, `title`, `description`, `keyword`, `page_name`, `language_id`, `create_at`, `update_at`, `status`) VALUES
(1, 'About us', 'about us', 'about', 'about_us', 1, '0000-00-00 00:00:00', '2014-10-20 15:09:05', 1),
(2, 'about_us', 'about_us', 'about_us', 'about_us', 2, '0000-00-00 00:00:00', '2014-09-14 21:53:44', 0),
(3, 'Home', 'home page', 'home page', 'home_page', 1, '2014-10-17 14:37:39', '2014-09-14 21:55:31', 1),
(4, 'My Account', 'my account', 'my account', 'my_account', 1, '2014-10-17 14:37:39', '2014-09-14 21:55:31', 1),
(5, 'Terms', 'terms', 'terms', 'terms', 1, '0000-00-00 00:00:00', '2014-09-14 21:55:31', 1),
(6, 'Privacy', 'privacy', 'privacy', 'privacy', 1, '0000-00-00 00:00:00', '2014-09-14 21:55:31', 1),
(7, 'Forum', 'forum', 'forum', 'forum', 1, '2014-10-17 17:44:46', '2014-09-14 21:53:44', 1),
(8, 'Blog', 'Blog', 'Blog', 'Blog', 1, '2014-10-21 17:20:13', '0000-00-00 00:00:00', 0),
(10, 'Forum Category', 'Forum Category', 'Forum Category', 'Forum Category', 1, '2014-10-21 17:28:06', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `site_user`
--

CREATE TABLE IF NOT EXISTS `site_user` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `user_type_id` int(10) unsigned NOT NULL COMMENT 'CONSTRAINT FOREIGN KEY (UserTypeId) REFERENCES user_type(TypeId)',
  `password` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `full_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `gender` tinyint(1) unsigned NOT NULL COMMENT '1=>male,2=>female,3=>other',
  `language_id` char(3) COLLATE utf8_unicode_ci NOT NULL,
  `profile_image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `sound_effect` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '0=>off,1=>on',
  `microphone` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '0=>off,1=>on',
  `speaker` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '0=>off,1=>on',
  `membership_id` int(11) NOT NULL,
  `facebook_url` text COLLATE utf8_unicode_ci NOT NULL,
  `twitter_url` text COLLATE utf8_unicode_ci NOT NULL,
  `gplus_url` text COLLATE utf8_unicode_ci NOT NULL,
  `activation_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `reset_key` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '0=>inactive,1=>active',
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UserName` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=13 ;

--
-- Dumping data for table `site_user`
--

INSERT INTO `site_user` (`id`, `username`, `email`, `user_type_id`, `password`, `first_name`, `last_name`, `full_name`, `birthday`, `gender`, `language_id`, `profile_image`, `sound_effect`, `microphone`, `speaker`, `membership_id`, `facebook_url`, `twitter_url`, `gplus_url`, `activation_code`, `reset_key`, `status`, `create_at`, `update_at`) VALUES
(1, 'lingapore', 'sanjeet.kumar@infoway.us', 5, '30b34f1a55eb1b1950464410c02657ee', 'Sanjeet', 'Kumar', '', '2014-09-12', 1, '1', '', 0, 1, 0, 1, '', '', '', '', '', 1, '2014-08-29 00:00:00', '2014-09-12 16:13:27'),
(2, 'pritam', 'pritam.ghosh@infoway.us', 4, 'cbe93bfe45858156ab59563c9b791aae', 'Pritam', 'Ghosh', '', '0000-00-00', 0, '1', '', 0, 0, 0, 1, '', '', '', '', '', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'suvajit', 'suvajit.pal@infoway.us', 2, '21232f297a57a5a743894a0e4a801fc3', 'Suvajit', 'Pal', '', '1988-11-20', 0, '0', '', 0, 2, 2, 1, '', '', '', '', '', 1, '2014-08-29 00:00:00', '2014-08-29 00:00:00'),
(4, 'rananaskar', 'rana.naskar@infoway.us', 2, 'e10adc3949ba59abbe56e057f20f883e', 'Rana', 'Naskar', 'Rana Naskar', '0000-00-00', 2, '1', 'John-Doe-john-doe-7968986-291-291.jpg', 0, 0, 1, 1, 'http://www.facebook.com/rana.naskar', 'http://twitter.com/rana.naskar', 'http://www.google.com/rananaskar', '', '68b1d43cfaca681126f329ee04a75c2deb5f8849', 1, '2014-08-30 15:03:54', '0000-00-00 00:00:00'),
(5, 'asdasdasd', 'prasenjit.adhikary@infoway.us', 2, '81dc9bdb52d04dc20036dbd8313ed055', 'Prasenjit', 'Adhikary', '', '0000-00-00', 0, '0', '', 0, 2, 2, 1, '', '', '', '', '', 2, '2014-08-30 15:17:52', '0000-00-00 00:00:00'),
(6, 'rananaskars', 'rana.naskar@infoway.us.in', 1, 'e10adc3949ba59abbe56e057f20f883e', 'Rana', 'Naskar', '', '0000-00-00', 0, '', '', 0, 0, 0, 1, '', '', '', 'b4ea05a3ebab813d09d283cbd2ee46f1b761c842', '', 2, '2014-09-09 12:59:33', '0000-00-00 00:00:00'),
(8, 'sumanta', 'sumanta.ghosh@infoway.us', 6, 'f795d9bd4696a5d0b6e4d4a627ed7151', 'Sumanta', 'Ghosh', '', '1988-08-28', 1, '1', '', 1, 1, 1, 1, 'http://facebook.com/', '', '', '', '', 1, '0000-00-00 00:00:00', '2014-09-12 16:44:40'),
(9, 'rana', 'rana.naskar@infoway.co.in', 0, '25f9e794323b453885f5181f1b624d0b', 'Rana', 'Naskar', '', '0000-00-00', 0, '', '', 0, 0, 0, 0, '', '', '', '9b156a020378c06f906671f1819a9a0e10eb9eb0', 'bd57162b08a38ccd46cc08f2837c6aca772a4abc', 0, '2014-10-13 12:20:45', '0000-00-00 00:00:00'),
(10, 'rana.naskar', 'rana.naskar@infoway.in', 0, '202cb962ac59075b964b07152d234b70', '', '', 'Rana Naskar', '0000-00-00', 0, '', '', 0, 0, 0, 0, '', '', '', 'd5ca279a0ea563a1d0a018450d99d31f0089f43f', '', 0, '2014-10-13 13:30:13', '0000-00-00 00:00:00'),
(11, 'ranas', 'rana.naskar@infoway.asd', 0, '81dc9bdb52d04dc20036dbd8313ed055', '', '', 'asdasd', '0000-00-00', 0, '', '', 0, 0, 0, 0, '', '', '', '6ec5842b9c45711c0fb21802f26a2bcf47235740', '', 0, '2014-10-17 11:59:15', '0000-00-00 00:00:00'),
(12, 'johny.depps', 'johny.depps@gmal.com', 0, 'e10adc3949ba59abbe56e057f20f883e', '', '', '', '0000-00-00', 0, '', '', 0, 0, 0, 0, '', '', '', 'af949a51197ae3cd77ab98d04104559014391a14', '', 0, '2014-10-23 12:32:29', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `site_user_correction`
--

CREATE TABLE IF NOT EXISTS `site_user_correction` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `comment_id` bigint(20) unsigned NOT NULL,
  `main_line` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `corrected_line` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `correction_id` bigint(20) unsigned NOT NULL,
  `correction_type` tinyint(1) NOT NULL COMMENT '0=>Line Correction,1=>Line Perfect',
  `user_id` bigint(20) unsigned NOT NULL,
  `comment` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `create_at` datetime NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `comment_id` (`comment_id`),
  KEY `correction_id` (`correction_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

-- --------------------------------------------------------

--
-- Table structure for table `site_user_type`
--

CREATE TABLE IF NOT EXISTS `site_user_type` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `status` enum('0','1') COLLATE utf8_unicode_ci NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=127 ;

--
-- Dumping data for table `site_user_type`
--

INSERT INTO `site_user_type` (`id`, `name`, `status`) VALUES
(2, 'Learner', '1'),
(3, 'Guide', '1'),
(4, 'Parent', '1'),
(5, 'School', '1'),
(6, 'Company', '1'),
(127, 'Business Guide', '1');

-- --------------------------------------------------------

--
-- Table structure for table `user_master`
--

CREATE TABLE IF NOT EXISTS `user_master` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `UserName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `UserEmail` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `UserTypeId` tinyint(3) unsigned NOT NULL COMMENT 'CONSTRAINT FOREIGN KEY (UserTypeId) REFERENCES user_type(TypeId)',
  `UserPassword` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `FirstName` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `LastName` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `DOB` date NOT NULL,
  `Gender` enum('male','female') COLLATE utf8_unicode_ci NOT NULL,
  `UserLanguageId` tinyint(3) unsigned NOT NULL COMMENT 'CONSTRAINT FOREIGN KEY (UserLanguageId) REFERENCES site(LanguageId)',
  `ProfileImage` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `SoundEffects` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Microphone` enum('on','off') COLLATE utf8_unicode_ci NOT NULL,
  `Speaker` enum('on','off') COLLATE utf8_unicode_ci NOT NULL,
  `Membership` enum('free','premium') COLLATE utf8_unicode_ci NOT NULL,
  `MembershipStatus` tinyint(3) unsigned NOT NULL COMMENT 'CONSTRAINT FOREIGN KEY (MembershipStatus) REFERENCES site(MembershipId)',
  `ActivationKey` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `ResetKey` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `UserStatus` enum('active','inactive') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'inactive',
  `AddedDate` datetime NOT NULL,
  `UpdatedDate` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UserName` (`UserName`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `user_master`
--

INSERT INTO `user_master` (`id`, `UserName`, `UserEmail`, `UserTypeId`, `UserPassword`, `FirstName`, `LastName`, `DOB`, `Gender`, `UserLanguageId`, `ProfileImage`, `SoundEffects`, `Microphone`, `Speaker`, `Membership`, `MembershipStatus`, `ActivationKey`, `ResetKey`, `UserStatus`, `AddedDate`, `UpdatedDate`) VALUES
(1, 'lingapore', 'sanjeet.kumar@infoway.us', 1, '21232f297a57a5a743894a0e4a801fc3', 'Sanjeet', 'Kumar', '0000-00-00', '', 0, '', '', '', '', '', 0, '', '', 'inactive', '2014-08-29 00:00:00', '2014-08-29 00:00:00'),
(2, 'pritam', 'pritam.ghosh@infoway.us', 4, 'cbe93bfe45858156ab59563c9b791aae', 'Pritam', 'Ghosh', '0000-00-00', '', 1, '', '', '', '', '', 0, '', '', 'inactive', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'suvajit', 'suvajit.pal@infoway.us', 2, '21232f297a57a5a743894a0e4a801fc3', 'Suvajit', 'Pal', '1988-11-20', 'male', 0, '', '', 'off', 'off', 'free', 0, '', '', 'active', '2014-08-29 00:00:00', '2014-08-29 00:00:00'),
(4, 'rananaskar', 'rana.naskar@infoway.us', 2, '81dc9bdb52d04dc20036dbd8313ed055', 'Rana', 'Naskar', '0000-00-00', 'male', 0, '', '', 'on', 'on', 'free', 0, '', '', 'active', '2014-08-30 15:03:54', '0000-00-00 00:00:00'),
(5, 'asdasdasd', 'prasenjit.adhikary@infoway.us', 2, '81dc9bdb52d04dc20036dbd8313ed055', 'Prasenjit', 'Adhikary', '0000-00-00', 'male', 0, '', '', 'off', 'off', 'free', 0, '', '', 'inactive', '2014-08-30 15:17:52', '0000-00-00 00:00:00');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `site_correction`
--
ALTER TABLE `site_correction`
  ADD CONSTRAINT `site_correction_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `site_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `site_correction_ibfk_2` FOREIGN KEY (`language_id`) REFERENCES `site_language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `site_correction_comments`
--
ALTER TABLE `site_correction_comments`
  ADD CONSTRAINT `site_correction_comments_ibfk_2` FOREIGN KEY (`correction_id`) REFERENCES `site_correction` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `site_correction_comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `site_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `site_correction_like`
--
ALTER TABLE `site_correction_like`
  ADD CONSTRAINT `site_correction_like_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `site_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `site_correction_like_ibfk_2` FOREIGN KEY (`correction_id`) REFERENCES `site_correction` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `site_correction_visit`
--
ALTER TABLE `site_correction_visit`
  ADD CONSTRAINT `site_correction_visit_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `site_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `site_correction_visit_ibfk_2` FOREIGN KEY (`correction_id`) REFERENCES `site_correction` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `site_lesson_question`
--
ALTER TABLE `site_lesson_question`
  ADD CONSTRAINT `site_lesson_question_ibfk_1` FOREIGN KEY (`lesson_id`) REFERENCES `site_lesson` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `site_lesson_question_answer`
--
ALTER TABLE `site_lesson_question_answer`
  ADD CONSTRAINT `site_lesson_question_answer_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `site_lesson_question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `site_lesson_skit`
--
ALTER TABLE `site_lesson_skit`
  ADD CONSTRAINT `site_lesson_skit_ibfk_1` FOREIGN KEY (`lesson_id`) REFERENCES `site_lesson` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `site_user_correction`
--
ALTER TABLE `site_user_correction`
  ADD CONSTRAINT `site_user_correction_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `site_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `site_user_correction_ibfk_1` FOREIGN KEY (`comment_id`) REFERENCES `site_correction_comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `site_user_correction_ibfk_2` FOREIGN KEY (`correction_id`) REFERENCES `site_correction` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
