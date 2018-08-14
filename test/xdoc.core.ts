import * as FS from "fs";
import * as chai from 'chai';
import XDocParser from '../src/XDocParser';
import { TagNode, DocumentationNode, createDocumentationNode, createBodyNode, createTagNameNode, createIdentifierNode, createTagIdentifierNode, createTagNode } from "../src/XDocASTNode";

/* Helpers */
const equal = chai.assert.deepEqual;
const source = FS.readFileSync(`${process.cwd()}/test/markdown.comment.txt`, 'utf-8');
const xdoc = (source: string) => (new XDocParser(source).parse());

const documentation = (annotations: TagNode[]): Partial<DocumentationNode> => createDocumentationNode(
  createBodyNode(
    annotations
  )
)


describe('XDoc Parser', () => {
  describe('parse markdown', () => {
    describe('parse xdoc within markdown', () => {

      it('should parse @tag id', () => equal(
        xdoc(source).documentation,
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