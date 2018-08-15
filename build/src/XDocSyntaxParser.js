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
            let _alt;
            this.state = 551;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 92, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 471;
                        this.primaryType();
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
                        _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
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
                                        this.tupleTypeSequence();
                                    }
                                }
                            }
                            this.state = 484;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 485;
                        this.primaryType();
                        this.state = 487;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 486;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 489;
                        this.match(XDocSyntaxParser.EXTENDS);
                        this.state = 491;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 490;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 493;
                        this.primaryType();
                        this.state = 495;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                            case 1:
                                {
                                    this.state = 494;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 504;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 497;
                                        this.match(XDocSyntaxParser.COMMA);
                                        this.state = 499;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocSyntaxParser.SPACE) {
                                            {
                                                this.state = 498;
                                                this.match(XDocSyntaxParser.SPACE);
                                            }
                                        }
                                        this.state = 501;
                                        this.tupleTypeSequence();
                                    }
                                }
                            }
                            this.state = 506;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 507;
                        this.primaryType();
                        this.state = 509;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 508;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 511;
                        this.match(XDocSyntaxParser.AMP);
                        this.state = 513;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 512;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 515;
                        this.primaryType();
                        this.state = 517;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                            case 1:
                                {
                                    this.state = 516;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 526;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 519;
                                        this.match(XDocSyntaxParser.COMMA);
                                        this.state = 521;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocSyntaxParser.SPACE) {
                                            {
                                                this.state = 520;
                                                this.match(XDocSyntaxParser.SPACE);
                                            }
                                        }
                                        this.state = 523;
                                        this.tupleTypeSequence();
                                    }
                                }
                            }
                            this.state = 528;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 529;
                        this.primaryType();
                        this.state = 531;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 530;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 533;
                        this.match(XDocSyntaxParser.PIPE);
                        this.state = 535;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 534;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 537;
                        this.primaryType();
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
                        this.state = 548;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 541;
                                        this.match(XDocSyntaxParser.COMMA);
                                        this.state = 543;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocSyntaxParser.SPACE) {
                                            {
                                                this.state = 542;
                                                this.match(XDocSyntaxParser.SPACE);
                                            }
                                        }
                                        this.state = 545;
                                        this.tupleTypeSequence();
                                    }
                                }
                            }
                            this.state = 550;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                        }
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
    primaryType() {
        let _localctx = new PrimaryTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, XDocSyntaxParser.RULE_primaryType);
        try {
            this.state = 556;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 553;
                        this.optionalIdentifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 554;
                        this.propertyIdentifier();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 555;
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
            this.state = 560;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 558;
                        this.identifier();
                    }
                    break;
                case XDocSyntaxParser.NullLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 559;
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
                this.state = 562;
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
                this.state = 564;
                this.match(XDocSyntaxParser.PAREN_OPEN);
                this.state = 566;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 565;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 568;
                this.type(0);
                this.state = 570;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 569;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 572;
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
                this.state = 574;
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
                this.state = 575;
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
                this.state = 577;
                this.match(XDocSyntaxParser.BRACE_OPEN);
                this.state = 579;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                    case 1:
                        {
                            this.state = 578;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 582;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                    case 1:
                        {
                            this.state = 581;
                            this.match(XDocSyntaxParser.NEWLINE);
                        }
                        break;
                }
                this.state = 585;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                    case 1:
                        {
                            this.state = 584;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 588;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (XDocSyntaxParser.NullLiteral - 7)) | (1 << (XDocSyntaxParser.ID - 7)) | (1 << (XDocSyntaxParser.STAR - 7)) | (1 << (XDocSyntaxParser.AMP - 7)) | (1 << (XDocSyntaxParser.BRACE_OPEN - 7)) | (1 << (XDocSyntaxParser.PAREN_OPEN - 7)) | (1 << (XDocSyntaxParser.BRACKET_OPEN - 7)) | (1 << (XDocSyntaxParser.LESSTHAN - 7)))) !== 0)) {
                    {
                        this.state = 587;
                        this.objectPairSequenceType();
                    }
                }
                this.state = 591;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                    case 1:
                        {
                            this.state = 590;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 594;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.NEWLINE) {
                    {
                        this.state = 593;
                        this.match(XDocSyntaxParser.NEWLINE);
                    }
                }
                this.state = 597;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 596;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 599;
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
                this.state = 601;
                this.objectPairType();
                this.state = 603;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
                    case 1:
                        {
                            this.state = 602;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 618;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === XDocSyntaxParser.COMMA) {
                    {
                        {
                            this.state = 605;
                            this.match(XDocSyntaxParser.COMMA);
                            this.state = 607;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 606;
                                        this.match(XDocSyntaxParser.SPACE);
                                    }
                                    break;
                            }
                            this.state = 610;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocSyntaxParser.NEWLINE) {
                                {
                                    this.state = 609;
                                    this.match(XDocSyntaxParser.NEWLINE);
                                }
                            }
                            this.state = 613;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocSyntaxParser.SPACE) {
                                {
                                    this.state = 612;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                            }
                            this.state = 615;
                            this.objectPairType();
                        }
                    }
                    this.state = 620;
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
                this.state = 621;
                this.type(0);
                this.state = 623;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.QUESTION) {
                    {
                        this.state = 622;
                        this.match(XDocSyntaxParser.QUESTION);
                    }
                }
                this.state = 626;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 625;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 628;
                this.match(XDocSyntaxParser.COLON);
                this.state = 630;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 629;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 632;
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
            this.state = 680;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.BRACKET_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 634;
                        this.match(XDocSyntaxParser.BRACKET_OPEN);
                        this.state = 636;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
                            case 1:
                                {
                                    this.state = 635;
                                    this.match(XDocSyntaxParser.NEWLINE);
                                }
                                break;
                        }
                        this.state = 639;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                            case 1:
                                {
                                    this.state = 638;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 642;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                            case 1:
                                {
                                    this.state = 641;
                                    this.match(XDocSyntaxParser.NEWLINE);
                                }
                                break;
                        }
                        this.state = 645;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (XDocSyntaxParser.NullLiteral - 7)) | (1 << (XDocSyntaxParser.ID - 7)) | (1 << (XDocSyntaxParser.STAR - 7)) | (1 << (XDocSyntaxParser.AMP - 7)) | (1 << (XDocSyntaxParser.BRACE_OPEN - 7)) | (1 << (XDocSyntaxParser.PAREN_OPEN - 7)) | (1 << (XDocSyntaxParser.BRACKET_OPEN - 7)) | (1 << (XDocSyntaxParser.LESSTHAN - 7)))) !== 0)) {
                            {
                                this.state = 644;
                                this.type(0);
                            }
                        }
                        this.state = 660;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === XDocSyntaxParser.COMMA) {
                            {
                                {
                                    this.state = 647;
                                    this.match(XDocSyntaxParser.COMMA);
                                    this.state = 649;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 648;
                                                this.match(XDocSyntaxParser.NEWLINE);
                                            }
                                            break;
                                    }
                                    this.state = 652;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === XDocSyntaxParser.SPACE) {
                                        {
                                            this.state = 651;
                                            this.match(XDocSyntaxParser.SPACE);
                                        }
                                    }
                                    this.state = 655;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === XDocSyntaxParser.NEWLINE) {
                                        {
                                            this.state = 654;
                                            this.match(XDocSyntaxParser.NEWLINE);
                                        }
                                    }
                                    this.state = 657;
                                    this.type(0);
                                }
                            }
                            this.state = 662;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 664;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                            case 1:
                                {
                                    this.state = 663;
                                    this.match(XDocSyntaxParser.NEWLINE);
                                }
                                break;
                        }
                        this.state = 667;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 666;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 670;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 669;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 672;
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
                        this.state = 673;
                        this.notArrayType(0);
                        this.state = 676;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 674;
                                            this.match(XDocSyntaxParser.BRACKET_OPEN);
                                            this.state = 675;
                                            this.match(XDocSyntaxParser.BRACKET_CLOSE);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 678;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
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
                this.state = 689;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
                    case 1:
                        {
                            this.state = 683;
                            this.lambdaType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 684;
                            this.tupleType();
                        }
                        break;
                    case 3:
                        {
                            this.state = 685;
                            this.primaryType();
                        }
                        break;
                    case 4:
                        {
                            this.state = 686;
                            this.parenthesizedType();
                        }
                        break;
                    case 5:
                        {
                            this.state = 687;
                            this.unaryType();
                        }
                        break;
                    case 6:
                        {
                            this.state = 688;
                            this.objectType();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 714;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new NotArrayTypeContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, XDocSyntaxParser.RULE_notArrayType);
                                this.state = 691;
                                if (!(this.precpred(this._ctx, 7)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                this.state = 693;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 692;
                                            this.match(XDocSyntaxParser.SPACE);
                                        }
                                        break;
                                }
                                this.state = 696;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.NEWLINE) {
                                    {
                                        this.state = 695;
                                        this.match(XDocSyntaxParser.NEWLINE);
                                    }
                                }
                                this.state = 699;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.SPACE) {
                                    {
                                        this.state = 698;
                                        this.match(XDocSyntaxParser.SPACE);
                                    }
                                }
                                this.state = 701;
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
                                this.state = 703;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 702;
                                            this.match(XDocSyntaxParser.SPACE);
                                        }
                                        break;
                                }
                                this.state = 706;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.NEWLINE) {
                                    {
                                        this.state = 705;
                                        this.match(XDocSyntaxParser.NEWLINE);
                                    }
                                }
                                this.state = 709;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.SPACE) {
                                    {
                                        this.state = 708;
                                        this.match(XDocSyntaxParser.SPACE);
                                    }
                                }
                                this.state = 711;
                                this.notArrayType(8);
                            }
                        }
                    }
                    this.state = 716;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
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
            this.state = 731;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 717;
                        this.identifier();
                        this.state = 720;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 718;
                                            this.match(XDocSyntaxParser.PERIOD);
                                            this.state = 719;
                                            this.optionalIdentifierOrIdentifier();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 722;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 724;
                        this.optionalIdentifier();
                        this.state = 727;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 725;
                                            this.match(XDocSyntaxParser.PERIOD);
                                            this.state = 726;
                                            this.optionalIdentifierOrIdentifier();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 729;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
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
            this.state = 735;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 136, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 733;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 734;
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
                this.state = 744;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                    case 1:
                        {
                            this.state = 738;
                            this.unaryExpression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 739;
                            this.arrayExpression();
                        }
                        break;
                    case 3:
                        {
                            this.state = 740;
                            this.objectExpression();
                        }
                        break;
                    case 4:
                        {
                            this.state = 741;
                            this.lambdaExpression();
                        }
                        break;
                    case 5:
                        {
                            this.state = 742;
                            this.literalExpression();
                        }
                        break;
                    case 6:
                        {
                            this.state = 743;
                            this.parenthesizedExpression();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 766;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 764;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, XDocSyntaxParser.RULE_expression);
                                        this.state = 746;
                                        if (!(this.precpred(this._ctx, 7)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        this.state = 748;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocSyntaxParser.SPACE) {
                                            {
                                                this.state = 747;
                                                this.match(XDocSyntaxParser.SPACE);
                                            }
                                        }
                                        this.state = 750;
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
                                        this.state = 752;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocSyntaxParser.SPACE) {
                                            {
                                                this.state = 751;
                                                this.match(XDocSyntaxParser.SPACE);
                                            }
                                        }
                                        this.state = 754;
                                        this.expression(8);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, XDocSyntaxParser.RULE_expression);
                                        this.state = 755;
                                        if (!(this.precpred(this._ctx, 6)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        this.state = 757;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocSyntaxParser.SPACE) {
                                            {
                                                this.state = 756;
                                                this.match(XDocSyntaxParser.SPACE);
                                            }
                                        }
                                        this.state = 759;
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
                                        this.state = 761;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocSyntaxParser.SPACE) {
                                            {
                                                this.state = 760;
                                                this.match(XDocSyntaxParser.SPACE);
                                            }
                                        }
                                        this.state = 763;
                                        this.expression(7);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 768;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
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
                this.state = 769;
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
                this.state = 770;
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
                this.state = 772;
                this.match(XDocSyntaxParser.BRACKET_OPEN);
                this.state = 774;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
                    case 1:
                        {
                            this.state = 773;
                            this.match(XDocSyntaxParser.NEWLINE);
                        }
                        break;
                }
                this.state = 777;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 145, this._ctx)) {
                    case 1:
                        {
                            this.state = 776;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 780;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                    case 1:
                        {
                            this.state = 779;
                            this.match(XDocSyntaxParser.NEWLINE);
                        }
                        break;
                }
                this.state = 783;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (XDocSyntaxParser.NumberLiteral - 1)) | (1 << (XDocSyntaxParser.BooleanLiteral - 1)) | (1 << (XDocSyntaxParser.CharacterLiteral - 1)) | (1 << (XDocSyntaxParser.StringLiteral - 1)) | (1 << (XDocSyntaxParser.NullLiteral - 1)) | (1 << (XDocSyntaxParser.ID - 1)) | (1 << (XDocSyntaxParser.PLUS - 1)) | (1 << (XDocSyntaxParser.MINUS - 1)) | (1 << (XDocSyntaxParser.BRACE_OPEN - 1)) | (1 << (XDocSyntaxParser.PAREN_OPEN - 1)) | (1 << (XDocSyntaxParser.BRACKET_OPEN - 1)))) !== 0)) {
                    {
                        this.state = 782;
                        this.expression(0);
                    }
                }
                this.state = 798;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === XDocSyntaxParser.COMMA) {
                    {
                        {
                            this.state = 785;
                            this.match(XDocSyntaxParser.COMMA);
                            this.state = 787;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 786;
                                        this.match(XDocSyntaxParser.NEWLINE);
                                    }
                                    break;
                            }
                            this.state = 790;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocSyntaxParser.SPACE) {
                                {
                                    this.state = 789;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                            }
                            this.state = 793;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocSyntaxParser.NEWLINE) {
                                {
                                    this.state = 792;
                                    this.match(XDocSyntaxParser.NEWLINE);
                                }
                            }
                            this.state = 795;
                            this.expression(0);
                        }
                    }
                    this.state = 800;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 802;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 152, this._ctx)) {
                    case 1:
                        {
                            this.state = 801;
                            this.match(XDocSyntaxParser.NEWLINE);
                        }
                        break;
                }
                this.state = 805;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 804;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 808;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.NEWLINE) {
                    {
                        this.state = 807;
                        this.match(XDocSyntaxParser.NEWLINE);
                    }
                }
                this.state = 810;
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
                this.state = 812;
                this.match(XDocSyntaxParser.BRACE_OPEN);
                this.state = 814;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 155, this._ctx)) {
                    case 1:
                        {
                            this.state = 813;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 817;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
                    case 1:
                        {
                            this.state = 816;
                            this.match(XDocSyntaxParser.NEWLINE);
                        }
                        break;
                }
                this.state = 820;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
                    case 1:
                        {
                            this.state = 819;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 823;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.NumberLiteral) | (1 << XDocSyntaxParser.BooleanLiteral) | (1 << XDocSyntaxParser.CharacterLiteral) | (1 << XDocSyntaxParser.StringLiteral) | (1 << XDocSyntaxParser.NullLiteral))) !== 0)) {
                    {
                        this.state = 822;
                        this.objectPairSequenceExpression();
                    }
                }
                this.state = 826;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
                    case 1:
                        {
                            this.state = 825;
                            this.match(XDocSyntaxParser.SPACE);
                        }
                        break;
                }
                this.state = 829;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.NEWLINE) {
                    {
                        this.state = 828;
                        this.match(XDocSyntaxParser.NEWLINE);
                    }
                }
                this.state = 832;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 831;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 834;
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
                this.state = 836;
                this.objectPairExpression();
                this.state = 853;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 838;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.SPACE) {
                                    {
                                        this.state = 837;
                                        this.match(XDocSyntaxParser.SPACE);
                                    }
                                }
                                this.state = 840;
                                this.match(XDocSyntaxParser.COMMA);
                                this.state = 842;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 163, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 841;
                                            this.match(XDocSyntaxParser.SPACE);
                                        }
                                        break;
                                }
                                this.state = 845;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.NEWLINE) {
                                    {
                                        this.state = 844;
                                        this.match(XDocSyntaxParser.NEWLINE);
                                    }
                                }
                                this.state = 848;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocSyntaxParser.SPACE) {
                                    {
                                        this.state = 847;
                                        this.match(XDocSyntaxParser.SPACE);
                                    }
                                }
                                this.state = 850;
                                this.objectPairExpression();
                            }
                        }
                    }
                    this.state = 855;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
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
            this.state = 876;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 171, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 856;
                        this.literalExpression();
                        this.state = 858;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 857;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 860;
                        this.match(XDocSyntaxParser.COLON);
                        this.state = 862;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 861;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 864;
                        this.objectExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 866;
                        this.literalExpression();
                        this.state = 868;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 867;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 870;
                        this.match(XDocSyntaxParser.COLON);
                        this.state = 872;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 871;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 874;
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
            this.state = 948;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.PAREN_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 878;
                        this.match(XDocSyntaxParser.PAREN_OPEN);
                        this.state = 880;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 172, this._ctx)) {
                            case 1:
                                {
                                    this.state = 879;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 883;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 173, this._ctx)) {
                            case 1:
                                {
                                    this.state = 882;
                                    this.match(XDocSyntaxParser.NEWLINE);
                                }
                                break;
                        }
                        this.state = 886;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 174, this._ctx)) {
                            case 1:
                                {
                                    this.state = 885;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 889;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.ID) {
                            {
                                this.state = 888;
                                this.formalParameterSequence();
                            }
                        }
                        this.state = 892;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
                            case 1:
                                {
                                    this.state = 891;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 895;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 894;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 898;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 897;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 900;
                        this.match(XDocSyntaxParser.PAREN_CLOSE);
                        this.state = 902;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 179, this._ctx)) {
                            case 1:
                                {
                                    this.state = 901;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 905;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 904;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 908;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 907;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 910;
                        this.match(XDocSyntaxParser.ARROW);
                        this.state = 912;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 182, this._ctx)) {
                            case 1:
                                {
                                    this.state = 911;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 915;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 914;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 918;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 917;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 920;
                        this.type(0);
                        this.state = 922;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 185, this._ctx)) {
                            case 1:
                                {
                                    this.state = 921;
                                    this.match(XDocSyntaxParser.QUESTION);
                                }
                                break;
                        }
                    }
                    break;
                case XDocSyntaxParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 924;
                        this.parameter();
                        this.state = 926;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
                            case 1:
                                {
                                    this.state = 925;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 929;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 928;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 932;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 931;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 934;
                        this.match(XDocSyntaxParser.ARROW);
                        this.state = 936;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 189, this._ctx)) {
                            case 1:
                                {
                                    this.state = 935;
                                    this.match(XDocSyntaxParser.SPACE);
                                }
                                break;
                        }
                        this.state = 939;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.NEWLINE) {
                            {
                                this.state = 938;
                                this.match(XDocSyntaxParser.NEWLINE);
                            }
                        }
                        this.state = 942;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocSyntaxParser.SPACE) {
                            {
                                this.state = 941;
                                this.match(XDocSyntaxParser.SPACE);
                            }
                        }
                        this.state = 944;
                        this.type(0);
                        this.state = 946;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 192, this._ctx)) {
                            case 1:
                                {
                                    this.state = 945;
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
                this.state = 950;
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
                this.state = 952;
                this.match(XDocSyntaxParser.PAREN_OPEN);
                this.state = 954;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 953;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 956;
                this.expression(0);
                this.state = 958;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 957;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 960;
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
                this.state = 962;
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
            this.state = 978;
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
                        this.state = 964;
                        this.descriptionLineStart();
                        this.state = 968;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.NumberLiteral) | (1 << XDocSyntaxParser.BooleanLiteral) | (1 << XDocSyntaxParser.CharacterLiteral) | (1 << XDocSyntaxParser.StringLiteral) | (1 << XDocSyntaxParser.NullLiteral) | (1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.AT) | (1 << XDocSyntaxParser.MINUS) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.COLON) | (1 << XDocSyntaxParser.PERIOD) | (1 << XDocSyntaxParser.INLINE_TAG_START) | (1 << XDocSyntaxParser.BRACE_OPEN) | (1 << XDocSyntaxParser.BRACE_CLOSE))) !== 0)) {
                            {
                                {
                                    this.state = 965;
                                    this.descriptionLineElement();
                                }
                            }
                            this.state = 970;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case XDocSyntaxParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 971;
                        this.inlineTag();
                        this.state = 975;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.NumberLiteral) | (1 << XDocSyntaxParser.BooleanLiteral) | (1 << XDocSyntaxParser.CharacterLiteral) | (1 << XDocSyntaxParser.StringLiteral) | (1 << XDocSyntaxParser.NullLiteral) | (1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.AT) | (1 << XDocSyntaxParser.MINUS) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.COLON) | (1 << XDocSyntaxParser.PERIOD) | (1 << XDocSyntaxParser.INLINE_TAG_START) | (1 << XDocSyntaxParser.BRACE_OPEN) | (1 << XDocSyntaxParser.BRACE_CLOSE))) !== 0)) {
                            {
                                {
                                    this.state = 972;
                                    this.descriptionLineElement();
                                }
                            }
                            this.state = 977;
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
                this.state = 981;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocSyntaxParser.SPACE) {
                    {
                        this.state = 980;
                        this.match(XDocSyntaxParser.SPACE);
                    }
                }
                this.state = 984;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 983;
                                    this.descriptionText();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 986;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 993;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 991;
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
                                        this.state = 988;
                                        this.descriptionText();
                                    }
                                    break;
                                case XDocSyntaxParser.SPACE:
                                    {
                                        this.state = 989;
                                        this.match(XDocSyntaxParser.SPACE);
                                    }
                                    break;
                                case XDocSyntaxParser.AT:
                                    {
                                        this.state = 990;
                                        this.match(XDocSyntaxParser.AT);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 995;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
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
            this.state = 1005;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.TEXT_CONTENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 996;
                        this.match(XDocSyntaxParser.TEXT_CONTENT);
                    }
                    break;
                case XDocSyntaxParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 997;
                        this.match(XDocSyntaxParser.ID);
                    }
                    break;
                case XDocSyntaxParser.FORWARD_SLASH:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 998;
                        this.match(XDocSyntaxParser.FORWARD_SLASH);
                    }
                    break;
                case XDocSyntaxParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 999;
                        this.match(XDocSyntaxParser.BRACE_OPEN);
                    }
                    break;
                case XDocSyntaxParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1000;
                        this.match(XDocSyntaxParser.BRACE_CLOSE);
                    }
                    break;
                case XDocSyntaxParser.COLON:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1001;
                        this.match(XDocSyntaxParser.COLON);
                    }
                    break;
                case XDocSyntaxParser.MINUS:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1002;
                        this.match(XDocSyntaxParser.MINUS);
                    }
                    break;
                case XDocSyntaxParser.PERIOD:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1003;
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
                        this.state = 1004;
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
            this.state = 1009;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1007;
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
                        this.state = 1008;
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
                this.state = 1014;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1014;
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
                                            this.state = 1011;
                                            this.descriptionText();
                                        }
                                        break;
                                    case XDocSyntaxParser.SPACE:
                                        {
                                            this.state = 1012;
                                            this.match(XDocSyntaxParser.SPACE);
                                        }
                                        break;
                                    case XDocSyntaxParser.AT:
                                        {
                                            this.state = 1013;
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
                    this.state = 1016;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
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
                this.state = 1018;
                this.match(XDocSyntaxParser.INLINE_TAG_START);
                this.state = 1019;
                this.inlineTagName();
                this.state = 1020;
                this.match(XDocSyntaxParser.SPACE);
                this.state = 1022;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.NEWLINE) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.PERIOD) | (1 << XDocSyntaxParser.BRACE_OPEN))) !== 0)) {
                    {
                        this.state = 1021;
                        this.inlineTagBody();
                    }
                }
                this.state = 1024;
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
                this.state = 1026;
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
                this.state = 1029;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1028;
                            this.braceBody();
                        }
                    }
                    this.state = 1031;
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
                this.state = 1033;
                this.match(XDocSyntaxParser.BRACE_OPEN);
                this.state = 1037;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.NEWLINE) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.PERIOD) | (1 << XDocSyntaxParser.BRACE_OPEN))) !== 0)) {
                    {
                        {
                            this.state = 1034;
                            this.braceBody();
                        }
                    }
                    this.state = 1039;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1040;
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
            this.state = 1051;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocSyntaxParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1042;
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
                        this.state = 1043;
                        this.braceText();
                        this.state = 1048;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1044;
                                        this.match(XDocSyntaxParser.NEWLINE);
                                        this.state = 1045;
                                        this.braceText();
                                    }
                                }
                            }
                            this.state = 1050;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
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
                this.state = 1053;
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
XDocSyntaxParser.EXTENDS = 8;
XDocSyntaxParser.ID = 9;
XDocSyntaxParser.NEWLINE = 10;
XDocSyntaxParser.SPACE = 11;
XDocSyntaxParser.TEXT_CONTENT = 12;
XDocSyntaxParser.AT = 13;
XDocSyntaxParser.PLUS = 14;
XDocSyntaxParser.MINUS = 15;
XDocSyntaxParser.STAR = 16;
XDocSyntaxParser.FORWARD_SLASH = 17;
XDocSyntaxParser.COLON = 18;
XDocSyntaxParser.PERIOD = 19;
XDocSyntaxParser.COMMA = 20;
XDocSyntaxParser.EQUAL = 21;
XDocSyntaxParser.QUESTION = 22;
XDocSyntaxParser.AMP = 23;
XDocSyntaxParser.PIPE = 24;
XDocSyntaxParser.ARROW = 25;
XDocSyntaxParser.EXCLAMATION = 26;
XDocSyntaxParser.INLINE_TAG_START = 27;
XDocSyntaxParser.BRACE_OPEN = 28;
XDocSyntaxParser.BRACE_CLOSE = 29;
XDocSyntaxParser.PAREN_OPEN = 30;
XDocSyntaxParser.PAREN_CLOSE = 31;
XDocSyntaxParser.BRACKET_OPEN = 32;
XDocSyntaxParser.BRACKET_CLOSE = 33;
XDocSyntaxParser.LESSTHAN = 34;
XDocSyntaxParser.GREATERTHAN = 35;
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
    undefined, "'extends'", undefined, undefined, undefined, undefined, "'@'",
    "'+'", "'-'", "'*'", "'/'", "':'", "'.'", "','", "'='", "'?'", "'&'",
    "'|'", undefined, "'!'", "'{@'", "'{'", "'}'", "'('", "')'", "'['", "']'",
    "'<'", "'>'"
];
XDocSyntaxParser._SYMBOLIC_NAMES = [
    undefined, "NumberLiteral", "IntegerLiteral", "FloatingPointLiteral",
    "BooleanLiteral", "CharacterLiteral", "StringLiteral", "NullLiteral",
    "EXTENDS", "ID", "NEWLINE", "SPACE", "TEXT_CONTENT", "AT", "PLUS", "MINUS",
    "STAR", "FORWARD_SLASH", "COLON", "PERIOD", "COMMA", "EQUAL", "QUESTION",
    "AMP", "PIPE", "ARROW", "EXCLAMATION", "INLINE_TAG_START", "BRACE_OPEN",
    "BRACE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE", "BRACKET_OPEN", "BRACKET_CLOSE",
    "LESSTHAN", "GREATERTHAN"
];
XDocSyntaxParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(XDocSyntaxParser._LITERAL_NAMES, XDocSyntaxParser._SYMBOLIC_NAMES, []);
XDocSyntaxParser._serializedATNSegments = 3;
XDocSyntaxParser._serializedATNSegment0 = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03%\u0422\x04\x02" +
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
    "\x13\x03\x13\x05\x13\u01EA\n\x13\x03\x13\x03\x13\x05\x13\u01EE\n\x13\x03" +
    "\x13\x03\x13\x05\x13\u01F2\n\x13\x03\x13\x03\x13\x05\x13\u01F6\n\x13\x03" +
    "\x13\x07\x13\u01F9\n\x13\f\x13\x0E\x13\u01FC\v\x13\x03\x13\x03\x13\x05" +
    "\x13\u0200\n\x13\x03\x13\x03\x13\x05\x13\u0204\n\x13\x03\x13\x03\x13\x05" +
    "\x13\u0208\n\x13\x03\x13\x03\x13\x05\x13\u020C\n\x13\x03\x13\x07\x13\u020F" +
    "\n\x13\f\x13\x0E\x13\u0212\v\x13\x03\x13\x03\x13\x05\x13\u0216\n\x13\x03" +
    "\x13\x03\x13\x05\x13\u021A\n\x13\x03\x13\x03\x13\x05\x13\u021E\n\x13\x03" +
    "\x13\x03\x13\x05\x13\u0222\n\x13\x03\x13\x07\x13\u0225\n\x13\f\x13\x0E" +
    "\x13\u0228\v\x13\x05\x13\u022A\n\x13\x03\x14\x03\x14\x03\x14\x05\x14\u022F" +
    "\n\x14\x03\x15\x03\x15\x05\x15\u0233\n\x15\x03\x16\x03\x16\x03\x17\x03" +
    "\x17\x05\x17\u0239\n\x17\x03\x17\x03\x17\x05\x17\u023D\n\x17\x03\x17\x03" +
    "\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u0246\n\x19\x03\x19" +
    "\x05\x19\u0249\n\x19\x03\x19\x05\x19\u024C\n\x19\x03\x19\x05\x19\u024F" +
    "\n\x19\x03\x19\x05\x19\u0252\n\x19\x03\x19\x05\x19\u0255\n\x19\x03\x19" +
    "\x05\x19\u0258\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u025E\n\x1A" +
    "\x03\x1A\x03\x1A\x05\x1A\u0262\n\x1A\x03\x1A\x05\x1A\u0265\n\x1A\x03\x1A" +
    "\x05\x1A\u0268\n\x1A\x03\x1A\x07\x1A\u026B\n\x1A\f\x1A\x0E\x1A\u026E\v" +
    "\x1A\x03\x1B\x03\x1B\x05\x1B\u0272\n\x1B\x03\x1B\x05\x1B\u0275\n\x1B\x03" +
    "\x1B\x03\x1B\x05\x1B\u0279\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C" +
    "\u027F\n\x1C\x03\x1C\x05\x1C\u0282\n\x1C\x03\x1C\x05\x1C\u0285\n\x1C\x03" +
    "\x1C\x05\x1C\u0288\n\x1C\x03\x1C\x03\x1C\x05\x1C\u028C\n\x1C\x03\x1C\x05" +
    "\x1C\u028F\n\x1C\x03\x1C\x05\x1C\u0292\n\x1C\x03\x1C\x07\x1C\u0295\n\x1C" +
    "\f\x1C\x0E\x1C\u0298\v\x1C\x03\x1C\x05\x1C\u029B\n\x1C\x03\x1C\x05\x1C" +
    "\u029E\n\x1C\x03\x1C\x05\x1C\u02A1\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
    "\x06\x1C\u02A7\n\x1C\r\x1C\x0E\x1C\u02A8\x05\x1C\u02AB\n\x1C\x03\x1D\x03" +
    "\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u02B4\n\x1D\x03\x1D" +
    "\x03\x1D\x05\x1D\u02B8\n\x1D\x03\x1D\x05\x1D\u02BB\n\x1D\x03\x1D\x05\x1D" +
    "\u02BE\n\x1D\x03\x1D\x03\x1D\x05\x1D\u02C2\n\x1D\x03\x1D\x05\x1D\u02C5" +
    "\n\x1D\x03\x1D\x05\x1D\u02C8\n\x1D\x03\x1D\x07\x1D\u02CB\n\x1D\f\x1D\x0E" +
    "\x1D\u02CE\v\x1D\x03\x1E\x03\x1E\x03\x1E\x06\x1E\u02D3\n\x1E\r\x1E\x0E" +
    "\x1E\u02D4\x03\x1E\x03\x1E\x03\x1E\x06\x1E\u02DA\n\x1E\r\x1E\x0E\x1E\u02DB" +
    "\x05\x1E\u02DE\n\x1E\x03\x1F\x03\x1F\x05\x1F\u02E2\n\x1F\x03 \x03 \x03" +
    " \x03 \x03 \x03 \x03 \x05 \u02EB\n \x03 \x03 \x05 \u02EF\n \x03 \x03 " +
    "\x05 \u02F3\n \x03 \x03 \x03 \x05 \u02F8\n \x03 \x03 \x05 \u02FC\n \x03" +
    " \x07 \u02FF\n \f \x0E \u0302\v \x03!\x03!\x03!\x03\"\x03\"\x05\"\u0309" +
    "\n\"\x03\"\x05\"\u030C\n\"\x03\"\x05\"\u030F\n\"\x03\"\x05\"\u0312\n\"" +
    "\x03\"\x03\"\x05\"\u0316\n\"\x03\"\x05\"\u0319\n\"\x03\"\x05\"\u031C\n" +
    "\"\x03\"\x07\"\u031F\n\"\f\"\x0E\"\u0322\v\"\x03\"\x05\"\u0325\n\"\x03" +
    "\"\x05\"\u0328\n\"\x03\"\x05\"\u032B\n\"\x03\"\x03\"\x03#\x03#\x05#\u0331" +
    "\n#\x03#\x05#\u0334\n#\x03#\x05#\u0337\n#\x03#\x05#\u033A\n#\x03#\x05" +
    "#\u033D\n#\x03#\x05#\u0340\n#\x03#\x05#\u0343\n#\x03#\x03#\x03$\x03$\x05" +
    "$\u0349\n$\x03$\x03$\x05$\u034D\n$\x03$\x05$\u0350\n$\x03$\x05$\u0353" +
    "\n$\x03$\x07$\u0356\n$\f$\x0E$\u0359\v$\x03%\x03%\x05%\u035D\n%\x03%\x03" +
    "%\x05%\u0361\n%\x03%\x03%\x03%\x03%\x05%\u0367\n%\x03%\x03%\x05%\u036B" +
    "\n%\x03%\x03%\x05%\u036F\n%\x03&\x03&\x05&\u0373\n&\x03&\x05&\u0376\n" +
    "&\x03&\x05&\u0379\n&\x03&\x05&\u037C\n&\x03&\x05&\u037F\n&\x03&\x05&\u0382" +
    "\n&\x03&\x05&\u0385\n&\x03&\x03&\x05&\u0389\n&\x03&\x05&\u038C\n&\x03" +
    "&\x05&\u038F\n&\x03&\x03&\x05&\u0393\n&\x03&\x05&\u0396\n&\x03&\x05&\u0399" +
    "\n&\x03&\x03&\x05&\u039D\n&\x03&\x03&\x05&\u03A1\n&\x03&\x05&\u03A4\n" +
    "&\x03&\x05&\u03A7\n&\x03&\x03&\x05&\u03AB\n&\x03&\x05&\u03AE\n&\x03&\x05" +
    "&\u03B1\n&\x03&\x03&\x05&\u03B5\n&\x05&\u03B7\n&\x03\'\x03\'\x03(\x03" +
    "(\x05(\u03BD\n(\x03(\x03(\x05(\u03C1\n(\x03(\x03(\x03)\x03)\x03*\x03*" +
    "\x07*\u03C9\n*\f*\x0E*\u03CC\v*\x03*\x03*\x07*\u03D0\n*\f*\x0E*\u03D3" +
    "\v*\x05*\u03D5\n*\x03+\x05+\u03D8\n+\x03+\x06+\u03DB\n+\r+\x0E+\u03DC" +
    "\x03+\x03+\x03+\x07+\u03E2\n+\f+\x0E+\u03E5\v+\x03,\x03,\x03,\x03,\x03" +
    ",\x03,\x03,\x03,\x03,\x05,\u03F0\n,\x03-\x03-\x05-\u03F4\n-\x03.\x03." +
    "\x03.\x06.\u03F9\n.\r.\x0E.\u03FA\x03/\x03/\x03/\x03/\x05/\u0401\n/\x03" +
    "/\x03/\x030\x030\x031\x061\u0408\n1\r1\x0E1\u0409\x032\x032\x072\u040E" +
    "\n2\f2\x0E2\u0411\v2\x032\x032\x033\x033\x033\x033\x073\u0419\n3\f3\x0E" +
    "3\u041C\v3\x053\u041E\n3\x034\x034\x034\x02\x02\x05\x1A8>5\x02\x02\x04" +
    "\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
    "\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
    "\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
    "J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
    "f\x02\x02\t\x03\x02\f\r\x03\x02\x19\x1A\x04\x02\x12\x12\x19\x19\x03\x02" +
    "\x12\x13\x03\x02\x10\x11\x04\x02\x03\x03\x06\t\x05\x02\v\x0E\x13\x13\x15" +
    "\x15\u04E6\x02o\x03\x02\x02\x02\x04t\x03\x02\x02\x02\x06y\x03\x02\x02" +
    "\x02\b{\x03\x02\x02\x02\n\u0122\x03\x02\x02\x02\f\u0124\x03\x02\x02\x02" +
    "\x0E\u012A\x03\x02\x02\x02\x10\u013A\x03\x02\x02\x02\x12\u013C\x03\x02" +
    "\x02\x02\x14\u0140\x03\x02\x02\x02\x16\u0142\x03\x02\x02\x02\x18\u0144" +
    "\x03\x02\x02\x02\x1A\u014F\x03\x02\x02\x02\x1C\u01B1\x03\x02\x02\x02\x1E" +
    "\u01B3\x03\x02\x02\x02 \u01C1\x03\x02\x02\x02\"\u01CD\x03\x02\x02\x02" +
    "$\u0229\x03\x02\x02\x02&\u022E\x03\x02\x02\x02(\u0232\x03\x02\x02\x02" +
    "*\u0234\x03\x02\x02\x02,\u0236\x03\x02\x02\x02.\u0240\x03\x02\x02\x02" +
    "0\u0243\x03\x02\x02\x022\u025B\x03\x02\x02\x024\u026F\x03\x02\x02\x02" +
    "6\u02AA\x03\x02\x02\x028\u02B3\x03\x02\x02\x02:\u02DD\x03\x02\x02\x02" +
    "<\u02E1\x03\x02\x02\x02>\u02EA\x03\x02\x02\x02@\u0303\x03\x02\x02\x02" +
    "B\u0306\x03\x02\x02\x02D\u032E\x03\x02\x02\x02F\u0346\x03\x02\x02\x02" +
    "H\u036E\x03\x02\x02\x02J\u03B6\x03\x02\x02\x02L\u03B8\x03\x02\x02\x02" +
    "N\u03BA\x03\x02\x02\x02P\u03C4\x03\x02\x02\x02R\u03D4\x03\x02\x02\x02" +
    "T\u03D7\x03\x02\x02\x02V\u03EF\x03\x02\x02\x02X\u03F3\x03\x02\x02\x02" +
    "Z\u03F8\x03\x02\x02\x02\\\u03FC\x03\x02\x02\x02^\u0404\x03\x02\x02\x02" +
    "`\u0407\x03\x02\x02\x02b\u040B\x03\x02\x02\x02d\u041D\x03\x02\x02\x02" +
    "f\u041F\x03\x02\x02\x02hp\x07\x02\x02\x03ik\x05\x04\x03\x02jl\x07\f\x02" +
    "\x02kj\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x07\x02\x02" +
    "\x03np\x03\x02\x02\x02oh\x03\x02\x02\x02oi\x03\x02\x02\x02p\x03\x03\x02" +
    "\x02\x02qs\x05\x06\x04\x02rq\x03\x02\x02\x02sv\x03\x02\x02\x02tr\x03\x02" +
    "\x02\x02tu\x03\x02\x02\x02uw\x03\x02\x02\x02vt\x03\x02\x02\x02wx\x05\b" +
    "\x05\x02x\x05\x03\x02\x02\x02yz\t\x02\x02\x02z\x07\x03\x02\x02\x02{\x80" +
    "\x05\n\x06\x02|}\x07\f\x02\x02}\x7F\x05\n\x06\x02~|\x03\x02\x02\x02\x7F" +
    "\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81" +
    "\t\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83\u0123\x05\f\x07\x02\x84" +
    "\x85\x05\f\x07\x02\x85\x87\x07\r\x02\x02\x86\x88\x07\f\x02\x02\x87\x86" +
    "\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A" +
    "\x07\x11\x02\x02\x8A\x8B\x07\r\x02\x02\x8B\x8C\x05P)\x02\x8C\u0123\x03" +
    "\x02\x02\x02\x8D\x8E\x05\f\x07\x02\x8E\x8F\x07\r\x02\x02\x8F\x90\x05\x0E" +
    "\b\x02\x90\u0123\x03\x02\x02\x02\x91\x92\x05\f\x07\x02\x92\x93\x07\r\x02" +
    "\x02\x93\x95\x05\x0E\b\x02\x94\x96\x07\r\x02\x02\x95\x94\x03\x02\x02\x02" +
    "\x95\x96\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99\x07\x17\x02\x02" +
    "\x98\x9A\x07\r\x02\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02" +
    "\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x05> \x02\x9C\u0123\x03\x02\x02\x02\x9D" +
    "\x9E\x05\f\x07\x02\x9E\x9F\x07\r\x02\x02\x9F\xA0\x05\x0E\b\x02\xA0\xA2" +
    "\x07\r\x02\x02\xA1\xA3\x07\f\x02\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03" +
    "\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x07\x11\x02\x02\xA5\xA6\x07" +
    "\r\x02\x02\xA6\xA7\x05P)\x02\xA7\u0123\x03\x02\x02\x02\xA8\xA9\x05\f\x07" +
    "\x02\xA9\xAA\x07\r\x02\x02\xAA\xAB\x05\x0E\b\x02\xAB\xAC\x07\r\x02\x02" +
    "\xAC\xAE\x07\x17\x02\x02\xAD\xAF\x07\r\x02\x02\xAE\xAD\x03\x02\x02\x02" +
    "\xAE\xAF\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x05> \x02\xB1" +
    "\xB3\x07\r\x02\x02\xB2\xB4\x07\f\x02\x02\xB3\xB2\x03\x02\x02\x02\xB3\xB4" +
    "\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x07\x11\x02\x02\xB6\xB7" +
    "\x07\r\x02\x02\xB7\xB8\x05P)\x02\xB8\u0123\x03\x02\x02\x02\xB9\xBA\x05" +
    "\f\x07\x02\xBA\xBB\x07\r\x02\x02\xBB\xBD\x05\x0E\b\x02\xBC\xBE\x07\r\x02" +
    "\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x03\x02\x02" +
    "\x02\xBF\xC1\x07\x14\x02\x02\xC0\xC2\x07\r\x02\x02\xC1\xC0\x03\x02\x02" +
    "\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x05\x1A\x0E" +
    "\x02\xC4\u0123\x03\x02\x02\x02\xC5\xC6\x05\f\x07\x02\xC6\xC7\x07\r\x02" +
    "\x02\xC7\xC9\x05\x0E\b\x02\xC8\xCA\x07\r\x02\x02\xC9\xC8\x03\x02\x02\x02" +
    "\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCD\x07\x14\x02\x02" +
    "\xCC\xCE\x07\r\x02\x02\xCD\xCC\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02" +
    "\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x05\x1A\x0E\x02\xD0\xD2\x07\r\x02\x02" +
    "\xD1\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02" +
    "\xD3\xD5\x07\x17\x02\x02\xD4\xD6\x07\r\x02\x02\xD5\xD4\x03\x02\x02\x02" +
    "\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x05> \x02\xD8" +
    "\u0123\x03\x02\x02\x02\xD9\xDA\x05\f\x07\x02\xDA\xDB\x07\r\x02\x02\xDB" +
    "\xDD\x05\x0E\b\x02\xDC\xDE\x07\r\x02\x02\xDD\xDC\x03\x02\x02\x02\xDD\xDE" +
    "\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE1\x07\x14\x02\x02\xE0\xE2" +
    "\x07\r\x02\x02\xE1\xE0\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3" +
    "\x03\x02\x02\x02\xE3\xE4\x05\x1A\x0E\x02\xE4\xE6\x07\r\x02\x02\xE5\xE7" +
    "\x07\f\x02\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8" +
    "\x03\x02\x02\x02\xE8\xE9\x07\x11\x02\x02\xE9\xEA\x07\r\x02\x02\xEA\xEB" +
    "\x05P)\x02\xEB\u0123\x03\x02\x02\x02\xEC\xED\x05\f\x07\x02\xED\xEE\x07" +
    "\r\x02\x02\xEE\xF0\x05\x0E\b\x02\xEF\xF1\x07\r\x02\x02\xF0\xEF\x03\x02" +
    "\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF4\x07\x14" +
    "\x02\x02\xF3\xF5\x07\r\x02\x02\xF4\xF3\x03\x02\x02\x02\xF4\xF5\x03\x02" +
    "\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF8\x05\x1A\x0E\x02\xF7\xF9\x07\r" +
    "\x02\x02\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02" +
    "\x02\x02\xFA\xFC\x07\x17\x02\x02\xFB\xFD\x07\r\x02\x02\xFC\xFB\x03\x02" +
    "\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x05>" +
    " \x02\xFF\u0101\x07\r\x02\x02\u0100\u0102\x07\f\x02\x02\u0101\u0100\x03" +
    "\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103" +
    "\u0104\x07\x11\x02\x02\u0104\u0105\x07\r\x02\x02\u0105\u0106\x05P)\x02" +
    "\u0106\u0123\x03\x02\x02\x02\u0107\u0109\x05\f\x07\x02\u0108\u010A\x07" +
    "\r\x02\x02\u0109\u0108\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A" +
    "\u010B\x03\x02\x02\x02\u010B\u010D\x07\x14\x02\x02\u010C\u010E\x07\r\x02" +
    "\x02\u010D\u010C\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F" +
    "\x03\x02\x02\x02\u010F\u0110\x05\x1A\x0E\x02\u0110\u0123\x03\x02\x02\x02" +
    "\u0111\u0113\x05\f\x07\x02\u0112\u0114\x07\r\x02\x02\u0113\u0112\x03\x02" +
    "\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115" +
    "\u0117\x07\x14\x02\x02\u0116\u0118\x07\r\x02\x02\u0117\u0116\x03\x02\x02" +
    "\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A" +
    "\x05\x1A\x0E\x02\u011A\u011C\x07\r\x02\x02\u011B\u011D\x07\f\x02\x02\u011C" +
    "\u011B\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011E\x03\x02" +
    "\x02\x02\u011E\u011F\x07\x11\x02\x02\u011F\u0120\x07\r\x02\x02\u0120\u0121" +
    "\x05P)\x02\u0121\u0123\x03\x02\x02\x02\u0122\x83\x03\x02\x02\x02\u0122" +
    "\x84\x03\x02\x02\x02\u0122\x8D\x03\x02\x02\x02\u0122\x91\x03\x02\x02\x02" +
    "\u0122\x9D\x03\x02\x02\x02\u0122\xA8\x03\x02\x02\x02\u0122\xB9\x03\x02" +
    "\x02\x02\u0122\xC5\x03\x02\x02\x02\u0122\xD9\x03\x02\x02\x02\u0122\xEC" +
    "\x03\x02\x02\x02\u0122\u0107\x03\x02\x02\x02\u0122\u0111\x03\x02\x02\x02" +
    "\u0123\v\x03\x02\x02\x02\u0124\u0125\x07\x0F\x02\x02\u0125\u0126\x05\x16" +
    "\f\x02\u0126\r\x03\x02\x02\x02\u0127\u012B\x05\x10\t\x02\u0128\u012B\x05" +
    "\x12\n\x02\u0129\u012B\x05\x16\f\x02\u012A\u0127\x03\x02\x02\x02\u012A" +
    "\u0128\x03\x02\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B\x0F\x03\x02\x02" +
    "\x02\u012C\u012F\x05\x12\n\x02\u012D\u012E\x07\x15\x02\x02\u012E\u0130" +
    "\x05\x14\v\x02\u012F\u012D\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02" +
    "\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u013B\x03" +
    "\x02\x02\x02\u0133\u0136\x05\x16\f\x02\u0134\u0135\x07\x15\x02\x02\u0135" +
    "\u0137\x05\x14\v\x02\u0136\u0134\x03\x02\x02\x02\u0137\u0138\x03\x02\x02" +
    "\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013B" +
    "\x03\x02\x02\x02\u013A\u012C\x03\x02\x02\x02\u013A\u0133\x03\x02\x02\x02" +
    "\u013B\x11\x03\x02\x02\x02\u013C\u013D\x05\x18\r\x02\u013D\x13\x03\x02" +
    "\x02\x02\u013E\u0141\x05\x12\n\x02\u013F\u0141\x05\x16\f\x02\u0140\u013E" +
    "\x03\x02\x02\x02\u0140\u013F\x03\x02\x02\x02\u0141\x15\x03\x02\x02\x02" +
    "\u0142\u0143\x07\v\x02\x02\u0143\x17\x03\x02\x02\x02\u0144\u0145\x05\x16" +
    "\f\x02\u0145\u0146\x07\x18\x02\x02\u0146\x19\x03\x02\x02\x02\u0147\u0148" +
    "\b\x0E\x01\x02\u0148\u0150\x05\x1C\x0F\x02\u0149\u0150\x05\"\x12\x02\u014A" +
    "\u0150\x05&\x14\x02\u014B\u0150\x05,\x17\x02\u014C\u0150\x05.\x18\x02" +
    "\u014D\u0150\x050\x19\x02\u014E\u0150\x056\x1C\x02\u014F\u0147\x03\x02" +
    "\x02\x02\u014F\u0149\x03\x02\x02\x02\u014F\u014A\x03\x02\x02\x02\u014F" +
    "\u014B\x03\x02\x02\x02\u014F\u014C\x03\x02\x02\x02\u014F\u014D\x03\x02" +
    "\x02\x02\u014F\u014E\x03\x02\x02\x02\u0150\u0168\x03\x02\x02\x02\u0151" +
    "\u0153\f\n\x02\x02\u0152\u0154\x07\r\x02\x02\u0153\u0152\x03\x02\x02\x02" +
    "\u0153\u0154\x03\x02\x02\x02\u0154\u0156\x03\x02\x02\x02\u0155\u0157\x07" +
    "\f\x02\x02\u0156\u0155\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157" +
    "\u0159\x03\x02\x02\x02\u0158\u015A\x07\r\x02\x02\u0159\u0158\x03\x02\x02" +
    "\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015D" +
    "\t\x03\x02\x02\u015C\u015E\x07\r\x02\x02\u015D\u015C\x03\x02\x02\x02\u015D" +
    "\u015E\x03\x02\x02\x02\u015E\u0160\x03\x02\x02\x02\u015F\u0161\x07\f\x02" +
    "\x02\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0163" +
    "\x03\x02\x02\x02\u0162\u0164\x07\r\x02\x02\u0163\u0162\x03\x02\x02\x02" +
    "\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0167\x05" +
    "\x1A\x0E\v\u0166\u0151\x03\x02\x02\x02\u0167\u016A\x03\x02\x02\x02\u0168" +
    "\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\x1B\x03\x02\x02" +
    "\x02\u016A\u0168\x03\x02\x02\x02\u016B\u016D\x07 \x02\x02\u016C\u016E" +
    "\x07\r\x02\x02\u016D\u016C\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02" +
    "\u016E\u0170\x03\x02\x02\x02\u016F\u0171\x07\f\x02\x02\u0170\u016F\x03" +
    "\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0173\x03\x02\x02\x02\u0172" +
    "\u0174\x07\r\x02\x02\u0173\u0172\x03\x02\x02\x02\u0173\u0174\x03\x02\x02" +
    "\x02\u0174\u0176\x03\x02\x02\x02\u0175\u0177\x05\x1E\x10\x02\u0176\u0175" +
    "\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0179\x03\x02\x02\x02" +
    "\u0178\u017A\x07\r\x02\x02\u0179\u0178\x03\x02\x02\x02\u0179\u017A\x03" +
    "\x02\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B\u017D\x07\f\x02\x02\u017C" +
    "\u017B\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017F\x03\x02" +
    "\x02\x02\u017E\u0180\x07\r\x02\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180" +
    "\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0183\x07!\x02\x02" +
    "\u0182\u0184\x07\r\x02\x02\u0183\u0182\x03\x02\x02\x02\u0183\u0184\x03" +
    "\x02\x02\x02\u0184\u0186\x03\x02\x02\x02\u0185\u0187\x07\f\x02\x02\u0186" +
    "\u0185\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0189\x03\x02" +
    "\x02\x02\u0188\u018A\x07\r\x02\x02\u0189\u0188\x03\x02\x02\x02\u0189\u018A" +
    "\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018D\x07\x1B\x02\x02" +
    "\u018C\u018E\x07\r\x02\x02\u018D\u018C\x03\x02\x02\x02\u018D\u018E\x03" +
    "\x02\x02\x02\u018E\u0190";
XDocSyntaxParser._serializedATNSegment1 = "\x03\x02\x02\x02\u018F\u0191\x07\f\x02\x02\u0190\u018F\x03\x02\x02\x02" +
    "\u0190\u0191\x03\x02\x02\x02\u0191\u0193\x03\x02\x02\x02\u0192\u0194\x07" +
    "\r\x02\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194" +
    "\u0195\x03\x02\x02\x02\u0195\u0197\x05\x1A\x0E\x02\u0196\u0198\x07\x18" +
    "\x02\x02\u0197\u0196\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198" +
    "\u01B2\x03\x02\x02\x02\u0199\u019B\x05 \x11\x02\u019A\u019C\x07\r\x02" +
    "\x02\u019B\u019A\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019E" +
    "\x03\x02\x02\x02\u019D\u019F\x07\f\x02\x02\u019E\u019D\x03\x02\x02\x02" +
    "\u019E\u019F\x03\x02\x02\x02\u019F\u01A1\x03\x02\x02\x02\u01A0\u01A2\x07" +
    "\r\x02\x02\u01A1\u01A0\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2" +
    "\u01A3\x03\x02\x02\x02\u01A3\u01A5\x07\x1B\x02\x02\u01A4\u01A6\x07\r\x02" +
    "\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A8" +
    "\x03\x02\x02\x02\u01A7\u01A9\x07\f\x02\x02\u01A8\u01A7\x03\x02\x02\x02" +
    "\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02\u01AA\u01AC\x07" +
    "\r\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC" +
    "\u01AD\x03\x02\x02\x02\u01AD\u01AF\x05\x1A\x0E\x02\u01AE\u01B0\x07\x18" +
    "\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0" +
    "\u01B2\x03\x02\x02\x02\u01B1\u016B\x03\x02\x02\x02\u01B1\u0199\x03\x02" +
    "\x02\x02\u01B2\x1D\x03\x02\x02\x02\u01B3\u01BE\x05 \x11\x02\u01B4\u01B6" +
    "\x07\x16\x02\x02\u01B5\u01B7\x07\f\x02\x02\u01B6\u01B5\x03\x02\x02\x02" +
    "\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B9\x03\x02\x02\x02\u01B8\u01BA\x07" +
    "\r\x02\x02\u01B9\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA" +
    "\u01BB\x03\x02\x02\x02\u01BB\u01BD\x05 \x11\x02\u01BC\u01B4\x03\x02\x02" +
    "\x02\u01BD\u01C0\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF" +
    "\x03\x02\x02\x02\u01BF\x1F\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02" +
    "\u01C1\u01CA\x05\x16\f\x02\u01C2\u01C4\x07\r\x02\x02\u01C3\u01C2\x03\x02" +
    "\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5" +
    "\u01C7\x07\x14\x02\x02\u01C6\u01C8\x07\r\x02\x02\u01C7\u01C6\x03\x02\x02" +
    "\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CB" +
    "\x05\x1A\x0E\x02\u01CA\u01C3\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02" +
    "\u01CB!\x03\x02\x02\x02\u01CC\u01CE\x05\x16\f\x02\u01CD\u01CC\x03\x02" +
    "\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF" +
    "\u01D1\x07$\x02\x02\u01D0\u01D2\x07\r\x02\x02\u01D1\u01D0\x03\x02\x02" +
    "\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D5" +
    "\x05$\x13\x02\u01D4\u01D6\x07\r\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D5" +
    "\u01D6\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8\x07%\x02" +
    "\x02\u01D8#\x03\x02\x02\x02\u01D9\u01DB\x05&\x14\x02\u01DA\u01DC\x07\r" +
    "\x02\x02\u01DB\u01DA\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC" +
    "\u01E4\x03\x02\x02\x02\u01DD\u01DF\x07\x16\x02\x02\u01DE\u01E0\x07\r\x02" +
    "\x02\u01DF\u01DE\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E1" +
    "\x03\x02\x02\x02\u01E1\u01E3\x05$\x13\x02\u01E2\u01DD\x03\x02\x02\x02" +
    "\u01E3\u01E6\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03" +
    "\x02\x02\x02\u01E5\u022A\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7" +
    "\u01E9\x05&\x14\x02\u01E8\u01EA\x07\r\x02\x02\u01E9\u01E8\x03\x02\x02" +
    "\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01ED" +
    "\x07\n\x02\x02\u01EC\u01EE\x07\r\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01ED" +
    "\u01EE\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F1\x05&\x14" +
    "\x02\u01F0\u01F2\x07\r\x02\x02\u01F1\u01F0\x03\x02\x02\x02\u01F1\u01F2" +
    "\x03\x02\x02\x02\u01F2\u01FA\x03\x02\x02\x02\u01F3\u01F5\x07\x16\x02\x02" +
    "\u01F4\u01F6\x07\r\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F5\u01F6\x03" +
    "\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F9\x05$\x13\x02\u01F8" +
    "\u01F3\x03\x02\x02\x02\u01F9\u01FC\x03\x02\x02\x02\u01FA\u01F8\x03\x02" +
    "\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u022A\x03\x02\x02\x02\u01FC" +
    "\u01FA\x03\x02\x02\x02\u01FD\u01FF\x05&\x14\x02\u01FE\u0200\x07\r\x02" +
    "\x02\u01FF\u01FE\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200\u0201" +
    "\x03\x02\x02\x02\u0201\u0203\x07\x19\x02\x02\u0202\u0204\x07\r\x02\x02" +
    "\u0203\u0202\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x03" +
    "\x02\x02\x02\u0205\u0207\x05&\x14\x02\u0206\u0208\x07\r\x02\x02\u0207" +
    "\u0206\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0210\x03\x02" +
    "\x02\x02\u0209\u020B\x07\x16\x02\x02\u020A\u020C\x07\r\x02\x02\u020B\u020A" +
    "\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02" +
    "\u020D\u020F\x05$\x13\x02\u020E\u0209\x03\x02\x02\x02\u020F\u0212\x03" +
    "\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211" +
    "\u022A\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0213\u0215\x05&\x14" +
    "\x02\u0214\u0216\x07\r\x02\x02\u0215\u0214\x03\x02\x02\x02\u0215\u0216" +
    "\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0219\x07\x1A\x02\x02" +
    "\u0218\u021A\x07\r\x02\x02\u0219\u0218\x03\x02\x02\x02\u0219\u021A\x03" +
    "\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021D\x05&\x14\x02\u021C" +
    "\u021E\x07\r\x02\x02\u021D\u021C\x03\x02\x02\x02\u021D\u021E\x03\x02\x02" +
    "\x02\u021E\u0226\x03\x02\x02\x02\u021F\u0221\x07\x16\x02\x02\u0220\u0222" +
    "\x07\r\x02\x02\u0221\u0220\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02" +
    "\u0222\u0223\x03\x02\x02\x02\u0223\u0225\x05$\x13\x02\u0224\u021F\x03" +
    "\x02\x02\x02\u0225\u0228\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226" +
    "\u0227\x03\x02\x02\x02\u0227\u022A\x03\x02\x02\x02\u0228\u0226\x03\x02" +
    "\x02\x02\u0229\u01D9\x03\x02\x02\x02\u0229\u01E7\x03\x02\x02\x02\u0229" +
    "\u01FD\x03\x02\x02\x02\u0229\u0213\x03\x02\x02\x02\u022A%\x03\x02\x02" +
    "\x02\u022B\u022F\x05\x18\r\x02\u022C\u022F\x05:\x1E\x02\u022D\u022F\x05" +
    "(\x15\x02\u022E\u022B\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022E" +
    "\u022D\x03\x02\x02\x02\u022F\'\x03\x02\x02\x02\u0230\u0233\x05\x16\f\x02" +
    "\u0231\u0233\x05*\x16\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0231\x03" +
    "\x02\x02\x02\u0233)\x03\x02\x02\x02\u0234\u0235\x07\t\x02\x02\u0235+\x03" +
    "\x02\x02\x02\u0236\u0238\x07 \x02\x02\u0237\u0239\x07\r\x02\x02\u0238" +
    "\u0237\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023A\x03\x02" +
    "\x02\x02\u023A\u023C\x05\x1A\x0E\x02\u023B\u023D\x07\r\x02\x02\u023C\u023B" +
    "\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02" +
    "\u023E\u023F\x07!\x02\x02\u023F-\x03\x02\x02\x02\u0240\u0241\t\x04\x02" +
    "\x02\u0241\u0242\x05&\x14\x02\u0242/\x03\x02\x02\x02\u0243\u0245\x07\x1E" +
    "\x02\x02\u0244\u0246\x07\r\x02\x02\u0245\u0244\x03\x02\x02\x02\u0245\u0246" +
    "\x03\x02\x02\x02\u0246\u0248\x03\x02\x02\x02\u0247\u0249\x07\f\x02\x02" +
    "\u0248\u0247\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u024B\x03" +
    "\x02\x02\x02\u024A\u024C\x07\r\x02\x02\u024B\u024A\x03\x02\x02\x02\u024B" +
    "\u024C\x03\x02\x02\x02\u024C\u024E\x03\x02\x02\x02\u024D\u024F\x052\x1A" +
    "\x02\u024E\u024D\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0251" +
    "\x03\x02\x02\x02\u0250\u0252\x07\r\x02\x02\u0251\u0250\x03\x02\x02\x02" +
    "\u0251\u0252\x03\x02\x02\x02\u0252\u0254\x03\x02\x02\x02\u0253\u0255\x07" +
    "\f\x02\x02\u0254\u0253\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255" +
    "\u0257\x03\x02\x02\x02\u0256\u0258\x07\r\x02\x02\u0257\u0256\x03\x02\x02" +
    "\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025A" +
    "\x07\x1F\x02\x02\u025A1\x03\x02\x02\x02\u025B\u025D\x054\x1B\x02\u025C" +
    "\u025E\x07\r\x02\x02\u025D\u025C\x03\x02\x02\x02\u025D\u025E\x03\x02\x02" +
    "\x02\u025E\u026C\x03\x02\x02\x02\u025F\u0261\x07\x16\x02\x02\u0260\u0262" +
    "\x07\r\x02\x02\u0261\u0260\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02" +
    "\u0262\u0264\x03\x02\x02\x02\u0263\u0265\x07\f\x02\x02\u0264\u0263\x03" +
    "\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0267\x03\x02\x02\x02\u0266" +
    "\u0268\x07\r\x02\x02\u0267\u0266\x03\x02\x02\x02\u0267\u0268\x03\x02\x02" +
    "\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026B\x054\x1B\x02\u026A\u025F" +
    "\x03\x02\x02\x02\u026B\u026E\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02" +
    "\u026C\u026D\x03\x02\x02\x02\u026D3\x03\x02\x02\x02\u026E\u026C\x03\x02" +
    "\x02\x02\u026F\u0271\x05\x1A\x0E\x02\u0270\u0272\x07\x18\x02\x02\u0271" +
    "\u0270\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0274\x03\x02" +
    "\x02\x02\u0273\u0275\x07\r\x02\x02\u0274\u0273\x03\x02\x02\x02\u0274\u0275" +
    "\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0278\x07\x14\x02\x02" +
    "\u0277\u0279\x07\r\x02\x02\u0278\u0277\x03\x02\x02\x02\u0278\u0279\x03" +
    "\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\u027B\x05\x1A\x0E\x02\u027B" +
    "5\x03\x02\x02\x02\u027C\u027E\x07\"\x02\x02\u027D\u027F\x07\f\x02\x02" +
    "\u027E\u027D\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u0281\x03" +
    "\x02\x02\x02\u0280\u0282\x07\r\x02\x02\u0281\u0280\x03\x02\x02\x02\u0281" +
    "\u0282\x03\x02\x02\x02\u0282\u0284\x03\x02\x02\x02\u0283\u0285\x07\f\x02" +
    "\x02\u0284\u0283\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0287" +
    "\x03\x02\x02\x02\u0286\u0288\x05\x1A\x0E\x02\u0287\u0286\x03\x02\x02\x02" +
    "\u0287\u0288\x03\x02\x02\x02\u0288\u0296\x03\x02\x02\x02\u0289\u028B\x07" +
    "\x16\x02\x02\u028A\u028C\x07\f\x02\x02\u028B\u028A\x03\x02\x02\x02\u028B" +
    "\u028C\x03\x02\x02\x02\u028C\u028E\x03\x02\x02\x02\u028D\u028F\x07\r\x02" +
    "\x02\u028E\u028D\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0291" +
    "\x03\x02\x02\x02\u0290\u0292\x07\f\x02\x02\u0291\u0290\x03\x02\x02\x02" +
    "\u0291\u0292\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0295\x05" +
    "\x1A\x0E\x02\u0294\u0289\x03\x02\x02\x02\u0295\u0298\x03\x02\x02\x02\u0296" +
    "\u0294\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297\u029A\x03\x02" +
    "\x02\x02\u0298\u0296\x03\x02\x02\x02\u0299\u029B\x07\f\x02\x02\u029A\u0299" +
    "\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B\u029D\x03\x02\x02\x02" +
    "\u029C\u029E\x07\r\x02\x02\u029D\u029C\x03\x02\x02\x02\u029D\u029E\x03" +
    "\x02\x02\x02\u029E\u02A0\x03\x02\x02\x02\u029F\u02A1\x07\f\x02\x02\u02A0" +
    "\u029F\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A2\x03\x02" +
    "\x02\x02\u02A2\u02AB\x07#\x02\x02\u02A3\u02A6\x058\x1D\x02\u02A4\u02A5" +
    "\x07\"\x02\x02\u02A5\u02A7\x07#\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A7" +
    "\u02A8\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02" +
    "\x02\x02\u02A9\u02AB\x03\x02\x02\x02\u02AA\u027C\x03\x02\x02\x02\u02AA" +
    "\u02A3\x03\x02\x02\x02\u02AB7\x03\x02\x02\x02\u02AC\u02AD\b\x1D\x01\x02" +
    "\u02AD\u02B4\x05\x1C\x0F\x02\u02AE\u02B4\x05\"\x12\x02\u02AF\u02B4\x05" +
    "&\x14\x02\u02B0\u02B4\x05,\x17\x02\u02B1\u02B4\x05.\x18\x02\u02B2\u02B4" +
    "\x050\x19\x02\u02B3\u02AC\x03\x02\x02\x02\u02B3\u02AE\x03\x02\x02\x02" +
    "\u02B3\u02AF\x03\x02\x02\x02\u02B3\u02B0\x03\x02\x02\x02\u02B3\u02B1\x03" +
    "\x02\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B4\u02CC\x03\x02\x02\x02\u02B5" +
    "\u02B7\f\t\x02\x02\u02B6\u02B8\x07\r\x02\x02\u02B7\u02B6\x03\x02\x02\x02" +
    "\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02BA\x03\x02\x02\x02\u02B9\u02BB\x07" +
    "\f\x02\x02\u02BA\u02B9\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB" +
    "\u02BD\x03\x02\x02\x02\u02BC\u02BE\x07\r\x02\x02\u02BD\u02BC\x03\x02\x02" +
    "\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C1" +
    "\t\x03\x02\x02\u02C0\u02C2\x07\r\x02\x02\u02C1\u02C0\x03\x02\x02\x02\u02C1" +
    "\u02C2\x03\x02\x02\x02\u02C2\u02C4\x03\x02\x02\x02\u02C3\u02C5\x07\f\x02" +
    "\x02\u02C4\u02C3\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C7" +
    "\x03\x02\x02\x02\u02C6\u02C8\x07\r\x02\x02\u02C7\u02C6\x03\x02\x02\x02" +
    "\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CB\x05" +
    "8\x1D\n\u02CA\u02B5\x03\x02\x02\x02\u02CB\u02CE\x03\x02\x02\x02\u02CC" +
    "\u02CA\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD9\x03\x02\x02" +
    "\x02\u02CE\u02CC\x03\x02\x02\x02\u02CF\u02D2\x05\x16\f\x02\u02D0\u02D1" +
    "\x07\x15\x02\x02\u02D1\u02D3\x05<\x1F\x02\u02D2\u02D0\x03\x02\x02\x02" +
    "\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D2\x03\x02\x02\x02\u02D4\u02D5\x03" +
    "\x02\x02\x02\u02D5\u02DE\x03\x02\x02\x02\u02D6\u02D9\x05\x18\r\x02\u02D7" +
    "\u02D8\x07\x15\x02\x02\u02D8\u02DA\x05<\x1F\x02\u02D9\u02D7\x03\x02\x02" +
    "\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DC" +
    "\x03\x02\x02\x02\u02DC\u02DE\x03\x02\x02\x02\u02DD\u02CF\x03\x02\x02\x02" +
    "\u02DD\u02D6\x03\x02\x02\x02\u02DE;\x03\x02\x02\x02\u02DF\u02E2\x05\x16" +
    "\f\x02\u02E0\u02E2\x05\x18\r\x02\u02E1\u02DF\x03\x02\x02\x02\u02E1\u02E0" +
    "\x03\x02\x02\x02\u02E2=\x03\x02\x02\x02\u02E3\u02E4\b \x01\x02\u02E4\u02EB" +
    "\x05@!\x02\u02E5\u02EB\x05B\"\x02\u02E6\u02EB\x05D#\x02\u02E7\u02EB\x05" +
    "J&\x02\u02E8\u02EB\x05L\'\x02\u02E9\u02EB\x05N(\x02\u02EA\u02E3\x03\x02" +
    "\x02\x02\u02EA\u02E5\x03\x02\x02\x02\u02EA\u02E6\x03\x02\x02\x02\u02EA" +
    "\u02E7\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02E9\x03\x02" +
    "\x02\x02\u02EB\u0300\x03\x02\x02\x02\u02EC\u02EE\f\t\x02\x02\u02ED\u02EF" +
    "\x07\r\x02\x02\u02EE\u02ED\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02" +
    "\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F2\t\x05\x02\x02\u02F1\u02F3\x07" +
    "\r\x02\x02\u02F2\u02F1\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3" +
    "\u02F4\x03\x02\x02\x02\u02F4\u02FF\x05> \n\u02F5\u02F7\f\b\x02\x02\u02F6" +
    "\u02F8\x07\r\x02\x02\u02F7\u02F6\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02" +
    "\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FB\t\x06\x02\x02\u02FA\u02FC" +
    "\x07\r\x02\x02\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02" +
    "\u02FC\u02FD\x03\x02\x02\x02\u02FD\u02FF\x05> \t\u02FE\u02EC\x03\x02\x02" +
    "\x02\u02FE\u02F5\x03\x02\x02\x02\u02FF\u0302\x03\x02\x02\x02\u0300\u02FE" +
    "\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301?\x03\x02\x02\x02\u0302" +
    "\u0300\x03\x02\x02\x02\u0303\u0304\t\x06\x02\x02\u0304\u0305\x05> \x02" +
    "\u0305A\x03\x02\x02\x02\u0306\u0308\x07\"\x02\x02\u0307\u0309\x07\f\x02" +
    "\x02\u0308\u0307\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030B" +
    "\x03\x02\x02\x02\u030A\u030C\x07\r\x02\x02\u030B\u030A\x03\x02\x02\x02" +
    "\u030B\u030C\x03\x02\x02\x02\u030C\u030E\x03\x02\x02\x02\u030D\u030F\x07" +
    "\f\x02\x02\u030E\u030D\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F" +
    "\u0311\x03\x02\x02\x02\u0310\u0312\x05> \x02\u0311\u0310\x03\x02\x02\x02" +
    "\u0311\u0312\x03\x02\x02\x02\u0312\u0320\x03\x02\x02\x02\u0313\u0315\x07" +
    "\x16\x02\x02\u0314\u0316\x07\f\x02\x02\u0315\u0314\x03\x02\x02\x02\u0315" +
    "\u0316\x03\x02\x02\x02\u0316\u0318\x03\x02\x02\x02\u0317\u0319\x07\r\x02" +
    "\x02\u0318\u0317\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319\u031B" +
    "\x03\x02\x02\x02\u031A\u031C\x07\f\x02\x02\u031B\u031A\x03\x02\x02\x02" +
    "\u031B\u031C\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D\u031F\x05" +
    "> \x02\u031E\u0313\x03\x02\x02\x02\u031F\u0322\x03\x02\x02\x02\u0320\u031E" +
    "\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0324\x03\x02\x02\x02" +
    "\u0322\u0320\x03\x02\x02\x02\u0323\u0325\x07\f\x02\x02\u0324\u0323\x03" +
    "\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0327\x03\x02\x02\x02\u0326" +
    "\u0328\x07\r\x02\x02\u0327\u0326\x03\x02\x02\x02\u0327\u0328\x03\x02\x02" +
    "\x02\u0328\u032A\x03\x02\x02\x02\u0329\u032B\x07\f\x02\x02\u032A\u0329" +
    "\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02" +
    "\u032C\u032D\x07#\x02\x02\u032DC\x03\x02\x02\x02\u032E\u0330\x07\x1E\x02" +
    "\x02\u032F\u0331\x07\r\x02\x02\u0330\u032F\x03\x02\x02\x02\u0330\u0331" +
    "\x03\x02\x02\x02\u0331\u0333\x03\x02\x02\x02\u0332\u0334\x07\f\x02\x02" +
    "\u0333\u0332\x03\x02\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334\u0336\x03" +
    "\x02\x02\x02\u0335\u0337\x07\r\x02\x02\u0336\u0335\x03\x02\x02\x02\u0336" +
    "\u0337\x03\x02\x02\x02\u0337\u0339\x03\x02\x02\x02\u0338\u033A\x05F$\x02" +
    "\u0339\u0338\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A\u033C\x03" +
    "\x02\x02\x02\u033B\u033D\x07\r\x02\x02\u033C\u033B\x03\x02\x02\x02\u033C" +
    "\u033D\x03\x02\x02\x02\u033D\u033F\x03\x02\x02\x02\u033E\u0340\x07\f\x02" +
    "\x02\u033F\u033E\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0342" +
    "\x03\x02\x02\x02\u0341\u0343\x07\r\x02\x02\u0342\u0341\x03\x02\x02\x02" +
    "\u0342\u0343\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0345\x07" +
    "\x1F\x02\x02\u0345E\x03\x02\x02\x02\u0346\u0357\x05H%\x02\u0347\u0349" +
    "\x07\r\x02\x02\u0348\u0347\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02" +
    "\u0349\u034A\x03\x02\x02\x02\u034A\u034C\x07\x16\x02\x02\u034B\u034D\x07" +
    "\r\x02\x02\u034C\u034B\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D" +
    "\u034F\x03\x02\x02\x02\u034E\u0350\x07\f\x02\x02\u034F\u034E\x03\x02\x02" +
    "\x02\u034F\u0350\x03\x02\x02\x02\u0350\u0352\x03\x02\x02\x02\u0351\u0353" +
    "\x07\r\x02\x02\u0352\u0351\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02" +
    "\u0353\u0354\x03\x02\x02\x02\u0354\u0356\x05H%\x02\u0355\u0348\x03\x02" +
    "\x02\x02\u0356\u0359\x03\x02\x02\x02\u0357\u0355\x03\x02\x02\x02\u0357" +
    "\u0358\x03\x02\x02\x02\u0358G\x03\x02\x02\x02\u0359\u0357\x03\x02\x02" +
    "\x02\u035A\u035C\x05L\'\x02\u035B\u035D\x07\r\x02\x02\u035C\u035B\x03" +
    "\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E" +
    "\u0360\x07\x14\x02\x02\u035F\u0361\x07\r\x02\x02\u0360\u035F\x03\x02\x02" +
    "\x02\u0360\u0361\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362\u0363" +
    "\x05D#\x02\u0363\u036F\x03\x02\x02\x02\u0364\u0366\x05L\'\x02\u0365\u0367" +
    "\x07\r\x02\x02\u0366\u0365\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02" +
    "\u0367\u0368\x03\x02\x02\x02\u0368\u036A\x07\x14\x02\x02\u0369\u036B\x07" +
    "\r\x02\x02\u036A\u0369\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B" +
    "\u036C\x03\x02\x02\x02\u036C\u036D\x05L\'\x02\u036D\u036F\x03\x02\x02" +
    "\x02\u036E\u035A\x03\x02\x02\x02\u036E\u0364\x03\x02\x02\x02\u036FI\x03" +
    "\x02\x02\x02\u0370\u0372\x07 \x02\x02\u0371\u0373\x07\r\x02\x02\u0372" +
    "\u0371\x03\x02\x02\x02\u0372\u0373\x03\x02\x02\x02\u0373\u0375\x03\x02" +
    "\x02\x02\u0374\u0376\x07\f\x02\x02\u0375\u0374\x03\x02\x02\x02\u0375\u0376" +
    "\x03\x02\x02\x02\u0376\u0378\x03\x02\x02\x02\u0377\u0379\x07\r\x02\x02" +
    "\u0378\u0377\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379\u037B\x03" +
    "\x02\x02\x02\u037A\u037C\x05\x1E\x10\x02\u037B\u037A\x03\x02\x02\x02\u037B" +
    "\u037C\x03\x02\x02\x02\u037C\u037E\x03\x02\x02\x02\u037D\u037F\x07\r\x02" +
    "\x02\u037E\u037D\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u0381" +
    "\x03\x02\x02\x02\u0380\u0382\x07\f\x02\x02\u0381\u0380\x03\x02\x02\x02" +
    "\u0381\u0382\x03\x02\x02\x02\u0382\u0384\x03\x02\x02\x02\u0383\u0385\x07" +
    "\r\x02\x02\u0384\u0383\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385" +
    "\u0386\x03\x02\x02\x02\u0386\u0388\x07!\x02\x02\u0387\u0389\x07\r\x02" +
    "\x02\u0388\u0387\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389\u038B" +
    "\x03\x02\x02\x02\u038A\u038C\x07\f\x02\x02\u038B\u038A\x03\x02\x02\x02" +
    "\u038B\u038C\x03\x02\x02\x02\u038C\u038E\x03\x02\x02\x02\u038D\u038F\x07" +
    "\r\x02\x02\u038E\u038D\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F" +
    "\u0390\x03\x02\x02\x02\u0390\u0392\x07\x1B\x02\x02\u0391\u0393\x07\r\x02" +
    "\x02\u0392\u0391\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\u0395" +
    "\x03\x02\x02\x02\u0394\u0396\x07\f\x02\x02\u0395\u0394\x03\x02\x02\x02" +
    "\u0395\u0396\x03\x02\x02\x02\u0396\u0398\x03\x02\x02\x02\u0397\u0399\x07" +
    "\r\x02\x02\u0398\u0397\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399" +
    "\u039A\x03\x02\x02\x02\u039A\u039C\x05\x1A\x0E\x02\u039B\u039D\x07\x18" +
    "\x02\x02\u039C\u039B\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D" +
    "\u03B7\x03\x02\x02\x02\u039E\u03A0\x05 \x11\x02\u039F\u03A1\x07\r\x02" +
    "\x02\u03A0\u039F\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A3" +
    "\x03\x02\x02\x02\u03A2\u03A4\x07\f\x02\x02\u03A3\u03A2\x03\x02\x02\x02" +
    "\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A6\x03\x02\x02\x02\u03A5\u03A7\x07" +
    "\r\x02\x02\u03A6\u03A5\x03\x02\x02\x02\u03A6\u03A7\x03\x02\x02\x02\u03A7" +
    "\u03A8\x03\x02\x02\x02\u03A8\u03AA\x07\x1B\x02\x02\u03A9\u03AB\x07\r\x02" +
    "\x02\u03AA\u03A9\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03AD" +
    "\x03\x02\x02\x02\u03AC\u03AE\x07\f\x02\x02\u03AD\u03AC\x03\x02\x02\x02" +
    "\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03B0\x03\x02\x02\x02\u03AF\u03B1\x07" +
    "\r\x02\x02\u03B0\u03AF\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1" +
    "\u03B2\x03\x02\x02\x02\u03B2\u03B4\x05\x1A\x0E\x02\u03B3\u03B5\x07\x18" +
    "\x02\x02\u03B4\u03B3\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5" +
    "\u03B7\x03\x02\x02\x02\u03B6\u0370\x03\x02\x02\x02\u03B6\u039E\x03\x02" +
    "\x02\x02\u03B7K\x03\x02\x02\x02\u03B8\u03B9\t\x07\x02\x02\u03B9M\x03\x02" +
    "\x02\x02\u03BA\u03BC\x07 \x02\x02\u03BB\u03BD\x07\r\x02\x02\u03BC\u03BB" +
    "\x03\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02" +
    "\u03BE\u03C0\x05> \x02\u03BF\u03C1\x07\r\x02\x02\u03C0\u03BF\x03\x02\x02" +
    "\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C3" +
    "\x07!\x02\x02\u03C3O\x03\x02\x02\x02\u03C4\u03C5\x05R*\x02\u03C5Q\x03" +
    "\x02\x02\x02\u03C6\u03CA\x05T+\x02\u03C7\u03C9\x05X-\x02\u03C8\u03C7\x03" +
    "\x02\x02\x02\u03C9\u03CC\x03\x02\x02\x02\u03CA\u03C8\x03\x02\x02\x02\u03CA" +
    "\u03CB\x03\x02\x02\x02\u03CB\u03D5\x03\x02\x02\x02\u03CC\u03CA\x03\x02" +
    "\x02\x02\u03CD\u03D1\x05\\/\x02\u03CE\u03D0\x05X-\x02\u03CF\u03CE\x03" +
    "\x02\x02\x02\u03D0\u03D3\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D1" +
    "\u03D2\x03\x02\x02\x02\u03D2\u03D5\x03\x02\x02\x02\u03D3\u03D1\x03\x02" +
    "\x02\x02\u03D4\u03C6\x03\x02\x02\x02\u03D4\u03CD\x03\x02\x02\x02\u03D5" +
    "S\x03\x02\x02\x02\u03D6\u03D8\x07\r\x02\x02\u03D7\u03D6\x03\x02\x02\x02" +
    "\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03DA\x03\x02\x02\x02\u03D9\u03DB\x05" +
    "V,\x02\u03DA\u03D9\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DA" +
    "\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03E3\x03\x02\x02\x02" +
    "\u03DE\u03E2\x05V,\x02\u03DF\u03E2\x07\r\x02\x02\u03E0\u03E2\x07\x0F\x02" +
    "\x02\u03E1\u03DE\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E1\u03E0" +
    "\x03\x02\x02\x02\u03E2\u03E5\x03\x02\x02\x02\u03E3\u03E1\x03\x02\x02\x02" +
    "\u03E3\u03E4\x03\x02\x02\x02\u03E4U\x03\x02\x02\x02\u03E5\u03E3\x03\x02" +
    "\x02\x02\u03E6\u03F0\x07\x0E\x02\x02\u03E7\u03F0\x07\v\x02\x02\u03E8\u03F0" +
    "\x07\x13\x02\x02\u03E9\u03F0\x07\x1E\x02\x02\u03EA\u03F0\x07\x1F\x02\x02" +
    "\u03EB\u03F0\x07\x14\x02\x02\u03EC\u03F0\x07\x11\x02\x02\u03ED\u03F0\x07" +
    "\x15\x02\x02\u03EE\u03F0\x05L\'\x02\u03EF\u03E6\x03\x02\x02\x02\u03EF" +
    "\u03E7\x03\x02\x02\x02\u03EF\u03E8\x03\x02\x02\x02\u03EF\u03E9\x03\x02" +
    "\x02\x02\u03EF\u03EA\x03\x02\x02\x02\u03EF\u03EB\x03\x02\x02\x02\u03EF" +
    "\u03EC\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03EF\u03EE\x03\x02" +
    "\x02\x02\u03F0W\x03\x02\x02\x02\u03F1\u03F4\x05\\/\x02\u03F2\u03F4\x05" +
    "Z.\x02\u03F3\u03F1\x03\x02\x02\x02\u03F3\u03F2\x03\x02\x02\x02\u03F4Y" +
    "\x03\x02\x02\x02\u03F5\u03F9\x05V,\x02\u03F6\u03F9\x07\r\x02\x02\u03F7" +
    "\u03F9\x07\x0F\x02\x02\u03F8\u03F5\x03\x02\x02\x02\u03F8\u03F6\x03\x02" +
    "\x02\x02\u03F8\u03F7\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA" +
    "\u03F8\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB[\x03\x02\x02" +
    "\x02\u03FC\u03FD\x07\x1D\x02\x02\u03FD\u03FE\x05^0\x02\u03FE\u0400\x07" +
    "\r\x02\x02\u03FF\u0401\x05`1\x02\u0400\u03FF\x03\x02\x02\x02\u0400\u0401" +
    "\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0403\x07\x1F\x02\x02" +
    "\u0403]\x03\x02\x02\x02\u0404\u0405\x05\x16\f\x02\u0405_\x03\x02\x02\x02" +
    "\u0406\u0408\x05d3\x02\u0407\u0406\x03\x02\x02\x02\u0408\u0409\x03\x02" +
    "\x02\x02\u0409\u0407\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A" +
    "a\x03\x02\x02\x02\u040B\u040F\x07\x1E\x02\x02\u040C\u040E\x05d3\x02\u040D" +
    "\u040C\x03\x02\x02\x02\u040E\u0411\x03\x02\x02\x02\u040F\u040D\x03\x02" +
    "\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0412\x03\x02\x02\x02\u0411" +
    "\u040F\x03\x02\x02\x02\u0412\u0413\x07\x1F\x02\x02\u0413c\x03\x02\x02" +
    "\x02\u0414\u041E\x05b2\x02\u0415\u041A\x05f4\x02\u0416\u0417\x07\f\x02" +
    "\x02\u0417\u0419\x05f4\x02\u0418\u0416\x03\x02\x02\x02\u0419\u041C\x03" +
    "\x02\x02\x02\u041A\u0418\x03\x02\x02\x02\u041A\u041B\x03\x02\x02\x02\u041B" +
    "\u041E\x03\x02\x02\x02\u041C\u041A\x03\x02\x02\x02\u041D\u0414\x03\x02" +
    "\x02\x02\u041D\u0415\x03\x02";
XDocSyntaxParser._serializedATNSegment2 = "\x02\x02\u041Ee\x03\x02\x02\x02\u041F\u0420\t\b\x02\x02\u0420g\x03\x02" +
    "\x02\x02\xD6kot\x80\x87\x95\x99\xA2\xAE\xB3\xBD\xC1\xC9\xCD\xD1\xD5\xDD" +
    "\xE1\xE6\xF0\xF4\xF8\xFC\u0101\u0109\u010D\u0113\u0117\u011C\u0122\u012A" +
    "\u0131\u0138\u013A\u0140\u014F\u0153\u0156\u0159\u015D\u0160\u0163\u0168" +
    "\u016D\u0170\u0173\u0176\u0179\u017C\u017F\u0183\u0186\u0189\u018D\u0190" +
    "\u0193\u0197\u019B\u019E\u01A1\u01A5\u01A8\u01AB\u01AF\u01B1\u01B6\u01B9" +
    "\u01BE\u01C3\u01C7\u01CA\u01CD\u01D1\u01D5\u01DB\u01DF\u01E4\u01E9\u01ED" +
    "\u01F1\u01F5\u01FA\u01FF\u0203\u0207\u020B\u0210\u0215\u0219\u021D\u0221" +
    "\u0226\u0229\u022E\u0232\u0238\u023C\u0245\u0248\u024B\u024E\u0251\u0254" +
    "\u0257\u025D\u0261\u0264\u0267\u026C\u0271\u0274\u0278\u027E\u0281\u0284" +
    "\u0287\u028B\u028E\u0291\u0296\u029A\u029D\u02A0\u02A8\u02AA\u02B3\u02B7" +
    "\u02BA\u02BD\u02C1\u02C4\u02C7\u02CC\u02D4\u02DB\u02DD\u02E1\u02EA\u02EE" +
    "\u02F2\u02F7\u02FB\u02FE\u0300\u0308\u030B\u030E\u0311\u0315\u0318\u031B" +
    "\u0320\u0324\u0327\u032A\u0330\u0333\u0336\u0339\u033C\u033F\u0342\u0348" +
    "\u034C\u034F\u0352\u0357\u035C\u0360\u0366\u036A\u036E\u0372\u0375\u0378" +
    "\u037B\u037E\u0381\u0384\u0388\u038B\u038E\u0392\u0395\u0398\u039C\u03A0" +
    "\u03A3\u03A6\u03AA\u03AD\u03B0\u03B4\u03B6\u03BC\u03C0\u03CA\u03D1\u03D4" +
    "\u03D7\u03DC\u03E1\u03E3\u03EF\u03F3\u03F8\u03FA\u0400\u0409\u040F\u041A" +
    "\u041D";
XDocSyntaxParser._serializedATN = Utils.join([
    XDocSyntaxParser._serializedATNSegment0,
    XDocSyntaxParser._serializedATNSegment1,
    XDocSyntaxParser._serializedATNSegment2
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
    primaryType(i) {
        if (i === undefined) {
            return this.getRuleContexts(PrimaryTypeContext);
        }
        else {
            return this.getRuleContext(i, PrimaryTypeContext);
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
    tupleTypeSequence(i) {
        if (i === undefined) {
            return this.getRuleContexts(TupleTypeSequenceContext);
        }
        else {
            return this.getRuleContext(i, TupleTypeSequenceContext);
        }
    }
    EXTENDS() { return this.tryGetToken(XDocSyntaxParser.EXTENDS, 0); }
    AMP() { return this.tryGetToken(XDocSyntaxParser.AMP, 0); }
    PIPE() { return this.tryGetToken(XDocSyntaxParser.PIPE, 0); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWERvY1N5bnRheFBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9YRG9jU3ludGF4UGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyREFBMkQ7Ozs7Ozs7O0FBRzNELDBDQUF1QztBQUN2QyxrRUFBK0Q7QUFDL0QsZ0ZBQTZFO0FBQzdFLG9EQUE4QztBQUM5Qyx3RUFBcUU7QUFDckUsb0RBQStDO0FBQy9DLDRDQUF5QztBQUN6QyxrRUFBK0Q7QUFDL0Qsd0VBQXFFO0FBR3JFLHdFQUFxRTtBQUlyRSwwQ0FBdUM7QUFHdkMsNERBQXlEO0FBRXpELDZDQUE2QztBQU03QyxzQkFBOEIsU0FBUSxlQUFNO0lBdUkzQyxZQUFZLEtBQWtCO1FBQzdCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQWhCRCxJQUFXLFVBQVU7UUFDcEIsT0FBTyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7SUFDcEMsQ0FBQztJQUdELElBQVcsZUFBZSxLQUFhLE9BQU8scUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBR3RFLElBQVcsU0FBUyxLQUFlLE9BQU8sZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUd2RSxJQUFXLGFBQWEsS0FBYSxPQUFPLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFPdkUsYUFBYTtRQUNuQixJQUFJLFNBQVMsR0FBeUIsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNsRSxJQUFJLEdBQVcsQ0FBQztRQUNoQixJQUFJ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Q3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSx5RUFBeUU7SUFDekUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDJFQUEyRTtJQUMzRSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSw0RUFBNEU7SUFDNUUsdUVBQXVFO0lBQ3ZFLDRFQUE0RTtJQUM1RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx5RUFBeUU7SUFDekUseUVBQXlFO0lBQ3pFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUseUVBQXlFO0lBQ3pFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLHlFQUF5RTtJQUN6RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSx5RUFBeUU7SUFDekUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwQkFBMEIsQ0FBQztBQUNKLHVDQUFzQixHQUM3Qyx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUseUVBQXlFO0lBQ3pFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsMkVBQTJFO0lBQzNFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLDRFQUE0RTtJQUM1RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUseUVBQXlFO0lBQ3pFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUseUVBQXlFO0lBQ3pFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDJFQUEyRTtJQUMzRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx5RUFBeUU7SUFDekUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDJFQUEyRTtJQUMzRSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx5RUFBeUU7SUFDekUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUs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Q29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSBYRG9jU3ludGF4UGFyc2VyLmc0IGJ5IEFOVExSIDQuNi1TTkFQU0hPVFxuXG5cbmltcG9ydCB7IEFUTiB9IGZyb20gJ2FudGxyNHRzL2F0bi9BVE4nO1xuaW1wb3J0IHsgQVRORGVzZXJpYWxpemVyIH0gZnJvbSAnYW50bHI0dHMvYXRuL0FUTkRlc2VyaWFsaXplcic7XG5pbXBvcnQgeyBGYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24gfSBmcm9tICdhbnRscjR0cy9GYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24nO1xuaW1wb3J0IHsgTm90TnVsbCB9IGZyb20gJ2FudGxyNHRzL0RlY29yYXRvcnMnO1xuaW1wb3J0IHsgTm9WaWFibGVBbHRFeGNlcHRpb24gfSBmcm9tICdhbnRscjR0cy9Ob1ZpYWJsZUFsdEV4Y2VwdGlvbic7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJ2FudGxyNHRzL0RlY29yYXRvcnMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnYW50bHI0dHMvUGFyc2VyJztcbmltcG9ydCB7IFBhcnNlclJ1bGVDb250ZXh0IH0gZnJvbSAnYW50bHI0dHMvUGFyc2VyUnVsZUNvbnRleHQnO1xuaW1wb3J0IHsgUGFyc2VyQVROU2ltdWxhdG9yIH0gZnJvbSAnYW50bHI0dHMvYXRuL1BhcnNlckFUTlNpbXVsYXRvcic7XG5pbXBvcnQgeyBQYXJzZVRyZWVMaXN0ZW5lciB9IGZyb20gJ2FudGxyNHRzL3RyZWUvUGFyc2VUcmVlTGlzdGVuZXInO1xuaW1wb3J0IHsgUGFyc2VUcmVlVmlzaXRvciB9IGZyb20gJ2FudGxyNHRzL3RyZWUvUGFyc2VUcmVlVmlzaXRvcic7XG5pbXBvcnQgeyBSZWNvZ25pdGlvbkV4Y2VwdGlvbiB9IGZyb20gJ2FudGxyNHRzL1JlY29nbml0aW9uRXhjZXB0aW9uJztcbmltcG9ydCB7IFJ1bGVDb250ZXh0IH0gZnJvbSAnYW50bHI0dHMvUnVsZUNvbnRleHQnO1xuaW1wb3J0IHsgUnVsZVZlcnNpb24gfSBmcm9tICdhbnRscjR0cy9SdWxlVmVyc2lvbic7XG5pbXBvcnQgeyBUZXJtaW5hbE5vZGUgfSBmcm9tICdhbnRscjR0cy90cmVlL1Rlcm1pbmFsTm9kZSc7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gJ2FudGxyNHRzL1Rva2VuJztcbmltcG9ydCB7IFRva2VuU3RyZWFtIH0gZnJvbSAnYW50bHI0dHMvVG9rZW5TdHJlYW0nO1xuaW1wb3J0IHsgVm9jYWJ1bGFyeSB9IGZyb20gJ2FudGxyNHRzL1ZvY2FidWxhcnknO1xuaW1wb3J0IHsgVm9jYWJ1bGFyeUltcGwgfSBmcm9tICdhbnRscjR0cy9Wb2NhYnVsYXJ5SW1wbCc7XG5cbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ2FudGxyNHRzL21pc2MvVXRpbHMnO1xuXG5pbXBvcnQgeyBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIgfSBmcm9tICcuL1hEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcic7XG5pbXBvcnQgeyBYRG9jU3ludGF4UGFyc2VyVmlzaXRvciB9IGZyb20gJy4vWERvY1N5bnRheFBhcnNlclZpc2l0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBYRG9jU3ludGF4UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBOdW1iZXJMaXRlcmFsPTE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSW50ZWdlckxpdGVyYWw9Mjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBGbG9hdGluZ1BvaW50TGl0ZXJhbD0zO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJvb2xlYW5MaXRlcmFsPTQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ2hhcmFjdGVyTGl0ZXJhbD01O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFN0cmluZ0xpdGVyYWw9Njtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBOdWxsTGl0ZXJhbD03O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVYVEVORFM9ODtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBJRD05O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5FV0xJTkU9MTA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1BBQ0U9MTE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEVYVF9DT05URU5UPTEyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFUPTEzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBMVVM9MTQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTUlOVVM9MTU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1RBUj0xNjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBGT1JXQVJEX1NMQVNIPTE3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTE9OPTE4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBFUklPRD0xOTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBDT01NQT0yMDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBFUVVBTD0yMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBRVUVTVElPTj0yMjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBBTVA9MjM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUElQRT0yNDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBBUlJPVz0yNTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBFWENMQU1BVElPTj0yNjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBJTkxJTkVfVEFHX1NUQVJUPTI3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJSQUNFX09QRU49Mjg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQlJBQ0VfQ0xPU0U9Mjk7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUEFSRU5fT1BFTj0zMDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBQQVJFTl9DTE9TRT0zMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBCUkFDS0VUX09QRU49MzI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQlJBQ0tFVF9DTE9TRT0zMztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBMRVNTVEhBTj0zNDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBHUkVBVEVSVEhBTj0zNTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2RvY3VtZW50YXRpb24gPSAwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfYm9keSA9IDE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV93aGl0ZXNwYWNlID0gMjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2Fubm90YXRpb25zID0gMztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3RhZyA9IDQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV90YWdOYW1lID0gNTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3RhZ0lkZW50aWZpZXIgPSA2O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfcHJvcGVydHlUYWdJZGVudGlmaWVyID0gNztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29wdGlvbmFsVGFnSWRlbnRpZmllciA9IDg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9vcHRpb25hbFRhZ09ySWRlbnRpZmllciA9IDk7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9pZGVudGlmaWVyID0gMTA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9vcHRpb25hbElkZW50aWZpZXIgPSAxMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3R5cGUgPSAxMjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2xhbWJkYVR5cGUgPSAxMztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2Zvcm1hbFBhcmFtZXRlclNlcXVlbmNlID0gMTQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wYXJhbWV0ZXIgPSAxNTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3R1cGxlVHlwZSA9IDE2O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdHVwbGVUeXBlU2VxdWVuY2UgPSAxNztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3ByaW1hcnlUeXBlID0gMTg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9pZGVudGlmaWVyT3JLZXl3b3JkID0gMTk7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9rZXl3b3JkID0gMjA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wYXJlbnRoZXNpemVkVHlwZSA9IDIxO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdW5hcnlUeXBlID0gMjI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9vYmplY3RUeXBlID0gMjM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9vYmplY3RQYWlyU2VxdWVuY2VUeXBlID0gMjQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9vYmplY3RQYWlyVHlwZSA9IDI1O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfYXJyYXlUeXBlID0gMjY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9ub3RBcnJheVR5cGUgPSAyNztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3Byb3BlcnR5SWRlbnRpZmllciA9IDI4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyID0gMjk7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9leHByZXNzaW9uID0gMzA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV91bmFyeUV4cHJlc3Npb24gPSAzMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2FycmF5RXhwcmVzc2lvbiA9IDMyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0RXhwcmVzc2lvbiA9IDMzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbiA9IDM0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0UGFpckV4cHJlc3Npb24gPSAzNTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2xhbWJkYUV4cHJlc3Npb24gPSAzNjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2xpdGVyYWxFeHByZXNzaW9uID0gMzc7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wYXJlbnRoZXNpemVkRXhwcmVzc2lvbiA9IDM4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZGVzY3JpcHRpb24gPSAzOTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2Rlc2NyaXB0aW9uTGluZSA9IDQwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZGVzY3JpcHRpb25MaW5lU3RhcnQgPSA0MTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2Rlc2NyaXB0aW9uVGV4dCA9IDQyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZGVzY3JpcHRpb25MaW5lRWxlbWVudCA9IDQzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZGVzY3JpcHRpb25MaW5lVGV4dCA9IDQ0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfaW5saW5lVGFnID0gNDU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9pbmxpbmVUYWdOYW1lID0gNDY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9pbmxpbmVUYWdCb2R5ID0gNDc7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9icmFjZUV4cHJlc3Npb24gPSA0ODtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2JyYWNlQm9keSA9IDQ5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfYnJhY2VUZXh0ID0gNTA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgcnVsZU5hbWVzOiBzdHJpbmdbXSA9IFtcblx0XHRcImRvY3VtZW50YXRpb25cIiwgXCJib2R5XCIsIFwid2hpdGVzcGFjZVwiLCBcImFubm90YXRpb25zXCIsIFwidGFnXCIsIFwidGFnTmFtZVwiLCBcblx0XHRcInRhZ0lkZW50aWZpZXJcIiwgXCJwcm9wZXJ0eVRhZ0lkZW50aWZpZXJcIiwgXCJvcHRpb25hbFRhZ0lkZW50aWZpZXJcIiwgXCJvcHRpb25hbFRhZ09ySWRlbnRpZmllclwiLCBcblx0XHRcImlkZW50aWZpZXJcIiwgXCJvcHRpb25hbElkZW50aWZpZXJcIiwgXCJ0eXBlXCIsIFwibGFtYmRhVHlwZVwiLCBcImZvcm1hbFBhcmFtZXRlclNlcXVlbmNlXCIsIFxuXHRcdFwicGFyYW1ldGVyXCIsIFwidHVwbGVUeXBlXCIsIFwidHVwbGVUeXBlU2VxdWVuY2VcIiwgXCJwcmltYXJ5VHlwZVwiLCBcImlkZW50aWZpZXJPcktleXdvcmRcIiwgXG5cdFx0XCJrZXl3b3JkXCIsIFwicGFyZW50aGVzaXplZFR5cGVcIiwgXCJ1bmFyeVR5cGVcIiwgXCJvYmplY3RUeXBlXCIsIFwib2JqZWN0UGFpclNlcXVlbmNlVHlwZVwiLCBcblx0XHRcIm9iamVjdFBhaXJUeXBlXCIsIFwiYXJyYXlUeXBlXCIsIFwibm90QXJyYXlUeXBlXCIsIFwicHJvcGVydHlJZGVudGlmaWVyXCIsIFwib3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyXCIsIFxuXHRcdFwiZXhwcmVzc2lvblwiLCBcInVuYXJ5RXhwcmVzc2lvblwiLCBcImFycmF5RXhwcmVzc2lvblwiLCBcIm9iamVjdEV4cHJlc3Npb25cIiwgXG5cdFx0XCJvYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uXCIsIFwib2JqZWN0UGFpckV4cHJlc3Npb25cIiwgXCJsYW1iZGFFeHByZXNzaW9uXCIsIFxuXHRcdFwibGl0ZXJhbEV4cHJlc3Npb25cIiwgXCJwYXJlbnRoZXNpemVkRXhwcmVzc2lvblwiLCBcImRlc2NyaXB0aW9uXCIsIFwiZGVzY3JpcHRpb25MaW5lXCIsIFxuXHRcdFwiZGVzY3JpcHRpb25MaW5lU3RhcnRcIiwgXCJkZXNjcmlwdGlvblRleHRcIiwgXCJkZXNjcmlwdGlvbkxpbmVFbGVtZW50XCIsIFwiZGVzY3JpcHRpb25MaW5lVGV4dFwiLCBcblx0XHRcImlubGluZVRhZ1wiLCBcImlubGluZVRhZ05hbWVcIiwgXCJpbmxpbmVUYWdCb2R5XCIsIFwiYnJhY2VFeHByZXNzaW9uXCIsIFwiYnJhY2VCb2R5XCIsIFxuXHRcdFwiYnJhY2VUZXh0XCJcblx0XTtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBfTElURVJBTF9OQU1FUzogKHN0cmluZyB8IHVuZGVmaW5lZClbXSA9IFtcblx0XHR1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFxuXHRcdHVuZGVmaW5lZCwgXCInZXh0ZW5kcydcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIidAJ1wiLCBcblx0XHRcIicrJ1wiLCBcIictJ1wiLCBcIicqJ1wiLCBcIicvJ1wiLCBcIic6J1wiLCBcIicuJ1wiLCBcIicsJ1wiLCBcIic9J1wiLCBcIic/J1wiLCBcIicmJ1wiLCBcblx0XHRcIid8J1wiLCB1bmRlZmluZWQsIFwiJyEnXCIsIFwiJ3tAJ1wiLCBcIid7J1wiLCBcIid9J1wiLCBcIicoJ1wiLCBcIicpJ1wiLCBcIidbJ1wiLCBcIiddJ1wiLCBcblx0XHRcIic8J1wiLCBcIic+J1wiXG5cdF07XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9TWU1CT0xJQ19OQU1FUzogKHN0cmluZyB8IHVuZGVmaW5lZClbXSA9IFtcblx0XHR1bmRlZmluZWQsIFwiTnVtYmVyTGl0ZXJhbFwiLCBcIkludGVnZXJMaXRlcmFsXCIsIFwiRmxvYXRpbmdQb2ludExpdGVyYWxcIiwgXG5cdFx0XCJCb29sZWFuTGl0ZXJhbFwiLCBcIkNoYXJhY3RlckxpdGVyYWxcIiwgXCJTdHJpbmdMaXRlcmFsXCIsIFwiTnVsbExpdGVyYWxcIiwgXG5cdFx0XCJFWFRFTkRTXCIsIFwiSURcIiwgXCJORVdMSU5FXCIsIFwiU1BBQ0VcIiwgXCJURVhUX0NPTlRFTlRcIiwgXCJBVFwiLCBcIlBMVVNcIiwgXCJNSU5VU1wiLCBcblx0XHRcIlNUQVJcIiwgXCJGT1JXQVJEX1NMQVNIXCIsIFwiQ09MT05cIiwgXCJQRVJJT0RcIiwgXCJDT01NQVwiLCBcIkVRVUFMXCIsIFwiUVVFU1RJT05cIiwgXG5cdFx0XCJBTVBcIiwgXCJQSVBFXCIsIFwiQVJST1dcIiwgXCJFWENMQU1BVElPTlwiLCBcIklOTElORV9UQUdfU1RBUlRcIiwgXCJCUkFDRV9PUEVOXCIsIFxuXHRcdFwiQlJBQ0VfQ0xPU0VcIiwgXCJQQVJFTl9PUEVOXCIsIFwiUEFSRU5fQ0xPU0VcIiwgXCJCUkFDS0VUX09QRU5cIiwgXCJCUkFDS0VUX0NMT1NFXCIsIFxuXHRcdFwiTEVTU1RIQU5cIiwgXCJHUkVBVEVSVEhBTlwiXG5cdF07XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVk9DQUJVTEFSWTogVm9jYWJ1bGFyeSA9IG5ldyBWb2NhYnVsYXJ5SW1wbChYRG9jU3ludGF4UGFyc2VyLl9MSVRFUkFMX05BTUVTLCBYRG9jU3ludGF4UGFyc2VyLl9TWU1CT0xJQ19OQU1FUywgW10pO1xuXG5cdEBPdmVycmlkZVxuXHRATm90TnVsbFxuXHRwdWJsaWMgZ2V0IHZvY2FidWxhcnkoKTogVm9jYWJ1bGFyeSB7XG5cdFx0cmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuVk9DQUJVTEFSWTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZ2V0IGdyYW1tYXJGaWxlTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJYRG9jU3ludGF4UGFyc2VyLmc0XCI7IH1cblxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGdldCBydWxlTmFtZXMoKTogc3RyaW5nW10geyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5ydWxlTmFtZXM7IH1cblxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGdldCBzZXJpYWxpemVkQVROKCk6IHN0cmluZyB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLl9zZXJpYWxpemVkQVROOyB9XG5cblx0Y29uc3RydWN0b3IoaW5wdXQ6IFRva2VuU3RyZWFtKSB7XG5cdFx0c3VwZXIoaW5wdXQpO1xuXHRcdHRoaXMuX2ludGVycCA9IG5ldyBQYXJzZXJBVE5TaW11bGF0b3IoWERvY1N5bnRheFBhcnNlci5fQVROLCB0aGlzKTtcblx0fVxuXHRcblx0cHVibGljIGRvY3VtZW50YXRpb24oKTogRG9jdW1lbnRhdGlvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IERvY3VtZW50YXRpb25Db250ZXh0ID0gbmV3IERvY3VtZW50YXRpb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZG9jdW1lbnRhdGlvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTA5O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkVPRjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkVPRik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTkVXTElORTpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TUEFDRTpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5BVDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMztcblx0XHRcdFx0dGhpcy5ib2R5KCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwNDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwNztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkVPRik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGJvZHkoKTogQm9keUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEJvZHlDb250ZXh0ID0gbmV3IEJvZHlDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAyLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYm9keSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMTQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdHdoaWxlIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUgfHwgX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDExMTtcblx0XHRcdFx0dGhpcy53aGl0ZXNwYWNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTE2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDExNztcblx0XHRcdHRoaXMuYW5ub3RhdGlvbnMoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgd2hpdGVzcGFjZSgpOiBXaGl0ZXNwYWNlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogV2hpdGVzcGFjZUNvbnRleHQgPSBuZXcgV2hpdGVzcGFjZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV93aGl0ZXNwYWNlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDExOTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCAhKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSB8fCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSApIHtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBhbm5vdGF0aW9ucygpOiBBbm5vdGF0aW9uc0NvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEFubm90YXRpb25zQ29udGV4dCA9IG5ldyBBbm5vdGF0aW9uc0NvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDYsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9hbm5vdGF0aW9ucyk7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMjE7XG5cdFx0XHR0aGlzLnRhZygpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDEyNjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzLHRoaXMuX2N0eCk7XG5cdFx0XHR3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICkge1xuXHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEyMjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEyMztcblx0XHRcdFx0XHR0aGlzLnRhZygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMjg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDMsdGhpcy5fY3R4KTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdGFnKCk6IFRhZ0NvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFRhZ0NvbnRleHQgPSBuZXcgVGFnQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOCwgWERvY1N5bnRheFBhcnNlci5SVUxFX3RhZyk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMjg4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMjksdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEyOTtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEzMDtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEzMjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEzNTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk1JTlVTKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEzNjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEzNztcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDMpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzk7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQxO1xuXHRcdFx0XHR0aGlzLnRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA0KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQzO1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0NDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0NTtcblx0XHRcdFx0dGhpcy50YWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNDc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxNDY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQ5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuRVFVQUwpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTUxO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTUwO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1Mztcblx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDUpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNTU7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTU2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTU3O1xuXHRcdFx0XHR0aGlzLnRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1ODtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2MDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTU5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTYyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTUlOVVMpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTYzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTY0O1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2Njtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNjc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNjg7XG5cdFx0XHRcdHRoaXMudGFnSWRlbnRpZmllcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTY5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTcwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuRVFVQUwpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTcyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTcxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3NDtcblx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTc1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTc3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxNzY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNzk7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODE7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA3OlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA3KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTgzO1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE4NDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE4NTtcblx0XHRcdFx0dGhpcy50YWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxODY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTg5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTkxO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTkwO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5Mztcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDg6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDgpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTU7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTk2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTk3O1xuXHRcdFx0XHR0aGlzLnRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5OTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5ODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjA1O1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjA5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuRVFVQUwpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjExO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjEwO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxMztcblx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDk6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDkpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMTU7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjE2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjE3O1xuXHRcdFx0XHR0aGlzLnRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxOTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjI1O1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjY7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIyNztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzMDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk1JTlVTKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzMTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzMjtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDEwOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxMCk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzNDtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzY7XG5cdFx0XHRcdHRoaXMudGFnSWRlbnRpZmllcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjM4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjM3O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI0MDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI0Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI0MTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDQ7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI0Njtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI0NTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDg7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5FUVVBTCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjUyO1xuXHRcdFx0XHR0aGlzLmV4cHJlc3Npb24oMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1NDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1Nztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk1JTlVTKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1ODtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1OTtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDExOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2MTtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNjM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyNjI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjY1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjY3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjY2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2OTtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDEyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI3MTtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNzM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyNzI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjc1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjc3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjc2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI3OTtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjgwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjgyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyODE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyODQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyODU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyODY7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdGFnTmFtZSgpOiBUYWdOYW1lQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogVGFnTmFtZUNvbnRleHQgPSBuZXcgVGFnTmFtZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDEwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdGFnTmFtZSk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDI5MDtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5BVCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gMjkxO1xuXHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHRhZ0lkZW50aWZpZXIoKTogVGFnSWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFRhZ0lkZW50aWZpZXJDb250ZXh0ID0gbmV3IFRhZ0lkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxMiwgWERvY1N5bnRheFBhcnNlci5SVUxFX3RhZ0lkZW50aWZpZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMjk2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMzAsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI5Mztcblx0XHRcdFx0dGhpcy5wcm9wZXJ0eVRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjk0O1xuXHRcdFx0XHR0aGlzLm9wdGlvbmFsVGFnSWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDMpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyOTU7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBwcm9wZXJ0eVRhZ0lkZW50aWZpZXIoKTogUHJvcGVydHlUYWdJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogUHJvcGVydHlUYWdJZGVudGlmaWVyQ29udGV4dCA9IG5ldyBQcm9wZXJ0eVRhZ0lkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxNCwgWERvY1N5bnRheFBhcnNlci5SVUxFX3Byb3BlcnR5VGFnSWRlbnRpZmllcik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzEyO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMzMsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI5ODtcblx0XHRcdFx0dGhpcy5vcHRpb25hbFRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwMTsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyOTk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBFUklPRCk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwMDtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzAzOyBcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdH0gd2hpbGUgKCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlBFUklPRCApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMDU7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzA4OyBcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwNjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzA3O1xuXHRcdFx0XHRcdHRoaXMub3B0aW9uYWxUYWdPcklkZW50aWZpZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzMTA7IFxuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0fSB3aGlsZSAoIF9sYT09PVhEb2NTeW50YXhQYXJzZXIuUEVSSU9EICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9wdGlvbmFsVGFnSWRlbnRpZmllcigpOiBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0ID0gbmV3IE9wdGlvbmFsVGFnSWRlbnRpZmllckNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDE2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb3B0aW9uYWxUYWdJZGVudGlmaWVyKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzE0O1xuXHRcdFx0dGhpcy5vcHRpb25hbElkZW50aWZpZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb3B0aW9uYWxUYWdPcklkZW50aWZpZXIoKTogT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQgPSBuZXcgT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxOCwgWERvY1N5bnRheFBhcnNlci5SVUxFX29wdGlvbmFsVGFnT3JJZGVudGlmaWVyKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDMxODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDM0LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMTY7XG5cdFx0XHRcdHRoaXMub3B0aW9uYWxUYWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMxNztcblx0XHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IElkZW50aWZpZXJDb250ZXh0ID0gbmV3IElkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAyMCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2lkZW50aWZpZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAzMjA7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuSUQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvcHRpb25hbElkZW50aWZpZXIoKTogT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCA9IG5ldyBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAyMiwgWERvY1N5bnRheFBhcnNlci5SVUxFX29wdGlvbmFsSWRlbnRpZmllcik7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDMyMjtcblx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDMyMztcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5RVUVTVElPTik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0O1xuXHRwdWJsaWMgdHlwZShfcDogbnVtYmVyKTogVHlwZUNvbnRleHQ7XG5cdFxuXHRwdWJsaWMgdHlwZShfcD86IG51bWJlcik6IFR5cGVDb250ZXh0IHtcblx0XHRpZiAoX3AgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0X3AgPSAwO1xuXHRcdH1cblxuXHRcdGxldCBfcGFyZW50Y3R4OiBQYXJzZXJSdWxlQ29udGV4dCA9IHRoaXMuX2N0eDtcblx0XHRsZXQgX3BhcmVudFN0YXRlOiBudW1iZXIgPSB0aGlzLnN0YXRlO1xuXHRcdGxldCBfbG9jYWxjdHg6IFR5cGVDb250ZXh0ID0gbmV3IFR5cGVDb250ZXh0KHRoaXMuX2N0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRsZXQgX3ByZXZjdHg6IFR5cGVDb250ZXh0ID0gX2xvY2FsY3R4O1xuXHRcdGxldCBfc3RhcnRTdGF0ZTogbnVtYmVyID0gMjQ7XG5cdFx0dGhpcy5lbnRlclJlY3Vyc2lvblJ1bGUoX2xvY2FsY3R4LCAyNCwgWERvY1N5bnRheFBhcnNlci5SVUxFX3R5cGUsIF9wKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAzMzM7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzNSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMjY7XG5cdFx0XHRcdHRoaXMubGFtYmRhVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMyNztcblx0XHRcdFx0dGhpcy50dXBsZVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMjg7XG5cdFx0XHRcdHRoaXMucHJpbWFyeVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMjk7XG5cdFx0XHRcdHRoaXMucGFyZW50aGVzaXplZFR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMzA7XG5cdFx0XHRcdHRoaXMudW5hcnlUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNjpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzMxO1xuXHRcdFx0XHR0aGlzLm9iamVjdFR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA3OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMzI7XG5cdFx0XHRcdHRoaXMuYXJyYXlUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jdHguX3N0b3AgPSB0aGlzLl9pbnB1dC50cnlMVCgtMSk7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzU4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDQyLHRoaXMuX2N0eCk7XG5cdFx0XHR3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICkge1xuXHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5fcGFyc2VMaXN0ZW5lcnMhPW51bGwgKSB0aGlzLnRyaWdnZXJFeGl0UnVsZUV2ZW50KCk7XG5cdFx0XHRcdFx0X3ByZXZjdHggPSBfbG9jYWxjdHg7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRfbG9jYWxjdHggPSBuZXcgVHlwZUNvbnRleHQoX3BhcmVudGN0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRcdFx0XHR0aGlzLnB1c2hOZXdSZWN1cnNpb25Db250ZXh0KF9sb2NhbGN0eCwgX3N0YXJ0U3RhdGUsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90eXBlKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzM1O1xuXHRcdFx0XHRcdGlmICghKHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA4KSkpIHRocm93IG5ldyBGYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24odGhpcywgXCJ0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgOClcIik7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMzNztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMzYsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzM2O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzQwO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzM5O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNDM7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzQyO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzQ1O1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmICggIShfbGE9PT1YRG9jU3ludGF4UGFyc2VyLkFNUCB8fCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlBJUEUpICkge1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzQ3O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzOSx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNDY7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNTA7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNDk7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM1Mztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNTI7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNTU7XG5cdFx0XHRcdFx0dGhpcy50eXBlKDkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNjA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDQyLHRoaXMuX2N0eCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMudW5yb2xsUmVjdXJzaW9uQ29udGV4dHMoX3BhcmVudGN0eCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBsYW1iZGFUeXBlKCk6IExhbWJkYVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBMYW1iZGFUeXBlQ29udGV4dCA9IG5ldyBMYW1iZGFUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMjYsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9sYW1iZGFUeXBlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA0MzE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2MTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzYzO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDQzLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2Mjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzY2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDQ0LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2NTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNjk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNDUsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzY4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNzI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLklEKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNzE7XG5cdFx0XHRcdFx0dGhpcy5mb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNzU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNDcsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzc0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNzg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM3Nztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM4MTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM4MDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzODM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QQVJFTl9DTE9TRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzODU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNTAsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzg0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzODg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM4Nztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5MTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5MDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5BUlJPVyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNTMsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzk0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5Nztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQwMTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQwMDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDM7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQwNTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw1Nix0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDQ7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlFVRVNUSU9OKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQwNztcblx0XHRcdFx0dGhpcy5wYXJhbWV0ZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQwOTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw1Nyx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxMjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDExO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDE1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDE0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxNztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkFSUk9XKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxOTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw2MCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0MTg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyMjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDIxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDI1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDI0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyNztcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDI5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDYzLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBmb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSgpOiBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlQ29udGV4dCA9IG5ldyBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDI4LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDMzO1xuXHRcdFx0dGhpcy5wYXJhbWV0ZXIoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA0NDQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdHdoaWxlIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLkNPTU1BKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDM0O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDM2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0MzU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0Mzk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0Mzg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDQxO1xuXHRcdFx0XHR0aGlzLnBhcmFtZXRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ0Njtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgcGFyYW1ldGVyKCk6IFBhcmFtZXRlckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFBhcmFtZXRlckNvbnRleHQgPSBuZXcgUGFyYW1ldGVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMzAsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wYXJhbWV0ZXIpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDQ3O1xuXHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDU2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNzAsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDQ5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDQ4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ1MTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ1Mztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ1Mjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTU7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdHVwbGVUeXBlKCk6IFR1cGxlVHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFR1cGxlVHlwZUNvbnRleHQgPSBuZXcgVHVwbGVUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMzIsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90dXBsZVR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDU5O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5JRCkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTg7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA0NjE7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTEVTU1RIQU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ2Mztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDYyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA0NjU7XG5cdFx0XHR0aGlzLnR1cGxlVHlwZVNlcXVlbmNlKCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDY3O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NjY7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ2OTtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5HUkVBVEVSVEhBTik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHR1cGxlVHlwZVNlcXVlbmNlKCk6IFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogVHVwbGVUeXBlU2VxdWVuY2VDb250ZXh0ID0gbmV3IFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMzQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90dXBsZVR5cGVTZXF1ZW5jZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDU1MTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDkyLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NzE7XG5cdFx0XHRcdHRoaXMucHJpbWFyeVR5cGUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ3Mztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw3NCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0NzI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ4Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNzYsdGhpcy5fY3R4KTtcblx0XHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ3NTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDc3O1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0NzY7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ3OTtcblx0XHRcdFx0XHRcdHRoaXMudHVwbGVUeXBlU2VxdWVuY2UoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0ODQ7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw3Nix0aGlzLl9jdHgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ4NTtcblx0XHRcdFx0dGhpcy5wcmltYXJ5VHlwZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDg3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDg2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ4OTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkVYVEVORFMpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDkxO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDkwO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ5Mztcblx0XHRcdFx0dGhpcy5wcmltYXJ5VHlwZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDk1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDc5LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ5NDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTA0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw4MSx0aGlzLl9jdHgpO1xuXHRcdFx0XHR3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICkge1xuXHRcdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDk3O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0OTk7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ5ODtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTAxO1xuXHRcdFx0XHRcdFx0dGhpcy50dXBsZVR5cGVTZXF1ZW5jZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUwNjtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDgxLHRoaXMuX2N0eCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAzKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTA3O1xuXHRcdFx0XHR0aGlzLnByaW1hcnlUeXBlKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MDk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1MDg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTExO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQU1QKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUxMztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUxMjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MTU7XG5cdFx0XHRcdHRoaXMucHJpbWFyeVR5cGUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUxNztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw4NCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1MTY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUyNjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsODYsdGhpcy5fY3R4KTtcblx0XHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUxOTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTIxO1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1MjA7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUyMztcblx0XHRcdFx0XHRcdHRoaXMudHVwbGVUeXBlU2VxdWVuY2UoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1Mjg7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw4Nix0aGlzLl9jdHgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNCk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUyOTtcblx0XHRcdFx0dGhpcy5wcmltYXJ5VHlwZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTMxO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTMwO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzMztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBJUEUpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTM1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTM0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzNztcblx0XHRcdFx0dGhpcy5wcmltYXJ5VHlwZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTM5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDg5LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTQ4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw5MSx0aGlzLl9jdHgpO1xuXHRcdFx0XHR3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICkge1xuXHRcdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTQxO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1NDM7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU0Mjtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTQ1O1xuXHRcdFx0XHRcdFx0dGhpcy50dXBsZVR5cGVTZXF1ZW5jZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU1MDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDkxLHRoaXMuX2N0eCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgcHJpbWFyeVR5cGUoKTogUHJpbWFyeVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBQcmltYXJ5VHlwZUNvbnRleHQgPSBuZXcgUHJpbWFyeVR5cGVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAzNiwgWERvY1N5bnRheFBhcnNlci5SVUxFX3ByaW1hcnlUeXBlKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDU1Njtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDkzLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NTM7XG5cdFx0XHRcdHRoaXMub3B0aW9uYWxJZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU1NDtcblx0XHRcdFx0dGhpcy5wcm9wZXJ0eUlkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAzKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTU1O1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXJPcktleXdvcmQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgaWRlbnRpZmllck9yS2V5d29yZCgpOiBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogSWRlbnRpZmllck9yS2V5d29yZENvbnRleHQgPSBuZXcgSWRlbnRpZmllck9yS2V5d29yZENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDM4LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfaWRlbnRpZmllck9yS2V5d29yZCk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA1NjA7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuSUQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NTg7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTU5O1xuXHRcdFx0XHR0aGlzLmtleXdvcmQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMga2V5d29yZCgpOiBLZXl3b3JkQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogS2V5d29yZENvbnRleHQgPSBuZXcgS2V5d29yZENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDQwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfa2V5d29yZCk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDU2Mjtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHBhcmVudGhlc2l6ZWRUeXBlKCk6IFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogUGFyZW50aGVzaXplZFR5cGVDb250ZXh0ID0gbmV3IFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNDIsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wYXJlbnRoZXNpemVkVHlwZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA1NjQ7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTY2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NjU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDU2ODtcblx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA1NzA7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU2OTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNTcyO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBBUkVOX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdW5hcnlUeXBlKCk6IFVuYXJ5VHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFVuYXJ5VHlwZUNvbnRleHQgPSBuZXcgVW5hcnlUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNDQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV91bmFyeVR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTc0O1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoICEoX2xhPT09WERvY1N5bnRheFBhcnNlci5TVEFSIHx8IF9sYT09PVhEb2NTeW50YXhQYXJzZXIuQU1QKSApIHtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDU3NTtcblx0XHRcdHRoaXMucHJpbWFyeVR5cGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb2JqZWN0VHlwZSgpOiBPYmplY3RUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT2JqZWN0VHlwZUNvbnRleHQgPSBuZXcgT2JqZWN0VHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDQ2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0VHlwZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA1Nzc7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTc5O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsOTcsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTc4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDU4Mjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDk4LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU4MTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDU4NTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDk5LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU4NDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA1ODg7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICgoKCgoX2xhIC0gNykpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCAoX2xhIC0gNykpICYgKCgxIDw8IChYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuSUQgLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5TVEFSIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuQU1QIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTiAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4gLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU4gLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5MRVNTVEhBTiAtIDcpKSkpICE9PSAwKSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODc7XG5cdFx0XHRcdHRoaXMub2JqZWN0UGFpclNlcXVlbmNlVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1OTE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMDEsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTkwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDU5NDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1OTM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNTk3O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1OTY7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDU5OTtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9iamVjdFBhaXJTZXF1ZW5jZVR5cGUoKTogT2JqZWN0UGFpclNlcXVlbmNlVHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9iamVjdFBhaXJTZXF1ZW5jZVR5cGVDb250ZXh0ID0gbmV3IE9iamVjdFBhaXJTZXF1ZW5jZVR5cGVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA0OCwgWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdFBhaXJTZXF1ZW5jZVR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjAxO1xuXHRcdFx0dGhpcy5vYmplY3RQYWlyVHlwZSgpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDYwMztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEwNCx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MDI7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNjE4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR3aGlsZSAoX2xhPT09WERvY1N5bnRheFBhcnNlci5DT01NQSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYwNTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYwNztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMDUsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjA2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MTA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYwOTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYxMztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYxMjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MTU7XG5cdFx0XHRcdHRoaXMub2JqZWN0UGFpclR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MjA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9iamVjdFBhaXJUeXBlKCk6IE9iamVjdFBhaXJUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT2JqZWN0UGFpclR5cGVDb250ZXh0ID0gbmV3IE9iamVjdFBhaXJUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNTAsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RQYWlyVHlwZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA2MjE7XG5cdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjIzO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5RVUVTVElPTikge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MjI7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5RVUVTVElPTik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDYyNjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjI1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA2Mjg7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDYzMDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjI5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA2MzI7XG5cdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGFycmF5VHlwZSgpOiBBcnJheVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBBcnJheVR5cGVDb250ZXh0ID0gbmV3IEFycmF5VHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDUyLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYXJyYXlUeXBlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjgwO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfT1BFTjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYzNDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfT1BFTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MzY7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTEyLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYzNTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2Mzk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTEzLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYzODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjQyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDExNCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NDE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjQ1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoKCgoKF9sYSAtIDcpKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgKF9sYSAtIDcpKSAmICgoMSA8PCAoWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbCAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLklEIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuU1RBUiAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLkFNUCAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4gLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9PUEVOIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuTEVTU1RIQU4gLSA3KSkpKSAhPT0gMCkpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY0NDtcblx0XHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY2MDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0d2hpbGUgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuQ09NTUEpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NDc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjQ5O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMTYsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjQ4O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NTI7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjUxO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjU1O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjU0O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NTc7XG5cdFx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY2Mjtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY2NDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMjAsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjYzO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY2Nztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY2Njtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NzA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY2OTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3Mjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfQ0xPU0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklEOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlNUQVI6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQU1QOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU46XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTjpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5MRVNTVEhBTjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3Mztcblx0XHRcdFx0dGhpcy5ub3RBcnJheVR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NzY7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSAxO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0c3dpdGNoIChfYWx0KSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3NDtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU4pO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3NTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX0NMT1NFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2Nzg7IFxuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTIzLHRoaXMuX2N0eCk7XG5cdFx0XHRcdH0gd2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblxuXHRwdWJsaWMgbm90QXJyYXlUeXBlKCk6IE5vdEFycmF5VHlwZUNvbnRleHQ7XG5cdHB1YmxpYyBub3RBcnJheVR5cGUoX3A6IG51bWJlcik6IE5vdEFycmF5VHlwZUNvbnRleHQ7XG5cdFxuXHRwdWJsaWMgbm90QXJyYXlUeXBlKF9wPzogbnVtYmVyKTogTm90QXJyYXlUeXBlQ29udGV4dCB7XG5cdFx0aWYgKF9wID09PSB1bmRlZmluZWQpIHtcblx0XHRcdF9wID0gMDtcblx0XHR9XG5cblx0XHRsZXQgX3BhcmVudGN0eDogUGFyc2VyUnVsZUNvbnRleHQgPSB0aGlzLl9jdHg7XG5cdFx0bGV0IF9wYXJlbnRTdGF0ZTogbnVtYmVyID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgX2xvY2FsY3R4OiBOb3RBcnJheVR5cGVDb250ZXh0ID0gbmV3IE5vdEFycmF5VHlwZUNvbnRleHQodGhpcy5fY3R4LCBfcGFyZW50U3RhdGUpO1xuXHRcdGxldCBfcHJldmN0eDogTm90QXJyYXlUeXBlQ29udGV4dCA9IF9sb2NhbGN0eDtcblx0XHRsZXQgX3N0YXJ0U3RhdGU6IG51bWJlciA9IDU0O1xuXHRcdHRoaXMuZW50ZXJSZWN1cnNpb25SdWxlKF9sb2NhbGN0eCwgNTQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9ub3RBcnJheVR5cGUsIF9wKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA2ODk7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMjUsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjgzO1xuXHRcdFx0XHR0aGlzLmxhbWJkYVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2ODQ7XG5cdFx0XHRcdHRoaXMudHVwbGVUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjg1O1xuXHRcdFx0XHR0aGlzLnByaW1hcnlUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjg2O1xuXHRcdFx0XHR0aGlzLnBhcmVudGhlc2l6ZWRUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjg3O1xuXHRcdFx0XHR0aGlzLnVuYXJ5VHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDY6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY4ODtcblx0XHRcdFx0dGhpcy5vYmplY3RUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jdHguX3N0b3AgPSB0aGlzLl9pbnB1dC50cnlMVCgtMSk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzE0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEzMix0aGlzLl9jdHgpO1xuXHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX3BhcnNlTGlzdGVuZXJzIT1udWxsICkgdGhpcy50cmlnZ2VyRXhpdFJ1bGVFdmVudCgpO1xuXHRcdFx0XHRcdF9wcmV2Y3R4ID0gX2xvY2FsY3R4O1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0X2xvY2FsY3R4ID0gbmV3IE5vdEFycmF5VHlwZUNvbnRleHQoX3BhcmVudGN0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRcdFx0XHR0aGlzLnB1c2hOZXdSZWN1cnNpb25Db250ZXh0KF9sb2NhbGN0eCwgX3N0YXJ0U3RhdGUsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9ub3RBcnJheVR5cGUpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2OTE7XG5cdFx0XHRcdFx0aWYgKCEodGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDcpKSkgdGhyb3cgbmV3IEZhaWxlZFByZWRpY2F0ZUV4Y2VwdGlvbih0aGlzLCBcInRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA3KVwiKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjkzO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMjYsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjkyO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjk2O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjk1O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2OTk7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjk4O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzAxO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmICggIShfbGE9PT1YRG9jU3ludGF4UGFyc2VyLkFNUCB8fCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlBJUEUpICkge1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzAzO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMjksdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzAyO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzA2O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzA1O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3MDk7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzA4O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzExO1xuXHRcdFx0XHRcdHRoaXMubm90QXJyYXlUeXBlKDgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MTY7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEzMix0aGlzLl9jdHgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLnVucm9sbFJlY3Vyc2lvbkNvbnRleHRzKF9wYXJlbnRjdHgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgcHJvcGVydHlJZGVudGlmaWVyKCk6IFByb3BlcnR5SWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFByb3BlcnR5SWRlbnRpZmllckNvbnRleHQgPSBuZXcgUHJvcGVydHlJZGVudGlmaWVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNTYsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wcm9wZXJ0eUlkZW50aWZpZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDczMTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEzNSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzE3O1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcyMDsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IDE7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRzd2l0Y2ggKF9hbHQpIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzE4O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBFUklPRCk7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzE5O1xuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3MjI7IFxuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTMzLHRoaXMuX2N0eCk7XG5cdFx0XHRcdH0gd2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MjQ7XG5cdFx0XHRcdHRoaXMub3B0aW9uYWxJZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3Mjc7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSAxO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0c3dpdGNoIChfYWx0KSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcyNTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QRVJJT0QpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcyNjtcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzI5OyBcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEzNCx0aGlzLl9jdHgpO1xuXHRcdFx0XHR9IHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKCk6IE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllckNvbnRleHQgPSBuZXcgT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNTgsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzM1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTM2LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MzM7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MzQ7XG5cdFx0XHRcdHRoaXMub3B0aW9uYWxJZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXG5cdHB1YmxpYyBleHByZXNzaW9uKCk6IEV4cHJlc3Npb25Db250ZXh0O1xuXHRwdWJsaWMgZXhwcmVzc2lvbihfcDogbnVtYmVyKTogRXhwcmVzc2lvbkNvbnRleHQ7XG5cdFxuXHRwdWJsaWMgZXhwcmVzc2lvbihfcD86IG51bWJlcik6IEV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRpZiAoX3AgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0X3AgPSAwO1xuXHRcdH1cblxuXHRcdGxldCBfcGFyZW50Y3R4OiBQYXJzZXJSdWxlQ29udGV4dCA9IHRoaXMuX2N0eDtcblx0XHRsZXQgX3BhcmVudFN0YXRlOiBudW1iZXIgPSB0aGlzLnN0YXRlO1xuXHRcdGxldCBfbG9jYWxjdHg6IEV4cHJlc3Npb25Db250ZXh0ID0gbmV3IEV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRsZXQgX3ByZXZjdHg6IEV4cHJlc3Npb25Db250ZXh0ID0gX2xvY2FsY3R4O1xuXHRcdGxldCBfc3RhcnRTdGF0ZTogbnVtYmVyID0gNjA7XG5cdFx0dGhpcy5lbnRlclJlY3Vyc2lvblJ1bGUoX2xvY2FsY3R4LCA2MCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2V4cHJlc3Npb24sIF9wKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA3NDQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMzcsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzM4O1xuXHRcdFx0XHR0aGlzLnVuYXJ5RXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDczOTtcblx0XHRcdFx0dGhpcy5hcnJheUV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3NDA7XG5cdFx0XHRcdHRoaXMub2JqZWN0RXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc0MTtcblx0XHRcdFx0dGhpcy5sYW1iZGFFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzQyO1xuXHRcdFx0XHR0aGlzLmxpdGVyYWxFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNjpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzQzO1xuXHRcdFx0XHR0aGlzLnBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jdHguX3N0b3AgPSB0aGlzLl9pbnB1dC50cnlMVCgtMSk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzY2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE0Myx0aGlzLl9jdHgpO1xuXHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX3BhcnNlTGlzdGVuZXJzIT1udWxsICkgdGhpcy50cmlnZ2VyRXhpdFJ1bGVFdmVudCgpO1xuXHRcdFx0XHRcdF9wcmV2Y3R4ID0gX2xvY2FsY3R4O1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzY0O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNDIsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRfbG9jYWxjdHggPSBuZXcgRXhwcmVzc2lvbkNvbnRleHQoX3BhcmVudGN0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRcdFx0XHRcdHRoaXMucHVzaE5ld1JlY3Vyc2lvbkNvbnRleHQoX2xvY2FsY3R4LCBfc3RhcnRTdGF0ZSwgWERvY1N5bnRheFBhcnNlci5SVUxFX2V4cHJlc3Npb24pO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc0Njtcblx0XHRcdFx0XHRcdGlmICghKHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA3KSkpIHRocm93IG5ldyBGYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24odGhpcywgXCJ0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNylcIik7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzQ4O1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NDc7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc1MDtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKCAhKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1RBUiB8fCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0gpICkge1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVySW5saW5lKHRoaXMpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoZWRFT0YgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzUyO1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NTE7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc1NDtcblx0XHRcdFx0XHRcdHRoaXMuZXhwcmVzc2lvbig4KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0X2xvY2FsY3R4ID0gbmV3IEV4cHJlc3Npb25Db250ZXh0KF9wYXJlbnRjdHgsIF9wYXJlbnRTdGF0ZSk7XG5cdFx0XHRcdFx0XHR0aGlzLnB1c2hOZXdSZWN1cnNpb25Db250ZXh0KF9sb2NhbGN0eCwgX3N0YXJ0U3RhdGUsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9leHByZXNzaW9uKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NTU7XG5cdFx0XHRcdFx0XHRpZiAoISh0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNikpKSB0aHJvdyBuZXcgRmFpbGVkUHJlZGljYXRlRXhjZXB0aW9uKHRoaXMsIFwidGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDYpXCIpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc1Nztcblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzU2O1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NTk7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmICggIShfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlBMVVMgfHwgX2xhPT09WERvY1N5bnRheFBhcnNlci5NSU5VUykgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NjE7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc2MDtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzYzO1xuXHRcdFx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc2ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTQzLHRoaXMuX2N0eCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMudW5yb2xsUmVjdXJzaW9uQ29udGV4dHMoX3BhcmVudGN0eCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyB1bmFyeUV4cHJlc3Npb24oKTogVW5hcnlFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogVW5hcnlFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBVbmFyeUV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA2MiwgWERvY1N5bnRheFBhcnNlci5SVUxFX3VuYXJ5RXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA3Njk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICggIShfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlBMVVMgfHwgX2xhPT09WERvY1N5bnRheFBhcnNlci5NSU5VUykgKSB7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA3NzA7XG5cdFx0XHR0aGlzLmV4cHJlc3Npb24oMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGFycmF5RXhwcmVzc2lvbigpOiBBcnJheUV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBBcnJheUV4cHJlc3Npb25Db250ZXh0ID0gbmV3IEFycmF5RXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDY0LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYXJyYXlFeHByZXNzaW9uKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDc3Mjtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDc3NDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE0NCx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3NzM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA3Nzc7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNDUsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzc2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDc4MDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE0Nix0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3Nzk7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA3ODM7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICgoKCgoX2xhIC0gMSkpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCAoX2xhIC0gMSkpICYgKCgxIDw8IChYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWwgLSAxKSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5Cb29sZWFuTGl0ZXJhbCAtIDEpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWwgLSAxKSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsIC0gMSkpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWwgLSAxKSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5JRCAtIDEpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLlBMVVMgLSAxKSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5NSU5VUyAtIDEpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4gLSAxKSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOIC0gMSkpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9PUEVOIC0gMSkpKSkgIT09IDApKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc4Mjtcblx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA3OTg7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdHdoaWxlIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLkNPTU1BKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzg1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzg3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE0OCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3ODY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzkwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzg5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc5Mztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzkyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzk1O1xuXHRcdFx0XHR0aGlzLmV4cHJlc3Npb24oMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODAwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDgwMjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE1Mix0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MDE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA4MDU7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgwNDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gODA4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgwNztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA4MTA7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9iamVjdEV4cHJlc3Npb24oKTogT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9iamVjdEV4cHJlc3Npb25Db250ZXh0ID0gbmV3IE9iamVjdEV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA2NiwgWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdEV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gODEyO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDgxNDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE1NSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MTM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gODE3O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTU2LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgxNjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDgyMDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE1Nyx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MTk7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gODIzO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5Cb29sZWFuTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWwpKSkgIT09IDApKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgyMjtcblx0XHRcdFx0dGhpcy5vYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDgyNjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE1OSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MjU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gODI5O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgyODtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA4MzI7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgzMTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gODM0O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbigpOiBPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgT2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDY4LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gODM2O1xuXHRcdFx0dGhpcy5vYmplY3RQYWlyRXhwcmVzc2lvbigpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDg1Mztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNjYsdGhpcy5fY3R4KTtcblx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODM4O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgzNztcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg0MDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NDI7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE2Myx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NDE7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NDU7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NDQ7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg0ODtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NDc7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NTA7XG5cdFx0XHRcdFx0dGhpcy5vYmplY3RQYWlyRXhwcmVzc2lvbigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NTU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE2Nix0aGlzLl9jdHgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvYmplY3RQYWlyRXhwcmVzc2lvbigpOiBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDcwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0UGFpckV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDg3Njtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE3MSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODU2O1xuXHRcdFx0XHR0aGlzLmxpdGVyYWxFeHByZXNzaW9uKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NTg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NTc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODYwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODYyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODYxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg2NDtcblx0XHRcdFx0dGhpcy5vYmplY3RFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg2Njtcblx0XHRcdFx0dGhpcy5saXRlcmFsRXhwcmVzc2lvbigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODY4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODY3O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg3MDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg3Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg3MTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NzQ7XG5cdFx0XHRcdHRoaXMubGl0ZXJhbEV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgbGFtYmRhRXhwcmVzc2lvbigpOiBMYW1iZGFFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogTGFtYmRhRXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgTGFtYmRhRXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDcyLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfbGFtYmRhRXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTQ4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU46XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4Nzg7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg4MDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNzIsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODc5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4ODM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTczLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg4Mjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4ODY7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTc0LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg4NTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODg5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5JRCkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODg4O1xuXHRcdFx0XHRcdHRoaXMuZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODkyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE3Nix0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4OTE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg5NTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODk0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODk4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODk3O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkwMDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBBUkVOX0NMT1NFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkwMjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNzksdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTAxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MDU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkwNDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkwODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkwNztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MTA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5BUlJPVyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MTI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTgyLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkxMTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTE1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5MTQ7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MTg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5MTc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTIwO1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MjI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTg1LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkyMTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklEOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTI0O1xuXHRcdFx0XHR0aGlzLnBhcmFtZXRlcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTI2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE4Nix0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5MjU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkyOTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTI4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTMyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTMxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkzNDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkFSUk9XKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkzNjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxODksdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTM1O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5Mzk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkzODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk0Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk0MTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5NDQ7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk0Njtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxOTIsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTQ1O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5RVUVTVElPTik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGxpdGVyYWxFeHByZXNzaW9uKCk6IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0ID0gbmV3IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNzQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9saXRlcmFsRXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA5NTA7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICggISgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTnVtYmVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbCkpKSAhPT0gMCkpICkge1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVySW5saW5lKHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHR0aGlzLm1hdGNoZWRFT0YgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKCk6IFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogUGFyZW50aGVzaXplZEV4cHJlc3Npb25Db250ZXh0ID0gbmV3IFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNzYsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wYXJlbnRoZXNpemVkRXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA5NTI7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTU0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5NTM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDk1Njtcblx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA5NTg7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk1Nztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gOTYwO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBBUkVOX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgZGVzY3JpcHRpb24oKTogRGVzY3JpcHRpb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEZXNjcmlwdGlvbkNvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA3OCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTYyO1xuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbkxpbmUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lKCk6IERlc2NyaXB0aW9uTGluZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IERlc2NyaXB0aW9uTGluZUNvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25MaW5lQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgODAsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbkxpbmUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDk3ODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU3RyaW5nTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TUEFDRTpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQ6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTUlOVVM6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5DT0xPTjpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5QRVJJT0Q6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk2NDtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbkxpbmVTdGFydCgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTY4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHR3aGlsZSAoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5Cb29sZWFuTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5JRCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQVQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5NSU5VUykgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0gpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5DT0xPTikgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlBFUklPRCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLklOTElORV9UQUdfU1RBUlQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UpKSkgIT09IDApKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTY1O1xuXHRcdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25MaW5lRWxlbWVudCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk3MDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JTkxJTkVfVEFHX1NUQVJUOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTcxO1xuXHRcdFx0XHR0aGlzLmlubGluZVRhZygpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTc1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHR3aGlsZSAoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5Cb29sZWFuTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5JRCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQVQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5NSU5VUykgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0gpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5DT0xPTikgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlBFUklPRCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLklOTElORV9UQUdfU1RBUlQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UpKSkgIT09IDApKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTcyO1xuXHRcdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25MaW5lRWxlbWVudCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk3Nztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lU3RhcnQoKTogRGVzY3JpcHRpb25MaW5lU3RhcnRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEZXNjcmlwdGlvbkxpbmVTdGFydENvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25MaW5lU3RhcnRDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA4MiwgWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZVN0YXJ0KTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA5ODE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk4MDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gOTg0OyBcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSAxO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRzd2l0Y2ggKF9hbHQpIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk4Mztcblx0XHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uVGV4dCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5ODY7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwyMDAsdGhpcy5fY3R4KTtcblx0XHRcdH0gd2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDk5Mztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwyMDIsdGhpcy5fY3R4KTtcblx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5OTE7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTnVtYmVyTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQm9vbGVhbkxpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5NSU5VUzpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQ09MT046XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBFUklPRDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0U6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTg4O1xuXHRcdFx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvblRleHQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TUEFDRTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5ODk7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkFUOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk5MDtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5BVCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5OTU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDIwMix0aGlzLl9jdHgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBkZXNjcmlwdGlvblRleHQoKTogRGVzY3JpcHRpb25UZXh0Q29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogRGVzY3JpcHRpb25UZXh0Q29udGV4dCA9IG5ldyBEZXNjcmlwdGlvblRleHRDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA4NCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uVGV4dCk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMDA1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk5Njtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuSUQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5OTc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5JRCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMyk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk5ODtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0gpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU46XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDQpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5OTk7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMDA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQ09MT046XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDYpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDAxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk1JTlVTOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA3KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTAwMjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk1JTlVTKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5QRVJJT0Q6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDgpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDAzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU3RyaW5nTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgOSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMDQ7XG5cdFx0XHRcdHRoaXMubGl0ZXJhbEV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lRWxlbWVudCgpOiBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDg2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lRWxlbWVudCk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMDA5O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklOTElORV9UQUdfU1RBUlQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDA3O1xuXHRcdFx0XHR0aGlzLmlubGluZVRhZygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQm9vbGVhbkxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklEOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlNQQUNFOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5BVDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5NSU5VUzpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNPTE9OOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBFUklPRDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTAwODtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbkxpbmVUZXh0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGRlc2NyaXB0aW9uTGluZVRleHQoKTogRGVzY3JpcHRpb25MaW5lVGV4dENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IERlc2NyaXB0aW9uTGluZVRleHRDb250ZXh0ID0gbmV3IERlc2NyaXB0aW9uTGluZVRleHRDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA4OCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZVRleHQpO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTAxNDsgXG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfYWx0ID0gMTtcblx0XHRcdGRvIHtcblx0XHRcdFx0c3dpdGNoIChfYWx0KSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMTQ7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTnVtYmVyTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQm9vbGVhbkxpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5NSU5VUzpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQ09MT046XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBFUklPRDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0U6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTAxMTtcblx0XHRcdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25UZXh0KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU1BBQ0U6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTAxMjtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQVQ6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTAxMztcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5BVCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDE2OyBcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMjA2LHRoaXMuX2N0eCk7XG5cdFx0XHR9IHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgaW5saW5lVGFnKCk6IElubGluZVRhZ0NvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IElubGluZVRhZ0NvbnRleHQgPSBuZXcgSW5saW5lVGFnQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOTAsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pbmxpbmVUYWcpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTAxODtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5JTkxJTkVfVEFHX1NUQVJUKTtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMDE5O1xuXHRcdFx0dGhpcy5pbmxpbmVUYWdOYW1lKCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTAyMDtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTAyMjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCgoKF9sYSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IF9sYSkgJiAoKDEgPDwgWERvY1N5bnRheFBhcnNlci5JRCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5TUEFDRSkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0gpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5QRVJJT0QpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOKSkpICE9PSAwKSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDIxO1xuXHRcdFx0XHR0aGlzLmlubGluZVRhZ0JvZHkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gMTAyNDtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGlubGluZVRhZ05hbWUoKTogSW5saW5lVGFnTmFtZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IElubGluZVRhZ05hbWVDb250ZXh0ID0gbmV3IElubGluZVRhZ05hbWVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA5MiwgWERvY1N5bnRheFBhcnNlci5SVUxFX2lubGluZVRhZ05hbWUpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMDI2O1xuXHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGlubGluZVRhZ0JvZHkoKTogSW5saW5lVGFnQm9keUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IElubGluZVRhZ0JvZHlDb250ZXh0ID0gbmV3IElubGluZVRhZ0JvZHlDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA5NCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2lubGluZVRhZ0JvZHkpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTAyOTsgXG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGRvIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDI4O1xuXHRcdFx0XHR0aGlzLmJyYWNlQm9keSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMzE7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fSB3aGlsZSAoICgoKF9sYSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IF9sYSkgJiAoKDEgPDwgWERvY1N5bnRheFBhcnNlci5JRCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5TUEFDRSkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0gpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5QRVJJT0QpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOKSkpICE9PSAwKSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBicmFjZUV4cHJlc3Npb24oKTogQnJhY2VFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogQnJhY2VFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBCcmFjZUV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA5NiwgWERvY1N5bnRheFBhcnNlci5SVUxFX2JyYWNlRXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMDMzO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDEwMzc7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdHdoaWxlICgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NTeW50YXhQYXJzZXIuSUQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTikpKSAhPT0gMCkpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDM0O1xuXHRcdFx0XHR0aGlzLmJyYWNlQm9keSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMzk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gMTA0MDtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGJyYWNlQm9keSgpOiBCcmFjZUJvZHlDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBCcmFjZUJvZHlDb250ZXh0ID0gbmV3IEJyYWNlQm9keUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDk4LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYnJhY2VCb2R5KTtcblx0XHR0cnkge1xuXHRcdFx0bGV0IF9hbHQ6IG51bWJlcjtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMDUxO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU46XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDQyO1xuXHRcdFx0XHR0aGlzLmJyYWNlRXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklEOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkU6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU1BBQ0U6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0g6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTA0Mztcblx0XHRcdFx0dGhpcy5icmFjZVRleHQoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwNDg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDIxMCx0aGlzLl9jdHgpO1xuXHRcdFx0XHR3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICkge1xuXHRcdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTA0NDtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDQ1O1xuXHRcdFx0XHRcdFx0dGhpcy5icmFjZVRleHQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDUwO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMjEwLHRoaXMuX2N0eCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgYnJhY2VUZXh0KCk6IEJyYWNlVGV4dENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEJyYWNlVGV4dENvbnRleHQgPSBuZXcgQnJhY2VUZXh0Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMTAwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYnJhY2VUZXh0KTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDEwNTM7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICggISgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NTeW50YXhQYXJzZXIuSUQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKSkpICE9PSAwKSkgKSB7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cblx0cHVibGljIHNlbXByZWQoX2xvY2FsY3R4OiBSdWxlQ29udGV4dCwgcnVsZUluZGV4OiBudW1iZXIsIHByZWRJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0c3dpdGNoIChydWxlSW5kZXgpIHtcblx0XHRjYXNlIDEyOlxuXHRcdFx0cmV0dXJuIHRoaXMudHlwZV9zZW1wcmVkKF9sb2NhbGN0eCBhcyBUeXBlQ29udGV4dCwgcHJlZEluZGV4KTtcblxuXHRcdGNhc2UgMjc6XG5cdFx0XHRyZXR1cm4gdGhpcy5ub3RBcnJheVR5cGVfc2VtcHJlZChfbG9jYWxjdHggYXMgTm90QXJyYXlUeXBlQ29udGV4dCwgcHJlZEluZGV4KTtcblxuXHRcdGNhc2UgMzA6XG5cdFx0XHRyZXR1cm4gdGhpcy5leHByZXNzaW9uX3NlbXByZWQoX2xvY2FsY3R4IGFzIEV4cHJlc3Npb25Db250ZXh0LCBwcmVkSW5kZXgpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRwcml2YXRlIHR5cGVfc2VtcHJlZChfbG9jYWxjdHg6IFR5cGVDb250ZXh0LCBwcmVkSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHN3aXRjaCAocHJlZEluZGV4KSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA4KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cHJpdmF0ZSBub3RBcnJheVR5cGVfc2VtcHJlZChfbG9jYWxjdHg6IE5vdEFycmF5VHlwZUNvbnRleHQsIHByZWRJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0c3dpdGNoIChwcmVkSW5kZXgpIHtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gdGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRwcml2YXRlIGV4cHJlc3Npb25fc2VtcHJlZChfbG9jYWxjdHg6IEV4cHJlc3Npb25Db250ZXh0LCBwcmVkSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHN3aXRjaCAocHJlZEluZGV4KSB7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA3KTtcblxuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiB0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNik7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3NlcmlhbGl6ZWRBVE5TZWdtZW50czogbnVtYmVyID0gMztcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3NlcmlhbGl6ZWRBVE5TZWdtZW50MDogc3RyaW5nID1cblx0XHRcIlxceDAzXFx1QUY2RlxcdTgzMjBcXHU0NzlEXFx1Qjc1Q1xcdTQ4ODBcXHUxNjA1XFx1MTkxQ1xcdUFCMzdcXHgwMyVcXHUwNDIyXFx4MDRcXHgwMlwiK1xuXHRcdFwiXFx0XFx4MDJcXHgwNFxceDAzXFx0XFx4MDNcXHgwNFxceDA0XFx0XFx4MDRcXHgwNFxceDA1XFx0XFx4MDVcXHgwNFxceDA2XFx0XFx4MDZcXHgwNFxceDA3XCIrXG5cdFx0XCJcXHRcXHgwN1xceDA0XFxiXFx0XFxiXFx4MDRcXHRcXHRcXHRcXHgwNFxcblxcdFxcblxceDA0XFx2XFx0XFx2XFx4MDRcXGZcXHRcXGZcXHgwNFxcclxcdFxcclxceDA0XCIrXG5cdFx0XCJcXHgwRVxcdFxceDBFXFx4MDRcXHgwRlxcdFxceDBGXFx4MDRcXHgxMFxcdFxceDEwXFx4MDRcXHgxMVxcdFxceDExXFx4MDRcXHgxMlxcdFxceDEyXFx4MDRcIitcblx0XHRcIlxceDEzXFx0XFx4MTNcXHgwNFxceDE0XFx0XFx4MTRcXHgwNFxceDE1XFx0XFx4MTVcXHgwNFxceDE2XFx0XFx4MTZcXHgwNFxceDE3XFx0XFx4MTdcXHgwNFwiK1xuXHRcdFwiXFx4MThcXHRcXHgxOFxceDA0XFx4MTlcXHRcXHgxOVxceDA0XFx4MUFcXHRcXHgxQVxceDA0XFx4MUJcXHRcXHgxQlxceDA0XFx4MUNcXHRcXHgxQ1xceDA0XCIrXG5cdFx0XCJcXHgxRFxcdFxceDFEXFx4MDRcXHgxRVxcdFxceDFFXFx4MDRcXHgxRlxcdFxceDFGXFx4MDQgXFx0IFxceDA0IVxcdCFcXHgwNFxcXCJcXHRcXFwiXFx4MDQjXCIrXG5cdFx0XCJcXHQjXFx4MDQkXFx0JFxceDA0JVxcdCVcXHgwNCZcXHQmXFx4MDRcXCdcXHRcXCdcXHgwNChcXHQoXFx4MDQpXFx0KVxceDA0KlxcdCpcXHgwNCtcXHQrXCIrXG5cdFx0XCJcXHgwNCxcXHQsXFx4MDQtXFx0LVxceDA0LlxcdC5cXHgwNC9cXHQvXFx4MDQwXFx0MFxceDA0MVxcdDFcXHgwNDJcXHQyXFx4MDQzXFx0M1xceDA0NFwiK1xuXHRcdFwiXFx0NFxceDAzXFx4MDJcXHgwM1xceDAyXFx4MDNcXHgwMlxceDA1XFx4MDJsXFxuXFx4MDJcXHgwM1xceDAyXFx4MDNcXHgwMlxceDA1XFx4MDJwXFxuXCIrXG5cdFx0XCJcXHgwMlxceDAzXFx4MDNcXHgwN1xceDAzc1xcblxceDAzXFxmXFx4MDNcXHgwRVxceDAzdlxcdlxceDAzXFx4MDNcXHgwM1xceDAzXFx4MDNcXHgwM1xceDA0XCIrXG5cdFx0XCJcXHgwM1xceDA0XFx4MDNcXHgwNVxceDAzXFx4MDVcXHgwM1xceDA1XFx4MDdcXHgwNVxceDdGXFxuXFx4MDVcXGZcXHgwNVxceDBFXFx4MDVcXHg4MlxcdlwiK1xuXHRcdFwiXFx4MDVcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceDg4XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlwiK1xuXHRcdFwiXFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XCIrXG5cdFx0XCJcXHgwM1xceDA2XFx4MDVcXHgwNlxceDk2XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHg5QVxcblxceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEEzXFxuXFx4MDZcXHgwM1xceDA2XCIrXG5cdFx0XCJcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcIitcblx0XHRcIlxceDA1XFx4MDZcXHhBRlxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEI0XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEJFXFxuXFx4MDZcIitcblx0XHRcIlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEMyXFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhDQVxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4Q0VcXG5cXHgwNlxceDAzXFx4MDZcIitcblx0XHRcIlxceDAzXFx4MDZcXHgwNVxceDA2XFx4RDJcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEQ2XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhERVxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcIitcblx0XHRcIlxceDA1XFx4MDZcXHhFMlxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEU3XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEYxXFxuXFx4MDZcIitcblx0XHRcIlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEY1XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhGOVxcblxceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhGRFxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxcdTAxMDJcXG5cIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxcdTAxMEFcXG5cXHgwNlwiK1xuXHRcdFwiXFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx1MDEwRVxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XCIrXG5cdFx0XCJcXHgwNlxcdTAxMTRcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxcdTAxMThcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDVcXHgwNlxcdTAxMURcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx1MDEyM1wiK1xuXHRcdFwiXFxuXFx4MDZcXHgwM1xceDA3XFx4MDNcXHgwN1xceDAzXFx4MDdcXHgwM1xcYlxceDAzXFxiXFx4MDNcXGJcXHgwNVxcYlxcdTAxMkJcXG5cXGJcXHgwM1xcdFwiK1xuXHRcdFwiXFx4MDNcXHRcXHgwM1xcdFxceDA2XFx0XFx1MDEzMFxcblxcdFxcclxcdFxceDBFXFx0XFx1MDEzMVxceDAzXFx0XFx4MDNcXHRcXHgwM1xcdFxceDA2XFx0XFx1MDEzN1wiK1xuXHRcdFwiXFxuXFx0XFxyXFx0XFx4MEVcXHRcXHUwMTM4XFx4MDVcXHRcXHUwMTNCXFxuXFx0XFx4MDNcXG5cXHgwM1xcblxceDAzXFx2XFx4MDNcXHZcXHgwNVxcdlxcdTAxNDFcIitcblx0XHRcIlxcblxcdlxceDAzXFxmXFx4MDNcXGZcXHgwM1xcclxceDAzXFxyXFx4MDNcXHJcXHgwM1xceDBFXFx4MDNcXHgwRVxceDAzXFx4MEVcXHgwM1xceDBFXFx4MDNcIitcblx0XHRcIlxceDBFXFx4MDNcXHgwRVxceDAzXFx4MEVcXHgwM1xceDBFXFx4MDVcXHgwRVxcdTAxNTBcXG5cXHgwRVxceDAzXFx4MEVcXHgwM1xceDBFXFx4MDVcXHgwRVwiK1xuXHRcdFwiXFx1MDE1NFxcblxceDBFXFx4MDNcXHgwRVxceDA1XFx4MEVcXHUwMTU3XFxuXFx4MEVcXHgwM1xceDBFXFx4MDVcXHgwRVxcdTAxNUFcXG5cXHgwRVxceDAzXCIrXG5cdFx0XCJcXHgwRVxceDAzXFx4MEVcXHgwNVxceDBFXFx1MDE1RVxcblxceDBFXFx4MDNcXHgwRVxceDA1XFx4MEVcXHUwMTYxXFxuXFx4MEVcXHgwM1xceDBFXFx4MDVcIitcblx0XHRcIlxceDBFXFx1MDE2NFxcblxceDBFXFx4MDNcXHgwRVxceDA3XFx4MEVcXHUwMTY3XFxuXFx4MEVcXGZcXHgwRVxceDBFXFx4MEVcXHUwMTZBXFx2XFx4MEVcIitcblx0XHRcIlxceDAzXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxNkVcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE3MVxcblxceDBGXFx4MDNcXHgwRlwiK1xuXHRcdFwiXFx4MDVcXHgwRlxcdTAxNzRcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE3N1xcblxceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTdBXCIrXG5cdFx0XCJcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE3RFxcblxceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTgwXFxuXFx4MEZcXHgwM1xceDBGXCIrXG5cdFx0XCJcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxODRcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE4N1xcblxceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcIitcblx0XHRcIlxcdTAxOEFcXG5cXHgwRlxceDAzXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxOEVcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE5MVwiK1xuXHRcdFwiXFxuXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxOTRcXG5cXHgwRlxceDAzXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxOThcXG5cXHgwRlwiK1xuXHRcdFwiXFx4MDNcXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE5Q1xcblxceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTlGXFxuXFx4MEZcXHgwM1xceDBGXCIrXG5cdFx0XCJcXHgwNVxceDBGXFx1MDFBMlxcblxceDBGXFx4MDNcXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDFBNlxcblxceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcIitcblx0XHRcIlxcdTAxQTlcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDFBQ1xcblxceDBGXFx4MDNcXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDFCMFwiK1xuXHRcdFwiXFxuXFx4MEZcXHgwNVxceDBGXFx1MDFCMlxcblxceDBGXFx4MDNcXHgxMFxceDAzXFx4MTBcXHgwM1xceDEwXFx4MDVcXHgxMFxcdTAxQjdcXG5cXHgxMFwiK1xuXHRcdFwiXFx4MDNcXHgxMFxceDA1XFx4MTBcXHUwMUJBXFxuXFx4MTBcXHgwM1xceDEwXFx4MDdcXHgxMFxcdTAxQkRcXG5cXHgxMFxcZlxceDEwXFx4MEVcXHgxMFwiK1xuXHRcdFwiXFx1MDFDMFxcdlxceDEwXFx4MDNcXHgxMVxceDAzXFx4MTFcXHgwNVxceDExXFx1MDFDNFxcblxceDExXFx4MDNcXHgxMVxceDAzXFx4MTFcXHgwNVxceDExXCIrXG5cdFx0XCJcXHUwMUM4XFxuXFx4MTFcXHgwM1xceDExXFx4MDVcXHgxMVxcdTAxQ0JcXG5cXHgxMVxceDAzXFx4MTJcXHgwNVxceDEyXFx1MDFDRVxcblxceDEyXFx4MDNcIitcblx0XHRcIlxceDEyXFx4MDNcXHgxMlxceDA1XFx4MTJcXHUwMUQyXFxuXFx4MTJcXHgwM1xceDEyXFx4MDNcXHgxMlxceDA1XFx4MTJcXHUwMUQ2XFxuXFx4MTJcXHgwM1wiK1xuXHRcdFwiXFx4MTJcXHgwM1xceDEyXFx4MDNcXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXFx1MDFEQ1xcblxceDEzXFx4MDNcXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXCIrXG5cdFx0XCJcXHUwMUUwXFxuXFx4MTNcXHgwM1xceDEzXFx4MDdcXHgxM1xcdTAxRTNcXG5cXHgxM1xcZlxceDEzXFx4MEVcXHgxM1xcdTAxRTZcXHZcXHgxM1xceDAzXCIrXG5cdFx0XCJcXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXFx1MDFFQVxcblxceDEzXFx4MDNcXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXFx1MDFFRVxcblxceDEzXFx4MDNcIitcblx0XHRcIlxceDEzXFx4MDNcXHgxM1xceDA1XFx4MTNcXHUwMUYyXFxuXFx4MTNcXHgwM1xceDEzXFx4MDNcXHgxM1xceDA1XFx4MTNcXHUwMUY2XFxuXFx4MTNcXHgwM1wiK1xuXHRcdFwiXFx4MTNcXHgwN1xceDEzXFx1MDFGOVxcblxceDEzXFxmXFx4MTNcXHgwRVxceDEzXFx1MDFGQ1xcdlxceDEzXFx4MDNcXHgxM1xceDAzXFx4MTNcXHgwNVwiK1xuXHRcdFwiXFx4MTNcXHUwMjAwXFxuXFx4MTNcXHgwM1xceDEzXFx4MDNcXHgxM1xceDA1XFx4MTNcXHUwMjA0XFxuXFx4MTNcXHgwM1xceDEzXFx4MDNcXHgxM1xceDA1XCIrXG5cdFx0XCJcXHgxM1xcdTAyMDhcXG5cXHgxM1xceDAzXFx4MTNcXHgwM1xceDEzXFx4MDVcXHgxM1xcdTAyMENcXG5cXHgxM1xceDAzXFx4MTNcXHgwN1xceDEzXFx1MDIwRlwiK1xuXHRcdFwiXFxuXFx4MTNcXGZcXHgxM1xceDBFXFx4MTNcXHUwMjEyXFx2XFx4MTNcXHgwM1xceDEzXFx4MDNcXHgxM1xceDA1XFx4MTNcXHUwMjE2XFxuXFx4MTNcXHgwM1wiK1xuXHRcdFwiXFx4MTNcXHgwM1xceDEzXFx4MDVcXHgxM1xcdTAyMUFcXG5cXHgxM1xceDAzXFx4MTNcXHgwM1xceDEzXFx4MDVcXHgxM1xcdTAyMUVcXG5cXHgxM1xceDAzXCIrXG5cdFx0XCJcXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXFx1MDIyMlxcblxceDEzXFx4MDNcXHgxM1xceDA3XFx4MTNcXHUwMjI1XFxuXFx4MTNcXGZcXHgxM1xceDBFXCIrXG5cdFx0XCJcXHgxM1xcdTAyMjhcXHZcXHgxM1xceDA1XFx4MTNcXHUwMjJBXFxuXFx4MTNcXHgwM1xceDE0XFx4MDNcXHgxNFxceDAzXFx4MTRcXHgwNVxceDE0XFx1MDIyRlwiK1xuXHRcdFwiXFxuXFx4MTRcXHgwM1xceDE1XFx4MDNcXHgxNVxceDA1XFx4MTVcXHUwMjMzXFxuXFx4MTVcXHgwM1xceDE2XFx4MDNcXHgxNlxceDAzXFx4MTdcXHgwM1wiK1xuXHRcdFwiXFx4MTdcXHgwNVxceDE3XFx1MDIzOVxcblxceDE3XFx4MDNcXHgxN1xceDAzXFx4MTdcXHgwNVxceDE3XFx1MDIzRFxcblxceDE3XFx4MDNcXHgxN1xceDAzXCIrXG5cdFx0XCJcXHgxN1xceDAzXFx4MThcXHgwM1xceDE4XFx4MDNcXHgxOFxceDAzXFx4MTlcXHgwM1xceDE5XFx4MDVcXHgxOVxcdTAyNDZcXG5cXHgxOVxceDAzXFx4MTlcIitcblx0XHRcIlxceDA1XFx4MTlcXHUwMjQ5XFxuXFx4MTlcXHgwM1xceDE5XFx4MDVcXHgxOVxcdTAyNENcXG5cXHgxOVxceDAzXFx4MTlcXHgwNVxceDE5XFx1MDI0RlwiK1xuXHRcdFwiXFxuXFx4MTlcXHgwM1xceDE5XFx4MDVcXHgxOVxcdTAyNTJcXG5cXHgxOVxceDAzXFx4MTlcXHgwNVxceDE5XFx1MDI1NVxcblxceDE5XFx4MDNcXHgxOVwiK1xuXHRcdFwiXFx4MDVcXHgxOVxcdTAyNThcXG5cXHgxOVxceDAzXFx4MTlcXHgwM1xceDE5XFx4MDNcXHgxQVxceDAzXFx4MUFcXHgwNVxceDFBXFx1MDI1RVxcblxceDFBXCIrXG5cdFx0XCJcXHgwM1xceDFBXFx4MDNcXHgxQVxceDA1XFx4MUFcXHUwMjYyXFxuXFx4MUFcXHgwM1xceDFBXFx4MDVcXHgxQVxcdTAyNjVcXG5cXHgxQVxceDAzXFx4MUFcIitcblx0XHRcIlxceDA1XFx4MUFcXHUwMjY4XFxuXFx4MUFcXHgwM1xceDFBXFx4MDdcXHgxQVxcdTAyNkJcXG5cXHgxQVxcZlxceDFBXFx4MEVcXHgxQVxcdTAyNkVcXHZcIitcblx0XHRcIlxceDFBXFx4MDNcXHgxQlxceDAzXFx4MUJcXHgwNVxceDFCXFx1MDI3MlxcblxceDFCXFx4MDNcXHgxQlxceDA1XFx4MUJcXHUwMjc1XFxuXFx4MUJcXHgwM1wiK1xuXHRcdFwiXFx4MUJcXHgwM1xceDFCXFx4MDVcXHgxQlxcdTAyNzlcXG5cXHgxQlxceDAzXFx4MUJcXHgwM1xceDFCXFx4MDNcXHgxQ1xceDAzXFx4MUNcXHgwNVxceDFDXCIrXG5cdFx0XCJcXHUwMjdGXFxuXFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1xcdTAyODJcXG5cXHgxQ1xceDAzXFx4MUNcXHgwNVxceDFDXFx1MDI4NVxcblxceDFDXFx4MDNcIitcblx0XHRcIlxceDFDXFx4MDVcXHgxQ1xcdTAyODhcXG5cXHgxQ1xceDAzXFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1xcdTAyOENcXG5cXHgxQ1xceDAzXFx4MUNcXHgwNVwiK1xuXHRcdFwiXFx4MUNcXHUwMjhGXFxuXFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1xcdTAyOTJcXG5cXHgxQ1xceDAzXFx4MUNcXHgwN1xceDFDXFx1MDI5NVxcblxceDFDXCIrXG5cdFx0XCJcXGZcXHgxQ1xceDBFXFx4MUNcXHUwMjk4XFx2XFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1xcdTAyOUJcXG5cXHgxQ1xceDAzXFx4MUNcXHgwNVxceDFDXCIrXG5cdFx0XCJcXHUwMjlFXFxuXFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1xcdTAyQTFcXG5cXHgxQ1xceDAzXFx4MUNcXHgwM1xceDFDXFx4MDNcXHgxQ1xceDAzXFx4MUNcIitcblx0XHRcIlxceDA2XFx4MUNcXHUwMkE3XFxuXFx4MUNcXHJcXHgxQ1xceDBFXFx4MUNcXHUwMkE4XFx4MDVcXHgxQ1xcdTAyQUJcXG5cXHgxQ1xceDAzXFx4MURcXHgwM1wiK1xuXHRcdFwiXFx4MURcXHgwM1xceDFEXFx4MDNcXHgxRFxceDAzXFx4MURcXHgwM1xceDFEXFx4MDNcXHgxRFxceDA1XFx4MURcXHUwMkI0XFxuXFx4MURcXHgwM1xceDFEXCIrXG5cdFx0XCJcXHgwM1xceDFEXFx4MDVcXHgxRFxcdTAyQjhcXG5cXHgxRFxceDAzXFx4MURcXHgwNVxceDFEXFx1MDJCQlxcblxceDFEXFx4MDNcXHgxRFxceDA1XFx4MURcIitcblx0XHRcIlxcdTAyQkVcXG5cXHgxRFxceDAzXFx4MURcXHgwM1xceDFEXFx4MDVcXHgxRFxcdTAyQzJcXG5cXHgxRFxceDAzXFx4MURcXHgwNVxceDFEXFx1MDJDNVwiK1xuXHRcdFwiXFxuXFx4MURcXHgwM1xceDFEXFx4MDVcXHgxRFxcdTAyQzhcXG5cXHgxRFxceDAzXFx4MURcXHgwN1xceDFEXFx1MDJDQlxcblxceDFEXFxmXFx4MURcXHgwRVwiK1xuXHRcdFwiXFx4MURcXHUwMkNFXFx2XFx4MURcXHgwM1xceDFFXFx4MDNcXHgxRVxceDAzXFx4MUVcXHgwNlxceDFFXFx1MDJEM1xcblxceDFFXFxyXFx4MUVcXHgwRVwiK1xuXHRcdFwiXFx4MUVcXHUwMkQ0XFx4MDNcXHgxRVxceDAzXFx4MUVcXHgwM1xceDFFXFx4MDZcXHgxRVxcdTAyREFcXG5cXHgxRVxcclxceDFFXFx4MEVcXHgxRVxcdTAyREJcIitcblx0XHRcIlxceDA1XFx4MUVcXHUwMkRFXFxuXFx4MUVcXHgwM1xceDFGXFx4MDNcXHgxRlxceDA1XFx4MUZcXHUwMkUyXFxuXFx4MUZcXHgwMyBcXHgwMyBcXHgwM1wiK1xuXHRcdFwiIFxceDAzIFxceDAzIFxceDAzIFxceDAzIFxceDA1IFxcdTAyRUJcXG4gXFx4MDMgXFx4MDMgXFx4MDUgXFx1MDJFRlxcbiBcXHgwMyBcXHgwMyBcIitcblx0XHRcIlxceDA1IFxcdTAyRjNcXG4gXFx4MDMgXFx4MDMgXFx4MDMgXFx4MDUgXFx1MDJGOFxcbiBcXHgwMyBcXHgwMyBcXHgwNSBcXHUwMkZDXFxuIFxceDAzXCIrXG5cdFx0XCIgXFx4MDcgXFx1MDJGRlxcbiBcXGYgXFx4MEUgXFx1MDMwMlxcdiBcXHgwMyFcXHgwMyFcXHgwMyFcXHgwM1xcXCJcXHgwM1xcXCJcXHgwNVxcXCJcXHUwMzA5XCIrXG5cdFx0XCJcXG5cXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDMwQ1xcblxcXCJcXHgwM1xcXCJcXHgwNVxcXCJcXHUwMzBGXFxuXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAzMTJcXG5cXFwiXCIrXG5cdFx0XCJcXHgwM1xcXCJcXHgwM1xcXCJcXHgwNVxcXCJcXHUwMzE2XFxuXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAzMTlcXG5cXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDMxQ1xcblwiK1xuXHRcdFwiXFxcIlxceDAzXFxcIlxceDA3XFxcIlxcdTAzMUZcXG5cXFwiXFxmXFxcIlxceDBFXFxcIlxcdTAzMjJcXHZcXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDMyNVxcblxcXCJcXHgwM1wiK1xuXHRcdFwiXFxcIlxceDA1XFxcIlxcdTAzMjhcXG5cXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDMyQlxcblxcXCJcXHgwM1xcXCJcXHgwM1xcXCJcXHgwMyNcXHgwMyNcXHgwNSNcXHUwMzMxXCIrXG5cdFx0XCJcXG4jXFx4MDMjXFx4MDUjXFx1MDMzNFxcbiNcXHgwMyNcXHgwNSNcXHUwMzM3XFxuI1xceDAzI1xceDA1I1xcdTAzM0FcXG4jXFx4MDMjXFx4MDVcIitcblx0XHRcIiNcXHUwMzNEXFxuI1xceDAzI1xceDA1I1xcdTAzNDBcXG4jXFx4MDMjXFx4MDUjXFx1MDM0M1xcbiNcXHgwMyNcXHgwMyNcXHgwMyRcXHgwMyRcXHgwNVwiK1xuXHRcdFwiJFxcdTAzNDlcXG4kXFx4MDMkXFx4MDMkXFx4MDUkXFx1MDM0RFxcbiRcXHgwMyRcXHgwNSRcXHUwMzUwXFxuJFxceDAzJFxceDA1JFxcdTAzNTNcIitcblx0XHRcIlxcbiRcXHgwMyRcXHgwNyRcXHUwMzU2XFxuJFxcZiRcXHgwRSRcXHUwMzU5XFx2JFxceDAzJVxceDAzJVxceDA1JVxcdTAzNURcXG4lXFx4MDMlXFx4MDNcIitcblx0XHRcIiVcXHgwNSVcXHUwMzYxXFxuJVxceDAzJVxceDAzJVxceDAzJVxceDAzJVxceDA1JVxcdTAzNjdcXG4lXFx4MDMlXFx4MDMlXFx4MDUlXFx1MDM2QlwiK1xuXHRcdFwiXFxuJVxceDAzJVxceDAzJVxceDA1JVxcdTAzNkZcXG4lXFx4MDMmXFx4MDMmXFx4MDUmXFx1MDM3M1xcbiZcXHgwMyZcXHgwNSZcXHUwMzc2XFxuXCIrXG5cdFx0XCImXFx4MDMmXFx4MDUmXFx1MDM3OVxcbiZcXHgwMyZcXHgwNSZcXHUwMzdDXFxuJlxceDAzJlxceDA1JlxcdTAzN0ZcXG4mXFx4MDMmXFx4MDUmXFx1MDM4MlwiK1xuXHRcdFwiXFxuJlxceDAzJlxceDA1JlxcdTAzODVcXG4mXFx4MDMmXFx4MDMmXFx4MDUmXFx1MDM4OVxcbiZcXHgwMyZcXHgwNSZcXHUwMzhDXFxuJlxceDAzXCIrXG5cdFx0XCImXFx4MDUmXFx1MDM4RlxcbiZcXHgwMyZcXHgwMyZcXHgwNSZcXHUwMzkzXFxuJlxceDAzJlxceDA1JlxcdTAzOTZcXG4mXFx4MDMmXFx4MDUmXFx1MDM5OVwiK1xuXHRcdFwiXFxuJlxceDAzJlxceDAzJlxceDA1JlxcdTAzOURcXG4mXFx4MDMmXFx4MDMmXFx4MDUmXFx1MDNBMVxcbiZcXHgwMyZcXHgwNSZcXHUwM0E0XFxuXCIrXG5cdFx0XCImXFx4MDMmXFx4MDUmXFx1MDNBN1xcbiZcXHgwMyZcXHgwMyZcXHgwNSZcXHUwM0FCXFxuJlxceDAzJlxceDA1JlxcdTAzQUVcXG4mXFx4MDMmXFx4MDVcIitcblx0XHRcIiZcXHUwM0IxXFxuJlxceDAzJlxceDAzJlxceDA1JlxcdTAzQjVcXG4mXFx4MDUmXFx1MDNCN1xcbiZcXHgwM1xcJ1xceDAzXFwnXFx4MDMoXFx4MDNcIitcblx0XHRcIihcXHgwNShcXHUwM0JEXFxuKFxceDAzKFxceDAzKFxceDA1KFxcdTAzQzFcXG4oXFx4MDMoXFx4MDMoXFx4MDMpXFx4MDMpXFx4MDMqXFx4MDMqXCIrXG5cdFx0XCJcXHgwNypcXHUwM0M5XFxuKlxcZipcXHgwRSpcXHUwM0NDXFx2KlxceDAzKlxceDAzKlxceDA3KlxcdTAzRDBcXG4qXFxmKlxceDBFKlxcdTAzRDNcIitcblx0XHRcIlxcdipcXHgwNSpcXHUwM0Q1XFxuKlxceDAzK1xceDA1K1xcdTAzRDhcXG4rXFx4MDMrXFx4MDYrXFx1MDNEQlxcbitcXHIrXFx4MEUrXFx1MDNEQ1wiK1xuXHRcdFwiXFx4MDMrXFx4MDMrXFx4MDMrXFx4MDcrXFx1MDNFMlxcbitcXGYrXFx4MEUrXFx1MDNFNVxcditcXHgwMyxcXHgwMyxcXHgwMyxcXHgwMyxcXHgwM1wiK1xuXHRcdFwiLFxceDAzLFxceDAzLFxceDAzLFxceDAzLFxceDA1LFxcdTAzRjBcXG4sXFx4MDMtXFx4MDMtXFx4MDUtXFx1MDNGNFxcbi1cXHgwMy5cXHgwMy5cIitcblx0XHRcIlxceDAzLlxceDA2LlxcdTAzRjlcXG4uXFxyLlxceDBFLlxcdTAzRkFcXHgwMy9cXHgwMy9cXHgwMy9cXHgwMy9cXHgwNS9cXHUwNDAxXFxuL1xceDAzXCIrXG5cdFx0XCIvXFx4MDMvXFx4MDMwXFx4MDMwXFx4MDMxXFx4MDYxXFx1MDQwOFxcbjFcXHIxXFx4MEUxXFx1MDQwOVxceDAzMlxceDAzMlxceDA3MlxcdTA0MEVcIitcblx0XHRcIlxcbjJcXGYyXFx4MEUyXFx1MDQxMVxcdjJcXHgwMzJcXHgwMzJcXHgwMzNcXHgwMzNcXHgwMzNcXHgwMzNcXHgwNzNcXHUwNDE5XFxuM1xcZjNcXHgwRVwiK1xuXHRcdFwiM1xcdTA0MUNcXHYzXFx4MDUzXFx1MDQxRVxcbjNcXHgwMzRcXHgwMzRcXHgwMzRcXHgwMlxceDAyXFx4MDVcXHgxQTg+NVxceDAyXFx4MDJcXHgwNFwiK1xuXHRcdFwiXFx4MDJcXHgwNlxceDAyXFxiXFx4MDJcXG5cXHgwMlxcZlxceDAyXFx4MEVcXHgwMlxceDEwXFx4MDJcXHgxMlxceDAyXFx4MTRcXHgwMlxceDE2XFx4MDJcIitcblx0XHRcIlxceDE4XFx4MDJcXHgxQVxceDAyXFx4MUNcXHgwMlxceDFFXFx4MDIgXFx4MDJcXFwiXFx4MDIkXFx4MDImXFx4MDIoXFx4MDIqXFx4MDIsXFx4MDIuXCIrXG5cdFx0XCJcXHgwMjBcXHgwMjJcXHgwMjRcXHgwMjZcXHgwMjhcXHgwMjpcXHgwMjxcXHgwMj5cXHgwMkBcXHgwMkJcXHgwMkRcXHgwMkZcXHgwMkhcXHgwMlwiK1xuXHRcdFwiSlxceDAyTFxceDAyTlxceDAyUFxceDAyUlxceDAyVFxceDAyVlxceDAyWFxceDAyWlxceDAyXFxcXFxceDAyXlxceDAyYFxceDAyYlxceDAyZFxceDAyXCIrXG5cdFx0XCJmXFx4MDJcXHgwMlxcdFxceDAzXFx4MDJcXGZcXHJcXHgwM1xceDAyXFx4MTlcXHgxQVxceDA0XFx4MDJcXHgxMlxceDEyXFx4MTlcXHgxOVxceDAzXFx4MDJcIitcblx0XHRcIlxceDEyXFx4MTNcXHgwM1xceDAyXFx4MTBcXHgxMVxceDA0XFx4MDJcXHgwM1xceDAzXFx4MDZcXHRcXHgwNVxceDAyXFx2XFx4MEVcXHgxM1xceDEzXFx4MTVcIitcblx0XHRcIlxceDE1XFx1MDRFNlxceDAyb1xceDAzXFx4MDJcXHgwMlxceDAyXFx4MDR0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHgwNnlcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFxie1xceDAzXFx4MDJcXHgwMlxceDAyXFxuXFx1MDEyMlxceDAzXFx4MDJcXHgwMlxceDAyXFxmXFx1MDEyNFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwRVxcdTAxMkFcXHgwM1xceDAyXFx4MDJcXHgwMlxceDEwXFx1MDEzQVxceDAzXFx4MDJcXHgwMlxceDAyXFx4MTJcXHUwMTNDXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDE0XFx1MDE0MFxceDAzXFx4MDJcXHgwMlxceDAyXFx4MTZcXHUwMTQyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHgxOFxcdTAxNDRcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx4MUFcXHUwMTRGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHgxQ1xcdTAxQjFcXHgwM1xceDAyXFx4MDJcXHgwMlxceDFFXCIrXG5cdFx0XCJcXHUwMUIzXFx4MDNcXHgwMlxceDAyXFx4MDIgXFx1MDFDMVxceDAzXFx4MDJcXHgwMlxceDAyXFxcIlxcdTAxQ0RcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiJFxcdTAyMjlcXHgwM1xceDAyXFx4MDJcXHgwMiZcXHUwMjJFXFx4MDNcXHgwMlxceDAyXFx4MDIoXFx1MDIzMlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCIqXFx1MDIzNFxceDAzXFx4MDJcXHgwMlxceDAyLFxcdTAyMzZcXHgwM1xceDAyXFx4MDJcXHgwMi5cXHUwMjQwXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIjBcXHUwMjQzXFx4MDNcXHgwMlxceDAyXFx4MDIyXFx1MDI1QlxceDAzXFx4MDJcXHgwMlxceDAyNFxcdTAyNkZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiNlxcdTAyQUFcXHgwM1xceDAyXFx4MDJcXHgwMjhcXHUwMkIzXFx4MDNcXHgwMlxceDAyXFx4MDI6XFx1MDJERFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCI8XFx1MDJFMVxceDAzXFx4MDJcXHgwMlxceDAyPlxcdTAyRUFcXHgwM1xceDAyXFx4MDJcXHgwMkBcXHUwMzAzXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIkJcXHUwMzA2XFx4MDNcXHgwMlxceDAyXFx4MDJEXFx1MDMyRVxceDAzXFx4MDJcXHgwMlxceDAyRlxcdTAzNDZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiSFxcdTAzNkVcXHgwM1xceDAyXFx4MDJcXHgwMkpcXHUwM0I2XFx4MDNcXHgwMlxceDAyXFx4MDJMXFx1MDNCOFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJOXFx1MDNCQVxceDAzXFx4MDJcXHgwMlxceDAyUFxcdTAzQzRcXHgwM1xceDAyXFx4MDJcXHgwMlJcXHUwM0Q0XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlRcXHUwM0Q3XFx4MDNcXHgwMlxceDAyXFx4MDJWXFx1MDNFRlxceDAzXFx4MDJcXHgwMlxceDAyWFxcdTAzRjNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiWlxcdTAzRjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcXFxcXHUwM0ZDXFx4MDNcXHgwMlxceDAyXFx4MDJeXFx1MDQwNFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJgXFx1MDQwN1xceDAzXFx4MDJcXHgwMlxceDAyYlxcdTA0MEJcXHgwM1xceDAyXFx4MDJcXHgwMmRcXHUwNDFEXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcImZcXHUwNDFGXFx4MDNcXHgwMlxceDAyXFx4MDJocFxceDA3XFx4MDJcXHgwMlxceDAzaWtcXHgwNVxceDA0XFx4MDNcXHgwMmpsXFx4MDdcXGZcXHgwMlwiK1xuXHRcdFwiXFx4MDJralxceDAzXFx4MDJcXHgwMlxceDAya2xcXHgwM1xceDAyXFx4MDJcXHgwMmxtXFx4MDNcXHgwMlxceDAyXFx4MDJtblxceDA3XFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDNucFxceDAzXFx4MDJcXHgwMlxceDAyb2hcXHgwM1xceDAyXFx4MDJcXHgwMm9pXFx4MDNcXHgwMlxceDAyXFx4MDJwXFx4MDNcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAycXNcXHgwNVxceDA2XFx4MDRcXHgwMnJxXFx4MDNcXHgwMlxceDAyXFx4MDJzdlxceDAzXFx4MDJcXHgwMlxceDAydHJcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAydHVcXHgwM1xceDAyXFx4MDJcXHgwMnV3XFx4MDNcXHgwMlxceDAyXFx4MDJ2dFxceDAzXFx4MDJcXHgwMlxceDAyd3hcXHgwNVxcYlwiK1xuXHRcdFwiXFx4MDVcXHgwMnhcXHgwNVxceDAzXFx4MDJcXHgwMlxceDAyeXpcXHRcXHgwMlxceDAyXFx4MDJ6XFx4MDdcXHgwM1xceDAyXFx4MDJcXHgwMntcXHg4MFwiK1xuXHRcdFwiXFx4MDVcXG5cXHgwNlxceDAyfH1cXHgwN1xcZlxceDAyXFx4MDJ9XFx4N0ZcXHgwNVxcblxceDA2XFx4MDJ+fFxceDAzXFx4MDJcXHgwMlxceDAyXFx4N0ZcIitcblx0XHRcIlxceDgyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4MH5cXHgwM1xceDAyXFx4MDJcXHgwMlxceDgwXFx4ODFcXHgwM1xceDAyXFx4MDJcXHgwMlxceDgxXCIrXG5cdFx0XCJcXHRcXHgwM1xceDAyXFx4MDJcXHgwMlxceDgyXFx4ODBcXHgwM1xceDAyXFx4MDJcXHgwMlxceDgzXFx1MDEyM1xceDA1XFxmXFx4MDdcXHgwMlxceDg0XCIrXG5cdFx0XCJcXHg4NVxceDA1XFxmXFx4MDdcXHgwMlxceDg1XFx4ODdcXHgwN1xcclxceDAyXFx4MDJcXHg4NlxceDg4XFx4MDdcXGZcXHgwMlxceDAyXFx4ODdcXHg4NlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4N1xceDg4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4OFxceDg5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4OVxceDhBXCIrXG5cdFx0XCJcXHgwN1xceDExXFx4MDJcXHgwMlxceDhBXFx4OEJcXHgwN1xcclxceDAyXFx4MDJcXHg4QlxceDhDXFx4MDVQKVxceDAyXFx4OENcXHUwMTIzXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxceDhEXFx4OEVcXHgwNVxcZlxceDA3XFx4MDJcXHg4RVxceDhGXFx4MDdcXHJcXHgwMlxceDAyXFx4OEZcXHg5MFxceDA1XFx4MEVcIitcblx0XHRcIlxcYlxceDAyXFx4OTBcXHUwMTIzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg5MVxceDkyXFx4MDVcXGZcXHgwN1xceDAyXFx4OTJcXHg5M1xceDA3XFxyXFx4MDJcIitcblx0XHRcIlxceDAyXFx4OTNcXHg5NVxceDA1XFx4MEVcXGJcXHgwMlxceDk0XFx4OTZcXHgwN1xcclxceDAyXFx4MDJcXHg5NVxceDk0XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceDk1XFx4OTZcXHgwM1xceDAyXFx4MDJcXHgwMlxceDk2XFx4OTdcXHgwM1xceDAyXFx4MDJcXHgwMlxceDk3XFx4OTlcXHgwN1xceDE3XFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4OThcXHg5QVxceDA3XFxyXFx4MDJcXHgwMlxceDk5XFx4OThcXHgwM1xceDAyXFx4MDJcXHgwMlxceDk5XFx4OUFcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4OUFcXHg5QlxceDAzXFx4MDJcXHgwMlxceDAyXFx4OUJcXHg5Q1xceDA1PiBcXHgwMlxceDlDXFx1MDEyM1xceDAzXFx4MDJcXHgwMlxceDAyXFx4OURcIitcblx0XHRcIlxceDlFXFx4MDVcXGZcXHgwN1xceDAyXFx4OUVcXHg5RlxceDA3XFxyXFx4MDJcXHgwMlxceDlGXFx4QTBcXHgwNVxceDBFXFxiXFx4MDJcXHhBMFxceEEyXCIrXG5cdFx0XCJcXHgwN1xcclxceDAyXFx4MDJcXHhBMVxceEEzXFx4MDdcXGZcXHgwMlxceDAyXFx4QTJcXHhBMVxceDAzXFx4MDJcXHgwMlxceDAyXFx4QTJcXHhBM1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHhBM1xceEE0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhBNFxceEE1XFx4MDdcXHgxMVxceDAyXFx4MDJcXHhBNVxceEE2XFx4MDdcIitcblx0XHRcIlxcclxceDAyXFx4MDJcXHhBNlxceEE3XFx4MDVQKVxceDAyXFx4QTdcXHUwMTIzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhBOFxceEE5XFx4MDVcXGZcXHgwN1wiK1xuXHRcdFwiXFx4MDJcXHhBOVxceEFBXFx4MDdcXHJcXHgwMlxceDAyXFx4QUFcXHhBQlxceDA1XFx4MEVcXGJcXHgwMlxceEFCXFx4QUNcXHgwN1xcclxceDAyXFx4MDJcIitcblx0XHRcIlxceEFDXFx4QUVcXHgwN1xceDE3XFx4MDJcXHgwMlxceEFEXFx4QUZcXHgwN1xcclxceDAyXFx4MDJcXHhBRVxceEFEXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceEFFXFx4QUZcXHgwM1xceDAyXFx4MDJcXHgwMlxceEFGXFx4QjBcXHgwM1xceDAyXFx4MDJcXHgwMlxceEIwXFx4QjFcXHgwNT4gXFx4MDJcXHhCMVwiK1xuXHRcdFwiXFx4QjNcXHgwN1xcclxceDAyXFx4MDJcXHhCMlxceEI0XFx4MDdcXGZcXHgwMlxceDAyXFx4QjNcXHhCMlxceDAzXFx4MDJcXHgwMlxceDAyXFx4QjNcXHhCNFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCNFxceEI1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCNVxceEI2XFx4MDdcXHgxMVxceDAyXFx4MDJcXHhCNlxceEI3XCIrXG5cdFx0XCJcXHgwN1xcclxceDAyXFx4MDJcXHhCN1xceEI4XFx4MDVQKVxceDAyXFx4QjhcXHUwMTIzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCOVxceEJBXFx4MDVcIitcblx0XHRcIlxcZlxceDA3XFx4MDJcXHhCQVxceEJCXFx4MDdcXHJcXHgwMlxceDAyXFx4QkJcXHhCRFxceDA1XFx4MEVcXGJcXHgwMlxceEJDXFx4QkVcXHgwN1xcclxceDAyXCIrXG5cdFx0XCJcXHgwMlxceEJEXFx4QkNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEJEXFx4QkVcXHgwM1xceDAyXFx4MDJcXHgwMlxceEJFXFx4QkZcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx4QkZcXHhDMVxceDA3XFx4MTRcXHgwMlxceDAyXFx4QzBcXHhDMlxceDA3XFxyXFx4MDJcXHgwMlxceEMxXFx4QzBcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx4QzFcXHhDMlxceDAzXFx4MDJcXHgwMlxceDAyXFx4QzJcXHhDM1xceDAzXFx4MDJcXHgwMlxceDAyXFx4QzNcXHhDNFxceDA1XFx4MUFcXHgwRVwiK1xuXHRcdFwiXFx4MDJcXHhDNFxcdTAxMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEM1XFx4QzZcXHgwNVxcZlxceDA3XFx4MDJcXHhDNlxceEM3XFx4MDdcXHJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHhDN1xceEM5XFx4MDVcXHgwRVxcYlxceDAyXFx4QzhcXHhDQVxceDA3XFxyXFx4MDJcXHgwMlxceEM5XFx4QzhcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4QzlcXHhDQVxceDAzXFx4MDJcXHgwMlxceDAyXFx4Q0FcXHhDQlxceDAzXFx4MDJcXHgwMlxceDAyXFx4Q0JcXHhDRFxceDA3XFx4MTRcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhDQ1xceENFXFx4MDdcXHJcXHgwMlxceDAyXFx4Q0RcXHhDQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx4Q0RcXHhDRVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhDRVxceENGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhDRlxceEQxXFx4MDVcXHgxQVxceDBFXFx4MDJcXHhEMFxceEQyXFx4MDdcXHJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhEMVxceEQwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhEMVxceEQyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhEMlxceEQzXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceEQzXFx4RDVcXHgwN1xceDE3XFx4MDJcXHgwMlxceEQ0XFx4RDZcXHgwN1xcclxceDAyXFx4MDJcXHhENVxceEQ0XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceEQ1XFx4RDZcXHgwM1xceDAyXFx4MDJcXHgwMlxceEQ2XFx4RDdcXHgwM1xceDAyXFx4MDJcXHgwMlxceEQ3XFx4RDhcXHgwNT4gXFx4MDJcXHhEOFwiK1xuXHRcdFwiXFx1MDEyM1xceDAzXFx4MDJcXHgwMlxceDAyXFx4RDlcXHhEQVxceDA1XFxmXFx4MDdcXHgwMlxceERBXFx4REJcXHgwN1xcclxceDAyXFx4MDJcXHhEQlwiK1xuXHRcdFwiXFx4RERcXHgwNVxceDBFXFxiXFx4MDJcXHhEQ1xceERFXFx4MDdcXHJcXHgwMlxceDAyXFx4RERcXHhEQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx4RERcXHhERVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhERVxceERGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhERlxceEUxXFx4MDdcXHgxNFxceDAyXFx4MDJcXHhFMFxceEUyXCIrXG5cdFx0XCJcXHgwN1xcclxceDAyXFx4MDJcXHhFMVxceEUwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFMVxceEUyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFMlxceEUzXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxceEUzXFx4RTRcXHgwNVxceDFBXFx4MEVcXHgwMlxceEU0XFx4RTZcXHgwN1xcclxceDAyXFx4MDJcXHhFNVxceEU3XCIrXG5cdFx0XCJcXHgwN1xcZlxceDAyXFx4MDJcXHhFNlxceEU1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFNlxceEU3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFN1xceEU4XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxceEU4XFx4RTlcXHgwN1xceDExXFx4MDJcXHgwMlxceEU5XFx4RUFcXHgwN1xcclxceDAyXFx4MDJcXHhFQVxceEVCXCIrXG5cdFx0XCJcXHgwNVApXFx4MDJcXHhFQlxcdTAxMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEVDXFx4RURcXHgwNVxcZlxceDA3XFx4MDJcXHhFRFxceEVFXFx4MDdcIitcblx0XHRcIlxcclxceDAyXFx4MDJcXHhFRVxceEYwXFx4MDVcXHgwRVxcYlxceDAyXFx4RUZcXHhGMVxceDA3XFxyXFx4MDJcXHgwMlxceEYwXFx4RUZcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4RjBcXHhGMVxceDAzXFx4MDJcXHgwMlxceDAyXFx4RjFcXHhGMlxceDAzXFx4MDJcXHgwMlxceDAyXFx4RjJcXHhGNFxceDA3XFx4MTRcIitcblx0XHRcIlxceDAyXFx4MDJcXHhGM1xceEY1XFx4MDdcXHJcXHgwMlxceDAyXFx4RjRcXHhGM1xceDAzXFx4MDJcXHgwMlxceDAyXFx4RjRcXHhGNVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHhGNVxceEY2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhGNlxceEY4XFx4MDVcXHgxQVxceDBFXFx4MDJcXHhGN1xceEY5XFx4MDdcXHJcIitcblx0XHRcIlxceDAyXFx4MDJcXHhGOFxceEY3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhGOFxceEY5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhGOVxceEZBXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxceEZBXFx4RkNcXHgwN1xceDE3XFx4MDJcXHgwMlxceEZCXFx4RkRcXHgwN1xcclxceDAyXFx4MDJcXHhGQ1xceEZCXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxceEZDXFx4RkRcXHgwM1xceDAyXFx4MDJcXHgwMlxceEZEXFx4RkVcXHgwM1xceDAyXFx4MDJcXHgwMlxceEZFXFx4RkZcXHgwNT5cIitcblx0XHRcIiBcXHgwMlxceEZGXFx1MDEwMVxceDA3XFxyXFx4MDJcXHgwMlxcdTAxMDBcXHUwMTAyXFx4MDdcXGZcXHgwMlxceDAyXFx1MDEwMVxcdTAxMDBcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDEwMVxcdTAxMDJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMDJcXHUwMTAzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTAzXCIrXG5cdFx0XCJcXHUwMTA0XFx4MDdcXHgxMVxceDAyXFx4MDJcXHUwMTA0XFx1MDEwNVxceDA3XFxyXFx4MDJcXHgwMlxcdTAxMDVcXHUwMTA2XFx4MDVQKVxceDAyXCIrXG5cdFx0XCJcXHUwMTA2XFx1MDEyM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwN1xcdTAxMDlcXHgwNVxcZlxceDA3XFx4MDJcXHUwMTA4XFx1MDEwQVxceDA3XCIrXG5cdFx0XCJcXHJcXHgwMlxceDAyXFx1MDEwOVxcdTAxMDhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMDlcXHUwMTBBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTBBXCIrXG5cdFx0XCJcXHUwMTBCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTBCXFx1MDEwRFxceDA3XFx4MTRcXHgwMlxceDAyXFx1MDEwQ1xcdTAxMEVcXHgwN1xcclxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxMERcXHUwMTBDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTBEXFx1MDEwRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwRVxcdTAxMEZcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwRlxcdTAxMTBcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAxMTBcXHUwMTIzXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxMTFcXHUwMTEzXFx4MDVcXGZcXHgwN1xceDAyXFx1MDExMlxcdTAxMTRcXHgwN1xcclxceDAyXFx4MDJcXHUwMTEzXFx1MDExMlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTEzXFx1MDExNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDExNFxcdTAxMTVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMTVcIitcblx0XHRcIlxcdTAxMTdcXHgwN1xceDE0XFx4MDJcXHgwMlxcdTAxMTZcXHUwMTE4XFx4MDdcXHJcXHgwMlxceDAyXFx1MDExN1xcdTAxMTZcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDExN1xcdTAxMThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMThcXHUwMTE5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTE5XFx1MDExQVwiK1xuXHRcdFwiXFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMTFBXFx1MDExQ1xceDA3XFxyXFx4MDJcXHgwMlxcdTAxMUJcXHUwMTFEXFx4MDdcXGZcXHgwMlxceDAyXFx1MDExQ1wiK1xuXHRcdFwiXFx1MDExQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDExQ1xcdTAxMURcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMURcXHUwMTFFXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxMUVcXHUwMTFGXFx4MDdcXHgxMVxceDAyXFx4MDJcXHUwMTFGXFx1MDEyMFxceDA3XFxyXFx4MDJcXHgwMlxcdTAxMjBcXHUwMTIxXCIrXG5cdFx0XCJcXHgwNVApXFx4MDJcXHUwMTIxXFx1MDEyM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlxceDgzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXCIrXG5cdFx0XCJcXHg4NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlxceDhEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXFx4OTFcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDEyMlxceDlEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXFx4QThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjJcXHhCOVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTIyXFx4QzVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjJcXHhEOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlxceEVDXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjJcXHUwMTA3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXFx1MDExMVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTIzXFx2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTI0XFx1MDEyNVxceDA3XFx4MEZcXHgwMlxceDAyXFx1MDEyNVxcdTAxMjZcXHgwNVxceDE2XCIrXG5cdFx0XCJcXGZcXHgwMlxcdTAxMjZcXHJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjdcXHUwMTJCXFx4MDVcXHgxMFxcdFxceDAyXFx1MDEyOFxcdTAxMkJcXHgwNVwiK1xuXHRcdFwiXFx4MTJcXG5cXHgwMlxcdTAxMjlcXHUwMTJCXFx4MDVcXHgxNlxcZlxceDAyXFx1MDEyQVxcdTAxMjdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMkFcIitcblx0XHRcIlxcdTAxMjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMkFcXHUwMTI5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTJCXFx4MEZcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDEyQ1xcdTAxMkZcXHgwNVxceDEyXFxuXFx4MDJcXHUwMTJEXFx1MDEyRVxceDA3XFx4MTVcXHgwMlxceDAyXFx1MDEyRVxcdTAxMzBcIitcblx0XHRcIlxceDA1XFx4MTRcXHZcXHgwMlxcdTAxMkZcXHUwMTJEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTMwXFx1MDEzMVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTMxXFx1MDEyRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzMVxcdTAxMzJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMzJcXHUwMTNCXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxMzNcXHUwMTM2XFx4MDVcXHgxNlxcZlxceDAyXFx1MDEzNFxcdTAxMzVcXHgwN1xceDE1XFx4MDJcXHgwMlxcdTAxMzVcIitcblx0XHRcIlxcdTAxMzdcXHgwNVxceDE0XFx2XFx4MDJcXHUwMTM2XFx1MDEzNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzN1xcdTAxMzhcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDEzOFxcdTAxMzZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMzhcXHUwMTM5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTM5XFx1MDEzQlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTNBXFx1MDEyQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzQVxcdTAxMzNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDEzQlxceDExXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTNDXFx1MDEzRFxceDA1XFx4MThcXHJcXHgwMlxcdTAxM0RcXHgxM1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTNFXFx1MDE0MVxceDA1XFx4MTJcXG5cXHgwMlxcdTAxM0ZcXHUwMTQxXFx4MDVcXHgxNlxcZlxceDAyXFx1MDE0MFxcdTAxM0VcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0MFxcdTAxM0ZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNDFcXHgxNVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTQyXFx1MDE0M1xceDA3XFx2XFx4MDJcXHgwMlxcdTAxNDNcXHgxN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0NFxcdTAxNDVcXHgwNVxceDE2XCIrXG5cdFx0XCJcXGZcXHgwMlxcdTAxNDVcXHUwMTQ2XFx4MDdcXHgxOFxceDAyXFx4MDJcXHUwMTQ2XFx4MTlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNDdcXHUwMTQ4XCIrXG5cdFx0XCJcXGJcXHgwRVxceDAxXFx4MDJcXHUwMTQ4XFx1MDE1MFxceDA1XFx4MUNcXHgwRlxceDAyXFx1MDE0OVxcdTAxNTBcXHgwNVxcXCJcXHgxMlxceDAyXFx1MDE0QVwiK1xuXHRcdFwiXFx1MDE1MFxceDA1JlxceDE0XFx4MDJcXHUwMTRCXFx1MDE1MFxceDA1LFxceDE3XFx4MDJcXHUwMTRDXFx1MDE1MFxceDA1LlxceDE4XFx4MDJcIitcblx0XHRcIlxcdTAxNERcXHUwMTUwXFx4MDUwXFx4MTlcXHgwMlxcdTAxNEVcXHUwMTUwXFx4MDU2XFx4MUNcXHgwMlxcdTAxNEZcXHUwMTQ3XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxNEZcXHUwMTQ5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTRGXFx1MDE0QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0RlwiK1xuXHRcdFwiXFx1MDE0QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0RlxcdTAxNENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNEZcXHUwMTREXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxNEZcXHUwMTRFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTUwXFx1MDE2OFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1MVwiK1xuXHRcdFwiXFx1MDE1M1xcZlxcblxceDAyXFx4MDJcXHUwMTUyXFx1MDE1NFxceDA3XFxyXFx4MDJcXHgwMlxcdTAxNTNcXHUwMTUyXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxNTNcXHUwMTU0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTU0XFx1MDE1NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1NVxcdTAxNTdcXHgwN1wiK1xuXHRcdFwiXFxmXFx4MDJcXHgwMlxcdTAxNTZcXHUwMTU1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTU2XFx1MDE1N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1N1wiK1xuXHRcdFwiXFx1MDE1OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1OFxcdTAxNUFcXHgwN1xcclxceDAyXFx4MDJcXHUwMTU5XFx1MDE1OFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTU5XFx1MDE1QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1QVxcdTAxNUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNUJcXHUwMTVEXCIrXG5cdFx0XCJcXHRcXHgwM1xceDAyXFx4MDJcXHUwMTVDXFx1MDE1RVxceDA3XFxyXFx4MDJcXHgwMlxcdTAxNURcXHUwMTVDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTVEXCIrXG5cdFx0XCJcXHUwMTVFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTVFXFx1MDE2MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1RlxcdTAxNjFcXHgwN1xcZlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxNjBcXHUwMTVGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTYwXFx1MDE2MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2MVxcdTAxNjNcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2MlxcdTAxNjRcXHgwN1xcclxceDAyXFx4MDJcXHUwMTYzXFx1MDE2MlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTYzXFx1MDE2NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2NFxcdTAxNjVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjVcXHUwMTY3XFx4MDVcIitcblx0XHRcIlxceDFBXFx4MEVcXHZcXHUwMTY2XFx1MDE1MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2N1xcdTAxNkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjhcIitcblx0XHRcIlxcdTAxNjZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjhcXHUwMTY5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTY5XFx4MUJcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDE2QVxcdTAxNjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNkJcXHUwMTZEXFx4MDcgXFx4MDJcXHgwMlxcdTAxNkNcXHUwMTZFXCIrXG5cdFx0XCJcXHgwN1xcclxceDAyXFx4MDJcXHUwMTZEXFx1MDE2Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2RFxcdTAxNkVcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE2RVxcdTAxNzBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNkZcXHUwMTcxXFx4MDdcXGZcXHgwMlxceDAyXFx1MDE3MFxcdTAxNkZcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDE3MFxcdTAxNzFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNzFcXHUwMTczXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTcyXCIrXG5cdFx0XCJcXHUwMTc0XFx4MDdcXHJcXHgwMlxceDAyXFx1MDE3M1xcdTAxNzJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNzNcXHUwMTc0XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxNzRcXHUwMTc2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTc1XFx1MDE3N1xceDA1XFx4MUVcXHgxMFxceDAyXFx1MDE3NlxcdTAxNzVcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3NlxcdTAxNzdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNzdcXHUwMTc5XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxNzhcXHUwMTdBXFx4MDdcXHJcXHgwMlxceDAyXFx1MDE3OVxcdTAxNzhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNzlcXHUwMTdBXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxN0FcXHUwMTdDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTdCXFx1MDE3RFxceDA3XFxmXFx4MDJcXHgwMlxcdTAxN0NcIitcblx0XHRcIlxcdTAxN0JcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxN0NcXHUwMTdEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTdEXFx1MDE3RlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTdFXFx1MDE4MFxceDA3XFxyXFx4MDJcXHgwMlxcdTAxN0ZcXHUwMTdFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTdGXFx1MDE4MFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTgwXFx1MDE4MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4MVxcdTAxODNcXHgwNyFcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTgyXFx1MDE4NFxceDA3XFxyXFx4MDJcXHgwMlxcdTAxODNcXHUwMTgyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTgzXFx1MDE4NFxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTg0XFx1MDE4NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4NVxcdTAxODdcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTg2XCIrXG5cdFx0XCJcXHUwMTg1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTg2XFx1MDE4N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4N1xcdTAxODlcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDE4OFxcdTAxOEFcXHgwN1xcclxceDAyXFx4MDJcXHUwMTg5XFx1MDE4OFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4OVxcdTAxOEFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4QVxcdTAxOEJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOEJcXHUwMThEXFx4MDdcXHgxQlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxOENcXHUwMThFXFx4MDdcXHJcXHgwMlxceDAyXFx1MDE4RFxcdTAxOENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOERcXHUwMThFXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxOEVcXHUwMTkwXCI7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9zZXJpYWxpemVkQVROU2VnbWVudDE6IHN0cmluZyA9XG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOEZcXHUwMTkxXFx4MDdcXGZcXHgwMlxceDAyXFx1MDE5MFxcdTAxOEZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE5MFxcdTAxOTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOTFcXHUwMTkzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTkyXFx1MDE5NFxceDA3XCIrXG5cdFx0XCJcXHJcXHgwMlxceDAyXFx1MDE5M1xcdTAxOTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOTNcXHUwMTk0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTk0XCIrXG5cdFx0XCJcXHUwMTk1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTk1XFx1MDE5N1xceDA1XFx4MUFcXHgwRVxceDAyXFx1MDE5NlxcdTAxOThcXHgwN1xceDE4XCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDE5N1xcdTAxOTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOTdcXHUwMTk4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTk4XCIrXG5cdFx0XCJcXHUwMUIyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTk5XFx1MDE5QlxceDA1IFxceDExXFx4MDJcXHUwMTlBXFx1MDE5Q1xceDA3XFxyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDE5QlxcdTAxOUFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOUJcXHUwMTlDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTlDXFx1MDE5RVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTlEXFx1MDE5RlxceDA3XFxmXFx4MDJcXHgwMlxcdTAxOUVcXHUwMTlEXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxOUVcXHUwMTlGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTlGXFx1MDFBMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBMFxcdTAxQTJcXHgwN1wiK1xuXHRcdFwiXFxyXFx4MDJcXHgwMlxcdTAxQTFcXHUwMUEwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUExXFx1MDFBMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBMlwiK1xuXHRcdFwiXFx1MDFBM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBM1xcdTAxQTVcXHgwN1xceDFCXFx4MDJcXHgwMlxcdTAxQTRcXHUwMUE2XFx4MDdcXHJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMUE1XFx1MDFBNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBNVxcdTAxQTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQTZcXHUwMUE4XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQTdcXHUwMUE5XFx4MDdcXGZcXHgwMlxceDAyXFx1MDFBOFxcdTAxQTdcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDFBOFxcdTAxQTlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQTlcXHUwMUFCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUFBXFx1MDFBQ1xceDA3XCIrXG5cdFx0XCJcXHJcXHgwMlxceDAyXFx1MDFBQlxcdTAxQUFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQUJcXHUwMUFDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUFDXCIrXG5cdFx0XCJcXHUwMUFEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUFEXFx1MDFBRlxceDA1XFx4MUFcXHgwRVxceDAyXFx1MDFBRVxcdTAxQjBcXHgwN1xceDE4XCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDFBRlxcdTAxQUVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQUZcXHUwMUIwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUIwXCIrXG5cdFx0XCJcXHUwMUIyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUIxXFx1MDE2QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCMVxcdTAxOTlcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDFCMlxceDFEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUIzXFx1MDFCRVxceDA1IFxceDExXFx4MDJcXHUwMUI0XFx1MDFCNlwiK1xuXHRcdFwiXFx4MDdcXHgxNlxceDAyXFx4MDJcXHUwMUI1XFx1MDFCN1xceDA3XFxmXFx4MDJcXHgwMlxcdTAxQjZcXHUwMUI1XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxQjZcXHUwMUI3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUI3XFx1MDFCOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCOFxcdTAxQkFcXHgwN1wiK1xuXHRcdFwiXFxyXFx4MDJcXHgwMlxcdTAxQjlcXHUwMUI4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUI5XFx1MDFCQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCQVwiK1xuXHRcdFwiXFx1MDFCQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCQlxcdTAxQkRcXHgwNSBcXHgxMVxceDAyXFx1MDFCQ1xcdTAxQjRcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFCRFxcdTAxQzBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQkVcXHUwMUJDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUJFXFx1MDFCRlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUJGXFx4MUZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQzBcXHUwMUJFXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxQzFcXHUwMUNBXFx4MDVcXHgxNlxcZlxceDAyXFx1MDFDMlxcdTAxQzRcXHgwN1xcclxceDAyXFx4MDJcXHUwMUMzXFx1MDFDMlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMUMzXFx1MDFDNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDNFxcdTAxQzVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQzVcIitcblx0XHRcIlxcdTAxQzdcXHgwN1xceDE0XFx4MDJcXHgwMlxcdTAxQzZcXHUwMUM4XFx4MDdcXHJcXHgwMlxceDAyXFx1MDFDN1xcdTAxQzZcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFDN1xcdTAxQzhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQzhcXHUwMUM5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUM5XFx1MDFDQlwiK1xuXHRcdFwiXFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMUNBXFx1MDFDM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDQVxcdTAxQ0JcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDFDQiFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQ0NcXHUwMUNFXFx4MDVcXHgxNlxcZlxceDAyXFx1MDFDRFxcdTAxQ0NcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDFDRFxcdTAxQ0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQ0VcXHUwMUNGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUNGXCIrXG5cdFx0XCJcXHUwMUQxXFx4MDckXFx4MDJcXHgwMlxcdTAxRDBcXHUwMUQyXFx4MDdcXHJcXHgwMlxceDAyXFx1MDFEMVxcdTAxRDBcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFEMVxcdTAxRDJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRDJcXHUwMUQzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUQzXFx1MDFENVwiK1xuXHRcdFwiXFx4MDUkXFx4MTNcXHgwMlxcdTAxRDRcXHUwMUQ2XFx4MDdcXHJcXHgwMlxceDAyXFx1MDFENVxcdTAxRDRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRDVcIitcblx0XHRcIlxcdTAxRDZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRDZcXHUwMUQ3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUQ3XFx1MDFEOFxceDA3JVxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxRDgjXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUQ5XFx1MDFEQlxceDA1JlxceDE0XFx4MDJcXHUwMURBXFx1MDFEQ1xceDA3XFxyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDFEQlxcdTAxREFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxREJcXHUwMURDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMURDXCIrXG5cdFx0XCJcXHUwMUU0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUREXFx1MDFERlxceDA3XFx4MTZcXHgwMlxceDAyXFx1MDFERVxcdTAxRTBcXHgwN1xcclxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxREZcXHUwMURFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMURGXFx1MDFFMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFMFxcdTAxRTFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFMVxcdTAxRTNcXHgwNSRcXHgxM1xceDAyXFx1MDFFMlxcdTAxRERcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDFFM1xcdTAxRTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRTRcXHUwMUUyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUU0XFx1MDFFNVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMUU1XFx1MDIyQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFNlxcdTAxRTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRTdcIitcblx0XHRcIlxcdTAxRTlcXHgwNSZcXHgxNFxceDAyXFx1MDFFOFxcdTAxRUFcXHgwN1xcclxceDAyXFx4MDJcXHUwMUU5XFx1MDFFOFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMUU5XFx1MDFFQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFQVxcdTAxRUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRUJcXHUwMUVEXCIrXG5cdFx0XCJcXHgwN1xcblxceDAyXFx4MDJcXHUwMUVDXFx1MDFFRVxceDA3XFxyXFx4MDJcXHgwMlxcdTAxRURcXHUwMUVDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUVEXCIrXG5cdFx0XCJcXHUwMUVFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUVFXFx1MDFFRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFRlxcdTAxRjFcXHgwNSZcXHgxNFwiK1xuXHRcdFwiXFx4MDJcXHUwMUYwXFx1MDFGMlxceDA3XFxyXFx4MDJcXHgwMlxcdTAxRjFcXHUwMUYwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUYxXFx1MDFGMlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUYyXFx1MDFGQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGM1xcdTAxRjVcXHgwN1xceDE2XFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDFGNFxcdTAxRjZcXHgwN1xcclxceDAyXFx4MDJcXHUwMUY1XFx1MDFGNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGNVxcdTAxRjZcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDFGNlxcdTAxRjdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRjdcXHUwMUY5XFx4MDUkXFx4MTNcXHgwMlxcdTAxRjhcIitcblx0XHRcIlxcdTAxRjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRjlcXHUwMUZDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUZBXFx1MDFGOFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMUZBXFx1MDFGQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGQlxcdTAyMkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRkNcIitcblx0XHRcIlxcdTAxRkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRkRcXHUwMUZGXFx4MDUmXFx4MTRcXHgwMlxcdTAxRkVcXHUwMjAwXFx4MDdcXHJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMUZGXFx1MDFGRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGRlxcdTAyMDBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMDBcXHUwMjAxXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMDFcXHUwMjAzXFx4MDdcXHgxOVxceDAyXFx4MDJcXHUwMjAyXFx1MDIwNFxceDA3XFxyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDIwM1xcdTAyMDJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMDNcXHUwMjA0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjA0XFx1MDIwNVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjA1XFx1MDIwN1xceDA1JlxceDE0XFx4MDJcXHUwMjA2XFx1MDIwOFxceDA3XFxyXFx4MDJcXHgwMlxcdTAyMDdcIitcblx0XHRcIlxcdTAyMDZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMDdcXHUwMjA4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjA4XFx1MDIxMFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjA5XFx1MDIwQlxceDA3XFx4MTZcXHgwMlxceDAyXFx1MDIwQVxcdTAyMENcXHgwN1xcclxceDAyXFx4MDJcXHUwMjBCXFx1MDIwQVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjBCXFx1MDIwQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwQ1xcdTAyMERcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDIwRFxcdTAyMEZcXHgwNSRcXHgxM1xceDAyXFx1MDIwRVxcdTAyMDlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMEZcXHUwMjEyXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyMTBcXHUwMjBFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjEwXFx1MDIxMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxMVwiK1xuXHRcdFwiXFx1MDIyQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxMlxcdTAyMTBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTNcXHUwMjE1XFx4MDUmXFx4MTRcIitcblx0XHRcIlxceDAyXFx1MDIxNFxcdTAyMTZcXHgwN1xcclxceDAyXFx4MDJcXHUwMjE1XFx1MDIxNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxNVxcdTAyMTZcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxNlxcdTAyMTdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTdcXHUwMjE5XFx4MDdcXHgxQVxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyMThcXHUwMjFBXFx4MDdcXHJcXHgwMlxceDAyXFx1MDIxOVxcdTAyMThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTlcXHUwMjFBXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyMUFcXHUwMjFCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjFCXFx1MDIxRFxceDA1JlxceDE0XFx4MDJcXHUwMjFDXCIrXG5cdFx0XCJcXHUwMjFFXFx4MDdcXHJcXHgwMlxceDAyXFx1MDIxRFxcdTAyMUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMURcXHUwMjFFXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyMUVcXHUwMjI2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjFGXFx1MDIyMVxceDA3XFx4MTZcXHgwMlxceDAyXFx1MDIyMFxcdTAyMjJcIitcblx0XHRcIlxceDA3XFxyXFx4MDJcXHgwMlxcdTAyMjFcXHUwMjIwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjIxXFx1MDIyMlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjIyXFx1MDIyM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyM1xcdTAyMjVcXHgwNSRcXHgxM1xceDAyXFx1MDIyNFxcdTAyMUZcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDIyNVxcdTAyMjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMjZcXHUwMjI0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjI2XCIrXG5cdFx0XCJcXHUwMjI3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjI3XFx1MDIyQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyOFxcdTAyMjZcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDIyOVxcdTAxRDlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMjlcXHUwMUU3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjI5XCIrXG5cdFx0XCJcXHUwMUZEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjI5XFx1MDIxM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyQSVcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDIyQlxcdTAyMkZcXHgwNVxceDE4XFxyXFx4MDJcXHUwMjJDXFx1MDIyRlxceDA1OlxceDFFXFx4MDJcXHUwMjJEXFx1MDIyRlxceDA1XCIrXG5cdFx0XCIoXFx4MTVcXHgwMlxcdTAyMkVcXHUwMjJCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjJFXFx1MDIyQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyRVwiK1xuXHRcdFwiXFx1MDIyRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyRlxcJ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzMFxcdTAyMzNcXHgwNVxceDE2XFxmXFx4MDJcIitcblx0XHRcIlxcdTAyMzFcXHUwMjMzXFx4MDUqXFx4MTZcXHgwMlxcdTAyMzJcXHUwMjMwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjMyXFx1MDIzMVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjMzKVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzNFxcdTAyMzVcXHgwN1xcdFxceDAyXFx4MDJcXHUwMjM1K1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjM2XFx1MDIzOFxceDA3IFxceDAyXFx4MDJcXHUwMjM3XFx1MDIzOVxceDA3XFxyXFx4MDJcXHgwMlxcdTAyMzhcIitcblx0XHRcIlxcdTAyMzdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMzhcXHUwMjM5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjM5XFx1MDIzQVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjNBXFx1MDIzQ1xceDA1XFx4MUFcXHgwRVxceDAyXFx1MDIzQlxcdTAyM0RcXHgwN1xcclxceDAyXFx4MDJcXHUwMjNDXFx1MDIzQlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjNDXFx1MDIzRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzRFxcdTAyM0VcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDIzRVxcdTAyM0ZcXHgwNyFcXHgwMlxceDAyXFx1MDIzRi1cXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDBcXHUwMjQxXFx0XFx4MDRcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMjQxXFx1MDI0MlxceDA1JlxceDE0XFx4MDJcXHUwMjQyL1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0M1xcdTAyNDVcXHgwN1xceDFFXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDI0NFxcdTAyNDZcXHgwN1xcclxceDAyXFx4MDJcXHUwMjQ1XFx1MDI0NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0NVxcdTAyNDZcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0NlxcdTAyNDhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDdcXHUwMjQ5XFx4MDdcXGZcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjQ4XFx1MDI0N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0OFxcdTAyNDlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDlcXHUwMjRCXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyNEFcXHUwMjRDXFx4MDdcXHJcXHgwMlxceDAyXFx1MDI0QlxcdTAyNEFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNEJcIitcblx0XHRcIlxcdTAyNENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNENcXHUwMjRFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjREXFx1MDI0RlxceDA1MlxceDFBXCIrXG5cdFx0XCJcXHgwMlxcdTAyNEVcXHUwMjREXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjRFXFx1MDI0RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0RlxcdTAyNTFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1MFxcdTAyNTJcXHgwN1xcclxceDAyXFx4MDJcXHUwMjUxXFx1MDI1MFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjUxXFx1MDI1MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1MlxcdTAyNTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTNcXHUwMjU1XFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHUwMjU0XFx1MDI1M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1NFxcdTAyNTVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTVcIitcblx0XHRcIlxcdTAyNTdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTZcXHUwMjU4XFx4MDdcXHJcXHgwMlxceDAyXFx1MDI1N1xcdTAyNTZcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDI1N1xcdTAyNThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNThcXHUwMjU5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjU5XFx1MDI1QVwiK1xuXHRcdFwiXFx4MDdcXHgxRlxceDAyXFx4MDJcXHUwMjVBMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1QlxcdTAyNURcXHgwNTRcXHgxQlxceDAyXFx1MDI1Q1wiK1xuXHRcdFwiXFx1MDI1RVxceDA3XFxyXFx4MDJcXHgwMlxcdTAyNURcXHUwMjVDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjVEXFx1MDI1RVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMjVFXFx1MDI2Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1RlxcdTAyNjFcXHgwN1xceDE2XFx4MDJcXHgwMlxcdTAyNjBcXHUwMjYyXCIrXG5cdFx0XCJcXHgwN1xcclxceDAyXFx4MDJcXHUwMjYxXFx1MDI2MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2MVxcdTAyNjJcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI2MlxcdTAyNjRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNjNcXHUwMjY1XFx4MDdcXGZcXHgwMlxceDAyXFx1MDI2NFxcdTAyNjNcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDI2NFxcdTAyNjVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNjVcXHUwMjY3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjY2XCIrXG5cdFx0XCJcXHUwMjY4XFx4MDdcXHJcXHgwMlxceDAyXFx1MDI2N1xcdTAyNjZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNjdcXHUwMjY4XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyNjhcXHUwMjY5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjY5XFx1MDI2QlxceDA1NFxceDFCXFx4MDJcXHUwMjZBXFx1MDI1RlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjZCXFx1MDI2RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2Q1xcdTAyNkFcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI2Q1xcdTAyNkRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNkQzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjZFXFx1MDI2Q1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjZGXFx1MDI3MVxceDA1XFx4MUFcXHgwRVxceDAyXFx1MDI3MFxcdTAyNzJcXHgwN1xceDE4XFx4MDJcXHgwMlxcdTAyNzFcIitcblx0XHRcIlxcdTAyNzBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNzFcXHUwMjcyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjcyXFx1MDI3NFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjczXFx1MDI3NVxceDA3XFxyXFx4MDJcXHgwMlxcdTAyNzRcXHUwMjczXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjc0XFx1MDI3NVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjc1XFx1MDI3NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3NlxcdTAyNzhcXHgwN1xceDE0XFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI3N1xcdTAyNzlcXHgwN1xcclxceDAyXFx4MDJcXHUwMjc4XFx1MDI3N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3OFxcdTAyNzlcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDI3OVxcdTAyN0FcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyN0FcXHUwMjdCXFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMjdCXCIrXG5cdFx0XCI1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjdDXFx1MDI3RVxceDA3XFxcIlxceDAyXFx4MDJcXHUwMjdEXFx1MDI3RlxceDA3XFxmXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI3RVxcdTAyN0RcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyN0VcXHUwMjdGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjdGXFx1MDI4MVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjgwXFx1MDI4MlxceDA3XFxyXFx4MDJcXHgwMlxcdTAyODFcXHUwMjgwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjgxXCIrXG5cdFx0XCJcXHUwMjgyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjgyXFx1MDI4NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4M1xcdTAyODVcXHgwN1xcZlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyODRcXHUwMjgzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjg0XFx1MDI4NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4NVxcdTAyODdcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4NlxcdTAyODhcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAyODdcXHUwMjg2XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyODdcXHUwMjg4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjg4XFx1MDI5NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4OVxcdTAyOEJcXHgwN1wiK1xuXHRcdFwiXFx4MTZcXHgwMlxceDAyXFx1MDI4QVxcdTAyOENcXHgwN1xcZlxceDAyXFx4MDJcXHUwMjhCXFx1MDI4QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4QlwiK1xuXHRcdFwiXFx1MDI4Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4Q1xcdTAyOEVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOERcXHUwMjhGXFx4MDdcXHJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMjhFXFx1MDI4RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4RVxcdTAyOEZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOEZcXHUwMjkxXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOTBcXHUwMjkyXFx4MDdcXGZcXHgwMlxceDAyXFx1MDI5MVxcdTAyOTBcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI5MVxcdTAyOTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOTJcXHUwMjkzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjkzXFx1MDI5NVxceDA1XCIrXG5cdFx0XCJcXHgxQVxceDBFXFx4MDJcXHUwMjk0XFx1MDI4OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5NVxcdTAyOThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOTZcIitcblx0XHRcIlxcdTAyOTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOTZcXHUwMjk3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjk3XFx1MDI5QVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjk4XFx1MDI5NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5OVxcdTAyOUJcXHgwN1xcZlxceDAyXFx4MDJcXHUwMjlBXFx1MDI5OVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjlBXFx1MDI5QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5QlxcdTAyOURcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI5Q1xcdTAyOUVcXHgwN1xcclxceDAyXFx4MDJcXHUwMjlEXFx1MDI5Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5RFxcdTAyOUVcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDI5RVxcdTAyQTBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOUZcXHUwMkExXFx4MDdcXGZcXHgwMlxceDAyXFx1MDJBMFwiK1xuXHRcdFwiXFx1MDI5RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBMFxcdTAyQTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQTFcXHUwMkEyXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyQTJcXHUwMkFCXFx4MDcjXFx4MDJcXHgwMlxcdTAyQTNcXHUwMkE2XFx4MDU4XFx4MURcXHgwMlxcdTAyQTRcXHUwMkE1XCIrXG5cdFx0XCJcXHgwN1xcXCJcXHgwMlxceDAyXFx1MDJBNVxcdTAyQTdcXHgwNyNcXHgwMlxceDAyXFx1MDJBNlxcdTAyQTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQTdcIitcblx0XHRcIlxcdTAyQThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQThcXHUwMkE2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkE4XFx1MDJBOVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMkE5XFx1MDJBQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBQVxcdTAyN0NcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQUFcIitcblx0XHRcIlxcdTAyQTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQUI3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkFDXFx1MDJBRFxcYlxceDFEXFx4MDFcXHgwMlwiK1xuXHRcdFwiXFx1MDJBRFxcdTAyQjRcXHgwNVxceDFDXFx4MEZcXHgwMlxcdTAyQUVcXHUwMkI0XFx4MDVcXFwiXFx4MTJcXHgwMlxcdTAyQUZcXHUwMkI0XFx4MDVcIitcblx0XHRcIiZcXHgxNFxceDAyXFx1MDJCMFxcdTAyQjRcXHgwNSxcXHgxN1xceDAyXFx1MDJCMVxcdTAyQjRcXHgwNS5cXHgxOFxceDAyXFx1MDJCMlxcdTAyQjRcIitcblx0XHRcIlxceDA1MFxceDE5XFx4MDJcXHUwMkIzXFx1MDJBQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCM1xcdTAyQUVcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJCM1xcdTAyQUZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQjNcXHUwMkIwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkIzXFx1MDJCMVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMkIzXFx1MDJCMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCNFxcdTAyQ0NcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQjVcIitcblx0XHRcIlxcdTAyQjdcXGZcXHRcXHgwMlxceDAyXFx1MDJCNlxcdTAyQjhcXHgwN1xcclxceDAyXFx4MDJcXHUwMkI3XFx1MDJCNlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkI3XFx1MDJCOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCOFxcdTAyQkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQjlcXHUwMkJCXFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHUwMkJBXFx1MDJCOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCQVxcdTAyQkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQkJcIitcblx0XHRcIlxcdTAyQkRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQkNcXHUwMkJFXFx4MDdcXHJcXHgwMlxceDAyXFx1MDJCRFxcdTAyQkNcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJCRFxcdTAyQkVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQkVcXHUwMkJGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkJGXFx1MDJDMVwiK1xuXHRcdFwiXFx0XFx4MDNcXHgwMlxceDAyXFx1MDJDMFxcdTAyQzJcXHgwN1xcclxceDAyXFx4MDJcXHUwMkMxXFx1MDJDMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDMVwiK1xuXHRcdFwiXFx1MDJDMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDMlxcdTAyQzRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQzNcXHUwMkM1XFx4MDdcXGZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMkM0XFx1MDJDM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDNFxcdTAyQzVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQzVcXHUwMkM3XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQzZcXHUwMkM4XFx4MDdcXHJcXHgwMlxceDAyXFx1MDJDN1xcdTAyQzZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJDN1xcdTAyQzhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQzhcXHUwMkM5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkM5XFx1MDJDQlxceDA1XCIrXG5cdFx0XCI4XFx4MURcXG5cXHUwMkNBXFx1MDJCNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDQlxcdTAyQ0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQ0NcIitcblx0XHRcIlxcdTAyQ0FcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQ0NcXHUwMkNEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkNEOVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMkNFXFx1MDJDQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDRlxcdTAyRDJcXHgwNVxceDE2XFxmXFx4MDJcXHUwMkQwXFx1MDJEMVwiK1xuXHRcdFwiXFx4MDdcXHgxNVxceDAyXFx4MDJcXHUwMkQxXFx1MDJEM1xceDA1PFxceDFGXFx4MDJcXHUwMkQyXFx1MDJEMFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkQzXFx1MDJENFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJENFxcdTAyRDJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRDRcXHUwMkQ1XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyRDVcXHUwMkRFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkQ2XFx1MDJEOVxceDA1XFx4MThcXHJcXHgwMlxcdTAyRDdcIitcblx0XHRcIlxcdTAyRDhcXHgwN1xceDE1XFx4MDJcXHgwMlxcdTAyRDhcXHUwMkRBXFx4MDU8XFx4MUZcXHgwMlxcdTAyRDlcXHUwMkQ3XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyREFcXHUwMkRCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkRCXFx1MDJEOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJEQlxcdTAyRENcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJEQ1xcdTAyREVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRERcXHUwMkNGXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyRERcXHUwMkQ2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkRFO1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJERlxcdTAyRTJcXHgwNVxceDE2XCIrXG5cdFx0XCJcXGZcXHgwMlxcdTAyRTBcXHUwMkUyXFx4MDVcXHgxOFxcclxceDAyXFx1MDJFMVxcdTAyREZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRTFcXHUwMkUwXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRTI9XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkUzXFx1MDJFNFxcYiBcXHgwMVxceDAyXFx1MDJFNFxcdTAyRUJcIitcblx0XHRcIlxceDA1QCFcXHgwMlxcdTAyRTVcXHUwMkVCXFx4MDVCXFxcIlxceDAyXFx1MDJFNlxcdTAyRUJcXHgwNUQjXFx4MDJcXHUwMkU3XFx1MDJFQlxceDA1XCIrXG5cdFx0XCJKJlxceDAyXFx1MDJFOFxcdTAyRUJcXHgwNUxcXCdcXHgwMlxcdTAyRTlcXHUwMkVCXFx4MDVOKFxceDAyXFx1MDJFQVxcdTAyRTNcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDJFQVxcdTAyRTVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRUFcXHUwMkU2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkVBXCIrXG5cdFx0XCJcXHUwMkU3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkVBXFx1MDJFOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFQVxcdTAyRTlcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDJFQlxcdTAzMDBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRUNcXHUwMkVFXFxmXFx0XFx4MDJcXHgwMlxcdTAyRURcXHUwMkVGXCIrXG5cdFx0XCJcXHgwN1xcclxceDAyXFx4MDJcXHUwMkVFXFx1MDJFRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFRVxcdTAyRUZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJFRlxcdTAyRjBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRjBcXHUwMkYyXFx0XFx4MDVcXHgwMlxceDAyXFx1MDJGMVxcdTAyRjNcXHgwN1wiK1xuXHRcdFwiXFxyXFx4MDJcXHgwMlxcdTAyRjJcXHUwMkYxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkYyXFx1MDJGM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGM1wiK1xuXHRcdFwiXFx1MDJGNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGNFxcdTAyRkZcXHgwNT4gXFxuXFx1MDJGNVxcdTAyRjdcXGZcXGJcXHgwMlxceDAyXFx1MDJGNlwiK1xuXHRcdFwiXFx1MDJGOFxceDA3XFxyXFx4MDJcXHgwMlxcdTAyRjdcXHUwMkY2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkY3XFx1MDJGOFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMkY4XFx1MDJGOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGOVxcdTAyRkJcXHRcXHgwNlxceDAyXFx4MDJcXHUwMkZBXFx1MDJGQ1wiK1xuXHRcdFwiXFx4MDdcXHJcXHgwMlxceDAyXFx1MDJGQlxcdTAyRkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRkJcXHUwMkZDXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyRkNcXHUwMkZEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkZEXFx1MDJGRlxceDA1PiBcXHRcXHUwMkZFXFx1MDJFQ1xceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMkZFXFx1MDJGNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGRlxcdTAzMDJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDBcXHUwMkZFXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDBcXHUwMzAxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzAxP1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwMlwiK1xuXHRcdFwiXFx1MDMwMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwM1xcdTAzMDRcXHRcXHgwNlxceDAyXFx4MDJcXHUwMzA0XFx1MDMwNVxceDA1PiBcXHgwMlwiK1xuXHRcdFwiXFx1MDMwNUFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDZcXHUwMzA4XFx4MDdcXFwiXFx4MDJcXHgwMlxcdTAzMDdcXHUwMzA5XFx4MDdcXGZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzA4XFx1MDMwN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwOFxcdTAzMDlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDlcXHUwMzBCXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMEFcXHUwMzBDXFx4MDdcXHJcXHgwMlxceDAyXFx1MDMwQlxcdTAzMEFcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDMwQlxcdTAzMENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMENcXHUwMzBFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzBEXFx1MDMwRlxceDA3XCIrXG5cdFx0XCJcXGZcXHgwMlxceDAyXFx1MDMwRVxcdTAzMERcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMEVcXHUwMzBGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzBGXCIrXG5cdFx0XCJcXHUwMzExXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzEwXFx1MDMxMlxceDA1PiBcXHgwMlxcdTAzMTFcXHUwMzEwXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzMTFcXHUwMzEyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzEyXFx1MDMyMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxM1xcdTAzMTVcXHgwN1wiK1xuXHRcdFwiXFx4MTZcXHgwMlxceDAyXFx1MDMxNFxcdTAzMTZcXHgwN1xcZlxceDAyXFx4MDJcXHUwMzE1XFx1MDMxNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxNVwiK1xuXHRcdFwiXFx1MDMxNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxNlxcdTAzMThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMTdcXHUwMzE5XFx4MDdcXHJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzE4XFx1MDMxN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxOFxcdTAzMTlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMTlcXHUwMzFCXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMUFcXHUwMzFDXFx4MDdcXGZcXHgwMlxceDAyXFx1MDMxQlxcdTAzMUFcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDMxQlxcdTAzMUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMUNcXHUwMzFEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzFEXFx1MDMxRlxceDA1XCIrXG5cdFx0XCI+IFxceDAyXFx1MDMxRVxcdTAzMTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMUZcXHUwMzIyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzIwXFx1MDMxRVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzIwXFx1MDMyMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyMVxcdTAzMjRcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDMyMlxcdTAzMjBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjNcXHUwMzI1XFx4MDdcXGZcXHgwMlxceDAyXFx1MDMyNFxcdTAzMjNcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDMyNFxcdTAzMjVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjVcXHUwMzI3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzI2XCIrXG5cdFx0XCJcXHUwMzI4XFx4MDdcXHJcXHgwMlxceDAyXFx1MDMyN1xcdTAzMjZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjdcXHUwMzI4XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzMjhcXHUwMzJBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzI5XFx1MDMyQlxceDA3XFxmXFx4MDJcXHgwMlxcdTAzMkFcXHUwMzI5XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMkFcXHUwMzJCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzJCXFx1MDMyQ1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzJDXFx1MDMyRFxceDA3I1xceDAyXFx4MDJcXHUwMzJEQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyRVxcdTAzMzBcXHgwN1xceDFFXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDMyRlxcdTAzMzFcXHgwN1xcclxceDAyXFx4MDJcXHUwMzMwXFx1MDMyRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzMFxcdTAzMzFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzMVxcdTAzMzNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMzJcXHUwMzM0XFx4MDdcXGZcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzMzXFx1MDMzMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzM1xcdTAzMzRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMzRcXHUwMzM2XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzMzVcXHUwMzM3XFx4MDdcXHJcXHgwMlxceDAyXFx1MDMzNlxcdTAzMzVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMzZcIitcblx0XHRcIlxcdTAzMzdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMzdcXHUwMzM5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzM4XFx1MDMzQVxceDA1RiRcXHgwMlwiK1xuXHRcdFwiXFx1MDMzOVxcdTAzMzhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMzlcXHUwMzNBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzNBXFx1MDMzQ1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMzNCXFx1MDMzRFxceDA3XFxyXFx4MDJcXHgwMlxcdTAzM0NcXHUwMzNCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzNDXCIrXG5cdFx0XCJcXHUwMzNEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzNEXFx1MDMzRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzRVxcdTAzNDBcXHgwN1xcZlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzM0ZcXHUwMzNFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzNGXFx1MDM0MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0MFxcdTAzNDJcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0MVxcdTAzNDNcXHgwN1xcclxceDAyXFx4MDJcXHUwMzQyXFx1MDM0MVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzQyXFx1MDM0M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0M1xcdTAzNDRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDRcXHUwMzQ1XFx4MDdcIitcblx0XHRcIlxceDFGXFx4MDJcXHgwMlxcdTAzNDVFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzQ2XFx1MDM1N1xceDA1SCVcXHgwMlxcdTAzNDdcXHUwMzQ5XCIrXG5cdFx0XCJcXHgwN1xcclxceDAyXFx4MDJcXHUwMzQ4XFx1MDM0N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0OFxcdTAzNDlcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDM0OVxcdTAzNEFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNEFcXHUwMzRDXFx4MDdcXHgxNlxceDAyXFx4MDJcXHUwMzRCXFx1MDM0RFxceDA3XCIrXG5cdFx0XCJcXHJcXHgwMlxceDAyXFx1MDM0Q1xcdTAzNEJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNENcXHUwMzREXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzREXCIrXG5cdFx0XCJcXHUwMzRGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzRFXFx1MDM1MFxceDA3XFxmXFx4MDJcXHgwMlxcdTAzNEZcXHUwMzRFXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzNEZcXHUwMzUwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzUwXFx1MDM1MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM1MVxcdTAzNTNcIitcblx0XHRcIlxceDA3XFxyXFx4MDJcXHgwMlxcdTAzNTJcXHUwMzUxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzUyXFx1MDM1M1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzUzXFx1MDM1NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM1NFxcdTAzNTZcXHgwNUglXFx4MDJcXHUwMzU1XFx1MDM0OFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMzU2XFx1MDM1OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM1N1xcdTAzNTVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNTdcIitcblx0XHRcIlxcdTAzNThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNThHXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzU5XFx1MDM1N1xceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzVBXFx1MDM1Q1xceDA1TFxcJ1xceDAyXFx1MDM1QlxcdTAzNURcXHgwN1xcclxceDAyXFx4MDJcXHUwMzVDXFx1MDM1QlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMzVDXFx1MDM1RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM1RFxcdTAzNUVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNUVcIitcblx0XHRcIlxcdTAzNjBcXHgwN1xceDE0XFx4MDJcXHgwMlxcdTAzNUZcXHUwMzYxXFx4MDdcXHJcXHgwMlxceDAyXFx1MDM2MFxcdTAzNUZcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDM2MFxcdTAzNjFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNjFcXHUwMzYyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzYyXFx1MDM2M1wiK1xuXHRcdFwiXFx4MDVEI1xceDAyXFx1MDM2M1xcdTAzNkZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNjRcXHUwMzY2XFx4MDVMXFwnXFx4MDJcXHUwMzY1XFx1MDM2N1wiK1xuXHRcdFwiXFx4MDdcXHJcXHgwMlxceDAyXFx1MDM2NlxcdTAzNjVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNjZcXHUwMzY3XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzNjdcXHUwMzY4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzY4XFx1MDM2QVxceDA3XFx4MTRcXHgwMlxceDAyXFx1MDM2OVxcdTAzNkJcXHgwN1wiK1xuXHRcdFwiXFxyXFx4MDJcXHgwMlxcdTAzNkFcXHUwMzY5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzZBXFx1MDM2QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2QlwiK1xuXHRcdFwiXFx1MDM2Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2Q1xcdTAzNkRcXHgwNUxcXCdcXHgwMlxcdTAzNkRcXHUwMzZGXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzNkVcXHUwMzVBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzZFXFx1MDM2NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2RklcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDM3MFxcdTAzNzJcXHgwNyBcXHgwMlxceDAyXFx1MDM3MVxcdTAzNzNcXHgwN1xcclxceDAyXFx4MDJcXHUwMzcyXCIrXG5cdFx0XCJcXHUwMzcxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzcyXFx1MDM3M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3M1xcdTAzNzVcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDM3NFxcdTAzNzZcXHgwN1xcZlxceDAyXFx4MDJcXHUwMzc1XFx1MDM3NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3NVxcdTAzNzZcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3NlxcdTAzNzhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNzdcXHUwMzc5XFx4MDdcXHJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzc4XFx1MDM3N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3OFxcdTAzNzlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNzlcXHUwMzdCXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzN0FcXHUwMzdDXFx4MDVcXHgxRVxceDEwXFx4MDJcXHUwMzdCXFx1MDM3QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3QlwiK1xuXHRcdFwiXFx1MDM3Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3Q1xcdTAzN0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzN0RcXHUwMzdGXFx4MDdcXHJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzdFXFx1MDM3RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3RVxcdTAzN0ZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzN0ZcXHUwMzgxXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzODBcXHUwMzgyXFx4MDdcXGZcXHgwMlxceDAyXFx1MDM4MVxcdTAzODBcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDM4MVxcdTAzODJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzODJcXHUwMzg0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzgzXFx1MDM4NVxceDA3XCIrXG5cdFx0XCJcXHJcXHgwMlxceDAyXFx1MDM4NFxcdTAzODNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzODRcXHUwMzg1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzg1XCIrXG5cdFx0XCJcXHUwMzg2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzg2XFx1MDM4OFxceDA3IVxceDAyXFx4MDJcXHUwMzg3XFx1MDM4OVxceDA3XFxyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDM4OFxcdTAzODdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzODhcXHUwMzg5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzg5XFx1MDM4QlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzhBXFx1MDM4Q1xceDA3XFxmXFx4MDJcXHgwMlxcdTAzOEJcXHUwMzhBXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzOEJcXHUwMzhDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzhDXFx1MDM4RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4RFxcdTAzOEZcXHgwN1wiK1xuXHRcdFwiXFxyXFx4MDJcXHgwMlxcdTAzOEVcXHUwMzhEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzhFXFx1MDM4RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4RlwiK1xuXHRcdFwiXFx1MDM5MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5MFxcdTAzOTJcXHgwN1xceDFCXFx4MDJcXHgwMlxcdTAzOTFcXHUwMzkzXFx4MDdcXHJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzkyXFx1MDM5MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5MlxcdTAzOTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOTNcXHUwMzk1XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOTRcXHUwMzk2XFx4MDdcXGZcXHgwMlxceDAyXFx1MDM5NVxcdTAzOTRcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDM5NVxcdTAzOTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOTZcXHUwMzk4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzk3XFx1MDM5OVxceDA3XCIrXG5cdFx0XCJcXHJcXHgwMlxceDAyXFx1MDM5OFxcdTAzOTdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOThcXHUwMzk5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzk5XCIrXG5cdFx0XCJcXHUwMzlBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzlBXFx1MDM5Q1xceDA1XFx4MUFcXHgwRVxceDAyXFx1MDM5QlxcdTAzOURcXHgwN1xceDE4XCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDM5Q1xcdTAzOUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOUNcXHUwMzlEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzlEXCIrXG5cdFx0XCJcXHUwM0I3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzlFXFx1MDNBMFxceDA1IFxceDExXFx4MDJcXHUwMzlGXFx1MDNBMVxceDA3XFxyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDNBMFxcdTAzOUZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQTBcXHUwM0ExXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0ExXFx1MDNBM1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0EyXFx1MDNBNFxceDA3XFxmXFx4MDJcXHgwMlxcdTAzQTNcXHUwM0EyXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzQTNcXHUwM0E0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0E0XFx1MDNBNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBNVxcdTAzQTdcXHgwN1wiK1xuXHRcdFwiXFxyXFx4MDJcXHgwMlxcdTAzQTZcXHUwM0E1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0E2XFx1MDNBN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBN1wiK1xuXHRcdFwiXFx1MDNBOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBOFxcdTAzQUFcXHgwN1xceDFCXFx4MDJcXHgwMlxcdTAzQTlcXHUwM0FCXFx4MDdcXHJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwM0FBXFx1MDNBOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBQVxcdTAzQUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQUJcXHUwM0FEXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQUNcXHUwM0FFXFx4MDdcXGZcXHgwMlxceDAyXFx1MDNBRFxcdTAzQUNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDNBRFxcdTAzQUVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQUVcXHUwM0IwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0FGXFx1MDNCMVxceDA3XCIrXG5cdFx0XCJcXHJcXHgwMlxceDAyXFx1MDNCMFxcdTAzQUZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQjBcXHUwM0IxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0IxXCIrXG5cdFx0XCJcXHUwM0IyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0IyXFx1MDNCNFxceDA1XFx4MUFcXHgwRVxceDAyXFx1MDNCM1xcdTAzQjVcXHgwN1xceDE4XCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDNCNFxcdTAzQjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQjRcXHUwM0I1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0I1XCIrXG5cdFx0XCJcXHUwM0I3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0I2XFx1MDM3MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNCNlxcdTAzOUVcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDNCN0tcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQjhcXHUwM0I5XFx0XFx4MDdcXHgwMlxceDAyXFx1MDNCOU1cXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDNCQVxcdTAzQkNcXHgwNyBcXHgwMlxceDAyXFx1MDNCQlxcdTAzQkRcXHgwN1xcclxceDAyXFx4MDJcXHUwM0JDXFx1MDNCQlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0JDXFx1MDNCRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNCRFxcdTAzQkVcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDNCRVxcdTAzQzBcXHgwNT4gXFx4MDJcXHUwM0JGXFx1MDNDMVxceDA3XFxyXFx4MDJcXHgwMlxcdTAzQzBcXHUwM0JGXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzQzBcXHUwM0MxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0MxXFx1MDNDMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNDMlxcdTAzQzNcIitcblx0XHRcIlxceDA3IVxceDAyXFx4MDJcXHUwM0MzT1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNDNFxcdTAzQzVcXHgwNVIqXFx4MDJcXHUwM0M1UVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwM0M2XFx1MDNDQVxceDA1VCtcXHgwMlxcdTAzQzdcXHUwM0M5XFx4MDVYLVxceDAyXFx1MDNDOFxcdTAzQzdcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDNDOVxcdTAzQ0NcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQ0FcXHUwM0M4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0NBXCIrXG5cdFx0XCJcXHUwM0NCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0NCXFx1MDNENVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNDQ1xcdTAzQ0FcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDNDRFxcdTAzRDFcXHgwNVxcXFwvXFx4MDJcXHUwM0NFXFx1MDNEMFxceDA1WC1cXHgwMlxcdTAzQ0ZcXHUwM0NFXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzRDBcXHUwM0QzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0QxXFx1MDNDRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNEMVwiK1xuXHRcdFwiXFx1MDNEMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNEMlxcdTAzRDVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRDNcXHUwM0QxXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzRDRcXHUwM0M2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0Q0XFx1MDNDRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNENVwiK1xuXHRcdFwiU1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNENlxcdTAzRDhcXHgwN1xcclxceDAyXFx4MDJcXHUwM0Q3XFx1MDNENlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwM0Q3XFx1MDNEOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNEOFxcdTAzREFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRDlcXHUwM0RCXFx4MDVcIitcblx0XHRcIlYsXFx4MDJcXHUwM0RBXFx1MDNEOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNEQlxcdTAzRENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRENcXHUwM0RBXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRENcXHUwM0REXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0REXFx1MDNFM1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwM0RFXFx1MDNFMlxceDA1VixcXHgwMlxcdTAzREZcXHUwM0UyXFx4MDdcXHJcXHgwMlxceDAyXFx1MDNFMFxcdTAzRTJcXHgwN1xceDBGXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDNFMVxcdTAzREVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRTFcXHUwM0RGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0UxXFx1MDNFMFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0UyXFx1MDNFNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNFM1xcdTAzRTFcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDNFM1xcdTAzRTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRTRVXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0U1XFx1MDNFM1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwM0U2XFx1MDNGMFxceDA3XFx4MEVcXHgwMlxceDAyXFx1MDNFN1xcdTAzRjBcXHgwN1xcdlxceDAyXFx4MDJcXHUwM0U4XFx1MDNGMFwiK1xuXHRcdFwiXFx4MDdcXHgxM1xceDAyXFx4MDJcXHUwM0U5XFx1MDNGMFxceDA3XFx4MUVcXHgwMlxceDAyXFx1MDNFQVxcdTAzRjBcXHgwN1xceDFGXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDNFQlxcdTAzRjBcXHgwN1xceDE0XFx4MDJcXHgwMlxcdTAzRUNcXHUwM0YwXFx4MDdcXHgxMVxceDAyXFx4MDJcXHUwM0VEXFx1MDNGMFxceDA3XCIrXG5cdFx0XCJcXHgxNVxceDAyXFx4MDJcXHUwM0VFXFx1MDNGMFxceDA1TFxcJ1xceDAyXFx1MDNFRlxcdTAzRTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRUZcIitcblx0XHRcIlxcdTAzRTdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRUZcXHUwM0U4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0VGXFx1MDNFOVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwM0VGXFx1MDNFQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNFRlxcdTAzRUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRUZcIitcblx0XHRcIlxcdTAzRUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRUZcXHUwM0VEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0VGXFx1MDNFRVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwM0YwV1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNGMVxcdTAzRjRcXHgwNVxcXFwvXFx4MDJcXHUwM0YyXFx1MDNGNFxceDA1XCIrXG5cdFx0XCJaLlxceDAyXFx1MDNGM1xcdTAzRjFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRjNcXHUwM0YyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0Y0WVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0Y1XFx1MDNGOVxceDA1VixcXHgwMlxcdTAzRjZcXHUwM0Y5XFx4MDdcXHJcXHgwMlxceDAyXFx1MDNGN1wiK1xuXHRcdFwiXFx1MDNGOVxceDA3XFx4MEZcXHgwMlxceDAyXFx1MDNGOFxcdTAzRjVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRjhcXHUwM0Y2XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzRjhcXHUwM0Y3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0Y5XFx1MDNGQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNGQVwiK1xuXHRcdFwiXFx1MDNGOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNGQVxcdTAzRkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRkJbXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzRkNcXHUwM0ZEXFx4MDdcXHgxRFxceDAyXFx4MDJcXHUwM0ZEXFx1MDNGRVxceDA1XjBcXHgwMlxcdTAzRkVcXHUwNDAwXFx4MDdcIitcblx0XHRcIlxcclxceDAyXFx4MDJcXHUwM0ZGXFx1MDQwMVxceDA1YDFcXHgwMlxcdTA0MDBcXHUwM0ZGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwNDAwXFx1MDQwMVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwNDAxXFx1MDQwMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDQwMlxcdTA0MDNcXHgwN1xceDFGXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDQwM11cXHgwM1xceDAyXFx4MDJcXHgwMlxcdTA0MDRcXHUwNDA1XFx4MDVcXHgxNlxcZlxceDAyXFx1MDQwNV9cXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDQwNlxcdTA0MDhcXHgwNWQzXFx4MDJcXHUwNDA3XFx1MDQwNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDQwOFxcdTA0MDlcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDQwOVxcdTA0MDdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTA0MDlcXHUwNDBBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwNDBBXCIrXG5cdFx0XCJhXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwNDBCXFx1MDQwRlxceDA3XFx4MUVcXHgwMlxceDAyXFx1MDQwQ1xcdTA0MEVcXHgwNWQzXFx4MDJcXHUwNDBEXCIrXG5cdFx0XCJcXHUwNDBDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwNDBFXFx1MDQxMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDQwRlxcdTA0MERcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDQwRlxcdTA0MTBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTA0MTBcXHUwNDEyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwNDExXCIrXG5cdFx0XCJcXHUwNDBGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwNDEyXFx1MDQxM1xceDA3XFx4MUZcXHgwMlxceDAyXFx1MDQxM2NcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDQxNFxcdTA0MUVcXHgwNWIyXFx4MDJcXHUwNDE1XFx1MDQxQVxceDA1ZjRcXHgwMlxcdTA0MTZcXHUwNDE3XFx4MDdcXGZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwNDE3XFx1MDQxOVxceDA1ZjRcXHgwMlxcdTA0MThcXHUwNDE2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwNDE5XFx1MDQxQ1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwNDFBXFx1MDQxOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDQxQVxcdTA0MUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTA0MUJcIitcblx0XHRcIlxcdTA0MUVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTA0MUNcXHUwNDFBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwNDFEXFx1MDQxNFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwNDFEXFx1MDQxNVxceDAzXFx4MDJcIjtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3NlcmlhbGl6ZWRBVE5TZWdtZW50Mjogc3RyaW5nID1cblx0XHRcIlxceDAyXFx4MDJcXHUwNDFFZVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDQxRlxcdTA0MjBcXHRcXGJcXHgwMlxceDAyXFx1MDQyMGdcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4RDZrb3RcXHg4MFxceDg3XFx4OTVcXHg5OVxceEEyXFx4QUVcXHhCM1xceEJEXFx4QzFcXHhDOVxceENEXFx4RDFcXHhENVxceEREXCIrXG5cdFx0XCJcXHhFMVxceEU2XFx4RjBcXHhGNFxceEY4XFx4RkNcXHUwMTAxXFx1MDEwOVxcdTAxMERcXHUwMTEzXFx1MDExN1xcdTAxMUNcXHUwMTIyXFx1MDEyQVwiK1xuXHRcdFwiXFx1MDEzMVxcdTAxMzhcXHUwMTNBXFx1MDE0MFxcdTAxNEZcXHUwMTUzXFx1MDE1NlxcdTAxNTlcXHUwMTVEXFx1MDE2MFxcdTAxNjNcXHUwMTY4XCIrXG5cdFx0XCJcXHUwMTZEXFx1MDE3MFxcdTAxNzNcXHUwMTc2XFx1MDE3OVxcdTAxN0NcXHUwMTdGXFx1MDE4M1xcdTAxODZcXHUwMTg5XFx1MDE4RFxcdTAxOTBcIitcblx0XHRcIlxcdTAxOTNcXHUwMTk3XFx1MDE5QlxcdTAxOUVcXHUwMUExXFx1MDFBNVxcdTAxQThcXHUwMUFCXFx1MDFBRlxcdTAxQjFcXHUwMUI2XFx1MDFCOVwiK1xuXHRcdFwiXFx1MDFCRVxcdTAxQzNcXHUwMUM3XFx1MDFDQVxcdTAxQ0RcXHUwMUQxXFx1MDFENVxcdTAxREJcXHUwMURGXFx1MDFFNFxcdTAxRTlcXHUwMUVEXCIrXG5cdFx0XCJcXHUwMUYxXFx1MDFGNVxcdTAxRkFcXHUwMUZGXFx1MDIwM1xcdTAyMDdcXHUwMjBCXFx1MDIxMFxcdTAyMTVcXHUwMjE5XFx1MDIxRFxcdTAyMjFcIitcblx0XHRcIlxcdTAyMjZcXHUwMjI5XFx1MDIyRVxcdTAyMzJcXHUwMjM4XFx1MDIzQ1xcdTAyNDVcXHUwMjQ4XFx1MDI0QlxcdTAyNEVcXHUwMjUxXFx1MDI1NFwiK1xuXHRcdFwiXFx1MDI1N1xcdTAyNURcXHUwMjYxXFx1MDI2NFxcdTAyNjdcXHUwMjZDXFx1MDI3MVxcdTAyNzRcXHUwMjc4XFx1MDI3RVxcdTAyODFcXHUwMjg0XCIrXG5cdFx0XCJcXHUwMjg3XFx1MDI4QlxcdTAyOEVcXHUwMjkxXFx1MDI5NlxcdTAyOUFcXHUwMjlEXFx1MDJBMFxcdTAyQThcXHUwMkFBXFx1MDJCM1xcdTAyQjdcIitcblx0XHRcIlxcdTAyQkFcXHUwMkJEXFx1MDJDMVxcdTAyQzRcXHUwMkM3XFx1MDJDQ1xcdTAyRDRcXHUwMkRCXFx1MDJERFxcdTAyRTFcXHUwMkVBXFx1MDJFRVwiK1xuXHRcdFwiXFx1MDJGMlxcdTAyRjdcXHUwMkZCXFx1MDJGRVxcdTAzMDBcXHUwMzA4XFx1MDMwQlxcdTAzMEVcXHUwMzExXFx1MDMxNVxcdTAzMThcXHUwMzFCXCIrXG5cdFx0XCJcXHUwMzIwXFx1MDMyNFxcdTAzMjdcXHUwMzJBXFx1MDMzMFxcdTAzMzNcXHUwMzM2XFx1MDMzOVxcdTAzM0NcXHUwMzNGXFx1MDM0MlxcdTAzNDhcIitcblx0XHRcIlxcdTAzNENcXHUwMzRGXFx1MDM1MlxcdTAzNTdcXHUwMzVDXFx1MDM2MFxcdTAzNjZcXHUwMzZBXFx1MDM2RVxcdTAzNzJcXHUwMzc1XFx1MDM3OFwiK1xuXHRcdFwiXFx1MDM3QlxcdTAzN0VcXHUwMzgxXFx1MDM4NFxcdTAzODhcXHUwMzhCXFx1MDM4RVxcdTAzOTJcXHUwMzk1XFx1MDM5OFxcdTAzOUNcXHUwM0EwXCIrXG5cdFx0XCJcXHUwM0EzXFx1MDNBNlxcdTAzQUFcXHUwM0FEXFx1MDNCMFxcdTAzQjRcXHUwM0I2XFx1MDNCQ1xcdTAzQzBcXHUwM0NBXFx1MDNEMVxcdTAzRDRcIitcblx0XHRcIlxcdTAzRDdcXHUwM0RDXFx1MDNFMVxcdTAzRTNcXHUwM0VGXFx1MDNGM1xcdTAzRjhcXHUwM0ZBXFx1MDQwMFxcdTA0MDlcXHUwNDBGXFx1MDQxQVwiK1xuXHRcdFwiXFx1MDQxRFwiO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IF9zZXJpYWxpemVkQVROOiBzdHJpbmcgPSBVdGlscy5qb2luKFxuXHRcdFtcblx0XHRcdFhEb2NTeW50YXhQYXJzZXIuX3NlcmlhbGl6ZWRBVE5TZWdtZW50MCxcblx0XHRcdFhEb2NTeW50YXhQYXJzZXIuX3NlcmlhbGl6ZWRBVE5TZWdtZW50MSxcblx0XHRcdFhEb2NTeW50YXhQYXJzZXIuX3NlcmlhbGl6ZWRBVE5TZWdtZW50MlxuXHRcdF0sXG5cdFx0XCJcIlxuXHQpO1xuXHRwdWJsaWMgc3RhdGljIF9fQVROOiBBVE47XG5cdHB1YmxpYyBzdGF0aWMgZ2V0IF9BVE4oKTogQVROIHtcblx0XHRpZiAoIVhEb2NTeW50YXhQYXJzZXIuX19BVE4pIHtcblx0XHRcdFhEb2NTeW50YXhQYXJzZXIuX19BVE4gPSBuZXcgQVRORGVzZXJpYWxpemVyKCkuZGVzZXJpYWxpemUoVXRpbHMudG9DaGFyQXJyYXkoWERvY1N5bnRheFBhcnNlci5fc2VyaWFsaXplZEFUTikpO1xuXHRcdH1cblxuXHRcdHJldHVybiBYRG9jU3ludGF4UGFyc2VyLl9fQVROO1xuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50YXRpb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgRU9GKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuRU9GLCAwKTsgfVxuXHRwdWJsaWMgYm9keSgpOiBCb2R5Q29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgQm9keUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2RvY3VtZW50YXRpb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckRvY3VtZW50YXRpb24pIGxpc3RlbmVyLmVudGVyRG9jdW1lbnRhdGlvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERvY3VtZW50YXRpb24pIGxpc3RlbmVyLmV4aXREb2N1bWVudGF0aW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXREb2N1bWVudGF0aW9uKSByZXR1cm4gdmlzaXRvci52aXNpdERvY3VtZW50YXRpb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEJvZHlDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgYW5ub3RhdGlvbnMoKTogQW5ub3RhdGlvbnNDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBBbm5vdGF0aW9uc0NvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyB3aGl0ZXNwYWNlKCk6IFdoaXRlc3BhY2VDb250ZXh0W107XG5cdHB1YmxpYyB3aGl0ZXNwYWNlKGk6IG51bWJlcik6IFdoaXRlc3BhY2VDb250ZXh0O1xuXHRwdWJsaWMgd2hpdGVzcGFjZShpPzogbnVtYmVyKTogV2hpdGVzcGFjZUNvbnRleHQgfCBXaGl0ZXNwYWNlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoV2hpdGVzcGFjZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBXaGl0ZXNwYWNlQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9ib2R5OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJCb2R5KSBsaXN0ZW5lci5lbnRlckJvZHkodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRCb2R5KSBsaXN0ZW5lci5leGl0Qm9keSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0Qm9keSkgcmV0dXJuIHZpc2l0b3IudmlzaXRCb2R5KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBXaGl0ZXNwYWNlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIDApOyB9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3doaXRlc3BhY2U7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlcldoaXRlc3BhY2UpIGxpc3RlbmVyLmVudGVyV2hpdGVzcGFjZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFdoaXRlc3BhY2UpIGxpc3RlbmVyLmV4aXRXaGl0ZXNwYWNlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRXaGl0ZXNwYWNlKSByZXR1cm4gdmlzaXRvci52aXNpdFdoaXRlc3BhY2UodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25zQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHRhZygpOiBUYWdDb250ZXh0W107XG5cdHB1YmxpYyB0YWcoaTogbnVtYmVyKTogVGFnQ29udGV4dDtcblx0cHVibGljIHRhZyhpPzogbnVtYmVyKTogVGFnQ29udGV4dCB8IFRhZ0NvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKFRhZ0NvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBUYWdDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2Fubm90YXRpb25zOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJBbm5vdGF0aW9ucykgbGlzdGVuZXIuZW50ZXJBbm5vdGF0aW9ucyh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEFubm90YXRpb25zKSBsaXN0ZW5lci5leGl0QW5ub3RhdGlvbnModGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEFubm90YXRpb25zKSByZXR1cm4gdmlzaXRvci52aXNpdEFubm90YXRpb25zKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBUYWdDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgdGFnTmFtZSgpOiBUYWdOYW1lQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgVGFnTmFtZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE1JTlVTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTUlOVVMsIDApOyB9XG5cdHB1YmxpYyBkZXNjcmlwdGlvbigpOiBEZXNjcmlwdGlvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIERlc2NyaXB0aW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCAwKTsgfVxuXHRwdWJsaWMgdGFnSWRlbnRpZmllcigpOiBUYWdJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVGFnSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBFUVVBTCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkVRVUFMLCAwKTsgfVxuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBDT0xPTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTE9OLCAwKTsgfVxuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVHlwZUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90YWc7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclRhZykgbGlzdGVuZXIuZW50ZXJUYWcodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRUYWcpIGxpc3RlbmVyLmV4aXRUYWcodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFRhZykgcmV0dXJuIHZpc2l0b3IudmlzaXRUYWcodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFRhZ05hbWVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgQVQoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5BVCwgMCk7IH1cblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdGFnTmFtZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVGFnTmFtZSkgbGlzdGVuZXIuZW50ZXJUYWdOYW1lKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0VGFnTmFtZSkgbGlzdGVuZXIuZXhpdFRhZ05hbWUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFRhZ05hbWUpIHJldHVybiB2aXNpdG9yLnZpc2l0VGFnTmFtZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVGFnSWRlbnRpZmllckNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBwcm9wZXJ0eVRhZ0lkZW50aWZpZXIoKTogUHJvcGVydHlUYWdJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUHJvcGVydHlUYWdJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIG9wdGlvbmFsVGFnSWRlbnRpZmllcigpOiBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90YWdJZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJUYWdJZGVudGlmaWVyKSBsaXN0ZW5lci5lbnRlclRhZ0lkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRUYWdJZGVudGlmaWVyKSBsaXN0ZW5lci5leGl0VGFnSWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VGFnSWRlbnRpZmllcikgcmV0dXJuIHZpc2l0b3IudmlzaXRUYWdJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVRhZ0lkZW50aWZpZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgb3B0aW9uYWxUYWdJZGVudGlmaWVyKCk6IE9wdGlvbmFsVGFnSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsVGFnSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBQRVJJT0QoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBQRVJJT0QoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgUEVSSU9EKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QRVJJT0QsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgb3B0aW9uYWxUYWdPcklkZW50aWZpZXIoKTogT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0W107XG5cdHB1YmxpYyBvcHRpb25hbFRhZ09ySWRlbnRpZmllcihpOiBudW1iZXIpOiBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQ7XG5cdHB1YmxpYyBvcHRpb25hbFRhZ09ySWRlbnRpZmllcihpPzogbnVtYmVyKTogT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0IHwgT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wcm9wZXJ0eVRhZ0lkZW50aWZpZXI7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclByb3BlcnR5VGFnSWRlbnRpZmllcikgbGlzdGVuZXIuZW50ZXJQcm9wZXJ0eVRhZ0lkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRQcm9wZXJ0eVRhZ0lkZW50aWZpZXIpIGxpc3RlbmVyLmV4aXRQcm9wZXJ0eVRhZ0lkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFByb3BlcnR5VGFnSWRlbnRpZmllcikgcmV0dXJuIHZpc2l0b3IudmlzaXRQcm9wZXJ0eVRhZ0lkZW50aWZpZXIodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9wdGlvbmFsVGFnSWRlbnRpZmllckNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBvcHRpb25hbElkZW50aWZpZXIoKTogT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29wdGlvbmFsVGFnSWRlbnRpZmllcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT3B0aW9uYWxUYWdJZGVudGlmaWVyKSBsaXN0ZW5lci5lbnRlck9wdGlvbmFsVGFnSWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9wdGlvbmFsVGFnSWRlbnRpZmllcikgbGlzdGVuZXIuZXhpdE9wdGlvbmFsVGFnSWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T3B0aW9uYWxUYWdJZGVudGlmaWVyKSByZXR1cm4gdmlzaXRvci52aXNpdE9wdGlvbmFsVGFnSWRlbnRpZmllcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgb3B0aW9uYWxUYWdJZGVudGlmaWVyKCk6IE9wdGlvbmFsVGFnSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsVGFnSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29wdGlvbmFsVGFnT3JJZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPcHRpb25hbFRhZ09ySWRlbnRpZmllcikgbGlzdGVuZXIuZW50ZXJPcHRpb25hbFRhZ09ySWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKSBsaXN0ZW5lci5leGl0T3B0aW9uYWxUYWdPcklkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKSByZXR1cm4gdmlzaXRvci52aXNpdE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIElEKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuSUQsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJJZGVudGlmaWVyKSBsaXN0ZW5lci5lbnRlcklkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRJZGVudGlmaWVyKSBsaXN0ZW5lci5leGl0SWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0SWRlbnRpZmllcikgcmV0dXJuIHZpc2l0b3IudmlzaXRJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBRVUVTVElPTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlFVRVNUSU9OLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb3B0aW9uYWxJZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPcHRpb25hbElkZW50aWZpZXIpIGxpc3RlbmVyLmVudGVyT3B0aW9uYWxJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T3B0aW9uYWxJZGVudGlmaWVyKSBsaXN0ZW5lci5leGl0T3B0aW9uYWxJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPcHRpb25hbElkZW50aWZpZXIpIHJldHVybiB2aXNpdG9yLnZpc2l0T3B0aW9uYWxJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHRbXTtcblx0cHVibGljIHR5cGUoaTogbnVtYmVyKTogVHlwZUNvbnRleHQ7XG5cdHB1YmxpYyB0eXBlKGk/OiBudW1iZXIpOiBUeXBlQ29udGV4dCB8IFR5cGVDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhUeXBlQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIFR5cGVDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIFBJUEUoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QSVBFLCAwKTsgfVxuXHRwdWJsaWMgQU1QKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQU1QLCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBsYW1iZGFUeXBlKCk6IExhbWJkYVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBMYW1iZGFUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHR1cGxlVHlwZSgpOiBUdXBsZVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBUdXBsZVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgcHJpbWFyeVR5cGUoKTogUHJpbWFyeVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQcmltYXJ5VHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBwYXJlbnRoZXNpemVkVHlwZSgpOiBQYXJlbnRoZXNpemVkVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHVuYXJ5VHlwZSgpOiBVbmFyeVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBVbmFyeVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgb2JqZWN0VHlwZSgpOiBPYmplY3RUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT2JqZWN0VHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBhcnJheVR5cGUoKTogQXJyYXlUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgQXJyYXlUeXBlQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3R5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclR5cGUpIGxpc3RlbmVyLmVudGVyVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFR5cGUpIGxpc3RlbmVyLmV4aXRUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdFR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIExhbWJkYVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgUEFSRU5fT1BFTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4sIDApOyB9XG5cdHB1YmxpYyBQQVJFTl9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBBUkVOX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgQVJST1coKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5BUlJPVywgMCk7IH1cblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBmb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSgpOiBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFFVRVNUSU9OKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04sIDApOyB9XG5cdHB1YmxpYyBwYXJhbWV0ZXIoKTogUGFyYW1ldGVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUGFyYW1ldGVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2xhbWJkYVR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckxhbWJkYVR5cGUpIGxpc3RlbmVyLmVudGVyTGFtYmRhVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdExhbWJkYVR5cGUpIGxpc3RlbmVyLmV4aXRMYW1iZGFUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRMYW1iZGFUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdExhbWJkYVR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHBhcmFtZXRlcigpOiBQYXJhbWV0ZXJDb250ZXh0W107XG5cdHB1YmxpYyBwYXJhbWV0ZXIoaTogbnVtYmVyKTogUGFyYW1ldGVyQ29udGV4dDtcblx0cHVibGljIHBhcmFtZXRlcihpPzogbnVtYmVyKTogUGFyYW1ldGVyQ29udGV4dCB8IFBhcmFtZXRlckNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKFBhcmFtZXRlckNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBQYXJhbWV0ZXJDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTU1BKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQ09NTUEoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQ09NTUEoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9mb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UpIGxpc3RlbmVyLmVudGVyRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSkgbGlzdGVuZXIuZXhpdEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgQ09MT04oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT0xPTiwgMCk7IH1cblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wYXJhbWV0ZXI7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclBhcmFtZXRlcikgbGlzdGVuZXIuZW50ZXJQYXJhbWV0ZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRQYXJhbWV0ZXIpIGxpc3RlbmVyLmV4aXRQYXJhbWV0ZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFBhcmFtZXRlcikgcmV0dXJuIHZpc2l0b3IudmlzaXRQYXJhbWV0ZXIodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFR1cGxlVHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBMRVNTVEhBTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkxFU1NUSEFOLCAwKTsgfVxuXHRwdWJsaWMgdHVwbGVUeXBlU2VxdWVuY2UoKTogVHVwbGVUeXBlU2VxdWVuY2VDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBUdXBsZVR5cGVTZXF1ZW5jZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBHUkVBVEVSVEhBTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkdSRUFURVJUSEFOLCAwKTsgfVxuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3R1cGxlVHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVHVwbGVUeXBlKSBsaXN0ZW5lci5lbnRlclR1cGxlVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFR1cGxlVHlwZSkgbGlzdGVuZXIuZXhpdFR1cGxlVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VHVwbGVUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdFR1cGxlVHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVHVwbGVUeXBlU2VxdWVuY2VDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgcHJpbWFyeVR5cGUoKTogUHJpbWFyeVR5cGVDb250ZXh0W107XG5cdHB1YmxpYyBwcmltYXJ5VHlwZShpOiBudW1iZXIpOiBQcmltYXJ5VHlwZUNvbnRleHQ7XG5cdHB1YmxpYyBwcmltYXJ5VHlwZShpPzogbnVtYmVyKTogUHJpbWFyeVR5cGVDb250ZXh0IHwgUHJpbWFyeVR5cGVDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhQcmltYXJ5VHlwZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBQcmltYXJ5VHlwZUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT01NQSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIENPTU1BKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIENPTU1BKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTU1BLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIHR1cGxlVHlwZVNlcXVlbmNlKCk6IFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dFtdO1xuXHRwdWJsaWMgdHVwbGVUeXBlU2VxdWVuY2UoaTogbnVtYmVyKTogVHVwbGVUeXBlU2VxdWVuY2VDb250ZXh0O1xuXHRwdWJsaWMgdHVwbGVUeXBlU2VxdWVuY2UoaT86IG51bWJlcik6IFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dCB8IFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoVHVwbGVUeXBlU2VxdWVuY2VDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgVHVwbGVUeXBlU2VxdWVuY2VDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIEVYVEVORFMoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5FWFRFTkRTLCAwKTsgfVxuXHRwdWJsaWMgQU1QKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQU1QLCAwKTsgfVxuXHRwdWJsaWMgUElQRSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBJUEUsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90dXBsZVR5cGVTZXF1ZW5jZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVHVwbGVUeXBlU2VxdWVuY2UpIGxpc3RlbmVyLmVudGVyVHVwbGVUeXBlU2VxdWVuY2UodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRUdXBsZVR5cGVTZXF1ZW5jZSkgbGlzdGVuZXIuZXhpdFR1cGxlVHlwZVNlcXVlbmNlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRUdXBsZVR5cGVTZXF1ZW5jZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRUdXBsZVR5cGVTZXF1ZW5jZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUHJpbWFyeVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgb3B0aW9uYWxJZGVudGlmaWVyKCk6IE9wdGlvbmFsSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBwcm9wZXJ0eUlkZW50aWZpZXIoKTogUHJvcGVydHlJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUHJvcGVydHlJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGlkZW50aWZpZXJPcktleXdvcmQoKTogSWRlbnRpZmllck9yS2V5d29yZENvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJPcktleXdvcmRDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfcHJpbWFyeVR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclByaW1hcnlUeXBlKSBsaXN0ZW5lci5lbnRlclByaW1hcnlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0UHJpbWFyeVR5cGUpIGxpc3RlbmVyLmV4aXRQcmltYXJ5VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0UHJpbWFyeVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0UHJpbWFyeVR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJPcktleXdvcmRDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBrZXl3b3JkKCk6IEtleXdvcmRDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBLZXl3b3JkQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2lkZW50aWZpZXJPcktleXdvcmQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlcklkZW50aWZpZXJPcktleXdvcmQpIGxpc3RlbmVyLmVudGVySWRlbnRpZmllck9yS2V5d29yZCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdElkZW50aWZpZXJPcktleXdvcmQpIGxpc3RlbmVyLmV4aXRJZGVudGlmaWVyT3JLZXl3b3JkKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRJZGVudGlmaWVyT3JLZXl3b3JkKSByZXR1cm4gdmlzaXRvci52aXNpdElkZW50aWZpZXJPcktleXdvcmQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEtleXdvcmRDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgTnVsbExpdGVyYWwoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbCwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2tleXdvcmQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlcktleXdvcmQpIGxpc3RlbmVyLmVudGVyS2V5d29yZCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEtleXdvcmQpIGxpc3RlbmVyLmV4aXRLZXl3b3JkKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRLZXl3b3JkKSByZXR1cm4gdmlzaXRvci52aXNpdEtleXdvcmQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFBBUkVOX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBQQVJFTl9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBBUkVOX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wYXJlbnRoZXNpemVkVHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyUGFyZW50aGVzaXplZFR5cGUpIGxpc3RlbmVyLmVudGVyUGFyZW50aGVzaXplZFR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRQYXJlbnRoZXNpemVkVHlwZSkgbGlzdGVuZXIuZXhpdFBhcmVudGhlc2l6ZWRUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRQYXJlbnRoZXNpemVkVHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRQYXJlbnRoZXNpemVkVHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVW5hcnlUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHByaW1hcnlUeXBlKCk6IFByaW1hcnlUeXBlQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgUHJpbWFyeVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgQU1QKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQU1QLCAwKTsgfVxuXHRwdWJsaWMgU1RBUigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNUQVIsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV91bmFyeVR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclVuYXJ5VHlwZSkgbGlzdGVuZXIuZW50ZXJVbmFyeVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRVbmFyeVR5cGUpIGxpc3RlbmVyLmV4aXRVbmFyeVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFVuYXJ5VHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRVbmFyeVR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9iamVjdFR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgQlJBQ0VfT1BFTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4sIDApOyB9XG5cdHB1YmxpYyBCUkFDRV9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBvYmplY3RQYWlyU2VxdWVuY2VUeXBlKCk6IE9iamVjdFBhaXJTZXF1ZW5jZVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPYmplY3RQYWlyU2VxdWVuY2VUeXBlQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdFR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9iamVjdFR5cGUpIGxpc3RlbmVyLmVudGVyT2JqZWN0VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9iamVjdFR5cGUpIGxpc3RlbmVyLmV4aXRPYmplY3RUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPYmplY3RUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdE9iamVjdFR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9iamVjdFBhaXJTZXF1ZW5jZVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgb2JqZWN0UGFpclR5cGUoKTogT2JqZWN0UGFpclR5cGVDb250ZXh0W107XG5cdHB1YmxpYyBvYmplY3RQYWlyVHlwZShpOiBudW1iZXIpOiBPYmplY3RQYWlyVHlwZUNvbnRleHQ7XG5cdHB1YmxpYyBvYmplY3RQYWlyVHlwZShpPzogbnVtYmVyKTogT2JqZWN0UGFpclR5cGVDb250ZXh0IHwgT2JqZWN0UGFpclR5cGVDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhPYmplY3RQYWlyVHlwZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBPYmplY3RQYWlyVHlwZUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT01NQSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIENPTU1BKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIENPTU1BKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTU1BLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdFBhaXJTZXF1ZW5jZVR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJTZXF1ZW5jZVR5cGUpIGxpc3RlbmVyLmVudGVyT2JqZWN0UGFpclNlcXVlbmNlVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9iamVjdFBhaXJTZXF1ZW5jZVR5cGUpIGxpc3RlbmVyLmV4aXRPYmplY3RQYWlyU2VxdWVuY2VUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPYmplY3RQYWlyU2VxdWVuY2VUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdE9iamVjdFBhaXJTZXF1ZW5jZVR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9iamVjdFBhaXJUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHRbXTtcblx0cHVibGljIHR5cGUoaTogbnVtYmVyKTogVHlwZUNvbnRleHQ7XG5cdHB1YmxpYyB0eXBlKGk/OiBudW1iZXIpOiBUeXBlQ29udGV4dCB8IFR5cGVDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhUeXBlQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIFR5cGVDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTE9OKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ09MT04sIDApOyB9XG5cdHB1YmxpYyBRVUVTVElPTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlFVRVNUSU9OLCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RQYWlyVHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT2JqZWN0UGFpclR5cGUpIGxpc3RlbmVyLmVudGVyT2JqZWN0UGFpclR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPYmplY3RQYWlyVHlwZSkgbGlzdGVuZXIuZXhpdE9iamVjdFBhaXJUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPYmplY3RQYWlyVHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRPYmplY3RQYWlyVHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQXJyYXlUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEJSQUNLRVRfT1BFTigpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIEJSQUNLRVRfT1BFTihpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBCUkFDS0VUX09QRU4oaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU4pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfT1BFTiwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBCUkFDS0VUX0NMT1NFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQlJBQ0tFVF9DTE9TRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBCUkFDS0VUX0NMT1NFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9DTE9TRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9DTE9TRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHRbXTtcblx0cHVibGljIHR5cGUoaTogbnVtYmVyKTogVHlwZUNvbnRleHQ7XG5cdHB1YmxpYyB0eXBlKGk/OiBudW1iZXIpOiBUeXBlQ29udGV4dCB8IFR5cGVDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhUeXBlQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIFR5cGVDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTU1BKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQ09NTUEoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQ09NTUEoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgbm90QXJyYXlUeXBlKCk6IE5vdEFycmF5VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE5vdEFycmF5VHlwZUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9hcnJheVR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckFycmF5VHlwZSkgbGlzdGVuZXIuZW50ZXJBcnJheVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRBcnJheVR5cGUpIGxpc3RlbmVyLmV4aXRBcnJheVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEFycmF5VHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRBcnJheVR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE5vdEFycmF5VHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBub3RBcnJheVR5cGUoKTogTm90QXJyYXlUeXBlQ29udGV4dFtdO1xuXHRwdWJsaWMgbm90QXJyYXlUeXBlKGk6IG51bWJlcik6IE5vdEFycmF5VHlwZUNvbnRleHQ7XG5cdHB1YmxpYyBub3RBcnJheVR5cGUoaT86IG51bWJlcik6IE5vdEFycmF5VHlwZUNvbnRleHQgfCBOb3RBcnJheVR5cGVDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhOb3RBcnJheVR5cGVDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgTm90QXJyYXlUeXBlQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBQSVBFKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUElQRSwgMCk7IH1cblx0cHVibGljIEFNUCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkFNUCwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgbGFtYmRhVHlwZSgpOiBMYW1iZGFUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgTGFtYmRhVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyB0dXBsZVR5cGUoKTogVHVwbGVUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVHVwbGVUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHByaW1hcnlUeXBlKCk6IFByaW1hcnlUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUHJpbWFyeVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgcGFyZW50aGVzaXplZFR5cGUoKTogUGFyZW50aGVzaXplZFR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQYXJlbnRoZXNpemVkVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyB1bmFyeVR5cGUoKTogVW5hcnlUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVW5hcnlUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIG9iamVjdFR5cGUoKTogT2JqZWN0VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9iamVjdFR5cGVDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfbm90QXJyYXlUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJOb3RBcnJheVR5cGUpIGxpc3RlbmVyLmVudGVyTm90QXJyYXlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0Tm90QXJyYXlUeXBlKSBsaXN0ZW5lci5leGl0Tm90QXJyYXlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXROb3RBcnJheVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0Tm90QXJyYXlUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUlkZW50aWZpZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBQRVJJT0QoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBQRVJJT0QoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgUEVSSU9EKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QRVJJT0QsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgb3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKCk6IE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllckNvbnRleHRbXTtcblx0cHVibGljIG9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcihpOiBudW1iZXIpOiBPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXJDb250ZXh0O1xuXHRwdWJsaWMgb3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKGk/OiBudW1iZXIpOiBPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXJDb250ZXh0IHwgT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllckNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgb3B0aW9uYWxJZGVudGlmaWVyKCk6IE9wdGlvbmFsSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wcm9wZXJ0eUlkZW50aWZpZXI7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclByb3BlcnR5SWRlbnRpZmllcikgbGlzdGVuZXIuZW50ZXJQcm9wZXJ0eUlkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRQcm9wZXJ0eUlkZW50aWZpZXIpIGxpc3RlbmVyLmV4aXRQcm9wZXJ0eUlkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFByb3BlcnR5SWRlbnRpZmllcikgcmV0dXJuIHZpc2l0b3IudmlzaXRQcm9wZXJ0eUlkZW50aWZpZXIodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllckNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIG9wdGlvbmFsSWRlbnRpZmllcigpOiBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIpIGxpc3RlbmVyLmVudGVyT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKSBsaXN0ZW5lci5leGl0T3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIpIHJldHVybiB2aXNpdG9yLnZpc2l0T3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHVuYXJ5RXhwcmVzc2lvbigpOiBVbmFyeUV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBVbmFyeUV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dFtdO1xuXHRwdWJsaWMgZXhwcmVzc2lvbihpOiBudW1iZXIpOiBFeHByZXNzaW9uQ29udGV4dDtcblx0cHVibGljIGV4cHJlc3Npb24oaT86IG51bWJlcik6IEV4cHJlc3Npb25Db250ZXh0IHwgRXhwcmVzc2lvbkNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKEV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1RBUigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNUQVIsIDApOyB9XG5cdHB1YmxpYyBGT1JXQVJEX1NMQVNIKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSCwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgUExVUygpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBMVVMsIDApOyB9XG5cdHB1YmxpYyBNSU5VUygpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk1JTlVTLCAwKTsgfVxuXHRwdWJsaWMgYXJyYXlFeHByZXNzaW9uKCk6IEFycmF5RXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEFycmF5RXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBvYmplY3RFeHByZXNzaW9uKCk6IE9iamVjdEV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPYmplY3RFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGxhbWJkYUV4cHJlc3Npb24oKTogTGFtYmRhRXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIExhbWJkYUV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgbGl0ZXJhbEV4cHJlc3Npb24oKTogTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBwYXJlbnRoZXNpemVkRXhwcmVzc2lvbigpOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2V4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdEV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFVuYXJ5RXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBleHByZXNzaW9uKCk6IEV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFBMVVMoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QTFVTLCAwKTsgfVxuXHRwdWJsaWMgTUlOVVMoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5NSU5VUywgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3VuYXJ5RXhwcmVzc2lvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVW5hcnlFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlclVuYXJ5RXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFVuYXJ5RXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdFVuYXJ5RXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VW5hcnlFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdFVuYXJ5RXhwcmVzc2lvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQXJyYXlFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEJSQUNLRVRfT1BFTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfT1BFTiwgMCk7IH1cblx0cHVibGljIEJSQUNLRVRfQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBleHByZXNzaW9uKCk6IEV4cHJlc3Npb25Db250ZXh0W107XG5cdHB1YmxpYyBleHByZXNzaW9uKGk6IG51bWJlcik6IEV4cHJlc3Npb25Db250ZXh0O1xuXHRwdWJsaWMgZXhwcmVzc2lvbihpPzogbnVtYmVyKTogRXhwcmVzc2lvbkNvbnRleHQgfCBFeHByZXNzaW9uQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoRXhwcmVzc2lvbkNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT01NQSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIENPTU1BKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIENPTU1BKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTU1BLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2FycmF5RXhwcmVzc2lvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyQXJyYXlFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlckFycmF5RXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEFycmF5RXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdEFycmF5RXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0QXJyYXlFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdEFycmF5RXhwcmVzc2lvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBCUkFDRV9PUEVOKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTiwgMCk7IH1cblx0cHVibGljIEJSQUNFX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIG9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24oKTogT2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0RXhwcmVzc2lvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT2JqZWN0RXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJPYmplY3RFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T2JqZWN0RXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdE9iamVjdEV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9iamVjdEV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0T2JqZWN0RXhwcmVzc2lvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBvYmplY3RQYWlyRXhwcmVzc2lvbigpOiBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHRbXTtcblx0cHVibGljIG9iamVjdFBhaXJFeHByZXNzaW9uKGk6IG51bWJlcik6IE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dDtcblx0cHVibGljIG9iamVjdFBhaXJFeHByZXNzaW9uKGk/OiBudW1iZXIpOiBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQgfCBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT01NQSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIENPTU1BKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIENPTU1BKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTU1BLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdE9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0T2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgbGl0ZXJhbEV4cHJlc3Npb24oKTogTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0W107XG5cdHB1YmxpYyBsaXRlcmFsRXhwcmVzc2lvbihpOiBudW1iZXIpOiBMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHQ7XG5cdHB1YmxpYyBsaXRlcmFsRXhwcmVzc2lvbihpPzogbnVtYmVyKTogTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0IHwgTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09MT04oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT0xPTiwgMCk7IH1cblx0cHVibGljIG9iamVjdEV4cHJlc3Npb24oKTogT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9iamVjdEV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RQYWlyRXhwcmVzc2lvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT2JqZWN0UGFpckV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyT2JqZWN0UGFpckV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPYmplY3RQYWlyRXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdE9iamVjdFBhaXJFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPYmplY3RQYWlyRXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRPYmplY3RQYWlyRXhwcmVzc2lvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTGFtYmRhRXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBQQVJFTl9PUEVOKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTiwgMCk7IH1cblx0cHVibGljIFBBUkVOX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBBUlJPVygpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkFSUk9XLCAwKTsgfVxuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIGZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKCk6IEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgUVVFU1RJT04oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5RVUVTVElPTiwgMCk7IH1cblx0cHVibGljIHBhcmFtZXRlcigpOiBQYXJhbWV0ZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQYXJhbWV0ZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfbGFtYmRhRXhwcmVzc2lvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyTGFtYmRhRXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJMYW1iZGFFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0TGFtYmRhRXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdExhbWJkYUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdExhbWJkYUV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0TGFtYmRhRXhwcmVzc2lvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgTnVtYmVyTGl0ZXJhbCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWwsIDApOyB9XG5cdHB1YmxpYyBCb29sZWFuTGl0ZXJhbCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsLCAwKTsgfVxuXHRwdWJsaWMgQ2hhcmFjdGVyTGl0ZXJhbCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWwsIDApOyB9XG5cdHB1YmxpYyBTdHJpbmdMaXRlcmFsKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU3RyaW5nTGl0ZXJhbCwgMCk7IH1cblx0cHVibGljIE51bGxMaXRlcmFsKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWwsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9saXRlcmFsRXhwcmVzc2lvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyTGl0ZXJhbEV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyTGl0ZXJhbEV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRMaXRlcmFsRXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdExpdGVyYWxFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRMaXRlcmFsRXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsRXhwcmVzc2lvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUGFyZW50aGVzaXplZEV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgUEFSRU5fT1BFTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4sIDApOyB9XG5cdHB1YmxpYyBleHByZXNzaW9uKCk6IEV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFBBUkVOX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3BhcmVudGhlc2l6ZWRFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJQYXJlbnRoZXNpemVkRXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJQYXJlbnRoZXNpemVkRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0UGFyZW50aGVzaXplZEV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmUoKTogRGVzY3JpcHRpb25MaW5lQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgRGVzY3JpcHRpb25MaW5lQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbikgbGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uKSBsaXN0ZW5lci5leGl0RGVzY3JpcHRpb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERlc2NyaXB0aW9uKSByZXR1cm4gdmlzaXRvci52aXNpdERlc2NyaXB0aW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbkxpbmVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lU3RhcnQoKTogRGVzY3JpcHRpb25MaW5lU3RhcnRDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBEZXNjcmlwdGlvbkxpbmVTdGFydENvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVFbGVtZW50KCk6IERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0W107XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVFbGVtZW50KGk6IG51bWJlcik6IERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0O1xuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lRWxlbWVudChpPzogbnVtYmVyKTogRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQgfCBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBpbmxpbmVUYWcoKTogSW5saW5lVGFnQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSW5saW5lVGFnQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lKSBsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uTGluZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZSkgbGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25MaW5lKSByZXR1cm4gdmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVzY3JpcHRpb25MaW5lU3RhcnRDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBkZXNjcmlwdGlvblRleHQoKTogRGVzY3JpcHRpb25UZXh0Q29udGV4dFtdO1xuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KGk6IG51bWJlcik6IERlc2NyaXB0aW9uVGV4dENvbnRleHQ7XG5cdHB1YmxpYyBkZXNjcmlwdGlvblRleHQoaT86IG51bWJlcik6IERlc2NyaXB0aW9uVGV4dENvbnRleHQgfCBEZXNjcmlwdGlvblRleHRDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhEZXNjcmlwdGlvblRleHRDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgRGVzY3JpcHRpb25UZXh0Q29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBBVCgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIEFUKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIEFUKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuQVQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkFULCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZVN0YXJ0OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbkxpbmVTdGFydCkgbGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbkxpbmVTdGFydCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZVN0YXJ0KSBsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lU3RhcnQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZVN0YXJ0KSByZXR1cm4gdmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZVN0YXJ0KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvblRleHRDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgVEVYVF9DT05URU5UKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5ULCAwKTsgfVxuXHRwdWJsaWMgSUQoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5JRCwgMCk7IH1cblx0cHVibGljIEZPUldBUkRfU0xBU0goKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNILCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfT1BFTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4sIDApOyB9XG5cdHB1YmxpYyBCUkFDRV9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgQ09MT04oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT0xPTiwgMCk7IH1cblx0cHVibGljIE1JTlVTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTUlOVVMsIDApOyB9XG5cdHB1YmxpYyBQRVJJT0QoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QRVJJT0QsIDApOyB9XG5cdHB1YmxpYyBsaXRlcmFsRXhwcmVzc2lvbigpOiBMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uVGV4dDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25UZXh0KSBsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uVGV4dCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uVGV4dCkgbGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uVGV4dCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25UZXh0KSByZXR1cm4gdmlzaXRvci52aXNpdERlc2NyaXB0aW9uVGV4dCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBpbmxpbmVUYWcoKTogSW5saW5lVGFnQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSW5saW5lVGFnQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGRlc2NyaXB0aW9uTGluZVRleHQoKTogRGVzY3JpcHRpb25MaW5lVGV4dENvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIERlc2NyaXB0aW9uTGluZVRleHRDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lRWxlbWVudDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lRWxlbWVudCkgbGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbkxpbmVFbGVtZW50KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lRWxlbWVudCkgbGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZUVsZW1lbnQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZUVsZW1lbnQpIHJldHVybiB2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25MaW5lRWxlbWVudCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVzY3JpcHRpb25MaW5lVGV4dENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBkZXNjcmlwdGlvblRleHQoKTogRGVzY3JpcHRpb25UZXh0Q29udGV4dFtdO1xuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KGk6IG51bWJlcik6IERlc2NyaXB0aW9uVGV4dENvbnRleHQ7XG5cdHB1YmxpYyBkZXNjcmlwdGlvblRleHQoaT86IG51bWJlcik6IERlc2NyaXB0aW9uVGV4dENvbnRleHQgfCBEZXNjcmlwdGlvblRleHRDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhEZXNjcmlwdGlvblRleHRDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgRGVzY3JpcHRpb25UZXh0Q29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIEFUKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQVQoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQVQoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5BVCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQVQsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lVGV4dDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lVGV4dCkgbGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbkxpbmVUZXh0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lVGV4dCkgbGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZVRleHQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZVRleHQpIHJldHVybiB2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25MaW5lVGV4dCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgSW5saW5lVGFnQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIElOTElORV9UQUdfU1RBUlQoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5JTkxJTkVfVEFHX1NUQVJULCAwKTsgfVxuXHRwdWJsaWMgaW5saW5lVGFnTmFtZSgpOiBJbmxpbmVUYWdOYW1lQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgSW5saW5lVGFnTmFtZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSwgMCk7IH1cblx0cHVibGljIGlubGluZVRhZ0JvZHkoKTogSW5saW5lVGFnQm9keUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElubGluZVRhZ0JvZHlDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfaW5saW5lVGFnOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJJbmxpbmVUYWcpIGxpc3RlbmVyLmVudGVySW5saW5lVGFnKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0SW5saW5lVGFnKSBsaXN0ZW5lci5leGl0SW5saW5lVGFnKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRJbmxpbmVUYWcpIHJldHVybiB2aXNpdG9yLnZpc2l0SW5saW5lVGFnKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBJbmxpbmVUYWdOYW1lQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfaW5saW5lVGFnTmFtZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVySW5saW5lVGFnTmFtZSkgbGlzdGVuZXIuZW50ZXJJbmxpbmVUYWdOYW1lKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0SW5saW5lVGFnTmFtZSkgbGlzdGVuZXIuZXhpdElubGluZVRhZ05hbWUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdElubGluZVRhZ05hbWUpIHJldHVybiB2aXNpdG9yLnZpc2l0SW5saW5lVGFnTmFtZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgSW5saW5lVGFnQm9keUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBicmFjZUJvZHkoKTogQnJhY2VCb2R5Q29udGV4dFtdO1xuXHRwdWJsaWMgYnJhY2VCb2R5KGk6IG51bWJlcik6IEJyYWNlQm9keUNvbnRleHQ7XG5cdHB1YmxpYyBicmFjZUJvZHkoaT86IG51bWJlcik6IEJyYWNlQm9keUNvbnRleHQgfCBCcmFjZUJvZHlDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhCcmFjZUJvZHlDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgQnJhY2VCb2R5Q29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pbmxpbmVUYWdCb2R5OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJJbmxpbmVUYWdCb2R5KSBsaXN0ZW5lci5lbnRlcklubGluZVRhZ0JvZHkodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRJbmxpbmVUYWdCb2R5KSBsaXN0ZW5lci5leGl0SW5saW5lVGFnQm9keSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0SW5saW5lVGFnQm9keSkgcmV0dXJuIHZpc2l0b3IudmlzaXRJbmxpbmVUYWdCb2R5KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBCcmFjZUV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgQlJBQ0VfT1BFTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4sIDApOyB9XG5cdHB1YmxpYyBCUkFDRV9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgYnJhY2VCb2R5KCk6IEJyYWNlQm9keUNvbnRleHRbXTtcblx0cHVibGljIGJyYWNlQm9keShpOiBudW1iZXIpOiBCcmFjZUJvZHlDb250ZXh0O1xuXHRwdWJsaWMgYnJhY2VCb2R5KGk/OiBudW1iZXIpOiBCcmFjZUJvZHlDb250ZXh0IHwgQnJhY2VCb2R5Q29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoQnJhY2VCb2R5Q29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIEJyYWNlQm9keUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYnJhY2VFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJCcmFjZUV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyQnJhY2VFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0QnJhY2VFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0QnJhY2VFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRCcmFjZUV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0QnJhY2VFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBCcmFjZUJvZHlDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgYnJhY2VFeHByZXNzaW9uKCk6IEJyYWNlRXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEJyYWNlRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBicmFjZVRleHQoKTogQnJhY2VUZXh0Q29udGV4dFtdO1xuXHRwdWJsaWMgYnJhY2VUZXh0KGk6IG51bWJlcik6IEJyYWNlVGV4dENvbnRleHQ7XG5cdHB1YmxpYyBicmFjZVRleHQoaT86IG51bWJlcik6IEJyYWNlVGV4dENvbnRleHQgfCBCcmFjZVRleHRDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhCcmFjZVRleHRDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgQnJhY2VUZXh0Q29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9icmFjZUJvZHk7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckJyYWNlQm9keSkgbGlzdGVuZXIuZW50ZXJCcmFjZUJvZHkodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRCcmFjZUJvZHkpIGxpc3RlbmVyLmV4aXRCcmFjZUJvZHkodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEJyYWNlQm9keSkgcmV0dXJuIHZpc2l0b3IudmlzaXRCcmFjZUJvZHkodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEJyYWNlVGV4dENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBURVhUX0NPTlRFTlQoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQsIDApOyB9XG5cdHB1YmxpYyBJRCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLklELCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgMCk7IH1cblx0cHVibGljIEZPUldBUkRfU0xBU0goKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNILCAwKTsgfVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIDApOyB9XG5cdHB1YmxpYyBQRVJJT0QoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QRVJJT0QsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9icmFjZVRleHQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckJyYWNlVGV4dCkgbGlzdGVuZXIuZW50ZXJCcmFjZVRleHQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRCcmFjZVRleHQpIGxpc3RlbmVyLmV4aXRCcmFjZVRleHQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEJyYWNlVGV4dCkgcmV0dXJuIHZpc2l0b3IudmlzaXRCcmFjZVRleHQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuIl19