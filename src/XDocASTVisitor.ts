import * as _ from 'lodash';
import * as Parser from './XDocSyntaxParser';
import './XDocSyntaxParserVisitor';
import {
  AnnotationsNode,
  ArrayTypeNode,
  BodyNode,
  createArrayExpressionNode,
  createArrayTypeNode,
  createBinaryExpressionNode,
  createBodyNode,
  createDescriptionNode,
  createDocumentationNode,
  createExpressionNode,
  createFormalParemeterSequenceNode,
  createIdentifierNode,
  createInlineTagNode,
  createIntersectTypeNode,
  createKeywordNode,
  createLambdaTypeNode,
  createLiteralExpressionNode,
  createObjectExpressionNode,
  createObjectPairExpressionNode,
  createObjectPairTypeNode,
  createObjectTypeNode,
  createParameterNode,
  createParenthesizedTypeNode,
  createPrimaryTypeNode,
  createPropertyTagIdentifierNode,
  createPropertyIdentifierNode,
  createTagIdentifierNode, createOptionalTagIdentifierNode,
  createTagNameNode,
  createTagNode,
  createTupleTypeNode,
  createTypeNode,
  createUnaryExpressionNode,
  createUnaryTypeNode,
  createUnionTypeNode,
  DescriptionNode,
  DocumentationNode,
  ExpressionNode,
  FormalParameterSequenceNode,
  IdentifierNode,
  InlineTagNode,
  KeywordNode,
  LambdaExpressionNode,
  LambdaTypeNode,
  LiteralExpressionNode,
  ObjectExpressionNode,
  ObjectPairExpressionNode,
  OptionalIdentifierNode,
  OptionalTagIdentifierNode,
  ParameterNode,
  ParenthesizedExpressionNode,
  PropertyTagIdentifierNode,
  TagIdentifierNode,
  TagNameNode,
  TagNode,
  TupleTypeNode,
  TypeNode,
  UnaryExpressionNode,
  PropertyIdentifierNode,
  ParenthesizedTypeNode,
  createParenthesizedExpressioneNode,
  PrimaryTypeNode,
  UnaryTypeNode,
  ObjectTypeNode,
  createTupleExtendedTypeNode,
  TupleExtendedTypeNode,
} from './XDocASTNode';


export interface XDocASTVisitorOptions {
  showNodeText: boolean
}
/**
 * XDocAST is a class that converts a Antlr parse tree
 * into a Javascript tree object.
 * 
 * # API
 * 
 * ```
 * @class XDocAST
 * ```
 */
export default class XDocASTVisitor {
  private documentation: Parser.DocumentationContext
  private options: XDocASTVisitorOptions = {
    showNodeText: false
  }

  constructor(documentation: Parser.DocumentationContext, options?: Partial<XDocASTVisitorOptions>) {
    Object.assign(this.options, options);
    this.documentation = documentation;
  }
  /**
   * Converts the Antlr parse tree into a JavaScript tree object.
   * 
   * # API
   * 
   * ```
   * @method visit
   * @param context: Parser.DocumentationConext
   * @return: { 
   *  name?: string, 
   *  id?: {}, 
   *  value?: {}, 
   *  type?: {}, 
   *  description?: {} 
   * }[]
   * ```
   */
  visit = (): Partial<DocumentationNode> => {
    return this.visitDocumentation(this.documentation);
  }
  /* Documentation visitor */

  visitDocumentation = (
    context: Parser.DocumentationContext
  ): Partial<DocumentationNode> => {
    if (context.body()) {
      return createDocumentationNode(
        this.visitBody(context.body()),
        this.options.showNodeText ? context.text : undefined
      )
    }
  }

  visitBody = (
    context: Parser.BodyContext
  ): Partial<BodyNode> => {
    if (context.annotations()) {
      return createBodyNode(
        this.visitAnnotations(context.annotations()),
        this.options.showNodeText ? context.text : undefined
      );
    }
  }

  visitAnnotations = (
    context: Parser.AnnotationsContext,
  ): Partial<AnnotationsNode> => {
    if (context.tag()) {
      return (context.tag() || []).map(this.visitTag)
    }
  }


  visitTag = (context: Parser.TagContext): Partial<TagNode> => {
    let name: Partial<TagNameNode>,
      identifier: Partial<TagIdentifierNode>,
      type: Partial<TypeNode>,
      expression: Partial<ExpressionNode>,
      description: Partial<DescriptionNode>;

    if (context.tagName()) {
      name = this.visitTagName(context.tagName());
    }

    if (context.tagIdentifier()) {
      identifier = this.visitTagIdentifier(context.tagIdentifier());
    }

    if (context.type()) {
      type = this.visitType(context.type());
    }

    if (context.expression()) {
      expression = this.visitExpression(context.expression())
    }

    if (context.description()) {
      description = this.visitDescription(context.description())
    }

    return createTagNode(name, identifier, type, expression, description, this.options.showNodeText ? context.text : undefined)
  }

  visitTagName = (context: Parser.TagNameContext): Partial<TagNameNode> => {
    if (context.identifier()) {
      return createTagNameNode(this.visitIdentifier(context.identifier()), this.options.showNodeText ? context.text : undefined);
    }
  }

  visitTagIdentifier = (context: Parser.TagIdentifierContext): Partial<TagIdentifierNode> => {
    let identifier: Partial<IdentifierNode> | Partial<OptionalIdentifierNode>,
      property: Partial<PropertyTagIdentifierNode>;
    if (context.identifier()) {
      identifier = this.visitIdentifier(context.identifier());
    }

    if (context.optionalTagIdentifier()) {
      identifier = this.visitOptionalTagIdentifer(context.optionalTagIdentifier())
    }

    if (context.propertyTagIdentifier()) {
      property = this.visitPropertyTagIdentifier(context.propertyTagIdentifier());
    }

    return createTagIdentifierNode(identifier, property, this.options.showNodeText ? context.text : undefined);
  }

  visitPropertyTagIdentifier = (context: Parser.PropertyTagIdentifierContext): Partial<PropertyTagIdentifierNode> => {

    // Assume 'context' is defined.
    let identifier = context.identifier() ?
      this.visitIdentifier(context.identifier()) :
      this.visitOptionalTagIdentifer(context.optionalTagIdentifier());
    // A property must exist since by grammar:
    // (optionalTagIdentifier | identifier) ('.' optionalTagOrIdentifier)+
    let property = context.optionalTagOrIdentifier()
      .map(this.visitOptionalTagOrIdentifier);
    // Add the identifier to the beginning of the array
    property.unshift(identifier);
    return createPropertyTagIdentifierNode(property, context.text);
  }

  visitOptionalTagIdentifer = (context: Parser.OptionalTagIdentifierContext): Partial<OptionalTagIdentifierNode> => {
    if (context.optionalIdentifier()) {
      return createOptionalTagIdentifierNode(this.visitOptionalIdentifier(context.optionalIdentifier()))
    }
  }

  visitOptionalTagOrIdentifier = (context: Parser.OptionalTagOrIdentifierContext): (Partial<IdentifierNode> | Partial<OptionalIdentifierNode>) => {
    if (context.identifier()) {
      return this.visitIdentifier(context.identifier())
    }

    if (context.optionalTagIdentifier()) {
      return this.visitOptionalTagIdentifer(context.optionalTagIdentifier());
    }
  }


  visitIdentifier = (context: Parser.IdentifierContext, optional = false): Partial<IdentifierNode> => {
    if (context.ID()) {
      return createIdentifierNode(context.ID().text, optional, []);
    }
  }

  /* Type visitor */

  visitType = (context: Parser.TypeContext | Parser.NotArrayTypeContext, optional = false): Partial<TypeNode> => {

    // Intersections
    if (context.PIPE()) {
      return createTypeNode(
        createIntersectTypeNode(
          this.visitType(context instanceof Parser.TypeContext ? context.type(0) : context.notArrayType(0)),
          this.visitType(context instanceof Parser.TypeContext ? context.type(1) : context.notArrayType(1)),
          this.options.showNodeText ? context.text : undefined
        ),
        optional,
        this.options.showNodeText ? context.text : undefined
      );
    }

    if (context.AMP()) { // Unions
      return createTypeNode(
        createUnionTypeNode(
          this.visitType(context instanceof Parser.TypeContext ? context.type(0) : context.notArrayType(0)),
          this.visitType(context instanceof Parser.TypeContext ? context.type(1) : context.notArrayType(1)),
          this.options.showNodeText ? context.text : undefined
        ),
        optional,
        this.options.showNodeText ? context.text : undefined
      );
    }

    if (context.lambdaType()) { // Lambda functions i.e. (id) => type
      return createTypeNode(
        this.visitLambdaType(context.lambdaType()),
        optional,
        this.options.showNodeText ? context.text : undefined
      );
    }

    if (context.tupleType()) { // id<type, type>
      return createTypeNode(
        this.visitTuple(context.tupleType()),
        optional,
        this.options.showNodeText ? context.text : undefined
      );
    }

    if (context.primaryType()) { // Primary
      return createTypeNode(
        this.visitPrimaryType(context.primaryType()),
        optional,
        this.options.showNodeText ? context.text : undefined
      );
    }

    if (context.parenthesizedType()) { // (expression)
      return createTypeNode(
        this.visitParenthesizedType(context.parenthesizedType(), optional),
        optional,
        this.options.showNodeText ? context.text : undefined
      )
    }

    if (context.unaryType()) {
      return createTypeNode(
        this.visitUnaryType(context.unaryType()),
        optional,
        this.options.showNodeText ? context.text : undefined
      );
    }

    if (context.objectType()) { // { ... }
      return createTypeNode(
        this.visitObjectType(context.objectType()),
        optional,
        this.options.showNodeText ? context.text : undefined
      );
    }

    if (context instanceof Parser.TypeContext && context.arrayType()) { // [ ... ]
      return createTypeNode(
        this.visitArrayType(context.arrayType()),
        optional,
        this.options.showNodeText ? context.text : undefined
      );
    }
  }

  /* Lambda visitor */

  visitLambdaType = (context: Parser.LambdaTypeContext): Partial<LambdaTypeNode> => {
    if (context.formalParameterSequence()) {
      return createLambdaTypeNode(
        this.visitLambdaFormalParameterSequence(context.formalParameterSequence()),
        this.visitType(context.type(), !!context.QUESTION()),
        this.options.showNodeText ? context.text : undefined
      );

    } else if (context.parameter()) {
      return createLambdaTypeNode(
        this.visitLambdaFormalParameterSequence(context.parameter()),
        this.visitType(context.type(), !!context.QUESTION()),
        this.options.showNodeText ? context.text : undefined
      );
    }

    return createLambdaTypeNode(
      null,
      this.visitType(context.type(), !!context.QUESTION()),
      this.options.showNodeText ? context.text : undefined
    )
  }

  visitLambdaFormalParameterSequence = (context: Parser.FormalParameterSequenceContext | Parser.ParameterContext): Partial<FormalParameterSequenceNode> => {
    if (context instanceof Parser.ParameterContext) {
      return createFormalParemeterSequenceNode([this.visitParameter(context)])
    }
    return createFormalParemeterSequenceNode(this.visitParameters(context.parameter()), this.options.showNodeText ? context.text : undefined)
  }

  visitParameters = (contexts: Parser.ParameterContext[]): Partial<ParameterNode>[] => {
    return contexts.map(context => {
      return this.visitParameter(context);
    })
  }

  visitParameter = (context: Parser.ParameterContext): Partial<ParameterNode> => {
    let identifier = this.visitIdentifier(context.identifier());
    let type: TypeNode
    if (context.type()) {
      type = this.visitType(context.type());
    }
    return createParameterNode(identifier, type, this.options.showNodeText ? context.text : undefined);
  }

  visitTuple = (context: Parser.TupleTypeContext): Partial<TupleTypeNode> => {
    let identifier: Partial<IdentifierNode>
    let types: Partial<TypeNode>[]
    if (context.identifier()) {
      identifier = this.visitIdentifier(context.identifier());
    }

    if (context.tupleTypeSequence()) {
      types = this.visitTupleSequenceOrExtendedTypes(context.tupleTypeSequence());
    }

    return createTupleTypeNode(identifier, types, this.options.showNodeText ? context.text : undefined);
  }

  visitTupleSequenceOrExtendedTypes = (context: Parser.TupleTypeSequenceContext): Partial<TypeNode | TupleExtendedTypeNode>[] | undefined[] => {
    let types = [];

    const mergeSequence = () => {
      types = [
        ...types, 
        ..._.flattenDeep(
          context.tupleTypeSequence().map(this.visitTupleSequenceOrExtendedTypes.bind(this)))
      ]
    }

    if (context.EXTENDS()) {
      types.push(createTupleExtendedTypeNode(
        this.visitPrimaryType(context.primaryType(0)),
        this.visitPrimaryType(context.primaryType(1)),
        this.options.showNodeText ? context.text : undefined
      ));

      if (context.tupleTypeSequence()) {
        mergeSequence();
      }

      return types;
    }

    if (context.PIPE()) {
      types.push(createIntersectTypeNode(
        createTypeNode(
          this.visitPrimaryType(context.primaryType(0))
        ),
        createTypeNode(
          this.visitPrimaryType(context.primaryType(1))
        ),
        this.options.showNodeText ? context.text : undefined
      ));

      if (context.tupleTypeSequence()) {
        mergeSequence()
      }

      return types;
    }

    if (context.AMP()) {
      types.push(createUnionTypeNode(
        createTypeNode(
          this.visitPrimaryType(context.primaryType(0))
        ),
        createTypeNode(
          this.visitPrimaryType(context.primaryType(1))
        ),
        this.options.showNodeText ? context.text : undefined
      ));

      if (context.tupleTypeSequence()) {
        mergeSequence();
      }

      return types;
    }

    if (context.primaryType().length === 1) {
      types = context.primaryType()
        .map(primary => createTypeNode(this.visitPrimaryType(primary)))

      if (context.tupleTypeSequence()) {
        mergeSequence();
      }
      return types;
    }
  }

  visitPrimaryType = (context: Parser.PrimaryTypeContext): Partial<PrimaryTypeNode> => {

    let primary: Partial<IdentifierNode> | Partial<KeywordNode> | Partial<PropertyIdentifierNode>;

    if (context.optionalIdentifier()) {
      primary = this.visitOptionalIdentifier(context.optionalIdentifier());
    } else if (context.identifierOrKeyword()) {
      primary = this.visitIdentifierOrKeyword(context.identifierOrKeyword())
    } else if (context.propertyIdentifier()) {
      primary = this.visitPropertyIdentifier(context.propertyIdentifier());
    }
    return createPrimaryTypeNode(primary, this.options.showNodeText ? context.text : undefined);
  }

  visitIdentifierOrKeyword = (context: Parser.IdentifierOrKeywordContext): Partial<(IdentifierNode | KeywordNode)> => {
    if (context.identifier()) {
      return this.visitIdentifier(context.identifier())
    }

    if (context.keyword()) {
      return this.visitKeyword(context.keyword())
    }
  }

  visitKeyword = (context: Parser.KeywordContext): KeywordNode => {
    if (context.NullLiteral()) {
      return createKeywordNode(context.NullLiteral().text);
    }
  }

  visitParenthesizedType = (context: Parser.ParenthesizedTypeContext, optional = false): Partial<ParenthesizedTypeNode> => {
    if (context.type()) {
      return createParenthesizedTypeNode(this.visitType(context.type()), optional, this.options.showNodeText ? context.text : undefined);
    }
  }

  visitUnaryType = (context: Parser.UnaryTypeContext): Partial<UnaryTypeNode> => {
    return createUnaryTypeNode(
      (context.AMP() || context.STAR()).text,
      this.visitPrimaryType(context.primaryType()),
      this.options.showNodeText ? context.text : undefined
    );
  }

  visitObjectType = (context: Parser.ObjectTypeContext): Partial<ObjectTypeNode> => {
    return createObjectTypeNode(this.visitObjectPairSequenceType(context.objectPairSequenceType()), this.options.showNodeText ? context.text : undefined);
  }

  visitObjectPairSequenceType = (context: Parser.ObjectPairSequenceTypeContext) => {
    return (context ? context.objectPairType() : []).map(pair => {
      return createObjectPairTypeNode(this.visitType(pair.type(0)), this.visitType(pair.type(1)), this.options.showNodeText ? pair.text : undefined)
    });
  }

  visitArrayType = (context: Parser.ArrayTypeContext): Partial<ArrayTypeNode> => {

    if (context.notArrayType()) {
      return createArrayTypeNode(
        this.visitType(context.notArrayType()),
        (context.type() || []).map(type => this.visitType(type)),
        this.options.showNodeText ? context.text : undefined
      );
    }
    return createArrayTypeNode(
      null,
      (context.type() || []).map(type => this.visitType(type)),
      this.options.showNodeText ? context.text : undefined
    )
  }

  visitPropertyIdentifier = (context: Parser.PropertyIdentifierContext): Partial<PropertyIdentifierNode> => {

    // Assume 'context' is defined.
    let identifier = context.identifier() ?
      this.visitIdentifier(context.identifier()) :
      this.visitOptionalIdentifier(context.optionalIdentifier());
    // A property must exist since by grammar:
    // (optionalIdentifier | identifier) ('.' optionalIdentifierOrIdentifier)+
    let property = context.optionalIdentifierOrIdentifier()
      .map(this.visitOptionalIdentifierOrIdentifier);
    // Add the identifier to the beginning of the array
    property.unshift(identifier);
    return createPropertyIdentifierNode(property, context.text)
  }

  visitOptionalIdentifier = (context: Parser.OptionalIdentifierContext): Partial<OptionalIdentifierNode> => {
    if (context.identifier()) {
      return this.visitIdentifier(context.identifier(), !!context.QUESTION())
    }
  }

  visitOptionalIdentifierOrIdentifier = (context: Parser.OptionalIdentifierOrIdentifierContext): Partial<OptionalIdentifierNode> | Partial<IdentifierNode> => {
    if (context.identifier()) {
      return this.visitIdentifier(context.identifier())
    }

    if (context.optionalIdentifier()) {
      return this.visitOptionalIdentifier(context.optionalIdentifier())
    }
  }

  /* Expression visitor */

  visitExpression = (context: Parser.ExpressionContext): Partial<ExpressionNode> => {
    if (context.unaryExpression()) {
      return createExpressionNode(
        this.visitUnaryExpression(context.unaryExpression()),
        this.options.showNodeText ? context.text : undefined
      )
    }

    if (context.expression().length > 1) {
      return createExpressionNode(
        createBinaryExpressionNode(
          (context.PLUS() || context.MINUS() || context.STAR() || context.FORWARD_SLASH()).text,
          this.visitExpression(context.expression(0)),
          this.visitExpression(context.expression(1)),
          this.options.showNodeText ? context.text : undefined
        ),
        this.options.showNodeText ? context.text : undefined
      )
    }

    if (context.arrayExpression()) {
      return createExpressionNode(
        createArrayExpressionNode(
          this.visitArrayExpression(context.arrayExpression()),
          this.options.showNodeText ? context.arrayExpression().text : undefined
        ),
        this.options.showNodeText ? context.text : undefined
      );
    }

    if (context.objectExpression()) {
      return createExpressionNode(
        this.visitObjectExpression(context.objectExpression()),
        this.options.showNodeText ? context.text : undefined
      )
    }

    if (context.lambdaExpression()) {
      return createExpressionNode(
        this.visitLambdaExpression(context.lambdaExpression()),
        this.options.showNodeText ? context.text : undefined
      )
    }

    if (context.literalExpression()) {
      return createExpressionNode(
        this.visitLiteralExpression(context.literalExpression()),
        this.options.showNodeText ? context.text : undefined
      )
    }

    if (context.parenthesizedExpression()) {
      return createExpressionNode(
        this.visitParenthesizedExpression(context.parenthesizedExpression()),
        this.options.showNodeText ? context.text : undefined
      )
    }
  }

  visitUnaryExpression = (context: Parser.UnaryExpressionContext): Partial<UnaryExpressionNode> => {
    return createUnaryExpressionNode(
      (context.PLUS() || context.MINUS()).text,
      this.visitExpression(context.expression()),
      this.options.showNodeText ? context.text : undefined
    )
  }

  visitArrayExpression = (context: Parser.ArrayExpressionContext): Partial<ExpressionNode>[] => {
    return (context ? context.expression() : []).map(expression => {
      return this.visitExpression(expression)
    })
  }

  visitObjectExpression = (context: Parser.ObjectExpressionContext): Partial<ObjectExpressionNode> => {
    return createObjectExpressionNode(
      this.visitObjectPairSequenceExpression(context.objectPairSequenceExpression()),
      this.options.showNodeText ? context.text : undefined
    )
  }


  visitObjectPairSequenceExpression = (context: Parser.ObjectPairSequenceExpressionContext): Partial<ObjectPairExpressionNode>[] => {
    return (context ? context.objectPairExpression() : []).map(pair => {
      return createObjectPairExpressionNode(
        this.visitLiteralExpression(pair.literalExpression(0)),
        pair.objectExpression() ?
          this.visitObjectExpression(pair.objectExpression()) :
          this.visitLiteralExpression(pair.literalExpression(1)),
        this.options.showNodeText ? context.text : undefined
      )
    });
  }

  visitLambdaExpression = (context: Parser.LambdaExpressionContext): Partial<LambdaExpressionNode> => {
    return this.visitLambdaType(context);
  }

  visitParenthesizedExpression = (context: Parser.ParenthesizedExpressionContext): Partial<ParenthesizedExpressionNode> => {
    return createParenthesizedExpressioneNode(this.visitExpression(context.expression()));
  }

  visitLiteralExpression = (context: Parser.LiteralExpressionContext): Partial<LiteralExpressionNode> => {
    let node = { literal: {} }
    if (context.NumberLiteral()) {
      return createLiteralExpressionNode(
        'number',
        context.NumberLiteral().text
      )
    }
    if (context.BooleanLiteral()) {
      return createLiteralExpressionNode('boolean', context.BooleanLiteral().text)
    }
    if (context.CharacterLiteral()) {
      return createLiteralExpressionNode('character', context.CharacterLiteral().text)
    }
    if (context.StringLiteral()) {
      return createLiteralExpressionNode('string', context.StringLiteral().text)
    }
    if (context.NullLiteral()) {
      return createLiteralExpressionNode('null', context.NullLiteral().text)
    }
  }

  /* Description visitor */

  visitDescription = (context: Parser.DescriptionContext): Partial<DescriptionNode> => {
    return createDescriptionNode(
      context.text,
      this.visitDescriptionLine(context.descriptionLine())
    )
  }

  visitDescriptionLine = (context: Parser.DescriptionLineContext): Partial<InlineTagNode>[] => {
    return this.visitDescriptionLineElement(context.descriptionLineElement());
  }

  visitDescriptionLineElement = (context: Parser.DescriptionLineElementContext[]): Partial<InlineTagNode>[] => {
    return (context || []).map(element => {
      return element.inlineTag() ? this.visitInlineTag(element.inlineTag()) : undefined
    }).filter(element => element !== undefined);
  }

  visitInlineTag = (context: Parser.InlineTagContext): Partial<InlineTagNode> => {
    return createInlineTagNode(
      this.visitIdentifier(context.inlineTagName().identifier()),
      this.visitInlineTagBody(context.inlineTagBody()),
      this.options.showNodeText ? context.text : undefined
    );
  }

  visitInlineTagBody = (context: Parser.InlineTagBodyContext): string => {
    return context.braceBody().map(body => body.text).join('');
  }
}