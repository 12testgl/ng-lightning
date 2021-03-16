function _classCallCheck(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(b,a){for(var c=0;c<a.length;c++){var n=a[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(b,n.key,n)}}function _createClass(b,a,c){return a&&_defineProperties(b.prototype,a),c&&_defineProperties(b,c),b}(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{VM0K:function(b,a,c){"use strict";c.r(a),c.d(a,"NglDemoTabsModule",(function(){return k}));var n=c("ofXK"),t=c("tyNb"),e=c("vc5p"),s=c("dH7C"),B=c("fXoL"),T=c("zP4+"),p=c("VMZN"),S=c("hk0e"),i=c("gRYf");function l(b,a){if(1&b&&B.Bc(0),2&b){var c=B.gc();B.Dc("You have ",c.details.length," details.")}}function o(b,a){if(1&b&&(B.Bc(0,"Detail "),B.Tb(1,"i"),B.Bc(2),B.Sb()),2&b){var c=B.gc().$implicit;B.Bb(2),B.Cc(c)}}function d(b,a){if(1&b){var c=B.Vb();B.Tb(0,"p"),B.Bc(1,"Some detail text for "),B.Tb(2,"b"),B.Bc(3),B.Sb(),B.Bc(4,"."),B.Sb(),B.Tb(5,"button",13),B.cc("click",(function(){B.sc(c);var b=B.gc().$implicit;return B.gc().removeDetail(b)})),B.Bc(6,"Remove"),B.Sb()}if(2&b){var n=B.gc().$implicit;B.Bb(3),B.Cc(n)}}function r(b,a){if(1&b){var c=B.Vb();B.Tb(0,"ngl-tab",10),B.cc("activate",(function(){B.sc(c);var b=a.$implicit;return B.gc().tabChange(b,"active")}))("deactivate",(function(){B.sc(c);var b=a.$implicit;return B.gc().tabChange(b,"inactive")})),B.zc(1,o,3,1,"ng-template",11),B.zc(2,d,7,1,"ng-template",12),B.Sb()}}function u(b,a){1&b&&B.Bc(0,"Summary")}function m(b,a){if(1&b&&B.Bc(0),2&b){var c=B.gc();B.Dc("Next last ID is ",c.id,".")}}var g,h=((g=function(){function b(){_classCallCheck(this,b),this.variant="scoped",this.id=0,this.selectedTab="sum",this.details=[]}return _createClass(b,[{key:"change",value:function(){this.variant="scoped"===this.variant?null:"scoped"}},{key:"addDetail",value:function(){this.details.push(this.id++)}},{key:"isDisabled",value:function(){return"sum"===this.selectedTab||"sum"===this.selectedTab.id}},{key:"tabChange",value:function(b,a){console.log("detail",b,a)}},{key:"removeDetail",value:function(b){this.details=this.details.filter((function(a){return a!==b})),this.selectedTab="sum"}}]),b}()).\u0275fac=function(b){return new(b||g)},g.\u0275cmp=B.Gb({type:g,selectors:[["app-demo-tabs-basic"]],decls:14,vars:5,consts:[[3,"selected","variant","selectedChange"],["ngl-tab","","label","Overview"],[3,"activate","deactivate",4,"ngFor","ngForOf"],["heading",""],["id","sum","ngl-tab","",3,"label"],["summaryTab","nglTab"],[1,"slds-m-top_large"],["type","button","nglButton","","variant","brand",3,"click"],["type","button","nglButton","",3,"click"],["type","button","nglButton","",3,"disabled","click"],[3,"activate","deactivate"],["ngl-tab-label",""],["ngl-tab-content",""],["type","button","nglButton","","variant","destructive",3,"click"]],template:function(b,a){if(1&b){var c=B.Vb();B.Tb(0,"ngl-tabset",0),B.cc("selectedChange",(function(b){return a.selectedTab=b})),B.zc(1,l,1,1,"ng-template",1),B.zc(2,r,3,0,"ngl-tab",2),B.zc(3,u,1,0,"ng-template",null,3,B.Ac),B.zc(5,m,1,1,"ng-template",4,5,B.Ac),B.Sb(),B.Tb(7,"div",6),B.Tb(8,"button",7),B.cc("click",(function(){return a.addDetail()})),B.Bc(9,"Add Detail"),B.Sb(),B.Tb(10,"button",8),B.cc("click",(function(){return a.change()})),B.Bc(11,"Toggle scope"),B.Sb(),B.Tb(12,"button",9),B.cc("click",(function(){B.sc(c);var b=B.rc(6);return a.selectedTab=b})),B.Bc(13,"Show Summary"),B.Sb(),B.Sb()}if(2&b){var n=B.rc(4);B.mc("selected",a.selectedTab)("variant",a.variant),B.Bb(2),B.mc("ngForOf",a.details),B.Bb(3),B.mc("label",n),B.Bb(7),B.mc("disabled",a.isDisabled())}},directives:[T.a,p.a,n.t,S.a,i.c,i.b,i.a],encapsulation:2}),g),v=c("M6rV");function f(b,a){1&b&&(B.Bc(0,"\n      "),B.Tb(1,"pre",20),B.Nb(),B.Tb(2,"code"),B.Tb(3,"span",21),B.Tb(4,"span",21),B.Tb(5,"span",22),B.Bc(6,"<"),B.Sb(),B.Bc(7,"ngl-tabset"),B.Sb(),B.Bc(8," "),B.Tb(9,"span",23),B.Bc(10,"[(selected)]"),B.Sb(),B.Tb(11,"span",24),B.Tb(12,"span",25),B.Bc(13,"="),B.Sb(),B.Tb(14,"span",22),B.Bc(15,'"'),B.Sb(),B.Bc(16,"selectedTab"),B.Tb(17,"span",22),B.Bc(18,'"'),B.Sb(),B.Sb(),B.Bc(19," "),B.Tb(20,"span",23),B.Bc(21,"[variant]"),B.Sb(),B.Tb(22,"span",24),B.Tb(23,"span",25),B.Bc(24,"="),B.Sb(),B.Tb(25,"span",22),B.Bc(26,'"'),B.Sb(),B.Bc(27,"variant"),B.Tb(28,"span",22),B.Bc(29,'"'),B.Sb(),B.Sb(),B.Tb(30,"span",22),B.Bc(31,">"),B.Sb(),B.Sb(),B.Bc(32,"\n  "),B.Tb(33,"span",21),B.Tb(34,"span",21),B.Tb(35,"span",22),B.Bc(36,"<"),B.Sb(),B.Bc(37,"ng-template"),B.Sb(),B.Bc(38," "),B.Tb(39,"span",23),B.Bc(40,"ngl-tab"),B.Sb(),B.Bc(41," "),B.Tb(42,"span",23),B.Bc(43,"label"),B.Sb(),B.Tb(44,"span",24),B.Tb(45,"span",25),B.Bc(46,"="),B.Sb(),B.Tb(47,"span",22),B.Bc(48,'"'),B.Sb(),B.Bc(49,"Overview"),B.Tb(50,"span",22),B.Bc(51,'"'),B.Sb(),B.Sb(),B.Tb(52,"span",22),B.Bc(53,">"),B.Sb(),B.Sb(),B.Bc(54,"You have {{details.length}} details."),B.Tb(55,"span",21),B.Tb(56,"span",21),B.Tb(57,"span",22),B.Bc(58,"</"),B.Sb(),B.Bc(59,"ng-template"),B.Sb(),B.Tb(60,"span",22),B.Bc(61,">"),B.Sb(),B.Sb(),B.Bc(62,"\n  "),B.Tb(63,"span",21),B.Tb(64,"span",21),B.Tb(65,"span",22),B.Bc(66,"<"),B.Sb(),B.Bc(67,"ngl-tab"),B.Sb(),B.Bc(68," "),B.Tb(69,"span",23),B.Bc(70,"*ngFor"),B.Sb(),B.Tb(71,"span",24),B.Tb(72,"span",25),B.Bc(73,"="),B.Sb(),B.Tb(74,"span",22),B.Bc(75,'"'),B.Sb(),B.Bc(76,"let detail of details"),B.Tb(77,"span",22),B.Bc(78,'"'),B.Sb(),B.Sb(),B.Bc(79," "),B.Tb(80,"span",23),B.Bc(81,"(activate)"),B.Sb(),B.Tb(82,"span",24),B.Tb(83,"span",25),B.Bc(84,"="),B.Sb(),B.Tb(85,"span",22),B.Bc(86,'"'),B.Sb(),B.Bc(87,"tabChange(detail, "),B.Tb(88,"span",22),B.Bc(89,"'"),B.Sb(),B.Bc(90,"active"),B.Tb(91,"span",22),B.Bc(92,"'"),B.Sb(),B.Bc(93,")"),B.Tb(94,"span",22),B.Bc(95,'"'),B.Sb(),B.Sb(),B.Bc(96," "),B.Tb(97,"span",23),B.Bc(98,"(deactivate)"),B.Sb(),B.Tb(99,"span",24),B.Tb(100,"span",25),B.Bc(101,"="),B.Sb(),B.Tb(102,"span",22),B.Bc(103,'"'),B.Sb(),B.Bc(104,"tabChange(detail, "),B.Tb(105,"span",22),B.Bc(106,"'"),B.Sb(),B.Bc(107,"inactive"),B.Tb(108,"span",22),B.Bc(109,"'"),B.Sb(),B.Bc(110,")"),B.Tb(111,"span",22),B.Bc(112,'"'),B.Sb(),B.Sb(),B.Tb(113,"span",22),B.Bc(114,">"),B.Sb(),B.Sb(),B.Bc(115,"\n    "),B.Tb(116,"span",21),B.Tb(117,"span",21),B.Tb(118,"span",22),B.Bc(119,"<"),B.Sb(),B.Bc(120,"ng-template"),B.Sb(),B.Bc(121," "),B.Tb(122,"span",23),B.Bc(123,"ngl-tab-label"),B.Sb(),B.Tb(124,"span",22),B.Bc(125,">"),B.Sb(),B.Sb(),B.Bc(126,"Detail "),B.Tb(127,"span",21),B.Tb(128,"span",21),B.Tb(129,"span",22),B.Bc(130,"<"),B.Sb(),B.Bc(131,"i"),B.Sb(),B.Tb(132,"span",22),B.Bc(133,">"),B.Sb(),B.Sb(),B.Bc(134,"{{ detail }}"),B.Tb(135,"span",21),B.Tb(136,"span",21),B.Tb(137,"span",22),B.Bc(138,"</"),B.Sb(),B.Bc(139,"i"),B.Sb(),B.Tb(140,"span",22),B.Bc(141,">"),B.Sb(),B.Sb(),B.Tb(142,"span",21),B.Tb(143,"span",21),B.Tb(144,"span",22),B.Bc(145,"</"),B.Sb(),B.Bc(146,"ng-template"),B.Sb(),B.Tb(147,"span",22),B.Bc(148,">"),B.Sb(),B.Sb(),B.Bc(149,"\n    "),B.Tb(150,"span",21),B.Tb(151,"span",21),B.Tb(152,"span",22),B.Bc(153,"<"),B.Sb(),B.Bc(154,"ng-template"),B.Sb(),B.Bc(155," "),B.Tb(156,"span",23),B.Bc(157,"ngl-tab-content"),B.Sb(),B.Tb(158,"span",22),B.Bc(159,">"),B.Sb(),B.Sb(),B.Bc(160,"\n      "),B.Tb(161,"span",21),B.Tb(162,"span",21),B.Tb(163,"span",22),B.Bc(164,"<"),B.Sb(),B.Bc(165,"p"),B.Sb(),B.Tb(166,"span",22),B.Bc(167,">"),B.Sb(),B.Sb(),B.Bc(168,"Some detail text for "),B.Tb(169,"span",21),B.Tb(170,"span",21),B.Tb(171,"span",22),B.Bc(172,"<"),B.Sb(),B.Bc(173,"b"),B.Sb(),B.Tb(174,"span",22),B.Bc(175,">"),B.Sb(),B.Sb(),B.Bc(176,"{{detail}}"),B.Tb(177,"span",21),B.Tb(178,"span",21),B.Tb(179,"span",22),B.Bc(180,"</"),B.Sb(),B.Bc(181,"b"),B.Sb(),B.Tb(182,"span",22),B.Bc(183,">"),B.Sb(),B.Sb(),B.Bc(184,"."),B.Tb(185,"span",21),B.Tb(186,"span",21),B.Tb(187,"span",22),B.Bc(188,"</"),B.Sb(),B.Bc(189,"p"),B.Sb(),B.Tb(190,"span",22),B.Bc(191,">"),B.Sb(),B.Sb(),B.Bc(192,"\n      "),B.Tb(193,"span",21),B.Tb(194,"span",21),B.Tb(195,"span",22),B.Bc(196,"<"),B.Sb(),B.Bc(197,"button"),B.Sb(),B.Bc(198," "),B.Tb(199,"span",23),B.Bc(200,"type"),B.Sb(),B.Tb(201,"span",24),B.Tb(202,"span",25),B.Bc(203,"="),B.Sb(),B.Tb(204,"span",22),B.Bc(205,'"'),B.Sb(),B.Bc(206,"button"),B.Tb(207,"span",22),B.Bc(208,'"'),B.Sb(),B.Sb(),B.Bc(209," "),B.Tb(210,"span",23),B.Bc(211,"nglButton"),B.Sb(),B.Bc(212," "),B.Tb(213,"span",23),B.Bc(214,"variant"),B.Sb(),B.Tb(215,"span",24),B.Tb(216,"span",25),B.Bc(217,"="),B.Sb(),B.Tb(218,"span",22),B.Bc(219,'"'),B.Sb(),B.Bc(220,"destructive"),B.Tb(221,"span",22),B.Bc(222,'"'),B.Sb(),B.Sb(),B.Bc(223," "),B.Tb(224,"span",23),B.Bc(225,"(click)"),B.Sb(),B.Tb(226,"span",24),B.Tb(227,"span",25),B.Bc(228,"="),B.Sb(),B.Tb(229,"span",22),B.Bc(230,'"'),B.Sb(),B.Bc(231,"removeDetail(detail)"),B.Tb(232,"span",22),B.Bc(233,'"'),B.Sb(),B.Sb(),B.Tb(234,"span",22),B.Bc(235,">"),B.Sb(),B.Sb(),B.Bc(236,"Remove"),B.Tb(237,"span",21),B.Tb(238,"span",21),B.Tb(239,"span",22),B.Bc(240,"</"),B.Sb(),B.Bc(241,"button"),B.Sb(),B.Tb(242,"span",22),B.Bc(243,">"),B.Sb(),B.Sb(),B.Bc(244,"\n    "),B.Tb(245,"span",21),B.Tb(246,"span",21),B.Tb(247,"span",22),B.Bc(248,"</"),B.Sb(),B.Bc(249,"ng-template"),B.Sb(),B.Tb(250,"span",22),B.Bc(251,">"),B.Sb(),B.Sb(),B.Bc(252,"\n  "),B.Tb(253,"span",21),B.Tb(254,"span",21),B.Tb(255,"span",22),B.Bc(256,"</"),B.Sb(),B.Bc(257,"ngl-tab"),B.Sb(),B.Tb(258,"span",22),B.Bc(259,">"),B.Sb(),B.Sb(),B.Bc(260,"\n  "),B.Tb(261,"span",21),B.Tb(262,"span",21),B.Tb(263,"span",22),B.Bc(264,"<"),B.Sb(),B.Bc(265,"ng-template"),B.Sb(),B.Bc(266," "),B.Tb(267,"span",23),B.Bc(268,"#heading"),B.Sb(),B.Tb(269,"span",22),B.Bc(270,">"),B.Sb(),B.Sb(),B.Bc(271,"Summary"),B.Tb(272,"span",21),B.Tb(273,"span",21),B.Tb(274,"span",22),B.Bc(275,"</"),B.Sb(),B.Bc(276,"ng-template"),B.Sb(),B.Tb(277,"span",22),B.Bc(278,">"),B.Sb(),B.Sb(),B.Bc(279,"\n  "),B.Tb(280,"span",21),B.Tb(281,"span",21),B.Tb(282,"span",22),B.Bc(283,"<"),B.Sb(),B.Bc(284,"ng-template"),B.Sb(),B.Bc(285," "),B.Tb(286,"span",23),B.Bc(287,"id"),B.Sb(),B.Tb(288,"span",24),B.Tb(289,"span",25),B.Bc(290,"="),B.Sb(),B.Tb(291,"span",22),B.Bc(292,'"'),B.Sb(),B.Bc(293,"sum"),B.Tb(294,"span",22),B.Bc(295,'"'),B.Sb(),B.Sb(),B.Bc(296," "),B.Tb(297,"span",23),B.Bc(298,"ngl-tab"),B.Sb(),B.Bc(299," "),B.Tb(300,"span",23),B.Bc(301,"#summaryTab"),B.Sb(),B.Tb(302,"span",24),B.Tb(303,"span",25),B.Bc(304,"="),B.Sb(),B.Tb(305,"span",22),B.Bc(306,'"'),B.Sb(),B.Bc(307,"nglTab"),B.Tb(308,"span",22),B.Bc(309,'"'),B.Sb(),B.Sb(),B.Bc(310," "),B.Tb(311,"span",23),B.Bc(312,"[label]"),B.Sb(),B.Tb(313,"span",24),B.Tb(314,"span",25),B.Bc(315,"="),B.Sb(),B.Tb(316,"span",22),B.Bc(317,'"'),B.Sb(),B.Bc(318,"heading"),B.Tb(319,"span",22),B.Bc(320,'"'),B.Sb(),B.Sb(),B.Tb(321,"span",22),B.Bc(322,">"),B.Sb(),B.Sb(),B.Bc(323,"Next last ID is {{id}}."),B.Tb(324,"span",21),B.Tb(325,"span",21),B.Tb(326,"span",22),B.Bc(327,"</"),B.Sb(),B.Bc(328,"ng-template"),B.Sb(),B.Tb(329,"span",22),B.Bc(330,">"),B.Sb(),B.Sb(),B.Bc(331,"\n"),B.Tb(332,"span",21),B.Tb(333,"span",21),B.Tb(334,"span",22),B.Bc(335,"</"),B.Sb(),B.Bc(336,"ngl-tabset"),B.Sb(),B.Tb(337,"span",22),B.Bc(338,">"),B.Sb(),B.Sb(),B.Bc(339,"\n"),B.Tb(340,"span",21),B.Tb(341,"span",21),B.Tb(342,"span",22),B.Bc(343,"<"),B.Sb(),B.Bc(344,"div"),B.Sb(),B.Bc(345," "),B.Tb(346,"span",23),B.Bc(347,"class"),B.Sb(),B.Tb(348,"span",24),B.Tb(349,"span",25),B.Bc(350,"="),B.Sb(),B.Tb(351,"span",22),B.Bc(352,'"'),B.Sb(),B.Bc(353,"slds-m-top_large"),B.Tb(354,"span",22),B.Bc(355,'"'),B.Sb(),B.Sb(),B.Tb(356,"span",22),B.Bc(357,">"),B.Sb(),B.Sb(),B.Bc(358,"\n  "),B.Tb(359,"span",21),B.Tb(360,"span",21),B.Tb(361,"span",22),B.Bc(362,"<"),B.Sb(),B.Bc(363,"button"),B.Sb(),B.Bc(364," "),B.Tb(365,"span",23),B.Bc(366,"type"),B.Sb(),B.Tb(367,"span",24),B.Tb(368,"span",25),B.Bc(369,"="),B.Sb(),B.Tb(370,"span",22),B.Bc(371,'"'),B.Sb(),B.Bc(372,"button"),B.Tb(373,"span",22),B.Bc(374,'"'),B.Sb(),B.Sb(),B.Bc(375," "),B.Tb(376,"span",23),B.Bc(377,"nglButton"),B.Sb(),B.Bc(378," "),B.Tb(379,"span",23),B.Bc(380,"variant"),B.Sb(),B.Tb(381,"span",24),B.Tb(382,"span",25),B.Bc(383,"="),B.Sb(),B.Tb(384,"span",22),B.Bc(385,'"'),B.Sb(),B.Bc(386,"brand"),B.Tb(387,"span",22),B.Bc(388,'"'),B.Sb(),B.Sb(),B.Bc(389," "),B.Tb(390,"span",23),B.Bc(391,"(click)"),B.Sb(),B.Tb(392,"span",24),B.Tb(393,"span",25),B.Bc(394,"="),B.Sb(),B.Tb(395,"span",22),B.Bc(396,'"'),B.Sb(),B.Bc(397,"addDetail()"),B.Tb(398,"span",22),B.Bc(399,'"'),B.Sb(),B.Sb(),B.Tb(400,"span",22),B.Bc(401,">"),B.Sb(),B.Sb(),B.Bc(402,"Add Detail"),B.Tb(403,"span",21),B.Tb(404,"span",21),B.Tb(405,"span",22),B.Bc(406,"</"),B.Sb(),B.Bc(407,"button"),B.Sb(),B.Tb(408,"span",22),B.Bc(409,">"),B.Sb(),B.Sb(),B.Bc(410,"\n  "),B.Tb(411,"span",21),B.Tb(412,"span",21),B.Tb(413,"span",22),B.Bc(414,"<"),B.Sb(),B.Bc(415,"button"),B.Sb(),B.Bc(416," "),B.Tb(417,"span",23),B.Bc(418,"type"),B.Sb(),B.Tb(419,"span",24),B.Tb(420,"span",25),B.Bc(421,"="),B.Sb(),B.Tb(422,"span",22),B.Bc(423,'"'),B.Sb(),B.Bc(424,"button"),B.Tb(425,"span",22),B.Bc(426,'"'),B.Sb(),B.Sb(),B.Bc(427," "),B.Tb(428,"span",23),B.Bc(429,"nglButton"),B.Sb(),B.Bc(430," "),B.Tb(431,"span",23),B.Bc(432,"(click)"),B.Sb(),B.Tb(433,"span",24),B.Tb(434,"span",25),B.Bc(435,"="),B.Sb(),B.Tb(436,"span",22),B.Bc(437,'"'),B.Sb(),B.Bc(438,"change()"),B.Tb(439,"span",22),B.Bc(440,'"'),B.Sb(),B.Sb(),B.Tb(441,"span",22),B.Bc(442,">"),B.Sb(),B.Sb(),B.Bc(443,"Toggle scope"),B.Tb(444,"span",21),B.Tb(445,"span",21),B.Tb(446,"span",22),B.Bc(447,"</"),B.Sb(),B.Bc(448,"button"),B.Sb(),B.Tb(449,"span",22),B.Bc(450,">"),B.Sb(),B.Sb(),B.Bc(451,"\n  "),B.Tb(452,"span",21),B.Tb(453,"span",21),B.Tb(454,"span",22),B.Bc(455,"<"),B.Sb(),B.Bc(456,"button"),B.Sb(),B.Bc(457," "),B.Tb(458,"span",23),B.Bc(459,"type"),B.Sb(),B.Tb(460,"span",24),B.Tb(461,"span",25),B.Bc(462,"="),B.Sb(),B.Tb(463,"span",22),B.Bc(464,'"'),B.Sb(),B.Bc(465,"button"),B.Tb(466,"span",22),B.Bc(467,'"'),B.Sb(),B.Sb(),B.Bc(468," "),B.Tb(469,"span",23),B.Bc(470,"nglButton"),B.Sb(),B.Bc(471," "),B.Tb(472,"span",23),B.Bc(473,"(click)"),B.Sb(),B.Tb(474,"span",24),B.Tb(475,"span",25),B.Bc(476,"="),B.Sb(),B.Tb(477,"span",22),B.Bc(478,'"'),B.Sb(),B.Bc(479,"selectedTab = summaryTab"),B.Tb(480,"span",22),B.Bc(481,'"'),B.Sb(),B.Sb(),B.Bc(482," "),B.Tb(483,"span",23),B.Bc(484,"[disabled]"),B.Sb(),B.Tb(485,"span",24),B.Tb(486,"span",25),B.Bc(487,"="),B.Sb(),B.Tb(488,"span",22),B.Bc(489,'"'),B.Sb(),B.Bc(490,"isDisabled()"),B.Tb(491,"span",22),B.Bc(492,'"'),B.Sb(),B.Sb(),B.Tb(493,"span",22),B.Bc(494,">"),B.Sb(),B.Sb(),B.Bc(495,"Show Summary"),B.Tb(496,"span",21),B.Tb(497,"span",21),B.Tb(498,"span",22),B.Bc(499,"</"),B.Sb(),B.Bc(500,"button"),B.Sb(),B.Tb(501,"span",22),B.Bc(502,">"),B.Sb(),B.Sb(),B.Bc(503,"\n"),B.Tb(504,"span",21),B.Tb(505,"span",21),B.Tb(506,"span",22),B.Bc(507,"</"),B.Sb(),B.Bc(508,"div"),B.Sb(),B.Tb(509,"span",22),B.Bc(510,">"),B.Sb(),B.Sb(),B.Sb(),B.Ub(),B.Sb(),B.Bc(511,"\n    "))}function D(b,a){1&b&&(B.Bc(0,"\n      "),B.Tb(1,"pre",26),B.Tb(2,"code"),B.Tb(3,"span",27),B.Bc(4,"import"),B.Sb(),B.Bc(5," "),B.Tb(6,"span",22),B.Bc(7),B.Sb(),B.Bc(8," Component "),B.Tb(9,"span",22),B.Bc(10),B.Sb(),B.Bc(11," "),B.Tb(12,"span",27),B.Bc(13,"from"),B.Sb(),B.Bc(14," "),B.Tb(15,"span",28),B.Bc(16,"'@angular/core'"),B.Sb(),B.Tb(17,"span",22),B.Bc(18,";"),B.Sb(),B.Bc(19,"\n\n@"),B.Tb(20,"span",29),B.Bc(21,"Component"),B.Sb(),B.Tb(22,"span",22),B.Bc(23,"("),B.Sb(),B.Tb(24,"span",22),B.Bc(25),B.Sb(),B.Bc(26,"\n  selector"),B.Tb(27,"span",30),B.Bc(28,":"),B.Sb(),B.Bc(29," "),B.Tb(30,"span",28),B.Bc(31,"'app-demo-tabs-basic'"),B.Sb(),B.Tb(32,"span",22),B.Bc(33,","),B.Sb(),B.Bc(34,"\n  templateUrl"),B.Tb(35,"span",30),B.Bc(36,":"),B.Sb(),B.Bc(37," "),B.Tb(38,"span",28),B.Bc(39,"'./basic.html'"),B.Sb(),B.Tb(40,"span",22),B.Bc(41,","),B.Sb(),B.Bc(42,"\n"),B.Tb(43,"span",22),B.Bc(44),B.Sb(),B.Tb(45,"span",22),B.Bc(46,")"),B.Sb(),B.Bc(47,"\n"),B.Tb(48,"span",27),B.Bc(49,"export"),B.Sb(),B.Bc(50," "),B.Tb(51,"span",27),B.Bc(52,"class"),B.Sb(),B.Bc(53," "),B.Tb(54,"span",31),B.Bc(55,"DemoTabsBasic"),B.Sb(),B.Bc(56," "),B.Tb(57,"span",22),B.Bc(58),B.Sb(),B.Bc(59,"\n\n  variant "),B.Tb(60,"span",30),B.Bc(61,"="),B.Sb(),B.Bc(62," "),B.Tb(63,"span",28),B.Bc(64,"'scoped'"),B.Sb(),B.Tb(65,"span",22),B.Bc(66,";"),B.Sb(),B.Bc(67,"\n  id "),B.Tb(68,"span",30),B.Bc(69,"="),B.Sb(),B.Bc(70," "),B.Tb(71,"span",32),B.Bc(72,"0"),B.Sb(),B.Tb(73,"span",22),B.Bc(74,";"),B.Sb(),B.Bc(75,"\n  selectedTab"),B.Tb(76,"span",30),B.Bc(77,":"),B.Sb(),B.Bc(78," "),B.Tb(79,"span",33),B.Bc(80,"any"),B.Sb(),B.Bc(81," "),B.Tb(82,"span",30),B.Bc(83,"="),B.Sb(),B.Bc(84," "),B.Tb(85,"span",28),B.Bc(86,"'sum'"),B.Sb(),B.Tb(87,"span",22),B.Bc(88,";"),B.Sb(),B.Bc(89,"\n  details"),B.Tb(90,"span",30),B.Bc(91,":"),B.Sb(),B.Bc(92," "),B.Tb(93,"span",33),B.Bc(94,"number"),B.Sb(),B.Tb(95,"span",22),B.Bc(96,"["),B.Sb(),B.Tb(97,"span",22),B.Bc(98,"]"),B.Sb(),B.Bc(99," "),B.Tb(100,"span",30),B.Bc(101,"="),B.Sb(),B.Bc(102," "),B.Tb(103,"span",22),B.Bc(104,"["),B.Sb(),B.Tb(105,"span",22),B.Bc(106,"]"),B.Sb(),B.Tb(107,"span",22),B.Bc(108,";"),B.Sb(),B.Bc(109,"\n\n  "),B.Tb(110,"span",29),B.Bc(111,"change"),B.Sb(),B.Tb(112,"span",22),B.Bc(113,"("),B.Sb(),B.Tb(114,"span",22),B.Bc(115,")"),B.Sb(),B.Bc(116," "),B.Tb(117,"span",22),B.Bc(118),B.Sb(),B.Bc(119,"\n    "),B.Tb(120,"span",27),B.Bc(121,"this"),B.Sb(),B.Tb(122,"span",22),B.Bc(123,"."),B.Sb(),B.Bc(124,"variant "),B.Tb(125,"span",30),B.Bc(126,"="),B.Sb(),B.Bc(127," "),B.Tb(128,"span",27),B.Bc(129,"this"),B.Sb(),B.Tb(130,"span",22),B.Bc(131,"."),B.Sb(),B.Bc(132,"variant "),B.Tb(133,"span",30),B.Bc(134,"==="),B.Sb(),B.Bc(135," "),B.Tb(136,"span",28),B.Bc(137,"'scoped'"),B.Sb(),B.Bc(138," "),B.Tb(139,"span",30),B.Bc(140,"?"),B.Sb(),B.Bc(141," "),B.Tb(142,"span",27),B.Bc(143,"null"),B.Sb(),B.Bc(144," "),B.Tb(145,"span",30),B.Bc(146,":"),B.Sb(),B.Bc(147," "),B.Tb(148,"span",28),B.Bc(149,"'scoped'"),B.Sb(),B.Tb(150,"span",22),B.Bc(151,";"),B.Sb(),B.Bc(152,"\n  "),B.Tb(153,"span",22),B.Bc(154),B.Sb(),B.Bc(155,"\n\n  "),B.Tb(156,"span",29),B.Bc(157,"addDetail"),B.Sb(),B.Tb(158,"span",22),B.Bc(159,"("),B.Sb(),B.Tb(160,"span",22),B.Bc(161,")"),B.Sb(),B.Bc(162," "),B.Tb(163,"span",22),B.Bc(164),B.Sb(),B.Bc(165,"\n    "),B.Tb(166,"span",27),B.Bc(167,"this"),B.Sb(),B.Tb(168,"span",22),B.Bc(169,"."),B.Sb(),B.Bc(170,"details"),B.Tb(171,"span",22),B.Bc(172,"."),B.Sb(),B.Tb(173,"span",29),B.Bc(174,"push"),B.Sb(),B.Tb(175,"span",22),B.Bc(176,"("),B.Sb(),B.Tb(177,"span",27),B.Bc(178,"this"),B.Sb(),B.Tb(179,"span",22),B.Bc(180,"."),B.Sb(),B.Bc(181,"id"),B.Tb(182,"span",30),B.Bc(183,"++"),B.Sb(),B.Tb(184,"span",22),B.Bc(185,")"),B.Sb(),B.Tb(186,"span",22),B.Bc(187,";"),B.Sb(),B.Bc(188,"\n  "),B.Tb(189,"span",22),B.Bc(190),B.Sb(),B.Bc(191,"\n\n  "),B.Tb(192,"span",29),B.Bc(193,"isDisabled"),B.Sb(),B.Tb(194,"span",22),B.Bc(195,"("),B.Sb(),B.Tb(196,"span",22),B.Bc(197,")"),B.Sb(),B.Bc(198," "),B.Tb(199,"span",22),B.Bc(200),B.Sb(),B.Bc(201,"\n    "),B.Tb(202,"span",27),B.Bc(203,"return"),B.Sb(),B.Bc(204," "),B.Tb(205,"span",27),B.Bc(206,"this"),B.Sb(),B.Tb(207,"span",22),B.Bc(208,"."),B.Sb(),B.Bc(209,"selectedTab "),B.Tb(210,"span",30),B.Bc(211,"==="),B.Sb(),B.Bc(212," "),B.Tb(213,"span",28),B.Bc(214,"'sum'"),B.Sb(),B.Bc(215," "),B.Tb(216,"span",30),B.Bc(217,"||"),B.Sb(),B.Bc(218," "),B.Tb(219,"span",27),B.Bc(220,"this"),B.Sb(),B.Tb(221,"span",22),B.Bc(222,"."),B.Sb(),B.Bc(223,"selectedTab"),B.Tb(224,"span",22),B.Bc(225,"."),B.Sb(),B.Bc(226,"id "),B.Tb(227,"span",30),B.Bc(228,"==="),B.Sb(),B.Bc(229," "),B.Tb(230,"span",28),B.Bc(231,"'sum'"),B.Sb(),B.Tb(232,"span",22),B.Bc(233,";"),B.Sb(),B.Bc(234,"\n  "),B.Tb(235,"span",22),B.Bc(236),B.Sb(),B.Bc(237,"\n\n  "),B.Tb(238,"span",27),B.Bc(239,"protected"),B.Sb(),B.Bc(240," "),B.Tb(241,"span",29),B.Bc(242,"tabChange"),B.Sb(),B.Tb(243,"span",22),B.Bc(244,"("),B.Sb(),B.Bc(245,"detail"),B.Tb(246,"span",30),B.Bc(247,":"),B.Sb(),B.Bc(248," "),B.Tb(249,"span",33),B.Bc(250,"number"),B.Sb(),B.Tb(251,"span",22),B.Bc(252,","),B.Sb(),B.Bc(253," event"),B.Tb(254,"span",30),B.Bc(255,":"),B.Sb(),B.Bc(256," "),B.Tb(257,"span",33),B.Bc(258,"string"),B.Sb(),B.Tb(259,"span",22),B.Bc(260,")"),B.Sb(),B.Bc(261," "),B.Tb(262,"span",22),B.Bc(263),B.Sb(),B.Bc(264,"\n    "),B.Tb(265,"span",33),B.Bc(266,"console"),B.Sb(),B.Tb(267,"span",22),B.Bc(268,"."),B.Sb(),B.Tb(269,"span",29),B.Bc(270,"log"),B.Sb(),B.Tb(271,"span",22),B.Bc(272,"("),B.Sb(),B.Tb(273,"span",28),B.Bc(274,"'detail'"),B.Sb(),B.Tb(275,"span",22),B.Bc(276,","),B.Sb(),B.Bc(277," detail"),B.Tb(278,"span",22),B.Bc(279,","),B.Sb(),B.Bc(280," event"),B.Tb(281,"span",22),B.Bc(282,")"),B.Sb(),B.Tb(283,"span",22),B.Bc(284,";"),B.Sb(),B.Bc(285,"\n  "),B.Tb(286,"span",22),B.Bc(287),B.Sb(),B.Bc(288,"\n\n  "),B.Tb(289,"span",27),B.Bc(290,"protected"),B.Sb(),B.Bc(291," "),B.Tb(292,"span",29),B.Bc(293,"removeDetail"),B.Sb(),B.Tb(294,"span",22),B.Bc(295,"("),B.Sb(),B.Bc(296,"detail"),B.Tb(297,"span",30),B.Bc(298,":"),B.Sb(),B.Bc(299," Object"),B.Tb(300,"span",22),B.Bc(301,")"),B.Sb(),B.Bc(302," "),B.Tb(303,"span",22),B.Bc(304),B.Sb(),B.Bc(305,"\n    "),B.Tb(306,"span",27),B.Bc(307,"this"),B.Sb(),B.Tb(308,"span",22),B.Bc(309,"."),B.Sb(),B.Bc(310,"details "),B.Tb(311,"span",30),B.Bc(312,"="),B.Sb(),B.Bc(313," "),B.Tb(314,"span",27),B.Bc(315,"this"),B.Sb(),B.Tb(316,"span",22),B.Bc(317,"."),B.Sb(),B.Bc(318,"details"),B.Tb(319,"span",22),B.Bc(320,"."),B.Sb(),B.Tb(321,"span",29),B.Bc(322,"filter"),B.Sb(),B.Tb(323,"span",22),B.Bc(324,"("),B.Sb(),B.Tb(325,"span",22),B.Bc(326,"("),B.Sb(),B.Bc(327,"d"),B.Tb(328,"span",22),B.Bc(329,")"),B.Sb(),B.Bc(330," "),B.Tb(331,"span",30),B.Bc(332,"=>"),B.Sb(),B.Bc(333," d "),B.Tb(334,"span",30),B.Bc(335,"!=="),B.Sb(),B.Bc(336," detail"),B.Tb(337,"span",22),B.Bc(338,")"),B.Sb(),B.Tb(339,"span",22),B.Bc(340,";"),B.Sb(),B.Bc(341,"\n    "),B.Tb(342,"span",27),B.Bc(343,"this"),B.Sb(),B.Tb(344,"span",22),B.Bc(345,"."),B.Sb(),B.Bc(346,"selectedTab "),B.Tb(347,"span",30),B.Bc(348,"="),B.Sb(),B.Bc(349," "),B.Tb(350,"span",28),B.Bc(351,"'sum'"),B.Sb(),B.Tb(352,"span",22),B.Bc(353,";"),B.Sb(),B.Bc(354,"\n  "),B.Tb(355,"span",22),B.Bc(356),B.Sb(),B.Bc(357,"\n"),B.Tb(358,"span",22),B.Bc(359),B.Sb(),B.Bc(360,"\n"),B.Sb(),B.Sb(),B.Bc(361,"\n    ")),2&b&&(B.Bb(7),B.Cc("{"),B.Bb(3),B.Cc("}"),B.Bb(15),B.Cc("{"),B.Bb(19),B.Cc("}"),B.Bb(14),B.Cc("{"),B.Bb(60),B.Cc("{"),B.Bb(36),B.Cc("}"),B.Bb(10),B.Cc("{"),B.Bb(26),B.Cc("}"),B.Bb(10),B.Cc("{"),B.Bb(36),B.Cc("}"),B.Bb(27),B.Cc("{"),B.Bb(24),B.Cc("}"),B.Bb(17),B.Cc("{"),B.Bb(52),B.Cc("}"),B.Bb(3),B.Cc("}"))}var C,y,A=[{path:"",component:(C=function b(){_classCallCheck(this,b)},C.\u0275fac=function(b){return new(b||C)},C.\u0275cmp=B.Gb({type:C,selectors:[["app-demo-tabs"]],decls:226,vars:2,consts:[[1,"component__header","slds-border_bottom","slds-grid","slds-wrap","slds-m-bottom_medium"],[1,"slds-has-flexi-truncate","slds-align-middle"],[2,"text-transform","capitalize"],[1,"slds-align-middle","slds-text-body_small"],["href","https://www.lightningdesignsystem.com/components/tabs","title","External link to Salesforce Lightning Design System Site","target","_blank",1,"slds-button","slds-button_neutral"],["href","https://github.com/ng-lightning/ng-lightning/tree/master/projects/ng-lightning/src/lib/tabs","target","_blank",1,"slds-button","slds-button_neutral"],[1,"slds-grid","slds-grid_vertical-align-center"],["src","assets/images/github.svg",2,"height","15px","width","15px","margin-right","0.5rem"],[1,"slds-m-vertical_medium","readme"],[1,"slds-m-vertical_medium"],[1,"callout"],[1,"slds-box","slds-is-relative","slds-theme_default","slds-m-bottom_large",2,"padding-top","1.5rem"],[1,"example__header","slds-text-heading_small"],["markupbasic",""],["tsbasic",""],[1,"slds-is-relative","slds-m-top_large",2,"min-height","25px"],["dir","tabs","file","basic","tsRaw","import%20%7B%20Component%20%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-demo-tabs-basic'%2C%0A%20%20templateUrl%3A%20'.%2Fbasic.html'%2C%0A%7D)%0Aexport%20class%20DemoTabsBasic%20%7B%0A%0A%20%20variant%20%3D%20'scoped'%3B%0A%20%20id%20%3D%200%3B%0A%20%20selectedTab%3A%20any%20%3D%20'sum'%3B%0A%20%20details%3A%20number%5B%5D%20%3D%20%5B%5D%3B%0A%0A%20%20change()%20%7B%0A%20%20%20%20this.variant%20%3D%20this.variant%20%3D%3D%3D%20'scoped'%20%3F%20null%20%3A%20'scoped'%3B%0A%20%20%7D%0A%0A%20%20addDetail()%20%7B%0A%20%20%20%20this.details.push(this.id%2B%2B)%3B%0A%20%20%7D%0A%0A%20%20isDisabled()%20%7B%0A%20%20%20%20return%20this.selectedTab%20%3D%3D%3D%20'sum'%20%7C%7C%20this.selectedTab.id%20%3D%3D%3D%20'sum'%3B%0A%20%20%7D%0A%0A%20%20protected%20tabChange(detail%3A%20number%2C%20event%3A%20string)%20%7B%0A%20%20%20%20console.log('detail'%2C%20detail%2C%20event)%3B%0A%20%20%7D%0A%0A%20%20protected%20removeDetail(detail%3A%20Object)%20%7B%0A%20%20%20%20this.details%20%3D%20this.details.filter((d)%20%3D%3E%20d%20!%3D%3D%20detail)%3B%0A%20%20%20%20this.selectedTab%20%3D%20'sum'%3B%0A%20%20%7D%0A%7D%0A","markupRaw","%0A%3Cngl-tabset%20%5B(selected)%5D%3D%22selectedTab%22%20%5Bvariant%5D%3D%22variant%22%3E%0A%20%20%3Cng-template%20ngl-tab%20label%3D%22Overview%22%3EYou%20have%20%7B%7Bdetails.length%7D%7D%20details.%3C%2Fng-template%3E%0A%20%20%3Cngl-tab%20*ngFor%3D%22let%20detail%20of%20details%22%20(activate)%3D%22tabChange(detail%2C%20'active')%22%20(deactivate)%3D%22tabChange(detail%2C%20'inactive')%22%3E%0A%20%20%20%20%3Cng-template%20ngl-tab-label%3EDetail%20%3Ci%3E%7B%7B%20detail%20%7D%7D%3C%2Fi%3E%3C%2Fng-template%3E%0A%20%20%20%20%3Cng-template%20ngl-tab-content%3E%0A%20%20%20%20%20%20%3Cp%3ESome%20detail%20text%20for%20%3Cb%3E%7B%7Bdetail%7D%7D%3C%2Fb%3E.%3C%2Fp%3E%0A%20%20%20%20%20%20%3Cbutton%20type%3D%22button%22%20nglButton%20variant%3D%22destructive%22%20(click)%3D%22removeDetail(detail)%22%3ERemove%3C%2Fbutton%3E%0A%20%20%20%20%3C%2Fng-template%3E%0A%20%20%3C%2Fngl-tab%3E%0A%20%20%3Cng-template%20%23heading%3ESummary%3C%2Fng-template%3E%0A%20%20%3Cng-template%20id%3D%22sum%22%20ngl-tab%20%23summaryTab%3D%22nglTab%22%20%5Blabel%5D%3D%22heading%22%3ENext%20last%20ID%20is%20%7B%7Bid%7D%7D.%3C%2Fng-template%3E%0A%3C%2Fngl-tabset%3E%0A%3Cdiv%20class%3D%22slds-m-top_large%22%3E%0A%20%20%3Cbutton%20type%3D%22button%22%20nglButton%20variant%3D%22brand%22%20(click)%3D%22addDetail()%22%3EAdd%20Detail%3C%2Fbutton%3E%0A%20%20%3Cbutton%20type%3D%22button%22%20nglButton%20(click)%3D%22change()%22%3EToggle%20scope%3C%2Fbutton%3E%0A%20%20%3Cbutton%20type%3D%22button%22%20nglButton%20(click)%3D%22selectedTab%20%3D%20summaryTab%22%20%5Bdisabled%5D%3D%22isDisabled()%22%3EShow%20Summary%3C%2Fbutton%3E%0A%3C%2Fdiv%3E",3,"ts","markup"],[1,"slds-box","slds-theme_default"],[1,"api"],["href","https://www.lightningdesignsystem.com/components/tabs#scoped"],[1,"language-markup"],[1,"token","tag"],[1,"token","punctuation"],[1,"token","attr-name"],[1,"token","attr-value"],[1,"token","punctuation","attr-equals"],[1,"language-typescript"],[1,"token","keyword"],[1,"token","string"],[1,"token","function"],[1,"token","operator"],[1,"token","class-name"],[1,"token","number"],[1,"token","builtin"]],template:function(b,a){if(1&b&&(B.Tb(0,"header",0),B.Tb(1,"div",1),B.Tb(2,"h1",2),B.Bc(3," tabs "),B.Sb(),B.Sb(),B.Tb(4,"div",3),B.Tb(5,"a",4),B.Bc(6,"Lightning"),B.Sb(),B.Tb(7,"a",5),B.Tb(8,"div",6),B.Ob(9,"img",7),B.Bc(10,"Source"),B.Sb(),B.Sb(),B.Sb(),B.Sb(),B.Tb(11,"div",8),B.Tb(12,"p"),B.Bc(13,"An "),B.Tb(14,"em"),B.Bc(15,"intuitive"),B.Sb(),B.Bc(16,", "),B.Tb(17,"em"),B.Bc(18,"efficient"),B.Sb(),B.Bc(19," and "),B.Tb(20,"em"),B.Bc(21,"fully accessible"),B.Sb(),B.Bc(22," implementation of tabset/tabs."),B.Sb(),B.Tb(23,"p"),B.Bc(24,"Each pane is only instantiated while it is visible. Panes which are not visible are released and do not have associated memory, DOM and change detection cost. Nevertheless, if you want to change this behavior just set "),B.Tb(25,"code"),B.Bc(26,'lazy="false"'),B.Sb(),B.Bc(27," to "),B.Tb(28,"code"),B.Bc(29,"<ngl-tabset>"),B.Sb(),B.Bc(30,"."),B.Sb(),B.Tb(31,"p"),B.Bc(32,"Tab's header can contain HTML either by passing a template reference as "),B.Tb(33,"code"),B.Bc(34,"label"),B.Sb(),B.Bc(35," or by using the more verbose syntax, with "),B.Tb(36,"code"),B.Bc(37,"<ngl-tab>"),B.Sb(),B.Bc(38,", "),B.Tb(39,"code"),B.Bc(40,"<ngl-tab-label>"),B.Sb(),B.Bc(41," and "),B.Tb(42,"code"),B.Bc(43,"<ngl-tab-content>"),B.Sb(),B.Bc(44,"."),B.Sb(),B.Tb(45,"p"),B.Tb(46,"strong"),B.Bc(47,"Accessibility and Keyboard interactions"),B.Sb(),B.Bc(48,":"),B.Sb(),B.Tb(49,"ul"),B.Tb(50,"li"),B.Bc(51,"Selected tab\u2019s anchor has "),B.Tb(52,"code"),B.Bc(53,'aria-selected="true"'),B.Sb(),B.Bc(54," and "),B.Tb(55,"code"),B.Bc(56,'tabindex="0"'),B.Sb(),B.Bc(57,", all other tabs\u2019 anchors have "),B.Tb(58,"code"),B.Bc(59,'aria-selected="false"'),B.Sb(),B.Bc(60," and "),B.Tb(61,"code"),B.Bc(62,'tabindex="-1"'),B.Sb(),B.Sb(),B.Tb(63,"li"),B.Bc(64,"Arrow keys, when focus is on selected tab, cycle selection to the next or previous tab"),B.Sb(),B.Tb(65,"li"),B.Tb(66,"code"),B.Bc(67,"Tab"),B.Sb(),B.Bc(68," key, when focus is before the tab list, moves focus to the selected tab"),B.Sb(),B.Tb(69,"li"),B.Tb(70,"code"),B.Bc(71,"Tab"),B.Sb(),B.Bc(72," key, when focus is on selected tab, moves focus into the selected tab\u2019s associated tab panel or to the next focusable element on the page if that panel has no focusable elements"),B.Sb(),B.Tb(73,"li"),B.Tb(74,"code"),B.Bc(75,"Shift+Tab"),B.Sb(),B.Bc(76," keys, when focus is on first element in a tab panel, move focus to the selected tab"),B.Sb(),B.Sb(),B.Sb(),B.Tb(77,"div",9),B.Tb(78,"h2",10),B.Bc(79,"Examples"),B.Sb(),B.Tb(80,"div",11),B.Tb(81,"div",12),B.Bc(82,"Basic Usage"),B.Sb(),B.Ob(83,"app-demo-tabs-basic"),B.zc(84,f,512,0,"ng-template",null,13,B.Ac),B.zc(86,D,362,16,"ng-template",null,14,B.Ac),B.Tb(88,"div",15),B.Ob(89,"app-demo-example-docs",16),B.Sb(),B.Sb(),B.Sb(),B.Tb(90,"div",9),B.Tb(91,"h2",10),B.Bc(92,"API"),B.Sb(),B.Tb(93,"div",17),B.Tb(94,"div",18),B.Tb(95,"h3"),B.Bc(96,"<ngl-tabset>"),B.Sb(),B.Tb(97,"h4"),B.Bc(98,"NglTabs"),B.Sb(),B.Tb(99,"table"),B.Tb(100,"thead"),B.Tb(101,"tr"),B.Tb(102,"th"),B.Bc(103,"Property"),B.Sb(),B.Tb(104,"th"),B.Bc(105,"Description"),B.Sb(),B.Tb(106,"th"),B.Bc(107,"Type"),B.Sb(),B.Tb(108,"th"),B.Bc(109,"Default"),B.Sb(),B.Sb(),B.Sb(),B.Tb(110,"tbody"),B.Tb(111,"tr"),B.Tb(112,"td"),B.Tb(113,"code"),B.Bc(114,"[selected]"),B.Sb(),B.Sb(),B.Tb(115,"td"),B.Bc(116,"Desired tab to activate. This can be either the "),B.Tb(117,"code"),B.Bc(118,"index"),B.Sb(),B.Bc(119," number, the tab's id "),B.Tb(120,"em"),B.Bc(121,'(id="myid")'),B.Sb(),B.Bc(122," or the actual "),B.Tb(123,"code"),B.Bc(124,"NglTab"),B.Sb(),B.Bc(125," instance."),B.Sb(),B.Tb(126,"td"),B.Bc(127,"string | number | NglTab"),B.Sb(),B.Ob(128,"td"),B.Sb(),B.Tb(129,"tr"),B.Tb(130,"td"),B.Tb(131,"code"),B.Bc(132,"[variant]"),B.Sb(),B.Sb(),B.Tb(133,"td"),B.Bc(134,"Whether the tabset is "),B.Tb(135,"a",19),B.Bc(136,"scoped"),B.Sb(),B.Bc(137," or not."),B.Sb(),B.Tb(138,"td"),B.Bc(139,"'default' | 'scoped'"),B.Sb(),B.Tb(140,"td"),B.Bc(141,"'default'"),B.Sb(),B.Sb(),B.Tb(142,"tr"),B.Tb(143,"td"),B.Tb(144,"code"),B.Bc(145,"[lazy]"),B.Sb(),B.Sb(),B.Tb(146,"td"),B.Bc(147,"Whether every tab's content is instantiated when visible, and destroyed when hidden."),B.Sb(),B.Tb(148,"td"),B.Bc(149,"boolean"),B.Sb(),B.Tb(150,"td"),B.Bc(151,"true"),B.Sb(),B.Sb(),B.Tb(152,"tr"),B.Tb(153,"td"),B.Tb(154,"code"),B.Bc(155,"(selectedChange)"),B.Sb(),B.Sb(),B.Tb(156,"td"),B.Bc(157,"Emits when a tab is selected."),B.Sb(),B.Tb(158,"td"),B.Bc(159,"EventEmitter<NglTab>"),B.Sb(),B.Ob(160,"td"),B.Sb(),B.Sb(),B.Sb(),B.Tb(161,"h3"),B.Bc(162,"<ng-template ngl-tab> | <ngl-tab>"),B.Sb(),B.Tb(163,"h4"),B.Bc(164,"NglTab"),B.Sb(),B.Tb(165,"table"),B.Tb(166,"thead"),B.Tb(167,"tr"),B.Tb(168,"th"),B.Bc(169,"Property"),B.Sb(),B.Tb(170,"th"),B.Bc(171,"Description"),B.Sb(),B.Tb(172,"th"),B.Bc(173,"Type"),B.Sb(),B.Tb(174,"th"),B.Bc(175,"Default"),B.Sb(),B.Sb(),B.Sb(),B.Tb(176,"tbody"),B.Tb(177,"tr"),B.Tb(178,"td"),B.Tb(179,"code"),B.Bc(180,"[label]"),B.Sb(),B.Sb(),B.Tb(181,"td"),B.Bc(182,"Header text."),B.Sb(),B.Tb(183,"td"),B.Bc(184,"string"),B.Sb(),B.Ob(185,"td"),B.Sb(),B.Tb(186,"tr"),B.Tb(187,"td"),B.Tb(188,"code"),B.Bc(189,"[id]"),B.Sb(),B.Sb(),B.Tb(190,"td"),B.Bc(191,"Tab's ID in case you want to preselect or programmatically manipulate it."),B.Sb(),B.Tb(192,"td"),B.Bc(193,"string"),B.Sb(),B.Ob(194,"td"),B.Sb(),B.Tb(195,"tr"),B.Tb(196,"td"),B.Tb(197,"code"),B.Bc(198,"(activate)"),B.Sb(),B.Sb(),B.Tb(199,"td"),B.Bc(200,"Emits when a tab is becomes active."),B.Sb(),B.Tb(201,"td"),B.Bc(202,"EventEmitter<NglTab>"),B.Sb(),B.Ob(203,"td"),B.Sb(),B.Tb(204,"tr"),B.Tb(205,"td"),B.Tb(206,"code"),B.Bc(207,"(deactivate)"),B.Sb(),B.Sb(),B.Tb(208,"td"),B.Bc(209,"Emits when a tab is becomes inactive."),B.Sb(),B.Tb(210,"td"),B.Bc(211,"EventEmitter<NglTab>"),B.Sb(),B.Ob(212,"td"),B.Sb(),B.Sb(),B.Sb(),B.Tb(213,"h3"),B.Bc(214,"Only when using "),B.Tb(215,"code"),B.Bc(216,"<ngl-tab>"),B.Sb(),B.Sb(),B.Tb(217,"ul"),B.Tb(218,"li"),B.Tb(219,"code"),B.Bc(220,"<ng-template ngl-tab-label>"),B.Sb(),B.Bc(221,": contains header's content"),B.Sb(),B.Tb(222,"li"),B.Tb(223,"code"),B.Bc(224,"<ng-template ngl-tab-content>"),B.Sb(),B.Bc(225,": contains tabs's content"),B.Sb(),B.Sb(),B.Sb(),B.Sb(),B.Sb()),2&b){var c=B.rc(85),n=B.rc(87);B.Bb(89),B.mc("ts",n)("markup",c)}},directives:[h,v.a],encapsulation:2}),C)}],k=((y=function b(){_classCallCheck(this,b)}).\u0275mod=B.Kb({type:y}),y.\u0275inj=B.Jb({factory:function(b){return new(b||y)},imports:[[n.c,t.c.forChild(A),e.J,e.k,s.a]]}),y)}}]);