/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.cn = (function() {

    /**
     * Namespace cn.
     * @exports cn
     * @namespace
     */
    var cn = {};

    cn.beepower = (function() {

        /**
         * Namespace beepower.
         * @memberof cn
         * @namespace
         */
        var beepower = {};

        beepower.domain = (function() {

            /**
             * Namespace domain.
             * @memberof cn.beepower
             * @namespace
             */
            var domain = {};

            domain.message = (function() {

                /**
                 * Namespace message.
                 * @memberof cn.beepower.domain
                 * @namespace
                 */
                var message = {};

                message.Payload = (function() {

                    /**
                     * Properties of a Payload.
                     * @memberof cn.beepower.domain.message
                     * @interface IPayload
                     * @property {Uint8Array|null} [value] Payload value
                     * @property {string|null} [valueType] Payload valueType
                     * @property {string|null} [url] Payload url
                     * @property {boolean|null} [testFlag] Payload testFlag
                     * @property {string|null} [traceTag] Payload traceTag
                     * @property {string|null} [clientId] Payload clientId
                     * @property {number|Long|null} [messageId] Payload messageId
                     */

                    /**
                     * Constructs a new Payload.
                     * @memberof cn.beepower.domain.message
                     * @classdesc Represents a Payload.
                     * @implements IPayload
                     * @constructor
                     * @param {cn.beepower.domain.message.IPayload=} [properties] Properties to set
                     */
                    function Payload(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Payload value.
                     * @member {Uint8Array} value
                     * @memberof cn.beepower.domain.message.Payload
                     * @instance
                     */
                    Payload.prototype.value = $util.newBuffer([]);

                    /**
                     * Payload valueType.
                     * @member {string} valueType
                     * @memberof cn.beepower.domain.message.Payload
                     * @instance
                     */
                    Payload.prototype.valueType = "";

                    /**
                     * Payload url.
                     * @member {string} url
                     * @memberof cn.beepower.domain.message.Payload
                     * @instance
                     */
                    Payload.prototype.url = "";

                    /**
                     * Payload testFlag.
                     * @member {boolean} testFlag
                     * @memberof cn.beepower.domain.message.Payload
                     * @instance
                     */
                    Payload.prototype.testFlag = false;

                    /**
                     * Payload traceTag.
                     * @member {string} traceTag
                     * @memberof cn.beepower.domain.message.Payload
                     * @instance
                     */
                    Payload.prototype.traceTag = "";

                    /**
                     * Payload clientId.
                     * @member {string} clientId
                     * @memberof cn.beepower.domain.message.Payload
                     * @instance
                     */
                    Payload.prototype.clientId = "";

                    /**
                     * Payload messageId.
                     * @member {number|Long} messageId
                     * @memberof cn.beepower.domain.message.Payload
                     * @instance
                     */
                    Payload.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new Payload instance using the specified properties.
                     * @function create
                     * @memberof cn.beepower.domain.message.Payload
                     * @static
                     * @param {cn.beepower.domain.message.IPayload=} [properties] Properties to set
                     * @returns {cn.beepower.domain.message.Payload} Payload instance
                     */
                    Payload.create = function create(properties) {
                        return new Payload(properties);
                    };

                    /**
                     * Encodes the specified Payload message. Does not implicitly {@link cn.beepower.domain.message.Payload.verify|verify} messages.
                     * @function encode
                     * @memberof cn.beepower.domain.message.Payload
                     * @static
                     * @param {cn.beepower.domain.message.IPayload} message Payload message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Payload.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.value != null && message.hasOwnProperty("value"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                        if (message.valueType != null && message.hasOwnProperty("valueType"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.valueType);
                        if (message.url != null && message.hasOwnProperty("url"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
                        if (message.testFlag != null && message.hasOwnProperty("testFlag"))
                            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.testFlag);
                        if (message.traceTag != null && message.hasOwnProperty("traceTag"))
                            writer.uint32(/* id 13, wireType 2 =*/106).string(message.traceTag);
                        if (message.clientId != null && message.hasOwnProperty("clientId"))
                            writer.uint32(/* id 14, wireType 2 =*/114).string(message.clientId);
                        if (message.messageId != null && message.hasOwnProperty("messageId"))
                            writer.uint32(/* id 15, wireType 0 =*/120).int64(message.messageId);
                        return writer;
                    };

                    /**
                     * Encodes the specified Payload message, length delimited. Does not implicitly {@link cn.beepower.domain.message.Payload.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cn.beepower.domain.message.Payload
                     * @static
                     * @param {cn.beepower.domain.message.IPayload} message Payload message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Payload.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Payload message from the specified reader or buffer.
                     * @function decode
                     * @memberof cn.beepower.domain.message.Payload
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cn.beepower.domain.message.Payload} Payload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Payload.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cn.beepower.domain.message.Payload();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.value = reader.bytes();
                                break;
                            case 2:
                                message.valueType = reader.string();
                                break;
                            case 3:
                                message.url = reader.string();
                                break;
                            case 10:
                                message.testFlag = reader.bool();
                                break;
                            case 13:
                                message.traceTag = reader.string();
                                break;
                            case 14:
                                message.clientId = reader.string();
                                break;
                            case 15:
                                message.messageId = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Payload message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cn.beepower.domain.message.Payload
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cn.beepower.domain.message.Payload} Payload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Payload.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Payload message.
                     * @function verify
                     * @memberof cn.beepower.domain.message.Payload
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Payload.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.value != null && message.hasOwnProperty("value"))
                            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                                return "value: buffer expected";
                        if (message.valueType != null && message.hasOwnProperty("valueType"))
                            if (!$util.isString(message.valueType))
                                return "valueType: string expected";
                        if (message.url != null && message.hasOwnProperty("url"))
                            if (!$util.isString(message.url))
                                return "url: string expected";
                        if (message.testFlag != null && message.hasOwnProperty("testFlag"))
                            if (typeof message.testFlag !== "boolean")
                                return "testFlag: boolean expected";
                        if (message.traceTag != null && message.hasOwnProperty("traceTag"))
                            if (!$util.isString(message.traceTag))
                                return "traceTag: string expected";
                        if (message.clientId != null && message.hasOwnProperty("clientId"))
                            if (!$util.isString(message.clientId))
                                return "clientId: string expected";
                        if (message.messageId != null && message.hasOwnProperty("messageId"))
                            if (!$util.isInteger(message.messageId) && !(message.messageId && $util.isInteger(message.messageId.low) && $util.isInteger(message.messageId.high)))
                                return "messageId: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cn.beepower.domain.message.Payload
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cn.beepower.domain.message.Payload} Payload
                     */
                    Payload.fromObject = function fromObject(object) {
                        if (object instanceof $root.cn.beepower.domain.message.Payload)
                            return object;
                        var message = new $root.cn.beepower.domain.message.Payload();
                        if (object.value != null)
                            if (typeof object.value === "string")
                                $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                            else if (object.value.length)
                                message.value = object.value;
                        if (object.valueType != null)
                            message.valueType = String(object.valueType);
                        if (object.url != null)
                            message.url = String(object.url);
                        if (object.testFlag != null)
                            message.testFlag = Boolean(object.testFlag);
                        if (object.traceTag != null)
                            message.traceTag = String(object.traceTag);
                        if (object.clientId != null)
                            message.clientId = String(object.clientId);
                        if (object.messageId != null)
                            if ($util.Long)
                                (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = false;
                            else if (typeof object.messageId === "string")
                                message.messageId = parseInt(object.messageId, 10);
                            else if (typeof object.messageId === "number")
                                message.messageId = object.messageId;
                            else if (typeof object.messageId === "object")
                                message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a Payload message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cn.beepower.domain.message.Payload
                     * @static
                     * @param {cn.beepower.domain.message.Payload} message Payload
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Payload.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.value = "";
                            else {
                                object.value = [];
                                if (options.bytes !== Array)
                                    object.value = $util.newBuffer(object.value);
                            }
                            object.valueType = "";
                            object.url = "";
                            object.testFlag = false;
                            object.traceTag = "";
                            object.clientId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.messageId = options.longs === String ? "0" : 0;
                        }
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                        if (message.valueType != null && message.hasOwnProperty("valueType"))
                            object.valueType = message.valueType;
                        if (message.url != null && message.hasOwnProperty("url"))
                            object.url = message.url;
                        if (message.testFlag != null && message.hasOwnProperty("testFlag"))
                            object.testFlag = message.testFlag;
                        if (message.traceTag != null && message.hasOwnProperty("traceTag"))
                            object.traceTag = message.traceTag;
                        if (message.clientId != null && message.hasOwnProperty("clientId"))
                            object.clientId = message.clientId;
                        if (message.messageId != null && message.hasOwnProperty("messageId"))
                            if (typeof message.messageId === "number")
                                object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                            else
                                object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber() : message.messageId;
                        return object;
                    };

                    /**
                     * Converts this Payload to JSON.
                     * @function toJSON
                     * @memberof cn.beepower.domain.message.Payload
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Payload.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Payload;
                })();

                message.BeeMessage = (function() {

                    /**
                     * Properties of a BeeMessage.
                     * @memberof cn.beepower.domain.message
                     * @interface IBeeMessage
                     * @property {string|null} [topic] BeeMessage topic
                     * @property {cn.beepower.domain.message.IPayload|null} [payload] BeeMessage payload
                     * @property {number|null} [qos] BeeMessage qos
                     * @property {boolean|null} [retainFlag] BeeMessage retainFlag
                     */

                    /**
                     * Constructs a new BeeMessage.
                     * @memberof cn.beepower.domain.message
                     * @classdesc Represents a BeeMessage.
                     * @implements IBeeMessage
                     * @constructor
                     * @param {cn.beepower.domain.message.IBeeMessage=} [properties] Properties to set
                     */
                    function BeeMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BeeMessage topic.
                     * @member {string} topic
                     * @memberof cn.beepower.domain.message.BeeMessage
                     * @instance
                     */
                    BeeMessage.prototype.topic = "";

                    /**
                     * BeeMessage payload.
                     * @member {cn.beepower.domain.message.IPayload|null|undefined} payload
                     * @memberof cn.beepower.domain.message.BeeMessage
                     * @instance
                     */
                    BeeMessage.prototype.payload = null;

                    /**
                     * BeeMessage qos.
                     * @member {number} qos
                     * @memberof cn.beepower.domain.message.BeeMessage
                     * @instance
                     */
                    BeeMessage.prototype.qos = 0;

                    /**
                     * BeeMessage retainFlag.
                     * @member {boolean} retainFlag
                     * @memberof cn.beepower.domain.message.BeeMessage
                     * @instance
                     */
                    BeeMessage.prototype.retainFlag = false;

                    /**
                     * Creates a new BeeMessage instance using the specified properties.
                     * @function create
                     * @memberof cn.beepower.domain.message.BeeMessage
                     * @static
                     * @param {cn.beepower.domain.message.IBeeMessage=} [properties] Properties to set
                     * @returns {cn.beepower.domain.message.BeeMessage} BeeMessage instance
                     */
                    BeeMessage.create = function create(properties) {
                        return new BeeMessage(properties);
                    };

                    /**
                     * Encodes the specified BeeMessage message. Does not implicitly {@link cn.beepower.domain.message.BeeMessage.verify|verify} messages.
                     * @function encode
                     * @memberof cn.beepower.domain.message.BeeMessage
                     * @static
                     * @param {cn.beepower.domain.message.IBeeMessage} message BeeMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BeeMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.topic != null && message.hasOwnProperty("topic"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
                        if (message.payload != null && message.hasOwnProperty("payload"))
                            $root.cn.beepower.domain.message.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.qos != null && message.hasOwnProperty("qos"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.qos);
                        if (message.retainFlag != null && message.hasOwnProperty("retainFlag"))
                            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.retainFlag);
                        return writer;
                    };

                    /**
                     * Encodes the specified BeeMessage message, length delimited. Does not implicitly {@link cn.beepower.domain.message.BeeMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cn.beepower.domain.message.BeeMessage
                     * @static
                     * @param {cn.beepower.domain.message.IBeeMessage} message BeeMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BeeMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BeeMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof cn.beepower.domain.message.BeeMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cn.beepower.domain.message.BeeMessage} BeeMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BeeMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cn.beepower.domain.message.BeeMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.topic = reader.string();
                                break;
                            case 2:
                                message.payload = $root.cn.beepower.domain.message.Payload.decode(reader, reader.uint32());
                                break;
                            case 6:
                                message.qos = reader.int32();
                                break;
                            case 7:
                                message.retainFlag = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BeeMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cn.beepower.domain.message.BeeMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cn.beepower.domain.message.BeeMessage} BeeMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BeeMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BeeMessage message.
                     * @function verify
                     * @memberof cn.beepower.domain.message.BeeMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BeeMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.topic != null && message.hasOwnProperty("topic"))
                            if (!$util.isString(message.topic))
                                return "topic: string expected";
                        if (message.payload != null && message.hasOwnProperty("payload")) {
                            var error = $root.cn.beepower.domain.message.Payload.verify(message.payload);
                            if (error)
                                return "payload." + error;
                        }
                        if (message.qos != null && message.hasOwnProperty("qos"))
                            if (!$util.isInteger(message.qos))
                                return "qos: integer expected";
                        if (message.retainFlag != null && message.hasOwnProperty("retainFlag"))
                            if (typeof message.retainFlag !== "boolean")
                                return "retainFlag: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a BeeMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cn.beepower.domain.message.BeeMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cn.beepower.domain.message.BeeMessage} BeeMessage
                     */
                    BeeMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.cn.beepower.domain.message.BeeMessage)
                            return object;
                        var message = new $root.cn.beepower.domain.message.BeeMessage();
                        if (object.topic != null)
                            message.topic = String(object.topic);
                        if (object.payload != null) {
                            if (typeof object.payload !== "object")
                                throw TypeError(".cn.beepower.domain.message.BeeMessage.payload: object expected");
                            message.payload = $root.cn.beepower.domain.message.Payload.fromObject(object.payload);
                        }
                        if (object.qos != null)
                            message.qos = object.qos | 0;
                        if (object.retainFlag != null)
                            message.retainFlag = Boolean(object.retainFlag);
                        return message;
                    };

                    /**
                     * Creates a plain object from a BeeMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cn.beepower.domain.message.BeeMessage
                     * @static
                     * @param {cn.beepower.domain.message.BeeMessage} message BeeMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BeeMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.topic = "";
                            object.payload = null;
                            object.qos = 0;
                            object.retainFlag = false;
                        }
                        if (message.topic != null && message.hasOwnProperty("topic"))
                            object.topic = message.topic;
                        if (message.payload != null && message.hasOwnProperty("payload"))
                            object.payload = $root.cn.beepower.domain.message.Payload.toObject(message.payload, options);
                        if (message.qos != null && message.hasOwnProperty("qos"))
                            object.qos = message.qos;
                        if (message.retainFlag != null && message.hasOwnProperty("retainFlag"))
                            object.retainFlag = message.retainFlag;
                        return object;
                    };

                    /**
                     * Converts this BeeMessage to JSON.
                     * @function toJSON
                     * @memberof cn.beepower.domain.message.BeeMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BeeMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BeeMessage;
                })();

                message.Item = (function() {

                    /**
                     * Properties of an Item.
                     * @memberof cn.beepower.domain.message
                     * @interface IItem
                     * @property {string|null} [t] Item t
                     * @property {number|null} [i] Item i
                     * @property {number|Long|null} [l] Item l
                     * @property {number|null} [f] Item f
                     * @property {number|null} [d] Item d
                     * @property {boolean|null} [b] Item b
                     * @property {string|null} [s] Item s
                     * @property {Uint8Array|null} [bs] Item bs
                     */

                    /**
                     * Constructs a new Item.
                     * @memberof cn.beepower.domain.message
                     * @classdesc Represents an Item.
                     * @implements IItem
                     * @constructor
                     * @param {cn.beepower.domain.message.IItem=} [properties] Properties to set
                     */
                    function Item(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Item t.
                     * @member {string} t
                     * @memberof cn.beepower.domain.message.Item
                     * @instance
                     */
                    Item.prototype.t = "";

                    /**
                     * Item i.
                     * @member {number} i
                     * @memberof cn.beepower.domain.message.Item
                     * @instance
                     */
                    Item.prototype.i = 0;

                    /**
                     * Item l.
                     * @member {number|Long} l
                     * @memberof cn.beepower.domain.message.Item
                     * @instance
                     */
                    Item.prototype.l = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Item f.
                     * @member {number} f
                     * @memberof cn.beepower.domain.message.Item
                     * @instance
                     */
                    Item.prototype.f = 0;

                    /**
                     * Item d.
                     * @member {number} d
                     * @memberof cn.beepower.domain.message.Item
                     * @instance
                     */
                    Item.prototype.d = 0;

                    /**
                     * Item b.
                     * @member {boolean} b
                     * @memberof cn.beepower.domain.message.Item
                     * @instance
                     */
                    Item.prototype.b = true;

                    /**
                     * Item s.
                     * @member {string} s
                     * @memberof cn.beepower.domain.message.Item
                     * @instance
                     */
                    Item.prototype.s = "";

                    /**
                     * Item bs.
                     * @member {Uint8Array} bs
                     * @memberof cn.beepower.domain.message.Item
                     * @instance
                     */
                    Item.prototype.bs = $util.newBuffer([]);

                    /**
                     * Creates a new Item instance using the specified properties.
                     * @function create
                     * @memberof cn.beepower.domain.message.Item
                     * @static
                     * @param {cn.beepower.domain.message.IItem=} [properties] Properties to set
                     * @returns {cn.beepower.domain.message.Item} Item instance
                     */
                    Item.create = function create(properties) {
                        return new Item(properties);
                    };

                    /**
                     * Encodes the specified Item message. Does not implicitly {@link cn.beepower.domain.message.Item.verify|verify} messages.
                     * @function encode
                     * @memberof cn.beepower.domain.message.Item
                     * @static
                     * @param {cn.beepower.domain.message.IItem} message Item message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Item.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.i != null && message.hasOwnProperty("i"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.i);
                        if (message.l != null && message.hasOwnProperty("l"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.l);
                        if (message.f != null && message.hasOwnProperty("f"))
                            writer.uint32(/* id 3, wireType 5 =*/29).float(message.f);
                        if (message.d != null && message.hasOwnProperty("d"))
                            writer.uint32(/* id 4, wireType 1 =*/33).double(message.d);
                        if (message.b != null && message.hasOwnProperty("b"))
                            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.b);
                        if (message.s != null && message.hasOwnProperty("s"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.s);
                        if (message.bs != null && message.hasOwnProperty("bs"))
                            writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.bs);
                        if (message.t != null && message.hasOwnProperty("t"))
                            writer.uint32(/* id 15, wireType 2 =*/122).string(message.t);
                        return writer;
                    };

                    /**
                     * Encodes the specified Item message, length delimited. Does not implicitly {@link cn.beepower.domain.message.Item.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cn.beepower.domain.message.Item
                     * @static
                     * @param {cn.beepower.domain.message.IItem} message Item message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Item.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Item message from the specified reader or buffer.
                     * @function decode
                     * @memberof cn.beepower.domain.message.Item
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cn.beepower.domain.message.Item} Item
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Item.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cn.beepower.domain.message.Item();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 15:
                                message.t = reader.string();
                                break;
                            case 1:
                                message.i = reader.int32();
                                break;
                            case 2:
                                message.l = reader.int64();
                                break;
                            case 3:
                                message.f = reader.float();
                                break;
                            case 4:
                                message.d = reader.double();
                                break;
                            case 5:
                                message.b = reader.bool();
                                break;
                            case 6:
                                message.s = reader.string();
                                break;
                            case 7:
                                message.bs = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Item message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cn.beepower.domain.message.Item
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cn.beepower.domain.message.Item} Item
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Item.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Item message.
                     * @function verify
                     * @memberof cn.beepower.domain.message.Item
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Item.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.t != null && message.hasOwnProperty("t"))
                            if (!$util.isString(message.t))
                                return "t: string expected";
                        if (message.i != null && message.hasOwnProperty("i"))
                            if (!$util.isInteger(message.i))
                                return "i: integer expected";
                        if (message.l != null && message.hasOwnProperty("l"))
                            if (!$util.isInteger(message.l) && !(message.l && $util.isInteger(message.l.low) && $util.isInteger(message.l.high)))
                                return "l: integer|Long expected";
                        if (message.f != null && message.hasOwnProperty("f"))
                            if (typeof message.f !== "number")
                                return "f: number expected";
                        if (message.d != null && message.hasOwnProperty("d"))
                            if (typeof message.d !== "number")
                                return "d: number expected";
                        if (message.b != null && message.hasOwnProperty("b"))
                            if (typeof message.b !== "boolean")
                                return "b: boolean expected";
                        if (message.s != null && message.hasOwnProperty("s"))
                            if (!$util.isString(message.s))
                                return "s: string expected";
                        if (message.bs != null && message.hasOwnProperty("bs"))
                            if (!(message.bs && typeof message.bs.length === "number" || $util.isString(message.bs)))
                                return "bs: buffer expected";
                        return null;
                    };

                    /**
                     * Creates an Item message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cn.beepower.domain.message.Item
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cn.beepower.domain.message.Item} Item
                     */
                    Item.fromObject = function fromObject(object) {
                        if (object instanceof $root.cn.beepower.domain.message.Item)
                            return object;
                        var message = new $root.cn.beepower.domain.message.Item();
                        if (object.t != null)
                            message.t = String(object.t);
                        if (object.i != null)
                            message.i = object.i | 0;
                        if (object.l != null)
                            if ($util.Long)
                                (message.l = $util.Long.fromValue(object.l)).unsigned = false;
                            else if (typeof object.l === "string")
                                message.l = parseInt(object.l, 10);
                            else if (typeof object.l === "number")
                                message.l = object.l;
                            else if (typeof object.l === "object")
                                message.l = new $util.LongBits(object.l.low >>> 0, object.l.high >>> 0).toNumber();
                        if (object.f != null)
                            message.f = Number(object.f);
                        if (object.d != null)
                            message.d = Number(object.d);
                        if (object.b != null)
                            message.b = Boolean(object.b);
                        if (object.s != null)
                            message.s = String(object.s);
                        if (object.bs != null)
                            if (typeof object.bs === "string")
                                $util.base64.decode(object.bs, message.bs = $util.newBuffer($util.base64.length(object.bs)), 0);
                            else if (object.bs.length)
                                message.bs = object.bs;
                        return message;
                    };

                    /**
                     * Creates a plain object from an Item message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cn.beepower.domain.message.Item
                     * @static
                     * @param {cn.beepower.domain.message.Item} message Item
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Item.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.i = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.l = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.l = options.longs === String ? "0" : 0;
                            object.f = 0;
                            object.d = 0;
                            object.b = true;
                            object.s = "";
                            if (options.bytes === String)
                                object.bs = "";
                            else {
                                object.bs = [];
                                if (options.bytes !== Array)
                                    object.bs = $util.newBuffer(object.bs);
                            }
                            object.t = "";
                        }
                        if (message.i != null && message.hasOwnProperty("i"))
                            object.i = message.i;
                        if (message.l != null && message.hasOwnProperty("l"))
                            if (typeof message.l === "number")
                                object.l = options.longs === String ? String(message.l) : message.l;
                            else
                                object.l = options.longs === String ? $util.Long.prototype.toString.call(message.l) : options.longs === Number ? new $util.LongBits(message.l.low >>> 0, message.l.high >>> 0).toNumber() : message.l;
                        if (message.f != null && message.hasOwnProperty("f"))
                            object.f = options.json && !isFinite(message.f) ? String(message.f) : message.f;
                        if (message.d != null && message.hasOwnProperty("d"))
                            object.d = options.json && !isFinite(message.d) ? String(message.d) : message.d;
                        if (message.b != null && message.hasOwnProperty("b"))
                            object.b = message.b;
                        if (message.s != null && message.hasOwnProperty("s"))
                            object.s = message.s;
                        if (message.bs != null && message.hasOwnProperty("bs"))
                            object.bs = options.bytes === String ? $util.base64.encode(message.bs, 0, message.bs.length) : options.bytes === Array ? Array.prototype.slice.call(message.bs) : message.bs;
                        if (message.t != null && message.hasOwnProperty("t"))
                            object.t = message.t;
                        return object;
                    };

                    /**
                     * Converts this Item to JSON.
                     * @function toJSON
                     * @memberof cn.beepower.domain.message.Item
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Item.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Item;
                })();

                message.Items = (function() {

                    /**
                     * Properties of an Items.
                     * @memberof cn.beepower.domain.message
                     * @interface IItems
                     * @property {Array.<number>|null} [i] Items i
                     * @property {Array.<number|Long>|null} [l] Items l
                     * @property {Array.<number>|null} [f] Items f
                     * @property {Array.<number>|null} [d] Items d
                     * @property {Array.<boolean>|null} [b] Items b
                     * @property {Array.<string>|null} [s] Items s
                     * @property {Array.<Uint8Array>|null} [bs] Items bs
                     * @property {Array.<number>|null} [iKey] Items iKey
                     * @property {Array.<number|Long>|null} [lKey] Items lKey
                     * @property {Array.<string>|null} [sKey] Items sKey
                     * @property {string|null} [keyType] Items keyType
                     * @property {string|null} [name] Items name
                     * @property {number|Long|null} [timestamp] Items timestamp
                     * @property {string|null} [t] Items t
                     */

                    /**
                     * Constructs a new Items.
                     * @memberof cn.beepower.domain.message
                     * @classdesc Represents an Items.
                     * @implements IItems
                     * @constructor
                     * @param {cn.beepower.domain.message.IItems=} [properties] Properties to set
                     */
                    function Items(properties) {
                        this.i = [];
                        this.l = [];
                        this.f = [];
                        this.d = [];
                        this.b = [];
                        this.s = [];
                        this.bs = [];
                        this.iKey = [];
                        this.lKey = [];
                        this.sKey = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Items i.
                     * @member {Array.<number>} i
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     */
                    Items.prototype.i = $util.emptyArray;

                    /**
                     * Items l.
                     * @member {Array.<number|Long>} l
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     */
                    Items.prototype.l = $util.emptyArray;

                    /**
                     * Items f.
                     * @member {Array.<number>} f
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     */
                    Items.prototype.f = $util.emptyArray;

                    /**
                     * Items d.
                     * @member {Array.<number>} d
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     */
                    Items.prototype.d = $util.emptyArray;

                    /**
                     * Items b.
                     * @member {Array.<boolean>} b
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     */
                    Items.prototype.b = $util.emptyArray;

                    /**
                     * Items s.
                     * @member {Array.<string>} s
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     */
                    Items.prototype.s = $util.emptyArray;

                    /**
                     * Items bs.
                     * @member {Array.<Uint8Array>} bs
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     */
                    Items.prototype.bs = $util.emptyArray;

                    /**
                     * Items iKey.
                     * @member {Array.<number>} iKey
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     */
                    Items.prototype.iKey = $util.emptyArray;

                    /**
                     * Items lKey.
                     * @member {Array.<number|Long>} lKey
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     */
                    Items.prototype.lKey = $util.emptyArray;

                    /**
                     * Items sKey.
                     * @member {Array.<string>} sKey
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     */
                    Items.prototype.sKey = $util.emptyArray;

                    /**
                     * Items keyType.
                     * @member {string} keyType
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     */
                    Items.prototype.keyType = "";

                    /**
                     * Items name.
                     * @member {string} name
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     */
                    Items.prototype.name = "";

                    /**
                     * Items timestamp.
                     * @member {number|Long} timestamp
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     */
                    Items.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Items t.
                     * @member {string} t
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     */
                    Items.prototype.t = "";

                    /**
                     * Creates a new Items instance using the specified properties.
                     * @function create
                     * @memberof cn.beepower.domain.message.Items
                     * @static
                     * @param {cn.beepower.domain.message.IItems=} [properties] Properties to set
                     * @returns {cn.beepower.domain.message.Items} Items instance
                     */
                    Items.create = function create(properties) {
                        return new Items(properties);
                    };

                    /**
                     * Encodes the specified Items message. Does not implicitly {@link cn.beepower.domain.message.Items.verify|verify} messages.
                     * @function encode
                     * @memberof cn.beepower.domain.message.Items
                     * @static
                     * @param {cn.beepower.domain.message.IItems} message Items message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Items.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.i != null && message.i.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.i.length; ++i)
                                writer.int32(message.i[i]);
                            writer.ldelim();
                        }
                        if (message.l != null && message.l.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.l.length; ++i)
                                writer.int64(message.l[i]);
                            writer.ldelim();
                        }
                        if (message.f != null && message.f.length) {
                            writer.uint32(/* id 3, wireType 2 =*/26).fork();
                            for (var i = 0; i < message.f.length; ++i)
                                writer.float(message.f[i]);
                            writer.ldelim();
                        }
                        if (message.d != null && message.d.length) {
                            writer.uint32(/* id 4, wireType 2 =*/34).fork();
                            for (var i = 0; i < message.d.length; ++i)
                                writer.double(message.d[i]);
                            writer.ldelim();
                        }
                        if (message.b != null && message.b.length) {
                            writer.uint32(/* id 5, wireType 2 =*/42).fork();
                            for (var i = 0; i < message.b.length; ++i)
                                writer.bool(message.b[i]);
                            writer.ldelim();
                        }
                        if (message.s != null && message.s.length)
                            for (var i = 0; i < message.s.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.s[i]);
                        if (message.bs != null && message.bs.length)
                            for (var i = 0; i < message.bs.length; ++i)
                                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.bs[i]);
                        if (message.iKey != null && message.iKey.length) {
                            writer.uint32(/* id 9, wireType 2 =*/74).fork();
                            for (var i = 0; i < message.iKey.length; ++i)
                                writer.int32(message.iKey[i]);
                            writer.ldelim();
                        }
                        if (message.lKey != null && message.lKey.length) {
                            writer.uint32(/* id 10, wireType 2 =*/82).fork();
                            for (var i = 0; i < message.lKey.length; ++i)
                                writer.int64(message.lKey[i]);
                            writer.ldelim();
                        }
                        if (message.sKey != null && message.sKey.length)
                            for (var i = 0; i < message.sKey.length; ++i)
                                writer.uint32(/* id 11, wireType 2 =*/90).string(message.sKey[i]);
                        if (message.keyType != null && message.hasOwnProperty("keyType"))
                            writer.uint32(/* id 12, wireType 2 =*/98).string(message.keyType);
                        if (message.name != null && message.hasOwnProperty("name"))
                            writer.uint32(/* id 13, wireType 2 =*/106).string(message.name);
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            writer.uint32(/* id 14, wireType 0 =*/112).int64(message.timestamp);
                        if (message.t != null && message.hasOwnProperty("t"))
                            writer.uint32(/* id 15, wireType 2 =*/122).string(message.t);
                        return writer;
                    };

                    /**
                     * Encodes the specified Items message, length delimited. Does not implicitly {@link cn.beepower.domain.message.Items.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cn.beepower.domain.message.Items
                     * @static
                     * @param {cn.beepower.domain.message.IItems} message Items message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Items.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Items message from the specified reader or buffer.
                     * @function decode
                     * @memberof cn.beepower.domain.message.Items
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cn.beepower.domain.message.Items} Items
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Items.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cn.beepower.domain.message.Items();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.i && message.i.length))
                                    message.i = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.i.push(reader.int32());
                                } else
                                    message.i.push(reader.int32());
                                break;
                            case 2:
                                if (!(message.l && message.l.length))
                                    message.l = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.l.push(reader.int64());
                                } else
                                    message.l.push(reader.int64());
                                break;
                            case 3:
                                if (!(message.f && message.f.length))
                                    message.f = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.f.push(reader.float());
                                } else
                                    message.f.push(reader.float());
                                break;
                            case 4:
                                if (!(message.d && message.d.length))
                                    message.d = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.d.push(reader.double());
                                } else
                                    message.d.push(reader.double());
                                break;
                            case 5:
                                if (!(message.b && message.b.length))
                                    message.b = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.b.push(reader.bool());
                                } else
                                    message.b.push(reader.bool());
                                break;
                            case 6:
                                if (!(message.s && message.s.length))
                                    message.s = [];
                                message.s.push(reader.string());
                                break;
                            case 7:
                                if (!(message.bs && message.bs.length))
                                    message.bs = [];
                                message.bs.push(reader.bytes());
                                break;
                            case 9:
                                if (!(message.iKey && message.iKey.length))
                                    message.iKey = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.iKey.push(reader.int32());
                                } else
                                    message.iKey.push(reader.int32());
                                break;
                            case 10:
                                if (!(message.lKey && message.lKey.length))
                                    message.lKey = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.lKey.push(reader.int64());
                                } else
                                    message.lKey.push(reader.int64());
                                break;
                            case 11:
                                if (!(message.sKey && message.sKey.length))
                                    message.sKey = [];
                                message.sKey.push(reader.string());
                                break;
                            case 12:
                                message.keyType = reader.string();
                                break;
                            case 13:
                                message.name = reader.string();
                                break;
                            case 14:
                                message.timestamp = reader.int64();
                                break;
                            case 15:
                                message.t = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Items message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cn.beepower.domain.message.Items
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cn.beepower.domain.message.Items} Items
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Items.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Items message.
                     * @function verify
                     * @memberof cn.beepower.domain.message.Items
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Items.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.i != null && message.hasOwnProperty("i")) {
                            if (!Array.isArray(message.i))
                                return "i: array expected";
                            for (var i = 0; i < message.i.length; ++i)
                                if (!$util.isInteger(message.i[i]))
                                    return "i: integer[] expected";
                        }
                        if (message.l != null && message.hasOwnProperty("l")) {
                            if (!Array.isArray(message.l))
                                return "l: array expected";
                            for (var i = 0; i < message.l.length; ++i)
                                if (!$util.isInteger(message.l[i]) && !(message.l[i] && $util.isInteger(message.l[i].low) && $util.isInteger(message.l[i].high)))
                                    return "l: integer|Long[] expected";
                        }
                        if (message.f != null && message.hasOwnProperty("f")) {
                            if (!Array.isArray(message.f))
                                return "f: array expected";
                            for (var i = 0; i < message.f.length; ++i)
                                if (typeof message.f[i] !== "number")
                                    return "f: number[] expected";
                        }
                        if (message.d != null && message.hasOwnProperty("d")) {
                            if (!Array.isArray(message.d))
                                return "d: array expected";
                            for (var i = 0; i < message.d.length; ++i)
                                if (typeof message.d[i] !== "number")
                                    return "d: number[] expected";
                        }
                        if (message.b != null && message.hasOwnProperty("b")) {
                            if (!Array.isArray(message.b))
                                return "b: array expected";
                            for (var i = 0; i < message.b.length; ++i)
                                if (typeof message.b[i] !== "boolean")
                                    return "b: boolean[] expected";
                        }
                        if (message.s != null && message.hasOwnProperty("s")) {
                            if (!Array.isArray(message.s))
                                return "s: array expected";
                            for (var i = 0; i < message.s.length; ++i)
                                if (!$util.isString(message.s[i]))
                                    return "s: string[] expected";
                        }
                        if (message.bs != null && message.hasOwnProperty("bs")) {
                            if (!Array.isArray(message.bs))
                                return "bs: array expected";
                            for (var i = 0; i < message.bs.length; ++i)
                                if (!(message.bs[i] && typeof message.bs[i].length === "number" || $util.isString(message.bs[i])))
                                    return "bs: buffer[] expected";
                        }
                        if (message.iKey != null && message.hasOwnProperty("iKey")) {
                            if (!Array.isArray(message.iKey))
                                return "iKey: array expected";
                            for (var i = 0; i < message.iKey.length; ++i)
                                if (!$util.isInteger(message.iKey[i]))
                                    return "iKey: integer[] expected";
                        }
                        if (message.lKey != null && message.hasOwnProperty("lKey")) {
                            if (!Array.isArray(message.lKey))
                                return "lKey: array expected";
                            for (var i = 0; i < message.lKey.length; ++i)
                                if (!$util.isInteger(message.lKey[i]) && !(message.lKey[i] && $util.isInteger(message.lKey[i].low) && $util.isInteger(message.lKey[i].high)))
                                    return "lKey: integer|Long[] expected";
                        }
                        if (message.sKey != null && message.hasOwnProperty("sKey")) {
                            if (!Array.isArray(message.sKey))
                                return "sKey: array expected";
                            for (var i = 0; i < message.sKey.length; ++i)
                                if (!$util.isString(message.sKey[i]))
                                    return "sKey: string[] expected";
                        }
                        if (message.keyType != null && message.hasOwnProperty("keyType"))
                            if (!$util.isString(message.keyType))
                                return "keyType: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        if (message.t != null && message.hasOwnProperty("t"))
                            if (!$util.isString(message.t))
                                return "t: string expected";
                        return null;
                    };

                    /**
                     * Creates an Items message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cn.beepower.domain.message.Items
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cn.beepower.domain.message.Items} Items
                     */
                    Items.fromObject = function fromObject(object) {
                        if (object instanceof $root.cn.beepower.domain.message.Items)
                            return object;
                        var message = new $root.cn.beepower.domain.message.Items();
                        if (object.i) {
                            if (!Array.isArray(object.i))
                                throw TypeError(".cn.beepower.domain.message.Items.i: array expected");
                            message.i = [];
                            for (var i = 0; i < object.i.length; ++i)
                                message.i[i] = object.i[i] | 0;
                        }
                        if (object.l) {
                            if (!Array.isArray(object.l))
                                throw TypeError(".cn.beepower.domain.message.Items.l: array expected");
                            message.l = [];
                            for (var i = 0; i < object.l.length; ++i)
                                if ($util.Long)
                                    (message.l[i] = $util.Long.fromValue(object.l[i])).unsigned = false;
                                else if (typeof object.l[i] === "string")
                                    message.l[i] = parseInt(object.l[i], 10);
                                else if (typeof object.l[i] === "number")
                                    message.l[i] = object.l[i];
                                else if (typeof object.l[i] === "object")
                                    message.l[i] = new $util.LongBits(object.l[i].low >>> 0, object.l[i].high >>> 0).toNumber();
                        }
                        if (object.f) {
                            if (!Array.isArray(object.f))
                                throw TypeError(".cn.beepower.domain.message.Items.f: array expected");
                            message.f = [];
                            for (var i = 0; i < object.f.length; ++i)
                                message.f[i] = Number(object.f[i]);
                        }
                        if (object.d) {
                            if (!Array.isArray(object.d))
                                throw TypeError(".cn.beepower.domain.message.Items.d: array expected");
                            message.d = [];
                            for (var i = 0; i < object.d.length; ++i)
                                message.d[i] = Number(object.d[i]);
                        }
                        if (object.b) {
                            if (!Array.isArray(object.b))
                                throw TypeError(".cn.beepower.domain.message.Items.b: array expected");
                            message.b = [];
                            for (var i = 0; i < object.b.length; ++i)
                                message.b[i] = Boolean(object.b[i]);
                        }
                        if (object.s) {
                            if (!Array.isArray(object.s))
                                throw TypeError(".cn.beepower.domain.message.Items.s: array expected");
                            message.s = [];
                            for (var i = 0; i < object.s.length; ++i)
                                message.s[i] = String(object.s[i]);
                        }
                        if (object.bs) {
                            if (!Array.isArray(object.bs))
                                throw TypeError(".cn.beepower.domain.message.Items.bs: array expected");
                            message.bs = [];
                            for (var i = 0; i < object.bs.length; ++i)
                                if (typeof object.bs[i] === "string")
                                    $util.base64.decode(object.bs[i], message.bs[i] = $util.newBuffer($util.base64.length(object.bs[i])), 0);
                                else if (object.bs[i].length)
                                    message.bs[i] = object.bs[i];
                        }
                        if (object.iKey) {
                            if (!Array.isArray(object.iKey))
                                throw TypeError(".cn.beepower.domain.message.Items.iKey: array expected");
                            message.iKey = [];
                            for (var i = 0; i < object.iKey.length; ++i)
                                message.iKey[i] = object.iKey[i] | 0;
                        }
                        if (object.lKey) {
                            if (!Array.isArray(object.lKey))
                                throw TypeError(".cn.beepower.domain.message.Items.lKey: array expected");
                            message.lKey = [];
                            for (var i = 0; i < object.lKey.length; ++i)
                                if ($util.Long)
                                    (message.lKey[i] = $util.Long.fromValue(object.lKey[i])).unsigned = false;
                                else if (typeof object.lKey[i] === "string")
                                    message.lKey[i] = parseInt(object.lKey[i], 10);
                                else if (typeof object.lKey[i] === "number")
                                    message.lKey[i] = object.lKey[i];
                                else if (typeof object.lKey[i] === "object")
                                    message.lKey[i] = new $util.LongBits(object.lKey[i].low >>> 0, object.lKey[i].high >>> 0).toNumber();
                        }
                        if (object.sKey) {
                            if (!Array.isArray(object.sKey))
                                throw TypeError(".cn.beepower.domain.message.Items.sKey: array expected");
                            message.sKey = [];
                            for (var i = 0; i < object.sKey.length; ++i)
                                message.sKey[i] = String(object.sKey[i]);
                        }
                        if (object.keyType != null)
                            message.keyType = String(object.keyType);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.timestamp != null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                        if (object.t != null)
                            message.t = String(object.t);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Items message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cn.beepower.domain.message.Items
                     * @static
                     * @param {cn.beepower.domain.message.Items} message Items
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Items.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.i = [];
                            object.l = [];
                            object.f = [];
                            object.d = [];
                            object.b = [];
                            object.s = [];
                            object.bs = [];
                            object.iKey = [];
                            object.lKey = [];
                            object.sKey = [];
                        }
                        if (options.defaults) {
                            object.keyType = "";
                            object.name = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestamp = options.longs === String ? "0" : 0;
                            object.t = "";
                        }
                        if (message.i && message.i.length) {
                            object.i = [];
                            for (var j = 0; j < message.i.length; ++j)
                                object.i[j] = message.i[j];
                        }
                        if (message.l && message.l.length) {
                            object.l = [];
                            for (var j = 0; j < message.l.length; ++j)
                                if (typeof message.l[j] === "number")
                                    object.l[j] = options.longs === String ? String(message.l[j]) : message.l[j];
                                else
                                    object.l[j] = options.longs === String ? $util.Long.prototype.toString.call(message.l[j]) : options.longs === Number ? new $util.LongBits(message.l[j].low >>> 0, message.l[j].high >>> 0).toNumber() : message.l[j];
                        }
                        if (message.f && message.f.length) {
                            object.f = [];
                            for (var j = 0; j < message.f.length; ++j)
                                object.f[j] = options.json && !isFinite(message.f[j]) ? String(message.f[j]) : message.f[j];
                        }
                        if (message.d && message.d.length) {
                            object.d = [];
                            for (var j = 0; j < message.d.length; ++j)
                                object.d[j] = options.json && !isFinite(message.d[j]) ? String(message.d[j]) : message.d[j];
                        }
                        if (message.b && message.b.length) {
                            object.b = [];
                            for (var j = 0; j < message.b.length; ++j)
                                object.b[j] = message.b[j];
                        }
                        if (message.s && message.s.length) {
                            object.s = [];
                            for (var j = 0; j < message.s.length; ++j)
                                object.s[j] = message.s[j];
                        }
                        if (message.bs && message.bs.length) {
                            object.bs = [];
                            for (var j = 0; j < message.bs.length; ++j)
                                object.bs[j] = options.bytes === String ? $util.base64.encode(message.bs[j], 0, message.bs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.bs[j]) : message.bs[j];
                        }
                        if (message.iKey && message.iKey.length) {
                            object.iKey = [];
                            for (var j = 0; j < message.iKey.length; ++j)
                                object.iKey[j] = message.iKey[j];
                        }
                        if (message.lKey && message.lKey.length) {
                            object.lKey = [];
                            for (var j = 0; j < message.lKey.length; ++j)
                                if (typeof message.lKey[j] === "number")
                                    object.lKey[j] = options.longs === String ? String(message.lKey[j]) : message.lKey[j];
                                else
                                    object.lKey[j] = options.longs === String ? $util.Long.prototype.toString.call(message.lKey[j]) : options.longs === Number ? new $util.LongBits(message.lKey[j].low >>> 0, message.lKey[j].high >>> 0).toNumber() : message.lKey[j];
                        }
                        if (message.sKey && message.sKey.length) {
                            object.sKey = [];
                            for (var j = 0; j < message.sKey.length; ++j)
                                object.sKey[j] = message.sKey[j];
                        }
                        if (message.keyType != null && message.hasOwnProperty("keyType"))
                            object.keyType = message.keyType;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                        if (message.t != null && message.hasOwnProperty("t"))
                            object.t = message.t;
                        return object;
                    };

                    /**
                     * Converts this Items to JSON.
                     * @function toJSON
                     * @memberof cn.beepower.domain.message.Items
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Items.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Items;
                })();

                message.Series = (function() {

                    /**
                     * Properties of a Series.
                     * @memberof cn.beepower.domain.message
                     * @interface ISeries
                     * @property {string|null} [dbName] Series dbName
                     * @property {string|null} [mapName] Series mapName
                     * @property {number|Long|null} [timestamp] Series timestamp
                     * @property {cn.beepower.domain.message.IItem|null} [property] Series property
                     * @property {cn.beepower.domain.message.IItems|null} [keys] Series keys
                     * @property {cn.beepower.domain.message.IItems|null} [values] Series values
                     */

                    /**
                     * Constructs a new Series.
                     * @memberof cn.beepower.domain.message
                     * @classdesc Represents a Series.
                     * @implements ISeries
                     * @constructor
                     * @param {cn.beepower.domain.message.ISeries=} [properties] Properties to set
                     */
                    function Series(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Series dbName.
                     * @member {string} dbName
                     * @memberof cn.beepower.domain.message.Series
                     * @instance
                     */
                    Series.prototype.dbName = "";

                    /**
                     * Series mapName.
                     * @member {string} mapName
                     * @memberof cn.beepower.domain.message.Series
                     * @instance
                     */
                    Series.prototype.mapName = "";

                    /**
                     * Series timestamp.
                     * @member {number|Long} timestamp
                     * @memberof cn.beepower.domain.message.Series
                     * @instance
                     */
                    Series.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Series property.
                     * @member {cn.beepower.domain.message.IItem|null|undefined} property
                     * @memberof cn.beepower.domain.message.Series
                     * @instance
                     */
                    Series.prototype.property = null;

                    /**
                     * Series keys.
                     * @member {cn.beepower.domain.message.IItems|null|undefined} keys
                     * @memberof cn.beepower.domain.message.Series
                     * @instance
                     */
                    Series.prototype.keys = null;

                    /**
                     * Series values.
                     * @member {cn.beepower.domain.message.IItems|null|undefined} values
                     * @memberof cn.beepower.domain.message.Series
                     * @instance
                     */
                    Series.prototype.values = null;

                    /**
                     * Creates a new Series instance using the specified properties.
                     * @function create
                     * @memberof cn.beepower.domain.message.Series
                     * @static
                     * @param {cn.beepower.domain.message.ISeries=} [properties] Properties to set
                     * @returns {cn.beepower.domain.message.Series} Series instance
                     */
                    Series.create = function create(properties) {
                        return new Series(properties);
                    };

                    /**
                     * Encodes the specified Series message. Does not implicitly {@link cn.beepower.domain.message.Series.verify|verify} messages.
                     * @function encode
                     * @memberof cn.beepower.domain.message.Series
                     * @static
                     * @param {cn.beepower.domain.message.ISeries} message Series message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Series.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.dbName != null && message.hasOwnProperty("dbName"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.dbName);
                        if (message.mapName != null && message.hasOwnProperty("mapName"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.mapName);
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
                        if (message.property != null && message.hasOwnProperty("property"))
                            $root.cn.beepower.domain.message.Item.encode(message.property, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.keys != null && message.hasOwnProperty("keys"))
                            $root.cn.beepower.domain.message.Items.encode(message.keys, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                        if (message.values != null && message.hasOwnProperty("values"))
                            $root.cn.beepower.domain.message.Items.encode(message.values, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Series message, length delimited. Does not implicitly {@link cn.beepower.domain.message.Series.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cn.beepower.domain.message.Series
                     * @static
                     * @param {cn.beepower.domain.message.ISeries} message Series message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Series.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Series message from the specified reader or buffer.
                     * @function decode
                     * @memberof cn.beepower.domain.message.Series
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cn.beepower.domain.message.Series} Series
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Series.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cn.beepower.domain.message.Series();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.dbName = reader.string();
                                break;
                            case 2:
                                message.mapName = reader.string();
                                break;
                            case 3:
                                message.timestamp = reader.int64();
                                break;
                            case 5:
                                message.property = $root.cn.beepower.domain.message.Item.decode(reader, reader.uint32());
                                break;
                            case 14:
                                message.keys = $root.cn.beepower.domain.message.Items.decode(reader, reader.uint32());
                                break;
                            case 15:
                                message.values = $root.cn.beepower.domain.message.Items.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Series message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cn.beepower.domain.message.Series
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cn.beepower.domain.message.Series} Series
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Series.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Series message.
                     * @function verify
                     * @memberof cn.beepower.domain.message.Series
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Series.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.dbName != null && message.hasOwnProperty("dbName"))
                            if (!$util.isString(message.dbName))
                                return "dbName: string expected";
                        if (message.mapName != null && message.hasOwnProperty("mapName"))
                            if (!$util.isString(message.mapName))
                                return "mapName: string expected";
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        if (message.property != null && message.hasOwnProperty("property")) {
                            var error = $root.cn.beepower.domain.message.Item.verify(message.property);
                            if (error)
                                return "property." + error;
                        }
                        if (message.keys != null && message.hasOwnProperty("keys")) {
                            var error = $root.cn.beepower.domain.message.Items.verify(message.keys);
                            if (error)
                                return "keys." + error;
                        }
                        if (message.values != null && message.hasOwnProperty("values")) {
                            var error = $root.cn.beepower.domain.message.Items.verify(message.values);
                            if (error)
                                return "values." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Series message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cn.beepower.domain.message.Series
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cn.beepower.domain.message.Series} Series
                     */
                    Series.fromObject = function fromObject(object) {
                        if (object instanceof $root.cn.beepower.domain.message.Series)
                            return object;
                        var message = new $root.cn.beepower.domain.message.Series();
                        if (object.dbName != null)
                            message.dbName = String(object.dbName);
                        if (object.mapName != null)
                            message.mapName = String(object.mapName);
                        if (object.timestamp != null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                        if (object.property != null) {
                            if (typeof object.property !== "object")
                                throw TypeError(".cn.beepower.domain.message.Series.property: object expected");
                            message.property = $root.cn.beepower.domain.message.Item.fromObject(object.property);
                        }
                        if (object.keys != null) {
                            if (typeof object.keys !== "object")
                                throw TypeError(".cn.beepower.domain.message.Series.keys: object expected");
                            message.keys = $root.cn.beepower.domain.message.Items.fromObject(object.keys);
                        }
                        if (object.values != null) {
                            if (typeof object.values !== "object")
                                throw TypeError(".cn.beepower.domain.message.Series.values: object expected");
                            message.values = $root.cn.beepower.domain.message.Items.fromObject(object.values);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Series message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cn.beepower.domain.message.Series
                     * @static
                     * @param {cn.beepower.domain.message.Series} message Series
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Series.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.dbName = "";
                            object.mapName = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestamp = options.longs === String ? "0" : 0;
                            object.property = null;
                            object.keys = null;
                            object.values = null;
                        }
                        if (message.dbName != null && message.hasOwnProperty("dbName"))
                            object.dbName = message.dbName;
                        if (message.mapName != null && message.hasOwnProperty("mapName"))
                            object.mapName = message.mapName;
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                        if (message.property != null && message.hasOwnProperty("property"))
                            object.property = $root.cn.beepower.domain.message.Item.toObject(message.property, options);
                        if (message.keys != null && message.hasOwnProperty("keys"))
                            object.keys = $root.cn.beepower.domain.message.Items.toObject(message.keys, options);
                        if (message.values != null && message.hasOwnProperty("values"))
                            object.values = $root.cn.beepower.domain.message.Items.toObject(message.values, options);
                        return object;
                    };

                    /**
                     * Converts this Series to JSON.
                     * @function toJSON
                     * @memberof cn.beepower.domain.message.Series
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Series.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Series;
                })();

                /**
                 * com.fasterxml.jackson.databind.exc.InvalidFormatException: Can not construct instance of
                 * cn.beepower.domain.message.ResultType from number value (11): index value outside legal index range [0..9]
                 * @name cn.beepower.domain.message.ResultType
                 * @enum {string}
                 * @property {number} INVALID_PARAMETERS=0 INVALID_PARAMETERS value
                 * @property {number} ILLEGAL_STATE=1 ILLEGAL_STATE value
                 * @property {number} OPERATION_REJECTED=2 OPERATION_REJECTED value
                 * @property {number} OPERATION_FAIL=3 OPERATION_FAIL value
                 * @property {number} OPERATION_EXCEPTION=4 OPERATION_EXCEPTION value
                 * @property {number} TIME_OUT=5 TIME_OUT value
                 * @property {number} CANCELED=6 CANCELED value
                 * @property {number} RUNNING=9 RUNNING value
                 * @property {number} OK=10 OK value
                 * @property {number} FRESH=11 FRESH value
                 */
                message.ResultType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "INVALID_PARAMETERS"] = 0;
                    values[valuesById[1] = "ILLEGAL_STATE"] = 1;
                    values[valuesById[2] = "OPERATION_REJECTED"] = 2;
                    values[valuesById[3] = "OPERATION_FAIL"] = 3;
                    values[valuesById[4] = "OPERATION_EXCEPTION"] = 4;
                    values[valuesById[5] = "TIME_OUT"] = 5;
                    values[valuesById[6] = "CANCELED"] = 6;
                    values[valuesById[9] = "RUNNING"] = 9;
                    values[valuesById[10] = "OK"] = 10;
                    values[valuesById[11] = "FRESH"] = 11;
                    return values;
                })();

                message.Result = (function() {

                    /**
                     * Properties of a Result.
                     * @memberof cn.beepower.domain.message
                     * @interface IResult
                     * @property {cn.beepower.domain.message.ResultType|null} [type] Result type
                     * @property {string|null} [message] Result message
                     * @property {Uint8Array|null} [value] Result value
                     * @property {string|null} [valueType] Result valueType
                     */

                    /**
                     * Constructs a new Result.
                     * @memberof cn.beepower.domain.message
                     * @classdesc Represents a Result.
                     * @implements IResult
                     * @constructor
                     * @param {cn.beepower.domain.message.IResult=} [properties] Properties to set
                     */
                    function Result(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Result type.
                     * @member {cn.beepower.domain.message.ResultType} type
                     * @memberof cn.beepower.domain.message.Result
                     * @instance
                     */
                    Result.prototype.type = 5;

                    /**
                     * Result message.
                     * @member {string} message
                     * @memberof cn.beepower.domain.message.Result
                     * @instance
                     */
                    Result.prototype.message = "";

                    /**
                     * Result value.
                     * @member {Uint8Array} value
                     * @memberof cn.beepower.domain.message.Result
                     * @instance
                     */
                    Result.prototype.value = $util.newBuffer([]);

                    /**
                     * Result valueType.
                     * @member {string} valueType
                     * @memberof cn.beepower.domain.message.Result
                     * @instance
                     */
                    Result.prototype.valueType = "";

                    /**
                     * Creates a new Result instance using the specified properties.
                     * @function create
                     * @memberof cn.beepower.domain.message.Result
                     * @static
                     * @param {cn.beepower.domain.message.IResult=} [properties] Properties to set
                     * @returns {cn.beepower.domain.message.Result} Result instance
                     */
                    Result.create = function create(properties) {
                        return new Result(properties);
                    };

                    /**
                     * Encodes the specified Result message. Does not implicitly {@link cn.beepower.domain.message.Result.verify|verify} messages.
                     * @function encode
                     * @memberof cn.beepower.domain.message.Result
                     * @static
                     * @param {cn.beepower.domain.message.IResult} message Result message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Result.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                        if (message.message != null && message.hasOwnProperty("message"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                        if (message.value != null && message.hasOwnProperty("value"))
                            writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.value);
                        if (message.valueType != null && message.hasOwnProperty("valueType"))
                            writer.uint32(/* id 11, wireType 2 =*/90).string(message.valueType);
                        return writer;
                    };

                    /**
                     * Encodes the specified Result message, length delimited. Does not implicitly {@link cn.beepower.domain.message.Result.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cn.beepower.domain.message.Result
                     * @static
                     * @param {cn.beepower.domain.message.IResult} message Result message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Result.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Result message from the specified reader or buffer.
                     * @function decode
                     * @memberof cn.beepower.domain.message.Result
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cn.beepower.domain.message.Result} Result
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Result.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cn.beepower.domain.message.Result();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.type = reader.int32();
                                break;
                            case 2:
                                message.message = reader.string();
                                break;
                            case 10:
                                message.value = reader.bytes();
                                break;
                            case 11:
                                message.valueType = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Result message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cn.beepower.domain.message.Result
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cn.beepower.domain.message.Result} Result
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Result.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Result message.
                     * @function verify
                     * @memberof cn.beepower.domain.message.Result
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Result.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.type != null && message.hasOwnProperty("type"))
                            switch (message.type) {
                            default:
                                return "type: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 9:
                            case 10:
                            case 11:
                                break;
                            }
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        if (message.value != null && message.hasOwnProperty("value"))
                            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                                return "value: buffer expected";
                        if (message.valueType != null && message.hasOwnProperty("valueType"))
                            if (!$util.isString(message.valueType))
                                return "valueType: string expected";
                        return null;
                    };

                    /**
                     * Creates a Result message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cn.beepower.domain.message.Result
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cn.beepower.domain.message.Result} Result
                     */
                    Result.fromObject = function fromObject(object) {
                        if (object instanceof $root.cn.beepower.domain.message.Result)
                            return object;
                        var message = new $root.cn.beepower.domain.message.Result();
                        switch (object.type) {
                        case "INVALID_PARAMETERS":
                        case 0:
                            message.type = 0;
                            break;
                        case "ILLEGAL_STATE":
                        case 1:
                            message.type = 1;
                            break;
                        case "OPERATION_REJECTED":
                        case 2:
                            message.type = 2;
                            break;
                        case "OPERATION_FAIL":
                        case 3:
                            message.type = 3;
                            break;
                        case "OPERATION_EXCEPTION":
                        case 4:
                            message.type = 4;
                            break;
                        case "TIME_OUT":
                        case 5:
                            message.type = 5;
                            break;
                        case "CANCELED":
                        case 6:
                            message.type = 6;
                            break;
                        case "RUNNING":
                        case 9:
                            message.type = 9;
                            break;
                        case "OK":
                        case 10:
                            message.type = 10;
                            break;
                        case "FRESH":
                        case 11:
                            message.type = 11;
                            break;
                        }
                        if (object.message != null)
                            message.message = String(object.message);
                        if (object.value != null)
                            if (typeof object.value === "string")
                                $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                            else if (object.value.length)
                                message.value = object.value;
                        if (object.valueType != null)
                            message.valueType = String(object.valueType);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Result message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cn.beepower.domain.message.Result
                     * @static
                     * @param {cn.beepower.domain.message.Result} message Result
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Result.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.type = options.enums === String ? "TIME_OUT" : 5;
                            object.message = "";
                            if (options.bytes === String)
                                object.value = "";
                            else {
                                object.value = [];
                                if (options.bytes !== Array)
                                    object.value = $util.newBuffer(object.value);
                            }
                            object.valueType = "";
                        }
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = options.enums === String ? $root.cn.beepower.domain.message.ResultType[message.type] : message.type;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                        if (message.valueType != null && message.hasOwnProperty("valueType"))
                            object.valueType = message.valueType;
                        return object;
                    };

                    /**
                     * Converts this Result to JSON.
                     * @function toJSON
                     * @memberof cn.beepower.domain.message.Result
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Result.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Result;
                })();

                return message;
            })();

            return domain;
        })();

        return beepower;
    })();

    return cn;
})();

module.exports = $root;
