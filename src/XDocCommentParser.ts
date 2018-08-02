export enum TokenType {
  // EOF,
  SINGLE_HASH_COMMENT,
  SINGLE_STAR_COMMENT,
  DOUBLE_STAR_COMMENT,
  DOUBLE_SLASH_COMMENT,
  TRIPLE_SLASH_COMMENT,
  TRIPLE_QUOTE_COMMENT
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
export class Token {
  private name_: string;
  private type_: TokenType;
  private text_: string;
  private line_: number;
  private column_: number;
  private position_: number;

  constructor(
    type: TokenType,
    text: string,
    line: number,
    column: number,
    position: number
  ) {
    this.name_ = TokenType[type];
    this.type_ = type;
    this.text_ = text;
    this.line_ = line;
    this.column_ = column;
    this.position_ = position;
  }

  public get name(): string {
    return this.name_;
  }

  public get type(): TokenType {
    return this.type_;
  }

  public get text(): string {
    return this.text_;
  }

  public get line(): number {
    return this.line_;
  }

  public get column(): number {
    return this.column_;
  }

  public get position(): number {
    return this.position_;
  }

  static getTokenName(type: TokenType): string {
    return TokenType[type];
  }

  static getTokenType(type: string): TokenType {
    return TokenType[type];
  }
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
  private tokens: Token[];
  private start: number;
  private position: number;
  private source: string;
  private line: number;
  private column: number;

  constructor(source: string) {
    this.tokens = [];
    this.position = this.start = 0;
    this.source = source.replace(/\r\n/g, '\n');
    this.line = 1;
    this.column = 1;
  }

  public parse() {
    while (!this.isAtEnd()) {
      this.start = this.position;
      this.scan();
    }

    return this.tokens;
  }

  private scan() {
    const ch = this.advance();
    switch (ch) {
      case '/':
        if (this.match('*')) {
          let isDoubleStartComment = false;
          if (this.match('*')) {
            // Substring starts from here
            this.start = this.position
            isDoubleStartComment = true;
          } else this.start = this.position;

          while ((this.peek() + this.peek(1)) !== '*/' && !this.isAtEnd()) this.advance();

          this.addToken(isDoubleStartComment ? TokenType.DOUBLE_STAR_COMMENT : TokenType.SINGLE_STAR_COMMENT)

          // consume '*/'
          this.advance(2);

        } else if (this.match('/')) {

          if (this.match('/')) {
            // Substring starts from here
            this.start = this.position;
            while (this.peek() !== '\n' && !this.isAtEnd()) this.advance();
            this.addToken(TokenType.TRIPLE_SLASH_COMMENT)
            break;
          }
          // Substring starts from here
          this.start = this.position;

          while (this.peek() !== '\n' && !this.isAtEnd()) this.advance();

          this.addToken(TokenType.DOUBLE_SLASH_COMMENT);
        }

        break;
      case '"':
        // Python-style multi-line comment
        if (this.peek() + this.peek(1) === '""') {
          // consume '"""'
          this.advance(2);
          // Substring starts from here
          this.start = this.position;

          while (this.peek() + this.peek(1) + this.peek(2) !== '"""' && !this.isAtEnd()) this.advance();

          this.addToken(TokenType.TRIPLE_QUOTE_COMMENT);

          // consume '"""'
          this.advance(3);
        }
        break;
      // Python/Bash-style single comment
      case '#':
        // Substring starts from here
        this.start = this.position;
        while (this.peek() !== '\n' && !this.isAtEnd()) this.advance();
        this.addToken(TokenType.SINGLE_HASH_COMMENT);
        this.advance();
        break;
    }
  }

  private addToken(type: TokenType) {
    let text = this.source.substring(this.start, this.position);

    // Process the dobule star comment
    if (type === TokenType.DOUBLE_STAR_COMMENT) {

      text = text.split('\n')
        .map(line => {
          // Replace the first '*' 
          let lineArray = line.replace(/[*]/, '').split('')
          if (lineArray[0] === ' ') {
            lineArray.shift();
            if (lineArray[0] === ' ') {
              lineArray.shift()
            }
          }
          return lineArray.join('');
        }).join('\n')
    }

    this.tokens.push(new Token(type, text, this.line, this.column, this.position));
  }

  private peek(to = 0) {
    if (this.isAtEnd()) return this.EOF;
    if (to > 0) {
      if (to + this.position > this.source.length) return this.EOF;
      return this.source.charAt(this.position + to);
    }
    return this.source.charAt(this.position);
  }

  private advance(by = 0) {
    do {
      this.position++;
      if (this.peek() === '\n') {
        this.line++;
        this.column = 1;
      } else this.column++;

      if (this.isAtEnd()) return this.EOF;
    } while (((by--) - 1) > 0)

    return this.source.charAt(this.position - 1);
  }

  private match(expected) {
    if (this.isAtEnd()) return false;
    if (this.source.charAt(this.position) !== expected) return false;
    this.position++;
    return true;
  }

  private isAtEnd() {
    return this.position >= this.source.length;
  }

  private get EOF() {
    return '\0';
  }
}