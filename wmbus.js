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

['KAW54585389', 'LX78.T'],
['KAW54585388', 'LX77.T'],
['KAW54585387', 'LX76.T'],
['KAW54585386', 'LX75.T'],
['KAW54585384', 'LX73.T'],
['KAW54585383', 'LX72.T'],
['KAW54585381', 'LX71.T'],
['KAW54585380', 'LX70.T'],
['KAW54585379', 'LX69.T'],
['KAW54585378', 'LX68.T'],
['KAW54585375', 'LX67.T'],
['KAW54585358', 'LX66.T'],
['KAW54585357', 'LX65.T'],
['KAW54585356', 'LX64.T'],
['KAW54585355', 'LX63.T'],
['KAW54585331', 'LX60.T'],
['KAW54585328', 'LX59.X'],
['KAW54585254', 'LX58.T'],
['KAW54585249', 'LX57.T'],
['KAW54585244', 'LX56.T'],
['KAW54585243', 'LX55.T'],
['KAW54585240', 'LX54.X'],
['KAW54585237', 'LX53.T'],
['KAW54585236', 'LX52.T'],
['KAW54585232', 'LX51.T'],
['KAW54585231', 'LX50.T'],
['KAW27284522', 'LX49.T'],
['KAW27284521', 'LX48.T'],
['KAW27284520', 'LX47.T'],
['KAW27284517', 'LX46.T'],
['KAW27284516', 'LX45.T'],
['KAW27284515', 'LX44.T'],
['KAW27284511', 'LX43.T'],
['KAW27284510', 'LX42.T'],
['KAW27284509', 'LX41.T'],
['KAW27284508', 'LX40.T'],
['KAW27284507', 'LX39.T'],
['KAW27284506', 'LX38.T'],
['KAW27284505', 'LX37.T'],
['KAW27284504', 'LX36.T'],
['KAW27284503', 'LX35.T'],
['KAW27284502', 'LX34.T'],
['KAW27284501', 'LX33.T'],
['KAW27284499', 'LX32.T'],
['KAW27284498', 'LX31.T'],
['KAW27284326', 'LX28.S'],
['KAW27284325', 'LX27.S'],
['KAW27284276', 'LX26.S'],
['KAW27284275', 'LX25.S'],
['KAW27284272', 'LX24.S'],
['KAW27284271', 'LX23.S'],
['KAW27284270', 'LX22.S'],
['KAW27284269', 'LX21.S'],
['KAW27284268', 'LX20.S'],
['KAW27284267', 'LX19.S'],
['KAW27284266', 'LX18.S'],
['KAW27284265', 'LX17.S'],
['KAW27284264', 'LX16.S'],
['KAW27284262', 'LX15.S'],
['KAW27284261', 'LX14.S'],
['KAW27284259', 'LX13.S'],
['KAW27284251', 'LX12.S'],
['KAW27284250', 'LX11.S'],
['KAW27284222', 'LX10.S'],
['KAW27284219', 'LX09.S'],
['KAW27284218', 'LX08.S'],
['KAW27284214', 'LX07.S'],
['KAW27284212', 'LX06.S'],
['KAW27284211', 'LX05.S'],
['KAW27284210', 'LX04.S'],
['KAW27284209', 'LX03.S'],
['KAW27284208', 'LX02.S'],

['KAW54585385', 'L432.W'],

['KAW27085660', 'LPPU.T'],
['KAW27284366', 'LPPU.S'],

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

['KAW54585434', 'KX66.T'],
['KAW54585433', 'KX65.T'],
['KAW54585432', 'KX64.T'],
['KAW54585431', 'KX63.T'],
['KAW54585430', 'KX62.T'],
['KAW54585429', 'KX61.T'],
['KAW54585428', 'KX60.T'],
['KAW54585427', 'KX59.T'],
['KAW54585426', 'KX58.T'],
['KAW54585425', 'KX57.T'],
['KAW54585424', 'KX56.T'],
['KAW54585423', 'KX55.T'],
['KAW54585422', 'KX54.T'],
['KAW54585421', 'KX53.T'],
['KAW54585420', 'KX52.T'],
['KAW54585359', 'KX51.T'],
['KAW54585354', 'KX50.T'],
['KAW54585353', 'KX49.T'],
['KAW54585350', 'KX47.T'],
['KAW54585349', 'KX46.T'],
['KAW54585348', 'KX45.T'],
['KAW54585347', 'KX44.T'],
['KAW54585346', 'KX43.T'],
['KAW27284519', 'KX41.T'],
['KAW27284514', 'KX39.T'],
['KAW27284513', 'KX38.T'],
['KAW27284512', 'KX37.T'],
['KAW27284500', 'KX36.T'],
['KAW27284497', 'KX35.T'],
['KAW27284496', 'KX34.T'],
['KAW27284495', 'KX33.T'],
['KAW27284494', 'KX32.T'],
['KAW27284493', 'KX31.T'],
['KAW27284372', 'KX30.S'],
['KAW27284371', 'KX29.S'],
['KAW27284370', 'KX28.S'],
['KAW27284369', 'KX27.S'],
['KAW27284367', 'KX26.S'],
['KAW27284365', 'KX25.S'],
['KAW27284364', 'KX24.S'],
['KAW27284362', 'KX23.S'],
['KAW27284361', 'KX22.S'],
['KAW27284360', 'KX21.S'],
['KAW27284353', 'KX20.X'],
['KAW27284327', 'KX19.S'],
['KAW27284324', 'KX18.S'],
['KAW27284323', 'KX17.S'],
['KAW27284321', 'KX15.S'],
['KAW27284320', 'KX14.S'],
['KAW27284319', 'KX13.S'],
['KAW27284318', 'KX12.S'],
['KAW27284317', 'KX11.S'],
['KAW27284316', 'KX10.S'],
['KAW27284315', 'KX09.S'],
['KAW27284314', 'KX08.S'],
['KAW27284313', 'KX07.S'],
['KAW27085666', 'KX04.T'],
['KAW27085665', 'KX03.T'],
['KAW27085664', 'KX02.T'],
['KAW27085662', 'KX01.T'],
['KAW27085655', 'KX00.T'],
['KAW54585351', 'K531.W'],
['KAW54585345', 'K531.T'],
['KAW27284518', 'K522.W'],
['KAW27085668', 'KPPU.T'],
['KAW27284322', 'KPPU.S'],
['KAW27085661', 'KPPS.T'],
['KAW27284359', 'KPPS.S'],

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

['KAW54585377', 'JX94.T'],
['KAW54585376', 'JX93.T'],
['KAW54585344', 'JX92.T'],
['KAW54585343', 'JX91.T'],
['KAW54585342', 'JX90.T'],
['KAW54585341', 'JX89.T'],
['KAW54585340', 'JX88.T'],
['KAW54585338', 'JX86.T'],
['KAW54585337', 'JX85.T'],
['KAW54585336', 'JX84.T'],
['KAW54585332', 'JX81.T'],
['KAW54585330', 'JX80.T'],
['KAW54585253', 'JX79.T'],
['KAW54585250', 'JX76.T'],
['KAW54585247', 'JX75.T'],
['KAW54585246', 'JX74.T'],
['KAW27284550', 'JX71.T'],
['KAW27284547', 'JX70.T'],
['KAW27284402', 'JX69.S'],
['KAW27284401', 'JX68.S'],
['KAW27284400', 'JX67.S'],
['KAW27284399', 'JX66.S'],
['KAW27284398', 'JX65.S'],
['KAW27284397', 'JX64.S'],
['KAW27284396', 'JX63.S'],
['KAW27284395', 'JX62.S'],
['KAW27284394', 'JX61.S'],
['KAW27284393', 'JX60.S'],
['KAW27284392', 'JX59.S'],
['KAW27284390', 'JX57.S'],
['KAW27284389', 'JX56.S'],
['KAW27284388', 'JX55.S'],
['KAW27284339', 'JX54.S'],
['KAW27284337', 'JX53.S'],
['KAW27284282', 'JX51.S'],
['KAW27284281', 'JX50.S'],
['KAW27284280', 'JX49.S'],
['KAW27284279', 'JX48.S'],
['KAW27284278', 'JX47.S'],
['KAW27284277', 'JX46.S'],
['KAW27284263', 'JX45.S'],
['KAW27284258', 'JX44.S'],
['KAW27284257', 'JX43.S'],
['KAW27284244', 'JX42.S'],
['KAW27284238', 'JX41.S'],
['KAW27284221', 'JX40.S'],
['KAW27284220', 'JX39.S'],
['KAW27284217', 'JX38.S'],
['KAW27284216', 'JX37.S'],
['KAW27284215', 'JX36.S'],
['KAW27085789', 'JX35.T'],
['KAW27085788', 'JX34.T'],
['KAW27085787', 'JX33.T'],
['KAW27085786', 'JX32.T'],
['KAW27085785', 'JX31.T'],
['KAW27085784', 'JX30.T'],
['KAW27085783', 'JX29.T'],
['KAW27085782', 'JX28.T'],
['KAW27085781', 'JX27.T'],
['KAW27085780', 'JX26.T'],
['KAW27085779', 'JX25.T'],
['KAW27085778', 'JX24.T'],
['KAW27085777', 'JX23.T'],
['KAW27085776', 'JX22.T'],
['KAW27085775', 'JX21.T'],
['KAW27085772', 'JX20.T'],
['KAW27085771', 'JX19.T'],
['KAW27085714', 'JX17.T'],
['KAW27085701', 'JX16.T'],
['KAW27085700', 'JX15.T'],
['KAW27085684', 'JX14.T'],
['KAW27085683', 'JX13.T'],
['KAW27085682', 'JX12.T'],
['KAW27085681', 'JX11.T'],
['KAW27085680', 'JX10.T'],
['KAW27085679', 'JX09.T'],
['KAW27085678', 'JX08.T'],
['KAW27085677', 'JX07.T'],
['KAW27085675', 'JX05.T'],
['KAW27085674', 'JX04.T'],
['KAW27085673', 'JX03.T'],
['KAW27085672', 'JX02.T'],
['KAW27085671', 'JX01.T'],
['KAW27085670', 'JX00.T'],
['KAW54585335', 'J354.T'],
['KAW54585339', 'J351.T'],
['KAW54585241', 'J346.W'],
['KAW54585245', 'J346.T'],
['KAW27085676', 'J342.T'],
['KAW27284391', 'J342.S'],
['KAW54585251', 'J335.W'],
['KAW54585252', 'J335.T'],

['KAW27085769', 'JPPU.T'],
['KAW27284330', 'JPPU.S'],

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

['KAW54585239', 'HX75.T'],
['KAW54585238', 'HX74.T'],
['KAW54585235', 'HX73.T'],
['KAW54585234', 'HX72.T'],
['KAW54585233', 'HX71.T'],
['KAW54585230', 'HX70.T'],
['KAW54585229', 'HX69.T'],
['KAW54585228', 'HX68.T'],
['KAW54585227', 'HX67.T'],
['KAW54585226', 'HX66.T'],
['KAW54585225', 'HX65.T'],
['KAW27284410', 'HX64.S'],
['KAW27284406', 'HX63.S'],
['KAW27284404', 'HX62.S'],
['KAW27284403', 'HX61.S'],
['KAW27284329', 'HX59.S'],
['KAW27284328', 'HX58.S'],
['KAW27284260', 'HX57.S'],
['KAW27284256', 'HX56.S'],
['KAW27284255', 'HX55.S'],
['KAW27284254', 'HX54.S'],
['KAW27284253', 'HX53.S'],
['KAW27284252', 'HX52.S'],
['KAW27284249', 'HX51.S'],
['KAW27284248', 'HX50.S'],
['KAW27284247', 'HX49.S'],
['KAW27284246', 'HX48.S'],
['KAW27284245', 'HX47.S'],
['KAW27284243', 'HX46.S'],
['KAW27284242', 'HX45.S'],
['KAW27284241', 'HX44.S'],
['KAW27284240', 'HX43.S'],
['KAW27284239', 'HX42.S'],
['KAW27147772', 'HX41.S'],
['KAW27147771', 'HX40.S'],
['KAW27147770', 'HX39.S'],
['KAW27147769', 'HX38.S'],
['KAW27147768', 'HX37.S'],
['KAW27085764', 'HX36.T'],
['KAW27085763', 'HX35.T'],
['KAW27085762', 'HX34.T'],
['KAW27085760', 'HX33.T'],
['KAW27085755', 'HX32.T'],
['KAW27085754', 'HX31.T'],
['KAW27085752', 'HX30.T'],
['KAW27085750', 'HX29.T'],
['KAW27085749', 'HX28.T'],
['KAW27085748', 'HX27.T'],
['KAW27085747', 'HX26.T'],
['KAW27085746', 'HX25.T'],
['KAW27085745', 'HX24.T'],
['KAW27085713', 'HX23.T'],
['KAW27085712', 'HX22.T'],
['KAW27085711', 'HX21.T'],
['KAW27085710', 'HX20.T'],
['KAW27085708', 'HX19.T'],
['KAW27085707', 'HX18.T'],
['KAW27085706', 'HX17.T'],
['KAW27085705', 'HX16.T'],
['KAW27085703', 'HX15.T'],
['KAW27085702', 'HX14.T'],
['KAW27085699', 'HX13.X'],
['KAW27085698', 'HX12.T'],
['KAW27085697', 'HX11.T'],
['KAW27085696', 'HX10.X'],
['KAW27085695', 'HX09.T'],
['KAW27085694', 'HX08.T'],
['KAW27085693', 'HX07.T'],
['KAW27085692', 'HX06.T'],
['KAW27085691', 'HX05.T'],
['KAW27085690', 'HX04.T'],
['KAW27085687', 'HX03.T'],
['KAW27085686', 'HX02.T'],
['KAW27085656', 'HX00.X'],

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

['KAW54585248', 'GX96.T'],
['KAW54585242', 'GX95.X'],
['KAW27284552', 'GX94.T'],
['KAW27284551', 'GX93.T'],
['KAW27284549', 'GX92.T'],
['KAW27284548', 'GX91.T'],
['KAW27284546', 'GX90.T'],
['KAW27284545', 'GX89.T'],
['KAW27284544', 'GX88.T'],
['KAW27284543', 'GX87.T'],
['KAW27284542', 'GX86.T'],
['KAW27284541', 'GX85.T'],
['KAW27284540', 'GX84.T'],
['KAW27284539', 'GX83.T'],
['KAW27284538', 'GX82.T'],
['KAW27284534', 'GX78.T'],
['KAW27284533', 'GX77.T'],
['KAW27284530', 'GX74.T'],
['KAW27284529', 'GX73.T'],
['KAW27284528', 'GX72.T'],
['KAW27284527', 'GX71.T'],
['KAW27284526', 'GX70.T'],
['KAW27284525', 'GX69.T'],
['KAW27284524', 'GX68.T'],
['KAW27284523', 'GX67.T'],
['KAW27284417', 'GX66.S'],
['KAW27284413', 'GX62.S'],
['KAW27284412', 'GX61.S'],
['KAW27284411', 'GX60.S'],
['KAW27284409', 'GX59.S'],
['KAW27284408', 'GX58.S'],
['KAW27284407', 'GX57.S'],
['KAW27284405', 'GX56.S'],
['KAW27284342', 'GX55.S'],
['KAW27284341', 'GX54.S'],
['KAW27284340', 'GX53.S'],
['KAW27284338', 'GX52.S'],
['KAW27284336', 'GX51.S'],
['KAW27284335', 'GX50.S'],
['KAW27284334', 'GX49.S'],
['KAW27284333', 'GX48.S'],
['KAW27284332', 'GX47.S'],
['KAW27284331', 'GX46.S'],
['KAW27284274', 'GX45.S'],
['KAW27284273', 'GX44.S'],
['KAW27284213', 'GX43.S'],
['KAW27147782', 'GX42.S'],
['KAW27147779', 'GX39.S'],
['KAW27147777', 'GX37.S'],
['KAW27147776', 'GX36.S'],
['KAW27147775', 'GX35.S'],
['KAW27147774', 'GX34.S'],
['KAW27085773', 'GX31.T'],
['KAW27085770', 'GX30.T'],
['KAW27085768', 'GX29.T'],
['KAW27085767', 'GX28.T'],
['KAW27085766', 'GX27.T'],
['KAW27085765', 'GX26.T'],
['KAW27085761', 'GX25.T'],
['KAW27085759', 'GX24.T'],
['KAW27085758', 'GX23.T'],
['KAW27085757', 'GX22.T'],
['KAW27085756', 'GX21.T'],
['KAW27085751', 'GX19.T'],
['KAW27085729', 'GX18.T'],
['KAW27085726', 'GX15.T'],
['KAW27085725', 'GX14.T'],
['KAW27085724', 'GX13.T'],
['KAW27085721', 'GX10.T'],
['KAW27085720', 'GX09.T'],
['KAW27085719', 'GX08.T'],
['KAW27085718', 'GX07.T'],
['KAW27085717', 'GX06.T'],
['KAW27085716', 'GX05.T'],
['KAW27085709', 'GX03.T'],
['KAW27085704', 'GX02.T'],
['KAW27085688', 'GX01.T'],
['KAW27085685', 'GX00.T'],

['KAW27085774', 'G163.T'],
['KAW27085715', 'G135.T'],
['KAW27284537', 'G116.T'],
['KAW27284414', 'G116.S'],
['KAW27284531', 'G115.W'],
['KAW27284536', 'G115.T'],
['KAW27284416', 'G115.S'],
['KAW27085723', 'G114.W'],
['KAW27085722', 'G114.T'],
['KAW27147781', 'G114.S'],
['KAW27284532', 'G112.W'],
['KAW27284535', 'G112.T'],
['KAW27284415', 'G112.S'],
['KAW27085728', 'G111.W'],
['KAW27085727', 'G111.T'],
['KAW27147780', 'G111.S'],

['KAW27147773', 'GPPZ.S'],
['KAW27085753', 'GPPU.T'],
['KAW27147778', 'GPPU.S'],

['KAW54585382', '_X05.T'],
['KAW27284358', '_X04.S'],
['KAW27085669', '_X03.T'],
['KAW27085689', '_X02.T'],
['KAW54585352', '_X01.T'],
['KAW54585334', '_X00.T'],
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
