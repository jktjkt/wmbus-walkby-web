import { LitElement, html, css, nothing } from "./lit-all.min.js";

class MetersWidget extends LitElement {
    static properties = {
        rows: { type: Array },
        packetCount: { type: Number },
        isConnected: { type: Boolean },
        webUsbActive: { type: Boolean },
        error: { type: String },
    };

    constructor() {
        super();
        this.known = [];
        this.rows = [];
        this.isConnected = false;
        this.webUsbActive = false;
        this.reinitPackets();
        setInterval(() => {
            if (this.storageDirty) {
                window.localStorage.setItem("PACKETS", JSON.stringify(this.PACKETS));
                this.storageDirty = false;
            }
        }, 5000);
        ;
    }

    static styles = css`
        div.meters-container { display: flex; flex-direction: column; gap: 1em; width: 100%; }
        div.meters-table { display: flex; flex-wrap: wrap; flex-direction: row; gap: 0.3em; }
        div.meter-reading { border: 1px solid black; padding: 4px; border-radius: 6px; text-align: left; }
        div.meter-reading.seen { background-color: #1e1; }
        div.meter-reading.got-packet { animation: blinkPacket 0.3s 1; }
        @keyframes blinkPacket {
            from { background-color: #1e1; }
            to { background-color: #08f; }
        }
        div.meters-stats { border: 1px solid black; text-align: center; }
        div.meters-stats.error { background-color: #e11 !important; }
        div.meters-stats.missing { background-color: #ee1; }
        div.meters-stats.done { background-color: #1e1; }
        div.meters-container > button { font-size: inherit !important; }
    `;

    firstUpdated() {
    }

    toggleWebUsbPolyfill() {
        if (this.webUsbActive) {
            window.serial_polyfill = null;
            this.webUsbActive = false;
        } else {
            window.serial_polyfill = window.serial_polyfill_inactive;
            this.webUsbActive = true;
        }
    }

    render() {
        const missingMeters = this.rows.reduce((missing, row) => missing += row.packets == 0, 0);
    
        return html`
        <div class=meters-container>
        <button @click=${this.clearStorage} ?disabled=${this.packetCount == 0}>Clear persistent storage</button>
        <button id="connect" @click="${this.doConnectWmBus}" ?disabled=${this.isConnected}>Connect</button>
        <button id="activate-polyfill" @click="${this.toggleWebUsbPolyfill}" ?disabled=${this.isConnected}>${this.webUsbActive ? "Switch back to WebSerial" : "Activate WebUSB Polyfill"}</button>
        <button @click="${this.downloadPackets}"">Download ${this.packetCount} packets</button>
        <div class="meters-stats ${missingMeters > 0 ? "missing" : "done"} ${this.error ? "error" : ""}">${missingMeters > 0 ? ("Still " + missingMeters + " to go") : "All meters seen"} <br/> ${this.error}</div>
        <div class=meters-table>
        ${this.rows.map(row => html`
          <div class="meter-reading ${row.packets > 0 ? "seen" : "unseen"} ${row.fresh ? "got-packet" : ""}" title="${row.packets ? row.packets + " packets" : nothing}">${row.name}</div>
        `)}
        </div>
        </div>
        `;
    }

    addPacket(name, meterId, rssi, packet) {
        ++this.packetCount;
        this.PACKETS.push({time: new Date().toJSON(), rssi: rssi, name: name, meterId: meterId, packet: packet});
        this.storageDirty = true;
        let idx = -1;
        for (let i = 0; i < this.rows.length; ++i) {
            if (this.rows[i].name == name) {
                idx = i;
                break;
            }
        }
        if (idx >= 0) {
            this.rows[idx].packets++;
            this.rows[idx].fresh = true;
            this.requestUpdate();
        } else {
            this.rows = [...this.rows, {name: name, packets: 1, fresh: true}];
            idx = this.rows.length - 1;
        }
        setTimeout(() => {
            this.rows[idx].fresh = false;
            this.requestUpdate();
        }, 1000);
    }

    addKnownMeter(name) {
        if (!this.known.find((r) => r.name == name)) {
            this.known = [...this.known, {name: name}];
        }
        if (!this.rows.find((r) => r.name == name)) {
            this.rows = [...this.rows, {name: name, packets: 0}];
        }
    }

    downloadPackets() {
        const blob = new Blob([JSON.stringify(this.PACKETS)], {type: 'text/json'});
        const a = document.createElement('a');
        a.setAttribute('download', `wmbus-${new Date().toJSON()}.json`);
        a.setAttribute('href', window.URL.createObjectURL(blob));
        a.click();
    }

    doConnectWmBus() {
        this.real_connect_function();
    }

    reinitPackets() {
        this.PACKETS = Array.from(JSON.parse(window.localStorage.getItem("PACKETS") ?? "[]"));
        this.packetCount = this.PACKETS.length;
        this.rows = [];
        for (let i = 0; i < this.known.length; ++i) {
            this.rows = [...this.rows, {name: this.known[i].name, packets: 0, fresh: false}];
        }
        this.storageDirty = false;
        this.requestUpdate();
    }

    clearStorage() {
        if (window.confirm("Delete all captured packets? This cannot be undone.")) {
            window.localStorage.removeItem("PACKETS");
            this.reinitPackets();
        }
    }
}

customElements.define('meters-widget', MetersWidget);

