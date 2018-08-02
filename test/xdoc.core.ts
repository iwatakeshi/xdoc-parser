import * as FS from "fs";
import * as chai from 'chai';
import XDocParser from '../src/XDocParser';
import { TagNode, DocumentationNode, createDocumentationNode, createBodyNode, createTagNameNode, createIdentifierNode, createTagIdentifierNode, createTagNode } from "../src/XDocASTNode";

/* Helpers */
const equal = chai.assert.deepEqual;
const source = FS.readFileSync(`${process.cwd()}/test/markdown.comment.txt`, 'utf-8');
const xdoc = (source: string) => (new XDocParser(source).parse());
const getCode = () => xdoc(source).map(ast => {
  let code = ast.children.filter(node => node.type === 'code')[0];
  return code;
})[0];

const documentation = (annotations: TagNode[]): DocumentationNode => createDocumentationNode(
  createBodyNode(
    annotations
  )
)


describe('XDoc Parser', () => {
  describe('parse markdown', () => {
    describe('parse xdoc code block', () => {
      it('shoud add an "xdoc" property to remark\'s markdown AST', () => {
        let code = getCode();
        chai.assert.exists(code['xdoc']);
      });

      it('should parse @tag id', () => equal(
        getCode()['xdoc'],
        documentation([
          createTagNode(
            createTagNameNode(
              createIdentifierNode('tag')
            ),
            createTagIdentifierNode(
              createIdentifierNode('id'),
            ),
            null,
            null,
            null
          )])
      ));
    });
  })
});