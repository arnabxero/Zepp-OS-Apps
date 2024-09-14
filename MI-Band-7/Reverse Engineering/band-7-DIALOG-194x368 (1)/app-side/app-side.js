try {
    (() => {
        function e() {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof global) return global;
            if ("undefined" != typeof globalThis) return globalThis;
            throw new Error("unable to locate global object")
        }
        let t = e();
        t.Buffer || ("undefined" != typeof Buffer ? t.Buffer = Buffer : t.Buffer = DeviceRuntimeCore.Buffer);
        let s = e();
        s.Logger || "undefined" != typeof DeviceRuntimeCore && (s.Logger = DeviceRuntimeCore.HmLogger);
        class n {
            constructor() {
                this.map = new Map
            }
            on(e, t) {
                this.map.has(e) ? this.map.get(e).push(t) : this.map.set(e, [t])
            }
            off(e, t) {
                if (e)
                    if (t) {
                        const s = this.map.get(e);
                        if (!s) return;
                        const n = s.findIndex((e => e === t));
                        n >= 0 && s.splice(n, 1)
                    } else this.map.delete(e);
                else this.map.clear()
            }
            emit(e, ...t) {
                for (let s of this.map.get(e) ? this.map.get(e) : []) s && s(...t)
            }
            count(e) {
                return this.map.get(e) ? this.map.get(e).length : 0
            }
        }

        function i() {
            const e = {};
            return e.promise = new Promise((function (t, s) {
                e.resolve = t, e.reject = s
            })), e
        }

        function o(e, t) {
            const s = i();
            e = e || 1e3;
            const n = setTimeout((() => {
                clearTimeout(n), t ? t && t(s.resolve, s.reject) : s.reject("Timed out in " + e + "ms.")
            }), e);
            return s.promise
        }

        function r(e) {
            return h(function (e) {
                return JSON.stringify(e)
            }(e))
        }

        function a(e) {
            return t = function (e) {
                return e.toString("utf-8")
            }(e), JSON.parse(t);
            var t
        }

        function h(e) {
            return Buffer.from(e, "utf-8")
        }

        function d(e) {
            return Buffer.from(e)
        }

        function p(e) {
            return e.toString("hex")
        }

        function l() {
            return "undefined" != typeof hmApp
        }
        var u = Object.defineProperty,
            c = Object.defineProperties,
            f = Object.getOwnPropertyDescriptors,
            y = Object.getOwnPropertySymbols,
            g = Object.prototype.hasOwnProperty,
            m = Object.prototype.propertyIsEnumerable,
            I = (e, t, s) => t in e ? u(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s
            }) : e[t] = s;
        let L;
        L = l() ? Logger.getLogger("device-message") : Logger.getLogger("side-message");
        const b = 1,
            B = 1,
            w = 2,
            S = 4,
            k = 5,
            E = 6,
            U = 1,
            P = 1,
            v = 2,
            C = 3,
            D = 0,
            T = 1;
        let j = 1e4;

        function q() {
            return j++
        }
        let x = 1e3;
        class M extends n {
            constructor(e, t, s) {
                super(), this.id = e, this.type = t, this.ctx = s, this.tempBuf = null, this.chunks = [], this.count = 0, this.finishChunk = null
            }
            addChunk(e) {
                e.opCode === T && (this.count = e.seqId, this.finishChunk = e), e.payloadLength === e.payload.byteLength ? (this.chunks.push(e), this.checkIfReceiveAllChunks()) : this.emit("error", Error(`receive chunk data length error, expect ${e.payloadLength} but ${e.payload.byteLength}`))
            }
            checkIfReceiveAllChunks() {
                if (this.count === this.chunks.length) {
                    for (let e = 1; e <= this.count; e++) {
                        const t = this.chunks.find((t => t.seqId === e));
                        if (!t) return this.releaseBuf(), void this.emit("error", Error("receive data error"));
                        const s = t.payload;
                        this.tempBuf = this.tempBuf ? Buffer.concat([this.tempBuf, s]) : s
                    }
                    this.finishChunk && (this.finishChunk.payload = this.tempBuf, this.finishChunk.payloadLength = this.finishChunk.payload.byteLength, this.finishChunk.totalLength === this.finishChunk.payloadLength ? this.emit("data", this.finishChunk) : this.emit("error", Error(`receive full data length error, expect ${this.finishChunk.payloadLength} but ${this.finishChunk.payload.byteLength}`)))
                }
            }
            getLength() {
                return this.tempBufLength
            }
            releaseBuf() {
                this.tempBuf = null, this.chunks = [], this.finishChunk = null, this.count = 0
            }
        }
        class O {
            constructor() {
                this.sessions = new Map
            }
            key(e) {
                return `${e.id}:${e.type}`
            }
            newSession(e, t, s) {
                const n = new M(e, t, s);
                return this.sessions.set(this.key(n), n), n
            }
            destroy(e) {
                e.releaseBuf(), this.sessions.delete(this.key(e))
            }
            has(e, t) {
                return this.sessions.has(this.key({
                    id: e,
                    type: t
                }))
            }
            getById(e, t) {
                return this.sessions.get(this.key({
                    id: e,
                    type: t
                }))
            }
            clear() {
                this.sessions.clear()
            }
        }
        const J = new class extends n {
            constructor({
                appId: e = 0,
                appDevicePort: t = 20,
                appSidePort: s = 0
            } = {
                    appId: 0,
                    appDevicePort: 20,
                    appSidePort: 0
                }) {
                super(), this.isDevice = "undefined" != typeof hmBle, this.isSide = !this.isDevice, this.appId = e, this.appDevicePort = t, this.appSidePort = s, this.sendMsg = this.getSafeSend(), this.chunkSize = 2e3, this.tempBuf = null, this.shakeTask = i(), this.waitingShakePromise = this.shakeTask.promise, this.sessionMgr = new O, l()
            }
            now(e = Date.now()) {
                return function (e = Date.now()) {
                    return e % 1e7
                }(e)
            }
            connect(e) {
                this.on("message", (e => {
                    this.onMessage(e)
                })), hmBle && hmBle.createConnect(((e, t, s) => {
                    console.log("createConnect-------", s), this.onFragmentData(t)
                })), this.sendShake(), e && e(this)
            }
            disConnect(e) {
                this.sendClose(), this.off("message"), hmBle && hmBle.disConnect(), e && e(this)
            }
            listen(e) {
                messaging && messaging.peerSocket.addListener("message", (e => {
                    this.onMessage(e)
                })), this.waitingShakePromise = Promise.resolve(), e && e(this)
            }
            buildBin(e) {
                const t = 16 + e.payload.byteLength;
                let s = Buffer.alloc(t),
                    n = 0;
                return s.writeUInt8(e.flag, n), n += 1, s.writeUInt8(e.version, n), n += 1, s.writeUInt16LE(e.type, n), n += 2, s.writeUInt16LE(e.port1, n), n += 2, s.writeUInt16LE(e.port2, n), n += 2, s.writeUInt32LE(e.appId, n), n += 4, s.writeUInt32LE(e.extra, n), n += 4, s.fill(e.payload, n, e.payload.byteLength + n), s
            }
            buildShake() {
                return this.buildBin({
                    flag: b,
                    version: U,
                    type: B,
                    port1: this.appDevicePort,
                    port2: this.appSidePort,
                    appId: this.appId,
                    extra: 0,
                    payload: Buffer.from([this.appId])
                })
            }
            sendShake() {
                if (0 === this.appSidePort) {
                    const e = this.buildShake();
                    this.sendMsg(e)
                }
            }
            buildClose() {
                return this.buildBin({
                    flag: b,
                    version: U,
                    type: w,
                    port1: this.appDevicePort,
                    port2: this.appSidePort,
                    appId: this.appId,
                    extra: 0,
                    payload: Buffer.from([this.appId])
                })
            }
            sendClose() {
                if (0 !== this.appSidePort) {
                    const e = this.buildClose();
                    this.sendMsg(e)
                }
            }
            readBin(e) {
                const t = Buffer.from(e);
                let s = 0;
                const n = t.readUInt8(s);
                s += 1;
                const i = t.readUInt8(s);
                s += 1;
                const o = t.readUInt16LE(s);
                s += 2;
                const r = t.readUInt16LE(s);
                s += 2;
                const a = t.readUInt16LE(s);
                s += 2;
                const h = t.readUInt32LE(s);
                s += 4;
                const d = t.readUInt32LE(s);
                s += 4;
                return {
                    flag: n,
                    version: i,
                    type: o,
                    port1: r,
                    port2: a,
                    appId: h,
                    extra: d,
                    payload: t.subarray(s)
                }
            }
            buildData(e, t = {}) {
                return this.buildBin((s = ((e, t) => {
                    for (var s in t || (t = {})) g.call(t, s) && I(e, s, t[s]);
                    if (y)
                        for (var s of y(t)) m.call(t, s) && I(e, s, t[s]);
                    return e
                })({
                    flag: b,
                    version: U,
                    type: S,
                    port1: this.appDevicePort,
                    port2: this.appSidePort,
                    appId: this.appId,
                    extra: 0
                }, t), c(s, f({
                    payload: e
                }))));
                var s
            }
            json2Buf(e) {
                return r(e)
            }
            buf2Json(e) {
                return a(e)
            }
            buf2hex(e) {
                return p(e)
            }
            bin2hex(e) {
                return function (e) {
                    return p(d(e))
                }(e)
            }
            bin2json(e) {
                return function (e) {
                    return a(d(e))
                }(e)
            }
            sendBin(e) {
                console.log("sendBin-------", e.byteLength), hmBle.send(e.buffer, e.byteLength)
            }
            sendBinBySide(e) {
                messaging.peerSocket.send(e.buffer)
            }
            getSafeSend() {
                return this.isDevice ? this.sendBin.bind(this) : this.sendBinBySide.bind(this)
            }
            _logSend(e) {
                this.isDevice ? hmBle.send(e.buffer, e.byteLength) : messaging.peerSocket.send(e.buffer)
            }
            sendHmProtocol({
                requestId: e,
                dataBin: t,
                type: s
            }, {
                messageType: n = S
            } = {}) {
                const i = this.chunkSize,
                    o = t.byteLength;
                let r = 0;
                const a = Buffer.alloc(i),
                    h = e || q(),
                    d = x++;
                let p = 1;
                const l = Math.ceil(o / i);

                function u() {
                    return p++
                }
                for (let e = 1; e <= l; e++) {
                    if (e === l) {
                        const e = o - r,
                            i = Buffer.alloc(0 + e);
                        t.copy(i, 0, r, r + e), r += e, this.sendDataWithSession({
                            traceId: h,
                            spanId: d,
                            seqId: u(),
                            payload: i,
                            type: s,
                            opCode: T,
                            totalLength: o
                        }, {
                            messageType: n
                        });
                        break
                    }
                    t.copy(a, 0, r, r + i), r += i, this.sendDataWithSession({
                        traceId: h,
                        spanId: d,
                        seqId: u(),
                        payload: a,
                        type: s,
                        opCode: D,
                        totalLength: o
                    }, {
                        messageType: n
                    })
                }
            }
            sendSimpleProtocol({
                dataBin: e
            }, {
                messageType: t = S
            } = {}) {
                const s = this.chunkSize,
                    n = e.byteLength;
                let i = 0;
                const o = Buffer.alloc(s),
                    r = Math.ceil(n / s);
                for (let a = 1; a <= r; a++) {
                    if (a === r) {
                        const s = n - i,
                            o = Buffer.alloc(0 + s);
                        e.copy(o, 0, i, i + s), i += s, this.sendSimpleData({
                            payload: o
                        }, {
                            messageType: t
                        });
                        break
                    }
                    e.copy(o, 0, i, i + s), i += s, this.sendSimpleData({
                        payload: o
                    }, {
                        messageType: t
                    })
                }
            }
            sendJson({
                requestId: e = 0,
                json: t,
                type: s = P
            }) {
                const n = this.json2Buf(t),
                    i = e || q();
                this.sendHmProtocol({
                    requestId: i,
                    dataBin: n,
                    type: s
                })
            }
            sendLog(e) {
                const t = h(e);
                this.sendSimpleProtocol({
                    dataBin: t
                }, {
                    messageType: E
                })
            }
            sendDataWithSession({
                traceId: e,
                spanId: t,
                seqId: s,
                payload: n,
                type: i,
                opCode: o,
                totalLength: r
            }, {
                messageType: a
            }) {
                const h = this.buildPayload({
                    traceId: e,
                    spanId: t,
                    seqId: s,
                    totalLength: r,
                    type: i,
                    opCode: o,
                    payload: n
                });
                let d = this.isDevice ? this.buildData(h, {
                    type: a
                }) : h;
                this.sendMsg(d)
            }
            sendSimpleData({
                payload: e
            }, {
                messageType: t
            }) {
                let s = this.isDevice ? this.buildData(e, {
                    type: t
                }) : e;
                this._logSend(s)
            }
            buildPayload(e) {
                const t = 66 + e.payload.byteLength;
                let s = Buffer.alloc(t),
                    n = 0;
                return s.writeUInt32LE(e.traceId, n), n += 4, s.writeUInt32LE(0, n), n += 4, s.writeUInt32LE(e.spanId, n), n += 4, s.writeUInt32LE(e.seqId, n), n += 4, s.writeUInt32LE(e.totalLength, n), n += 4, s.writeUInt32LE(e.payload.byteLength, n), n += 4, s.writeUInt8(e.type, n), n += 1, s.writeUInt8(e.opCode, n), n += 1, s.writeUInt32LE(this.now(), n), n += 4, s.writeUInt32LE(0, n), n += 4, s.writeUInt32LE(0, n), n += 4, s.writeUInt32LE(0, n), n += 4, s.writeUInt32LE(0, n), n += 4, s.writeUInt32LE(0, n), n += 4, s.writeUInt32LE(0, n), n += 4, s.writeUInt32LE(0, n), n += 4, s.writeUInt32LE(0, n), n += 4, s.writeUInt32LE(0, n), n += 4, s.fill(e.payload, n, e.payload.byteLength + n), s
            }
            readPayload(e) {
                const t = Buffer.from(e);
                let s = 0;
                const n = t.readUInt32LE(s);
                s += 4;
                const i = t.readUInt32LE(s);
                s += 4;
                const o = t.readUInt32LE(s);
                s += 4;
                const r = t.readUInt32LE(s);
                s += 4;
                const a = t.readUInt32LE(s);
                s += 4;
                const h = t.readUInt32LE(s);
                s += 4;
                const d = t.readUInt8(s);
                s += 1;
                const p = t.readUInt8(s);
                s += 1;
                const l = t.readUInt32LE(s);
                s += 4;
                const u = t.readUInt32LE(s);
                s += 4;
                const c = t.readUInt32LE(s);
                s += 4;
                const f = t.readUInt32LE(s);
                s += 4;
                const y = t.readUInt32LE(s);
                s += 4;
                const g = t.readUInt32LE(s);
                s += 4;
                const m = t.readUInt32LE(s);
                s += 4;
                const I = t.readUInt32LE(s);
                s += 4;
                const L = t.readUInt32LE(s);
                s += 4;
                const b = t.readUInt32LE(s);
                s += 4;
                return {
                    traceId: n,
                    parentId: i,
                    spanId: o,
                    seqId: r,
                    totalLength: a,
                    payloadLength: h,
                    payloadType: d,
                    opCode: p,
                    timestamp1: l,
                    timestamp2: u,
                    timestamp3: c,
                    timestamp4: f,
                    timestamp5: y,
                    timestamp6: g,
                    timestamp7: m,
                    timestamp8: I,
                    extra1: L,
                    extra2: b,
                    payload: t.subarray(s)
                }
            }
            onFragmentData(e) {
                const t = this.readBin(e);
                this.emit("raw", e), t.flag === b && t.type === B ? (this.appSidePort = t.port2, this.shakeTask.resolve()) : t.flag === b && t.type === S && t.port2 === this.appSidePort || t.flag === b && t.type === k && t.port2 === this.appSidePort ? (this.emit("message", t.payload), this.emit("read", t)) : t.flag === b && t.type === E && t.port2 === this.appSidePort && this.emit("log", t.payload)
            }
            onMessage(e) {
                const t = this.readPayload(e);
                let s = this.sessionMgr.getById(t.traceId, t.payloadType);
                s || (s = this.sessionMgr.newSession(t.traceId, t.payloadType, this), s.on("data", (e => {
                    e.opCode === T && (e.payloadType === P ? this.emit("request", {
                        request: e,
                        response: ({
                            data: t
                        }) => {
                            this.response({
                                requestId: e.traceId,
                                data: t
                            })
                        }
                    }) : e.payloadType === v ? this.emit("response", e) : e.payloadType === C && this.emit("call", e), this.emit("data", e), this.sessionMgr.destroy(s))
                })), s.on("error", (e => {
                    this.sessionMgr.destroy(s), this.emit("error", e)
                }))), s.addChunk(t)
            }
            request(e, t) {
                let s = !1;
                return Promise.race([o(t.timeout, ((e, t) => {
                    s || t(new Error("Disconnected"))
                })), this.waitingShakePromise.then((() => {
                    const n = q(),
                        r = i();
                    t = Object.assign({
                        timeout: 6e4
                    }, t), s = !0;
                    const a = e => {
                        this.off("error", e), r.reject(e)
                    },
                        h = ({
                            traceId: e,
                            payload: t
                        }) => {
                            if (e === n) {
                                const e = this.buf2Json(t);
                                this.off("response", h), this.off("error", a), r.resolve(e)
                            }
                        };
                    this.on("response", h), this.on("error", a), this.sendJson({
                        requestId: n,
                        json: e,
                        type: P
                    });
                    let d = !1;
                    return Promise.race([o(t.timeout, ((e, s) => {
                        if (d) return e();
                        this.off("response", h), s(Error(`Timed out in ${t.timeout}ms.`))
                    })), r.promise.finally((() => {
                        d = !0
                    }))])
                }))])
            }
            requestCb(e, t, s) {
                return this.waitingShakePromise.then((() => {
                    const n = {
                        timeout: 6e4
                    };
                    "function" == typeof t ? (s = t, t = n) : t = Object.assign(n, t);
                    const i = q();
                    let o = null,
                        r = !1;
                    const a = ({
                        traceId: e,
                        payload: t
                    }) => {
                        if (e === i) {
                            const e = this.buf2Json(t);
                            this.off("response", a), o && clearTimeout(o), o = null, r = !0, s(null, e)
                        }
                    };
                    this.on("response", a), this.sendJson({
                        requestId: i,
                        json: e,
                        type: P
                    }), o = setTimeout((() => {
                        o = null, r || (this.off("response", a), s(Error(`Timed out in ${t.timeout}ms.`)))
                    }), t.timeout)
                }))
            }
            response({
                requestId: e,
                data: t
            }) {
                this.sendJson({
                    requestId: e,
                    json: t,
                    type: v
                })
            }
            call(e) {
                return this.waitingShakePromise.then((() => this.sendJson({
                    json: e,
                    type: C
                })))
            }
            log(e) {
                return this.waitingShakePromise.then((() => this.sendLog(e)))
            }
        };
        AppSideService({
            onInit(e) {
                J.listen((() => { })), J.on("request", (e => {
                    ! function (e, t) {
                        "fetch_fwd" === t.package && (t = t.data, console.log(t.method, t.url, t), fetch(t).then((t => {
                            let s = t.body;
                            if ("string" == typeof t.body) try {
                                s = JSON.parse(t.body)
                            } catch (e) {
                                s = null
                            }
                            console.log(t.status, s), e.response({
                                data: {
                                    status: t.status,
                                    json: s
                                }
                            })
                        })).catch((t => {
                            e.response({
                                data: {
                                    status: 0,
                                    json: {
                                        error: `${t.name}: ${t.message}`
                                    }
                                }
                            })
                        })))
                    }(e, J.buf2Json(e.request.payload))
                }))
            },
            onRun() { },
            onDestroy() { }
        })
    })()
} catch (e) {
    console.log(e)
}