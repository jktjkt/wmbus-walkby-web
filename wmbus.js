var port = null;
var decoder = null;
var writer = null;
var METERS = null;
const NAMES = new Map([
['KAM83076912', 'L482.U'],
['KAM83076919', 'L481.U'],
['KAM83076918', 'L472.U'],
['KAM83076917', 'L471.U'],
['KAM83076914', 'L463.U'],
['KAM83076915', 'L462.U'],
['KAM83076913', 'L461.U'],
['KAM83077041', 'L454.U'],
['KAM83077042', 'L453.U'],
['KAM83077040', 'L452.U'],
['KAM83076916', 'L451.U'],
['KAM83077046', 'L444.U'],
['KAM83077043', 'L443.U'],
['KAM83077044', 'L442.U'],
['KAM83077045', 'L441.U'],
['KAM83028943', 'L434.U'],
['KAM83077049', 'L433.U'],
['KAM83077048', 'L432.U'],
['KAM83077047', 'L431.U'],
['KAM83076994', 'L424.U'],
['KAM83028946', 'L423.U'],
['KAM83028945', 'L422.U'],
['KAM83028944', 'L421.U'],
['KAM83076993', 'L414.U'],
['KAM83076990', 'L413.U'],
['KAM83076991', 'L412.U'],
['KAM83076992', 'L411.U'],

['KAW54585385', 'L432.T2'],
['KAW27284366', 'LPPU.S'],
['KAW27085660', 'LPPU.T'],

['KAM83028942', 'K572.U'],
['KAM83028941', 'K571.U'],
['KAM83077019', 'K563.U'],
['KAM83077017', 'K562.U'],
['KAM83077018', 'K561.U'],
['KAM83028948', 'K554.U'],
['KAM83028940', 'K553.U'],
['KAM83028947', 'K552.U'],
['KAM83028939', 'K551.U'],
['KAM83077016', 'K544.U'],
['KAM83077015', 'K543.U'],
['KAM83077014', 'K542.U'],
['KAM83077013', 'K541.U'],
['KAM83077012', 'K534.U'],
['KAM83077011', 'K533.U'],
['KAM83077010', 'K532.U'],
['KAM83076979', 'K531.U'],
['KAM83076978', 'K524.U'],
['KAM83076977', 'K523.U'],
['KAM83076976', 'K522.U'],
['KAM83076975', 'K521.U'],
['KAM83076974', 'K514.U'],
['KAM83076973', 'K513.U'],
['KAM83076972', 'K512.U'],
['KAM83076971', 'K511.U'],

['KAW27284518', 'K522.T2'],
['KAW27284322', 'KPPU.S'],
['KAW27085668', 'KPPU.T'],
['KAW27284359', 'KPPS.S'],
['KAW27085661', 'KPPS.T'],

['KAM83077021', 'J364.U'],
['KAM83077020', 'J363.U'],
['KAM83077023', 'J362.U'],
['KAM83077022', 'J361.U'],
['KAM83076970', 'J355.U'],
['KAM83077027', 'J354.U'],
['KAM83077026', 'J353.U'],
['KAM83077025', 'J352.U'],
['KAM83077024', 'J351.U'],
['KAM83076933', 'J346.U'],
['KAM83076932', 'J345.U'],
['KAM83076931', 'J344.U'],
['KAM83076930', 'J343.U'],
['KAM83077029', 'J342.U'],
['KAM83077028', 'J341.U'],
['KAM83076938', 'J336.U'],
['KAM83076939', 'J335.U'],
['KAM83076937', 'J334.U'],
['KAM83076936', 'J333.U'],
['KAM83076935', 'J332.U'],
['KAM83076934', 'J331.U'],
['KAM83076998', 'J327.U'],
['KAM83076997', 'J326.U'],
['KAM83076996', 'J325.U'],
['KAM83076968', 'J324.U'],
['KAM83076999', 'J323.U'],
['KAM83076967', 'J322.U'],
['KAM83076995', 'J321.U'],
['KAM83076963', 'J317.U'],
['KAM83076961', 'J316.U'],
['KAM83076960', 'J315.U'],
['KAM83076962', 'J314.U'],
['KAM83076965', 'J313.U'],
['KAM83076964', 'J312.U'],
['KAM83076969', 'J311.U'],

['KAW54585335', 'J354.T1'],
['KAW27284391', 'J342.S'],
['KAW27085676', 'J342.T'],
['KAW27284330', 'JPPU.S'],
['KAW27085769', 'JPPU.T'],

['KAM83076985', 'H282.U'],
['KAM83076984', 'H281.U'],
['KAM83076986', 'H272.U'],
['KAM83076987', 'H271.U'],
['KAM83076949', 'H263.U'],
['KAM83076989', 'H262.U'],
['KAM83076988', 'H261.U'],
['KAM83076945', 'H254.U'],
['KAM83076946', 'H253.U'],
['KAM83076947', 'H252.U'],
['KAM83076948', 'H251.U'],
['KAM83076941', 'H244.U'],
['KAM83076942', 'H243.U'],
['KAM83076943', 'H242.U'],
['KAM83076944', 'H241.U'],
['KAM83077007', 'H234.U'],
['KAM83077005', 'H233.U'],
['KAM83077006', 'H232.U'],
['KAM83076940', 'H231.U'],
['KAM83077003', 'H224.U'],
['KAM83077004', 'H223.U'],
['KAM83077008', 'H222.U'],
['KAM83077009', 'H221.U'],
['KAM83077001', 'H214.U'],
['KAM83077002', 'H213.U'],
['KAM83077000', 'H212.U'],
['KAM83076966', 'H211.U'],

['KAW27284368', 'HPPU.S'],
['KAW27085658', 'HPPU.T'],

['KAM83076923', 'G164.U'],
['KAM83076924', 'G163.U'],
['KAM83076925', 'G162.U'],
['KAM83076926', 'G161.U'],
['KAM83076955', 'G155.U'],
['KAM83076954', 'G154.U'],
['KAM83076953', 'G153.U'],
['KAM83076952', 'G152.U'],
['KAM83076956', 'G151.U'],
['KAM83076927', 'G146.U'],
['KAM83077087', 'G145.U'],
['KAM83077086', 'G144.U'],
['KAM83076921', 'G143.U'],
['KAM83076928', 'G142.U'],
['KAM83076929', 'G141.U'],
['KAM83077083', 'G136.U'],
['KAM83077081', 'G135.U'],
['KAM83077085', 'G134.U'],
['KAM83077082', 'G133.U'],
['KAM83077080', 'G132.U'],
['KAM83077084', 'G131.U'],
['KAM83076922', 'G127.U'],
['KAM83076920', 'G126.U'],
['KAM83076950', 'G125.U'],
['KAM83076951', 'G124.U'],
['KAM83076957', 'G123.U'],
['KAM83076958', 'G122.U'],
['KAM83076959', 'G121.U'],
['KAM83076983', 'G116.U'],
['KAM83076982', 'G115.U'],
['KAM83076980', 'G114.U'],
['KAM83076981', 'G113.U'],
['KAM83077089', 'G112.U'],
['KAM83077088', 'G111.U'],

['KAM27316304', 'GPPK.P'],

['KAW27085715', 'G135.T2'],
['KAW27147781', 'G114.S'],
['KAW27085722', 'G114.T'],
['KAW27085723', 'G114.T2'],
['KAW27147778', 'GPPU.S'],
['KAW27085753', 'GPPU.T'],
['KAW27147773', 'GPPZ.S'],

['KAW27085716', 'G.W002'],
['KAW27085720', 'G.W003'],
['KAW27085721', 'G.W004'],
['KAW27085724', 'G.W005'],
['KAW27085725', 'G.W006'],
['KAW27085726', 'G.W007'],
['KAW27085727', 'G.W008'],
['KAW27085728', 'G.W009'],
['KAW27085751', 'G.W010'],
['KAW27085756', 'G.W011'],
['KAW27085758', 'G.W012'],
['KAW27085761', 'G.W013'],
['KAW27085765', 'G.W014'],
['KAW27085767', 'G.W015'],
['KAW27085768', 'G.W016'],
['KAW27085772', 'G.W017'],
['KAW27085774', 'G.W018'],
['KAW27147774', 'G.W019'],
['KAW27147779', 'G.W020'],
['KAW27147780', 'G.W021'],
['KAW27284331', 'G.W022'],
['KAW27284338', 'G.W023'],
['KAW27284342', 'G.W024'],
['KAW27284405', 'G.W025'],
['KAW27284409', 'G.W026'],
['KAW27284412', 'G.W027'],
['KAW27284413', 'G.W028'],
['KAW27284414', 'G.W029'],
['KAW27284415', 'G.W030'],
['KAW27284416', 'G.W031'],
['KAW27284417', 'G.W032'],
['KAW27284524', 'G.W033'],
['KAW27284525', 'G.W034'],
['KAW27284526', 'G.W035'],
['KAW27284527', 'G.W036'],
['KAW27284528', 'G.W037'],
['KAW27284530', 'G.W038'],
['KAW27284531', 'G.W039'],
['KAW27284532', 'G.W040'],
['KAW27284534', 'G.W041'],
['KAW27284535', 'G.W042'],
['KAW27284536', 'G.W043'],
['KAW27284537', 'G.W044'],
['KAW27284540', 'G.W045'],
['KAW27284541', 'G.W046'],
['KAW27284545', 'G.W047'],
['KAW27284547', 'G.W048'],
['KAW27284548', 'G.W049'],
['KAW27284549', 'G.W050'],
['KAW27284550', 'G.W051'],
['KAW27085717', 'G.W052'],
['KAW27085757', 'G.W053'],
['KAW27085759', 'G.W054'],
['KAW27085766', 'G.W055'],
['KAW27085771', 'G.W056'],
['KAW27284333', 'G.W057'],
['KAW27284334', 'G.W058'],
['KAW27284335', 'G.W059'],
['KAW27284337', 'G.W060'],
['KAW27284339', 'G.W061'],
['KAW27284543', 'G.W062'],
['KAW27284544', 'G.W063'],
['KAW27284533', 'G.W064'],
['KAW27284408', 'G.W065'],
['KAW27147775', 'G.W066'],
['KAW27284529', 'G.W067'],
['KAW27085729', 'G.W068'],
['KAW27284542', 'G.W069'],
['KAW27147776', 'G.W070'],
['KAW27284552', 'G.W071'],
['KAW27284411', 'G.W072'],
['KAW27284332', 'G.W073'],
['KAW27284546', 'G.W074'],
['KAW27284538', 'G.W075'],
['KAW27284523', 'G.W076'],
['KAW27284551', 'G.W077'],
['KAW27284341', 'G.W078'],
['KAW27284407', 'G.W079'],
['KAW27147782', 'G.W080'],
['KAW27085770', 'G.W081'],
['KAW27147777', 'G.W082'],
['KAW27085719', 'G.W083'],
['KAW27284340', 'G.W084'],
['KAW27085773', 'G.W085'],
['KAW27284539', 'G.W086'],
['KAW27085718', 'G.W087'],
['KAW27284336', 'G.W088'],

// this one looks fishy
// ['KAW27a84337', 'X.W000'],
['KAW27085665', 'X.W000'],
['KAW27085669', 'X.W001'],
['KAW27085670', 'X.W002'],
['KAW27085671', 'X.W003'],
['KAW27085672', 'X.W004'],
['KAW27085673', 'X.W005'],
['KAW27085674', 'X.W006'],
['KAW27085675', 'X.W007'],
['KAW27085677', 'X.W009'],
['KAW27085678', 'X.W010'],
['KAW27085679', 'X.W011'],
['KAW27085680', 'X.W012'],
['KAW27085681', 'X.W013'],
['KAW27085682', 'X.W014'],
['KAW27085684', 'X.W015'],
['KAW27085685', 'X.W016'],
['KAW27085686', 'X.W017'],
['KAW27085687', 'X.W018'],
['KAW27085688', 'X.W019'],
['KAW27085689', 'X.W020'],
['KAW27085690', 'X.W021'],
['KAW27085691', 'X.W022'],
['KAW27085692', 'X.W023'],
['KAW27085693', 'X.W024'],
['KAW27085694', 'X.W025'],
['KAW27085695', 'X.W026'],
['KAW27085697', 'X.W027'],
['KAW27085698', 'X.W028'],
['KAW27085700', 'X.W029'],
['KAW27085701', 'X.W030'],
['KAW27085702', 'X.W031'],
['KAW27085703', 'X.W032'],
['KAW27085704', 'X.W033'],
['KAW27085705', 'X.W034'],
['KAW27085706', 'X.W035'],
['KAW27085707', 'X.W036'],
['KAW27085708', 'X.W037'],
['KAW27085709', 'X.W038'],
['KAW27085710', 'X.W039'],
['KAW27085711', 'X.W040'],
['KAW27085712', 'X.W041'],
['KAW27085713', 'X.W042'],
['KAW27085714', 'X.W043'],
['KAW27085745', 'X.W044'],
['KAW27085746', 'X.W045'],
['KAW27085747', 'X.W046'],
['KAW27085748', 'X.W047'],
['KAW27085749', 'X.W048'],
['KAW27085750', 'X.W049'],
['KAW27085752', 'X.W050'],
['KAW27085754', 'X.W051'],
['KAW27085755', 'X.W052'],
['KAW27085760', 'X.W053'],
['KAW27085762', 'X.W054'],
['KAW27085763', 'X.W055'],
['KAW27085764', 'X.W056'],
['KAW27085775', 'X.W057'],
['KAW27085776', 'X.W058'],
['KAW27085777', 'X.W059'],
['KAW27085778', 'X.W060'],
['KAW27085779', 'X.W061'],
['KAW27085780', 'X.W062'],
['KAW27085781', 'X.W063'],
['KAW27085782', 'X.W064'],
['KAW27085783', 'X.W065'],
['KAW27085784', 'X.W066'],
['KAW27085785', 'X.W067'],
['KAW27085786', 'X.W068'],
['KAW27085787', 'X.W069'],
['KAW27085788', 'X.W070'],
['KAW27085789', 'X.W071'],
['KAW27147768', 'X.W072'],
['KAW27147769', 'X.W073'],
['KAW27147770', 'X.W074'],
['KAW27147771', 'X.W075'],
['KAW27147772', 'X.W076'],
['KAW27284208', 'X.W077'],
['KAW27284209', 'X.W078'],
['KAW27284210', 'X.W079'],
['KAW27284211', 'X.W080'],
['KAW27284212', 'X.W081'],
['KAW27284214', 'X.W082'],
['KAW27284215', 'X.W083'],
['KAW27284216', 'X.W084'],
['KAW27284217', 'X.W085'],
['KAW27284218', 'X.W086'],
['KAW27284219', 'X.W087'],
['KAW27284220', 'X.W088'],
['KAW27284221', 'X.W089'],
['KAW27284222', 'X.W090'],
['KAW27284238', 'X.W091'],
['KAW27284239', 'X.W092'],
['KAW27284240', 'X.W093'],
['KAW27284241', 'X.W094'],
['KAW27284242', 'X.W095'],
['KAW27284243', 'X.W096'],
['KAW27284244', 'X.W097'],
['KAW27284245', 'X.W098'],
['KAW27284246', 'X.W099'],
['KAW27284247', 'X.W100'],
// FIXME: KAW27284248 did not send during the evening of 2026-04-16, but it was sending regularly since 2026-04-14 13:13:23 CEST, it's very likely H26x/H27x/H28x
['KAW27284248', 'X.W101'],
['KAW27284249', 'X.W102'],
['KAW27284250', 'X.W103'],
['KAW27284251', 'X.W104'],
['KAW27284252', 'X.W105'],
['KAW27284253', 'X.W106'],
['KAW27284254', 'X.W107'],
['KAW27284255', 'X.W108'],
['KAW27284256', 'X.W109'],
['KAW27284257', 'X.W110'],
['KAW27284258', 'X.W111'],
['KAW27284259', 'X.W112'],
['KAW27284260', 'X.W113'],
['KAW27284261', 'X.W114'],
['KAW27284262', 'X.W115'],
['KAW27284263', 'X.W116'],
['KAW27284264', 'X.W117'],
['KAW27284265', 'X.W118'],
['KAW27284266', 'X.W119'],
['KAW27284267', 'X.W120'],
['KAW27284268', 'X.W121'],
['KAW27284269', 'X.W122'],
['KAW27284270', 'X.W123'],
['KAW27284271', 'X.W124'],
['KAW27284272', 'X.W125'],
['KAW27284273', 'X.W126'],
['KAW27284274', 'X.W127'],
['KAW27284275', 'X.W128'],
['KAW27284276', 'X.W129'],
['KAW27284277', 'X.W130'],
['KAW27284278', 'X.W131'],
['KAW27284279', 'X.W132'],
['KAW27284280', 'X.W133'],
['KAW27284281', 'X.W134'],
['KAW27284282', 'X.W135'],
// FIXME: the KAW27284308 was seen exactly once
['KAW27284308', 'X.W136'],
['KAW27284314', 'X.W137'],
['KAW27284325', 'X.W138'],
['KAW27284326', 'X.W139'],
['KAW27284328', 'X.W140'],
['KAW27284329', 'X.W141'],
['KAW27284358', 'X.W142'],
['KAW27284360', 'X.W143'],
['KAW27284364', 'X.W144'],
['KAW27284367', 'X.W145'],
['KAW27284370', 'X.W146'],
['KAW27284388', 'X.W147'],
['KAW27284389', 'X.W148'],
['KAW27284390', 'X.W149'],
['KAW27284392', 'X.W151'],
['KAW27284393', 'X.W152'],
['KAW27284394', 'X.W153'],
['KAW27284395', 'X.W154'],
['KAW27284396', 'X.W155'],
['KAW27284397', 'X.W156'],
['KAW27284398', 'X.W157'],
['KAW27284399', 'X.W158'],
['KAW27284400', 'X.W159'],
['KAW27284401', 'X.W160'],
['KAW27284402', 'X.W161'],
['KAW27284403', 'X.W162'],
['KAW27284404', 'X.W163'],
['KAW27284406', 'X.W164'],
['KAW27284410', 'X.W165'],
['KAW27284493', 'X.W166'],
['KAW27284498', 'X.W167'],
['KAW27284499', 'X.W168'],
['KAW27284501', 'X.W169'],
['KAW27284502', 'X.W170'],
['KAW27284503', 'X.W171'],
['KAW27284505', 'X.W172'],
['KAW27284507', 'X.W173'],
['KAW27284508', 'X.W174'],
['KAW27284509', 'X.W175'],
['KAW27284510', 'X.W176'],
['KAW27284511', 'X.W177'],
['KAW27284513', 'X.W178'],
['KAW27284515', 'X.W179'],
['KAW27284516', 'X.W180'],
['KAW27284517', 'X.W181'],
['KAW27284520', 'X.W182'],
['KAW27284521', 'X.W183'],
['KAW27284522', 'X.W184'],
// FIXME: KAW27286334 was seen exactly once
['KAW27286334', 'X.W185'],
['KAW54585225', 'X.W186'],
['KAW54585226', 'X.W187'],
['KAW54585227', 'X.W188'],
['KAW54585228', 'X.W189'],
['KAW54585229', 'X.W190'],
['KAW54585230', 'X.W191'],
['KAW54585231', 'X.W192'],
['KAW54585232', 'X.W193'],
['KAW54585233', 'X.W194'],
['KAW54585234', 'X.W195'],
['KAW54585235', 'X.W196'],
['KAW54585236', 'X.W197'],
['KAW54585237', 'X.W198'],
['KAW54585238', 'X.W199'],
['KAW54585239', 'X.W200'],
['KAW54585241', 'X.W201'],
['KAW54585243', 'X.W202'],
['KAW54585244', 'X.W203'],
['KAW54585245', 'X.W204'],
['KAW54585246', 'X.W205'],
['KAW54585247', 'X.W206'],
['KAW54585248', 'X.W207'],
['KAW54585249', 'X.W208'],
['KAW54585250', 'X.W209'],
['KAW54585251', 'X.W210'],
['KAW54585252', 'X.W211'],
['KAW54585253', 'X.W212'],
['KAW54585254', 'X.W213'],
['KAW54585330', 'X.W214'],
['KAW54585331', 'X.W215'],
['KAW54585332', 'X.W216'],
['KAW54585334', 'X.W217'],
['KAW54585336', 'X.W218'],
['KAW54585337', 'X.W219'],
['KAW54585338', 'X.W220'],
['KAW54585339', 'X.W221'],
['KAW54585340', 'X.W222'],
['KAW54585341', 'X.W223'],
['KAW54585342', 'X.W224'],
['KAW54585343', 'X.W225'],
['KAW54585344', 'X.W226'],
['KAW54585346', 'X.W227'],
['KAW54585348', 'X.W228'],
['KAW54585350', 'X.W229'],
['KAW54585352', 'X.W230'],
['KAW54585354', 'X.W231'],
['KAW54585355', 'X.W232'],
['KAW54585356', 'X.W233'],
['KAW54585357', 'X.W234'],
['KAW54585358', 'X.W235'],
['KAW54585375', 'X.W236'],
['KAW54585376', 'X.W237'],
['KAW54585377', 'X.W238'],
['KAW54585378', 'X.W239'],
['KAW54585379', 'X.W240'],
['KAW54585380', 'X.W241'],
['KAW54585381', 'X.W242'],
['KAW54585382', 'X.W243'],
['KAW54585384', 'X.W244'],
['KAW54585386', 'X.W246'],
['KAW54585387', 'X.W247'],
['KAW54585388', 'X.W248'],
['KAW54585389', 'X.W249'],
['KAW54585424', 'X.W250'],
['KAW54585426', 'X.W251'],
['KAW54585428', 'X.W252'],
['KAW54585429', 'X.W253'],
['KAW27085655', 'X.W254'],
['KAW27085662', 'X.W255'],
['KAW27085664', 'X.W256'],
['KAW27085666', 'X.W257'],
['KAW27085683', 'X.W258'],
['KAW27284313', 'X.W259'],
['KAW27284315', 'X.W260'],
['KAW27284316', 'X.W261'],
['KAW27284317', 'X.W262'],
['KAW27284318', 'X.W263'],
['KAW27284319', 'X.W264'],
['KAW27284320', 'X.W265'],
['KAW27284321', 'X.W266'],
['KAW27284323', 'X.W267'],
['KAW27284324', 'X.W268'],
['KAW27284327', 'X.W269'],
['KAW27284361', 'X.W270'],
['KAW27284362', 'X.W271'],
['KAW27284365', 'X.W272'],
['KAW27284369', 'X.W273'],
['KAW27284371', 'X.W274'],
['KAW27284372', 'X.W275'],
['KAW27284494', 'X.W276'],
['KAW27284495', 'X.W277'],
['KAW27284496', 'X.W278'],
['KAW27284497', 'X.W279'],
['KAW27284500', 'X.W280'],
['KAW27284506', 'X.W281'],
['KAW27284512', 'X.W282'],
['KAW27284514', 'X.W283'],
['KAW27284519', 'X.W285'],
['KAW54585345', 'X.W286'],
['KAW54585347', 'X.W287'],
['KAW54585349', 'X.W288'],
['KAW54585351', 'X.W289'],
['KAW54585353', 'X.W290'],
['KAW54585359', 'X.W291'],
['KAW54585420', 'X.W292'],
['KAW54585421', 'X.W293'],
['KAW54585422', 'X.W294'],
['KAW54585423', 'X.W295'],
['KAW54585425', 'X.W296'],
['KAW54585427', 'X.W297'],
['KAW54585430', 'X.W298'],
['KAW54585431', 'X.W299'],
['KAW54585432', 'X.W300'],
['KAW54585433', 'X.W301'],
['KAW54585434', 'X.W302'],
]);

const DEV_MGMT = 0x01;
const WMBUS_GW = 0x09;

const MSG_PING = 0x01;
const MSG_SET_ACTIVE_CFG = 0x03;
const EVENT_RX_PACKET = 0x20;

function close() {
    writer = null;
    port.close();
    port = null;
    decoder = null;
}

function hexify(buf) {
    return Array.from(buf).map((c) => (c > 15 ? '' : '0') + c.toString(16)).join(' ')
}

function buildCommand(destination, message, payload) {
    var buf = new Uint8Array(1 /* dst */ + 1 /* msg */ + payload.length + 2 /* CRC */);
    var i = 0;
    buf.set([destination], i++);
    buf.set([message], i++);
    buf.set(payload, i);
    i += payload.length;
    const crc16x25 = window.taichunmin.crc.crc16x25;
    const crc = crc16x25(buf.slice(0, buf.length - 2));
    buf.set([crc & 0xff], i++);
    buf.set([crc >> 8], i++);
    i += crc.length;
    var res = slip.encode(buf);
    return res;
}

function sendCommand(packet) {
    writer.write(packet);
    // console.log(`>>> ${hexify(packet)}`);
}

function extractPayload(packet, i) {
    return packet.slice(i, packet.length - 2 /* crc */)
}

function onPacket(packet) {
    console.log(`packet <<< ${hexify(packet)}`);
    const crc16x25 = window.taichunmin.crc.crc16x25;
    const crc = crc16x25(packet.slice(0, packet.length - 2));
    gotCrc = packet.at(packet.length - 2) + (packet.at(packet.length - 1) << 8);
    if (gotCrc != crc) {
        console.log(`!!! CRC mismatch: ${gotCrc} != ${crc} for ${hexify(packet)}`);
        return;
    }
    var i = 0;
    let sapId = packet.at(i++);
    let msgId = packet.at(i++);
    if (sapId == WMBUS_GW && msgId == EVENT_RX_PACKET) {
        let timestamp = packet.at(i++);
        timestamp += packet.at(i++) << 8;
        timestamp += packet.at(i++) << 16;
        timestamp += packet.at(i++) << 24;
        timestamp = new Date(timestamp * 1000);
        let decStatus = packet.at(i++);
        let encMode = packet.at(i++);
        let info = packet.at(i++);
        let signedData = new Int8Array(packet.buffer);
        let rssi = signedData.at(i++);
        let payload = extractPayload(packet, i);

        if (payload.length > 10) {
            let mfgCode = payload.at(2) + (payload.at(3) << 8);
            let mfgStr = [ (mfgCode / 1024) % 32, (mfgCode / 32) % 32, mfgCode % 32].map((c) => String.fromCharCode(c + 64)).join('');
            let sn = Array.from(payload.slice(4, 4+4).reverse()).map((c) => (c > 15 ? '' : '0') + c.toString(16)).join('');
            let meterId = mfgStr + sn;
            console.log(`${meterId} (${NAMES.get(meterId) ?? "unknown"}): ${rssi} dBm`);
            METERS.addPacket(NAMES.get(meterId) ?? meterId, meterId, rssi, hexify(payload));
        } else {
            console.log(`!!! short WM-Bus packet ${hexify(packet)}`);
        }
    } else {
        // There are also many other special packets, but we don't really care about these messages
        // and we are not asking for them (yet), so let's assume that it's always a command response.
        let statusCode = packet.at(i++);
        let payload = extractPayload(packet, i);
        // console.log(`||| sap ${hexify([sapId])} msg ${hexify([msgId])} status ${hexify([statusCode])} payload ${hexify(payload)}`);
    }
}

async function doConnect() {
    const serial = window.serial_polyfill ?? navigator.serial;
    decoder = new slip.Decoder({
        onMessage: onPacket,
    });
    serial.requestPort({filters: [
        { usbVendorId: 0x4b4, usbProductId: 0x0003}, // IMST iU891A-XL
    ]})
    .then((p) => {
        port = p;
        port.open({baudRate: 115200})
        .then(async () => {
            METERS.isConnected = true;
            METERS.error = null;
            writer = port.writable.getWriter();
            sendCommand(buildCommand(DEV_MGMT, MSG_PING, []));

            let pllTimeout = 10 * 60 * 1000;
            sendCommand(buildCommand(WMBUS_GW, MSG_SET_ACTIVE_CFG, 
                [
                    // link mode: 8bit
                    0x03, // CT-mode

                    // option bits: 16bit LSB first
                    0
                    | 1 << 1 // HCI RX packet notification
                    | 1 << 2 // HCI TX packet indication
                    | 1 << 3 // Radio Re-calibration
                    ,
                    0x00, // MSB of the option bits

                    // UI option bits: 16bit LSB-first
                    0
                    | 1 << 0 // RX LED
                    | 1 << 2 // TX LED
                    ,
                    0x00, // MSB of option bits

                    // LED flash timing: 16bit LSB-first
                    50,
                    0,

                    // Radio Re-Calibration timeout in ms, 32bit, LSB-first
                    pllTimeout & 0xff,
                    (pllTimeout >> 8) & 0xff,
                    (pllTimeout >> 16) & 0xff,
                    (pllTimeout >> 24) & 0xff,
                ]));
            try {
                for await (const chunk of port.readable) {
                    decoder.decode(chunk);
                }
            } catch (e) {
                METERS.isConnected = false;
                METERS.error = e;
            }
        }).catch((e) => {
            METERS.isConnected = false;
            METERS.error = e;
        });
    }).catch((e) => {
        METERS.isConnected = false;
        METERS.error = e;
    });
}

async function doConnectBLE() {
    decoder = new slip.Decoder({
        onMessage: onPacket,
    });
    try {
        METERS.port = new BleThing();
        await METERS.port.open();
        METERS.isConnected = true;
        METERS.port.addEventListener('disconnect', (event) => {
            METERS.isConnected = false;
            METERS.port = null;
            METERS.error = 'BLE disconnected';
        });
        METERS.port.rxCallback = (chunk) => {
            decoder.decode(chunk);
        };
    } catch (error) {
        METERS.isConnected = false;
        METERS.error = error;
    }
}

function isBluefy() {
    return navigator.userAgent.includes('Bluefy');
}

class BleThing extends EventTarget {
    serviceUUID = '479b3874-4778-4297-af5e-67532c966d77';
    rxUUID = 'a7a90e21-6e1e-4984-a801-cdb2be26cb22';

    _btDev = null;
    _rx_characteristic = null;
    rxCallback = null;

    async open() {
        console.log('Requesting device...');
        const options = {
            filters: [
                {services: [
                    this.serviceUUID,
                ]},
            ],
        };

        try {
            this._btDev = await navigator.bluetooth.requestDevice(options);
            this._btDev.addEventListener('gattserverdisconnected', () => { this._onDisconnected(); });
            console.log('BLE: Connecting...');
            let gatt = await this._btDev.gatt.connect();
            console.log('BLE: Connected, requesting services...');
            let service = await gatt.getPrimaryService(this.serviceUUID);
            console.log('BLE: requesting RX characteristics...');
            this._rx_characteristic = await service.getCharacteristic(this.rxUUID);
            console.log('BLE: starting notifications...');
            await this._rx_characteristic.startNotifications();
            if (!isBluefy()) {
                // BUG: without this start-stop-start cycle, the this._onRx() would be called against the *first*
                // BleSerial instance indefinitely. Explicitly removing the event listener is not enough,
                // and neigher is using an AbortController. Unless the *first* BleSerial calls stopNotifications(),
                // that instance will keep receiving notifications about changes in that characteristic.
                // It is not enough to call stopNotifications in BlePort.close(), because that one is not called when
                // the BLE connection drops for some external reason. Also, one cannot call stopNotifications from
                // an event handler that's connected to 'gattserverdisconnected' because the WebBluetooth actively rejects
                // that when the BLE/GATT server is not connected. Yay.
                await this._rx_characteristic.stopNotifications();
                await this._rx_characteristic.startNotifications();
            } else {
                console.log('BLE: Bluefy detected, not doing the unreg/reg shenanigans');
            }
            console.log('BLE: RX characteristics: notifications started');
            this._rx_characteristic.addEventListener('characteristicvaluechanged', (e) => { this._onRx(e); });
            console.log('BLE: All good, connected to ' + this._btDev.name);
        } catch (error) {
            await this.close();
            throw error;
        }
    }

    async close() {
        if (this._btDev && this._btDev.gatt.connected) {
            console.log('BLE: disconnecting...')
            await this._btDev.gatt.disconnect();
            this._btDev = null;
            console.log('BLE: disconnected')
        } else {
            console.log('BLE: Already disconnected');
        }
    }

    _onRx(event) {
        let v = event.target.value;
        let chunk = [];
        for (let i = v.byteOffset; i < v.byteLength; i++) {
            chunk.push(v.getUint8(i));
        }
        console.log(`BLE: <<< ${hexify(chunk)}`);
        if (this.rxCallback) {
            this.rxCallback(chunk);
        }
    }

    async _onDisconnected() {
        this._rx_characteristic = null;
        this._btDev = null;
        this.dispatchEvent(new Event('disconnect'));
    }
};

customElements.whenDefined('meters-widget').then(() => {
    METERS = document.querySelector('meters-widget');
    // METERS.real_connect_function = doConnect;
    METERS.real_connect_function = doConnectBLE;
    NAMES.forEach((pretty) => METERS.addKnownMeter(pretty));
});
