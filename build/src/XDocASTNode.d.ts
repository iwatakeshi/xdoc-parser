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
export declare function createDocumentationNode(body: Partial<BodyNode>, text?: string): Partial<DocumentationNode>;
export interface DocumentationNode {
    documentation: {
        body?: Partial<BodyNode>;
        text?: string;
    };
}
/**
 * Creates a Body node.
 */
export declare function createBodyNode(annotations: Partial<AnnotationsNode>, text?: string): Partial<BodyNode>;
export interface BodyNode {
    annotations: Partial<AnnotationsNode>;
    text?: string;
}
export declare type AnnotationsNode = Partial<TagNode>[] | undefined[];
export declare function createTagNode(name: Partial<TagNameNode>, identifier: Partial<TagIdentifierNode> | Partial<IdentifierNode>, type: Partial<TypeNode>, expression: Partial<ExpressionNode>, description: Partial<DescriptionNode>, text?: string): TagNode;
export interface TagNode {
    name?: Partial<TagNameNode>;
    identifier?: Partial<TagIdentifierNode>;
    type?: Partial<TypeNode>;
    expression?: Partial<ExpressionNode>;
    description?: Partial<DescriptionNode>;
    text?: string;
}
export declare function createTagNameNode(name: Partial<IdentifierNode>, text?: string): Partial<TagNameNode>;
export interface TagNameNode {
    name: Partial<IdentifierNode>;
    text?: string;
}
export declare function createTagIdentifierNode(identifier: Partial<IdentifierNode> | Partial<OptionalIdentifierNode> | undefined, property?: Partial<PropertyTagIdentifierNode> | undefined, text?: string): Partial<TagIdentifierNode>;
export interface TagIdentifierNode {
    identifier?: IdentifierNode | OptionalTagIdentifierNode;
    property?: PropertyTagIdentifierNode;
    text?: string;
}
export declare function createOptionalTagIdentifierNode(identifier: Partial<OptionalTagIdentifierNode>): Partial<OptionalIdentifierNode>;
export declare type OptionalTagIdentifierNode = OptionalIdentifierNode;
export declare function createPropertyTagIdentifierNode(property: Partial<(IdentifierNode | OptionalTagIdentifierNode)>[] | undefined[], text?: string): Partial<PropertyTagIdentifierNode>;
export interface PropertyTagIdentifierNode {
    property: (IdentifierNode | OptionalTagIdentifierNode)[] | undefined[];
    text?: string;
}
export declare function createIdentifierNode(text: string, optional?: boolean, property?: Partial<IdentifierNode>[] | undefined[]): Partial<IdentifierNode>;
export interface IdentifierNode {
    identifier: {
        optional?: boolean;
        property?: IdentifierNode[] | undefined[];
        text?: string;
    };
}
export declare function createOptionalIdentifierNode(optional: boolean, property: IdentifierNode[] | undefined[], text?: string): Partial<OptionalIdentifierNode>;
export declare type OptionalIdentifierNode = IdentifierNode;
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
export declare function createTypeNode(type: Partial<IntersectTypeNode> | Partial<UnionTypeNode> | Partial<LambdaTypeNode> | Partial<TupleTypeNode> | Partial<PrimaryTypeNode> | Partial<ParenthesizedTypeNode> | Partial<UnaryTypeNode> | Partial<ObjectTypeNode> | Partial<ArrayTypeNode> | Partial<PropertyIdentifierNode>, optional?: boolean, text?: string): Partial<TypeNode>;
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
    optional?: boolean;
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
export declare function createIntersectTypeNode(left: TypeNode, right: TypeNode, text?: string): Partial<IntersectTypeNode>;
export interface IntersectTypeNode {
    intersect: {
        left?: TypeNode;
        right?: TypeNode;
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
export declare function createUnionTypeNode(left: TypeNode, right: TypeNode, text?: string): Partial<UnionTypeNode>;
export interface UnionTypeNode {
    union: {
        left?: TypeNode;
        right?: TypeNode;
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
export declare function createLambdaTypeNode(parameters: Partial<FormalParameterSequenceNode> | undefined[], type: TypeNode, text?: string): Partial<LambdaTypeNode>;
export interface LambdaTypeNode {
    lambda: {
        parameters?: FormalParameterSequenceNode | undefined[];
        type?: TypeNode;
        text?: string;
    };
}
export declare function createFormalParemeterSequenceNode(parameters: Partial<ParameterNode>[] | undefined[], text?: string): FormalParameterSequenceNode;
export interface FormalParameterSequenceNode {
    parameters: Partial<ParameterNode>[] | undefined[];
    text?: string;
}
export declare function createParameterNode(identifier: Partial<IdentifierNode>, type?: Partial<TypeNode>, text?: string): Partial<ParameterNode>;
export interface ParameterNode {
    identifier: Partial<IdentifierNode>;
    type?: Partial<TypeNode>;
    text?: string;
}
export declare function createTupleTypeNode(identifier: Partial<IdentifierNode>, types: Partial<TypeNode>[] | undefined[], text?: string): Partial<TupleTypeNode>;
export interface TupleTypeNode {
    identifier?: Partial<IdentifierNode>;
    types: Partial<TypeNode>[] | undefined[];
    text?: string;
}
export declare function createPrimaryTypeNode(primary: Partial<OptionalIdentifierNode> | Partial<(IdentifierNode | KeywordNode)> | Partial<PropertyIdentifierNode>, text?: string): Partial<PrimaryTypeNode>;
export interface PrimaryTypeNode {
    primary: Partial<OptionalIdentifierNode> | Partial<IdentifierNode> | KeywordNode;
    text?: string;
}
export declare function createKeywordNode(text: string | "null" | "undefined"): KeywordNode;
export interface KeywordNode {
    keyword: {
        text?: string;
    };
}
export declare function createParenthesizedTypeNode(type: Partial<TypeNode>, optional?: boolean, text?: string): Partial<ParenthesizedTypeNode>;
export interface ParenthesizedTypeNode {
    parenthesized: {
        type?: Partial<TypeNode>;
        text?: string;
    };
}
export declare function createUnaryTypeNode(operator: string | "&" | "*", right: Partial<PrimaryTypeNode>, text?: string): Partial<UnaryTypeNode>;
export interface UnaryTypeNode {
    unary: {
        operator?: string | "&" | "*";
        right?: Partial<PrimaryTypeNode>;
        text?: string;
    };
}
export declare function createObjectTypeNode(object?: Partial<ObjectPairTypeNode>[] | undefined[], text?: string): Partial<ObjectTypeNode>;
export interface ObjectTypeNode {
    object: Partial<ObjectPairTypeNode>[] | undefined[];
    text?: string;
}
export declare function createObjectPairTypeNode(key: TypeNode, value: TypeNode, text?: string): Partial<ObjectPairTypeNode>;
export interface ObjectPairTypeNode {
    key: Partial<TypeNode>;
    value: Partial<TypeNode>;
    text?: string;
}
export declare function createArrayTypeNode(type: Partial<TypeNode>, types: Partial<TypeNode>[] | undefined[], text?: string): ArrayTypeNode;
export interface ArrayTypeNode {
    array: {
        type?: Partial<TypeNode>;
        types?: Partial<TypeNode>[] | undefined[];
        text?: string;
    };
}
export declare function createPropertyIdentifierNode(property: Partial<IdentifierNode>[] | undefined[], text: string): Partial<PropertyIdentifierNode>;
export interface PropertyIdentifierNode extends IdentifierNode {
}
export declare function createExpressionNode(expression: Partial<UnaryExpressionNode> | Partial<BinaryExpressionNode> | Partial<ArrayExpressionNode> | Partial<ObjectExpressionNode> | Partial<LambdaExpressionNode> | Partial<LiteralExpressionNode> | Partial<ParenthesizedExpressionNode>, text?: string): Partial<ExpressionNode>;
export interface ExpressionNode {
    expression: UnaryExpressionNode | BinaryExpressionNode | ArrayExpressionNode | ObjectExpressionNode | LambdaExpressionNode | LiteralExpressionNode | ParenthesizedExpressionNode;
    text?: string;
}
export declare function createUnaryExpressionNode(operator: string | '+' | '-', right: Partial<ExpressionNode>, text?: string): Partial<UnaryExpressionNode>;
export interface UnaryExpressionNode {
    unary: {
        operator?: string | '+' | '-';
        right?: Partial<ExpressionNode>;
        text?: string;
    };
}
export declare function createBinaryExpressionNode(operator: string | '+' | '-', left: Partial<ExpressionNode>, right: Partial<ExpressionNode>, text?: string): Partial<BinaryExpressionNode>;
export interface BinaryExpressionNode {
    binary: {
        operator?: string | '+' | '-' | '*' | '/';
        left?: ExpressionNode;
        right?: ExpressionNode;
        text?: string;
    };
}
export declare function createArrayExpressionNode(array?: Partial<ExpressionNode>[], text?: string): Partial<ArrayExpressionNode>;
export interface ArrayExpressionNode {
    array?: Partial<ExpressionNode>[];
    text?: string;
}
export declare function createObjectExpressionNode(object?: Partial<ObjectPairExpressionNode>[], text?: string): Partial<ObjectExpressionNode>;
export interface ObjectExpressionNode {
    object: Partial<ObjectPairExpressionNode>[];
    text?: string;
}
export declare function createObjectPairExpressionNode(key: Partial<LiteralExpressionNode>, value: Partial<ObjectExpressionNode> | Partial<LiteralExpressionNode>, text?: string): Partial<ObjectPairExpressionNode>;
export interface ObjectPairExpressionNode {
    key: Partial<LiteralExpressionNode>;
    value: Partial<ObjectExpressionNode> | Partial<LiteralExpressionNode>;
    text?: string;
}
export declare function createLambdaExpressionNode(parameters: FormalParameterSequenceNode | undefined[], type: TypeNode, text?: string): Partial<LambdaExpressionNode>;
export interface LambdaExpressionNode extends LambdaTypeNode {
}
export declare function createParenthesizedExpressioneNode(expression: Partial<ExpressionNode>, optional?: boolean, text?: string): Partial<ParenthesizedExpressionNode>;
export interface ParenthesizedExpressionNode {
    parenthesized: {
        expression?: ExpressionNode;
        optional?: boolean;
        text?: string;
    };
}
export declare function createLiteralExpressionNode(type: string, text: string): Partial<LiteralExpressionNode>;
export interface LiteralExpressionNode {
    literal: {
        type?: string;
        text?: string;
    };
}
export declare function createDescriptionNode(text: string, inlines?: Partial<InlineTagNode>[]): Partial<DescriptionNode>;
export interface DescriptionNode {
    description: {
        text?: string;
        inlines?: Partial<InlineTagNode>[];
    };
}
export declare function createInlineTagNode(identifier: Partial<IdentifierNode>, body: string, text?: string): Partial<InlineTagNode>;
export interface InlineTagNode {
    identifier: Partial<IdentifierNode>;
    body?: string;
    text?: string;
}
