;
(function () {
	(function (p) {
		var A = this || (0, eval)("this"),
		w = A.document,
		K = A.navigator,
		t = A.jQuery,
		C = A.JSON;
		(function (p) {
			"function" === typeof require && "object" === typeof exports && "object" === typeof module ? p(module.exports || exports) : "function" === typeof define && define.amd ? define(["exports"], p) : p(A.ko = {})
		})(function (z) {
			function G(a, c) {
				return null === a || typeof a in M ? a === c : !1
			}
			function N(a, c) {
				var d;
				return function () {
					d || (d = setTimeout(function () {
								d = p;
								a()
							}, c))
				}
			}
			function O(a, c) {
				var d;
				return function () {
					clearTimeout(d);
					d = setTimeout(a, c)
				}
			}
			function H(b, c, d, e) {
				a.d[b] = {
					init : function (b, h, g, k, l) {
						var n,
						r;
						a.ba(function () {
							var g = a.a.c(h()),
							k = !d !== !g,
							s = !r;
							if (s || c || k !== n)
								s && a.ca.fa() && (r = a.a.lb(a.e.childNodes(b), !0)), k ? (s || a.e.U(b, a.a.lb(r)), a.gb(e ? e(l, g) : l, b)) : a.e.da(b), n = k
						}, null, {
							G : b
						});
						return {
							controlsDescendantBindings : !0
						}
					}
				};
				a.g.aa[b] = !1;
				a.e.Q[b] = !0
			}
			var a = "undefined" !== typeof z ? z : {};
			a.b = function (b, c) {
				for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++)
					e = e[d[f]];
				e[d[d.length - 1]] = c
			};
			a.s = function (a, c, d) {
				a[c] = d
			};
			a.version = "3.1.0";
			a.b("version", a.version);
			a.a = function () {
				function b(a, b) {
					for (var c in a)
						a.hasOwnProperty(c) && b(c, a[c])
				}
				function c(a, b) {
					if (b)
						for (var c in b)
							b.hasOwnProperty(c) && (a[c] = b[c]);
					return a
				}
				function d(a, b) {
					a.__proto__ = b;
					return a
				}
				var e = {
					__proto__ : []
				}
				instanceof Array,
				f = {},
				h = {};
				f[K && /Firefox\/2/i.test(K.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
				f.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
				b(f, function (a, b) {
					if (b.length)
						for (var c = 0, d = b.length; c < d; c++)
							h[b[c]] = a
				});
				var g = {
					propertychange : !0
				},
				k = w && function () {
					for (var a = 3, b = w.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0]; );
					return 4 < a ? a : p
				}
				();
				return {
					mb : ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
					r : function (a, b) {
						for (var c = 0, d = a.length; c < d; c++)
							b(a[c], c)
					},
					l : function (a, b) {
						if ("function" == typeof Array.prototype.indexOf)
							return Array.prototype.indexOf.call(a, b);
						for (var c = 0, d = a.length; c < d; c++)
							if (a[c] === b)
								return c;
						return -1
					},
					hb : function (a, b, c) {
						for (var d = 0, e = a.length; d < e; d++)
							if (b.call(c, a[d], d))
								return a[d];
						return null
					},
					ma : function (b, c) {
						var d = a.a.l(b, c);
						0 < d ? b.splice(d, 1) : 0 === d && b.shift()
					},
					ib : function (b) {
						b = b || [];
						for (var c = [], d = 0, e = b.length; d < e; d++)
							0 > a.a.l(c, b[d]) && c.push(b[d]);
						return c
					},
					ya : function (a, b) {
						a = a || [];
						for (var c = [], d = 0, e = a.length; d < e; d++)
							c.push(b(a[d], d));
						return c
					},
					la : function (a, b) {
						a = a || [];
						for (var c = [], d = 0, e = a.length; d < e; d++)
							b(a[d], d) && c.push(a[d]);
						return c
					},
					$ : function (a, b) {
						if (b instanceof Array)
							a.push.apply(a, b);
						else
							for (var c = 0, d = b.length; c < d; c++)
								a.push(b[c]);
						return a
					},
					Y : function (b, c, d) {
						var e = a.a.l(a.a.Sa(b), c);
						0 > e ? d && b.push(c) : d || b.splice(e, 1)
					},
					na : e,
					extend : c,
					ra : d,
					sa : e ? d : c,
					A : b,
					Oa : function (a, b) {
						if (!a)
							return a;
						var c = {},
						d;
						for (d in a)
							a.hasOwnProperty(d) && (c[d] = b(a[d], d, a));
						return c
					},
					Fa : function (b) {
						for (; b.firstChild; )
							a.removeNode(b.firstChild)
					},
					ec : function (b) {
						b = a.a.R(b);
						for (var c = w.createElement("div"), d = 0, e = b.length; d < e; d++)
							c.appendChild(a.M(b[d]));
						return c
					},
					lb : function (b, c) {
						for (var d = 0, e = b.length, g = []; d < e; d++) {
							var k = b[d].cloneNode(!0);
							g.push(c ? a.M(k) : k)
						}
						return g
					},
					U : function (b, c) {
						a.a.Fa(b);
						if (c)
							for (var d = 0, e = c.length; d < e; d++)
								b.appendChild(c[d])
					},
					Bb : function (b, c) {
						var d = b.nodeType ? [b] : b;
						if (0 < d.length) {
							for (var e = d[0], g = e.parentNode, k = 0, h = c.length; k < h; k++)
								g.insertBefore(c[k], e);
							k = 0;
							for (h = d.length; k < h; k++)
								a.removeNode(d[k])
						}
					},
					ea : function (a, b) {
						if (a.length) {
							for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b; )
								a.shift();
							if (1 < a.length) {
								var c = a[0],
								d = a[a.length - 1];
								for (a.length = 0; c !== d; )
									if (a.push(c), c = c.nextSibling, !c)
										return;
								a.push(d)
							}
						}
						return a
					},
					Db : function (a, b) {
						7 > k ? a.setAttribute("selected", b) : a.selected = b
					},
					ta : function (a) {
						return null === a || a === p ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
					},
					oc : function (b, c) {
						for (var d = [], e = (b || "").split(c), g = 0, k = e.length; g < k; g++) {
							var h = a.a.ta(e[g]);
							"" !== h && d.push(h)
						}
						return d
					},
					kc : function (a, b) {
						a = a || "";
						return b.length > a.length ? !1 : a.substring(0, b.length) === b
					},
					Sb : function (a, b) {
						if (a === b)
							return !0;
						if (11 === a.nodeType)
							return !1;
						if (b.contains)
							return b.contains(3 === a.nodeType ? a.parentNode : a);
						if (b.compareDocumentPosition)
							return 16 == (b.compareDocumentPosition(a) & 16);
						for (; a && a != b; )
							a = a.parentNode;
						return !!a
					},
					Ea : function (b) {
						return a.a.Sb(b, b.ownerDocument.documentElement)
					},
					eb : function (b) {
						return !!a.a.hb(b, a.a.Ea)
					},
					B : function (a) {
						return a && a.tagName && a.tagName.toLowerCase()
					},
					q : function (b, c, d) {
						var e = k && g[c];
						if (!e && t)
							t(b).bind(c, d);
						else if (e || "function" != typeof b.addEventListener)
							if ("undefined" != typeof b.attachEvent) {
								var h = function (a) {
									d.call(b, a)
								},
								f = "on" + c;
								b.attachEvent(f, h);
								a.a.u.ja(b, function () {
									b.detachEvent(f, h)
								})
							} else
								throw Error("Browser doesn't support addEventListener or attachEvent");
						else
							b.addEventListener(c, d, !1)
					},
					ha : function (b, c) {
						if (!b || !b.nodeType)
							throw Error("element must be a DOM node when calling triggerEvent");
						var d;
						"input" === a.a.B(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1;
						if (t && !d)
							t(b).trigger(c);
						else if ("function" == typeof w.createEvent)
							if ("function" == typeof b.dispatchEvent)
								d = w.createEvent(h[c] || "HTMLEvents"), d.initEvent(c, !0, !0, A, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d);
							else
								throw Error("The supplied element doesn't support dispatchEvent");
						else if (d && b.click)
							b.click();
						else if ("undefined" != typeof b.fireEvent)
							b.fireEvent("on" + c);
						else
							throw Error("Browser doesn't support triggering events");
					},
					c : function (b) {
						return a.v(b) ? b() : b
					},
					Sa : function (b) {
						return a.v(b) ? b.o() : b
					},
					ua : function (b, c, d) {
						if (c) {
							var e = /\S+/g,
							g = b.className.match(e) || [];
							a.a.r(c.match(e), function (b) {
								a.a.Y(g, b, d)
							});
							b.className = g.join(" ")
						}
					},
					Xa : function (b, c) {
						var d = a.a.c(c);
						if (null === d || d === p)
							d = "";
						var e = a.e.firstChild(b);
						!e || 3 != e.nodeType || a.e.nextSibling(e) ? a.e.U(b, [b.ownerDocument.createTextNode(d)]) : e.data = d;
						a.a.Vb(b)
					},
					Cb : function (a, b) {
						a.name = b;
						if (7 >= k)
							try {
								a.mergeAttributes(w.createElement("<input name='" + a.name + "'/>"), !1)
							} catch (c) {}

					},
					Vb : function (a) {
						9 <= k && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom))
					},
					Tb : function (a) {
						if (k) {
							var b = a.style.width;
							a.style.width = 0;
							a.style.width = b
						}
					},
					ic : function (b, c) {
						b = a.a.c(b);
						c = a.a.c(c);
						for (var d = [], e = b; e <= c; e++)
							d.push(e);
						return d
					},
					R : function (a) {
						for (var b = [], c = 0, d = a.length; c < d; c++)
							b.push(a[c]);
						return b
					},
					mc : 6 === k,
					nc : 7 === k,
					oa : k,
					ob : function (b, c) {
						for (var d = a.a.R(b.getElementsByTagName("input")).concat(a.a.R(b.getElementsByTagName("textarea"))), e = "string" == typeof c ? function (a) {
							return a.name === c
						}
							 : function (a) {
							return c.test(a.name)
						}, g = [], k = d.length - 1; 0 <= k; k--)
							e(d[k]) && g.push(d[k]);
						return g
					},
					fc : function (b) {
						return "string" == typeof b && (b = a.a.ta(b)) ? C && C.parse ? C.parse(b) : (new Function("return " + b))() : null
					},
					Ya : function (b, c, d) {
						if (!C || !C.stringify)
							throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
						return C.stringify(a.a.c(b), c, d)
					},
					gc : function (c, d, e) {
						e = e || {};
						var g = e.params || {},
						k = e.includeFields || this.mb,
						h = c;
						if ("object" == typeof c && "form" === a.a.B(c))
							for (var h = c.action, f = k.length - 1; 0 <= f; f--)
								for (var u = a.a.ob(c, k[f]), D = u.length - 1; 0 <= D; D--)
									g[u[D].name] = u[D].value;
						d = a.a.c(d);
						var y = w.createElement("form");
						y.style.display = "none";
						y.action = h;
						y.method = "post";
						for (var p in d)
							c = w.createElement("input"), c.name = p, c.value = a.a.Ya(a.a.c(d[p])), y.appendChild(c);
						b(g, function (a, b) {
							var c = w.createElement("input");
							c.name = a;
							c.value = b;
							y.appendChild(c)
						});
						w.body.appendChild(y);
						e.submitter ? e.submitter(y) : y.submit();
						setTimeout(function () {
							y.parentNode.removeChild(y)
						}, 0)
					}
				}
			}
			();
			a.b("utils", a.a);
			a.b("utils.arrayForEach", a.a.r);
			a.b("utils.arrayFirst", a.a.hb);
			a.b("utils.arrayFilter", a.a.la);
			a.b("utils.arrayGetDistinctValues", a.a.ib);
			a.b("utils.arrayIndexOf", a.a.l);
			a.b("utils.arrayMap", a.a.ya);
			a.b("utils.arrayPushAll", a.a.$);
			a.b("utils.arrayRemoveItem", a.a.ma);
			a.b("utils.extend", a.a.extend);
			a.b("utils.fieldsIncludedWithJsonPost", a.a.mb);
			a.b("utils.getFormFields", a.a.ob);
			a.b("utils.peekObservable", a.a.Sa);
			a.b("utils.postJson", a.a.gc);
			a.b("utils.parseJson", a.a.fc);
			a.b("utils.registerEventHandler", a.a.q);
			a.b("utils.stringifyJson", a.a.Ya);
			a.b("utils.range", a.a.ic);
			a.b("utils.toggleDomNodeCssClass", a.a.ua);
			a.b("utils.triggerEvent", a.a.ha);
			a.b("utils.unwrapObservable", a.a.c);
			a.b("utils.objectForEach", a.a.A);
			a.b("utils.addOrRemoveItem", a.a.Y);
			a.b("unwrap", a.a.c);
			Function.prototype.bind || (Function.prototype.bind = function (a) {
				var c = this,
				d = Array.prototype.slice.call(arguments);
				a = d.shift();
				return function () {
					return c.apply(a, d.concat(Array.prototype.slice.call(arguments)))
				}
			});
			a.a.f = new function () {
				function a(b, h) {
					var g = b[d];
					if (!g || "null" === g || !e[g]) {
						if (!h)
							return p;
						g = b[d] = "ko" + c++;
						e[g] = {}

					}
					return e[g]
				}
				var c = 0,
				d = "__ko__" + (new Date).getTime(),
				e = {};
				return {
					get : function (c, d) {
						var e = a(c, !1);
						return e === p ? p : e[d]
					},
					set : function (c, d, e) {
						if (e !== p || a(c, !1) !== p)
							a(c, !0)[d] = e
					},
					clear : function (a) {
						var b = a[d];
						return b ? (delete e[b], a[d] = null, !0) : !1
					},
					L : function () {
						return c++ + d
					}
				}
			};
			a.b("utils.domData", a.a.f);
			a.b("utils.domData.clear", a.a.f.clear);
			a.a.u = new function () {
				function b(b, c) {
					var e = a.a.f.get(b, d);
					e === p && c && (e = [], a.a.f.set(b, d, e));
					return e
				}
				function c(d) {
					var e = b(d, !1);
					if (e)
						for (var e = e.slice(0), k = 0; k < e.length; k++)
							e[k](d);
					a.a.f.clear(d);
					a.a.u.cleanExternalData(d);
					if (f[d.nodeType])
						for (e = d.firstChild; d = e; )
							e = d.nextSibling, 8 === d.nodeType && c(d)
				}
				var d = a.a.f.L(),
				e = {
					1 : !0,
					8 : !0,
					9 : !0
				},
				f = {
					1 : !0,
					9 : !0
				};
				return {
					ja : function (a, c) {
						if ("function" != typeof c)
							throw Error("Callback must be a function");
						b(a, !0).push(c)
					},
					Ab : function (c, e) {
						var k = b(c, !1);
						k && (a.a.ma(k, e), 0 == k.length && a.a.f.set(c, d, p))
					},
					M : function (b) {
						if (e[b.nodeType] && (c(b), f[b.nodeType])) {
							var d = [];
							a.a.$(d, b.getElementsByTagName("*"));
							for (var k = 0, l = d.length; k < l; k++)
								c(d[k])
						}
						return b
					},
					removeNode : function (b) {
						a.M(b);
						b.parentNode && b.parentNode.removeChild(b)
					},
					cleanExternalData : function (a) {
						t && "function" == typeof t.cleanData && t.cleanData([a])
					}
				}
			};
			a.M = a.a.u.M;
			a.removeNode = a.a.u.removeNode;
			a.b("cleanNode", a.M);
			a.b("removeNode", a.removeNode);
			a.b("utils.domNodeDisposal", a.a.u);
			a.b("utils.domNodeDisposal.addDisposeCallback", a.a.u.ja);
			a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.u.Ab);
			(function () {
				a.a.Qa = function (b) {
					var c;
					if (t)
						if (t.parseHTML)
							c = t.parseHTML(b) || [];
						else {
							if ((c = t.clean([b])) && c[0]) {
								for (b = c[0]; b.parentNode && 11 !== b.parentNode.nodeType; )
									b = b.parentNode;
								b.parentNode && b.parentNode.removeChild(b)
							}
						}
					else {
						var d = a.a.ta(b).toLowerCase();
						c = w.createElement("div");
						d = d.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !d.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!d.indexOf("<td") || !d.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""];
						b = "ignored<div>" + d[1] + b + d[2] + "</div>";
						for ("function" == typeof A.innerShiv ? c.appendChild(A.innerShiv(b)) : c.innerHTML = b; d[0]--; )
							c = c.lastChild;
						c = a.a.R(c.lastChild.childNodes)
					}
					return c
				};
				a.a.Va = function (b, c) {
					a.a.Fa(b);
					c = a.a.c(c);
					if (null !== c && c !== p)
						if ("string" != typeof c && (c = c.toString()), t)
							t(b).html(c);
						else
							for (var d = a.a.Qa(c), e = 0; e < d.length; e++)
								b.appendChild(d[e])
				}
			})();
			a.b("utils.parseHtmlFragment", a.a.Qa);
			a.b("utils.setHtml", a.a.Va);
			a.w = function () {
				function b(c, e) {
					if (c)
						if (8 == c.nodeType) {
							var f = a.w.xb(c.nodeValue);
							null != f && e.push({
								Rb : c,
								cc : f
							})
						} else if (1 == c.nodeType)
							for (var f = 0, h = c.childNodes, g = h.length; f < g; f++)
								b(h[f], e)
				}
				var c = {};
				return {
					Na : function (a) {
						if ("function" != typeof a)
							throw Error("You can only pass a function to ko.memoization.memoize()");
						var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
						c[b] = a;
						return "\x3c!--[ko_memo:" + b + "]--\x3e"
					},
					Hb : function (a, b) {
						var f = c[a];
						if (f === p)
							throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");
						try {
							return f.apply(null, b || []),
							!0
						}
						finally {
							delete c[a]
						}
					},
					Ib : function (c, e) {
						var f = [];
						b(c, f);
						for (var h = 0, g = f.length; h < g; h++) {
							var k = f[h].Rb,
							l = [k];
							e && a.a.$(l, e);
							a.w.Hb(f[h].cc, l);
							k.nodeValue = "";
							k.parentNode && k.parentNode.removeChild(k)
						}
					},
					xb : function (a) {
						return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null
					}
				}
			}
			();
			a.b("memoization", a.w);
			a.b("memoization.memoize", a.w.Na);
			a.b("memoization.unmemoize", a.w.Hb);
			a.b("memoization.parseMemoText", a.w.xb);
			a.b("memoization.unmemoizeDomNodeAndDescendants", a.w.Ib);
			a.Ga = {
				throttle : function (b, c) {
					b.throttleEvaluation = c;
					var d = null;
					return a.h({
						read : b,
						write : function (a) {
							clearTimeout(d);
							d = setTimeout(function () {
									b(a)
								}, c)
						}
					})
				},
				rateLimit : function (a, c) {
					var d,
					e,
					f;
					"number" == typeof c ? d = c : (d = c.timeout, e = c.method);
					f = "notifyWhenChangesStop" == e ? O : N;
					a.Ma(function (a) {
						return f(a, d)
					})
				},
				notify : function (a, c) {
					a.equalityComparer = "always" == c ? null : G
				}
			};
			var M = {
				undefined : 1,
				"boolean" : 1,
				number : 1,
				string : 1
			};
			a.b("extenders", a.Ga);
			a.Fb = function (b, c, d) {
				this.target = b;
				this.za = c;
				this.Qb = d;
				this.sb = !1;
				a.s(this, "dispose", this.F)
			};
			a.Fb.prototype.F = function () {
				this.sb = !0;
				this.Qb()
			};
			a.N = function () {
				a.a.sa(this, a.N.fn);
				this.H = {}

			};
			var F = "change";
			z = {
				V : function (b, c, d) {
					var e = this;
					d = d || F;
					var f = new a.Fb(e, c ? b.bind(c) : b, function () {
							a.a.ma(e.H[d], f)
						});
					e.o && e.o();
					e.H[d] || (e.H[d] = []);
					e.H[d].push(f);
					return f
				},
				notifySubscribers : function (b, c) {
					c = c || F;
					if (this.qb(c))
						try {
							a.k.jb();
							for (var d = this.H[c].slice(0), e = 0, f; f = d[e]; ++e)
								f.sb || f.za(b)
						}
					finally {
						a.k.end()
					}
				},
				Ma : function (b) {
					var c = this,
					d = a.v(c),
					e,
					f,
					h;
					c.ia || (c.ia = c.notifySubscribers, c.notifySubscribers = function (a, b) {
						b && b !== F ? "beforeChange" === b ? c.bb(a) : c.ia(a, b) : c.cb(a)
					});
					var g = b(function () {
							d && h === c && (h = c());
							e = !1;
							c.Ka(f, h) && c.ia(f = h)
						});
					c.cb = function (a) {
						e = !0;
						h = a;
						g()
					};
					c.bb = function (a) {
						e || (f = a, c.ia(a, "beforeChange"))
					}
				},
				qb : function (a) {
					return this.H[a] && this.H[a].length
				},
				Wb : function () {
					var b = 0;
					a.a.A(this.H, function (a, d) {
						b += d.length
					});
					return b
				},
				Ka : function (a, c) {
					return !this.equalityComparer || !this.equalityComparer(a, c)
				},
				extend : function (b) {
					var c = this;
					b && a.a.A(b, function (b, e) {
						var f = a.Ga[b];
						"function" == typeof f && (c = f(c, e) || c)
					});
					return c
				}
			};
			a.s(z, "subscribe", z.V);
			a.s(z, "extend", z.extend);
			a.s(z, "getSubscriptionsCount", z.Wb);
			a.a.na && a.a.ra(z, Function.prototype);
			a.N.fn = z;
			a.tb = function (a) {
				return null != a && "function" == typeof a.V && "function" == typeof a.notifySubscribers
			};
			a.b("subscribable", a.N);
			a.b("isSubscribable", a.tb);
			a.ca = a.k = function () {
				function b(a) {
					d.push(e);
					e = a
				}
				function c() {
					e = d.pop()
				}
				var d = [],
				e,
				f = 0;
				return {
					jb : b,
					end : c,
					zb : function (b) {
						if (e) {
							if (!a.tb(b))
								throw Error("Only subscribable things can act as dependencies");
							e.za(b, b.Kb || (b.Kb = ++f))
						}
					},
					t : function (a, d, e) {
						try {
							return b(),
							a.apply(d, e || [])
						}
						finally {
							c()
						}
					},
					fa : function () {
						if (e)
							return e.ba.fa()
					},
					pa : function () {
						if (e)
							return e.pa
					}
				}
			}
			();
			a.b("computedContext", a.ca);
			a.b("computedContext.getDependenciesCount", a.ca.fa);
			a.b("computedContext.isInitial", a.ca.pa);
			a.m = function (b) {
				function c() {
					if (0 < arguments.length)
						return c.Ka(d, arguments[0]) && (c.P(), d = arguments[0], c.O()), this;
					a.k.zb(c);
					return d
				}
				var d = b;
				a.N.call(c);
				a.a.sa(c, a.m.fn);
				c.o = function () {
					return d
				};
				c.O = function () {
					c.notifySubscribers(d)
				};
				c.P = function () {
					c.notifySubscribers(d, "beforeChange")
				};
				a.s(c, "peek", c.o);
				a.s(c, "valueHasMutated", c.O);
				a.s(c, "valueWillMutate", c.P);
				return c
			};
			a.m.fn = {
				equalityComparer : G
			};
			var E = a.m.hc = "__ko_proto__";
			a.m.fn[E] = a.m;
			a.a.na && a.a.ra(a.m.fn, a.N.fn);
			a.Ha = function (b, c) {
				return null === b || b === p || b[E] === p ? !1 : b[E] === c ? !0 : a.Ha(b[E], c)
			};
			a.v = function (b) {
				return a.Ha(b, a.m)
			};
			a.ub = function (b) {
				return "function" == typeof b && b[E] === a.m || "function" == typeof b && b[E] === a.h && b.Yb ? !0 : !1
			};
			a.b("observable", a.m);
			a.b("isObservable", a.v);
			a.b("isWriteableObservable", a.ub);
			a.T = function (b) {
				b = b || [];
				if ("object" != typeof b || !("length" in b))
					throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
				b = a.m(b);
				a.a.sa(b, a.T.fn);
				return b.extend({
					trackArrayChanges : !0
				})
			};
			a.T.fn = {
				remove : function (b) {
					for (var c = this.o(), d = [], e = "function" != typeof b || a.v(b) ? function (a) {
						return a === b
					}
						 : b, f = 0; f < c.length; f++) {
						var h = c[f];
						e(h) && (0 === d.length && this.P(), d.push(h), c.splice(f, 1), f--)
					}
					d.length && this.O();
					return d
				},
				removeAll : function (b) {
					if (b === p) {
						var c = this.o(),
						d = c.slice(0);
						this.P();
						c.splice(0, c.length);
						this.O();
						return d
					}
					return b ? this.remove(function (c) {
						return 0 <= a.a.l(b, c)
					}) : []
				},
				destroy : function (b) {
					var c = this.o(),
					d = "function" != typeof b || a.v(b) ? function (a) {
						return a === b
					}
					 : b;
					this.P();
					for (var e = c.length - 1; 0 <= e; e--)
						d(c[e]) && (c[e]._destroy = !0);
					this.O()
				},
				destroyAll : function (b) {
					return b === p ? this.destroy(function () {
						return !0
					}) : b ? this.destroy(function (c) {
						return 0 <= a.a.l(b, c)
					}) : []
				},
				indexOf : function (b) {
					var c = this();
					return a.a.l(c, b)
				},
				replace : function (a, c) {
					var d = this.indexOf(a);
					0 <= d && (this.P(), this.o()[d] = c, this.O())
				}
			};
			a.a.r("pop push reverse shift sort splice unshift".split(" "), function (b) {
				a.T.fn[b] = function () {
					var a = this.o();
					this.P();
					this.kb(a, b, arguments);
					a = a[b].apply(a, arguments);
					this.O();
					return a
				}
			});
			a.a.r(["slice"], function (b) {
				a.T.fn[b] = function () {
					var a = this();
					return a[b].apply(a, arguments)
				}
			});
			a.a.na && a.a.ra(a.T.fn, a.m.fn);
			a.b("observableArray", a.T);
			var I = "arrayChange";
			a.Ga.trackArrayChanges = function (b) {
				function c() {
					if (!d) {
						d = !0;
						var c = b.notifySubscribers;
						b.notifySubscribers = function (a, b) {
							b && b !== F || ++f;
							return c.apply(this, arguments)
						};
						var k = [].concat(b.o() || []);
						e = null;
						b.V(function (c) {
							c = [].concat(c || []);
							if (b.qb(I)) {
								var d;
								if (!e || 1 < f)
									e = a.a.Aa(k, c, {
											sparse : !0
										});
								d = e;
								d.length && b.notifySubscribers(d, I)
							}
							k = c;
							e = null;
							f = 0
						})
					}
				}
				if (!b.kb) {
					var d = !1,
					e = null,
					f = 0,
					h = b.V;
					b.V = b.subscribe = function (a, b, d) {
						d === I && c();
						return h.apply(this, arguments)
					};
					b.kb = function (b, c, l) {
						function h(a, b, c) {
							return r[r.length] = {
								status : a,
								value : b,
								index : c
							}
						}
						if (d && !f) {
							var r = [],
							m = b.length,
							q = l.length,
							s = 0;
							switch (c) {
							case "push":
								s = m;
							case "unshift":
								for (c = 0; c < q; c++)
									h("added", l[c], s + c);
								break;
							case "pop":
								s = m - 1;
							case "shift":
								m && h("deleted", b[s], s);
								break;
							case "splice":
								c = Math.min(Math.max(0, 0 > l[0] ? m + l[0] : l[0]), m);
								for (var m = 1 === q ? m : Math.min(c + (l[1] || 0), m), q = c + q - 2, s = Math.max(m, q), B = [], u = [], D = 2; c < s; ++c, ++D)
									c < m && u.push(h("deleted", b[c], c)), c < q && B.push(h("added", l[D], c));
								a.a.nb(u, B);
								break;
							default:
								return
							}
							e = r
						}
					}
				}
			};
			a.ba = a.h = function (b, c, d) {
				function e() {
					q = !0;
					a.a.A(v, function (a, b) {
						b.F()
					});
					v = {};
					x = 0;
					n = !1
				}
				function f() {
					var a = g.throttleEvaluation;
					a && 0 <= a ? (clearTimeout(t), t = setTimeout(h, a)) : g.wa ? g.wa() : h()
				}
				function h() {
					if (!r && !q) {
						if (y && y()) {
							if (!m) {
								p();
								return
							}
						} else
							m = !1;
						r = !0;
						try {
							var b = v,
							d = x;
							a.k.jb({
								za : function (a, c) {
									q || (d && b[c] ? (v[c] = b[c], ++x, delete b[c], --d) : v[c] || (v[c] = a.V(f), ++x))
								},
								ba : g,
								pa : !x
							});
							v = {};
							x = 0;
							try {
								var e = c ? s.call(c) : s()
							}
							finally {
								a.k.end(),
								d && a.a.A(b, function (a, b) {
									b.F()
								}),
								n = !1
							}
							g.Ka(l, e) && (g.notifySubscribers(l, "beforeChange"), l = e, g.wa && !g.throttleEvaluation || g.notifySubscribers(l))
						}
						finally {
							r = !1
						}
						x || p()
					}
				}
				function g() {
					if (0 < arguments.length) {
						if ("function" === typeof B)
							B.apply(c, arguments);
						else
							throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
						return this
					}
					n && h();
					a.k.zb(g);
					return l
				}
				function k() {
					return n || 0 < x
				}
				var l,
				n = !0,
				r = !1,
				m = !1,
				q = !1,
				s = b;
				s && "object" == typeof s ? (d = s, s = d.read) : (d = d || {}, s || (s = d.read));
				if ("function" != typeof s)
					throw Error("Pass a function that returns the value of the ko.computed");
				var B = d.write,
				u = d.disposeWhenNodeIsRemoved || d.G || null,
				D = d.disposeWhen || d.Da,
				y = D,
				p = e,
				v = {},
				x = 0,
				t = null;
				c || (c = d.owner);
				a.N.call(g);
				a.a.sa(g, a.h.fn);
				g.o = function () {
					n && !x && h();
					return l
				};
				g.fa = function () {
					return x
				};
				g.Yb = "function" === typeof d.write;
				g.F = function () {
					p()
				};
				g.ga = k;
				var w = g.Ma;
				g.Ma = function (a) {
					w.call(g, a);
					g.wa = function () {
						g.bb(l);
						n = !0;
						g.cb(g)
					}
				};
				a.s(g, "peek", g.o);
				a.s(g, "dispose", g.F);
				a.s(g, "isActive", g.ga);
				a.s(g, "getDependenciesCount", g.fa);
				u && (m = !0, u.nodeType && (y = function () {
						return !a.a.Ea(u) || D && D()
					}));
				!0 !== d.deferEvaluation && h();
				u && k() && u.nodeType && (p = function () {
					a.a.u.Ab(u, p);
					e()
				}, a.a.u.ja(u, p));
				return g
			};
			a.$b = function (b) {
				return a.Ha(b, a.h)
			};
			z = a.m.hc;
			a.h[z] = a.m;
			a.h.fn = {
				equalityComparer : G
			};
			a.h.fn[z] = a.h;
			a.a.na && a.a.ra(a.h.fn, a.N.fn);
			a.b("dependentObservable", a.h);
			a.b("computed", a.h);
			a.b("isComputed", a.$b);
			(function () {
				function b(a, f, h) {
					h = h || new d;
					a = f(a);
					if ("object" != typeof a || null === a || a === p || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean)
						return a;
					var g = a instanceof Array ? [] : {};
					h.save(a, g);
					c(a, function (c) {
						var d = f(a[c]);
						switch (typeof d) {
						case "boolean":
						case "number":
						case "string":
						case "function":
							g[c] = d;
							break;
						case "object":
						case "undefined":
							var n = h.get(d);
							g[c] = n !== p ? n : b(d, f, h)
						}
					});
					return g
				}
				function c(a, b) {
					if (a instanceof Array) {
						for (var c = 0; c < a.length; c++)
							b(c);
						"function" == typeof a.toJSON && b("toJSON")
					} else
						for (c in a)
							b(c)
				}
				function d() {
					this.keys = [];
					this.ab = []
				}
				a.Gb = function (c) {
					if (0 == arguments.length)
						throw Error("When calling ko.toJS, pass the object you want to convert.");
					return b(c, function (b) {
						for (var c = 0; a.v(b) && 10 > c; c++)
							b = b();
						return b
					})
				};
				a.toJSON = function (b, c, d) {
					b = a.Gb(b);
					return a.a.Ya(b, c, d)
				};
				d.prototype = {
					save : function (b, c) {
						var d = a.a.l(this.keys, b);
						0 <= d ? this.ab[d] = c : (this.keys.push(b), this.ab.push(c))
					},
					get : function (b) {
						b = a.a.l(this.keys, b);
						return 0 <= b ? this.ab[b] : p
					}
				}
			})();
			a.b("toJS", a.Gb);
			a.b("toJSON", a.toJSON);
			(function () {
				a.i = {
					p : function (b) {
						switch (a.a.B(b)) {
						case "option":
							return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.f.get(b, a.d.options.Pa) : 7 >= a.a.oa ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
						case "select":
							return 0 <= b.selectedIndex ? a.i.p(b.options[b.selectedIndex]) : p;
						default:
							return b.value
						}
					},
					X : function (b, c, d) {
						switch (a.a.B(b)) {
						case "option":
							switch (typeof c) {
							case "string":
								a.a.f.set(b, a.d.options.Pa, p);
								"__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__;
								b.value = c;
								break;
							default:
								a.a.f.set(b, a.d.options.Pa, c),
								b.__ko__hasDomDataOptionValue__ = !0,
								b.value = "number" === typeof c ? c : ""
							}
							break;
						case "select":
							if ("" === c || null === c)
								c = p;
							for (var e = -1, f = 0, h = b.options.length, g; f < h; ++f)
								if (g = a.i.p(b.options[f]), g == c || "" == g && c === p) {
									e = f;
									break
								}
							if (d || 0 <= e || c === p && 1 < b.size)
								b.selectedIndex = e;
							break;
						default:
							if (null === c || c === p)
								c = "";
							b.value = c
						}
					}
				}
			})();
			a.b("selectExtensions", a.i);
			a.b("selectExtensions.readValue", a.i.p);
			a.b("selectExtensions.writeValue", a.i.X);
			a.g = function () {
				function b(b) {
					b = a.a.ta(b);
					123 === b.charCodeAt(0) && (b = b.slice(1, -1));
					var c = [],
					d = b.match(e),
					g,
					m,
					q = 0;
					if (d) {
						d.push(",");
						for (var s = 0, B; B = d[s]; ++s) {
							var u = B.charCodeAt(0);
							if (44 === u) {
								if (0 >= q) {
									g && c.push(m ? {
										key : g,
										value : m.join("")
									}
										 : {
										unknown : g
									});
									g = m = q = 0;
									continue
								}
							} else if (58 === u) {
								if (!m)
									continue
							} else if (47 === u && s && 1 < B.length)
								(u = d[s - 1].match(f)) && !h[u[0]] && (b = b.substr(b.indexOf(B) + 1), d = b.match(e), d.push(","), s = -1, B = "/");
							else if (40 === u || 123 === u || 91 === u)
								++q;
							else if (41 === u || 125 === u || 93 === u)
								--q;
							else if (!g && !m) {
								g = 34 === u || 39 === u ? B.slice(1, -1) : B;
								continue
							}
							m ? m.push(B) : m = [B]
						}
					}
					return c
				}
				var c = ["true", "false", "null", "undefined"],
				d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
				e = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
				f = /[\])"'A-Za-z0-9_$]+$/,
				h = {
					"in" : 1,
					"return" : 1,
					"typeof" : 1
				},
				g = {};
				return {
					aa : [],
					W : g,
					Ra : b,
					qa : function (e, l) {
						function f(b, e) {
							var l,
							k = a.getBindingHandler(b);
							if (k && k.preprocess ? e = k.preprocess(e, b, f) : 1) {
								if (k = g[b])
									l = e, 0 <= a.a.l(c, l) ? l = !1 : (k = l.match(d), l = null === k ? !1 : k[1] ? "Object(" + k[1] + ")" + k[2] : l), k = l;
								k && m.push("'" + b + "':function(_z){" + l + "=_z}");
								q && (e = "function(){return " + e + " }");
								h.push("'" + b + "':" + e)
							}
						}
						l = l || {};
						var h = [],
						m = [],
						q = l.valueAccessors,
						s = "string" === typeof e ? b(e) : e;
						a.a.r(s, function (a) {
							f(a.key || a.unknown, a.value)
						});
						m.length && f("_ko_property_writers", "{" + m.join(",") + " }");
						return h.join(",")
					},
					bc : function (a, b) {
						for (var c = 0; c < a.length; c++)
							if (a[c].key == b)
								return !0;
						return !1
					},
					va : function (b, c, d, e, g) {
						if (b && a.v(b))
							!a.ub(b) || g && b.o() === e || b(e);
						else if ((b = c.get("_ko_property_writers")) && b[d])
							b[d](e)
					}
				}
			}
			();
			a.b("expressionRewriting", a.g);
			a.b("expressionRewriting.bindingRewriteValidators", a.g.aa);
			a.b("expressionRewriting.parseObjectLiteral", a.g.Ra);
			a.b("expressionRewriting.preProcessBindings", a.g.qa);
			a.b("expressionRewriting._twoWayBindings", a.g.W);
			a.b("jsonExpressionRewriting", a.g);
			a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.g.qa);
			(function () {
				function b(a) {
					return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue)
				}
				function c(a) {
					return 8 == a.nodeType && g.test(f ? a.text : a.nodeValue)
				}
				function d(a, d) {
					for (var e = a, g = 1, k = []; e = e.nextSibling; ) {
						if (c(e) && (g--, 0 === g))
							return k;
						k.push(e);
						b(e) && g++
					}
					if (!d)
						throw Error("Cannot find closing comment tag to match: " + a.nodeValue);
					return null
				}
				function e(a, b) {
					var c = d(a, b);
					return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null
				}
				var f = w && "\x3c!--test--\x3e" === w.createComment("test").text,
				h = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
				g = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
				k = {
					ul : !0,
					ol : !0
				};
				a.e = {
					Q : {},
					childNodes : function (a) {
						return b(a) ? d(a) : a.childNodes
					},
					da : function (c) {
						if (b(c)) {
							c = a.e.childNodes(c);
							for (var d = 0, e = c.length; d < e; d++)
								a.removeNode(c[d])
						} else
							a.a.Fa(c)
					},
					U : function (c, d) {
						if (b(c)) {
							a.e.da(c);
							for (var e = c.nextSibling, g = 0, k = d.length; g < k; g++)
								e.parentNode.insertBefore(d[g], e)
						} else
							a.a.U(c, d)
					},
					yb : function (a, c) {
						b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c)
					},
					rb : function (c, d, e) {
						e ? b(c) ? c.parentNode.insertBefore(d, e.nextSibling) : e.nextSibling ? c.insertBefore(d, e.nextSibling) : c.appendChild(d) : a.e.yb(c, d)
					},
					firstChild : function (a) {
						return b(a) ? !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling : a.firstChild
					},
					nextSibling : function (a) {
						b(a) && (a = e(a));
						return a.nextSibling && c(a.nextSibling) ? null : a.nextSibling
					},
					Xb : b,
					lc : function (a) {
						return (a = (f ? a.text : a.nodeValue).match(h)) ? a[1] : null
					},
					wb : function (d) {
						if (k[a.a.B(d)]) {
							var g = d.firstChild;
							if (g) {
								do
									if (1 === g.nodeType) {
										var f;
										f = g.firstChild;
										var h = null;
										if (f) {
											do
												if (h)
													h.push(f);
												else if (b(f)) {
													var q = e(f, !0);
													q ? f = q : h = [f]
												} else
													c(f) && (h = [f]);
											while (f = f.nextSibling)
										}
										if (f = h)
											for (h = g.nextSibling, q = 0; q < f.length; q++)
												h ? d.insertBefore(f[q], h) : d.appendChild(f[q])
									}
								while (g = g.nextSibling)
							}
						}
					}
				}
			})();
			a.b("virtualElements", a.e);
			a.b("virtualElements.allowedBindings", a.e.Q);
			a.b("virtualElements.emptyNode", a.e.da);
			a.b("virtualElements.insertAfter", a.e.rb);
			a.b("virtualElements.prepend", a.e.yb);
			a.b("virtualElements.setDomNodeChildren", a.e.U);
			(function () {
				a.J = function () {
					this.Nb = {}

				};
				a.a.extend(a.J.prototype, {
					nodeHasBindings : function (b) {
						switch (b.nodeType) {
						case 1:
							return null != b.getAttribute("data-bind");
						case 8:
							return a.e.Xb(b);
						default:
							return !1
						}
					},
					getBindings : function (a, c) {
						var d = this.getBindingsString(a, c);
						return d ? this.parseBindingsString(d, c, a) : null
					},
					getBindingAccessors : function (a, c) {
						var d = this.getBindingsString(a, c);
						return d ? this.parseBindingsString(d, c, a, {
							valueAccessors : !0
						}) : null
					},
					getBindingsString : function (b) {
						switch (b.nodeType) {
						case 1:
							return b.getAttribute("data-bind");
						case 8:
							return a.e.lc(b);
						default:
							return null
						}
					},
					parseBindingsString : function (b, c, d, e) {
						try {
							var f = this.Nb,
							h = b + (e && e.valueAccessors || ""),
							g;
							if (!(g = f[h])) {
								var k,
								l = "with($context){with($data||{}){return{" + a.g.qa(b, e) + "}}}";
								k = new Function("$context", "$element", l);
								g = f[h] = k
							}
							return g(c, d)
						} catch (n) {
							throw n.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + n.message,
							n;
						}
					}
				});
				a.J.instance = new a.J
			})();
			a.b("bindingProvider", a.J);
			(function () {
				function b(a) {
					return function () {
						return a
					}
				}
				function c(a) {
					return a()
				}
				function d(b) {
					return a.a.Oa(a.k.t(b), function (a, c) {
						return function () {
							return b()[c]
						}
					})
				}
				function e(a, b) {
					return d(this.getBindings.bind(this, a, b))
				}
				function f(b, c, d) {
					var e,
					g = a.e.firstChild(c),
					k = a.J.instance,
					f = k.preprocessNode;
					if (f) {
						for (; e = g; )
							g = a.e.nextSibling(e), f.call(k, e);
						g = a.e.firstChild(c)
					}
					for (; e = g; )
						g = a.e.nextSibling(e), h(b, e, d)
				}
				function h(b, c, d) {
					var e = !0,
					g = 1 === c.nodeType;
					g && a.e.wb(c);
					if (g && d || a.J.instance.nodeHasBindings(c))
						e = k(c, null, b, d).shouldBindDescendants;
					e && !n[a.a.B(c)] && f(b, c, !g)
				}
				function g(b) {
					var c = [],
					d = {},
					e = [];
					a.a.A(b, function y(g) {
						if (!d[g]) {
							var k = a.getBindingHandler(g);
							k && (k.after && (e.push(g), a.a.r(k.after, function (c) {
										if (b[c]) {
											if (-1 !== a.a.l(e, c))
												throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + e.join(", "));
											y(c)
										}
									}), e.length--), c.push({
									key : g,
									pb : k
								}));
							d[g] = !0
						}
					});
					return c
				}
				function k(b, d, k, f) {
					var h = a.a.f.get(b, r);
					if (!d) {
						if (h)
							throw Error("You cannot apply bindings multiple times to the same element.");
						a.a.f.set(b, r, !0)
					}
					!h && f && a.Eb(b, k);
					var l;
					if (d && "function" !== typeof d)
						l = d;
					else {
						var n = a.J.instance,
						m = n.getBindingAccessors || e,
						x = a.h(function () {
								(l = d ? d(k, b) : m.call(n, b, k)) && k.D && k.D();
								return l
							}, null, {
								G : b
							});
						l && x.ga() || (x = null)
					}
					var t;
					if (l) {
						var w = x ? function (a) {
							return function () {
								return c(x()[a])
							}
						}
						 : function (a) {
							return l[a]
						},
						z = function () {
							return a.a.Oa(x ? x() : l, c)
						};
						z.get = function (a) {
							return l[a] && c(w(a))
						};
						z.has = function (a) {
							return a in l
						};
						f = g(l);
						a.a.r(f, function (c) {
							var d = c.pb.init,
							e = c.pb.update,
							g = c.key;
							if (8 === b.nodeType && !a.e.Q[g])
								throw Error("The binding '" + g + "' cannot be used with virtual elements");
							try {
								"function" == typeof d && a.k.t(function () {
									var a = d(b, w(g), z, k.$data, k);
									if (a && a.controlsDescendantBindings) {
										if (t !== p)
											throw Error("Multiple bindings (" + t + " and " + g + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
										t = g
									}
								}),
								"function" == typeof e && a.h(function () {
									e(b, w(g), z, k.$data, k)
								}, null, {
									G : b
								})
							} catch (f) {
								throw f.message = 'Unable to process binding "' + g + ": " + l[g] + '"\nMessage: ' + f.message,
								f;
							}
						})
					}
					return {
						shouldBindDescendants : t === p
					}
				}
				function l(b) {
					return b && b instanceof a.I ? b : new a.I(b)
				}
				a.d = {};
				var n = {
					script : !0
				};
				a.getBindingHandler = function (b) {
					return a.d[b]
				};
				a.I = function (b, c, d, e) {
					var g = this,
					k = "function" == typeof b && !a.v(b),
					f,
					h = a.h(function () {
							var f = k ? b() : b,
							l = a.a.c(f);
							c ? (c.D && c.D(), a.a.extend(g, c), h && (g.D = h)) : (g.$parents = [], g.$root = l, g.ko = a);
							g.$rawData = f;
							g.$data = l;
							d && (g[d] = l);
							e && e(g, c, l);
							return g.$data
						}, null, {
							Da : function () {
								return f && !a.a.eb(f)
							},
							G : !0
						});
					h.ga() && (g.D = h, h.equalityComparer = null, f = [], h.Jb = function (b) {
						f.push(b);
						a.a.u.ja(b, function (b) {
							a.a.ma(f, b);
							f.length || (h.F(), g.D = h = p)
						})
					})
				};
				a.I.prototype.createChildContext = function (b, c, d) {
					return new a.I(b, this, c, function (a, b) {
						a.$parentContext = b;
						a.$parent = b.$data;
						a.$parents = (b.$parents || []).slice(0);
						a.$parents.unshift(a.$parent);
						d && d(a)
					})
				};
				a.I.prototype.extend = function (b) {
					return new a.I(this.D || this.$data, this, null, function (c, d) {
						c.$rawData = d.$rawData;
						a.a.extend(c, "function" == typeof b ? b() : b)
					})
				};
				var r = a.a.f.L(),
				m = a.a.f.L();
				a.Eb = function (b, c) {
					if (2 == arguments.length)
						a.a.f.set(b, m, c), c.D && c.D.Jb(b);
					else
						return a.a.f.get(b, m)
				};
				a.xa = function (b, c, d) {
					1 === b.nodeType && a.e.wb(b);
					return k(b, c, l(d), !0)
				};
				a.Lb = function (c, e, g) {
					g = l(g);
					return a.xa(c, "function" === typeof e ? d(e.bind(null, g, c)) : a.a.Oa(e, b), g)
				};
				a.gb = function (a, b) {
					1 !== b.nodeType && 8 !== b.nodeType || f(l(a), b, !0)
				};
				a.fb = function (a, b) {
					!t && A.jQuery && (t = A.jQuery);
					if (b && 1 !== b.nodeType && 8 !== b.nodeType)
						throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
					b = b || A.document.body;
					h(l(a), b, !0)
				};
				a.Ca = function (b) {
					switch (b.nodeType) {
					case 1:
					case 8:
						var c = a.Eb(b);
						if (c)
							return c;
						if (b.parentNode)
							return a.Ca(b.parentNode)
					}
					return p
				};
				a.Pb = function (b) {
					return (b = a.Ca(b)) ? b.$data : p
				};
				a.b("bindingHandlers", a.d);
				a.b("applyBindings", a.fb);
				a.b("applyBindingsToDescendants", a.gb);
				a.b("applyBindingAccessorsToNode", a.xa);
				a.b("applyBindingsToNode", a.Lb);
				a.b("contextFor", a.Ca);
				a.b("dataFor", a.Pb)
			})();
			var L = {
				"class" : "className",
				"for" : "htmlFor"
			};
			a.d.attr = {
				update : function (b, c) {
					var d = a.a.c(c()) || {};
					a.a.A(d, function (c, d) {
						d = a.a.c(d);
						var h = !1 === d || null === d || d === p;
						h && b.removeAttribute(c);
						8 >= a.a.oa && c in L ? (c = L[c], h ? b.removeAttribute(c) : b[c] = d) : h || b.setAttribute(c, d.toString());
						"name" === c && a.a.Cb(b, h ? "" : d.toString())
					})
				}
			};
			(function () {
				a.d.checked = {
					after : ["value", "attr"],
					init : function (b, c, d) {
						function e() {
							return d.has("checkedValue") ? a.a.c(d.get("checkedValue")) : b.value
						}
						function f() {
							var g = b.checked,
							f = r ? e() : g;
							if (!a.ca.pa() && (!k || g)) {
								var h = a.k.t(c);
								l ? n !== f ? (g && (a.a.Y(h, f, !0), a.a.Y(h, n, !1)), n = f) : a.a.Y(h, f, g) : a.g.va(h, d, "checked", f, !0)
							}
						}
						function h() {
							var d = a.a.c(c());
							b.checked = l ? 0 <= a.a.l(d, e()) : g ? d : e() === d
						}
						var g = "checkbox" == b.type,
						k = "radio" == b.type;
						if (g || k) {
							var l = g && a.a.c(c())instanceof Array,
							n = l ? e() : p,
							r = k || l;
							k && !b.name && a.d.uniqueName.init(b, function () {
								return !0
							});
							a.ba(f, null, {
								G : b
							});
							a.a.q(b, "click", f);
							a.ba(h, null, {
								G : b
							})
						}
					}
				};
				a.g.W.checked = !0;
				a.d.checkedValue = {
					update : function (b, c) {
						b.value = a.a.c(c())
					}
				}
			})();
			a.d.css = {
				update : function (b, c) {
					var d = a.a.c(c());
					"object" == typeof d ? a.a.A(d, function (c, d) {
						d = a.a.c(d);
						a.a.ua(b, c, d)
					}) : (d = String(d || ""), a.a.ua(b, b.__ko__cssValue, !1), b.__ko__cssValue = d, a.a.ua(b, d, !0))
				}
			};
			a.d.enable = {
				update : function (b, c) {
					var d = a.a.c(c());
					d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = !0)
				}
			};
			a.d.disable = {
				update : function (b, c) {
					a.d.enable.update(b, function () {
						return !a.a.c(c())
					})
				}
			};
			a.d.event = {
				init : function (b, c, d, e, f) {
					var h = c() || {};
					a.a.A(h, function (g) {
						"string" == typeof g && a.a.q(b, g, function (b) {
							var h,
							n = c()[g];
							if (n) {
								try {
									var r = a.a.R(arguments);
									e = f.$data;
									r.unshift(e);
									h = n.apply(e, r)
								}
								finally {
									!0 !== h && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
								}
								!1 === d.get(g + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation())
							}
						})
					})
				}
			};
			a.d.foreach = {
				vb : function (b) {
					return function () {
						var c = b(),
						d = a.a.Sa(c);
						if (!d || "number" == typeof d.length)
							return {
								foreach : c,
								templateEngine : a.K.Ja
							};
						a.a.c(c);
						return {
							foreach : d.data,
							as : d.as,
							includeDestroyed : d.includeDestroyed,
							afterAdd : d.afterAdd,
							beforeRemove : d.beforeRemove,
							afterRender : d.afterRender,
							beforeMove : d.beforeMove,
							afterMove : d.afterMove,
							templateEngine : a.K.Ja
						}
					}
				},
				init : function (b, c) {
					return a.d.template.init(b, a.d.foreach.vb(c))
				},
				update : function (b, c, d, e, f) {
					return a.d.template.update(b, a.d.foreach.vb(c), d, e, f)
				}
			};
			a.g.aa.foreach = !1;
			a.e.Q.foreach = !0;
			a.d.hasfocus = {
				init : function (b, c, d) {
					function e(e) {
						b.__ko_hasfocusUpdating = !0;
						var k = b.ownerDocument;
						if ("activeElement" in k) {
							var f;
							try {
								f = k.activeElement
							} catch (h) {
								f = k.body
							}
							e = f === b
						}
						k = c();
						a.g.va(k, d, "hasfocus", e, !0);
						b.__ko_hasfocusLastValue = e;
						b.__ko_hasfocusUpdating = !1
					}
					var f = e.bind(null, !0),
					h = e.bind(null, !1);
					a.a.q(b, "focus", f);
					a.a.q(b, "focusin", f);
					a.a.q(b, "blur", h);
					a.a.q(b, "focusout", h)
				},
				update : function (b, c) {
					var d = !!a.a.c(c());
					b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), a.k.t(a.a.ha, null, [b, d ? "focusin" : "focusout"]))
				}
			};
			a.g.W.hasfocus = !0;
			a.d.hasFocus = a.d.hasfocus;
			a.g.W.hasFocus = !0;
			a.d.html = {
				init : function () {
					return {
						controlsDescendantBindings : !0
					}
				},
				update : function (b, c) {
					a.a.Va(b, c())
				}
			};
			H("if");
			H("ifnot", !1, !0);
			H("with", !0, !1, function (a, c) {
				return a.createChildContext(c)
			});
			var J = {};
			a.d.options = {
				init : function (b) {
					if ("select" !== a.a.B(b))
						throw Error("options binding applies only to SELECT elements");
					for (; 0 < b.length; )
						b.remove(0);
					return {
						controlsDescendantBindings : !0
					}
				},
				update : function (b, c, d) {
					function e() {
						return a.a.la(b.options, function (a) {
							return a.selected
						})
					}
					function f(a, b, c) {
						var d = typeof b;
						return "function" == d ? b(a) : "string" == d ? a[b] : c
					}
					function h(c, d) {
						if (r.length) {
							var e = 0 <= a.a.l(r, a.i.p(d[0]));
							a.a.Db(d[0], e);
							m && !e && a.k.t(a.a.ha, null, [b, "change"])
						}
					}
					var g = 0 != b.length && b.multiple ? b.scrollTop : null,
					k = a.a.c(c()),
					l = d.get("optionsIncludeDestroyed");
					c = {};
					var n,
					r;
					r = b.multiple ? a.a.ya(e(), a.i.p) : 0 <= b.selectedIndex ? [a.i.p(b.options[b.selectedIndex])] : [];
					k && ("undefined" == typeof k.length && (k = [k]), n = a.a.la(k, function (b) {
								return l || b === p || null === b || !a.a.c(b._destroy)
							}), d.has("optionsCaption") && (k = a.a.c(d.get("optionsCaption")), null !== k && k !== p && n.unshift(J)));
					var m = !1;
					c.beforeRemove = function (a) {
						b.removeChild(a)
					};
					k = h;
					d.has("optionsAfterRender") && (k = function (b, c) {
						h(0, c);
						a.k.t(d.get("optionsAfterRender"), null, [c[0], b !== J ? b : p])
					});
					a.a.Ua(b, n, function (c, e, g) {
						g.length && (r = g[0].selected ? [a.i.p(g[0])] : [], m = !0);
						e = b.ownerDocument.createElement("option");
						c === J ? (a.a.Xa(e, d.get("optionsCaption")), a.i.X(e, p)) : (g = f(c, d.get("optionsValue"), c), a.i.X(e, a.a.c(g)), c = f(c, d.get("optionsText"), g), a.a.Xa(e, c));
						return [e]
					}, c, k);
					a.k.t(function () {
						d.get("valueAllowUnset") && d.has("value") ? a.i.X(b, a.a.c(d.get("value")), !0) : (b.multiple ? r.length && e().length < r.length : r.length && 0 <= b.selectedIndex ? a.i.p(b.options[b.selectedIndex]) !== r[0] : r.length || 0 <= b.selectedIndex) && a.a.ha(b, "change")
					});
					a.a.Tb(b);
					g && 20 < Math.abs(g - b.scrollTop) && (b.scrollTop = g)
				}
			};
			a.d.options.Pa = a.a.f.L();
			a.d.selectedOptions = {
				after : ["options", "foreach"],
				init : function (b, c, d) {
					a.a.q(b, "change", function () {
						var e = c(),
						f = [];
						a.a.r(b.getElementsByTagName("option"), function (b) {
							b.selected && f.push(a.i.p(b))
						});
						a.g.va(e, d, "selectedOptions", f)
					})
				},
				update : function (b, c) {
					if ("select" != a.a.B(b))
						throw Error("values binding applies only to SELECT elements");
					var d = a.a.c(c());
					d && "number" == typeof d.length && a.a.r(b.getElementsByTagName("option"), function (b) {
						var c = 0 <= a.a.l(d, a.i.p(b));
						a.a.Db(b, c)
					})
				}
			};
			a.g.W.selectedOptions = !0;
			a.d.style = {
				update : function (b, c) {
					var d = a.a.c(c() || {});
					a.a.A(d, function (c, d) {
						d = a.a.c(d);
						b.style[c] = d || ""
					})
				}
			};
			a.d.submit = {
				init : function (b, c, d, e, f) {
					if ("function" != typeof c())
						throw Error("The value for a submit binding must be a function");
					a.a.q(b, "submit", function (a) {
						var d,
						e = c();
						try {
							d = e.call(f.$data, b)
						}
						finally {
							!0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
						}
					})
				}
			};
			a.d.text = {
				init : function () {
					return {
						controlsDescendantBindings : !0
					}
				},
				update : function (b, c) {
					a.a.Xa(b, c())
				}
			};
			a.e.Q.text = !0;
			a.d.uniqueName = {
				init : function (b, c) {
					if (c()) {
						var d = "ko_unique_" + ++a.d.uniqueName.Ob;
						a.a.Cb(b, d)
					}
				}
			};
			a.d.uniqueName.Ob = 0;
			a.d.value = {
				after : ["options", "foreach"],
				init : function (b, c, d) {
					function e() {
						g = !1;
						var e = c(),
						f = a.i.p(b);
						a.g.va(e, d, "value", f)
					}
					var f = ["change"],
					h = d.get("valueUpdate"),
					g = !1;
					h && ("string" == typeof h && (h = [h]), a.a.$(f, h), f = a.a.ib(f));
					!a.a.oa || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.l(f, "propertychange") || (a.a.q(b, "propertychange", function () {
							g = !0
						}), a.a.q(b, "focus", function () {
							g = !1
						}), a.a.q(b, "blur", function () {
							g && e()
						}));
					a.a.r(f, function (c) {
						var d = e;
						a.a.kc(c, "after") && (d = function () {
							setTimeout(e, 0)
						}, c = c.substring(5));
						a.a.q(b, c, d)
					})
				},
				update : function (b, c, d) {
					var e = a.a.c(c());
					c = a.i.p(b);
					if (e !== c)
						if ("select" === a.a.B(b)) {
							var f = d.get("valueAllowUnset");
							d = function () {
								a.i.X(b, e, f)
							};
							d();
							f || e === a.i.p(b) ? setTimeout(d, 0) : a.k.t(a.a.ha, null, [b, "change"])
						} else
							a.i.X(b, e)
				}
			};
			a.g.W.value = !0;
			a.d.visible = {
				update : function (b, c) {
					var d = a.a.c(c()),
					e = "none" != b.style.display;
					d && !e ? b.style.display = "" : !d && e && (b.style.display = "none")
				}
			};
			(function (b) {
				a.d[b] = {
					init : function (c, d, e, f, h) {
						return a.d.event.init.call(this, c, function () {
							var a = {};
							a[b] = d();
							return a
						}, e, f, h)
					}
				}
			})("click");
			a.C = function () {};
			a.C.prototype.renderTemplateSource = function () {
				throw Error("Override renderTemplateSource");
			};
			a.C.prototype.createJavaScriptEvaluatorBlock = function () {
				throw Error("Override createJavaScriptEvaluatorBlock");
			};
			a.C.prototype.makeTemplateSource = function (b, c) {
				if ("string" == typeof b) {
					c = c || w;
					var d = c.getElementById(b);
					if (!d)
						throw Error("Cannot find template with ID " + b);
					return new a.n.j(d)
				}
				if (1 == b.nodeType || 8 == b.nodeType)
					return new a.n.Z(b);
				throw Error("Unknown template type: " + b);
			};
			a.C.prototype.renderTemplate = function (a, c, d, e) {
				a = this.makeTemplateSource(a, e);
				return this.renderTemplateSource(a, c, d)
			};
			a.C.prototype.isTemplateRewritten = function (a, c) {
				return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, c).data("isRewritten")
			};
			a.C.prototype.rewriteTemplate = function (a, c, d) {
				a = this.makeTemplateSource(a, d);
				c = c(a.text());
				a.text(c);
				a.data("isRewritten", !0)
			};
			a.b("templateEngine", a.C);
			a.Za = function () {
				function b(b, c, d, g) {
					b = a.g.Ra(b);
					for (var k = a.g.aa, l = 0; l < b.length; l++) {
						var n = b[l].key;
						if (k.hasOwnProperty(n)) {
							var r = k[n];
							if ("function" === typeof r) {
								if (n = r(b[l].value))
									throw Error(n);
							} else if (!r)
								throw Error("This template engine does not support the '" + n + "' binding within its templates");
						}
					}
					d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.g.qa(b, {
							valueAccessors : !0
						}) + " } })()},'" + d.toLowerCase() + "')";
					return g.createJavaScriptEvaluatorBlock(d) + c
				}
				var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
				d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
				return {
					Ub : function (b, c, d) {
						c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) {
							return a.Za.dc(b, c)
						}, d)
					},
					dc : function (a, f) {
						return a.replace(c, function (a, c, d, e, n) {
							return b(n, c, d, f)
						}).replace(d, function (a, c) {
							return b(c, "\x3c!-- ko --\x3e", "#comment", f)
						})
					},
					Mb : function (b, c) {
						return a.w.Na(function (d, g) {
							var k = d.nextSibling;
							k && k.nodeName.toLowerCase() === c && a.xa(k, b, g)
						})
					}
				}
			}
			();
			a.b("__tr_ambtns", a.Za.Mb);
			(function () {
				a.n = {};
				a.n.j = function (a) {
					this.j = a
				};
				a.n.j.prototype.text = function () {
					var b = a.a.B(this.j),
					b = "script" === b ? "text" : "textarea" === b ? "value" : "innerHTML";
					if (0 == arguments.length)
						return this.j[b];
					var c = arguments[0];
					"innerHTML" === b ? a.a.Va(this.j, c) : this.j[b] = c
				};
				var b = a.a.f.L() + "_";
				a.n.j.prototype.data = function (c) {
					if (1 === arguments.length)
						return a.a.f.get(this.j, b + c);
					a.a.f.set(this.j, b + c, arguments[1])
				};
				var c = a.a.f.L();
				a.n.Z = function (a) {
					this.j = a
				};
				a.n.Z.prototype = new a.n.j;
				a.n.Z.prototype.text = function () {
					if (0 == arguments.length) {
						var b = a.a.f.get(this.j, c) || {};
						b.$a === p && b.Ba && (b.$a = b.Ba.innerHTML);
						return b.$a
					}
					a.a.f.set(this.j, c, {
						$a : arguments[0]
					})
				};
				a.n.j.prototype.nodes = function () {
					if (0 == arguments.length)
						return (a.a.f.get(this.j, c) || {}).Ba;
					a.a.f.set(this.j, c, {
						Ba : arguments[0]
					})
				};
				a.b("templateSources", a.n);
				a.b("templateSources.domElement", a.n.j);
				a.b("templateSources.anonymousTemplate", a.n.Z)
			})();
			(function () {
				function b(b, c, d) {
					var e;
					for (c = a.e.nextSibling(c); b && (e = b) !== c; )
						b = a.e.nextSibling(e), d(e, b)
				}
				function c(c, d) {
					if (c.length) {
						var e = c[0],
						f = c[c.length - 1],
						h = e.parentNode,
						m = a.J.instance,
						q = m.preprocessNode;
						if (q) {
							b(e, f, function (a, b) {
								var c = a.previousSibling,
								d = q.call(m, a);
								d && (a === e && (e = d[0] || b), a === f && (f = d[d.length - 1] || c))
							});
							c.length = 0;
							if (!e)
								return;
							e === f ? c.push(e) : (c.push(e, f), a.a.ea(c, h))
						}
						b(e, f, function (b) {
							1 !== b.nodeType && 8 !== b.nodeType || a.fb(d, b)
						});
						b(e, f, function (b) {
							1 !== b.nodeType && 8 !== b.nodeType || a.w.Ib(b, [d])
						});
						a.a.ea(c, h)
					}
				}
				function d(a) {
					return a.nodeType ? a : 0 < a.length ? a[0] : null
				}
				function e(b, e, h, n, r) {
					r = r || {};
					var m = b && d(b),
					m = m && m.ownerDocument,
					q = r.templateEngine || f;
					a.Za.Ub(h, q, m);
					h = q.renderTemplate(h, n, r, m);
					if ("number" != typeof h.length || 0 < h.length && "number" != typeof h[0].nodeType)
						throw Error("Template engine must return an array of DOM nodes");
					m = !1;
					switch (e) {
					case "replaceChildren":
						a.e.U(b, h);
						m = !0;
						break;
					case "replaceNode":
						a.a.Bb(b, h);
						m = !0;
						break;
					case "ignoreTargetNode":
						break;
					default:
						throw Error("Unknown renderMode: " +
							e);
					}
					m && (c(h, n), r.afterRender && a.k.t(r.afterRender, null, [h, n.$data]));
					return h
				}
				var f;
				a.Wa = function (b) {
					if (b != p && !(b instanceof a.C))
						throw Error("templateEngine must inherit from ko.templateEngine");
					f = b
				};
				a.Ta = function (b, c, h, n, r) {
					h = h || {};
					if ((h.templateEngine || f) == p)
						throw Error("Set a template engine before calling renderTemplate");
					r = r || "replaceChildren";
					if (n) {
						var m = d(n);
						return a.h(function () {
							var f = c && c instanceof a.I ? c : new a.I(a.a.c(c)),
							p = a.v(b) ? b() : "function" == typeof b ? b(f.$data, f) : b,
							f = e(n, r, p, f, h);
							"replaceNode" == r && (n = f, m = d(n))
						}, null, {
							Da : function () {
								return !m || !a.a.Ea(m)
							},
							G : m && "replaceNode" == r ? m.parentNode : m
						})
					}
					return a.w.Na(function (d) {
						a.Ta(b, c, h, d, "replaceNode")
					})
				};
				a.jc = function (b, d, f, h, r) {
					function m(a, b) {
						c(b, s);
						f.afterRender && f.afterRender(b, a)
					}
					function q(a, c) {
						s = r.createChildContext(a, f.as, function (a) {
								a.$index = c
							});
						var d = "function" == typeof b ? b(a, s) : b;
						return e(null, "ignoreTargetNode", d, s, f)
					}
					var s;
					return a.h(function () {
						var b = a.a.c(d) || [];
						"undefined" == typeof b.length && (b = [b]);
						b = a.a.la(b, function (b) {
								return f.includeDestroyed || b === p || null === b || !a.a.c(b._destroy)
							});
						a.k.t(a.a.Ua, null, [h, b, q, f, m])
					}, null, {
						G : h
					})
				};
				var h = a.a.f.L();
				a.d.template = {
					init : function (b, c) {
						var d = a.a.c(c());
						"string" == typeof d || d.name ? a.e.da(b) : (d = a.e.childNodes(b), d = a.a.ec(d), (new a.n.Z(b)).nodes(d));
						return {
							controlsDescendantBindings : !0
						}
					},
					update : function (b, c, d, e, f) {
						var m = c(),
						q;
						c = a.a.c(m);
						d = !0;
						e = null;
						"string" == typeof c ? c = {}

						 : (m = c.name, "if" in c && (d = a.a.c(c["if"])), d && "ifnot" in c && (d = !a.a.c(c.ifnot)), q = a.a.c(c.data));
						"foreach" in c ? e = a.jc(m || b, d && c.foreach || [], c, b, f) : d ? (f = "data" in c ? f.createChildContext(q, c.as) : f, e = a.Ta(m || b, f, c, b)) : a.e.da(b);
						f = e;
						(q = a.a.f.get(b, h)) && "function" == typeof q.F && q.F();
						a.a.f.set(b, h, f && f.ga() ? f : p)
					}
				};
				a.g.aa.template = function (b) {
					b = a.g.Ra(b);
					return 1 == b.length && b[0].unknown || a.g.bc(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
				};
				a.e.Q.template = !0
			})();
			a.b("setTemplateEngine", a.Wa);
			a.b("renderTemplate", a.Ta);
			a.a.nb = function (a, c, d) {
				if (a.length && c.length) {
					var e,
					f,
					h,
					g,
					k;
					for (e = f = 0; (!d || e < d) && (g = a[f]); ++f) {
						for (h = 0; k = c[h]; ++h)
							if (g.value === k.value) {
								g.moved = k.index;
								k.moved = g.index;
								c.splice(h, 1);
								e = h = 0;
								break
							}
						e += h
					}
				}
			};
			a.a.Aa = function () {
				function b(b, d, e, f, h) {
					var g = Math.min,
					k = Math.max,
					l = [],
					n,
					p = b.length,
					m,
					q = d.length,
					s = q - p || 1,
					t = p + q + 1,
					u,
					w,
					y;
					for (n = 0; n <= p; n++)
						for (w = u, l.push(u = []), y = g(q, n + s), m = k(0, n - 1); m <= y; m++)
							u[m] = m ? n ? b[n - 1] === d[m - 1] ? w[m - 1] : g(w[m] || t, u[m - 1] || t) + 1 : m + 1 : n + 1;
					g = [];
					k = [];
					s = [];
					n = p;
					for (m = q; n || m; )
						q = l[n][m] - 1, m && q === l[n][m - 1] ? k.push(g[g.length] = {
								status : e,
								value : d[--m],
								index : m
							}) : n && q === l[n - 1][m] ? s.push(g[g.length] = {
								status : f,
								value : b[--n],
								index : n
							}) : (--m, --n, h.sparse || g.push({
								status : "retained",
								value : d[m]
							}));
					a.a.nb(k, s, 10 * p);
					return g.reverse()
				}
				return function (a, d, e) {
					e = "boolean" === typeof e ? {
						dontLimitMoves : e
					}
					 : e || {};
					a = a || [];
					d = d || [];
					return a.length <= d.length ? b(a, d, "added", "deleted", e) : b(d, a, "deleted", "added", e)
				}
			}
			();
			a.b("utils.compareArrays", a.a.Aa);
			(function () {
				function b(b, c, f, h, g) {
					var k = [],
					l = a.h(function () {
							var l = c(f, g, a.a.ea(k, b)) || [];
							0 < k.length && (a.a.Bb(k, l), h && a.k.t(h, null, [f, l, g]));
							k.length = 0;
							a.a.$(k, l)
						}, null, {
							G : b,
							Da : function () {
								return !a.a.eb(k)
							}
						});
					return {
						S : k,
						h : l.ga() ? l : p
					}
				}
				var c = a.a.f.L();
				a.a.Ua = function (d, e, f, h, g) {
					function k(b, c) {
						v = r[c];
						u !== c && (z[b] = v);
						v.Ia(u++);
						a.a.ea(v.S, d);
						s.push(v);
						y.push(v)
					}
					function l(b, c) {
						if (b)
							for (var d = 0, e = c.length; d < e; d++)
								c[d] && a.a.r(c[d].S, function (a) {
									b(a, d, c[d].ka)
								})
					}
					e = e || [];
					h = h || {};
					var n = a.a.f.get(d, c) === p,
					r = a.a.f.get(d, c) || [],
					m = a.a.ya(r, function (a) {
							return a.ka
						}),
					q = a.a.Aa(m, e, h.dontLimitMoves),
					s = [],
					t = 0,
					u = 0,
					w = [],
					y = [];
					e = [];
					for (var z = [], m = [], v, x = 0, A, C; A = q[x]; x++)
						switch (C = A.moved, A.status) {
						case "deleted":
							C === p && (v = r[t], v.h && v.h.F(), w.push.apply(w, a.a.ea(v.S, d)), h.beforeRemove && (e[x] = v, y.push(v)));
							t++;
							break;
						case "retained":
							k(x, t++);
							break;
						case "added":
							C !== p ? k(x, C) : (v = {
									ka : A.value,
									Ia : a.m(u++)
								}, s.push(v), y.push(v), n || (m[x] = v))
						}
					l(h.beforeMove, z);
					a.a.r(w, h.beforeRemove ? a.M : a.removeNode);
					for (var x = 0, n = a.e.firstChild(d), E; v = y[x]; x++) {
						v.S || a.a.extend(v, b(d, f, v.ka, g, v.Ia));
						for (t = 0; q = v.S[t]; n = q.nextSibling, E = q, t++)
							q !== n && a.e.rb(d, q, E);
						!v.Zb && g && (g(v.ka, v.S, v.Ia), v.Zb = !0)
					}
					l(h.beforeRemove, e);
					l(h.afterMove, z);
					l(h.afterAdd, m);
					a.a.f.set(d, c, s)
				}
			})();
			a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Ua);
			a.K = function () {
				this.allowTemplateRewriting = !1
			};
			a.K.prototype = new a.C;
			a.K.prototype.renderTemplateSource = function (b) {
				var c = (9 > a.a.oa ? 0 : b.nodes) ? b.nodes() : null;
				if (c)
					return a.a.R(c.cloneNode(!0).childNodes);
				b = b.text();
				return a.a.Qa(b)
			};
			a.K.Ja = new a.K;
			a.Wa(a.K.Ja);
			a.b("nativeTemplateEngine", a.K);
			(function () {
				a.La = function () {
					var a = this.ac = function () {
						if (!t || !t.tmpl)
							return 0;
						try {
							if (0 <= t.tmpl.tag.tmpl.open.toString().indexOf("__"))
								return 2
						} catch (a) {}

						return 1
					}
					();
					this.renderTemplateSource = function (b, e, f) {
						f = f || {};
						if (2 > a)
							throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
						var h = b.data("precompiled");
						h || (h = b.text() || "", h = t.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h));
						b = [e.$data];
						e = t.extend({
								koBindingContext : e
							}, f.templateOptions);
						e = t.tmpl(h, b, e);
						e.appendTo(w.createElement("div"));
						t.fragments = {};
						return e
					};
					this.createJavaScriptEvaluatorBlock = function (a) {
						return "{{ko_code ((function() { return " + a + " })()) }}"
					};
					this.addTemplate = function (a, b) {
						w.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>")
					};
					0 < a && (t.tmpl.tag.ko_code = {
							open : "__.push($1 || '');"
						}, t.tmpl.tag.ko_with = {
							open : "with($1) {",
							close : "} "
						})
				};
				a.La.prototype = new a.C;
				var b = new a.La;
				0 < b.ac && a.Wa(b);
				a.b("jqueryTmplTemplateEngine", a.La)
			})()
		})
	})();
})(); ; ; ;
var template = function (d, h) {
	return template["object" === typeof h ? "render" : "compile"].apply(template, arguments)
};
(function (d, h) {
	d.version = "1.1";
	d.openTag = "<%";
	d.closeTag = "%>";
	d.parser = null;
	d.render = function (a, c) {
		var b;
		b = g[a];
		void 0 === b && !v ? ((b = document.getElementById(a)) && d.compile(a, b.value || b.innerHTML), b = g[a]) : b = g.hasOwnProperty(a) ? b : void 0;
		return void 0 === b ? m({
			id : a,
			name : "Render Error",
			message : "Not Cache"
		}) : b(c)
	};
	d.compile = function (a, c, b) {
		function j(b) {
			try {
				return (new n(b)).template
			} catch (e) {
				if (!f)
					return d.compile(a, c, !0)(b);
				e.id = a || c;
				e.name = "Render Error";
				e.source = c;
				return m(e)
			}
		}
		var f = b;
		"string" !== typeof c && (f = c, c = a, a = null);
		try {
			var n = w(c, f)
		} catch (k) {
			return k.id = a || c,
			k.name = "Syntax Error",
			m(k)
		}
		j.prototype = n.prototype;
		j.toString = function () {
			return n.toString()
		};
		a && (g[a] = j);
		return j
	};
	d.helper = function (a, c) {
		r[a] = c
	};
	var g = {},
	p = "".trim,
	v = p && !h.document,
	s = {},
	q = function () {
		var a = Array.prototype.forEach || function (a, b) {
			for (var d = this.length >>> 0, f = 0; f < d; f++)
				f in this && a.call(b, this[f], f, this)
		};
		return function (c, b) {
			a.call(c, b)
		}
	}
	(),
	x = Object.create || function (a) {
		function c() {}

		c.prototype = a;
		return new c
	},
	r = d.prototype = {
		$forEach : q,
		$render : d.render,
		$getValue : function (a) {
			return void 0 === a ? "" : a
		}
	};
	q("break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield".split(","), function (a) {
		s[a] = !0
	});
	var w = function (a, c) {
		function b(a) {
			o += a.split(/\n/).length - 1;
			a = a.replace(/('|"|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n");
			a = l[1] + "'" + a + "'" + l[2];
			return a + "\n"
		}
		function j(a) {
			var b = o;
			k ? a = k(a) : c && (a = a.replace(/\n/g, function () {
							o++;
							return "$line=" + o + ";"
						}));
			0 === a.indexOf("=") && (a = l[1] + (p ? "$getValue(" : "") + a.substring(1).replace(/[\s;]*$/, "") + (p ? ")" : "") + l[2]);
			c && (a = "$line=" + b + ";" + a);
			f(a);
			return a + "\n"
		}
		function f(a) {
			a = a.replace(/\/\*.*?\*\/|'[^']*'|"[^"]*"|\.[\$\w]+/g, "");
			q(a.split(/[^\$\w\d]+/), function (a) {
				if (/^this$/.test(a))
					throw {
						message : 'Prohibit the use of the "' + a + '"'
					};
				if (a && !s.hasOwnProperty(a) && !/^\d/.test(a) && !h.hasOwnProperty(a)) {
					var b;
					b = "include" === a ? m : r.hasOwnProperty(a) ? "$helpers." + a : "$data." + a;
					g += a + "=" + b + ",";
					h[a] = !0
				}
			})
		}
		var n = d.closeTag,
		k = d.parser,
		i,
		e = "",
		o = 1,
		h = {
			$out : !0,
			$line : !0
		},
		g = "var $helpers=this," + (c ? "$line=0," : ""),
		l = p ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
		m = "function(id,data){if(data===undefined){data=$data}return $helpers.$render(id,data)}";
		q(a.split(d.openTag), function (a) {
			var a = a.split(n),
			c = a[0],
			d = a[1];
			1 === a.length ? e += b(c) : (e += j(c), d && (e += b(d)))
		});
		i = e;
		c && (i = "try{" + i + "}catch(e){e.line=$line;throw e}");
		i = g + l[0] + i + "this.template=" + l[3];
		try {
			var t = new Function("$data", i);
			(t.prototype = x(r)).toString = function () {
				return this.template
			};
			return t
		} catch (u) {
			throw u.temp = "function anonymous($data) {" + i + "}",
			u;
		}
	},
	m = function (a) {
		function c() {
			return c + ""
		}
		var b = "[template]:\n" + a.id + "\n\n[name]:\n" + a.name;
		a.message && (b += "\n\n[message]:\n" + a.message);
		a.line && (b += "\n\n[line]:\n" + a.line, b += "\n\n[source]:\n" + a.source.split(/\n/)[a.line - 1].replace(/^[\s\t]+/, ""));
		a.temp && (b += "\n\n[temp]:\n" + a.temp);
		h.console && console.error(b);
		c.toString = function () {
			return "{Template Error}"
		};
		return c
	}
})(template, this);
if ("undefined" !== typeof module && module.exports)
	module.exports = template;
var EmailSevers = {
	'sina.com.cn' : 'http://mail.sina.com.cn/',
	'sina.com' : 'http://mail.sina.com.cn/',
	'sina.cn' : 'http://mail.sina.com.cn/',
	'vip.sina.com' : 'http://mail.sina.com.cn/',
	'2008.sina.com' : 'http://mail.sina.com.cn/',
	'163.com' : 'http://mail.163.com/',
	'126.com' : 'http://mail.126.com/',
	'popo.163.com' : 'http://popo.163.com/',
	'yeah.net' : 'http://email.163.com/',
	'vip.163.com' : 'http://vip.163.com/',
	'vip.126.com' : 'http://vip.126.com/',
	'188.com' : 'http://188.com/',
	'vip.188.com' : 'http://vip.188.com/',
	'tom.com' : 'http://mail.tom.com/',
	'yahoo.com' : 'http://mail.cn.yahoo.com/',
	'yahoo.com.cn' : 'http://mail.cn.yahoo.com/',
	'yahoo.cn' : 'http://mail.cn.yahoo.com/',
	'sohu.com' : 'http://mail.sohu.com/',
	'hotmail.com' : 'https://login.live.com/',
	'139.com' : 'http://mail.10086.cn/',
	'gmail.com' : 'https://accounts.google.com',
	'msn.com' : 'https://login.live.com',
	'51.com' : 'http://passport.51.com/',
	'yougou.com' : 'http://mail.yougou.com/',
	'qq.com' : 'https://mail.qq.com',
	'foxmail.com' : 'http://mail.qq.com',
	'vip.qq.com' : 'http://mail.qq.com'
};
function base64encode(str) {
	var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
	var out,
	i,
	len;
	var c1,
	c2,
	c3;
	len = str.length;
	i = 0;
	out = "";
	while (i < len) {
		c1 = str.charCodeAt(i++) & 0xff;
		if (i == len) {
			out += base64EncodeChars.charAt(c1 >> 2);
			out += base64EncodeChars.charAt((c1 & 0x3) << 4);
			out += "==";
			break;
		}
		c2 = str.charCodeAt(i++);
		if (i == len) {
			out += base64EncodeChars.charAt(c1 >> 2);
			out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
			out += base64EncodeChars.charAt((c2 & 0xF) << 2);
			out += "=";
			break;
		}
		c3 = str.charCodeAt(i++);
		out += base64EncodeChars.charAt(c1 >> 2);
		out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
		out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
		out += base64EncodeChars.charAt(c3 & 0x3F);
	}
	return out;
};
function base64decode(str) {
	var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
	var c1,
	c2,
	c3,
	c4;
	var i,
	len,
	out;
	len = str.length;
	i = 0;
	out = "";
	while (i < len) {
		do {
			c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
		} while (i < len && c1 == -1);
		if (c1 == -1)
			break;
		do {
			c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
		} while (i < len && c2 == -1);
		if (c2 == -1)
			break;
		out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
		do {
			c3 = str.charCodeAt(i++) & 0xff;
			if (c3 == 61)
				return out;
			c3 = base64DecodeChars[c3];
		} while (i < len && c3 == -1);
		if (c3 == -1)
			break;
		out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
		do {
			c4 = str.charCodeAt(i++) & 0xff;
			if (c4 == 61)
				return out;
			c4 = base64DecodeChars[c4];
		} while (i < len && c4 == -1);
		if (c4 == -1)
			break;
		out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
	}
	return out;
};
function newGuid() {
	var guid = "";
	for (var i = 1; i <= 32; i++) {
		var n = Math.floor(Math.random() * 16.0).toString(16);
		guid += n;
		if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
			guid += "-";
	}
	return guid;
};
var PXDataWarehouse = function (isajax, url, page_type, goodid) {
	if (!PXDataWarehouse.PrevUrlIndex) {
		PXDataWarehouse.PrevUrlIndex = 0;
		PXDataWarehouse.PrevUrls = [];
		PXDataWarehouse.PrevUrls.push(document.referrer);
		PXDataWarehouse.PrevUrls.push(document.location.href);
	}
	if (url) {
		PXDataWarehouse.PrevUrls.push(url);
	}
	var _PrevUrlIndex = PXDataWarehouse.PrevUrlIndex++;
	var index = 0;
	goodid = goodid || 0;
	function Request(argname) {
		var url = document.location.href;
		var arrStr = url.substring(url.indexOf('?') + 1).split('&');
		for (var i = 0; i < arrStr.length; i++) {
			var loc = arrStr[i].indexOf(argname + '=');
			if (loc != -1) {
				return arrStr[i].replace(argname + '=', '').replace('?', '');
				break;
			}
		}
		return '';
	};
	isajax = isajax || false;
	var data = {
		guid : newGuid(),
		url : url || document.location.href,
		user_id : jQuery.cookie("user_id") || '',
		cookie_id : $.cookie('GUID'),
		session_id : PX_HELP_DATA[1],
		prev_url : PXDataWarehouse.PrevUrls[_PrevUrlIndex],
		page_type : (page_type || PX_HELP_DATA[2].join(',')) + ((isajax) ? ',ajax' : ''),
		module_item : '[]',
		login_page : 0,
		prev_module : ''
	};
	data.prev_module = window.location.href.split("#pw_area=");
	if (data.prev_module.length > 1) {
		data.prev_module = data.prev_module[1].split("#")[0];
		data.url = document.location.href.replace(/((\?.+)|(#.+)){1}$/, '');
	} else {
		data.prev_module = '';
	}
	function ajax() {
		data.user_id = jQuery.cookie("user_id") || '';
		if (data.module_item != '[]') {
			var guid = data.guid;
			data.guid = guid + ',' + index++;
			if (PX_HELP_DATA[2][0] == 'paixie') {
				$.ajax({
					url : DOMIN.MAIN + '/data/collect?fun=goods',
					type : "POST",
					cache : false,
					data : data
				});
			} else {
				$.ajax({
					url : DOMIN.MAIN + '/data/collect?fun=goods',
					dataType : "script",
					cache : false,
					data : data
				});
			}
			data.guid = guid;
		}
	};
	if (!isajax) {
		PXLogin.AddLoginInComplete(function () {
			data.login_page = 1;
			ajax();
		});
	}
	if (data.cookie_id == null || data.cookie_id == '') {
		$.cookie('GUID', data.guid, {
			expires : 99999,
			path : '/',
			domain : 'paixie.net'
		});
		data.cookie_id = data.guid;
	}
	var _ids = [];
	this.push = function (key, ids) {
		if ($.isArray(key)) {
			_ids = _ids.concat(key);
		} else {
			key = key.replace(/-/g, '_');
			if (!$.isArray(ids)) {
				throw new Error('ids必须为数组！');
			}
			_ids.push({
				'ID' : key,
				'IDS' : ids
			});
		}
		data.module_item = [];
		for (var i = 0; i < _ids.length; i++) {
			_ids[i]['ID'] = _ids[i]['ID'].replace(/-/g, '_');
			if (_ids[i]['IDS']) {
				if (_ids[i]['IDS'].length) {
					data.module_item.push('{"key":"' + PX_HELP_DATA[2].join(',') + ',' + _ids[i]['ID'] + '","ids":["' + _ids[i]['IDS'].join('","') + '"]}');
				} else {
					data.module_item.push('{"key":"' + PX_HELP_DATA[2].join(',') + ',' + _ids[i]['ID'] + '","ids":[]}');
				}
			}
		}
		data.module_item = '[' + data.module_item.join(',') + ']';
		ajax();
	};
	ajax();
};
PXDataWarehouse.ShopProcessAct = function (guid) {
	var data = {
		guid : guid || newGuid(),
		user_id : jQuery.cookie("user_id") || '',
		cookie_id : $.cookie('GUID'),
		session_id : PX_HELP_DATA[1],
		act : '',
		items : '[]'
	};
	var initItems = {};
	var __items = null;
	if (data.cookie_id == null || data.cookie_id == '') {
		$.cookie('GUID', data.guid, {
			expires : 99999,
			path : '/',
			domain : 'paixie.net'
		});
		data.cookie_id = data.guid;
	}
	try {
		$.each(InitData.Goods, function (gid, value) {
			initItems[value.GoodID] = {
				Num : value.Num,
				SizeID : value.SizeID,
				Price : ((value.LimitPrice) ? value.LimitPrice : value.PXPrice)
			};
		});
	} catch (e) {
		initItems = null;
	}
	function ajax() {
		if (initItems) {
			var ids = {};
			var html = [];
			$.each(InitData.Goods, function (gid, value) {
				ids[value.GoodID] = true;
				if (initItems[value.GoodID]) {
					if (initItems[value.GoodID].isDel) {
						html.push('{"item_id":"' + value.GoodID + '","num":"' + value.Num + '","vid":"' + value.SizeID + '","price":"' + initItems[value.GoodID].Price + '","status":"again","init_num":"' + initItems[value.GoodID].Num + '"}');
					} else if (initItems[value.GoodID].isAdd) {
						html.push('{"item_id":"' + value.GoodID + '","num":"' + value.Num + '","vid":"' + value.SizeID + '","price":"' + initItems[value.GoodID].Price + '","status":"add","init_num":"' + initItems[value.GoodID].Num + '"}');
					} else {
						html.push('{"item_id":"' + value.GoodID + '","num":"' + value.Num + '","vid":"' + value.SizeID + '","price":"' + initItems[value.GoodID].Price + '","status":"","init_num":"' + initItems[value.GoodID].Num + '"}');
					}
				} else {
					initItems[value.GoodID] = {
						Num : value.Num,
						SizeID : value.SizeID,
						Price : ((value.LimitPrice) ? value.LimitPrice : value.PXPrice),
						isAdd : true
					};
					html.push('{"item_id":"' + value.GoodID + '","num":"' + value.Num + '","vid":"' + value.SizeID + '","price":"' + initItems[value.GoodID].Price + '","status":"add","init_num":"' + value.Num + '"}');
				}
			});
			$.each(initItems, function (gid, value) {
				if (!ids[gid]) {
					initItems[gid].isDel = true;
					html.push('{"item_id":"' + gid + '","num":"' + value.Num + '","vid":"' + value.SizeID + '","price":"' + value.Price + '","status":"del","init_num":"' + value.Num + '"}');
				}
			});
			data.items = '[' + html.join(',') + ']';
		} else {
			data.items = '';
		}
		if (data.items != '[]') {
			if (PX_HELP_DATA[2][0] == 'paixie') {
				$.ajax({
					url : DOMIN.MAIN + '/data/collect?fun=cart',
					type : "POST",
					cache : false,
					data : data
				});
			} else {
				$.ajax({
					url : DOMIN.MAIN + '/data/collect?fun=cart',
					dataType : "script",
					cache : false,
					data : data
				});
			}
		}
	};
	this.push = function (actname) {
		actname = actname.replace(/-/g, '_');
		data.act = actname;
		data.user_id = jQuery.cookie("user_id") || '';
		ajax();
	};
	this.getGuid = function () {
		return data.guid;
	};
};
$(window).load(function () {
	if ($.cookie('GUID') == null || $.cookie('GUID') == '') {
		$.cookie('GUID', newGuid(), {
			expires : 99999,
			path : '/',
			domain : 'paixie.net'
		});
	}
	try {
		PX_HELP_DATA[0];
		try {
			window.pXDataWarehouse = new PXDataWarehouse(null, null, null, goodInfo.ID);
		} catch (e) {
			window.pXDataWarehouse = new PXDataWarehouse();
		}
		$("a").live('click', function () {
			var _this = $(this);
			var _p = $(this);
			for (var i = 0; i < 5; i++) {
				if (!_p.length) {
					break;
				}
				var pw_area = _p.attr('pw-area');
				if (pw_area != null && pw_area != '') {
					var href = _this.attr('href');
					var _href = href;
					var length = _p.prevAll("[pw-area='" + pw_area + "']").length + 1;
					var groupCount = _p.parent().attr('pw-area-group');
					var group = '';
					if (/^\d+$/.test(groupCount)) {
						groupCount = parseInt(groupCount);
						group = '_' + Math.ceil(length / groupCount);
						length = length % groupCount;
					}
					href += '#pw_area=' + base64encode(PX_HELP_DATA[2].join(',') + ',' + pw_area + group + '$' + length);
					_this.attr('href', href);
					setTimeout(function () {
						_this.attr('href', _href);
					}, 100);
					break;
				} else {
					_p = _p.parent();
					if (!_p.length) {
						break;
					}
				}
			}
		});
	} catch (e) {}

});
function CheckFlashInstalled() {
	var hasFlash = 0;
	var flashVersion = 0;
	var isIE = /*@cc_on!@*/
		0;
	if (isIE) {
		var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
		if (swf) {
			hasFlash = 1;
			VSwf = swf.GetVariable("$version");
			flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
		}
	} else {
		if (navigator.plugins && navigator.plugins.length > 0) {
			var swf = navigator.plugins["Shockwave Flash"];
			if (swf) {
				hasFlash = 1;
				var words = swf.description.split(" ");
				for (var i = 0; i < words.length; ++i) {
					if (isNaN(parseInt(words[i])))
						continue;
					flashVersion = parseInt(words[i]);
				}
			}
		}
	}
	var os = 'other';
	if (navigator.userAgent.indexOf("Windows", 0) != -1) {
		os = 'windows';
	} else if (navigator.userAgent.indexOf("mac", 0) != -1) {
		os = 'mac';
	}
	if (hasFlash) {
		_hmt.push(['_trackEvent', 'flash-true', 'flash-true-' + os]);
	} else {
		_hmt.push(['_trackEvent', 'flash-false', 'flash-false-' + os]);
	}
	return {
		f : hasFlash,
		v : flashVersion
	};
};
function CheckSilverlightInstalled(nosend, noinstall) {
	var isSilverlightInstalled = false;
	try {
		try {
			var slControl = new ActiveXObject('AgControl.AgControl');
			isSilverlightInstalled = true;
		} catch (e) {
			if (navigator.plugins["Silverlight Plug-In"]) {
				isSilverlightInstalled = true;
			}
		}
	} catch (e) {}
	var os = 'other';
	if (navigator.userAgent.indexOf("Windows", 0) != -1) {
		os = 'windows';
	} else if (navigator.userAgent.indexOf("mac", 0) != -1) {
		os = 'mac';
	}
	if (isSilverlightInstalled) {
		if (!nosend)
			_hmt.push(['_trackEvent', 'silverlight-true', 'silverlight-true-' + os]);
	} else {
		if (!nosend)
			_hmt.push(['_trackEvent', 'silverlight-false', 'silverlight-false-' + os]);
		if (!noinstall) {
			if (window.navigator.userAgent.indexOf("MSIE") >= 0) {
				$("body").append('<object width="0" height="0" type="application/x-oleobject" codebase="http://go.microsoft.com/fwlink/?LinkID=229320"></object>');
			} else if (os == "windows") {
				$("body").prepend('<div style="height: 25px;line-height: 25px;background: #FEFAEC;text-align: center;"><div style="width:980px;margin:auto;">拍鞋网温馨提示：您还未安装ActiveX性能插件，该插件有助于游戏性能的提升，<a style="color: #FF4F30;cursor:pointer;" href="http://go.microsoft.com/fwlink/?LinkID=229320" target="_blank">点击此处安装插件</a>提升游戏性能！</div></div>');
			}
		}
	}
	return isSilverlightInstalled;
};
var bodyrel = 'Home';
$(document).ready(function (e) {
	bodyrel = $('body').attr('rel');
});
var PXLogin = {
	LoginInComplete : [],
	AddLoginInComplete : function (complete) {
		PXLogin.LoginInComplete.push(complete);
	},
	RemoveLoginInComplete : function (complete) {
		for (var i = 0; i < PXLogin.LoginInComplete.length; ) {
			if (PXLogin.LoginInComplete[i] == complete) {
				PXLogin.LoginInComplete.splice(i, 1);
			} else {
				i++;
			}
		}
	},
	LoginOutComplete : [],
	AddLoginOutComplete : function (complete) {
		PXLogin.LoginOutComplete.push(complete);
	},
	RemoveLoginOutComplete : function (complete) {
		for (var i = 0; i < PXLogin.LoginOutComplete.length; ) {
			if (PXLogin.LoginOutComplete[i] == complete) {
				PXLogin.LoginOutComplete.splice(i, 1);
			} else {
				i++;
			}
		}
	},
	CheckLoginComplete : [],
	AddCheckLoginComplete : function (complete) {
		PXLogin.CheckLoginComplete.push(complete);
	},
	RemoveCheckLoginComplete : function (complete) {
		for (var i = 0; i < PXLogin.CheckLoginComplete.length; ) {
			if (PXLogin.CheckLoginComplete[i] == complete) {
				PXLogin.CheckLoginComplete.splice(i, 1);
			} else {
				i++;
			}
		}
	},
	CheckLogin : function (complete) {
		$.ajax({
			url : DOMIN.MAIN + '/login?act=chklogin&jsoncallback=?',
			type : 'GET',
			dataType : 'json',
			cache : false,
			timeout : 50000,
			error : function () {},
			success : function (data) {
				if (complete != null) {
					complete(data);
				};
				if (!data.Ret) {
					if (data.Msg != "") {
						alert(data.Msg);
					};
					$.each(PXLogin.CheckLoginComplete, function (index, fun) {
						fun(false, "", data);
					});
					try {
						LoginOutFun();
					} catch (e) {};
					return false;
				};
				if (data.Data == '1') {
					$.each(PXLogin.CheckLoginComplete, function (index, fun) {
						fun(false, "", data);
					});
					try {
						LoginOutFun();
					} catch (e) {}

				} else {
					$.each(PXLogin.CheckLoginComplete, function (index, fun) {
						fun(true, data.Data, data);
						PX_HELP_DATA[0] = data.Data;
					});
					try {
						refreshUserFun(data.Data);
					} catch (e) {}

				}
			}
		});
	},
	LoginOut : function (complete) {
		try {
			$.ajax({
				url : DOMIN.MAIN + '/login?act=loginout&jsoncallback=?',
				type : 'GET',
				dataType : 'json',
				cache : false,
				timeout : 50000,
				complete : function (data) {
					PX_HELP_DATA[0] = '';
					$.each(PXLogin.LoginOutComplete, function (index, fun) {
						fun();
					});
					try {
						LoginOutFun();
					} catch (e) {};
					if (complete != null) {
						complete(data);
					}
				}
			});
		} catch (e) {
			PX_HELP_DATA[0] = '';
			$.each(PXLogin.LoginOutComplete, function (index, fun) {
				fun();
			});
			if (complete != null) {
				complete();
			}
		};
		return false;
	}
};
var LoginRegisterBox = function (pagetype) {
	pagetype = pagetype || '';
	var $signin = null;
	var self = this;
	var domin = window.location.href.split('/')[2];
	this.Show = function (mode, username, registerType) {
		if (mode == 'Ordinary')
			mode = 'Phone';
		var loginCallback = 'loginCallback' + (new Date()).valueOf();
		window[loginCallback] = function (data) {
			switch (data.act) {
			case 'loaded':
				$signin.find('div').hide();
				$signin.find('iframe').attr('src', $signin.find('iframe').attr('src') + '#loaded');
				break;
			case 'height':
				$signin.find('iframe').height(data.height);
				break;
			case 'gologin':
				$signin.find('div').show();
				$signin.find('p a:first').addClass('selected').siblings().removeClass('selected');
				$signin.find('iframe').attr('src', DOMIN.MAIN + '/login.html?domin=' + domin + '&username=' + data.username + '&mode=dialog&callback=' + loginCallback);
				break;
			case 'login':
				if (PX_HELP_DATA[2][1] == 'miaosha' || PX_HELP_DATA[2][2] == 'goods_detail') {
					if ($('#isreview').attr('rel') == '1') {
						window.document.location.href = '/' + $('#isreview').attr('href');
						return false;
					}
				};
				if (PX_HELP_DATA[2][2] == 'goods_comment') {
					window.location.reload();
					return false;
				};
				PXLogin.CheckLogin();
				try {
					LoginFun();
				} catch (e) {};
				$.each(PXLogin.LoginInComplete, function (index, fun) {
					fun(data.username, data.model);
				});
				self.Hide();
				break;
			}
		};
		$signin = $('<div class="com-login-register"><a class="close">╳</a><p><a ' + ((mode == 'Phone') ? '' : ' class="selected" ') + ' href="' + DOMIN.MAIN + '/login.html">登 录</a>&nbsp;&nbsp;<a ' + ((mode != 'Phone') ? '' : ' class="selected" ') + ' href="' + DOMIN.MAIN + '/register.html">注 册</a></p><iframe srolling="no" src="' + DOMIN.MAIN + ((mode == 'Phone') ? '/register' : '/login') + '.html?domin=' + domin + '&mode=dialog&callback=' + loginCallback + '&pagetype=' + pagetype + '" width="392" frameborder="0" height="380" style="display:block;"></iframe><div></div></div>').appendTo('body');
		$signin.find('a.close').click(function () {
			self.Hide();
		});
		$signin.find('p a').click(function () {
			if ($(this).hasClass('selected'))
				return false;
			$(this).addClass('selected').siblings().removeClass('selected');
			var src = $(this).attr('href');
			if (src.indexOf('?') >= 0) {
				src += '&domin=' + domin + '&mode=dialog&callback=' + loginCallback + '&pagetype=' + pagetype;
			} else {
				src += '?domin=' + domin + '&mode=dialog&callback=' + loginCallback + '&pagetype=' + pagetype;
			}
			$signin.find('div').show();
			$signin.find('iframe').attr('src', src);
			return false;
		});
		$signin.css({
			top : $(window).scrollTop() + $(window).height() / 2 - 221
		});
		$signin.hide().fadeIn();
		$.documentMask();
	};
	this.Hide = function () {
		try {
			window['loginCallback'] = null;
			$("#jquery_addmask").fadeTo('slow', 0, function () {
				$("#jquery_addmask").remove();
			});
			$signin.fadeTo('slow', 0, function () {
				$signin.hide();
			});
		} catch (e) {}

	};
};
var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
function GetFileSize(target) {
	try {
		var fileSize = 0;
		if (isIE && !target.files) {
			var filePath = target.value;
			var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
			var file = fileSystem.GetFile(filePath);
			fileSize = file.Size;
		} else {
			fileSize = target.files[0].size;
		}
		return fileSize;
	} catch (e) {
		return -1;
	}
};
function toAlipayLogin(pagetype) {
	pagetype = pagetype || '';
	window.location.href = 'http://www.paixie.net/login/apialipay?r=1&pagetype=' + pagetype;
};
function toQzoneLogin(pagetype) {
	pagetype = pagetype || '';
	document.domain = "paixie.net";
	window.open(DOMIN.MAIN + "/login/api?t=qq&r=1&pagetype=" + pagetype, "TencentLogin", "width=450,height=320,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1");
};
function toBaiduLogin(pagetype) {
	pagetype = pagetype || '';
	document.domain = "paixie.net";
	window.open(DOMIN.MAIN + "/login/apibaidu?pagetype=" + pagetype, "BaiduLogin", "width=450,height=320,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1");
};
function showtop() {};
(function ($) {
	$.suggest = function (input, options) {
		var $input = $(input).attr("autocomplete", "off");
		var $inputhide = $(options.inputhide);
		var $results;
		var timeout = false;
		var prevLength = 0;
		var cache = [];
		var cacheSize = 0;
		if (!options.attachObject)
			options.attachObject = $(document.createElement("ul")).appendTo('body');
		$results = $(options.attachObject);
		$results.addClass(options.resultsClass);
		resetPosition();
		$(window).load(resetPosition).resize(resetPosition);
		$input.blur(function () {
			$results.find("ul li[rel='" + $(this).val().replace(/(^\s*)|(\s*$)/g, "") + "']").click();
			setTimeout(function () {
				$results.hide()
			}, 200);
			if (!$inputhide.val()) {
				$input.val("");
			}
		});
		$input.focus(function () {
			var html = '';
			if ($.trim($(this).val()) == '') {
				suggest_tip = '<div>请输入中文或拼音</div>';
				html = suggest_tip + '<ul>' + html + '</ul>';
				$results.html(html).show();
			}
		});
		$input.click(function () {
			var q = $.trim($(this).val());
			if (q != '') {
				displayItems(q);
				$(this).select();
			}
		});
		$input.change(function () {
			$inputhide.val('');
		});
		try {
			$results.bgiframe();
		} catch (e) {}
		$input.keyup(processKey);
		function resetPosition() {}
		function processKey(e) {
			if ((/27$|38$|40$/.test(e.keyCode) && $results.is(':visible')) || (/^13$|^9$/.test(e.keyCode) && getCurrentResult())) {
				if (e.preventDefault)
					e.preventDefault();
				if (e.stopPropagation)
					e.stopPropagation();
				e.cancelBubble = true;
				e.returnValue = false;
				switch (e.keyCode) {
				case 38:
					prevResult();
					break;
				case 40:
					nextResult();
					break;
				case 13:
					selectCurrentResult();
					return false;
					break;
				case 27:
					$results.hide();
					break;
				}
			} else {
				if ($input.val().length != prevLength) {
					if (timeout)
						clearTimeout(timeout);
					timeout = setTimeout(suggest, options.delay);
					prevLength = $input.val().length;
				}
			}
		}
		function suggest() {
			var q = $.trim($input.val());
			displayItems(q);
		}
		function displayItems(items) {
			var html = '';
			var j = 0;
			if (items == '') {
				suggest_tip = '<div>请输入中文或拼音</div>';
				html = suggest_tip + '<ul>' + html + '</ul>';
				$results.html(html).show();
			} else {
				for (var i = 0; i < options.source.length; i++) {
					var reg = new RegExp('^' + items + '.*$', 'im');
					$num = 0;
					if ((reg.test(options.source[i][1]) || reg.test(options.source[i][2]) || reg.test(options.source[i][3]))) {
						html += '<li id="school_' + options.source[i][0]
						 + '" rel="' + options.source[i][1] + '"><a href="#'
						+options.source[i][1] + '">'
						+options.source[i][1] + '</a></li>';
						j++;
					}
				}
				if (html == '') {
					suggest_tip = '<div>对不起，找不到：' + items + '</div>';
					$inputhide.val('');
				} else {
					suggest_tip = '<div>' + items + '，按拼音排序</div>';
				}
				html = suggest_tip + '<ul>' + html + '</ul>';
				$results.html(html).show();
				$results.children('ul').children('li:first-child').addClass(options.selectClass);
				$results.children('ul').children('li').mouseover(function () {
					$results.children('ul').children('li').removeClass(options.selectClass);
					$(this).addClass(options.selectClass);
				}).click(function (e) {
					e.preventDefault();
					e.stopPropagation();
					selectCurrentResult();
				});
			}
		}
		function getCurrentResult() {
			if (!$results.is(':visible'))
				return false;
			var $currentResult = $results.children('ul').children('li.' + options.selectClass);
			if (!$currentResult.length)
				$currentResult = false;
			return $currentResult;
		}
		function selectCurrentResult(noblur) {
			$currentResult = getCurrentResult();
			if ($currentResult) {
				$input.val($currentResult.children('a').html().replace(/<span>.+?<\/span>/i, ''));
				if (!noblur)
					$results.hide();
				if ($(options.dataContainer)) {
					$(options.dataContainer).val($currentResult.attr('rel'));
				}
				if (options.onSelect) {
					options.onSelect.apply($input[0]);
				}
				$schoolid = $currentResult.attr('id');
				$schoolid = $schoolid.substr(7);
				$inputhide.val($schoolid);
				if (!noblur)
					$input.blur();
			}
		}
		function nextResult() {
			$currentResult = getCurrentResult();
			if ($currentResult) {
				$currentResult.removeClass(options.selectClass).next().addClass(options.selectClass);
			} else {
				$results.children('ul').children('li:first-child').addClass(options.selectClass);
			}
		}
		function prevResult() {
			$currentResult = getCurrentResult();
			if ($currentResult) {
				$currentResult.removeClass(options.selectClass).prev().addClass(options.selectClass);
			} else {
				$results.children('ul').children('li:last-child').addClass(options.selectClass);
			}
		}
	};
	$.fn.suggest = function (source, options) {
		if (!source)
			return;
		options = options || {};
		options.source = source;
		options.hot_list = options.hot_list || [];
		options.delay = options.delay || 0;
		options.resultsClass = options.resultsClass || 'ac_results';
		options.selectClass = options.selectClass || 'ac_over';
		options.matchClass = options.matchClass || 'ac_match';
		options.minchars = options.minchars || 1;
		options.delimiter = options.delimiter || '\n';
		options.onSelect = options.onSelect || false;
		options.dataDelimiter = options.dataDelimiter || '\t';
		options.dataContainer = options.dataContainer || '#SuggestResult';
		options.attachObject = options.attachObject || null;
		this.each(function () {
			new $.suggest(this, options);
		});
		return this;
	};
	$.fn.pxSuggest = function (options) {
		var obj = $(this);
		$.ajax({
			dataType : "script",
			cache : true,
			url : DOMIN.MAIN + "/static/campus_data_cache.php",
			success : function () {
				obj.each(function () {
					$(this).suggest(SchoolList, options);
				});
			}
		});
	};
	$.getYiTui = function (op) {
		var _op = {
			item_urls : null,
			page_type : null,
			max_num : 10,
			item_num : 5,
			template : '',
			callback : null,
			img_size : "220165"
		};
		_op = $.extend(_op, op);
		if (_op.item_urls == null || _op.page_type == null || typeof _op.max_num != 'number' || typeof _op.item_num != 'number') {
			return null;
		}
		_op.template = template.compile(_op.template);
		var _this = this;
		if (typeof _op.item_urls === 'object') {
			var urls = '';
			$.each(_op.item_urls, function (index, url) {
				urls += url + ',';
			});
			_op.item_urls = urls.slice(0, -1);
			urls = null;
		} else {
			_op.item_urls += '';
		}
		_op.item_urls = encodeURIComponent(_op.item_urls);
		$.ajax({
			url : DOMIN.MAIN + '/yitui?&jsoncallback=?',
			dataType : "json",
			data : {
				item_urls : _op.item_urls,
				page_type : _op.page_type,
				max_num : _op.max_num,
				img_size : _op.img_size
			},
			success : function (data) {
				_op.data = data;
				_this.Page = 1;
				_this.Count = _op.data.data.length;
				_this.MaxPage = Math.ceil(_this.Count / _op.item_num);
				_this.Go(_this.Page);
			}
		});
		_this.Go = function (page) {
			page = $.trim(page + "");
			if (_op.data != null && _op.data.data.length) {
				if (/^\d+$/.test(page)) {
					page = parseInt(page);
					if (page == 0)
						page = 1;
					else if (page > _op.MaxPage)
						page = _op.MaxPage;
					_this.Page = page;
					var data = [];
					var index = (_this.Page - 1) * 5;
					for (var i = 0; i < _op.item_num; i++) {
						if (_op.data.data[index + i] != null) {
							data.push(_op.data.data[index + i]);
							data[data.length - 1].item_url_img = data[data.length - 1].item_url + '?' + _op.data.item_track_param.replace("{item_idx}", index + i + 1).replace("{link_type}", "1");
							data[data.length - 1].item_url_text = data[data.length - 1].item_url + '?' + _op.data.item_track_param.replace("{item_idx}", index + i + 1).replace("{link_type}", "2");
						}
					}
					if (_op.callback != null) {
						_this.Data = _op.data;
						_op.callback(_op.template({
								data : {
									obj : _this,
									data : data
								}
							}), _this);
					}
				}
			}
			return false;
		};
		_this.Next = function () {
			if (_op.data != null) {
				_this.Go(_this.Page + 1);
			}
			return false;
		};
		_this.Prev = function () {
			if (_op.data != null) {
				_this.Go(_this.Page - 1);
			}
			return false;
		};
		return _this;
	};
	$.copy = function (text) {
		try {
			window.clipboardData.setData("Text", text);
			return true;
		} catch (e) {
			return false;
		}
	};
	$.fn.pxLazyload_2 = function (options) {
		var settings = {
			mode : "Single",
			rowItemNum : 1,
			threshold : 0,
			container : window,
			outTime : 1000,
			srcProperty : "truesrc"
		};
		var $objs = $(this);
		var Dictionary = new Array();
		var SetTimeout = null;
		var NOW_TIME = (new Date()).valueOf();
		if (options)
			$.extend(settings, options);
		var Funs = {};
		function LoadImgForSingle($_obj, _src) {
			var _isOutTime = false;
			var _setTimeout = setTimeout(function () {
					_isOutTime = true;
					$_obj.css({
						"opacity" : "0"
					}).attr("src", _src).animate({
						opacity : 1
					}, {
						queue : false,
						duration : 300
					}).removeAttr(settings.srcProperty);
					if (/(^|\s)img\d+($|\s)/.test($_obj.parent().attr('class'))) {
						$_obj.parent().css('background-image', 'none');
					}
				}, settings.outTime);
			$("<img/>").one("load", function () {
				if (_isOutTime)
					return;
				clearTimeout(_setTimeout);
				$_obj.css({
					"opacity" : "0"
				}).attr("src", _src).animate({
					opacity : 1
				}, {
					queue : false,
					duration : 300
				}).removeAttr(settings.srcProperty);
				if (/(^|\s)img\d+($|\s)/.test($_obj.parent().attr('class'))) {
					$_obj.parent().css('background-image', 'none');
				}
			}).attr("src", _src);
		};
		function LoadImgForRow($_obj) {
			$_obj.find("img[" + settings.srcProperty + "]").each(function (index, element) {
				var _src = $(this).attr(settings.srcProperty);
				if (_src != null || _src != '')
					LoadImgForSingle($(this), _src);
			});
		};
		Funs["scrollFunForSingle" + NOW_TIME] = function () {
			if (!Dictionary.length || !$objs.length) {
				Funs["scrollFunForSingle" + NOW_TIME] = function () {};
				$(window).unbind("scroll", Funs["scrollFunForSingle" + NOW_TIME]);
				return;
			}
			clearTimeout(SetTimeout);
			SetTimeout = setTimeout(function () {
					var _windowScrollTop = $(window).scrollTop();
					var _windowHeight = $(window).height();
					var _count = Dictionary.length;
					for (var i = 0; i < _count; ) {
						var $_obj = $objs.eq(Dictionary[i]);
						var _src = $_obj.attr(settings.srcProperty);
						if (_src == null || _src == "") {
							Dictionary.splice(i, 1);
							_count = Dictionary.length;
							continue;
						}
						var _objHeight = $_obj.height() + settings.threshold;
						var _objOffsetTop = $_obj.offset().top - settings.threshold;
						if (_objOffsetTop + _objHeight < _windowScrollTop) {
							i++;
						} else if (_windowScrollTop + _windowHeight < _objOffsetTop) {
							break;
						} else {
							Dictionary.splice(i, 1);
							_count = Dictionary.length;
							LoadImgForSingle($_obj, _src);
						}
					}
				}, 300);
		};
		Funs["scrollFunForRow" + NOW_TIME] = function () {
			if (!Dictionary.length || !$objs.length) {
				Funs["scrollFunForRow" + NOW_TIME] = function () {};
				$(window).unbind("scroll", Funs["scrollFunForRow" + NOW_TIME]);
				return;
			}
			clearTimeout(SetTimeout);
			SetTimeout = setTimeout(function () {
					var _windowScrollTop = $(window).scrollTop();
					var _windowHeight = $(window).height();
					var _count = Dictionary.length;
					for (var i = 0; i < _count; ) {
						var $_obj = $objs.eq(Dictionary[i]);
						var _objHeight = $_obj.height() + settings.threshold;
						var _objOffsetTop = $_obj.offset().top - settings.threshold;
						if (_objOffsetTop + _objHeight < _windowScrollTop) {
							i++;
						} else if (_windowScrollTop + _windowHeight < _objOffsetTop) {
							break;
						} else {
							for (var j = Dictionary[i]; j < Dictionary[i] + settings.rowItemNum; j++) {
								LoadImgForRow($objs.eq(j));
							}
							Dictionary.splice(i, 1);
							_count = Dictionary.length;
						}
					}
				}, 300);
		};
		if (settings.mode != "Row") {
			$objs.each(function (index, element) {
				Dictionary.push(index);
			});
			$(window).bind("scroll", Funs["scrollFunForSingle" + NOW_TIME]);
			Funs["scrollFunForSingle" + NOW_TIME]();
		} else {
			$objs.each(function (index, element) {
				if (index % settings.rowItemNum == 0)
					Dictionary.push(index);
			});
			$(window).bind("scroll", Funs["scrollFunForRow" + NOW_TIME]);
			Funs["scrollFunForRow" + NOW_TIME]();
		}
	};
	$.fn.pxLazyload = function (options) {
		var settings = {
			threshold : 0,
			failurelimit : 0,
			event : "scroll",
			effect : "fadeIn",
			container : window,
			tag : "img",
			effectspeed : 500,
			isLoad : true,
			outTime : 0,
			srcProperty : "trueSrc"
		};
		if (options) {
			$.extend(settings, options);
		}
		if (settings.tag != "img" && $("#pxLazyloadTempImg").length <= 0)
			$("body").append('<img id="pxLazyloadTempImg" style="height:0;width:0;overflow:hidden;"/>');
		var elements = this;
		if ("scroll" == settings.event) {
			$(settings.container).bind("scroll", function (event) {
				var counter = 0;
				elements.each(function () {
					if ($.abovethetop(this, settings)) {}
					else {
						if (!$.belowthefold(this, settings)) {
							$(this).trigger("appear");
						} else {
							if (counter++ > settings.failurelimit) {
								return false;
							}
						}
					}
				});
				var temp = $.grep(elements, function (element) {
						return !element.loaded;
					});
				elements = $(temp);
			});
		}
		this.each(function () {
			var self = this;
			$(self).one("appear", function () {
				if (!this.loaded && $(self).attr(settings.srcProperty) != null) {
					if (settings.tag == "img") {
						if (settings.isLoad) {
							if (settings.outTime > 0)
								self.setTimeout = setTimeout(function () {
										$(self).hide().attr("src", $(self).attr(settings.srcProperty))[settings.effect](settings.effectspeed);
										self.loaded = true;
									}, settings.outTime);
							$("<img />").bind("load", function () {
								if (self.loaded)
									return;
								if (settings.outTime > 0)
									clearTimeout(self.setTimeout);
								$(self).hide().attr("src", $(self).attr(settings.srcProperty))[settings.effect](settings.effectspeed);
								self.loaded = true;
								if (/(^|\s)img\d+($|\s)/.test($(self).parent().attr('class'))) {
									$(self).parent().css('background-image', 'none');
								}
							}).attr("src", $(self).attr(settings.srcProperty)).error(function () {
								if (self.loaded)
									return;
								if (settings.outTime > 0)
									clearTimeout(self.setTimeout);
								$(self).hide().attr("src", $(self).attr(settings.srcProperty))[settings.effect](settings.effectspeed);
								self.loaded = true;
								if (/(^|\s)img\d+($|\s)/.test($(self).parent().attr('class'))) {
									$(self).parent().css('background-image', 'none');
								}
							});
						} else {
							$(self).hide().attr("src", $(self).attr(settings.srcProperty))[settings.effect](settings.effectspeed);
							if (/(^|\s)img\d+($|\s)/.test($(self).parent().attr('class'))) {
								$(self).parent().css('background-image', 'none');
							}
							self.loaded = true;
						}
					} else {
						if (settings.isLoad) {
							$("#pxLazyloadTempImg").attr("src", $(self).attr(settings.srcProperty));
							if (settings.outTime > 0)
								self.setTimeout = setTimeout(function () {
										$(self).hide().attr("src", $(self).attr(settings.srcProperty))[settings.effect](settings.effectspeed);
										self.loaded = true;
									}, settings.outTime);
							$("#pxLazyloadTempImg").one("load", function () {
								if (self.loaded)
									return;
								if (settings.outTime > 0)
									clearTimeout(self.setTimeout);
								$(self).css("background-image", 'url(' + $(self).attr(settings.srcProperty) + ")");
								self.loaded = true;
							}).css("", $(self).css("background-image", 'url(' + $(self).attr(settings.srcProperty) + ")")).error(function () {
								$(self).css("background-image", 'url(' + $(self).attr(settings.srcProperty) + ")");
								if (self.loaded)
									return;
								if (settings.outTime > 0)
									clearTimeout(self.setTimeout);
								self.loaded = true;
							});
						} else {
							$(self).css("background-image", 'url(' + $(self).attr(settings.srcProperty) + ")");
							self.loaded = true;
						}
					}
				} else
					self.loaded = true;
			});
			if ("scroll" != settings.event) {
				$(self).bind(settings.event, function (event) {
					if (!self.loaded) {
						$(self).trigger("appear");
					}
				});
			}
		});
		$(settings.container).trigger(settings.event);
		return this;
	};
	$.belowthefold = function (element, settings) {
		if (settings.container === undefined || settings.container === window) {
			var fold = $(window).height() + $(window).scrollTop();
		} else {
			var fold = $(settings.container).offset().top + $(settings.container).height();
		}
		return fold <= $(element).offset().top - settings.threshold;
	};
	$.rightoffold = function (element, settings) {
		if (settings.container === undefined || settings.container === window) {
			var fold = $(window).width() + $(window).scrollLeft();
		} else {
			var fold = $(settings.container).offset().left + $(settings.container).width();
		}
		return fold <= $(element).offset().left - settings.threshold;
	};
	$.abovethetop = function (element, settings) {
		if (settings.container === undefined || settings.container === window) {
			var fold = $(window).scrollTop();
		} else {
			var fold = $(settings.container).offset().top;
		}
		return fold >= $(element).offset().top + settings.threshold + $(element).height();
	};
	$.leftofbegin = function (element, settings) {
		if (settings.container === undefined || settings.container === window) {
			var fold = $(window).scrollLeft();
		} else {
			var fold = $(settings.container).offset().left;
		}
		return fold >= $(element).offset().left + settings.threshold + $(element).width();
	};
	$.extend($.expr[':'], {
		"below-the-fold" : "$.belowthefold(a, {threshold : 0, container: window})",
		"above-the-fold" : "!$.belowthefold(a, {threshold : 0, container: window})",
		"right-of-fold" : "$.rightoffold(a, {threshold : 0, container: window})",
		"left-of-fold" : "!$.rightoffold(a, {threshold : 0, container: window})"
	});
	$.fn.pxZoom = function (options) {
		var object = $(this);
		var op = {
			ImgObj : null,
			Children : 'li a',
			MaxProperty : 'href',
			MiddleProperty : 'rel',
			Height : 0,
			Width : 0,
			Event : 'mouseenter',
			BufferImg : '',
			Top : 0,
			Left : 10,
			Location : 'right',
			Border : '5px solid #fff',
			NowOjb : object.find('li a:eq(0)')
		};
		var options = $.extend(op, options);
		if (op.Height == 0)
			op.Height = op.ImgObj.height();
		if (op.Width == 0)
			op.Width = op.ImgObj.width();
		op.ImgObj.css({
			'z-index' : '9999',
			'position' : 'relative'
		});
		op.MinHeight = 140;
		op.MinWidth = 192;
		op.Index = 0;
		op.Index2 = 0;
		var point = new Object();
		point.pageX = 0;
		point.pageY = 0;
		var id = (new Date()).valueOf();
		op.MinMagnifierID = 'pxZoomMin' + id;
		op.MiddleMagnifierID = 'pxZoomMiddle' + id;
		op.MaxMagnifierID = 'pxZoomMax' + id;
		op.ImgObj.append('<div id="' + op.MiddleMagnifierID + '" style="background:url(http://img-cdn2.paixie.net/images/empty.gif);width:' + op.Width + 'px;height:' + op.Height + 'px;position:absolute;left:' + parseInt(op.ImgObj.css("padding-left")) + 'px;top:' + parseInt(op.ImgObj.css("padding-top")) + 'px;z-index:9997;"></div>');
		$('#' + op.MiddleMagnifierID).append('<div id="' + op.MinMagnifierID + '" oncontextmenu="return false" ondragstart="return false" onselectstart ="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" onmouseup="document.selection.empty()" style="' + (/MSIE 6.0/ig.test(navigator.appVersion) ? "" : "cursor:move;") + 'width:' + op.MinWidth + 'px;height:' + op.MinHeight + 'px;background:#fff;position:absolute;left:0;top:0;z-index:9998;line-height:' + op.MinHeight + 'px;text-align:center;color:#000;"></div>');
		var top = 0;
		if (op.Location != 'top' && op.Location != 'bottom') {
			top = op.Top;
		} else {
			if (op.Location == 'top')
				top = (-1) * (op.Top + op.Height);
			else
				top = op.Top + op.Height;
		}
		var left = 0;
		if (op.Location != 'left' && op.Location != 'right') {
			left = op.Left;
		} else {
			if (op.Location == 'right')
				left = op.Left + op.Width;
			else
				left = (-1) * (op.Left + op.Width);
		}
		$('#' + op.MiddleMagnifierID).append('<div id="' + op.MaxMagnifierID + '" style="border:' + op.Border + ';width:' + op.Width + 'px;height:' + op.Height + 'px;background:#fff;position:absolute;left:' + left + 'px;top:' + top + 'px;z-index:9999;"></div>');
		$('#' + op.MinMagnifierID).hide();
		$('#' + op.MaxMagnifierID).hide();
		this.each(function () {
			var MinHeightefzy = op.MinHeight / 2;
			var MinWidthefzy = op.MinWidth / 2;
			var tt = $('#' + op.MiddleMagnifierID).offset().top;
			var ll = $('#' + op.MiddleMagnifierID).offset().left;
			var MaxTop = 0;
			var MaxLeft = 0;
			$('#' + op.MiddleMagnifierID).bind('mouseenter', function () {
				if (op.NowOjb.attr(op.MaxProperty) == "")
					return false;
				$('#' + op.MinMagnifierID).stop(true, true).fadeTo(200, 0.7);
				var imgid = 'pxZoom' + (new Date()).valueOf();
				var index = ++op.Index2;
				$("#" + op.MinMagnifierID).html('正在加载大图...');
				var _Proportion = 0;
				$('<img id="' + imgid + '" style="display:none;"/>').appendTo($('body')).load(function () {
					MaxTop = 0;
					MaxLeft = 0;
					if (op.Height * $(this).width() / op.Width > $(this).height()) {
						if (op.Width > $(this).width()) {
							$("#" + op.MinMagnifierID).html('<span style="color:red;">很抱歉，没有找到大图...</span>').fadeTo(1000, 0);
							return;
						}
						MaxTop = (op.Height * $(this).width() / op.Width - $(this).height()) / 2;
						_Proportion = $(this).width() / op.Width;
					} else {
						if (op.Height > $(this).height()) {
							$("#" + op.MinMagnifierID).html('<span style="color:red;">很抱歉，没有找到大图...</span>').fadeTo(1000, 0);
							return;
						}
						MaxLeft = (op.Width * $(this).height() / op.Height - $(this).width()) / 2;
						_Proportion = $(this).height() / op.Height;
					}
					if (_Proportion != op.Proportion) {
						op.Proportion = _Proportion;
						op.MinHeight = op.Height / op.Proportion;
						op.MinWidth = op.Width / op.Proportion;
						MinHeightefzy = op.MinHeight / 2;
						MinWidthefzy = op.MinWidth / 2;
						$("#" + op.MinMagnifierID).css({
							"height" : op.MinHeight + "px",
							"width" : op.MinWidth + "px",
							"line-height" : op.MinHeight + "px"
						});
					}
					$("#" + op.MiddleMagnifierID).show();
					$('#' + imgid).remove();
					if (op.Index2 == index) {
						$("#" + op.MinMagnifierID).html('');
						$("#" + op.MaxMagnifierID).hide();
						var t = op.Height / 2 - point.pageY * op.Proportion;
						var l = op.Width / 2 - point.pageX * op.Proportion;
						$("#" + op.MaxMagnifierID).css({
							'background-repeat' : 'no-repeat',
							'background-image' : 'url(' + op.NowOjb.attr(op.MaxProperty) + ')',
							'background-position' : (l + MaxLeft) + 'px ' + (t + MaxTop) + 'px'
						});
						$("#" + op.MinMagnifierID).css({
							'top' : (point.pageY - MinHeightefzy) + "px",
							"left" : (point.pageX - MinWidthefzy) + "px"
						});
						$("#" + op.MaxMagnifierID).stop(true, true).fadeIn(500);
					}
				}).error(function () {
					$('#' + imgid).remove();
					if (op.Index2 == index) {
						$("#" + op.MinMagnifierID).html('<span style="color:red;">很抱歉，没有找到大图...</span>').fadeTo(1000, 0);
						return;
					}
				}).attr("src", op.NowOjb.attr(op.MaxProperty));
			});
			$('#' + op.MiddleMagnifierID).bind('mouseleave', function () {
				$('#' + op.MinMagnifierID).stop(true, true).fadeOut(300);
				$("#" + op.MaxMagnifierID).stop(true, true).fadeOut(300);
				++op.Index2;
			});
			$('#' + op.MaxMagnifierID).bind('mouseenter mousemove', function () {
				$('#' + op.MinMagnifierID).stop(true, true).fadeOut(300);
				$('#' + op.MaxMagnifierID).stop(true, true).fadeOut(300);
				++op.Index2;
			});
			$('#' + op.MiddleMagnifierID).mousemove(function (e) {
				point.pageX = e.pageX - ll;
				if (point.pageX < MinWidthefzy)
					point.pageX = MinWidthefzy;
				else if (point.pageX > op.Width - MinWidthefzy)
					point.pageX = op.Width - MinWidthefzy;
				point.pageY = e.pageY - tt;
				if (point.pageY < MinHeightefzy)
					point.pageY = MinHeightefzy;
				else if (point.pageY > op.Height - MinHeightefzy)
					point.pageY = op.Height - MinHeightefzy;
				var t = op.Height / 2 - point.pageY * op.Proportion;
				var l = op.Width / 2 - point.pageX * op.Proportion;
				$("#" + op.MaxMagnifierID).css({
					'background-position' : (l + MaxLeft) + 'px ' + (t + MaxTop) + 'px'
				});
				$("#" + op.MinMagnifierID).css({
					'top' : (point.pageY - MinHeightefzy) + "px",
					"left" : (point.pageX - MinWidthefzy) + "px"
				});
			});
			object.find(op.Children).bind(op.Event, function () {
				op.NowOjb = $(this);
				op.ImgObj.find('a').attr('href', $(this).attr(op.MaxProperty));
				var imgtemp = op.ImgObj.find('img');
				if (op.BufferImg != '') {
					var index = ++op.Index;
					imgtemp.attr('src', op.BufferImg);
					var imgid = 'pxZoom' + (new Date()).valueOf();
					$('body').append('<img id="' + imgid + '" style="display:none;" src="' + op.NowOjb.attr(op.MiddleProperty) + '"/>');
					$("#" + imgid).load(function () {
						$('#' + imgid).remove();
						if (op.Index == index) {
							imgtemp.hide();
							imgtemp.attr('src', op.NowOjb.attr(op.MiddleProperty));
							imgtemp.stop(true, true).fadeIn(500);
						}
					}).error(function () {
						$('#' + imgid).remove();
						if (op.Index == index) {
							imgtemp.hide();
							imgtemp.attr('src', op.NowOjb.attr(op.MiddleProperty));
							imgtemp.stop(true, true).fadeIn(500);
						}
					});
				} else
					imgtemp.attr('src', $(this).attr(op.MiddleProperty));
			});
			$(window).resize(function (e) {
				tt = $('#' + op.MiddleMagnifierID).offset().top;
				ll = $('#' + op.MiddleMagnifierID).offset().left;
			});
		});
	};
	$.fn.slideAds = function (options) {
		var object = $(this);
		var op = {
			slidePic : object.children('p'),
			slideHover : object.find('div span'),
			hoverKey : 0,
			picHeight : object.find('p img').outerHeight(),
			picWidth : object.find('p img').outerWidth(),
			slideLength : object.find('div span').length - 1,
			refreshTime : 5000,
			fadeTime : 600,
			slideType : 'left',
			outTime : 0,
			srcProperty : "trueSrc"
		};
		var isMove = false;
		var indexa = 0;
		var imgid = "px_slideAds" + (new Date()).valueOf();
		$("body").append('<img id="' + imgid + '" style="display:none"/>');
		　　　　var options　 = 　$.extend(op, 　options);
		　　　　this.each(function () {
			var self = this;
			$(self).unbind('mouseenter mouseleave');
			op.slideHover.unbind('mouseenter click');
			clearInterval($(self).data('slideAds-Interval'));
			$(self).find('a').clearQueue().stop(true, true);
			if (op.slideType == 'fade') {
				op.slidePic.find('a').eq(op.hoverKey).siblings().hide();
				op.slidePic.find('a').css({
					position : 'absolute',
					left : 0,
					top : 0
				})
			}
			function getRel(event) {
				if (event != undefined) {
					op.slideHover = event;
				} else {
					op.slideHover = object.find('div span[rel="' + op.hoverKey + '"]');
				}
				op.hoverKey = op.slideHover.attr('rel');
				return op.hoverKey;
			}
			function changePic(event) {
				try {
					if (event.attr("rel") == op.slideHover.attr("rel")) {
						clearInterval($(self).data('slideAds-Interval'));
						return;
					}
				} catch (e) {}
				if (event) {
					clearInterval($(self).data('slideAds-Interval'));
				}
				var key = getRel(event);
				var indexb = ++indexa;
				var top_value = '-' + (key * op.picHeight) + 'px';
				var left_value = '-' + (key * op.picWidth) + 'px';
				var objj = op.slidePic.find("img").eq(key);
				if (objj.attr(op.srcProperty) != null && op.slideType != 'fade') {
					$("body").append('<img id="' + imgid + key + '" style="display:none"/>');
					var src = objj.attr(op.srcProperty);
					objj.removeAttr(op.srcProperty);
					$("#" + imgid + key).one("load", function () {
						objj.attr("src", $(this).attr("src"));
					}).attr("src", src);
				}
				if (op.slideType == 'fade') {
					if (objj.attr(op.srcProperty) != null) {
						clearInterval($(self).data('slideAds-Interval'));
						op.slidePic.find('a:visible').fadeOut(op.fadeTime);
						var obj22 = op.slidePic.find('a').eq(key);
						obj22.fadeIn(op.fadeTime / 2);
						var src = objj.attr(op.srcProperty);
						obj22.css({
							"top" : (op.picHeight / 2 - objj.height() / 2) + "px",
							"left" : (op.picWidth / 2 - objj.width() / 2) + "px"
						});
						$("#" + imgid).attr("src", src);
						var imgload = function () {
							if (op.outTime > 0)
								if (obj22.isOutTime)
									return;
								else
									clearTimeout(obj22.setTimeout);
							obj22.fadeOut(op.fadeTime / 2, function () {
								objj.removeAttr(op.srcProperty);
								obj22.css({
									"top" : "0px",
									"left" : "0px"
								});
								objj.attr("src", src);
								if (indexb == indexa) {
									obj22.fadeIn(op.fadeTime);
									clearInterval($(self).data('slideAds-Interval'));
									if (!isMove)
										autoChange();
								}
							});
						}
						if (op.outTime > 0) {
							obj22.isOutTime = false;
							obj22.setTimeout = setTimeout(function () {
									imgload();
									obj22.isOutTime = true;
								}, op.outTime);
						}
						$("#" + imgid).one("load error", imgload);
					} else {
						clearInterval($(self).data('slideAds-Interval'));
						if (!isMove)
							autoChange();
						op.slidePic.find('a:visible').fadeOut(op.fadeTime, function () {
							if (indexb == indexa)
								op.slidePic.find('a').eq(key).fadeIn(op.fadeTime);
						});
					}
				} else if (op.slideType == 'left') {
					op.slidePic.css({
						width : op.picWidth * (op.slideLength + 1)
					});
					op.slidePic.animate({
						left : left_value
					}, {
						queue : false,
						duration : 500
					});
				} else if (op.slideType == "top") {
					op.slidePic.animate({
						top : top_value
					}, {
						queue : false,
						duration : 500
					});
				}
				op.slideHover.siblings().removeClass('hover');
				op.slideHover.addClass('hover');
				$(self).find('p a:eq(' + op.slideHover.index() + ')').addClass('hover').siblings().removeClass('hover');
			}
			function autoChange() {
				if (op.slideLength == 0)
					return false;
				clearInterval($(self).data('slideAds-Interval'));
				$(self).data('slideAds-Interval', setInterval(function () {
						op.hoverKey++;
						if (op.hoverKey > op.slideLength) {
							op.hoverKey = 0
						}
						changePic();
					}, op.refreshTime));
			}
			autoChange();
			op.slideHover.mouseenter(function () {
				changePic($(this));
			});
			$(self).mouseenter(function () {
				isMove = true;
				clearInterval($(self).data('slideAds-Interval'));
			}).mouseleave(function () {
				isMove = false;
				autoChange();
			});
			op.slideHover.click(function () {
				var href = op.slidePic.find('a:eq(' + op.hoverKey + ')').attr('href');
				if (href == null || href == "" || /^javascript/i.test(href))
					return;
				window.open(op.slidePic.find('a:eq(' + op.hoverKey + ')').attr('href'));
			});
			　　　　
		});
		　　
	};
	$.fn.infiniteCarousel = function () {
		function repeat(str, num) {
			return new Array(num + 1).join(str);
		}
		return this.each(function () {
			var $wrapper = $('> div', this).css('overflow', 'hidden'),
			$slider = $wrapper.find('> ul'),
			$items = $slider.find('> li'),
			$single = $items.filter(':first'),
			singleWidth = $single.outerWidth(),
			visible = Math.ceil($wrapper.innerWidth() / singleWidth),
			currentPage = 1,
			pages = Math.ceil($items.length / visible);
			if (($items.length % visible) != 0) {
				$slider.append(repeat('<li class="empty" />', visible - ($items.length % visible)));
				$items = $slider.find('> li');
			}
			$items.filter(':first').before($items.slice(-visible).clone().addClass('cloned'));
			$items.filter(':last').after($items.slice(0, visible).clone().addClass('cloned'));
			$items = $slider.find('> li');
			$wrapper.scrollLeft(singleWidth * visible);
			function gotoPage(page) {
				var dir = page < currentPage ? -1 : 1,
				n = Math.abs(currentPage - page),
				left = singleWidth * dir * visible * n;
				$wrapper.filter(':not(:animated)').animate({
					scrollLeft : '+=' + left
				}, 500, function () {
					if (page == 0) {
						$wrapper.scrollLeft(singleWidth * visible * pages);
						page = pages;
					} else if (page > pages) {
						$wrapper.scrollLeft(singleWidth * visible);
						page = 1;
					}
					currentPage = page;
				});
				return false;
			}
			$wrapper.after('<a class="arrow back">&lt;</a><a class="arrow forward">&gt;</a>');
			$('a.back', this).click(function () {
				return gotoPage(currentPage - 1);
			});
			$('a.forward', this).click(function () {
				return gotoPage(currentPage + 1);
			});
			$(this).bind('goto', function (event, page) {
				gotoPage(page);
			});
		});
	};
	$.fn.pxSizeTable = function (options) {
		var _this = this;
		var settings = {
			brand : "",
			part : 5,
			main : "",
			sex : "",
			cid : null,
			attrs : {}

		};
		if (options) {
			$.extend(settings, options);
		}
		$.ajax({
			type : "get",
			cache : true,
			url : "http://img-cdn2.paixie.net/brandsize/" + settings.brand + "/" + settings.brand + ".2.0.json",
			dataType : "script",
			success : function () {
				try {
					if (!shoe_size_table_json[settings.part])
						return false;
					if (!shoe_size_table_json[settings.part][settings.main]) {
						if (!/^[12346]$/.test(settings.main))
							return false;
						for (var __i = 0; __i < 2; __i++) {
							if (__i == 1) {
								if (settings.part != 5) {
									settings.part = 5;
								} else {
									continue;
								}
							}
							if (settings.sex == '中性') {
								if (shoe_size_table_json[settings.part]["4"]) {
									shoe_size_table_json = shoe_size_table_json[settings.part]["4"];
									__i = 4;
								} else {
									var array = null;
									if (shoe_size_table_json[settings.part]['2']) {
										array = shoe_size_table_json[settings.part]['2'];
									}
									if (shoe_size_table_json[settings.part]['3']) {
										if (!shoe_size_table_json) {
											array = shoe_size_table_json[settings.part]['3'];
										} else {
											array = array.concat(shoe_size_table_json[settings.part]['3']);
										}
									}
									if (!array) {
										continue;
									}
									__i = 4;
									shoe_size_table_json = array;
									array = null;
								}
							} else {
								if (settings.sex == "男") {
									if (!shoe_size_table_json[settings.part]["2"]) {
										continue;
									} else {
										shoe_size_table_json = shoe_size_table_json[settings.part]["2"];
										__i = 4;
									}
								} else if (settings.sex == "女") {
									if (!shoe_size_table_json[settings.part]["3"]) {
										continue;
									} else {
										shoe_size_table_json = shoe_size_table_json[settings.part]["3"];
										__i = 4;
									}
								}
							}
						}
						if (__i == 2) {
							return false;
						}
					} else {
						shoe_size_table_json = shoe_size_table_json[settings.part][settings.main];
					}
					if (settings.cid) {
						var _data = [];
						for (var i = 0; i < shoe_size_table_json.length; ) {
							if (!shoe_size_table_json[i].Cid) {
								shoe_size_table_json[i].Cid = "0";
							}
							if (shoe_size_table_json[i].Cid == "0") {
								_data.push(shoe_size_table_json[i]);
							}
							if (shoe_size_table_json[i].Cid != settings.cid) {
								shoe_size_table_json.splice(i, 1);
							} else {
								i++;
							}
						}
						if (!shoe_size_table_json.length) {
							shoe_size_table_json = _data;
						}
						_data = null;
						i = null;
					}
					if (shoe_size_table_json.length) {
						var _table = shoe_size_table_json[0];
						var array = [];
						if (settings.sex == "男" || settings.sex == "女") {
							$.each(shoe_size_table_json, function (ffindex, table) {
								if (table.IsShow != "0" && table.Title.indexOf(settings.sex + "童") != 0) {
									if (table.Title.indexOf(settings.sex) == 0) {
										array.push(table);
									}
								}
							});
						} else {
							$.each(shoe_size_table_json, function (ffindex, table) {
								if (table.IsShow) {
									if (table.Title.indexOf(settings.sex) == 0) {
										array.push(table);
									}
								}
							});
						}
						if (array.length) {
							shoe_size_table_json = array;
							array = null;
						}
					}
					var array = [];
					$.each(shoe_size_table_json, function (index, table) {
						if (table.IsShow != "0") {
							var isok = true;
							if (table.attrs) {
								table.attrs = table.attrs.split('$');
								$.each(table.attrs, function (index, attr) {
									attr = attr.split(':');
									if (attr.length == 2) {
										if (!settings.attrs[attr[0]]) {
											isok = false;
											return false;
										} else {
											if (attr[1].indexOf('<') == 0) {
												if (parseFloat(settings.attrs[attr[0]]) >= parseFloat(attr[1].replace('<', ''))) {
													isok = false;
													return false;
												}
											} else if (attr[1].indexOf('>') == 0) {
												if (parseFloat(settings.attrs[attr[0]]) <= parseFloat(attr[1].replace('>', ''))) {
													isok = false;
													return false;
												}
											} else if (attr[1].indexOf('-') >= 0) {
												attr[1] = split('-');
												if (parseFloat(settings.attrs[attr[0]]) <= parseFloat(attr[1][0]) || parseFloat(settings.attrs[attr[0]]) >= parseFloat(attr[1][1])) {
													isok = false;
													return false;
												}
											} else {
												attr[1] = attr[1].split('%');
												var _isok = false;
												$.each(attr[1], function (index, _attr) {
													if (settings.attrs[attr[0]] == _attr) {
														_isok = true;
													}
												});
												if (!_isok) {
													isok = false;
													return false;
												}
											}
										}
									}
								});
							}
							if (isok) {
								array.push(table);
							}
						}
					});
					shoe_size_table_json = [];
					if (array.length) {
						array.sort(function (a, b) {
							return b.attrs.length - a.attrs.length;
						});
						shoe_size_table_json.push(array[0]);
						array = null;
					}
					var _html = "";
					var obj = [];
					$.each(shoe_size_table_json, function (ffindex, table) {
						obj[ffindex] = [];
						if (table.IsShow != "0") {
							var colspannum = 0;
							_html += '<table class="size-table' + ((ffindex == shoe_size_table_json.length - 1) ? ' size-table-last' : '') + '" border="0" cellspacing="0" cellpadding="0"> <tr><th colspan="colspannum">' + table.Title + '</th> </tr>';
							$.each(table.SizeList, function (findex, standard) {
								colspannum = 0;
								_html += '<tr><td colspan="1" class="fist">' + standard.Title + '</td>';
								var trueindex = 0;
								$.each(standard.Sizes, function (index, size) {
									colspannum += parseInt(size.Colspan);
									_html += '<td colspan="' + size.Colspan + '">' + size.Size + '</td>';
									if (size.Colspan != "1")
										obj[ffindex][trueindex] = {
											Row : findex,
											Colspan : parseInt(size.Colspan)
										};
									trueindex += parseInt(size.Colspan);
								});
								_html = _html.replace("colspannum", colspannum + 1) + '</tr>';
							});
							_html += '</table>';
						}
					});
					if (_html != "") {
						try {
							$("#js_sizemore").show();
							if ($("#js_sizemoret").length > 0)
								$("#js_sizemoret").show()
						} catch (e) {}

					}
					_this.each(function () {
						var self = this;
						$(self).find("p.size-table-loading").remove();
						$(self).find("img.size-table-img-size").remove();
						$(self).append(_html);
						$(self).find("table").each(function (ffindex, element) {
							$(element).find("tr:gt(0)").each(function (findex, element) {
								var trueindex = 0;
								var trueindex2 = 0;
								$(element).find("td:gt(0)").each(function (index, element) {
									if (/size-table-col/.test($(element).attr("class"))) {
										trueindex2 += parseInt($(element).attr("colspan"));
										return;
									}
									if (obj[ffindex][trueindex2] == null || findex == obj[ffindex][trueindex2].Row) {
										$(element).addClass("size-table-col" + trueindex).attr("col", trueindex);
									} else {
										var _element = $(element);
										for (var i = 0; i < obj[ffindex][trueindex2].Colspan; i++) {
											_element.addClass("size-table-col" + trueindex).attr("col", trueindex);
											_element = _element.next();
										}
									}
									trueindex2 += parseInt($(element).attr("colspan"));
									trueindex++;
								});
							});
						});
						$(self).find("table td[class!='fist']").hover(function () {
							$(this).parent().parent().find("td.size-table-col" + $(this).attr("col")).addClass("hover");
						}, function () {
							$(this).parent().parent().find("td.size-table-col" + $(this).attr("col")).removeClass("hover");
						});
						$(this).data("getSizeData", function (size) {
							var cols = -1;
							var table = 0;
							var colspan = 1;
							var sdata = null;
							for (; table < shoe_size_table_json.length; table++) {
								for (var row = 0; row < shoe_size_table_json[table].SizeList.length; row++) {
									for (var col = 0; col < shoe_size_table_json[table].SizeList[row].Sizes.length; col++) {
										if (size[shoe_size_table_json[table].SizeList[row].Sizes[col].Size]) {
											cols = 0;
											colspan = shoe_size_table_json[table].SizeList[row].Sizes[col].Colspan;
											for (; col >= 0; col--) {
												cols += parseInt(shoe_size_table_json[table].SizeList[row].Sizes[col].Colspan);
											}
											break;
										}
									}
									if (cols != -1) {
										break;
									}
								}
								if (cols != -1) {
									break;
								}
							}
							if (cols != -1) {
								sdata = [];
								var scols = cols - colspan + 1;
								for (var row = 0; row < shoe_size_table_json[table].SizeList.length; row++) {
									var data = {
										Title : shoe_size_table_json[table].SizeList[row].Title,
										Sizes : []
									};
									colspan = 0;
									for (var col = 0; col < shoe_size_table_json[table].SizeList[row].Sizes.length; col++) {
										colspan += parseInt(shoe_size_table_json[table].SizeList[row].Sizes[col].Colspan);
										if (colspan >= scols) {
											data.Sizes.push(shoe_size_table_json[table].SizeList[row].Sizes[col].Size);
											if (colspan >= cols) {
												break;
											}
										}
									}
									sdata.push(data);
									data = null;
								}
								scols = null;
							}
							colspan = null;
							cols = null;
							table = null;
							return sdata;
						});
					});
				} catch (e) {}

			}
		});
		return _this;
	};
	$.documentMask = function (options) {
		var op = $.extend({
				opacity : 0.6,
				z : 150,
				bgcolor : '#000',
				time : 500,
				id : "jquery_addmask"
			}, options);
		$("#" + op.id).remove();
		$('<div id="' + op.id + '" class="jquery_addmask">&nbsp;</div>').appendTo(document.body).css({
			position : 'absolute',
			top : '0px',
			left : '0px',
			'z-index' : op.z,
			width : $(window).width(),
			height : $(document).height(),
			'background-color' : op.bgcolor,
			opacity : 0
		}).fadeIn('slow', function () {
			$(this).fadeTo(op.time, op.opacity);
		}).click(function () {});
		return this;
	};
	$.computerTimeError = function (complete, systemtime) {
		function run() {
			if ((new Date(systemtime) - new Date()) / 86400000 > 180) {
				if (complete != null) {
					complete(false);
				}
				var $computer_time_error = $('<div id="js-computer-time-error"><style>#js-computer-time-error{z-index:999999;position:absolute;top:0;left:0;font-size:12px;display:none;}#js-computer-time-error .computer-time-bg{background:#848484;filter:alpha(opacity=50);-moz-opacity:0.5;opacity:0.5;}#js-computer-time-error .computer-time-shadow{position:absolute;width:310px;height:145px;background:#848484;filter:alpha(opacity=70);-moz-opacity:0.7;opacity:0.7;}#js-computer-time-error .computer-time-content{width:292px;height:127px;background:#fff;border:1px solid #AAAAAA;position:absolute;margin:8px;}#js-computer-time-error .computer-time-content div{padding:15px;}#js-computer-time-error .computer-time-content div p{margin:0;padding:0;line-height:22px;color:#2E2E2E;}#js-computer-time-error .computer-time-content div p span{color:#CC5600;}#js-computer-time-error .computer-time-content div a{background:url(http://ued.paixie.net/images/public/computer-time-error-botton.png);display:block;width:60px;height:23px;margin:auto;background-color:#E82C22;text-align:center;line-height:23px;color:#fff;margin-top:10px;cursor:pointer;}#js-computer-time-error .computer-time-content div a:hover{background-position:0 -23px;}</style><div class="computer-time-bg"></div><div class="computer-time-shadow"></div><div class="computer-time-content"><div><p>亲爱的用户，您电脑的显示时间太久远了，可能会影响您的在线支付哦！<span>可在桌面右下角双击时间进行修改。</span></p><a>确 定</a></div></div></div>').appendTo($("body"));
				$computer_time_error.css({
					"opacity" : 0,
					"display" : "block"
				}).animate({
					opacity : 1
				}, {
					duration : 300
				});
				$computer_time_error.children("div.computer-time-bg").css({
					top : 0,
					right : 0,
					width : $(window).width(),
					height : $(document).height()
				});
				$computer_time_error.children("div.computer-time-shadow,div.computer-time-content").css({
					top : $(window).scrollTop() + $(window).height() / 2 - 72,
					left : $(window).width() / 2 - 155
				});
				$computer_time_error.find("a").one("click", function () {
					$computer_time_error.animate({
						opacity : 0
					}, {
						duration : 300,
						complete : function () {
							$(this).remove();
							$computer_time_error = null;
						}
					});
				});
			} else {
				if (complete != null) {
					complete(true);
				}
			}
		};
		if (systemtime != null && systemtime != "") {
			run();
		}
	};
	$.request = function (paras) {
		return request(paras);
	};
})(jQuery);
jQuery.cookie = function (name, value, options) {
	if (typeof value != 'undefined') {
		options = options || {};
		if (value === null) {
			value = '';
			options = $.extend({}, options);
			options.expires = -1;
		}
		var expires = '';
		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			var date;
			if (typeof options.expires == 'number') {
				date = new Date();
				date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
			} else {
				date = options.expires;
			}
			expires = '; expires=' + date.toUTCString();
		}
		var path = options.path ? '; path=' + (options.path) : '';
		var domain = options.domain ? '; domain=' + (options.domain) : '';
		var secure = options.secure ? '; secure' : '';
		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	} else {
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i]);
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					try {
						cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					} catch (e) {}
					break;
				}
			}
		}
		return cookieValue;
	}
};
String.prototype.Trim = function () {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};
function request(paras) {
	var url = location.href;
	var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
	var paraObj = {}
	for (i = 0; j = paraString[i]; i++) {
		paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
	}
	var returnValue = paraObj[paras.toLowerCase()];
	if (typeof(returnValue) == "undefined") {
		return "";
	} else {
		return returnValue;
	}
};
var GoodList = function (op) {
	var _this = this;
	var trim = function (str) {
		if (str == null)
			str = "";
		return (str + "").replace(/(^[\\s]*)|([\\s]*$)/g, "");
	}
	var _op = {
		sortTemplate : "",
		sortpageTemplate : "",
		goodTemplate : "",
		pageTemplate : "",
		hrefTemplate : "",
		initData : {
			action : "shoeslist",
			main : "",
			style : "",
			brand : "",
			color : "",
			size : "",
			price : "",
			keyword : "",
			asc : "",
			apscount : "",
			pagesize : 48,
			page : 1,
			pagecount : 0,
			pagelenght : 10
		},
		complete : null,
		begin : null
	};
	$.each(op, function (key, value) {
		if (key == "initData") {
			$.each(value, function (_key, _value) {
				if (_value != null)
					_op[key][_key] = _value;
			});
		} else {
			_op[key] = value;
		}
	});
	var price = _op.initData.price;
	var asc = _op.initData.asc;
	var keyword = _op.initData.keyword;
	var main = _op.initData.main;
	_op.initData.pagecount = 0;
	if (/^\d+$/.test(_op.initData.apscount)) {
		_op.initData.apscount = parseInt(_op.initData.apscount);
		_op.initData.pagecount = Math.ceil(_op.initData.apscount / _op.initData.pagesize);
		if (!_op.initData.pagecount) {
			_op.initData.pagecount = 1;
		}
	} else {
		_op.initData.apscount = 0;
	}
	_op.sortTemplate = template.compile(_op.sortTemplate);
	_op.sortpageTemplate = template.compile(_op.sortpageTemplate);
	_op.goodTemplate = template.compile(_op.goodTemplate);
	_op.pageTemplate = template.compile(_op.pageTemplate);
	_op.hrefTemplate = template.compile(_op.hrefTemplate);
	this.Next = function () {
		if (_op.initData.pagecount) {
			if (_op.initData.page > _op.initData.pagecount)
				return false;
		}
		ajaxGetData({
			page : _op.initData.page + 1
		});
		return false;
	};
	this.Prev = function () {
		if (_op.initData.page > 1) {
			ajaxGetData({
				page : _op.initData.page - 1
			});
			return false;
		}
		return false;
	};
	this.SetData = function (_data) {
		$.each(_data, function (key, value) {
			if (value != null) {
				_op.initData[key] = value;
			}
		});
		price = _op.initData.price;
		asc = _op.initData.asc;
		keyword = _op.initData.keyword;
		main = _op.initData.main;
		ajaxGetData({});
		return false;
	};
	this.SetKeyWord = function (_keyword) {
		_keyword = trim(_keyword);
		if (_keyword == _op.initData.keyword)
			return false;
		keyword = _keyword;
		ajaxGetData({
			page : 1,
			pagecount : 0,
			apscount : "",
			keyword : _keyword
		});
		return false;
	};
	this.SetMain = function (_main) {
		_main = trim(_main);
		if (_main == _op.initData.main)
			return false;
		main = _main;
		ajaxGetData({
			page : 1,
			pagecount : 0,
			apscount : "",
			main : _main
		});
		return false;
	};
	this.SetPrice = function (_minPrice, _maxPrice) {
		_minPrice = trim(_minPrice);
		_maxPrice = trim(_maxPrice);
		var _price = "";
		if (!/^\d+(\.\d+)?$/.test(_minPrice)) {
			_minPrice = "";
		}
		if (!/^\d+(\.\d+)?$/.test(_maxPrice)) {
			_maxPrice = "";
		}
		if (_minPrice != "" && _maxPrice != "") {
			if (parseFloat(_minPrice) > parseFloat(_maxPrice)) {
				_price = _maxPrice + "," + _minPrice;
			} else {
				_price = _minPrice + "," + _maxPrice;
			}
		} else {
			_price = _minPrice + "," + _maxPrice;
		}
		if (_price == ",") {
			_price = "";
		}
		if (_price == _op.initData.price)
			return false;
		ajaxGetData({
			page : 1,
			pagecount : 0,
			apscount : "",
			price : _price
		});
		return false;
	};
	this.SetAsc = function (_asc) {
		if (_op.initData.asc == _asc)
			return false;
		ajaxGetData({
			page : 1,
			apscount : "",
			asc : _asc
		});
		return false;
	};
	this.SetAscCount = function (_asc) {
		if (_op.initData.asc == _asc)
			return false;
		ajaxGetData({
			page : 1,
			apscount : "",
			asc : _asc
		});
		return false;
	};
	this.Go = function (_page) {
		if (_page == null) {
			ajaxGetData({
				page : 1
			});
		} else {
			_page = trim(_page);
			if (!/^\d+$/.test(_page))
				return false;
			_page = parseInt(_page);
			if (_page == 0)
				_page = 1;
			if (_op.initData.pagecount) {
				if (_page > _op.initData.pagecount)
					_page = _op.initData.pagecount;
			}
			if (_page == _op.initData.page)
				return false;
			ajaxGetData({
				page : _page
			});
			return false;
		}
	};
	function getHref(data) {
		$.each(_op.initData, function (key, value) {
			if (data[key] == null)
				data[key] = value;
		});
		return _op.hrefTemplate({
			data : data
		});
	};
	function getPageList() {
		var end = 0;
		var j = 0;
		if (_op.initData.page <= (Math.ceil(parseFloat((_op.initData.pagelenght - 1) / 2)))) {
			j = 1;
			end = ((_op.initData.pagelenght < _op.initData.pagecount) ? _op.initData.pagelenght : _op.initData.pagecount);
		} else if ((_op.initData.pagecount - _op.initData.page) < (Math.ceil(parseInt(_op.initData.pagelenght / 2)))) {
			j = ((_op.initData.pagecount < _op.initData.pagelenght) ? 1 : (_op.initData.pagecount - _op.initData.pagelenght + 1));
			end = _op.initData.pagecount;
		} else {
			j = _op.initData.page - (Math.ceil(parseInt((_op.initData.pagelenght - 1) / 2)));
			end = _op.initData.page + (Math.ceil(parseInt(_op.initData.pagelenght / 2)));
		}
		var midPageArr = [];
		if (j > 1) {
			midPageArr.push({
				page : 1,
				href : getHref({
					page : 1
				})
			});
			if (j > 2) {
				midPageArr.push({
					page : "..."
				});
			}
		}
		for (var i = j; i <= end; i++) {
			midPageArr.push({
				page : i,
				href : getHref({
					page : i
				})
			});
		}
		if (end + 1 < _op.initData.pagecount) {
			midPageArr.push({
				page : "..."
			});
		}
		return midPageArr;
	};
	var ajaxGetDataIndex = 0;
	function ajaxGetData(data) {
		if (_op.begin != null) {
			_op.begin();
		}
		$.each(_op.initData, function (key, value) {
			if (data[key] == null)
				data[key] = value;
		});
		price = data.price;
		asc = data.asc;
		keyword = data.keyword;
		main = data.main;
		var _ajaxGetDataIndex = ++ajaxGetDataIndex;
		$.ajax({
			url : DOMIN.MAIN + "/goods/goods_ajax?jsoncallback=?",
			data : data,
			type : "GET",
			dataType : "json",
			success : function (_data) {
				if (_ajaxGetDataIndex != ajaxGetDataIndex)
					return false;
				_op.initData.apscount = _data.Count;
				_op.initData.page = _data.Page;
				_op.initData.pagecount = _data.Page;
				_op.initData.price = price;
				_op.initData.keyword = keyword;
				_op.initData.main = main;
				_op.initData.asc = asc;
				var _price = price.split(",");
				if (_price.length == 1) {
					_op.initData.minprice = "";
					_op.initData.maxprice = "";
				} else {
					_op.initData.minprice = _price[0];
					_op.initData.maxprice = _price[1];
				}
				_op.initData.apscount = parseInt(_op.initData.apscount);
				_op.initData.pagecount = Math.ceil(_op.initData.apscount / _op.initData.pagesize);
				_op.initData.PageList = getPageList();
				if (!_op.initData.pagecount)
					_op.initData.pagecount = 1;
				_op.initData.nowtime = Date.parse(new Date()) / 1000;
				_op.initData.Links = {
					"asc-default" : getHref({
						asc : "de",
						page : 1
					}),
					"asc-pa" : getHref({
						asc : "pa",
						page : 1
					}),
					"asc-id" : getHref({
						asc : "id",
						page : 1
					}),
					"asc-sd" : getHref({
						asc : "sd",
						page : 1
					}),
					"asc-re" : getHref({
						asc : "re",
						page : 1
					}),
					"page-next" : getHref({
						page : _op.initData.page + 1
					}),
					"page-prev" : getHref({
						page : _op.initData.page - 1
					})
				};
				var data = {
					IsSuccess : true,
					Message : "",
					Html : {
						sortHtml : _op.sortTemplate({
							data : _op.initData
						}),
						sortpageHtml : _op.sortpageTemplate({
							data : _op.initData
						}),
						goodHtml : "",
						pageHtml : _op.pageTemplate({
							data : _op.initData
						})
					},
					Data : _op.initData,
					Url : getHref({})
				};
				$.each(_data.ShoeList, function (index, value) {
					value.nowtime = _op.initData.nowtime;
					data.Html.goodHtml += _op.goodTemplate({
						data : value
					});
					delete value.nowtime;
				});
				if (_op.complete != null) {
					_op.complete(data);
				}
				delete _op.initData.PageList;
				delete _op.initData.nowtime;
				delete _op.initData.Links;
				delete _op.initData.minprice;
				delete _op.initData.maxprice;
			},
			error : function () {
				if (_ajaxGetDataIndex != ajaxGetDataIndex)
					return false;
			}
		});
	};
};
(function ($) {
	if (!document.defaultView || !document.defaultView.getComputedStyle) {
		var oldCurCSS = $.curCSS;
		$.curCSS = function (elem, name, force) {
			if (name === 'background-position') {
				name = 'backgroundPosition';
			}
			if (name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[name]) {
				return oldCurCSS.apply(this, arguments);
			}
			var style = elem.style;
			if (!force && style && style[name]) {
				return style[name];
			}
			return oldCurCSS(elem, 'backgroundPositionX', force) + ' ' + oldCurCSS(elem, 'backgroundPositionY', force);
		};
	}
	var oldAnim = $.fn.animate;
	$.fn.animate = function (prop) {
		if ('background-position' in prop) {
			prop.backgroundPosition = prop['background-position'];
			delete prop['background-position'];
		}
		if ('backgroundPosition' in prop) {
			prop.backgroundPosition = '(' + prop.backgroundPosition;
		}
		return oldAnim.apply(this, arguments);
	};
	function toArray(strg) {
		strg = strg.replace(/left|top/g, '0px');
		strg = strg.replace(/right|bottom/g, '100%');
		strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g, "$1px$2");
		var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		return [parseFloat(res[1], 10), res[2], parseFloat(res[3], 10), res[4]];
	}
	$.fx.step.backgroundPosition = function (fx) {
		if (!fx.bgPosReady) {
			var start = $.curCSS(fx.elem, 'backgroundPosition');
			if (!start) {
				start = '0px 0px';
			}
			start = toArray(start);
			fx.start = [start[0], start[2]];
			var end = toArray(fx.end);
			fx.end = [end[0], end[2]];
			fx.unit = [end[1], end[3]];
			fx.bgPosReady = true;
		}
		var nowPosX = [];
		nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
		nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
		fx.elem.style.backgroundPosition = nowPosX[0] + ' ' + nowPosX[1];
	};
})(jQuery);
(function (a) {
	function d(b) {
		var c = b || window.event,
		d = [].slice.call(arguments, 1),
		e = 0,
		f = !0,
		g = 0,
		h = 0;
		return b = a.event.fix(c),
		b.type = "mousewheel",
		c.wheelDelta && (e = c.wheelDelta / 120),
		c.detail && (e = -c.detail / 3),
		h = e,
		c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e),
		c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120),
		c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120),
		d.unshift(b, e, g, h),
		(a.event.dispatch || a.event.handle).apply(this, d)
	}
	var b = ["DOMMouseScroll", "mousewheel"];
	if (a.event.fixHooks)
		for (var c = b.length; c; )
			a.event.fixHooks[b[--c]] = a.event.mouseHooks;
	a.event.special.mousewheel = {
		setup : function () {
			if (this.addEventListener)
				for (var a = b.length; a; )
					this.addEventListener(b[--a], d, !1);
			else
				this.onmousewheel = d
		},
		teardown : function () {
			if (this.removeEventListener)
				for (var a = b.length; a; )
					this.removeEventListener(b[--a], d, !1);
			else
				this.onmousewheel = null
		}
	},
	a.fn.extend({
		mousewheel : function (a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel : function (a) {
			return this.unbind("mousewheel", a)
		}
	})
})(jQuery); ; ; ;
var PXVerify = {
	_trim : function (str) {
		return $.trim(str);
	},
	_callback : function (callback, isok, error, data) {
		if (callback != null) {
			callback(isok, error, data);
		}
		return error;
	},
	Email : function (email, exist, callback) {
		var _this = this;
		email = _this._trim(email);
		if (email == '') {
			return '邮箱地址不能为空！';
		};
		if (!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(email)) {
			return '邮箱地址格式错误！';
		};
		if (exist) {
			$.ajax({
				url : DOMIN.MAIN + '/register?jsoncallback=?',
				type : 'GET',
				data : {
					act : 'verify_email',
					phone : email
				},
				dataType : 'json',
				error : function (data) {
					return _this._callback(callback, false, '连接服务器失败，请稍后再试！');
				},
				success : function (data) {
					return _this._callback(callback, data.IsSuccess, data.Message, data);
				}
			});
		}
		return null;
	},
	SendEmailCode : function (email, exist, callback, url) {
		var _this = this;
		email = _this._trim(email);
		if (email == '') {
			return '邮箱地址不能为空！';
		};
		if (!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(email)) {
			return '邮箱地址格式错误！';
		};
		url = url || DOMIN.MAIN + '/register?jsoncallback=?';
		$.ajax({
			url : url,
			type : 'GET',
			data : {
				act : 'get_email_code',
				email : email,
				forgot : ((exist == true) ? 1 : 0)
			},
			dataType : 'json',
			error : function () {
				return _this._callback(callback, false, '连接服务器失败，请稍后再试！');
			},
			success : function (data) {
				return _this._callback(callback, data.IsSuccess, data.Message, data);
			}
		});
		return null;
	},
	EmailCode : function (email, code, ajax, callback) {
		var _this = this;
		email = _this._trim(email);
		code = _this._trim(code);
		if (email == '') {
			return '邮箱地址不能为空！';
		};
		if (!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(email)) {
			return '邮箱地址格式错误！';
		};
		if (code == '') {
			return '验证码不能为空！';
		};
		if (!/^[0-9a-zA-Z]{6}$/.test(code)) {
			return '验证码格式错误！';
		};
		if (ajax) {
			$.ajax({
				url : DOMIN.MAIN + '/register?jsoncallback=?',
				type : 'GET',
				data : {
					act : 'verify_email_code',
					email : email,
					code : code
				},
				dataType : 'json',
				error : function () {
					return _this._callback(callback, false, '连接服务器失败，请稍后再试！');
				},
				success : function (data) {
					return _this._callback(callback, data.IsSuccess, data.Message, data);
				}
			});
		}
		return null;
	},
	BindEmail : function (email, code, callback) {
		var _this = this;
		email = _this._trim(email);
		code = _this._trim(code);
		if (email == '') {
			return '邮箱地址不能为空！';
		};
		if (!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(email)) {
			return '邮箱地址格式错误！';
		};
		if (code == '') {
			return '验证码不能为空！';
		};
		if (!/^[0-9a-zA-Z]{6}$/.test(code)) {
			return '验证码格式错误！';
		};
		$.ajax({
			url : DOMIN.MAIN + '/register?jsoncallback=?',
			type : 'GET',
			data : {
				act : 'bind_email',
				email : email,
				code : code
			},
			dataType : 'json',
			error : function (data) {
				return _this._callback(callback, false, '连接服务器失败，请稍后再试！');
			},
			success : function (data) {
				return _this._callback(callback, data.IsSuccess, data.Message, data);
			}
		});
		return null;
	},
	Phone : function (phone, exist, callback) {
		var _this = this;
		phone = _this._trim(phone);
		if (phone == '') {
			return '手机号码不能为空！';
		};
		if (!/^\d{10,11}$/.test(phone)) {
			return '手机号码格式错误！';
		};
		if (exist) {
			$.ajax({
				url : DOMIN.MAIN + '/register?jsoncallback=?',
				type : 'GET',
				data : {
					act : 'verify_phone',
					phone : phone
				},
				dataType : 'json',
				error : function (data) {
					return _this._callback(callback, false, '连接服务器失败，请稍后再试！');
				},
				success : function (data) {
					return _this._callback(callback, data.IsSuccess, data.Message, data);
				}
			});
		}
		return null;
	},
	ShowImageVerify : function (phone, forgot, callback) {
		var box = $('<div class="send-phone-verify"><h3>请输入验证码<a></a></h3><p><span>验证码：</span><input type="text"/><img title="点击刷新" src="' + DOMIN.MAIN + '/register/vercode""></p><div><span class="err"></span><a></a></div></div>').appendTo('body').css({
				"z-index" : "5001",
				top : $(window).scrollTop() + $(window).height() / 2 - 80
			});
		$.documentMask({
			z : 5000,
			id : "js-send-phone-verify-bg"
		});
		var input = box.find("input");
		var error = box.find("span.err");
		box.find("img").click(function () {
			$(this).attr('src', $(this).attr('src').split('?')[0] + "?" + (new Date()).valueOf());
		});
		input.focus(function () {
			error.html('');
		});
		var ajaxindex = 0;
		box.find("h3 a").click(function () {
			$("#js-send-phone-verify-bg").fadeOut(function () {
				$(this).remove();
			});
			box.remove();
			callback({
				IsSuccess : false,
				Message : "验证码发送失败，请稍后再试！"
			});
		});
		box.find("div a").click(function () {
			var code = input.val($.trim(input.val())).val();
			if (code == "") {
				error.html('验证码不能为空！');
				return;
			}
			var _ajaxindex = ++ajaxindex;
			$.ajax({
				url : DOMIN.MAIN + "/register?jsoncallback=?",
				dataType : "json",
				data : {
					code : code,
					act : "verifyphoneimg",
					phone : phone,
					forgot : forgot
				},
				error : function () {
					error.html('链接服务器失败，请稍后再试！');
				},
				success : function (data) {
					if (data.IsSuccess) {
						$("#js-send-phone-verify-bg").fadeOut(function () {
							$(this).remove();
						});
						box.remove();
						callback({
							IsSuccess : true,
							Message : ""
						});
					} else {
						error.html(data.Message);
					}
				}
			});
		});
	},
	SendPhoneCode : function (phone, exist, callback, url) {
		var _this = this;
		phone = _this._trim(phone);
		if (phone == '') {
			return '手机号码不能为空！';
		};
		if (!/^\d{10,11}$/.test(phone)) {
			return '手机号码格式错误！';
		};
		$.ajax({
			url : DOMIN.MAIN + '/register?jsoncallback=?',
			data : {
				act : 'get_rand_code'
			},
			dataType : "json",
			success : function (data) {
				url = url || DOMIN.MAIN + '/register?jsoncallback=?';
				$.ajax({
					url : url,
					type : 'GET',
					data : {
						rand : data.code,
						act : 'get_code',
						phone : phone,
						forgot : ((exist == true) ? 1 : 0)
					},
					dataType : 'json',
					error : function (data) {
						return _this._callback(callback, false, '连接服务器失败，请稍后再试！');
					},
					success : function (data) {
						if (!data.IsSuccess && data.Message == "显示图灵验证") {
							PXVerify.ShowImageVerify(phone, ((exist == true) ? 1 : 0), function (data) {
								return _this._callback(callback, data.IsSuccess, data.Message, data);
							});
						} else {
							return _this._callback(callback, data.IsSuccess, data.Message, data);
						}
					}
				});
			},
			error : function () {
				return _this._callback(callback, false, '连接服务器失败，请稍后再试！');
			}
		});
		return null;
	},
	PhoneCode : function (phone, code, ajax, callback) {
		var _this = this;
		phone = _this._trim(phone);
		code = _this._trim(code);
		if (phone == '') {
			return '手机号码不能为空！';
		};
		if (!/^\d{10,11}$/.test(phone)) {
			return '手机号码格式错误！';
		};
		if (code == '') {
			return '验证码不能为空！';
		};
		if (!/^\d{6}$/.test(code)) {
			return '验证码格式错误！';
		};
		if (ajax) {
			$.ajax({
				url : DOMIN.MAIN + '/register?jsoncallback=?',
				type : 'GET',
				data : {
					act : 'verify_phone_code',
					phone : phone,
					code : code
				},
				dataType : 'json',
				error : function (data) {
					return _this._callback(callback, false, '连接服务器失败，请稍后再试！');
				},
				success : function (data) {
					return _this._callback(callback, data.IsSuccess, data.Message, data);
				}
			});
		}
		return null;
	},
	BindPhone : function (phone, code, callback) {
		var _this = this;
		phone = _this._trim(phone);
		code = _this._trim(code);
		if (phone == '') {
			return '手机号码不能为空！';
		};
		if (!/^\d{10,11}$/.test(phone)) {
			return '手机号码格式错误！';
		};
		if (code == '') {
			return '验证码不能为空！';
		};
		if (!/^\d{6}$/.test(code)) {
			return '验证码格式错误！';
		};
		$.ajax({
			url : DOMIN.MAIN + '/register?jsoncallback=?',
			type : 'GET',
			data : {
				act : 'bind_phone',
				phone : phone,
				code : code
			},
			dataType : 'json',
			error : function (data) {
				return _this._callback(callback, false, '连接服务器失败，请稍后再试！');
			},
			success : function (data) {
				return _this._callback(callback, data.IsSuccess, data.Message, data);
			}
		});
		return null;
	},
	Password : function (password, callback) {
		var _this = this;
		password = _this._trim(password);
		if (password == '') {
			return '密码不能为空';
		};
		if (!/^.{6,20}$/.test(password)) {
			return '密码长度只能在6-20位字符之间';
		};
		if (/^((\d+)|([a-zA-Z]+)){1}$/.test(password)) {
			return '密码太简单，请您更改密码，如字母+数字的组合';
		}
		return null;
	},
	Password2 : function (password, password2, callback) {
		var _this = this;
		password = _this._trim(password);
		password2 = _this._trim(password2);
		if (password2 == '') {
			return '密码不能为空';
		};
		if (!/^.{6,20}$/.test(password2)) {
			return '密码长度只能在6-20位字符之间';
		};
		if (password2 != password) {
			return '再次输入的密码不一致';
		}
		return null;
	},
	ImageCode : function (code, ajax, callback) {
		var _this = this;
		code = _this._trim(code);
		if (code == '') {
			return '验证码不能为空！';
		};
		if (!/^[0-9a-zA-Z]{4}$/.test(code)) {
			return '验证码格式错误！';
		};
		if (ajax) {}
		return null;
	},
	Login : function (user, password, remember, ajax, callback, imgcode) {
		var _this = this;
		user = _this._trim(user);
		password = _this._trim(password);
		if (user == '') {
			return '账号名不能为空！';
		};
		if (password == '') {
			return '密码名不能为空！';
		};
		if (ajax) {
			$.ajax({
				url : DOMIN.MAIN + '/login?act=ajaxlogin&jsoncallback=?',
				type : 'GET',
				dataType : 'json',
				cache : false,
				data : '&imgcode=' + (imgcode || '') + '&username=' + encodeURIComponent(user) + '&password=' + password + '&ckusername=' + ((remember) ? 'on' : 'off'),
				error : function (data) {
					return _this._callback(callback, false, '连接服务器失败，请稍后再试！');
				},
				success : function (data) {
					return _this._callback(callback, data.IsSuccess, data.Message, data);
				}
			});
		}
		return null;
	},
	Register : function (phone, password, code, campus_id, mode, ajax, callback, url) {
		var _this = this;
		phone = _this._trim(phone);
		campus_id = _this._trim(campus_id);
		mode = _this._trim(mode);
		password = _this._trim(password);
		code = _this._trim(code);
		var data = {
			phone : phone,
			password : password,
			campus_id : campus_id
		};
		var msg = null;
		if (mode == 'Phone') {
			data['act'] = 'register_phone';
			data['code'] = code;
			msg = _this.Phone(phone, false);
			if (msg) {
				return msg;
			}
		} else {
			data['act'] = 'register_email';
			data['imgcode'] = code;
			msg = _this.Email(phone, false);
			if (msg) {
				return msg;
			}
		}
		msg = _this.Password(password, false);
		if (msg) {
			return msg;
		}
		if (mode == 'Phone') {
			msg = _this.PhoneCode(phone, code, false);
			if (msg) {
				return msg;
			}
		} else {
			msg = _this.ImageCode(code, false);
			if (msg) {
				return msg;
			}
		}
		if (ajax) {
			$.ajax({
				url : url || (DOMIN.MAIN + '/login?act=ajaxlogin&jsoncallback=?'),
				type : 'GET',
				dataType : 'json',
				cache : false,
				data : data,
				error : function (data) {
					return _this._callback(callback, false, '连接服务器失败，请稍后再试！');
				},
				success : function (data) {
					return _this._callback(callback, data.IsSuccess, data.Message, data);
				}
			});
		}
		return null;
	}
}; ; ; ;
var BindInfo = function () {
	var self = this;
	var Bind = function (type, callback, isone, data) {
		var $box = $('<div class="com-bind-info"> <style> .com-bind-close, .com-bind-btn, .com-bind-content p a i, .com-bind-content p span i, .com-bind-content p a{background-image:url(http://ued.paixie.net/images/public/get_coupon.gif);} .com-bind-info{z-index:2001;top:700px; background:#fff;left:50%;margin-left:-225px;position:absolute;width:450px;-moz-box-shadow:0px 0px 10px #999; -webkit-box-shadow:0px 0px 10px #999; box-shadow:0px 0px 10px #999;border:1px solid #d7d7d7;} .com-bind-info a{color:#5f99e2;} .com-bind-info a{cursor:pointer;} .com-bind-tab{line-height:50px;height:50px;} .com-bind-tab a{background:#f3f4f6;width:225px;float:left;text-align:center;color:#5d5c5c;font-size:18px;font-family:微软雅黑,雅黑,yahei;} .com-bind-tab a.selected{background:#fff;color:#f53000;} .com-bind-content div{padding:27px 0 0 48px;line-height:33px;color:#333333;font-size:12px;} .com-bind-content p{margin:0;padding:0;overflow:hidden;} .com-bind-content p *{float:left;margin-right:10px;} .com-bind-content p label{line-height: 33px;margin:0;} .com-bind-content p input{outline:none;border:1px solid #cbcbcb;padding:8px 5px;line-height:15px;margin:0;margin-right:10px;width:160px;} .com-bind-content p input.code{width:94px;} .com-bind-content p span{padding-left: 48px;float:none;clear:both;line-height:26px;color:#999999;margin:0;display:block;height:26px;} .com-bind-content p span.code{padding-left: 0;float:left;clear:none;line-height:33px;display:inline;height:33px;position:relative;} .com-bind-content p span.error{color:red;} .com-bind-content p span.error i{display:inline-block;vertical-align:middle;width:14px;height:14px;background-position:0 -24px;float:none;margin:-3px 4px 0 0;+margin-top:1px;_display:none;} .com-bind-content p a{background-position:0 -43px;line-height:33px;padding-left:22px;overflow:hidden;height:33px;color:#333;}.com-bind-content p a.waiting{opacity: 0.5;} .com-bind-content p a i{height:33px;display:inline-block;width:2px;margin-left:20px;float:none;margin-right:0;vertical-align:top;background-position:right -43px;+vertical-align:middle;} a.com-bind-btn{width:129px;height:38px;text-align:center;color:#fff;font-size:16px;font-family:微软雅黑,雅黑,yahei;display:block;margin:11px 0 34px 110px;background-position:-22px 0;line-height:38px;} .com-bind-content ul{margin:0 11px 11px -37px;list-style:none;padding:0;border-top:1px solid #cccccc;line-height:20px;} .com-bind-content li{list-style:none;padding:0;padding-left:22px;color:#999999;} .com-bind-content li b{line-height:30px;display:block;margin-top:7px;font-weight:normal;} .com-bind-close{width:17px;height:19px;position:absolute;top:16px;right:13px;} .com-bind-close:hover{opacity:0.5;} </style> <a class="com-bind-close"></a> <div class="com-bind-tab"> <a class="selected">验证手机</a> <a>验证邮箱</a> </div> <div class="com-bind-content"> <div> <p> <label>手机号：</label> <input class="phone Phone-no" type="text"/> <a class="com-bind-get-code Phone-getcode">发送验证码<i></i></a> <span class="phone Phone-no-error"><i></i>&nbsp;</span> </p> <p> <label>验证码：</label> <input class="code Phone-code" type="text"/> <span class="code Phone-code-error">请输入您收到的6位验证码</span> <span>&nbsp;</span> </p> <a class="com-bind-btn Phone-bind">确 定</a></div> <div style="display:none;"> <p> <label>邮&nbsp;&nbsp;&nbsp;&nbsp;箱：</label> <input class="phone Email-no" type="text"/> <a class="com-bind-get-code Email-getcode">发送验证码<i></i></a> <span class="phone Email-no-error">&nbsp;</span> </p> <p> <label>验证码：</label> <input class="code Email-code" type="text"/> <span class="code Email-code-error">请输入您收到的6位验证码</span> <span>&nbsp;</span> </p> <a class="com-bind-btn Email-bind">确 定</a> <ul> <li><b>未收到邮件可能：</b></li> <li>·邮件可能在垃圾邮箱中， 请仔细查找。</li> <li>·网络延迟，若超过10分钟还没有收到邮件，请重新发送。</li> </ul> </div> </div></div>').appendTo('body');
		$box.find('.com-bind-tab a').click(function () {
			if ($(this).hasClass('selected'))
				return;
			$(this).addClass('selected').siblings().removeClass('selected');
			$box.find('.com-bind-content > div:eq(' + $(this).index() + ')').show().siblings().hide();
		});
		if (type == 'Email') {
			$box.find('.com-bind-tab a:eq(0)').hide().next().click().css({
				'text-align' : 'left',
				'text-indent' : '20px'
			});
		} else if (type == 'Phone') {
			$box.find('.com-bind-tab a:eq(1)').hide().prev().css({
				'text-align' : 'left',
				'text-indent' : '20px'
			});
		}
		$box.find('.com-bind-close').click(function () {
			$box.remove();
			$('#js-bind-bg').remove();
		});
		$box.css({
			top : $(window).scrollTop() + $(window).height() / 2 - $box.height() / 2
		});
		$.documentMask({
			z : 2000,
			id : "js-bind-bg"
		});
		type = type.split(',');
		var Type = {};
		for (var i = 0; i < type.length; i++) {
			Type[type[i]] = false;
			(function (type) {
				var verifyModel = new BindInfo.VerifyModel($box.find('.' + type + '-no'), $box.find('.' + type + '-no-error'), $box.find('.' + type + '-getcode'), $box.find('.' + type + '-code'), $box.find('.' + type + '-code-error'), type, false, data);
				var isbinding = false;
				$box.find('.' + type + '-bind').click(function () {
					if (isbinding)
						return;
					verifyModel.Bind(function (isok, error) {
						isbinding = false;
						if (isok) {
							Type[type] = true;
							var isok = true;
							$.each(Type, function (key, value) {
								if (!value) {
									isok = false;
									return false;
								}
							});
							if (isok || isone) {
								$box.remove();
								$('#js-bind-bg').remove();
								callback();
							}
						} else if (error) {
							alert(error);
						}
					});
				});
			})(type[i]);
		}
	};
	self.BindPhoneEmail = function (callback, data) {
		Bind('Email,Phone', callback, false, data);
	};
	self.BindEmailPhone = function (callback, data) {
		Bind('Email,Phone', callback, false, data);
	};
	self.BindPhoneOrEmail = function (callback, data) {
		Bind('Email,Phone', callback, true, data);
	};
	self.BindEmailOrPhone = function (callback, data) {
		Bind('Email,Phone', callback, true, data);
	};
	self.BindEmail = function (callback, data) {
		Bind('Email', callback, false, data);
	};
	self.BindPhone = function (callback, data) {
		Bind('Phone', callback, false, data);
	};
};
BindInfo.EmailLib = window['EmailSevers'] || {
	"sina.com.cn" : "http://mail.sina.com.cn/",
	"sina.com" : "http://mail.sina.com.cn/",
	"sina.cn" : "http://mail.sina.com.cn/",
	"vip.sina.com" : "http://mail.sina.com.cn/",
	"2008.sina.com" : "http://mail.sina.com.cn/",
	"163.com" : "http://mail.163.com/",
	"126.com" : "http://mail.126.com/",
	"popo.163.com" : "http://popo.163.com/",
	"yeah.net" : "http://email.163.com/",
	"vip.163.com" : "http://vip.163.com/",
	"vip.126.com" : "http://vip.126.com/",
	"188.com" : "http://188.com/",
	"vip.188.com" : "http://vip.188.com/",
	"tom.com" : "http://mail.tom.com/",
	"yahoo.com" : "http://mail.cn.yahoo.com/",
	"yahoo.com.cn" : "http://mail.cn.yahoo.com/",
	"yahoo.cn" : "http://mail.cn.yahoo.com/",
	"sohu.com" : "http://mail.sohu.com/",
	"hotmail.com" : "https://login.live.com/",
	"139.com" : "http://mail.10086.cn/",
	"gmail.com" : "https://accounts.google.com",
	"msn.com" : "https://login.live.com",
	"51.com" : "http://passport.51.com/",
	"yougou.com" : "http://mail.yougou.com/",
	"qq.com" : "https://mail.qq.com",
	"foxmail.com" : "http://mail.qq.com",
	"vip.qq.com" : "http://mail.qq.com"
};
BindInfo.VerifyModel = function ($obj, $objError, $sendCode, $code, $codeError, type, forgot, _data) {
	var self = this;
	var issend = false;
	var obj = '';
	var objError = ' ';
	var codeError = '请输入您收到的6位验证码';
	var code = '';
	var _setInterval = null;
	var issending = false;
	_data = _data || {};
	if (type !== 'Email' && type !== 'Phone') {
		throw new Error('参数错误');
	}
	$obj.unbind('focus change').focus(function () {
		$objError.html(objError = ' ').removeClass('error');
	}).change(function () {
		obj = '';
		code = '';
		issend = false;
		issending = false;
		$code.val('');
		$objError.html(objError = ' ').removeClass('error');
		$codeError.html(codeError = '请输入您收到的6位验证码').removeClass('error');
		clearInterval(_setInterval);
		$obj.data('setTimeout', setTimeout(function () {
				$sendCode.html('发送验证码<i></i>').removeClass('waiting');
			}, 500));
	});
	$sendCode.unbind('click').click(function () {
		clearTimeout($obj.data('setTimeout'));
		if (issending)
			return;
		var _obj = $.trim($obj.val());
		issending = true;
		$sendCode.html('正在发送...<i></i>').addClass('waiting');
		var error = '';
		function verifyCallback(isok, error, data) {
			if (isok) {
				objError = ' '
					if (type == 'Email') {
						var url = BindInfo.EmailLib[_obj.split('@')[1]];
						if (url) {
							url = '<a target="_blank" href="' + url + '" style="background: none;display: inline;float: none;line-height: 26px;color: #5d89ca;height: 26px; margin: 0;padding: 0;">进入邮箱</a>';
						} else {
							url = '';
						}
						$objError.html('验证码已发送至您邮箱。' + url).removeClass('error');
					} else {
						$objError.html('验证码已发送至您手机。').removeClass('error');
					}
					issend = true;
				obj = _obj;
				var time = 60;
				_setInterval = setInterval(function () {
						$sendCode.html(time + '后重新获取<i></i>');
						if (--time < 0) {
							issending = false;
							clearInterval(_setInterval);
							$sendCode.html('发送验证码<i></i>').removeClass('waiting');
						}
					}, 1000);
			} else {
				issending = false;
				$objError.html('<i></i>' + (objError = error)).addClass('error');
				$sendCode.html('发送验证码<i></i>').removeClass('waiting');
			}
		};
		if (_data.verifyFun) {
			error = _data.verifyFun(_obj, forgot, verifyCallback);
		} else {
			error = PXVerify['Send' + type + 'Code'](_obj, forgot, verifyCallback, DOMIN.MAIN + '/register?n=1&jsoncallback=?');
		}
		if (error) {
			$objError.html('<i></i>' + (objError = error)).addClass('error');
			issending = false;
			$sendCode.html('发送验证码<i></i>').removeClass('waiting');
		}
	});
	$code.unbind('focus blur').focus(function () {
		if (!issend) {
			$(this).blur();
			$sendCode.focus();
			$objError.html('<i></i>' + (objError = '请先发送验证码!')).addClass('error');
			return;
		}
		$codeError.html(codeError = '请输入您收到的6位验证码').removeClass('error');
	}).blur(function () {
		if (!issend) {
			return;
		}
		var _code = $.trim($(this).val());
		var error = PXVerify[type + 'Code'](obj, _code, false);
		if (error) {
			$codeError.html('<i></i>' + (codeError = error)).addClass('error')
		} else {
			code = _code;
			$codeError.html(codeError = '请输入您收到的6位验证码').removeClass('error');
		}
	});
	self.Bind = function (callback) {
		$code.focus().blur();
		if (obj && code) {
			var error = '';
			function bindCallback(isok, error, data) {
				if (isok) {
					callback(true, '');
				} else {
					callback(false, error);
				}
			};
			if (_data.bindFun) {
				error = _data.bindFun(obj, code, bindCallback);
			} else {
				error = PXVerify['Bind' + type](obj, code, bindCallback);
			}
			if (error) {
				callback(false, error);
			}
		} else {
			if ($.trim(codeError))
				$codeError.html('<i></i>' + codeError).addClass('error');
			if ($.trim(objError))
				$objError.html('<i></i>' + objError).addClass('error');
			callback(false, '');
		}
	};
};
var GetCoupon = function () {
	var self = this;
	var bindInfo = new BindInfo();
	var Get = function (url, callback) {
		if (/promote\/coupon\/get_coupon.html\?id=\d+&vc=.+/.test(url) || /promote\/get_coupon\/?\?id=\d+&vc=.+/.test(url)) {
			$.ajax({
				url : url + '&ajax=true&jsoncallback=?',
				type : 'GET',
				dataType : 'json',
				error : function () {
					callback({
						"IsSuccess" : false,
						"Message" : "领取失败，网络原因，可再次点击/刷新领取。"
					});
				},
				success : function (data) {
					callback(data);
				}
			});
		} else {
			callback({
				"IsSuccess" : false,
				"Message" : "抱歉，当前时间不在活动时段！"
			});
		}
	};
	this.Result = {
		Success : function (coupon) {
			var html = [];
			$.each(coupon, function (index, value) {
				html.push(value.Price + '元');
			});
			alert('恭喜，成功领取' + coupon.length + '张面额分别为' + html.join('、') + '的店铺优惠券！');
			html = null;
		},
		NoStart : function () {
			alert('抱歉，活动还未开始！');
		},
		Count : function () {
			alert('抱歉，您今天领取数已超限！');
		},
		End : function () {
			alert('抱歉，活动已经结束！');
		},
		Other : function (msg) {
			alert(msg);
		},
		BindEmailPhone : function () {
			bindInfo.BindEmailPhone(function () {
				self.Get(element, url, callback);
			});
		},
		BindPhoneEmail : function () {
			bindInfo.BindPhoneEmail(function () {
				self.Get(element, url, callback);
			});
		},
		BindPhoneOrEmail : function () {
			bindInfo.BindPhoneOrEmail(function () {
				self.Get(element, url, callback);
			});
		},
		BindEmailOrPhone : function () {
			bindInfo.BindPhoneOrEmail(function () {
				self.Get(element, url, callback);
			});
		},
		BindEmail : function () {
			bindInfo.BindEmail(function () {
				self.Get(element, url, callback);
			});
		},
		BindPhone : function () {
			bindInfo.BindPhone(function () {
				self.Get(element, url, callback);
			});
		},
		Login : function () {
			window.location.href = DOMIN.MAIN + '/login.html?url=' + window.location.href;
		}
	};
	this.Load = {
		Ing : function () {
			try {
				$(this).data('GetCoupon-loading').remove();
			} catch (e) {}
			var left = ($(this).offset().left + $(this).outerWidth() / 2);
			$(this).data('GetCoupon-loading', $('<img src="http://img-cdn2.paixie.net/images/loading.gif" width="16" height="16" style="position: absolute;left:' + left + 'px;top:' + ($(this).offset().top + $(this).outerHeight()) + 'px;"/>').appendTo($('body')));
		},
		End : function () {
			try {
				$(this).data('GetCoupon-loading').remove();
			} catch (e) {}

		}
	};
	var url = '';
	var callback = null;
	var element = null;
	this.Get = function (_element, _url, _callback) {
		element = _element;
		url = _url;
		self.Load.Ing.call(element);
		callback = _callback;
		Get(url, function (data) {
			self.Load.End.call(element);
			if (callback) {
				callback(data);
				return;
			}
			if (data.IsSuccess) {
				self.Result.Success(data.Coupon);
			} else {
				switch (data.Message) {
				case 'BindEmailOrPhone':
				case 'BindPhoneOrEmail':
				case 'BindEmailPhone':
				case 'BindPhoneEmail':
				case 'BindEmail':
				case 'BindPhone':
				case 'Login':
				case 'NoStart':
				case 'End':
				case 'Count':
					self.Result[data.Message]();
					break;
				default:
					self.Result.Other(data.Message);
					break;
				}
			}
		});
	};
}; ; ; ;
$(window).load(function () {
	$('body').append('<style>#hm_t_8662,.hm-t-container{display: none !important;}</style>');
	var key = '616162183724faaacab9d76475198eb4';
	if (document.location.href.indexOf("tuan.paixie.net") >= 0) {
		key = '94ffd4ea78e47ab00b21995e8d6b9c6c';
	} else if (document.location.href.indexOf("go.paixie.net") >= 0) {
		key = '1cba4762bfae4698164a7330a638fcbb';
	}
	function init(key) {
		var hm = document.createElement('script');
		hm.src = (("https:" == document.location.protocol) ? " https://" : " http://") + 'hm.baidu.com/hm.js?' + key;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(hm, s);
	};
	if (PX_HELP_DATA) {
		var pageinfo = PX_HELP_DATA[2].join(',');
		if (pageinfo == 'paixie,club,index') {
			init('fa12811c91f78172b3197a4e6256993d');
		}
		if (/^find,/.test(pageinfo)) {
			init('da5c83a2ed914d958e62739d1f53fdfd');
		}
		if (/^paixie,club,/.test(pageinfo)) {
			init('2566d228318e7fb3291a694ad6d50e55');
		}
		if (/^paixie,member2\.0,/.test(pageinfo)) {
			init('fc2da9dee1db771b8c183b6549e88817');
		}
		if (/^shop,.+$/.test(pageinfo)) {
			init('215af25de26cca9c6acf0b6fe683ba40');
		} else {
			init(key);
			if (document.location.href.indexOf("go.paixie.net") >= 0) {
				init('616162183724faaacab9d76475198eb4');
				init('1d007359864354fd3b4a338b76add03c');
			}
			if (pageinfo === 'paixie,topic,index') {
				init('3d0d5ef30c1c8fe8fc3f8035179bd0ee');
			} else if (pageinfo === 'paixie,topic,temai') {
				init('a6be482aa6fa595b9a0f68c167ef07f9');
			} else if (pageinfo === 'paixie,cart,spikecart' || pageinfo === 'paixie,cart,spiketrolley' || (pageinfo === 'paixie,cart,payed' && /^http:\/\/www\.paixie\.net\/cart\/spiketrolley-/.test(document.referrer))) {
				init('94ffd4ea78e47ab00b21995e8d6b9c6c');
			} else if (/^paixie,member,.+$/.test(pageinfo)) {
				init('fc2da9dee1db771b8c183b6549e88817');
			}
			if (/^paixie,cart,.+$/.test(pageinfo) || /^paixie,brand,.+$/.test(pageinfo) || pageinfo === 'paixie,goods,goods_detail') {
				init('9b9fd4b26254c8bef9ab99cb15b5e689');
			}
		}
		if (pageinfo == 'paixie,goods,open_goods_detail' || pageinfo == 'paixie,goods,goods_detail') {
			init('2598315b0e4c1dc5fbd478b15791fb71');
		}
	} else {
		init(key);
	}
}); ; ; ; ; ; ;
var ViewModelTools = {
	verify : function (prop) {
		var self = this;
		var error = [];
		if (prop) {
			$.each(prop.split(','), function (index, prop) {
				prop = self['__porpDictionary__'][prop];
				if (self[prop.name + 'Error']()) {
					if (self["_" + prop.name + "Error"]() == '' || self["_" + prop.name + "Error"]() == 'ok') {
						var temp = self[prop.name]();
						self[prop.name]('===test===');
						self[prop.name](temp);
						if (self[prop.name + 'Error']()) {
							error.push(self["_" + prop.name + "Error"]());
						} else {
							self["_" + prop.name + "Error"]('ok');
						}
					} else {
						error.push(self["_" + prop.name + "Error"]());
					}
				} else {
					self["_" + prop.name + "Error"]('ok');
				}
			});
		} else {
			$.each(self['__porpList__'], function (index, prop) {
				if (self[prop.name + 'Error']()) {
					if (self["_" + prop.name + "Error"]() == '' || self["_" + prop.name + "Error"]() == 'ok') {
						var temp = self[prop.name]();
						self[prop.name]('===test===');
						self[prop.name](temp);
						if (self[prop.name + 'Error']()) {
							error.push(self["_" + prop.name + "Error"]());
						} else {
							self["_" + prop.name + "Error"]('ok');
						}
					} else {
						error.push(self["_" + prop.name + "Error"]());
					}
				} else {
					self["_" + prop.name + "Error"]('ok');
				}
			});
		}
		return error;
	},
	_propInit : function (propname, value, read, write, des) {
		var self = this;
		self['dataProp'] = self['dataProp'] || [];
		self['dataProp'].push(propname);
		self['__porpList__'] = self['__porpList__'] || [];
		self['__porpDictionary__'] = self['__porpDictionary__'] || {};
		if (!self['__porpDictionary__'][propname]) {
			self['__porpList__'].push({
				name : propname
			});
			self['__porpDictionary__'][propname] = self['__porpList__'][self['__porpList__'].length - 1];
		}
		self[propname + 'Error'] = ko.observable(true);
		self["_" + propname] = ko.observable(value);
		self["_" + propname + "Error"] = ko.observable('');
		self["_" + propname + "Des"] = ko.observable(des || '');
		self["_" + propname + "Focus"] = ko.observable(false);
		self[propname + "Focus"] = ko.dependentObservable({
				read : function () {
					return self["_" + propname + "Focus"]();
				},
				write : function (value) {
					self["_" + propname + "Focus"](value);
				}
			});
		self[propname + "Focus2"] = ko.dependentObservable({
				read : function () {
					return self["_" + propname + "Focus"]();
				},
				write : function (value) {
					self["_" + propname + "Focus"](value);
				}
			});
		self[propname + "ErrorTip"] = ko.observable(false);
		self[propname + "Info"] = ko.computed(function () {
				if (self["_" + propname + "Focus"]()) {
					self[propname + "ErrorTip"](false);
					if (self["_" + propname + "Des"]() == "")
						return '';
					return '<div class="v-info">' + self["_" + propname + "Des"]() + '</div>';
				} else {
					if (self["_" + propname + "Error"]() == 'ok') {
						self[propname + "ErrorTip"](false);
						return '<div class="v-ok">' + ((self[propname].OkDes) ? self[propname].OkDes : '<i class="base-ok"></i>') + '</div>';
					} else if (self["_" + propname + "Error"]() == 'ajaxing') {
						self[propname + "ErrorTip"](false);
						return '<div class="v-ok"><i class="base-loading"></i></div>';
					} else if (self["_" + propname + "Error"]() == '') {
						self[propname + "ErrorTip"](false);
						if (self["_" + propname + "Des"]() == '')
							return '';
						return '<div class="v-text">' + self["_" + propname + "Des"]() + '</div>';
					} else {
						self[propname + "ErrorTip"](true);
						return '<div class="v-error">' + self["_" + propname + "Error"]() + '</div>';
					}
				}
			});
	},
	prop : function (propname, value, read, write, des) {
		var self = this;
		ViewModelTools._propInit.call(self, propname, value, read, write, des);
		self['_' + propname + 'Write'] = write;
		self[propname] = ko.dependentObservable({
				read : function () {
					if (read) {
						return read.call(self);
					} else {
						return self["_" + propname]();
					}
				},
				write : function (value) {
					self["_" + propname](value);
					if (self['_' + propname + 'Write']) {
						self["_" + propname + "Error"](self['_' + propname + 'Write'].call(self["_" + propname], value) || 'ok');
						self[propname + 'Error'](self["_" + propname + "Error"]() != 'ok');
					} else {
						self[propname + 'Error'](false);
						self["_" + propname + "Error"]('ok');
					}
				}
			});
		self[propname].OkDes = '';
	},
	ajaxProp : function (propname, value, read, write, des) {
		var self = this;
		ViewModelTools._propInit.call(self, propname, value, read, write, des);
		self["_" + propname].ajaxCallback = function (error) {
			if (error) {
				self[propname + 'Error'](true);
			} else {
				self[propname + 'Error'](false);
			}
			self["_" + propname + "Error"](error || 'ok');
		};
		self[propname] = ko.dependentObservable({
				read : function () {
					if (read) {
						return read.call(self);
					} else {
						return self["_" + propname]();
					}
				},
				write : function (value) {
					self["_" + propname](value);
					if (write) {
						self[propname + 'Error'](true);
						self["_" + propname + "Error"](write.call(self["_" + propname], value) || 'ajaxing');
					} else {
						self[propname + 'Error'](false);
						self["_" + propname + "Error"]('ok');
					}
				}
			});
		self[propname].OkDes = '';
	}
};
function passwordGrade(pwd) {
	var score = 0;
	var regexArr = ['[0-9]', '[a-z]', '[A-Z]', '[\\W_]'];
	var repeatCount = 0;
	var prevChar = '';
	var len = pwd.length;
	score += len > 18 ? 18 : len;
	for (var i = 0, num = regexArr.length; i < num; i++) {
		if (eval('/' + regexArr[i] + '/').test(pwd))
			score += 4
	}
	for (var i = 0, num = regexArr.length; i < num; i++) {
		if (pwd.match(eval('/' + regexArr[i] + '/g')) && pwd.match(eval('/' + regexArr[i] + '/g')).length >= 2)
			score += 2;
		if (pwd.match(eval('/' + regexArr[i] + '/g')) && pwd.match(eval('/' + regexArr[i] + '/g')).length >= 5)
			score += 2
	}
	for (var i = 0, num = pwd.length; i < num; i++) {
		if (pwd.charAt(i) == prevChar)
			repeatCount++;
		else
			prevChar = pwd.charAt(i)
	}
	score -= repeatCount * 1;
	return score
};
function sendphoneViewMode(tip, phone, forgot, url) {
	var self = this;
	ViewModelTools.prop.call(self, 'sending', false);
	ViewModelTools.prop.call(self, 'sended', false);
	ViewModelTools.prop.call(self, 'time', 120);
	var _setInterval = null;
	self.disable = ko.computed(function () {
			return self.sended() || self.sending();
		});
	self.setphone = function (_phone) {
		phone = _phone;
	};
	self.send = function () {
		if (self.sended() || self.sending())
			return;
		self.sending(true);
		clearInterval(_setInterval);
		var error = PXVerify.SendPhoneCode(phone, forgot, function (isok, error) {
				self.sending(false);
				if (isok) {
					self.sended(true);
					self.time(120);
					_setInterval = setInterval(function () {
							self.time(self.time() - 1);
							if (self.time() == 0) {
								clearInterval(_setInterval);
								self.sended(false);
							}
						}, 1000);
					tip.OkDes = '<i class="base-ok"></i> 验证码已发送，请查收短信！';
					tip('');
				} else {
					tip(error);
				}
			}, url);
		if (error) {
			self.sending(false);
			tip(error);
		}
	};
};
function loginsuccess(initData) {
	var self = this;
	function NicknameViewModel(initData) {
		var self = this;
		ViewModelTools.prop.call(self, 'nickname', initData.nickname || '', null, function (value) {
			value = $.trim(value);
			if (value == '')
				return '昵称不能为空。';
			if (value.split('@')[0].length > 20)
				return '昵称长度不能大于20个字符。';
			if (value.length < 4)
				return '昵称长度不能小于4个字符。';
			if (!/^[0-9a-zA-Z_\-\u4e00-\u9fa5]+$/.test(value))
				return '昵称格式错误。';
		}, '4-20位字符，可由中文、英文、数字及“_”、“-”组成');
		self.edit = ko.observable(false);
		self.editchange = function () {
			self.edit(!self.edit());
		};
		self.saveing = ko.observable(false);
		self.save = function () {
			if (ViewModelTools.verify.call(self).length)
				return;
			self.saveing(true);
			$.ajax({
				url : '?act=updateNickname',
				data : {
					nickname : $.trim(self.nickname())
				},
				type : 'post',
				dataType : 'json',
				error : function () {
					self._nicknameError('连接服务器失败，请稍后再试！');
					self.nicknameErrorTip(true);
					self.saveing(false);
				},
				success : function (data) {
					if (data.IsSuccess) {
						self.edit(false);
						self.saveing(false);
					} else {
						self._nicknameError(data.Message);
						self.saveing(false);
					}
				}
			});
		};
	};
	self.nickname = new NicknameViewModel(initData);
	var mself = self;
	function SendEmailViewModel(initData) {
		var self = this;
		self.sever = ko.observable(null);
		ViewModelTools.ajaxProp.call(self, 'email', initData.email || '', null, function (value) {
			value = $.trim(value);
			var propSelf = this;
			self.sever(null);
			if (value == '')
				return '邮箱地址不能为空。';
			var error = PXVerify.Email(value, true, function (isok, error) {
					if (isok) {
						self.sever(EmailSevers[$.trim(value.split('@')[1])]);
						propSelf.ajaxCallback();
					} else {
						propSelf.ajaxCallback(error);
					}
				});
			if (error)
				return error;
		}, '完成验证后，您可以用该邮箱登录拍鞋网，找回密码。');
		self.email.OkDes = '&nbsp;';
		try {
			self.sever(EmailSevers[$.trim((initData.email || '').split('@')[1])]);
		} catch (e) {}
		self.sending = ko.observable(false);
		self.send_success = ko.observable((initData.emailSendSuccess == true) ? true : false);
		self.change_email = function () {
			self.send_success(false);
		};
		self.send = function (callback) {
			clearTimeout(againSendSetTimeout);
			clearTimeout(againSendSetTimeout120);
			if (callback == mself)
				callback = null;
			self.again(false);
			self.sending(true);
			$.ajax({
				url : '/member/user_edit_account?action=sendemail',
				data : {
					email : $.trim(self.email())
				},
				type : 'post',
				dataType : 'json',
				error : function () {
					if (callback) {
						callback({
							IsSuccess : false,
							Message : '连接服务器失败，请稍后再试！'
						});
					} else {
						self._emailError('连接服务器失败，请稍后再试！');
						self.emailErrorTip(true);
					}
					self.sending(false);
				},
				success : function (data) {
					self.sending(false);
					if (data.IsSuccess) {
						self.send_success(true);
					} else {
						if (!callback) {
							data.Message.replace('登录', '更换');
							self._emailError(data.Message);
							self.emailErrorTip(true);
						}
					}
					if (callback)
						callback(data);
				}
			});
		};
		self.again = ko.observable(false);
		var is120 = false;
		self.againError = ko.observable('');
		var againSendSetTimeout = null;
		var againSendSetTimeout120 = null;
		self.again_send = function () {
			if (self.again() || is120) {
				self.again(true);
				self.againError('您操作太频繁，请于2分钟后再重试！');
				clearTimeout(againSendSetTimeout);
				againSendSetTimeout = setTimeout(function () {
						self.againError('');
						self.again(false);
					}, 5000);
				return;
			}
			self.send(function (data) {
				is120 = true;
				clearTimeout(againSendSetTimeout120);
				againSendSetTimeout120 = setTimeout(function () {
						clearTimeout(againSendSetTimeout);
						is120 = false;
						self.again(false);
						self.againError('');
					}, 120000);
				self.again(true);
				if (data.IsSuccess) {
					againSendSetTimeout = setTimeout(function () {
							self.again(false);
							self.againError('');
						}, 5000);
				} else {
					self.againError(data.Message);
					againSendSetTimeout = setTimeout(function () {
							self.againError('');
							self.again(false);
						}, 5000);
				}
			});
		};
	};
	self.email = new SendEmailViewModel(initData);
};
function forget(initData) {
	var self = this;
	initData = initData || {};
	ViewModelTools.ajaxProp.call(self, 'username', '', null, function (value) {
		value = $.trim(value);
		var propSelf = this;
		if (value == '')
			return '手机号/邮箱不能为空。';
		var error = PXVerify.Email(value, true, function (isok, error) {
				if (!isok && error.indexOf('已存在') >= 0) {
					propSelf.ajaxCallback();
				} else {
					propSelf.ajaxCallback('该邮箱不存在。');
				}
			});
		if (error) {
			error = PXVerify.Phone(value, true, function (isok, error) {
					if (!isok && error.indexOf('已存在') >= 0) {
						propSelf.ajaxCallback();
					} else {
						propSelf.ajaxCallback('该手机不存在。');
					}
				});
			if (error) {
				return '手机/邮箱格式错误。';
			}
		}
	});
	ViewModelTools.prop.call(self, 'imgcode', '', null, function (value) {
		value = $.trim(value);
		if (value == '')
			return '验证码不能为空。';
		return PXVerify.ImageCode(value);
	});
	ViewModelTools.prop.call(self, 'phonecode', '', null, function (value) {
		value = $.trim(value);
		if (value == '')
			return '验证码不能为空。';
		return PXVerify.PhoneCode(initData.phone, value);
	});
	ViewModelTools.prop.call(self, 'sendphonecode', '您还未发送验证码。', null, function (value) {
		return value;
	});
	self.send_phone_code = new sendphoneViewMode(self.sendphonecode, initData.phone, true, DOMIN.HELP + "/forgot?jsoncallback=?");
	ViewModelTools.prop.call(self, 'type', initData.type || '');
	self.password_strength = ko.observable(0);
	ViewModelTools.prop.call(self, 'password', '', null, function (value) {
		value = $.trim(value);
		self.password_strength(0);
		if (value == '') {
			return '新密码不能为空。';
		}
		if (value.length >= 6) {
			var s = passwordGrade(value);
			if (s > 30)
				self.password_strength(3);
			else if (s > 20)
				self.password_strength(2);
			else
				self.password_strength(1);
		}
		return PXVerify.Password(value);
	});
	ViewModelTools.prop.call(self, 'password2', '', null, function (value) {
		return PXVerify.Password2($.trim(value), $.trim(self.password()));
	});
	self.next2 = function () {
		if (ViewModelTools.verify.call(self, 'username,imgcode').length)
			return;
		return true;
	};
	var submiting = false;
	self.next3 = function () {
		if (submiting)
			return;
		if (self.type() == 'email') {
			return true;
		}
		if (ViewModelTools.verify.call(self, 'phonecode,sendphonecode').length)
			return;
		submiting = true;
		return true;
	};
	self.next4 = function () {
		if (submiting)
			return;
		if (ViewModelTools.verify.call(self, 'password,password2').length)
			return;
		submiting = true;
		return true;
	};
};
function login(initData, callback, isjoint) {
	var self = this;
	self.keypress = function (model, e) {
		if (e.keyCode == 13 || e.which == 13) {
			$(e.currentTarget).blur();
			self.login();
		} else {
			return true;
		}
	};
	self.showimgcode = ko.observable(initData.showimgcode || false);
	ViewModelTools.prop.call(self, 'username', initData.username || '', null, function (value) {
		value = $.trim(value);
		if (value == '')
			return '请输入手机号/邮箱';
	}, '&nbsp;');
	self.username.OkDes = '&nbsp;';
	ViewModelTools.prop.call(self, 'password', '', null, function (value) {
		value = $.trim(value);
		if (value == '')
			return '请输入密码';
	}, '&nbsp;');
	self.password.OkDes = '&nbsp;';
	ViewModelTools.prop.call(self, 'imgcode', '', null, function (value) {
		value = $.trim(value);
		if (value == '')
			return '请填写验证码';
		return PXVerify.ImageCode(value);
	}, '&nbsp;');
	self.imgcode.OkDes = '&nbsp;';
	ViewModelTools.prop.call(self, 'autologin', false);
	self.loging = ko.observable(false);
	self.login = function () {
		if (self.loging())
			return;
		var vstring = 'username,password';
		if (self.showimgcode()) {
			vstring += ',imgcode';
		}
		if (ViewModelTools.verify.call(self, vstring).length)
			return;
		self.loging(true);
		if (isjoint) {
			$.ajax({
				url : '/login/joint?act=bindOldUser',
				type : "post",
				data : {
					'username' : $.trim(self.username()),
					'password' : $.trim(self.password())
				},
				dataType : "json",
				cache : false,
				timeout : 80000,
				error : function () {
					if (self.showimgcode()) {
						self._passwordError('连接服务器失败，请稍后再试！');
						self.passwordErrorTip(true);
					} else {
						self._imgcodeError('连接服务器失败，请稍后再试！');
						self.imgcodeErrorTip(true);
					}
					self.loging(false);
				},
				success : function (data) {
					if (data.IsSuccess) {
						callback();
					} else {
						if (data.Message.indexOf('验证码') >= 0) {
							self._imgcodeError(data.Message);
						} else if (data.Message.indexOf('帐户名不存在') >= 0) {
							self._usernameError(data.Message);
						} else {
							self._passwordError(data.Message);
						}
					}
					self.loging(false);
				}
			});
		} else {
			var error = PXVerify.Login($.trim(self.username()), $.trim(self.password()), (self.autologin()) ? 'on' : 'off', true, function (isok, error, data) {
					if (isok) {
						$.each(data.synlogin || [], function (index, src) {
							$('<img style="display: none;"/>').attr('src', src);
						});
						setTimeout(function () {
							if (PAGE_MODE == 'dialog') {
								dialogCallback('{"act":"login","username":"' + $.trim(self.username()) + '","model":"Login"}');
							} else {
								if (callback) {
									callback();
								} else {
									window.location.reload();
								}
							}
						}, 500);
					} else {
						if (error.indexOf('验证码') >= 0) {
							self._imgcodeError(error);
						} else if (error.indexOf('帐户名不存在') >= 0) {
							self._usernameError(error);
						} else {
							self._passwordError(error);
						}
						self.showimgcode(data.showimgcode == true);
						if (PAGE_MODE == 'dialog') {
							dialogCallback('{"act":"height","height":' + $('body').height() + '}');
						}
						self.loging(false);
					}
				}, $.trim(self.imgcode()));
			if (error) {
				self.loging(false);
				if (error.indexOf('验证码') >= 0) {
					self._imgcodeError(error);
				} else if (error.indexOf('帐户名不存在') >= 0) {
					self._usernameError(error);
				} else {
					self._passwordError(error);
				}
			}
		}
	};
};
function register(_callback, isjoint) {
	var self = this;
	self.keypress = function (model, e) {
		if (e.keyCode == 13 || e.which == 13) {
			$(e.currentTarget).blur();
			self.register();
		} else {
			return true;
		}
	};
	self.type = ko.observable('');
	ViewModelTools.ajaxProp.call(self, 'username', '', null, function (value) {
		value = $.trim(value);
		var propSelf = this;
		self.type('');
		if (PAGE_MODE == 'dialog') {
			dialogCallback('{"act":"height","height":' + $('body').height() + '}');
		}
		self.imgcode('');
		self._imgcodeError('');
		self.imgcodeErrorTip(false);
		if (value == '')
			return '请输入邮箱/手机';
		if (value.length < 4 || value.split('@')[0].length > 20)
			return '用户名长度只能在4-20位字符之间';
		var error = PXVerify.Email(value, true, function (isok, error) {
				if (isok) {
					propSelf.ajaxCallback();
					self.type('email');
					if (PAGE_MODE == 'dialog') {
						dialogCallback('{"act":"height","height":' + $('body').height() + '}');
					}
				} else {
					if (error.indexOf('更换邮箱') >= 0 || error.indexOf('请登录') >= 0) {
						error = '该邮箱已存在，立刻<a class="gologin" data-username="' + value + '" href="' + DOMIN.MAIN + '/login.html?username=' + value + '">登录</a>';
					}
					propSelf.ajaxCallback(error);
				}
			});
		if (error) {
			error = PXVerify.Phone(value, true, function (isok, error) {
					if (isok) {
						propSelf.ajaxCallback();
						self.type('phone');
						self.send_phone_code.setphone(value);
						if (PAGE_MODE == 'dialog') {
							dialogCallback('{"act":"height","height":' + $('body').height() + '}');
						}
					} else {
						if (error.indexOf('请登录') >= 0) {
							error = '该手机号已存在，立刻<a class="gologin" data-username="' + value + '" href="' + DOMIN.MAIN + '/login.html?username=' + value + '">登录</a>';
						}
						propSelf.ajaxCallback(error);
					}
				});
			if (error) {
				return '邮箱/手机格式错误';
			}
		};
		setTimeout(function () {
			$('.base-refresh').click();
		}, 200);
	}, '请输入邮箱/手机号');
	self.password_strength = ko.observable(0);
	ViewModelTools.prop.call(self, 'password', '', null, function (value) {
		value = $.trim(value);
		self.password_strength(0);
		if (value == '') {
			return '密码不能为空';
		}
		if (value.length >= 6) {
			var s = passwordGrade(value);
			if (s > 30)
				self.password_strength(3);
			else if (s > 20)
				self.password_strength(2);
			else
				self.password_strength(1);
		}
		var error = PXVerify.Password(value);
		if (error)
			return error;
		if (value == $.trim(self.username())) {
			return '密码与账户信息太重合，有被盗风险，请更换密码';
		}
		var p = self.password2();
		self.password2(p);
		self._password2Error('');
		self.password2ErrorTip(false);
	}, '6-20位字符，可使用字母、数字或符号的组合');
	ViewModelTools.prop.call(self, 'password2', '', null, function (value) {
		return PXVerify.Password2($.trim(value), $.trim(self.password()));
	}, '请再次输入密码');
	ViewModelTools.prop.call(self, 'imgcode', '', null, function (value) {
		value = $.trim(value);
		if (value == '')
			return '请填写验证码';
		return PXVerify.ImageCode(value);
	}, '&nbsp;');
	ViewModelTools.prop.call(self, 'sendphonecode', '', null, function (value) {
		return value;
	}, '&nbsp;');
	ViewModelTools.prop.call(self, 'phonecode', '', null, function (value) {
		value = $.trim(value);
		if (value == '')
			return '请填写验证码';
		return PXVerify.PhoneCode($.trim(self.username()), value);
	}, '&nbsp;');
	self.send_phone_code = new sendphoneViewMode(self._phonecodeError);
	ViewModelTools.prop.call(self, 'agreement', true, null, function (value) {
		if (!value)
			return '请先同意《拍鞋网服务协议》';
	});
	self.registering = ko.observable(false);
	self.register = function () {
		if (self.registering())
			return;
		var error = null;
		var _error = ViewModelTools.verify.call(self, 'agreement');
		if (_error.length) {
			return alert(_error.join('\n'));
		}
		switch (self.type()) {
		case '':
			error = ViewModelTools.verify.call(self, 'username,password,password2');
			break;
		case 'email':
			error = ViewModelTools.verify.call(self, 'username,password,password2,imgcode');
			break;
		case 'phone':
			_error = ViewModelTools.verify.call(self, 'sendphonecode');
			if (_error.length) {
				self._phonecodeError(_error[0]);
			}
			error = ViewModelTools.verify.call(self, 'username,password,password2,sendphonecode,phonecode');
			break;
		}
		if (error.length)
			return;
		self.registering(true);
		function callback(isok, error) {
			if (isok) {
				if (PAGE_MODE == 'dialog') {
					dialogCallback('{"act":"login","username":"' + $.trim(self.username()) + '","model":"Register"}');
				} else {
					if (_callback) {
						_callback();
					} else {
						if (URL.indexOf('v.paixie.net') >= 0) {
							window.location.href = 'http://v.paixie.net';
						} else {
							window.location.href = '/login/loginsuccess?url=' + URL + '&isregister=1';
						}
					}
				}
			} else {
				if (error.indexOf('账号') >= 0 || error.indexOf('手机') >= 0 || error.indexOf('邮箱') >= 0 || error.indexOf('账户') >= 0 || error.indexOf('用户名') >= 0) {
					self._usernameError(error);
					self.usernameErrorTip(true);
				} else if (error.indexOf('密码') >= 0) {
					self._password2Error(error);
					self.password2ErrorTip(true);
				} else {
					if (self.type() == 'phone') {
						self._phonecodeError(error);
						self.phonecodeErrorTip(true);
					} else {
						self._imgcodeError(error);
						self.imgcodeErrorTip(true);
					}
				}
				self.registering(false);
			}
		};
		if (isjoint) {
			var data = {
				password : $.trim(self.password()),
				username : $.trim(self.username())
			};
			switch (self.type()) {
			case 'email':
				data['imgcode'] = $.trim(self.imgcode());
				break;
			case 'phone':
				data['code'] = $.trim(self.phonecode());
				break;
			}
			self.registering(true);
			$.ajax({
				url : '/login/joint?act=bindNewUser',
				type : "post",
				data : data,
				dataType : "json",
				cache : false,
				timeout : 80000,
				error : function () {
					callback(false, "连接服务器失败，请稍后再试！");
					self.registering(false);
				},
				success : function (data) {
					callback(data.IsSuccess, data.Message);
					self.registering(false);
				}
			});
		} else {
			var data = {
				password : $.trim(self.password()),
				phone : $.trim(self.username())
			};
			switch (self.type()) {
			case 'email':
				data['act'] = 'register_email';
				data['imgcode'] = $.trim(self.imgcode());
				break;
			case 'phone':
				data['act'] = 'register_phone';
				data['code'] = $.trim(self.phonecode());
				break;
			}
			self.registering(true);
			$.ajax({
				url : DOMIN.MAIN + '/register?jsoncallback=?',
				type : "GET",
				data : data,
				dataType : "json",
				cache : false,
				timeout : 80000,
				error : function () {
					callback(false, "连接服务器失败，请稍后再试！");
					self.registering(false);
				},
				success : function (data) {
					callback(data.IsSuccess, data.Message);
					self.registering(false);
				}
			});
		}
	};
};
function joint(initData) {
	$('.v-error .gologin').live('click', function () {
		self.type('login');
		self.mlogin.username($(this).attr('data-username'));
		setTimeout(function () {
			$('#js-login-username').keyup();
		}, 100);
		return false;
	});
	initData = initData || {};
	var self = this;
	self.mlogin = new login(initData, function () {
			window.location.href = '?step=3';
		}, true);
	self.mregister = new register(function () {
			window.location.href = '?step=3';
		}, true);
	self.type = ko.observable('login');
};
$(document).ready(function (e) {
	$('.base-text input').live('focus', function () {
		$(this).parent().addClass('base-text-focus base-text-has-content');
	}).live('blur', function () {
		$(this).parent().removeClass('base-text-focus');
		if ($.trim($(this).val()) == '') {
			$(this).parent().removeClass('base-text-has-content');
		}
	}).live('keyup', function () {});
	$('.base-text a.base-close').live('click', function () {
		$(this).prev().val('').change().focus().parent().addClass('base-text-focus');
	}).live('mouseenter', function () {
		$(this).parent().addClass('base-text-focus2');
	}).live('mouseleave', function () {
		$(this).parent().removeClass('base-text-focus2');
	});
	$('.base-refresh').live('click', function () {
		var img = $(this).prev();
		img.attr('src', img.attr('src').split('?')[0] + '?' + (new Date()).valueOf());
		return false;
	});
	ko.applyBindings(new window[$('#js-login-content').children().attr('data-init')](window['initData']));
	$('.ko-loading').removeClass('ko-loading');
	$('.base-text input:text').each(function () {
		if ($.trim($(this).val()) == '') {
			$(this).parent().removeClass('base-text-has-content');
		} else {
			$(this).parent().addClass('base-text-has-content');
		}
	});
	var scan_timeout;
	$('#way').click(function () {
		if ($(this).hasClass('pc')) {
			$('#form').show();
			$('#wxbox').hide();
			$(this).removeClass('pc');
			clearTimeout(scan_timeout);
		} else {
			$('#form').hide();
			$('#wxbox').show();
			$(this).addClass('pc');
			scan_timeout = setTimeout(scanlogin, 1000);
		}
		return false;
	});
	function scanlogin() {
		$.ajax({
			url : '/login/qrcodelogin?a=login&url=' + $("#way").attr("url"),
			type : 'post',
			dataType : 'json',
			success : function (data) {
				if (data.IsSuccess) {}
				if (data.Message == 'login') {
					if (PAGE_MODE == 'dialog') {
						top.window.location.reload();
					} else {
						window.location.href = data.url;
					}
				} else if (data.Message == 1) {
					$(".error").hide();
					$(".success").show();
				} else if (data.Message == 2) {
					$(".error").show();
					$(".success").hide();
				} else if (data.Message == 3) {
					$(".error").show();
					$(".success").hide();
				}
				scan_timeout = setTimeout(scanlogin, 1000);
			}
		});
	}
	$('#wxbox .success a').click(function () {
		$('#form').show();
		$('#wxbox').hide();
		$('#way').removeClass('pc');
		$(".error").hide();
		$(".success").hide();
		var myDate = new Date();
		$('#wxbox img').attr('src', '/login/qrcodelogin?a=qr&' + myDate.getMilliseconds());
		clearTimeout(scan_timeout);
		return false;
	});
	$('#wxbox img,#wxbox p a:eq(0)').click(function () {
		var myDate = new Date();
		$(".error").hide();
		$(".success").hide();
		$('#wxbox img').attr('src', '/login/qrcodelogin?a=qr&' + myDate.getMilliseconds());
		return false;
	});
});
function dialogCallback(data, time) {
	if (data == '{}') {
		data = '{"time":"' + (new Date()).valueOf() + '"}';
	} else {
		data = data.replace(/}$/, ',"time":"' + (new Date()).valueOf() + '"}');
	}
	setTimeout(function () {
		$('#iframe-login-callback').attr('src', $('#iframe-login-callback').attr('src').split('#')[0] + '#' + encodeURIComponent(data)).width(dialogCallback.w += 100);
	}, time || 0);
};
dialogCallback.w = 0;
if (PAGE_MODE == 'dialog') {
	$(window).load(function () {
		var _setInterval = setInterval(function () {
				if (document.location.href.indexOf('#loaded') >= 0) {
					clearInterval(_setInterval);
					dialogCallback('{"act":"height","height":' + $('body').height() + '}');
				}
			}, 100);
		$('body').append('<iframe id="iframe-login-callback" srolling="no" src="http://' + (mainDomin || DOMIN.MAIN) + '/login/logincallback?callback=' + LOGINCALLBACK + '#' + encodeURIComponent('{"act":"loaded"}') + '"></iframe>');
		$('.v-error a.gologin').live('click', function () {
			dialogCallback('{"act":"gologin","username":"' + $(this).attr('data-username') + '"}');
			return false;
		});
	});
};