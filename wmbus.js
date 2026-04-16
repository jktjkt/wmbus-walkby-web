var port = null;
var decoder = null;
var writer = null;
var METERS = null;
const NAMES = new Map([
['KAM83076912', 'L482'],
['KAM83076919', 'L481'],
['KAM83076918', 'L472'],
['KAM83076917', 'L471'],
['KAM83076914', 'L463'],
['KAM83076915', 'L462'],
['KAM83076913', 'L461'],
['KAM83077041', 'L454'],
['KAM83077042', 'L453'],
['KAM83077040', 'L452'],
['KAM83076916', 'L451'],
['KAM83077046', 'L444'],
['KAM83077043', 'L443'],
['KAM83077044', 'L442'],
['KAM83077045', 'L441'],
['KAM83028943', 'L434'],
['KAM83077049', 'L433'],
['KAM83077048', 'L432'],
['KAM83077047', 'L431'],
['KAM83076994', 'L424'],
['KAM83028946', 'L423'],
['KAM83028945', 'L422'],
['KAM83028944', 'L421'],
['KAM83076993', 'L414'],
['KAM83076990', 'L413'],
['KAM83076991', 'L412'],
['KAM83076992', 'L411'],
['KAW27284366', 'LU.S'],
['KAW27085660', 'LU.T'],
['KAM83028942', 'K572'],
['KAM83028941', 'K571'],
['KAM83077019', 'K563'],
['KAM83077017', 'K562'],
['KAM83077018', 'K561'],
['KAM83028948', 'K554'],
['KAM83028940', 'K553'],
['KAM83028947', 'K552'],
['KAM83028939', 'K551'],
['KAM83077016', 'K544'],
['KAM83077015', 'K543'],
['KAM83077014', 'K542'],
['KAM83077013', 'K541'],
['KAM83077012', 'K534'],
['KAM83077011', 'K533'],
['KAM83077010', 'K532'],
['KAM83076979', 'K531'],
['KAM83076978', 'K524'],
['KAM83076977', 'K523'],
['KAM83076976', 'K522'],
['KAM83076975', 'K521'],
['KAM83076974', 'K514'],
['KAM83076973', 'K513'],
['KAM83076972', 'K512'],
['KAM83076971', 'K511'],
['KAW27284322', 'KU.S'],
['KAW27085668', 'KU.T'],
['KAW27284359', 'KSP.S'],
['KAW27085661', 'KSP.T'],
['KAM83077021', 'J364'],
['KAM83077020', 'J363'],
['KAM83077023', 'J362'],
['KAM83077022', 'J361'],
['KAM83076970', 'J355'],
['KAM83077027', 'J354'],
['KAM83077026', 'J353'],
['KAM83077025', 'J352'],
['KAM83077024', 'J351'],
['KAM83076933', 'J346'],
['KAM83076932', 'J345'],
['KAM83076931', 'J344'],
['KAM83076930', 'J343'],
['KAM83077029', 'J342'],
['KAM83077028', 'J341'],
['KAM83076938', 'J336'],
['KAM83076939', 'J335'],
['KAM83076937', 'J334'],
['KAM83076936', 'J333'],
['KAM83076935', 'J332'],
['KAM83076934', 'J331'],
['KAM83076998', 'J327'],
['KAM83076997', 'J326'],
['KAM83076996', 'J325'],
['KAM83076968', 'J324'],
['KAM83076999', 'J323'],
['KAM83076967', 'J322'],
['KAM83076995', 'J321'],
['KAM83076963', 'J317'],
['KAM83076961', 'J316'],
['KAM83076960', 'J315'],
['KAM83076962', 'J314'],
['KAM83076965', 'J313'],
['KAM83076964', 'J312'],
['KAM83076969', 'J311'],
['KAW54585335', 'J354.T1'],
['KAW27284330', 'JU.S'],
['KAW27085769', 'JU.T'],
['KAM83076985', 'H282'],
['KAM83076984', 'H281'],
['KAM83076986', 'H272'],
['KAM83076987', 'H271'],
['KAM83076949', 'H263'],
['KAM83076989', 'H262'],
['KAM83076988', 'H261'],
['KAM83076945', 'H254'],
['KAM83076946', 'H253'],
['KAM83076947', 'H252'],
['KAM83076948', 'H251'],
['KAM83076941', 'H244'],
['KAM83076942', 'H243'],
['KAM83076943', 'H242'],
['KAM83076944', 'H241'],
['KAM83077007', 'H234'],
['KAM83077005', 'H233'],
['KAM83077006', 'H232'],
['KAM83076940', 'H231'],
['KAM83077003', 'H224'],
['KAM83077004', 'H223'],
['KAM83077008', 'H222'],
['KAM83077009', 'H221'],
['KAM83077001', 'H214'],
['KAM83077002', 'H213'],
['KAM83077000', 'H212'],
['KAM83076966', 'H211'],
['KAW27284368', 'HU.S'],
['KAW27085658', 'HU.T'],
['KAM83076923', 'G164'],
['KAM83076924', 'G163'],
['KAM83076925', 'G162'],
['KAM83076926', 'G161'],
['KAM83076955', 'G155'],
['KAM83076954', 'G154'],
['KAM83076953', 'G153'],
['KAM83076952', 'G152'],
['KAM83076956', 'G151'],
['KAM83076927', 'G146'],
['KAM83077087', 'G145'],
['KAM83077086', 'G144'],
['KAM83076921', 'G143'],
['KAM83076928', 'G142'],
['KAM83076929', 'G141'],
['KAM83077083', 'G136'],
['KAM83077081', 'G135'],
['KAM83077085', 'G134'],
['KAM83077082', 'G133'],
['KAM83077080', 'G132'],
['KAM83077084', 'G131'],
['KAM83076922', 'G127'],
['KAM83076920', 'G126'],
['KAM83076950', 'G125'],
['KAM83076951', 'G124'],
['KAM83076957', 'G123'],
['KAM83076958', 'G122'],
['KAM83076959', 'G121'],
['KAM83076983', 'G116'],
['KAM83076982', 'G115'],
['KAM83076980', 'G114'],
['KAM83076981', 'G113'],
['KAM83077089', 'G112'],
['KAM83077088', 'G111'],
['KAM27316304', 'G-el1'],
['KAW27147781', 'G114.S'],
['KAW27085722', 'G114.T'],
['KAW27085723', 'G114.T2'],
['KAW27147778', 'GU.S'],
['KAW27085753', 'GU.T'],
['KAW27147773', 'GZ.S'],
['KAW27085715', 'G.W001'],
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
['KAW27085670', 'X.W001'],
['KAW27085671', 'X.W002'],
['KAW27085672', 'X.W003'],
['KAW27085673', 'X.W004'],
['KAW27085674', 'X.W005'],
['KAW27085675', 'X.W006'],
['KAW27085676', 'X.W007'],
['KAW27085677', 'X.W008'],
['KAW27085678', 'X.W009'],
['KAW27085679', 'X.W010'],
['KAW27085680', 'X.W011'],
['KAW27085681', 'X.W012'],
['KAW27085682', 'X.W013'],
['KAW27085684', 'X.W014'],
['KAW27085685', 'X.W015'],
['KAW27085686', 'X.W016'],
['KAW27085687', 'X.W017'],
['KAW27085688', 'X.W018'],
['KAW27085689', 'X.W019'],
['KAW27085690', 'X.W020'],
['KAW27085691', 'X.W021'],
['KAW27085692', 'X.W022'],
['KAW27085693', 'X.W023'],
['KAW27085694', 'X.W024'],
['KAW27085695', 'X.W025'],
['KAW27085697', 'X.W026'],
['KAW27085698', 'X.W027'],
['KAW27085700', 'X.W028'],
['KAW27085701', 'X.W029'],
['KAW27085702', 'X.W030'],
['KAW27085703', 'X.W031'],
['KAW27085704', 'X.W032'],
['KAW27085705', 'X.W033'],
['KAW27085706', 'X.W034'],
['KAW27085707', 'X.W035'],
['KAW27085708', 'X.W036'],
['KAW27085709', 'X.W037'],
['KAW27085710', 'X.W038'],
['KAW27085711', 'X.W039'],
['KAW27085712', 'X.W040'],
['KAW27085713', 'X.W041'],
['KAW27085714', 'X.W042'],
['KAW27085745', 'X.W043'],
['KAW27085746', 'X.W044'],
['KAW27085747', 'X.W045'],
['KAW27085748', 'X.W046'],
['KAW27085749', 'X.W047'],
['KAW27085750', 'X.W048'],
['KAW27085752', 'X.W049'],
['KAW27085754', 'X.W050'],
['KAW27085755', 'X.W051'],
['KAW27085760', 'X.W052'],
['KAW27085762', 'X.W053'],
['KAW27085763', 'X.W054'],
['KAW27085764', 'X.W055'],
['KAW27085775', 'X.W056'],
['KAW27085776', 'X.W057'],
['KAW27085777', 'X.W058'],
['KAW27085778', 'X.W059'],
['KAW27085779', 'X.W060'],
['KAW27085780', 'X.W061'],
['KAW27085781', 'X.W062'],
['KAW27085782', 'X.W063'],
['KAW27085783', 'X.W064'],
['KAW27085784', 'X.W065'],
['KAW27085785', 'X.W066'],
['KAW27085786', 'X.W067'],
['KAW27085787', 'X.W068'],
['KAW27085788', 'X.W069'],
['KAW27085789', 'X.W070'],
['KAW27147768', 'X.W071'],
['KAW27147769', 'X.W072'],
['KAW27147770', 'X.W073'],
['KAW27147771', 'X.W074'],
['KAW27147772', 'X.W075'],
['KAW27284215', 'X.W076'],
['KAW27284216', 'X.W077'],
['KAW27284217', 'X.W078'],
['KAW27284218', 'X.W079'],
['KAW27284219', 'X.W080'],
['KAW27284220', 'X.W081'],
['KAW27284221', 'X.W082'],
['KAW27284222', 'X.W083'],
['KAW27284238', 'X.W084'],
['KAW27284239', 'X.W085'],
['KAW27284240', 'X.W086'],
['KAW27284241', 'X.W087'],
['KAW27284242', 'X.W088'],
['KAW27284243', 'X.W089'],
['KAW27284244', 'X.W090'],
['KAW27284245', 'X.W091'],
['KAW27284246', 'X.W092'],
['KAW27284247', 'X.W093'],
['KAW27284248', 'X.W094'],
['KAW27284249', 'X.W095'],
['KAW27284250', 'X.W096'],
['KAW27284251', 'X.W097'],
['KAW27284252', 'X.W098'],
['KAW27284253', 'X.W099'],
['KAW27284254', 'X.W100'],
['KAW27284255', 'X.W101'],
['KAW27284256', 'X.W102'],
['KAW27284257', 'X.W103'],
['KAW27284258', 'X.W104'],
['KAW27284259', 'X.W105'],
['KAW27284260', 'X.W106'],
['KAW27284261', 'X.W107'],
['KAW27284262', 'X.W108'],
['KAW27284263', 'X.W109'],
['KAW27284264', 'X.W110'],
['KAW27284265', 'X.W111'],
['KAW27284266', 'X.W112'],
['KAW27284267', 'X.W113'],
['KAW27284268', 'X.W114'],
['KAW27284269', 'X.W115'],
['KAW27284273', 'X.W116'],
['KAW27284274', 'X.W117'],
['KAW27284275', 'X.W118'],
['KAW27284276', 'X.W119'],
['KAW27284277', 'X.W120'],
['KAW27284278', 'X.W121'],
['KAW27284279', 'X.W122'],
['KAW27284280', 'X.W123'],
['KAW27284281', 'X.W124'],
['KAW27284282', 'X.W125'],
['KAW27284308', 'X.W126'],
['KAW27284328', 'X.W127'],
['KAW27284329', 'X.W128'],
['KAW27284388', 'X.W129'],
['KAW27284389', 'X.W130'],
['KAW27284390', 'X.W131'],
['KAW27284391', 'X.W132'],
['KAW27284392', 'X.W133'],
['KAW27284393', 'X.W134'],
['KAW27284394', 'X.W135'],
['KAW27284395', 'X.W136'],
['KAW27284396', 'X.W137'],
['KAW27284397', 'X.W138'],
['KAW27284398', 'X.W139'],
['KAW27284399', 'X.W140'],
['KAW27284400', 'X.W141'],
['KAW27284401', 'X.W142'],
['KAW27284402', 'X.W143'],
['KAW27284403', 'X.W144'],
['KAW27284404', 'X.W145'],
['KAW27284406', 'X.W146'],
['KAW27284410', 'X.W147'],
['KAW27284516', 'X.W148'],
['KAW27284517', 'X.W149'],
['KAW27284520', 'X.W150'],
['KAW27284521', 'X.W151'],
['KAW27284522', 'X.W152'],
['KAW27286334', 'X.W153'],
['KAW54585225', 'X.W154'],
['KAW54585226', 'X.W155'],
['KAW54585227', 'X.W156'],
['KAW54585228', 'X.W157'],
['KAW54585229', 'X.W158'],
['KAW54585230', 'X.W159'],
['KAW54585231', 'X.W160'],
['KAW54585232', 'X.W161'],
['KAW54585233', 'X.W162'],
['KAW54585234', 'X.W163'],
['KAW54585235', 'X.W164'],
['KAW54585236', 'X.W165'],
['KAW54585237', 'X.W166'],
['KAW54585238', 'X.W167'],
['KAW54585239', 'X.W168'],
['KAW54585241', 'X.W169'],
['KAW54585243', 'X.W170'],
['KAW54585244', 'X.W171'],
['KAW54585245', 'X.W172'],
['KAW54585246', 'X.W173'],
['KAW54585247', 'X.W174'],
['KAW54585248', 'X.W175'],
['KAW54585249', 'X.W176'],
['KAW54585250', 'X.W177'],
['KAW54585251', 'X.W178'],
['KAW54585252', 'X.W179'],
['KAW54585253', 'X.W180'],
['KAW54585254', 'X.W181'],
['KAW54585330', 'X.W182'],
['KAW54585331', 'X.W183'],
['KAW54585332', 'X.W184'],
['KAW54585334', 'X.W185'],
['KAW54585336', 'X.W187'],
['KAW54585337', 'X.W188'],
['KAW54585338', 'X.W189'],
['KAW54585339', 'X.W190'],
['KAW54585340', 'X.W191'],
['KAW54585341', 'X.W192'],
['KAW54585342', 'X.W193'],
['KAW54585343', 'X.W194'],
['KAW54585344', 'X.W195'],
['KAW54585375', 'X.W196'],
['KAW54585376', 'X.W197'],
['KAW54585377', 'X.W198'],
['KAW54585378', 'X.W199'],
['KAW54585379', 'X.W200'],
['KAW54585380', 'X.W201'],
['KAW54585381', 'X.W202'],
['KAW54585382', 'X.W203'],
['KAW54585384', 'X.W204'],
['KAW54585385', 'X.W205'],
['KAW54585386', 'X.W206'],
['KAW54585387', 'X.W207'],
['KAW54585388', 'X.W208'],
['KAW54585389', 'X.W209'],
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
