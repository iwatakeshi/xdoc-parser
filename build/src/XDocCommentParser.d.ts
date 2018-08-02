export declare enum TokenType {
    SINGLE_HASH_COMMENT = 0,
    SINGLE_STAR_COMMENT = 1,
    DOUBLE_STAR_COMMENT = 2,
    DOUBLE_SLASH_COMMENT = 3,
    TRIPLE_SLASH_COMMENT = 4,
    TRIPLE_QUOTE_COMMENT = 5
}
/**
 * Token is a class that tokenizes words and adds
 * useful information such as line and column number.
 *
 * # API
 *
 * ```
 * @class Token
 * @constructor (
 *  type: TokenType,
 *  text: string,
 *  line: number,
 *  column: number,
 *  position: number
 * ) => Token
 * ```
 */
export declare class Token {
    private name_;
    private type_;
    private text_;
    private line_;
    private column_;
    private position_;
    constructor(type: TokenType, text: string, line: number, column: number, position: number);
    readonly name: string;
    readonly type: TokenType;
    readonly text: string;
    readonly line: number;
    readonly column: number;
    readonly position: number;
    static getTokenName(type: TokenType): string;
    static getTokenType(type: string): TokenType;
}
/**
 * XDocCommentParser is a class that parses
 * c-style comments and python-style comments.
 *
 * # API
 *
 * ```
 * @constructor (source: string) => XDocCommentParser
 * ```
 *
 * # Remark
 * The parser can also parse double-star comments.
 *
 */
export default class XDocCommentParser {
    private tokens;
    private start;
    private position;
    private source;
    private line;
    private column;
    constructor(source: string);
    parse(): Token[];
    private scan;
    private addToken;
    private peek;
    private advance;
    private match;
    private isAtEnd;
    private readonly EOF;
}
