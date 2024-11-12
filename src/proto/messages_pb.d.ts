import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace messages. */
export namespace messages {

    /** Properties of a CursorMovement. */
    interface ICursorMovement {

        /** CursorMovement x */
        x?: (number|null);

        /** CursorMovement y */
        y?: (number|null);
    }

    /** Represents a CursorMovement. */
    class CursorMovement implements ICursorMovement {

        /**
         * Constructs a new CursorMovement.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.ICursorMovement);

        /** CursorMovement x. */
        public x: number;

        /** CursorMovement y. */
        public y: number;

        /**
         * Creates a new CursorMovement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CursorMovement instance
         */
        public static create(properties?: messages.ICursorMovement): messages.CursorMovement;

        /**
         * Encodes the specified CursorMovement message. Does not implicitly {@link messages.CursorMovement.verify|verify} messages.
         * @param message CursorMovement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.ICursorMovement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CursorMovement message, length delimited. Does not implicitly {@link messages.CursorMovement.verify|verify} messages.
         * @param message CursorMovement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.ICursorMovement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CursorMovement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CursorMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.CursorMovement;

        /**
         * Decodes a CursorMovement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CursorMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.CursorMovement;

        /**
         * Verifies a CursorMovement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CursorMovement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CursorMovement
         */
        public static fromObject(object: { [k: string]: any }): messages.CursorMovement;

        /**
         * Creates a plain object from a CursorMovement message. Also converts values to other types if specified.
         * @param message CursorMovement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.CursorMovement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CursorMovement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CursorMovement
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClickEvent. */
    interface IClickEvent {

        /** ClickEvent isRightClick */
        isRightClick?: (boolean|null);
    }

    /** Represents a ClickEvent. */
    class ClickEvent implements IClickEvent {

        /**
         * Constructs a new ClickEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IClickEvent);

        /** ClickEvent isRightClick. */
        public isRightClick: boolean;

        /**
         * Creates a new ClickEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClickEvent instance
         */
        public static create(properties?: messages.IClickEvent): messages.ClickEvent;

        /**
         * Encodes the specified ClickEvent message. Does not implicitly {@link messages.ClickEvent.verify|verify} messages.
         * @param message ClickEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IClickEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClickEvent message, length delimited. Does not implicitly {@link messages.ClickEvent.verify|verify} messages.
         * @param message ClickEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IClickEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClickEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClickEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.ClickEvent;

        /**
         * Decodes a ClickEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClickEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.ClickEvent;

        /**
         * Verifies a ClickEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClickEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClickEvent
         */
        public static fromObject(object: { [k: string]: any }): messages.ClickEvent;

        /**
         * Creates a plain object from a ClickEvent message. Also converts values to other types if specified.
         * @param message ClickEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.ClickEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClickEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClickEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KeyboardEvent. */
    interface IKeyboardEvent {

        /** KeyboardEvent key */
        key?: (string|null);
    }

    /** Represents a KeyboardEvent. */
    class KeyboardEvent implements IKeyboardEvent {

        /**
         * Constructs a new KeyboardEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IKeyboardEvent);

        /** KeyboardEvent key. */
        public key: string;

        /**
         * Creates a new KeyboardEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyboardEvent instance
         */
        public static create(properties?: messages.IKeyboardEvent): messages.KeyboardEvent;

        /**
         * Encodes the specified KeyboardEvent message. Does not implicitly {@link messages.KeyboardEvent.verify|verify} messages.
         * @param message KeyboardEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IKeyboardEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyboardEvent message, length delimited. Does not implicitly {@link messages.KeyboardEvent.verify|verify} messages.
         * @param message KeyboardEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IKeyboardEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyboardEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyboardEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.KeyboardEvent;

        /**
         * Decodes a KeyboardEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyboardEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.KeyboardEvent;

        /**
         * Verifies a KeyboardEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyboardEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyboardEvent
         */
        public static fromObject(object: { [k: string]: any }): messages.KeyboardEvent;

        /**
         * Creates a plain object from a KeyboardEvent message. Also converts values to other types if specified.
         * @param message KeyboardEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.KeyboardEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyboardEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KeyboardEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
