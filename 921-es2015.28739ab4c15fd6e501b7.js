(self.webpackChunkng_lightning_app=self.webpackChunkng_lightning_app||[]).push([[921],{37921:function(Z,a,n){"use strict";n.r(a),n.d(a,{NglDemoTabsModule:function(){return v}});var t=n(61116),u=n(20563),s=n(76058),e=n(42519),g=n(87368),_=n(26660),U=n(99784),A=n(48881),p=n(92552);function T(Z,a){if(1&Z&&g._uU(0),2&Z){const Z=g.oxw();g.hij("You have ",Z.details.length," details.")}}function q(Z,a){if(1&Z&&(g._uU(0,"Detail "),g.TgZ(1,"i"),g._uU(2),g.qZA()),2&Z){const Z=g.oxw().$implicit;g.xp6(2),g.Oqu(Z)}}function i(Z,a){if(1&Z){const Z=g.EpF();g.TgZ(0,"p"),g._uU(1,"Some detail text for "),g.TgZ(2,"b"),g._uU(3),g.qZA(),g._uU(4,"."),g.qZA(),g.TgZ(5,"button",13),g.NdJ("click",function(){g.CHM(Z);const a=g.oxw().$implicit;return g.oxw().removeDetail(a)}),g._uU(6,"Remove"),g.qZA()}if(2&Z){const Z=g.oxw().$implicit;g.xp6(3),g.Oqu(Z)}}function l(Z,a){if(1&Z){const Z=g.EpF();g.TgZ(0,"ngl-tab",10),g.NdJ("activate",function(){const a=g.CHM(Z).$implicit;return g.oxw().tabChange(a,"active")})("deactivate",function(){const a=g.CHM(Z).$implicit;return g.oxw().tabChange(a,"inactive")}),g.YNc(1,q,3,1,"ng-template",11),g.YNc(2,i,7,1,"ng-template",12),g.qZA()}}function d(Z,a){1&Z&&g._uU(0,"Summary")}function o(Z,a){if(1&Z&&g._uU(0),2&Z){const Z=g.oxw();g.hij("Next last ID is ",Z.id,".")}}let c=(()=>{class Z{constructor(){this.variant="scoped",this.id=0,this.selectedTab="sum",this.details=[]}change(){this.variant="scoped"===this.variant?null:"scoped"}addDetail(){this.details.push(this.id++)}isDisabled(){return"sum"===this.selectedTab||"sum"===this.selectedTab.id}tabChange(Z,a){console.log("detail",Z,a)}removeDetail(Z){this.details=this.details.filter(a=>a!==Z),this.selectedTab="sum"}}return Z.\u0275fac=function(a){return new(a||Z)},Z.\u0275cmp=g.Xpm({type:Z,selectors:[["app-demo-tabs-basic"]],decls:14,vars:5,consts:[[3,"selected","variant","selectedChange"],["ngl-tab","","label","Overview"],[3,"activate","deactivate",4,"ngFor","ngForOf"],["heading",""],["id","sum","ngl-tab","",3,"label"],["summaryTab","nglTab"],[1,"slds-m-top_large"],["type","button","nglButton","","variant","brand",3,"click"],["type","button","nglButton","",3,"click"],["type","button","nglButton","",3,"disabled","click"],[3,"activate","deactivate"],["ngl-tab-label",""],["ngl-tab-content",""],["type","button","nglButton","","variant","destructive",3,"click"]],template:function(Z,a){if(1&Z){const Z=g.EpF();g.TgZ(0,"ngl-tabset",0),g.NdJ("selectedChange",function(Z){return a.selectedTab=Z}),g.YNc(1,T,1,1,"ng-template",1),g.YNc(2,l,3,0,"ngl-tab",2),g.YNc(3,d,1,0,"ng-template",null,3,g.W1O),g.YNc(5,o,1,1,"ng-template",4,5,g.W1O),g.qZA(),g.TgZ(7,"div",6),g.TgZ(8,"button",7),g.NdJ("click",function(){return a.addDetail()}),g._uU(9,"Add Detail"),g.qZA(),g.TgZ(10,"button",8),g.NdJ("click",function(){return a.change()}),g._uU(11,"Toggle scope"),g.qZA(),g.TgZ(12,"button",9),g.NdJ("click",function(){g.CHM(Z);const n=g.MAs(6);return a.selectedTab=n}),g._uU(13,"Show Summary"),g.qZA(),g.qZA()}if(2&Z){const Z=g.MAs(4);g.Q6J("selected",a.selectedTab)("variant",a.variant),g.xp6(2),g.Q6J("ngForOf",a.details),g.xp6(3),g.Q6J("label",Z),g.xp6(7),g.Q6J("disabled",a.isDisabled())}},directives:[_.O,U.C,t.sg,A.u,p.tk,p.zF,p.Qj],encapsulation:2}),Z})();var r=n(58034);function b(Z,a){1&Z&&(g._uU(0,"\n      "),g.TgZ(1,"pre",20),g.IAx(),g.TgZ(2,"code"),g.TgZ(3,"span",21),g.TgZ(4,"span",21),g.TgZ(5,"span",22),g._uU(6,"<"),g.qZA(),g._uU(7,"ngl-tabset"),g.qZA(),g._uU(8," "),g.TgZ(9,"span",23),g._uU(10,"[(selected)]"),g.qZA(),g.TgZ(11,"span",24),g.TgZ(12,"span",25),g._uU(13,"="),g.qZA(),g.TgZ(14,"span",22),g._uU(15,'"'),g.qZA(),g._uU(16,"selectedTab"),g.TgZ(17,"span",22),g._uU(18,'"'),g.qZA(),g.qZA(),g._uU(19," "),g.TgZ(20,"span",23),g._uU(21,"[variant]"),g.qZA(),g.TgZ(22,"span",24),g.TgZ(23,"span",25),g._uU(24,"="),g.qZA(),g.TgZ(25,"span",22),g._uU(26,'"'),g.qZA(),g._uU(27,"variant"),g.TgZ(28,"span",22),g._uU(29,'"'),g.qZA(),g.qZA(),g.TgZ(30,"span",22),g._uU(31,">"),g.qZA(),g.qZA(),g._uU(32,"\n  "),g.TgZ(33,"span",21),g.TgZ(34,"span",21),g.TgZ(35,"span",22),g._uU(36,"<"),g.qZA(),g._uU(37,"ng-template"),g.qZA(),g._uU(38," "),g.TgZ(39,"span",23),g._uU(40,"ngl-tab"),g.qZA(),g._uU(41," "),g.TgZ(42,"span",23),g._uU(43,"label"),g.qZA(),g.TgZ(44,"span",24),g.TgZ(45,"span",25),g._uU(46,"="),g.qZA(),g.TgZ(47,"span",22),g._uU(48,'"'),g.qZA(),g._uU(49,"Overview"),g.TgZ(50,"span",22),g._uU(51,'"'),g.qZA(),g.qZA(),g.TgZ(52,"span",22),g._uU(53,">"),g.qZA(),g.qZA(),g._uU(54,"You have {{details.length}} details."),g.TgZ(55,"span",21),g.TgZ(56,"span",21),g.TgZ(57,"span",22),g._uU(58,"</"),g.qZA(),g._uU(59,"ng-template"),g.qZA(),g.TgZ(60,"span",22),g._uU(61,">"),g.qZA(),g.qZA(),g._uU(62,"\n  "),g.TgZ(63,"span",21),g.TgZ(64,"span",21),g.TgZ(65,"span",22),g._uU(66,"<"),g.qZA(),g._uU(67,"ngl-tab"),g.qZA(),g._uU(68," "),g.TgZ(69,"span",23),g._uU(70,"*ngFor"),g.qZA(),g.TgZ(71,"span",24),g.TgZ(72,"span",25),g._uU(73,"="),g.qZA(),g.TgZ(74,"span",22),g._uU(75,'"'),g.qZA(),g._uU(76,"let detail of details"),g.TgZ(77,"span",22),g._uU(78,'"'),g.qZA(),g.qZA(),g._uU(79," "),g.TgZ(80,"span",23),g._uU(81,"(activate)"),g.qZA(),g.TgZ(82,"span",24),g.TgZ(83,"span",25),g._uU(84,"="),g.qZA(),g.TgZ(85,"span",22),g._uU(86,'"'),g.qZA(),g._uU(87,"tabChange(detail, "),g.TgZ(88,"span",22),g._uU(89,"'"),g.qZA(),g._uU(90,"active"),g.TgZ(91,"span",22),g._uU(92,"'"),g.qZA(),g._uU(93,")"),g.TgZ(94,"span",22),g._uU(95,'"'),g.qZA(),g.qZA(),g._uU(96," "),g.TgZ(97,"span",23),g._uU(98,"(deactivate)"),g.qZA(),g.TgZ(99,"span",24),g.TgZ(100,"span",25),g._uU(101,"="),g.qZA(),g.TgZ(102,"span",22),g._uU(103,'"'),g.qZA(),g._uU(104,"tabChange(detail, "),g.TgZ(105,"span",22),g._uU(106,"'"),g.qZA(),g._uU(107,"inactive"),g.TgZ(108,"span",22),g._uU(109,"'"),g.qZA(),g._uU(110,")"),g.TgZ(111,"span",22),g._uU(112,'"'),g.qZA(),g.qZA(),g.TgZ(113,"span",22),g._uU(114,">"),g.qZA(),g.qZA(),g._uU(115,"\n    "),g.TgZ(116,"span",21),g.TgZ(117,"span",21),g.TgZ(118,"span",22),g._uU(119,"<"),g.qZA(),g._uU(120,"ng-template"),g.qZA(),g._uU(121," "),g.TgZ(122,"span",23),g._uU(123,"ngl-tab-label"),g.qZA(),g.TgZ(124,"span",22),g._uU(125,">"),g.qZA(),g.qZA(),g._uU(126,"Detail "),g.TgZ(127,"span",21),g.TgZ(128,"span",21),g.TgZ(129,"span",22),g._uU(130,"<"),g.qZA(),g._uU(131,"i"),g.qZA(),g.TgZ(132,"span",22),g._uU(133,">"),g.qZA(),g.qZA(),g._uU(134,"{{ detail }}"),g.TgZ(135,"span",21),g.TgZ(136,"span",21),g.TgZ(137,"span",22),g._uU(138,"</"),g.qZA(),g._uU(139,"i"),g.qZA(),g.TgZ(140,"span",22),g._uU(141,">"),g.qZA(),g.qZA(),g.TgZ(142,"span",21),g.TgZ(143,"span",21),g.TgZ(144,"span",22),g._uU(145,"</"),g.qZA(),g._uU(146,"ng-template"),g.qZA(),g.TgZ(147,"span",22),g._uU(148,">"),g.qZA(),g.qZA(),g._uU(149,"\n    "),g.TgZ(150,"span",21),g.TgZ(151,"span",21),g.TgZ(152,"span",22),g._uU(153,"<"),g.qZA(),g._uU(154,"ng-template"),g.qZA(),g._uU(155," "),g.TgZ(156,"span",23),g._uU(157,"ngl-tab-content"),g.qZA(),g.TgZ(158,"span",22),g._uU(159,">"),g.qZA(),g.qZA(),g._uU(160,"\n      "),g.TgZ(161,"span",21),g.TgZ(162,"span",21),g.TgZ(163,"span",22),g._uU(164,"<"),g.qZA(),g._uU(165,"p"),g.qZA(),g.TgZ(166,"span",22),g._uU(167,">"),g.qZA(),g.qZA(),g._uU(168,"Some detail text for "),g.TgZ(169,"span",21),g.TgZ(170,"span",21),g.TgZ(171,"span",22),g._uU(172,"<"),g.qZA(),g._uU(173,"b"),g.qZA(),g.TgZ(174,"span",22),g._uU(175,">"),g.qZA(),g.qZA(),g._uU(176,"{{detail}}"),g.TgZ(177,"span",21),g.TgZ(178,"span",21),g.TgZ(179,"span",22),g._uU(180,"</"),g.qZA(),g._uU(181,"b"),g.qZA(),g.TgZ(182,"span",22),g._uU(183,">"),g.qZA(),g.qZA(),g._uU(184,"."),g.TgZ(185,"span",21),g.TgZ(186,"span",21),g.TgZ(187,"span",22),g._uU(188,"</"),g.qZA(),g._uU(189,"p"),g.qZA(),g.TgZ(190,"span",22),g._uU(191,">"),g.qZA(),g.qZA(),g._uU(192,"\n      "),g.TgZ(193,"span",21),g.TgZ(194,"span",21),g.TgZ(195,"span",22),g._uU(196,"<"),g.qZA(),g._uU(197,"button"),g.qZA(),g._uU(198," "),g.TgZ(199,"span",23),g._uU(200,"type"),g.qZA(),g.TgZ(201,"span",24),g.TgZ(202,"span",25),g._uU(203,"="),g.qZA(),g.TgZ(204,"span",22),g._uU(205,'"'),g.qZA(),g._uU(206,"button"),g.TgZ(207,"span",22),g._uU(208,'"'),g.qZA(),g.qZA(),g._uU(209," "),g.TgZ(210,"span",23),g._uU(211,"nglButton"),g.qZA(),g._uU(212," "),g.TgZ(213,"span",23),g._uU(214,"variant"),g.qZA(),g.TgZ(215,"span",24),g.TgZ(216,"span",25),g._uU(217,"="),g.qZA(),g.TgZ(218,"span",22),g._uU(219,'"'),g.qZA(),g._uU(220,"destructive"),g.TgZ(221,"span",22),g._uU(222,'"'),g.qZA(),g.qZA(),g._uU(223," "),g.TgZ(224,"span",23),g._uU(225,"(click)"),g.qZA(),g.TgZ(226,"span",24),g.TgZ(227,"span",25),g._uU(228,"="),g.qZA(),g.TgZ(229,"span",22),g._uU(230,'"'),g.qZA(),g._uU(231,"removeDetail(detail)"),g.TgZ(232,"span",22),g._uU(233,'"'),g.qZA(),g.qZA(),g.TgZ(234,"span",22),g._uU(235,">"),g.qZA(),g.qZA(),g._uU(236,"Remove"),g.TgZ(237,"span",21),g.TgZ(238,"span",21),g.TgZ(239,"span",22),g._uU(240,"</"),g.qZA(),g._uU(241,"button"),g.qZA(),g.TgZ(242,"span",22),g._uU(243,">"),g.qZA(),g.qZA(),g._uU(244,"\n    "),g.TgZ(245,"span",21),g.TgZ(246,"span",21),g.TgZ(247,"span",22),g._uU(248,"</"),g.qZA(),g._uU(249,"ng-template"),g.qZA(),g.TgZ(250,"span",22),g._uU(251,">"),g.qZA(),g.qZA(),g._uU(252,"\n  "),g.TgZ(253,"span",21),g.TgZ(254,"span",21),g.TgZ(255,"span",22),g._uU(256,"</"),g.qZA(),g._uU(257,"ngl-tab"),g.qZA(),g.TgZ(258,"span",22),g._uU(259,">"),g.qZA(),g.qZA(),g._uU(260,"\n  "),g.TgZ(261,"span",21),g.TgZ(262,"span",21),g.TgZ(263,"span",22),g._uU(264,"<"),g.qZA(),g._uU(265,"ng-template"),g.qZA(),g._uU(266," "),g.TgZ(267,"span",23),g._uU(268,"#heading"),g.qZA(),g.TgZ(269,"span",22),g._uU(270,">"),g.qZA(),g.qZA(),g._uU(271,"Summary"),g.TgZ(272,"span",21),g.TgZ(273,"span",21),g.TgZ(274,"span",22),g._uU(275,"</"),g.qZA(),g._uU(276,"ng-template"),g.qZA(),g.TgZ(277,"span",22),g._uU(278,">"),g.qZA(),g.qZA(),g._uU(279,"\n  "),g.TgZ(280,"span",21),g.TgZ(281,"span",21),g.TgZ(282,"span",22),g._uU(283,"<"),g.qZA(),g._uU(284,"ng-template"),g.qZA(),g._uU(285," "),g.TgZ(286,"span",23),g._uU(287,"id"),g.qZA(),g.TgZ(288,"span",24),g.TgZ(289,"span",25),g._uU(290,"="),g.qZA(),g.TgZ(291,"span",22),g._uU(292,'"'),g.qZA(),g._uU(293,"sum"),g.TgZ(294,"span",22),g._uU(295,'"'),g.qZA(),g.qZA(),g._uU(296," "),g.TgZ(297,"span",23),g._uU(298,"ngl-tab"),g.qZA(),g._uU(299," "),g.TgZ(300,"span",23),g._uU(301,"#summaryTab"),g.qZA(),g.TgZ(302,"span",24),g.TgZ(303,"span",25),g._uU(304,"="),g.qZA(),g.TgZ(305,"span",22),g._uU(306,'"'),g.qZA(),g._uU(307,"nglTab"),g.TgZ(308,"span",22),g._uU(309,'"'),g.qZA(),g.qZA(),g._uU(310," "),g.TgZ(311,"span",23),g._uU(312,"[label]"),g.qZA(),g.TgZ(313,"span",24),g.TgZ(314,"span",25),g._uU(315,"="),g.qZA(),g.TgZ(316,"span",22),g._uU(317,'"'),g.qZA(),g._uU(318,"heading"),g.TgZ(319,"span",22),g._uU(320,'"'),g.qZA(),g.qZA(),g.TgZ(321,"span",22),g._uU(322,">"),g.qZA(),g.qZA(),g._uU(323,"Next last ID is {{id}}."),g.TgZ(324,"span",21),g.TgZ(325,"span",21),g.TgZ(326,"span",22),g._uU(327,"</"),g.qZA(),g._uU(328,"ng-template"),g.qZA(),g.TgZ(329,"span",22),g._uU(330,">"),g.qZA(),g.qZA(),g._uU(331,"\n"),g.TgZ(332,"span",21),g.TgZ(333,"span",21),g.TgZ(334,"span",22),g._uU(335,"</"),g.qZA(),g._uU(336,"ngl-tabset"),g.qZA(),g.TgZ(337,"span",22),g._uU(338,">"),g.qZA(),g.qZA(),g._uU(339,"\n"),g.TgZ(340,"span",21),g.TgZ(341,"span",21),g.TgZ(342,"span",22),g._uU(343,"<"),g.qZA(),g._uU(344,"div"),g.qZA(),g._uU(345," "),g.TgZ(346,"span",23),g._uU(347,"class"),g.qZA(),g.TgZ(348,"span",24),g.TgZ(349,"span",25),g._uU(350,"="),g.qZA(),g.TgZ(351,"span",22),g._uU(352,'"'),g.qZA(),g._uU(353,"slds-m-top_large"),g.TgZ(354,"span",22),g._uU(355,'"'),g.qZA(),g.qZA(),g.TgZ(356,"span",22),g._uU(357,">"),g.qZA(),g.qZA(),g._uU(358,"\n  "),g.TgZ(359,"span",21),g.TgZ(360,"span",21),g.TgZ(361,"span",22),g._uU(362,"<"),g.qZA(),g._uU(363,"button"),g.qZA(),g._uU(364," "),g.TgZ(365,"span",23),g._uU(366,"type"),g.qZA(),g.TgZ(367,"span",24),g.TgZ(368,"span",25),g._uU(369,"="),g.qZA(),g.TgZ(370,"span",22),g._uU(371,'"'),g.qZA(),g._uU(372,"button"),g.TgZ(373,"span",22),g._uU(374,'"'),g.qZA(),g.qZA(),g._uU(375," "),g.TgZ(376,"span",23),g._uU(377,"nglButton"),g.qZA(),g._uU(378," "),g.TgZ(379,"span",23),g._uU(380,"variant"),g.qZA(),g.TgZ(381,"span",24),g.TgZ(382,"span",25),g._uU(383,"="),g.qZA(),g.TgZ(384,"span",22),g._uU(385,'"'),g.qZA(),g._uU(386,"brand"),g.TgZ(387,"span",22),g._uU(388,'"'),g.qZA(),g.qZA(),g._uU(389," "),g.TgZ(390,"span",23),g._uU(391,"(click)"),g.qZA(),g.TgZ(392,"span",24),g.TgZ(393,"span",25),g._uU(394,"="),g.qZA(),g.TgZ(395,"span",22),g._uU(396,'"'),g.qZA(),g._uU(397,"addDetail()"),g.TgZ(398,"span",22),g._uU(399,'"'),g.qZA(),g.qZA(),g.TgZ(400,"span",22),g._uU(401,">"),g.qZA(),g.qZA(),g._uU(402,"Add Detail"),g.TgZ(403,"span",21),g.TgZ(404,"span",21),g.TgZ(405,"span",22),g._uU(406,"</"),g.qZA(),g._uU(407,"button"),g.qZA(),g.TgZ(408,"span",22),g._uU(409,">"),g.qZA(),g.qZA(),g._uU(410,"\n  "),g.TgZ(411,"span",21),g.TgZ(412,"span",21),g.TgZ(413,"span",22),g._uU(414,"<"),g.qZA(),g._uU(415,"button"),g.qZA(),g._uU(416," "),g.TgZ(417,"span",23),g._uU(418,"type"),g.qZA(),g.TgZ(419,"span",24),g.TgZ(420,"span",25),g._uU(421,"="),g.qZA(),g.TgZ(422,"span",22),g._uU(423,'"'),g.qZA(),g._uU(424,"button"),g.TgZ(425,"span",22),g._uU(426,'"'),g.qZA(),g.qZA(),g._uU(427," "),g.TgZ(428,"span",23),g._uU(429,"nglButton"),g.qZA(),g._uU(430," "),g.TgZ(431,"span",23),g._uU(432,"(click)"),g.qZA(),g.TgZ(433,"span",24),g.TgZ(434,"span",25),g._uU(435,"="),g.qZA(),g.TgZ(436,"span",22),g._uU(437,'"'),g.qZA(),g._uU(438,"change()"),g.TgZ(439,"span",22),g._uU(440,'"'),g.qZA(),g.qZA(),g.TgZ(441,"span",22),g._uU(442,">"),g.qZA(),g.qZA(),g._uU(443,"Toggle scope"),g.TgZ(444,"span",21),g.TgZ(445,"span",21),g.TgZ(446,"span",22),g._uU(447,"</"),g.qZA(),g._uU(448,"button"),g.qZA(),g.TgZ(449,"span",22),g._uU(450,">"),g.qZA(),g.qZA(),g._uU(451,"\n  "),g.TgZ(452,"span",21),g.TgZ(453,"span",21),g.TgZ(454,"span",22),g._uU(455,"<"),g.qZA(),g._uU(456,"button"),g.qZA(),g._uU(457," "),g.TgZ(458,"span",23),g._uU(459,"type"),g.qZA(),g.TgZ(460,"span",24),g.TgZ(461,"span",25),g._uU(462,"="),g.qZA(),g.TgZ(463,"span",22),g._uU(464,'"'),g.qZA(),g._uU(465,"button"),g.TgZ(466,"span",22),g._uU(467,'"'),g.qZA(),g.qZA(),g._uU(468," "),g.TgZ(469,"span",23),g._uU(470,"nglButton"),g.qZA(),g._uU(471," "),g.TgZ(472,"span",23),g._uU(473,"(click)"),g.qZA(),g.TgZ(474,"span",24),g.TgZ(475,"span",25),g._uU(476,"="),g.qZA(),g.TgZ(477,"span",22),g._uU(478,'"'),g.qZA(),g._uU(479,"selectedTab = summaryTab"),g.TgZ(480,"span",22),g._uU(481,'"'),g.qZA(),g.qZA(),g._uU(482," "),g.TgZ(483,"span",23),g._uU(484,"[disabled]"),g.qZA(),g.TgZ(485,"span",24),g.TgZ(486,"span",25),g._uU(487,"="),g.qZA(),g.TgZ(488,"span",22),g._uU(489,'"'),g.qZA(),g._uU(490,"isDisabled()"),g.TgZ(491,"span",22),g._uU(492,'"'),g.qZA(),g.qZA(),g.TgZ(493,"span",22),g._uU(494,">"),g.qZA(),g.qZA(),g._uU(495,"Show Summary"),g.TgZ(496,"span",21),g.TgZ(497,"span",21),g.TgZ(498,"span",22),g._uU(499,"</"),g.qZA(),g._uU(500,"button"),g.qZA(),g.TgZ(501,"span",22),g._uU(502,">"),g.qZA(),g.qZA(),g._uU(503,"\n"),g.TgZ(504,"span",21),g.TgZ(505,"span",21),g.TgZ(506,"span",22),g._uU(507,"</"),g.qZA(),g._uU(508,"div"),g.qZA(),g.TgZ(509,"span",22),g._uU(510,">"),g.qZA(),g.qZA(),g.qZA(),g.fQ9(),g.qZA(),g._uU(511,"\n    "))}function m(Z,a){1&Z&&(g._uU(0,"\n      "),g.TgZ(1,"pre",26),g.TgZ(2,"code"),g.TgZ(3,"span",27),g._uU(4,"import"),g.qZA(),g._uU(5," "),g.TgZ(6,"span",22),g._uU(7),g.qZA(),g._uU(8," Component "),g.TgZ(9,"span",22),g._uU(10),g.qZA(),g._uU(11," "),g.TgZ(12,"span",27),g._uU(13,"from"),g.qZA(),g._uU(14," "),g.TgZ(15,"span",28),g._uU(16,"'@angular/core'"),g.qZA(),g.TgZ(17,"span",22),g._uU(18,";"),g.qZA(),g._uU(19,"\n\n@"),g.TgZ(20,"span",29),g._uU(21,"Component"),g.qZA(),g.TgZ(22,"span",22),g._uU(23,"("),g.qZA(),g.TgZ(24,"span",22),g._uU(25),g.qZA(),g._uU(26,"\n  selector"),g.TgZ(27,"span",30),g._uU(28,":"),g.qZA(),g._uU(29," "),g.TgZ(30,"span",28),g._uU(31,"'app-demo-tabs-basic'"),g.qZA(),g.TgZ(32,"span",22),g._uU(33,","),g.qZA(),g._uU(34,"\n  templateUrl"),g.TgZ(35,"span",30),g._uU(36,":"),g.qZA(),g._uU(37," "),g.TgZ(38,"span",28),g._uU(39,"'./basic.html'"),g.qZA(),g.TgZ(40,"span",22),g._uU(41,","),g.qZA(),g._uU(42,"\n"),g.TgZ(43,"span",22),g._uU(44),g.qZA(),g.TgZ(45,"span",22),g._uU(46,")"),g.qZA(),g._uU(47,"\n"),g.TgZ(48,"span",27),g._uU(49,"export"),g.qZA(),g._uU(50," "),g.TgZ(51,"span",27),g._uU(52,"class"),g.qZA(),g._uU(53," "),g.TgZ(54,"span",31),g._uU(55,"DemoTabsBasic"),g.qZA(),g._uU(56," "),g.TgZ(57,"span",22),g._uU(58),g.qZA(),g._uU(59,"\n\n  variant "),g.TgZ(60,"span",30),g._uU(61,"="),g.qZA(),g._uU(62," "),g.TgZ(63,"span",28),g._uU(64,"'scoped'"),g.qZA(),g.TgZ(65,"span",22),g._uU(66,";"),g.qZA(),g._uU(67,"\n  id "),g.TgZ(68,"span",30),g._uU(69,"="),g.qZA(),g._uU(70," "),g.TgZ(71,"span",32),g._uU(72,"0"),g.qZA(),g.TgZ(73,"span",22),g._uU(74,";"),g.qZA(),g._uU(75,"\n  selectedTab"),g.TgZ(76,"span",30),g._uU(77,":"),g.qZA(),g._uU(78," "),g.TgZ(79,"span",33),g._uU(80,"any"),g.qZA(),g._uU(81," "),g.TgZ(82,"span",30),g._uU(83,"="),g.qZA(),g._uU(84," "),g.TgZ(85,"span",28),g._uU(86,"'sum'"),g.qZA(),g.TgZ(87,"span",22),g._uU(88,";"),g.qZA(),g._uU(89,"\n  details"),g.TgZ(90,"span",30),g._uU(91,":"),g.qZA(),g._uU(92," "),g.TgZ(93,"span",33),g._uU(94,"number"),g.qZA(),g.TgZ(95,"span",22),g._uU(96,"["),g.qZA(),g.TgZ(97,"span",22),g._uU(98,"]"),g.qZA(),g._uU(99," "),g.TgZ(100,"span",30),g._uU(101,"="),g.qZA(),g._uU(102," "),g.TgZ(103,"span",22),g._uU(104,"["),g.qZA(),g.TgZ(105,"span",22),g._uU(106,"]"),g.qZA(),g.TgZ(107,"span",22),g._uU(108,";"),g.qZA(),g._uU(109,"\n\n  "),g.TgZ(110,"span",29),g._uU(111,"change"),g.qZA(),g.TgZ(112,"span",22),g._uU(113,"("),g.qZA(),g.TgZ(114,"span",22),g._uU(115,")"),g.qZA(),g._uU(116," "),g.TgZ(117,"span",22),g._uU(118),g.qZA(),g._uU(119,"\n    "),g.TgZ(120,"span",27),g._uU(121,"this"),g.qZA(),g.TgZ(122,"span",22),g._uU(123,"."),g.qZA(),g._uU(124,"variant "),g.TgZ(125,"span",30),g._uU(126,"="),g.qZA(),g._uU(127," "),g.TgZ(128,"span",27),g._uU(129,"this"),g.qZA(),g.TgZ(130,"span",22),g._uU(131,"."),g.qZA(),g._uU(132,"variant "),g.TgZ(133,"span",30),g._uU(134,"==="),g.qZA(),g._uU(135," "),g.TgZ(136,"span",28),g._uU(137,"'scoped'"),g.qZA(),g._uU(138," "),g.TgZ(139,"span",30),g._uU(140,"?"),g.qZA(),g._uU(141," "),g.TgZ(142,"span",27),g._uU(143,"null"),g.qZA(),g._uU(144," "),g.TgZ(145,"span",30),g._uU(146,":"),g.qZA(),g._uU(147," "),g.TgZ(148,"span",28),g._uU(149,"'scoped'"),g.qZA(),g.TgZ(150,"span",22),g._uU(151,";"),g.qZA(),g._uU(152,"\n  "),g.TgZ(153,"span",22),g._uU(154),g.qZA(),g._uU(155,"\n\n  "),g.TgZ(156,"span",29),g._uU(157,"addDetail"),g.qZA(),g.TgZ(158,"span",22),g._uU(159,"("),g.qZA(),g.TgZ(160,"span",22),g._uU(161,")"),g.qZA(),g._uU(162," "),g.TgZ(163,"span",22),g._uU(164),g.qZA(),g._uU(165,"\n    "),g.TgZ(166,"span",27),g._uU(167,"this"),g.qZA(),g.TgZ(168,"span",22),g._uU(169,"."),g.qZA(),g._uU(170,"details"),g.TgZ(171,"span",22),g._uU(172,"."),g.qZA(),g.TgZ(173,"span",29),g._uU(174,"push"),g.qZA(),g.TgZ(175,"span",22),g._uU(176,"("),g.qZA(),g.TgZ(177,"span",27),g._uU(178,"this"),g.qZA(),g.TgZ(179,"span",22),g._uU(180,"."),g.qZA(),g._uU(181,"id"),g.TgZ(182,"span",30),g._uU(183,"++"),g.qZA(),g.TgZ(184,"span",22),g._uU(185,")"),g.qZA(),g.TgZ(186,"span",22),g._uU(187,";"),g.qZA(),g._uU(188,"\n  "),g.TgZ(189,"span",22),g._uU(190),g.qZA(),g._uU(191,"\n\n  "),g.TgZ(192,"span",29),g._uU(193,"isDisabled"),g.qZA(),g.TgZ(194,"span",22),g._uU(195,"("),g.qZA(),g.TgZ(196,"span",22),g._uU(197,")"),g.qZA(),g._uU(198," "),g.TgZ(199,"span",22),g._uU(200),g.qZA(),g._uU(201,"\n    "),g.TgZ(202,"span",27),g._uU(203,"return"),g.qZA(),g._uU(204," "),g.TgZ(205,"span",27),g._uU(206,"this"),g.qZA(),g.TgZ(207,"span",22),g._uU(208,"."),g.qZA(),g._uU(209,"selectedTab "),g.TgZ(210,"span",30),g._uU(211,"==="),g.qZA(),g._uU(212," "),g.TgZ(213,"span",28),g._uU(214,"'sum'"),g.qZA(),g._uU(215," "),g.TgZ(216,"span",30),g._uU(217,"||"),g.qZA(),g._uU(218," "),g.TgZ(219,"span",27),g._uU(220,"this"),g.qZA(),g.TgZ(221,"span",22),g._uU(222,"."),g.qZA(),g._uU(223,"selectedTab"),g.TgZ(224,"span",22),g._uU(225,"."),g.qZA(),g._uU(226,"id "),g.TgZ(227,"span",30),g._uU(228,"==="),g.qZA(),g._uU(229," "),g.TgZ(230,"span",28),g._uU(231,"'sum'"),g.qZA(),g.TgZ(232,"span",22),g._uU(233,";"),g.qZA(),g._uU(234,"\n  "),g.TgZ(235,"span",22),g._uU(236),g.qZA(),g._uU(237,"\n\n  "),g.TgZ(238,"span",27),g._uU(239,"protected"),g.qZA(),g._uU(240," "),g.TgZ(241,"span",29),g._uU(242,"tabChange"),g.qZA(),g.TgZ(243,"span",22),g._uU(244,"("),g.qZA(),g._uU(245,"detail"),g.TgZ(246,"span",30),g._uU(247,":"),g.qZA(),g._uU(248," "),g.TgZ(249,"span",33),g._uU(250,"number"),g.qZA(),g.TgZ(251,"span",22),g._uU(252,","),g.qZA(),g._uU(253," event"),g.TgZ(254,"span",30),g._uU(255,":"),g.qZA(),g._uU(256," "),g.TgZ(257,"span",33),g._uU(258,"string"),g.qZA(),g.TgZ(259,"span",22),g._uU(260,")"),g.qZA(),g._uU(261," "),g.TgZ(262,"span",22),g._uU(263),g.qZA(),g._uU(264,"\n    "),g.TgZ(265,"span",33),g._uU(266,"console"),g.qZA(),g.TgZ(267,"span",22),g._uU(268,"."),g.qZA(),g.TgZ(269,"span",29),g._uU(270,"log"),g.qZA(),g.TgZ(271,"span",22),g._uU(272,"("),g.qZA(),g.TgZ(273,"span",28),g._uU(274,"'detail'"),g.qZA(),g.TgZ(275,"span",22),g._uU(276,","),g.qZA(),g._uU(277," detail"),g.TgZ(278,"span",22),g._uU(279,","),g.qZA(),g._uU(280," event"),g.TgZ(281,"span",22),g._uU(282,")"),g.qZA(),g.TgZ(283,"span",22),g._uU(284,";"),g.qZA(),g._uU(285,"\n  "),g.TgZ(286,"span",22),g._uU(287),g.qZA(),g._uU(288,"\n\n  "),g.TgZ(289,"span",27),g._uU(290,"protected"),g.qZA(),g._uU(291," "),g.TgZ(292,"span",29),g._uU(293,"removeDetail"),g.qZA(),g.TgZ(294,"span",22),g._uU(295,"("),g.qZA(),g._uU(296,"detail"),g.TgZ(297,"span",30),g._uU(298,":"),g.qZA(),g._uU(299," Object"),g.TgZ(300,"span",22),g._uU(301,")"),g.qZA(),g._uU(302," "),g.TgZ(303,"span",22),g._uU(304),g.qZA(),g._uU(305,"\n    "),g.TgZ(306,"span",27),g._uU(307,"this"),g.qZA(),g.TgZ(308,"span",22),g._uU(309,"."),g.qZA(),g._uU(310,"details "),g.TgZ(311,"span",30),g._uU(312,"="),g.qZA(),g._uU(313," "),g.TgZ(314,"span",27),g._uU(315,"this"),g.qZA(),g.TgZ(316,"span",22),g._uU(317,"."),g.qZA(),g._uU(318,"details"),g.TgZ(319,"span",22),g._uU(320,"."),g.qZA(),g.TgZ(321,"span",29),g._uU(322,"filter"),g.qZA(),g.TgZ(323,"span",22),g._uU(324,"("),g.qZA(),g.TgZ(325,"span",22),g._uU(326,"("),g.qZA(),g._uU(327,"d"),g.TgZ(328,"span",22),g._uU(329,")"),g.qZA(),g._uU(330," "),g.TgZ(331,"span",30),g._uU(332,"=>"),g.qZA(),g._uU(333," d "),g.TgZ(334,"span",30),g._uU(335,"!=="),g.qZA(),g._uU(336," detail"),g.TgZ(337,"span",22),g._uU(338,")"),g.qZA(),g.TgZ(339,"span",22),g._uU(340,";"),g.qZA(),g._uU(341,"\n    "),g.TgZ(342,"span",27),g._uU(343,"this"),g.qZA(),g.TgZ(344,"span",22),g._uU(345,"."),g.qZA(),g._uU(346,"selectedTab "),g.TgZ(347,"span",30),g._uU(348,"="),g.qZA(),g._uU(349," "),g.TgZ(350,"span",28),g._uU(351,"'sum'"),g.qZA(),g.TgZ(352,"span",22),g._uU(353,";"),g.qZA(),g._uU(354,"\n  "),g.TgZ(355,"span",22),g._uU(356),g.qZA(),g._uU(357,"\n"),g.TgZ(358,"span",22),g._uU(359),g.qZA(),g._uU(360,"\n"),g.qZA(),g.qZA(),g._uU(361,"\n    ")),2&Z&&(g.xp6(7),g.Oqu("{"),g.xp6(3),g.Oqu("}"),g.xp6(15),g.Oqu("{"),g.xp6(19),g.Oqu("}"),g.xp6(14),g.Oqu("{"),g.xp6(60),g.Oqu("{"),g.xp6(36),g.Oqu("}"),g.xp6(10),g.Oqu("{"),g.xp6(26),g.Oqu("}"),g.xp6(10),g.Oqu("{"),g.xp6(36),g.Oqu("}"),g.xp6(27),g.Oqu("{"),g.xp6(24),g.Oqu("}"),g.xp6(17),g.Oqu("{"),g.xp6(52),g.Oqu("}"),g.xp6(3),g.Oqu("}"))}const h=[{path:"",component:(()=>{class Z{}return Z.\u0275fac=function(a){return new(a||Z)},Z.\u0275cmp=g.Xpm({type:Z,selectors:[["app-demo-tabs"]],decls:226,vars:2,consts:[[1,"component__header","slds-border_bottom","slds-grid","slds-wrap","slds-m-bottom_medium"],[1,"slds-has-flexi-truncate","slds-align-middle"],[2,"text-transform","capitalize"],[1,"slds-align-middle","slds-text-body_small"],["href","https://www.lightningdesignsystem.com/components/tabs","title","External link to Salesforce Lightning Design System Site","target","_blank",1,"slds-button","slds-button_neutral"],["href","https://github.com/ng-lightning/ng-lightning/tree/master/projects/ng-lightning/src/lib/tabs","target","_blank",1,"slds-button","slds-button_neutral"],[1,"slds-grid","slds-grid_vertical-align-center"],["src","assets/images/github.svg",2,"height","15px","width","15px","margin-right","0.5rem"],[1,"slds-m-vertical_medium","readme"],[1,"slds-m-vertical_medium"],[1,"callout"],[1,"slds-box","slds-is-relative","slds-theme_default","slds-m-bottom_large",2,"padding-top","1.5rem"],[1,"example__header","slds-text-heading_small"],["markupbasic",""],["tsbasic",""],[1,"slds-is-relative","slds-m-top_large",2,"min-height","25px"],["dir","tabs","file","basic","tsRaw","import%20%7B%20Component%20%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-demo-tabs-basic'%2C%0A%20%20templateUrl%3A%20'.%2Fbasic.html'%2C%0A%7D)%0Aexport%20class%20DemoTabsBasic%20%7B%0A%0A%20%20variant%20%3D%20'scoped'%3B%0A%20%20id%20%3D%200%3B%0A%20%20selectedTab%3A%20any%20%3D%20'sum'%3B%0A%20%20details%3A%20number%5B%5D%20%3D%20%5B%5D%3B%0A%0A%20%20change()%20%7B%0A%20%20%20%20this.variant%20%3D%20this.variant%20%3D%3D%3D%20'scoped'%20%3F%20null%20%3A%20'scoped'%3B%0A%20%20%7D%0A%0A%20%20addDetail()%20%7B%0A%20%20%20%20this.details.push(this.id%2B%2B)%3B%0A%20%20%7D%0A%0A%20%20isDisabled()%20%7B%0A%20%20%20%20return%20this.selectedTab%20%3D%3D%3D%20'sum'%20%7C%7C%20this.selectedTab.id%20%3D%3D%3D%20'sum'%3B%0A%20%20%7D%0A%0A%20%20protected%20tabChange(detail%3A%20number%2C%20event%3A%20string)%20%7B%0A%20%20%20%20console.log('detail'%2C%20detail%2C%20event)%3B%0A%20%20%7D%0A%0A%20%20protected%20removeDetail(detail%3A%20Object)%20%7B%0A%20%20%20%20this.details%20%3D%20this.details.filter((d)%20%3D%3E%20d%20!%3D%3D%20detail)%3B%0A%20%20%20%20this.selectedTab%20%3D%20'sum'%3B%0A%20%20%7D%0A%7D%0A","markupRaw","%0A%3Cngl-tabset%20%5B(selected)%5D%3D%22selectedTab%22%20%5Bvariant%5D%3D%22variant%22%3E%0A%20%20%3Cng-template%20ngl-tab%20label%3D%22Overview%22%3EYou%20have%20%7B%7Bdetails.length%7D%7D%20details.%3C%2Fng-template%3E%0A%20%20%3Cngl-tab%20*ngFor%3D%22let%20detail%20of%20details%22%20(activate)%3D%22tabChange(detail%2C%20'active')%22%20(deactivate)%3D%22tabChange(detail%2C%20'inactive')%22%3E%0A%20%20%20%20%3Cng-template%20ngl-tab-label%3EDetail%20%3Ci%3E%7B%7B%20detail%20%7D%7D%3C%2Fi%3E%3C%2Fng-template%3E%0A%20%20%20%20%3Cng-template%20ngl-tab-content%3E%0A%20%20%20%20%20%20%3Cp%3ESome%20detail%20text%20for%20%3Cb%3E%7B%7Bdetail%7D%7D%3C%2Fb%3E.%3C%2Fp%3E%0A%20%20%20%20%20%20%3Cbutton%20type%3D%22button%22%20nglButton%20variant%3D%22destructive%22%20(click)%3D%22removeDetail(detail)%22%3ERemove%3C%2Fbutton%3E%0A%20%20%20%20%3C%2Fng-template%3E%0A%20%20%3C%2Fngl-tab%3E%0A%20%20%3Cng-template%20%23heading%3ESummary%3C%2Fng-template%3E%0A%20%20%3Cng-template%20id%3D%22sum%22%20ngl-tab%20%23summaryTab%3D%22nglTab%22%20%5Blabel%5D%3D%22heading%22%3ENext%20last%20ID%20is%20%7B%7Bid%7D%7D.%3C%2Fng-template%3E%0A%3C%2Fngl-tabset%3E%0A%3Cdiv%20class%3D%22slds-m-top_large%22%3E%0A%20%20%3Cbutton%20type%3D%22button%22%20nglButton%20variant%3D%22brand%22%20(click)%3D%22addDetail()%22%3EAdd%20Detail%3C%2Fbutton%3E%0A%20%20%3Cbutton%20type%3D%22button%22%20nglButton%20(click)%3D%22change()%22%3EToggle%20scope%3C%2Fbutton%3E%0A%20%20%3Cbutton%20type%3D%22button%22%20nglButton%20(click)%3D%22selectedTab%20%3D%20summaryTab%22%20%5Bdisabled%5D%3D%22isDisabled()%22%3EShow%20Summary%3C%2Fbutton%3E%0A%3C%2Fdiv%3E",3,"ts","markup"],[1,"slds-box","slds-theme_default"],[1,"api"],["href","https://www.lightningdesignsystem.com/components/tabs#scoped"],[1,"language-markup"],[1,"token","tag"],[1,"token","punctuation"],[1,"token","attr-name"],[1,"token","attr-value"],[1,"token","punctuation","attr-equals"],[1,"language-typescript"],[1,"token","keyword"],[1,"token","string"],[1,"token","function"],[1,"token","operator"],[1,"token","class-name"],[1,"token","number"],[1,"token","builtin"]],template:function(Z,a){if(1&Z&&(g.TgZ(0,"header",0),g.TgZ(1,"div",1),g.TgZ(2,"h1",2),g._uU(3," tabs "),g.qZA(),g.qZA(),g.TgZ(4,"div",3),g.TgZ(5,"a",4),g._uU(6,"Lightning"),g.qZA(),g.TgZ(7,"a",5),g.TgZ(8,"div",6),g._UZ(9,"img",7),g._uU(10,"Source"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(11,"div",8),g.TgZ(12,"p"),g._uU(13,"An "),g.TgZ(14,"em"),g._uU(15,"intuitive"),g.qZA(),g._uU(16,", "),g.TgZ(17,"em"),g._uU(18,"efficient"),g.qZA(),g._uU(19," and "),g.TgZ(20,"em"),g._uU(21,"fully accessible"),g.qZA(),g._uU(22," implementation of tabset/tabs."),g.qZA(),g.TgZ(23,"p"),g._uU(24,"Each pane is only instantiated while it is visible. Panes which are not visible are released and do not have associated memory, DOM and change detection cost. Nevertheless, if you want to change this behavior just set "),g.TgZ(25,"code"),g._uU(26,'lazy="false"'),g.qZA(),g._uU(27," to "),g.TgZ(28,"code"),g._uU(29,"<ngl-tabset>"),g.qZA(),g._uU(30,"."),g.qZA(),g.TgZ(31,"p"),g._uU(32,"Tab's header can contain HTML either by passing a template reference as "),g.TgZ(33,"code"),g._uU(34,"label"),g.qZA(),g._uU(35," or by using the more verbose syntax, with "),g.TgZ(36,"code"),g._uU(37,"<ngl-tab>"),g.qZA(),g._uU(38,", "),g.TgZ(39,"code"),g._uU(40,"<ngl-tab-label>"),g.qZA(),g._uU(41," and "),g.TgZ(42,"code"),g._uU(43,"<ngl-tab-content>"),g.qZA(),g._uU(44,"."),g.qZA(),g.TgZ(45,"p"),g.TgZ(46,"strong"),g._uU(47,"Accessibility and Keyboard interactions"),g.qZA(),g._uU(48,":"),g.qZA(),g.TgZ(49,"ul"),g.TgZ(50,"li"),g._uU(51,"Selected tab\u2019s anchor has "),g.TgZ(52,"code"),g._uU(53,'aria-selected="true"'),g.qZA(),g._uU(54," and "),g.TgZ(55,"code"),g._uU(56,'tabindex="0"'),g.qZA(),g._uU(57,", all other tabs\u2019 anchors have "),g.TgZ(58,"code"),g._uU(59,'aria-selected="false"'),g.qZA(),g._uU(60," and "),g.TgZ(61,"code"),g._uU(62,'tabindex="-1"'),g.qZA(),g.qZA(),g.TgZ(63,"li"),g._uU(64,"Arrow keys, when focus is on selected tab, cycle selection to the next or previous tab"),g.qZA(),g.TgZ(65,"li"),g.TgZ(66,"code"),g._uU(67,"Tab"),g.qZA(),g._uU(68," key, when focus is before the tab list, moves focus to the selected tab"),g.qZA(),g.TgZ(69,"li"),g.TgZ(70,"code"),g._uU(71,"Tab"),g.qZA(),g._uU(72," key, when focus is on selected tab, moves focus into the selected tab\u2019s associated tab panel or to the next focusable element on the page if that panel has no focusable elements"),g.qZA(),g.TgZ(73,"li"),g.TgZ(74,"code"),g._uU(75,"Shift+Tab"),g.qZA(),g._uU(76," keys, when focus is on first element in a tab panel, move focus to the selected tab"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(77,"div",9),g.TgZ(78,"h2",10),g._uU(79,"Examples"),g.qZA(),g.TgZ(80,"div",11),g.TgZ(81,"div",12),g._uU(82,"Basic Usage"),g.qZA(),g._UZ(83,"app-demo-tabs-basic"),g.YNc(84,b,512,0,"ng-template",null,13,g.W1O),g.YNc(86,m,362,16,"ng-template",null,14,g.W1O),g.TgZ(88,"div",15),g._UZ(89,"app-demo-example-docs",16),g.qZA(),g.qZA(),g.qZA(),g.TgZ(90,"div",9),g.TgZ(91,"h2",10),g._uU(92,"API"),g.qZA(),g.TgZ(93,"div",17),g.TgZ(94,"div",18),g.TgZ(95,"h3"),g._uU(96,"<ngl-tabset>"),g.qZA(),g.TgZ(97,"h4"),g._uU(98,"NglTabs"),g.qZA(),g.TgZ(99,"table"),g.TgZ(100,"thead"),g.TgZ(101,"tr"),g.TgZ(102,"th"),g._uU(103,"Property"),g.qZA(),g.TgZ(104,"th"),g._uU(105,"Description"),g.qZA(),g.TgZ(106,"th"),g._uU(107,"Type"),g.qZA(),g.TgZ(108,"th"),g._uU(109,"Default"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(110,"tbody"),g.TgZ(111,"tr"),g.TgZ(112,"td"),g.TgZ(113,"code"),g._uU(114,"[selected]"),g.qZA(),g.qZA(),g.TgZ(115,"td"),g._uU(116,"Desired tab to activate. This can be either the "),g.TgZ(117,"code"),g._uU(118,"index"),g.qZA(),g._uU(119," number, the tab's id "),g.TgZ(120,"em"),g._uU(121,'(id="myid")'),g.qZA(),g._uU(122," or the actual "),g.TgZ(123,"code"),g._uU(124,"NglTab"),g.qZA(),g._uU(125," instance."),g.qZA(),g.TgZ(126,"td"),g._uU(127,"string | number | NglTab"),g.qZA(),g._UZ(128,"td"),g.qZA(),g.TgZ(129,"tr"),g.TgZ(130,"td"),g.TgZ(131,"code"),g._uU(132,"[variant]"),g.qZA(),g.qZA(),g.TgZ(133,"td"),g._uU(134,"Whether the tabset is "),g.TgZ(135,"a",19),g._uU(136,"scoped"),g.qZA(),g._uU(137," or not."),g.qZA(),g.TgZ(138,"td"),g._uU(139,"'default' | 'scoped'"),g.qZA(),g.TgZ(140,"td"),g._uU(141,"'default'"),g.qZA(),g.qZA(),g.TgZ(142,"tr"),g.TgZ(143,"td"),g.TgZ(144,"code"),g._uU(145,"[lazy]"),g.qZA(),g.qZA(),g.TgZ(146,"td"),g._uU(147,"Whether every tab's content is instantiated when visible, and destroyed when hidden."),g.qZA(),g.TgZ(148,"td"),g._uU(149,"boolean"),g.qZA(),g.TgZ(150,"td"),g._uU(151,"true"),g.qZA(),g.qZA(),g.TgZ(152,"tr"),g.TgZ(153,"td"),g.TgZ(154,"code"),g._uU(155,"(selectedChange)"),g.qZA(),g.qZA(),g.TgZ(156,"td"),g._uU(157,"Emits when a tab is selected."),g.qZA(),g.TgZ(158,"td"),g._uU(159,"EventEmitter<NglTab>"),g.qZA(),g._UZ(160,"td"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(161,"h3"),g._uU(162,"<ng-template ngl-tab> | <ngl-tab>"),g.qZA(),g.TgZ(163,"h4"),g._uU(164,"NglTab"),g.qZA(),g.TgZ(165,"table"),g.TgZ(166,"thead"),g.TgZ(167,"tr"),g.TgZ(168,"th"),g._uU(169,"Property"),g.qZA(),g.TgZ(170,"th"),g._uU(171,"Description"),g.qZA(),g.TgZ(172,"th"),g._uU(173,"Type"),g.qZA(),g.TgZ(174,"th"),g._uU(175,"Default"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(176,"tbody"),g.TgZ(177,"tr"),g.TgZ(178,"td"),g.TgZ(179,"code"),g._uU(180,"[label]"),g.qZA(),g.qZA(),g.TgZ(181,"td"),g._uU(182,"Header text."),g.qZA(),g.TgZ(183,"td"),g._uU(184,"string"),g.qZA(),g._UZ(185,"td"),g.qZA(),g.TgZ(186,"tr"),g.TgZ(187,"td"),g.TgZ(188,"code"),g._uU(189,"[id]"),g.qZA(),g.qZA(),g.TgZ(190,"td"),g._uU(191,"Tab's ID in case you want to preselect or programmatically manipulate it."),g.qZA(),g.TgZ(192,"td"),g._uU(193,"string"),g.qZA(),g._UZ(194,"td"),g.qZA(),g.TgZ(195,"tr"),g.TgZ(196,"td"),g.TgZ(197,"code"),g._uU(198,"(activate)"),g.qZA(),g.qZA(),g.TgZ(199,"td"),g._uU(200,"Emits when a tab is becomes active."),g.qZA(),g.TgZ(201,"td"),g._uU(202,"EventEmitter<NglTab>"),g.qZA(),g._UZ(203,"td"),g.qZA(),g.TgZ(204,"tr"),g.TgZ(205,"td"),g.TgZ(206,"code"),g._uU(207,"(deactivate)"),g.qZA(),g.qZA(),g.TgZ(208,"td"),g._uU(209,"Emits when a tab is becomes inactive."),g.qZA(),g.TgZ(210,"td"),g._uU(211,"EventEmitter<NglTab>"),g.qZA(),g._UZ(212,"td"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(213,"h3"),g._uU(214,"Only when using "),g.TgZ(215,"code"),g._uU(216,"<ngl-tab>"),g.qZA(),g.qZA(),g.TgZ(217,"ul"),g.TgZ(218,"li"),g.TgZ(219,"code"),g._uU(220,"<ng-template ngl-tab-label>"),g.qZA(),g._uU(221,": contains header's content"),g.qZA(),g.TgZ(222,"li"),g.TgZ(223,"code"),g._uU(224,"<ng-template ngl-tab-content>"),g.qZA(),g._uU(225,": contains tabs's content"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&Z){const Z=g.MAs(85),a=g.MAs(87);g.xp6(89),g.Q6J("ts",a)("markup",Z)}},directives:[c,r.k],encapsulation:2}),Z})()}];let v=(()=>{class Z{}return Z.\u0275fac=function(a){return new(a||Z)},Z.\u0275mod=g.oAB({type:Z}),Z.\u0275inj=g.cJS({imports:[[t.ez,u.Bz.forChild(h),s.Cl,s.C2,e.b]]}),Z})()}}]);