(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{wSHm:function(b,s,n){"use strict";n.r(s),n.d(s,"NglDemoProgressBarModule",(function(){return d}));var a=n("ofXK"),c=n("tyNb"),B=n("vc5p"),p=n("dH7C"),t=n("fXoL"),e=n("RTeE"),S=n("hk0e");let T=(()=>{class b{constructor(){this.value=40,this.variant=null,this.size="large",this.sizes=["x-small","small","medium","large"]}random(){this.value=Math.floor(100*Math.random()+1)}changeVariant(){this.variant=this.variant?null:"circular"}changeSize(){this.size=this.sizes[(this.sizes.indexOf(this.size)+1)%this.sizes.length]}}return b.\u0275fac=function(s){return new(s||b)},b.\u0275cmp=t.Gb({type:b,selectors:[["app-demo-progressbar-basic"]],decls:16,vars:4,consts:[[1,"slds-grid","slds-grid_align-spread","slds-p-bottom_x-small"],["aria-hidden","true"],[3,"value","size","variant"],[1,"slds-grid","slds-m-top_large",2,"height","50px"],[1,"slds-align-middle","slds-col"],["type","button","nglButton","",3,"click"]],template:function(b,s){1&b&&(t.Tb(0,"div"),t.Tb(1,"div",0),t.Tb(2,"span"),t.Bc(3,"Setup Assistant"),t.Sb(),t.Tb(4,"span",1),t.Tb(5,"strong"),t.Bc(6),t.Sb(),t.Sb(),t.Sb(),t.Ob(7,"ngl-progress-bar",2),t.Sb(),t.Tb(8,"div",3),t.Tb(9,"div",4),t.Tb(10,"button",5),t.cc("click",(function(){return s.random()})),t.Bc(11,"Randomize"),t.Sb(),t.Tb(12,"button",5),t.cc("click",(function(){return s.changeVariant()})),t.Bc(13,"Change Variant"),t.Sb(),t.Tb(14,"button",5),t.cc("click",(function(){return s.changeSize()})),t.Bc(15,"Change Size"),t.Sb(),t.Sb(),t.Sb()),2&b&&(t.Bb(6),t.Dc("",s.value,"% Complete"),t.Bb(1),t.mc("value",s.value)("size",s.size)("variant",s.variant))},directives:[e.a,S.a],encapsulation:2}),b})();var i=n("M6rV");function r(b,s){1&b&&(t.Bc(0,"\n      "),t.Tb(1,"pre",19),t.Nb(),t.Tb(2,"code"),t.Tb(3,"span",20),t.Tb(4,"span",20),t.Tb(5,"span",21),t.Bc(6,"<"),t.Sb(),t.Bc(7,"div"),t.Sb(),t.Tb(8,"span",21),t.Bc(9,">"),t.Sb(),t.Sb(),t.Bc(10,"\n  "),t.Tb(11,"span",20),t.Tb(12,"span",20),t.Tb(13,"span",21),t.Bc(14,"<"),t.Sb(),t.Bc(15,"div"),t.Sb(),t.Bc(16," "),t.Tb(17,"span",22),t.Bc(18,"class"),t.Sb(),t.Tb(19,"span",23),t.Tb(20,"span",24),t.Bc(21,"="),t.Sb(),t.Tb(22,"span",21),t.Bc(23,'"'),t.Sb(),t.Bc(24,"slds-grid slds-grid_align-spread slds-p-bottom_x-small"),t.Tb(25,"span",21),t.Bc(26,'"'),t.Sb(),t.Sb(),t.Tb(27,"span",21),t.Bc(28,">"),t.Sb(),t.Sb(),t.Tb(29,"span",20),t.Tb(30,"span",20),t.Tb(31,"span",21),t.Bc(32,"<"),t.Sb(),t.Bc(33,"span"),t.Sb(),t.Tb(34,"span",21),t.Bc(35,">"),t.Sb(),t.Sb(),t.Bc(36,"Setup Assistant"),t.Tb(37,"span",20),t.Tb(38,"span",20),t.Tb(39,"span",21),t.Bc(40,"</"),t.Sb(),t.Bc(41,"span"),t.Sb(),t.Tb(42,"span",21),t.Bc(43,">"),t.Sb(),t.Sb(),t.Tb(44,"span",20),t.Tb(45,"span",20),t.Tb(46,"span",21),t.Bc(47,"<"),t.Sb(),t.Bc(48,"span"),t.Sb(),t.Bc(49," "),t.Tb(50,"span",22),t.Bc(51,"aria-hidden"),t.Sb(),t.Tb(52,"span",23),t.Tb(53,"span",24),t.Bc(54,"="),t.Sb(),t.Tb(55,"span",21),t.Bc(56,'"'),t.Sb(),t.Bc(57,"true"),t.Tb(58,"span",21),t.Bc(59,'"'),t.Sb(),t.Sb(),t.Tb(60,"span",21),t.Bc(61,">"),t.Sb(),t.Sb(),t.Tb(62,"span",20),t.Tb(63,"span",20),t.Tb(64,"span",21),t.Bc(65,"<"),t.Sb(),t.Bc(66,"strong"),t.Sb(),t.Tb(67,"span",21),t.Bc(68,">"),t.Sb(),t.Sb(),t.Bc(69,"{{value}}% Complete"),t.Tb(70,"span",20),t.Tb(71,"span",20),t.Tb(72,"span",21),t.Bc(73,"</"),t.Sb(),t.Bc(74,"strong"),t.Sb(),t.Tb(75,"span",21),t.Bc(76,">"),t.Sb(),t.Sb(),t.Tb(77,"span",20),t.Tb(78,"span",20),t.Tb(79,"span",21),t.Bc(80,"</"),t.Sb(),t.Bc(81,"span"),t.Sb(),t.Tb(82,"span",21),t.Bc(83,">"),t.Sb(),t.Sb(),t.Tb(84,"span",20),t.Tb(85,"span",20),t.Tb(86,"span",21),t.Bc(87,"</"),t.Sb(),t.Bc(88,"div"),t.Sb(),t.Tb(89,"span",21),t.Bc(90,">"),t.Sb(),t.Sb(),t.Bc(91,"\n  "),t.Tb(92,"span",20),t.Tb(93,"span",20),t.Tb(94,"span",21),t.Bc(95,"<"),t.Sb(),t.Bc(96,"ngl-progress-bar"),t.Sb(),t.Bc(97," "),t.Tb(98,"span",22),t.Bc(99,"[value]"),t.Sb(),t.Tb(100,"span",23),t.Tb(101,"span",24),t.Bc(102,"="),t.Sb(),t.Tb(103,"span",21),t.Bc(104,'"'),t.Sb(),t.Bc(105,"value"),t.Tb(106,"span",21),t.Bc(107,'"'),t.Sb(),t.Sb(),t.Bc(108," "),t.Tb(109,"span",22),t.Bc(110,"[size]"),t.Sb(),t.Tb(111,"span",23),t.Tb(112,"span",24),t.Bc(113,"="),t.Sb(),t.Tb(114,"span",21),t.Bc(115,'"'),t.Sb(),t.Bc(116,"size"),t.Tb(117,"span",21),t.Bc(118,'"'),t.Sb(),t.Sb(),t.Bc(119," "),t.Tb(120,"span",22),t.Bc(121,"[variant]"),t.Sb(),t.Tb(122,"span",23),t.Tb(123,"span",24),t.Bc(124,"="),t.Sb(),t.Tb(125,"span",21),t.Bc(126,'"'),t.Sb(),t.Bc(127,"variant"),t.Tb(128,"span",21),t.Bc(129,'"'),t.Sb(),t.Sb(),t.Tb(130,"span",21),t.Bc(131,">"),t.Sb(),t.Sb(),t.Tb(132,"span",20),t.Tb(133,"span",20),t.Tb(134,"span",21),t.Bc(135,"</"),t.Sb(),t.Bc(136,"ngl-progress-bar"),t.Sb(),t.Tb(137,"span",21),t.Bc(138,">"),t.Sb(),t.Sb(),t.Bc(139,"\n"),t.Tb(140,"span",20),t.Tb(141,"span",20),t.Tb(142,"span",21),t.Bc(143,"</"),t.Sb(),t.Bc(144,"div"),t.Sb(),t.Tb(145,"span",21),t.Bc(146,">"),t.Sb(),t.Sb(),t.Bc(147,"\n"),t.Tb(148,"span",20),t.Tb(149,"span",20),t.Tb(150,"span",21),t.Bc(151,"<"),t.Sb(),t.Bc(152,"div"),t.Sb(),t.Bc(153," "),t.Tb(154,"span",22),t.Bc(155,"class"),t.Sb(),t.Tb(156,"span",23),t.Tb(157,"span",24),t.Bc(158,"="),t.Sb(),t.Tb(159,"span",21),t.Bc(160,'"'),t.Sb(),t.Bc(161,"slds-grid slds-m-top_large"),t.Tb(162,"span",21),t.Bc(163,'"'),t.Sb(),t.Sb(),t.Bc(164," "),t.Tb(165,"span",25),t.Tb(166,"span",22),t.Bc(167,"style"),t.Sb(),t.Tb(168,"span",23),t.Tb(169,"span",24),t.Bc(170,"="),t.Sb(),t.Tb(171,"span",21),t.Bc(172,'"'),t.Sb(),t.Tb(173,"span",26),t.Tb(174,"span",27),t.Bc(175,"height"),t.Sb(),t.Tb(176,"span",21),t.Bc(177,":"),t.Sb(),t.Bc(178," 50px"),t.Tb(179,"span",21),t.Bc(180,";"),t.Sb(),t.Sb(),t.Tb(181,"span",21),t.Bc(182,'"'),t.Sb(),t.Sb(),t.Sb(),t.Tb(183,"span",21),t.Bc(184,">"),t.Sb(),t.Sb(),t.Bc(185,"\n  "),t.Tb(186,"span",20),t.Tb(187,"span",20),t.Tb(188,"span",21),t.Bc(189,"<"),t.Sb(),t.Bc(190,"div"),t.Sb(),t.Bc(191," "),t.Tb(192,"span",22),t.Bc(193,"class"),t.Sb(),t.Tb(194,"span",23),t.Tb(195,"span",24),t.Bc(196,"="),t.Sb(),t.Tb(197,"span",21),t.Bc(198,'"'),t.Sb(),t.Bc(199,"slds-align-middle slds-col"),t.Tb(200,"span",21),t.Bc(201,'"'),t.Sb(),t.Sb(),t.Tb(202,"span",21),t.Bc(203,">"),t.Sb(),t.Sb(),t.Bc(204,"\n    "),t.Tb(205,"span",20),t.Tb(206,"span",20),t.Tb(207,"span",21),t.Bc(208,"<"),t.Sb(),t.Bc(209,"button"),t.Sb(),t.Bc(210," "),t.Tb(211,"span",22),t.Bc(212,"type"),t.Sb(),t.Tb(213,"span",23),t.Tb(214,"span",24),t.Bc(215,"="),t.Sb(),t.Tb(216,"span",21),t.Bc(217,'"'),t.Sb(),t.Bc(218,"button"),t.Tb(219,"span",21),t.Bc(220,'"'),t.Sb(),t.Sb(),t.Bc(221," "),t.Tb(222,"span",22),t.Bc(223,"nglButton"),t.Sb(),t.Bc(224," "),t.Tb(225,"span",22),t.Bc(226,"(click)"),t.Sb(),t.Tb(227,"span",23),t.Tb(228,"span",24),t.Bc(229,"="),t.Sb(),t.Tb(230,"span",21),t.Bc(231,'"'),t.Sb(),t.Bc(232,"random()"),t.Tb(233,"span",21),t.Bc(234,'"'),t.Sb(),t.Sb(),t.Tb(235,"span",21),t.Bc(236,">"),t.Sb(),t.Sb(),t.Bc(237,"Randomize"),t.Tb(238,"span",20),t.Tb(239,"span",20),t.Tb(240,"span",21),t.Bc(241,"</"),t.Sb(),t.Bc(242,"button"),t.Sb(),t.Tb(243,"span",21),t.Bc(244,">"),t.Sb(),t.Sb(),t.Bc(245,"\n    "),t.Tb(246,"span",20),t.Tb(247,"span",20),t.Tb(248,"span",21),t.Bc(249,"<"),t.Sb(),t.Bc(250,"button"),t.Sb(),t.Bc(251," "),t.Tb(252,"span",22),t.Bc(253,"type"),t.Sb(),t.Tb(254,"span",23),t.Tb(255,"span",24),t.Bc(256,"="),t.Sb(),t.Tb(257,"span",21),t.Bc(258,'"'),t.Sb(),t.Bc(259,"button"),t.Tb(260,"span",21),t.Bc(261,'"'),t.Sb(),t.Sb(),t.Bc(262," "),t.Tb(263,"span",22),t.Bc(264,"nglButton"),t.Sb(),t.Bc(265," "),t.Tb(266,"span",22),t.Bc(267,"(click)"),t.Sb(),t.Tb(268,"span",23),t.Tb(269,"span",24),t.Bc(270,"="),t.Sb(),t.Tb(271,"span",21),t.Bc(272,'"'),t.Sb(),t.Bc(273,"changeVariant()"),t.Tb(274,"span",21),t.Bc(275,'"'),t.Sb(),t.Sb(),t.Tb(276,"span",21),t.Bc(277,">"),t.Sb(),t.Sb(),t.Bc(278,"Change Variant"),t.Tb(279,"span",20),t.Tb(280,"span",20),t.Tb(281,"span",21),t.Bc(282,"</"),t.Sb(),t.Bc(283,"button"),t.Sb(),t.Tb(284,"span",21),t.Bc(285,">"),t.Sb(),t.Sb(),t.Bc(286,"\n    "),t.Tb(287,"span",20),t.Tb(288,"span",20),t.Tb(289,"span",21),t.Bc(290,"<"),t.Sb(),t.Bc(291,"button"),t.Sb(),t.Bc(292," "),t.Tb(293,"span",22),t.Bc(294,"type"),t.Sb(),t.Tb(295,"span",23),t.Tb(296,"span",24),t.Bc(297,"="),t.Sb(),t.Tb(298,"span",21),t.Bc(299,'"'),t.Sb(),t.Bc(300,"button"),t.Tb(301,"span",21),t.Bc(302,'"'),t.Sb(),t.Sb(),t.Bc(303," "),t.Tb(304,"span",22),t.Bc(305,"nglButton"),t.Sb(),t.Bc(306," "),t.Tb(307,"span",22),t.Bc(308,"(click)"),t.Sb(),t.Tb(309,"span",23),t.Tb(310,"span",24),t.Bc(311,"="),t.Sb(),t.Tb(312,"span",21),t.Bc(313,'"'),t.Sb(),t.Bc(314,"changeSize()"),t.Tb(315,"span",21),t.Bc(316,'"'),t.Sb(),t.Sb(),t.Tb(317,"span",21),t.Bc(318,">"),t.Sb(),t.Sb(),t.Bc(319,"Change Size"),t.Tb(320,"span",20),t.Tb(321,"span",20),t.Tb(322,"span",21),t.Bc(323,"</"),t.Sb(),t.Bc(324,"button"),t.Sb(),t.Tb(325,"span",21),t.Bc(326,">"),t.Sb(),t.Sb(),t.Bc(327,"\n  "),t.Tb(328,"span",20),t.Tb(329,"span",20),t.Tb(330,"span",21),t.Bc(331,"</"),t.Sb(),t.Bc(332,"div"),t.Sb(),t.Tb(333,"span",21),t.Bc(334,">"),t.Sb(),t.Sb(),t.Bc(335,"\n"),t.Tb(336,"span",20),t.Tb(337,"span",20),t.Tb(338,"span",21),t.Bc(339,"</"),t.Sb(),t.Bc(340,"div"),t.Sb(),t.Tb(341,"span",21),t.Bc(342,">"),t.Sb(),t.Sb(),t.Sb(),t.Ub(),t.Sb(),t.Bc(343,"\n    "))}function l(b,s){1&b&&(t.Bc(0,"\n      "),t.Tb(1,"pre",28),t.Tb(2,"code"),t.Tb(3,"span",29),t.Bc(4,"import"),t.Sb(),t.Bc(5," "),t.Tb(6,"span",21),t.Bc(7),t.Sb(),t.Bc(8," Component "),t.Tb(9,"span",21),t.Bc(10),t.Sb(),t.Bc(11," "),t.Tb(12,"span",29),t.Bc(13,"from"),t.Sb(),t.Bc(14," "),t.Tb(15,"span",30),t.Bc(16,"'@angular/core'"),t.Sb(),t.Tb(17,"span",21),t.Bc(18,";"),t.Sb(),t.Bc(19,"\n\n@"),t.Tb(20,"span",31),t.Bc(21,"Component"),t.Sb(),t.Tb(22,"span",21),t.Bc(23,"("),t.Sb(),t.Tb(24,"span",21),t.Bc(25),t.Sb(),t.Bc(26,"\n  selector"),t.Tb(27,"span",32),t.Bc(28,":"),t.Sb(),t.Bc(29," "),t.Tb(30,"span",30),t.Bc(31,"'app-demo-progressbar-basic'"),t.Sb(),t.Tb(32,"span",21),t.Bc(33,","),t.Sb(),t.Bc(34,"\n  templateUrl"),t.Tb(35,"span",32),t.Bc(36,":"),t.Sb(),t.Bc(37," "),t.Tb(38,"span",30),t.Bc(39,"'./basic.html'"),t.Sb(),t.Tb(40,"span",21),t.Bc(41,","),t.Sb(),t.Bc(42,"\n"),t.Tb(43,"span",21),t.Bc(44),t.Sb(),t.Tb(45,"span",21),t.Bc(46,")"),t.Sb(),t.Bc(47,"\n"),t.Tb(48,"span",29),t.Bc(49,"export"),t.Sb(),t.Bc(50," "),t.Tb(51,"span",29),t.Bc(52,"class"),t.Sb(),t.Bc(53," "),t.Tb(54,"span",33),t.Bc(55,"DemoProgressBarBasic"),t.Sb(),t.Bc(56," "),t.Tb(57,"span",21),t.Bc(58),t.Sb(),t.Bc(59,"\n\n  value "),t.Tb(60,"span",32),t.Bc(61,"="),t.Sb(),t.Bc(62," "),t.Tb(63,"span",34),t.Bc(64,"40"),t.Sb(),t.Tb(65,"span",21),t.Bc(66,";"),t.Sb(),t.Bc(67,"\n  variant"),t.Tb(68,"span",32),t.Bc(69,":"),t.Sb(),t.Bc(70," "),t.Tb(71,"span",35),t.Bc(72,"string"),t.Sb(),t.Bc(73," "),t.Tb(74,"span",32),t.Bc(75,"="),t.Sb(),t.Bc(76," "),t.Tb(77,"span",29),t.Bc(78,"null"),t.Sb(),t.Tb(79,"span",21),t.Bc(80,";"),t.Sb(),t.Bc(81,"\n  size "),t.Tb(82,"span",32),t.Bc(83,"="),t.Sb(),t.Bc(84," "),t.Tb(85,"span",30),t.Bc(86,"'large'"),t.Sb(),t.Tb(87,"span",21),t.Bc(88,";"),t.Sb(),t.Bc(89,"\n\n  "),t.Tb(90,"span",29),t.Bc(91,"private"),t.Sb(),t.Bc(92," sizes"),t.Tb(93,"span",32),t.Bc(94,":"),t.Sb(),t.Bc(95," "),t.Tb(96,"span",35),t.Bc(97,"string"),t.Sb(),t.Tb(98,"span",21),t.Bc(99,"["),t.Sb(),t.Tb(100,"span",21),t.Bc(101,"]"),t.Sb(),t.Bc(102," "),t.Tb(103,"span",32),t.Bc(104,"="),t.Sb(),t.Bc(105," "),t.Tb(106,"span",21),t.Bc(107,"["),t.Sb(),t.Tb(108,"span",30),t.Bc(109,"'x-small'"),t.Sb(),t.Tb(110,"span",21),t.Bc(111,","),t.Sb(),t.Bc(112," "),t.Tb(113,"span",30),t.Bc(114,"'small'"),t.Sb(),t.Tb(115,"span",21),t.Bc(116,","),t.Sb(),t.Bc(117," "),t.Tb(118,"span",30),t.Bc(119,"'medium'"),t.Sb(),t.Tb(120,"span",21),t.Bc(121,","),t.Sb(),t.Bc(122," "),t.Tb(123,"span",30),t.Bc(124,"'large'"),t.Sb(),t.Tb(125,"span",21),t.Bc(126,"]"),t.Sb(),t.Tb(127,"span",21),t.Bc(128,";"),t.Sb(),t.Bc(129,"\n\n  "),t.Tb(130,"span",31),t.Bc(131,"random"),t.Sb(),t.Tb(132,"span",21),t.Bc(133,"("),t.Sb(),t.Tb(134,"span",21),t.Bc(135,")"),t.Sb(),t.Bc(136," "),t.Tb(137,"span",21),t.Bc(138),t.Sb(),t.Bc(139,"\n    "),t.Tb(140,"span",29),t.Bc(141,"this"),t.Sb(),t.Tb(142,"span",21),t.Bc(143,"."),t.Sb(),t.Bc(144,"value "),t.Tb(145,"span",32),t.Bc(146,"="),t.Sb(),t.Bc(147," Math"),t.Tb(148,"span",21),t.Bc(149,"."),t.Sb(),t.Tb(150,"span",31),t.Bc(151,"floor"),t.Sb(),t.Tb(152,"span",21),t.Bc(153,"("),t.Sb(),t.Bc(154,"Math"),t.Tb(155,"span",21),t.Bc(156,"."),t.Sb(),t.Tb(157,"span",31),t.Bc(158,"random"),t.Sb(),t.Tb(159,"span",21),t.Bc(160,"("),t.Sb(),t.Tb(161,"span",21),t.Bc(162,")"),t.Sb(),t.Bc(163," "),t.Tb(164,"span",32),t.Bc(165,"*"),t.Sb(),t.Bc(166," "),t.Tb(167,"span",34),t.Bc(168,"100"),t.Sb(),t.Bc(169," "),t.Tb(170,"span",32),t.Bc(171,"+"),t.Sb(),t.Bc(172," "),t.Tb(173,"span",34),t.Bc(174,"1"),t.Sb(),t.Tb(175,"span",21),t.Bc(176,")"),t.Sb(),t.Tb(177,"span",21),t.Bc(178,";"),t.Sb(),t.Bc(179,"\n  "),t.Tb(180,"span",21),t.Bc(181),t.Sb(),t.Bc(182,"\n\n  "),t.Tb(183,"span",31),t.Bc(184,"changeVariant"),t.Sb(),t.Tb(185,"span",21),t.Bc(186,"("),t.Sb(),t.Tb(187,"span",21),t.Bc(188,")"),t.Sb(),t.Bc(189," "),t.Tb(190,"span",21),t.Bc(191),t.Sb(),t.Bc(192,"\n    "),t.Tb(193,"span",29),t.Bc(194,"this"),t.Sb(),t.Tb(195,"span",21),t.Bc(196,"."),t.Sb(),t.Bc(197,"variant "),t.Tb(198,"span",32),t.Bc(199,"="),t.Sb(),t.Bc(200," "),t.Tb(201,"span",29),t.Bc(202,"this"),t.Sb(),t.Tb(203,"span",21),t.Bc(204,"."),t.Sb(),t.Bc(205,"variant "),t.Tb(206,"span",32),t.Bc(207,"?"),t.Sb(),t.Bc(208," "),t.Tb(209,"span",29),t.Bc(210,"null"),t.Sb(),t.Bc(211," "),t.Tb(212,"span",32),t.Bc(213,":"),t.Sb(),t.Bc(214," "),t.Tb(215,"span",30),t.Bc(216,"'circular'"),t.Sb(),t.Tb(217,"span",21),t.Bc(218,";"),t.Sb(),t.Bc(219,"\n  "),t.Tb(220,"span",21),t.Bc(221),t.Sb(),t.Bc(222,"\n\n  "),t.Tb(223,"span",31),t.Bc(224,"changeSize"),t.Sb(),t.Tb(225,"span",21),t.Bc(226,"("),t.Sb(),t.Tb(227,"span",21),t.Bc(228,")"),t.Sb(),t.Bc(229," "),t.Tb(230,"span",21),t.Bc(231),t.Sb(),t.Bc(232,"\n    "),t.Tb(233,"span",29),t.Bc(234,"this"),t.Sb(),t.Tb(235,"span",21),t.Bc(236,"."),t.Sb(),t.Bc(237,"size "),t.Tb(238,"span",32),t.Bc(239,"="),t.Sb(),t.Bc(240," "),t.Tb(241,"span",29),t.Bc(242,"this"),t.Sb(),t.Tb(243,"span",21),t.Bc(244,"."),t.Sb(),t.Bc(245,"sizes"),t.Tb(246,"span",21),t.Bc(247,"["),t.Sb(),t.Tb(248,"span",21),t.Bc(249,"("),t.Sb(),t.Tb(250,"span",29),t.Bc(251,"this"),t.Sb(),t.Tb(252,"span",21),t.Bc(253,"."),t.Sb(),t.Bc(254,"sizes"),t.Tb(255,"span",21),t.Bc(256,"."),t.Sb(),t.Tb(257,"span",31),t.Bc(258,"indexOf"),t.Sb(),t.Tb(259,"span",21),t.Bc(260,"("),t.Sb(),t.Tb(261,"span",29),t.Bc(262,"this"),t.Sb(),t.Tb(263,"span",21),t.Bc(264,"."),t.Sb(),t.Bc(265,"size"),t.Tb(266,"span",21),t.Bc(267,")"),t.Sb(),t.Bc(268," "),t.Tb(269,"span",32),t.Bc(270,"+"),t.Sb(),t.Bc(271," "),t.Tb(272,"span",34),t.Bc(273,"1"),t.Sb(),t.Tb(274,"span",21),t.Bc(275,")"),t.Sb(),t.Bc(276," "),t.Tb(277,"span",32),t.Bc(278,"%"),t.Sb(),t.Bc(279," "),t.Tb(280,"span",29),t.Bc(281,"this"),t.Sb(),t.Tb(282,"span",21),t.Bc(283,"."),t.Sb(),t.Bc(284,"sizes"),t.Tb(285,"span",21),t.Bc(286,"."),t.Sb(),t.Bc(287,"length"),t.Tb(288,"span",21),t.Bc(289,"]"),t.Sb(),t.Tb(290,"span",21),t.Bc(291,";"),t.Sb(),t.Bc(292,"\n  "),t.Tb(293,"span",21),t.Bc(294),t.Sb(),t.Bc(295,"\n"),t.Tb(296,"span",21),t.Bc(297),t.Sb(),t.Bc(298,"\n"),t.Sb(),t.Sb(),t.Bc(299,"\n    ")),2&b&&(t.Bb(7),t.Cc("{"),t.Bb(3),t.Cc("}"),t.Bb(15),t.Cc("{"),t.Bb(19),t.Cc("}"),t.Bb(14),t.Cc("{"),t.Bb(80),t.Cc("{"),t.Bb(43),t.Cc("}"),t.Bb(10),t.Cc("{"),t.Bb(30),t.Cc("}"),t.Bb(10),t.Cc("{"),t.Bb(63),t.Cc("}"),t.Bb(3),t.Cc("}"))}const o=[{path:"",component:(()=>{class b{}return b.\u0275fac=function(s){return new(s||b)},b.\u0275cmp=t.Gb({type:b,selectors:[["app-demo-progressbar"]],decls:76,vars:2,consts:[[1,"component__header","slds-border_bottom","slds-grid","slds-wrap","slds-m-bottom_medium"],[1,"slds-has-flexi-truncate","slds-align-middle"],[2,"text-transform","capitalize"],[1,"slds-align-middle","slds-text-body_small"],["href","https://www.lightningdesignsystem.com/components/progress-bar","title","External link to Salesforce Lightning Design System Site","target","_blank",1,"slds-button","slds-button_neutral"],["href","https://github.com/ng-lightning/ng-lightning/tree/master/projects/ng-lightning/src/lib/progressbar","target","_blank",1,"slds-button","slds-button_neutral"],[1,"slds-grid","slds-grid_vertical-align-center"],["src","assets/images/github.svg",2,"height","15px","width","15px","margin-right","0.5rem"],[1,"slds-m-vertical_medium","readme"],[1,"slds-m-vertical_medium"],[1,"callout"],[1,"slds-box","slds-is-relative","slds-theme_default","slds-m-bottom_large",2,"padding-top","1.5rem"],[1,"example__header","slds-text-heading_small"],["markupbasic",""],["tsbasic",""],[1,"slds-is-relative","slds-m-top_large",2,"min-height","25px"],["dir","progressbar","file","basic","tsRaw","import%20%7B%20Component%20%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-demo-progressbar-basic'%2C%0A%20%20templateUrl%3A%20'.%2Fbasic.html'%2C%0A%7D)%0Aexport%20class%20DemoProgressBarBasic%20%7B%0A%0A%20%20value%20%3D%2040%3B%0A%20%20variant%3A%20string%20%3D%20null%3B%0A%20%20size%20%3D%20'large'%3B%0A%0A%20%20private%20sizes%3A%20string%5B%5D%20%3D%20%5B'x-small'%2C%20'small'%2C%20'medium'%2C%20'large'%5D%3B%0A%0A%20%20random()%20%7B%0A%20%20%20%20this.value%20%3D%20Math.floor(Math.random()%20*%20100%20%2B%201)%3B%0A%20%20%7D%0A%0A%20%20changeVariant()%20%7B%0A%20%20%20%20this.variant%20%3D%20this.variant%20%3F%20null%20%3A%20'circular'%3B%0A%20%20%7D%0A%0A%20%20changeSize()%20%7B%0A%20%20%20%20this.size%20%3D%20this.sizes%5B(this.sizes.indexOf(this.size)%20%2B%201)%20%25%20this.sizes.length%5D%3B%0A%20%20%7D%0A%7D%0A","markupRaw","%0A%3Cdiv%3E%0A%20%20%3Cdiv%20class%3D%22slds-grid%20slds-grid_align-spread%20slds-p-bottom_x-small%22%3E%3Cspan%3ESetup%20Assistant%3C%2Fspan%3E%3Cspan%20aria-hidden%3D%22true%22%3E%3Cstrong%3E%7B%7Bvalue%7D%7D%25%20Complete%3C%2Fstrong%3E%3C%2Fspan%3E%3C%2Fdiv%3E%0A%20%20%3Cngl-progress-bar%20%5Bvalue%5D%3D%22value%22%20%5Bsize%5D%3D%22size%22%20%5Bvariant%5D%3D%22variant%22%3E%3C%2Fngl-progress-bar%3E%0A%3C%2Fdiv%3E%0A%3Cdiv%20class%3D%22slds-grid%20slds-m-top_large%22%20style%3D%22height%3A%2050px%3B%22%3E%0A%20%20%3Cdiv%20class%3D%22slds-align-middle%20slds-col%22%3E%0A%20%20%20%20%3Cbutton%20type%3D%22button%22%20nglButton%20(click)%3D%22random()%22%3ERandomize%3C%2Fbutton%3E%0A%20%20%20%20%3Cbutton%20type%3D%22button%22%20nglButton%20(click)%3D%22changeVariant()%22%3EChange%20Variant%3C%2Fbutton%3E%0A%20%20%20%20%3Cbutton%20type%3D%22button%22%20nglButton%20(click)%3D%22changeSize()%22%3EChange%20Size%3C%2Fbutton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E",3,"ts","markup"],[1,"slds-box","slds-theme_default"],[1,"api"],[1,"language-markup"],[1,"token","tag"],[1,"token","punctuation"],[1,"token","attr-name"],[1,"token","attr-value"],[1,"token","punctuation","attr-equals"],[1,"token","style-attr"],[1,"token","style","language-css"],[1,"token","property"],[1,"language-typescript"],[1,"token","keyword"],[1,"token","string"],[1,"token","function"],[1,"token","operator"],[1,"token","class-name"],[1,"token","number"],[1,"token","builtin"]],template:function(b,s){if(1&b&&(t.Tb(0,"header",0),t.Tb(1,"div",1),t.Tb(2,"h1",2),t.Bc(3," Progress Bar "),t.Sb(),t.Sb(),t.Tb(4,"div",3),t.Tb(5,"a",4),t.Bc(6,"Lightning"),t.Sb(),t.Tb(7,"a",5),t.Tb(8,"div",6),t.Ob(9,"img",7),t.Bc(10,"Source"),t.Sb(),t.Sb(),t.Sb(),t.Sb(),t.Tb(11,"div",8),t.Tb(12,"p"),t.Bc(13,"A progress bar component communicates to the user the progress of a particular process."),t.Sb(),t.Sb(),t.Tb(14,"div",9),t.Tb(15,"h2",10),t.Bc(16,"Examples"),t.Sb(),t.Tb(17,"div",11),t.Tb(18,"div",12),t.Bc(19,"Basic Usage"),t.Sb(),t.Ob(20,"app-demo-progressbar-basic"),t.zc(21,r,344,0,"ng-template",null,13,t.Ac),t.zc(23,l,300,12,"ng-template",null,14,t.Ac),t.Tb(25,"div",15),t.Ob(26,"app-demo-example-docs",16),t.Sb(),t.Sb(),t.Sb(),t.Tb(27,"div",9),t.Tb(28,"h2",10),t.Bc(29,"API"),t.Sb(),t.Tb(30,"div",17),t.Tb(31,"div",18),t.Tb(32,"h3"),t.Bc(33,"<ngl-progress-bar>"),t.Sb(),t.Tb(34,"h4"),t.Bc(35,"NglProgressBar"),t.Sb(),t.Tb(36,"table"),t.Tb(37,"thead"),t.Tb(38,"tr"),t.Tb(39,"th"),t.Bc(40,"Property"),t.Sb(),t.Tb(41,"th"),t.Bc(42,"Description"),t.Sb(),t.Tb(43,"th"),t.Bc(44,"Type"),t.Sb(),t.Tb(45,"th"),t.Bc(46,"Default"),t.Sb(),t.Sb(),t.Sb(),t.Tb(47,"tbody"),t.Tb(48,"tr"),t.Tb(49,"td"),t.Tb(50,"code"),t.Bc(51,"[value]"),t.Sb(),t.Sb(),t.Tb(52,"td"),t.Bc(53,"The percentage value."),t.Sb(),t.Tb(54,"td"),t.Bc(55,"number"),t.Sb(),t.Ob(56,"td"),t.Sb(),t.Tb(57,"tr"),t.Tb(58,"td"),t.Tb(59,"code"),t.Bc(60,"[size]"),t.Sb(),t.Sb(),t.Tb(61,"td"),t.Bc(62,"Size of the progress bar."),t.Sb(),t.Tb(63,"td"),t.Bc(64,"'x-small' | 'small' | 'medium' | 'large'"),t.Sb(),t.Tb(65,"td"),t.Bc(66,"'medium'"),t.Sb(),t.Sb(),t.Tb(67,"tr"),t.Tb(68,"td"),t.Tb(69,"code"),t.Bc(70,"[variant]"),t.Sb(),t.Sb(),t.Tb(71,"td"),t.Bc(72,"Variant appearance of the progress bar."),t.Sb(),t.Tb(73,"td"),t.Bc(74,"'circular'"),t.Sb(),t.Ob(75,"td"),t.Sb(),t.Sb(),t.Sb(),t.Sb(),t.Sb(),t.Sb()),2&b){const b=t.rc(22),s=t.rc(24);t.Bb(26),t.mc("ts",s)("markup",b)}},directives:[T,i.a],encapsulation:2}),b})()}];let d=(()=>{class b{}return b.\u0275mod=t.Kb({type:b}),b.\u0275inj=t.Jb({factory:function(s){return new(s||b)},imports:[[a.c,c.c.forChild(o),B.C,B.k,p.a]]}),b})()}}]);