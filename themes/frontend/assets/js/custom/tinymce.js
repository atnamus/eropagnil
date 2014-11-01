// 4.1.6 (2014-10-08)
! function(e, t) {
	"use strict";

	function n(e, t) {
		for (var n, r = [], i = 0; i < e.length; ++i) {
			if (n = s[e[i]] || o(e[i]), !n) throw "module definition dependecy not found: " + e[i];
			r.push(n)
		}
		t.apply(null, r)
	}

	function r(e, r, i) {
		if ("string" != typeof e) throw "invalid module definition, module id must be defined and be a string";
		if (r === t) throw "invalid module definition, dependencies must be specified";
		if (i === t) throw "invalid module definition, definition function must be specified";
		n(r, function() {
			s[e] = i.apply(null, arguments)
		})
	}

	function i(e) {
		return !!s[e]
	}

	function o(t) {
		for (var n = e, r = t.split(/[.\/]/), i = 0; i < r.length; ++i) {
			if (!n[r[i]]) return;
			n = n[r[i]]
		}
		return n
	}

	function a(n) {
		for (var r = 0; r < n.length; r++) {
			for (var i = e, o = n[r], a = o.split(/[.\/]/), l = 0; l < a.length - 1; ++l) i[a[l]] === t && (i[a[l]] = {}), i = i[a[l]];
			i[a[a.length - 1]] = s[o]
		}
	}
	var s = {},
		l = "tinymce/dom/EventUtils",
		c = "tinymce/dom/Sizzle",
		u = "tinymce/util/Tools",
		d = "tinymce/Env",
		f = "tinymce/dom/DomQuery",
		p = "tinymce/html/Styles",
		h = "tinymce/dom/TreeWalker",
		m = "tinymce/dom/Range",
		g = "tinymce/html/Entities",
		v = "tinymce/dom/StyleSheetLoader",
		y = "tinymce/dom/DOMUtils",
		b = "tinymce/dom/ScriptLoader",
		C = "tinymce/AddOnManager",
		x = "tinymce/dom/RangeUtils",
		w = "tinymce/NodeChange",
		_ = "tinymce/html/Node",
		E = "tinymce/html/Schema",
		N = "tinymce/html/SaxParser",
		k = "tinymce/html/DomParser",
		S = "tinymce/html/Writer",
		T = "tinymce/html/Serializer",
		R = "tinymce/dom/Serializer",
		A = "tinymce/dom/TridentSelection",
		B = "tinymce/util/VK",
		D = "tinymce/dom/ControlSelection",
		L = "tinymce/dom/BookmarkManager",
		H = "tinymce/dom/Selection",
		M = "tinymce/dom/ElementUtils",
		P = "tinymce/fmt/Preview",
		O = "tinymce/Formatter",
		I = "tinymce/UndoManager",
		F = "tinymce/EnterKey",
		z = "tinymce/ForceBlocks",
		W = "tinymce/EditorCommands",
		V = "tinymce/util/URI",
		U = "tinymce/util/Class",
		$ = "tinymce/util/EventDispatcher",
		q = "tinymce/ui/Selector",
		j = "tinymce/ui/Collection",
		Y = "tinymce/ui/DomUtils",
		K = "tinymce/ui/Control",
		G = "tinymce/ui/Factory",
		X = "tinymce/ui/KeyboardNavigation",
		J = "tinymce/ui/Container",
		Q = "tinymce/ui/DragHelper",
		Z = "tinymce/ui/Scrollable",
		et = "tinymce/ui/Panel",
		tt = "tinymce/ui/Movable",
		nt = "tinymce/ui/Resizable",
		rt = "tinymce/ui/FloatPanel",
		it = "tinymce/ui/Window",
		ot = "tinymce/ui/MessageBox",
		at = "tinymce/WindowManager",
		st = "tinymce/util/Quirks",
		lt = "tinymce/util/Observable",
		ct = "tinymce/EditorObservable",
		ut = "tinymce/Shortcuts",
		dt = "tinymce/Editor",
		ft = "tinymce/util/I18n",
		pt = "tinymce/FocusManager",
		ht = "tinymce/EditorManager",
		mt = "tinymce/LegacyInput",
		gt = "tinymce/util/XHR",
		vt = "tinymce/util/JSON",
		yt = "tinymce/util/JSONRequest",
		bt = "tinymce/util/JSONP",
		Ct = "tinymce/util/LocalStorage",
		xt = "tinymce/Compat",
		wt = "tinymce/ui/Layout",
		_t = "tinymce/ui/AbsoluteLayout",
		Et = "tinymce/ui/Tooltip",
		Nt = "tinymce/ui/Widget",
		kt = "tinymce/ui/Button",
		St = "tinymce/ui/ButtonGroup",
		Tt = "tinymce/ui/Checkbox",
		Rt = "tinymce/ui/ComboBox",
		At = "tinymce/ui/ColorBox",
		Bt = "tinymce/ui/PanelButton",
		Dt = "tinymce/ui/ColorButton",
		Lt = "tinymce/util/Color",
		Ht = "tinymce/ui/ColorPicker",
		Mt = "tinymce/ui/Path",
		Pt = "tinymce/ui/ElementPath",
		Ot = "tinymce/ui/FormItem",
		It = "tinymce/ui/Form",
		Ft = "tinymce/ui/FieldSet",
		zt = "tinymce/ui/FilePicker",
		Wt = "tinymce/ui/FitLayout",
		Vt = "tinymce/ui/FlexLayout",
		Ut = "tinymce/ui/FlowLayout",
		$t = "tinymce/ui/FormatControls",
		qt = "tinymce/ui/GridLayout",
		jt = "tinymce/ui/Iframe",
		Yt = "tinymce/ui/Label",
		Kt = "tinymce/ui/Toolbar",
		Gt = "tinymce/ui/MenuBar",
		Xt = "tinymce/ui/MenuButton",
		Jt = "tinymce/ui/ListBox",
		Qt = "tinymce/ui/MenuItem",
		Zt = "tinymce/ui/Menu",
		en = "tinymce/ui/Radio",
		tn = "tinymce/ui/ResizeHandle",
		nn = "tinymce/ui/Spacer",
		rn = "tinymce/ui/SplitButton",
		on = "tinymce/ui/StackLayout",
		an = "tinymce/ui/TabPanel",
		sn = "tinymce/ui/TextBox",
		ln = "tinymce/ui/Throbber";
	r(l, [], function() {
		function e(e, t, n, r) {
			e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
		}

		function t(e, t, n, r) {
			e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n)
		}

		function n(e, t) {
			function n() {
				return !1
			}

			function r() {
				return !0
			}
			var i, o = t || {},
				l;
			for (i in e) s[i] || (o[i] = e[i]);
			if (o.target || (o.target = o.srcElement || document), e && a.test(e.type) && e.pageX === l && e.clientX !== l) {
				var c = o.target.ownerDocument || document,
					u = c.documentElement,
					d = c.body;
				o.pageX = e.clientX + (u && u.scrollLeft || d && d.scrollLeft || 0) - (u && u.clientLeft || d && d.clientLeft || 0), o.pageY = e.clientY + (u && u.scrollTop || d && d.scrollTop || 0) - (u && u.clientTop || d && d.clientTop || 0)
			}
			return o.preventDefault = function() {
				o.isDefaultPrevented = r, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
			}, o.stopPropagation = function() {
				o.isPropagationStopped = r, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
			}, o.stopImmediatePropagation = function() {
				o.isImmediatePropagationStopped = r, o.stopPropagation()
			}, o.isDefaultPrevented || (o.isDefaultPrevented = n, o.isPropagationStopped = n, o.isImmediatePropagationStopped = n), o
		}

		function r(n, r, i) {
			function o() {
				i.domLoaded || (i.domLoaded = !0, r(c))
			}

			function a() {
				("complete" === l.readyState || "interactive" === l.readyState && l.body) && (t(l, "readystatechange", a), o())
			}

			function s() {
				try {
					l.documentElement.doScroll("left")
				} catch (e) {
					return void setTimeout(s, 0)
				}
				o()
			}
			var l = n.document,
				c = {
					type: "ready"
				};
			return i.domLoaded ? void r(c) : (l.addEventListener ? "complete" === l.readyState ? o() : e(n, "DOMContentLoaded", o) : (e(l, "readystatechange", a), l.documentElement.doScroll && n.self === n.top && s()), void e(n, "load", o))
		}

		function i() {
			function i(e, t) {
				var n, r, i, o, a = s[t];
				if (n = a && a[e.type])
					for (r = 0, i = n.length; i > r; r++)
						if (o = n[r], o && o.func.call(o.scope, e) === !1 && e.preventDefault(), e.isImmediatePropagationStopped()) return
			}
			var a = this,
				s = {},
				l, c, u, d, f;
			c = o + (+new Date).toString(32), d = "onmouseenter" in document.documentElement, u = "onfocusin" in document.documentElement, f = {
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			}, l = 1, a.domLoaded = !1, a.events = s, a.bind = function(t, o, p, h) {
				function m(e) {
					i(n(e || _.event), g)
				}
				var g, v, y, b, C, x, w, _ = window;
				if (t && 3 !== t.nodeType && 8 !== t.nodeType) {
					for (t[c] ? g = t[c] : (g = l++, t[c] = g, s[g] = {}), h = h || t, o = o.split(" "), y = o.length; y--;) b = o[y], x = m, C = w = !1, "DOMContentLoaded" === b && (b = "ready"), a.domLoaded && "ready" === b && "complete" == t.readyState ? p.call(h, n({
						type: b
					})) : (d || (C = f[b], C && (x = function(e) {
						var t, r;
						if (t = e.currentTarget, r = e.relatedTarget, r && t.contains) r = t.contains(r);
						else
							for (; r && r !== t;) r = r.parentNode;
						r || (e = n(e || _.event), e.type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, i(e, g))
					})), u || "focusin" !== b && "focusout" !== b || (w = !0, C = "focusin" === b ? "focus" : "blur", x = function(e) {
						e = n(e || _.event), e.type = "focus" === e.type ? "focusin" : "focusout", i(e, g)
					}), v = s[g][b], v ? "ready" === b && a.domLoaded ? p({
						type: b
					}) : v.push({
						func: p,
						scope: h
					}) : (s[g][b] = v = [{
						func: p,
						scope: h
					}], v.fakeName = C, v.capture = w, v.nativeHandler = x, "ready" === b ? r(t, x, a) : e(t, C || b, x, w)));
					return t = v = 0, p
				}
			}, a.unbind = function(e, n, r) {
				var i, o, l, u, d, f;
				if (!e || 3 === e.nodeType || 8 === e.nodeType) return a;
				if (i = e[c]) {
					if (f = s[i], n) {
						for (n = n.split(" "), l = n.length; l--;)
							if (d = n[l], o = f[d]) {
								if (r)
									for (u = o.length; u--;)
										if (o[u].func === r) {
											var p = o.nativeHandler,
												h = o.fakeName,
												m = o.capture;
											o = o.slice(0, u).concat(o.slice(u + 1)), o.nativeHandler = p, o.fakeName = h, o.capture = m, f[d] = o
										}
								r && 0 !== o.length || (delete f[d], t(e, o.fakeName || d, o.nativeHandler, o.capture))
							}
					} else {
						for (d in f) o = f[d], t(e, o.fakeName || d, o.nativeHandler, o.capture);
						f = {}
					}
					for (d in f) return a;
					delete s[i];
					try {
						delete e[c]
					} catch (g) {
						e[c] = null
					}
				}
				return a
			}, a.fire = function(e, t, r) {
				var o;
				if (!e || 3 === e.nodeType || 8 === e.nodeType) return a;
				r = n(null, r), r.type = t, r.target = e;
				do o = e[c], o && i(r, o), e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow; while (e && !r.isPropagationStopped());
				return a
			}, a.clean = function(e) {
				var t, n, r = a.unbind;
				if (!e || 3 === e.nodeType || 8 === e.nodeType) return a;
				if (e[c] && r(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName)
					for (r(e), n = e.getElementsByTagName("*"), t = n.length; t--;) e = n[t], e[c] && r(e);
				return a
			}, a.destroy = function() {
				s = {}
			}, a.cancel = function(e) {
				return e && (e.preventDefault(), e.stopImmediatePropagation()), !1
			}
		}
		var o = "mce-data-",
			a = /^(?:mouse|contextmenu)|click/,
			s = {
				keyLocation: 1,
				layerX: 1,
				layerY: 1,
				returnValue: 1
			};
		return i.Event = new i, i.Event.bind(window, "ready", function() {}), i
	}), r(c, [], function() {
		function e(e, t, n, r) {
			var i, o, a, s, l, c, d, p, h, m;
			if ((t ? t.ownerDocument || t : z) !== D && B(t), t = t || D, n = n || [], !e || "string" != typeof e) return n;
			if (1 !== (s = t.nodeType) && 9 !== s) return [];
			if (H && !r) {
				if (i = vt.exec(e))
					if (a = i[1]) {
						if (9 === s) {
							if (o = t.getElementById(a), !o || !o.parentNode) return n;
							if (o.id === a) return n.push(o), n
						} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && I(t, o) && o.id === a) return n.push(o), n
					} else {
						if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
						if ((a = i[3]) && x.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
					}
				if (x.qsa && (!M || !M.test(e))) {
					if (p = d = F, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
						for (c = N(e), (d = t.getAttribute("id")) ? p = d.replace(bt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
						h = yt.test(e) && u(t.parentNode) || t, m = c.join(",")
					}
					if (m) try {
						return Z.apply(n, h.querySelectorAll(m)), n
					} catch (g) {} finally {
						d || t.removeAttribute("id")
					}
				}
			}
			return S(e.replace(st, "$1"), t, n, r)
		}

		function n() {
			function e(n, r) {
				return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
			}
			var t = [];
			return e
		}

		function r(e) {
			return e[F] = !0, e
		}

		function i(e) {
			var t = D.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function o(e, t) {
			for (var n = e.split("|"), r = e.length; r--;) w.attrHandle[n[r]] = t
		}

		function a(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || K) - (~e.sourceIndex || K);
			if (r) return r;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function s(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function l(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function c(e) {
			return r(function(t) {
				return t = +t, r(function(n, r) {
					for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		function u(e) {
			return e && typeof e.getElementsByTagName !== Y && e
		}

		function d() {}

		function f(e) {
			for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
			return r
		}

		function p(e, t, n) {
			var r = t.dir,
				i = n && "parentNode" === r,
				o = V++;
			return t.first ? function(t, n, o) {
				for (; t = t[r];)
					if (1 === t.nodeType || i) return e(t, n, o)
			} : function(t, n, a) {
				var s, l, c = [W, o];
				if (a) {
					for (; t = t[r];)
						if ((1 === t.nodeType || i) && e(t, n, a)) return !0
				} else
					for (; t = t[r];)
						if (1 === t.nodeType || i) {
							if (l = t[F] || (t[F] = {}), (s = l[r]) && s[0] === W && s[1] === o) return c[2] = s[2];
							if (l[r] = c, c[2] = e(t, n, a)) return !0
						}
			}
		}

		function h(e) {
			return e.length > 1 ? function(t, n, r) {
				for (var i = e.length; i--;)
					if (!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}

		function m(t, n, r) {
			for (var i = 0, o = n.length; o > i; i++) e(t, n[i], r);
			return r
		}

		function g(e, t, n, r, i) {
			for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s));
			return a
		}

		function v(e, t, n, i, o, a) {
			return i && !i[F] && (i = v(i)), o && !o[F] && (o = v(o, a)), r(function(r, a, s, l) {
				var c, u, d, f = [],
					p = [],
					h = a.length,
					v = r || m(t || "*", s.nodeType ? [s] : s, []),
					y = !e || !r && t ? v : g(v, f, e, s, l),
					b = n ? o || (r ? e : h || i) ? [] : a : y;
				if (n && n(y, b, s, l), i)
					for (c = g(b, p), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
				if (r) {
					if (o || e) {
						if (o) {
							for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
							o(null, b = [], c, l)
						}
						for (u = b.length; u--;)(d = b[u]) && (c = o ? tt.call(r, d) : f[u]) > -1 && (r[c] = !(a[c] = d))
					}
				} else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : Z.apply(a, b)
			})
		}

		function y(e) {
			for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = p(function(e) {
				return e === t
			}, a, !0), c = p(function(e) {
				return tt.call(t, e) > -1
			}, a, !0), u = [
				function(e, n, r) {
					return !o && (r || n !== T) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
				}
			]; i > s; s++)
				if (n = w.relative[e[s].type]) u = [p(h(u), n)];
				else {
					if (n = w.filter[e[s].type].apply(null, e[s].matches), n[F]) {
						for (r = ++s; i > r && !w.relative[e[r].type]; r++);
						return v(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(st, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e))
					}
					u.push(n)
				}
			return h(u)
		}

		function b(t, n) {
			var i = n.length > 0,
				o = t.length > 0,
				a = function(r, a, s, l, c) {
					var u, d, f, p = 0,
						h = "0",
						m = r && [],
						v = [],
						y = T,
						b = r || o && w.find.TAG("*", c),
						C = W += null == y ? 1 : Math.random() || .1,
						x = b.length;
					for (c && (T = a !== D && a); h !== x && null != (u = b[h]); h++) {
						if (o && u) {
							for (d = 0; f = t[d++];)
								if (f(u, a, s)) {
									l.push(u);
									break
								}
							c && (W = C)
						}
						i && ((u = !f && u) && p--, r && m.push(u))
					}
					if (p += h, i && h !== p) {
						for (d = 0; f = n[d++];) f(m, v, a, s);
						if (r) {
							if (p > 0)
								for (; h--;) m[h] || v[h] || (v[h] = J.call(l));
							v = g(v)
						}
						Z.apply(l, v), c && !r && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
					}
					return c && (W = C, T = y), m
				};
			return i ? r(a) : a
		}
		var C, x, w, _, E, N, k, S, T, R, A, B, D, L, H, M, P, O, I, F = "sizzle" + -new Date,
			z = window.document,
			W = 0,
			V = 0,
			U = n(),
			$ = n(),
			q = n(),
			j = function(e, t) {
				return e === t && (A = !0), 0
			},
			Y = typeof t,
			K = 1 << 31,
			G = {}.hasOwnProperty,
			X = [],
			J = X.pop,
			Q = X.push,
			Z = X.push,
			et = X.slice,
			tt = X.indexOf || function(e) {
				for (var t = 0, n = this.length; n > t; t++)
					if (this[t] === e) return t;
				return -1
			},
			nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			rt = "[\\x20\\t\\r\\n\\f]",
			it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			ot = "\\[" + rt + "*(" + it + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + rt + "*\\]",
			at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
			st = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
			lt = new RegExp("^" + rt + "*," + rt + "*"),
			ct = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
			ut = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
			dt = new RegExp(at),
			ft = new RegExp("^" + it + "$"),
			pt = {
				ID: new RegExp("^#(" + it + ")"),
				CLASS: new RegExp("^\\.(" + it + ")"),
				TAG: new RegExp("^(" + it + "|[*])"),
				ATTR: new RegExp("^" + ot),
				PSEUDO: new RegExp("^" + at),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + nt + ")$", "i"),
				needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
			},
			ht = /^(?:input|select|textarea|button)$/i,
			mt = /^h\d$/i,
			gt = /^[^{]+\{\s*\[native \w/,
			vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			yt = /[+~]/,
			bt = /'|\\/g,
			Ct = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
			xt = function(e, t, n) {
				var r = "0x" + t - 65536;
				return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
			};
		try {
			Z.apply(X = et.call(z.childNodes), z.childNodes), X[z.childNodes.length].nodeType
		} catch (wt) {
			Z = {
				apply: X.length ? function(e, t) {
					Q.apply(e, et.call(t))
				} : function(e, t) {
					for (var n = e.length, r = 0; e[n++] = t[r++];);
					e.length = n - 1
				}
			}
		}
		x = e.support = {}, E = e.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, B = e.setDocument = function(e) {
			var t, n = e ? e.ownerDocument || e : z,
				r = n.defaultView;
			return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, L = n.documentElement, H = !E(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
				B()
			}, !1) : r.attachEvent && r.attachEvent("onunload", function() {
				B()
			})), x.attributes = i(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), x.getElementsByTagName = i(function(e) {
				return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
			}), x.getElementsByClassName = gt.test(n.getElementsByClassName), x.getById = i(function(e) {
				return L.appendChild(e).id = F, !n.getElementsByName || !n.getElementsByName(F).length
			}), x.getById ? (w.find.ID = function(e, t) {
				if (typeof t.getElementById !== Y && H) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, w.filter.ID = function(e) {
				var t = e.replace(Ct, xt);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete w.find.ID, w.filter.ID = function(e) {
				var t = e.replace(Ct, xt);
				return function(e) {
					var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), w.find.TAG = x.getElementsByTagName ? function(e, t) {
				return typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(e) : void 0
			} : function(e, t) {
				var n, r = [],
					i = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = o[i++];) 1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, w.find.CLASS = x.getElementsByClassName && function(e, t) {
				return H ? t.getElementsByClassName(e) : void 0
			}, P = [], M = [], (x.qsa = gt.test(n.querySelectorAll)) && (i(function(e) {
				e.innerHTML = "<select msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || M.push(":checked")
			}), i(function(e) {
				var t = n.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
			})), (x.matchesSelector = gt.test(O = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
				x.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), P.push("!=", at)
			}), M = M.length && new RegExp(M.join("|")), P = P.length && new RegExp(P.join("|")), t = gt.test(L.compareDocumentPosition), I = t || gt.test(L.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function(e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, j = t ? function(e, t) {
				if (e === t) return A = !0, 0;
				var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !x.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === z && I(z, e) ? -1 : t === n || t.ownerDocument === z && I(z, t) ? 1 : R ? tt.call(R, e) - tt.call(R, t) : 0 : 4 & r ? -1 : 1)
			} : function(e, t) {
				if (e === t) return A = !0, 0;
				var r, i = 0,
					o = e.parentNode,
					s = t.parentNode,
					l = [e],
					c = [t];
				if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : R ? tt.call(R, e) - tt.call(R, t) : 0;
				if (o === s) return a(e, t);
				for (r = e; r = r.parentNode;) l.unshift(r);
				for (r = t; r = r.parentNode;) c.unshift(r);
				for (; l[i] === c[i];) i++;
				return i ? a(l[i], c[i]) : l[i] === z ? -1 : c[i] === z ? 1 : 0
			}, n) : D
		}, e.matches = function(t, n) {
			return e(t, null, null, n)
		}, e.matchesSelector = function(t, n) {
			if ((t.ownerDocument || t) !== D && B(t), n = n.replace(ut, "='$1']"), !(!x.matchesSelector || !H || P && P.test(n) || M && M.test(n))) try {
				var r = O.call(t, n);
				if (r || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
			} catch (i) {}
			return e(n, D, null, [t]).length > 0
		}, e.contains = function(e, t) {
			return (e.ownerDocument || e) !== D && B(e), I(e, t)
		}, e.attr = function(e, n) {
			(e.ownerDocument || e) !== D && B(e);
			var r = w.attrHandle[n.toLowerCase()],
				i = r && G.call(w.attrHandle, n.toLowerCase()) ? r(e, n, !H) : t;
			return i !== t ? i : x.attributes || !H ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null
		}, e.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, e.uniqueSort = function(e) {
			var t, n = [],
				r = 0,
				i = 0;
			if (A = !x.detectDuplicates, R = !x.sortStable && e.slice(0), e.sort(j), A) {
				for (; t = e[i++];) t === e[i] && (r = n.push(i));
				for (; r--;) e.splice(n[r], 1)
			}
			return R = null, e
		}, _ = e.getText = function(e) {
			var t, n = "",
				r = 0,
				i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += _(e)
				} else if (3 === i || 4 === i) return e.nodeValue
			} else
				for (; t = e[r++];) n += _(t);
			return n
		}, w = e.selectors = {
			cacheLength: 50,
			createPseudo: r,
			match: pt,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(Ct, xt), e[3] = (e[3] || e[4] || e[5] || "").replace(Ct, xt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(t) {
					return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return pt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && dt.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(Ct, xt).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = U[e + " "];
					return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && U(e, function(e) {
						return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
					})
				},
				ATTR: function(t, n, r) {
					return function(i) {
						var o = e.attr(i, t);
						return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === r && 0 === i ? function(e) {
						return !!e.parentNode
					} : function(t, n, l) {
						var c, u, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
							g = t.parentNode,
							v = s && t.nodeName.toLowerCase(),
							y = !l && !s;
						if (g) {
							if (o) {
								for (; m;) {
									for (d = t; d = d[m];)
										if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
									h = m = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [a ? g.firstChild : g.lastChild], a && y) {
								for (u = g[F] || (g[F] = {}), c = u[e] || [], p = c[0] === W && c[1], f = c[0] === W && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
									if (1 === d.nodeType && ++f && d === t) {
										u[e] = [W, p, f];
										break
									}
							} else if (y && (c = (t[F] || (t[F] = {}))[e]) && c[0] === W) f = c[1];
							else
								for (;
									(d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[F] || (d[F] = {}))[e] = [W, f]), d !== t)););
							return f -= i, f === r || f % r === 0 && f / r >= 0
						}
					}
				},
				PSEUDO: function(t, n) {
					var i, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
					return o[F] ? o(n) : o.length > 1 ? (i = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(e, t) {
						for (var r, i = o(e, n), a = i.length; a--;) r = tt.call(e, i[a]), e[r] = !(t[r] = i[a])
					}) : function(e) {
						return o(e, 0, i)
					}) : o
				}
			},
			pseudos: {
				not: r(function(e) {
					var t = [],
						n = [],
						i = k(e.replace(st, "$1"));
					return i[F] ? r(function(e, t, n, r) {
						for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function(e, r, o) {
						return t[0] = e, i(t, null, o, n), !n.pop()
					}
				}),
				has: r(function(t) {
					return function(n) {
						return e(t, n).length > 0
					}
				}),
				contains: r(function(e) {
					return e = e.replace(Ct, xt),
						function(t) {
							return (t.textContent || t.innerText || _(t)).indexOf(e) > -1
						}
				}),
				lang: r(function(t) {
					return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(Ct, xt).toLowerCase(),
						function(e) {
							var n;
							do
								if (n = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
							while ((e = e.parentNode) && 1 === e.nodeType);
							return !1
						}
				}),
				target: function(e) {
					var t = window.location && window.location.hash;
					return t && t.slice(1) === e.id
				},
				root: function(e) {
					return e === L
				},
				focus: function(e) {
					return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !w.pseudos.empty(e)
				},
				header: function(e) {
					return mt.test(e.nodeName)
				},
				input: function(e) {
					return ht.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: c(function() {
					return [0]
				}),
				last: c(function(e, t) {
					return [t - 1]
				}),
				eq: c(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: c(function(e, t) {
					for (var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: c(function(e, t) {
					for (var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: c(function(e, t, n) {
					for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
					return e
				}),
				gt: c(function(e, t, n) {
					for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
					return e
				})
			}
		}, w.pseudos.nth = w.pseudos.eq;
		for (C in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) w.pseudos[C] = s(C);
		for (C in {
			submit: !0,
			reset: !0
		}) w.pseudos[C] = l(C);
		return d.prototype = w.filters = w.pseudos, w.setFilters = new d, N = e.tokenize = function(t, n) {
			var r, i, o, a, s, l, c, u = $[t + " "];
			if (u) return n ? 0 : u.slice(0);
			for (s = t, l = [], c = w.preFilter; s;) {
				(!r || (i = lt.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({
					value: r,
					type: i[0].replace(st, " ")
				}), s = s.slice(r.length));
				for (a in w.filter)!(i = pt[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
					value: r,
					type: a,
					matches: i
				}), s = s.slice(r.length));
				if (!r) break
			}
			return n ? s.length : s ? e.error(t) : $(t, l).slice(0)
		}, k = e.compile = function(e, t) {
			var n, r = [],
				i = [],
				o = q[e + " "];
			if (!o) {
				for (t || (t = N(e)), n = t.length; n--;) o = y(t[n]), o[F] ? r.push(o) : i.push(o);
				o = q(e, b(i, r)), o.selector = e
			}
			return o
		}, S = e.select = function(e, t, n, r) {
			var i, o, a, s, l, c = "function" == typeof e && e,
				d = !r && N(e = c.selector || e);
			if (n = n || [], 1 === d.length) {
				if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && H && w.relative[o[1].type]) {
					if (t = (w.find.ID(a.matches[0].replace(Ct, xt), t) || [])[0], !t) return n;
					c && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for (i = pt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
					if ((l = w.find[s]) && (r = l(a.matches[0].replace(Ct, xt), yt.test(o[0].type) && u(t.parentNode) || t))) {
						if (o.splice(i, 1), e = r.length && f(o), !e) return Z.apply(n, r), n;
						break
					}
			}
			return (c || k(e, d))(r, t, !H, n, yt.test(e) && u(t.parentNode) || t), n
		}, x.sortStable = F.split("").sort(j).join("") === F, x.detectDuplicates = !!A, B(), x.sortDetached = i(function(e) {
			return 1 & e.compareDocumentPosition(D.createElement("div"))
		}), i(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function(e, t, n) {
			return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), x.attributes && i(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || o("value", function(e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), i(function(e) {
			return null == e.getAttribute("disabled")
		}) || o(nt, function(e, t, n) {
			var r;
			return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), e
	}), r(u, [], function() {
		function e(e) {
			return null === e || e === t ? "" : ("" + e).replace(m, "")
		}

		function n(e, n) {
			return n ? "array" == n && g(e) ? !0 : typeof e == n : e !== t
		}

		function r(e) {
			var t = e,
				n, r;
			if (!g(e))
				for (t = [], n = 0, r = e.length; r > n; n++) t[n] = e[n];
			return t
		}

		function i(e, t, n) {
			var r;
			for (e = e || [], t = t || ",", "string" == typeof e && (e = e.split(t)), n = n || {}, r = e.length; r--;) n[e[r]] = {};
			return n
		}

		function o(e, n, r) {
			var i, o;
			if (!e) return 0;
			if (r = r || e, e.length !== t) {
				for (i = 0, o = e.length; o > i; i++)
					if (n.call(r, e[i], i, e) === !1) return 0
			} else
				for (i in e)
					if (e.hasOwnProperty(i) && n.call(r, e[i], i, e) === !1) return 0; return 1
		}

		function a(e, t) {
			var n = [];
			return o(e, function(e) {
				n.push(t(e))
			}), n
		}

		function s(e, t) {
			var n = [];
			return o(e, function(e) {
				(!t || t(e)) && n.push(e)
			}), n
		}

		function l(e, t, n) {
			var r = this,
				i, o, a, s, l, c = 0;
			if (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e), a = e[3].match(/(^|\.)(\w+)$/i)[2], o = r.createNS(e[3].replace(/\.\w+$/, ""), n), !o[a]) {
				if ("static" == e[2]) return o[a] = t, void(this.onCreate && this.onCreate(e[2], e[3], o[a]));
				t[a] || (t[a] = function() {}, c = 1), o[a] = t[a], r.extend(o[a].prototype, t), e[5] && (i = r.resolve(e[5]).prototype, s = e[5].match(/\.(\w+)$/i)[1], l = o[a], o[a] = c ? function() {
					return i[s].apply(this, arguments)
				} : function() {
					return this.parent = i[s], l.apply(this, arguments)
				}, o[a].prototype[a] = o[a], r.each(i, function(e, t) {
					o[a].prototype[t] = i[t]
				}), r.each(t, function(e, t) {
					i[t] ? o[a].prototype[t] = function() {
						return this.parent = i[t], e.apply(this, arguments)
					} : t != a && (o[a].prototype[t] = e)
				})), r.each(t["static"], function(e, t) {
					o[a][t] = e
				})
			}
		}

		function c(e, t) {
			var n, r;
			if (e)
				for (n = 0, r = e.length; r > n; n++)
					if (e[n] === t) return n;
			return -1
		}

		function u(e, n) {
			var r, i, o, a = arguments,
				s;
			for (r = 1, i = a.length; i > r; r++) {
				n = a[r];
				for (o in n) n.hasOwnProperty(o) && (s = n[o], s !== t && (e[o] = s))
			}
			return e
		}

		function d(e, t, n, r) {
			r = r || this, e && (n && (e = e[n]), o(e, function(e, i) {
				return t.call(r, e, i, n) === !1 ? !1 : void d(e, t, n, r)
			}))
		}

		function f(e, t) {
			var n, r;
			for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) r = e[n], t[r] || (t[r] = {}), t = t[r];
			return t
		}

		function p(e, t) {
			var n, r;
			for (t = t || window, e = e.split("."), n = 0, r = e.length; r > n && (t = t[e[n]], t); n++);
			return t
		}

		function h(t, r) {
			return !t || n(t, "array") ? t : a(t.split(r || ","), e)
		}
		var m = /^\s*|\s*$/g,
			g = Array.isArray || function(e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			};
		return {
			trim: e,
			isArray: g,
			is: n,
			toArray: r,
			makeMap: i,
			each: o,
			map: a,
			grep: s,
			inArray: c,
			extend: u,
			create: l,
			walk: d,
			createNS: f,
			resolve: p,
			explode: h
		}
	}), r(d, [], function() {
		var e = navigator,
			t = e.userAgent,
			n, r, i, o, a, s, l;
		n = window.opera && window.opera.buildNumber, r = /WebKit/.test(t), i = !r && !n && /MSIE/gi.test(t) && /Explorer/gi.test(e.appName), i = i && /MSIE (\w+)\./.exec(t)[1], o = -1 == t.indexOf("Trident/") || -1 == t.indexOf("rv:") && -1 == e.appName.indexOf("Netscape") ? !1 : 11, i = i || o, a = !r && !o && /Gecko/.test(t), s = -1 != t.indexOf("Mac"), l = /(iPad|iPhone)/.test(t);
		var c = !l || t.match(/AppleWebKit\/(\d*)/)[1] >= 534;
		return {
			opera: n,
			webkit: r,
			ie: i,
			gecko: a,
			mac: s,
			iOS: l,
			contentEditable: c,
			transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
			caretAfter: 8 != i,
			range: window.getSelection && "Range" in window,
			documentMode: i ? document.documentMode || 7 : 10
		}
	}), r(f, [l, c, u, d], function(e, n, r, i) {
		function o(e) {
			return "undefined" != typeof e
		}

		function a(e) {
			return "string" == typeof e
		}

		function s(e, t) {
			var n, r, i;
			for (t = t || x, i = t.createElement("div"), n = t.createDocumentFragment(), i.innerHTML = e; r = i.firstChild;) n.appendChild(r);
			return n
		}

		function l(e, t, n, r) {
			var i;
			if (a(t)) t = s(t, g(e[0]));
			else if (t.length && !t.nodeType) {
				if (t = d.makeArray(t), r)
					for (i = t.length - 1; i >= 0; i--) l(e, t[i], n, r);
				else
					for (i = 0; i < t.length; i++) l(e, t[i], n, r);
				return e
			}
			if (t.nodeType)
				for (i = e.length; i--;) n.call(e[i], t);
			return e
		}

		function c(e, t) {
			return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
		}

		function u(e, t, n) {
			var r, i;
			return t = d(t)[0], e.each(function() {
				var e = this;
				n && r == e.parentNode ? i.appendChild(e) : (r = e.parentNode, i = t.cloneNode(!1), e.parentNode.insertBefore(i, e), i.appendChild(e))
			}), e
		}

		function d(e, t) {
			return new d.fn.init(e, t)
		}

		function f(e, t) {
			var n;
			if (t.indexOf) return t.indexOf(e);
			for (n = t.length; n--;)
				if (t[n] === e) return n;
			return -1
		}

		function p(e) {
			return null === e || e === k ? "" : ("" + e).replace(L, "")
		}

		function h(e, t) {
			var n, r, i, o, a;
			if (e)
				if (n = e.length, n === o) {
					for (r in e)
						if (e.hasOwnProperty(r) && (a = e[r], t.call(a, r, a) === !1)) break
				} else
					for (i = 0; n > i && (a = e[i], t.call(a, i, a) !== !1); i++);
			return e
		}

		function m(e, t) {
			var n = [];
			return h(e, function(e, r) {
				t(r, e) && n.push(r)
			}), n
		}

		function g(e) {
			return e ? 9 == e.nodeType ? e : e.ownerDocument : x
		}

		function v(e, n, r) {
			var i = [],
				o = e[n];
			for ("string" != typeof r && r instanceof d && (r = r[0]); o && 9 !== o.nodeType;) {
				if (r !== t) {
					if (o === r) break;
					if ("string" == typeof r && d(o).is(r)) break
				}
				1 === o.nodeType && i.push(o), o = o[n]
			}
			return i
		}

		function y(e, n, r, i) {
			var o = [];
			for (i instanceof d && (i = i[0]); e; e = e[n])
				if (!r || e.nodeType === r) {
					if (i !== t) {
						if (e === i) break;
						if ("string" == typeof i && d(e).is(i)) break
					}
					o.push(e)
				}
			return o
		}

		function b(e, t, n) {
			for (e = e[t]; e; e = e[t])
				if (e.nodeType == n) return e;
			return null
		}

		function C(e, t, n) {
			h(n, function(n, r) {
				e[n] = e[n] || {}, e[n][t] = r
			})
		}
		var x = document,
			w = Array.prototype.push,
			_ = Array.prototype.slice,
			E = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
			N = e.Event,
			k, S = r.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
			T = r.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
			R = {
				"for": "htmlFor",
				"class": "className",
				readonly: "readOnly"
			},
			A = {
				"float": "cssFloat"
			},
			B = {},
			D = {},
			L = /^\s*|\s*$/g;
		return d.fn = d.prototype = {
			constructor: d,
			selector: "",
			context: null,
			length: 0,
			init: function(e, t) {
				var n = this,
					r, i;
				if (!e) return n;
				if (e.nodeType) return n.context = n[0] = e, n.length = 1, n;
				if (t && t.nodeType) n.context = t;
				else {
					if (t) return d(e).attr(t);
					n.context = t = document
				} if (a(e)) {
					if (n.selector = e, r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : E.exec(e), !r) return d(t).find(e);
					if (r[1])
						for (i = s(e, g(t)).firstChild; i;) w.call(n, i), i = i.nextSibling;
					else {
						if (i = g(t).getElementById(r[2]), !i) return n;
						if (i.id !== r[2]) return n.find(e);
						n.length = 1, n[0] = i
					}
				} else this.add(e, !1);
				return n
			},
			toArray: function() {
				return r.toArray(this)
			},
			add: function(e, t) {
				var n = this,
					r, i;
				if (a(e)) return n.add(d(e));
				if (e.nodeType) return n.add([e]);
				if (t !== !1)
					for (r = d.unique(n.toArray().concat(d.makeArray(e))), n.length = r.length, i = 0; i < r.length; i++) n[i] = r[i];
				else w.apply(n, d.makeArray(e));
				return n
			},
			attr: function(e, t) {
				var n = this,
					r;
				if ("object" == typeof e) h(e, function(e, t) {
					n.attr(e, t)
				});
				else {
					if (!o(t)) {
						if (n[0] && 1 === n[0].nodeType) {
							if (r = B[e], r && r.get) return r.get(n[0], e);
							if (T[e]) return n.prop(e) ? e : k;
							t = n[0].getAttribute(e, 2), null === t && (t = k)
						}
						return t
					}
					this.each(function() {
						var n;
						if (1 === this.nodeType) {
							if (n = B[e], n && n.set) return void n.set(this, t);
							null === t ? this.removeAttribute(e, 2) : this.setAttribute(e, t, 2)
						}
					})
				}
				return n
			},
			removeAttr: function(e) {
				return this.attr(e, null)
			},
			prop: function(e, t) {
				var n = this;
				if (e = R[e] || e, "object" == typeof e) h(e, function(e, t) {
					n.prop(e, t)
				});
				else {
					if (!o(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
					this.each(function() {
						1 == this.nodeType && (this[e] = t)
					})
				}
				return n
			},
			css: function(e, t) {
				function n(e) {
					return e.replace(/-(\D)/g, function(e, t) {
						return t.toUpperCase()
					})
				}

				function r(e) {
					return e.replace(/[A-Z]/g, function(e) {
						return "-" + e
					})
				}
				var i = this,
					a, s;
				if ("object" == typeof e) h(e, function(e, t) {
					i.css(e, t)
				});
				else if (o(t)) e = n(e), "number" != typeof t || S[e] || (t += "px"), i.each(function() {
					var n = this.style;
					if (s = D[e], s && s.set) return void s.set(this, t);
					try {
						this.style[A[e] || e] = t
					} catch (i) {}(null === t || "" === t) && (n.removeProperty ? n.removeProperty(r(e)) : n.removeAttribute(e))
				});
				else {
					if (a = i[0], s = D[e], s && s.get) return s.get(a);
					if (a.ownerDocument.defaultView) try {
						return a.ownerDocument.defaultView.getComputedStyle(a, null).getPropertyValue(r(e))
					} catch (l) {
						return k
					} else if (a.currentStyle) return a.currentStyle[n(e)]
				}
				return i
			},
			remove: function() {
				for (var e = this, t, n = this.length; n--;) t = e[n], N.clean(t), t.parentNode && t.parentNode.removeChild(t);
				return this
			},
			empty: function() {
				for (var e = this, t, n = this.length; n--;)
					for (t = e[n]; t.firstChild;) t.removeChild(t.firstChild);
				return this
			},
			html: function(e) {
				var t = this,
					n;
				if (o(e)) {
					n = t.length;
					try {
						for (; n--;) t[n].innerHTML = e
					} catch (r) {
						d(t[n]).empty().append(e)
					}
					return t
				}
				return t[0] ? t[0].innerHTML : ""
			},
			text: function(e) {
				var t = this,
					n;
				if (o(e)) {
					for (n = t.length; n--;) "innerText" in t[n] ? t[n].innerText = e : t[0].textContent = e;
					return t
				}
				return t[0] ? t[0].innerText || t[0].textContent : ""
			},
			append: function() {
				return l(this, arguments, function(e) {
					1 === this.nodeType && this.appendChild(e)
				})
			},
			prepend: function() {
				return l(this, arguments, function(e) {
					1 === this.nodeType && this.insertBefore(e, this.firstChild)
				}, !0)
			},
			before: function() {
				var e = this;
				return e[0] && e[0].parentNode ? l(e, arguments, function(e) {
					this.parentNode.insertBefore(e, this)
				}) : e
			},
			after: function() {
				var e = this;
				return e[0] && e[0].parentNode ? l(e, arguments, function(e) {
					this.parentNode.insertBefore(e, this.nextSibling)
				}, !0) : e
			},
			appendTo: function(e) {
				return d(e).append(this), this
			},
			prependTo: function(e) {
				return d(e).prepend(this), this
			},
			replaceWith: function(e) {
				return this.before(e).remove()
			},
			wrap: function(e) {
				return u(this, e)
			},
			wrapAll: function(e) {
				return u(this, e, !0)
			},
			wrapInner: function(e) {
				return this.each(function() {
					d(this).contents().wrapAll(e)
				}), this
			},
			unwrap: function() {
				return this.parent().each(function() {
					d(this).replaceWith(this.childNodes)
				})
			},
			clone: function() {
				var e = [];
				return this.each(function() {
					e.push(this.cloneNode(!0))
				}), d(e)
			},
			addClass: function(e) {
				return this.toggleClass(e, !0)
			},
			removeClass: function(e) {
				return this.toggleClass(e, !1)
			},
			toggleClass: function(e, t) {
				var n = this;
				return "string" != typeof e ? n : (-1 !== e.indexOf(" ") ? h(e.split(" "), function() {
					n.toggleClass(this, t)
				}) : n.each(function(n, r) {
					var i, o;
					o = c(r, e), o !== t && (i = r.className, o ? r.className = p((" " + i + " ").replace(" " + e + " ", " ")) : r.className += i ? " " + e : e)
				}), n)
			},
			hasClass: function(e) {
				return c(this[0], e)
			},
			each: function(e) {
				return h(this, e)
			},
			on: function(e, t) {
				return this.each(function() {
					N.bind(this, e, t)
				})
			},
			off: function(e, t) {
				return this.each(function() {
					N.unbind(this, e, t)
				})
			},
			trigger: function(e) {
				return this.each(function() {
					"object" == typeof e ? N.fire(this, e.type, e) : N.fire(this, e)
				})
			},
			show: function() {
				return this.css("display", "")
			},
			hide: function() {
				return this.css("display", "none")
			},
			slice: function() {
				return new d(_.apply(this, arguments))
			},
			eq: function(e) {
				return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			find: function(e) {
				var t, n, r = [];
				for (t = 0, n = this.length; n > t; t++) d.find(e, this[t], r);
				return d(r)
			},
			filter: function(e) {
				return d("function" == typeof e ? m(this.toArray(), function(t, n) {
					return e(n, t)
				}) : d.filter(e, this.toArray()))
			},
			closest: function(e) {
				var t = [];
				return e instanceof d && (e = e[0]), this.each(function(n, r) {
					for (; r;) {
						if ("string" == typeof e && d(r).is(e)) {
							t.push(r);
							break
						}
						if (r == e) {
							t.push(r);
							break
						}
						r = r.parentNode
					}
				}), d(t)
			},
			offset: function(e) {
				var t, n, r, i = 0,
					o = 0,
					a;
				return e ? this.css(e) : (t = this[0], t && (n = t.ownerDocument, r = n.documentElement, t.getBoundingClientRect && (a = t.getBoundingClientRect(), i = a.left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft, o = a.top + (r.scrollTop || n.body.scrollTop) - r.clientTop)), {
					left: i,
					top: o
				})
			},
			push: w,
			sort: [].sort,
			splice: [].splice
		}, r.extend(d, {
			extend: r.extend,
			makeArray: r.toArray,
			inArray: f,
			isArray: r.isArray,
			each: h,
			trim: p,
			grep: m,
			find: n,
			expr: n.selectors,
			unique: n.uniqueSort,
			text: n.getText,
			contains: n.contains,
			filter: function(e, t, n) {
				var r = t.length;
				for (n && (e = ":not(" + e + ")"); r--;) 1 != t[r].nodeType && t.splice(r, 1);
				return t = 1 === t.length ? d.find.matchesSelector(t[0], e) ? [t[0]] : [] : d.find.matches(e, t)
			}
		}), h({
			parent: function(e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function(e) {
				return v(e, "parentNode")
			},
			next: function(e) {
				return b(e, "nextSibling", 1)
			},
			prev: function(e) {
				return b(e, "previousSibling", 1)
			},
			children: function(e) {
				return y(e.firstChild, "nextSibling", 1)
			},
			contents: function(e) {
				return r.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes)
			}
		}, function(e, t) {
			d.fn[e] = function(n) {
				var r = this,
					i = [];
				return r.each(function() {
					var e = t.call(i, this, n, i);
					e && (d.isArray(e) ? i.push.apply(i, e) : i.push(e))
				}), this.length > 1 && (i = d.unique(i), 0 === e.indexOf("parents") && (i = i.reverse())), i = d(i), n ? i.filter(n) : i
			}
		}), h({
			parentsUntil: function(e, t) {
				return v(e, "parentNode", t)
			},
			nextUntil: function(e, t) {
				return y(e, "nextSibling", 1, t).slice(1)
			},
			prevUntil: function(e, t) {
				return y(e, "previousSibling", 1, t).slice(1)
			}
		}, function(e, t) {
			d.fn[e] = function(n, r) {
				var i = this,
					o = [];
				return i.each(function() {
					var e = t.call(o, this, n, o);
					e && (d.isArray(e) ? o.push.apply(o, e) : o.push(e))
				}), this.length > 1 && (o = d.unique(o), (0 === e.indexOf("parents") || "prevUntil" === e) && (o = o.reverse())), o = d(o), r ? o.filter(r) : o
			}
		}), d.fn.is = function(e) {
			return !!e && this.filter(e).length > 0
		}, d.fn.init.prototype = d.fn, d.overrideDefaults = function(e) {
			function t(r, i) {
				return n = n || e(), 0 === arguments.length && (r = n.element), i || (i = n.context), new t.fn.init(r, i)
			}
			var n;
			return d.extend(t, this), t
		}, i.ie && i.ie < 8 && (C(B, "get", {
			maxlength: function(e) {
				var t = e.maxLength;
				return 2147483647 === t ? k : t
			},
			size: function(e) {
				var t = e.size;
				return 20 === t ? k : t
			},
			"class": function(e) {
				return e.className
			},
			style: function(e) {
				var t = e.style.cssText;
				return 0 === t.length ? k : t
			}
		}), C(B, "set", {
			"class": function(e, t) {
				e.className = t
			},
			style: function(e, t) {
				e.style.cssText = t
			}
		})), i.ie && i.ie < 9 && (A["float"] = "styleFloat", C(D, "set", {
			opacity: function(e, t) {
				var n = e.style;
				null === t || "" === t ? n.removeAttribute("filter") : (n.zoom = 1, n.filter = "alpha(opacity=" + 100 * t + ")")
			}
		})), d.attrHooks = B, d.cssHooks = D, d
	}), r(p, [], function() {
		return function(e, t) {
			function n(e, t, n, r) {
				function i(e) {
					return e = parseInt(e, 10).toString(16), e.length > 1 ? e : "0" + e
				}
				return "#" + i(t) + i(n) + i(r)
			}
			var r = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
				i = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
				o = /\s*([^:]+):\s*([^;]+);?/g,
				a = /\s+$/,
				s, l, c = {},
				u, d, f, p = "\ufeff";
			for (e = e || {}, t && (d = t.getValidStyles(), f = t.getInvalidStyles()), u = ("\\\" \\' \\; \\: ; : " + p).split(" "), l = 0; l < u.length; l++) c[u[l]] = p + l, c[p + l] = u[l];
			return {
				toHex: function(e) {
					return e.replace(r, n)
				},
				parse: function(t) {
					function s(e, t, n) {
						var r, i, o, a;
						if (r = m[e + "-top" + t], r && (i = m[e + "-right" + t], i && (o = m[e + "-bottom" + t], o && (a = m[e + "-left" + t])))) {
							var s = [r, i, o, a];
							for (l = s.length - 1; l-- && s[l] === s[l + 1];);
							l > -1 && n || (m[e + t] = -1 == l ? s[0] : s.join(" "), delete m[e + "-top" + t], delete m[e + "-right" + t], delete m[e + "-bottom" + t], delete m[e + "-left" + t])
						}
					}

					function u(e) {
						var t = m[e],
							n;
						if (t) {
							for (t = t.split(" "), n = t.length; n--;)
								if (t[n] !== t[0]) return !1;
							return m[e] = t[0], !0
						}
					}

					function d(e, t, n, r) {
						u(t) && u(n) && u(r) && (m[e] = m[t] + " " + m[n] + " " + m[r], delete m[t], delete m[n], delete m[r])
					}

					function f(e) {
						return b = !0, c[e]
					}

					function p(e, t) {
						return b && (e = e.replace(/\uFEFF[0-9]/g, function(e) {
							return c[e]
						})), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e
					}

					function h(t, n, r, i, o, a) {
						if (o = o || a) return o = p(o), "'" + o.replace(/\'/g, "\\'") + "'";
						if (n = p(n || r || i), !e.allow_script_urls) {
							var s = n.replace(/[\s\r\n]+/, "");
							if (/(java|vb)script:/i.test(s)) return "";
							if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(s)) return ""
						}
						return C && (n = C.call(x, n, "style")), "url('" + n.replace(/\'/g, "\\'") + "')"
					}
					var m = {},
						g, v, y, b, C = e.url_converter,
						x = e.url_converter_scope || this;
					if (t) {
						for (t = t.replace(/[\u0000-\u001F]/g, ""), t = t.replace(/\\[\"\';:\uFEFF]/g, f).replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) {
							return e.replace(/[;:]/g, f)
						}); g = o.exec(t);) {
							if (v = g[1].replace(a, "").toLowerCase(), y = g[2].replace(a, ""), y = y.replace(/\\[0-9a-f]+/g, function(e) {
								return String.fromCharCode(parseInt(e.substr(1), 16))
							}), v && y.length > 0) {
								if (!e.allow_script_urls && ("behavior" == v || /expression\s*\(|\/\*|\*\//.test(y))) continue;
								"font-weight" === v && "700" === y ? y = "bold" : ("color" === v || "background-color" === v) && (y = y.toLowerCase()), y = y.replace(r, n), y = y.replace(i, h), m[v] = b ? p(y, !0) : y
							}
							o.lastIndex = g.index + g[0].length
						}
						s("border", "", !0), s("border", "-width"), s("border", "-color"), s("border", "-style"), s("padding", ""), s("margin", ""), d("border", "border-width", "border-style", "border-color"), "medium none" === m.border && delete m.border, "none" === m["border-image"] && delete m["border-image"]
					}
					return m
				},
				serialize: function(e, t) {
					function n(t) {
						var n, r, o, a;
						if (n = d[t])
							for (r = 0, o = n.length; o > r; r++) t = n[r], a = e[t], a !== s && a.length > 0 && (i += (i.length > 0 ? " " : "") + t + ": " + a + ";")
					}

					function r(e, t) {
						var n;
						return n = f["*"], n && n[e] ? !1 : (n = f[t], n && n[e] ? !1 : !0)
					}
					var i = "",
						o, a;
					if (t && d) n("*"), n(t);
					else
						for (o in e) a = e[o], a !== s && a.length > 0 && (!f || r(o, t)) && (i += (i.length > 0 ? " " : "") + o + ": " + a + ";");
					return i
				}
			}
		}
	}), r(h, [], function() {
		return function(e, t) {
			function n(e, n, r, i) {
				var o, a;
				if (e) {
					if (!i && e[n]) return e[n];
					if (e != t) {
						if (o = e[r]) return o;
						for (a = e.parentNode; a && a != t; a = a.parentNode)
							if (o = a[r]) return o
					}
				}
			}
			var r = e;
			this.current = function() {
				return r
			}, this.next = function(e) {
				return r = n(r, "firstChild", "nextSibling", e)
			}, this.prev = function(e) {
				return r = n(r, "lastChild", "previousSibling", e)
			}
		}
	}), r(m, [u], function(e) {
		function t(n) {
			function r() {
				return M.createDocumentFragment()
			}

			function i(e, t) {
				_(F, e, t)
			}

			function o(e, t) {
				_(z, e, t)
			}

			function a(e) {
				i(e.parentNode, j(e))
			}

			function s(e) {
				i(e.parentNode, j(e) + 1)
			}

			function l(e) {
				o(e.parentNode, j(e))
			}

			function c(e) {
				o(e.parentNode, j(e) + 1)
			}

			function u(e) {
				e ? (H[U] = H[V], H[$] = H[W]) : (H[V] = H[U], H[W] = H[$]), H.collapsed = F
			}

			function d(e) {
				a(e), c(e)
			}

			function f(e) {
				i(e, 0), o(e, 1 === e.nodeType ? e.childNodes.length : e.nodeValue.length)
			}

			function p(e, t) {
				var n = H[V],
					r = H[W],
					i = H[U],
					o = H[$],
					a = t.startContainer,
					s = t.startOffset,
					l = t.endContainer,
					c = t.endOffset;
				return 0 === e ? w(n, r, a, s) : 1 === e ? w(i, o, a, s) : 2 === e ? w(i, o, l, c) : 3 === e ? w(n, r, l, c) : void 0
			}

			function h() {
				E(I)
			}

			function m() {
				return E(P)
			}

			function g() {
				return E(O)
			}

			function v(e) {
				var t = this[V],
					r = this[W],
					i, o;
				3 !== t.nodeType && 4 !== t.nodeType || !t.nodeValue ? (t.childNodes.length > 0 && (o = t.childNodes[r]), o ? t.insertBefore(e, o) : 3 == t.nodeType ? n.insertAfter(e, t) : t.appendChild(e)) : r ? r >= t.nodeValue.length ? n.insertAfter(e, t) : (i = t.splitText(r), t.parentNode.insertBefore(e, i)) : t.parentNode.insertBefore(e, t)
			}

			function y(e) {
				var t = H.extractContents();
				H.insertNode(e), e.appendChild(t), H.selectNode(e)
			}

			function b() {
				return q(new t(n), {
					startContainer: H[V],
					startOffset: H[W],
					endContainer: H[U],
					endOffset: H[$],
					collapsed: H.collapsed,
					commonAncestorContainer: H.commonAncestorContainer
				})
			}

			function C(e, t) {
				var n;
				if (3 == e.nodeType) return e;
				if (0 > t) return e;
				for (n = e.firstChild; n && t > 0;)--t, n = n.nextSibling;
				return n ? n : e
			}

			function x() {
				return H[V] == H[U] && H[W] == H[$]
			}

			function w(e, t, r, i) {
				var o, a, s, l, c, u;
				if (e == r) return t == i ? 0 : i > t ? -1 : 1;
				for (o = r; o && o.parentNode != e;) o = o.parentNode;
				if (o) {
					for (a = 0, s = e.firstChild; s != o && t > a;) a++, s = s.nextSibling;
					return a >= t ? -1 : 1
				}
				for (o = e; o && o.parentNode != r;) o = o.parentNode;
				if (o) {
					for (a = 0, s = r.firstChild; s != o && i > a;) a++, s = s.nextSibling;
					return i > a ? -1 : 1
				}
				for (l = n.findCommonAncestor(e, r), c = e; c && c.parentNode != l;) c = c.parentNode;
				for (c || (c = l), u = r; u && u.parentNode != l;) u = u.parentNode;
				if (u || (u = l), c == u) return 0;
				for (s = l.firstChild; s;) {
					if (s == c) return -1;
					if (s == u) return 1;
					s = s.nextSibling
				}
			}

			function _(e, t, r) {
				var i, o;
				for (e ? (H[V] = t, H[W] = r) : (H[U] = t, H[$] = r), i = H[U]; i.parentNode;) i = i.parentNode;
				for (o = H[V]; o.parentNode;) o = o.parentNode;
				o == i ? w(H[V], H[W], H[U], H[$]) > 0 && H.collapse(e) : H.collapse(e), H.collapsed = x(), H.commonAncestorContainer = n.findCommonAncestor(H[V], H[U])
			}

			function E(e) {
				var t, n = 0,
					r = 0,
					i, o, a, s, l, c;
				if (H[V] == H[U]) return N(e);
				for (t = H[U], i = t.parentNode; i; t = i, i = i.parentNode) {
					if (i == H[V]) return k(t, e);
					++n
				}
				for (t = H[V], i = t.parentNode; i; t = i, i = i.parentNode) {
					if (i == H[U]) return S(t, e);
					++r
				}
				for (o = r - n, a = H[V]; o > 0;) a = a.parentNode, o--;
				for (s = H[U]; 0 > o;) s = s.parentNode, o++;
				for (l = a.parentNode, c = s.parentNode; l != c; l = l.parentNode, c = c.parentNode) a = l, s = c;
				return T(a, s, e)
			}

			function N(e) {
				var t, n, i, o, a, s, l, c, u;
				if (e != I && (t = r()), H[W] == H[$]) return t;
				if (3 == H[V].nodeType) {
					if (n = H[V].nodeValue, i = n.substring(H[W], H[$]), e != O && (o = H[V], c = H[W], u = H[$] - H[W], 0 === c && u >= o.nodeValue.length - 1 ? o.parentNode.removeChild(o) : o.deleteData(c, u), H.collapse(F)), e == I) return;
					return i.length > 0 && t.appendChild(M.createTextNode(i)), t
				}
				for (o = C(H[V], H[W]), a = H[$] - H[W]; o && a > 0;) s = o.nextSibling, l = D(o, e), t && t.appendChild(l), --a, o = s;
				return e != O && H.collapse(F), t
			}

			function k(e, t) {
				var n, i, o, a, s, l;
				if (t != I && (n = r()), i = R(e, t), n && n.appendChild(i), o = j(e), a = o - H[W], 0 >= a) return t != O && (H.setEndBefore(e), H.collapse(z)), n;
				for (i = e.previousSibling; a > 0;) s = i.previousSibling, l = D(i, t), n && n.insertBefore(l, n.firstChild), --a, i = s;
				return t != O && (H.setEndBefore(e), H.collapse(z)), n
			}

			function S(e, t) {
				var n, i, o, a, s, l;
				for (t != I && (n = r()), o = A(e, t), n && n.appendChild(o), i = j(e), ++i, a = H[$] - i, o = e.nextSibling; o && a > 0;) s = o.nextSibling, l = D(o, t), n && n.appendChild(l), --a, o = s;
				return t != O && (H.setStartAfter(e), H.collapse(F)), n
			}

			function T(e, t, n) {
				var i, o, a, s, l, c, u;
				for (n != I && (o = r()), i = A(e, n), o && o.appendChild(i), a = j(e), s = j(t), ++a, l = s - a, c = e.nextSibling; l > 0;) u = c.nextSibling, i = D(c, n), o && o.appendChild(i), c = u, --l;
				return i = R(t, n), o && o.appendChild(i), n != O && (H.setStartAfter(e), H.collapse(F)), o
			}

			function R(e, t) {
				var n = C(H[U], H[$] - 1),
					r, i, o, a, s, l = n != H[U];
				if (n == e) return B(n, l, z, t);
				for (r = n.parentNode, i = B(r, z, z, t); r;) {
					for (; n;) o = n.previousSibling, a = B(n, l, z, t), t != I && i.insertBefore(a, i.firstChild), l = F, n = o;
					if (r == e) return i;
					n = r.previousSibling, r = r.parentNode, s = B(r, z, z, t), t != I && s.appendChild(i), i = s
				}
			}

			function A(e, t) {
				var n = C(H[V], H[W]),
					r = n != H[V],
					i, o, a, s, l;
				if (n == e) return B(n, r, F, t);
				for (i = n.parentNode, o = B(i, z, F, t); i;) {
					for (; n;) a = n.nextSibling, s = B(n, r, F, t), t != I && o.appendChild(s), r = F, n = a;
					if (i == e) return o;
					n = i.nextSibling, i = i.parentNode, l = B(i, z, F, t), t != I && l.appendChild(o), o = l
				}
			}

			function B(e, t, r, i) {
				var o, a, s, l, c;
				if (t) return D(e, i);
				if (3 == e.nodeType) {
					if (o = e.nodeValue, r ? (l = H[W], a = o.substring(l), s = o.substring(0, l)) : (l = H[$], a = o.substring(0, l), s = o.substring(l)), i != O && (e.nodeValue = s), i == I) return;
					return c = n.clone(e, z), c.nodeValue = a, c
				}
				if (i != I) return n.clone(e, z)
			}

			function D(e, t) {
				return t != I ? t == O ? n.clone(e, F) : e : void e.parentNode.removeChild(e)
			}

			function L() {
				return n.create("body", null, g()).outerText
			}
			var H = this,
				M = n.doc,
				P = 0,
				O = 1,
				I = 2,
				F = !0,
				z = !1,
				W = "startOffset",
				V = "startContainer",
				U = "endContainer",
				$ = "endOffset",
				q = e.extend,
				j = n.nodeIndex;
			return q(H, {
				startContainer: M,
				startOffset: 0,
				endContainer: M,
				endOffset: 0,
				collapsed: F,
				commonAncestorContainer: M,
				START_TO_START: 0,
				START_TO_END: 1,
				END_TO_END: 2,
				END_TO_START: 3,
				setStart: i,
				setEnd: o,
				setStartBefore: a,
				setStartAfter: s,
				setEndBefore: l,
				setEndAfter: c,
				collapse: u,
				selectNode: d,
				selectNodeContents: f,
				compareBoundaryPoints: p,
				deleteContents: h,
				extractContents: m,
				cloneContents: g,
				insertNode: v,
				surroundContents: y,
				cloneRange: b,
				toStringIE: L
			}), H
		}
		return t.prototype.toString = function() {
			return this.toStringIE()
		}, t
	}), r(g, [u], function(e) {
		function t(e) {
			var t;
			return t = document.createElement("div"), t.innerHTML = e, t.textContent || t.innerText || e
		}

		function n(e, t) {
			var n, r, i, a = {};
			if (e) {
				for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) r = String.fromCharCode(parseInt(e[n], t)), o[r] || (i = "&" + e[n + 1] + ";", a[r] = i, a[i] = r);
				return a
			}
		}
		var r = e.makeMap,
			i, o, a, s = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
			l = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
			c = /[<>&\"\']/g,
			u = /&(#x|#)?([\w]+);/g,
			d = {
				128: "\u20ac",
				130: "\u201a",
				131: "\u0192",
				132: "\u201e",
				133: "\u2026",
				134: "\u2020",
				135: "\u2021",
				136: "\u02c6",
				137: "\u2030",
				138: "\u0160",
				139: "\u2039",
				140: "\u0152",
				142: "\u017d",
				145: "\u2018",
				146: "\u2019",
				147: "\u201c",
				148: "\u201d",
				149: "\u2022",
				150: "\u2013",
				151: "\u2014",
				152: "\u02dc",
				153: "\u2122",
				154: "\u0161",
				155: "\u203a",
				156: "\u0153",
				158: "\u017e",
				159: "\u0178"
			};
		o = {
			'"': "&quot;",
			"'": "&#39;",
			"<": "&lt;",
			">": "&gt;",
			"&": "&amp;",
			"`": "&#96;"
		}, a = {
			"&lt;": "<",
			"&gt;": ">",
			"&amp;": "&",
			"&quot;": '"',
			"&apos;": "'"
		}, i = n("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32);
		var f = {
			encodeRaw: function(e, t) {
				return e.replace(t ? s : l, function(e) {
					return o[e] || e
				})
			},
			encodeAllRaw: function(e) {
				return ("" + e).replace(c, function(e) {
					return o[e] || e
				})
			},
			encodeNumeric: function(e, t) {
				return e.replace(t ? s : l, function(e) {
					return e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : o[e] || "&#" + e.charCodeAt(0) + ";"
				})
			},
			encodeNamed: function(e, t, n) {
				return n = n || i, e.replace(t ? s : l, function(e) {
					return o[e] || n[e] || e
				})
			},
			getEncodeFunc: function(e, t) {
				function a(e, n) {
					return e.replace(n ? s : l, function(e) {
						return o[e] || t[e] || "&#" + e.charCodeAt(0) + ";" || e
					})
				}

				function c(e, n) {
					return f.encodeNamed(e, n, t)
				}
				return t = n(t) || i, e = r(e.replace(/\+/g, ",")), e.named && e.numeric ? a : e.named ? t ? c : f.encodeNamed : e.numeric ? f.encodeNumeric : f.encodeRaw
			},
			decode: function(e) {
				return e.replace(u, function(e, n, r) {
					return n ? (r = parseInt(r, 2 === n.length ? 16 : 10), r > 65535 ? (r -= 65536, String.fromCharCode(55296 + (r >> 10), 56320 + (1023 & r))) : d[r] || String.fromCharCode(r)) : a[e] || i[e] || t(e)
				})
			}
		};
		return f
	}), r(v, [], function() {
		return function(e, t) {
			function n(t) {
				e.getElementsByTagName("head")[0].appendChild(t)
			}

			function r(t, r, s) {
				function l() {
					for (var e = v.passed, t = e.length; t--;) e[t]();
					v.status = 2, v.passed = [], v.failed = []
				}

				function c() {
					for (var e = v.failed, t = e.length; t--;) e[t]();
					v.status = 3, v.passed = [], v.failed = []
				}

				function u() {
					var e = navigator.userAgent.match(/WebKit\/(\d*)/);
					return !!(e && e[1] < 536)
				}

				function d(e, t) {
					e() || ((new Date).getTime() - g < a ? window.setTimeout(t, 0) : c())
				}

				function f() {
					d(function() {
						for (var t = e.styleSheets, n, r = t.length, i; r--;)
							if (n = t[r], i = n.ownerNode ? n.ownerNode : n.owningElement, i && i.id === h.id) return l(), !0
					}, f)
				}

				function p() {
					d(function() {
						try {
							var e = m.sheet.cssRules;
							return l(), !!e
						} catch (t) {}
					}, p)
				}
				var h, m, g, v;
				if (o[t] ? v = o[t] : (v = {
					passed: [],
					failed: []
				}, o[t] = v), r && v.passed.push(r), s && v.failed.push(s), 1 != v.status) {
					if (2 == v.status) return void l();
					if (3 == v.status) return void c();
					if (v.status = 1, h = e.createElement("link"), h.rel = "stylesheet", h.type = "text/css", h.id = "u" + i++, h.async = !1, h.defer = !1, g = (new Date).getTime(), "onload" in h && !u()) h.onload = f, h.onerror = c;
					else {
						if (navigator.userAgent.indexOf("Firefox") > 0) return m = e.createElement("style"), m.textContent = '@import "' + t + '"', p(), void n(m);
						f()
					}
					n(h), h.href = t
				}
			}
			var i = 0,
				o = {},
				a;
			t = t || {}, a = t.maxLoadTime || 5e3, this.load = r
		}
	}), r(y, [c, f, p, l, h, m, g, d, u, v], function(e, n, r, i, o, a, s, l, c, u) {
		function d(e, t) {
			var n = {},
				r = t.keep_values,
				i;
			return i = {
				set: function(n, r, i) {
					t.url_converter && (r = t.url_converter.call(t.url_converter_scope || e, r, i, n[0])), n.attr("data-mce-" + i, r).attr(i, r)
				},
				get: function(e, t) {
					return e.attr("data-mce-" + t) || e.attr(t)
				}
			}, n = {
				style: {
					set: function(e, t) {
						return null !== t && "object" == typeof t ? void e.css(t) : (r && e.attr("data-mce-style", t), void e.attr("style", t))
					},
					get: function(t) {
						var n = t.attr("data-mce-style") || t.attr("style");
						return n = e.serializeStyle(e.parseStyle(n), t[0].nodeName)
					}
				}
			}, r && (n.href = n.src = i), n
		}

		function f(e, t) {
			var o = this,
				a;
			o.doc = e, o.win = window, o.files = {}, o.counter = 0, o.stdMode = !v || e.documentMode >= 8, o.boxModel = !v || "CSS1Compat" == e.compatMode || o.stdMode, o.styleSheetLoader = new u(e), o.boundEvents = [], o.settings = t = t || {}, o.schema = t.schema, o.styles = new r({
				url_converter: t.url_converter,
				url_converter_scope: t.url_converter_scope
			}, t.schema), o.fixDoc(e), o.events = t.ownEvents ? new i(t.proxy) : i.Event, o.attrHooks = d(o, t), a = t.schema ? t.schema.getBlockElements() : {}, o.$ = n.overrideDefaults(function() {
				return {
					context: e,
					element: o.getRoot()
				}
			}), o.isBlock = function(e) {
				if (!e) return !1;
				var t = e.nodeType;
				return t ? !(1 !== t || !a[e.nodeName]) : !!a[e]
			}
		}
		var p = c.each,
			h = c.is,
			m = c.grep,
			g = c.trim,
			v = l.ie,
			y = /^([a-z0-9],?)+$/i,
			b = /^[ \t\r\n]*$/;
		return f.prototype = {
			$$: function(e) {
				return "string" == typeof e && (e = this.get(e)), this.$(e)
			},
			root: null,
			fixDoc: function(e) {
				var t = this.settings,
					n;
				if (v && t.schema) {
					"abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(/\w+/g, function(t) {
						e.createElement(t)
					});
					for (n in t.schema.getCustomElements()) e.createElement(n)
				}
			},
			clone: function(e, t) {
				var n = this,
					r, i;
				return !v || 1 !== e.nodeType || t ? e.cloneNode(t) : (i = n.doc, t ? r.firstChild : (r = i.createElement(e.nodeName), p(n.getAttribs(e), function(t) {
					n.setAttrib(r, t.nodeName, n.getAttrib(e, t.nodeName))
				}), r))
			},
			getRoot: function() {
				var e = this;
				return e.settings.root_element || e.doc.body
			},
			getViewPort: function(e) {
				var t, n;
				return e = e ? e : this.win, t = e.document, n = this.boxModel ? t.documentElement : t.body, {
					x: e.pageXOffset || n.scrollLeft,
					y: e.pageYOffset || n.scrollTop,
					w: e.innerWidth || n.clientWidth,
					h: e.innerHeight || n.clientHeight
				}
			},
			getRect: function(e) {
				var t = this,
					n, r;
				return e = t.get(e), n = t.getPos(e), r = t.getSize(e), {
					x: n.x,
					y: n.y,
					w: r.w,
					h: r.h
				}
			},
			getSize: function(e) {
				var t = this,
					n, r;
				return e = t.get(e), n = t.getStyle(e, "width"), r = t.getStyle(e, "height"), -1 === n.indexOf("px") && (n = 0), -1 === r.indexOf("px") && (r = 0), {
					w: parseInt(n, 10) || e.offsetWidth || e.clientWidth,
					h: parseInt(r, 10) || e.offsetHeight || e.clientHeight
				}
			},
			getParent: function(e, t, n) {
				return this.getParents(e, t, n, !1)
			},
			getParents: function(e, n, r, i) {
				var o = this,
					a, s = [];
				for (e = o.get(e), i = i === t, r = r || ("BODY" != o.getRoot().nodeName ? o.getRoot().parentNode : null), h(n, "string") && (a = n, n = "*" === n ? function(e) {
					return 1 == e.nodeType
				} : function(e) {
					return o.is(e, a)
				}); e && e != r && e.nodeType && 9 !== e.nodeType;) {
					if (!n || n(e)) {
						if (!i) return e;
						s.push(e)
					}
					e = e.parentNode
				}
				return i ? s : null
			},
			get: function(e) {
				var t;
				return e && this.doc && "string" == typeof e && (t = e, e = this.doc.getElementById(e), e && e.id !== t) ? this.doc.getElementsByName(t)[1] : e
			},
			getNext: function(e, t) {
				return this._findSib(e, t, "nextSibling")
			},
			getPrev: function(e, t) {
				return this._findSib(e, t, "previousSibling")
			},
			select: function(t, n) {
				var r = this;
				return e(t, r.get(n) || r.settings.root_element || r.doc, [])
			},
			is: function(n, r) {
				var i;
				if (n.length === t) {
					if ("*" === r) return 1 == n.nodeType;
					if (y.test(r)) {
						for (r = r.toLowerCase().split(/,/), n = n.nodeName.toLowerCase(), i = r.length - 1; i >= 0; i--)
							if (r[i] == n) return !0;
						return !1
					}
				}
				if (n.nodeType && 1 != n.nodeType) return !1;
				var o = n.nodeType ? [n] : n;
				return e(r, o[0].ownerDocument || o[0], null, o).length > 0
			},
			add: function(e, t, n, r, i) {
				var o = this;
				return this.run(e, function(e) {
					var a;
					return a = h(t, "string") ? o.doc.createElement(t) : t, o.setAttribs(a, n), r && (r.nodeType ? a.appendChild(r) : o.setHTML(a, r)), i ? a : e.appendChild(a)
				})
			},
			create: function(e, t, n) {
				return this.add(this.doc.createElement(e), e, t, n, 1)
			},
			createHTML: function(e, t, n) {
				var r = "",
					i;
				r += "<" + e;
				for (i in t) t.hasOwnProperty(i) && null !== t[i] && "undefined" != typeof t[i] && (r += " " + i + '="' + this.encode(t[i]) + '"');
				return "undefined" != typeof n ? r + ">" + n + "</" + e + ">" : r + " />"
			},
			createFragment: function(e) {
				var t, n, r = this.doc,
					i;
				for (i = r.createElement("div"), t = r.createDocumentFragment(), e && (i.innerHTML = e); n = i.firstChild;) t.appendChild(n);
				return t
			},
			remove: function(e, t) {
				return e = this.$$(e), t ? e.each(function() {
					for (var e; e = this.firstChild;) 3 == e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this)
				}).remove() : e.remove(), e.length > 1 ? e.toArray() : e[0]
			},
			setStyle: function(e, t, n) {
				e = this.$$(e).css(t, n), this.settings.update_styles && e.attr("data-mce-style", null)
			},
			getStyle: function(e, n, r) {
				return e = this.$$(e), r ? e.css(n) : (n = n.replace(/-(\D)/g, function(e, t) {
					return t.toUpperCase()
				}), "float" == n && (n = v ? "styleFloat" : "cssFloat"), e[0] && e[0].style ? e[0].style[n] : t)
			},
			setStyles: function(e, t) {
				e = this.$$(e).css(t), this.settings.update_styles && e.attr("data-mce-style", null)
			},
			removeAllAttribs: function(e) {
				return this.run(e, function(e) {
					var t, n = e.attributes;
					for (t = n.length - 1; t >= 0; t--) e.removeAttributeNode(n.item(t))
				})
			},
			setAttrib: function(e, t, n) {
				var r = this,
					i, o, a = r.settings;
				"" === n && (n = null), e = r.$$(e), i = e.attr(t), e.length && (o = r.attrHooks[t], o && o.set ? o.set(e, n, t) : e.attr(t, n), i != n && a.onSetAttrib && a.onSetAttrib({
					attrElm: e,
					attrName: t,
					attrValue: n
				}))
			},
			setAttribs: function(e, t) {
				var n = this;
				n.$$(e).each(function(e, r) {
					p(t, function(e, t) {
						n.setAttrib(r, t, e)
					})
				})
			},
			getAttrib: function(e, t, n) {
				var r = this,
					i, o;
				return e = r.$$(e), e.length && (i = r.attrHooks[t], o = i && i.get ? i.get(e, t) : e.attr(t)), "undefined" == typeof o && (o = n || ""), o
			},
			getPos: function(e, t) {
				var r = this,
					i = 0,
					o = 0,
					a, s = r.doc,
					l = s.body,
					c;
				if (e = r.get(e), t = t || l, e) {
					if (t === l && e.getBoundingClientRect && "static" === n(l).css("position")) return c = e.getBoundingClientRect(), t = r.boxModel ? s.documentElement : l, i = c.left + (s.documentElement.scrollLeft || l.scrollLeft) - t.clientLeft, o = c.top + (s.documentElement.scrollTop || l.scrollTop) - t.clientTop, {
						x: i,
						y: o
					};
					for (a = e; a && a != t && a.nodeType;) i += a.offsetLeft || 0, o += a.offsetTop || 0, a = a.offsetParent;
					for (a = e.parentNode; a && a != t && a.nodeType;) i -= a.scrollLeft || 0, o -= a.scrollTop || 0, a = a.parentNode
				}
				return {
					x: i,
					y: o
				}
			},
			parseStyle: function(e) {
				return this.styles.parse(e)
			},
			serializeStyle: function(e, t) {
				return this.styles.serialize(e, t)
			},
			addStyle: function(e) {
				var t = this,
					n = t.doc,
					r, i;
				if (t !== f.DOM && n === document) {
					var o = f.DOM.addedStyles;
					if (o = o || [], o[e]) return;
					o[e] = !0, f.DOM.addedStyles = o
				}
				i = n.getElementById("mceDefaultStyles"), i || (i = n.createElement("style"), i.id = "mceDefaultStyles", i.type = "text/css", r = n.getElementsByTagName("head")[0], r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i)), i.styleSheet ? i.styleSheet.cssText += e : i.appendChild(n.createTextNode(e))
			},
			loadCSS: function(e) {
				var t = this,
					n = t.doc,
					r;
				return t !== f.DOM && n === document ? void f.DOM.loadCSS(e) : (e || (e = ""), r = n.getElementsByTagName("head")[0], void p(e.split(","), function(e) {
					var i;
					t.files[e] || (t.files[e] = !0, i = t.create("link", {
						rel: "stylesheet",
						href: e
					}), v && n.documentMode && n.recalc && (i.onload = function() {
						n.recalc && n.recalc(), i.onload = null
					}), r.appendChild(i))
				}))
			},
			addClass: function(e, t) {
				this.$$(e).addClass(t)
			},
			removeClass: function(e, t) {
				this.toggleClass(e, t, !1)
			},
			hasClass: function(e, t) {
				return this.$$(e).hasClass(t)
			},
			toggleClass: function(e, t, r) {
				this.$$(e).toggleClass(t, r).each(function() {
					"" === this.className && n(this).attr("class", null)
				})
			},
			show: function(e) {
				this.$$(e).show()
			},
			hide: function(e) {
				this.$$(e).hide()
			},
			isHidden: function(e) {
				return "none" == this.$$(e).css("display")
			},
			uniqueId: function(e) {
				return (e ? e : "mce_") + this.counter++
			},
			setHTML: function(e, t) {
				e = this.$$(e), v ? e.each(function(e, r) {
					if (r.canHaveHTML !== !1) {
						for (; r.firstChild;) r.removeChild(r.firstChild);
						try {
							r.innerHTML = "<br>" + t, r.removeChild(r.firstChild)
						} catch (i) {
							n("<div>").html("<br>" + t).contents().slice(1).appendTo(r)
						}
						return t
					}
				}) : e.html(t)
			},
			getOuterHTML: function(e) {
				return e = this.get(e), 1 == e.nodeType ? e.outerHTML : n("<div>").append(n(e).clone()).html()
			},
			setOuterHTML: function(e, t) {
				var r = this;
				r.$$(e).each(function() {
					try {
						this.outerHTML = t
					} catch (e) {
						r.remove(n(this).html(t), !0)
					}
				})
			},
			decode: s.decode,
			encode: s.encodeAllRaw,
			insertAfter: function(e, t) {
				return t = this.get(t), this.run(e, function(e) {
					var n, r;
					return n = t.parentNode, r = t.nextSibling, r ? n.insertBefore(e, r) : n.appendChild(e), e
				})
			},
			replace: function(e, t, n) {
				var r = this;
				return r.run(t, function(t) {
					return h(t, "array") && (e = e.cloneNode(!0)), n && p(m(t.childNodes), function(t) {
						e.appendChild(t)
					}), t.parentNode.replaceChild(e, t)
				})
			},
			rename: function(e, t) {
				var n = this,
					r;
				return e.nodeName != t.toUpperCase() && (r = n.create(t), p(n.getAttribs(e), function(t) {
					n.setAttrib(r, t.nodeName, n.getAttrib(e, t.nodeName))
				}), n.replace(r, e, 1)), r || e
			},
			findCommonAncestor: function(e, t) {
				for (var n = e, r; n;) {
					for (r = t; r && n != r;) r = r.parentNode;
					if (n == r) break;
					n = n.parentNode
				}
				return !n && e.ownerDocument ? e.ownerDocument.documentElement : n
			},
			toHex: function(e) {
				return this.styles.toHex(c.trim(e))
			},
			run: function(e, t, n) {
				var r = this,
					i;
				return "string" == typeof e && (e = r.get(e)), e ? (n = n || this, e.nodeType || !e.length && 0 !== e.length ? t.call(n, e) : (i = [], p(e, function(e, o) {
					e && ("string" == typeof e && (e = r.get(e)), i.push(t.call(n, e, o)))
				}), i)) : !1
			},
			getAttribs: function(e) {
				var t;
				if (e = this.get(e), !e) return [];
				if (v) {
					if (t = [], "OBJECT" == e.nodeName) return e.attributes;
					"OPTION" === e.nodeName && this.getAttrib(e, "selected") && t.push({
						specified: 1,
						nodeName: "selected"
					});
					var n = /<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi;
					return e.cloneNode(!1).outerHTML.replace(n, "").replace(/[\w:\-]+/gi, function(e) {
						t.push({
							specified: 1,
							nodeName: e
						})
					}), t
				}
				return e.attributes
			},
			isEmpty: function(e, t) {
				var n = this,
					r, i, a, s, l, c = 0;
				if (e = e.firstChild) {
					s = new o(e, e.parentNode), t = t || (n.schema ? n.schema.getNonEmptyElements() : null);
					do {
						if (a = e.nodeType, 1 === a) {
							if (e.getAttribute("data-mce-bogus")) continue;
							if (l = e.nodeName.toLowerCase(), t && t[l]) {
								if ("br" === l) {
									c++;
									continue
								}
								return !1
							}
							for (i = n.getAttribs(e), r = i.length; r--;)
								if (l = i[r].nodeName, "name" === l || "data-mce-bookmark" === l) return !1
						}
						if (8 == a) return !1;
						if (3 === a && !b.test(e.nodeValue)) return !1
					} while (e = s.next())
				}
				return 1 >= c
			},
			createRng: function() {
				var e = this.doc;
				return e.createRange ? e.createRange() : new a(this)
			},
			nodeIndex: function(e, t) {
				var n = 0,
					r, i;
				if (e)
					for (r = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) i = e.nodeType, (!t || 3 != i || i != r && e.nodeValue.length) && (n++, r = i);
				return n
			},
			split: function(e, t, n) {
				function r(e) {
					function t(e) {
						var t = e.previousSibling && "SPAN" == e.previousSibling.nodeName,
							n = e.nextSibling && "SPAN" == e.nextSibling.nodeName;
						return t && n
					}
					var n, o = e.childNodes,
						a = e.nodeType;
					if (1 != a || "bookmark" != e.getAttribute("data-mce-type")) {
						for (n = o.length - 1; n >= 0; n--) r(o[n]);
						if (9 != a) {
							if (3 == a && e.nodeValue.length > 0) {
								var s = g(e.nodeValue).length;
								if (!i.isBlock(e.parentNode) || s > 0 || 0 === s && t(e)) return
							} else if (1 == a && (o = e.childNodes, 1 == o.length && o[0] && 1 == o[0].nodeType && "bookmark" == o[0].getAttribute("data-mce-type") && e.parentNode.insertBefore(o[0], e), o.length || /^(br|hr|input|img)$/i.test(e.nodeName))) return;
							i.remove(e)
						}
						return e
					}
				}
				var i = this,
					o = i.createRng(),
					a, s, l;
				return e && t ? (o.setStart(e.parentNode, i.nodeIndex(e)), o.setEnd(t.parentNode, i.nodeIndex(t)), a = o.extractContents(), o = i.createRng(), o.setStart(t.parentNode, i.nodeIndex(t) + 1), o.setEnd(e.parentNode, i.nodeIndex(e) + 1), s = o.extractContents(), l = e.parentNode, l.insertBefore(r(a), e), n ? l.replaceChild(n, t) : l.insertBefore(t, e), l.insertBefore(r(s), e), i.remove(e), n || t) : void 0
			},
			bind: function(e, t, n, r) {
				var i = this;
				if (c.isArray(e)) {
					for (var o = e.length; o--;) e[o] = i.bind(e[o], t, n, r);
					return e
				}
				return !i.settings.collect || e !== i.doc && e !== i.win || i.boundEvents.push([e, t, n, r]), i.events.bind(e, t, n, r || i)
			},
			unbind: function(e, t, n) {
				var r = this,
					i;
				if (c.isArray(e)) {
					for (i = e.length; i--;) e[i] = r.unbind(e[i], t, n);
					return e
				}
				if (r.boundEvents && (e === r.doc || e === r.win))
					for (i = r.boundEvents.length; i--;) {
						var o = r.boundEvents[i];
						e != o[0] || t && t != o[1] || n && n != o[2] || this.events.unbind(o[0], o[1], o[2])
					}
				return this.events.unbind(e, t, n)
			},
			fire: function(e, t, n) {
				return this.events.fire(e, t, n)
			},
			getContentEditable: function(e) {
				var t;
				return e && 1 == e.nodeType ? (t = e.getAttribute("data-mce-contenteditable"), t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null) : null
			},
			getContentEditableParent: function(e) {
				for (var t = this.getRoot(), n = null; e && e !== t && (n = this.getContentEditable(e), null === n); e = e.parentNode);
				return n
			},
			destroy: function() {
				var t = this;
				if (t.boundEvents) {
					for (var n = t.boundEvents.length; n--;) {
						var r = t.boundEvents[n];
						this.events.unbind(r[0], r[1], r[2])
					}
					t.boundEvents = null
				}
				e.setDocument && e.setDocument(), t.win = t.doc = t.root = t.events = t.frag = null
			},
			isChildOf: function(e, t) {
				for (; e;) {
					if (t === e) return !0;
					e = e.parentNode
				}
				return !1
			},
			dumpRng: function(e) {
				return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
			},
			_findSib: function(e, t, n) {
				var r = this,
					i = t;
				if (e)
					for ("string" == typeof i && (i = function(e) {
						return r.is(e, t)
					}), e = e[n]; e; e = e[n])
						if (i(e)) return e;
				return null
			}
		}, f.DOM = new f(document), f
	}), r(b, [y, u], function(e, t) {
		function n() {
			function e(e, t) {
				function n() {
					o.remove(s), a && (a.onreadystatechange = a.onload = a = null), t()
				}

				function i() {
					"undefined" != typeof console && console.log && console.log("Failed to load: " + e)
				}
				var o = r,
					a, s;
				s = o.uniqueId(), a = document.createElement("script"), a.id = s, a.type = "text/javascript", a.src = e, "onreadystatechange" in a ? a.onreadystatechange = function() {
					/loaded|complete/.test(a.readyState) && n()
				} : a.onload = n, a.onerror = i, (document.getElementsByTagName("head")[0] || document.body).appendChild(a)
			}
			var t = 0,
				n = 1,
				a = 2,
				s = {},
				l = [],
				c = {},
				u = [],
				d = 0,
				f;
			this.isDone = function(e) {
				return s[e] == a
			}, this.markDone = function(e) {
				s[e] = a
			}, this.add = this.load = function(e, n, r) {
				var i = s[e];
				i == f && (l.push(e), s[e] = t), n && (c[e] || (c[e] = []), c[e].push({
					func: n,
					scope: r || this
				}))
			}, this.loadQueue = function(e, t) {
				this.loadScripts(l, e, t)
			}, this.loadScripts = function(t, r, l) {
				function p(e) {
					i(c[e], function(e) {
						e.func.call(e.scope)
					}), c[e] = f
				}
				var h;
				u.push({
					func: r,
					scope: l || this
				}), (h = function() {
					var r = o(t);
					t.length = 0, i(r, function(t) {
						return s[t] == a ? void p(t) : void(s[t] != n && (s[t] = n, d++, e(t, function() {
							s[t] = a, d--, p(t), h()
						})))
					}), d || (i(u, function(e) {
						e.func.call(e.scope)
					}), u.length = 0)
				})()
			}
		}
		var r = e.DOM,
			i = t.each,
			o = t.grep;
		return n.ScriptLoader = new n, n
	}), r(C, [b, u], function(e, n) {
		function r() {
			var e = this;
			e.items = [], e.urls = {}, e.lookup = {}
		}
		var i = n.each;
		return r.prototype = {
			get: function(e) {
				return this.lookup[e] ? this.lookup[e].instance : t
			},
			dependencies: function(e) {
				var t;
				return this.lookup[e] && (t = this.lookup[e].dependencies), t || []
			},
			requireLangPack: function(t, n) {
				var i = r.language;
				if (i && r.languageLoad !== !1) {
					if (n)
						if (n = "," + n + ",", -1 != n.indexOf("," + i.substr(0, 2) + ",")) i = i.substr(0, 2);
						else if (-1 == n.indexOf("," + i + ",")) return;
					e.ScriptLoader.add(this.urls[t] + "/langs/" + i + ".js")
				}
			},
			add: function(e, t, n) {
				return this.items.push(t), this.lookup[e] = {
					instance: t,
					dependencies: n
				}, t
			},
			createUrl: function(e, t) {
				return "object" == typeof t ? t : {
					prefix: e.prefix,
					resource: t,
					suffix: e.suffix
				}
			},
			addComponents: function(t, n) {
				var r = this.urls[t];
				i(n, function(t) {
					e.ScriptLoader.add(r + "/" + t)
				})
			},
			load: function(n, o, a, s) {
				function l() {
					var r = c.dependencies(n);
					i(r, function(e) {
						var n = c.createUrl(o, e);
						c.load(n.resource, n, t, t)
					}), a && a.call(s ? s : e)
				}
				var c = this,
					u = o;
				c.urls[n] || ("object" == typeof o && (u = o.prefix + o.resource + o.suffix), 0 !== u.indexOf("/") && -1 == u.indexOf("://") && (u = r.baseURL + "/" + u), c.urls[n] = u.substring(0, u.lastIndexOf("/")), c.lookup[n] ? l() : e.ScriptLoader.add(u, l, s))
			}
		}, r.PluginManager = new r, r.ThemeManager = new r, r
	}), r(x, [u, h], function(e, t) {
		function n(e, t) {
			var n = e.childNodes;
			return t--, t > n.length - 1 ? t = n.length - 1 : 0 > t && (t = 0), n[t] || e
		}

		function r(e) {
			this.walk = function(t, r) {
				function o(e) {
					var t;
					return t = e[0], 3 === t.nodeType && t === c && u >= t.nodeValue.length && e.splice(0, 1), t = e[e.length - 1], 0 === f && e.length > 0 && t === d && 3 === t.nodeType && e.splice(e.length - 1, 1), e
				}

				function a(e, t, n) {
					for (var r = []; e && e != n; e = e[t]) r.push(e);
					return r
				}

				function s(e, t) {
					do {
						if (e.parentNode == t) return e;
						e = e.parentNode
					} while (e)
				}

				function l(e, t, n) {
					var i = n ? "nextSibling" : "previousSibling";
					for (g = e, v = g.parentNode; g && g != t; g = v) v = g.parentNode, y = a(g == e ? g : g[i], i), y.length && (n || y.reverse(), r(o(y)))
				}
				var c = t.startContainer,
					u = t.startOffset,
					d = t.endContainer,
					f = t.endOffset,
					p, h, m, g, v, y, b;
				if (b = e.select("td.mce-item-selected,th.mce-item-selected"), b.length > 0) return void i(b, function(e) {
					r([e])
				});
				if (1 == c.nodeType && c.hasChildNodes() && (c = c.childNodes[u]), 1 == d.nodeType && d.hasChildNodes() && (d = n(d, f)), c == d) return r(o([c]));
				for (p = e.findCommonAncestor(c, d), g = c; g; g = g.parentNode) {
					if (g === d) return l(c, p, !0);
					if (g === p) break
				}
				for (g = d; g; g = g.parentNode) {
					if (g === c) return l(d, p);
					if (g === p) break
				}
				h = s(c, p) || c, m = s(d, p) || d, l(c, h, !0), y = a(h == c ? h : h.nextSibling, "nextSibling", m == d ? m.nextSibling : m), y.length && r(o(y)), l(d, m)
			}, this.split = function(e) {
				function t(e, t) {
					return e.splitText(t)
				}
				var n = e.startContainer,
					r = e.startOffset,
					i = e.endContainer,
					o = e.endOffset;
				return n == i && 3 == n.nodeType ? r > 0 && r < n.nodeValue.length && (i = t(n, r), n = i.previousSibling, o > r ? (o -= r, n = i = t(i, o).previousSibling, o = i.nodeValue.length, r = 0) : o = 0) : (3 == n.nodeType && r > 0 && r < n.nodeValue.length && (n = t(n, r), r = 0), 3 == i.nodeType && o > 0 && o < i.nodeValue.length && (i = t(i, o).previousSibling, o = i.nodeValue.length)), {
					startContainer: n,
					startOffset: r,
					endContainer: i,
					endOffset: o
				}
			}, this.normalize = function(n) {
				function r(r) {
					function a(n, r) {
						for (var i = new t(n, e.getParent(n.parentNode, e.isBlock) || f); n = i[r ? "prev" : "next"]();)
							if ("BR" === n.nodeName) return !0
					}

					function s(e, t) {
						return e.previousSibling && e.previousSibling.nodeName == t
					}

					function l(n, r) {
						var a, s, l;
						if (r = r || c, l = e.getParent(r.parentNode, e.isBlock) || f, n && "BR" == r.nodeName && g && e.isEmpty(l)) return c = r.parentNode, u = e.nodeIndex(r), void(i = !0);
						for (a = new t(r, l); p = a[n ? "prev" : "next"]();) {
							if ("false" === e.getContentEditableParent(p)) return;
							if (3 === p.nodeType && p.nodeValue.length > 0) return c = p, u = n ? p.nodeValue.length : 0, void(i = !0);
							if (e.isBlock(p) || h[p.nodeName.toLowerCase()]) return;
							s = p
						}
						o && s && (c = s, i = !0, u = 0)
					}
					var c, u, d, f = e.getRoot(),
						p, h, m, g;
					if (c = n[(r ? "start" : "end") + "Container"], u = n[(r ? "start" : "end") + "Offset"], g = 1 == c.nodeType && u === c.childNodes.length, h = e.schema.getNonEmptyElements(), m = r, 1 == c.nodeType && u > c.childNodes.length - 1 && (m = !1), 9 === c.nodeType && (c = e.getRoot(), u = 0), c === f) {
						if (m && (p = c.childNodes[u > 0 ? u - 1 : 0], p && (h[p.nodeName] || "TABLE" == p.nodeName))) return;
						if (c.hasChildNodes() && (u = Math.min(!m && u > 0 ? u - 1 : u, c.childNodes.length - 1), c = c.childNodes[u], u = 0, c.hasChildNodes() && !/TABLE/.test(c.nodeName))) {
							p = c, d = new t(c, f);
							do {
								if (3 === p.nodeType && p.nodeValue.length > 0) {
									u = m ? 0 : p.nodeValue.length, c = p, i = !0;
									break
								}
								if (h[p.nodeName.toLowerCase()]) {
									u = e.nodeIndex(p), c = p.parentNode, "IMG" != p.nodeName || m || u++, i = !0;
									break
								}
							} while (p = m ? d.next() : d.prev())
						}
					}
					o && (3 === c.nodeType && 0 === u && l(!0), 1 === c.nodeType && (p = c.childNodes[u], p || (p = c.childNodes[u - 1]), !p || "BR" !== p.nodeName || s(p, "A") || a(p) || a(p, !0) || l(!0, p))), m && !o && 3 === c.nodeType && u === c.nodeValue.length && l(!1), i && n["set" + (r ? "Start" : "End")](c, u)
				}
				var i, o;
				return o = n.collapsed, r(!0), o || r(), i && o && n.collapse(!0), i
			}
		}
		var i = e.each;
		return r.compareRanges = function(e, t) {
			if (e && t) {
				if (!e.item && !e.duplicate) return e.startContainer == t.startContainer && e.startOffset == t.startOffset;
				if (e.item && t.item && e.item(0) === t.item(0)) return !0;
				if (e.isEqual && t.isEqual && t.isEqual(e)) return !0
			}
			return !1
		}, r
	}), r(w, [x], function(e) {
		return function(t) {
			function n(e) {
				var n, r;
				if (r = t.$(e).parentsUntil(t.getBody()).add(e), r.length === i.length) {
					for (n = r.length; n >= 0 && r[n] === i[n]; n--);
					if (-1 === n) return i = r, !0
				}
				return i = r, !1
			}
			var r, i = [];
			"onselectionchange" in t.getDoc() || t.on("NodeChange Click MouseUp KeyUp Focus", function(n) {
				var i, o;
				i = t.selection.getRng(), o = {
					startContainer: i.startContainer,
					startOffset: i.startOffset,
					endContainer: i.endContainer,
					endOffset: i.endOffset
				}, "nodechange" != n.type && e.compareRanges(o, r) || t.fire("SelectionChange"), r = o
			}), t.on("contextmenu", function() {
				t.fire("SelectionChange")
			}), t.on("SelectionChange", function() {
				var e = t.selection.getStart(!0);
				t.selection.isCollapsed() || n(e) || !t.dom.isChildOf(e, t.getBody()) || t.nodeChanged({
					selectionChange: !0
				})
			}), t.on("MouseUp", function(e) {
				e.isDefaultPrevented() || setTimeout(function() {
					t.nodeChanged()
				}, 0)
			}), this.nodeChanged = function(e) {
				var n = t.selection,
					r, i, o;
				t.initialized && n && !t.settings.disable_nodechange && !t.settings.readonly && (o = t.getBody(), r = n.getStart() || o, r = r.ownerDocument != t.getDoc() ? t.getBody() : r, "IMG" == r.nodeName && n.isCollapsed() && (r = r.parentNode), i = [], t.dom.getParent(r, function(e) {
					return e === o ? !0 : void i.push(e)
				}), e = e || {}, e.element = r, e.parents = i, t.fire("NodeChange", e))
			}
		}
	}), r(_, [], function() {
		function e(e, t, n) {
			var r, i, o = n ? "lastChild" : "firstChild",
				a = n ? "prev" : "next";
			if (e[o]) return e[o];
			if (e !== t) {
				if (r = e[a]) return r;
				for (i = e.parent; i && i !== t; i = i.parent)
					if (r = i[a]) return r
			}
		}

		function t(e, t) {
			this.name = e, this.type = t, 1 === t && (this.attributes = [], this.attributes.map = {})
		}
		var n = /^[ \t\r\n]*$/,
			r = {
				"#text": 3,
				"#comment": 8,
				"#cdata": 4,
				"#pi": 7,
				"#doctype": 10,
				"#document-fragment": 11
			};
		return t.prototype = {
			replace: function(e) {
				var t = this;
				return e.parent && e.remove(), t.insert(e, t), t.remove(), t
			},
			attr: function(e, t) {
				var n = this,
					r, i, o;
				if ("string" != typeof e) {
					for (i in e) n.attr(i, e[i]);
					return n
				}
				if (r = n.attributes) {
					if (t !== o) {
						if (null === t) {
							if (e in r.map)
								for (delete r.map[e], i = r.length; i--;)
									if (r[i].name === e) return r = r.splice(i, 1), n;
							return n
						}
						if (e in r.map) {
							for (i = r.length; i--;)
								if (r[i].name === e) {
									r[i].value = t;
									break
								}
						} else r.push({
							name: e,
							value: t
						});
						return r.map[e] = t, n
					}
					return r.map[e]
				}
			},
			clone: function() {
				var e = this,
					n = new t(e.name, e.type),
					r, i, o, a, s;
				if (o = e.attributes) {
					for (s = [], s.map = {}, r = 0, i = o.length; i > r; r++) a = o[r], "id" !== a.name && (s[s.length] = {
						name: a.name,
						value: a.value
					}, s.map[a.name] = a.value);
					n.attributes = s
				}
				return n.value = e.value, n.shortEnded = e.shortEnded, n
			},
			wrap: function(e) {
				var t = this;
				return t.parent.insert(e, t), e.append(t), t
			},
			unwrap: function() {
				var e = this,
					t, n;
				for (t = e.firstChild; t;) n = t.next, e.insert(t, e, !0), t = n;
				e.remove()
			},
			remove: function() {
				var e = this,
					t = e.parent,
					n = e.next,
					r = e.prev;
				return t && (t.firstChild === e ? (t.firstChild = n, n && (n.prev = null)) : r.next = n, t.lastChild === e ? (t.lastChild = r, r && (r.next = null)) : n.prev = r, e.parent = e.next = e.prev = null), e
			},
			append: function(e) {
				var t = this,
					n;
				return e.parent && e.remove(), n = t.lastChild, n ? (n.next = e, e.prev = n, t.lastChild = e) : t.lastChild = t.firstChild = e, e.parent = t, e
			},
			insert: function(e, t, n) {
				var r;
				return e.parent && e.remove(), r = t.parent || this, n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, e.next = t, t.prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, e.prev = t, t.next = e), e.parent = r, e
			},
			getAll: function(t) {
				var n = this,
					r, i = [];
				for (r = n.firstChild; r; r = e(r, n)) r.name === t && i.push(r);
				return i
			},
			empty: function() {
				var t = this,
					n, r, i;
				if (t.firstChild) {
					for (n = [], i = t.firstChild; i; i = e(i, t)) n.push(i);
					for (r = n.length; r--;) i = n[r], i.parent = i.firstChild = i.lastChild = i.next = i.prev = null
				}
				return t.firstChild = t.lastChild = null, t
			},
			isEmpty: function(t) {
				var r = this,
					i = r.firstChild,
					o, a;
				if (i)
					do {
						if (1 === i.type) {
							if (i.attributes.map["data-mce-bogus"]) continue;
							if (t[i.name]) return !1;
							for (o = i.attributes.length; o--;)
								if (a = i.attributes[o].name, "name" === a || 0 === a.indexOf("data-mce-bookmark")) return !1
						}
						if (8 === i.type) return !1;
						if (3 === i.type && !n.test(i.value)) return !1
					} while (i = e(i, r));
				return !0
			},
			walk: function(t) {
				return e(this, null, t)
			}
		}, t.create = function(e, n) {
			var i, o;
			if (i = new t(e, r[e] || 1), n)
				for (o in n) i.attr(o, n[o]);
			return i
		}, t
	}), r(E, [u], function(e) {
		function t(e, t) {
			return e ? e.split(t || " ") : []
		}

		function n(e) {
			function n(e, n, r) {
				function i(e, t) {
					var n = {},
						r, i;
					for (r = 0, i = e.length; i > r; r++) n[e[r]] = t || {};
					return n
				}
				var s, c, u, d = arguments;
				for (r = r || [], n = n || "", "string" == typeof r && (r = t(r)), c = 3; c < d.length; c++) "string" == typeof d[c] && (d[c] = t(d[c])), r.push.apply(r, d[c]);
				for (e = t(e), s = e.length; s--;) u = [].concat(l, t(n)), a[e[s]] = {
					attributes: i(u),
					attributesOrder: u,
					children: i(r, o)
				}
			}

			function r(e, n) {
				var r, i, o, s;
				for (e = t(e), r = e.length, n = t(n); r--;)
					for (i = a[e[r]], o = 0, s = n.length; s > o; o++) i.attributes[n[o]] = {}, i.attributesOrder.push(n[o])
			}
			var a = {},
				l, c, u, d, f, p;
			return i[e] ? i[e] : (l = t("id accesskey class dir lang style tabindex title"), c = t("address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"), u = t("a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"), "html4" != e && (l.push.apply(l, t("contenteditable contextmenu draggable dropzone hidden spellcheck translate")), c.push.apply(c, t("article aside details dialog figure header footer hgroup section nav")), u.push.apply(u, t("audio canvas command datalist mark meter output progress time wbr video ruby bdi keygen"))), "html5-strict" != e && (l.push("xml:lang"), p = t("acronym applet basefont big font strike tt"), u.push.apply(u, p), s(p, function(e) {
				n(e, "", u)
			}), f = t("center dir isindex noframes"), c.push.apply(c, f), d = [].concat(c, u), s(f, function(e) {
				n(e, "", d)
			})), d = d || [].concat(c, u), n("html", "manifest", "head body"), n("head", "", "base command link meta noscript script style title"), n("title hr noscript br"), n("base", "href target"), n("link", "href rel media hreflang type sizes hreflang"), n("meta", "name http-equiv content charset"), n("style", "media type scoped"), n("script", "src async defer type charset"), n("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", d), n("address dt dd div caption", "", d), n("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", u), n("blockquote", "cite", d), n("ol", "reversed start type", "li"), n("ul", "", "li"), n("li", "value", d), n("dl", "", "dt dd"), n("a", "href target rel media hreflang type", u), n("q", "cite", u), n("ins del", "cite datetime", d), n("img", "src alt usemap ismap width height"), n("iframe", "src name width height", d), n("embed", "src type width height"), n("object", "data type typemustmatch name usemap form width height", d, "param"), n("param", "name value"), n("map", "name", d, "area"), n("area", "alt coords shape href target rel media hreflang type"), n("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" == e ? " col" : "")), n("colgroup", "span", "col"), n("col", "span"), n("tbody thead tfoot", "", "tr"), n("tr", "", "td th"), n("td", "colspan rowspan headers", d), n("th", "colspan rowspan headers scope abbr", d), n("form", "accept-charset action autocomplete enctype method name novalidate target", d), n("fieldset", "disabled form name", d, "legend"), n("label", "form for", u), n("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), n("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" == e ? d : u), n("select", "disabled form multiple name required size", "option optgroup"), n("optgroup", "disabled label", "option"), n("option", "disabled label selected value"), n("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), n("menu", "type label", d, "li"), n("noscript", "", d), "html4" != e && (n("wbr"), n("ruby", "", u, "rt rp"), n("figcaption", "", d), n("mark rt rp summary bdi", "", u), n("canvas", "width height", d), n("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", d, "track source"), n("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", d, "track source"), n("source", "src type media"), n("track", "kind src srclang label default"), n("datalist", "", u, "option"), n("article section nav aside header footer", "", d), n("hgroup", "", "h1 h2 h3 h4 h5 h6"), n("figure", "", d, "figcaption"), n("time", "datetime", u), n("dialog", "open", d), n("command", "type label icon disabled checked radiogroup command"), n("output", "for form name", u), n("progress", "value max", u), n("meter", "value min max low high optimum", u), n("details", "open", d, "summary"), n("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" != e && (r("script", "language xml:space"), r("style", "xml:space"), r("object", "declare classid code codebase codetype archive standby align border hspace vspace"), r("embed", "align name hspace vspace"), r("param", "valuetype type"), r("a", "charset name rev shape coords"), r("br", "clear"), r("applet", "codebase archive code object alt name width height align hspace vspace"), r("img", "name longdesc align border hspace vspace"), r("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), r("font basefont", "size color face"), r("input", "usemap align"), r("select", "onchange"), r("textarea"), r("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), r("ul", "type compact"), r("li", "type"), r("ol dl menu dir", "compact"), r("pre", "width xml:space"), r("hr", "align noshade size width"), r("isindex", "prompt"), r("table", "summary width frame rules cellspacing cellpadding align bgcolor"), r("col", "width align char charoff valign"), r("colgroup", "width align char charoff valign"), r("thead", "align char charoff valign"), r("tr", "align char charoff valign bgcolor"), r("th", "axis align char charoff valign nowrap bgcolor width height"), r("form", "accept"), r("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), r("tfoot", "align char charoff valign"), r("tbody", "align char charoff valign"), r("area", "nohref"), r("body", "background bgcolor text link vlink alink")), "html4" != e && (r("input button select textarea", "autofocus"), r("input textarea", "placeholder"), r("a", "download"), r("link script img", "crossorigin"), r("iframe", "sandbox seamless allowfullscreen")), s(t("a form meter progress dfn"), function(e) {
				a[e] && delete a[e].children[e]
			}), delete a.caption.children.table, i[e] = a, a)
		}

		function r(e, t) {
			var n;
			return e && (n = {}, "string" == typeof e && (e = {
				"*": e
			}), s(e, function(e, r) {
				n[r] = "map" == t ? a(e, /[, ]/) : c(e, /[, ]/)
			})), n
		}
		var i = {},
			o = {},
			a = e.makeMap,
			s = e.each,
			l = e.extend,
			c = e.explode,
			u = e.inArray;
		return function(e) {
			function o(t, n, r) {
				var o = e[t];
				return o ? o = a(o, /[, ]/, a(o.toUpperCase(), /[, ]/)) : (o = i[t], o || (o = a(n, " ", a(n.toUpperCase(), " ")), o = l(o, r), i[t] = o)), o
			}

			function d(e) {
				return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
			}

			function f(e) {
				var n, r, i, o, s, l, c, f, p, h, m, g, v, b, x, w, _, E, N, k = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
					S = /^([!\-])?(\w+::\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
					T = /[*?+]/;
				if (e)
					for (e = t(e, ","), y["@"] && (w = y["@"].attributes, _ = y["@"].attributesOrder), n = 0, r = e.length; r > n; n++)
						if (s = k.exec(e[n])) {
							if (b = s[1], p = s[2], x = s[3], f = s[5], g = {}, v = [], l = {
								attributes: g,
								attributesOrder: v
							}, "#" === b && (l.paddEmpty = !0), "-" === b && (l.removeEmpty = !0), "!" === s[4] && (l.removeEmptyAttrs = !0), w) {
								for (E in w) g[E] = w[E];
								v.push.apply(v, _)
							}
							if (f)
								for (f = t(f, "|"), i = 0, o = f.length; o > i; i++)
									if (s = S.exec(f[i])) {
										if (c = {}, m = s[1], h = s[2].replace(/::/g, ":"), b = s[3], N = s[4], "!" === m && (l.attributesRequired = l.attributesRequired || [], l.attributesRequired.push(h), c.required = !0), "-" === m) {
											delete g[h], v.splice(u(v, h), 1);
											continue
										}
										b && ("=" === b && (l.attributesDefault = l.attributesDefault || [], l.attributesDefault.push({
											name: h,
											value: N
										}), c.defaultValue = N), ":" === b && (l.attributesForced = l.attributesForced || [], l.attributesForced.push({
											name: h,
											value: N
										}), c.forcedValue = N), "<" === b && (c.validValues = a(N, "?"))), T.test(h) ? (l.attributePatterns = l.attributePatterns || [], c.pattern = d(h), l.attributePatterns.push(c)) : (g[h] || v.push(h), g[h] = c)
									}
							w || "@" != p || (w = g, _ = v), x && (l.outputName = p, y[x] = l), T.test(p) ? (l.pattern = d(p), C.push(l)) : y[p] = l
						}
			}

			function p(e) {
				y = {}, C = [], f(e), s(_, function(e, t) {
					b[t] = e.children
				})
			}

			function h(e) {
				var n = /^(~)?(.+)$/;
				e && (i.text_block_elements = i.block_elements = null, s(t(e, ","), function(e) {
					var t = n.exec(e),
						r = "~" === t[1],
						i = r ? "span" : "div",
						o = t[2];
					if (b[o] = b[i], L[o] = i, r || (R[o.toUpperCase()] = {}, R[o] = {}), !y[o]) {
						var a = y[i];
						a = l({}, a), delete a.removeEmptyAttrs, delete a.removeEmpty, y[o] = a
					}
					s(b, function(e, t) {
						e[i] && (b[t] = e = l({}, b[t]), e[o] = e[i])
					})
				}))
			}

			function m(e) {
				var n = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
				e && s(t(e, ","), function(e) {
					var r = n.exec(e),
						i, o;
					r && (o = r[1], i = o ? b[r[2]] : b[r[2]] = {
						"#comment": {}
					}, i = b[r[2]], s(t(r[3], "|"), function(e) {
						"-" === o ? (b[r[2]] = i = l({}, b[r[2]]), delete i[e]) : i[e] = {}
					}))
				})
			}

			function g(e) {
				var t = y[e],
					n;
				if (t) return t;
				for (n = C.length; n--;)
					if (t = C[n], t.pattern.test(e)) return t
			}
			var v = this,
				y = {},
				b = {},
				C = [],
				x, w, _, E, N, k, S, T, R, A, B, D, L = {},
				H = {};
			e = e || {}, _ = n(e.schema), e.verify_html === !1 && (e.valid_elements = "*[*]"), x = r(e.valid_styles), w = r(e.invalid_styles, "map"), T = r(e.valid_classes, "map"), E = o("whitespace_elements", "pre script noscript style textarea video audio iframe object"), N = o("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), k = o("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), S = o("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"), A = o("non_empty_elements", "td th iframe video audio object script", k), B = o("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"), R = o("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup", B), D = o("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp"), s((e.special || "script noscript style textarea").split(" "), function(e) {
				H[e] = new RegExp("</" + e + "[^>]*>", "gi")
			}), e.valid_elements ? p(e.valid_elements) : (s(_, function(e, t) {
				y[t] = {
					attributes: e.attributes,
					attributesOrder: e.attributesOrder
				}, b[t] = e.children
			}), "html5" != e.schema && s(t("strong/b em/i"), function(e) {
				e = t(e, "/"), y[e[1]].outputName = e[0]
			}), y.img.attributesDefault = [{
				name: "alt",
				value: ""
			}], s(t("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function(e) {
				y[e] && (y[e].removeEmpty = !0)
			}), s(t("p h1 h2 h3 h4 h5 h6 th td pre div address caption"), function(e) {
				y[e].paddEmpty = !0
			}), s(t("span"), function(e) {
				y[e].removeEmptyAttrs = !0
			})), h(e.custom_elements), m(e.valid_children), f(e.extended_valid_elements), m("+ol[ul|ol],+ul[ul|ol]"), e.invalid_elements && s(c(e.invalid_elements), function(e) {
				y[e] && delete y[e]
			}), g("span") || f("span[!data-mce-type|*]"), v.children = b, v.getValidStyles = function() {
				return x
			}, v.getInvalidStyles = function() {
				return w
			}, v.getValidClasses = function() {
				return T
			}, v.getBoolAttrs = function() {
				return S
			}, v.getBlockElements = function() {
				return R
			}, v.getTextBlockElements = function() {
				return B
			}, v.getTextInlineElements = function() {
				return D
			}, v.getShortEndedElements = function() {
				return k
			}, v.getSelfClosingElements = function() {
				return N
			}, v.getNonEmptyElements = function() {
				return A
			}, v.getWhiteSpaceElements = function() {
				return E
			}, v.getSpecialElements = function() {
				return H
			}, v.isValidChild = function(e, t) {
				var n = b[e];
				return !(!n || !n[t])
			}, v.isValid = function(e, t) {
				var n, r, i = g(e);
				if (i) {
					if (!t) return !0;
					if (i.attributes[t]) return !0;
					if (n = i.attributePatterns)
						for (r = n.length; r--;)
							if (n[r].pattern.test(e)) return !0
				}
				return !1
			}, v.getElementRule = g, v.getCustomElements = function() {
				return L
			}, v.addValidElements = f, v.setValidElements = p, v.addCustomElements = h, v.addValidChildren = m, v.elements = y
		}
	}), r(N, [E, g, u], function(e, t, n) {
		function r(e, t, n) {
			var r = 1,
				i, o, a, s;
			for (s = e.getShortEndedElements(), a = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g, a.lastIndex = i = n; o = a.exec(t);) {
				if (i = a.lastIndex, "/" === o[1]) r--;
				else if (!o[1]) {
					if (o[2] in s) continue;
					r++
				}
				if (0 === r) break
			}
			return i
		}

		function i(i, a) {
			function s() {}
			var l = this;
			i = i || {}, l.schema = a = a || new e, i.fix_self_closing !== !1 && (i.fix_self_closing = !0), o("comment cdata text start end pi doctype".split(" "), function(e) {
				e && (l[e] = i[e] || s)
			}), l.parse = function(e) {
				function o(e) {
					var t, n;
					for (t = p.length; t-- && p[t].name !== e;);
					if (t >= 0) {
						for (n = p.length - 1; n >= t; n--) e = p[n], e.valid && l.end(e.name);
						p.length = t
					}
				}

				function s(e, t, n, r, o) {
					var a, s, l = /[\s\u0000-\u001F]+/g;
					if (t = t.toLowerCase(), n = t in x ? t : z(n || r || o || ""), _ && !y && 0 !== t.indexOf("data-")) {
						if (a = T[t], !a && R) {
							for (s = R.length; s-- && (a = R[s], !a.pattern.test(t));); - 1 === s && (a = null)
						}
						if (!a) return;
						if (a.validValues && !(n in a.validValues)) return
					}
					if (V[t] && !i.allow_script_urls) {
						var c = n.replace(l, "");
						try {
							c = decodeURIComponent(c)
						} catch (u) {
							c = unescape(c)
						}
						if (U.test(c)) return;
						if (!i.allow_html_data_urls && $.test(c) && !/^data:image\//i.test(c)) return
					}
					h.map[t] = n, h.push({
						name: t,
						value: n
					})
				}
				var l = this,
					c, u = 0,
					d, f, p = [],
					h, m, g, v, y, b, C, x, w, _, E, N, k, S, T, R, A, B, D, L, H, M, P, O, I, F = 0,
					z = t.decode,
					W, V = n.makeMap("src,href,data,background,formaction,poster"),
					U = /((java|vb)script|mhtml):/i,
					$ = /^data:/i;
				for (M = new RegExp("<(?:(?:!--([\\w\\W]*?)-->)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([^>]+)>)|(?:([A-Za-z0-9\\-_\\:\\.]+)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), P = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, C = a.getShortEndedElements(), H = i.self_closing_elements || a.getSelfClosingElements(), x = a.getBoolAttrs(), _ = i.validate, b = i.remove_internals, W = i.fix_self_closing, O = a.getSpecialElements(); c = M.exec(e);) {
					if (u < c.index && l.text(z(e.substr(u, c.index - u))), d = c[6]) d = d.toLowerCase(), ":" === d.charAt(0) && (d = d.substr(1)), o(d);
					else if (d = c[7]) {
						if (d = d.toLowerCase(), ":" === d.charAt(0) && (d = d.substr(1)), w = d in C, W && H[d] && p.length > 0 && p[p.length - 1].name === d && o(d), !_ || (E = a.getElementRule(d))) {
							if (N = !0, _ && (T = E.attributes, R = E.attributePatterns), (S = c[8]) ? (y = -1 !== S.indexOf("data-mce-type"), y && b && (N = !1), h = [], h.map = {}, S.replace(P, s)) : (h = [], h.map = {}), _ && !y) {
								if (A = E.attributesRequired, B = E.attributesDefault, D = E.attributesForced, L = E.removeEmptyAttrs, L && !h.length && (N = !1), D)
									for (m = D.length; m--;) k = D[m], v = k.name, I = k.value, "{$uid}" === I && (I = "mce_" + F++), h.map[v] = I, h.push({
										name: v,
										value: I
									});
								if (B)
									for (m = B.length; m--;) k = B[m], v = k.name, v in h.map || (I = k.value, "{$uid}" === I && (I = "mce_" + F++), h.map[v] = I, h.push({
										name: v,
										value: I
									}));
								if (A) {
									for (m = A.length; m-- && !(A[m] in h.map);); - 1 === m && (N = !1)
								}
								if (k = h.map["data-mce-bogus"]) {
									if ("all" === k) {
										u = r(a, e, M.lastIndex), M.lastIndex = u;
										continue
									}
									N = !1
								}
							}
							N && l.start(d, h, w)
						} else N = !1; if (f = O[d]) {
							f.lastIndex = u = c.index + c[0].length, (c = f.exec(e)) ? (N && (g = e.substr(u, c.index - u)), u = c.index + c[0].length) : (g = e.substr(u), u = e.length), N && (g.length > 0 && l.text(g, !0), l.end(d)), M.lastIndex = u;
							continue
						}
						w || (S && S.indexOf("/") == S.length - 1 ? N && l.end(d) : p.push({
							name: d,
							valid: N
						}))
					} else(d = c[1]) ? (">" === d.charAt(0) && (d = " " + d), i.allow_conditional_comments || "[if" !== d.substr(0, 3) || (d = " " + d), l.comment(d)) : (d = c[2]) ? l.cdata(d) : (d = c[3]) ? l.doctype(d) : (d = c[4]) && l.pi(d, c[5]);
					u = c.index + c[0].length
				}
				for (u < e.length && l.text(z(e.substr(u))), m = p.length - 1; m >= 0; m--) d = p[m], d.valid && l.end(d.name)
			}
		}
		var o = n.each;
		return i.findEndTag = r, i
	}), r(k, [_, E, N, u], function(e, t, n, r) {
		var i = r.makeMap,
			o = r.each,
			a = r.explode,
			s = r.extend;
		return function(r, l) {
			function c(t) {
				var n, r, o, a, s, c, d, f, p, h, m, g, v, y;
				for (m = i("tr,td,th,tbody,thead,tfoot,table"), h = l.getNonEmptyElements(), g = l.getTextBlockElements(), n = 0; n < t.length; n++)
					if (r = t[n], r.parent && !r.fixed)
						if (g[r.name] && "li" == r.parent.name) {
							for (v = r.next; v && g[v.name];) v.name = "li", v.fixed = !0, r.parent.insert(v, r.parent), v = v.next;
							r.unwrap(r)
						} else {
							for (a = [r], o = r.parent; o && !l.isValidChild(o.name, r.name) && !m[o.name]; o = o.parent) a.push(o);
							if (o && a.length > 1) {
								for (a.reverse(), s = c = u.filterNode(a[0].clone()), p = 0; p < a.length - 1; p++) {
									for (l.isValidChild(c.name, a[p].name) ? (d = u.filterNode(a[p].clone()), c.append(d)) : d = c, f = a[p].firstChild; f && f != a[p + 1];) y = f.next, d.append(f), f = y;
									c = d
								}
								s.isEmpty(h) ? o.insert(r, a[0], !0) : (o.insert(s, a[0], !0), o.insert(r, s)), o = a[0], (o.isEmpty(h) || o.firstChild === o.lastChild && "br" === o.firstChild.name) && o.empty().remove()
							} else if (r.parent) {
								if ("li" === r.name) {
									if (v = r.prev, v && ("ul" === v.name || "ul" === v.name)) {
										v.append(r);
										continue
									}
									if (v = r.next, v && ("ul" === v.name || "ul" === v.name)) {
										v.insert(r, v.firstChild, !0);
										continue
									}
									r.wrap(u.filterNode(new e("ul", 1)));
									continue
								}
								l.isValidChild(r.parent.name, "div") && l.isValidChild("div", r.name) ? r.wrap(u.filterNode(new e("div", 1))) : "style" === r.name || "script" === r.name ? r.empty().remove() : r.unwrap()
							}
						}
			}
			var u = this,
				d = {},
				f = [],
				p = {},
				h = {};
			r = r || {}, r.validate = "validate" in r ? r.validate : !0, r.root_name = r.root_name || "body", u.schema = l = l || new t, u.filterNode = function(e) {
				var t, n, r;
				n in d && (r = p[n], r ? r.push(e) : p[n] = [e]), t = f.length;
				for (; t--;) n = f[t].name, n in e.attributes.map && (r = h[n], r ? r.push(e) : h[n] = [e]);
				return e
			}, u.addNodeFilter = function(e, t) {
				o(a(e), function(e) {
					var n = d[e];
					n || (d[e] = n = []), n.push(t)
				})
			}, u.addAttributeFilter = function(e, t) {
				o(a(e), function(e) {
					var n;
					for (n = 0; n < f.length; n++)
						if (f[n].name === e) return void f[n].callbacks.push(t);
					f.push({
						name: e,
						callbacks: [t]
					})
				})
			}, u.parse = function(t, o) {
				function a() {
					function e(e) {
						e && (t = e.firstChild, t && 3 == t.type && (t.value = t.value.replace(R, "")), t = e.lastChild, t && 3 == t.type && (t.value = t.value.replace(D, "")))
					}
					var t = y.firstChild,
						n, i;
					if (l.isValidChild(y.name, I.toLowerCase())) {
						for (; t;) n = t.next, 3 == t.type || 1 == t.type && "p" !== t.name && !T[t.name] && !t.attr("data-mce-type") ? i ? i.append(t) : (i = u(I, 1), i.attr(r.forced_root_block_attrs), y.insert(i, t), i.append(t)) : (e(i), i = null), t = n;
						e(i)
					}
				}

				function u(t, n) {
					var r = new e(t, n),
						i;
					return t in d && (i = p[t], i ? i.push(r) : p[t] = [r]), r
				}

				function m(e) {
					var t, n, r;
					for (t = e.prev; t && 3 === t.type;) n = t.value.replace(D, ""), n.length > 0 ? (t.value = n, t = t.prev) : (r = t.prev, t.remove(), t = r)
				}

				function g(e) {
					var t, n = {};
					for (t in e) "li" !== t && "p" != t && (n[t] = e[t]);
					return n
				}
				var v, y, b, C, x, w, _, E, N, k, S, T, R, A = [],
					B, D, L, H, M, P, O, I;
				if (o = o || {}, p = {}, h = {}, T = s(i("script,style,head,html,body,title,meta,param"), l.getBlockElements()), O = l.getNonEmptyElements(), P = l.children, S = r.validate, I = "forced_root_block" in o ? o.forced_root_block : r.forced_root_block, M = l.getWhiteSpaceElements(), R = /^[ \t\r\n]+/, D = /[ \t\r\n]+$/, L = /[ \t\r\n]+/g, H = /^[ \t\r\n]+$/, v = new n({
					validate: S,
					allow_script_urls: r.allow_script_urls,
					allow_conditional_comments: r.allow_conditional_comments,
					self_closing_elements: g(l.getSelfClosingElements()),
					cdata: function(e) {
						b.append(u("#cdata", 4)).value = e
					},
					text: function(e, t) {
						var n;
						B || (e = e.replace(L, " "), b.lastChild && T[b.lastChild.name] && (e = e.replace(R, ""))), 0 !== e.length && (n = u("#text", 3), n.raw = !!t, b.append(n).value = e)
					},
					comment: function(e) {
						b.append(u("#comment", 8)).value = e
					},
					pi: function(e, t) {
						b.append(u(e, 7)).value = t, m(b)
					},
					doctype: function(e) {
						var t;
						t = b.append(u("#doctype", 10)), t.value = e, m(b)
					},
					start: function(e, t, n) {
						var r, i, o, a, s;
						if (o = S ? l.getElementRule(e) : {}) {
							for (r = u(o.outputName || e, 1), r.attributes = t, r.shortEnded = n, b.append(r), s = P[b.name], s && P[r.name] && !s[r.name] && A.push(r), i = f.length; i--;) a = f[i].name, a in t.map && (N = h[a], N ? N.push(r) : h[a] = [r]);
							T[e] && m(r), n || (b = r), !B && M[e] && (B = !0)
						}
					},
					end: function(t) {
						var n, r, i, o, a;
						if (r = S ? l.getElementRule(t) : {}) {
							if (T[t] && !B) {
								if (n = b.firstChild, n && 3 === n.type)
									if (i = n.value.replace(R, ""), i.length > 0) n.value = i, n = n.next;
									else
										for (o = n.next, n.remove(), n = o; n && 3 === n.type;) i = n.value, o = n.next, (0 === i.length || H.test(i)) && (n.remove(), n = o), n = o;
								if (n = b.lastChild, n && 3 === n.type)
									if (i = n.value.replace(D, ""), i.length > 0) n.value = i, n = n.prev;
									else
										for (o = n.prev, n.remove(), n = o; n && 3 === n.type;) i = n.value, o = n.prev, (0 === i.length || H.test(i)) && (n.remove(), n = o), n = o
							}
							if (B && M[t] && (B = !1), (r.removeEmpty || r.paddEmpty) && b.isEmpty(O))
								if (r.paddEmpty) b.empty().append(new e("#text", "3")).value = "\xa0";
								else if (!b.attributes.map.name && !b.attributes.map.id) return a = b.parent, T[b.name] ? b.empty().remove() : b.unwrap(), void(b = a);
							b = b.parent
						}
					}
				}, l), y = b = new e(o.context || r.root_name, 11), v.parse(t), S && A.length && (o.context ? o.invalid = !0 : c(A)), I && ("body" == y.name || o.isRootContent) && a(), !o.invalid) {
					for (k in p) {
						for (N = d[k], C = p[k], _ = C.length; _--;) C[_].parent || C.splice(_, 1);
						for (x = 0, w = N.length; w > x; x++) N[x](C, k, o)
					}
					for (x = 0, w = f.length; w > x; x++)
						if (N = f[x], N.name in h) {
							for (C = h[N.name], _ = C.length; _--;) C[_].parent || C.splice(_, 1);
							for (_ = 0, E = N.callbacks.length; E > _; _++) N.callbacks[_](C, N.name, o)
						}
				}
				return y
			}, r.remove_trailing_brs && u.addNodeFilter("br", function(t) {
				var n, r = t.length,
					i, o = s({}, l.getBlockElements()),
					a = l.getNonEmptyElements(),
					c, u, d, f, p, h;
				for (o.body = 1, n = 0; r > n; n++)
					if (i = t[n], c = i.parent, o[i.parent.name] && i === c.lastChild) {
						for (d = i.prev; d;) {
							if (f = d.name, "span" !== f || "bookmark" !== d.attr("data-mce-type")) {
								if ("br" !== f) break;
								if ("br" === f) {
									i = null;
									break
								}
							}
							d = d.prev
						}
						i && (i.remove(), c.isEmpty(a) && (p = l.getElementRule(c.name), p && (p.removeEmpty ? c.remove() : p.paddEmpty && (c.empty().append(new e("#text", 3)).value = "\xa0"))))
					} else {
						for (u = i; c && c.firstChild === u && c.lastChild === u && (u = c, !o[c.name]);) c = c.parent;
						u === c && (h = new e("#text", 3), h.value = "\xa0", i.replace(h))
					}
			}), r.allow_html_in_named_anchor || u.addAttributeFilter("id,name", function(e) {
				for (var t = e.length, n, r, i, o; t--;)
					if (o = e[t], "a" === o.name && o.firstChild && !o.attr("href")) {
						i = o.parent, n = o.lastChild;
						do r = n.prev, i.insert(n, o), n = r; while (n)
					}
			}), r.validate && l.getValidClasses() && u.addAttributeFilter("class", function(e) {
				for (var t = e.length, n, r, i, o, a, s = l.getValidClasses(), c, u; t--;) {
					for (n = e[t], r = n.attr("class").split(" "), a = "", i = 0; i < r.length; i++) o = r[i], u = !1, c = s["*"], c && c[o] && (u = !0), c = s[n.name], u || !c || c[o] || (u = !0), u && (a && (a += " "), a += o);
					a.length || (a = null), n.attr("class", a)
				}
			})
		}
	}), r(S, [g, u], function(e, t) {
		var n = t.makeMap;
		return function(t) {
			var r = [],
				i, o, a, s, l;
			return t = t || {}, i = t.indent, o = n(t.indent_before || ""), a = n(t.indent_after || ""), s = e.getEncodeFunc(t.entity_encoding || "raw", t.entities), l = "html" == t.element_format, {
				start: function(e, t, n) {
					var c, u, d, f;
					if (i && o[e] && r.length > 0 && (f = r[r.length - 1], f.length > 0 && "\n" !== f && r.push("\n")), r.push("<", e), t)
						for (c = 0, u = t.length; u > c; c++) d = t[c], r.push(" ", d.name, '="', s(d.value, !0), '"');
					r[r.length] = !n || l ? ">" : " />", n && i && a[e] && r.length > 0 && (f = r[r.length - 1], f.length > 0 && "\n" !== f && r.push("\n"))
				},
				end: function(e) {
					var t;
					r.push("</", e, ">"), i && a[e] && r.length > 0 && (t = r[r.length - 1], t.length > 0 && "\n" !== t && r.push("\n"))
				},
				text: function(e, t) {
					e.length > 0 && (r[r.length] = t ? e : s(e))
				},
				cdata: function(e) {
					r.push("<![CDATA[", e, "]]>")
				},
				comment: function(e) {
					r.push("<!--", e, "-->")
				},
				pi: function(e, t) {
					t ? r.push("<?", e, " ", t, "?>") : r.push("<?", e, "?>"), i && r.push("\n")
				},
				doctype: function(e) {
					r.push("<!DOCTYPE", e, ">", i ? "\n" : "")
				},
				reset: function() {
					r.length = 0
				},
				getContent: function() {
					return r.join("").replace(/\n$/, "")
				}
			}
		}
	}), r(T, [S, E], function(e, t) {
		return function(n, r) {
			var i = this,
				o = new e(n);
			n = n || {}, n.validate = "validate" in n ? n.validate : !0, i.schema = r = r || new t, i.writer = o, i.serialize = function(e) {
				function t(e) {
					var n = i[e.type],
						s, l, c, u, d, f, p, h, m;
					if (n) n(e);
					else {
						if (s = e.name, l = e.shortEnded, c = e.attributes, a && c && c.length > 1) {
							for (f = [], f.map = {}, m = r.getElementRule(e.name), p = 0, h = m.attributesOrder.length; h > p; p++) u = m.attributesOrder[p], u in c.map && (d = c.map[u], f.map[u] = d, f.push({
								name: u,
								value: d
							}));
							for (p = 0, h = c.length; h > p; p++) u = c[p].name, u in f.map || (d = c.map[u], f.map[u] = d, f.push({
								name: u,
								value: d
							}));
							c = f
						}
						if (o.start(e.name, c, l), !l) {
							if (e = e.firstChild)
								do t(e); while (e = e.next);
							o.end(s)
						}
					}
				}
				var i, a;
				return a = n.validate, i = {
					3: function(e) {
						o.text(e.value, e.raw)
					},
					8: function(e) {
						o.comment(e.value)
					},
					7: function(e) {
						o.pi(e.name, e.value)
					},
					10: function(e) {
						o.doctype(e.value)
					},
					4: function(e) {
						o.cdata(e.value)
					},
					11: function(e) {
						if (e = e.firstChild)
							do t(e); while (e = e.next)
					}
				}, o.reset(), 1 != e.type || n.inner ? i[11](e) : t(e), o.getContent()
			}
		}
	}), r(R, [y, k, g, T, _, E, d, u], function(e, t, n, r, i, o, a, s) {
		var l = s.each,
			c = s.trim,
			u = e.DOM;
		return function(e, i) {
			var s, d, f;
			return i && (s = i.dom, d = i.schema), s = s || u, d = d || new o(e), e.entity_encoding = e.entity_encoding || "named", e.remove_trailing_brs = "remove_trailing_brs" in e ? e.remove_trailing_brs : !0, f = new t(e, d), f.addAttributeFilter("data-mce-tabindex", function(e, t) {
				for (var n = e.length, r; n--;) r = e[n], r.attr("tabindex", r.attributes.map["data-mce-tabindex"]), r.attr(t, null)
			}), f.addAttributeFilter("src,href,style", function(t, n) {
				for (var r = t.length, i, o, a = "data-mce-" + n, l = e.url_converter, c = e.url_converter_scope, u; r--;) i = t[r], o = i.attributes.map[a], o !== u ? (i.attr(n, o.length > 0 ? o : null), i.attr(a, null)) : (o = i.attributes.map[n], "style" === n ? o = s.serializeStyle(s.parseStyle(o), i.name) : l && (o = l.call(c, o, n, i.name)), i.attr(n, o.length > 0 ? o : null))
			}), f.addAttributeFilter("class", function(e) {
				for (var t = e.length, n, r; t--;) n = e[t], r = n.attr("class"), r && (r = n.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), n.attr("class", r.length > 0 ? r : null))
			}), f.addAttributeFilter("data-mce-type", function(e, t, n) {
				for (var r = e.length, i; r--;) i = e[r], "bookmark" !== i.attributes.map["data-mce-type"] || n.cleanup || i.remove()
			}), f.addNodeFilter("noscript", function(e) {
				for (var t = e.length, r; t--;) r = e[t].firstChild, r && (r.value = n.decode(r.value))
			}), f.addNodeFilter("script,style", function(e, t) {
				function n(e) {
					return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "")
				}
				for (var r = e.length, i, o, a; r--;) i = e[r], o = i.firstChild ? i.firstChild.value : "", "script" === t ? (a = i.attr("type"), a && i.attr("type", "mce-no/type" == a ? null : a.replace(/^mce\-/, "")), o.length > 0 && (i.firstChild.value = "// <![CDATA[\n" + n(o) + "\n// ]]>")) : o.length > 0 && (i.firstChild.value = "<!--\n" + n(o) + "\n-->")
			}), f.addNodeFilter("#comment", function(e) {
				for (var t = e.length, n; t--;) n = e[t], 0 === n.value.indexOf("[CDATA[") ? (n.name = "#cdata", n.type = 4, n.value = n.value.replace(/^\[CDATA\[|\]\]$/g, "")) : 0 === n.value.indexOf("mce:protected ") && (n.name = "#text", n.type = 3, n.raw = !0, n.value = unescape(n.value).substr(14))
			}), f.addNodeFilter("xml:namespace,input", function(e, t) {
				for (var n = e.length, r; n--;) r = e[n], 7 === r.type ? r.remove() : 1 === r.type && ("input" !== t || "type" in r.attributes.map || r.attr("type", "text"))
			}), e.fix_list_elements && f.addNodeFilter("ul,ol", function(e) {
				for (var t = e.length, n, r; t--;) n = e[t], r = n.parent, ("ul" === r.name || "ol" === r.name) && n.prev && "li" === n.prev.name && n.prev.append(n)
			}), f.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize", function(e, t) {
				for (var n = e.length; n--;) e[n].attr(t, null)
			}), {
				schema: d,
				addNodeFilter: f.addNodeFilter,
				addAttributeFilter: f.addAttributeFilter,
				serialize: function(t, n) {
					var i = this,
						o, u, p, h, m;
					return a.ie && s.select("script,style,select,map").length > 0 ? (m = t.innerHTML, t = t.cloneNode(!1), s.setHTML(t, m)) : t = t.cloneNode(!0), o = t.ownerDocument.implementation, o.createHTMLDocument && (u = o.createHTMLDocument(""), l("BODY" == t.nodeName ? t.childNodes : [t], function(e) {
						u.body.appendChild(u.importNode(e, !0))
					}), t = "BODY" != t.nodeName ? u.body.firstChild : u.body, p = s.doc, s.doc = u), n = n || {}, n.format = n.format || "html", n.selection && (n.forced_root_block = ""), n.no_events || (n.node = t, i.onPreProcess(n)), h = new r(e, d), n.content = h.serialize(f.parse(c(n.getInner ? t.innerHTML : s.getOuterHTML(t)), n)), n.cleanup || (n.content = n.content.replace(/\uFEFF/g, "")), n.no_events || i.onPostProcess(n), p && (s.doc = p), n.node = null, n.content
				},
				addRules: function(e) {
					d.addValidElements(e)
				},
				setRules: function(e) {
					d.setValidElements(e)
				},
				onPreProcess: function(e) {
					i && i.fire("PreProcess", e)
				},
				onPostProcess: function(e) {
					i && i.fire("PostProcess", e)
				}
			}
		}
	}), r(A, [], function() {
		function e(e) {
			function t(t, n) {
				var r, i = 0,
					o, a, s, l, c, u, d = -1,
					f;
				if (r = t.duplicate(), r.collapse(n), f = r.parentElement(), f.ownerDocument === e.dom.doc) {
					for (;
						"false" === f.contentEditable;) f = f.parentNode;
					if (!f.hasChildNodes()) return {
						node: f,
						inside: 1
					};
					for (s = f.children, o = s.length - 1; o >= i;)
						if (u = Math.floor((i + o) / 2), l = s[u], r.moveToElementText(l), d = r.compareEndPoints(n ? "StartToStart" : "EndToEnd", t), d > 0) o = u - 1;
						else {
							if (!(0 > d)) return {
								node: l
							};
							i = u + 1
						}
					if (0 > d)
						for (l ? r.collapse(!1) : (r.moveToElementText(f), r.collapse(!0), l = f, a = !0), c = 0; 0 !== r.compareEndPoints(n ? "StartToStart" : "StartToEnd", t) && 0 !== r.move("character", 1) && f == r.parentElement();) c++;
					else
						for (r.collapse(!0), c = 0; 0 !== r.compareEndPoints(n ? "StartToStart" : "StartToEnd", t) && 0 !== r.move("character", -1) && f == r.parentElement();) c++;
					return {
						node: l,
						position: d,
						offset: c,
						inside: a
					}
				}
			}

			function n() {
				function n(e) {
					var n = t(o, e),
						r, i, s = 0,
						l, c, u;
					if (r = n.node, i = n.offset, n.inside && !r.hasChildNodes()) return void a[e ? "setStart" : "setEnd"](r, 0);
					if (i === c) return void a[e ? "setStartBefore" : "setEndAfter"](r);
					if (n.position < 0) {
						if (l = n.inside ? r.firstChild : r.nextSibling, !l) return void a[e ? "setStartAfter" : "setEndAfter"](r);
						if (!i) return void(3 == l.nodeType ? a[e ? "setStart" : "setEnd"](l, 0) : a[e ? "setStartBefore" : "setEndBefore"](l));
						for (; l;) {
							if (3 == l.nodeType && (u = l.nodeValue, s += u.length, s >= i)) {
								r = l, s -= i, s = u.length - s;
								break
							}
							l = l.nextSibling
						}
					} else {
						if (l = r.previousSibling, !l) return a[e ? "setStartBefore" : "setEndBefore"](r);
						if (!i) return void(3 == r.nodeType ? a[e ? "setStart" : "setEnd"](l, r.nodeValue.length) : a[e ? "setStartAfter" : "setEndAfter"](l));
						for (; l;) {
							if (3 == l.nodeType && (s += l.nodeValue.length, s >= i)) {
								r = l, s -= i;
								break
							}
							l = l.previousSibling
						}
					}
					a[e ? "setStart" : "setEnd"](r, s)
				}
				var o = e.getRng(),
					a = i.createRng(),
					s, l, c, u, d;
				if (s = o.item ? o.item(0) : o.parentElement(), s.ownerDocument != i.doc) return a;
				if (l = e.isCollapsed(), o.item) return a.setStart(s.parentNode, i.nodeIndex(s)), a.setEnd(a.startContainer, a.startOffset + 1), a;
				try {
					n(!0), l || n()
				} catch (f) {
					if (-2147024809 != f.number) throw f;
					d = r.getBookmark(2), c = o.duplicate(), c.collapse(!0), s = c.parentElement(), l || (c = o.duplicate(), c.collapse(!1), u = c.parentElement(), u.innerHTML = u.innerHTML), s.innerHTML = s.innerHTML, r.moveToBookmark(d), o = e.getRng(), n(!0), l || n()
				}
				return a
			}
			var r = this,
				i = e.dom,
				o = !1;
			this.getBookmark = function(n) {
				function r(e) {
					var t, n, r, o, a = [];
					for (t = e.parentNode, n = i.getRoot().parentNode; t != n && 9 !== t.nodeType;) {
						for (r = t.children, o = r.length; o--;)
							if (e === r[o]) {
								a.push(o);
								break
							}
						e = t, t = t.parentNode
					}
					return a
				}

				function o(e) {
					var n;
					return n = t(a, e), n ? {
						position: n.position,
						offset: n.offset,
						indexes: r(n.node),
						inside: n.inside
					} : void 0
				}
				var a = e.getRng(),
					s = {};
				return 2 === n && (a.item ? s.start = {
					ctrl: !0,
					indexes: r(a.item(0))
				} : (s.start = o(!0), e.isCollapsed() || (s.end = o()))), s
			}, this.moveToBookmark = function(e) {
				function t(e) {
					var t, n, r, o;
					for (t = i.getRoot(), n = e.length - 1; n >= 0; n--) o = t.children, r = e[n], r <= o.length - 1 && (t = o[r]);
					return t
				}

				function n(n) {
					var i = e[n ? "start" : "end"],
						a, s, l, c;
					i && (a = i.position > 0, s = o.createTextRange(), s.moveToElementText(t(i.indexes)), c = i.offset, c !== l ? (s.collapse(i.inside || a), s.moveStart("character", a ? -c : c)) : s.collapse(n), r.setEndPoint(n ? "StartToStart" : "EndToStart", s), n && r.collapse(!0))
				}
				var r, o = i.doc.body;
				e.start && (e.start.ctrl ? (r = o.createControlRange(), r.addElement(t(e.start.indexes)), r.select()) : (r = o.createTextRange(), n(!0), n(), r.select()))
			}, this.addRange = function(t) {
				function n(e) {
					var t, n, a, d, h;
					a = i.create("a"), t = e ? s : c, n = e ? l : u, d = r.duplicate(), (t == f || t == f.documentElement) && (t = p, n = 0), 3 == t.nodeType ? (t.parentNode.insertBefore(a, t), d.moveToElementText(a), d.moveStart("character", n), i.remove(a), r.setEndPoint(e ? "StartToStart" : "EndToEnd", d)) : (h = t.childNodes, h.length ? (n >= h.length ? i.insertAfter(a, h[h.length - 1]) : t.insertBefore(a, h[n]), d.moveToElementText(a)) : t.canHaveHTML && (t.innerHTML = "<span>&#xFEFF;</span>", a = t.firstChild, d.moveToElementText(a), d.collapse(o)), r.setEndPoint(e ? "StartToStart" : "EndToEnd", d), i.remove(a))
				}
				var r, a, s, l, c, u, d, f = e.dom.doc,
					p = f.body,
					h, m;
				if (s = t.startContainer, l = t.startOffset, c = t.endContainer, u = t.endOffset, r = p.createTextRange(), s == c && 1 == s.nodeType) {
					if (l == u && !s.hasChildNodes()) {
						if (s.canHaveHTML) return d = s.previousSibling, d && !d.hasChildNodes() && i.isBlock(d) ? d.innerHTML = "&#xFEFF;" : d = null, s.innerHTML = "<span>&#xFEFF;</span><span>&#xFEFF;</span>", r.moveToElementText(s.lastChild), r.select(), i.doc.selection.clear(), s.innerHTML = "", void(d && (d.innerHTML = ""));
						l = i.nodeIndex(s), s = s.parentNode
					}
					if (l == u - 1) try {
						if (m = s.childNodes[l], a = p.createControlRange(), a.addElement(m), a.select(), h = e.getRng(), h.item && m === h.item(0)) return
					} catch (g) {}
				}
				n(!0), n(), r.select()
			}, this.getRangeAt = n
		}
		return e
	}), r(B, [d], function(e) {
		return {
			BACKSPACE: 8,
			DELETE: 46,
			DOWN: 40,
			ENTER: 13,
			LEFT: 37,
			RIGHT: 39,
			SPACEBAR: 32,
			TAB: 9,
			UP: 38,
			modifierPressed: function(e) {
				return e.shiftKey || e.ctrlKey || e.altKey
			},
			metaKeyPressed: function(t) {
				return e.mac ? t.metaKey : t.ctrlKey && !t.altKey
			}
		}
	}), r(D, [B, u, d], function(e, t, n) {
		return function(r, i) {
			function o(e) {
				var t = i.settings.object_resizing;
				return t === !1 || n.iOS ? !1 : ("string" != typeof t && (t = "table,img,div"), "false" === e.getAttribute("data-mce-resize") ? !1 : i.dom.is(e, t))
			}

			function a(t) {
				var n, r, o, a, s;
				n = t.screenX - T, r = t.screenY - R, P = n * k[2] + D, O = r * k[3] + L, P = 5 > P ? 5 : P, O = 5 > O ? 5 : O, o = "IMG" == w.nodeName && i.settings.resize_img_proportional !== !1 ? !e.modifierPressed(t) : e.modifierPressed(t) || "IMG" == w.nodeName && k[2] * k[3] !== 0, o && (W(n) > W(r) ? (O = V(P * H), P = V(O / H)) : (P = V(O / H), O = V(P * H))), C.setStyles(_, {
					width: P,
					height: O
				}), a = k.startPos.x + n, s = k.startPos.y + r, a = a > 0 ? a : 0, s = s > 0 ? s : 0, C.setStyles(E, {
					left: a,
					top: s,
					display: "block"
				}), E.innerHTML = P + " &times; " + O, k[2] < 0 && _.clientWidth <= P && C.setStyle(_, "left", A + (D - P)), k[3] < 0 && _.clientHeight <= O && C.setStyle(_, "top", B + (L - O)), n = U.scrollWidth - $, r = U.scrollHeight - q, n + r !== 0 && C.setStyles(E, {
					left: a - n,
					top: s - r
				}), M || (i.fire("ObjectResizeStart", {
					target: w,
					width: D,
					height: L
				}), M = !0)
			}

			function s() {
				function e(e, t) {
					t && (w.style[e] || !i.schema.isValid(w.nodeName.toLowerCase(), e) ? C.setStyle(w, e, t) : C.setAttrib(w, e, t))
				}
				M = !1, e("width", P), e("height", O), C.unbind(I, "mousemove", a), C.unbind(I, "mouseup", s), F != I && (C.unbind(F, "mousemove", a), C.unbind(F, "mouseup", s)), C.remove(_), C.remove(E), z && "TABLE" != w.nodeName || l(w), i.fire("ObjectResized", {
					target: w,
					width: P,
					height: O
				}), C.setAttrib(w, "style", C.getAttrib(w, "style")), i.nodeChanged()
			}

			function l(e, t, r) {
				var l, u, d, f, p;
				g(), l = C.getPos(e, U), A = l.x, B = l.y, p = e.getBoundingClientRect(), u = p.width || p.right - p.left, d = p.height || p.bottom - p.top, w != e && (m(), w = e, P = O = 0), f = i.fire("ObjectSelected", {
					target: e
				}), o(e) && !f.isDefaultPrevented() ? x(N, function(e, i) {
					function o(t) {
						T = t.screenX, R = t.screenY, D = w.clientWidth, L = w.clientHeight, H = L / D, k = e, e.startPos = {
							x: u * e[0] + A,
							y: d * e[1] + B
						}, $ = U.scrollWidth, q = U.scrollHeight, _ = w.cloneNode(!0), C.addClass(_, "mce-clonedresizable"), C.setAttrib(_, "data-mce-bogus", "all"), _.contentEditable = !1, _.unSelectabe = !0, C.setStyles(_, {
							left: A,
							top: B,
							margin: 0
						}), _.removeAttribute("data-mce-selected"), U.appendChild(_), C.bind(I, "mousemove", a), C.bind(I, "mouseup", s), F != I && (C.bind(F, "mousemove", a), C.bind(F, "mouseup", s)), E = C.add(U, "div", {
							"class": "mce-resize-helper",
							"data-mce-bogus": "all"
						}, D + " &times; " + L)
					}
					var l, c;
					return t ? void(i == t && o(r)) : (l = C.get("mceResizeHandle" + i), l ? C.show(l) : (c = U, l = C.add(c, "div", {
						id: "mceResizeHandle" + i,
						"data-mce-bogus": "all",
						"class": "mce-resizehandle",
						unselectable: !0,
						style: "cursor:" + i + "-resize; margin:0; padding:0"
					}), n.ie && (l.contentEditable = !1)), e.elm || (C.bind(l, "mousedown", function(e) {
						e.stopImmediatePropagation(), e.preventDefault(), o(e)
					}), e.elm = l), void C.setStyles(l, {
						left: u * e[0] + A - l.offsetWidth / 2,
						top: d * e[1] + B - l.offsetHeight / 2
					}))
				}) : c(), w.setAttribute("data-mce-selected", "1")
			}

			function c() {
				var e, t;
				g(), w && w.removeAttribute("data-mce-selected");
				for (e in N) t = C.get("mceResizeHandle" + e), t && (C.unbind(t), C.remove(t))
			}

			function u(e) {
				function t(e, t) {
					if (e)
						do
							if (e === t) return !0;
					while (e = e.parentNode)
				}
				var n, i;
				if (!M) return x(C.select("img[data-mce-selected],hr[data-mce-selected]"), function(e) {
					e.removeAttribute("data-mce-selected")
				}), i = "mousedown" == e.type ? e.target : r.getNode(), i = C.$(i).closest(z ? "table" : "table,img,hr")[0], t(i, U) && (v(), n = r.getStart(!0), t(n, i) && t(r.getEnd(!0), i) && (!z || i != n && "IMG" !== n.nodeName)) ? void l(i) : void c()
			}

			function d(e, t, n) {
				e && e.attachEvent && e.attachEvent("on" + t, n)
			}

			function f(e, t, n) {
				e && e.detachEvent && e.detachEvent("on" + t, n)
			}

			function p(e) {
				var t = e.srcElement,
					n, r, o, a, s, c, u;
				n = t.getBoundingClientRect(), c = S.clientX - n.left, u = S.clientY - n.top;
				for (r in N)
					if (o = N[r], a = t.offsetWidth * o[0], s = t.offsetHeight * o[1], W(a - c) < 8 && W(s - u) < 8) {
						k = o;
						break
					}
				M = !0, i.fire("ObjectResizeStart", {
					target: w,
					width: w.clientWidth,
					height: w.clientHeight
				}), i.getDoc().selection.empty(), l(t, r, S)
			}

			function h(e) {
				var t = e.srcElement;
				if (t != w) {
					if (i.fire("ObjectSelected", {
						target: t
					}), m(), 0 === t.id.indexOf("mceResizeHandle")) return void(e.returnValue = !1);
					("IMG" == t.nodeName || "TABLE" == t.nodeName) && (c(), w = t, d(t, "resizestart", p))
				}
			}

			function m() {
				f(w, "resizestart", p)
			}

			function g() {
				for (var e in N) {
					var t = N[e];
					t.elm && (C.unbind(t.elm), delete t.elm)
				}
			}

			function v() {
				try {
					i.getDoc().execCommand("enableObjectResizing", !1, !1)
				} catch (e) {}
			}

			function y(e) {
				var t;
				if (z) {
					t = I.body.createControlRange();
					try {
						return t.addElement(e), t.select(), !0
					} catch (n) {}
				}
			}

			function b() {
				w = _ = null, z && (m(), f(U, "controlselect", h))
			}
			var C = i.dom,
				x = t.each,
				w, _, E, N, k, S, T, R, A, B, D, L, H, M, P, O, I = i.getDoc(),
				F = document,
				z = n.ie && n.ie < 11,
				W = Math.abs,
				V = Math.round,
				U = i.getBody(),
				$, q;
			N = {
				n: [.5, 0, 0, -1],
				e: [1, .5, 1, 0],
				s: [.5, 1, 0, 1],
				w: [0, .5, -1, 0],
				nw: [0, 0, -1, -1],
				ne: [1, 0, 1, -1],
				se: [1, 1, 1, 1],
				sw: [0, 1, -1, 1]
			};
			var j = ".mce-content-body";
			return i.contentStyles.push(j + " div.mce-resizehandle {position: absolute;border: 1px solid black;background: #FFF;width: 5px;height: 5px;z-index: 10000}" + j + " .mce-resizehandle:hover {background: #000}" + j + " img[data-mce-selected], hr[data-mce-selected] {outline: 1px solid black;resize: none}" + j + " .mce-clonedresizable {position: absolute;" + (n.gecko ? "" : "outline: 1px dashed black;") + "opacity: .5;filter: alpha(opacity=50);z-index: 10000}" + j + " .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}"), i.on("init", function() {
				z ? (i.on("ObjectResized", function(e) {
					"TABLE" != e.target.nodeName && (c(), y(e.target))
				}), d(U, "controlselect", h), i.on("mousedown", function(e) {
					S = e
				})) : (v(), n.ie >= 11 && (i.on("mouseup", function(e) {
					var t = e.target.nodeName;
					!M && /^(TABLE|IMG|HR)$/.test(t) && (i.selection.select(e.target, "TABLE" == t), i.nodeChanged())
				}), i.dom.bind(U, "mscontrolselect", function(e) {
					/^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" == e.target.tagName && window.setTimeout(function() {
						i.selection.select(e.target)
					}, 0))
				}))), i.on("nodechange ResizeEditor", u), i.on("keydown keyup", function(e) {
					w && "TABLE" == w.nodeName && u(e)
				}), i.on("hide", c)
			}), i.on("remove", g), {
				isResizable: o,
				showResizeRect: l,
				hideResizeRect: c,
				updateResizeRect: u,
				controlSelect: y,
				destroy: b
			}
		}
	}), r(L, [d, u], function(e, t) {
		function n(n) {
			var r = n.dom;
			this.getBookmark = function(e, i) {
				function o(e, n) {
					var i = 0;
					return t.each(r.select(e), function(e, t) {
						e == n && (i = t)
					}), i
				}

				function a(e) {
					function t(t) {
						var n, r, i, o = t ? "start" : "end";
						n = e[o + "Container"], r = e[o + "Offset"], 1 == n.nodeType && "TR" == n.nodeName && (i = n.childNodes, n = i[Math.min(t ? r : r - 1, i.length - 1)], n && (r = t ? 0 : n.childNodes.length, e["set" + (t ? "Start" : "End")](n, r)))
					}
					return t(!0), t(), e
				}

				function s() {
					function e(e, t) {
						var n = e[t ? "startContainer" : "endContainer"],
							a = e[t ? "startOffset" : "endOffset"],
							s = [],
							l, c, u = 0;
						if (3 == n.nodeType) {
							if (i)
								for (l = n.previousSibling; l && 3 == l.nodeType; l = l.previousSibling) a += l.nodeValue.length;
							s.push(a)
						} else c = n.childNodes, a >= c.length && c.length && (u = 1, a = Math.max(0, c.length - 1)), s.push(r.nodeIndex(c[a], i) + u);
						for (; n && n != o; n = n.parentNode) s.push(r.nodeIndex(n, i));
						return s
					}
					var t = n.getRng(!0),
						o = r.getRoot(),
						a = {};
					return a.start = e(t, !0), n.isCollapsed() || (a.end = e(t)), a
				}
				var l, c, u, d, f, p, h = "&#xFEFF;",
					m;
				if (2 == e) return p = n.getNode(), f = p ? p.nodeName : null, "IMG" == f ? {
					name: f,
					index: o(f, p)
				} : n.tridentSel ? n.tridentSel.getBookmark(e) : s();
				if (e) return {
					rng: n.getRng()
				};
				if (l = n.getRng(), u = r.uniqueId(), d = n.isCollapsed(), m = "overflow:hidden;line-height:0px", l.duplicate || l.item) {
					if (l.item) return p = l.item(0), f = p.nodeName, {
						name: f,
						index: o(f, p)
					};
					c = l.duplicate();
					try {
						l.collapse(), l.pasteHTML('<span data-mce-type="bookmark" id="' + u + '_start" style="' + m + '">' + h + "</span>"), d || (c.collapse(!1), l.moveToElementText(c.parentElement()), 0 === l.compareEndPoints("StartToEnd", c) && c.move("character", -1), c.pasteHTML('<span data-mce-type="bookmark" id="' + u + '_end" style="' + m + '">' + h + "</span>"))
					} catch (g) {
						return null
					}
				} else {
					if (p = n.getNode(), f = p.nodeName, "IMG" == f) return {
						name: f,
						index: o(f, p)
					};
					c = a(l.cloneRange()), d || (c.collapse(!1), c.insertNode(r.create("span", {
						"data-mce-type": "bookmark",
						id: u + "_end",
						style: m
					}, h))), l = a(l), l.collapse(!0), l.insertNode(r.create("span", {
						"data-mce-type": "bookmark",
						id: u + "_start",
						style: m
					}, h))
				}
				return n.moveToBookmark({
					id: u,
					keep: 1
				}), {
					id: u
				}
			}, this.moveToBookmark = function(i) {
				function o(e) {
					var t = i[e ? "start" : "end"],
						n, r, o, a;
					if (t) {
						for (o = t[0], r = c, n = t.length - 1; n >= 1; n--) {
							if (a = r.childNodes, t[n] > a.length - 1) return;
							r = a[t[n]]
						}
						3 === r.nodeType && (o = Math.min(t[0], r.nodeValue.length)), 1 === r.nodeType && (o = Math.min(t[0], r.childNodes.length)), e ? l.setStart(r, o) : l.setEnd(r, o)
					}
					return !0
				}

				function a(n) {
					var o = r.get(i.id + "_" + n),
						a, s, l, c, h = i.keep;
					if (o && (a = o.parentNode, "start" == n ? (h ? (a = o.firstChild, s = 1) : s = r.nodeIndex(o), u = d = a, f = p = s) : (h ? (a = o.firstChild, s = 1) : s = r.nodeIndex(o), d = a, p = s), !h)) {
						for (c = o.previousSibling, l = o.nextSibling, t.each(t.grep(o.childNodes), function(e) {
							3 == e.nodeType && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""))
						}); o = r.get(i.id + "_" + n);) r.remove(o, 1);
						c && l && c.nodeType == l.nodeType && 3 == c.nodeType && !e.opera && (s = c.nodeValue.length, c.appendData(l.nodeValue), r.remove(l), "start" == n ? (u = d = c, f = p = s) : (d = c, p = s))
					}
				}

				function s(t) {
					return !r.isBlock(t) || t.innerHTML || e.ie || (t.innerHTML = '<br data-mce-bogus="1" />'), t
				}
				var l, c, u, d, f, p;
				if (i)
					if (i.start) {
						if (l = r.createRng(), c = r.getRoot(), n.tridentSel) return n.tridentSel.moveToBookmark(i);
						o(!0) && o() && n.setRng(l)
					} else i.id ? (a("start"), a("end"), u && (l = r.createRng(), l.setStart(s(u), f), l.setEnd(s(d), p), n.setRng(l))) : i.name ? n.select(r.select(i.name)[i.index]) : i.rng && n.setRng(i.rng)
			}
		}
		return n.isBookmarkNode = function(e) {
			return e && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
		}, n
	}), r(H, [h, A, D, x, L, d, u], function(e, n, r, i, o, a, s) {
		function l(e, t, i, a) {
			var s = this;
			s.dom = e, s.win = t, s.serializer = i, s.editor = a, s.bookmarkManager = new o(s), s.controlSelection = new r(s, a), s.win.getSelection || (s.tridentSel = new n(s))
		}
		var c = s.each,
			u = s.trim,
			d = a.ie;
		return l.prototype = {
			setCursorLocation: function(e, t) {
				var n = this,
					r = n.dom.createRng();
				e ? (r.setStart(e, t), r.setEnd(e, t), n.setRng(r), n.collapse(!1)) : (n._moveEndPoint(r, n.editor.getBody(), !0), n.setRng(r))
			},
			getContent: function(e) {
				var n = this,
					r = n.getRng(),
					i = n.dom.create("body"),
					o = n.getSel(),
					a, s, l;
				return e = e || {}, a = s = "", e.get = !0, e.format = e.format || "html", e.selection = !0, n.editor.fire("BeforeGetContent", e), "text" == e.format ? n.isCollapsed() ? "" : r.text || (o.toString ? o.toString() : "") : (r.cloneContents ? (l = r.cloneContents(), l && i.appendChild(l)) : r.item !== t || r.htmlText !== t ? (i.innerHTML = "<br>" + (r.item ? r.item(0).outerHTML : r.htmlText), i.removeChild(i.firstChild)) : i.innerHTML = r.toString(), /^\s/.test(i.innerHTML) && (a = " "), /\s+$/.test(i.innerHTML) && (s = " "), e.getInner = !0, e.content = n.isCollapsed() ? "" : a + n.serializer.serialize(i, e) + s, n.editor.fire("GetContent", e), e.content)
			},
			setContent: function(e, t) {
				var n = this,
					r = n.getRng(),
					i, o = n.win.document,
					a, s;
				if (t = t || {
					format: "html"
				}, t.set = !0, t.selection = !0, e = t.content = e, t.no_events || n.editor.fire("BeforeSetContent", t), e = t.content, r.insertNode) {
					e += '<span id="__caret">_</span>', r.startContainer == o && r.endContainer == o ? o.body.innerHTML = e : (r.deleteContents(), 0 === o.body.childNodes.length ? o.body.innerHTML = e : r.createContextualFragment ? r.insertNode(r.createContextualFragment(e)) : (a = o.createDocumentFragment(), s = o.createElement("div"), a.appendChild(s), s.outerHTML = e, r.insertNode(a))), i = n.dom.get("__caret"), r = o.createRange(), r.setStartBefore(i), r.setEndBefore(i), n.setRng(r), n.dom.remove("__caret");
					try {
						n.setRng(r)
					} catch (l) {}
				} else r.item && (o.execCommand("Delete", !1, null), r = n.getRng()), /^\s+/.test(e) ? (r.pasteHTML('<span id="__mce_tmp">_</span>' + e), n.dom.remove("__mce_tmp")) : r.pasteHTML(e);
				t.no_events || n.editor.fire("SetContent", t)
			},
			getStart: function(e) {
				var t = this,
					n = t.getRng(),
					r, i, o, a;
				if (n.duplicate || n.item) {
					if (n.item) return n.item(0);
					for (o = n.duplicate(), o.collapse(1), r = o.parentElement(), r.ownerDocument !== t.dom.doc && (r = t.dom.getRoot()), i = a = n.parentElement(); a = a.parentNode;)
						if (a == r) {
							r = i;
							break
						}
					return r
				}
				return r = n.startContainer, 1 == r.nodeType && r.hasChildNodes() && (e && n.collapsed || (r = r.childNodes[Math.min(r.childNodes.length - 1, n.startOffset)])), r && 3 == r.nodeType ? r.parentNode : r
			},
			getEnd: function(e) {
				var t = this,
					n = t.getRng(),
					r, i;
				return n.duplicate || n.item ? n.item ? n.item(0) : (n = n.duplicate(), n.collapse(0), r = n.parentElement(), r.ownerDocument !== t.dom.doc && (r = t.dom.getRoot()), r && "BODY" == r.nodeName ? r.lastChild || r : r) : (r = n.endContainer, i = n.endOffset, 1 == r.nodeType && r.hasChildNodes() && (e && n.collapsed || (r = r.childNodes[i > 0 ? i - 1 : i])), r && 3 == r.nodeType ? r.parentNode : r)
			},
			getBookmark: function(e, t) {
				return this.bookmarkManager.getBookmark(e, t)
			},
			moveToBookmark: function(e) {
				return this.bookmarkManager.moveToBookmark(e)
			},
			select: function(e, t) {
				var n = this,
					r = n.dom,
					i = r.createRng(),
					o;
				if (n.lastFocusBookmark = null, e) {
					if (!t && n.controlSelection.controlSelect(e)) return;
					o = r.nodeIndex(e), i.setStart(e.parentNode, o), i.setEnd(e.parentNode, o + 1), t && (n._moveEndPoint(i, e, !0), n._moveEndPoint(i, e)), n.setRng(i)
				}
				return e
			},
			isCollapsed: function() {
				var e = this,
					t = e.getRng(),
					n = e.getSel();
				return !t || t.item ? !1 : t.compareEndPoints ? 0 === t.compareEndPoints("StartToEnd", t) : !n || t.collapsed
			},
			collapse: function(e) {
				var t = this,
					n = t.getRng(),
					r;
				n.item && (r = n.item(0), n = t.win.document.body.createTextRange(), n.moveToElementText(r)), n.collapse(!!e), t.setRng(n)
			},
			getSel: function() {
				var e = this.win;
				return e.getSelection ? e.getSelection() : e.document.selection
			},
			getRng: function(e) {
				function t(e, t, n) {
					try {
						return t.compareBoundaryPoints(e, n)
					} catch (r) {
						return -1
					}
				}
				var n = this,
					r, i, o, a = n.win.document,
					s;
				if (!e && n.lastFocusBookmark) {
					var l = n.lastFocusBookmark;
					return l.startContainer ? (i = a.createRange(), i.setStart(l.startContainer, l.startOffset), i.setEnd(l.endContainer, l.endOffset)) : i = l, i
				}
				if (e && n.tridentSel) return n.tridentSel.getRangeAt(0);
				try {
					(r = n.getSel()) && (i = r.rangeCount > 0 ? r.getRangeAt(0) : r.createRange ? r.createRange() : a.createRange())
				} catch (c) {}
				if (d && i && i.setStart && a.selection) {
					try {
						s = a.selection.createRange()
					} catch (c) {}
					s && s.item && (o = s.item(0), i = a.createRange(), i.setStartBefore(o), i.setEndAfter(o))
				}
				return i || (i = a.createRange ? a.createRange() : a.body.createTextRange()), i.setStart && 9 === i.startContainer.nodeType && i.collapsed && (o = n.dom.getRoot(), i.setStart(o, 0), i.setEnd(o, 0)), n.selectedRange && n.explicitRange && (0 === t(i.START_TO_START, i, n.selectedRange) && 0 === t(i.END_TO_END, i, n.selectedRange) ? i = n.explicitRange : (n.selectedRange = null, n.explicitRange = null)), i
			},
			setRng: function(e, t) {
				var n = this,
					r;
				if (e)
					if (e.select) try {
						e.select()
					} catch (i) {} else if (n.tridentSel) {
						if (e.cloneRange) try {
							return void n.tridentSel.addRange(e)
						} catch (i) {}
					} else if (r = n.getSel()) {
					n.explicitRange = e;
					try {
						r.removeAllRanges(), r.addRange(e)
					} catch (i) {}
					t === !1 && r.extend && (r.collapse(e.endContainer, e.endOffset), r.extend(e.startContainer, e.startOffset)), n.selectedRange = r.rangeCount > 0 ? r.getRangeAt(0) : null
				}
			},
			setNode: function(e) {
				var t = this;
				return t.setContent(t.dom.getOuterHTML(e)), e
			},
			getNode: function() {
				function e(e, t) {
					for (var n = e; e && 3 === e.nodeType && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling;
					return e || n
				}
				var t = this,
					n = t.getRng(),
					r, i = n.startContainer,
					o = n.endContainer,
					a = n.startOffset,
					s = n.endOffset,
					l = t.dom.getRoot();
				return n ? n.setStart ? (r = n.commonAncestorContainer, !n.collapsed && (i == o && 2 > s - a && i.hasChildNodes() && (r = i.childNodes[a]), 3 === i.nodeType && 3 === o.nodeType && (i = i.length === a ? e(i.nextSibling, !0) : i.parentNode, o = 0 === s ? e(o.previousSibling, !1) : o.parentNode, i && i === o)) ? i : r && 3 == r.nodeType ? r.parentNode : r) : (r = n.item ? n.item(0) : n.parentElement(), r.ownerDocument !== t.win.document && (r = l), r) : l
			},
			getSelectedBlocks: function(t, n) {
				var r = this,
					i = r.dom,
					o, a, s = [];
				if (a = i.getRoot(), t = i.getParent(t || r.getStart(), i.isBlock), n = i.getParent(n || r.getEnd(), i.isBlock), t && t != a && s.push(t), t && n && t != n) {
					o = t;
					for (var l = new e(t, a);
						(o = l.next()) && o != n;) i.isBlock(o) && s.push(o)
				}
				return n && t != n && n != a && s.push(n), s
			},
			isForward: function() {
				var e = this.dom,
					t = this.getSel(),
					n, r;
				return t && t.anchorNode && t.focusNode ? (n = e.createRng(), n.setStart(t.anchorNode, t.anchorOffset), n.collapse(!0), r = e.createRng(), r.setStart(t.focusNode, t.focusOffset), r.collapse(!0), n.compareBoundaryPoints(n.START_TO_START, r) <= 0) : !0
			},
			normalize: function() {
				var e = this,
					t = e.getRng();
				return !d && new i(e.dom).normalize(t) && e.setRng(t, e.isForward()), t
			},
			selectorChanged: function(e, t) {
				var n = this,
					r;
				return n.selectorChangedData || (n.selectorChangedData = {}, r = {}, n.editor.on("NodeChange", function(e) {
					var t = e.element,
						i = n.dom,
						o = i.getParents(t, null, i.getRoot()),
						a = {};
					c(n.selectorChangedData, function(e, t) {
						c(o, function(n) {
							return i.is(n, t) ? (r[t] || (c(e, function(e) {
								e(!0, {
									node: n,
									selector: t,
									parents: o
								})
							}), r[t] = e), a[t] = e, !1) : void 0
						})
					}), c(r, function(e, n) {
						a[n] || (delete r[n], c(e, function(e) {
							e(!1, {
								node: t,
								selector: n,
								parents: o
							})
						}))
					})
				})), n.selectorChangedData[e] || (n.selectorChangedData[e] = []), n.selectorChangedData[e].push(t), n
			},
			getScrollContainer: function() {
				for (var e, t = this.dom.getRoot(); t && "BODY" != t.nodeName;) {
					if (t.scrollHeight > t.clientHeight) {
						e = t;
						break
					}
					t = t.parentNode
				}
				return e
			},
			scrollIntoView: function(e) {
				function t(e) {
					for (var t = 0, n = 0, r = e; r && r.nodeType;) t += r.offsetLeft || 0, n += r.offsetTop || 0, r = r.offsetParent;
					return {
						x: t,
						y: n
					}
				}
				var n, r, i = this,
					o = i.dom,
					a = o.getRoot(),
					s, l;
				if ("BODY" != a.nodeName) {
					var c = i.getScrollContainer();
					if (c) return n = t(e).y - t(c).y, l = c.clientHeight, s = c.scrollTop, void((s > n || n + 25 > s + l) && (c.scrollTop = s > n ? n : n - l + 25))
				}
				r = o.getViewPort(i.editor.getWin()), n = o.getPos(e).y, s = r.y, l = r.h, (n < r.y || n + 25 > s + l) && i.editor.getWin().scrollTo(0, s > n ? n : n - l + 25)
			},
			placeCaretAt: function(e, t) {
				var n = this.editor.getDoc(),
					r, i;
				if (n.caretPositionFromPoint) i = n.caretPositionFromPoint(e, t), r = n.createRange(), r.setStart(i.offsetNode, i.offset), r.collapse(!0);
				else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);
				else if (n.body.createTextRange) {
					r = n.body.createTextRange();
					try {
						r.moveToPoint(e, t), r.collapse(!0)
					} catch (o) {
						r.collapse(t < n.body.clientHeight)
					}
				}
				this.setRng(r)
			},
			_moveEndPoint: function(t, n, r) {
				var i = n,
					o = new e(n, i),
					s = this.dom.schema.getNonEmptyElements();
				do {
					if (3 == n.nodeType && 0 !== u(n.nodeValue).length) return void(r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
					if (s[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName)) return void(r ? t.setStartBefore(n) : "BR" == n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n));
					if (a.ie && a.ie < 11 && this.dom.isBlock(n) && this.dom.isEmpty(n)) return void(r ? t.setStart(n, 0) : t.setEnd(n, 0))
				} while (n = r ? o.next() : o.prev());
				"BODY" == i.nodeName && (r ? t.setStart(i, 0) : t.setEnd(i, i.childNodes.length))
			},
			destroy: function() {
				this.win = null, this.controlSelection.destroy()
			}
		}, l
	}), r(M, [L, u], function(e, t) {
		function n(t) {
			this.compare = function(n, i) {
				function o(e) {
					var n = {};
					return r(t.getAttribs(e), function(r) {
						var i = r.nodeName.toLowerCase();
						0 !== i.indexOf("_") && "style" !== i && "data-mce-style" !== i && (n[i] = t.getAttrib(e, i))
					}), n
				}

				function a(e, t) {
					var n, r;
					for (r in e)
						if (e.hasOwnProperty(r)) {
							if (n = t[r], "undefined" == typeof n) return !1;
							if (e[r] != n) return !1;
							delete t[r]
						}
					for (r in t)
						if (t.hasOwnProperty(r)) return !1;
					return !0
				}
				return n.nodeName != i.nodeName ? !1 : a(o(n), o(i)) && a(t.parseStyle(t.getAttrib(n, "style")), t.parseStyle(t.getAttrib(i, "style"))) ? !e.isBookmarkNode(n) && !e.isBookmarkNode(i) : !1
			}
		}
		var r = t.each;
		return n
	}), r(P, [u], function(e) {
		function t(e, t) {
			function r(e) {
				return e.replace(/%(\w+)/g, "")
			}
			var i, o, a = e.dom,
				s = "",
				l, c;
			if (c = e.settings.preview_styles, c === !1) return "";
			if (c || (c = "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"), "string" == typeof t) {
				if (t = e.formatter.get(t), !t) return;
				t = t[0]
			}
			return i = t.block || t.inline || "span", o = a.create(i), n(t.styles, function(e, t) {
				e = r(e), e && a.setStyle(o, t, e)
			}), n(t.attributes, function(e, t) {
				e = r(e), e && a.setAttrib(o, t, e)
			}), n(t.classes, function(e) {
				e = r(e), a.hasClass(o, e) || a.addClass(o, e)
			}), e.fire("PreviewFormats"), a.setStyles(o, {
				position: "absolute",
				left: -65535
			}), e.getBody().appendChild(o), l = a.getStyle(e.getBody(), "fontSize", !0), l = /px$/.test(l) ? parseInt(l, 10) : 0, n(c.split(" "), function(t) {
				var n = a.getStyle(o, t, !0);
				if (!("background-color" == t && /transparent|rgba\s*\([^)]+,\s*0\)/.test(n) && (n = a.getStyle(e.getBody(), t, !0), "#ffffff" == a.toHex(n).toLowerCase()) || "color" == t && "#000000" == a.toHex(n).toLowerCase())) {
					if ("font-size" == t && /em|%$/.test(n)) {
						if (0 === l) return;
						n = parseFloat(n, 10) / (/%$/.test(n) ? 100 : 1), n = n * l + "px"
					}
					"border" == t && n && (s += "padding:0 2px;"), s += t + ":" + n + ";"
				}
			}), e.fire("AfterPreviewFormats"), a.remove(o), s
		}
		var n = e.each;
		return {
			getCssText: t
		}
	}), r(O, [h, x, L, M, u, P], function(e, t, n, r, i, o) {
		return function(a) {
			function s(e) {
				return e.nodeType && (e = e.nodeName), !!a.schema.getTextBlockElements()[e.toLowerCase()]
			}

			function l(e, t) {
				return U.getParents(e, t, U.getRoot())
			}

			function c(e) {
				return 1 === e.nodeType && "_mce_caret" === e.id
			}

			function u() {
				p({
					valigntop: [{
						selector: "td,th",
						styles: {
							verticalAlign: "top"
						}
					}],
					valignmiddle: [{
						selector: "td,th",
						styles: {
							verticalAlign: "middle"
						}
					}],
					valignbottom: [{
						selector: "td,th",
						styles: {
							verticalAlign: "bottom"
						}
					}],
					alignleft: [{
						selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
						styles: {
							textAlign: "left"
						},
						defaultBlock: "div"
					}, {
						selector: "img,table",
						collapsed: !1,
						styles: {
							"float": "left"
						}
					}],
					aligncenter: [{
						selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
						styles: {
							textAlign: "center"
						},
						defaultBlock: "div"
					}, {
						selector: "img",
						collapsed: !1,
						styles: {
							display: "block",
							marginLeft: "auto",
							marginRight: "auto"
						}
					}, {
						selector: "table",
						collapsed: !1,
						styles: {
							marginLeft: "auto",
							marginRight: "auto"
						}
					}],
					alignright: [{
						selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
						styles: {
							textAlign: "right"
						},
						defaultBlock: "div"
					}, {
						selector: "img,table",
						collapsed: !1,
						styles: {
							"float": "right"
						}
					}],
					alignjustify: [{
						selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
						styles: {
							textAlign: "justify"
						},
						defaultBlock: "div"
					}],
					bold: [{
						inline: "strong",
						remove: "all"
					}, {
						inline: "span",
						styles: {
							fontWeight: "bold"
						}
					}, {
						inline: "b",
						remove: "all"
					}],
					italic: [{
						inline: "em",
						remove: "all"
					}, {
						inline: "span",
						styles: {
							fontStyle: "italic"
						}
					}, {
						inline: "i",
						remove: "all"
					}],
					underline: [{
						inline: "span",
						styles: {
							textDecoration: "underline"
						},
						exact: !0
					}, {
						inline: "u",
						remove: "all"
					}],
					strikethrough: [{
						inline: "span",
						styles: {
							textDecoration: "line-through"
						},
						exact: !0
					}, {
						inline: "strike",
						remove: "all"
					}],
					forecolor: {
						inline: "span",
						styles: {
							color: "%value"
						},
						links: !0,
						remove_similar: !0
					},
					hilitecolor: {
						inline: "span",
						styles: {
							backgroundColor: "%value"
						},
						links: !0,
						remove_similar: !0
					},
					fontname: {
						inline: "span",
						styles: {
							fontFamily: "%value"
						}
					},
					fontsize: {
						inline: "span",
						styles: {
							fontSize: "%value"
						}
					},
					fontsize_class: {
						inline: "span",
						attributes: {
							"class": "%value"
						}
					},
					blockquote: {
						block: "blockquote",
						wrapper: 1,
						remove: "all"
					},
					subscript: {
						inline: "sub"
					},
					superscript: {
						inline: "sup"
					},
					code: {
						inline: "code"
					},
					link: {
						inline: "a",
						selector: "a",
						remove: "all",
						split: !0,
						deep: !0,
						onmatch: function() {
							return !0
						},
						onformat: function(e, t, n) {
							at(n, function(t, n) {
								U.setAttrib(e, n, t)
							})
						}
					},
					removeformat: [{
						selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q",
						remove: "all",
						split: !0,
						expand: !1,
						block_expand: !0,
						deep: !0
					}, {
						selector: "span",
						attributes: ["style", "class"],
						remove: "empty",
						split: !0,
						expand: !1,
						deep: !0
					}, {
						selector: "*",
						attributes: ["style", "class"],
						split: !1,
						expand: !1,
						deep: !0
					}]
				}), at("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function(e) {
					p(e, {
						block: e,
						remove: "all"
					})
				}), p(a.settings.formats)
			}

			function d() {
				a.addShortcut("ctrl+b", "bold_desc", "Bold"), a.addShortcut("ctrl+i", "italic_desc", "Italic"), a.addShortcut("ctrl+u", "underline_desc", "Underline");
				for (var e = 1; 6 >= e; e++) a.addShortcut("ctrl+" + e, "", ["FormatBlock", !1, "h" + e]);
				a.addShortcut("ctrl+7", "", ["FormatBlock", !1, "p"]), a.addShortcut("ctrl+8", "", ["FormatBlock", !1, "div"]), a.addShortcut("ctrl+9", "", ["FormatBlock", !1, "address"])
			}

			function f(e) {
				return e ? V[e] : V
			}

			function p(e, t) {
				e && ("string" != typeof e ? at(e, function(e, t) {
					p(t, e)
				}) : (t = t.length ? t : [t], at(t, function(e) {
					e.deep === tt && (e.deep = !e.selector), e.split === tt && (e.split = !e.selector || e.inline), e.remove === tt && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/))
				}), V[e] = t))
			}

			function h(e) {
				return e && V[e] && delete V[e], V
			}

			function m(e) {
				var t;
				return a.dom.getParent(e, function(e) {
					return t = a.dom.getStyle(e, "text-decoration"), t && "none" !== t
				}), t
			}

			function g(e) {
				var t;
				1 === e.nodeType && e.parentNode && 1 === e.parentNode.nodeType && (t = m(e.parentNode), a.dom.getStyle(e, "color") && t ? a.dom.setStyle(e, "text-decoration", t) : a.dom.getStyle(e, "textdecoration") === t && a.dom.setStyle(e, "text-decoration", null))
			}

			function v(t, n, r) {
				function i(e, t) {
					if (t = t || d, e) {
						if (t.onformat && t.onformat(e, t, n, r), at(t.styles, function(t, r) {
							U.setStyle(e, r, A(t, n))
						}), t.styles) {
							var i = U.getAttrib(e, "style");
							i && e.setAttribute("data-mce-style", i)
						}
						at(t.attributes, function(t, r) {
							U.setAttrib(e, r, A(t, n))
						}), at(t.classes, function(t) {
							t = A(t, n), U.hasClass(e, t) || U.addClass(e, t)
						})
					}
				}

				function o() {
					function t(t, n) {
						var i = new e(n);
						for (r = i.current(); r; r = i.prev())
							if (r.childNodes.length > 1 || r == t || "BR" == r.tagName) return r
					}
					var n = a.selection.getRng(),
						i = n.startContainer,
						o = n.endContainer;
					if (i != o && 0 === n.endOffset) {
						var s = t(i, o),
							l = 3 == s.nodeType ? s.length : s.childNodes.length;
						n.setEnd(s, l)
					}
					return n
				}

				function l(e, r, o) {
					var a = [],
						l, f, p = !0;
					l = d.inline || d.block, f = U.create(l), i(f), q.walk(e, function(e) {
						function r(e) {
							var g, v, y, b, x;
							return x = p, g = e.nodeName.toLowerCase(), v = e.parentNode.nodeName.toLowerCase(), 1 === e.nodeType && nt(e) && (x = p, p = "true" === nt(e), b = !0), S(g, "br") ? (h = 0, void(d.block && U.remove(e))) : d.wrapper && C(e, t, n) ? void(h = 0) : p && !b && d.block && !d.wrapper && s(g) && j(v, l) ? (e = U.rename(e, l), i(e), a.push(e), void(h = 0)) : d.selector && (at(u, function(t) {
								"collapsed" in t && t.collapsed !== m || U.is(e, t.selector) && !c(e) && (i(e, t), y = !0)
							}), !d.inline || y) ? void(h = 0) : void(!p || b || !j(l, g) || !j(v, l) || !o && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || c(e) || d.inline && Y(e) ? (h = 0, at(st(e.childNodes), r), b && (p = x), h = 0) : (h || (h = U.clone(f, Q), e.parentNode.insertBefore(h, e), a.push(h)), h.appendChild(e)))
						}
						var h;
						at(e, r)
					}), d.links === !0 && at(a, function(e) {
						function t(e) {
							"A" === e.nodeName && i(e, d), at(st(e.childNodes), t)
						}
						t(e)
					}), at(a, function(e) {
						function r(e) {
							var t = 0;
							return at(e.childNodes, function(e) {
								B(e) || ot(e) || t++
							}), t
						}

						function o(e) {
							var t, n;
							return at(e.childNodes, function(e) {
								return 1 != e.nodeType || ot(e) || c(e) ? void 0 : (t = e, Q)
							}), t && !ot(t) && k(t, d) && (n = U.clone(t, Q), i(n), U.replace(n, e, Z), U.remove(t, 1)), n || e
						}
						var s;
						if (s = r(e), (a.length > 1 || !Y(e)) && 0 === s) return void U.remove(e, 1);
						if (d.inline || d.wrapper) {
							if (d.exact || 1 !== s || (e = o(e)), at(u, function(t) {
								at(U.select(t.inline, e), function(e) {
									ot(e) || M(t, n, e, t.exact ? e : null)
								})
							}), C(e.parentNode, t, n)) return U.remove(e, 1), e = 0, Z;
							d.merge_with_parents && U.getParent(e.parentNode, function(r) {
								return C(r, t, n) ? (U.remove(e, 1), e = 0, Z) : void 0
							}), e && d.merge_siblings !== !1 && (e = I(O(e), e), e = I(e, O(e, Z)))
						}
					})
				}
				var u = f(t),
					d = u[0],
					p, h, m = !r && $.isCollapsed();
				if (d)
					if (r) r.nodeType ? (h = U.createRng(), h.setStartBefore(r), h.setEndAfter(r), l(L(h, u), null, !0)) : l(r, null, !0);
					else if (m && d.inline && !U.select("td.mce-item-selected,th.mce-item-selected").length) z("apply", t, n);
				else {
					var y = a.selection.getNode();
					K || !u[0].defaultBlock || U.getParent(y, U.isBlock) || v(u[0].defaultBlock), a.selection.setRng(o()), p = $.getBookmark(), l(L($.getRng(Z), u), p), d.styles && (d.styles.color || d.styles.textDecoration) && (lt(y, g, "childNodes"), g(y)), $.moveToBookmark(p), W($.getRng(Z)), a.nodeChanged()
				}
			}

			function y(e, t, n, r) {
				function i(e) {
					var n, r, o, a, s;
					if (1 === e.nodeType && nt(e) && (a = y, y = "true" === nt(e), s = !0), n = st(e.childNodes), y && !s)
						for (r = 0, o = p.length; o > r && !M(p[r], t, e, e); r++);
					if (h.deep && n.length) {
						for (r = 0, o = n.length; o > r; r++) i(n[r]);
						s && (y = a)
					}
				}

				function o(n) {
					var i;
					return at(l(n.parentNode).reverse(), function(n) {
						var o;
						i || "_start" == n.id || "_end" == n.id || (o = C(n, e, t, r), o && o.split !== !1 && (i = n))
					}), i
				}

				function s(e, n, r, i) {
					var o, a, s, l, c, u;
					if (e) {
						for (u = e.parentNode, o = n.parentNode; o && o != u; o = o.parentNode) {
							for (a = U.clone(o, Q), c = 0; c < p.length; c++)
								if (M(p[c], t, a, a)) {
									a = 0;
									break
								}
							a && (s && a.appendChild(s), l || (l = a), s = a)
						}!i || h.mixed && Y(e) || (n = U.split(e, n)), s && (r.parentNode.insertBefore(s, r), l.appendChild(r))
					}
					return n
				}

				function c(e) {
					return s(o(e), e, e, !0)
				}

				function u(e) {
					var t = U.get(e ? "_start" : "_end"),
						n = t[e ? "firstChild" : "lastChild"];
					return ot(n) && (n = n[e ? "firstChild" : "lastChild"]), U.remove(t, !0), n
				}

				function d(e) {
					var t, n, r = e.commonAncestorContainer;
					e = L(e, p, Z), h.split && (t = F(e, Z), n = F(e), t != n ? (/^(TR|TH|TD)$/.test(t.nodeName) && t.firstChild && (t = "TR" == t.nodeName ? t.firstChild.firstChild || t : t.firstChild || t), r && /^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName) && /^(TH|TD)$/.test(n.nodeName) && n.firstChild && (n = n.firstChild || n), t = D(t, "span", {
						id: "_start",
						"data-mce-type": "bookmark"
					}), n = D(n, "span", {
						id: "_end",
						"data-mce-type": "bookmark"
					}), c(t), c(n), t = u(Z), n = u()) : t = n = c(t), e.startContainer = t.parentNode, e.startOffset = G(t), e.endContainer = n.parentNode, e.endOffset = G(n) + 1), q.walk(e, function(e) {
						at(e, function(e) {
							i(e), 1 === e.nodeType && "underline" === a.dom.getStyle(e, "text-decoration") && e.parentNode && "underline" === m(e.parentNode) && M({
								deep: !1,
								exact: !0,
								inline: "span",
								styles: {
									textDecoration: "underline"
								}
							}, null, e)
						})
					})
				}
				var p = f(e),
					h = p[0],
					g, v, y = !0;
				return n ? void(n.nodeType ? (v = U.createRng(), v.setStartBefore(n), v.setEndAfter(n), d(v)) : d(n)) : void($.isCollapsed() && h.inline && !U.select("td.mce-item-selected,th.mce-item-selected").length ? z("remove", e, t, r) : (g = $.getBookmark(), d($.getRng(Z)), $.moveToBookmark(g), h.inline && x(e, t, $.getStart()) && W($.getRng(!0)), a.nodeChanged()))
			}

			function b(e, t, n) {
				var r = f(e);
				!x(e, t, n) || "toggle" in r[0] && !r[0].toggle ? v(e, t, n) : y(e, t, n)
			}

			function C(e, t, n, r) {
				function i(e, t, i) {
					var o, a, s = t[i],
						l;
					if (t.onmatch) return t.onmatch(e, t, i);
					if (s)
						if (s.length === tt) {
							for (o in s)
								if (s.hasOwnProperty(o)) {
									if (a = "attributes" === i ? U.getAttrib(e, o) : T(e, o), r && !a && !t.exact) return;
									if ((!r || t.exact) && !S(a, R(A(s[o], n), o))) return
								}
						} else
							for (l = 0; l < s.length; l++)
								if ("attributes" === i ? U.getAttrib(e, s[l]) : T(e, s[l])) return t;
					return t
				}
				var o = f(t),
					a, s, l;
				if (o && e)
					for (s = 0; s < o.length; s++)
						if (a = o[s], k(e, a) && i(e, a, "attributes") && i(e, a, "styles")) {
							if (l = a.classes)
								for (s = 0; s < l.length; s++)
									if (!U.hasClass(e, l[s])) return;
							return a
						}
			}

			function x(e, t, n) {
				function r(n) {
					var r = U.getRoot();
					return n === r ? !1 : (n = U.getParent(n, function(n) {
						return n.parentNode === r || !!C(n, e, t, !0)
					}), C(n, e, t))
				}
				var i;
				return n ? r(n) : (n = $.getNode(), r(n) ? Z : (i = $.getStart(), i != n && r(i) ? Z : Q))
			}

			function w(e, t) {
				var n, r = [],
					i = {};
				return n = $.getStart(), U.getParent(n, function(n) {
					var o, a;
					for (o = 0; o < e.length; o++) a = e[o], !i[a] && C(n, a, t) && (i[a] = !0, r.push(a))
				}, U.getRoot()), r
			}

			function _(e) {
				var t = f(e),
					n, r, i, o, a;
				if (t)
					for (n = $.getStart(), r = l(n), o = t.length - 1; o >= 0; o--) {
						if (a = t[o].selector, !a || t[o].defaultBlock) return Z;
						for (i = r.length - 1; i >= 0; i--)
							if (U.is(r[i], a)) return Z
					}
				return Q
			}

			function E(e, t, n) {
				var r;
				return et || (et = {}, r = {}, a.on("NodeChange", function(e) {
					var t = l(e.element),
						n = {};
					t = i.grep(t, function(e) {
						return 1 == e.nodeType && !e.getAttribute("data-mce-bogus")
					}), at(et, function(e, i) {
						at(t, function(o) {
							return C(o, i, {}, e.similar) ? (r[i] || (at(e, function(e) {
								e(!0, {
									node: o,
									format: i,
									parents: t
								})
							}), r[i] = e), n[i] = e, !1) : void 0
						})
					}), at(r, function(i, o) {
						n[o] || (delete r[o], at(i, function(n) {
							n(!1, {
								node: e.element,
								format: o,
								parents: t
							})
						}))
					})
				})), at(e.split(","), function(e) {
					et[e] || (et[e] = [], et[e].similar = n), et[e].push(t)
				}), this
			}

			function N(e) {
				return o.getCssText(a, e)
			}

			function k(e, t) {
				return S(e, t.inline) ? Z : S(e, t.block) ? Z : t.selector ? 1 == e.nodeType && U.is(e, t.selector) : void 0
			}

			function S(e, t) {
				return e = e || "", t = t || "", e = "" + (e.nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() == t.toLowerCase()
			}

			function T(e, t) {
				return R(U.getStyle(e, t), t)
			}

			function R(e, t) {
				return ("color" == t || "backgroundColor" == t) && (e = U.toHex(e)), "fontWeight" == t && 700 == e && (e = "bold"), "fontFamily" == t && (e = e.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + e
			}

			function A(e, t) {
				return "string" != typeof e ? e = e(t) : t && (e = e.replace(/%(\w+)/g, function(e, n) {
					return t[n] || e
				})), e
			}

			function B(e) {
				return e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
			}

			function D(e, t, n) {
				var r = U.create(t, n);
				return e.parentNode.insertBefore(r, e), r.appendChild(e), r
			}

			function L(t, n, r) {
				function i(e) {
					function t(e) {
						return "BR" == e.nodeName && e.getAttribute("data-mce-bogus") && !e.nextSibling
					}
					var r, i, o, a, s;
					if (r = i = e ? g : y, a = e ? "previousSibling" : "nextSibling", s = U.getRoot(), 3 == r.nodeType && !B(r) && (e ? v > 0 : b < r.nodeValue.length)) return r;
					for (;;) {
						if (!n[0].block_expand && Y(i)) return i;
						for (o = i[a]; o; o = o[a])
							if (!ot(o) && !B(o) && !t(o)) return i;
						if (i.parentNode == s) {
							r = i;
							break
						}
						i = i.parentNode
					}
					return r
				}

				function o(e, t) {
					for (t === tt && (t = 3 === e.nodeType ? e.length : e.childNodes.length); e && e.hasChildNodes();) e = e.childNodes[t], e && (t = 3 === e.nodeType ? e.length : e.childNodes.length);
					return {
						node: e,
						offset: t
					}
				}

				function c(e) {
					for (var t = e; t;) {
						if (1 === t.nodeType && nt(t)) return "false" === nt(t) ? t : e;
						t = t.parentNode
					}
					return e
				}

				function u(t, n, i) {
					function o(e, t) {
						var n, o, a = e.nodeValue;
						return "undefined" == typeof t && (t = i ? a.length : 0), i ? (n = a.lastIndexOf(" ", t), o = a.lastIndexOf("\xa0", t), n = n > o ? n : o, -1 === n || r || n++) : (n = a.indexOf(" ", t), o = a.indexOf("\xa0", t), n = -1 !== n && (-1 === o || o > n) ? n : o), n
					}
					var s, l, c, u;
					if (3 === t.nodeType) {
						if (c = o(t, n), -1 !== c) return {
							container: t,
							offset: c
						};
						u = t
					}
					for (s = new e(t, U.getParent(t, Y) || a.getBody()); l = s[i ? "prev" : "next"]();)
						if (3 === l.nodeType) {
							if (u = l, c = o(l), -1 !== c) return {
								container: l,
								offset: c
							}
						} else if (Y(l)) break;
					return u ? (n = i ? 0 : u.length, {
						container: u,
						offset: n
					}) : void 0
				}

				function d(e, r) {
					var i, o, a, s;
					for (3 == e.nodeType && 0 === e.nodeValue.length && e[r] && (e = e[r]), i = l(e), o = 0; o < i.length; o++)
						for (a = 0; a < n.length; a++)
							if (s = n[a], !("collapsed" in s && s.collapsed !== t.collapsed) && U.is(i[o], s.selector)) return i[o];
					return e
				}

				function f(e, t) {
					var r, i = U.getRoot();
					if (n[0].wrapper || (r = U.getParent(e, n[0].block, i)), r || (r = U.getParent(3 == e.nodeType ? e.parentNode : e, function(e) {
						return e != i && s(e)
					})), r && n[0].wrapper && (r = l(r, "ul,ol").reverse()[0] || r), !r)
						for (r = e; r[t] && !Y(r[t]) && (r = r[t], !S(r, "br")););
					return r || e
				}
				var p, h, m, g = t.startContainer,
					v = t.startOffset,
					y = t.endContainer,
					b = t.endOffset;
				if (1 == g.nodeType && g.hasChildNodes() && (p = g.childNodes.length - 1, g = g.childNodes[v > p ? p : v], 3 == g.nodeType && (v = 0)), 1 == y.nodeType && y.hasChildNodes() && (p = y.childNodes.length - 1, y = y.childNodes[b > p ? p : b - 1], 3 == y.nodeType && (b = y.nodeValue.length)), g = c(g), y = c(y), (ot(g.parentNode) || ot(g)) && (g = ot(g) ? g : g.parentNode, g = g.nextSibling || g, 3 == g.nodeType && (v = 0)), (ot(y.parentNode) || ot(y)) && (y = ot(y) ? y : y.parentNode, y = y.previousSibling || y, 3 == y.nodeType && (b = y.length)), n[0].inline && (t.collapsed && (m = u(g, v, !0), m && (g = m.container, v = m.offset), m = u(y, b), m && (y = m.container, b = m.offset)), h = o(y, b), h.node)) {
					for (; h.node && 0 === h.offset && h.node.previousSibling;) h = o(h.node.previousSibling);
					h.node && h.offset > 0 && 3 === h.node.nodeType && " " === h.node.nodeValue.charAt(h.offset - 1) && h.offset > 1 && (y = h.node, y.splitText(h.offset - 1))
				}
				return (n[0].inline || n[0].block_expand) && (n[0].inline && 3 == g.nodeType && 0 !== v || (g = i(!0)), n[0].inline && 3 == y.nodeType && b !== y.nodeValue.length || (y = i())), n[0].selector && n[0].expand !== Q && !n[0].inline && (g = d(g, "previousSibling"), y = d(y, "nextSibling")), (n[0].block || n[0].selector) && (g = f(g, "previousSibling"), y = f(y, "nextSibling"), n[0].block && (Y(g) || (g = i(!0)), Y(y) || (y = i()))), 1 == g.nodeType && (v = G(g), g = g.parentNode), 1 == y.nodeType && (b = G(y) + 1, y = y.parentNode), {
					startContainer: g,
					startOffset: v,
					endContainer: y,
					endOffset: b
				}
			}

			function H(e, t) {
				return t.links && "A" == e.tagName
			}

			function M(e, t, n, r) {
				var i, o, a;
				if (!k(n, e) && !H(n, e)) return Q;
				if ("all" != e.remove)
					for (at(e.styles, function(i, o) {
						i = R(A(i, t), o), "number" == typeof o && (o = i, r = 0), (e.remove_similar || !r || S(T(r, o), i)) && U.setStyle(n, o, ""), a = 1
					}), a && "" === U.getAttrib(n, "style") && (n.removeAttribute("style"), n.removeAttribute("data-mce-style")), at(e.attributes, function(e, i) {
						var o;
						if (e = A(e, t), "number" == typeof i && (i = e, r = 0), !r || S(U.getAttrib(r, i), e)) {
							if ("class" == i && (e = U.getAttrib(n, i), e && (o = "", at(e.split(/\s+/), function(e) {
								/mce\w+/.test(e) && (o += (o ? " " : "") + e)
							}), o))) return void U.setAttrib(n, i, o);
							"class" == i && n.removeAttribute("className"), J.test(i) && n.removeAttribute("data-mce-" + i), n.removeAttribute(i)
						}
					}), at(e.classes, function(e) {
						e = A(e, t), (!r || U.hasClass(r, e)) && U.removeClass(n, e)
					}), o = U.getAttribs(n), i = 0; i < o.length; i++)
						if (0 !== o[i].nodeName.indexOf("_")) return Q;
				return "none" != e.remove ? (P(n, e), Z) : void 0
			}

			function P(e, t) {
				function n(e, t, n) {
					return e = O(e, t, n), !e || "BR" == e.nodeName || Y(e)
				}
				var r = e.parentNode,
					i;
				t.block && (K ? r == U.getRoot() && (t.list_block && S(e, t.list_block) || at(st(e.childNodes), function(e) {
					j(K, e.nodeName.toLowerCase()) ? i ? i.appendChild(e) : (i = D(e, K), U.setAttribs(i, a.settings.forced_root_block_attrs)) : i = 0
				})) : Y(e) && !Y(r) && (n(e, Q) || n(e.firstChild, Z, 1) || e.insertBefore(U.create("br"), e.firstChild), n(e, Z) || n(e.lastChild, Q, 1) || e.appendChild(U.create("br")))), t.selector && t.inline && !S(t.inline, e) || U.remove(e, 1)
			}

			function O(e, t, n) {
				if (e)
					for (t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t]; e; e = e[t])
						if (1 == e.nodeType || !B(e)) return e
			}

			function I(e, t) {
				function n(e, t) {
					for (i = e; i; i = i[t]) {
						if (3 == i.nodeType && 0 !== i.nodeValue.length) return e;
						if (1 == i.nodeType && !ot(i)) return i
					}
					return e
				}
				var i, o, a = new r(U);
				if (e && t && (e = n(e, "previousSibling"), t = n(t, "nextSibling"), a.compare(e, t))) {
					for (i = e.nextSibling; i && i != t;) o = i, i = i.nextSibling, e.appendChild(o);
					return U.remove(t), at(st(t.childNodes), function(t) {
						e.appendChild(t)
					}), e
				}
				return t
			}

			function F(t, n) {
				var r, i, o;
				return r = t[n ? "startContainer" : "endContainer"], i = t[n ? "startOffset" : "endOffset"], 1 == r.nodeType && (o = r.childNodes.length - 1, !n && i && i--, r = r.childNodes[i > o ? o : i]), 3 === r.nodeType && n && i >= r.nodeValue.length && (r = new e(r, a.getBody()).next() || r), 3 !== r.nodeType || n || 0 !== i || (r = new e(r, a.getBody()).prev() || r), r
			}

			function z(t, n, r, i) {
				function o(e) {
					var t = U.create("span", {
						id: g,
						"data-mce-bogus": !0,
						style: b ? "color:red" : ""
					});
					return e && t.appendChild(a.getDoc().createTextNode(X)), t
				}

				function l(e, t) {
					for (; e;) {
						if (3 === e.nodeType && e.nodeValue !== X || e.childNodes.length > 1) return !1;
						t && 1 === e.nodeType && t.push(e), e = e.firstChild
					}
					return !0
				}

				function c(e) {
					for (; e;) {
						if (e.id === g) return e;
						e = e.parentNode
					}
				}

				function u(t) {
					var n;
					if (t)
						for (n = new e(t, t), t = n.current(); t; t = n.next())
							if (3 === t.nodeType) return t
				}

				function d(e, t) {
					var n, r;
					if (e) r = $.getRng(!0), l(e) ? (t !== !1 && (r.setStartBefore(e), r.setEndBefore(e)), U.remove(e)) : (n = u(e), n.nodeValue.charAt(0) === X && (n.deleteData(0, 1), r.startContainer == n && r.startOffset > 0 && r.setStart(n, r.startOffset - 1), r.endContainer == n && r.endOffset > 0 && r.setEnd(n, r.endOffset - 1)), U.remove(e, 1)), $.setRng(r);
					else if (e = c($.getStart()), !e)
						for (; e = U.get(g);) d(e, !1)
				}

				function p() {
					var e, t, i, a, s, l, d;
					e = $.getRng(!0), a = e.startOffset, l = e.startContainer, d = l.nodeValue, t = c($.getStart()), t && (i = u(t)), d && a > 0 && a < d.length && /\w/.test(d.charAt(a)) && /\w/.test(d.charAt(a - 1)) ? (s = $.getBookmark(), e.collapse(!0), e = L(e, f(n)), e = q.split(e), v(n, r, e), $.moveToBookmark(s)) : (t && i.nodeValue === X ? v(n, r, t) : (t = o(!0), i = t.firstChild, e.insertNode(t), a = 1, v(n, r, t)), $.setCursorLocation(i, a))
				}

				function h() {
					var e = $.getRng(!0),
						t, a, l, c, u, d, p = [],
						h, m;
					for (t = e.startContainer, a = e.startOffset, u = t, 3 == t.nodeType && (a != t.nodeValue.length && (c = !0), u = u.parentNode); u;) {
						if (C(u, n, r, i)) {
							d = u;
							break
						}
						u.nextSibling && (c = !0), p.push(u), u = u.parentNode
					}
					if (d)
						if (c) l = $.getBookmark(), e.collapse(!0), e = L(e, f(n), !0), e = q.split(e), y(n, r, e), $.moveToBookmark(l);
						else {
							for (m = o(), u = m, h = p.length - 1; h >= 0; h--) u.appendChild(U.clone(p[h], !1)), u = u.firstChild;
							u.appendChild(U.doc.createTextNode(X)), u = u.firstChild;
							var g = U.getParent(d, s);
							g && U.isEmpty(g) ? d.parentNode.replaceChild(m, d) : U.insertAfter(m, d), $.setCursorLocation(u, 1), U.isEmpty(d) && U.remove(d)
						}
				}

				function m() {
					var e;
					e = c($.getStart()), e && !U.isEmpty(e) && lt(e, function(e) {
						1 != e.nodeType || e.id === g || U.isEmpty(e) || U.setAttrib(e, "data-mce-bogus", null)
					}, "childNodes")
				}
				var g = "_mce_caret",
					b = a.settings.caret_debug;
				a._hasCaretEvents || (it = function() {
					var e = [],
						t;
					if (l(c($.getStart()), e))
						for (t = e.length; t--;) U.setAttrib(e[t], "data-mce-bogus", "1")
				}, rt = function(e) {
					var t = e.keyCode;
					d(), (8 == t || 37 == t || 39 == t) && d(c($.getStart())), m()
				}, a.on("SetContent", function(e) {
					e.selection && m()
				}), a._hasCaretEvents = !0), "apply" == t ? p() : h()
			}

			function W(t) {
				var n = t.startContainer,
					r = t.startOffset,
					i, o, a, s, l;
				if (3 == n.nodeType && r >= n.nodeValue.length && (r = G(n), n = n.parentNode, i = !0), 1 == n.nodeType)
					for (s = n.childNodes, n = s[Math.min(r, s.length - 1)], o = new e(n, U.getParent(n, U.isBlock)), (r > s.length - 1 || i) && o.next(), a = o.current(); a; a = o.next())
						if (3 == a.nodeType && !B(a)) return l = U.create("a", {
							"data-mce-bogus": "all"
						}, X), a.parentNode.insertBefore(l, a), t.setStart(a, 0), $.setRng(t), void U.remove(l)
			}
			var V = {},
				U = a.dom,
				$ = a.selection,
				q = new t(U),
				j = a.schema.isValidChild,
				Y = U.isBlock,
				K = a.settings.forced_root_block,
				G = U.nodeIndex,
				X = "\ufeff",
				J = /^(src|href|style)$/,
				Q = !1,
				Z = !0,
				et, tt, nt = U.getContentEditable,
				rt, it, ot = n.isBookmarkNode,
				at = i.each,
				st = i.grep,
				lt = i.walk,
				ct = i.extend;
			ct(this, {
				get: f,
				register: p,
				unregister: h,
				apply: v,
				remove: y,
				toggle: b,
				match: x,
				matchAll: w,
				matchNode: C,
				canApply: _,
				formatChanged: E,
				getCssText: N
			}), u(), d(), a.on("BeforeGetContent", function(e) {
				it && "raw" != e.format && it()
			}), a.on("mouseup keydown", function(e) {
				rt && rt(e)
			})
		}
	}), r(I, [d, u, N], function(e, t, n) {
		var r = t.trim,
			i;
		return i = new RegExp(["<span[^>]+data-mce-bogus[^>]+>[\u200b\ufeff]+<\\/span>", '\\s?data-mce-selected="[^"]+"'].join("|"), "gi"),
			function(t) {
				function o() {
					var e = t.getContent({
							format: "raw",
							no_events: 1
						}),
						o = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
						a, s, l, c, u, d = t.schema;
					for (e = e.replace(i, ""), u = d.getShortEndedElements(); c = o.exec(e);) s = o.lastIndex, l = c[0].length, a = u[c[1]] ? s : n.findEndTag(d, e, s), e = e.substring(0, s - l) + e.substring(a), o.lastIndex = s - l;
					return r(e)
				}

				function a(e) {
					s.typing = !1, s.add({}, e)
				}
				var s = this,
					l = 0,
					c = [],
					u, d, f = 0;
				return t.on("init", function() {
					s.add()
				}), t.on("BeforeExecCommand", function(e) {
					var t = e.command;
					"Undo" != t && "Redo" != t && "mceRepaint" != t && s.beforeChange()
				}), t.on("ExecCommand", function(e) {
					var t = e.command;
					"Undo" != t && "Redo" != t && "mceRepaint" != t && a(e)
				}), t.on("ObjectResizeStart", function() {
					s.beforeChange()
				}), t.on("SaveContent ObjectResized blur", a), t.on("DragEnd", a), t.on("KeyUp", function(n) {
					var r = n.keyCode;
					(r >= 33 && 36 >= r || r >= 37 && 40 >= r || 45 == r || 13 == r || n.ctrlKey) && (a(), t.nodeChanged()), (46 == r || 8 == r || e.mac && (91 == r || 93 == r)) && t.nodeChanged(), d && s.typing && (t.isDirty() || (t.isNotDirty = !c[0] || o() == c[0].content, t.isNotDirty || t.fire("change", {
						level: c[0],
						lastLevel: null
					})), t.fire("TypingUndo"), d = !1, t.nodeChanged())
				}), t.on("KeyDown", function(e) {
					var t = e.keyCode;
					return t >= 33 && 36 >= t || t >= 37 && 40 >= t || 45 == t ? void(s.typing && a(e)) : void((16 > t || t > 20) && 224 != t && 91 != t && !s.typing && (s.beforeChange(), s.typing = !0, s.add({}, e), d = !0))
				}), t.on("MouseDown", function(e) {
					s.typing && a(e)
				}), t.addShortcut("ctrl+z", "", "Undo"), t.addShortcut("ctrl+y,ctrl+shift+z", "", "Redo"), t.on("AddUndo Undo Redo ClearUndos", function(e) {
					e.isDefaultPrevented() || t.nodeChanged()
				}), s = {
					data: c,
					typing: !1,
					beforeChange: function() {
						f || (u = t.selection.getBookmark(2, !0))
					},
					add: function(e, n) {
						var r, i = t.settings,
							a;
						if (e = e || {}, e.content = o(), f || t.removed) return null;
						if (a = c[l], t.fire("BeforeAddUndo", {
							level: e,
							lastLevel: a,
							originalEvent: n
						}).isDefaultPrevented()) return null;
						if (a && a.content == e.content) return null;
						if (c[l] && (c[l].beforeBookmark = u), i.custom_undo_redo_levels && c.length > i.custom_undo_redo_levels) {
							for (r = 0; r < c.length - 1; r++) c[r] = c[r + 1];
							c.length--, l = c.length
						}
						e.bookmark = t.selection.getBookmark(2, !0), l < c.length - 1 && (c.length = l + 1), c.push(e), l = c.length - 1;
						var s = {
							level: e,
							lastLevel: a,
							originalEvent: n
						};
						return t.fire("AddUndo", s), l > 0 && (t.isNotDirty = !1, t.fire("change", s)), e
					},
					undo: function() {
						var e;
						return s.typing && (s.add(), s.typing = !1), l > 0 && (e = c[--l], 0 === l && (t.isNotDirty = !0), t.setContent(e.content, {
							format: "raw"
						}), t.selection.moveToBookmark(e.beforeBookmark), t.fire("undo", {
							level: e
						})), e
					},
					redo: function() {
						var e;
						return l < c.length - 1 && (e = c[++l], t.setContent(e.content, {
							format: "raw"
						}), t.selection.moveToBookmark(e.bookmark), t.fire("redo", {
							level: e
						})), e
					},
					clear: function() {
						c = [], l = 0, s.typing = !1, t.fire("ClearUndos")
					},
					hasUndo: function() {
						return l > 0 || s.typing && c[0] && o() != c[0].content
					},
					hasRedo: function() {
						return l < c.length - 1 && !this.typing
					},
					transact: function(e) {
						s.beforeChange();
						try {
							f++, e()
						} finally {
							f--
						}
						s.add()
					}
				}
			}
	}), r(F, [h, x, d], function(e, t, n) {
		var r = n.ie && n.ie < 11;
		return function(i) {
			function o(o) {
				function f(e) {
					return e && a.isBlock(e) && !/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName) && !/^(fixed|absolute)/i.test(e.style.position) && "true" !== a.getContentEditable(e)
				}

				function p(e) {
					var t;
					a.isBlock(e) && (t = s.getRng(), e.appendChild(a.create("span", null, "\xa0")), s.select(e), e.lastChild.outerHTML = "", s.setRng(t))
				}

				function h(e) {
					var t = e,
						n = [],
						r;
					if (t) {
						for (; t = t.firstChild;) {
							if (a.isBlock(t)) return;
							1 != t.nodeType || d[t.nodeName.toLowerCase()] || n.push(t)
						}
						for (r = n.length; r--;) t = n[r], !t.hasChildNodes() || t.firstChild == t.lastChild && "" === t.firstChild.nodeValue ? a.remove(t) : "A" == t.nodeName && " " === (t.innerText || t.textContent) && a.remove(t)
					}
				}

				function m(t) {
					function r(e) {
						for (; e;) {
							if (1 == e.nodeType || 3 == e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
							e = e.nextSibling
						}
					}
					var i, o, l, c = t,
						u;
					if (t) {
						if (n.ie && n.ie < 9 && A && A.firstChild && A.firstChild == A.lastChild && "BR" == A.firstChild.tagName && a.remove(A.firstChild), /^(LI|DT|DD)$/.test(t.nodeName)) {
							var f = r(t.firstChild);
							f && /^(UL|OL|DL)$/.test(f.nodeName) && t.insertBefore(a.doc.createTextNode("\xa0"), t.firstChild)
						}
						if (l = a.createRng(), n.ie || t.normalize(), t.hasChildNodes()) {
							for (i = new e(t, t); o = i.current();) {
								if (3 == o.nodeType) {
									l.setStart(o, 0), l.setEnd(o, 0);
									break
								}
								if (d[o.nodeName.toLowerCase()]) {
									l.setStartBefore(o), l.setEndBefore(o);
									break
								}
								c = o, o = i.next()
							}
							o || (l.setStart(c, 0), l.setEnd(c, 0))
						} else "BR" == t.nodeName ? t.nextSibling && a.isBlock(t.nextSibling) ? ((!B || 9 > B) && (u = a.create("br"), t.parentNode.insertBefore(u, t)), l.setStartBefore(t), l.setEndBefore(t)) : (l.setStartAfter(t), l.setEndAfter(t)) : (l.setStart(t, 0), l.setEnd(t, 0));
						s.setRng(l), a.remove(u), s.scrollIntoView(t)
					}
				}

				function g(e) {
					var t = l.forced_root_block;
					t && t.toLowerCase() === e.tagName.toLowerCase() && a.setAttribs(e, l.forced_root_block_attrs)
				}

				function v(e) {
					var t = T,
						n, i, o, s = u.getTextInlineElements();
					if (e || "TABLE" == P ? (n = a.create(e || I), g(n)) : n = A.cloneNode(!1), o = n, l.keep_styles !== !1)
						do
							if (s[t.nodeName]) {
								if ("_mce_caret" == t.id) continue;
								i = t.cloneNode(!1), a.setAttrib(i, "id", ""), n.hasChildNodes() ? (i.appendChild(n.firstChild), n.appendChild(i)) : (o = i, n.appendChild(i))
							}
					while (t = t.parentNode);
					return r || (o.innerHTML = '<br data-mce-bogus="1">'), n
				}

				function y(t) {
					var n, r, i;
					if (3 == T.nodeType && (t ? R > 0 : R < T.nodeValue.length)) return !1;
					if (T.parentNode == A && F && !t) return !0;
					if (t && 1 == T.nodeType && T == A.firstChild) return !0;
					if ("TABLE" === T.nodeName || T.previousSibling && "TABLE" == T.previousSibling.nodeName) return F && !t || !F && t;
					for (n = new e(T, A), 3 == T.nodeType && (t && 0 === R ? n.prev() : t || R != T.nodeValue.length || n.next()); r = n.current();) {
						if (1 === r.nodeType) {
							if (!r.getAttribute("data-mce-bogus") && (i = r.nodeName.toLowerCase(), d[i] && "br" !== i)) return !1
						} else if (3 === r.nodeType && !/^[ \t\r\n]*$/.test(r.nodeValue)) return !1;
						t ? n.prev() : n.next()
					}
					return !0
				}

				function b(e, t) {
					var n, r, o, s, l, c, d = I || "P";
					if (r = a.getParent(e, a.isBlock), c = i.getBody().nodeName.toLowerCase(), !r || !f(r)) {
						if (r = r || S, !r.hasChildNodes()) return n = a.create(d), g(n), r.appendChild(n), N.setStart(n, 0), N.setEnd(n, 0), n;
						for (s = e; s.parentNode != r;) s = s.parentNode;
						for (; s && !a.isBlock(s);) o = s, s = s.previousSibling;
						if (o && u.isValidChild(c, d.toLowerCase())) {
							for (n = a.create(d), g(n), o.parentNode.insertBefore(n, o), s = o; s && !a.isBlock(s);) l = s.nextSibling, n.appendChild(s), s = l;
							N.setStart(e, t), N.setEnd(e, t)
						}
					}
					return e
				}

				function C() {
					function e(e) {
						for (var t = M[e ? "firstChild" : "lastChild"]; t && 1 != t.nodeType;) t = t[e ? "nextSibling" : "previousSibling"];
						return t === A
					}

					function t() {
						var e = M.parentNode;
						return /^(LI|DT|DD)$/.test(e.nodeName) ? e : M
					}
					var n = M.parentNode.nodeName;
					/^(OL|UL|LI)$/.test(n) && (I = "LI"), L = I ? v(I) : a.create("BR"), e(!0) && e() ? "LI" == n ? a.insertAfter(L, t()) : a.replace(L, M) : e(!0) ? "LI" == n ? (a.insertAfter(L, t()), L.appendChild(a.doc.createTextNode(" ")), L.appendChild(M)) : M.parentNode.insertBefore(L, M) : e() ? (a.insertAfter(L, t()), p(L)) : (M = t(), k = N.cloneRange(), k.setStartAfter(A), k.setEndAfter(M), H = k.extractContents(), "LI" == I && "LI" == H.firstChild.nodeName ? (L = H.firstChild, a.insertAfter(H, M)) : (a.insertAfter(H, M), a.insertAfter(L, M))), a.remove(A), m(L), c.add()
				}

				function x() {
					i.execCommand("InsertLineBreak", !1, o)
				}

				function w(e) {
					do 3 === e.nodeType && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild; while (e)
				}

				function _(e) {
					var t = a.getRoot(),
						n, r;
					for (n = e; n !== t && "false" !== a.getContentEditable(n);) "true" === a.getContentEditable(n) && (r = n), n = n.parentNode;
					return n !== t ? r : t
				}

				function E(e) {
					var t;
					r || (e.normalize(), t = e.lastChild, (!t || /^(left|right)$/gi.test(a.getStyle(t, "float", !0))) && a.add(e, "br"))
				}
				var N, k, S, T, R, A, B, D, L, H, M, P, O, I, F;
				if (N = s.getRng(!0), !o.isDefaultPrevented()) {
					if (!N.collapsed) return void i.execCommand("Delete");
					if (new t(a).normalize(N), T = N.startContainer, R = N.startOffset, I = (l.force_p_newlines ? "p" : "") || l.forced_root_block, I = I ? I.toUpperCase() : "", B = a.doc.documentMode, D = o.shiftKey, 1 == T.nodeType && T.hasChildNodes() && (F = R > T.childNodes.length - 1, T = T.childNodes[Math.min(R, T.childNodes.length - 1)] || T, R = F && 3 == T.nodeType ? T.nodeValue.length : 0), S = _(T)) {
						if (c.beforeChange(), !a.isBlock(S) && S != a.getRoot()) return void((!I || D) && x());
						if ((I && !D || !I && D) && (T = b(T, R)), A = a.getParent(T, a.isBlock), M = A ? a.getParent(A.parentNode, a.isBlock) : null, P = A ? A.nodeName.toUpperCase() : "", O = M ? M.nodeName.toUpperCase() : "", "LI" != O || o.ctrlKey || (A = M, P = O), /^(LI|DT|DD)$/.test(P)) {
							if (!I && D) return void x();
							if (a.isEmpty(A)) return void C()
						}
						if ("PRE" == P && l.br_in_pre !== !1) {
							if (!D) return void x()
						} else if (!I && !D && "LI" != P || I && D) return void x();
						I && A === i.getBody() || (I = I || "P", y() ? (L = /^(H[1-6]|PRE|FIGURE)$/.test(P) && "HGROUP" != O ? v(I) : v(), l.end_container_on_empty_block && f(M) && a.isEmpty(A) ? L = a.split(M, A) : a.insertAfter(L, A), m(L)) : y(!0) ? (L = A.parentNode.insertBefore(v(), A), p(L), m(A)) : (k = N.cloneRange(), k.setEndAfter(A), H = k.extractContents(), w(H), L = H.firstChild, a.insertAfter(H, A), h(L), E(A), m(L)), a.setAttrib(L, "id", ""), i.fire("NewBlock", {
							newBlock: L
						}), c.add())
					}
				}
			}
			var a = i.dom,
				s = i.selection,
				l = i.settings,
				c = i.undoManager,
				u = i.schema,
				d = u.getNonEmptyElements();
			i.on("keydown", function(e) {
				13 == e.keyCode && o(e) !== !1 && e.preventDefault()
			})
		}
	}), r(z, [], function() {
		return function(e) {
			function t() {
				var t = i.getStart(),
					s = e.getBody(),
					l, c, u, d, f, p, h, m = -16777215,
					g, v, y, b, C;
				if (C = n.forced_root_block, t && 1 === t.nodeType && C) {
					for (; t && t != s;) {
						if (a[t.nodeName]) return;
						t = t.parentNode
					}
					if (l = i.getRng(), l.setStart) {
						c = l.startContainer, u = l.startOffset, d = l.endContainer, f = l.endOffset;
						try {
							v = e.getDoc().activeElement === s
						} catch (x) {}
					} else l.item && (t = l.item(0), l = e.getDoc().body.createTextRange(), l.moveToElementText(t)), v = l.parentElement().ownerDocument === e.getDoc(), y = l.duplicate(), y.collapse(!0), u = -1 * y.move("character", m), y.collapsed || (y = l.duplicate(), y.collapse(!1), f = -1 * y.move("character", m) - u);
					for (t = s.firstChild, b = s.nodeName.toLowerCase(); t;)
						if ((3 === t.nodeType || 1 == t.nodeType && !a[t.nodeName]) && o.isValidChild(b, C.toLowerCase())) {
							if (3 === t.nodeType && 0 === t.nodeValue.length) {
								h = t, t = t.nextSibling, r.remove(h);
								continue
							}
							p || (p = r.create(C, e.settings.forced_root_block_attrs), t.parentNode.insertBefore(p, t), g = !0), h = t, t = t.nextSibling, p.appendChild(h)
						} else p = null, t = t.nextSibling;
					if (g && v) {
						if (l.setStart) l.setStart(c, u), l.setEnd(d, f), i.setRng(l);
						else try {
							l = e.getDoc().body.createTextRange(), l.moveToElementText(s), l.collapse(!0), l.moveStart("character", u), f > 0 && l.moveEnd("character", f), l.select()
						} catch (x) {}
						e.nodeChanged()
					}
				}
			}
			var n = e.settings,
				r = e.dom,
				i = e.selection,
				o = e.schema,
				a = o.getBlockElements();
			n.forced_root_block && e.on("NodeChange", t)
		}
	}), r(W, [T, d, u, M, x, h], function(e, n, r, i, o, a) {
		var s = r.each,
			l = r.extend,
			c = r.map,
			u = r.inArray,
			d = r.explode,
			f = n.gecko,
			p = n.ie,
			h = n.ie && n.ie < 11,
			m = !0,
			g = !1;
		return function(r) {
			function v(e, t, n) {
				var r;
				return e = e.toLowerCase(), (r = T.exec[e]) ? (r(e, t, n), m) : g
			}

			function y(e) {
				var t;
				return e = e.toLowerCase(), (t = T.state[e]) ? t(e) : -1
			}

			function b(e) {
				var t;
				return e = e.toLowerCase(), (t = T.value[e]) ? t(e) : g
			}

			function C(e, t) {
				t = t || "exec", s(e, function(e, n) {
					s(n.toLowerCase().split(","), function(n) {
						T[t][n] = e
					})
				})
			}

			function x(e, n, i) {
				return n === t && (n = g), i === t && (i = null), r.getDoc().execCommand(e, n, i)
			}

			function w(e) {
				return A.match(e)
			}

			function _(e, n) {
				A.toggle(e, n ? {
					value: n
				} : t), r.nodeChanged()
			}

			function E(e) {
				B = S.getBookmark(e)
			}

			function N() {
				S.moveToBookmark(B)
			}
			var k = r.dom,
				S = r.selection,
				T = {
					state: {},
					exec: {},
					value: {}
				},
				R = r.settings,
				A = r.formatter,
				B;
			l(this, {
				execCommand: v,
				queryCommandState: y,
				queryCommandValue: b,
				addCommands: C
			}), C({
				"mceResetDesignMode,mceBeginUndoLevel": function() {},
				"mceEndUndoLevel,mceAddUndoLevel": function() {
					r.undoManager.add()
				},
				"Cut,Copy,Paste": function(e) {
					var t = r.getDoc(),
						i;
					try {
						x(e)
					} catch (o) {
						i = m
					}
					if (i || !t.queryCommandSupported(e)) {
						var a = r.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
						n.mac && (a = a.replace(/Ctrl\+/g, "\u2318+")), r.windowManager.alert(a)
					}
				},
				unlink: function() {
					if (S.isCollapsed()) {
						var e = S.getNode();
						return void("A" == e.tagName && r.dom.remove(e, !0))
					}
					A.remove("link")
				},
				"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull": function(e) {
					var t = e.substring(7);
					"full" == t && (t = "justify"), s("left,center,right,justify".split(","), function(e) {
						t != e && A.remove("align" + e)
					}), _("align" + t), v("mceRepaint")
				},
				"InsertUnorderedList,InsertOrderedList": function(e) {
					var t, n;
					x(e), t = k.getParent(S.getNode(), "ol,ul"), t && (n = t.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName) && (E(), k.split(n, t), N()))
				},
				"Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
					_(e)
				},
				"ForeColor,HiliteColor,FontName": function(e, t, n) {
					_(e, n)
				},
				FontSize: function(e, t, n) {
					var r, i;
					n >= 1 && 7 >= n && (i = d(R.font_size_style_values), r = d(R.font_size_classes), n = r ? r[n - 1] || n : i[n - 1] || n), _(e, n)
				},
				RemoveFormat: function(e) {
					A.remove(e)
				},
				mceBlockQuote: function() {
					_("blockquote")
				},
				FormatBlock: function(e, t, n) {
					return _(n || "p")
				},
				mceCleanup: function() {
					var e = S.getBookmark();
					r.setContent(r.getContent({
						cleanup: m
					}), {
						cleanup: m
					}), S.moveToBookmark(e)
				},
				mceRemoveNode: function(e, t, n) {
					var i = n || S.getNode();
					i != r.getBody() && (E(), r.dom.remove(i, m), N())
				},
				mceSelectNodeDepth: function(e, t, n) {
					var i = 0;
					k.getParent(S.getNode(), function(e) {
						return 1 == e.nodeType && i++ == n ? (S.select(e), g) : void 0
					}, r.getBody())
				},
				mceSelectNode: function(e, t, n) {
					S.select(n)
				},
				mceInsertContent: function(t, n, o) {
					function a(e) {
						function t(e) {
							return r[e] && 3 == r[e].nodeType
						}
						var n, r, i;
						return n = S.getRng(!0), r = n.startContainer, i = n.startOffset, 3 == r.nodeType && (i > 0 ? e = e.replace(/^&nbsp;/, " ") : t("previousSibling") || (e = e.replace(/^ /, "&nbsp;")), i < r.length ? e = e.replace(/&nbsp;(<br>|)$/, " ") : t("nextSibling") || (e = e.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))), e
					}

					function l(e) {
						if (w)
							for (b = e.firstChild; b; b = b.walk(!0)) _[b.name] && b.attr("data-mce-new", "true")
					}

					function c() {
						if (w) {
							var e = r.getBody(),
								t = new i(k);
							s(k.select("*[data-mce-new]"), function(n) {
								n.removeAttribute("data-mce-new");
								for (var r = n.parentNode; r && r != e; r = r.parentNode) t.compare(r, n) && k.remove(n, !0)
							})
						}
					}
					var u, d, f, h, m, g, v, y, b, C, x, w, _ = r.schema.getTextInlineElements();
					"string" != typeof o && (w = o.merge, o = o.content), /^ | $/.test(o) && (o = a(o)), u = r.parser, d = new e({}, r.schema), x = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>', g = {
						content: o,
						format: "html",
						selection: !0
					}, r.fire("BeforeSetContent", g), o = g.content, -1 == o.indexOf("{$caret}") && (o += "{$caret}"), o = o.replace(/\{\$caret\}/, x), y = S.getRng();
					var E = y.startContainer || (y.parentElement ? y.parentElement() : null),
						N = r.getBody();
					E === N && S.isCollapsed() && k.isBlock(N.firstChild) && k.isEmpty(N.firstChild) && (y = k.createRng(), y.setStart(N.firstChild, 0), y.setEnd(N.firstChild, 0), S.setRng(y)), S.isCollapsed() || r.getDoc().execCommand("Delete", !1, null), f = S.getNode();
					var T = {
						context: f.nodeName.toLowerCase()
					};
					if (m = u.parse(o, T), l(m), b = m.lastChild, "mce_marker" == b.attr("id"))
						for (v = b, b = b.prev; b; b = b.walk(!0))
							if (3 == b.type || !k.isBlock(b.name)) {
								r.schema.isValidChild(b.parent.name, "span") && b.parent.insert(v, b, "br" === b.name);
								break
							}
					if (T.invalid) {
						for (S.setContent(x), f = S.getNode(), h = r.getBody(), 9 == f.nodeType ? f = b = h : b = f; b !== h;) f = b, b = b.parentNode;
						o = f == h ? h.innerHTML : k.getOuterHTML(f), o = d.serialize(u.parse(o.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function() {
							return d.serialize(m)
						}))), f == h ? k.setHTML(h, o) : k.setOuterHTML(f, o)
					} else o = d.serialize(m), b = f.firstChild, C = f.lastChild, !b || b === C && "BR" === b.nodeName ? k.setHTML(f, o) : S.setContent(o);
					c(), v = k.get("mce_marker"), S.scrollIntoView(v), y = k.createRng(), b = v.previousSibling, b && 3 == b.nodeType ? (y.setStart(b, b.nodeValue.length), p || (C = v.nextSibling, C && 3 == C.nodeType && (b.appendData(C.data), C.parentNode.removeChild(C)))) : (y.setStartBefore(v), y.setEndBefore(v)), k.remove(v), S.setRng(y), r.fire("SetContent", g), r.addVisual()
				},
				mceInsertRawHTML: function(e, t, n) {
					S.setContent("tiny_mce_marker"), r.setContent(r.getContent().replace(/tiny_mce_marker/g, function() {
						return n
					}))
				},
				mceToggleFormat: function(e, t, n) {
					_(n)
				},
				mceSetContent: function(e, t, n) {
					r.setContent(n)
				},
				"Indent,Outdent": function(e) {
					var t, n, i;
					t = R.indentation, n = /[a-z%]+$/i.exec(t), t = parseInt(t, 10), y("InsertUnorderedList") || y("InsertOrderedList") ? x(e) : (R.forced_root_block || k.getParent(S.getNode(), k.isBlock) || A.apply("div"), s(S.getSelectedBlocks(), function(o) {
						if ("LI" != o.nodeName) {
							var a = r.getParam("indent_use_margin", !1) ? "margin" : "padding";
							a += "rtl" == k.getStyle(o, "direction", !0) ? "Right" : "Left", "outdent" == e ? (i = Math.max(0, parseInt(o.style[a] || 0, 10) - t), k.setStyle(o, a, i ? i + n : "")) : (i = parseInt(o.style[a] || 0, 10) + t + n, k.setStyle(o, a, i))
						}
					}))
				},
				mceRepaint: function() {
					if (f) try {
						E(m), S.getSel() && S.getSel().selectAllChildren(r.getBody()), S.collapse(m), N()
					} catch (e) {}
				},
				InsertHorizontalRule: function() {
					r.execCommand("mceInsertContent", !1, "<hr />")
				},
				mceToggleVisualAid: function() {
					r.hasVisual = !r.hasVisual, r.addVisual()
				},
				mceReplaceContent: function(e, t, n) {
					r.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, S.getContent({
						format: "text"
					})))
				},
				mceInsertLink: function(e, t, n) {
					var r;
					"string" == typeof n && (n = {
						href: n
					}), r = k.getParent(S.getNode(), "a"), n.href = n.href.replace(" ", "%20"), r && n.href || A.remove("link"), n.href && A.apply("link", n, r)
				},
				selectAll: function() {
					var e = k.getRoot(),
						t;
					S.getRng().setStart ? (t = k.createRng(), t.setStart(e, 0), t.setEnd(e, e.childNodes.length), S.setRng(t)) : (t = S.getRng(), t.item || (t.moveToElementText(e), t.select()))
				},
				"delete": function() {
					x("Delete");
					var e = r.getBody();
					k.isEmpty(e) && (r.setContent(""), e.firstChild && k.isBlock(e.firstChild) ? r.selection.setCursorLocation(e.firstChild, 0) : r.selection.setCursorLocation(e, 0))
				},
				mceNewDocument: function() {
					r.setContent("")
				},
				InsertLineBreak: function(e, t, n) {
					function i() {
						for (var e = new a(p, v), t, n = r.schema.getNonEmptyElements(); t = e.next();)
							if (n[t.nodeName.toLowerCase()] || t.length > 0) return !0
					}
					var s = n,
						l, c, u, d = S.getRng(!0);
					new o(k).normalize(d);
					var f = d.startOffset,
						p = d.startContainer;
					if (1 == p.nodeType && p.hasChildNodes()) {
						var g = f > p.childNodes.length - 1;
						p = p.childNodes[Math.min(f, p.childNodes.length - 1)] || p, f = g && 3 == p.nodeType ? p.nodeValue.length : 0
					}
					var v = k.getParent(p, k.isBlock),
						y = v ? v.nodeName.toUpperCase() : "",
						b = v ? k.getParent(v.parentNode, k.isBlock) : null,
						C = b ? b.nodeName.toUpperCase() : "",
						x = s && s.ctrlKey;
					"LI" != C || x || (v = b, y = C), p && 3 == p.nodeType && f >= p.nodeValue.length && (h || i() || (l = k.create("br"), d.insertNode(l), d.setStartAfter(l), d.setEndAfter(l), c = !0)), l = k.create("br"), d.insertNode(l);
					var w = k.doc.documentMode;
					return h && "PRE" == y && (!w || 8 > w) && l.parentNode.insertBefore(k.doc.createTextNode("\r"), l), u = k.create("span", {}, "&nbsp;"), l.parentNode.insertBefore(u, l), S.scrollIntoView(u), k.remove(u), c ? (d.setStartBefore(l), d.setEndBefore(l)) : (d.setStartAfter(l), d.setEndAfter(l)), S.setRng(d), r.undoManager.add(), m
				}
			}), C({
				"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull": function(e) {
					var t = "align" + e.substring(7),
						n = S.isCollapsed() ? [k.getParent(S.getNode(), k.isBlock)] : S.getSelectedBlocks(),
						r = c(n, function(e) {
							return !!A.matchNode(e, t)
						});
					return -1 !== u(r, m)
				},
				"Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
					return w(e)
				},
				mceBlockQuote: function() {
					return w("blockquote")
				},
				Outdent: function() {
					var e;
					if (R.inline_styles) {
						if ((e = k.getParent(S.getStart(), k.isBlock)) && parseInt(e.style.paddingLeft, 10) > 0) return m;
						if ((e = k.getParent(S.getEnd(), k.isBlock)) && parseInt(e.style.paddingLeft, 10) > 0) return m
					}
					return y("InsertUnorderedList") || y("InsertOrderedList") || !R.inline_styles && !!k.getParent(S.getNode(), "BLOCKQUOTE")
				},
				"InsertUnorderedList,InsertOrderedList": function(e) {
					var t = k.getParent(S.getNode(), "ul,ol");
					return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName)
				}
			}, "state"), C({
				"FontSize,FontName": function(e) {
					var t = 0,
						n;
					return (n = k.getParent(S.getNode(), "span")) && (t = "fontsize" == e ? n.style.fontSize : n.style.fontFamily.replace(/, /g, ",").replace(/[\'\"]/g, "").toLowerCase()), t
				}
			}, "value"), C({
				Undo: function() {
					r.undoManager.undo()
				},
				Redo: function() {
					r.undoManager.redo()
				}
			})
		}
	}), r(V, [u], function(e) {
		function t(e, o) {
			var a = this,
				s, l;
			if (e = r(e), o = a.settings = o || {}, s = o.base_uri, /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)) return void(a.source = e);
			var c = 0 === e.indexOf("//");
			0 !== e.indexOf("/") || c || (e = (s ? s.protocol || "http" : "http") + "://mce_host" + e), /^[\w\-]*:?\/\//.test(e) || (l = o.base_uri ? o.base_uri.path : new t(location.href).directory, "" === o.base_uri.protocol ? e = "//mce_host" + a.toAbsPath(l, e) : (e = /([^#?]*)([#?]?.*)/.exec(e), e = (s && s.protocol || "http") + "://mce_host" + a.toAbsPath(l, e[1]) + e[2])), e = e.replace(/@@/g, "(mce_at)"), e = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e), n(i, function(t, n) {
				var r = e[n];
				r && (r = r.replace(/\(mce_at\)/g, "@@")), a[t] = r
			}), s && (a.protocol || (a.protocol = s.protocol), a.userInfo || (a.userInfo = s.userInfo), a.port || "mce_host" !== a.host || (a.port = s.port), a.host && "mce_host" !== a.host || (a.host = s.host), a.source = ""), c && (a.protocol = "")
		}
		var n = e.each,
			r = e.trim,
			i = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
			o = {
				ftp: 21,
				http: 80,
				https: 443,
				mailto: 25
			};
		return t.prototype = {
			setPath: function(e) {
				var t = this;
				e = /^(.*?)\/?(\w+)?$/.exec(e), t.path = e[0], t.directory = e[1], t.file = e[2], t.source = "", t.getURI()
			},
			toRelative: function(e) {
				var n = this,
					r;
				if ("./" === e) return e;
				if (e = new t(e, {
					base_uri: n
				}), "mce_host" != e.host && n.host != e.host && e.host || n.port != e.port || n.protocol != e.protocol && "" !== e.protocol) return e.getURI();
				var i = n.getURI(),
					o = e.getURI();
				return i == o || "/" == i.charAt(i.length - 1) && i.substr(0, i.length - 1) == o ? i : (r = n.toRelPath(n.path, e.path), e.query && (r += "?" + e.query), e.anchor && (r += "#" + e.anchor), r)
			},
			toAbsolute: function(e, n) {
				return e = new t(e, {
					base_uri: this
				}), e.getURI(n && this.isSameOrigin(e))
			},
			isSameOrigin: function(e) {
				if (this.host == e.host && this.protocol == e.protocol) {
					if (this.port == e.port) return !0;
					var t = o[this.protocol];
					if (t && (this.port || t) == (e.port || t)) return !0
				}
				return !1
			},
			toRelPath: function(e, t) {
				var n, r = 0,
					i = "",
					o, a;
				if (e = e.substring(0, e.lastIndexOf("/")), e = e.split("/"), n = t.split("/"), e.length >= n.length)
					for (o = 0, a = e.length; a > o; o++)
						if (o >= n.length || e[o] != n[o]) {
							r = o + 1;
							break
						}
				if (e.length < n.length)
					for (o = 0, a = n.length; a > o; o++)
						if (o >= e.length || e[o] != n[o]) {
							r = o + 1;
							break
						}
				if (1 === r) return t;
				for (o = 0, a = e.length - (r - 1); a > o; o++) i += "../";
				for (o = r - 1, a = n.length; a > o; o++) i += o != r - 1 ? "/" + n[o] : n[o];
				return i
			},
			toAbsPath: function(e, t) {
				var r, i = 0,
					o = [],
					a, s;
				for (a = /\/$/.test(t) ? "/" : "", e = e.split("/"), t = t.split("/"), n(e, function(e) {
					e && o.push(e)
				}), e = o, r = t.length - 1, o = []; r >= 0; r--) 0 !== t[r].length && "." !== t[r] && (".." !== t[r] ? i > 0 ? i-- : o.push(t[r]) : i++);
				return r = e.length - i, s = 0 >= r ? o.reverse().join("/") : e.slice(0, r).join("/") + "/" + o.reverse().join("/"), 0 !== s.indexOf("/") && (s = "/" + s), a && s.lastIndexOf("/") !== s.length - 1 && (s += a), s
			},
			getURI: function(e) {
				var t, n = this;
				return (!n.source || e) && (t = "", e || (t += n.protocol ? n.protocol + "://" : "//", n.userInfo && (t += n.userInfo + "@"), n.host && (t += n.host), n.port && (t += ":" + n.port)), n.path && (t += n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), n.source = t), n.source
			}
		}, t
	}), r(U, [u], function(e) {
		function t() {}
		var n = e.each,
			r = e.extend,
			i, o;
		return t.extend = i = function(e) {
			function t() {
				var e, t, n, r = this;
				if (!o && (r.init && r.init.apply(r, arguments), t = r.Mixins))
					for (e = t.length; e--;) n = t[e], n.init && n.init.apply(r, arguments)
			}

			function a() {
				return this
			}

			function s(e, t) {
				return function() {
					var n = this,
						r = n._super,
						i;
					return n._super = c[e], i = t.apply(n, arguments), n._super = r, i
				}
			}
			var l = this,
				c = l.prototype,
				u, d, f;
			o = !0, u = new l, o = !1, e.Mixins && (n(e.Mixins, function(t) {
				t = t;
				for (var n in t) "init" !== n && (e[n] = t[n])
			}), c.Mixins && (e.Mixins = c.Mixins.concat(e.Mixins))), e.Methods && n(e.Methods.split(","), function(t) {
				e[t] = a
			}), e.Properties && n(e.Properties.split(","), function(t) {
				var n = "_" + t;
				e[t] = function(e) {
					var t = this,
						r;
					return e !== r ? (t[n] = e, t) : t[n]
				}
			}), e.Statics && n(e.Statics, function(e, n) {
				t[n] = e
			}), e.Defaults && c.Defaults && (e.Defaults = r({}, c.Defaults, e.Defaults));
			for (d in e) f = e[d], u[d] = "function" == typeof f && c[d] ? s(d, f) : f;
			return t.prototype = u, t.constructor = t, t.extend = i, t
		}, t
	}), r($, [u], function(e) {
		function t(e) {
			function t() {
				return !1
			}

			function n() {
				return !0
			}

			function r(r, i) {
				var a, s, l, d;
				if (r = r.toLowerCase(), i = i || {}, i.type = r, i.target || (i.target = c), i.preventDefault || (i.preventDefault = function() {
					i.isDefaultPrevented = n
				}, i.stopPropagation = function() {
					i.isPropagationStopped = n
				}, i.stopImmediatePropagation = function() {
					i.isImmediatePropagationStopped = n
				}, i.isDefaultPrevented = t, i.isPropagationStopped = t, i.isImmediatePropagationStopped = t), e.beforeFire && e.beforeFire(i), a = u[r])
					for (s = 0, l = a.length; l > s; s++) {
						if (a[s] = d = a[s], d.once && o(r, d), i.isImmediatePropagationStopped()) return i.stopPropagation(), i;
						if (d.call(c, i) === !1) return i.preventDefault(), i
					}
				return i
			}

			function i(e, n, r) {
				var i, o, a;
				if (n === !1 && (n = t), n)
					for (o = e.toLowerCase().split(" "), a = o.length; a--;) e = o[a], i = u[e], i || (i = u[e] = [], d(e, !0)), r ? i.unshift(n) : i.push(n);
				return l
			}

			function o(e, t) {
				var n, r, i, o, a;
				if (e)
					for (o = e.toLowerCase().split(" "), n = o.length; n--;) {
						if (e = o[n], r = u[e], !e) {
							for (i in u) d(i, !1), delete u[i];
							return l
						}
						if (r) {
							if (t)
								for (a = r.length; a--;) r[a] === t && (r = r.slice(0, a).concat(r.slice(a + 1)), u[e] = r);
							else r.length = 0;
							r.length || (d(e, !1), delete u[e])
						}
					} else {
						for (e in u) d(e, !1);
						u = {}
					}
				return l
			}

			function a(e, t, n) {
				return t.once = !0, i(e, t, n)
			}

			function s(e) {
				return e = e.toLowerCase(), !(!u[e] || 0 === u[e].length)
			}
			var l = this,
				c, u = {},
				d;
			e = e || {}, c = e.scope || l, d = e.toggleEvent || t, l.fire = r, l.on = i, l.off = o, l.once = a, l.has = s
		}
		var n = e.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchend", " ");
		return t.isNative = function(e) {
			return !!n[e.toLowerCase()]
		}, t
	}), r(q, [U], function(e) {
		function t(e) {
			for (var t = [], n = e.length, r; n--;) r = e[n], r.__checked || (t.push(r), r.__checked = 1);
			for (n = t.length; n--;) delete t[n].__checked;
			return t
		}
		var n = /^([\w\\*]+)?(?:#([\w\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i,
			r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
			i = /^\s*|\s*$/g,
			o, a = e.extend({
				init: function(e) {
					function t(e) {
						return e ? (e = e.toLowerCase(), function(t) {
							return "*" === e || t.type === e
						}) : void 0
					}

					function o(e) {
						return e ? function(t) {
							return t._name === e
						} : void 0
					}

					function a(e) {
						return e ? (e = e.split("."), function(t) {
							for (var n = e.length; n--;)
								if (!t.hasClass(e[n])) return !1;
							return !0
						}) : void 0
					}

					function s(e, t, n) {
						return e ? function(r) {
							var i = r[e] ? r[e]() : "";
							return t ? "=" === t ? i === n : "*=" === t ? i.indexOf(n) >= 0 : "~=" === t ? (" " + i + " ").indexOf(" " + n + " ") >= 0 : "!=" === t ? i != n : "^=" === t ? 0 === i.indexOf(n) : "$=" === t ? i.substr(i.length - n.length) === n : !1 : !!n
						} : void 0
					}

					function l(e) {
						var t;
						return e ? (e = /(?:not\((.+)\))|(.+)/i.exec(e), e[1] ? (t = u(e[1], []), function(e) {
							return !d(e, t)
						}) : (e = e[2], function(t, n, r) {
							return "first" === e ? 0 === n : "last" === e ? n === r - 1 : "even" === e ? n % 2 === 0 : "odd" === e ? n % 2 === 1 : t[e] ? t[e]() : !1
						})) : void 0
					}

					function c(e, r, c) {
						function u(e) {
							e && r.push(e)
						}
						var d;
						return d = n.exec(e.replace(i, "")), u(t(d[1])), u(o(d[2])), u(a(d[3])), u(s(d[4], d[5], d[6])), u(l(d[7])), r.psuedo = !!d[7], r.direct = c, r
					}

					function u(e, t) {
						var n = [],
							i, o, a;
						do
							if (r.exec(""), o = r.exec(e), o && (e = o[3], n.push(o[1]), o[2])) {
								i = o[3];
								break
							}
						while (o);
						for (i && u(i, t), e = [], a = 0; a < n.length; a++) ">" != n[a] && e.push(c(n[a], [], ">" === n[a - 1]));
						return t.push(e), t
					}
					var d = this.match;
					this._selectors = u(e, [])
				},
				match: function(e, t) {
					var n, r, i, o, a, s, l, c, u, d, f, p, h;
					for (t = t || this._selectors, n = 0, r = t.length; r > n; n++) {
						for (a = t[n], o = a.length, h = e, p = 0, i = o - 1; i >= 0; i--)
							for (c = a[i]; h;) {
								if (c.psuedo)
									for (f = h.parent().items(), u = d = f.length; u-- && f[u] !== h;);
								for (s = 0, l = c.length; l > s; s++)
									if (!c[s](h, u, d)) {
										s = l + 1;
										break
									}
								if (s === l) {
									p++;
									break
								}
								if (i === o - 1) break;
								h = h.parent()
							}
						if (p === o) return !0
					}
					return !1
				},
				find: function(e) {
					function n(e, t, i) {
						var o, a, s, l, c, u = t[i];
						for (o = 0, a = e.length; a > o; o++) {
							for (c = e[o], s = 0, l = u.length; l > s; s++)
								if (!u[s](c, o, a)) {
									s = l + 1;
									break
								}
							if (s === l) i == t.length - 1 ? r.push(c) : c.items && n(c.items(), t, i + 1);
							else if (u.direct) return;
							c.items && n(c.items(), t, i)
						}
					}
					var r = [],
						i, s, l = this._selectors;
					if (e.items) {
						for (i = 0, s = l.length; s > i; i++) n(e.items(), l[i], 0);
						s > 1 && (r = t(r))
					}
					return o || (o = a.Collection), new o(r)
				}
			});
		return a
	}), r(j, [u, q, U], function(e, t, n) {
		var r, i, o = Array.prototype.push,
			a = Array.prototype.slice;
		return i = {
			length: 0,
			init: function(e) {
				e && this.add(e)
			},
			add: function(t) {
				var n = this;
				return e.isArray(t) ? o.apply(n, t) : t instanceof r ? n.add(t.toArray()) : o.call(n, t), n
			},
			set: function(e) {
				var t = this,
					n = t.length,
					r;
				for (t.length = 0, t.add(e), r = t.length; n > r; r++) delete t[r];
				return t
			},
			filter: function(e) {
				var n = this,
					i, o, a = [],
					s, l;
				for ("string" == typeof e ? (e = new t(e), l = function(t) {
					return e.match(t)
				}) : l = e, i = 0, o = n.length; o > i; i++) s = n[i], l(s) && a.push(s);
				return new r(a)
			},
			slice: function() {
				return new r(a.apply(this, arguments))
			},
			eq: function(e) {
				return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
			},
			each: function(t) {
				return e.each(this, t), this
			},
			toArray: function() {
				return e.toArray(this)
			},
			indexOf: function(e) {
				for (var t = this, n = t.length; n-- && t[n] !== e;);
				return n
			},
			reverse: function() {
				return new r(e.toArray(this).reverse())
			},
			hasClass: function(e) {
				return this[0] ? this[0].hasClass(e) : !1
			},
			prop: function(e, t) {
				var n = this,
					r, i;
				return t !== r ? (n.each(function(n) {
					n[e] && n[e](t)
				}), n) : (i = n[0], i && i[e] ? i[e]() : void 0)
			},
			exec: function(t) {
				var n = this,
					r = e.toArray(arguments).slice(1);
				return n.each(function(e) {
					e[t] && e[t].apply(e, r)
				}), n
			},
			remove: function() {
				for (var e = this.length; e--;) this[e].remove();
				return this
			}
		}, e.each("fire on off show hide addClass removeClass append prepend before after reflow".split(" "), function(t) {
			i[t] = function() {
				var n = e.toArray(arguments);
				return this.each(function(e) {
					t in e && e[t].apply(e, n)
				}), this
			}
		}), e.each("text name disabled active selected checked visible parent value data".split(" "), function(e) {
			i[e] = function(t) {
				return this.prop(e, t)
			}
		}), r = n.extend(i), t.Collection = r, r
	}), r(Y, [u, y], function(e, t) {
		var n = 0;
		return {
			id: function() {
				return "mceu_" + n++
			},
			createFragment: function(e) {
				return t.DOM.createFragment(e)
			},
			getWindowSize: function() {
				return t.DOM.getViewPort()
			},
			getSize: function(e) {
				var t, n;
				if (e.getBoundingClientRect) {
					var r = e.getBoundingClientRect();
					t = Math.max(r.width || r.right - r.left, e.offsetWidth), n = Math.max(r.height || r.bottom - r.bottom, e.offsetHeight)
				} else t = e.offsetWidth, n = e.offsetHeight;
				return {
					width: t,
					height: n
				}
			},
			getPos: function(e, n) {
				return t.DOM.getPos(e, n)
			},
			getViewPort: function(e) {
				return t.DOM.getViewPort(e)
			},
			get: function(e) {
				return document.getElementById(e)
			},
			addClass: function(e, n) {
				return t.DOM.addClass(e, n)
			},
			removeClass: function(e, n) {
				return t.DOM.removeClass(e, n)
			},
			hasClass: function(e, n) {
				return t.DOM.hasClass(e, n)
			},
			toggleClass: function(e, n, r) {
				return t.DOM.toggleClass(e, n, r)
			},
			css: function(e, n, r) {
				return t.DOM.setStyle(e, n, r)
			},
			getRuntimeStyle: function(e, n) {
				return t.DOM.getStyle(e, n, !0)
			},
			on: function(e, n, r, i) {
				return t.DOM.bind(e, n, r, i)
			},
			off: function(e, n, r) {
				return t.DOM.unbind(e, n, r)
			},
			fire: function(e, n, r) {
				return t.DOM.fire(e, n, r)
			},
			innerHtml: function(e, n) {
				t.DOM.setHTML(e, n)
			}
		}
	}), r(K, [U, u, $, j, Y], function(e, t, n, r, i) {
		function o(e) {
			return e._eventDispatcher || (e._eventDispatcher = new n({
				scope: e,
				toggleEvent: function(t, r) {
					r && n.isNative(t) && (e._nativeEvents || (e._nativeEvents = {}), e._nativeEvents[t] = !0, e._rendered && e.bindPendingEvents())
				}
			})), e._eventDispatcher
		}
		var a = "onmousewheel" in document,
			s = !1,
			l = "mce-",
			c = e.extend({
				Statics: {
					classPrefix: l
				},
				isRtl: function() {
					return c.rtl
				},
				classPrefix: l,
				init: function(e) {
					var n = this,
						r, o;
					if (n.settings = e = t.extend({}, n.Defaults, e), n._id = e.id || i.id(), n._text = n._name = "", n._width = n._height = 0, n._aria = {
						role: e.role
					}, this._elmCache = {}, r = e.classes)
						for (r = r.split(" "), r.map = {}, o = r.length; o--;) r.map[r[o]] = !0;
					n._classes = r || [], n.visible(!0), t.each("title text width height name classes visible disabled active value".split(" "), function(t) {
						var r = e[t],
							i;
						r !== i ? n[t](r) : n["_" + t] === i && (n["_" + t] = !1)
					}), n.on("click", function() {
						return n.disabled() ? !1 : void 0
					}), e.classes && t.each(e.classes.split(" "), function(e) {
						n.addClass(e)
					}), n.settings = e, n._borderBox = n.parseBox(e.border), n._paddingBox = n.parseBox(e.padding), n._marginBox = n.parseBox(e.margin), e.hidden && n.hide()
				},
				Properties: "parent,title,text,width,height,disabled,active,name,value",
				Methods: "renderHtml",
				getContainerElm: function() {
					return document.body
				},
				getParentCtrl: function(e) {
					for (var t, n = this.getRoot().controlIdLookup; e && n && !(t = n[e.id]);) e = e.parentNode;
					return t
				},
				parseBox: function(e) {
					var t, n = 10;
					if (e) return "number" == typeof e ? (e = e || 0, {
						top: e,
						left: e,
						bottom: e,
						right: e
					}) : (e = e.split(" "), t = e.length, 1 === t ? e[1] = e[2] = e[3] = e[0] : 2 === t ? (e[2] = e[0], e[3] = e[1]) : 3 === t && (e[3] = e[1]), {
						top: parseInt(e[0], n) || 0,
						right: parseInt(e[1], n) || 0,
						bottom: parseInt(e[2], n) || 0,
						left: parseInt(e[3], n) || 0
					})
				},
				borderBox: function() {
					return this._borderBox
				},
				paddingBox: function() {
					return this._paddingBox
				},
				marginBox: function() {
					return this._marginBox
				},
				measureBox: function(e, t) {
					function n(t) {
						var n = document.defaultView;
						return n ? (t = t.replace(/[A-Z]/g, function(e) {
							return "-" + e
						}), n.getComputedStyle(e, null).getPropertyValue(t)) : e.currentStyle[t]
					}

					function r(e) {
						var t = parseFloat(n(e), 10);
						return isNaN(t) ? 0 : t
					}
					return {
						top: r(t + "TopWidth"),
						right: r(t + "RightWidth"),
						bottom: r(t + "BottomWidth"),
						left: r(t + "LeftWidth")
					}
				},
				initLayoutRect: function() {
					var e = this,
						t = e.settings,
						n, r, o = e.getEl(),
						a, s, l, c, u, d, f, p;
					n = e._borderBox = e._borderBox || e.measureBox(o, "border"), e._paddingBox = e._paddingBox || e.measureBox(o, "padding"), e._marginBox = e._marginBox || e.measureBox(o, "margin"), p = i.getSize(o), d = t.minWidth, f = t.minHeight, l = d || p.width, c = f || p.height, a = t.width, s = t.height, u = t.autoResize, u = "undefined" != typeof u ? u : !a && !s, a = a || l, s = s || c;
					var h = n.left + n.right,
						m = n.top + n.bottom,
						g = t.maxWidth || 65535,
						v = t.maxHeight || 65535;
					return e._layoutRect = r = {
						x: t.x || 0,
						y: t.y || 0,
						w: a,
						h: s,
						deltaW: h,
						deltaH: m,
						contentW: a - h,
						contentH: s - m,
						innerW: a - h,
						innerH: s - m,
						startMinWidth: d || 0,
						startMinHeight: f || 0,
						minW: Math.min(l, g),
						minH: Math.min(c, v),
						maxW: g,
						maxH: v,
						autoResize: u,
						scrollW: 0
					}, e._lastLayoutRect = {}, r
				},
				layoutRect: function(e) {
					var t = this,
						n = t._layoutRect,
						r, i, o, a, s, l;
					return n || (n = t.initLayoutRect()), e ? (o = n.deltaW, a = n.deltaH, e.x !== s && (n.x = e.x), e.y !== s && (n.y = e.y), e.minW !== s && (n.minW = e.minW), e.minH !== s && (n.minH = e.minH), i = e.w, i !== s && (i = i < n.minW ? n.minW : i, i = i > n.maxW ? n.maxW : i, n.w = i, n.innerW = i - o), i = e.h, i !== s && (i = i < n.minH ? n.minH : i, i = i > n.maxH ? n.maxH : i, n.h = i, n.innerH = i - a), i = e.innerW, i !== s && (i = i < n.minW - o ? n.minW - o : i, i = i > n.maxW - o ? n.maxW - o : i, n.innerW = i, n.w = i + o), i = e.innerH, i !== s && (i = i < n.minH - a ? n.minH - a : i, i = i > n.maxH - a ? n.maxH - a : i, n.innerH = i, n.h = i + a), e.contentW !== s && (n.contentW = e.contentW), e.contentH !== s && (n.contentH = e.contentH), r = t._lastLayoutRect, (r.x !== n.x || r.y !== n.y || r.w !== n.w || r.h !== n.h) && (l = c.repaintControls, l && l.map && !l.map[t._id] && (l.push(t), l.map[t._id] = !0), r.x = n.x, r.y = n.y, r.w = n.w, r.h = n.h), t) : n
				},
				repaint: function() {
					var e = this,
						t, n, r, i, o = 0,
						a = 0,
						s, l;
					l = document.createRange ? function(e) {
						return e
					} : Math.round, t = e.getEl().style, r = e._layoutRect, s = e._lastRepaintRect || {}, i = e._borderBox, o = i.left + i.right, a = i.top + i.bottom, r.x !== s.x && (t.left = l(r.x) + "px", s.x = r.x), r.y !== s.y && (t.top = l(r.y) + "px", s.y = r.y), r.w !== s.w && (t.width = l(r.w - o) + "px", s.w = r.w), r.h !== s.h && (t.height = l(r.h - a) + "px", s.h = r.h), e._hasBody && r.innerW !== s.innerW && (n = e.getEl("body").style, n.width = l(r.innerW) + "px", s.innerW = r.innerW), e._hasBody && r.innerH !== s.innerH && (n = n || e.getEl("body").style, n.height = l(r.innerH) + "px", s.innerH = r.innerH), e._lastRepaintRect = s, e.fire("repaint", {}, !1)
				},
				on: function(e, t) {
					function n(e) {
						var t, n;
						return "string" != typeof e ? e : function(i) {
							return t || r.parentsAndSelf().each(function(r) {
								var i = r.settings.callbacks;
								return i && (t = i[e]) ? (n = r, !1) : void 0
							}), t.call(n, i)
						}
					}
					var r = this;
					return o(r).on(e, n(t)), r
				},
				off: function(e, t) {
					return o(this).off(e, t), this
				},
				fire: function(e, t, n) {
					var r = this;
					if (t = t || {}, t.control || (t.control = r), t = o(r).fire(e, t), n !== !1 && r.parent)
						for (var i = r.parent(); i && !t.isPropagationStopped();) i.fire(e, t, !1), i = i.parent();
					return t
				},
				hasEventListeners: function(e) {
					return o(this).has(e)
				},
				parents: function(e) {
					var t = this,
						n, i = new r;
					for (n = t.parent(); n; n = n.parent()) i.add(n);
					return e && (i = i.filter(e)), i
				},
				parentsAndSelf: function(e) {
					return new r(this).add(this.parents(e))
				},
				next: function() {
					var e = this.parent().items();
					return e[e.indexOf(this) + 1]
				},
				prev: function() {
					var e = this.parent().items();
					return e[e.indexOf(this) - 1]
				},
				findCommonAncestor: function(e, t) {
					for (var n; e;) {
						for (n = t; n && e != n;) n = n.parent();
						if (e == n) break;
						e = e.parent()
					}
					return e
				},
				hasClass: function(e, t) {
					var n = this._classes[t || "control"];
					return e = this.classPrefix + e, n && !!n.map[e]
				},
				addClass: function(e, t) {
					var n = this,
						r, i;
					return e = this.classPrefix + e, r = n._classes[t || "control"], r || (r = [], r.map = {}, n._classes[t || "control"] = r), r.map[e] || (r.map[e] = e, r.push(e), n._rendered && (i = n.getEl(t), i && (i.className = r.join(" ")))), n
				},
				removeClass: function(e, t) {
					var n = this,
						r, i, o;
					if (e = this.classPrefix + e, r = n._classes[t || "control"], r && r.map[e])
						for (delete r.map[e], i = r.length; i--;) r[i] === e && r.splice(i, 1);
					return n._rendered && (o = n.getEl(t), o && (o.className = r.join(" "))), n
				},
				toggleClass: function(e, t, n) {
					var r = this;
					return t ? r.addClass(e, n) : r.removeClass(e, n), r
				},
				classes: function(e) {
					var t = this._classes[e || "control"];
					return t ? t.join(" ") : ""
				},
				innerHtml: function(e) {
					return i.innerHtml(this.getEl(), e), this
				},
				getEl: function(e) {
					var t = e ? this._id + "-" + e : this._id;
					return this._elmCache[t] || (this._elmCache[t] = i.get(t)), this._elmCache[t]
				},
				visible: function(e) {
					var t = this,
						n;
					return "undefined" != typeof e ? (t._visible !== e && (t._rendered && (t.getEl().style.display = e ? "" : "none"), t._visible = e, n = t.parent(), n && (n._lastRect = null), t.fire(e ? "show" : "hide")), t) : t._visible
				},
				show: function() {
					return this.visible(!0)
				},
				hide: function() {
					return this.visible(!1)
				},
				focus: function() {
					try {
						this.getEl().focus()
					} catch (e) {}
					return this
				},
				blur: function() {
					return this.getEl().blur(), this
				},
				aria: function(e, t) {
					var n = this,
						r = n.getEl(n.ariaTarget);
					return "undefined" == typeof t ? n._aria[e] : (n._aria[e] = t, n._rendered && r.setAttribute("role" == e ? e : "aria-" + e, t), n)
				},
				encode: function(e, t) {
					return t !== !1 && (e = this.translate(e)), (e || "").replace(/[&<>"]/g, function(e) {
						return "&#" + e.charCodeAt(0) + ";"
					})
				},
				translate: function(e) {
					return c.translate ? c.translate(e) : e
				},
				before: function(e) {
					var t = this,
						n = t.parent();
					return n && n.insert(e, n.items().indexOf(t), !0), t
				},
				after: function(e) {
					var t = this,
						n = t.parent();
					return n && n.insert(e, n.items().indexOf(t)), t
				},
				remove: function() {
					var e = this,
						t = e.getEl(),
						n = e.parent(),
						r, o;
					if (e.items) {
						var a = e.items().toArray();
						for (o = a.length; o--;) a[o].remove()
					}
					n && n.items && (r = [], n.items().each(function(t) {
						t !== e && r.push(t)
					}), n.items().set(r), n._lastRect = null), e._eventsRoot && e._eventsRoot == e && i.off(t);
					var s = e.getRoot().controlIdLookup;
					return s && delete s[e._id], t && t.parentNode && t.parentNode.removeChild(t), e._rendered = !1, e
				},
				renderBefore: function(e) {
					var t = this;
					return e.parentNode.insertBefore(i.createFragment(t.renderHtml()), e), t.postRender(), t
				},
				renderTo: function(e) {
					var t = this;
					return e = e || t.getContainerElm(), e.appendChild(i.createFragment(t.renderHtml())), t.postRender(), t
				},
				postRender: function() {
					var e = this,
						t = e.settings,
						n, r, o, a, s;
					for (a in t) 0 === a.indexOf("on") && e.on(a.substr(2), t[a]);
					if (e._eventsRoot) {
						for (o = e.parent(); !s && o; o = o.parent()) s = o._eventsRoot;
						if (s)
							for (a in s._nativeEvents) e._nativeEvents[a] = !0
					}
					e.bindPendingEvents(), t.style && (n = e.getEl(), n && (n.setAttribute("style", t.style), n.style.cssText = t.style)), e._visible || i.css(e.getEl(), "display", "none"), e.settings.border && (r = e.borderBox(), i.css(e.getEl(), {
						"border-top-width": r.top,
						"border-right-width": r.right,
						"border-bottom-width": r.bottom,
						"border-left-width": r.left
					}));
					var l = e.getRoot();
					l.controlIdLookup || (l.controlIdLookup = {}), l.controlIdLookup[e._id] = e;
					for (var c in e._aria) e.aria(c, e._aria[c]);
					e.fire("postrender", {}, !1)
				},
				scrollIntoView: function(e) {
					function t(e, t) {
						var n, r, i = e;
						for (n = r = 0; i && i != t && i.nodeType;) n += i.offsetLeft || 0, r += i.offsetTop || 0, i = i.offsetParent;
						return {
							x: n,
							y: r
						}
					}
					var n = this.getEl(),
						r = n.parentNode,
						i, o, a, s, l, c, u = t(n, r);
					return i = u.x, o = u.y, a = n.offsetWidth, s = n.offsetHeight, l = r.clientWidth, c = r.clientHeight, "end" == e ? (i -= l - a, o -= c - s) : "center" == e && (i -= l / 2 - a / 2, o -= c / 2 - s / 2), r.scrollLeft = i, r.scrollTop = o, this
				},
				bindPendingEvents: function() {
					function e(e) {
						var t = o.getParentCtrl(e.target);
						t && t.fire(e.type, e)
					}

					function t() {
						var e = d._lastHoverCtrl;
						e && (e.fire("mouseleave", {
							target: e.getEl()
						}), e.parents().each(function(e) {
							e.fire("mouseleave", {
								target: e.getEl()
							})
						}), d._lastHoverCtrl = null)
					}

					function n(e) {
						var t = o.getParentCtrl(e.target),
							n = d._lastHoverCtrl,
							r = 0,
							i, a, s;
						if (t !== n) {
							if (d._lastHoverCtrl = t, a = t.parents().toArray().reverse(), a.push(t), n) {
								for (s = n.parents().toArray().reverse(), s.push(n), r = 0; r < s.length && a[r] === s[r]; r++);
								for (i = s.length - 1; i >= r; i--) n = s[i], n.fire("mouseleave", {
									target: n.getEl()
								})
							}
							for (i = r; i < a.length; i++) t = a[i], t.fire("mouseenter", {
								target: t.getEl()
							})
						}
					}

					function r(e) {
						e.preventDefault(), "mousewheel" == e.type ? (e.deltaY = -1 / 40 * e.wheelDelta, e.wheelDeltaX && (e.deltaX = -1 / 40 * e.wheelDeltaX)) : (e.deltaX = 0, e.deltaY = e.detail), e = o.fire("wheel", e)
					}
					var o = this,
						l, c, u, d, f, p;
					if (o._rendered = !0, f = o._nativeEvents) {
						for (u = o.parents().toArray(), u.unshift(o), l = 0, c = u.length; !d && c > l; l++) d = u[l]._eventsRoot;
						for (d || (d = u[u.length - 1] || o), o._eventsRoot = d, c = l, l = 0; c > l; l++) u[l]._eventsRoot = d;
						var h = d._delegates;
						h || (h = d._delegates = {});
						for (p in f) {
							if (!f) return !1;
							"wheel" !== p || s ? ("mouseenter" === p || "mouseleave" === p ? d._hasMouseEnter || (i.on(d.getEl(), "mouseleave", t), i.on(d.getEl(), "mouseover", n), d._hasMouseEnter = 1) : h[p] || (i.on(d.getEl(), p, e), h[p] = !0), f[p] = !1) : a ? i.on(o.getEl(), "mousewheel", r) : i.on(o.getEl(), "DOMMouseScroll", r)
						}
					}
				},
				getRoot: function() {
					for (var e = this, t, n = []; e;) {
						if (e.rootControl) {
							t = e.rootControl;
							break
						}
						n.push(e), t = e, e = e.parent()
					}
					t || (t = this);
					for (var r = n.length; r--;) n[r].rootControl = t;
					return t
				},
				reflow: function() {
					return this.repaint(), this
				}
			});
		return c
	}), r(G, [], function() {
		var e = {},
			t;
		return {
			add: function(t, n) {
				e[t.toLowerCase()] = n
			},
			has: function(t) {
				return !!e[t.toLowerCase()]
			},
			create: function(n, r) {
				var i, o, a;
				if (!t) {
					a = tinymce.ui;
					for (o in a) e[o.toLowerCase()] = a[o];
					t = !0
				}
				if ("string" == typeof n ? (r = r || {}, r.type = n) : (r = n, n = r.type), n = n.toLowerCase(), i = e[n], !i) throw new Error("Could not find control by type: " + n);
				return i = new i(r), i.type = n, i
			}
		}
	}), r(X, [], function() {
		return function(e) {
			function t(e) {
				return e = e || b, e && e.getAttribute("role")
			}

			function n(e) {
				for (var n, r = e || b; r = r.parentNode;)
					if (n = t(r)) return n
			}

			function r(e) {
				var t = b;
				return t ? t.getAttribute("aria-" + e) : void 0
			}

			function i(e) {
				var t = e.tagName.toUpperCase();
				return "INPUT" == t || "TEXTAREA" == t
			}

			function o(e) {
				return i(e) && !e.hidden ? !0 : /^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell)$/.test(t(e)) ? !0 : !1
			}

			function a(e) {
				function t(e) {
					if (1 == e.nodeType && "none" != e.style.display) {
						o(e) && n.push(e);
						for (var r = 0; r < e.childNodes.length; r++) t(e.childNodes[r])
					}
				}
				var n = [];
				return t(e || y.getEl()), n
			}

			function s(e) {
				var t, n;
				e = e || C, n = e.parents().toArray(), n.unshift(e);
				for (var r = 0; r < n.length && (t = n[r], !t.settings.ariaRoot); r++);
				return t
			}

			function l(e) {
				var t = s(e),
					n = a(t.getEl());
				t.settings.ariaRemember && "lastAriaIndex" in t ? c(t.lastAriaIndex, n) : c(0, n)
			}

			function c(e, t) {
				return 0 > e ? e = t.length - 1 : e >= t.length && (e = 0), t[e] && t[e].focus(), e
			}

			function u(e, t) {
				var n = -1,
					r = s();
				t = t || a(r.getEl());
				for (var i = 0; i < t.length; i++) t[i] === b && (n = i);
				n += e, r.lastAriaIndex = c(n, t)
			}

			function d() {
				var e = n();
				"tablist" == e ? u(-1, a(b.parentNode)) : C.parent().submenu ? g() : u(-1)
			}

			function f() {
				var e = t(),
					i = n();
				"tablist" == i ? u(1, a(b.parentNode)) : "menuitem" == e && "menu" == i && r("haspopup") ? v() : u(1)
			}

			function p() {
				u(-1)
			}

			function h() {
				var e = t(),
					i = n();
				"menuitem" == e && "menubar" == i ? v() : "button" == e && r("haspopup") ? v({
					key: "down"
				}) : u(1)
			}

			function m(e) {
				var t = n();
				if ("tablist" == t) {
					var r = a(C.getEl("body"))[0];
					r && r.focus()
				} else u(e.shiftKey ? -1 : 1)
			}

			function g() {
				C.fire("cancel")
			}

			function v(e) {
				e = e || {}, C.fire("click", {
					target: b,
					aria: e
				})
			}
			var y = e.root,
				b, C;
			try {
				b = document.activeElement
			} catch (x) {
				b = document.body
			}
			return C = y.getParentCtrl(b), y.on("keydown", function(e) {
				function t(e, t) {
					i(b) || t(e) !== !1 && e.preventDefault()
				}
				if (!e.isDefaultPrevented()) switch (e.keyCode) {
					case 37:
						t(e, d);
						break;
					case 39:
						t(e, f);
						break;
					case 38:
						t(e, p);
						break;
					case 40:
						t(e, h);
						break;
					case 27:
						g();
						break;
					case 14:
					case 13:
					case 32:
						t(e, v);
						break;
					case 9:
						m(e) !== !1 && e.preventDefault()
				}
			}), y.on("focusin", function(e) {
				b = e.target, C = e.control
			}), {
				focusFirst: l
			}
		}
	}), r(J, [K, j, q, G, X, u, Y], function(e, t, n, r, i, o, a) {
		var s = {};
		return e.extend({
			layout: "",
			innerClass: "container-inner",
			init: function(e) {
				var n = this;
				n._super(e), e = n.settings, n._fixed = e.fixed, n._items = new t, n.isRtl() && n.addClass("rtl"), n.addClass("container"), n.addClass("container-body", "body"), e.containerCls && n.addClass(e.containerCls), n._layout = r.create((e.layout || n.layout) + "layout"), n.settings.items && n.add(n.settings.items), n._hasBody = !0
			},
			items: function() {
				return this._items
			},
			find: function(e) {
				return e = s[e] = s[e] || new n(e), e.find(this)
			},
			add: function(e) {
				var t = this;
				return t.items().add(t.create(e)).parent(t), t
			},
			focus: function(e) {
				var t = this,
					n, r, i;
				return e && (r = t.keyboardNav || t.parents().eq(-1)[0].keyboardNav) ? void r.focusFirst(t) : (i = t.find("*"), t.statusbar && i.add(t.statusbar.items()), i.each(function(e) {
					return e.settings.autofocus ? (n = null, !1) : void(e.canFocus && (n = n || e))
				}), n && n.focus(), t)
			},
			replace: function(e, t) {
				for (var n, r = this.items(), i = r.length; i--;)
					if (r[i] === e) {
						r[i] = t;
						break
					}
				i >= 0 && (n = t.getEl(), n && n.parentNode.removeChild(n), n = e.getEl(), n && n.parentNode.removeChild(n)), t.parent(this)
			},
			create: function(t) {
				var n = this,
					i, a = [];
				return o.isArray(t) || (t = [t]), o.each(t, function(t) {
					t && (t instanceof e || ("string" == typeof t && (t = {
						type: t
					}), i = o.extend({}, n.settings.defaults, t), t.type = i.type = i.type || t.type || n.settings.defaultType || (i.defaults ? i.defaults.type : null), t = r.create(i)), a.push(t))
				}), a
			},
			renderNew: function() {
				var e = this;
				return e.items().each(function(t, n) {
					var r, i;
					t.parent(e), t._rendered || (r = e.getEl("body"), i = a.createFragment(t.renderHtml()), r.hasChildNodes() && n <= r.childNodes.length - 1 ? r.insertBefore(i, r.childNodes[n]) : r.appendChild(i), t.postRender())
				}), e._layout.applyClasses(e), e._lastRect = null, e
			},
			append: function(e) {
				return this.add(e).renderNew()
			},
			prepend: function(e) {
				var t = this;
				return t.items().set(t.create(e).concat(t.items().toArray())), t.renderNew()
			},
			insert: function(e, t, n) {
				var r = this,
					i, o, a;
				return e = r.create(e), i = r.items(), !n && t < i.length - 1 && (t += 1), t >= 0 && t < i.length && (o = i.slice(0, t).toArray(), a = i.slice(t).toArray(), i.set(o.concat(e, a))), r.renderNew()
			},
			fromJSON: function(e) {
				var t = this;
				for (var n in e) t.find("#" + n).value(e[n]);
				return t
			},
			toJSON: function() {
				var e = this,
					t = {};
				return e.find("*").each(function(e) {
					var n = e.name(),
						r = e.value();
					n && "undefined" != typeof r && (t[n] = r)
				}), t
			},
			preRender: function() {},
			renderHtml: function() {
				var e = this,
					t = e._layout,
					n = this.settings.role;
				return e.preRender(), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '"' + (n ? ' role="' + this.settings.role + '"' : "") + '><div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
			},
			postRender: function() {
				var e = this,
					t;
				return e.items().exec("postRender"), e._super(), e._layout.postRender(e), e._rendered = !0, e.settings.style && a.css(e.getEl(), e.settings.style), e.settings.border && (t = e.borderBox(), a.css(e.getEl(), {
					"border-top-width": t.top,
					"border-right-width": t.right,
					"border-bottom-width": t.bottom,
					"border-left-width": t.left
				})), e.parent() || (e.keyboardNav = new i({
					root: e
				})), e
			},
			initLayoutRect: function() {
				var e = this,
					t = e._super();
				return e._layout.recalc(e), t
			},
			recalc: function() {
				var e = this,
					t = e._layoutRect,
					n = e._lastRect;
				return n && n.w == t.w && n.h == t.h ? void 0 : (e._layout.recalc(e), t = e.layoutRect(), e._lastRect = {
					x: t.x,
					y: t.y,
					w: t.w,
					h: t.h
				}, !0)
			},
			reflow: function() {
				var t;
				if (this.visible()) {
					for (e.repaintControls = [], e.repaintControls.map = {}, this.recalc(), t = e.repaintControls.length; t--;) e.repaintControls[t].repaint();
					"flow" !== this.settings.layout && "stack" !== this.settings.layout && this.repaint(), e.repaintControls = []
				}
				return this
			}
		})
	}), r(Q, [Y], function(e) {
		function t() {
			var e = document,
				t, n, r, i, o, a, s, l, c = Math.max;
			return t = e.documentElement, n = e.body, r = c(t.scrollWidth, n.scrollWidth), i = c(t.clientWidth, n.clientWidth), o = c(t.offsetWidth, n.offsetWidth), a = c(t.scrollHeight, n.scrollHeight), s = c(t.clientHeight, n.clientHeight), l = c(t.offsetHeight, n.offsetHeight), {
				width: o > r ? i : r,
				height: l > a ? s : a
			}
		}
		return function(n, r) {
			function i() {
				return a.getElementById(r.handle || n)
			}
			var o, a = document,
				s, l, c, u, d, f;
			r = r || {}, l = function(n) {
				var l = t(),
					p, h;
				n.preventDefault(), s = n.button, p = i(), d = n.screenX, f = n.screenY, h = window.getComputedStyle ? window.getComputedStyle(p, null).getPropertyValue("cursor") : p.runtimeStyle.cursor, o = a.createElement("div"), e.css(o, {
					position: "absolute",
					top: 0,
					left: 0,
					width: l.width,
					height: l.height,
					zIndex: 2147483647,
					opacity: 1e-4,
					cursor: h
				}), a.body.appendChild(o), e.on(a, "mousemove", u), e.on(a, "mouseup", c), r.start(n)
			}, u = function(e) {
				return e.button !== s ? c(e) : (e.deltaX = e.screenX - d, e.deltaY = e.screenY - f, e.preventDefault(), void r.drag(e))
			}, c = function(t) {
				e.off(a, "mousemove", u), e.off(a, "mouseup", c), o.parentNode.removeChild(o), r.stop && r.stop(t)
			}, this.destroy = function() {
				e.off(i())
			}, e.on(i(), "mousedown", l)
		}
	}), r(Z, [Y, Q], function(e, t) {
		return {
			init: function() {
				var e = this;
				e.on("repaint", e.renderScroll)
			},
			renderScroll: function() {
				function n() {
					function t(t, a, s, l, c, u) {
						var d, f, p, h, m, g, v, y, b;
						if (f = i.getEl("scroll" + t)) {
							if (y = a.toLowerCase(), b = s.toLowerCase(), i.getEl("absend") && e.css(i.getEl("absend"), y, i.layoutRect()[l] - 1), !c) return void e.css(f, "display", "none");
							e.css(f, "display", "block"), d = i.getEl("body"), p = i.getEl("scroll" + t + "t"), h = d["client" + s] - 2 * o, h -= n && r ? f["client" + u] : 0, m = d["scroll" + s], g = h / m, v = {}, v[y] = d["offset" + a] + o, v[b] = h, e.css(f, v), v = {}, v[y] = d["scroll" + a] * g, v[b] = h * g, e.css(p, v)
						}
					}
					var n, r, a;
					a = i.getEl("body"), n = a.scrollWidth > a.clientWidth, r = a.scrollHeight > a.clientHeight, t("h", "Left", "Width", "contentW", n, "Height"), t("v", "Top", "Height", "contentH", r, "Width")
				}

				function r() {
					function n(n, r, a, s, l) {
						var c, u = i._id + "-scroll" + n,
							d = i.classPrefix;
						i.getEl().appendChild(e.createFragment('<div id="' + u + '" class="' + d + "scrollbar " + d + "scrollbar-" + n + '"><div id="' + u + 't" class="' + d + 'scrollbar-thumb"></div></div>')), i.draghelper = new t(u + "t", {
							start: function() {
								c = i.getEl("body")["scroll" + r], e.addClass(e.get(u), d + "active")
							},
							drag: function(e) {
								var t, u, d, f, p = i.layoutRect();
								u = p.contentW > p.innerW, d = p.contentH > p.innerH, f = i.getEl("body")["client" + a] - 2 * o, f -= u && d ? i.getEl("scroll" + n)["client" + l] : 0, t = f / i.getEl("body")["scroll" + a], i.getEl("body")["scroll" + r] = c + e["delta" + s] / t
							},
							stop: function() {
								e.removeClass(e.get(u), d + "active")
							}
						})
					}
					i.addClass("scroll"), n("v", "Top", "Height", "Y", "Width"), n("h", "Left", "Width", "X", "Height")
				}
				var i = this,
					o = 2;
				i.settings.autoScroll && (i._hasScroll || (i._hasScroll = !0, r(), i.on("wheel", function(e) {
					var t = i.getEl("body");
					t.scrollLeft += 10 * (e.deltaX || 0), t.scrollTop += 10 * e.deltaY, n()
				}), e.on(i.getEl("body"), "scroll", n)), n())
			}
		}
	}), r(et, [J, Z], function(e, t) {
		return e.extend({
			Defaults: {
				layout: "fit",
				containerCls: "panel"
			},
			Mixins: [t],
			renderHtml: function() {
				var e = this,
					t = e._layout,
					n = e.settings.html;
				return e.preRender(), t.preRender(e), "undefined" == typeof n ? n = '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + t.renderHtml(e) + "</div>" : ("function" == typeof n && (n = n.call(e)), e._hasBody = !1), '<div id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1" role="group">' + (e._preBodyHtml || "") + n + "</div>"
			}
		})
	}), r(tt, [Y], function(e) {
		function t(t, n, r) {
			var i, o, a, s, l, c, u, d, f, p;
			return f = e.getViewPort(), o = e.getPos(n), a = o.x, s = o.y, t._fixed && "static" == e.getRuntimeStyle(document.body, "position") && (a -= f.x, s -= f.y), i = t.getEl(), p = e.getSize(i), l = p.width, c = p.height, p = e.getSize(n), u = p.width, d = p.height, r = (r || "").split(""), "b" === r[0] && (s += d), "r" === r[1] && (a += u), "c" === r[0] && (s += Math.round(d / 2)), "c" === r[1] && (a += Math.round(u / 2)), "b" === r[3] && (s -= c), "r" === r[4] && (a -= l), "c" === r[3] && (s -= Math.round(c / 2)), "c" === r[4] && (a -= Math.round(l / 2)), {
				x: a,
				y: s,
				w: l,
				h: c
			}
		}
		return {
			testMoveRel: function(n, r) {
				for (var i = e.getViewPort(), o = 0; o < r.length; o++) {
					var a = t(this, n, r[o]);
					if (this._fixed) {
						if (a.x > 0 && a.x + a.w < i.w && a.y > 0 && a.y + a.h < i.h) return r[o]
					} else if (a.x > i.x && a.x + a.w < i.w + i.x && a.y > i.y && a.y + a.h < i.h + i.y) return r[o]
				}
				return r[0]
			},
			moveRel: function(e, n) {
				"string" != typeof n && (n = this.testMoveRel(e, n));
				var r = t(this, e, n);
				return this.moveTo(r.x, r.y)
			},
			moveBy: function(e, t) {
				var n = this,
					r = n.layoutRect();
				return n.moveTo(r.x + e, r.y + t), n
			},
			moveTo: function(t, n) {
				function r(e, t, n) {
					return 0 > e ? 0 : e + n > t ? (e = t - n, 0 > e ? 0 : e) : e
				}
				var i = this;
				if (i.settings.constrainToViewport) {
					var o = e.getViewPort(window),
						a = i.layoutRect();
					t = r(t, o.w + o.x, a.w), n = r(n, o.h + o.y, a.h)
				}
				return i._rendered ? i.layoutRect({
					x: t,
					y: n
				}).repaint() : (i.settings.x = t, i.settings.y = n), i.fire("move", {
					x: t,
					y: n
				}), i
			}
		}
	}), r(nt, [Y], function(e) {
		return {
			resizeToContent: function() {
				this._layoutRect.autoResize = !0, this._lastRect = null, this.reflow()
			},
			resizeTo: function(t, n) {
				if (1 >= t || 1 >= n) {
					var r = e.getWindowSize();
					t = 1 >= t ? t * r.w : t, n = 1 >= n ? n * r.h : n
				}
				return this._layoutRect.autoResize = !1, this.layoutRect({
					minW: t,
					minH: n,
					w: t,
					h: n
				}).reflow()
			},
			resizeBy: function(e, t) {
				var n = this,
					r = n.layoutRect();
				return n.resizeTo(r.w + e, r.h + t)
			}
		}
	}), r(rt, [et, tt, nt, Y], function(e, t, n, r) {
		function i() {
			function e(e, t) {
				for (; e;) {
					if (e == t) return !0;
					e = e.parent()
				}
			}
			u || (u = function(t) {
				if (2 != t.button)
					for (var n = p.length; n--;) {
						var r = p[n],
							i = r.getParentCtrl(t.target);
						if (r.settings.autohide) {
							if (i && (e(i, r) || r.parent() === i)) continue;
							t = r.fire("autohide", {
								target: t.target
							}), t.isDefaultPrevented() || r.hide()
						}
					}
			}, r.on(document, "click", u))
		}

		function o() {
			d || (d = function() {
				var e;
				for (e = p.length; e--;) s(p[e])
			}, r.on(window, "scroll", d))
		}

		function a() {
			if (!f) {
				var e = document.documentElement,
					t = e.clientWidth,
					n = e.clientHeight;
				f = function() {
					document.all && t == e.clientWidth && n == e.clientHeight || (t = e.clientWidth, n = e.clientHeight, g.hideAll())
				}, r.on(window, "resize", f)
			}
		}

		function s(e) {
			function t(t, n) {
				for (var r, i = 0; i < p.length; i++)
					if (p[i] != e)
						for (r = p[i].parent(); r && (r = r.parent());) r == e && p[i].fixed(t).moveBy(0, n).repaint()
			}
			var n = r.getViewPort().y;
			e.settings.autofix && (e._fixed ? e._autoFixY > n && (e.fixed(!1).layoutRect({
				y: e._autoFixY
			}).repaint(), t(!1, e._autoFixY - n)) : (e._autoFixY = e.layoutRect().y, e._autoFixY < n && (e.fixed(!0).layoutRect({
				y: 0
			}).repaint(), t(!0, n - e._autoFixY))))
		}

		function l(e, t) {
			var n, i = g.zIndex || 65535,
				o;
			if (e) h.push(t);
			else
				for (n = h.length; n--;) h[n] === t && h.splice(n, 1); if (h.length)
				for (n = 0; n < h.length; n++) h[n].modal && (i++, o = h[n]), h[n].getEl().style.zIndex = i, h[n].zIndex = i, i++;
			var a = document.getElementById(t.classPrefix + "modal-block");
			o ? r.css(a, "z-index", o.zIndex - 1) : a && (a.parentNode.removeChild(a), m = !1), g.currentZIndex = i
		}

		function c(e) {
			var t;
			for (t = p.length; t--;) p[t] === e && p.splice(t, 1);
			for (t = h.length; t--;) h[t] === e && h.splice(t, 1)
		}
		var u, d, f, p = [],
			h = [],
			m, g = e.extend({
				Mixins: [t, n],
				init: function(e) {
					var t = this;
					t._super(e), t._eventsRoot = t, t.addClass("floatpanel"), e.autohide && (i(), a(), p.push(t)), e.autofix && (o(), t.on("move", function() {
						s(this)
					})), t.on("postrender show", function(e) {
						if (e.control == t) {
							var n, i = t.classPrefix;
							t.modal && !m && (n = r.createFragment('<div id="' + i + 'modal-block" class="' + i + "reset " + i + 'fade"></div>'), n = n.firstChild, t.getContainerElm().appendChild(n), setTimeout(function() {
								r.addClass(n, i + "in"), r.addClass(t.getEl(), i + "in")
							}, 0), m = !0), l(!0, t)
						}
					}), t.on("show", function() {
						t.parents().each(function(e) {
							return e._fixed ? (t.fixed(!0), !1) : void 0
						})
					}), e.popover && (t._preBodyHtml = '<div class="' + t.classPrefix + 'arrow"></div>', t.addClass("popover").addClass("bottom").addClass(t.isRtl() ? "end" : "start"))
				},
				fixed: function(e) {
					var t = this;
					if (t._fixed != e) {
						if (t._rendered) {
							var n = r.getViewPort();
							e ? t.layoutRect().y -= n.y : t.layoutRect().y += n.y
						}
						t.toggleClass("fixed", e), t._fixed = e
					}
					return t
				},
				show: function() {
					var e = this,
						t, n = e._super();
					for (t = p.length; t-- && p[t] !== e;);
					return -1 === t && p.push(e), n
				},
				hide: function() {
					return c(this), l(!1, this), this._super()
				},
				hideAll: function() {
					g.hideAll()
				},
				close: function() {
					var e = this;
					return e.fire("close").isDefaultPrevented() || (e.remove(), l(!1, e)), e
				},
				remove: function() {
					c(this), this._super()
				},
				postRender: function() {
					var e = this;
					return e.settings.bodyRole && this.getEl("body").setAttribute("role", e.settings.bodyRole), e._super()
				}
			});
		return g.hideAll = function() {
			for (var e = p.length; e--;) {
				var t = p[e];
				t && t.settings.autohide && (t.hide(), p.splice(e, 1))
			}
		}, g
	}), r(it, [rt, et, Y, Q], function(e, t, n, r) {
		var i = e.extend({
			modal: !0,
			Defaults: {
				border: 1,
				layout: "flex",
				containerCls: "panel",
				role: "dialog",
				callbacks: {
					submit: function() {
						this.fire("submit", {
							data: this.toJSON()
						})
					},
					close: function() {
						this.close()
					}
				}
			},
			init: function(e) {
				var n = this;
				n._super(e), n.isRtl() && n.addClass("rtl"), n.addClass("window"), n._fixed = !0, e.buttons && (n.statusbar = new t({
					layout: "flex",
					border: "1 0 0 0",
					spacing: 3,
					padding: 10,
					align: "center",
					pack: n.isRtl() ? "start" : "end",
					defaults: {
						type: "button"
					},
					items: e.buttons
				}), n.statusbar.addClass("foot"), n.statusbar.parent(n)), n.on("click", function(e) {
					-1 != e.target.className.indexOf(n.classPrefix + "close") && n.close()
				}), n.on("cancel", function() {
					n.close()
				}), n.aria("describedby", n.describedBy || n._id + "-none"), n.aria("label", e.title), n._fullscreen = !1
			},
			recalc: function() {
				var e = this,
					t = e.statusbar,
					r, i, o, a;
				e._fullscreen && (e.layoutRect(n.getWindowSize()), e.layoutRect().contentH = e.layoutRect().innerH), e._super(), r = e.layoutRect(), e.settings.title && !e._fullscreen && (i = r.headerW, i > r.w && (o = r.x - Math.max(0, i / 2), e.layoutRect({
					w: i,
					x: o
				}), a = !0)), t && (t.layoutRect({
					w: e.layoutRect().innerW
				}).recalc(), i = t.layoutRect().minW + r.deltaW, i > r.w && (o = r.x - Math.max(0, i - r.w), e.layoutRect({
					w: i,
					x: o
				}), a = !0)), a && e.recalc()
			},
			initLayoutRect: function() {
				var e = this,
					t = e._super(),
					r = 0,
					i;
				if (e.settings.title && !e._fullscreen) {
					i = e.getEl("head");
					var o = n.getSize(i);
					t.headerW = o.width, t.headerH = o.height, r += t.headerH
				}
				e.statusbar && (r += e.statusbar.layoutRect().h), t.deltaH += r, t.minH += r, t.h += r;
				var a = n.getWindowSize();
				return t.x = Math.max(0, a.w / 2 - t.w / 2), t.y = Math.max(0, a.h / 2 - t.h / 2), t
			},
			renderHtml: function() {
				var e = this,
					t = e._layout,
					n = e._id,
					r = e.classPrefix,
					i = e.settings,
					o = "",
					a = "",
					s = i.html;
				return e.preRender(), t.preRender(e), i.title && (o = '<div id="' + n + '-head" class="' + r + 'window-head"><div id="' + n + '-title" class="' + r + 'title">' + e.encode(i.title) + '</div><button type="button" class="' + r + 'close" aria-hidden="true">\xd7</button><div id="' + n + '-dragh" class="' + r + 'dragh"></div></div>'), i.url && (s = '<iframe src="' + i.url + '" tabindex="-1"></iframe>'), "undefined" == typeof s && (s = t.renderHtml(e)), e.statusbar && (a = e.statusbar.renderHtml()), '<div id="' + n + '" class="' + e.classes() + '" hidefocus="1"><div class="' + e.classPrefix + 'reset" role="application">' + o + '<div id="' + n + '-body" class="' + e.classes("body") + '">' + s + "</div>" + a + "</div></div>"
			},
			fullscreen: function(e) {
				var t = this,
					r = document.documentElement,
					i, o = t.classPrefix,
					a;
				if (e != t._fullscreen)
					if (n.on(window, "resize", function() {
						var e;
						if (t._fullscreen)
							if (i) t._timer || (t._timer = setTimeout(function() {
								var e = n.getWindowSize();
								t.moveTo(0, 0).resizeTo(e.w, e.h), t._timer = 0
							}, 50));
							else {
								e = (new Date).getTime();
								var r = n.getWindowSize();
								t.moveTo(0, 0).resizeTo(r.w, r.h), (new Date).getTime() - e > 50 && (i = !0)
							}
					}), a = t.layoutRect(), t._fullscreen = e, e) {
						t._initial = {
							x: a.x,
							y: a.y,
							w: a.w,
							h: a.h
						}, t._borderBox = t.parseBox("0"), t.getEl("head").style.display = "none", a.deltaH -= a.headerH + 2, n.addClass(r, o + "fullscreen"), n.addClass(document.body, o + "fullscreen"), t.addClass("fullscreen");
						var s = n.getWindowSize();
						t.moveTo(0, 0).resizeTo(s.w, s.h)
					} else t._borderBox = t.parseBox(t.settings.border), t.getEl("head").style.display = "", a.deltaH += a.headerH, n.removeClass(r, o + "fullscreen"), n.removeClass(document.body, o + "fullscreen"), t.removeClass("fullscreen"), t.moveTo(t._initial.x, t._initial.y).resizeTo(t._initial.w, t._initial.h);
				return t.reflow()
			},
			postRender: function() {
				var e = this,
					t;
				setTimeout(function() {
					e.addClass("in")
				}, 0), e._super(), e.statusbar && e.statusbar.postRender(), e.focus(), this.dragHelper = new r(e._id + "-dragh", {
					start: function() {
						t = {
							x: e.layoutRect().x,
							y: e.layoutRect().y
						}
					},
					drag: function(n) {
						e.moveTo(t.x + n.deltaX, t.y + n.deltaY)
					}
				}), e.on("submit", function(t) {
					t.isDefaultPrevented() || e.close()
				})
			},
			submit: function() {
				return this.fire("submit", {
					data: this.toJSON()
				})
			},
			remove: function() {
				var e = this,
					t = e.classPrefix;
				e.dragHelper.destroy(), e._super(), e.statusbar && this.statusbar.remove(), e._fullscreen && (n.removeClass(document.documentElement, t + "fullscreen"), n.removeClass(document.body, t + "fullscreen"))
			},
			getContentWindow: function() {
				var e = this.getEl().getElementsByTagName("iframe")[0];
				return e ? e.contentWindow : null
			}
		});
		return i
	}), r(ot, [it], function(e) {
		var t = e.extend({
			init: function(e) {
				e = {
					border: 1,
					padding: 20,
					layout: "flex",
					pack: "center",
					align: "center",
					containerCls: "panel",
					autoScroll: !0,
					buttons: {
						type: "button",
						text: "Ok",
						action: "ok"
					},
					items: {
						type: "label",
						multiline: !0,
						maxWidth: 500,
						maxHeight: 200
					}
				}, this._super(e)
			},
			Statics: {
				OK: 1,
				OK_CANCEL: 2,
				YES_NO: 3,
				YES_NO_CANCEL: 4,
				msgBox: function(n) {
					function r(e, t, n) {
						return {
							type: "button",
							text: e,
							subtype: n ? "primary" : "",
							onClick: function(e) {
								e.control.parents()[1].close(), o(t)
							}
						}
					}
					var i, o = n.callback || function() {};
					switch (n.buttons) {
						case t.OK_CANCEL:
							i = [r("Ok", !0, !0), r("Cancel", !1)];
							break;
						case t.YES_NO:
						case t.YES_NO_CANCEL:
							i = [r("Yes", 1, !0), r("No", 0)], n.buttons == t.YES_NO_CANCEL && i.push(r("Cancel", -1));
							break;
						default:
							i = [r("Ok", !0, !0)]
					}
					return new e({
						padding: 20,
						x: n.x,
						y: n.y,
						minWidth: 300,
						minHeight: 100,
						layout: "flex",
						pack: "center",
						align: "center",
						buttons: i,
						title: n.title,
						role: "alertdialog",
						items: {
							type: "label",
							multiline: !0,
							maxWidth: 500,
							maxHeight: 200,
							text: n.text
						},
						onPostRender: function() {
							this.aria("describedby", this.items()[0]._id)
						},
						onClose: n.onClose,
						onCancel: function() {
							o(!1)
						}
					}).renderTo(document.body).reflow()
				},
				alert: function(e, n) {
					return "string" == typeof e && (e = {
						text: e
					}), e.callback = n, t.msgBox(e)
				},
				confirm: function(e, n) {
					return "string" == typeof e && (e = {
						text: e
					}), e.callback = n, e.buttons = t.OK_CANCEL, t.msgBox(e)
				}
			}
		});
		return t
	}), r(at, [it, ot], function(e, t) {
		return function(n) {
			function r() {
				return o.length ? o[o.length - 1] : void 0
			}
			var i = this,
				o = [];
			i.windows = o, n.on("remove", function() {
				for (var e = o.length; e--;) o[e].close()
			}), i.open = function(t, r) {
				var i;
				return n.editorManager.setActive(n), t.title = t.title || " ", t.url = t.url || t.file, t.url && (t.width = parseInt(t.width || 320, 10), t.height = parseInt(t.height || 240, 10)), t.body && (t.items = {
					defaults: t.defaults,
					type: t.bodyType || "form",
					items: t.body
				}), t.url || t.buttons || (t.buttons = [{
					text: "Ok",
					subtype: "primary",
					onclick: function() {
						i.find("form")[0].submit()
					}
				}, {
					text: "Cancel",
					onclick: function() {
						i.close()
					}
				}]), i = new e(t), o.push(i), i.on("close", function() {
					for (var e = o.length; e--;) o[e] === i && o.splice(e, 1);
					o.length || n.focus()
				}), t.data && i.on("postRender", function() {
					this.find("*").each(function(e) {
						var n = e.name();
						n in t.data && e.value(t.data[n])
					})
				}), i.features = t || {}, i.params = r || {}, 1 === o.length && n.nodeChanged(), i.renderTo().reflow()
			}, i.alert = function(e, r, i) {
				t.alert(e, function() {
					r ? r.call(i || this) : n.focus()
				})
			}, i.confirm = function(e, n, r) {
				t.confirm(e, function(e) {
					n.call(r || this, e)
				})
			}, i.close = function() {
				r() && r().close()
			}, i.getParams = function() {
				return r() ? r().params : null
			}, i.setParams = function(e) {
				r() && (r().params = e)
			}, i.getWindows = function() {
				return o
			}
		}
	}), r(st, [B, x, _, g, d, u], function(e, t, n, r, i, o) {
		return function(a) {
			function s(e, t) {
				try {
					a.getDoc().execCommand(e, !1, t)
				} catch (n) {}
			}

			function l() {
				var e = a.getDoc().documentMode;
				return e ? e : 6
			}

			function c(e) {
				return e.isDefaultPrevented()
			}

			function u() {
				function t(e) {
					var t = new i(function() {});
					o.each(a.getBody().getElementsByTagName("*"), function(e) {
						"SPAN" == e.tagName && e.setAttribute("mce-data-marked", 1), !e.hasAttribute("data-mce-style") && e.hasAttribute("style") && a.dom.setAttrib(e, "style", a.dom.getAttrib(e, "style"))
					}), t.observe(a.getDoc(), {
						childList: !0,
						attributes: !0,
						subtree: !0,
						attributeFilter: ["style"]
					}), a.getDoc().execCommand(e ? "ForwardDelete" : "Delete", !1, null);
					var n = a.selection.getRng(),
						r = n.startContainer.parentNode;
					o.each(t.takeRecords(), function(e) {
						if (q.isChildOf(e.target, a.getBody())) {
							if ("style" == e.attributeName) {
								var t = e.target.getAttribute("data-mce-style");
								t ? e.target.setAttribute("style", t) : e.target.removeAttribute("style")
							}
							o.each(e.addedNodes, function(e) {
								if ("SPAN" == e.nodeName && !e.getAttribute("mce-data-marked")) {
									var t, i;
									e == r && (t = n.startOffset, i = e.firstChild), q.remove(e, !0), i && (n.setStart(i, t), n.setEnd(i, t), a.selection.setRng(n))
								}
							})
						}
					}), t.disconnect(), o.each(a.dom.select("span[mce-data-marked]"), function(e) {
						e.removeAttribute("mce-data-marked")
					})
				}
				var n = a.getDoc(),
					r = "data:text/mce-internal,",
					i = window.MutationObserver,
					s, l;
				i || (s = !0, i = function() {
					function e(e) {
						var t = e.relatedNode || e.target;
						n.push({
							target: t,
							addedNodes: [t]
						})
					}

					function t(e) {
						var t = e.relatedNode || e.target;
						n.push({
							target: t,
							attributeName: e.attrName
						})
					}
					var n = [],
						r;
					this.observe = function(n) {
						r = n, r.addEventListener("DOMSubtreeModified", e, !1), r.addEventListener("DOMNodeInsertedIntoDocument", e, !1), r.addEventListener("DOMNodeInserted", e, !1), r.addEventListener("DOMAttrModified", t, !1)
					}, this.disconnect = function() {
						r.removeEventListener("DOMSubtreeModified", e, !1), r.removeEventListener("DOMNodeInsertedIntoDocument", e, !1), r.removeEventListener("DOMNodeInserted", e, !1), r.removeEventListener("DOMAttrModified", t, !1)
					}, this.takeRecords = function() {
						return n
					}
				}), a.on("keydown", function(n) {
					var r = n.keyCode == $,
						i = e.metaKeyPressed(n);
					if (!c(n) && (r || n.keyCode == U)) {
						var o = a.selection.getRng(),
							s = o.startContainer,
							l = o.startOffset;
						if (!i && o.collapsed && 3 == s.nodeType && (r ? l < s.data.length : l > 0)) return;
						n.preventDefault(), i && a.selection.getSel().modify("extend", r ? "forward" : "backward", "word"), t(r)
					}
				}), a.on("keypress", function(n) {
					c(n) || j.isCollapsed() || !n.charCode || e.metaKeyPressed(n) || (n.preventDefault(), t(!0), a.selection.setContent(String.fromCharCode(n.charCode)))
				}), a.addCommand("Delete", function() {
					t()
				}), a.addCommand("ForwardDelete", function() {
					t(!0)
				}), s || (a.on("dragstart", function(e) {
					var t;
					a.selection.isCollapsed() && "IMG" == e.target.tagName && j.select(e.target), l = j.getRng(), t = a.selection.getContent(), t.length > 0 && e.dataTransfer.setData("URL", "data:text/mce-internal," + escape(t))
				}), a.on("drop", function(e) {
					if (!c(e)) {
						var i = e.dataTransfer.getData("URL");
						if (!i || -1 == i.indexOf(r) || !n.caretRangeFromPoint) return;
						i = unescape(i.substr(r.length)), n.caretRangeFromPoint && (e.preventDefault(), window.setTimeout(function() {
							var r = n.caretRangeFromPoint(e.x, e.y);
							l && (j.setRng(l), l = null), t(), j.setRng(r), a.insertContent(i)
						}, 0))
					}
				}), a.on("cut", function(e) {
					!c(e) && e.clipboardData && (e.preventDefault(), e.clipboardData.clearData(), e.clipboardData.setData("text/html", a.selection.getContent()), e.clipboardData.setData("text/plain", a.selection.getContent({
						format: "text"
					})), t(!0))
				}))
			}

			function d() {
				function e(e) {
					var t = q.create("body"),
						n = e.cloneContents();
					return t.appendChild(n), j.serializer.serialize(t, {
						format: "html"
					})
				}

				function n(n) {
					if (!n.setStart) {
						if (n.item) return !1;
						var r = n.duplicate();
						return r.moveToElementText(a.getBody()), t.compareRanges(n, r)
					}
					var i = e(n),
						o = q.createRng();
					o.selectNode(a.getBody());
					var s = e(o);
					return i === s
				}
				a.on("keydown", function(e) {
					var t = e.keyCode,
						r, i;
					if (!c(e) && (t == $ || t == U)) {
						if (r = a.selection.isCollapsed(), i = a.getBody(), r && !q.isEmpty(i)) return;
						if (!r && !n(a.selection.getRng())) return;
						e.preventDefault(), a.setContent(""), i.firstChild && q.isBlock(i.firstChild) ? a.selection.setCursorLocation(i.firstChild, 0) : a.selection.setCursorLocation(i, 0), a.nodeChanged()
					}
				})
			}

			function f() {
				a.shortcuts.add("ctrl+a", null, "SelectAll")
			}

			function p() {
				a.settings.content_editable || (q.bind(a.getDoc(), "focusin", function() {
					j.setRng(j.getRng())
				}), q.bind(a.getDoc(), "mousedown mouseup", function(e) {
					e.target == a.getDoc().documentElement && (a.getBody().focus(), "mousedown" == e.type ? j.placeCaretAt(e.clientX, e.clientY) : j.setRng(j.getRng()))
				}))
			}

			function h() {
				a.on("keydown", function(e) {
					if (!c(e) && e.keyCode === U) {
						if (!a.getBody().getElementsByTagName("hr").length) return;
						if (j.isCollapsed() && 0 === j.getRng(!0).startOffset) {
							var t = j.getNode(),
								n = t.previousSibling;
							if ("HR" == t.nodeName) return q.remove(t), void e.preventDefault();
							n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (q.remove(n), e.preventDefault())
						}
					}
				})
			}

			function m() {
				window.Range.prototype.getClientRects || a.on("mousedown", function(e) {
					if (!c(e) && "HTML" === e.target.nodeName) {
						var t = a.getBody();
						t.blur(), setTimeout(function() {
							t.focus()
						}, 0)
					}
				})
			}

			function g() {
				a.on("click", function(e) {
					var t = e.target;
					/^(IMG|HR)$/.test(t.nodeName) && (e.preventDefault(), j.getSel().setBaseAndExtent(t, 0, t, 1), a.nodeChanged()), "A" == t.nodeName && q.hasClass(t, "mce-item-anchor") && (e.preventDefault(), j.select(t))
				})
			}

			function v() {
				function e() {
					var e = q.getAttribs(j.getStart().cloneNode(!1));
					return function() {
						var t = j.getStart();
						t !== a.getBody() && (q.setAttrib(t, "style", null), V(e, function(e) {
							t.setAttributeNode(e.cloneNode(!0))
						}))
					}
				}

				function t() {
					return !j.isCollapsed() && q.getParent(j.getStart(), q.isBlock) != q.getParent(j.getEnd(), q.isBlock)
				}
				a.on("keypress", function(n) {
					var r;
					return c(n) || 8 != n.keyCode && 46 != n.keyCode || !t() ? void 0 : (r = e(), a.getDoc().execCommand("delete", !1, null), r(), n.preventDefault(), !1)
				}), q.bind(a.getDoc(), "cut", function(n) {
					var r;
					!c(n) && t() && (r = e(), setTimeout(function() {
						r()
					}, 0))
				})
			}

			function y() {
				document.body.setAttribute("role", "application")
			}

			function b() {
				a.on("keydown", function(e) {
					if (!c(e) && e.keyCode === U && j.isCollapsed() && 0 === j.getRng(!0).startOffset) {
						var t = j.getNode().previousSibling;
						if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1
					}
				})
			}

			function C() {
				l() > 7 || (s("RespectVisibilityInDesign", !0), a.contentStyles.push(".mceHideBrInPre pre br {display: none}"), q.addClass(a.getBody(), "mceHideBrInPre"), K.addNodeFilter("pre", function(e) {
					for (var t = e.length, r, i, o, a; t--;)
						for (r = e[t].getAll("br"), i = r.length; i--;) o = r[i], a = o.prev, a && 3 === a.type && "\n" != a.value.charAt(a.value - 1) ? a.value += "\n" : o.parent.insert(new n("#text", 3), o, !0).value = "\n"
				}), G.addNodeFilter("pre", function(e) {
					for (var t = e.length, n, r, i, o; t--;)
						for (n = e[t].getAll("br"), r = n.length; r--;) i = n[r], o = i.prev, o && 3 == o.type && (o.value = o.value.replace(/\r?\n$/, ""))
				}))
			}

			function x() {
				q.bind(a.getBody(), "mouseup", function() {
					var e, t = j.getNode();
					"IMG" == t.nodeName && ((e = q.getStyle(t, "width")) && (q.setAttrib(t, "width", e.replace(/[^0-9%]+/g, "")), q.setStyle(t, "width", "")), (e = q.getStyle(t, "height")) && (q.setAttrib(t, "height", e.replace(/[^0-9%]+/g, "")), q.setStyle(t, "height", "")))
				})
			}

			function w() {
				a.on("keydown", function(t) {
					var n, r, i, o, s;
					if (!c(t) && t.keyCode == e.BACKSPACE && (n = j.getRng(), r = n.startContainer, i = n.startOffset, o = q.getRoot(), s = r, n.collapsed && 0 === i)) {
						for (; s && s.parentNode && s.parentNode.firstChild == s && s.parentNode != o;) s = s.parentNode;
						"BLOCKQUOTE" === s.tagName && (a.formatter.toggle("blockquote", null, s), n = q.createRng(), n.setStart(r, 0), n.setEnd(r, 0), j.setRng(n))
					}
				})
			}

			function _() {
				function e() {
					a._refreshContentEditable(), s("StyleWithCSS", !1), s("enableInlineTableEditing", !1), Y.object_resizing || s("enableObjectResizing", !1)
				}
				Y.readonly || a.on("BeforeExecCommand MouseDown", e)
			}

			function E() {
				function e() {
					V(q.select("a"), function(e) {
						var t = e.parentNode,
							n = q.getRoot();
						if (t.lastChild === e) {
							for (; t && !q.isBlock(t);) {
								if (t.parentNode.lastChild !== t || t === n) return;
								t = t.parentNode
							}
							q.add(t, "br", {
								"data-mce-bogus": 1
							})
						}
					})
				}
				a.on("SetContent ExecCommand", function(t) {
					("setcontent" == t.type || "mceInsertLink" === t.command) && e()
				})
			}

			function N() {
				Y.forced_root_block && a.on("init", function() {
					s("DefaultParagraphSeparator", Y.forced_root_block)
				})
			}

			function k() {
				a.on("Undo Redo SetContent", function(e) {
					e.initial || a.execCommand("mceRepaint")
				})
			}

			function S() {
				a.on("keydown", function(e) {
					var t;
					c(e) || e.keyCode != U || (t = a.getDoc().selection.createRange(), t && t.item && (e.preventDefault(), a.undoManager.beforeChange(), q.remove(t.item(0)), a.undoManager.add()))
				})
			}

			function T() {
				var e;
				l() >= 10 && (e = "", V("p div h1 h2 h3 h4 h5 h6".split(" "), function(t, n) {
					e += (n > 0 ? "," : "") + t + ":empty"
				}), a.contentStyles.push(e + "{padding-right: 1px !important}"))
			}

			function R() {
				l() < 9 && (K.addNodeFilter("noscript", function(e) {
					for (var t = e.length, n, r; t--;) n = e[t], r = n.firstChild, r && n.attr("data-mce-innertext", r.value)
				}), G.addNodeFilter("noscript", function(e) {
					for (var t = e.length, i, o, a; t--;) i = e[t], o = e[t].firstChild, o ? o.value = r.decode(o.value) : (a = i.attributes.map["data-mce-innertext"], a && (i.attr("data-mce-innertext", null), o = new n("#text", 3), o.value = a, o.raw = !0, i.append(o)))
				}))
			}

			function A() {
				function e(e, t) {
					var n = i.createTextRange();
					try {
						n.moveToPoint(e, t)
					} catch (r) {
						n = null
					}
					return n
				}

				function t(t) {
					var r;
					t.button ? (r = e(t.x, t.y), r && (r.compareEndPoints("StartToStart", a) > 0 ? r.setEndPoint("StartToStart", a) : r.setEndPoint("EndToEnd", a), r.select())) : n()
				}

				function n() {
					var e = r.selection.createRange();
					a && !e.item && 0 === e.compareEndPoints("StartToEnd", e) && a.select(), q.unbind(r, "mouseup", n), q.unbind(r, "mousemove", t), a = o = 0
				}
				var r = q.doc,
					i = r.body,
					o, a, s;
				r.documentElement.unselectable = !0, q.bind(r, "mousedown contextmenu", function(i) {
					if ("HTML" === i.target.nodeName) {
						if (o && n(), s = r.documentElement, s.scrollHeight > s.clientHeight) return;
						o = 1, a = e(i.x, i.y), a && (q.bind(r, "mouseup", n), q.bind(r, "mousemove", t), q.getRoot().focus(), a.select())
					}
				})
			}

			function B() {
				a.on("keyup focusin mouseup", function(t) {
					65 == t.keyCode && e.metaKeyPressed(t) || j.normalize()
				}, !0)
			}

			function D() {
				a.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")
			}

			function L() {
				a.inline || a.on("keydown", function() {
					document.activeElement == document.body && a.getWin().focus()
				})
			}

			function H() {
				a.inline || (a.contentStyles.push("body {min-height: 150px}"), a.on("click", function(e) {
					"HTML" == e.target.nodeName && (a.getBody().focus(), a.selection.normalize(), a.nodeChanged())
				}))
			}

			function M() {
				i.mac && a.on("keydown", function(t) {
					!e.metaKeyPressed(t) || 37 != t.keyCode && 39 != t.keyCode || (t.preventDefault(), a.selection.getSel().modify("move", 37 == t.keyCode ? "backward" : "forward", "word"))
				})
			}

			function P() {
				s("AutoUrlDetect", !1)
			}

			function O() {
				a.inline || a.on("focus blur beforegetcontent", function() {
					var e = a.dom.create("br");
					a.getBody().appendChild(e), e.parentNode.removeChild(e)
				}, !0)
			}

			function I() {
				a.on("click", function(e) {
					var t = e.target;
					do
						if ("A" === t.tagName) return void e.preventDefault();
					while (t = t.parentNode)
				}), a.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")
			}

			function F() {
				a.on("touchstart", function(e) {
					var t, n, r, i;
					t = e.target, n = (new Date).getTime(), i = e.changedTouches, !i || i.length > 1 || (r = i[0], a.once("touchend", function(e) {
						var i = e.changedTouches[0],
							o;
						(new Date).getTime() - n > 500 || Math.abs(r.clientX - i.clientX) > 5 || Math.abs(r.clientY - i.clientY) > 5 || (o = {
							target: t
						}, V("pageX pageY clientX clientY screenX screenY".split(" "), function(e) {
							o[e] = i[e]
						}), o = a.fire("click", o), o.isDefaultPrevented() || (a.selection.placeCaretAt(i.clientX, i.clientY), a.nodeChanged()))
					}))
				})
			}

			function z() {
				a.on("init", function() {
					a.dom.bind(a.getBody(), "submit", function(e) {
						e.preventDefault()
					})
				})
			}

			function W() {
				K.addNodeFilter("br", function(e) {
					for (var t = e.length; t--;) "Apple-interchange-newline" == e[t].attr("class") && e[t].remove()
				})
			}
			var V = o.each,
				U = e.BACKSPACE,
				$ = e.DELETE,
				q = a.dom,
				j = a.selection,
				Y = a.settings,
				K = a.parser,
				G = a.serializer,
				X = i.gecko,
				J = i.ie,
				Q = i.webkit;
			w(), d(), B(), Q && (u(), p(), g(), N(), z(), b(), W(), F(), i.iOS ? (L(), H(), I()) : f()), J && i.ie < 11 && (h(), y(), C(), x(), S(), T(), R(), A()), i.ie >= 11 && (H(), O(), b()), i.ie && (f(), P()), X && (h(), m(), v(), _(), E(), k(), D(), M(), b())
		}
	}), r(lt, [$], function(e) {
		function t(t) {
			return t._eventDispatcher || (t._eventDispatcher = new e({
				scope: t,
				toggleEvent: function(n, r) {
					e.isNative(n) && t.toggleNativeEvent && t.toggleNativeEvent(n, r)
				}
			})), t._eventDispatcher
		}
		return {
			fire: function(e, n, r) {
				var i = this;
				if (i.removed && "remove" !== e) return n;
				if (n = t(i).fire(e, n, r), r !== !1 && i.parent)
					for (var o = i.parent(); o && !n.isPropagationStopped();) o.fire(e, n, !1), o = o.parent();
				return n
			},
			on: function(e, n, r) {
				return t(this).on(e, n, r)
			},
			off: function(e, n) {
				return t(this).off(e, n)
			},
			once: function(e, n) {
				return t(this).once(e, n)
			},
			hasEventListeners: function(e) {
				return t(this).has(e)
			}
		}
	}), r(ct, [lt, y, u], function(e, t, n) {
		function r(e, t) {
			return "selectionchange" == t ? e.getDoc() : !e.inline && /^mouse|click|contextmenu|drop|dragover|dragend/.test(t) ? e.getDoc().documentElement : e.settings.event_root ? (e.eventRoot || (e.eventRoot = o.select(e.settings.event_root)[0]), e.eventRoot) : e.getBody()
		}

		function i(e, t) {
			var n = r(e, t),
				i;
			if (e.delegates || (e.delegates = {}), !e.delegates[t])
				if (e.settings.event_root) {
					if (a || (a = {}, e.editorManager.on("removeEditor", function() {
						var t;
						if (!e.editorManager.activeEditor && a) {
							for (t in a) e.dom.unbind(r(e, t));
							a = null
						}
					})), a[t]) return;
					i = function(n) {
						for (var r = n.target, i = e.editorManager.editors, a = i.length; a--;) {
							var s = i[a].getBody();
							(s === r || o.isChildOf(r, s)) && (i[a].hidden || i[a].fire(t, n))
						}
					}, a[t] = i, o.bind(n, t, i)
				} else i = function(n) {
					e.hidden || e.fire(t, n)
				}, o.bind(n, t, i), e.delegates[t] = i
		}
		var o = t.DOM,
			a, s = {
				bindPendingEventDelegates: function() {
					var e = this;
					n.each(e._pendingNativeEvents, function(t) {
						i(e, t)
					})
				},
				toggleNativeEvent: function(e, t) {
					var n = this;
					n.settings.readonly || "focus" != e && "blur" != e && (t ? n.initialized ? i(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(r(n, e), e, n.delegates[e]), delete n.delegates[e]))
				},
				unbindAllNativeEvents: function() {
					var e = this,
						t;
					if (e.delegates) {
						for (t in e.delegates) e.dom.unbind(r(e, t), t, e.delegates[t]);
						delete e.delegates
					}
					e.inline || (e.getBody().onload = null, e.dom.unbind(e.getWin()), e.dom.unbind(e.getDoc())), e.dom.unbind(e.getBody()), e.dom.unbind(e.getContainer())
				}
			};
		return s = n.extend({}, e, s)
	}), r(ut, [u, d], function(e, t) {
		var n = e.each,
			r = e.explode,
			i = {
				f9: 120,
				f10: 121,
				f11: 122
			};
		return function(o) {
			var a = this,
				s = {};
			o.on("keyup keypress keydown", function(e) {
				(e.altKey || e.ctrlKey || e.metaKey) && !e.isDefaultPrevented() && n(s, function(n) {
					var r = t.mac ? e.metaKey : e.ctrlKey;
					if (n.ctrl == r && n.alt == e.altKey && n.shift == e.shiftKey) return e.keyCode == n.keyCode || e.charCode && e.charCode == n.charCode ? (e.preventDefault(), "keydown" == e.type && n.func.call(n.scope), !0) : void 0
				})
			}), a.add = function(t, a, l, c) {
				var u;
				return u = l, "string" == typeof l ? l = function() {
					o.execCommand(u, !1, null)
				} : e.isArray(u) && (l = function() {
					o.execCommand(u[0], u[1], u[2])
				}), n(r(t.toLowerCase()), function(e) {
					var t = {
						func: l,
						scope: c || o,
						desc: o.translate(a),
						alt: !1,
						ctrl: !1,
						shift: !1
					};
					n(r(e, "+"), function(e) {
						switch (e) {
							case "alt":
							case "ctrl":
							case "shift":
								t[e] = !0;
								break;
							default:
								/^[0-9]{2,}$/.test(e) ? t.keyCode = parseInt(e, 10) : (t.charCode = e.charCodeAt(0), t.keyCode = i[e] || e.toUpperCase().charCodeAt(0))
						}
					}), s[(t.ctrl ? "ctrl" : "") + "," + (t.alt ? "alt" : "") + "," + (t.shift ? "shift" : "") + "," + t.keyCode] = t
				}), !0
			}
		}
	}), r(dt, [y, f, C, w, _, R, T, H, O, I, F, z, W, V, b, l, at, E, k, st, d, u, ct, ut], function(e, n, r, i, o, a, s, l, c, u, d, f, p, h, m, g, v, y, b, C, x, w, _, E) {
		function N(e, t, i) {
			var o = this,
				a, s;
			a = o.documentBaseUrl = i.documentBaseURL, s = i.baseURI, o.settings = t = R({
				id: e,
				theme: "modern",
				delta_width: 0,
				delta_height: 0,
				popup_css: "",
				plugins: "",
				document_base_url: a,
				add_form_submit_trigger: !0,
				submit_patch: !0,
				add_unload_trigger: !0,
				convert_urls: !0,
				relative_urls: !0,
				remove_script_host: !0,
				object_resizing: !0,
				doctype: "<!DOCTYPE html>",
				visual: !0,
				font_size_style_values: "xx-small,x-small,small,medium,large,x-large,xx-large",
				font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
				forced_root_block: "p",
				hidden_input: !0,
				padd_empty_editor: !0,
				render_ui: !0,
				indentation: "30px",
				inline_styles: !0,
				convert_fonts_to_spans: !0,
				indent: "simple",
				indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,option,optgroup,datalist",
				indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,option,optgroup,datalist",
				validate: !0,
				entity_encoding: "named",
				url_converter: o.convertURL,
				url_converter_scope: o,
				ie7_compat: !0
			}, t), r.language = t.language || "en", r.languageLoad = t.language_load, r.baseURL = i.baseURL, o.id = t.id = e, o.isNotDirty = !0, o.plugins = {}, o.documentBaseURI = new h(t.document_base_url || a, {
				base_uri: s
			}), o.baseURI = s, o.contentCSS = [], o.contentStyles = [], o.shortcuts = new E(o), o.execCommands = {}, o.queryStateCommands = {}, o.queryValueCommands = {}, o.loadedCSS = {}, t.target && (o.targetElm = t.target), o.suffix = i.suffix, o.editorManager = i, o.inline = t.inline, i.fire("SetupEditor", o), o.execCallback("setup", o), o.$ = n.overrideDefaults(function() {
				return {
					context: o.inline ? o.getBody() : o.getDoc(),
					element: o.getBody()
				}
			})
		}
		var k = e.DOM,
			S = r.ThemeManager,
			T = r.PluginManager,
			R = w.extend,
			A = w.each,
			B = w.explode,
			D = w.inArray,
			L = w.trim,
			H = w.resolve,
			M = g.Event,
			P = x.gecko,
			O = x.ie;
		return N.prototype = {
			render: function() {
				function e() {
					k.unbind(window, "ready", e), n.render()
				}

				function t() {
					var e = m.ScriptLoader;
					if (r.language && "en" != r.language && !r.language_url && (r.language_url = n.editorManager.baseURL + "/langs/" + r.language + ".js"), r.language_url && e.add(r.language_url), r.theme && "function" != typeof r.theme && "-" != r.theme.charAt(0) && !S.urls[r.theme]) {
						var t = r.theme_url;
						t = t ? n.documentBaseURI.toAbsolute(t) : "themes/" + r.theme + "/theme" + o + ".js", S.load(r.theme, t)
					}
					w.isArray(r.plugins) && (r.plugins = r.plugins.join(" ")), A(r.external_plugins, function(e, t) {
						T.load(t, e), r.plugins += " " + t
					}), A(r.plugins.split(/[ ,]/), function(e) {
						if (e = L(e), e && !T.urls[e])
							if ("-" == e.charAt(0)) {
								e = e.substr(1, e.length);
								var t = T.dependencies(e);
								A(t, function(e) {
									var t = {
										prefix: "plugins/",
										resource: e,
										suffix: "/plugin" + o + ".js"
									};
									e = T.createUrl(t, e), T.load(e.resource, e)
								})
							} else T.load(e, {
								prefix: "plugins/",
								resource: e,
								suffix: "/plugin" + o + ".js"
							})
					}), e.loadQueue(function() {
						n.removed || n.init()
					})
				}
				var n = this,
					r = n.settings,
					i = n.id,
					o = n.suffix;
				if (!M.domLoaded) return void k.bind(window, "ready", e);
				if (n.getElement() && x.contentEditable) {
					r.inline ? n.inline = !0 : (n.orgVisibility = n.getElement().style.visibility, n.getElement().style.visibility = "hidden");
					var a = n.getElement().form || k.getParent(i, "form");
					a && (n.formElement = a, r.hidden_input && !/TEXTAREA|INPUT/i.test(n.getElement().nodeName) && (k.insertAfter(k.create("input", {
						type: "hidden",
						name: i
					}), i), n.hasHiddenInput = !0), n.formEventDelegate = function(e) {
						n.fire(e.type, e)
					}, k.bind(a, "submit reset", n.formEventDelegate), n.on("reset", function() {
						n.setContent(n.startContent, {
							format: "raw"
						})
					}), !r.submit_patch || a.submit.nodeType || a.submit.length || a._mceOldSubmit || (a._mceOldSubmit = a.submit, a.submit = function() {
						return n.editorManager.triggerSave(), n.isNotDirty = !0, a._mceOldSubmit(a)
					})), n.windowManager = new v(n), "xml" == r.encoding && n.on("GetContent", function(e) {
						e.save && (e.content = k.encode(e.content))
					}), r.add_form_submit_trigger && n.on("submit", function() {
						n.initialized && n.save()
					}), r.add_unload_trigger && (n._beforeUnload = function() {
						!n.initialized || n.destroyed || n.isHidden() || n.save({
							format: "raw",
							no_events: !0,
							set_dirty: !1
						})
					}, n.editorManager.on("BeforeUnload", n._beforeUnload)), t()
				}
			},
			init: function() {
				function e(n) {
					var r = T.get(n),
						i, o;
					i = T.urls[n] || t.documentBaseUrl.replace(/\/$/, ""), n = L(n), r && -1 === D(m, n) && (A(T.dependencies(n), function(t) {
						e(t)
					}), o = new r(t, i, t.$), t.plugins[n] = o, o.init && (o.init(t, i), m.push(n)))
				}
				var t = this,
					n = t.settings,
					r = t.getElement(),
					i, o, a, s, l, c, u, d, f, p, h, m = [];
				if (t.rtl = this.editorManager.i18n.rtl, t.editorManager.add(t), n.aria_label = n.aria_label || k.getAttrib(r, "aria-label", t.getLang("aria.rich_text_area")), n.theme && ("function" != typeof n.theme ? (n.theme = n.theme.replace(/-/, ""), c = S.get(n.theme), t.theme = new c(t, S.urls[n.theme]), t.theme.init && t.theme.init(t, S.urls[n.theme] || t.documentBaseUrl.replace(/\/$/, ""), t.$)) : t.theme = n.theme), A(n.plugins.replace(/\-/g, "").split(/[ ,]/), e), n.render_ui && t.theme && (t.orgDisplay = r.style.display, "function" != typeof n.theme ? (i = n.width || r.style.width || r.offsetWidth, o = n.height || r.style.height || r.offsetHeight, a = n.min_height || 100, p = /^[0-9\.]+(|px)$/i, p.test("" + i) && (i = Math.max(parseInt(i, 10), 100)), p.test("" + o) && (o = Math.max(parseInt(o, 10), a)), l = t.theme.renderUI({
					targetNode: r,
					width: i,
					height: o,
					deltaWidth: n.delta_width,
					deltaHeight: n.delta_height
				}), n.content_editable || (o = (l.iframeHeight || o) + ("number" == typeof o ? l.deltaHeight || 0 : ""), a > o && (o = a))) : (l = n.theme(t, r), l.editorContainer.nodeType && (l.editorContainer = l.editorContainer.id = l.editorContainer.id || t.id + "_parent"), l.iframeContainer.nodeType && (l.iframeContainer = l.iframeContainer.id = l.iframeContainer.id || t.id + "_iframecontainer"), o = l.iframeHeight || r.offsetHeight), t.editorContainer = l.editorContainer), n.content_css && A(B(n.content_css), function(e) {
					t.contentCSS.push(t.documentBaseURI.toAbsolute(e))
				}), n.content_style && t.contentStyles.push(n.content_style), n.content_editable) return r = s = l = null, t.initContentBody();
				for (t.iframeHTML = n.doctype + "<html><head>", n.document_base_url != t.documentBaseUrl && (t.iframeHTML += '<base href="' + t.documentBaseURI.getURI() + '" />'), !x.caretAfter && n.ie7_compat && (t.iframeHTML += '<meta http-equiv="X-UA-Compatible" content="IE=7" />'), t.iframeHTML += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />', h = 0; h < t.contentCSS.length; h++) {
					var g = t.contentCSS[h];
					t.iframeHTML += '<link type="text/css" rel="stylesheet" href="' + g + '" />', t.loadedCSS[g] = !0
				}
				d = n.body_id || "tinymce", -1 != d.indexOf("=") && (d = t.getParam("body_id", "", "hash"), d = d[t.id] || d), f = n.body_class || "", -1 != f.indexOf("=") && (f = t.getParam("body_class", "", "hash"), f = f[t.id] || ""), n.content_security_policy && (t.iframeHTML += '<meta http-equiv="Content-Security-Policy" content="' + n.content_security_policy + '" />'), t.iframeHTML += '</head><body id="' + d + '" class="mce-content-body ' + f + '" data-id="' + t.id + '"><br></body></html>';
				var v = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + t.id + '");document.write(ed.iframeHTML);document.close();ed.initContentBody(true);})()';
				document.domain != location.hostname && (u = v);
				var y = k.create("iframe", {
					id: t.id + "_ifr",
					frameBorder: "0",
					allowTransparency: "true",
					title: t.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),
					style: {
						width: "100%",
						height: o,
						display: "block"
					}
				});
				if (y.onload = function() {
					y.onload = null, t.fire("load")
				}, k.setAttrib(y, "src", u || 'javascript:""'), t.contentAreaContainer = l.iframeContainer, t.iframeElement = y, s = k.add(l.iframeContainer, y), O) try {
					t.getDoc()
				} catch (b) {
					s.src = u = v
				}
				l.editorContainer && (k.get(l.editorContainer).style.display = t.orgDisplay, t.hidden = k.isHidden(l.editorContainer)), t.getElement().style.display = "none", k.setAttrib(t.id, "aria-hidden", !0), u || t.initContentBody(), r = s = l = null
			},
			initContentBody: function(t) {
				var n = this,
					r = n.settings,
					s = n.getElement(),
					h = n.getDoc(),
					m, g;
				r.inline || (n.getElement().style.visibility = n.orgVisibility), t || r.content_editable || (h.open(), h.write(n.iframeHTML), h.close()), r.content_editable && (n.on("remove", function() {
					var e = this.getBody();
					k.removeClass(e, "mce-content-body"), k.removeClass(e, "mce-edit-focus"), k.setAttrib(e, "contentEditable", null)
				}), k.addClass(s, "mce-content-body"), n.contentDocument = h = r.content_document || document, n.contentWindow = r.content_window || window, n.bodyElement = s, r.content_document = r.content_window = null, r.root_name = s.nodeName.toLowerCase()), m = n.getBody(), m.disabled = !0, r.readonly || (n.inline && "static" == k.getStyle(m, "position", !0) && (m.style.position = "relative"), m.contentEditable = n.getParam("content_editable_state", !0)), m.disabled = !1, n.schema = new y(r), n.dom = new e(h, {
					keep_values: !0,
					url_converter: n.convertURL,
					url_converter_scope: n,
					hex_colors: r.force_hex_style_colors,
					class_filter: r.class_filter,
					update_styles: !0,
					root_element: n.inline ? n.getBody() : null,
					collect: r.content_editable,
					schema: n.schema,
					onSetAttrib: function(e) {
						n.fire("SetAttrib", e)
					}
				}), n.parser = new b(r, n.schema), n.parser.addAttributeFilter("src,href,style,tabindex", function(e, t) {
					for (var r = e.length, i, o = n.dom, a, s; r--;) i = e[r], a = i.attr(t), s = "data-mce-" + t, i.attributes.map[s] || ("style" === t ? (a = o.serializeStyle(o.parseStyle(a), i.name), a.length || (a = null), i.attr(s, a), i.attr(t, a)) : "tabindex" === t ? (i.attr(s, a), i.attr(t, null)) : i.attr(s, n.convertURL(a, t, i.name)))
				}), n.parser.addNodeFilter("script", function(e) {
					for (var t = e.length, n; t--;) n = e[t], n.attr("type", "mce-" + (n.attr("type") || "no/type"))
				}), n.parser.addNodeFilter("#cdata", function(e) {
					for (var t = e.length, n; t--;) n = e[t], n.type = 8, n.name = "#comment", n.value = "[CDATA[" + n.value + "]]"
				}), n.parser.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function(e) {
					for (var t = e.length, r, i = n.schema.getNonEmptyElements(); t--;) r = e[t], r.isEmpty(i) && (r.append(new o("br", 1)).shortEnded = !0)
				}), n.serializer = new a(r, n), n.selection = new l(n.dom, n.getWin(), n.serializer, n), n.formatter = new c(n), n.undoManager = new u(n), n.forceBlocks = new f(n), n.enterKey = new d(n), n.editorCommands = new p(n), n._nodeChangeDispatcher = new i(n), n.fire("PreInit"), r.browser_spellcheck || r.gecko_spellcheck || (h.body.spellcheck = !1, k.setAttrib(m, "spellcheck", "false")), n.fire("PostRender"), n.quirks = new C(n), r.directionality && (m.dir = r.directionality), r.nowrap && (m.style.whiteSpace = "nowrap"), r.protect && n.on("BeforeSetContent", function(e) {
					A(r.protect, function(t) {
						e.content = e.content.replace(t, function(e) {
							return "<!--mce:protected " + escape(e) + "-->"
						})
					})
				}), n.on("SetContent", function() {
					n.addVisual(n.getBody())
				}), r.padd_empty_editor && n.on("PostProcess", function(e) {
					e.content = e.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/, "")
				}), n.load({
					initial: !0,
					format: "html"
				}), n.startContent = n.getContent({
					format: "raw"
				}), n.initialized = !0, n.bindPendingEventDelegates(), n.fire("init"), n.focus(!0), n.nodeChanged({
					initial: !0
				}), n.execCallback("init_instance_callback", n), n.contentStyles.length > 0 && (g = "", A(n.contentStyles, function(e) {
					g += e + "\r\n"
				}), n.dom.addStyle(g)), A(n.contentCSS, function(e) {
					n.loadedCSS[e] || (n.dom.loadCSS(e), n.loadedCSS[e] = !0)
				}), r.auto_focus && setTimeout(function() {
					var e;
					e = r.auto_focus === !0 ? n : n.editorManager.get(r.auto_focus), e.focus()
				}, 100), s = h = m = null
			},
			focus: function(e) {
				var t = this,
					n = t.selection,
					r = t.settings.content_editable,
					i, o, a = t.getDoc(),
					s;
				if (!e) {
					if (i = n.getRng(), i.item && (o = i.item(0)), t._refreshContentEditable(), r || (x.opera || t.getBody().focus(), t.getWin().focus()), P || r) {
						if (s = t.getBody(), s.setActive) try {
							s.setActive()
						} catch (l) {
							s.focus()
						} else s.focus();
						r && n.normalize()
					}
					o && o.ownerDocument == a && (i = a.body.createControlRange(), i.addElement(o), i.select())
				}
				t.editorManager.setActive(t)
			},
			execCallback: function(e) {
				var t = this,
					n = t.settings[e],
					r;
				if (n) return t.callbackLookup && (r = t.callbackLookup[e]) && (n = r.func, r = r.scope), "string" == typeof n && (r = n.replace(/\.\w+$/, ""), r = r ? H(r) : 0, n = H(n), t.callbackLookup = t.callbackLookup || {}, t.callbackLookup[e] = {
					func: n,
					scope: r
				}), n.apply(r || t, Array.prototype.slice.call(arguments, 1))
			},
			translate: function(e) {
				var t = this.settings.language || "en",
					n = this.editorManager.i18n;
				return e ? n.data[t + "." + e] || e.replace(/\{\#([^\}]+)\}/g, function(e, r) {
					return n.data[t + "." + r] || "{#" + r + "}"
				}) : ""
			},
			getLang: function(e, n) {
				return this.editorManager.i18n.data[(this.settings.language || "en") + "." + e] || (n !== t ? n : "{#" + e + "}")
			},
			getParam: function(e, t, n) {
				var r = e in this.settings ? this.settings[e] : t,
					i;
				return "hash" === n ? (i = {}, "string" == typeof r ? A(r.split(r.indexOf("=") > 0 ? /[;,](?![^=;,]*(?:[;,]|$))/ : ","), function(e) {
					e = e.split("="), i[L(e[0])] = L(e.length > 1 ? e[1] : e)
				}) : i = r, i) : r
			},
			nodeChanged: function(e) {
				this._nodeChangeDispatcher.nodeChanged(e)
			},
			addButton: function(e, t) {
				var n = this;
				t.cmd && (t.onclick = function() {
					n.execCommand(t.cmd)
				}), t.text || t.icon || (t.icon = e), n.buttons = n.buttons || {}, t.tooltip = t.tooltip || t.title, n.buttons[e] = t
			},
			addMenuItem: function(e, t) {
				var n = this;
				t.cmd && (t.onclick = function() {
					n.execCommand(t.cmd)
				}), n.menuItems = n.menuItems || {}, n.menuItems[e] = t
			},
			addCommand: function(e, t, n) {
				this.execCommands[e] = {
					func: t,
					scope: n || this
				}
			},
			addQueryStateHandler: function(e, t, n) {
				this.queryStateCommands[e] = {
					func: t,
					scope: n || this
				}
			},
			addQueryValueHandler: function(e, t, n) {
				this.queryValueCommands[e] = {
					func: t,
					scope: n || this
				}
			},
			addShortcut: function(e, t, n, r) {
				this.shortcuts.add(e, t, n, r)
			},
			execCommand: function(e, t, n, r) {
				var i = this,
					o = 0,
					a;
				if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e) || r && r.skip_focus || i.focus(), r = R({}, r), r = i.fire("BeforeExecCommand", {
					command: e,
					ui: t,
					value: n
				}), r.isDefaultPrevented()) return !1;
				if ((a = i.execCommands[e]) && a.func.call(a.scope, t, n) !== !0) return i.fire("ExecCommand", {
					command: e,
					ui: t,
					value: n
				}), !0;
				if (A(i.plugins, function(r) {
					return r.execCommand && r.execCommand(e, t, n) ? (i.fire("ExecCommand", {
						command: e,
						ui: t,
						value: n
					}), o = !0, !1) : void 0
				}), o) return o;
				if (i.theme && i.theme.execCommand && i.theme.execCommand(e, t, n)) return i.fire("ExecCommand", {
					command: e,
					ui: t,
					value: n
				}), !0;
				if (i.editorCommands.execCommand(e, t, n)) return i.fire("ExecCommand", {
					command: e,
					ui: t,
					value: n
				}), !0;
				try {
					o = i.getDoc().execCommand(e, t, n)
				} catch (s) {}
				return o ? (i.fire("ExecCommand", {
					command: e,
					ui: t,
					value: n
				}), !0) : !1
			},
			queryCommandState: function(e) {
				var t = this,
					n, r;
				if (!t._isHidden()) {
					if ((n = t.queryStateCommands[e]) && (r = n.func.call(n.scope), r === !0 || r === !1)) return r;
					if (r = t.editorCommands.queryCommandState(e), -1 !== r) return r;
					try {
						return t.getDoc().queryCommandState(e)
					} catch (i) {}
				}
			},
			queryCommandValue: function(e) {
				var n = this,
					r, i;
				if (!n._isHidden()) {
					if ((r = n.queryValueCommands[e]) && (i = r.func.call(r.scope), i !== !0)) return i;
					if (i = n.editorCommands.queryCommandValue(e), i !== t) return i;
					try {
						return n.getDoc().queryCommandValue(e)
					} catch (o) {}
				}
			},
			show: function() {
				var e = this;
				e.hidden && (e.hidden = !1, e.inline ? e.getBody().contentEditable = !0 : (k.show(e.getContainer()), k.hide(e.id)), e.load(), e.fire("show"))
			},
			hide: function() {
				var e = this,
					t = e.getDoc();
				e.hidden || (O && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = !1, e == e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (k.hide(e.getContainer()), k.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.fire("hide"))
			},
			isHidden: function() {
				return !!this.hidden
			},
			setProgressState: function(e, t) {
				this.fire("ProgressState", {
					state: e,
					time: t
				})
			},
			load: function(e) {
				var n = this,
					r = n.getElement(),
					i;
				return r ? (e = e || {}, e.load = !0, i = n.setContent(r.value !== t ? r.value : r.innerHTML, e), e.element = r, e.no_events || n.fire("LoadContent", e), e.element = r = null, i) : void 0
			},
			save: function(e) {
				var t = this,
					n = t.getElement(),
					r, i;
				if (n && t.initialized) return e = e || {}, e.save = !0, e.element = n, r = e.content = t.getContent(e), e.no_events || t.fire("SaveContent", e), r = e.content, /TEXTAREA|INPUT/i.test(n.nodeName) ? n.value = r : (t.inline || (n.innerHTML = r), (i = k.getParent(t.id, "form")) && A(i.elements, function(e) {
					return e.name == t.id ? (e.value = r, !1) : void 0
				})), e.element = n = null, e.set_dirty !== !1 && (t.isNotDirty = !0), r
			},
			setContent: function(e, t) {
				var n = this,
					r = n.getBody(),
					i;
				return t = t || {}, t.format = t.format || "html", t.set = !0, t.content = e, t.no_events || n.fire("BeforeSetContent", t), e = t.content, 0 === e.length || /^\s+$/.test(e) ? (i = n.settings.forced_root_block, i && n.schema.isValidChild(r.nodeName.toLowerCase(), i.toLowerCase()) ? (e = O && 11 > O ? "" : '<br data-mce-bogus="1">', e = n.dom.createHTML(i, n.settings.forced_root_block_attrs, e)) : O || (e = '<br data-mce-bogus="1">'), n.dom.setHTML(r, e), n.fire("SetContent", t)) : ("raw" !== t.format && (e = new s({}, n.schema).serialize(n.parser.parse(e, {
					isRootContent: !0
				}))), t.content = L(e), n.dom.setHTML(r, t.content), t.no_events || n.fire("SetContent", t)), t.content
			},
			getContent: function(e) {
				var t = this,
					n, r = t.getBody();
				return e = e || {}, e.format = e.format || "html", e.get = !0, e.getInner = !0, e.no_events || t.fire("BeforeGetContent", e), n = "raw" == e.format ? r.innerHTML : "text" == e.format ? r.innerText || r.textContent : t.serializer.serialize(r, e), e.content = "text" != e.format ? L(n) : n, e.no_events || t.fire("GetContent", e), e.content
			},
			insertContent: function(e, t) {
				t && (e = R({
					content: e
				}, t)), this.execCommand("mceInsertContent", !1, e)
			},
			isDirty: function() {
				return !this.isNotDirty
			},
			getContainer: function() {
				var e = this;
				return e.container || (e.container = k.get(e.editorContainer || e.id + "_parent")), e.container
			},
			getContentAreaContainer: function() {
				return this.contentAreaContainer
			},
			getElement: function() {
				return this.targetElm || (this.targetElm = k.get(this.id)), this.targetElm
			},
			getWin: function() {
				var e = this,
					t;
				return e.contentWindow || (t = e.iframeElement, t && (e.contentWindow = t.contentWindow)), e.contentWindow
			},
			getDoc: function() {
				var e = this,
					t;
				return e.contentDocument || (t = e.getWin(), t && (e.contentDocument = t.document)), e.contentDocument
			},
			getBody: function() {
				return this.bodyElement || this.getDoc().body
			},
			convertURL: function(e, t, n) {
				var r = this,
					i = r.settings;
				return i.urlconverter_callback ? r.execCallback("urlconverter_callback", e, n, !0, t) : !i.convert_urls || n && "LINK" == n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : i.relative_urls ? r.documentBaseURI.toRelative(e) : e = r.documentBaseURI.toAbsolute(e, i.remove_script_host)
			},
			addVisual: function(e) {
				var n = this,
					r = n.settings,
					i = n.dom,
					o;
				e = e || n.getBody(), n.hasVisual === t && (n.hasVisual = r.visual), A(i.select("table,a", e), function(e) {
					var t;
					switch (e.nodeName) {
						case "TABLE":
							return o = r.visual_table_class || "mce-item-table", t = i.getAttrib(e, "border"), void(t && "0" != t || !n.hasVisual ? i.removeClass(e, o) : i.addClass(e, o));
						case "A":
							return void(i.getAttrib(e, "href", !1) || (t = i.getAttrib(e, "name") || e.id, o = r.visual_anchor_class || "mce-item-anchor", t && n.hasVisual ? i.addClass(e, o) : i.removeClass(e, o)))
					}
				}), n.fire("VisualAid", {
					element: e,
					hasVisual: n.hasVisual
				})
			},
			remove: function() {
				var e = this;
				e.removed || (e.save(), e.removed = 1, e.unbindAllNativeEvents(), e.hasHiddenInput && k.remove(e.getElement().nextSibling), e.inline || (O && 10 > O && e.getDoc().execCommand("SelectAll", !1, null), k.setStyle(e.id, "display", e.orgDisplay), e.getBody().onload = null), e.fire("remove"), e.editorManager.remove(e), k.remove(e.getContainer()), e.destroy())
			},
			destroy: function(e) {
				var t = this,
					n;
				if (!t.destroyed) {
					if (!e && !t.removed) return void t.remove();
					e || (t.editorManager.off("beforeunload", t._beforeUnload), t.theme && t.theme.destroy && t.theme.destroy(), t.selection.destroy(), t.dom.destroy()), n = t.formElement, n && (n._mceOldSubmit && (n.submit = n._mceOldSubmit, n._mceOldSubmit = null), k.unbind(n, "submit reset", t.formEventDelegate)), t.contentAreaContainer = t.formElement = t.container = t.editorContainer = null, t.bodyElement = t.contentDocument = t.contentWindow = null, t.iframeElement = t.targetElm = null, t.selection && (t.selection = t.selection.win = t.selection.dom = t.selection.dom.doc = null), t.destroyed = 1
				}
			},
			_refreshContentEditable: function() {
				var e = this,
					t, n;
				e._isHidden() && (t = e.getBody(), n = t.parentNode, n.removeChild(t), n.appendChild(t), t.focus())
			},
			_isHidden: function() {
				var e;
				return P ? (e = this.selection.getSel(), !e || !e.rangeCount || 0 === e.rangeCount) : 0
			}
		}, R(N.prototype, _), N
	}), r(ft, [], function() {
		var e = {};
		return {
			rtl: !1,
			add: function(t, n) {
				for (var r in n) e[r] = n[r];
				this.rtl = this.rtl || "rtl" === e._dir
			},
			translate: function(t) {
				if ("undefined" == typeof t) return t;
				if ("string" != typeof t && t.raw) return t.raw;
				if (t.push) {
					var n = t.slice(1);
					t = (e[t[0]] || t[0]).replace(/\{([^\}]+)\}/g, function(e, t) {
						return n[t]
					})
				}
				return e[t] || t
			},
			data: e
		}
	}), r(pt, [y, d], function(e, t) {
		function n(e) {
			function s() {
				try {
					return document.activeElement
				} catch (e) {
					return document.body
				}
			}

			function l(e, t) {
				if (t && t.startContainer) {
					if (!e.isChildOf(t.startContainer, e.getRoot()) || !e.isChildOf(t.endContainer, e.getRoot())) return;
					return {
						startContainer: t.startContainer,
						startOffset: t.startOffset,
						endContainer: t.endContainer,
						endOffset: t.endOffset
					}
				}
				return t
			}

			function c(e, t) {
				var n;
				return t.startContainer ? (n = e.getDoc().createRange(), n.setStart(t.startContainer, t.startOffset), n.setEnd(t.endContainer, t.endOffset)) : n = t, n
			}

			function u(e) {
				return !!a.getParent(e, n.isEditorUIElement)
			}

			function d(n) {
				var d = n.editor;
				d.on("init", function() {
					(d.inline || t.ie) && ("onbeforedeactivate" in document && t.ie < 9 ? d.dom.bind(d.getBody(), "beforedeactivate", function(e) {
						if (e.target == d.getBody()) try {
							d.lastRng = d.selection.getRng()
						} catch (t) {}
					}) : d.on("nodechange mouseup keyup", function(e) {
						var t = s();
						"nodechange" == e.type && e.selectionChange || (t && t.id == d.id + "_ifr" && (t = d.getBody()), d.dom.isChildOf(t, d.getBody()) && (d.lastRng = d.selection.getRng()))
					}), t.webkit && !r && (r = function() {
						var t = e.activeEditor;
						if (t && t.selection) {
							var n = t.selection.getRng();
							n && !n.collapsed && (d.lastRng = n)
						}
					}, a.bind(document, "selectionchange", r)))
				}), d.on("setcontent", function() {
					d.lastRng = null
				}), d.on("mousedown", function() {
					d.selection.lastFocusBookmark = null
				}), d.on("focusin", function() {
					var t = e.focusedEditor;
					d.selection.lastFocusBookmark && (d.selection.setRng(c(d, d.selection.lastFocusBookmark)), d.selection.lastFocusBookmark = null), t != d && (t && t.fire("blur", {
						focusedEditor: d
					}), e.setActive(d), e.focusedEditor = d, d.fire("focus", {
						blurredEditor: t
					}), d.focus(!0)), d.lastRng = null
				}), d.on("focusout", function() {
					window.setTimeout(function() {
						var t = e.focusedEditor;
						u(s()) || t != d || (d.fire("blur", {
							focusedEditor: null
						}), e.focusedEditor = null, d.selection && (d.selection.lastFocusBookmark = null))
					}, 0)
				}), i || (i = function(t) {
					var n = e.activeEditor;
					n && t.target.ownerDocument == document && (n.selection && t.target != n.getBody() && (n.selection.lastFocusBookmark = l(n.dom, n.lastRng)), t.target == document.body || u(t.target) || e.focusedEditor != n || (n.fire("blur", {
						focusedEditor: null
					}), e.focusedEditor = null))
				}, a.bind(document, "focusin", i)), d.inline && !o && (o = function(t) {
					var n = e.activeEditor;
					if (n.inline && !n.dom.isChildOf(t.target, n.getBody())) {
						var r = n.selection.getRng();
						r.collapsed || (n.lastRng = r)
					}
				}, a.bind(document, "mouseup", o))
			}

			function f(t) {
				e.focusedEditor == t.editor && (e.focusedEditor = null), e.activeEditor || (a.unbind(document, "selectionchange", r), a.unbind(document, "focusin", i), a.unbind(document, "mouseup", o), r = i = o = null)
			}
			e.on("AddEditor", d), e.on("RemoveEditor", f)
		}
		var r, i, o, a = e.DOM;
		return n.isEditorUIElement = function(e) {
			return -1 !== e.className.toString().indexOf("mce-")
		}, n
	}), r(ht, [dt, f, y, V, d, u, lt, ft, pt], function(e, t, n, r, i, o, a, s, l) {
		function c(e) {
			var t = v.editors,
				n;
			delete t[e.id];
			for (var r = 0; r < t.length; r++)
				if (t[r] == e) {
					t.splice(r, 1), n = !0;
					break
				}
			return v.activeEditor == e && (v.activeEditor = t[0]), v.focusedEditor == e && (v.focusedEditor = null), n
		}

		function u(e) {
			return e && !(e.getContainer() || e.getBody()).parentNode && (c(e), e.unbindAllNativeEvents(), e.destroy(!0), e = null), e
		}
		var d = n.DOM,
			f = o.explode,
			p = o.each,
			h = o.extend,
			m = 0,
			g, v;
		return v = {
			$: t,
			majorVersion: "4",
			minorVersion: "1.6",
			releaseDate: "2014-10-08",
			editors: [],
			i18n: s,
			activeEditor: null,
			setup: function() {
				var e = this,
					t, n, i = "",
					o, a;
				if (n = document.location.href, /^[^:]+:\/\/\/?[^\/]+\//.test(n) && (n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(n) || (n += "/")), o = window.tinymce || window.tinyMCEPreInit) t = o.base || o.baseURL, i = o.suffix;
				else {
					for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++)
						if (a = s[c].src, /tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(a)) {
							-1 != a.indexOf(".min") && (i = ".min"), t = a.substring(0, a.lastIndexOf("/"));
							break
						}!t && document.currentScript && (a = document.currentScript.src, -1 != a.indexOf(".min") && (i = ".min"), t = a.substring(0, a.lastIndexOf("/")))
				}
				e.baseURL = new r(n).toAbsolute(t), e.documentBaseURL = n, e.baseURI = new r(e.baseURL), e.suffix = i, e.focusManager = new l(e)
			},
			init: function(t) {
				function n(e) {
					var t = e.id;
					return t || (t = e.name, t = t && !d.get(t) ? e.name : d.uniqueId(), e.setAttribute("id", t)), t
				}

				function r(t, n, r) {
					if (!u(s.get(t))) {
						var i = new e(t, n, s);
						i.targetElm = i.targetElm || r, l.push(i), i.render()
					}
				}

				function i(e) {
					var n = t[e];
					if (n) return n.apply(s, Array.prototype.slice.call(arguments, 2))
				}

				function o(e, t) {
					return t.constructor === RegExp ? t.test(e.className) : d.hasClass(e, t)
				}

				function a() {
					var e, s;
					if (d.unbind(window, "ready", a), i("onpageload"), t.types) return void p(t.types, function(e) {
						p(d.select(e.selector), function(i) {
							r(n(i), h({}, t, e), i)
						})
					});
					if (t.selector) return void p(d.select(t.selector), function(e) {
						r(n(e), t, e)
					});
					switch (t.target && r(n(t.target), t), t.mode) {
						case "exact":
							e = t.elements || "", e.length > 0 && p(f(e), function(e) {
								var n;
								(n = d.get(e)) ? r(e, t, n) : p(document.forms, function(n) {
									p(n.elements, function(n) {
										n.name === e && (e = "mce_editor_" + m++, d.setAttrib(n, "id", e), r(e, t, n))
									})
								})
							});
							break;
						case "textareas":
						case "specific_textareas":
							p(d.select("textarea"), function(e) {
								t.editor_deselector && o(e, t.editor_deselector) || (!t.editor_selector || o(e, t.editor_selector)) && r(n(e), t, e)
							})
					}
					t.oninit && (e = s = 0, p(l, function(t) {
						s++, t.initialized ? e++ : t.on("init", function() {
							e++, e == s && i("oninit")
						}), e == s && i("oninit")
					}))
				}
				var s = this,
					l = [];
				s.settings = t, d.bind(window, "ready", a)
			},
			get: function(e) {
				return arguments.length ? e in this.editors ? this.editors[e] : null : this.editors
			},
			add: function(e) {
				var t = this,
					n = t.editors;
				return n[e.id] = e, n.push(e), t.activeEditor = e, t.fire("AddEditor", {
					editor: e
				}), g || (g = function() {
					t.fire("BeforeUnload")
				}, d.bind(window, "beforeunload", g)), e
			},
			createEditor: function(t, n) {
				return this.add(new e(t, n, this))
			},
			remove: function(e) {
				var t = this,
					n, r = t.editors,
					i; {
					if (e) return "string" == typeof e ? (e = e.selector || e, void p(d.select(e), function(e) {
						i = r[e.id], i && t.remove(i)
					})) : (i = e, r[i.id] ? (c(i) && t.fire("RemoveEditor", {
						editor: i
					}), r.length || d.unbind(window, "beforeunload", g), i.remove(), i) : null);
					for (n = r.length - 1; n >= 0; n--) t.remove(r[n])
				}
			},
			execCommand: function(t, n, r) {
				var i = this,
					o = i.get(r);
				switch (t) {
					case "mceAddEditor":
						return i.get(r) || new e(r, i.settings, i).render(), !0;
					case "mceRemoveEditor":
						return o && o.remove(), !0;
					case "mceToggleEditor":
						return o ? (o.isHidden() ? o.show() : o.hide(), !0) : (i.execCommand("mceAddEditor", 0, r), !0)
				}
				return i.activeEditor ? i.activeEditor.execCommand(t, n, r) : !1
			},
			triggerSave: function() {
				p(this.editors, function(e) {
					e.save()
				})
			},
			addI18n: function(e, t) {
				s.add(e, t)
			},
			translate: function(e) {
				return s.translate(e)
			},
			setActive: function(e) {
				var t = this.activeEditor;
				this.activeEditor != e && (t && t.fire("deactivate", {
					relatedTarget: e
				}), e.fire("activate", {
					relatedTarget: t
				})), this.activeEditor = e
			}
		}, h(v, a), v.setup(), window.tinymce = window.tinyMCE = v, v
	}), r(mt, [ht, u], function(e, t) {
		var n = t.each,
			r = t.explode;
		e.on("AddEditor", function(e) {
			var t = e.editor;
			t.on("preInit", function() {
				function e(e, t) {
					n(t, function(t, n) {
						t && s.setStyle(e, n, t)
					}), s.rename(e, "span")
				}

				function i(e) {
					s = t.dom, l.convert_fonts_to_spans && n(s.select("font,u,strike", e.node), function(e) {
						o[e.nodeName.toLowerCase()](s, e)
					})
				}
				var o, a, s, l = t.settings;
				l.inline_styles && (a = r(l.font_size_legacy_values), o = {
					font: function(t, n) {
						e(n, {
							backgroundColor: n.style.backgroundColor,
							color: n.color,
							fontFamily: n.face,
							fontSize: a[parseInt(n.size, 10) - 1]
						})
					},
					u: function(t, n) {
						e(n, {
							textDecoration: "underline"
						})
					},
					strike: function(t, n) {
						e(n, {
							textDecoration: "line-through"
						})
					}
				}, t.on("PreProcess SetContent", i))
			})
		})
	}), r(gt, [lt, u], function(e, t) {
		var n = {
			send: function(e) {
				function t() {
					!e.async || 4 == r.readyState || i++ > 1e4 ? (e.success && 1e4 > i && 200 == r.status ? e.success.call(e.success_scope, "" + r.responseText, r, e) : e.error && e.error.call(e.error_scope, i > 1e4 ? "TIMED_OUT" : "GENERAL", r, e), r = null) : setTimeout(t, 10)
				}
				var r, i = 0;
				if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = e.async === !1 ? !1 : !0, e.data = e.data || "", r = new XMLHttpRequest) {
					if (r.overrideMimeType && r.overrideMimeType(e.content_type), r.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.crossDomain && (r.withCredentials = !0), e.content_type && r.setRequestHeader("Content-Type", e.content_type), r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r = n.fire("beforeSend", {
						xhr: r,
						settings: e
					}).xhr, r.send(e.data), !e.async) return t();
					setTimeout(t, 10)
				}
			}
		};
		return t.extend(n, e), n
	}), r(vt, [], function() {
		function e(t, n) {
			var r, i, o, a;
			if (n = n || '"', null === t) return "null";
			if (o = typeof t, "string" == o) return i = "\bb	t\nn\ff\rr\"\"''\\\\", n + t.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g, function(e, t) {
				return '"' === n && "'" === e ? e : (r = i.indexOf(t), r + 1 ? "\\" + i.charAt(r + 1) : (e = t.charCodeAt().toString(16), "\\u" + "0000".substring(e.length) + e))
			}) + n;
			if ("object" == o) {
				if (t.hasOwnProperty && "[object Array]" === Object.prototype.toString.call(t)) {
					for (r = 0, i = "["; r < t.length; r++) i += (r > 0 ? "," : "") + e(t[r], n);
					return i + "]"
				}
				i = "{";
				for (a in t) t.hasOwnProperty(a) && (i += "function" != typeof t[a] ? (i.length > 1 ? "," + n : n) + a + n + ":" + e(t[a], n) : "");
				return i + "}"
			}
			return "" + t
		}
		return {
			serialize: e,
			parse: function(e) {
				try {
					return window[String.fromCharCode(101) + "val"]("(" + e + ")")
				} catch (t) {}
			}
		}
	}), r(yt, [vt, gt, u], function(e, t, n) {
		function r(e) {
			this.settings = i({}, e), this.count = 0
		}
		var i = n.extend;
		return r.sendRPC = function(e) {
			return (new r).send(e)
		}, r.prototype = {
			send: function(n) {
				var r = n.error,
					o = n.success;
				n = i(this.settings, n), n.success = function(t, i) {
					t = e.parse(t), "undefined" == typeof t && (t = {
						error: "JSON Parse error."
					}), t.error ? r.call(n.error_scope || n.scope, t.error, i) : o.call(n.success_scope || n.scope, t.result)
				}, n.error = function(e, t) {
					r && r.call(n.error_scope || n.scope, e, t)
				}, n.data = e.serialize({
					id: n.id || "c" + this.count++,
					method: n.method,
					params: n.params
				}), n.content_type = "application/json", t.send(n)
			}
		}, r
	}), r(bt, [y], function(e) {
		return {
			callbacks: {},
			count: 0,
			send: function(n) {
				var r = this,
					i = e.DOM,
					o = n.count !== t ? n.count : r.count,
					a = "tinymce_jsonp_" + o;
				r.callbacks[o] = function(e) {
					i.remove(a), delete r.callbacks[o], n.callback(e)
				}, i.add(i.doc.body, "script", {
					id: a,
					src: n.url,
					type: "text/javascript"
				}), r.count++
			}
		}
	}), r(Ct, [], function() {
		function e() {
			s = [];
			for (var e in a) s.push(e);
			i.length = s.length
		}

		function n() {
			function n(e) {
				var n, r;
				return r = e !== t ? u + e : i.indexOf(",", u), -1 === r || r > i.length ? null : (n = i.substring(u, r), u = r + 1, n)
			}
			var r, i, s, u = 0;
			if (a = {}, c) {
				o.load(l), i = o.getAttribute(l) || "";
				do {
					var d = n();
					if (null === d) break;
					if (r = n(parseInt(d, 32) || 0), null !== r) {
						if (d = n(), null === d) break;
						s = n(parseInt(d, 32) || 0), r && (a[r] = s)
					}
				} while (null !== r);
				e()
			}
		}

		function r() {
			var t, n = "";
			if (c) {
				for (var r in a) t = a[r], n += (n ? "," : "") + r.length.toString(32) + "," + r + "," + t.length.toString(32) + "," + t;
				o.setAttribute(l, n);
				try {
					o.save(l)
				} catch (i) {}
				e()
			}
		}
		var i, o, a, s, l, c;
		try {
			if (window.localStorage) return localStorage
		} catch (u) {}
		return l = "tinymce", o = document.documentElement, c = !!o.addBehavior, c && o.addBehavior("#default#userData"), i = {
			key: function(e) {
				return s[e]
			},
			getItem: function(e) {
				return e in a ? a[e] : null
			},
			setItem: function(e, t) {
				a[e] = "" + t, r()
			},
			removeItem: function(e) {
				delete a[e], r()
			},
			clear: function() {
				a = {}, r()
			}
		}, n(), i
	}), r(xt, [y, l, b, C, u, d], function(e, t, n, r, i, o) {
		var a = window.tinymce;
		return a.DOM = e.DOM, a.ScriptLoader = n.ScriptLoader, a.PluginManager = r.PluginManager, a.ThemeManager = r.ThemeManager, a.dom = a.dom || {}, a.dom.Event = t.Event, i.each(i, function(e, t) {
			a[t] = e
		}), i.each("isOpera isWebKit isIE isGecko isMac".split(" "), function(e) {
			a[e] = o[e.substr(2).toLowerCase()]
		}), {}
	}), r(wt, [U, u], function(e, t) {
		return e.extend({
			Defaults: {
				firstControlClass: "first",
				lastControlClass: "last"
			},
			init: function(e) {
				this.settings = t.extend({}, this.Defaults, e)
			},
			preRender: function(e) {
				e.addClass(this.settings.containerClass, "body")
			},
			applyClasses: function(e) {
				var t = this,
					n = t.settings,
					r, i, o;
				r = e.items().filter(":visible"), i = n.firstControlClass, o = n.lastControlClass, r.each(function(e) {
					e.removeClass(i).removeClass(o), n.controlClass && e.addClass(n.controlClass)
				}), r.eq(0).addClass(i), r.eq(-1).addClass(o)
			},
			renderHtml: function(e) {
				var t = this,
					n = t.settings,
					r, i = "";
				return r = e.items(), r.eq(0).addClass(n.firstControlClass), r.eq(-1).addClass(n.lastControlClass), r.each(function(e) {
					n.controlClass && e.addClass(n.controlClass), i += e.renderHtml()
				}), i
			},
			recalc: function() {},
			postRender: function() {}
		})
	}), r(_t, [wt], function(e) {
		return e.extend({
			Defaults: {
				containerClass: "abs-layout",
				controlClass: "abs-layout-item"
			},
			recalc: function(e) {
				e.items().filter(":visible").each(function(e) {
					var t = e.settings;
					e.layoutRect({
						x: t.x,
						y: t.y,
						w: t.w,
						h: t.h
					}), e.recalc && e.recalc()
				})
			},
			renderHtml: function(e) {
				return '<div id="' + e._id + '-absend" class="' + e.classPrefix + 'abs-end"></div>' + this._super(e)
			}
		})
	}), r(Et, [K, tt], function(e, t) {
		return e.extend({
			Mixins: [t],
			Defaults: {
				classes: "widget tooltip tooltip-n"
			},
			text: function(e) {
				var t = this;
				return "undefined" != typeof e ? (t._value = e, t._rendered && (t.getEl().lastChild.innerHTML = t.encode(e)), t) : t._value
			},
			renderHtml: function() {
				var e = this,
					t = e.classPrefix;
				return '<div id="' + e._id + '" class="' + e.classes() + '" role="presentation"><div class="' + t + 'tooltip-arrow"></div><div class="' + t + 'tooltip-inner">' + e.encode(e._text) + "</div></div>"
			},
			repaint: function() {
				var e = this,
					t, n;
				t = e.getEl().style, n = e._layoutRect, t.left = n.x + "px", t.top = n.y + "px", t.zIndex = 131070
			}
		})
	}), r(Nt, [K, Et], function(e, t) {
		var n, r = e.extend({
			init: function(e) {
				var t = this;
				t._super(e), e = t.settings, t.canFocus = !0, e.tooltip && r.tooltips !== !1 && (t.on("mouseenter", function(n) {
					var r = t.tooltip().moveTo(-65535);
					if (n.control == t) {
						var i = r.text(e.tooltip).show().testMoveRel(t.getEl(), ["bc-tc", "bc-tl", "bc-tr"]);
						r.toggleClass("tooltip-n", "bc-tc" == i), r.toggleClass("tooltip-nw", "bc-tl" == i), r.toggleClass("tooltip-ne", "bc-tr" == i), r.moveRel(t.getEl(), i)
					} else r.hide()
				}), t.on("mouseleave mousedown click", function() {
					t.tooltip().hide()
				})), t.aria("label", e.ariaLabel || e.tooltip)
			},
			tooltip: function() {
				return n || (n = new t({
					type: "tooltip"
				}), n.renderTo()), n
			},
			active: function(e) {
				var t = this,
					n;
				return e !== n && (t.aria("pressed", e), t.toggleClass("active", e)), t._super(e)
			},
			disabled: function(e) {
				var t = this,
					n;
				return e !== n && (t.aria("disabled", e), t.toggleClass("disabled", e)), t._super(e)
			},
			postRender: function() {
				var e = this,
					t = e.settings;
				e._rendered = !0, e._super(), e.parent() || !t.width && !t.height || (e.initLayoutRect(), e.repaint()), t.autofocus && e.focus()
			},
			remove: function() {
				this._super(), n && (n.remove(), n = null)
			}
		});
		return r
	}), r(kt, [Nt], function(e) {
		return e.extend({
			Defaults: {
				classes: "widget btn",
				role: "button"
			},
			init: function(e) {
				var t = this,
					n;
				t.on("click mousedown", function(e) {
					e.preventDefault()
				}), t._super(e), n = e.size, e.subtype && t.addClass(e.subtype), n && t.addClass("btn-" + n)
			},
			icon: function(e) {
				var t = this,
					n = t.classPrefix;
				if ("undefined" == typeof e) return t.settings.icon;
				if (t.settings.icon = e, e = e ? n + "ico " + n + "i-" + t.settings.icon : "", t._rendered) {
					var r = t.getEl().firstChild,
						i = r.getElementsByTagName("i")[0];
					e ? (i && i == r.firstChild || (i = document.createElement("i"), r.insertBefore(i, r.firstChild)), i.className = e) : i && r.removeChild(i), t.text(t._text)
				}
				return t
			},
			repaint: function() {
				var e = this.getEl().firstChild.style;
				e.width = e.height = "100%", this._super()
			},
			text: function(e) {
				var t = this;
				if (t._rendered) {
					var n = t.getEl().lastChild.lastChild;
					n && (n.data = t.translate(e))
				}
				return t._super(e)
			},
			renderHtml: function() {
				var e = this,
					t = e._id,
					n = e.classPrefix,
					r = e.settings.icon,
					i;
				return i = e.settings.image, i ? (r = "none", "string" != typeof i && (i = window.getSelection ? i[0] : i[1]), i = " style=\"background-image: url('" + i + "')\"") : i = "", r = e.settings.icon ? n + "ico " + n + "i-" + r : "", '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1" aria-labelledby="' + t + '"><button role="presentation" type="button" tabindex="-1">' + (r ? '<i class="' + r + '"' + i + "></i>" : "") + (e._text ? (r ? "\xa0" : "") + e.encode(e._text) : "") + "</button></div>"
			}
		})
	}), r(St, [J], function(e) {
		return e.extend({
			Defaults: {
				defaultType: "button",
				role: "group"
			},
			renderHtml: function() {
				var e = this,
					t = e._layout;
				return e.addClass("btn-group"), e.preRender(), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '"><div id="' + e._id + '-body">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
			}
		})
	}), r(Tt, [Nt], function(e) {
		return e.extend({
			Defaults: {
				classes: "checkbox",
				role: "checkbox",
				checked: !1
			},
			init: function(e) {
				var t = this;
				t._super(e), t.on("click mousedown", function(e) {
					e.preventDefault()
				}), t.on("click", function(e) {
					e.preventDefault(), t.disabled() || t.checked(!t.checked())
				}), t.checked(t.settings.checked)
			},
			checked: function(e) {
				var t = this;
				return "undefined" != typeof e ? (e ? t.addClass("checked") : t.removeClass("checked"), t._checked = e, t.aria("checked", e), t) : t._checked
			},
			value: function(e) {
				return this.checked(e)
			},
			renderHtml: function() {
				var e = this,
					t = e._id,
					n = e.classPrefix;
				return '<div id="' + t + '" class="' + e.classes() + '" unselectable="on" aria-labelledby="' + t + '-al" tabindex="-1"><i class="' + n + "ico " + n + 'i-checkbox"></i><span id="' + t + '-al" class="' + n + 'label">' + e.encode(e._text) + "</span></div>"
			}
		})
	}), r(Rt, [Nt, G, Y], function(e, t, n) {
		return e.extend({
			init: function(e) {
				var t = this;
				t._super(e), t.addClass("combobox"), t.subinput = !0, t.ariaTarget = "inp", e = t.settings, e.menu = e.menu || e.values, e.menu && (e.icon = "caret"), t.on("click", function(n) {
					for (var r = n.target, i = t.getEl(); r && r != i;) r.id && -1 != r.id.indexOf("-open") && (t.fire("action"), e.menu && (t.showMenu(), n.aria && t.menu.items()[0].focus())), r = r.parentNode
				}), t.on("keydown", function(e) {
					"INPUT" == e.target.nodeName && 13 == e.keyCode && t.parents().reverse().each(function(n) {
						return e.preventDefault(), t.fire("change"), n.hasEventListeners("submit") && n.toJSON ? (n.fire("submit", {
							data: n.toJSON()
						}), !1) : void 0
					})
				}), e.placeholder && (t.addClass("placeholder"), t.on("focusin", function() {
					t._hasOnChange || (n.on(t.getEl("inp"), "change", function() {
						t.fire("change")
					}), t._hasOnChange = !0), t.hasClass("placeholder") && (t.getEl("inp").value = "", t.removeClass("placeholder"))
				}), t.on("focusout", function() {
					0 === t.value().length && (t.getEl("inp").value = e.placeholder, t.addClass("placeholder"))
				}))
			},
			showMenu: function() {
				var e = this,
					n = e.settings,
					r;
				e.menu || (r = n.menu || [], r.length ? r = {
					type: "menu",
					items: r
				} : r.type = r.type || "menu", e.menu = t.create(r).parent(e).renderTo(e.getContainerElm()), e.fire("createmenu"), e.menu.reflow(), e.menu.on("cancel", function(t) {
					t.control === e.menu && e.focus()
				}), e.menu.on("show hide", function(t) {
					t.control.items().each(function(t) {
						t.active(t.value() == e.value())
					})
				}).fire("show"), e.menu.on("select", function(t) {
					e.value(t.control.value())
				}), e.on("focusin", function(t) {
					"INPUT" == t.target.tagName.toUpperCase() && e.menu.hide()
				}), e.aria("expanded", !0)), e.menu.show(), e.menu.layoutRect({
					w: e.layoutRect().w
				}), e.menu.moveRel(e.getEl(), e.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"])
			},
			value: function(e) {
				var t = this;
				return "undefined" != typeof e ? (t._value = e, t.removeClass("placeholder"), t._rendered && (t.getEl("inp").value = e), t) : t._rendered ? (e = t.getEl("inp").value, e != t.settings.placeholder ? e : "") : t._value
			},
			disabled: function(e) {
				var t = this;
				return t._rendered && "undefined" != typeof e && (t.getEl("inp").disabled = e), t._super(e)
			},
			focus: function() {
				this.getEl("inp").focus()
			},
			repaint: function() {
				var e = this,
					t = e.getEl(),
					r = e.getEl("open"),
					i = e.layoutRect(),
					o, a;
				o = r ? i.w - n.getSize(r).width - 10 : i.w - 10;
				var s = document;
				return s.all && (!s.documentMode || s.documentMode <= 8) && (a = e.layoutRect().h - 2 + "px"), n.css(t.firstChild, {
					width: o,
					lineHeight: a
				}), e._super(), e
			},
			postRender: function() {
				var e = this;
				return n.on(this.getEl("inp"), "change", function() {
					e.fire("change")
				}), e._super()
			},
			remove: function() {
				n.off(this.getEl("inp")), this._super()
			},
			renderHtml: function() {
				var e = this,
					t = e._id,
					n = e.settings,
					r = e.classPrefix,
					i = n.value || n.placeholder || "",
					o, a, s = "",
					l = "";
				return "spellcheck" in n && (l += ' spellcheck="' + n.spellcheck + '"'), n.maxLength && (l += ' maxlength="' + n.maxLength + '"'), n.size && (l += ' size="' + n.size + '"'), n.subtype && (l += ' type="' + n.subtype + '"'), e.disabled() && (l += ' disabled="disabled"'), o = n.icon, o && "caret" != o && (o = r + "ico " + r + "i-" + n.icon), a = e._text, (o || a) && (s = '<div id="' + t + '-open" class="' + r + "btn " + r + 'open" tabIndex="-1" role="button"><button id="' + t + '-action" type="button" hidefocus="1" tabindex="-1">' + ("caret" != o ? '<i class="' + o + '"></i>' : '<i class="' + r + 'caret"></i>') + (a ? (o ? " " : "") + a : "") + "</button></div>", e.addClass("has-open")), '<div id="' + t + '" class="' + e.classes() + '"><input id="' + t + '-inp" class="' + r + "textbox " + r + 'placeholder" value="' + i + '" hidefocus="1"' + l + " />" + s + "</div>"
			}
		})
	}), r(At, [Rt], function(e) {
		return e.extend({
			init: function(e) {
				var t = this;
				e.spellcheck = !1, e.onaction && (e.icon = "none"), t._super(e), t.addClass("colorbox"), t.on("change keyup postrender", function() {
					t.repaintColor(t.value())
				})
			},
			repaintColor: function(e) {
				var t = this.getEl().getElementsByTagName("i")[0];
				if (t) try {
					t.style.background = e
				} catch (n) {}
			},
			value: function(e) {
				var t = this;
				return "undefined" != typeof e && t._rendered && t.repaintColor(e), t._super(e)
			}
		})
	}), r(Bt, [kt, rt], function(e, t) {
		return e.extend({
			showPanel: function() {
				var e = this,
					n = e.settings;
				if (e.active(!0), e.panel) e.panel.show();
				else {
					var r = n.panel;
					r.type && (r = {
						layout: "grid",
						items: r
					}), r.role = r.role || "dialog", r.popover = !0, r.autohide = !0, r.ariaRoot = !0, e.panel = new t(r).on("hide", function() {
						e.active(!1)
					}).on("cancel", function(t) {
						t.stopPropagation(), e.focus(), e.hidePanel()
					}).parent(e).renderTo(e.getContainerElm()), e.panel.fire("show"), e.panel.reflow()
				}
				e.panel.moveRel(e.getEl(), n.popoverAlign || (e.isRtl() ? ["bc-tr", "bc-tc"] : ["bc-tl", "bc-tc"]))
			},
			hidePanel: function() {
				var e = this;
				e.panel && e.panel.hide()
			},
			postRender: function() {
				var e = this;
				return e.aria("haspopup", !0), e.on("click", function(t) {
					t.control === e && (e.panel && e.panel.visible() ? e.hidePanel() : (e.showPanel(), e.panel.focus(!!t.aria)))
				}), e._super()
			},
			remove: function() {
				return this.panel && (this.panel.remove(), this.panel = null), this._super()
			}
		})
	}), r(Dt, [Bt, y], function(e, t) {
		var n = t.DOM;
		return e.extend({
			init: function(e) {
				this._super(e), this.addClass("colorbutton")
			},
			color: function(e) {
				return e ? (this._color = e, this.getEl("preview").style.backgroundColor = e, this) : this._color
			},
			renderHtml: function() {
				var e = this,
					t = e._id,
					n = e.classPrefix,
					r = e.settings.icon ? n + "ico " + n + "i-" + e.settings.icon : "",
					i = e.settings.image ? " style=\"background-image: url('" + e.settings.image + "')\"" : "";
				return '<div id="' + t + '" class="' + e.classes() + '" role="button" tabindex="-1" aria-haspopup="true"><button role="presentation" hidefocus="1" type="button" tabindex="-1">' + (r ? '<i class="' + r + '"' + i + "></i>" : "") + '<span id="' + t + '-preview" class="' + n + 'preview"></span>' + (e._text ? (r ? " " : "") + e._text : "") + '</button><button type="button" class="' + n + 'open" hidefocus="1" tabindex="-1"> <i class="' + n + 'caret"></i></button></div>'
			},
			postRender: function() {
				var e = this,
					t = e.settings.onclick;
				return e.on("click", function(r) {
					r.aria && "down" == r.aria.key || r.control != e || n.getParent(r.target, "." + e.classPrefix + "open") || (r.stopImmediatePropagation(), t.call(e, r))
				}), delete e.settings.onclick, e._super()
			}
		})
	}), r(Lt, [], function() {
		function e(e) {
			function i(e, i, o) {
				var a, s, l, c, u, d;
				return a = 0, s = 0, l = 0, e /= 255, i /= 255, o /= 255, u = t(e, t(i, o)), d = n(e, n(i, o)), u == d ? (l = u, {
					h: 0,
					s: 0,
					v: 100 * l
				}) : (c = e == u ? i - o : o == u ? e - i : o - e, a = e == u ? 3 : o == u ? 1 : 5, a = 60 * (a - c / (d - u)), s = (d - u) / d, l = d, {
					h: r(a),
					s: r(100 * s),
					v: r(100 * l)
				})
			}

			function o(e, i, o) {
				var a, s, l, c;
				if (e = (parseInt(e, 10) || 0) % 360, i = parseInt(i, 10) / 100, o = parseInt(o, 10) / 100, i = n(0, t(i, 1)), o = n(0, t(o, 1)), 0 === i) return void(d = f = p = r(255 * o));
				switch (a = e / 60, s = o * i, l = s * (1 - Math.abs(a % 2 - 1)), c = o - s, Math.floor(a)) {
					case 0:
						d = s, f = l, p = 0;
						break;
					case 1:
						d = l, f = s, p = 0;
						break;
					case 2:
						d = 0, f = s, p = l;
						break;
					case 3:
						d = 0, f = l, p = s;
						break;
					case 4:
						d = l, f = 0, p = s;
						break;
					case 5:
						d = s, f = 0, p = l;
						break;
					default:
						d = f = p = 0
				}
				d = r(255 * (d + c)), f = r(255 * (f + c)), p = r(255 * (p + c))
			}

			function a() {
				function e(e) {
					return e = parseInt(e, 10).toString(16), e.length > 1 ? e : "0" + e
				}
				return "#" + e(d) + e(f) + e(p)
			}

			function s() {
				return {
					r: d,
					g: f,
					b: p
				}
			}

			function l() {
				return i(d, f, p)
			}

			function c(e) {
				var t;
				return "object" == typeof e ? "r" in e ? (d = e.r, f = e.g, p = e.b) : "v" in e && o(e.h, e.s, e.v) : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e)) ? (d = parseInt(t[1], 10), f = parseInt(t[2], 10), p = parseInt(t[3], 10)) : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e)) ? (d = parseInt(t[1], 16), f = parseInt(t[2], 16), p = parseInt(t[3], 16)) : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && (d = parseInt(t[1] + t[1], 16), f = parseInt(t[2] + t[2], 16), p = parseInt(t[3] + t[3], 16)), d = 0 > d ? 0 : d > 255 ? 255 : d, f = 0 > f ? 0 : f > 255 ? 255 : f, p = 0 > p ? 0 : p > 255 ? 255 : p, u
			}
			var u = this,
				d = 0,
				f = 0,
				p = 0;
			e && c(e), u.toRgb = s, u.toHsv = l, u.toHex = a, u.parse = c
		}
		var t = Math.min,
			n = Math.max,
			r = Math.round;
		return e
	}), r(Ht, [Nt, Q, Y, Lt], function(e, t, n, r) {
		return e.extend({
			Defaults: {
				classes: "widget colorpicker"
			},
			init: function(e) {
				this._super(e)
			},
			postRender: function() {
				function e(e, t) {
					var r = n.getPos(e),
						i, o;
					return i = t.pageX - r.x, o = t.pageY - r.y, i = Math.max(0, Math.min(i / e.clientWidth, 1)), o = Math.max(0, Math.min(o / e.clientHeight, 1)), {
						x: i,
						y: o
					}
				}

				function i(e, t) {
					var i = (360 - e.h) / 360;
					n.css(d, {
						top: 100 * i + "%"
					}), t || n.css(p, {
						left: e.s + "%",
						top: 100 - e.v + "%"
					}), f.style.background = new r({
						s: 100,
						v: 100,
						h: e.h
					}).toHex(), s.color().parse({
						s: e.s,
						v: e.v,
						h: e.h
					})
				}

				function o(t) {
					var n;
					n = e(f, t), c.s = 100 * n.x, c.v = 100 * (1 - n.y), i(c), s.fire("change")
				}

				function a(t) {
					var n;
					n = e(u, t), c = l.toHsv(), c.h = 360 * (1 - n.y), i(c, !0), s.fire("change")
				}
				var s = this,
					l = s.color(),
					c, u, d, f, p;
				u = s.getEl("h"), d = s.getEl("hp"), f = s.getEl("sv"), p = s.getEl("svp"), s._repaint = function() {
					c = l.toHsv(), i(c)
				}, s._super(), s._svdraghelper = new t(s._id + "-sv", {
					start: o,
					drag: o
				}), s._hdraghelper = new t(s._id + "-h", {
					start: a,
					drag: a
				}), s._repaint()
			},
			rgb: function() {
				return this.color().toRgb()
			},
			value: function(e) {
				var t = this;
				return arguments.length ? (t.color().parse(e), void(t._rendered && t._repaint())) : t.color().toHex()
			},
			color: function() {
				return this._color || (this._color = new r), this._color
			},
			renderHtml: function() {
				function e() {
					var e, t, n = "",
						i, a;
					for (i = "filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=", a = o.split(","), e = 0, t = a.length - 1; t > e; e++) n += '<div class="' + r + 'colorpicker-h-chunk" style="height:' + 100 / t + "%;" + i + a[e] + ",endColorstr=" + a[e + 1] + ");-ms-" + i + a[e] + ",endColorstr=" + a[e + 1] + ')"></div>';
					return n
				}
				var t = this,
					n = t._id,
					r = t.classPrefix,
					i, o = "#ff0000,#ff0080,#ff00ff,#8000ff,#0000ff,#0080ff,#00ffff,#00ff80,#00ff00,#80ff00,#ffff00,#ff8000,#ff0000",
					a = "background: -ms-linear-gradient(top," + o + ");background: linear-gradient(to bottom," + o + ");";
				return i = '<div id="' + n + '-h" class="' + r + 'colorpicker-h" style="' + a + '">' + e() + '<div id="' + n + '-hp" class="' + r + 'colorpicker-h-marker"></div></div>', '<div id="' + n + '" class="' + t.classes() + '"><div id="' + n + '-sv" class="' + r + 'colorpicker-sv"><div class="' + r + 'colorpicker-overlay1"><div class="' + r + 'colorpicker-overlay2"><div id="' + n + '-svp" class="' + r + 'colorpicker-selector1"><div class="' + r + 'colorpicker-selector2"></div></div></div></div></div>' + i + "</div>"
			}
		})
	}), r(Mt, [Nt], function(e) {
		return e.extend({
			init: function(e) {
				var t = this;
				e.delimiter || (e.delimiter = "\xbb"), t._super(e), t.addClass("path"), t.canFocus = !0, t.on("click", function(e) {
					var n, r = e.target;
					(n = r.getAttribute("data-index")) && t.fire("select", {
						value: t.data()[n],
						index: n
					})
				})
			},
			focus: function() {
				var e = this;
				return e.getEl().firstChild.focus(), e
			},
			data: function(e) {
				var t = this;
				return "undefined" != typeof e ? (t._data = e, t.update(), t) : t._data
			},
			update: function() {
				this.innerHtml(this._getPathHtml())
			},
			postRender: function() {
				var e = this;
				e._super(), e.data(e.settings.data)
			},
			renderHtml: function() {
				var e = this;
				return '<div id="' + e._id + '" class="' + e.classes() + '">' + e._getPathHtml() + "</div>"
			},
			_getPathHtml: function() {
				var e = this,
					t = e._data || [],
					n, r, i = "",
					o = e.classPrefix;
				for (n = 0, r = t.length; r > n; n++) i += (n > 0 ? '<div class="' + o + 'divider" aria-hidden="true"> ' + e.settings.delimiter + " </div>" : "") + '<div role="button" class="' + o + "path-item" + (n == r - 1 ? " " + o + "last" : "") + '" data-index="' + n + '" tabindex="-1" id="' + e._id + "-" + n + '" aria-level="' + n + '">' + t[n].name + "</div>";
				return i || (i = '<div class="' + o + 'path-item">\xa0</div>'), i
			}
		})
	}), r(Pt, [Mt, ht], function(e, t) {
		return e.extend({
			postRender: function() {
				function e(e) {
					if (1 === e.nodeType) {
						if ("BR" == e.nodeName || e.getAttribute("data-mce-bogus")) return !0;
						if ("bookmark" === e.getAttribute("data-mce-type")) return !0
					}
					return !1
				}
				var n = this,
					r = t.activeEditor;
				return n.on("select", function(e) {
					r.focus(), r.selection.select(this.data()[e.index].element), r.nodeChanged()
				}), r.on("nodeChange", function(t) {
					for (var i = [], o = t.parents, a = o.length; a--;)
						if (1 == o[a].nodeType && !e(o[a])) {
							var s = r.fire("ResolveName", {
								name: o[a].nodeName.toLowerCase(),
								target: o[a]
							});
							if (s.isDefaultPrevented() || i.push({
								name: s.name,
								element: o[a]
							}), s.isPropagationStopped()) break
						}
					n.data(i)
				}), n._super()
			}
		})
	}), r(Ot, [J], function(e) {
		return e.extend({
			Defaults: {
				layout: "flex",
				align: "center",
				defaults: {
					flex: 1
				}
			},
			renderHtml: function() {
				var e = this,
					t = e._layout,
					n = e.classPrefix;
				return e.addClass("formitem"), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1">' + (e.settings.title ? '<div id="' + e._id + '-title" class="' + n + 'title">' + e.settings.title + "</div>" : "") + '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
			}
		})
	}), r(It, [J, Ot, u], function(e, t, n) {
		return e.extend({
			Defaults: {
				containerCls: "form",
				layout: "flex",
				direction: "column",
				align: "stretch",
				flex: 1,
				padding: 20,
				labelGap: 30,
				spacing: 10,
				callbacks: {
					submit: function() {
						this.submit()
					}
				}
			},
			preRender: function() {
				var e = this,
					r = e.items();
				e.settings.formItemDefaults || (e.settings.formItemDefaults = {
					layout: "flex",
					autoResize: "overflow",
					defaults: {
						flex: 1
					}
				}), r.each(function(r) {
					var i, o = r.settings.label;
					o && (i = new t(n.extend({
						items: {
							type: "label",
							id: r._id + "-l",
							text: o,
							flex: 0,
							forId: r._id,
							disabled: r.disabled()
						}
					}, e.settings.formItemDefaults)), i.type = "formitem", r.aria("labelledby", r._id + "-l"), "undefined" == typeof r.settings.flex && (r.settings.flex = 1), e.replace(r, i), i.add(r))
				})
			},
			recalcLabels: function() {
				var e = this,
					t = 0,
					n = [],
					r, i, o;
				if (e.settings.labelGapCalc !== !1)
					for (o = "children" == e.settings.labelGapCalc ? e.find("formitem") : e.items(), o.filter("formitem").each(function(e) {
						var r = e.items()[0],
							i = r.getEl().clientWidth;
						t = i > t ? i : t, n.push(r)
					}), i = e.settings.labelGap || 0, r = n.length; r--;) n[r].settings.minWidth = t + i
			},
			visible: function(e) {
				var t = this._super(e);
				return e === !0 && this._rendered && this.recalcLabels(), t
			},
			submit: function() {
				return this.fire("submit", {
					data: this.toJSON()
				})
			},
			postRender: function() {
				var e = this;
				e._super(), e.recalcLabels(), e.fromJSON(e.settings.data)
			}
		})
	}), r(Ft, [It], function(e) {
		return e.extend({
			Defaults: {
				containerCls: "fieldset",
				layout: "flex",
				direction: "column",
				align: "stretch",
				flex: 1,
				padding: "25 15 5 15",
				labelGap: 30,
				spacing: 10,
				border: 1
			},
			renderHtml: function() {
				var e = this,
					t = e._layout,
					n = e.classPrefix;
				return e.preRender(), t.preRender(e), '<fieldset id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1">' + (e.settings.title ? '<legend id="' + e._id + '-title" class="' + n + 'fieldset-title">' + e.settings.title + "</legend>" : "") + '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></fieldset>"
			}
		})
	}), r(zt, [Rt, u], function(e, t) {
		return e.extend({
			init: function(e) {
				var n = this,
					r = tinymce.activeEditor,
					i = r.settings,
					o, a, s;
				e.spellcheck = !1, s = i.file_picker_types || i.file_browser_callback_types, s && (s = t.makeMap(s, /[, ]/)), (!s || s[e.filetype]) && (a = i.file_picker_callback, !a || s && !s[e.filetype] ? (a = i.file_browser_callback, !a || s && !s[e.filetype] || (o = function() {
					a(n.getEl("inp").id, n.value(), e.filetype, window)
				})) : o = function() {
					var i = n.fire("beforecall").meta;
					i = t.extend({
						filetype: e.filetype
					}, i), a.call(r, function(e, t) {
						n.value(e).fire("change", {
							meta: t
						})
					}, n.value(), i)
				}), o && (e.icon = "browse", e.onaction = o), n._super(e)
			}
		})
	}), r(Wt, [_t], function(e) {
		return e.extend({
			recalc: function(e) {
				var t = e.layoutRect(),
					n = e.paddingBox();
				e.items().filter(":visible").each(function(e) {
					e.layoutRect({
						x: n.left,
						y: n.top,
						w: t.innerW - n.right - n.left,
						h: t.innerH - n.top - n.bottom
					}), e.recalc && e.recalc()
				})
			}
		})
	}), r(Vt, [_t], function(e) {
		return e.extend({
			recalc: function(e) {
				var t, n, r, i, o, a, s, l, c, u, d, f, p, h, m, g, v = [],
					y, b, C, x, w, _, E, N, k, S, T, R, A, B, D, L, H, M, P, O, I, F, z = Math.max,
					W = Math.min;
				for (r = e.items().filter(":visible"), i = e.layoutRect(), o = e._paddingBox, a = e.settings, f = e.isRtl() ? a.direction || "row-reversed" : a.direction, s = a.align, l = e.isRtl() ? a.pack || "end" : a.pack, c = a.spacing || 0, ("row-reversed" == f || "column-reverse" == f) && (r = r.set(r.toArray().reverse()), f = f.split("-")[0]), "column" == f ? (k = "y", E = "h", N = "minH", S = "maxH", R = "innerH", T = "top", A = "deltaH", B = "contentH", P = "left", H = "w", D = "x", L = "innerW", M = "minW", O = "right", I = "deltaW", F = "contentW") : (k = "x", E = "w", N = "minW", S = "maxW", R = "innerW", T = "left", A = "deltaW", B = "contentW", P = "top", H = "h", D = "y", L = "innerH", M = "minH", O = "bottom", I = "deltaH", F = "contentH"), d = i[R] - o[T] - o[T], _ = u = 0, t = 0, n = r.length; n > t; t++) p = r[t], h = p.layoutRect(), m = p.settings, g = m.flex, d -= n - 1 > t ? c : 0, g > 0 && (u += g, h[S] && v.push(p), h.flex = g), d -= h[N], y = o[P] + h[M] + o[O], y > _ && (_ = y);
				if (x = {}, x[N] = 0 > d ? i[N] - d + i[A] : i[R] - d + i[A], x[M] = _ + i[I], x[B] = i[R] - d, x[F] = _, x.minW = W(x.minW, i.maxW), x.minH = W(x.minH, i.maxH), x.minW = z(x.minW, i.startMinWidth), x.minH = z(x.minH, i.startMinHeight), !i.autoResize || x.minW == i.minW && x.minH == i.minH) {
					for (C = d / u, t = 0, n = v.length; n > t; t++) p = v[t], h = p.layoutRect(), b = h[S], y = h[N] + h.flex * C, y > b ? (d -= h[S] - h[N], u -= h.flex, h.flex = 0, h.maxFlexSize = b) : h.maxFlexSize = 0;
					for (C = d / u, w = o[T], x = {}, 0 === u && ("end" == l ? w = d + o[T] : "center" == l ? (w = Math.round(i[R] / 2 - (i[R] - d) / 2) + o[T], 0 > w && (w = o[T])) : "justify" == l && (w = o[T], c = Math.floor(d / (r.length - 1)))), x[D] = o[P], t = 0, n = r.length; n > t; t++) p = r[t], h = p.layoutRect(), y = h.maxFlexSize || h[N], "center" === s ? x[D] = Math.round(i[L] / 2 - h[H] / 2) : "stretch" === s ? (x[H] = z(h[M] || 0, i[L] - o[P] - o[O]), x[D] = o[P]) : "end" === s && (x[D] = i[L] - h[H] - o.top), h.flex > 0 && (y += h.flex * C), x[E] = y, x[k] = w, p.layoutRect(x), p.recalc && p.recalc(), w += y + c
				} else if (x.w = x.minW, x.h = x.minH, e.layoutRect(x), this.recalc(e), null === e._lastRect) {
					var V = e.parent();
					V && (V._lastRect = null, V.recalc())
				}
			}
		})
	}), r(Ut, [wt], function(e) {
		return e.extend({
			Defaults: {
				containerClass: "flow-layout",
				controlClass: "flow-layout-item",
				endClass: "break"
			},
			recalc: function(e) {
				e.items().filter(":visible").each(function(e) {
					e.recalc && e.recalc()
				})
			}
		})
	}), r($t, [K, Nt, rt, u, ht, d], function(e, t, n, r, i, o) {
		function a(e) {
			function t(t, n) {
				return function() {
					var r = this;
					e.on("nodeChange", function(i) {
						var o = e.formatter,
							a = null;
						s(i.parents, function(e) {
							return s(t, function(t) {
								return n ? o.matchNode(e, n, {
									value: t.value
								}) && (a = t.value) : o.matchNode(e, t.value) && (a = t.value), a ? !1 : void 0
							}), a ? !1 : void 0
						}), r.value(a)
					})
				}
			}

			function r(e) {
				e = e.replace(/;$/, "").split(";");
				for (var t = e.length; t--;) e[t] = e[t].split("=");
				return e
			}

			function i() {
				function t(e) {
					var n = [];
					if (e) return s(e, function(e) {
						var o = {
							text: e.title,
							icon: e.icon
						};
						if (e.items) o.menu = t(e.items);
						else {
							var a = e.format || "custom" + r++;
							e.format || (e.name = a, i.push(e)), o.format = a, o.cmd = e.cmd
						}
						n.push(o)
					}), n
				}

				function n() {
					var n;
					return n = t(e.settings.style_formats_merge ? e.settings.style_formats ? o.concat(e.settings.style_formats) : o : e.settings.style_formats || o)
				}
				var r = 0,
					i = [],
					o = [{
						title: "Headings",
						items: [{
							title: "Heading 1",
							format: "h1"
						}, {
							title: "Heading 2",
							format: "h2"
						}, {
							title: "Heading 3",
							format: "h3"
						}, {
							title: "Heading 4",
							format: "h4"
						}, {
							title: "Heading 5",
							format: "h5"
						}, {
							title: "Heading 6",
							format: "h6"
						}]
					}, {
						title: "Inline",
						items: [{
							title: "Bold",
							icon: "bold",
							format: "bold"
						}, {
							title: "Italic",
							icon: "italic",
							format: "italic"
						}, {
							title: "Underline",
							icon: "underline",
							format: "underline"
						}, {
							title: "Strikethrough",
							icon: "strikethrough",
							format: "strikethrough"
						}, {
							title: "Superscript",
							icon: "superscript",
							format: "superscript"
						}, {
							title: "Subscript",
							icon: "subscript",
							format: "subscript"
						}, {
							title: "Code",
							icon: "code",
							format: "code"
						}]
					}, {
						title: "Blocks",
						items: [{
							title: "Paragraph",
							format: "p"
						}, {
							title: "Blockquote",
							format: "blockquote"
						}, {
							title: "Div",
							format: "div"
						}, {
							title: "Pre",
							format: "pre"
						}]
					}, {
						title: "Alignment",
						items: [{
							title: "Left",
							icon: "alignleft",
							format: "alignleft"
						}, {
							title: "Center",
							icon: "aligncenter",
							format: "aligncenter"
						}, {
							title: "Right",
							icon: "alignright",
							format: "alignright"
						}, {
							title: "Justify",
							icon: "alignjustify",
							format: "alignjustify"
						}]
					}];
				return e.on("init", function() {
					s(i, function(t) {
						e.formatter.register(t.name, t)
					})
				}), {
					type: "menu",
					items: n(),
					onPostRender: function(t) {
						e.fire("renderFormatsMenu", {
							control: t.control
						})
					},
					itemDefaults: {
						preview: !0,
						textStyle: function() {
							return this.settings.format ? e.formatter.getCssText(this.settings.format) : void 0
						},
						onPostRender: function() {
							var t = this;
							t.parent().on("show", function() {
								var n, r;
								n = t.settings.format, n && (t.disabled(!e.formatter.canApply(n)), t.active(e.formatter.match(n))), r = t.settings.cmd, r && t.active(e.queryCommandState(r))
							})
						},
						onclick: function() {
							this.settings.format && l(this.settings.format), this.settings.cmd && e.execCommand(this.settings.cmd)
						}
					}
				}
			}

			function o(t) {
				return function() {
					function n() {
						return e.undoManager ? e.undoManager[t]() : !1
					}
					var r = this;
					t = "redo" == t ? "hasRedo" : "hasUndo", r.disabled(!n()), e.on("Undo Redo AddUndo TypingUndo ClearUndos", function() {
						r.disabled(!n())
					})
				}
			}

			function a() {
				var t = this;
				e.on("VisualAid", function(e) {
					t.active(e.hasVisual)
				}), t.active(e.hasVisual)
			}

			function l(t) {
				t.control && (t = t.control.value()), t && e.execCommand("mceToggleFormat", !1, t)
			}
			var c;
			c = i(), s({
				bold: "Bold",
				italic: "Italic",
				underline: "Underline",
				strikethrough: "Strikethrough",
				subscript: "Subscript",
				superscript: "Superscript"
			}, function(t, n) {
				e.addButton(n, {
					tooltip: t,
					onPostRender: function() {
						var t = this;
						e.formatter ? e.formatter.formatChanged(n, function(e) {
							t.active(e)
						}) : e.on("init", function() {
							e.formatter.formatChanged(n, function(e) {
								t.active(e)
							})
						})
					},
					onclick: function() {
						l(n)
					}
				})
			}), s({
				outdent: ["Decrease indent", "Outdent"],
				indent: ["Increase indent", "Indent"],
				cut: ["Cut", "Cut"],
				copy: ["Copy", "Copy"],
				paste: ["Paste", "Paste"],
				help: ["Help", "mceHelp"],
				selectall: ["Select all", "SelectAll"],
				removeformat: ["Clear formatting", "RemoveFormat"],
				visualaid: ["Visual aids", "mceToggleVisualAid"],
				newdocument: ["New document", "mceNewDocument"]
			}, function(t, n) {
				e.addButton(n, {
					tooltip: t[0],
					cmd: t[1]
				})
			}), s({
				blockquote: ["Blockquote", "mceBlockQuote"],
				numlist: ["Numbered list", "InsertOrderedList"],
				bullist: ["Bullet list", "InsertUnorderedList"],
				subscript: ["Subscript", "Subscript"],
				superscript: ["Superscript", "Superscript"],
				alignleft: ["Align left", "JustifyLeft"],
				aligncenter: ["Align center", "JustifyCenter"],
				alignright: ["Align right", "JustifyRight"],
				alignjustify: ["Justify", "JustifyFull"]
			}, function(t, n) {
				e.addButton(n, {
					tooltip: t[0],
					cmd: t[1],
					onPostRender: function() {
						var t = this;
						e.formatter ? e.formatter.formatChanged(n, function(e) {
							t.active(e)
						}) : e.on("init", function() {
							e.formatter.formatChanged(n, function(e) {
								t.active(e)
							})
						})
					}
				})
			}), e.addButton("undo", {
				tooltip: "Undo",
				onPostRender: o("undo"),
				cmd: "undo"
			}), e.addButton("redo", {
				tooltip: "Redo",
				onPostRender: o("redo"),
				cmd: "redo"
			}), e.addMenuItem("newdocument", {
				text: "New document",
				shortcut: "Ctrl+N",
				icon: "newdocument",
				cmd: "mceNewDocument"
			}), e.addMenuItem("undo", {
				text: "Undo",
				icon: "undo",
				shortcut: "Ctrl+Z",
				onPostRender: o("undo"),
				cmd: "undo"
			}), e.addMenuItem("redo", {
				text: "Redo",
				icon: "redo",
				shortcut: "Ctrl+Y",
				onPostRender: o("redo"),
				cmd: "redo"
			}), e.addMenuItem("visualaid", {
				text: "Visual aids",
				selectable: !0,
				onPostRender: a,
				cmd: "mceToggleVisualAid"
			}), s({
				cut: ["Cut", "Cut", "Ctrl+X"],
				copy: ["Copy", "Copy", "Ctrl+C"],
				paste: ["Paste", "Paste", "Ctrl+V"],
				selectall: ["Select all", "SelectAll", "Ctrl+A"],
				bold: ["Bold", "Bold", "Ctrl+B"],
				italic: ["Italic", "Italic", "Ctrl+I"],
				underline: ["Underline", "Underline"],
				strikethrough: ["Strikethrough", "Strikethrough"],
				subscript: ["Subscript", "Subscript"],
				superscript: ["Superscript", "Superscript"],
				removeformat: ["Clear formatting", "RemoveFormat"]
			}, function(t, n) {
				e.addMenuItem(n, {
					text: t[0],
					icon: n,
					shortcut: t[2],
					cmd: t[1]
				})
			}), e.on("mousedown", function() {
				n.hideAll()
			}), e.addButton("styleselect", {
				type: "menubutton",
				text: "Formats",
				menu: c
			}), e.addButton("formatselect", function() {
				var n = [],
					i = r(e.settings.block_formats || "Paragraph=p;Address=address;Pre=pre;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6");
				return s(i, function(t) {
					n.push({
						text: t[0],
						value: t[1],
						textStyle: function() {
							return e.formatter.getCssText(t[1])
						}
					})
				}), {
					type: "listbox",
					text: i[0][0],
					values: n,
					fixedWidth: !0,
					onselect: l,
					onPostRender: t(n)
				}
			}), e.addButton("fontselect", function() {
				var n = "Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats",
					i = [],
					o = r(e.settings.font_formats || n);
				return s(o, function(e) {
					i.push({
						text: {
							raw: e[0]
						},
						value: e[1],
						textStyle: -1 == e[1].indexOf("dings") ? "font-family:" + e[1] : ""
					})
				}), {
					type: "listbox",
					text: "Font Family",
					tooltip: "Font Family",
					values: i,
					fixedWidth: !0,
					onPostRender: t(i, "fontname"),
					onselect: function(t) {
						t.control.settings.value && e.execCommand("FontName", !1, t.control.settings.value)
					}
				}
			}), e.addButton("fontsizeselect", function() {
				var n = [],
					r = "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
					i = e.settings.fontsize_formats || r;
				return s(i.split(" "), function(e) {
					var t = e,
						r = e,
						i = e.split("=");
					i.length > 1 && (t = i[0], r = i[1]), n.push({
						text: t,
						value: r
					})
				}), {
					type: "listbox",
					text: "Font Sizes",
					tooltip: "Font Sizes",
					values: n,
					fixedWidth: !0,
					onPostRender: t(n, "fontsize"),
					onclick: function(t) {
						t.control.settings.value && e.execCommand("FontSize", !1, t.control.settings.value)
					}
				}
			}), e.addMenuItem("formats", {
				text: "Formats",
				menu: c
			})
		}
		var s = r.each;
		i.on("AddEditor", function(t) {
			t.editor.rtl && (e.rtl = !0), a(t.editor)
		}), e.translate = function(e) {
			return i.translate(e)
		}, t.tooltips = !o.iOS
	}), r(qt, [_t], function(e) {
		return e.extend({
			recalc: function(e) {
				var t = e.settings,
					n, r, i, o, a, s, l, c, u, d, f, p, h, m, g, v, y, b, C, x, w, _, E = [],
					N = [],
					k, S, T, R, A, B;
				t = e.settings, i = e.items().filter(":visible"), o = e.layoutRect(), r = t.columns || Math.ceil(Math.sqrt(i.length)), n = Math.ceil(i.length / r), y = t.spacingH || t.spacing || 0, b = t.spacingV || t.spacing || 0, C = t.alignH || t.align, x = t.alignV || t.align, g = e._paddingBox, A = "reverseRows" in t ? t.reverseRows : e.isRtl(), C && "string" == typeof C && (C = [C]), x && "string" == typeof x && (x = [x]);
				for (d = 0; r > d; d++) E.push(0);
				for (f = 0; n > f; f++) N.push(0);
				for (f = 0; n > f; f++)
					for (d = 0; r > d && (u = i[f * r + d], u); d++) c = u.layoutRect(), k = c.minW, S = c.minH, E[d] = k > E[d] ? k : E[d], N[f] = S > N[f] ? S : N[f];
				for (T = o.innerW - g.left - g.right, w = 0, d = 0; r > d; d++) w += E[d] + (d > 0 ? y : 0), T -= (d > 0 ? y : 0) + E[d];
				for (R = o.innerH - g.top - g.bottom, _ = 0, f = 0; n > f; f++) _ += N[f] + (f > 0 ? b : 0), R -= (f > 0 ? b : 0) + N[f];
				if (w += g.left + g.right, _ += g.top + g.bottom, l = {}, l.minW = w + (o.w - o.innerW), l.minH = _ + (o.h - o.innerH), l.contentW = l.minW - o.deltaW, l.contentH = l.minH - o.deltaH, l.minW = Math.min(l.minW, o.maxW), l.minH = Math.min(l.minH, o.maxH), l.minW = Math.max(l.minW, o.startMinWidth), l.minH = Math.max(l.minH, o.startMinHeight), !o.autoResize || l.minW == o.minW && l.minH == o.minH) {
					o.autoResize && (l = e.layoutRect(l), l.contentW = l.minW - o.deltaW, l.contentH = l.minH - o.deltaH);
					var D;
					D = "start" == t.packV ? 0 : R > 0 ? Math.floor(R / n) : 0;
					var L = 0,
						H = t.flexWidths;
					if (H)
						for (d = 0; d < H.length; d++) L += H[d];
					else L = r;
					var M = T / L;
					for (d = 0; r > d; d++) E[d] += H ? H[d] * M : M;
					for (h = g.top, f = 0; n > f; f++) {
						for (p = g.left, s = N[f] + D, d = 0; r > d && (B = A ? f * r + r - 1 - d : f * r + d, u = i[B], u); d++) m = u.settings, c = u.layoutRect(), a = Math.max(E[d], c.startMinWidth), c.x = p, c.y = h, v = m.alignH || (C ? C[d] || C[0] : null), "center" == v ? c.x = p + a / 2 - c.w / 2 : "right" == v ? c.x = p + a - c.w : "stretch" == v && (c.w = a), v = m.alignV || (x ? x[d] || x[0] : null), "center" == v ? c.y = h + s / 2 - c.h / 2 : "bottom" == v ? c.y = h + s - c.h : "stretch" == v && (c.h = s), u.layoutRect(c), p += a + y, u.recalc && u.recalc();
						h += s + b
					}
				} else if (l.w = l.minW, l.h = l.minH, e.layoutRect(l), this.recalc(e), null === e._lastRect) {
					var P = e.parent();
					P && (P._lastRect = null, P.recalc())
				}
			}
		})
	}), r(jt, [Nt], function(e) {
		return e.extend({
			renderHtml: function() {
				var e = this;
				return e.addClass("iframe"), e.canFocus = !1, '<iframe id="' + e._id + '" class="' + e.classes() + '" tabindex="-1" src="' + (e.settings.url || "javascript:''") + '" frameborder="0"></iframe>'
			},
			src: function(e) {
				this.getEl().src = e
			},
			html: function(e, t) {
				var n = this,
					r = this.getEl().contentWindow.document.body;
				return r ? (r.innerHTML = e, t && t()) : setTimeout(function() {
					n.html(e)
				}, 0), this
			}
		})
	}), r(Yt, [Nt, Y], function(e, t) {
		return e.extend({
			init: function(e) {
				var t = this;
				t._super(e), t.addClass("widget"), t.addClass("label"), t.canFocus = !1, e.multiline && t.addClass("autoscroll"), e.strong && t.addClass("strong")
			},
			initLayoutRect: function() {
				var e = this,
					n = e._super();
				if (e.settings.multiline) {
					var r = t.getSize(e.getEl());
					r.width > n.maxW && (n.minW = n.maxW, e.addClass("multiline")), e.getEl().style.width = n.minW + "px", n.startMinH = n.h = n.minH = Math.min(n.maxH, t.getSize(e.getEl()).height)
				}
				return n
			},
			repaint: function() {
				var e = this;
				return e.settings.multiline || (e.getEl().style.lineHeight = e.layoutRect().h + "px"), e._super()
			},
			text: function(e) {
				var t = this;
				return t._rendered && e && this.innerHtml(t.encode(e)), t._super(e)
			},
			renderHtml: function() {
				var e = this,
					t = e.settings.forId;
				return '<label id="' + e._id + '" class="' + e.classes() + '"' + (t ? ' for="' + t + '"' : "") + ">" + e.encode(e._text) + "</label>"
			}
		})
	}), r(Kt, [J], function(e) {
		return e.extend({
			Defaults: {
				role: "toolbar",
				layout: "flow"
			},
			init: function(e) {
				var t = this;
				t._super(e), t.addClass("toolbar")
			},
			postRender: function() {
				var e = this;
				return e.items().addClass("toolbar-item"), e._super()
			}
		})
	}), r(Gt, [Kt], function(e) {
		return e.extend({
			Defaults: {
				role: "menubar",
				containerCls: "menubar",
				ariaRoot: !0,
				defaults: {
					type: "menubutton"
				}
			}
		})
	}), r(Xt, [kt, G, Gt], function(e, t, n) {
		function r(e, t) {
			for (; e;) {
				if (t === e) return !0;
				e = e.parentNode
			}
			return !1
		}
		var i = e.extend({
			init: function(e) {
				var t = this;
				t._renderOpen = !0, t._super(e), t.addClass("menubtn"), e.fixedWidth && t.addClass("fixed-width"), t.aria("haspopup", !0), t.hasPopup = !0
			},
			showMenu: function() {
				var e = this,
					n = e.settings,
					r;
				return e.menu && e.menu.visible() ? e.hideMenu() : (e.menu || (r = n.menu || [], r.length ? r = {
					type: "menu",
					items: r
				} : r.type = r.type || "menu", e.menu = t.create(r).parent(e).renderTo(), e.fire("createmenu"), e.menu.reflow(), e.menu.on("cancel", function(t) {
					t.control.parent() === e.menu && (t.stopPropagation(), e.focus(), e.hideMenu())
				}), e.menu.on("select", function() {
					e.focus()
				}), e.menu.on("show hide", function(t) {
					t.control == e.menu && e.activeMenu("show" == t.type), e.aria("expanded", "show" == t.type)
				}).fire("show")), e.menu.show(), e.menu.layoutRect({
					w: e.layoutRect().w
				}), void e.menu.moveRel(e.getEl(), e.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"]))
			},
			hideMenu: function() {
				var e = this;
				e.menu && (e.menu.items().each(function(e) {
					e.hideMenu && e.hideMenu()
				}), e.menu.hide())
			},
			activeMenu: function(e) {
				this.toggleClass("active", e)
			},
			renderHtml: function() {
				var e = this,
					t = e._id,
					r = e.classPrefix,
					i = e.settings.icon,
					o;
				return o = e.settings.image, o ? (i = "none", "string" != typeof o && (o = window.getSelection ? o[0] : o[1]), o = " style=\"background-image: url('" + o + "')\"") : o = "", i = e.settings.icon ? r + "ico " + r + "i-" + i : "", e.aria("role", e.parent() instanceof n ? "menuitem" : "button"), '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1" aria-labelledby="' + t + '"><button id="' + t + '-open" role="presentation" type="button" tabindex="-1">' + (i ? '<i class="' + i + '"' + o + "></i>" : "") + "<span>" + (e._text ? (i ? "\xa0" : "") + e.encode(e._text) : "") + '</span> <i class="' + r + 'caret"></i></button></div>'
			},
			postRender: function() {
				var e = this;
				return e.on("click", function(t) {
					t.control === e && r(t.target, e.getEl()) && (e.showMenu(), t.aria && e.menu.items()[0].focus())
				}), e.on("mouseenter", function(t) {
					var n = t.control,
						r = e.parent(),
						o;
					n && r && n instanceof i && n.parent() == r && (r.items().filter("MenuButton").each(function(e) {
						e.hideMenu && e != n && (e.menu && e.menu.visible() && (o = !0), e.hideMenu())
					}), o && (n.focus(), n.showMenu()))
				}), e._super()
			},
			text: function(e) {
				var t = this,
					n, r;
				if (t._rendered)
					for (r = t.getEl("open").getElementsByTagName("span"), n = 0; n < r.length; n++) r[n].innerHTML = (t.settings.icon && e ? "\xa0" : "") + t.encode(e);
				return this._super(e)
			},
			remove: function() {
				this._super(), this.menu && this.menu.remove()
			}
		});
		return i
	}), r(Jt, [Xt], function(e) {
		return e.extend({
			init: function(e) {
				function t(r) {
					for (var a = 0; a < r.length; a++) {
						if (i = r[a].selected || e.value === r[a].value) {
							o = o || r[a].text, n._value = r[a].value;
							break
						}
						r[a].menu && t(r[a].menu)
					}
				}
				var n = this,
					r, i, o, a;
				n._values = r = e.values, r && ("undefined" != typeof e.value && t(r), !i && r.length > 0 && (o = r[0].text, n._value = r[0].value), e.menu = r), e.text = e.text || o || r[0].text, n._super(e), n.addClass("listbox"), n.on("select", function(t) {
					var r = t.control;
					a && (t.lastControl = a), e.multiple ? r.active(!r.active()) : n.value(t.control.settings.value), a = r
				})
			},
			value: function(e) {
				function t(e, n) {
					e.items().each(function(e) {
						i = e.value() === n, i && (o = o || e.text()), e.active(i), e.menu && t(e.menu, n)
					})
				}

				function n(t) {
					for (var r = 0; r < t.length; r++) i = t[r].value == e, i && (o = o || t[r].text), t[r].active = i, t[r].menu && n(t[r].menu)
				}
				var r = this,
					i, o, a;
				return "undefined" != typeof e && (r.menu ? t(r.menu, e) : (a = r.settings.menu, n(a)), r.text(o || this.settings.text)), r._super(e)
			}
		})
	}), r(Qt, [Nt, G, d], function(e, t, n) {
		return e.extend({
			Defaults: {
				border: 0,
				role: "menuitem"
			},
			init: function(e) {
				var t = this;
				t.hasPopup = !0, t._super(e), e = t.settings, t.addClass("menu-item"), e.menu && t.addClass("menu-item-expand"), e.preview && t.addClass("menu-item-preview"), ("-" === t._text || "|" === t._text) && (t.addClass("menu-item-sep"), t.aria("role", "separator"), t._text = "-"), e.selectable && (t.aria("role", "menuitemcheckbox"), t.addClass("menu-item-checkbox"), e.icon = "selected"), e.preview || e.selectable || t.addClass("menu-item-normal"), t.on("mousedown", function(e) {
					e.preventDefault()
				}), e.menu && !e.ariaHideMenu && t.aria("haspopup", !0)
			},
			hasMenus: function() {
				return !!this.settings.menu
			},
			showMenu: function() {
				var e = this,
					n = e.settings,
					r, i = e.parent();
				if (i.items().each(function(t) {
					t !== e && t.hideMenu()
				}), n.menu) {
					r = e.menu, r ? r.show() : (r = n.menu, r.length ? r = {
						type: "menu",
						items: r
					} : r.type = r.type || "menu", i.settings.itemDefaults && (r.itemDefaults = i.settings.itemDefaults), r = e.menu = t.create(r).parent(e).renderTo(), r.reflow(), r.on("cancel", function(t) {
						t.stopPropagation(), e.focus(), r.hide()
					}), r.on("show hide", function(e) {
						e.control.items().each(function(e) {
							e.active(e.settings.selected)
						})
					}).fire("show"), r.on("hide", function(t) {
						t.control === r && e.removeClass("selected")
					}), r.submenu = !0), r._parentMenu = i, r.addClass("menu-sub");
					var o = r.testMoveRel(e.getEl(), e.isRtl() ? ["tl-tr", "bl-br", "tr-tl", "br-bl"] : ["tr-tl", "br-bl", "tl-tr", "bl-br"]);
					r.moveRel(e.getEl(), o), r.rel = o, o = "menu-sub-" + o, r.removeClass(r._lastRel), r.addClass(o), r._lastRel = o, e.addClass("selected"), e.aria("expanded", !0)
				}
			},
			hideMenu: function() {
				var e = this;
				return e.menu && (e.menu.items().each(function(e) {
					e.hideMenu && e.hideMenu()
				}), e.menu.hide(), e.aria("expanded", !1)), e
			},
			renderHtml: function() {
				var e = this,
					t = e._id,
					r = e.settings,
					i = e.classPrefix,
					o = e.encode(e._text),
					a = e.settings.icon,
					s = "",
					l = r.shortcut;
				return a && e.parent().addClass("menu-has-icons"), r.image && (a = "none", s = " style=\"background-image: url('" + r.image + "')\""), l && n.mac && (l = l.replace(/ctrl\+alt\+/i, "&#x2325;&#x2318;"), l = l.replace(/ctrl\+/i, "&#x2318;"), l = l.replace(/alt\+/i, "&#x2325;"), l = l.replace(/shift\+/i, "&#x21E7;")), a = i + "ico " + i + "i-" + (e.settings.icon || "none"), '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1">' + ("-" !== o ? '<i class="' + a + '"' + s + "></i>\xa0" : "") + ("-" !== o ? '<span id="' + t + '-text" class="' + i + 'text">' + o + "</span>" : "") + (l ? '<div id="' + t + '-shortcut" class="' + i + 'menu-shortcut">' + l + "</div>" : "") + (r.menu ? '<div class="' + i + 'caret"></div>' : "") + "</div>"
			},
			postRender: function() {
				var e = this,
					t = e.settings,
					n = t.textStyle;
				if ("function" == typeof n && (n = n.call(this)), n) {
					var r = e.getEl("text");
					r && r.setAttribute("style", n)
				}
				return e.on("mouseenter click", function(n) {
					n.control === e && (t.menu || "click" !== n.type ? (e.showMenu(), n.aria && e.menu.focus(!0)) : (e.fire("select"), e.parent().hideAll()))
				}), e._super(), e
			},
			active: function(e) {
				return "undefined" != typeof e && this.aria("checked", e), this._super(e)
			},
			remove: function() {
				this._super(), this.menu && this.menu.remove()
			}
		})
	}), r(Zt, [rt, Qt, u], function(e, t, n) {
		var r = e.extend({
			Defaults: {
				defaultType: "menuitem",
				border: 1,
				layout: "stack",
				role: "application",
				bodyRole: "menu",
				ariaRoot: !0
			},
			init: function(e) {
				var t = this;
				if (e.autohide = !0, e.constrainToViewport = !0, e.itemDefaults)
					for (var r = e.items, i = r.length; i--;) r[i] = n.extend({}, e.itemDefaults, r[i]);
				t._super(e), t.addClass("menu")
			},
			repaint: function() {
				return this.toggleClass("menu-align", !0), this._super(), this.getEl().style.height = "", this.getEl("body").style.height = "", this
			},
			cancel: function() {
				var e = this;
				e.hideAll(), e.fire("select")
			},
			hideAll: function() {
				var e = this;
				return this.find("menuitem").exec("hideMenu"), e._super()
			},
			preRender: function() {
				var e = this;
				return e.items().each(function(t) {
					var n = t.settings;
					return n.icon || n.selectable ? (e._hasIcons = !0, !1) : void 0
				}), e._super()
			}
		});
		return r
	}), r(en, [Tt], function(e) {
		return e.extend({
			Defaults: {
				classes: "radio",
				role: "radio"
			}
		})
	}), r(tn, [Nt, Q], function(e, t) {
		return e.extend({
			renderHtml: function() {
				var e = this,
					t = e.classPrefix;
				return e.addClass("resizehandle"), "both" == e.settings.direction && e.addClass("resizehandle-both"), e.canFocus = !1, '<div id="' + e._id + '" class="' + e.classes() + '"><i class="' + t + "ico " + t + 'i-resize"></i></div>'
			},
			postRender: function() {
				var e = this;
				e._super(), e.resizeDragHelper = new t(this._id, {
					start: function() {
						e.fire("ResizeStart")
					},
					drag: function(t) {
						"both" != e.settings.direction && (t.deltaX = 0), e.fire("Resize", t)
					},
					stop: function() {
						e.fire("ResizeEnd")
					}
				})
			},
			remove: function() {
				return this.resizeDragHelper && this.resizeDragHelper.destroy(), this._super()
			}
		})
	}), r(nn, [Nt], function(e) {
		return e.extend({
			renderHtml: function() {
				var e = this;
				return e.addClass("spacer"), e.canFocus = !1, '<div id="' + e._id + '" class="' + e.classes() + '"></div>'
			}
		})
	}), r(rn, [Xt, Y], function(e, t) {
		return e.extend({
			Defaults: {
				classes: "widget btn splitbtn",
				role: "button"
			},
			repaint: function() {
				var e = this,
					n = e.getEl(),
					r = e.layoutRect(),
					i, o;
				return e._super(), i = n.firstChild, o = n.lastChild, t.css(i, {
					width: r.w - t.getSize(o).width,
					height: r.h - 2
				}), t.css(o, {
					height: r.h - 2
				}), e
			},
			activeMenu: function(e) {
				var n = this;
				t.toggleClass(n.getEl().lastChild, n.classPrefix + "active", e)
			},
			renderHtml: function() {
				var e = this,
					t = e._id,
					n = e.classPrefix,
					r, i = e.settings.icon;
				return r = e.settings.image, r ? (i = "none", "string" != typeof r && (r = window.getSelection ? r[0] : r[1]), r = " style=\"background-image: url('" + r + "')\"") : r = "", i = e.settings.icon ? n + "ico " + n + "i-" + i : "", '<div id="' + t + '" class="' + e.classes() + '" role="button" tabindex="-1"><button type="button" hidefocus="1" tabindex="-1">' + (i ? '<i class="' + i + '"' + r + "></i>" : "") + (e._text ? (i ? " " : "") + e._text : "") + '</button><button type="button" class="' + n + 'open" hidefocus="1" tabindex="-1">' + (e._menuBtnText ? (i ? "\xa0" : "") + e._menuBtnText : "") + ' <i class="' + n + 'caret"></i></button></div>'
			},
			postRender: function() {
				var e = this,
					t = e.settings.onclick;
				return e.on("click", function(e) {
					var n = e.target;
					if (e.control == this)
						for (; n;) {
							if (e.aria && "down" != e.aria.key || "BUTTON" == n.nodeName && -1 == n.className.indexOf("open")) return e.stopImmediatePropagation(), void t.call(this, e);
							n = n.parentNode
						}
				}), delete e.settings.onclick, e._super()
			}
		})
	}), r(on, [Ut], function(e) {
		return e.extend({
			Defaults: {
				containerClass: "stack-layout",
				controlClass: "stack-layout-item",
				endClass: "break"
			}
		})
	}), r(an, [et, Y], function(e, t) {
		return e.extend({
			Defaults: {
				layout: "absolute",
				defaults: {
					type: "panel"
				}
			},
			activateTab: function(e) {
				var n;
				this.activeTabId && (n = this.getEl(this.activeTabId), t.removeClass(n, this.classPrefix + "active"), n.setAttribute("aria-selected", "false")), this.activeTabId = "t" + e, n = this.getEl("t" + e), n.setAttribute("aria-selected", "true"), t.addClass(n, this.classPrefix + "active"), this.items()[e].show().fire("showtab"), this.reflow(), this.items().each(function(t, n) {
					e != n && t.hide()
				})
			},
			renderHtml: function() {
				var e = this,
					t = e._layout,
					n = "",
					r = e.classPrefix;
				return e.preRender(), t.preRender(e), e.items().each(function(t, i) {
					var o = e._id + "-t" + i;
					t.aria("role", "tabpanel"), t.aria("labelledby", o), n += '<div id="' + o + '" class="' + r + 'tab" unselectable="on" role="tab" aria-controls="' + t._id + '" aria-selected="false" tabIndex="-1">' + e.encode(t.settings.title) + "</div>"
				}), '<div id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1"><div id="' + e._id + '-head" class="' + r + 'tabs" role="tablist">' + n + '</div><div id="' + e._id + '-body" class="' + e.classes("body") + '">' + t.renderHtml(e) + "</div></div>"
			},
			postRender: function() {
				var e = this;
				e._super(), e.settings.activeTab = e.settings.activeTab || 0, e.activateTab(e.settings.activeTab), this.on("click", function(t) {
					var n = t.target.parentNode;
					if (t.target.parentNode.id == e._id + "-head")
						for (var r = n.childNodes.length; r--;) n.childNodes[r] == t.target && e.activateTab(r)
				})
			},
			initLayoutRect: function() {
				var e = this,
					n, r, i;
				r = t.getSize(e.getEl("head")).width, r = 0 > r ? 0 : r, i = 0, e.items().each(function(e) {
					r = Math.max(r, e.layoutRect().minW), i = Math.max(i, e.layoutRect().minH)
				}), e.items().each(function(e) {
					e.settings.x = 0, e.settings.y = 0, e.settings.w = r, e.settings.h = i, e.layoutRect({
						x: 0,
						y: 0,
						w: r,
						h: i
					})
				});
				var o = t.getSize(e.getEl("head")).height;
				return e.settings.minWidth = r, e.settings.minHeight = i + o, n = e._super(), n.deltaH += o, n.innerH = n.h - n.deltaH, n
			}
		})
	}), r(sn, [Nt, Y], function(e, t) {
		return e.extend({
			init: function(e) {
				var t = this;
				t._super(e), t._value = e.value || "", t.addClass("textbox"), e.multiline ? t.addClass("multiline") : t.on("keydown", function(e) {
					13 == e.keyCode && t.parents().reverse().each(function(t) {
						return e.preventDefault(), t.hasEventListeners("submit") && t.toJSON ? (t.fire("submit", {
							data: t.toJSON()
						}), !1) : void 0
					})
				})
			},
			disabled: function(e) {
				var t = this;
				return t._rendered && "undefined" != typeof e && (t.getEl().disabled = e), t._super(e)
			},
			value: function(e) {
				var t = this;
				return "undefined" != typeof e ? (t._value = e, t._rendered && (t.getEl().value = e), t) : t._rendered ? t.getEl().value : t._value
			},
			repaint: function() {
				var e = this,
					t, n, r, i = 0,
					o = 0,
					a;
				t = e.getEl().style, n = e._layoutRect, a = e._lastRepaintRect || {};
				var s = document;
				return !e.settings.multiline && s.all && (!s.documentMode || s.documentMode <= 8) && (t.lineHeight = n.h - o + "px"), r = e._borderBox, i = r.left + r.right + 8, o = r.top + r.bottom + (e.settings.multiline ? 8 : 0), n.x !== a.x && (t.left = n.x + "px", a.x = n.x), n.y !== a.y && (t.top = n.y + "px", a.y = n.y), n.w !== a.w && (t.width = n.w - i + "px", a.w = n.w), n.h !== a.h && (t.height = n.h - o + "px", a.h = n.h), e._lastRepaintRect = a, e.fire("repaint", {}, !1), e
			},
			renderHtml: function() {
				var e = this,
					t = e._id,
					n = e.settings,
					r = e.encode(e._value, !1),
					i = "";
				return "spellcheck" in n && (i += ' spellcheck="' + n.spellcheck + '"'), n.maxLength && (i += ' maxlength="' + n.maxLength + '"'), n.size && (i += ' size="' + n.size + '"'), n.subtype && (i += ' type="' + n.subtype + '"'), e.disabled() && (i += ' disabled="disabled"'), n.multiline ? '<textarea id="' + t + '" class="' + e.classes() + '" ' + (n.rows ? ' rows="' + n.rows + '"' : "") + ' hidefocus="1"' + i + ">" + r + "</textarea>" : '<input id="' + t + '" class="' + e.classes() + '" value="' + r + '" hidefocus="1"' + i + " />"
			},
			postRender: function() {
				var e = this;
				return t.on(e.getEl(), "change", function(t) {
					e.fire("change", t)
				}), e._super()
			},
			remove: function() {
				t.off(this.getEl()), this._super()
			}
		})
	}), r(ln, [Y, K], function(e, t) {
		return function(n, r) {
			var i = this,
				o, a = t.classPrefix;
			i.show = function(t) {
				return i.hide(), o = !0, window.setTimeout(function() {
					o && n.appendChild(e.createFragment('<div class="' + a + "throbber" + (r ? " " + a + "throbber-inline" : "") + '"></div>'))
				}, t || 0), i
			}, i.hide = function() {
				var e = n.lastChild;
				return e && -1 != e.className.indexOf("throbber") && e.parentNode.removeChild(e), o = !1, i
			}
		}
	}), a([l, c, u, d, f, p, h, m, g, y, b, C, _, E, N, k, S, T, R, A, B, D, L, H, M, O, I, F, z, W, V, U, $, q, j, Y, K, G, X, J, Q, Z, et, tt, nt, rt, it, ot, at, st, lt, ct, ut, dt, ft, pt, ht, mt, gt, vt, yt, bt, Ct, xt, wt, _t, Et, Nt, kt, St, Tt, Rt, At, Bt, Dt, Lt, Ht, Mt, Pt, Ot, It, Ft, zt, Wt, Vt, Ut, $t, qt, jt, Yt, Kt, Gt, Xt, Jt, Qt, Zt, en, tn, nn, rn, on, an, sn, ln])
}(this);
tinymce.PluginManager.add("advlist", function(a) {
	function b(a, b) {
		var c = [];
		return tinymce.each(b.split(/[ ,]/), function(a) {
			c.push({
				text: a.replace(/\-/g, " ").replace(/\b\w/g, function(a) {
					return a.toUpperCase()
				}),
				data: "default" == a ? "" : a
			})
		}), c
	}

	function c(b, c) {
		var d, e = a.dom,
			f = a.selection;
		d = e.getParent(f.getNode(), "ol,ul"), d && d.nodeName == b && c !== !1 || a.execCommand("UL" == b ? "InsertUnorderedList" : "InsertOrderedList"), c = c === !1 ? g[b] : c, g[b] = c, d = e.getParent(f.getNode(), "ol,ul"), d && (e.setStyle(d, "listStyleType", c ? c : null), d.removeAttribute("data-mce-style")), a.focus()
	}

	function d(b) {
		var c = a.dom.getStyle(a.dom.getParent(a.selection.getNode(), "ol,ul"), "listStyleType") || "";
		b.control.items().each(function(a) {
			a.active(a.settings.data === c)
		})
	}
	var e, f, g = {};
	e = b("OL", a.getParam("advlist_number_styles", "default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman")), f = b("UL", a.getParam("advlist_bullet_styles", "default,circle,disc,square")), a.addButton("numlist", {
		type: "splitbutton",
		tooltip: "Numbered list",
		menu: e,
		onshow: d,
		onselect: function(a) {
			c("OL", a.control.settings.data)
		},
		onclick: function() {
			c("OL", !1)
		}
	}), a.addButton("bullist", {
		type: "splitbutton",
		tooltip: "Bullet list",
		menu: f,
		onshow: d,
		onselect: function(a) {
			c("UL", a.control.settings.data)
		},
		onclick: function() {
			c("UL", !1)
		}
	})
});
tinymce.PluginManager.add("anchor", function(a) {
	function b() {
		var b = a.selection.getNode(),
			c = "";
		"A" == b.tagName && (c = b.name || b.id || ""), a.windowManager.open({
			title: "Anchor",
			body: {
				type: "textbox",
				name: "name",
				size: 40,
				label: "Name",
				value: c
			},
			onsubmit: function(b) {
				a.execCommand("mceInsertContent", !1, a.dom.createHTML("a", {
					id: b.data.name
				}))
			}
		})
	}
	a.addButton("anchor", {
		icon: "anchor",
		tooltip: "Anchor",
		onclick: b,
		stateSelector: "a:not([href])"
	}), a.addMenuItem("anchor", {
		icon: "anchor",
		text: "Anchor",
		context: "insert",
		onclick: b
	})
});
tinymce.PluginManager.add("autolink", function(a) {
	function b(a) {
		e(a, -1, "(", !0)
	}

	function c(a) {
		e(a, 0, "", !0)
	}

	function d(a) {
		e(a, -1, "", !1)
	}

	function e(a, b, c) {
		function d(a, b) {
			if (0 > b && (b = 0), 3 == a.nodeType) {
				var c = a.data.length;
				b > c && (b = c)
			}
			return b
		}

		function e(a, b) {
			g.setStart(a, d(a, b))
		}

		function f(a, b) {
			g.setEnd(a, d(a, b))
		}
		var g, h, i, j, k, l, m, n, o, p;
		if (g = a.selection.getRng(!0).cloneRange(), g.startOffset < 5) {
			if (n = g.endContainer.previousSibling, !n) {
				if (!g.endContainer.firstChild || !g.endContainer.firstChild.nextSibling) return;
				n = g.endContainer.firstChild.nextSibling
			}
			if (o = n.length, e(n, o), f(n, o), g.endOffset < 5) return;
			h = g.endOffset, j = n
		} else {
			if (j = g.endContainer, 3 != j.nodeType && j.firstChild) {
				for (; 3 != j.nodeType && j.firstChild;) j = j.firstChild;
				3 == j.nodeType && (e(j, 0), f(j, j.nodeValue.length))
			}
			h = 1 == g.endOffset ? 2 : g.endOffset - 1 - b
		}
		i = h;
		do e(j, h >= 2 ? h - 2 : 0), f(j, h >= 1 ? h - 1 : 0), h -= 1, p = g.toString(); while (" " != p && "" !== p && 160 != p.charCodeAt(0) && h - 2 >= 0 && p != c);
		g.toString() == c || 160 == g.toString().charCodeAt(0) ? (e(j, h), f(j, i), h += 1) : 0 === g.startOffset ? (e(j, 0), f(j, i)) : (e(j, h), f(j, i)), l = g.toString(), "." == l.charAt(l.length - 1) && f(j, i - 1), l = g.toString(), m = l.match(/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@)(.+)$/i), m && ("www." == m[1] ? m[1] = "http://www." : /@$/.test(m[1]) && !/^mailto:/.test(m[1]) && (m[1] = "mailto:" + m[1]), k = a.selection.getBookmark(), a.selection.setRng(g), a.execCommand("createlink", !1, m[1] + m[2]), a.selection.moveToBookmark(k), a.nodeChanged())
	}
	var f;
	return a.on("keydown", function(b) {
		return 13 == b.keyCode ? d(a) : void 0
	}), tinymce.Env.ie ? void a.on("focus", function() {
		if (!f) {
			f = !0;
			try {
				a.execCommand("AutoUrlDetect", !1, !0)
			} catch (b) {}
		}
	}) : (a.on("keypress", function(c) {
		return 41 == c.keyCode ? b(a) : void 0
	}), void a.on("keyup", function(b) {
		return 32 == b.keyCode ? c(a) : void 0
	}))
});
tinymce.PluginManager.add("autoresize", function(a) {
	function b() {
		return a.plugins.fullscreen && a.plugins.fullscreen.isFullscreen()
	}

	function c(d) {
		var g, h, i, j, k, l, m, n, o, p, q, r, s = tinymce.DOM;
		if (h = a.getDoc()) {
			if (i = h.body, j = h.documentElement, k = e.autoresize_min_height, !i || d && "setcontent" === d.type && d.initial || b()) return void(i && j && (i.style.overflowY = "auto", j.style.overflowY = "auto"));
			m = a.dom.getStyle(i, "margin-top", !0), n = a.dom.getStyle(i, "margin-bottom", !0), o = a.dom.getStyle(i, "padding-top", !0), p = a.dom.getStyle(i, "padding-bottom", !0), q = a.dom.getStyle(i, "border-top-width", !0), r = a.dom.getStyle(i, "border-bottom-width", !0), l = i.offsetHeight + parseInt(m, 10) + parseInt(n, 10) + parseInt(o, 10) + parseInt(p, 10) + parseInt(q, 10) + parseInt(r, 10), (isNaN(l) || 0 >= l) && (l = tinymce.Env.ie ? i.scrollHeight : tinymce.Env.webkit && 0 === i.clientHeight ? 0 : i.offsetHeight), l > e.autoresize_min_height && (k = l), e.autoresize_max_height && l > e.autoresize_max_height ? (k = e.autoresize_max_height, i.style.overflowY = "auto", j.style.overflowY = "auto") : (i.style.overflowY = "hidden", j.style.overflowY = "hidden", i.scrollTop = 0), k !== f && (g = k - f, s.setStyle(a.iframeElement, "height", k + "px"), f = k, tinymce.isWebKit && 0 > g && c(d))
		}
	}

	function d(a, b, e) {
		setTimeout(function() {
			c({}), a-- ? d(a, b, e) : e && e()
		}, b)
	}
	var e = a.settings,
		f = 0;
	a.settings.inline || (e.autoresize_min_height = parseInt(a.getParam("autoresize_min_height", a.getElement().offsetHeight), 10), e.autoresize_max_height = parseInt(a.getParam("autoresize_max_height", 0), 10), a.on("init", function() {
		var b = a.getParam("autoresize_overflow_padding", 1);
		a.dom.setStyles(a.getBody(), {
			paddingBottom: a.getParam("autoresize_bottom_margin", 50),
			paddingLeft: b,
			paddingRight: b
		})
	}), a.on("nodechange setcontent keyup FullscreenStateChanged", c), a.getParam("autoresize_on_init", !0) && a.on("init", function() {
		d(20, 100, function() {
			d(5, 1e3)
		})
	}), a.addCommand("mceAutoResize", c))
});
tinymce._beforeUnloadHandler = function() {
	var a;
	return tinymce.each(tinymce.editors, function(b) {
		b.plugins.autosave && b.plugins.autosave.storeDraft(), !a && b.isDirty() && b.getParam("autosave_ask_before_unload", !0) && (a = b.translate("You have unsaved changes are you sure you want to navigate away?"))
	}), a
}, tinymce.PluginManager.add("autosave", function(a) {
	function b(a, b) {
		var c = {
			s: 1e3,
			m: 6e4
		};
		return a = /^(\d+)([ms]?)$/.exec("" + (a || b)), (a[2] ? c[a[2]] : 1) * parseInt(a, 10)
	}

	function c() {
		var a = parseInt(n.getItem(k + "time"), 10) || 0;
		return (new Date).getTime() - a > m.autosave_retention ? (d(!1), !1) : !0
	}

	function d(b) {
		n.removeItem(k + "draft"), n.removeItem(k + "time"), b !== !1 && a.fire("RemoveDraft")
	}

	function e() {
		!j() && a.isDirty() && (n.setItem(k + "draft", a.getContent({
			format: "raw",
			no_events: !0
		})), n.setItem(k + "time", (new Date).getTime()), a.fire("StoreDraft"))
	}

	function f() {
		c() && (a.setContent(n.getItem(k + "draft"), {
			format: "raw"
		}), a.fire("RestoreDraft"))
	}

	function g() {
		l || (setInterval(function() {
			a.removed || e()
		}, m.autosave_interval), l = !0)
	}

	function h() {
		var b = this;
		b.disabled(!c()), a.on("StoreDraft RestoreDraft RemoveDraft", function() {
			b.disabled(!c())
		}), g()
	}

	function i() {
		a.undoManager.beforeChange(), f(), d(), a.undoManager.add()
	}

	function j(b) {
		var c = a.settings.forced_root_block;
		return b = tinymce.trim("undefined" == typeof b ? a.getBody().innerHTML : b), "" === b || new RegExp("^<" + c + "[^>]*>((\xa0|&nbsp;|[ 	]|<br[^>]*>)+?|)</" + c + ">|<br>$", "i").test(b)
	}
	var k, l, m = a.settings,
		n = tinymce.util.LocalStorage;
	k = m.autosave_prefix || "tinymce-autosave-{path}{query}-{id}-", k = k.replace(/\{path\}/g, document.location.pathname), k = k.replace(/\{query\}/g, document.location.search), k = k.replace(/\{id\}/g, a.id), m.autosave_interval = b(m.autosave_interval, "30s"), m.autosave_retention = b(m.autosave_retention, "20m"), a.addButton("restoredraft", {
		title: "Restore last draft",
		onclick: i,
		onPostRender: h
	}), a.addMenuItem("restoredraft", {
		text: "Restore last draft",
		onclick: i,
		onPostRender: h,
		context: "file"
	}), a.settings.autosave_restore_when_empty !== !1 && (a.on("init", function() {
		c() && j() && f()
	}), a.on("saveContent", function() {
		d()
	})), window.onbeforeunload = tinymce._beforeUnloadHandler, this.hasDraft = c, this.storeDraft = e, this.restoreDraft = f, this.removeDraft = d, this.isEmpty = j
});
! function() {
	tinymce.create("tinymce.plugins.BBCodePlugin", {
		init: function(a) {
			var b = this,
				c = a.getParam("bbcode_dialect", "punbb").toLowerCase();
			a.on("beforeSetContent", function(a) {
				a.content = b["_" + c + "_bbcode2html"](a.content)
			}), a.on("postProcess", function(a) {
				a.set && (a.content = b["_" + c + "_bbcode2html"](a.content)), a.get && (a.content = b["_" + c + "_html2bbcode"](a.content))
			})
		},
		getInfo: function() {
			return {
				longname: "BBCode Plugin",
				author: "Moxiecode Systems AB",
				authorurl: "http://www.tinymce.com",
				infourl: "http://www.tinymce.com/wiki.php/Plugin:bbcode"
			}
		},
		_punbb_html2bbcode: function(a) {
			function b(b, c) {
				a = a.replace(b, c)
			}
			return a = tinymce.trim(a), b(/<a.*?href=\"(.*?)\".*?>(.*?)<\/a>/gi, "[url=$1]$2[/url]"), b(/<font.*?color=\"(.*?)\".*?class=\"codeStyle\".*?>(.*?)<\/font>/gi, "[code][color=$1]$2[/color][/code]"), b(/<font.*?color=\"(.*?)\".*?class=\"quoteStyle\".*?>(.*?)<\/font>/gi, "[quote][color=$1]$2[/color][/quote]"), b(/<font.*?class=\"codeStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi, "[code][color=$1]$2[/color][/code]"), b(/<font.*?class=\"quoteStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi, "[quote][color=$1]$2[/color][/quote]"), b(/<span style=\"color: ?(.*?);\">(.*?)<\/span>/gi, "[color=$1]$2[/color]"), b(/<font.*?color=\"(.*?)\".*?>(.*?)<\/font>/gi, "[color=$1]$2[/color]"), b(/<span style=\"font-size:(.*?);\">(.*?)<\/span>/gi, "[size=$1]$2[/size]"), b(/<font>(.*?)<\/font>/gi, "$1"), b(/<img.*?src=\"(.*?)\".*?\/>/gi, "[img]$1[/img]"), b(/<span class=\"codeStyle\">(.*?)<\/span>/gi, "[code]$1[/code]"), b(/<span class=\"quoteStyle\">(.*?)<\/span>/gi, "[quote]$1[/quote]"), b(/<strong class=\"codeStyle\">(.*?)<\/strong>/gi, "[code][b]$1[/b][/code]"), b(/<strong class=\"quoteStyle\">(.*?)<\/strong>/gi, "[quote][b]$1[/b][/quote]"), b(/<em class=\"codeStyle\">(.*?)<\/em>/gi, "[code][i]$1[/i][/code]"), b(/<em class=\"quoteStyle\">(.*?)<\/em>/gi, "[quote][i]$1[/i][/quote]"), b(/<u class=\"codeStyle\">(.*?)<\/u>/gi, "[code][u]$1[/u][/code]"), b(/<u class=\"quoteStyle\">(.*?)<\/u>/gi, "[quote][u]$1[/u][/quote]"), b(/<\/(strong|b)>/gi, "[/b]"), b(/<(strong|b)>/gi, "[b]"), b(/<\/(em|i)>/gi, "[/i]"), b(/<(em|i)>/gi, "[i]"), b(/<\/u>/gi, "[/u]"), b(/<span style=\"text-decoration: ?underline;\">(.*?)<\/span>/gi, "[u]$1[/u]"), b(/<u>/gi, "[u]"), b(/<blockquote[^>]*>/gi, "[quote]"), b(/<\/blockquote>/gi, "[/quote]"), b(/<br \/>/gi, "\n"), b(/<br\/>/gi, "\n"), b(/<br>/gi, "\n"), b(/<p>/gi, ""), b(/<\/p>/gi, "\n"), b(/&nbsp;|\u00a0/gi, " "), b(/&quot;/gi, '"'), b(/&lt;/gi, "<"), b(/&gt;/gi, ">"), b(/&amp;/gi, "&"), a
		},
		_punbb_bbcode2html: function(a) {
			function b(b, c) {
				a = a.replace(b, c)
			}
			return a = tinymce.trim(a), b(/\n/gi, "<br />"), b(/\[b\]/gi, "<strong>"), b(/\[\/b\]/gi, "</strong>"), b(/\[i\]/gi, "<em>"), b(/\[\/i\]/gi, "</em>"), b(/\[u\]/gi, "<u>"), b(/\[\/u\]/gi, "</u>"), b(/\[url=([^\]]+)\](.*?)\[\/url\]/gi, '<a href="$1">$2</a>'), b(/\[url\](.*?)\[\/url\]/gi, '<a href="$1">$1</a>'), b(/\[img\](.*?)\[\/img\]/gi, '<img src="$1" />'), b(/\[color=(.*?)\](.*?)\[\/color\]/gi, '<font color="$1">$2</font>'), b(/\[code\](.*?)\[\/code\]/gi, '<span class="codeStyle">$1</span>&nbsp;'), b(/\[quote.*?\](.*?)\[\/quote\]/gi, '<span class="quoteStyle">$1</span>&nbsp;'), a
		}
	}), tinymce.PluginManager.add("bbcode", tinymce.plugins.BBCodePlugin)
}();
tinymce.PluginManager.add("charmap", function(a) {
	function b() {
		function b(a) {
			for (; a;) {
				if ("TD" == a.nodeName) return a;
				a = a.parentNode
			}
		}
		var d, e, f, g;
		d = '<table role="presentation" cellspacing="0" class="mce-charmap"><tbody>';
		var h = 25;
		for (f = 0; 10 > f; f++) {
			for (d += "<tr>", e = 0; h > e; e++) {
				var i = c[f * h + e];
				d += '<td title="' + i[1] + '"><div tabindex="-1" title="' + i[1] + '" role="button">' + (i ? String.fromCharCode(parseInt(i[0], 10)) : "&nbsp;") + "</div></td>"
			}
			d += "</tr>"
		}
		d += "</tbody></table>";
		var j = {
			type: "container",
			html: d,
			onclick: function(b) {
				var c = b.target;
				"TD" == c.tagName && (c = c.firstChild), "DIV" == c.tagName && (a.execCommand("mceInsertContent", !1, c.firstChild.data), b.ctrlKey || g.close())
			},
			onmouseover: function(a) {
				var c = b(a.target);
				c && g.find("#preview").text(c.firstChild.firstChild.data)
			}
		};
		g = a.windowManager.open({
			title: "Special character",
			spacing: 10,
			padding: 10,
			items: [j, {
				type: "label",
				name: "preview",
				text: " ",
				style: "font-size: 40px; text-align: center",
				border: 1,
				minWidth: 100,
				minHeight: 80
			}],
			buttons: [{
				text: "Close",
				onclick: function() {
					g.close()
				}
			}]
		})
	}
	var c = [
		["160", "no-break space"],
		["38", "ampersand"],
		["34", "quotation mark"],
		["162", "cent sign"],
		["8364", "euro sign"],
		["163", "pound sign"],
		["165", "yen sign"],
		["169", "copyright sign"],
		["174", "registered sign"],
		["8482", "trade mark sign"],
		["8240", "per mille sign"],
		["181", "micro sign"],
		["183", "middle dot"],
		["8226", "bullet"],
		["8230", "three dot leader"],
		["8242", "minutes / feet"],
		["8243", "seconds / inches"],
		["167", "section sign"],
		["182", "paragraph sign"],
		["223", "sharp s / ess-zed"],
		["8249", "single left-pointing angle quotation mark"],
		["8250", "single right-pointing angle quotation mark"],
		["171", "left pointing guillemet"],
		["187", "right pointing guillemet"],
		["8216", "left single quotation mark"],
		["8217", "right single quotation mark"],
		["8220", "left double quotation mark"],
		["8221", "right double quotation mark"],
		["8218", "single low-9 quotation mark"],
		["8222", "double low-9 quotation mark"],
		["60", "less-than sign"],
		["62", "greater-than sign"],
		["8804", "less-than or equal to"],
		["8805", "greater-than or equal to"],
		["8211", "en dash"],
		["8212", "em dash"],
		["175", "macron"],
		["8254", "overline"],
		["164", "currency sign"],
		["166", "broken bar"],
		["168", "diaeresis"],
		["161", "inverted exclamation mark"],
		["191", "turned question mark"],
		["710", "circumflex accent"],
		["732", "small tilde"],
		["176", "degree sign"],
		["8722", "minus sign"],
		["177", "plus-minus sign"],
		["247", "division sign"],
		["8260", "fraction slash"],
		["215", "multiplication sign"],
		["185", "superscript one"],
		["178", "superscript two"],
		["179", "superscript three"],
		["188", "fraction one quarter"],
		["189", "fraction one half"],
		["190", "fraction three quarters"],
		["402", "function / florin"],
		["8747", "integral"],
		["8721", "n-ary sumation"],
		["8734", "infinity"],
		["8730", "square root"],
		["8764", "similar to"],
		["8773", "approximately equal to"],
		["8776", "almost equal to"],
		["8800", "not equal to"],
		["8801", "identical to"],
		["8712", "element of"],
		["8713", "not an element of"],
		["8715", "contains as member"],
		["8719", "n-ary product"],
		["8743", "logical and"],
		["8744", "logical or"],
		["172", "not sign"],
		["8745", "intersection"],
		["8746", "union"],
		["8706", "partial differential"],
		["8704", "for all"],
		["8707", "there exists"],
		["8709", "diameter"],
		["8711", "backward difference"],
		["8727", "asterisk operator"],
		["8733", "proportional to"],
		["8736", "angle"],
		["180", "acute accent"],
		["184", "cedilla"],
		["170", "feminine ordinal indicator"],
		["186", "masculine ordinal indicator"],
		["8224", "dagger"],
		["8225", "double dagger"],
		["192", "A - grave"],
		["193", "A - acute"],
		["194", "A - circumflex"],
		["195", "A - tilde"],
		["196", "A - diaeresis"],
		["197", "A - ring above"],
		["198", "ligature AE"],
		["199", "C - cedilla"],
		["200", "E - grave"],
		["201", "E - acute"],
		["202", "E - circumflex"],
		["203", "E - diaeresis"],
		["204", "I - grave"],
		["205", "I - acute"],
		["206", "I - circumflex"],
		["207", "I - diaeresis"],
		["208", "ETH"],
		["209", "N - tilde"],
		["210", "O - grave"],
		["211", "O - acute"],
		["212", "O - circumflex"],
		["213", "O - tilde"],
		["214", "O - diaeresis"],
		["216", "O - slash"],
		["338", "ligature OE"],
		["352", "S - caron"],
		["217", "U - grave"],
		["218", "U - acute"],
		["219", "U - circumflex"],
		["220", "U - diaeresis"],
		["221", "Y - acute"],
		["376", "Y - diaeresis"],
		["222", "THORN"],
		["224", "a - grave"],
		["225", "a - acute"],
		["226", "a - circumflex"],
		["227", "a - tilde"],
		["228", "a - diaeresis"],
		["229", "a - ring above"],
		["230", "ligature ae"],
		["231", "c - cedilla"],
		["232", "e - grave"],
		["233", "e - acute"],
		["234", "e - circumflex"],
		["235", "e - diaeresis"],
		["236", "i - grave"],
		["237", "i - acute"],
		["238", "i - circumflex"],
		["239", "i - diaeresis"],
		["240", "eth"],
		["241", "n - tilde"],
		["242", "o - grave"],
		["243", "o - acute"],
		["244", "o - circumflex"],
		["245", "o - tilde"],
		["246", "o - diaeresis"],
		["248", "o slash"],
		["339", "ligature oe"],
		["353", "s - caron"],
		["249", "u - grave"],
		["250", "u - acute"],
		["251", "u - circumflex"],
		["252", "u - diaeresis"],
		["253", "y - acute"],
		["254", "thorn"],
		["255", "y - diaeresis"],
		["913", "Alpha"],
		["914", "Beta"],
		["915", "Gamma"],
		["916", "Delta"],
		["917", "Epsilon"],
		["918", "Zeta"],
		["919", "Eta"],
		["920", "Theta"],
		["921", "Iota"],
		["922", "Kappa"],
		["923", "Lambda"],
		["924", "Mu"],
		["925", "Nu"],
		["926", "Xi"],
		["927", "Omicron"],
		["928", "Pi"],
		["929", "Rho"],
		["931", "Sigma"],
		["932", "Tau"],
		["933", "Upsilon"],
		["934", "Phi"],
		["935", "Chi"],
		["936", "Psi"],
		["937", "Omega"],
		["945", "alpha"],
		["946", "beta"],
		["947", "gamma"],
		["948", "delta"],
		["949", "epsilon"],
		["950", "zeta"],
		["951", "eta"],
		["952", "theta"],
		["953", "iota"],
		["954", "kappa"],
		["955", "lambda"],
		["956", "mu"],
		["957", "nu"],
		["958", "xi"],
		["959", "omicron"],
		["960", "pi"],
		["961", "rho"],
		["962", "final sigma"],
		["963", "sigma"],
		["964", "tau"],
		["965", "upsilon"],
		["966", "phi"],
		["967", "chi"],
		["968", "psi"],
		["969", "omega"],
		["8501", "alef symbol"],
		["982", "pi symbol"],
		["8476", "real part symbol"],
		["978", "upsilon - hook symbol"],
		["8472", "Weierstrass p"],
		["8465", "imaginary part"],
		["8592", "leftwards arrow"],
		["8593", "upwards arrow"],
		["8594", "rightwards arrow"],
		["8595", "downwards arrow"],
		["8596", "left right arrow"],
		["8629", "carriage return"],
		["8656", "leftwards double arrow"],
		["8657", "upwards double arrow"],
		["8658", "rightwards double arrow"],
		["8659", "downwards double arrow"],
		["8660", "left right double arrow"],
		["8756", "therefore"],
		["8834", "subset of"],
		["8835", "superset of"],
		["8836", "not a subset of"],
		["8838", "subset of or equal to"],
		["8839", "superset of or equal to"],
		["8853", "circled plus"],
		["8855", "circled times"],
		["8869", "perpendicular"],
		["8901", "dot operator"],
		["8968", "left ceiling"],
		["8969", "right ceiling"],
		["8970", "left floor"],
		["8971", "right floor"],
		["9001", "left-pointing angle bracket"],
		["9002", "right-pointing angle bracket"],
		["9674", "lozenge"],
		["9824", "black spade suit"],
		["9827", "black club suit"],
		["9829", "black heart suit"],
		["9830", "black diamond suit"],
		["8194", "en space"],
		["8195", "em space"],
		["8201", "thin space"],
		["8204", "zero width non-joiner"],
		["8205", "zero width joiner"],
		["8206", "left-to-right mark"],
		["8207", "right-to-left mark"],
		["173", "soft hyphen"]
	];
	a.addButton("charmap", {
		icon: "charmap",
		tooltip: "Special character",
		onclick: b
	}), a.addMenuItem("charmap", {
		icon: "charmap",
		text: "Special character",
		onclick: b,
		context: "insert"
	})
});
tinymce.PluginManager.add("code", function(a) {
	function b() {
		var b = a.windowManager.open({
			title: "Source code",
			body: {
				type: "textbox",
				name: "code",
				multiline: !0,
				minWidth: a.getParam("code_dialog_width", 600),
				minHeight: a.getParam("code_dialog_height", Math.min(tinymce.DOM.getViewPort().h - 200, 500)),
				spellcheck: !1,
				style: "direction: ltr; text-align: left"
			},
			onSubmit: function(b) {
				a.focus(), a.undoManager.transact(function() {
					a.setContent(b.data.code)
				}), a.selection.setCursorLocation(), a.nodeChanged()
			}
		});
		b.find("#code").value(a.getContent({
			source_view: !0
		}))
	}
	a.addCommand("mceCodeEditor", b), a.addButton("code", {
		icon: "code",
		tooltip: "Source code",
		onclick: b
	}), a.addMenuItem("code", {
		icon: "code",
		text: "Source code",
		context: "tools",
		onclick: b
	})
});
tinymce.PluginManager.add("colorpicker", function(a) {
	function b(b, c) {
		function d(a) {
			var b = new tinymce.util.Color(a),
				c = b.toRgb();
			f.fromJSON({
				r: c.r,
				g: c.g,
				b: c.b,
				hex: b.toHex().substr(1)
			}), e(b.toHex())
		}

		function e(a) {
			f.find("#preview")[0].getEl().style.background = a
		}
		var f = a.windowManager.open({
			title: "Color",
			items: {
				type: "container",
				layout: "flex",
				direction: "row",
				align: "stretch",
				padding: 5,
				spacing: 10,
				items: [{
					type: "colorpicker",
					value: c,
					onchange: function() {
						var a = this.rgb();
						f && (f.find("#r").value(a.r), f.find("#g").value(a.g), f.find("#b").value(a.b), f.find("#hex").value(this.value().substr(1)), e(this.value()))
					}
				}, {
					type: "form",
					padding: 0,
					labelGap: 5,
					defaults: {
						type: "textbox",
						size: 7,
						value: "0",
						flex: 1,
						spellcheck: !1,
						onchange: function() {
							var a, b, c = f.find("colorpicker")[0];
							return a = this.name(), b = this.value(), "hex" == a ? (b = "#" + b, d(b), void c.value(b)) : (b = {
								r: f.find("#r").value(),
								g: f.find("#g").value(),
								b: f.find("#b").value()
							}, c.value(b), void d(b))
						}
					},
					items: [{
						name: "r",
						label: "R",
						autofocus: 1
					}, {
						name: "g",
						label: "G"
					}, {
						name: "b",
						label: "B"
					}, {
						name: "hex",
						label: "#",
						value: "000000"
					}, {
						name: "preview",
						type: "container",
						border: 1
					}]
				}]
			},
			onSubmit: function() {
				b("#" + this.toJSON().hex)
			}
		});
		d(c)
	}
	a.settings.color_picker_callback || (a.settings.color_picker_callback = b)
});
tinymce.PluginManager.add("contextmenu", function(a) {
	var b, c = a.settings.contextmenu_never_use_native;
	a.on("contextmenu", function(d) {
		var e, f = a.getDoc();
		if (!d.ctrlKey || c) {
			if (d.preventDefault(), tinymce.Env.mac && tinymce.Env.webkit && 2 == d.button && f.caretRangeFromPoint && a.selection.setRng(f.caretRangeFromPoint(d.x, d.y)), e = a.settings.contextmenu || "link image inserttable | cell row column deletetable", b) b.show();
			else {
				var g = [];
				tinymce.each(e.split(/[ ,]/), function(b) {
					var c = a.menuItems[b];
					"|" == b && (c = {
						text: b
					}), c && (c.shortcut = "", g.push(c))
				});
				for (var h = 0; h < g.length; h++) "|" == g[h].text && (0 === h || h == g.length - 1) && g.splice(h, 1);
				b = new tinymce.ui.Menu({
					items: g,
					context: "contextmenu"
				}).addClass("contextmenu").renderTo(), a.on("remove", function() {
					b.remove(), b = null
				})
			}
			var i = {
				x: d.pageX,
				y: d.pageY
			};
			a.inline || (i = tinymce.DOM.getPos(a.getContentAreaContainer()), i.x += d.clientX, i.y += d.clientY), b.moveTo(i.x, i.y)
		}
	})
});
tinymce.PluginManager.add("directionality", function(a) {
	function b(b) {
		var c, d = a.dom,
			e = a.selection.getSelectedBlocks();
		e.length && (c = d.getAttrib(e[0], "dir"), tinymce.each(e, function(a) {
			d.getParent(a.parentNode, "*[dir='" + b + "']", d.getRoot()) || (c != b ? d.setAttrib(a, "dir", b) : d.setAttrib(a, "dir", null))
		}), a.nodeChanged())
	}

	function c(a) {
		var b = [];
		return tinymce.each("h1 h2 h3 h4 h5 h6 div p".split(" "), function(c) {
			b.push(c + "[dir=" + a + "]")
		}), b.join(",")
	}
	a.addCommand("mceDirectionLTR", function() {
		b("ltr")
	}), a.addCommand("mceDirectionRTL", function() {
		b("rtl")
	}), a.addButton("ltr", {
		title: "Left to right",
		cmd: "mceDirectionLTR",
		stateSelector: c("ltr")
	}), a.addButton("rtl", {
		title: "Right to left",
		cmd: "mceDirectionRTL",
		stateSelector: c("rtl")
	})
});
tinymce.PluginManager.add("emoticons", function(a, b) {
	function c() {
		var a;
		return a = '<table role="list" class="mce-grid">', tinymce.each(d, function(c) {
			a += "<tr>", tinymce.each(c, function(c) {
				var d = b + "/img/smiley-" + c + ".gif";
				a += '<td><a href="#" data-mce-url="' + d + '" data-mce-alt="' + c + '" tabindex="-1" role="option" aria-label="' + c + '"><img src="' + d + '" style="width: 18px; height: 18px" role="presentation" /></a></td>'
			}), a += "</tr>"
		}), a += "</table>"
	}
	var d = [
		["cool", "cry", "embarassed", "foot-in-mouth"],
		["frown", "innocent", "kiss", "laughing"],
		["money-mouth", "sealed", "smile", "surprised"],
		["tongue-out", "undecided", "wink", "yell"]
	];
	a.addButton("emoticons", {
		type: "panelbutton",
		panel: {
			role: "application",
			autohide: !0,
			html: c,
			onclick: function(b) {
				var c = a.dom.getParent(b.target, "a");
				c && (a.insertContent('<img src="' + c.getAttribute("data-mce-url") + '" alt="' + c.getAttribute("data-mce-alt") + '" />'), this.hide())
			}
		},
		tooltip: "Emoticons"
	})
});
tinymce.PluginManager.add("fullpage", function(a) {
	function b() {
		var b = c();
		a.windowManager.open({
			title: "Document properties",
			data: b,
			defaults: {
				type: "textbox",
				size: 40
			},
			body: [{
				name: "title",
				label: "Title"
			}, {
				name: "keywords",
				label: "Keywords"
			}, {
				name: "description",
				label: "Description"
			}, {
				name: "robots",
				label: "Robots"
			}, {
				name: "author",
				label: "Author"
			}, {
				name: "docencoding",
				label: "Encoding"
			}],
			onSubmit: function(a) {
				d(tinymce.extend(b, a.data))
			}
		})
	}

	function c() {
		function b(a, b) {
			var c = a.attr(b);
			return c || ""
		}
		var c, d, f = e(),
			g = {};
		return g.fontface = a.getParam("fullpage_default_fontface", ""), g.fontsize = a.getParam("fullpage_default_fontsize", ""), c = f.firstChild, 7 == c.type && (g.xml_pi = !0, d = /encoding="([^"]+)"/.exec(c.value), d && (g.docencoding = d[1])), c = f.getAll("#doctype")[0], c && (g.doctype = "<!DOCTYPE" + c.value + ">"), c = f.getAll("title")[0], c && c.firstChild && (g.title = c.firstChild.value), k(f.getAll("meta"), function(a) {
			var b, c = a.attr("name"),
				d = a.attr("http-equiv");
			c ? g[c.toLowerCase()] = a.attr("content") : "Content-Type" == d && (b = /charset\s*=\s*(.*)\s*/gi.exec(a.attr("content")), b && (g.docencoding = b[1]))
		}), c = f.getAll("html")[0], c && (g.langcode = b(c, "lang") || b(c, "xml:lang")), g.stylesheets = [], tinymce.each(f.getAll("link"), function(a) {
			"stylesheet" == a.attr("rel") && g.stylesheets.push(a.attr("href"))
		}), c = f.getAll("body")[0], c && (g.langdir = b(c, "dir"), g.style = b(c, "style"), g.visited_color = b(c, "vlink"), g.link_color = b(c, "link"), g.active_color = b(c, "alink")), g
	}

	function d(b) {
		function c(a, b, c) {
			a.attr(b, c ? c : void 0)
		}

		function d(a) {
			g.firstChild ? g.insert(a, g.firstChild) : g.append(a)
		}
		var f, g, h, j, m, n = a.dom;
		f = e(), g = f.getAll("head")[0], g || (j = f.getAll("html")[0], g = new l("head", 1), j.firstChild ? j.insert(g, j.firstChild, !0) : j.append(g)), j = f.firstChild, b.xml_pi ? (m = 'version="1.0"', b.docencoding && (m += ' encoding="' + b.docencoding + '"'), 7 != j.type && (j = new l("xml", 7), f.insert(j, f.firstChild, !0)), j.value = m) : j && 7 == j.type && j.remove(), j = f.getAll("#doctype")[0], b.doctype ? (j || (j = new l("#doctype", 10), b.xml_pi ? f.insert(j, f.firstChild) : d(j)), j.value = b.doctype.substring(9, b.doctype.length - 1)) : j && j.remove(), j = null, k(f.getAll("meta"), function(a) {
			"Content-Type" == a.attr("http-equiv") && (j = a)
		}), b.docencoding ? (j || (j = new l("meta", 1), j.attr("http-equiv", "Content-Type"), j.shortEnded = !0, d(j)), j.attr("content", "text/html; charset=" + b.docencoding)) : j && j.remove(), j = f.getAll("title")[0], b.title ? (j ? j.empty() : (j = new l("title", 1), d(j)), j.append(new l("#text", 3)).value = b.title) : j && j.remove(), k("keywords,description,author,copyright,robots".split(","), function(a) {
			var c, e, g = f.getAll("meta"),
				h = b[a];
			for (c = 0; c < g.length; c++)
				if (e = g[c], e.attr("name") == a) return void(h ? e.attr("content", h) : e.remove());
			h && (j = new l("meta", 1), j.attr("name", a), j.attr("content", h), j.shortEnded = !0, d(j))
		});
		var o = {};
		tinymce.each(f.getAll("link"), function(a) {
			"stylesheet" == a.attr("rel") && (o[a.attr("href")] = a)
		}), tinymce.each(b.stylesheets, function(a) {
			o[a] || (j = new l("link", 1), j.attr({
				rel: "stylesheet",
				text: "text/css",
				href: a
			}), j.shortEnded = !0, d(j)), delete o[a]
		}), tinymce.each(o, function(a) {
			a.remove()
		}), j = f.getAll("body")[0], j && (c(j, "dir", b.langdir), c(j, "style", b.style), c(j, "vlink", b.visited_color), c(j, "link", b.link_color), c(j, "alink", b.active_color), n.setAttribs(a.getBody(), {
			style: b.style,
			dir: b.dir,
			vLink: b.visited_color,
			link: b.link_color,
			aLink: b.active_color
		})), j = f.getAll("html")[0], j && (c(j, "lang", b.langcode), c(j, "xml:lang", b.langcode)), g.firstChild || g.remove(), h = new tinymce.html.Serializer({
			validate: !1,
			indent: !0,
			apply_source_formatting: !0,
			indent_before: "head,html,body,meta,title,script,link,style",
			indent_after: "head,html,body,meta,title,script,link,style"
		}).serialize(f), i = h.substring(0, h.indexOf("</body>"))
	}

	function e() {
		return new tinymce.html.DomParser({
			validate: !1,
			root_name: "#document"
		}).parse(i)
	}

	function f(b) {
		function c(a) {
			return a.replace(/<\/?[A-Z]+/g, function(a) {
				return a.toLowerCase()
			})
		}
		var d, f, h, l, m = b.content,
			n = "",
			o = a.dom;
		if (!b.selection && !("raw" == b.format && i || b.source_view && a.getParam("fullpage_hide_in_source_view"))) {
			0 !== m.length || b.source_view || (m = tinymce.trim(i) + "\n" + tinymce.trim(m) + "\n" + tinymce.trim(j)), m = m.replace(/<(\/?)BODY/gi, "<$1body"), d = m.indexOf("<body"), -1 != d ? (d = m.indexOf(">", d), i = c(m.substring(0, d + 1)), f = m.indexOf("</body", d), -1 == f && (f = m.length), b.content = m.substring(d + 1, f), j = c(m.substring(f))) : (i = g(), j = "\n</body>\n</html>"), h = e(), k(h.getAll("style"), function(a) {
				a.firstChild && (n += a.firstChild.value)
			}), l = h.getAll("body")[0], l && o.setAttribs(a.getBody(), {
				style: l.attr("style") || "",
				dir: l.attr("dir") || "",
				vLink: l.attr("vlink") || "",
				link: l.attr("link") || "",
				aLink: l.attr("alink") || ""
			}), o.remove("fullpage_styles");
			var p = a.getDoc().getElementsByTagName("head")[0];
			n && (o.add(p, "style", {
				id: "fullpage_styles"
			}, n), l = o.get("fullpage_styles"), l.styleSheet && (l.styleSheet.cssText = n));
			var q = {};
			tinymce.each(p.getElementsByTagName("link"), function(a) {
				"stylesheet" == a.rel && a.getAttribute("data-mce-fullpage") && (q[a.href] = a)
			}), tinymce.each(h.getAll("link"), function(a) {
				var b = a.attr("href");
				q[b] || "stylesheet" != a.attr("rel") || o.add(p, "link", {
					rel: "stylesheet",
					text: "text/css",
					href: b,
					"data-mce-fullpage": "1"
				}), delete q[b]
			}), tinymce.each(q, function(a) {
				a.parentNode.removeChild(a)
			})
		}
	}

	function g() {
		var b, c = "",
			d = "";
		return a.getParam("fullpage_default_xml_pi") && (c += '<?xml version="1.0" encoding="' + a.getParam("fullpage_default_encoding", "ISO-8859-1") + '" ?>\n'), c += a.getParam("fullpage_default_doctype", "<!DOCTYPE html>"), c += "\n<html>\n<head>\n", (b = a.getParam("fullpage_default_title")) && (c += "<title>" + b + "</title>\n"), (b = a.getParam("fullpage_default_encoding")) && (c += '<meta http-equiv="Content-Type" content="text/html; charset=' + b + '" />\n'), (b = a.getParam("fullpage_default_font_family")) && (d += "font-family: " + b + ";"), (b = a.getParam("fullpage_default_font_size")) && (d += "font-size: " + b + ";"), (b = a.getParam("fullpage_default_text_color")) && (d += "color: " + b + ";"), c += "</head>\n<body" + (d ? ' style="' + d + '"' : "") + ">\n"
	}

	function h(b) {
		b.selection || b.source_view && a.getParam("fullpage_hide_in_source_view") || (b.content = tinymce.trim(i) + "\n" + tinymce.trim(b.content) + "\n" + tinymce.trim(j))
	}
	var i, j, k = tinymce.each,
		l = tinymce.html.Node;
	a.addCommand("mceFullPageProperties", b), a.addButton("fullpage", {
		title: "Document properties",
		cmd: "mceFullPageProperties"
	}), a.addMenuItem("fullpage", {
		text: "Document properties",
		cmd: "mceFullPageProperties",
		context: "file"
	}), a.on("BeforeSetContent", f), a.on("GetContent", h)
});
tinymce.PluginManager.add("fullscreen", function(a) {
	function b() {
		var a, b, c = window,
			d = document,
			e = d.body;
		return e.offsetWidth && (a = e.offsetWidth, b = e.offsetHeight), c.innerWidth && c.innerHeight && (a = c.innerWidth, b = c.innerHeight), {
			w: a,
			h: b
		}
	}

	function c() {
		function c() {
			j.setStyle(m, "height", b().h - (l.clientHeight - m.clientHeight))
		}
		var k, l, m, n, o = document.body,
			p = document.documentElement;
		i = !i, l = a.getContainer(), k = l.style, m = a.getContentAreaContainer().firstChild, n = m.style, i ? (d = n.width, e = n.height, n.width = n.height = "100%", g = k.width, h = k.height, k.width = k.height = "", j.addClass(o, "mce-fullscreen"), j.addClass(p, "mce-fullscreen"), j.addClass(l, "mce-fullscreen"), j.bind(window, "resize", c), c(), f = c) : (n.width = d, n.height = e, g && (k.width = g), h && (k.height = h), j.removeClass(o, "mce-fullscreen"), j.removeClass(p, "mce-fullscreen"), j.removeClass(l, "mce-fullscreen"), j.unbind(window, "resize", f)), a.fire("FullscreenStateChanged", {
			state: i
		})
	}
	var d, e, f, g, h, i = !1,
		j = tinymce.DOM;
	return a.settings.inline ? void 0 : (a.on("init", function() {
		a.addShortcut("Ctrl+Alt+F", "", c)
	}), a.on("remove", function() {
		f && j.unbind(window, "resize", f)
	}), a.addCommand("mceFullScreen", c), a.addMenuItem("fullscreen", {
		text: "Fullscreen",
		shortcut: "Ctrl+Alt+F",
		selectable: !0,
		onClick: c,
		onPostRender: function() {
			var b = this;
			a.on("FullscreenStateChanged", function(a) {
				b.active(a.state)
			})
		},
		context: "view"
	}), a.addButton("fullscreen", {
		tooltip: "Fullscreen",
		shortcut: "Ctrl+Alt+F",
		onClick: c,
		onPostRender: function() {
			var b = this;
			a.on("FullscreenStateChanged", function(a) {
				b.active(a.state)
			})
		}
	}), {
		isFullscreen: function() {
			return i
		}
	})
});
tinymce.PluginManager.add("hr", function(a) {
	a.addCommand("InsertHorizontalRule", function() {
		a.execCommand("mceInsertContent", !1, "<hr />")
	}), a.addButton("hr", {
		icon: "hr",
		tooltip: "Horizontal line",
		cmd: "InsertHorizontalRule"
	}), a.addMenuItem("hr", {
		icon: "hr",
		text: "Horizontal line",
		cmd: "InsertHorizontalRule",
		context: "insert"
	})
});
tinymce.PluginManager.add("image", function(a) {
	function b(a, b) {
		function c(a, c) {
			d.parentNode && d.parentNode.removeChild(d), b({
				width: a,
				height: c
			})
		}
		var d = document.createElement("img");
		d.onload = function() {
			c(d.clientWidth, d.clientHeight)
		}, d.onerror = function() {
			c()
		};
		var e = d.style;
		e.visibility = "hidden", e.position = "fixed", e.bottom = e.left = 0, e.width = e.height = "auto", document.body.appendChild(d), d.src = a
	}

	function c(a, b, c) {
		function d(a, c) {
			return c = c || [], tinymce.each(a, function(a) {
				var e = {
					text: a.text || a.title
				};
				a.menu ? e.menu = d(a.menu) : (e.value = a.value, b(e)), c.push(e)
			}), c
		}
		return d(a, c || [])
	}

	function d(b) {
		return function() {
			var c = a.settings.image_list;
			"string" == typeof c ? tinymce.util.XHR.send({
				url: c,
				success: function(a) {
					b(tinymce.util.JSON.parse(a))
				}
			}) : "function" == typeof c ? c(b) : b(c)
		}
	}

	function e(d) {
		function e() {
			var a, b, c, d;
			a = j.find("#width")[0], b = j.find("#height")[0], a && b && (c = a.value(), d = b.value(), j.find("#constrain")[0].checked() && k && l && c && d && (k != c ? (d = Math.round(c / k * d), b.value(d)) : (c = Math.round(d / l * c), a.value(c))), k = c, l = d)
		}

		function f() {
			function b(b) {
				function c() {
					b.onload = b.onerror = null, a.selection && (a.selection.select(b), a.nodeChanged())
				}
				b.onload = function() {
					o.width || o.height || !r || p.setAttribs(b, {
						width: b.clientWidth,
						height: b.clientHeight
					}), c()
				}, b.onerror = c
			}
			i(), e(), o = tinymce.extend(o, j.toJSON()), o.alt || (o.alt = ""), "" === o.width && (o.width = null), "" === o.height && (o.height = null), o.style || (o.style = null), o = {
				src: o.src,
				alt: o.alt,
				width: o.width,
				height: o.height,
				style: o.style,
				"class": o["class"]
			}, a.undoManager.transact(function() {
				return o.src ? (q ? p.setAttribs(q, o) : (o.id = "__mcenew", a.focus(), a.selection.setContent(p.createHTML("img", o)), q = p.get("__mcenew"), p.setAttrib(q, "id", null)), void b(q)) : void(q && (p.remove(q), a.focus(), a.nodeChanged()))
			})
		}

		function g(a) {
			return a && (a = a.replace(/px$/, "")), a
		}

		function h(c) {
			var d = c.meta || {};
			m && m.value(a.convertURL(this.value(), "src")), tinymce.each(d, function(a, b) {
				j.find("#" + b).value(a)
			}), d.width || d.height || b(this.value(), function(a) {
				a.width && a.height && r && (k = a.width, l = a.height, j.find("#width").value(k), j.find("#height").value(l))
			})
		}

		function i() {
			function b(a) {
				return a.length > 0 && /^[0-9]+$/.test(a) && (a += "px"), a
			}
			if (a.settings.image_advtab) {
				var c = j.toJSON(),
					d = p.parseStyle(c.style);
				delete d.margin, d["margin-top"] = d["margin-bottom"] = b(c.vspace), d["margin-left"] = d["margin-right"] = b(c.hspace), d["border-width"] = b(c.border), j.find("#style").value(p.serializeStyle(p.parseStyle(p.serializeStyle(d))))
			}
		}
		var j, k, l, m, n, o = {},
			p = a.dom,
			q = a.selection.getNode(),
			r = a.settings.image_dimensions !== !1;
		k = p.getAttrib(q, "width"), l = p.getAttrib(q, "height"), "IMG" != q.nodeName || q.getAttribute("data-mce-object") || q.getAttribute("data-mce-placeholder") ? q = null : o = {
			src: p.getAttrib(q, "src"),
			alt: p.getAttrib(q, "alt"),
			"class": p.getAttrib(q, "class"),
			width: k,
			height: l
		}, d && (m = {
			type: "listbox",
			label: "Image list",
			values: c(d, function(b) {
				b.value = a.convertURL(b.value || b.url, "src")
			}, [{
				text: "None",
				value: ""
			}]),
			value: o.src && a.convertURL(o.src, "src"),
			onselect: function(a) {
				var b = j.find("#alt");
				(!b.value() || a.lastControl && b.value() == a.lastControl.text()) && b.value(a.control.text()), j.find("#src").value(a.control.value()).fire("change")
			},
			onPostRender: function() {
				m = this
			}
		}), a.settings.image_class_list && (n = {
			name: "class",
			type: "listbox",
			label: "Class",
			values: c(a.settings.image_class_list, function(b) {
				b.value && (b.textStyle = function() {
					return a.formatter.getCssText({
						inline: "img",
						classes: [b.value]
					})
				})
			})
		});
		var s = [{
				name: "src",
				type: "filepicker",
				filetype: "image",
				label: "Source",
				autofocus: !0,
				onchange: h
			},
			m
		];
		a.settings.image_description !== !1 && s.push({
			name: "alt",
			type: "textbox",
			label: "Image description"
		}), r && s.push({
			type: "container",
			label: "Dimensions",
			layout: "flex",
			direction: "row",
			align: "center",
			spacing: 5,
			items: [{
				name: "width",
				type: "textbox",
				maxLength: 5,
				size: 3,
				onchange: e,
				ariaLabel: "Width"
			}, {
				type: "label",
				text: "x"
			}, {
				name: "height",
				type: "textbox",
				maxLength: 5,
				size: 3,
				onchange: e,
				ariaLabel: "Height"
			}, {
				name: "constrain",
				type: "checkbox",
				checked: !0,
				text: "Constrain proportions"
			}]
		}), s.push(n), a.settings.image_advtab ? (q && (o.hspace = g(q.style.marginLeft || q.style.marginRight), o.vspace = g(q.style.marginTop || q.style.marginBottom), o.border = g(q.style.borderWidth), o.style = a.dom.serializeStyle(a.dom.parseStyle(a.dom.getAttrib(q, "style")))), j = a.windowManager.open({
			title: "Insert/edit image",
			data: o,
			bodyType: "tabpanel",
			body: [{
				title: "General",
				type: "form",
				items: s
			}, {
				title: "Advanced",
				type: "form",
				pack: "start",
				items: [{
					label: "Style",
					name: "style",
					type: "textbox"
				}, {
					type: "form",
					layout: "grid",
					packV: "start",
					columns: 2,
					padding: 0,
					alignH: ["left", "right"],
					defaults: {
						type: "textbox",
						maxWidth: 50,
						onchange: i
					},
					items: [{
						label: "Vertical space",
						name: "vspace"
					}, {
						label: "Horizontal space",
						name: "hspace"
					}, {
						label: "Border",
						name: "border"
					}]
				}]
			}],
			onSubmit: f
		})) : j = a.windowManager.open({
			title: "Insert/edit image",
			data: o,
			body: s,
			onSubmit: f
		})
	}
	a.addButton("image", {
		icon: "image",
		tooltip: "Insert/edit image",
		onclick: d(e),
		stateSelector: "img:not([data-mce-object],[data-mce-placeholder])"
	}), a.addMenuItem("image", {
		icon: "image",
		text: "Insert image",
		onclick: d(e),
		context: "insert",
		prependToContext: !0
	}), a.addCommand("mceImage", d(e))
});
tinymce.PluginManager.add("importcss", function(a) {
	function b(a) {
		return "string" == typeof a ? function(b) {
			return -1 !== b.indexOf(a)
		} : a instanceof RegExp ? function(b) {
			return a.test(b)
		} : a
	}

	function c(b, c) {
		function d(a, b) {
			var g, h = a.href;
			if (h && c(h, b)) {
				f(a.imports, function(a) {
					d(a, !0)
				});
				try {
					g = a.cssRules || a.rules
				} catch (i) {}
				f(g, function(a) {
					a.styleSheet ? d(a.styleSheet, !0) : a.selectorText && f(a.selectorText.split(","), function(a) {
						e.push(tinymce.trim(a))
					})
				})
			}
		}
		var e = [],
			g = {};
		f(a.contentCSS, function(a) {
			g[a] = !0
		}), c || (c = function(a, b) {
			return b || g[a]
		});
		try {
			f(b.styleSheets, function(a) {
				d(a)
			})
		} catch (h) {}
		return e
	}

	function d(b) {
		var c, d = /^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(b);
		if (d) {
			var e = d[1],
				f = d[2].substr(1).split(".").join(" "),
				g = tinymce.makeMap("a,img");
			return d[1] ? (c = {
				title: b
			}, a.schema.getTextBlockElements()[e] ? c.block = e : a.schema.getBlockElements()[e] || g[e.toLowerCase()] ? c.selector = e : c.inline = e) : d[2] && (c = {
				inline: "span",
				title: b.substr(1),
				classes: f
			}), a.settings.importcss_merge_classes !== !1 ? c.classes = f : c.attributes = {
				"class": f
			}, c
		}
	}
	var e = this,
		f = tinymce.each;
	a.on("renderFormatsMenu", function(g) {
		var h = a.settings,
			i = {},
			j = h.importcss_selector_converter || d,
			k = b(h.importcss_selector_filter),
			l = g.control;
		a.settings.importcss_append || l.items().remove();
		var m = [];
		tinymce.each(h.importcss_groups, function(a) {
			a = tinymce.extend({}, a), a.filter = b(a.filter), m.push(a)
		}), f(c(g.doc || a.getDoc(), b(h.importcss_file_filter)), function(b) {
			if (-1 === b.indexOf(".mce-") && !i[b] && (!k || k(b))) {
				var c, d = j.call(e, b);
				if (d) {
					var f = d.name || tinymce.DOM.uniqueId();
					if (m)
						for (var g = 0; g < m.length; g++)
							if (!m[g].filter || m[g].filter(b)) {
								m[g].item || (m[g].item = {
									text: m[g].title,
									menu: []
								}), c = m[g].item.menu;
								break
							}
					a.formatter.register(f, d);
					var h = tinymce.extend({}, l.settings.itemDefaults, {
						text: d.title,
						format: f
					});
					c ? c.push(h) : l.add(h)
				}
				i[b] = !0
			}
		}), f(m, function(a) {
			l.add(a.item)
		}), g.control.renderNew()
	}), e.convertSelectorToFormat = d
});
tinymce.PluginManager.add("insertdatetime", function(a) {
	function b(b, c) {
		function d(a, b) {
			if (a = "" + a, a.length < b)
				for (var c = 0; c < b - a.length; c++) a = "0" + a;
			return a
		}
		return c = c || new Date, b = b.replace("%D", "%m/%d/%Y"), b = b.replace("%r", "%I:%M:%S %p"), b = b.replace("%Y", "" + c.getFullYear()), b = b.replace("%y", "" + c.getYear()), b = b.replace("%m", d(c.getMonth() + 1, 2)), b = b.replace("%d", d(c.getDate(), 2)), b = b.replace("%H", "" + d(c.getHours(), 2)), b = b.replace("%M", "" + d(c.getMinutes(), 2)), b = b.replace("%S", "" + d(c.getSeconds(), 2)), b = b.replace("%I", "" + ((c.getHours() + 11) % 12 + 1)), b = b.replace("%p", "" + (c.getHours() < 12 ? "AM" : "PM")), b = b.replace("%B", "" + a.translate(i[c.getMonth()])), b = b.replace("%b", "" + a.translate(h[c.getMonth()])), b = b.replace("%A", "" + a.translate(g[c.getDay()])), b = b.replace("%a", "" + a.translate(f[c.getDay()])), b = b.replace("%%", "%")
	}

	function c(c) {
		var d = b(c);
		if (a.settings.insertdatetime_element) {
			var e;
			e = b(/%[HMSIp]/.test(c) ? "%Y-%m-%dT%H:%M" : "%Y-%m-%d"), d = '<time datetime="' + e + '">' + d + "</time>";
			var f = a.dom.getParent(a.selection.getStart(), "time");
			if (f) return void a.dom.setOuterHTML(f, d)
		}
		a.insertContent(d)
	}
	var d, e, f = "Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),
		g = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),
		h = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
		i = "January February March April May June July August September October November December".split(" "),
		j = [];
	a.addCommand("mceInsertDate", function() {
		c(a.getParam("insertdatetime_dateformat", a.translate("%Y-%m-%d")))
	}), a.addCommand("mceInsertTime", function() {
		c(a.getParam("insertdatetime_timeformat", a.translate("%H:%M:%S")))
	}), a.addButton("insertdatetime", {
		type: "splitbutton",
		title: "Insert date/time",
		onclick: function() {
			c(d || e)
		},
		menu: j
	}), tinymce.each(a.settings.insertdatetime_formats || ["%H:%M:%S", "%Y-%m-%d", "%I:%M:%S %p", "%D"], function(a) {
		e || (e = a), j.push({
			text: b(a),
			onclick: function() {
				d = a, c(a)
			}
		})
	}), a.addMenuItem("insertdatetime", {
		icon: "date",
		text: "Insert date/time",
		menu: j,
		context: "insert"
	})
});
! function(a) {
	a.on("AddEditor", function(a) {
		a.editor.settings.inline_styles = !1
	}), a.PluginManager.add("legacyoutput", function(b, c, d) {
		b.on("init", function() {
			var c = "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img",
				d = a.explode(b.settings.font_size_style_values),
				e = b.schema;
			b.formatter.register({
				alignleft: {
					selector: c,
					attributes: {
						align: "left"
					}
				},
				aligncenter: {
					selector: c,
					attributes: {
						align: "center"
					}
				},
				alignright: {
					selector: c,
					attributes: {
						align: "right"
					}
				},
				alignjustify: {
					selector: c,
					attributes: {
						align: "justify"
					}
				},
				bold: [{
					inline: "b",
					remove: "all"
				}, {
					inline: "strong",
					remove: "all"
				}, {
					inline: "span",
					styles: {
						fontWeight: "bold"
					}
				}],
				italic: [{
					inline: "i",
					remove: "all"
				}, {
					inline: "em",
					remove: "all"
				}, {
					inline: "span",
					styles: {
						fontStyle: "italic"
					}
				}],
				underline: [{
					inline: "u",
					remove: "all"
				}, {
					inline: "span",
					styles: {
						textDecoration: "underline"
					},
					exact: !0
				}],
				strikethrough: [{
					inline: "strike",
					remove: "all"
				}, {
					inline: "span",
					styles: {
						textDecoration: "line-through"
					},
					exact: !0
				}],
				fontname: {
					inline: "font",
					attributes: {
						face: "%value"
					}
				},
				fontsize: {
					inline: "font",
					attributes: {
						size: function(b) {
							return a.inArray(d, b.value) + 1
						}
					}
				},
				forecolor: {
					inline: "font",
					attributes: {
						color: "%value"
					}
				},
				hilitecolor: {
					inline: "font",
					styles: {
						backgroundColor: "%value"
					}
				}
			}), a.each("b,i,u,strike".split(","), function(a) {
				e.addValidElements(a + "[*]")
			}), e.getElementRule("font") || e.addValidElements("font[face|size|color|style]"), a.each(c.split(","), function(a) {
				var b = e.getElementRule(a);
				b && (b.attributes.align || (b.attributes.align = {}, b.attributesOrder.push("align")))
			})
		}), b.addButton("fontsizeselect", function() {
			var a = [],
				c = "8pt=1 10pt=2 12pt=3 14pt=4 18pt=5 24pt=6 36pt=7",
				d = b.settings.fontsize_formats || c;
			return b.$.each(d.split(" "), function(b, c) {
				var d = c,
					e = c,
					f = c.split("=");
				f.length > 1 && (d = f[0], e = f[1]), a.push({
					text: d,
					value: e
				})
			}), {
				type: "listbox",
				text: "Font Sizes",
				tooltip: "Font Sizes",
				values: a,
				fixedWidth: !0,
				onPostRender: function() {
					var a = this;
					b.on("NodeChange", function() {
						var c;
						c = b.dom.getParent(b.selection.getNode(), "font"), a.value(c ? c.size : "")
					})
				},
				onclick: function(a) {
					a.control.settings.value && b.execCommand("FontSize", !1, a.control.settings.value)
				}
			}
		}), b.addButton("fontselect", function() {
			function a(a) {
				a = a.replace(/;$/, "").split(";");
				for (var b = a.length; b--;) a[b] = a[b].split("=");
				return a
			}
			var c = "Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats",
				e = [],
				f = a(b.settings.font_formats || c);
			return d.each(f, function(a, b) {
				e.push({
					text: {
						raw: b[0]
					},
					value: b[1],
					textStyle: -1 == b[1].indexOf("dings") ? "font-family:" + b[1] : ""
				})
			}), {
				type: "listbox",
				text: "Font Family",
				tooltip: "Font Family",
				values: e,
				fixedWidth: !0,
				onPostRender: function() {
					var a = this;
					b.on("NodeChange", function() {
						var c;
						c = b.dom.getParent(b.selection.getNode(), "font"), a.value(c ? c.face : "")
					})
				},
				onselect: function(a) {
					a.control.settings.value && b.execCommand("FontName", !1, a.control.settings.value)
				}
			}
		})
	})
}(tinymce);
tinymce.PluginManager.add("link", function(a) {
	function b(b) {
		return function() {
			var c = a.settings.link_list;
			"string" == typeof c ? tinymce.util.XHR.send({
				url: c,
				success: function(a) {
					b(tinymce.util.JSON.parse(a))
				}
			}) : "function" == typeof c ? c(b) : b(c)
		}
	}

	function c(a, b, c) {
		function d(a, c) {
			return c = c || [], tinymce.each(a, function(a) {
				var e = {
					text: a.text || a.title
				};
				a.menu ? e.menu = d(a.menu) : (e.value = a.value, b && b(e)), c.push(e)
			}), c
		}
		return d(a, c || [])
	}

	function d(b) {
		function d(a) {
			var b = l.find("#text");
			(!b.value() || a.lastControl && b.value() == a.lastControl.text()) && b.value(a.control.text()), l.find("#href").value(a.control.value())
		}

		function e(b) {
			var c = [];
			return tinymce.each(a.dom.select("a:not([href])"), function(a) {
				var d = a.name || a.id;
				d && c.push({
					text: d,
					value: "#" + d,
					selected: -1 != b.indexOf("#" + d)
				})
			}), c.length ? (c.unshift({
				text: "None",
				value: ""
			}), {
				name: "anchor",
				type: "listbox",
				label: "Anchors",
				values: c,
				onselect: d
			}) : void 0
		}

		function f() {
			!k && 0 === u.text.length && m && this.parent().parent().find("#text")[0].value(this.value())
		}

		function g(b) {
			var c = b.meta || {};
			o && o.value(a.convertURL(this.value(), "href")), tinymce.each(b.meta, function(a, b) {
				l.find("#" + b).value(a)
			}), c.text || f.call(this)
		}

		function h(a) {
			var b = v.getContent();
			if (/</.test(b) && (!/^<a [^>]+>[^<]+<\/a>$/.test(b) || -1 == b.indexOf("href="))) return !1;
			if (a) {
				var c, d = a.childNodes;
				if (0 === d.length) return !1;
				for (c = d.length - 1; c >= 0; c--)
					if (3 != d[c].nodeType) return !1
			}
			return !0
		}
		var i, j, k, l, m, n, o, p, q, r, s, t, u = {},
			v = a.selection,
			w = a.dom;
		i = v.getNode(), j = w.getParent(i, "a[href]"), m = h(), u.text = k = j ? j.innerText || j.textContent : v.getContent({
			format: "text"
		}), u.href = j ? w.getAttrib(j, "href") : "", (t = w.getAttrib(j, "target")) ? u.target = t : a.settings.default_link_target && (u.target = a.settings.default_link_target), (t = w.getAttrib(j, "rel")) && (u.rel = t), (t = w.getAttrib(j, "class")) && (u["class"] = t), (t = w.getAttrib(j, "title")) && (u.title = t), m && (n = {
			name: "text",
			type: "textbox",
			size: 40,
			label: "Text to display",
			onchange: function() {
				u.text = this.value()
			}
		}), b && (o = {
			type: "listbox",
			label: "Link list",
			values: c(b, function(b) {
				b.value = a.convertURL(b.value || b.url, "href")
			}, [{
				text: "None",
				value: ""
			}]),
			onselect: d,
			value: a.convertURL(u.href, "href"),
			onPostRender: function() {
				o = this
			}
		}), a.settings.target_list !== !1 && (a.settings.target_list || (a.settings.target_list = [{
			text: "None",
			value: ""
		}, {
			text: "New window",
			value: "_blank"
		}]), q = {
			name: "target",
			type: "listbox",
			label: "Target",
			values: c(a.settings.target_list)
		}), a.settings.rel_list && (p = {
			name: "rel",
			type: "listbox",
			label: "Rel",
			values: c(a.settings.rel_list)
		}), a.settings.link_class_list && (r = {
			name: "class",
			type: "listbox",
			label: "Class",
			values: c(a.settings.link_class_list, function(b) {
				b.value && (b.textStyle = function() {
					return a.formatter.getCssText({
						inline: "a",
						classes: [b.value]
					})
				})
			})
		}), a.settings.link_title !== !1 && (s = {
			name: "title",
			type: "textbox",
			label: "Title",
			value: u.title
		}), l = a.windowManager.open({
			title: "Insert link",
			data: u,
			body: [{
					name: "href",
					type: "filepicker",
					filetype: "file",
					size: 40,
					autofocus: !0,
					label: "Url",
					onchange: g,
					onkeyup: f
				},
				n, s, e(u.href), o, p, q, r
			],
			onSubmit: function(b) {
				function c(b, c) {
					var d = a.selection.getRng();
					window.setTimeout(function() {
						a.windowManager.confirm(b, function(b) {
							a.selection.setRng(d), c(b)
						})
					}, 0)
				}

				function d() {
					var b = {
						href: e,
						target: u.target ? u.target : null,
						rel: u.rel ? u.rel : null,
						"class": u["class"] ? u["class"] : null,
						title: u.title ? u.title : null
					};
					j ? (a.focus(), m && u.text != k && ("innerText" in j ? j.innerText = u.text : j.textContent = u.text), w.setAttribs(j, b), v.select(j), a.undoManager.add()) : m ? a.insertContent(w.createHTML("a", b, w.encode(u.text))) : a.execCommand("mceInsertLink", !1, b)
				}
				var e;
				return u = tinymce.extend(u, b.data), (e = u.href) ? e.indexOf("@") > 0 && -1 == e.indexOf("//") && -1 == e.indexOf("mailto:") ? void c("The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?", function(a) {
					a && (e = "mailto:" + e), d()
				}) : /^\s*www\./i.test(e) ? void c("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?", function(a) {
					a && (e = "http://" + e), d()
				}) : void d() : void a.execCommand("unlink")
			}
		})
	}
	a.addButton("link", {
		icon: "link",
		tooltip: "Insert/edit link",
		shortcut: "Ctrl+K",
		onclick: b(d),
		stateSelector: "a[href]"
	}), a.addButton("unlink", {
		icon: "unlink",
		tooltip: "Remove link",
		cmd: "unlink",
		stateSelector: "a[href]"
	}), a.addShortcut("Ctrl+K", "", b(d)), a.addCommand("mceLink", b(d)), this.showDialog = d, a.addMenuItem("link", {
		icon: "link",
		text: "Insert link",
		shortcut: "Ctrl+K",
		onclick: b(d),
		stateSelector: "a[href]",
		context: "insert",
		prependToContext: !0
	})
});
tinymce.PluginManager.add("lists", function(a) {
	function b(a) {
		return a && /^(OL|UL|DL)$/.test(a.nodeName)
	}

	function c(a) {
		return a.parentNode.firstChild == a
	}

	function d(a) {
		return a.parentNode.lastChild == a
	}

	function e(b) {
		return b && !!a.schema.getTextBlockElements()[b.nodeName]
	}
	var f = this;
	a.on("init", function() {
		function g(a) {
			function b(b) {
				var d, e, f;
				e = a[b ? "startContainer" : "endContainer"], f = a[b ? "startOffset" : "endOffset"], 1 == e.nodeType && (d = v.create("span", {
					"data-mce-type": "bookmark"
				}), e.hasChildNodes() ? (f = Math.min(f, e.childNodes.length - 1), b ? e.insertBefore(d, e.childNodes[f]) : v.insertAfter(d, e.childNodes[f])) : e.appendChild(d), e = d, f = 0), c[b ? "startContainer" : "endContainer"] = e, c[b ? "startOffset" : "endOffset"] = f
			}
			var c = {};
			return b(!0), a.collapsed || b(), c
		}

		function h(a) {
			function b(b) {
				function c(a) {
					for (var b = a.parentNode.firstChild, c = 0; b;) {
						if (b == a) return c;
						(1 != b.nodeType || "bookmark" != b.getAttribute("data-mce-type")) && c++, b = b.nextSibling
					}
					return -1
				}
				var d, e, f;
				d = f = a[b ? "startContainer" : "endContainer"], e = a[b ? "startOffset" : "endOffset"], d && (1 == d.nodeType && (e = c(d), d = d.parentNode, v.remove(f)), a[b ? "startContainer" : "endContainer"] = d, a[b ? "startOffset" : "endOffset"] = e)
			}
			b(!0), b();
			var c = v.createRng();
			c.setStart(a.startContainer, a.startOffset), a.endContainer && c.setEnd(a.endContainer, a.endOffset), w.setRng(c)
		}

		function i(b, c) {
			var d, e, f, g = v.createFragment(),
				h = a.schema.getBlockElements();
			if (a.settings.forced_root_block && (c = c || a.settings.forced_root_block), c && (e = v.create(c), e.tagName === a.settings.forced_root_block && v.setAttribs(e, a.settings.forced_root_block_attrs), g.appendChild(e)), b)
				for (; d = b.firstChild;) {
					var i = d.nodeName;
					f || "SPAN" == i && "bookmark" == d.getAttribute("data-mce-type") || (f = !0), h[i] ? (g.appendChild(d), e = null) : c ? (e || (e = v.create(c), g.appendChild(e)), e.appendChild(d)) : g.appendChild(d)
				}
			return a.settings.forced_root_block ? f || tinymce.Env.ie && !(tinymce.Env.ie > 10) || e.appendChild(v.create("br", {
				"data-mce-bogus": "1"
			})) : g.appendChild(v.create("br")), g
		}

		function j() {
			return tinymce.grep(w.getSelectedBlocks(), function(a) {
				return /^(LI|DT|DD)$/.test(a.nodeName)
			})
		}

		function k(a, b, c) {
			var d, e, f = v.select('span[data-mce-type="bookmark"]', a);
			c = c || i(b), d = v.createRng(), d.setStartAfter(b), d.setEndAfter(a), e = d.extractContents(), v.isEmpty(e) || v.insertAfter(e, a), v.insertAfter(c, a), v.isEmpty(b.parentNode) && (tinymce.each(f, function(a) {
				b.parentNode.parentNode.insertBefore(a, b.parentNode)
			}), v.remove(b.parentNode)), v.remove(b)
		}

		function l(a) {
			var c, d;
			if (c = a.nextSibling, c && b(c) && c.nodeName == a.nodeName) {
				for (; d = c.firstChild;) a.appendChild(d);
				v.remove(c)
			}
			if (c = a.previousSibling, c && b(c) && c.nodeName == a.nodeName) {
				for (; d = c.firstChild;) a.insertBefore(d, a.firstChild);
				v.remove(c)
			}
		}

		function m(a) {
			tinymce.each(tinymce.grep(v.select("ol,ul", a)), function(a) {
				var c, d = a.parentNode;
				"LI" == d.nodeName && d.firstChild == a && (c = d.previousSibling, c && "LI" == c.nodeName && (c.appendChild(a), v.isEmpty(d) && v.remove(d))), b(d) && (c = d.previousSibling, c && "LI" == c.nodeName && c.appendChild(a))
			})
		}

		function n(a) {
			function e(a) {
				v.isEmpty(a) && v.remove(a)
			}
			var f, g = a.parentNode,
				h = g.parentNode;
			return "DD" == a.nodeName ? (v.rename(a, "DT"), !0) : c(a) && d(a) ? ("LI" == h.nodeName ? (v.insertAfter(a, h), e(h), v.remove(g)) : b(h) ? v.remove(g, !0) : (h.insertBefore(i(a), g), v.remove(g)), !0) : c(a) ? ("LI" == h.nodeName ? (v.insertAfter(a, h), a.appendChild(g), e(h)) : b(h) ? h.insertBefore(a, g) : (h.insertBefore(i(a), g), v.remove(a)), !0) : d(a) ? ("LI" == h.nodeName ? v.insertAfter(a, h) : b(h) ? v.insertAfter(a, g) : (v.insertAfter(i(a), g), v.remove(a)), !0) : ("LI" == h.nodeName ? (g = h, f = i(a, "LI")) : f = b(h) ? i(a, "LI") : i(a), k(g, a, f), m(g.parentNode), !0)
		}

		function o(a) {
			function c(c, d) {
				var e;
				if (b(c)) {
					for (; e = a.lastChild.firstChild;) d.appendChild(e);
					v.remove(c)
				}
			}
			var d, e;
			return "DT" == a.nodeName ? (v.rename(a, "DD"), !0) : (d = a.previousSibling, d && b(d) ? (d.appendChild(a), !0) : d && "LI" == d.nodeName && b(d.lastChild) ? (d.lastChild.appendChild(a), c(a.lastChild, d.lastChild), !0) : (d = a.nextSibling, d && b(d) ? (d.insertBefore(a, d.firstChild), !0) : d && "LI" == d.nodeName && b(a.lastChild) ? !1 : (d = a.previousSibling, d && "LI" == d.nodeName ? (e = v.create(a.parentNode.nodeName), d.appendChild(e), e.appendChild(a), c(a.lastChild, e), !0) : !1)))
		}

		function p() {
			var b = j();
			if (b.length) {
				for (var c = g(w.getRng(!0)), d = 0; d < b.length && (o(b[d]) || 0 !== d); d++);
				return h(c), a.nodeChanged(), !0
			}
		}

		function q() {
			var b = j();
			if (b.length) {
				var c, d, e = g(w.getRng(!0)),
					f = a.getBody();
				for (c = b.length; c--;)
					for (var i = b[c].parentNode; i && i != f;) {
						for (d = b.length; d--;)
							if (b[d] === i) {
								b.splice(c, 1);
								break
							}
						i = i.parentNode
					}
				for (c = 0; c < b.length && (n(b[c]) || 0 !== c); c++);
				return h(e), a.nodeChanged(), !0
			}
		}

		function r(c) {
			function d() {
				function b(a) {
					var b, c;
					for (b = f[a ? "startContainer" : "endContainer"], c = f[a ? "startOffset" : "endOffset"], 1 == b.nodeType && (b = b.childNodes[Math.min(c, b.childNodes.length - 1)] || b); b.parentNode != g;) {
						if (e(b)) return b;
						if (/^(TD|TH)$/.test(b.parentNode.nodeName)) return b;
						b = b.parentNode
					}
					return b
				}
				for (var c, d = [], g = a.getBody(), h = b(!0), i = b(), j = [], k = h; k && (j.push(k), k != i); k = k.nextSibling);
				return tinymce.each(j, function(a) {
					if (e(a)) return d.push(a), void(c = null);
					if (v.isBlock(a) || "BR" == a.nodeName) return "BR" == a.nodeName && v.remove(a), void(c = null);
					var b = a.nextSibling;
					return tinymce.dom.BookmarkManager.isBookmarkNode(a) && (e(b) || !b && a.parentNode == g) ? void(c = null) : (c || (c = v.create("p"), a.parentNode.insertBefore(c, a), d.push(c)), void c.appendChild(a))
				}), d
			}
			var f = w.getRng(!0),
				i = g(f),
				j = "LI";
			c = c.toUpperCase(), "DL" == c && (j = "DT"), tinymce.each(d(), function(a) {
				var d, e;
				e = a.previousSibling, e && b(e) && e.nodeName == c ? (d = e, a = v.rename(a, j), e.appendChild(a)) : (d = v.create(c), a.parentNode.insertBefore(d, a), d.appendChild(a), a = v.rename(a, j)), l(d)
			}), h(i)
		}

		function s() {
			var c = g(w.getRng(!0)),
				d = a.getBody();
			tinymce.each(j(), function(a) {
				var c, e;
				if (v.isEmpty(a)) return void n(a);
				for (c = a; c && c != d; c = c.parentNode) b(c) && (e = c);
				k(e, a)
			}), h(c)
		}

		function t(a) {
			var b = v.getParent(w.getStart(), "OL,UL,DL");
			if (b)
				if (b.nodeName == a) s(a);
				else {
					var c = g(w.getRng(!0));
					l(v.rename(b, a)), h(c)
				} else r(a)
		}

		function u(b) {
			return function() {
				var c = v.getParent(a.selection.getStart(), "UL,OL,DL");
				return c && c.nodeName == b
			}
		}
		var v = a.dom,
			w = a.selection;
		f.backspaceDelete = function(c) {
			function d(b, c) {
				var d, e, f = b.startContainer,
					g = b.startOffset;
				if (3 == f.nodeType && (c ? g < f.data.length : g > 0)) return f;
				for (d = a.schema.getNonEmptyElements(), e = new tinymce.dom.TreeWalker(b.startContainer); f = e[c ? "next" : "prev"]();) {
					if ("LI" == f.nodeName && !f.hasChildNodes()) return f;
					if (d[f.nodeName]) return f;
					if (3 == f.nodeType && f.data.length > 0) return f
				}
			}

			function e(a, c) {
				var d, e, f = a.parentNode;
				if (b(c.lastChild) && (e = c.lastChild), d = c.lastChild, d && "BR" == d.nodeName && a.hasChildNodes() && v.remove(d), v.isEmpty(c) && v.$(c).empty(), !v.isEmpty(a))
					for (; d = a.firstChild;) c.appendChild(d);
				e && c.appendChild(e), v.remove(a), v.isEmpty(f) && v.remove(f)
			}
			if (w.isCollapsed()) {
				var f = v.getParent(w.getStart(), "LI");
				if (f) {
					var i = w.getRng(!0),
						j = v.getParent(d(i, c), "LI");
					if (j && j != f) {
						var k = g(i);
						return c ? e(j, f) : e(f, j), h(k), !0
					}
					if (!j && !c && s(f.parentNode.nodeName)) return !0
				}
			}
		}, a.addCommand("Indent", function() {
			return p() ? void 0 : !0
		}), a.addCommand("Outdent", function() {
			return q() ? void 0 : !0
		}), a.addCommand("InsertUnorderedList", function() {
			t("UL")
		}), a.addCommand("InsertOrderedList", function() {
			t("OL")
		}), a.addCommand("InsertDefinitionList", function() {
			t("DL")
		}), a.addQueryStateHandler("InsertUnorderedList", u("UL")), a.addQueryStateHandler("InsertOrderedList", u("OL")), a.addQueryStateHandler("InsertDefinitionList", u("DL")), a.on("keydown", function(b) {
			9 != b.keyCode || tinymce.util.VK.metaKeyPressed(b) || a.dom.getParent(a.selection.getStart(), "LI,DT,DD") && (b.preventDefault(), b.shiftKey ? q() : p())
		})
	}), a.addButton("indent", {
		icon: "indent",
		title: "Increase indent",
		cmd: "Indent",
		onPostRender: function() {
			var b = this;
			a.on("nodechange", function() {
				for (var d = a.selection.getSelectedBlocks(), e = !1, f = 0, g = d.length; !e && g > f; f++) {
					var h = d[f].nodeName;
					e = "LI" == h && c(d[f]) || "UL" == h || "OL" == h || "DD" == h
				}
				b.disabled(e)
			})
		}
	}), a.on("keydown", function(a) {
		a.keyCode == tinymce.util.VK.BACKSPACE ? f.backspaceDelete() && a.preventDefault() : a.keyCode == tinymce.util.VK.DELETE && f.backspaceDelete(!0) && a.preventDefault()
	})
});
tinymce.PluginManager.add("media", function(a, b) {
	function c(a) {
		return -1 != a.indexOf(".mp3") ? "audio/mpeg" : -1 != a.indexOf(".wav") ? "audio/wav" : -1 != a.indexOf(".mp4") ? "video/mp4" : -1 != a.indexOf(".webm") ? "video/webm" : -1 != a.indexOf(".ogg") ? "video/ogg" : -1 != a.indexOf(".swf") ? "application/x-shockwave-flash" : ""
	}

	function d(b) {
		var c = a.settings.media_scripts;
		if (c)
			for (var d = 0; d < c.length; d++)
				if (-1 !== b.indexOf(c[d].filter)) return c[d]
	}

	function e() {
		function b(a) {
			var b, c, f, g;
			b = d.find("#width")[0], c = d.find("#height")[0], f = b.value(), g = c.value(), d.find("#constrain")[0].checked() && e && j && f && g && (a.control == b ? (g = Math.round(f / e * g), c.value(g)) : (f = Math.round(g / j * f), b.value(f))), e = f, j = g
		}

		function c() {
			k = h(this.value()), this.parent().parent().fromJSON(k)
		}
		var d, e, j, k, l = [{
			name: "source1",
			type: "filepicker",
			filetype: "media",
			size: 40,
			autofocus: !0,
			label: "Source",
			onchange: function(a) {
				tinymce.each(a.meta, function(a, b) {
					d.find("#" + b).value(a)
				})
			}
		}];
		a.settings.media_alt_source !== !1 && l.push({
			name: "source2",
			type: "filepicker",
			filetype: "media",
			size: 40,
			label: "Alternative source"
		}), a.settings.media_poster !== !1 && l.push({
			name: "poster",
			type: "filepicker",
			filetype: "image",
			size: 40,
			label: "Poster"
		}), a.settings.media_dimensions !== !1 && l.push({
			type: "container",
			label: "Dimensions",
			layout: "flex",
			align: "center",
			spacing: 5,
			items: [{
				name: "width",
				type: "textbox",
				maxLength: 3,
				size: 3,
				onchange: b
			}, {
				type: "label",
				text: "x"
			}, {
				name: "height",
				type: "textbox",
				maxLength: 3,
				size: 3,
				onchange: b
			}, {
				name: "constrain",
				type: "checkbox",
				checked: !0,
				text: "Constrain proportions"
			}]
		}), k = i(a.selection.getNode()), e = k.width, j = k.height;
		var n = {
			id: "mcemediasource",
			type: "textbox",
			flex: 1,
			name: "embed",
			value: f(),
			multiline: !0,
			label: "Source"
		};
		n[m] = c, d = a.windowManager.open({
			title: "Insert/edit video",
			data: k,
			bodyType: "tabpanel",
			body: [{
				title: "General",
				type: "form",
				onShowTab: function() {
					k = h(this.next().find("#embed").value()), this.fromJSON(k)
				},
				items: l
			}, {
				title: "Embed",
				type: "panel",
				layout: "flex",
				direction: "column",
				align: "stretch",
				padding: 10,
				spacing: 10,
				onShowTab: function() {
					this.find("#embed").value(g(this.parent().toJSON()))
				},
				items: [{
						type: "label",
						text: "Paste your embed code below:",
						forId: "mcemediasource"
					},
					n
				]
			}],
			onSubmit: function() {
				var b, c, d, e;
				for (b = a.dom.select("img[data-mce-object]"), a.insertContent(g(this.toJSON())), c = a.dom.select("img[data-mce-object]"), d = 0; d < b.length; d++)
					for (e = c.length - 1; e >= 0; e--) b[d] == c[e] && c.splice(e, 1);
				a.selection.select(c[0]), a.nodeChanged()
			}
		})
	}

	function f() {
		var b = a.selection.getNode();
		return b.getAttribute("data-mce-object") ? a.selection.getContent() : void 0
	}

	function g(e) {
		var f = "";
		if (!e.source1 && (tinymce.extend(e, h(e.embed)), !e.source1)) return "";
		if (e.source2 || (e.source2 = ""), e.poster || (e.poster = ""), e.source1 = a.convertURL(e.source1, "source"), e.source2 = a.convertURL(e.source2, "source"), e.source1mime = c(e.source1), e.source2mime = c(e.source2), e.poster = a.convertURL(e.poster, "poster"), e.flashPlayerUrl = a.convertURL(b + "/moxieplayer.swf", "movie"), tinymce.each(l, function(a) {
			var b, c, d;
			if (b = a.regex.exec(e.source1)) {
				for (d = a.url, c = 0; b[c]; c++) d = d.replace("$" + c, function() {
					return b[c]
				});
				e.source1 = d, e.type = a.type, e.width = e.width || a.w, e.height = e.height || a.h
			}
		}), e.embed) f = k(e.embed, e, !0);
		else {
			var g = d(e.source1);
			g && (e.type = "script", e.width = g.width, e.height = g.height), e.width = e.width || 300, e.height = e.height || 150, tinymce.each(e, function(b, c) {
				e[c] = a.dom.encode(b)
			}), "iframe" == e.type ? f += '<iframe src="' + e.source1 + '" width="' + e.width + '" height="' + e.height + '"></iframe>' : "application/x-shockwave-flash" == e.source1mime ? (f += '<object data="' + e.source1 + '" width="' + e.width + '" height="' + e.height + '" type="application/x-shockwave-flash">', e.poster && (f += '<img src="' + e.poster + '" width="' + e.width + '" height="' + e.height + '" />'), f += "</object>") : -1 != e.source1mime.indexOf("audio") ? a.settings.audio_template_callback ? f = a.settings.audio_template_callback(e) : f += '<audio controls="controls" src="' + e.source1 + '">' + (e.source2 ? '\n<source src="' + e.source2 + '"' + (e.source2mime ? ' type="' + e.source2mime + '"' : "") + " />\n" : "") + "</audio>" : "script" == e.type ? f += '<script src="' + e.source1 + '"></script>' : f = a.settings.video_template_callback ? a.settings.video_template_callback(e) : '<video width="' + e.width + '" height="' + e.height + '"' + (e.poster ? ' poster="' + e.poster + '"' : "") + ' controls="controls">\n<source src="' + e.source1 + '"' + (e.source1mime ? ' type="' + e.source1mime + '"' : "") + " />\n" + (e.source2 ? '<source src="' + e.source2 + '"' + (e.source2mime ? ' type="' + e.source2mime + '"' : "") + " />\n" : "") + "</video>"
		}
		return f
	}

	function h(a) {
		var b = {};
		return new tinymce.html.SaxParser({
			validate: !1,
			allow_conditional_comments: !0,
			special: "script,noscript",
			start: function(a, c) {
				if (b.source1 || "param" != a || (b.source1 = c.map.movie), ("iframe" == a || "object" == a || "embed" == a || "video" == a || "audio" == a) && (b.type || (b.type = a), b = tinymce.extend(c.map, b)), "script" == a) {
					var e = d(c.map.src);
					if (!e) return;
					b = {
						type: "script",
						source1: c.map.src,
						width: e.width,
						height: e.height
					}
				}
				"source" == a && (b.source1 ? b.source2 || (b.source2 = c.map.src) : b.source1 = c.map.src), "img" != a || b.poster || (b.poster = c.map.src)
			}
		}).parse(a), b.source1 = b.source1 || b.src || b.data, b.source2 = b.source2 || "", b.poster = b.poster || "", b
	}

	function i(b) {
		return b.getAttribute("data-mce-object") ? h(a.serializer.serialize(b, {
			selection: !0
		})) : {}
	}

	function j(b) {
		if (a.settings.media_filter_html === !1) return b;
		var c = new tinymce.html.Writer;
		return new tinymce.html.SaxParser({
			validate: !1,
			allow_conditional_comments: !1,
			special: "script,noscript",
			comment: function(a) {
				c.comment(a)
			},
			cdata: function(a) {
				c.cdata(a)
			},
			text: function(a, b) {
				c.text(a, b)
			},
			start: function(a, b, d) {
				if ("script" != a && "noscript" != a) {
					for (var e = 0; e < b.length; e++)
						if (0 === b[e].name.indexOf("on")) return;
					c.start(a, b, d)
				}
			},
			end: function(a) {
				"script" != a && "noscript" != a && c.end(a)
			}
		}, new tinymce.html.Schema({})).parse(b), c.getContent()
	}

	function k(a, b, c) {
		function d(a, b) {
			var c, d, e, f;
			for (c in b)
				if (e = "" + b[c], a.map[c])
					for (d = a.length; d--;) f = a[d], f.name == c && (e ? (a.map[c] = e, f.value = e) : (delete a.map[c], a.splice(d, 1)));
				else e && (a.push({
					name: c,
					value: e
				}), a.map[c] = e)
		}
		var e, f = new tinymce.html.Writer,
			g = 0;
		return new tinymce.html.SaxParser({
			validate: !1,
			allow_conditional_comments: !0,
			special: "script,noscript",
			comment: function(a) {
				f.comment(a)
			},
			cdata: function(a) {
				f.cdata(a)
			},
			text: function(a, b) {
				f.text(a, b)
			},
			start: function(a, h, i) {
				switch (a) {
					case "video":
					case "object":
					case "embed":
					case "img":
					case "iframe":
						d(h, {
							width: b.width,
							height: b.height
						})
				}
				if (c) switch (a) {
					case "video":
						d(h, {
							poster: b.poster,
							src: ""
						}), b.source2 && d(h, {
							src: ""
						});
						break;
					case "iframe":
						d(h, {
							src: b.source1
						});
						break;
					case "source":
						if (g++, 2 >= g && (d(h, {
							src: b["source" + g],
							type: b["source" + g + "mime"]
						}), !b["source" + g])) return;
						break;
					case "img":
						if (!b.poster) return;
						e = !0
				}
				f.start(a, h, i)
			},
			end: function(a) {
				if ("video" == a && c)
					for (var h = 1; 2 >= h; h++)
						if (b["source" + h]) {
							var i = [];
							i.map = {}, h > g && (d(i, {
								src: b["source" + h],
								type: b["source" + h + "mime"]
							}), f.start("source", i, !0))
						}
				if (b.poster && "object" == a && c && !e) {
					var j = [];
					j.map = {}, d(j, {
						src: b.poster,
						width: b.width,
						height: b.height
					}), f.start("img", j, !0)
				}
				f.end(a)
			}
		}, new tinymce.html.Schema({})).parse(a), f.getContent()
	}
	var l = [{
			regex: /youtu\.be\/([\w\-.]+)/,
			type: "iframe",
			w: 425,
			h: 350,
			url: "//www.youtube.com/embed/$1"
		}, {
			regex: /youtube\.com(.+)v=([^&]+)/,
			type: "iframe",
			w: 425,
			h: 350,
			url: "//www.youtube.com/embed/$2"
		}, {
			regex: /vimeo\.com\/([0-9]+)/,
			type: "iframe",
			w: 425,
			h: 350,
			url: "//player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc"
		}, {
			regex: /vimeo\.com\/(.*)\/([0-9]+)/,
			type: "iframe",
			w: 425,
			h: 350,
			url: "//player.vimeo.com/video/$2?title=0&amp;byline=0"
		}, {
			regex: /maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,
			type: "iframe",
			w: 425,
			h: 350,
			url: '//maps.google.com/maps/ms?msid=$2&output=embed"'
		}],
		m = tinymce.Env.ie && tinymce.Env.ie <= 8 ? "onChange" : "onInput";
	a.on("ResolveName", function(a) {
		var b;
		1 == a.target.nodeType && (b = a.target.getAttribute("data-mce-object")) && (a.name = b)
	}), a.on("preInit", function() {
		var b = a.schema.getSpecialElements();
		tinymce.each("video audio iframe object".split(" "), function(a) {
			b[a] = new RegExp("</" + a + "[^>]*>", "gi")
		});
		var c = a.schema.getBoolAttrs();
		tinymce.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "), function(a) {
			c[a] = {}
		}), a.parser.addNodeFilter("iframe,video,audio,object,embed,script", function(b, c) {
			for (var e, f, g, h, i, j, k, l, m = b.length; m--;)
				if (f = b[m], f.parent && ("script" != f.name || (l = d(f.attr("src"))))) {
					for (g = new tinymce.html.Node("img", 1), g.shortEnded = !0, l && (l.width && f.attr("width", l.width.toString()), l.height && f.attr("height", l.height.toString())), j = f.attributes, e = j.length; e--;) h = j[e].name, i = j[e].value, "width" !== h && "height" !== h && "style" !== h && (("data" == h || "src" == h) && (i = a.convertURL(i, h)), g.attr("data-mce-p-" + h, i));
					k = f.firstChild && f.firstChild.value, k && (g.attr("data-mce-html", escape(k)), g.firstChild = null), g.attr({
						width: f.attr("width") || "300",
						height: f.attr("height") || ("audio" == c ? "30" : "150"),
						style: f.attr("style"),
						src: tinymce.Env.transparentSrc,
						"data-mce-object": c,
						"class": "mce-object mce-object-" + c
					}), f.replace(g)
				}
		}), a.serializer.addAttributeFilter("data-mce-object", function(a, b) {
			for (var c, d, e, f, g, h, i, k = a.length; k--;)
				if (c = a[k], c.parent) {
					for (i = c.attr(b), d = new tinymce.html.Node(i, 1), "audio" != i && "script" != i && d.attr({
						width: c.attr("width"),
						height: c.attr("height")
					}), d.attr({
						style: c.attr("style")
					}), f = c.attributes, e = f.length; e--;) {
						var l = f[e].name;
						0 === l.indexOf("data-mce-p-") && d.attr(l.substr(11), f[e].value)
					}
					"script" == i && d.attr("type", "text/javascript"), g = c.attr("data-mce-html"), g && (h = new tinymce.html.Node("#text", 3), h.raw = !0, h.value = j(unescape(g)), d.append(h)), c.replace(d)
				}
		})
	}), a.on("ObjectSelected", function(a) {
		var b = a.target.getAttribute("data-mce-object");
		("audio" == b || "script" == b) && a.preventDefault()
	}), a.on("objectResized", function(a) {
		var b, c = a.target;
		c.getAttribute("data-mce-object") && (b = c.getAttribute("data-mce-html"), b && (b = unescape(b), c.setAttribute("data-mce-html", escape(k(b, {
			width: a.width,
			height: a.height
		})))))
	}), a.addButton("media", {
		tooltip: "Insert/edit video",
		onclick: e,
		stateSelector: ["img[data-mce-object=video]", "img[data-mce-object=iframe]"]
	}), a.addMenuItem("media", {
		icon: "media",
		text: "Insert video",
		onclick: e,
		context: "insert",
		prependToContext: !0
	})
});
tinymce.PluginManager.add("nonbreaking", function(a) {
	var b = a.getParam("nonbreaking_force_tab");
	if (a.addCommand("mceNonBreaking", function() {
		a.insertContent(a.plugins.visualchars && a.plugins.visualchars.state ? '<span class="mce-nbsp">&nbsp;</span>' : "&nbsp;"), a.dom.setAttrib(a.dom.select("span.mce-nbsp"), "data-mce-bogus", "1")
	}), a.addButton("nonbreaking", {
		title: "Nonbreaking space",
		cmd: "mceNonBreaking"
	}), a.addMenuItem("nonbreaking", {
		text: "Nonbreaking space",
		cmd: "mceNonBreaking",
		context: "insert"
	}), b) {
		var c = +b > 1 ? +b : 3;
		a.on("keydown", function(b) {
			if (9 == b.keyCode) {
				if (b.shiftKey) return;
				b.preventDefault();
				for (var d = 0; c > d; d++) a.execCommand("mceNonBreaking")
			}
		})
	}
});
tinymce.PluginManager.add("noneditable", function(a) {
	function b(a) {
		var b;
		if (1 === a.nodeType) {
			if (b = a.getAttribute(k), b && "inherit" !== b) return b;
			if (b = a.contentEditable, "inherit" !== b) return b
		}
		return null
	}

	function c(a) {
		for (var c; a;) {
			if (c = b(a)) return "false" === c ? a : null;
			a = a.parentNode
		}
	}

	function d() {
		function d(a) {
			for (; a;) {
				if (a.id === n) return a;
				a = a.parentNode
			}
		}

		function e(a) {
			var b;
			if (a)
				for (b = new i(a, a), a = b.current(); a; a = b.next())
					if (3 === a.nodeType) return a
		}

		function f(c, d) {
			var e, f;
			return "false" === b(c) && k.isBlock(c) ? void m.select(c) : (f = k.createRng(), "true" === b(c) && (c.firstChild || c.appendChild(a.getDoc().createTextNode("\xa0")), c = c.firstChild, d = !0), e = k.create("span", {
				id: n,
				"data-mce-bogus": !0
			}, o), d ? c.parentNode.insertBefore(e, c) : k.insertAfter(e, c), f.setStart(e.firstChild, 1), f.collapse(!0), m.setRng(f), e)
		}

		function g(a) {
			var b, c, f, g;
			if (a) b = m.getRng(!0), b.setStartBefore(a), b.setEndBefore(a), c = e(a), c && c.nodeValue.charAt(0) == o && (c = c.deleteData(0, 1)), k.remove(a, !0), m.setRng(b);
			else
				for (f = d(m.getStart());
					(a = k.get(n)) && a !== g;) f !== a && (c = e(a), c && c.nodeValue.charAt(0) == o && (c = c.deleteData(0, 1)), k.remove(a, !0)), g = a
		}

		function h() {
			function a(a, c) {
				var d, e, f, g, h;
				if (d = j.startContainer, e = j.startOffset, 3 == d.nodeType) {
					if (h = d.nodeValue.length, e > 0 && h > e || (c ? e == h : 0 === e)) return
				} else {
					if (!(e < d.childNodes.length)) return c ? null : a;
					var k = !c && e > 0 ? e - 1 : e;
					d = d.childNodes[k], d.hasChildNodes() && (d = d.firstChild)
				}
				for (f = new i(d, a); g = f[c ? "prev" : "next"]();) {
					if (3 === g.nodeType && g.nodeValue.length > 0) return;
					if ("true" === b(g)) return g
				}
				return a
			}
			var d, e, h, j, k;
			g(), h = m.isCollapsed(), d = c(m.getStart()), e = c(m.getEnd()), (d || e) && (j = m.getRng(!0), h ? (d = d || e, (k = a(d, !0)) ? f(k, !0) : (k = a(d, !1)) ? f(k, !1) : m.select(d)) : (j = m.getRng(!0), d && j.setStartBefore(d), e && j.setEndAfter(e), m.setRng(j)))
		}

		function j(e) {
			function f(a, b) {
				for (; a = a[b ? "previousSibling" : "nextSibling"];)
					if (3 !== a.nodeType || a.nodeValue.length > 0) return a
			}

			function j(a, b) {
				m.select(a), m.collapse(b)
			}

			function n(e) {
				function f(a) {
					for (var b = j; b;) {
						if (b === a) return;
						b = b.parentNode
					}
					k.remove(a), h()
				}

				function g() {
					var d, g, h = a.schema.getNonEmptyElements();
					for (g = new tinymce.dom.TreeWalker(j, a.getBody());
						(d = e ? g.prev() : g.next()) && !h[d.nodeName.toLowerCase()] && !(3 === d.nodeType && tinymce.trim(d.nodeValue).length > 0);)
						if ("false" === b(d)) return f(d), !0;
					return c(d) ? !0 : !1
				}
				var i, j, l, n;
				if (m.isCollapsed()) {
					if (i = m.getRng(!0), j = i.startContainer, l = i.startOffset, j = d(j) || j, n = c(j)) return f(n), !1;
					if (3 == j.nodeType && (e ? l > 0 : l < j.nodeValue.length)) return !0;
					if (1 == j.nodeType && (j = j.childNodes[l] || j), g()) return !1
				}
				return !0
			}
			var o, p, q, r, s = e.keyCode;
			if (q = m.getStart(), r = m.getEnd(), o = c(q) || c(r), o && (112 > s || s > 124) && s != l.DELETE && s != l.BACKSPACE) {
				if ((tinymce.isMac ? e.metaKey : e.ctrlKey) && (67 == s || 88 == s || 86 == s)) return;
				if (e.preventDefault(), s == l.LEFT || s == l.RIGHT) {
					var t = s == l.LEFT;
					if (a.dom.isBlock(o)) {
						var u = t ? o.previousSibling : o.nextSibling,
							v = new i(u, u),
							w = t ? v.prev() : v.next();
						j(w, !t)
					} else j(o, t)
				}
			} else if (s == l.LEFT || s == l.RIGHT || s == l.BACKSPACE || s == l.DELETE) {
				if (p = d(q)) {
					if (s == l.LEFT || s == l.BACKSPACE)
						if (o = f(p, !0), o && "false" === b(o)) {
							if (e.preventDefault(), s != l.LEFT) return void k.remove(o);
							j(o, !0)
						} else g(p);
					if (s == l.RIGHT || s == l.DELETE)
						if (o = f(p), o && "false" === b(o)) {
							if (e.preventDefault(), s != l.RIGHT) return void k.remove(o);
							j(o, !1)
						} else g(p)
				}
				if ((s == l.BACKSPACE || s == l.DELETE) && !n(s == l.BACKSPACE)) return e.preventDefault(), !1
			}
		}
		var k = a.dom,
			m = a.selection,
			n = "mce_noneditablecaret",
			o = "\ufeff";
		a.on("mousedown", function(c) {
			var d = a.selection.getNode();
			"false" === b(d) && d == c.target && h()
		}), a.on("mouseup keyup", h), a.on("keydown", j)
	}

	function e(b) {
		var c = h.length,
			d = b.content,
			e = tinymce.trim(g);
		if ("raw" != b.format) {
			for (; c--;) d = d.replace(h[c], function(b) {
				var c = arguments,
					f = c[c.length - 2];
				return f > 0 && '"' == d.charAt(f - 1) ? b : '<span class="' + e + '" data-mce-content="' + a.dom.encode(c[0]) + '">' + a.dom.encode("string" == typeof c[1] ? c[1] : c[0]) + "</span>"
			});
			b.content = d
		}
	}
	var f, g, h, i = tinymce.dom.TreeWalker,
		j = "contenteditable",
		k = "data-mce-" + j,
		l = tinymce.util.VK;
	f = " " + tinymce.trim(a.getParam("noneditable_editable_class", "mceEditable")) + " ", g = " " + tinymce.trim(a.getParam("noneditable_noneditable_class", "mceNonEditable")) + " ", h = a.getParam("noneditable_regexp"), h && !h.length && (h = [h]), a.on("PreInit", function() {
		d(), h && a.on("BeforeSetContent", e), a.parser.addAttributeFilter("class", function(a) {
			for (var b, c, d = a.length; d--;) c = a[d], b = " " + c.attr("class") + " ", -1 !== b.indexOf(f) ? c.attr(k, "true") : -1 !== b.indexOf(g) && c.attr(k, "false")
		}), a.serializer.addAttributeFilter(k, function(a) {
			for (var b, c = a.length; c--;) b = a[c], h && b.attr("data-mce-content") ? (b.name = "#text", b.type = 3, b.raw = !0, b.value = b.attr("data-mce-content")) : (b.attr(j, null), b.attr(k, null))
		}), a.parser.addAttributeFilter(j, function(a) {
			for (var b, c = a.length; c--;) b = a[c], b.attr(k, b.attr(j)), b.attr(j, null)
		})
	}), a.on("drop", function(a) {
		c(a.target) && a.preventDefault()
	})
});
tinymce.PluginManager.add("pagebreak", function(a) {
	var b = "mce-pagebreak",
		c = a.getParam("pagebreak_separator", "<!-- pagebreak -->"),
		d = new RegExp(c.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g, function(a) {
			return "\\" + a
		}), "gi"),
		e = '<img src="' + tinymce.Env.transparentSrc + '" class="' + b + '" data-mce-resize="false" />';
	a.addCommand("mcePageBreak", function() {
		a.insertContent(a.settings.pagebreak_split_block ? "<p>" + e + "</p>" : e)
	}), a.addButton("pagebreak", {
		title: "Page break",
		cmd: "mcePageBreak"
	}), a.addMenuItem("pagebreak", {
		text: "Page break",
		icon: "pagebreak",
		cmd: "mcePageBreak",
		context: "insert"
	}), a.on("ResolveName", function(c) {
		"IMG" == c.target.nodeName && a.dom.hasClass(c.target, b) && (c.name = "pagebreak")
	}), a.on("click", function(c) {
		c = c.target, "IMG" === c.nodeName && a.dom.hasClass(c, b) && a.selection.select(c)
	}), a.on("BeforeSetContent", function(a) {
		a.content = a.content.replace(d, e)
	}), a.on("PreInit", function() {
		a.serializer.addNodeFilter("img", function(b) {
			for (var d, e, f = b.length; f--;)
				if (d = b[f], e = d.attr("class"), e && -1 !== e.indexOf("mce-pagebreak")) {
					var g = d.parent;
					if (a.schema.getBlockElements()[g.name] && a.settings.pagebreak_split_block) {
						g.type = 3, g.value = c, g.raw = !0, d.remove();
						continue
					}
					d.type = 3, d.value = c, d.raw = !0
				}
		})
	})
});
! function(a, b) {
	"use strict";

	function c(a, b) {
		for (var c, d = [], f = 0; f < a.length; ++f) {
			if (c = g[a[f]] || e(a[f]), !c) throw "module definition dependecy not found: " + a[f];
			d.push(c)
		}
		b.apply(null, d)
	}

	function d(a, d, e) {
		if ("string" != typeof a) throw "invalid module definition, module id must be defined and be a string";
		if (d === b) throw "invalid module definition, dependencies must be specified";
		if (e === b) throw "invalid module definition, definition function must be specified";
		c(d, function() {
			g[a] = e.apply(null, arguments)
		})
	}

	function e(b) {
		for (var c = a, d = b.split(/[.\/]/), e = 0; e < d.length; ++e) {
			if (!c[d[e]]) return;
			c = c[d[e]]
		}
		return c
	}

	function f(c) {
		for (var d = 0; d < c.length; d++) {
			for (var e = a, f = c[d], h = f.split(/[.\/]/), i = 0; i < h.length - 1; ++i) e[h[i]] === b && (e[h[i]] = {}), e = e[h[i]];
			e[h[h.length - 1]] = g[f]
		}
	}
	var g = {};
	d("tinymce/pasteplugin/Utils", ["tinymce/util/Tools", "tinymce/html/DomParser", "tinymce/html/Schema"], function(a, b, c) {
		function d(b, c) {
			return a.each(c, function(a) {
				b = a.constructor == RegExp ? b.replace(a, "") : b.replace(a[0], a[1])
			}), b
		}

		function e(e) {
			function f(a) {
				var b = a.name,
					c = a;
				if ("br" === b) return void(i += "\n");
				if (j[b] && (i += " "), k[b]) return void(i += " ");
				if (3 == a.type && (i += a.value), !a.shortEnded && (a = a.firstChild))
					do f(a); while (a = a.next);
				l[b] && c.next && (i += "\n", "p" == b && (i += "\n"))
			}
			var g = new c,
				h = new b({}, g),
				i = "",
				j = g.getShortEndedElements(),
				k = a.makeMap("script noscript style textarea video audio iframe object", " "),
				l = g.getBlockElements();
			return e = d(e, [/<!\[[^\]]+\]>/g]), f(h.parse(e)), i
		}

		function f(a) {
			function b(a, b, c) {
				return b || c ? "\xa0" : " "
			}
			return a = d(a, [/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/g, /<!--StartFragment-->|<!--EndFragment-->/g, [/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g, b], /<br>$/i])
		}
		return {
			filter: d,
			innerText: e,
			trimHtml: f
		}
	}), d("tinymce/pasteplugin/Clipboard", ["tinymce/Env", "tinymce/util/VK", "tinymce/pasteplugin/Utils"], function(a, b, c) {
		return function(d) {
			function e(a) {
				var b, c = d.dom;
				if (b = d.fire("BeforePastePreProcess", {
					content: a
				}), b = d.fire("PastePreProcess", b), a = b.content, !b.isDefaultPrevented()) {
					if (d.hasEventListeners("PastePostProcess") && !b.isDefaultPrevented()) {
						var e = c.add(d.getBody(), "div", {
							style: "display:none"
						}, a);
						b = d.fire("PastePostProcess", {
							node: e
						}), c.remove(e), a = b.node.innerHTML
					}
					b.isDefaultPrevented() || d.insertContent(a, {
						merge: d.settings.paste_merge_formats !== !1
					})
				}
			}

			function f(a) {
				a = d.dom.encode(a).replace(/\r\n/g, "\n");
				var b, f = d.dom.getParent(d.selection.getStart(), d.dom.isBlock),
					g = d.settings.forced_root_block;
				g && (b = d.dom.createHTML(g, d.settings.forced_root_block_attrs), b = b.substr(0, b.length - 3) + ">"), f && /^(PRE|DIV)$/.test(f.nodeName) || !g ? a = c.filter(a, [
					[/\n/g, "<br>"]
				]) : (a = c.filter(a, [
					[/\n\n/g, "</p>" + b],
					[/^(.*<\/p>)(<p>)$/, b + "$1"],
					[/\n/g, "<br />"]
				]), -1 != a.indexOf("<p>") && (a = b + a)), e(a)
			}

			function g() {
				function b(a) {
					var b, c, d, f = a.startContainer;
					if (b = a.getClientRects(), b.length) return b[0];
					if (a.collapsed && 1 == f.nodeType) {
						for (d = f.childNodes[s.startOffset]; d && 3 == d.nodeType && !d.data.length;) d = d.nextSibling;
						if (d) return "BR" == d.tagName && (c = e.doc.createTextNode("\ufeff"), d.parentNode.insertBefore(c, d), a = e.createRng(), a.setStartBefore(c), a.setEndAfter(c), b = a.getClientRects(), e.remove(c)), b.length ? b[0] : void 0
					}
				}
				var c, e = d.dom,
					f = d.getBody(),
					g = d.dom.getViewPort(d.getWin()),
					h = g.y,
					i = 20;
				if (s = d.selection.getRng(), d.inline && (c = d.selection.getScrollContainer(), c && c.scrollTop > 0 && (h = c.scrollTop)), s.getClientRects) {
					var j = b(s);
					if (j) i = h + (j.top - e.getPos(f).y);
					else {
						i = h;
						var k = s.startContainer;
						k && (3 == k.nodeType && k.parentNode != f && (k = k.parentNode), 1 == k.nodeType && (i = e.getPos(k, c || f).y))
					}
				}
				r = e.add(d.getBody(), "div", {
					id: "mcepastebin",
					contentEditable: !0,
					"data-mce-bogus": "all",
					style: "position: absolute; top: " + i + "px;width: 10px; height: 10px; overflow: hidden; opacity: 0"
				}, x), (a.ie || a.gecko) && e.setStyle(r, "left", "rtl" == e.getStyle(f, "direction", !0) ? 65535 : -65535), e.bind(r, "beforedeactivate focusin focusout", function(a) {
					a.stopPropagation()
				}), r.focus(), d.selection.select(r, !0)
			}

			function h() {
				if (r) {
					for (var a; a = d.dom.get("mcepastebin");) d.dom.remove(a), d.dom.unbind(a);
					s && d.selection.setRng(s)
				}
				r = s = null
			}

			function i() {
				var a, b, c, e, f = "";
				for (a = d.dom.select("div[id=mcepastebin]"), b = 0; b < a.length; b++) c = a[b], c.firstChild && "mcepastebin" == c.firstChild.id && (c = c.firstChild), e = c.innerHTML, f != x && (f += e);
				return f
			}

			function j(a) {
				var b = {};
				if (a) {
					if (a.getData) {
						var c = a.getData("Text");
						c && c.length > 0 && (b["text/plain"] = c)
					}
					if (a.types)
						for (var d = 0; d < a.types.length; d++) {
							var e = a.types[d];
							b[e] = a.getData(e)
						}
				}
				return b
			}

			function k(a) {
				return j(a.clipboardData || d.getDoc().dataTransfer)
			}

			function l(a, b) {
				function c(c) {
					function f() {
						b && (d.selection.setRng(b), b = null), e('<img src="' + i.result + '">')
					}
					var g, h, i;
					if (c)
						for (g = 0; g < c.length; g++)
							if (h = c[g], /^image\/(jpeg|png|gif)$/.test(h.type)) return i = new FileReader, i.onload = f, i.readAsDataURL(h.getAsFile ? h.getAsFile() : h), a.preventDefault(), !0
				}
				var f = a.clipboardData || a.dataTransfer;
				return d.settings.paste_data_images && f ? c(f.items) || c(f.files) : void 0
			}

			function m(a) {
				var b = a.clipboardData;
				return -1 != navigator.userAgent.indexOf("Android") && b && b.items && 0 === b.items.length
			}

			function n(a) {
				var b, c, e = d.getDoc();
				if (e.caretPositionFromPoint) c = e.caretPositionFromPoint(a.clientX, a.clientY), b = e.createRange(), b.setStart(c.offsetNode, c.offset), b.collapse(!0);
				else if (e.caretRangeFromPoint) b = e.caretRangeFromPoint(a.clientX, a.clientY);
				else if (e.body.createTextRange) {
					b = e.body.createTextRange();
					try {
						b.moveToPoint(a.clientX, a.clientY), b.collapse(!0)
					} catch (f) {
						b.collapse(a.clientY < e.body.clientHeight)
					}
				}
				return b
			}

			function o(a, b) {
				return b in a && a[b].length > 0
			}

			function p(a) {
				return b.metaKeyPressed(a) && 86 == a.keyCode || a.shiftKey && 45 == a.keyCode
			}

			function q() {
				d.on("keydown", function(b) {
					function c(a) {
						p(a) && !a.isDefaultPrevented() && h()
					}
					if (p(b) && !b.isDefaultPrevented()) {
						if (t = b.shiftKey && 86 == b.keyCode, t && a.webkit && -1 != navigator.userAgent.indexOf("Version/")) return;
						if (b.stopImmediatePropagation(), v = (new Date).getTime(), a.ie && t) return b.preventDefault(), void d.fire("paste", {
							ieFake: !0
						});
						h(), g(), d.once("keyup", c), d.once("paste", function() {
							d.off("keyup", c)
						})
					}
				}), d.on("paste", function(b) {
					var j = (new Date).getTime(),
						n = k(b),
						p = (new Date).getTime() - j,
						q = (new Date).getTime() - v - p < 1e3,
						s = "text" == u.pasteFormat || t;
					return t = !1, b.isDefaultPrevented() || m(b) ? void h() : l(b) ? void h() : (q || b.preventDefault(), !a.ie || q && !b.ieFake || (g(), d.dom.bind(r, "paste", function(a) {
						a.stopPropagation()
					}), d.getDoc().execCommand("Paste", !1, null), n["text/html"] = i()), void setTimeout(function() {
						var a;
						return o(n, "text/html") ? a = n["text/html"] : (a = i(), a == x && (s = !0)), a = c.trimHtml(a), r && r.firstChild && "mcepastebin" === r.firstChild.id && (s = !0), h(), a.length || (s = !0), s && (a = o(n, "text/plain") && -1 == a.indexOf("</p>") ? n["text/plain"] : c.innerText(a)), a == x ? void(q || d.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents.")) : void(s ? f(a) : e(a))
					}, 0))
				}), d.on("dragstart dragend", function(a) {
					w = "dragstart" == a.type
				}), d.on("drop", function(a) {
					var b = n(a);
					if (!a.isDefaultPrevented() && !w && !l(a, b) && b && d.settings.paste_filter_drop !== !1) {
						var g = j(a.dataTransfer),
							h = g["mce-internal"] || g["text/html"] || g["text/plain"];
						h && (a.preventDefault(), d.undoManager.transact(function() {
							g["mce-internal"] && d.execCommand("Delete"), d.selection.setRng(b), h = c.trimHtml(h), g["text/html"] ? e(h) : f(h)
						}))
					}
				}), d.on("dragover dragend", function(a) {
					var b, c = a.dataTransfer;
					if (d.settings.paste_data_images && c)
						for (b = 0; b < c.types.length; b++)
							if ("Files" == c.types[b]) return a.preventDefault(), !1
				})
			}
			var r, s, t, u = this,
				v = 0,
				w = !1,
				x = "%MCEPASTEBIN%";
			u.pasteHtml = e, u.pasteText = f, d.on("preInit", function() {
				q(), d.parser.addNodeFilter("img", function(b) {
					if (!d.settings.paste_data_images)
						for (var c = b.length; c--;) {
							var e = b[c].attributes.map.src;
							e && /^(data:image|webkit\-fake\-url)/.test(e) && (b[c].attr("data-mce-object") || e === a.transparentSrc || b[c].remove())
						}
				})
			})
		}
	}), d("tinymce/pasteplugin/WordFilter", ["tinymce/util/Tools", "tinymce/html/DomParser", "tinymce/html/Schema", "tinymce/html/Serializer", "tinymce/html/Node", "tinymce/pasteplugin/Utils"], function(a, b, c, d, e, f) {
		function g(a) {
			return /<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(a) || /class="OutlineElement/.test(a) || /id="?docs\-internal\-guid\-/.test(a)
		}

		function h(b) {
			var c, d;
			return d = [/^[IVXLMCD]{1,2}\.[ \u00a0]/, /^[ivxlmcd]{1,2}\.[ \u00a0]/, /^[a-z]{1,2}[\.\)][ \u00a0]/, /^[A-Z]{1,2}[\.\)][ \u00a0]/, /^[0-9]+\.[ \u00a0]/, /^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/, /^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/], b = b.replace(/^[\u00a0 ]+/, ""), a.each(d, function(a) {
				return a.test(b) ? (c = !0, !1) : void 0
			}), c
		}

		function i(a) {
			return /^[\s\u00a0]*[\u2022\u00b7\u00a7\u00d8\u25CF]\s*/.test(a)
		}

		function j(j) {
			var k = j.settings;
			j.on("BeforePastePreProcess", function(l) {
				function m(a) {
					function b(a) {
						var c = "";
						if (3 === a.type) return a.value;
						if (a = a.firstChild)
							do c += b(a); while (a = a.next);
						return c
					}

					function c(a, b) {
						if (3 === a.type && b.test(a.value)) return a.value = a.value.replace(b, ""), !1;
						if (a = a.firstChild)
							do
								if (!c(a, b)) return !1;
						while (a = a.next);
						return !0
					}

					function d(a) {
						if (a._listIgnore) return void a.remove();
						if (a = a.firstChild)
							do d(a); while (a = a.next)
					}

					function f(a, b, f) {
						var h = a._listLevel || k;
						h != k && (k > h ? g && (g = g.parent.parent) : (j = g, g = null)), g && g.name == b ? g.append(a) : (j = j || g, g = new e(b, 1), f > 1 && g.attr("start", "" + f), a.wrap(g)), a.name = "li", h > k && j && j.lastChild.append(g), k = h, d(a), c(a, /^\u00a0+/), c(a, /^\s*([\u2022\u00b7\u00a7\u00d8\u25CF]|\w+\.)/), c(a, /^\u00a0+/)
					}
					for (var g, j, k = 1, l = [], m = a.firstChild;
						"undefined" != typeof m && null !== m;)
						if (l.push(m), m = m.walk(), null !== m)
							for (;
								"undefined" != typeof m && m.parent !== a;) m = m.walk();
					for (var n = 0; n < l.length; n++)
						if (a = l[n], "p" == a.name && a.firstChild) {
							var o = b(a);
							if (i(o)) {
								f(a, "ul");
								continue
							}
							if (h(o)) {
								var p = /([0-9]+)\./.exec(o),
									q = 1;
								p && (q = parseInt(p[1], 10)), f(a, "ol", q);
								continue
							}
							if (a._listLevel) {
								f(a, "ul", 1);
								continue
							}
							g = null
						} else j = g, g = null
				}

				function n(b, c) {
					var d, f = {},
						g = j.dom.parseStyle(c);
					return a.each(g, function(a, e) {
						switch (e) {
							case "mso-list":
								d = /\w+ \w+([0-9]+)/i.exec(c), d && (b._listLevel = parseInt(d[1], 10)), /Ignore/i.test(a) && b.firstChild && (b._listIgnore = !0, b.firstChild._listIgnore = !0);
								break;
							case "horiz-align":
								e = "text-align";
								break;
							case "vert-align":
								e = "vertical-align";
								break;
							case "font-color":
							case "mso-foreground":
								e = "color";
								break;
							case "mso-background":
							case "mso-highlight":
								e = "background";
								break;
							case "font-weight":
							case "font-style":
								return void("normal" != a && (f[e] = a));
							case "mso-element":
								if (/^(comment|comment-list)$/i.test(a)) return void b.remove()
						}
						return 0 === e.indexOf("mso-comment") ? void b.remove() : void(0 !== e.indexOf("mso-") && ("all" == o || p && p[e]) && (f[e] = a))
					}), /(bold)/i.test(f["font-weight"]) && (delete f["font-weight"], b.wrap(new e("b", 1))), /(italic)/i.test(f["font-style"]) && (delete f["font-style"], b.wrap(new e("i", 1))), f = j.dom.serializeStyle(f, b.name), f ? f : null
				}
				var o, p, q = l.content;
				if (o = k.paste_retain_style_properties, o && (p = a.makeMap(o.split(/[, ]/))), k.paste_enable_default_filters !== !1 && g(l.content)) {
					l.wordContent = !0, q = f.filter(q, [/<!--[\s\S]+?-->/gi, /<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi, [/<(\/?)s>/gi, "<$1strike>"],
						[/&nbsp;/gi, "\xa0"],
						[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,
							function(a, b) {
								return b.length > 0 ? b.replace(/./, " ").slice(Math.floor(b.length / 2)).split("").join("\xa0") : ""
							}
						]
					]);
					var r = k.paste_word_valid_elements;
					r || (r = "-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody");
					var s = new c({
						valid_elements: r,
						valid_children: "-li[p]"
					});
					a.each(s.elements, function(a) {
						a.attributes["class"] || (a.attributes["class"] = {}, a.attributesOrder.push("class")), a.attributes.style || (a.attributes.style = {}, a.attributesOrder.push("style"))
					});
					var t = new b({}, s);
					t.addAttributeFilter("style", function(a) {
						for (var b, c = a.length; c--;) b = a[c], b.attr("style", n(b, b.attr("style"))), "span" == b.name && b.parent && !b.attributes.length && b.unwrap()
					}), t.addAttributeFilter("class", function(a) {
						for (var b, c, d = a.length; d--;) b = a[d], c = b.attr("class"), /^(MsoCommentReference|MsoCommentText|msoDel|MsoCaption)$/i.test(c) && b.remove(), b.attr("class", null)
					}), t.addNodeFilter("del", function(a) {
						for (var b = a.length; b--;) a[b].remove()
					}), t.addNodeFilter("a", function(a) {
						for (var b, c, d, e = a.length; e--;)
							if (b = a[e], c = b.attr("href"), d = b.attr("name"), c && -1 != c.indexOf("#_msocom_")) b.remove();
							else if (c && 0 === c.indexOf("file://") && (c = c.split("#")[1], c && (c = "#" + c)), c || d) {
							if (d && !/^_?(?:toc|edn|ftn)/i.test(d)) {
								b.unwrap();
								continue
							}
							b.attr({
								href: c,
								name: d
							})
						} else b.unwrap()
					});
					var u = t.parse(q);
					m(u), l.content = new d({}, s).serialize(u)
				}
			})
		}
		return j.isWordContent = g, j
	}), d("tinymce/pasteplugin/Quirks", ["tinymce/Env", "tinymce/util/Tools", "tinymce/pasteplugin/WordFilter", "tinymce/pasteplugin/Utils"], function(a, b, c, d) {
		return function(e) {
			function f(a) {
				e.on("BeforePastePreProcess", function(b) {
					b.content = a(b.content)
				})
			}

			function g(a) {
				if (!c.isWordContent(a)) return a;
				var f = [];
				b.each(e.schema.getBlockElements(), function(a, b) {
					f.push(b)
				});
				var g = new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?(" + f.join("|") + ")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*", "g");
				return a = d.filter(a, [
					[g, "$1"]
				]), a = d.filter(a, [
					[/<br><br>/g, "<BR><BR>"],
					[/<br>/g, " "],
					[/<BR><BR>/g, "<br>"]
				])
			}

			function h(a) {
				if (c.isWordContent(a)) return a;
				var b = e.settings.paste_webkit_styles;
				if (e.settings.paste_remove_styles_if_webkit === !1 || "all" == b) return a;
				if (b && (b = b.split(/[, ]/)), b) {
					var d = e.dom,
						f = e.selection.getNode();
					a = a.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, function(a, c, e, g) {
						var h = d.parseStyle(e, "span"),
							i = {};
						if ("none" === b) return c + g;
						for (var j = 0; j < b.length; j++) {
							var k = h[b[j]],
								l = d.getStyle(f, b[j], !0);
							/color/.test(b[j]) && (k = d.toHex(k), l = d.toHex(l)), l != k && (i[b[j]] = k)
						}
						return i = d.serializeStyle(i, "span"), i ? c + ' style="' + i + '"' + g : c + g
					})
				} else a = a.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, "$1$3");
				return a = a.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi, function(a, b, c, d) {
					return b + ' style="' + c + '"' + d
				})
			}
			a.webkit && f(h), a.ie && f(g)
		}
	}), d("tinymce/pasteplugin/Plugin", ["tinymce/PluginManager", "tinymce/pasteplugin/Clipboard", "tinymce/pasteplugin/WordFilter", "tinymce/pasteplugin/Quirks"], function(a, b, c, d) {
		var e;
		a.add("paste", function(a) {
			function f() {
				"text" == g.pasteFormat ? (this.active(!1), g.pasteFormat = "html") : (g.pasteFormat = "text", this.active(!0), e || (a.windowManager.alert("Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off."), e = !0))
			}
			var g, h = this,
				i = a.settings;
			h.clipboard = g = new b(a), h.quirks = new d(a), h.wordFilter = new c(a), a.settings.paste_as_text && (h.clipboard.pasteFormat = "text"), i.paste_preprocess && a.on("PastePreProcess", function(a) {
				i.paste_preprocess.call(h, h, a)
			}), i.paste_postprocess && a.on("PastePostProcess", function(a) {
				i.paste_postprocess.call(h, h, a)
			}), a.addCommand("mceInsertClipboardContent", function(a, b) {
				b.content && h.clipboard.pasteHtml(b.content), b.text && h.clipboard.pasteText(b.text)
			}), a.paste_block_drop && a.on("dragend dragover draggesture dragdrop drop drag", function(a) {
				a.preventDefault(), a.stopPropagation()
			}), a.settings.paste_data_images || a.on("drop", function(a) {
				var b = a.dataTransfer;
				b && b.files && b.files.length > 0 && a.preventDefault()
			}), a.addButton("pastetext", {
				icon: "pastetext",
				tooltip: "Paste as text",
				onclick: f,
				active: "text" == h.clipboard.pasteFormat
			}), a.addMenuItem("pastetext", {
				text: "Paste as text",
				selectable: !0,
				active: g.pasteFormat,
				onclick: f
			})
		})
	}), f(["tinymce/pasteplugin/Utils", "tinymce/pasteplugin/WordFilter"])
}(this);
tinymce.PluginManager.add("preview", function(a) {
	var b = a.settings,
		c = !tinymce.Env.ie;
	a.addCommand("mcePreview", function() {
		a.windowManager.open({
			title: "Preview",
			width: parseInt(a.getParam("plugin_preview_width", "650"), 10),
			height: parseInt(a.getParam("plugin_preview_height", "500"), 10),
			html: '<iframe src="javascript:\'\'" frameborder="0"' + (c ? ' sandbox="allow-scripts"' : "") + "></iframe>",
			buttons: {
				text: "Close",
				onclick: function() {
					this.parent().parent().close()
				}
			},
			onPostRender: function() {
				var d, e = "";
				e += '<base href="' + a.documentBaseURI.getURI() + '">', tinymce.each(a.contentCSS, function(b) {
					e += '<link type="text/css" rel="stylesheet" href="' + a.documentBaseURI.toAbsolute(b) + '">'
				});
				var f = b.body_id || "tinymce"; - 1 != f.indexOf("=") && (f = a.getParam("body_id", "", "hash"), f = f[a.id] || f);
				var g = b.body_class || ""; - 1 != g.indexOf("=") && (g = a.getParam("body_class", "", "hash"), g = g[a.id] || "");
				var h = a.settings.directionality ? ' dir="' + a.settings.directionality + '"' : "";
				if (d = "<!DOCTYPE html><html><head>" + e + '</head><body id="' + f + '" class="mce-content-body ' + g + '"' + h + ">" + a.getContent() + "</body></html>", c) this.getEl("body").firstChild.src = "data:text/html;charset=utf-8," + encodeURIComponent(d);
				else {
					var i = this.getEl("body").firstChild.contentWindow.document;
					i.open(), i.write(d), i.close()
				}
			}
		})
	}), a.addButton("preview", {
		title: "Preview",
		cmd: "mcePreview"
	}), a.addMenuItem("preview", {
		text: "Preview",
		cmd: "mcePreview",
		context: "view"
	})
});
tinymce.PluginManager.add("print", function(a) {
	a.addCommand("mcePrint", function() {
		a.getWin().print()
	}), a.addButton("print", {
		title: "Print",
		cmd: "mcePrint"
	}), a.addShortcut("Ctrl+P", "", "mcePrint"), a.addMenuItem("print", {
		text: "Print",
		cmd: "mcePrint",
		icon: "print",
		shortcut: "Ctrl+P",
		context: "file"
	})
});
tinymce.PluginManager.add("save", function(a) {
	function b() {
		var b;
		return b = tinymce.DOM.getParent(a.id, "form"), !a.getParam("save_enablewhendirty", !0) || a.isDirty() ? (tinymce.triggerSave(), a.getParam("save_onsavecallback") ? void(a.execCallback("save_onsavecallback", a) && (a.startContent = tinymce.trim(a.getContent({
			format: "raw"
		})), a.nodeChanged())) : void(b ? (a.isNotDirty = !0, (!b.onsubmit || b.onsubmit()) && ("function" == typeof b.submit ? b.submit() : a.windowManager.alert("Error: Form submit field collision.")), a.nodeChanged()) : a.windowManager.alert("Error: No form element found."))) : void 0
	}

	function c() {
		var b = tinymce.trim(a.startContent);
		return a.getParam("save_oncancelcallback") ? void a.execCallback("save_oncancelcallback", a) : (a.setContent(b), a.undoManager.clear(), void a.nodeChanged())
	}

	function d() {
		var b = this;
		a.on("nodeChange", function() {
			b.disabled(a.getParam("save_enablewhendirty", !0) && !a.isDirty())
		})
	}
	a.addCommand("mceSave", b), a.addCommand("mceCancel", c), a.addButton("save", {
		icon: "save",
		text: "Save",
		cmd: "mceSave",
		disabled: !0,
		onPostRender: d
	}), a.addButton("cancel", {
		text: "Cancel",
		icon: !1,
		cmd: "mceCancel",
		disabled: !0,
		onPostRender: d
	}), a.addShortcut("ctrl+s", "", "mceSave")
});
! function() {
	function a(a, b, c, d, e) {
		function f(a, b) {
			if (b = b || 0, !a[0]) throw "findAndReplaceDOMText cannot handle zero-length matches";
			var c = a.index;
			if (b > 0) {
				var d = a[b];
				if (!d) throw "Invalid capture group";
				c += a[0].indexOf(d), a[0] = d
			}
			return [c, c + a[0].length, [a[0]]]
		}

		function g(a) {
			var b;
			if (3 === a.nodeType) return a.data;
			if (n[a.nodeName] && !m[a.nodeName]) return "";
			if (b = "", (m[a.nodeName] || o[a.nodeName]) && (b += "\n"), a = a.firstChild)
				do b += g(a); while (a = a.nextSibling);
			return b
		}

		function h(a, b, c) {
			var d, e, f, g, h = [],
				i = 0,
				j = a,
				k = b.shift(),
				l = 0;
			a: for (;;) {
				if ((m[j.nodeName] || o[j.nodeName]) && i++, 3 === j.nodeType && (!e && j.length + i >= k[1] ? (e = j, g = k[1] - i) : d && h.push(j), !d && j.length + i > k[0] && (d = j, f = k[0] - i), i += j.length), d && e) {
					if (j = c({
						startNode: d,
						startNodeIndex: f,
						endNode: e,
						endNodeIndex: g,
						innerNodes: h,
						match: k[2],
						matchIndex: l
					}), i -= e.length - g, d = null, e = null, h = [], k = b.shift(), l++, !k) break
				} else {
					if ((!n[j.nodeName] || m[j.nodeName]) && j.firstChild) {
						j = j.firstChild;
						continue
					}
					if (j.nextSibling) {
						j = j.nextSibling;
						continue
					}
				}
				for (;;) {
					if (j.nextSibling) {
						j = j.nextSibling;
						break
					}
					if (j.parentNode === a) break a;
					j = j.parentNode
				}
			}
		}

		function i(a) {
			var b;
			if ("function" != typeof a) {
				var c = a.nodeType ? a : l.createElement(a);
				b = function(a, b) {
					var d = c.cloneNode(!1);
					return d.setAttribute("data-mce-index", b), a && d.appendChild(l.createTextNode(a)), d
				}
			} else b = a;
			return function(a) {
				var c, d, e, f = a.startNode,
					g = a.endNode,
					h = a.matchIndex;
				if (f === g) {
					var i = f;
					e = i.parentNode, a.startNodeIndex > 0 && (c = l.createTextNode(i.data.substring(0, a.startNodeIndex)), e.insertBefore(c, i));
					var j = b(a.match[0], h);
					return e.insertBefore(j, i), a.endNodeIndex < i.length && (d = l.createTextNode(i.data.substring(a.endNodeIndex)), e.insertBefore(d, i)), i.parentNode.removeChild(i), j
				}
				c = l.createTextNode(f.data.substring(0, a.startNodeIndex)), d = l.createTextNode(g.data.substring(a.endNodeIndex));
				for (var k = b(f.data.substring(a.startNodeIndex), h), m = [], n = 0, o = a.innerNodes.length; o > n; ++n) {
					var p = a.innerNodes[n],
						q = b(p.data, h);
					p.parentNode.replaceChild(q, p), m.push(q)
				}
				var r = b(g.data.substring(0, a.endNodeIndex), h);
				return e = f.parentNode, e.insertBefore(c, f), e.insertBefore(k, f), e.removeChild(f), e = g.parentNode, e.insertBefore(r, g), e.insertBefore(d, g), e.removeChild(g), r
			}
		}
		var j, k, l, m, n, o, p = [],
			q = 0;
		if (l = b.ownerDocument, m = e.getBlockElements(), n = e.getWhiteSpaceElements(), o = e.getShortEndedElements(), k = g(b)) {
			if (a.global)
				for (; j = a.exec(k);) p.push(f(j, d));
			else j = k.match(a), p.push(f(j, d));
			return p.length && (q = p.length, h(b, p, i(c))), q
		}
	}

	function b(b) {
		function c() {
			function a() {
				e.statusbar.find("#next").disabled(!g(k + 1).length), e.statusbar.find("#prev").disabled(!g(k - 1).length)
			}

			function c() {
				tinymce.ui.MessageBox.alert("Could not find the specified string.", function() {
					e.find("#find")[0].focus()
				})
			}
			var d = {},
				e = tinymce.ui.Factory.create({
					type: "window",
					layout: "flex",
					pack: "center",
					align: "center",
					onClose: function() {
						b.focus(), j.done()
					},
					onSubmit: function(b) {
						var f, h, i, l;
						return b.preventDefault(), h = e.find("#case").checked(), l = e.find("#words").checked(), i = e.find("#find").value(), i.length ? d.text == i && d.caseState == h && d.wholeWord == l ? 0 === g(k + 1).length ? void c() : (j.next(), void a()) : (f = j.find(i, h, l), f || c(), e.statusbar.items().slice(1).disabled(0 === f), a(), void(d = {
							text: i,
							caseState: h,
							wholeWord: l
						})) : (j.done(!1), void e.statusbar.items().slice(1).disabled(!0))
					},
					buttons: [{
						text: "Find",
						onclick: function() {
							e.submit()
						}
					}, {
						text: "Replace",
						disabled: !0,
						onclick: function() {
							j.replace(e.find("#replace").value()) || (e.statusbar.items().slice(1).disabled(!0), k = -1, d = {})
						}
					}, {
						text: "Replace all",
						disabled: !0,
						onclick: function() {
							j.replace(e.find("#replace").value(), !0, !0), e.statusbar.items().slice(1).disabled(!0), d = {}
						}
					}, {
						type: "spacer",
						flex: 1
					}, {
						text: "Prev",
						name: "prev",
						disabled: !0,
						onclick: function() {
							j.prev(), a()
						}
					}, {
						text: "Next",
						name: "next",
						disabled: !0,
						onclick: function() {
							j.next(), a()
						}
					}],
					title: "Find and replace",
					items: {
						type: "form",
						padding: 20,
						labelGap: 30,
						spacing: 10,
						items: [{
							type: "textbox",
							name: "find",
							size: 40,
							label: "Find",
							value: b.selection.getNode().src
						}, {
							type: "textbox",
							name: "replace",
							size: 40,
							label: "Replace with"
						}, {
							type: "checkbox",
							name: "case",
							text: "Match case",
							label: " "
						}, {
							type: "checkbox",
							name: "words",
							text: "Whole words",
							label: " "
						}]
					}
				}).renderTo().reflow()
		}

		function d(a) {
			var b = a.getAttribute("data-mce-index");
			return "number" == typeof b ? "" + b : b
		}

		function e(c) {
			var d, e;
			return e = b.dom.create("span", {
				"data-mce-bogus": 1
			}), e.className = "mce-match-marker", d = b.getBody(), j.done(!1), a(c, d, e, !1, b.schema)
		}

		function f(a) {
			var b = a.parentNode;
			a.firstChild && b.insertBefore(a.firstChild, a), a.parentNode.removeChild(a)
		}

		function g(a) {
			var c, e = [];
			if (c = tinymce.toArray(b.getBody().getElementsByTagName("span")), c.length)
				for (var f = 0; f < c.length; f++) {
					var g = d(c[f]);
					null !== g && g.length && g === a.toString() && e.push(c[f])
				}
			return e
		}

		function h(a) {
			var c = k,
				d = b.dom;
			a = a !== !1, a ? c++ : c--, d.removeClass(g(k), "mce-match-marker-selected");
			var e = g(c);
			return e.length ? (d.addClass(g(c), "mce-match-marker-selected"), b.selection.scrollIntoView(e[0]), c) : -1
		}

		function i(a) {
			a.parentNode.removeChild(a)
		}
		var j = this,
			k = -1;
		j.init = function(a) {
			a.addMenuItem("searchreplace", {
				text: "Find and replace",
				shortcut: "Ctrl+F",
				onclick: c,
				separator: "before",
				context: "edit"
			}), a.addButton("searchreplace", {
				tooltip: "Find and replace",
				shortcut: "Ctrl+F",
				onclick: c
			}), a.addCommand("SearchReplace", c), a.shortcuts.add("Ctrl+F", "", c)
		}, j.find = function(a, b, c) {
			a = a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), a = c ? "\\b" + a + "\\b" : a;
			var d = e(new RegExp(a, b ? "g" : "gi"));
			return d && (k = -1, k = h(!0)), d
		}, j.next = function() {
			var a = h(!0); - 1 !== a && (k = a)
		}, j.prev = function() {
			var a = h(!1); - 1 !== a && (k = a)
		}, j.replace = function(a, c, e) {
			var h, l, m, n, o, p, q = k;
			for (c = c !== !1, m = b.getBody(), l = tinymce.toArray(m.getElementsByTagName("span")), h = 0; h < l.length; h++) {
				var r = d(l[h]);
				if (null !== r && r.length)
					if (n = o = parseInt(r, 10), e || n === k) {
						for (a.length ? (l[h].firstChild.nodeValue = a, f(l[h])) : i(l[h]); l[++h];)
							if (n = d(l[h]), null !== r && r.length) {
								if (n !== o) {
									h--;
									break
								}
								i(l[h])
							}
						c && q--
					} else o > k && l[h].setAttribute("data-mce-index", o - 1)
			}
			return b.undoManager.add(), k = q, c ? (p = g(q + 1).length > 0, j.next()) : (p = g(q - 1).length > 0, j.prev()), !e && p
		}, j.done = function(a) {
			var c, e, g, h;
			for (e = tinymce.toArray(b.getBody().getElementsByTagName("span")), c = 0; c < e.length; c++) {
				var i = d(e[c]);
				null !== i && i.length && (i === k.toString() && (g || (g = e[c].firstChild), h = e[c].firstChild), f(e[c]))
			}
			if (g && h) {
				var j = b.dom.createRng();
				return j.setStart(g, 0), j.setEnd(h, h.data.length), a !== !1 && b.selection.setRng(j), j
			}
		}
	}
	tinymce.PluginManager.add("searchreplace", b)
}();
! function(a, b) {
	"use strict";

	function c(a, b) {
		for (var c, d = [], f = 0; f < a.length; ++f) {
			if (c = g[a[f]] || e(a[f]), !c) throw "module definition dependecy not found: " + a[f];
			d.push(c)
		}
		b.apply(null, d)
	}

	function d(a, d, e) {
		if ("string" != typeof a) throw "invalid module definition, module id must be defined and be a string";
		if (d === b) throw "invalid module definition, dependencies must be specified";
		if (e === b) throw "invalid module definition, definition function must be specified";
		c(d, function() {
			g[a] = e.apply(null, arguments)
		})
	}

	function e(b) {
		for (var c = a, d = b.split(/[.\/]/), e = 0; e < d.length; ++e) {
			if (!c[d[e]]) return;
			c = c[d[e]]
		}
		return c
	}

	function f(c) {
		for (var d = 0; d < c.length; d++) {
			for (var e = a, f = c[d], h = f.split(/[.\/]/), i = 0; i < h.length - 1; ++i) e[h[i]] === b && (e[h[i]] = {}), e = e[h[i]];
			e[h[h.length - 1]] = g[f]
		}
	}
	var g = {};
	d("tinymce/spellcheckerplugin/DomTextMatcher", [], function() {
		return function(a, b) {
			function c(a, b) {
				if (!a[0]) throw "findAndReplaceDOMText cannot handle zero-length matches";
				return {
					start: a.index,
					end: a.index + a[0].length,
					text: a[0],
					data: b
				}
			}

			function d(a) {
				var b;
				if (3 === a.nodeType) return a.data;
				if (x[a.nodeName] && !w[a.nodeName]) return "";
				if (b = "", (w[a.nodeName] || y[a.nodeName]) && (b += "\n"), a = a.firstChild)
					do b += d(a); while (a = a.nextSibling);
				return b
			}

			function e(a, b, c) {
				var d, e, f, g, h, i = [],
					j = 0,
					k = a,
					l = 0;
				b = b.slice(0), b.sort(function(a, b) {
					return a.start - b.start
				}), h = b.shift();
				a: for (;;) {
					if ((w[k.nodeName] || y[k.nodeName]) && j++, 3 === k.nodeType && (!e && k.length + j >= h.end ? (e = k, g = h.end - j) : d && i.push(k), !d && k.length + j > h.start && (d = k, f = h.start - j), j += k.length), d && e) {
						if (k = c({
							startNode: d,
							startNodeIndex: f,
							endNode: e,
							endNodeIndex: g,
							innerNodes: i,
							match: h.text,
							matchIndex: l
						}), j -= e.length - g, d = null, e = null, i = [], h = b.shift(), l++, !h) break
					} else {
						if ((!x[k.nodeName] || w[k.nodeName]) && k.firstChild) {
							k = k.firstChild;
							continue
						}
						if (k.nextSibling) {
							k = k.nextSibling;
							continue
						}
					}
					for (;;) {
						if (k.nextSibling) {
							k = k.nextSibling;
							break
						}
						if (k.parentNode === a) break a;
						k = k.parentNode
					}
				}
			}

			function f(a) {
				function b(b, c) {
					var d = z[c];
					d.stencil || (d.stencil = a(d));
					var e = d.stencil.cloneNode(!1);
					return e.setAttribute("data-mce-index", c), b && e.appendChild(A.doc.createTextNode(b)), e
				}
				return function(a) {
					var c, d, e, f = a.startNode,
						g = a.endNode,
						h = a.matchIndex,
						i = A.doc;
					if (f === g) {
						var j = f;
						e = j.parentNode, a.startNodeIndex > 0 && (c = i.createTextNode(j.data.substring(0, a.startNodeIndex)), e.insertBefore(c, j));
						var k = b(a.match, h);
						return e.insertBefore(k, j), a.endNodeIndex < j.length && (d = i.createTextNode(j.data.substring(a.endNodeIndex)), e.insertBefore(d, j)), j.parentNode.removeChild(j), k
					}
					c = i.createTextNode(f.data.substring(0, a.startNodeIndex)), d = i.createTextNode(g.data.substring(a.endNodeIndex));
					for (var l = b(f.data.substring(a.startNodeIndex), h), m = [], n = 0, o = a.innerNodes.length; o > n; ++n) {
						var p = a.innerNodes[n],
							q = b(p.data, h);
						p.parentNode.replaceChild(q, p), m.push(q)
					}
					var r = b(g.data.substring(0, a.endNodeIndex), h);
					return e = f.parentNode, e.insertBefore(c, f), e.insertBefore(l, f), e.removeChild(f), e = g.parentNode, e.insertBefore(r, g), e.insertBefore(d, g), e.removeChild(g), r
				}
			}

			function g(a) {
				var b = a.parentNode;
				b.insertBefore(a.firstChild, a), a.parentNode.removeChild(a)
			}

			function h(b) {
				var c = a.getElementsByTagName("*"),
					d = [];
				b = "number" == typeof b ? "" + b : null;
				for (var e = 0; e < c.length; e++) {
					var f = c[e],
						g = f.getAttribute("data-mce-index");
					null !== g && g.length && (g === b || null === b) && d.push(f)
				}
				return d
			}

			function i(a) {
				for (var b = z.length; b--;)
					if (z[b] === a) return b;
				return -1
			}

			function j(a) {
				var b = [];
				return k(function(c, d) {
					a(c, d) && b.push(c)
				}), z = b, this
			}

			function k(a) {
				for (var b = 0, c = z.length; c > b && a(z[b], b) !== !1; b++);
				return this
			}

			function l(b) {
				return z.length && e(a, z, f(b)), this
			}

			function m(a, b) {
				if (v && a.global)
					for (; u = a.exec(v);) z.push(c(u, b));
				return this
			}

			function n(a) {
				var b, c = h(a ? i(a) : null);
				for (b = c.length; b--;) g(c[b]);
				return this
			}

			function o(a) {
				return z[a.getAttribute("data-mce-index")]
			}

			function p(a) {
				return h(i(a))[0]
			}

			function q(a, b, c) {
				return z.push({
					start: a,
					end: a + b,
					text: v.substr(a, b),
					data: c
				}), this
			}

			function r(a) {
				var c = h(i(a)),
					d = b.dom.createRng();
				return d.setStartBefore(c[0]), d.setEndAfter(c[c.length - 1]), d
			}

			function s(a, c) {
				var d = r(a);
				return d.deleteContents(), c.length > 0 && d.insertNode(b.dom.doc.createTextNode(c)), d
			}

			function t() {
				return z.splice(0, z.length), n(), this
			}
			var u, v, w, x, y, z = [],
				A = b.dom;
			return w = b.schema.getBlockElements(), x = b.schema.getWhiteSpaceElements(), y = b.schema.getShortEndedElements(), v = d(a), {
				text: v,
				matches: z,
				each: k,
				filter: j,
				reset: t,
				matchFromElement: o,
				elementFromMatch: p,
				find: m,
				add: q,
				wrap: l,
				unwrap: n,
				replace: s,
				rangeFromMatch: r,
				indexOf: i
			}
		}
	}), d("tinymce/spellcheckerplugin/Plugin", ["tinymce/spellcheckerplugin/DomTextMatcher", "tinymce/PluginManager", "tinymce/util/Tools", "tinymce/ui/Menu", "tinymce/dom/DOMUtils", "tinymce/util/XHR", "tinymce/util/URI", "tinymce/util/JSON"], function(a, b, c, d, e, f, g, h) {
		b.add("spellchecker", function(b, i) {
			function j() {
				return E.textMatcher || (E.textMatcher = new a(b.getBody(), b)), E.textMatcher
			}

			function k(a, b) {
				var d = [];
				return c.each(b, function(a) {
					d.push({
						selectable: !0,
						text: a.name,
						data: a.value
					})
				}), d
			}

			function l(a) {
				for (var b in a) return !1;
				return !0
			}

			function m(a, f) {
				var g = [],
					h = A[a];
				c.each(h, function(a) {
					g.push({
						text: a,
						onclick: function() {
							b.insertContent(b.dom.encode(a)), b.dom.remove(f), r()
						}
					})
				}), g.push({
					text: "-"
				}), D && g.push({
					text: "Add to Dictionary",
					onclick: function() {
						s(a, f)
					}
				}), g.push.apply(g, [{
					text: "Ignore",
					onclick: function() {
						t(a, f)
					}
				}, {
					text: "Ignore all",
					onclick: function() {
						t(a, f, !0)
					}
				}]), C = new d({
					items: g,
					context: "contextmenu",
					onautohide: function(a) {
						-1 != a.target.className.indexOf("spellchecker") && a.preventDefault()
					},
					onhide: function() {
						C.remove(), C = null
					}
				}), C.renderTo(document.body);
				var i = e.DOM.getPos(b.getContentAreaContainer()),
					j = b.dom.getPos(f[0]),
					k = b.dom.getRoot();
				"BODY" == k.nodeName ? (j.x -= k.ownerDocument.documentElement.scrollLeft || k.scrollLeft, j.y -= k.ownerDocument.documentElement.scrollTop || k.scrollTop) : (j.x -= k.scrollLeft, j.y -= k.scrollTop), i.x += j.x, i.y += j.y, C.moveTo(i.x, i.y + f[0].offsetHeight)
			}

			function n() {
				return b.getParam("spellchecker_wordchar_pattern") || new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`\xa7\xa9\xab\xae\xb1\xb6\xb7\xb8\xbb\xbc\xbd\xbe\xbf\xd7\xf7\xa4\u201d\u201c\u201e\xa0\u2002\u2003\u2009]+', "g")
			}

			function o(a, b, d, e) {
				var j = {
						method: a
					},
					k = "";
				"spellcheck" == a && (j.text = b, j.lang = F.spellchecker_language), "addToDictionary" == a && (j.word = b), c.each(j, function(a, b) {
					k && (k += "&"), k += b + "=" + encodeURIComponent(a)
				}), f.send({
					url: new g(i).toAbsolute(F.spellchecker_rpc_url),
					type: "post",
					content_type: "application/x-www-form-urlencoded",
					data: k,
					success: function(a) {
						a = h.parse(a), a ? a.error ? e(a.error) : d(a) : e("Sever response wasn't proper JSON.")
					},
					error: function(a, b) {
						e("Spellchecker request error: " + b.status)
					}
				})
			}

			function p(a, b, c, d) {
				var e = F.spellchecker_callback || o;
				e.call(E, a, b, c, d)
			}

			function q() {
				function a(a) {
					b.windowManager.alert(a), b.setProgressState(!1), u()
				}
				return B ? void u() : (u(), b.setProgressState(!0), p("spellcheck", j().text, y, a), void b.focus())
			}

			function r() {
				b.dom.select("span.mce-spellchecker-word").length || u()
			}

			function s(a, c) {
				b.setProgressState(!0), p("addToDictionary", a, function() {
					b.setProgressState(!1), b.dom.remove(c, !0), r()
				}, function(a) {
					b.windowManager.alert(a), b.setProgressState(!1)
				})
			}

			function t(a, d, e) {
				b.selection.collapse(), e ? c.each(b.dom.select("span.mce-spellchecker-word"), function(c) {
					c.getAttribute("data-mce-word") == a && b.dom.remove(c, !0)
				}) : b.dom.remove(d, !0), r()
			}

			function u() {
				j().reset(), E.textMatcher = null, B && (B = !1, b.fire("SpellcheckEnd"))
			}

			function v(a) {
				var b = a.getAttribute("data-mce-index");
				return "number" == typeof b ? "" + b : b
			}

			function w(a) {
				var d, e = [];
				if (d = c.toArray(b.getBody().getElementsByTagName("span")), d.length)
					for (var f = 0; f < d.length; f++) {
						var g = v(d[f]);
						null !== g && g.length && g === a.toString() && e.push(d[f])
					}
				return e
			}

			function x(a) {
				var b = F.spellchecker_language;
				a.control.items().each(function(a) {
					a.active(a.settings.data === b)
				})
			}

			function y(a) {
				var c;
				return a.words ? (D = !!a.dictionary, c = a.words) : c = a, b.setProgressState(!1), l(c) ? (b.windowManager.alert("No misspellings found"), void(B = !1)) : (A = c, j().find(n()).filter(function(a) {
					return !!c[a.text]
				}).wrap(function(a) {
					return b.dom.create("span", {
						"class": "mce-spellchecker-word",
						"data-mce-bogus": 1,
						"data-mce-word": a.text
					})
				}), B = !0, void b.fire("SpellcheckStart"))
			}
			var z, A, B, C, D, E = this,
				F = b.settings,
				G = F.spellchecker_languages || "English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv";
			z = k("Language", c.map(G.split(","), function(a) {
				return a = a.split("="), {
					name: a[0],
					value: a[1]
				}
			})), b.on("click", function(a) {
				var c = a.target;
				if ("mce-spellchecker-word" == c.className) {
					a.preventDefault();
					var d = w(v(c));
					if (d.length > 0) {
						var e = b.dom.createRng();
						e.setStartBefore(d[0]), e.setEndAfter(d[d.length - 1]), b.selection.setRng(e), m(c.getAttribute("data-mce-word"), d)
					}
				}
			}), b.addMenuItem("spellchecker", {
				text: "Spellcheck",
				context: "tools",
				onclick: q,
				selectable: !0,
				onPostRender: function() {
					var a = this;
					a.active(B), b.on("SpellcheckStart SpellcheckEnd", function() {
						a.active(B)
					})
				}
			});
			var H = {
				tooltip: "Spellcheck",
				onclick: q,
				onPostRender: function() {
					var a = this;
					b.on("SpellcheckStart SpellcheckEnd", function() {
						a.active(B)
					})
				}
			};
			z.length > 1 && (H.type = "splitbutton", H.menu = z, H.onshow = x, H.onselect = function(a) {
				F.spellchecker_language = a.control.settings.data
			}), b.addButton("spellchecker", H), b.addCommand("mceSpellCheck", q), b.on("remove", function() {
				C && (C.remove(), C = null)
			}), b.on("change", r), this.getTextMatcher = j, this.getWordCharPattern = n, this.markErrors = y, this.getLanguage = function() {
				return F.spellchecker_language
			}, F.spellchecker_language = F.spellchecker_language || F.language || "en"
		})
	}), f(["tinymce/spellcheckerplugin/DomTextMatcher"])
}(this);
tinymce.PluginManager.add("tabfocus", function(a) {
	function b(a) {
		9 !== a.keyCode || a.ctrlKey || a.altKey || a.metaKey || a.preventDefault()
	}

	function c(b) {
		function c(c) {
			function f(a) {
				return "BODY" === a.nodeName || "hidden" != a.type && "none" != a.style.display && "hidden" != a.style.visibility && f(a.parentNode)
			}

			function i(a) {
				return /INPUT|TEXTAREA|BUTTON/.test(a.tagName) && tinymce.get(b.id) && -1 != a.tabIndex && f(a)
			}
			if (h = d.select(":input:enabled,*[tabindex]:not(iframe)"), e(h, function(b, c) {
				return b.id == a.id ? (g = c, !1) : void 0
			}), c > 0) {
				for (j = g + 1; j < h.length; j++)
					if (i(h[j])) return h[j]
			} else
				for (j = g - 1; j >= 0; j--)
					if (i(h[j])) return h[j]; return null
		}
		var g, h, i, j;
		if (!(9 !== b.keyCode || b.ctrlKey || b.altKey || b.metaKey || b.isDefaultPrevented()) && (i = f(a.getParam("tab_focus", a.getParam("tabfocus_elements", ":prev,:next"))), 1 == i.length && (i[1] = i[0], i[0] = ":prev"), h = b.shiftKey ? ":prev" == i[0] ? c(-1) : d.get(i[0]) : ":next" == i[1] ? c(1) : d.get(i[1]))) {
			var k = tinymce.get(h.id || h.name);
			h.id && k ? k.focus() : window.setTimeout(function() {
				tinymce.Env.webkit || window.focus(), h.focus()
			}, 10), b.preventDefault()
		}
	}
	var d = tinymce.DOM,
		e = tinymce.each,
		f = tinymce.explode;
	a.on("init", function() {
		a.inline && tinymce.DOM.setAttrib(a.getBody(), "tabIndex", null), a.on("keyup", b), tinymce.Env.gecko ? a.on("keypress keydown", c) : a.on("keydown", c)
	})
});
! function(a, b) {
	"use strict";

	function c(a, b) {
		for (var c, d = [], g = 0; g < a.length; ++g) {
			if (c = f[a[g]] || e(a[g]), !c) throw "module definition dependecy not found: " + a[g];
			d.push(c)
		}
		b.apply(null, d)
	}

	function d(a, d, e) {
		if ("string" != typeof a) throw "invalid module definition, module id must be defined and be a string";
		if (d === b) throw "invalid module definition, dependencies must be specified";
		if (e === b) throw "invalid module definition, definition function must be specified";
		c(d, function() {
			f[a] = e.apply(null, arguments)
		})
	}

	function e(b) {
		for (var c = a, d = b.split(/[.\/]/), e = 0; e < d.length; ++e) {
			if (!c[d[e]]) return;
			c = c[d[e]]
		}
		return c
	}
	var f = {};
	d("tinymce/tableplugin/TableGrid", ["tinymce/util/Tools", "tinymce/Env"], function(a, c) {
		function d(a, b) {
			return parseInt(a.getAttribute(b) || 1, 10)
		}
		var e = a.each;
		return function(f, g) {
			function h() {
				var a = 0;
				F = [], G = 0, e(["thead", "tbody", "tfoot"], function(b) {
					var c = L.select("> " + b + " tr", g);
					e(c, function(c, f) {
						f += a, e(L.select("> td, > th", c), function(a, c) {
							var e, g, h, i;
							if (F[f])
								for (; F[f][c];) c++;
							for (h = d(a, "rowspan"), i = d(a, "colspan"), g = f; f + h > g; g++)
								for (F[g] || (F[g] = []), e = c; c + i > e; e++) F[g][e] = {
									part: b,
									real: g == f && e == c,
									elm: a,
									rowspan: h,
									colspan: i
								};
							G = Math.max(G, c + 1)
						})
					}), a += c.length
				})
			}

			function i(a, b) {
				return a = a.cloneNode(b), a.removeAttribute("id"), a
			}

			function j(a, b) {
				var c;
				return c = F[b], c ? c[a] : void 0
			}

			function k(a, b, c) {
				a && (c = parseInt(c, 10), 1 === c ? a.removeAttribute(b, 1) : a.setAttribute(b, c, 1))
			}

			function l(a) {
				return a && (L.hasClass(a.elm, "mce-item-selected") || a == J)
			}

			function m() {
				var a = [];
				return e(g.rows, function(b) {
					e(b.cells, function(c) {
						return L.hasClass(c, "mce-item-selected") || J && c == J.elm ? (a.push(b), !1) : void 0
					})
				}), a
			}

			function n() {
				var a = L.createRng();
				a.setStartAfter(g), a.setEndAfter(g), K.setRng(a), L.remove(g)
			}

			function o(b) {
				var d, g = {};
				return f.settings.table_clone_elements !== !1 && (g = a.makeMap((f.settings.table_clone_elements || "strong em b i span font h1 h2 h3 h4 h5 h6 p div").toUpperCase(), /[ ,]/)), a.walk(b, function(a) {
					var f;
					return 3 == a.nodeType ? (e(L.getParents(a.parentNode, null, b).reverse(), function(a) {
						g[a.nodeName] && (a = i(a, !1), d ? f && f.appendChild(a) : d = f = a, f = a)
					}), f && (f.innerHTML = c.ie ? "&nbsp;" : '<br data-mce-bogus="1" />'), !1) : void 0
				}, "childNodes"), b = i(b, !1), k(b, "rowSpan", 1), k(b, "colSpan", 1), d ? b.appendChild(d) : (!c.ie || c.ie > 10) && (b.innerHTML = '<br data-mce-bogus="1" />'), b
			}

			function p() {
				var a, b = L.createRng();
				return e(L.select("tr", g), function(a) {
					0 === a.cells.length && L.remove(a)
				}), 0 === L.select("tr", g).length ? (b.setStartBefore(g), b.setEndBefore(g), K.setRng(b), void L.remove(g)) : (e(L.select("thead,tbody,tfoot", g), function(a) {
					0 === a.rows.length && L.remove(a)
				}), h(), void(H && (a = F[Math.min(F.length - 1, H.y)], a && (K.select(a[Math.min(a.length - 1, H.x)].elm, !0), K.collapse(!0)))))
			}

			function q(a, b, c, d) {
				var e, f, g, h, i;
				for (e = F[b][a].elm.parentNode, g = 1; c >= g; g++)
					if (e = L.getNext(e, "tr")) {
						for (f = a; f >= 0; f--)
							if (i = F[b + g][f].elm, i.parentNode == e) {
								for (h = 1; d >= h; h++) L.insertAfter(o(i), i);
								break
							}
						if (-1 == f)
							for (h = 1; d >= h; h++) e.insertBefore(o(e.cells[0]), e.cells[0])
					}
			}

			function r() {
				e(F, function(a, b) {
					e(a, function(a, c) {
						var e, f, g;
						if (l(a) && (a = a.elm, e = d(a, "colspan"), f = d(a, "rowspan"), e > 1 || f > 1)) {
							for (k(a, "rowSpan", 1), k(a, "colSpan", 1), g = 0; e - 1 > g; g++) L.insertAfter(o(a), a);
							q(c, b, f - 1, e)
						}
					})
				})
			}

			function s(b, c, d) {
				var f, g, i, m, n, o, q, s, t, u, v;
				if (b ? (f = A(b), g = f.x, i = f.y, m = g + (c - 1), n = i + (d - 1)) : (H = I = null, e(F, function(a, b) {
					e(a, function(a, c) {
						l(a) && (H || (H = {
							x: c,
							y: b
						}), I = {
							x: c,
							y: b
						})
					})
				}), H && (g = H.x, i = H.y, m = I.x, n = I.y)), s = j(g, i), t = j(m, n), s && t && s.part == t.part) {
					for (r(), h(), s = j(g, i).elm, k(s, "colSpan", m - g + 1), k(s, "rowSpan", n - i + 1), q = i; n >= q; q++)
						for (o = g; m >= o; o++) F[q] && F[q][o] && (b = F[q][o].elm, b != s && (u = a.grep(b.childNodes), e(u, function(a) {
							s.appendChild(a)
						}), u.length && (u = a.grep(s.childNodes), v = 0, e(u, function(a) {
							"BR" == a.nodeName && L.getAttrib(a, "data-mce-bogus") && v++ < u.length - 1 && s.removeChild(a)
						})), L.remove(b)));
					p()
				}
			}

			function t(a) {
				var c, f, g, h, j, m, n, p, q;
				if (e(F, function(b, d) {
					return e(b, function(b) {
						return l(b) && (b = b.elm, j = b.parentNode, m = i(j, !1), c = d, a) ? !1 : void 0
					}), a ? !c : void 0
				}), c !== b) {
					for (h = 0; h < F[0].length; h++)
						if (F[c][h] && (f = F[c][h].elm, f != g)) {
							if (a) {
								if (c > 0 && F[c - 1][h] && (p = F[c - 1][h].elm, q = d(p, "rowSpan"), q > 1)) {
									k(p, "rowSpan", q + 1);
									continue
								}
							} else if (q = d(f, "rowspan"), q > 1) {
								k(f, "rowSpan", q + 1);
								continue
							}
							n = o(f), k(n, "colSpan", f.colSpan), m.appendChild(n), g = f
						}
					m.hasChildNodes() && (a ? j.parentNode.insertBefore(m, j) : L.insertAfter(m, j))
				}
			}

			function u(a) {
				var b, c;
				e(F, function(c) {
					return e(c, function(c, d) {
						return l(c) && (b = d, a) ? !1 : void 0
					}), a ? !b : void 0
				}), e(F, function(e, f) {
					var g, h, i;
					e[b] && (g = e[b].elm, g != c && (i = d(g, "colspan"), h = d(g, "rowspan"), 1 == i ? a ? (g.parentNode.insertBefore(o(g), g), q(b, f, h - 1, i)) : (L.insertAfter(o(g), g), q(b, f, h - 1, i)) : k(g, "colSpan", g.colSpan + 1), c = g))
				})
			}

			function v() {
				var b = [];
				e(F, function(c) {
					e(c, function(c, f) {
						l(c) && -1 === a.inArray(b, f) && (e(F, function(a) {
							var b, c = a[f].elm;
							b = d(c, "colSpan"), b > 1 ? k(c, "colSpan", b - 1) : L.remove(c)
						}), b.push(f))
					})
				}), p()
			}

			function w() {
				function a(a) {
					var b, c;
					e(a.cells, function(a) {
						var c = d(a, "rowSpan");
						c > 1 && (k(a, "rowSpan", c - 1), b = A(a), q(b.x, b.y, 1, 1))
					}), b = A(a.cells[0]), e(F[b.y], function(a) {
						var b;
						a = a.elm, a != c && (b = d(a, "rowSpan"), 1 >= b ? L.remove(a) : k(a, "rowSpan", b - 1), c = a)
					})
				}
				var b;
				b = m(), e(b.reverse(), function(b) {
					a(b)
				}), p()
			}

			function x() {
				var a = m();
				return L.remove(a), p(), a
			}

			function y() {
				var a = m();
				return e(a, function(b, c) {
					a[c] = i(b, !0)
				}), a
			}

			function z(a, b) {
				var c = m(),
					d = c[b ? 0 : c.length - 1],
					f = d.cells.length;
				a && (e(F, function(a) {
					var b;
					return f = 0, e(a, function(a) {
						a.real && (f += a.colspan), a.elm.parentNode == d && (b = 1)
					}), b ? !1 : void 0
				}), b || a.reverse(), e(a, function(a) {
					var c, e, g = a.cells.length;
					for (c = 0; g > c; c++) e = a.cells[c], k(e, "colSpan", 1), k(e, "rowSpan", 1);
					for (c = g; f > c; c++) a.appendChild(o(a.cells[g - 1]));
					for (c = f; g > c; c++) L.remove(a.cells[c]);
					b ? d.parentNode.insertBefore(a, d) : L.insertAfter(a, d)
				}), L.removeClass(L.select("td.mce-item-selected,th.mce-item-selected"), "mce-item-selected"))
			}

			function A(a) {
				var b;
				return e(F, function(c, d) {
					return e(c, function(c, e) {
						return c.elm == a ? (b = {
							x: e,
							y: d
						}, !1) : void 0
					}), !b
				}), b
			}

			function B(a) {
				H = A(a)
			}

			function C() {
				var a, b;
				return a = b = 0, e(F, function(c, d) {
					e(c, function(c, e) {
						var f, g;
						l(c) && (c = F[d][e], e > a && (a = e), d > b && (b = d), c.real && (f = c.colspan - 1, g = c.rowspan - 1, f && e + f > a && (a = e + f), g && d + g > b && (b = d + g)))
					})
				}), {
					x: a,
					y: b
				}
			}

			function D(a) {
				var b, c, d, e, f, g, h, i, j, k;
				if (I = A(a), H && I) {
					for (b = Math.min(H.x, I.x), c = Math.min(H.y, I.y), d = Math.max(H.x, I.x), e = Math.max(H.y, I.y), f = d, g = e, k = c; g >= k; k++) a = F[k][b], a.real || b - (a.colspan - 1) < b && (b -= a.colspan - 1);
					for (j = b; f >= j; j++) a = F[c][j], a.real || c - (a.rowspan - 1) < c && (c -= a.rowspan - 1);
					for (k = c; e >= k; k++)
						for (j = b; d >= j; j++) a = F[k][j], a.real && (h = a.colspan - 1, i = a.rowspan - 1, h && j + h > f && (f = j + h), i && k + i > g && (g = k + i));
					for (L.removeClass(L.select("td.mce-item-selected,th.mce-item-selected"), "mce-item-selected"), k = c; g >= k; k++)
						for (j = b; f >= j; j++) F[k][j] && L.addClass(F[k][j].elm, "mce-item-selected")
				}
			}

			function E(a, b) {
				var c, d, e;
				c = A(a), d = c.y * G + c.x;
				do {
					if (d += b, e = j(d % G, Math.floor(d / G)), !e) break;
					if (e.elm != a) return K.select(e.elm, !0), L.isEmpty(e.elm) && K.collapse(!0), !0
				} while (e.elm == a);
				return !1
			}
			var F, G, H, I, J, K = f.selection,
				L = K.dom;
			g = g || L.getParent(K.getStart(), "table"), h(), J = L.getParent(K.getStart(), "th,td"), J && (H = A(J), I = C(), J = j(H.x, H.y)), a.extend(this, {
				deleteTable: n,
				split: r,
				merge: s,
				insertRow: t,
				insertCol: u,
				deleteCols: v,
				deleteRows: w,
				cutRows: x,
				copyRows: y,
				pasteRows: z,
				getPos: A,
				setStartCell: B,
				setEndCell: D,
				moveRelIdx: E,
				refresh: h
			})
		}
	}), d("tinymce/tableplugin/Quirks", ["tinymce/util/VK", "tinymce/Env", "tinymce/util/Tools"], function(a, b, c) {
		function d(a, b) {
			return parseInt(a.getAttribute(b) || 1, 10)
		}
		var e = c.each;
		return function(c) {
			function f() {
				function b(b) {
					function f(a, d) {
						var e = a ? "previousSibling" : "nextSibling",
							f = c.dom.getParent(d, "tr"),
							h = f[e];
						if (h) return q(c, d, h, a), b.preventDefault(), !0;
						var k = c.dom.getParent(f, "table"),
							l = f.parentNode,
							m = l.nodeName.toLowerCase();
						if ("tbody" === m || m === (a ? "tfoot" : "thead")) {
							var n = g(a, k, l, "tbody");
							if (null !== n) return i(a, n, d)
						}
						return j(a, f, e, k)
					}

					function g(a, b, d, e) {
						var f = c.dom.select(">" + e, b),
							g = f.indexOf(d);
						if (a && 0 === g || !a && g === f.length - 1) return h(a, b);
						if (-1 === g) {
							var i = "thead" === d.tagName.toLowerCase() ? 0 : f.length - 1;
							return f[i]
						}
						return f[g + (a ? -1 : 1)]
					}

					function h(a, b) {
						var d = a ? "thead" : "tfoot",
							e = c.dom.select(">" + d, b);
						return 0 !== e.length ? e[0] : null
					}

					function i(a, d, e) {
						var f = k(d, a);
						return f && q(c, e, f, a), b.preventDefault(), !0
					}

					function j(a, d, e, g) {
						var h = g[e];
						if (h) return l(h), !0;
						var i = c.dom.getParent(g, "td,th");
						if (i) return f(a, i, b);
						var j = k(d, !a);
						return l(j), b.preventDefault(), !1
					}

					function k(a, b) {
						var d = a && a[b ? "lastChild" : "firstChild"];
						return d && "BR" === d.nodeName ? c.dom.getParent(d, "td,th") : d
					}

					function l(a) {
						c.selection.setCursorLocation(a, 0)
					}

					function m() {
						return t == a.UP || t == a.DOWN
					}

					function n(a) {
						var b = a.selection.getNode(),
							c = a.dom.getParent(b, "tr");
						return null !== c
					}

					function o(a) {
						for (var b = 0, c = a; c.previousSibling;) c = c.previousSibling, b += d(c, "colspan");
						return b
					}

					function p(a, b) {
						var c = 0,
							f = 0;
						return e(a.children, function(a, e) {
							return c += d(a, "colspan"), f = e, c > b ? !1 : void 0
						}), f
					}

					function q(a, b, d, e) {
						var f = o(c.dom.getParent(b, "td,th")),
							g = p(d, f),
							h = d.childNodes[g],
							i = k(h, e);
						l(i || h)
					}

					function r(a) {
						var b = c.selection.getNode(),
							d = c.dom.getParent(b, "td,th"),
							e = c.dom.getParent(a, "td,th");
						return d && d !== e && s(d, e)
					}

					function s(a, b) {
						return c.dom.getParent(a, "TABLE") === c.dom.getParent(b, "TABLE")
					}
					var t = b.keyCode;
					if (m() && n(c)) {
						var u = c.selection.getNode();
						setTimeout(function() {
							r(u) && f(!b.shiftKey && t === a.UP, u, b)
						}, 0)
					}
				}
				c.on("KeyDown", function(a) {
					b(a)
				})
			}

			function g() {
				function a(a, b) {
					var c, d = b.ownerDocument,
						e = d.createRange();
					return e.setStartBefore(b), e.setEnd(a.endContainer, a.endOffset), c = d.createElement("body"), c.appendChild(e.cloneContents()), 0 === c.innerHTML.replace(/<(br|img|object|embed|input|textarea)[^>]*>/gi, "-").replace(/<[^>]+>/g, "").length
				}
				c.on("KeyDown", function(b) {
					var d, e, f = c.dom;
					(37 == b.keyCode || 38 == b.keyCode) && (d = c.selection.getRng(), e = f.getParent(d.startContainer, "table"), e && c.getBody().firstChild == e && a(d, e) && (d = f.createRng(), d.setStartBefore(e), d.setEndBefore(e), c.selection.setRng(d), b.preventDefault()))
				})
			}

			function h() {
				c.on("KeyDown SetContent VisualAid", function() {
					var a;
					for (a = c.getBody().lastChild; a; a = a.previousSibling)
						if (3 == a.nodeType) {
							if (a.nodeValue.length > 0) break
						} else if (1 == a.nodeType && ("BR" == a.tagName || !a.getAttribute("data-mce-bogus"))) break;
					a && "TABLE" == a.nodeName && (c.settings.forced_root_block ? c.dom.add(c.getBody(), c.settings.forced_root_block, c.settings.forced_root_block_attrs, b.ie && b.ie < 11 ? "&nbsp;" : '<br data-mce-bogus="1" />') : c.dom.add(c.getBody(), "br", {
						"data-mce-bogus": "1"
					}))
				}), c.on("PreProcess", function(a) {
					var b = a.node.lastChild;
					b && ("BR" == b.nodeName || 1 == b.childNodes.length && ("BR" == b.firstChild.nodeName || "\xa0" == b.firstChild.nodeValue)) && b.previousSibling && "TABLE" == b.previousSibling.nodeName && c.dom.remove(b)
				})
			}

			function i() {
				function a(a, b, c, d) {
					var e, f, g, h = 3,
						i = a.dom.getParent(b.startContainer, "TABLE");
					return i && (e = i.parentNode), f = b.startContainer.nodeType == h && 0 === b.startOffset && 0 === b.endOffset && d && ("TR" == c.nodeName || c == e), g = ("TD" == c.nodeName || "TH" == c.nodeName) && !d, f || g
				}

				function b() {
					var b = c.selection.getRng(),
						d = c.selection.getNode(),
						e = c.dom.getParent(b.startContainer, "TD,TH");
					if (a(c, b, d, e)) {
						e || (e = d);
						for (var f = e.lastChild; f.lastChild;) f = f.lastChild;
						3 == f.nodeType && (b.setEnd(f, f.data.length), c.selection.setRng(b))
					}
				}
				c.on("KeyDown", function() {
					b()
				}), c.on("MouseDown", function(a) {
					2 != a.button && b()
				})
			}

			function j() {
				c.on("keydown", function(b) {
					if ((b.keyCode == a.DELETE || b.keyCode == a.BACKSPACE) && !b.isDefaultPrevented()) {
						var d = c.dom.getParent(c.selection.getStart(), "table");
						if (d) {
							for (var e = c.dom.select("td,th", d), f = e.length; f--;)
								if (!c.dom.hasClass(e[f], "mce-item-selected")) return;
							b.preventDefault(), c.execCommand("mceTableDelete")
						}
					}
				})
			}
			j(), b.webkit && (f(), i()), b.gecko && (g(), h()), b.ie > 10 && (g(), h())
		}
	}), d("tinymce/tableplugin/CellSelection", ["tinymce/tableplugin/TableGrid", "tinymce/dom/TreeWalker", "tinymce/util/Tools"], function(a, b, c) {
		return function(d) {
			function e(a) {
				d.getBody().style.webkitUserSelect = "", (a || l) && (d.dom.removeClass(d.dom.select("td.mce-item-selected,th.mce-item-selected"), "mce-item-selected"), l = !1)
			}

			function f(b) {
				var c, e, f = b.target;
				if (!j && h && (g || f != h) && ("TD" == f.nodeName || "TH" == f.nodeName)) {
					e = k.getParent(f, "table"), e == i && (g || (g = new a(d, e), g.setStartCell(h), d.getBody().style.webkitUserSelect = "none"), g.setEndCell(f), l = !0), c = d.selection.getSel();
					try {
						c.removeAllRanges ? c.removeAllRanges() : c.empty()
					} catch (m) {}
					b.preventDefault()
				}
			}
			var g, h, i, j, k = d.dom,
				l = !0;
			return d.on("MouseDown", function(a) {
				2 == a.button || j || (e(), h = k.getParent(a.target, "td,th"), i = k.getParent(h, "table"))
			}), d.on("mouseover", f), d.on("remove", function() {
				k.unbind(d.getDoc(), "mouseover", f)
			}), d.on("MouseUp", function() {
				function a(a, d) {
					var f = new b(a, a);
					do {
						if (3 == a.nodeType && 0 !== c.trim(a.nodeValue).length) return void(d ? e.setStart(a, 0) : e.setEnd(a, a.nodeValue.length));
						if ("BR" == a.nodeName) return void(d ? e.setStartBefore(a) : e.setEndBefore(a))
					} while (a = d ? f.next() : f.prev())
				}
				var e, f, j, l, m, n = d.selection;
				if (h) {
					if (g && (d.getBody().style.webkitUserSelect = ""), f = k.select("td.mce-item-selected,th.mce-item-selected"), f.length > 0) {
						e = k.createRng(), l = f[0], e.setStartBefore(l), e.setEndAfter(l), a(l, 1), j = new b(l, k.getParent(f[0], "table"));
						do
							if ("TD" == l.nodeName || "TH" == l.nodeName) {
								if (!k.hasClass(l, "mce-item-selected")) break;
								m = l
							}
						while (l = j.next());
						a(m), n.setRng(e)
					}
					d.nodeChanged(), h = g = i = null
				}
			}), d.on("KeyUp Drop SetContent", function(a) {
				e("setcontent" == a.type), h = g = i = null, j = !1
			}), d.on("ObjectResizeStart ObjectResized", function(a) {
				j = "objectresized" != a.type
			}), {
				clear: e
			}
		}
	}), d("tinymce/tableplugin/Dialogs", ["tinymce/util/Tools", "tinymce/Env"], function(a, b) {
		var c = a.each;
		return function(d) {
			function e() {
				var a = d.settings.color_picker_callback;
				return a ? function() {
					var b = this;
					a.call(d, function(a) {
						b.value(a).fire("change")
					}, b.value())
				} : void 0
			}

			function f(a) {
				return {
					title: "Advanced",
					type: "form",
					defaults: {
						onchange: function() {
							l(a, this.parents().reverse()[0], "style" == this.name())
						}
					},
					items: [{
						label: "Style",
						name: "style",
						type: "textbox"
					}, {
						type: "form",
						padding: 0,
						formItemDefaults: {
							layout: "grid",
							alignH: ["start", "right"]
						},
						defaults: {
							size: 7
						},
						items: [{
							label: "Border color",
							type: "colorbox",
							name: "borderColor",
							onaction: e()
						}, {
							label: "Background color",
							type: "colorbox",
							name: "backgroundColor",
							onaction: e()
						}]
					}]
				}
			}

			function g(a) {
				return a ? a.replace(/px$/, "") : ""
			}

			function h(a) {
				return /^[0-9]+$/.test(a) && (a += "px"), a
			}

			function i(a) {
				c("left center right".split(" "), function(b) {
					d.formatter.remove("align" + b, {}, a)
				})
			}

			function j(a) {
				c("top middle bottom".split(" "), function(b) {
					d.formatter.remove("valign" + b, {}, a)
				})
			}

			function k(b, c, d) {
				function e(b, d) {
					return d = d || [], a.each(b, function(a) {
						var b = {
							text: a.text || a.title
						};
						a.menu ? b.menu = e(a.menu) : (b.value = a.value, c && c(b)), d.push(b)
					}), d
				}
				return e(b, d || [])
			}

			function l(a, b, c) {
				var d = b.toJSON(),
					e = a.parseStyle(d.style);
				c ? (b.find("#borderColor").value(e["border-color"] || "")[0].fire("change"), b.find("#backgroundColor").value(e["background-color"] || "")[0].fire("change")) : (e["border-color"] = d.borderColor, e["background-color"] = d.backgroundColor), b.find("#style").value(a.serializeStyle(a.parseStyle(a.serializeStyle(e))))
			}

			function m(a, b, c) {
				var d = a.parseStyle(a.getAttrib(c, "style"));
				d["border-color"] && (b.borderColor = d["border-color"]), d["background-color"] && (b.backgroundColor = d["background-color"]), b.style = a.serializeStyle(d)
			}
			var n = this;
			n.tableProps = function() {
				n.table(!0)
			}, n.table = function(e) {
				function j() {
					var c;
					l(s, this), t = a.extend(t, this.toJSON()), a.each("backgroundColor borderColor".split(" "), function(a) {
						delete t[a]
					}), t["class"] === !1 && delete t["class"], d.undoManager.transact(function() {
						n || (n = d.plugins.table.insertTable(t.cols || 1, t.rows || 1)), d.dom.setAttribs(n, {
							cellspacing: t.cellspacing,
							cellpadding: t.cellpadding,
							border: t.border,
							style: t.style,
							"class": t["class"]
						}), s.getAttrib(n, "width") ? s.setAttrib(n, "width", g(t.width)) : s.setStyle(n, "width", h(t.width)), s.setStyle(n, "height", h(t.height)), c = s.select("caption", n)[0], c && !t.caption && s.remove(c), !c && t.caption && (c = s.create("caption"), c.innerHTML = b.ie ? "\xa0" : '<br data-mce-bogus="1"/>', n.insertBefore(c, n.firstChild)), i(n), t.align && d.formatter.apply("align" + t.align, {}, n), d.focus(), d.addVisual()
					})
				}
				var n, o, p, q, r, s = d.dom,
					t = {};
				e === !0 ? (n = s.getParent(d.selection.getStart(), "table"), n && (t = {
					width: g(s.getStyle(n, "width") || s.getAttrib(n, "width")),
					height: g(s.getStyle(n, "height") || s.getAttrib(n, "height")),
					cellspacing: n ? s.getAttrib(n, "cellspacing") : "",
					cellpadding: n ? s.getAttrib(n, "cellpadding") : "",
					border: n ? s.getAttrib(n, "border") : "",
					caption: !!s.select("caption", n)[0],
					"class": s.getAttrib(n, "class")
				}, c("left center right".split(" "), function(a) {
					d.formatter.matchNode(n, "align" + a) && (t.align = a)
				}))) : (o = {
					label: "Cols",
					name: "cols"
				}, p = {
					label: "Rows",
					name: "rows"
				}), d.settings.table_class_list && (t["class"] && (t["class"] = t["class"].replace(/\s*mce\-item\-table\s*/g, "")), q = {
					name: "class",
					type: "listbox",
					label: "Class",
					values: k(d.settings.table_class_list, function(a) {
						a.value && (a.textStyle = function() {
							return d.formatter.getCssText({
								block: "table",
								classes: [a.value]
							})
						})
					})
				}), r = {
					type: "form",
					layout: "flex",
					direction: "column",
					labelGapCalc: "children",
					padding: 0,
					items: [{
							type: "form",
							labelGapCalc: !1,
							padding: 0,
							layout: "grid",
							columns: 2,
							defaults: {
								type: "textbox",
								maxWidth: 50
							},
							items: [o, p, {
								label: "Width",
								name: "width"
							}, {
								label: "Height",
								name: "height"
							}, {
								label: "Cell spacing",
								name: "cellspacing"
							}, {
								label: "Cell padding",
								name: "cellpadding"
							}, {
								label: "Border",
								name: "border"
							}, {
								label: "Caption",
								name: "caption",
								type: "checkbox"
							}]
						}, {
							label: "Alignment",
							name: "align",
							type: "listbox",
							text: "None",
							values: [{
								text: "None",
								value: ""
							}, {
								text: "Left",
								value: "left"
							}, {
								text: "Center",
								value: "center"
							}, {
								text: "Right",
								value: "right"
							}]
						},
						q
					]
				}, d.settings.table_advtab !== !1 ? (m(s, t, n), d.windowManager.open({
					title: "Table properties",
					data: t,
					bodyType: "tabpanel",
					body: [{
							title: "General",
							type: "form",
							items: r
						},
						f(s)
					],
					onsubmit: j
				})) : d.windowManager.open({
					title: "Table properties",
					data: t,
					body: r,
					onsubmit: j
				})
			}, n.merge = function(a, b) {
				d.windowManager.open({
					title: "Merge cells",
					body: [{
						label: "Cols",
						name: "cols",
						type: "textbox",
						value: "1",
						size: 10
					}, {
						label: "Rows",
						name: "rows",
						type: "textbox",
						value: "1",
						size: 10
					}],
					onsubmit: function() {
						var c = this.toJSON();
						d.undoManager.transact(function() {
							a.merge(b, c.cols, c.rows)
						})
					}
				})
			}, n.cell = function() {
				function b() {
					l(p, this), n = a.extend(n, this.toJSON()), d.undoManager.transact(function() {
						c(q, function(a) {
							d.dom.setAttribs(a, {
								scope: n.scope,
								style: n.style,
								"class": n["class"]
							}), d.dom.setStyles(a, {
								width: h(n.width),
								height: h(n.height)
							}), n.type && a.nodeName.toLowerCase() != n.type && (a = p.rename(a, n.type)), i(a), n.align && d.formatter.apply("align" + n.align, {}, a), j(a), n.valign && d.formatter.apply("valign" + n.valign, {}, a)
						}), d.focus()
					})
				}
				var e, n, o, p = d.dom,
					q = [];
				if (q = d.dom.select("td.mce-item-selected,th.mce-item-selected"), e = d.dom.getParent(d.selection.getStart(), "td,th"), !q.length && e && q.push(e), e = e || q[0]) {
					n = {
						width: g(p.getStyle(e, "width") || p.getAttrib(e, "width")),
						height: g(p.getStyle(e, "height") || p.getAttrib(e, "height")),
						scope: p.getAttrib(e, "scope"),
						"class": p.getAttrib(e, "class")
					}, n.type = e.nodeName.toLowerCase(), c("left center right".split(" "), function(a) {
						d.formatter.matchNode(e, "align" + a) && (n.align = a)
					}), c("top middle bottom".split(" "), function(a) {
						d.formatter.matchNode(e, "valign" + a) && (n.valign = a)
					}), d.settings.table_cell_class_list && (o = {
						name: "class",
						type: "listbox",
						label: "Class",
						values: k(d.settings.table_cell_class_list, function(a) {
							a.value && (a.textStyle = function() {
								return d.formatter.getCssText({
									block: "td",
									classes: [a.value]
								})
							})
						})
					});
					var r = {
						type: "form",
						layout: "flex",
						direction: "column",
						labelGapCalc: "children",
						padding: 0,
						items: [{
								type: "form",
								layout: "grid",
								columns: 2,
								labelGapCalc: !1,
								padding: 0,
								defaults: {
									type: "textbox",
									maxWidth: 50
								},
								items: [{
									label: "Width",
									name: "width"
								}, {
									label: "Height",
									name: "height"
								}, {
									label: "Cell type",
									name: "type",
									type: "listbox",
									text: "None",
									minWidth: 90,
									maxWidth: null,
									values: [{
										text: "Cell",
										value: "td"
									}, {
										text: "Header cell",
										value: "th"
									}]
								}, {
									label: "Scope",
									name: "scope",
									type: "listbox",
									text: "None",
									minWidth: 90,
									maxWidth: null,
									values: [{
										text: "None",
										value: ""
									}, {
										text: "Row",
										value: "row"
									}, {
										text: "Column",
										value: "col"
									}, {
										text: "Row group",
										value: "rowgroup"
									}, {
										text: "Column group",
										value: "colgroup"
									}]
								}, {
									label: "H Align",
									name: "align",
									type: "listbox",
									text: "None",
									minWidth: 90,
									maxWidth: null,
									values: [{
										text: "None",
										value: ""
									}, {
										text: "Left",
										value: "left"
									}, {
										text: "Center",
										value: "center"
									}, {
										text: "Right",
										value: "right"
									}]
								}, {
									label: "V Align",
									name: "valign",
									type: "listbox",
									text: "None",
									minWidth: 90,
									maxWidth: null,
									values: [{
										text: "None",
										value: ""
									}, {
										text: "Top",
										value: "top"
									}, {
										text: "Middle",
										value: "middle"
									}, {
										text: "Bottom",
										value: "bottom"
									}]
								}]
							},
							o
						]
					};
					d.settings.table_cell_advtab !== !1 ? (m(p, n, e), d.windowManager.open({
						title: "Cell properties",
						bodyType: "tabpanel",
						data: n,
						body: [{
								title: "General",
								type: "form",
								items: r
							},
							f(p)
						],
						onsubmit: b
					})) : d.windowManager.open({
						title: "Cell properties",
						data: n,
						body: r,
						onsubmit: b
					})
				}
			}, n.row = function() {
				function b() {
					var b, e, f;
					l(r, this), p = a.extend(p, this.toJSON()), d.undoManager.transact(function() {
						var a = p.type;
						c(s, function(c) {
							d.dom.setAttribs(c, {
								scope: p.scope,
								style: p.style,
								"class": p["class"]
							}), d.dom.setStyles(c, {
								height: h(p.height)
							}), a != c.parentNode.nodeName.toLowerCase() && (b = r.getParent(c, "table"), e = c.parentNode, f = r.select(a, b)[0], f || (f = r.create(a), b.firstChild ? b.insertBefore(f, b.firstChild) : b.appendChild(f)), f.appendChild(c), e.hasChildNodes() || r.remove(e)), i(c), p.align && d.formatter.apply("align" + p.align, {}, c)
						}), d.focus()
					})
				}
				var e, j, n, o, p, q, r = d.dom,
					s = [];
				e = d.dom.getParent(d.selection.getStart(), "table"), j = d.dom.getParent(d.selection.getStart(), "td,th"), c(e.rows, function(a) {
					c(a.cells, function(b) {
						return r.hasClass(b, "mce-item-selected") || b == j ? (s.push(a), !1) : void 0
					})
				}), n = s[0], n && (p = {
					height: g(r.getStyle(n, "height") || r.getAttrib(n, "height")),
					scope: r.getAttrib(n, "scope"),
					"class": r.getAttrib(n, "class")
				}, p.type = n.parentNode.nodeName.toLowerCase(), c("left center right".split(" "), function(a) {
					d.formatter.matchNode(n, "align" + a) && (p.align = a)
				}), d.settings.table_row_class_list && (o = {
					name: "class",
					type: "listbox",
					label: "Class",
					values: k(d.settings.table_row_class_list, function(a) {
						a.value && (a.textStyle = function() {
							return d.formatter.getCssText({
								block: "tr",
								classes: [a.value]
							})
						})
					})
				}), q = {
					type: "form",
					columns: 2,
					padding: 0,
					defaults: {
						type: "textbox"
					},
					items: [{
							type: "listbox",
							name: "type",
							label: "Row type",
							text: "None",
							maxWidth: null,
							values: [{
								text: "Header",
								value: "thead"
							}, {
								text: "Body",
								value: "tbody"
							}, {
								text: "Footer",
								value: "tfoot"
							}]
						}, {
							type: "listbox",
							name: "align",
							label: "Alignment",
							text: "None",
							maxWidth: null,
							values: [{
								text: "None",
								value: ""
							}, {
								text: "Left",
								value: "left"
							}, {
								text: "Center",
								value: "center"
							}, {
								text: "Right",
								value: "right"
							}]
						}, {
							label: "Height",
							name: "height"
						},
						o
					]
				}, d.settings.table_row_advtab !== !1 ? (m(r, p, n), d.windowManager.open({
					title: "Row properties",
					data: p,
					bodyType: "tabpanel",
					body: [{
							title: "General",
							type: "form",
							items: q
						},
						f(r)
					],
					onsubmit: b
				})) : d.windowManager.open({
					title: "Row properties",
					data: p,
					body: q,
					onsubmit: b
				}))
			}
		}
	}), d("tinymce/tableplugin/Plugin", ["tinymce/tableplugin/TableGrid", "tinymce/tableplugin/Quirks", "tinymce/tableplugin/CellSelection", "tinymce/tableplugin/Dialogs", "tinymce/util/Tools", "tinymce/dom/TreeWalker", "tinymce/Env", "tinymce/PluginManager"], function(a, b, c, d, e, f, g, h) {
		function i(e) {
			function f(a) {
				return function() {
					e.execCommand(a)
				}
			}

			function h(a, b) {
				var c, d, f, h;
				for (f = '<table id="__mce"><tbody>', c = 0; b > c; c++) {
					for (f += "<tr>", d = 0; a > d; d++) f += "<td>" + (g.ie ? " " : "<br>") + "</td>";
					f += "</tr>"
				}
				return f += "</tbody></table>", e.undoManager.transact(function() {
					e.insertContent(f), h = e.dom.get("__mce"), e.dom.setAttrib(h, "id", null), e.dom.setAttribs(h, e.settings.table_default_attributes || {}), e.dom.setStyles(h, e.settings.table_default_styles || {})
				}), h
			}

			function i(a, b) {
				function c() {
					a.disabled(!e.dom.getParent(e.selection.getStart(), b)), e.selection.selectorChanged(b, function(b) {
						a.disabled(!b)
					})
				}
				e.initialized ? c() : e.on("init", c)
			}

			function k() {
				i(this, "table")
			}

			function l() {
				i(this, "td,th")
			}

			function m() {
				var a = "";
				a = '<table role="grid" class="mce-grid mce-grid-border" aria-readonly="true">';
				for (var b = 0; 10 > b; b++) {
					a += "<tr>";
					for (var c = 0; 10 > c; c++) a += '<td role="gridcell" tabindex="-1"><a id="mcegrid' + (10 * b + c) + '" href="#" data-mce-x="' + c + '" data-mce-y="' + b + '"></a></td>';
					a += "</tr>"
				}
				return a += "</table>", a += '<div class="mce-text-center" role="presentation">1 x 1</div>'
			}

			function n(a, b, c) {
				var d, f, g, h, i, j = c.getEl().getElementsByTagName("table")[0],
					k = c.isRtl() || "tl-tr" == c.parent().rel;
				for (j.nextSibling.innerHTML = a + 1 + " x " + (b + 1), k && (a = 9 - a), f = 0; 10 > f; f++)
					for (d = 0; 10 > d; d++) h = j.rows[f].childNodes[d].firstChild, i = (k ? d >= a : a >= d) && b >= f, e.dom.toggleClass(h, "mce-active", i), i && (g = h);
				return g.parentNode
			}
			var o, p = this,
				q = new d(e);
			e.settings.table_grid === !1 ? e.addMenuItem("inserttable", {
				text: "Insert table",
				icon: "table",
				context: "table",
				onclick: q.table
			}) : e.addMenuItem("inserttable", {
				text: "Insert table",
				icon: "table",
				context: "table",
				ariaHideMenu: !0,
				onclick: function(a) {
					a.aria && (this.parent().hideAll(), a.stopImmediatePropagation(), q.table())
				},
				onshow: function() {
					n(0, 0, this.menu.items()[0])
				},
				onhide: function() {
					var a = this.menu.items()[0].getEl().getElementsByTagName("a");
					e.dom.removeClass(a, "mce-active"), e.dom.addClass(a[0], "mce-active")
				},
				menu: [{
					type: "container",
					html: m(),
					onPostRender: function() {
						this.lastX = this.lastY = 0
					},
					onmousemove: function(a) {
						var b, c, d = a.target;
						"A" == d.tagName.toUpperCase() && (b = parseInt(d.getAttribute("data-mce-x"), 10), c = parseInt(d.getAttribute("data-mce-y"), 10), (this.isRtl() || "tl-tr" == this.parent().rel) && (b = 9 - b), (b !== this.lastX || c !== this.lastY) && (n(b, c, a.control), this.lastX = b, this.lastY = c))
					},
					onclick: function(a) {
						var b = this;
						"A" == a.target.tagName.toUpperCase() && (a.preventDefault(), a.stopPropagation(), b.parent().cancel(), e.undoManager.transact(function() {
							h(b.lastX + 1, b.lastY + 1)
						}), e.addVisual())
					}
				}]
			}), e.addMenuItem("tableprops", {
				text: "Table properties",
				context: "table",
				onPostRender: k,
				onclick: q.tableProps
			}), e.addMenuItem("deletetable", {
				text: "Delete table",
				context: "table",
				onPostRender: k,
				cmd: "mceTableDelete"
			}), e.addMenuItem("cell", {
				separator: "before",
				text: "Cell",
				context: "table",
				menu: [{
					text: "Cell properties",
					onclick: f("mceTableCellProps"),
					onPostRender: l
				}, {
					text: "Merge cells",
					onclick: f("mceTableMergeCells"),
					onPostRender: l
				}, {
					text: "Split cell",
					onclick: f("mceTableSplitCells"),
					onPostRender: l
				}]
			}), e.addMenuItem("row", {
				text: "Row",
				context: "table",
				menu: [{
					text: "Insert row before",
					onclick: f("mceTableInsertRowBefore"),
					onPostRender: l
				}, {
					text: "Insert row after",
					onclick: f("mceTableInsertRowAfter"),
					onPostRender: l
				}, {
					text: "Delete row",
					onclick: f("mceTableDeleteRow"),
					onPostRender: l
				}, {
					text: "Row properties",
					onclick: f("mceTableRowProps"),
					onPostRender: l
				}, {
					text: "-"
				}, {
					text: "Cut row",
					onclick: f("mceTableCutRow"),
					onPostRender: l
				}, {
					text: "Copy row",
					onclick: f("mceTableCopyRow"),
					onPostRender: l
				}, {
					text: "Paste row before",
					onclick: f("mceTablePasteRowBefore"),
					onPostRender: l
				}, {
					text: "Paste row after",
					onclick: f("mceTablePasteRowAfter"),
					onPostRender: l
				}]
			}), e.addMenuItem("column", {
				text: "Column",
				context: "table",
				menu: [{
					text: "Insert column before",
					onclick: f("mceTableInsertColBefore"),
					onPostRender: l
				}, {
					text: "Insert column after",
					onclick: f("mceTableInsertColAfter"),
					onPostRender: l
				}, {
					text: "Delete column",
					onclick: f("mceTableDeleteCol"),
					onPostRender: l
				}]
			});
			var r = [];
			j("inserttable tableprops deletetable | cell row column".split(" "), function(a) {
				r.push("|" == a ? {
					text: "-"
				} : e.menuItems[a])
			}), e.addButton("table", {
				type: "menubutton",
				title: "Table",
				menu: r
			}), g.isIE || e.on("click", function(a) {
				a = a.target, "TABLE" === a.nodeName && (e.selection.select(a), e.nodeChanged())
			}), p.quirks = new b(e), e.on("Init", function() {
				p.cellSelection = new c(e)
			}), j({
				mceTableSplitCells: function(a) {
					a.split()
				},
				mceTableMergeCells: function(a) {
					var b;
					b = e.dom.getParent(e.selection.getStart(), "th,td"), e.dom.select("td.mce-item-selected,th.mce-item-selected").length ? a.merge() : q.merge(a, b)
				},
				mceTableInsertRowBefore: function(a) {
					a.insertRow(!0)
				},
				mceTableInsertRowAfter: function(a) {
					a.insertRow()
				},
				mceTableInsertColBefore: function(a) {
					a.insertCol(!0)
				},
				mceTableInsertColAfter: function(a) {
					a.insertCol()
				},
				mceTableDeleteCol: function(a) {
					a.deleteCols()
				},
				mceTableDeleteRow: function(a) {
					a.deleteRows()
				},
				mceTableCutRow: function(a) {
					o = a.cutRows()
				},
				mceTableCopyRow: function(a) {
					o = a.copyRows()
				},
				mceTablePasteRowBefore: function(a) {
					a.pasteRows(o, !0)
				},
				mceTablePasteRowAfter: function(a) {
					a.pasteRows(o)
				},
				mceTableDelete: function(a) {
					a.deleteTable()
				}
			}, function(b, c) {
				e.addCommand(c, function() {
					var c = new a(e);
					c && (b(c), e.execCommand("mceRepaint"), p.cellSelection.clear())
				})
			}), j({
				mceInsertTable: q.table,
				mceTableProps: function() {
					q.table(!0)
				},
				mceTableRowProps: q.row,
				mceTableCellProps: q.cell
			}, function(a, b) {
				e.addCommand(b, function(b, c) {
					a(c)
				})
			}), e.settings.table_tab_navigation !== !1 && e.on("keydown", function(b) {
				var c, d, f;
				9 == b.keyCode && (c = e.dom.getParent(e.selection.getStart(), "th,td"), c && (b.preventDefault(), d = new a(e), f = b.shiftKey ? -1 : 1, e.undoManager.transact(function() {
					!d.moveRelIdx(c, f) && f > 0 && (d.insertRow(), d.refresh(), d.moveRelIdx(c, f))
				})))
			}), p.insertTable = h
		}
		var j = e.each;
		h.add("table", i)
	})
}(this);
tinymce.PluginManager.add("template", function(a) {
	function b(b) {
		return function() {
			var c = a.settings.templates;
			"string" == typeof c ? tinymce.util.XHR.send({
				url: c,
				success: function(a) {
					b(tinymce.util.JSON.parse(a))
				}
			}) : b(c)
		}
	}

	function c(b) {
		function c(b) {
			function c(b) {
				if (-1 == b.indexOf("<html>")) {
					var c = "";
					tinymce.each(a.contentCSS, function(b) {
						c += '<link type="text/css" rel="stylesheet" href="' + a.documentBaseURI.toAbsolute(b) + '">'
					}), b = "<!DOCTYPE html><html><head>" + c + "</head><body>" + b + "</body></html>"
				}
				b = f(b, "template_preview_replace_values");
				var e = d.find("iframe")[0].getEl().contentWindow.document;
				e.open(), e.write(b), e.close()
			}
			var g = b.control.value();
			g.url ? tinymce.util.XHR.send({
				url: g.url,
				success: function(a) {
					e = a, c(e)
				}
			}) : (e = g.content, c(e)), d.find("#description")[0].text(b.control.value().description)
		}
		var d, e, h = [];
		return b && 0 !== b.length ? (tinymce.each(b, function(a) {
			h.push({
				selected: !h.length,
				text: a.title,
				value: {
					url: a.url,
					content: a.content,
					description: a.description
				}
			})
		}), d = a.windowManager.open({
			title: "Insert template",
			layout: "flex",
			direction: "column",
			align: "stretch",
			padding: 15,
			spacing: 10,
			items: [{
				type: "form",
				flex: 0,
				padding: 0,
				items: [{
					type: "container",
					label: "Templates",
					items: {
						type: "listbox",
						label: "Templates",
						name: "template",
						values: h,
						onselect: c
					}
				}]
			}, {
				type: "label",
				name: "description",
				label: "Description",
				text: "\xa0"
			}, {
				type: "iframe",
				flex: 1,
				border: 1
			}],
			onsubmit: function() {
				g(!1, e)
			},
			width: a.getParam("template_popup_width", 600),
			height: a.getParam("template_popup_height", 500)
		}), void d.find("listbox")[0].fire("select")) : void a.windowManager.alert("No templates defined")
	}

	function d(b, c) {
		function d(a, b) {
			if (a = "" + a, a.length < b)
				for (var c = 0; c < b - a.length; c++) a = "0" + a;
			return a
		}
		var e = "Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),
			f = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),
			g = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
			h = "January February March April May June July August September October November December".split(" ");
		return c = c || new Date, b = b.replace("%D", "%m/%d/%Y"), b = b.replace("%r", "%I:%M:%S %p"), b = b.replace("%Y", "" + c.getFullYear()), b = b.replace("%y", "" + c.getYear()), b = b.replace("%m", d(c.getMonth() + 1, 2)), b = b.replace("%d", d(c.getDate(), 2)), b = b.replace("%H", "" + d(c.getHours(), 2)), b = b.replace("%M", "" + d(c.getMinutes(), 2)), b = b.replace("%S", "" + d(c.getSeconds(), 2)), b = b.replace("%I", "" + ((c.getHours() + 11) % 12 + 1)), b = b.replace("%p", "" + (c.getHours() < 12 ? "AM" : "PM")), b = b.replace("%B", "" + a.translate(h[c.getMonth()])), b = b.replace("%b", "" + a.translate(g[c.getMonth()])), b = b.replace("%A", "" + a.translate(f[c.getDay()])), b = b.replace("%a", "" + a.translate(e[c.getDay()])), b = b.replace("%%", "%")
	}

	function e(b) {
		var c = a.dom,
			d = a.getParam("template_replace_values");
		h(c.select("*", b), function(a) {
			h(d, function(b, e) {
				c.hasClass(a, e) && "function" == typeof d[e] && d[e](a)
			})
		})
	}

	function f(b, c) {
		return h(a.getParam(c), function(a, c) {
			"function" != typeof a && (b = b.replace(new RegExp("\\{\\$" + c + "\\}", "g"), a))
		}), b
	}

	function g(b, c) {
		function g(a, b) {
			return new RegExp("\\b" + b + "\\b", "g").test(a.className)
		}
		var i, j, k = a.dom,
			l = a.selection.getContent();
		c = f(c, "template_replace_values"), i = k.create("div", null, c), j = k.select(".mceTmpl", i), j && j.length > 0 && (i = k.create("div", null), i.appendChild(j[0].cloneNode(!0))), h(k.select("*", i), function(b) {
			g(b, a.getParam("template_cdate_classes", "cdate").replace(/\s+/g, "|")) && (b.innerHTML = d(a.getParam("template_cdate_format", a.getLang("template.cdate_format")))), g(b, a.getParam("template_mdate_classes", "mdate").replace(/\s+/g, "|")) && (b.innerHTML = d(a.getParam("template_mdate_format", a.getLang("template.mdate_format")))), g(b, a.getParam("template_selected_content_classes", "selcontent").replace(/\s+/g, "|")) && (b.innerHTML = l)
		}), e(i), a.execCommand("mceInsertContent", !1, i.innerHTML), a.addVisual()
	}
	var h = tinymce.each;
	a.addCommand("mceInsertTemplate", g), a.addButton("template", {
		title: "Insert template",
		onclick: b(c)
	}), a.addMenuItem("template", {
		text: "Insert template",
		onclick: b(c),
		context: "insert"
	}), a.on("PreProcess", function(b) {
		var c = a.dom;
		h(c.select("div", b.node), function(b) {
			c.hasClass(b, "mceTmpl") && (h(c.select("*", b), function(b) {
				c.hasClass(b, a.getParam("template_mdate_classes", "mdate").replace(/\s+/g, "|")) && (b.innerHTML = d(a.getParam("template_mdate_format", a.getLang("template.mdate_format"))))
			}), e(b))
		})
	})
});
tinymce.PluginManager.add("textcolor", function(a) {
	function b(b) {
		var c;
		return a.dom.getParents(a.selection.getStart(), function(a) {
			var d;
			(d = a.style["forecolor" == b ? "color" : "background-color"]) && (c = d)
		}), c
	}

	function c() {
		var b, c, d = [];
		for (c = a.settings.textcolor_map || ["000000", "Black", "993300", "Burnt orange", "333300", "Dark olive", "003300", "Dark green", "003366", "Dark azure", "000080", "Navy Blue", "333399", "Indigo", "333333", "Very dark gray", "800000", "Maroon", "FF6600", "Orange", "808000", "Olive", "008000", "Green", "008080", "Teal", "0000FF", "Blue", "666699", "Grayish blue", "808080", "Gray", "FF0000", "Red", "FF9900", "Amber", "99CC00", "Yellow green", "339966", "Sea green", "33CCCC", "Turquoise", "3366FF", "Royal blue", "800080", "Purple", "999999", "Medium gray", "FF00FF", "Magenta", "FFCC00", "Gold", "FFFF00", "Yellow", "00FF00", "Lime", "00FFFF", "Aqua", "00CCFF", "Sky blue", "993366", "Red violet", "FFFFFF", "White", "FF99CC", "Pink", "FFCC99", "Peach", "FFFF99", "Light yellow", "CCFFCC", "Pale green", "CCFFFF", "Pale cyan", "99CCFF", "Light sky blue", "CC99FF", "Plum"], b = 0; b < c.length; b += 2) d.push({
			text: c[b + 1],
			color: "#" + c[b]
		});
		return d
	}

	function d() {
		function b(a, b) {
			var c = "transparent" == a;
			return '<td class="mce-grid-cell' + (c ? " mce-colorbtn-trans" : "") + '"><div id="' + n + "-" + o+++'" data-mce-color="' + (a ? a : "") + '" role="option" tabIndex="-1" style="' + (a ? "background-color: " + a : "") + '" title="' + tinymce.translate(b) + '">' + (c ? "&#215;" : "") + "</div></td>"
		}
		var d, e, f, g, h, k, l, m = this,
			n = m._id,
			o = 0;
		for (d = c(), d.push({
			text: tinymce.translate("No color"),
			color: "transparent"
		}), f = '<table class="mce-grid mce-grid-border mce-colorbutton-grid" role="list" cellspacing="0"><tbody>', g = d.length - 1, k = 0; j > k; k++) {
			for (f += "<tr>", h = 0; i > h; h++) l = k * i + h, l > g ? f += "<td></td>" : (e = d[l], f += b(e.color, e.text));
			f += "</tr>"
		}
		if (a.settings.color_picker_callback) {
			for (f += '<tr><td colspan="' + i + '" class="mce-custom-color-btn"><div id="' + n + '-c" class="mce-widget mce-btn mce-btn-small mce-btn-flat" role="button" tabindex="-1" aria-labelledby="' + n + '-c" style="width: 100%"><button type="button" role="presentation" tabindex="-1">' + tinymce.translate("Custom...") + "</button></div></td></tr>", f += "<tr>", h = 0; i > h; h++) f += b("", "Custom color");
			f += "</tr>"
		}
		return f += "</tbody></table>"
	}

	function e(b, c) {
		a.focus(), a.formatter.apply(b, {
			value: c
		}), a.nodeChanged()
	}

	function f(b) {
		a.focus(), a.formatter.remove(b, {
			value: null
		}, null, !0), a.nodeChanged()
	}

	function g(c) {
		function d(a) {
			j.hidePanel(), j.color(a), e(j.settings.format, a)
		}

		function g(a, b) {
			a.style.background = b, a.setAttribute("data-mce-color", b)
		}
		var h, j = this.parent();
		if (tinymce.DOM.getParent(c.target, ".mce-custom-color-btn") && (j.hidePanel(), a.settings.color_picker_callback.call(a, function(a) {
			var b, c, e, f = j.panel.getEl().getElementsByTagName("table")[0];
			for (b = tinymce.map(f.rows[f.rows.length - 1].childNodes, function(a) {
				return a.firstChild
			}), e = 0; e < b.length && (c = b[e], c.getAttribute("data-mce-color")); e++);
			if (e == i)
				for (e = 0; i - 1 > e; e++) g(b[e], b[e + 1].getAttribute("data-mce-color"));
			g(c, a), d(a)
		}, b(j.settings.format))), h = c.target.getAttribute("data-mce-color")) {
			if (this.lastId && document.getElementById(this.lastId).setAttribute("aria-selected", !1), c.target.setAttribute("aria-selected", !0), this.lastId = c.target.id, "transparent" == h) return f(j.settings.format), void j.hidePanel();
			d(h)
		} else null !== h && j.hidePanel()
	}

	function h() {
		var a = this;
		a._color && e(a.settings.format, a._color)
	}
	var i, j;
	j = a.settings.textcolor_rows || 5, i = a.settings.textcolor_cols || 8, a.addButton("forecolor", {
		type: "colorbutton",
		tooltip: "Text color",
		format: "forecolor",
		panel: {
			role: "application",
			ariaRemember: !0,
			html: d,
			onclick: g
		},
		onclick: h
	}), a.addButton("backcolor", {
		type: "colorbutton",
		tooltip: "Background color",
		format: "hilitecolor",
		panel: {
			role: "application",
			ariaRemember: !0,
			html: d,
			onclick: g
		},
		onclick: h
	})
});
tinymce.PluginManager.add("textpattern", function(a) {
	function b() {
		return j && (i.sort(function(a, b) {
			return a.start.length > b.start.length ? -1 : a.start.length < b.start.length ? 1 : 0
		}), j = !1), i
	}

	function c(a) {
		for (var c = b(), d = 0; d < c.length; d++)
			if (0 === a.indexOf(c[d].start) && (!c[d].end || a.lastIndexOf(c[d].end) == a.length - c[d].end.length)) return c[d]
	}

	function d(a, c, d) {
		var e, f, g;
		for (e = b(), g = 0; g < e.length; g++)
			if (f = e[g], f.end && a.substr(c - f.end.length - d, f.end.length) == f.end) return f
	}

	function e(b) {
		function e() {
			i = i.splitText(k), i.splitText(j - k - o), i.deleteData(0, n.start.length), i.deleteData(i.data.length - n.end.length, n.end.length)
		}
		var f, g, h, i, j, k, l, m, n, o, p;
		return f = a.selection, g = a.dom, f.isCollapsed() && (h = f.getRng(!0), i = h.startContainer, j = h.startOffset, l = i.data, o = b ? 1 : 0, 3 == i.nodeType && (n = d(l, j, o), n && (k = Math.max(0, j - o), k = l.lastIndexOf(n.start, k - n.end.length - 1), -1 !== k && (m = g.createRng(), m.setStart(i, k), m.setEnd(i, j - o), n = c(m.toString()), n && n.end && !(i.data.length <= n.start.length + n.end.length))))) ? (p = a.formatter.get(n.format), p && p[0].inline ? (e(), a.formatter.apply(n.format, {}, i), i) : void 0) : void 0
	}

	function f() {
		var b, d, e, f, g, h, i, j, k, l, m;
		if (b = a.selection, d = a.dom, b.isCollapsed() && (i = d.getParent(b.getStart(), "p"))) {
			for (k = new tinymce.dom.TreeWalker(i, i); g = k.next();)
				if (3 == g.nodeType) {
					f = g;
					break
				}
			if (f) {
				if (j = c(f.data), !j) return;
				if (l = b.getRng(!0), e = l.startContainer, m = l.startOffset, f == e && (m = Math.max(0, m - j.start.length)), tinymce.trim(f.data).length == j.start.length) return;
				j.format && (h = a.formatter.get(j.format), h && h[0].block && (f.deleteData(0, j.start.length), a.formatter.apply(j.format, {}, f), l.setStart(e, m), l.collapse(!0), b.setRng(l))), j.cmd && a.undoManager.transact(function() {
					f.deleteData(0, j.start.length), a.execCommand(j.cmd)
				})
			}
		}
	}

	function g() {
		var b, c;
		c = e(), c && (b = a.dom.createRng(), b.setStart(c, c.data.length), b.setEnd(c, c.data.length), a.selection.setRng(b)), f()
	}

	function h() {
		var b, c, d, f, g;
		b = e(!0), b && (g = a.dom, c = b.data.slice(-1), /[\u00a0 ]/.test(c) && (b.deleteData(b.data.length - 1, 1), d = g.doc.createTextNode(c), b.nextSibling ? g.insertAfter(d, b.nextSibling) : b.parentNode.appendChild(d), f = g.createRng(), f.setStart(d, 1), f.setEnd(d, 1), a.selection.setRng(f)))
	}
	var i, j = !0;
	i = a.settings.textpattern_patterns || [{
		start: "*",
		end: "*",
		format: "italic"
	}, {
		start: "**",
		end: "**",
		format: "bold"
	}, {
		start: "#",
		format: "h1"
	}, {
		start: "##",
		format: "h2"
	}, {
		start: "###",
		format: "h3"
	}, {
		start: "####",
		format: "h4"
	}, {
		start: "#####",
		format: "h5"
	}, {
		start: "######",
		format: "h6"
	}, {
		start: "1. ",
		cmd: "InsertOrderedList"
	}, {
		start: "* ",
		cmd: "InsertUnorderedList"
	}, {
		start: "- ",
		cmd: "InsertUnorderedList"
	}], a.on("keydown", function(a) {
		13 != a.keyCode || tinymce.util.VK.modifierPressed(a) || g()
	}, !0), a.on("keyup", function(a) {
		32 != a.keyCode || tinymce.util.VK.modifierPressed(a) || h()
	}), this.getPatterns = b, this.setPatterns = function(a) {
		i = a, j = !0
	}
});
tinymce.PluginManager.add("visualblocks", function(a, b) {
	function c() {
		var b = this;
		b.active(f), a.on("VisualBlocks", function() {
			b.active(a.dom.hasClass(a.getBody(), "mce-visualblocks"))
		})
	}
	var d, e, f;
	window.NodeList && (a.addCommand("mceVisualBlocks", function() {
		var c, g = a.dom;
		d || (d = g.uniqueId(), c = g.create("link", {
			id: d,
			rel: "stylesheet",
			href: b + "/css/visualblocks.css"
		}), a.getDoc().getElementsByTagName("head")[0].appendChild(c)), a.on("PreviewFormats AfterPreviewFormats", function(b) {
			f && g.toggleClass(a.getBody(), "mce-visualblocks", "afterpreviewformats" == b.type)
		}), g.toggleClass(a.getBody(), "mce-visualblocks"), f = a.dom.hasClass(a.getBody(), "mce-visualblocks"), e && e.active(g.hasClass(a.getBody(), "mce-visualblocks")), a.fire("VisualBlocks")
	}), a.addButton("visualblocks", {
		title: "Show blocks",
		cmd: "mceVisualBlocks",
		onPostRender: c
	}), a.addMenuItem("visualblocks", {
		text: "Show blocks",
		cmd: "mceVisualBlocks",
		onPostRender: c,
		selectable: !0,
		context: "view",
		prependToContext: !0
	}), a.on("init", function() {
		a.settings.visualblocks_default_state && a.execCommand("mceVisualBlocks", !1, null, {
			skip_focus: !0
		})
	}), a.on("remove", function() {
		a.dom.removeClass(a.getBody(), "mce-visualblocks")
	}))
});
tinymce.PluginManager.add("visualchars", function(a) {
	function b(b) {
		var c, f, g, h, i, j, k = a.getBody(),
			l = a.selection;
		if (d = !d, e.state = d, a.fire("VisualChars", {
			state: d
		}), b && (j = l.getBookmark()), d)
			for (f = [], tinymce.walk(k, function(a) {
				3 == a.nodeType && a.nodeValue && -1 != a.nodeValue.indexOf("\xa0") && f.push(a)
			}, "childNodes"), g = 0; g < f.length; g++) {
				for (h = f[g].nodeValue, h = h.replace(/(\u00a0)/g, '<span data-mce-bogus="1" class="mce-nbsp">$1</span>'), i = a.dom.create("div", null, h); c = i.lastChild;) a.dom.insertAfter(c, f[g]);
				a.dom.remove(f[g])
			} else
				for (f = a.dom.select("span.mce-nbsp", k), g = f.length - 1; g >= 0; g--) a.dom.remove(f[g], 1);
		l.moveToBookmark(j)
	}

	function c() {
		var b = this;
		a.on("VisualChars", function(a) {
			b.active(a.state)
		})
	}
	var d, e = this;
	a.addCommand("mceVisualChars", b), a.addButton("visualchars", {
		title: "Show invisible characters",
		cmd: "mceVisualChars",
		onPostRender: c
	}), a.addMenuItem("visualchars", {
		text: "Show invisible characters",
		cmd: "mceVisualChars",
		onPostRender: c,
		selectable: !0,
		context: "view",
		prependToContext: !0
	}), a.on("beforegetcontent", function(a) {
		d && "raw" != a.format && !a.draft && (d = !0, b(!1))
	})
});
tinymce.PluginManager.add("wordcount", function(a) {
	function b() {
		a.theme.panel.find("#wordcount").text(["Words: {0}", e.getCount()])
	}
	var c, d, e = this;
	c = a.getParam("wordcount_countregex", /[\w\u2019\x27\-\u00C0-\u1FFF]+/g), d = a.getParam("wordcount_cleanregex", /[0-9.(),;:!?%#$?\x27\x22_+=\\\/\-]*/g), a.on("init", function() {
		var c = a.theme.panel && a.theme.panel.find("#statusbar")[0];
		c && window.setTimeout(function() {
			c.insert({
				type: "label",
				name: "wordcount",
				text: ["Words: {0}", e.getCount()],
				classes: "wordcount",
				disabled: a.settings.readonly
			}, 0), a.on("setcontent beforeaddundo", b), a.on("keyup", function(a) {
				32 == a.keyCode && b()
			})
		}, 0)
	}), e.getCount = function() {
		var b = a.getContent({
				format: "raw"
			}),
			e = 0;
		if (b) {
			b = b.replace(/\.\.\./g, " "), b = b.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " "), b = b.replace(/(\w+)(&#?[a-z0-9]+;)+(\w+)/i, "$1$3").replace(/&.+?;/g, " "), b = b.replace(d, "");
			var f = b.match(c);
			f && (e = f.length)
		}
		return e
	}
});
tinymce.ThemeManager.add("modern", function(a) {
	function b() {
		function b(b) {
			var d, e = [];
			if (b) return l(b.split(/[ ,]/), function(b) {
				function c() {
					var c = a.selection;
					"bullist" == f && c.selectorChanged("ul > li", function(a, c) {
						for (var d, e = c.parents.length; e-- && (d = c.parents[e].nodeName, "OL" != d && "UL" != d););
						b.active(a && "UL" == d)
					}), "numlist" == f && c.selectorChanged("ol > li", function(a, c) {
						for (var d, e = c.parents.length; e-- && (d = c.parents[e].nodeName, "OL" != d && "UL" != d););
						b.active(a && "OL" == d)
					}), b.settings.stateSelector && c.selectorChanged(b.settings.stateSelector, function(a) {
						b.active(a)
					}, !0), b.settings.disabledStateSelector && c.selectorChanged(b.settings.disabledStateSelector, function(a) {
						b.disabled(a)
					})
				}
				var f;
				"|" == b ? d = null : k.has(b) ? (b = {
					type: b
				}, j.toolbar_items_size && (b.size = j.toolbar_items_size), e.push(b), d = null) : (d || (d = {
					type: "buttongroup",
					items: []
				}, e.push(d)), a.buttons[b] && (f = b, b = a.buttons[f], "function" == typeof b && (b = b()), b.type = b.type || "button", j.toolbar_items_size && (b.size = j.toolbar_items_size), b = k.create(b), d.items.push(b), a.initialized ? c() : a.on("init", c)))
			}), c.push({
				type: "toolbar",
				layout: "flow",
				items: e
			}), !0
		}
		var c = [];
		if (tinymce.isArray(j.toolbar)) {
			if (0 === j.toolbar.length) return;
			tinymce.each(j.toolbar, function(a, b) {
				j["toolbar" + (b + 1)] = a
			}), delete j.toolbar
		}
		for (var d = 1; 10 > d && b(j["toolbar" + d]); d++);
		return c.length || j.toolbar === !1 || b(j.toolbar || o), c.length ? {
			type: "panel",
			layout: "stack",
			classes: "toolbar-grp",
			ariaRoot: !0,
			ariaRemember: !0,
			items: c
		} : void 0
	}

	function c() {
		function b(b) {
			var c;
			return "|" == b ? {
				text: "|"
			} : c = a.menuItems[b]
		}

		function c(c) {
			var d, e, f, g, h;
			if (h = tinymce.makeMap((j.removed_menuitems || "").split(/[ ,]/)), j.menu ? (e = j.menu[c], g = !0) : e = n[c], e) {
				d = {
					text: e.title
				}, f = [], l((e.items || "").split(/[ ,]/), function(a) {
					var c = b(a);
					c && !h[a] && f.push(b(a))
				}), g || l(a.menuItems, function(a) {
					a.context == c && ("before" == a.separator && f.push({
						text: "|"
					}), a.prependToContext ? f.unshift(a) : f.push(a), "after" == a.separator && f.push({
						text: "|"
					}))
				});
				for (var i = 0; i < f.length; i++) "|" == f[i].text && (0 === i || i == f.length - 1) && f.splice(i, 1);
				if (d.menu = f, !d.menu.length) return null
			}
			return d
		}
		var d, e = [],
			f = [];
		if (j.menu)
			for (d in j.menu) f.push(d);
		else
			for (d in n) f.push(d);
		for (var g = "string" == typeof j.menubar ? j.menubar.split(/[ ,]/) : f, h = 0; h < g.length; h++) {
			var i = g[h];
			i = c(i), i && e.push(i)
		}
		return e
	}

	function d(b) {
		function c(a) {
			var c = b.find(a)[0];
			c && c.focus(!0)
		}
		a.shortcuts.add("Alt+F9", "", function() {
			c("menubar")
		}), a.shortcuts.add("Alt+F10", "", function() {
			c("toolbar")
		}), a.shortcuts.add("Alt+F11", "", function() {
			c("elementpath")
		}), b.on("cancel", function() {
			a.focus()
		})
	}

	function e(b, c) {
		function d(a) {
			return {
				width: a.clientWidth,
				height: a.clientHeight
			}
		}
		var e, f, g, h;
		e = a.getContainer(), f = a.getContentAreaContainer().firstChild, g = d(e), h = d(f), null !== b && (b = Math.max(j.min_width || 100, b), b = Math.min(j.max_width || 65535, b), m.setStyle(e, "width", b + (g.width - h.width)), m.setStyle(f, "width", b)), c = Math.max(j.min_height || 100, c), c = Math.min(j.max_height || 65535, c), m.setStyle(f, "height", c), a.fire("ResizeEditor")
	}

	function f(b, c) {
		var d = a.getContentAreaContainer();
		i.resizeTo(d.clientWidth + b, d.clientHeight + c)
	}

	function g(e) {
		function f() {
			if (n && n.moveRel && n.visible() && !n._fixed) {
				var b = a.selection.getScrollContainer(),
					c = a.getBody(),
					d = 0,
					e = 0;
				if (b) {
					var f = m.getPos(c),
						g = m.getPos(b);
					d = Math.max(0, g.x - f.x), e = Math.max(0, g.y - f.y)
				}
				n.fixed(!1).moveRel(c, a.rtl ? ["tr-br", "br-tr"] : ["tl-bl", "bl-tl", "tr-br"]).moveBy(d, e)
			}
		}

		function g() {
			n && (n.show(), f(), m.addClass(a.getBody(), "mce-edit-focus"))
		}

		function h() {
			n && (n.hide(), m.removeClass(a.getBody(), "mce-edit-focus"))
		}

		function l() {
			return n ? void(n.visible() || g()) : (n = i.panel = k.create({
				type: o ? "panel" : "floatpanel",
				role: "application",
				classes: "tinymce tinymce-inline",
				layout: "flex",
				direction: "column",
				align: "stretch",
				autohide: !1,
				autofix: !0,
				fixed: !!o,
				border: 1,
				items: [j.menubar === !1 ? null : {
						type: "menubar",
						border: "0 0 1 0",
						items: c()
					},
					b()
				]
			}), a.fire("BeforeRenderUI"), n.renderTo(o || document.body).reflow(), d(n), g(), a.on("nodeChange", f), a.on("activate", g), a.on("deactivate", h), void a.nodeChanged())
		}
		var n, o;
		return j.fixed_toolbar_container && (o = m.select(j.fixed_toolbar_container)[0]), j.content_editable = !0, a.on("focus", function() {
			e.skinUiCss ? tinymce.DOM.styleSheetLoader.load(e.skinUiCss, l, l) : l()
		}), a.on("blur hide", h), a.on("remove", function() {
			n && (n.remove(), n = null)
		}), e.skinUiCss && tinymce.DOM.styleSheetLoader.load(e.skinUiCss), {}
	}

	function h(f) {
		var g, h, l;
		return f.skinUiCss && tinymce.DOM.loadCSS(f.skinUiCss), g = i.panel = k.create({
			type: "panel",
			role: "application",
			classes: "tinymce",
			style: "visibility: hidden",
			layout: "stack",
			border: 1,
			items: [j.menubar === !1 ? null : {
					type: "menubar",
					border: "0 0 1 0",
					items: c()
				},
				b(), {
					type: "panel",
					name: "iframe",
					layout: "stack",
					classes: "edit-area",
					html: "",
					border: "1 0 0 0"
				}
			]
		}), j.resize !== !1 && (h = {
			type: "resizehandle",
			direction: j.resize,
			onResizeStart: function() {
				var b = a.getContentAreaContainer().firstChild;
				l = {
					width: b.clientWidth,
					height: b.clientHeight
				}
			},
			onResize: function(a) {
				"both" == j.resize ? e(l.width + a.deltaX, l.height + a.deltaY) : e(null, l.height + a.deltaY)
			}
		}), j.statusbar !== !1 && g.add({
			type: "panel",
			name: "statusbar",
			classes: "statusbar",
			layout: "flow",
			border: "1 0 0 0",
			ariaRoot: !0,
			items: [{
					type: "elementpath"
				},
				h
			]
		}), j.readonly && g.find("*").disabled(!0), a.fire("BeforeRenderUI"), g.renderBefore(f.targetNode).reflow(), j.width && tinymce.DOM.setStyle(g.getEl(), "width", j.width), a.on("remove", function() {
			g.remove(), g = null
		}), d(g), {
			iframeContainer: g.find("#iframe")[0].getEl(),
			editorContainer: g.getEl()
		}
	}
	var i = this,
		j = a.settings,
		k = tinymce.ui.Factory,
		l = tinymce.each,
		m = tinymce.DOM,
		n = {
			file: {
				title: "File",
				items: "newdocument"
			},
			edit: {
				title: "Edit",
				items: "undo redo | cut copy paste pastetext | selectall"
			},
			insert: {
				title: "Insert",
				items: "|"
			},
			view: {
				title: "View",
				items: "visualaid |"
			},
			format: {
				title: "Format",
				items: "bold italic underline strikethrough superscript subscript | formats | removeformat"
			},
			table: {
				title: "Table"
			},
			tools: {
				title: "Tools"
			}
		},
		o = "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image";
	i.renderUI = function(b) {
		var c = j.skin !== !1 ? j.skin || "lightgray" : !1;
		if (c) {
			var d = j.skin_url;
			d = d ? a.documentBaseURI.toAbsolute(d) : tinymce.baseURL + "/skins/" + c, b.skinUiCss = tinymce.Env.documentMode <= 7 ? d + "/skin.ie7.min.css" : d + "/skin.min.css", a.contentCSS.push(d + "/content" + (a.inline ? ".inline" : "") + ".min.css")
		}
		return a.on("ProgressState", function(a) {
			i.throbber = i.throbber || new tinymce.ui.Throbber(i.panel.getEl("body")), a.state ? i.throbber.show(a.time) : i.throbber.hide()
		}), j.inline ? g(b) : h(b)
	}, i.resizeTo = e, i.resizeBy = f
});