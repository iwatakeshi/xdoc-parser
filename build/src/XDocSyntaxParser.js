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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWERvY1N5bnRheFBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9YRG9jU3ludGF4UGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyREFBMkQ7Ozs7Ozs7O0FBRzNELDBDQUF1QztBQUN2QyxrRUFBK0Q7QUFDL0QsZ0ZBQTZFO0FBQzdFLG9EQUE4QztBQUM5Qyx3RUFBcUU7QUFDckUsb0RBQStDO0FBQy9DLDRDQUF5QztBQUN6QyxrRUFBK0Q7QUFDL0Qsd0VBQXFFO0FBR3JFLHdFQUFxRTtBQUlyRSwwQ0FBdUM7QUFHdkMsNERBQXlEO0FBRXpELDZDQUE2QztBQU03QyxzQkFBOEIsU0FBUSxlQUFNO0lBcUkzQyxZQUFZLEtBQWtCO1FBQzdCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQWhCRCxJQUFXLFVBQVU7UUFDcEIsT0FBTyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7SUFDcEMsQ0FBQztJQUdELElBQVcsZUFBZSxLQUFhLE9BQU8scUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBR3RFLElBQVcsU0FBUyxLQUFlLE9BQU8sZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUd2RSxJQUFXLGFBQWEsS0FBYSxPQUFPLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFPdkUsYUFBYTtRQUNuQixJQUFJLFNBQVMsR0FBeUIsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNsRSxJQUFJLEdBQVcsQ0FBQztRQUNoQixJQUFJ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QUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHlFQUF5RTtJQUN6RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLGdEQUFnRCxDQUFDO0FBQzFCLHVDQUFzQixHQUM3QywwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSwyRUFBMkU7SUFDM0UseUVBQXlFO0lBQ3pFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLHlFQUF5RTtJQUN6RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwyRUFBMkU7SUFDM0Usd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4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VyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFNeEYsSUFBVyxTQUFTLEtBQWEsT0FBTyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRTdFLFNBQVMsQ0FBQyxRQUFrQztRQUNsRCxJQUFJLFFBQVEsQ0FBQyxjQUFjO1lBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQWtDO1FBQ2pELElBQUksUUFBUSxDQUFDLGFBQWE7WUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxNQUFNLENBQVMsT0FBd0M7UUFDN0QsSUFBSSxPQUFPLENBQUMsY0FBYztZQUFFLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDM0QsT0FBTyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7aURBQTJFO0FBRXBGO0lBREMscUJBQVE7aURBR1I7QUFFRDtJQURDLHFCQUFRO2dEQUdSO0FBRUQ7SUFEQyxxQkFBUTs4Q0FJUjtBQXpCRiw0Q0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSBYRG9jU3ludGF4UGFyc2VyLmc0IGJ5IEFOVExSIDQuNi1TTkFQU0hPVFxuXG5cbmltcG9ydCB7IEFUTiB9IGZyb20gJ2FudGxyNHRzL2F0bi9BVE4nO1xuaW1wb3J0IHsgQVRORGVzZXJpYWxpemVyIH0gZnJvbSAnYW50bHI0dHMvYXRuL0FUTkRlc2VyaWFsaXplcic7XG5pbXBvcnQgeyBGYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24gfSBmcm9tICdhbnRscjR0cy9GYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24nO1xuaW1wb3J0IHsgTm90TnVsbCB9IGZyb20gJ2FudGxyNHRzL0RlY29yYXRvcnMnO1xuaW1wb3J0IHsgTm9WaWFibGVBbHRFeGNlcHRpb24gfSBmcm9tICdhbnRscjR0cy9Ob1ZpYWJsZUFsdEV4Y2VwdGlvbic7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJ2FudGxyNHRzL0RlY29yYXRvcnMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnYW50bHI0dHMvUGFyc2VyJztcbmltcG9ydCB7IFBhcnNlclJ1bGVDb250ZXh0IH0gZnJvbSAnYW50bHI0dHMvUGFyc2VyUnVsZUNvbnRleHQnO1xuaW1wb3J0IHsgUGFyc2VyQVROU2ltdWxhdG9yIH0gZnJvbSAnYW50bHI0dHMvYXRuL1BhcnNlckFUTlNpbXVsYXRvcic7XG5pbXBvcnQgeyBQYXJzZVRyZWVMaXN0ZW5lciB9IGZyb20gJ2FudGxyNHRzL3RyZWUvUGFyc2VUcmVlTGlzdGVuZXInO1xuaW1wb3J0IHsgUGFyc2VUcmVlVmlzaXRvciB9IGZyb20gJ2FudGxyNHRzL3RyZWUvUGFyc2VUcmVlVmlzaXRvcic7XG5pbXBvcnQgeyBSZWNvZ25pdGlvbkV4Y2VwdGlvbiB9IGZyb20gJ2FudGxyNHRzL1JlY29nbml0aW9uRXhjZXB0aW9uJztcbmltcG9ydCB7IFJ1bGVDb250ZXh0IH0gZnJvbSAnYW50bHI0dHMvUnVsZUNvbnRleHQnO1xuaW1wb3J0IHsgUnVsZVZlcnNpb24gfSBmcm9tICdhbnRscjR0cy9SdWxlVmVyc2lvbic7XG5pbXBvcnQgeyBUZXJtaW5hbE5vZGUgfSBmcm9tICdhbnRscjR0cy90cmVlL1Rlcm1pbmFsTm9kZSc7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gJ2FudGxyNHRzL1Rva2VuJztcbmltcG9ydCB7IFRva2VuU3RyZWFtIH0gZnJvbSAnYW50bHI0dHMvVG9rZW5TdHJlYW0nO1xuaW1wb3J0IHsgVm9jYWJ1bGFyeSB9IGZyb20gJ2FudGxyNHRzL1ZvY2FidWxhcnknO1xuaW1wb3J0IHsgVm9jYWJ1bGFyeUltcGwgfSBmcm9tICdhbnRscjR0cy9Wb2NhYnVsYXJ5SW1wbCc7XG5cbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ2FudGxyNHRzL21pc2MvVXRpbHMnO1xuXG5pbXBvcnQgeyBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIgfSBmcm9tICcuL1hEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcic7XG5pbXBvcnQgeyBYRG9jU3ludGF4UGFyc2VyVmlzaXRvciB9IGZyb20gJy4vWERvY1N5bnRheFBhcnNlclZpc2l0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBYRG9jU3ludGF4UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBOdW1iZXJMaXRlcmFsPTE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSW50ZWdlckxpdGVyYWw9Mjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBGbG9hdGluZ1BvaW50TGl0ZXJhbD0zO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJvb2xlYW5MaXRlcmFsPTQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ2hhcmFjdGVyTGl0ZXJhbD01O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFN0cmluZ0xpdGVyYWw9Njtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBOdWxsTGl0ZXJhbD03O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElEPTg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTkVXTElORT05O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNQQUNFPTEwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRFWFRfQ09OVEVOVD0xMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBBVD0xMjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBQTFVTPTEzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1JTlVTPTE0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUQVI9MTU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRk9SV0FSRF9TTEFTSD0xNjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBDT0xPTj0xNztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBQRVJJT0Q9MTg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09NTUE9MTk7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVFVQUw9MjA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUVVFU1RJT049MjE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQU1QPTIyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBJUEU9MjM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVJST1c9MjQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVhDTEFNQVRJT049MjU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSU5MSU5FX1RBR19TVEFSVD0yNjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBCUkFDRV9PUEVOPTI3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJSQUNFX0NMT1NFPTI4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBBUkVOX09QRU49Mjk7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUEFSRU5fQ0xPU0U9MzA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQlJBQ0tFVF9PUEVOPTMxO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJSQUNLRVRfQ0xPU0U9MzI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTEVTU1RIQU49MzM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR1JFQVRFUlRIQU49MzQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kb2N1bWVudGF0aW9uID0gMDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2JvZHkgPSAxO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfd2hpdGVzcGFjZSA9IDI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9hbm5vdGF0aW9ucyA9IDM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV90YWcgPSA0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdGFnTmFtZSA9IDU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV90YWdJZGVudGlmaWVyID0gNjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3Byb3BlcnR5VGFnSWRlbnRpZmllciA9IDc7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9vcHRpb25hbFRhZ0lkZW50aWZpZXIgPSA4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb3B0aW9uYWxUYWdPcklkZW50aWZpZXIgPSA5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfaWRlbnRpZmllciA9IDEwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb3B0aW9uYWxJZGVudGlmaWVyID0gMTE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV90eXBlID0gMTI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9sYW1iZGFUeXBlID0gMTM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9mb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSA9IDE0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfcGFyYW1ldGVyID0gMTU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV90dXBsZVR5cGUgPSAxNjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3R1cGxlVHlwZVNlcXVlbmNlID0gMTc7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wcmltYXJ5VHlwZSA9IDE4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfaWRlbnRpZmllck9yS2V5d29yZCA9IDE5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfa2V5d29yZCA9IDIwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfcGFyZW50aGVzaXplZFR5cGUgPSAyMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3VuYXJ5VHlwZSA9IDIyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0VHlwZSA9IDIzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0UGFpclNlcXVlbmNlVHlwZSA9IDI0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0UGFpclR5cGUgPSAyNTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2FycmF5VHlwZSA9IDI2O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfbm90QXJyYXlUeXBlID0gMjc7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wcm9wZXJ0eUlkZW50aWZpZXIgPSAyODtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllciA9IDI5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZXhwcmVzc2lvbiA9IDMwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdW5hcnlFeHByZXNzaW9uID0gMzE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9hcnJheUV4cHJlc3Npb24gPSAzMjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29iamVjdEV4cHJlc3Npb24gPSAzMztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24gPSAzNDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29iamVjdFBhaXJFeHByZXNzaW9uID0gMzU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9sYW1iZGFFeHByZXNzaW9uID0gMzY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9saXRlcmFsRXhwcmVzc2lvbiA9IDM3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfcGFyZW50aGVzaXplZEV4cHJlc3Npb24gPSAzODtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2Rlc2NyaXB0aW9uID0gMzk7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvbkxpbmUgPSA0MDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2Rlc2NyaXB0aW9uTGluZVN0YXJ0ID0gNDE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvblRleHQgPSA0Mjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2Rlc2NyaXB0aW9uTGluZUVsZW1lbnQgPSA0Mztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2Rlc2NyaXB0aW9uTGluZVRleHQgPSA0NDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2lubGluZVRhZyA9IDQ1O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfaW5saW5lVGFnTmFtZSA9IDQ2O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfaW5saW5lVGFnQm9keSA9IDQ3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfYnJhY2VFeHByZXNzaW9uID0gNDg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9icmFjZUJvZHkgPSA0OTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2JyYWNlVGV4dCA9IDUwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHJ1bGVOYW1lczogc3RyaW5nW10gPSBbXG5cdFx0XCJkb2N1bWVudGF0aW9uXCIsIFwiYm9keVwiLCBcIndoaXRlc3BhY2VcIiwgXCJhbm5vdGF0aW9uc1wiLCBcInRhZ1wiLCBcInRhZ05hbWVcIiwgXG5cdFx0XCJ0YWdJZGVudGlmaWVyXCIsIFwicHJvcGVydHlUYWdJZGVudGlmaWVyXCIsIFwib3B0aW9uYWxUYWdJZGVudGlmaWVyXCIsIFwib3B0aW9uYWxUYWdPcklkZW50aWZpZXJcIiwgXG5cdFx0XCJpZGVudGlmaWVyXCIsIFwib3B0aW9uYWxJZGVudGlmaWVyXCIsIFwidHlwZVwiLCBcImxhbWJkYVR5cGVcIiwgXCJmb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZVwiLCBcblx0XHRcInBhcmFtZXRlclwiLCBcInR1cGxlVHlwZVwiLCBcInR1cGxlVHlwZVNlcXVlbmNlXCIsIFwicHJpbWFyeVR5cGVcIiwgXCJpZGVudGlmaWVyT3JLZXl3b3JkXCIsIFxuXHRcdFwia2V5d29yZFwiLCBcInBhcmVudGhlc2l6ZWRUeXBlXCIsIFwidW5hcnlUeXBlXCIsIFwib2JqZWN0VHlwZVwiLCBcIm9iamVjdFBhaXJTZXF1ZW5jZVR5cGVcIiwgXG5cdFx0XCJvYmplY3RQYWlyVHlwZVwiLCBcImFycmF5VHlwZVwiLCBcIm5vdEFycmF5VHlwZVwiLCBcInByb3BlcnR5SWRlbnRpZmllclwiLCBcIm9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllclwiLCBcblx0XHRcImV4cHJlc3Npb25cIiwgXCJ1bmFyeUV4cHJlc3Npb25cIiwgXCJhcnJheUV4cHJlc3Npb25cIiwgXCJvYmplY3RFeHByZXNzaW9uXCIsIFxuXHRcdFwib2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvblwiLCBcIm9iamVjdFBhaXJFeHByZXNzaW9uXCIsIFwibGFtYmRhRXhwcmVzc2lvblwiLCBcblx0XHRcImxpdGVyYWxFeHByZXNzaW9uXCIsIFwicGFyZW50aGVzaXplZEV4cHJlc3Npb25cIiwgXCJkZXNjcmlwdGlvblwiLCBcImRlc2NyaXB0aW9uTGluZVwiLCBcblx0XHRcImRlc2NyaXB0aW9uTGluZVN0YXJ0XCIsIFwiZGVzY3JpcHRpb25UZXh0XCIsIFwiZGVzY3JpcHRpb25MaW5lRWxlbWVudFwiLCBcImRlc2NyaXB0aW9uTGluZVRleHRcIiwgXG5cdFx0XCJpbmxpbmVUYWdcIiwgXCJpbmxpbmVUYWdOYW1lXCIsIFwiaW5saW5lVGFnQm9keVwiLCBcImJyYWNlRXhwcmVzc2lvblwiLCBcImJyYWNlQm9keVwiLCBcblx0XHRcImJyYWNlVGV4dFwiXG5cdF07XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX0xJVEVSQUxfTkFNRVM6IChzdHJpbmcgfCB1bmRlZmluZWQpW10gPSBbXG5cdFx0dW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcblx0XHR1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCInQCdcIiwgXCInKydcIiwgXCInLSdcIiwgXG5cdFx0XCInKidcIiwgXCInLydcIiwgXCInOidcIiwgXCInLidcIiwgXCInLCdcIiwgXCInPSdcIiwgXCInPydcIiwgXCInJidcIiwgXCInfCdcIiwgdW5kZWZpbmVkLCBcblx0XHRcIichJ1wiLCBcIid7QCdcIiwgXCIneydcIiwgXCInfSdcIiwgXCInKCdcIiwgXCInKSdcIiwgXCInWydcIiwgXCInXSdcIiwgXCInPCdcIiwgXCInPidcIlxuXHRdO1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBfU1lNQk9MSUNfTkFNRVM6IChzdHJpbmcgfCB1bmRlZmluZWQpW10gPSBbXG5cdFx0dW5kZWZpbmVkLCBcIk51bWJlckxpdGVyYWxcIiwgXCJJbnRlZ2VyTGl0ZXJhbFwiLCBcIkZsb2F0aW5nUG9pbnRMaXRlcmFsXCIsIFxuXHRcdFwiQm9vbGVhbkxpdGVyYWxcIiwgXCJDaGFyYWN0ZXJMaXRlcmFsXCIsIFwiU3RyaW5nTGl0ZXJhbFwiLCBcIk51bGxMaXRlcmFsXCIsIFxuXHRcdFwiSURcIiwgXCJORVdMSU5FXCIsIFwiU1BBQ0VcIiwgXCJURVhUX0NPTlRFTlRcIiwgXCJBVFwiLCBcIlBMVVNcIiwgXCJNSU5VU1wiLCBcIlNUQVJcIiwgXG5cdFx0XCJGT1JXQVJEX1NMQVNIXCIsIFwiQ09MT05cIiwgXCJQRVJJT0RcIiwgXCJDT01NQVwiLCBcIkVRVUFMXCIsIFwiUVVFU1RJT05cIiwgXCJBTVBcIiwgXG5cdFx0XCJQSVBFXCIsIFwiQVJST1dcIiwgXCJFWENMQU1BVElPTlwiLCBcIklOTElORV9UQUdfU1RBUlRcIiwgXCJCUkFDRV9PUEVOXCIsIFwiQlJBQ0VfQ0xPU0VcIiwgXG5cdFx0XCJQQVJFTl9PUEVOXCIsIFwiUEFSRU5fQ0xPU0VcIiwgXCJCUkFDS0VUX09QRU5cIiwgXCJCUkFDS0VUX0NMT1NFXCIsIFwiTEVTU1RIQU5cIiwgXG5cdFx0XCJHUkVBVEVSVEhBTlwiXG5cdF07XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVk9DQUJVTEFSWTogVm9jYWJ1bGFyeSA9IG5ldyBWb2NhYnVsYXJ5SW1wbChYRG9jU3ludGF4UGFyc2VyLl9MSVRFUkFMX05BTUVTLCBYRG9jU3ludGF4UGFyc2VyLl9TWU1CT0xJQ19OQU1FUywgW10pO1xuXG5cdEBPdmVycmlkZVxuXHRATm90TnVsbFxuXHRwdWJsaWMgZ2V0IHZvY2FidWxhcnkoKTogVm9jYWJ1bGFyeSB7XG5cdFx0cmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuVk9DQUJVTEFSWTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZ2V0IGdyYW1tYXJGaWxlTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJYRG9jU3ludGF4UGFyc2VyLmc0XCI7IH1cblxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGdldCBydWxlTmFtZXMoKTogc3RyaW5nW10geyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5ydWxlTmFtZXM7IH1cblxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGdldCBzZXJpYWxpemVkQVROKCk6IHN0cmluZyB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLl9zZXJpYWxpemVkQVROOyB9XG5cblx0Y29uc3RydWN0b3IoaW5wdXQ6IFRva2VuU3RyZWFtKSB7XG5cdFx0c3VwZXIoaW5wdXQpO1xuXHRcdHRoaXMuX2ludGVycCA9IG5ldyBQYXJzZXJBVE5TaW11bGF0b3IoWERvY1N5bnRheFBhcnNlci5fQVROLCB0aGlzKTtcblx0fVxuXHRcblx0cHVibGljIGRvY3VtZW50YXRpb24oKTogRG9jdW1lbnRhdGlvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IERvY3VtZW50YXRpb25Db250ZXh0ID0gbmV3IERvY3VtZW50YXRpb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZG9jdW1lbnRhdGlvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTA5O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkVPRjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkVPRik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTkVXTElORTpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TUEFDRTpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5BVDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMztcblx0XHRcdFx0dGhpcy5ib2R5KCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwNDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwNztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkVPRik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGJvZHkoKTogQm9keUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEJvZHlDb250ZXh0ID0gbmV3IEJvZHlDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAyLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYm9keSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMTQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdHdoaWxlIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUgfHwgX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDExMTtcblx0XHRcdFx0dGhpcy53aGl0ZXNwYWNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTE2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDExNztcblx0XHRcdHRoaXMuYW5ub3RhdGlvbnMoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgd2hpdGVzcGFjZSgpOiBXaGl0ZXNwYWNlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogV2hpdGVzcGFjZUNvbnRleHQgPSBuZXcgV2hpdGVzcGFjZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV93aGl0ZXNwYWNlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDExOTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCAhKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSB8fCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSApIHtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBhbm5vdGF0aW9ucygpOiBBbm5vdGF0aW9uc0NvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEFubm90YXRpb25zQ29udGV4dCA9IG5ldyBBbm5vdGF0aW9uc0NvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDYsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9hbm5vdGF0aW9ucyk7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMjE7XG5cdFx0XHR0aGlzLnRhZygpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDEyNjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzLHRoaXMuX2N0eCk7XG5cdFx0XHR3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICkge1xuXHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEyMjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEyMztcblx0XHRcdFx0XHR0aGlzLnRhZygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMjg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDMsdGhpcy5fY3R4KTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdGFnKCk6IFRhZ0NvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFRhZ0NvbnRleHQgPSBuZXcgVGFnQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOCwgWERvY1N5bnRheFBhcnNlci5SVUxFX3RhZyk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMjg4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMjksdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEyOTtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEzMDtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEzMjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEzNTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk1JTlVTKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEzNjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEzNztcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDMpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzk7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQxO1xuXHRcdFx0XHR0aGlzLnRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA0KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQzO1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0NDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0NTtcblx0XHRcdFx0dGhpcy50YWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNDc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxNDY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQ5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuRVFVQUwpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTUxO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTUwO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1Mztcblx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDUpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNTU7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTU2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTU3O1xuXHRcdFx0XHR0aGlzLnRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1ODtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2MDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTU5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTYyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTUlOVVMpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTYzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTY0O1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2Njtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNjc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNjg7XG5cdFx0XHRcdHRoaXMudGFnSWRlbnRpZmllcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTY5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTcwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuRVFVQUwpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTcyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTcxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3NDtcblx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTc1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTc3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxNzY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNzk7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODE7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA3OlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA3KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTgzO1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE4NDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE4NTtcblx0XHRcdFx0dGhpcy50YWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxODY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTg5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTkxO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTkwO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5Mztcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDg6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDgpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTU7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTk2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTk3O1xuXHRcdFx0XHR0aGlzLnRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5OTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5ODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjA1O1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjA5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuRVFVQUwpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjExO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjEwO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxMztcblx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDk6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDkpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMTU7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjE2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjE3O1xuXHRcdFx0XHR0aGlzLnRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxOTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjI1O1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjY7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIyNztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzMDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk1JTlVTKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzMTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzMjtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDEwOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxMCk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzNDtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzY7XG5cdFx0XHRcdHRoaXMudGFnSWRlbnRpZmllcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjM4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjM3O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI0MDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI0Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI0MTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDQ7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI0Njtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI0NTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDg7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5FUVVBTCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjUyO1xuXHRcdFx0XHR0aGlzLmV4cHJlc3Npb24oMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1NDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1Nztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk1JTlVTKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1ODtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1OTtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDExOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2MTtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNjM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyNjI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjY1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjY3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjY2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2OTtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDEyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI3MTtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNzM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyNzI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjc1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjc3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjc2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI3OTtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjgwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjgyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyODE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyODQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyODU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyODY7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdGFnTmFtZSgpOiBUYWdOYW1lQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogVGFnTmFtZUNvbnRleHQgPSBuZXcgVGFnTmFtZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDEwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdGFnTmFtZSk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDI5MDtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5BVCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gMjkxO1xuXHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHRhZ0lkZW50aWZpZXIoKTogVGFnSWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFRhZ0lkZW50aWZpZXJDb250ZXh0ID0gbmV3IFRhZ0lkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxMiwgWERvY1N5bnRheFBhcnNlci5SVUxFX3RhZ0lkZW50aWZpZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMjk2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMzAsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI5Mztcblx0XHRcdFx0dGhpcy5wcm9wZXJ0eVRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjk0O1xuXHRcdFx0XHR0aGlzLm9wdGlvbmFsVGFnSWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDMpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyOTU7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBwcm9wZXJ0eVRhZ0lkZW50aWZpZXIoKTogUHJvcGVydHlUYWdJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogUHJvcGVydHlUYWdJZGVudGlmaWVyQ29udGV4dCA9IG5ldyBQcm9wZXJ0eVRhZ0lkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxNCwgWERvY1N5bnRheFBhcnNlci5SVUxFX3Byb3BlcnR5VGFnSWRlbnRpZmllcik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzEyO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMzMsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI5ODtcblx0XHRcdFx0dGhpcy5vcHRpb25hbFRhZ0lkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwMTsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyOTk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBFUklPRCk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwMDtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzAzOyBcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdH0gd2hpbGUgKCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlBFUklPRCApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMDU7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzA4OyBcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwNjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzA3O1xuXHRcdFx0XHRcdHRoaXMub3B0aW9uYWxUYWdPcklkZW50aWZpZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzMTA7IFxuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0fSB3aGlsZSAoIF9sYT09PVhEb2NTeW50YXhQYXJzZXIuUEVSSU9EICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9wdGlvbmFsVGFnSWRlbnRpZmllcigpOiBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPcHRpb25hbFRhZ0lkZW50aWZpZXJDb250ZXh0ID0gbmV3IE9wdGlvbmFsVGFnSWRlbnRpZmllckNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDE2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb3B0aW9uYWxUYWdJZGVudGlmaWVyKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzE0O1xuXHRcdFx0dGhpcy5vcHRpb25hbElkZW50aWZpZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb3B0aW9uYWxUYWdPcklkZW50aWZpZXIoKTogT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQgPSBuZXcgT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxOCwgWERvY1N5bnRheFBhcnNlci5SVUxFX29wdGlvbmFsVGFnT3JJZGVudGlmaWVyKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDMxODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDM0LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMTY7XG5cdFx0XHRcdHRoaXMub3B0aW9uYWxUYWdJZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMxNztcblx0XHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IElkZW50aWZpZXJDb250ZXh0ID0gbmV3IElkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAyMCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2lkZW50aWZpZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAzMjA7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuSUQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvcHRpb25hbElkZW50aWZpZXIoKTogT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCA9IG5ldyBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAyMiwgWERvY1N5bnRheFBhcnNlci5SVUxFX29wdGlvbmFsSWRlbnRpZmllcik7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDMyMjtcblx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDMyMztcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5RVUVTVElPTik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0O1xuXHRwdWJsaWMgdHlwZShfcDogbnVtYmVyKTogVHlwZUNvbnRleHQ7XG5cdFxuXHRwdWJsaWMgdHlwZShfcD86IG51bWJlcik6IFR5cGVDb250ZXh0IHtcblx0XHRpZiAoX3AgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0X3AgPSAwO1xuXHRcdH1cblxuXHRcdGxldCBfcGFyZW50Y3R4OiBQYXJzZXJSdWxlQ29udGV4dCA9IHRoaXMuX2N0eDtcblx0XHRsZXQgX3BhcmVudFN0YXRlOiBudW1iZXIgPSB0aGlzLnN0YXRlO1xuXHRcdGxldCBfbG9jYWxjdHg6IFR5cGVDb250ZXh0ID0gbmV3IFR5cGVDb250ZXh0KHRoaXMuX2N0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRsZXQgX3ByZXZjdHg6IFR5cGVDb250ZXh0ID0gX2xvY2FsY3R4O1xuXHRcdGxldCBfc3RhcnRTdGF0ZTogbnVtYmVyID0gMjQ7XG5cdFx0dGhpcy5lbnRlclJlY3Vyc2lvblJ1bGUoX2xvY2FsY3R4LCAyNCwgWERvY1N5bnRheFBhcnNlci5SVUxFX3R5cGUsIF9wKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAzMzM7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzNSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMjY7XG5cdFx0XHRcdHRoaXMubGFtYmRhVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMyNztcblx0XHRcdFx0dGhpcy50dXBsZVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMjg7XG5cdFx0XHRcdHRoaXMucHJpbWFyeVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMjk7XG5cdFx0XHRcdHRoaXMucGFyZW50aGVzaXplZFR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMzA7XG5cdFx0XHRcdHRoaXMudW5hcnlUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNjpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzMxO1xuXHRcdFx0XHR0aGlzLm9iamVjdFR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA3OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMzI7XG5cdFx0XHRcdHRoaXMuYXJyYXlUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jdHguX3N0b3AgPSB0aGlzLl9pbnB1dC50cnlMVCgtMSk7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzU4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDQyLHRoaXMuX2N0eCk7XG5cdFx0XHR3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICkge1xuXHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5fcGFyc2VMaXN0ZW5lcnMhPW51bGwgKSB0aGlzLnRyaWdnZXJFeGl0UnVsZUV2ZW50KCk7XG5cdFx0XHRcdFx0X3ByZXZjdHggPSBfbG9jYWxjdHg7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRfbG9jYWxjdHggPSBuZXcgVHlwZUNvbnRleHQoX3BhcmVudGN0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRcdFx0XHR0aGlzLnB1c2hOZXdSZWN1cnNpb25Db250ZXh0KF9sb2NhbGN0eCwgX3N0YXJ0U3RhdGUsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90eXBlKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzM1O1xuXHRcdFx0XHRcdGlmICghKHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA4KSkpIHRocm93IG5ldyBGYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24odGhpcywgXCJ0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgOClcIik7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMzNztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMzYsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzM2O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzQwO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzM5O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNDM7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzQyO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzQ1O1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmICggIShfbGE9PT1YRG9jU3ludGF4UGFyc2VyLkFNUCB8fCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlBJUEUpICkge1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzQ3O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzOSx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNDY7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNTA7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNDk7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM1Mztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNTI7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNTU7XG5cdFx0XHRcdFx0dGhpcy50eXBlKDkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNjA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDQyLHRoaXMuX2N0eCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMudW5yb2xsUmVjdXJzaW9uQ29udGV4dHMoX3BhcmVudGN0eCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBsYW1iZGFUeXBlKCk6IExhbWJkYVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBMYW1iZGFUeXBlQ29udGV4dCA9IG5ldyBMYW1iZGFUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMjYsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9sYW1iZGFUeXBlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA0MzE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2MTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzYzO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDQzLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2Mjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzY2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDQ0LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2NTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNjk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNDUsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzY4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNzI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLklEKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNzE7XG5cdFx0XHRcdFx0dGhpcy5mb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNzU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNDcsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzc0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNzg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM3Nztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM4MTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM4MDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzODM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QQVJFTl9DTE9TRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzODU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNTAsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzg0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzODg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM4Nztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5MTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5MDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5BUlJPVyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNTMsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzk0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5Nztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQwMTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQwMDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDM7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQwNTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw1Nix0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDQ7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlFVRVNUSU9OKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQwNztcblx0XHRcdFx0dGhpcy5wYXJhbWV0ZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQwOTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw1Nyx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxMjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDExO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDE1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDE0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxNztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkFSUk9XKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxOTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw2MCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0MTg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyMjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDIxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDI1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDI0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyNztcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDI5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDYzLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBmb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSgpOiBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlQ29udGV4dCA9IG5ldyBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDI4LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDMzO1xuXHRcdFx0dGhpcy5wYXJhbWV0ZXIoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA0NDQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdHdoaWxlIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLkNPTU1BKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDM0O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDM2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0MzU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0Mzk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0Mzg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDQxO1xuXHRcdFx0XHR0aGlzLnBhcmFtZXRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ0Njtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgcGFyYW1ldGVyKCk6IFBhcmFtZXRlckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFBhcmFtZXRlckNvbnRleHQgPSBuZXcgUGFyYW1ldGVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMzAsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wYXJhbWV0ZXIpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDQ3O1xuXHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDU2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNzAsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDQ5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDQ4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ1MTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ1Mztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ1Mjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTU7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdHVwbGVUeXBlKCk6IFR1cGxlVHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFR1cGxlVHlwZUNvbnRleHQgPSBuZXcgVHVwbGVUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMzIsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90dXBsZVR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDU5O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5JRCkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTg7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA0NjE7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTEVTU1RIQU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ2Mztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDYyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA0NjU7XG5cdFx0XHR0aGlzLnR1cGxlVHlwZVNlcXVlbmNlKCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDY3O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NjY7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ2OTtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5HUkVBVEVSVEhBTik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHR1cGxlVHlwZVNlcXVlbmNlKCk6IFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogVHVwbGVUeXBlU2VxdWVuY2VDb250ZXh0ID0gbmV3IFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMzQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90dXBsZVR5cGVTZXF1ZW5jZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA0NzE7XG5cdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDczO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNzQsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDcyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ4Mjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0d2hpbGUgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuQ09NTUEpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NzU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0Nzc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0NzY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDc5O1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDg0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBwcmltYXJ5VHlwZSgpOiBQcmltYXJ5VHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFByaW1hcnlUeXBlQ29udGV4dCA9IG5ldyBQcmltYXJ5VHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDM2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfcHJpbWFyeVR5cGUpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDg4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNzcsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ4NTtcblx0XHRcdFx0dGhpcy5vcHRpb25hbElkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDg2O1xuXHRcdFx0XHR0aGlzLnByb3BlcnR5SWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDMpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0ODc7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllck9yS2V5d29yZCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBpZGVudGlmaWVyT3JLZXl3b3JkKCk6IElkZW50aWZpZXJPcktleXdvcmRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCA9IG5ldyBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMzgsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pZGVudGlmaWVyT3JLZXl3b3JkKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ5Mjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ5MDtcblx0XHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWw6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0OTE7XG5cdFx0XHRcdHRoaXMua2V5d29yZCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBrZXl3b3JkKCk6IEtleXdvcmRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBLZXl3b3JkQ29udGV4dCA9IG5ldyBLZXl3b3JkQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNDAsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9rZXl3b3JkKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDk0O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgcGFyZW50aGVzaXplZFR5cGUoKTogUGFyZW50aGVzaXplZFR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBQYXJlbnRoZXNpemVkVHlwZUNvbnRleHQgPSBuZXcgUGFyZW50aGVzaXplZFR5cGVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA0MiwgWERvY1N5bnRheFBhcnNlci5SVUxFX3BhcmVudGhlc2l6ZWRUeXBlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ5Njtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA0OTg7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ5Nztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNTAwO1xuXHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDUwMjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTAxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1MDQ7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fQ0xPU0UpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyB1bmFyeVR5cGUoKTogVW5hcnlUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogVW5hcnlUeXBlQ29udGV4dCA9IG5ldyBVbmFyeVR5cGVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA0NCwgWERvY1N5bnRheFBhcnNlci5SVUxFX3VuYXJ5VHlwZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA1MDY7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICggIShfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNUQVIgfHwgX2xhPT09WERvY1N5bnRheFBhcnNlci5BTVApICkge1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVySW5saW5lKHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHR0aGlzLm1hdGNoZWRFT0YgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNTA3O1xuXHRcdFx0dGhpcy5wcmltYXJ5VHlwZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvYmplY3RUeXBlKCk6IE9iamVjdFR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPYmplY3RUeXBlQ29udGV4dCA9IG5ldyBPYmplY3RUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNDYsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RUeXBlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDUwOTtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA1MTE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw4MSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MTA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNTE0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsODIsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTEzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNTE3O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsODMsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTE2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDUyMDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCgoKChfbGEgLSA3KSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IChfbGEgLSA3KSkgJiAoKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWwgLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5JRCAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLlNUQVIgLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5BTVAgLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTiAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfT1BFTiAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLkxFU1NUSEFOIC0gNykpKSkgIT09IDApKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUxOTtcblx0XHRcdFx0dGhpcy5vYmplY3RQYWlyU2VxdWVuY2VUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDUyMztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDg1LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUyMjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA1MjY7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTI1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDUyOTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTI4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1MzE7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvYmplY3RQYWlyU2VxdWVuY2VUeXBlKCk6IE9iamVjdFBhaXJTZXF1ZW5jZVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPYmplY3RQYWlyU2VxdWVuY2VUeXBlQ29udGV4dCA9IG5ldyBPYmplY3RQYWlyU2VxdWVuY2VUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNDgsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RQYWlyU2VxdWVuY2VUeXBlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDUzMztcblx0XHRcdHRoaXMub2JqZWN0UGFpclR5cGUoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA1MzU7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw4OCx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MzQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNTUwO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR3aGlsZSAoX2xhPT09WERvY1N5bnRheFBhcnNlci5DT01NQSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzNztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzOTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw4OSx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1Mzg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU0Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTQxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTQ1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTQ0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU0Nztcblx0XHRcdFx0dGhpcy5vYmplY3RQYWlyVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU1Mjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb2JqZWN0UGFpclR5cGUoKTogT2JqZWN0UGFpclR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPYmplY3RQYWlyVHlwZUNvbnRleHQgPSBuZXcgT2JqZWN0UGFpclR5cGVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA1MCwgWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdFBhaXJUeXBlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDU1Mztcblx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA1NTU7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlFVRVNUSU9OKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU1NDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlFVRVNUSU9OKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNTU4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NTc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDU2MDtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT0xPTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTYyO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NjE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDU2NDtcblx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgYXJyYXlUeXBlKCk6IEFycmF5VHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEFycmF5VHlwZUNvbnRleHQgPSBuZXcgQXJyYXlUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNTIsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9hcnJheVR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0bGV0IF9hbHQ6IG51bWJlcjtcblx0XHRcdHRoaXMuc3RhdGUgPSA2MTI7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9PUEVOOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTY2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9PUEVOKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU2ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw5Nix0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1Njc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTcxO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDk3LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU3MDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTc0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDk4LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU3Mztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1Nzc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmICgoKCgoX2xhIC0gNykpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCAoX2xhIC0gNykpICYgKCgxIDw8IChYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuSUQgLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5TVEFSIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuQU1QIC0gNykpIHwgKDEgPDwgKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTiAtIDcpKSB8ICgxIDw8IChYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4gLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU4gLSA3KSkgfCAoMSA8PCAoWERvY1N5bnRheFBhcnNlci5MRVNTVEhBTiAtIDcpKSkpICE9PSAwKSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTc2O1xuXHRcdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTkyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHR3aGlsZSAoX2xhPT09WERvY1N5bnRheFBhcnNlci5DT01NQSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU3OTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODE7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEwMCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODA7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU4NDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODM7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODc7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODY7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU4OTtcblx0XHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTk0O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTk2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEwNCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1OTU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTk5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTk4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYwMjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjAxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjA0O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9DTE9TRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuSUQ6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU1RBUjpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5BTVA6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkxFU1NUSEFOOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjA1O1xuXHRcdFx0XHR0aGlzLm5vdEFycmF5VHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYwODsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IDE7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRzd2l0Y2ggKF9hbHQpIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjA2O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfT1BFTik7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjA3O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfQ0xPU0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYxMDsgXG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMDcsdGhpcy5fY3R4KTtcblx0XHRcdFx0fSB3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXG5cdHB1YmxpYyBub3RBcnJheVR5cGUoKTogTm90QXJyYXlUeXBlQ29udGV4dDtcblx0cHVibGljIG5vdEFycmF5VHlwZShfcDogbnVtYmVyKTogTm90QXJyYXlUeXBlQ29udGV4dDtcblx0XG5cdHB1YmxpYyBub3RBcnJheVR5cGUoX3A/OiBudW1iZXIpOiBOb3RBcnJheVR5cGVDb250ZXh0IHtcblx0XHRpZiAoX3AgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0X3AgPSAwO1xuXHRcdH1cblxuXHRcdGxldCBfcGFyZW50Y3R4OiBQYXJzZXJSdWxlQ29udGV4dCA9IHRoaXMuX2N0eDtcblx0XHRsZXQgX3BhcmVudFN0YXRlOiBudW1iZXIgPSB0aGlzLnN0YXRlO1xuXHRcdGxldCBfbG9jYWxjdHg6IE5vdEFycmF5VHlwZUNvbnRleHQgPSBuZXcgTm90QXJyYXlUeXBlQ29udGV4dCh0aGlzLl9jdHgsIF9wYXJlbnRTdGF0ZSk7XG5cdFx0bGV0IF9wcmV2Y3R4OiBOb3RBcnJheVR5cGVDb250ZXh0ID0gX2xvY2FsY3R4O1xuXHRcdGxldCBfc3RhcnRTdGF0ZTogbnVtYmVyID0gNTQ7XG5cdFx0dGhpcy5lbnRlclJlY3Vyc2lvblJ1bGUoX2xvY2FsY3R4LCA1NCwgWERvY1N5bnRheFBhcnNlci5SVUxFX25vdEFycmF5VHlwZSwgX3ApO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0bGV0IF9hbHQ6IG51bWJlcjtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDYyMTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEwOSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MTU7XG5cdFx0XHRcdHRoaXMubGFtYmRhVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYxNjtcblx0XHRcdFx0dGhpcy50dXBsZVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MTc7XG5cdFx0XHRcdHRoaXMucHJpbWFyeVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MTg7XG5cdFx0XHRcdHRoaXMucGFyZW50aGVzaXplZFR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MTk7XG5cdFx0XHRcdHRoaXMudW5hcnlUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNjpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjIwO1xuXHRcdFx0XHR0aGlzLm9iamVjdFR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuX2N0eC5fc3RvcCA9IHRoaXMuX2lucHV0LnRyeUxUKC0xKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA2NDY7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTE2LHRoaXMuX2N0eCk7XG5cdFx0XHR3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICkge1xuXHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5fcGFyc2VMaXN0ZW5lcnMhPW51bGwgKSB0aGlzLnRyaWdnZXJFeGl0UnVsZUV2ZW50KCk7XG5cdFx0XHRcdFx0X3ByZXZjdHggPSBfbG9jYWxjdHg7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRfbG9jYWxjdHggPSBuZXcgTm90QXJyYXlUeXBlQ29udGV4dChfcGFyZW50Y3R4LCBfcGFyZW50U3RhdGUpO1xuXHRcdFx0XHRcdHRoaXMucHVzaE5ld1JlY3Vyc2lvbkNvbnRleHQoX2xvY2FsY3R4LCBfc3RhcnRTdGF0ZSwgWERvY1N5bnRheFBhcnNlci5SVUxFX25vdEFycmF5VHlwZSk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYyMztcblx0XHRcdFx0XHRpZiAoISh0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNykpKSB0aHJvdyBuZXcgRmFpbGVkUHJlZGljYXRlRXhjZXB0aW9uKHRoaXMsIFwidGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDcpXCIpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2MjU7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDExMCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2MjQ7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2Mjg7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2Mjc7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYzMTtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2MzA7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2MzM7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKCAhKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuQU1QIHx8IF9sYT09PVhEb2NTeW50YXhQYXJzZXIuUElQRSkgKSB7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVySW5saW5lKHRoaXMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoZWRFT0YgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2MzU7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDExMyx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2MzQ7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2Mzg7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2Mzc7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY0MTtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NDA7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NDM7XG5cdFx0XHRcdFx0dGhpcy5ub3RBcnJheVR5cGUoOCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY0ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTE2LHRoaXMuX2N0eCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMudW5yb2xsUmVjdXJzaW9uQ29udGV4dHMoX3BhcmVudGN0eCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBwcm9wZXJ0eUlkZW50aWZpZXIoKTogUHJvcGVydHlJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogUHJvcGVydHlJZGVudGlmaWVyQ29udGV4dCA9IG5ldyBQcm9wZXJ0eUlkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA1NiwgWERvY1N5bnRheFBhcnNlci5SVUxFX3Byb3BlcnR5SWRlbnRpZmllcik7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjYzO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTE5LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NDk7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjUyOyBcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gMTtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdHN3aXRjaCAoX2FsdCkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NTA7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NTE7XG5cdFx0XHRcdFx0XHR0aGlzLm9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY1NDsgXG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMTcsdGhpcy5fY3R4KTtcblx0XHRcdFx0fSB3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY1Njtcblx0XHRcdFx0dGhpcy5vcHRpb25hbElkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY1OTsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IDE7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRzd2l0Y2ggKF9hbHQpIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjU3O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBFUklPRCk7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjU4O1xuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NjE7IFxuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTE4LHRoaXMuX2N0eCk7XG5cdFx0XHRcdH0gd2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIoKTogT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyQ29udGV4dCA9IG5ldyBPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA1OCwgWERvY1N5bnRheFBhcnNlci5SVUxFX29wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcik7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA2Njc7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMjAsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY2NTtcblx0XHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY2Njtcblx0XHRcdFx0dGhpcy5vcHRpb25hbElkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cblx0cHVibGljIGV4cHJlc3Npb24oKTogRXhwcmVzc2lvbkNvbnRleHQ7XG5cdHB1YmxpYyBleHByZXNzaW9uKF9wOiBudW1iZXIpOiBFeHByZXNzaW9uQ29udGV4dDtcblx0XG5cdHB1YmxpYyBleHByZXNzaW9uKF9wPzogbnVtYmVyKTogRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGlmIChfcCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRfcCA9IDA7XG5cdFx0fVxuXG5cdFx0bGV0IF9wYXJlbnRjdHg6IFBhcnNlclJ1bGVDb250ZXh0ID0gdGhpcy5fY3R4O1xuXHRcdGxldCBfcGFyZW50U3RhdGU6IG51bWJlciA9IHRoaXMuc3RhdGU7XG5cdFx0bGV0IF9sb2NhbGN0eDogRXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgRXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCBfcGFyZW50U3RhdGUpO1xuXHRcdGxldCBfcHJldmN0eDogRXhwcmVzc2lvbkNvbnRleHQgPSBfbG9jYWxjdHg7XG5cdFx0bGV0IF9zdGFydFN0YXRlOiBudW1iZXIgPSA2MDtcblx0XHR0aGlzLmVudGVyUmVjdXJzaW9uUnVsZShfbG9jYWxjdHgsIDYwLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZXhwcmVzc2lvbiwgX3ApO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0bGV0IF9hbHQ6IG51bWJlcjtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDY3Njtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEyMSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NzA7XG5cdFx0XHRcdHRoaXMudW5hcnlFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjcxO1xuXHRcdFx0XHR0aGlzLmFycmF5RXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3Mjtcblx0XHRcdFx0dGhpcy5vYmplY3RFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjczO1xuXHRcdFx0XHR0aGlzLmxhbWJkYUV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NzQ7XG5cdFx0XHRcdHRoaXMubGl0ZXJhbEV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NzU7XG5cdFx0XHRcdHRoaXMucGFyZW50aGVzaXplZEV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuX2N0eC5fc3RvcCA9IHRoaXMuX2lucHV0LnRyeUxUKC0xKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA2OTg7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTI3LHRoaXMuX2N0eCk7XG5cdFx0XHR3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICkge1xuXHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5fcGFyc2VMaXN0ZW5lcnMhPW51bGwgKSB0aGlzLnRyaWdnZXJFeGl0UnVsZUV2ZW50KCk7XG5cdFx0XHRcdFx0X3ByZXZjdHggPSBfbG9jYWxjdHg7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2OTY7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEyNix0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdF9sb2NhbGN0eCA9IG5ldyBFeHByZXNzaW9uQ29udGV4dChfcGFyZW50Y3R4LCBfcGFyZW50U3RhdGUpO1xuXHRcdFx0XHRcdFx0dGhpcy5wdXNoTmV3UmVjdXJzaW9uQ29udGV4dChfbG9jYWxjdHgsIF9zdGFydFN0YXRlLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZXhwcmVzc2lvbik7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjc4O1xuXHRcdFx0XHRcdFx0aWYgKCEodGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDcpKSkgdGhyb3cgbmV3IEZhaWxlZFByZWRpY2F0ZUV4Y2VwdGlvbih0aGlzLCBcInRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA3KVwiKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2ODA7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3OTtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjgyO1xuXHRcdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0XHRpZiAoICEoX2xhPT09WERvY1N5bnRheFBhcnNlci5TVEFSIHx8IF9sYT09PVhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSCkgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2ODQ7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY4Mztcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjg2O1xuXHRcdFx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRfbG9jYWxjdHggPSBuZXcgRXhwcmVzc2lvbkNvbnRleHQoX3BhcmVudGN0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRcdFx0XHRcdHRoaXMucHVzaE5ld1JlY3Vyc2lvbkNvbnRleHQoX2xvY2FsY3R4LCBfc3RhcnRTdGF0ZSwgWERvY1N5bnRheFBhcnNlci5SVUxFX2V4cHJlc3Npb24pO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY4Nztcblx0XHRcdFx0XHRcdGlmICghKHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA2KSkpIHRocm93IG5ldyBGYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24odGhpcywgXCJ0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNilcIik7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjg5O1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2ODg7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5MTtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKCAhKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuUExVUyB8fCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk1JTlVTKSApIHtcblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5Mztcblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjkyO1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2OTU7XG5cdFx0XHRcdFx0XHR0aGlzLmV4cHJlc3Npb24oNyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzAwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMjcsdGhpcy5fY3R4KTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy51bnJvbGxSZWN1cnNpb25Db250ZXh0cyhfcGFyZW50Y3R4KTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHVuYXJ5RXhwcmVzc2lvbigpOiBVbmFyeUV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBVbmFyeUV4cHJlc3Npb25Db250ZXh0ID0gbmV3IFVuYXJ5RXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDYyLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdW5hcnlFeHByZXNzaW9uKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDcwMTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCAhKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuUExVUyB8fCBfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk1JTlVTKSApIHtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDcwMjtcblx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgYXJyYXlFeHByZXNzaW9uKCk6IEFycmF5RXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEFycmF5RXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgQXJyYXlFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNjQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9hcnJheUV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzA0O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfT1BFTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzA2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTI4LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcwNTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDcwOTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEyOSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MDg7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNzEyO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTMwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcxMTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDcxNTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCgoKF9sYSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IF9sYSkgJiAoKDEgPDwgWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQm9vbGVhbkxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU3RyaW5nTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuSUQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5QTFVTKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTUlOVVMpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTikgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfT1BFTikpKSAhPT0gMCkpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzE0O1xuXHRcdFx0XHR0aGlzLmV4cHJlc3Npb24oMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDczMDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0d2hpbGUgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuQ09NTUEpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MTc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MTk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTMyLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcxODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MjI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3MjE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzI1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3MjQ7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3Mjc7XG5cdFx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MzI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNzM0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTM2LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDczMztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDczNztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzM2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA3NDA7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzM5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDc0Mjtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb2JqZWN0RXhwcmVzc2lvbigpOiBPYmplY3RFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDY2LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0RXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA3NDQ7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzQ2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTM5LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc0NTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA3NDk7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNDAsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzQ4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNzUyO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTQxLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc1MTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA3NTU7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTnVtYmVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbCkpKSAhPT0gMCkpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzU0O1xuXHRcdFx0XHR0aGlzLm9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNzU4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTQzLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc1Nztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA3NjE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzYwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDc2NDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzYzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA3NjY7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uKCk6IE9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNjgsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA3Njg7XG5cdFx0XHR0aGlzLm9iamVjdFBhaXJFeHByZXNzaW9uKCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzg1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE1MCx0aGlzLl9jdHgpO1xuXHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NzA7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzY5O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzcyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc3NDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTQ3LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc3Mztcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc3Nztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc3Njtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzgwO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc3OTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc4Mjtcblx0XHRcdFx0XHR0aGlzLm9iamVjdFBhaXJFeHByZXNzaW9uKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc4Nztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTUwLHRoaXMuX2N0eCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9iamVjdFBhaXJFeHByZXNzaW9uKCk6IE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0ID0gbmV3IE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNzAsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RQYWlyRXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gODA4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTU1LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3ODg7XG5cdFx0XHRcdHRoaXMubGl0ZXJhbEV4cHJlc3Npb24oKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc5MDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc4OTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3OTI7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3OTQ7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3OTM7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzk2O1xuXHRcdFx0XHR0aGlzLm9iamVjdEV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzk4O1xuXHRcdFx0XHR0aGlzLmxpdGVyYWxFeHByZXNzaW9uKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MDA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3OTk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODAyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODA0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODAzO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgwNjtcblx0XHRcdFx0dGhpcy5saXRlcmFsRXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBsYW1iZGFFeHByZXNzaW9uKCk6IExhbWJkYUV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBMYW1iZGFFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBMYW1iZGFFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNzIsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9sYW1iZGFFeHByZXNzaW9uKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA4ODA7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgxMDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODEyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE1Nix0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4MTE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgxNTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNTcsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODE0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgxODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNTgsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODE3O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MjE7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLklEKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4MjA7XG5cdFx0XHRcdFx0dGhpcy5mb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MjQ7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTYwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgyMztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODI3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4MjY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MzA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4Mjk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODMyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fQ0xPU0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODM0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE2Myx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4MzM7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgzNztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODM2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODQwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODM5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg0Mjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkFSUk9XKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg0NDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNjYsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODQzO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NDc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg0Njtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg1MDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg0OTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NTI7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg1NDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNjksdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODUzO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5RVUVTVElPTik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuSUQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NTY7XG5cdFx0XHRcdHRoaXMucGFyYW1ldGVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NTg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTcwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg1Nztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODYxO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NjA7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NjQ7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4NjM7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODY2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQVJST1cpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODY4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE3Myx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4Njc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg3MTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODcwO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODc0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1N5bnRheFBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODczO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg3Njtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODc4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE3Nix0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4Nzc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlFVRVNUSU9OKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgbGl0ZXJhbEV4cHJlc3Npb24oKTogTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA3NCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2xpdGVyYWxFeHByZXNzaW9uKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDg4Mjtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCAhKCgoKF9sYSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IF9sYSkgJiAoKDEgPDwgWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQm9vbGVhbkxpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU3RyaW5nTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsKSkpICE9PSAwKSkgKSB7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgcGFyZW50aGVzaXplZEV4cHJlc3Npb24oKTogUGFyZW50aGVzaXplZEV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgUGFyZW50aGVzaXplZEV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA3NiwgWERvY1N5bnRheFBhcnNlci5SVUxFX3BhcmVudGhlc2l6ZWRFeHByZXNzaW9uKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDg4NDtcblx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA4ODY7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jU3ludGF4UGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg4NTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gODg4O1xuXHRcdFx0dGhpcy5leHByZXNzaW9uKDApO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDg5MDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODg5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA4OTI7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fQ0xPU0UpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBkZXNjcmlwdGlvbigpOiBEZXNjcmlwdGlvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IERlc2NyaXB0aW9uQ29udGV4dCA9IG5ldyBEZXNjcmlwdGlvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDc4LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZGVzY3JpcHRpb24pO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA4OTQ7XG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uTGluZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmUoKTogRGVzY3JpcHRpb25MaW5lQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogRGVzY3JpcHRpb25MaW5lQ29udGV4dCA9IG5ldyBEZXNjcmlwdGlvbkxpbmVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA4MCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTEwO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQm9vbGVhbkxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklEOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlNQQUNFOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5NSU5VUzpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNPTE9OOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBFUklPRDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODk2O1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uTGluZVN0YXJ0KCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MDA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdHdoaWxlICgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTnVtYmVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLklEKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5BVCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk1JTlVTKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkNPTE9OKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuSU5MSU5FX1RBR19TVEFSVCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4pIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSkpKSAhPT0gMCkpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4OTc7XG5cdFx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbkxpbmVFbGVtZW50KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTAyO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklOTElORV9UQUdfU1RBUlQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MDM7XG5cdFx0XHRcdHRoaXMuaW5saW5lVGFnKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MDc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdHdoaWxlICgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NTeW50YXhQYXJzZXIuTnVtYmVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWwpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLklEKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5BVCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk1JTlVTKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkNPTE9OKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuSU5MSU5FX1RBR19TVEFSVCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4pIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSkpKSAhPT0gMCkpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5MDQ7XG5cdFx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbkxpbmVFbGVtZW50KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTA5O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVTdGFydCgpOiBEZXNjcmlwdGlvbkxpbmVTdGFydENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IERlc2NyaXB0aW9uTGluZVN0YXJ0Q29udGV4dCA9IG5ldyBEZXNjcmlwdGlvbkxpbmVTdGFydENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDgyLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lU3RhcnQpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0bGV0IF9hbHQ6IG51bWJlcjtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDkxMztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTEyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA5MTY7IFxuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IDE7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHN3aXRjaCAoX2FsdCkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTE1O1xuXHRcdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25UZXh0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkxODsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE4NCx0aGlzLl9jdHgpO1xuXHRcdFx0fSB3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICk7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTI1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE4Nix0aGlzLl9jdHgpO1xuXHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkyMztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5Cb29sZWFuTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU3RyaW5nTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklEOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQ6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk1JTlVTOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5DT0xPTjpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5MjA7XG5cdFx0XHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uVGV4dCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlNQQUNFOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkyMTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQVQ6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTIyO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkFUKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkyNztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTg2LHRoaXMuX2N0eCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGRlc2NyaXB0aW9uVGV4dCgpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEZXNjcmlwdGlvblRleHRDb250ZXh0ID0gbmV3IERlc2NyaXB0aW9uVGV4dENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDg0LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZGVzY3JpcHRpb25UZXh0KTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDkzNztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5Mjg7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklEOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTI5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuSUQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0g6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDMpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MzA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA0KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTMxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0U6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDUpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MzI7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQ09MT046XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDYpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MzM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5DT0xPTik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTUlOVVM6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDcpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5MzQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA4KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTM1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJvb2xlYW5MaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU3RyaW5nTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5OdWxsTGl0ZXJhbDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgOSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDkzNjtcblx0XHRcdFx0dGhpcy5saXRlcmFsRXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVFbGVtZW50KCk6IERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dCA9IG5ldyBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgODYsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbkxpbmVFbGVtZW50KTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDk0MTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JTkxJTkVfVEFHX1NUQVJUOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTM5O1xuXHRcdFx0XHR0aGlzLmlubGluZVRhZygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bWJlckxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQm9vbGVhbkxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TdHJpbmdMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklEOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlNQQUNFOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5BVDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5NSU5VUzpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNPTE9OOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBFUklPRDpcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTQwO1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uTGluZVRleHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lVGV4dCgpOiBEZXNjcmlwdGlvbkxpbmVUZXh0Q29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogRGVzY3JpcHRpb25MaW5lVGV4dENvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25MaW5lVGV4dENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDg4LCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lVGV4dCk7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA5NDY7IFxuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IDE7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHN3aXRjaCAoX2FsdCkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5NDY7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuTnVtYmVyTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQm9vbGVhbkxpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkNoYXJhY3RlckxpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5JRDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UOlxuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5NSU5VUzpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQ09MT046XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLlBFUklPRDpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0U6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gOTQzO1xuXHRcdFx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvblRleHQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5TUEFDRTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5NDQ7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkFUOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk0NTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5BVCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5NDg7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxOTAsdGhpcy5fY3R4KTtcblx0XHRcdH0gd2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBpbmxpbmVUYWcoKTogSW5saW5lVGFnQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogSW5saW5lVGFnQ29udGV4dCA9IG5ldyBJbmxpbmVUYWdDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA5MCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2lubGluZVRhZyk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA5NTA7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NTeW50YXhQYXJzZXIuSU5MSU5FX1RBR19TVEFSVCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTUxO1xuXHRcdFx0dGhpcy5pbmxpbmVUYWdOYW1lKCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTUyO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA5NTQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NTeW50YXhQYXJzZXIuSUQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTikpKSAhPT0gMCkpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTUzO1xuXHRcdFx0XHR0aGlzLmlubGluZVRhZ0JvZHkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gOTU2O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgaW5saW5lVGFnTmFtZSgpOiBJbmxpbmVUYWdOYW1lQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogSW5saW5lVGFnTmFtZUNvbnRleHQgPSBuZXcgSW5saW5lVGFnTmFtZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDkyLCBYRG9jU3ludGF4UGFyc2VyLlJVTEVfaW5saW5lVGFnTmFtZSk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDk1ODtcblx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBpbmxpbmVUYWdCb2R5KCk6IElubGluZVRhZ0JvZHlDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBJbmxpbmVUYWdCb2R5Q29udGV4dCA9IG5ldyBJbmxpbmVUYWdCb2R5Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOTQsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pbmxpbmVUYWdCb2R5KTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDk2MTsgXG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGRvIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5NjA7XG5cdFx0XHRcdHRoaXMuYnJhY2VCb2R5KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTYzOyBcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdH0gd2hpbGUgKCAoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NTeW50YXhQYXJzZXIuSUQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfT1BFTikpKSAhPT0gMCkgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgYnJhY2VFeHByZXNzaW9uKCk6IEJyYWNlRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEJyYWNlRXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgQnJhY2VFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOTYsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9icmFjZUV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gOTY1O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDk2OTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0d2hpbGUgKCgoKF9sYSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IF9sYSkgJiAoKDEgPDwgWERvY1N5bnRheFBhcnNlci5JRCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5TUEFDRSkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVCkgfCAoMSA8PCBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0gpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5QRVJJT0QpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOKSkpICE9PSAwKSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk2Njtcblx0XHRcdFx0dGhpcy5icmFjZUJvZHkoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA5NzE7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gOTcyO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgYnJhY2VCb2R5KCk6IEJyYWNlQm9keUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEJyYWNlQm9keUNvbnRleHQgPSBuZXcgQnJhY2VCb2R5Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOTgsIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9icmFjZUJvZHkpO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDk4Mztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTc0O1xuXHRcdFx0XHR0aGlzLmJyYWNlRXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLklEOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkU6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuU1BBQ0U6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5UOlxuXHRcdFx0Y2FzZSBYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0g6XG5cdFx0XHRjYXNlIFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTc1O1xuXHRcdFx0XHR0aGlzLmJyYWNlVGV4dCgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gOTgwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxOTQsdGhpcy5fY3R4KTtcblx0XHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk3Njtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA5Nzc7XG5cdFx0XHRcdFx0XHR0aGlzLmJyYWNlVGV4dCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDk4Mjtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE5NCx0aGlzLl9jdHgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGJyYWNlVGV4dCgpOiBCcmFjZVRleHRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBCcmFjZVRleHRDb250ZXh0ID0gbmV3IEJyYWNlVGV4dENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDEwMCwgWERvY1N5bnRheFBhcnNlci5SVUxFX2JyYWNlVGV4dCk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA5ODU7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICggISgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NTeW50YXhQYXJzZXIuSUQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgWERvY1N5bnRheFBhcnNlci5GT1JXQVJEX1NMQVNIKSB8ICgxIDw8IFhEb2NTeW50YXhQYXJzZXIuUEVSSU9EKSkpICE9PSAwKSkgKSB7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cblx0cHVibGljIHNlbXByZWQoX2xvY2FsY3R4OiBSdWxlQ29udGV4dCwgcnVsZUluZGV4OiBudW1iZXIsIHByZWRJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0c3dpdGNoIChydWxlSW5kZXgpIHtcblx0XHRjYXNlIDEyOlxuXHRcdFx0cmV0dXJuIHRoaXMudHlwZV9zZW1wcmVkKF9sb2NhbGN0eCBhcyBUeXBlQ29udGV4dCwgcHJlZEluZGV4KTtcblxuXHRcdGNhc2UgMjc6XG5cdFx0XHRyZXR1cm4gdGhpcy5ub3RBcnJheVR5cGVfc2VtcHJlZChfbG9jYWxjdHggYXMgTm90QXJyYXlUeXBlQ29udGV4dCwgcHJlZEluZGV4KTtcblxuXHRcdGNhc2UgMzA6XG5cdFx0XHRyZXR1cm4gdGhpcy5leHByZXNzaW9uX3NlbXByZWQoX2xvY2FsY3R4IGFzIEV4cHJlc3Npb25Db250ZXh0LCBwcmVkSW5kZXgpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRwcml2YXRlIHR5cGVfc2VtcHJlZChfbG9jYWxjdHg6IFR5cGVDb250ZXh0LCBwcmVkSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHN3aXRjaCAocHJlZEluZGV4KSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA4KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cHJpdmF0ZSBub3RBcnJheVR5cGVfc2VtcHJlZChfbG9jYWxjdHg6IE5vdEFycmF5VHlwZUNvbnRleHQsIHByZWRJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0c3dpdGNoIChwcmVkSW5kZXgpIHtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gdGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRwcml2YXRlIGV4cHJlc3Npb25fc2VtcHJlZChfbG9jYWxjdHg6IEV4cHJlc3Npb25Db250ZXh0LCBwcmVkSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHN3aXRjaCAocHJlZEluZGV4KSB7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA3KTtcblxuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiB0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNik7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3NlcmlhbGl6ZWRBVE5TZWdtZW50czogbnVtYmVyID0gMjtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3NlcmlhbGl6ZWRBVE5TZWdtZW50MDogc3RyaW5nID1cblx0XHRcIlxceDAzXFx1QUY2RlxcdTgzMjBcXHU0NzlEXFx1Qjc1Q1xcdTQ4ODBcXHUxNjA1XFx1MTkxQ1xcdUFCMzdcXHgwMyRcXHUwM0RFXFx4MDRcXHgwMlwiK1xuXHRcdFwiXFx0XFx4MDJcXHgwNFxceDAzXFx0XFx4MDNcXHgwNFxceDA0XFx0XFx4MDRcXHgwNFxceDA1XFx0XFx4MDVcXHgwNFxceDA2XFx0XFx4MDZcXHgwNFxceDA3XCIrXG5cdFx0XCJcXHRcXHgwN1xceDA0XFxiXFx0XFxiXFx4MDRcXHRcXHRcXHRcXHgwNFxcblxcdFxcblxceDA0XFx2XFx0XFx2XFx4MDRcXGZcXHRcXGZcXHgwNFxcclxcdFxcclxceDA0XCIrXG5cdFx0XCJcXHgwRVxcdFxceDBFXFx4MDRcXHgwRlxcdFxceDBGXFx4MDRcXHgxMFxcdFxceDEwXFx4MDRcXHgxMVxcdFxceDExXFx4MDRcXHgxMlxcdFxceDEyXFx4MDRcIitcblx0XHRcIlxceDEzXFx0XFx4MTNcXHgwNFxceDE0XFx0XFx4MTRcXHgwNFxceDE1XFx0XFx4MTVcXHgwNFxceDE2XFx0XFx4MTZcXHgwNFxceDE3XFx0XFx4MTdcXHgwNFwiK1xuXHRcdFwiXFx4MThcXHRcXHgxOFxceDA0XFx4MTlcXHRcXHgxOVxceDA0XFx4MUFcXHRcXHgxQVxceDA0XFx4MUJcXHRcXHgxQlxceDA0XFx4MUNcXHRcXHgxQ1xceDA0XCIrXG5cdFx0XCJcXHgxRFxcdFxceDFEXFx4MDRcXHgxRVxcdFxceDFFXFx4MDRcXHgxRlxcdFxceDFGXFx4MDQgXFx0IFxceDA0IVxcdCFcXHgwNFxcXCJcXHRcXFwiXFx4MDQjXCIrXG5cdFx0XCJcXHQjXFx4MDQkXFx0JFxceDA0JVxcdCVcXHgwNCZcXHQmXFx4MDRcXCdcXHRcXCdcXHgwNChcXHQoXFx4MDQpXFx0KVxceDA0KlxcdCpcXHgwNCtcXHQrXCIrXG5cdFx0XCJcXHgwNCxcXHQsXFx4MDQtXFx0LVxceDA0LlxcdC5cXHgwNC9cXHQvXFx4MDQwXFx0MFxceDA0MVxcdDFcXHgwNDJcXHQyXFx4MDQzXFx0M1xceDA0NFwiK1xuXHRcdFwiXFx0NFxceDAzXFx4MDJcXHgwM1xceDAyXFx4MDNcXHgwMlxceDA1XFx4MDJsXFxuXFx4MDJcXHgwM1xceDAyXFx4MDNcXHgwMlxceDA1XFx4MDJwXFxuXCIrXG5cdFx0XCJcXHgwMlxceDAzXFx4MDNcXHgwN1xceDAzc1xcblxceDAzXFxmXFx4MDNcXHgwRVxceDAzdlxcdlxceDAzXFx4MDNcXHgwM1xceDAzXFx4MDNcXHgwM1xceDA0XCIrXG5cdFx0XCJcXHgwM1xceDA0XFx4MDNcXHgwNVxceDAzXFx4MDVcXHgwM1xceDA1XFx4MDdcXHgwNVxceDdGXFxuXFx4MDVcXGZcXHgwNVxceDBFXFx4MDVcXHg4MlxcdlwiK1xuXHRcdFwiXFx4MDVcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceDg4XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlwiK1xuXHRcdFwiXFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XCIrXG5cdFx0XCJcXHgwM1xceDA2XFx4MDVcXHgwNlxceDk2XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHg5QVxcblxceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEEzXFxuXFx4MDZcXHgwM1xceDA2XCIrXG5cdFx0XCJcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcIitcblx0XHRcIlxceDA1XFx4MDZcXHhBRlxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEI0XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEJFXFxuXFx4MDZcIitcblx0XHRcIlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEMyXFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhDQVxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4Q0VcXG5cXHgwNlxceDAzXFx4MDZcIitcblx0XHRcIlxceDAzXFx4MDZcXHgwNVxceDA2XFx4RDJcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEQ2XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhERVxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcIitcblx0XHRcIlxceDA1XFx4MDZcXHhFMlxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEU3XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEYxXFxuXFx4MDZcIitcblx0XHRcIlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEY1XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhGOVxcblxceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhGRFxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxcdTAxMDJcXG5cIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxcdTAxMEFcXG5cXHgwNlwiK1xuXHRcdFwiXFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx1MDEwRVxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XCIrXG5cdFx0XCJcXHgwNlxcdTAxMTRcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxcdTAxMThcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDVcXHgwNlxcdTAxMURcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx1MDEyM1wiK1xuXHRcdFwiXFxuXFx4MDZcXHgwM1xceDA3XFx4MDNcXHgwN1xceDAzXFx4MDdcXHgwM1xcYlxceDAzXFxiXFx4MDNcXGJcXHgwNVxcYlxcdTAxMkJcXG5cXGJcXHgwM1xcdFwiK1xuXHRcdFwiXFx4MDNcXHRcXHgwM1xcdFxceDA2XFx0XFx1MDEzMFxcblxcdFxcclxcdFxceDBFXFx0XFx1MDEzMVxceDAzXFx0XFx4MDNcXHRcXHgwM1xcdFxceDA2XFx0XFx1MDEzN1wiK1xuXHRcdFwiXFxuXFx0XFxyXFx0XFx4MEVcXHRcXHUwMTM4XFx4MDVcXHRcXHUwMTNCXFxuXFx0XFx4MDNcXG5cXHgwM1xcblxceDAzXFx2XFx4MDNcXHZcXHgwNVxcdlxcdTAxNDFcIitcblx0XHRcIlxcblxcdlxceDAzXFxmXFx4MDNcXGZcXHgwM1xcclxceDAzXFxyXFx4MDNcXHJcXHgwM1xceDBFXFx4MDNcXHgwRVxceDAzXFx4MEVcXHgwM1xceDBFXFx4MDNcIitcblx0XHRcIlxceDBFXFx4MDNcXHgwRVxceDAzXFx4MEVcXHgwM1xceDBFXFx4MDVcXHgwRVxcdTAxNTBcXG5cXHgwRVxceDAzXFx4MEVcXHgwM1xceDBFXFx4MDVcXHgwRVwiK1xuXHRcdFwiXFx1MDE1NFxcblxceDBFXFx4MDNcXHgwRVxceDA1XFx4MEVcXHUwMTU3XFxuXFx4MEVcXHgwM1xceDBFXFx4MDVcXHgwRVxcdTAxNUFcXG5cXHgwRVxceDAzXCIrXG5cdFx0XCJcXHgwRVxceDAzXFx4MEVcXHgwNVxceDBFXFx1MDE1RVxcblxceDBFXFx4MDNcXHgwRVxceDA1XFx4MEVcXHUwMTYxXFxuXFx4MEVcXHgwM1xceDBFXFx4MDVcIitcblx0XHRcIlxceDBFXFx1MDE2NFxcblxceDBFXFx4MDNcXHgwRVxceDA3XFx4MEVcXHUwMTY3XFxuXFx4MEVcXGZcXHgwRVxceDBFXFx4MEVcXHUwMTZBXFx2XFx4MEVcIitcblx0XHRcIlxceDAzXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxNkVcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE3MVxcblxceDBGXFx4MDNcXHgwRlwiK1xuXHRcdFwiXFx4MDVcXHgwRlxcdTAxNzRcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE3N1xcblxceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTdBXCIrXG5cdFx0XCJcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE3RFxcblxceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTgwXFxuXFx4MEZcXHgwM1xceDBGXCIrXG5cdFx0XCJcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxODRcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE4N1xcblxceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcIitcblx0XHRcIlxcdTAxOEFcXG5cXHgwRlxceDAzXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxOEVcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE5MVwiK1xuXHRcdFwiXFxuXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxOTRcXG5cXHgwRlxceDAzXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxOThcXG5cXHgwRlwiK1xuXHRcdFwiXFx4MDNcXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDE5Q1xcblxceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTlGXFxuXFx4MEZcXHgwM1xceDBGXCIrXG5cdFx0XCJcXHgwNVxceDBGXFx1MDFBMlxcblxceDBGXFx4MDNcXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDFBNlxcblxceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcIitcblx0XHRcIlxcdTAxQTlcXG5cXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDFBQ1xcblxceDBGXFx4MDNcXHgwRlxceDAzXFx4MEZcXHgwNVxceDBGXFx1MDFCMFwiK1xuXHRcdFwiXFxuXFx4MEZcXHgwNVxceDBGXFx1MDFCMlxcblxceDBGXFx4MDNcXHgxMFxceDAzXFx4MTBcXHgwM1xceDEwXFx4MDVcXHgxMFxcdTAxQjdcXG5cXHgxMFwiK1xuXHRcdFwiXFx4MDNcXHgxMFxceDA1XFx4MTBcXHUwMUJBXFxuXFx4MTBcXHgwM1xceDEwXFx4MDdcXHgxMFxcdTAxQkRcXG5cXHgxMFxcZlxceDEwXFx4MEVcXHgxMFwiK1xuXHRcdFwiXFx1MDFDMFxcdlxceDEwXFx4MDNcXHgxMVxceDAzXFx4MTFcXHgwNVxceDExXFx1MDFDNFxcblxceDExXFx4MDNcXHgxMVxceDAzXFx4MTFcXHgwNVxceDExXCIrXG5cdFx0XCJcXHUwMUM4XFxuXFx4MTFcXHgwM1xceDExXFx4MDVcXHgxMVxcdTAxQ0JcXG5cXHgxMVxceDAzXFx4MTJcXHgwNVxceDEyXFx1MDFDRVxcblxceDEyXFx4MDNcIitcblx0XHRcIlxceDEyXFx4MDNcXHgxMlxceDA1XFx4MTJcXHUwMUQyXFxuXFx4MTJcXHgwM1xceDEyXFx4MDNcXHgxMlxceDA1XFx4MTJcXHUwMUQ2XFxuXFx4MTJcXHgwM1wiK1xuXHRcdFwiXFx4MTJcXHgwM1xceDEyXFx4MDNcXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXFx1MDFEQ1xcblxceDEzXFx4MDNcXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXCIrXG5cdFx0XCJcXHUwMUUwXFxuXFx4MTNcXHgwM1xceDEzXFx4MDdcXHgxM1xcdTAxRTNcXG5cXHgxM1xcZlxceDEzXFx4MEVcXHgxM1xcdTAxRTZcXHZcXHgxM1xceDAzXCIrXG5cdFx0XCJcXHgxNFxceDAzXFx4MTRcXHgwM1xceDE0XFx4MDVcXHgxNFxcdTAxRUJcXG5cXHgxNFxceDAzXFx4MTVcXHgwM1xceDE1XFx4MDVcXHgxNVxcdTAxRUZcIitcblx0XHRcIlxcblxceDE1XFx4MDNcXHgxNlxceDAzXFx4MTZcXHgwM1xceDE3XFx4MDNcXHgxN1xceDA1XFx4MTdcXHUwMUY1XFxuXFx4MTdcXHgwM1xceDE3XFx4MDNcIitcblx0XHRcIlxceDE3XFx4MDVcXHgxN1xcdTAxRjlcXG5cXHgxN1xceDAzXFx4MTdcXHgwM1xceDE3XFx4MDNcXHgxOFxceDAzXFx4MThcXHgwM1xceDE4XFx4MDNcXHgxOVwiK1xuXHRcdFwiXFx4MDNcXHgxOVxceDA1XFx4MTlcXHUwMjAyXFxuXFx4MTlcXHgwM1xceDE5XFx4MDVcXHgxOVxcdTAyMDVcXG5cXHgxOVxceDAzXFx4MTlcXHgwNVxceDE5XCIrXG5cdFx0XCJcXHUwMjA4XFxuXFx4MTlcXHgwM1xceDE5XFx4MDVcXHgxOVxcdTAyMEJcXG5cXHgxOVxceDAzXFx4MTlcXHgwNVxceDE5XFx1MDIwRVxcblxceDE5XFx4MDNcIitcblx0XHRcIlxceDE5XFx4MDVcXHgxOVxcdTAyMTFcXG5cXHgxOVxceDAzXFx4MTlcXHgwNVxceDE5XFx1MDIxNFxcblxceDE5XFx4MDNcXHgxOVxceDAzXFx4MTlcXHgwM1wiK1xuXHRcdFwiXFx4MUFcXHgwM1xceDFBXFx4MDVcXHgxQVxcdTAyMUFcXG5cXHgxQVxceDAzXFx4MUFcXHgwM1xceDFBXFx4MDVcXHgxQVxcdTAyMUVcXG5cXHgxQVxceDAzXCIrXG5cdFx0XCJcXHgxQVxceDA1XFx4MUFcXHUwMjIxXFxuXFx4MUFcXHgwM1xceDFBXFx4MDVcXHgxQVxcdTAyMjRcXG5cXHgxQVxceDAzXFx4MUFcXHgwN1xceDFBXFx1MDIyN1wiK1xuXHRcdFwiXFxuXFx4MUFcXGZcXHgxQVxceDBFXFx4MUFcXHUwMjJBXFx2XFx4MUFcXHgwM1xceDFCXFx4MDNcXHgxQlxceDA1XFx4MUJcXHUwMjJFXFxuXFx4MUJcXHgwM1wiK1xuXHRcdFwiXFx4MUJcXHgwNVxceDFCXFx1MDIzMVxcblxceDFCXFx4MDNcXHgxQlxceDAzXFx4MUJcXHgwNVxceDFCXFx1MDIzNVxcblxceDFCXFx4MDNcXHgxQlxceDAzXCIrXG5cdFx0XCJcXHgxQlxceDAzXFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1xcdTAyM0JcXG5cXHgxQ1xceDAzXFx4MUNcXHgwNVxceDFDXFx1MDIzRVxcblxceDFDXFx4MDNcIitcblx0XHRcIlxceDFDXFx4MDVcXHgxQ1xcdTAyNDFcXG5cXHgxQ1xceDAzXFx4MUNcXHgwNVxceDFDXFx1MDI0NFxcblxceDFDXFx4MDNcXHgxQ1xceDAzXFx4MUNcXHgwNVwiK1xuXHRcdFwiXFx4MUNcXHUwMjQ4XFxuXFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1xcdTAyNEJcXG5cXHgxQ1xceDAzXFx4MUNcXHgwNVxceDFDXFx1MDI0RVxcblxceDFDXCIrXG5cdFx0XCJcXHgwM1xceDFDXFx4MDdcXHgxQ1xcdTAyNTFcXG5cXHgxQ1xcZlxceDFDXFx4MEVcXHgxQ1xcdTAyNTRcXHZcXHgxQ1xceDAzXFx4MUNcXHgwNVxceDFDXCIrXG5cdFx0XCJcXHUwMjU3XFxuXFx4MUNcXHgwM1xceDFDXFx4MDVcXHgxQ1xcdTAyNUFcXG5cXHgxQ1xceDAzXFx4MUNcXHgwNVxceDFDXFx1MDI1RFxcblxceDFDXFx4MDNcIitcblx0XHRcIlxceDFDXFx4MDNcXHgxQ1xceDAzXFx4MUNcXHgwM1xceDFDXFx4MDZcXHgxQ1xcdTAyNjNcXG5cXHgxQ1xcclxceDFDXFx4MEVcXHgxQ1xcdTAyNjRcXHgwNVwiK1xuXHRcdFwiXFx4MUNcXHUwMjY3XFxuXFx4MUNcXHgwM1xceDFEXFx4MDNcXHgxRFxceDAzXFx4MURcXHgwM1xceDFEXFx4MDNcXHgxRFxceDAzXFx4MURcXHgwM1xceDFEXCIrXG5cdFx0XCJcXHgwNVxceDFEXFx1MDI3MFxcblxceDFEXFx4MDNcXHgxRFxceDAzXFx4MURcXHgwNVxceDFEXFx1MDI3NFxcblxceDFEXFx4MDNcXHgxRFxceDA1XFx4MURcIitcblx0XHRcIlxcdTAyNzdcXG5cXHgxRFxceDAzXFx4MURcXHgwNVxceDFEXFx1MDI3QVxcblxceDFEXFx4MDNcXHgxRFxceDAzXFx4MURcXHgwNVxceDFEXFx1MDI3RVwiK1xuXHRcdFwiXFxuXFx4MURcXHgwM1xceDFEXFx4MDVcXHgxRFxcdTAyODFcXG5cXHgxRFxceDAzXFx4MURcXHgwNVxceDFEXFx1MDI4NFxcblxceDFEXFx4MDNcXHgxRFwiK1xuXHRcdFwiXFx4MDdcXHgxRFxcdTAyODdcXG5cXHgxRFxcZlxceDFEXFx4MEVcXHgxRFxcdTAyOEFcXHZcXHgxRFxceDAzXFx4MUVcXHgwM1xceDFFXFx4MDNcXHgxRVwiK1xuXHRcdFwiXFx4MDZcXHgxRVxcdTAyOEZcXG5cXHgxRVxcclxceDFFXFx4MEVcXHgxRVxcdTAyOTBcXHgwM1xceDFFXFx4MDNcXHgxRVxceDAzXFx4MUVcXHgwNlxceDFFXCIrXG5cdFx0XCJcXHUwMjk2XFxuXFx4MUVcXHJcXHgxRVxceDBFXFx4MUVcXHUwMjk3XFx4MDVcXHgxRVxcdTAyOUFcXG5cXHgxRVxceDAzXFx4MUZcXHgwM1xceDFGXFx4MDVcIitcblx0XHRcIlxceDFGXFx1MDI5RVxcblxceDFGXFx4MDMgXFx4MDMgXFx4MDMgXFx4MDMgXFx4MDMgXFx4MDMgXFx4MDMgXFx4MDUgXFx1MDJBN1xcbiBcXHgwM1wiK1xuXHRcdFwiIFxceDAzIFxceDA1IFxcdTAyQUJcXG4gXFx4MDMgXFx4MDMgXFx4MDUgXFx1MDJBRlxcbiBcXHgwMyBcXHgwMyBcXHgwMyBcXHgwNSBcXHUwMkI0XCIrXG5cdFx0XCJcXG4gXFx4MDMgXFx4MDMgXFx4MDUgXFx1MDJCOFxcbiBcXHgwMyBcXHgwNyBcXHUwMkJCXFxuIFxcZiBcXHgwRSBcXHUwMkJFXFx2IFxceDAzIVxceDAzXCIrXG5cdFx0XCIhXFx4MDMhXFx4MDNcXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDJDNVxcblxcXCJcXHgwM1xcXCJcXHgwNVxcXCJcXHUwMkM4XFxuXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAyQ0JcIitcblx0XHRcIlxcblxcXCJcXHgwM1xcXCJcXHgwNVxcXCJcXHUwMkNFXFxuXFxcIlxceDAzXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAyRDJcXG5cXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDJENVwiK1xuXHRcdFwiXFxuXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAyRDhcXG5cXFwiXFx4MDNcXFwiXFx4MDdcXFwiXFx1MDJEQlxcblxcXCJcXGZcXFwiXFx4MEVcXFwiXFx1MDJERVxcdlxcXCJcXHgwM1wiK1xuXHRcdFwiXFxcIlxceDA1XFxcIlxcdTAyRTFcXG5cXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDJFNFxcblxcXCJcXHgwM1xcXCJcXHgwNVxcXCJcXHUwMkU3XFxuXFxcIlxceDAzXFxcIlxceDAzXCIrXG5cdFx0XCJcXFwiXFx4MDMjXFx4MDMjXFx4MDUjXFx1MDJFRFxcbiNcXHgwMyNcXHgwNSNcXHUwMkYwXFxuI1xceDAzI1xceDA1I1xcdTAyRjNcXG4jXFx4MDMjXCIrXG5cdFx0XCJcXHgwNSNcXHUwMkY2XFxuI1xceDAzI1xceDA1I1xcdTAyRjlcXG4jXFx4MDMjXFx4MDUjXFx1MDJGQ1xcbiNcXHgwMyNcXHgwNSNcXHUwMkZGXFxuXCIrXG5cdFx0XCIjXFx4MDMjXFx4MDMjXFx4MDMkXFx4MDMkXFx4MDUkXFx1MDMwNVxcbiRcXHgwMyRcXHgwMyRcXHgwNSRcXHUwMzA5XFxuJFxceDAzJFxceDA1JFwiK1xuXHRcdFwiXFx1MDMwQ1xcbiRcXHgwMyRcXHgwNSRcXHUwMzBGXFxuJFxceDAzJFxceDA3JFxcdTAzMTJcXG4kXFxmJFxceDBFJFxcdTAzMTVcXHYkXFx4MDMlXCIrXG5cdFx0XCJcXHgwMyVcXHgwNSVcXHUwMzE5XFxuJVxceDAzJVxceDAzJVxceDA1JVxcdTAzMURcXG4lXFx4MDMlXFx4MDMlXFx4MDMlXFx4MDMlXFx4MDUlXFx1MDMyM1wiK1xuXHRcdFwiXFxuJVxceDAzJVxceDAzJVxceDA1JVxcdTAzMjdcXG4lXFx4MDMlXFx4MDMlXFx4MDUlXFx1MDMyQlxcbiVcXHgwMyZcXHgwMyZcXHgwNSZcXHUwMzJGXCIrXG5cdFx0XCJcXG4mXFx4MDMmXFx4MDUmXFx1MDMzMlxcbiZcXHgwMyZcXHgwNSZcXHUwMzM1XFxuJlxceDAzJlxceDA1JlxcdTAzMzhcXG4mXFx4MDMmXFx4MDVcIitcblx0XHRcIiZcXHUwMzNCXFxuJlxceDAzJlxceDA1JlxcdTAzM0VcXG4mXFx4MDMmXFx4MDUmXFx1MDM0MVxcbiZcXHgwMyZcXHgwMyZcXHgwNSZcXHUwMzQ1XCIrXG5cdFx0XCJcXG4mXFx4MDMmXFx4MDUmXFx1MDM0OFxcbiZcXHgwMyZcXHgwNSZcXHUwMzRCXFxuJlxceDAzJlxceDAzJlxceDA1JlxcdTAzNEZcXG4mXFx4MDNcIitcblx0XHRcIiZcXHgwNSZcXHUwMzUyXFxuJlxceDAzJlxceDA1JlxcdTAzNTVcXG4mXFx4MDMmXFx4MDMmXFx4MDUmXFx1MDM1OVxcbiZcXHgwMyZcXHgwMyZcXHgwNVwiK1xuXHRcdFwiJlxcdTAzNURcXG4mXFx4MDMmXFx4MDUmXFx1MDM2MFxcbiZcXHgwMyZcXHgwNSZcXHUwMzYzXFxuJlxceDAzJlxceDAzJlxceDA1JlxcdTAzNjdcIitcblx0XHRcIlxcbiZcXHgwMyZcXHgwNSZcXHUwMzZBXFxuJlxceDAzJlxceDA1JlxcdTAzNkRcXG4mXFx4MDMmXFx4MDMmXFx4MDUmXFx1MDM3MVxcbiZcXHgwNVwiK1xuXHRcdFwiJlxcdTAzNzNcXG4mXFx4MDNcXCdcXHgwM1xcJ1xceDAzKFxceDAzKFxceDA1KFxcdTAzNzlcXG4oXFx4MDMoXFx4MDMoXFx4MDUoXFx1MDM3RFxcblwiK1xuXHRcdFwiKFxceDAzKFxceDAzKFxceDAzKVxceDAzKVxceDAzKlxceDAzKlxceDA3KlxcdTAzODVcXG4qXFxmKlxceDBFKlxcdTAzODhcXHYqXFx4MDMqXFx4MDNcIitcblx0XHRcIipcXHgwNypcXHUwMzhDXFxuKlxcZipcXHgwRSpcXHUwMzhGXFx2KlxceDA1KlxcdTAzOTFcXG4qXFx4MDMrXFx4MDUrXFx1MDM5NFxcbitcXHgwM1wiK1xuXHRcdFwiK1xceDA2K1xcdTAzOTdcXG4rXFxyK1xceDBFK1xcdTAzOThcXHgwMytcXHgwMytcXHgwMytcXHgwNytcXHUwMzlFXFxuK1xcZitcXHgwRStcXHUwM0ExXCIrXG5cdFx0XCJcXHYrXFx4MDMsXFx4MDMsXFx4MDMsXFx4MDMsXFx4MDMsXFx4MDMsXFx4MDMsXFx4MDMsXFx4MDMsXFx4MDUsXFx1MDNBQ1xcbixcXHgwMy1cXHgwM1wiK1xuXHRcdFwiLVxceDA1LVxcdTAzQjBcXG4tXFx4MDMuXFx4MDMuXFx4MDMuXFx4MDYuXFx1MDNCNVxcbi5cXHIuXFx4MEUuXFx1MDNCNlxceDAzL1xceDAzL1xceDAzXCIrXG5cdFx0XCIvXFx4MDMvXFx4MDUvXFx1MDNCRFxcbi9cXHgwMy9cXHgwMy9cXHgwMzBcXHgwMzBcXHgwMzFcXHgwNjFcXHUwM0M0XFxuMVxccjFcXHgwRTFcXHUwM0M1XCIrXG5cdFx0XCJcXHgwMzJcXHgwMzJcXHgwNzJcXHUwM0NBXFxuMlxcZjJcXHgwRTJcXHUwM0NEXFx2MlxceDAzMlxceDAzMlxceDAzM1xceDAzM1xceDAzM1xceDAzXCIrXG5cdFx0XCIzXFx4MDczXFx1MDNENVxcbjNcXGYzXFx4MEUzXFx1MDNEOFxcdjNcXHgwNTNcXHUwM0RBXFxuM1xceDAzNFxceDAzNFxceDAzNFxceDAyXFx4MDJcIitcblx0XHRcIlxceDA1XFx4MUE4PjVcXHgwMlxceDAyXFx4MDRcXHgwMlxceDA2XFx4MDJcXGJcXHgwMlxcblxceDAyXFxmXFx4MDJcXHgwRVxceDAyXFx4MTBcXHgwMlwiK1xuXHRcdFwiXFx4MTJcXHgwMlxceDE0XFx4MDJcXHgxNlxceDAyXFx4MThcXHgwMlxceDFBXFx4MDJcXHgxQ1xceDAyXFx4MUVcXHgwMiBcXHgwMlxcXCJcXHgwMiRcXHgwMlwiK1xuXHRcdFwiJlxceDAyKFxceDAyKlxceDAyLFxceDAyLlxceDAyMFxceDAyMlxceDAyNFxceDAyNlxceDAyOFxceDAyOlxceDAyPFxceDAyPlxceDAyQFxceDAyXCIrXG5cdFx0XCJCXFx4MDJEXFx4MDJGXFx4MDJIXFx4MDJKXFx4MDJMXFx4MDJOXFx4MDJQXFx4MDJSXFx4MDJUXFx4MDJWXFx4MDJYXFx4MDJaXFx4MDJcXFxcXFx4MDJcIitcblx0XHRcIl5cXHgwMmBcXHgwMmJcXHgwMmRcXHgwMmZcXHgwMlxceDAyXFx0XFx4MDNcXHgwMlxcdlxcZlxceDAzXFx4MDJcXHgxOFxceDE5XFx4MDRcXHgwMlxceDExXCIrXG5cdFx0XCJcXHgxMVxceDE4XFx4MThcXHgwM1xceDAyXFx4MTFcXHgxMlxceDAzXFx4MDJcXHgwRlxceDEwXFx4MDRcXHgwMlxceDAzXFx4MDNcXHgwNlxcdFxceDA1XCIrXG5cdFx0XCJcXHgwMlxcblxcclxceDEyXFx4MTJcXHgxNFxceDE0XFx1MDQ5MFxceDAyb1xceDAzXFx4MDJcXHgwMlxceDAyXFx4MDR0XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceDA2eVxceDAzXFx4MDJcXHgwMlxceDAyXFxie1xceDAzXFx4MDJcXHgwMlxceDAyXFxuXFx1MDEyMlxceDAzXFx4MDJcXHgwMlxceDAyXFxmXFx1MDEyNFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHgwRVxcdTAxMkFcXHgwM1xceDAyXFx4MDJcXHgwMlxceDEwXFx1MDEzQVxceDAzXFx4MDJcXHgwMlxceDAyXFx4MTJcIitcblx0XHRcIlxcdTAxM0NcXHgwM1xceDAyXFx4MDJcXHgwMlxceDE0XFx1MDE0MFxceDAzXFx4MDJcXHgwMlxceDAyXFx4MTZcXHUwMTQyXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxceDE4XFx1MDE0NFxceDAzXFx4MDJcXHgwMlxceDAyXFx4MUFcXHUwMTRGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHgxQ1xcdTAxQjFcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx4MUVcXHUwMUIzXFx4MDNcXHgwMlxceDAyXFx4MDIgXFx1MDFDMVxceDAzXFx4MDJcXHgwMlxceDAyXFxcIlxcdTAxQ0RcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyJFxcdTAxRDlcXHgwM1xceDAyXFx4MDJcXHgwMiZcXHUwMUVBXFx4MDNcXHgwMlxceDAyXFx4MDIoXFx1MDFFRVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDIqXFx1MDFGMFxceDAzXFx4MDJcXHgwMlxceDAyLFxcdTAxRjJcXHgwM1xceDAyXFx4MDJcXHgwMi5cXHUwMUZDXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMjBcXHUwMUZGXFx4MDNcXHgwMlxceDAyXFx4MDIyXFx1MDIxN1xceDAzXFx4MDJcXHgwMlxceDAyNFxcdTAyMkJcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyNlxcdTAyNjZcXHgwM1xceDAyXFx4MDJcXHgwMjhcXHUwMjZGXFx4MDNcXHgwMlxceDAyXFx4MDI6XFx1MDI5OVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDI8XFx1MDI5RFxceDAzXFx4MDJcXHgwMlxceDAyPlxcdTAyQTZcXHgwM1xceDAyXFx4MDJcXHgwMkBcXHUwMkJGXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMkJcXHUwMkMyXFx4MDNcXHgwMlxceDAyXFx4MDJEXFx1MDJFQVxceDAzXFx4MDJcXHgwMlxceDAyRlxcdTAzMDJcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAySFxcdTAzMkFcXHgwM1xceDAyXFx4MDJcXHgwMkpcXHUwMzcyXFx4MDNcXHgwMlxceDAyXFx4MDJMXFx1MDM3NFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJOXFx1MDM3NlxceDAzXFx4MDJcXHgwMlxceDAyUFxcdTAzODBcXHgwM1xceDAyXFx4MDJcXHgwMlJcXHUwMzkwXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlRcXHUwMzkzXFx4MDNcXHgwMlxceDAyXFx4MDJWXFx1MDNBQlxceDAzXFx4MDJcXHgwMlxceDAyWFxcdTAzQUZcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyWlxcdTAzQjRcXHgwM1xceDAyXFx4MDJcXHgwMlxcXFxcXHUwM0I4XFx4MDNcXHgwMlxceDAyXFx4MDJeXFx1MDNDMFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJgXFx1MDNDM1xceDAzXFx4MDJcXHgwMlxceDAyYlxcdTAzQzdcXHgwM1xceDAyXFx4MDJcXHgwMmRcXHUwM0Q5XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMmZcXHUwM0RCXFx4MDNcXHgwMlxceDAyXFx4MDJocFxceDA3XFx4MDJcXHgwMlxceDAzaWtcXHgwNVxceDA0XFx4MDNcIitcblx0XHRcIlxceDAyamxcXHgwN1xcdlxceDAyXFx4MDJralxceDAzXFx4MDJcXHgwMlxceDAya2xcXHgwM1xceDAyXFx4MDJcXHgwMmxtXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMm1uXFx4MDdcXHgwMlxceDAyXFx4MDNucFxceDAzXFx4MDJcXHgwMlxceDAyb2hcXHgwM1xceDAyXFx4MDJcXHgwMm9pXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMnBcXHgwM1xceDAzXFx4MDJcXHgwMlxceDAycXNcXHgwNVxceDA2XFx4MDRcXHgwMnJxXFx4MDNcXHgwMlxceDAyXFx4MDJzdlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJ0clxceDAzXFx4MDJcXHgwMlxceDAydHVcXHgwM1xceDAyXFx4MDJcXHgwMnV3XFx4MDNcXHgwMlxceDAyXFx4MDJ2dFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJ3eFxceDA1XFxiXFx4MDVcXHgwMnhcXHgwNVxceDAzXFx4MDJcXHgwMlxceDAyeXpcXHRcXHgwMlxceDAyXFx4MDJ6XFx4MDdcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAye1xceDgwXFx4MDVcXG5cXHgwNlxceDAyfH1cXHgwN1xcdlxceDAyXFx4MDJ9XFx4N0ZcXHgwNVxcblxceDA2XFx4MDJ+fFxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHg3RlxceDgyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4MH5cXHgwM1xceDAyXFx4MDJcXHgwMlxceDgwXFx4ODFcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx4ODFcXHRcXHgwM1xceDAyXFx4MDJcXHgwMlxceDgyXFx4ODBcXHgwM1xceDAyXFx4MDJcXHgwMlxceDgzXFx1MDEyM1xceDA1XCIrXG5cdFx0XCJcXGZcXHgwN1xceDAyXFx4ODRcXHg4NVxceDA1XFxmXFx4MDdcXHgwMlxceDg1XFx4ODdcXHgwN1xcZlxceDAyXFx4MDJcXHg4NlxceDg4XFx4MDdcXHZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHg4N1xceDg2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4N1xceDg4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4OFxceDg5XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxceDg5XFx4OEFcXHgwN1xceDEwXFx4MDJcXHgwMlxceDhBXFx4OEJcXHgwN1xcZlxceDAyXFx4MDJcXHg4QlxceDhDXFx4MDVQKVxceDAyXFx4OENcIitcblx0XHRcIlxcdTAxMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxceDhEXFx4OEVcXHgwNVxcZlxceDA3XFx4MDJcXHg4RVxceDhGXFx4MDdcXGZcXHgwMlxceDAyXFx4OEZcIitcblx0XHRcIlxceDkwXFx4MDVcXHgwRVxcYlxceDAyXFx4OTBcXHUwMTIzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg5MVxceDkyXFx4MDVcXGZcXHgwN1xceDAyXFx4OTJcIitcblx0XHRcIlxceDkzXFx4MDdcXGZcXHgwMlxceDAyXFx4OTNcXHg5NVxceDA1XFx4MEVcXGJcXHgwMlxceDk0XFx4OTZcXHgwN1xcZlxceDAyXFx4MDJcXHg5NVxceDk0XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxceDk1XFx4OTZcXHgwM1xceDAyXFx4MDJcXHgwMlxceDk2XFx4OTdcXHgwM1xceDAyXFx4MDJcXHgwMlxceDk3XFx4OTlcIitcblx0XHRcIlxceDA3XFx4MTZcXHgwMlxceDAyXFx4OThcXHg5QVxceDA3XFxmXFx4MDJcXHgwMlxceDk5XFx4OThcXHgwM1xceDAyXFx4MDJcXHgwMlxceDk5XFx4OUFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx4OUFcXHg5QlxceDAzXFx4MDJcXHgwMlxceDAyXFx4OUJcXHg5Q1xceDA1PiBcXHgwMlxceDlDXFx1MDEyM1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHg5RFxceDlFXFx4MDVcXGZcXHgwN1xceDAyXFx4OUVcXHg5RlxceDA3XFxmXFx4MDJcXHgwMlxceDlGXFx4QTBcXHgwNVxceDBFXCIrXG5cdFx0XCJcXGJcXHgwMlxceEEwXFx4QTJcXHgwN1xcZlxceDAyXFx4MDJcXHhBMVxceEEzXFx4MDdcXHZcXHgwMlxceDAyXFx4QTJcXHhBMVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHhBMlxceEEzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhBM1xceEE0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhBNFxceEE1XFx4MDdcXHgxMFxceDAyXCIrXG5cdFx0XCJcXHgwMlxceEE1XFx4QTZcXHgwN1xcZlxceDAyXFx4MDJcXHhBNlxceEE3XFx4MDVQKVxceDAyXFx4QTdcXHUwMTIzXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceEE4XFx4QTlcXHgwNVxcZlxceDA3XFx4MDJcXHhBOVxceEFBXFx4MDdcXGZcXHgwMlxceDAyXFx4QUFcXHhBQlxceDA1XFx4MEVcXGJcXHgwMlxceEFCXCIrXG5cdFx0XCJcXHhBQ1xceDA3XFxmXFx4MDJcXHgwMlxceEFDXFx4QUVcXHgwN1xceDE2XFx4MDJcXHgwMlxceEFEXFx4QUZcXHgwN1xcZlxceDAyXFx4MDJcXHhBRVxceEFEXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxceEFFXFx4QUZcXHgwM1xceDAyXFx4MDJcXHgwMlxceEFGXFx4QjBcXHgwM1xceDAyXFx4MDJcXHgwMlxceEIwXFx4QjFcIitcblx0XHRcIlxceDA1PiBcXHgwMlxceEIxXFx4QjNcXHgwN1xcZlxceDAyXFx4MDJcXHhCMlxceEI0XFx4MDdcXHZcXHgwMlxceDAyXFx4QjNcXHhCMlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHhCM1xceEI0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCNFxceEI1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCNVxceEI2XFx4MDdcXHgxMFwiK1xuXHRcdFwiXFx4MDJcXHgwMlxceEI2XFx4QjdcXHgwN1xcZlxceDAyXFx4MDJcXHhCN1xceEI4XFx4MDVQKVxceDAyXFx4QjhcXHUwMTIzXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxceEI5XFx4QkFcXHgwNVxcZlxceDA3XFx4MDJcXHhCQVxceEJCXFx4MDdcXGZcXHgwMlxceDAyXFx4QkJcXHhCRFxceDA1XFx4MEVcXGJcXHgwMlwiK1xuXHRcdFwiXFx4QkNcXHhCRVxceDA3XFxmXFx4MDJcXHgwMlxceEJEXFx4QkNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEJEXFx4QkVcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4QkVcXHhCRlxceDAzXFx4MDJcXHgwMlxceDAyXFx4QkZcXHhDMVxceDA3XFx4MTNcXHgwMlxceDAyXFx4QzBcXHhDMlxceDA3XFxmXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4QzFcXHhDMFxceDAzXFx4MDJcXHgwMlxceDAyXFx4QzFcXHhDMlxceDAzXFx4MDJcXHgwMlxceDAyXFx4QzJcXHhDM1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhDM1xceEM0XFx4MDVcXHgxQVxceDBFXFx4MDJcXHhDNFxcdTAxMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEM1XFx4QzZcXHgwNVxcZlxceDA3XFx4MDJcIitcblx0XHRcIlxceEM2XFx4QzdcXHgwN1xcZlxceDAyXFx4MDJcXHhDN1xceEM5XFx4MDVcXHgwRVxcYlxceDAyXFx4QzhcXHhDQVxceDA3XFxmXFx4MDJcXHgwMlxceEM5XCIrXG5cdFx0XCJcXHhDOFxceDAzXFx4MDJcXHgwMlxceDAyXFx4QzlcXHhDQVxceDAzXFx4MDJcXHgwMlxceDAyXFx4Q0FcXHhDQlxceDAzXFx4MDJcXHgwMlxceDAyXFx4Q0JcIitcblx0XHRcIlxceENEXFx4MDdcXHgxM1xceDAyXFx4MDJcXHhDQ1xceENFXFx4MDdcXGZcXHgwMlxceDAyXFx4Q0RcXHhDQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx4Q0RcIitcblx0XHRcIlxceENFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhDRVxceENGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhDRlxceEQxXFx4MDVcXHgxQVxceDBFXFx4MDJcXHhEMFwiK1xuXHRcdFwiXFx4RDJcXHgwN1xcZlxceDAyXFx4MDJcXHhEMVxceEQwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhEMVxceEQyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhEMlwiK1xuXHRcdFwiXFx4RDNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEQzXFx4RDVcXHgwN1xceDE2XFx4MDJcXHgwMlxceEQ0XFx4RDZcXHgwN1xcZlxceDAyXFx4MDJcXHhENVwiK1xuXHRcdFwiXFx4RDRcXHgwM1xceDAyXFx4MDJcXHgwMlxceEQ1XFx4RDZcXHgwM1xceDAyXFx4MDJcXHgwMlxceEQ2XFx4RDdcXHgwM1xceDAyXFx4MDJcXHgwMlxceEQ3XCIrXG5cdFx0XCJcXHhEOFxceDA1PiBcXHgwMlxceEQ4XFx1MDEyM1xceDAzXFx4MDJcXHgwMlxceDAyXFx4RDlcXHhEQVxceDA1XFxmXFx4MDdcXHgwMlxceERBXFx4REJcIitcblx0XHRcIlxceDA3XFxmXFx4MDJcXHgwMlxceERCXFx4RERcXHgwNVxceDBFXFxiXFx4MDJcXHhEQ1xceERFXFx4MDdcXGZcXHgwMlxceDAyXFx4RERcXHhEQ1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHhERFxceERFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhERVxceERGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhERlxceEUxXFx4MDdcIitcblx0XHRcIlxceDEzXFx4MDJcXHgwMlxceEUwXFx4RTJcXHgwN1xcZlxceDAyXFx4MDJcXHhFMVxceEUwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFMVxceEUyXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxceEUyXFx4RTNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEUzXFx4RTRcXHgwNVxceDFBXFx4MEVcXHgwMlxceEU0XFx4RTZcXHgwN1wiK1xuXHRcdFwiXFxmXFx4MDJcXHgwMlxceEU1XFx4RTdcXHgwN1xcdlxceDAyXFx4MDJcXHhFNlxceEU1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFNlxceEU3XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxceEU3XFx4RThcXHgwM1xceDAyXFx4MDJcXHgwMlxceEU4XFx4RTlcXHgwN1xceDEwXFx4MDJcXHgwMlxceEU5XFx4RUFcXHgwN1xcZlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxceEVBXFx4RUJcXHgwNVApXFx4MDJcXHhFQlxcdTAxMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEVDXFx4RURcXHgwNVxcZlxceDA3XCIrXG5cdFx0XCJcXHgwMlxceEVEXFx4RUVcXHgwN1xcZlxceDAyXFx4MDJcXHhFRVxceEYwXFx4MDVcXHgwRVxcYlxceDAyXFx4RUZcXHhGMVxceDA3XFxmXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4RjBcXHhFRlxceDAzXFx4MDJcXHgwMlxceDAyXFx4RjBcXHhGMVxceDAzXFx4MDJcXHgwMlxceDAyXFx4RjFcXHhGMlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhGMlxceEY0XFx4MDdcXHgxM1xceDAyXFx4MDJcXHhGM1xceEY1XFx4MDdcXGZcXHgwMlxceDAyXFx4RjRcXHhGM1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhGNFxceEY1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhGNVxceEY2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhGNlxceEY4XFx4MDVcXHgxQVxceDBFXFx4MDJcIitcblx0XHRcIlxceEY3XFx4RjlcXHgwN1xcZlxceDAyXFx4MDJcXHhGOFxceEY3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhGOFxceEY5XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceEY5XFx4RkFcXHgwM1xceDAyXFx4MDJcXHgwMlxceEZBXFx4RkNcXHgwN1xceDE2XFx4MDJcXHgwMlxceEZCXFx4RkRcXHgwN1xcZlxceDAyXFx4MDJcIitcblx0XHRcIlxceEZDXFx4RkJcXHgwM1xceDAyXFx4MDJcXHgwMlxceEZDXFx4RkRcXHgwM1xceDAyXFx4MDJcXHgwMlxceEZEXFx4RkVcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4RkVcXHhGRlxceDA1PiBcXHgwMlxceEZGXFx1MDEwMVxceDA3XFxmXFx4MDJcXHgwMlxcdTAxMDBcXHUwMTAyXFx4MDdcXHZcXHgwMlxceDAyXFx1MDEwMVwiK1xuXHRcdFwiXFx1MDEwMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwMVxcdTAxMDJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMDJcXHUwMTAzXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxMDNcXHUwMTA0XFx4MDdcXHgxMFxceDAyXFx4MDJcXHUwMTA0XFx1MDEwNVxceDA3XFxmXFx4MDJcXHgwMlxcdTAxMDVcXHUwMTA2XCIrXG5cdFx0XCJcXHgwNVApXFx4MDJcXHUwMTA2XFx1MDEyM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwN1xcdTAxMDlcXHgwNVxcZlxceDA3XFx4MDJcXHUwMTA4XCIrXG5cdFx0XCJcXHUwMTBBXFx4MDdcXGZcXHgwMlxceDAyXFx1MDEwOVxcdTAxMDhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMDlcXHUwMTBBXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxMEFcXHUwMTBCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTBCXFx1MDEwRFxceDA3XFx4MTNcXHgwMlxceDAyXFx1MDEwQ1xcdTAxMEVcIitcblx0XHRcIlxceDA3XFxmXFx4MDJcXHgwMlxcdTAxMERcXHUwMTBDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTBEXFx1MDEwRVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTBFXFx1MDEwRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwRlxcdTAxMTBcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAxMTBcXHUwMTIzXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxMTFcXHUwMTEzXFx4MDVcXGZcXHgwN1xceDAyXFx1MDExMlxcdTAxMTRcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTEzXCIrXG5cdFx0XCJcXHUwMTEyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTEzXFx1MDExNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDExNFxcdTAxMTVcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDExNVxcdTAxMTdcXHgwN1xceDEzXFx4MDJcXHgwMlxcdTAxMTZcXHUwMTE4XFx4MDdcXGZcXHgwMlxceDAyXFx1MDExN1xcdTAxMTZcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDExN1xcdTAxMThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMThcXHUwMTE5XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxMTlcXHUwMTFBXFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMTFBXFx1MDExQ1xceDA3XFxmXFx4MDJcXHgwMlxcdTAxMUJcXHUwMTFEXFx4MDdcIitcblx0XHRcIlxcdlxceDAyXFx4MDJcXHUwMTFDXFx1MDExQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDExQ1xcdTAxMURcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMURcIitcblx0XHRcIlxcdTAxMUVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMUVcXHUwMTFGXFx4MDdcXHgxMFxceDAyXFx4MDJcXHUwMTFGXFx1MDEyMFxceDA3XFxmXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDEyMFxcdTAxMjFcXHgwNVApXFx4MDJcXHUwMTIxXFx1MDEyM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlxceDgzXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxMjJcXHg4NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlxceDhEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXFx4OTFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlxceDlEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXFx4QThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjJcIitcblx0XHRcIlxceEI5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXFx4QzVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjJcXHhEOVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTIyXFx4RUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjJcXHUwMTA3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXFx1MDExMVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTIzXFx2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTI0XFx1MDEyNVxceDA3XFx4MEVcXHgwMlxceDAyXFx1MDEyNVwiK1xuXHRcdFwiXFx1MDEyNlxceDA1XFx4MTZcXGZcXHgwMlxcdTAxMjZcXHJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjdcXHUwMTJCXFx4MDVcXHgxMFxcdFxceDAyXCIrXG5cdFx0XCJcXHUwMTI4XFx1MDEyQlxceDA1XFx4MTJcXG5cXHgwMlxcdTAxMjlcXHUwMTJCXFx4MDVcXHgxNlxcZlxceDAyXFx1MDEyQVxcdTAxMjdcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDEyQVxcdTAxMjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMkFcXHUwMTI5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTJCXCIrXG5cdFx0XCJcXHgwRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyQ1xcdTAxMkZcXHgwNVxceDEyXFxuXFx4MDJcXHUwMTJEXFx1MDEyRVxceDA3XFx4MTRcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTJFXFx1MDEzMFxceDA1XFx4MTRcXHZcXHgwMlxcdTAxMkZcXHUwMTJEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTMwXFx1MDEzMVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTMxXFx1MDEyRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzMVxcdTAxMzJcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDEzMlxcdTAxM0JcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMzNcXHUwMTM2XFx4MDVcXHgxNlxcZlxceDAyXFx1MDEzNFxcdTAxMzVcXHgwN1wiK1xuXHRcdFwiXFx4MTRcXHgwMlxceDAyXFx1MDEzNVxcdTAxMzdcXHgwNVxceDE0XFx2XFx4MDJcXHUwMTM2XFx1MDEzNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzN1wiK1xuXHRcdFwiXFx1MDEzOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzOFxcdTAxMzZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMzhcXHUwMTM5XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxMzlcXHUwMTNCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTNBXFx1MDEyQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzQVwiK1xuXHRcdFwiXFx1MDEzM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzQlxceDExXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTNDXFx1MDEzRFxceDA1XFx4MThcXHJcIitcblx0XHRcIlxceDAyXFx1MDEzRFxceDEzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTNFXFx1MDE0MVxceDA1XFx4MTJcXG5cXHgwMlxcdTAxM0ZcXHUwMTQxXFx4MDVcIitcblx0XHRcIlxceDE2XFxmXFx4MDJcXHUwMTQwXFx1MDEzRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0MFxcdTAxM0ZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNDFcIitcblx0XHRcIlxceDE1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTQyXFx1MDE0M1xceDA3XFxuXFx4MDJcXHgwMlxcdTAxNDNcXHgxN1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTQ0XFx1MDE0NVxceDA1XFx4MTZcXGZcXHgwMlxcdTAxNDVcXHUwMTQ2XFx4MDdcXHgxN1xceDAyXFx4MDJcXHUwMTQ2XFx4MTlcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDE0N1xcdTAxNDhcXGJcXHgwRVxceDAxXFx4MDJcXHUwMTQ4XFx1MDE1MFxceDA1XFx4MUNcXHgwRlxceDAyXFx1MDE0OVxcdTAxNTBcIitcblx0XHRcIlxceDA1XFxcIlxceDEyXFx4MDJcXHUwMTRBXFx1MDE1MFxceDA1JlxceDE0XFx4MDJcXHUwMTRCXFx1MDE1MFxceDA1LFxceDE3XFx4MDJcXHUwMTRDXCIrXG5cdFx0XCJcXHUwMTUwXFx4MDUuXFx4MThcXHgwMlxcdTAxNERcXHUwMTUwXFx4MDUwXFx4MTlcXHgwMlxcdTAxNEVcXHUwMTUwXFx4MDU2XFx4MUNcXHgwMlwiK1xuXHRcdFwiXFx1MDE0RlxcdTAxNDdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNEZcXHUwMTQ5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTRGXFx1MDE0QVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTRGXFx1MDE0QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0RlxcdTAxNENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNEZcIitcblx0XHRcIlxcdTAxNERcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNEZcXHUwMTRFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTUwXFx1MDE2OFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTUxXFx1MDE1M1xcZlxcblxceDAyXFx4MDJcXHUwMTUyXFx1MDE1NFxceDA3XFxmXFx4MDJcXHgwMlxcdTAxNTNcXHUwMTUyXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNTNcXHUwMTU0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTU0XFx1MDE1NlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTU1XFx1MDE1N1xceDA3XFx2XFx4MDJcXHgwMlxcdTAxNTZcXHUwMTU1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTU2XFx1MDE1N1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTU3XFx1MDE1OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1OFxcdTAxNUFcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTU5XCIrXG5cdFx0XCJcXHUwMTU4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTU5XFx1MDE1QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1QVxcdTAxNUJcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDE1QlxcdTAxNURcXHRcXHgwM1xceDAyXFx4MDJcXHUwMTVDXFx1MDE1RVxceDA3XFxmXFx4MDJcXHgwMlxcdTAxNURcXHUwMTVDXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNURcXHUwMTVFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTVFXFx1MDE2MFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTVGXFx1MDE2MVxceDA3XFx2XFx4MDJcXHgwMlxcdTAxNjBcXHUwMTVGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTYwXFx1MDE2MVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTYxXFx1MDE2M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2MlxcdTAxNjRcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTYzXCIrXG5cdFx0XCJcXHUwMTYyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTYzXFx1MDE2NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2NFxcdTAxNjVcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDE2NVxcdTAxNjdcXHgwNVxceDFBXFx4MEVcXHZcXHUwMTY2XFx1MDE1MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2N1xcdTAxNkFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2OFxcdTAxNjZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjhcXHUwMTY5XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxNjlcXHgxQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2QVxcdTAxNjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNkJcXHUwMTZEXFx4MDdcIitcblx0XHRcIlxceDFGXFx4MDJcXHgwMlxcdTAxNkNcXHUwMTZFXFx4MDdcXGZcXHgwMlxceDAyXFx1MDE2RFxcdTAxNkNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNkRcIitcblx0XHRcIlxcdTAxNkVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNkVcXHUwMTcwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTZGXFx1MDE3MVxceDA3XFx2XFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDE3MFxcdTAxNkZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNzBcXHUwMTcxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTcxXFx1MDE3M1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTcyXFx1MDE3NFxceDA3XFxmXFx4MDJcXHgwMlxcdTAxNzNcXHUwMTcyXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxNzNcXHUwMTc0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTc0XFx1MDE3NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3NVxcdTAxNzdcXHgwNVwiK1xuXHRcdFwiXFx4MUVcXHgxMFxceDAyXFx1MDE3NlxcdTAxNzVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNzZcXHUwMTc3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTc3XCIrXG5cdFx0XCJcXHUwMTc5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTc4XFx1MDE3QVxceDA3XFxmXFx4MDJcXHgwMlxcdTAxNzlcXHUwMTc4XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxNzlcXHUwMTdBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTdBXFx1MDE3Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3QlxcdTAxN0RcIitcblx0XHRcIlxceDA3XFx2XFx4MDJcXHgwMlxcdTAxN0NcXHUwMTdCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTdDXFx1MDE3RFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTdEXFx1MDE3RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3RVxcdTAxODBcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTdGXFx1MDE3RVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTdGXFx1MDE4MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4MFxcdTAxODFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxODFcIitcblx0XHRcIlxcdTAxODNcXHgwNyBcXHgwMlxceDAyXFx1MDE4MlxcdTAxODRcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTgzXFx1MDE4MlxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTgzXFx1MDE4NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4NFxcdTAxODZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxODVcXHUwMTg3XCIrXG5cdFx0XCJcXHgwN1xcdlxceDAyXFx4MDJcXHUwMTg2XFx1MDE4NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4NlxcdTAxODdcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE4N1xcdTAxODlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxODhcXHUwMThBXFx4MDdcXGZcXHgwMlxceDAyXFx1MDE4OVxcdTAxODhcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDE4OVxcdTAxOEFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOEFcXHUwMThCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMThCXCIrXG5cdFx0XCJcXHUwMThEXFx4MDdcXHgxQVxceDAyXFx4MDJcXHUwMThDXFx1MDE4RVxceDA3XFxmXFx4MDJcXHgwMlxcdTAxOERcXHUwMThDXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxOERcXHUwMThFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMThFXFx1MDE5MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4RlxcdTAxOTFcIitcblx0XHRcIlxceDA3XFx2XFx4MDJcXHgwMlxcdTAxOTBcXHUwMThGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTkwXFx1MDE5MVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTkxXFx1MDE5M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5MlxcdTAxOTRcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTkzXFx1MDE5MlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTkzXFx1MDE5NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5NFxcdTAxOTVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOTVcIitcblx0XHRcIlxcdTAxOTdcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAxOTZcXHUwMTk4XFx4MDdcXHgxN1xceDAyXFx4MDJcXHUwMTk3XFx1MDE5NlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTk3XFx1MDE5OFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5OFxcdTAxQjJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOTlcIitcblx0XHRcIlxcdTAxOUJcXHgwNSBcXHgxMVxceDAyXFx1MDE5QVxcdTAxOUNcXHgwN1xcZlxceDAyXFx4MDJcXHUwMTlCXFx1MDE5QVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTlCXFx1MDE5Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5Q1xcdTAxOUVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOURcXHUwMTlGXCIrXG5cdFx0XCJcXHgwN1xcdlxceDAyXFx4MDJcXHUwMTlFXFx1MDE5RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5RVxcdTAxOUZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE5RlxcdTAxQTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQTBcXHUwMUEyXFx4MDdcXGZcXHgwMlxceDAyXFx1MDFBMVxcdTAxQTBcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDFBMVxcdTAxQTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQTJcIjtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3NlcmlhbGl6ZWRBVE5TZWdtZW50MTogc3RyaW5nID1cblx0XHRcIlxcdTAxQTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQTNcXHUwMUE1XFx4MDdcXHgxQVxceDAyXFx4MDJcXHUwMUE0XFx1MDFBNlxceDA3XFxmXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFBNVxcdTAxQTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQTVcXHUwMUE2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUE2XFx1MDFBOFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUE3XFx1MDFBOVxceDA3XFx2XFx4MDJcXHgwMlxcdTAxQThcXHUwMUE3XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxQThcXHUwMUE5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUE5XFx1MDFBQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBQVxcdTAxQUNcXHgwN1wiK1xuXHRcdFwiXFxmXFx4MDJcXHgwMlxcdTAxQUJcXHUwMUFBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUFCXFx1MDFBQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBQ1wiK1xuXHRcdFwiXFx1MDFBRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBRFxcdTAxQUZcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAxQUVcXHUwMUIwXFx4MDdcXHgxN1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxQUZcXHUwMUFFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUFGXFx1MDFCMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCMFwiK1xuXHRcdFwiXFx1MDFCMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCMVxcdTAxNkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjFcXHUwMTk5XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxQjJcXHgxRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCM1xcdTAxQkVcXHgwNSBcXHgxMVxceDAyXFx1MDFCNFxcdTAxQjZcIitcblx0XHRcIlxceDA3XFx4MTVcXHgwMlxceDAyXFx1MDFCNVxcdTAxQjdcXHgwN1xcdlxceDAyXFx4MDJcXHUwMUI2XFx1MDFCNVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUI2XFx1MDFCN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCN1xcdTAxQjlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjhcXHUwMUJBXFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHUwMUI5XFx1MDFCOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCOVxcdTAxQkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQkFcIitcblx0XHRcIlxcdTAxQkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQkJcXHUwMUJEXFx4MDUgXFx4MTFcXHgwMlxcdTAxQkNcXHUwMUI0XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxQkRcXHUwMUMwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUJFXFx1MDFCQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCRVxcdTAxQkZcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCRlxceDFGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUMwXFx1MDFCRVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUMxXFx1MDFDQVxceDA1XFx4MTZcXGZcXHgwMlxcdTAxQzJcXHUwMUM0XFx4MDdcXGZcXHgwMlxceDAyXFx1MDFDM1xcdTAxQzJcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDFDM1xcdTAxQzRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQzRcXHUwMUM1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUM1XCIrXG5cdFx0XCJcXHUwMUM3XFx4MDdcXHgxM1xceDAyXFx4MDJcXHUwMUM2XFx1MDFDOFxceDA3XFxmXFx4MDJcXHgwMlxcdTAxQzdcXHUwMUM2XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxQzdcXHUwMUM4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUM4XFx1MDFDOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDOVxcdTAxQ0JcIitcblx0XHRcIlxceDA1XFx4MUFcXHgwRVxceDAyXFx1MDFDQVxcdTAxQzNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQ0FcXHUwMUNCXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxQ0IhXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUNDXFx1MDFDRVxceDA1XFx4MTZcXGZcXHgwMlxcdTAxQ0RcXHUwMUNDXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxQ0RcXHUwMUNFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUNFXFx1MDFDRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDRlwiK1xuXHRcdFwiXFx1MDFEMVxceDA3I1xceDAyXFx4MDJcXHUwMUQwXFx1MDFEMlxceDA3XFxmXFx4MDJcXHgwMlxcdTAxRDFcXHUwMUQwXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxRDFcXHUwMUQyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUQyXFx1MDFEM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFEM1xcdTAxRDVcIitcblx0XHRcIlxceDA1JFxceDEzXFx4MDJcXHUwMUQ0XFx1MDFENlxceDA3XFxmXFx4MDJcXHgwMlxcdTAxRDVcXHUwMUQ0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUQ1XCIrXG5cdFx0XCJcXHUwMUQ2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUQ2XFx1MDFEN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFEN1xcdTAxRDhcXHgwNyRcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMUQ4I1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFEOVxcdTAxREJcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAxREFcXHUwMURDXFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHUwMURCXFx1MDFEQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFEQlxcdTAxRENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRENcIitcblx0XHRcIlxcdTAxRTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRERcXHUwMURGXFx4MDdcXHgxNVxceDAyXFx4MDJcXHUwMURFXFx1MDFFMFxceDA3XFxmXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFERlxcdTAxREVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxREZcXHUwMUUwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUUwXFx1MDFFMVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUUxXFx1MDFFM1xceDA1XFx4MUFcXHgwRVxceDAyXFx1MDFFMlxcdTAxRERcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDFFM1xcdTAxRTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRTRcXHUwMUUyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUU0XFx1MDFFNVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMUU1JVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFNlxcdTAxRTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRTdcIitcblx0XHRcIlxcdTAxRUJcXHgwNVxceDE4XFxyXFx4MDJcXHUwMUU4XFx1MDFFQlxceDA1OlxceDFFXFx4MDJcXHUwMUU5XFx1MDFFQlxceDA1KFxceDE1XFx4MDJcIitcblx0XHRcIlxcdTAxRUFcXHUwMUU3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUVBXFx1MDFFOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFQVxcdTAxRTlcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDFFQlxcJ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFQ1xcdTAxRUZcXHgwNVxceDE2XFxmXFx4MDJcXHUwMUVEXFx1MDFFRlwiK1xuXHRcdFwiXFx4MDUqXFx4MTZcXHgwMlxcdTAxRUVcXHUwMUVDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUVFXFx1MDFFRFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUVGKVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGMFxcdTAxRjFcXHgwN1xcdFxceDAyXFx4MDJcXHUwMUYxK1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUYyXFx1MDFGNFxceDA3XFx4MUZcXHgwMlxceDAyXFx1MDFGM1xcdTAxRjVcXHgwN1xcZlxceDAyXFx4MDJcXHUwMUY0XFx1MDFGM1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMUY0XFx1MDFGNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGNVxcdTAxRjZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRjZcIitcblx0XHRcIlxcdTAxRjhcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAxRjdcXHUwMUY5XFx4MDdcXGZcXHgwMlxceDAyXFx1MDFGOFxcdTAxRjdcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFGOFxcdTAxRjlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRjlcXHUwMUZBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUZBXFx1MDFGQlwiK1xuXHRcdFwiXFx4MDcgXFx4MDJcXHgwMlxcdTAxRkItXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUZDXFx1MDFGRFxcdFxceDA0XFx4MDJcXHgwMlxcdTAxRkRcXHUwMUZFXCIrXG5cdFx0XCJcXHgwNSZcXHgxNFxceDAyXFx1MDFGRS9cXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRkZcXHUwMjAxXFx4MDdcXHgxRFxceDAyXFx4MDJcXHUwMjAwXCIrXG5cdFx0XCJcXHUwMjAyXFx4MDdcXGZcXHgwMlxceDAyXFx1MDIwMVxcdTAyMDBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMDFcXHUwMjAyXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyMDJcXHUwMjA0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjAzXFx1MDIwNVxceDA3XFx2XFx4MDJcXHgwMlxcdTAyMDRcXHUwMjAzXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMDRcXHUwMjA1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjA1XFx1MDIwN1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjA2XFx1MDIwOFxceDA3XFxmXFx4MDJcXHgwMlxcdTAyMDdcXHUwMjA2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjA3XFx1MDIwOFxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjA4XFx1MDIwQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwOVxcdTAyMEJcXHgwNTJcXHgxQVxceDAyXFx1MDIwQVwiK1xuXHRcdFwiXFx1MDIwOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwQVxcdTAyMEJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMEJcXHUwMjBEXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyMENcXHUwMjBFXFx4MDdcXGZcXHgwMlxceDAyXFx1MDIwRFxcdTAyMENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMERcXHUwMjBFXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMEVcXHUwMjEwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjBGXFx1MDIxMVxceDA3XFx2XFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDIxMFxcdTAyMEZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTBcXHUwMjExXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjExXFx1MDIxM1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjEyXFx1MDIxNFxceDA3XFxmXFx4MDJcXHgwMlxcdTAyMTNcXHUwMjEyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjEzXCIrXG5cdFx0XCJcXHUwMjE0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjE0XFx1MDIxNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxNVxcdTAyMTZcXHgwN1xceDFFXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDIxNjFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTdcXHUwMjE5XFx4MDU0XFx4MUJcXHgwMlxcdTAyMThcXHUwMjFBXFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHUwMjE5XFx1MDIxOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxOVxcdTAyMUFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMUFcIitcblx0XHRcIlxcdTAyMjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMUJcXHUwMjFEXFx4MDdcXHgxNVxceDAyXFx4MDJcXHUwMjFDXFx1MDIxRVxceDA3XFxmXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDIxRFxcdTAyMUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMURcXHUwMjFFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjFFXFx1MDIyMFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjFGXFx1MDIyMVxceDA3XFx2XFx4MDJcXHgwMlxcdTAyMjBcXHUwMjFGXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyMjBcXHUwMjIxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjIxXFx1MDIyM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyMlxcdTAyMjRcXHgwN1wiK1xuXHRcdFwiXFxmXFx4MDJcXHgwMlxcdTAyMjNcXHUwMjIyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjIzXFx1MDIyNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyNFwiK1xuXHRcdFwiXFx1MDIyNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyNVxcdTAyMjdcXHgwNTRcXHgxQlxceDAyXFx1MDIyNlxcdTAyMUJcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDIyN1xcdTAyMkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMjhcXHUwMjI2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjI4XFx1MDIyOVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjI5M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyQVxcdTAyMjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMkJcIitcblx0XHRcIlxcdTAyMkRcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAyMkNcXHUwMjJFXFx4MDdcXHgxN1xceDAyXFx4MDJcXHUwMjJEXFx1MDIyQ1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjJEXFx1MDIyRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyRVxcdTAyMzBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMkZcIitcblx0XHRcIlxcdTAyMzFcXHgwN1xcZlxceDAyXFx4MDJcXHUwMjMwXFx1MDIyRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzMFxcdTAyMzFcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDIzMVxcdTAyMzJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMzJcXHUwMjM0XFx4MDdcXHgxM1xceDAyXFx4MDJcXHUwMjMzXFx1MDIzNVwiK1xuXHRcdFwiXFx4MDdcXGZcXHgwMlxceDAyXFx1MDIzNFxcdTAyMzNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMzRcXHUwMjM1XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyMzVcXHUwMjM2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjM2XFx1MDIzN1xceDA1XFx4MUFcXHgwRVxceDAyXFx1MDIzNzVcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDIzOFxcdTAyM0FcXHgwNyFcXHgwMlxceDAyXFx1MDIzOVxcdTAyM0JcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjNBXFx1MDIzOVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjNBXFx1MDIzQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzQlxcdTAyM0RcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDIzQ1xcdTAyM0VcXHgwN1xcZlxceDAyXFx4MDJcXHUwMjNEXFx1MDIzQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzRFxcdTAyM0VcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDIzRVxcdTAyNDBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyM0ZcXHUwMjQxXFx4MDdcXHZcXHgwMlxceDAyXFx1MDI0MFwiK1xuXHRcdFwiXFx1MDIzRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0MFxcdTAyNDFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDFcXHUwMjQzXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyNDJcXHUwMjQ0XFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMjQzXFx1MDI0MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0M1wiK1xuXHRcdFwiXFx1MDI0NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0NFxcdTAyNTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDVcXHUwMjQ3XFx4MDdcXHgxNVwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyNDZcXHUwMjQ4XFx4MDdcXHZcXHgwMlxceDAyXFx1MDI0N1xcdTAyNDZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDdcXHUwMjQ4XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDhcXHUwMjRBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjQ5XFx1MDI0QlxceDA3XFxmXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI0QVxcdTAyNDlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNEFcXHUwMjRCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjRCXFx1MDI0RFxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjRDXFx1MDI0RVxceDA3XFx2XFx4MDJcXHgwMlxcdTAyNERcXHUwMjRDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjREXCIrXG5cdFx0XCJcXHUwMjRFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjRFXFx1MDI0RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0RlxcdTAyNTFcXHgwNVxceDFBXCIrXG5cdFx0XCJcXHgwRVxceDAyXFx1MDI1MFxcdTAyNDVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTFcXHUwMjU0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjUyXCIrXG5cdFx0XCJcXHUwMjUwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjUyXFx1MDI1M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1M1xcdTAyNTZcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDI1NFxcdTAyNTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTVcXHUwMjU3XFx4MDdcXHZcXHgwMlxceDAyXFx1MDI1NlxcdTAyNTVcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1NlxcdTAyNTdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTdcXHUwMjU5XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyNThcXHUwMjVBXFx4MDdcXGZcXHgwMlxceDAyXFx1MDI1OVxcdTAyNThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTlcXHUwMjVBXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyNUFcXHUwMjVDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjVCXFx1MDI1RFxceDA3XFx2XFx4MDJcXHgwMlxcdTAyNUNcIitcblx0XHRcIlxcdTAyNUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNUNcXHUwMjVEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjVEXFx1MDI1RVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjVFXFx1MDI2N1xceDA3XFxcIlxceDAyXFx4MDJcXHUwMjVGXFx1MDI2MlxceDA1OFxceDFEXFx4MDJcXHUwMjYwXFx1MDI2MVwiK1xuXHRcdFwiXFx4MDchXFx4MDJcXHgwMlxcdTAyNjFcXHUwMjYzXFx4MDdcXFwiXFx4MDJcXHgwMlxcdTAyNjJcXHUwMjYwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjYzXCIrXG5cdFx0XCJcXHUwMjY0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjY0XFx1MDI2MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2NFxcdTAyNjVcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDI2NVxcdTAyNjdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNjZcXHUwMjM4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjY2XCIrXG5cdFx0XCJcXHUwMjVGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjY3N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2OFxcdTAyNjlcXGJcXHgxRFxceDAxXFx4MDJcIitcblx0XHRcIlxcdTAyNjlcXHUwMjcwXFx4MDVcXHgxQ1xceDBGXFx4MDJcXHUwMjZBXFx1MDI3MFxceDA1XFxcIlxceDEyXFx4MDJcXHUwMjZCXFx1MDI3MFxceDA1XCIrXG5cdFx0XCImXFx4MTRcXHgwMlxcdTAyNkNcXHUwMjcwXFx4MDUsXFx4MTdcXHgwMlxcdTAyNkRcXHUwMjcwXFx4MDUuXFx4MThcXHgwMlxcdTAyNkVcXHUwMjcwXCIrXG5cdFx0XCJcXHgwNTBcXHgxOVxceDAyXFx1MDI2RlxcdTAyNjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNkZcXHUwMjZBXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyNkZcXHUwMjZCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjZGXFx1MDI2Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2RlxcdTAyNkRcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDI2RlxcdTAyNkVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNzBcXHUwMjg4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjcxXCIrXG5cdFx0XCJcXHUwMjczXFxmXFx0XFx4MDJcXHgwMlxcdTAyNzJcXHUwMjc0XFx4MDdcXGZcXHgwMlxceDAyXFx1MDI3M1xcdTAyNzJcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI3M1xcdTAyNzRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNzRcXHUwMjc2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjc1XFx1MDI3N1xceDA3XCIrXG5cdFx0XCJcXHZcXHgwMlxceDAyXFx1MDI3NlxcdTAyNzVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNzZcXHUwMjc3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjc3XCIrXG5cdFx0XCJcXHUwMjc5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjc4XFx1MDI3QVxceDA3XFxmXFx4MDJcXHgwMlxcdTAyNzlcXHUwMjc4XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyNzlcXHUwMjdBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjdBXFx1MDI3QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3QlxcdTAyN0RcIitcblx0XHRcIlxcdFxceDAzXFx4MDJcXHgwMlxcdTAyN0NcXHUwMjdFXFx4MDdcXGZcXHgwMlxceDAyXFx1MDI3RFxcdTAyN0NcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyN0RcIitcblx0XHRcIlxcdTAyN0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyN0VcXHUwMjgwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjdGXFx1MDI4MVxceDA3XFx2XFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDI4MFxcdTAyN0ZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyODBcXHUwMjgxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjgxXFx1MDI4M1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjgyXFx1MDI4NFxceDA3XFxmXFx4MDJcXHgwMlxcdTAyODNcXHUwMjgyXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyODNcXHUwMjg0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjg0XFx1MDI4NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4NVxcdTAyODdcXHgwNVwiK1xuXHRcdFwiOFxceDFEXFxuXFx1MDI4NlxcdTAyNzFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyODdcXHUwMjhBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjg4XCIrXG5cdFx0XCJcXHUwMjg2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjg4XFx1MDI4OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4OTlcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDI4QVxcdTAyODhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOEJcXHUwMjhFXFx4MDVcXHgxNlxcZlxceDAyXFx1MDI4Q1xcdTAyOERcIitcblx0XHRcIlxceDA3XFx4MTRcXHgwMlxceDAyXFx1MDI4RFxcdTAyOEZcXHgwNTxcXHgxRlxceDAyXFx1MDI4RVxcdTAyOENcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI4RlxcdTAyOTBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOTBcXHUwMjhFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjkwXFx1MDI5MVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjkxXFx1MDI5QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5MlxcdTAyOTVcXHgwNVxceDE4XFxyXFx4MDJcXHUwMjkzXCIrXG5cdFx0XCJcXHUwMjk0XFx4MDdcXHgxNFxceDAyXFx4MDJcXHUwMjk0XFx1MDI5NlxceDA1PFxceDFGXFx4MDJcXHUwMjk1XFx1MDI5M1xceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMjk2XFx1MDI5N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5N1xcdTAyOTVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOTdcXHUwMjk4XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOThcXHUwMjlBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjk5XFx1MDI4QlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjk5XFx1MDI5MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5QTtcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOUJcXHUwMjlFXFx4MDVcXHgxNlwiK1xuXHRcdFwiXFxmXFx4MDJcXHUwMjlDXFx1MDI5RVxceDA1XFx4MThcXHJcXHgwMlxcdTAyOURcXHUwMjlCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjlEXFx1MDI5Q1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjlFPVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5RlxcdTAyQTBcXGIgXFx4MDFcXHgwMlxcdTAyQTBcXHUwMkE3XCIrXG5cdFx0XCJcXHgwNUAhXFx4MDJcXHUwMkExXFx1MDJBN1xceDA1QlxcXCJcXHgwMlxcdTAyQTJcXHUwMkE3XFx4MDVEI1xceDAyXFx1MDJBM1xcdTAyQTdcXHgwNVwiK1xuXHRcdFwiSiZcXHgwMlxcdTAyQTRcXHUwMkE3XFx4MDVMXFwnXFx4MDJcXHUwMkE1XFx1MDJBN1xceDA1TihcXHgwMlxcdTAyQTZcXHUwMjlGXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyQTZcXHUwMkExXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkE2XFx1MDJBMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBNlwiK1xuXHRcdFwiXFx1MDJBM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBNlxcdTAyQTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQTZcXHUwMkE1XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyQTdcXHUwMkJDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkE4XFx1MDJBQVxcZlxcdFxceDAyXFx4MDJcXHUwMkE5XFx1MDJBQlwiK1xuXHRcdFwiXFx4MDdcXGZcXHgwMlxceDAyXFx1MDJBQVxcdTAyQTlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQUFcXHUwMkFCXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyQUJcXHUwMkFDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkFDXFx1MDJBRVxcdFxceDA1XFx4MDJcXHgwMlxcdTAyQURcXHUwMkFGXFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHUwMkFFXFx1MDJBRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBRVxcdTAyQUZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQUZcIitcblx0XHRcIlxcdTAyQjBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQjBcXHUwMkJCXFx4MDU+IFxcblxcdTAyQjFcXHUwMkIzXFxmXFxiXFx4MDJcXHgwMlxcdTAyQjJcIitcblx0XHRcIlxcdTAyQjRcXHgwN1xcZlxceDAyXFx4MDJcXHUwMkIzXFx1MDJCMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCM1xcdTAyQjRcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJCNFxcdTAyQjVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQjVcXHUwMkI3XFx0XFx4MDZcXHgwMlxceDAyXFx1MDJCNlxcdTAyQjhcIitcblx0XHRcIlxceDA3XFxmXFx4MDJcXHgwMlxcdTAyQjdcXHUwMkI2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkI3XFx1MDJCOFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkI4XFx1MDJCOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCOVxcdTAyQkJcXHgwNT4gXFx0XFx1MDJCQVxcdTAyQThcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJCQVxcdTAyQjFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQkJcXHUwMkJFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkJDXFx1MDJCQVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkJDXFx1MDJCRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCRD9cXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQkVcIitcblx0XHRcIlxcdTAyQkNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQkZcXHUwMkMwXFx0XFx4MDZcXHgwMlxceDAyXFx1MDJDMFxcdTAyQzFcXHgwNT4gXFx4MDJcIitcblx0XHRcIlxcdTAyQzFBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkMyXFx1MDJDNFxceDA3IVxceDAyXFx4MDJcXHUwMkMzXFx1MDJDNVxceDA3XFx2XFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJDNFxcdTAyQzNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQzRcXHUwMkM1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkM1XFx1MDJDN1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkM2XFx1MDJDOFxceDA3XFxmXFx4MDJcXHgwMlxcdTAyQzdcXHUwMkM2XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyQzdcXHUwMkM4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkM4XFx1MDJDQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDOVxcdTAyQ0JcXHgwN1wiK1xuXHRcdFwiXFx2XFx4MDJcXHgwMlxcdTAyQ0FcXHUwMkM5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkNBXFx1MDJDQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDQlwiK1xuXHRcdFwiXFx1MDJDRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDQ1xcdTAyQ0VcXHgwNT4gXFx4MDJcXHUwMkNEXFx1MDJDQ1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkNEXFx1MDJDRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDRVxcdTAyRENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQ0ZcXHUwMkQxXFx4MDdcIitcblx0XHRcIlxceDE1XFx4MDJcXHgwMlxcdTAyRDBcXHUwMkQyXFx4MDdcXHZcXHgwMlxceDAyXFx1MDJEMVxcdTAyRDBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRDFcIitcblx0XHRcIlxcdTAyRDJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRDJcXHUwMkQ0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkQzXFx1MDJENVxceDA3XFxmXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJENFxcdTAyRDNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRDRcXHUwMkQ1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkQ1XFx1MDJEN1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkQ2XFx1MDJEOFxceDA3XFx2XFx4MDJcXHgwMlxcdTAyRDdcXHUwMkQ2XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyRDdcXHUwMkQ4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkQ4XFx1MDJEOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJEOVxcdTAyREJcXHgwNVwiK1xuXHRcdFwiPiBcXHgwMlxcdTAyREFcXHUwMkNGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkRCXFx1MDJERVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJEQ1xcdTAyREFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJEQ1xcdTAyRERcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRERcXHUwMkUwXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyREVcXHUwMkRDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkRGXFx1MDJFMVxceDA3XFx2XFx4MDJcXHgwMlxcdTAyRTBcXHUwMkRGXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyRTBcXHUwMkUxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkUxXFx1MDJFM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFMlwiK1xuXHRcdFwiXFx1MDJFNFxceDA3XFxmXFx4MDJcXHgwMlxcdTAyRTNcXHUwMkUyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkUzXFx1MDJFNFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMkU0XFx1MDJFNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFNVxcdTAyRTdcXHgwN1xcdlxceDAyXFx4MDJcXHUwMkU2XFx1MDJFNVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkU2XFx1MDJFN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFN1xcdTAyRThcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJFOFxcdTAyRTlcXHgwN1xcXCJcXHgwMlxceDAyXFx1MDJFOUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRUFcXHUwMkVDXFx4MDdcXHgxRFwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyRUJcXHUwMkVEXFx4MDdcXGZcXHgwMlxceDAyXFx1MDJFQ1xcdTAyRUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRUNcXHUwMkVEXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRURcXHUwMkVGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkVFXFx1MDJGMFxceDA3XFx2XFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJFRlxcdTAyRUVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRUZcXHUwMkYwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkYwXFx1MDJGMlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMkYxXFx1MDJGM1xceDA3XFxmXFx4MDJcXHgwMlxcdTAyRjJcXHUwMkYxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkYyXCIrXG5cdFx0XCJcXHUwMkYzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkYzXFx1MDJGNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGNFxcdTAyRjZcXHgwNUYkXFx4MDJcIitcblx0XHRcIlxcdTAyRjVcXHUwMkY0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkY1XFx1MDJGNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGNlxcdTAyRjhcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDJGN1xcdTAyRjlcXHgwN1xcZlxceDAyXFx4MDJcXHUwMkY4XFx1MDJGN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGOFwiK1xuXHRcdFwiXFx1MDJGOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGOVxcdTAyRkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRkFcXHUwMkZDXFx4MDdcXHZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMkZCXFx1MDJGQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGQlxcdTAyRkNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRkNcXHUwMkZFXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRkRcXHUwMkZGXFx4MDdcXGZcXHgwMlxceDAyXFx1MDJGRVxcdTAyRkRcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJGRVxcdTAyRkZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRkZcXHUwMzAwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzAwXFx1MDMwMVxceDA3XCIrXG5cdFx0XCJcXHgxRVxceDAyXFx4MDJcXHUwMzAxRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwMlxcdTAzMTNcXHgwNUglXFx4MDJcXHUwMzAzXFx1MDMwNVwiK1xuXHRcdFwiXFx4MDdcXGZcXHgwMlxceDAyXFx1MDMwNFxcdTAzMDNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDRcXHUwMzA1XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzMDVcXHUwMzA2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzA2XFx1MDMwOFxceDA3XFx4MTVcXHgwMlxceDAyXFx1MDMwN1xcdTAzMDlcXHgwN1wiK1xuXHRcdFwiXFxmXFx4MDJcXHgwMlxcdTAzMDhcXHUwMzA3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzA4XFx1MDMwOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwOVwiK1xuXHRcdFwiXFx1MDMwQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwQVxcdTAzMENcXHgwN1xcdlxceDAyXFx4MDJcXHUwMzBCXFx1MDMwQVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzBCXFx1MDMwQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwQ1xcdTAzMEVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMERcXHUwMzBGXCIrXG5cdFx0XCJcXHgwN1xcZlxceDAyXFx4MDJcXHUwMzBFXFx1MDMwRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwRVxcdTAzMEZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDMwRlxcdTAzMTBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMTBcXHUwMzEyXFx4MDVIJVxceDAyXFx1MDMxMVxcdTAzMDRcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDMxMlxcdTAzMTVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMTNcXHUwMzExXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzEzXCIrXG5cdFx0XCJcXHUwMzE0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzE0R1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxNVxcdTAzMTNcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDMxNlxcdTAzMThcXHgwNUxcXCdcXHgwMlxcdTAzMTdcXHUwMzE5XFx4MDdcXGZcXHgwMlxceDAyXFx1MDMxOFxcdTAzMTdcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDMxOFxcdTAzMTlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMTlcXHUwMzFBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzFBXCIrXG5cdFx0XCJcXHUwMzFDXFx4MDdcXHgxM1xceDAyXFx4MDJcXHUwMzFCXFx1MDMxRFxceDA3XFxmXFx4MDJcXHgwMlxcdTAzMUNcXHUwMzFCXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzMUNcXHUwMzFEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzFEXFx1MDMxRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxRVxcdTAzMUZcIitcblx0XHRcIlxceDA1RCNcXHgwMlxcdTAzMUZcXHUwMzJCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzIwXFx1MDMyMlxceDA1TFxcJ1xceDAyXFx1MDMyMVxcdTAzMjNcIitcblx0XHRcIlxceDA3XFxmXFx4MDJcXHgwMlxcdTAzMjJcXHUwMzIxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzIyXFx1MDMyM1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzIzXFx1MDMyNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyNFxcdTAzMjZcXHgwN1xceDEzXFx4MDJcXHgwMlxcdTAzMjVcXHUwMzI3XFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHUwMzI2XFx1MDMyNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyNlxcdTAzMjdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjdcIitcblx0XHRcIlxcdTAzMjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjhcXHUwMzI5XFx4MDVMXFwnXFx4MDJcXHUwMzI5XFx1MDMyQlxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzJBXFx1MDMxNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyQVxcdTAzMjBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMkJJXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzMkNcXHUwMzJFXFx4MDdcXHgxRlxceDAyXFx4MDJcXHUwMzJEXFx1MDMyRlxceDA3XFxmXFx4MDJcXHgwMlxcdTAzMkVcIitcblx0XHRcIlxcdTAzMkRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMkVcXHUwMzJGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzJGXFx1MDMzMVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMzMwXFx1MDMzMlxceDA3XFx2XFx4MDJcXHgwMlxcdTAzMzFcXHUwMzMwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzMxXFx1MDMzMlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzMyXFx1MDMzNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzM1xcdTAzMzVcXHgwN1xcZlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzMzRcXHUwMzMzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzM0XFx1MDMzNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzNVxcdTAzMzdcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDMzNlxcdTAzMzhcXHgwNVxceDFFXFx4MTBcXHgwMlxcdTAzMzdcXHUwMzM2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzM3XCIrXG5cdFx0XCJcXHUwMzM4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzM4XFx1MDMzQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzOVxcdTAzM0JcXHgwN1xcZlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzM0FcXHUwMzM5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzNBXFx1MDMzQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzQlxcdTAzM0RcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzQ1xcdTAzM0VcXHgwN1xcdlxceDAyXFx4MDJcXHUwMzNEXFx1MDMzQ1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzNEXFx1MDMzRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzRVxcdTAzNDBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzM0ZcXHUwMzQxXFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHUwMzQwXFx1MDMzRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0MFxcdTAzNDFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDFcIitcblx0XHRcIlxcdTAzNDJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDJcXHUwMzQ0XFx4MDcgXFx4MDJcXHgwMlxcdTAzNDNcXHUwMzQ1XFx4MDdcXGZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzQ0XFx1MDM0M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0NFxcdTAzNDVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDVcXHUwMzQ3XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDZcXHUwMzQ4XFx4MDdcXHZcXHgwMlxceDAyXFx1MDM0N1xcdTAzNDZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDM0N1xcdTAzNDhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDhcXHUwMzRBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzQ5XFx1MDM0QlxceDA3XCIrXG5cdFx0XCJcXGZcXHgwMlxceDAyXFx1MDM0QVxcdTAzNDlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNEFcXHUwMzRCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzRCXCIrXG5cdFx0XCJcXHUwMzRDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzRDXFx1MDM0RVxceDA3XFx4MUFcXHgwMlxceDAyXFx1MDM0RFxcdTAzNEZcXHgwN1xcZlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzNEVcXHUwMzREXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzRFXFx1MDM0RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0RlxcdTAzNTFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM1MFxcdTAzNTJcXHgwN1xcdlxceDAyXFx4MDJcXHUwMzUxXFx1MDM1MFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzUxXFx1MDM1MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM1MlxcdTAzNTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNTNcXHUwMzU1XFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHUwMzU0XFx1MDM1M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM1NFxcdTAzNTVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNTVcIitcblx0XHRcIlxcdTAzNTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNTZcXHUwMzU4XFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMzU3XFx1MDM1OVxceDA3XFx4MTdcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMzU4XFx1MDM1N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM1OFxcdTAzNTlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNTlcIitcblx0XHRcIlxcdTAzNzNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNUFcXHUwMzVDXFx4MDUgXFx4MTFcXHgwMlxcdTAzNUJcXHUwMzVEXFx4MDdcXGZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzVDXFx1MDM1QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM1Q1xcdTAzNURcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNURcXHUwMzVGXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNUVcXHUwMzYwXFx4MDdcXHZcXHgwMlxceDAyXFx1MDM1RlxcdTAzNUVcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDM1RlxcdTAzNjBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNjBcXHUwMzYyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzYxXFx1MDM2M1xceDA3XCIrXG5cdFx0XCJcXGZcXHgwMlxceDAyXFx1MDM2MlxcdTAzNjFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNjJcXHUwMzYzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzYzXCIrXG5cdFx0XCJcXHUwMzY0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzY0XFx1MDM2NlxceDA3XFx4MUFcXHgwMlxceDAyXFx1MDM2NVxcdTAzNjdcXHgwN1xcZlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzNjZcXHUwMzY1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzY2XFx1MDM2N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2N1xcdTAzNjlcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2OFxcdTAzNkFcXHgwN1xcdlxceDAyXFx4MDJcXHUwMzY5XFx1MDM2OFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzY5XFx1MDM2QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2QVxcdTAzNkNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNkJcXHUwMzZEXFx4MDdcIitcblx0XHRcIlxcZlxceDAyXFx4MDJcXHUwMzZDXFx1MDM2QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM2Q1xcdTAzNkRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNkRcIitcblx0XHRcIlxcdTAzNkVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNkVcXHUwMzcwXFx4MDVcXHgxQVxceDBFXFx4MDJcXHUwMzZGXFx1MDM3MVxceDA3XFx4MTdcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMzcwXFx1MDM2RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3MFxcdTAzNzFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNzFcIitcblx0XHRcIlxcdTAzNzNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNzJcXHUwMzJDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzcyXFx1MDM1QVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMzczS1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3NFxcdTAzNzVcXHRcXHgwN1xceDAyXFx4MDJcXHUwMzc1TVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMzc2XFx1MDM3OFxceDA3XFx4MUZcXHgwMlxceDAyXFx1MDM3N1xcdTAzNzlcXHgwN1xcZlxceDAyXFx4MDJcXHUwMzc4XFx1MDM3N1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzc4XFx1MDM3OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3OVxcdTAzN0FcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDM3QVxcdTAzN0NcXHgwNT4gXFx4MDJcXHUwMzdCXFx1MDM3RFxceDA3XFxmXFx4MDJcXHgwMlxcdTAzN0NcXHUwMzdCXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzN0NcXHUwMzdEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzdEXFx1MDM3RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM3RVxcdTAzN0ZcIitcblx0XHRcIlxceDA3IFxceDAyXFx4MDJcXHUwMzdGT1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4MFxcdTAzODFcXHgwNVIqXFx4MDJcXHUwMzgxUVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMzgyXFx1MDM4NlxceDA1VCtcXHgwMlxcdTAzODNcXHUwMzg1XFx4MDVYLVxceDAyXFx1MDM4NFxcdTAzODNcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDM4NVxcdTAzODhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzODZcXHUwMzg0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzg2XCIrXG5cdFx0XCJcXHUwMzg3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzg3XFx1MDM5MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4OFxcdTAzODZcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDM4OVxcdTAzOERcXHgwNVxcXFwvXFx4MDJcXHUwMzhBXFx1MDM4Q1xceDA1WC1cXHgwMlxcdTAzOEJcXHUwMzhBXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzOENcXHUwMzhGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzhEXFx1MDM4QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4RFwiK1xuXHRcdFwiXFx1MDM4RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM4RVxcdTAzOTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOEZcXHUwMzhEXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzOTBcXHUwMzgyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzkwXFx1MDM4OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5MVwiK1xuXHRcdFwiU1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5MlxcdTAzOTRcXHgwN1xcZlxceDAyXFx4MDJcXHUwMzkzXFx1MDM5MlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzkzXFx1MDM5NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5NFxcdTAzOTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOTVcXHUwMzk3XFx4MDVcIitcblx0XHRcIlYsXFx4MDJcXHUwMzk2XFx1MDM5NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5N1xcdTAzOThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOThcXHUwMzk2XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOThcXHUwMzk5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzk5XFx1MDM5RlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzlBXFx1MDM5RVxceDA1VixcXHgwMlxcdTAzOUJcXHUwMzlFXFx4MDdcXGZcXHgwMlxceDAyXFx1MDM5Q1xcdTAzOUVcXHgwN1xceDBFXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDM5RFxcdTAzOUFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzOURcXHUwMzlCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzlEXFx1MDM5Q1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzlFXFx1MDNBMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM5RlxcdTAzOURcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDM5RlxcdTAzQTBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQTBVXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0ExXFx1MDM5RlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwM0EyXFx1MDNBQ1xceDA3XFxyXFx4MDJcXHgwMlxcdTAzQTNcXHUwM0FDXFx4MDdcXG5cXHgwMlxceDAyXFx1MDNBNFxcdTAzQUNcIitcblx0XHRcIlxceDA3XFx4MTJcXHgwMlxceDAyXFx1MDNBNVxcdTAzQUNcXHgwN1xceDFEXFx4MDJcXHgwMlxcdTAzQTZcXHUwM0FDXFx4MDdcXHgxRVxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzQTdcXHUwM0FDXFx4MDdcXHgxM1xceDAyXFx4MDJcXHUwM0E4XFx1MDNBQ1xceDA3XFx4MTBcXHgwMlxceDAyXFx1MDNBOVxcdTAzQUNcXHgwN1wiK1xuXHRcdFwiXFx4MTRcXHgwMlxceDAyXFx1MDNBQVxcdTAzQUNcXHgwNUxcXCdcXHgwMlxcdTAzQUJcXHUwM0EyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0FCXCIrXG5cdFx0XCJcXHUwM0EzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0FCXFx1MDNBNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBQlxcdTAzQTVcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDNBQlxcdTAzQTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQUJcXHUwM0E3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0FCXCIrXG5cdFx0XCJcXHUwM0E4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0FCXFx1MDNBOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNBQlxcdTAzQUFcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDNBQ1dcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQURcXHUwM0IwXFx4MDVcXFxcL1xceDAyXFx1MDNBRVxcdTAzQjBcXHgwNVwiK1xuXHRcdFwiWi5cXHgwMlxcdTAzQUZcXHUwM0FEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0FGXFx1MDNBRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNCMFlcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNCMVxcdTAzQjVcXHgwNVYsXFx4MDJcXHUwM0IyXFx1MDNCNVxceDA3XFxmXFx4MDJcXHgwMlxcdTAzQjNcIitcblx0XHRcIlxcdTAzQjVcXHgwN1xceDBFXFx4MDJcXHgwMlxcdTAzQjRcXHUwM0IxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0I0XFx1MDNCMlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwM0I0XFx1MDNCM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNCNVxcdTAzQjZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQjZcIitcblx0XHRcIlxcdTAzQjRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQjZcXHUwM0I3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0I3W1xceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwM0I4XFx1MDNCOVxceDA3XFx4MUNcXHgwMlxceDAyXFx1MDNCOVxcdTAzQkFcXHgwNV4wXFx4MDJcXHUwM0JBXFx1MDNCQ1xceDA3XCIrXG5cdFx0XCJcXGZcXHgwMlxceDAyXFx1MDNCQlxcdTAzQkRcXHgwNWAxXFx4MDJcXHUwM0JDXFx1MDNCQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNCQ1xcdTAzQkRcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNCRFxcdTAzQkVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQkVcXHUwM0JGXFx4MDdcXHgxRVxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzQkZdXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0MwXFx1MDNDMVxceDA1XFx4MTZcXGZcXHgwMlxcdTAzQzFfXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzQzJcXHUwM0M0XFx4MDVkM1xceDAyXFx1MDNDM1xcdTAzQzJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQzRcXHUwM0M1XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzQzVcXHUwM0MzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0M1XFx1MDNDNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNDNlwiK1xuXHRcdFwiYVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNDN1xcdTAzQ0JcXHgwN1xceDFEXFx4MDJcXHgwMlxcdTAzQzhcXHUwM0NBXFx4MDVkM1xceDAyXFx1MDNDOVwiK1xuXHRcdFwiXFx1MDNDOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNDQVxcdTAzQ0RcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzQ0JcXHUwM0M5XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzQ0JcXHUwM0NDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0NDXFx1MDNDRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNDRFwiK1xuXHRcdFwiXFx1MDNDQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNDRVxcdTAzQ0ZcXHgwN1xceDFFXFx4MDJcXHgwMlxcdTAzQ0ZjXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzRDBcXHUwM0RBXFx4MDViMlxceDAyXFx1MDNEMVxcdTAzRDZcXHgwNWY0XFx4MDJcXHUwM0QyXFx1MDNEM1xceDA3XFx2XFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDNEM1xcdTAzRDVcXHgwNWY0XFx4MDJcXHUwM0Q0XFx1MDNEMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNENVxcdTAzRDhcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDNENlxcdTAzRDRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzRDZcXHUwM0Q3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0Q3XCIrXG5cdFx0XCJcXHUwM0RBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0Q4XFx1MDNENlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDNEOVxcdTAzRDBcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDNEOVxcdTAzRDFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzREFlXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwM0RCXFx1MDNEQ1wiK1xuXHRcdFwiXFx0XFxiXFx4MDJcXHgwMlxcdTAzRENnXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhDNmtvdFxceDgwXFx4ODdcXHg5NVxceDk5XFx4QTJcXHhBRVxceEIzXCIrXG5cdFx0XCJcXHhCRFxceEMxXFx4QzlcXHhDRFxceEQxXFx4RDVcXHhERFxceEUxXFx4RTZcXHhGMFxceEY0XFx4RjhcXHhGQ1xcdTAxMDFcXHUwMTA5XFx1MDEwRFwiK1xuXHRcdFwiXFx1MDExM1xcdTAxMTdcXHUwMTFDXFx1MDEyMlxcdTAxMkFcXHUwMTMxXFx1MDEzOFxcdTAxM0FcXHUwMTQwXFx1MDE0RlxcdTAxNTNcXHUwMTU2XCIrXG5cdFx0XCJcXHUwMTU5XFx1MDE1RFxcdTAxNjBcXHUwMTYzXFx1MDE2OFxcdTAxNkRcXHUwMTcwXFx1MDE3M1xcdTAxNzZcXHUwMTc5XFx1MDE3Q1xcdTAxN0ZcIitcblx0XHRcIlxcdTAxODNcXHUwMTg2XFx1MDE4OVxcdTAxOERcXHUwMTkwXFx1MDE5M1xcdTAxOTdcXHUwMTlCXFx1MDE5RVxcdTAxQTFcXHUwMUE1XFx1MDFBOFwiK1xuXHRcdFwiXFx1MDFBQlxcdTAxQUZcXHUwMUIxXFx1MDFCNlxcdTAxQjlcXHUwMUJFXFx1MDFDM1xcdTAxQzdcXHUwMUNBXFx1MDFDRFxcdTAxRDFcXHUwMUQ1XCIrXG5cdFx0XCJcXHUwMURCXFx1MDFERlxcdTAxRTRcXHUwMUVBXFx1MDFFRVxcdTAxRjRcXHUwMUY4XFx1MDIwMVxcdTAyMDRcXHUwMjA3XFx1MDIwQVxcdTAyMERcIitcblx0XHRcIlxcdTAyMTBcXHUwMjEzXFx1MDIxOVxcdTAyMURcXHUwMjIwXFx1MDIyM1xcdTAyMjhcXHUwMjJEXFx1MDIzMFxcdTAyMzRcXHUwMjNBXFx1MDIzRFwiK1xuXHRcdFwiXFx1MDI0MFxcdTAyNDNcXHUwMjQ3XFx1MDI0QVxcdTAyNERcXHUwMjUyXFx1MDI1NlxcdTAyNTlcXHUwMjVDXFx1MDI2NFxcdTAyNjZcXHUwMjZGXCIrXG5cdFx0XCJcXHUwMjczXFx1MDI3NlxcdTAyNzlcXHUwMjdEXFx1MDI4MFxcdTAyODNcXHUwMjg4XFx1MDI5MFxcdTAyOTdcXHUwMjk5XFx1MDI5RFxcdTAyQTZcIitcblx0XHRcIlxcdTAyQUFcXHUwMkFFXFx1MDJCM1xcdTAyQjdcXHUwMkJBXFx1MDJCQ1xcdTAyQzRcXHUwMkM3XFx1MDJDQVxcdTAyQ0RcXHUwMkQxXFx1MDJENFwiK1xuXHRcdFwiXFx1MDJEN1xcdTAyRENcXHUwMkUwXFx1MDJFM1xcdTAyRTZcXHUwMkVDXFx1MDJFRlxcdTAyRjJcXHUwMkY1XFx1MDJGOFxcdTAyRkJcXHUwMkZFXCIrXG5cdFx0XCJcXHUwMzA0XFx1MDMwOFxcdTAzMEJcXHUwMzBFXFx1MDMxM1xcdTAzMThcXHUwMzFDXFx1MDMyMlxcdTAzMjZcXHUwMzJBXFx1MDMyRVxcdTAzMzFcIitcblx0XHRcIlxcdTAzMzRcXHUwMzM3XFx1MDMzQVxcdTAzM0RcXHUwMzQwXFx1MDM0NFxcdTAzNDdcXHUwMzRBXFx1MDM0RVxcdTAzNTFcXHUwMzU0XFx1MDM1OFwiK1xuXHRcdFwiXFx1MDM1Q1xcdTAzNUZcXHUwMzYyXFx1MDM2NlxcdTAzNjlcXHUwMzZDXFx1MDM3MFxcdTAzNzJcXHUwMzc4XFx1MDM3Q1xcdTAzODZcXHUwMzhEXCIrXG5cdFx0XCJcXHUwMzkwXFx1MDM5M1xcdTAzOThcXHUwMzlEXFx1MDM5RlxcdTAzQUJcXHUwM0FGXFx1MDNCNFxcdTAzQjZcXHUwM0JDXFx1MDNDNVxcdTAzQ0JcIitcblx0XHRcIlxcdTAzRDZcXHUwM0Q5XCI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgX3NlcmlhbGl6ZWRBVE46IHN0cmluZyA9IFV0aWxzLmpvaW4oXG5cdFx0W1xuXHRcdFx0WERvY1N5bnRheFBhcnNlci5fc2VyaWFsaXplZEFUTlNlZ21lbnQwLFxuXHRcdFx0WERvY1N5bnRheFBhcnNlci5fc2VyaWFsaXplZEFUTlNlZ21lbnQxXG5cdFx0XSxcblx0XHRcIlwiXG5cdCk7XG5cdHB1YmxpYyBzdGF0aWMgX19BVE46IEFUTjtcblx0cHVibGljIHN0YXRpYyBnZXQgX0FUTigpOiBBVE4ge1xuXHRcdGlmICghWERvY1N5bnRheFBhcnNlci5fX0FUTikge1xuXHRcdFx0WERvY1N5bnRheFBhcnNlci5fX0FUTiA9IG5ldyBBVE5EZXNlcmlhbGl6ZXIoKS5kZXNlcmlhbGl6ZShVdGlscy50b0NoYXJBcnJheShYRG9jU3ludGF4UGFyc2VyLl9zZXJpYWxpemVkQVROKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuX19BVE47XG5cdH1cblxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRhdGlvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBFT0YoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5FT0YsIDApOyB9XG5cdHB1YmxpYyBib2R5KCk6IEJvZHlDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBCb2R5Q29udGV4dCk7XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfZG9jdW1lbnRhdGlvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRG9jdW1lbnRhdGlvbikgbGlzdGVuZXIuZW50ZXJEb2N1bWVudGF0aW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0RG9jdW1lbnRhdGlvbikgbGlzdGVuZXIuZXhpdERvY3VtZW50YXRpb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERvY3VtZW50YXRpb24pIHJldHVybiB2aXNpdG9yLnZpc2l0RG9jdW1lbnRhdGlvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQm9keUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBhbm5vdGF0aW9ucygpOiBBbm5vdGF0aW9uc0NvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIEFubm90YXRpb25zQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHdoaXRlc3BhY2UoKTogV2hpdGVzcGFjZUNvbnRleHRbXTtcblx0cHVibGljIHdoaXRlc3BhY2UoaTogbnVtYmVyKTogV2hpdGVzcGFjZUNvbnRleHQ7XG5cdHB1YmxpYyB3aGl0ZXNwYWNlKGk/OiBudW1iZXIpOiBXaGl0ZXNwYWNlQ29udGV4dCB8IFdoaXRlc3BhY2VDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhXaGl0ZXNwYWNlQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIFdoaXRlc3BhY2VDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2JvZHk7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckJvZHkpIGxpc3RlbmVyLmVudGVyQm9keSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEJvZHkpIGxpc3RlbmVyLmV4aXRCb2R5KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRCb2R5KSByZXR1cm4gdmlzaXRvci52aXNpdEJvZHkodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFdoaXRlc3BhY2VDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgMCk7IH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfd2hpdGVzcGFjZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyV2hpdGVzcGFjZSkgbGlzdGVuZXIuZW50ZXJXaGl0ZXNwYWNlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0V2hpdGVzcGFjZSkgbGlzdGVuZXIuZXhpdFdoaXRlc3BhY2UodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFdoaXRlc3BhY2UpIHJldHVybiB2aXNpdG9yLnZpc2l0V2hpdGVzcGFjZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbnNDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgdGFnKCk6IFRhZ0NvbnRleHRbXTtcblx0cHVibGljIHRhZyhpOiBudW1iZXIpOiBUYWdDb250ZXh0O1xuXHRwdWJsaWMgdGFnKGk/OiBudW1iZXIpOiBUYWdDb250ZXh0IHwgVGFnQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoVGFnQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIFRhZ0NvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYW5ub3RhdGlvbnM7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckFubm90YXRpb25zKSBsaXN0ZW5lci5lbnRlckFubm90YXRpb25zKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0QW5ub3RhdGlvbnMpIGxpc3RlbmVyLmV4aXRBbm5vdGF0aW9ucyh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0QW5ub3RhdGlvbnMpIHJldHVybiB2aXNpdG9yLnZpc2l0QW5ub3RhdGlvbnModGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFRhZ0NvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyB0YWdOYW1lKCk6IFRhZ05hbWVDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBUYWdOYW1lQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTUlOVVMoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5NSU5VUywgMCk7IH1cblx0cHVibGljIGRlc2NyaXB0aW9uKCk6IERlc2NyaXB0aW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgRGVzY3JpcHRpb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIDApOyB9XG5cdHB1YmxpYyB0YWdJZGVudGlmaWVyKCk6IFRhZ0lkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBUYWdJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIEVRVUFMKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuRVFVQUwsIDApOyB9XG5cdHB1YmxpYyBleHByZXNzaW9uKCk6IEV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIENPTE9OKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ09MT04sIDApOyB9XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBUeXBlQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3RhZzsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVGFnKSBsaXN0ZW5lci5lbnRlclRhZyh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFRhZykgbGlzdGVuZXIuZXhpdFRhZyh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VGFnKSByZXR1cm4gdmlzaXRvci52aXNpdFRhZyh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVGFnTmFtZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBBVCgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkFULCAwKTsgfVxuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV90YWdOYW1lOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJUYWdOYW1lKSBsaXN0ZW5lci5lbnRlclRhZ05hbWUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRUYWdOYW1lKSBsaXN0ZW5lci5leGl0VGFnTmFtZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VGFnTmFtZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRUYWdOYW1lKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBUYWdJZGVudGlmaWVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHByb3BlcnR5VGFnSWRlbnRpZmllcigpOiBQcm9wZXJ0eVRhZ0lkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQcm9wZXJ0eVRhZ0lkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgb3B0aW9uYWxUYWdJZGVudGlmaWVyKCk6IE9wdGlvbmFsVGFnSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsVGFnSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3RhZ0lkZW50aWZpZXI7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclRhZ0lkZW50aWZpZXIpIGxpc3RlbmVyLmVudGVyVGFnSWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFRhZ0lkZW50aWZpZXIpIGxpc3RlbmVyLmV4aXRUYWdJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRUYWdJZGVudGlmaWVyKSByZXR1cm4gdmlzaXRvci52aXNpdFRhZ0lkZW50aWZpZXIodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5VGFnSWRlbnRpZmllckNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBvcHRpb25hbFRhZ0lkZW50aWZpZXIoKTogT3B0aW9uYWxUYWdJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT3B0aW9uYWxUYWdJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFBFUklPRCgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFBFUklPRChpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBQRVJJT0QoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5QRVJJT0QpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBFUklPRCwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBvcHRpb25hbFRhZ09ySWRlbnRpZmllcigpOiBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHRbXTtcblx0cHVibGljIG9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKGk6IG51bWJlcik6IE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dDtcblx0cHVibGljIG9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKGk/OiBudW1iZXIpOiBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQgfCBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3Byb3BlcnR5VGFnSWRlbnRpZmllcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyUHJvcGVydHlUYWdJZGVudGlmaWVyKSBsaXN0ZW5lci5lbnRlclByb3BlcnR5VGFnSWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFByb3BlcnR5VGFnSWRlbnRpZmllcikgbGlzdGVuZXIuZXhpdFByb3BlcnR5VGFnSWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0UHJvcGVydHlUYWdJZGVudGlmaWVyKSByZXR1cm4gdmlzaXRvci52aXNpdFByb3BlcnR5VGFnSWRlbnRpZmllcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT3B0aW9uYWxUYWdJZGVudGlmaWVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIG9wdGlvbmFsSWRlbnRpZmllcigpOiBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb3B0aW9uYWxUYWdJZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPcHRpb25hbFRhZ0lkZW50aWZpZXIpIGxpc3RlbmVyLmVudGVyT3B0aW9uYWxUYWdJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T3B0aW9uYWxUYWdJZGVudGlmaWVyKSBsaXN0ZW5lci5leGl0T3B0aW9uYWxUYWdJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPcHRpb25hbFRhZ0lkZW50aWZpZXIpIHJldHVybiB2aXNpdG9yLnZpc2l0T3B0aW9uYWxUYWdJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBvcHRpb25hbFRhZ0lkZW50aWZpZXIoKTogT3B0aW9uYWxUYWdJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT3B0aW9uYWxUYWdJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb3B0aW9uYWxUYWdPcklkZW50aWZpZXI7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKSBsaXN0ZW5lci5lbnRlck9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T3B0aW9uYWxUYWdPcklkZW50aWZpZXIpIGxpc3RlbmVyLmV4aXRPcHRpb25hbFRhZ09ySWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T3B0aW9uYWxUYWdPcklkZW50aWZpZXIpIHJldHVybiB2aXNpdG9yLnZpc2l0T3B0aW9uYWxUYWdPcklkZW50aWZpZXIodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgSUQoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5JRCwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2lkZW50aWZpZXI7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlcklkZW50aWZpZXIpIGxpc3RlbmVyLmVudGVySWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdElkZW50aWZpZXIpIGxpc3RlbmVyLmV4aXRJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRJZGVudGlmaWVyKSByZXR1cm4gdmlzaXRvci52aXNpdElkZW50aWZpZXIodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9wdGlvbmFsSWRlbnRpZmllckNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFFVRVNUSU9OKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04sIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vcHRpb25hbElkZW50aWZpZXI7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9wdGlvbmFsSWRlbnRpZmllcikgbGlzdGVuZXIuZW50ZXJPcHRpb25hbElkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPcHRpb25hbElkZW50aWZpZXIpIGxpc3RlbmVyLmV4aXRPcHRpb25hbElkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9wdGlvbmFsSWRlbnRpZmllcikgcmV0dXJuIHZpc2l0b3IudmlzaXRPcHRpb25hbElkZW50aWZpZXIodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dFtdO1xuXHRwdWJsaWMgdHlwZShpOiBudW1iZXIpOiBUeXBlQ29udGV4dDtcblx0cHVibGljIHR5cGUoaT86IG51bWJlcik6IFR5cGVDb250ZXh0IHwgVHlwZUNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKFR5cGVDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgVHlwZUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgUElQRSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBJUEUsIDApOyB9XG5cdHB1YmxpYyBBTVAoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5BTVAsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIGxhbWJkYVR5cGUoKTogTGFtYmRhVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIExhbWJkYVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgdHVwbGVUeXBlKCk6IFR1cGxlVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFR1cGxlVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBwcmltYXJ5VHlwZSgpOiBQcmltYXJ5VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFByaW1hcnlUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHBhcmVudGhlc2l6ZWRUeXBlKCk6IFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUGFyZW50aGVzaXplZFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgdW5hcnlUeXBlKCk6IFVuYXJ5VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFVuYXJ5VHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBvYmplY3RUeXBlKCk6IE9iamVjdFR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPYmplY3RUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGFycmF5VHlwZSgpOiBBcnJheVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBBcnJheVR5cGVDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVHlwZSkgbGlzdGVuZXIuZW50ZXJUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0VHlwZSkgbGlzdGVuZXIuZXhpdFR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0VHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTGFtYmRhVHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBQQVJFTl9PUEVOKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTiwgMCk7IH1cblx0cHVibGljIFBBUkVOX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBBUlJPVygpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkFSUk9XLCAwKTsgfVxuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIGZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKCk6IEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgUVVFU1RJT04oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5RVUVTVElPTiwgMCk7IH1cblx0cHVibGljIHBhcmFtZXRlcigpOiBQYXJhbWV0ZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQYXJhbWV0ZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfbGFtYmRhVHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyTGFtYmRhVHlwZSkgbGlzdGVuZXIuZW50ZXJMYW1iZGFUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0TGFtYmRhVHlwZSkgbGlzdGVuZXIuZXhpdExhbWJkYVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdExhbWJkYVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0TGFtYmRhVHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgcGFyYW1ldGVyKCk6IFBhcmFtZXRlckNvbnRleHRbXTtcblx0cHVibGljIHBhcmFtZXRlcihpOiBudW1iZXIpOiBQYXJhbWV0ZXJDb250ZXh0O1xuXHRwdWJsaWMgcGFyYW1ldGVyKGk/OiBudW1iZXIpOiBQYXJhbWV0ZXJDb250ZXh0IHwgUGFyYW1ldGVyQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoUGFyYW1ldGVyQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIFBhcmFtZXRlckNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09NTUEoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBDT01NQShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBDT01NQShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT01NQSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2Zvcm1hbFBhcmFtZXRlclNlcXVlbmNlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSkgbGlzdGVuZXIuZW50ZXJGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKSBsaXN0ZW5lci5leGl0Rm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKSByZXR1cm4gdmlzaXRvci52aXNpdEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBDT0xPTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTE9OLCAwKTsgfVxuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3BhcmFtZXRlcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyUGFyYW1ldGVyKSBsaXN0ZW5lci5lbnRlclBhcmFtZXRlcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFBhcmFtZXRlcikgbGlzdGVuZXIuZXhpdFBhcmFtZXRlcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0UGFyYW1ldGVyKSByZXR1cm4gdmlzaXRvci52aXNpdFBhcmFtZXRlcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVHVwbGVUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIExFU1NUSEFOKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTEVTU1RIQU4sIDApOyB9XG5cdHB1YmxpYyB0dXBsZVR5cGVTZXF1ZW5jZSgpOiBUdXBsZVR5cGVTZXF1ZW5jZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIFR1cGxlVHlwZVNlcXVlbmNlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIEdSRUFURVJUSEFOKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuR1JFQVRFUlRIQU4sIDApOyB9XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdHVwbGVUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJUdXBsZVR5cGUpIGxpc3RlbmVyLmVudGVyVHVwbGVUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0VHVwbGVUeXBlKSBsaXN0ZW5lci5leGl0VHVwbGVUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRUdXBsZVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0VHVwbGVUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBUdXBsZVR5cGVTZXF1ZW5jZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0W107XG5cdHB1YmxpYyB0eXBlKGk6IG51bWJlcik6IFR5cGVDb250ZXh0O1xuXHRwdWJsaWMgdHlwZShpPzogbnVtYmVyKTogVHlwZUNvbnRleHQgfCBUeXBlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoVHlwZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBUeXBlQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTU1BKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQ09NTUEoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQ09NTUEoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5DT01NQSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdHVwbGVUeXBlU2VxdWVuY2U7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclR1cGxlVHlwZVNlcXVlbmNlKSBsaXN0ZW5lci5lbnRlclR1cGxlVHlwZVNlcXVlbmNlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0VHVwbGVUeXBlU2VxdWVuY2UpIGxpc3RlbmVyLmV4aXRUdXBsZVR5cGVTZXF1ZW5jZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VHVwbGVUeXBlU2VxdWVuY2UpIHJldHVybiB2aXNpdG9yLnZpc2l0VHVwbGVUeXBlU2VxdWVuY2UodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFByaW1hcnlUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIG9wdGlvbmFsSWRlbnRpZmllcigpOiBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgcHJvcGVydHlJZGVudGlmaWVyKCk6IFByb3BlcnR5SWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFByb3BlcnR5SWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBpZGVudGlmaWVyT3JLZXl3b3JkKCk6IElkZW50aWZpZXJPcktleXdvcmRDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX3ByaW1hcnlUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJQcmltYXJ5VHlwZSkgbGlzdGVuZXIuZW50ZXJQcmltYXJ5VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFByaW1hcnlUeXBlKSBsaXN0ZW5lci5leGl0UHJpbWFyeVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFByaW1hcnlUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdFByaW1hcnlUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMga2V5d29yZCgpOiBLZXl3b3JkQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgS2V5d29yZENvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9pZGVudGlmaWVyT3JLZXl3b3JkOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJJZGVudGlmaWVyT3JLZXl3b3JkKSBsaXN0ZW5lci5lbnRlcklkZW50aWZpZXJPcktleXdvcmQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRJZGVudGlmaWVyT3JLZXl3b3JkKSBsaXN0ZW5lci5leGl0SWRlbnRpZmllck9yS2V5d29yZCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0SWRlbnRpZmllck9yS2V5d29yZCkgcmV0dXJuIHZpc2l0b3IudmlzaXRJZGVudGlmaWVyT3JLZXl3b3JkKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBLZXl3b3JkQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIE51bGxMaXRlcmFsKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTnVsbExpdGVyYWwsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9rZXl3b3JkOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJLZXl3b3JkKSBsaXN0ZW5lci5lbnRlcktleXdvcmQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRLZXl3b3JkKSBsaXN0ZW5lci5leGl0S2V5d29yZCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0S2V5d29yZCkgcmV0dXJuIHZpc2l0b3IudmlzaXRLZXl3b3JkKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBQYXJlbnRoZXNpemVkVHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBQQVJFTl9PUEVOKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEFSRU5fT1BFTiwgMCk7IH1cblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgUEFSRU5fQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QQVJFTl9DTE9TRSwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfcGFyZW50aGVzaXplZFR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclBhcmVudGhlc2l6ZWRUeXBlKSBsaXN0ZW5lci5lbnRlclBhcmVudGhlc2l6ZWRUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0UGFyZW50aGVzaXplZFR5cGUpIGxpc3RlbmVyLmV4aXRQYXJlbnRoZXNpemVkVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0UGFyZW50aGVzaXplZFR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0UGFyZW50aGVzaXplZFR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFVuYXJ5VHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBwcmltYXJ5VHlwZSgpOiBQcmltYXJ5VHlwZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIFByaW1hcnlUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIEFNUCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkFNUCwgMCk7IH1cblx0cHVibGljIFNUQVIoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TVEFSLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfdW5hcnlUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJVbmFyeVR5cGUpIGxpc3RlbmVyLmVudGVyVW5hcnlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0VW5hcnlUeXBlKSBsaXN0ZW5lci5leGl0VW5hcnlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRVbmFyeVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0VW5hcnlUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEJSQUNFX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgb2JqZWN0UGFpclNlcXVlbmNlVHlwZSgpOiBPYmplY3RQYWlyU2VxdWVuY2VUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT2JqZWN0UGFpclNlcXVlbmNlVHlwZUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPYmplY3RUeXBlKSBsaXN0ZW5lci5lbnRlck9iamVjdFR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPYmplY3RUeXBlKSBsaXN0ZW5lci5leGl0T2JqZWN0VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T2JqZWN0VHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRPYmplY3RUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQYWlyU2VxdWVuY2VUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIG9iamVjdFBhaXJUeXBlKCk6IE9iamVjdFBhaXJUeXBlQ29udGV4dFtdO1xuXHRwdWJsaWMgb2JqZWN0UGFpclR5cGUoaTogbnVtYmVyKTogT2JqZWN0UGFpclR5cGVDb250ZXh0O1xuXHRwdWJsaWMgb2JqZWN0UGFpclR5cGUoaT86IG51bWJlcik6IE9iamVjdFBhaXJUeXBlQ29udGV4dCB8IE9iamVjdFBhaXJUeXBlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoT2JqZWN0UGFpclR5cGVDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgT2JqZWN0UGFpclR5cGVDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09NTUEoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBDT01NQShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBDT01NQShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT01NQSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9vYmplY3RQYWlyU2VxdWVuY2VUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyU2VxdWVuY2VUeXBlKSBsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJTZXF1ZW5jZVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPYmplY3RQYWlyU2VxdWVuY2VUeXBlKSBsaXN0ZW5lci5leGl0T2JqZWN0UGFpclNlcXVlbmNlVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T2JqZWN0UGFpclNlcXVlbmNlVHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRPYmplY3RQYWlyU2VxdWVuY2VUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQYWlyVHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0W107XG5cdHB1YmxpYyB0eXBlKGk6IG51bWJlcik6IFR5cGVDb250ZXh0O1xuXHRwdWJsaWMgdHlwZShpPzogbnVtYmVyKTogVHlwZUNvbnRleHQgfCBUeXBlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoVHlwZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBUeXBlQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT0xPTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTE9OLCAwKTsgfVxuXHRwdWJsaWMgUVVFU1RJT04oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5RVUVTVElPTiwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0UGFpclR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJUeXBlKSBsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T2JqZWN0UGFpclR5cGUpIGxpc3RlbmVyLmV4aXRPYmplY3RQYWlyVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T2JqZWN0UGFpclR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0T2JqZWN0UGFpclR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEFycmF5VHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBCUkFDS0VUX09QRU4oKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBCUkFDS0VUX09QRU4oaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQlJBQ0tFVF9PUEVOKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9PUEVOKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU4sIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQlJBQ0tFVF9DTE9TRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIEJSQUNLRVRfQ0xPU0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQlJBQ0tFVF9DTE9TRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfQ0xPU0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNLRVRfQ0xPU0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0W107XG5cdHB1YmxpYyB0eXBlKGk6IG51bWJlcik6IFR5cGVDb250ZXh0O1xuXHRwdWJsaWMgdHlwZShpPzogbnVtYmVyKTogVHlwZUNvbnRleHQgfCBUeXBlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoVHlwZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBUeXBlQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT01NQSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIENPTU1BKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIENPTU1BKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuQ09NTUEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkNPTU1BLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIG5vdEFycmF5VHlwZSgpOiBOb3RBcnJheVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBOb3RBcnJheVR5cGVDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYXJyYXlUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJBcnJheVR5cGUpIGxpc3RlbmVyLmVudGVyQXJyYXlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0QXJyYXlUeXBlKSBsaXN0ZW5lci5leGl0QXJyYXlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRBcnJheVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0QXJyYXlUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBOb3RBcnJheVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgbm90QXJyYXlUeXBlKCk6IE5vdEFycmF5VHlwZUNvbnRleHRbXTtcblx0cHVibGljIG5vdEFycmF5VHlwZShpOiBudW1iZXIpOiBOb3RBcnJheVR5cGVDb250ZXh0O1xuXHRwdWJsaWMgbm90QXJyYXlUeXBlKGk/OiBudW1iZXIpOiBOb3RBcnJheVR5cGVDb250ZXh0IHwgTm90QXJyYXlUeXBlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoTm90QXJyYXlUeXBlQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIE5vdEFycmF5VHlwZUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgUElQRSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBJUEUsIDApOyB9XG5cdHB1YmxpYyBBTVAoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5BTVAsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIGxhbWJkYVR5cGUoKTogTGFtYmRhVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIExhbWJkYVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgdHVwbGVUeXBlKCk6IFR1cGxlVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFR1cGxlVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBwcmltYXJ5VHlwZSgpOiBQcmltYXJ5VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFByaW1hcnlUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHBhcmVudGhlc2l6ZWRUeXBlKCk6IFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUGFyZW50aGVzaXplZFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgdW5hcnlUeXBlKCk6IFVuYXJ5VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFVuYXJ5VHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBvYmplY3RUeXBlKCk6IE9iamVjdFR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPYmplY3RUeXBlQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX25vdEFycmF5VHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyTm90QXJyYXlUeXBlKSBsaXN0ZW5lci5lbnRlck5vdEFycmF5VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE5vdEFycmF5VHlwZSkgbGlzdGVuZXIuZXhpdE5vdEFycmF5VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0Tm90QXJyYXlUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdE5vdEFycmF5VHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlJZGVudGlmaWVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgUEVSSU9EKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgUEVSSU9EKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFBFUklPRChpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlBFUklPRCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9ELCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIG9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcigpOiBPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXJDb250ZXh0W107XG5cdHB1YmxpYyBvcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXIoaTogbnVtYmVyKTogT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyQ29udGV4dDtcblx0cHVibGljIG9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcihpPzogbnVtYmVyKTogT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyQ29udGV4dCB8IE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllckNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllckNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXJDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIG9wdGlvbmFsSWRlbnRpZmllcigpOiBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPcHRpb25hbElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfcHJvcGVydHlJZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJQcm9wZXJ0eUlkZW50aWZpZXIpIGxpc3RlbmVyLmVudGVyUHJvcGVydHlJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0UHJvcGVydHlJZGVudGlmaWVyKSBsaXN0ZW5lci5leGl0UHJvcGVydHlJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRQcm9wZXJ0eUlkZW50aWZpZXIpIHJldHVybiB2aXNpdG9yLnZpc2l0UHJvcGVydHlJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPcHRpb25hbElkZW50aWZpZXJPcklkZW50aWZpZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBvcHRpb25hbElkZW50aWZpZXIoKTogT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT3B0aW9uYWxJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKSBsaXN0ZW5lci5lbnRlck9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcikgbGlzdGVuZXIuZXhpdE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T3B0aW9uYWxJZGVudGlmaWVyT3JJZGVudGlmaWVyKSByZXR1cm4gdmlzaXRvci52aXNpdE9wdGlvbmFsSWRlbnRpZmllck9ySWRlbnRpZmllcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyB1bmFyeUV4cHJlc3Npb24oKTogVW5hcnlFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVW5hcnlFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGV4cHJlc3Npb24oKTogRXhwcmVzc2lvbkNvbnRleHRbXTtcblx0cHVibGljIGV4cHJlc3Npb24oaTogbnVtYmVyKTogRXhwcmVzc2lvbkNvbnRleHQ7XG5cdHB1YmxpYyBleHByZXNzaW9uKGk/OiBudW1iZXIpOiBFeHByZXNzaW9uQ29udGV4dCB8IEV4cHJlc3Npb25Db250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIEV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNUQVIoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TVEFSLCAwKTsgfVxuXHRwdWJsaWMgRk9SV0FSRF9TTEFTSCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkZPUldBUkRfU0xBU0gsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIFBMVVMoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QTFVTLCAwKTsgfVxuXHRwdWJsaWMgTUlOVVMoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5NSU5VUywgMCk7IH1cblx0cHVibGljIGFycmF5RXhwcmVzc2lvbigpOiBBcnJheUV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBBcnJheUV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgb2JqZWN0RXhwcmVzc2lvbigpOiBPYmplY3RFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBsYW1iZGFFeHByZXNzaW9uKCk6IExhbWJkYUV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBMYW1iZGFFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGxpdGVyYWxFeHByZXNzaW9uKCk6IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgcGFyZW50aGVzaXplZEV4cHJlc3Npb24oKTogUGFyZW50aGVzaXplZEV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9leHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlckV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0RXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBVbmFyeUV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBQTFVTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUExVUywgMCk7IH1cblx0cHVibGljIE1JTlVTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTUlOVVMsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV91bmFyeUV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclVuYXJ5RXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJVbmFyeUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRVbmFyeUV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRVbmFyeUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFVuYXJ5RXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRVbmFyeUV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEFycmF5RXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBCUkFDS0VUX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDS0VUX09QRU4sIDApOyB9XG5cdHB1YmxpYyBCUkFDS0VUX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0tFVF9DTE9TRSwgMCk7IH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dFtdO1xuXHRwdWJsaWMgZXhwcmVzc2lvbihpOiBudW1iZXIpOiBFeHByZXNzaW9uQ29udGV4dDtcblx0cHVibGljIGV4cHJlc3Npb24oaT86IG51bWJlcik6IEV4cHJlc3Npb25Db250ZXh0IHwgRXhwcmVzc2lvbkNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKEV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09NTUEoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBDT01NQShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBDT01NQShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT01NQSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9hcnJheUV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckFycmF5RXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJBcnJheUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRBcnJheUV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRBcnJheUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEFycmF5RXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRBcnJheUV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9iamVjdEV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgQlJBQ0VfT1BFTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNFX09QRU4sIDApOyB9XG5cdHB1YmxpYyBCUkFDRV9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkJSQUNFX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBvYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uKCk6IE9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdEV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9iamVjdEV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyT2JqZWN0RXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9iamVjdEV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRPYmplY3RFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPYmplY3RFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdE9iamVjdEV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgb2JqZWN0UGFpckV4cHJlc3Npb24oKTogT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0W107XG5cdHB1YmxpYyBvYmplY3RQYWlyRXhwcmVzc2lvbihpOiBudW1iZXIpOiBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQ7XG5cdHB1YmxpYyBvYmplY3RQYWlyRXhwcmVzc2lvbihpPzogbnVtYmVyKTogT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0IHwgT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09NTUEoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBDT01NQShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBDT01NQShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkNPTU1BKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DT01NQSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX29iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyT2JqZWN0UGFpclNlcXVlbmNlRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPYmplY3RQYWlyU2VxdWVuY2VFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdE9iamVjdFBhaXJTZXF1ZW5jZUV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGxpdGVyYWxFeHByZXNzaW9uKCk6IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dFtdO1xuXHRwdWJsaWMgbGl0ZXJhbEV4cHJlc3Npb24oaTogbnVtYmVyKTogTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0O1xuXHRwdWJsaWMgbGl0ZXJhbEV4cHJlc3Npb24oaT86IG51bWJlcik6IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCB8IExpdGVyYWxFeHByZXNzaW9uQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTE9OKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ09MT04sIDApOyB9XG5cdHB1YmxpYyBvYmplY3RFeHByZXNzaW9uKCk6IE9iamVjdEV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPYmplY3RFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfb2JqZWN0UGFpckV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T2JqZWN0UGFpckV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRPYmplY3RQYWlyRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T2JqZWN0UGFpckV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0T2JqZWN0UGFpckV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIExhbWJkYUV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgUEFSRU5fT1BFTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBBUkVOX09QRU4sIDApOyB9XG5cdHB1YmxpYyBQQVJFTl9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBBUkVOX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgQVJST1coKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5BUlJPVywgMCk7IH1cblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBmb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSgpOiBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFFVRVNUSU9OKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUVVFU1RJT04sIDApOyB9XG5cdHB1YmxpYyBwYXJhbWV0ZXIoKTogUGFyYW1ldGVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUGFyYW1ldGVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2xhbWJkYUV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckxhbWJkYUV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyTGFtYmRhRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdExhbWJkYUV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRMYW1iZGFFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRMYW1iZGFFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdExhbWJkYUV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIE51bWJlckxpdGVyYWwoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5OdW1iZXJMaXRlcmFsLCAwKTsgfVxuXHRwdWJsaWMgQm9vbGVhbkxpdGVyYWwoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5Cb29sZWFuTGl0ZXJhbCwgMCk7IH1cblx0cHVibGljIENoYXJhY3RlckxpdGVyYWwoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsLCAwKTsgfVxuXHRwdWJsaWMgU3RyaW5nTGl0ZXJhbCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlN0cmluZ0xpdGVyYWwsIDApOyB9XG5cdHB1YmxpYyBOdWxsTGl0ZXJhbCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk51bGxMaXRlcmFsLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfbGl0ZXJhbEV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckxpdGVyYWxFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlckxpdGVyYWxFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0TGl0ZXJhbEV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRMaXRlcmFsRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0TGl0ZXJhbEV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbEV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFBBUkVOX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5QQVJFTl9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBQQVJFTl9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlBBUkVOX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9wYXJlbnRoZXNpemVkRXhwcmVzc2lvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyUGFyZW50aGVzaXplZEV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyUGFyZW50aGVzaXplZEV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVzY3JpcHRpb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lKCk6IERlc2NyaXB0aW9uTGluZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIERlc2NyaXB0aW9uTGluZUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb24pIGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbikgbGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbikgcmV0dXJuIHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVzY3JpcHRpb25MaW5lQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGRlc2NyaXB0aW9uTGluZVN0YXJ0KCk6IERlc2NyaXB0aW9uTGluZVN0YXJ0Q29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgRGVzY3JpcHRpb25MaW5lU3RhcnRDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lRWxlbWVudCgpOiBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dFtdO1xuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lRWxlbWVudChpOiBudW1iZXIpOiBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dDtcblx0cHVibGljIGRlc2NyaXB0aW9uTGluZUVsZW1lbnQoaT86IG51bWJlcik6IERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0IHwgRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgaW5saW5lVGFnKCk6IElubGluZVRhZ0NvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElubGluZVRhZ0NvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbkxpbmU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uTGluZSkgbGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbkxpbmUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbkxpbmUpIGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbkxpbmUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZSkgcmV0dXJuIHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uTGluZVN0YXJ0Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1N5bnRheFBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KCk6IERlc2NyaXB0aW9uVGV4dENvbnRleHRbXTtcblx0cHVibGljIGRlc2NyaXB0aW9uVGV4dChpOiBudW1iZXIpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0O1xuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KGk/OiBudW1iZXIpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0IHwgRGVzY3JpcHRpb25UZXh0Q29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoRGVzY3JpcHRpb25UZXh0Q29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIERlc2NyaXB0aW9uVGV4dENvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQVQoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBBVChpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBBVChpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLkFUKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5BVCwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbkxpbmVTdGFydDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lU3RhcnQpIGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lU3RhcnQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbkxpbmVTdGFydCkgbGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZVN0YXJ0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmVTdGFydCkgcmV0dXJuIHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmVTdGFydCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVzY3JpcHRpb25UZXh0Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFRFWFRfQ09OVEVOVCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLlRFWFRfQ09OVEVOVCwgMCk7IH1cblx0cHVibGljIElEKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuSUQsIDApOyB9XG5cdHB1YmxpYyBGT1JXQVJEX1NMQVNIKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSCwgMCk7IH1cblx0cHVibGljIEJSQUNFX09QRU4oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfQ0xPU0UoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSwgMCk7IH1cblx0cHVibGljIENPTE9OKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQ09MT04sIDApOyB9XG5cdHB1YmxpYyBNSU5VUygpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk1JTlVTLCAwKTsgfVxuXHRwdWJsaWMgUEVSSU9EKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9ELCAwKTsgfVxuXHRwdWJsaWMgbGl0ZXJhbEV4cHJlc3Npb24oKTogTGl0ZXJhbEV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBMaXRlcmFsRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NTeW50YXhQYXJzZXIuUlVMRV9kZXNjcmlwdGlvblRleHQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uVGV4dCkgbGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvblRleHQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvblRleHQpIGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvblRleHQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERlc2NyaXB0aW9uVGV4dCkgcmV0dXJuIHZpc2l0b3IudmlzaXREZXNjcmlwdGlvblRleHQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgaW5saW5lVGFnKCk6IElubGluZVRhZ0NvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElubGluZVRhZ0NvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVUZXh0KCk6IERlc2NyaXB0aW9uTGluZVRleHRDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBEZXNjcmlwdGlvbkxpbmVUZXh0Q29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZUVsZW1lbnQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uTGluZUVsZW1lbnQpIGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lRWxlbWVudCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZUVsZW1lbnQpIGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbkxpbmVFbGVtZW50KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmVFbGVtZW50KSByZXR1cm4gdmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZUVsZW1lbnQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uTGluZVRleHRDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KCk6IERlc2NyaXB0aW9uVGV4dENvbnRleHRbXTtcblx0cHVibGljIGRlc2NyaXB0aW9uVGV4dChpOiBudW1iZXIpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0O1xuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KGk/OiBudW1iZXIpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0IHwgRGVzY3JpcHRpb25UZXh0Q29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoRGVzY3JpcHRpb25UZXh0Q29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIERlc2NyaXB0aW9uVGV4dENvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBBVCgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIEFUKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIEFUKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NTeW50YXhQYXJzZXIuQVQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLkFULCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZVRleHQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uTGluZVRleHQpIGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lVGV4dCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZVRleHQpIGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbkxpbmVUZXh0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmVUZXh0KSByZXR1cm4gdmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZVRleHQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIElubGluZVRhZ0NvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBJTkxJTkVfVEFHX1NUQVJUKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuSU5MSU5FX1RBR19TVEFSVCwgMCk7IH1cblx0cHVibGljIGlubGluZVRhZ05hbWUoKTogSW5saW5lVGFnTmFtZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIElubGluZVRhZ05hbWVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5TUEFDRSwgMCk7IH1cblx0cHVibGljIEJSQUNFX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuQlJBQ0VfQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBpbmxpbmVUYWdCb2R5KCk6IElubGluZVRhZ0JvZHlDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJbmxpbmVUYWdCb2R5Q29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2lubGluZVRhZzsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVySW5saW5lVGFnKSBsaXN0ZW5lci5lbnRlcklubGluZVRhZyh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdElubGluZVRhZykgbGlzdGVuZXIuZXhpdElubGluZVRhZyh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0SW5saW5lVGFnKSByZXR1cm4gdmlzaXRvci52aXNpdElubGluZVRhZyh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgSW5saW5lVGFnTmFtZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2lubGluZVRhZ05hbWU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlcklubGluZVRhZ05hbWUpIGxpc3RlbmVyLmVudGVySW5saW5lVGFnTmFtZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdElubGluZVRhZ05hbWUpIGxpc3RlbmVyLmV4aXRJbmxpbmVUYWdOYW1lKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRJbmxpbmVUYWdOYW1lKSByZXR1cm4gdmlzaXRvci52aXNpdElubGluZVRhZ05hbWUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIElubGluZVRhZ0JvZHlDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgYnJhY2VCb2R5KCk6IEJyYWNlQm9keUNvbnRleHRbXTtcblx0cHVibGljIGJyYWNlQm9keShpOiBudW1iZXIpOiBCcmFjZUJvZHlDb250ZXh0O1xuXHRwdWJsaWMgYnJhY2VCb2R5KGk/OiBudW1iZXIpOiBCcmFjZUJvZHlDb250ZXh0IHwgQnJhY2VCb2R5Q29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoQnJhY2VCb2R5Q29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIEJyYWNlQm9keUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfaW5saW5lVGFnQm9keTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVySW5saW5lVGFnQm9keSkgbGlzdGVuZXIuZW50ZXJJbmxpbmVUYWdCb2R5KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0SW5saW5lVGFnQm9keSkgbGlzdGVuZXIuZXhpdElubGluZVRhZ0JvZHkodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jU3ludGF4UGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdElubGluZVRhZ0JvZHkpIHJldHVybiB2aXNpdG9yLnZpc2l0SW5saW5lVGFnQm9keSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQnJhY2VFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEJSQUNFX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5CUkFDRV9DTE9TRSwgMCk7IH1cblx0cHVibGljIGJyYWNlQm9keSgpOiBCcmFjZUJvZHlDb250ZXh0W107XG5cdHB1YmxpYyBicmFjZUJvZHkoaTogbnVtYmVyKTogQnJhY2VCb2R5Q29udGV4dDtcblx0cHVibGljIGJyYWNlQm9keShpPzogbnVtYmVyKTogQnJhY2VCb2R5Q29udGV4dCB8IEJyYWNlQm9keUNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKEJyYWNlQm9keUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBCcmFjZUJvZHlDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1N5bnRheFBhcnNlci5SVUxFX2JyYWNlRXhwcmVzc2lvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1N5bnRheFBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyQnJhY2VFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlckJyYWNlRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEJyYWNlRXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdEJyYWNlRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NTeW50YXhQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0QnJhY2VFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdEJyYWNlRXhwcmVzc2lvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQnJhY2VCb2R5Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGJyYWNlRXhwcmVzc2lvbigpOiBCcmFjZUV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBCcmFjZUV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgYnJhY2VUZXh0KCk6IEJyYWNlVGV4dENvbnRleHRbXTtcblx0cHVibGljIGJyYWNlVGV4dChpOiBudW1iZXIpOiBCcmFjZVRleHRDb250ZXh0O1xuXHRwdWJsaWMgYnJhY2VUZXh0KGk/OiBudW1iZXIpOiBCcmFjZVRleHRDb250ZXh0IHwgQnJhY2VUZXh0Q29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoQnJhY2VUZXh0Q29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIEJyYWNlVGV4dENvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jU3ludGF4UGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYnJhY2VCb2R5OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJCcmFjZUJvZHkpIGxpc3RlbmVyLmVudGVyQnJhY2VCb2R5KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0QnJhY2VCb2R5KSBsaXN0ZW5lci5leGl0QnJhY2VCb2R5KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRCcmFjZUJvZHkpIHJldHVybiB2aXNpdG9yLnZpc2l0QnJhY2VCb2R5KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBCcmFjZVRleHRDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgVEVYVF9DT05URU5UKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuVEVYVF9DT05URU5ULCAwKTsgfVxuXHRwdWJsaWMgSUQoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5JRCwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuU1BBQ0UsIDApOyB9XG5cdHB1YmxpYyBGT1JXQVJEX1NMQVNIKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuRk9SV0FSRF9TTEFTSCwgMCk7IH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1N5bnRheFBhcnNlci5ORVdMSU5FLCAwKTsgfVxuXHRwdWJsaWMgUEVSSU9EKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NTeW50YXhQYXJzZXIuUEVSSU9ELCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jU3ludGF4UGFyc2VyLlJVTEVfYnJhY2VUZXh0OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jU3ludGF4UGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJCcmFjZVRleHQpIGxpc3RlbmVyLmVudGVyQnJhY2VUZXh0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NTeW50YXhQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0QnJhY2VUZXh0KSBsaXN0ZW5lci5leGl0QnJhY2VUZXh0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1N5bnRheFBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRCcmFjZVRleHQpIHJldHVybiB2aXNpdG9yLnZpc2l0QnJhY2VUZXh0KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbiJdfQ==