(self.webpackChunkng_lightning_app=self.webpackChunkng_lightning_app||[]).push([[564],{50564:function(Z,n,s){"use strict";s.r(n),s.d(n,{NglDemoFilesModule:function(){return T}});var a=s(61116),t=s(20563),e=s(76058),u=s(42519),g=s(87368),p=s(83944);let i=(()=>{class Z{constructor(Z,n){this.element=Z,this.renderer=n,this.cropClass="slds-file__crop"}set nglFileCrop(Z){const n=this.element.nativeElement;this.currentRatio&&(this.renderer.removeClass(n,`${this.cropClass}`),this.renderer.removeClass(n,`${this.cropClass}_${this.currentRatio}`)),Z&&(this.renderer.addClass(n,`${this.cropClass}`),this.renderer.addClass(n,`${this.cropClass}_${Z}`)),this.currentRatio=Z}}return Z.\u0275fac=function(n){return new(n||Z)(g.Y36(g.SBq),g.Y36(g.Qsj))},Z.\u0275dir=g.lG2({type:Z,selectors:[["","nglFileCrop",""]],inputs:{nglFileCrop:"nglFileCrop"}}),Z})();var _=s(48881);let U=(()=>{class Z{constructor(){this.showFilename=!0,this.ratio="16-by-9",this.icon="doctype:pdf",this.ratios=["","16-by-9","4-by-3","1-by-1"]}changeRatio(){this.ratio=this.ratios[(this.ratios.indexOf(this.ratio)+1)%this.ratios.length]}toggleFilename(){this.showFilename=!this.showFilename}}return Z.\u0275fac=function(n){return new(n||Z)},Z.\u0275cmp=g.Xpm({type:Z,selectors:[["app-demo-files-basic"]],decls:8,vars:3,consts:[[1,"slds-m-vertical_medium",2,"width","20rem"],[3,"text","iconName"],["href","javascript:void(0)",3,"nglFileCrop"],["src","https://www.lightningdesignsystem.com/assets/images/placeholder-img@16x9.jpg"],["type","button","nglButton","",3,"click"]],template:function(Z,n){1&Z&&(g.TgZ(0,"div",0),g.TgZ(1,"ngl-file",1),g.TgZ(2,"a",2),g._UZ(3,"img",3),g.qZA(),g.qZA(),g.qZA(),g.TgZ(4,"button",4),g.NdJ("click",function(){return n.changeRatio()}),g._uU(5,"Change Ratio"),g.qZA(),g.TgZ(6,"button",4),g.NdJ("click",function(){return n.toggleFilename()}),g._uU(7,"Toggle filename"),g.qZA()),2&Z&&(g.xp6(1),g.Q6J("text",n.showFilename?"file "+n.ratio:null)("iconName",n.icon),g.xp6(1),g.Q6J("nglFileCrop",n.ratio))},directives:[p.d,i,_.u],encapsulation:2}),Z})();var A=s(58034);function q(Z,n){1&Z&&(g._uU(0,"\n      "),g.TgZ(1,"pre",19),g.IAx(),g.TgZ(2,"code"),g.TgZ(3,"span",20),g.TgZ(4,"span",20),g.TgZ(5,"span",21),g._uU(6,"<"),g.qZA(),g._uU(7,"div"),g.qZA(),g._uU(8," "),g.TgZ(9,"span",22),g._uU(10,"class"),g.qZA(),g.TgZ(11,"span",23),g.TgZ(12,"span",24),g._uU(13,"="),g.qZA(),g.TgZ(14,"span",21),g._uU(15,'"'),g.qZA(),g._uU(16,"slds-m-vertical_medium"),g.TgZ(17,"span",21),g._uU(18,'"'),g.qZA(),g.qZA(),g._uU(19," "),g.TgZ(20,"span",25),g.TgZ(21,"span",22),g._uU(22,"style"),g.qZA(),g.TgZ(23,"span",23),g.TgZ(24,"span",24),g._uU(25,"="),g.qZA(),g.TgZ(26,"span",21),g._uU(27,'"'),g.qZA(),g.TgZ(28,"span",26),g.TgZ(29,"span",27),g._uU(30,"width"),g.qZA(),g.TgZ(31,"span",21),g._uU(32,":"),g.qZA(),g._uU(33," 20rem"),g.TgZ(34,"span",21),g._uU(35,";"),g.qZA(),g.qZA(),g.TgZ(36,"span",21),g._uU(37,'"'),g.qZA(),g.qZA(),g.qZA(),g.TgZ(38,"span",21),g._uU(39,">"),g.qZA(),g.qZA(),g._uU(40,"\n  "),g.TgZ(41,"span",20),g.TgZ(42,"span",20),g.TgZ(43,"span",21),g._uU(44,"<"),g.qZA(),g._uU(45,"ngl-file"),g.qZA(),g._uU(46," "),g.TgZ(47,"span",22),g._uU(48,"[text]"),g.qZA(),g.TgZ(49,"span",23),g.TgZ(50,"span",24),g._uU(51,"="),g.qZA(),g.TgZ(52,"span",21),g._uU(53,'"'),g.qZA(),g._uU(54,"showFilename ? "),g.TgZ(55,"span",21),g._uU(56,"'"),g.qZA(),g._uU(57,"file "),g.TgZ(58,"span",21),g._uU(59,"'"),g.qZA(),g._uU(60," + ratio : null"),g.TgZ(61,"span",21),g._uU(62,'"'),g.qZA(),g.qZA(),g._uU(63," "),g.TgZ(64,"span",22),g._uU(65,"[iconName]"),g.qZA(),g.TgZ(66,"span",23),g.TgZ(67,"span",24),g._uU(68,"="),g.qZA(),g.TgZ(69,"span",21),g._uU(70,'"'),g.qZA(),g._uU(71,"icon"),g.TgZ(72,"span",21),g._uU(73,'"'),g.qZA(),g.qZA(),g.TgZ(74,"span",21),g._uU(75,">"),g.qZA(),g.qZA(),g.TgZ(76,"span",20),g.TgZ(77,"span",20),g.TgZ(78,"span",21),g._uU(79,"<"),g.qZA(),g._uU(80,"a"),g.qZA(),g._uU(81," "),g.TgZ(82,"span",22),g._uU(83,"href"),g.qZA(),g.TgZ(84,"span",23),g.TgZ(85,"span",24),g._uU(86,"="),g.qZA(),g.TgZ(87,"span",21),g._uU(88,'"'),g.qZA(),g._uU(89,"javascript:void(0)"),g.TgZ(90,"span",21),g._uU(91,'"'),g.qZA(),g.qZA(),g._uU(92," "),g.TgZ(93,"span",22),g._uU(94,"[nglFileCrop]"),g.qZA(),g.TgZ(95,"span",23),g.TgZ(96,"span",24),g._uU(97,"="),g.qZA(),g.TgZ(98,"span",21),g._uU(99,'"'),g.qZA(),g._uU(100,"ratio"),g.TgZ(101,"span",21),g._uU(102,'"'),g.qZA(),g.qZA(),g.TgZ(103,"span",21),g._uU(104,">"),g.qZA(),g.qZA(),g.TgZ(105,"span",20),g.TgZ(106,"span",20),g.TgZ(107,"span",21),g._uU(108,"<"),g.qZA(),g._uU(109,"img"),g.qZA(),g._uU(110," "),g.TgZ(111,"span",22),g._uU(112,"src"),g.qZA(),g.TgZ(113,"span",23),g.TgZ(114,"span",24),g._uU(115,"="),g.qZA(),g.TgZ(116,"span",21),g._uU(117,'"'),g.qZA(),g._uU(118,"https://www.lightningdesignsystem.com/assets/images/placeholder-img@16x9.jpg"),g.TgZ(119,"span",21),g._uU(120,'"'),g.qZA(),g.qZA(),g.TgZ(121,"span",21),g._uU(122,">"),g.qZA(),g.qZA(),g.TgZ(123,"span",20),g.TgZ(124,"span",20),g.TgZ(125,"span",21),g._uU(126,"</"),g.qZA(),g._uU(127,"a"),g.qZA(),g.TgZ(128,"span",21),g._uU(129,">"),g.qZA(),g.qZA(),g.TgZ(130,"span",20),g.TgZ(131,"span",20),g.TgZ(132,"span",21),g._uU(133,"</"),g.qZA(),g._uU(134,"ngl-file"),g.qZA(),g.TgZ(135,"span",21),g._uU(136,">"),g.qZA(),g.qZA(),g._uU(137,"\n"),g.TgZ(138,"span",20),g.TgZ(139,"span",20),g.TgZ(140,"span",21),g._uU(141,"</"),g.qZA(),g._uU(142,"div"),g.qZA(),g.TgZ(143,"span",21),g._uU(144,">"),g.qZA(),g.qZA(),g._uU(145,"\n\n"),g.TgZ(146,"span",20),g.TgZ(147,"span",20),g.TgZ(148,"span",21),g._uU(149,"<"),g.qZA(),g._uU(150,"button"),g.qZA(),g._uU(151," "),g.TgZ(152,"span",22),g._uU(153,"type"),g.qZA(),g.TgZ(154,"span",23),g.TgZ(155,"span",24),g._uU(156,"="),g.qZA(),g.TgZ(157,"span",21),g._uU(158,'"'),g.qZA(),g._uU(159,"button"),g.TgZ(160,"span",21),g._uU(161,'"'),g.qZA(),g.qZA(),g._uU(162," "),g.TgZ(163,"span",22),g._uU(164,"nglButton"),g.qZA(),g._uU(165," "),g.TgZ(166,"span",22),g._uU(167,"(click)"),g.qZA(),g.TgZ(168,"span",23),g.TgZ(169,"span",24),g._uU(170,"="),g.qZA(),g.TgZ(171,"span",21),g._uU(172,'"'),g.qZA(),g._uU(173,"changeRatio()"),g.TgZ(174,"span",21),g._uU(175,'"'),g.qZA(),g.qZA(),g.TgZ(176,"span",21),g._uU(177,">"),g.qZA(),g.qZA(),g._uU(178,"Change Ratio"),g.TgZ(179,"span",20),g.TgZ(180,"span",20),g.TgZ(181,"span",21),g._uU(182,"</"),g.qZA(),g._uU(183,"button"),g.qZA(),g.TgZ(184,"span",21),g._uU(185,">"),g.qZA(),g.qZA(),g._uU(186,"\n"),g.TgZ(187,"span",20),g.TgZ(188,"span",20),g.TgZ(189,"span",21),g._uU(190,"<"),g.qZA(),g._uU(191,"button"),g.qZA(),g._uU(192," "),g.TgZ(193,"span",22),g._uU(194,"type"),g.qZA(),g.TgZ(195,"span",23),g.TgZ(196,"span",24),g._uU(197,"="),g.qZA(),g.TgZ(198,"span",21),g._uU(199,'"'),g.qZA(),g._uU(200,"button"),g.TgZ(201,"span",21),g._uU(202,'"'),g.qZA(),g.qZA(),g._uU(203," "),g.TgZ(204,"span",22),g._uU(205,"nglButton"),g.qZA(),g._uU(206," "),g.TgZ(207,"span",22),g._uU(208,"(click)"),g.qZA(),g.TgZ(209,"span",23),g.TgZ(210,"span",24),g._uU(211,"="),g.qZA(),g.TgZ(212,"span",21),g._uU(213,'"'),g.qZA(),g._uU(214,"toggleFilename() "),g.TgZ(215,"span",21),g._uU(216,'"'),g.qZA(),g.qZA(),g.TgZ(217,"span",21),g._uU(218,">"),g.qZA(),g.qZA(),g._uU(219,"Toggle filename"),g.TgZ(220,"span",20),g.TgZ(221,"span",20),g.TgZ(222,"span",21),g._uU(223,"</"),g.qZA(),g._uU(224,"button"),g.qZA(),g.TgZ(225,"span",21),g._uU(226,">"),g.qZA(),g.qZA(),g.qZA(),g.fQ9(),g.qZA(),g._uU(227,"\n    "))}function o(Z,n){1&Z&&(g._uU(0,"\n      "),g.TgZ(1,"pre",28),g.TgZ(2,"code"),g.TgZ(3,"span",29),g._uU(4,"import"),g.qZA(),g._uU(5," "),g.TgZ(6,"span",21),g._uU(7),g.qZA(),g._uU(8," Component "),g.TgZ(9,"span",21),g._uU(10),g.qZA(),g._uU(11," "),g.TgZ(12,"span",29),g._uU(13,"from"),g.qZA(),g._uU(14," "),g.TgZ(15,"span",30),g._uU(16,"'@angular/core'"),g.qZA(),g.TgZ(17,"span",21),g._uU(18,";"),g.qZA(),g._uU(19,"\n\n@"),g.TgZ(20,"span",31),g._uU(21,"Component"),g.qZA(),g.TgZ(22,"span",21),g._uU(23,"("),g.qZA(),g.TgZ(24,"span",21),g._uU(25),g.qZA(),g._uU(26,"\n  selector"),g.TgZ(27,"span",32),g._uU(28,":"),g.qZA(),g._uU(29," "),g.TgZ(30,"span",30),g._uU(31,"'app-demo-files-basic'"),g.qZA(),g.TgZ(32,"span",21),g._uU(33,","),g.qZA(),g._uU(34,"\n  templateUrl"),g.TgZ(35,"span",32),g._uU(36,":"),g.qZA(),g._uU(37," "),g.TgZ(38,"span",30),g._uU(39,"'./basic.html'"),g.qZA(),g.TgZ(40,"span",21),g._uU(41,","),g.qZA(),g._uU(42,"\n"),g.TgZ(43,"span",21),g._uU(44),g.qZA(),g.TgZ(45,"span",21),g._uU(46,")"),g.qZA(),g._uU(47,"\n"),g.TgZ(48,"span",29),g._uU(49,"export"),g.qZA(),g._uU(50," "),g.TgZ(51,"span",29),g._uU(52,"class"),g.qZA(),g._uU(53," "),g.TgZ(54,"span",33),g._uU(55,"DemoFilesBasic"),g.qZA(),g._uU(56," "),g.TgZ(57,"span",21),g._uU(58),g.qZA(),g._uU(59,"\n\n  showFilename "),g.TgZ(60,"span",32),g._uU(61,"="),g.qZA(),g._uU(62," "),g.TgZ(63,"span",34),g._uU(64,"true"),g.qZA(),g.TgZ(65,"span",21),g._uU(66,";"),g.qZA(),g._uU(67,"\n\n  ratio "),g.TgZ(68,"span",32),g._uU(69,"="),g.qZA(),g._uU(70," "),g.TgZ(71,"span",30),g._uU(72,"'16-by-9'"),g.qZA(),g.TgZ(73,"span",21),g._uU(74,";"),g.qZA(),g._uU(75,"\n\n  icon "),g.TgZ(76,"span",32),g._uU(77,"="),g.qZA(),g._uU(78," "),g.TgZ(79,"span",30),g._uU(80,"'doctype:pdf'"),g.qZA(),g.TgZ(81,"span",21),g._uU(82,";"),g.qZA(),g._uU(83,"\n\n  "),g.TgZ(84,"span",29),g._uU(85,"private"),g.qZA(),g._uU(86," ratios"),g.TgZ(87,"span",32),g._uU(88,":"),g.qZA(),g._uU(89," "),g.TgZ(90,"span",35),g._uU(91,"string"),g.qZA(),g.TgZ(92,"span",21),g._uU(93,"["),g.qZA(),g.TgZ(94,"span",21),g._uU(95,"]"),g.qZA(),g._uU(96," "),g.TgZ(97,"span",32),g._uU(98,"="),g.qZA(),g._uU(99," "),g.TgZ(100,"span",21),g._uU(101,"["),g.qZA(),g.TgZ(102,"span",30),g._uU(103,"''"),g.qZA(),g.TgZ(104,"span",21),g._uU(105,","),g.qZA(),g._uU(106," "),g.TgZ(107,"span",30),g._uU(108,"'16-by-9'"),g.qZA(),g.TgZ(109,"span",21),g._uU(110,","),g.qZA(),g._uU(111," "),g.TgZ(112,"span",30),g._uU(113,"'4-by-3'"),g.qZA(),g.TgZ(114,"span",21),g._uU(115,","),g.qZA(),g._uU(116," "),g.TgZ(117,"span",30),g._uU(118,"'1-by-1'"),g.qZA(),g.TgZ(119,"span",21),g._uU(120,"]"),g.qZA(),g.TgZ(121,"span",21),g._uU(122,";"),g.qZA(),g._uU(123,"\n\n  "),g.TgZ(124,"span",31),g._uU(125,"changeRatio"),g.qZA(),g.TgZ(126,"span",21),g._uU(127,"("),g.qZA(),g.TgZ(128,"span",21),g._uU(129,")"),g.qZA(),g._uU(130," "),g.TgZ(131,"span",21),g._uU(132),g.qZA(),g._uU(133,"\n    "),g.TgZ(134,"span",29),g._uU(135,"this"),g.qZA(),g.TgZ(136,"span",21),g._uU(137,"."),g.qZA(),g._uU(138,"ratio "),g.TgZ(139,"span",32),g._uU(140,"="),g.qZA(),g._uU(141," "),g.TgZ(142,"span",29),g._uU(143,"this"),g.qZA(),g.TgZ(144,"span",21),g._uU(145,"."),g.qZA(),g._uU(146,"ratios"),g.TgZ(147,"span",21),g._uU(148,"["),g.qZA(),g.TgZ(149,"span",21),g._uU(150,"("),g.qZA(),g.TgZ(151,"span",29),g._uU(152,"this"),g.qZA(),g.TgZ(153,"span",21),g._uU(154,"."),g.qZA(),g._uU(155,"ratios"),g.TgZ(156,"span",21),g._uU(157,"."),g.qZA(),g.TgZ(158,"span",31),g._uU(159,"indexOf"),g.qZA(),g.TgZ(160,"span",21),g._uU(161,"("),g.qZA(),g.TgZ(162,"span",29),g._uU(163,"this"),g.qZA(),g.TgZ(164,"span",21),g._uU(165,"."),g.qZA(),g._uU(166,"ratio"),g.TgZ(167,"span",21),g._uU(168,")"),g.qZA(),g._uU(169," "),g.TgZ(170,"span",32),g._uU(171,"+"),g.qZA(),g._uU(172," "),g.TgZ(173,"span",36),g._uU(174,"1"),g.qZA(),g.TgZ(175,"span",21),g._uU(176,")"),g.qZA(),g._uU(177," "),g.TgZ(178,"span",32),g._uU(179,"%"),g.qZA(),g._uU(180," "),g.TgZ(181,"span",29),g._uU(182,"this"),g.qZA(),g.TgZ(183,"span",21),g._uU(184,"."),g.qZA(),g._uU(185,"ratios"),g.TgZ(186,"span",21),g._uU(187,"."),g.qZA(),g._uU(188,"length"),g.TgZ(189,"span",21),g._uU(190,"]"),g.qZA(),g.TgZ(191,"span",21),g._uU(192,";"),g.qZA(),g._uU(193,"\n  "),g.TgZ(194,"span",21),g._uU(195),g.qZA(),g._uU(196,"\n\n  "),g.TgZ(197,"span",31),g._uU(198,"toggleFilename"),g.qZA(),g.TgZ(199,"span",21),g._uU(200,"("),g.qZA(),g.TgZ(201,"span",21),g._uU(202,")"),g.qZA(),g._uU(203," "),g.TgZ(204,"span",21),g._uU(205),g.qZA(),g._uU(206,"\n    "),g.TgZ(207,"span",29),g._uU(208,"this"),g.qZA(),g.TgZ(209,"span",21),g._uU(210,"."),g.qZA(),g._uU(211,"showFilename "),g.TgZ(212,"span",32),g._uU(213,"="),g.qZA(),g._uU(214," "),g.TgZ(215,"span",32),g._uU(216,"!"),g.qZA(),g.TgZ(217,"span",29),g._uU(218,"this"),g.qZA(),g.TgZ(219,"span",21),g._uU(220,"."),g.qZA(),g._uU(221,"showFilename"),g.TgZ(222,"span",21),g._uU(223,";"),g.qZA(),g._uU(224,"\n  "),g.TgZ(225,"span",21),g._uU(226),g.qZA(),g._uU(227,"\n\n"),g.TgZ(228,"span",21),g._uU(229),g.qZA(),g._uU(230,"\n"),g.qZA(),g.qZA(),g._uU(231,"\n    ")),2&Z&&(g.xp6(7),g.Oqu("{"),g.xp6(3),g.Oqu("}"),g.xp6(15),g.Oqu("{"),g.xp6(19),g.Oqu("}"),g.xp6(14),g.Oqu("{"),g.xp6(74),g.Oqu("{"),g.xp6(63),g.Oqu("}"),g.xp6(10),g.Oqu("{"),g.xp6(21),g.Oqu("}"),g.xp6(3),g.Oqu("}"))}const l=[{path:"",component:(()=>{class Z{}return Z.\u0275fac=function(n){return new(n||Z)},Z.\u0275cmp=g.Xpm({type:Z,selectors:[["app-demo-files"]],decls:99,vars:2,consts:[[1,"component__header","slds-border_bottom","slds-grid","slds-wrap","slds-m-bottom_medium"],[1,"slds-has-flexi-truncate","slds-align-middle"],[2,"text-transform","capitalize"],[1,"slds-align-middle","slds-text-body_small"],["href","https://www.lightningdesignsystem.com/components/files","title","External link to Salesforce Lightning Design System Site","target","_blank",1,"slds-button","slds-button_neutral"],["href","https://github.com/ng-lightning/ng-lightning/tree/master/projects/ng-lightning/src/lib/files","target","_blank",1,"slds-button","slds-button_neutral"],[1,"slds-grid","slds-grid_vertical-align-center"],["src","assets/images/github.svg",2,"height","15px","width","15px","margin-right","0.5rem"],[1,"slds-m-vertical_medium","readme"],[1,"slds-m-vertical_medium"],[1,"callout"],[1,"slds-box","slds-is-relative","slds-theme_default","slds-m-bottom_large",2,"padding-top","1.5rem"],[1,"example__header","slds-text-heading_small"],["markupbasic",""],["tsbasic",""],[1,"slds-is-relative","slds-m-top_large",2,"min-height","25px"],["dir","files","file","basic","tsRaw","import%20%7B%20Component%20%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-demo-files-basic'%2C%0A%20%20templateUrl%3A%20'.%2Fbasic.html'%2C%0A%7D)%0Aexport%20class%20DemoFilesBasic%20%7B%0A%0A%20%20showFilename%20%3D%20true%3B%0A%0A%20%20ratio%20%3D%20'16-by-9'%3B%0A%0A%20%20icon%20%3D%20'doctype%3Apdf'%3B%0A%0A%20%20private%20ratios%3A%20string%5B%5D%20%3D%20%5B''%2C%20'16-by-9'%2C%20'4-by-3'%2C%20'1-by-1'%5D%3B%0A%0A%20%20changeRatio()%20%7B%0A%20%20%20%20this.ratio%20%3D%20this.ratios%5B(this.ratios.indexOf(this.ratio)%20%2B%201)%20%25%20this.ratios.length%5D%3B%0A%20%20%7D%0A%0A%20%20toggleFilename()%20%7B%0A%20%20%20%20this.showFilename%20%3D%20!this.showFilename%3B%0A%20%20%7D%0A%0A%7D%0A","markupRaw","%0A%3Cdiv%20class%3D%22slds-m-vertical_medium%22%20style%3D%22width%3A%2020rem%3B%22%3E%0A%20%20%3Cngl-file%20%5Btext%5D%3D%22showFilename%20%3F%20'file%20'%20%2B%20ratio%20%3A%20null%22%20%5BiconName%5D%3D%22icon%22%3E%3Ca%20href%3D%22javascript%3Avoid(0)%22%20%5BnglFileCrop%5D%3D%22ratio%22%3E%3Cimg%20src%3D%22https%3A%2F%2Fwww.lightningdesignsystem.com%2Fassets%2Fimages%2Fplaceholder-img%4016x9.jpg%22%3E%3C%2Fa%3E%3C%2Fngl-file%3E%0A%3C%2Fdiv%3E%0A%0A%3Cbutton%20type%3D%22button%22%20nglButton%20(click)%3D%22changeRatio()%22%3EChange%20Ratio%3C%2Fbutton%3E%0A%3Cbutton%20type%3D%22button%22%20nglButton%20(click)%3D%22toggleFilename()%20%22%3EToggle%20filename%3C%2Fbutton%3E",3,"ts","markup"],[1,"slds-box","slds-theme_default"],[1,"api"],[1,"language-markup"],[1,"token","tag"],[1,"token","punctuation"],[1,"token","attr-name"],[1,"token","attr-value"],[1,"token","punctuation","attr-equals"],[1,"token","style-attr"],[1,"token","style","language-css"],[1,"token","property"],[1,"language-typescript"],[1,"token","keyword"],[1,"token","string"],[1,"token","function"],[1,"token","operator"],[1,"token","class-name"],[1,"token","boolean"],[1,"token","builtin"],[1,"token","number"]],template:function(Z,n){if(1&Z&&(g.TgZ(0,"header",0),g.TgZ(1,"div",1),g.TgZ(2,"h1",2),g._uU(3," files "),g.qZA(),g.qZA(),g.TgZ(4,"div",3),g.TgZ(5,"a",4),g._uU(6,"Lightning"),g.qZA(),g.TgZ(7,"a",5),g.TgZ(8,"div",6),g._UZ(9,"img",7),g._uU(10,"Source"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(11,"div",8),g.TgZ(12,"p"),g._uU(13,"Files are a representation of content uploaded as an attachment."),g._UZ(14,"br"),g._uU(15,"\nUse "),g.TgZ(16,"code"),g._uU(17,"nglFileCrop"),g.qZA(),g._uU(18," to the parent link element of the image to apply cropping to the specified ratio."),g.qZA(),g.qZA(),g.TgZ(19,"div",9),g.TgZ(20,"h2",10),g._uU(21,"Examples"),g.qZA(),g.TgZ(22,"div",11),g.TgZ(23,"div",12),g._uU(24,"Basic Usage"),g.qZA(),g._UZ(25,"app-demo-files-basic"),g.YNc(26,q,228,0,"ng-template",null,13,g.W1O),g.YNc(28,o,232,10,"ng-template",null,14,g.W1O),g.TgZ(30,"div",15),g._UZ(31,"app-demo-example-docs",16),g.qZA(),g.qZA(),g.qZA(),g.TgZ(32,"div",9),g.TgZ(33,"h2",10),g._uU(34,"API"),g.qZA(),g.TgZ(35,"div",17),g.TgZ(36,"div",18),g.TgZ(37,"h3"),g._uU(38,"<ngl-file>"),g.qZA(),g.TgZ(39,"h4"),g._uU(40,"NglFile"),g.qZA(),g.TgZ(41,"table"),g.TgZ(42,"thead"),g.TgZ(43,"tr"),g.TgZ(44,"th"),g._uU(45,"Property"),g.qZA(),g.TgZ(46,"th"),g._uU(47,"Description"),g.qZA(),g.TgZ(48,"th"),g._uU(49,"Type"),g.qZA(),g.TgZ(50,"th"),g._uU(51,"Default"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(52,"tbody"),g.TgZ(53,"tr"),g.TgZ(54,"td"),g.TgZ(55,"code"),g._uU(56,"[text]"),g.qZA(),g.qZA(),g.TgZ(57,"td"),g._uU(58,"Description of the file, ie the filename."),g.qZA(),g.TgZ(59,"td"),g._uU(60,"string | TemplateRef"),g.qZA(),g._UZ(61,"td"),g.qZA(),g.TgZ(62,"tr"),g.TgZ(63,"td"),g.TgZ(64,"code"),g._uU(65,"[iconName]"),g.qZA(),g.qZA(),g.TgZ(66,"td"),g._uU(67,"Icon to specify the type of attachment, ie "),g.TgZ(68,"code"),g._uU(69,"doctype:pdf"),g.qZA(),g._uU(70,"."),g.qZA(),g.TgZ(71,"td"),g._uU(72,"string"),g.qZA(),g._UZ(73,"td"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(74,"h3"),g._uU(75,"[nglFileCrop]"),g.qZA(),g.TgZ(76,"h4"),g._uU(77,"NglFileCrop"),g.qZA(),g.TgZ(78,"table"),g.TgZ(79,"thead"),g.TgZ(80,"tr"),g.TgZ(81,"th"),g._uU(82,"Property"),g.qZA(),g.TgZ(83,"th"),g._uU(84,"Description"),g.qZA(),g.TgZ(85,"th"),g._uU(86,"Type"),g.qZA(),g.TgZ(87,"th"),g._uU(88,"Default"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(89,"tbody"),g.TgZ(90,"tr"),g.TgZ(91,"td"),g.TgZ(92,"code"),g._uU(93,"[nglFileCrop]"),g.qZA(),g.qZA(),g.TgZ(94,"td"),g._uU(95,"Optionally crop image to a specific ratio such as 16x9, 4x3 and 1x1."),g.qZA(),g.TgZ(96,"td"),g._uU(97,"string"),g.qZA(),g._UZ(98,"td"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&Z){const Z=g.MAs(27),n=g.MAs(29);g.xp6(31),g.Q6J("ts",n)("markup",Z)}},directives:[U,A.k],encapsulation:2}),Z})()}];let T=(()=>{class Z{}return Z.\u0275fac=function(n){return new(n||Z)},Z.\u0275mod=g.oAB({type:Z}),Z.\u0275inj=g.cJS({imports:[[a.ez,t.Bz.forChild(l),e.yN,e.C2,u.b]]}),Z})()}}]);