"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const Lexer = require("./src/XDocLexer");
const Parser = require("./src/XDocParser");
const _ = require("lodash");
class XDoc {
    constructor(source) {
        this.parser = new Parser.XDocParser(new antlr4ts_1.CommonTokenStream(new Lexer.XDocLexer(new antlr4ts_1.ANTLRInputStream(source))));
    }
    parse() {
        return this.parser.documentation();
    }
    static toJSON(ast) {
        return parseDocumentation(ast);
    }
}
exports.XDoc = XDoc;
exports.default = (source) => {
    // Get the input stream
    return new XDoc(source).parse();
};
/*! Documentation */
/*
  Parses the Documentation production.
  
  # API
  ```
  @function parseDocumentation
  @param node: Parser.DocumentationContext - The documentation context node.
  @return Parser.BodyContext[] - The body context nodes.
  ```
  # Remark
  Documentation is the root node.
  A documentation node has a body as its child.
 */
function parseDocumentation(node) {
    if (node.body()) {
        return parseBody(node.body());
    }
}
/*
  Parses the Body production.
  
  # API
  ```
  @function parseBody
  @param node: Parser.BodyContext - The body context node.
  @return Parser.Annotations[] - The body context nodes.
  ```
  # Remark
  A body node has an array of annotation nodes.
 */
function parseBody(node) {
    if (node.annotations()) {
        return parseAnnotations(node.annotations());
    }
}
/*
  Parses the Annotations production.
  
  # API
  ```
  @function parseAnnotations
  @param node: Parser.AnnotationsContext - The annotation context node.
  @return Parser.TagContext[] - The tag context nodes.
  ```
  # Remark
  An annotation node has an array of tag nodes.
 */
function parseAnnotations(node) {
    return node.tag()
        .map(parseTag)
        .filter(x => x !== undefined);
}
/*
  Parses the Tag production.
  
  # API
  ```
  @function parseTag
  @param node: Parser.TagContext - The annotation context node.
  @return: {
    name?: string,
    id?: {},
    value?: {},
    type?: {},
    description?: {}
  } | undefined - The tag object or undefined if no leaf exists.
  ```
  # Remark
  A TagContext node may have a tag name, tag id, value, type, and description.
 */
function parseTag(node) {
    let tag = {};
    if (node.tagName()) {
        _.assign(tag, {
            name: node.tagName().identifier().ID().text
        });
    }
    if (node.type()) {
        _.assign(tag, { type: parseType(node.type()) });
    }
    if (node.tagID()) {
        _.assign(tag, { identifier: parseTagID(node.tagID()) });
    }
    if (node.value()) {
        _.assign(tag, { value: parseValue(node.value()) });
    }
    if (node.description()) {
        _.assign(tag, { description: parseDescription(node.description()) });
    }
    return _.isEqual(tag, {}) ? undefined : tag;
}
/*
  Parses the TagID production.
  
  # API
  ```
  @function parseTagID
  @param node: Parser.TagIDContext - The tagID context node.
  @return: {
    id?: {},
    optional: boolean,
    property?: {}
  } - The tagID object or undefined if no leaf exists.
  ```
  # Remark
  A TagId node is an object.
 */
function parseTagID(node) {
    let tag = { id: undefined, optional: false, property: [] };
    if (node.identifier()) {
        tag.id = node.identifier().ID().text;
    }
    if (node.optionalTagID()) {
        tag.id = node.optionalTagID().identifier().ID().text;
        tag.optional = true;
    }
    if (node.propertyTagID()) {
        return parsePropertyTagID(node.propertyTagID());
    }
    return tag;
}
/*
  Parses the PropertyTagID production.
  
  # API
  ```
  @function parsePropertyTagID
  @param node: Parser.PropertyTagIDContext - The annotation context node.
  @return: {
    id: any,
    optional: any,
    property: any
  } - The PropertyTagId object .
  ```
  # Remark
  A propertyTagID is an object with an 'id', 'property', and 'optional' key.
 */
function parsePropertyTagID(node) {
    let tag = {};
    if (node.identifier()) {
        _.assign(tag, { id: node.identifier().ID().text });
    }
    if (node.optionalTagID()) {
        _.assign(tag, { id: node.identifier().ID().text, optional: true });
    }
    if (node.optionalTagOrIdentifier()) {
        let property = node.optionalTagOrIdentifier()
            .map(parseOptionalTagOrIdentifier);
        property.unshift({ id: tag.id, optional: tag.optional });
        property = property.filter(p => p.id !== undefined && p !== undefined);
        _.assign(tag, { property });
    }
    return tag;
}
/*
  Parses the OptionalOrIdentifier production.
  
  # API
  ```
  @function parseOptionalTagOrIdentifier
  @param node: Parser.OptionalTagOrIdentifierContext - The OptionalTagOrIdentifier context node.
  @return: {
    id?: string,
    optional?: boolean
  } - The OptionalTagOrIdentifierContext object.
  ```
  # Remark
  An OptionalTagOrIdentifer is an object with an 'id' and 'optional' key.
  
 */
function parseOptionalTagOrIdentifier(node) {
    let id, optional = false;
    if (node.identifier()) {
        id = node.identifier().ID().text;
    }
    if (node.optionalTagID()) {
        id = node.optionalTagID().identifier().ID().text;
        optional = true;
    }
    return { id, optional };
}
/*! Type */
/*
  Parses the Type production.
  # API
  ```
  @function parseType
  @param node: Parse.TypeContext - The Type context node.
  @return: {
    intersect?: {},
    union?: {},
    lambda?: {},
    tuple?: {},
    primary?: {}
  } - The type object.
  # Remark
  A type is an object with 'intersection', 'union', 'lambda', 'tuple', or primary.
  ```
*/
function parseType(node) {
    if (node.PIPE()) { // Intersections
        return {
            intersect: { left: parseType(node.type(0)), right: parseType(node.type(1)) }
        };
    }
    if (node.AMP()) { // Unions
        return {
            union: { left: parseType(node.type(0)), right: parseType(node.type(1)) }
        };
    }
    if (node.lambdaType()) { // Lambda functions i.e. (id) => type
        return {
            lambda: parseLambdaType(node.lambdaType())
        };
    }
    if (node.tupleType()) { // id<type, type>
        return { tuple: parseTuple(node.tupleType()) };
    }
    if (node.primaryType()) { // Primary
        return { primary: parsePrimaryType(node.primaryType()) };
    }
    if (node.parenthesizedType()) { // (expression)
        return {
            parenthesized: parseParenthesizedType(node.parenthesizedType())
        };
    }
    if (node.unaryType()) {
        return {
            unary: parseUnaryType(node.unaryType())
        };
    }
    if (node.objectType()) { // { ... }
        return {
            object: parseObjectType(node.objectType())
        };
    }
    if (node.arrayType()) { // [ ... ]
        return {
            array: parseArrayType(node.arrayType())
        };
    }
    if (node.propertyType()) {
        return {
            property: parsePropertyType(node.propertyType())
        };
    }
}
/*! Lambda */
function parseLambdaType(node) {
    let obj = { parameter: [] };
    if (node.formalParameterSequence()) {
        _.assign(obj, { parameter: parseLambdaFormalParameterSequence(node.formalParameterSequence()) });
    }
    else if (node.parameter()) {
        _.assign(obj, { parameter: [parseParameter(node.parameter())] });
    }
    if (node.type()) {
        _.assign(obj, { type: parseType(node.type()) });
    }
    return obj;
}
function parseLambdaFormalParameterSequence(node) {
    return parseParameters(node.parameter());
}
function parseParameters(nodes) {
    return nodes.map(node => {
        return parseParameter(node);
    });
}
function parseParameter(node) {
    let id = node.identifier().ID().text;
    if (node.type()) {
        return {
            id,
            type: parseType(node.type())
        };
    }
    return { id };
}
function parseTuple(node) {
    let type = {};
    if (node.identifier()) {
        _.assign(type, { id: node.identifier().ID().text });
    }
    if (node.tupleTypeList()) {
        _.assign(type, { types: parseTupleTypeList(node.tupleTypeList()) });
    }
    return type;
}
function parseTupleTypeList(node) {
    return node.type() ? node.type().map(type => parseType(type)) : [];
}
function parsePrimaryType(node) {
    if (node.optionalType()) {
        return { id: node.optionalType().identifier().ID().text, optional: true };
    }
    if (node.identifierOrKeyword()) {
        return { id: parseIdentifierOrKeyword(node.identifierOrKeyword()), optional: false };
    }
}
function parseParenthesizedType(node) {
    if (node.type()) {
        return parseType(node.type());
    }
}
function parseObjectType(node) {
    return node.objectPairTypeList() ? parseObjectPairTypeList(node.objectPairTypeList()) : [];
}
function parseObjectPairTypeList(node) {
    return (node.objectPairType() || []).map(pair => {
        return {
            key: parseType(pair.type(0)),
            value: parseType(pair.type(1))
        };
    });
}
function parseArrayType(node) {
    if (node.type()) {
        return {
            type: node.type().map(type => parseType(type))
        };
    }
    if (node.identifier()) {
        return {
            identifer: node.identifier().ID().text + '[]'
        };
    }
}
/*
  Parses the PropertyTagID production.
  
  # API
  ```
  @function parsePropertyTagID
  @param node: Parser.PropertyTagIDContext - The annotation context node.
  @return {
    id: any,
    optional: any,
    property: any
  } - The PropertyTagId object .
  ```
  # Remark
  A propertyTagID is an object with an 'id', 'property', and 'optional' keys.
 */
function parsePropertyType(node) {
    let tag = {};
    if (node.identifier()) {
        _.assign(tag, { id: node.identifier().ID().text });
    }
    if (node.optionalType()) {
        _.assign(tag, { id: node.identifier().ID().text });
        _.assign(tag, { optional: true });
    }
    if (node.optionalTypeOrIdentifer()) {
        _.assign(tag, {
            property: node.optionalTypeOrIdentifer()
                .map(parseOptionalTypeOrIdentifer)
        });
        tag.property.unshift({ id: tag.id, optional: tag.optional });
        tag.property = tag.property.filter(x => x.id !== undefined && x !== undefined);
        tag.id = tag.optional = undefined;
    }
    return tag;
}
/*
  Parses the parseOptionalTypeOrIdentifer production.
  
  # API
  ```
  @function OptionalTypeOrIdentiferContext
  @param node: Parser.OptionalTypeOrIdentiferContext - The OptionalTypeOrIdentifer context node.
  @return {
    id?: string,
    optional?: boolean
  } - The OptionalTypeOrIdentiferContext object.
  ```
  # Remark
  An propertyType is an object with an 'id', 'property', and 'optional' keys.
  
 */
function parseOptionalTypeOrIdentifer(node) {
    let id, optional = false;
    if (node.identifier()) {
        id = node.identifier().ID().text;
    }
    if (node.optionalType()) {
        id = node.optionalType().identifier().ID().text;
        optional = true;
    }
    return { id, optional };
}
function parseIdentifierOrKeyword(node) {
    if (node.identifier()) {
        return node.identifier().ID().text;
    }
    if (node.NullLiteral()) {
        return node.NullLiteral().text;
    }
}
function parseUnaryType(node) {
    return {
        left: (node.AMP() || node.STAR()).text,
        right: { primary: parsePrimaryType(node.primaryType()) }
    };
}
/*! Value */
/*
  Parses the Value production.
  # API
  ```
  @function parseValue
  @param node: Parser.ValueContext
  @return Parser.ValueContext - See {@link #parseExpression(node: Parser.ExpressionContext) }.
  ```
  # Remark
  A value is an expression.
*/
function parseValue(node) {
    if (node.expression()) {
        return parseExpression(node.expression());
    }
}
/*! Expression */
/*
  Parses the Expression production.
  # API
  
  ```
  @function parseExpression
  @param node: Parser.ExpressionContext
  @return {
    unary?: {},
    binary?: {},
    array?: {},
    object?: {},
    literal?: {},
    parenthesized?: {}
  }
  ```
*/
function parseExpression(node) {
    if (node.unaryExpression()) {
        return { unary: parseUnaryExpression(node.unaryExpression()) };
    }
    if (node.expression()) {
        if (node.PLUS() || node.MINUS()) {
            return { binary: parseAdditionExpression(node) };
        }
        if (node.STAR() || node.FORWARD_SLASH()) {
            return { binary: parseMultiplicationExpression(node) };
        }
    }
    if (node.arrayExpression()) {
        return { array: parseArrayExpression(node.arrayExpression()) };
    }
    if (node.objectExpression()) {
        return { object: parseObjectExpression(node.objectExpression()) };
    }
    if (node.lambdaExpression()) {
        return { lambda: parseLambdaExpression(node.lambdaExpression()) };
    }
    if (node.literal()) {
        return { literal: parseLiteralExpression(node.literal()) };
    }
    if (node.parenthesizedExpression()) {
        return { parenthesized: parseParenthesizedExpression(node.parenthesizedExpression()) };
    }
    return {};
}
/*
  
*/
function parseUnaryExpression(node) {
    return {
        left: (node.PLUS() || node.MINUS()).text,
        right: parseExpression(node.expression())
    };
}
function parseAdditionExpression(node) {
    if (node.PLUS()) {
        return {
            plus: {
                left: parseExpression(node.expression(0)),
                right: parseExpression(node.expression(1))
            }
        };
    }
    if (node.MINUS()) {
        return {
            minus: {
                left: parseExpression(node.expression(0)),
                right: parseExpression(node.expression(1))
            }
        };
    }
}
function parseMultiplicationExpression(node) {
    if (node.STAR()) {
        return {
            times: {
                left: parseExpression(node.expression(0)),
                right: parseExpression(node.expression(1))
            }
        };
    }
    if (node.FORWARD_SLASH()) {
        return {
            divide: {
                left: parseExpression(node.expression(0)),
                right: parseExpression(node.expression(1))
            }
        };
    }
}
function parseArrayExpression(node) {
    if (node.expression()) {
        return node.expression().map(expression => {
            return parseExpression(expression);
        });
    }
    return [];
}
function parseObjectExpression(node) {
    return node.objectPairExpressionList() ? parseObjectPairExpressionList(node.objectPairExpressionList()) : [];
}
function parseObjectPairExpressionList(node) {
    return node.objectPairExpression().map(pair => {
        return {
            key: parseLiteralExpression(pair.literal(0)),
            value: pair.objectExpression() ?
                parseObjectExpression(pair.objectExpression()) :
                parseLiteralExpression(pair.literal(1))
        };
    });
}
function parseLambdaExpression(node) {
    let result = parseLambdaType(node);
    _.assign(result.type, { optional: !!node.QUESTION() });
    return result;
}
function parseParenthesizedExpression(node) {
    return parseExpression(node.expression());
}
function parseLiteralExpression(node) {
    if (node.IntegerLiteral() || node.FloatingPointLiteral()) {
        return { number: (node.IntegerLiteral() || node.FloatingPointLiteral()).text };
    }
    if (node.BooleanLiteral()) {
        return { boolean: node.BooleanLiteral().text };
    }
    if (node.CharacterLiteral()) {
        return { character: node.CharacterLiteral().text };
    }
    if (node.StringLiteral()) {
        return { string: node.StringLiteral().text };
    }
    if (node.StringLiteral()) {
        return { null: node.StringLiteral().text };
    }
}
/*! Description */
function parseDescription(node) {
    return {
        text: node.text,
        inlines: parseDescriptionLine(node.descriptionLine())
    };
}
function parseDescriptionLine(node) {
    return parseDescriptionLineElement(node.descriptionLineElement());
}
function parseDescriptionLineElement(node) {
    return node.map(element => {
        return element.inlineTag() ? parseInlineTag(element.inlineTag()) : undefined;
    }).filter(element => element !== undefined);
}
function parseInlineTag(node) {
    return {
        id: node.inlineTagName().identifier().ID().text,
        body: parseInlineTagBody(node.inlineTagBody())
    };
}
function parseInlineTagBody(node) {
    return node.braceBody().map(body => body.text).join('');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUErRDtBQUMvRCx5Q0FBeUM7QUFDekMsMkNBQTJDO0FBQzNDLDRCQUE0QjtBQUU1QjtJQUVFLFlBQVksTUFBYztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLDRCQUFpQixDQUN2RCxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQ2pCLElBQUksMkJBQWdCLENBQUMsTUFBTSxDQUFDLENBQzdCLENBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELEtBQUs7UUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBZ0M7UUFDNUMsT0FBTyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFoQkQsb0JBZ0JDO0FBR0Qsa0JBQWUsQ0FBQyxNQUFjLEVBQUUsRUFBRTtJQUNoQyx1QkFBdUI7SUFDdkIsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsQyxDQUFDLENBQUE7QUFFRCxvQkFBb0I7QUFFcEI7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsNEJBQTRCLElBQWlDO0lBQzNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2YsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7S0FDL0I7QUFDSCxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxtQkFBbUIsSUFBd0I7SUFDekMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDdEIsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztLQUM3QztBQUNILENBQUM7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QUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBTlRMUklucHV0U3RyZWFtLCBDb21tb25Ub2tlblN0cmVhbSB9IGZyb20gJ2FudGxyNHRzJztcbmltcG9ydCAqIGFzIExleGVyIGZyb20gJy4vc3JjL1hEb2NMZXhlcic7XG5pbXBvcnQgKiBhcyBQYXJzZXIgZnJvbSAnLi9zcmMvWERvY1BhcnNlcic7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBYRG9jIHtcbiAgcHJpdmF0ZSBwYXJzZXI6IFBhcnNlci5YRG9jUGFyc2VyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBuZXcgUGFyc2VyLlhEb2NQYXJzZXIobmV3IENvbW1vblRva2VuU3RyZWFtKFxuICAgICAgbmV3IExleGVyLlhEb2NMZXhlcihcbiAgICAgICAgbmV3IEFOVExSSW5wdXRTdHJlYW0oc291cmNlKVxuICAgICAgKVxuICAgICkpO1xuICB9XG4gIHBhcnNlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlci5kb2N1bWVudGF0aW9uKCk7XG4gIH1cblxuICBzdGF0aWMgdG9KU09OKGFzdDogUGFyc2VyLkRvY3VtZW50YXRpb25Db250ZXh0KSB7XG4gICAgcmV0dXJuIHBhcnNlRG9jdW1lbnRhdGlvbihhc3QpO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgKHNvdXJjZTogc3RyaW5nKSA9PiB7XG4gIC8vIEdldCB0aGUgaW5wdXQgc3RyZWFtXG4gIHJldHVybiBuZXcgWERvYyhzb3VyY2UpLnBhcnNlKCk7XG59XG5cbi8qISBEb2N1bWVudGF0aW9uICovXG5cbi8qXG4gIFBhcnNlcyB0aGUgRG9jdW1lbnRhdGlvbiBwcm9kdWN0aW9uLlxuICBcbiAgIyBBUElcbiAgYGBgXG4gIEBmdW5jdGlvbiBwYXJzZURvY3VtZW50YXRpb25cbiAgQHBhcmFtIG5vZGU6IFBhcnNlci5Eb2N1bWVudGF0aW9uQ29udGV4dCAtIFRoZSBkb2N1bWVudGF0aW9uIGNvbnRleHQgbm9kZS5cbiAgQHJldHVybiBQYXJzZXIuQm9keUNvbnRleHRbXSAtIFRoZSBib2R5IGNvbnRleHQgbm9kZXMuXG4gIGBgYFxuICAjIFJlbWFya1xuICBEb2N1bWVudGF0aW9uIGlzIHRoZSByb290IG5vZGUuIFxuICBBIGRvY3VtZW50YXRpb24gbm9kZSBoYXMgYSBib2R5IGFzIGl0cyBjaGlsZC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VEb2N1bWVudGF0aW9uKG5vZGU6IFBhcnNlci5Eb2N1bWVudGF0aW9uQ29udGV4dCkge1xuICBpZiAobm9kZS5ib2R5KCkpIHtcbiAgICByZXR1cm4gcGFyc2VCb2R5KG5vZGUuYm9keSgpKTtcbiAgfVxufVxuXG4vKlxuICBQYXJzZXMgdGhlIEJvZHkgcHJvZHVjdGlvbi5cbiAgXG4gICMgQVBJXG4gIGBgYFxuICBAZnVuY3Rpb24gcGFyc2VCb2R5XG4gIEBwYXJhbSBub2RlOiBQYXJzZXIuQm9keUNvbnRleHQgLSBUaGUgYm9keSBjb250ZXh0IG5vZGUuXG4gIEByZXR1cm4gUGFyc2VyLkFubm90YXRpb25zW10gLSBUaGUgYm9keSBjb250ZXh0IG5vZGVzLlxuICBgYGBcbiAgIyBSZW1hcmtcbiAgQSBib2R5IG5vZGUgaGFzIGFuIGFycmF5IG9mIGFubm90YXRpb24gbm9kZXMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlQm9keShub2RlOiBQYXJzZXIuQm9keUNvbnRleHQpIHtcbiAgaWYgKG5vZGUuYW5ub3RhdGlvbnMoKSkge1xuICAgIHJldHVybiBwYXJzZUFubm90YXRpb25zKG5vZGUuYW5ub3RhdGlvbnMoKSk7XG4gIH1cbn1cblxuLypcbiAgUGFyc2VzIHRoZSBBbm5vdGF0aW9ucyBwcm9kdWN0aW9uLlxuICBcbiAgIyBBUElcbiAgYGBgXG4gIEBmdW5jdGlvbiBwYXJzZUFubm90YXRpb25zXG4gIEBwYXJhbSBub2RlOiBQYXJzZXIuQW5ub3RhdGlvbnNDb250ZXh0IC0gVGhlIGFubm90YXRpb24gY29udGV4dCBub2RlLlxuICBAcmV0dXJuIFBhcnNlci5UYWdDb250ZXh0W10gLSBUaGUgdGFnIGNvbnRleHQgbm9kZXMuXG4gIGBgYFxuICAjIFJlbWFya1xuICBBbiBhbm5vdGF0aW9uIG5vZGUgaGFzIGFuIGFycmF5IG9mIHRhZyBub2Rlcy5cbiAqL1xuZnVuY3Rpb24gcGFyc2VBbm5vdGF0aW9ucyhub2RlOiBQYXJzZXIuQW5ub3RhdGlvbnNDb250ZXh0KSB7XG4gIHJldHVybiBub2RlLnRhZygpXG4gICAgLm1hcChwYXJzZVRhZylcbiAgICAuZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkKTtcbn1cblxuLypcbiAgUGFyc2VzIHRoZSBUYWcgcHJvZHVjdGlvbi5cbiAgXG4gICMgQVBJXG4gIGBgYFxuICBAZnVuY3Rpb24gcGFyc2VUYWdcbiAgQHBhcmFtIG5vZGU6IFBhcnNlci5UYWdDb250ZXh0IC0gVGhlIGFubm90YXRpb24gY29udGV4dCBub2RlLlxuICBAcmV0dXJuOiB7IFxuICAgIG5hbWU/OiBzdHJpbmcsIFxuICAgIGlkPzoge30sIFxuICAgIHZhbHVlPzoge30sIFxuICAgIHR5cGU/OiB7fSwgXG4gICAgZGVzY3JpcHRpb24/OiB7fSBcbiAgfSB8IHVuZGVmaW5lZCAtIFRoZSB0YWcgb2JqZWN0IG9yIHVuZGVmaW5lZCBpZiBubyBsZWFmIGV4aXN0cy5cbiAgYGBgXG4gICMgUmVtYXJrXG4gIEEgVGFnQ29udGV4dCBub2RlIG1heSBoYXZlIGEgdGFnIG5hbWUsIHRhZyBpZCwgdmFsdWUsIHR5cGUsIGFuZCBkZXNjcmlwdGlvbi5cbiAqL1xuZnVuY3Rpb24gcGFyc2VUYWcobm9kZTogUGFyc2VyLlRhZ0NvbnRleHQpIHtcbiAgbGV0IHRhZyA9IHt9O1xuXG4gIGlmIChub2RlLnRhZ05hbWUoKSkge1xuICAgIF8uYXNzaWduKHRhZywge1xuICAgICAgbmFtZTogbm9kZS50YWdOYW1lKCkuaWRlbnRpZmllcigpLklEKCkudGV4dFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG5vZGUudHlwZSgpKSB7XG4gICAgXy5hc3NpZ24odGFnLCB7IHR5cGU6IHBhcnNlVHlwZShub2RlLnR5cGUoKSkgfSk7XG4gIH1cblxuICBpZiAobm9kZS50YWdJRCgpKSB7XG4gICAgXy5hc3NpZ24odGFnLCB7IGlkZW50aWZpZXI6IHBhcnNlVGFnSUQobm9kZS50YWdJRCgpKSB9KVxuICB9XG5cbiAgaWYgKG5vZGUudmFsdWUoKSkge1xuICAgIF8uYXNzaWduKHRhZywgeyB2YWx1ZTogcGFyc2VWYWx1ZShub2RlLnZhbHVlKCkpIH0pXG4gIH1cblxuICBpZiAobm9kZS5kZXNjcmlwdGlvbigpKSB7XG4gICAgXy5hc3NpZ24odGFnLCB7IGRlc2NyaXB0aW9uOiBwYXJzZURlc2NyaXB0aW9uKG5vZGUuZGVzY3JpcHRpb24oKSkgfSk7XG4gIH1cblxuICByZXR1cm4gXy5pc0VxdWFsKHRhZywge30pID8gdW5kZWZpbmVkIDogdGFnO1xufVxuXG4vKlxuICBQYXJzZXMgdGhlIFRhZ0lEIHByb2R1Y3Rpb24uXG4gIFxuICAjIEFQSVxuICBgYGBcbiAgQGZ1bmN0aW9uIHBhcnNlVGFnSURcbiAgQHBhcmFtIG5vZGU6IFBhcnNlci5UYWdJRENvbnRleHQgLSBUaGUgdGFnSUQgY29udGV4dCBub2RlLlxuICBAcmV0dXJuOiB7IFxuICAgIGlkPzoge30sIFxuICAgIG9wdGlvbmFsOiBib29sZWFuLCBcbiAgICBwcm9wZXJ0eT86IHt9IFxuICB9IC0gVGhlIHRhZ0lEIG9iamVjdCBvciB1bmRlZmluZWQgaWYgbm8gbGVhZiBleGlzdHMuXG4gIGBgYFxuICAjIFJlbWFya1xuICBBIFRhZ0lkIG5vZGUgaXMgYW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBwYXJzZVRhZ0lEKG5vZGU6IFBhcnNlci5UYWdJRENvbnRleHQpIHtcbiAgbGV0IHRhZyA9IHsgaWQ6IHVuZGVmaW5lZCwgb3B0aW9uYWw6IGZhbHNlLCBwcm9wZXJ0eTogW10gfTtcblxuICBpZiAobm9kZS5pZGVudGlmaWVyKCkpIHtcbiAgICB0YWcuaWQgPSBub2RlLmlkZW50aWZpZXIoKS5JRCgpLnRleHQ7XG4gIH1cblxuICBpZiAobm9kZS5vcHRpb25hbFRhZ0lEKCkpIHtcbiAgICB0YWcuaWQgPSBub2RlLm9wdGlvbmFsVGFnSUQoKS5pZGVudGlmaWVyKCkuSUQoKS50ZXh0O1xuICAgIHRhZy5vcHRpb25hbCA9IHRydWU7XG4gIH1cblxuICBpZiAobm9kZS5wcm9wZXJ0eVRhZ0lEKCkpIHtcbiAgICByZXR1cm4gcGFyc2VQcm9wZXJ0eVRhZ0lEKG5vZGUucHJvcGVydHlUYWdJRCgpKTtcbiAgfVxuXG4gIHJldHVybiB0YWc7XG59XG5cbi8qXG4gIFBhcnNlcyB0aGUgUHJvcGVydHlUYWdJRCBwcm9kdWN0aW9uLlxuICBcbiAgIyBBUElcbiAgYGBgXG4gIEBmdW5jdGlvbiBwYXJzZVByb3BlcnR5VGFnSURcbiAgQHBhcmFtIG5vZGU6IFBhcnNlci5Qcm9wZXJ0eVRhZ0lEQ29udGV4dCAtIFRoZSBhbm5vdGF0aW9uIGNvbnRleHQgbm9kZS5cbiAgQHJldHVybjoge1xuICAgIGlkOiBhbnksXG4gICAgb3B0aW9uYWw6IGFueSxcbiAgICBwcm9wZXJ0eTogYW55XG4gIH0gLSBUaGUgUHJvcGVydHlUYWdJZCBvYmplY3QgLlxuICBgYGBcbiAgIyBSZW1hcmtcbiAgQSBwcm9wZXJ0eVRhZ0lEIGlzIGFuIG9iamVjdCB3aXRoIGFuICdpZCcsICdwcm9wZXJ0eScsIGFuZCAnb3B0aW9uYWwnIGtleS5cbiAqL1xuZnVuY3Rpb24gcGFyc2VQcm9wZXJ0eVRhZ0lEKG5vZGU6IFBhcnNlci5Qcm9wZXJ0eVRhZ0lEQ29udGV4dCkge1xuICBsZXQgdGFnOiBhbnkgPSB7fTtcblxuICBpZiAobm9kZS5pZGVudGlmaWVyKCkpIHtcbiAgICBfLmFzc2lnbih0YWcsIHsgaWQ6IG5vZGUuaWRlbnRpZmllcigpLklEKCkudGV4dCB9KTtcbiAgfVxuXG4gIGlmIChub2RlLm9wdGlvbmFsVGFnSUQoKSkge1xuICAgIF8uYXNzaWduKHRhZywgeyBpZDogbm9kZS5pZGVudGlmaWVyKCkuSUQoKS50ZXh0LCBvcHRpb25hbDogdHJ1ZSB9KTtcbiAgfVxuXG4gIGlmIChub2RlLm9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKCkpIHtcbiAgICBsZXQgcHJvcGVydHkgPSBub2RlLm9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKClcbiAgICAgIC5tYXAocGFyc2VPcHRpb25hbFRhZ09ySWRlbnRpZmllcik7XG4gICAgcHJvcGVydHkudW5zaGlmdCh7IGlkOiB0YWcuaWQsIG9wdGlvbmFsOiB0YWcub3B0aW9uYWwgfSk7XG4gICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5maWx0ZXIocCA9PiBwLmlkICE9PSB1bmRlZmluZWQgJiYgcCAhPT0gdW5kZWZpbmVkKTtcbiAgICBfLmFzc2lnbih0YWcsIHsgcHJvcGVydHkgfSk7XG4gIH1cbiAgcmV0dXJuIHRhZztcbn1cblxuXG4vKlxuICBQYXJzZXMgdGhlIE9wdGlvbmFsT3JJZGVudGlmaWVyIHByb2R1Y3Rpb24uXG4gIFxuICAjIEFQSVxuICBgYGBcbiAgQGZ1bmN0aW9uIHBhcnNlT3B0aW9uYWxUYWdPcklkZW50aWZpZXJcbiAgQHBhcmFtIG5vZGU6IFBhcnNlci5PcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQgLSBUaGUgT3B0aW9uYWxUYWdPcklkZW50aWZpZXIgY29udGV4dCBub2RlLlxuICBAcmV0dXJuOiB7XG4gICAgaWQ/OiBzdHJpbmcsXG4gICAgb3B0aW9uYWw/OiBib29sZWFuXG4gIH0gLSBUaGUgT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0IG9iamVjdC5cbiAgYGBgXG4gICMgUmVtYXJrXG4gIEFuIE9wdGlvbmFsVGFnT3JJZGVudGlmZXIgaXMgYW4gb2JqZWN0IHdpdGggYW4gJ2lkJyBhbmQgJ29wdGlvbmFsJyBrZXkuXG4gIFxuICovXG5mdW5jdGlvbiBwYXJzZU9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKG5vZGU6IFBhcnNlci5PcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQpIHtcbiAgbGV0IGlkLCBvcHRpb25hbCA9IGZhbHNlO1xuICBpZiAobm9kZS5pZGVudGlmaWVyKCkpIHtcbiAgICBpZCA9IG5vZGUuaWRlbnRpZmllcigpLklEKCkudGV4dDtcbiAgfVxuXG4gIGlmIChub2RlLm9wdGlvbmFsVGFnSUQoKSkge1xuICAgIGlkID0gbm9kZS5vcHRpb25hbFRhZ0lEKCkuaWRlbnRpZmllcigpLklEKCkudGV4dDtcbiAgICBvcHRpb25hbCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHsgaWQsIG9wdGlvbmFsIH07XG59XG5cbi8qISBUeXBlICovXG5cbi8qXG4gIFBhcnNlcyB0aGUgVHlwZSBwcm9kdWN0aW9uLlxuICAjIEFQSVxuICBgYGBcbiAgQGZ1bmN0aW9uIHBhcnNlVHlwZVxuICBAcGFyYW0gbm9kZTogUGFyc2UuVHlwZUNvbnRleHQgLSBUaGUgVHlwZSBjb250ZXh0IG5vZGUuXG4gIEByZXR1cm46IHtcbiAgICBpbnRlcnNlY3Q/OiB7fSxcbiAgICB1bmlvbj86IHt9LFxuICAgIGxhbWJkYT86IHt9LFxuICAgIHR1cGxlPzoge30sXG4gICAgcHJpbWFyeT86IHt9XG4gIH0gLSBUaGUgdHlwZSBvYmplY3QuXG4gICMgUmVtYXJrXG4gIEEgdHlwZSBpcyBhbiBvYmplY3Qgd2l0aCAnaW50ZXJzZWN0aW9uJywgJ3VuaW9uJywgJ2xhbWJkYScsICd0dXBsZScsIG9yIHByaW1hcnkuXG4gIGBgYFxuKi9cbmZ1bmN0aW9uIHBhcnNlVHlwZShub2RlOiBQYXJzZXIuVHlwZUNvbnRleHQpIHtcblxuICBpZiAobm9kZS5QSVBFKCkpIHsgLy8gSW50ZXJzZWN0aW9uc1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlcnNlY3Q6IHsgbGVmdDogcGFyc2VUeXBlKG5vZGUudHlwZSgwKSksIHJpZ2h0OiBwYXJzZVR5cGUobm9kZS50eXBlKDEpKSB9XG4gICAgfTtcbiAgfSBcbiAgXG4gIGlmIChub2RlLkFNUCgpKSB7IC8vIFVuaW9uc1xuICAgIHJldHVybiB7XG4gICAgICB1bmlvbjogeyBsZWZ0OiBwYXJzZVR5cGUobm9kZS50eXBlKDApKSwgcmlnaHQ6IHBhcnNlVHlwZShub2RlLnR5cGUoMSkpIH1cbiAgICB9O1xuICB9XG4gIFxuICBpZiAobm9kZS5sYW1iZGFUeXBlKCkpIHsgLy8gTGFtYmRhIGZ1bmN0aW9ucyBpLmUuIChpZCkgPT4gdHlwZVxuICAgIHJldHVybiB7XG4gICAgICBsYW1iZGE6IHBhcnNlTGFtYmRhVHlwZShub2RlLmxhbWJkYVR5cGUoKSlcbiAgICB9O1xuICB9IFxuICBcbiAgaWYgKG5vZGUudHVwbGVUeXBlKCkpIHsgLy8gaWQ8dHlwZSwgdHlwZT5cbiAgICByZXR1cm4geyB0dXBsZTogcGFyc2VUdXBsZShub2RlLnR1cGxlVHlwZSgpKSB9XG4gIH0gXG4gIFxuICBpZiAobm9kZS5wcmltYXJ5VHlwZSgpKSB7IC8vIFByaW1hcnlcbiAgICByZXR1cm4geyBwcmltYXJ5OiBwYXJzZVByaW1hcnlUeXBlKG5vZGUucHJpbWFyeVR5cGUoKSkgfTtcbiAgfSBcbiAgXG4gIGlmIChub2RlLnBhcmVudGhlc2l6ZWRUeXBlKCkpIHsgLy8gKGV4cHJlc3Npb24pXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudGhlc2l6ZWQ6IHBhcnNlUGFyZW50aGVzaXplZFR5cGUobm9kZS5wYXJlbnRoZXNpemVkVHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGlmIChub2RlLnVuYXJ5VHlwZSgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVuYXJ5OiBwYXJzZVVuYXJ5VHlwZShub2RlLnVuYXJ5VHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGlmIChub2RlLm9iamVjdFR5cGUoKSkgeyAvLyB7IC4uLiB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG9iamVjdDogcGFyc2VPYmplY3RUeXBlKG5vZGUub2JqZWN0VHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGlmIChub2RlLmFycmF5VHlwZSgpKSB7IC8vIFsgLi4uIF1cbiAgICByZXR1cm4ge1xuICAgICAgYXJyYXk6IHBhcnNlQXJyYXlUeXBlKG5vZGUuYXJyYXlUeXBlKCkpXG4gICAgfVxuICB9XG5cbiAgaWYgKG5vZGUucHJvcGVydHlUeXBlKCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcGVydHk6IHBhcnNlUHJvcGVydHlUeXBlKG5vZGUucHJvcGVydHlUeXBlKCkpXG4gICAgfVxuICB9XG59XG5cbi8qISBMYW1iZGEgKi9cblxuZnVuY3Rpb24gcGFyc2VMYW1iZGFUeXBlKG5vZGU6IFBhcnNlci5MYW1iZGFUeXBlQ29udGV4dCkge1xuICBsZXQgb2JqID0geyBwYXJhbWV0ZXI6IFtdIH07XG4gIGlmIChub2RlLmZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKCkpIHtcbiAgICBfLmFzc2lnbihvYmosIHsgcGFyYW1ldGVyOiBwYXJzZUxhbWJkYUZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKG5vZGUuZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UoKSkgfSlcbiAgfSBlbHNlIGlmIChub2RlLnBhcmFtZXRlcigpKSB7XG4gICAgXy5hc3NpZ24ob2JqLCB7IHBhcmFtZXRlcjogW3BhcnNlUGFyYW1ldGVyKG5vZGUucGFyYW1ldGVyKCkpXSB9KVxuICB9XG5cbiAgaWYgKG5vZGUudHlwZSgpKSB7XG4gICAgXy5hc3NpZ24ob2JqLCB7IHR5cGU6IHBhcnNlVHlwZShub2RlLnR5cGUoKSkgfSlcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBwYXJzZUxhbWJkYUZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKG5vZGU6IFBhcnNlci5Gb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQpIHtcbiAgcmV0dXJuIHBhcnNlUGFyYW1ldGVycyhub2RlLnBhcmFtZXRlcigpKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcnMobm9kZXM6IFBhcnNlci5QYXJhbWV0ZXJDb250ZXh0W10pIHtcbiAgcmV0dXJuIG5vZGVzLm1hcChub2RlID0+IHtcbiAgICByZXR1cm4gcGFyc2VQYXJhbWV0ZXIobm9kZSk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKG5vZGU6IFBhcnNlci5QYXJhbWV0ZXJDb250ZXh0KSB7XG4gIGxldCBpZCA9IG5vZGUuaWRlbnRpZmllcigpLklEKCkudGV4dDtcbiAgaWYgKG5vZGUudHlwZSgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgdHlwZTogcGFyc2VUeXBlKG5vZGUudHlwZSgpKVxuICAgIH1cbiAgfVxuICByZXR1cm4geyBpZCB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVR1cGxlKG5vZGU6IFBhcnNlci5UdXBsZVR5cGVDb250ZXh0KSB7XG4gIGxldCB0eXBlID0ge307XG4gIGlmIChub2RlLmlkZW50aWZpZXIoKSkge1xuICAgIF8uYXNzaWduKHR5cGUsIHsgaWQ6IG5vZGUuaWRlbnRpZmllcigpLklEKCkudGV4dCB9KTtcbiAgfVxuXG4gIGlmIChub2RlLnR1cGxlVHlwZUxpc3QoKSkge1xuICAgIF8uYXNzaWduKHR5cGUsIHsgdHlwZXM6IHBhcnNlVHVwbGVUeXBlTGlzdChub2RlLnR1cGxlVHlwZUxpc3QoKSkgfSlcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiBwYXJzZVR1cGxlVHlwZUxpc3Qobm9kZTogUGFyc2VyLlR1cGxlVHlwZUxpc3RDb250ZXh0KSB7XG4gIHJldHVybiBub2RlLnR5cGUoKSA/IG5vZGUudHlwZSgpLm1hcCh0eXBlID0+IHBhcnNlVHlwZSh0eXBlKSkgOiBbXTtcbn1cblxuZnVuY3Rpb24gcGFyc2VQcmltYXJ5VHlwZShub2RlOiBQYXJzZXIuUHJpbWFyeVR5cGVDb250ZXh0KSB7XG5cbiAgaWYgKG5vZGUub3B0aW9uYWxUeXBlKCkpIHtcbiAgICByZXR1cm4geyBpZDogbm9kZS5vcHRpb25hbFR5cGUoKS5pZGVudGlmaWVyKCkuSUQoKS50ZXh0LCBvcHRpb25hbDogdHJ1ZSB9XG4gIH1cblxuICBpZiAobm9kZS5pZGVudGlmaWVyT3JLZXl3b3JkKCkpIHtcbiAgICByZXR1cm4geyBpZDogcGFyc2VJZGVudGlmaWVyT3JLZXl3b3JkKG5vZGUuaWRlbnRpZmllck9yS2V5d29yZCgpKSwgb3B0aW9uYWw6IGZhbHNlIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyZW50aGVzaXplZFR5cGUobm9kZTogUGFyc2VyLlBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCkge1xuICBpZiAobm9kZS50eXBlKCkpIHtcbiAgICByZXR1cm4gcGFyc2VUeXBlKG5vZGUudHlwZSgpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZU9iamVjdFR5cGUobm9kZTogUGFyc2VyLk9iamVjdFR5cGVDb250ZXh0KSB7XG4gIHJldHVybiBub2RlLm9iamVjdFBhaXJUeXBlTGlzdCgpID8gcGFyc2VPYmplY3RQYWlyVHlwZUxpc3Qobm9kZS5vYmplY3RQYWlyVHlwZUxpc3QoKSkgOiBbXVxufVxuXG5mdW5jdGlvbiBwYXJzZU9iamVjdFBhaXJUeXBlTGlzdChub2RlOiBQYXJzZXIuT2JqZWN0UGFpclR5cGVMaXN0Q29udGV4dCkge1xuICByZXR1cm4gKG5vZGUub2JqZWN0UGFpclR5cGUoKSB8fCBbXSkubWFwKHBhaXIgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IHBhcnNlVHlwZShwYWlyLnR5cGUoMCkpLFxuICAgICAgdmFsdWU6IHBhcnNlVHlwZShwYWlyLnR5cGUoMSkpXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VBcnJheVR5cGUobm9kZTogUGFyc2VyLkFycmF5VHlwZUNvbnRleHQpIHtcbiAgaWYgKG5vZGUudHlwZSgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IG5vZGUudHlwZSgpLm1hcCh0eXBlID0+IHBhcnNlVHlwZSh0eXBlKSlcbiAgICB9XG4gIH1cblxuICBpZiAobm9kZS5pZGVudGlmaWVyKCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWRlbnRpZmVyOiBub2RlLmlkZW50aWZpZXIoKS5JRCgpLnRleHQgKyAnW10nXG4gICAgfVxuICB9XG59XG5cbi8qXG4gIFBhcnNlcyB0aGUgUHJvcGVydHlUYWdJRCBwcm9kdWN0aW9uLlxuICBcbiAgIyBBUElcbiAgYGBgXG4gIEBmdW5jdGlvbiBwYXJzZVByb3BlcnR5VGFnSURcbiAgQHBhcmFtIG5vZGU6IFBhcnNlci5Qcm9wZXJ0eVRhZ0lEQ29udGV4dCAtIFRoZSBhbm5vdGF0aW9uIGNvbnRleHQgbm9kZS5cbiAgQHJldHVybiB7XG4gICAgaWQ6IGFueSxcbiAgICBvcHRpb25hbDogYW55LFxuICAgIHByb3BlcnR5OiBhbnlcbiAgfSAtIFRoZSBQcm9wZXJ0eVRhZ0lkIG9iamVjdCAuXG4gIGBgYFxuICAjIFJlbWFya1xuICBBIHByb3BlcnR5VGFnSUQgaXMgYW4gb2JqZWN0IHdpdGggYW4gJ2lkJywgJ3Byb3BlcnR5JywgYW5kICdvcHRpb25hbCcga2V5cy5cbiAqL1xuZnVuY3Rpb24gcGFyc2VQcm9wZXJ0eVR5cGUobm9kZTogUGFyc2VyLlByb3BlcnR5VHlwZUNvbnRleHQpIHtcbiAgbGV0IHRhZzogYW55ID0ge307XG5cbiAgaWYgKG5vZGUuaWRlbnRpZmllcigpKSB7XG4gICAgXy5hc3NpZ24odGFnLCB7IGlkOiBub2RlLmlkZW50aWZpZXIoKS5JRCgpLnRleHQgfSk7XG4gIH1cblxuICBpZiAobm9kZS5vcHRpb25hbFR5cGUoKSkge1xuICAgIF8uYXNzaWduKHRhZywgeyBpZDogbm9kZS5pZGVudGlmaWVyKCkuSUQoKS50ZXh0IH0pO1xuICAgIF8uYXNzaWduKHRhZywgeyBvcHRpb25hbDogdHJ1ZSB9KTtcbiAgfVxuXG4gIGlmIChub2RlLm9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyKCkpIHtcbiAgICBfLmFzc2lnbih0YWcsIHtcbiAgICAgIHByb3BlcnR5OiBub2RlLm9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyKClcbiAgICAgICAgLm1hcChwYXJzZU9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyKVxuICAgIH0pO1xuXG4gICAgdGFnLnByb3BlcnR5LnVuc2hpZnQoeyBpZDogdGFnLmlkLCBvcHRpb25hbDogdGFnLm9wdGlvbmFsIH0pO1xuICAgIHRhZy5wcm9wZXJ0eSA9IHRhZy5wcm9wZXJ0eS5maWx0ZXIoeCA9PiB4LmlkICE9PSB1bmRlZmluZWQgJiYgeCAhPT0gdW5kZWZpbmVkKTtcbiAgICB0YWcuaWQgPSB0YWcub3B0aW9uYWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIHRhZztcbn1cblxuLypcbiAgUGFyc2VzIHRoZSBwYXJzZU9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyIHByb2R1Y3Rpb24uXG4gIFxuICAjIEFQSVxuICBgYGBcbiAgQGZ1bmN0aW9uIE9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyQ29udGV4dFxuICBAcGFyYW0gbm9kZTogUGFyc2VyLk9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyQ29udGV4dCAtIFRoZSBPcHRpb25hbFR5cGVPcklkZW50aWZlciBjb250ZXh0IG5vZGUuXG4gIEByZXR1cm4ge1xuICAgIGlkPzogc3RyaW5nLFxuICAgIG9wdGlvbmFsPzogYm9vbGVhblxuICB9IC0gVGhlIE9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyQ29udGV4dCBvYmplY3QuXG4gIGBgYFxuICAjIFJlbWFya1xuICBBbiBwcm9wZXJ0eVR5cGUgaXMgYW4gb2JqZWN0IHdpdGggYW4gJ2lkJywgJ3Byb3BlcnR5JywgYW5kICdvcHRpb25hbCcga2V5cy5cbiAgXG4gKi9cbmZ1bmN0aW9uIHBhcnNlT3B0aW9uYWxUeXBlT3JJZGVudGlmZXIobm9kZTogUGFyc2VyLk9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyQ29udGV4dCkge1xuICBsZXQgaWQ6IHN0cmluZywgb3B0aW9uYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaWYgKG5vZGUuaWRlbnRpZmllcigpKSB7XG4gICAgaWQgPSBub2RlLmlkZW50aWZpZXIoKS5JRCgpLnRleHQ7XG4gIH1cblxuICBpZiAobm9kZS5vcHRpb25hbFR5cGUoKSkge1xuICAgIGlkID0gbm9kZS5vcHRpb25hbFR5cGUoKS5pZGVudGlmaWVyKCkuSUQoKS50ZXh0O1xuICAgIG9wdGlvbmFsID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4geyBpZCwgb3B0aW9uYWwgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VJZGVudGlmaWVyT3JLZXl3b3JkKG5vZGU6IFBhcnNlci5JZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCkge1xuICBpZiAobm9kZS5pZGVudGlmaWVyKCkpIHtcbiAgICByZXR1cm4gbm9kZS5pZGVudGlmaWVyKCkuSUQoKS50ZXh0O1xuICB9XG5cbiAgaWYgKG5vZGUuTnVsbExpdGVyYWwoKSkge1xuICAgIHJldHVybiBub2RlLk51bGxMaXRlcmFsKCkudGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVVuYXJ5VHlwZShub2RlOiBQYXJzZXIuVW5hcnlUeXBlQ29udGV4dCkge1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IChub2RlLkFNUCgpIHx8IG5vZGUuU1RBUigpKS50ZXh0LFxuICAgIHJpZ2h0OiB7IHByaW1hcnk6IHBhcnNlUHJpbWFyeVR5cGUobm9kZS5wcmltYXJ5VHlwZSgpKX1cbiAgfVxufVxuXG4vKiEgVmFsdWUgKi9cblxuLypcbiAgUGFyc2VzIHRoZSBWYWx1ZSBwcm9kdWN0aW9uLlxuICAjIEFQSVxuICBgYGBcbiAgQGZ1bmN0aW9uIHBhcnNlVmFsdWVcbiAgQHBhcmFtIG5vZGU6IFBhcnNlci5WYWx1ZUNvbnRleHRcbiAgQHJldHVybiBQYXJzZXIuVmFsdWVDb250ZXh0IC0gU2VlIHtAbGluayAjcGFyc2VFeHByZXNzaW9uKG5vZGU6IFBhcnNlci5FeHByZXNzaW9uQ29udGV4dCkgfS5cbiAgYGBgXG4gICMgUmVtYXJrXG4gIEEgdmFsdWUgaXMgYW4gZXhwcmVzc2lvbi5cbiovXG5mdW5jdGlvbiBwYXJzZVZhbHVlKG5vZGU6IFBhcnNlci5WYWx1ZUNvbnRleHQpIHtcbiAgaWYgKG5vZGUuZXhwcmVzc2lvbigpKSB7XG4gICAgcmV0dXJuIHBhcnNlRXhwcmVzc2lvbihub2RlLmV4cHJlc3Npb24oKSk7XG4gIH1cbn1cblxuLyohIEV4cHJlc3Npb24gKi9cblxuLypcbiAgUGFyc2VzIHRoZSBFeHByZXNzaW9uIHByb2R1Y3Rpb24uXG4gICMgQVBJXG4gIFxuICBgYGBcbiAgQGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvblxuICBAcGFyYW0gbm9kZTogUGFyc2VyLkV4cHJlc3Npb25Db250ZXh0XG4gIEByZXR1cm4ge1xuICAgIHVuYXJ5Pzoge30sXG4gICAgYmluYXJ5Pzoge30sXG4gICAgYXJyYXk/OiB7fSxcbiAgICBvYmplY3Q/OiB7fSxcbiAgICBsaXRlcmFsPzoge30sXG4gICAgcGFyZW50aGVzaXplZD86IHt9XG4gIH1cbiAgYGBgXG4qL1xuZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKG5vZGU6IFBhcnNlci5FeHByZXNzaW9uQ29udGV4dCkge1xuICBpZiAobm9kZS51bmFyeUV4cHJlc3Npb24oKSkge1xuICAgIHJldHVybiB7IHVuYXJ5OiBwYXJzZVVuYXJ5RXhwcmVzc2lvbihub2RlLnVuYXJ5RXhwcmVzc2lvbigpKSB9XG4gIH1cblxuICBpZiAobm9kZS5leHByZXNzaW9uKCkpIHtcbiAgICBpZiAobm9kZS5QTFVTKCkgfHwgbm9kZS5NSU5VUygpKSB7XG4gICAgICByZXR1cm4geyBiaW5hcnk6IHBhcnNlQWRkaXRpb25FeHByZXNzaW9uKG5vZGUpIH07XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuU1RBUigpIHx8IG5vZGUuRk9SV0FSRF9TTEFTSCgpKSB7XG4gICAgICByZXR1cm4geyBiaW5hcnk6IHBhcnNlTXVsdGlwbGljYXRpb25FeHByZXNzaW9uKG5vZGUpIH07XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vZGUuYXJyYXlFeHByZXNzaW9uKCkpIHtcbiAgICByZXR1cm4geyBhcnJheTogcGFyc2VBcnJheUV4cHJlc3Npb24obm9kZS5hcnJheUV4cHJlc3Npb24oKSkgfVxuICB9XG5cbiAgaWYgKG5vZGUub2JqZWN0RXhwcmVzc2lvbigpKSB7XG4gICAgcmV0dXJuIHsgb2JqZWN0OiBwYXJzZU9iamVjdEV4cHJlc3Npb24obm9kZS5vYmplY3RFeHByZXNzaW9uKCkpIH1cbiAgfVxuXG4gIGlmIChub2RlLmxhbWJkYUV4cHJlc3Npb24oKSkge1xuICAgIHJldHVybiB7IGxhbWJkYTogcGFyc2VMYW1iZGFFeHByZXNzaW9uKG5vZGUubGFtYmRhRXhwcmVzc2lvbigpKSB9XG4gIH1cblxuICBpZiAobm9kZS5saXRlcmFsKCkpIHtcbiAgICByZXR1cm4geyBsaXRlcmFsOiBwYXJzZUxpdGVyYWxFeHByZXNzaW9uKG5vZGUubGl0ZXJhbCgpKSB9XG4gIH1cblxuICBpZiAobm9kZS5wYXJlbnRoZXNpemVkRXhwcmVzc2lvbigpKSB7XG4gICAgcmV0dXJuIHsgcGFyZW50aGVzaXplZDogcGFyc2VQYXJlbnRoZXNpemVkRXhwcmVzc2lvbihub2RlLnBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKCkpIH1cbiAgfVxuXG4gIHJldHVybiB7fVxufVxuXG4vKlxuICBcbiovXG5mdW5jdGlvbiBwYXJzZVVuYXJ5RXhwcmVzc2lvbihub2RlOiBQYXJzZXIuVW5hcnlFeHByZXNzaW9uQ29udGV4dCkge1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IChub2RlLlBMVVMoKSB8fCBub2RlLk1JTlVTKCkpLnRleHQsXG4gICAgcmlnaHQ6IHBhcnNlRXhwcmVzc2lvbihub2RlLmV4cHJlc3Npb24oKSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VBZGRpdGlvbkV4cHJlc3Npb24obm9kZTogUGFyc2VyLkV4cHJlc3Npb25Db250ZXh0KSB7XG4gIGlmIChub2RlLlBMVVMoKSkge1xuICAgIHJldHVybiB7XG4gICAgICBwbHVzOiB7XG4gICAgICAgIGxlZnQ6IHBhcnNlRXhwcmVzc2lvbihub2RlLmV4cHJlc3Npb24oMCkpLFxuICAgICAgICByaWdodDogcGFyc2VFeHByZXNzaW9uKG5vZGUuZXhwcmVzc2lvbigxKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobm9kZS5NSU5VUygpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbnVzOiB7XG4gICAgICAgIGxlZnQ6IHBhcnNlRXhwcmVzc2lvbihub2RlLmV4cHJlc3Npb24oMCkpLFxuICAgICAgICByaWdodDogcGFyc2VFeHByZXNzaW9uKG5vZGUuZXhwcmVzc2lvbigxKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VNdWx0aXBsaWNhdGlvbkV4cHJlc3Npb24obm9kZTogUGFyc2VyLkV4cHJlc3Npb25Db250ZXh0KSB7XG4gIGlmIChub2RlLlNUQVIoKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0aW1lczoge1xuICAgICAgICBsZWZ0OiBwYXJzZUV4cHJlc3Npb24obm9kZS5leHByZXNzaW9uKDApKSxcbiAgICAgICAgcmlnaHQ6IHBhcnNlRXhwcmVzc2lvbihub2RlLmV4cHJlc3Npb24oMSkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vZGUuRk9SV0FSRF9TTEFTSCgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpdmlkZToge1xuICAgICAgICBsZWZ0OiBwYXJzZUV4cHJlc3Npb24obm9kZS5leHByZXNzaW9uKDApKSxcbiAgICAgICAgcmlnaHQ6IHBhcnNlRXhwcmVzc2lvbihub2RlLmV4cHJlc3Npb24oMSkpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXJyYXlFeHByZXNzaW9uKG5vZGU6IFBhcnNlci5BcnJheUV4cHJlc3Npb25Db250ZXh0KSB7XG4gIGlmIChub2RlLmV4cHJlc3Npb24oKSkge1xuICAgIHJldHVybiBub2RlLmV4cHJlc3Npb24oKS5tYXAoZXhwcmVzc2lvbiA9PiB7XG4gICAgICByZXR1cm4gcGFyc2VFeHByZXNzaW9uKGV4cHJlc3Npb24pXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIFtdXG59XG5cbmZ1bmN0aW9uIHBhcnNlT2JqZWN0RXhwcmVzc2lvbihub2RlOiBQYXJzZXIuT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQpIHtcbiAgcmV0dXJuIG5vZGUub2JqZWN0UGFpckV4cHJlc3Npb25MaXN0KCkgPyBwYXJzZU9iamVjdFBhaXJFeHByZXNzaW9uTGlzdChub2RlLm9iamVjdFBhaXJFeHByZXNzaW9uTGlzdCgpKSA6IFtdO1xufVxuXG5cbmZ1bmN0aW9uIHBhcnNlT2JqZWN0UGFpckV4cHJlc3Npb25MaXN0KG5vZGU6IFBhcnNlci5PYmplY3RQYWlyRXhwcmVzc2lvbkxpc3RDb250ZXh0KSB7XG4gIHJldHVybiBub2RlLm9iamVjdFBhaXJFeHByZXNzaW9uKCkubWFwKHBhaXIgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IHBhcnNlTGl0ZXJhbEV4cHJlc3Npb24ocGFpci5saXRlcmFsKDApKSxcbiAgICAgIHZhbHVlOiBwYWlyLm9iamVjdEV4cHJlc3Npb24oKSA/XG4gICAgICAgIHBhcnNlT2JqZWN0RXhwcmVzc2lvbihwYWlyLm9iamVjdEV4cHJlc3Npb24oKSkgOlxuICAgICAgICBwYXJzZUxpdGVyYWxFeHByZXNzaW9uKHBhaXIubGl0ZXJhbCgxKSlcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZUxhbWJkYUV4cHJlc3Npb24obm9kZTogUGFyc2VyLkxhbWJkYUV4cHJlc3Npb25Db250ZXh0KSB7XG4gIGxldCByZXN1bHQ6IGFueSA9IHBhcnNlTGFtYmRhVHlwZShub2RlKTtcbiAgXy5hc3NpZ24ocmVzdWx0LnR5cGUsIHsgb3B0aW9uYWw6ICEhbm9kZS5RVUVTVElPTigpIH0pXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyZW50aGVzaXplZEV4cHJlc3Npb24obm9kZTogUGFyc2VyLlBhcmVudGhlc2l6ZWRFeHByZXNzaW9uQ29udGV4dCkge1xuICByZXR1cm4gcGFyc2VFeHByZXNzaW9uKG5vZGUuZXhwcmVzc2lvbigpKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBQYXJzZXIuTGl0ZXJhbENvbnRleHQpIHtcbiAgaWYgKG5vZGUuSW50ZWdlckxpdGVyYWwoKSB8fCBub2RlLkZsb2F0aW5nUG9pbnRMaXRlcmFsKCkpIHtcbiAgICByZXR1cm4geyBudW1iZXI6IChub2RlLkludGVnZXJMaXRlcmFsKCkgfHwgbm9kZS5GbG9hdGluZ1BvaW50TGl0ZXJhbCgpKS50ZXh0IH1cbiAgfVxuICBpZiAobm9kZS5Cb29sZWFuTGl0ZXJhbCgpKSB7XG4gICAgcmV0dXJuIHsgYm9vbGVhbjogbm9kZS5Cb29sZWFuTGl0ZXJhbCgpLnRleHQgfVxuICB9XG4gIGlmIChub2RlLkNoYXJhY3RlckxpdGVyYWwoKSkge1xuICAgIHJldHVybiB7IGNoYXJhY3Rlcjogbm9kZS5DaGFyYWN0ZXJMaXRlcmFsKCkudGV4dCB9XG4gIH1cbiAgaWYgKG5vZGUuU3RyaW5nTGl0ZXJhbCgpKSB7XG4gICAgcmV0dXJuIHsgc3RyaW5nOiBub2RlLlN0cmluZ0xpdGVyYWwoKS50ZXh0IH1cbiAgfVxuICBpZiAobm9kZS5TdHJpbmdMaXRlcmFsKCkpIHtcbiAgICByZXR1cm4geyBudWxsOiBub2RlLlN0cmluZ0xpdGVyYWwoKS50ZXh0IH1cbiAgfVxufVxuXG4vKiEgRGVzY3JpcHRpb24gKi9cblxuZnVuY3Rpb24gcGFyc2VEZXNjcmlwdGlvbihub2RlOiBQYXJzZXIuRGVzY3JpcHRpb25Db250ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgdGV4dDogbm9kZS50ZXh0LFxuICAgIGlubGluZXM6IHBhcnNlRGVzY3JpcHRpb25MaW5lKG5vZGUuZGVzY3JpcHRpb25MaW5lKCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEZXNjcmlwdGlvbkxpbmUobm9kZTogUGFyc2VyLkRlc2NyaXB0aW9uTGluZUNvbnRleHQpIHtcbiAgcmV0dXJuIHBhcnNlRGVzY3JpcHRpb25MaW5lRWxlbWVudChub2RlLmRlc2NyaXB0aW9uTGluZUVsZW1lbnQoKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGVzY3JpcHRpb25MaW5lRWxlbWVudChub2RlOiBQYXJzZXIuRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHRbXSkge1xuICByZXR1cm4gbm9kZS5tYXAoZWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIGVsZW1lbnQuaW5saW5lVGFnKCkgPyBwYXJzZUlubGluZVRhZyhlbGVtZW50LmlubGluZVRhZygpKSA6IHVuZGVmaW5lZFxuICB9KS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50ICE9PSB1bmRlZmluZWQpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUlubGluZVRhZyhub2RlOiBQYXJzZXIuSW5saW5lVGFnQ29udGV4dCkge1xuICByZXR1cm4ge1xuICAgIGlkOiBub2RlLmlubGluZVRhZ05hbWUoKS5pZGVudGlmaWVyKCkuSUQoKS50ZXh0LFxuICAgIGJvZHk6IHBhcnNlSW5saW5lVGFnQm9keShub2RlLmlubGluZVRhZ0JvZHkoKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUlubGluZVRhZ0JvZHkobm9kZTogUGFyc2VyLklubGluZVRhZ0JvZHlDb250ZXh0KSB7XG4gIHJldHVybiBub2RlLmJyYWNlQm9keSgpLm1hcChib2R5ID0+IGJvZHkudGV4dCkuam9pbignJyk7XG59Il19