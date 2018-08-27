import * as chai from 'chai';
import XDocASTVisitor from "../src/XDocASTVisitor";
import XDocASTGenerator from '../src/XDocASTGenerator';
import { createDocumentationNode, createTagNode, createTagNameNode, createIdentifierNode, createBodyNode, TagNode, DocumentationNode, createDescriptionNode, createTagIdentifierNode, createTypeNode, createPrimaryTypeNode, createUnionTypeNode, createIntersectTypeNode, createLambdaTypeNode, createParameterNode, createFormalParemeterSequenceNode, createTupleTypeNode, createParenthesizedTypeNode, createUnaryTypeNode, createPropertyIdentifierNode, createObjectTypeNode, createObjectPairTypeNode, createArrayTypeNode, createExpressionNode, createLiteralExpressionNode, createUnaryExpressionNode, createBinaryExpressionNode, createArrayExpressionNode, createObjectExpressionNode, createObjectPairExpressionNode, createLambdaExpressionNode, createParenthesizedExpressioneNode, createInlineTagNode, createTupleExtendedTypeNode } from '../src/XDocASTNode';
import * as FS from 'fs';
import { DocumentationContext } from '../src/XDocSyntaxParser';
import { type } from 'os';

/* Helpers */
const equal = chai.assert.deepEqual;
const generate = (source) => new XDocASTGenerator(source).generate();
const parse = (source: string) =>
  new XDocASTVisitor(generate(source)).visit();

const documentation = (annotations: TagNode[]): Partial<DocumentationNode> => createDocumentationNode(
  createBodyNode(
    annotations
  )
)

// console.log(JSON.stringify(parse(`@tag id: (type & type) | type - Description`), null, 2));

describe('XDoc Syntax Parser (Tom)', () => {

  describe('parse simple annotations', () => {
    it('should parse @tag', () => equal(
      parse('@tag'),
      documentation([
        createTagNode(
          createTagNameNode(
            createIdentifierNode('tag')
          ),
          null,
          null,
          null,
          null
        )])
    ));

    it('should parse @tag - description', () => equal(
      parse('@tag - description'),
      documentation([
        createTagNode(
          createTagNameNode(
            createIdentifierNode('tag')
          ),
          null,
          null,
          null,
          createDescriptionNode('description', [])
        )])
    ));

    it('should parse @tag id', () => equal(
      parse('@tag id'),
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

    it('should parse @tag id - description', () => equal(
      parse('@tag id - description'),
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
          createDescriptionNode('description')
        )])
    ));
  });

  describe('parse complex annotations (the ones JSDoc can\'t do)', () => {
    describe('parse typed annotations', () => {

      /*
       * ====================
       * Parse primary type
       * ====================
       */
      describe('parse primary type', () => {
        it('should parse @tag id: type', () => equal(
          parse('@tag id: type'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createPrimaryTypeNode(
                  createIdentifierNode('type')
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: type - description', () => equal(
          parse('@tag id: type - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createPrimaryTypeNode(
                  createIdentifierNode('type')
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id?: type', () => equal(
          parse('@tag id?: type'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id', true),
              ),
              createTypeNode(
                createPrimaryTypeNode(
                  createIdentifierNode('type')
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id?: type - description', () => equal(
          parse('@tag id?: type - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id', true),
              ),
              createTypeNode(
                createPrimaryTypeNode(
                  createIdentifierNode('type')
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: type.type.type', () => equal(
          parse('@tag id: type.type.type'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createPrimaryTypeNode(
                  createPropertyIdentifierNode([
                    createIdentifierNode('type'),
                    createIdentifierNode('type'),
                    createIdentifierNode('type')

                  ], 'type.type.type')
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: type.type.type - description', () => equal(
          parse('@tag id: type.type.type - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createPrimaryTypeNode(
                  createPropertyIdentifierNode([
                    createIdentifierNode('type'),
                    createIdentifierNode('type'),
                    createIdentifierNode('type')

                  ], 'type.type.type')
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

      });

      /*
       * ====================
       * Parse union type
       * ====================
       */
      describe('parse union type', () => {
        it('should parse @tag id: type & type', () => equal(
          parse('@tag id: type & type'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createUnionTypeNode(
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  ),
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: type & type - description', () => equal(
          parse('@tag id: type & type - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createUnionTypeNode(
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  ),
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));
      })

      /*
       * ====================
       * Parse intersection type
       * ====================
       */
      describe('parse intersection type', () => {
        it('should parse @tag id: type | type', () => equal(
          parse('@tag id: type | type'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createIntersectTypeNode(
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  ),
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: type | type - description', () => equal(
          parse('@tag id: type | type - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createIntersectTypeNode(
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  ),
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));
      })

      /*
       * ====================
       * Parse lambda type
       * ====================
       */

      describe('parse lambda type', () => {
        it('should parse @tag id: () => type', () => equal(
          parse('@tag id: () => type'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createLambdaTypeNode(
                  null,
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: () => type - description', () => equal(
          parse('@tag id: () => type - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createLambdaTypeNode(
                  null,
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: () => type[]', () => equal(
          parse('@tag id: () => type[]'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createLambdaTypeNode(
                  null,
                  createTypeNode(
                    createArrayTypeNode(
                      createTypeNode(
                        createPrimaryTypeNode(
                          createIdentifierNode('type')
                        )
                      ),
                      null
                    )
                  )
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: () => type[] - description', () => equal(
          parse('@tag id: () => type[] - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createLambdaTypeNode(
                  null,
                  createTypeNode(
                    createArrayTypeNode(
                      createTypeNode(
                        createPrimaryTypeNode(
                          createIdentifierNode('type')
                        )
                      ),
                      null
                    )
                  )
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: (id) => type', () => equal(
          parse('@tag id: (id) => type'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createLambdaTypeNode(
                  createFormalParemeterSequenceNode([
                    createParameterNode(
                      createIdentifierNode('id'),
                      null
                    )
                  ]),
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: (id) => type - description', () => equal(
          parse('@tag id: (id) => type - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createLambdaTypeNode(
                  createFormalParemeterSequenceNode([
                    createParameterNode(
                      createIdentifierNode('id'),
                      null
                    )
                  ]),
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));


        it('should parse @tag id: (id, id) => type', () => equal(
          parse('@tag id: (id, id) => type'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createLambdaTypeNode(
                  createFormalParemeterSequenceNode([
                    createParameterNode(
                      createIdentifierNode('id'),
                      null
                    ),
                    createParameterNode(
                      createIdentifierNode('id'),
                      null
                    )
                  ]),
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: (id, id) => type - description', () => equal(
          parse('@tag id: (id, id) => type - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createLambdaTypeNode(
                  createFormalParemeterSequenceNode([
                    createParameterNode(
                      createIdentifierNode('id'),
                      null
                    ),
                    createParameterNode(
                      createIdentifierNode('id'),
                      null
                    )
                  ]),
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: (id, id) => type', () => equal(
          parse('@tag id: (id, id) => type'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createLambdaTypeNode(
                  createFormalParemeterSequenceNode([
                    createParameterNode(
                      createIdentifierNode('id'),
                      null
                    ),
                    createParameterNode(
                      createIdentifierNode('id'),
                      null
                    )
                  ]),
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: (id: type, id: type) => type - description', () => equal(
          parse('@tag id: (id: type, id: type) => type - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createLambdaTypeNode(
                  createFormalParemeterSequenceNode([
                    createParameterNode(
                      createIdentifierNode('id'),
                      createTypeNode(
                        createPrimaryTypeNode(
                          createIdentifierNode('type')
                        )
                      )
                    ),
                    createParameterNode(
                      createIdentifierNode('id'),
                      createTypeNode(
                        createPrimaryTypeNode(
                          createIdentifierNode('type')
                        )
                      )
                    )
                  ]),
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));
        it('should parse @tag id: (id: type, id: type) => type', () => equal(
          parse('@tag id: (id: type, id: type) => type'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createLambdaTypeNode(
                  createFormalParemeterSequenceNode([
                    createParameterNode(
                      createIdentifierNode('id'),
                      createTypeNode(
                        createPrimaryTypeNode(
                          createIdentifierNode('type')
                        )
                      )
                    ),
                    createParameterNode(
                      createIdentifierNode('id'),
                      createTypeNode(
                        createPrimaryTypeNode(
                          createIdentifierNode('type')
                        )
                      )
                    )
                  ]),
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: (id, id) => type - description', () => equal(
          parse('@tag id: (id, id) => type - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createLambdaTypeNode(
                  createFormalParemeterSequenceNode([
                    createParameterNode(
                      createIdentifierNode('id'),
                      null
                    ),
                    createParameterNode(
                      createIdentifierNode('id'),
                      null
                    )
                  ]),
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));
      }); // End parse lambda type

      /*
       * ====================
       * Parse tuple type
       * ====================
       */

      describe('parse tuple type', () => {
        it('should parse @tag id: type<type>', () => equal(
          parse('@tag id: type<type>'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createTupleTypeNode(
                  createIdentifierNode('type'),
                  [
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    )
                  ]
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: type<type> - description', () => equal(
          parse('@tag id: type<type> - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createTupleTypeNode(
                  createIdentifierNode('type'),
                  [
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    )
                  ]
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: type<type, type>', () => equal(
          parse('@tag id: type<type, type>'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createTupleTypeNode(
                  createIdentifierNode('type'),
                  [
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    ),
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    )
                  ]
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: type<type, type> - description', () => equal(
          parse('@tag id: type<type, type> - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createTupleTypeNode(
                  createIdentifierNode('type'),
                  [
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    ),
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    )
                  ]
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: <type, type>', () => equal(
          parse('@tag id: <type, type>'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createTupleTypeNode(
                  null,
                  [
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    ),
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    )
                  ]
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: <type, type> - description', () => equal(
          parse('@tag id: <type, type> - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createTupleTypeNode(
                  null,
                  [
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    ),
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    )
                  ]
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: <type extends type, type>', () => equal(
          parse('@tag id: <type extends type, type>'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createTupleTypeNode(
                  null,
                  [
                    createTupleExtendedTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      ),
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    ),
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    )
                  ]
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: <type extends type, type> - description', () => equal(
          parse('@tag id: <type extends type, type> - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createTupleTypeNode(
                  null,
                  [
                    createTupleExtendedTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      ),
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    ),
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    )
                  ]
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));
      }) // End tuple type

      /*
       * ====================
       * Parse parenthesized type
       * ====================
       */

      describe('parse parenthesized type', () => {
        it('should parse @tag id: (type)', () => equal(
          parse('@tag id: (type)'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createParenthesizedTypeNode(
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: (type) - description', () => equal(
          parse('@tag id: (type) - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createParenthesizedTypeNode(
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));
      }); // End parenthesized type

      /*
       * ====================
       * Parse unary type
       * ====================
       */

      describe('parse unary type', () => {
        it('should parse @tag id: *type', () => equal(
          parse('@tag id: *type'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createUnaryTypeNode(
                  '*',
                  createPrimaryTypeNode(
                    createIdentifierNode('type')
                  )
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: *type - description', () => equal(
          parse('@tag id: *type - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createUnaryTypeNode(
                  '*',
                  createPrimaryTypeNode(
                    createIdentifierNode('type')
                  )
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: &type', () => equal(
          parse('@tag id: &type'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createUnaryTypeNode(
                  '&',
                  createPrimaryTypeNode(
                    createIdentifierNode('type')
                  )
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: &type - description', () => equal(
          parse('@tag id: &type - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createUnaryTypeNode(
                  '&',
                  createPrimaryTypeNode(
                    createIdentifierNode('type')
                  )
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));
      }); // End unary type

      /*
       * ====================
       * Parse object type
       * ====================
       */

      describe('parse object type', () => {
        it('should parse @tag id: {}', () => equal(
          parse('@tag id: {}'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createObjectTypeNode()
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: {} - description', () => equal(
          parse('@tag id: {} - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createObjectTypeNode()
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: { type : type }', () => equal(
          parse('@tag id: { type : type }'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createObjectTypeNode([
                  createObjectPairTypeNode(
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    ),
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    )
                  )
                ])
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: { type : type } - description', () => equal(
          parse('@tag id: { type : type } - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createObjectTypeNode([
                  createObjectPairTypeNode(
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    ),
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    )
                  )
                ])
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: { type: { type: type } }', () => equal(
          parse('@tag id: { type: { type: type } }'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createObjectTypeNode([
                  createObjectPairTypeNode(
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    ),
                    createTypeNode(
                      createObjectTypeNode([
                        createObjectPairTypeNode(
                          createTypeNode(
                            createPrimaryTypeNode(
                              createIdentifierNode('type')
                            )
                          ),
                          createTypeNode(
                            createPrimaryTypeNode(
                              createIdentifierNode('type')
                            )
                          )
                        )
                      ])
                    )
                  )
                ])
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: { type: { type: type } } - description', () => equal(
          parse('@tag id: { type : { type: type } } - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createObjectTypeNode([
                  createObjectPairTypeNode(
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    ),
                    createTypeNode(
                      createObjectTypeNode([
                        createObjectPairTypeNode(
                          createTypeNode(
                            createPrimaryTypeNode(
                              createIdentifierNode('type')
                            )
                          ),
                          createTypeNode(
                            createPrimaryTypeNode(
                              createIdentifierNode('type')
                            )
                          )
                        )
                      ])
                    )
                  )
                ])
              ),
              null,
              createDescriptionNode('description')
            )])
        ));
      }); // End object type

      /*
       * ====================
       * Parse array type
       * ====================
       */

      describe('parse array type', () => {
        it('should parse @tag id: type[]', () => equal(
          parse('@tag id: type[]'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  ),
                  null
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: type[] - description', () => equal(
          parse('@tag id: type[] - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  ),
                  null
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: (type & type)[]', () => equal(
          parse('@tag id: (type & type)[]'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  createTypeNode(
                    createParenthesizedTypeNode(
                      createTypeNode(
                        createUnionTypeNode(
                          createTypeNode(
                            createPrimaryTypeNode(
                              createIdentifierNode('type')
                            )
                          ),
                          createTypeNode(
                            createPrimaryTypeNode(
                              createIdentifierNode('type')
                            )
                          )
                        )
                      )
                    )
                  ),
                  null
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: (type & type)[] - description', () => equal(
          parse('@tag id: (type & type)[] - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  createTypeNode(
                    createParenthesizedTypeNode(
                      createTypeNode(
                        createUnionTypeNode(
                          createTypeNode(
                            createPrimaryTypeNode(
                              createIdentifierNode('type')
                            )
                          ),
                          createTypeNode(
                            createPrimaryTypeNode(
                              createIdentifierNode('type')
                            )
                          )
                        )
                      )
                    )
                  ),
                  null
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: (type | type)[]', () => equal(
          parse('@tag id: (type | type)[]'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  createTypeNode(
                    createParenthesizedTypeNode(
                      createTypeNode(
                        createIntersectTypeNode(
                          createTypeNode(
                            createPrimaryTypeNode(
                              createIdentifierNode('type')
                            )
                          ),
                          createTypeNode(
                            createPrimaryTypeNode(
                              createIdentifierNode('type')
                            )
                          )
                        )
                      )
                    )
                  ),
                  null
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: (type | type)[] - description', () => equal(
          parse('@tag id: (type | type)[] - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  createTypeNode(
                    createParenthesizedTypeNode(
                      createTypeNode(
                        createIntersectTypeNode(
                          createTypeNode(
                            createPrimaryTypeNode(
                              createIdentifierNode('type')
                            )
                          ),
                          createTypeNode(
                            createPrimaryTypeNode(
                              createIdentifierNode('type')
                            )
                          )
                        )
                      )
                    )
                  ),
                  null
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: type[][]', () => equal(
          parse('@tag id: type[][]'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  ),
                  null
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: type[][] - description', () => equal(
          parse('@tag id: type[][] - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  ),
                  null
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: [type]', () => equal(
          parse('@tag id: [type]'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  null,
                  [
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    )
                  ],
                  null
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: [type] - description', () => equal(
          parse('@tag id: [type] - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  null,
                  [
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    )
                  ],
                  null
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: [type, type]', () => equal(
          parse('@tag id: [type, type]'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  null,
                  [
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    ),
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    )
                  ],
                  null,
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: [type, type] - description', () => equal(
          parse('@tag id: [type, type] - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  null,
                  [
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    ),
                    createTypeNode(
                      createPrimaryTypeNode(
                        createIdentifierNode('type')
                      )
                    )
                  ],
                  null,
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: { type: type }[]', () => equal(
          parse('@tag id: { type: type }[]'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  createTypeNode(
                    createObjectTypeNode([
                      createObjectPairTypeNode(
                        createTypeNode(
                          createPrimaryTypeNode(
                            createIdentifierNode('type')
                          )
                        ),
                        createTypeNode(
                          createPrimaryTypeNode(
                            createIdentifierNode('type')
                          )
                        )
                      )
                    ])
                  ),
                  null
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: { type: type }[] - description', () => equal(
          parse('@tag id: { type: type }[] - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  createTypeNode(
                    createObjectTypeNode([
                      createObjectPairTypeNode(
                        createTypeNode(
                          createPrimaryTypeNode(
                            createIdentifierNode('type')
                          )
                        ),
                        createTypeNode(
                          createPrimaryTypeNode(
                            createIdentifierNode('type')
                          )
                        )
                      )
                    ])
                  ),
                  null
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

        it('should parse @tag id: (() => type)[]', () => equal(
          parse('@tag id: (() => type)[]'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  createTypeNode(
                    createParenthesizedTypeNode(
                      createTypeNode(
                        createLambdaTypeNode(
                          null,
                          createTypeNode(
                            createPrimaryTypeNode(
                              createIdentifierNode('type')
                            )
                          )
                        )
                      )
                    )
                  ),
                  null
                )
              ),
              null,
              null
            )])
        ));

        it('should parse @tag id: (() => type)[] - description', () => equal(
          parse('@tag id: (() => type)[] - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id'),
              ),
              createTypeNode(
                createArrayTypeNode(
                  createTypeNode(
                    createParenthesizedTypeNode(
                      createTypeNode(
                        createLambdaTypeNode(
                          null,
                          createTypeNode(
                            createPrimaryTypeNode(
                              createIdentifierNode('type')
                            )
                          )
                        )
                      )
                    )
                  ),
                  null
                )
              ),
              null,
              createDescriptionNode('description')
            )])
        ));

      }); // End array type

    }); // End parse type

    describe('parse assigned annotations', () => {
      /*
       * ==========================
       * Parse literal expression
       * ==========================
       */

      describe('parse literal expression', () => {
        describe('parse number literal', () => {
          it('should parse @tag id = 0', () => equal(
            parse('@tag id = 0'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'number',
                    '0'
                  )
                ),
                null
              )])
          ));

          it('should parse @tag id = 0 - description', () => equal(
            parse('@tag id = 0 - description'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'number',
                    '0'
                  )
                ),
                createDescriptionNode('description', [])
              )])
          ));

          it('should parse @tag id = 0.1', () => equal(
            parse('@tag id = 0.1'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'number',
                    '0.1'
                  )
                ),
                null
              )])
          ));

          it('should parse @tag id = 0.1 - description', () => equal(
            parse('@tag id = 0.1 - description'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'number',
                    '0.1'
                  )
                ),
                createDescriptionNode('description', [])
              )])
          ));

          it('should parse @tag id = 0xffff', () => equal(
            parse('@tag id = 0xffff'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'number',
                    '0xffff'
                  )
                ),
                null
              )])
          ));

          it('should parse @tag id = 0xffff - description', () => equal(
            parse('@tag id = 0xffff - description'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'number',
                    '0xffff'
                  )
                ),
                createDescriptionNode('description', [])
              )])
          ));

          it('should parse @tag id = 0o3', () => equal(
            parse('@tag id = 0o3'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'number',
                    '0o3'
                  )
                ),
                null
              )])
          ));

          it('should parse @tag id = 0o3 - description', () => equal(
            parse('@tag id = 0o3 - description'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'number',
                    '0o3'
                  )
                ),
                createDescriptionNode('description', [])
              )])
          ));

          it('should parse @tag id = 0b10', () => equal(
            parse('@tag id = 0b10'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'number',
                    '0b10'
                  )
                ),
                null
              )])
          ));

          it('should parse @tag id = 0b10 - description', () => equal(
            parse('@tag id = 0b10 - description'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'number',
                    '0b10'
                  )
                ),
                createDescriptionNode('description', [])
              )])
          ));

        }); // End number literal

        describe('parse boolean literal', () => {
          it('should parse @tag id = true', () => equal(
            parse('@tag id = true'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'boolean',
                    'true'
                  )
                ),
                null
              )])
          ));

          it('should parse @tag id = true - description', () => equal(
            parse('@tag id = true - description'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'boolean',
                    'true'
                  )
                ),
                createDescriptionNode('description', [])
              )])
          ));

          it('should parse @tag id = false', () => equal(
            parse('@tag id = false'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'boolean',
                    'false'
                  )
                ),
                null
              )])
          ));

          it('should parse @tag id = false - description', () => equal(
            parse('@tag id = false - description'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'boolean',
                    'false'
                  )
                ),
                createDescriptionNode('description', [])
              )])
          ));
        }); // End boolean literal

        describe('parse character literal', () => {
          it('should parse @tag id = \'c\'', () => equal(
            parse('@tag id = \'c\''),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'character',
                    '\'c\''
                  )
                ),
                null
              )])
          ));
          it('should parse @tag id = \'c\' - description', () => equal(
            parse('@tag id = \'c\' - description'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'character',
                    '\'c\''
                  )
                ),
                createDescriptionNode('description')
              )])
          ));
        }) // End character literal

        describe('parse string literal', () => {
          it('should parse @tag id = \"hello\"', () => equal(
            parse('@tag id = \"hello\"'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'string',
                    '\"hello\"'
                  )
                ),
                null
              )])
          ));

          it('should parse @tag id = \"hello\" - description', () => equal(
            parse('@tag id = \"hello\" - description'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'string',
                    '\"hello\"'
                  )
                ),
                createDescriptionNode('description')
              )])
          ));

          it('should parse @tag id = \'hello\'', () => equal(
            parse('@tag id = \'hello\''),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'string',
                    '\'hello\''
                  )
                ),
                null
              )])
          ));

          it('should parse @tag id = \'hello\' - description', () => equal(
            parse('@tag id = \'hello\' - description'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'string',
                    '\'hello\''
                  )
                ),
                createDescriptionNode('description')
              )])
          ));
        }) // End string literal

        describe('parse null literal', () => {
          it('should parse @tag id = null', () => equal(
            parse('@tag id = null'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'null',
                    'null'
                  )
                ),
                null
              )])
          ));

          it('should parse @tag id = undefined', () => equal(
            parse('@tag id = undefined'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createLiteralExpressionNode(
                    'null',
                    'undefined'
                  )
                ),
                null
              )])
          ));
        }) // End null literal
      }); // End literal expression

      /*
      * ==========================
      * Parse unary expression
      * ==========================
      */
      describe('parse unary expression', () => {
        it('should parse @tag id = -1', () => equal(
          parse('@tag id = -1'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createUnaryExpressionNode(
                  '-',
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  )
                )
              ),
              null
            )])
        ));

        it('should parse @tag id = -1 - description', () => equal(
          parse('@tag id = -1 - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createUnaryExpressionNode(
                  '-',
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  )
                )
              ),
              createDescriptionNode('description')
            )])
        ));

      }); // Emd unary expression

      /*
      * ==========================
      * Parse binary expression
      * ==========================
      */
      describe('parse binary expression', () => {
        it('should parse @tag id = 1 + 1', () => equal(
          parse('@tag id = 1 + 1'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createBinaryExpressionNode(
                  '+',
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  ),
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  )
                )
              ),
              null
            )])
        ));

        it('should parse @tag id = 1 + 1 - description', () => equal(
          parse('@tag id = 1 + 1 - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createBinaryExpressionNode(
                  '+',
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  ),
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  )
                )
              ),
              createDescriptionNode('description', [])
            )])
        ));

        it('should parse @tag id = 1 - 1', () => equal(
          parse('@tag id = 1 - 1'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createBinaryExpressionNode(
                  '-',
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  ),
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  )
                )
              ),
              null
            )])
        ));

        it('should parse @tag id = 1 - 1 - description', () => equal(
          parse('@tag id = 1 - 1 - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createBinaryExpressionNode(
                  '-',
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  ),
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  )
                )
              ),
              createDescriptionNode('description', [])
            )])
        ));

        it('should parse @tag id = 1 * 1', () => equal(
          parse('@tag id = 1 * 1'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createBinaryExpressionNode(
                  '*',
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  ),
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  )
                )
              ),
              null
            )])
        ));

        it('should parse @tag id = 1 * 1 - description', () => equal(
          parse('@tag id = 1 * 1 - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createBinaryExpressionNode(
                  '*',
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  ),
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  )
                )
              ),
              createDescriptionNode('description', [])
            )])
        ));

        it('should parse @tag id = 1 / 1', () => equal(
          parse('@tag id = 1 / 1'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createBinaryExpressionNode(
                  '/',
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  ),
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  )
                )
              ),
              null
            )])
        ));

        it('should parse @tag id = 1 / 1 - description', () => equal(
          parse('@tag id = 1 / 1 - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createBinaryExpressionNode(
                  '/',
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  ),
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  )
                )
              ),
              createDescriptionNode('description', [])
            )])
        ));
      }) // End binary expression

      /*
      * ==========================
      * Parse array expression
      * ==========================
      */

      describe('parse array expression', () => {
        it('should parse @tag id = []', () => equal(
          parse('@tag id = []'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createArrayExpressionNode()
              ),
              null
            )])
        ));

        it('should parse @tag id = [] - description', () => equal(
          parse('@tag id = [] - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createArrayExpressionNode()
              ),
              createDescriptionNode('description', [])
            )])
        ));

        it('should parse @tag id = [0]', () => equal(
          parse('@tag id = [0]'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createArrayExpressionNode([
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '0'
                    )
                  )
                ])
              ),
              null
            )])
        ));

        it('should parse @tag id = [0] - description', () => equal(
          parse('@tag id = [0] - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createArrayExpressionNode([
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '0'
                    )
                  )
                ])
              ),
              createDescriptionNode('description', [])
            )])
        ));

        it('should parse @tag id = [0, 1]', () => equal(
          parse('@tag id = [0, 1]'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createArrayExpressionNode([
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '0'
                    )
                  ),
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  )
                ])
              ),
              null
            )])
        ));

        it('should parse @tag id = [0, 1] - description', () => equal(
          parse('@tag id = [0, 1] - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createArrayExpressionNode([
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '0'
                    )
                  ),
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  )
                ])
              ),
              createDescriptionNode('description', [])
            )])
        ));
      }); // End array expression


      /*
      * ==========================
      * Parse object expression
      * ==========================
      */
      describe('parse object expression', () => {
        it('should parse @tag id = {}', () => equal(
          parse('@tag id = {}'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createObjectExpressionNode()
              ),
              null
            )])
        ));

        it('should parse @tag id = {} - description', () => equal(
          parse('@tag id = {} - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createObjectExpressionNode()
              ),
              createDescriptionNode('description', [])
            )])
        ));

        it('should parse @tag id = { "a": "b" }', () => equal(
          parse('@tag id = { "a": "b" }'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createObjectExpressionNode([
                  createObjectPairExpressionNode(
                    createLiteralExpressionNode('string', '"a"'),
                    createLiteralExpressionNode('string', '"b"')
                  )
                ])
              ),
              null
            )])
        ));

        it('should parse @tag id = { "a": "b" } - description', () => equal(
          parse('@tag id = { "a": "b" } - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createObjectExpressionNode([
                  createObjectPairExpressionNode(
                    createLiteralExpressionNode('string', '"a"'),
                    createLiteralExpressionNode('string', '"b"')
                  )
                ])
              ),
              createDescriptionNode('description', [])
            )])
        ));

        it('should parse @tag id = { "a": { "b": "c" } }', () => equal(
          parse('@tag id = { "a": { "b": "c" } }'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createObjectExpressionNode([
                  createObjectPairExpressionNode(
                    createLiteralExpressionNode('string', '"a"'),
                    createObjectExpressionNode([
                      createObjectPairExpressionNode(
                        createLiteralExpressionNode('string', '"b"'),
                        createLiteralExpressionNode('string', '"c"')
                      )
                    ])
                  )
                ])
              ),
              null
            )])
        ));

        it('should parse @tag id = { "a": { "b": "c" } } - description', () => equal(
          parse('@tag id = { "a": { "b": "c" } } - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createObjectExpressionNode([
                  createObjectPairExpressionNode(
                    createLiteralExpressionNode('string', '"a"'),
                    createObjectExpressionNode([
                      createObjectPairExpressionNode(
                        createLiteralExpressionNode('string', '"b"'),
                        createLiteralExpressionNode('string', '"c"')
                      )
                    ])
                  )
                ])
              ),
              createDescriptionNode('description', [])
            )])
        ));
      }); // End object expression

      /*
      * ==========================
      * Parse lambda expression
      * ==========================
      */

      describe('parse lambda Expression', () => {
        it('should parse @tag id = () => type', () => equal(
          parse('@tag id = () => type'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createLambdaExpressionNode(
                  null,
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null
            )])
        ));

        it('should parse @tag id = () => type - description', () => equal(
          parse('@tag id = () => type - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createLambdaExpressionNode(
                  null,
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              createDescriptionNode('description', [])
            )])
        ));

        it('should parse @tag id = (id) => type', () => equal(
          parse('@tag id = (id) => type'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createLambdaExpressionNode(
                  createFormalParemeterSequenceNode([
                    createParameterNode(
                      createIdentifierNode('id')
                    )
                  ]),
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              null
            )])
        ));

        it('should parse @tag id = (id) => type - description', () => equal(
          parse('@tag id = (id) => type - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createLambdaExpressionNode(
                  createFormalParemeterSequenceNode([
                    createParameterNode(
                      createIdentifierNode('id')
                    )
                  ]),
                  createTypeNode(
                    createPrimaryTypeNode(
                      createIdentifierNode('type')
                    )
                  )
                )
              ),
              createDescriptionNode('description', [])
            )])
        ));
      }); // End lambda expression


      /*
      * ==============================
      * Parse parenthesized expression
      * ==============================
      */
      describe('parse parenthesized expression', () => {
        it('should parse @tag id = (1)', () => {
          it('should parse @tag id = (1)', () => equal(
            parse('@tag id = (1)'),
            documentation([
              createTagNode(
                createTagNameNode(
                  createIdentifierNode('tag')
                ),
                createTagIdentifierNode(
                  createIdentifierNode('id')
                ),
                null,
                createExpressionNode(
                  createParenthesizedExpressioneNode(
                    createExpressionNode(
                      createLiteralExpressionNode(
                        'number',
                        '1'
                      )
                    ))
                ),
                null
              )])
          ));
        });

        it('should parse @tag id = (1) - description', () => equal(
          parse('@tag id = (1) - description'),
          documentation([
            createTagNode(
              createTagNameNode(
                createIdentifierNode('tag')
              ),
              createTagIdentifierNode(
                createIdentifierNode('id')
              ),
              null,
              createExpressionNode(
                createParenthesizedExpressioneNode(
                  createExpressionNode(
                    createLiteralExpressionNode(
                      'number',
                      '1'
                    )
                  ))
              ),
              createDescriptionNode('description')
            )])
        ));
      }); // End parenthesized expression

    }); // End expressions

  }); // End parse complex annotations

  describe('parse inline annotations', () => {
    it('should parse @tag id - description {@inline description}', () => {
      it('should parse @tag - description {@inline description}', () => equal(
        parse('@tag - description'),
        documentation([
          createTagNode(
            createTagNameNode(
              createIdentifierNode('tag')
            ),
            null,
            null,
            null,
            createDescriptionNode('description {@inline description}', [
              createInlineTagNode(
                createIdentifierNode('inline'),
                'description'
              )
            ])
          )])
      ));
    });
  });

  describe('parse a real-world annotation', () => {
    let annotation = FS.readFileSync(`${process.cwd()}/test/annotation.txt`, 'utf-8');
    let output = annotation.split('\n').map(line => '\t' + line).join('\n');

    it(`should parse:\n${output}`, () => equal(
      parse(annotation),
      documentation([
        // @function myHero
        createTagNode(
          createTagNameNode(
            createIdentifierNode('function')
          ),
          createTagIdentifierNode(
            createIdentifierNode('myHero')
          ),
          null,
          null,
          null
        ),
        // @param name: string = "Deku" - The name of a hero.
        createTagNode(
          createTagNameNode(
            createIdentifierNode('param')
          ),
          createTagIdentifierNode(
            createIdentifierNode('name')
          ),
          createTypeNode(
            createPrimaryTypeNode(
              createIdentifierNode('string')
            )
          ),
          createExpressionNode(
            createLiteralExpressionNode('string', '"Deku"')
          ),
          createDescriptionNode('The name of a hero.'),
        ),
        // @param age: number = 15 - The age of a hero
        createTagNode(
          createTagNameNode(
            createIdentifierNode('param')
          ),
          createTagIdentifierNode(
            createIdentifierNode('age')
          ),
          createTypeNode(
            createPrimaryTypeNode(
              createIdentifierNode('number')
            )
          ),
          createExpressionNode(
            createLiteralExpressionNode('number', '15')
          ),
          createDescriptionNode('The age of a hero.'),
        ),
        // @param strength: number = 100 - The strength of a hero
        createTagNode(
          createTagNameNode(
            createIdentifierNode('param')
          ),
          createTagIdentifierNode(
            createIdentifierNode('strength')
          ),
          createTypeNode(
            createPrimaryTypeNode(
              createIdentifierNode('number')
            )
          ),
          createExpressionNode(
            createLiteralExpressionNode('number', '100')
          ),
          createDescriptionNode('The strength of a hero.'),
        ),
        // @return: { name: string, age: number, strength: number }
        createTagNode(
          createTagNameNode(
            createIdentifierNode('return')
          ),
          null,
          createTypeNode(
            createObjectTypeNode([
              // name: string
              createObjectPairTypeNode(
                createTypeNode(
                  createPrimaryTypeNode(
                    createIdentifierNode('name')
                  )
                ),
                createTypeNode(
                  createPrimaryTypeNode(
                    createIdentifierNode('string')
                  )
                )
              ),
              // age: number
              createObjectPairTypeNode(
                createTypeNode(
                  createPrimaryTypeNode(
                    createIdentifierNode('age')
                  )
                ),
                createTypeNode(
                  createPrimaryTypeNode(
                    createIdentifierNode('number')
                  )
                )
              ),
              // strength: number
              createObjectPairTypeNode(
                createTypeNode(
                  createPrimaryTypeNode(
                    createIdentifierNode('strength')
                  )
                ),
                createTypeNode(
                  createPrimaryTypeNode(
                    createIdentifierNode('number')
                  )
                )
              )
            ])
          ),
          null,
          null,
        )
      ])
    ));
  }); // End real-world annotation
}); // End test