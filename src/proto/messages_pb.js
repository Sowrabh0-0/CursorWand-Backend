/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.messages = (function() {

    /**
     * Namespace messages.
     * @exports messages
     * @namespace
     */
    var messages = {};

    messages.CursorMovement = (function() {

        /**
         * Properties of a CursorMovement.
         * @memberof messages
         * @interface ICursorMovement
         * @property {number|null} [x] CursorMovement x
         * @property {number|null} [y] CursorMovement y
         */

        /**
         * Constructs a new CursorMovement.
         * @memberof messages
         * @classdesc Represents a CursorMovement.
         * @implements ICursorMovement
         * @constructor
         * @param {messages.ICursorMovement=} [properties] Properties to set
         */
        function CursorMovement(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CursorMovement x.
         * @member {number} x
         * @memberof messages.CursorMovement
         * @instance
         */
        CursorMovement.prototype.x = 0;

        /**
         * CursorMovement y.
         * @member {number} y
         * @memberof messages.CursorMovement
         * @instance
         */
        CursorMovement.prototype.y = 0;

        /**
         * Creates a new CursorMovement instance using the specified properties.
         * @function create
         * @memberof messages.CursorMovement
         * @static
         * @param {messages.ICursorMovement=} [properties] Properties to set
         * @returns {messages.CursorMovement} CursorMovement instance
         */
        CursorMovement.create = function create(properties) {
            return new CursorMovement(properties);
        };

        /**
         * Encodes the specified CursorMovement message. Does not implicitly {@link messages.CursorMovement.verify|verify} messages.
         * @function encode
         * @memberof messages.CursorMovement
         * @static
         * @param {messages.ICursorMovement} message CursorMovement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CursorMovement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
            return writer;
        };

        /**
         * Encodes the specified CursorMovement message, length delimited. Does not implicitly {@link messages.CursorMovement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.CursorMovement
         * @static
         * @param {messages.ICursorMovement} message CursorMovement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CursorMovement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CursorMovement message from the specified reader or buffer.
         * @function decode
         * @memberof messages.CursorMovement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.CursorMovement} CursorMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CursorMovement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.CursorMovement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.double();
                        break;
                    }
                case 2: {
                        message.y = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CursorMovement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.CursorMovement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.CursorMovement} CursorMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CursorMovement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CursorMovement message.
         * @function verify
         * @memberof messages.CursorMovement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CursorMovement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };

        /**
         * Creates a CursorMovement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.CursorMovement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.CursorMovement} CursorMovement
         */
        CursorMovement.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.CursorMovement)
                return object;
            var message = new $root.messages.CursorMovement();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a CursorMovement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.CursorMovement
         * @static
         * @param {messages.CursorMovement} message CursorMovement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CursorMovement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };

        /**
         * Converts this CursorMovement to JSON.
         * @function toJSON
         * @memberof messages.CursorMovement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CursorMovement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CursorMovement
         * @function getTypeUrl
         * @memberof messages.CursorMovement
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CursorMovement.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/messages.CursorMovement";
        };

        return CursorMovement;
    })();

    messages.ClickEvent = (function() {

        /**
         * Properties of a ClickEvent.
         * @memberof messages
         * @interface IClickEvent
         * @property {boolean|null} [isRightClick] ClickEvent isRightClick
         */

        /**
         * Constructs a new ClickEvent.
         * @memberof messages
         * @classdesc Represents a ClickEvent.
         * @implements IClickEvent
         * @constructor
         * @param {messages.IClickEvent=} [properties] Properties to set
         */
        function ClickEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClickEvent isRightClick.
         * @member {boolean} isRightClick
         * @memberof messages.ClickEvent
         * @instance
         */
        ClickEvent.prototype.isRightClick = false;

        /**
         * Creates a new ClickEvent instance using the specified properties.
         * @function create
         * @memberof messages.ClickEvent
         * @static
         * @param {messages.IClickEvent=} [properties] Properties to set
         * @returns {messages.ClickEvent} ClickEvent instance
         */
        ClickEvent.create = function create(properties) {
            return new ClickEvent(properties);
        };

        /**
         * Encodes the specified ClickEvent message. Does not implicitly {@link messages.ClickEvent.verify|verify} messages.
         * @function encode
         * @memberof messages.ClickEvent
         * @static
         * @param {messages.IClickEvent} message ClickEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClickEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isRightClick != null && Object.hasOwnProperty.call(message, "isRightClick"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isRightClick);
            return writer;
        };

        /**
         * Encodes the specified ClickEvent message, length delimited. Does not implicitly {@link messages.ClickEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.ClickEvent
         * @static
         * @param {messages.IClickEvent} message ClickEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClickEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClickEvent message from the specified reader or buffer.
         * @function decode
         * @memberof messages.ClickEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.ClickEvent} ClickEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClickEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.ClickEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.isRightClick = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClickEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.ClickEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.ClickEvent} ClickEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClickEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClickEvent message.
         * @function verify
         * @memberof messages.ClickEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClickEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isRightClick != null && message.hasOwnProperty("isRightClick"))
                if (typeof message.isRightClick !== "boolean")
                    return "isRightClick: boolean expected";
            return null;
        };

        /**
         * Creates a ClickEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.ClickEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.ClickEvent} ClickEvent
         */
        ClickEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.ClickEvent)
                return object;
            var message = new $root.messages.ClickEvent();
            if (object.isRightClick != null)
                message.isRightClick = Boolean(object.isRightClick);
            return message;
        };

        /**
         * Creates a plain object from a ClickEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.ClickEvent
         * @static
         * @param {messages.ClickEvent} message ClickEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClickEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.isRightClick = false;
            if (message.isRightClick != null && message.hasOwnProperty("isRightClick"))
                object.isRightClick = message.isRightClick;
            return object;
        };

        /**
         * Converts this ClickEvent to JSON.
         * @function toJSON
         * @memberof messages.ClickEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClickEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClickEvent
         * @function getTypeUrl
         * @memberof messages.ClickEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClickEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/messages.ClickEvent";
        };

        return ClickEvent;
    })();

    messages.KeyboardEvent = (function() {

        /**
         * Properties of a KeyboardEvent.
         * @memberof messages
         * @interface IKeyboardEvent
         * @property {string|null} [key] KeyboardEvent key
         */

        /**
         * Constructs a new KeyboardEvent.
         * @memberof messages
         * @classdesc Represents a KeyboardEvent.
         * @implements IKeyboardEvent
         * @constructor
         * @param {messages.IKeyboardEvent=} [properties] Properties to set
         */
        function KeyboardEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeyboardEvent key.
         * @member {string} key
         * @memberof messages.KeyboardEvent
         * @instance
         */
        KeyboardEvent.prototype.key = "";

        /**
         * Creates a new KeyboardEvent instance using the specified properties.
         * @function create
         * @memberof messages.KeyboardEvent
         * @static
         * @param {messages.IKeyboardEvent=} [properties] Properties to set
         * @returns {messages.KeyboardEvent} KeyboardEvent instance
         */
        KeyboardEvent.create = function create(properties) {
            return new KeyboardEvent(properties);
        };

        /**
         * Encodes the specified KeyboardEvent message. Does not implicitly {@link messages.KeyboardEvent.verify|verify} messages.
         * @function encode
         * @memberof messages.KeyboardEvent
         * @static
         * @param {messages.IKeyboardEvent} message KeyboardEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyboardEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            return writer;
        };

        /**
         * Encodes the specified KeyboardEvent message, length delimited. Does not implicitly {@link messages.KeyboardEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.KeyboardEvent
         * @static
         * @param {messages.IKeyboardEvent} message KeyboardEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyboardEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeyboardEvent message from the specified reader or buffer.
         * @function decode
         * @memberof messages.KeyboardEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.KeyboardEvent} KeyboardEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyboardEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.KeyboardEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KeyboardEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.KeyboardEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.KeyboardEvent} KeyboardEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyboardEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeyboardEvent message.
         * @function verify
         * @memberof messages.KeyboardEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeyboardEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            return null;
        };

        /**
         * Creates a KeyboardEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.KeyboardEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.KeyboardEvent} KeyboardEvent
         */
        KeyboardEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.KeyboardEvent)
                return object;
            var message = new $root.messages.KeyboardEvent();
            if (object.key != null)
                message.key = String(object.key);
            return message;
        };

        /**
         * Creates a plain object from a KeyboardEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.KeyboardEvent
         * @static
         * @param {messages.KeyboardEvent} message KeyboardEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeyboardEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.key = "";
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            return object;
        };

        /**
         * Converts this KeyboardEvent to JSON.
         * @function toJSON
         * @memberof messages.KeyboardEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeyboardEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KeyboardEvent
         * @function getTypeUrl
         * @memberof messages.KeyboardEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KeyboardEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/messages.KeyboardEvent";
        };

        return KeyboardEvent;
    })();

    return messages;
})();

module.exports = $root;
