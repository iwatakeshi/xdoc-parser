import * as FS from "fs";
import * as chai from 'chai';
import XDocParser from '../src/XDocParser';
import { TagNode, DocumentationNode, createDocumentationNode, createBodyNode, createTagNameNode, createIdentifierNode, createTagIdentifierNode, createTagNode } from "../src/XDocASTNode";

/* Helpers */
const equal = chai.assert.deepEqual;
const md1 = FS.readFileSync(`${process.cwd()}/test/markdown.comment.txt`, 'utf-8');
const md2 = FS.readFileSync(`${process.cwd()}/test/markdown2.comment.txt`, 'utf-8');
const xdoc = (source: string) => (new XDocParser(source).parse());

const documentation = (annotations: TagNode[]): Partial<DocumentationNode> => createDocumentationNode(
  createBodyNode(
    annotations
  )
)


describe('XDoc Parser', () => {
  describe('parse markdown', () => {
    describe('parse xdoc within markdown (XDoc style)', () => {

      it('should parse @tag id', () => equal(
        xdoc(md1).documentation,
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

    describe('parse xdoc within markdown (JSDoc style)', () => {

      it('should parse @tag id', () => equal(
        xdoc(md2).documentation,
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