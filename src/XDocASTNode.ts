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
function sanitize(object) {
  // Object.keys(object).forEach((key) => (object[key] == null) && delete object[key]);
  return _.pickBy(object)
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
  body: BodyNode,
  text?: string
): DocumentationNode {
  return { documentation: sanitize({ body, text }) }
}

export interface DocumentationNode {
  documentation: {
    body: BodyNode,
    text?: string
  }
}

/**
 * Creates a Body node.
 */
export function createBodyNode(
  annotations: AnnotationsNode,
  text?: string
): BodyNode {
  return sanitize({ annotations, text })
}

export interface BodyNode {
  annotations: TagNode[] | undefined[],
  text?: string
}

export type AnnotationsNode = TagNode[] | undefined[];

/* Tag */

export function createTagNode(
  name: TagNameNode,
  identifier: TagIdentifierNode | IdentifierNode,
  type: TypeNode,
  expression: ExpressionNode,
  description: DescriptionNode,
  text?: string
): TagNode {
  return sanitize(Object.assign({}, name, identifier, { type }, expression, description, text));
}

export interface TagNode {
  name?: TagNameNode,
  identifier?: TagIdentifierNode | IdentifierNode,
  type?: TypeNode,
  expression?: ExpressionNode,
  description?: DescriptionNode,
  text?: string
}

export function createTagNameNode(
  name: IdentifierNode,
  text?: string
): TagNameNode {
  return sanitize({ name, text })
}

export interface TagNameNode {
  name: IdentifierNode,
  text?: string
}

export function createTagIdentifierNode(
  identifier: IdentifierNode | OptionalIdentifierNode | undefined,
  property?: PropertyTagIdentifierNode | undefined,
  text?: string
): TagIdentifierNode {
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
  identifier: OptionalTagIdentifierNode
): OptionalIdentifierNode {
  return identifier;
}

export interface OptionalTagIdentifierNode extends OptionalIdentifierNode { }


export function createPropertyTagIdentifierNode(
  property: (IdentifierNode | OptionalTagIdentifierNode)[] | undefined[],
  text?: string
): PropertyTagIdentifierNode {
  return sanitize({ property, text })
}
export interface PropertyTagIdentifierNode {
  // Shortcut of OptionalTagOrIdentifier
  property: (IdentifierNode | OptionalTagIdentifierNode)[] | undefined[],
  text?: string
}

export function createIdentifierNode(
  text: string,
  optional = false,
  property?: IdentifierNode[] | undefined[],
): IdentifierNode {
  if (!optional) optional = false;
  if (!property) property = []

  return { identifier: sanitize({ optional, property, text }) }
}

export interface IdentifierNode {
  identifier: {
    optional: boolean,
    property: IdentifierNode[] | undefined[]
    text: string
  }
}

export function createOptionalIdentifierNode(
  optional = true,
  property: IdentifierNode[] | undefined[],
  text?: string
): OptionalIdentifierNode {
  return createIdentifierNode(text, optional, property, );
}

export interface OptionalIdentifierNode extends IdentifierNode { }


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
  type: IntersectTypeNode
    | UnionTypeNode
    | LambdaTypeNode
    | TupleTypeNode
    | PrimaryTypeNode
    | ParenthesizedTypeNode
    | UnaryTypeNode
    | ObjectTypeNode
    | ArrayTypeNode
    | PropertyIdentifierNode,
  optional = false,
  text?: string
): TypeNode {
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
  optional: boolean,
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
): IntersectTypeNode {
  return { intersect: sanitize({ left, right, text }) }
}

export interface IntersectTypeNode {
  intersect: {
    left: TypeNode,
    right: TypeNode,
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
): UnionTypeNode {
  return { union: sanitize({ left, right, text }) }
}

export interface UnionTypeNode {
  union: {
    left: TypeNode,
    right: TypeNode,
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
  parameters: FormalParameterSequenceNode | undefined[],
  type: TypeNode,
  text?: string
): LambdaTypeNode {
  if (!parameters) parameters = []
  return { lambda: sanitize({ parameters, type, text }) }
}

export interface LambdaTypeNode {
  lambda: {
    parameters: FormalParameterSequenceNode | undefined[],
    type: TypeNode,
    text?: string
  }
}

export function createFormalParemeterSequenceNode(
  parameters: ParameterNode[] | undefined[],
  text?: string
): FormalParameterSequenceNode {
  return { parameters, text }
}

export interface FormalParameterSequenceNode {
  parameters: ParameterNode[] | undefined[],
  text?: string
}

export function createParameterNode(
  identifier: IdentifierNode,
  type?: TypeNode,
  text?: string
): ParameterNode {
  return sanitize({ identifier, type, text })
}

export interface ParameterNode {
  identifier: IdentifierNode,
  type?: TypeNode,
  text?: string
}

export function createTupleTypeNode(
  identifier: IdentifierNode,
  types: TypeNode[] | undefined[],
  text?: string
): TupleTypeNode {
  return sanitize({ identifier, types, text })
}

export interface TupleTypeNode {
  identifier?: IdentifierNode,
  types: TypeNode[] | undefined[],
  text?: string
}

export function createPrimaryTypeNode(
  primary: OptionalIdentifierNode | (IdentifierNode | KeywordNode),
  text?: string
): PrimaryTypeNode {
  return sanitize({ primary, text })
}

export interface PrimaryTypeNode {
  primary: OptionalIdentifierNode | (IdentifierNode | KeywordNode),
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
  type: TypeNode,
  optional = false,
  text?: string
): ParenthesizedTypeNode {
  return { parenthesized: sanitize({ type, optional, text }) };
}

export interface ParenthesizedTypeNode {
  parenthesized: {
    type: TypeNode,
    text?: string
  }
}


export function createUnaryTypeNode(
  operator: string | "&" | "*",
  right: PrimaryTypeNode,
  text?: string
): UnaryTypeNode {
  return { unary: sanitize({ operator, right, text }) }
}

export interface UnaryTypeNode {
  unary: {
    operator: string | "&" | "*",
    right: PrimaryTypeNode,
    text?: string
  }
}

export function createObjectTypeNode(
  object?: ObjectPairTypeNode[] | undefined[],
  text?: string
): ObjectTypeNode {
  if (!object) object = [];
  return sanitize({ object, text })
}

export interface ObjectTypeNode {
  object: ObjectPairTypeNode[] | undefined[],
  text?: string
}

export function createObjectPairTypeNode(
  key: TypeNode,
  value: TypeNode,
  text?: string
): ObjectPairTypeNode {
  return sanitize({ key, value, text })
}

export interface ObjectPairTypeNode {
  key: TypeNode,
  value: TypeNode,
  text?: string
}

export function createArrayTypeNode(
  type: TypeNode,
  types: TypeNode[] | undefined[],
  text?: string
): ArrayTypeNode {
  if (!types) types = [];

  return { array: sanitize({ type, types, text }) }
}

export interface ArrayTypeNode {
  array: {
    type?: TypeNode,
    types?: TypeNode[] | undefined[],
    text?: string
  }
}

export function createPropertyIdentifierNode(
  property: IdentifierNode[] | undefined[],
  text: string
): PropertyIdentifierNode {
  return createIdentifierNode(text, false, property)
};

export interface PropertyIdentifierNode extends IdentifierNode { }


/* Expression */


export function createExpressionNode(
  expression:
    UnaryExpressionNode
    | BinaryExpressionNode
    | ArrayExpressionNode
    | ObjectExpressionNode
    | LambdaExpressionNode
    | LiteralExpressionNode
    | ParenthesizedExpressionNode,
  text?: string,
): ExpressionNode {
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
  right: ExpressionNode,
  text?: string
): UnaryExpressionNode {
  return { unary: sanitize({ operator, right, text }) }
}

export interface UnaryExpressionNode {
  unary: {
    operator: string | '+' | '-',
    right: ExpressionNode,
    text?: string
  }
}

export function createBinaryExpressionNode(
  operator: string | '+' | '-',
  left: ExpressionNode,
  right: ExpressionNode,
  text?: string
): BinaryExpressionNode {
  return { binary: sanitize({ left, right, operator, text }) }
}

export interface BinaryExpressionNode {
  binary: {
    left: ExpressionNode,
    right: ExpressionNode,
    operator: string | '+' | '-' | '*' | '/',
    text?: string
  }
}

export function createArrayExpressionNode(
  array?: ExpressionNode[],
  text?: string
): ArrayExpressionNode {
  if (!array) array = [];
  return sanitize({ array, text })
}

export interface ArrayExpressionNode {
  array: ExpressionNode[],
  text?: string
}

export function createObjectExpressionNode(
  object?: ObjectPairExpressionNode[],
  text?: string
): ObjectExpressionNode {
  if (!object) object = []
  return sanitize({ object, text })
}

export interface ObjectExpressionNode {
  object: ObjectPairExpressionNode[],
  text?: string
}

export function createObjectPairExpressionNode(
  key: LiteralExpressionNode,
  value: ObjectExpressionNode | LiteralExpressionNode,
  text?: string
): ObjectPairExpressionNode {
  return sanitize({ key, value, text })
}

export interface ObjectPairExpressionNode {
  key: LiteralExpressionNode,
  value: ObjectExpressionNode | LiteralExpressionNode,
  text?: string
}

export function createLambdaExpressionNode(
  parameters: FormalParameterSequenceNode | undefined[],
  type: TypeNode,
  text?: string
): LambdaExpressionNode {
  if (!parameters) parameters = []
  return createLambdaTypeNode(parameters, type, text)
}

export interface LambdaExpressionNode extends LambdaTypeNode { }

export function createParenthesizedExpressioneNode(
  expression: ExpressionNode,
  optional = false,
  text?: string
): ParenthesizedExpressionNode {
  return { parenthesized: sanitize({ expression, optional, text }) };
}
export interface ParenthesizedExpressionNode { 
  parenthesized: {
    expression: ExpressionNode,
    optional: boolean,
    text?: string
  }
};


export function createLiteralExpressionNode(
  type: string,
  text: string
): LiteralExpressionNode {
  return { literal: sanitize({ type, text }) }
}

export interface LiteralExpressionNode {
  literal: {
    type: string,
    text?: string,
  }
}

export function createDescriptionNode(
  text: string,
  inlines?: InlineTagNode[]
): DescriptionNode {
  if (!inlines) inlines = []
  return { description: sanitize({ text, inlines }) }
}

export interface DescriptionNode {
  description: {
    text: string,
    inlines?: InlineTagNode[]
  }
}

export function createInlineTagNode(
  identifier: IdentifierNode,
  body: string,
  text?: string
): InlineTagNode {
  return sanitize({ identifier, body, text })
}

export interface InlineTagNode {
  identifier: IdentifierNode,
  body: string,
  text?: string
}