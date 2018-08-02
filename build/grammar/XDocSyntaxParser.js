"use strict";
// Generated from XDocSyntaxParser.g4 by ANTLR 4.6-SNAPSHOT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Decorators_1 = require("antlr4ts/Decorators");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Decorators_2 = require("antlr4ts/Decorators");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const RuleVersion_1 = require("antlr4ts/RuleVersion");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class XDocSyntaxParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(XDocSyntaxParser._ATN, this);
    }
    get vocabulary() {
        return XDocSyntaxParser.VOCABULARY;
    }
    get grammarFileName() { return "XDocSyntaxParser.g4"; }
    get ruleNames() { return XDocSyntaxParser.ruleNames; }
    get serializedATN() { return XDocSyntaxParser._serializedATN; }
    documentation() {
        let _localctx = new DocumentationContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, XDocSyntaxParser.RULE_documentation);
        let _la;
        try {
            this.state = 109;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.EOF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 102;
                        this.match(XDocSyntaxParser.EOF);
                    }
                    break;
                case XDocSyntaxParser.NEWLINE:
                case XDocSyntaxParser.SPACE:
                case XDocSyntaxParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 103;
                        this.body();
                        this.state = 105;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 104;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 107;
                        this.match(XDocSyntaxParser.EOF);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    body() {
        let _localctx = new BodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, XDocSyntaxParser.RULE_body);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 114;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === XDocSyntaxParser.NEWLINE || _la === XDocSyntaxParser.SPACE) {
                    {
                        {
                            this.state = 111;
                            this.whitespace();
                        }
                    }
                    this.state = 116;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 117;
                this.annotations();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    whitespace() {
        let _localctx = new WhitespaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, XDocSyntaxParser.RULE_whitespace);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 119;
                _la = this._input.LA(1);
                if (!(_la === XDocSyntaxParser.NEWLINE || _la === XDocSyntaxParser.SPACE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    annotations() {
        let _localctx = new AnnotationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, XDocSyntaxParser.RULE_annotations);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 121;
                this.tag();
                this.state = 126;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 122;
                                this.match(XDocSyntaxParser.NEWLINE);
                                this.state = 123;
                                this.tag();
                            }
                        }
                    }
                    this.state = 128;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    tag() {
        let _localctx = new TagContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, XDocSyntaxParser.RULE_tag);
        let _la;
        try {
            this.state = 288;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 129;
                        this.tagName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 130;
                        this.tagName();
                        this.state = 131;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 133;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 132;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 135;
                        this.match(XDocSyntaxParser.MINUS);
                        this.state = 136;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 137;
                        this.description();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 139;
                        this.tagName();
                        this.state = 140;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 141;
                        this.tagIdentifier();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 143;
                        this.tagName();
                        this.state = 144;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 145;
                        this.tagIdentifier();
                        this.state = 147;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 146;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 149;
                        this.match(XDocSyntaxParser.EQUAL);
                        this.state = 151;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 150;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 153;
                        this.expression(0);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 155;
                        this.tagName();
                        this.state = 156;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 157;
                        this.tagIdentifier();
                        this.state = 158;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 160;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 159;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 162;
                        this.match(XDocSyntaxParser.MINUS);
                        this.state = 163;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 164;
                        this.description();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 166;
                        this.tagName();
                        this.state = 167;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 168;
                        this.tagIdentifier();
                        this.state = 169;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 170;
                        this.match(XDocSyntaxParser.EQUAL);
                        this.state = 172;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 171;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 174;
                        this.expression(0);
                        this.state = 175;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 177;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 176;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 179;
                        this.match(XDocSyntaxParser.MINUS);
                        this.state = 180;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 181;
                        this.description();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 183;
                        this.tagName();
                        this.state = 184;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 185;
                        this.tagIdentifier();
                        this.state = 187;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 186;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 189;
                        this.match(XDocSyntaxParser.COLON);
                        this.state = 191;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 190;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 193;
                        this.type(0);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 195;
                        this.tagName();
                        this.state = 196;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 197;
                        this.tagIdentifier();
                        this.state = 199;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 198;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 201;
                        this.match(XDocSyntaxParser.COLON);
                        this.state = 203;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 202;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 205;
                        this.type(0);
                        this.state = 207;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 206;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 209;
                        this.match(XDocSyntaxParser.EQUAL);
                        this.state = 211;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 210;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 213;
                        this.expression(0);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 215;
                        this.tagName();
                        this.state = 216;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 217;
                        this.tagIdentifier();
                        this.state = 219;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 218;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 221;
                        this.match(XDocSyntaxParser.COLON);
                        this.state = 223;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 222;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 225;
                        this.type(0);
                        this.state = 226;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 228;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 227;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 230;
                        this.match(XDocSyntaxParser.MINUS);
                        this.state = 231;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 232;
                        this.description();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 234;
                        this.tagName();
                        this.state = 235;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 236;
                        this.tagIdentifier();
                        this.state = 238;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 237;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 240;
                        this.match(XDocSyntaxParser.COLON);
                        this.state = 242;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 241;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 244;
                        this.type(0);
                        this.state = 246;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 245;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 248;
                        this.match(XDocSyntaxParser.EQUAL);
                        this.state = 250;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 249;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 252;
                        this.expression(0);
                        this.state = 253;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 255;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 254;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 257;
                        this.match(XDocSyntaxParser.MINUS);
                        this.state = 258;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 259;
                        this.description();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 261;
                        this.tagName();
                        this.state = 263;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 262;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 265;
                        this.match(XDocSyntaxParser.COLON);
                        this.state = 267;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 266;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 269;
                        this.type(0);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 271;
                        this.tagName();
                        this.state = 273;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 272;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 275;
                        this.match(XDocSyntaxParser.COLON);
                        this.state = 277;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 276;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 279;
                        this.type(0);
                        this.state = 280;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 282;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 281;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 284;
                        this.match(XDocSyntaxParser.MINUS);
                        this.state = 285;
                        this.match(XDocSyntaxParser.SPACE);
                        this.state = 286;
                        this.description();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    tagName() {
        let _localctx = new TagNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, XDocSyntaxParser.RULE_tagName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 290;
                this.match(XDocSyntaxParser.AT);
                this.state = 291;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    tagIdentifier() {
        let _localctx = new TagIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, XDocSyntaxParser.RULE_tagIdentifier);
        try {
            this.state = 296;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 293;
                        this.propertyTagIdentifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 294;
                        this.optionalTagIdentifier();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 295;
                        this.identifier();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    propertyTagIdentifier() {
        let _localctx = new PropertyTagIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, XDocSyntaxParser.RULE_propertyTagIdentifier);
        let _la;
        try {
            this.state = 312;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 298;
                        this.optionalTagIdentifier();
                        this.state = 301;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 299;
                                    this.match(XDocSyntaxParser.PERIOD);
                                    this.state = 300;
                                    this.optionalTagOrIdentifier();
                                }
                            }
                            this.state = 303;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === XDocSyntaxParser.PERIOD);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 305;
                        this.identifier();
                        this.state = 308;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 306;
                                    this.match(XDocSyntaxParser.PERIOD);
                                    this.state = 307;
                                    this.optionalTagOrIdentifier();
                                }
                            }
                            this.state = 310;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === XDocSyntaxParser.PERIOD);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    optionalTagIdentifier() {
        let _localctx = new OptionalTagIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, XDocSyntaxParser.RULE_optionalTagIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 314;
                this.optionalIdentifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    optionalTagOrIdentifier() {
        let _localctx = new OptionalTagOrIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, XDocSyntaxParser.RULE_optionalTagOrIdentifier);
        try {
            this.state = 318;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 316;
                        this.optionalTagIdentifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 317;
                        this.identifier();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, XDocSyntaxParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 320;
                this.match(XDocSyntaxParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    optionalIdentifier() {
        let _localctx = new OptionalIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, XDocSyntaxParser.RULE_optionalIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 322;
                this.identifier();
                this.state = 323;
                this.match(XDocSyntaxParser.QUESTION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    type(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new TypeContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 24;
        this.enterRecursionRule(_localctx, 24, XDocSyntaxParser.RULE_type, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 333;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                    case 1:
                        {
                            this.state = 326;
                            this.lambdaType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 327;
                            this.tupleType();
                        }
                        break;
                    case 3:
                        {
                            this.state = 328;
                            this.primaryType();
                        }
                        break;
                    case 4:
                        {
                            this.state = 329;
                            this.parenthesizedType();
                        }
                        break;
                    case 5:
                        {
                            this.state = 330;
                            this.unaryType();
                        }
                        break;
                    case 6:
                        {
                            this.state = 331;
                            this.objectType();
                        }
                        break;
                    case 7:
                        {
                            this.state = 332;
                            this.arrayType();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 358;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new TypeContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, XDocSyntaxParser.RULE_type);
                                this.state = 335;
                                if (!(this.precpred(this._ctx, 8)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                this.state = 337;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 336;
                                            this.match(XDocSyntaxParser.SPACE);
                                        }
                                        break;
                                }
                                this.state = 340;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.NEWLINE) {
                                    {
                                        this.state = 339;
                                        this.match(XDocSyntaxParser.NEWLINE);
                                    }
                                }
                                this.state = 343;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.SPACE) {
                                    {
                                        this.state = 342;
                                        this.match(XDocSyntaxParser.SPACE);
                                    }
                                }
                                this.state = 345;
                                _la = this._input.LA(1);
                                if (!(_la === XDocSyntaxParser.AMP || _la === XDocSyntaxParser.PIPE)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 347;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 346;
                                            this.match(XDocSyntaxParser.SPACE);
                                        }
                                        break;
                                }
                                this.state = 350;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.NEWLINE) {
                                    {
                                        this.state = 349;
                                        this.match(XDocSyntaxParser.NEWLINE);
                                    }
                                }
                                this.state = 353;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.SPACE) {
                                    {
                                        this.state = 352;
                                        this.match(XDocSyntaxParser.SPACE);
                                    }
                                }
                                this.state = 355;
                                this.type(9);
                            }
                        }
                    }
                    this.state = 360;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    lambdaType() {
        let _localctx = new LambdaTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, XDocSyntaxParser.RULE_lambdaType);
        let _la;
        try {
            this.state = 431;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.PAREN_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 361;
                        this.match(XDocSyntaxParser.PAREN_OPEN);
                        this.state = 363;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                            case 1:
                                {
                                    this.state = 362;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 366;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                            case 1:
                                {
                                    this.state = 365;
                                    this.match(XDocSyntaxParser.NEWLINE);
                                }
                                break;
                        }
                        this.state = 369;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                            case 1:
                                {
                                    this.state = 368;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 372;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.ID) {
                            {
                                this.state = 371;
                                this.formalParameterSequence();
                            }
                        }
                        this.state = 375;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                            case 1:
                                {
                                    this.state = 374;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 378;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 377;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 381;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 380;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 383;
                        this.match(XDocSyntaxParser.PAREN_CLOSE);
                        this.state = 385;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                            case 1:
                                {
                                    this.state = 384;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 388;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 387;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 391;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 390;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 393;
                        this.match(XDocSyntaxParser.ARROW);
                        this.state = 395;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                            case 1:
                                {
                                    this.state = 394;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 398;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 397;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 401;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 400;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 403;
                        this.type(0);
                        this.state = 405;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                            case 1:
                                {
                                    this.state = 404;
                                    this.match(XDocSyntaxParser.QUESTION);
                                }
                                break;
                        }
                    }
                    break;
                case XDocSyntaxParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 407;
                        this.parameter();
                        this.state = 409;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                            case 1:
                                {
                                    this.state = 408;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 412;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 411;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 415;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 414;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 417;
                        this.match(XDocSyntaxParser.ARROW);
                        this.state = 419;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                            case 1:
                                {
                                    this.state = 418;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 422;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 421;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 425;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 424;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 427;
                        this.type(0);
                        this.state = 429;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                            case 1:
                                {
                                    this.state = 428;
                                    this.match(XDocSyntaxParser.QUESTION);
                                }
                                break;
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    formalParameterSequence() {
        let _localctx = new FormalParameterSequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, XDocSyntaxParser.RULE_formalParameterSequence);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 433;
                this.parameter();
                this.state = 444;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === XDocSyntaxParser.COMMA) {
                    {
                        {
                            this.state = 434;
                            this.match(XDocSyntaxParser.COMMA);
                            this.state = 436;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocSyntaxParser.NEWLINE) {
                                {
                                    this.state = 435;
                                    this.match(XDocSyntaxParser.NEWLINE);
                                }
                            }
                            this.state = 439;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocSyntaxParser.SPACE) {
                                {
                                    this.state = 438;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                            }
                            this.state = 441;
                            this.parameter();
                        }
                    }
                    this.state = 446;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    parameter() {
        let _localctx = new ParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, XDocSyntaxParser.RULE_parameter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 447;
                this.identifier();
                this.state = 456;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                    case 1:
                        {
                            this.state = 449;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocSyntaxParser.SPACE) {
                                {
                                    this.state = 448;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                            }
                            this.state = 451;
                            this.match(XDocSyntaxParser.COLON);
                            this.state = 453;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocSyntaxParser.SPACE) {
                                {
                                    this.state = 452;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                            }
                            this.state = 455;
                            this.type(0);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    tupleType() {
        let _localctx = new TupleTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, XDocSyntaxParser.RULE_tupleType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 459;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.ID) {
                    {
                        this.state = 458;
                        this.identifier();
                    }
                }
                this.state = 461;
                this.match(XDocSyntaxParser.LESSTHAN);
                this.state = 463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 462;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 465;
                this.tupleTypeSequence();
                this.state = 467;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 466;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 469;
                this.match(XDocSyntaxParser.GREATERTHAN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    tupleTypeSequence() {
        let _localctx = new TupleTypeSequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, XDocSyntaxParser.RULE_tupleTypeSequence);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 471;
                this.type(0);
                this.state = 473;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                    case 1:
                        {
                            this.state = 472;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 482;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === XDocSyntaxParser.COMMA) {
                    {
                        {
                            this.state = 475;
                            this.match(XDocSyntaxParser.COMMA);
                            this.state = 477;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocSyntaxParser.SPACE) {
                                {
                                    this.state = 476;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                            }
                            this.state = 479;
                            this.type(0);
                        }
                    }
                    this.state = 484;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    primaryType() {
        let _localctx = new PrimaryTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, XDocSyntaxParser.RULE_primaryType);
        try {
            this.state = 488;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 485;
                        this.optionalIdentifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 486;
                        this.propertyIdentifier();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 487;
                        this.identifierOrKeyword();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    identifierOrKeyword() {
        let _localctx = new IdentifierOrKeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, XDocSyntaxParser.RULE_identifierOrKeyword);
        try {
            this.state = 492;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 490;
                        this.identifier();
                    }
                    break;
                case XDocSyntaxParser.NullLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 491;
                        this.keyword();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    keyword() {
        let _localctx = new KeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, XDocSyntaxParser.RULE_keyword);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 494;
                this.match(XDocSyntaxParser.NullLiteral);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    parenthesizedType() {
        let _localctx = new ParenthesizedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, XDocSyntaxParser.RULE_parenthesizedType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 496;
                this.match(XDocSyntaxParser.PAREN_OPEN);
                this.state = 498;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 497;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 500;
                this.type(0);
                this.state = 502;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 501;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 504;
                this.match(XDocSyntaxParser.PAREN_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    unaryType() {
        let _localctx = new UnaryTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, XDocSyntaxParser.RULE_unaryType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 506;
                _la = this._input.LA(1);
                if (!(_la === XDocSyntaxParser.STAR || _la === XDocSyntaxParser.AMP)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 507;
                this.primaryType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    objectType() {
        let _localctx = new ObjectTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, XDocSyntaxParser.RULE_objectType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 509;
                this.match(XDocSyntaxParser.BRACE_OPEN);
                this.state = 511;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 81, this._ctx)) {
                    case 1:
                        {
                            this.state = 510;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 514;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
                    case 1:
                        {
                            this.state = 513;
                            this.match(XDocSyntaxParser.NEWLINE);
                        }
                        break;
                }
                this.state = 517;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 83, this._ctx)) {
                    case 1:
                        {
                            this.state = 516;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 520;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (XDocSyntaxParser.NullLiteral - 7)) | (1 << (XDocSyntaxParser.ID - 7)) | (1 << (XDocSyntaxParser.STAR - 7)) | (1 << (XDocSyntaxParser.AMP - 7)) | (1 << (XDocSyntaxParser.BRACE_OPEN - 7)) | (1 << (XDocSyntaxParser.PAREN_OPEN - 7)) | (1 << (XDocSyntaxParser.BRACKET_OPEN - 7)) | (1 << (XDocSyntaxParser.LESSTHAN - 7)))) !== 0)) {
                    {
                        this.state = 519;
                        this.objectPairSequenceType();
                    }
                }
                this.state = 523;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                    case 1:
                        {
                            this.state = 522;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 526;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.NEWLINE) {
                    {
                        this.state = 525;
                        this.match(XDocSyntaxParser.NEWLINE);
                    }
                }
                this.state = 529;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 528;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 531;
                this.match(XDocSyntaxParser.BRACE_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    objectPairSequenceType() {
        let _localctx = new ObjectPairSequenceTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, XDocSyntaxParser.RULE_objectPairSequenceType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 533;
                this.objectPairType();
                this.state = 535;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
                    case 1:
                        {
                            this.state = 534;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 550;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === XDocSyntaxParser.COMMA) {
                    {
                        {
                            this.state = 537;
                            this.match(XDocSyntaxParser.COMMA);
                            this.state = 539;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 538;
                                        this.match(XDocSyntaxParser.SPACE);
                                    }
                                    break;
                            }
                            this.state = 542;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocSyntaxParser.NEWLINE) {
                                {
                                    this.state = 541;
                                    this.match(XDocSyntaxParser.NEWLINE);
                                }
                            }
                            this.state = 545;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocSyntaxParser.SPACE) {
                                {
                                    this.state = 544;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                            }
                            this.state = 547;
                            this.objectPairType();
                        }
                    }
                    this.state = 552;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    objectPairType() {
        let _localctx = new ObjectPairTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, XDocSyntaxParser.RULE_objectPairType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 553;
                this.type(0);
                this.state = 555;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.QUESTION) {
                    {
                        this.state = 554;
                        this.match(XDocSyntaxParser.QUESTION);
                    }
                }
                this.state = 558;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 557;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 560;
                this.match(XDocSyntaxParser.COLON);
                this.state = 562;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 561;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 564;
                this.type(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    arrayType() {
        let _localctx = new ArrayTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, XDocSyntaxParser.RULE_arrayType);
        let _la;
        try {
            let _alt;
            this.state = 612;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.BRACKET_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 566;
                        this.match(XDocSyntaxParser.BRACKET_OPEN);
                        this.state = 568;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                            case 1:
                                {
                                    this.state = 567;
                                    this.match(XDocSyntaxParser.NEWLINE);
                                }
                                break;
                        }
                        this.state = 571;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                            case 1:
                                {
                                    this.state = 570;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 574;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                            case 1:
                                {
                                    this.state = 573;
                                    this.match(XDocSyntaxParser.NEWLINE);
                                }
                                break;
                        }
                        this.state = 577;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (XDocSyntaxParser.NullLiteral - 7)) | (1 << (XDocSyntaxParser.ID - 7)) | (1 << (XDocSyntaxParser.STAR - 7)) | (1 << (XDocSyntaxParser.AMP - 7)) | (1 << (XDocSyntaxParser.BRACE_OPEN - 7)) | (1 << (XDocSyntaxParser.PAREN_OPEN - 7)) | (1 << (XDocSyntaxParser.BRACKET_OPEN - 7)) | (1 << (XDocSyntaxParser.LESSTHAN - 7)))) !== 0)) {
                            {
                                this.state = 576;
                                this.type(0);
                            }
                        }
                        this.state = 592;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === XDocSyntaxParser.COMMA) {
                            {
                                {
                                    this.state = 579;
                                    this.match(XDocSyntaxParser.COMMA);
                                    this.state = 581;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 580;
                                                this.match(XDocSyntaxParser.NEWLINE);
                                            }
                                            break;
                                    }
                                    this.state = 584;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === XDocSyntaxParser.SPACE) {
                                        {
                                            this.state = 583;
                                            this.match(XDocSyntaxParser.SPACE);
                                        }
                                    }
                                    this.state = 587;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === XDocSyntaxParser.NEWLINE) {
                                        {
                                            this.state = 586;
                                            this.match(XDocSyntaxParser.NEWLINE);
                                        }
                                    }
                                    this.state = 589;
                                    this.type(0);
                                }
                            }
                            this.state = 594;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 596;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
                            case 1:
                                {
                                    this.state = 595;
                                    this.match(XDocSyntaxParser.NEWLINE);
                                }
                                break;
                        }
                        this.state = 599;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 598;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 602;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 601;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 604;
                        this.match(XDocSyntaxParser.BRACKET_CLOSE);
                    }
                    break;
                case XDocSyntaxParser.NullLiteral:
                case XDocSyntaxParser.ID:
                case XDocSyntaxParser.STAR:
                case XDocSyntaxParser.AMP:
                case XDocSyntaxParser.BRACE_OPEN:
                case XDocSyntaxParser.PAREN_OPEN:
                case XDocSyntaxParser.LESSTHAN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 605;
                        this.notArrayType(0);
                        this.state = 608;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 606;
                                            this.match(XDocSyntaxParser.BRACKET_OPEN);
                                            this.state = 607;
                                            this.match(XDocSyntaxParser.BRACKET_CLOSE);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 610;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    notArrayType(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new NotArrayTypeContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 54;
        this.enterRecursionRule(_localctx, 54, XDocSyntaxParser.RULE_notArrayType, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 621;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                    case 1:
                        {
                            this.state = 615;
                            this.lambdaType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 616;
                            this.tupleType();
                        }
                        break;
                    case 3:
                        {
                            this.state = 617;
                            this.primaryType();
                        }
                        break;
                    case 4:
                        {
                            this.state = 618;
                            this.parenthesizedType();
                        }
                        break;
                    case 5:
                        {
                            this.state = 619;
                            this.unaryType();
                        }
                        break;
                    case 6:
                        {
                            this.state = 620;
                            this.objectType();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 646;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new NotArrayTypeContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, XDocSyntaxParser.RULE_notArrayType);
                                this.state = 623;
                                if (!(this.precpred(this._ctx, 7)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                this.state = 625;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 624;
                                            this.match(XDocSyntaxParser.SPACE);
                                        }
                                        break;
                                }
                                this.state = 628;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.NEWLINE) {
                                    {
                                        this.state = 627;
                                        this.match(XDocSyntaxParser.NEWLINE);
                                    }
                                }
                                this.state = 631;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.SPACE) {
                                    {
                                        this.state = 630;
                                        this.match(XDocSyntaxParser.SPACE);
                                    }
                                }
                                this.state = 633;
                                _la = this._input.LA(1);
                                if (!(_la === XDocSyntaxParser.AMP || _la === XDocSyntaxParser.PIPE)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 635;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 634;
                                            this.match(XDocSyntaxParser.SPACE);
                                        }
                                        break;
                                }
                                this.state = 638;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.NEWLINE) {
                                    {
                                        this.state = 637;
                                        this.match(XDocSyntaxParser.NEWLINE);
                                    }
                                }
                                this.state = 641;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.SPACE) {
                                    {
                                        this.state = 640;
                                        this.match(XDocSyntaxParser.SPACE);
                                    }
                                }
                                this.state = 643;
                                this.notArrayType(8);
                            }
                        }
                    }
                    this.state = 648;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    propertyIdentifier() {
        let _localctx = new PropertyIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, XDocSyntaxParser.RULE_propertyIdentifier);
        try {
            let _alt;
            this.state = 663;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 649;
                        this.identifier();
                        this.state = 652;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 650;
                                            this.match(XDocSyntaxParser.PERIOD);
                                            this.state = 651;
                                            this.optionalIdentifierOrIdentifier();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 654;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 656;
                        this.optionalIdentifier();
                        this.state = 659;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 657;
                                            this.match(XDocSyntaxParser.PERIOD);
                                            this.state = 658;
                                            this.optionalIdentifierOrIdentifier();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 661;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    optionalIdentifierOrIdentifier() {
        let _localctx = new OptionalIdentifierOrIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, XDocSyntaxParser.RULE_optionalIdentifierOrIdentifier);
        try {
            this.state = 667;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 665;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 666;
                        this.optionalIdentifier();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 60;
        this.enterRecursionRule(_localctx, 60, XDocSyntaxParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 676;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                    case 1:
                        {
                            this.state = 670;
                            this.unaryExpression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 671;
                            this.arrayExpression();
                        }
                        break;
                    case 3:
                        {
                            this.state = 672;
                            this.objectExpression();
                        }
                        break;
                    case 4:
                        {
                            this.state = 673;
                            this.lambdaExpression();
                        }
                        break;
                    case 5:
                        {
                            this.state = 674;
                            this.literalExpression();
                        }
                        break;
                    case 6:
                        {
                            this.state = 675;
                            this.parenthesizedExpression();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 698;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 696;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, XDocSyntaxParser.RULE_expression);
                                        this.state = 678;
                                        if (!(this.precpred(this._ctx, 7)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        this.state = 680;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocSyntaxParser.SPACE) {
                                            {
                                                this.state = 679;
                                                this.match(XDocSyntaxParser.SPACE);
                                            }
                                        }
                                        this.state = 682;
                                        _la = this._input.LA(1);
                                        if (!(_la === XDocSyntaxParser.STAR || _la === XDocSyntaxParser.FORWARD_SLASH)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 684;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocSyntaxParser.SPACE) {
                                            {
                                                this.state = 683;
                                                this.match(XDocSyntaxParser.SPACE);
                                            }
                                        }
                                        this.state = 686;
                                        this.expression(8);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, XDocSyntaxParser.RULE_expression);
                                        this.state = 687;
                                        if (!(this.precpred(this._ctx, 6)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        this.state = 689;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocSyntaxParser.SPACE) {
                                            {
                                                this.state = 688;
                                                this.match(XDocSyntaxParser.SPACE);
                                            }
                                        }
                                        this.state = 691;
                                        _la = this._input.LA(1);
                                        if (!(_la === XDocSyntaxParser.PLUS || _la === XDocSyntaxParser.MINUS)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 693;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocSyntaxParser.SPACE) {
                                            {
                                                this.state = 692;
                                                this.match(XDocSyntaxParser.SPACE);
                                            }
                                        }
                                        this.state = 695;
                                        this.expression(7);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 700;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    unaryExpression() {
        let _localctx = new UnaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, XDocSyntaxParser.RULE_unaryExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 701;
                _la = this._input.LA(1);
                if (!(_la === XDocSyntaxParser.PLUS || _la === XDocSyntaxParser.MINUS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 702;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    arrayExpression() {
        let _localctx = new ArrayExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, XDocSyntaxParser.RULE_arrayExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 704;
                this.match(XDocSyntaxParser.BRACKET_OPEN);
                this.state = 706;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 128, this._ctx)) {
                    case 1:
                        {
                            this.state = 705;
                            this.match(XDocSyntaxParser.NEWLINE);
                        }
                        break;
                }
                this.state = 709;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
                    case 1:
                        {
                            this.state = 708;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 712;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 130, this._ctx)) {
                    case 1:
                        {
                            this.state = 711;
                            this.match(XDocSyntaxParser.NEWLINE);
                        }
                        break;
                }
                this.state = 715;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.NumberLiteral) | (1 << XDocSyntaxParser.BooleanLiteral) | (1 << XDocSyntaxParser.CharacterLiteral) | (1 << XDocSyntaxParser.StringLiteral) | (1 << XDocSyntaxParser.NullLiteral) | (1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.PLUS) | (1 << XDocSyntaxParser.MINUS) | (1 << XDocSyntaxParser.BRACE_OPEN) | (1 << XDocSyntaxParser.PAREN_OPEN) | (1 << XDocSyntaxParser.BRACKET_OPEN))) !== 0)) {
                    {
                        this.state = 714;
                        this.expression(0);
                    }
                }
                this.state = 730;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === XDocSyntaxParser.COMMA) {
                    {
                        {
                            this.state = 717;
                            this.match(XDocSyntaxParser.COMMA);
                            this.state = 719;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 718;
                                        this.match(XDocSyntaxParser.NEWLINE);
                                    }
                                    break;
                            }
                            this.state = 722;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocSyntaxParser.SPACE) {
                                {
                                    this.state = 721;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                            }
                            this.state = 725;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocSyntaxParser.NEWLINE) {
                                {
                                    this.state = 724;
                                    this.match(XDocSyntaxParser.NEWLINE);
                                }
                            }
                            this.state = 727;
                            this.expression(0);
                        }
                    }
                    this.state = 732;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 734;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 136, this._ctx)) {
                    case 1:
                        {
                            this.state = 733;
                            this.match(XDocSyntaxParser.NEWLINE);
                        }
                        break;
                }
                this.state = 737;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 736;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 740;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.NEWLINE) {
                    {
                        this.state = 739;
                        this.match(XDocSyntaxParser.NEWLINE);
                    }
                }
                this.state = 742;
                this.match(XDocSyntaxParser.BRACKET_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    objectExpression() {
        let _localctx = new ObjectExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, XDocSyntaxParser.RULE_objectExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 744;
                this.match(XDocSyntaxParser.BRACE_OPEN);
                this.state = 746;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 139, this._ctx)) {
                    case 1:
                        {
                            this.state = 745;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 749;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 140, this._ctx)) {
                    case 1:
                        {
                            this.state = 748;
                            this.match(XDocSyntaxParser.NEWLINE);
                        }
                        break;
                }
                this.state = 752;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
                    case 1:
                        {
                            this.state = 751;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 755;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.NumberLiteral) | (1 << XDocSyntaxParser.BooleanLiteral) | (1 << XDocSyntaxParser.CharacterLiteral) | (1 << XDocSyntaxParser.StringLiteral) | (1 << XDocSyntaxParser.NullLiteral))) !== 0)) {
                    {
                        this.state = 754;
                        this.objectPairSequenceExpression();
                    }
                }
                this.state = 758;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                    case 1:
                        {
                            this.state = 757;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 761;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.NEWLINE) {
                    {
                        this.state = 760;
                        this.match(XDocSyntaxParser.NEWLINE);
                    }
                }
                this.state = 764;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 763;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 766;
                this.match(XDocSyntaxParser.BRACE_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    objectPairSequenceExpression() {
        let _localctx = new ObjectPairSequenceExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, XDocSyntaxParser.RULE_objectPairSequenceExpression);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 768;
                this.objectPairExpression();
                this.state = 785;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 770;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.SPACE) {
                                    {
                                        this.state = 769;
                                        this.match(XDocSyntaxParser.SPACE);
                                    }
                                }
                                this.state = 772;
                                this.match(XDocSyntaxParser.COMMA);
                                this.state = 774;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 773;
                                            this.match(XDocSyntaxParser.SPACE);
                                        }
                                        break;
                                }
                                this.state = 777;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.NEWLINE) {
                                    {
                                        this.state = 776;
                                        this.match(XDocSyntaxParser.NEWLINE);
                                    }
                                }
                                this.state = 780;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.SPACE) {
                                    {
                                        this.state = 779;
                                        this.match(XDocSyntaxParser.SPACE);
                                    }
                                }
                                this.state = 782;
                                this.objectPairExpression();
                            }
                        }
                    }
                    this.state = 787;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    objectPairExpression() {
        let _localctx = new ObjectPairExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, XDocSyntaxParser.RULE_objectPairExpression);
        let _la;
        try {
            this.state = 808;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 155, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 788;
                        this.literalExpression();
                        this.state = 790;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 789;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 792;
                        this.match(XDocSyntaxParser.COLON);
                        this.state = 794;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 793;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 796;
                        this.objectExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 798;
                        this.literalExpression();
                        this.state = 800;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 799;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 802;
                        this.match(XDocSyntaxParser.COLON);
                        this.state = 804;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 803;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 806;
                        this.literalExpression();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    lambdaExpression() {
        let _localctx = new LambdaExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, XDocSyntaxParser.RULE_lambdaExpression);
        let _la;
        try {
            this.state = 880;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.PAREN_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 810;
                        this.match(XDocSyntaxParser.PAREN_OPEN);
                        this.state = 812;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
                            case 1:
                                {
                                    this.state = 811;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 815;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
                            case 1:
                                {
                                    this.state = 814;
                                    this.match(XDocSyntaxParser.NEWLINE);
                                }
                                break;
                        }
                        this.state = 818;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 158, this._ctx)) {
                            case 1:
                                {
                                    this.state = 817;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 821;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.ID) {
                            {
                                this.state = 820;
                                this.formalParameterSequence();
                            }
                        }
                        this.state = 824;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 160, this._ctx)) {
                            case 1:
                                {
                                    this.state = 823;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 827;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 826;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 830;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 829;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 832;
                        this.match(XDocSyntaxParser.PAREN_CLOSE);
                        this.state = 834;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 163, this._ctx)) {
                            case 1:
                                {
                                    this.state = 833;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 837;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 836;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 840;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 839;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 842;
                        this.match(XDocSyntaxParser.ARROW);
                        this.state = 844;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 166, this._ctx)) {
                            case 1:
                                {
                                    this.state = 843;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 847;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 846;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 850;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 849;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 852;
                        this.type(0);
                        this.state = 854;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 169, this._ctx)) {
                            case 1:
                                {
                                    this.state = 853;
                                    this.match(XDocSyntaxParser.QUESTION);
                                }
                                break;
                        }
                    }
                    break;
                case XDocSyntaxParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 856;
                        this.parameter();
                        this.state = 858;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
                            case 1:
                                {
                                    this.state = 857;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 861;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 860;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 864;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 863;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 866;
                        this.match(XDocSyntaxParser.ARROW);
                        this.state = 868;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 173, this._ctx)) {
                            case 1:
                                {
                                    this.state = 867;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 871;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 870;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 874;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 873;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 876;
                        this.type(0);
                        this.state = 878;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
                            case 1:
                                {
                                    this.state = 877;
                                    this.match(XDocSyntaxParser.QUESTION);
                                }
                                break;
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    literalExpression() {
        let _localctx = new LiteralExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, XDocSyntaxParser.RULE_literalExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 882;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.NumberLiteral) | (1 << XDocSyntaxParser.BooleanLiteral) | (1 << XDocSyntaxParser.CharacterLiteral) | (1 << XDocSyntaxParser.StringLiteral) | (1 << XDocSyntaxParser.NullLiteral))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    parenthesizedExpression() {
        let _localctx = new ParenthesizedExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, XDocSyntaxParser.RULE_parenthesizedExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 884;
                this.match(XDocSyntaxParser.PAREN_OPEN);
                this.state = 886;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 885;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 888;
                this.expression(0);
                this.state = 890;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 889;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 892;
                this.match(XDocSyntaxParser.PAREN_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    description() {
        let _localctx = new DescriptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, XDocSyntaxParser.RULE_description);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 894;
                this.descriptionLine();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    descriptionLine() {
        let _localctx = new DescriptionLineContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, XDocSyntaxParser.RULE_descriptionLine);
        let _la;
        try {
            this.state = 910;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.NumberLiteral:
                case XDocSyntaxParser.BooleanLiteral:
                case XDocSyntaxParser.CharacterLiteral:
                case XDocSyntaxParser.StringLiteral:
                case XDocSyntaxParser.NullLiteral:
                case XDocSyntaxParser.ID:
                case XDocSyntaxParser.SPACE:
                case XDocSyntaxParser.TEXT_CONTENT:
                case XDocSyntaxParser.MINUS:
                case XDocSyntaxParser.FORWARD_SLASH:
                case XDocSyntaxParser.COLON:
                case XDocSyntaxParser.PERIOD:
                case XDocSyntaxParser.BRACE_OPEN:
                case XDocSyntaxParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 896;
                        this.descriptionLineStart();
                        this.state = 900;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.NumberLiteral) | (1 << XDocSyntaxParser.BooleanLiteral) | (1 << XDocSyntaxParser.CharacterLiteral) | (1 << XDocSyntaxParser.StringLiteral) | (1 << XDocSyntaxParser.NullLiteral) | (1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.AT) | (1 << XDocSyntaxParser.MINUS) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.COLON) | (1 << XDocSyntaxParser.PERIOD) | (1 << XDocSyntaxParser.INLINE_TAG_START) | (1 << XDocSyntaxParser.BRACE_OPEN) | (1 << XDocSyntaxParser.BRACE_CLOSE))) !== 0)) {
                            {
                                {
                                    this.state = 897;
                                    this.descriptionLineElement();
                                }
                            }
                            this.state = 902;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case XDocSyntaxParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 903;
                        this.inlineTag();
                        this.state = 907;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.NumberLiteral) | (1 << XDocSyntaxParser.BooleanLiteral) | (1 << XDocSyntaxParser.CharacterLiteral) | (1 << XDocSyntaxParser.StringLiteral) | (1 << XDocSyntaxParser.NullLiteral) | (1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.AT) | (1 << XDocSyntaxParser.MINUS) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.COLON) | (1 << XDocSyntaxParser.PERIOD) | (1 << XDocSyntaxParser.INLINE_TAG_START) | (1 << XDocSyntaxParser.BRACE_OPEN) | (1 << XDocSyntaxParser.BRACE_CLOSE))) !== 0)) {
                            {
                                {
                                    this.state = 904;
                                    this.descriptionLineElement();
                                }
                            }
                            this.state = 909;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    descriptionLineStart() {
        let _localctx = new DescriptionLineStartContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, XDocSyntaxParser.RULE_descriptionLineStart);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 913;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 912;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 916;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 915;
                                    this.descriptionText();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 918;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 925;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 923;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case XDocSyntaxParser.NumberLiteral:
                                case XDocSyntaxParser.BooleanLiteral:
                                case XDocSyntaxParser.CharacterLiteral:
                                case XDocSyntaxParser.StringLiteral:
                                case XDocSyntaxParser.NullLiteral:
                                case XDocSyntaxParser.ID:
                                case XDocSyntaxParser.TEXT_CONTENT:
                                case XDocSyntaxParser.MINUS:
                                case XDocSyntaxParser.FORWARD_SLASH:
                                case XDocSyntaxParser.COLON:
                                case XDocSyntaxParser.PERIOD:
                                case XDocSyntaxParser.BRACE_OPEN:
                                case XDocSyntaxParser.BRACE_CLOSE:
                                    {
                                        this.state = 920;
                                        this.descriptionText();
                                    }
                                    break;
                                case XDocSyntaxParser.SPACE:
                                    {
                                        this.state = 921;
                                        this.match(XDocSyntaxParser.SPACE);
                                    }
                                    break;
                                case XDocSyntaxParser.AT:
                                    {
                                        this.state = 922;
                                        this.match(XDocSyntaxParser.AT);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 927;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    descriptionText() {
        let _localctx = new DescriptionTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, XDocSyntaxParser.RULE_descriptionText);
        try {
            this.state = 937;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.TEXT_CONTENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 928;
                        this.match(XDocSyntaxParser.TEXT_CONTENT);
                    }
                    break;
                case XDocSyntaxParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 929;
                        this.match(XDocSyntaxParser.ID);
                    }
                    break;
                case XDocSyntaxParser.FORWARD_SLASH:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 930;
                        this.match(XDocSyntaxParser.FORWARD_SLASH);
                    }
                    break;
                case XDocSyntaxParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 931;
                        this.match(XDocSyntaxParser.BRACE_OPEN);
                    }
                    break;
                case XDocSyntaxParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 932;
                        this.match(XDocSyntaxParser.BRACE_CLOSE);
                    }
                    break;
                case XDocSyntaxParser.COLON:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 933;
                        this.match(XDocSyntaxParser.COLON);
                    }
                    break;
                case XDocSyntaxParser.MINUS:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 934;
                        this.match(XDocSyntaxParser.MINUS);
                    }
                    break;
                case XDocSyntaxParser.PERIOD:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 935;
                        this.match(XDocSyntaxParser.PERIOD);
                    }
                    break;
                case XDocSyntaxParser.NumberLiteral:
                case XDocSyntaxParser.BooleanLiteral:
                case XDocSyntaxParser.CharacterLiteral:
                case XDocSyntaxParser.StringLiteral:
                case XDocSyntaxParser.NullLiteral:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 936;
                        this.literalExpression();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    descriptionLineElement() {
        let _localctx = new DescriptionLineElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, XDocSyntaxParser.RULE_descriptionLineElement);
        try {
            this.state = 941;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 939;
                        this.inlineTag();
                    }
                    break;
                case XDocSyntaxParser.NumberLiteral:
                case XDocSyntaxParser.BooleanLiteral:
                case XDocSyntaxParser.CharacterLiteral:
                case XDocSyntaxParser.StringLiteral:
                case XDocSyntaxParser.NullLiteral:
                case XDocSyntaxParser.ID:
                case XDocSyntaxParser.SPACE:
                case XDocSyntaxParser.TEXT_CONTENT:
                case XDocSyntaxParser.AT:
                case XDocSyntaxParser.MINUS:
                case XDocSyntaxParser.FORWARD_SLASH:
                case XDocSyntaxParser.COLON:
                case XDocSyntaxParser.PERIOD:
                case XDocSyntaxParser.BRACE_OPEN:
                case XDocSyntaxParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 940;
                        this.descriptionLineText();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    descriptionLineText() {
        let _localctx = new DescriptionLineTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, XDocSyntaxParser.RULE_descriptionLineText);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 946;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 946;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case XDocSyntaxParser.NumberLiteral:
                                    case XDocSyntaxParser.BooleanLiteral:
                                    case XDocSyntaxParser.CharacterLiteral:
                                    case XDocSyntaxParser.StringLiteral:
                                    case XDocSyntaxParser.NullLiteral:
                                    case XDocSyntaxParser.ID:
                                    case XDocSyntaxParser.TEXT_CONTENT:
                                    case XDocSyntaxParser.MINUS:
                                    case XDocSyntaxParser.FORWARD_SLASH:
                                    case XDocSyntaxParser.COLON:
                                    case XDocSyntaxParser.PERIOD:
                                    case XDocSyntaxParser.BRACE_OPEN:
                                    case XDocSyntaxParser.BRACE_CLOSE:
                                        {
                                            this.state = 943;
                                            this.descriptionText();
                                        }
                                        break;
                                    case XDocSyntaxParser.SPACE:
                                        {
                                            this.state = 944;
                                            this.match(XDocSyntaxParser.SPACE);
                                        }
                                        break;
                                    case XDocSyntaxParser.AT:
                                        {
                                            this.state = 945;
                                            this.match(XDocSyntaxParser.AT);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 948;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    inlineTag() {
        let _localctx = new InlineTagContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, XDocSyntaxParser.RULE_inlineTag);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 950;
                this.match(XDocSyntaxParser.INLINE_TAG_START);
                this.state = 951;
                this.inlineTagName();
                this.state = 952;
                this.match(XDocSyntaxParser.SPACE);
                this.state = 954;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.NEWLINE) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.PERIOD) | (1 << XDocSyntaxParser.BRACE_OPEN))) !== 0)) {
                    {
                        this.state = 953;
                        this.inlineTagBody();
                    }
                }
                this.state = 956;
                this.match(XDocSyntaxParser.BRACE_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    inlineTagName() {
        let _localctx = new InlineTagNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, XDocSyntaxParser.RULE_inlineTagName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 958;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    inlineTagBody() {
        let _localctx = new InlineTagBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, XDocSyntaxParser.RULE_inlineTagBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 961;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 960;
                            this.braceBody();
                        }
                    }
                    this.state = 963;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.NEWLINE) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.PERIOD) | (1 << XDocSyntaxParser.BRACE_OPEN))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    braceExpression() {
        let _localctx = new BraceExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, XDocSyntaxParser.RULE_braceExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 965;
                this.match(XDocSyntaxParser.BRACE_OPEN);
                this.state = 969;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.NEWLINE) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.PERIOD) | (1 << XDocSyntaxParser.BRACE_OPEN))) !== 0)) {
                    {
                        {
                            this.state = 966;
                            this.braceBody();
                        }
                    }
                    this.state = 971;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 972;
                this.match(XDocSyntaxParser.BRACE_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    braceBody() {
        let _localctx = new BraceBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, XDocSyntaxParser.RULE_braceBody);
        try {
            let _alt;
            this.state = 983;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 974;
                        this.braceExpression();
                    }
                    break;
                case XDocSyntaxParser.ID:
                case XDocSyntaxParser.NEWLINE:
                case XDocSyntaxParser.SPACE:
                case XDocSyntaxParser.TEXT_CONTENT:
                case XDocSyntaxParser.FORWARD_SLASH:
                case XDocSyntaxParser.PERIOD:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 975;
                        this.braceText();
                        this.state = 980;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 976;
                                        this.match(XDocSyntaxParser.NEWLINE);
                                        this.state = 977;
                                        this.braceText();
                                    }
                                }
                            }
                            this.state = 982;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    braceText() {
        let _localctx = new BraceTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, XDocSyntaxParser.RULE_braceText);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 985;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.NEWLINE) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.PERIOD))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 12:
                return this.type_sempred(_localctx, predIndex);
            case 27:
                return this.notArrayType_sempred(_localctx, predIndex);
            case 30:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    type_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 8);
        }
        return true;
    }
    notArrayType_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 7);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 7);
            case 3:
                return this.precpred(this._ctx, 6);
        }
        return true;
    }
    static get _ATN() {
        if (!XDocSyntaxParser.__ATN) {
            XDocSyntaxParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(XDocSyntaxParser._serializedATN));
        }
        return XDocSyntaxParser.__ATN;
    }
}
XDocSyntaxParser.NumberLiteral = 1;
XDocSyntaxParser.IntegerLiteral = 2;
XDocSyntaxParser.FloatingPointLiteral = 3;
XDocSyntaxParser.BooleanLiteral = 4;
XDocSyntaxParser.CharacterLiteral = 5;
XDocSyntaxParser.StringLiteral = 6;
XDocSyntaxParser.NullLiteral = 7;
XDocSyntaxParser.ID = 8;
XDocSyntaxParser.NEWLINE = 9;
XDocSyntaxParser.SPACE = 10;
XDocSyntaxParser.TEXT_CONTENT = 11;
XDocSyntaxParser.AT = 12;
XDocSyntaxParser.PLUS = 13;
XDocSyntaxParser.MINUS = 14;
XDocSyntaxParser.STAR = 15;
XDocSyntaxParser.FORWARD_SLASH = 16;
XDocSyntaxParser.COLON = 17;
XDocSyntaxParser.PERIOD = 18;
XDocSyntaxParser.COMMA = 19;
XDocSyntaxParser.EQUAL = 20;
XDocSyntaxParser.QUESTION = 21;
XDocSyntaxParser.AMP = 22;
XDocSyntaxParser.PIPE = 23;
XDocSyntaxParser.ARROW = 24;
XDocSyntaxParser.EXCLAMATION = 25;
XDocSyntaxParser.INLINE_TAG_START = 26;
XDocSyntaxParser.BRACE_OPEN = 27;
XDocSyntaxParser.BRACE_CLOSE = 28;
XDocSyntaxParser.PAREN_OPEN = 29;
XDocSyntaxParser.PAREN_CLOSE = 30;
XDocSyntaxParser.BRACKET_OPEN = 31;
XDocSyntaxParser.BRACKET_CLOSE = 32;
XDocSyntaxParser.LESSTHAN = 33;
XDocSyntaxParser.GREATERTHAN = 34;
XDocSyntaxParser.RULE_documentation = 0;
XDocSyntaxParser.RULE_body = 1;
XDocSyntaxParser.RULE_whitespace = 2;
XDocSyntaxParser.RULE_annotations = 3;
XDocSyntaxParser.RULE_tag = 4;
XDocSyntaxParser.RULE_tagName = 5;
XDocSyntaxParser.RULE_tagIdentifier = 6;
XDocSyntaxParser.RULE_propertyTagIdentifier = 7;
XDocSyntaxParser.RULE_optionalTagIdentifier = 8;
XDocSyntaxParser.RULE_optionalTagOrIdentifier = 9;
XDocSyntaxParser.RULE_identifier = 10;
XDocSyntaxParser.RULE_optionalIdentifier = 11;
XDocSyntaxParser.RULE_type = 12;
XDocSyntaxParser.RULE_lambdaType = 13;
XDocSyntaxParser.RULE_formalParameterSequence = 14;
XDocSyntaxParser.RULE_parameter = 15;
XDocSyntaxParser.RULE_tupleType = 16;
XDocSyntaxParser.RULE_tupleTypeSequence = 17;
XDocSyntaxParser.RULE_primaryType = 18;
XDocSyntaxParser.RULE_identifierOrKeyword = 19;
XDocSyntaxParser.RULE_keyword = 20;
XDocSyntaxParser.RULE_parenthesizedType = 21;
XDocSyntaxParser.RULE_unaryType = 22;
XDocSyntaxParser.RULE_objectType = 23;
XDocSyntaxParser.RULE_objectPairSequenceType = 24;
XDocSyntaxParser.RULE_objectPairType = 25;
XDocSyntaxParser.RULE_arrayType = 26;
XDocSyntaxParser.RULE_notArrayType = 27;
XDocSyntaxParser.RULE_propertyIdentifier = 28;
XDocSyntaxParser.RULE_optionalIdentifierOrIdentifier = 29;
XDocSyntaxParser.RULE_expression = 30;
XDocSyntaxParser.RULE_unaryExpression = 31;
XDocSyntaxParser.RULE_arrayExpression = 32;
XDocSyntaxParser.RULE_objectExpression = 33;
XDocSyntaxParser.RULE_objectPairSequenceExpression = 34;
XDocSyntaxParser.RULE_objectPairExpression = 35;
XDocSyntaxParser.RULE_lambdaExpression = 36;
XDocSyntaxParser.RULE_literalExpression = 37;
XDocSyntaxParser.RULE_parenthesizedExpression = 38;
XDocSyntaxParser.RULE_description = 39;
XDocSyntaxParser.RULE_descriptionLine = 40;
XDocSyntaxParser.RULE_descriptionLineStart = 41;
XDocSyntaxParser.RULE_descriptionText = 42;
XDocSyntaxParser.RULE_descriptionLineElement = 43;
XDocSyntaxParser.RULE_descriptionLineText = 44;
XDocSyntaxParser.RULE_inlineTag = 45;
XDocSyntaxParser.RULE_inlineTagName = 46;
XDocSyntaxParser.RULE_inlineTagBody = 47;
XDocSyntaxParser.RULE_braceExpression = 48;
XDocSyntaxParser.RULE_braceBody = 49;
XDocSyntaxParser.RULE_braceText = 50;
XDocSyntaxParser.ruleNames = [
    "documentation", "body", "whitespace", "annotations", "tag", "tagName",
    "tagIdentifier", "propertyTagIdentifier", "optionalTagIdentifier", "optionalTagOrIdentifier",
    "identifier", "optionalIdentifier", "type", "lambdaType", "formalParameterSequence",
    "parameter", "tupleType", "tupleTypeSequence", "primaryType", "identifierOrKeyword",
    "keyword", "parenthesizedType", "unaryType", "objectType", "objectPairSequenceType",
    "objectPairType", "arrayType", "notArrayType", "propertyIdentifier", "optionalIdentifierOrIdentifier",
    "expression", "unaryExpression", "arrayExpression", "objectExpression",
    "objectPairSequenceExpression", "objectPairExpression", "lambdaExpression",
    "literalExpression", "parenthesizedExpression", "description", "descriptionLine",
    "descriptionLineStart", "descriptionText", "descriptionLineElement", "descriptionLineText",
    "inlineTag", "inlineTagName", "inlineTagBody", "braceExpression", "braceBody",
    "braceText"
];
XDocSyntaxParser._LITERAL_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, "'@'", "'+'", "'-'",
    "'*'", "'/'", "':'", "'.'", "','", "'='", "'?'", "'&'", "'|'", undefined,
    "'!'", "'{@'", "'{'", "'}'", "'('", "')'", "'['", "']'", "'<'", "'>'"
];
XDocSyntaxParser._SYMBOLIC_NAMES = [
    undefined, "NumberLiteral", "IntegerLiteral", "FloatingPointLiteral",
    "BooleanLiteral", "CharacterLiteral", "StringLiteral", "NullLiteral",
    "ID", "NEWLINE", "SPACE", "TEXT_CONTENT", "AT", "PLUS", "MINUS", "STAR",
    "FORWARD_SLASH", "COLON", "PERIOD", "COMMA", "EQUAL", "QUESTION", "AMP",
    "PIPE", "ARROW", "EXCLAMATION", "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE",
    "PAREN_OPEN", "PAREN_CLOSE", "BRACKET_OPEN", "BRACKET_CLOSE", "LESSTHAN",
    "GREATERTHAN"
];
XDocSyntaxParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(XDocSyntaxParser._LITERAL_NAMES, XDocSyntaxParser._SYMBOLIC_NAMES, []);
XDocSyntaxParser._serializedATNSegments = 2;
XDocSyntaxParser._serializedATNSegment0 = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03$\u03DE\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
    "\t4\x03\x02\x03\x02\x03\x02\x05\x02l\n\x02\x03\x02\x03\x02\x05\x02p\n" +
    "\x02\x03\x03\x07\x03s\n\x03\f\x03\x0E\x03v\v\x03\x03\x03\x03\x03\x03\x04" +
    "\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05\x7F\n\x05\f\x05\x0E\x05\x82\v" +
    "\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x88\n\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x05\x06\x96\n\x06\x03\x06\x03\x06\x05\x06\x9A\n\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xA3\n\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x05\x06\xAF\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\xB4\n\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xBE\n\x06" +
    "\x03\x06\x03\x06\x05\x06\xC2\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x05\x06\xCA\n\x06\x03\x06\x03\x06\x05\x06\xCE\n\x06\x03\x06" +
    "\x03\x06\x05\x06\xD2\n\x06\x03\x06\x03\x06\x05\x06\xD6\n\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xDE\n\x06\x03\x06\x03\x06" +
    "\x05\x06\xE2\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\xE7\n\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xF1\n\x06" +
    "\x03\x06\x03\x06\x05\x06\xF5\n\x06\x03\x06\x03\x06\x05\x06\xF9\n\x06\x03" +
    "\x06\x03\x06\x05\x06\xFD\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0102\n" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u010A\n\x06" +
    "\x03\x06\x03\x06\x05\x06\u010E\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
    "\x06\u0114\n\x06\x03\x06\x03\x06\x05\x06\u0118\n\x06\x03\x06\x03\x06\x03" +
    "\x06\x05\x06\u011D\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0123" +
    "\n\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\b\u012B\n\b\x03\t" +
    "\x03\t\x03\t\x06\t\u0130\n\t\r\t\x0E\t\u0131\x03\t\x03\t\x03\t\x06\t\u0137" +
    "\n\t\r\t\x0E\t\u0138\x05\t\u013B\n\t\x03\n\x03\n\x03\v\x03\v\x05\v\u0141" +
    "\n\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
    "\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0150\n\x0E\x03\x0E\x03\x0E\x05\x0E" +
    "\u0154\n\x0E\x03\x0E\x05\x0E\u0157\n\x0E\x03\x0E\x05\x0E\u015A\n\x0E\x03" +
    "\x0E\x03\x0E\x05\x0E\u015E\n\x0E\x03\x0E\x05\x0E\u0161\n\x0E\x03\x0E\x05" +
    "\x0E\u0164\n\x0E\x03\x0E\x07\x0E\u0167\n\x0E\f\x0E\x0E\x0E\u016A\v\x0E" +
    "\x03\x0F\x03\x0F\x05\x0F\u016E\n\x0F\x03\x0F\x05\x0F\u0171\n\x0F\x03\x0F" +
    "\x05\x0F\u0174\n\x0F\x03\x0F\x05\x0F\u0177\n\x0F\x03\x0F\x05\x0F\u017A" +
    "\n\x0F\x03\x0F\x05\x0F\u017D\n\x0F\x03\x0F\x05\x0F\u0180\n\x0F\x03\x0F" +
    "\x03\x0F\x05\x0F\u0184\n\x0F\x03\x0F\x05\x0F\u0187\n\x0F\x03\x0F\x05\x0F" +
    "\u018A\n\x0F\x03\x0F\x03\x0F\x05\x0F\u018E\n\x0F\x03\x0F\x05\x0F\u0191" +
    "\n\x0F\x03\x0F\x05\x0F\u0194\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0198\n\x0F" +
    "\x03\x0F\x03\x0F\x05\x0F\u019C\n\x0F\x03\x0F\x05\x0F\u019F\n\x0F\x03\x0F" +
    "\x05\x0F\u01A2\n\x0F\x03\x0F\x03\x0F\x05\x0F\u01A6\n\x0F\x03\x0F\x05\x0F" +
    "\u01A9\n\x0F\x03\x0F\x05\x0F\u01AC\n\x0F\x03\x0F\x03\x0F\x05\x0F\u01B0" +
    "\n\x0F\x05\x0F\u01B2\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u01B7\n\x10" +
    "\x03\x10\x05\x10\u01BA\n\x10\x03\x10\x07\x10\u01BD\n\x10\f\x10\x0E\x10" +
    "\u01C0\v\x10\x03\x11\x03\x11\x05\x11\u01C4\n\x11\x03\x11\x03\x11\x05\x11" +
    "\u01C8\n\x11\x03\x11\x05\x11\u01CB\n\x11\x03\x12\x05\x12\u01CE\n\x12\x03" +
    "\x12\x03\x12\x05\x12\u01D2\n\x12\x03\x12\x03\x12\x05\x12\u01D6\n\x12\x03" +
    "\x12\x03\x12\x03\x13\x03\x13\x05\x13\u01DC\n\x13\x03\x13\x03\x13\x05\x13" +
    "\u01E0\n\x13\x03\x13\x07\x13\u01E3\n\x13\f\x13\x0E\x13\u01E6\v\x13\x03" +
    "\x14\x03\x14\x03\x14\x05\x14\u01EB\n\x14\x03\x15\x03\x15\x05\x15\u01EF" +
    "\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17\u01F5\n\x17\x03\x17\x03" +
    "\x17\x05\x17\u01F9\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19" +
    "\x03\x19\x05\x19\u0202\n\x19\x03\x19\x05\x19\u0205\n\x19\x03\x19\x05\x19" +
    "\u0208\n\x19\x03\x19\x05\x19\u020B\n\x19\x03\x19\x05\x19\u020E\n\x19\x03" +
    "\x19\x05\x19\u0211\n\x19\x03\x19\x05\x19\u0214\n\x19\x03\x19\x03\x19\x03" +
    "\x1A\x03\x1A\x05\x1A\u021A\n\x1A\x03\x1A\x03\x1A\x05\x1A\u021E\n\x1A\x03" +
    "\x1A\x05\x1A\u0221\n\x1A\x03\x1A\x05\x1A\u0224\n\x1A\x03\x1A\x07\x1A\u0227" +
    "\n\x1A\f\x1A\x0E\x1A\u022A\v\x1A\x03\x1B\x03\x1B\x05\x1B\u022E\n\x1B\x03" +
    "\x1B\x05\x1B\u0231\n\x1B\x03\x1B\x03\x1B\x05\x1B\u0235\n\x1B\x03\x1B\x03" +
    "\x1B\x03\x1C\x03\x1C\x05\x1C\u023B\n\x1C\x03\x1C\x05\x1C\u023E\n\x1C\x03" +
    "\x1C\x05\x1C\u0241\n\x1C\x03\x1C\x05\x1C\u0244\n\x1C\x03\x1C\x03\x1C\x05" +
    "\x1C\u0248\n\x1C\x03\x1C\x05\x1C\u024B\n\x1C\x03\x1C\x05\x1C\u024E\n\x1C" +
    "\x03\x1C\x07\x1C\u0251\n\x1C\f\x1C\x0E\x1C\u0254\v\x1C\x03\x1C\x05\x1C" +
    "\u0257\n\x1C\x03\x1C\x05\x1C\u025A\n\x1C\x03\x1C\x05\x1C\u025D\n\x1C\x03" +
    "\x1C\x03\x1C\x03\x1C\x03\x1C\x06\x1C\u0263\n\x1C\r\x1C\x0E\x1C\u0264\x05" +
    "\x1C\u0267\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
    "\x05\x1D\u0270\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0274\n\x1D\x03\x1D\x05\x1D" +
    "\u0277\n\x1D\x03\x1D\x05\x1D\u027A\n\x1D\x03\x1D\x03\x1D\x05\x1D\u027E" +
    "\n\x1D\x03\x1D\x05\x1D\u0281\n\x1D\x03\x1D\x05\x1D\u0284\n\x1D\x03\x1D" +
    "\x07\x1D\u0287\n\x1D\f\x1D\x0E\x1D\u028A\v\x1D\x03\x1E\x03\x1E\x03\x1E" +
    "\x06\x1E\u028F\n\x1E\r\x1E\x0E\x1E\u0290\x03\x1E\x03\x1E\x03\x1E\x06\x1E" +
    "\u0296\n\x1E\r\x1E\x0E\x1E\u0297\x05\x1E\u029A\n\x1E\x03\x1F\x03\x1F\x05" +
    "\x1F\u029E\n\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u02A7\n \x03" +
    " \x03 \x05 \u02AB\n \x03 \x03 \x05 \u02AF\n \x03 \x03 \x03 \x05 \u02B4" +
    "\n \x03 \x03 \x05 \u02B8\n \x03 \x07 \u02BB\n \f \x0E \u02BE\v \x03!\x03" +
    "!\x03!\x03\"\x03\"\x05\"\u02C5\n\"\x03\"\x05\"\u02C8\n\"\x03\"\x05\"\u02CB" +
    "\n\"\x03\"\x05\"\u02CE\n\"\x03\"\x03\"\x05\"\u02D2\n\"\x03\"\x05\"\u02D5" +
    "\n\"\x03\"\x05\"\u02D8\n\"\x03\"\x07\"\u02DB\n\"\f\"\x0E\"\u02DE\v\"\x03" +
    "\"\x05\"\u02E1\n\"\x03\"\x05\"\u02E4\n\"\x03\"\x05\"\u02E7\n\"\x03\"\x03" +
    "\"\x03#\x03#\x05#\u02ED\n#\x03#\x05#\u02F0\n#\x03#\x05#\u02F3\n#\x03#" +
    "\x05#\u02F6\n#\x03#\x05#\u02F9\n#\x03#\x05#\u02FC\n#\x03#\x05#\u02FF\n" +
    "#\x03#\x03#\x03$\x03$\x05$\u0305\n$\x03$\x03$\x05$\u0309\n$\x03$\x05$" +
    "\u030C\n$\x03$\x05$\u030F\n$\x03$\x07$\u0312\n$\f$\x0E$\u0315\v$\x03%" +
    "\x03%\x05%\u0319\n%\x03%\x03%\x05%\u031D\n%\x03%\x03%\x03%\x03%\x05%\u0323" +
    "\n%\x03%\x03%\x05%\u0327\n%\x03%\x03%\x05%\u032B\n%\x03&\x03&\x05&\u032F" +
    "\n&\x03&\x05&\u0332\n&\x03&\x05&\u0335\n&\x03&\x05&\u0338\n&\x03&\x05" +
    "&\u033B\n&\x03&\x05&\u033E\n&\x03&\x05&\u0341\n&\x03&\x03&\x05&\u0345" +
    "\n&\x03&\x05&\u0348\n&\x03&\x05&\u034B\n&\x03&\x03&\x05&\u034F\n&\x03" +
    "&\x05&\u0352\n&\x03&\x05&\u0355\n&\x03&\x03&\x05&\u0359\n&\x03&\x03&\x05" +
    "&\u035D\n&\x03&\x05&\u0360\n&\x03&\x05&\u0363\n&\x03&\x03&\x05&\u0367" +
    "\n&\x03&\x05&\u036A\n&\x03&\x05&\u036D\n&\x03&\x03&\x05&\u0371\n&\x05" +
    "&\u0373\n&\x03\'\x03\'\x03(\x03(\x05(\u0379\n(\x03(\x03(\x05(\u037D\n" +
    "(\x03(\x03(\x03)\x03)\x03*\x03*\x07*\u0385\n*\f*\x0E*\u0388\v*\x03*\x03" +
    "*\x07*\u038C\n*\f*\x0E*\u038F\v*\x05*\u0391\n*\x03+\x05+\u0394\n+\x03" +
    "+\x06+\u0397\n+\r+\x0E+\u0398\x03+\x03+\x03+\x07+\u039E\n+\f+\x0E+\u03A1" +
    "\v+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u03AC\n,\x03-\x03" +
    "-\x05-\u03B0\n-\x03.\x03.\x03.\x06.\u03B5\n.\r.\x0E.\u03B6\x03/\x03/\x03" +
    "/\x03/\x05/\u03BD\n/\x03/\x03/\x030\x030\x031\x061\u03C4\n1\r1\x0E1\u03C5" +
    "\x032\x032\x072\u03CA\n2\f2\x0E2\u03CD\v2\x032\x032\x033\x033\x033\x03" +
    "3\x073\u03D5\n3\f3\x0E3\u03D8\v3\x053\u03DA\n3\x034\x034\x034\x02\x02" +
    "\x05\x1A8>5\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
    "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
    "&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
    "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
    "^\x02`\x02b\x02d\x02f\x02\x02\t\x03\x02\v\f\x03\x02\x18\x19\x04\x02\x11" +
    "\x11\x18\x18\x03\x02\x11\x12\x03\x02\x0F\x10\x04\x02\x03\x03\x06\t\x05" +
    "\x02\n\r\x12\x12\x14\x14\u0490\x02o\x03\x02\x02\x02\x04t\x03\x02\x02\x02" +
    "\x06y\x03\x02\x02\x02\b{\x03\x02\x02\x02\n\u0122\x03\x02\x02\x02\f\u0124" +
    "\x03\x02\x02\x02\x0E\u012A\x03\x02\x02\x02\x10\u013A\x03\x02\x02\x02\x12" +
    "\u013C\x03\x02\x02\x02\x14\u0140\x03\x02\x02\x02\x16\u0142\x03\x02\x02" +
    "\x02\x18\u0144\x03\x02\x02\x02\x1A\u014F\x03\x02\x02\x02\x1C\u01B1\x03" +
    "\x02\x02\x02\x1E\u01B3\x03\x02\x02\x02 \u01C1\x03\x02\x02\x02\"\u01CD" +
    "\x03\x02\x02\x02$\u01D9\x03\x02\x02\x02&\u01EA\x03\x02\x02\x02(\u01EE" +
    "\x03\x02\x02\x02*\u01F0\x03\x02\x02\x02,\u01F2\x03\x02\x02\x02.\u01FC" +
    "\x03\x02\x02\x020\u01FF\x03\x02\x02\x022\u0217\x03\x02\x02\x024\u022B" +
    "\x03\x02\x02\x026\u0266\x03\x02\x02\x028\u026F\x03\x02\x02\x02:\u0299" +
    "\x03\x02\x02\x02<\u029D\x03\x02\x02\x02>\u02A6\x03\x02\x02\x02@\u02BF" +
    "\x03\x02\x02\x02B\u02C2\x03\x02\x02\x02D\u02EA\x03\x02\x02\x02F\u0302" +
    "\x03\x02\x02\x02H\u032A\x03\x02\x02\x02J\u0372\x03\x02\x02\x02L\u0374" +
    "\x03\x02\x02\x02N\u0376\x03\x02\x02\x02P\u0380\x03\x02\x02\x02R\u0390" +
    "\x03\x02\x02\x02T\u0393\x03\x02\x02\x02V\u03AB\x03\x02\x02\x02X\u03AF" +
    "\x03\x02\x02\x02Z\u03B4\x03\x02\x02\x02\\\u03B8\x03\x02\x02\x02^\u03C0" +
    "\x03\x02\x02\x02`\u03C3\x03\x02\x02\x02b\u03C7\x03\x02\x02\x02d\u03D9" +
    "\x03\x02\x02\x02f\u03DB\x03\x02\x02\x02hp\x07\x02\x02\x03ik\x05\x04\x03" +
    "\x02jl\x07\v\x02\x02kj\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03\x02\x02" +
    "\x02mn\x07\x02\x02\x03np\x03\x02\x02\x02oh\x03\x02\x02\x02oi\x03\x02\x02" +
    "\x02p\x03\x03\x02\x02\x02qs\x05\x06\x04\x02rq\x03\x02\x02\x02sv\x03\x02" +
    "\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02uw\x03\x02\x02\x02vt\x03\x02" +
    "\x02\x02wx\x05\b\x05\x02x\x05\x03\x02\x02\x02yz\t\x02\x02\x02z\x07\x03" +
    "\x02\x02\x02{\x80\x05\n\x06\x02|}\x07\v\x02\x02}\x7F\x05\n\x06\x02~|\x03" +
    "\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03" +
    "\x02\x02\x02\x81\t\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83\u0123\x05" +
    "\f\x07\x02\x84\x85\x05\f\x07\x02\x85\x87\x07\f\x02\x02\x86\x88\x07\v\x02" +
    "\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03\x02\x02" +
    "\x02\x89\x8A\x07\x10\x02\x02\x8A\x8B\x07\f\x02\x02\x8B\x8C\x05P)\x02\x8C" +
    "\u0123\x03\x02\x02\x02\x8D\x8E\x05\f\x07\x02\x8E\x8F\x07\f\x02\x02\x8F" +
    "\x90\x05\x0E\b\x02\x90\u0123\x03\x02\x02\x02\x91\x92\x05\f\x07\x02\x92" +
    "\x93\x07\f\x02\x02\x93\x95\x05\x0E\b\x02\x94\x96\x07\f\x02\x02\x95\x94" +
    "\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99" +
    "\x07\x16\x02\x02\x98\x9A\x07\f\x02\x02\x99\x98\x03\x02\x02\x02\x99\x9A" +
    "\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x05> \x02\x9C\u0123\x03" +
    "\x02\x02\x02\x9D\x9E\x05\f\x07\x02\x9E\x9F\x07\f\x02\x02\x9F\xA0\x05\x0E" +
    "\b\x02\xA0\xA2\x07\f\x02\x02\xA1\xA3\x07\v\x02\x02\xA2\xA1\x03\x02\x02" +
    "\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x07\x10\x02" +
    "\x02\xA5\xA6\x07\f\x02\x02\xA6\xA7\x05P)\x02\xA7\u0123\x03\x02\x02\x02" +
    "\xA8\xA9\x05\f\x07\x02\xA9\xAA\x07\f\x02\x02\xAA\xAB\x05\x0E\b\x02\xAB" +
    "\xAC\x07\f\x02\x02\xAC\xAE\x07\x16\x02\x02\xAD\xAF\x07\f\x02\x02\xAE\xAD" +
    "\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1" +
    "\x05> \x02\xB1\xB3\x07\f\x02\x02\xB2\xB4\x07\v\x02\x02\xB3\xB2\x03\x02" +
    "\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x07\x10" +
    "\x02\x02\xB6\xB7\x07\f\x02\x02\xB7\xB8\x05P)\x02\xB8\u0123\x03\x02\x02" +
    "\x02\xB9\xBA\x05\f\x07\x02\xBA\xBB\x07\f\x02\x02\xBB\xBD\x05\x0E\b\x02" +
    "\xBC\xBE\x07\f\x02\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02" +
    "\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x07\x13\x02\x02\xC0\xC2\x07\f\x02\x02" +
    "\xC1\xC0\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02" +
    "\xC3\xC4\x05\x1A\x0E\x02\xC4\u0123\x03\x02\x02\x02\xC5\xC6\x05\f\x07\x02" +
    "\xC6\xC7\x07\f\x02\x02\xC7\xC9\x05\x0E\b\x02\xC8\xCA\x07\f\x02\x02\xC9" +
    "\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB" +
    "\xCD\x07\x13\x02\x02\xCC\xCE\x07\f\x02\x02\xCD\xCC\x03\x02\x02\x02\xCD" +
    "\xCE\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x05\x1A\x0E\x02\xD0" +
    "\xD2\x07\f\x02\x02\xD1\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2" +
    "\xD3\x03\x02\x02\x02\xD3\xD5\x07\x16\x02\x02\xD4\xD6\x07\f\x02\x02\xD5" +
    "\xD4\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7" +
    "\xD8\x05> \x02\xD8\u0123\x03\x02\x02\x02\xD9\xDA\x05\f\x07\x02\xDA\xDB" +
    "\x07\f\x02\x02\xDB\xDD\x05\x0E\b\x02\xDC\xDE\x07\f\x02\x02\xDD\xDC\x03" +
    "\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE1\x07" +
    "\x13\x02\x02\xE0\xE2\x07\f\x02\x02\xE1\xE0\x03\x02\x02\x02\xE1\xE2\x03" +
    "\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x05\x1A\x0E\x02\xE4\xE6\x07" +
    "\f\x02\x02\xE5\xE7\x07\v\x02\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02" +
    "\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x07\x10\x02\x02\xE9\xEA\x07\f" +
    "\x02\x02\xEA\xEB\x05P)\x02\xEB\u0123\x03\x02\x02\x02\xEC\xED\x05\f\x07" +
    "\x02\xED\xEE\x07\f\x02\x02\xEE\xF0\x05\x0E\b\x02\xEF\xF1\x07\f\x02\x02" +
    "\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02" +
    "\xF2\xF4\x07\x13\x02\x02\xF3\xF5\x07\f\x02\x02\xF4\xF3\x03\x02\x02\x02" +
    "\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF8\x05\x1A\x0E\x02" +
    "\xF7\xF9\x07\f\x02\x02\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02" +
    "\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x07\x16\x02\x02\xFB\xFD\x07\f\x02\x02" +
    "\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02" +
    "\xFE\xFF\x05> \x02\xFF\u0101\x07\f\x02\x02\u0100\u0102\x07\v\x02\x02\u0101" +
    "\u0100\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103\x03\x02" +
    "\x02\x02\u0103\u0104\x07\x10\x02\x02\u0104\u0105\x07\f\x02\x02\u0105\u0106" +
    "\x05P)\x02\u0106\u0123\x03\x02\x02\x02\u0107\u0109\x05\f\x07\x02\u0108" +
    "\u010A\x07\f\x02\x02\u0109\u0108\x03\x02\x02\x02\u0109\u010A\x03\x02\x02" +
    "\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010D\x07\x13\x02\x02\u010C\u010E" +
    "\x07\f\x02\x02\u010D\u010C\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02" +
    "\u010E\u010F\x03\x02\x02\x02\u010F\u0110\x05\x1A\x0E\x02\u0110\u0123\x03" +
    "\x02\x02\x02\u0111\u0113\x05\f\x07\x02\u0112\u0114\x07\f\x02\x02\u0113" +
    "\u0112\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0115\x03\x02" +
    "\x02\x02\u0115\u0117\x07\x13\x02\x02\u0116\u0118\x07\f\x02\x02\u0117\u0116" +
    "\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02" +
    "\u0119\u011A\x05\x1A\x0E\x02\u011A\u011C\x07\f\x02\x02\u011B\u011D\x07" +
    "\v\x02\x02\u011C\u011B\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D" +
    "\u011E\x03\x02\x02\x02\u011E\u011F\x07\x10\x02\x02\u011F\u0120\x07\f\x02" +
    "\x02\u0120\u0121\x05P)\x02\u0121\u0123\x03\x02\x02\x02\u0122\x83\x03\x02" +
    "\x02\x02\u0122\x84\x03\x02\x02\x02\u0122\x8D\x03\x02\x02\x02\u0122\x91" +
    "\x03\x02\x02\x02\u0122\x9D\x03\x02\x02\x02\u0122\xA8\x03\x02\x02\x02\u0122" +
    "\xB9\x03\x02\x02\x02\u0122\xC5\x03\x02\x02\x02\u0122\xD9\x03\x02\x02\x02" +
    "\u0122\xEC\x03\x02\x02\x02\u0122\u0107\x03\x02\x02\x02\u0122\u0111\x03" +
    "\x02\x02\x02\u0123\v\x03\x02\x02\x02\u0124\u0125\x07\x0E\x02\x02\u0125" +
    "\u0126\x05\x16\f\x02\u0126\r\x03\x02\x02\x02\u0127\u012B\x05\x10\t\x02" +
    "\u0128\u012B\x05\x12\n\x02\u0129\u012B\x05\x16\f\x02\u012A\u0127\x03\x02" +
    "\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B" +
    "\x0F\x03\x02\x02\x02\u012C\u012F\x05\x12\n\x02\u012D\u012E\x07\x14\x02" +
    "\x02\u012E\u0130\x05\x14\v\x02\u012F\u012D\x03\x02\x02\x02\u0130\u0131" +
    "\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02" +
    "\u0132\u013B\x03\x02\x02\x02\u0133\u0136\x05\x16\f\x02\u0134\u0135\x07" +
    "\x14\x02\x02\u0135\u0137\x05\x14\v\x02\u0136\u0134\x03\x02\x02\x02\u0137" +
    "\u0138\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0139\x03\x02" +
    "\x02\x02\u0139\u013B\x03\x02\x02\x02\u013A\u012C\x03\x02\x02\x02\u013A" +
    "\u0133\x03\x02\x02\x02\u013B\x11\x03\x02\x02\x02\u013C\u013D\x05\x18\r" +
    "\x02\u013D\x13\x03\x02\x02\x02\u013E\u0141\x05\x12\n\x02\u013F\u0141\x05" +
    "\x16\f\x02\u0140\u013E\x03\x02\x02\x02\u0140\u013F\x03\x02\x02\x02\u0141" +
    "\x15\x03\x02\x02\x02\u0142\u0143\x07\n\x02\x02\u0143\x17\x03\x02\x02\x02" +
    "\u0144\u0145\x05\x16\f\x02\u0145\u0146\x07\x17\x02\x02\u0146\x19\x03\x02" +
    "\x02\x02\u0147\u0148\b\x0E\x01\x02\u0148\u0150\x05\x1C\x0F\x02\u0149\u0150" +
    "\x05\"\x12\x02\u014A\u0150\x05&\x14\x02\u014B\u0150\x05,\x17\x02\u014C" +
    "\u0150\x05.\x18\x02\u014D\u0150\x050\x19\x02\u014E\u0150\x056\x1C\x02" +
    "\u014F\u0147\x03\x02\x02\x02\u014F\u0149\x03\x02\x02\x02\u014F\u014A\x03" +
    "\x02\x02\x02\u014F\u014B\x03\x02\x02\x02\u014F\u014C\x03\x02\x02\x02\u014F" +
    "\u014D\x03\x02\x02\x02\u014F\u014E\x03\x02\x02\x02\u0150\u0168\x03\x02" +
    "\x02\x02\u0151\u0153\f\n\x02\x02\u0152\u0154\x07\f\x02\x02\u0153\u0152" +
    "\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0156\x03\x02\x02\x02" +
    "\u0155\u0157\x07\v\x02\x02\u0156\u0155\x03\x02\x02\x02\u0156\u0157\x03" +
    "\x02\x02\x02\u0157\u0159\x03\x02\x02\x02\u0158\u015A\x07\f\x02\x02\u0159" +
    "\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x03\x02" +
    "\x02\x02\u015B\u015D\t\x03\x02\x02\u015C\u015E\x07\f\x02\x02\u015D\u015C" +
    "\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0160\x03\x02\x02\x02" +
    "\u015F\u0161\x07\v\x02\x02\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03" +
    "\x02\x02\x02\u0161\u0163\x03\x02\x02\x02\u0162\u0164\x07\f\x02\x02\u0163" +
    "\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x03\x02" +
    "\x02\x02\u0165\u0167\x05\x1A\x0E\v\u0166\u0151\x03\x02\x02\x02\u0167\u016A" +
    "\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02" +
    "\u0169\x1B\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B\u016D\x07" +
    "\x1F\x02\x02\u016C\u016E\x07\f\x02\x02\u016D\u016C\x03\x02\x02\x02\u016D" +
    "\u016E\x03\x02\x02\x02\u016E\u0170\x03\x02\x02\x02\u016F\u0171\x07\v\x02" +
    "\x02\u0170\u016F\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0173" +
    "\x03\x02\x02\x02\u0172\u0174\x07\f\x02\x02\u0173\u0172\x03\x02\x02\x02" +
    "\u0173\u0174\x03\x02\x02\x02\u0174\u0176\x03\x02\x02\x02\u0175\u0177\x05" +
    "\x1E\x10\x02\u0176\u0175\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177" +
    "\u0179\x03\x02\x02\x02\u0178\u017A\x07\f\x02\x02\u0179\u0178\x03\x02\x02" +
    "\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B\u017D" +
    "\x07\v\x02\x02\u017C\u017B\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02" +
    "\u017D\u017F\x03\x02\x02\x02\u017E\u0180\x07\f\x02\x02\u017F\u017E\x03" +
    "\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181" +
    "\u0183\x07 \x02\x02\u0182\u0184\x07\f\x02\x02\u0183\u0182\x03\x02\x02" +
    "\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0186\x03\x02\x02\x02\u0185\u0187" +
    "\x07\v\x02\x02\u0186\u0185\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02" +
    "\u0187\u0189\x03\x02\x02\x02\u0188\u018A\x07\f\x02\x02\u0189\u0188\x03" +
    "\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B" +
    "\u018D\x07\x1A\x02\x02\u018C\u018E\x07\f\x02\x02\u018D\u018C\x03\x02\x02" +
    "\x02\u018D\u018E\x03\x02\x02\x02\u018E\u0190\x03\x02\x02\x02\u018F\u0191" +
    "\x07\v\x02\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02" +
    "\u0191\u0193\x03\x02\x02\x02\u0192\u0194\x07\f\x02\x02\u0193\u0192\x03" +
    "\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195" +
    "\u0197\x05\x1A\x0E\x02\u0196\u0198\x07\x17\x02\x02\u0197\u0196\x03\x02" +
    "\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u01B2\x03\x02\x02\x02\u0199" +
    "\u019B\x05 \x11\x02\u019A\u019C\x07\f\x02\x02\u019B\u019A\x03\x02\x02" +
    "\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019E\x03\x02\x02\x02\u019D\u019F" +
    "\x07\v\x02\x02\u019E\u019D\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02" +
    "\u019F\u01A1\x03\x02\x02\x02\u01A0\u01A2\x07\f\x02\x02\u01A1\u01A0\x03" +
    "\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2";
XDocSyntaxParser._serializedATNSegment1 = "\u01A3\x03\x02\x02\x02\u01A3\u01A5\x07\x1A\x02\x02\u01A4\u01A6\x07\f\x02" +
    "\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A8" +
    "\x03\x02\x02\x02\u01A7\u01A9\x07\v\x02\x02\u01A8\u01A7\x03\x02\x02\x02" +
    "\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02\u01AA\u01AC\x07" +
    "\f\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC" +
    "\u01AD\x03\x02\x02\x02\u01AD\u01AF\x05\x1A\x0E\x02\u01AE\u01B0\x07\x17" +
    "\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0" +
    "\u01B2\x03\x02\x02\x02\u01B1\u016B\x03\x02\x02\x02\u01B1\u0199\x03\x02" +
    "\x02\x02\u01B2\x1D\x03\x02\x02\x02\u01B3\u01BE\x05 \x11\x02\u01B4\u01B6" +
    "\x07\x15\x02\x02\u01B5\u01B7\x07\v\x02\x02\u01B6\u01B5\x03\x02\x02\x02" +
    "\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B9\x03\x02\x02\x02\u01B8\u01BA\x07" +
    "\f\x02\x02\u01B9\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA" +
    "\u01BB\x03\x02\x02\x02\u01BB\u01BD\x05 \x11\x02\u01BC\u01B4\x03\x02\x02" +
    "\x02\u01BD\u01C0\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF" +
    "\x03\x02\x02\x02\u01BF\x1F\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02" +
    "\u01C1\u01CA\x05\x16\f\x02\u01C2\u01C4\x07\f\x02\x02\u01C3\u01C2\x03\x02" +
    "\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5" +
    "\u01C7\x07\x13\x02\x02\u01C6\u01C8\x07\f\x02\x02\u01C7\u01C6\x03\x02\x02" +
    "\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CB" +
    "\x05\x1A\x0E\x02\u01CA\u01C3\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02" +
    "\u01CB!\x03\x02\x02\x02\u01CC\u01CE\x05\x16\f\x02\u01CD\u01CC\x03\x02" +
    "\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF" +
    "\u01D1\x07#\x02\x02\u01D0\u01D2\x07\f\x02\x02\u01D1\u01D0\x03\x02\x02" +
    "\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D5" +
    "\x05$\x13\x02\u01D4\u01D6\x07\f\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D5" +
    "\u01D6\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8\x07$\x02" +
    "\x02\u01D8#\x03\x02\x02\x02\u01D9\u01DB\x05\x1A\x0E\x02\u01DA\u01DC\x07" +
    "\f\x02\x02\u01DB\u01DA\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC" +
    "\u01E4\x03\x02\x02\x02\u01DD\u01DF\x07\x15\x02\x02\u01DE\u01E0\x07\f\x02" +
    "\x02\u01DF\u01DE\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E1" +
    "\x03\x02\x02\x02\u01E1\u01E3\x05\x1A\x0E\x02\u01E2\u01DD\x03\x02\x02\x02" +
    "\u01E3\u01E6\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03" +
    "\x02\x02\x02\u01E5%\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7" +
    "\u01EB\x05\x18\r\x02\u01E8\u01EB\x05:\x1E\x02\u01E9\u01EB\x05(\x15\x02" +
    "\u01EA\u01E7\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01E9\x03" +
    "\x02\x02\x02\u01EB\'\x03\x02\x02\x02\u01EC\u01EF\x05\x16\f\x02\u01ED\u01EF" +
    "\x05*\x16\x02\u01EE\u01EC\x03\x02\x02\x02\u01EE\u01ED\x03\x02\x02\x02" +
    "\u01EF)\x03\x02\x02\x02\u01F0\u01F1\x07\t\x02\x02\u01F1+\x03\x02\x02\x02" +
    "\u01F2\u01F4\x07\x1F\x02\x02\u01F3\u01F5\x07\f\x02\x02\u01F4\u01F3\x03" +
    "\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6" +
    "\u01F8\x05\x1A\x0E\x02\u01F7\u01F9\x07\f\x02\x02\u01F8\u01F7\x03\x02\x02" +
    "\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FB" +
    "\x07 \x02\x02\u01FB-\x03\x02\x02\x02\u01FC\u01FD\t\x04\x02\x02\u01FD\u01FE" +
    "\x05&\x14\x02\u01FE/\x03\x02\x02\x02\u01FF\u0201\x07\x1D\x02\x02\u0200" +
    "\u0202\x07\f\x02\x02\u0201\u0200\x03\x02\x02\x02\u0201\u0202\x03\x02\x02" +
    "\x02\u0202\u0204\x03\x02\x02\x02\u0203\u0205\x07\v\x02\x02\u0204\u0203" +
    "\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0207\x03\x02\x02\x02" +
    "\u0206\u0208\x07\f\x02\x02\u0207\u0206\x03\x02\x02\x02\u0207\u0208\x03" +
    "\x02\x02\x02\u0208\u020A\x03\x02\x02\x02\u0209\u020B\x052\x1A\x02\u020A" +
    "\u0209\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020D\x03\x02" +
    "\x02\x02\u020C\u020E\x07\f\x02\x02\u020D\u020C\x03\x02\x02\x02\u020D\u020E" +
    "\x03\x02\x02\x02\u020E\u0210\x03\x02\x02\x02\u020F\u0211\x07\v\x02\x02" +
    "\u0210\u020F\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0213\x03" +
    "\x02\x02\x02\u0212\u0214\x07\f\x02\x02\u0213\u0212\x03\x02\x02\x02\u0213" +
    "\u0214\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0216\x07\x1E" +
    "\x02\x02\u02161\x03\x02\x02\x02\u0217\u0219\x054\x1B\x02\u0218\u021A\x07" +
    "\f\x02\x02\u0219\u0218\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A" +
    "\u0228\x03\x02\x02\x02\u021B\u021D\x07\x15\x02\x02\u021C\u021E\x07\f\x02" +
    "\x02\u021D\u021C\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u0220" +
    "\x03\x02\x02\x02\u021F\u0221\x07\v\x02\x02\u0220\u021F\x03\x02\x02\x02" +
    "\u0220\u0221\x03\x02\x02\x02\u0221\u0223\x03\x02\x02\x02\u0222\u0224\x07" +
    "\f\x02\x02\u0223\u0222\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224" +
    "\u0225\x03\x02\x02\x02\u0225\u0227\x054\x1B\x02\u0226\u021B\x03\x02\x02" +
    "\x02\u0227\u022A\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229" +
    "\x03\x02\x02\x02\u02293\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B" +
    "\u022D\x05\x1A\x0E\x02\u022C\u022E\x07\x17\x02\x02\u022D\u022C\x03\x02" +
    "\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\u0230\x03\x02\x02\x02\u022F" +
    "\u0231\x07\f\x02\x02\u0230\u022F\x03\x02\x02\x02\u0230\u0231\x03\x02\x02" +
    "\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0234\x07\x13\x02\x02\u0233\u0235" +
    "\x07\f\x02\x02\u0234\u0233\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02" +
    "\u0235\u0236\x03\x02\x02\x02\u0236\u0237\x05\x1A\x0E\x02\u02375\x03\x02" +
    "\x02\x02\u0238\u023A\x07!\x02\x02\u0239\u023B\x07\v\x02\x02\u023A\u0239" +
    "\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023D\x03\x02\x02\x02" +
    "\u023C\u023E\x07\f\x02\x02\u023D\u023C\x03\x02\x02\x02\u023D\u023E\x03" +
    "\x02\x02\x02\u023E\u0240\x03\x02\x02\x02\u023F\u0241\x07\v\x02\x02\u0240" +
    "\u023F\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u0243\x03\x02" +
    "\x02\x02\u0242\u0244\x05\x1A\x0E\x02\u0243\u0242\x03\x02\x02\x02\u0243" +
    "\u0244\x03\x02\x02\x02\u0244\u0252\x03\x02\x02\x02\u0245\u0247\x07\x15" +
    "\x02\x02\u0246\u0248\x07\v\x02\x02\u0247\u0246\x03\x02\x02\x02\u0247\u0248" +
    "\x03\x02\x02\x02\u0248\u024A\x03\x02\x02\x02\u0249\u024B\x07\f\x02\x02" +
    "\u024A\u0249\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024D\x03" +
    "\x02\x02\x02\u024C\u024E\x07\v\x02\x02\u024D\u024C\x03\x02\x02\x02\u024D" +
    "\u024E\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0251\x05\x1A" +
    "\x0E\x02\u0250\u0245\x03\x02\x02\x02\u0251\u0254\x03\x02\x02\x02\u0252" +
    "\u0250\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0256\x03\x02" +
    "\x02\x02\u0254\u0252\x03\x02\x02\x02\u0255\u0257\x07\v\x02\x02\u0256\u0255" +
    "\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0259\x03\x02\x02\x02" +
    "\u0258\u025A\x07\f\x02\x02\u0259\u0258\x03\x02\x02\x02\u0259\u025A\x03" +
    "\x02\x02\x02\u025A\u025C\x03\x02\x02\x02\u025B\u025D\x07\v\x02\x02\u025C" +
    "\u025B\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025E\x03\x02" +
    "\x02\x02\u025E\u0267\x07\"\x02\x02\u025F\u0262\x058\x1D\x02\u0260\u0261" +
    "\x07!\x02\x02\u0261\u0263\x07\"\x02\x02\u0262\u0260\x03\x02\x02\x02\u0263" +
    "\u0264\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0264\u0265\x03\x02" +
    "\x02\x02\u0265\u0267\x03\x02\x02\x02\u0266\u0238\x03\x02\x02\x02\u0266" +
    "\u025F\x03\x02\x02\x02\u02677\x03\x02\x02\x02\u0268\u0269\b\x1D\x01\x02" +
    "\u0269\u0270\x05\x1C\x0F\x02\u026A\u0270\x05\"\x12\x02\u026B\u0270\x05" +
    "&\x14\x02\u026C\u0270\x05,\x17\x02\u026D\u0270\x05.\x18\x02\u026E\u0270" +
    "\x050\x19\x02\u026F\u0268\x03\x02\x02\x02\u026F\u026A\x03\x02\x02\x02" +
    "\u026F\u026B\x03\x02\x02\x02\u026F\u026C\x03\x02\x02\x02\u026F\u026D\x03" +
    "\x02\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270\u0288\x03\x02\x02\x02\u0271" +
    "\u0273\f\t\x02\x02\u0272\u0274\x07\f\x02\x02\u0273\u0272\x03\x02\x02\x02" +
    "\u0273\u0274\x03\x02\x02\x02\u0274\u0276\x03\x02\x02\x02\u0275\u0277\x07" +
    "\v\x02\x02\u0276\u0275\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277" +
    "\u0279\x03\x02\x02\x02\u0278\u027A\x07\f\x02\x02\u0279\u0278\x03\x02\x02" +
    "\x02\u0279\u027A\x03\x02\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B\u027D" +
    "\t\x03\x02\x02\u027C\u027E\x07\f\x02\x02\u027D\u027C\x03\x02\x02\x02\u027D" +
    "\u027E\x03\x02\x02\x02\u027E\u0280\x03\x02\x02\x02\u027F\u0281\x07\v\x02" +
    "\x02\u0280\u027F\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0283" +
    "\x03\x02\x02\x02\u0282\u0284\x07\f\x02\x02\u0283\u0282\x03\x02\x02\x02" +
    "\u0283\u0284\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0287\x05" +
    "8\x1D\n\u0286\u0271\x03\x02\x02\x02\u0287\u028A\x03\x02\x02\x02\u0288" +
    "\u0286\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u02899\x03\x02\x02" +
    "\x02\u028A\u0288\x03\x02\x02\x02\u028B\u028E\x05\x16\f\x02\u028C\u028D" +
    "\x07\x14\x02\x02\u028D\u028F\x05<\x1F\x02\u028E\u028C\x03\x02\x02\x02" +
    "\u028F\u0290\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02\u0290\u0291\x03" +
    "\x02\x02\x02\u0291\u029A\x03\x02\x02\x02\u0292\u0295\x05\x18\r\x02\u0293" +
    "\u0294\x07\x14\x02\x02\u0294\u0296\x05<\x1F\x02\u0295\u0293\x03\x02\x02" +
    "\x02\u0296\u0297\x03\x02\x02\x02\u0297\u0295\x03\x02\x02\x02\u0297\u0298" +
    "\x03\x02\x02\x02\u0298\u029A\x03\x02\x02\x02\u0299\u028B\x03\x02\x02\x02" +
    "\u0299\u0292\x03\x02\x02\x02\u029A;\x03\x02\x02\x02\u029B\u029E\x05\x16" +
    "\f\x02\u029C\u029E\x05\x18\r\x02\u029D\u029B\x03\x02\x02\x02\u029D\u029C" +
    "\x03\x02\x02\x02\u029E=\x03\x02\x02\x02\u029F\u02A0\b \x01\x02\u02A0\u02A7" +
    "\x05@!\x02\u02A1\u02A7\x05B\"\x02\u02A2\u02A7\x05D#\x02\u02A3\u02A7\x05" +
    "J&\x02\u02A4\u02A7\x05L\'\x02\u02A5\u02A7\x05N(\x02\u02A6\u029F\x03\x02" +
    "\x02\x02\u02A6\u02A1\x03\x02\x02\x02\u02A6\u02A2\x03\x02\x02\x02\u02A6" +
    "\u02A3\x03\x02\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A6\u02A5\x03\x02" +
    "\x02\x02\u02A7\u02BC\x03\x02\x02\x02\u02A8\u02AA\f\t\x02\x02\u02A9\u02AB" +
    "\x07\f\x02\x02\u02AA\u02A9\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02" +
    "\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AE\t\x05\x02\x02\u02AD\u02AF\x07" +
    "\f\x02\x02\u02AE\u02AD\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF" +
    "\u02B0\x03\x02\x02\x02\u02B0\u02BB\x05> \n\u02B1\u02B3\f\b\x02\x02\u02B2" +
    "\u02B4\x07\f\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02" +
    "\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B7\t\x06\x02\x02\u02B6\u02B8" +
    "\x07\f\x02\x02\u02B7\u02B6\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02" +
    "\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BB\x05> \t\u02BA\u02A8\x03\x02\x02" +
    "\x02\u02BA\u02B1\x03\x02\x02\x02\u02BB\u02BE\x03\x02\x02\x02\u02BC\u02BA" +
    "\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD?\x03\x02\x02\x02\u02BE" +
    "\u02BC\x03\x02\x02\x02\u02BF\u02C0\t\x06\x02\x02\u02C0\u02C1\x05> \x02" +
    "\u02C1A\x03\x02\x02\x02\u02C2\u02C4\x07!\x02\x02\u02C3\u02C5\x07\v\x02" +
    "\x02\u02C4\u02C3\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C7" +
    "\x03\x02\x02\x02\u02C6\u02C8\x07\f\x02\x02\u02C7\u02C6\x03\x02\x02\x02" +
    "\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02CA\x03\x02\x02\x02\u02C9\u02CB\x07" +
    "\v\x02\x02\u02CA\u02C9\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB" +
    "\u02CD\x03\x02\x02\x02\u02CC\u02CE\x05> \x02\u02CD\u02CC\x03\x02\x02\x02" +
    "\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02DC\x03\x02\x02\x02\u02CF\u02D1\x07" +
    "\x15\x02\x02\u02D0\u02D2\x07\v\x02\x02\u02D1\u02D0\x03\x02\x02\x02\u02D1" +
    "\u02D2\x03\x02\x02\x02\u02D2\u02D4\x03\x02\x02\x02\u02D3\u02D5\x07\f\x02" +
    "\x02\u02D4\u02D3\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02D7" +
    "\x03\x02\x02\x02\u02D6\u02D8\x07\v\x02\x02\u02D7\u02D6\x03\x02\x02\x02" +
    "\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DB\x05" +
    "> \x02\u02DA\u02CF\x03\x02\x02\x02\u02DB\u02DE\x03\x02\x02\x02\u02DC\u02DA" +
    "\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD\u02E0\x03\x02\x02\x02" +
    "\u02DE\u02DC\x03\x02\x02\x02\u02DF\u02E1\x07\v\x02\x02\u02E0\u02DF\x03" +
    "\x02\x02\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1\u02E3\x03\x02\x02\x02\u02E2" +
    "\u02E4\x07\f\x02\x02\u02E3\u02E2\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02" +
    "\x02\u02E4\u02E6\x03\x02\x02\x02\u02E5\u02E7\x07\v\x02\x02\u02E6\u02E5" +
    "\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02" +
    "\u02E8\u02E9\x07\"\x02\x02\u02E9C\x03\x02\x02\x02\u02EA\u02EC\x07\x1D" +
    "\x02\x02\u02EB\u02ED\x07\f\x02\x02\u02EC\u02EB\x03\x02\x02\x02\u02EC\u02ED" +
    "\x03\x02\x02\x02\u02ED\u02EF\x03\x02\x02\x02\u02EE\u02F0\x07\v\x02\x02" +
    "\u02EF\u02EE\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F2\x03" +
    "\x02\x02\x02\u02F1\u02F3\x07\f\x02\x02\u02F2\u02F1\x03\x02\x02\x02\u02F2" +
    "\u02F3\x03\x02\x02\x02\u02F3\u02F5\x03\x02\x02\x02\u02F4\u02F6\x05F$\x02" +
    "\u02F5\u02F4\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F8\x03" +
    "\x02\x02\x02\u02F7\u02F9\x07\f\x02\x02\u02F8\u02F7\x03\x02\x02\x02\u02F8" +
    "\u02F9\x03\x02\x02\x02\u02F9\u02FB\x03\x02\x02\x02\u02FA\u02FC\x07\v\x02" +
    "\x02\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC\u02FE" +
    "\x03\x02\x02\x02\u02FD\u02FF\x07\f\x02\x02\u02FE\u02FD\x03\x02\x02\x02" +
    "\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0301\x07" +
    "\x1E\x02\x02\u0301E\x03\x02\x02\x02\u0302\u0313\x05H%\x02\u0303\u0305" +
    "\x07\f\x02\x02\u0304\u0303\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02" +
    "\u0305\u0306\x03\x02\x02\x02\u0306\u0308\x07\x15\x02\x02\u0307\u0309\x07" +
    "\f\x02\x02\u0308\u0307\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309" +
    "\u030B\x03\x02\x02\x02\u030A\u030C\x07\v\x02\x02\u030B\u030A\x03\x02\x02" +
    "\x02\u030B\u030C\x03\x02\x02\x02\u030C\u030E\x03\x02\x02\x02\u030D\u030F" +
    "\x07\f\x02\x02\u030E\u030D\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02" +
    "\u030F\u0310\x03\x02\x02\x02\u0310\u0312\x05H%\x02\u0311\u0304\x03\x02" +
    "\x02\x02\u0312\u0315\x03\x02\x02\x02\u0313\u0311\x03\x02\x02\x02\u0313" +
    "\u0314\x03\x02\x02\x02\u0314G\x03\x02\x02\x02\u0315\u0313\x03\x02\x02" +
    "\x02\u0316\u0318\x05L\'\x02\u0317\u0319\x07\f\x02\x02\u0318\u0317\x03" +
    "\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A" +
    "\u031C\x07\x13\x02\x02\u031B\u031D\x07\f\x02\x02\u031C\u031B\x03\x02\x02" +
    "\x02\u031C\u031D\x03\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E\u031F" +
    "\x05D#\x02\u031F\u032B\x03\x02\x02\x02\u0320\u0322\x05L\'\x02\u0321\u0323" +
    "\x07\f\x02\x02\u0322\u0321\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02" +
    "\u0323\u0324\x03\x02\x02\x02\u0324\u0326\x07\x13\x02\x02\u0325\u0327\x07" +
    "\f\x02\x02\u0326\u0325\x03\x02\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327" +
    "\u0328\x03\x02\x02\x02\u0328\u0329\x05L\'\x02\u0329\u032B\x03\x02\x02" +
    "\x02\u032A\u0316\x03\x02\x02\x02\u032A\u0320\x03\x02\x02\x02\u032BI\x03" +
    "\x02\x02\x02\u032C\u032E\x07\x1F\x02\x02\u032D\u032F\x07\f\x02\x02\u032E" +
    "\u032D\x03\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0331\x03\x02" +
    "\x02\x02\u0330\u0332\x07\v\x02\x02\u0331\u0330\x03\x02\x02\x02\u0331\u0332" +
    "\x03\x02\x02\x02\u0332\u0334\x03\x02\x02\x02\u0333\u0335\x07\f\x02\x02" +
    "\u0334\u0333\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335\u0337\x03" +
    "\x02\x02\x02\u0336\u0338\x05\x1E\x10\x02\u0337\u0336\x03\x02\x02\x02\u0337" +
    "\u0338\x03\x02\x02\x02\u0338\u033A\x03\x02\x02\x02\u0339\u033B\x07\f\x02" +
    "\x02\u033A\u0339\x03\x02\x02\x02\u033A\u033B\x03\x02\x02\x02\u033B\u033D" +
    "\x03\x02\x02\x02\u033C\u033E\x07\v\x02\x02\u033D\u033C\x03\x02\x02\x02" +
    "\u033D\u033E\x03\x02\x02\x02\u033E\u0340\x03\x02\x02\x02\u033F\u0341\x07" +
    "\f\x02\x02\u0340\u033F\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341" +
    "\u0342\x03\x02\x02\x02\u0342\u0344\x07 \x02\x02\u0343\u0345\x07\f\x02" +
    "\x02\u0344\u0343\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345\u0347" +
    "\x03\x02\x02\x02\u0346\u0348\x07\v\x02\x02\u0347\u0346\x03\x02\x02\x02" +
    "\u0347\u0348\x03\x02\x02\x02\u0348\u034A\x03\x02\x02\x02\u0349\u034B\x07" +
    "\f\x02\x02\u034A\u0349\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034B" +
    "\u034C\x03\x02\x02\x02\u034C\u034E\x07\x1A\x02\x02\u034D\u034F\x07\f\x02" +
    "\x02\u034E\u034D\x03\x02\x02\x02\u034E\u034F\x03\x02\x02\x02\u034F\u0351" +
    "\x03\x02\x02\x02\u0350\u0352\x07\v\x02\x02\u0351\u0350\x03\x02\x02\x02" +
    "\u0351\u0352\x03\x02\x02\x02\u0352\u0354\x03\x02\x02\x02\u0353\u0355\x07" +
    "\f\x02\x02\u0354\u0353\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355" +
    "\u0356\x03\x02\x02\x02\u0356\u0358\x05\x1A\x0E\x02\u0357\u0359\x07\x17" +
    "\x02\x02\u0358\u0357\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359" +
    "\u0373\x03\x02\x02\x02\u035A\u035C\x05 \x11\x02\u035B\u035D\x07\f\x02" +
    "\x02\u035C\u035B\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035F" +
    "\x03\x02\x02\x02\u035E\u0360\x07\v\x02\x02\u035F\u035E\x03\x02\x02\x02" +
    "\u035F\u0360\x03\x02\x02\x02\u0360\u0362\x03\x02\x02\x02\u0361\u0363\x07" +
    "\f\x02\x02\u0362\u0361\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363" +
    "\u0364\x03\x02\x02\x02\u0364\u0366\x07\x1A\x02\x02\u0365\u0367\x07\f\x02" +
    "\x02\u0366\u0365\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02\u0367\u0369" +
    "\x03\x02\x02\x02\u0368\u036A\x07\v\x02\x02\u0369\u0368\x03\x02\x02\x02" +
    "\u0369\u036A\x03\x02\x02\x02\u036A\u036C\x03\x02\x02\x02\u036B\u036D\x07" +
    "\f\x02\x02\u036C\u036B\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036D" +
    "\u036E\x03\x02\x02\x02\u036E\u0370\x05\x1A\x0E\x02\u036F\u0371\x07\x17" +
    "\x02\x02\u0370\u036F\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371" +
    "\u0373\x03\x02\x02\x02\u0372\u032C\x03\x02\x02\x02\u0372\u035A\x03\x02" +
    "\x02\x02\u0373K\x03\x02\x02\x02\u0374\u0375\t\x07\x02\x02\u0375M\x03\x02" +
    "\x02\x02\u0376\u0378\x07\x1F\x02\x02\u0377\u0379\x07\f\x02\x02\u0378\u0377" +
    "\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02" +
    "\u037A\u037C\x05> \x02\u037B\u037D\x07\f\x02\x02\u037C\u037B\x03\x02\x02" +
    "\x02\u037C\u037D\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E\u037F" +
    "\x07 \x02\x02\u037FO\x03\x02\x02\x02\u0380\u0381\x05R*\x02\u0381Q\x03" +
    "\x02\x02\x02\u0382\u0386\x05T+\x02\u0383\u0385\x05X-\x02\u0384\u0383\x03" +
    "\x02\x02\x02\u0385\u0388\x03\x02\x02\x02\u0386\u0384\x03\x02\x02\x02\u0386" +
    "\u0387\x03\x02\x02\x02\u0387\u0391\x03\x02\x02\x02\u0388\u0386\x03\x02" +
    "\x02\x02\u0389\u038D\x05\\/\x02\u038A\u038C\x05X-\x02\u038B\u038A\x03" +
    "\x02\x02\x02\u038C\u038F\x03\x02\x02\x02\u038D\u038B\x03\x02\x02\x02\u038D" +
    "\u038E\x03\x02\x02\x02\u038E\u0391\x03\x02\x02\x02\u038F\u038D\x03\x02" +
    "\x02\x02\u0390\u0382\x03\x02\x02\x02\u0390\u0389\x03\x02\x02\x02\u0391" +
    "S\x03\x02\x02\x02\u0392\u0394\x07\f\x02\x02\u0393\u0392\x03\x02\x02\x02" +
    "\u0393\u0394\x03\x02\x02\x02\u0394\u0396\x03\x02\x02\x02\u0395\u0397\x05" +
    "V,\x02\u0396\u0395\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u0396" +
    "\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u039F\x03\x02\x02\x02" +
    "\u039A\u039E\x05V,\x02\u039B\u039E\x07\f\x02\x02\u039C\u039E\x07\x0E\x02" +
    "\x02\u039D\u039A\x03\x02\x02\x02\u039D\u039B\x03\x02\x02\x02\u039D\u039C" +
    "\x03\x02\x02\x02\u039E\u03A1\x03\x02\x02\x02\u039F\u039D\x03\x02\x02\x02" +
    "\u039F\u03A0\x03\x02\x02\x02\u03A0U\x03\x02\x02\x02\u03A1\u039F\x03\x02" +
    "\x02\x02\u03A2\u03AC\x07\r\x02\x02\u03A3\u03AC\x07\n\x02\x02\u03A4\u03AC" +
    "\x07\x12\x02\x02\u03A5\u03AC\x07\x1D\x02\x02\u03A6\u03AC\x07\x1E\x02\x02" +
    "\u03A7\u03AC\x07\x13\x02\x02\u03A8\u03AC\x07\x10\x02\x02\u03A9\u03AC\x07" +
    "\x14\x02\x02\u03AA\u03AC\x05L\'\x02\u03AB\u03A2\x03\x02\x02\x02\u03AB" +
    "\u03A3\x03\x02\x02\x02\u03AB\u03A4\x03\x02\x02\x02\u03AB\u03A5\x03\x02" +
    "\x02\x02\u03AB\u03A6\x03\x02\x02\x02\u03AB\u03A7\x03\x02\x02\x02\u03AB" +
    "\u03A8\x03\x02\x02\x02\u03AB\u03A9\x03\x02\x02\x02\u03AB\u03AA\x03\x02" +
    "\x02\x02\u03ACW\x03\x02\x02\x02\u03AD\u03B0\x05\\/\x02\u03AE\u03B0\x05" +
    "Z.\x02\u03AF\u03AD\x03\x02\x02\x02\u03AF\u03AE\x03\x02\x02\x02\u03B0Y" +
    "\x03\x02\x02\x02\u03B1\u03B5\x05V,\x02\u03B2\u03B5\x07\f\x02\x02\u03B3" +
    "\u03B5\x07\x0E\x02\x02\u03B4\u03B1\x03\x02\x02\x02\u03B4\u03B2\x03\x02" +
    "\x02\x02\u03B4\u03B3\x03\x02\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6" +
    "\u03B4\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7[\x03\x02\x02" +
    "\x02\u03B8\u03B9\x07\x1C\x02\x02\u03B9\u03BA\x05^0\x02\u03BA\u03BC\x07" +
    "\f\x02\x02\u03BB\u03BD\x05`1\x02\u03BC\u03BB\x03\x02\x02\x02\u03BC\u03BD" +
    "\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03BF\x07\x1E\x02\x02" +
    "\u03BF]\x03\x02\x02\x02\u03C0\u03C1\x05\x16\f\x02\u03C1_\x03\x02\x02\x02" +
    "\u03C2\u03C4\x05d3\x02\u03C3\u03C2\x03\x02\x02\x02\u03C4\u03C5\x03\x02" +
    "\x02\x02\u03C5\u03C3\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6" +
    "a\x03\x02\x02\x02\u03C7\u03CB\x07\x1D\x02\x02\u03C8\u03CA\x05d3\x02\u03C9" +
    "\u03C8\x03\x02\x02\x02\u03CA\u03CD\x03\x02\x02\x02\u03CB\u03C9\x03\x02" +
    "\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC\u03CE\x03\x02\x02\x02\u03CD" +
    "\u03CB\x03\x02\x02\x02\u03CE\u03CF\x07\x1E\x02\x02\u03CFc\x03\x02\x02" +
    "\x02\u03D0\u03DA\x05b2\x02\u03D1\u03D6\x05f4\x02\u03D2\u03D3\x07\v\x02" +
    "\x02\u03D3\u03D5\x05f4\x02\u03D4\u03D2\x03\x02\x02\x02\u03D5\u03D8\x03" +
    "\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7" +
    "\u03DA\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D9\u03D0\x03\x02" +
    "\x02\x02\u03D9\u03D1\x03\x02\x02\x02\u03DAe\x03\x02\x02\x02\u03DB\u03DC" +
    "\t\b\x02\x02\u03DCg\x03\x02\x02\x02\xC6kot\x80\x87\x95\x99\xA2\xAE\xB3" +
    "\xBD\xC1\xC9\xCD\xD1\xD5\xDD\xE1\xE6\xF0\xF4\xF8\xFC\u0101\u0109\u010D" +
    "\u0113\u0117\u011C\u0122\u012A\u0131\u0138\u013A\u0140\u014F\u0153\u0156" +
    "\u0159\u015D\u0160\u0163\u0168\u016D\u0170\u0173\u0176\u0179\u017C\u017F" +
    "\u0183\u0186\u0189\u018D\u0190\u0193\u0197\u019B\u019E\u01A1\u01A5\u01A8" +
    "\u01AB\u01AF\u01B1\u01B6\u01B9\u01BE\u01C3\u01C7\u01CA\u01CD\u01D1\u01D5" +
    "\u01DB\u01DF\u01E4\u01EA\u01EE\u01F4\u01F8\u0201\u0204\u0207\u020A\u020D" +
    "\u0210\u0213\u0219\u021D\u0220\u0223\u0228\u022D\u0230\u0234\u023A\u023D" +
    "\u0240\u0243\u0247\u024A\u024D\u0252\u0256\u0259\u025C\u0264\u0266\u026F" +
    "\u0273\u0276\u0279\u027D\u0280\u0283\u0288\u0290\u0297\u0299\u029D\u02A6" +
    "\u02AA\u02AE\u02B3\u02B7\u02BA\u02BC\u02C4\u02C7\u02CA\u02CD\u02D1\u02D4" +
    "\u02D7\u02DC\u02E0\u02E3\u02E6\u02EC\u02EF\u02F2\u02F5\u02F8\u02FB\u02FE" +
    "\u0304\u0308\u030B\u030E\u0313\u0318\u031C\u0322\u0326\u032A\u032E\u0331" +
    "\u0334\u0337\u033A\u033D\u0340\u0344\u0347\u034A\u034E\u0351\u0354\u0358" +
    "\u035C\u035F\u0362\u0366\u0369\u036C\u0370\u0372\u0378\u037C\u0386\u038D" +
    "\u0390\u0393\u0398\u039D\u039F\u03AB\u03AF\u03B4\u03B6\u03BC\u03C5\u03CB" +
    "\u03D6\u03D9";
XDocSyntaxParser._serializedATN = Utils.join([
    XDocSyntaxParser._serializedATNSegment0,
    XDocSyntaxParser._serializedATNSegment1
], "");
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], XDocSyntaxParser.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], XDocSyntaxParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], XDocSyntaxParser.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], XDocSyntaxParser.prototype, "serializedATN", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "documentation", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "body", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "whitespace", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "annotations", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "tag", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "tagName", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "tagIdentifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "propertyTagIdentifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "optionalTagIdentifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "optionalTagOrIdentifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "identifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "optionalIdentifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "type", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "lambdaType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "formalParameterSequence", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "parameter", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "tupleType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "tupleTypeSequence", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "primaryType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "identifierOrKeyword", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "keyword", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "parenthesizedType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "unaryType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "objectType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "objectPairSequenceType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "objectPairType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "arrayType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "notArrayType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "propertyIdentifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "optionalIdentifierOrIdentifier", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "expression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "unaryExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "arrayExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "objectExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "objectPairSequenceExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "objectPairExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "lambdaExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "literalExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "parenthesizedExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "description", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "descriptionLine", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "descriptionLineStart", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "descriptionText", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "descriptionLineElement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "descriptionLineText", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "inlineTag", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "inlineTagName", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "inlineTagBody", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "braceExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "braceBody", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], XDocSyntaxParser.prototype, "braceText", null);
exports.XDocSyntaxParser = XDocSyntaxParser;
class DocumentationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() { return this.getToken(XDocSyntaxParser.EOF, 0); }
    body() {
        return this.tryGetRuleContext(0, BodyContext);
    }
    NEWLINE() { return this.tryGetToken(XDocSyntaxParser.NEWLINE, 0); }
    get ruleIndex() { return XDocSyntaxParser.RULE_documentation; }
    enterRule(listener) {
        if (listener.enterDocumentation)
            listener.enterDocumentation(this);
    }
    exitRule(listener) {
        if (listener.exitDocumentation)
            listener.exitDocumentation(this);
    }
    accept(visitor) {
        if (visitor.visitDocumentation)
            return visitor.visitDocumentation(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DocumentationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DocumentationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DocumentationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DocumentationContext.prototype, "accept", null);
exports.DocumentationContext = DocumentationContext;
class BodyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotations() {
        return this.getRuleContext(0, AnnotationsContext);
    }
    whitespace(i) {
        if (i === undefined) {
            return this.getRuleContexts(WhitespaceContext);
        }
        else {
            return this.getRuleContext(i, WhitespaceContext);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_body; }
    enterRule(listener) {
        if (listener.enterBody)
            listener.enterBody(this);
    }
    exitRule(listener) {
        if (listener.exitBody)
            listener.exitBody(this);
    }
    accept(visitor) {
        if (visitor.visitBody)
            return visitor.visitBody(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BodyContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BodyContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BodyContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BodyContext.prototype, "accept", null);
exports.BodyContext = BodyContext;
class WhitespaceContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SPACE() { return this.tryGetToken(XDocSyntaxParser.SPACE, 0); }
    NEWLINE() { return this.tryGetToken(XDocSyntaxParser.NEWLINE, 0); }
    get ruleIndex() { return XDocSyntaxParser.RULE_whitespace; }
    enterRule(listener) {
        if (listener.enterWhitespace)
            listener.enterWhitespace(this);
    }
    exitRule(listener) {
        if (listener.exitWhitespace)
            listener.exitWhitespace(this);
    }
    accept(visitor) {
        if (visitor.visitWhitespace)
            return visitor.visitWhitespace(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], WhitespaceContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], WhitespaceContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], WhitespaceContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], WhitespaceContext.prototype, "accept", null);
exports.WhitespaceContext = WhitespaceContext;
class AnnotationsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    tag(i) {
        if (i === undefined) {
            return this.getRuleContexts(TagContext);
        }
        else {
            return this.getRuleContext(i, TagContext);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.NEWLINE);
        }
        else {
            return this.getToken(XDocSyntaxParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_annotations; }
    enterRule(listener) {
        if (listener.enterAnnotations)
            listener.enterAnnotations(this);
    }
    exitRule(listener) {
        if (listener.exitAnnotations)
            listener.exitAnnotations(this);
    }
    accept(visitor) {
        if (visitor.visitAnnotations)
            return visitor.visitAnnotations(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AnnotationsContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AnnotationsContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AnnotationsContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AnnotationsContext.prototype, "accept", null);
exports.AnnotationsContext = AnnotationsContext;
class TagContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    tagName() {
        return this.getRuleContext(0, TagNameContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    MINUS() { return this.tryGetToken(XDocSyntaxParser.MINUS, 0); }
    description() {
        return this.tryGetRuleContext(0, DescriptionContext);
    }
    NEWLINE() { return this.tryGetToken(XDocSyntaxParser.NEWLINE, 0); }
    tagIdentifier() {
        return this.tryGetRuleContext(0, TagIdentifierContext);
    }
    EQUAL() { return this.tryGetToken(XDocSyntaxParser.EQUAL, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    COLON() { return this.tryGetToken(XDocSyntaxParser.COLON, 0); }
    type() {
        return this.tryGetRuleContext(0, TypeContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_tag; }
    enterRule(listener) {
        if (listener.enterTag)
            listener.enterTag(this);
    }
    exitRule(listener) {
        if (listener.exitTag)
            listener.exitTag(this);
    }
    accept(visitor) {
        if (visitor.visitTag)
            return visitor.visitTag(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TagContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TagContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TagContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TagContext.prototype, "accept", null);
exports.TagContext = TagContext;
class TagNameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    AT() { return this.getToken(XDocSyntaxParser.AT, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_tagName; }
    enterRule(listener) {
        if (listener.enterTagName)
            listener.enterTagName(this);
    }
    exitRule(listener) {
        if (listener.exitTagName)
            listener.exitTagName(this);
    }
    accept(visitor) {
        if (visitor.visitTagName)
            return visitor.visitTagName(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TagNameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TagNameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TagNameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TagNameContext.prototype, "accept", null);
exports.TagNameContext = TagNameContext;
class TagIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    propertyTagIdentifier() {
        return this.tryGetRuleContext(0, PropertyTagIdentifierContext);
    }
    optionalTagIdentifier() {
        return this.tryGetRuleContext(0, OptionalTagIdentifierContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_tagIdentifier; }
    enterRule(listener) {
        if (listener.enterTagIdentifier)
            listener.enterTagIdentifier(this);
    }
    exitRule(listener) {
        if (listener.exitTagIdentifier)
            listener.exitTagIdentifier(this);
    }
    accept(visitor) {
        if (visitor.visitTagIdentifier)
            return visitor.visitTagIdentifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TagIdentifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TagIdentifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TagIdentifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TagIdentifierContext.prototype, "accept", null);
exports.TagIdentifierContext = TagIdentifierContext;
class PropertyTagIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    optionalTagIdentifier() {
        return this.tryGetRuleContext(0, OptionalTagIdentifierContext);
    }
    PERIOD(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.PERIOD);
        }
        else {
            return this.getToken(XDocSyntaxParser.PERIOD, i);
        }
    }
    optionalTagOrIdentifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionalTagOrIdentifierContext);
        }
        else {
            return this.getRuleContext(i, OptionalTagOrIdentifierContext);
        }
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_propertyTagIdentifier; }
    enterRule(listener) {
        if (listener.enterPropertyTagIdentifier)
            listener.enterPropertyTagIdentifier(this);
    }
    exitRule(listener) {
        if (listener.exitPropertyTagIdentifier)
            listener.exitPropertyTagIdentifier(this);
    }
    accept(visitor) {
        if (visitor.visitPropertyTagIdentifier)
            return visitor.visitPropertyTagIdentifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PropertyTagIdentifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PropertyTagIdentifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PropertyTagIdentifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PropertyTagIdentifierContext.prototype, "accept", null);
exports.PropertyTagIdentifierContext = PropertyTagIdentifierContext;
class OptionalTagIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    optionalIdentifier() {
        return this.getRuleContext(0, OptionalIdentifierContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_optionalTagIdentifier; }
    enterRule(listener) {
        if (listener.enterOptionalTagIdentifier)
            listener.enterOptionalTagIdentifier(this);
    }
    exitRule(listener) {
        if (listener.exitOptionalTagIdentifier)
            listener.exitOptionalTagIdentifier(this);
    }
    accept(visitor) {
        if (visitor.visitOptionalTagIdentifier)
            return visitor.visitOptionalTagIdentifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OptionalTagIdentifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OptionalTagIdentifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OptionalTagIdentifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OptionalTagIdentifierContext.prototype, "accept", null);
exports.OptionalTagIdentifierContext = OptionalTagIdentifierContext;
class OptionalTagOrIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    optionalTagIdentifier() {
        return this.tryGetRuleContext(0, OptionalTagIdentifierContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_optionalTagOrIdentifier; }
    enterRule(listener) {
        if (listener.enterOptionalTagOrIdentifier)
            listener.enterOptionalTagOrIdentifier(this);
    }
    exitRule(listener) {
        if (listener.exitOptionalTagOrIdentifier)
            listener.exitOptionalTagOrIdentifier(this);
    }
    accept(visitor) {
        if (visitor.visitOptionalTagOrIdentifier)
            return visitor.visitOptionalTagOrIdentifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OptionalTagOrIdentifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OptionalTagOrIdentifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OptionalTagOrIdentifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OptionalTagOrIdentifierContext.prototype, "accept", null);
exports.OptionalTagOrIdentifierContext = OptionalTagOrIdentifierContext;
class IdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ID() { return this.getToken(XDocSyntaxParser.ID, 0); }
    get ruleIndex() { return XDocSyntaxParser.RULE_identifier; }
    enterRule(listener) {
        if (listener.enterIdentifier)
            listener.enterIdentifier(this);
    }
    exitRule(listener) {
        if (listener.exitIdentifier)
            listener.exitIdentifier(this);
    }
    accept(visitor) {
        if (visitor.visitIdentifier)
            return visitor.visitIdentifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], IdentifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], IdentifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], IdentifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], IdentifierContext.prototype, "accept", null);
exports.IdentifierContext = IdentifierContext;
class OptionalIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    QUESTION() { return this.getToken(XDocSyntaxParser.QUESTION, 0); }
    get ruleIndex() { return XDocSyntaxParser.RULE_optionalIdentifier; }
    enterRule(listener) {
        if (listener.enterOptionalIdentifier)
            listener.enterOptionalIdentifier(this);
    }
    exitRule(listener) {
        if (listener.exitOptionalIdentifier)
            listener.exitOptionalIdentifier(this);
    }
    accept(visitor) {
        if (visitor.visitOptionalIdentifier)
            return visitor.visitOptionalIdentifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OptionalIdentifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OptionalIdentifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OptionalIdentifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OptionalIdentifierContext.prototype, "accept", null);
exports.OptionalIdentifierContext = OptionalIdentifierContext;
class TypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    type(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    }
    PIPE() { return this.tryGetToken(XDocSyntaxParser.PIPE, 0); }
    AMP() { return this.tryGetToken(XDocSyntaxParser.AMP, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.NEWLINE);
        }
        else {
            return this.getToken(XDocSyntaxParser.NEWLINE, i);
        }
    }
    lambdaType() {
        return this.tryGetRuleContext(0, LambdaTypeContext);
    }
    tupleType() {
        return this.tryGetRuleContext(0, TupleTypeContext);
    }
    primaryType() {
        return this.tryGetRuleContext(0, PrimaryTypeContext);
    }
    parenthesizedType() {
        return this.tryGetRuleContext(0, ParenthesizedTypeContext);
    }
    unaryType() {
        return this.tryGetRuleContext(0, UnaryTypeContext);
    }
    objectType() {
        return this.tryGetRuleContext(0, ObjectTypeContext);
    }
    arrayType() {
        return this.tryGetRuleContext(0, ArrayTypeContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_type; }
    enterRule(listener) {
        if (listener.enterType)
            listener.enterType(this);
    }
    exitRule(listener) {
        if (listener.exitType)
            listener.exitType(this);
    }
    accept(visitor) {
        if (visitor.visitType)
            return visitor.visitType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TypeContext.prototype, "accept", null);
exports.TypeContext = TypeContext;
class LambdaTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PAREN_OPEN() { return this.tryGetToken(XDocSyntaxParser.PAREN_OPEN, 0); }
    PAREN_CLOSE() { return this.tryGetToken(XDocSyntaxParser.PAREN_CLOSE, 0); }
    ARROW() { return this.getToken(XDocSyntaxParser.ARROW, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.NEWLINE);
        }
        else {
            return this.getToken(XDocSyntaxParser.NEWLINE, i);
        }
    }
    formalParameterSequence() {
        return this.tryGetRuleContext(0, FormalParameterSequenceContext);
    }
    QUESTION() { return this.tryGetToken(XDocSyntaxParser.QUESTION, 0); }
    parameter() {
        return this.tryGetRuleContext(0, ParameterContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_lambdaType; }
    enterRule(listener) {
        if (listener.enterLambdaType)
            listener.enterLambdaType(this);
    }
    exitRule(listener) {
        if (listener.exitLambdaType)
            listener.exitLambdaType(this);
    }
    accept(visitor) {
        if (visitor.visitLambdaType)
            return visitor.visitLambdaType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LambdaTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LambdaTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LambdaTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LambdaTypeContext.prototype, "accept", null);
exports.LambdaTypeContext = LambdaTypeContext;
class FormalParameterSequenceContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    parameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }
        else {
            return this.getRuleContext(i, ParameterContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.COMMA);
        }
        else {
            return this.getToken(XDocSyntaxParser.COMMA, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.NEWLINE);
        }
        else {
            return this.getToken(XDocSyntaxParser.NEWLINE, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_formalParameterSequence; }
    enterRule(listener) {
        if (listener.enterFormalParameterSequence)
            listener.enterFormalParameterSequence(this);
    }
    exitRule(listener) {
        if (listener.exitFormalParameterSequence)
            listener.exitFormalParameterSequence(this);
    }
    accept(visitor) {
        if (visitor.visitFormalParameterSequence)
            return visitor.visitFormalParameterSequence(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FormalParameterSequenceContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FormalParameterSequenceContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FormalParameterSequenceContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FormalParameterSequenceContext.prototype, "accept", null);
exports.FormalParameterSequenceContext = FormalParameterSequenceContext;
class ParameterContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    COLON() { return this.tryGetToken(XDocSyntaxParser.COLON, 0); }
    type() {
        return this.tryGetRuleContext(0, TypeContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_parameter; }
    enterRule(listener) {
        if (listener.enterParameter)
            listener.enterParameter(this);
    }
    exitRule(listener) {
        if (listener.exitParameter)
            listener.exitParameter(this);
    }
    accept(visitor) {
        if (visitor.visitParameter)
            return visitor.visitParameter(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ParameterContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ParameterContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ParameterContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ParameterContext.prototype, "accept", null);
exports.ParameterContext = ParameterContext;
class TupleTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LESSTHAN() { return this.getToken(XDocSyntaxParser.LESSTHAN, 0); }
    tupleTypeSequence() {
        return this.getRuleContext(0, TupleTypeSequenceContext);
    }
    GREATERTHAN() { return this.getToken(XDocSyntaxParser.GREATERTHAN, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_tupleType; }
    enterRule(listener) {
        if (listener.enterTupleType)
            listener.enterTupleType(this);
    }
    exitRule(listener) {
        if (listener.exitTupleType)
            listener.exitTupleType(this);
    }
    accept(visitor) {
        if (visitor.visitTupleType)
            return visitor.visitTupleType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TupleTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TupleTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TupleTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TupleTypeContext.prototype, "accept", null);
exports.TupleTypeContext = TupleTypeContext;
class TupleTypeSequenceContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    type(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.COMMA);
        }
        else {
            return this.getToken(XDocSyntaxParser.COMMA, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_tupleTypeSequence; }
    enterRule(listener) {
        if (listener.enterTupleTypeSequence)
            listener.enterTupleTypeSequence(this);
    }
    exitRule(listener) {
        if (listener.exitTupleTypeSequence)
            listener.exitTupleTypeSequence(this);
    }
    accept(visitor) {
        if (visitor.visitTupleTypeSequence)
            return visitor.visitTupleTypeSequence(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TupleTypeSequenceContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TupleTypeSequenceContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TupleTypeSequenceContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TupleTypeSequenceContext.prototype, "accept", null);
exports.TupleTypeSequenceContext = TupleTypeSequenceContext;
class PrimaryTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    optionalIdentifier() {
        return this.tryGetRuleContext(0, OptionalIdentifierContext);
    }
    propertyIdentifier() {
        return this.tryGetRuleContext(0, PropertyIdentifierContext);
    }
    identifierOrKeyword() {
        return this.tryGetRuleContext(0, IdentifierOrKeywordContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_primaryType; }
    enterRule(listener) {
        if (listener.enterPrimaryType)
            listener.enterPrimaryType(this);
    }
    exitRule(listener) {
        if (listener.exitPrimaryType)
            listener.exitPrimaryType(this);
    }
    accept(visitor) {
        if (visitor.visitPrimaryType)
            return visitor.visitPrimaryType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PrimaryTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PrimaryTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PrimaryTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PrimaryTypeContext.prototype, "accept", null);
exports.PrimaryTypeContext = PrimaryTypeContext;
class IdentifierOrKeywordContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    keyword() {
        return this.tryGetRuleContext(0, KeywordContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_identifierOrKeyword; }
    enterRule(listener) {
        if (listener.enterIdentifierOrKeyword)
            listener.enterIdentifierOrKeyword(this);
    }
    exitRule(listener) {
        if (listener.exitIdentifierOrKeyword)
            listener.exitIdentifierOrKeyword(this);
    }
    accept(visitor) {
        if (visitor.visitIdentifierOrKeyword)
            return visitor.visitIdentifierOrKeyword(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], IdentifierOrKeywordContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], IdentifierOrKeywordContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], IdentifierOrKeywordContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], IdentifierOrKeywordContext.prototype, "accept", null);
exports.IdentifierOrKeywordContext = IdentifierOrKeywordContext;
class KeywordContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NullLiteral() { return this.getToken(XDocSyntaxParser.NullLiteral, 0); }
    get ruleIndex() { return XDocSyntaxParser.RULE_keyword; }
    enterRule(listener) {
        if (listener.enterKeyword)
            listener.enterKeyword(this);
    }
    exitRule(listener) {
        if (listener.exitKeyword)
            listener.exitKeyword(this);
    }
    accept(visitor) {
        if (visitor.visitKeyword)
            return visitor.visitKeyword(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], KeywordContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], KeywordContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], KeywordContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], KeywordContext.prototype, "accept", null);
exports.KeywordContext = KeywordContext;
class ParenthesizedTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PAREN_OPEN() { return this.getToken(XDocSyntaxParser.PAREN_OPEN, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    PAREN_CLOSE() { return this.getToken(XDocSyntaxParser.PAREN_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_parenthesizedType; }
    enterRule(listener) {
        if (listener.enterParenthesizedType)
            listener.enterParenthesizedType(this);
    }
    exitRule(listener) {
        if (listener.exitParenthesizedType)
            listener.exitParenthesizedType(this);
    }
    accept(visitor) {
        if (visitor.visitParenthesizedType)
            return visitor.visitParenthesizedType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ParenthesizedTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ParenthesizedTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ParenthesizedTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ParenthesizedTypeContext.prototype, "accept", null);
exports.ParenthesizedTypeContext = ParenthesizedTypeContext;
class UnaryTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    primaryType() {
        return this.getRuleContext(0, PrimaryTypeContext);
    }
    AMP() { return this.tryGetToken(XDocSyntaxParser.AMP, 0); }
    STAR() { return this.tryGetToken(XDocSyntaxParser.STAR, 0); }
    get ruleIndex() { return XDocSyntaxParser.RULE_unaryType; }
    enterRule(listener) {
        if (listener.enterUnaryType)
            listener.enterUnaryType(this);
    }
    exitRule(listener) {
        if (listener.exitUnaryType)
            listener.exitUnaryType(this);
    }
    accept(visitor) {
        if (visitor.visitUnaryType)
            return visitor.visitUnaryType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], UnaryTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], UnaryTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], UnaryTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], UnaryTypeContext.prototype, "accept", null);
exports.UnaryTypeContext = UnaryTypeContext;
class ObjectTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BRACE_OPEN() { return this.getToken(XDocSyntaxParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.getToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.NEWLINE);
        }
        else {
            return this.getToken(XDocSyntaxParser.NEWLINE, i);
        }
    }
    objectPairSequenceType() {
        return this.tryGetRuleContext(0, ObjectPairSequenceTypeContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_objectType; }
    enterRule(listener) {
        if (listener.enterObjectType)
            listener.enterObjectType(this);
    }
    exitRule(listener) {
        if (listener.exitObjectType)
            listener.exitObjectType(this);
    }
    accept(visitor) {
        if (visitor.visitObjectType)
            return visitor.visitObjectType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectTypeContext.prototype, "accept", null);
exports.ObjectTypeContext = ObjectTypeContext;
class ObjectPairSequenceTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    objectPairType(i) {
        if (i === undefined) {
            return this.getRuleContexts(ObjectPairTypeContext);
        }
        else {
            return this.getRuleContext(i, ObjectPairTypeContext);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.COMMA);
        }
        else {
            return this.getToken(XDocSyntaxParser.COMMA, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.NEWLINE);
        }
        else {
            return this.getToken(XDocSyntaxParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_objectPairSequenceType; }
    enterRule(listener) {
        if (listener.enterObjectPairSequenceType)
            listener.enterObjectPairSequenceType(this);
    }
    exitRule(listener) {
        if (listener.exitObjectPairSequenceType)
            listener.exitObjectPairSequenceType(this);
    }
    accept(visitor) {
        if (visitor.visitObjectPairSequenceType)
            return visitor.visitObjectPairSequenceType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectPairSequenceTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectPairSequenceTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairSequenceTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairSequenceTypeContext.prototype, "accept", null);
exports.ObjectPairSequenceTypeContext = ObjectPairSequenceTypeContext;
class ObjectPairTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    type(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    }
    COLON() { return this.getToken(XDocSyntaxParser.COLON, 0); }
    QUESTION() { return this.tryGetToken(XDocSyntaxParser.QUESTION, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_objectPairType; }
    enterRule(listener) {
        if (listener.enterObjectPairType)
            listener.enterObjectPairType(this);
    }
    exitRule(listener) {
        if (listener.exitObjectPairType)
            listener.exitObjectPairType(this);
    }
    accept(visitor) {
        if (visitor.visitObjectPairType)
            return visitor.visitObjectPairType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectPairTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectPairTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairTypeContext.prototype, "accept", null);
exports.ObjectPairTypeContext = ObjectPairTypeContext;
class ArrayTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BRACKET_OPEN(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.BRACKET_OPEN);
        }
        else {
            return this.getToken(XDocSyntaxParser.BRACKET_OPEN, i);
        }
    }
    BRACKET_CLOSE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.BRACKET_CLOSE);
        }
        else {
            return this.getToken(XDocSyntaxParser.BRACKET_CLOSE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.NEWLINE);
        }
        else {
            return this.getToken(XDocSyntaxParser.NEWLINE, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    type(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.COMMA);
        }
        else {
            return this.getToken(XDocSyntaxParser.COMMA, i);
        }
    }
    notArrayType() {
        return this.tryGetRuleContext(0, NotArrayTypeContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_arrayType; }
    enterRule(listener) {
        if (listener.enterArrayType)
            listener.enterArrayType(this);
    }
    exitRule(listener) {
        if (listener.exitArrayType)
            listener.exitArrayType(this);
    }
    accept(visitor) {
        if (visitor.visitArrayType)
            return visitor.visitArrayType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ArrayTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ArrayTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ArrayTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ArrayTypeContext.prototype, "accept", null);
exports.ArrayTypeContext = ArrayTypeContext;
class NotArrayTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    notArrayType(i) {
        if (i === undefined) {
            return this.getRuleContexts(NotArrayTypeContext);
        }
        else {
            return this.getRuleContext(i, NotArrayTypeContext);
        }
    }
    PIPE() { return this.tryGetToken(XDocSyntaxParser.PIPE, 0); }
    AMP() { return this.tryGetToken(XDocSyntaxParser.AMP, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.NEWLINE);
        }
        else {
            return this.getToken(XDocSyntaxParser.NEWLINE, i);
        }
    }
    lambdaType() {
        return this.tryGetRuleContext(0, LambdaTypeContext);
    }
    tupleType() {
        return this.tryGetRuleContext(0, TupleTypeContext);
    }
    primaryType() {
        return this.tryGetRuleContext(0, PrimaryTypeContext);
    }
    parenthesizedType() {
        return this.tryGetRuleContext(0, ParenthesizedTypeContext);
    }
    unaryType() {
        return this.tryGetRuleContext(0, UnaryTypeContext);
    }
    objectType() {
        return this.tryGetRuleContext(0, ObjectTypeContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_notArrayType; }
    enterRule(listener) {
        if (listener.enterNotArrayType)
            listener.enterNotArrayType(this);
    }
    exitRule(listener) {
        if (listener.exitNotArrayType)
            listener.exitNotArrayType(this);
    }
    accept(visitor) {
        if (visitor.visitNotArrayType)
            return visitor.visitNotArrayType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NotArrayTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NotArrayTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NotArrayTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NotArrayTypeContext.prototype, "accept", null);
exports.NotArrayTypeContext = NotArrayTypeContext;
class PropertyIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    PERIOD(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.PERIOD);
        }
        else {
            return this.getToken(XDocSyntaxParser.PERIOD, i);
        }
    }
    optionalIdentifierOrIdentifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionalIdentifierOrIdentifierContext);
        }
        else {
            return this.getRuleContext(i, OptionalIdentifierOrIdentifierContext);
        }
    }
    optionalIdentifier() {
        return this.tryGetRuleContext(0, OptionalIdentifierContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_propertyIdentifier; }
    enterRule(listener) {
        if (listener.enterPropertyIdentifier)
            listener.enterPropertyIdentifier(this);
    }
    exitRule(listener) {
        if (listener.exitPropertyIdentifier)
            listener.exitPropertyIdentifier(this);
    }
    accept(visitor) {
        if (visitor.visitPropertyIdentifier)
            return visitor.visitPropertyIdentifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PropertyIdentifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PropertyIdentifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PropertyIdentifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PropertyIdentifierContext.prototype, "accept", null);
exports.PropertyIdentifierContext = PropertyIdentifierContext;
class OptionalIdentifierOrIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    optionalIdentifier() {
        return this.tryGetRuleContext(0, OptionalIdentifierContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_optionalIdentifierOrIdentifier; }
    enterRule(listener) {
        if (listener.enterOptionalIdentifierOrIdentifier)
            listener.enterOptionalIdentifierOrIdentifier(this);
    }
    exitRule(listener) {
        if (listener.exitOptionalIdentifierOrIdentifier)
            listener.exitOptionalIdentifierOrIdentifier(this);
    }
    accept(visitor) {
        if (visitor.visitOptionalIdentifierOrIdentifier)
            return visitor.visitOptionalIdentifierOrIdentifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OptionalIdentifierOrIdentifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OptionalIdentifierOrIdentifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OptionalIdentifierOrIdentifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OptionalIdentifierOrIdentifierContext.prototype, "accept", null);
exports.OptionalIdentifierOrIdentifierContext = OptionalIdentifierOrIdentifierContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unaryExpression() {
        return this.tryGetRuleContext(0, UnaryExpressionContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    STAR() { return this.tryGetToken(XDocSyntaxParser.STAR, 0); }
    FORWARD_SLASH() { return this.tryGetToken(XDocSyntaxParser.FORWARD_SLASH, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    PLUS() { return this.tryGetToken(XDocSyntaxParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(XDocSyntaxParser.MINUS, 0); }
    arrayExpression() {
        return this.tryGetRuleContext(0, ArrayExpressionContext);
    }
    objectExpression() {
        return this.tryGetRuleContext(0, ObjectExpressionContext);
    }
    lambdaExpression() {
        return this.tryGetRuleContext(0, LambdaExpressionContext);
    }
    literalExpression() {
        return this.tryGetRuleContext(0, LiteralExpressionContext);
    }
    parenthesizedExpression() {
        return this.tryGetRuleContext(0, ParenthesizedExpressionContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_expression; }
    enterRule(listener) {
        if (listener.enterExpression)
            listener.enterExpression(this);
    }
    exitRule(listener) {
        if (listener.exitExpression)
            listener.exitExpression(this);
    }
    accept(visitor) {
        if (visitor.visitExpression)
            return visitor.visitExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "accept", null);
exports.ExpressionContext = ExpressionContext;
class UnaryExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    PLUS() { return this.tryGetToken(XDocSyntaxParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(XDocSyntaxParser.MINUS, 0); }
    get ruleIndex() { return XDocSyntaxParser.RULE_unaryExpression; }
    enterRule(listener) {
        if (listener.enterUnaryExpression)
            listener.enterUnaryExpression(this);
    }
    exitRule(listener) {
        if (listener.exitUnaryExpression)
            listener.exitUnaryExpression(this);
    }
    accept(visitor) {
        if (visitor.visitUnaryExpression)
            return visitor.visitUnaryExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], UnaryExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], UnaryExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], UnaryExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], UnaryExpressionContext.prototype, "accept", null);
exports.UnaryExpressionContext = UnaryExpressionContext;
class ArrayExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BRACKET_OPEN() { return this.getToken(XDocSyntaxParser.BRACKET_OPEN, 0); }
    BRACKET_CLOSE() { return this.getToken(XDocSyntaxParser.BRACKET_CLOSE, 0); }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.NEWLINE);
        }
        else {
            return this.getToken(XDocSyntaxParser.NEWLINE, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.COMMA);
        }
        else {
            return this.getToken(XDocSyntaxParser.COMMA, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_arrayExpression; }
    enterRule(listener) {
        if (listener.enterArrayExpression)
            listener.enterArrayExpression(this);
    }
    exitRule(listener) {
        if (listener.exitArrayExpression)
            listener.exitArrayExpression(this);
    }
    accept(visitor) {
        if (visitor.visitArrayExpression)
            return visitor.visitArrayExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ArrayExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ArrayExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ArrayExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ArrayExpressionContext.prototype, "accept", null);
exports.ArrayExpressionContext = ArrayExpressionContext;
class ObjectExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BRACE_OPEN() { return this.getToken(XDocSyntaxParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.getToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.NEWLINE);
        }
        else {
            return this.getToken(XDocSyntaxParser.NEWLINE, i);
        }
    }
    objectPairSequenceExpression() {
        return this.tryGetRuleContext(0, ObjectPairSequenceExpressionContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_objectExpression; }
    enterRule(listener) {
        if (listener.enterObjectExpression)
            listener.enterObjectExpression(this);
    }
    exitRule(listener) {
        if (listener.exitObjectExpression)
            listener.exitObjectExpression(this);
    }
    accept(visitor) {
        if (visitor.visitObjectExpression)
            return visitor.visitObjectExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectExpressionContext.prototype, "accept", null);
exports.ObjectExpressionContext = ObjectExpressionContext;
class ObjectPairSequenceExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    objectPairExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ObjectPairExpressionContext);
        }
        else {
            return this.getRuleContext(i, ObjectPairExpressionContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.COMMA);
        }
        else {
            return this.getToken(XDocSyntaxParser.COMMA, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.NEWLINE);
        }
        else {
            return this.getToken(XDocSyntaxParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_objectPairSequenceExpression; }
    enterRule(listener) {
        if (listener.enterObjectPairSequenceExpression)
            listener.enterObjectPairSequenceExpression(this);
    }
    exitRule(listener) {
        if (listener.exitObjectPairSequenceExpression)
            listener.exitObjectPairSequenceExpression(this);
    }
    accept(visitor) {
        if (visitor.visitObjectPairSequenceExpression)
            return visitor.visitObjectPairSequenceExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectPairSequenceExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectPairSequenceExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairSequenceExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairSequenceExpressionContext.prototype, "accept", null);
exports.ObjectPairSequenceExpressionContext = ObjectPairSequenceExpressionContext;
class ObjectPairExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    literalExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(LiteralExpressionContext);
        }
        else {
            return this.getRuleContext(i, LiteralExpressionContext);
        }
    }
    COLON() { return this.getToken(XDocSyntaxParser.COLON, 0); }
    objectExpression() {
        return this.tryGetRuleContext(0, ObjectExpressionContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_objectPairExpression; }
    enterRule(listener) {
        if (listener.enterObjectPairExpression)
            listener.enterObjectPairExpression(this);
    }
    exitRule(listener) {
        if (listener.exitObjectPairExpression)
            listener.exitObjectPairExpression(this);
    }
    accept(visitor) {
        if (visitor.visitObjectPairExpression)
            return visitor.visitObjectPairExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectPairExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectPairExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairExpressionContext.prototype, "accept", null);
exports.ObjectPairExpressionContext = ObjectPairExpressionContext;
class LambdaExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PAREN_OPEN() { return this.tryGetToken(XDocSyntaxParser.PAREN_OPEN, 0); }
    PAREN_CLOSE() { return this.tryGetToken(XDocSyntaxParser.PAREN_CLOSE, 0); }
    ARROW() { return this.getToken(XDocSyntaxParser.ARROW, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.NEWLINE);
        }
        else {
            return this.getToken(XDocSyntaxParser.NEWLINE, i);
        }
    }
    formalParameterSequence() {
        return this.tryGetRuleContext(0, FormalParameterSequenceContext);
    }
    QUESTION() { return this.tryGetToken(XDocSyntaxParser.QUESTION, 0); }
    parameter() {
        return this.tryGetRuleContext(0, ParameterContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_lambdaExpression; }
    enterRule(listener) {
        if (listener.enterLambdaExpression)
            listener.enterLambdaExpression(this);
    }
    exitRule(listener) {
        if (listener.exitLambdaExpression)
            listener.exitLambdaExpression(this);
    }
    accept(visitor) {
        if (visitor.visitLambdaExpression)
            return visitor.visitLambdaExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LambdaExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LambdaExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LambdaExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LambdaExpressionContext.prototype, "accept", null);
exports.LambdaExpressionContext = LambdaExpressionContext;
class LiteralExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NumberLiteral() { return this.tryGetToken(XDocSyntaxParser.NumberLiteral, 0); }
    BooleanLiteral() { return this.tryGetToken(XDocSyntaxParser.BooleanLiteral, 0); }
    CharacterLiteral() { return this.tryGetToken(XDocSyntaxParser.CharacterLiteral, 0); }
    StringLiteral() { return this.tryGetToken(XDocSyntaxParser.StringLiteral, 0); }
    NullLiteral() { return this.tryGetToken(XDocSyntaxParser.NullLiteral, 0); }
    get ruleIndex() { return XDocSyntaxParser.RULE_literalExpression; }
    enterRule(listener) {
        if (listener.enterLiteralExpression)
            listener.enterLiteralExpression(this);
    }
    exitRule(listener) {
        if (listener.exitLiteralExpression)
            listener.exitLiteralExpression(this);
    }
    accept(visitor) {
        if (visitor.visitLiteralExpression)
            return visitor.visitLiteralExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LiteralExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LiteralExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LiteralExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LiteralExpressionContext.prototype, "accept", null);
exports.LiteralExpressionContext = LiteralExpressionContext;
class ParenthesizedExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PAREN_OPEN() { return this.getToken(XDocSyntaxParser.PAREN_OPEN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    PAREN_CLOSE() { return this.getToken(XDocSyntaxParser.PAREN_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_parenthesizedExpression; }
    enterRule(listener) {
        if (listener.enterParenthesizedExpression)
            listener.enterParenthesizedExpression(this);
    }
    exitRule(listener) {
        if (listener.exitParenthesizedExpression)
            listener.exitParenthesizedExpression(this);
    }
    accept(visitor) {
        if (visitor.visitParenthesizedExpression)
            return visitor.visitParenthesizedExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ParenthesizedExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ParenthesizedExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ParenthesizedExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ParenthesizedExpressionContext.prototype, "accept", null);
exports.ParenthesizedExpressionContext = ParenthesizedExpressionContext;
class DescriptionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    descriptionLine() {
        return this.getRuleContext(0, DescriptionLineContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_description; }
    enterRule(listener) {
        if (listener.enterDescription)
            listener.enterDescription(this);
    }
    exitRule(listener) {
        if (listener.exitDescription)
            listener.exitDescription(this);
    }
    accept(visitor) {
        if (visitor.visitDescription)
            return visitor.visitDescription(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DescriptionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DescriptionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DescriptionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DescriptionContext.prototype, "accept", null);
exports.DescriptionContext = DescriptionContext;
class DescriptionLineContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    descriptionLineStart() {
        return this.tryGetRuleContext(0, DescriptionLineStartContext);
    }
    descriptionLineElement(i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionLineElementContext);
        }
        else {
            return this.getRuleContext(i, DescriptionLineElementContext);
        }
    }
    inlineTag() {
        return this.tryGetRuleContext(0, InlineTagContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_descriptionLine; }
    enterRule(listener) {
        if (listener.enterDescriptionLine)
            listener.enterDescriptionLine(this);
    }
    exitRule(listener) {
        if (listener.exitDescriptionLine)
            listener.exitDescriptionLine(this);
    }
    accept(visitor) {
        if (visitor.visitDescriptionLine)
            return visitor.visitDescriptionLine(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DescriptionLineContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DescriptionLineContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineContext.prototype, "accept", null);
exports.DescriptionLineContext = DescriptionLineContext;
class DescriptionLineStartContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    descriptionText(i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionTextContext);
        }
        else {
            return this.getRuleContext(i, DescriptionTextContext);
        }
    }
    AT(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.AT);
        }
        else {
            return this.getToken(XDocSyntaxParser.AT, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_descriptionLineStart; }
    enterRule(listener) {
        if (listener.enterDescriptionLineStart)
            listener.enterDescriptionLineStart(this);
    }
    exitRule(listener) {
        if (listener.exitDescriptionLineStart)
            listener.exitDescriptionLineStart(this);
    }
    accept(visitor) {
        if (visitor.visitDescriptionLineStart)
            return visitor.visitDescriptionLineStart(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DescriptionLineStartContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DescriptionLineStartContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineStartContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineStartContext.prototype, "accept", null);
exports.DescriptionLineStartContext = DescriptionLineStartContext;
class DescriptionTextContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    TEXT_CONTENT() { return this.tryGetToken(XDocSyntaxParser.TEXT_CONTENT, 0); }
    ID() { return this.tryGetToken(XDocSyntaxParser.ID, 0); }
    FORWARD_SLASH() { return this.tryGetToken(XDocSyntaxParser.FORWARD_SLASH, 0); }
    BRACE_OPEN() { return this.tryGetToken(XDocSyntaxParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.tryGetToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
    COLON() { return this.tryGetToken(XDocSyntaxParser.COLON, 0); }
    MINUS() { return this.tryGetToken(XDocSyntaxParser.MINUS, 0); }
    PERIOD() { return this.tryGetToken(XDocSyntaxParser.PERIOD, 0); }
    literalExpression() {
        return this.tryGetRuleContext(0, LiteralExpressionContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_descriptionText; }
    enterRule(listener) {
        if (listener.enterDescriptionText)
            listener.enterDescriptionText(this);
    }
    exitRule(listener) {
        if (listener.exitDescriptionText)
            listener.exitDescriptionText(this);
    }
    accept(visitor) {
        if (visitor.visitDescriptionText)
            return visitor.visitDescriptionText(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DescriptionTextContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DescriptionTextContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DescriptionTextContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DescriptionTextContext.prototype, "accept", null);
exports.DescriptionTextContext = DescriptionTextContext;
class DescriptionLineElementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    inlineTag() {
        return this.tryGetRuleContext(0, InlineTagContext);
    }
    descriptionLineText() {
        return this.tryGetRuleContext(0, DescriptionLineTextContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_descriptionLineElement; }
    enterRule(listener) {
        if (listener.enterDescriptionLineElement)
            listener.enterDescriptionLineElement(this);
    }
    exitRule(listener) {
        if (listener.exitDescriptionLineElement)
            listener.exitDescriptionLineElement(this);
    }
    accept(visitor) {
        if (visitor.visitDescriptionLineElement)
            return visitor.visitDescriptionLineElement(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DescriptionLineElementContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DescriptionLineElementContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineElementContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineElementContext.prototype, "accept", null);
exports.DescriptionLineElementContext = DescriptionLineElementContext;
class DescriptionLineTextContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    descriptionText(i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionTextContext);
        }
        else {
            return this.getRuleContext(i, DescriptionTextContext);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.SPACE);
        }
        else {
            return this.getToken(XDocSyntaxParser.SPACE, i);
        }
    }
    AT(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.AT);
        }
        else {
            return this.getToken(XDocSyntaxParser.AT, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_descriptionLineText; }
    enterRule(listener) {
        if (listener.enterDescriptionLineText)
            listener.enterDescriptionLineText(this);
    }
    exitRule(listener) {
        if (listener.exitDescriptionLineText)
            listener.exitDescriptionLineText(this);
    }
    accept(visitor) {
        if (visitor.visitDescriptionLineText)
            return visitor.visitDescriptionLineText(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DescriptionLineTextContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DescriptionLineTextContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineTextContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineTextContext.prototype, "accept", null);
exports.DescriptionLineTextContext = DescriptionLineTextContext;
class InlineTagContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INLINE_TAG_START() { return this.getToken(XDocSyntaxParser.INLINE_TAG_START, 0); }
    inlineTagName() {
        return this.getRuleContext(0, InlineTagNameContext);
    }
    SPACE() { return this.getToken(XDocSyntaxParser.SPACE, 0); }
    BRACE_CLOSE() { return this.getToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
    inlineTagBody() {
        return this.tryGetRuleContext(0, InlineTagBodyContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_inlineTag; }
    enterRule(listener) {
        if (listener.enterInlineTag)
            listener.enterInlineTag(this);
    }
    exitRule(listener) {
        if (listener.exitInlineTag)
            listener.exitInlineTag(this);
    }
    accept(visitor) {
        if (visitor.visitInlineTag)
            return visitor.visitInlineTag(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InlineTagContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InlineTagContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InlineTagContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InlineTagContext.prototype, "accept", null);
exports.InlineTagContext = InlineTagContext;
class InlineTagNameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_inlineTagName; }
    enterRule(listener) {
        if (listener.enterInlineTagName)
            listener.enterInlineTagName(this);
    }
    exitRule(listener) {
        if (listener.exitInlineTagName)
            listener.exitInlineTagName(this);
    }
    accept(visitor) {
        if (visitor.visitInlineTagName)
            return visitor.visitInlineTagName(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InlineTagNameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InlineTagNameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InlineTagNameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InlineTagNameContext.prototype, "accept", null);
exports.InlineTagNameContext = InlineTagNameContext;
class InlineTagBodyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    braceBody(i) {
        if (i === undefined) {
            return this.getRuleContexts(BraceBodyContext);
        }
        else {
            return this.getRuleContext(i, BraceBodyContext);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_inlineTagBody; }
    enterRule(listener) {
        if (listener.enterInlineTagBody)
            listener.enterInlineTagBody(this);
    }
    exitRule(listener) {
        if (listener.exitInlineTagBody)
            listener.exitInlineTagBody(this);
    }
    accept(visitor) {
        if (visitor.visitInlineTagBody)
            return visitor.visitInlineTagBody(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InlineTagBodyContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InlineTagBodyContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InlineTagBodyContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InlineTagBodyContext.prototype, "accept", null);
exports.InlineTagBodyContext = InlineTagBodyContext;
class BraceExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BRACE_OPEN() { return this.getToken(XDocSyntaxParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.getToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
    braceBody(i) {
        if (i === undefined) {
            return this.getRuleContexts(BraceBodyContext);
        }
        else {
            return this.getRuleContext(i, BraceBodyContext);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_braceExpression; }
    enterRule(listener) {
        if (listener.enterBraceExpression)
            listener.enterBraceExpression(this);
    }
    exitRule(listener) {
        if (listener.exitBraceExpression)
            listener.exitBraceExpression(this);
    }
    accept(visitor) {
        if (visitor.visitBraceExpression)
            return visitor.visitBraceExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BraceExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BraceExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BraceExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BraceExpressionContext.prototype, "accept", null);
exports.BraceExpressionContext = BraceExpressionContext;
class BraceBodyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    braceExpression() {
        return this.tryGetRuleContext(0, BraceExpressionContext);
    }
    braceText(i) {
        if (i === undefined) {
            return this.getRuleContexts(BraceTextContext);
        }
        else {
            return this.getRuleContext(i, BraceTextContext);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocSyntaxParser.NEWLINE);
        }
        else {
            return this.getToken(XDocSyntaxParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return XDocSyntaxParser.RULE_braceBody; }
    enterRule(listener) {
        if (listener.enterBraceBody)
            listener.enterBraceBody(this);
    }
    exitRule(listener) {
        if (listener.exitBraceBody)
            listener.exitBraceBody(this);
    }
    accept(visitor) {
        if (visitor.visitBraceBody)
            return visitor.visitBraceBody(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BraceBodyContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BraceBodyContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BraceBodyContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BraceBodyContext.prototype, "accept", null);
exports.BraceBodyContext = BraceBodyContext;
class BraceTextContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    TEXT_CONTENT() { return this.tryGetToken(XDocSyntaxParser.TEXT_CONTENT, 0); }
    ID() { return this.tryGetToken(XDocSyntaxParser.ID, 0); }
    SPACE() { return this.tryGetToken(XDocSyntaxParser.SPACE, 0); }
    FORWARD_SLASH() { return this.tryGetToken(XDocSyntaxParser.FORWARD_SLASH, 0); }
    NEWLINE() { return this.tryGetToken(XDocSyntaxParser.NEWLINE, 0); }
    PERIOD() { return this.tryGetToken(XDocSyntaxParser.PERIOD, 0); }
    get ruleIndex() { return XDocSyntaxParser.RULE_braceText; }
    enterRule(listener) {
        if (listener.enterBraceText)
            listener.enterBraceText(this);
    }
    exitRule(listener) {
        if (listener.exitBraceText)
            listener.exitBraceText(this);
    }
    accept(visitor) {
        if (visitor.visitBraceText)
            return visitor.visitBraceText(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BraceTextContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BraceTextContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BraceTextContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BraceTextContext.prototype, "accept", null);
exports.BraceTextContext = BraceTextContext;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWERvY1N5bnRheFBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2dyYW1tYXIvWERvY1N5bnRheFBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkRBQTJEOzs7Ozs7OztBQUczRCwwQ0FBdUM7QUFDdkMsa0VBQStEO0FBQy9ELGdGQUE2RTtBQUM3RSxvREFBOEM7QUFDOUMsd0VBQXFFO0FBQ3JFLG9EQUErQztBQUMvQyw0Q0FBeUM7QUFDekMsa0VBQStEO0FBQy9ELHdFQUFxRTtBQUdyRSx3RUFBcUU7QUFFckUsc0RBQW1EO0FBRW5ELDBDQUF1QztBQUd2Qyw0REFBeUQ7QUFFekQsNkNBQTZDO0FBTTdDLE1BQWEsZ0JBQWlCLFNBQVEsZUFBTTtJQXFJM0MsWUFBWSxLQUFrQjtRQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksdUNBQWtCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFoQkQsSUFBVyxVQUFVO1FBQ3BCLE9BQU8sZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBQ3BDLENBQUM7SUFHRCxJQUFXLGVBQWUsS0FBYSxPQUFPLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUd0RSxJQUFXLFNBQVMsS0FBZSxPQUFPLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFHdkUsSUFBVyxhQUFhLEtBQWEsT0FBTyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBT3ZFLGFBQWE7UUFDbkIsSUFBSSxTQUFTLEdBQXlCLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbEUsSUFB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LHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx5RUFBeUU7SUFDekUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDJFQUEyRTtJQUMzRSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUseUVBQXlFO0lBQ3pFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSxnREFBZ0QsQ0FBQztBQUMxQix1Q0FBc0IsR0FDN0MsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUseUVBQXlFO0lBQ3pFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsMkVBQTJFO0lBQzNFLHlFQUF5RTtJQUN6RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDJFQUEyRTtJQUMzRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLDJFQUEyRTtJQUMzRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx5RUFBeUU7SUFDekUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDJFQUEyRTtJQUMzRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDJF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QURDLHFCQUFRO2lEQUdSO0FBRUQ7SUFEQyxxQkFBUTtnREFHUjtBQUVEO0lBREMscUJBQVE7OENBSVI7QUF6QkYsNENBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gWERvY1N5bnRheFBhcnNlci5nNCBieSBBTlRMUiA0LjYtU05BUFNIT1RcblxuXG5pbXBvcnQgeyBBVE4gfSBmcm9tICdhbnRscjR0cy9hdG4vQVROJztcbmltcG9ydCB7IEFUTkRlc2VyaWFsaXplciB9IGZyb20gJ2FudGxyNHRzL2F0bi9BVE5EZXNlcmlhbGl6ZXInO1xuaW1wb3J0IHsgRmFpbGVkUHJlZGljYXRlRXhjZXB0aW9uIH0gZnJvbSAnYW50bHI0dHMvRmFpbGVkUHJlZGljYXRlRXhjZXB0aW9uJztcbmltcG9ydCB7IE5vdE51bGwgfSBmcm9tICdhbnRscjR0cy9EZWNvcmF0b3JzJztcbmltcG9ydCB7IE5vVmlhYmxlQWx0RXhjZXB0aW9uIH0gZnJvbSAnYW50bHI0dHMvTm9WaWFibGVBbHRFeGNlcHRpb24nO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICdhbnRscjR0cy9EZWNvcmF0b3JzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2FudGxyNHRzL1BhcnNlcic7XG5pbXBvcnQgeyBQYXJzZXJSdWxlQ29udGV4dCB9IGZyb20gJ2FudGxyNHRzL1BhcnNlclJ1bGVDb250ZXh0JztcbmltcG9ydCB7IFBhcnNlckFUTlNpbXVsYXRvciB9IGZyb20gJ2FudGxyNHRzL2F0bi9QYXJzZXJBVE5TaW11bGF0b3InO1xuaW1wb3J0IHsgUGFyc2VUcmVlTGlzdGVuZXIgfSBmcm9tICdhbnRscjR0cy90cmVlL1BhcnNlVHJlZUxpc3RlbmVyJztcbmltcG9ydCB7IFBhcnNlVHJlZVZpc2l0b3IgfSBmcm9tICdhbnRscjR0cy90cmVlL1BhcnNlVHJlZVZpc2l0b3InO1xuaW1wb3J0IHsgUmVjb2duaXRpb25FeGNlcHRpb24gfSBmcm9tICdhbnRscjR0cy9SZWNvZ25pdGlvbkV4Y2VwdGlvbic7XG5pbXBvcnQgeyBSdWxlQ29udGV4dCB9IGZyb20gJ2FudGxyNHRzL1J1bGVDb250ZXh0JztcbmltcG9ydCB7IFJ1bGVWZXJzaW9uIH0gZnJvbSAnYW50bHI0dHMvUnVsZVZlcnNpb24nO1xuaW1wb3J0IHsgVGVybWluYWxOb2RlIH0gZnJvbSAnYW50bHI0dHMvdHJlZS9UZXJtaW5hbE5vZGUnO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tICdhbnRscjR0cy9Ub2tlbic7XG5pbXBvcnQgeyBUb2tlblN0cmVhbSB9IGZyb20gJ2FudGxyNHRzL1Rva2VuU3RyZWFtJztcbmltcG9ydCB7IFZvY2FidWxhcnkgfSBmcm9tICdhbnRscjR0cy9Wb2NhYnVsYXJ5JztcbmltcG9ydCB7IFZvY2FidWxhcnlJbXBsIH0gZnJvbSAnYW50bHI0dHMvVm9jYWJ1bGFyeUltcGwnO1xuXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdhbnRscjR0cy9taXNjL1V0aWxzJztcblxuaW1wb3J0IHsgWERvY1N5bnRheFBhcnNlckxpc3RlbmVyIH0gZnJvbSAnLi9YRG9jU3ludGF4UGFyc2VyTGlzdGVuZXInO1xuaW1wb3J0IHsgWERvY1N5bnRheFBhcnNlclZpc2l0b3IgfSBmcm9tICcuL1hEb2NTeW50YXhQYXJzZXJWaXNpdG9yJztcblxuXG5leHBvcnQgY2xhc3MgWERvY1N5bnRheFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTnVtYmVyTGl0ZXJhbD0xO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEludGVnZXJMaXRlcmFsPTI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRmxvYXRpbmdQb2ludExpdGVyYWw9Mztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBCb29sZWFuTGl0ZXJhbD00O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENoYXJhY3RlckxpdGVyYWw9NTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBTdHJpbmdMaXRlcmFsPTY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTnVsbExpdGVyYWw9Nztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBJRD04O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5FV0xJTkU9OTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBTUEFDRT0xMDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBURVhUX0NPTlRFTlQ9MTE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVQ9MTI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUExVUz0xMztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBNSU5VUz0xNDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBTVEFSPTE1O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZPUldBUkRfU0xBU0g9MTY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09MT049MTc7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUEVSSU9EPTE4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTU1BPTE5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVRVUFMPTIwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFFVRVNUSU9OPTIxO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFNUD0yMjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBQSVBFPTIzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XPTI0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVYQ0xBTUFUSU9OPTI1O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElOTElORV9UQUdfU1RBUlQ9MjY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQlJBQ0VfT1BFTj0yNztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBCUkFDRV9DTE9TRT0yODtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBQQVJFTl9PUEVOPTI5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBBUkVOX0NMT1NFPTMwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJSQUNLRVRfT1BFTj0zMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBCUkFDS0VUX0NMT1NFPTMyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExFU1NUSEFOPTMzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdSRUFURVJUSEFOPTM0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZG9jdW1lbnRhdGlvbiA9IDA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9ib2R5ID0gMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3doaXRlc3BhY2UgPSAyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfYW5ub3RhdGlvbnMgPSAzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdGFnID0gNDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3RhZ05hbWUgPSA1O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdGFnSWRlbnRpZmllciA9IDY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wcm9wZXJ0eVRhZ0lkZW50aWZpZXIgPSA3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb3B0aW9uYWxUYWdJZGVudGlmaWVyID0gODtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29wdGlvbmFsVGFnT3JJZGVudGlmaWVyID0gOTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2lkZW50aWZpZXIgPSAxMDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29wdGlvbmFsSWRlbnRpZmllciA9IDExO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdHlwZSA9IDEyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfbGFtYmRhVHlwZSA9IDEzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UgPSAxNDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3BhcmFtZXRlciA9IDE1O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdHVwbGVUeXBlID0gMTY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV90dXBsZVR5cGVTZXF1ZW5jZSA9IDE3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfcHJpbWFyeVR5cGUgPSAxODtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2lkZW50aWZpZXJPcktleXdvcmQgPSAxOTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2tleXdvcmQgPSAyMDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3BhcmVudGhlc2l6ZWRUeXBlID0gMjE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV91bmFyeVR5cGUgPSAyMjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29iamVjdFR5cGUgPSAyMztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29iamVjdFBhaXJTZXF1ZW5jZVR5cGUgPSAyNDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29iamVjdFBhaXJUeXBlID0gMjU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9hcnJheVR5cGUgPSAyNjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX25vdEFycmF5VHlwZSA9IDI3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfcHJvcGVydHlJZGVudGlmaWVyID0gMjg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9vcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIgPSAyOTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2V4cHJlc3Npb24gPSAzMDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3VuYXJ5RXhwcmVzc2lvbiA9IDMxO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfYXJyYXlFeHByZXNzaW9uID0gMzI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9vYmplY3RFeHByZXNzaW9uID0gMzM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9vYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uID0gMzQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9vYmplY3RQYWlyRXhwcmVzc2lvbiA9IDM1O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfbGFtYmRhRXhwcmVzc2lvbiA9IDM2O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfbGl0ZXJhbEV4cHJlc3Npb24gPSAzNztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3BhcmVudGhlc2l6ZWRFeHByZXNzaW9uID0gMzg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvbiA9IDM5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZGVzY3JpcHRpb25MaW5lID0gNDA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvbkxpbmVTdGFydCA9IDQxO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZGVzY3JpcHRpb25UZXh0ID0gNDI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvbkxpbmVFbGVtZW50ID0gNDM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvbkxpbmVUZXh0ID0gNDQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9pbmxpbmVUYWcgPSA0NTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2lubGluZVRhZ05hbWUgPSA0Njtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2lubGluZVRhZ0JvZHkgPSA0Nztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2JyYWNlRXhwcmVzc2lvbiA9IDQ4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfYnJhY2VCb2R5ID0gNDk7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9icmFjZVRleHQgPSA1MDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBydWxlTmFtZXM6IHN0cmluZ1tdID0gW1xuXHRcdFwiZG9jdW1lbnRhdGlvblwiLCBcImJvZHlcIiwgXCJ3aGl0ZXNwYWNlXCIsIFwiYW5ub3RhdGlvbnNcIiwgXCJ0YWdcIiwgXCJ0YWdOYW1lXCIsIFxuXHRcdFwidGFnSWRlbnRpZmllclwiLCBcInByb3BlcnR5VGFnSWRlbnRpZmllclwiLCBcIm9wdGlvbmFsVGFnSWRlbnRpZmllclwiLCBcIm9wdGlvbmFsVGFnT3JJZGVudGlmaWVyXCIsIFxuXHRcdFwiaWRlbnRpZmllclwiLCBcIm9wdGlvbmFsSWRlbnRpZmllclwiLCBcInR5cGVcIiwgXCJsYW1iZGFUeXBlXCIsIFwiZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VcIiwgXG5cdFx0XCJwYXJhbWV0ZXJcIiwgXCJ0dXBsZVR5cGVcIiwgXCJ0dXBsZVR5cGVTZXF1ZW5jZVwiLCBcInByaW1hcnlUeXBlXCIsIFwiaWRlbnRpZmllck9yS2V5d29yZFwiLCBcblx0XHRcImtleXdvcmRcIiwgXCJwYXJlbnRoZXNpemVkVHlwZVwiLCBcInVuYXJ5VHlwZVwiLCBcIm9iamVjdFR5cGVcIiwgXCJvYmplY3RQYWlyU2VxdWVuY2VUeXBlXCIsIFxuXHRcdFwib2JqZWN0UGFpclR5cGVcIiwgXCJhcnJheVR5cGVcIiwgXCJub3RBcnJheVR5cGVcIiwgXCJwcm9wZXJ0eUlkZW50aWZpZXJcIiwgXCJvcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXJcIiwgXG5cdFx0XCJleHByZXNzaW9uXCIsIFwidW5hcnlFeHByZXNzaW9uXCIsIFwiYXJyYXlFeHByZXNzaW9uXCIsIFwib2JqZWN0RXhwcmVzc2lvblwiLCBcblx0XHRcIm9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb25cIiwgXCJvYmplY3RQYWlyRXhwcmVzc2lvblwiLCBcImxhbWJkYUV4cHJlc3Npb25cIiwgXG5cdFx0XCJsaXRlcmFsRXhwcmVzc2lvblwiLCBcInBhcmVudGhlc2l6ZWRFeHByZXNzaW9uXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJkZXNjcmlwdGlvbkxpbmVcIiwgXG5cdFx0XCJkZXNjcmlwdGlvbkxpbmVTdGFydFwiLCBcImRlc2NyaXB0aW9uVGV4dFwiLCBcImRlc2NyaXB0aW9uTGluZUVsZW1lbnRcIiwgXCJkZXNjcmlwdGlvbkxpbmVUZXh0XCIsIFxuXHRcdFwiaW5saW5lVGFnXCIsIFwiaW5saW5lVGFnTmFtZVwiLCBcImlubGluZVRhZ0JvZHlcIiwgXCJicmFjZUV4cHJlc3Npb25cIiwgXCJicmFjZUJvZHlcIiwgXG5cdFx0XCJicmFjZVRleHRcIlxuXHRdO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9MSVRFUkFMX05BTUVTOiAoc3RyaW5nIHwgdW5kZWZpbmVkKVtdID0gW1xuXHRcdHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXG5cdFx0dW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiJ0AnXCIsIFwiJysnXCIsIFwiJy0nXCIsIFxuXHRcdFwiJyonXCIsIFwiJy8nXCIsIFwiJzonXCIsIFwiJy4nXCIsIFwiJywnXCIsIFwiJz0nXCIsIFwiJz8nXCIsIFwiJyYnXCIsIFwiJ3wnXCIsIHVuZGVmaW5lZCwgXG5cdFx0XCInISdcIiwgXCIne0AnXCIsIFwiJ3snXCIsIFwiJ30nXCIsIFwiJygnXCIsIFwiJyknXCIsIFwiJ1snXCIsIFwiJ10nXCIsIFwiJzwnXCIsIFwiJz4nXCJcblx0XTtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX1NZTUJPTElDX05BTUVTOiAoc3RyaW5nIHwgdW5kZWZpbmVkKVtdID0gW1xuXHRcdHVuZGVmaW5lZCwgXCJOdW1iZXJMaXRlcmFsXCIsIFwiSW50ZWdlckxpdGVyYWxcIiwgXCJGbG9hdGluZ1BvaW50TGl0ZXJhbFwiLCBcblx0XHRcIkJvb2xlYW5MaXRlcmFsXCIsIFwiQ2hhcmFjdGVyTGl0ZXJhbFwiLCBcIlN0cmluZ0xpdGVyYWxcIiwgXCJOdWxsTGl0ZXJhbFwiLCBcblx0XHRcIklEXCIsIFwiTkVXTElORVwiLCBcIlNQQUNFXCIsIFwiVEVYVF9DT05URU5UXCIsIFwiQVRcIiwgXCJQTFVTXCIsIFwiTUlOVVNcIiwgXCJTVEFSXCIsIFxuXHRcdFwiRk9SV0FSRF9TTEFTSFwiLCBcIkNPTE9OXCIsIFwiUEVSSU9EXCIsIFwiQ09NTUFcIiwgXCJFUVVBTFwiLCBcIlFVRVNUSU9OXCIsIFwiQU1QXCIsIFxuXHRcdFwiUElQRVwiLCBcIkFSUk9XXCIsIFwiRVhDTEFNQVRJT05cIiwgXCJJTkxJTkVfVEFHX1NUQVJUXCIsIFwiQlJBQ0VfT1BFTlwiLCBcIkJSQUNFX0NMT1NFXCIsIFxuXHRcdFwiUEFSRU5fT1BFTlwiLCBcIlBBUkVOX0NMT1NFXCIsIFwiQlJBQ0tFVF9PUEVOXCIsIFwiQlJBQ0tFVF9DTE9TRVwiLCBcIkxFU1NUSEFOXCIsIFxuXHRcdFwiR1JFQVRFUlRIQU5cIlxuXHRdO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFZPQ0FCVUxBUlk6IFZvY2FidWxhcnkgPSBuZXcgVm9jYWJ1bGFyeUltcGwoWERvY1N5bnRheFBhcnNlci5fTElURVJBTF9OQU1FUywgWERvY1N5bnRheFBhcnNlci5fU1lNQk9MSUNfTkFNRVMsIFtdKTtcblxuXHRAT3ZlcnJpZGVcblx0QE5vdE51bGxcblx0cHVibGljIGdldCB2b2NhYnVsYXJ5KCk6IFZvY2FidWxhcnkge1xuXHRcdHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlZPQ0FCVUxBUlk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGdldCBncmFtbWFyRmlsZU5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwiWERvY1N5bnRheFBhcnNlci5nNFwiOyB9XG5cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBnZXQgcnVsZU5hbWVzKCk6IHN0cmluZ1tdIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIucnVsZU5hbWVzOyB9XG5cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBnZXQgc2VyaWFsaXplZEFUTigpOiBzdHJpbmcgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5fc2VyaWFsaXplZEFUTjsgfVxuXG5cdGNvbnN0cnVjdG9yKGlucHV0OiBUb2tlblN0cmVhbSkge1xuXHRcdHN1cGVyKGlucHV0KTtcblx0XHR0aGlzLl9pbnRlcnAgPSBuZXcgUGFyc2VyQVROU2ltdWxhdG9yKFhEb2NTeW50YXhQYXJzZXIuX0FUTiwgdGhpcyk7XG5cdH1cblx0QFJ1bGVWZXJzaW9uKDApXG5cdHB1YmxpYyBkb2N1bWVudGF0aW9uKCk6IERvY3VtZW50YXRpb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEb2N1bWVudGF0aW9uQ29udGV4dCA9IG5ldyBEb2N1bWVudGF0aW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2RvY3VtZW50YXRpb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDEwOTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5FT0Y6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDI7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5FT0YpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkU6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU1BBQ0U6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQVQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDM7XG5cdFx0XHRcdHRoaXMuYm9keSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTA1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDQ7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5FT0YpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0QFJ1bGVWZXJzaW9uKDApXG5cdHB1YmxpYyBib2R5KCk6IEJvZHlDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBCb2R5Q29udGV4dCA9IG5ldyBCb2R5Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMiwgWERvY1N5bnRheFBhcnNlci5SVUxFX2JvZHkpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTE0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR3aGlsZSAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FIHx8IF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMTE7XG5cdFx0XHRcdHRoaXMud2hpdGVzcGFjZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDExNjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSAxMTc7XG5cdFx0XHR0aGlzLmFubm90YXRpb25zKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIHdoaXRlc3BhY2UoKTogV2hpdGVzcGFjZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFdoaXRlc3BhY2VDb250ZXh0ID0gbmV3IFdoaXRlc3BhY2VDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA0LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfd2hpdGVzcGFjZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMTk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICggIShfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUgfHwgX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkgKSB7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgYW5ub3RhdGlvbnMoKTogQW5ub3RhdGlvbnNDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBBbm5vdGF0aW9uc0NvbnRleHQgPSBuZXcgQW5ub3RhdGlvbnNDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYW5ub3RhdGlvbnMpO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTIxO1xuXHRcdFx0dGhpcy50YWcoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMjY7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMyx0aGlzLl9jdHgpO1xuXHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxMjI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxMjM7XG5cdFx0XHRcdFx0dGhpcy50YWcoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTI4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzLHRoaXMuX2N0eCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIHRhZygpOiBUYWdDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBUYWdDb250ZXh0ID0gbmV3IFRhZ0NvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDgsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90YWcpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDI4ODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDI5LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMjk7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzA7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTMxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTMzO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzY7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzc7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAzKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTM5O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0MDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0MTtcblx0XHRcdFx0dGhpcy50YWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNCk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0Mztcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNDQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNDU7XG5cdFx0XHRcdHRoaXMudGFnSWRlbnRpZmllcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQ3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTQ2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0OTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkVRVUFMKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1MTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1MDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNTM7XG5cdFx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA1KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTU1O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1Njtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1Nztcblx0XHRcdFx0dGhpcy50YWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNTg7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNjA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1OTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2Mjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk1JTlVTKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2Mztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2NDtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDY6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDYpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNjY7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTY3O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTY4O1xuXHRcdFx0XHR0aGlzLnRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2OTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3MDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkVRVUFMKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3MTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNzQ7XG5cdFx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3NTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3Nztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTc2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTc5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTUlOVVMpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTgwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTgxO1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNzpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNyk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE4Mztcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODU7XG5cdFx0XHRcdHRoaXMudGFnSWRlbnRpZmllcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTg3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTg2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE4OTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5MTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5MDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTM7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA4OlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA4KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTk1O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5Njtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5Nztcblx0XHRcdFx0dGhpcy50YWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjAxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjAzO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjAyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIwNTtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjA3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjA2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIwOTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkVRVUFMKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxMTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxMDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMTM7XG5cdFx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA5OlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA5KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjE1O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxNjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxNztcblx0XHRcdFx0dGhpcy50YWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMTk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyMTg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjIxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjIzO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjIyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIyNTtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjI2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjI4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzI7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAxMDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMTApO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzQ7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjM1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjM2O1xuXHRcdFx0XHR0aGlzLnRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzNztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjQ0O1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDY7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjQ4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuRVFVQUwpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjUwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjQ5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1Mjtcblx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjUzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjU1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTQ7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTg7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTk7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAxMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMTEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNjE7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjYzO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjYyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2NTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2Nztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2Njtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNjk7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAxMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMTIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNzE7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjczO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjcyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI3NTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI3Nztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI3Njtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNzk7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI4MDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI4Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjgxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjg0O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTUlOVVMpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjg1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjg2O1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIHRhZ05hbWUoKTogVGFnTmFtZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFRhZ05hbWVDb250ZXh0ID0gbmV3IFRhZ05hbWVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxMCwgWERvY1N5bnRheFBhcnNlci5SVUxFX3RhZ05hbWUpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAyOTA7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQVQpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDI5MTtcblx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0QFJ1bGVWZXJzaW9uKDApXG5cdHB1YmxpYyB0YWdJZGVudGlmaWVyKCk6IFRhZ0lkZW50aWZpZXJDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBUYWdJZGVudGlmaWVyQ29udGV4dCA9IG5ldyBUYWdJZGVudGlmaWVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMTIsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90YWdJZGVudGlmaWVyKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDI5Njtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDMwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyOTM7XG5cdFx0XHRcdHRoaXMucHJvcGVydHlUYWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI5NDtcblx0XHRcdFx0dGhpcy5vcHRpb25hbFRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAzKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjk1O1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgcHJvcGVydHlUYWdJZGVudGlmaWVyKCk6IFByb3BlcnR5VGFnSWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFByb3BlcnR5VGFnSWRlbnRpZmllckNvbnRleHQgPSBuZXcgUHJvcGVydHlUYWdJZGVudGlmaWVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMTQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wcm9wZXJ0eVRhZ0lkZW50aWZpZXIpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDMxMjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDMzLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyOTg7XG5cdFx0XHRcdHRoaXMub3B0aW9uYWxUYWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMDE7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjk5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QRVJJT0QpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzMDA7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25hbFRhZ09ySWRlbnRpZmllcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwMzsgXG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHR9IHdoaWxlICggX2xhPT09WERvY1N5bnRheFBhcnNlci5QRVJJT0QgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzA1O1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwODsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzMDY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBFUklPRCk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwNztcblx0XHRcdFx0XHR0aGlzLm9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzEwOyBcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdH0gd2hpbGUgKCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlBFUklPRCApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0QFJ1bGVWZXJzaW9uKDApXG5cdHB1YmxpYyBvcHRpb25hbFRhZ0lkZW50aWZpZXIoKTogT3B0aW9uYWxUYWdJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT3B0aW9uYWxUYWdJZGVudGlmaWVyQ29udGV4dCA9IG5ldyBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxNiwgWERvY1N5bnRheFBhcnNlci5SVUxFX29wdGlvbmFsVGFnSWRlbnRpZmllcik7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDMxNDtcblx0XHRcdHRoaXMub3B0aW9uYWxJZGVudGlmaWVyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIG9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKCk6IE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0ID0gbmV3IE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMTgsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vcHRpb25hbFRhZ09ySWRlbnRpZmllcik7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSAzMTg7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzNCx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzE2O1xuXHRcdFx0XHR0aGlzLm9wdGlvbmFsVGFnSWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMTc7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0QFJ1bGVWZXJzaW9uKDApXG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBJZGVudGlmaWVyQ29udGV4dCA9IG5ldyBJZGVudGlmaWVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMjAsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pZGVudGlmaWVyKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzIwO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLklEKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgb3B0aW9uYWxJZGVudGlmaWVyKCk6IE9wdGlvbmFsSWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9wdGlvbmFsSWRlbnRpZmllckNvbnRleHQgPSBuZXcgT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMjIsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vcHRpb25hbElkZW50aWZpZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAzMjI7XG5cdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSAzMjM7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblxuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dDtcblx0cHVibGljIHR5cGUoX3A6IG51bWJlcik6IFR5cGVDb250ZXh0O1xuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIHR5cGUoX3A/OiBudW1iZXIpOiBUeXBlQ29udGV4dCB7XG5cdFx0aWYgKF9wID09PSB1bmRlZmluZWQpIHtcblx0XHRcdF9wID0gMDtcblx0XHR9XG5cblx0XHRsZXQgX3BhcmVudGN0eDogUGFyc2VyUnVsZUNvbnRleHQgPSB0aGlzLl9jdHg7XG5cdFx0bGV0IF9wYXJlbnRTdGF0ZTogbnVtYmVyID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgX2xvY2FsY3R4OiBUeXBlQ29udGV4dCA9IG5ldyBUeXBlQ29udGV4dCh0aGlzLl9jdHgsIF9wYXJlbnRTdGF0ZSk7XG5cdFx0bGV0IF9wcmV2Y3R4OiBUeXBlQ29udGV4dCA9IF9sb2NhbGN0eDtcblx0XHRsZXQgX3N0YXJ0U3RhdGU6IG51bWJlciA9IDI0O1xuXHRcdHRoaXMuZW50ZXJSZWN1cnNpb25SdWxlKF9sb2NhbGN0eCwgMjQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90eXBlLCBfcCk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzMzO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMzUsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzI2O1xuXHRcdFx0XHR0aGlzLmxhbWJkYVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMjc7XG5cdFx0XHRcdHRoaXMudHVwbGVUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzI4O1xuXHRcdFx0XHR0aGlzLnByaW1hcnlUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzI5O1xuXHRcdFx0XHR0aGlzLnBhcmVudGhlc2l6ZWRUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzMwO1xuXHRcdFx0XHR0aGlzLnVuYXJ5VHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDY6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMzMTtcblx0XHRcdFx0dGhpcy5vYmplY3RUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNzpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzMyO1xuXHRcdFx0XHR0aGlzLmFycmF5VHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY3R4Ll9zdG9wID0gdGhpcy5faW5wdXQudHJ5TFQoLTEpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDM1ODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw0Mix0aGlzLl9jdHgpO1xuXHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX3BhcnNlTGlzdGVuZXJzIT1udWxsICkgdGhpcy50cmlnZ2VyRXhpdFJ1bGVFdmVudCgpO1xuXHRcdFx0XHRcdF9wcmV2Y3R4ID0gX2xvY2FsY3R4O1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0X2xvY2FsY3R4ID0gbmV3IFR5cGVDb250ZXh0KF9wYXJlbnRjdHgsIF9wYXJlbnRTdGF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5wdXNoTmV3UmVjdXJzaW9uQ29udGV4dChfbG9jYWxjdHgsIF9zdGFydFN0YXRlLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdHlwZSk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMzNTtcblx0XHRcdFx0XHRpZiAoISh0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgOCkpKSB0aHJvdyBuZXcgRmFpbGVkUHJlZGljYXRlRXhjZXB0aW9uKHRoaXMsIFwidGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDgpXCIpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzMzc7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDM2LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMzNjtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM0MDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMzOTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzQzO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM0Mjtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM0NTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoICEoX2xhPT09WERvY1N5bnRheFBhcnNlci5BTVAgfHwgX2xhPT09WERvY1N5bnRheFBhcnNlci5QSVBFKSApIHtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM0Nztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMzksdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzQ2O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzUwO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzQ5O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNTM7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzUyO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzU1O1xuXHRcdFx0XHRcdHRoaXMudHlwZSg5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzYwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw0Mix0aGlzLl9jdHgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLnVucm9sbFJlY3Vyc2lvbkNvbnRleHRzKF9wYXJlbnRjdHgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgbGFtYmRhVHlwZSgpOiBMYW1iZGFUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogTGFtYmRhVHlwZUNvbnRleHQgPSBuZXcgTGFtYmRhVHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDI2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfbGFtYmRhVHlwZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDMxO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU46XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNjE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2Mztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw0Myx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNjI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2Njtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw0NCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNjU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzY5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDQ1LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2ODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzcyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5JRCkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzcxO1xuXHRcdFx0XHRcdHRoaXMuZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzc1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDQ3LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM3NDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzc4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNzc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzODE7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzODA7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzgzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fQ0xPU0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzg1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDUwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM4NDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzg4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzODc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTE7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTA7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzkzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQVJST1cpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzk1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDUzLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5NDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzk4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDE7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDA7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDAzO1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNTYsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDA0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5RVUVTVElPTik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuSUQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDc7XG5cdFx0XHRcdHRoaXMucGFyYW1ldGVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNTcsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDA4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MTI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxMTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxNTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxNDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MTc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5BUlJPVyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MTk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNjAsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDE4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MjI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyMTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyNTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyNDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0Mjc7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyOTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw2Myx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0Mjg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlFVRVNUSU9OKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UoKTogRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQgPSBuZXcgRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAyOCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2Zvcm1hbFBhcmFtZXRlclNlcXVlbmNlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQzMztcblx0XHRcdHRoaXMucGFyYW1ldGVyKCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDQ0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR3aGlsZSAoX2xhPT09WERvY1N5bnRheFBhcnNlci5DT01NQSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQzNDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQzNjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDM1O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDM5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDM4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ0MTtcblx0XHRcdFx0dGhpcy5wYXJhbWV0ZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NDY7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIHBhcmFtZXRlcigpOiBQYXJhbWV0ZXJDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBQYXJhbWV0ZXJDb250ZXh0ID0gbmV3IFBhcmFtZXRlckNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDMwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfcGFyYW1ldGVyKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ0Nztcblx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ1Njtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDcwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ0OTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ0ODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDU1O1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIHR1cGxlVHlwZSgpOiBUdXBsZVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBUdXBsZVR5cGVDb250ZXh0ID0gbmV3IFR1cGxlVHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDMyLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdHVwbGVUeXBlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ1OTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuSUQpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDU4O1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNDYxO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkxFU1NUSEFOKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA0NjM7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ2Mjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNDY1O1xuXHRcdFx0dGhpcy50dXBsZVR5cGVTZXF1ZW5jZSgpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ2Nztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDY2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA0Njk7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuR1JFQVRFUlRIQU4pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0QFJ1bGVWZXJzaW9uKDApXG5cdHB1YmxpYyB0dXBsZVR5cGVTZXF1ZW5jZSgpOiBUdXBsZVR5cGVTZXF1ZW5jZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dCA9IG5ldyBUdXBsZVR5cGVTZXF1ZW5jZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDM0LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdHVwbGVUeXBlU2VxdWVuY2UpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDcxO1xuXHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ3Mztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDc0LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ3Mjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA0ODI7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdHdoaWxlIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLkNPTU1BKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDc1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDc3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDc2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ3OTtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ4NDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgcHJpbWFyeVR5cGUoKTogUHJpbWFyeVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBQcmltYXJ5VHlwZUNvbnRleHQgPSBuZXcgUHJpbWFyeVR5cGVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAzNiwgWERvY1N5bnRheFBhcnNlci5SVUxFX3ByaW1hcnlUeXBlKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ4ODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDc3LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0ODU7XG5cdFx0XHRcdHRoaXMub3B0aW9uYWxJZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ4Njtcblx0XHRcdFx0dGhpcy5wcm9wZXJ0eUlkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAzKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDg3O1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXJPcktleXdvcmQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgaWRlbnRpZmllck9yS2V5d29yZCgpOiBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogSWRlbnRpZmllck9yS2V5d29yZENvbnRleHQgPSBuZXcgSWRlbnRpZmllck9yS2V5d29yZENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDM4LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfaWRlbnRpZmllck9yS2V5d29yZCk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA0OTI7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuSUQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0OTA7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDkxO1xuXHRcdFx0XHR0aGlzLmtleXdvcmQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMga2V5d29yZCgpOiBLZXl3b3JkQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogS2V5d29yZENvbnRleHQgPSBuZXcgS2V5d29yZENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDQwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfa2V5d29yZCk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ5NDtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIHBhcmVudGhlc2l6ZWRUeXBlKCk6IFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogUGFyZW50aGVzaXplZFR5cGVDb250ZXh0ID0gbmV3IFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNDIsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wYXJlbnRoZXNpemVkVHlwZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA0OTY7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDk4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0OTc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDUwMDtcblx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA1MDI7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUwMTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNTA0O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBBUkVOX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgdW5hcnlUeXBlKCk6IFVuYXJ5VHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFVuYXJ5VHlwZUNvbnRleHQgPSBuZXcgVW5hcnlUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNDQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV91bmFyeVR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTA2O1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoICEoX2xhPT09WERvY1N5bnRheFBhcnNlci5TVEFSIHx8IF9sYT09PVhEb2NTeW50YXhQYXJzZXIuQU1QKSApIHtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDUwNztcblx0XHRcdHRoaXMucHJpbWFyeVR5cGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgb2JqZWN0VHlwZSgpOiBPYmplY3RUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT2JqZWN0VHlwZUNvbnRleHQgPSBuZXcgT2JqZWN0VHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDQ2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0VHlwZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA1MDk7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTExO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsODEsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTEwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDUxNDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDgyLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUxMztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDUxNztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDgzLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUxNjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA1MjA7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICgoKCgoX2xhIC0gNykpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCAoX2xhIC0gNykpICYgKCgxIDw8IChYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuSUQgLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5TVEFSIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuQU1QIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTiAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4gLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU4gLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5MRVNTVEhBTiAtIDcpKSkpICE9PSAwKSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MTk7XG5cdFx0XHRcdHRoaXMub2JqZWN0UGFpclNlcXVlbmNlVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1MjM7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw4NSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MjI7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNTI2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUyNTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1Mjk7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUyODtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNTMxO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgb2JqZWN0UGFpclNlcXVlbmNlVHlwZSgpOiBPYmplY3RQYWlyU2VxdWVuY2VUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT2JqZWN0UGFpclNlcXVlbmNlVHlwZUNvbnRleHQgPSBuZXcgT2JqZWN0UGFpclNlcXVlbmNlVHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDQ4LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0UGFpclNlcXVlbmNlVHlwZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA1MzM7XG5cdFx0XHR0aGlzLm9iamVjdFBhaXJUeXBlKCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTM1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsODgsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTM0O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDU1MDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0d2hpbGUgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuQ09NTUEpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1Mzc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1Mzk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsODksdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTM4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NDI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU0MTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU0NTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU0NDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NDc7XG5cdFx0XHRcdHRoaXMub2JqZWN0UGFpclR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NTI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIG9iamVjdFBhaXJUeXBlKCk6IE9iamVjdFBhaXJUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT2JqZWN0UGFpclR5cGVDb250ZXh0ID0gbmV3IE9iamVjdFBhaXJUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNTAsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RQYWlyVHlwZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA1NTM7XG5cdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTU1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5RVUVTVElPTikge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NTQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5RVUVTVElPTik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDU1ODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTU3O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1NjA7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDU2Mjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTYxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1NjQ7XG5cdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIGFycmF5VHlwZSgpOiBBcnJheVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBBcnJheVR5cGVDb250ZXh0ID0gbmV3IEFycmF5VHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDUyLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYXJyYXlUeXBlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjEyO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfT1BFTjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU2Njtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfT1BFTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1Njg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsOTYsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTY3O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU3MTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw5Nyx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1NzA7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU3NDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw5OCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1NzM7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTc3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoKCgoKF9sYSAtIDcpKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgKF9sYSAtIDcpKSAmICgoMSA8PCAoWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbCAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLklEIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuU1RBUiAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLkFNUCAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4gLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9PUEVOIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuTEVTU1RIQU4gLSA3KSkpKSAhPT0gMCkpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU3Njtcblx0XHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU5Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0d2hpbGUgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuQ09NTUEpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1Nzk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTgxO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMDAsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTgwO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODQ7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTgzO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTg3O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTg2O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODk7XG5cdFx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU5NDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU5Njtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMDQsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTk1O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU5OTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU5ODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MDI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYwMTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYwNDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfQ0xPU0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklEOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlNUQVI6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQU1QOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU46XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTjpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5MRVNTVEhBTjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYwNTtcblx0XHRcdFx0dGhpcy5ub3RBcnJheVR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MDg7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSAxO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0c3dpdGNoIChfYWx0KSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYwNjtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU4pO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYwNztcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX0NMT1NFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2MTA7IFxuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTA3LHRoaXMuX2N0eCk7XG5cdFx0XHRcdH0gd2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblxuXHRwdWJsaWMgbm90QXJyYXlUeXBlKCk6IE5vdEFycmF5VHlwZUNvbnRleHQ7XG5cdHB1YmxpYyBub3RBcnJheVR5cGUoX3A6IG51bWJlcik6IE5vdEFycmF5VHlwZUNvbnRleHQ7XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgbm90QXJyYXlUeXBlKF9wPzogbnVtYmVyKTogTm90QXJyYXlUeXBlQ29udGV4dCB7XG5cdFx0aWYgKF9wID09PSB1bmRlZmluZWQpIHtcblx0XHRcdF9wID0gMDtcblx0XHR9XG5cblx0XHRsZXQgX3BhcmVudGN0eDogUGFyc2VyUnVsZUNvbnRleHQgPSB0aGlzLl9jdHg7XG5cdFx0bGV0IF9wYXJlbnRTdGF0ZTogbnVtYmVyID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgX2xvY2FsY3R4OiBOb3RBcnJheVR5cGVDb250ZXh0ID0gbmV3IE5vdEFycmF5VHlwZUNvbnRleHQodGhpcy5fY3R4LCBfcGFyZW50U3RhdGUpO1xuXHRcdGxldCBfcHJldmN0eDogTm90QXJyYXlUeXBlQ29udGV4dCA9IF9sb2NhbGN0eDtcblx0XHRsZXQgX3N0YXJ0U3RhdGU6IG51bWJlciA9IDU0O1xuXHRcdHRoaXMuZW50ZXJSZWN1cnNpb25SdWxlKF9sb2NhbGN0eCwgNTQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9ub3RBcnJheVR5cGUsIF9wKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA2MjE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMDksdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjE1O1xuXHRcdFx0XHR0aGlzLmxhbWJkYVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MTY7XG5cdFx0XHRcdHRoaXMudHVwbGVUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjE3O1xuXHRcdFx0XHR0aGlzLnByaW1hcnlUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjE4O1xuXHRcdFx0XHR0aGlzLnBhcmVudGhlc2l6ZWRUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjE5O1xuXHRcdFx0XHR0aGlzLnVuYXJ5VHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDY6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYyMDtcblx0XHRcdFx0dGhpcy5vYmplY3RUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jdHguX3N0b3AgPSB0aGlzLl9pbnB1dC50cnlMVCgtMSk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjQ2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDExNix0aGlzLl9jdHgpO1xuXHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX3BhcnNlTGlzdGVuZXJzIT1udWxsICkgdGhpcy50cmlnZ2VyRXhpdFJ1bGVFdmVudCgpO1xuXHRcdFx0XHRcdF9wcmV2Y3R4ID0gX2xvY2FsY3R4O1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0X2xvY2FsY3R4ID0gbmV3IE5vdEFycmF5VHlwZUNvbnRleHQoX3BhcmVudGN0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRcdFx0XHR0aGlzLnB1c2hOZXdSZWN1cnNpb25Db250ZXh0KF9sb2NhbGN0eCwgX3N0YXJ0U3RhdGUsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9ub3RBcnJheVR5cGUpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2MjM7XG5cdFx0XHRcdFx0aWYgKCEodGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDcpKSkgdGhyb3cgbmV3IEZhaWxlZFByZWRpY2F0ZUV4Y2VwdGlvbih0aGlzLCBcInRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA3KVwiKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjI1O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMTAsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjI0O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjI4O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjI3O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2MzE7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjMwO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjMzO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmICggIShfbGE9PT1YRG9jU3ludGF4UGFyc2VyLkFNUCB8fCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlBJUEUpICkge1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjM1O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMTMsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjM0O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjM4O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjM3O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NDE7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjQwO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjQzO1xuXHRcdFx0XHRcdHRoaXMubm90QXJyYXlUeXBlKDgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NDg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDExNix0aGlzLl9jdHgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLnVucm9sbFJlY3Vyc2lvbkNvbnRleHRzKF9wYXJlbnRjdHgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgcHJvcGVydHlJZGVudGlmaWVyKCk6IFByb3BlcnR5SWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFByb3BlcnR5SWRlbnRpZmllckNvbnRleHQgPSBuZXcgUHJvcGVydHlJZGVudGlmaWVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNTYsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wcm9wZXJ0eUlkZW50aWZpZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDY2Mztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDExOSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjQ5O1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY1MjsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IDE7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRzd2l0Y2ggKF9hbHQpIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjUwO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBFUklPRCk7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjUxO1xuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NTQ7IFxuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTE3LHRoaXMuX2N0eCk7XG5cdFx0XHRcdH0gd2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NTY7XG5cdFx0XHRcdHRoaXMub3B0aW9uYWxJZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NTk7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSAxO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0c3dpdGNoIChfYWx0KSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY1Nztcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QRVJJT0QpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY1ODtcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjYxOyBcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDExOCx0aGlzLl9jdHgpO1xuXHRcdFx0XHR9IHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgb3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKCk6IE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllckNvbnRleHQgPSBuZXcgT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNTgsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjY3O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTIwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NjU7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NjY7XG5cdFx0XHRcdHRoaXMub3B0aW9uYWxJZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXG5cdHB1YmxpYyBleHByZXNzaW9uKCk6IEV4cHJlc3Npb25Db250ZXh0O1xuXHRwdWJsaWMgZXhwcmVzc2lvbihfcDogbnVtYmVyKTogRXhwcmVzc2lvbkNvbnRleHQ7XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgZXhwcmVzc2lvbihfcD86IG51bWJlcik6IEV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRpZiAoX3AgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0X3AgPSAwO1xuXHRcdH1cblxuXHRcdGxldCBfcGFyZW50Y3R4OiBQYXJzZXJSdWxlQ29udGV4dCA9IHRoaXMuX2N0eDtcblx0XHRsZXQgX3BhcmVudFN0YXRlOiBudW1iZXIgPSB0aGlzLnN0YXRlO1xuXHRcdGxldCBfbG9jYWxjdHg6IEV4cHJlc3Npb25Db250ZXh0ID0gbmV3IEV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRsZXQgX3ByZXZjdHg6IEV4cHJlc3Npb25Db250ZXh0ID0gX2xvY2FsY3R4O1xuXHRcdGxldCBfc3RhcnRTdGF0ZTogbnVtYmVyID0gNjA7XG5cdFx0dGhpcy5lbnRlclJlY3Vyc2lvblJ1bGUoX2xvY2FsY3R4LCA2MCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2V4cHJlc3Npb24sIF9wKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA2NzY7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMjEsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjcwO1xuXHRcdFx0XHR0aGlzLnVuYXJ5RXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3MTtcblx0XHRcdFx0dGhpcy5hcnJheUV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NzI7XG5cdFx0XHRcdHRoaXMub2JqZWN0RXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3Mztcblx0XHRcdFx0dGhpcy5sYW1iZGFFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjc0O1xuXHRcdFx0XHR0aGlzLmxpdGVyYWxFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNjpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjc1O1xuXHRcdFx0XHR0aGlzLnBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jdHguX3N0b3AgPSB0aGlzLl9pbnB1dC50cnlMVCgtMSk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjk4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEyNyx0aGlzLl9jdHgpO1xuXHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX3BhcnNlTGlzdGVuZXJzIT1udWxsICkgdGhpcy50cmlnZ2VyRXhpdFJ1bGVFdmVudCgpO1xuXHRcdFx0XHRcdF9wcmV2Y3R4ID0gX2xvY2FsY3R4O1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjk2O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMjYsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRfbG9jYWxjdHggPSBuZXcgRXhwcmVzc2lvbkNvbnRleHQoX3BhcmVudGN0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRcdFx0XHRcdHRoaXMucHVzaE5ld1JlY3Vyc2lvbkNvbnRleHQoX2xvY2FsY3R4LCBfc3RhcnRTdGF0ZSwgWERvY1N5bnRheFBhcnNlci5SVUxFX2V4cHJlc3Npb24pO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3ODtcblx0XHRcdFx0XHRcdGlmICghKHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA3KSkpIHRocm93IG5ldyBGYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24odGhpcywgXCJ0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNylcIik7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjgwO1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2Nzk7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY4Mjtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKCAhKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1RBUiB8fCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0gpICkge1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVySW5saW5lKHRoaXMpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoZWRFT0YgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjg0O1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2ODM7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY4Njtcblx0XHRcdFx0XHRcdHRoaXMuZXhwcmVzc2lvbig4KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0X2xvY2FsY3R4ID0gbmV3IEV4cHJlc3Npb25Db250ZXh0KF9wYXJlbnRjdHgsIF9wYXJlbnRTdGF0ZSk7XG5cdFx0XHRcdFx0XHR0aGlzLnB1c2hOZXdSZWN1cnNpb25Db250ZXh0KF9sb2NhbGN0eCwgX3N0YXJ0U3RhdGUsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9leHByZXNzaW9uKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2ODc7XG5cdFx0XHRcdFx0XHRpZiAoISh0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNikpKSB0aHJvdyBuZXcgRmFpbGVkUHJlZGljYXRlRXhjZXB0aW9uKHRoaXMsIFwidGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDYpXCIpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY4OTtcblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjg4O1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2OTE7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmICggIShfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlBMVVMgfHwgX2xhPT09WERvY1N5bnRheFBhcnNlci5NSU5VUykgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2OTM7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5Mjtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjk1O1xuXHRcdFx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcwMDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTI3LHRoaXMuX2N0eCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMudW5yb2xsUmVjdXJzaW9uQ29udGV4dHMoX3BhcmVudGN0eCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0QFJ1bGVWZXJzaW9uKDApXG5cdHB1YmxpYyB1bmFyeUV4cHJlc3Npb24oKTogVW5hcnlFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogVW5hcnlFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBVbmFyeUV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA2MiwgWERvY1N5bnRheFBhcnNlci5SVUxFX3VuYXJ5RXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA3MDE7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICggIShfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlBMVVMgfHwgX2xhPT09WERvY1N5bnRheFBhcnNlci5NSU5VUykgKSB7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA3MDI7XG5cdFx0XHR0aGlzLmV4cHJlc3Npb24oMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIGFycmF5RXhwcmVzc2lvbigpOiBBcnJheUV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBBcnJheUV4cHJlc3Npb25Db250ZXh0ID0gbmV3IEFycmF5RXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDY0LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYXJyYXlFeHByZXNzaW9uKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDcwNDtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDcwNjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEyOCx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MDU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA3MDk7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMjksdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzA4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDcxMjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEzMCx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MTE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA3MTU7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTnVtYmVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLklEKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuUExVUykgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk1JTlVTKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTikgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4pIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU4pKSkgIT09IDApKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcxNDtcblx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA3MzA7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdHdoaWxlIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLkNPTU1BKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzE3O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzE5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEzMix0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3MTg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzIyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzIxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcyNTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzI0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzI3O1xuXHRcdFx0XHR0aGlzLmV4cHJlc3Npb24oMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzMyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDczNDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEzNix0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MzM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA3Mzc7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDczNjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNzQwO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDczOTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA3NDI7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIG9iamVjdEV4cHJlc3Npb24oKTogT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9iamVjdEV4cHJlc3Npb25Db250ZXh0ID0gbmV3IE9iamVjdEV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA2NiwgWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdEV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzQ0O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDc0Njtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEzOSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3NDU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNzQ5O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTQwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc0ODtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDc1Mjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE0MSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3NTE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNzU1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5Cb29sZWFuTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWwpKSkgIT09IDApKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc1NDtcblx0XHRcdFx0dGhpcy5vYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDc1ODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE0Myx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3NTc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNzYxO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc2MDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA3NjQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc2Mztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNzY2O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgb2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbigpOiBPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgT2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDY4LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzY4O1xuXHRcdFx0dGhpcy5vYmplY3RQYWlyRXhwcmVzc2lvbigpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDc4NTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNTAsdGhpcy5fY3R4KTtcblx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzcwO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc2OTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc3Mjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NzQ7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE0Nyx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NzM7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3Nzc7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NzY7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc4MDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3Nzk7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3ODI7XG5cdFx0XHRcdFx0dGhpcy5vYmplY3RQYWlyRXhwcmVzc2lvbigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3ODc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE1MCx0aGlzLl9jdHgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0QFJ1bGVWZXJzaW9uKDApXG5cdHB1YmxpYyBvYmplY3RQYWlyRXhwcmVzc2lvbigpOiBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDcwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0UGFpckV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDgwODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE1NSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzg4O1xuXHRcdFx0XHR0aGlzLmxpdGVyYWxFeHByZXNzaW9uKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3OTA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3ODk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzkyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzk0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzkzO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc5Njtcblx0XHRcdFx0dGhpcy5vYmplY3RFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc5ODtcblx0XHRcdFx0dGhpcy5saXRlcmFsRXhwcmVzc2lvbigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODAwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzk5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgwMjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgwNDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgwMztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MDY7XG5cdFx0XHRcdHRoaXMubGl0ZXJhbEV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgbGFtYmRhRXhwcmVzc2lvbigpOiBMYW1iZGFFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogTGFtYmRhRXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgTGFtYmRhRXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDcyLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfbGFtYmRhRXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gODgwO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU46XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MTA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgxMjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNTYsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODExO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MTU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTU3LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgxNDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MTg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTU4LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgxNztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODIxO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5JRCkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODIwO1xuXHRcdFx0XHRcdHRoaXMuZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODI0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE2MCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4MjM7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgyNztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODI2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODMwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODI5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgzMjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBBUkVOX0NMT1NFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgzNDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNjMsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODMzO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4Mzc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgzNjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg0MDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgzOTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NDI7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5BUlJPVyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NDQ7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTY2LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg0Mztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODQ3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NDY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NTA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NDk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODUyO1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NTQ7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTY5LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg1Mztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklEOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODU2O1xuXHRcdFx0XHR0aGlzLnBhcmFtZXRlcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODU4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE3MCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NTc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg2MTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODYwO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODY0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODYzO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg2Njtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkFSUk9XKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg2ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNzMsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODY3O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NzE7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg3MDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg3NDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg3Mztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NzY7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg3ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNzYsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODc3O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5RVUVTVElPTik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIGxpdGVyYWxFeHByZXNzaW9uKCk6IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0ID0gbmV3IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNzQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9saXRlcmFsRXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA4ODI7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICggISgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTnVtYmVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbCkpKSAhPT0gMCkpICkge1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVySW5saW5lKHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHR0aGlzLm1hdGNoZWRFT0YgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIHBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKCk6IFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogUGFyZW50aGVzaXplZEV4cHJlc3Npb25Db250ZXh0ID0gbmV3IFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNzYsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wYXJlbnRoZXNpemVkRXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA4ODQ7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gODg2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4ODU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDg4ODtcblx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA4OTA7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg4OTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gODkyO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBBUkVOX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgZGVzY3JpcHRpb24oKTogRGVzY3JpcHRpb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEZXNjcmlwdGlvbkNvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA3OCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gODk0O1xuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbkxpbmUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lKCk6IERlc2NyaXB0aW9uTGluZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IERlc2NyaXB0aW9uTGluZUNvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25MaW5lQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgODAsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbkxpbmUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDkxMDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU3RyaW5nTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TUEFDRTpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQ6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTUlOVVM6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5DT0xPTjpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5QRVJJT0Q6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg5Njtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbkxpbmVTdGFydCgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTAwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHR3aGlsZSAoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5Cb29sZWFuTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5JRCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQVQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5NSU5VUykgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0gpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5DT0xPTikgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlBFUklPRCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLklOTElORV9UQUdfU1RBUlQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UpKSkgIT09IDApKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODk3O1xuXHRcdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25MaW5lRWxlbWVudCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkwMjtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JTkxJTkVfVEFHX1NUQVJUOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTAzO1xuXHRcdFx0XHR0aGlzLmlubGluZVRhZygpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTA3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHR3aGlsZSAoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5Cb29sZWFuTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5JRCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQVQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5NSU5VUykgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0gpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5DT0xPTikgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlBFUklPRCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLklOTElORV9UQUdfU1RBUlQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UpKSkgIT09IDApKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTA0O1xuXHRcdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25MaW5lRWxlbWVudCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkwOTtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lU3RhcnQoKTogRGVzY3JpcHRpb25MaW5lU3RhcnRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEZXNjcmlwdGlvbkxpbmVTdGFydENvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25MaW5lU3RhcnRDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA4MiwgWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZVN0YXJ0KTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA5MTM7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkxMjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gOTE2OyBcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSAxO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRzd2l0Y2ggKF9hbHQpIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkxNTtcblx0XHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uVGV4dCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MTg7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxODQsdGhpcy5fY3R4KTtcblx0XHRcdH0gd2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDkyNTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxODYsdGhpcy5fY3R4KTtcblx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5MjM7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTnVtYmVyTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQm9vbGVhbkxpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5NSU5VUzpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQ09MT046XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBFUklPRDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0U6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTIwO1xuXHRcdFx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvblRleHQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TUEFDRTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5MjE7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkFUOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkyMjtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5BVCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5Mjc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE4Nix0aGlzLl9jdHgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0QFJ1bGVWZXJzaW9uKDApXG5cdHB1YmxpYyBkZXNjcmlwdGlvblRleHQoKTogRGVzY3JpcHRpb25UZXh0Q29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogRGVzY3JpcHRpb25UZXh0Q29udGV4dCA9IG5ldyBEZXNjcmlwdGlvblRleHRDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA4NCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uVGV4dCk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA5Mzc7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTI4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkyOTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLklEKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAzKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTMwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNCk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkzMTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA1KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTMyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNPTE9OOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA2KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTMzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk1JTlVTOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA3KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTM0O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTUlOVVMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBFUklPRDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgOCk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkzNTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBFUklPRCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTnVtYmVyTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5Cb29sZWFuTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWw6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDkpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MzY7XG5cdFx0XHRcdHRoaXMubGl0ZXJhbEV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lRWxlbWVudCgpOiBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDg2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lRWxlbWVudCk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA5NDE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuSU5MSU5FX1RBR19TVEFSVDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkzOTtcblx0XHRcdFx0dGhpcy5pbmxpbmVUYWcoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU3RyaW5nTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TUEFDRTpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQ6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQVQ6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTUlOVVM6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5DT0xPTjpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5QRVJJT0Q6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk0MDtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbkxpbmVUZXh0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIGRlc2NyaXB0aW9uTGluZVRleHQoKTogRGVzY3JpcHRpb25MaW5lVGV4dENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IERlc2NyaXB0aW9uTGluZVRleHRDb250ZXh0ID0gbmV3IERlc2NyaXB0aW9uTGluZVRleHRDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA4OCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZVRleHQpO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTQ2OyBcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSAxO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRzd2l0Y2ggKF9hbHQpIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTQ2O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuSUQ6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTUlOVVM6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0g6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNPTE9OOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5QRVJJT0Q6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU46XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk0Mztcblx0XHRcdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25UZXh0KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU1BBQ0U6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTQ0O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5BVDpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5NDU7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQVQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTQ4OyBcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTkwLHRoaXMuX2N0eCk7XG5cdFx0XHR9IHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgaW5saW5lVGFnKCk6IElubGluZVRhZ0NvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IElubGluZVRhZ0NvbnRleHQgPSBuZXcgSW5saW5lVGFnQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOTAsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pbmxpbmVUYWcpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTUwO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLklOTElORV9UQUdfU1RBUlQpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDk1MTtcblx0XHRcdHRoaXMuaW5saW5lVGFnTmFtZSgpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDk1Mjtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTU0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jU3ludGF4UGFyc2VyLklEKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlBFUklPRCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4pKSkgIT09IDApKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk1Mztcblx0XHRcdFx0dGhpcy5pbmxpbmVUYWdCb2R5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDk1Njtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIGlubGluZVRhZ05hbWUoKTogSW5saW5lVGFnTmFtZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IElubGluZVRhZ05hbWVDb250ZXh0ID0gbmV3IElubGluZVRhZ05hbWVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA5MiwgWERvY1N5bnRheFBhcnNlci5SVUxFX2lubGluZVRhZ05hbWUpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA5NTg7XG5cdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdEBSdWxlVmVyc2lvbigwKVxuXHRwdWJsaWMgaW5saW5lVGFnQm9keSgpOiBJbmxpbmVUYWdCb2R5Q29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogSW5saW5lVGFnQm9keUNvbnRleHQgPSBuZXcgSW5saW5lVGFnQm9keUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDk0LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfaW5saW5lVGFnQm9keSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA5NjE7IFxuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTYwO1xuXHRcdFx0XHR0aGlzLmJyYWNlQm9keSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk2MzsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR9IHdoaWxlICggKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jU3ludGF4UGFyc2VyLklEKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlBFUklPRCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4pKSkgIT09IDApICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIGJyYWNlRXhwcmVzc2lvbigpOiBCcmFjZUV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBCcmFjZUV4cHJlc3Npb25Db250ZXh0ID0gbmV3IEJyYWNlRXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDk2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYnJhY2VFeHByZXNzaW9uKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDk2NTtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA5Njk7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdHdoaWxlICgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NTeW50YXhQYXJzZXIuSUQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTikpKSAhPT0gMCkpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5NjY7XG5cdFx0XHRcdHRoaXMuYnJhY2VCb2R5KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTcxO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDk3Mjtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRAUnVsZVZlcnNpb24oMClcblx0cHVibGljIGJyYWNlQm9keSgpOiBCcmFjZUJvZHlDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBCcmFjZUJvZHlDb250ZXh0ID0gbmV3IEJyYWNlQm9keUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDk4LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYnJhY2VCb2R5KTtcblx0XHR0cnkge1xuXHRcdFx0bGV0IF9hbHQ6IG51bWJlcjtcblx0XHRcdHRoaXMuc3RhdGUgPSA5ODM7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk3NDtcblx0XHRcdFx0dGhpcy5icmFjZUV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5ORVdMSU5FOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlNQQUNFOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBFUklPRDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk3NTtcblx0XHRcdFx0dGhpcy5icmFjZVRleHQoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk4MDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTk0LHRoaXMuX2N0eCk7XG5cdFx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5NzY7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTc3O1xuXHRcdFx0XHRcdFx0dGhpcy5icmFjZVRleHQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5ODI7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxOTQsdGhpcy5fY3R4KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0QFJ1bGVWZXJzaW9uKDApXG5cdHB1YmxpYyBicmFjZVRleHQoKTogQnJhY2VUZXh0Q29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogQnJhY2VUZXh0Q29udGV4dCA9IG5ldyBCcmFjZVRleHRDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxMDAsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9icmFjZVRleHQpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTg1O1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoICEoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jU3ludGF4UGFyc2VyLklEKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlBFUklPRCkpKSAhPT0gMCkpICkge1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVySW5saW5lKHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHR0aGlzLm1hdGNoZWRFT0YgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXG5cdHB1YmxpYyBzZW1wcmVkKF9sb2NhbGN0eDogUnVsZUNvbnRleHQsIHJ1bGVJbmRleDogbnVtYmVyLCBwcmVkSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHN3aXRjaCAocnVsZUluZGV4KSB7XG5cdFx0Y2FzZSAxMjpcblx0XHRcdHJldHVybiB0aGlzLnR5cGVfc2VtcHJlZChfbG9jYWxjdHggYXMgVHlwZUNvbnRleHQsIHByZWRJbmRleCk7XG5cblx0XHRjYXNlIDI3OlxuXHRcdFx0cmV0dXJuIHRoaXMubm90QXJyYXlUeXBlX3NlbXByZWQoX2xvY2FsY3R4IGFzIE5vdEFycmF5VHlwZUNvbnRleHQsIHByZWRJbmRleCk7XG5cblx0XHRjYXNlIDMwOlxuXHRcdFx0cmV0dXJuIHRoaXMuZXhwcmVzc2lvbl9zZW1wcmVkKF9sb2NhbGN0eCBhcyBFeHByZXNzaW9uQ29udGV4dCwgcHJlZEluZGV4KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cHJpdmF0ZSB0eXBlX3NlbXByZWQoX2xvY2FsY3R4OiBUeXBlQ29udGV4dCwgcHJlZEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRzd2l0Y2ggKHByZWRJbmRleCkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiB0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgOCk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHByaXZhdGUgbm90QXJyYXlUeXBlX3NlbXByZWQoX2xvY2FsY3R4OiBOb3RBcnJheVR5cGVDb250ZXh0LCBwcmVkSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHN3aXRjaCAocHJlZEluZGV4KSB7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA3KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cHJpdmF0ZSBleHByZXNzaW9uX3NlbXByZWQoX2xvY2FsY3R4OiBFeHByZXNzaW9uQ29udGV4dCwgcHJlZEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRzd2l0Y2ggKHByZWRJbmRleCkge1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiB0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNyk7XG5cblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gdGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDYpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9zZXJpYWxpemVkQVROU2VnbWVudHM6IG51bWJlciA9IDI7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9zZXJpYWxpemVkQVROU2VnbWVudDA6IHN0cmluZyA9XG5cdFx0XCJcXHgwM1xcdUFGNkZcXHU4MzIwXFx1NDc5RFxcdUI3NUNcXHU0ODgwXFx1MTYwNVxcdTE5MUNcXHVBQjM3XFx4MDMkXFx1MDNERVxceDA0XFx4MDJcIitcblx0XHRcIlxcdFxceDAyXFx4MDRcXHgwM1xcdFxceDAzXFx4MDRcXHgwNFxcdFxceDA0XFx4MDRcXHgwNVxcdFxceDA1XFx4MDRcXHgwNlxcdFxceDA2XFx4MDRcXHgwN1wiK1xuXHRcdFwiXFx0XFx4MDdcXHgwNFxcYlxcdFxcYlxceDA0XFx0XFx0XFx0XFx4MDRcXG5cXHRcXG5cXHgwNFxcdlxcdFxcdlxceDA0XFxmXFx0XFxmXFx4MDRcXHJcXHRcXHJcXHgwNFwiK1xuXHRcdFwiXFx4MEVcXHRcXHgwRVxceDA0XFx4MEZcXHRcXHgwRlxceDA0XFx4MTBcXHRcXHgxMFxceDA0XFx4MTFcXHRcXHgxMVxceDA0XFx4MTJcXHRcXHgxMlxceDA0XCIrXG5cdFx0XCJcXHgxM1xcdFxceDEzXFx4MDRcXHgxNFxcdFxceDE0XFx4MDRcXHgxNVxcdFxceDE1XFx4MDRcXHgxNlxcdFxceDE2XFx4MDRcXHgxN1xcdFxceDE3XFx4MDRcIitcblx0XHRcIlxceDE4XFx0XFx4MThcXHgwNFxceDE5XFx0XFx4MTlcXHgwNFxceDFBXFx0XFx4MUFcXHgwNFxceDFCXFx0XFx4MUJcXHgwNFxceDFDXFx0XFx4MUNcXHgwNFwiK1xuXHRcdFwiXFx4MURcXHRcXHgxRFxceDA0XFx4MUVcXHRcXHgxRVxceDA0XFx4MUZcXHRcXHgxRlxceDA0IFxcdCBcXHgwNCFcXHQhXFx4MDRcXFwiXFx0XFxcIlxceDA0I1wiK1xuXHRcdFwiXFx0I1xceDA0JFxcdCRcXHgwNCVcXHQlXFx4MDQmXFx0JlxceDA0XFwnXFx0XFwnXFx4MDQoXFx0KFxceDA0KVxcdClcXHgwNCpcXHQqXFx4MDQrXFx0K1wiK1xuXHRcdFwiXFx4MDQsXFx0LFxceDA0LVxcdC1cXHgwNC5cXHQuXFx4MDQvXFx0L1xceDA0MFxcdDBcXHgwNDFcXHQxXFx4MDQyXFx0MlxceDA0M1xcdDNcXHgwNDRcIitcblx0XHRcIlxcdDRcXHgwM1xceDAyXFx4MDNcXHgwMlxceDAzXFx4MDJcXHgwNVxceDAybFxcblxceDAyXFx4MDNcXHgwMlxceDAzXFx4MDJcXHgwNVxceDAycFxcblwiK1xuXHRcdFwiXFx4MDJcXHgwM1xceDAzXFx4MDdcXHgwM3NcXG5cXHgwM1xcZlxceDAzXFx4MEVcXHgwM3ZcXHZcXHgwM1xceDAzXFx4MDNcXHgwM1xceDAzXFx4MDNcXHgwNFwiK1xuXHRcdFwiXFx4MDNcXHgwNFxceDAzXFx4MDVcXHgwM1xceDA1XFx4MDNcXHgwNVxceDA3XFx4MDVcXHg3RlxcblxceDA1XFxmXFx4MDVcXHgwRVxceDA1XFx4ODJcXHZcIitcblx0XHRcIlxceDA1XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHg4OFxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcIitcblx0XHRcIlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlwiK1xuXHRcdFwiXFx4MDNcXHgwNlxceDA1XFx4MDZcXHg5NlxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4OUFcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1wiK1xuXHRcdFwiXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhBM1xcblxceDA2XFx4MDNcXHgwNlwiK1xuXHRcdFwiXFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XCIrXG5cdFx0XCJcXHgwNVxceDA2XFx4QUZcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhCNFxcblxceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhCRVxcblxceDA2XCIrXG5cdFx0XCJcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhDMlxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4Q0FcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceENFXFxuXFx4MDZcXHgwM1xceDA2XCIrXG5cdFx0XCJcXHgwM1xceDA2XFx4MDVcXHgwNlxceEQyXFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhENlxcblxceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4REVcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XCIrXG5cdFx0XCJcXHgwNVxceDA2XFx4RTJcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhFN1xcblxceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhGMVxcblxceDA2XCIrXG5cdFx0XCJcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhGNVxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4RjlcXG5cXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4RkRcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHUwMTAyXFxuXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHUwMTBBXFxuXFx4MDZcIitcblx0XHRcIlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxcdTAxMEVcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVwiK1xuXHRcdFwiXFx4MDZcXHUwMTE0XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHUwMTE4XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDA1XFx4MDZcXHUwMTFEXFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxcdTAxMjNcIitcblx0XHRcIlxcblxceDA2XFx4MDNcXHgwN1xceDAzXFx4MDdcXHgwM1xceDA3XFx4MDNcXGJcXHgwM1xcYlxceDAzXFxiXFx4MDVcXGJcXHUwMTJCXFxuXFxiXFx4MDNcXHRcIitcblx0XHRcIlxceDAzXFx0XFx4MDNcXHRcXHgwNlxcdFxcdTAxMzBcXG5cXHRcXHJcXHRcXHgwRVxcdFxcdTAxMzFcXHgwM1xcdFxceDAzXFx0XFx4MDNcXHRcXHgwNlxcdFxcdTAxMzdcIitcblx0XHRcIlxcblxcdFxcclxcdFxceDBFXFx0XFx1MDEzOFxceDA1XFx0XFx1MDEzQlxcblxcdFxceDAzXFxuXFx4MDNcXG5cXHgwM1xcdlxceDAzXFx2XFx4MDVcXHZcXHUwMTQxXCIrXG5cdFx0XCJcXG5cXHZcXHgwM1xcZlxceDAzXFxmXFx4MDNcXHJcXHgwM1xcclxceDAzXFxyXFx4MDNcXHgwRVxceDAzXFx4MEVcXHgwM1xceDBFXFx4MDNcXHgwRVxceDAzXCIrXG5cdFx0XCJcXHgwRVxceDAzXFx4MEVcXHgwM1xceDBFXFx4MDNcXHgwRVxceDA1XFx4MEVcXHUwMTUwXFxuXFx4MEVcXHgwM1xceDBFXFx4MDNcXHgwRVxceDA1XFx4MEVcIitcblx0XHRcIlxcdTAxNTRcXG5cXHgwRVxceDAzXFx4MEVcXHgwNVxceDBFXFx1MDE1N1xcblxceDBFXFx4MDNcXHgwRVxceDA1XFx4MEVcXHUwMTVBXFxuXFx4MEVcXHgwM1wiK1xuXHRcdFwiXFx4MEVcXHgwM1xceDBFXFx4MDVcXHgwRVxcdTAxNUVcXG5cXHgwRVxceDAzXFx4MEVcXHgwNVxceDBFXFx1MDE2MVxcblxceDBFXFx4MDNcXHgwRVxceDA1XCIrXG5cdFx0XCJcXHgwRVxcdTAxNjRcXG5cXHgwRVxceDAzXFx4MEVcXHgwN1xceDBFXFx1MDE2N1xcblxceDBFXFxmXFx4MEVcXHgwRVxceDBFXFx1MDE2QVxcdlxceDBFXCIrXG5cdFx0XCJcXHgwM1xceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTZFXFxuXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxNzFcXG5cXHgwRlxceDAzXFx4MEZcIitcblx0XHRcIlxceDA1XFx4MEZcXHUwMTc0XFxuXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxNzdcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE3QVwiK1xuXHRcdFwiXFxuXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxN0RcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE4MFxcblxceDBGXFx4MDNcXHgwRlwiK1xuXHRcdFwiXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTg0XFxuXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxODdcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXCIrXG5cdFx0XCJcXHUwMThBXFxuXFx4MEZcXHgwM1xceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMThFXFxuXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxOTFcIitcblx0XHRcIlxcblxceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTk0XFxuXFx4MEZcXHgwM1xceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTk4XFxuXFx4MEZcIitcblx0XHRcIlxceDAzXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxOUNcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE5RlxcblxceDBGXFx4MDNcXHgwRlwiK1xuXHRcdFwiXFx4MDVcXHgwRlxcdTAxQTJcXG5cXHgwRlxceDAzXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxQTZcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXCIrXG5cdFx0XCJcXHUwMUE5XFxuXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxQUNcXG5cXHgwRlxceDAzXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxQjBcIitcblx0XHRcIlxcblxceDBGXFx4MDVcXHgwRlxcdTAxQjJcXG5cXHgwRlxceDAzXFx4MTBcXHgwM1xceDEwXFx4MDNcXHgxMFxceDA1XFx4MTBcXHUwMUI3XFxuXFx4MTBcIitcblx0XHRcIlxceDAzXFx4MTBcXHgwNVxceDEwXFx1MDFCQVxcblxceDEwXFx4MDNcXHgxMFxceDA3XFx4MTBcXHUwMUJEXFxuXFx4MTBcXGZcXHgxMFxceDBFXFx4MTBcIitcblx0XHRcIlxcdTAxQzBcXHZcXHgxMFxceDAzXFx4MTFcXHgwM1xceDExXFx4MDVcXHgxMVxcdTAxQzRcXG5cXHgxMVxceDAzXFx4MTFcXHgwM1xceDExXFx4MDVcXHgxMVwiK1xuXHRcdFwiXFx1MDFDOFxcblxceDExXFx4MDNcXHgxMVxceDA1XFx4MTFcXHUwMUNCXFxuXFx4MTFcXHgwM1xceDEyXFx4MDVcXHgxMlxcdTAxQ0VcXG5cXHgxMlxceDAzXCIrXG5cdFx0XCJcXHgxMlxceDAzXFx4MTJcXHgwNVxceDEyXFx1MDFEMlxcblxceDEyXFx4MDNcXHgxMlxceDAzXFx4MTJcXHgwNVxceDEyXFx1MDFENlxcblxceDEyXFx4MDNcIitcblx0XHRcIlxceDEyXFx4MDNcXHgxMlxceDAzXFx4MTNcXHgwM1xceDEzXFx4MDVcXHgxM1xcdTAxRENcXG5cXHgxM1xceDAzXFx4MTNcXHgwM1xceDEzXFx4MDVcXHgxM1wiK1xuXHRcdFwiXFx1MDFFMFxcblxceDEzXFx4MDNcXHgxM1xceDA3XFx4MTNcXHUwMUUzXFxuXFx4MTNcXGZcXHgxM1xceDBFXFx4MTNcXHUwMUU2XFx2XFx4MTNcXHgwM1wiK1xuXHRcdFwiXFx4MTRcXHgwM1xceDE0XFx4MDNcXHgxNFxceDA1XFx4MTRcXHUwMUVCXFxuXFx4MTRcXHgwM1xceDE1XFx4MDNcXHgxNVxceDA1XFx4MTVcXHUwMUVGXCIrXG5cdFx0XCJcXG5cXHgxNVxceDAzXFx4MTZcXHgwM1xceDE2XFx4MDNcXHgxN1xceDAzXFx4MTdcXHgwNVxceDE3XFx1MDFGNVxcblxceDE3XFx4MDNcXHgxN1xceDAzXCIrXG5cdFx0XCJcXHgxN1xceDA1XFx4MTdcXHUwMUY5XFxuXFx4MTdcXHgwM1xceDE3XFx4MDNcXHgxN1xceDAzXFx4MThcXHgwM1xceDE4XFx4MDNcXHgxOFxceDAzXFx4MTlcIitcblx0XHRcIlxceDAzXFx4MTlcXHgwNVxceDE5XFx1MDIwMlxcblxceDE5XFx4MDNcXHgxOVxceDA1XFx4MTlcXHUwMjA1XFxuXFx4MTlcXHgwM1xceDE5XFx4MDVcXHgxOVwiK1xuXHRcdFwiXFx1MDIwOFxcblxceDE5XFx4MDNcXHgxOVxceDA1XFx4MTlcXHUwMjBCXFxuXFx4MTlcXHgwM1xceDE5XFx4MDVcXHgxOVxcdTAyMEVcXG5cXHgxOVxceDAzXCIrXG5cdFx0XCJcXHgxOVxceDA1XFx4MTlcXHUwMjExXFxuXFx4MTlcXHgwM1xceDE5XFx4MDVcXHgxOVxcdTAyMTRcXG5cXHgxOVxceDAzXFx4MTlcXHgwM1xceDE5XFx4MDNcIitcblx0XHRcIlxceDFBXFx4MDNcXHgxQVxceDA1XFx4MUFcXHUwMjFBXFxuXFx4MUFcXHgwM1xceDFBXFx4MDNcXHgxQVxceDA1XFx4MUFcXHUwMjFFXFxuXFx4MUFcXHgwM1wiK1xuXHRcdFwiXFx4MUFcXHgwNVxceDFBXFx1MDIyMVxcblxceDFBXFx4MDNcXHgxQVxceDA1XFx4MUFcXHUwMjI0XFxuXFx4MUFcXHgwM1xceDFBXFx4MDdcXHgxQVxcdTAyMjdcIitcblx0XHRcIlxcblxceDFBXFxmXFx4MUFcXHgwRVxceDFBXFx1MDIyQVxcdlxceDFBXFx4MDNcXHgxQlxceDAzXFx4MUJcXHgwNVxceDFCXFx1MDIyRVxcblxceDFCXFx4MDNcIitcblx0XHRcIlxceDFCXFx4MDVcXHgxQlxcdTAyMzFcXG5cXHgxQlxceDAzXFx4MUJcXHgwM1xceDFCXFx4MDVcXHgxQlxcdTAyMzVcXG5cXHgxQlxceDAzXFx4MUJcXHgwM1wiK1xuXHRcdFwiXFx4MUJcXHgwM1xceDFDXFx4MDNcXHgxQ1xceDA1XFx4MUNcXHUwMjNCXFxuXFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1xcdTAyM0VcXG5cXHgxQ1xceDAzXCIrXG5cdFx0XCJcXHgxQ1xceDA1XFx4MUNcXHUwMjQxXFxuXFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1xcdTAyNDRcXG5cXHgxQ1xceDAzXFx4MUNcXHgwM1xceDFDXFx4MDVcIitcblx0XHRcIlxceDFDXFx1MDI0OFxcblxceDFDXFx4MDNcXHgxQ1xceDA1XFx4MUNcXHUwMjRCXFxuXFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1xcdTAyNEVcXG5cXHgxQ1wiK1xuXHRcdFwiXFx4MDNcXHgxQ1xceDA3XFx4MUNcXHUwMjUxXFxuXFx4MUNcXGZcXHgxQ1xceDBFXFx4MUNcXHUwMjU0XFx2XFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1wiK1xuXHRcdFwiXFx1MDI1N1xcblxceDFDXFx4MDNcXHgxQ1xceDA1XFx4MUNcXHUwMjVBXFxuXFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1xcdTAyNURcXG5cXHgxQ1xceDAzXCIrXG5cdFx0XCJcXHgxQ1xceDAzXFx4MUNcXHgwM1xceDFDXFx4MDNcXHgxQ1xceDA2XFx4MUNcXHUwMjYzXFxuXFx4MUNcXHJcXHgxQ1xceDBFXFx4MUNcXHUwMjY0XFx4MDVcIitcblx0XHRcIlxceDFDXFx1MDI2N1xcblxceDFDXFx4MDNcXHgxRFxceDAzXFx4MURcXHgwM1xceDFEXFx4MDNcXHgxRFxceDAzXFx4MURcXHgwM1xceDFEXFx4MDNcXHgxRFwiK1xuXHRcdFwiXFx4MDVcXHgxRFxcdTAyNzBcXG5cXHgxRFxceDAzXFx4MURcXHgwM1xceDFEXFx4MDVcXHgxRFxcdTAyNzRcXG5cXHgxRFxceDAzXFx4MURcXHgwNVxceDFEXCIrXG5cdFx0XCJcXHUwMjc3XFxuXFx4MURcXHgwM1xceDFEXFx4MDVcXHgxRFxcdTAyN0FcXG5cXHgxRFxceDAzXFx4MURcXHgwM1xceDFEXFx4MDVcXHgxRFxcdTAyN0VcIitcblx0XHRcIlxcblxceDFEXFx4MDNcXHgxRFxceDA1XFx4MURcXHUwMjgxXFxuXFx4MURcXHgwM1xceDFEXFx4MDVcXHgxRFxcdTAyODRcXG5cXHgxRFxceDAzXFx4MURcIitcblx0XHRcIlxceDA3XFx4MURcXHUwMjg3XFxuXFx4MURcXGZcXHgxRFxceDBFXFx4MURcXHUwMjhBXFx2XFx4MURcXHgwM1xceDFFXFx4MDNcXHgxRVxceDAzXFx4MUVcIitcblx0XHRcIlxceDA2XFx4MUVcXHUwMjhGXFxuXFx4MUVcXHJcXHgxRVxceDBFXFx4MUVcXHUwMjkwXFx4MDNcXHgxRVxceDAzXFx4MUVcXHgwM1xceDFFXFx4MDZcXHgxRVwiK1xuXHRcdFwiXFx1MDI5NlxcblxceDFFXFxyXFx4MUVcXHgwRVxceDFFXFx1MDI5N1xceDA1XFx4MUVcXHUwMjlBXFxuXFx4MUVcXHgwM1xceDFGXFx4MDNcXHgxRlxceDA1XCIrXG5cdFx0XCJcXHgxRlxcdTAyOUVcXG5cXHgxRlxceDAzIFxceDAzIFxceDAzIFxceDAzIFxceDAzIFxceDAzIFxceDAzIFxceDA1IFxcdTAyQTdcXG4gXFx4MDNcIitcblx0XHRcIiBcXHgwMyBcXHgwNSBcXHUwMkFCXFxuIFxceDAzIFxceDAzIFxceDA1IFxcdTAyQUZcXG4gXFx4MDMgXFx4MDMgXFx4MDMgXFx4MDUgXFx1MDJCNFwiK1xuXHRcdFwiXFxuIFxceDAzIFxceDAzIFxceDA1IFxcdTAyQjhcXG4gXFx4MDMgXFx4MDcgXFx1MDJCQlxcbiBcXGYgXFx4MEUgXFx1MDJCRVxcdiBcXHgwMyFcXHgwM1wiK1xuXHRcdFwiIVxceDAzIVxceDAzXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAyQzVcXG5cXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDJDOFxcblxcXCJcXHgwM1xcXCJcXHgwNVxcXCJcXHUwMkNCXCIrXG5cdFx0XCJcXG5cXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDJDRVxcblxcXCJcXHgwM1xcXCJcXHgwM1xcXCJcXHgwNVxcXCJcXHUwMkQyXFxuXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAyRDVcIitcblx0XHRcIlxcblxcXCJcXHgwM1xcXCJcXHgwNVxcXCJcXHUwMkQ4XFxuXFxcIlxceDAzXFxcIlxceDA3XFxcIlxcdTAyREJcXG5cXFwiXFxmXFxcIlxceDBFXFxcIlxcdTAyREVcXHZcXFwiXFx4MDNcIitcblx0XHRcIlxcXCJcXHgwNVxcXCJcXHUwMkUxXFxuXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAyRTRcXG5cXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDJFN1xcblxcXCJcXHgwM1xcXCJcXHgwM1wiK1xuXHRcdFwiXFxcIlxceDAzI1xceDAzI1xceDA1I1xcdTAyRURcXG4jXFx4MDMjXFx4MDUjXFx1MDJGMFxcbiNcXHgwMyNcXHgwNSNcXHUwMkYzXFxuI1xceDAzI1wiK1xuXHRcdFwiXFx4MDUjXFx1MDJGNlxcbiNcXHgwMyNcXHgwNSNcXHUwMkY5XFxuI1xceDAzI1xceDA1I1xcdTAyRkNcXG4jXFx4MDMjXFx4MDUjXFx1MDJGRlxcblwiK1xuXHRcdFwiI1xceDAzI1xceDAzI1xceDAzJFxceDAzJFxceDA1JFxcdTAzMDVcXG4kXFx4MDMkXFx4MDMkXFx4MDUkXFx1MDMwOVxcbiRcXHgwMyRcXHgwNSRcIitcblx0XHRcIlxcdTAzMENcXG4kXFx4MDMkXFx4MDUkXFx1MDMwRlxcbiRcXHgwMyRcXHgwNyRcXHUwMzEyXFxuJFxcZiRcXHgwRSRcXHUwMzE1XFx2JFxceDAzJVwiK1xuXHRcdFwiXFx4MDMlXFx4MDUlXFx1MDMxOVxcbiVcXHgwMyVcXHgwMyVcXHgwNSVcXHUwMzFEXFxuJVxceDAzJVxceDAzJVxceDAzJVxceDAzJVxceDA1JVxcdTAzMjNcIitcblx0XHRcIlxcbiVcXHgwMyVcXHgwMyVcXHgwNSVcXHUwMzI3XFxuJVxceDAzJVxceDAzJVxceDA1JVxcdTAzMkJcXG4lXFx4MDMmXFx4MDMmXFx4MDUmXFx1MDMyRlwiK1xuXHRcdFwiXFxuJlxceDAzJlxceDA1JlxcdTAzMzJcXG4mXFx4MDMmXFx4MDUmXFx1MDMzNVxcbiZcXHgwMyZcXHgwNSZcXHUwMzM4XFxuJlxceDAzJlxceDA1XCIrXG5cdFx0XCImXFx1MDMzQlxcbiZcXHgwMyZcXHgwNSZcXHUwMzNFXFxuJlxceDAzJlxceDA1JlxcdTAzNDFcXG4mXFx4MDMmXFx4MDMmXFx4MDUmXFx1MDM0NVwiK1xuXHRcdFwiXFxuJlxceDAzJlxceDA1JlxcdTAzNDhcXG4mXFx4MDMmXFx4MDUmXFx1MDM0QlxcbiZcXHgwMyZcXHgwMyZcXHgwNSZcXHUwMzRGXFxuJlxceDAzXCIrXG5cdFx0XCImXFx4MDUmXFx1MDM1MlxcbiZcXHgwMyZcXHgwNSZcXHUwMzU1XFxuJlxceDAzJlxceDAzJlxceDA1JlxcdTAzNTlcXG4mXFx4MDMmXFx4MDMmXFx4MDVcIitcblx0XHRcIiZcXHUwMzVEXFxuJlxceDAzJlxceDA1JlxcdTAzNjBcXG4mXFx4MDMmXFx4MDUmXFx1MDM2M1xcbiZcXHgwMyZcXHgwMyZcXHgwNSZcXHUwMzY3XCIrXG5cdFx0XCJcXG4mXFx4MDMmXFx4MDUmXFx1MDM2QVxcbiZcXHgwMyZcXHgwNSZcXHUwMzZEXFxuJlxceDAzJlxceDAzJlxceDA1JlxcdTAzNzFcXG4mXFx4MDVcIitcblx0XHRcIiZcXHUwMzczXFxuJlxceDAzXFwnXFx4MDNcXCdcXHgwMyhcXHgwMyhcXHgwNShcXHUwMzc5XFxuKFxceDAzKFxceDAzKFxceDA1KFxcdTAzN0RcXG5cIitcblx0XHRcIihcXHgwMyhcXHgwMyhcXHgwMylcXHgwMylcXHgwMypcXHgwMypcXHgwNypcXHUwMzg1XFxuKlxcZipcXHgwRSpcXHUwMzg4XFx2KlxceDAzKlxceDAzXCIrXG5cdFx0XCIqXFx4MDcqXFx1MDM4Q1xcbipcXGYqXFx4MEUqXFx1MDM4RlxcdipcXHgwNSpcXHUwMzkxXFxuKlxceDAzK1xceDA1K1xcdTAzOTRcXG4rXFx4MDNcIitcblx0XHRcIitcXHgwNitcXHUwMzk3XFxuK1xccitcXHgwRStcXHUwMzk4XFx4MDMrXFx4MDMrXFx4MDMrXFx4MDcrXFx1MDM5RVxcbitcXGYrXFx4MEUrXFx1MDNBMVwiK1xuXHRcdFwiXFx2K1xceDAzLFxceDAzLFxceDAzLFxceDAzLFxceDAzLFxceDAzLFxceDAzLFxceDAzLFxceDAzLFxceDA1LFxcdTAzQUNcXG4sXFx4MDMtXFx4MDNcIitcblx0XHRcIi1cXHgwNS1cXHUwM0IwXFxuLVxceDAzLlxceDAzLlxceDAzLlxceDA2LlxcdTAzQjVcXG4uXFxyLlxceDBFLlxcdTAzQjZcXHgwMy9cXHgwMy9cXHgwM1wiK1xuXHRcdFwiL1xceDAzL1xceDA1L1xcdTAzQkRcXG4vXFx4MDMvXFx4MDMvXFx4MDMwXFx4MDMwXFx4MDMxXFx4MDYxXFx1MDNDNFxcbjFcXHIxXFx4MEUxXFx1MDNDNVwiK1xuXHRcdFwiXFx4MDMyXFx4MDMyXFx4MDcyXFx1MDNDQVxcbjJcXGYyXFx4MEUyXFx1MDNDRFxcdjJcXHgwMzJcXHgwMzJcXHgwMzNcXHgwMzNcXHgwMzNcXHgwM1wiK1xuXHRcdFwiM1xceDA3M1xcdTAzRDVcXG4zXFxmM1xceDBFM1xcdTAzRDhcXHYzXFx4MDUzXFx1MDNEQVxcbjNcXHgwMzRcXHgwMzRcXHgwMzRcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwNVxceDFBOD41XFx4MDJcXHgwMlxceDA0XFx4MDJcXHgwNlxceDAyXFxiXFx4MDJcXG5cXHgwMlxcZlxceDAyXFx4MEVcXHgwMlxceDEwXFx4MDJcIitcblx0XHRcIlxceDEyXFx4MDJcXHgxNFxceDAyXFx4MTZcXHgwMlxceDE4XFx4MDJcXHgxQVxceDAyXFx4MUNcXHgwMlxceDFFXFx4MDIgXFx4MDJcXFwiXFx4MDIkXFx4MDJcIitcblx0XHRcIiZcXHgwMihcXHgwMipcXHgwMixcXHgwMi5cXHgwMjBcXHgwMjJcXHgwMjRcXHgwMjZcXHgwMjhcXHgwMjpcXHgwMjxcXHgwMj5cXHgwMkBcXHgwMlwiK1xuXHRcdFwiQlxceDAyRFxceDAyRlxceDAySFxceDAySlxceDAyTFxceDAyTlxceDAyUFxceDAyUlxceDAyVFxceDAyVlxceDAyWFxceDAyWlxceDAyXFxcXFxceDAyXCIrXG5cdFx0XCJeXFx4MDJgXFx4MDJiXFx4MDJkXFx4MDJmXFx4MDJcXHgwMlxcdFxceDAzXFx4MDJcXHZcXGZcXHgwM1xceDAyXFx4MThcXHgxOVxceDA0XFx4MDJcXHgxMVwiK1xuXHRcdFwiXFx4MTFcXHgxOFxceDE4XFx4MDNcXHgwMlxceDExXFx4MTJcXHgwM1xceDAyXFx4MEZcXHgxMFxceDA0XFx4MDJcXHgwM1xceDAzXFx4MDZcXHRcXHgwNVwiK1xuXHRcdFwiXFx4MDJcXG5cXHJcXHgxMlxceDEyXFx4MTRcXHgxNFxcdTA0OTBcXHgwMm9cXHgwM1xceDAyXFx4MDJcXHgwMlxceDA0dFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwNnlcXHgwM1xceDAyXFx4MDJcXHgwMlxcYntcXHgwM1xceDAyXFx4MDJcXHgwMlxcblxcdTAxMjJcXHgwM1xceDAyXFx4MDJcXHgwMlxcZlxcdTAxMjRcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx4MEVcXHUwMTJBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHgxMFxcdTAxM0FcXHgwM1xceDAyXFx4MDJcXHgwMlxceDEyXCIrXG5cdFx0XCJcXHUwMTNDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHgxNFxcdTAxNDBcXHgwM1xceDAyXFx4MDJcXHgwMlxceDE2XFx1MDE0MlxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgxOFxcdTAxNDRcXHgwM1xceDAyXFx4MDJcXHgwMlxceDFBXFx1MDE0RlxceDAzXFx4MDJcXHgwMlxceDAyXFx4MUNcXHUwMUIxXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxceDFFXFx1MDFCM1xceDAzXFx4MDJcXHgwMlxceDAyIFxcdTAxQzFcXHgwM1xceDAyXFx4MDJcXHgwMlxcXCJcXHUwMUNEXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMiRcXHUwMUQ5XFx4MDNcXHgwMlxceDAyXFx4MDImXFx1MDFFQVxceDAzXFx4MDJcXHgwMlxceDAyKFxcdTAxRUVcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyKlxcdTAxRjBcXHgwM1xceDAyXFx4MDJcXHgwMixcXHUwMUYyXFx4MDNcXHgwMlxceDAyXFx4MDIuXFx1MDFGQ1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDIwXFx1MDFGRlxceDAzXFx4MDJcXHgwMlxceDAyMlxcdTAyMTdcXHgwM1xceDAyXFx4MDJcXHgwMjRcXHUwMjJCXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMjZcXHUwMjY2XFx4MDNcXHgwMlxceDAyXFx4MDI4XFx1MDI2RlxceDAzXFx4MDJcXHgwMlxceDAyOlxcdTAyOTlcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyPFxcdTAyOURcXHgwM1xceDAyXFx4MDJcXHgwMj5cXHUwMkE2XFx4MDNcXHgwMlxceDAyXFx4MDJAXFx1MDJCRlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJCXFx1MDJDMlxceDAzXFx4MDJcXHgwMlxceDAyRFxcdTAyRUFcXHgwM1xceDAyXFx4MDJcXHgwMkZcXHUwMzAyXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMkhcXHUwMzJBXFx4MDNcXHgwMlxceDAyXFx4MDJKXFx1MDM3MlxceDAzXFx4MDJcXHgwMlxceDAyTFxcdTAzNzRcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyTlxcdTAzNzZcXHgwM1xceDAyXFx4MDJcXHgwMlBcXHUwMzgwXFx4MDNcXHgwMlxceDAyXFx4MDJSXFx1MDM5MFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJUXFx1MDM5M1xceDAzXFx4MDJcXHgwMlxceDAyVlxcdTAzQUJcXHgwM1xceDAyXFx4MDJcXHgwMlhcXHUwM0FGXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlpcXHUwM0I0XFx4MDNcXHgwMlxceDAyXFx4MDJcXFxcXFx1MDNCOFxceDAzXFx4MDJcXHgwMlxceDAyXlxcdTAzQzBcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyYFxcdTAzQzNcXHgwM1xceDAyXFx4MDJcXHgwMmJcXHUwM0M3XFx4MDNcXHgwMlxceDAyXFx4MDJkXFx1MDNEOVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJmXFx1MDNEQlxceDAzXFx4MDJcXHgwMlxceDAyaHBcXHgwN1xceDAyXFx4MDJcXHgwM2lrXFx4MDVcXHgwNFxceDAzXCIrXG5cdFx0XCJcXHgwMmpsXFx4MDdcXHZcXHgwMlxceDAya2pcXHgwM1xceDAyXFx4MDJcXHgwMmtsXFx4MDNcXHgwMlxceDAyXFx4MDJsbVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJtblxceDA3XFx4MDJcXHgwMlxceDAzbnBcXHgwM1xceDAyXFx4MDJcXHgwMm9oXFx4MDNcXHgwMlxceDAyXFx4MDJvaVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJwXFx4MDNcXHgwM1xceDAyXFx4MDJcXHgwMnFzXFx4MDVcXHgwNlxceDA0XFx4MDJycVxceDAzXFx4MDJcXHgwMlxceDAyc3ZcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAydHJcXHgwM1xceDAyXFx4MDJcXHgwMnR1XFx4MDNcXHgwMlxceDAyXFx4MDJ1d1xceDAzXFx4MDJcXHgwMlxceDAydnRcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyd3hcXHgwNVxcYlxceDA1XFx4MDJ4XFx4MDVcXHgwM1xceDAyXFx4MDJcXHgwMnl6XFx0XFx4MDJcXHgwMlxceDAyelxceDA3XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMntcXHg4MFxceDA1XFxuXFx4MDZcXHgwMnx9XFx4MDdcXHZcXHgwMlxceDAyfVxceDdGXFx4MDVcXG5cXHgwNlxceDAyfnxcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx4N0ZcXHg4MlxceDAzXFx4MDJcXHgwMlxceDAyXFx4ODB+XFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4MFxceDgxXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxceDgxXFx0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4MlxceDgwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4M1xcdTAxMjNcXHgwNVwiK1xuXHRcdFwiXFxmXFx4MDdcXHgwMlxceDg0XFx4ODVcXHgwNVxcZlxceDA3XFx4MDJcXHg4NVxceDg3XFx4MDdcXGZcXHgwMlxceDAyXFx4ODZcXHg4OFxceDA3XFx2XFx4MDJcIitcblx0XHRcIlxceDAyXFx4ODdcXHg4NlxceDAzXFx4MDJcXHgwMlxceDAyXFx4ODdcXHg4OFxceDAzXFx4MDJcXHgwMlxceDAyXFx4ODhcXHg4OVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHg4OVxceDhBXFx4MDdcXHgxMFxceDAyXFx4MDJcXHg4QVxceDhCXFx4MDdcXGZcXHgwMlxceDAyXFx4OEJcXHg4Q1xceDA1UClcXHgwMlxceDhDXCIrXG5cdFx0XCJcXHUwMTIzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4RFxceDhFXFx4MDVcXGZcXHgwN1xceDAyXFx4OEVcXHg4RlxceDA3XFxmXFx4MDJcXHgwMlxceDhGXCIrXG5cdFx0XCJcXHg5MFxceDA1XFx4MEVcXGJcXHgwMlxceDkwXFx1MDEyM1xceDAzXFx4MDJcXHgwMlxceDAyXFx4OTFcXHg5MlxceDA1XFxmXFx4MDdcXHgwMlxceDkyXCIrXG5cdFx0XCJcXHg5M1xceDA3XFxmXFx4MDJcXHgwMlxceDkzXFx4OTVcXHgwNVxceDBFXFxiXFx4MDJcXHg5NFxceDk2XFx4MDdcXGZcXHgwMlxceDAyXFx4OTVcXHg5NFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg5NVxceDk2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHg5NlxceDk3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHg5N1xceDk5XCIrXG5cdFx0XCJcXHgwN1xceDE2XFx4MDJcXHgwMlxceDk4XFx4OUFcXHgwN1xcZlxceDAyXFx4MDJcXHg5OVxceDk4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHg5OVxceDlBXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxceDlBXFx4OUJcXHgwM1xceDAyXFx4MDJcXHgwMlxceDlCXFx4OUNcXHgwNT4gXFx4MDJcXHg5Q1xcdTAxMjNcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx4OURcXHg5RVxceDA1XFxmXFx4MDdcXHgwMlxceDlFXFx4OUZcXHgwN1xcZlxceDAyXFx4MDJcXHg5RlxceEEwXFx4MDVcXHgwRVwiK1xuXHRcdFwiXFxiXFx4MDJcXHhBMFxceEEyXFx4MDdcXGZcXHgwMlxceDAyXFx4QTFcXHhBM1xceDA3XFx2XFx4MDJcXHgwMlxceEEyXFx4QTFcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx4QTJcXHhBM1xceDAzXFx4MDJcXHgwMlxceDAyXFx4QTNcXHhBNFxceDAzXFx4MDJcXHgwMlxceDAyXFx4QTRcXHhBNVxceDA3XFx4MTBcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHhBNVxceEE2XFx4MDdcXGZcXHgwMlxceDAyXFx4QTZcXHhBN1xceDA1UClcXHgwMlxceEE3XFx1MDEyM1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhBOFxceEE5XFx4MDVcXGZcXHgwN1xceDAyXFx4QTlcXHhBQVxceDA3XFxmXFx4MDJcXHgwMlxceEFBXFx4QUJcXHgwNVxceDBFXFxiXFx4MDJcXHhBQlwiK1xuXHRcdFwiXFx4QUNcXHgwN1xcZlxceDAyXFx4MDJcXHhBQ1xceEFFXFx4MDdcXHgxNlxceDAyXFx4MDJcXHhBRFxceEFGXFx4MDdcXGZcXHgwMlxceDAyXFx4QUVcXHhBRFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhBRVxceEFGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhBRlxceEIwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCMFxceEIxXCIrXG5cdFx0XCJcXHgwNT4gXFx4MDJcXHhCMVxceEIzXFx4MDdcXGZcXHgwMlxceDAyXFx4QjJcXHhCNFxceDA3XFx2XFx4MDJcXHgwMlxceEIzXFx4QjJcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4QjNcXHhCNFxceDAzXFx4MDJcXHgwMlxceDAyXFx4QjRcXHhCNVxceDAzXFx4MDJcXHgwMlxceDAyXFx4QjVcXHhCNlxceDA3XFx4MTBcIitcblx0XHRcIlxceDAyXFx4MDJcXHhCNlxceEI3XFx4MDdcXGZcXHgwMlxceDAyXFx4QjdcXHhCOFxceDA1UClcXHgwMlxceEI4XFx1MDEyM1xceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHhCOVxceEJBXFx4MDVcXGZcXHgwN1xceDAyXFx4QkFcXHhCQlxceDA3XFxmXFx4MDJcXHgwMlxceEJCXFx4QkRcXHgwNVxceDBFXFxiXFx4MDJcIitcblx0XHRcIlxceEJDXFx4QkVcXHgwN1xcZlxceDAyXFx4MDJcXHhCRFxceEJDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCRFxceEJFXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceEJFXFx4QkZcXHgwM1xceDAyXFx4MDJcXHgwMlxceEJGXFx4QzFcXHgwN1xceDEzXFx4MDJcXHgwMlxceEMwXFx4QzJcXHgwN1xcZlxceDAyXFx4MDJcIitcblx0XHRcIlxceEMxXFx4QzBcXHgwM1xceDAyXFx4MDJcXHgwMlxceEMxXFx4QzJcXHgwM1xceDAyXFx4MDJcXHgwMlxceEMyXFx4QzNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4QzNcXHhDNFxceDA1XFx4MUFcXHgwRVxceDAyXFx4QzRcXHUwMTIzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhDNVxceEM2XFx4MDVcXGZcXHgwN1xceDAyXCIrXG5cdFx0XCJcXHhDNlxceEM3XFx4MDdcXGZcXHgwMlxceDAyXFx4QzdcXHhDOVxceDA1XFx4MEVcXGJcXHgwMlxceEM4XFx4Q0FcXHgwN1xcZlxceDAyXFx4MDJcXHhDOVwiK1xuXHRcdFwiXFx4QzhcXHgwM1xceDAyXFx4MDJcXHgwMlxceEM5XFx4Q0FcXHgwM1xceDAyXFx4MDJcXHgwMlxceENBXFx4Q0JcXHgwM1xceDAyXFx4MDJcXHgwMlxceENCXCIrXG5cdFx0XCJcXHhDRFxceDA3XFx4MTNcXHgwMlxceDAyXFx4Q0NcXHhDRVxceDA3XFxmXFx4MDJcXHgwMlxceENEXFx4Q0NcXHgwM1xceDAyXFx4MDJcXHgwMlxceENEXCIrXG5cdFx0XCJcXHhDRVxceDAzXFx4MDJcXHgwMlxceDAyXFx4Q0VcXHhDRlxceDAzXFx4MDJcXHgwMlxceDAyXFx4Q0ZcXHhEMVxceDA1XFx4MUFcXHgwRVxceDAyXFx4RDBcIitcblx0XHRcIlxceEQyXFx4MDdcXGZcXHgwMlxceDAyXFx4RDFcXHhEMFxceDAzXFx4MDJcXHgwMlxceDAyXFx4RDFcXHhEMlxceDAzXFx4MDJcXHgwMlxceDAyXFx4RDJcIitcblx0XHRcIlxceEQzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhEM1xceEQ1XFx4MDdcXHgxNlxceDAyXFx4MDJcXHhENFxceEQ2XFx4MDdcXGZcXHgwMlxceDAyXFx4RDVcIitcblx0XHRcIlxceEQ0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhENVxceEQ2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhENlxceEQ3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhEN1wiK1xuXHRcdFwiXFx4RDhcXHgwNT4gXFx4MDJcXHhEOFxcdTAxMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEQ5XFx4REFcXHgwNVxcZlxceDA3XFx4MDJcXHhEQVxceERCXCIrXG5cdFx0XCJcXHgwN1xcZlxceDAyXFx4MDJcXHhEQlxceEREXFx4MDVcXHgwRVxcYlxceDAyXFx4RENcXHhERVxceDA3XFxmXFx4MDJcXHgwMlxceEREXFx4RENcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx4RERcXHhERVxceDAzXFx4MDJcXHgwMlxceDAyXFx4REVcXHhERlxceDAzXFx4MDJcXHgwMlxceDAyXFx4REZcXHhFMVxceDA3XCIrXG5cdFx0XCJcXHgxM1xceDAyXFx4MDJcXHhFMFxceEUyXFx4MDdcXGZcXHgwMlxceDAyXFx4RTFcXHhFMFxceDAzXFx4MDJcXHgwMlxceDAyXFx4RTFcXHhFMlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHhFMlxceEUzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFM1xceEU0XFx4MDVcXHgxQVxceDBFXFx4MDJcXHhFNFxceEU2XFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHhFNVxceEU3XFx4MDdcXHZcXHgwMlxceDAyXFx4RTZcXHhFNVxceDAzXFx4MDJcXHgwMlxceDAyXFx4RTZcXHhFN1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHhFN1xceEU4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFOFxceEU5XFx4MDdcXHgxMFxceDAyXFx4MDJcXHhFOVxceEVBXFx4MDdcXGZcIitcblx0XHRcIlxceDAyXFx4MDJcXHhFQVxceEVCXFx4MDVQKVxceDAyXFx4RUJcXHUwMTIzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFQ1xceEVEXFx4MDVcXGZcXHgwN1wiK1xuXHRcdFwiXFx4MDJcXHhFRFxceEVFXFx4MDdcXGZcXHgwMlxceDAyXFx4RUVcXHhGMFxceDA1XFx4MEVcXGJcXHgwMlxceEVGXFx4RjFcXHgwN1xcZlxceDAyXFx4MDJcIitcblx0XHRcIlxceEYwXFx4RUZcXHgwM1xceDAyXFx4MDJcXHgwMlxceEYwXFx4RjFcXHgwM1xceDAyXFx4MDJcXHgwMlxceEYxXFx4RjJcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4RjJcXHhGNFxceDA3XFx4MTNcXHgwMlxceDAyXFx4RjNcXHhGNVxceDA3XFxmXFx4MDJcXHgwMlxceEY0XFx4RjNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4RjRcXHhGNVxceDAzXFx4MDJcXHgwMlxceDAyXFx4RjVcXHhGNlxceDAzXFx4MDJcXHgwMlxceDAyXFx4RjZcXHhGOFxceDA1XFx4MUFcXHgwRVxceDAyXCIrXG5cdFx0XCJcXHhGN1xceEY5XFx4MDdcXGZcXHgwMlxceDAyXFx4RjhcXHhGN1xceDAzXFx4MDJcXHgwMlxceDAyXFx4RjhcXHhGOVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhGOVxceEZBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhGQVxceEZDXFx4MDdcXHgxNlxceDAyXFx4MDJcXHhGQlxceEZEXFx4MDdcXGZcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhGQ1xceEZCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhGQ1xceEZEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhGRFxceEZFXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceEZFXFx4RkZcXHgwNT4gXFx4MDJcXHhGRlxcdTAxMDFcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTAwXFx1MDEwMlxceDA3XFx2XFx4MDJcXHgwMlxcdTAxMDFcIitcblx0XHRcIlxcdTAxMDBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMDFcXHUwMTAyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTAyXFx1MDEwM1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTAzXFx1MDEwNFxceDA3XFx4MTBcXHgwMlxceDAyXFx1MDEwNFxcdTAxMDVcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTA1XFx1MDEwNlwiK1xuXHRcdFwiXFx4MDVQKVxceDAyXFx1MDEwNlxcdTAxMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMDdcXHUwMTA5XFx4MDVcXGZcXHgwN1xceDAyXFx1MDEwOFwiK1xuXHRcdFwiXFx1MDEwQVxceDA3XFxmXFx4MDJcXHgwMlxcdTAxMDlcXHUwMTA4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTA5XFx1MDEwQVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTBBXFx1MDEwQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwQlxcdTAxMERcXHgwN1xceDEzXFx4MDJcXHgwMlxcdTAxMENcXHUwMTBFXCIrXG5cdFx0XCJcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTBEXFx1MDEwQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwRFxcdTAxMEVcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDEwRVxcdTAxMEZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMEZcXHUwMTEwXFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMTEwXFx1MDEyM1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTExXFx1MDExM1xceDA1XFxmXFx4MDdcXHgwMlxcdTAxMTJcXHUwMTE0XFx4MDdcXGZcXHgwMlxceDAyXFx1MDExM1wiK1xuXHRcdFwiXFx1MDExMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDExM1xcdTAxMTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMTRcXHUwMTE1XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxMTVcXHUwMTE3XFx4MDdcXHgxM1xceDAyXFx4MDJcXHUwMTE2XFx1MDExOFxceDA3XFxmXFx4MDJcXHgwMlxcdTAxMTdcXHUwMTE2XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMTdcXHUwMTE4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTE4XFx1MDExOVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTE5XFx1MDExQVxceDA1XFx4MUFcXHgwRVxceDAyXFx1MDExQVxcdTAxMUNcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTFCXFx1MDExRFxceDA3XCIrXG5cdFx0XCJcXHZcXHgwMlxceDAyXFx1MDExQ1xcdTAxMUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMUNcXHUwMTFEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTFEXCIrXG5cdFx0XCJcXHUwMTFFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTFFXFx1MDExRlxceDA3XFx4MTBcXHgwMlxceDAyXFx1MDExRlxcdTAxMjBcXHgwN1xcZlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxMjBcXHUwMTIxXFx4MDVQKVxceDAyXFx1MDEyMVxcdTAxMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjJcXHg4M1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTIyXFx4ODRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjJcXHg4RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlxceDkxXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjJcXHg5RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlxceEE4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXCIrXG5cdFx0XCJcXHhCOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlxceEM1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXFx4RDlcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDEyMlxceEVDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXFx1MDEwN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlxcdTAxMTFcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDEyM1xcdlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyNFxcdTAxMjVcXHgwN1xceDBFXFx4MDJcXHgwMlxcdTAxMjVcIitcblx0XHRcIlxcdTAxMjZcXHgwNVxceDE2XFxmXFx4MDJcXHUwMTI2XFxyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTI3XFx1MDEyQlxceDA1XFx4MTBcXHRcXHgwMlwiK1xuXHRcdFwiXFx1MDEyOFxcdTAxMkJcXHgwNVxceDEyXFxuXFx4MDJcXHUwMTI5XFx1MDEyQlxceDA1XFx4MTZcXGZcXHgwMlxcdTAxMkFcXHUwMTI3XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxMkFcXHUwMTI4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTJBXFx1MDEyOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyQlwiK1xuXHRcdFwiXFx4MEZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMkNcXHUwMTJGXFx4MDVcXHgxMlxcblxceDAyXFx1MDEyRFxcdTAxMkVcXHgwN1xceDE0XFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDEyRVxcdTAxMzBcXHgwNVxceDE0XFx2XFx4MDJcXHUwMTJGXFx1MDEyRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzMFxcdTAxMzFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzMVxcdTAxMkZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMzFcXHUwMTMyXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxMzJcXHUwMTNCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTMzXFx1MDEzNlxceDA1XFx4MTZcXGZcXHgwMlxcdTAxMzRcXHUwMTM1XFx4MDdcIitcblx0XHRcIlxceDE0XFx4MDJcXHgwMlxcdTAxMzVcXHUwMTM3XFx4MDVcXHgxNFxcdlxceDAyXFx1MDEzNlxcdTAxMzRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMzdcIitcblx0XHRcIlxcdTAxMzhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMzhcXHUwMTM2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTM4XFx1MDEzOVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTM5XFx1MDEzQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzQVxcdTAxMkNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxM0FcIitcblx0XHRcIlxcdTAxMzNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxM0JcXHgxMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzQ1xcdTAxM0RcXHgwNVxceDE4XFxyXCIrXG5cdFx0XCJcXHgwMlxcdTAxM0RcXHgxM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzRVxcdTAxNDFcXHgwNVxceDEyXFxuXFx4MDJcXHUwMTNGXFx1MDE0MVxceDA1XCIrXG5cdFx0XCJcXHgxNlxcZlxceDAyXFx1MDE0MFxcdTAxM0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNDBcXHUwMTNGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTQxXCIrXG5cdFx0XCJcXHgxNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0MlxcdTAxNDNcXHgwN1xcblxceDAyXFx4MDJcXHUwMTQzXFx4MTdcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE0NFxcdTAxNDVcXHgwNVxceDE2XFxmXFx4MDJcXHUwMTQ1XFx1MDE0NlxceDA3XFx4MTdcXHgwMlxceDAyXFx1MDE0NlxceDE5XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxNDdcXHUwMTQ4XFxiXFx4MEVcXHgwMVxceDAyXFx1MDE0OFxcdTAxNTBcXHgwNVxceDFDXFx4MEZcXHgwMlxcdTAxNDlcXHUwMTUwXCIrXG5cdFx0XCJcXHgwNVxcXCJcXHgxMlxceDAyXFx1MDE0QVxcdTAxNTBcXHgwNSZcXHgxNFxceDAyXFx1MDE0QlxcdTAxNTBcXHgwNSxcXHgxN1xceDAyXFx1MDE0Q1wiK1xuXHRcdFwiXFx1MDE1MFxceDA1LlxceDE4XFx4MDJcXHUwMTREXFx1MDE1MFxceDA1MFxceDE5XFx4MDJcXHUwMTRFXFx1MDE1MFxceDA1NlxceDFDXFx4MDJcIitcblx0XHRcIlxcdTAxNEZcXHUwMTQ3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTRGXFx1MDE0OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0RlxcdTAxNEFcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDE0RlxcdTAxNEJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNEZcXHUwMTRDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTRGXCIrXG5cdFx0XCJcXHUwMTREXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTRGXFx1MDE0RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1MFxcdTAxNjhcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDE1MVxcdTAxNTNcXGZcXG5cXHgwMlxceDAyXFx1MDE1MlxcdTAxNTRcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTUzXFx1MDE1MlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTUzXFx1MDE1NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1NFxcdTAxNTZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE1NVxcdTAxNTdcXHgwN1xcdlxceDAyXFx4MDJcXHUwMTU2XFx1MDE1NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1NlxcdTAxNTdcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDE1N1xcdTAxNTlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNThcXHUwMTVBXFx4MDdcXGZcXHgwMlxceDAyXFx1MDE1OVwiK1xuXHRcdFwiXFx1MDE1OFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1OVxcdTAxNUFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNUFcXHUwMTVCXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxNUJcXHUwMTVEXFx0XFx4MDNcXHgwMlxceDAyXFx1MDE1Q1xcdTAxNUVcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTVEXFx1MDE1Q1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTVEXFx1MDE1RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1RVxcdTAxNjBcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE1RlxcdTAxNjFcXHgwN1xcdlxceDAyXFx4MDJcXHUwMTYwXFx1MDE1RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2MFxcdTAxNjFcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDE2MVxcdTAxNjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjJcXHUwMTY0XFx4MDdcXGZcXHgwMlxceDAyXFx1MDE2M1wiK1xuXHRcdFwiXFx1MDE2MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2M1xcdTAxNjRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjRcXHUwMTY1XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxNjVcXHUwMTY3XFx4MDVcXHgxQVxceDBFXFx2XFx1MDE2NlxcdTAxNTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjdcXHUwMTZBXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjhcXHUwMTY2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTY4XFx1MDE2OVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTY5XFx4MUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNkFcXHUwMTY4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTZCXFx1MDE2RFxceDA3XCIrXG5cdFx0XCJcXHgxRlxceDAyXFx4MDJcXHUwMTZDXFx1MDE2RVxceDA3XFxmXFx4MDJcXHgwMlxcdTAxNkRcXHUwMTZDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTZEXCIrXG5cdFx0XCJcXHUwMTZFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTZFXFx1MDE3MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2RlxcdTAxNzFcXHgwN1xcdlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxNzBcXHUwMTZGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTcwXFx1MDE3MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3MVxcdTAxNzNcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3MlxcdTAxNzRcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTczXFx1MDE3MlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTczXFx1MDE3NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3NFxcdTAxNzZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNzVcXHUwMTc3XFx4MDVcIitcblx0XHRcIlxceDFFXFx4MTBcXHgwMlxcdTAxNzZcXHUwMTc1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTc2XFx1MDE3N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3N1wiK1xuXHRcdFwiXFx1MDE3OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3OFxcdTAxN0FcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTc5XFx1MDE3OFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTc5XFx1MDE3QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3QVxcdTAxN0NcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxN0JcXHUwMTdEXCIrXG5cdFx0XCJcXHgwN1xcdlxceDAyXFx4MDJcXHUwMTdDXFx1MDE3QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3Q1xcdTAxN0RcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE3RFxcdTAxN0ZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxN0VcXHUwMTgwXFx4MDdcXGZcXHgwMlxceDAyXFx1MDE3RlxcdTAxN0VcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDE3RlxcdTAxODBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxODBcXHUwMTgxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTgxXCIrXG5cdFx0XCJcXHUwMTgzXFx4MDcgXFx4MDJcXHgwMlxcdTAxODJcXHUwMTg0XFx4MDdcXGZcXHgwMlxceDAyXFx1MDE4M1xcdTAxODJcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDE4M1xcdTAxODRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxODRcXHUwMTg2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTg1XFx1MDE4N1wiK1xuXHRcdFwiXFx4MDdcXHZcXHgwMlxceDAyXFx1MDE4NlxcdTAxODVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxODZcXHUwMTg3XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxODdcXHUwMTg5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTg4XFx1MDE4QVxceDA3XFxmXFx4MDJcXHgwMlxcdTAxODlcXHUwMTg4XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxODlcXHUwMThBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMThBXFx1MDE4QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4QlwiK1xuXHRcdFwiXFx1MDE4RFxceDA3XFx4MUFcXHgwMlxceDAyXFx1MDE4Q1xcdTAxOEVcXHgwN1xcZlxceDAyXFx4MDJcXHUwMThEXFx1MDE4Q1xceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMThEXFx1MDE4RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4RVxcdTAxOTBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOEZcXHUwMTkxXCIrXG5cdFx0XCJcXHgwN1xcdlxceDAyXFx4MDJcXHUwMTkwXFx1MDE4RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5MFxcdTAxOTFcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE5MVxcdTAxOTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOTJcXHUwMTk0XFx4MDdcXGZcXHgwMlxceDAyXFx1MDE5M1xcdTAxOTJcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDE5M1xcdTAxOTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOTRcXHUwMTk1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTk1XCIrXG5cdFx0XCJcXHUwMTk3XFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMTk2XFx1MDE5OFxceDA3XFx4MTdcXHgwMlxceDAyXFx1MDE5N1xcdTAxOTZcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDE5N1xcdTAxOThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOThcXHUwMUIyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTk5XCIrXG5cdFx0XCJcXHUwMTlCXFx4MDUgXFx4MTFcXHgwMlxcdTAxOUFcXHUwMTlDXFx4MDdcXGZcXHgwMlxceDAyXFx1MDE5QlxcdTAxOUFcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDE5QlxcdTAxOUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOUNcXHUwMTlFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTlEXFx1MDE5RlwiK1xuXHRcdFwiXFx4MDdcXHZcXHgwMlxceDAyXFx1MDE5RVxcdTAxOURcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOUVcXHUwMTlGXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxOUZcXHUwMUExXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUEwXFx1MDFBMlxceDA3XFxmXFx4MDJcXHgwMlxcdTAxQTFcXHUwMUEwXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxQTFcXHUwMUEyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUEyXCI7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9zZXJpYWxpemVkQVROU2VnbWVudDE6IHN0cmluZyA9XG5cdFx0XCJcXHUwMUEzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUEzXFx1MDFBNVxceDA3XFx4MUFcXHgwMlxceDAyXFx1MDFBNFxcdTAxQTZcXHgwN1xcZlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxQTVcXHUwMUE0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUE1XFx1MDFBNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBNlxcdTAxQThcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBN1xcdTAxQTlcXHgwN1xcdlxceDAyXFx4MDJcXHUwMUE4XFx1MDFBN1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUE4XFx1MDFBOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBOVxcdTAxQUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQUFcXHUwMUFDXFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHUwMUFCXFx1MDFBQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBQlxcdTAxQUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQUNcIitcblx0XHRcIlxcdTAxQURcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQURcXHUwMUFGXFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMUFFXFx1MDFCMFxceDA3XFx4MTdcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMUFGXFx1MDFBRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBRlxcdTAxQjBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjBcIitcblx0XHRcIlxcdTAxQjJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjFcXHUwMTZCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUIxXFx1MDE5OVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMUIyXFx4MURcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjNcXHUwMUJFXFx4MDUgXFx4MTFcXHgwMlxcdTAxQjRcXHUwMUI2XCIrXG5cdFx0XCJcXHgwN1xceDE1XFx4MDJcXHgwMlxcdTAxQjVcXHUwMUI3XFx4MDdcXHZcXHgwMlxceDAyXFx1MDFCNlxcdTAxQjVcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDFCNlxcdTAxQjdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjdcXHUwMUI5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUI4XFx1MDFCQVxceDA3XCIrXG5cdFx0XCJcXGZcXHgwMlxceDAyXFx1MDFCOVxcdTAxQjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjlcXHUwMUJBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUJBXCIrXG5cdFx0XCJcXHUwMUJCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUJCXFx1MDFCRFxceDA1IFxceDExXFx4MDJcXHUwMUJDXFx1MDFCNFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMUJEXFx1MDFDMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCRVxcdTAxQkNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQkVcXHUwMUJGXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQkZcXHgxRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDMFxcdTAxQkVcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDFDMVxcdTAxQ0FcXHgwNVxceDE2XFxmXFx4MDJcXHUwMUMyXFx1MDFDNFxceDA3XFxmXFx4MDJcXHgwMlxcdTAxQzNcXHUwMUMyXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxQzNcXHUwMUM0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUM0XFx1MDFDNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDNVwiK1xuXHRcdFwiXFx1MDFDN1xceDA3XFx4MTNcXHgwMlxceDAyXFx1MDFDNlxcdTAxQzhcXHgwN1xcZlxceDAyXFx4MDJcXHUwMUM3XFx1MDFDNlxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMUM3XFx1MDFDOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDOFxcdTAxQzlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQzlcXHUwMUNCXCIrXG5cdFx0XCJcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAxQ0FcXHUwMUMzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUNBXFx1MDFDQlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUNCIVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDQ1xcdTAxQ0VcXHgwNVxceDE2XFxmXFx4MDJcXHUwMUNEXFx1MDFDQ1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMUNEXFx1MDFDRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDRVxcdTAxQ0ZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQ0ZcIitcblx0XHRcIlxcdTAxRDFcXHgwNyNcXHgwMlxceDAyXFx1MDFEMFxcdTAxRDJcXHgwN1xcZlxceDAyXFx4MDJcXHUwMUQxXFx1MDFEMFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMUQxXFx1MDFEMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFEMlxcdTAxRDNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRDNcXHUwMUQ1XCIrXG5cdFx0XCJcXHgwNSRcXHgxM1xceDAyXFx1MDFENFxcdTAxRDZcXHgwN1xcZlxceDAyXFx4MDJcXHUwMUQ1XFx1MDFENFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFENVwiK1xuXHRcdFwiXFx1MDFENlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFENlxcdTAxRDdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRDdcXHUwMUQ4XFx4MDckXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFEOCNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRDlcXHUwMURCXFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMURBXFx1MDFEQ1xceDA3XCIrXG5cdFx0XCJcXGZcXHgwMlxceDAyXFx1MDFEQlxcdTAxREFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxREJcXHUwMURDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMURDXCIrXG5cdFx0XCJcXHUwMUU0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUREXFx1MDFERlxceDA3XFx4MTVcXHgwMlxceDAyXFx1MDFERVxcdTAxRTBcXHgwN1xcZlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxREZcXHUwMURFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMURGXFx1MDFFMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFMFxcdTAxRTFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFMVxcdTAxRTNcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAxRTJcXHUwMUREXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxRTNcXHUwMUU2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUU0XFx1MDFFMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFNFxcdTAxRTVcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDFFNSVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRTZcXHUwMUU0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUU3XCIrXG5cdFx0XCJcXHUwMUVCXFx4MDVcXHgxOFxcclxceDAyXFx1MDFFOFxcdTAxRUJcXHgwNTpcXHgxRVxceDAyXFx1MDFFOVxcdTAxRUJcXHgwNShcXHgxNVxceDAyXCIrXG5cdFx0XCJcXHUwMUVBXFx1MDFFN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFQVxcdTAxRThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRUFcXHUwMUU5XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxRUJcXCdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRUNcXHUwMUVGXFx4MDVcXHgxNlxcZlxceDAyXFx1MDFFRFxcdTAxRUZcIitcblx0XHRcIlxceDA1KlxceDE2XFx4MDJcXHUwMUVFXFx1MDFFQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFRVxcdTAxRURcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDFFRilcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRjBcXHUwMUYxXFx4MDdcXHRcXHgwMlxceDAyXFx1MDFGMStcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDFGMlxcdTAxRjRcXHgwN1xceDFGXFx4MDJcXHgwMlxcdTAxRjNcXHUwMUY1XFx4MDdcXGZcXHgwMlxceDAyXFx1MDFGNFxcdTAxRjNcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDFGNFxcdTAxRjVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRjVcXHUwMUY2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUY2XCIrXG5cdFx0XCJcXHUwMUY4XFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMUY3XFx1MDFGOVxceDA3XFxmXFx4MDJcXHgwMlxcdTAxRjhcXHUwMUY3XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxRjhcXHUwMUY5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUY5XFx1MDFGQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGQVxcdTAxRkJcIitcblx0XHRcIlxceDA3IFxceDAyXFx4MDJcXHUwMUZCLVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGQ1xcdTAxRkRcXHRcXHgwNFxceDAyXFx4MDJcXHUwMUZEXFx1MDFGRVwiK1xuXHRcdFwiXFx4MDUmXFx4MTRcXHgwMlxcdTAxRkUvXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUZGXFx1MDIwMVxceDA3XFx4MURcXHgwMlxceDAyXFx1MDIwMFwiK1xuXHRcdFwiXFx1MDIwMlxceDA3XFxmXFx4MDJcXHgwMlxcdTAyMDFcXHUwMjAwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjAxXFx1MDIwMlxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMjAyXFx1MDIwNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwM1xcdTAyMDVcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjA0XFx1MDIwM1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjA0XFx1MDIwNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwNVxcdTAyMDdcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDIwNlxcdTAyMDhcXHgwN1xcZlxceDAyXFx4MDJcXHUwMjA3XFx1MDIwNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwN1xcdTAyMDhcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDIwOFxcdTAyMEFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMDlcXHUwMjBCXFx4MDUyXFx4MUFcXHgwMlxcdTAyMEFcIitcblx0XHRcIlxcdTAyMDlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMEFcXHUwMjBCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjBCXFx1MDIwRFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjBDXFx1MDIwRVxceDA3XFxmXFx4MDJcXHgwMlxcdTAyMERcXHUwMjBDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjBEXFx1MDIwRVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjBFXFx1MDIxMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwRlxcdTAyMTFcXHgwN1xcdlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyMTBcXHUwMjBGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjEwXFx1MDIxMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxMVxcdTAyMTNcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDIxMlxcdTAyMTRcXHgwN1xcZlxceDAyXFx4MDJcXHUwMjEzXFx1MDIxMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxM1wiK1xuXHRcdFwiXFx1MDIxNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxNFxcdTAyMTVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTVcXHUwMjE2XFx4MDdcXHgxRVwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyMTYxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjE3XFx1MDIxOVxceDA1NFxceDFCXFx4MDJcXHUwMjE4XFx1MDIxQVxceDA3XCIrXG5cdFx0XCJcXGZcXHgwMlxceDAyXFx1MDIxOVxcdTAyMThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTlcXHUwMjFBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjFBXCIrXG5cdFx0XCJcXHUwMjI4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjFCXFx1MDIxRFxceDA3XFx4MTVcXHgwMlxceDAyXFx1MDIxQ1xcdTAyMUVcXHgwN1xcZlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyMURcXHUwMjFDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjFEXFx1MDIxRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxRVxcdTAyMjBcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxRlxcdTAyMjFcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjIwXFx1MDIxRlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjIwXFx1MDIyMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyMVxcdTAyMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMjJcXHUwMjI0XFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHUwMjIzXFx1MDIyMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyM1xcdTAyMjRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMjRcIitcblx0XHRcIlxcdTAyMjVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMjVcXHUwMjI3XFx4MDU0XFx4MUJcXHgwMlxcdTAyMjZcXHUwMjFCXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyMjdcXHUwMjJBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjI4XFx1MDIyNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyOFxcdTAyMjlcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyOTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMkFcXHUwMjI4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjJCXCIrXG5cdFx0XCJcXHUwMjJEXFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMjJDXFx1MDIyRVxceDA3XFx4MTdcXHgwMlxceDAyXFx1MDIyRFxcdTAyMkNcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDIyRFxcdTAyMkVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMkVcXHUwMjMwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjJGXCIrXG5cdFx0XCJcXHUwMjMxXFx4MDdcXGZcXHgwMlxceDAyXFx1MDIzMFxcdTAyMkZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMzBcXHUwMjMxXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyMzFcXHUwMjMyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjMyXFx1MDIzNFxceDA3XFx4MTNcXHgwMlxceDAyXFx1MDIzM1xcdTAyMzVcIitcblx0XHRcIlxceDA3XFxmXFx4MDJcXHgwMlxcdTAyMzRcXHUwMjMzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjM0XFx1MDIzNVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjM1XFx1MDIzNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzNlxcdTAyMzdcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAyMzc1XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyMzhcXHUwMjNBXFx4MDchXFx4MDJcXHgwMlxcdTAyMzlcXHUwMjNCXFx4MDdcXHZcXHgwMlxceDAyXFx1MDIzQVxcdTAyMzlcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzQVxcdTAyM0JcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyM0JcXHUwMjNEXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyM0NcXHUwMjNFXFx4MDdcXGZcXHgwMlxceDAyXFx1MDIzRFxcdTAyM0NcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyM0RcXHUwMjNFXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyM0VcXHUwMjQwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjNGXFx1MDI0MVxceDA3XFx2XFx4MDJcXHgwMlxcdTAyNDBcIitcblx0XHRcIlxcdTAyM0ZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDBcXHUwMjQxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjQxXFx1MDI0M1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjQyXFx1MDI0NFxceDA1XFx4MUFcXHgwRVxceDAyXFx1MDI0M1xcdTAyNDJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDNcIitcblx0XHRcIlxcdTAyNDRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDRcXHUwMjUyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjQ1XFx1MDI0N1xceDA3XFx4MTVcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjQ2XFx1MDI0OFxceDA3XFx2XFx4MDJcXHgwMlxcdTAyNDdcXHUwMjQ2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjQ3XFx1MDI0OFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjQ4XFx1MDI0QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0OVxcdTAyNEJcXHgwN1xcZlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyNEFcXHUwMjQ5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjRBXFx1MDI0QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0QlxcdTAyNERcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDI0Q1xcdTAyNEVcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjREXFx1MDI0Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0RFwiK1xuXHRcdFwiXFx1MDI0RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0RVxcdTAyNEZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNEZcXHUwMjUxXFx4MDVcXHgxQVwiK1xuXHRcdFwiXFx4MEVcXHgwMlxcdTAyNTBcXHUwMjQ1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjUxXFx1MDI1NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1MlwiK1xuXHRcdFwiXFx1MDI1MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1MlxcdTAyNTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTNcXHUwMjU2XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyNTRcXHUwMjUyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjU1XFx1MDI1N1xceDA3XFx2XFx4MDJcXHgwMlxcdTAyNTZcXHUwMjU1XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTZcXHUwMjU3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjU3XFx1MDI1OVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjU4XFx1MDI1QVxceDA3XFxmXFx4MDJcXHgwMlxcdTAyNTlcXHUwMjU4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjU5XFx1MDI1QVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjVBXFx1MDI1Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1QlxcdTAyNURcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjVDXCIrXG5cdFx0XCJcXHUwMjVCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjVDXFx1MDI1RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1RFxcdTAyNUVcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDI1RVxcdTAyNjdcXHgwN1xcXCJcXHgwMlxceDAyXFx1MDI1RlxcdTAyNjJcXHgwNThcXHgxRFxceDAyXFx1MDI2MFxcdTAyNjFcIitcblx0XHRcIlxceDA3IVxceDAyXFx4MDJcXHUwMjYxXFx1MDI2M1xceDA3XFxcIlxceDAyXFx4MDJcXHUwMjYyXFx1MDI2MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2M1wiK1xuXHRcdFwiXFx1MDI2NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2NFxcdTAyNjJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNjRcXHUwMjY1XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyNjVcXHUwMjY3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjY2XFx1MDIzOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2NlwiK1xuXHRcdFwiXFx1MDI1RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2NzdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNjhcXHUwMjY5XFxiXFx4MURcXHgwMVxceDAyXCIrXG5cdFx0XCJcXHUwMjY5XFx1MDI3MFxceDA1XFx4MUNcXHgwRlxceDAyXFx1MDI2QVxcdTAyNzBcXHgwNVxcXCJcXHgxMlxceDAyXFx1MDI2QlxcdTAyNzBcXHgwNVwiK1xuXHRcdFwiJlxceDE0XFx4MDJcXHUwMjZDXFx1MDI3MFxceDA1LFxceDE3XFx4MDJcXHUwMjZEXFx1MDI3MFxceDA1LlxceDE4XFx4MDJcXHUwMjZFXFx1MDI3MFwiK1xuXHRcdFwiXFx4MDUwXFx4MTlcXHgwMlxcdTAyNkZcXHUwMjY4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjZGXFx1MDI2QVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjZGXFx1MDI2QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2RlxcdTAyNkNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNkZcXHUwMjZEXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyNkZcXHUwMjZFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjcwXFx1MDI4OFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3MVwiK1xuXHRcdFwiXFx1MDI3M1xcZlxcdFxceDAyXFx4MDJcXHUwMjcyXFx1MDI3NFxceDA3XFxmXFx4MDJcXHgwMlxcdTAyNzNcXHUwMjcyXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyNzNcXHUwMjc0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjc0XFx1MDI3NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3NVxcdTAyNzdcXHgwN1wiK1xuXHRcdFwiXFx2XFx4MDJcXHgwMlxcdTAyNzZcXHUwMjc1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjc2XFx1MDI3N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3N1wiK1xuXHRcdFwiXFx1MDI3OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3OFxcdTAyN0FcXHgwN1xcZlxceDAyXFx4MDJcXHUwMjc5XFx1MDI3OFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMjc5XFx1MDI3QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3QVxcdTAyN0JcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyN0JcXHUwMjdEXCIrXG5cdFx0XCJcXHRcXHgwM1xceDAyXFx4MDJcXHUwMjdDXFx1MDI3RVxceDA3XFxmXFx4MDJcXHgwMlxcdTAyN0RcXHUwMjdDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjdEXCIrXG5cdFx0XCJcXHUwMjdFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjdFXFx1MDI4MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3RlxcdTAyODFcXHgwN1xcdlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyODBcXHUwMjdGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjgwXFx1MDI4MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4MVxcdTAyODNcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4MlxcdTAyODRcXHgwN1xcZlxceDAyXFx4MDJcXHUwMjgzXFx1MDI4MlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjgzXFx1MDI4NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4NFxcdTAyODVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyODVcXHUwMjg3XFx4MDVcIitcblx0XHRcIjhcXHgxRFxcblxcdTAyODZcXHUwMjcxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjg3XFx1MDI4QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4OFwiK1xuXHRcdFwiXFx1MDI4NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4OFxcdTAyODlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyODk5XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyOEFcXHUwMjg4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjhCXFx1MDI4RVxceDA1XFx4MTZcXGZcXHgwMlxcdTAyOENcXHUwMjhEXCIrXG5cdFx0XCJcXHgwN1xceDE0XFx4MDJcXHgwMlxcdTAyOERcXHUwMjhGXFx4MDU8XFx4MUZcXHgwMlxcdTAyOEVcXHUwMjhDXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyOEZcXHUwMjkwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjkwXFx1MDI4RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5MFxcdTAyOTFcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDI5MVxcdTAyOUFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOTJcXHUwMjk1XFx4MDVcXHgxOFxcclxceDAyXFx1MDI5M1wiK1xuXHRcdFwiXFx1MDI5NFxceDA3XFx4MTRcXHgwMlxceDAyXFx1MDI5NFxcdTAyOTZcXHgwNTxcXHgxRlxceDAyXFx1MDI5NVxcdTAyOTNcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDI5NlxcdTAyOTdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOTdcXHUwMjk1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjk3XFx1MDI5OFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjk4XFx1MDI5QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5OVxcdTAyOEJcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI5OVxcdTAyOTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOUE7XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjlCXFx1MDI5RVxceDA1XFx4MTZcIitcblx0XHRcIlxcZlxceDAyXFx1MDI5Q1xcdTAyOUVcXHgwNVxceDE4XFxyXFx4MDJcXHUwMjlEXFx1MDI5QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5RFxcdTAyOUNcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5RT1cXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOUZcXHUwMkEwXFxiIFxceDAxXFx4MDJcXHUwMkEwXFx1MDJBN1wiK1xuXHRcdFwiXFx4MDVAIVxceDAyXFx1MDJBMVxcdTAyQTdcXHgwNUJcXFwiXFx4MDJcXHUwMkEyXFx1MDJBN1xceDA1RCNcXHgwMlxcdTAyQTNcXHUwMkE3XFx4MDVcIitcblx0XHRcIkomXFx4MDJcXHUwMkE0XFx1MDJBN1xceDA1TFxcJ1xceDAyXFx1MDJBNVxcdTAyQTdcXHgwNU4oXFx4MDJcXHUwMkE2XFx1MDI5RlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMkE2XFx1MDJBMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBNlxcdTAyQTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQTZcIitcblx0XHRcIlxcdTAyQTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQTZcXHUwMkE0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkE2XFx1MDJBNVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMkE3XFx1MDJCQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBOFxcdTAyQUFcXGZcXHRcXHgwMlxceDAyXFx1MDJBOVxcdTAyQUJcIitcblx0XHRcIlxceDA3XFxmXFx4MDJcXHgwMlxcdTAyQUFcXHUwMkE5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkFBXFx1MDJBQlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkFCXFx1MDJBQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBQ1xcdTAyQUVcXHRcXHgwNVxceDAyXFx4MDJcXHUwMkFEXFx1MDJBRlxceDA3XCIrXG5cdFx0XCJcXGZcXHgwMlxceDAyXFx1MDJBRVxcdTAyQURcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQUVcXHUwMkFGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkFGXCIrXG5cdFx0XCJcXHUwMkIwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkIwXFx1MDJCQlxceDA1PiBcXG5cXHUwMkIxXFx1MDJCM1xcZlxcYlxceDAyXFx4MDJcXHUwMkIyXCIrXG5cdFx0XCJcXHUwMkI0XFx4MDdcXGZcXHgwMlxceDAyXFx1MDJCM1xcdTAyQjJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQjNcXHUwMkI0XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyQjRcXHUwMkI1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkI1XFx1MDJCN1xcdFxceDA2XFx4MDJcXHgwMlxcdTAyQjZcXHUwMkI4XCIrXG5cdFx0XCJcXHgwN1xcZlxceDAyXFx4MDJcXHUwMkI3XFx1MDJCNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCN1xcdTAyQjhcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJCOFxcdTAyQjlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQjlcXHUwMkJCXFx4MDU+IFxcdFxcdTAyQkFcXHUwMkE4XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyQkFcXHUwMkIxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkJCXFx1MDJCRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCQ1xcdTAyQkFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCQ1xcdTAyQkRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQkQ/XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkJFXCIrXG5cdFx0XCJcXHUwMkJDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkJGXFx1MDJDMFxcdFxceDA2XFx4MDJcXHgwMlxcdTAyQzBcXHUwMkMxXFx4MDU+IFxceDAyXCIrXG5cdFx0XCJcXHUwMkMxQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDMlxcdTAyQzRcXHgwNyFcXHgwMlxceDAyXFx1MDJDM1xcdTAyQzVcXHgwN1xcdlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyQzRcXHUwMkMzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkM0XFx1MDJDNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDNVxcdTAyQzdcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDNlxcdTAyQzhcXHgwN1xcZlxceDAyXFx4MDJcXHUwMkM3XFx1MDJDNlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkM3XFx1MDJDOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDOFxcdTAyQ0FcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQzlcXHUwMkNCXFx4MDdcIitcblx0XHRcIlxcdlxceDAyXFx4MDJcXHUwMkNBXFx1MDJDOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDQVxcdTAyQ0JcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQ0JcIitcblx0XHRcIlxcdTAyQ0RcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQ0NcXHUwMkNFXFx4MDU+IFxceDAyXFx1MDJDRFxcdTAyQ0NcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJDRFxcdTAyQ0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQ0VcXHUwMkRDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkNGXFx1MDJEMVxceDA3XCIrXG5cdFx0XCJcXHgxNVxceDAyXFx4MDJcXHUwMkQwXFx1MDJEMlxceDA3XFx2XFx4MDJcXHgwMlxcdTAyRDFcXHUwMkQwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkQxXCIrXG5cdFx0XCJcXHUwMkQyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkQyXFx1MDJENFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJEM1xcdTAyRDVcXHgwN1xcZlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyRDRcXHUwMkQzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkQ0XFx1MDJENVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJENVxcdTAyRDdcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJENlxcdTAyRDhcXHgwN1xcdlxceDAyXFx4MDJcXHUwMkQ3XFx1MDJENlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkQ3XFx1MDJEOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJEOFxcdTAyRDlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRDlcXHUwMkRCXFx4MDVcIitcblx0XHRcIj4gXFx4MDJcXHUwMkRBXFx1MDJDRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJEQlxcdTAyREVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRENcXHUwMkRBXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRENcXHUwMkREXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkREXFx1MDJFMFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkRFXFx1MDJEQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJERlxcdTAyRTFcXHgwN1xcdlxceDAyXFx4MDJcXHUwMkUwXFx1MDJERlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMkUwXFx1MDJFMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFMVxcdTAyRTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRTJcIitcblx0XHRcIlxcdTAyRTRcXHgwN1xcZlxceDAyXFx4MDJcXHUwMkUzXFx1MDJFMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFM1xcdTAyRTRcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJFNFxcdTAyRTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRTVcXHUwMkU3XFx4MDdcXHZcXHgwMlxceDAyXFx1MDJFNlxcdTAyRTVcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFNlxcdTAyRTdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRTdcXHUwMkU4XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyRThcXHUwMkU5XFx4MDdcXFwiXFx4MDJcXHgwMlxcdTAyRTlDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkVBXFx1MDJFQ1xceDA3XFx4MURcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMkVCXFx1MDJFRFxceDA3XFxmXFx4MDJcXHgwMlxcdTAyRUNcXHUwMkVCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkVDXFx1MDJFRFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkVEXFx1MDJFRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFRVxcdTAyRjBcXHgwN1xcdlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyRUZcXHUwMkVFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkVGXFx1MDJGMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGMFxcdTAyRjJcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDJGMVxcdTAyRjNcXHgwN1xcZlxceDAyXFx4MDJcXHUwMkYyXFx1MDJGMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGMlwiK1xuXHRcdFwiXFx1MDJGM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGM1xcdTAyRjVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRjRcXHUwMkY2XFx4MDVGJFxceDAyXCIrXG5cdFx0XCJcXHUwMkY1XFx1MDJGNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGNVxcdTAyRjZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRjZcXHUwMkY4XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyRjdcXHUwMkY5XFx4MDdcXGZcXHgwMlxceDAyXFx1MDJGOFxcdTAyRjdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRjhcIitcblx0XHRcIlxcdTAyRjlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRjlcXHUwMkZCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkZBXFx1MDJGQ1xceDA3XFx2XFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJGQlxcdTAyRkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRkJcXHUwMkZDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkZDXFx1MDJGRVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkZEXFx1MDJGRlxceDA3XFxmXFx4MDJcXHgwMlxcdTAyRkVcXHUwMkZEXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyRkVcXHUwMkZGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkZGXFx1MDMwMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwMFxcdTAzMDFcXHgwN1wiK1xuXHRcdFwiXFx4MUVcXHgwMlxceDAyXFx1MDMwMUVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDJcXHUwMzEzXFx4MDVIJVxceDAyXFx1MDMwM1xcdTAzMDVcIitcblx0XHRcIlxceDA3XFxmXFx4MDJcXHgwMlxcdTAzMDRcXHUwMzAzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzA0XFx1MDMwNVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzA1XFx1MDMwNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwNlxcdTAzMDhcXHgwN1xceDE1XFx4MDJcXHgwMlxcdTAzMDdcXHUwMzA5XFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHUwMzA4XFx1MDMwN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwOFxcdTAzMDlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDlcIitcblx0XHRcIlxcdTAzMEJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMEFcXHUwMzBDXFx4MDdcXHZcXHgwMlxceDAyXFx1MDMwQlxcdTAzMEFcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDMwQlxcdTAzMENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMENcXHUwMzBFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzBEXFx1MDMwRlwiK1xuXHRcdFwiXFx4MDdcXGZcXHgwMlxceDAyXFx1MDMwRVxcdTAzMERcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMEVcXHUwMzBGXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzMEZcXHUwMzEwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzEwXFx1MDMxMlxceDA1SCVcXHgwMlxcdTAzMTFcXHUwMzA0XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzMTJcXHUwMzE1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzEzXFx1MDMxMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxM1wiK1xuXHRcdFwiXFx1MDMxNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxNEdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMTVcXHUwMzEzXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzMTZcXHUwMzE4XFx4MDVMXFwnXFx4MDJcXHUwMzE3XFx1MDMxOVxceDA3XFxmXFx4MDJcXHgwMlxcdTAzMThcXHUwMzE3XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzMThcXHUwMzE5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzE5XFx1MDMxQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxQVwiK1xuXHRcdFwiXFx1MDMxQ1xceDA3XFx4MTNcXHgwMlxceDAyXFx1MDMxQlxcdTAzMURcXHgwN1xcZlxceDAyXFx4MDJcXHUwMzFDXFx1MDMxQlxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzFDXFx1MDMxRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxRFxcdTAzMUVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMUVcXHUwMzFGXCIrXG5cdFx0XCJcXHgwNUQjXFx4MDJcXHUwMzFGXFx1MDMyQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyMFxcdTAzMjJcXHgwNUxcXCdcXHgwMlxcdTAzMjFcXHUwMzIzXCIrXG5cdFx0XCJcXHgwN1xcZlxceDAyXFx4MDJcXHUwMzIyXFx1MDMyMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyMlxcdTAzMjNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDMyM1xcdTAzMjRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjRcXHUwMzI2XFx4MDdcXHgxM1xceDAyXFx4MDJcXHUwMzI1XFx1MDMyN1xceDA3XCIrXG5cdFx0XCJcXGZcXHgwMlxceDAyXFx1MDMyNlxcdTAzMjVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjZcXHUwMzI3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzI3XCIrXG5cdFx0XCJcXHUwMzI4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzI4XFx1MDMyOVxceDA1TFxcJ1xceDAyXFx1MDMyOVxcdTAzMkJcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDMyQVxcdTAzMTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMkFcXHUwMzIwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzJCSVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMzJDXFx1MDMyRVxceDA3XFx4MUZcXHgwMlxceDAyXFx1MDMyRFxcdTAzMkZcXHgwN1xcZlxceDAyXFx4MDJcXHUwMzJFXCIrXG5cdFx0XCJcXHUwMzJEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzJFXFx1MDMyRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyRlxcdTAzMzFcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDMzMFxcdTAzMzJcXHgwN1xcdlxceDAyXFx4MDJcXHUwMzMxXFx1MDMzMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzMVxcdTAzMzJcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzMlxcdTAzMzRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMzNcXHUwMzM1XFx4MDdcXGZcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzM0XFx1MDMzM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzNFxcdTAzMzVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMzVcXHUwMzM3XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzMzZcXHUwMzM4XFx4MDVcXHgxRVxceDEwXFx4MDJcXHUwMzM3XFx1MDMzNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzN1wiK1xuXHRcdFwiXFx1MDMzOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzOFxcdTAzM0FcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMzlcXHUwMzNCXFx4MDdcXGZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzNBXFx1MDMzOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzQVxcdTAzM0JcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzM0JcXHUwMzNEXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzM0NcXHUwMzNFXFx4MDdcXHZcXHgwMlxceDAyXFx1MDMzRFxcdTAzM0NcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDMzRFxcdTAzM0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzM0VcXHUwMzQwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzNGXFx1MDM0MVxceDA3XCIrXG5cdFx0XCJcXGZcXHgwMlxceDAyXFx1MDM0MFxcdTAzM0ZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDBcXHUwMzQxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzQxXCIrXG5cdFx0XCJcXHUwMzQyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzQyXFx1MDM0NFxceDA3IFxceDAyXFx4MDJcXHUwMzQzXFx1MDM0NVxceDA3XFxmXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDM0NFxcdTAzNDNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDRcXHUwMzQ1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzQ1XFx1MDM0N1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzQ2XFx1MDM0OFxceDA3XFx2XFx4MDJcXHgwMlxcdTAzNDdcXHUwMzQ2XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzNDdcXHUwMzQ4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzQ4XFx1MDM0QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0OVxcdTAzNEJcXHgwN1wiK1xuXHRcdFwiXFxmXFx4MDJcXHgwMlxcdTAzNEFcXHUwMzQ5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzRBXFx1MDM0QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0QlwiK1xuXHRcdFwiXFx1MDM0Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0Q1xcdTAzNEVcXHgwN1xceDFBXFx4MDJcXHgwMlxcdTAzNERcXHUwMzRGXFx4MDdcXGZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzRFXFx1MDM0RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0RVxcdTAzNEZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNEZcXHUwMzUxXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNTBcXHUwMzUyXFx4MDdcXHZcXHgwMlxceDAyXFx1MDM1MVxcdTAzNTBcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDM1MVxcdTAzNTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNTJcXHUwMzU0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzUzXFx1MDM1NVxceDA3XCIrXG5cdFx0XCJcXGZcXHgwMlxceDAyXFx1MDM1NFxcdTAzNTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNTRcXHUwMzU1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzU1XCIrXG5cdFx0XCJcXHUwMzU2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzU2XFx1MDM1OFxceDA1XFx4MUFcXHgwRVxceDAyXFx1MDM1N1xcdTAzNTlcXHgwN1xceDE3XCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDM1OFxcdTAzNTdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNThcXHUwMzU5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzU5XCIrXG5cdFx0XCJcXHUwMzczXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzVBXFx1MDM1Q1xceDA1IFxceDExXFx4MDJcXHUwMzVCXFx1MDM1RFxceDA3XFxmXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDM1Q1xcdTAzNUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNUNcXHUwMzVEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzVEXFx1MDM1RlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzVFXFx1MDM2MFxceDA3XFx2XFx4MDJcXHgwMlxcdTAzNUZcXHUwMzVFXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzNUZcXHUwMzYwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzYwXFx1MDM2MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2MVxcdTAzNjNcXHgwN1wiK1xuXHRcdFwiXFxmXFx4MDJcXHgwMlxcdTAzNjJcXHUwMzYxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzYyXFx1MDM2M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2M1wiK1xuXHRcdFwiXFx1MDM2NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2NFxcdTAzNjZcXHgwN1xceDFBXFx4MDJcXHgwMlxcdTAzNjVcXHUwMzY3XFx4MDdcXGZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzY2XFx1MDM2NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2NlxcdTAzNjdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNjdcXHUwMzY5XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNjhcXHUwMzZBXFx4MDdcXHZcXHgwMlxceDAyXFx1MDM2OVxcdTAzNjhcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDM2OVxcdTAzNkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNkFcXHUwMzZDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzZCXFx1MDM2RFxceDA3XCIrXG5cdFx0XCJcXGZcXHgwMlxceDAyXFx1MDM2Q1xcdTAzNkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNkNcXHUwMzZEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzZEXCIrXG5cdFx0XCJcXHUwMzZFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzZFXFx1MDM3MFxceDA1XFx4MUFcXHgwRVxceDAyXFx1MDM2RlxcdTAzNzFcXHgwN1xceDE3XCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDM3MFxcdTAzNkZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNzBcXHUwMzcxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzcxXCIrXG5cdFx0XCJcXHUwMzczXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzcyXFx1MDMyQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3MlxcdTAzNUFcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDM3M0tcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNzRcXHUwMzc1XFx0XFx4MDdcXHgwMlxceDAyXFx1MDM3NU1cXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDM3NlxcdTAzNzhcXHgwN1xceDFGXFx4MDJcXHgwMlxcdTAzNzdcXHUwMzc5XFx4MDdcXGZcXHgwMlxceDAyXFx1MDM3OFxcdTAzNzdcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3OFxcdTAzNzlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNzlcXHUwMzdBXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzN0FcXHUwMzdDXFx4MDU+IFxceDAyXFx1MDM3QlxcdTAzN0RcXHgwN1xcZlxceDAyXFx4MDJcXHUwMzdDXFx1MDM3QlxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzdDXFx1MDM3RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3RFxcdTAzN0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzN0VcXHUwMzdGXCIrXG5cdFx0XCJcXHgwNyBcXHgwMlxceDAyXFx1MDM3Rk9cXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzODBcXHUwMzgxXFx4MDVSKlxceDAyXFx1MDM4MVFcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDM4MlxcdTAzODZcXHgwNVQrXFx4MDJcXHUwMzgzXFx1MDM4NVxceDA1WC1cXHgwMlxcdTAzODRcXHUwMzgzXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzODVcXHUwMzg4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzg2XFx1MDM4NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4NlwiK1xuXHRcdFwiXFx1MDM4N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4N1xcdTAzOTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzODhcXHUwMzg2XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzODlcXHUwMzhEXFx4MDVcXFxcL1xceDAyXFx1MDM4QVxcdTAzOENcXHgwNVgtXFx4MDJcXHUwMzhCXFx1MDM4QVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMzhDXFx1MDM4RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4RFxcdTAzOEJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOERcIitcblx0XHRcIlxcdTAzOEVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOEVcXHUwMzkxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzhGXFx1MDM4RFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMzkwXFx1MDM4MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5MFxcdTAzODlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOTFcIitcblx0XHRcIlNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOTJcXHUwMzk0XFx4MDdcXGZcXHgwMlxceDAyXFx1MDM5M1xcdTAzOTJcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDM5M1xcdTAzOTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOTRcXHUwMzk2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzk1XFx1MDM5N1xceDA1XCIrXG5cdFx0XCJWLFxceDAyXFx1MDM5NlxcdTAzOTVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOTdcXHUwMzk4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzk4XFx1MDM5NlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzk4XFx1MDM5OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5OVxcdTAzOUZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDM5QVxcdTAzOUVcXHgwNVYsXFx4MDJcXHUwMzlCXFx1MDM5RVxceDA3XFxmXFx4MDJcXHgwMlxcdTAzOUNcXHUwMzlFXFx4MDdcXHgwRVxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzOURcXHUwMzlBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzlEXFx1MDM5QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5RFxcdTAzOUNcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5RVxcdTAzQTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOUZcXHUwMzlEXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzOUZcXHUwM0EwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0EwVVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBMVxcdTAzOUZcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDNBMlxcdTAzQUNcXHgwN1xcclxceDAyXFx4MDJcXHUwM0EzXFx1MDNBQ1xceDA3XFxuXFx4MDJcXHgwMlxcdTAzQTRcXHUwM0FDXCIrXG5cdFx0XCJcXHgwN1xceDEyXFx4MDJcXHgwMlxcdTAzQTVcXHUwM0FDXFx4MDdcXHgxRFxceDAyXFx4MDJcXHUwM0E2XFx1MDNBQ1xceDA3XFx4MUVcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwM0E3XFx1MDNBQ1xceDA3XFx4MTNcXHgwMlxceDAyXFx1MDNBOFxcdTAzQUNcXHgwN1xceDEwXFx4MDJcXHgwMlxcdTAzQTlcXHUwM0FDXFx4MDdcIitcblx0XHRcIlxceDE0XFx4MDJcXHgwMlxcdTAzQUFcXHUwM0FDXFx4MDVMXFwnXFx4MDJcXHUwM0FCXFx1MDNBMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBQlwiK1xuXHRcdFwiXFx1MDNBM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBQlxcdTAzQTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQUJcXHUwM0E1XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzQUJcXHUwM0E2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0FCXFx1MDNBN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBQlwiK1xuXHRcdFwiXFx1MDNBOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBQlxcdTAzQTlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQUJcXHUwM0FBXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzQUNXXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0FEXFx1MDNCMFxceDA1XFxcXC9cXHgwMlxcdTAzQUVcXHUwM0IwXFx4MDVcIitcblx0XHRcIlouXFx4MDJcXHUwM0FGXFx1MDNBRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBRlxcdTAzQUVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQjBZXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQjFcXHUwM0I1XFx4MDVWLFxceDAyXFx1MDNCMlxcdTAzQjVcXHgwN1xcZlxceDAyXFx4MDJcXHUwM0IzXCIrXG5cdFx0XCJcXHUwM0I1XFx4MDdcXHgwRVxceDAyXFx4MDJcXHUwM0I0XFx1MDNCMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNCNFxcdTAzQjJcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDNCNFxcdTAzQjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQjVcXHUwM0I2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0I2XCIrXG5cdFx0XCJcXHUwM0I0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0I2XFx1MDNCN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNCN1tcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDNCOFxcdTAzQjlcXHgwN1xceDFDXFx4MDJcXHgwMlxcdTAzQjlcXHUwM0JBXFx4MDVeMFxceDAyXFx1MDNCQVxcdTAzQkNcXHgwN1wiK1xuXHRcdFwiXFxmXFx4MDJcXHgwMlxcdTAzQkJcXHUwM0JEXFx4MDVgMVxceDAyXFx1MDNCQ1xcdTAzQkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQkNcXHUwM0JEXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQkRcXHUwM0JFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0JFXFx1MDNCRlxceDA3XFx4MUVcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwM0JGXVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNDMFxcdTAzQzFcXHgwNVxceDE2XFxmXFx4MDJcXHUwM0MxX1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwM0MyXFx1MDNDNFxceDA1ZDNcXHgwMlxcdTAzQzNcXHUwM0MyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0M0XFx1MDNDNVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwM0M1XFx1MDNDM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNDNVxcdTAzQzZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQzZcIitcblx0XHRcImFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQzdcXHUwM0NCXFx4MDdcXHgxRFxceDAyXFx4MDJcXHUwM0M4XFx1MDNDQVxceDA1ZDNcXHgwMlxcdTAzQzlcIitcblx0XHRcIlxcdTAzQzhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQ0FcXHUwM0NEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0NCXFx1MDNDOVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwM0NCXFx1MDNDQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNDQ1xcdTAzQ0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQ0RcIitcblx0XHRcIlxcdTAzQ0JcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQ0VcXHUwM0NGXFx4MDdcXHgxRVxceDAyXFx4MDJcXHUwM0NGY1xceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwM0QwXFx1MDNEQVxceDA1YjJcXHgwMlxcdTAzRDFcXHUwM0Q2XFx4MDVmNFxceDAyXFx1MDNEMlxcdTAzRDNcXHgwN1xcdlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzRDNcXHUwM0Q1XFx4MDVmNFxceDAyXFx1MDNENFxcdTAzRDJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRDVcXHUwM0Q4XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzRDZcXHUwM0Q0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0Q2XFx1MDNEN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNEN1wiK1xuXHRcdFwiXFx1MDNEQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNEOFxcdTAzRDZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRDlcXHUwM0QwXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzRDlcXHUwM0QxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0RBZVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNEQlxcdTAzRENcIitcblx0XHRcIlxcdFxcYlxceDAyXFx4MDJcXHUwM0RDZ1xceDAzXFx4MDJcXHgwMlxceDAyXFx4QzZrb3RcXHg4MFxceDg3XFx4OTVcXHg5OVxceEEyXFx4QUVcXHhCM1wiK1xuXHRcdFwiXFx4QkRcXHhDMVxceEM5XFx4Q0RcXHhEMVxceEQ1XFx4RERcXHhFMVxceEU2XFx4RjBcXHhGNFxceEY4XFx4RkNcXHUwMTAxXFx1MDEwOVxcdTAxMERcIitcblx0XHRcIlxcdTAxMTNcXHUwMTE3XFx1MDExQ1xcdTAxMjJcXHUwMTJBXFx1MDEzMVxcdTAxMzhcXHUwMTNBXFx1MDE0MFxcdTAxNEZcXHUwMTUzXFx1MDE1NlwiK1xuXHRcdFwiXFx1MDE1OVxcdTAxNURcXHUwMTYwXFx1MDE2M1xcdTAxNjhcXHUwMTZEXFx1MDE3MFxcdTAxNzNcXHUwMTc2XFx1MDE3OVxcdTAxN0NcXHUwMTdGXCIrXG5cdFx0XCJcXHUwMTgzXFx1MDE4NlxcdTAxODlcXHUwMThEXFx1MDE5MFxcdTAxOTNcXHUwMTk3XFx1MDE5QlxcdTAxOUVcXHUwMUExXFx1MDFBNVxcdTAxQThcIitcblx0XHRcIlxcdTAxQUJcXHUwMUFGXFx1MDFCMVxcdTAxQjZcXHUwMUI5XFx1MDFCRVxcdTAxQzNcXHUwMUM3XFx1MDFDQVxcdTAxQ0RcXHUwMUQxXFx1MDFENVwiK1xuXHRcdFwiXFx1MDFEQlxcdTAxREZcXHUwMUU0XFx1MDFFQVxcdTAxRUVcXHUwMUY0XFx1MDFGOFxcdTAyMDFcXHUwMjA0XFx1MDIwN1xcdTAyMEFcXHUwMjBEXCIrXG5cdFx0XCJcXHUwMjEwXFx1MDIxM1xcdTAyMTlcXHUwMjFEXFx1MDIyMFxcdTAyMjNcXHUwMjI4XFx1MDIyRFxcdTAyMzBcXHUwMjM0XFx1MDIzQVxcdTAyM0RcIitcblx0XHRcIlxcdTAyNDBcXHUwMjQzXFx1MDI0N1xcdTAyNEFcXHUwMjREXFx1MDI1MlxcdTAyNTZcXHUwMjU5XFx1MDI1Q1xcdTAyNjRcXHUwMjY2XFx1MDI2RlwiK1xuXHRcdFwiXFx1MDI3M1xcdTAyNzZcXHUwMjc5XFx1MDI3RFxcdTAyODBcXHUwMjgzXFx1MDI4OFxcdTAyOTBcXHUwMjk3XFx1MDI5OVxcdTAyOURcXHUwMkE2XCIrXG5cdFx0XCJcXHUwMkFBXFx1MDJBRVxcdTAyQjNcXHUwMkI3XFx1MDJCQVxcdTAyQkNcXHUwMkM0XFx1MDJDN1xcdTAyQ0FcXHUwMkNEXFx1MDJEMVxcdTAyRDRcIitcblx0XHRcIlxcdTAyRDdcXHUwMkRDXFx1MDJFMFxcdTAyRTNcXHUwMkU2XFx1MDJFQ1xcdTAyRUZcXHUwMkYyXFx1MDJGNVxcdTAyRjhcXHUwMkZCXFx1MDJGRVwiK1xuXHRcdFwiXFx1MDMwNFxcdTAzMDhcXHUwMzBCXFx1MDMwRVxcdTAzMTNcXHUwMzE4XFx1MDMxQ1xcdTAzMjJcXHUwMzI2XFx1MDMyQVxcdTAzMkVcXHUwMzMxXCIrXG5cdFx0XCJcXHUwMzM0XFx1MDMzN1xcdTAzM0FcXHUwMzNEXFx1MDM0MFxcdTAzNDRcXHUwMzQ3XFx1MDM0QVxcdTAzNEVcXHUwMzUxXFx1MDM1NFxcdTAzNThcIitcblx0XHRcIlxcdTAzNUNcXHUwMzVGXFx1MDM2MlxcdTAzNjZcXHUwMzY5XFx1MDM2Q1xcdTAzNzBcXHUwMzcyXFx1MDM3OFxcdTAzN0NcXHUwMzg2XFx1MDM4RFwiK1xuXHRcdFwiXFx1MDM5MFxcdTAzOTNcXHUwMzk4XFx1MDM5RFxcdTAzOUZcXHUwM0FCXFx1MDNBRlxcdTAzQjRcXHUwM0I2XFx1MDNCQ1xcdTAzQzVcXHUwM0NCXCIrXG5cdFx0XCJcXHUwM0Q2XFx1MDNEOVwiO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IF9zZXJpYWxpemVkQVROOiBzdHJpbmcgPSBVdGlscy5qb2luKFxuXHRcdFtcblx0XHRcdFhEb2NTeW50YXhQYXJzZXIuX3NlcmlhbGl6ZWRBVE5TZWdtZW50MCxcblx0XHRcdFhEb2NTeW50YXhQYXJzZXIuX3NlcmlhbGl6ZWRBVE5TZWdtZW50MVxuXHRcdF0sXG5cdFx0XCJcIlxuXHQpO1xuXHRwdWJsaWMgc3RhdGljIF9fQVROOiBBVE47XG5cdHB1YmxpYyBzdGF0aWMgZ2V0IF9BVE4oKTogQVROIHtcblx0XHRpZiAoIVhEb2NTeW50YXhQYXJzZXIuX19BVE4pIHtcblx0XHRcdFhEb2NTeW50YXhQYXJzZXIuX19BVE4gPSBuZXcgQVRORGVzZXJpYWxpemVyKCkuZGVzZXJpYWxpemUoVXRpbHMudG9DaGFyQXJyYXkoWERvY1N5bnRheFBhcnNlci5fc2VyaWFsaXplZEFUTikpO1xuXHRcdH1cblxuXHRcdHJldHVybiBYRG9jU3ludGF4UGFyc2VyLl9fQVROO1xuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50YXRpb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgRU9GKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuRU9GLCAwKTsgfVxuXHRwdWJsaWMgYm9keSgpOiBCb2R5Q29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgQm9keUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2RvY3VtZW50YXRpb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckRvY3VtZW50YXRpb24pIGxpc3RlbmVyLmVudGVyRG9jdW1lbnRhdGlvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERvY3VtZW50YXRpb24pIGxpc3RlbmVyLmV4aXREb2N1bWVudGF0aW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXREb2N1bWVudGF0aW9uKSByZXR1cm4gdmlzaXRvci52aXNpdERvY3VtZW50YXRpb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEJvZHlDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgYW5ub3RhdGlvbnMoKTogQW5ub3RhdGlvbnNDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBBbm5vdGF0aW9uc0NvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyB3aGl0ZXNwYWNlKCk6IFdoaXRlc3BhY2VDb250ZXh0W107XG5cdHB1YmxpYyB3aGl0ZXNwYWNlKGk6IG51bWJlcik6IFdoaXRlc3BhY2VDb250ZXh0O1xuXHRwdWJsaWMgd2hpdGVzcGFjZShpPzogbnVtYmVyKTogV2hpdGVzcGFjZUNvbnRleHQgfCBXaGl0ZXNwYWNlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoV2hpdGVzcGFjZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBXaGl0ZXNwYWNlQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9ib2R5OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJCb2R5KSBsaXN0ZW5lci5lbnRlckJvZHkodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRCb2R5KSBsaXN0ZW5lci5leGl0Qm9keSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0Qm9keSkgcmV0dXJuIHZpc2l0b3IudmlzaXRCb2R5KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBXaGl0ZXNwYWNlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIDApOyB9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3doaXRlc3BhY2U7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlcldoaXRlc3BhY2UpIGxpc3RlbmVyLmVudGVyV2hpdGVzcGFjZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFdoaXRlc3BhY2UpIGxpc3RlbmVyLmV4aXRXaGl0ZXNwYWNlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRXaGl0ZXNwYWNlKSByZXR1cm4gdmlzaXRvci52aXNpdFdoaXRlc3BhY2UodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25zQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHRhZygpOiBUYWdDb250ZXh0W107XG5cdHB1YmxpYyB0YWcoaTogbnVtYmVyKTogVGFnQ29udGV4dDtcblx0cHVibGljIHRhZyhpPzogbnVtYmVyKTogVGFnQ29udGV4dCB8IFRhZ0NvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKFRhZ0NvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBUYWdDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2Fubm90YXRpb25zOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJBbm5vdGF0aW9ucykgbGlzdGVuZXIuZW50ZXJBbm5vdGF0aW9ucyh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEFubm90YXRpb25zKSBsaXN0ZW5lci5leGl0QW5ub3RhdGlvbnModGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEFubm90YXRpb25zKSByZXR1cm4gdmlzaXRvci52aXNpdEFubm90YXRpb25zKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBUYWdDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgdGFnTmFtZSgpOiBUYWdOYW1lQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgVGFnTmFtZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE1JTlVTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTUlOVVMsIDApOyB9XG5cdHB1YmxpYyBkZXNjcmlwdGlvbigpOiBEZXNjcmlwdGlvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIERlc2NyaXB0aW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCAwKTsgfVxuXHRwdWJsaWMgdGFnSWRlbnRpZmllcigpOiBUYWdJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVGFnSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBFUVVBTCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkVRVUFMLCAwKTsgfVxuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBDT0xPTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTE9OLCAwKTsgfVxuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVHlwZUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90YWc7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclRhZykgbGlzdGVuZXIuZW50ZXJUYWcodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRUYWcpIGxpc3RlbmVyLmV4aXRUYWcodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFRhZykgcmV0dXJuIHZpc2l0b3IudmlzaXRUYWcodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFRhZ05hbWVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgQVQoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5BVCwgMCk7IH1cblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdGFnTmFtZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVGFnTmFtZSkgbGlzdGVuZXIuZW50ZXJUYWdOYW1lKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0VGFnTmFtZSkgbGlzdGVuZXIuZXhpdFRhZ05hbWUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFRhZ05hbWUpIHJldHVybiB2aXNpdG9yLnZpc2l0VGFnTmFtZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVGFnSWRlbnRpZmllckNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBwcm9wZXJ0eVRhZ0lkZW50aWZpZXIoKTogUHJvcGVydHlUYWdJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUHJvcGVydHlUYWdJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIG9wdGlvbmFsVGFnSWRlbnRpZmllcigpOiBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90YWdJZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJUYWdJZGVudGlmaWVyKSBsaXN0ZW5lci5lbnRlclRhZ0lkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRUYWdJZGVudGlmaWVyKSBsaXN0ZW5lci5leGl0VGFnSWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VGFnSWRlbnRpZmllcikgcmV0dXJuIHZpc2l0b3IudmlzaXRUYWdJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVRhZ0lkZW50aWZpZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgb3B0aW9uYWxUYWdJZGVudGlmaWVyKCk6IE9wdGlvbmFsVGFnSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsVGFnSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBQRVJJT0QoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBQRVJJT0QoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgUEVSSU9EKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QRVJJT0QsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgb3B0aW9uYWxUYWdPcklkZW50aWZpZXIoKTogT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0W107XG5cdHB1YmxpYyBvcHRpb25hbFRhZ09ySWRlbnRpZmllcihpOiBudW1iZXIpOiBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQ7XG5cdHB1YmxpYyBvcHRpb25hbFRhZ09ySWRlbnRpZmllcihpPzogbnVtYmVyKTogT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0IHwgT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wcm9wZXJ0eVRhZ0lkZW50aWZpZXI7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclByb3BlcnR5VGFnSWRlbnRpZmllcikgbGlzdGVuZXIuZW50ZXJQcm9wZXJ0eVRhZ0lkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRQcm9wZXJ0eVRhZ0lkZW50aWZpZXIpIGxpc3RlbmVyLmV4aXRQcm9wZXJ0eVRhZ0lkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFByb3BlcnR5VGFnSWRlbnRpZmllcikgcmV0dXJuIHZpc2l0b3IudmlzaXRQcm9wZXJ0eVRhZ0lkZW50aWZpZXIodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9wdGlvbmFsVGFnSWRlbnRpZmllckNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBvcHRpb25hbElkZW50aWZpZXIoKTogT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29wdGlvbmFsVGFnSWRlbnRpZmllcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT3B0aW9uYWxUYWdJZGVudGlmaWVyKSBsaXN0ZW5lci5lbnRlck9wdGlvbmFsVGFnSWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9wdGlvbmFsVGFnSWRlbnRpZmllcikgbGlzdGVuZXIuZXhpdE9wdGlvbmFsVGFnSWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T3B0aW9uYWxUYWdJZGVudGlmaWVyKSByZXR1cm4gdmlzaXRvci52aXNpdE9wdGlvbmFsVGFnSWRlbnRpZmllcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgb3B0aW9uYWxUYWdJZGVudGlmaWVyKCk6IE9wdGlvbmFsVGFnSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsVGFnSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29wdGlvbmFsVGFnT3JJZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPcHRpb25hbFRhZ09ySWRlbnRpZmllcikgbGlzdGVuZXIuZW50ZXJPcHRpb25hbFRhZ09ySWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKSBsaXN0ZW5lci5leGl0T3B0aW9uYWxUYWdPcklkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKSByZXR1cm4gdmlzaXRvci52aXNpdE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIElEKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuSUQsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJJZGVudGlmaWVyKSBsaXN0ZW5lci5lbnRlcklkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRJZGVudGlmaWVyKSBsaXN0ZW5lci5leGl0SWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0SWRlbnRpZmllcikgcmV0dXJuIHZpc2l0b3IudmlzaXRJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBRVUVTVElPTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlFVRVNUSU9OLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb3B0aW9uYWxJZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPcHRpb25hbElkZW50aWZpZXIpIGxpc3RlbmVyLmVudGVyT3B0aW9uYWxJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T3B0aW9uYWxJZGVudGlmaWVyKSBsaXN0ZW5lci5leGl0T3B0aW9uYWxJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPcHRpb25hbElkZW50aWZpZXIpIHJldHVybiB2aXNpdG9yLnZpc2l0T3B0aW9uYWxJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHRbXTtcblx0cHVibGljIHR5cGUoaTogbnVtYmVyKTogVHlwZUNvbnRleHQ7XG5cdHB1YmxpYyB0eXBlKGk/OiBudW1iZXIpOiBUeXBlQ29udGV4dCB8IFR5cGVDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhUeXBlQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIFR5cGVDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIFBJUEUoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QSVBFLCAwKTsgfVxuXHRwdWJsaWMgQU1QKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQU1QLCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBsYW1iZGFUeXBlKCk6IExhbWJkYVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBMYW1iZGFUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHR1cGxlVHlwZSgpOiBUdXBsZVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBUdXBsZVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgcHJpbWFyeVR5cGUoKTogUHJpbWFyeVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQcmltYXJ5VHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBwYXJlbnRoZXNpemVkVHlwZSgpOiBQYXJlbnRoZXNpemVkVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHVuYXJ5VHlwZSgpOiBVbmFyeVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBVbmFyeVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgb2JqZWN0VHlwZSgpOiBPYmplY3RUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT2JqZWN0VHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBhcnJheVR5cGUoKTogQXJyYXlUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgQXJyYXlUeXBlQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3R5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclR5cGUpIGxpc3RlbmVyLmVudGVyVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFR5cGUpIGxpc3RlbmVyLmV4aXRUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdFR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIExhbWJkYVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgUEFSRU5fT1BFTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4sIDApOyB9XG5cdHB1YmxpYyBQQVJFTl9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBBUkVOX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgQVJST1coKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5BUlJPVywgMCk7IH1cblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBmb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSgpOiBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFFVRVNUSU9OKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04sIDApOyB9XG5cdHB1YmxpYyBwYXJhbWV0ZXIoKTogUGFyYW1ldGVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUGFyYW1ldGVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2xhbWJkYVR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckxhbWJkYVR5cGUpIGxpc3RlbmVyLmVudGVyTGFtYmRhVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdExhbWJkYVR5cGUpIGxpc3RlbmVyLmV4aXRMYW1iZGFUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRMYW1iZGFUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdExhbWJkYVR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHBhcmFtZXRlcigpOiBQYXJhbWV0ZXJDb250ZXh0W107XG5cdHB1YmxpYyBwYXJhbWV0ZXIoaTogbnVtYmVyKTogUGFyYW1ldGVyQ29udGV4dDtcblx0cHVibGljIHBhcmFtZXRlcihpPzogbnVtYmVyKTogUGFyYW1ldGVyQ29udGV4dCB8IFBhcmFtZXRlckNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKFBhcmFtZXRlckNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBQYXJhbWV0ZXJDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTU1BKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQ09NTUEoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQ09NTUEoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9mb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UpIGxpc3RlbmVyLmVudGVyRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSkgbGlzdGVuZXIuZXhpdEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgQ09MT04oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT0xPTiwgMCk7IH1cblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wYXJhbWV0ZXI7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclBhcmFtZXRlcikgbGlzdGVuZXIuZW50ZXJQYXJhbWV0ZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRQYXJhbWV0ZXIpIGxpc3RlbmVyLmV4aXRQYXJhbWV0ZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFBhcmFtZXRlcikgcmV0dXJuIHZpc2l0b3IudmlzaXRQYXJhbWV0ZXIodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFR1cGxlVHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBMRVNTVEhBTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkxFU1NUSEFOLCAwKTsgfVxuXHRwdWJsaWMgdHVwbGVUeXBlU2VxdWVuY2UoKTogVHVwbGVUeXBlU2VxdWVuY2VDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBUdXBsZVR5cGVTZXF1ZW5jZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBHUkVBVEVSVEhBTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkdSRUFURVJUSEFOLCAwKTsgfVxuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3R1cGxlVHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVHVwbGVUeXBlKSBsaXN0ZW5lci5lbnRlclR1cGxlVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFR1cGxlVHlwZSkgbGlzdGVuZXIuZXhpdFR1cGxlVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VHVwbGVUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdFR1cGxlVHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVHVwbGVUeXBlU2VxdWVuY2VDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dFtdO1xuXHRwdWJsaWMgdHlwZShpOiBudW1iZXIpOiBUeXBlQ29udGV4dDtcblx0cHVibGljIHR5cGUoaT86IG51bWJlcik6IFR5cGVDb250ZXh0IHwgVHlwZUNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKFR5cGVDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgVHlwZUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT01NQSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIENPTU1BKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIENPTU1BKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTU1BLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3R1cGxlVHlwZVNlcXVlbmNlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJUdXBsZVR5cGVTZXF1ZW5jZSkgbGlzdGVuZXIuZW50ZXJUdXBsZVR5cGVTZXF1ZW5jZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFR1cGxlVHlwZVNlcXVlbmNlKSBsaXN0ZW5lci5leGl0VHVwbGVUeXBlU2VxdWVuY2UodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFR1cGxlVHlwZVNlcXVlbmNlKSByZXR1cm4gdmlzaXRvci52aXNpdFR1cGxlVHlwZVNlcXVlbmNlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBQcmltYXJ5VHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBvcHRpb25hbElkZW50aWZpZXIoKTogT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHByb3BlcnR5SWRlbnRpZmllcigpOiBQcm9wZXJ0eUlkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQcm9wZXJ0eUlkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgaWRlbnRpZmllck9yS2V5d29yZCgpOiBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllck9yS2V5d29yZENvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wcmltYXJ5VHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyUHJpbWFyeVR5cGUpIGxpc3RlbmVyLmVudGVyUHJpbWFyeVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRQcmltYXJ5VHlwZSkgbGlzdGVuZXIuZXhpdFByaW1hcnlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRQcmltYXJ5VHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRQcmltYXJ5VHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllck9yS2V5d29yZENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGtleXdvcmQoKTogS2V5d29yZENvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEtleXdvcmRDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfaWRlbnRpZmllck9yS2V5d29yZDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVySWRlbnRpZmllck9yS2V5d29yZCkgbGlzdGVuZXIuZW50ZXJJZGVudGlmaWVyT3JLZXl3b3JkKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0SWRlbnRpZmllck9yS2V5d29yZCkgbGlzdGVuZXIuZXhpdElkZW50aWZpZXJPcktleXdvcmQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdElkZW50aWZpZXJPcktleXdvcmQpIHJldHVybiB2aXNpdG9yLnZpc2l0SWRlbnRpZmllck9yS2V5d29yZCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgS2V5d29yZENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBOdWxsTGl0ZXJhbCgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfa2V5d29yZDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyS2V5d29yZCkgbGlzdGVuZXIuZW50ZXJLZXl3b3JkKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0S2V5d29yZCkgbGlzdGVuZXIuZXhpdEtleXdvcmQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEtleXdvcmQpIHJldHVybiB2aXNpdG9yLnZpc2l0S2V5d29yZCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUGFyZW50aGVzaXplZFR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgUEFSRU5fT1BFTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4sIDApOyB9XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFBBUkVOX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3BhcmVudGhlc2l6ZWRUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJQYXJlbnRoZXNpemVkVHlwZSkgbGlzdGVuZXIuZW50ZXJQYXJlbnRoZXNpemVkVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFBhcmVudGhlc2l6ZWRUeXBlKSBsaXN0ZW5lci5leGl0UGFyZW50aGVzaXplZFR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFBhcmVudGhlc2l6ZWRUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdFBhcmVudGhlc2l6ZWRUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBVbmFyeVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgcHJpbWFyeVR5cGUoKTogUHJpbWFyeVR5cGVDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBQcmltYXJ5VHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBBTVAoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5BTVAsIDApOyB9XG5cdHB1YmxpYyBTVEFSKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1RBUiwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3VuYXJ5VHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVW5hcnlUeXBlKSBsaXN0ZW5lci5lbnRlclVuYXJ5VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFVuYXJ5VHlwZSkgbGlzdGVuZXIuZXhpdFVuYXJ5VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VW5hcnlUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdFVuYXJ5VHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT2JqZWN0VHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBCUkFDRV9PUEVOKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTiwgMCk7IH1cblx0cHVibGljIEJSQUNFX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIG9iamVjdFBhaXJTZXF1ZW5jZVR5cGUoKTogT2JqZWN0UGFpclNlcXVlbmNlVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9iamVjdFBhaXJTZXF1ZW5jZVR5cGVDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0VHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT2JqZWN0VHlwZSkgbGlzdGVuZXIuZW50ZXJPYmplY3RUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T2JqZWN0VHlwZSkgbGlzdGVuZXIuZXhpdE9iamVjdFR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9iamVjdFR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0T2JqZWN0VHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT2JqZWN0UGFpclNlcXVlbmNlVHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBvYmplY3RQYWlyVHlwZSgpOiBPYmplY3RQYWlyVHlwZUNvbnRleHRbXTtcblx0cHVibGljIG9iamVjdFBhaXJUeXBlKGk6IG51bWJlcik6IE9iamVjdFBhaXJUeXBlQ29udGV4dDtcblx0cHVibGljIG9iamVjdFBhaXJUeXBlKGk/OiBudW1iZXIpOiBPYmplY3RQYWlyVHlwZUNvbnRleHQgfCBPYmplY3RQYWlyVHlwZUNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKE9iamVjdFBhaXJUeXBlQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIE9iamVjdFBhaXJUeXBlQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTU1BKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQ09NTUEoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQ09NTUEoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0UGFpclNlcXVlbmNlVHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT2JqZWN0UGFpclNlcXVlbmNlVHlwZSkgbGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyU2VxdWVuY2VUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T2JqZWN0UGFpclNlcXVlbmNlVHlwZSkgbGlzdGVuZXIuZXhpdE9iamVjdFBhaXJTZXF1ZW5jZVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9iamVjdFBhaXJTZXF1ZW5jZVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0T2JqZWN0UGFpclNlcXVlbmNlVHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT2JqZWN0UGFpclR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dFtdO1xuXHRwdWJsaWMgdHlwZShpOiBudW1iZXIpOiBUeXBlQ29udGV4dDtcblx0cHVibGljIHR5cGUoaT86IG51bWJlcik6IFR5cGVDb250ZXh0IHwgVHlwZUNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKFR5cGVDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgVHlwZUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09MT04oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT0xPTiwgMCk7IH1cblx0cHVibGljIFFVRVNUSU9OKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04sIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdFBhaXJUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyVHlwZSkgbGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9iamVjdFBhaXJUeXBlKSBsaXN0ZW5lci5leGl0T2JqZWN0UGFpclR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9iamVjdFBhaXJUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdE9iamVjdFBhaXJUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBcnJheVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgQlJBQ0tFVF9PUEVOKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQlJBQ0tFVF9PUEVOKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIEJSQUNLRVRfT1BFTihpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfT1BFTik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9PUEVOLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIEJSQUNLRVRfQ0xPU0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBCUkFDS0VUX0NMT1NFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIEJSQUNLRVRfQ0xPU0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX0NMT1NFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX0NMT1NFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dFtdO1xuXHRwdWJsaWMgdHlwZShpOiBudW1iZXIpOiBUeXBlQ29udGV4dDtcblx0cHVibGljIHR5cGUoaT86IG51bWJlcik6IFR5cGVDb250ZXh0IHwgVHlwZUNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKFR5cGVDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgVHlwZUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09NTUEoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBDT01NQShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBDT01NQShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT01NQSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBub3RBcnJheVR5cGUoKTogTm90QXJyYXlUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgTm90QXJyYXlUeXBlQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2FycmF5VHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyQXJyYXlUeXBlKSBsaXN0ZW5lci5lbnRlckFycmF5VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEFycmF5VHlwZSkgbGlzdGVuZXIuZXhpdEFycmF5VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0QXJyYXlUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdEFycmF5VHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTm90QXJyYXlUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIG5vdEFycmF5VHlwZSgpOiBOb3RBcnJheVR5cGVDb250ZXh0W107XG5cdHB1YmxpYyBub3RBcnJheVR5cGUoaTogbnVtYmVyKTogTm90QXJyYXlUeXBlQ29udGV4dDtcblx0cHVibGljIG5vdEFycmF5VHlwZShpPzogbnVtYmVyKTogTm90QXJyYXlUeXBlQ29udGV4dCB8IE5vdEFycmF5VHlwZUNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKE5vdEFycmF5VHlwZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBOb3RBcnJheVR5cGVDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIFBJUEUoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QSVBFLCAwKTsgfVxuXHRwdWJsaWMgQU1QKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQU1QLCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBsYW1iZGFUeXBlKCk6IExhbWJkYVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBMYW1iZGFUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHR1cGxlVHlwZSgpOiBUdXBsZVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBUdXBsZVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgcHJpbWFyeVR5cGUoKTogUHJpbWFyeVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQcmltYXJ5VHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBwYXJlbnRoZXNpemVkVHlwZSgpOiBQYXJlbnRoZXNpemVkVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHVuYXJ5VHlwZSgpOiBVbmFyeVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBVbmFyeVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgb2JqZWN0VHlwZSgpOiBPYmplY3RUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT2JqZWN0VHlwZUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9ub3RBcnJheVR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck5vdEFycmF5VHlwZSkgbGlzdGVuZXIuZW50ZXJOb3RBcnJheVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXROb3RBcnJheVR5cGUpIGxpc3RlbmVyLmV4aXROb3RBcnJheVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE5vdEFycmF5VHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXROb3RBcnJheVR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5SWRlbnRpZmllckNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFBFUklPRCgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFBFUklPRChpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBQRVJJT0QoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5QRVJJT0QpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBFUklPRCwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBvcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIoKTogT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyQ29udGV4dFtdO1xuXHRwdWJsaWMgb3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKGk6IG51bWJlcik6IE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllckNvbnRleHQ7XG5cdHB1YmxpYyBvcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIoaT86IG51bWJlcik6IE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllckNvbnRleHQgfCBPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXJDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXJDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBvcHRpb25hbElkZW50aWZpZXIoKTogT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3Byb3BlcnR5SWRlbnRpZmllcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyUHJvcGVydHlJZGVudGlmaWVyKSBsaXN0ZW5lci5lbnRlclByb3BlcnR5SWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFByb3BlcnR5SWRlbnRpZmllcikgbGlzdGVuZXIuZXhpdFByb3BlcnR5SWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0UHJvcGVydHlJZGVudGlmaWVyKSByZXR1cm4gdmlzaXRvci52aXNpdFByb3BlcnR5SWRlbnRpZmllcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgb3B0aW9uYWxJZGVudGlmaWVyKCk6IE9wdGlvbmFsSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXI7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcikgbGlzdGVuZXIuZW50ZXJPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIpIGxpc3RlbmVyLmV4aXRPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcikgcmV0dXJuIHZpc2l0b3IudmlzaXRPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgdW5hcnlFeHByZXNzaW9uKCk6IFVuYXJ5RXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFVuYXJ5RXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBleHByZXNzaW9uKCk6IEV4cHJlc3Npb25Db250ZXh0W107XG5cdHB1YmxpYyBleHByZXNzaW9uKGk6IG51bWJlcik6IEV4cHJlc3Npb25Db250ZXh0O1xuXHRwdWJsaWMgZXhwcmVzc2lvbihpPzogbnVtYmVyKTogRXhwcmVzc2lvbkNvbnRleHQgfCBFeHByZXNzaW9uQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoRXhwcmVzc2lvbkNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBTVEFSKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1RBUiwgMCk7IH1cblx0cHVibGljIEZPUldBUkRfU0xBU0goKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNILCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBQTFVTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUExVUywgMCk7IH1cblx0cHVibGljIE1JTlVTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTUlOVVMsIDApOyB9XG5cdHB1YmxpYyBhcnJheUV4cHJlc3Npb24oKTogQXJyYXlFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgQXJyYXlFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIG9iamVjdEV4cHJlc3Npb24oKTogT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9iamVjdEV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgbGFtYmRhRXhwcmVzc2lvbigpOiBMYW1iZGFFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgTGFtYmRhRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBsaXRlcmFsRXhwcmVzc2lvbigpOiBMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKCk6IFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUGFyZW50aGVzaXplZEV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZXhwcmVzc2lvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0RXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdEV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0RXhwcmVzc2lvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVW5hcnlFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGV4cHJlc3Npb24oKTogRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIEV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgUExVUygpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBMVVMsIDApOyB9XG5cdHB1YmxpYyBNSU5VUygpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk1JTlVTLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdW5hcnlFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJVbmFyeUV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyVW5hcnlFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0VW5hcnlFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0VW5hcnlFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRVbmFyeUV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0VW5hcnlFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBcnJheUV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgQlJBQ0tFVF9PUEVOKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0tFVF9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIGV4cHJlc3Npb24oKTogRXhwcmVzc2lvbkNvbnRleHRbXTtcblx0cHVibGljIGV4cHJlc3Npb24oaTogbnVtYmVyKTogRXhwcmVzc2lvbkNvbnRleHQ7XG5cdHB1YmxpYyBleHByZXNzaW9uKGk/OiBudW1iZXIpOiBFeHByZXNzaW9uQ29udGV4dCB8IEV4cHJlc3Npb25Db250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIEV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTU1BKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQ09NTUEoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQ09NTUEoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYXJyYXlFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJBcnJheUV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyQXJyYXlFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0QXJyYXlFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0QXJyYXlFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRBcnJheUV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0QXJyYXlFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEJSQUNFX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgb2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbigpOiBPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPYmplY3RFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlck9iamVjdEV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPYmplY3RFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0T2JqZWN0RXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T2JqZWN0RXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRPYmplY3RFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIG9iamVjdFBhaXJFeHByZXNzaW9uKCk6IE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dFtdO1xuXHRwdWJsaWMgb2JqZWN0UGFpckV4cHJlc3Npb24oaTogbnVtYmVyKTogT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0O1xuXHRwdWJsaWMgb2JqZWN0UGFpckV4cHJlc3Npb24oaT86IG51bWJlcik6IE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCB8IE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTU1BKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQ09NTUEoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQ09NTUEoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0T2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBsaXRlcmFsRXhwcmVzc2lvbigpOiBMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHRbXTtcblx0cHVibGljIGxpdGVyYWxFeHByZXNzaW9uKGk6IG51bWJlcik6IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dDtcblx0cHVibGljIGxpdGVyYWxFeHByZXNzaW9uKGk/OiBudW1iZXIpOiBMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHQgfCBMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT0xPTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTE9OLCAwKTsgfVxuXHRwdWJsaWMgb2JqZWN0RXhwcmVzc2lvbigpOiBPYmplY3RFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdFBhaXJFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyRXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9iamVjdFBhaXJFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0T2JqZWN0UGFpckV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9iamVjdFBhaXJFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdE9iamVjdFBhaXJFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBMYW1iZGFFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFBBUkVOX09QRU4oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgUEFSRU5fQ0xPU0UoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QQVJFTl9DTE9TRSwgMCk7IH1cblx0cHVibGljIEFSUk9XKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQVJST1csIDApOyB9XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UoKTogRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBRVUVTVElPTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlFVRVNUSU9OLCAwKTsgfVxuXHRwdWJsaWMgcGFyYW1ldGVyKCk6IFBhcmFtZXRlckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFBhcmFtZXRlckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9sYW1iZGFFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJMYW1iZGFFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlckxhbWJkYUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRMYW1iZGFFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0TGFtYmRhRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0TGFtYmRhRXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRMYW1iZGFFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBOdW1iZXJMaXRlcmFsKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTnVtYmVyTGl0ZXJhbCwgMCk7IH1cblx0cHVibGljIEJvb2xlYW5MaXRlcmFsKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQm9vbGVhbkxpdGVyYWwsIDApOyB9XG5cdHB1YmxpYyBDaGFyYWN0ZXJMaXRlcmFsKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbCwgMCk7IH1cblx0cHVibGljIFN0cmluZ0xpdGVyYWwoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsLCAwKTsgfVxuXHRwdWJsaWMgTnVsbExpdGVyYWwoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbCwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2xpdGVyYWxFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJMaXRlcmFsRXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJMaXRlcmFsRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdExpdGVyYWxFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0TGl0ZXJhbEV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdExpdGVyYWxFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdExpdGVyYWxFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBQQVJFTl9PUEVOKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTiwgMCk7IH1cblx0cHVibGljIGV4cHJlc3Npb24oKTogRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIEV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgUEFSRU5fQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QQVJFTl9DTE9TRSwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfcGFyZW50aGVzaXplZEV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlclBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0UGFyZW50aGVzaXplZEV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGRlc2NyaXB0aW9uTGluZSgpOiBEZXNjcmlwdGlvbkxpbmVDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBEZXNjcmlwdGlvbkxpbmVDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZGVzY3JpcHRpb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uKSBsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0RGVzY3JpcHRpb24pIGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb24pIHJldHVybiB2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uTGluZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVTdGFydCgpOiBEZXNjcmlwdGlvbkxpbmVTdGFydENvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIERlc2NyaXB0aW9uTGluZVN0YXJ0Q29udGV4dCk7XG5cdH1cblx0cHVibGljIGRlc2NyaXB0aW9uTGluZUVsZW1lbnQoKTogRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHRbXTtcblx0cHVibGljIGRlc2NyaXB0aW9uTGluZUVsZW1lbnQoaTogbnVtYmVyKTogRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQ7XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVFbGVtZW50KGk/OiBudW1iZXIpOiBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dCB8IERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIGlubGluZVRhZygpOiBJbmxpbmVUYWdDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJbmxpbmVUYWdDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbkxpbmUpIGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lKSBsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmUpIHJldHVybiB2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25MaW5lKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbkxpbmVTdGFydENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIGRlc2NyaXB0aW9uVGV4dCgpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0W107XG5cdHB1YmxpYyBkZXNjcmlwdGlvblRleHQoaTogbnVtYmVyKTogRGVzY3JpcHRpb25UZXh0Q29udGV4dDtcblx0cHVibGljIGRlc2NyaXB0aW9uVGV4dChpPzogbnVtYmVyKTogRGVzY3JpcHRpb25UZXh0Q29udGV4dCB8IERlc2NyaXB0aW9uVGV4dENvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKERlc2NyaXB0aW9uVGV4dENvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBEZXNjcmlwdGlvblRleHRDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIEFUKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQVQoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQVQoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5BVCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQVQsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lU3RhcnQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uTGluZVN0YXJ0KSBsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uTGluZVN0YXJ0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lU3RhcnQpIGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbkxpbmVTdGFydCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25MaW5lU3RhcnQpIHJldHVybiB2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25MaW5lU3RhcnQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uVGV4dENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBURVhUX0NPTlRFTlQoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQsIDApOyB9XG5cdHB1YmxpYyBJRCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLklELCAwKTsgfVxuXHRwdWJsaWMgRk9SV0FSRF9TTEFTSCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0gsIDApOyB9XG5cdHB1YmxpYyBCUkFDRV9PUEVOKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTiwgMCk7IH1cblx0cHVibGljIEJSQUNFX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBDT0xPTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTE9OLCAwKTsgfVxuXHRwdWJsaWMgTUlOVVMoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5NSU5VUywgMCk7IH1cblx0cHVibGljIFBFUklPRCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBFUklPRCwgMCk7IH1cblx0cHVibGljIGxpdGVyYWxFeHByZXNzaW9uKCk6IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZGVzY3JpcHRpb25UZXh0OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvblRleHQpIGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25UZXh0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25UZXh0KSBsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25UZXh0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXREZXNjcmlwdGlvblRleHQpIHJldHVybiB2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25UZXh0KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlubGluZVRhZygpOiBJbmxpbmVUYWdDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJbmxpbmVUYWdDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lVGV4dCgpOiBEZXNjcmlwdGlvbkxpbmVUZXh0Q29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgRGVzY3JpcHRpb25MaW5lVGV4dENvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbkxpbmVFbGVtZW50OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbkxpbmVFbGVtZW50KSBsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uTGluZUVsZW1lbnQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbkxpbmVFbGVtZW50KSBsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lRWxlbWVudCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25MaW5lRWxlbWVudCkgcmV0dXJuIHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmVFbGVtZW50KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbkxpbmVUZXh0Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGRlc2NyaXB0aW9uVGV4dCgpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0W107XG5cdHB1YmxpYyBkZXNjcmlwdGlvblRleHQoaTogbnVtYmVyKTogRGVzY3JpcHRpb25UZXh0Q29udGV4dDtcblx0cHVibGljIGRlc2NyaXB0aW9uVGV4dChpPzogbnVtYmVyKTogRGVzY3JpcHRpb25UZXh0Q29udGV4dCB8IERlc2NyaXB0aW9uVGV4dENvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKERlc2NyaXB0aW9uVGV4dENvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBEZXNjcmlwdGlvblRleHRDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQVQoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBBVChpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBBVChpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkFUKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5BVCwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbkxpbmVUZXh0OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbkxpbmVUZXh0KSBsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uTGluZVRleHQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbkxpbmVUZXh0KSBsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lVGV4dCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25MaW5lVGV4dCkgcmV0dXJuIHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmVUZXh0KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBJbmxpbmVUYWdDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgSU5MSU5FX1RBR19TVEFSVCgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLklOTElORV9UQUdfU1RBUlQsIDApOyB9XG5cdHB1YmxpYyBpbmxpbmVUYWdOYW1lKCk6IElubGluZVRhZ05hbWVDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBJbmxpbmVUYWdOYW1lQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIDApOyB9XG5cdHB1YmxpYyBCUkFDRV9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgaW5saW5lVGFnQm9keSgpOiBJbmxpbmVUYWdCb2R5Q29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSW5saW5lVGFnQm9keUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pbmxpbmVUYWc7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlcklubGluZVRhZykgbGlzdGVuZXIuZW50ZXJJbmxpbmVUYWcodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRJbmxpbmVUYWcpIGxpc3RlbmVyLmV4aXRJbmxpbmVUYWcodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdElubGluZVRhZykgcmV0dXJuIHZpc2l0b3IudmlzaXRJbmxpbmVUYWcodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIElubGluZVRhZ05hbWVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pbmxpbmVUYWdOYW1lOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJJbmxpbmVUYWdOYW1lKSBsaXN0ZW5lci5lbnRlcklubGluZVRhZ05hbWUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRJbmxpbmVUYWdOYW1lKSBsaXN0ZW5lci5leGl0SW5saW5lVGFnTmFtZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0SW5saW5lVGFnTmFtZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRJbmxpbmVUYWdOYW1lKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBJbmxpbmVUYWdCb2R5Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGJyYWNlQm9keSgpOiBCcmFjZUJvZHlDb250ZXh0W107XG5cdHB1YmxpYyBicmFjZUJvZHkoaTogbnVtYmVyKTogQnJhY2VCb2R5Q29udGV4dDtcblx0cHVibGljIGJyYWNlQm9keShpPzogbnVtYmVyKTogQnJhY2VCb2R5Q29udGV4dCB8IEJyYWNlQm9keUNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKEJyYWNlQm9keUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBCcmFjZUJvZHlDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2lubGluZVRhZ0JvZHk7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlcklubGluZVRhZ0JvZHkpIGxpc3RlbmVyLmVudGVySW5saW5lVGFnQm9keSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdElubGluZVRhZ0JvZHkpIGxpc3RlbmVyLmV4aXRJbmxpbmVUYWdCb2R5KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRJbmxpbmVUYWdCb2R5KSByZXR1cm4gdmlzaXRvci52aXNpdElubGluZVRhZ0JvZHkodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEJyYWNlRXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBCUkFDRV9PUEVOKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTiwgMCk7IH1cblx0cHVibGljIEJSQUNFX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBicmFjZUJvZHkoKTogQnJhY2VCb2R5Q29udGV4dFtdO1xuXHRwdWJsaWMgYnJhY2VCb2R5KGk6IG51bWJlcik6IEJyYWNlQm9keUNvbnRleHQ7XG5cdHB1YmxpYyBicmFjZUJvZHkoaT86IG51bWJlcik6IEJyYWNlQm9keUNvbnRleHQgfCBCcmFjZUJvZHlDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhCcmFjZUJvZHlDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgQnJhY2VCb2R5Q29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9icmFjZUV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckJyYWNlRXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJCcmFjZUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRCcmFjZUV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRCcmFjZUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEJyYWNlRXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRCcmFjZUV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEJyYWNlQm9keUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBicmFjZUV4cHJlc3Npb24oKTogQnJhY2VFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgQnJhY2VFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGJyYWNlVGV4dCgpOiBCcmFjZVRleHRDb250ZXh0W107XG5cdHB1YmxpYyBicmFjZVRleHQoaTogbnVtYmVyKTogQnJhY2VUZXh0Q29udGV4dDtcblx0cHVibGljIGJyYWNlVGV4dChpPzogbnVtYmVyKTogQnJhY2VUZXh0Q29udGV4dCB8IEJyYWNlVGV4dENvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKEJyYWNlVGV4dENvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBCcmFjZVRleHRDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2JyYWNlQm9keTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyQnJhY2VCb2R5KSBsaXN0ZW5lci5lbnRlckJyYWNlQm9keSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEJyYWNlQm9keSkgbGlzdGVuZXIuZXhpdEJyYWNlQm9keSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0QnJhY2VCb2R5KSByZXR1cm4gdmlzaXRvci52aXNpdEJyYWNlQm9keSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQnJhY2VUZXh0Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFRFWFRfQ09OVEVOVCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVCwgMCk7IH1cblx0cHVibGljIElEKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuSUQsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCAwKTsgfVxuXHRwdWJsaWMgRk9SV0FSRF9TTEFTSCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0gsIDApOyB9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgMCk7IH1cblx0cHVibGljIFBFUklPRCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBFUklPRCwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2JyYWNlVGV4dDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyQnJhY2VUZXh0KSBsaXN0ZW5lci5lbnRlckJyYWNlVGV4dCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEJyYWNlVGV4dCkgbGlzdGVuZXIuZXhpdEJyYWNlVGV4dCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0QnJhY2VUZXh0KSByZXR1cm4gdmlzaXRvci52aXNpdEJyYWNlVGV4dCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG4iXX0=