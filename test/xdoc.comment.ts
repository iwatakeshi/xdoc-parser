import * as chai from 'chai';
import * as FS from 'fs';
import XDocCommentParser, { TokenType, Token } from '../src/XDocCommentParser';

/* Helpers */
const equal = chai.assert.deepEqual;
const processToken = (token: Token) => ({
  type: Token.getTokenName(token.type),
  // Remove any whitespaces so that
  // it's easier to compare
  text: token.text.replace(/\s/g, '')
});
const processFile = (source: string) => 
  // Split up the text file by '$...$'
  source.split(/\$(.*?)\$/g)
  // Remove any lonely spaces or newlines
  .filter(line => line !== '\n' && line !== '')
  // Remove the headers and keep the code with comments
  .filter(line => Token.getTokenType(line.replace(/\s/g, '')) === undefined);

 
const parse = (source: string) => (new XDocCommentParser(source)).parse().map(processToken)
const source = processFile(FS.readFileSync(`${process.cwd()}/test/comments.txt`, 'utf-8'));
const get = (index) => source[index];

describe('XDoc Comment Parser', () => {
  it('should parse a single hash comment', () => equal(
    parse(get(0)),
    [{
      type: Token.getTokenName(TokenType.SINGLE_HASH_COMMENT),
      text: 'Title'
    }]
  ));

  it('should parse a single star comment', () => equal(
    parse(get(1)),
    [{
      type: Token.getTokenName(TokenType.SINGLE_STAR_COMMENT),
      text: 'Title'
    }]
  ));

  it('should parse a double star comment', () => equal(
    parse(get(2)),
    [{
      type: Token.getTokenName(TokenType.DOUBLE_STAR_COMMENT),
      text: 'Title'
    }]
  ));

  it('should parse a double slash comment', () => equal(
    parse(get(3)),
    [{
      type: Token.getTokenName(TokenType.DOUBLE_SLASH_COMMENT),
      text: 'Title'
    }]
  ));

  it('should parse a triple slash comment', () => equal(
    parse(get(4)),
    [{
      type: Token.getTokenName(TokenType.TRIPLE_SLASH_COMMENT),
      text: 'Title'
    }]
  ));

  it('should parse a triple quote comment', () => equal(
    parse(get(5)),
    [{
      type: Token.getTokenName(TokenType.TRIPLE_QUOTE_COMMENT),
      text: 'Title'
    }]
  ));

});

/*
  SINGLE_HASH_COMMENT,
  SINGLE_STAR_COMMENT,
  DOUBLE_STAR_COMMENT,
  DOUBLE_SLASH_COMMENT,
  TRIPLE_SLASH_COMMENT,
  TRIPLE_QUOTE_COMMENT
 */