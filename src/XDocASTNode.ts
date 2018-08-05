import * as _ from "lodash";
/* Documentation */

/**
 * Removes undefined, null, and false properties from an object.
 * 
 * # API
 * 
 * ```
 * @param object
 * ```
 */
function sanitize<T>(object) {
  // Object.keys(object).forEach((key) => (object[key] == null) && delete object[key]);
  return _.pickBy(object) as Partial<T>
}

/**
 * Creates a Documentation node.
 * 
 * # API
 * 
 * ```
 * @param body: BodyNode - The body node. See. {@link XDocASTNode.ts::BodyNode}
 * @param text?: string - The string representation of the body node.
 * @return DocumentationNode - See {@link XDocASTNode.ts::DocumentationNode}.
 * ```
 */
export function createDocumentationNode(
  body: Partial<BodyNode>,
  text?: string
): Partial<DocumentationNode> {
  return { documentation: sanitize({ body, text }) }
}

export interface DocumentationNode {
  documentation: {
    body?: Partial<BodyNode>,
    text?: string
  }
}

/**
 * Creates a Body node.
 */
export function createBodyNode(
  annotations: Partial<AnnotationsNode>,
  text?: string
): Partial<BodyNode> {
  return sanitize({ annotations, text })
}

export interface BodyNode {
  annotations: Partial<AnnotationsNode>,
  text?: string
}

export type AnnotationsNode = Partial<TagNode>[] | undefined[];

/* Tag */

export function createTagNode(
  name: Partial<TagNameNode>,
  identifier: Partial<TagIdentifierNode> | Partial<IdentifierNode>,
  type: Partial<TypeNode>,
  expression: Partial<ExpressionNode>,
  description: Partial<DescriptionNode>,
  text?: string
): TagNode {
  return sanitize(Object.assign({}, name, identifier, { type }, expression, description, text));
}

export interface TagNode {
  name?: Partial<TagNameNode>,
  identifier?:Partial <TagIdentifierNode>,
  type?: Partial<TypeNode>,
  expression?: Partial<ExpressionNode>,
  description?: Partial<DescriptionNode>,
  text?: string
}

export function createTagNameNode(
  name: Partial<IdentifierNode>,
  text?: string
): Partial<TagNameNode> {
  return sanitize({ name, text })
}

export interface TagNameNode {
  name: Partial<IdentifierNode>,
  text?: string
}

export function createTagIdentifierNode(
  identifier: Partial<IdentifierNode> | Partial<OptionalIdentifierNode> | undefined,
  property?: Partial<PropertyTagIdentifierNode> | undefined,
  text?: string
): Partial<TagIdentifierNode> {
  let node = {}
  if (identifier) Object.assign(node, { identifier, text })
  else if (property) Object.assign(node, { property, text })
  return sanitize(node);
}

export interface TagIdentifierNode {
  identifier?: IdentifierNode | OptionalTagIdentifierNode
  property?: PropertyTagIdentifierNode,
  text?: string
}

export function createOptionalTagIdentifierNode(
  identifier: Partial<OptionalTagIdentifierNode>
): Partial<OptionalIdentifierNode> {
  return identifier;
}

export type OptionalTagIdentifierNode = OptionalIdentifierNode;


export function createPropertyTagIdentifierNode(
  property: Partial<(IdentifierNode | OptionalTagIdentifierNode)>[] | undefined[],
  text?: string
): Partial<PropertyTagIdentifierNode> {
  return sanitize<PropertyTagIdentifierNode>({ property, text })
}
export interface PropertyTagIdentifierNode {
  // Shortcut of OptionalTagOrIdentifier
  property: (IdentifierNode | OptionalTagIdentifierNode)[] | undefined[],
  text?: string
}

export function createIdentifierNode(
  text: string,
  optional = false,
  property?: Partial<IdentifierNode>[] | undefined[],
): Partial<IdentifierNode> {
  if (!optional) optional = false;
  if (!property) property = []

  return { identifier: sanitize({ optional, property, text }) }
}

export interface IdentifierNode {
  identifier: {
    optional?: boolean,
    property?: IdentifierNode[] | undefined[]
    text?: string
  }
}

export function createOptionalIdentifierNode(
  optional = true,
  property: IdentifierNode[] | undefined[],
  text?: string
): Partial<OptionalIdentifierNode> {
  return createIdentifierNode(text, optional, property);
}

export type OptionalIdentifierNode = IdentifierNode


/* Type */

/**
 * 
 * Creates a Type node.
 * 
 * # API
 * 
 * ```
 * @export
 * @function createTypeNode
 * @param type: UnionTypeNode
 * | LambdaTypeNode
 * | TupleTypeNode
 * | PrimaryTypeNode
 * | ParenthesizedTypeNode
 * | UnaryTypeNode
 * | ObjectTypeNode
 * | ArrayTypeNode
 * | PropertyTypeNode
 * - The type of node to create.
 * @param optional = false 
 * - Determines whether the type of node is optional.
 * ```
 */
export function createTypeNode(
  type: Partial<IntersectTypeNode>
    | Partial<UnionTypeNode>
    | Partial<LambdaTypeNode>
    | Partial<TupleTypeNode>
    | Partial<PrimaryTypeNode>
    | Partial<ParenthesizedTypeNode>
    | Partial<UnaryTypeNode>
    | Partial<ObjectTypeNode>
    | Partial<ArrayTypeNode>
    | Partial<PropertyIdentifierNode>,
  optional = false,
  text?: string
): Partial<TypeNode> {
  return Object.assign({}, type, sanitize({ optional, text }))
}

export interface TypeNode {
  intersect?: IntersectTypeNode,
  union?: UnionTypeNode,
  lambda?: LambdaTypeNode,
  tuple?: TupleTypeNode,
  primary?: PrimaryTypeNode,
  parenthesized?: ParenthesizedTypeNode,
  unary?: UnaryTypeNode,
  object?: ObjectTypeNode,
  array?: ArrayTypeNode,
  property?: PropertyIdentifierNode,
  optional?: boolean,
  text?: string
}

/**
 * Creates an IntersectionType node.
 * 
 * # API
 * 
 * ```
 * @public left: TypeNode - The type of node that appears on the left-hand side.
 * @public right: TypeNode - The type of node that appears on the right-hand side.
 * ```
 */
export function createIntersectTypeNode(
  left: TypeNode,
  right: TypeNode,
  text?: string
): Partial<IntersectTypeNode> {
  return { intersect: sanitize({ left, right, text }) }
}

export interface IntersectTypeNode {
  intersect: {
    left?: TypeNode,
    right?: TypeNode,
    text?: string
  }
}


/**
 * Creates an UnionType node.
 * 
 * # API
 * 
 * ```
 * @export
 * @public left: TypeNode - The type of node that appears on the left-hand side.
 * @public right: TypeNode - The type of node that appears on the right-hand side.
 * ```
 */
export function createUnionTypeNode(
  left: TypeNode,
  right: TypeNode,
  text?: string
): Partial<UnionTypeNode>{
  return { union: sanitize({ left, right, text }) }
}

export interface UnionTypeNode {
  union: {
    left?: TypeNode,
    right?: TypeNode,
    text?: string
  }
}

/**
 * Creates a LambdaType node.
 * 
 * # API
 * 
 * ```
 * - The single parameter in a lambda type.
 * @param parameters: FormalParameterSequencce | undefined[] | null
 * - The sequence of parameters in a lambda type.
 * @param type: TypeNode
 * - The return type in a lambda type.
 * ```
 */
export function createLambdaTypeNode(
  parameters: Partial<FormalParameterSequenceNode> | undefined[],
  type: TypeNode,
  text?: string
): Partial<LambdaTypeNode> {
  if (!parameters) parameters = []
  return { lambda: sanitize({ parameters, type, text }) }
}

export interface LambdaTypeNode {
  lambda: {
    parameters?: FormalParameterSequenceNode | undefined[],
    type?: TypeNode,
    text?: string
  }
}

export function createFormalParemeterSequenceNode(
  parameters: Partial<ParameterNode>[] | undefined[],
  text?: string
): FormalParameterSequenceNode {
  return { parameters, text }
}

export interface FormalParameterSequenceNode {
  parameters: Partial<ParameterNode>[] | undefined[],
  text?: string
}

export function createParameterNode(
  identifier: Partial<IdentifierNode>,
  type?: Partial<TypeNode>,
  text?: string
): Partial<ParameterNode> {
  return sanitize({ identifier, type, text })
}

export interface ParameterNode {
  identifier: Partial<IdentifierNode>,
  type?: Partial<TypeNode>,
  text?: string
}

export function createTupleTypeNode(
  identifier: Partial<IdentifierNode>,
  types: Partial<TypeNode>[] | undefined[],
  text?: string
): Partial<TupleTypeNode> {
  return sanitize({ identifier, types, text })
}

export interface TupleTypeNode {
  identifier?: Partial<IdentifierNode>,
  types: Partial<TypeNode>[] | undefined[],
  text?: string
}

export function createPrimaryTypeNode(
  primary: Partial<OptionalIdentifierNode> | Partial<(IdentifierNode | KeywordNode)> | Partial<PropertyIdentifierNode>,
  text?: string
): Partial<PrimaryTypeNode> {
  return sanitize({ primary, text })
}

export interface PrimaryTypeNode {
  primary: Partial<OptionalIdentifierNode> | Partial<IdentifierNode> | KeywordNode,
  text?: string
}

export function createKeywordNode(
  text: string | "null" | "undefined"
): KeywordNode {
  return { keyword: { text } }
}

export interface KeywordNode {
  keyword: {
    text?: string
  }
}

export function createParenthesizedTypeNode(
  type: Partial<TypeNode>,
  optional = false,
  text?: string
): Partial<ParenthesizedTypeNode> {
  return { parenthesized: sanitize({ type, optional, text }) };
}

export interface ParenthesizedTypeNode {
  parenthesized: {
    type?: Partial<TypeNode>,
    text?: string
  }
}


export function createUnaryTypeNode(
  operator: string | "&" | "*",
  right: Partial<PrimaryTypeNode>,
  text?: string
): Partial<UnaryTypeNode> {
  return { unary: sanitize({ operator, right, text }) }
}

export interface UnaryTypeNode {
  unary: {
    operator?: string | "&" | "*",
    right?: Partial<PrimaryTypeNode>,
    text?: string
  }
}

export function createObjectTypeNode(
  object?: Partial<ObjectPairTypeNode>[] | undefined[],
  text?: string
): Partial<ObjectTypeNode> {
  if (!object) object = [];
  return sanitize({ object, text })
}

export interface ObjectTypeNode {
  object: Partial<ObjectPairTypeNode>[] | undefined[],
  text?: string
}

export function createObjectPairTypeNode(
  key: TypeNode,
  value: TypeNode,
  text?: string
): Partial<ObjectPairTypeNode> {
  return sanitize({ key, value, text })
}

export interface ObjectPairTypeNode {
  key: Partial<TypeNode>,
  value: Partial<TypeNode>,
  text?: string
}

export function createArrayTypeNode(
  type: Partial<TypeNode>,
  types: Partial<TypeNode>[] | undefined[],
  text?: string
): ArrayTypeNode {
  if (!types) types = [];

  return { array: sanitize({ type, types, text }) }
}

export interface ArrayTypeNode {
  array: {
    type?: Partial<TypeNode>,
    types?: Partial<TypeNode>[] | undefined[],
    text?: string
  }
}

export function createPropertyIdentifierNode(
  property: Partial<IdentifierNode>[] | undefined[],
  text: string
): Partial<PropertyIdentifierNode> {
  return createIdentifierNode(text, false, property)
};

export interface PropertyIdentifierNode extends IdentifierNode { }


/* Expression */


export function createExpressionNode(
  expression:
    Partial<UnaryExpressionNode>
    | Partial<BinaryExpressionNode>
    | Partial<ArrayExpressionNode>
    | Partial<ObjectExpressionNode>
    | Partial<LambdaExpressionNode>
    | Partial<LiteralExpressionNode>
    | Partial<ParenthesizedExpressionNode>,
  text?: string,
): Partial<ExpressionNode> {
  return sanitize({ expression, text })
}

export interface ExpressionNode {
  expression:
  UnaryExpressionNode
  | BinaryExpressionNode
  | ArrayExpressionNode
  | ObjectExpressionNode
  | LambdaExpressionNode
  | LiteralExpressionNode
  | ParenthesizedExpressionNode
  text?: string
}


export function createUnaryExpressionNode(
  operator: string | '+' | '-',
  right: Partial<ExpressionNode>,
  text?: string
): Partial<UnaryExpressionNode> {
  return { unary: sanitize({ operator, right, text }) }
}

export interface UnaryExpressionNode {
  unary: {
    operator?: string | '+' | '-',
    right?: Partial<ExpressionNode>,
    text?: string
  }
}

export function createBinaryExpressionNode(
  operator: string | '+' | '-',
  left: Partial<ExpressionNode>,
  right: Partial<ExpressionNode>,
  text?: string
): Partial<BinaryExpressionNode> {
  return { binary: sanitize({ left, right, operator, text }) }
}

export interface BinaryExpressionNode {
  binary: {
    operator?: string | '+' | '-' | '*' | '/',
    left?: ExpressionNode,
    right?: ExpressionNode,
    text?: string
  }
}

export function createArrayExpressionNode(
  array?: Partial<ExpressionNode>[],
  text?: string
): Partial<ArrayExpressionNode> {
  if (!array) array = [];
  return sanitize({ array, text })
}

export interface ArrayExpressionNode {
  array?: Partial<ExpressionNode>[],
  text?: string
}

export function createObjectExpressionNode(
  object?: Partial<ObjectPairExpressionNode>[],
  text?: string
): Partial<ObjectExpressionNode> {
  if (!object) object = []
  return sanitize({ object, text })
}

export interface ObjectExpressionNode {
  object: Partial<ObjectPairExpressionNode>[],
  text?: string
}

export function createObjectPairExpressionNode(
  key: Partial<LiteralExpressionNode>,
  value: Partial<ObjectExpressionNode> | Partial<LiteralExpressionNode>,
  text?: string
): Partial<ObjectPairExpressionNode> {
  return sanitize({ key, value, text })
}

export interface ObjectPairExpressionNode {
  key: Partial<LiteralExpressionNode>,
  value: Partial<ObjectExpressionNode> | Partial<LiteralExpressionNode>,
  text?: string
}

export function createLambdaExpressionNode(
  parameters: FormalParameterSequenceNode | undefined[],
  type: TypeNode,
  text?: string
): Partial<LambdaExpressionNode> {
  if (!parameters) parameters = []
  return createLambdaTypeNode(parameters, type, text)
}

export interface LambdaExpressionNode extends LambdaTypeNode { }

export function createParenthesizedExpressioneNode(
  expression: Partial<ExpressionNode>,
  optional = false,
  text?: string
): Partial<ParenthesizedExpressionNode> {
  return { parenthesized: sanitize({ expression, optional, text }) };
}
export interface ParenthesizedExpressionNode { 
  parenthesized: {
    expression?: ExpressionNode,
    optional?: boolean,
    text?: string
  }
};


export function createLiteralExpressionNode(
  type: string,
  text: string
): Partial<LiteralExpressionNode> {
  return { literal: sanitize({ type, text }) }
}

export interface LiteralExpressionNode {
  literal: {
    type?: string,
    text?: string,
  }
}

export function createDescriptionNode(
  text: string,
  inlines?: Partial<InlineTagNode>[]
): Partial<DescriptionNode> {
  if (!inlines) inlines = []
  return { description: sanitize({ text, inlines }) }
}

export interface DescriptionNode {
  description: {
    text?: string,
    inlines?: Partial<InlineTagNode>[]
  }
}

export function createInlineTagNode(
  identifier: Partial<IdentifierNode>,
  body: string,
  text?: string
): Partial<InlineTagNode> {
  return sanitize({ identifier, body, text })
}

export interface InlineTagNode {
  identifier: Partial<IdentifierNode>,
  body?: string,
  text?: string
}