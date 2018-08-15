import * as remark from "remark";
import XDocCommentParser, { Token, TokenType } from './XDocCommentParser';
import XDocASTGenerator from "./XDocASTGenerator";
import XDocASTVisitor, { XDocASTVisitorOptions } from "./XDocASTVisitor";

export interface XDocParserOptions {
  comment: {
    type?: 'SINGLE_HASH_COMMENT'
    | 'SINGLE_STAR_COMMENT'
    | 'DOUBLE_STAR_COMMENT'
    | 'DOUBLE_SLASH_COMMENT'
    | 'TRIPLE_SLASH_COMMENT'
    | 'TRIPLE_QUOTE_COMMENT'
  }
  markdown: {
    remark?: any,
    headingDepth?: number
  }
  visitor: XDocASTVisitorOptions | any
}

export interface RemarkNode {
  type: string,
  depth?: number,
  value?: string,
  lang?: string
  children: RemarkNode[],
  position: {
    start: number,
    end: number
  }
}

export default class XDocParser {
  private source_: string;
  private options: XDocParserOptions = {
    comment: {
      type: 'DOUBLE_STAR_COMMENT'
    },
    markdown: {
      remark: {},
      headingDepth: 2
    },
    visitor: {}
  }

  constructor(source: string, options?: Partial<XDocParserOptions>) {
    this.source_ = source;
    Object.assign(this.options, options || {});
  }

  public get source(): string {
    return this.source_;
  }

  /**
   * Parse a single comment.
   * 
   * @return: {
   *  markdown: RemarkNode[],
   *  documentation: Partial<DocumentationNode>
   * }
   */
  parse = () => {
    const comment = (new XDocCommentParser(this.source))
      .parse()
      .filter(this.filter)[0];
    return {
      markdown: comment ? this.parseMarkdown(comment.text): null,
      documentation: comment ? this.parseXDoc(comment.text): null
    }
  }

  /**
   * Parse multiple comments within a file.
   */
  parseFile = () => {
    const comments = (new XDocCommentParser(this.source))
      .parse()
      .filter(this.filter);
    return comments.map(token => ({
      markdown: this.parseMarkdown(token.text),
      documentation: this.parseXDoc(token.text)
    }))
  }

  parseSyntax = () => {
    return this.parseXDoc(this.source);
  }

  private parseMarkdown = (source: string): RemarkNode => {
    let ast = remark()
      .data('settings', this.options.markdown.remark)
      .parse(source) as RemarkNode;
    ast.children = ast.children.map((node, index) => {
      if (node.type === 'heading') {
        node.depth = this.options.markdown.headingDepth;
      }
      if (node.type === 'code') {
        if (this.isAPI(ast.children[index - 1])) {
          if (!node.lang) node.lang = 'xdoc';
          return node;
        }
      }
      return node;
    })
    return ast;
  }

  private isAPI = (node) => {
    return node && node.type === "heading" && node.children[0].value.toLowerCase() === "api";
  }

  private parseXDoc = (source: string) => {
    const XDocRegex = /@(\w+)([^{[(\n]*)?([\{\[\(][\s\S]*[\}\]\)]([\s]*(=|-)>.*)?)?([\s]*-(.)*)?/gmi;
    const documentation = (new XDocASTGenerator(source.match(XDocRegex).join('\n'))).generate();
    return (new XDocASTVisitor(documentation, this.options.visitor)
      .visit()
    );
  }

  private filter = (token: Token) => {
    return TokenType[token.type] === this.options.comment.type;
  }
}