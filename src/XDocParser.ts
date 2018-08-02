import * as remark from "remark";
import XDocCommentParser, { Token, TokenType } from './XDocCommentParser';
import XDocASTGenerator from "./XDocASTGenerator";
import XDocASTVisitor, { XDocASTVisitorOptions } from "./XDocASTVisitor";

export interface XDocParserOptions {
  comment: {
    type: 'SINGLE_HASH_COMMENT'
    | 'SINGLE_STAR_COMMENT'
    | 'DOUBLE_STAR_COMMENT'
    | 'DOUBLE_SLASH_COMMENT'
    | 'TRIPLE_SLASH_COMMENT'
    | 'TRIPLE_QUOTE_COMMENT'
  }
  markdown: {
    remark: any,
    headingDepth: number
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
  constructor(source: string, options?: XDocParserOptions) {
    this.source_ = source;
    Object.assign(this.options, options || {});
  }

  public get source(): string {
    return this.source_;
  }

  parse = () => {
    return (new XDocCommentParser(this.source_))
      .parse()
      .filter(this.filter)
      .map(this.parseMarkdown)
  }

  private parseMarkdown = (token: Token): RemarkNode => {
    // console.log(marked.lexer(token.text, this.options.marked));
    let ast = remark()
      .data('settings', this.options.markdown.remark)
      .parse(token.text) as RemarkNode;
    ast.children = ast.children.map((node, index) => {
      if (node.type === 'heading') {
        node.depth = this.options.markdown.headingDepth;
      }
      if (node.type === 'code') {
        if (this.isAPI(ast.children[index - 1])) {
          if (!node.lang) node.lang = 'xdoc';
          return this.parseXDoc(node)
        }
      }
      return node;
    })
    return ast;
  }
  private isAPI = (node) => {
    return node && node.type === "heading" && node.children[0].value.toLowerCase() === "api";
  }
  private parseXDoc = (node) => {
    node['xdoc'] = (new XDocASTVisitor(this.options.visitor)
      .visit(
        (new XDocASTGenerator(node.value)).generate()
      )
    );
    return node;
  }

  private filter = (token: Token) => {
    return TokenType[token.type] === this.options.comment.type;
  }
}