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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWERvY1N5bnRheFBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9YRG9jU3ludGF4UGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyREFBMkQ7Ozs7Ozs7O0FBRzNELDBDQUF1QztBQUN2QyxrRUFBK0Q7QUFDL0QsZ0ZBQTZFO0FBQzdFLG9EQUE4QztBQUM5Qyx3RUFBcUU7QUFDckUsb0RBQStDO0FBQy9DLDRDQUF5QztBQUN6QyxrRUFBK0Q7QUFDL0Qsd0VBQXFFO0FBR3JFLHdFQUFxRTtBQUlyRSwwQ0FBdUM7QUFHdkMsNERBQXlEO0FBRXpELDZDQUE2QztBQU03QyxNQUFhLGdCQUFpQixTQUFRLGVBQU07SUF1STNDLFlBQVksS0FBa0I7UUFDN0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHVDQUFrQixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBaEJELElBQVcsVUFBVTtRQUNwQixPQUFPLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztJQUNwQyxDQUFDO0lBR0QsSUFBVyxlQUFlLEtBQWEsT0FBTyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFHdEUsSUFBVyxTQUFTLEtBQWUsT0FBTyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBR3ZFLElBQVcsYUFBYSxLQUFhLE9BQU8sZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQU92RSxhQUFhO1FBQ25CLElBQUksU0FBUyxHQUF5QixJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xFLElBQUksR0FBVyxDQUFDO1FBQ2hC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d0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHlFQUF5RTtJQUN6RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMkVBQTJFO0lBQzNFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLDRFQUE0RTtJQUM1RSx1RUFBdUU7SUFDdkUsNEVBQTRFO0lBQzVFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHlFQUF5RTtJQUN6RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUseUVBQXlFO0lBQ3pFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUseUVBQXlFO0lBQ3pFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHlFQUF5RTtJQUN6RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBCQUEwQixDQUFDO0FBQ0osdUNBQXNCLEdBQzdDLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSwyRUFBMkU7SUFDM0UseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsNEVBQTRFO0lBQzVFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSx5RUFBeUU7SUFDekUseUVBQXlFO0lBQ3pFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLHlFQUF5RTtJQUN6RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwyRUFBMkU7SUFDM0Usd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHlFQUF5RTtJQUN6RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJ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QXdDO1FBQzdELElBQUksT0FBTyxDQUFDLGNBQWM7WUFBRSxPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBQzNELE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFRO2lEQUEyRTtBQUVwRjtJQURDLHFCQUFRO2lEQUdSO0FBRUQ7SUFEQyxxQkFBUTtnREFHUjtBQUVEO0lBREMscUJBQVE7OENBSVI7QUF6QkYsNENBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gWERvY1N5bnRheFBhcnNlci5nNCBieSBBTlRMUiA0LjYtU05BUFNIT1RcblxuXG5pbXBvcnQgeyBBVE4gfSBmcm9tICdhbnRscjR0cy9hdG4vQVROJztcbmltcG9ydCB7IEFUTkRlc2VyaWFsaXplciB9IGZyb20gJ2FudGxyNHRzL2F0bi9BVE5EZXNlcmlhbGl6ZXInO1xuaW1wb3J0IHsgRmFpbGVkUHJlZGljYXRlRXhjZXB0aW9uIH0gZnJvbSAnYW50bHI0dHMvRmFpbGVkUHJlZGljYXRlRXhjZXB0aW9uJztcbmltcG9ydCB7IE5vdE51bGwgfSBmcm9tICdhbnRscjR0cy9EZWNvcmF0b3JzJztcbmltcG9ydCB7IE5vVmlhYmxlQWx0RXhjZXB0aW9uIH0gZnJvbSAnYW50bHI0dHMvTm9WaWFibGVBbHRFeGNlcHRpb24nO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICdhbnRscjR0cy9EZWNvcmF0b3JzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2FudGxyNHRzL1BhcnNlcic7XG5pbXBvcnQgeyBQYXJzZXJSdWxlQ29udGV4dCB9IGZyb20gJ2FudGxyNHRzL1BhcnNlclJ1bGVDb250ZXh0JztcbmltcG9ydCB7IFBhcnNlckFUTlNpbXVsYXRvciB9IGZyb20gJ2FudGxyNHRzL2F0bi9QYXJzZXJBVE5TaW11bGF0b3InO1xuaW1wb3J0IHsgUGFyc2VUcmVlTGlzdGVuZXIgfSBmcm9tICdhbnRscjR0cy90cmVlL1BhcnNlVHJlZUxpc3RlbmVyJztcbmltcG9ydCB7IFBhcnNlVHJlZVZpc2l0b3IgfSBmcm9tICdhbnRscjR0cy90cmVlL1BhcnNlVHJlZVZpc2l0b3InO1xuaW1wb3J0IHsgUmVjb2duaXRpb25FeGNlcHRpb24gfSBmcm9tICdhbnRscjR0cy9SZWNvZ25pdGlvbkV4Y2VwdGlvbic7XG5pbXBvcnQgeyBSdWxlQ29udGV4dCB9IGZyb20gJ2FudGxyNHRzL1J1bGVDb250ZXh0JztcbmltcG9ydCB7IFJ1bGVWZXJzaW9uIH0gZnJvbSAnYW50bHI0dHMvUnVsZVZlcnNpb24nO1xuaW1wb3J0IHsgVGVybWluYWxOb2RlIH0gZnJvbSAnYW50bHI0dHMvdHJlZS9UZXJtaW5hbE5vZGUnO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tICdhbnRscjR0cy9Ub2tlbic7XG5pbXBvcnQgeyBUb2tlblN0cmVhbSB9IGZyb20gJ2FudGxyNHRzL1Rva2VuU3RyZWFtJztcbmltcG9ydCB7IFZvY2FidWxhcnkgfSBmcm9tICdhbnRscjR0cy9Wb2NhYnVsYXJ5JztcbmltcG9ydCB7IFZvY2FidWxhcnlJbXBsIH0gZnJvbSAnYW50bHI0dHMvVm9jYWJ1bGFyeUltcGwnO1xuXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdhbnRscjR0cy9taXNjL1V0aWxzJztcblxuaW1wb3J0IHsgWERvY1N5bnRheFBhcnNlckxpc3RlbmVyIH0gZnJvbSAnLi9YRG9jU3ludGF4UGFyc2VyTGlzdGVuZXInO1xuaW1wb3J0IHsgWERvY1N5bnRheFBhcnNlclZpc2l0b3IgfSBmcm9tICcuL1hEb2NTeW50YXhQYXJzZXJWaXNpdG9yJztcblxuXG5leHBvcnQgY2xhc3MgWERvY1N5bnRheFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTnVtYmVyTGl0ZXJhbD0xO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEludGVnZXJMaXRlcmFsPTI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRmxvYXRpbmdQb2ludExpdGVyYWw9Mztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBCb29sZWFuTGl0ZXJhbD00O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENoYXJhY3RlckxpdGVyYWw9NTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBTdHJpbmdMaXRlcmFsPTY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTnVsbExpdGVyYWw9Nztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBFWFRFTkRTPTg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQ9OTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBORVdMSU5FPTEwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNQQUNFPTExO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRFWFRfQ09OVEVOVD0xMjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBBVD0xMztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBQTFVTPTE0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1JTlVTPTE1O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUQVI9MTY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRk9SV0FSRF9TTEFTSD0xNztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBDT0xPTj0xODtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBQRVJJT0Q9MTk7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09NTUE9MjA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVFVQUw9MjE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUVVFU1RJT049MjI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQU1QPTIzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBJUEU9MjQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVJST1c9MjU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVhDTEFNQVRJT049MjY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSU5MSU5FX1RBR19TVEFSVD0yNztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBCUkFDRV9PUEVOPTI4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJSQUNFX0NMT1NFPTI5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBBUkVOX09QRU49MzA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUEFSRU5fQ0xPU0U9MzE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQlJBQ0tFVF9PUEVOPTMyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJSQUNLRVRfQ0xPU0U9MzM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTEVTU1RIQU49MzQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR1JFQVRFUlRIQU49MzU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kb2N1bWVudGF0aW9uID0gMDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2JvZHkgPSAxO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfd2hpdGVzcGFjZSA9IDI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9hbm5vdGF0aW9ucyA9IDM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV90YWcgPSA0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdGFnTmFtZSA9IDU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV90YWdJZGVudGlmaWVyID0gNjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3Byb3BlcnR5VGFnSWRlbnRpZmllciA9IDc7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9vcHRpb25hbFRhZ0lkZW50aWZpZXIgPSA4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb3B0aW9uYWxUYWdPcklkZW50aWZpZXIgPSA5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfaWRlbnRpZmllciA9IDEwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb3B0aW9uYWxJZGVudGlmaWVyID0gMTE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV90eXBlID0gMTI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9sYW1iZGFUeXBlID0gMTM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9mb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSA9IDE0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfcGFyYW1ldGVyID0gMTU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV90dXBsZVR5cGUgPSAxNjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3R1cGxlVHlwZVNlcXVlbmNlID0gMTc7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wcmltYXJ5VHlwZSA9IDE4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfaWRlbnRpZmllck9yS2V5d29yZCA9IDE5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfa2V5d29yZCA9IDIwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfcGFyZW50aGVzaXplZFR5cGUgPSAyMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3VuYXJ5VHlwZSA9IDIyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0VHlwZSA9IDIzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0UGFpclNlcXVlbmNlVHlwZSA9IDI0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0UGFpclR5cGUgPSAyNTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2FycmF5VHlwZSA9IDI2O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfbm90QXJyYXlUeXBlID0gMjc7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wcm9wZXJ0eUlkZW50aWZpZXIgPSAyODtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllciA9IDI5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZXhwcmVzc2lvbiA9IDMwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdW5hcnlFeHByZXNzaW9uID0gMzE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9hcnJheUV4cHJlc3Npb24gPSAzMjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29iamVjdEV4cHJlc3Npb24gPSAzMztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24gPSAzNDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29iamVjdFBhaXJFeHByZXNzaW9uID0gMzU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9sYW1iZGFFeHByZXNzaW9uID0gMzY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9saXRlcmFsRXhwcmVzc2lvbiA9IDM3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfcGFyZW50aGVzaXplZEV4cHJlc3Npb24gPSAzODtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2Rlc2NyaXB0aW9uID0gMzk7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvbkxpbmUgPSA0MDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2Rlc2NyaXB0aW9uTGluZVN0YXJ0ID0gNDE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvblRleHQgPSA0Mjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2Rlc2NyaXB0aW9uTGluZUVsZW1lbnQgPSA0Mztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2Rlc2NyaXB0aW9uTGluZVRleHQgPSA0NDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2lubGluZVRhZyA9IDQ1O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfaW5saW5lVGFnTmFtZSA9IDQ2O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfaW5saW5lVGFnQm9keSA9IDQ3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfYnJhY2VFeHByZXNzaW9uID0gNDg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9icmFjZUJvZHkgPSA0OTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2JyYWNlVGV4dCA9IDUwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHJ1bGVOYW1lczogc3RyaW5nW10gPSBbXG5cdFx0XCJkb2N1bWVudGF0aW9uXCIsIFwiYm9keVwiLCBcIndoaXRlc3BhY2VcIiwgXCJhbm5vdGF0aW9uc1wiLCBcInRhZ1wiLCBcInRhZ05hbWVcIiwgXG5cdFx0XCJ0YWdJZGVudGlmaWVyXCIsIFwicHJvcGVydHlUYWdJZGVudGlmaWVyXCIsIFwib3B0aW9uYWxUYWdJZGVudGlmaWVyXCIsIFwib3B0aW9uYWxUYWdPcklkZW50aWZpZXJcIiwgXG5cdFx0XCJpZGVudGlmaWVyXCIsIFwib3B0aW9uYWxJZGVudGlmaWVyXCIsIFwidHlwZVwiLCBcImxhbWJkYVR5cGVcIiwgXCJmb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZVwiLCBcblx0XHRcInBhcmFtZXRlclwiLCBcInR1cGxlVHlwZVwiLCBcInR1cGxlVHlwZVNlcXVlbmNlXCIsIFwicHJpbWFyeVR5cGVcIiwgXCJpZGVudGlmaWVyT3JLZXl3b3JkXCIsIFxuXHRcdFwia2V5d29yZFwiLCBcInBhcmVudGhlc2l6ZWRUeXBlXCIsIFwidW5hcnlUeXBlXCIsIFwib2JqZWN0VHlwZVwiLCBcIm9iamVjdFBhaXJTZXF1ZW5jZVR5cGVcIiwgXG5cdFx0XCJvYmplY3RQYWlyVHlwZVwiLCBcImFycmF5VHlwZVwiLCBcIm5vdEFycmF5VHlwZVwiLCBcInByb3BlcnR5SWRlbnRpZmllclwiLCBcIm9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllclwiLCBcblx0XHRcImV4cHJlc3Npb25cIiwgXCJ1bmFyeUV4cHJlc3Npb25cIiwgXCJhcnJheUV4cHJlc3Npb25cIiwgXCJvYmplY3RFeHByZXNzaW9uXCIsIFxuXHRcdFwib2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvblwiLCBcIm9iamVjdFBhaXJFeHByZXNzaW9uXCIsIFwibGFtYmRhRXhwcmVzc2lvblwiLCBcblx0XHRcImxpdGVyYWxFeHByZXNzaW9uXCIsIFwicGFyZW50aGVzaXplZEV4cHJlc3Npb25cIiwgXCJkZXNjcmlwdGlvblwiLCBcImRlc2NyaXB0aW9uTGluZVwiLCBcblx0XHRcImRlc2NyaXB0aW9uTGluZVN0YXJ0XCIsIFwiZGVzY3JpcHRpb25UZXh0XCIsIFwiZGVzY3JpcHRpb25MaW5lRWxlbWVudFwiLCBcImRlc2NyaXB0aW9uTGluZVRleHRcIiwgXG5cdFx0XCJpbmxpbmVUYWdcIiwgXCJpbmxpbmVUYWdOYW1lXCIsIFwiaW5saW5lVGFnQm9keVwiLCBcImJyYWNlRXhwcmVzc2lvblwiLCBcImJyYWNlQm9keVwiLCBcblx0XHRcImJyYWNlVGV4dFwiXG5cdF07XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX0xJVEVSQUxfTkFNRVM6IChzdHJpbmcgfCB1bmRlZmluZWQpW10gPSBbXG5cdFx0dW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcblx0XHR1bmRlZmluZWQsIFwiJ2V4dGVuZHMnXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCInQCdcIiwgXG5cdFx0XCInKydcIiwgXCInLSdcIiwgXCInKidcIiwgXCInLydcIiwgXCInOidcIiwgXCInLidcIiwgXCInLCdcIiwgXCInPSdcIiwgXCInPydcIiwgXCInJidcIiwgXG5cdFx0XCInfCdcIiwgdW5kZWZpbmVkLCBcIichJ1wiLCBcIid7QCdcIiwgXCIneydcIiwgXCInfSdcIiwgXCInKCdcIiwgXCInKSdcIiwgXCInWydcIiwgXCInXSdcIiwgXG5cdFx0XCInPCdcIiwgXCInPidcIlxuXHRdO1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBfU1lNQk9MSUNfTkFNRVM6IChzdHJpbmcgfCB1bmRlZmluZWQpW10gPSBbXG5cdFx0dW5kZWZpbmVkLCBcIk51bWJlckxpdGVyYWxcIiwgXCJJbnRlZ2VyTGl0ZXJhbFwiLCBcIkZsb2F0aW5nUG9pbnRMaXRlcmFsXCIsIFxuXHRcdFwiQm9vbGVhbkxpdGVyYWxcIiwgXCJDaGFyYWN0ZXJMaXRlcmFsXCIsIFwiU3RyaW5nTGl0ZXJhbFwiLCBcIk51bGxMaXRlcmFsXCIsIFxuXHRcdFwiRVhURU5EU1wiLCBcIklEXCIsIFwiTkVXTElORVwiLCBcIlNQQUNFXCIsIFwiVEVYVF9DT05URU5UXCIsIFwiQVRcIiwgXCJQTFVTXCIsIFwiTUlOVVNcIiwgXG5cdFx0XCJTVEFSXCIsIFwiRk9SV0FSRF9TTEFTSFwiLCBcIkNPTE9OXCIsIFwiUEVSSU9EXCIsIFwiQ09NTUFcIiwgXCJFUVVBTFwiLCBcIlFVRVNUSU9OXCIsIFxuXHRcdFwiQU1QXCIsIFwiUElQRVwiLCBcIkFSUk9XXCIsIFwiRVhDTEFNQVRJT05cIiwgXCJJTkxJTkVfVEFHX1NUQVJUXCIsIFwiQlJBQ0VfT1BFTlwiLCBcblx0XHRcIkJSQUNFX0NMT1NFXCIsIFwiUEFSRU5fT1BFTlwiLCBcIlBBUkVOX0NMT1NFXCIsIFwiQlJBQ0tFVF9PUEVOXCIsIFwiQlJBQ0tFVF9DTE9TRVwiLCBcblx0XHRcIkxFU1NUSEFOXCIsIFwiR1JFQVRFUlRIQU5cIlxuXHRdO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFZPQ0FCVUxBUlk6IFZvY2FidWxhcnkgPSBuZXcgVm9jYWJ1bGFyeUltcGwoWERvY1N5bnRheFBhcnNlci5fTElURVJBTF9OQU1FUywgWERvY1N5bnRheFBhcnNlci5fU1lNQk9MSUNfTkFNRVMsIFtdKTtcblxuXHRAT3ZlcnJpZGVcblx0QE5vdE51bGxcblx0cHVibGljIGdldCB2b2NhYnVsYXJ5KCk6IFZvY2FidWxhcnkge1xuXHRcdHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlZPQ0FCVUxBUlk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGdldCBncmFtbWFyRmlsZU5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwiWERvY1N5bnRheFBhcnNlci5nNFwiOyB9XG5cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBnZXQgcnVsZU5hbWVzKCk6IHN0cmluZ1tdIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIucnVsZU5hbWVzOyB9XG5cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBnZXQgc2VyaWFsaXplZEFUTigpOiBzdHJpbmcgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5fc2VyaWFsaXplZEFUTjsgfVxuXG5cdGNvbnN0cnVjdG9yKGlucHV0OiBUb2tlblN0cmVhbSkge1xuXHRcdHN1cGVyKGlucHV0KTtcblx0XHR0aGlzLl9pbnRlcnAgPSBuZXcgUGFyc2VyQVROU2ltdWxhdG9yKFhEb2NTeW50YXhQYXJzZXIuX0FUTiwgdGhpcyk7XG5cdH1cblx0XG5cdHB1YmxpYyBkb2N1bWVudGF0aW9uKCk6IERvY3VtZW50YXRpb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEb2N1bWVudGF0aW9uQ29udGV4dCA9IG5ldyBEb2N1bWVudGF0aW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2RvY3VtZW50YXRpb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDEwOTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5FT0Y6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDI7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5FT0YpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkU6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU1BBQ0U6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQVQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDM7XG5cdFx0XHRcdHRoaXMuYm9keSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTA1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDQ7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5FT0YpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBib2R5KCk6IEJvZHlDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBCb2R5Q29udGV4dCA9IG5ldyBCb2R5Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMiwgWERvY1N5bnRheFBhcnNlci5SVUxFX2JvZHkpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTE0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR3aGlsZSAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FIHx8IF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMTE7XG5cdFx0XHRcdHRoaXMud2hpdGVzcGFjZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDExNjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSAxMTc7XG5cdFx0XHR0aGlzLmFubm90YXRpb25zKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHdoaXRlc3BhY2UoKTogV2hpdGVzcGFjZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFdoaXRlc3BhY2VDb250ZXh0ID0gbmV3IFdoaXRlc3BhY2VDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA0LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfd2hpdGVzcGFjZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMTk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICggIShfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUgfHwgX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkgKSB7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgYW5ub3RhdGlvbnMoKTogQW5ub3RhdGlvbnNDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBBbm5vdGF0aW9uc0NvbnRleHQgPSBuZXcgQW5ub3RhdGlvbnNDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYW5ub3RhdGlvbnMpO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTIxO1xuXHRcdFx0dGhpcy50YWcoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMjY7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMyx0aGlzLl9jdHgpO1xuXHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxMjI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxMjM7XG5cdFx0XHRcdFx0dGhpcy50YWcoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTI4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzLHRoaXMuX2N0eCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHRhZygpOiBUYWdDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBUYWdDb250ZXh0ID0gbmV3IFRhZ0NvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDgsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90YWcpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDI4ODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDI5LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMjk7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzA7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTMxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTMzO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzY7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzc7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAzKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTM5O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0MDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0MTtcblx0XHRcdFx0dGhpcy50YWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNCk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0Mztcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNDQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNDU7XG5cdFx0XHRcdHRoaXMudGFnSWRlbnRpZmllcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQ3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTQ2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0OTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkVRVUFMKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1MTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1MDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNTM7XG5cdFx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA1KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTU1O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1Njtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1Nztcblx0XHRcdFx0dGhpcy50YWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNTg7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNjA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1OTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2Mjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk1JTlVTKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2Mztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2NDtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDY6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDYpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNjY7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTY3O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTY4O1xuXHRcdFx0XHR0aGlzLnRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2OTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3MDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkVRVUFMKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3MTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNzQ7XG5cdFx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3NTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3Nztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTc2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTc5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTUlOVVMpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTgwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTgxO1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNzpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNyk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE4Mztcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODU7XG5cdFx0XHRcdHRoaXMudGFnSWRlbnRpZmllcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTg3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTg2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE4OTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5MTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5MDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTM7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA4OlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA4KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTk1O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5Njtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5Nztcblx0XHRcdFx0dGhpcy50YWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjAxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjAzO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjAyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIwNTtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjA3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjA2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIwOTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkVRVUFMKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxMTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxMDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMTM7XG5cdFx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA5OlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA5KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjE1O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxNjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxNztcblx0XHRcdFx0dGhpcy50YWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMTk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyMTg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjIxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjIzO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjIyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIyNTtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjI2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjI4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzI7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAxMDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMTApO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzQ7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjM1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjM2O1xuXHRcdFx0XHR0aGlzLnRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzNztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjQ0O1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDY7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjQ4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuRVFVQUwpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjUwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjQ5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1Mjtcblx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjUzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjU1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTQ7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTg7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTk7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAxMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMTEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNjE7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjYzO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjYyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2NTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2Nztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2Njtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNjk7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAxMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMTIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNzE7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjczO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjcyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI3NTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI3Nztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI3Njtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNzk7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI4MDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI4Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjgxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjg0O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTUlOVVMpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjg1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjg2O1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHRhZ05hbWUoKTogVGFnTmFtZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFRhZ05hbWVDb250ZXh0ID0gbmV3IFRhZ05hbWVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxMCwgWERvY1N5bnRheFBhcnNlci5SVUxFX3RhZ05hbWUpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAyOTA7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQVQpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDI5MTtcblx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyB0YWdJZGVudGlmaWVyKCk6IFRhZ0lkZW50aWZpZXJDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBUYWdJZGVudGlmaWVyQ29udGV4dCA9IG5ldyBUYWdJZGVudGlmaWVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMTIsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90YWdJZGVudGlmaWVyKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDI5Njtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDMwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyOTM7XG5cdFx0XHRcdHRoaXMucHJvcGVydHlUYWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI5NDtcblx0XHRcdFx0dGhpcy5vcHRpb25hbFRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAzKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjk1O1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgcHJvcGVydHlUYWdJZGVudGlmaWVyKCk6IFByb3BlcnR5VGFnSWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFByb3BlcnR5VGFnSWRlbnRpZmllckNvbnRleHQgPSBuZXcgUHJvcGVydHlUYWdJZGVudGlmaWVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMTQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wcm9wZXJ0eVRhZ0lkZW50aWZpZXIpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDMxMjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDMzLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyOTg7XG5cdFx0XHRcdHRoaXMub3B0aW9uYWxUYWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMDE7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjk5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QRVJJT0QpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzMDA7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25hbFRhZ09ySWRlbnRpZmllcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwMzsgXG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHR9IHdoaWxlICggX2xhPT09WERvY1N5bnRheFBhcnNlci5QRVJJT0QgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzA1O1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwODsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzMDY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBFUklPRCk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwNztcblx0XHRcdFx0XHR0aGlzLm9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzEwOyBcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdH0gd2hpbGUgKCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlBFUklPRCApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvcHRpb25hbFRhZ0lkZW50aWZpZXIoKTogT3B0aW9uYWxUYWdJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT3B0aW9uYWxUYWdJZGVudGlmaWVyQ29udGV4dCA9IG5ldyBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxNiwgWERvY1N5bnRheFBhcnNlci5SVUxFX29wdGlvbmFsVGFnSWRlbnRpZmllcik7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDMxNDtcblx0XHRcdHRoaXMub3B0aW9uYWxJZGVudGlmaWVyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKCk6IE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0ID0gbmV3IE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMTgsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vcHRpb25hbFRhZ09ySWRlbnRpZmllcik7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSAzMTg7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzNCx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzE2O1xuXHRcdFx0XHR0aGlzLm9wdGlvbmFsVGFnSWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMTc7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBJZGVudGlmaWVyQ29udGV4dCA9IG5ldyBJZGVudGlmaWVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMjAsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pZGVudGlmaWVyKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzIwO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLklEKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb3B0aW9uYWxJZGVudGlmaWVyKCk6IE9wdGlvbmFsSWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9wdGlvbmFsSWRlbnRpZmllckNvbnRleHQgPSBuZXcgT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMjIsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vcHRpb25hbElkZW50aWZpZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAzMjI7XG5cdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSAzMjM7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblxuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dDtcblx0cHVibGljIHR5cGUoX3A6IG51bWJlcik6IFR5cGVDb250ZXh0O1xuXHRcblx0cHVibGljIHR5cGUoX3A/OiBudW1iZXIpOiBUeXBlQ29udGV4dCB7XG5cdFx0aWYgKF9wID09PSB1bmRlZmluZWQpIHtcblx0XHRcdF9wID0gMDtcblx0XHR9XG5cblx0XHRsZXQgX3BhcmVudGN0eDogUGFyc2VyUnVsZUNvbnRleHQgPSB0aGlzLl9jdHg7XG5cdFx0bGV0IF9wYXJlbnRTdGF0ZTogbnVtYmVyID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgX2xvY2FsY3R4OiBUeXBlQ29udGV4dCA9IG5ldyBUeXBlQ29udGV4dCh0aGlzLl9jdHgsIF9wYXJlbnRTdGF0ZSk7XG5cdFx0bGV0IF9wcmV2Y3R4OiBUeXBlQ29udGV4dCA9IF9sb2NhbGN0eDtcblx0XHRsZXQgX3N0YXJ0U3RhdGU6IG51bWJlciA9IDI0O1xuXHRcdHRoaXMuZW50ZXJSZWN1cnNpb25SdWxlKF9sb2NhbGN0eCwgMjQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90eXBlLCBfcCk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzMzO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMzUsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzI2O1xuXHRcdFx0XHR0aGlzLmxhbWJkYVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMjc7XG5cdFx0XHRcdHRoaXMudHVwbGVUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzI4O1xuXHRcdFx0XHR0aGlzLnByaW1hcnlUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzI5O1xuXHRcdFx0XHR0aGlzLnBhcmVudGhlc2l6ZWRUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzMwO1xuXHRcdFx0XHR0aGlzLnVuYXJ5VHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDY6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMzMTtcblx0XHRcdFx0dGhpcy5vYmplY3RUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNzpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzMyO1xuXHRcdFx0XHR0aGlzLmFycmF5VHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY3R4Ll9zdG9wID0gdGhpcy5faW5wdXQudHJ5TFQoLTEpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDM1ODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw0Mix0aGlzLl9jdHgpO1xuXHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX3BhcnNlTGlzdGVuZXJzIT1udWxsICkgdGhpcy50cmlnZ2VyRXhpdFJ1bGVFdmVudCgpO1xuXHRcdFx0XHRcdF9wcmV2Y3R4ID0gX2xvY2FsY3R4O1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0X2xvY2FsY3R4ID0gbmV3IFR5cGVDb250ZXh0KF9wYXJlbnRjdHgsIF9wYXJlbnRTdGF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5wdXNoTmV3UmVjdXJzaW9uQ29udGV4dChfbG9jYWxjdHgsIF9zdGFydFN0YXRlLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdHlwZSk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMzNTtcblx0XHRcdFx0XHRpZiAoISh0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgOCkpKSB0aHJvdyBuZXcgRmFpbGVkUHJlZGljYXRlRXhjZXB0aW9uKHRoaXMsIFwidGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDgpXCIpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzMzc7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDM2LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMzNjtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM0MDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMzOTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzQzO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM0Mjtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM0NTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoICEoX2xhPT09WERvY1N5bnRheFBhcnNlci5BTVAgfHwgX2xhPT09WERvY1N5bnRheFBhcnNlci5QSVBFKSApIHtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM0Nztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMzksdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzQ2O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzUwO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzQ5O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNTM7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzUyO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzU1O1xuXHRcdFx0XHRcdHRoaXMudHlwZSg5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzYwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw0Mix0aGlzLl9jdHgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLnVucm9sbFJlY3Vyc2lvbkNvbnRleHRzKF9wYXJlbnRjdHgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgbGFtYmRhVHlwZSgpOiBMYW1iZGFUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogTGFtYmRhVHlwZUNvbnRleHQgPSBuZXcgTGFtYmRhVHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDI2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfbGFtYmRhVHlwZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDMxO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU46XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNjE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2Mztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw0Myx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNjI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2Njtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw0NCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNjU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzY5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDQ1LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2ODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzcyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5JRCkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzcxO1xuXHRcdFx0XHRcdHRoaXMuZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzc1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDQ3LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM3NDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzc4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNzc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzODE7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzODA7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzgzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fQ0xPU0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzg1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDUwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM4NDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzg4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzODc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTE7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTA7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzkzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQVJST1cpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzk1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDUzLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5NDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzk4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDE7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDA7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDAzO1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNTYsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDA0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5RVUVTVElPTik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuSUQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDc7XG5cdFx0XHRcdHRoaXMucGFyYW1ldGVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNTcsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDA4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MTI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxMTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxNTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxNDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MTc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5BUlJPVyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MTk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNjAsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDE4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MjI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyMTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyNTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyNDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0Mjc7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyOTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw2Myx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0Mjg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlFVRVNUSU9OKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UoKTogRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQgPSBuZXcgRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAyOCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2Zvcm1hbFBhcmFtZXRlclNlcXVlbmNlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQzMztcblx0XHRcdHRoaXMucGFyYW1ldGVyKCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDQ0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR3aGlsZSAoX2xhPT09WERvY1N5bnRheFBhcnNlci5DT01NQSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQzNDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQzNjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDM1O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDM5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDM4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ0MTtcblx0XHRcdFx0dGhpcy5wYXJhbWV0ZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NDY7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHBhcmFtZXRlcigpOiBQYXJhbWV0ZXJDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBQYXJhbWV0ZXJDb250ZXh0ID0gbmV3IFBhcmFtZXRlckNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDMwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfcGFyYW1ldGVyKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ0Nztcblx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ1Njtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDcwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ0OTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ0ODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDU1O1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHR1cGxlVHlwZSgpOiBUdXBsZVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBUdXBsZVR5cGVDb250ZXh0ID0gbmV3IFR1cGxlVHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDMyLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdHVwbGVUeXBlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ1OTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuSUQpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDU4O1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNDYxO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkxFU1NUSEFOKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA0NjM7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ2Mjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNDY1O1xuXHRcdFx0dGhpcy50dXBsZVR5cGVTZXF1ZW5jZSgpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ2Nztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDY2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA0Njk7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuR1JFQVRFUlRIQU4pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyB0dXBsZVR5cGVTZXF1ZW5jZSgpOiBUdXBsZVR5cGVTZXF1ZW5jZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dCA9IG5ldyBUdXBsZVR5cGVTZXF1ZW5jZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDM0LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdHVwbGVUeXBlU2VxdWVuY2UpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0bGV0IF9hbHQ6IG51bWJlcjtcblx0XHRcdHRoaXMuc3RhdGUgPSA1NTE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw5Mix0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDcxO1xuXHRcdFx0XHR0aGlzLnByaW1hcnlUeXBlKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NzM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNzQsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDcyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0ODI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDc2LHRoaXMuX2N0eCk7XG5cdFx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0NzU7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ3Nztcblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDc2O1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0Nzk7XG5cdFx0XHRcdFx0XHR0aGlzLnR1cGxlVHlwZVNlcXVlbmNlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDg0O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNzYsdGhpcy5fY3R4KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0ODU7XG5cdFx0XHRcdHRoaXMucHJpbWFyeVR5cGUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ4Nztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ4Njtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0ODk7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5FWFRFTkRTKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ5MTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ5MDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0OTM7XG5cdFx0XHRcdHRoaXMucHJpbWFyeVR5cGUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ5NTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw3OSx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0OTQ7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUwNDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsODEsdGhpcy5fY3R4KTtcblx0XHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ5Nztcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDk5O1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0OTg7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUwMTtcblx0XHRcdFx0XHRcdHRoaXMudHVwbGVUeXBlU2VxdWVuY2UoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1MDY7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw4MSx0aGlzLl9jdHgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMyk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUwNztcblx0XHRcdFx0dGhpcy5wcmltYXJ5VHlwZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTA5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTA4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUxMTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkFNUCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MTM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1MTI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTE1O1xuXHRcdFx0XHR0aGlzLnByaW1hcnlUeXBlKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MTc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsODQsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTE2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MjY7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDg2LHRoaXMuX2N0eCk7XG5cdFx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1MTk7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUyMTtcblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTIwO1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1MjM7XG5cdFx0XHRcdFx0XHR0aGlzLnR1cGxlVHlwZVNlcXVlbmNlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTI4O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsODYsdGhpcy5fY3R4KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDQpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1Mjk7XG5cdFx0XHRcdHRoaXMucHJpbWFyeVR5cGUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzMTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzMDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MzM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QSVBFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzNTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzNDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1Mzc7XG5cdFx0XHRcdHRoaXMucHJpbWFyeVR5cGUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzOTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw4OSx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1Mzg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU0ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsOTEsdGhpcy5fY3R4KTtcblx0XHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU0MTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTQzO1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1NDI7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU0NTtcblx0XHRcdFx0XHRcdHRoaXMudHVwbGVUeXBlU2VxdWVuY2UoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1NTA7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw5MSx0aGlzLl9jdHgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHByaW1hcnlUeXBlKCk6IFByaW1hcnlUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogUHJpbWFyeVR5cGVDb250ZXh0ID0gbmV3IFByaW1hcnlUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMzYsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wcmltYXJ5VHlwZSk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA1NTY7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw5Myx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTUzO1xuXHRcdFx0XHR0aGlzLm9wdGlvbmFsSWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NTQ7XG5cdFx0XHRcdHRoaXMucHJvcGVydHlJZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMyk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU1NTtcblx0XHRcdFx0dGhpcy5pZGVudGlmaWVyT3JLZXl3b3JkKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGlkZW50aWZpZXJPcktleXdvcmQoKTogSWRlbnRpZmllck9yS2V5d29yZENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IElkZW50aWZpZXJPcktleXdvcmRDb250ZXh0ID0gbmV3IElkZW50aWZpZXJPcktleXdvcmRDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAzOCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2lkZW50aWZpZXJPcktleXdvcmQpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTYwO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklEOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTU4O1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU1OTtcblx0XHRcdFx0dGhpcy5rZXl3b3JkKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGtleXdvcmQoKTogS2V5d29yZENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEtleXdvcmRDb250ZXh0ID0gbmV3IEtleXdvcmRDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA0MCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2tleXdvcmQpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA1NjI7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWwpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBwYXJlbnRoZXNpemVkVHlwZSgpOiBQYXJlbnRoZXNpemVkVHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCA9IG5ldyBQYXJlbnRoZXNpemVkVHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDQyLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfcGFyZW50aGVzaXplZFR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTY0O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDU2Njtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTY1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1Njg7XG5cdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTcwO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1Njk7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDU3Mjtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QQVJFTl9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHVuYXJ5VHlwZSgpOiBVbmFyeVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBVbmFyeVR5cGVDb250ZXh0ID0gbmV3IFVuYXJ5VHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDQ0LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdW5hcnlUeXBlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDU3NDtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCAhKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1RBUiB8fCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLkFNUCkgKSB7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA1NzU7XG5cdFx0XHR0aGlzLnByaW1hcnlUeXBlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9iamVjdFR5cGUoKTogT2JqZWN0VHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9iamVjdFR5cGVDb250ZXh0ID0gbmV3IE9iamVjdFR5cGVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA0NiwgWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdFR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTc3O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDU3OTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDk3LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU3ODtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA1ODI7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw5OCx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA1ODU7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw5OSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNTg4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoKCgoKF9sYSAtIDcpKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgKF9sYSAtIDcpKSAmICgoMSA8PCAoWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbCAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLklEIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuU1RBUiAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLkFNUCAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4gLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9PUEVOIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuTEVTU1RIQU4gLSA3KSkpKSAhPT0gMCkpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTg3O1xuXHRcdFx0XHR0aGlzLm9iamVjdFBhaXJTZXF1ZW5jZVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNTkxO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTAxLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU5MDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA1OTQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTkzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDU5Nztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTk2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1OTk7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvYmplY3RQYWlyU2VxdWVuY2VUeXBlKCk6IE9iamVjdFBhaXJTZXF1ZW5jZVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPYmplY3RQYWlyU2VxdWVuY2VUeXBlQ29udGV4dCA9IG5ldyBPYmplY3RQYWlyU2VxdWVuY2VUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNDgsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RQYWlyU2VxdWVuY2VUeXBlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDYwMTtcblx0XHRcdHRoaXMub2JqZWN0UGFpclR5cGUoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA2MDM7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMDQsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjAyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDYxODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0d2hpbGUgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuQ09NTUEpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MDU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MDc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTA1LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYwNjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjEwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2MDk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MTM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2MTI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjE1O1xuXHRcdFx0XHR0aGlzLm9iamVjdFBhaXJUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjIwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvYmplY3RQYWlyVHlwZSgpOiBPYmplY3RQYWlyVHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9iamVjdFBhaXJUeXBlQ29udGV4dCA9IG5ldyBPYmplY3RQYWlyVHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDUwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0UGFpclR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjIxO1xuXHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDYyMztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04pIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjIyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA2MjY7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYyNTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNjI4O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA2MzA7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYyOTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNjMyO1xuXHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBhcnJheVR5cGUoKTogQXJyYXlUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogQXJyYXlUeXBlQ29udGV4dCA9IG5ldyBBcnJheVR5cGVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA1MiwgWERvY1N5bnRheFBhcnNlci5SVUxFX2FycmF5VHlwZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDY4MDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU46XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MzQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU4pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjM2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDExMix0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2MzU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjM5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDExMyx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2Mzg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY0Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMTQsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjQxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY0NTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKCgoKChfbGEgLSA3KSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IChfbGEgLSA3KSkgJiAoKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWwgLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5JRCAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLlNUQVIgLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5BTVAgLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTiAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfT1BFTiAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLkxFU1NUSEFOIC0gNykpKSkgIT09IDApKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NDQ7XG5cdFx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NjA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdHdoaWxlIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLkNPTU1BKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjQ3O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY0OTtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTE2LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY0ODtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjUyO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY1MTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY1NTtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY1NDtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjU3O1xuXHRcdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NjI7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NjQ7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTIwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY2Mztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2Njc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NjY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjcwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2Njk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NzI7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX0NMT1NFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TVEFSOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkFNUDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU46XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTEVTU1RIQU46XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NzM7XG5cdFx0XHRcdHRoaXMubm90QXJyYXlUeXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjc2OyBcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gMTtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdHN3aXRjaCAoX2FsdCkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NzQ7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9PUEVOKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NzU7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9DTE9TRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjc4OyBcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEyMyx0aGlzLl9jdHgpO1xuXHRcdFx0XHR9IHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cblx0cHVibGljIG5vdEFycmF5VHlwZSgpOiBOb3RBcnJheVR5cGVDb250ZXh0O1xuXHRwdWJsaWMgbm90QXJyYXlUeXBlKF9wOiBudW1iZXIpOiBOb3RBcnJheVR5cGVDb250ZXh0O1xuXHRcblx0cHVibGljIG5vdEFycmF5VHlwZShfcD86IG51bWJlcik6IE5vdEFycmF5VHlwZUNvbnRleHQge1xuXHRcdGlmIChfcCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRfcCA9IDA7XG5cdFx0fVxuXG5cdFx0bGV0IF9wYXJlbnRjdHg6IFBhcnNlclJ1bGVDb250ZXh0ID0gdGhpcy5fY3R4O1xuXHRcdGxldCBfcGFyZW50U3RhdGU6IG51bWJlciA9IHRoaXMuc3RhdGU7XG5cdFx0bGV0IF9sb2NhbGN0eDogTm90QXJyYXlUeXBlQ29udGV4dCA9IG5ldyBOb3RBcnJheVR5cGVDb250ZXh0KHRoaXMuX2N0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRsZXQgX3ByZXZjdHg6IE5vdEFycmF5VHlwZUNvbnRleHQgPSBfbG9jYWxjdHg7XG5cdFx0bGV0IF9zdGFydFN0YXRlOiBudW1iZXIgPSA1NDtcblx0XHR0aGlzLmVudGVyUmVjdXJzaW9uUnVsZShfbG9jYWxjdHgsIDU0LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfbm90QXJyYXlUeXBlLCBfcCk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjg5O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTI1LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY4Mztcblx0XHRcdFx0dGhpcy5sYW1iZGFUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjg0O1xuXHRcdFx0XHR0aGlzLnR1cGxlVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY4NTtcblx0XHRcdFx0dGhpcy5wcmltYXJ5VHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY4Njtcblx0XHRcdFx0dGhpcy5wYXJlbnRoZXNpemVkVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY4Nztcblx0XHRcdFx0dGhpcy51bmFyeVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2ODg7XG5cdFx0XHRcdHRoaXMub2JqZWN0VHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY3R4Ll9zdG9wID0gdGhpcy5faW5wdXQudHJ5TFQoLTEpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDcxNDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMzIsdGhpcy5fY3R4KTtcblx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9wYXJzZUxpc3RlbmVycyE9bnVsbCApIHRoaXMudHJpZ2dlckV4aXRSdWxlRXZlbnQoKTtcblx0XHRcdFx0XHRfcHJldmN0eCA9IF9sb2NhbGN0eDtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdF9sb2NhbGN0eCA9IG5ldyBOb3RBcnJheVR5cGVDb250ZXh0KF9wYXJlbnRjdHgsIF9wYXJlbnRTdGF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5wdXNoTmV3UmVjdXJzaW9uQ29udGV4dChfbG9jYWxjdHgsIF9zdGFydFN0YXRlLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfbm90QXJyYXlUeXBlKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjkxO1xuXHRcdFx0XHRcdGlmICghKHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA3KSkpIHRocm93IG5ldyBGYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24odGhpcywgXCJ0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNylcIik7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5Mztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTI2LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5Mjtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5Njtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5NTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjk5O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5ODtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcwMTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoICEoX2xhPT09WERvY1N5bnRheFBhcnNlci5BTVAgfHwgX2xhPT09WERvY1N5bnRheFBhcnNlci5QSVBFKSApIHtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcwMztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTI5LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcwMjtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcwNjtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcwNTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzA5O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcwODtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcxMTtcblx0XHRcdFx0XHR0aGlzLm5vdEFycmF5VHlwZSg4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzE2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMzIsdGhpcy5fY3R4KTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy51bnJvbGxSZWN1cnNpb25Db250ZXh0cyhfcGFyZW50Y3R4KTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHByb3BlcnR5SWRlbnRpZmllcigpOiBQcm9wZXJ0eUlkZW50aWZpZXJDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBQcm9wZXJ0eUlkZW50aWZpZXJDb250ZXh0ID0gbmV3IFByb3BlcnR5SWRlbnRpZmllckNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDU2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfcHJvcGVydHlJZGVudGlmaWVyKTtcblx0XHR0cnkge1xuXHRcdFx0bGV0IF9hbHQ6IG51bWJlcjtcblx0XHRcdHRoaXMuc3RhdGUgPSA3MzE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMzUsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcxNztcblx0XHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MjA7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSAxO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0c3dpdGNoIChfYWx0KSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcxODtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QRVJJT0QpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcxOTtcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzIyOyBcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEzMyx0aGlzLl9jdHgpO1xuXHRcdFx0XHR9IHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzI0O1xuXHRcdFx0XHR0aGlzLm9wdGlvbmFsSWRlbnRpZmllcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzI3OyBcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gMTtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdHN3aXRjaCAoX2FsdCkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3MjU7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3MjY7XG5cdFx0XHRcdFx0XHR0aGlzLm9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcyOTsgXG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMzQsdGhpcy5fY3R4KTtcblx0XHRcdFx0fSB3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcigpOiBPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXJDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXJDb250ZXh0ID0gbmV3IE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllckNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDU4LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDczNTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEzNix0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzMzO1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzM0O1xuXHRcdFx0XHR0aGlzLm9wdGlvbmFsSWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblxuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dDtcblx0cHVibGljIGV4cHJlc3Npb24oX3A6IG51bWJlcik6IEV4cHJlc3Npb25Db250ZXh0O1xuXHRcblx0cHVibGljIGV4cHJlc3Npb24oX3A/OiBudW1iZXIpOiBFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0aWYgKF9wID09PSB1bmRlZmluZWQpIHtcblx0XHRcdF9wID0gMDtcblx0XHR9XG5cblx0XHRsZXQgX3BhcmVudGN0eDogUGFyc2VyUnVsZUNvbnRleHQgPSB0aGlzLl9jdHg7XG5cdFx0bGV0IF9wYXJlbnRTdGF0ZTogbnVtYmVyID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgX2xvY2FsY3R4OiBFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIF9wYXJlbnRTdGF0ZSk7XG5cdFx0bGV0IF9wcmV2Y3R4OiBFeHByZXNzaW9uQ29udGV4dCA9IF9sb2NhbGN0eDtcblx0XHRsZXQgX3N0YXJ0U3RhdGU6IG51bWJlciA9IDYwO1xuXHRcdHRoaXMuZW50ZXJSZWN1cnNpb25SdWxlKF9sb2NhbGN0eCwgNjAsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9leHByZXNzaW9uLCBfcCk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzQ0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTM3LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDczODtcblx0XHRcdFx0dGhpcy51bmFyeUV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3Mzk7XG5cdFx0XHRcdHRoaXMuYXJyYXlFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzQwO1xuXHRcdFx0XHR0aGlzLm9iamVjdEV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3NDE7XG5cdFx0XHRcdHRoaXMubGFtYmRhRXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc0Mjtcblx0XHRcdFx0dGhpcy5saXRlcmFsRXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDY6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc0Mztcblx0XHRcdFx0dGhpcy5wYXJlbnRoZXNpemVkRXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY3R4Ll9zdG9wID0gdGhpcy5faW5wdXQudHJ5TFQoLTEpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDc2Njtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNDMsdGhpcy5fY3R4KTtcblx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9wYXJzZUxpc3RlbmVycyE9bnVsbCApIHRoaXMudHJpZ2dlckV4aXRSdWxlRXZlbnQoKTtcblx0XHRcdFx0XHRfcHJldmN0eCA9IF9sb2NhbGN0eDtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc2NDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTQyLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0X2xvY2FsY3R4ID0gbmV3IEV4cHJlc3Npb25Db250ZXh0KF9wYXJlbnRjdHgsIF9wYXJlbnRTdGF0ZSk7XG5cdFx0XHRcdFx0XHR0aGlzLnB1c2hOZXdSZWN1cnNpb25Db250ZXh0KF9sb2NhbGN0eCwgX3N0YXJ0U3RhdGUsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9leHByZXNzaW9uKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NDY7XG5cdFx0XHRcdFx0XHRpZiAoISh0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNykpKSB0aHJvdyBuZXcgRmFpbGVkUHJlZGljYXRlRXhjZXB0aW9uKHRoaXMsIFwidGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDcpXCIpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc0ODtcblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzQ3O1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NTA7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmICggIShfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNUQVIgfHwgX2xhPT09WERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIKSApIHtcblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc1Mjtcblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzUxO1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NTQ7XG5cdFx0XHRcdFx0XHR0aGlzLmV4cHJlc3Npb24oOCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdF9sb2NhbGN0eCA9IG5ldyBFeHByZXNzaW9uQ29udGV4dChfcGFyZW50Y3R4LCBfcGFyZW50U3RhdGUpO1xuXHRcdFx0XHRcdFx0dGhpcy5wdXNoTmV3UmVjdXJzaW9uQ29udGV4dChfbG9jYWxjdHgsIF9zdGFydFN0YXRlLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZXhwcmVzc2lvbik7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzU1O1xuXHRcdFx0XHRcdFx0aWYgKCEodGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDYpKSkgdGhyb3cgbmV3IEZhaWxlZFByZWRpY2F0ZUV4Y2VwdGlvbih0aGlzLCBcInRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA2KVwiKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NTc7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc1Njtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzU5O1xuXHRcdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0XHRpZiAoICEoX2xhPT09WERvY1N5bnRheFBhcnNlci5QTFVTIHx8IF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTUlOVVMpICkge1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVySW5saW5lKHRoaXMpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoZWRFT0YgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzYxO1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NjA7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc2Mztcblx0XHRcdFx0XHRcdHRoaXMuZXhwcmVzc2lvbig3KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3Njg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE0Myx0aGlzLl9jdHgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLnVucm9sbFJlY3Vyc2lvbkNvbnRleHRzKF9wYXJlbnRjdHgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdW5hcnlFeHByZXNzaW9uKCk6IFVuYXJ5RXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFVuYXJ5RXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgVW5hcnlFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNjIsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV91bmFyeUV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzY5O1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoICEoX2xhPT09WERvY1N5bnRheFBhcnNlci5QTFVTIHx8IF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTUlOVVMpICkge1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVySW5saW5lKHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHR0aGlzLm1hdGNoZWRFT0YgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNzcwO1xuXHRcdFx0dGhpcy5leHByZXNzaW9uKDApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBhcnJheUV4cHJlc3Npb24oKTogQXJyYXlFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogQXJyYXlFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBBcnJheUV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA2NCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2FycmF5RXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA3NzI7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9PUEVOKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA3NzQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNDQsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzczO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNzc3O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTQ1LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc3Njtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA3ODA7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNDYsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzc5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNzgzO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoKCgoKF9sYSAtIDEpKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgKF9sYSAtIDEpKSAmICgoMSA8PCAoWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsIC0gMSkpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuQm9vbGVhbkxpdGVyYWwgLSAxKSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsIC0gMSkpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuU3RyaW5nTGl0ZXJhbCAtIDEpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsIC0gMSkpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuSUQgLSAxKSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5QTFVTIC0gMSkpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuTUlOVVMgLSAxKSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOIC0gMSkpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTiAtIDEpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfT1BFTiAtIDEpKSkpICE9PSAwKSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3ODI7XG5cdFx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNzk4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR3aGlsZSAoX2xhPT09WERvY1N5bnRheFBhcnNlci5DT01NQSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc4NTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc4Nztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNDgsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzg2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc5MDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc4OTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3OTM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc5Mjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc5NTtcblx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgwMDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA4MDI7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNTIsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODAxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gODA1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MDQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDgwODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MDc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gODEwO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfQ0xPU0UpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvYmplY3RFeHByZXNzaW9uKCk6IE9iamVjdEV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPYmplY3RFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBPYmplY3RFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNjYsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RFeHByZXNzaW9uKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDgxMjtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA4MTQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNTUsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODEzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDgxNztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE1Nix0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MTY7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA4MjA7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNTcsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODE5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDgyMztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCgoKF9sYSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IF9sYSkgJiAoKDEgPDwgWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQm9vbGVhbkxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU3RyaW5nTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsKSkpICE9PSAwKSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MjI7XG5cdFx0XHRcdHRoaXMub2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA4MjY7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNTksdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODI1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDgyOTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4Mjg7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gODMyO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MzE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDgzNDtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24oKTogT2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb25Db250ZXh0ID0gbmV3IE9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA2OCwgWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0bGV0IF9hbHQ6IG51bWJlcjtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDgzNjtcblx0XHRcdHRoaXMub2JqZWN0UGFpckV4cHJlc3Npb24oKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA4NTM7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTY2LHRoaXMuX2N0eCk7XG5cdFx0XHR3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICkge1xuXHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgzODtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4Mzc7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NDA7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODQyO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNjMsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODQxO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODQ1O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODQ0O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NDg7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODQ3O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODUwO1xuXHRcdFx0XHRcdHRoaXMub2JqZWN0UGFpckV4cHJlc3Npb24oKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODU1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNjYsdGhpcy5fY3R4KTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb2JqZWN0UGFpckV4cHJlc3Npb24oKTogT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA3MCwgWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdFBhaXJFeHByZXNzaW9uKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA4NzY7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNzEsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg1Njtcblx0XHRcdFx0dGhpcy5saXRlcmFsRXhwcmVzc2lvbigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODU4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODU3O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg2MDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg2Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg2MTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NjQ7XG5cdFx0XHRcdHRoaXMub2JqZWN0RXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NjY7XG5cdFx0XHRcdHRoaXMubGl0ZXJhbEV4cHJlc3Npb24oKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg2ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg2Nztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NzA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NzI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NzE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODc0O1xuXHRcdFx0XHR0aGlzLmxpdGVyYWxFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGxhbWJkYUV4cHJlc3Npb24oKTogTGFtYmRhRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IExhbWJkYUV4cHJlc3Npb25Db250ZXh0ID0gbmV3IExhbWJkYUV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA3MiwgWERvY1N5bnRheFBhcnNlci5SVUxFX2xhbWJkYUV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDk0ODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODc4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4ODA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTcyLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg3OTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODgzO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE3Myx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4ODI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODg2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE3NCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4ODU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg4OTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuSUQpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg4ODtcblx0XHRcdFx0XHR0aGlzLmZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg5Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNzYsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODkxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4OTU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg5NDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg5ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg5Nztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MDA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QQVJFTl9DTE9TRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MDI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTc5LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkwMTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTA1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5MDQ7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MDg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5MDc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTEwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQVJST1cpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTEyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE4Mix0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5MTE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkxNTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTE0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTE4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTE3O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkyMDtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTIyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE4NSx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5MjE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlFVRVNUSU9OKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkyNDtcblx0XHRcdFx0dGhpcy5wYXJhbWV0ZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkyNjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxODYsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTI1O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5Mjk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkyODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkzMjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkzMTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MzQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5BUlJPVyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MzY7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTg5LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkzNTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTM5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5Mzg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5NDI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5NDE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTQ0O1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5NDY7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTkyLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk0NTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBsaXRlcmFsRXhwcmVzc2lvbigpOiBMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDc0LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfbGl0ZXJhbEV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTUwO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoICEoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5Cb29sZWFuTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWwpKSkgIT09IDApKSApIHtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBwYXJlbnRoZXNpemVkRXhwcmVzc2lvbigpOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDc2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfcGFyZW50aGVzaXplZEV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTUyO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDk1NDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTUzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA5NTY7XG5cdFx0XHR0aGlzLmV4cHJlc3Npb24oMCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTU4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5NTc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDk2MDtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QQVJFTl9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGRlc2NyaXB0aW9uKCk6IERlc2NyaXB0aW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogRGVzY3JpcHRpb25Db250ZXh0ID0gbmV3IERlc2NyaXB0aW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNzgsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbik7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDk2Mjtcblx0XHRcdHRoaXMuZGVzY3JpcHRpb25MaW5lKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGRlc2NyaXB0aW9uTGluZSgpOiBEZXNjcmlwdGlvbkxpbmVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEZXNjcmlwdGlvbkxpbmVDb250ZXh0ID0gbmV3IERlc2NyaXB0aW9uTGluZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDgwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA5Nzg7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTnVtYmVyTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5Cb29sZWFuTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuSUQ6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU1BBQ0U6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk1JTlVTOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0g6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQ09MT046XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU46XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0U6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5NjQ7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25MaW5lU3RhcnQoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk2ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0d2hpbGUgKCgoKF9sYSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IF9sYSkgJiAoKDEgPDwgWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQm9vbGVhbkxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU3RyaW5nTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuSUQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5TUEFDRSkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkFUKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTUlOVVMpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQ09MT04pIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5QRVJJT0QpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5JTkxJTkVfVEFHX1NUQVJUKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTikgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFKSkpICE9PSAwKSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk2NTtcblx0XHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uTGluZUVsZW1lbnQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5NzA7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuSU5MSU5FX1RBR19TVEFSVDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk3MTtcblx0XHRcdFx0dGhpcy5pbmxpbmVUYWcoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk3NTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0d2hpbGUgKCgoKF9sYSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IF9sYSkgJiAoKDEgPDwgWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQm9vbGVhbkxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU3RyaW5nTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuSUQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5TUEFDRSkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkFUKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTUlOVVMpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQ09MT04pIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5QRVJJT0QpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5JTkxJTkVfVEFHX1NUQVJUKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTikgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFKSkpICE9PSAwKSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk3Mjtcblx0XHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uTGluZUVsZW1lbnQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5Nzc7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGRlc2NyaXB0aW9uTGluZVN0YXJ0KCk6IERlc2NyaXB0aW9uTGluZVN0YXJ0Q29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogRGVzY3JpcHRpb25MaW5lU3RhcnRDb250ZXh0ID0gbmV3IERlc2NyaXB0aW9uTGluZVN0YXJ0Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgODIsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbkxpbmVTdGFydCk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTgxO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5ODA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDk4NDsgXG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfYWx0ID0gMTtcblx0XHRcdGRvIHtcblx0XHRcdFx0c3dpdGNoIChfYWx0KSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5ODM7XG5cdFx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvblRleHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTg2OyBcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMjAwLHRoaXMuX2N0eCk7XG5cdFx0XHR9IHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA5OTM7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMjAyLHRoaXMuX2N0eCk7XG5cdFx0XHR3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICkge1xuXHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTkxO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuSUQ6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTUlOVVM6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0g6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNPTE9OOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5QRVJJT0Q6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU46XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk4ODtcblx0XHRcdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25UZXh0KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU1BBQ0U6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTg5O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5BVDpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5OTA7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQVQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTk1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwyMDIsdGhpcy5fY3R4KTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KCk6IERlc2NyaXB0aW9uVGV4dENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IERlc2NyaXB0aW9uVGV4dENvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25UZXh0Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgODQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvblRleHQpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTAwNTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5OTY7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklEOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTk3O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuSUQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0g6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDMpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5OTg7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA0KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTk5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0U6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDUpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDAwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNPTE9OOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA2KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTAwMTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5NSU5VUzpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNyk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMDI7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA4KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTAwMztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBFUklPRCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTnVtYmVyTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5Cb29sZWFuTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWw6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDkpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDA0O1xuXHRcdFx0XHR0aGlzLmxpdGVyYWxFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGRlc2NyaXB0aW9uTGluZUVsZW1lbnQoKTogRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0ID0gbmV3IERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA4NiwgWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZUVsZW1lbnQpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTAwOTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JTkxJTkVfVEFHX1NUQVJUOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTAwNztcblx0XHRcdFx0dGhpcy5pbmxpbmVUYWcoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU3RyaW5nTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TUEFDRTpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQ6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQVQ6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTUlOVVM6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5DT0xPTjpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5QRVJJT0Q6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMDg7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25MaW5lVGV4dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVUZXh0KCk6IERlc2NyaXB0aW9uTGluZVRleHRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEZXNjcmlwdGlvbkxpbmVUZXh0Q29udGV4dCA9IG5ldyBEZXNjcmlwdGlvbkxpbmVUZXh0Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgODgsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbkxpbmVUZXh0KTtcblx0XHR0cnkge1xuXHRcdFx0bGV0IF9hbHQ6IG51bWJlcjtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDEwMTQ7IFxuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IDE7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHN3aXRjaCAoX2FsdCkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDE0O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuSUQ6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTUlOVVM6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0g6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNPTE9OOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5QRVJJT0Q6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU46XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMTE7XG5cdFx0XHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uVGV4dCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlNQQUNFOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMTI7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkFUOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMTM7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQVQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTAxNjsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDIwNix0aGlzLl9jdHgpO1xuXHRcdFx0fSB3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGlubGluZVRhZygpOiBJbmxpbmVUYWdDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBJbmxpbmVUYWdDb250ZXh0ID0gbmV3IElubGluZVRhZ0NvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDkwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfaW5saW5lVGFnKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDEwMTg7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuSU5MSU5FX1RBR19TVEFSVCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTAxOTtcblx0XHRcdHRoaXMuaW5saW5lVGFnTmFtZSgpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDEwMjA7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDEwMjI7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NTeW50YXhQYXJzZXIuSUQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTikpKSAhPT0gMCkpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTAyMTtcblx0XHRcdFx0dGhpcy5pbmxpbmVUYWdCb2R5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDEwMjQ7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBpbmxpbmVUYWdOYW1lKCk6IElubGluZVRhZ05hbWVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBJbmxpbmVUYWdOYW1lQ29udGV4dCA9IG5ldyBJbmxpbmVUYWdOYW1lQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOTIsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pbmxpbmVUYWdOYW1lKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTAyNjtcblx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBpbmxpbmVUYWdCb2R5KCk6IElubGluZVRhZ0JvZHlDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBJbmxpbmVUYWdCb2R5Q29udGV4dCA9IG5ldyBJbmxpbmVUYWdCb2R5Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOTQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pbmxpbmVUYWdCb2R5KTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDEwMjk7IFxuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTAyODtcblx0XHRcdFx0dGhpcy5icmFjZUJvZHkoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDMxOyBcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdH0gd2hpbGUgKCAoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NTeW50YXhQYXJzZXIuSUQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTikpKSAhPT0gMCkgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgYnJhY2VFeHByZXNzaW9uKCk6IEJyYWNlRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEJyYWNlRXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgQnJhY2VFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOTYsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9icmFjZUV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTAzMztcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOKTtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMDM3O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR3aGlsZSAoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jU3ludGF4UGFyc2VyLklEKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlBFUklPRCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4pKSkgIT09IDApKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTAzNDtcblx0XHRcdFx0dGhpcy5icmFjZUJvZHkoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDM5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDEwNDA7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBicmFjZUJvZHkoKTogQnJhY2VCb2R5Q29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogQnJhY2VCb2R5Q29udGV4dCA9IG5ldyBCcmFjZUJvZHlDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA5OCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2JyYWNlQm9keSk7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTA1MTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTA0Mjtcblx0XHRcdFx0dGhpcy5icmFjZUV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5ORVdMSU5FOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlNQQUNFOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBFUklPRDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwNDM7XG5cdFx0XHRcdHRoaXMuYnJhY2VUZXh0KCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDQ4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwyMTAsdGhpcy5fY3R4KTtcblx0XHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwNDQ7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTA0NTtcblx0XHRcdFx0XHRcdHRoaXMuYnJhY2VUZXh0KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTA1MDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDIxMCx0aGlzLl9jdHgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGJyYWNlVGV4dCgpOiBCcmFjZVRleHRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBCcmFjZVRleHRDb250ZXh0ID0gbmV3IEJyYWNlVGV4dENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDEwMCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2JyYWNlVGV4dCk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMDUzO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoICEoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jU3ludGF4UGFyc2VyLklEKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlBFUklPRCkpKSAhPT0gMCkpICkge1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVySW5saW5lKHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHR0aGlzLm1hdGNoZWRFT0YgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXG5cdHB1YmxpYyBzZW1wcmVkKF9sb2NhbGN0eDogUnVsZUNvbnRleHQsIHJ1bGVJbmRleDogbnVtYmVyLCBwcmVkSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHN3aXRjaCAocnVsZUluZGV4KSB7XG5cdFx0Y2FzZSAxMjpcblx0XHRcdHJldHVybiB0aGlzLnR5cGVfc2VtcHJlZChfbG9jYWxjdHggYXMgVHlwZUNvbnRleHQsIHByZWRJbmRleCk7XG5cblx0XHRjYXNlIDI3OlxuXHRcdFx0cmV0dXJuIHRoaXMubm90QXJyYXlUeXBlX3NlbXByZWQoX2xvY2FsY3R4IGFzIE5vdEFycmF5VHlwZUNvbnRleHQsIHByZWRJbmRleCk7XG5cblx0XHRjYXNlIDMwOlxuXHRcdFx0cmV0dXJuIHRoaXMuZXhwcmVzc2lvbl9zZW1wcmVkKF9sb2NhbGN0eCBhcyBFeHByZXNzaW9uQ29udGV4dCwgcHJlZEluZGV4KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cHJpdmF0ZSB0eXBlX3NlbXByZWQoX2xvY2FsY3R4OiBUeXBlQ29udGV4dCwgcHJlZEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRzd2l0Y2ggKHByZWRJbmRleCkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiB0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgOCk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHByaXZhdGUgbm90QXJyYXlUeXBlX3NlbXByZWQoX2xvY2FsY3R4OiBOb3RBcnJheVR5cGVDb250ZXh0LCBwcmVkSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHN3aXRjaCAocHJlZEluZGV4KSB7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA3KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cHJpdmF0ZSBleHByZXNzaW9uX3NlbXByZWQoX2xvY2FsY3R4OiBFeHByZXNzaW9uQ29udGV4dCwgcHJlZEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRzd2l0Y2ggKHByZWRJbmRleCkge1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiB0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNyk7XG5cblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gdGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDYpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9zZXJpYWxpemVkQVROU2VnbWVudHM6IG51bWJlciA9IDM7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9zZXJpYWxpemVkQVROU2VnbWVudDA6IHN0cmluZyA9XG5cdFx0XCJcXHgwM1xcdUFGNkZcXHU4MzIwXFx1NDc5RFxcdUI3NUNcXHU0ODgwXFx1MTYwNVxcdTE5MUNcXHVBQjM3XFx4MDMlXFx1MDQyMlxceDA0XFx4MDJcIitcblx0XHRcIlxcdFxceDAyXFx4MDRcXHgwM1xcdFxceDAzXFx4MDRcXHgwNFxcdFxceDA0XFx4MDRcXHgwNVxcdFxceDA1XFx4MDRcXHgwNlxcdFxceDA2XFx4MDRcXHgwN1wiK1xuXHRcdFwiXFx0XFx4MDdcXHgwNFxcYlxcdFxcYlxceDA0XFx0XFx0XFx0XFx4MDRcXG5cXHRcXG5cXHgwNFxcdlxcdFxcdlxceDA0XFxmXFx0XFxmXFx4MDRcXHJcXHRcXHJcXHgwNFwiK1xuXHRcdFwiXFx4MEVcXHRcXHgwRVxceDA0XFx4MEZcXHRcXHgwRlxceDA0XFx4MTBcXHRcXHgxMFxceDA0XFx4MTFcXHRcXHgxMVxceDA0XFx4MTJcXHRcXHgxMlxceDA0XCIrXG5cdFx0XCJcXHgxM1xcdFxceDEzXFx4MDRcXHgxNFxcdFxceDE0XFx4MDRcXHgxNVxcdFxceDE1XFx4MDRcXHgxNlxcdFxceDE2XFx4MDRcXHgxN1xcdFxceDE3XFx4MDRcIitcblx0XHRcIlxceDE4XFx0XFx4MThcXHgwNFxceDE5XFx0XFx4MTlcXHgwNFxceDFBXFx0XFx4MUFcXHgwNFxceDFCXFx0XFx4MUJcXHgwNFxceDFDXFx0XFx4MUNcXHgwNFwiK1xuXHRcdFwiXFx4MURcXHRcXHgxRFxceDA0XFx4MUVcXHRcXHgxRVxceDA0XFx4MUZcXHRcXHgxRlxceDA0IFxcdCBcXHgwNCFcXHQhXFx4MDRcXFwiXFx0XFxcIlxceDA0I1wiK1xuXHRcdFwiXFx0I1xceDA0JFxcdCRcXHgwNCVcXHQlXFx4MDQmXFx0JlxceDA0XFwnXFx0XFwnXFx4MDQoXFx0KFxceDA0KVxcdClcXHgwNCpcXHQqXFx4MDQrXFx0K1wiK1xuXHRcdFwiXFx4MDQsXFx0LFxceDA0LVxcdC1cXHgwNC5cXHQuXFx4MDQvXFx0L1xceDA0MFxcdDBcXHgwNDFcXHQxXFx4MDQyXFx0MlxceDA0M1xcdDNcXHgwNDRcIitcblx0XHRcIlxcdDRcXHgwM1xceDAyXFx4MDNcXHgwMlxceDAzXFx4MDJcXHgwNVxceDAybFxcblxceDAyXFx4MDNcXHgwMlxceDAzXFx4MDJcXHgwNVxceDAycFxcblwiK1xuXHRcdFwiXFx4MDJcXHgwM1xceDAzXFx4MDdcXHgwM3NcXG5cXHgwM1xcZlxceDAzXFx4MEVcXHgwM3ZcXHZcXHgwM1xceDAzXFx4MDNcXHgwM1xceDAzXFx4MDNcXHgwNFwiK1xuXHRcdFwiXFx4MDNcXHgwNFxceDAzXFx4MDVcXHgwM1xceDA1XFx4MDNcXHgwNVxceDA3XFx4MDVcXHg3RlxcblxceDA1XFxmXFx4MDVcXHgwRVxceDA1XFx4ODJcXHZcIitcblx0XHRcIlxceDA1XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHg4OFxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcIitcblx0XHRcIlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlwiK1xuXHRcdFwiXFx4MDNcXHgwNlxceDA1XFx4MDZcXHg5NlxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4OUFcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1wiK1xuXHRcdFwiXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhBM1xcblxceDA2XFx4MDNcXHgwNlwiK1xuXHRcdFwiXFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XCIrXG5cdFx0XCJcXHgwNVxceDA2XFx4QUZcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhCNFxcblxceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhCRVxcblxceDA2XCIrXG5cdFx0XCJcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhDMlxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4Q0FcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceENFXFxuXFx4MDZcXHgwM1xceDA2XCIrXG5cdFx0XCJcXHgwM1xceDA2XFx4MDVcXHgwNlxceEQyXFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhENlxcblxceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4REVcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XCIrXG5cdFx0XCJcXHgwNVxceDA2XFx4RTJcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhFN1xcblxceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhGMVxcblxceDA2XCIrXG5cdFx0XCJcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhGNVxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4RjlcXG5cXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4RkRcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHUwMTAyXFxuXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHUwMTBBXFxuXFx4MDZcIitcblx0XHRcIlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxcdTAxMEVcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVwiK1xuXHRcdFwiXFx4MDZcXHUwMTE0XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHUwMTE4XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDA1XFx4MDZcXHUwMTFEXFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxcdTAxMjNcIitcblx0XHRcIlxcblxceDA2XFx4MDNcXHgwN1xceDAzXFx4MDdcXHgwM1xceDA3XFx4MDNcXGJcXHgwM1xcYlxceDAzXFxiXFx4MDVcXGJcXHUwMTJCXFxuXFxiXFx4MDNcXHRcIitcblx0XHRcIlxceDAzXFx0XFx4MDNcXHRcXHgwNlxcdFxcdTAxMzBcXG5cXHRcXHJcXHRcXHgwRVxcdFxcdTAxMzFcXHgwM1xcdFxceDAzXFx0XFx4MDNcXHRcXHgwNlxcdFxcdTAxMzdcIitcblx0XHRcIlxcblxcdFxcclxcdFxceDBFXFx0XFx1MDEzOFxceDA1XFx0XFx1MDEzQlxcblxcdFxceDAzXFxuXFx4MDNcXG5cXHgwM1xcdlxceDAzXFx2XFx4MDVcXHZcXHUwMTQxXCIrXG5cdFx0XCJcXG5cXHZcXHgwM1xcZlxceDAzXFxmXFx4MDNcXHJcXHgwM1xcclxceDAzXFxyXFx4MDNcXHgwRVxceDAzXFx4MEVcXHgwM1xceDBFXFx4MDNcXHgwRVxceDAzXCIrXG5cdFx0XCJcXHgwRVxceDAzXFx4MEVcXHgwM1xceDBFXFx4MDNcXHgwRVxceDA1XFx4MEVcXHUwMTUwXFxuXFx4MEVcXHgwM1xceDBFXFx4MDNcXHgwRVxceDA1XFx4MEVcIitcblx0XHRcIlxcdTAxNTRcXG5cXHgwRVxceDAzXFx4MEVcXHgwNVxceDBFXFx1MDE1N1xcblxceDBFXFx4MDNcXHgwRVxceDA1XFx4MEVcXHUwMTVBXFxuXFx4MEVcXHgwM1wiK1xuXHRcdFwiXFx4MEVcXHgwM1xceDBFXFx4MDVcXHgwRVxcdTAxNUVcXG5cXHgwRVxceDAzXFx4MEVcXHgwNVxceDBFXFx1MDE2MVxcblxceDBFXFx4MDNcXHgwRVxceDA1XCIrXG5cdFx0XCJcXHgwRVxcdTAxNjRcXG5cXHgwRVxceDAzXFx4MEVcXHgwN1xceDBFXFx1MDE2N1xcblxceDBFXFxmXFx4MEVcXHgwRVxceDBFXFx1MDE2QVxcdlxceDBFXCIrXG5cdFx0XCJcXHgwM1xceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTZFXFxuXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxNzFcXG5cXHgwRlxceDAzXFx4MEZcIitcblx0XHRcIlxceDA1XFx4MEZcXHUwMTc0XFxuXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxNzdcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE3QVwiK1xuXHRcdFwiXFxuXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxN0RcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE4MFxcblxceDBGXFx4MDNcXHgwRlwiK1xuXHRcdFwiXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTg0XFxuXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxODdcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXCIrXG5cdFx0XCJcXHUwMThBXFxuXFx4MEZcXHgwM1xceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMThFXFxuXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxOTFcIitcblx0XHRcIlxcblxceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTk0XFxuXFx4MEZcXHgwM1xceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTk4XFxuXFx4MEZcIitcblx0XHRcIlxceDAzXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxOUNcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE5RlxcblxceDBGXFx4MDNcXHgwRlwiK1xuXHRcdFwiXFx4MDVcXHgwRlxcdTAxQTJcXG5cXHgwRlxceDAzXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxQTZcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXCIrXG5cdFx0XCJcXHUwMUE5XFxuXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxQUNcXG5cXHgwRlxceDAzXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxQjBcIitcblx0XHRcIlxcblxceDBGXFx4MDVcXHgwRlxcdTAxQjJcXG5cXHgwRlxceDAzXFx4MTBcXHgwM1xceDEwXFx4MDNcXHgxMFxceDA1XFx4MTBcXHUwMUI3XFxuXFx4MTBcIitcblx0XHRcIlxceDAzXFx4MTBcXHgwNVxceDEwXFx1MDFCQVxcblxceDEwXFx4MDNcXHgxMFxceDA3XFx4MTBcXHUwMUJEXFxuXFx4MTBcXGZcXHgxMFxceDBFXFx4MTBcIitcblx0XHRcIlxcdTAxQzBcXHZcXHgxMFxceDAzXFx4MTFcXHgwM1xceDExXFx4MDVcXHgxMVxcdTAxQzRcXG5cXHgxMVxceDAzXFx4MTFcXHgwM1xceDExXFx4MDVcXHgxMVwiK1xuXHRcdFwiXFx1MDFDOFxcblxceDExXFx4MDNcXHgxMVxceDA1XFx4MTFcXHUwMUNCXFxuXFx4MTFcXHgwM1xceDEyXFx4MDVcXHgxMlxcdTAxQ0VcXG5cXHgxMlxceDAzXCIrXG5cdFx0XCJcXHgxMlxceDAzXFx4MTJcXHgwNVxceDEyXFx1MDFEMlxcblxceDEyXFx4MDNcXHgxMlxceDAzXFx4MTJcXHgwNVxceDEyXFx1MDFENlxcblxceDEyXFx4MDNcIitcblx0XHRcIlxceDEyXFx4MDNcXHgxMlxceDAzXFx4MTNcXHgwM1xceDEzXFx4MDVcXHgxM1xcdTAxRENcXG5cXHgxM1xceDAzXFx4MTNcXHgwM1xceDEzXFx4MDVcXHgxM1wiK1xuXHRcdFwiXFx1MDFFMFxcblxceDEzXFx4MDNcXHgxM1xceDA3XFx4MTNcXHUwMUUzXFxuXFx4MTNcXGZcXHgxM1xceDBFXFx4MTNcXHUwMUU2XFx2XFx4MTNcXHgwM1wiK1xuXHRcdFwiXFx4MTNcXHgwM1xceDEzXFx4MDVcXHgxM1xcdTAxRUFcXG5cXHgxM1xceDAzXFx4MTNcXHgwM1xceDEzXFx4MDVcXHgxM1xcdTAxRUVcXG5cXHgxM1xceDAzXCIrXG5cdFx0XCJcXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXFx1MDFGMlxcblxceDEzXFx4MDNcXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXFx1MDFGNlxcblxceDEzXFx4MDNcIitcblx0XHRcIlxceDEzXFx4MDdcXHgxM1xcdTAxRjlcXG5cXHgxM1xcZlxceDEzXFx4MEVcXHgxM1xcdTAxRkNcXHZcXHgxM1xceDAzXFx4MTNcXHgwM1xceDEzXFx4MDVcIitcblx0XHRcIlxceDEzXFx1MDIwMFxcblxceDEzXFx4MDNcXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXFx1MDIwNFxcblxceDEzXFx4MDNcXHgxM1xceDAzXFx4MTNcXHgwNVwiK1xuXHRcdFwiXFx4MTNcXHUwMjA4XFxuXFx4MTNcXHgwM1xceDEzXFx4MDNcXHgxM1xceDA1XFx4MTNcXHUwMjBDXFxuXFx4MTNcXHgwM1xceDEzXFx4MDdcXHgxM1xcdTAyMEZcIitcblx0XHRcIlxcblxceDEzXFxmXFx4MTNcXHgwRVxceDEzXFx1MDIxMlxcdlxceDEzXFx4MDNcXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXFx1MDIxNlxcblxceDEzXFx4MDNcIitcblx0XHRcIlxceDEzXFx4MDNcXHgxM1xceDA1XFx4MTNcXHUwMjFBXFxuXFx4MTNcXHgwM1xceDEzXFx4MDNcXHgxM1xceDA1XFx4MTNcXHUwMjFFXFxuXFx4MTNcXHgwM1wiK1xuXHRcdFwiXFx4MTNcXHgwM1xceDEzXFx4MDVcXHgxM1xcdTAyMjJcXG5cXHgxM1xceDAzXFx4MTNcXHgwN1xceDEzXFx1MDIyNVxcblxceDEzXFxmXFx4MTNcXHgwRVwiK1xuXHRcdFwiXFx4MTNcXHUwMjI4XFx2XFx4MTNcXHgwNVxceDEzXFx1MDIyQVxcblxceDEzXFx4MDNcXHgxNFxceDAzXFx4MTRcXHgwM1xceDE0XFx4MDVcXHgxNFxcdTAyMkZcIitcblx0XHRcIlxcblxceDE0XFx4MDNcXHgxNVxceDAzXFx4MTVcXHgwNVxceDE1XFx1MDIzM1xcblxceDE1XFx4MDNcXHgxNlxceDAzXFx4MTZcXHgwM1xceDE3XFx4MDNcIitcblx0XHRcIlxceDE3XFx4MDVcXHgxN1xcdTAyMzlcXG5cXHgxN1xceDAzXFx4MTdcXHgwM1xceDE3XFx4MDVcXHgxN1xcdTAyM0RcXG5cXHgxN1xceDAzXFx4MTdcXHgwM1wiK1xuXHRcdFwiXFx4MTdcXHgwM1xceDE4XFx4MDNcXHgxOFxceDAzXFx4MThcXHgwM1xceDE5XFx4MDNcXHgxOVxceDA1XFx4MTlcXHUwMjQ2XFxuXFx4MTlcXHgwM1xceDE5XCIrXG5cdFx0XCJcXHgwNVxceDE5XFx1MDI0OVxcblxceDE5XFx4MDNcXHgxOVxceDA1XFx4MTlcXHUwMjRDXFxuXFx4MTlcXHgwM1xceDE5XFx4MDVcXHgxOVxcdTAyNEZcIitcblx0XHRcIlxcblxceDE5XFx4MDNcXHgxOVxceDA1XFx4MTlcXHUwMjUyXFxuXFx4MTlcXHgwM1xceDE5XFx4MDVcXHgxOVxcdTAyNTVcXG5cXHgxOVxceDAzXFx4MTlcIitcblx0XHRcIlxceDA1XFx4MTlcXHUwMjU4XFxuXFx4MTlcXHgwM1xceDE5XFx4MDNcXHgxOVxceDAzXFx4MUFcXHgwM1xceDFBXFx4MDVcXHgxQVxcdTAyNUVcXG5cXHgxQVwiK1xuXHRcdFwiXFx4MDNcXHgxQVxceDAzXFx4MUFcXHgwNVxceDFBXFx1MDI2MlxcblxceDFBXFx4MDNcXHgxQVxceDA1XFx4MUFcXHUwMjY1XFxuXFx4MUFcXHgwM1xceDFBXCIrXG5cdFx0XCJcXHgwNVxceDFBXFx1MDI2OFxcblxceDFBXFx4MDNcXHgxQVxceDA3XFx4MUFcXHUwMjZCXFxuXFx4MUFcXGZcXHgxQVxceDBFXFx4MUFcXHUwMjZFXFx2XCIrXG5cdFx0XCJcXHgxQVxceDAzXFx4MUJcXHgwM1xceDFCXFx4MDVcXHgxQlxcdTAyNzJcXG5cXHgxQlxceDAzXFx4MUJcXHgwNVxceDFCXFx1MDI3NVxcblxceDFCXFx4MDNcIitcblx0XHRcIlxceDFCXFx4MDNcXHgxQlxceDA1XFx4MUJcXHUwMjc5XFxuXFx4MUJcXHgwM1xceDFCXFx4MDNcXHgxQlxceDAzXFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1wiK1xuXHRcdFwiXFx1MDI3RlxcblxceDFDXFx4MDNcXHgxQ1xceDA1XFx4MUNcXHUwMjgyXFxuXFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1xcdTAyODVcXG5cXHgxQ1xceDAzXCIrXG5cdFx0XCJcXHgxQ1xceDA1XFx4MUNcXHUwMjg4XFxuXFx4MUNcXHgwM1xceDFDXFx4MDNcXHgxQ1xceDA1XFx4MUNcXHUwMjhDXFxuXFx4MUNcXHgwM1xceDFDXFx4MDVcIitcblx0XHRcIlxceDFDXFx1MDI4RlxcblxceDFDXFx4MDNcXHgxQ1xceDA1XFx4MUNcXHUwMjkyXFxuXFx4MUNcXHgwM1xceDFDXFx4MDdcXHgxQ1xcdTAyOTVcXG5cXHgxQ1wiK1xuXHRcdFwiXFxmXFx4MUNcXHgwRVxceDFDXFx1MDI5OFxcdlxceDFDXFx4MDNcXHgxQ1xceDA1XFx4MUNcXHUwMjlCXFxuXFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1wiK1xuXHRcdFwiXFx1MDI5RVxcblxceDFDXFx4MDNcXHgxQ1xceDA1XFx4MUNcXHUwMkExXFxuXFx4MUNcXHgwM1xceDFDXFx4MDNcXHgxQ1xceDAzXFx4MUNcXHgwM1xceDFDXCIrXG5cdFx0XCJcXHgwNlxceDFDXFx1MDJBN1xcblxceDFDXFxyXFx4MUNcXHgwRVxceDFDXFx1MDJBOFxceDA1XFx4MUNcXHUwMkFCXFxuXFx4MUNcXHgwM1xceDFEXFx4MDNcIitcblx0XHRcIlxceDFEXFx4MDNcXHgxRFxceDAzXFx4MURcXHgwM1xceDFEXFx4MDNcXHgxRFxceDAzXFx4MURcXHgwNVxceDFEXFx1MDJCNFxcblxceDFEXFx4MDNcXHgxRFwiK1xuXHRcdFwiXFx4MDNcXHgxRFxceDA1XFx4MURcXHUwMkI4XFxuXFx4MURcXHgwM1xceDFEXFx4MDVcXHgxRFxcdTAyQkJcXG5cXHgxRFxceDAzXFx4MURcXHgwNVxceDFEXCIrXG5cdFx0XCJcXHUwMkJFXFxuXFx4MURcXHgwM1xceDFEXFx4MDNcXHgxRFxceDA1XFx4MURcXHUwMkMyXFxuXFx4MURcXHgwM1xceDFEXFx4MDVcXHgxRFxcdTAyQzVcIitcblx0XHRcIlxcblxceDFEXFx4MDNcXHgxRFxceDA1XFx4MURcXHUwMkM4XFxuXFx4MURcXHgwM1xceDFEXFx4MDdcXHgxRFxcdTAyQ0JcXG5cXHgxRFxcZlxceDFEXFx4MEVcIitcblx0XHRcIlxceDFEXFx1MDJDRVxcdlxceDFEXFx4MDNcXHgxRVxceDAzXFx4MUVcXHgwM1xceDFFXFx4MDZcXHgxRVxcdTAyRDNcXG5cXHgxRVxcclxceDFFXFx4MEVcIitcblx0XHRcIlxceDFFXFx1MDJENFxceDAzXFx4MUVcXHgwM1xceDFFXFx4MDNcXHgxRVxceDA2XFx4MUVcXHUwMkRBXFxuXFx4MUVcXHJcXHgxRVxceDBFXFx4MUVcXHUwMkRCXCIrXG5cdFx0XCJcXHgwNVxceDFFXFx1MDJERVxcblxceDFFXFx4MDNcXHgxRlxceDAzXFx4MUZcXHgwNVxceDFGXFx1MDJFMlxcblxceDFGXFx4MDMgXFx4MDMgXFx4MDNcIitcblx0XHRcIiBcXHgwMyBcXHgwMyBcXHgwMyBcXHgwMyBcXHgwNSBcXHUwMkVCXFxuIFxceDAzIFxceDAzIFxceDA1IFxcdTAyRUZcXG4gXFx4MDMgXFx4MDMgXCIrXG5cdFx0XCJcXHgwNSBcXHUwMkYzXFxuIFxceDAzIFxceDAzIFxceDAzIFxceDA1IFxcdTAyRjhcXG4gXFx4MDMgXFx4MDMgXFx4MDUgXFx1MDJGQ1xcbiBcXHgwM1wiK1xuXHRcdFwiIFxceDA3IFxcdTAyRkZcXG4gXFxmIFxceDBFIFxcdTAzMDJcXHYgXFx4MDMhXFx4MDMhXFx4MDMhXFx4MDNcXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDMwOVwiK1xuXHRcdFwiXFxuXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAzMENcXG5cXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDMwRlxcblxcXCJcXHgwM1xcXCJcXHgwNVxcXCJcXHUwMzEyXFxuXFxcIlwiK1xuXHRcdFwiXFx4MDNcXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDMxNlxcblxcXCJcXHgwM1xcXCJcXHgwNVxcXCJcXHUwMzE5XFxuXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAzMUNcXG5cIitcblx0XHRcIlxcXCJcXHgwM1xcXCJcXHgwN1xcXCJcXHUwMzFGXFxuXFxcIlxcZlxcXCJcXHgwRVxcXCJcXHUwMzIyXFx2XFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAzMjVcXG5cXFwiXFx4MDNcIitcblx0XHRcIlxcXCJcXHgwNVxcXCJcXHUwMzI4XFxuXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAzMkJcXG5cXFwiXFx4MDNcXFwiXFx4MDNcXFwiXFx4MDMjXFx4MDMjXFx4MDUjXFx1MDMzMVwiK1xuXHRcdFwiXFxuI1xceDAzI1xceDA1I1xcdTAzMzRcXG4jXFx4MDMjXFx4MDUjXFx1MDMzN1xcbiNcXHgwMyNcXHgwNSNcXHUwMzNBXFxuI1xceDAzI1xceDA1XCIrXG5cdFx0XCIjXFx1MDMzRFxcbiNcXHgwMyNcXHgwNSNcXHUwMzQwXFxuI1xceDAzI1xceDA1I1xcdTAzNDNcXG4jXFx4MDMjXFx4MDMjXFx4MDMkXFx4MDMkXFx4MDVcIitcblx0XHRcIiRcXHUwMzQ5XFxuJFxceDAzJFxceDAzJFxceDA1JFxcdTAzNERcXG4kXFx4MDMkXFx4MDUkXFx1MDM1MFxcbiRcXHgwMyRcXHgwNSRcXHUwMzUzXCIrXG5cdFx0XCJcXG4kXFx4MDMkXFx4MDckXFx1MDM1NlxcbiRcXGYkXFx4MEUkXFx1MDM1OVxcdiRcXHgwMyVcXHgwMyVcXHgwNSVcXHUwMzVEXFxuJVxceDAzJVxceDAzXCIrXG5cdFx0XCIlXFx4MDUlXFx1MDM2MVxcbiVcXHgwMyVcXHgwMyVcXHgwMyVcXHgwMyVcXHgwNSVcXHUwMzY3XFxuJVxceDAzJVxceDAzJVxceDA1JVxcdTAzNkJcIitcblx0XHRcIlxcbiVcXHgwMyVcXHgwMyVcXHgwNSVcXHUwMzZGXFxuJVxceDAzJlxceDAzJlxceDA1JlxcdTAzNzNcXG4mXFx4MDMmXFx4MDUmXFx1MDM3NlxcblwiK1xuXHRcdFwiJlxceDAzJlxceDA1JlxcdTAzNzlcXG4mXFx4MDMmXFx4MDUmXFx1MDM3Q1xcbiZcXHgwMyZcXHgwNSZcXHUwMzdGXFxuJlxceDAzJlxceDA1JlxcdTAzODJcIitcblx0XHRcIlxcbiZcXHgwMyZcXHgwNSZcXHUwMzg1XFxuJlxceDAzJlxceDAzJlxceDA1JlxcdTAzODlcXG4mXFx4MDMmXFx4MDUmXFx1MDM4Q1xcbiZcXHgwM1wiK1xuXHRcdFwiJlxceDA1JlxcdTAzOEZcXG4mXFx4MDMmXFx4MDMmXFx4MDUmXFx1MDM5M1xcbiZcXHgwMyZcXHgwNSZcXHUwMzk2XFxuJlxceDAzJlxceDA1JlxcdTAzOTlcIitcblx0XHRcIlxcbiZcXHgwMyZcXHgwMyZcXHgwNSZcXHUwMzlEXFxuJlxceDAzJlxceDAzJlxceDA1JlxcdTAzQTFcXG4mXFx4MDMmXFx4MDUmXFx1MDNBNFxcblwiK1xuXHRcdFwiJlxceDAzJlxceDA1JlxcdTAzQTdcXG4mXFx4MDMmXFx4MDMmXFx4MDUmXFx1MDNBQlxcbiZcXHgwMyZcXHgwNSZcXHUwM0FFXFxuJlxceDAzJlxceDA1XCIrXG5cdFx0XCImXFx1MDNCMVxcbiZcXHgwMyZcXHgwMyZcXHgwNSZcXHUwM0I1XFxuJlxceDA1JlxcdTAzQjdcXG4mXFx4MDNcXCdcXHgwM1xcJ1xceDAzKFxceDAzXCIrXG5cdFx0XCIoXFx4MDUoXFx1MDNCRFxcbihcXHgwMyhcXHgwMyhcXHgwNShcXHUwM0MxXFxuKFxceDAzKFxceDAzKFxceDAzKVxceDAzKVxceDAzKlxceDAzKlwiK1xuXHRcdFwiXFx4MDcqXFx1MDNDOVxcbipcXGYqXFx4MEUqXFx1MDNDQ1xcdipcXHgwMypcXHgwMypcXHgwNypcXHUwM0QwXFxuKlxcZipcXHgwRSpcXHUwM0QzXCIrXG5cdFx0XCJcXHYqXFx4MDUqXFx1MDNENVxcbipcXHgwMytcXHgwNStcXHUwM0Q4XFxuK1xceDAzK1xceDA2K1xcdTAzREJcXG4rXFxyK1xceDBFK1xcdTAzRENcIitcblx0XHRcIlxceDAzK1xceDAzK1xceDAzK1xceDA3K1xcdTAzRTJcXG4rXFxmK1xceDBFK1xcdTAzRTVcXHYrXFx4MDMsXFx4MDMsXFx4MDMsXFx4MDMsXFx4MDNcIitcblx0XHRcIixcXHgwMyxcXHgwMyxcXHgwMyxcXHgwMyxcXHgwNSxcXHUwM0YwXFxuLFxceDAzLVxceDAzLVxceDA1LVxcdTAzRjRcXG4tXFx4MDMuXFx4MDMuXCIrXG5cdFx0XCJcXHgwMy5cXHgwNi5cXHUwM0Y5XFxuLlxcci5cXHgwRS5cXHUwM0ZBXFx4MDMvXFx4MDMvXFx4MDMvXFx4MDMvXFx4MDUvXFx1MDQwMVxcbi9cXHgwM1wiK1xuXHRcdFwiL1xceDAzL1xceDAzMFxceDAzMFxceDAzMVxceDA2MVxcdTA0MDhcXG4xXFxyMVxceDBFMVxcdTA0MDlcXHgwMzJcXHgwMzJcXHgwNzJcXHUwNDBFXCIrXG5cdFx0XCJcXG4yXFxmMlxceDBFMlxcdTA0MTFcXHYyXFx4MDMyXFx4MDMyXFx4MDMzXFx4MDMzXFx4MDMzXFx4MDMzXFx4MDczXFx1MDQxOVxcbjNcXGYzXFx4MEVcIitcblx0XHRcIjNcXHUwNDFDXFx2M1xceDA1M1xcdTA0MUVcXG4zXFx4MDM0XFx4MDM0XFx4MDM0XFx4MDJcXHgwMlxceDA1XFx4MUE4PjVcXHgwMlxceDAyXFx4MDRcIitcblx0XHRcIlxceDAyXFx4MDZcXHgwMlxcYlxceDAyXFxuXFx4MDJcXGZcXHgwMlxceDBFXFx4MDJcXHgxMFxceDAyXFx4MTJcXHgwMlxceDE0XFx4MDJcXHgxNlxceDAyXCIrXG5cdFx0XCJcXHgxOFxceDAyXFx4MUFcXHgwMlxceDFDXFx4MDJcXHgxRVxceDAyIFxceDAyXFxcIlxceDAyJFxceDAyJlxceDAyKFxceDAyKlxceDAyLFxceDAyLlwiK1xuXHRcdFwiXFx4MDIwXFx4MDIyXFx4MDI0XFx4MDI2XFx4MDI4XFx4MDI6XFx4MDI8XFx4MDI+XFx4MDJAXFx4MDJCXFx4MDJEXFx4MDJGXFx4MDJIXFx4MDJcIitcblx0XHRcIkpcXHgwMkxcXHgwMk5cXHgwMlBcXHgwMlJcXHgwMlRcXHgwMlZcXHgwMlhcXHgwMlpcXHgwMlxcXFxcXHgwMl5cXHgwMmBcXHgwMmJcXHgwMmRcXHgwMlwiK1xuXHRcdFwiZlxceDAyXFx4MDJcXHRcXHgwM1xceDAyXFxmXFxyXFx4MDNcXHgwMlxceDE5XFx4MUFcXHgwNFxceDAyXFx4MTJcXHgxMlxceDE5XFx4MTlcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgxMlxceDEzXFx4MDNcXHgwMlxceDEwXFx4MTFcXHgwNFxceDAyXFx4MDNcXHgwM1xceDA2XFx0XFx4MDVcXHgwMlxcdlxceDBFXFx4MTNcXHgxM1xceDE1XCIrXG5cdFx0XCJcXHgxNVxcdTA0RTZcXHgwMm9cXHgwM1xceDAyXFx4MDJcXHgwMlxceDA0dFxceDAzXFx4MDJcXHgwMlxceDAyXFx4MDZ5XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcYntcXHgwM1xceDAyXFx4MDJcXHgwMlxcblxcdTAxMjJcXHgwM1xceDAyXFx4MDJcXHgwMlxcZlxcdTAxMjRcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MEVcXHUwMTJBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHgxMFxcdTAxM0FcXHgwM1xceDAyXFx4MDJcXHgwMlxceDEyXFx1MDEzQ1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHgxNFxcdTAxNDBcXHgwM1xceDAyXFx4MDJcXHgwMlxceDE2XFx1MDE0MlxceDAzXFx4MDJcXHgwMlxceDAyXFx4MThcXHUwMTQ0XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxceDFBXFx1MDE0RlxceDAzXFx4MDJcXHgwMlxceDAyXFx4MUNcXHUwMUIxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHgxRVwiK1xuXHRcdFwiXFx1MDFCM1xceDAzXFx4MDJcXHgwMlxceDAyIFxcdTAxQzFcXHgwM1xceDAyXFx4MDJcXHgwMlxcXCJcXHUwMUNEXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIiRcXHUwMjI5XFx4MDNcXHgwMlxceDAyXFx4MDImXFx1MDIyRVxceDAzXFx4MDJcXHgwMlxceDAyKFxcdTAyMzJcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiKlxcdTAyMzRcXHgwM1xceDAyXFx4MDJcXHgwMixcXHUwMjM2XFx4MDNcXHgwMlxceDAyXFx4MDIuXFx1MDI0MFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCIwXFx1MDI0M1xceDAzXFx4MDJcXHgwMlxceDAyMlxcdTAyNUJcXHgwM1xceDAyXFx4MDJcXHgwMjRcXHUwMjZGXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIjZcXHUwMkFBXFx4MDNcXHgwMlxceDAyXFx4MDI4XFx1MDJCM1xceDAzXFx4MDJcXHgwMlxceDAyOlxcdTAyRERcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiPFxcdTAyRTFcXHgwM1xceDAyXFx4MDJcXHgwMj5cXHUwMkVBXFx4MDNcXHgwMlxceDAyXFx4MDJAXFx1MDMwM1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJCXFx1MDMwNlxceDAzXFx4MDJcXHgwMlxceDAyRFxcdTAzMkVcXHgwM1xceDAyXFx4MDJcXHgwMkZcXHUwMzQ2XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIkhcXHUwMzZFXFx4MDNcXHgwMlxceDAyXFx4MDJKXFx1MDNCNlxceDAzXFx4MDJcXHgwMlxceDAyTFxcdTAzQjhcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiTlxcdTAzQkFcXHgwM1xceDAyXFx4MDJcXHgwMlBcXHUwM0M0XFx4MDNcXHgwMlxceDAyXFx4MDJSXFx1MDNENFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJUXFx1MDNEN1xceDAzXFx4MDJcXHgwMlxceDAyVlxcdTAzRUZcXHgwM1xceDAyXFx4MDJcXHgwMlhcXHUwM0YzXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlpcXHUwM0Y4XFx4MDNcXHgwMlxceDAyXFx4MDJcXFxcXFx1MDNGQ1xceDAzXFx4MDJcXHgwMlxceDAyXlxcdTA0MDRcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiYFxcdTA0MDdcXHgwM1xceDAyXFx4MDJcXHgwMmJcXHUwNDBCXFx4MDNcXHgwMlxceDAyXFx4MDJkXFx1MDQxRFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJmXFx1MDQxRlxceDAzXFx4MDJcXHgwMlxceDAyaHBcXHgwN1xceDAyXFx4MDJcXHgwM2lrXFx4MDVcXHgwNFxceDAzXFx4MDJqbFxceDA3XFxmXFx4MDJcIitcblx0XHRcIlxceDAya2pcXHgwM1xceDAyXFx4MDJcXHgwMmtsXFx4MDNcXHgwMlxceDAyXFx4MDJsbVxceDAzXFx4MDJcXHgwMlxceDAybW5cXHgwN1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAzbnBcXHgwM1xceDAyXFx4MDJcXHgwMm9oXFx4MDNcXHgwMlxceDAyXFx4MDJvaVxceDAzXFx4MDJcXHgwMlxceDAycFxceDAzXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMnFzXFx4MDVcXHgwNlxceDA0XFx4MDJycVxceDAzXFx4MDJcXHgwMlxceDAyc3ZcXHgwM1xceDAyXFx4MDJcXHgwMnRyXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMnR1XFx4MDNcXHgwMlxceDAyXFx4MDJ1d1xceDAzXFx4MDJcXHgwMlxceDAydnRcXHgwM1xceDAyXFx4MDJcXHgwMnd4XFx4MDVcXGJcIitcblx0XHRcIlxceDA1XFx4MDJ4XFx4MDVcXHgwM1xceDAyXFx4MDJcXHgwMnl6XFx0XFx4MDJcXHgwMlxceDAyelxceDA3XFx4MDNcXHgwMlxceDAyXFx4MDJ7XFx4ODBcIitcblx0XHRcIlxceDA1XFxuXFx4MDZcXHgwMnx9XFx4MDdcXGZcXHgwMlxceDAyfVxceDdGXFx4MDVcXG5cXHgwNlxceDAyfnxcXHgwM1xceDAyXFx4MDJcXHgwMlxceDdGXCIrXG5cdFx0XCJcXHg4MlxceDAzXFx4MDJcXHgwMlxceDAyXFx4ODB+XFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4MFxceDgxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4MVwiK1xuXHRcdFwiXFx0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4MlxceDgwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4M1xcdTAxMjNcXHgwNVxcZlxceDA3XFx4MDJcXHg4NFwiK1xuXHRcdFwiXFx4ODVcXHgwNVxcZlxceDA3XFx4MDJcXHg4NVxceDg3XFx4MDdcXHJcXHgwMlxceDAyXFx4ODZcXHg4OFxceDA3XFxmXFx4MDJcXHgwMlxceDg3XFx4ODZcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx4ODdcXHg4OFxceDAzXFx4MDJcXHgwMlxceDAyXFx4ODhcXHg4OVxceDAzXFx4MDJcXHgwMlxceDAyXFx4ODlcXHg4QVwiK1xuXHRcdFwiXFx4MDdcXHgxMVxceDAyXFx4MDJcXHg4QVxceDhCXFx4MDdcXHJcXHgwMlxceDAyXFx4OEJcXHg4Q1xceDA1UClcXHgwMlxceDhDXFx1MDEyM1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHg4RFxceDhFXFx4MDVcXGZcXHgwN1xceDAyXFx4OEVcXHg4RlxceDA3XFxyXFx4MDJcXHgwMlxceDhGXFx4OTBcXHgwNVxceDBFXCIrXG5cdFx0XCJcXGJcXHgwMlxceDkwXFx1MDEyM1xceDAzXFx4MDJcXHgwMlxceDAyXFx4OTFcXHg5MlxceDA1XFxmXFx4MDdcXHgwMlxceDkyXFx4OTNcXHgwN1xcclxceDAyXCIrXG5cdFx0XCJcXHgwMlxceDkzXFx4OTVcXHgwNVxceDBFXFxiXFx4MDJcXHg5NFxceDk2XFx4MDdcXHJcXHgwMlxceDAyXFx4OTVcXHg5NFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHg5NVxceDk2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHg5NlxceDk3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHg5N1xceDk5XFx4MDdcXHgxN1xceDAyXFx4MDJcIitcblx0XHRcIlxceDk4XFx4OUFcXHgwN1xcclxceDAyXFx4MDJcXHg5OVxceDk4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHg5OVxceDlBXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceDlBXFx4OUJcXHgwM1xceDAyXFx4MDJcXHgwMlxceDlCXFx4OUNcXHgwNT4gXFx4MDJcXHg5Q1xcdTAxMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxceDlEXCIrXG5cdFx0XCJcXHg5RVxceDA1XFxmXFx4MDdcXHgwMlxceDlFXFx4OUZcXHgwN1xcclxceDAyXFx4MDJcXHg5RlxceEEwXFx4MDVcXHgwRVxcYlxceDAyXFx4QTBcXHhBMlwiK1xuXHRcdFwiXFx4MDdcXHJcXHgwMlxceDAyXFx4QTFcXHhBM1xceDA3XFxmXFx4MDJcXHgwMlxceEEyXFx4QTFcXHgwM1xceDAyXFx4MDJcXHgwMlxceEEyXFx4QTNcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx4QTNcXHhBNFxceDAzXFx4MDJcXHgwMlxceDAyXFx4QTRcXHhBNVxceDA3XFx4MTFcXHgwMlxceDAyXFx4QTVcXHhBNlxceDA3XCIrXG5cdFx0XCJcXHJcXHgwMlxceDAyXFx4QTZcXHhBN1xceDA1UClcXHgwMlxceEE3XFx1MDEyM1xceDAzXFx4MDJcXHgwMlxceDAyXFx4QThcXHhBOVxceDA1XFxmXFx4MDdcIitcblx0XHRcIlxceDAyXFx4QTlcXHhBQVxceDA3XFxyXFx4MDJcXHgwMlxceEFBXFx4QUJcXHgwNVxceDBFXFxiXFx4MDJcXHhBQlxceEFDXFx4MDdcXHJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhBQ1xceEFFXFx4MDdcXHgxN1xceDAyXFx4MDJcXHhBRFxceEFGXFx4MDdcXHJcXHgwMlxceDAyXFx4QUVcXHhBRFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhBRVxceEFGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhBRlxceEIwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCMFxceEIxXFx4MDU+IFxceDAyXFx4QjFcIitcblx0XHRcIlxceEIzXFx4MDdcXHJcXHgwMlxceDAyXFx4QjJcXHhCNFxceDA3XFxmXFx4MDJcXHgwMlxceEIzXFx4QjJcXHgwM1xceDAyXFx4MDJcXHgwMlxceEIzXFx4QjRcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx4QjRcXHhCNVxceDAzXFx4MDJcXHgwMlxceDAyXFx4QjVcXHhCNlxceDA3XFx4MTFcXHgwMlxceDAyXFx4QjZcXHhCN1wiK1xuXHRcdFwiXFx4MDdcXHJcXHgwMlxceDAyXFx4QjdcXHhCOFxceDA1UClcXHgwMlxceEI4XFx1MDEyM1xceDAzXFx4MDJcXHgwMlxceDAyXFx4QjlcXHhCQVxceDA1XCIrXG5cdFx0XCJcXGZcXHgwN1xceDAyXFx4QkFcXHhCQlxceDA3XFxyXFx4MDJcXHgwMlxceEJCXFx4QkRcXHgwNVxceDBFXFxiXFx4MDJcXHhCQ1xceEJFXFx4MDdcXHJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHhCRFxceEJDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCRFxceEJFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCRVxceEJGXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxceEJGXFx4QzFcXHgwN1xceDE0XFx4MDJcXHgwMlxceEMwXFx4QzJcXHgwN1xcclxceDAyXFx4MDJcXHhDMVxceEMwXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxceEMxXFx4QzJcXHgwM1xceDAyXFx4MDJcXHgwMlxceEMyXFx4QzNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEMzXFx4QzRcXHgwNVxceDFBXFx4MEVcIitcblx0XHRcIlxceDAyXFx4QzRcXHUwMTIzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhDNVxceEM2XFx4MDVcXGZcXHgwN1xceDAyXFx4QzZcXHhDN1xceDA3XFxyXFx4MDJcIitcblx0XHRcIlxceDAyXFx4QzdcXHhDOVxceDA1XFx4MEVcXGJcXHgwMlxceEM4XFx4Q0FcXHgwN1xcclxceDAyXFx4MDJcXHhDOVxceEM4XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceEM5XFx4Q0FcXHgwM1xceDAyXFx4MDJcXHgwMlxceENBXFx4Q0JcXHgwM1xceDAyXFx4MDJcXHgwMlxceENCXFx4Q0RcXHgwN1xceDE0XFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4Q0NcXHhDRVxceDA3XFxyXFx4MDJcXHgwMlxceENEXFx4Q0NcXHgwM1xceDAyXFx4MDJcXHgwMlxceENEXFx4Q0VcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4Q0VcXHhDRlxceDAzXFx4MDJcXHgwMlxceDAyXFx4Q0ZcXHhEMVxceDA1XFx4MUFcXHgwRVxceDAyXFx4RDBcXHhEMlxceDA3XFxyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4RDFcXHhEMFxceDAzXFx4MDJcXHgwMlxceDAyXFx4RDFcXHhEMlxceDAzXFx4MDJcXHgwMlxceDAyXFx4RDJcXHhEM1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhEM1xceEQ1XFx4MDdcXHgxN1xceDAyXFx4MDJcXHhENFxceEQ2XFx4MDdcXHJcXHgwMlxceDAyXFx4RDVcXHhENFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhENVxceEQ2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhENlxceEQ3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhEN1xceEQ4XFx4MDU+IFxceDAyXFx4RDhcIitcblx0XHRcIlxcdTAxMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEQ5XFx4REFcXHgwNVxcZlxceDA3XFx4MDJcXHhEQVxceERCXFx4MDdcXHJcXHgwMlxceDAyXFx4REJcIitcblx0XHRcIlxceEREXFx4MDVcXHgwRVxcYlxceDAyXFx4RENcXHhERVxceDA3XFxyXFx4MDJcXHgwMlxceEREXFx4RENcXHgwM1xceDAyXFx4MDJcXHgwMlxceEREXFx4REVcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx4REVcXHhERlxceDAzXFx4MDJcXHgwMlxceDAyXFx4REZcXHhFMVxceDA3XFx4MTRcXHgwMlxceDAyXFx4RTBcXHhFMlwiK1xuXHRcdFwiXFx4MDdcXHJcXHgwMlxceDAyXFx4RTFcXHhFMFxceDAzXFx4MDJcXHgwMlxceDAyXFx4RTFcXHhFMlxceDAzXFx4MDJcXHgwMlxceDAyXFx4RTJcXHhFM1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFM1xceEU0XFx4MDVcXHgxQVxceDBFXFx4MDJcXHhFNFxceEU2XFx4MDdcXHJcXHgwMlxceDAyXFx4RTVcXHhFN1wiK1xuXHRcdFwiXFx4MDdcXGZcXHgwMlxceDAyXFx4RTZcXHhFNVxceDAzXFx4MDJcXHgwMlxceDAyXFx4RTZcXHhFN1xceDAzXFx4MDJcXHgwMlxceDAyXFx4RTdcXHhFOFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFOFxceEU5XFx4MDdcXHgxMVxceDAyXFx4MDJcXHhFOVxceEVBXFx4MDdcXHJcXHgwMlxceDAyXFx4RUFcXHhFQlwiK1xuXHRcdFwiXFx4MDVQKVxceDAyXFx4RUJcXHUwMTIzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFQ1xceEVEXFx4MDVcXGZcXHgwN1xceDAyXFx4RURcXHhFRVxceDA3XCIrXG5cdFx0XCJcXHJcXHgwMlxceDAyXFx4RUVcXHhGMFxceDA1XFx4MEVcXGJcXHgwMlxceEVGXFx4RjFcXHgwN1xcclxceDAyXFx4MDJcXHhGMFxceEVGXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxceEYwXFx4RjFcXHgwM1xceDAyXFx4MDJcXHgwMlxceEYxXFx4RjJcXHgwM1xceDAyXFx4MDJcXHgwMlxceEYyXFx4RjRcXHgwN1xceDE0XCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4RjNcXHhGNVxceDA3XFxyXFx4MDJcXHgwMlxceEY0XFx4RjNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEY0XFx4RjVcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4RjVcXHhGNlxceDAzXFx4MDJcXHgwMlxceDAyXFx4RjZcXHhGOFxceDA1XFx4MUFcXHgwRVxceDAyXFx4RjdcXHhGOVxceDA3XFxyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4RjhcXHhGN1xceDAzXFx4MDJcXHgwMlxceDAyXFx4RjhcXHhGOVxceDAzXFx4MDJcXHgwMlxceDAyXFx4RjlcXHhGQVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHhGQVxceEZDXFx4MDdcXHgxN1xceDAyXFx4MDJcXHhGQlxceEZEXFx4MDdcXHJcXHgwMlxceDAyXFx4RkNcXHhGQlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHhGQ1xceEZEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhGRFxceEZFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhGRVxceEZGXFx4MDU+XCIrXG5cdFx0XCIgXFx4MDJcXHhGRlxcdTAxMDFcXHgwN1xcclxceDAyXFx4MDJcXHUwMTAwXFx1MDEwMlxceDA3XFxmXFx4MDJcXHgwMlxcdTAxMDFcXHUwMTAwXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxMDFcXHUwMTAyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTAyXFx1MDEwM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwM1wiK1xuXHRcdFwiXFx1MDEwNFxceDA3XFx4MTFcXHgwMlxceDAyXFx1MDEwNFxcdTAxMDVcXHgwN1xcclxceDAyXFx4MDJcXHUwMTA1XFx1MDEwNlxceDA1UClcXHgwMlwiK1xuXHRcdFwiXFx1MDEwNlxcdTAxMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMDdcXHUwMTA5XFx4MDVcXGZcXHgwN1xceDAyXFx1MDEwOFxcdTAxMEFcXHgwN1wiK1xuXHRcdFwiXFxyXFx4MDJcXHgwMlxcdTAxMDlcXHUwMTA4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTA5XFx1MDEwQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwQVwiK1xuXHRcdFwiXFx1MDEwQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwQlxcdTAxMERcXHgwN1xceDE0XFx4MDJcXHgwMlxcdTAxMENcXHUwMTBFXFx4MDdcXHJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTBEXFx1MDEwQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwRFxcdTAxMEVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMEVcXHUwMTBGXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMEZcXHUwMTEwXFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMTEwXFx1MDEyM1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTExXFx1MDExM1xceDA1XFxmXFx4MDdcXHgwMlxcdTAxMTJcXHUwMTE0XFx4MDdcXHJcXHgwMlxceDAyXFx1MDExM1xcdTAxMTJcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDExM1xcdTAxMTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMTRcXHUwMTE1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTE1XCIrXG5cdFx0XCJcXHUwMTE3XFx4MDdcXHgxNFxceDAyXFx4MDJcXHUwMTE2XFx1MDExOFxceDA3XFxyXFx4MDJcXHgwMlxcdTAxMTdcXHUwMTE2XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxMTdcXHUwMTE4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTE4XFx1MDExOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDExOVxcdTAxMUFcIitcblx0XHRcIlxceDA1XFx4MUFcXHgwRVxceDAyXFx1MDExQVxcdTAxMUNcXHgwN1xcclxceDAyXFx4MDJcXHUwMTFCXFx1MDExRFxceDA3XFxmXFx4MDJcXHgwMlxcdTAxMUNcIitcblx0XHRcIlxcdTAxMUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMUNcXHUwMTFEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTFEXFx1MDExRVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTFFXFx1MDExRlxceDA3XFx4MTFcXHgwMlxceDAyXFx1MDExRlxcdTAxMjBcXHgwN1xcclxceDAyXFx4MDJcXHUwMTIwXFx1MDEyMVwiK1xuXHRcdFwiXFx4MDVQKVxceDAyXFx1MDEyMVxcdTAxMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjJcXHg4M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlwiK1xuXHRcdFwiXFx4ODRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjJcXHg4RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlxceDkxXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxMjJcXHg5RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlxceEE4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXFx4QjlcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDEyMlxceEM1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXFx4RDlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjJcXHhFQ1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXFx1MDEwN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlxcdTAxMTFcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDEyM1xcdlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyNFxcdTAxMjVcXHgwN1xceDBGXFx4MDJcXHgwMlxcdTAxMjVcXHUwMTI2XFx4MDVcXHgxNlwiK1xuXHRcdFwiXFxmXFx4MDJcXHUwMTI2XFxyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTI3XFx1MDEyQlxceDA1XFx4MTBcXHRcXHgwMlxcdTAxMjhcXHUwMTJCXFx4MDVcIitcblx0XHRcIlxceDEyXFxuXFx4MDJcXHUwMTI5XFx1MDEyQlxceDA1XFx4MTZcXGZcXHgwMlxcdTAxMkFcXHUwMTI3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTJBXCIrXG5cdFx0XCJcXHUwMTI4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTJBXFx1MDEyOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyQlxceDBGXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxMkNcXHUwMTJGXFx4MDVcXHgxMlxcblxceDAyXFx1MDEyRFxcdTAxMkVcXHgwN1xceDE1XFx4MDJcXHgwMlxcdTAxMkVcXHUwMTMwXCIrXG5cdFx0XCJcXHgwNVxceDE0XFx2XFx4MDJcXHUwMTJGXFx1MDEyRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzMFxcdTAxMzFcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDEzMVxcdTAxMkZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMzFcXHUwMTMyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTMyXFx1MDEzQlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTMzXFx1MDEzNlxceDA1XFx4MTZcXGZcXHgwMlxcdTAxMzRcXHUwMTM1XFx4MDdcXHgxNVxceDAyXFx4MDJcXHUwMTM1XCIrXG5cdFx0XCJcXHUwMTM3XFx4MDVcXHgxNFxcdlxceDAyXFx1MDEzNlxcdTAxMzRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMzdcXHUwMTM4XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxMzhcXHUwMTM2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTM4XFx1MDEzOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzOVxcdTAxM0JcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzQVxcdTAxMkNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxM0FcXHUwMTMzXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxM0JcXHgxMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzQ1xcdTAxM0RcXHgwNVxceDE4XFxyXFx4MDJcXHUwMTNEXFx4MTNcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDEzRVxcdTAxNDFcXHgwNVxceDEyXFxuXFx4MDJcXHUwMTNGXFx1MDE0MVxceDA1XFx4MTZcXGZcXHgwMlxcdTAxNDBcXHUwMTNFXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNDBcXHUwMTNGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTQxXFx4MTVcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE0MlxcdTAxNDNcXHgwN1xcdlxceDAyXFx4MDJcXHUwMTQzXFx4MTdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNDRcXHUwMTQ1XFx4MDVcXHgxNlwiK1xuXHRcdFwiXFxmXFx4MDJcXHUwMTQ1XFx1MDE0NlxceDA3XFx4MThcXHgwMlxceDAyXFx1MDE0NlxceDE5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTQ3XFx1MDE0OFwiK1xuXHRcdFwiXFxiXFx4MEVcXHgwMVxceDAyXFx1MDE0OFxcdTAxNTBcXHgwNVxceDFDXFx4MEZcXHgwMlxcdTAxNDlcXHUwMTUwXFx4MDVcXFwiXFx4MTJcXHgwMlxcdTAxNEFcIitcblx0XHRcIlxcdTAxNTBcXHgwNSZcXHgxNFxceDAyXFx1MDE0QlxcdTAxNTBcXHgwNSxcXHgxN1xceDAyXFx1MDE0Q1xcdTAxNTBcXHgwNS5cXHgxOFxceDAyXCIrXG5cdFx0XCJcXHUwMTREXFx1MDE1MFxceDA1MFxceDE5XFx4MDJcXHUwMTRFXFx1MDE1MFxceDA1NlxceDFDXFx4MDJcXHUwMTRGXFx1MDE0N1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTRGXFx1MDE0OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0RlxcdTAxNEFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNEZcIitcblx0XHRcIlxcdTAxNEJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNEZcXHUwMTRDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTRGXFx1MDE0RFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTRGXFx1MDE0RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1MFxcdTAxNjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNTFcIitcblx0XHRcIlxcdTAxNTNcXGZcXG5cXHgwMlxceDAyXFx1MDE1MlxcdTAxNTRcXHgwN1xcclxceDAyXFx4MDJcXHUwMTUzXFx1MDE1MlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTUzXFx1MDE1NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1NFxcdTAxNTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNTVcXHUwMTU3XFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHUwMTU2XFx1MDE1NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1NlxcdTAxNTdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNTdcIitcblx0XHRcIlxcdTAxNTlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNThcXHUwMTVBXFx4MDdcXHJcXHgwMlxceDAyXFx1MDE1OVxcdTAxNThcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDE1OVxcdTAxNUFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNUFcXHUwMTVCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTVCXFx1MDE1RFwiK1xuXHRcdFwiXFx0XFx4MDNcXHgwMlxceDAyXFx1MDE1Q1xcdTAxNUVcXHgwN1xcclxceDAyXFx4MDJcXHUwMTVEXFx1MDE1Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1RFwiK1xuXHRcdFwiXFx1MDE1RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1RVxcdTAxNjBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNUZcXHUwMTYxXFx4MDdcXGZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTYwXFx1MDE1RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2MFxcdTAxNjFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjFcXHUwMTYzXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjJcXHUwMTY0XFx4MDdcXHJcXHgwMlxceDAyXFx1MDE2M1xcdTAxNjJcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE2M1xcdTAxNjRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjRcXHUwMTY1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTY1XFx1MDE2N1xceDA1XCIrXG5cdFx0XCJcXHgxQVxceDBFXFx2XFx1MDE2NlxcdTAxNTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjdcXHUwMTZBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTY4XCIrXG5cdFx0XCJcXHUwMTY2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTY4XFx1MDE2OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2OVxceDFCXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxNkFcXHUwMTY4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTZCXFx1MDE2RFxceDA3IFxceDAyXFx4MDJcXHUwMTZDXFx1MDE2RVwiK1xuXHRcdFwiXFx4MDdcXHJcXHgwMlxceDAyXFx1MDE2RFxcdTAxNkNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNkRcXHUwMTZFXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxNkVcXHUwMTcwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTZGXFx1MDE3MVxceDA3XFxmXFx4MDJcXHgwMlxcdTAxNzBcXHUwMTZGXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxNzBcXHUwMTcxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTcxXFx1MDE3M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3MlwiK1xuXHRcdFwiXFx1MDE3NFxceDA3XFxyXFx4MDJcXHgwMlxcdTAxNzNcXHUwMTcyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTczXFx1MDE3NFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTc0XFx1MDE3NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3NVxcdTAxNzdcXHgwNVxceDFFXFx4MTBcXHgwMlxcdTAxNzZcXHUwMTc1XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNzZcXHUwMTc3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTc3XFx1MDE3OVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTc4XFx1MDE3QVxceDA3XFxyXFx4MDJcXHgwMlxcdTAxNzlcXHUwMTc4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTc5XFx1MDE3QVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTdBXFx1MDE3Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3QlxcdTAxN0RcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTdDXCIrXG5cdFx0XCJcXHUwMTdCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTdDXFx1MDE3RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3RFxcdTAxN0ZcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDE3RVxcdTAxODBcXHgwN1xcclxceDAyXFx4MDJcXHUwMTdGXFx1MDE3RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3RlxcdTAxODBcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4MFxcdTAxODFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxODFcXHUwMTgzXFx4MDchXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE4MlxcdTAxODRcXHgwN1xcclxceDAyXFx4MDJcXHUwMTgzXFx1MDE4MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4M1xcdTAxODRcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDE4NFxcdTAxODZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxODVcXHUwMTg3XFx4MDdcXGZcXHgwMlxceDAyXFx1MDE4NlwiK1xuXHRcdFwiXFx1MDE4NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4NlxcdTAxODdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxODdcXHUwMTg5XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxODhcXHUwMThBXFx4MDdcXHJcXHgwMlxceDAyXFx1MDE4OVxcdTAxODhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxODlcXHUwMThBXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOEFcXHUwMThCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMThCXFx1MDE4RFxceDA3XFx4MUJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMThDXFx1MDE4RVxceDA3XFxyXFx4MDJcXHgwMlxcdTAxOERcXHUwMThDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMThEXFx1MDE4RVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMThFXFx1MDE5MFwiO1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBfc2VyaWFsaXplZEFUTlNlZ21lbnQxOiBzdHJpbmcgPVxuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMThGXFx1MDE5MVxceDA3XFxmXFx4MDJcXHgwMlxcdTAxOTBcXHUwMThGXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxOTBcXHUwMTkxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTkxXFx1MDE5M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5MlxcdTAxOTRcXHgwN1wiK1xuXHRcdFwiXFxyXFx4MDJcXHgwMlxcdTAxOTNcXHUwMTkyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTkzXFx1MDE5NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5NFwiK1xuXHRcdFwiXFx1MDE5NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5NVxcdTAxOTdcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAxOTZcXHUwMTk4XFx4MDdcXHgxOFwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxOTdcXHUwMTk2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTk3XFx1MDE5OFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5OFwiK1xuXHRcdFwiXFx1MDFCMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5OVxcdTAxOUJcXHgwNSBcXHgxMVxceDAyXFx1MDE5QVxcdTAxOUNcXHgwN1xcclxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxOUJcXHUwMTlBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTlCXFx1MDE5Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5Q1xcdTAxOUVcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5RFxcdTAxOUZcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTlFXFx1MDE5RFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTlFXFx1MDE5RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5RlxcdTAxQTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQTBcXHUwMUEyXFx4MDdcIitcblx0XHRcIlxcclxceDAyXFx4MDJcXHUwMUExXFx1MDFBMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBMVxcdTAxQTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQTJcIitcblx0XHRcIlxcdTAxQTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQTNcXHUwMUE1XFx4MDdcXHgxQlxceDAyXFx4MDJcXHUwMUE0XFx1MDFBNlxceDA3XFxyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFBNVxcdTAxQTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQTVcXHUwMUE2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUE2XFx1MDFBOFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUE3XFx1MDFBOVxceDA3XFxmXFx4MDJcXHgwMlxcdTAxQThcXHUwMUE3XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxQThcXHUwMUE5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUE5XFx1MDFBQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBQVxcdTAxQUNcXHgwN1wiK1xuXHRcdFwiXFxyXFx4MDJcXHgwMlxcdTAxQUJcXHUwMUFBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUFCXFx1MDFBQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBQ1wiK1xuXHRcdFwiXFx1MDFBRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBRFxcdTAxQUZcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAxQUVcXHUwMUIwXFx4MDdcXHgxOFwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxQUZcXHUwMUFFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUFGXFx1MDFCMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCMFwiK1xuXHRcdFwiXFx1MDFCMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCMVxcdTAxNkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjFcXHUwMTk5XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxQjJcXHgxRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCM1xcdTAxQkVcXHgwNSBcXHgxMVxceDAyXFx1MDFCNFxcdTAxQjZcIitcblx0XHRcIlxceDA3XFx4MTZcXHgwMlxceDAyXFx1MDFCNVxcdTAxQjdcXHgwN1xcZlxceDAyXFx4MDJcXHUwMUI2XFx1MDFCNVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUI2XFx1MDFCN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCN1xcdTAxQjlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjhcXHUwMUJBXFx4MDdcIitcblx0XHRcIlxcclxceDAyXFx4MDJcXHUwMUI5XFx1MDFCOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCOVxcdTAxQkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQkFcIitcblx0XHRcIlxcdTAxQkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQkJcXHUwMUJEXFx4MDUgXFx4MTFcXHgwMlxcdTAxQkNcXHUwMUI0XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxQkRcXHUwMUMwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUJFXFx1MDFCQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCRVxcdTAxQkZcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCRlxceDFGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUMwXFx1MDFCRVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUMxXFx1MDFDQVxceDA1XFx4MTZcXGZcXHgwMlxcdTAxQzJcXHUwMUM0XFx4MDdcXHJcXHgwMlxceDAyXFx1MDFDM1xcdTAxQzJcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDFDM1xcdTAxQzRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQzRcXHUwMUM1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUM1XCIrXG5cdFx0XCJcXHUwMUM3XFx4MDdcXHgxNFxceDAyXFx4MDJcXHUwMUM2XFx1MDFDOFxceDA3XFxyXFx4MDJcXHgwMlxcdTAxQzdcXHUwMUM2XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxQzdcXHUwMUM4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUM4XFx1MDFDOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDOVxcdTAxQ0JcIitcblx0XHRcIlxceDA1XFx4MUFcXHgwRVxceDAyXFx1MDFDQVxcdTAxQzNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQ0FcXHUwMUNCXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxQ0IhXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUNDXFx1MDFDRVxceDA1XFx4MTZcXGZcXHgwMlxcdTAxQ0RcXHUwMUNDXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxQ0RcXHUwMUNFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUNFXFx1MDFDRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDRlwiK1xuXHRcdFwiXFx1MDFEMVxceDA3JFxceDAyXFx4MDJcXHUwMUQwXFx1MDFEMlxceDA3XFxyXFx4MDJcXHgwMlxcdTAxRDFcXHUwMUQwXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxRDFcXHUwMUQyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUQyXFx1MDFEM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFEM1xcdTAxRDVcIitcblx0XHRcIlxceDA1JFxceDEzXFx4MDJcXHUwMUQ0XFx1MDFENlxceDA3XFxyXFx4MDJcXHgwMlxcdTAxRDVcXHUwMUQ0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUQ1XCIrXG5cdFx0XCJcXHUwMUQ2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUQ2XFx1MDFEN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFEN1xcdTAxRDhcXHgwNyVcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMUQ4I1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFEOVxcdTAxREJcXHgwNSZcXHgxNFxceDAyXFx1MDFEQVxcdTAxRENcXHgwN1xcclwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxREJcXHUwMURBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMURCXFx1MDFEQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFEQ1wiK1xuXHRcdFwiXFx1MDFFNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFERFxcdTAxREZcXHgwN1xceDE2XFx4MDJcXHgwMlxcdTAxREVcXHUwMUUwXFx4MDdcXHJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMURGXFx1MDFERVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFERlxcdTAxRTBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRTBcXHUwMUUxXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRTFcXHUwMUUzXFx4MDUkXFx4MTNcXHgwMlxcdTAxRTJcXHUwMUREXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxRTNcXHUwMUU2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUU0XFx1MDFFMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFNFxcdTAxRTVcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDFFNVxcdTAyMkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRTZcXHUwMUU0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUU3XCIrXG5cdFx0XCJcXHUwMUU5XFx4MDUmXFx4MTRcXHgwMlxcdTAxRThcXHUwMUVBXFx4MDdcXHJcXHgwMlxceDAyXFx1MDFFOVxcdTAxRThcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFFOVxcdTAxRUFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRUFcXHUwMUVCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUVCXFx1MDFFRFwiK1xuXHRcdFwiXFx4MDdcXG5cXHgwMlxceDAyXFx1MDFFQ1xcdTAxRUVcXHgwN1xcclxceDAyXFx4MDJcXHUwMUVEXFx1MDFFQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFRFwiK1xuXHRcdFwiXFx1MDFFRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFRVxcdTAxRUZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRUZcXHUwMUYxXFx4MDUmXFx4MTRcIitcblx0XHRcIlxceDAyXFx1MDFGMFxcdTAxRjJcXHgwN1xcclxceDAyXFx4MDJcXHUwMUYxXFx1MDFGMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGMVxcdTAxRjJcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGMlxcdTAxRkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRjNcXHUwMUY1XFx4MDdcXHgxNlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxRjRcXHUwMUY2XFx4MDdcXHJcXHgwMlxceDAyXFx1MDFGNVxcdTAxRjRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRjVcXHUwMUY2XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxRjZcXHUwMUY3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUY3XFx1MDFGOVxceDA1JFxceDEzXFx4MDJcXHUwMUY4XCIrXG5cdFx0XCJcXHUwMUYzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUY5XFx1MDFGQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGQVxcdTAxRjhcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDFGQVxcdTAxRkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRkJcXHUwMjJBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUZDXCIrXG5cdFx0XCJcXHUwMUZBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUZEXFx1MDFGRlxceDA1JlxceDE0XFx4MDJcXHUwMUZFXFx1MDIwMFxceDA3XFxyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFGRlxcdTAxRkVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRkZcXHUwMjAwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjAwXFx1MDIwMVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjAxXFx1MDIwM1xceDA3XFx4MTlcXHgwMlxceDAyXFx1MDIwMlxcdTAyMDRcXHgwN1xcclxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyMDNcXHUwMjAyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjAzXFx1MDIwNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwNFxcdTAyMDVcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDIwNVxcdTAyMDdcXHgwNSZcXHgxNFxceDAyXFx1MDIwNlxcdTAyMDhcXHgwN1xcclxceDAyXFx4MDJcXHUwMjA3XCIrXG5cdFx0XCJcXHUwMjA2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjA3XFx1MDIwOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwOFxcdTAyMTBcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDIwOVxcdTAyMEJcXHgwN1xceDE2XFx4MDJcXHgwMlxcdTAyMEFcXHUwMjBDXFx4MDdcXHJcXHgwMlxceDAyXFx1MDIwQlxcdTAyMEFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwQlxcdTAyMENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMENcXHUwMjBEXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyMERcXHUwMjBGXFx4MDUkXFx4MTNcXHgwMlxcdTAyMEVcXHUwMjA5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjBGXFx1MDIxMlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjEwXFx1MDIwRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxMFxcdTAyMTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTFcIitcblx0XHRcIlxcdTAyMkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTJcXHUwMjEwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjEzXFx1MDIxNVxceDA1JlxceDE0XCIrXG5cdFx0XCJcXHgwMlxcdTAyMTRcXHUwMjE2XFx4MDdcXHJcXHgwMlxceDAyXFx1MDIxNVxcdTAyMTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTVcXHUwMjE2XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTZcXHUwMjE3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjE3XFx1MDIxOVxceDA3XFx4MUFcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjE4XFx1MDIxQVxceDA3XFxyXFx4MDJcXHgwMlxcdTAyMTlcXHUwMjE4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjE5XFx1MDIxQVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjFBXFx1MDIxQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxQlxcdTAyMURcXHgwNSZcXHgxNFxceDAyXFx1MDIxQ1wiK1xuXHRcdFwiXFx1MDIxRVxceDA3XFxyXFx4MDJcXHgwMlxcdTAyMURcXHUwMjFDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjFEXFx1MDIxRVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMjFFXFx1MDIyNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxRlxcdTAyMjFcXHgwN1xceDE2XFx4MDJcXHgwMlxcdTAyMjBcXHUwMjIyXCIrXG5cdFx0XCJcXHgwN1xcclxceDAyXFx4MDJcXHUwMjIxXFx1MDIyMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyMVxcdTAyMjJcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDIyMlxcdTAyMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMjNcXHUwMjI1XFx4MDUkXFx4MTNcXHgwMlxcdTAyMjRcXHUwMjFGXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyMjVcXHUwMjI4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjI2XFx1MDIyNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyNlwiK1xuXHRcdFwiXFx1MDIyN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyN1xcdTAyMkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMjhcXHUwMjI2XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyMjlcXHUwMUQ5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjI5XFx1MDFFN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyOVwiK1xuXHRcdFwiXFx1MDFGRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyOVxcdTAyMTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMkElXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyMkJcXHUwMjJGXFx4MDVcXHgxOFxcclxceDAyXFx1MDIyQ1xcdTAyMkZcXHgwNTpcXHgxRVxceDAyXFx1MDIyRFxcdTAyMkZcXHgwNVwiK1xuXHRcdFwiKFxceDE1XFx4MDJcXHUwMjJFXFx1MDIyQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyRVxcdTAyMkNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMkVcIitcblx0XHRcIlxcdTAyMkRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMkZcXCdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMzBcXHUwMjMzXFx4MDVcXHgxNlxcZlxceDAyXCIrXG5cdFx0XCJcXHUwMjMxXFx1MDIzM1xceDA1KlxceDE2XFx4MDJcXHUwMjMyXFx1MDIzMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzMlxcdTAyMzFcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDIzMylcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMzRcXHUwMjM1XFx4MDdcXHRcXHgwMlxceDAyXFx1MDIzNStcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDIzNlxcdTAyMzhcXHgwNyBcXHgwMlxceDAyXFx1MDIzN1xcdTAyMzlcXHgwN1xcclxceDAyXFx4MDJcXHUwMjM4XCIrXG5cdFx0XCJcXHUwMjM3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjM4XFx1MDIzOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzOVxcdTAyM0FcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDIzQVxcdTAyM0NcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAyM0JcXHUwMjNEXFx4MDdcXHJcXHgwMlxceDAyXFx1MDIzQ1xcdTAyM0JcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzQ1xcdTAyM0RcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyM0RcXHUwMjNFXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyM0VcXHUwMjNGXFx4MDchXFx4MDJcXHgwMlxcdTAyM0YtXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjQwXFx1MDI0MVxcdFxceDA0XFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDI0MVxcdTAyNDJcXHgwNSZcXHgxNFxceDAyXFx1MDI0Mi9cXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDNcXHUwMjQ1XFx4MDdcXHgxRVwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyNDRcXHUwMjQ2XFx4MDdcXHJcXHgwMlxceDAyXFx1MDI0NVxcdTAyNDRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDVcXHUwMjQ2XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDZcXHUwMjQ4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjQ3XFx1MDI0OVxceDA3XFxmXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI0OFxcdTAyNDdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDhcXHUwMjQ5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjQ5XFx1MDI0QlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjRBXFx1MDI0Q1xceDA3XFxyXFx4MDJcXHgwMlxcdTAyNEJcXHUwMjRBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjRCXCIrXG5cdFx0XCJcXHUwMjRDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjRDXFx1MDI0RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0RFxcdTAyNEZcXHgwNTJcXHgxQVwiK1xuXHRcdFwiXFx4MDJcXHUwMjRFXFx1MDI0RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0RVxcdTAyNEZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNEZcXHUwMjUxXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTBcXHUwMjUyXFx4MDdcXHJcXHgwMlxceDAyXFx1MDI1MVxcdTAyNTBcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI1MVxcdTAyNTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTJcXHUwMjU0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjUzXFx1MDI1NVxceDA3XCIrXG5cdFx0XCJcXGZcXHgwMlxceDAyXFx1MDI1NFxcdTAyNTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTRcXHUwMjU1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjU1XCIrXG5cdFx0XCJcXHUwMjU3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjU2XFx1MDI1OFxceDA3XFxyXFx4MDJcXHgwMlxcdTAyNTdcXHUwMjU2XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyNTdcXHUwMjU4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjU4XFx1MDI1OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1OVxcdTAyNUFcIitcblx0XHRcIlxceDA3XFx4MUZcXHgwMlxceDAyXFx1MDI1QTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNUJcXHUwMjVEXFx4MDU0XFx4MUJcXHgwMlxcdTAyNUNcIitcblx0XHRcIlxcdTAyNUVcXHgwN1xcclxceDAyXFx4MDJcXHUwMjVEXFx1MDI1Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1RFxcdTAyNUVcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDI1RVxcdTAyNkNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNUZcXHUwMjYxXFx4MDdcXHgxNlxceDAyXFx4MDJcXHUwMjYwXFx1MDI2MlwiK1xuXHRcdFwiXFx4MDdcXHJcXHgwMlxceDAyXFx1MDI2MVxcdTAyNjBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNjFcXHUwMjYyXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyNjJcXHUwMjY0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjYzXFx1MDI2NVxceDA3XFxmXFx4MDJcXHgwMlxcdTAyNjRcXHUwMjYzXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyNjRcXHUwMjY1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjY1XFx1MDI2N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2NlwiK1xuXHRcdFwiXFx1MDI2OFxceDA3XFxyXFx4MDJcXHgwMlxcdTAyNjdcXHUwMjY2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjY3XFx1MDI2OFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMjY4XFx1MDI2OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2OVxcdTAyNkJcXHgwNTRcXHgxQlxceDAyXFx1MDI2QVxcdTAyNUZcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2QlxcdTAyNkVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNkNcXHUwMjZBXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyNkNcXHUwMjZEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjZEM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2RVxcdTAyNkNcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDI2RlxcdTAyNzFcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAyNzBcXHUwMjcyXFx4MDdcXHgxOFxceDAyXFx4MDJcXHUwMjcxXCIrXG5cdFx0XCJcXHUwMjcwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjcxXFx1MDI3MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3MlxcdTAyNzRcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDI3M1xcdTAyNzVcXHgwN1xcclxceDAyXFx4MDJcXHUwMjc0XFx1MDI3M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3NFxcdTAyNzVcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3NVxcdTAyNzZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNzZcXHUwMjc4XFx4MDdcXHgxNFxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyNzdcXHUwMjc5XFx4MDdcXHJcXHgwMlxceDAyXFx1MDI3OFxcdTAyNzdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNzhcXHUwMjc5XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyNzlcXHUwMjdBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjdBXFx1MDI3QlxceDA1XFx4MUFcXHgwRVxceDAyXFx1MDI3QlwiK1xuXHRcdFwiNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3Q1xcdTAyN0VcXHgwN1xcXCJcXHgwMlxceDAyXFx1MDI3RFxcdTAyN0ZcXHgwN1xcZlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyN0VcXHUwMjdEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjdFXFx1MDI3RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3RlxcdTAyODFcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDI4MFxcdTAyODJcXHgwN1xcclxceDAyXFx4MDJcXHUwMjgxXFx1MDI4MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4MVwiK1xuXHRcdFwiXFx1MDI4MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4MlxcdTAyODRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyODNcXHUwMjg1XFx4MDdcXGZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMjg0XFx1MDI4M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4NFxcdTAyODVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyODVcXHUwMjg3XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyODZcXHUwMjg4XFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMjg3XFx1MDI4NlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjg3XFx1MDI4OFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4OFxcdTAyOTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyODlcXHUwMjhCXFx4MDdcIitcblx0XHRcIlxceDE2XFx4MDJcXHgwMlxcdTAyOEFcXHUwMjhDXFx4MDdcXGZcXHgwMlxceDAyXFx1MDI4QlxcdTAyOEFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOEJcIitcblx0XHRcIlxcdTAyOENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOENcXHUwMjhFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjhEXFx1MDI4RlxceDA3XFxyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDI4RVxcdTAyOERcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOEVcXHUwMjhGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjhGXFx1MDI5MVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjkwXFx1MDI5MlxceDA3XFxmXFx4MDJcXHgwMlxcdTAyOTFcXHUwMjkwXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyOTFcXHUwMjkyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjkyXFx1MDI5M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5M1xcdTAyOTVcXHgwNVwiK1xuXHRcdFwiXFx4MUFcXHgwRVxceDAyXFx1MDI5NFxcdTAyODlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOTVcXHUwMjk4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjk2XCIrXG5cdFx0XCJcXHUwMjk0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjk2XFx1MDI5N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5N1xcdTAyOUFcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDI5OFxcdTAyOTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOTlcXHUwMjlCXFx4MDdcXGZcXHgwMlxceDAyXFx1MDI5QVxcdTAyOTlcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5QVxcdTAyOUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOUJcXHUwMjlEXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyOUNcXHUwMjlFXFx4MDdcXHJcXHgwMlxceDAyXFx1MDI5RFxcdTAyOUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOURcXHUwMjlFXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyOUVcXHUwMkEwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjlGXFx1MDJBMVxceDA3XFxmXFx4MDJcXHgwMlxcdTAyQTBcIitcblx0XHRcIlxcdTAyOUZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQTBcXHUwMkExXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkExXFx1MDJBMlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMkEyXFx1MDJBQlxceDA3I1xceDAyXFx4MDJcXHUwMkEzXFx1MDJBNlxceDA1OFxceDFEXFx4MDJcXHUwMkE0XFx1MDJBNVwiK1xuXHRcdFwiXFx4MDdcXFwiXFx4MDJcXHgwMlxcdTAyQTVcXHUwMkE3XFx4MDcjXFx4MDJcXHgwMlxcdTAyQTZcXHUwMkE0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkE3XCIrXG5cdFx0XCJcXHUwMkE4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkE4XFx1MDJBNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBOFxcdTAyQTlcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDJBOVxcdTAyQUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQUFcXHUwMjdDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkFBXCIrXG5cdFx0XCJcXHUwMkEzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkFCN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBQ1xcdTAyQURcXGJcXHgxRFxceDAxXFx4MDJcIitcblx0XHRcIlxcdTAyQURcXHUwMkI0XFx4MDVcXHgxQ1xceDBGXFx4MDJcXHUwMkFFXFx1MDJCNFxceDA1XFxcIlxceDEyXFx4MDJcXHUwMkFGXFx1MDJCNFxceDA1XCIrXG5cdFx0XCImXFx4MTRcXHgwMlxcdTAyQjBcXHUwMkI0XFx4MDUsXFx4MTdcXHgwMlxcdTAyQjFcXHUwMkI0XFx4MDUuXFx4MThcXHgwMlxcdTAyQjJcXHUwMkI0XCIrXG5cdFx0XCJcXHgwNTBcXHgxOVxceDAyXFx1MDJCM1xcdTAyQUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQjNcXHUwMkFFXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyQjNcXHUwMkFGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkIzXFx1MDJCMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCM1xcdTAyQjFcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDJCM1xcdTAyQjJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQjRcXHUwMkNDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkI1XCIrXG5cdFx0XCJcXHUwMkI3XFxmXFx0XFx4MDJcXHgwMlxcdTAyQjZcXHUwMkI4XFx4MDdcXHJcXHgwMlxceDAyXFx1MDJCN1xcdTAyQjZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJCN1xcdTAyQjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQjhcXHUwMkJBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkI5XFx1MDJCQlxceDA3XCIrXG5cdFx0XCJcXGZcXHgwMlxceDAyXFx1MDJCQVxcdTAyQjlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQkFcXHUwMkJCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkJCXCIrXG5cdFx0XCJcXHUwMkJEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkJDXFx1MDJCRVxceDA3XFxyXFx4MDJcXHgwMlxcdTAyQkRcXHUwMkJDXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyQkRcXHUwMkJFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkJFXFx1MDJCRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCRlxcdTAyQzFcIitcblx0XHRcIlxcdFxceDAzXFx4MDJcXHgwMlxcdTAyQzBcXHUwMkMyXFx4MDdcXHJcXHgwMlxceDAyXFx1MDJDMVxcdTAyQzBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQzFcIitcblx0XHRcIlxcdTAyQzJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQzJcXHUwMkM0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkMzXFx1MDJDNVxceDA3XFxmXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJDNFxcdTAyQzNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQzRcXHUwMkM1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkM1XFx1MDJDN1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkM2XFx1MDJDOFxceDA3XFxyXFx4MDJcXHgwMlxcdTAyQzdcXHUwMkM2XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyQzdcXHUwMkM4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkM4XFx1MDJDOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDOVxcdTAyQ0JcXHgwNVwiK1xuXHRcdFwiOFxceDFEXFxuXFx1MDJDQVxcdTAyQjVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQ0JcXHUwMkNFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkNDXCIrXG5cdFx0XCJcXHUwMkNBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkNDXFx1MDJDRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDRDlcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJDRVxcdTAyQ0NcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQ0ZcXHUwMkQyXFx4MDVcXHgxNlxcZlxceDAyXFx1MDJEMFxcdTAyRDFcIitcblx0XHRcIlxceDA3XFx4MTVcXHgwMlxceDAyXFx1MDJEMVxcdTAyRDNcXHgwNTxcXHgxRlxceDAyXFx1MDJEMlxcdTAyRDBcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJEM1xcdTAyRDRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRDRcXHUwMkQyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkQ0XFx1MDJENVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMkQ1XFx1MDJERVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJENlxcdTAyRDlcXHgwNVxceDE4XFxyXFx4MDJcXHUwMkQ3XCIrXG5cdFx0XCJcXHUwMkQ4XFx4MDdcXHgxNVxceDAyXFx4MDJcXHUwMkQ4XFx1MDJEQVxceDA1PFxceDFGXFx4MDJcXHUwMkQ5XFx1MDJEN1xceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMkRBXFx1MDJEQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJEQlxcdTAyRDlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyREJcXHUwMkRDXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRENcXHUwMkRFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkREXFx1MDJDRlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkREXFx1MDJENlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJERTtcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyREZcXHUwMkUyXFx4MDVcXHgxNlwiK1xuXHRcdFwiXFxmXFx4MDJcXHUwMkUwXFx1MDJFMlxceDA1XFx4MThcXHJcXHgwMlxcdTAyRTFcXHUwMkRGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkUxXFx1MDJFMFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkUyPVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFM1xcdTAyRTRcXGIgXFx4MDFcXHgwMlxcdTAyRTRcXHUwMkVCXCIrXG5cdFx0XCJcXHgwNUAhXFx4MDJcXHUwMkU1XFx1MDJFQlxceDA1QlxcXCJcXHgwMlxcdTAyRTZcXHUwMkVCXFx4MDVEI1xceDAyXFx1MDJFN1xcdTAyRUJcXHgwNVwiK1xuXHRcdFwiSiZcXHgwMlxcdTAyRThcXHUwMkVCXFx4MDVMXFwnXFx4MDJcXHUwMkU5XFx1MDJFQlxceDA1TihcXHgwMlxcdTAyRUFcXHUwMkUzXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyRUFcXHUwMkU1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkVBXFx1MDJFNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFQVwiK1xuXHRcdFwiXFx1MDJFN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFQVxcdTAyRThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRUFcXHUwMkU5XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyRUJcXHUwMzAwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkVDXFx1MDJFRVxcZlxcdFxceDAyXFx4MDJcXHUwMkVEXFx1MDJFRlwiK1xuXHRcdFwiXFx4MDdcXHJcXHgwMlxceDAyXFx1MDJFRVxcdTAyRURcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRUVcXHUwMkVGXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyRUZcXHUwMkYwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkYwXFx1MDJGMlxcdFxceDA1XFx4MDJcXHgwMlxcdTAyRjFcXHUwMkYzXFx4MDdcIitcblx0XHRcIlxcclxceDAyXFx4MDJcXHUwMkYyXFx1MDJGMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGMlxcdTAyRjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRjNcIitcblx0XHRcIlxcdTAyRjRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRjRcXHUwMkZGXFx4MDU+IFxcblxcdTAyRjVcXHUwMkY3XFxmXFxiXFx4MDJcXHgwMlxcdTAyRjZcIitcblx0XHRcIlxcdTAyRjhcXHgwN1xcclxceDAyXFx4MDJcXHUwMkY3XFx1MDJGNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGN1xcdTAyRjhcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJGOFxcdTAyRjlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRjlcXHUwMkZCXFx0XFx4MDZcXHgwMlxceDAyXFx1MDJGQVxcdTAyRkNcIitcblx0XHRcIlxceDA3XFxyXFx4MDJcXHgwMlxcdTAyRkJcXHUwMkZBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkZCXFx1MDJGQ1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkZDXFx1MDJGRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGRFxcdTAyRkZcXHgwNT4gXFx0XFx1MDJGRVxcdTAyRUNcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJGRVxcdTAyRjVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRkZcXHUwMzAyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzAwXFx1MDJGRVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzAwXFx1MDMwMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwMT9cXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDJcIitcblx0XHRcIlxcdTAzMDBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDNcXHUwMzA0XFx0XFx4MDZcXHgwMlxceDAyXFx1MDMwNFxcdTAzMDVcXHgwNT4gXFx4MDJcIitcblx0XHRcIlxcdTAzMDVBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzA2XFx1MDMwOFxceDA3XFxcIlxceDAyXFx4MDJcXHUwMzA3XFx1MDMwOVxceDA3XFxmXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDMwOFxcdTAzMDdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDhcXHUwMzA5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzA5XFx1MDMwQlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzBBXFx1MDMwQ1xceDA3XFxyXFx4MDJcXHgwMlxcdTAzMEJcXHUwMzBBXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzMEJcXHUwMzBDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzBDXFx1MDMwRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwRFxcdTAzMEZcXHgwN1wiK1xuXHRcdFwiXFxmXFx4MDJcXHgwMlxcdTAzMEVcXHUwMzBEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzBFXFx1MDMwRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwRlwiK1xuXHRcdFwiXFx1MDMxMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxMFxcdTAzMTJcXHgwNT4gXFx4MDJcXHUwMzExXFx1MDMxMFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzExXFx1MDMxMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxMlxcdTAzMjBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMTNcXHUwMzE1XFx4MDdcIitcblx0XHRcIlxceDE2XFx4MDJcXHgwMlxcdTAzMTRcXHUwMzE2XFx4MDdcXGZcXHgwMlxceDAyXFx1MDMxNVxcdTAzMTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMTVcIitcblx0XHRcIlxcdTAzMTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMTZcXHUwMzE4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzE3XFx1MDMxOVxceDA3XFxyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDMxOFxcdTAzMTdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMThcXHUwMzE5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzE5XFx1MDMxQlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzFBXFx1MDMxQ1xceDA3XFxmXFx4MDJcXHgwMlxcdTAzMUJcXHUwMzFBXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzMUJcXHUwMzFDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzFDXFx1MDMxRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxRFxcdTAzMUZcXHgwNVwiK1xuXHRcdFwiPiBcXHgwMlxcdTAzMUVcXHUwMzEzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzFGXFx1MDMyMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyMFxcdTAzMUVcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyMFxcdTAzMjFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjFcXHUwMzI0XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzMjJcXHUwMzIwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzIzXFx1MDMyNVxceDA3XFxmXFx4MDJcXHgwMlxcdTAzMjRcXHUwMzIzXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzMjRcXHUwMzI1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzI1XFx1MDMyN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyNlwiK1xuXHRcdFwiXFx1MDMyOFxceDA3XFxyXFx4MDJcXHgwMlxcdTAzMjdcXHUwMzI2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzI3XFx1MDMyOFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzI4XFx1MDMyQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyOVxcdTAzMkJcXHgwN1xcZlxceDAyXFx4MDJcXHUwMzJBXFx1MDMyOVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzJBXFx1MDMyQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyQlxcdTAzMkNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDMyQ1xcdTAzMkRcXHgwNyNcXHgwMlxceDAyXFx1MDMyRENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMkVcXHUwMzMwXFx4MDdcXHgxRVxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzMkZcXHUwMzMxXFx4MDdcXHJcXHgwMlxceDAyXFx1MDMzMFxcdTAzMkZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMzBcXHUwMzMxXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMzFcXHUwMzMzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzMyXFx1MDMzNFxceDA3XFxmXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDMzM1xcdTAzMzJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMzNcXHUwMzM0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzM0XFx1MDMzNlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMzM1XFx1MDMzN1xceDA3XFxyXFx4MDJcXHgwMlxcdTAzMzZcXHUwMzM1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzM2XCIrXG5cdFx0XCJcXHUwMzM3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzM3XFx1MDMzOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzOFxcdTAzM0FcXHgwNUYkXFx4MDJcIitcblx0XHRcIlxcdTAzMzlcXHUwMzM4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzM5XFx1MDMzQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzQVxcdTAzM0NcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDMzQlxcdTAzM0RcXHgwN1xcclxceDAyXFx4MDJcXHUwMzNDXFx1MDMzQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzQ1wiK1xuXHRcdFwiXFx1MDMzRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzRFxcdTAzM0ZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzM0VcXHUwMzQwXFx4MDdcXGZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzNGXFx1MDMzRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzRlxcdTAzNDBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDBcXHUwMzQyXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDFcXHUwMzQzXFx4MDdcXHJcXHgwMlxceDAyXFx1MDM0MlxcdTAzNDFcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDM0MlxcdTAzNDNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDNcXHUwMzQ0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzQ0XFx1MDM0NVxceDA3XCIrXG5cdFx0XCJcXHgxRlxceDAyXFx4MDJcXHUwMzQ1RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0NlxcdTAzNTdcXHgwNUglXFx4MDJcXHUwMzQ3XFx1MDM0OVwiK1xuXHRcdFwiXFx4MDdcXHJcXHgwMlxceDAyXFx1MDM0OFxcdTAzNDdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDhcXHUwMzQ5XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzNDlcXHUwMzRBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzRBXFx1MDM0Q1xceDA3XFx4MTZcXHgwMlxceDAyXFx1MDM0QlxcdTAzNERcXHgwN1wiK1xuXHRcdFwiXFxyXFx4MDJcXHgwMlxcdTAzNENcXHUwMzRCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzRDXFx1MDM0RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0RFwiK1xuXHRcdFwiXFx1MDM0RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0RVxcdTAzNTBcXHgwN1xcZlxceDAyXFx4MDJcXHUwMzRGXFx1MDM0RVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzRGXFx1MDM1MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM1MFxcdTAzNTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNTFcXHUwMzUzXCIrXG5cdFx0XCJcXHgwN1xcclxceDAyXFx4MDJcXHUwMzUyXFx1MDM1MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM1MlxcdTAzNTNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDM1M1xcdTAzNTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNTRcXHUwMzU2XFx4MDVIJVxceDAyXFx1MDM1NVxcdTAzNDhcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDM1NlxcdTAzNTlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNTdcXHUwMzU1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzU3XCIrXG5cdFx0XCJcXHUwMzU4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzU4R1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM1OVxcdTAzNTdcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDM1QVxcdTAzNUNcXHgwNUxcXCdcXHgwMlxcdTAzNUJcXHUwMzVEXFx4MDdcXHJcXHgwMlxceDAyXFx1MDM1Q1xcdTAzNUJcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDM1Q1xcdTAzNURcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNURcXHUwMzVFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzVFXCIrXG5cdFx0XCJcXHUwMzYwXFx4MDdcXHgxNFxceDAyXFx4MDJcXHUwMzVGXFx1MDM2MVxceDA3XFxyXFx4MDJcXHgwMlxcdTAzNjBcXHUwMzVGXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzNjBcXHUwMzYxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzYxXFx1MDM2MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2MlxcdTAzNjNcIitcblx0XHRcIlxceDA1RCNcXHgwMlxcdTAzNjNcXHUwMzZGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzY0XFx1MDM2NlxceDA1TFxcJ1xceDAyXFx1MDM2NVxcdTAzNjdcIitcblx0XHRcIlxceDA3XFxyXFx4MDJcXHgwMlxcdTAzNjZcXHUwMzY1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzY2XFx1MDM2N1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzY3XFx1MDM2OFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2OFxcdTAzNkFcXHgwN1xceDE0XFx4MDJcXHgwMlxcdTAzNjlcXHUwMzZCXFx4MDdcIitcblx0XHRcIlxcclxceDAyXFx4MDJcXHUwMzZBXFx1MDM2OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2QVxcdTAzNkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNkJcIitcblx0XHRcIlxcdTAzNkNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNkNcXHUwMzZEXFx4MDVMXFwnXFx4MDJcXHUwMzZEXFx1MDM2RlxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzZFXFx1MDM1QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2RVxcdTAzNjRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNkZJXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzNzBcXHUwMzcyXFx4MDcgXFx4MDJcXHgwMlxcdTAzNzFcXHUwMzczXFx4MDdcXHJcXHgwMlxceDAyXFx1MDM3MlwiK1xuXHRcdFwiXFx1MDM3MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3MlxcdTAzNzNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNzNcXHUwMzc1XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzNzRcXHUwMzc2XFx4MDdcXGZcXHgwMlxceDAyXFx1MDM3NVxcdTAzNzRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNzVcXHUwMzc2XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNzZcXHUwMzc4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzc3XFx1MDM3OVxceDA3XFxyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDM3OFxcdTAzNzdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNzhcXHUwMzc5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzc5XFx1MDM3QlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMzdBXFx1MDM3Q1xceDA1XFx4MUVcXHgxMFxceDAyXFx1MDM3QlxcdTAzN0FcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzN0JcIitcblx0XHRcIlxcdTAzN0NcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzN0NcXHUwMzdFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzdEXFx1MDM3RlxceDA3XFxyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDM3RVxcdTAzN0RcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzN0VcXHUwMzdGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzdGXFx1MDM4MVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzgwXFx1MDM4MlxceDA3XFxmXFx4MDJcXHgwMlxcdTAzODFcXHUwMzgwXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzODFcXHUwMzgyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzgyXFx1MDM4NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4M1xcdTAzODVcXHgwN1wiK1xuXHRcdFwiXFxyXFx4MDJcXHgwMlxcdTAzODRcXHUwMzgzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzg0XFx1MDM4NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4NVwiK1xuXHRcdFwiXFx1MDM4NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4NlxcdTAzODhcXHgwNyFcXHgwMlxceDAyXFx1MDM4N1xcdTAzODlcXHgwN1xcclxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzODhcXHUwMzg3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzg4XFx1MDM4OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4OVxcdTAzOEJcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4QVxcdTAzOENcXHgwN1xcZlxceDAyXFx4MDJcXHUwMzhCXFx1MDM4QVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzhCXFx1MDM4Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4Q1xcdTAzOEVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOERcXHUwMzhGXFx4MDdcIitcblx0XHRcIlxcclxceDAyXFx4MDJcXHUwMzhFXFx1MDM4RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4RVxcdTAzOEZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOEZcIitcblx0XHRcIlxcdTAzOTBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOTBcXHUwMzkyXFx4MDdcXHgxQlxceDAyXFx4MDJcXHUwMzkxXFx1MDM5M1xceDA3XFxyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDM5MlxcdTAzOTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOTJcXHUwMzkzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzkzXFx1MDM5NVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzk0XFx1MDM5NlxceDA3XFxmXFx4MDJcXHgwMlxcdTAzOTVcXHUwMzk0XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzOTVcXHUwMzk2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzk2XFx1MDM5OFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5N1xcdTAzOTlcXHgwN1wiK1xuXHRcdFwiXFxyXFx4MDJcXHgwMlxcdTAzOThcXHUwMzk3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzk4XFx1MDM5OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5OVwiK1xuXHRcdFwiXFx1MDM5QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5QVxcdTAzOUNcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAzOUJcXHUwMzlEXFx4MDdcXHgxOFwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzOUNcXHUwMzlCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzlDXFx1MDM5RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5RFwiK1xuXHRcdFwiXFx1MDNCN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5RVxcdTAzQTBcXHgwNSBcXHgxMVxceDAyXFx1MDM5RlxcdTAzQTFcXHgwN1xcclxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzQTBcXHUwMzlGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0EwXFx1MDNBMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBMVxcdTAzQTNcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBMlxcdTAzQTRcXHgwN1xcZlxceDAyXFx4MDJcXHUwM0EzXFx1MDNBMlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwM0EzXFx1MDNBNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBNFxcdTAzQTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQTVcXHUwM0E3XFx4MDdcIitcblx0XHRcIlxcclxceDAyXFx4MDJcXHUwM0E2XFx1MDNBNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBNlxcdTAzQTdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQTdcIitcblx0XHRcIlxcdTAzQThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQThcXHUwM0FBXFx4MDdcXHgxQlxceDAyXFx4MDJcXHUwM0E5XFx1MDNBQlxceDA3XFxyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDNBQVxcdTAzQTlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQUFcXHUwM0FCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0FCXFx1MDNBRFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0FDXFx1MDNBRVxceDA3XFxmXFx4MDJcXHgwMlxcdTAzQURcXHUwM0FDXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzQURcXHUwM0FFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0FFXFx1MDNCMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBRlxcdTAzQjFcXHgwN1wiK1xuXHRcdFwiXFxyXFx4MDJcXHgwMlxcdTAzQjBcXHUwM0FGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0IwXFx1MDNCMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNCMVwiK1xuXHRcdFwiXFx1MDNCMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNCMlxcdTAzQjRcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAzQjNcXHUwM0I1XFx4MDdcXHgxOFwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzQjRcXHUwM0IzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0I0XFx1MDNCNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNCNVwiK1xuXHRcdFwiXFx1MDNCN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNCNlxcdTAzNzBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQjZcXHUwMzlFXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzQjdLXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0I4XFx1MDNCOVxcdFxceDA3XFx4MDJcXHgwMlxcdTAzQjlNXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzQkFcXHUwM0JDXFx4MDcgXFx4MDJcXHgwMlxcdTAzQkJcXHUwM0JEXFx4MDdcXHJcXHgwMlxceDAyXFx1MDNCQ1xcdTAzQkJcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNCQ1xcdTAzQkRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQkRcXHUwM0JFXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzQkVcXHUwM0MwXFx4MDU+IFxceDAyXFx1MDNCRlxcdTAzQzFcXHgwN1xcclxceDAyXFx4MDJcXHUwM0MwXFx1MDNCRlxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwM0MwXFx1MDNDMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNDMVxcdTAzQzJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQzJcXHUwM0MzXCIrXG5cdFx0XCJcXHgwNyFcXHgwMlxceDAyXFx1MDNDM09cXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQzRcXHUwM0M1XFx4MDVSKlxceDAyXFx1MDNDNVFcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDNDNlxcdTAzQ0FcXHgwNVQrXFx4MDJcXHUwM0M3XFx1MDNDOVxceDA1WC1cXHgwMlxcdTAzQzhcXHUwM0M3XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzQzlcXHUwM0NDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0NBXFx1MDNDOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNDQVwiK1xuXHRcdFwiXFx1MDNDQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNDQlxcdTAzRDVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQ0NcXHUwM0NBXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzQ0RcXHUwM0QxXFx4MDVcXFxcL1xceDAyXFx1MDNDRVxcdTAzRDBcXHgwNVgtXFx4MDJcXHUwM0NGXFx1MDNDRVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwM0QwXFx1MDNEM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNEMVxcdTAzQ0ZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRDFcIitcblx0XHRcIlxcdTAzRDJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRDJcXHUwM0Q1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0QzXFx1MDNEMVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwM0Q0XFx1MDNDNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNENFxcdTAzQ0RcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRDVcIitcblx0XHRcIlNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRDZcXHUwM0Q4XFx4MDdcXHJcXHgwMlxceDAyXFx1MDNEN1xcdTAzRDZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDNEN1xcdTAzRDhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRDhcXHUwM0RBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0Q5XFx1MDNEQlxceDA1XCIrXG5cdFx0XCJWLFxceDAyXFx1MDNEQVxcdTAzRDlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzREJcXHUwM0RDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0RDXFx1MDNEQVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0RDXFx1MDNERFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNERFxcdTAzRTNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDNERVxcdTAzRTJcXHgwNVYsXFx4MDJcXHUwM0RGXFx1MDNFMlxceDA3XFxyXFx4MDJcXHgwMlxcdTAzRTBcXHUwM0UyXFx4MDdcXHgwRlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzRTFcXHUwM0RFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0UxXFx1MDNERlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNFMVxcdTAzRTBcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNFMlxcdTAzRTVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRTNcXHUwM0UxXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzRTNcXHUwM0U0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0U0VVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNFNVxcdTAzRTNcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDNFNlxcdTAzRjBcXHgwN1xceDBFXFx4MDJcXHgwMlxcdTAzRTdcXHUwM0YwXFx4MDdcXHZcXHgwMlxceDAyXFx1MDNFOFxcdTAzRjBcIitcblx0XHRcIlxceDA3XFx4MTNcXHgwMlxceDAyXFx1MDNFOVxcdTAzRjBcXHgwN1xceDFFXFx4MDJcXHgwMlxcdTAzRUFcXHUwM0YwXFx4MDdcXHgxRlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzRUJcXHUwM0YwXFx4MDdcXHgxNFxceDAyXFx4MDJcXHUwM0VDXFx1MDNGMFxceDA3XFx4MTFcXHgwMlxceDAyXFx1MDNFRFxcdTAzRjBcXHgwN1wiK1xuXHRcdFwiXFx4MTVcXHgwMlxceDAyXFx1MDNFRVxcdTAzRjBcXHgwNUxcXCdcXHgwMlxcdTAzRUZcXHUwM0U2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0VGXCIrXG5cdFx0XCJcXHUwM0U3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0VGXFx1MDNFOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNFRlxcdTAzRTlcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDNFRlxcdTAzRUFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRUZcXHUwM0VCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0VGXCIrXG5cdFx0XCJcXHUwM0VDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0VGXFx1MDNFRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNFRlxcdTAzRUVcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDNGMFdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRjFcXHUwM0Y0XFx4MDVcXFxcL1xceDAyXFx1MDNGMlxcdTAzRjRcXHgwNVwiK1xuXHRcdFwiWi5cXHgwMlxcdTAzRjNcXHUwM0YxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0YzXFx1MDNGMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNGNFlcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNGNVxcdTAzRjlcXHgwNVYsXFx4MDJcXHUwM0Y2XFx1MDNGOVxceDA3XFxyXFx4MDJcXHgwMlxcdTAzRjdcIitcblx0XHRcIlxcdTAzRjlcXHgwN1xceDBGXFx4MDJcXHgwMlxcdTAzRjhcXHUwM0Y1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0Y4XFx1MDNGNlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwM0Y4XFx1MDNGN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNGOVxcdTAzRkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRkFcIitcblx0XHRcIlxcdTAzRjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRkFcXHUwM0ZCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0ZCW1xceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwM0ZDXFx1MDNGRFxceDA3XFx4MURcXHgwMlxceDAyXFx1MDNGRFxcdTAzRkVcXHgwNV4wXFx4MDJcXHUwM0ZFXFx1MDQwMFxceDA3XCIrXG5cdFx0XCJcXHJcXHgwMlxceDAyXFx1MDNGRlxcdTA0MDFcXHgwNWAxXFx4MDJcXHUwNDAwXFx1MDNGRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDQwMFxcdTA0MDFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDQwMVxcdTA0MDJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTA0MDJcXHUwNDAzXFx4MDdcXHgxRlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTA0MDNdXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwNDA0XFx1MDQwNVxceDA1XFx4MTZcXGZcXHgwMlxcdTA0MDVfXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTA0MDZcXHUwNDA4XFx4MDVkM1xceDAyXFx1MDQwN1xcdTA0MDZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTA0MDhcXHUwNDA5XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTA0MDlcXHUwNDA3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwNDA5XFx1MDQwQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDQwQVwiK1xuXHRcdFwiYVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDQwQlxcdTA0MEZcXHgwN1xceDFFXFx4MDJcXHgwMlxcdTA0MENcXHUwNDBFXFx4MDVkM1xceDAyXFx1MDQwRFwiK1xuXHRcdFwiXFx1MDQwQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDQwRVxcdTA0MTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTA0MEZcXHUwNDBEXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTA0MEZcXHUwNDEwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwNDEwXFx1MDQxMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDQxMVwiK1xuXHRcdFwiXFx1MDQwRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDQxMlxcdTA0MTNcXHgwN1xceDFGXFx4MDJcXHgwMlxcdTA0MTNjXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTA0MTRcXHUwNDFFXFx4MDViMlxceDAyXFx1MDQxNVxcdTA0MUFcXHgwNWY0XFx4MDJcXHUwNDE2XFx1MDQxN1xceDA3XFxmXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDQxN1xcdTA0MTlcXHgwNWY0XFx4MDJcXHUwNDE4XFx1MDQxNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDQxOVxcdTA0MUNcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDQxQVxcdTA0MThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTA0MUFcXHUwNDFCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwNDFCXCIrXG5cdFx0XCJcXHUwNDFFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwNDFDXFx1MDQxQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDQxRFxcdTA0MTRcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDQxRFxcdTA0MTVcXHgwM1xceDAyXCI7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9zZXJpYWxpemVkQVROU2VnbWVudDI6IHN0cmluZyA9XG5cdFx0XCJcXHgwMlxceDAyXFx1MDQxRWVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTA0MUZcXHUwNDIwXFx0XFxiXFx4MDJcXHgwMlxcdTA0MjBnXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxceEQ2a290XFx4ODBcXHg4N1xceDk1XFx4OTlcXHhBMlxceEFFXFx4QjNcXHhCRFxceEMxXFx4QzlcXHhDRFxceEQxXFx4RDVcXHhERFwiK1xuXHRcdFwiXFx4RTFcXHhFNlxceEYwXFx4RjRcXHhGOFxceEZDXFx1MDEwMVxcdTAxMDlcXHUwMTBEXFx1MDExM1xcdTAxMTdcXHUwMTFDXFx1MDEyMlxcdTAxMkFcIitcblx0XHRcIlxcdTAxMzFcXHUwMTM4XFx1MDEzQVxcdTAxNDBcXHUwMTRGXFx1MDE1M1xcdTAxNTZcXHUwMTU5XFx1MDE1RFxcdTAxNjBcXHUwMTYzXFx1MDE2OFwiK1xuXHRcdFwiXFx1MDE2RFxcdTAxNzBcXHUwMTczXFx1MDE3NlxcdTAxNzlcXHUwMTdDXFx1MDE3RlxcdTAxODNcXHUwMTg2XFx1MDE4OVxcdTAxOERcXHUwMTkwXCIrXG5cdFx0XCJcXHUwMTkzXFx1MDE5N1xcdTAxOUJcXHUwMTlFXFx1MDFBMVxcdTAxQTVcXHUwMUE4XFx1MDFBQlxcdTAxQUZcXHUwMUIxXFx1MDFCNlxcdTAxQjlcIitcblx0XHRcIlxcdTAxQkVcXHUwMUMzXFx1MDFDN1xcdTAxQ0FcXHUwMUNEXFx1MDFEMVxcdTAxRDVcXHUwMURCXFx1MDFERlxcdTAxRTRcXHUwMUU5XFx1MDFFRFwiK1xuXHRcdFwiXFx1MDFGMVxcdTAxRjVcXHUwMUZBXFx1MDFGRlxcdTAyMDNcXHUwMjA3XFx1MDIwQlxcdTAyMTBcXHUwMjE1XFx1MDIxOVxcdTAyMURcXHUwMjIxXCIrXG5cdFx0XCJcXHUwMjI2XFx1MDIyOVxcdTAyMkVcXHUwMjMyXFx1MDIzOFxcdTAyM0NcXHUwMjQ1XFx1MDI0OFxcdTAyNEJcXHUwMjRFXFx1MDI1MVxcdTAyNTRcIitcblx0XHRcIlxcdTAyNTdcXHUwMjVEXFx1MDI2MVxcdTAyNjRcXHUwMjY3XFx1MDI2Q1xcdTAyNzFcXHUwMjc0XFx1MDI3OFxcdTAyN0VcXHUwMjgxXFx1MDI4NFwiK1xuXHRcdFwiXFx1MDI4N1xcdTAyOEJcXHUwMjhFXFx1MDI5MVxcdTAyOTZcXHUwMjlBXFx1MDI5RFxcdTAyQTBcXHUwMkE4XFx1MDJBQVxcdTAyQjNcXHUwMkI3XCIrXG5cdFx0XCJcXHUwMkJBXFx1MDJCRFxcdTAyQzFcXHUwMkM0XFx1MDJDN1xcdTAyQ0NcXHUwMkQ0XFx1MDJEQlxcdTAyRERcXHUwMkUxXFx1MDJFQVxcdTAyRUVcIitcblx0XHRcIlxcdTAyRjJcXHUwMkY3XFx1MDJGQlxcdTAyRkVcXHUwMzAwXFx1MDMwOFxcdTAzMEJcXHUwMzBFXFx1MDMxMVxcdTAzMTVcXHUwMzE4XFx1MDMxQlwiK1xuXHRcdFwiXFx1MDMyMFxcdTAzMjRcXHUwMzI3XFx1MDMyQVxcdTAzMzBcXHUwMzMzXFx1MDMzNlxcdTAzMzlcXHUwMzNDXFx1MDMzRlxcdTAzNDJcXHUwMzQ4XCIrXG5cdFx0XCJcXHUwMzRDXFx1MDM0RlxcdTAzNTJcXHUwMzU3XFx1MDM1Q1xcdTAzNjBcXHUwMzY2XFx1MDM2QVxcdTAzNkVcXHUwMzcyXFx1MDM3NVxcdTAzNzhcIitcblx0XHRcIlxcdTAzN0JcXHUwMzdFXFx1MDM4MVxcdTAzODRcXHUwMzg4XFx1MDM4QlxcdTAzOEVcXHUwMzkyXFx1MDM5NVxcdTAzOThcXHUwMzlDXFx1MDNBMFwiK1xuXHRcdFwiXFx1MDNBM1xcdTAzQTZcXHUwM0FBXFx1MDNBRFxcdTAzQjBcXHUwM0I0XFx1MDNCNlxcdTAzQkNcXHUwM0MwXFx1MDNDQVxcdTAzRDFcXHUwM0Q0XCIrXG5cdFx0XCJcXHUwM0Q3XFx1MDNEQ1xcdTAzRTFcXHUwM0UzXFx1MDNFRlxcdTAzRjNcXHUwM0Y4XFx1MDNGQVxcdTA0MDBcXHUwNDA5XFx1MDQwRlxcdTA0MUFcIitcblx0XHRcIlxcdTA0MURcIjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBfc2VyaWFsaXplZEFUTjogc3RyaW5nID0gVXRpbHMuam9pbihcblx0XHRbXG5cdFx0XHRYRG9jU3ludGF4UGFyc2VyLl9zZXJpYWxpemVkQVROU2VnbWVudDAsXG5cdFx0XHRYRG9jU3ludGF4UGFyc2VyLl9zZXJpYWxpemVkQVROU2VnbWVudDEsXG5cdFx0XHRYRG9jU3ludGF4UGFyc2VyLl9zZXJpYWxpemVkQVROU2VnbWVudDJcblx0XHRdLFxuXHRcdFwiXCJcblx0KTtcblx0cHVibGljIHN0YXRpYyBfX0FUTjogQVROO1xuXHRwdWJsaWMgc3RhdGljIGdldCBfQVROKCk6IEFUTiB7XG5cdFx0aWYgKCFYRG9jU3ludGF4UGFyc2VyLl9fQVROKSB7XG5cdFx0XHRYRG9jU3ludGF4UGFyc2VyLl9fQVROID0gbmV3IEFUTkRlc2VyaWFsaXplcigpLmRlc2VyaWFsaXplKFV0aWxzLnRvQ2hhckFycmF5KFhEb2NTeW50YXhQYXJzZXIuX3NlcmlhbGl6ZWRBVE4pKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gWERvY1N5bnRheFBhcnNlci5fX0FUTjtcblx0fVxuXG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudGF0aW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEVPRigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkVPRiwgMCk7IH1cblx0cHVibGljIGJvZHkoKTogQm9keUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEJvZHlDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kb2N1bWVudGF0aW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJEb2N1bWVudGF0aW9uKSBsaXN0ZW5lci5lbnRlckRvY3VtZW50YXRpb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXREb2N1bWVudGF0aW9uKSBsaXN0ZW5lci5leGl0RG9jdW1lbnRhdGlvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RG9jdW1lbnRhdGlvbikgcmV0dXJuIHZpc2l0b3IudmlzaXREb2N1bWVudGF0aW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBCb2R5Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGFubm90YXRpb25zKCk6IEFubm90YXRpb25zQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgQW5ub3RhdGlvbnNDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgd2hpdGVzcGFjZSgpOiBXaGl0ZXNwYWNlQ29udGV4dFtdO1xuXHRwdWJsaWMgd2hpdGVzcGFjZShpOiBudW1iZXIpOiBXaGl0ZXNwYWNlQ29udGV4dDtcblx0cHVibGljIHdoaXRlc3BhY2UoaT86IG51bWJlcik6IFdoaXRlc3BhY2VDb250ZXh0IHwgV2hpdGVzcGFjZUNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKFdoaXRlc3BhY2VDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgV2hpdGVzcGFjZUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYm9keTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyQm9keSkgbGlzdGVuZXIuZW50ZXJCb2R5KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0Qm9keSkgbGlzdGVuZXIuZXhpdEJvZHkodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEJvZHkpIHJldHVybiB2aXNpdG9yLnZpc2l0Qm9keSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgV2hpdGVzcGFjZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCAwKTsgfVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV93aGl0ZXNwYWNlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJXaGl0ZXNwYWNlKSBsaXN0ZW5lci5lbnRlcldoaXRlc3BhY2UodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRXaGl0ZXNwYWNlKSBsaXN0ZW5lci5leGl0V2hpdGVzcGFjZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0V2hpdGVzcGFjZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRXaGl0ZXNwYWNlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uc0NvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyB0YWcoKTogVGFnQ29udGV4dFtdO1xuXHRwdWJsaWMgdGFnKGk6IG51bWJlcik6IFRhZ0NvbnRleHQ7XG5cdHB1YmxpYyB0YWcoaT86IG51bWJlcik6IFRhZ0NvbnRleHQgfCBUYWdDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhUYWdDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgVGFnQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9hbm5vdGF0aW9uczsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyQW5ub3RhdGlvbnMpIGxpc3RlbmVyLmVudGVyQW5ub3RhdGlvbnModGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRBbm5vdGF0aW9ucykgbGlzdGVuZXIuZXhpdEFubm90YXRpb25zKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRBbm5vdGF0aW9ucykgcmV0dXJuIHZpc2l0b3IudmlzaXRBbm5vdGF0aW9ucyh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVGFnQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHRhZ05hbWUoKTogVGFnTmFtZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIFRhZ05hbWVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBNSU5VUygpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk1JTlVTLCAwKTsgfVxuXHRwdWJsaWMgZGVzY3JpcHRpb24oKTogRGVzY3JpcHRpb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBEZXNjcmlwdGlvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgMCk7IH1cblx0cHVibGljIHRhZ0lkZW50aWZpZXIoKTogVGFnSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFRhZ0lkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgRVFVQUwoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5FUVVBTCwgMCk7IH1cblx0cHVibGljIGV4cHJlc3Npb24oKTogRXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgQ09MT04oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT0xPTiwgMCk7IH1cblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFR5cGVDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdGFnOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJUYWcpIGxpc3RlbmVyLmVudGVyVGFnKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0VGFnKSBsaXN0ZW5lci5leGl0VGFnKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRUYWcpIHJldHVybiB2aXNpdG9yLnZpc2l0VGFnKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBUYWdOYW1lQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEFUKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQVQsIDApOyB9XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3RhZ05hbWU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclRhZ05hbWUpIGxpc3RlbmVyLmVudGVyVGFnTmFtZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFRhZ05hbWUpIGxpc3RlbmVyLmV4aXRUYWdOYW1lKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRUYWdOYW1lKSByZXR1cm4gdmlzaXRvci52aXNpdFRhZ05hbWUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFRhZ0lkZW50aWZpZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgcHJvcGVydHlUYWdJZGVudGlmaWVyKCk6IFByb3BlcnR5VGFnSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFByb3BlcnR5VGFnSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBvcHRpb25hbFRhZ0lkZW50aWZpZXIoKTogT3B0aW9uYWxUYWdJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT3B0aW9uYWxUYWdJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdGFnSWRlbnRpZmllcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVGFnSWRlbnRpZmllcikgbGlzdGVuZXIuZW50ZXJUYWdJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0VGFnSWRlbnRpZmllcikgbGlzdGVuZXIuZXhpdFRhZ0lkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFRhZ0lkZW50aWZpZXIpIHJldHVybiB2aXNpdG9yLnZpc2l0VGFnSWRlbnRpZmllcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlUYWdJZGVudGlmaWVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIG9wdGlvbmFsVGFnSWRlbnRpZmllcigpOiBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgUEVSSU9EKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgUEVSSU9EKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFBFUklPRChpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlBFUklPRCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9ELCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIG9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKCk6IE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dFtdO1xuXHRwdWJsaWMgb3B0aW9uYWxUYWdPcklkZW50aWZpZXIoaTogbnVtYmVyKTogT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0O1xuXHRwdWJsaWMgb3B0aW9uYWxUYWdPcklkZW50aWZpZXIoaT86IG51bWJlcik6IE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dCB8IE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfcHJvcGVydHlUYWdJZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJQcm9wZXJ0eVRhZ0lkZW50aWZpZXIpIGxpc3RlbmVyLmVudGVyUHJvcGVydHlUYWdJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0UHJvcGVydHlUYWdJZGVudGlmaWVyKSBsaXN0ZW5lci5leGl0UHJvcGVydHlUYWdJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRQcm9wZXJ0eVRhZ0lkZW50aWZpZXIpIHJldHVybiB2aXNpdG9yLnZpc2l0UHJvcGVydHlUYWdJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgb3B0aW9uYWxJZGVudGlmaWVyKCk6IE9wdGlvbmFsSWRlbnRpZmllckNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vcHRpb25hbFRhZ0lkZW50aWZpZXI7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9wdGlvbmFsVGFnSWRlbnRpZmllcikgbGlzdGVuZXIuZW50ZXJPcHRpb25hbFRhZ0lkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPcHRpb25hbFRhZ0lkZW50aWZpZXIpIGxpc3RlbmVyLmV4aXRPcHRpb25hbFRhZ0lkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9wdGlvbmFsVGFnSWRlbnRpZmllcikgcmV0dXJuIHZpc2l0b3IudmlzaXRPcHRpb25hbFRhZ0lkZW50aWZpZXIodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIG9wdGlvbmFsVGFnSWRlbnRpZmllcigpOiBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vcHRpb25hbFRhZ09ySWRlbnRpZmllcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT3B0aW9uYWxUYWdPcklkZW50aWZpZXIpIGxpc3RlbmVyLmVudGVyT3B0aW9uYWxUYWdPcklkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPcHRpb25hbFRhZ09ySWRlbnRpZmllcikgbGlzdGVuZXIuZXhpdE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPcHRpb25hbFRhZ09ySWRlbnRpZmllcikgcmV0dXJuIHZpc2l0b3IudmlzaXRPcHRpb25hbFRhZ09ySWRlbnRpZmllcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllckNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBJRCgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLklELCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfaWRlbnRpZmllcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVySWRlbnRpZmllcikgbGlzdGVuZXIuZW50ZXJJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0SWRlbnRpZmllcikgbGlzdGVuZXIuZXhpdElkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdElkZW50aWZpZXIpIHJldHVybiB2aXNpdG9yLnZpc2l0SWRlbnRpZmllcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgUVVFU1RJT04oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5RVUVTVElPTiwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29wdGlvbmFsSWRlbnRpZmllcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT3B0aW9uYWxJZGVudGlmaWVyKSBsaXN0ZW5lci5lbnRlck9wdGlvbmFsSWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9wdGlvbmFsSWRlbnRpZmllcikgbGlzdGVuZXIuZXhpdE9wdGlvbmFsSWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T3B0aW9uYWxJZGVudGlmaWVyKSByZXR1cm4gdmlzaXRvci52aXNpdE9wdGlvbmFsSWRlbnRpZmllcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0W107XG5cdHB1YmxpYyB0eXBlKGk6IG51bWJlcik6IFR5cGVDb250ZXh0O1xuXHRwdWJsaWMgdHlwZShpPzogbnVtYmVyKTogVHlwZUNvbnRleHQgfCBUeXBlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoVHlwZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBUeXBlQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBQSVBFKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUElQRSwgMCk7IH1cblx0cHVibGljIEFNUCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkFNUCwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgbGFtYmRhVHlwZSgpOiBMYW1iZGFUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgTGFtYmRhVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyB0dXBsZVR5cGUoKTogVHVwbGVUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVHVwbGVUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHByaW1hcnlUeXBlKCk6IFByaW1hcnlUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUHJpbWFyeVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgcGFyZW50aGVzaXplZFR5cGUoKTogUGFyZW50aGVzaXplZFR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQYXJlbnRoZXNpemVkVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyB1bmFyeVR5cGUoKTogVW5hcnlUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVW5hcnlUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIG9iamVjdFR5cGUoKTogT2JqZWN0VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9iamVjdFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgYXJyYXlUeXBlKCk6IEFycmF5VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEFycmF5VHlwZUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90eXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJUeXBlKSBsaXN0ZW5lci5lbnRlclR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRUeXBlKSBsaXN0ZW5lci5leGl0VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBMYW1iZGFUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFBBUkVOX09QRU4oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgUEFSRU5fQ0xPU0UoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QQVJFTl9DTE9TRSwgMCk7IH1cblx0cHVibGljIEFSUk9XKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQVJST1csIDApOyB9XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UoKTogRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBRVUVTVElPTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlFVRVNUSU9OLCAwKTsgfVxuXHRwdWJsaWMgcGFyYW1ldGVyKCk6IFBhcmFtZXRlckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFBhcmFtZXRlckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9sYW1iZGFUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJMYW1iZGFUeXBlKSBsaXN0ZW5lci5lbnRlckxhbWJkYVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRMYW1iZGFUeXBlKSBsaXN0ZW5lci5leGl0TGFtYmRhVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0TGFtYmRhVHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRMYW1iZGFUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBwYXJhbWV0ZXIoKTogUGFyYW1ldGVyQ29udGV4dFtdO1xuXHRwdWJsaWMgcGFyYW1ldGVyKGk6IG51bWJlcik6IFBhcmFtZXRlckNvbnRleHQ7XG5cdHB1YmxpYyBwYXJhbWV0ZXIoaT86IG51bWJlcik6IFBhcmFtZXRlckNvbnRleHQgfCBQYXJhbWV0ZXJDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhQYXJhbWV0ZXJDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgUGFyYW1ldGVyQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT01NQSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIENPTU1BKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIENPTU1BKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTU1BLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2U7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKSBsaXN0ZW5lci5lbnRlckZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0Rm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UpIGxpc3RlbmVyLmV4aXRGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0Rm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UpIHJldHVybiB2aXNpdG9yLnZpc2l0Rm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIENPTE9OKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ09MT04sIDApOyB9XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfcGFyYW1ldGVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJQYXJhbWV0ZXIpIGxpc3RlbmVyLmVudGVyUGFyYW1ldGVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0UGFyYW1ldGVyKSBsaXN0ZW5lci5leGl0UGFyYW1ldGVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRQYXJhbWV0ZXIpIHJldHVybiB2aXNpdG9yLnZpc2l0UGFyYW1ldGVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBUdXBsZVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgTEVTU1RIQU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5MRVNTVEhBTiwgMCk7IH1cblx0cHVibGljIHR1cGxlVHlwZVNlcXVlbmNlKCk6IFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgVHVwbGVUeXBlU2VxdWVuY2VDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgR1JFQVRFUlRIQU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5HUkVBVEVSVEhBTiwgMCk7IH1cblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90dXBsZVR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclR1cGxlVHlwZSkgbGlzdGVuZXIuZW50ZXJUdXBsZVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRUdXBsZVR5cGUpIGxpc3RlbmVyLmV4aXRUdXBsZVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFR1cGxlVHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRUdXBsZVR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHByaW1hcnlUeXBlKCk6IFByaW1hcnlUeXBlQ29udGV4dFtdO1xuXHRwdWJsaWMgcHJpbWFyeVR5cGUoaTogbnVtYmVyKTogUHJpbWFyeVR5cGVDb250ZXh0O1xuXHRwdWJsaWMgcHJpbWFyeVR5cGUoaT86IG51bWJlcik6IFByaW1hcnlUeXBlQ29udGV4dCB8IFByaW1hcnlUeXBlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoUHJpbWFyeVR5cGVDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgUHJpbWFyeVR5cGVDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09NTUEoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBDT01NQShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBDT01NQShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT01NQSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyB0dXBsZVR5cGVTZXF1ZW5jZSgpOiBUdXBsZVR5cGVTZXF1ZW5jZUNvbnRleHRbXTtcblx0cHVibGljIHR1cGxlVHlwZVNlcXVlbmNlKGk6IG51bWJlcik6IFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dDtcblx0cHVibGljIHR1cGxlVHlwZVNlcXVlbmNlKGk/OiBudW1iZXIpOiBUdXBsZVR5cGVTZXF1ZW5jZUNvbnRleHQgfCBUdXBsZVR5cGVTZXF1ZW5jZUNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBFWFRFTkRTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuRVhURU5EUywgMCk7IH1cblx0cHVibGljIEFNUCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkFNUCwgMCk7IH1cblx0cHVibGljIFBJUEUoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QSVBFLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdHVwbGVUeXBlU2VxdWVuY2U7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclR1cGxlVHlwZVNlcXVlbmNlKSBsaXN0ZW5lci5lbnRlclR1cGxlVHlwZVNlcXVlbmNlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0VHVwbGVUeXBlU2VxdWVuY2UpIGxpc3RlbmVyLmV4aXRUdXBsZVR5cGVTZXF1ZW5jZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VHVwbGVUeXBlU2VxdWVuY2UpIHJldHVybiB2aXNpdG9yLnZpc2l0VHVwbGVUeXBlU2VxdWVuY2UodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFByaW1hcnlUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIG9wdGlvbmFsSWRlbnRpZmllcigpOiBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgcHJvcGVydHlJZGVudGlmaWVyKCk6IFByb3BlcnR5SWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFByb3BlcnR5SWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBpZGVudGlmaWVyT3JLZXl3b3JkKCk6IElkZW50aWZpZXJPcktleXdvcmRDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3ByaW1hcnlUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJQcmltYXJ5VHlwZSkgbGlzdGVuZXIuZW50ZXJQcmltYXJ5VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFByaW1hcnlUeXBlKSBsaXN0ZW5lci5leGl0UHJpbWFyeVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFByaW1hcnlUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdFByaW1hcnlUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMga2V5d29yZCgpOiBLZXl3b3JkQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgS2V5d29yZENvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pZGVudGlmaWVyT3JLZXl3b3JkOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJJZGVudGlmaWVyT3JLZXl3b3JkKSBsaXN0ZW5lci5lbnRlcklkZW50aWZpZXJPcktleXdvcmQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRJZGVudGlmaWVyT3JLZXl3b3JkKSBsaXN0ZW5lci5leGl0SWRlbnRpZmllck9yS2V5d29yZCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0SWRlbnRpZmllck9yS2V5d29yZCkgcmV0dXJuIHZpc2l0b3IudmlzaXRJZGVudGlmaWVyT3JLZXl3b3JkKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBLZXl3b3JkQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIE51bGxMaXRlcmFsKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWwsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9rZXl3b3JkOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJLZXl3b3JkKSBsaXN0ZW5lci5lbnRlcktleXdvcmQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRLZXl3b3JkKSBsaXN0ZW5lci5leGl0S2V5d29yZCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0S2V5d29yZCkgcmV0dXJuIHZpc2l0b3IudmlzaXRLZXl3b3JkKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBQYXJlbnRoZXNpemVkVHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBQQVJFTl9PUEVOKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTiwgMCk7IH1cblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgUEFSRU5fQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QQVJFTl9DTE9TRSwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfcGFyZW50aGVzaXplZFR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclBhcmVudGhlc2l6ZWRUeXBlKSBsaXN0ZW5lci5lbnRlclBhcmVudGhlc2l6ZWRUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0UGFyZW50aGVzaXplZFR5cGUpIGxpc3RlbmVyLmV4aXRQYXJlbnRoZXNpemVkVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0UGFyZW50aGVzaXplZFR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0UGFyZW50aGVzaXplZFR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFVuYXJ5VHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBwcmltYXJ5VHlwZSgpOiBQcmltYXJ5VHlwZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIFByaW1hcnlUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIEFNUCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkFNUCwgMCk7IH1cblx0cHVibGljIFNUQVIoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TVEFSLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdW5hcnlUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJVbmFyeVR5cGUpIGxpc3RlbmVyLmVudGVyVW5hcnlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0VW5hcnlUeXBlKSBsaXN0ZW5lci5leGl0VW5hcnlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRVbmFyeVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0VW5hcnlUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEJSQUNFX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgb2JqZWN0UGFpclNlcXVlbmNlVHlwZSgpOiBPYmplY3RQYWlyU2VxdWVuY2VUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT2JqZWN0UGFpclNlcXVlbmNlVHlwZUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPYmplY3RUeXBlKSBsaXN0ZW5lci5lbnRlck9iamVjdFR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPYmplY3RUeXBlKSBsaXN0ZW5lci5leGl0T2JqZWN0VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T2JqZWN0VHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRPYmplY3RUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQYWlyU2VxdWVuY2VUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIG9iamVjdFBhaXJUeXBlKCk6IE9iamVjdFBhaXJUeXBlQ29udGV4dFtdO1xuXHRwdWJsaWMgb2JqZWN0UGFpclR5cGUoaTogbnVtYmVyKTogT2JqZWN0UGFpclR5cGVDb250ZXh0O1xuXHRwdWJsaWMgb2JqZWN0UGFpclR5cGUoaT86IG51bWJlcik6IE9iamVjdFBhaXJUeXBlQ29udGV4dCB8IE9iamVjdFBhaXJUeXBlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoT2JqZWN0UGFpclR5cGVDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgT2JqZWN0UGFpclR5cGVDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09NTUEoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBDT01NQShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBDT01NQShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT01NQSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RQYWlyU2VxdWVuY2VUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyU2VxdWVuY2VUeXBlKSBsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJTZXF1ZW5jZVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPYmplY3RQYWlyU2VxdWVuY2VUeXBlKSBsaXN0ZW5lci5leGl0T2JqZWN0UGFpclNlcXVlbmNlVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T2JqZWN0UGFpclNlcXVlbmNlVHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRPYmplY3RQYWlyU2VxdWVuY2VUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQYWlyVHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0W107XG5cdHB1YmxpYyB0eXBlKGk6IG51bWJlcik6IFR5cGVDb250ZXh0O1xuXHRwdWJsaWMgdHlwZShpPzogbnVtYmVyKTogVHlwZUNvbnRleHQgfCBUeXBlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoVHlwZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBUeXBlQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT0xPTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTE9OLCAwKTsgfVxuXHRwdWJsaWMgUVVFU1RJT04oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5RVUVTVElPTiwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0UGFpclR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJUeXBlKSBsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T2JqZWN0UGFpclR5cGUpIGxpc3RlbmVyLmV4aXRPYmplY3RQYWlyVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T2JqZWN0UGFpclR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0T2JqZWN0UGFpclR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEFycmF5VHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBCUkFDS0VUX09QRU4oKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBCUkFDS0VUX09QRU4oaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQlJBQ0tFVF9PUEVOKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9PUEVOKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU4sIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQlJBQ0tFVF9DTE9TRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIEJSQUNLRVRfQ0xPU0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQlJBQ0tFVF9DTE9TRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfQ0xPU0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfQ0xPU0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0W107XG5cdHB1YmxpYyB0eXBlKGk6IG51bWJlcik6IFR5cGVDb250ZXh0O1xuXHRwdWJsaWMgdHlwZShpPzogbnVtYmVyKTogVHlwZUNvbnRleHQgfCBUeXBlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoVHlwZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBUeXBlQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT01NQSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIENPTU1BKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIENPTU1BKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTU1BLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIG5vdEFycmF5VHlwZSgpOiBOb3RBcnJheVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBOb3RBcnJheVR5cGVDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYXJyYXlUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJBcnJheVR5cGUpIGxpc3RlbmVyLmVudGVyQXJyYXlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0QXJyYXlUeXBlKSBsaXN0ZW5lci5leGl0QXJyYXlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRBcnJheVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0QXJyYXlUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBOb3RBcnJheVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgbm90QXJyYXlUeXBlKCk6IE5vdEFycmF5VHlwZUNvbnRleHRbXTtcblx0cHVibGljIG5vdEFycmF5VHlwZShpOiBudW1iZXIpOiBOb3RBcnJheVR5cGVDb250ZXh0O1xuXHRwdWJsaWMgbm90QXJyYXlUeXBlKGk/OiBudW1iZXIpOiBOb3RBcnJheVR5cGVDb250ZXh0IHwgTm90QXJyYXlUeXBlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoTm90QXJyYXlUeXBlQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIE5vdEFycmF5VHlwZUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgUElQRSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBJUEUsIDApOyB9XG5cdHB1YmxpYyBBTVAoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5BTVAsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIGxhbWJkYVR5cGUoKTogTGFtYmRhVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIExhbWJkYVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgdHVwbGVUeXBlKCk6IFR1cGxlVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFR1cGxlVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBwcmltYXJ5VHlwZSgpOiBQcmltYXJ5VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFByaW1hcnlUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHBhcmVudGhlc2l6ZWRUeXBlKCk6IFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUGFyZW50aGVzaXplZFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgdW5hcnlUeXBlKCk6IFVuYXJ5VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFVuYXJ5VHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBvYmplY3RUeXBlKCk6IE9iamVjdFR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPYmplY3RUeXBlQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX25vdEFycmF5VHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyTm90QXJyYXlUeXBlKSBsaXN0ZW5lci5lbnRlck5vdEFycmF5VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE5vdEFycmF5VHlwZSkgbGlzdGVuZXIuZXhpdE5vdEFycmF5VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0Tm90QXJyYXlUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdE5vdEFycmF5VHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlJZGVudGlmaWVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgUEVSSU9EKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgUEVSSU9EKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFBFUklPRChpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlBFUklPRCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9ELCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIG9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcigpOiBPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXJDb250ZXh0W107XG5cdHB1YmxpYyBvcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIoaTogbnVtYmVyKTogT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyQ29udGV4dDtcblx0cHVibGljIG9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcihpPzogbnVtYmVyKTogT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyQ29udGV4dCB8IE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllckNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllckNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXJDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIG9wdGlvbmFsSWRlbnRpZmllcigpOiBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfcHJvcGVydHlJZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJQcm9wZXJ0eUlkZW50aWZpZXIpIGxpc3RlbmVyLmVudGVyUHJvcGVydHlJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0UHJvcGVydHlJZGVudGlmaWVyKSBsaXN0ZW5lci5leGl0UHJvcGVydHlJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRQcm9wZXJ0eUlkZW50aWZpZXIpIHJldHVybiB2aXNpdG9yLnZpc2l0UHJvcGVydHlJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBvcHRpb25hbElkZW50aWZpZXIoKTogT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKSBsaXN0ZW5lci5lbnRlck9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcikgbGlzdGVuZXIuZXhpdE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKSByZXR1cm4gdmlzaXRvci52aXNpdE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyB1bmFyeUV4cHJlc3Npb24oKTogVW5hcnlFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVW5hcnlFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGV4cHJlc3Npb24oKTogRXhwcmVzc2lvbkNvbnRleHRbXTtcblx0cHVibGljIGV4cHJlc3Npb24oaTogbnVtYmVyKTogRXhwcmVzc2lvbkNvbnRleHQ7XG5cdHB1YmxpYyBleHByZXNzaW9uKGk/OiBudW1iZXIpOiBFeHByZXNzaW9uQ29udGV4dCB8IEV4cHJlc3Npb25Db250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIEV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNUQVIoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TVEFSLCAwKTsgfVxuXHRwdWJsaWMgRk9SV0FSRF9TTEFTSCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0gsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIFBMVVMoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QTFVTLCAwKTsgfVxuXHRwdWJsaWMgTUlOVVMoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5NSU5VUywgMCk7IH1cblx0cHVibGljIGFycmF5RXhwcmVzc2lvbigpOiBBcnJheUV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBBcnJheUV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgb2JqZWN0RXhwcmVzc2lvbigpOiBPYmplY3RFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBsYW1iZGFFeHByZXNzaW9uKCk6IExhbWJkYUV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBMYW1iZGFFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGxpdGVyYWxFeHByZXNzaW9uKCk6IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgcGFyZW50aGVzaXplZEV4cHJlc3Npb24oKTogUGFyZW50aGVzaXplZEV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9leHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlckV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0RXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBVbmFyeUV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBQTFVTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUExVUywgMCk7IH1cblx0cHVibGljIE1JTlVTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTUlOVVMsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV91bmFyeUV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclVuYXJ5RXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJVbmFyeUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRVbmFyeUV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRVbmFyeUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFVuYXJ5RXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRVbmFyeUV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEFycmF5RXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBCUkFDS0VUX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU4sIDApOyB9XG5cdHB1YmxpYyBCUkFDS0VUX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9DTE9TRSwgMCk7IH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dFtdO1xuXHRwdWJsaWMgZXhwcmVzc2lvbihpOiBudW1iZXIpOiBFeHByZXNzaW9uQ29udGV4dDtcblx0cHVibGljIGV4cHJlc3Npb24oaT86IG51bWJlcik6IEV4cHJlc3Npb25Db250ZXh0IHwgRXhwcmVzc2lvbkNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKEV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09NTUEoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBDT01NQShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBDT01NQShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT01NQSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9hcnJheUV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckFycmF5RXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJBcnJheUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRBcnJheUV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRBcnJheUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEFycmF5RXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRBcnJheUV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9iamVjdEV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgQlJBQ0VfT1BFTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4sIDApOyB9XG5cdHB1YmxpYyBCUkFDRV9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBvYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uKCk6IE9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdEV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9iamVjdEV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyT2JqZWN0RXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9iamVjdEV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRPYmplY3RFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPYmplY3RFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdE9iamVjdEV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgb2JqZWN0UGFpckV4cHJlc3Npb24oKTogT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0W107XG5cdHB1YmxpYyBvYmplY3RQYWlyRXhwcmVzc2lvbihpOiBudW1iZXIpOiBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQ7XG5cdHB1YmxpYyBvYmplY3RQYWlyRXhwcmVzc2lvbihpPzogbnVtYmVyKTogT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0IHwgT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09NTUEoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBDT01NQShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBDT01NQShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT01NQSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyT2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdE9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGxpdGVyYWxFeHByZXNzaW9uKCk6IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dFtdO1xuXHRwdWJsaWMgbGl0ZXJhbEV4cHJlc3Npb24oaTogbnVtYmVyKTogTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0O1xuXHRwdWJsaWMgbGl0ZXJhbEV4cHJlc3Npb24oaT86IG51bWJlcik6IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCB8IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTE9OKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ09MT04sIDApOyB9XG5cdHB1YmxpYyBvYmplY3RFeHByZXNzaW9uKCk6IE9iamVjdEV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPYmplY3RFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0UGFpckV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T2JqZWN0UGFpckV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRPYmplY3RQYWlyRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T2JqZWN0UGFpckV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0T2JqZWN0UGFpckV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIExhbWJkYUV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgUEFSRU5fT1BFTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4sIDApOyB9XG5cdHB1YmxpYyBQQVJFTl9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBBUkVOX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgQVJST1coKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5BUlJPVywgMCk7IH1cblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBmb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSgpOiBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFFVRVNUSU9OKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04sIDApOyB9XG5cdHB1YmxpYyBwYXJhbWV0ZXIoKTogUGFyYW1ldGVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUGFyYW1ldGVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2xhbWJkYUV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckxhbWJkYUV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyTGFtYmRhRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdExhbWJkYUV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRMYW1iZGFFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRMYW1iZGFFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdExhbWJkYUV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIE51bWJlckxpdGVyYWwoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsLCAwKTsgfVxuXHRwdWJsaWMgQm9vbGVhbkxpdGVyYWwoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5Cb29sZWFuTGl0ZXJhbCwgMCk7IH1cblx0cHVibGljIENoYXJhY3RlckxpdGVyYWwoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsLCAwKTsgfVxuXHRwdWJsaWMgU3RyaW5nTGl0ZXJhbCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWwsIDApOyB9XG5cdHB1YmxpYyBOdWxsTGl0ZXJhbCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfbGl0ZXJhbEV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckxpdGVyYWxFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlckxpdGVyYWxFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0TGl0ZXJhbEV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRMaXRlcmFsRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0TGl0ZXJhbEV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbEV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFBBUkVOX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBQQVJFTl9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBBUkVOX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wYXJlbnRoZXNpemVkRXhwcmVzc2lvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyUGFyZW50aGVzaXplZEV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyUGFyZW50aGVzaXplZEV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVzY3JpcHRpb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lKCk6IERlc2NyaXB0aW9uTGluZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIERlc2NyaXB0aW9uTGluZUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb24pIGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbikgbGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbikgcmV0dXJuIHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVzY3JpcHRpb25MaW5lQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGRlc2NyaXB0aW9uTGluZVN0YXJ0KCk6IERlc2NyaXB0aW9uTGluZVN0YXJ0Q29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgRGVzY3JpcHRpb25MaW5lU3RhcnRDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lRWxlbWVudCgpOiBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dFtdO1xuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lRWxlbWVudChpOiBudW1iZXIpOiBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dDtcblx0cHVibGljIGRlc2NyaXB0aW9uTGluZUVsZW1lbnQoaT86IG51bWJlcik6IERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0IHwgRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgaW5saW5lVGFnKCk6IElubGluZVRhZ0NvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElubGluZVRhZ0NvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbkxpbmU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uTGluZSkgbGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbkxpbmUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbkxpbmUpIGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbkxpbmUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZSkgcmV0dXJuIHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uTGluZVN0YXJ0Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KCk6IERlc2NyaXB0aW9uVGV4dENvbnRleHRbXTtcblx0cHVibGljIGRlc2NyaXB0aW9uVGV4dChpOiBudW1iZXIpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0O1xuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KGk/OiBudW1iZXIpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0IHwgRGVzY3JpcHRpb25UZXh0Q29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoRGVzY3JpcHRpb25UZXh0Q29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIERlc2NyaXB0aW9uVGV4dENvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQVQoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBBVChpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBBVChpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkFUKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5BVCwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbkxpbmVTdGFydDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lU3RhcnQpIGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lU3RhcnQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbkxpbmVTdGFydCkgbGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZVN0YXJ0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmVTdGFydCkgcmV0dXJuIHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmVTdGFydCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVzY3JpcHRpb25UZXh0Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFRFWFRfQ09OVEVOVCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVCwgMCk7IH1cblx0cHVibGljIElEKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuSUQsIDApOyB9XG5cdHB1YmxpYyBGT1JXQVJEX1NMQVNIKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSCwgMCk7IH1cblx0cHVibGljIEJSQUNFX09QRU4oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfQ0xPU0UoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSwgMCk7IH1cblx0cHVibGljIENPTE9OKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ09MT04sIDApOyB9XG5cdHB1YmxpYyBNSU5VUygpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk1JTlVTLCAwKTsgfVxuXHRwdWJsaWMgUEVSSU9EKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9ELCAwKTsgfVxuXHRwdWJsaWMgbGl0ZXJhbEV4cHJlc3Npb24oKTogTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvblRleHQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uVGV4dCkgbGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvblRleHQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvblRleHQpIGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvblRleHQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERlc2NyaXB0aW9uVGV4dCkgcmV0dXJuIHZpc2l0b3IudmlzaXREZXNjcmlwdGlvblRleHQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgaW5saW5lVGFnKCk6IElubGluZVRhZ0NvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElubGluZVRhZ0NvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVUZXh0KCk6IERlc2NyaXB0aW9uTGluZVRleHRDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBEZXNjcmlwdGlvbkxpbmVUZXh0Q29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZUVsZW1lbnQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uTGluZUVsZW1lbnQpIGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lRWxlbWVudCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZUVsZW1lbnQpIGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbkxpbmVFbGVtZW50KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmVFbGVtZW50KSByZXR1cm4gdmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZUVsZW1lbnQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uTGluZVRleHRDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KCk6IERlc2NyaXB0aW9uVGV4dENvbnRleHRbXTtcblx0cHVibGljIGRlc2NyaXB0aW9uVGV4dChpOiBudW1iZXIpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0O1xuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KGk/OiBudW1iZXIpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0IHwgRGVzY3JpcHRpb25UZXh0Q29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoRGVzY3JpcHRpb25UZXh0Q29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIERlc2NyaXB0aW9uVGV4dENvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBBVCgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIEFUKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIEFUKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuQVQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkFULCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZVRleHQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uTGluZVRleHQpIGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lVGV4dCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZVRleHQpIGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbkxpbmVUZXh0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmVUZXh0KSByZXR1cm4gdmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZVRleHQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIElubGluZVRhZ0NvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBJTkxJTkVfVEFHX1NUQVJUKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuSU5MSU5FX1RBR19TVEFSVCwgMCk7IH1cblx0cHVibGljIGlubGluZVRhZ05hbWUoKTogSW5saW5lVGFnTmFtZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIElubGluZVRhZ05hbWVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgMCk7IH1cblx0cHVibGljIEJSQUNFX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBpbmxpbmVUYWdCb2R5KCk6IElubGluZVRhZ0JvZHlDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJbmxpbmVUYWdCb2R5Q29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2lubGluZVRhZzsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVySW5saW5lVGFnKSBsaXN0ZW5lci5lbnRlcklubGluZVRhZyh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdElubGluZVRhZykgbGlzdGVuZXIuZXhpdElubGluZVRhZyh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0SW5saW5lVGFnKSByZXR1cm4gdmlzaXRvci52aXNpdElubGluZVRhZyh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgSW5saW5lVGFnTmFtZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2lubGluZVRhZ05hbWU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlcklubGluZVRhZ05hbWUpIGxpc3RlbmVyLmVudGVySW5saW5lVGFnTmFtZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdElubGluZVRhZ05hbWUpIGxpc3RlbmVyLmV4aXRJbmxpbmVUYWdOYW1lKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRJbmxpbmVUYWdOYW1lKSByZXR1cm4gdmlzaXRvci52aXNpdElubGluZVRhZ05hbWUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIElubGluZVRhZ0JvZHlDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgYnJhY2VCb2R5KCk6IEJyYWNlQm9keUNvbnRleHRbXTtcblx0cHVibGljIGJyYWNlQm9keShpOiBudW1iZXIpOiBCcmFjZUJvZHlDb250ZXh0O1xuXHRwdWJsaWMgYnJhY2VCb2R5KGk/OiBudW1iZXIpOiBCcmFjZUJvZHlDb250ZXh0IHwgQnJhY2VCb2R5Q29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoQnJhY2VCb2R5Q29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIEJyYWNlQm9keUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfaW5saW5lVGFnQm9keTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVySW5saW5lVGFnQm9keSkgbGlzdGVuZXIuZW50ZXJJbmxpbmVUYWdCb2R5KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0SW5saW5lVGFnQm9keSkgbGlzdGVuZXIuZXhpdElubGluZVRhZ0JvZHkodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdElubGluZVRhZ0JvZHkpIHJldHVybiB2aXNpdG9yLnZpc2l0SW5saW5lVGFnQm9keSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQnJhY2VFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEJSQUNFX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSwgMCk7IH1cblx0cHVibGljIGJyYWNlQm9keSgpOiBCcmFjZUJvZHlDb250ZXh0W107XG5cdHB1YmxpYyBicmFjZUJvZHkoaTogbnVtYmVyKTogQnJhY2VCb2R5Q29udGV4dDtcblx0cHVibGljIGJyYWNlQm9keShpPzogbnVtYmVyKTogQnJhY2VCb2R5Q29udGV4dCB8IEJyYWNlQm9keUNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKEJyYWNlQm9keUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBCcmFjZUJvZHlDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2JyYWNlRXhwcmVzc2lvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyQnJhY2VFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlckJyYWNlRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEJyYWNlRXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdEJyYWNlRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0QnJhY2VFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdEJyYWNlRXhwcmVzc2lvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQnJhY2VCb2R5Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGJyYWNlRXhwcmVzc2lvbigpOiBCcmFjZUV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBCcmFjZUV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgYnJhY2VUZXh0KCk6IEJyYWNlVGV4dENvbnRleHRbXTtcblx0cHVibGljIGJyYWNlVGV4dChpOiBudW1iZXIpOiBCcmFjZVRleHRDb250ZXh0O1xuXHRwdWJsaWMgYnJhY2VUZXh0KGk/OiBudW1iZXIpOiBCcmFjZVRleHRDb250ZXh0IHwgQnJhY2VUZXh0Q29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoQnJhY2VUZXh0Q29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIEJyYWNlVGV4dENvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYnJhY2VCb2R5OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJCcmFjZUJvZHkpIGxpc3RlbmVyLmVudGVyQnJhY2VCb2R5KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0QnJhY2VCb2R5KSBsaXN0ZW5lci5leGl0QnJhY2VCb2R5KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRCcmFjZUJvZHkpIHJldHVybiB2aXNpdG9yLnZpc2l0QnJhY2VCb2R5KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBCcmFjZVRleHRDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgVEVYVF9DT05URU5UKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5ULCAwKTsgfVxuXHRwdWJsaWMgSUQoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5JRCwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIDApOyB9XG5cdHB1YmxpYyBGT1JXQVJEX1NMQVNIKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSCwgMCk7IH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCAwKTsgfVxuXHRwdWJsaWMgUEVSSU9EKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9ELCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYnJhY2VUZXh0OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJCcmFjZVRleHQpIGxpc3RlbmVyLmVudGVyQnJhY2VUZXh0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0QnJhY2VUZXh0KSBsaXN0ZW5lci5leGl0QnJhY2VUZXh0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRCcmFjZVRleHQpIHJldHVybiB2aXNpdG9yLnZpc2l0QnJhY2VUZXh0KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbiJdfQ==