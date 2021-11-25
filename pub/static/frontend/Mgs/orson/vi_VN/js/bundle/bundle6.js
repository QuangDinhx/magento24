require.config({"config": {
        "jsbuild":{"MGS_StoreLocator/js/storelocator.js":"/**\n * Locate store on gogle map\n * \n * @category    design\n * @package     base_default\n * @author      MGS Magento Team\n */\n\n/**\n * Return parameters for back url\n *\n * @param  storeLat latitude\n * @param  storeLong logitude\n * @param  storeRadius store radius\n * @param  storeZoomLevel google map zoom level\n * @param  storeInfoText display infobox on google map\n * @return null\n */\nfunction initializeMap(storeLat, storeLong, storeRadius, storeInfoText, googleMapDivId)\n{\n\tstoreInfoText = storeInfoText.replace(/-quotation-/g, '\"');\n    var myCenter = new google.maps.LatLng(storeLat, storeLong);\n    //convert distance from miles to meters\n    var storeRadius = storeRadius * 1609.34;\n    var mapProp = {\n      center : myCenter,\n      zoom : 14,\n      mapTypeId : google.maps.MapTypeId.ROADMAP  \n      };\n\n    var map = new google.maps.Map(document.getElementById(googleMapDivId), mapProp);\n\n    //Draw marker\n    var marker = new google.maps.Marker({\n      position : myCenter,\n      });\n    marker.setMap(map);\n\n    //Draw circle radius is in meter\n    if(storeRadius) {\n        var myCity = new google.maps.Circle({\n            center : myCenter,\n            radius : storeRadius,\n            strokeOpacity : 0.8,\n            strokeWeight : 1,\n            fillOpacity : 0\n        });\n        myCity.setMap(map);\n    }\n    \n    // Open information window\n    if(storeInfoText) {\n        var infowindow = new google.maps.InfoWindow({\n            content:storeInfoText\n        });\n    infowindow.open(map, marker);\n    }\n}\n\n/**\n * add multiple stores on google map\n *\n * @param array markers markers\n * @param string googleMapDivId div id\n */\nfunction drawMap(markers, googleMapDivId)\n{\n    var map;\n    var bounds = new google.maps.LatLngBounds();\n    var mapOptions = {\n        mapTypeId: 'roadmap'\n    };\n                    \n    // Display a map on the page\n    map = new google.maps.Map(document.getElementById(''+googleMapDivId), mapOptions);\n    map.setTilt(45);\n                        \n    // Display multiple markers on a map\n    var infoWindow = new google.maps.InfoWindow(), marker, i;\n    \n    // Loop through our array of markers & place each one on the map  \n    for( i = 0; i < markers.length; i++ ) {\n        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);\n        bounds.extend(position);\n        marker = new google.maps.Marker({\n            position: position,\n            map: map,\n            title: markers[i][0]\n        });\n        \n        // Allow each marker to have an info window    \n        google.maps.event.addListener(marker, 'click', (function(marker, i) {\n            return function() {\n                infoWindow.setContent(markers[i][0]);\n                infoWindow.open(map, marker);\n            }\n        })(marker, i));\n\n        // Automatically center the map fitting all markers on the screen\n        map.fitBounds(bounds);\n    }\n\t\n}\n\n\n\nfunction drawMapWithCircle(markers, googleMapDivId, lat, longa, radius, image)\n{\n\tvar bounds = new google.maps.LatLngBounds();\n\tvar mapOptions = {\n\t\tcenter: new google.maps.LatLng(lat, longa)\n\t  };\n\n\tvar map = new google.maps.Map(document.getElementById(googleMapDivId), mapOptions);\n\tvar infoWindow = new google.maps.InfoWindow(), marker, i;\n\t\n\tfor( i = 0; i < markers.length; i++ ) {\n        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);\n        bounds.extend(position);\n        marker = new google.maps.Marker({\n            position: position,\n            map: map,\n            title: markers[i][0]\n        });\n        \n        // Allow each marker to have an info window    \n        google.maps.event.addListener(marker, 'click', (function(marker, i) {\n            return function() {\n                infoWindow.setContent(markers[i][0]);\n                infoWindow.open(map, marker);\n            }\n        })(marker, i));\n\n        // Automatically center the map fitting all markers on the screen\n    }\n\t\n\tvar marker = new google.maps.Marker({\n\t  position: new google.maps.LatLng(lat, longa),\n\t  map: map,\n\t  icon: image\n\t});\n\t\n\tvar circ = new google.maps.Circle();\n    circ.setRadius(radius * 1609.0);\n    circ.setCenter(new google.maps.LatLng(lat, longa));\n    map.setCenter(new google.maps.LatLng(lat, longa));\n\t\n    map.fitBounds(circ.getBounds());\n\n    // updates markers\n    google.maps.event.trigger(map,'dragend');\n\t\n\tvar citymap = {};\n\tcitymap['chicago'] = {\n\t  center: new google.maps.LatLng(lat, longa)\n\t};\n\n\tvar cityCircle;\n\t\n\tfor (var city in citymap) {\n\t\tvar populationOptions = {\n\t\t\tstrokeColor: '#FF0000',\n\t\t\tstrokeOpacity: 0.8,\n\t\t\tstrokeWeight: 1,\n\t\t\tfillColor: '#FF0000',\n\t\t\tfillOpacity: 0.1,\n\t\t\tmap: map,\n\t\t\tcenter: citymap[city].center,\n\t\t\tradius: radius * 1609.0\n\t\t};\n\t\t// Add the circle for this city to the map.\n\t\tcityCircle = new google.maps.Circle(populationOptions);\n\t}\n\n}","requirejs/domReady.js":"/**\r\n * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.\r\n * Available via the MIT or new BSD license.\r\n * see: http://github.com/requirejs/domReady for details\r\n */\r\n/*jslint */\r\n/*global require: false, define: false, requirejs: false,\r\n  window: false, clearInterval: false, document: false,\r\n  self: false, setInterval: false */\r\n\r\n\r\ndefine(function () {\r\n    'use strict';\r\n\r\n    var isTop, testDiv, scrollIntervalId,\r\n        isBrowser = typeof window !== \"undefined\" && window.document,\r\n        isPageLoaded = !isBrowser,\r\n        doc = isBrowser ? document : null,\r\n        readyCalls = [];\r\n\r\n    function runCallbacks(callbacks) {\r\n        var i;\r\n        for (i = 0; i < callbacks.length; i += 1) {\r\n            callbacks[i](doc);\r\n        }\r\n    }\r\n\r\n    function callReady() {\r\n        var callbacks = readyCalls;\r\n\r\n        if (isPageLoaded) {\r\n            //Call the DOM ready callbacks\r\n            if (callbacks.length) {\r\n                readyCalls = [];\r\n                runCallbacks(callbacks);\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Sets the page as loaded.\r\n     */\r\n    function pageLoaded() {\r\n        if (!isPageLoaded) {\r\n            isPageLoaded = true;\r\n            if (scrollIntervalId) {\r\n                clearInterval(scrollIntervalId);\r\n            }\r\n\r\n            callReady();\r\n        }\r\n    }\r\n\r\n    if (isBrowser) {\r\n        if (document.addEventListener) {\r\n            //Standards. Hooray! Assumption here that if standards based,\r\n            //it knows about DOMContentLoaded.\r\n            document.addEventListener(\"DOMContentLoaded\", pageLoaded, false);\r\n            window.addEventListener(\"load\", pageLoaded, false);\r\n        } else if (window.attachEvent) {\r\n            window.attachEvent(\"onload\", pageLoaded);\r\n\r\n            testDiv = document.createElement('div');\r\n            try {\r\n                isTop = window.frameElement === null;\r\n            } catch (e) {}\r\n\r\n            //DOMContentLoaded approximation that uses a doScroll, as found by\r\n            //Diego Perini: http://javascript.nwbox.com/IEContentLoaded/,\r\n            //but modified by other contributors, including jdalton\r\n            if (testDiv.doScroll && isTop && window.external) {\r\n                scrollIntervalId = setInterval(function () {\r\n                    try {\r\n                        testDiv.doScroll();\r\n                        pageLoaded();\r\n                    } catch (e) {}\r\n                }, 30);\r\n            }\r\n        }\r\n\r\n        //Check if document is no longer loading, and if so, just trigger page load\r\n        //listeners. Latest webkit browsers also use \"interactive\", and\r\n        //will fire the onDOMContentLoaded before \"interactive\" but not after\r\n        //entering \"interactive\" or \"complete\". More details:\r\n        //http://dev.w3.org/html5/spec/the-end.html#the-end\r\n        //http://stackoverflow.com/questions/3665561/document-readystate-of-interactive-vs-ondomcontentloaded\r\n        //Hmm, this is more complicated on further use, see \"firing too early\"\r\n        //bug: https://github.com/requirejs/domReady/issues/1\r\n        //so removing the || document.readyState === \"interactive\" test.\r\n        //There is still a window.onload binding that should get fired if\r\n        //DOMContentLoaded is missed.\r\n        if (document.readyState !== \"loading\") {\r\n            // Handle it asynchronously to allow scripts the opportunity to delay ready\r\n            setTimeout(pageLoaded);\r\n        }\r\n    }\r\n\r\n    /** START OF PUBLIC API **/\r\n\r\n    /**\r\n     * Registers a callback for DOM ready. If DOM is already ready, the\r\n     * callback is called immediately.\r\n     * @param {Function} callback\r\n     */\r\n    function domReady(callback) {\r\n        if (isPageLoaded) {\r\n            callback(doc);\r\n        } else {\r\n            readyCalls.push(callback);\r\n        }\r\n        return domReady;\r\n    }\r\n\r\n    domReady.version = '2.0.1';\r\n\r\n    /**\r\n     * Loader Plugin API method\r\n     */\r\n    domReady.load = function (name, req, onLoad, config) {\r\n        if (config.isBuild) {\r\n            onLoad(null);\r\n        } else {\r\n            domReady(onLoad);\r\n        }\r\n    };\r\n\r\n    /** END OF PUBLIC API **/\r\n\r\n    return domReady;\r\n});\r\n","requirejs/text.js":"/**\r\n * @license RequireJS text 2.0.12 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.\r\n * Available via the MIT or new BSD license.\r\n * see: http://github.com/requirejs/text for details\r\n */\r\n/*jslint regexp: true */\r\n/*global require, XMLHttpRequest, ActiveXObject,\r\n  define, window, process, Packages,\r\n  java, location, Components, FileUtils */\r\n\r\ndefine(['module'], function (module) {\r\n    'use strict';\r\n\r\n    var text, fs, Cc, Ci, xpcIsWindows,\r\n        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],\r\n        xmlRegExp = /^\\s*<\\?xml(\\s)+version=[\\'\\\"](\\d)*.(\\d)*[\\'\\\"](\\s)*\\?>/im,\r\n        bodyRegExp = /<body[^>]*>\\s*([\\s\\S]+)\\s*<\\/body>/im,\r\n        hasLocation = typeof location !== 'undefined' && location.href,\r\n        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\\:/, ''),\r\n        defaultHostName = hasLocation && location.hostname,\r\n        defaultPort = hasLocation && (location.port || undefined),\r\n        buildMap = {},\r\n        masterConfig = (module.config && module.config()) || {};\r\n\r\n    text = {\r\n        version: '2.0.12',\r\n\r\n        strip: function (content) {\r\n            //Strips <?xml ...?> declarations so that external SVG and XML\r\n            //documents can be added to a document without worry. Also, if the string\r\n            //is an HTML document, only the part inside the body tag is returned.\r\n            if (content) {\r\n                content = content.replace(xmlRegExp, \"\");\r\n                var matches = content.match(bodyRegExp);\r\n                if (matches) {\r\n                    content = matches[1];\r\n                }\r\n            } else {\r\n                content = \"\";\r\n            }\r\n            return content;\r\n        },\r\n\r\n        jsEscape: function (content) {\r\n            return content.replace(/(['\\\\])/g, '\\\\$1')\r\n                .replace(/[\\f]/g, \"\\\\f\")\r\n                .replace(/[\\b]/g, \"\\\\b\")\r\n                .replace(/[\\n]/g, \"\\\\n\")\r\n                .replace(/[\\t]/g, \"\\\\t\")\r\n                .replace(/[\\r]/g, \"\\\\r\")\r\n                .replace(/[\\u2028]/g, \"\\\\u2028\")\r\n                .replace(/[\\u2029]/g, \"\\\\u2029\");\r\n        },\r\n\r\n        createXhr: masterConfig.createXhr || function () {\r\n            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.\r\n            var xhr, i, progId;\r\n            if (typeof XMLHttpRequest !== \"undefined\") {\r\n                return new XMLHttpRequest();\r\n            } else if (typeof ActiveXObject !== \"undefined\") {\r\n                for (i = 0; i < 3; i += 1) {\r\n                    progId = progIds[i];\r\n                    try {\r\n                        xhr = new ActiveXObject(progId);\r\n                    } catch (e) {}\r\n\r\n                    if (xhr) {\r\n                        progIds = [progId];  // so faster next time\r\n                        break;\r\n                    }\r\n                }\r\n            }\r\n\r\n            return xhr;\r\n        },\r\n\r\n        /**\r\n         * Parses a resource name into its component parts. Resource names\r\n         * look like: module/name.ext!strip, where the !strip part is\r\n         * optional.\r\n         * @param {String} name the resource name\r\n         * @returns {Object} with properties \"moduleName\", \"ext\" and \"strip\"\r\n         * where strip is a boolean.\r\n         */\r\n        parseName: function (name) {\r\n            var modName, ext, temp,\r\n                strip = false,\r\n                index = name.indexOf(\".\"),\r\n                isRelative = name.indexOf('./') === 0 ||\r\n                             name.indexOf('../') === 0;\r\n\r\n            if (index !== -1 && (!isRelative || index > 1)) {\r\n                modName = name.substring(0, index);\r\n                ext = name.substring(index + 1, name.length);\r\n            } else {\r\n                modName = name;\r\n            }\r\n\r\n            temp = ext || modName;\r\n            index = temp.indexOf(\"!\");\r\n            if (index !== -1) {\r\n                //Pull off the strip arg.\r\n                strip = temp.substring(index + 1) === \"strip\";\r\n                temp = temp.substring(0, index);\r\n                if (ext) {\r\n                    ext = temp;\r\n                } else {\r\n                    modName = temp;\r\n                }\r\n            }\r\n\r\n            return {\r\n                moduleName: modName,\r\n                ext: ext,\r\n                strip: strip\r\n            };\r\n        },\r\n\r\n        xdRegExp: /^((\\w+)\\:)?\\/\\/([^\\/\\\\]+)/,\r\n\r\n        /**\r\n         * Is an URL on another domain. Only works for browser use, returns\r\n         * false in non-browser environments. Only used to know if an\r\n         * optimized .js version of a text resource should be loaded\r\n         * instead.\r\n         * @param {String} url\r\n         * @returns Boolean\r\n         */\r\n        useXhr: function (url, protocol, hostname, port) {\r\n            var uProtocol, uHostName, uPort,\r\n                match = text.xdRegExp.exec(url);\r\n            if (!match) {\r\n                return true;\r\n            }\r\n            uProtocol = match[2];\r\n            uHostName = match[3];\r\n\r\n            uHostName = uHostName.split(':');\r\n            uPort = uHostName[1];\r\n            uHostName = uHostName[0];\r\n\r\n            return (!uProtocol || uProtocol === protocol) &&\r\n                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&\r\n                   ((!uPort && !uHostName) || uPort === port);\r\n        },\r\n\r\n        finishLoad: function (name, strip, content, onLoad) {\r\n            content = strip ? text.strip(content) : content;\r\n            if (masterConfig.isBuild) {\r\n                buildMap[name] = content;\r\n            }\r\n            onLoad(content);\r\n        },\r\n\r\n        load: function (name, req, onLoad, config) {\r\n            //Name has format: some.module.filext!strip\r\n            //The strip part is optional.\r\n            //if strip is present, then that means only get the string contents\r\n            //inside a body tag in an HTML string. For XML/SVG content it means\r\n            //removing the <?xml ...?> declarations so the content can be inserted\r\n            //into the current doc without problems.\r\n\r\n            // Do not bother with the work if a build and text will\r\n            // not be inlined.\r\n            if (config && config.isBuild && !config.inlineText) {\r\n                onLoad();\r\n                return;\r\n            }\r\n\r\n            masterConfig.isBuild = config && config.isBuild;\r\n\r\n            var parsed = text.parseName(name),\r\n                nonStripName = parsed.moduleName +\r\n                    (parsed.ext ? '.' + parsed.ext : ''),\r\n                url = req.toUrl(nonStripName),\r\n                useXhr = (masterConfig.useXhr) ||\r\n                         text.useXhr;\r\n\r\n            // Do not load if it is an empty: url\r\n            if (url.indexOf('empty:') === 0) {\r\n                onLoad();\r\n                return;\r\n            }\r\n\r\n            //Load the text. Use XHR if possible and in a browser.\r\n            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {\r\n                text.get(url, function (content) {\r\n                    text.finishLoad(name, parsed.strip, content, onLoad);\r\n                }, function (err) {\r\n                    if (onLoad.error) {\r\n                        onLoad.error(err);\r\n                    }\r\n                });\r\n            } else {\r\n                //Need to fetch the resource across domains. Assume\r\n                //the resource has been optimized into a JS module. Fetch\r\n                //by the module name + extension, but do not include the\r\n                //!strip part to avoid file system issues.\r\n                req([nonStripName], function (content) {\r\n                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,\r\n                                    parsed.strip, content, onLoad);\r\n                });\r\n            }\r\n        },\r\n\r\n        write: function (pluginName, moduleName, write, config) {\r\n            if (buildMap.hasOwnProperty(moduleName)) {\r\n                var content = text.jsEscape(buildMap[moduleName]);\r\n                write.asModule(pluginName + \"!\" + moduleName,\r\n                               \"define(function () { return '\" +\r\n                                   content +\r\n                               \"';});\\n\");\r\n            }\r\n        },\r\n\r\n        writeFile: function (pluginName, moduleName, req, write, config) {\r\n            var parsed = text.parseName(moduleName),\r\n                extPart = parsed.ext ? '.' + parsed.ext : '',\r\n                nonStripName = parsed.moduleName + extPart,\r\n                //Use a '.js' file name so that it indicates it is a\r\n                //script that can be loaded across domains.\r\n                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';\r\n\r\n            //Leverage own load() method to load plugin value, but only\r\n            //write out values that do not have the strip argument,\r\n            //to avoid any potential issues with ! in file names.\r\n            text.load(nonStripName, req, function (value) {\r\n                //Use own write() method to construct full module value.\r\n                //But need to create shell that translates writeFile's\r\n                //write() to the right interface.\r\n                var textWrite = function (contents) {\r\n                    return write(fileName, contents);\r\n                };\r\n                textWrite.asModule = function (moduleName, contents) {\r\n                    return write.asModule(moduleName, fileName, contents);\r\n                };\r\n\r\n                text.write(pluginName, nonStripName, textWrite, config);\r\n            }, config);\r\n        }\r\n    };\r\n\r\n    if (masterConfig.env === 'node' || (!masterConfig.env &&\r\n            typeof process !== \"undefined\" &&\r\n            process.versions &&\r\n            !!process.versions.node &&\r\n            !process.versions['node-webkit'])) {\r\n        //Using special require.nodeRequire, something added by r.js.\r\n        fs = require.nodeRequire('fs');\r\n\r\n        text.get = function (url, callback, errback) {\r\n            try {\r\n                var file = fs.readFileSync(url, 'utf8');\r\n                //Remove BOM (Byte Mark Order) from utf8 files if it is there.\r\n                if (file.indexOf('\\uFEFF') === 0) {\r\n                    file = file.substring(1);\r\n                }\r\n                callback(file);\r\n            } catch (e) {\r\n                if (errback) {\r\n                    errback(e);\r\n                }\r\n            }\r\n        };\r\n    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&\r\n            text.createXhr())) {\r\n        text.get = function (url, callback, errback, headers) {\r\n            var xhr = text.createXhr(), header;\r\n            xhr.open('GET', url, true);\r\n\r\n            //Allow plugins direct access to xhr headers\r\n            if (headers) {\r\n                for (header in headers) {\r\n                    if (headers.hasOwnProperty(header)) {\r\n                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);\r\n                    }\r\n                }\r\n            }\r\n\r\n            //Allow overrides specified in config\r\n            if (masterConfig.onXhr) {\r\n                masterConfig.onXhr(xhr, url);\r\n            }\r\n\r\n            xhr.onreadystatechange = function (evt) {\r\n                var status, err;\r\n                //Do not explicitly handle errors, those should be\r\n                //visible via console output in the browser.\r\n                if (xhr.readyState === 4) {\r\n                    status = xhr.status || 0;\r\n                    if (status > 399 && status < 600) {\r\n                        //An http 4xx or 5xx error. Signal an error.\r\n                        err = new Error(url + ' HTTP status: ' + status);\r\n                        err.xhr = xhr;\r\n                        if (errback) {\r\n                            errback(err);\r\n                        }\r\n                    } else {\r\n                        callback(xhr.responseText);\r\n                    }\r\n\r\n                    if (masterConfig.onXhrComplete) {\r\n                        masterConfig.onXhrComplete(xhr, url);\r\n                    }\r\n                }\r\n            };\r\n            xhr.send(null);\r\n        };\r\n    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&\r\n            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {\r\n        //Why Java, why is this so awkward?\r\n        text.get = function (url, callback) {\r\n            var stringBuffer, line,\r\n                encoding = \"utf-8\",\r\n                file = new java.io.File(url),\r\n                lineSeparator = java.lang.System.getProperty(\"line.separator\"),\r\n                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),\r\n                content = '';\r\n            try {\r\n                stringBuffer = new java.lang.StringBuffer();\r\n                line = input.readLine();\r\n\r\n                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324\r\n                // http://www.unicode.org/faq/utf_bom.html\r\n\r\n                // Note that when we use utf-8, the BOM should appear as \"EF BB BF\", but it doesn't due to this bug in the JDK:\r\n                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058\r\n                if (line && line.length() && line.charAt(0) === 0xfeff) {\r\n                    // Eat the BOM, since we've already found the encoding on this file,\r\n                    // and we plan to concatenating this buffer with others; the BOM should\r\n                    // only appear at the top of a file.\r\n                    line = line.substring(1);\r\n                }\r\n\r\n                if (line !== null) {\r\n                    stringBuffer.append(line);\r\n                }\r\n\r\n                while ((line = input.readLine()) !== null) {\r\n                    stringBuffer.append(lineSeparator);\r\n                    stringBuffer.append(line);\r\n                }\r\n                //Make sure we return a JavaScript string and not a Java string.\r\n                content = String(stringBuffer.toString()); //String\r\n            } finally {\r\n                input.close();\r\n            }\r\n            callback(content);\r\n        };\r\n    } else if (masterConfig.env === 'xpconnect' || (!masterConfig.env &&\r\n            typeof Components !== 'undefined' && Components.classes &&\r\n            Components.interfaces)) {\r\n        //Avert your gaze!\r\n        Cc = Components.classes;\r\n        Ci = Components.interfaces;\r\n        Components.utils['import']('resource://gre/modules/FileUtils.jsm');\r\n        xpcIsWindows = ('@mozilla.org/windows-registry-key;1' in Cc);\r\n\r\n        text.get = function (url, callback) {\r\n            var inStream, convertStream, fileObj,\r\n                readData = {};\r\n\r\n            if (xpcIsWindows) {\r\n                url = url.replace(/\\//g, '\\\\');\r\n            }\r\n\r\n            fileObj = new FileUtils.File(url);\r\n\r\n            //XPCOM, you so crazy\r\n            try {\r\n                inStream = Cc['@mozilla.org/network/file-input-stream;1']\r\n                           .createInstance(Ci.nsIFileInputStream);\r\n                inStream.init(fileObj, 1, 0, false);\r\n\r\n                convertStream = Cc['@mozilla.org/intl/converter-input-stream;1']\r\n                                .createInstance(Ci.nsIConverterInputStream);\r\n                convertStream.init(inStream, \"utf-8\", inStream.available(),\r\n                Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);\r\n\r\n                convertStream.readString(inStream.available(), readData);\r\n                convertStream.close();\r\n                inStream.close();\r\n                callback(readData.value);\r\n            } catch (e) {\r\n                throw new Error((fileObj && fileObj.path || '') + ': ' + e);\r\n            }\r\n        };\r\n    }\r\n    return text;\r\n});"}
}});
