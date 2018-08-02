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
export declare function createDocumentationNode(body: BodyNode, text?: string): DocumentationNode;
export interface DocumentationNode {
    documentation: {
        body: BodyNode;
        text?: string;
    };
}
/**
 * Creates a Body node.
 */
export declare function createBodyNode(annotations: AnnotationsNode, text?: string): BodyNode;
export interface BodyNode {
    annotations: TagNode[] | undefined[];
    text?: string;
}
export declare type AnnotationsNode = TagNode[] | undefined[];
export declare function createTagNode(name: TagNameNode, identifier: TagIdentifierNode | IdentifierNode, type: TypeNode, expression: ExpressionNode, description: DescriptionNode, text?: string): TagNode;
export interface TagNode {
    name?: TagNameNode;
    identifier?: TagIdentifierNode | IdentifierNode;
    type?: TypeNode;
    expression?: ExpressionNode;
    description?: DescriptionNode;
    text?: string;
}
export declare function createTagNameNode(name: IdentifierNode, text?: string): TagNameNode;
export interface TagNameNode {
    name: IdentifierNode;
    text?: string;
}
export declare function createTagIdentifierNode(identifier: IdentifierNode | OptionalIdentifierNode | undefined, property?: PropertyTagIdentifierNode | undefined, text?: string): TagIdentifierNode;
export interface TagIdentifierNode {
    identifier?: IdentifierNode | OptionalTagIdentifierNode;
    property?: PropertyTagIdentifierNode;
    text?: string;
}
export declare function createOptionalTagIdentifierNode(identifier: OptionalTagIdentifierNode): OptionalIdentifierNode;
export interface OptionalTagIdentifierNode extends OptionalIdentifierNode {
}
export declare function createPropertyTagIdentifierNode(property: (IdentifierNode | OptionalTagIdentifierNode)[] | undefined[], text?: string): PropertyTagIdentifierNode;
export interface PropertyTagIdentifierNode {
    property: (IdentifierNode | OptionalTagIdentifierNode)[] | undefined[];
    text?: string;
}
export declare function createIdentifierNode(text: string, optional?: boolean, property?: IdentifierNode[] | undefined[]): IdentifierNode;
export interface IdentifierNode {
    identifier: {
        optional: boolean;
        property: IdentifierNode[] | undefined[];
        text: string;
    };
}
export declare function createOptionalIdentifierNode(optional: boolean, property: IdentifierNode[] | undefined[], text?: string): OptionalIdentifierNode;
export interface OptionalIdentifierNode extends IdentifierNode {
}
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
export declare function createTypeNode(type: IntersectTypeNode | UnionTypeNode | LambdaTypeNode | TupleTypeNode | PrimaryTypeNode | ParenthesizedTypeNode | UnaryTypeNode | ObjectTypeNode | ArrayTypeNode | PropertyIdentifierNode, optional?: boolean, text?: string): TypeNode;
export interface TypeNode {
    intersect?: IntersectTypeNode;
    union?: UnionTypeNode;
    lambda?: LambdaTypeNode;
    tuple?: TupleTypeNode;
    primary?: PrimaryTypeNode;
    parenthesized?: ParenthesizedTypeNode;
    unary?: UnaryTypeNode;
    object?: ObjectTypeNode;
    array?: ArrayTypeNode;
    property?: PropertyIdentifierNode;
    optional: boolean;
    text?: string;
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
export declare function createIntersectTypeNode(left: TypeNode, right: TypeNode, text?: string): IntersectTypeNode;
export interface IntersectTypeNode {
    intersect: {
        left: TypeNode;
        right: TypeNode;
        text?: string;
    };
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
export declare function createUnionTypeNode(left: TypeNode, right: TypeNode, text?: string): UnionTypeNode;
export interface UnionTypeNode {
    union: {
        left: TypeNode;
        right: TypeNode;
        text?: string;
    };
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
export declare function createLambdaTypeNode(parameters: FormalParameterSequenceNode | undefined[], type: TypeNode, text?: string): LambdaTypeNode;
export interface LambdaTypeNode {
    lambda: {
        parameters: FormalParameterSequenceNode | undefined[];
        type: TypeNode;
        text?: string;
    };
}
export declare function createFormalParemeterSequenceNode(parameters: ParameterNode[] | undefined[], text?: string): FormalParameterSequenceNode;
export interface FormalParameterSequenceNode {
    parameters: ParameterNode[] | undefined[];
    text?: string;
}
export declare function createParameterNode(identifier: IdentifierNode, type?: TypeNode, text?: string): ParameterNode;
export interface ParameterNode {
    identifier: IdentifierNode;
    type?: TypeNode;
    text?: string;
}
export declare function createTupleTypeNode(identifier: IdentifierNode, types: TypeNode[] | undefined[], text?: string): TupleTypeNode;
export interface TupleTypeNode {
    identifier?: IdentifierNode;
    types: TypeNode[] | undefined[];
    text?: string;
}
export declare function createPrimaryTypeNode(primary: OptionalIdentifierNode | (IdentifierNode | KeywordNode), text?: string): PrimaryTypeNode;
export interface PrimaryTypeNode {
    primary: OptionalIdentifierNode | (IdentifierNode | KeywordNode);
    text?: string;
}
export declare function createKeywordNode(text: string | "null" | "undefined"): KeywordNode;
export interface KeywordNode {
    keyword: {
        text?: string;
    };
}
export declare function createParenthesizedTypeNode(type: TypeNode, optional?: boolean, text?: string): ParenthesizedTypeNode;
export interface ParenthesizedTypeNode {
    parenthesized: {
        type: TypeNode;
        text?: string;
    };
}
export declare function createUnaryTypeNode(operator: string | "&" | "*", right: PrimaryTypeNode, text?: string): UnaryTypeNode;
export interface UnaryTypeNode {
    unary: {
        operator: string | "&" | "*";
        right: PrimaryTypeNode;
        text?: string;
    };
}
export declare function createObjectTypeNode(object?: ObjectPairTypeNode[] | undefined[], text?: string): ObjectTypeNode;
export interface ObjectTypeNode {
    object: ObjectPairTypeNode[] | undefined[];
    text?: string;
}
export declare function createObjectPairTypeNode(key: TypeNode, value: TypeNode, text?: string): ObjectPairTypeNode;
export interface ObjectPairTypeNode {
    key: TypeNode;
    value: TypeNode;
    text?: string;
}
export declare function createArrayTypeNode(type: TypeNode, types: TypeNode[] | undefined[], text?: string): ArrayTypeNode;
export interface ArrayTypeNode {
    array: {
        type?: TypeNode;
        types?: TypeNode[] | undefined[];
        text?: string;
    };
}
export declare function createPropertyIdentifierNode(property: IdentifierNode[] | undefined[], text: string): PropertyIdentifierNode;
export interface PropertyIdentifierNode extends IdentifierNode {
}
export declare function createExpressionNode(expression: UnaryExpressionNode | BinaryExpressionNode | ArrayExpressionNode | ObjectExpressionNode | LambdaExpressionNode | LiteralExpressionNode | ParenthesizedExpressionNode, text?: string): ExpressionNode;
export interface ExpressionNode {
    expression: UnaryExpressionNode | BinaryExpressionNode | ArrayExpressionNode | ObjectExpressionNode | LambdaExpressionNode | LiteralExpressionNode | ParenthesizedExpressionNode;
    text?: string;
}
export declare function createUnaryExpressionNode(operator: string | '+' | '-', right: ExpressionNode, text?: string): UnaryExpressionNode;
export interface UnaryExpressionNode {
    unary: {
        operator: string | '+' | '-';
        right: ExpressionNode;
        text?: string;
    };
}
export declare function createBinaryExpressionNode(operator: string | '+' | '-', left: ExpressionNode, right: ExpressionNode, text?: string): BinaryExpressionNode;
export interface BinaryExpressionNode {
    binary: {
        left: ExpressionNode;
        right: ExpressionNode;
        operator: string | '+' | '-' | '*' | '/';
        text?: string;
    };
}
export declare function createArrayExpressionNode(array?: ExpressionNode[], text?: string): ArrayExpressionNode;
export interface ArrayExpressionNode {
    array: ExpressionNode[];
    text?: string;
}
export declare function createObjectExpressionNode(object?: ObjectPairExpressionNode[], text?: string): ObjectExpressionNode;
export interface ObjectExpressionNode {
    object: ObjectPairExpressionNode[];
    text?: string;
}
export declare function createObjectPairExpressionNode(key: LiteralExpressionNode, value: ObjectExpressionNode | LiteralExpressionNode, text?: string): ObjectPairExpressionNode;
export interface ObjectPairExpressionNode {
    key: LiteralExpressionNode;
    value: ObjectExpressionNode | LiteralExpressionNode;
    text?: string;
}
export declare function createLambdaExpressionNode(parameters: FormalParameterSequenceNode | undefined[], type: TypeNode, text?: string): LambdaExpressionNode;
export interface LambdaExpressionNode extends LambdaTypeNode {
}
export declare function createParenthesizedExpressioneNode(expression: ExpressionNode, optional?: boolean, text?: string): ParenthesizedExpressionNode;
export interface ParenthesizedExpressionNode {
    parenthesized: {
        expression: ExpressionNode;
        optional: boolean;
        text?: string;
    };
}
export declare function createLiteralExpressionNode(type: string, text: string): LiteralExpressionNode;
export interface LiteralExpressionNode {
    literal: {
        type: string;
        text?: string;
    };
}
export declare function createDescriptionNode(text: string, inlines?: InlineTagNode[]): DescriptionNode;
export interface DescriptionNode {
    description: {
        text: string;
        inlines?: InlineTagNode[];
    };
}
export declare function createInlineTagNode(identifier: IdentifierNode, body: string, text?: string): InlineTagNode;
export interface InlineTagNode {
    identifier: IdentifierNode;
    body: string;
    text?: string;
}
