require.config({"config": {
 \" \" + s.item_clsd).addClass(s.item_leaf || \"jstree-no-icon\");\r\n\t\t\t\t\t}, this))\r\n\t\t\t\t.bind(\"select_node.jstree\", $.proxy(function (e, data) {\r\n\t\t\t\t\t\tdata.rslt.obj.children(\"a\").addClass(s.item_a);\r\n\t\t\t\t\t}, this))\r\n\t\t\t\t.bind(\"deselect_node.jstree deselect_all.jstree\", $.proxy(function (e, data) {\r\n\t\t\t\t\t\tthis.get_container()\r\n\t\t\t\t\t\t\t.find(\"a.\" + s.item_a).removeClass(s.item_a).end()\r\n\t\t\t\t\t\t\t.find(\"a.jstree-clicked\").addClass(s.item_a);\r\n\t\t\t\t\t}, this))\r\n\t\t\t\t.bind(\"dehover_node.jstree\", $.proxy(function (e, data) {\r\n\t\t\t\t\t\tdata.rslt.obj.children(\"a\").removeClass(s.item_h);\r\n\t\t\t\t\t}, this))\r\n\t\t\t\t.bind(\"hover_node.jstree\", $.proxy(function (e, data) {\r\n\t\t\t\t\t\tthis.get_container()\r\n\t\t\t\t\t\t\t.find(\"a.\" + s.item_h).not(data.rslt.obj).removeClass(s.item_h);\r\n\t\t\t\t\t\tdata.rslt.obj.children(\"a\").addClass(s.item_h);\r\n\t\t\t\t\t}, this))\r\n\t\t\t\t.bind(\"move_node.jstree\", $.proxy(function (e, data) {\r\n\t\t\t\t\t\tthis._themeroller(data.rslt.o);\r\n\t\t\t\t\t\tthis._themeroller(data.rslt.op);\r\n\t\t\t\t\t}, this));\r\n\t\t},\r\n\t\t__destroy : function () {\r\n\t\t\tvar s = this._get_settings().themeroller,\r\n\t\t\t\tc = [ \"ui-icon\" ];\r\n\t\t\t$.each(s, function (i, v) {\r\n\t\t\t\tv = v.split(\" \");\r\n\t\t\t\tif(v.length) { c = c.concat(v); }\r\n\t\t\t});\r\n\t\t\tthis.get_container()\r\n\t\t\t\t.removeClass(\"ui-widget-content\")\r\n\t\t\t\t.find(\".\" + c.join(\", .\")).removeClass(c.join(\" \"));\r\n\t\t},\r\n\t\t_fn : {\r\n\t\t\t_themeroller : function (obj) {\r\n\t\t\t\tvar s = this._get_settings().themeroller;\r\n\t\t\t\tobj = !obj || obj == -1 ? this.get_container_ul() : this._get_node(obj).parent();\r\n\t\t\t\tobj\r\n\t\t\t\t\t.find(\"li.jstree-closed\")\r\n\t\t\t\t\t\t.children(\"ins.jstree-icon\").removeClass(s.opened).addClass(\"ui-icon \" + s.closed).end()\r\n\t\t\t\t\t\t.children(\"a\").addClass(s.item)\r\n\t\t\t\t\t\t\t.children(\"ins.jstree-icon\").addClass(\"ui-icon\")\r\n\t\t\t\t\t\t\t\t.filter(function() {\r\n\t\t\t\t\t\t\t\t\treturn this.className.toString()\r\n\t\t\t\t\t\t\t\t\t\t.replace(s.item_clsd,\"\").replace(s.item_open,\"\").replace(s.item_leaf,\"\")\r\n\t\t\t\t\t\t\t\t\t\t.indexOf(\"ui-icon-\") === -1;\r\n\t\t\t\t\t\t\t\t}).removeClass(s.item_leaf + \" \" + s.item_open).addClass(s.item_clsd || \"jstree-no-icon\")\r\n\t\t\t\t\t\t\t\t.end()\r\n\t\t\t\t\t\t\t.end()\r\n\t\t\t\t\t\t.end()\r\n\t\t\t\t\t.end()\r\n\t\t\t\t\t.find(\"li.jstree-open\")\r\n\t\t\t\t\t\t.children(\"ins.jstree-icon\").removeClass(s.closed).addClass(\"ui-icon \" + s.opened).end()\r\n\t\t\t\t\t\t.children(\"a\").addClass(s.item)\r\n\t\t\t\t\t\t\t.children(\"ins.jstree-icon\").addClass(\"ui-icon\")\r\n\t\t\t\t\t\t\t\t.filter(function() {\r\n\t\t\t\t\t\t\t\t\treturn this.className.toString()\r\n\t\t\t\t\t\t\t\t\t\t.replace(s.item_clsd,\"\").replace(s.item_open,\"\").replace(s.item_leaf,\"\")\r\n\t\t\t\t\t\t\t\t\t\t.indexOf(\"ui-icon-\") === -1;\r\n\t\t\t\t\t\t\t\t}).removeClass(s.item_leaf + \" \" + s.item_clsd).addClass(s.item_open || \"jstree-no-icon\")\r\n\t\t\t\t\t\t\t\t.end()\r\n\t\t\t\t\t\t\t.end()\r\n\t\t\t\t\t\t.end()\r\n\t\t\t\t\t.end()\r\n\t\t\t\t\t.find(\"li.jstree-leaf\")\r\n\t\t\t\t\t\t.children(\"ins.jstree-icon\").removeClass(s.closed + \" ui-icon \" + s.opened).end()\r\n\t\t\t\t\t\t.children(\"a\").addClass(s.item)\r\n\t\t\t\t\t\t\t.children(\"ins.jstree-icon\").addClass(\"ui-icon\")\r\n\t\t\t\t\t\t\t\t.filter(function() {\r\n\t\t\t\t\t\t\t\t\treturn this.className.toString()\r\n\t\t\t\t\t\t\t\t\t\t.replace(s.item_clsd,\"\").replace(s.item_open,\"\").replace(s.item_leaf,\"\")\r\n\t\t\t\t\t\t\t\t\t\t.indexOf(\"ui-icon-\") === -1;\r\n\t\t\t\t\t\t\t\t}).removeClass(s.item_clsd + \" \" + s.item_open).addClass(s.item_leaf || \"jstree-no-icon\");\r\n\t\t\t}\r\n\t\t},\r\n\t\tdefaults : {\r\n\t\t\t\"opened\"\t: \"ui-icon-triangle-1-se\",\r\n\t\t\t\"closed\"\t: \"ui-icon-triangle-1-e\",\r\n\t\t\t\"item\"\t\t: \"ui-state-default\",\r\n\t\t\t\"item_h\"\t: \"ui-state-hover\",\r\n\t\t\t\"item_a\"\t: \"ui-state-active\",\r\n\t\t\t\"item_open\"\t: \"ui-icon-folder-open\",\r\n\t\t\t\"item_clsd\"\t: \"ui-icon-folder-collapsed\",\r\n\t\t\t\"item_leaf\"\t: \"ui-icon-document\"\r\n\t\t}\r\n\t});\r\n\t$(function() {\r\n\t\tvar css_string = '' +\r\n\t\t\t'.jstree-themeroller .ui-icon { overflow:visible; } ' +\r\n\t\t\t'.jstree-themeroller a { padding:0 2px; } ' +\r\n\t\t\t'.jstree-themeroller .jstree-no-icon { display:none; }';\r\n\t\t$.vakata.css.add_sheet({ str : css_string, title : \"jstree\" });\r\n\t});\r\n})(jQuery);\r\n//*/\r\n\r\n/*\r\n * jsTree unique plugin\r\n * Forces different names amongst siblings (still a bit experimental)\r\n * NOTE: does not check language versions (it will not be possible to have nodes with the same title, even in different languages)\r\n */\r\n(function ($) {\r\n\t$.jstree.plugin(\"unique\", {\r\n\t\t__init : function () {\r\n\t\t\tthis.get_container()\r\n\t\t\t\t.bind(\"before.jstree\", $.proxy(function (e, data) {\r\n\t\t\t\t\t\tvar nms = [], res = true, p, t;\r\n\t\t\t\t\t\tif(data.func == \"move_node\") {\r\n\t\t\t\t\t\t\t// obj, ref, position, is_copy, is_prepared, skip_check\r\n\t\t\t\t\t\t\tif(data.args[4] === true) {\r\n\t\t\t\t\t\t\t\tif(data.args[0].o && data.args[0].o.length) {\r\n\t\t\t\t\t\t\t\t\tdata.args[0].o.children(\"a\").each(function () { nms.push($(this).text().replace(/^\\s+/g,\"\")); });\r\n\t\t\t\t\t\t\t\t\tres = this._check_unique(nms, data.args[0].np.find(\"> ul > li\").not(data.args[0].o), \"move_node\");\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif(data.func == \"create_node\") {\r\n\t\t\t\t\t\t\t// obj, position, js, callback, is_loaded\r\n\t\t\t\t\t\t\tif(data.args[4] || this._is_loaded(data.args[0])) {\r\n\t\t\t\t\t\t\t\tp = this._get_node(data.args[0]);\r\n\t\t\t\t\t\t\t\tif(data.args[1] && (data.args[1] === \"before\" || data.args[1] === \"after\")) {\r\n\t\t\t\t\t\t\t\t\tp = this._get_parent(data.args[0]);\r\n\t\t\t\t\t\t\t\t\tif(!p || p === -1) { p = this.get_container(); }\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\tif(typeof data.args[2] === \"string\") { nms.push(data.args[2]); }\r\n\t\t\t\t\t\t\t\telse if(!data.args[2] || !data.args[2].data) { nms.push(this._get_string(\"new_node\")); }\r\n\t\t\t\t\t\t\t\telse { nms.push(data.args[2].data); }\r\n\t\t\t\t\t\t\t\tres = this._check_unique(nms, p.find(\"> ul > li\"), \"create_node\");\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif(data.func == \"rename_node\") {\r\n\t\t\t\t\t\t\t// obj, val\r\n\t\t\t\t\t\t\tnms.push(data.args[1]);\r\n\t\t\t\t\t\t\tt = this._get_node(data.args[0]);\r\n\t\t\t\t\t\t\tp = this._get_parent(t);\r\n\t\t\t\t\t\t\tif(!p || p === -1) { p = this.get_container(); }\r\n\t\t\t\t\t\t\tres = this._check_unique(nms, p.find(\"> ul > li\").not(t), \"rename_node\");\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif(!res) {\r\n\t\t\t\t\t\t\te.stopPropagation();\r\n\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}, this));\r\n\t\t},\r\n\t\tdefaults : {\r\n\t\t\terror_callback : $.noop\r\n\t\t},\r\n\t\t_fn : {\r\n\t\t\t_check_unique : function (nms, p, func) {\r\n\t\t\t\tvar cnms = [];\r\n\t\t\t\tp.children(\"a\").each(function () { cnms.push($(this).text().replace(/^\\s+/g,\"\")); });\r\n\t\t\t\tif(!cnms.length || !nms.length) { return true; }\r\n\t\t\t\tcnms = cnms.sort().join(\",,\").replace(/(,|^)([^,]+)(,,\\2)+(,|$)/g,\"$1$2$4\").replace(/,,+/g,\",\").replace(/,$/,\"\").split(\",\");\r\n\t\t\t\tif((cnms.length + nms.length) != cnms.concat(nms).sort().join(\",,\").replace(/(,|^)([^,]+)(,,\\2)+(,|$)/g,\"$1$2$4\").replace(/,,+/g,\",\").replace(/,$/,\"\").split(\",\").length) {\r\n\t\t\t\t\tthis._get_settings().unique.error_callback.call(null, nms, p, func);\r\n\t\t\t\t\treturn false;\r\n\t\t\t\t}\r\n\t\t\t\treturn true;\r\n\t\t\t},\r\n\t\t\tcheck_move : function () {\r\n\t\t\t\tif(!this.__call_old()) { return false; }\r\n\t\t\t\tvar p = this._get_move(), nms = [];\r\n\t\t\t\tif(p.o && p.o.length) {\r\n\t\t\t\t\tp.o.children(\"a\").each(function () { nms.push($(this).text().replace(/^\\s+/g,\"\")); });\r\n\t\t\t\t\treturn this._check_unique(nms, p.np.find(\"> ul > li\").not(p.o), \"check_move\");\r\n\t\t\t\t}\r\n\t\t\t\treturn true;\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n})(jQuery);\r\n//*/\r\n\r\n/*\r\n * jsTree wholerow plugin\r\n * Makes select and hover work on the entire width of the node\r\n * MAY BE HEAVY IN LARGE DOM\r\n */\r\n(function ($) {\r\n\t$.jstree.plugin(\"wholerow\", {\r\n\t\t__init : function () {\r\n\t\t\tif(!this.data.ui) { throw \"jsTree wholerow: jsTree UI plugin not included.\"; }\r\n\t\t\tthis.data.wholerow.html = false;\r\n\t\t\tthis.data.wholerow.to = false;\r\n\t\t\tthis.get_container()\r\n\t\t\t\t.bind(\"init.jstree\", $.proxy(function (e, data) {\r\n\t\t\t\t\t\tthis._get_settings().core.animation = 0;\r\n\t\t\t\t\t}, this))\r\n\t\t\t\t.bind(\"open_node.jstree create_node.jstree clean_node.jstree loaded.jstree\", $.proxy(function (e, data) {\r\n\t\t\t\t\t\tthis._prepare_wholerow_span( data && data.rslt && data.rslt.obj ? data.rslt.obj : -1 );\r\n\t\t\t\t\t}, this))\r\n\t\t\t\t.bind(\"search.jstree clear_search.jstree reopen.jstree after_open.jstree after_close.jstree create_node.jstree delete_node.jstree clean_node.jstree\", $.proxy(function (e, data) {\r\n\t\t\t\t\t\tif(this.data.to) { clearTimeout(this.data.to); }\r\n\t\t\t\t\t\tthis.data.to = setTimeout( (function (t, o) { return function() { t._prepare_wholerow_ul(o); }; })(this,  data && data.rslt && data.rslt.obj ? data.rslt.obj : -1), 0);\r\n\t\t\t\t\t}, this))\r\n\t\t\t\t.bind(\"deselect_all.jstree\", $.proxy(function (e, data) {\r\n\t\t\t\t\t\tthis.get_container().find(\" > .jstree-wholerow .jstree-clicked\").removeClass(\"jstree-clicked \" + (this.data.themeroller ? this._get_settings().themeroller.item_a : \"\" ));\r\n\t\t\t\t\t}, this))\r\n\t\t\t\t.bind(\"select_node.jstree deselect_node.jstree \", $.proxy(function (e, data) {\r\n\t\t\t\t\t\tdata.rslt.obj.each(function () {\r\n\t\t\t\t\t\t\tvar ref = data.inst.get_container().find(\" > .jstree-wholerow li:visible:eq(\" + ( parseInt((($(this).offset().top - data.inst.get_container().offset().top + data.inst.get_container()[0].scrollTop) / data.inst.data.core.li_height),10)) + \")\");\r\n\t\t\t\t\t\t\t// ref.children(\"a\")[e.type === \"select_node\" ? \"addClass\" : \"removeClass\"](\"jstree-clicked\");\r\n\t\t\t\t\t\t\tref.children(\"a\").attr(\"class\",data.rslt.obj.children(\"a\").attr(\"class\"));\r\n\t\t\t\t\t\t});\r\n\t\t\t\t\t}, this))\r\n\t\t\t\t.bind(\"hover_node.jstree dehover_node.jstree\", $.proxy(function (e, data) {\r\n\t\t\t\t\t\tthis.get_container().find(\" > .jstree-wholerow .jstree-hovered\").removeClass(\"jstree-hovered \" + (this.data.themeroller ? this._get_settings().themeroller.item_h : \"\" ));\r\n\t\t\t\t\t\tif(e.type === \"hover_node\") {\r\n\t\t\t\t\t\t\tvar ref = this.get_container().find(\" > .jstree-wholerow li:visible:eq(\" + ( parseInt(((data.rslt.obj.offset().top - this.get_container().offset().top + this.get_container()[0].scrollTop) / this.data.core.li_height),10)) + \")\");\r\n\t\t\t\t\t\t\t// ref.children(\"a\").addClass(\"jstree-hovered\");\r\n\t\t\t\t\t\t\tref.children(\"a\").attr(\"class\",data.rslt.obj.children(\".jstree-hovered\").attr(\"class\"));\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}, this))\r\n\t\t\t\t.delegate(\".jstree-wholerow-span, ins.jstree-icon, li\", \"click.jstree\", function (e) {\r\n\t\t\t\t\t\tvar n = $(e.currentTarget);\r\n\t\t\t\t\t\tif(e.target.tagName === \"A\" || (e.target.tagName === \"INS\" && n.closest(\"li\").is(\".jstree-open, .jstree-closed\"))) { return; }\r\n\t\t\t\t\t\tn.closest(\"li\").children(\"a:visible:eq(0)\").click();\r\n\t\t\t\t\t\te.stopImmediatePropagation();\r\n\t\t\t\t\t})\r\n\t\t\t\t.delegate(\"li\", \"mouseover.jstree\", $.proxy(function (e) {\r\n\t\t\t\t\t\te.stopImmediatePropagation();\r\n\t\t\t\t\t\tif($(e.currentTarget).children(\".jstree-hovered, .jstree-clicked\").length) { return false; }\r\n\t\t\t\t\t\tthis.hover_node(e.currentTarget);\r\n\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t}, this))\r\n\t\t\t\t.delegate(\"li\", \"mouseleave.jstree\", $.proxy(function (e) {\r\n\t\t\t\t\t\tif($(e.currentTarget).children(\"a\").hasClass(\"jstree-hovered\").length) { return; }\r\n\t\t\t\t\t\tthis.dehover_node(e.currentTarget);\r\n\t\t\t\t\t}, this));\r\n\t\t\tif(is_ie7 || is_ie6) {\r\n\t\t\t\t$.vakata.css.add_sheet({ str : \".jstree-\" + this.get_index() + \" { position:relative; } \", title : \"jstree\" });\r\n\t\t\t}\r\n\t\t},\r\n\t\tdefaults : {\r\n\t\t},\r\n\t\t__destroy : function () {\r\n\t\t\tthis.get_container().children(\".jstree-wholerow\").remove();\r\n\t\t\tthis.get_container().find(\".jstree-wholerow-span\").remove();\r\n\t\t},\r\n\t\t_fn : {\r\n\t\t\t_prepare_wholerow_span : function (obj) {\r\n\t\t\t\tobj = !obj || obj == -1 ? this.get_container().find(\"> ul > li\") : this._get_node(obj);\r\n\t\t\t\tif(obj === false) { return; } // added for removing root nodes\r\n\t\t\t\tobj.each(function () {\r\n\t\t\t\t\t$(this).find(\"li\").addBack().each(function () {\r\n\t\t\t\t\t\tvar $t = $(this);\r\n\t\t\t\t\t\tif($t.children(\".jstree-wholerow-span\").length) { return true; }\r\n\t\t\t\t\t\t$t.prepend(\"<span class='jstree-wholerow-span' style='width:\" + ($t.parentsUntil(\".jstree\",\"li\").length * 18) + \"px;'>&#160;</span>\");\r\n\t\t\t\t\t});\r\n\t\t\t\t});\r\n\t\t\t},\r\n\t\t\t_prepare_wholerow_ul : function () {\r\n\t\t\t\tvar o = this.get_container().children(\"ul\").eq(0), h = o.html();\r\n\t\t\t\to.addClass(\"jstree-wholerow-real\");\r\n\t\t\t\tif(this.data.wholerow.last_html !== h) {\r\n\t\t\t\t\tthis.data.wholerow.last_html = h;\r\n\t\t\t\t\tthis.get_container().children(\".jstree-wholerow\").remove();\r\n\t\t\t\t\tthis.get_container().append(\r\n\t\t\t\t\t\to.clone().removeClass(\"jstree-wholerow-real\")\r\n\t\t\t\t\t\t\t.wrapAll(\"<div class='jstree-wholerow' />\").parent()\r\n\t\t\t\t\t\t\t.width(o.parent()[0].scrollWidth)\r\n\t\t\t\t\t\t\t.css(\"top\", (o.height() + ( is_ie7 ? 5 : 0)) * -1 )\r\n\t\t\t\t\t\t\t.find(\"li[id]\").each(function () { this.removeAttribute(\"id\"); }).end()\r\n\t\t\t\t\t);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n\t$(function() {\r\n\t\tvar css_string = '' +\r\n\t\t\t'.jstree .jstree-wholerow-real { position:relative; z-index:1; } ' +\r\n\t\t\t'.jstree .jstree-wholerow-real li { cursor:pointer; } ' +\r\n\t\t\t'.jstree .jstree-wholerow-real a { border-left-color:transparent !important; border-right-color:transparent !important; } ' +\r\n\t\t\t'.jstree .jstree-wholerow { position:relative; z-index:0; height:0; } ' +\r\n\t\t\t'.jstree .jstree-wholerow ul, .jstree .jstree-wholerow li { width:100%; } ' +\r\n\t\t\t'.jstree .jstree-wholerow, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow li, .jstree .jstree-wholerow a { margin:0 !important; padding:0 !important; } ' +\r\n\t\t\t'.jstree .jstree-wholerow, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow li { background:transparent !important; }' +\r\n\t\t\t'.jstree .jstree-wholerow ins, .jstree .jstree-wholerow span, .jstree .jstree-wholerow input { display:none !important; }' +\r\n\t\t\t'.jstree .jstree-wholerow a, .jstree .jstree-wholerow a:hover { text-indent:-9999px; !important; width:100%; padding:0 !important; border-right-width:0px !important; border-left-width:0px !important; } ' +\r\n\t\t\t'.jstree .jstree-wholerow-span { position:absolute; left:0; margin:0px; padding:0; height:18px; border-width:0; padding:0; z-index:0; }';\r\n\t\tif(is_ff2) {\r\n\t\t\tcss_string += '' +\r\n\t\t\t\t'.jstree .jstree-wholerow a { display:block; height:18px; margin:0; padding:0; border:0; } ' +\r\n\t\t\t\t'.jstree .jstree-wholerow-real a { border-color:transparent !important; } ';\r\n\t\t}\r\n\t\tif(is_ie7 || is_ie6) {\r\n\t\t\tcss_string += '' +\r\n\t\t\t\t'.jstree .jstree-wholerow, .jstree .jstree-wholerow li, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow a { margin:0; padding:0; line-height:18px; } ' +\r\n\t\t\t\t'.jstree .jstree-wholerow a { display:block; height:18px; line-height:18px; overflow:hidden; } ';\r\n\t\t}\r\n\t\t$.vakata.css.add_sheet({ str : css_string, title : \"jstree\" });\r\n\t});\r\n})(jQuery);\r\n//*/\r\n\r\n/*\r\n* jsTree model plugin\r\n* This plugin gets jstree to use a class model to retrieve data, creating great dynamism\r\n*/\r\n(function ($) {\r\n\tvar nodeInterface = [\"getChildren\",\"getChildrenCount\",\"getAttr\",\"getName\",\"getProps\"],\r\n\t\tvalidateInterface = function(obj, inter) {\r\n\t\t\tvar valid = true;\r\n\t\t\tobj = obj || {};\r\n\t\t\tinter = [].concat(inter);\r\n\t\t\t$.each(inter, function (i, v) {\r\n\t\t\t\tif(!$.isFunction(obj[v])) { valid = false; return false; }\r\n\t\t\t});\r\n\t\t\treturn valid;\r\n\t\t};\r\n\t$.jstree.plugin(\"model\", {\r\n\t\t__init : function () {\r\n\t\t\tif(!this.data.json_data) { throw \"jsTree model: jsTree json_data plugin not included.\"; }\r\n\t\t\tthis._get_settings().json_data.data = function (n, b) {\r\n\t\t\t\tvar obj = (n == -1) ? this._get_settings().model.object : n.data(\"jstree_model\");\r\n\t\t\t\tif(!validateInterface(obj, nodeInterface)) { return b.call(null, false); }\r\n\t\t\t\tif(this._get_settings().model.async) {\r\n\t\t\t\t\tobj.getChildren($.proxy(function (data) {\r\n\t\t\t\t\t\tthis.model_done(data, b);\r\n\t\t\t\t\t}, this));\r\n\t\t\t\t}\r\n\t\t\t\telse {\r\n\t\t\t\t\tthis.model_done(obj.getChildren(), b);\r\n\t\t\t\t}\r\n\t\t\t};\r\n\t\t},\r\n\t\tdefaults : {\r\n\t\t\tobject : false,\r\n\t\t\tid_prefix : false,\r\n\t\t\tasync : false\r\n\t\t},\r\n\t\t_fn : {\r\n\t\t\tmodel_done : function (data, callback) {\r\n\t\t\t\tvar ret = [],\r\n\t\t\t\t\ts = this._get_settings(),\r\n\t\t\t\t\t_this = this;\r\n\r\n\t\t\t\tif(!$.isArray(data)) { data = [data]; }\r\n\t\t\t\t$.each(data, function (i, nd) {\r\n\t\t\t\t\tvar r = nd.getProps() || {};\r\n\t\t\t\t\tr.attr = nd.getAttr() || {};\r\n\t\t\t\t\tif(nd.getChildrenCount()) { r.state = \"closed\"; }\r\n\t\t\t\t\tr.data = nd.getName();\r\n\t\t\t\t\tif(!$.isArray(r.data)) { r.data = [r.data]; }\r\n\t\t\t\t\tif(_this.data.types && $.isFunction(nd.getType)) {\r\n\t\t\t\t\t\tr.attr[s.types.type_attr] = nd.getType();\r\n\t\t\t\t\t}\r\n\t\t\t\t\tif(r.attr.id && s.model.id_prefix) { r.attr.id = s.model.id_prefix + r.attr.id; }\r\n\t\t\t\t\tif(!r.metadata) { r.metadata = { }; }\r\n\t\t\t\t\tr.metadata.jstree_model = nd;\r\n\t\t\t\t\tret.push(r);\r\n\t\t\t\t});\r\n\t\t\t\tcallback.call(null, ret);\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n})(jQuery);\r\n//*/\r\n\r\n\r\n/*\r\n * jsTree checkbox plugin copy-paste\r\n * change_state method was modified\r\n * refactoring is needed after update to a newer version of jstree, that supports plugin extending\r\n */\r\n(function ($) {\r\n    $.jstree.plugin(\"vcheckbox\", {\r\n        __init : function () {\r\n            this.data.vcheckbox.noui = this._get_settings().vcheckbox.override_ui;\r\n            if(this.data.ui && this.data.vcheckbox.noui) {\r\n                this.select_node = this.deselect_node = this.deselect_all = $.noop;\r\n                this.get_selected = this.get_checked;\r\n            }\r\n\r\n            this.get_container()\r\n                .bind(\"open_node.jstree create_node.jstree clean_node.jstree refresh.jstree\", $.proxy(function (e, data) {\r\n                    this._prepare_checkboxes(data.rslt.obj);\r\n                }, this))\r\n                .bind(\"loaded.jstree\", $.proxy(function (e) {\r\n                    this._prepare_checkboxes();\r\n                }, this))\r\n                .delegate( (this.data.ui && this.data.vcheckbox.noui ? \"a\" : \"ins.jstree-checkbox\") , \"click.jstree\", $.proxy(function (e) {\r\n                    e.preventDefault();\r\n                    if(this._get_node(e.target).hasClass(\"jstree-checked\")) { this.uncheck_node(e.target); }\r\n                    else { this.check_node(e.target); }\r\n                    if(this.data.ui && this.data.vcheckbox.noui) {\r\n                        this.save_selected();\r\n                        if(this.data.cookies) { this.save_cookie(\"select_node\"); }\r\n                    }\r\n                    else {\r\n                        e.stopImmediatePropagation();\r\n                        return false;\r\n                    }\r\n                }, this));\r\n        },\r\n        defaults : {\r\n            override_ui : false,\r\n            two_state : false,\r\n            real_checkboxes : false,\r\n            checked_parent_open : true,\r\n            real_checkboxes_names : function (n) { return [ (\"check_\" + (n[0].id || Math.ceil(Math.random() * 10000))) , 1]; }\r\n        },\r\n        __destroy : function () {\r\n            this.get_container()\r\n                .find(\"input.jstree-real-checkbox\").removeClass(\"jstree-real-checkbox\").end()\r\n                .find(\"ins.jstree-checkbox\").remove();\r\n        },\r\n        _fn : {\r\n            _checkbox_notify : function (n, data) {\r\n                if(data.checked) {\r\n                    this.check_node(n, false);\r\n                }\r\n            },\r\n            _prepare_checkboxes : function (obj) {\r\n                obj = !obj || obj == -1 ? this.get_container().find(\"> ul > li\") : this._get_node(obj);\r\n                if(obj === false) { return; } // added for removing root nodes\r\n                var c, _this = this, t, ts = this._get_settings().vcheckbox.two_state, rc = this._get_settings().vcheckbox.real_checkboxes, rcn = this._get_settings().vcheckbox.real_checkboxes_names;\r\n                obj.each(function () {\r\n                    t = $(this);\r\n                    c = t.is(\"li\") && (t.hasClass(\"jstree-checked\") || (rc && t.children(\":checked\").length)) ? \"jstree-checked\" : \"jstree-unchecked\";\r\n                    t.find(\"li\").addBack().each(function () {\r\n                        var $t = $(this), nm;\r\n                        $t.children(\"a\" + (_this.data.languages ? \"\" : \":eq(0)\") ).not(\":has(.jstree-checkbox)\").prepend(\"<ins class='jstree-checkbox'>&#160;</ins>\").parent().not(\".jstree-checked, .jstree-unchecked\").addClass( ts ? \"jstree-unchecked\" : c );\r\n                        if(rc) {\r\n                            if(!$t.children(\":checkbox\").length) {\r\n                                nm = rcn.call(_this, $t);\r\n                                $t.prepend(\"<input type='checkbox' class='jstree-real-checkbox' id='\" + nm[0] + \"' name='\" + nm[0] + \"' value='\" + nm[1] + \"' />\");\r\n                            }\r\n                            else {\r\n                                $t.children(\":checkbox\").addClass(\"jstree-real-checkbox\");\r\n                            }\r\n                        }\r\n                        if(!ts) {\r\n                            if(c === \"jstree-checked\" || $t.hasClass(\"jstree-checked\") || $t.children(':checked').length) {\r\n                                $t.find(\"li\").addBack().addClass(\"jstree-checked\").children(\":checkbox\").prop(\"checked\", true);\r\n                            }\r\n                        }\r\n                        else {\r\n                            if($t.hasClass(\"jstree-checked\") || $t.children(':checked').length) {\r\n                                $t.addClass(\"jstree-checked\").children(\":checkbox\").prop(\"checked\", true);\r\n                            }\r\n                        }\r\n                    });\r\n                });\r\n                if(!ts) {\r\n                    obj.find(\".jstree-checked\").parent().parent().each(function () { _this._repair_state(this); });\r\n                }\r\n            },\r\n            change_state : function (obj, state) {\r\n                obj = this._get_node(obj);\r\n                var coll = false, rc = this._get_settings().vcheckbox.real_checkboxes;\r\n                if(!obj || obj === -1) { return false; }\r\n                state = (state === false || state === true) ? state : obj.hasClass(\"jstree-checked\");\r\n                if(this._get_settings().vcheckbox.two_state) {\r\n                    if(state) {\r\n                        coll = obj.find(\"li\").addBack();\r\n                        if(!coll.filter(\".jstree-checked\").length) { return false; }\r\n                        coll.removeClass(\"jstree-checked\").addClass(\"jstree-unchecked\");\r\n                        if(rc) { coll.children(\":checkbox\").prop(\"checked\", false); }\r\n                    }\r\n                    else {\r\n                        coll = obj.find(\"li\").addBack();\r\n                        if(!coll.filter(\".jstree-unchecked\").length) { return false; }\r\n                        coll.removeClass(\"jstree-unchecked\").addClass(\"jstree-checked\");\r\n                        if(rc) { coll.children(\":checkbox\").prop(\"checked\", true); }\r\n                        if(this.data.ui) { this.data.ui.last_selected = obj; }\r\n                        this.data.vcheckbox.last_selected = obj;\r\n                    }\r\n                    obj.parentsUntil(\".jstree\", \"li\").each(function () {\r\n                        var $this = $(this);\r\n                        if(state) {\r\n                            if($this.children(\"ul\").children(\"li.jstree-checked\").length) {\r\n                                $this.parentsUntil(\".jstree\", \"li\").addBack().removeClass(\"jstree-unchecked\").addClass(\"jstree-checked\");\r\n                                if(rc) { $this.parentsUntil(\".jstree\", \"li\").addBack().children(\":checkbox\").prop(\"checked\", true); }\r\n                                return false;\r\n                            }\r\n                        }\r\n                        else {\r\n                            if($this.children(\"ul\").children(\"li.jstree-unchecked\").length) {\r\n                                $this.parentsUntil(\".jstree\", \"li\").addBack().removeClass(\"jstree-unchecked\").addClass(\"jstree-checked\");\r\n                                if(rc) { $this.parentsUntil(\".jstree\", \"li\").addBack().children(\":checkbox\").prop(\"checked\", true); }\r\n                                return false;\r\n                            }\r\n                            else {\r\n                                $this.removeClass(\"jstree-unchecked\").addClass(\"jstree-checked\");\r\n                                if(rc) { $this.children(\":checkbox\").prop(\"checked\", true); }\r\n                            }\r\n                        }\r\n                    });\r\n                }\r\n                else {\r\n                    if(state) {\r\n                        coll = obj.find(\"li\").addBack();\r\n                        if(!coll.filter(\".jstree-checked, .jstree-undetermined\").length) { return false; }\r\n                        coll.removeClass(\"jstree-checked jstree-undetermined\").addClass(\"jstree-unchecked\");\r\n                        if(rc) { coll.children(\":checkbox\").prop(\"checked\", false); }\r\n                    }\r\n                    else {\r\n                        coll = obj.find(\"li\").addBack();\r\n                        if(!coll.filter(\".jstree-unchecked, .jstree-undetermined\").length) { return false; }\r\n                        coll.removeClass(\"jstree-unchecked jstree-undetermined\").addClass(\"jstree-checked\");\r\n                        if(rc) { coll.children(\":checkbox\").prop(\"checked\", true); }\r\n                        if(this.data.ui) { this.data.ui.last_selected = obj; }\r\n                        this.data.vcheckbox.last_selected = obj;\r\n                    }\r\n                    obj.parentsUntil(\".jstree\", \"li\").each(function () {\r\n                        var $this = $(this);\r\n                        if(state) {\r\n                            if($this.children(\"ul\").children(\"li.jstree-checked, li.jstree-undetermined\").length) {\r\n                                $this.parentsUntil(\".jstree\", \"li\").addBack().removeClass(\"jstree-checked jstree-unchecked\").addClass(\"jstree-undetermined\");\r\n                                if(rc) { $this.parentsUntil(\".jstree\", \"li\").addBack().children(\":checkbox\").prop(\"checked\", false); }\r\n                                return false;\r\n                            }\r\n                            else {\r\n                                $this.removeClass(\"jstree-checked jstree-undetermined\").addClass(\"jstree-unchecked\");\r\n                                if(rc) { $this.children(\":checkbox\").prop(\"checked\", false); }\r\n                            }\r\n                        }\r\n                        else {\r\n                            if($this.children(\"ul\").children(\"li.jstree-unchecked, li.jstree-undetermined\").length) {\r\n                                $this.parentsUntil(\".jstree\", \"li\").addBack().removeClass(\"jstree-checked jstree-unchecked\").addClass(\"jstree-undetermined\");\r\n                                if(rc) { $this.parentsUntil(\".jstree\", \"li\").addBack().children(\":checkbox\").prop(\"checked\", false); }\r\n                                return false;\r\n                            }\r\n                            else {\r\n                                $this.removeClass(\"jstree-unchecked jstree-undetermined\").addClass(\"jstree-checked\");\r\n                                if(rc) { $this.children(\":checkbox\").prop(\"checked\", true); }\r\n                            }\r\n                        }\r\n                    });\r\n                }\r\n                if(this.data.ui && this.data.vcheckbox.noui) { this.data.ui.selected = this.get_checked(); }\r\n                this.__callback(obj);\r\n                return true;\r\n            },\r\n            check_node : function (obj) {\r\n                if(this.change_state(obj, false)) {\r\n                    obj = this._get_node(obj);\r\n                    if(this._get_settings().vcheckbox.checked_parent_open) {\r\n                        var t = this;\r\n                        obj.parents(\".jstree-closed\").each(function () { t.open_node(this, false, true); });\r\n                    }\r\n                    this.__callback({ \"obj\" : obj });\r\n                }\r\n            },\r\n            uncheck_node : function (obj) {\r\n                if(this.change_state(obj, true)) { this.__callback({ \"obj\" : this._get_node(obj) }); }\r\n            },\r\n            check_all : function () {\r\n                var _this = this,\r\n                    coll = this._get_settings().vcheckbox.two_state ? this.get_container_ul().find(\"li\") : this.get_container_ul().children(\"li\");\r\n                coll.each(function () {\r\n                    _this.change_state(this, false);\r\n                });\r\n                this.__callback();\r\n            },\r\n            uncheck_all : function () {\r\n                var _this = this,\r\n                    coll = this._get_settings().vcheckbox.two_state ? this.get_container_ul().find(\"li\") : this.get_container_ul().children(\"li\");\r\n                coll.each(function () {\r\n                    _this.change_state(this, true);\r\n                });\r\n                this.__callback();\r\n            },\r\n\r\n            is_checked : function(obj) {\r\n                obj = this._get_node(obj);\r\n                return obj.length ? obj.is(\".jstree-checked\") : false;\r\n            },\r\n            get_checked : function (obj, get_all) {\r\n                obj = !obj || obj === -1 ? this.get_container() : this._get_node(obj);\r\n                return get_all || this._get_settings().vcheckbox.two_state ? obj.find(\".jstree-checked\") : obj.find(\"> ul > .jstree-checked, .jstree-undetermined > ul > .jstree-checked\");\r\n            },\r\n            get_unchecked : function (obj, get_all) {\r\n                obj = !obj || obj === -1 ? this.get_container() : this._get_node(obj);\r\n                return get_all || this._get_settings().vcheckbox.two_state ? obj.find(\".jstree-unchecked\") : obj.find(\"> ul > .jstree-unchecked, .jstree-undetermined > ul > .jstree-unchecked\");\r\n            },\r\n\r\n            show_checkboxes : function () { this.get_container().children(\"ul\").removeClass(\"jstree-no-checkboxes\"); },\r\n            hide_checkboxes : function () { this.get_container().children(\"ul\").addClass(\"jstree-no-checkboxes\"); },\r\n\r\n            _repair_state : function (obj) {\r\n                obj = this._get_node(obj);\r\n                if(!obj.length) { return; }\r\n                if(this._get_settings().vcheckbox.two_state) {\r\n                    obj.find('li').addBack().not('.jstree-checked').removeClass('jstree-undetermined').addClass('jstree-unchecked').children(':checkbox').prop('checked', true);\r\n                    return;\r\n                }\r\n                var rc = this._get_settings().vcheckbox.real_checkboxes,\r\n                    a = obj.find(\"> ul > .jstree-checked\").length,\r\n                    b = obj.find(\"> ul > .jstree-undetermined\").length,\r\n                    c = obj.find(\"> ul > li\").length;\r\n                if(c === 0) { if(obj.hasClass(\"jstree-undetermined\")) { this.change_state(obj, false); } }\r\n                else if(a === 0 && b === 0) { this.change_state(obj, true); }\r\n                else if(a === c) { this.change_state(obj, false); }\r\n                else {\r\n                    obj.parentsUntil(\".jstree\",\"li\").addBack().removeClass(\"jstree-checked jstree-unchecked\").addClass(\"jstree-undetermined\");\r\n                    if(rc) { obj.parentsUntil(\".jstree\", \"li\").addBack().children(\":checkbox\").prop(\"checked\", false); }\r\n                }\r\n            },\r\n            reselect : function () {\r\n                if(this.data.ui && this.data.vcheckbox.noui) {\r\n                    var _this = this,\r\n                        s = this.data.ui.to_select;\r\n                    s = $.map($.makeArray(s), function (n) { return \"#\" + n.toString().replace(/^#/,\"\").replace(/\\\\\\//g,\"/\").replace(/\\//g,\"\\\\\\/\").replace(/\\\\\\./g,\".\").replace(/\\./g,\"\\\\.\").replace(/\\:/g,\"\\\\:\"); });\r\n                    this.deselect_all();\r\n                    $.each(s, function (i, val) { _this.check_node(val); });\r\n                    this.__callback();\r\n                }\r\n                else {\r\n                    this.__call_old();\r\n                }\r\n            },\r\n            save_loaded : function () {\r\n                var _this = this;\r\n                this.data.core.to_load = [];\r\n                this.get_container_ul().find(\"li.jstree-closed.jstree-undetermined\").each(function () {\r\n                    if(this.id) { _this.data.core.to_load.push(\"#\" + this.id); }\r\n                });\r\n            }\r\n        }\r\n    });\r\n    $(function() {\r\n        var css_string = '.jstree .jstree-real-checkbox { display:none; } ';\r\n        $.vakata.css.add_sheet({ str : css_string, title : \"jstree\" });\r\n    });\r\n})(jQuery);\r\n\r\n\r\n})();\r\n\r\n}));","jquery/patches/jquery.js":"/**\r\n * Copyright \u00a9 Magento, Inc. All rights reserved.\r\n * See COPYING.txt for license details.\r\n */\r\n\r\ndefine([], function () {\r\n    'use strict';\r\n\r\n    /**\r\n     * Patch for CVE-2015-9251 (XSS vulnerability).\r\n     * Can safely remove only when jQuery UI is upgraded to >= 3.3.x.\r\n     * https://www.cvedetails.com/cve/CVE-2015-9251/\r\n     */\r\n    function ajaxResponsePatch(jQuery) {\r\n        jQuery.ajaxPrefilter(function (s) {\r\n            if (s.crossDomain) {\r\n                s.contents.script = false;\r\n            }\r\n        });\r\n    }\r\n\r\n    return function ($) {\r\n        var majorVersion = $.fn.jquery.split('.')[0];\r\n\r\n        if (majorVersion >= 3) {\r\n            console.warn('jQuery patch for CVE-2015-9251 is no longer necessary, and should be removed');\r\n        }\r\n\r\n        ajaxResponsePatch($);\r\n\r\n        return $;\r\n    };\r\n});\r\n"}
}});