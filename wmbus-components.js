import { LitElement, html, css } from "./lit-all.min.js";

class MetersTable extends LitElement {
    static properties = {
        rows: { type: Array },
        packetCount: { type: Number },
    };

    constructor() {
        super();
        this.rows = [];
        this.packetCount = 0;
        this.PACKETS = new Array();
    }

    static styles = css`
        table { border-collapse: collapse; width: 300px; }
        th, td { border: 1px solid black; padding: 4px; text-align: left; }
        th { background-color: #eee; }
        tr.seen { background-color: #1e1; }
        div.missing { border: 2px solid red; }
    `;

    render() {
        const missingMeters = this.rows.reduce((missing, row) => missing += row.packets == 0, 0);
        const download = html`<button onclick="document.querySelector('meters-table').downloadPackets();">Download ${this.packetCount} packets</button>`;
        const indicator = (missingMeters > 0 ? html`<div class=missing>Still ${missingMeters} meters to go</div>` : html``);
    
        return html`
        ${download}
        ${indicator}
        <table>
        <thead>
        <tr>
            <th>Meter</th>
            <th># packets</th>
        </tr>
        </thead>
        <tbody>
        ${this.rows.map(row => html`
          <tr class=${row.packets > 0 ? "seen" : "unseen"}>
              <td>${row.name}</td>
              <td>${row.packets}</td>
          </tr>
        `)}
        </tbody>
        </table>
        `;
    }

    addPacket(name, meterId, rssi, packet) {
        ++this.packetCount;
        this.PACKETS.push({time: new Date().toJSON(), rssi: rssi, name: name, meterId: meterId, packet: packet});
        for (let i = 0; i < this.rows.length; ++i) {
            if (this.rows[i].name == name) {
                this.rows[i].packets++;
                this.requestUpdate();
                return;
            }
        }
        this.rows = [...this.rows, {name: name, packets: 1}];
    }

    addKnownMeter(name) {
        if (this.rows.find((r) => r.name == name)) {
            return;
        }
        this.rows = [...this.rows, {name: name, packets: 0}];
    }

    downloadPackets() {
        const blob = new Blob([JSON.stringify(this.PACKETS)], {type: 'text/json'});
        const a = document.createElement('a');
        a.setAttribute('download', 'wmbus-packets.json');
        a.setAttribute('href', window.URL.createObjectURL(blob));
        a.click();
    }
}

customElements.define('meters-table', MetersTable);

