(self.webpackChunk_hydrooj_ui_default = self.webpackChunk_hydrooj_ui_default || []).push([[2], {
    29514: (pe,z,E)=>{
        "use strict";
        E.r(z),
        E.d(z, {
            DiffDOM: ()=>he,
            TraceLogger: ()=>ce,
            nodeToObj: ()=>re,
            stringToObj: ()=>ie
        });
        function b(l, t, e) {
            let r;
            return l.nodeName === "#text" ? r = e.document.createTextNode(l.data) : l.nodeName === "#comment" ? r = e.document.createComment(l.data) : (t ? r = e.document.createElementNS("http://www.w3.org/2000/svg", l.nodeName) : l.nodeName.toLowerCase() === "svg" ? (r = e.document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            t = !0) : r = e.document.createElement(l.nodeName),
            l.attributes && Object.entries(l.attributes).forEach(([s,o])=>r.setAttribute(s, o)),
            l.childNodes && l.childNodes.forEach(s=>r.appendChild(b(s, t, e))),
            e.valueDiffing && (l.value && (r.value = l.value),
            l.checked && (r.checked = l.checked),
            l.selected && (r.selected = l.selected))),
            r
        }
        function n(l, t) {
            for (t = t.slice(); t.length > 0; ) {
                if (!l.childNodes)
                    return !1;
                const e = t.splice(0, 1)[0];
                l = l.childNodes[e]
            }
            return l
        }
        function v(l, t, e) {
            let r = n(l, t[e._const.route]), s, o, i, h, _;
            const y = {
                diff: t,
                node: r
            };
            if (e.preDiffApply(y))
                return !0;
            switch (t[e._const.action]) {
            case e._const.addAttribute:
                if (!r || !r.setAttribute)
                    return !1;
                r.setAttribute(t[e._const.name], t[e._const.value]);
                break;
            case e._const.modifyAttribute:
                if (!r || !r.setAttribute)
                    return !1;
                r.setAttribute(t[e._const.name], t[e._const.newValue]),
                r.nodeName === "INPUT" && t[e._const.name] === "value" && (r.value = t[e._const.newValue]);
                break;
            case e._const.removeAttribute:
                if (!r || !r.removeAttribute)
                    return !1;
                r.removeAttribute(t[e._const.name]);
                break;
            case e._const.modifyTextElement:
                if (!r || r.nodeType !== 3)
                    return !1;
                e.textDiff(r, r.data, t[e._const.oldValue], t[e._const.newValue]);
                break;
            case e._const.modifyValue:
                if (!r || typeof r.value > "u")
                    return !1;
                r.value = t[e._const.newValue];
                break;
            case e._const.modifyComment:
                if (!r || typeof r.data > "u")
                    return !1;
                e.textDiff(r, r.data, t[e._const.oldValue], t[e._const.newValue]);
                break;
            case e._const.modifyChecked:
                if (!r || typeof r.checked > "u")
                    return !1;
                r.checked = t[e._const.newValue];
                break;
            case e._const.modifySelected:
                if (!r || typeof r.selected > "u")
                    return !1;
                r.selected = t[e._const.newValue];
                break;
            case e._const.replaceElement:
                r.parentNode.replaceChild(b(t[e._const.newValue], t[e._const.newValue].nodeName.toLowerCase() === "svg", e), r);
                break;
            case e._const.relocateGroup:
                h = Array(...new Array(t.groupLength)).map(()=>r.removeChild(r.childNodes[t[e._const.from]])),
                h.forEach((x,S)=>{
                    S === 0 && (o = r.childNodes[t[e._const.to]]),
                    r.insertBefore(x, o || null)
                }
                );
                break;
            case e._const.removeElement:
                r.parentNode.removeChild(r);
                break;
            case e._const.addElement:
                i = t[e._const.route].slice(),
                _ = i.splice(i.length - 1, 1)[0],
                r = n(l, i),
                r.insertBefore(b(t[e._const.element], r.namespaceURI === "http://www.w3.org/2000/svg", e), r.childNodes[_] || null);
                break;
            case e._const.removeTextElement:
                if (!r || r.nodeType !== 3)
                    return !1;
                r.parentNode.removeChild(r);
                break;
            case e._const.addTextElement:
                if (i = t[e._const.route].slice(),
                _ = i.splice(i.length - 1, 1)[0],
                s = e.document.createTextNode(t[e._const.value]),
                r = n(l, i),
                !r || !r.childNodes)
                    return !1;
                r.insertBefore(s, r.childNodes[_] || null);
                break;
            default:
                console.log("unknown action")
            }
            return y.newNode = s,
            e.postDiffApply(y),
            !0
        }
        function P(l, t, e) {
            return t.every(r=>v(l, r, e))
        }
        function M(l, t, e) {
            const r = l[t];
            l[t] = l[e],
            l[e] = r
        }
        function Q(l, t, e) {
            switch (t[e._const.action]) {
            case e._const.addAttribute:
                t[e._const.action] = e._const.removeAttribute,
                v(l, t, e);
                break;
            case e._const.modifyAttribute:
                M(t, e._const.oldValue, e._const.newValue),
                v(l, t, e);
                break;
            case e._const.removeAttribute:
                t[e._const.action] = e._const.addAttribute,
                v(l, t, e);
                break;
            case e._const.modifyTextElement:
                M(t, e._const.oldValue, e._const.newValue),
                v(l, t, e);
                break;
            case e._const.modifyValue:
                M(t, e._const.oldValue, e._const.newValue),
                v(l, t, e);
                break;
            case e._const.modifyComment:
                M(t, e._const.oldValue, e._const.newValue),
                v(l, t, e);
                break;
            case e._const.modifyChecked:
                M(t, e._const.oldValue, e._const.newValue),
                v(l, t, e);
                break;
            case e._const.modifySelected:
                M(t, e._const.oldValue, e._const.newValue),
                v(l, t, e);
                break;
            case e._const.replaceElement:
                M(t, e._const.oldValue, e._const.newValue),
                v(l, t, e);
                break;
            case e._const.relocateGroup:
                M(t, e._const.from, e._const.to),
                v(l, t, e);
                break;
            case e._const.removeElement:
                t[e._const.action] = e._const.addElement,
                v(l, t, e);
                break;
            case e._const.addElement:
                t[e._const.action] = e._const.removeElement,
                v(l, t, e);
                break;
            case e._const.removeTextElement:
                t[e._const.action] = e._const.addTextElement,
                v(l, t, e);
                break;
            case e._const.addTextElement:
                t[e._const.action] = e._const.removeTextElement,
                v(l, t, e);
                break;
            default:
                console.log("unknown action")
            }
        }
        function B(l, t, e) {
            t.length || (t = [t]),
            t = t.slice(),
            t.reverse(),
            t.forEach(r=>{
                Q(l, r, e)
            }
            )
        }
        class V {
            constructor(t={}) {
                Object.entries(t).forEach(([e,r])=>this[e] = r)
            }
            toString() {
                return JSON.stringify(this)
            }
            setValue(t, e) {
                return this[t] = e,
                this
            }
        }
        function te(l) {
            const t = [];
            return t.push(l.nodeName),
            l.nodeName !== "#text" && l.nodeName !== "#comment" && l.attributes && (l.attributes.class && t.push(`${l.nodeName}.${l.attributes.class.replace(/ /g, ".")}`),
            l.attributes.id && t.push(`${l.nodeName}#${l.attributes.id}`)),
            t
        }
        function ee(l) {
            const t = {}
              , e = {};
            return l.forEach(r=>{
                te(r).forEach(s=>{
                    const o = s in t
                      , i = s in e;
                    !o && !i ? t[s] = !0 : o && (delete t[s],
                    e[s] = !0)
                }
                )
            }
            ),
            t
        }
        function Y(l, t) {
            const e = ee(l)
              , r = ee(t)
              , s = {};
            return Object.keys(e).forEach(o=>{
                r[o] && (s[o] = !0)
            }
            ),
            s
        }
        function K(l) {
            return delete l.outerDone,
            delete l.innerDone,
            delete l.valueDone,
            l.childNodes ? l.childNodes.every(K) : !0
        }
        function T(l, t) {
            if (!["nodeName", "value", "checked", "selected", "data"].every(e=>l[e] === t[e]) || Boolean(l.attributes) !== Boolean(t.attributes) || Boolean(l.childNodes) !== Boolean(t.childNodes))
                return !1;
            if (l.attributes) {
                const e = Object.keys(l.attributes)
                  , r = Object.keys(t.attributes);
                if (e.length !== r.length || !e.every(s=>l.attributes[s] === t.attributes[s]))
                    return !1
            }
            return !(l.childNodes && (l.childNodes.length !== t.childNodes.length || !l.childNodes.every((e,r)=>T(e, t.childNodes[r]))))
        }
        function L(l, t, e, r, s) {
            if (!l || !t || l.nodeName !== t.nodeName)
                return !1;
            if (l.nodeName === "#text")
                return s ? !0 : l.data === t.data;
            if (l.nodeName in e)
                return !0;
            if (l.attributes && t.attributes) {
                if (l.attributes.id) {
                    if (l.attributes.id !== t.attributes.id)
                        return !1;
                    if (`${l.nodeName}#${l.attributes.id}`in e)
                        return !0
                }
                if (l.attributes.class && l.attributes.class === t.attributes.class && `${l.nodeName}.${l.attributes.class.replace(/ /g, ".")}`in e)
                    return !0
            }
            if (r)
                return !0;
            const o = l.childNodes ? l.childNodes.slice().reverse() : []
              , i = t.childNodes ? t.childNodes.slice().reverse() : [];
            if (o.length !== i.length)
                return !1;
            if (s)
                return o.every((h,_)=>h.nodeName === i[_].nodeName);
            {
                const h = Y(o, i);
                return o.every((_,y)=>L(_, i[y], h, !0, !0))
            }
        }
        function w(l) {
            return JSON.parse(JSON.stringify(l))
        }
        function F(l, t, e, r) {
            let s = 0
              , o = [];
            const i = l.length
              , h = t.length
              , _ = Array(...new Array(i + 1)).map(()=>[])
              , y = Y(l, t);
            let x = i === h;
            x && l.some((S,C)=>{
                const d = te(S)
                  , G = te(t[C]);
                if (d.length !== G.length)
                    return x = !1,
                    !0;
                if (d.some((me,ae)=>{
                    if (me !== G[ae])
                        return x = !1,
                        !0
                }
                ),
                !x)
                    return !0
            }
            );
            for (let S = 0; S < i; S++) {
                const C = l[S];
                for (let d = 0; d < h; d++) {
                    const G = t[d];
                    !e[S] && !r[d] && L(C, G, y, x) ? (_[S + 1][d + 1] = _[S][d] ? _[S][d] + 1 : 1,
                    _[S + 1][d + 1] >= s && (s = _[S + 1][d + 1],
                    o = [S + 1, d + 1])) : _[S + 1][d + 1] = 0
                }
            }
            return s === 0 ? !1 : {
                oldValue: o[0] - s,
                newValue: o[1] - s,
                length: s
            }
        }
        function Z(l, t) {
            return Array(...new Array(l)).map(()=>t)
        }
        function A(l, t, e) {
            const r = l.childNodes ? Z(l.childNodes.length, !0) : []
              , s = t.childNodes ? Z(t.childNodes.length, !0) : [];
            let o = 0;
            return e.forEach(i=>{
                const h = i.oldValue + i.length
                  , _ = i.newValue + i.length;
                for (let y = i.oldValue; y < h; y += 1)
                    r[y] = o;
                for (let y = i.newValue; y < _; y += 1)
                    s[y] = o;
                o += 1
            }
            ),
            {
                gaps1: r,
                gaps2: s
            }
        }
        function g(l, t) {
            const e = l.childNodes ? l.childNodes : []
              , r = t.childNodes ? t.childNodes : []
              , s = Z(e.length, !1)
              , o = Z(r.length, !1)
              , i = [];
            let h = !0;
            const _ = function() {
                return arguments[1]
            }
              , y = x=>{
                s[h.oldValue + x] = !0,
                o[h.newValue + x] = !0
            }
            ;
            for (; h; )
                h = F(e, r, s, o),
                h && (i.push(h),
                Array(...new Array(h.length)).map(_).forEach(S=>y(S)));
            return l.subsets = i,
            l.subsetsAge = 100,
            i
        }
        class D {
            constructor() {
                this.list = []
            }
            add(t) {
                this.list.push(...t)
            }
            forEach(t) {
                this.list.forEach(e=>t(e))
            }
        }
        function U(l, t) {
            let e = l, r, s;
            for (t = t.slice(); t.length > 0; ) {
                if (!e.childNodes)
                    return !1;
                s = t.splice(0, 1)[0],
                r = e,
                e = e.childNodes[s]
            }
            return {
                node: e,
                parentNode: r,
                nodeIndex: s
            }
        }
        function R(l, t, e) {
            const r = U(l, t[e._const.route]);
            let s = r.node;
            const o = r.parentNode
              , i = r.nodeIndex
              , h = []
              , _ = {
                diff: t,
                node: s
            };
            if (e.preVirtualDiffApply(_))
                return !0;
            let y, x, S, C;
            switch (t[e._const.action]) {
            case e._const.addAttribute:
                s.attributes || (s.attributes = {}),
                s.attributes[t[e._const.name]] = t[e._const.value],
                t[e._const.name] === "checked" ? s.checked = !0 : t[e._const.name] === "selected" ? s.selected = !0 : s.nodeName === "INPUT" && t[e._const.name] === "value" && (s.value = t[e._const.value]);
                break;
            case e._const.modifyAttribute:
                s.attributes[t[e._const.name]] = t[e._const.newValue];
                break;
            case e._const.removeAttribute:
                delete s.attributes[t[e._const.name]],
                Object.keys(s.attributes).length === 0 && delete s.attributes,
                t[e._const.name] === "checked" ? s.checked = !1 : t[e._const.name] === "selected" ? delete s.selected : s.nodeName === "INPUT" && t[e._const.name] === "value" && delete s.value;
                break;
            case e._const.modifyTextElement:
                s.data = t[e._const.newValue];
                break;
            case e._const.modifyValue:
                s.value = t[e._const.newValue];
                break;
            case e._const.modifyComment:
                s.data = t[e._const.newValue];
                break;
            case e._const.modifyChecked:
                s.checked = t[e._const.newValue];
                break;
            case e._const.modifySelected:
                s.selected = t[e._const.newValue];
                break;
            case e._const.replaceElement:
                y = w(t[e._const.newValue]),
                y.outerDone = !0,
                y.innerDone = !0,
                y.valueDone = !0,
                o.childNodes[i] = y;
                break;
            case e._const.relocateGroup:
                x = s.childNodes.splice(t[e._const.from], t.groupLength).reverse(),
                x.forEach(d=>s.childNodes.splice(t[e._const.to], 0, d)),
                s.subsets && s.subsets.forEach(d=>{
                    if (t[e._const.from] < t[e._const.to] && d.oldValue <= t[e._const.to] && d.oldValue > t[e._const.from]) {
                        d.oldValue -= t.groupLength;
                        const G = d.oldValue + d.length - t[e._const.to];
                        G > 0 && (h.push({
                            oldValue: t[e._const.to] + t.groupLength,
                            newValue: d.newValue + d.length - G,
                            length: G
                        }),
                        d.length -= G)
                    } else if (t[e._const.from] > t[e._const.to] && d.oldValue > t[e._const.to] && d.oldValue < t[e._const.from]) {
                        d.oldValue += t.groupLength;
                        const G = d.oldValue + d.length - t[e._const.to];
                        G > 0 && (h.push({
                            oldValue: t[e._const.to] + t.groupLength,
                            newValue: d.newValue + d.length - G,
                            length: G
                        }),
                        d.length -= G)
                    } else
                        d.oldValue === t[e._const.from] && (d.oldValue = t[e._const.to])
                }
                );
                break;
            case e._const.removeElement:
                o.childNodes.splice(i, 1),
                o.subsets && o.subsets.forEach(d=>{
                    d.oldValue > i ? d.oldValue -= 1 : d.oldValue === i ? d.delete = !0 : d.oldValue < i && d.oldValue + d.length > i && (d.oldValue + d.length - 1 === i ? d.length-- : (h.push({
                        newValue: d.newValue + i - d.oldValue,
                        oldValue: i,
                        length: d.length - i + d.oldValue - 1
                    }),
                    d.length = i - d.oldValue))
                }
                ),
                s = o;
                break;
            case e._const.addElement:
                S = t[e._const.route].slice(),
                C = S.splice(S.length - 1, 1)[0],
                s = U(l, S).node,
                y = w(t[e._const.element]),
                y.outerDone = !0,
                y.innerDone = !0,
                y.valueDone = !0,
                s.childNodes || (s.childNodes = []),
                C >= s.childNodes.length ? s.childNodes.push(y) : s.childNodes.splice(C, 0, y),
                s.subsets && s.subsets.forEach(d=>{
                    if (d.oldValue >= C)
                        d.oldValue += 1;
                    else if (d.oldValue < C && d.oldValue + d.length > C) {
                        const G = d.oldValue + d.length - C;
                        h.push({
                            newValue: d.newValue + d.length - G,
                            oldValue: C + 1,
                            length: G
                        }),
                        d.length -= G
                    }
                }
                );
                break;
            case e._const.removeTextElement:
                o.childNodes.splice(i, 1),
                o.nodeName === "TEXTAREA" && delete o.value,
                o.subsets && o.subsets.forEach(d=>{
                    d.oldValue > i ? d.oldValue -= 1 : d.oldValue === i ? d.delete = !0 : d.oldValue < i && d.oldValue + d.length > i && (d.oldValue + d.length - 1 === i ? d.length-- : (h.push({
                        newValue: d.newValue + i - d.oldValue,
                        oldValue: i,
                        length: d.length - i + d.oldValue - 1
                    }),
                    d.length = i - d.oldValue))
                }
                ),
                s = o;
                break;
            case e._const.addTextElement:
                S = t[e._const.route].slice(),
                C = S.splice(S.length - 1, 1)[0],
                y = {},
                y.nodeName = "#text",
                y.data = t[e._const.value],
                s = U(l, S).node,
                s.childNodes || (s.childNodes = []),
                C >= s.childNodes.length ? s.childNodes.push(y) : s.childNodes.splice(C, 0, y),
                s.nodeName === "TEXTAREA" && (s.value = t[e._const.newValue]),
                s.subsets && s.subsets.forEach(d=>{
                    if (d.oldValue >= C && (d.oldValue += 1),
                    d.oldValue < C && d.oldValue + d.length > C) {
                        const G = d.oldValue + d.length - C;
                        h.push({
                            newValue: d.newValue + d.length - G,
                            oldValue: C + 1,
                            length: G
                        }),
                        d.length -= G
                    }
                }
                );
                break;
            default:
                console.log("unknown action")
            }
            s.subsets && (s.subsets = s.subsets.filter(d=>!d.delete && d.oldValue !== d.newValue),
            h.length && (s.subsets = s.subsets.concat(h))),
            _.newNode = y,
            e.postVirtualDiffApply(_)
        }
        function $(l, t, e) {
            return t.forEach(r=>{
                R(l, r, e)
            }
            ),
            !0
        }
        function re(l, t={}) {
            const e = {};
            return e.nodeName = l.nodeName,
            e.nodeName === "#text" || e.nodeName === "#comment" ? e.data = l.data : (l.attributes && l.attributes.length > 0 && (e.attributes = {},
            Array.prototype.slice.call(l.attributes).forEach(s=>e.attributes[s.name] = s.value)),
            e.nodeName === "TEXTAREA" ? e.value = l.value : l.childNodes && l.childNodes.length > 0 && (e.childNodes = [],
            Array.prototype.slice.call(l.childNodes).forEach(s=>e.childNodes.push(re(s, t)))),
            t.valueDiffing && (l.checked !== void 0 && l.type && ["radio", "checkbox"].includes(l.type.toLowerCase()) ? e.checked = l.checked : l.value !== void 0 && (e.value = l.value),
            l.selected !== void 0 && (e.selected = l.selected))),
            e
        }
        const ne = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g
          , k = Object.create ? Object.create(null) : {}
          , O = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
        function J(l) {
            return l.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
        }
        const ue = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            menuItem: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        };
        function X(l) {
            const t = {
                nodeName: "",
                attributes: {}
            };
            let e = l.match(/<\/?([^\s]+?)[/\s>]/);
            if (e && (t.nodeName = e[1].toUpperCase(),
            (ue[e[1]] || l.charAt(l.length - 2) === "/") && (t.voidElement = !0),
            t.nodeName.startsWith("!--"))) {
                const i = l.indexOf("-->");
                return {
                    type: "comment",
                    data: i !== -1 ? l.slice(4, i) : ""
                }
            }
            let r = new RegExp(O)
              , s = null
              , o = !1;
            for (; !o; )
                if (s = r.exec(l),
                s === null)
                    o = !0;
                else if (s[0].trim())
                    if (s[1]) {
                        let i = s[1].trim()
                          , h = [i, ""];
                        i.indexOf("=") > -1 && (h = i.split("=")),
                        t.attributes[h[0]] = h[1],
                        r.lastIndex--
                    } else
                        s[2] && (t.attributes[s[2]] = s[3].trim().substring(1, s[3].length - 1));
            return t
        }
        function le(l, t={
            components: k
        }) {
            const e = [];
            let r, s = -1;
            const o = [];
            let i = !1;
            if (l.indexOf("<") !== 0) {
                const h = l.indexOf("<");
                e.push({
                    nodeName: "#text",
                    data: h === -1 ? l : l.substring(0, h)
                })
            }
            return l.replace(ne, (h,_)=>{
                if (i) {
                    if (h !== `</${r.nodeName}>`)
                        return;
                    i = !1
                }
                const y = h.charAt(1) !== "/"
                  , x = h.startsWith("<!--")
                  , S = _ + h.length
                  , C = l.charAt(S);
                let d;
                if (x) {
                    const G = X(h);
                    return s < 0 ? (e.push(G),
                    e) : (d = o[s],
                    d && (d.childNodes || (d.childNodes = []),
                    d.childNodes.push(G)),
                    e)
                }
                if (y && (r = X(h),
                s++,
                r.type === "tag" && t.components[r.nodeName] && (r.type = "component",
                i = !0),
                !r.voidElement && !i && C && C !== "<" && (r.childNodes || (r.childNodes = []),
                r.childNodes.push({
                    nodeName: "#text",
                    data: J(l.slice(S, l.indexOf("<", S)))
                })),
                s === 0 && e.push(r),
                d = o[s - 1],
                d && (d.childNodes || (d.childNodes = []),
                d.childNodes.push(r)),
                o[s] = r),
                (!y || r.voidElement) && (s > -1 && (r.voidElement || r.nodeName === h.slice(2, -1).toUpperCase()) && (s--,
                r = s === -1 ? e : o[s]),
                !i && C !== "<" && C)) {
                    d = s === -1 ? e : o[s].childNodes || [];
                    const G = l.indexOf("<", S);
                    let me = J(l.slice(S, G === -1 ? void 0 : G));
                    d.push({
                        nodeName: "#text",
                        data: me
                    })
                }
            }
            ),
            e[0]
        }
        function de(l) {
            return delete l.voidElement,
            l.childNodes && l.childNodes.forEach(t=>de(t)),
            l
        }
        function ie(l) {
            return de(le(l))
        }
        class q {
            constructor(t, e, r) {
                this.options = r,
                this.t1 = typeof HTMLElement < "u" && t instanceof HTMLElement ? re(t, this.options) : typeof t == "string" ? ie(t, this.options) : JSON.parse(JSON.stringify(t)),
                this.t2 = typeof HTMLElement < "u" && e instanceof HTMLElement ? re(e, this.options) : typeof e == "string" ? ie(e, this.options) : JSON.parse(JSON.stringify(e)),
                this.diffcount = 0,
                this.foundAll = !1,
                this.debug && (this.t1Orig = re(t, this.options),
                this.t2Orig = re(e, this.options)),
                this.tracker = new D
            }
            init() {
                return this.findDiffs(this.t1, this.t2)
            }
            findDiffs(t, e) {
                let r;
                do {
                    if (this.options.debug && (this.diffcount += 1,
                    this.diffcount > this.options.diffcap))
                        throw new Error(`surpassed diffcap:${JSON.stringify(this.t1Orig)} -> ${JSON.stringify(this.t2Orig)}`);
                    r = this.findNextDiff(t, e, []),
                    r.length === 0 && (T(t, e) || (this.foundAll ? console.error("Could not find remaining diffs!") : (this.foundAll = !0,
                    K(t),
                    r = this.findNextDiff(t, e, [])))),
                    r.length > 0 && (this.foundAll = !1,
                    this.tracker.add(r),
                    $(t, r, this.options))
                } while (r.length > 0);
                return this.tracker.list
            }
            findNextDiff(t, e, r) {
                let s, o;
                if (this.options.maxDepth && r.length > this.options.maxDepth)
                    return [];
                if (!t.outerDone) {
                    if (s = this.findOuterDiff(t, e, r),
                    this.options.filterOuterDiff && (o = this.options.filterOuterDiff(t, e, s),
                    o && (s = o)),
                    s.length > 0)
                        return t.outerDone = !0,
                        s;
                    t.outerDone = !0
                }
                if (!t.innerDone) {
                    if (s = this.findInnerDiff(t, e, r),
                    s.length > 0)
                        return s;
                    t.innerDone = !0
                }
                if (this.options.valueDiffing && !t.valueDone) {
                    if (s = this.findValueDiff(t, e, r),
                    s.length > 0)
                        return t.valueDone = !0,
                        s;
                    t.valueDone = !0
                }
                return []
            }
            findOuterDiff(t, e, r) {
                const s = [];
                let o, i, h, _, y, x;
                if (t.nodeName !== e.nodeName) {
                    if (!r.length)
                        throw new Error("Top level nodes have to be of the same kind.");
                    return [new V().setValue(this.options._const.action, this.options._const.replaceElement).setValue(this.options._const.oldValue, w(t)).setValue(this.options._const.newValue, w(e)).setValue(this.options._const.route, r)]
                }
                if (r.length && this.options.maxNodeDiffCount < Math.abs((t.childNodes || []).length - (e.childNodes || []).length))
                    return [new V().setValue(this.options._const.action, this.options._const.replaceElement).setValue(this.options._const.oldValue, w(t)).setValue(this.options._const.newValue, w(e)).setValue(this.options._const.route, r)];
                if (t.data !== e.data)
                    return t.nodeName === "#text" ? [new V().setValue(this.options._const.action, this.options._const.modifyTextElement).setValue(this.options._const.route, r).setValue(this.options._const.oldValue, t.data).setValue(this.options._const.newValue, e.data)] : [new V().setValue(this.options._const.action, this.options._const.modifyComment).setValue(this.options._const.route, r).setValue(this.options._const.oldValue, t.data).setValue(this.options._const.newValue, e.data)];
                for (i = t.attributes ? Object.keys(t.attributes).sort() : [],
                h = e.attributes ? Object.keys(e.attributes).sort() : [],
                _ = i.length,
                x = 0; x < _; x++)
                    o = i[x],
                    y = h.indexOf(o),
                    y === -1 ? s.push(new V().setValue(this.options._const.action, this.options._const.removeAttribute).setValue(this.options._const.route, r).setValue(this.options._const.name, o).setValue(this.options._const.value, t.attributes[o])) : (h.splice(y, 1),
                    t.attributes[o] !== e.attributes[o] && s.push(new V().setValue(this.options._const.action, this.options._const.modifyAttribute).setValue(this.options._const.route, r).setValue(this.options._const.name, o).setValue(this.options._const.oldValue, t.attributes[o]).setValue(this.options._const.newValue, e.attributes[o])));
                for (_ = h.length,
                x = 0; x < _; x++)
                    o = h[x],
                    s.push(new V().setValue(this.options._const.action, this.options._const.addAttribute).setValue(this.options._const.route, r).setValue(this.options._const.name, o).setValue(this.options._const.value, e.attributes[o]));
                return s
            }
            findInnerDiff(t, e, r) {
                const s = t.childNodes ? t.childNodes.slice() : []
                  , o = e.childNodes ? e.childNodes.slice() : []
                  , i = Math.max(s.length, o.length);
                let h = Math.abs(s.length - o.length)
                  , _ = []
                  , y = 0;
                if (!this.options.maxChildCount || i < this.options.maxChildCount) {
                    const x = t.subsets && t.subsetsAge--
                      , S = x ? t.subsets : t.childNodes && e.childNodes ? g(t, e) : [];
                    if (S.length > 0 && (_ = this.attemptGroupRelocation(t, e, S, r, x),
                    _.length > 0))
                        return _
                }
                for (let x = 0; x < i; x += 1) {
                    const S = s[x]
                      , C = o[x];
                    h && (S && !C ? S.nodeName === "#text" ? (_.push(new V().setValue(this.options._const.action, this.options._const.removeTextElement).setValue(this.options._const.route, r.concat(y)).setValue(this.options._const.value, S.data)),
                    y -= 1) : (_.push(new V().setValue(this.options._const.action, this.options._const.removeElement).setValue(this.options._const.route, r.concat(y)).setValue(this.options._const.element, w(S))),
                    y -= 1) : C && !S && (C.nodeName === "#text" ? _.push(new V().setValue(this.options._const.action, this.options._const.addTextElement).setValue(this.options._const.route, r.concat(y)).setValue(this.options._const.value, C.data)) : _.push(new V().setValue(this.options._const.action, this.options._const.addElement).setValue(this.options._const.route, r.concat(y)).setValue(this.options._const.element, w(C))))),
                    S && C && (!this.options.maxChildCount || i < this.options.maxChildCount ? _ = _.concat(this.findNextDiff(S, C, r.concat(y))) : T(S, C) || (s.length > o.length ? (S.nodeName === "#text" ? _.push(new V().setValue(this.options._const.action, this.options._const.removeTextElement).setValue(this.options._const.route, r.concat(y)).setValue(this.options._const.value, S.data)) : _.push(new V().setValue(this.options._const.action, this.options._const.removeElement).setValue(this.options._const.element, w(S)).setValue(this.options._const.route, r.concat(y))),
                    s.splice(x, 1),
                    x -= 1,
                    y -= 1,
                    h -= 1) : s.length < o.length ? (_ = _.concat([new V().setValue(this.options._const.action, this.options._const.addElement).setValue(this.options._const.element, w(C)).setValue(this.options._const.route, r.concat(y))]),
                    s.splice(x, 0, {}),
                    h -= 1) : _ = _.concat([new V().setValue(this.options._const.action, this.options._const.replaceElement).setValue(this.options._const.oldValue, w(S)).setValue(this.options._const.newValue, w(C)).setValue(this.options._const.route, r.concat(y))]))),
                    y += 1
                }
                return t.innerDone = !0,
                _
            }
            attemptGroupRelocation(t, e, r, s, o) {
                const i = A(t, e, r)
                  , h = i.gaps1
                  , _ = i.gaps2;
                let y = Math.min(h.length, _.length), x, S, C, d, G, me;
                const ae = [];
                for (let H = 0, c = 0; H < y; c += 1,
                H += 1)
                    if (!(o && (h[H] === !0 || _[H] === !0))) {
                        if (h[H] === !0)
                            if (d = t.childNodes[c],
                            d.nodeName === "#text")
                                if (e.childNodes[H].nodeName === "#text") {
                                    if (d.data !== e.childNodes[H].data) {
                                        for (me = c; t.childNodes.length > me + 1 && t.childNodes[me + 1].nodeName === "#text"; )
                                            if (me += 1,
                                            e.childNodes[H].data === t.childNodes[me].data) {
                                                G = !0;
                                                break
                                            }
                                        if (!G)
                                            return ae.push(new V().setValue(this.options._const.action, this.options._const.modifyTextElement).setValue(this.options._const.route, s.concat(H)).setValue(this.options._const.oldValue, d.data).setValue(this.options._const.newValue, e.childNodes[H].data)),
                                            ae
                                    }
                                } else
                                    ae.push(new V().setValue(this.options._const.action, this.options._const.removeTextElement).setValue(this.options._const.route, s.concat(H)).setValue(this.options._const.value, d.data)),
                                    h.splice(H, 1),
                                    y = Math.min(h.length, _.length),
                                    H -= 1;
                            else
                                ae.push(new V().setValue(this.options._const.action, this.options._const.removeElement).setValue(this.options._const.route, s.concat(H)).setValue(this.options._const.element, w(d))),
                                h.splice(H, 1),
                                y = Math.min(h.length, _.length),
                                H -= 1;
                        else if (_[H] === !0)
                            d = e.childNodes[H],
                            d.nodeName === "#text" ? (ae.push(new V().setValue(this.options._const.action, this.options._const.addTextElement).setValue(this.options._const.route, s.concat(H)).setValue(this.options._const.value, d.data)),
                            h.splice(H, 0, !0),
                            y = Math.min(h.length, _.length),
                            c -= 1) : (ae.push(new V().setValue(this.options._const.action, this.options._const.addElement).setValue(this.options._const.route, s.concat(H)).setValue(this.options._const.element, w(d))),
                            h.splice(H, 0, !0),
                            y = Math.min(h.length, _.length),
                            c -= 1);
                        else if (h[H] !== _[H]) {
                            if (ae.length > 0)
                                return ae;
                            if (C = r[h[H]],
                            S = Math.min(C.newValue, t.childNodes.length - C.length),
                            S !== C.oldValue) {
                                x = !1;
                                for (let m = 0; m < C.length; m += 1)
                                    L(t.childNodes[S + m], t.childNodes[C.oldValue + m], [], !1, !0) || (x = !0);
                                if (x)
                                    return [new V().setValue(this.options._const.action, this.options._const.relocateGroup).setValue("groupLength", C.length).setValue(this.options._const.from, C.oldValue).setValue(this.options._const.to, S).setValue(this.options._const.route, s)]
                            }
                        }
                    }
                return ae
            }
            findValueDiff(t, e, r) {
                const s = [];
                return t.selected !== e.selected && s.push(new V().setValue(this.options._const.action, this.options._const.modifySelected).setValue(this.options._const.oldValue, t.selected).setValue(this.options._const.newValue, e.selected).setValue(this.options._const.route, r)),
                (t.value || e.value) && t.value !== e.value && t.nodeName !== "OPTION" && s.push(new V().setValue(this.options._const.action, this.options._const.modifyValue).setValue(this.options._const.oldValue, t.value || "").setValue(this.options._const.newValue, e.value || "").setValue(this.options._const.route, r)),
                t.checked !== e.checked && s.push(new V().setValue(this.options._const.action, this.options._const.modifyChecked).setValue(this.options._const.oldValue, t.checked).setValue(this.options._const.newValue, e.checked).setValue(this.options._const.route, r)),
                s
            }
        }
        const se = {
            debug: !1,
            diffcap: 10,
            maxDepth: !1,
            maxChildCount: 50,
            valueDiffing: !0,
            textDiff(l, t, e, r) {
                l.data = r
            },
            preVirtualDiffApply() {},
            postVirtualDiffApply() {},
            preDiffApply() {},
            postDiffApply() {},
            filterOuterDiff: null,
            compress: !1,
            _const: !1,
            document: typeof window < "u" && window.document ? window.document : !1
        };
        class he {
            constructor(t={}) {
                if (this.options = t,
                Object.entries(se).forEach(([e,r])=>{
                    Object.prototype.hasOwnProperty.call(this.options, e) || (this.options[e] = r)
                }
                ),
                !this.options._const) {
                    const e = ["addAttribute", "modifyAttribute", "removeAttribute", "modifyTextElement", "relocateGroup", "removeElement", "addElement", "removeTextElement", "addTextElement", "replaceElement", "modifyValue", "modifyChecked", "modifySelected", "modifyComment", "action", "route", "oldValue", "newValue", "element", "group", "from", "to", "name", "value", "data", "attributes", "nodeName", "childNodes", "checked", "selected"];
                    this.options._const = {},
                    this.options.compress ? e.forEach((r,s)=>this.options._const[r] = s) : e.forEach(r=>this.options._const[r] = r)
                }
                this.DiffFinder = q
            }
            apply(t, e) {
                return P(t, e, this.options)
            }
            undo(t, e) {
                return B(t, e, this.options)
            }
            diff(t, e) {
                return new this.DiffFinder(t,e,this.options).init()
            }
        }
        class ce {
            constructor(t={}) {
                this.pad = "\u2502   ",
                this.padding = "",
                this.tick = 1,
                this.messages = [];
                const e = (r,s)=>{
                    const o = r[s];
                    r[s] = (...i)=>{
                        this.fin(s, Array.prototype.slice.call(i));
                        const h = o.apply(r, i);
                        return this.fout(s, h),
                        h
                    }
                }
                ;
                for (let r in t)
                    typeof t[r] == "function" && e(t, r);
                this.log("\u250C TRACELOG START")
            }
            fin(t, e) {
                this.padding += this.pad,
                this.log(`\u251C\u2500> entering ${t}`, e)
            }
            fout(t, e) {
                this.log("\u2502<\u2500\u2500\u2518 generated return value", e),
                this.padding = this.padding.substring(0, this.padding.length - this.pad.length)
            }
            format(t, e) {
                return `${function(s) {
                    for (s = `${s}`; s.length < 4; )
                        s = `0 ${s}`;
                    return s
                }(e)}> ${this.padding}${t}`
            }
            log() {
                let t = Array.prototype.slice.call(arguments);
                const e = function(r) {
                    return r ? typeof r == "string" ? r : r instanceof HTMLElement ? r.outerHTML || "<empty>" : r instanceof Array ? `[${r.map(e).join(",")}]` : r.toString() || r.valueOf() || "<unknown>" : "<falsey>"
                };
                t = t.map(e).join(", "),
                this.messages.push(this.format(t, this.tick++))
            }
            toString() {
                let t = "\xD7   "
                  , e = "\u2514\u2500\u2500\u2500";
                for (; e.length <= this.padding.length + this.pad.length; )
                    e += t;
                let r = this.padding;
                return this.padding = "",
                e = this.format(e, this.tick),
                this.padding = r,
                `${this.messages.join(`
`)}
${e}`
            }
        }
    }
    ,
    80053: (pe,z,E)=>{
        "use strict";
        E.r(z),
        E.d(z, {
            ActionType: ()=>ee,
            createPromise: ()=>Y,
            default: ()=>K
        });
        function b(T) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? b = function(w) {
                return typeof w
            }
            : b = function(w) {
                return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w
            }
            ,
            b(T)
        }
        function n(T) {
            return T !== null && b(T) === "object" ? T && typeof T.then == "function" : !1
        }
        function v(T, L) {
            return Q(T) || M(T, L) || P()
        }
        function P() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
        function M(T, L) {
            if (Symbol.iterator in Object(T) || Object.prototype.toString.call(T) === "[object Arguments]") {
                var w = []
                  , F = !0
                  , Z = !1
                  , A = void 0;
                try {
                    for (var g = T[Symbol.iterator](), D; !(F = (D = g.next()).done) && (w.push(D.value),
                    !(L && w.length === L)); F = !0)
                        ;
                } catch (U) {
                    Z = !0,
                    A = U
                } finally {
                    try {
                        !F && g.return != null && g.return()
                    } finally {
                        if (Z)
                            throw A
                    }
                }
                return w
            }
        }
        function Q(T) {
            if (Array.isArray(T))
                return T
        }
        function B(T, L) {
            var w = Object.keys(T);
            if (Object.getOwnPropertySymbols) {
                var F = Object.getOwnPropertySymbols(T);
                L && (F = F.filter(function(Z) {
                    return Object.getOwnPropertyDescriptor(T, Z).enumerable
                })),
                w.push.apply(w, F)
            }
            return w
        }
        function V(T) {
            for (var L = 1; L < arguments.length; L++) {
                var w = arguments[L] != null ? arguments[L] : {};
                L % 2 ? B(Object(w), !0).forEach(function(F) {
                    te(T, F, w[F])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(w)) : B(Object(w)).forEach(function(F) {
                    Object.defineProperty(T, F, Object.getOwnPropertyDescriptor(w, F))
                })
            }
            return T
        }
        function te(T, L, w) {
            return L in T ? Object.defineProperty(T, L, {
                value: w,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : T[L] = w,
            T
        }
        var ee = {
            Pending: "PENDING",
            Fulfilled: "FULFILLED",
            Rejected: "REJECTED"
        };
        function Y() {
            var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
              , L = [ee.Pending, ee.Fulfilled, ee.Rejected]
              , w = T.promiseTypeSuffixes || L
              , F = T.promiseTypeDelimiter === void 0 ? "_" : T.promiseTypeDelimiter;
            return function(Z) {
                var A = Z.dispatch;
                return function(g) {
                    return function(D) {
                        var U, R;
                        if (D.payload) {
                            var $ = D.payload;
                            if (n($))
                                U = $;
                            else if (n($.promise))
                                U = $.promise,
                                R = $.data;
                            else if (typeof $ == "function" || typeof $.promise == "function") {
                                if (U = $.promise ? $.promise() : $(),
                                R = $.promise ? $.data : void 0,
                                !n(U))
                                    return g(V({}, D, {
                                        payload: U
                                    }))
                            } else
                                return g(D)
                        } else
                            return g(D);
                        var re = D.type
                          , ne = D.meta
                          , k = v(w, 3)
                          , O = k[0]
                          , J = k[1]
                          , ue = k[2]
                          , X = function(q, se) {
                            return V({
                                type: [re, se ? ue : J].join(F)
                            }, q === null || typeof q > "u" ? {} : {
                                payload: q
                            }, {}, ne !== void 0 ? {
                                meta: ne
                            } : {}, {}, se ? {
                                error: !0
                            } : {})
                        }
                          , le = function(q) {
                            var se = X(q, !0);
                            throw A(se),
                            q
                        }
                          , de = function() {
                            var q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null
                              , se = X(q, !1);
                            return A(se),
                            {
                                value: q,
                                action: se
                            }
                        };
                        return g(V({
                            type: [re, O].join(F)
                        }, R !== void 0 ? {
                            payload: R
                        } : {}, {}, ne !== void 0 ? {
                            meta: ne
                        } : {})),
                        U.then(de, le)
                    }
                }
            }
        }
        function K() {
            var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
              , L = T.dispatch;
            return typeof L == "function" ? Y()({
                dispatch: L
            }) : (process && process.env,
            null)
        }
    }
    ,
    58264: (pe,z,E)=>{
        "use strict";
        E.r(z),
        E.d(z, {
            default: ()=>v
        });
        function b(P) {
            var M = function(B) {
                var V = B.dispatch
                  , te = B.getState;
                return function(ee) {
                    return function(Y) {
                        return typeof Y == "function" ? Y(V, te, P) : ee(Y)
                    }
                }
            };
            return M
        }
        var n = b();
        n.withExtraArgument = b;
        const v = n
    }
    ,
    89181: (pe,z,E)=>{
        "use strict";
        E.r(z),
        E.d(z, {
            default: ()=>ne
        });
        var b = E(70503)
          , n = E.n(b)
          , v = E(64963)
          , P = E(76318)
          , M = E(59466)
          , Q = E(9711)
          , B = E.n(Q)
          , V = E(31819)
          , te = E.n(V)
          , ee = E(77075)
          , Y = E.n(ee)
          , K = E(29032)
          , T = E.n(K)
          , L = E(83328)
          , w = E(30724);
        const F = [{
            name: "C",
            ext: ["c", "h"]
        }, {
            name: "C++",
            ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"]
        }, {
            name: "Go",
            ext: ["go"]
        }, {
            name: "Haskell",
            ext: ["hs"]
        }, {
            name: "Java",
            ext: ["java"]
        }, {
            name: "JavaScript",
            ext: ["js"]
        }, {
            name: "Pascal",
            ext: ["p", "pas"]
        }, {
            name: "PHP",
            ext: ["php", "php3", "php4", "php5", "php7", "phtml"]
        }, {
            name: "Python",
            ext: ["BUILD", "bzl", "py", "pyw"]
        }, {
            name: "Rust",
            ext: ["rs"]
        }]
          , Z = E(15324)
          , A = new Set;
        function g() {
            const k = Object.keys(Y().languages).filter(J=>J !== "meta")
              , O = [...A, ...Object.keys(n().languages)];
            T()(Y(), k, O).load(J=>{
                Z(`./prism-${J}.js`),
                A.add(J)
            }
            )
        }
        const D = {};
        g(),
        F.forEach(k=>{
            for (let O = 0; O < k.ext.length; ++O)
                if (n().languages[k.ext[O]] !== void 0) {
                    k.target = k.ext[O];
                    break
                }
            k.ext.forEach(O=>{
                D[O] = k.target
            }
            )
        }
        ),
        n().plugins.toolbar.registerButton("copy-to-clipboard", k=>{
            const O = document.createElement("a");
            O.href = "javascript:;",
            O.textContent = "Copy";
            const J = new (B())(O,{
                text: ()=>k.code
            });
            return J.on("success", ()=>{
                L.default.success((0,
                w.default)("Content copied to clipboard!"), 1e3)
            }
            ),
            J.on("error", ()=>{
                L.default.error((0,
                w.default)("Copy failed :("))
            }
            ),
            O
        }
        );
        const U = {
            tab: /\t/,
            crlf: /\r\n/,
            lf: /\n/,
            cr: /\r/,
            space: / /
        };
        function R(k) {
            if (!(!k || k.tab)) {
                for (const O in U)
                    Object.prototype.hasOwnProperty.call(U, O) && (k[O] = U[O]);
                for (const O in k)
                    Object.prototype.hasOwnProperty.call(k, O) && !U[O] && (O === "rest" ? R(k.rest) : $(k, O))
            }
        }
        function $(k, O) {
            const J = k[O]
              , ue = n().util.type(J);
            if (ue === "RegExp") {
                const X = {};
                k[O] = {
                    pattern: J,
                    inside: X
                },
                R(X)
            } else if (ue === "Array")
                for (let X = 0, le = J.length; X < le; X++)
                    $(J, X);
            else {
                const X = J.inside || (J.inside = {});
                R(X)
            }
        }
        n().hooks.add("before-highlight", k=>{
            UserContext.showInvisibleChar && R(k.grammar)
        }
        );
        const ne = {
            highlightBlocks: k=>{
                k.find("pre code").get().forEach(O=>{
                    te()(O).parent().addClass("syntax-hl");
                    const le = (te()(O).attr("class") || "").trim().match(/language-([a-z]+)/);
                    if (le && le[1]) {
                        const de = le[1].toLowerCase();
                        D[de] && te()(O).attr("class", `language-${D[de]}`)
                    }
                    n().highlightElement(O)
                }
                )
            }
            ,
            highlight: (k,O,J)=>n().highlight(k, O, J),
            Prism: n()
        }
    }
    ,
    97846: (pe,z,E)=>{
        "use strict";
        E.r(z),
        E.d(z, {
            default: ()=>r
        });
        var b = E(91550)
          , n = E(23257)
          , v = E(31819)
          , P = E.n(v);
        function M() {
            const i = P()(".messagepad")[0];
            if (i.offsetHeight + 60 + 20 < window.innerHeight) {
                const h = i.getBoundingClientRect()
                  , _ = document.body.getBoundingClientRect();
                let y = null;
                h.top < 60 ? y = h.top - _.top - 60 : h.top + i.offsetHeight > window.innerHeight && (y = h.top - _.top + i.offsetHeight + 20 - window.innerHeight),
                y !== null && P()("html, body").stop().animate({
                    scrollTop: y
                }, 200, "easeOutCubic")
            }
        }
        function Q(s=null, o={}) {
            switch (o.type) {
            case "DIALOGUES_SWITCH_TO":
                return M(),
                o.payload;
            case "DIALOGUES_POST_SEND_FULFILLED":
                return o.meta.dialogueId;
            default:
                return s
            }
        }
        var B = E(45819)
          , V = E.n(B)
          , te = Object.defineProperty
          , ee = Object.defineProperties
          , Y = Object.getOwnPropertyDescriptors
          , K = Object.getOwnPropertySymbols
          , T = Object.prototype.hasOwnProperty
          , L = Object.prototype.propertyIsEnumerable
          , w = (s,o,i)=>o in s ? te(s, o, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : s[o] = i
          , F = (s,o)=>{
            for (var i in o || (o = {}))
                T.call(o, i) && w(s, i, o[i]);
            if (K)
                for (var i of K(o))
                    L.call(o, i) && w(s, i, o[i]);
            return s
        }
          , Z = (s,o)=>ee(s, Y(o));
        function A(s={}, o={}) {
            var i;
            switch (o.type) {
            case "DIALOGUES_LOAD_DIALOGUES_FULFILLED":
                {
                    const {messages: h} = o.payload;
                    return F(F({}, s), V().keyBy(h, "udoc._id"))
                }
            case "DIALOGUES_CREATE":
                {
                    const {user: h} = o.payload;
                    return s[h._id] ? s : Z(F({}, s), {
                        [h._id]: {
                            _id: h._id,
                            udoc: F({}, h),
                            messages: []
                        }
                    })
                }
            case "DIALOGUES_POST_SEND_FULFILLED":
                {
                    const h = o.meta.dialogueId
                      , {mdoc: _} = o.payload;
                    return Z(F({}, s), {
                        [h]: Z(F({}, s[h]), {
                            messages: [...s[h].messages, _]
                        })
                    })
                }
            case "DIALOGUES_MESSAGE_PUSH":
                {
                    const {mdoc: h, udoc: _} = o.payload
                      , y = h.from === UserContext._id ? h.to : h.from;
                    return Z(F({}, s), {
                        [y]: Z(F({}, s[y] || {}), {
                            udoc: _,
                            messages: [...((i = s[y]) == null ? void 0 : i.messages) || [], h]
                        })
                    })
                }
            default:
                return s
            }
        }
        var g = Object.defineProperty
          , D = Object.defineProperties
          , U = Object.getOwnPropertyDescriptors
          , R = Object.getOwnPropertySymbols
          , $ = Object.prototype.hasOwnProperty
          , re = Object.prototype.propertyIsEnumerable
          , ne = (s,o,i)=>o in s ? g(s, o, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : s[o] = i
          , k = (s,o)=>{
            for (var i in o || (o = {}))
                $.call(o, i) && ne(s, i, o[i]);
            if (R)
                for (var i of R(o))
                    re.call(o, i) && ne(s, i, o[i]);
            return s
        }
          , O = (s,o)=>D(s, U(o));
        function J(s={}, o={}) {
            switch (o.type) {
            case "DIALOGUES_LOAD_DIALOGUES_FULFILLED":
                {
                    const i = o.payload.messages;
                    return k(k({}, s), V().fromPairs(V().map(i, h=>[h._id, ""])))
                }
            case "DIALOGUES_CREATE":
                {
                    const {user: i} = o.payload;
                    return O(k({}, s), {
                        [i._id]: ""
                    })
                }
            case "DIALOGUES_INPUT_CHANGED":
                {
                    const i = o.meta.dialogueId;
                    return O(k({}, s), {
                        [i]: o.payload
                    })
                }
            case "DIALOGUES_POST_SEND_FULFILLED":
                {
                    const i = o.meta.dialogueId;
                    return O(k({}, s), {
                        [i]: ""
                    })
                }
            case "DIALOGUES_MESSAGE_PUSH":
                {
                    const {udoc: i} = o.payload;
                    return s[i._id] ? s : O(k({}, s), {
                        [i._id]: ""
                    })
                }
            default:
                return s
            }
        }
        var ue = E(83328)
          , X = Object.defineProperty
          , le = Object.defineProperties
          , de = Object.getOwnPropertyDescriptors
          , ie = Object.getOwnPropertySymbols
          , q = Object.prototype.hasOwnProperty
          , se = Object.prototype.propertyIsEnumerable
          , he = (s,o,i)=>o in s ? X(s, o, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : s[o] = i
          , ce = (s,o)=>{
            for (var i in o || (o = {}))
                q.call(o, i) && he(s, i, o[i]);
            if (ie)
                for (var i of ie(o))
                    se.call(o, i) && he(s, i, o[i]);
            return s
        }
          , l = (s,o)=>le(s, de(o));
        function t(s={}, o={}) {
            switch (o.type) {
            case "DIALOGUES_LOAD_DIALOGUES_FULFILLED":
                {
                    const i = o.payload.messages;
                    return ce(ce({}, s), V().fromPairs(V().map(i, h=>[h._id, !1])))
                }
            case "DIALOGUES_CREATE":
                {
                    const {user: i} = o.payload;
                    return l(ce({}, s), {
                        [i._id]: !1
                    })
                }
            case "DIALOGUES_POST_SEND_PENDING":
                {
                    const i = o.meta.dialogueId;
                    return l(ce({}, s), {
                        [i]: !0
                    })
                }
            case "DIALOGUES_POST_SEND_REJECTED":
                {
                    ue.default.error(o.payload.message);
                    const i = o.meta.dialogueId;
                    return l(ce({}, s), {
                        [i]: !1
                    })
                }
            case "DIALOGUES_POST_SEND_FULFILLED":
                {
                    const i = o.meta.dialogueId;
                    return l(ce({}, s), {
                        [i]: !1
                    })
                }
            case "DIALOGUES_MESSAGE_PUSH":
                {
                    const {udoc: i} = o.payload;
                    return l(ce({}, s), {
                        [i._id]: !1
                    })
                }
            default:
                return s
            }
        }
        const r = (0,
        b.combineReducers)({
            activeId: Q,
            dialogues: A,
            inputs: J,
            isPosting: t
        })
    }
    ,
    73532: (pe,z,E)=>{
        "use strict";
        E.r(z),
        E.d(z, {
            default: ()=>H
        });
        var b = E(78887)
          , n = E(92078)
          , v = E(35018)
          , P = E(30724)
          , M = E(74524)
          , Q = E(25479)
          , B = E.n(Q)
          , V = E(4794)
          , te = Object.defineProperty
          , ee = Object.getOwnPropertySymbols
          , Y = Object.prototype.hasOwnProperty
          , K = Object.prototype.propertyIsEnumerable
          , T = (c,m,f)=>m in c ? te(c, m, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: f
        }) : c[m] = f
          , L = (c,m)=>{
            for (var f in m || (m = {}))
                Y.call(m, f) && T(c, f, m[f]);
            if (ee)
                for (var f of ee(m))
                    K.call(m, f) && T(c, f, m[f]);
            return c
        }
        ;
        const w = n.forwardRef((c,m)=>n.createElement(V.Z, L({
            ref: m,
            fetchItems: f=>c.data.filter(j=>j._id ? f.includes(j._id) : f.includes(j)),
            queryItems: f=>c.data.filter(j=>j.name ? j.name.toLowerCase().match(f.toLowerCase()) : j.toString().toLowerCase().match(f.toLowerCase())),
            itemText: f=>`${f.name || f}`,
            itemKey: f=>{
                var j;
                return `${((j = f._id) == null ? void 0 : j.toString()) || f.name || f}`
            }
            ,
            renderItem: f=>f.name || f._id || f,
            allowEmptyQuery: !0
        }, c)));
        w.propTypes = {
            width: B().string,
            height: B().string,
            listStyle: B().object,
            onChange: B().func.isRequired,
            multi: B().bool,
            selectedKeys: B().arrayOf(B().string),
            allowEmptyQuery: B().bool,
            freeSolo: B().bool,
            freeSoloConverter: B().func,
            data: B().arrayOf(B().any)
        },
        w.displayName = "FileSelectAutoComplete",
        w.defaultProps = {
            width: "100%",
            height: "auto",
            listStyle: {},
            multi: !1,
            selectedKeys: [],
            freeSolo: !1,
            freeSoloConverter: c=>c
        };
        const F = w;
        var Z = Object.defineProperty
          , A = Object.defineProperties
          , g = Object.getOwnPropertyDescriptors
          , D = Object.getOwnPropertySymbols
          , U = Object.prototype.hasOwnProperty
          , R = Object.prototype.propertyIsEnumerable
          , $ = (c,m,f)=>m in c ? Z(c, m, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: f
        }) : c[m] = f
          , re = (c,m)=>{
            for (var f in m || (m = {}))
                U.call(m, f) && $(c, f, m[f]);
            if (D)
                for (var f of D(m))
                    R.call(m, f) && $(c, f, m[f]);
            return c
        }
          , ne = (c,m)=>A(c, g(m))
          , k = (c,m)=>{
            var f = {};
            for (var j in c)
                U.call(c, j) && m.indexOf(j) < 0 && (f[j] = c[j]);
            if (c != null && D)
                for (var j of D(c))
                    m.indexOf(j) < 0 && R.call(c, j) && (f[j] = c[j]);
            return f
        }
        ;
        function O(c) {
            var m = c
              , {columns: f, label: j, children: N, helpText: u="", disableLabel: a=!1} = m
              , p = k(m, ["columns", "label", "children", "helpText", "disableLabel"]);
            return n.createElement("div", ne(re({}, p), {
                className: `${f && `medium-${f}`} columns form__item`
            }), n.createElement("label", {
                htmlFor: `${j}-form`
            }, !a && (0,
            P.default)(j), N, u && n.createElement("p", {
                className: "help-text"
            }, (0,
            P.default)(u))))
        }
        function J({placeholder: c, formKey: m}) {
            const f = useSelector(N=>N.config[m])
              , j = useDispatch();
            return React.createElement("input", {
                placeholder: i18n(c),
                value: f || "",
                type: typeof f == "number" ? "number" : "text",
                onChange: N=>{
                    j({
                        type: "CONFIG_FORM_UPDATE",
                        key: m,
                        value: N.currentTarget.value
                    })
                }
                ,
                className: "textbox"
            })
        }
        function ue({options: c, formKey: m}) {
            const f = (0,
            v.useSelector)(N=>N.config[m])
              , j = (0,
            v.useDispatch)();
            return n.createElement("select", {
                value: f || "",
                onChange: N=>{
                    j({
                        type: "CONFIG_FORM_UPDATE",
                        key: m,
                        value: N.currentTarget.value
                    })
                }
                ,
                className: "select"
            }, c.map(N=>n.createElement("option", {
                id: N,
                key: N
            }, N)))
        }
        function X({formKey: c}) {
            const m = (0,
            v.useSelector)(N=>N.config[c])
              , f = (0,
            v.useSelector)(N=>N.testdata)
              , j = (0,
            v.useDispatch)();
            return n.createElement(F, {
                width: "100%",
                data: f,
                selectedKeys: [m],
                onChange: N=>j({
                    type: "CONFIG_FORM_UPDATE",
                    key: c,
                    value: N
                })
            })
        }
        var le = Object.defineProperty
          , de = Object.defineProperties
          , ie = Object.getOwnPropertyDescriptors
          , q = Object.getOwnPropertySymbols
          , se = Object.prototype.hasOwnProperty
          , he = Object.prototype.propertyIsEnumerable
          , ce = (c,m,f)=>m in c ? le(c, m, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: f
        }) : c[m] = f
          , l = (c,m)=>{
            for (var f in m || (m = {}))
                se.call(m, f) && ce(c, f, m[f]);
            if (q)
                for (var f of q(m))
                    he.call(m, f) && ce(c, f, m[f]);
            return c
        }
          , t = (c,m)=>de(c, ie(m));
        function e() {
            const c = (0,
            v.useSelector)(a=>a.config.type)
              , m = (0,
            v.useSelector)(a=>a.config.checker_type)
              , f = (0,
            v.useSelector)(a=>a.config.filename)
              , j = (0,
            v.useSelector)(a=>a.config.subType)
              , N = (0,
            v.useDispatch)()
              , u = a=>p=>N(t(l({}, a), {
                value: p
            }));
            return n.createElement(O, {
                columns: 12,
                label: "",
                disableLabel: !0
            }, n.createElement(b.Zb, {
                style: {
                    padding: 10
                }
            }, n.createElement(b.mQ, {
                id: "ProblemTypeTabs",
                selectedTabId: c,
                onChange: u({
                    type: "CONFIG_FORM_UPDATE",
                    key: "type"
                }),
                defaultSelectedTabId: "default",
                renderActiveTabPanelOnly: !0
            }, n.createElement("span", {
                className: "bp4-tab"
            }, (0,
            P.default)("Problem Type")), n.createElement(b.mQ.Expander, null), n.createElement(b.OK, {
                id: "default",
                title: (0,
                P.default)("problem_type.default"),
                panel: n.createElement(b.mQ, {
                    id: "CheckerTypeTabs",
                    selectedTabId: ["strict", "default"].includes(m) || !m ? "default" : m !== "testlib" ? "other" : "testlib",
                    onChange: u({
                        type: "CONFIG_FORM_UPDATE",
                        key: "checker_type"
                    }),
                    renderActiveTabPanelOnly: !0
                }, n.createElement("span", {
                    className: "bp4-tab"
                }, (0,
                P.default)("CheckerType")), n.createElement(b.mQ.Expander, null), n.createElement(b.OK, {
                    id: "default",
                    title: (0,
                    P.default)("default"),
                    panel: n.createElement("div", {
                        className: "row"
                    }, n.createElement(O, {
                        columns: 12,
                        label: "Config"
                    }, n.createElement(b.rs, {
                        checked: m !== "strict",
                        label: (0,
                        P.default)("Ignore trailing space and enter."),
                        onChange: ()=>{
                            N({
                                type: "CONFIG_FORM_UPDATE",
                                key: "checker_type",
                                value: m === "strict" ? "default" : "strict"
                            })
                        }
                    })))
                }), ["testlib", "other"].map(a=>n.createElement(b.OK, {
                    id: a,
                    title: a,
                    key: a,
                    panel: n.createElement("div", {
                        className: "row"
                    }, a === "other" && n.createElement(O, {
                        columns: 6,
                        label: "Interface"
                    }, n.createElement(ue, {
                        options: ["syzoj", "hustoj", "qduoj", "lemon"],
                        formKey: "checker_type"
                    })), n.createElement(O, {
                        columns: 6,
                        label: "Checker"
                    }, n.createElement(X, {
                        formKey: "checker"
                    })))
                })))
            }), n.createElement(b.OK, {
                id: "interactive",
                title: (0,
                P.default)("problem_type.interactive"),
                panel: n.createElement("div", {
                    className: "row"
                }, n.createElement(O, {
                    columns: 6,
                    label: "Interactor"
                }, n.createElement(X, {
                    formKey: "interactor"
                })))
            }), n.createElement(b.OK, {
                id: "submit_answer",
                title: (0,
                P.default)("problem_type.submit_answer"),
                panel: n.createElement("div", {
                    className: "row"
                }, n.createElement(O, {
                    columns: 6,
                    label: "Config",
                    disableLabel: !0
                }, n.createElement(b.rs, {
                    checked: j === "multi",
                    label: (0,
                    P.default)("Multi-file"),
                    onChange: ()=>{
                        N({
                            type: "CONFIG_FORM_UPDATE",
                            key: "subType",
                            value: j === "multi" ? "single" : "multi"
                        })
                    }
                })), n.createElement(O, {
                    columns: 6,
                    label: "Filename"
                }, n.createElement("input", {
                    defaultValue: f || "#.txt",
                    placeholder: "#.txt",
                    disabled: j !== "multi",
                    onChange: a=>N({
                        type: "CONFIG_FORM_UPDATE",
                        key: "filename",
                        value: a.currentTarget.value
                    }),
                    className: "textbox"
                })))
            }), n.createElement(b.OK, {
                id: "objective",
                title: (0,
                P.default)("problem_type.objective"),
                panel: n.createElement("p", null, (0,
                P.default)("Unsupported configure this type of problem. Please refer to the documentation."))
            }))))
        }
        var r = E(10238)
          , s = E(45819);
        const o = (c,m)=>(0,
        s.isEqual)(c, m)
          , i = (c,m)=>(0,
        s.isEqual)(c, m);
        function h({index: c, subindex: m}) {
            const f = (0,
            v.useSelector)(W=>W.config.subtasks[c].cases[m], o)
              , j = (0,
            v.useSelector)(W=>W.testdata, i)
              , N = (0,
            v.useSelector)(W=>W.config.subtasks[c].time || W.config.time)
              , u = (0,
            v.useSelector)(W=>W.config.subtasks[c].memory || W.config.memory)
              , a = (0,
            v.useDispatch)()
              , p = (W,fe="")=>Ee=>{
                let oe = typeof Ee != "object" ? Ee : Ee.currentTarget.value;
                if (oe === 0 && (oe = ""),
                fe && oe && (oe += fe),
                a({
                    type: "CONFIG_SUBTASK_UPDATE",
                    id: c,
                    key: "cases-edit",
                    casesId: m,
                    casesKey: W,
                    value: oe
                }),
                W === "input" && oe.endsWith(".in") && !f.output || W === "output" && oe.endsWith(".out") && !f.input) {
                    const ge = oe.substring(0, oe.lastIndexOf("."));
                    !f.output && (j.map(ye=>ye.name).includes(`${ge}.out`) || j.map(ye=>ye.name).includes(`${ge}.ans`)) && a({
                        type: "CONFIG_SUBTASK_UPDATE",
                        id: c,
                        key: "cases-edit",
                        casesId: m,
                        casesKey: "output",
                        value: j.map(ye=>ye.name).includes(`${ge}.out`) ? `${ge}.out` : `${ge}.ans`
                    }),
                    !f.input && j.map(ye=>ye.name).includes(`${ge}.in`) && a({
                        type: "CONFIG_SUBTASK_UPDATE",
                        id: c,
                        key: "cases-edit",
                        casesId: m,
                        casesKey: "input",
                        value: `${ge}.in`
                    })
                }
            }
              , I = {
                input: (0,
                n.useRef)(),
                output: (0,
                n.useRef)()
            };
            for (const W of ["input", "output"])
                (0,
                n.useEffect)(()=>{
                    var fe;
                    (fe = I[W].current) == null || fe.setSelectedItems(f[W] ? [f[W]] : [])
                }
                , [f[W]]);
            return !f || Object.keys(f).length === 0 ? n.createElement("tr", null, n.createElement("td", {
                colSpan: 5
            }, (0,
            P.default)("Failed to parse testcase."))) : n.createElement("tr", null, n.createElement("td", null, n.createElement(b.Af, {
                rightElement: n.createElement(b.Vp, {
                    minimal: !0
                }, "ms"),
                value: f.time ? (0,
                r.Fm)(f.time, !1).toString() : "",
                placeholder: (0,
                r.Fm)(N || "1000ms", !1).toString(),
                onValueChange: p("time", "ms"),
                buttonPosition: "none",
                fill: !0
            })), n.createElement("td", null, n.createElement(b.Af, {
                rightElement: n.createElement(b.Vp, {
                    minimal: !0
                }, "MB"),
                value: f.memory ? (0,
                r.b0)(f.memory, !1).toString() : "",
                placeholder: (0,
                r.b0)(u || "256m", !1).toString(),
                onValueChange: p("memory", "MB"),
                buttonPosition: "none",
                fill: !0
            })), ["input", "output"].map(W=>n.createElement("td", {
                key: W
            }, n.createElement(F, {
                ref: I[W],
                width: "100%",
                data: j,
                selectedKeys: [f[W]],
                onChange: p(W)
            }))), n.createElement("td", {
                className: "col--operation"
            }, n.createElement("a", {
                onClick: ()=>a({
                    type: "CONFIG_SUBTASK_UPDATE",
                    id: c,
                    key: "cases-delete",
                    value: m
                })
            }, n.createElement("span", {
                className: "icon icon-close"
            }))))
        }
        function _({index: c}) {
            const m = (0,
            v.useSelector)(j=>{
                var N;
                return (N = j.config.subtasks[c].cases) == null ? void 0 : N.length
            }
            )
              , f = (0,
            v.useDispatch)();
            return n.createElement("table", {
                className: "data-table"
            }, n.createElement("thead", {
                style: {
                    display: "none"
                }
            }, n.createElement("tr", null, n.createElement("th", null, (0,
            P.default)("Time")), n.createElement("th", null, (0,
            P.default)("Memory")), n.createElement("th", null, (0,
            P.default)("Input")), n.createElement("th", null, (0,
            P.default)("Output")), n.createElement("th", {
                className: "col--operation"
            }, n.createElement("a", {
                onClick: ()=>f({
                    type: "CONFIG_SUBTASK_UPDATE",
                    id: c,
                    key: "cases-add",
                    value: {
                        input: "",
                        output: ""
                    }
                })
            }, n.createElement("span", {
                className: "icon icon-add"
            }))))), n.createElement("tbody", null, n.createElement("tr", {
                className: "thead"
            }, n.createElement("td", null, (0,
            P.default)("Time")), n.createElement("td", null, (0,
            P.default)("Memory")), n.createElement("td", null, (0,
            P.default)("Input")), n.createElement("td", null, (0,
            P.default)("Output")), n.createElement("td", {
                className: "col--operation"
            }, n.createElement("a", {
                onClick: ()=>f({
                    type: "CONFIG_SUBTASK_UPDATE",
                    id: c,
                    key: "cases-add",
                    value: {
                        input: "",
                        output: ""
                    }
                })
            }, n.createElement("span", {
                className: "icon icon-add"
            })))), m > 0 && [...Array(m).keys()].map(j=>n.createElement(h, {
                index: c,
                subindex: j,
                key: j
            }))))
        }
        const y = (c,m)=>(0,
        s.isEqual)(c, m);
        function x({index: c}) {
            const m = (0,
            v.useSelector)(N=>N.config.subtasks.map(u=>u ? u.id : void 0).filter(u=>u !== void 0).join(","))
              , f = (0,
            v.useSelector)(N=>N.config.subtasks[c].if)
              , j = (0,
            v.useDispatch)();
            return n.createElement("tr", null, n.createElement("td", {
                style: {
                    textAlign: "center"
                }
            }, "if"), n.createElement("td", {
                colSpan: 4
            }, n.createElement(M.Z, {
                data: m.split(",").filter(N=>N.length),
                selectedKeys: (f == null ? void 0 : f.map(String)) || [],
                onChange: N=>j({
                    type: "CONFIG_SUBTASK_UPDATE",
                    id: c,
                    key: "if",
                    value: N.split(",")
                }),
                multi: !0
            })))
        }
        function S({index: c}) {
            var m;
            const f = ["id", "type", "score", "time", "memory"]
              , j = (0,
            v.useSelector)(I=>(0,
            s.pick)(I.config.subtasks[c], f), y)
              , N = (0,
            v.useSelector)(I=>I.config.time)
              , u = (0,
            v.useSelector)(I=>I.config.memory)
              , a = (0,
            v.useDispatch)()
              , p = (I,W="")=>fe=>{
                var Ee;
                let oe = typeof fe != "object" ? fe : (Ee = fe.currentTarget) == null ? void 0 : Ee.value;
                oe === 0 && (oe = ""),
                oe && W && (oe += W),
                a({
                    type: "CONFIG_SUBTASK_UPDATE",
                    id: c,
                    key: I,
                    value: oe
                })
            }
            ;
            return !j || Object.keys(j).length === 0 ? n.createElement(b.Zb, {
                style: {
                    padding: 0
                }
            }, n.createElement("span", null, "Subtasks #", c + 1, " "), n.createElement("p", null, (0,
            P.default)("Failed to parse subtask."))) : n.createElement(b.Zb, {
                style: {
                    padding: 0
                }
            }, n.createElement("span", null, "Subtasks #", c + 1, " "), n.createElement("a", {
                onClick: ()=>a({
                    type: "CONFIG_SUBTASK_UPDATE",
                    id: c,
                    key: "add"
                })
            }, n.createElement("span", {
                className: "icon icon-add"
            })), n.createElement("a", {
                style: c === 0 ? {
                    display: "none"
                } : {},
                onClick: ()=>a({
                    type: "CONFIG_SUBTASK_UPDATE",
                    id: c,
                    key: "delete"
                })
            }, n.createElement("span", {
                className: "icon icon-delete"
            })), n.createElement("table", {
                className: "data-table"
            }, n.createElement("thead", null, n.createElement("tr", null, n.createElement("th", null, "#"), n.createElement("th", null, "Score"), n.createElement("th", null, "Type"), n.createElement("th", null, "Time"), n.createElement("th", null, "Memory"))), n.createElement("tbody", null, n.createElement("tr", null, ["id", "score"].map(I=>{
                var W;
                return n.createElement("td", {
                    key: I
                }, n.createElement("input", {
                    value: (W = j[I]) != null ? W : "",
                    onChange: p(I),
                    type: "number",
                    className: "textbox"
                }))
            }
            ), n.createElement("td", null, n.createElement("select", {
                value: (m = j.type) != null ? m : "min",
                onChange: p("type"),
                className: "select"
            }, ["min", "max", "sum"].map(I=>n.createElement("option", {
                value: I,
                key: I
            }, I)))), n.createElement("td", null, n.createElement(b.Af, {
                rightElement: n.createElement(b.Vp, {
                    minimal: !0
                }, "ms"),
                value: j.time ? (0,
                r.Fm)(j.time, !1).toString() : "",
                placeholder: (0,
                r.Fm)(N || "1000ms", !1).toString(),
                onValueChange: p("time", "ms"),
                buttonPosition: "none",
                fill: !0
            })), n.createElement("td", null, n.createElement(b.Af, {
                rightElement: n.createElement(b.Vp, {
                    minimal: !0
                }, "MB"),
                value: j.memory ? (0,
                r.b0)(j.memory, !1).toString() : "",
                placeholder: (0,
                r.b0)(u || "256m", !1).toString(),
                onValueChange: p("memory", "MB"),
                buttonPosition: "none",
                fill: !0
            }))), n.createElement(x, {
                index: c
            }))), n.createElement(_, {
                index: c
            }))
        }
        function C() {
            const c = (0,
            v.useSelector)(N=>N.config.time)
              , m = (0,
            v.useSelector)(N=>N.config.memory)
              , f = (0,
            v.useDispatch)()
              , j = (N,u="")=>a=>{
                var p;
                let I = typeof a != "object" ? a : (p = a.currentTarget) == null ? void 0 : p.value;
                I === 0 && (I = ""),
                I && u && (I += u),
                f({
                    type: "CONFIG_FORM_UPDATE",
                    key: N,
                    value: I
                })
            }
            ;
            return n.createElement(n.Fragment, null, n.createElement(O, {
                columns: 6,
                label: "Time"
            }, n.createElement(b.Af, {
                rightElement: n.createElement(b.Vp, {
                    minimal: !0
                }, "ms"),
                value: c ? (0,
                r.Fm)(c, !1).toString() : "",
                placeholder: (0,
                r.Fm)("1000ms").toString(),
                onValueChange: j("time", "ms"),
                buttonPosition: "none",
                fill: !0
            })), n.createElement(O, {
                columns: 6,
                label: "Memory"
            }, n.createElement(b.Af, {
                rightElement: n.createElement(b.Vp, {
                    minimal: !0
                }, "MB"),
                value: m ? (0,
                r.b0)(m, !1).toString() : "",
                placeholder: (0,
                r.b0)("256m").toString(),
                onValueChange: j("memory", "MB"),
                buttonPosition: "none",
                fill: !0
            })))
        }
        function d() {
            const c = (0,
            v.useSelector)(f=>{
                var j;
                return (j = f.config.subtasks) == null ? void 0 : j.length
            }
            )
              , m = (0,
            v.useDispatch)();
            return n.createElement(O, {
                columns: 12,
                label: "Task Settings"
            }, n.createElement("div", {
                className: "row"
            }, n.createElement(C, null), n.createElement(O, {
                columns: 12,
                label: "TestCases",
                disableLabel: !0
            }, c > 0 ? [...Array(c).keys()].map(f=>n.createElement(S, {
                index: f,
                key: f
            })) : n.createElement(n.Fragment, null, n.createElement("span", null, "Subtasks # "), n.createElement("a", {
                onClick: ()=>m({
                    type: "CONFIG_SUBTASK_UPDATE",
                    id: 0,
                    key: "add"
                })
            }, n.createElement("span", {
                className: "icon icon-add"
            }))))))
        }
        function G() {
            const c = (0,
            v.useSelector)(f=>f.config.filename)
              , m = (0,
            v.useDispatch)();
            return n.createElement(O, {
                columns: 12,
                label: "FileIOConfig",
                disableLabel: !0
            }, n.createElement(b.Zb, {
                style: {
                    padding: 10
                }
            }, n.createElement("div", {
                className: "row"
            }, n.createElement(O, {
                columns: 6,
                label: "FileIO"
            }, n.createElement(b.BZ, {
                rightElement: n.createElement(b.Vp, {
                    minimal: !0
                }, ".in/.out"),
                value: c || "",
                onChange: f=>{
                    m({
                        type: "CONFIG_FORM_UPDATE",
                        key: "filename",
                        value: f.currentTarget.value
                    })
                }
                ,
                fill: !0
            })))))
        }
        function me() {
            const c = (0,
            v.useSelector)(a=>a.testdata)
              , m = (0,
            v.useSelector)(a=>a.config.user_extra_files) || []
              , f = (0,
            v.useSelector)(a=>a.config.judge_extra_files) || []
              , j = (0,
            v.useDispatch)()
              , N = n.useRef()
              , u = n.useRef();
            return n.createElement(O, {
                columns: 12,
                label: "ExtraFilesTabs",
                disableLabel: !0
            }, n.createElement(b.mQ, {
                id: "ExtraFilesTabs"
            }, n.createElement(b.OK, {
                id: "user_extra_files",
                title: (0,
                P.default)("user_extra_files"),
                panel: n.createElement(F, {
                    ref: N,
                    data: c,
                    selectedKeys: m,
                    onChange: a=>j({
                        type: "CONFIG_FORM_UPDATE",
                        key: "user_extra_files",
                        value: a.split(",")
                    }),
                    multi: !0
                })
            }), n.createElement(b.OK, {
                id: "judge_extra_files",
                title: (0,
                P.default)("judge_extra_files"),
                panel: n.createElement(F, {
                    ref: u,
                    data: c,
                    selectedKeys: f,
                    onChange: a=>j({
                        type: "CONFIG_FORM_UPDATE",
                        key: "judge_extra_files",
                        value: a.split(",")
                    }),
                    multi: !0
                })
            })))
        }
        function ae() {
            const c = (0,
            v.useSelector)(a=>a.config.langs) || []
              , m = new Set(Object.keys(window.LANGS).filter(a=>a.includes(".")).map(a=>a.split(".")[0]))
              , f = Object.keys(window.LANGS).filter(a=>!m.has(a)).map(a=>({
                name: window.LANGS[a].display,
                _id: a
            }))
              , j = (0,
            v.useDispatch)()
              , N = n.useRef()
              , u = c.filter(a=>!m.has(a));
            return n.createElement(O, {
                columns: 12,
                label: "langs"
            }, n.createElement(M.Z, {
                ref: N,
                data: f,
                placeholder: (0,
                P.default)("Unlimited"),
                selectedKeys: u,
                onChange: a=>{
                    const p = a.split(",");
                    p.push(...Array.from(new Set(p.filter(I=>I.includes(".")).map(I=>I.split(".")[0])))),
                    j({
                        type: "CONFIG_FORM_UPDATE",
                        key: "langs",
                        value: p
                    })
                }
                ,
                multi: !0
            }))
        }
        function H() {
            const c = (0,
            v.useSelector)(m=>m.config.type);
            return n.createElement("div", {
                className: "row problem-config-form"
            }, n.createElement(e, null), c === "default" && n.createElement(G, null), !["submit_answer", "objective"].includes(c) && n.createElement(n.Fragment, null, n.createElement(d, null), n.createElement(me, null), n.createElement(ae, null)))
        }
    }
    ,
    41397: (pe,z,E)=>{
        "use strict";
        E.r(z),
        E.d(z, {
            default: ()=>Z
        });
        var b = E(91550)
          , n = E(10238)
          , v = E(9718)
          , P = E(45819)
          , M = Object.defineProperty
          , Q = Object.defineProperties
          , B = Object.getOwnPropertyDescriptors
          , V = Object.getOwnPropertySymbols
          , te = Object.prototype.hasOwnProperty
          , ee = Object.prototype.propertyIsEnumerable
          , Y = (A,g,D)=>g in A ? M(A, g, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: D
        }) : A[g] = D
          , K = (A,g)=>{
            for (var D in g || (g = {}))
                te.call(g, D) && Y(A, D, g[D]);
            if (V)
                for (var D of V(g))
                    ee.call(g, D) && Y(A, D, g[D]);
            return A
        }
          , T = (A,g)=>Q(A, B(g));
        function L(A={
            type: "default",
            __loaded: !1
        }, g={}) {
            switch (g.type) {
            case "CONFIG_LOAD_FULFILLED":
                return T(K(K({}, A), v.ZP.load(g.payload.config)), {
                    __loaded: !0
                });
            case "CONFIG_FORM_UPDATE":
                {
                    const D = T(K({}, A), {
                        [g.key]: g.value
                    });
                    return g.key === "score" && g.value && (D.score = +D.score),
                    g.key === "checker_type" && g.value === "other" && (D.checker_type = "syzoj"),
                    (!g.value || typeof g.value == "object" && !g.value.join("")) && delete D[g.key],
                    D
                }
            case "CONFIG_CODE_UPDATE":
                try {
                    return K(K({}, A), v.ZP.load(g.payload))
                } catch (D) {
                    return A
                }
            case "CONFIG_AUTOCASES_UPDATE":
                {
                    const D = K({}, A)
                      , {subtasks: U} = g;
                    for (const R of U)
                        R.time === (0,
                        n.Fm)(A.time || "1s") && delete R.time,
                        R.memory === (0,
                        n.b0)(A.memory || "256m") && delete R.memory,
                        R.time && (R.time += "ms"),
                        R.memory && (R.memory += "MB");
                    return U.length === 0 ? D.subtasks = [] : D.subtasks = U.map(R=>K(K({}, R), {
                        cases: R.cases.map($=>({
                            input: $.input,
                            output: $.output
                        }))
                    })),
                    D
                }
            case "CONFIG_SUBTASK_UPDATE":
                {
                    const D = (0,
                    P.cloneDeep)(A.subtasks)
                      , U = (0,
                    P.cloneDeep)(A.subtasks[g.id]);
                    if (g.value !== "" && ["score", "id"].includes(g.key) && (g.value = +g.value),
                    g.key === "if" && g.value.join("") !== "" && (g.value = g.value.map(R=>+R)),
                    g.key.split("-")[0] === "cases")
                        g.key === "cases-add" ? U.cases.push(g.value) : g.key === "cases-edit" ? g.value === "" && !["input", "output"].includes(g.casesKey) ? delete U.cases[g.casesId][g.casesKey] : U.cases[g.casesId][g.casesKey] = g.value : g.key === "cases-delete" && (U.cases = U.cases.filter((R,$)=>$ !== g.value));
                    else {
                        if (g.key === "add")
                            return T(K({}, A), {
                                subtasks: [...D, {
                                    time: A.time || "1s",
                                    memory: A.memory || "256m",
                                    cases: []
                                }]
                            });
                        if (g.key === "delete")
                            return T(K({}, A), {
                                subtasks: D.filter((R,$)=>$ !== g.id)
                            });
                        g.value === "" || g.key === "if" && g.value.join("") === "" ? delete U[g.key] : U[g.key] = g.value
                    }
                    return D[g.id] = U,
                    T(K({}, A), {
                        subtasks: D
                    })
                }
            default:
                return A
            }
        }
        function w(A=[], g={}) {
            switch (g.type) {
            case "CONFIG_LOAD_FULFILLED":
                return A.concat(g.payload.testdata);
            case "CONFIG_DELETE_TESTDATA":
                return A.filter(U=>U.name !== g.value[0]);
            case "CONFIG_ADD_TESTDATA":
                return A.concat([g.value]);
            default:
                return A
            }
        }
        const Z = (0,
        b.combineReducers)({
            config: L,
            testdata: w
        })
    }
    ,
    61875: (pe,z,E)=>{
        "use strict";
        E.r(z),
        E.d(z, {
            default: ()=>N
        });
        var b = E(91550), n = Object.defineProperty, v = Object.defineProperties, P = Object.getOwnPropertyDescriptors, M = Object.getOwnPropertySymbols, Q = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable, V = (u,a,p)=>a in u ? n(u, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: p
        }) : u[a] = p, te = (u,a)=>{
            for (var p in a || (a = {}))
                Q.call(a, p) && V(u, p, a[p]);
            if (M)
                for (var p of M(a))
                    B.call(a, p) && V(u, p, a[p]);
            return u
        }
        , ee = (u,a)=>v(u, P(a)), Y;
        let K = `${UserContext._id}/${UiContext.pdoc.domainId}/${UiContext.pdoc.docId}`;
        ((Y = UiContext.tdoc) == null ? void 0 : Y._id) && UiContext.tdoc.rule !== "homework" && (K += `@${UiContext.tdoc._id}`);
        function T(u={
            lang: localStorage.getItem(`${K}#lang`) || UiContext.codeLang,
            code: localStorage.getItem(K) || UiContext.codeTemplate
        }, a={}) {
            return a.type === "SCRATCHPAD_EDITOR_UPDATE_CODE" ? (localStorage.setItem(K, a.payload),
            ee(te({}, u), {
                code: a.payload
            })) : a.type === "SCRATCHPAD_EDITOR_SET_LANG" ? (localStorage.setItem(`${K}#lang`, a.payload),
            ee(te({}, u), {
                lang: a.payload
            })) : u
        }
        var L = E(23113)
          , w = Object.defineProperty
          , F = Object.defineProperties
          , Z = Object.getOwnPropertyDescriptors
          , A = Object.getOwnPropertySymbols
          , g = Object.prototype.hasOwnProperty
          , D = Object.prototype.propertyIsEnumerable
          , U = (u,a,p)=>a in u ? w(u, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: p
        }) : u[a] = p
          , R = (u,a)=>{
            for (var p in a || (a = {}))
                g.call(a, p) && U(u, p, a[p]);
            if (A)
                for (var p of A(a))
                    D.call(a, p) && U(u, p, a[p]);
            return u
        }
          , $ = (u,a)=>F(u, Z(a));
        function re(u={
            input: "",
            output: "",
            rid: null
        }, a={}) {
            if (a.type === "SCRATCHPAD_PRETEST_DATA_CHANGE") {
                const {type: p, value: I} = a.payload;
                return $(R({}, u), {
                    [p]: I
                })
            }
            if (a.type === "SCRATCHPAD_RECORDS_PUSH") {
                const {rdoc: p} = a.payload;
                if (p._id === u.rid) {
                    const I = [`${L.As[p.status]} ${p.time}ms ${p.memory}KiB`];
                    return p.compilerTexts.length && I.push(p.compilerTexts.join(`
`)),
                    p.testCases.length && I.push(p.testCases[0].message || ""),
                    $(R({}, u), {
                        output: I.join(`
`)
                    })
                }
            }
            return a.type === "SCRATCHPAD_POST_PRETEST_FULFILLED" ? $(R({}, u), {
                rid: a.payload.rid
            }) : u
        }
        var ne = E(45819)
          , k = E.n(ne)
          , O = Object.defineProperty
          , J = Object.defineProperties
          , ue = Object.getOwnPropertyDescriptors
          , X = Object.getOwnPropertySymbols
          , le = Object.prototype.hasOwnProperty
          , de = Object.prototype.propertyIsEnumerable
          , ie = (u,a,p)=>a in u ? O(u, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: p
        }) : u[a] = p
          , q = (u,a)=>{
            for (var p in a || (a = {}))
                le.call(a, p) && ie(u, p, a[p]);
            if (X)
                for (var p of X(a))
                    de.call(a, p) && ie(u, p, a[p]);
            return u
        }
          , se = (u,a)=>J(u, ue(a));
        function he(u={
            rows: [],
            items: {}
        }, a={}) {
            switch (a.type) {
            case "SCRATCHPAD_RECORDS_LOAD_SUBMISSIONS_FULFILLED":
                {
                    const {rdocs: p} = a.payload;
                    return se(q({}, u), {
                        rows: k().map(p, "_id"),
                        items: k().keyBy(p, "_id")
                    })
                }
            case "SCRATCHPAD_RECORDS_PUSH":
                {
                    const {rdoc: p} = a.payload;
                    return [...u.rows].includes(p._id) ? se(q({}, u), {
                        items: se(q({}, u.items), {
                            [p._id]: p
                        })
                    }) : se(q({}, u), {
                        rows: [p._id, ...u.rows],
                        items: se(q({}, u.items), {
                            [p._id]: p
                        })
                    })
                }
            default:
                return u
            }
        }
        var ce = Object.defineProperty
          , l = Object.defineProperties
          , t = Object.getOwnPropertyDescriptors
          , e = Object.getOwnPropertySymbols
          , r = Object.prototype.hasOwnProperty
          , s = Object.prototype.propertyIsEnumerable
          , o = (u,a,p)=>a in u ? ce(u, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: p
        }) : u[a] = p
          , i = (u,a)=>{
            for (var p in a || (a = {}))
                r.call(a, p) && o(u, p, a[p]);
            if (e)
                for (var p of e(a))
                    s.call(a, p) && o(u, p, a[p]);
            return u
        }
          , h = (u,a)=>l(u, t(a));
        function _(u={}, a={}) {
            if (a.type === "SCRATCHPAD_STATE_UPDATE") {
                const {key: p, value: I} = a.payload;
                return h(i({}, u), {
                    [p]: I
                })
            }
            return u
        }
        var y = E(83328)
          , x = E(30724)
          , S = Object.defineProperty
          , C = Object.defineProperties
          , d = Object.getOwnPropertyDescriptors
          , G = Object.getOwnPropertySymbols
          , me = Object.prototype.hasOwnProperty
          , ae = Object.prototype.propertyIsEnumerable
          , H = (u,a,p)=>a in u ? S(u, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: p
        }) : u[a] = p
          , c = (u,a)=>{
            for (var p in a || (a = {}))
                me.call(a, p) && H(u, p, a[p]);
            if (G)
                for (var p of G(a))
                    ae.call(a, p) && H(u, p, a[p]);
            return u
        }
          , m = (u,a)=>C(u, d(a));
        function f(u={
            main: {
                size: "50%",
                savedSize: "50%"
            },
            pretest: {
                visible: ["default", "fileio"].includes((p=>(p = UiContext.pdoc.config) == null ? void 0 : p.type)()) ? localStorage.getItem("scratchpad/pretest") === "true" : !1,
                size: 200
            },
            records: {
                visible: UiContext.canViewRecord && localStorage.getItem("scratchpad/records") === "true",
                size: 100,
                isLoading: !1
            },
            isPosting: !1,
            pretestWaitSec: 0,
            submitWaitSec: 0,
            lastTick: 0,
            activePage: "problem"
        }, a={}) {
            switch (a.type) {
            case "SCRATCHPAD_UI_CHANGE_SIZE":
                {
                    const {uiElement: p, size: I} = a.payload;
                    return m(c({}, u), {
                        [p]: m(c({}, u[p]), {
                            size: I
                        })
                    })
                }
            case "SCRATCHPAD_UI_SET_VISIBILITY":
                {
                    const {uiElement: p, visibility: I} = a.payload;
                    return localStorage.setItem(`scratchpad/${p}`, I.toString()),
                    m(c({}, u), {
                        [p]: m(c({}, u[p]), {
                            visible: I
                        })
                    })
                }
            case "SCRATCHPAD_UI_TOGGLE_VISIBILITY":
                {
                    const {uiElement: p} = a.payload;
                    return localStorage.setItem(`scratchpad/${p}`, (!u[p].visible).toString()),
                    m(c({}, u), {
                        [p]: m(c({}, u[p]), {
                            visible: !u[p].visible
                        })
                    })
                }
            case "SCRATCHPAD_POST_PRETEST_PENDING":
            case "SCRATCHPAD_POST_SUBMIT_PENDING":
                return m(c({}, u), {
                    isPosting: !0
                });
            case "SCRATCHPAD_POST_PRETEST_FULFILLED":
            case "SCRATCHPAD_POST_SUBMIT_FULFILLED":
                return y.default.success((0,
                x.default)("Submitted.")),
                a.type === "SCRATCHPAD_POST_SUBMIT_FULFILLED" && UiContext.canViewRecord ? m(c({}, u), {
                    records: m(c({}, u.records), {
                        visible: !0
                    }),
                    isPosting: !1,
                    submitWaitSec: 8
                }) : m(c({}, u), {
                    isPosting: !1,
                    pretestWaitSec: 5
                });
            case "SCRATCHPAD_POST_PRETEST_REJECTED":
            case "SCRATCHPAD_POST_SUBMIT_REJECTED":
                return y.default.error(a.payload.message),
                m(c({}, u), {
                    isPosting: !1,
                    pretestWaitSec: 3,
                    submitWaitSec: 3
                });
            case "SCRATCHPAD_WAITING_TICK":
                return Date.now() - u.lastTick < 950 ? u : m(c({}, u), {
                    lastTick: Date.now(),
                    pretestWaitSec: Math.max(u.pretestWaitSec - 1, 0),
                    submitWaitSec: Math.max(u.submitWaitSec - 1, 0)
                });
            case "SCRATCHPAD_RECORDS_LOAD_SUBMISSIONS_PENDING":
                return m(c({}, u), {
                    records: m(c({}, u.records), {
                        isLoading: !0
                    })
                });
            case "SCRATCHPAD_RECORDS_LOAD_SUBMISSIONS_REJECTED":
                return y.default.error(a.payload.message),
                m(c({}, u), {
                    records: m(c({}, u.records), {
                        isLoading: !1
                    })
                });
            case "SCRATCHPAD_RECORDS_LOAD_SUBMISSIONS_FULFILLED":
                return m(c({}, u), {
                    records: m(c({}, u.records), {
                        isLoading: !1
                    })
                });
            case "SCRATCHPAD_SWITCH_TO_PAGE":
                {
                    let p = a.payload
                      , {size: I} = u.main;
                    return p === u.activePage ? (p = null,
                    I = 0) : u.activePage === null && (I = u.main.savedSize),
                    m(c({}, u), {
                        main: m(c({}, u.main), {
                            size: I,
                            savedSize: u.main.size
                        }),
                        activePage: p
                    })
                }
            default:
                return u
            }
        }
        const N = (0,
        b.combineReducers)({
            ui: f,
            editor: T,
            pretest: re,
            records: he,
            state: _
        })
    }
    ,
    46007: (pe,z,E)=>{
        "use strict";
        E.r(z),
        E.d(z, {
            default: ()=>n
        });
        var b = E(44780);
        class n {
            constructor(P) {
                const M = new URL(P,window.location.href);
                M.protocol = M.protocol.replace("http", "ws"),
                this.url = M.toString(),
                this.sock = new b.default(this.url),
                this.sock.onopen = ()=>{
                    var Q;
                    console.log("Connected"),
                    (Q = this.onopen) == null || Q.call(this, this.sock)
                }
                ,
                this.sock.onclose = ({code: Q, reason: B})=>{
                    var V;
                    console.warn("Connection closed, ", Q, B),
                    Q >= 4e3 && this.close(),
                    (V = this.onclose) == null || V.call(this, Q, B)
                }
                ,
                this.sock.onmessage = Q=>{
                    var B;
                    const V = JSON.parse(Q.data);
                    V.error === "PermissionError" || V.error === "PrivilegeError" ? this.close() : (B = this.onmessage) == null || B.call(this, Q)
                }
            }
            send(P) {
                this.sock.send(P)
            }
            close() {
                var P, M;
                (M = (P = this.sock) == null ? void 0 : P.close) == null || M.call(P)
            }
        }
    }
    ,
    15324: (pe,z,E)=>{
        var b = {
            "./prism-abap.js": 17873,
            "./prism-abnf.js": 14394,
            "./prism-actionscript.js": 43669,
            "./prism-ada.js": 74948,
            "./prism-agda.js": 7911,
            "./prism-al.js": 43868,
            "./prism-antlr4.js": 6935,
            "./prism-apacheconf.js": 38641,
            "./prism-apex.js": 71726,
            "./prism-apl.js": 98601,
            "./prism-applescript.js": 47871,
            "./prism-aql.js": 38096,
            "./prism-arduino.js": 41945,
            "./prism-arff.js": 49261,
            "./prism-armasm.js": 75975,
            "./prism-arturo.js": 81961,
            "./prism-asciidoc.js": 67432,
            "./prism-asm6502.js": 16754,
            "./prism-asmatmel.js": 42281,
            "./prism-aspnet.js": 88592,
            "./prism-autohotkey.js": 75455,
            "./prism-autoit.js": 12911,
            "./prism-avisynth.js": 51932,
            "./prism-avro-idl.js": 58703,
            "./prism-awk.js": 1660,
            "./prism-bash.js": 5696,
            "./prism-basic.js": 55900,
            "./prism-batch.js": 34438,
            "./prism-bbcode.js": 37239,
            "./prism-bbj.js": 94372,
            "./prism-bicep.js": 76030,
            "./prism-birb.js": 81142,
            "./prism-bison.js": 90156,
            "./prism-bnf.js": 94946,
            "./prism-bqn.js": 41628,
            "./prism-brainfuck.js": 72954,
            "./prism-brightscript.js": 49118,
            "./prism-bro.js": 15971,
            "./prism-bsl.js": 87174,
            "./prism-c.js": 9208,
            "./prism-cfscript.js": 77462,
            "./prism-chaiscript.js": 36117,
            "./prism-cil.js": 39282,
            "./prism-cilkc.js": 27142,
            "./prism-cilkcpp.js": 46888,
            "./prism-clike.js": 36711,
            "./prism-clojure.js": 18365,
            "./prism-cmake.js": 27005,
            "./prism-cobol.js": 37683,
            "./prism-coffeescript.js": 65908,
            "./prism-concurnas.js": 43544,
            "./prism-cooklang.js": 21939,
            "./prism-coq.js": 47176,
            "./prism-core.js": 20628,
            "./prism-cpp.js": 59096,
            "./prism-crystal.js": 99100,
            "./prism-csharp.js": 99724,
            "./prism-cshtml.js": 1075,
            "./prism-csp.js": 78054,
            "./prism-css-extras.js": 29318,
            "./prism-css.js": 54805,
            "./prism-csv.js": 4112,
            "./prism-cue.js": 95567,
            "./prism-cypher.js": 28988,
            "./prism-d.js": 9088,
            "./prism-dart.js": 8543,
            "./prism-dataweave.js": 67610,
            "./prism-dax.js": 50999,
            "./prism-dhall.js": 98773,
            "./prism-diff.js": 39669,
            "./prism-django.js": 67262,
            "./prism-dns-zone-file.js": 89500,
            "./prism-docker.js": 6426,
            "./prism-dot.js": 52663,
            "./prism-ebnf.js": 61238,
            "./prism-editorconfig.js": 34739,
            "./prism-eiffel.js": 41309,
            "./prism-ejs.js": 10259,
            "./prism-elixir.js": 21078,
            "./prism-elm.js": 84571,
            "./prism-erb.js": 77796,
            "./prism-erlang.js": 86728,
            "./prism-etlua.js": 56850,
            "./prism-excel-formula.js": 63012,
            "./prism-factor.js": 13830,
            "./prism-false.js": 8387,
            "./prism-firestore-security-rules.js": 3453,
            "./prism-flow.js": 14,
            "./prism-fortran.js": 73677,
            "./prism-fsharp.js": 2399,
            "./prism-ftl.js": 82711,
            "./prism-gap.js": 55266,
            "./prism-gcode.js": 44532,
            "./prism-gdscript.js": 87372,
            "./prism-gedcom.js": 21,
            "./prism-gettext.js": 95021,
            "./prism-gherkin.js": 76609,
            "./prism-git.js": 8775,
            "./prism-glsl.js": 937,
            "./prism-gml.js": 78469,
            "./prism-gn.js": 60004,
            "./prism-go-module.js": 11663,
            "./prism-go.js": 6119,
            "./prism-gradle.js": 99773,
            "./prism-graphql.js": 29219,
            "./prism-groovy.js": 84225,
            "./prism-haml.js": 60801,
            "./prism-handlebars.js": 34845,
            "./prism-haskell.js": 84167,
            "./prism-haxe.js": 8275,
            "./prism-hcl.js": 39995,
            "./prism-hlsl.js": 30965,
            "./prism-hoon.js": 42813,
            "./prism-hpkp.js": 35357,
            "./prism-hsts.js": 75411,
            "./prism-http.js": 68281,
            "./prism-ichigojam.js": 10729,
            "./prism-icon.js": 49569,
            "./prism-icu-message-format.js": 29927,
            "./prism-idris.js": 34190,
            "./prism-iecst.js": 38717,
            "./prism-ignore.js": 97125,
            "./prism-inform7.js": 66261,
            "./prism-ini.js": 72272,
            "./prism-io.js": 87799,
            "./prism-j.js": 87061,
            "./prism-java.js": 51759,
            "./prism-javadoc.js": 59577,
            "./prism-javadoclike.js": 53783,
            "./prism-javascript.js": 55177,
            "./prism-javastacktrace.js": 85747,
            "./prism-jexl.js": 59527,
            "./prism-jolie.js": 40454,
            "./prism-jq.js": 35988,
            "./prism-js-extras.js": 85983,
            "./prism-js-templates.js": 60767,
            "./prism-jsdoc.js": 87302,
            "./prism-json.js": 30058,
            "./prism-json5.js": 38769,
            "./prism-jsonp.js": 96137,
            "./prism-jsstacktrace.js": 19059,
            "./prism-jsx.js": 59430,
            "./prism-julia.js": 13512,
            "./prism-keepalived.js": 59118,
            "./prism-keyman.js": 4132,
            "./prism-kotlin.js": 31320,
            "./prism-kumir.js": 63621,
            "./prism-kusto.js": 71930,
            "./prism-latex.js": 6483,
            "./prism-latte.js": 80115,
            "./prism-less.js": 88791,
            "./prism-lilypond.js": 30696,
            "./prism-linker-script.js": 39053,
            "./prism-liquid.js": 1248,
            "./prism-lisp.js": 9681,
            "./prism-livescript.js": 50929,
            "./prism-llvm.js": 8940,
            "./prism-log.js": 8214,
            "./prism-lolcode.js": 14559,
            "./prism-lua.js": 19551,
            "./prism-magma.js": 95287,
            "./prism-makefile.js": 14691,
            "./prism-markdown.js": 97818,
            "./prism-markup-templating.js": 12862,
            "./prism-markup.js": 55953,
            "./prism-mata.js": 20536,
            "./prism-matlab.js": 76482,
            "./prism-maxscript.js": 54226,
            "./prism-mel.js": 93859,
            "./prism-mermaid.js": 26345,
            "./prism-metafont.js": 34894,
            "./prism-mizar.js": 66357,
            "./prism-mongodb.js": 91030,
            "./prism-monkey.js": 78725,
            "./prism-moonscript.js": 58284,
            "./prism-n1ql.js": 51704,
            "./prism-n4js.js": 23809,
            "./prism-nand2tetris-hdl.js": 36309,
            "./prism-naniscript.js": 99661,
            "./prism-nasm.js": 16482,
            "./prism-neon.js": 50129,
            "./prism-nevod.js": 53392,
            "./prism-nginx.js": 46797,
            "./prism-nim.js": 63863,
            "./prism-nix.js": 43718,
            "./prism-nsis.js": 30815,
            "./prism-objectivec.js": 24357,
            "./prism-ocaml.js": 1891,
            "./prism-odin.js": 40595,
            "./prism-opencl.js": 23298,
            "./prism-openqasm.js": 13721,
            "./prism-oz.js": 32258,
            "./prism-parigp.js": 15530,
            "./prism-parser.js": 18452,
            "./prism-pascal.js": 45567,
            "./prism-pascaligo.js": 45820,
            "./prism-pcaxis.js": 86172,
            "./prism-peoplecode.js": 15091,
            "./prism-perl.js": 54242,
            "./prism-php-extras.js": 70393,
            "./prism-php.js": 11191,
            "./prism-phpdoc.js": 24595,
            "./prism-plant-uml.js": 24198,
            "./prism-plsql.js": 44894,
            "./prism-powerquery.js": 97060,
            "./prism-powershell.js": 87275,
            "./prism-processing.js": 82747,
            "./prism-prolog.js": 85944,
            "./prism-promql.js": 48667,
            "./prism-properties.js": 14870,
            "./prism-protobuf.js": 41418,
            "./prism-psl.js": 54910,
            "./prism-pug.js": 66560,
            "./prism-puppet.js": 71406,
            "./prism-pure.js": 20834,
            "./prism-purebasic.js": 93712,
            "./prism-purescript.js": 42943,
            "./prism-python.js": 94258,
            "./prism-q.js": 70546,
            "./prism-qml.js": 78344,
            "./prism-qore.js": 87578,
            "./prism-qsharp.js": 29424,
            "./prism-r.js": 51793,
            "./prism-racket.js": 87438,
            "./prism-reason.js": 4562,
            "./prism-regex.js": 74373,
            "./prism-rego.js": 82167,
            "./prism-renpy.js": 39111,
            "./prism-rescript.js": 75336,
            "./prism-rest.js": 66615,
            "./prism-rip.js": 24090,
            "./prism-roboconf.js": 81328,
            "./prism-robotframework.js": 20657,
            "./prism-ruby.js": 5849,
            "./prism-rust.js": 30673,
            "./prism-sas.js": 76002,
            "./prism-sass.js": 14244,
            "./prism-scala.js": 40834,
            "./prism-scheme.js": 5003,
            "./prism-scss.js": 58270,
            "./prism-shell-session.js": 69602,
            "./prism-smali.js": 88851,
            "./prism-smalltalk.js": 68218,
            "./prism-smarty.js": 73158,
            "./prism-sml.js": 23677,
            "./prism-solidity.js": 66446,
            "./prism-solution-file.js": 97707,
            "./prism-soy.js": 9005,
            "./prism-sparql.js": 39899,
            "./prism-splunk-spl.js": 21985,
            "./prism-sqf.js": 75130,
            "./prism-sql.js": 18245,
            "./prism-squirrel.js": 48289,
            "./prism-stan.js": 34137,
            "./prism-stata.js": 48233,
            "./prism-stylus.js": 63702,
            "./prism-supercollider.js": 5199,
            "./prism-swift.js": 95143,
            "./prism-systemd.js": 54508,
            "./prism-t4-cs.js": 63025,
            "./prism-t4-templating.js": 37528,
            "./prism-t4-vb.js": 83567,
            "./prism-tap.js": 5807,
            "./prism-tcl.js": 69003,
            "./prism-textile.js": 17531,
            "./prism-toml.js": 73354,
            "./prism-tremor.js": 96444,
            "./prism-tsx.js": 55126,
            "./prism-tt2.js": 72974,
            "./prism-turtle.js": 1987,
            "./prism-twig.js": 51897,
            "./prism-typescript.js": 69231,
            "./prism-typoscript.js": 94063,
            "./prism-unrealscript.js": 22067,
            "./prism-uorazor.js": 95601,
            "./prism-uri.js": 40182,
            "./prism-v.js": 66493,
            "./prism-vala.js": 43671,
            "./prism-vbnet.js": 50742,
            "./prism-velocity.js": 67081,
            "./prism-verilog.js": 14941,
            "./prism-vhdl.js": 14438,
            "./prism-vim.js": 98684,
            "./prism-visual-basic.js": 43578,
            "./prism-warpscript.js": 16240,
            "./prism-wasm.js": 81242,
            "./prism-web-idl.js": 82283,
            "./prism-wgsl.js": 18933,
            "./prism-wiki.js": 85400,
            "./prism-wolfram.js": 29566,
            "./prism-wren.js": 42271,
            "./prism-xeora.js": 49643,
            "./prism-xml-doc.js": 62092,
            "./prism-xojo.js": 77678,
            "./prism-xquery.js": 36326,
            "./prism-yaml.js": 36744,
            "./prism-yang.js": 11737,
            "./prism-zig.js": 93183
        };
        function n(P) {
            var M = v(P);
            return E(M)
        }
        function v(P) {
            if (!E.o(b, P)) {
                var M = new Error("Cannot find module '" + P + "'");
                throw M.code = "MODULE_NOT_FOUND",
                M
            }
            return b[P]
        }
        n.keys = function() {
            return Object.keys(b)
        }
        ,
        n.resolve = v,
        pe.exports = n,
        n.id = 15324
    }
}]);
