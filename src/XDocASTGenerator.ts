import { XDocSyntaxParser, DocumentationContext } from "./XDocSyntaxParser";
import { CommonTokenStream } from "antlr4ts/CommonTokenStream";
import { XDocSyntaxLexer } from "./XDocSyntaxLexer";
import { ANTLRInputStream } from "antlr4ts/ANTLRInputStream";

/**
 * XDocASTParser is a class that parses the source.
 * 
 * # API
 * 
 * ```
 * @class XDocASTParser
 * ```
 */
export default class XDocASTParser {
  private parser_: XDocSyntaxParser
  /**
   * Creates a XDocASTParser object.
   * 
   * # API
   * 
   * ```
   * @constructor
   * @param source: string
   * ```
   */
  constructor(source: string) {
    this.parser_ = new XDocSyntaxParser(
      new CommonTokenStream(
        new XDocSyntaxLexer(
          new ANTLRInputStream(source)
        )
      )
    );
  }

  /**
   * Parses the source and returns an Antlr parse tree.
   * 
   * # API
   * 
   * ```
   * @method parse
   * ```
   */
  public generate = () : DocumentationContext => {
    return this.parser_.documentation();
  }
  
  /**
   * Returns an instance of XDocSyntaxParser.
   * 
   * # API
   * 
   * ```
   * @property parser
   * ```
   */
  public get parser() : XDocSyntaxParser {
    return this.parser_;
  }
  
}