(self.webpackChunkng_lightning_app=self.webpackChunkng_lightning_app||[]).push([[834],{56834:function(u,n,s){"use strict";s.r(n),s.d(n,{NglDemoGetStartedModule:function(){return g}});var Z=s(61116),a=s(20563),e=s(87368);const o=[{path:"",component:(()=>{class u{}return u.\u0275fac=function(n){return new(n||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["ng-component"]],decls:392,vars:18,consts:[[1,"page__header","slds-border_bottom","slds-grid","slds-wrap","slds-m-bottom_medium"],[1,"slds-has-flexi-truncate","slds-align-middle"],[1,"callout"],[1,"slds-text-heading_small","slds-m-top_large","slds-m-bottom_small"],[1,"code"],[1,"language-clike"],[1,"token","operator"],[1,"slds-text-heading_small","slds-m-top_xx-large","slds-m-bottom_small"],["href","https://material.angular.io/cdk/"],[1,"language-json"],[1,"token","property"],[1,"token","punctuation"],[1,"token","string"],["routerLink","/components"],[1,"language-typescript"],[1,"token","keyword"],[1,"token","function"],[1,"token","class-name"],[1,"token","constant"],[1,"slds-m-top_medium"]],template:function(u,n){1&u&&(e.TgZ(0,"header",0),e.TgZ(1,"div",1),e.TgZ(2,"h1"),e._uU(3,"Get Started"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"p"),e._uU(5,"This is an open source project that builds Angular widgets following UX guidelines and using HTML/CSS of Salesforce's Lightning Design System."),e.qZA(),e.TgZ(6,"div"),e.TgZ(7,"h2",2),e._uU(8,"Installation"),e.qZA(),e.TgZ(9,"div",3),e._uU(10,"Step 1: Installing packages"),e.qZA(),e.TgZ(11,"p"),e._uU(12,"You can use either the "),e.TgZ(13,"span",4),e._uU(14,"npm"),e.qZA(),e._uU(15," or "),e.TgZ(16,"span",4),e._uU(17,"yarn"),e.qZA(),e._uU(18," command-line tool to install packages."),e.qZA(),e.TgZ(19,"pre",5),e.IAx(),e.TgZ(20,"code"),e._uU(21,"npm install "),e.TgZ(22,"span",6),e._uU(23,"--"),e.qZA(),e._uU(24,"save ng"),e.TgZ(25,"span",6),e._uU(26,"-"),e.qZA(),e._uU(27,"lightning\n"),e.qZA(),e.fQ9(),e.qZA(),e.TgZ(28,"div",7),e._uU(29,"Step 2: Installing dependencies"),e.qZA(),e.TgZ(30,"p"),e._uU(31,"Some components rely on "),e.TgZ(32,"a",8),e._uU(33,"Angular CDK"),e.qZA(),e._uU(34," to work correctly. If you don't already have "),e.TgZ(35,"b"),e.TgZ(36,"span",4),e._uU(37,"@angular/cdk"),e.qZA(),e.qZA(),e._uU(38," as a dependency, you should also install it to your application via "),e.TgZ(39,"span",4),e._uU(40,"npm"),e.qZA(),e._uU(41," or "),e.TgZ(42,"span",4),e._uU(43,"yarn"),e.qZA(),e._uU(44,"."),e.qZA(),e.TgZ(45,"p"),e._uU(46,"If you are later going to use Salesforce's LDS SASS files or want to import their CSS from your "),e.TgZ(47,"span",4),e._uU(48,"node_modules"),e.qZA(),e._uU(49," instead of CDN, you should also install "),e.TgZ(50,"b"),e.TgZ(51,"span",4),e._uU(52,"@salesforce-ux/design-system"),e.qZA(),e.qZA(),e._uU(53,"."),e.qZA(),e.TgZ(54,"div",7),e._uU(55,"Step 3: Adding styles"),e.qZA(),e.TgZ(56,"p"),e._uU(57,"Including SLDS CSS files and a small set of structural styles of CDK, is required for your application to work correctly."),e.qZA(),e.TgZ(58,"p"),e._uU(59,"If you are using the Angular CLI, you need to add the following to the "),e.TgZ(60,"span",4),e._uU(61,"styles"),e.qZA(),e._uU(62," array of your "),e.TgZ(63,"span",4),e._uU(64,"angular.json"),e.qZA(),e._uU(65," file."),e.qZA(),e.TgZ(66,"pre",9),e.IAx(),e.TgZ(67,"code"),e.TgZ(68,"span",10),e._uU(69,'"styles"'),e.qZA(),e.TgZ(70,"span",6),e._uU(71,":"),e.qZA(),e._uU(72," "),e.TgZ(73,"span",11),e._uU(74,"["),e.qZA(),e._uU(75,"\n  "),e.TgZ(76,"span",12),e._uU(77,'"node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css"'),e.qZA(),e.TgZ(78,"span",11),e._uU(79,","),e.qZA(),e._uU(80,"\n  "),e.TgZ(81,"span",12),e._uU(82,'"node_modules/@angular/cdk/overlay-prebuilt.css"'),e.qZA(),e.TgZ(83,"span",11),e._uU(84,","),e.qZA(),e._uU(85,"\n  ... any other styles\n"),e.TgZ(86,"span",11),e._uU(87,"]"),e.qZA(),e.TgZ(88,"span",11),e._uU(89,","),e.qZA(),e.qZA(),e.fQ9(),e.qZA(),e.TgZ(90,"p"),e._uU(91,"If you are not using the CLI, you'll need to add the files listed above to your build tooling or you could also include them via "),e.TgZ(92,"span",4),e._uU(93,"<link>"),e.qZA(),e._uU(94," elements in your "),e.TgZ(95,"span",4),e._uU(96,"index.html"),e.qZA(),e._uU(97,"."),e.qZA(),e.TgZ(98,"div",7),e._uU(99,"Step 4 (optional): Setup SLDS icons"),e.qZA(),e.TgZ(100,"p"),e._uU(101," If you want to use SLDS icons, you must provide a copy of the various sprite files (ie "),e.TgZ(102,"span",4),e._uU(103,"@salesforce-ux/design-system/assets/icons/*-sprite/svg/symbols.svg"),e.qZA(),e._uU(104,"), served through your server. If you are using the Angular CLI, here is an example configuration for your "),e.TgZ(105,"span",4),e._uU(106,"assets"),e.qZA(),e._uU(107," property: "),e.qZA(),e.TgZ(108,"pre",9),e.TgZ(109,"code"),e.TgZ(110,"span",10),e._uU(111,'"assets"'),e.qZA(),e.TgZ(112,"span",6),e._uU(113,":"),e.qZA(),e._uU(114," "),e.TgZ(115,"span",11),e._uU(116,"["),e.qZA(),e._uU(117,"\n  "),e.TgZ(118,"span",11),e._uU(119),e.qZA(),e._uU(120,"\n    "),e.TgZ(121,"span",10),e._uU(122,'"glob"'),e.qZA(),e.TgZ(123,"span",6),e._uU(124,":"),e.qZA(),e._uU(125," "),e.TgZ(126,"span",12),e._uU(127,'"**/*"'),e.qZA(),e.TgZ(128,"span",11),e._uU(129,","),e.qZA(),e._uU(130,"\n    "),e.TgZ(131,"span",10),e._uU(132,'"input"'),e.qZA(),e.TgZ(133,"span",6),e._uU(134,":"),e.qZA(),e._uU(135," "),e.TgZ(136,"span",12),e._uU(137,'"node_modules/@salesforce-ux/design-system/assets/"'),e.qZA(),e.TgZ(138,"span",11),e._uU(139,","),e.qZA(),e._uU(140,"\n    "),e.TgZ(141,"span",10),e._uU(142,'"output"'),e.qZA(),e.TgZ(143,"span",6),e._uU(144,":"),e.qZA(),e._uU(145," "),e.TgZ(146,"span",12),e._uU(147,'"/assets"'),e.qZA(),e._uU(148,"\n  "),e.TgZ(149,"span",11),e._uU(150),e.qZA(),e.TgZ(151,"span",11),e._uU(152,","),e.qZA(),e._uU(153,"\n  ... any other assets\n"),e.TgZ(154,"span",11),e._uU(155,"]"),e.qZA(),e.TgZ(156,"span",11),e._uU(157,","),e.qZA(),e.qZA(),e.qZA(),e.TgZ(158,"p"),e._uU(159,"Based on your needs you can change what will be copied from SLDS "),e.TgZ(160,"span",4),e._uU(161,"assets"),e.qZA(),e._uU(162," folder, and also change the "),e.TgZ(163,"span",4),e._uU(164,"output"),e.qZA(),e._uU(165," folder, but remember to configure the "),e.TgZ(166,"span",4),e._uU(167,"svgPath"),e.qZA(),e._uU(168," as described below."),e.qZA(),e.qZA(),e.TgZ(169,"div"),e.TgZ(170,"h2",2),e._uU(171,"Reading the documentation"),e.qZA(),e.TgZ(172,"p"),e._uU(173," Each component has API documentation, examples, and a working demo. They can be found "),e.TgZ(174,"a",13),e._uU(175,"here"),e.qZA(),e._uU(176,". "),e.qZA(),e.qZA(),e.TgZ(177,"div"),e.TgZ(178,"h2",2),e._uU(179,"Usage"),e.qZA(),e.TgZ(180,"p"),e._uU(181,"Once installed you need to import our main module into your application module. You should end up with code similar to this:"),e.qZA(),e.TgZ(182,"pre",14),e.TgZ(183,"code"),e.TgZ(184,"span",15),e._uU(185,"import"),e.qZA(),e._uU(186," "),e.TgZ(187,"span",11),e._uU(188),e.qZA(),e._uU(189,"AppComponent"),e.TgZ(190,"span",11),e._uU(191),e.qZA(),e._uU(192," "),e.TgZ(193,"span",15),e._uU(194,"from"),e.qZA(),e._uU(195," "),e.TgZ(196,"span",12),e._uU(197,"'...'"),e.qZA(),e.TgZ(198,"span",11),e._uU(199,";"),e.qZA(),e._uU(200,"\n"),e.TgZ(201,"span",15),e._uU(202,"import"),e.qZA(),e._uU(203," "),e.TgZ(204,"span",11),e._uU(205),e.qZA(),e._uU(206,"NglModule"),e.TgZ(207,"span",11),e._uU(208),e.qZA(),e._uU(209," "),e.TgZ(210,"span",15),e._uU(211,"from"),e.qZA(),e._uU(212," "),e.TgZ(213,"span",12),e._uU(214,"'ng-lightning'"),e.qZA(),e.TgZ(215,"span",11),e._uU(216,";"),e.qZA(),e._uU(217,"\n\n@"),e.TgZ(218,"span",16),e._uU(219,"NgModule"),e.qZA(),e.TgZ(220,"span",11),e._uU(221,"("),e.qZA(),e.TgZ(222,"span",11),e._uU(223),e.qZA(),e._uU(224,"\n  imports"),e.TgZ(225,"span",6),e._uU(226,":"),e.qZA(),e._uU(227," "),e.TgZ(228,"span",11),e._uU(229,"["),e.qZA(),e.TgZ(230,"span",6),e._uU(231,"..."),e.qZA(),e.TgZ(232,"span",11),e._uU(233,","),e.qZA(),e._uU(234," NglModule"),e.TgZ(235,"span",11),e._uU(236,"]"),e.qZA(),e.TgZ(237,"span",11),e._uU(238,","),e.qZA(),e._uU(239,"\n  declarations"),e.TgZ(240,"span",6),e._uU(241,":"),e.qZA(),e._uU(242," "),e.TgZ(243,"span",11),e._uU(244,"["),e.qZA(),e._uU(245,"AppComponent"),e.TgZ(246,"span",11),e._uU(247,","),e.qZA(),e._uU(248," "),e.TgZ(249,"span",6),e._uU(250,"..."),e.qZA(),e.TgZ(251,"span",11),e._uU(252,"]"),e.qZA(),e.TgZ(253,"span",11),e._uU(254,","),e.qZA(),e._uU(255,"\n  bootstrap"),e.TgZ(256,"span",6),e._uU(257,":"),e.qZA(),e._uU(258," "),e.TgZ(259,"span",11),e._uU(260,"["),e.qZA(),e._uU(261,"AppComponent"),e.TgZ(262,"span",11),e._uU(263,"]"),e.qZA(),e.TgZ(264,"span",11),e._uU(265,","),e.qZA(),e._uU(266,"\n"),e.TgZ(267,"span",11),e._uU(268),e.qZA(),e.TgZ(269,"span",11),e._uU(270,")"),e.qZA(),e._uU(271,"\n"),e.TgZ(272,"span",15),e._uU(273,"export"),e.qZA(),e._uU(274," "),e.TgZ(275,"span",15),e._uU(276,"class"),e.qZA(),e._uU(277," "),e.TgZ(278,"span",17),e._uU(279,"AppModule"),e.qZA(),e._uU(280," "),e.TgZ(281,"span",11),e._uU(282),e.qZA(),e.TgZ(283,"span",11),e._uU(284),e.qZA(),e._uU(285,"\n"),e.qZA(),e.qZA(),e.TgZ(286,"p"),e._uU(287,"Alternatively you could only import (sub)modules with components you need. For example, if you only want to use the "),e.TgZ(288,"span",4),e._uU(289,"<ngl-modal>"),e.qZA(),e._uU(290," component, you can import just "),e.TgZ(291,"span",4),e._uU(292,"NglModalsModule"),e.qZA(),e._uU(293," instead of "),e.TgZ(294,"span",4),e._uU(295,"NglModule"),e.qZA(),e._uU(296,". The resulting bundle will be smaller in this case."),e.qZA(),e.qZA(),e.TgZ(297,"div"),e.TgZ(298,"h2",2),e._uU(299,"Configuration"),e.qZA(),e.TgZ(300,"p"),e._uU(301,"Optionally, you can configure and provide your own default values, using the various injection tokens available."),e.qZA(),e.TgZ(302,"pre",14),e.TgZ(303,"code"),e.TgZ(304,"span",15),e._uU(305,"import"),e.qZA(),e._uU(306," "),e.TgZ(307,"span",11),e._uU(308),e.qZA(),e._uU(309," "),e.TgZ(310,"span",18),e._uU(311,"NGL_ICON_CONFIG"),e.qZA(),e.TgZ(312,"span",11),e._uU(313,","),e.qZA(),e._uU(314," NglIconConfig "),e.TgZ(315,"span",11),e._uU(316),e.qZA(),e._uU(317," "),e.TgZ(318,"span",15),e._uU(319,"from"),e.qZA(),e._uU(320," "),e.TgZ(321,"span",12),e._uU(322,"'ng-ligthning'"),e.qZA(),e.TgZ(323,"span",11),e._uU(324,";"),e.qZA(),e._uU(325,"\n\n@"),e.TgZ(326,"span",16),e._uU(327,"NgModule"),e.qZA(),e.TgZ(328,"span",11),e._uU(329,"("),e.qZA(),e.TgZ(330,"span",11),e._uU(331),e.qZA(),e._uU(332,"\n  providers"),e.TgZ(333,"span",6),e._uU(334,":"),e.qZA(),e._uU(335," "),e.TgZ(336,"span",11),e._uU(337,"["),e.qZA(),e._uU(338,"\n    "),e.TgZ(339,"span",6),e._uU(340,"..."),e.qZA(),e.TgZ(341,"span",11),e._uU(342,","),e.qZA(),e._uU(343,"\n    "),e.TgZ(344,"span",11),e._uU(345),e.qZA(),e._uU(346," provide"),e.TgZ(347,"span",6),e._uU(348,":"),e.qZA(),e._uU(349," "),e.TgZ(350,"span",18),e._uU(351,"NGL_ICON_CONFIG"),e.qZA(),e.TgZ(352,"span",11),e._uU(353,","),e.qZA(),e._uU(354," useValue"),e.TgZ(355,"span",6),e._uU(356,":"),e.qZA(),e._uU(357," "),e.TgZ(358,"span",6),e._uU(359,"<"),e.qZA(),e._uU(360,"NglIconConfig"),e.TgZ(361,"span",6),e._uU(362,">"),e.qZA(),e.TgZ(363,"span",11),e._uU(364),e.qZA(),e._uU(365," svgPath"),e.TgZ(366,"span",6),e._uU(367,":"),e.qZA(),e._uU(368," "),e.TgZ(369,"span",12),e._uU(370,"'/my/path'"),e.qZA(),e._uU(371," "),e.TgZ(372,"span",11),e._uU(373),e.qZA(),e._uU(374," "),e.TgZ(375,"span",11),e._uU(376),e.qZA(),e.TgZ(377,"span",11),e._uU(378,","),e.qZA(),e._uU(379,"\n  "),e.TgZ(380,"span",11),e._uU(381,"]"),e.qZA(),e.TgZ(382,"span",11),e._uU(383,","),e.qZA(),e._uU(384,"\n"),e.TgZ(385,"span",11),e._uU(386),e.qZA(),e.TgZ(387,"span",11),e._uU(388,")"),e.qZA(),e._uU(389,"\n"),e.qZA(),e.qZA(),e.TgZ(390,"p",19),e._uU(391,"Currently available options are documented in the API section of each component on which are available."),e.qZA(),e.qZA()),2&u&&(e.xp6(119),e.Oqu("{"),e.xp6(31),e.Oqu("}"),e.xp6(38),e.Oqu("{"),e.xp6(3),e.Oqu("}"),e.xp6(14),e.Oqu("{"),e.xp6(3),e.Oqu("}"),e.xp6(15),e.Oqu("{"),e.xp6(45),e.Oqu("}"),e.xp6(14),e.Oqu("{"),e.xp6(2),e.Oqu("}"),e.xp6(24),e.Oqu("{"),e.xp6(8),e.Oqu("}"),e.xp6(15),e.Oqu("{"),e.xp6(14),e.Oqu("{"),e.xp6(19),e.Oqu("{"),e.xp6(9),e.Oqu("}"),e.xp6(3),e.Oqu("}"),e.xp6(10),e.Oqu("}"))},directives:[a.yS],encapsulation:2,changeDetection:0}),u})()}];let g=(()=>{class u{}return u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[[Z.ez,a.Bz.forChild(o)]]}),u})()}}]);