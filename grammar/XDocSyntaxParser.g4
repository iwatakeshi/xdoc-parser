parser grammar XDocSyntaxParser;

options {
    tokenVocab = XDocSyntaxLexer;
}

documentation
	: EOF
	| body NEWLINE? EOF
	;

body
	: whitespace* annotations
	;

whitespace
	: SPACE
	| NEWLINE
	;

annotations
	: tag (NEWLINE tag)*

	;

tag
	: tagName // i.e. @tag
  | tagName SPACE NEWLINE? MINUS SPACE description// i.e. @tag - description
	| tagName SPACE tagIdentifier// i.e. @tag x
	| tagName SPACE tagIdentifier SPACE? EQUAL SPACE? expression // i.e. @tag x = expression
	| tagName SPACE tagIdentifier SPACE NEWLINE? MINUS SPACE description // i.e. @tag x - description
	| tagName SPACE tagIdentifier SPACE EQUAL SPACE? expression SPACE NEWLINE? MINUS SPACE description // i.e. @tag x = expression - description
	| tagName SPACE tagIdentifier SPACE? COLON SPACE? type // i.e. @tag x: type
	| tagName SPACE tagIdentifier SPACE? COLON SPACE? type SPACE? EQUAL SPACE? expression // i.e. @tag x: type = expression
	| tagName SPACE tagIdentifier SPACE? COLON SPACE? type SPACE NEWLINE? MINUS SPACE description // i.e. @tag x: type - description
	| tagName SPACE tagIdentifier SPACE? COLON SPACE? type SPACE? EQUAL SPACE? expression SPACE NEWLINE? MINUS SPACE description // i.e. @tag x: type = expression - description
  | tagName SPACE? COLON SPACE? type // i.e. @tag type (@return {...})
	| tagName SPACE? COLON SPACE? type SPACE NEWLINE? MINUS SPACE description // i.e @tag type - description
	;

/* Tags */
tagName
	: AT identifier
	;

tagIdentifier
  : propertyTagIdentifier
  | optionalTagIdentifier
  | identifier
  ;

propertyTagIdentifier
  : optionalTagIdentifier (PERIOD optionalTagOrIdentifier)+
  | identifier (PERIOD optionalTagOrIdentifier)+
  ;

optionalTagIdentifier
  : optionalIdentifier
  ;

optionalTagOrIdentifier
  : optionalTagIdentifier
  | identifier
  ;

identifier
  : ID
  ;

optionalIdentifier
  : identifier QUESTION
  ;



/* Types */

type
  : type SPACE? NEWLINE? SPACE? (PIPE | AMP) SPACE? NEWLINE? SPACE? type
  | lambdaType
  | tupleType
  | primaryType
  | parenthesizedType
  | unaryType
  | objectType
  | arrayType
  ;

lambdaType
  : PAREN_OPEN SPACE? NEWLINE? SPACE? formalParameterSequence? SPACE? NEWLINE? SPACE? PAREN_CLOSE SPACE? NEWLINE? SPACE? ARROW SPACE? NEWLINE? SPACE? type QUESTION?
  | parameter SPACE? NEWLINE? SPACE? ARROW SPACE? NEWLINE? SPACE? type QUESTION?
  ;

formalParameterSequence
  : parameter (COMMA NEWLINE? SPACE? parameter)*
  ;

parameter
  : identifier (SPACE? COLON SPACE? type)?
  ;

tupleType
  : identifier? LESSTHAN SPACE? tupleTypeSequence SPACE? GREATERTHAN
  ;

tupleTypeSequence
  : primaryType SPACE? (COMMA SPACE? tupleTypeSequence)*
  | primaryType SPACE? EXTENDS SPACE? primaryType SPACE? (COMMA SPACE? tupleTypeSequence)*
  | primaryType SPACE? AMP SPACE? primaryType SPACE? (COMMA SPACE? tupleTypeSequence)*
  | primaryType SPACE? PIPE SPACE? primaryType SPACE? (COMMA SPACE? tupleTypeSequence)*
  ;

primaryType 
  : optionalIdentifier
  | propertyIdentifier
  | identifierOrKeyword
  ;

identifierOrKeyword
  : identifier
  | keyword
  ;

  keyword
  : NullLiteral
  ;



parenthesizedType
  : PAREN_OPEN SPACE? type SPACE? PAREN_CLOSE
  ;

unaryType
  : (AMP | STAR) primaryType
  ;

objectType
  : BRACE_OPEN SPACE? NEWLINE? SPACE? objectPairSequenceType? SPACE? NEWLINE? SPACE? BRACE_CLOSE
  ;

objectPairSequenceType
  : objectPairType SPACE? (COMMA SPACE? NEWLINE? SPACE? objectPairType)*
  ;

objectPairType
  : type QUESTION? SPACE? COLON SPACE? type
  ;

arrayType
  : BRACKET_OPEN NEWLINE? SPACE? NEWLINE? type? (COMMA NEWLINE? SPACE? NEWLINE? type)* NEWLINE? SPACE? NEWLINE? BRACKET_CLOSE
  | notArrayType (BRACKET_OPEN BRACKET_CLOSE)+
  ;

notArrayType
  : notArrayType SPACE? NEWLINE? SPACE? (PIPE | AMP) SPACE? NEWLINE? SPACE? notArrayType
  | lambdaType
  | tupleType
  | primaryType
  | parenthesizedType
  | unaryType
  | objectType
  ;

propertyIdentifier
  : identifier (PERIOD optionalIdentifierOrIdentifier)+
  | optionalIdentifier (PERIOD optionalIdentifierOrIdentifier)+
  ;

optionalIdentifierOrIdentifier
  : identifier
  | optionalIdentifier
  ;

/* Expressions */

expression
  : unaryExpression
  | expression SPACE? (STAR | FORWARD_SLASH) SPACE? expression
  | expression  SPACE? (PLUS | MINUS) SPACE? expression
  | arrayExpression
  | objectExpression
  | lambdaExpression
  | literalExpression
  | parenthesizedExpression
  ;

unaryExpression
  : (PLUS | MINUS) expression
  ;

arrayExpression
  : BRACKET_OPEN NEWLINE? SPACE? NEWLINE? expression? (COMMA NEWLINE? SPACE? NEWLINE? expression)* NEWLINE? SPACE? NEWLINE? BRACKET_CLOSE
  ;

objectExpression
  : BRACE_OPEN SPACE? NEWLINE? SPACE? objectPairSequenceExpression? SPACE? NEWLINE? SPACE? BRACE_CLOSE;

objectPairSequenceExpression
  : objectPairExpression (SPACE? COMMA SPACE? NEWLINE? SPACE? objectPairExpression)*
  ;

objectPairExpression
  : literalExpression SPACE? COLON SPACE? objectExpression
  | literalExpression SPACE? COLON SPACE? literalExpression
  ;

lambdaExpression
  :  PAREN_OPEN SPACE? NEWLINE? SPACE? formalParameterSequence? SPACE? NEWLINE? SPACE? PAREN_CLOSE SPACE? NEWLINE? SPACE? ARROW SPACE? NEWLINE? SPACE? type QUESTION?
  | parameter SPACE? NEWLINE? SPACE? ARROW SPACE? NEWLINE? SPACE? type QUESTION?
  ;

literalExpression
  : NumberLiteral
  |	BooleanLiteral
  |	CharacterLiteral
  |	StringLiteral
  |	NullLiteral
  ;

parenthesizedExpression
  : PAREN_OPEN SPACE? expression SPACE? PAREN_CLOSE
  ;

/* Descriptions */

description
	: descriptionLine /*(*//*descriptionNewline+ *//* descriptionLine)**/
	;

descriptionLine
	: descriptionLineStart descriptionLineElement*
	| inlineTag descriptionLineElement*
	;

descriptionLineStart
	: SPACE? descriptionText+ (descriptionText | SPACE | AT)*
	;

descriptionText
	: TEXT_CONTENT
	| ID
	| FORWARD_SLASH
	| BRACE_OPEN
	| BRACE_CLOSE
	| COLON
  | MINUS
  | PERIOD
  | literalExpression
  ;

descriptionLineElement
	: inlineTag
	| descriptionLineText
	;

descriptionLineText
	: (descriptionText | SPACE | AT)+
	;

inlineTag
	: INLINE_TAG_START inlineTagName SPACE inlineTagBody? BRACE_CLOSE
	;

inlineTagName
	: identifier
	;

inlineTagBody
	: braceBody+
	;

braceExpression
	: BRACE_OPEN braceBody* BRACE_CLOSE
	;

braceBody
	: braceExpression
	| braceText (NEWLINE braceText)*
	;

braceText
	: TEXT_CONTENT
	| ID
	| SPACE
	| FORWARD_SLASH
	| NEWLINE
	| PERIOD
	;

