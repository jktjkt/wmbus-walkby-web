var port = null;
var decoder = null;
var writer = null;
var table = null;
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
    // console.log(`<<< ${hexify(packet)}`);
    const crc16x25 = window.taichunmin.crc.crc16x25;
    const crc = crc16x25(packet.slice(0, packet.length - 2));
    gotCrc = packet.at(packet.length - 2) + (packet.at(packet.length - 1) << 8);
    if (gotCrc != crc) {
        console.log(`!!! CRC mismatch for ${hexify(packet)}`);
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
            table.addPacket(NAMES.get(meterId) ?? meterId, meterId, rssi, hexify(payload));
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

document.getElementById('connect').addEventListener('click', async () => {
    const serial = window.serial_polyfill ?? navigator.serial;
    serial.requestPort({filters: [
        { usbVendorId: 0x4b4, usbProductId: 0x0003}, // IMST iU891A-XL
    ]})
    .then((p) => {
        port = p;
        port.open({baudRate: 115200})
        .then(async () => {
            document.getElementById('connect').disabled = true;
            decoder = new slip.Decoder({
                onMessage: onPacket,
            });
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
            for await (const chunk of port.readable) {
                decoder.decode(chunk);
            }
        })
    });
});

customElements.whenDefined('meters-table').then(() => {
    table = document.querySelector('meters-table');
    NAMES.forEach((pretty) => table.addKnownMeter(pretty));
});
