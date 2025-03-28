'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var FullScreenPlugin = /** @class */ (function (_super) {
    __extends(FullScreenPlugin, _super);
    function FullScreenPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullScreenPlugin.prototype.onload = function () {
        this.addCommand({
            id: "fullscreen-focus",
            name: "Fullscreen focus mode",
            callback: this.fullscreenMode.bind(this),
        });
    };
    FullScreenPlugin.prototype.onunload = function () { };
    FullScreenPlugin.prototype.fullscreenMode = function () {
        var leaf = this.app.workspace.activeLeaf;
        if (!leaf)
            return;
        var el = leaf.containerEl;
        var fullscreenMutationObserver;
        el.requestFullscreen();
        // disable mutation observer when exiting fullscreen mode
        el.addEventListener("fullscreenchange", function (event) {
            if (!document.fullscreenElement) {
                fullscreenMutationObserver.disconnect();
            }
        });
        // copy all nodes
        fullscreenMutationObserver = new MutationObserver(function (mutationRecords) {
            mutationRecords.forEach(function (mutationRecord) {
                mutationRecord.addedNodes.forEach(function (node) {
                    document.body.removeChild(node);
                    el.appendChild(node);
                });
            });
            // focus on prompt for file open
            if (document.querySelector(".prompt-input"))
                document.querySelector(".prompt-input").focus();
        });
        fullscreenMutationObserver.observe(document.body, { childList: true });
    };
    return FullScreenPlugin;
}(obsidian.Plugin));

module.exports = FullScreenPlugin;


/* nosourcemap */