(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"Q92/":function(b,n,c){"use strict";c.r(n),c.d(n,"NglDemoFileUploadModule",(function(){return C}));var a=c("ofXK"),e=c("3Pt+"),s=c("tyNb"),t=c("vc5p"),l=c("dH7C"),p=c("fXoL"),B=c("l7gm");function r(b,n){if(1&b&&(p.Tb(0,"div"),p.Bc(1),p.Sb()),2&b){const b=n.$implicit;p.Bb(1),p.Cc(b.name)}}function i(b,n){if(1&b&&(p.Tb(0,"div",3),p.zc(1,r,2,1,"div",4),p.Sb()),2&b){const b=p.gc();p.Bb(1),p.mc("ngForOf",b.ctrl.value)}}function o(b,n){1&b&&(p.Rb(0),p.Bc(1,"Please select a file."),p.Qb())}function T(b,n){if(1&b&&(p.Rb(0),p.Bc(1,"Oh no, invalid type"),p.Tb(2,"b"),p.Bc(3),p.Sb(),p.Bc(4),p.Qb()),2&b){const b=n.ngIf;p.Bb(3),p.Dc(" ",b.type,""),p.Bb(1),p.Dc(' for "',b.name,'"!')}}function S(b,n){if(1&b&&(p.Rb(0),p.Bc(1),p.Qb()),2&b){const b=n.ngIf;p.Bb(1),p.Dc('"',b.name,'" is bigger than 1MB!')}}function d(b,n){1&b&&(p.Rb(0),p.Bc(1,"Too many files selected!"),p.Qb())}function m(b,n){if(1&b&&(p.zc(0,o,2,0,"ng-container",5),p.zc(1,T,5,2,"ng-container",5),p.zc(2,S,2,1,"ng-container",5),p.zc(3,d,2,0,"ng-container",5)),2&b){const b=p.gc();p.mc("ngIf",b.ctrl.errors.required),p.Bb(1),p.mc("ngIf",null==b.ctrl.errors.nglFileUpload?null:b.ctrl.errors.nglFileUpload.invalidType),p.Bb(1),p.mc("ngIf",null==b.ctrl.errors.nglFileUpload?null:b.ctrl.errors.nglFileUpload.maxFilesize),p.Bb(1),p.mc("ngIf",null==b.ctrl.errors.nglFileUpload?null:b.ctrl.errors.nglFileUpload.maxFiles)}}const g=function(){return["image/*","application/pdf",".mp3"]};let f=(()=>{class b{constructor(){this.ctrl=new e.e(null,[e.A.required])}}return b.\u0275fac=function(n){return new(n||b)},b.\u0275cmp=p.Gb({type:b,selectors:[["app-demo-file-upload-basic"]],decls:4,vars:5,consts:[["label","Attachment","maxFiles","2","maxFilesize","1048576",3,"formControl","accept","error"],["class","slds-text-heading_small slds-m-top_large slds-text-color_success",4,"ngIf"],["errorTpl",""],[1,"slds-text-heading_small","slds-m-top_large","slds-text-color_success"],[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(b,n){if(1&b&&(p.Ob(0,"ngl-file-upload",0),p.zc(1,i,2,1,"div",1),p.zc(2,m,4,4,"ng-template",null,2,p.Ac)),2&b){const b=p.rc(3);p.mc("formControl",n.ctrl)("accept",p.nc(4,g))("error",n.ctrl.invalid?b:null),p.Bb(1),p.mc("ngIf",n.ctrl.valid)}},directives:[B.a,e.m,e.f,a.u,a.t],encapsulation:2}),b})();var u=c("M6rV");function h(b,n){1&b&&(p.Bc(0,"\n      "),p.Tb(1,"pre",20),p.Nb(),p.Tb(2,"code"),p.Tb(3,"span",21),p.Tb(4,"span",21),p.Tb(5,"span",22),p.Bc(6,"<"),p.Sb(),p.Bc(7,"ngl-file-upload"),p.Sb(),p.Bc(8," "),p.Tb(9,"span",23),p.Bc(10,"label"),p.Sb(),p.Tb(11,"span",24),p.Tb(12,"span",25),p.Bc(13,"="),p.Sb(),p.Tb(14,"span",22),p.Bc(15,'"'),p.Sb(),p.Bc(16,"Attachment"),p.Tb(17,"span",22),p.Bc(18,'"'),p.Sb(),p.Sb(),p.Bc(19," "),p.Tb(20,"span",23),p.Bc(21,"[formControl]"),p.Sb(),p.Tb(22,"span",24),p.Tb(23,"span",25),p.Bc(24,"="),p.Sb(),p.Tb(25,"span",22),p.Bc(26,'"'),p.Sb(),p.Bc(27,"ctrl"),p.Tb(28,"span",22),p.Bc(29,'"'),p.Sb(),p.Sb(),p.Bc(30," "),p.Tb(31,"span",23),p.Bc(32,"[accept]"),p.Sb(),p.Tb(33,"span",24),p.Tb(34,"span",25),p.Bc(35,"="),p.Sb(),p.Tb(36,"span",22),p.Bc(37,'"'),p.Sb(),p.Bc(38,"["),p.Tb(39,"span",22),p.Bc(40,"'"),p.Sb(),p.Bc(41,"image/*"),p.Tb(42,"span",22),p.Bc(43,"'"),p.Sb(),p.Bc(44,", "),p.Tb(45,"span",22),p.Bc(46,"'"),p.Sb(),p.Bc(47,"application/pdf"),p.Tb(48,"span",22),p.Bc(49,"'"),p.Sb(),p.Bc(50,", "),p.Tb(51,"span",22),p.Bc(52,"'"),p.Sb(),p.Bc(53,".mp3"),p.Tb(54,"span",22),p.Bc(55,"'"),p.Sb(),p.Bc(56,"]"),p.Tb(57,"span",22),p.Bc(58,'"'),p.Sb(),p.Sb(),p.Bc(59," "),p.Tb(60,"span",23),p.Bc(61,"maxFiles"),p.Sb(),p.Tb(62,"span",24),p.Tb(63,"span",25),p.Bc(64,"="),p.Sb(),p.Tb(65,"span",22),p.Bc(66,'"'),p.Sb(),p.Bc(67,"2"),p.Tb(68,"span",22),p.Bc(69,'"'),p.Sb(),p.Sb(),p.Bc(70," "),p.Tb(71,"span",23),p.Bc(72,"maxFilesize"),p.Sb(),p.Tb(73,"span",24),p.Tb(74,"span",25),p.Bc(75,"="),p.Sb(),p.Tb(76,"span",22),p.Bc(77,'"'),p.Sb(),p.Bc(78,"1048576"),p.Tb(79,"span",22),p.Bc(80,'"'),p.Sb(),p.Sb(),p.Bc(81," "),p.Tb(82,"span",23),p.Bc(83,"[error]"),p.Sb(),p.Tb(84,"span",24),p.Tb(85,"span",25),p.Bc(86,"="),p.Sb(),p.Tb(87,"span",22),p.Bc(88,'"'),p.Sb(),p.Bc(89,"ctrl.invalid ? errorTpl : null"),p.Tb(90,"span",22),p.Bc(91,'"'),p.Sb(),p.Sb(),p.Tb(92,"span",22),p.Bc(93,">"),p.Sb(),p.Sb(),p.Tb(94,"span",21),p.Tb(95,"span",21),p.Tb(96,"span",22),p.Bc(97,"</"),p.Sb(),p.Bc(98,"ngl-file-upload"),p.Sb(),p.Tb(99,"span",22),p.Bc(100,">"),p.Sb(),p.Sb(),p.Bc(101,"\n\n"),p.Tb(102,"span",21),p.Tb(103,"span",21),p.Tb(104,"span",22),p.Bc(105,"<"),p.Sb(),p.Bc(106,"div"),p.Sb(),p.Bc(107," "),p.Tb(108,"span",23),p.Bc(109,"class"),p.Sb(),p.Tb(110,"span",24),p.Tb(111,"span",25),p.Bc(112,"="),p.Sb(),p.Tb(113,"span",22),p.Bc(114,'"'),p.Sb(),p.Bc(115,"slds-text-heading_small slds-m-top_large slds-text-color_success"),p.Tb(116,"span",22),p.Bc(117,'"'),p.Sb(),p.Sb(),p.Bc(118," "),p.Tb(119,"span",23),p.Bc(120,"*ngIf"),p.Sb(),p.Tb(121,"span",24),p.Tb(122,"span",25),p.Bc(123,"="),p.Sb(),p.Tb(124,"span",22),p.Bc(125,'"'),p.Sb(),p.Bc(126,"ctrl.valid"),p.Tb(127,"span",22),p.Bc(128,'"'),p.Sb(),p.Sb(),p.Tb(129,"span",22),p.Bc(130,">"),p.Sb(),p.Sb(),p.Bc(131,"\n  "),p.Tb(132,"span",21),p.Tb(133,"span",21),p.Tb(134,"span",22),p.Bc(135,"<"),p.Sb(),p.Bc(136,"div"),p.Sb(),p.Bc(137," "),p.Tb(138,"span",23),p.Bc(139,"*ngFor"),p.Sb(),p.Tb(140,"span",24),p.Tb(141,"span",25),p.Bc(142,"="),p.Sb(),p.Tb(143,"span",22),p.Bc(144,'"'),p.Sb(),p.Bc(145,"let file of ctrl.value"),p.Tb(146,"span",22),p.Bc(147,'"'),p.Sb(),p.Sb(),p.Tb(148,"span",22),p.Bc(149,">"),p.Sb(),p.Sb(),p.Bc(150,"{{ file.name }}"),p.Tb(151,"span",21),p.Tb(152,"span",21),p.Tb(153,"span",22),p.Bc(154,"</"),p.Sb(),p.Bc(155,"div"),p.Sb(),p.Tb(156,"span",22),p.Bc(157,">"),p.Sb(),p.Sb(),p.Bc(158,"\n"),p.Tb(159,"span",21),p.Tb(160,"span",21),p.Tb(161,"span",22),p.Bc(162,"</"),p.Sb(),p.Bc(163,"div"),p.Sb(),p.Tb(164,"span",22),p.Bc(165,">"),p.Sb(),p.Sb(),p.Bc(166,"\n\n"),p.Tb(167,"span",21),p.Tb(168,"span",21),p.Tb(169,"span",22),p.Bc(170,"<"),p.Sb(),p.Bc(171,"ng-template"),p.Sb(),p.Bc(172," "),p.Tb(173,"span",23),p.Bc(174,"#errorTpl"),p.Sb(),p.Tb(175,"span",22),p.Bc(176,">"),p.Sb(),p.Sb(),p.Bc(177,"\n  "),p.Tb(178,"span",21),p.Tb(179,"span",21),p.Tb(180,"span",22),p.Bc(181,"<"),p.Sb(),p.Bc(182,"ng-container"),p.Sb(),p.Bc(183," "),p.Tb(184,"span",23),p.Bc(185,"*ngIf"),p.Sb(),p.Tb(186,"span",24),p.Tb(187,"span",25),p.Bc(188,"="),p.Sb(),p.Tb(189,"span",22),p.Bc(190,'"'),p.Sb(),p.Bc(191,"ctrl.errors["),p.Tb(192,"span",22),p.Bc(193,"'"),p.Sb(),p.Bc(194,"required"),p.Tb(195,"span",22),p.Bc(196,"'"),p.Sb(),p.Bc(197,"]"),p.Tb(198,"span",22),p.Bc(199,'"'),p.Sb(),p.Sb(),p.Tb(200,"span",22),p.Bc(201,">"),p.Sb(),p.Sb(),p.Bc(202,"Please select a file."),p.Tb(203,"span",21),p.Tb(204,"span",21),p.Tb(205,"span",22),p.Bc(206,"</"),p.Sb(),p.Bc(207,"ng-container"),p.Sb(),p.Tb(208,"span",22),p.Bc(209,">"),p.Sb(),p.Sb(),p.Bc(210,"\n  "),p.Tb(211,"span",21),p.Tb(212,"span",21),p.Tb(213,"span",22),p.Bc(214,"<"),p.Sb(),p.Bc(215,"ng-container"),p.Sb(),p.Bc(216," "),p.Tb(217,"span",23),p.Bc(218,"*ngIf"),p.Sb(),p.Tb(219,"span",24),p.Tb(220,"span",25),p.Bc(221,"="),p.Sb(),p.Tb(222,"span",22),p.Bc(223,'"'),p.Sb(),p.Bc(224,"ctrl.errors.nglFileUpload?.invalidType as file"),p.Tb(225,"span",22),p.Bc(226,'"'),p.Sb(),p.Sb(),p.Tb(227,"span",22),p.Bc(228,">"),p.Sb(),p.Sb(),p.Bc(229,"Oh no, invalid type"),p.Tb(230,"span",21),p.Tb(231,"span",21),p.Tb(232,"span",22),p.Bc(233,"<"),p.Sb(),p.Bc(234,"b"),p.Sb(),p.Tb(235,"span",22),p.Bc(236,">"),p.Sb(),p.Sb(),p.Bc(237," {{ file.type }}"),p.Tb(238,"span",21),p.Tb(239,"span",21),p.Tb(240,"span",22),p.Bc(241,"</"),p.Sb(),p.Bc(242,"b"),p.Sb(),p.Tb(243,"span",22),p.Bc(244,">"),p.Sb(),p.Sb(),p.Bc(245,' for "{{ file.name}}"!'),p.Tb(246,"span",21),p.Tb(247,"span",21),p.Tb(248,"span",22),p.Bc(249,"</"),p.Sb(),p.Bc(250,"ng-container"),p.Sb(),p.Tb(251,"span",22),p.Bc(252,">"),p.Sb(),p.Sb(),p.Bc(253,"\n  "),p.Tb(254,"span",21),p.Tb(255,"span",21),p.Tb(256,"span",22),p.Bc(257,"<"),p.Sb(),p.Bc(258,"ng-container"),p.Sb(),p.Bc(259," "),p.Tb(260,"span",23),p.Bc(261,"*ngIf"),p.Sb(),p.Tb(262,"span",24),p.Tb(263,"span",25),p.Bc(264,"="),p.Sb(),p.Tb(265,"span",22),p.Bc(266,'"'),p.Sb(),p.Bc(267,"ctrl.errors.nglFileUpload?.maxFilesize as file"),p.Tb(268,"span",22),p.Bc(269,'"'),p.Sb(),p.Sb(),p.Tb(270,"span",22),p.Bc(271,">"),p.Sb(),p.Sb(),p.Bc(272,'"{{ file.name}}" is bigger than 1MB!'),p.Tb(273,"span",21),p.Tb(274,"span",21),p.Tb(275,"span",22),p.Bc(276,"</"),p.Sb(),p.Bc(277,"ng-container"),p.Sb(),p.Tb(278,"span",22),p.Bc(279,">"),p.Sb(),p.Sb(),p.Bc(280,"\n  "),p.Tb(281,"span",21),p.Tb(282,"span",21),p.Tb(283,"span",22),p.Bc(284,"<"),p.Sb(),p.Bc(285,"ng-container"),p.Sb(),p.Bc(286," "),p.Tb(287,"span",23),p.Bc(288,"*ngIf"),p.Sb(),p.Tb(289,"span",24),p.Tb(290,"span",25),p.Bc(291,"="),p.Sb(),p.Tb(292,"span",22),p.Bc(293,'"'),p.Sb(),p.Bc(294,"ctrl.errors.nglFileUpload?.maxFiles"),p.Tb(295,"span",22),p.Bc(296,'"'),p.Sb(),p.Sb(),p.Tb(297,"span",22),p.Bc(298,">"),p.Sb(),p.Sb(),p.Bc(299,"Too many files selected!"),p.Tb(300,"span",21),p.Tb(301,"span",21),p.Tb(302,"span",22),p.Bc(303,"</"),p.Sb(),p.Bc(304,"ng-container"),p.Sb(),p.Tb(305,"span",22),p.Bc(306,">"),p.Sb(),p.Sb(),p.Bc(307,"\n"),p.Tb(308,"span",21),p.Tb(309,"span",21),p.Tb(310,"span",22),p.Bc(311,"</"),p.Sb(),p.Bc(312,"ng-template"),p.Sb(),p.Tb(313,"span",22),p.Bc(314,">"),p.Sb(),p.Sb(),p.Sb(),p.Ub(),p.Sb(),p.Bc(315,"\n    "))}function F(b,n){1&b&&(p.Bc(0,"\n      "),p.Tb(1,"pre",26),p.Tb(2,"code"),p.Tb(3,"span",27),p.Bc(4,"import"),p.Sb(),p.Bc(5," "),p.Tb(6,"span",22),p.Bc(7),p.Sb(),p.Bc(8," Component "),p.Tb(9,"span",22),p.Bc(10),p.Sb(),p.Bc(11," "),p.Tb(12,"span",27),p.Bc(13,"from"),p.Sb(),p.Bc(14," "),p.Tb(15,"span",28),p.Bc(16,"'@angular/core'"),p.Sb(),p.Tb(17,"span",22),p.Bc(18,";"),p.Sb(),p.Bc(19,"\n"),p.Tb(20,"span",27),p.Bc(21,"import"),p.Sb(),p.Bc(22," "),p.Tb(23,"span",22),p.Bc(24),p.Sb(),p.Bc(25," FormControl"),p.Tb(26,"span",22),p.Bc(27,","),p.Sb(),p.Bc(28," Validators "),p.Tb(29,"span",22),p.Bc(30),p.Sb(),p.Bc(31," "),p.Tb(32,"span",27),p.Bc(33,"from"),p.Sb(),p.Bc(34," "),p.Tb(35,"span",28),p.Bc(36,"'@angular/forms'"),p.Sb(),p.Tb(37,"span",22),p.Bc(38,";"),p.Sb(),p.Bc(39,"\n\n@"),p.Tb(40,"span",29),p.Bc(41,"Component"),p.Sb(),p.Tb(42,"span",22),p.Bc(43,"("),p.Sb(),p.Tb(44,"span",22),p.Bc(45),p.Sb(),p.Bc(46,"\n  selector"),p.Tb(47,"span",30),p.Bc(48,":"),p.Sb(),p.Bc(49," "),p.Tb(50,"span",28),p.Bc(51,"'app-demo-file-upload-basic'"),p.Sb(),p.Tb(52,"span",22),p.Bc(53,","),p.Sb(),p.Bc(54,"\n  templateUrl"),p.Tb(55,"span",30),p.Bc(56,":"),p.Sb(),p.Bc(57," "),p.Tb(58,"span",28),p.Bc(59,"'./basic.html'"),p.Sb(),p.Tb(60,"span",22),p.Bc(61,","),p.Sb(),p.Bc(62,"\n"),p.Tb(63,"span",22),p.Bc(64),p.Sb(),p.Tb(65,"span",22),p.Bc(66,")"),p.Sb(),p.Bc(67,"\n"),p.Tb(68,"span",27),p.Bc(69,"export"),p.Sb(),p.Bc(70," "),p.Tb(71,"span",27),p.Bc(72,"class"),p.Sb(),p.Bc(73," "),p.Tb(74,"span",31),p.Bc(75,"DemoFileUploadBasic"),p.Sb(),p.Bc(76," "),p.Tb(77,"span",22),p.Bc(78),p.Sb(),p.Bc(79,"\n  ctrl "),p.Tb(80,"span",30),p.Bc(81,"="),p.Sb(),p.Bc(82," "),p.Tb(83,"span",27),p.Bc(84,"new"),p.Sb(),p.Bc(85," "),p.Tb(86,"span",31),p.Bc(87,"FormControl"),p.Sb(),p.Tb(88,"span",22),p.Bc(89,"("),p.Sb(),p.Tb(90,"span",27),p.Bc(91,"null"),p.Sb(),p.Tb(92,"span",22),p.Bc(93,","),p.Sb(),p.Bc(94," "),p.Tb(95,"span",22),p.Bc(96,"["),p.Sb(),p.Bc(97,"Validators"),p.Tb(98,"span",22),p.Bc(99,"."),p.Sb(),p.Bc(100,"required"),p.Tb(101,"span",22),p.Bc(102,"]"),p.Sb(),p.Tb(103,"span",22),p.Bc(104,")"),p.Sb(),p.Tb(105,"span",22),p.Bc(106,";"),p.Sb(),p.Bc(107,"\n"),p.Tb(108,"span",22),p.Bc(109),p.Sb(),p.Bc(110,"\n"),p.Sb(),p.Sb(),p.Bc(111,"\n    ")),2&b&&(p.Bb(7),p.Cc("{"),p.Bb(3),p.Cc("}"),p.Bb(14),p.Cc("{"),p.Bb(6),p.Cc("}"),p.Bb(15),p.Cc("{"),p.Bb(19),p.Cc("}"),p.Bb(14),p.Cc("{"),p.Bb(31),p.Cc("}"))}const v=[{path:"",component:(()=>{class b{}return b.\u0275fac=function(n){return new(n||b)},b.\u0275cmp=p.Gb({type:b,selectors:[["app-demo-file-upload"]],decls:145,vars:2,consts:[[1,"component__header","slds-border_bottom","slds-grid","slds-wrap","slds-m-bottom_medium"],[1,"slds-has-flexi-truncate","slds-align-middle"],[2,"text-transform","capitalize"],[1,"slds-align-middle","slds-text-body_small"],["href","https://www.lightningdesignsystem.com/components/file-selector","title","External link to Salesforce Lightning Design System Site","target","_blank",1,"slds-button","slds-button_neutral"],["href","https://github.com/ng-lightning/ng-lightning/tree/master/projects/ng-lightning/src/lib/file-upload","target","_blank",1,"slds-button","slds-button_neutral"],[1,"slds-grid","slds-grid_vertical-align-center"],["src","assets/images/github.svg",2,"height","15px","width","15px","margin-right","0.5rem"],[1,"slds-m-vertical_medium","readme"],[1,"slds-m-vertical_medium"],[1,"callout"],[1,"slds-box","slds-is-relative","slds-theme_default","slds-m-bottom_large",2,"padding-top","1.5rem"],[1,"example__header","slds-text-heading_small"],["markupbasic",""],["tsbasic",""],[1,"slds-is-relative","slds-m-top_large",2,"min-height","25px"],["dir","file-upload","file","basic","tsRaw","import%20%7B%20Component%20%7D%20from%20'%40angular%2Fcore'%3B%0Aimport%20%7B%20FormControl%2C%20Validators%20%7D%20from%20'%40angular%2Fforms'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-demo-file-upload-basic'%2C%0A%20%20templateUrl%3A%20'.%2Fbasic.html'%2C%0A%7D)%0Aexport%20class%20DemoFileUploadBasic%20%7B%0A%20%20ctrl%20%3D%20new%20FormControl(null%2C%20%5BValidators.required%5D)%3B%0A%7D%0A","markupRaw","%0A%3Cngl-file-upload%20label%3D%22Attachment%22%20%5BformControl%5D%3D%22ctrl%22%20%5Baccept%5D%3D%22%5B'image%2F*'%2C%20'application%2Fpdf'%2C%20'.mp3'%5D%22%20maxFiles%3D%222%22%20maxFilesize%3D%221048576%22%20%5Berror%5D%3D%22ctrl.invalid%20%3F%20errorTpl%20%3A%20null%22%3E%3C%2Fngl-file-upload%3E%0A%0A%3Cdiv%20class%3D%22slds-text-heading_small%20slds-m-top_large%20slds-text-color_success%22%20*ngIf%3D%22ctrl.valid%22%3E%0A%20%20%3Cdiv%20*ngFor%3D%22let%20file%20of%20ctrl.value%22%3E%7B%7B%20file.name%20%7D%7D%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%0A%3Cng-template%20%23errorTpl%3E%0A%20%20%3Cng-container%20*ngIf%3D%22ctrl.errors%5B'required'%5D%22%3EPlease%20select%20a%20file.%3C%2Fng-container%3E%0A%20%20%3Cng-container%20*ngIf%3D%22ctrl.errors.nglFileUpload%3F.invalidType%20as%20file%22%3EOh%20no%2C%20invalid%20type%3Cb%3E%20%7B%7B%20file.type%20%7D%7D%3C%2Fb%3E%20for%20%22%7B%7B%20file.name%7D%7D%22!%3C%2Fng-container%3E%0A%20%20%3Cng-container%20*ngIf%3D%22ctrl.errors.nglFileUpload%3F.maxFilesize%20as%20file%22%3E%22%7B%7B%20file.name%7D%7D%22%20is%20bigger%20than%201MB!%3C%2Fng-container%3E%0A%20%20%3Cng-container%20*ngIf%3D%22ctrl.errors.nglFileUpload%3F.maxFiles%22%3EToo%20many%20files%20selected!%3C%2Fng-container%3E%0A%3C%2Fng-template%3E",3,"ts","markup"],[1,"slds-box","slds-theme_default"],[1,"api"],["href","https://www.w3schools.com/tags/att_input_accept.asp"],[1,"language-markup"],[1,"token","tag"],[1,"token","punctuation"],[1,"token","attr-name"],[1,"token","attr-value"],[1,"token","punctuation","attr-equals"],[1,"language-typescript"],[1,"token","keyword"],[1,"token","string"],[1,"token","function"],[1,"token","operator"],[1,"token","class-name"]],template:function(b,n){if(1&b&&(p.Tb(0,"header",0),p.Tb(1,"div",1),p.Tb(2,"h1",2),p.Bc(3," file upload "),p.Sb(),p.Sb(),p.Tb(4,"div",3),p.Tb(5,"a",4),p.Bc(6,"Lightning"),p.Sb(),p.Tb(7,"a",5),p.Tb(8,"div",6),p.Ob(9,"img",7),p.Bc(10,"Source"),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Tb(11,"div",8),p.Tb(12,"p"),p.Bc(13,"A "),p.Tb(14,"code"),p.Bc(15,"<ngl-file-upload>"),p.Sb(),p.Bc(16," component provides an easy and integrated way for users to select one or multiple files for upload. The file uploader includes drag-and-drop functionality, filtering and validation by file types and size validation if required."),p.Sb(),p.Sb(),p.Tb(17,"div",9),p.Tb(18,"h2",10),p.Bc(19,"Examples"),p.Sb(),p.Tb(20,"div",11),p.Tb(21,"div",12),p.Bc(22,"Basic Usage"),p.Sb(),p.Ob(23,"app-demo-file-upload-basic"),p.zc(24,h,316,0,"ng-template",null,13,p.Ac),p.zc(26,F,112,8,"ng-template",null,14,p.Ac),p.Tb(28,"div",15),p.Ob(29,"app-demo-example-docs",16),p.Sb(),p.Sb(),p.Sb(),p.Tb(30,"div",9),p.Tb(31,"h2",10),p.Bc(32,"API"),p.Sb(),p.Tb(33,"div",17),p.Tb(34,"div",18),p.Tb(35,"h3"),p.Bc(36,"<ngl-file-upload>"),p.Sb(),p.Tb(37,"h4"),p.Bc(38,"NglFileUpload"),p.Sb(),p.Tb(39,"p"),p.Bc(40,"Supports "),p.Tb(41,"code"),p.Bc(42,"[(ngModel)]"),p.Sb(),p.Bc(43," and "),p.Tb(44,"code"),p.Bc(45,"[formControl]"),p.Sb(),p.Bc(46,"."),p.Sb(),p.Tb(47,"table"),p.Tb(48,"thead"),p.Tb(49,"tr"),p.Tb(50,"th"),p.Bc(51,"Property"),p.Sb(),p.Tb(52,"th"),p.Bc(53,"Description"),p.Sb(),p.Tb(54,"th"),p.Bc(55,"Type"),p.Sb(),p.Tb(56,"th"),p.Bc(57,"Default"),p.Sb(),p.Sb(),p.Sb(),p.Tb(58,"tbody"),p.Tb(59,"tr"),p.Tb(60,"td"),p.Tb(61,"code"),p.Bc(62,"[label]"),p.Sb(),p.Sb(),p.Tb(63,"td"),p.Bc(64,"Label that appears above the upload area."),p.Sb(),p.Tb(65,"td"),p.Bc(66,"string | TemplateRef"),p.Sb(),p.Ob(67,"td"),p.Sb(),p.Tb(68,"tr"),p.Tb(69,"td"),p.Tb(70,"code"),p.Bc(71,"[accept]"),p.Sb(),p.Sb(),p.Tb(72,"td"),p.Bc(73,"File extensions and types that can be accepted. See "),p.Tb(74,"a",19),p.Bc(75,"input accept Attribute"),p.Sb(),p.Bc(76,"."),p.Sb(),p.Tb(77,"td"),p.Bc(78,"string | string[]"),p.Sb(),p.Ob(79,"td"),p.Sb(),p.Tb(80,"tr"),p.Tb(81,"td"),p.Tb(82,"code"),p.Bc(83,"[disabled]"),p.Sb(),p.Sb(),p.Tb(84,"td"),p.Bc(85,"Whether file selection is disabled."),p.Sb(),p.Tb(86,"td"),p.Bc(87,"boolean"),p.Sb(),p.Tb(88,"td"),p.Bc(89,"false"),p.Sb(),p.Sb(),p.Tb(90,"tr"),p.Tb(91,"td"),p.Tb(92,"code"),p.Bc(93,"[maxFiles]"),p.Sb(),p.Sb(),p.Tb(94,"td"),p.Bc(95,"How many files can be selected simultaneously. "),p.Tb(96,"code"),p.Bc(97,"0"),p.Sb(),p.Bc(98," means unlimited."),p.Sb(),p.Tb(99,"td"),p.Bc(100,"number"),p.Sb(),p.Tb(101,"td"),p.Bc(102,"1"),p.Sb(),p.Sb(),p.Tb(103,"tr"),p.Tb(104,"td"),p.Tb(105,"code"),p.Bc(106,"[maxFilesize]"),p.Sb(),p.Sb(),p.Tb(107,"td"),p.Bc(108,"File size limit in bytes. "),p.Tb(109,"code"),p.Bc(110,"0"),p.Sb(),p.Bc(111," means unlimited."),p.Sb(),p.Tb(112,"td"),p.Bc(113,"number"),p.Sb(),p.Tb(114,"td"),p.Bc(115,"0"),p.Sb(),p.Sb(),p.Tb(116,"tr"),p.Tb(117,"td"),p.Tb(118,"code"),p.Bc(119,"[error]"),p.Sb(),p.Sb(),p.Tb(120,"td"),p.Bc(121,"Error message."),p.Sb(),p.Tb(122,"td"),p.Bc(123,"string | TemplateRef"),p.Sb(),p.Ob(124,"td"),p.Sb(),p.Tb(125,"tr"),p.Tb(126,"td"),p.Tb(127,"code"),p.Bc(128,"[uploadButtonLabel]"),p.Sb(),p.Sb(),p.Tb(129,"td"),p.Bc(130,"Text for button to open file selector."),p.Sb(),p.Tb(131,"td"),p.Bc(132,"string"),p.Sb(),p.Tb(133,"td"),p.Bc(134,"'Upload Files'"),p.Sb(),p.Sb(),p.Tb(135,"tr"),p.Tb(136,"td"),p.Tb(137,"code"),p.Bc(138,"[dropZoneLabel]"),p.Sb(),p.Sb(),p.Tb(139,"td"),p.Bc(140,"Text to display inside drop zone."),p.Sb(),p.Tb(141,"td"),p.Bc(142,"string"),p.Sb(),p.Tb(143,"td"),p.Bc(144,"'or Drop Files'"),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb()),2&b){const b=p.rc(25),n=p.rc(27);p.Bb(29),p.mc("ts",n)("markup",b)}},directives:[f,u.a],encapsulation:2}),b})()}];let C=(()=>{class b{}return b.\u0275mod=p.Kb({type:b}),b.\u0275inj=p.Jb({factory:function(n){return new(n||b)},imports:[[a.c,e.g,e.w,s.c.forChild(v),t.s,l.a]]}),b})()}}]);