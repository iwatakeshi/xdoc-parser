"use strict";
// Generated from XDocParser.g4 by ANTLR 4.6-SNAPSHOT
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
class XDocParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(XDocParser._ATN, this);
    }
    get vocabulary() {
        return XDocParser.VOCABULARY;
    }
    get grammarFileName() { return "XDocParser.g4"; }
    get ruleNames() { return XDocParser.ruleNames; }
    get serializedATN() { return XDocParser._serializedATN; }
    documentation() {
        let _localctx = new DocumentationContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, XDocParser.RULE_documentation);
        let _la;
        try {
            this.state = 107;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocParser.EOF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 100;
                        this.match(XDocParser.EOF);
                    }
                    break;
                case XDocParser.NEWLINE:
                case XDocParser.SPACE:
                case XDocParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 101;
                        this.body();
                        this.state = 103;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.NEWLINE) {
                            {
                                this.state = 102;
                                this.match(XDocParser.NEWLINE);
                            }
                        }
                        this.state = 105;
                        this.match(XDocParser.EOF);
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
        this.enterRule(_localctx, 2, XDocParser.RULE_body);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 112;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === XDocParser.NEWLINE || _la === XDocParser.SPACE) {
                    {
                        {
                            this.state = 109;
                            this.whitespace();
                        }
                    }
                    this.state = 114;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 115;
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
        this.enterRule(_localctx, 4, XDocParser.RULE_whitespace);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                _la = this._input.LA(1);
                if (!(_la === XDocParser.NEWLINE || _la === XDocParser.SPACE)) {
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
        this.enterRule(_localctx, 6, XDocParser.RULE_annotations);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 119;
                this.tag();
                this.state = 124;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 120;
                                this.match(XDocParser.NEWLINE);
                                this.state = 121;
                                this.tag();
                            }
                        }
                    }
                    this.state = 126;
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
        this.enterRule(_localctx, 8, XDocParser.RULE_tag);
        let _la;
        try {
            this.state = 268;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 127;
                        this.tagName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 128;
                        this.tagName();
                        this.state = 129;
                        this.match(XDocParser.SPACE);
                        this.state = 130;
                        this.match(XDocParser.MINUS);
                        this.state = 131;
                        this.match(XDocParser.SPACE);
                        this.state = 132;
                        this.description();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 134;
                        this.tagName();
                        this.state = 135;
                        this.match(XDocParser.SPACE);
                        this.state = 136;
                        this.tagID();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 138;
                        this.tagName();
                        this.state = 139;
                        this.match(XDocParser.SPACE);
                        this.state = 140;
                        this.tagID();
                        this.state = 142;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 141;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 144;
                        this.match(XDocParser.EQUAL);
                        this.state = 146;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 145;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 148;
                        this.value();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 150;
                        this.tagName();
                        this.state = 151;
                        this.match(XDocParser.SPACE);
                        this.state = 152;
                        this.tagID();
                        this.state = 153;
                        this.match(XDocParser.SPACE);
                        this.state = 154;
                        this.match(XDocParser.MINUS);
                        this.state = 155;
                        this.match(XDocParser.SPACE);
                        this.state = 156;
                        this.description();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 158;
                        this.tagName();
                        this.state = 159;
                        this.match(XDocParser.SPACE);
                        this.state = 160;
                        this.tagID();
                        this.state = 161;
                        this.match(XDocParser.SPACE);
                        this.state = 162;
                        this.match(XDocParser.EQUAL);
                        this.state = 164;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 163;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 166;
                        this.value();
                        this.state = 167;
                        this.match(XDocParser.SPACE);
                        this.state = 168;
                        this.match(XDocParser.MINUS);
                        this.state = 169;
                        this.match(XDocParser.SPACE);
                        this.state = 170;
                        this.description();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 172;
                        this.tagName();
                        this.state = 173;
                        this.match(XDocParser.SPACE);
                        this.state = 174;
                        this.tagID();
                        this.state = 176;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 175;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 178;
                        this.match(XDocParser.COLON);
                        this.state = 180;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 179;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 182;
                        this.type(0);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 184;
                        this.tagName();
                        this.state = 185;
                        this.match(XDocParser.SPACE);
                        this.state = 186;
                        this.tagID();
                        this.state = 188;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 187;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 190;
                        this.match(XDocParser.COLON);
                        this.state = 192;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 191;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 194;
                        this.type(0);
                        this.state = 196;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 195;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 198;
                        this.match(XDocParser.EQUAL);
                        this.state = 200;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 199;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 202;
                        this.value();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 204;
                        this.tagName();
                        this.state = 205;
                        this.match(XDocParser.SPACE);
                        this.state = 206;
                        this.tagID();
                        this.state = 208;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 207;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 210;
                        this.match(XDocParser.COLON);
                        this.state = 212;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 211;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 214;
                        this.type(0);
                        this.state = 215;
                        this.match(XDocParser.SPACE);
                        this.state = 216;
                        this.match(XDocParser.MINUS);
                        this.state = 217;
                        this.match(XDocParser.SPACE);
                        this.state = 218;
                        this.description();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 220;
                        this.tagName();
                        this.state = 221;
                        this.match(XDocParser.SPACE);
                        this.state = 222;
                        this.tagID();
                        this.state = 224;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 223;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 226;
                        this.match(XDocParser.COLON);
                        this.state = 228;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 227;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 230;
                        this.type(0);
                        this.state = 232;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 231;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 234;
                        this.match(XDocParser.EQUAL);
                        this.state = 236;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 235;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 238;
                        this.value();
                        this.state = 239;
                        this.match(XDocParser.SPACE);
                        this.state = 240;
                        this.match(XDocParser.MINUS);
                        this.state = 241;
                        this.match(XDocParser.SPACE);
                        this.state = 242;
                        this.description();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 244;
                        this.tagName();
                        this.state = 246;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 245;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 248;
                        this.match(XDocParser.COLON);
                        this.state = 250;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 249;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 252;
                        this.type(0);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 254;
                        this.tagName();
                        this.state = 256;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 255;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 258;
                        this.match(XDocParser.COLON);
                        this.state = 260;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 259;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 262;
                        this.type(0);
                        this.state = 263;
                        this.match(XDocParser.SPACE);
                        this.state = 264;
                        this.match(XDocParser.MINUS);
                        this.state = 265;
                        this.match(XDocParser.SPACE);
                        this.state = 266;
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
        this.enterRule(_localctx, 10, XDocParser.RULE_tagName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 270;
                this.match(XDocParser.AT);
                this.state = 271;
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
    tagID() {
        let _localctx = new TagIDContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, XDocParser.RULE_tagID);
        try {
            this.state = 276;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 273;
                        this.propertyTagID();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 274;
                        this.optionalTagID();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 275;
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
    optionalTagID() {
        let _localctx = new OptionalTagIDContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, XDocParser.RULE_optionalTagID);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 278;
                this.identifier();
                this.state = 279;
                this.match(XDocParser.QUESTION);
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
    propertyTagID() {
        let _localctx = new PropertyTagIDContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, XDocParser.RULE_propertyTagID);
        let _la;
        try {
            this.state = 295;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 281;
                        this.optionalTagID();
                        this.state = 284;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 282;
                                    this.match(XDocParser.PERIOD);
                                    this.state = 283;
                                    this.optionalTagOrIdentifier();
                                }
                            }
                            this.state = 286;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === XDocParser.PERIOD);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 288;
                        this.identifier();
                        this.state = 291;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 289;
                                    this.match(XDocParser.PERIOD);
                                    this.state = 290;
                                    this.optionalTagOrIdentifier();
                                }
                            }
                            this.state = 293;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === XDocParser.PERIOD);
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
    optionalTagOrIdentifier() {
        let _localctx = new OptionalTagOrIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, XDocParser.RULE_optionalTagOrIdentifier);
        try {
            this.state = 299;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 297;
                        this.optionalTagID();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 298;
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
    type(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new TypeContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 20;
        this.enterRecursionRule(_localctx, 20, XDocParser.RULE_type, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 310;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                    case 1:
                        {
                            this.state = 302;
                            this.lambdaType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 303;
                            this.tupleType();
                        }
                        break;
                    case 3:
                        {
                            this.state = 304;
                            this.primaryType();
                        }
                        break;
                    case 4:
                        {
                            this.state = 305;
                            this.parenthesizedType();
                        }
                        break;
                    case 5:
                        {
                            this.state = 306;
                            this.unaryType();
                        }
                        break;
                    case 6:
                        {
                            this.state = 307;
                            this.objectType();
                        }
                        break;
                    case 7:
                        {
                            this.state = 308;
                            this.arrayType(0);
                        }
                        break;
                    case 8:
                        {
                            this.state = 309;
                            this.propertyType();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 323;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new TypeContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, XDocParser.RULE_type);
                                this.state = 312;
                                if (!(this.precpred(this._ctx, 9)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                this.state = 314;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocParser.SPACE) {
                                    {
                                        this.state = 313;
                                        this.match(XDocParser.SPACE);
                                    }
                                }
                                this.state = 316;
                                _la = this._input.LA(1);
                                if (!(_la === XDocParser.AMP || _la === XDocParser.PIPE)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 318;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocParser.SPACE) {
                                    {
                                        this.state = 317;
                                        this.match(XDocParser.SPACE);
                                    }
                                }
                                this.state = 320;
                                this.type(10);
                            }
                        }
                    }
                    this.state = 325;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
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
    unaryType() {
        let _localctx = new UnaryTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, XDocParser.RULE_unaryType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 326;
                _la = this._input.LA(1);
                if (!(_la === XDocParser.STAR || _la === XDocParser.AMP)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 327;
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
    tupleType() {
        let _localctx = new TupleTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, XDocParser.RULE_tupleType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 330;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.ID) {
                    {
                        this.state = 329;
                        this.identifier();
                    }
                }
                this.state = 332;
                this.match(XDocParser.LESSTHAN);
                this.state = 334;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.SPACE) {
                    {
                        this.state = 333;
                        this.match(XDocParser.SPACE);
                    }
                }
                this.state = 336;
                this.tupleTypeList();
                this.state = 338;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.SPACE) {
                    {
                        this.state = 337;
                        this.match(XDocParser.SPACE);
                    }
                }
                this.state = 340;
                this.match(XDocParser.GREATERTHAN);
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
    tupleTypeList() {
        let _localctx = new TupleTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, XDocParser.RULE_tupleTypeList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 342;
                this.type(0);
                this.state = 344;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.SPACE) {
                    {
                        this.state = 343;
                        this.match(XDocParser.SPACE);
                    }
                }
                this.state = 351;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 346;
                            this.match(XDocParser.COMMA);
                            this.state = 348;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocParser.SPACE) {
                                {
                                    this.state = 347;
                                    this.match(XDocParser.SPACE);
                                }
                            }
                            this.state = 350;
                            this.type(0);
                        }
                    }
                    this.state = 353;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === XDocParser.COMMA);
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
        this.enterRule(_localctx, 28, XDocParser.RULE_primaryType);
        try {
            this.state = 357;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 355;
                        this.optionalType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 356;
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
        this.enterRule(_localctx, 30, XDocParser.RULE_identifierOrKeyword);
        try {
            this.state = 361;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 359;
                        this.identifier();
                    }
                    break;
                case XDocParser.NullLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 360;
                        this.match(XDocParser.NullLiteral);
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
    parenthesizedType() {
        let _localctx = new ParenthesizedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, XDocParser.RULE_parenthesizedType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 363;
                this.match(XDocParser.PAREN_OPEN);
                this.state = 365;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.SPACE) {
                    {
                        this.state = 364;
                        this.match(XDocParser.SPACE);
                    }
                }
                this.state = 367;
                this.type(0);
                this.state = 369;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.SPACE) {
                    {
                        this.state = 368;
                        this.match(XDocParser.SPACE);
                    }
                }
                this.state = 371;
                this.match(XDocParser.PAREN_CLOSE);
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
    lambdaType() {
        let _localctx = new LambdaTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, XDocParser.RULE_lambdaType);
        let _la;
        try {
            this.state = 402;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocParser.PAREN_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 373;
                        this.match(XDocParser.PAREN_OPEN);
                        this.state = 375;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                            case 1:
                                {
                                    this.state = 374;
                                    this.match(XDocParser.SPACE);
                                }
                                break;
                        }
                        this.state = 378;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.ID) {
                            {
                                this.state = 377;
                                this.formalParameterSequence();
                            }
                        }
                        this.state = 381;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 380;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 383;
                        this.match(XDocParser.PAREN_CLOSE);
                        this.state = 385;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 384;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 387;
                        this.match(XDocParser.ARROW);
                        this.state = 389;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 388;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 391;
                        this.type(0);
                    }
                    break;
                case XDocParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 392;
                        this.parameter();
                        this.state = 394;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 393;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 396;
                        this.match(XDocParser.ARROW);
                        this.state = 398;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 397;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 400;
                        this.type(0);
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
        this.enterRule(_localctx, 36, XDocParser.RULE_formalParameterSequence);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 404;
                this.parameter();
                this.state = 412;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === XDocParser.COMMA) {
                    {
                        {
                            this.state = 405;
                            this.match(XDocParser.COMMA);
                            this.state = 407;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocParser.SPACE) {
                                {
                                    this.state = 406;
                                    this.match(XDocParser.SPACE);
                                }
                            }
                            this.state = 409;
                            this.parameter();
                        }
                    }
                    this.state = 414;
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
        this.enterRule(_localctx, 38, XDocParser.RULE_parameter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 415;
                this.identifier();
                this.state = 424;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                    case 1:
                        {
                            this.state = 417;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocParser.SPACE) {
                                {
                                    this.state = 416;
                                    this.match(XDocParser.SPACE);
                                }
                            }
                            this.state = 419;
                            this.match(XDocParser.COLON);
                            this.state = 421;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocParser.SPACE) {
                                {
                                    this.state = 420;
                                    this.match(XDocParser.SPACE);
                                }
                            }
                            this.state = 423;
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
    arrayType(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ArrayTypeContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 40;
        this.enterRecursionRule(_localctx, 40, XDocParser.RULE_arrayType, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 474;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case XDocParser.BRACKET_OPEN:
                        {
                            this.state = 427;
                            this.match(XDocParser.BRACKET_OPEN);
                            this.state = 429;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 428;
                                        this.match(XDocParser.NEWLINE);
                                    }
                                    break;
                            }
                            this.state = 432;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 431;
                                        this.match(XDocParser.SPACE);
                                    }
                                    break;
                            }
                            this.state = 435;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 434;
                                        this.match(XDocParser.NEWLINE);
                                    }
                                    break;
                            }
                            this.state = 438;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (XDocParser.NullLiteral - 6)) | (1 << (XDocParser.ID - 6)) | (1 << (XDocParser.STAR - 6)) | (1 << (XDocParser.AMP - 6)) | (1 << (XDocParser.BRACE_OPEN - 6)) | (1 << (XDocParser.PAREN_OPEN - 6)) | (1 << (XDocParser.BRACKET_OPEN - 6)) | (1 << (XDocParser.LESSTHAN - 6)))) !== 0)) {
                                {
                                    this.state = 437;
                                    this.type(0);
                                }
                            }
                            this.state = 453;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === XDocParser.COMMA) {
                                {
                                    {
                                        this.state = 440;
                                        this.match(XDocParser.COMMA);
                                        this.state = 442;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 441;
                                                    this.match(XDocParser.NEWLINE);
                                                }
                                                break;
                                        }
                                        this.state = 445;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocParser.SPACE) {
                                            {
                                                this.state = 444;
                                                this.match(XDocParser.SPACE);
                                            }
                                        }
                                        this.state = 448;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocParser.NEWLINE) {
                                            {
                                                this.state = 447;
                                                this.match(XDocParser.NEWLINE);
                                            }
                                        }
                                        this.state = 450;
                                        this.type(0);
                                    }
                                }
                                this.state = 455;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 457;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 456;
                                        this.match(XDocParser.NEWLINE);
                                    }
                                    break;
                            }
                            this.state = 460;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocParser.SPACE) {
                                {
                                    this.state = 459;
                                    this.match(XDocParser.SPACE);
                                }
                            }
                            this.state = 463;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocParser.NEWLINE) {
                                {
                                    this.state = 462;
                                    this.match(XDocParser.NEWLINE);
                                }
                            }
                            this.state = 465;
                            this.match(XDocParser.BRACKET_CLOSE);
                        }
                        break;
                    case XDocParser.ID:
                        {
                            this.state = 466;
                            this.identifier();
                            this.state = 467;
                            this.match(XDocParser.BRACKET_OPEN);
                            this.state = 468;
                            this.match(XDocParser.BRACKET_CLOSE);
                        }
                        break;
                    case XDocParser.BRACE_OPEN:
                        {
                            this.state = 470;
                            this.objectType();
                            this.state = 471;
                            this.match(XDocParser.BRACKET_OPEN);
                            this.state = 472;
                            this.match(XDocParser.BRACKET_CLOSE);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 484;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ArrayTypeContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, XDocParser.RULE_arrayType);
                                this.state = 476;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 477;
                                this.match(XDocParser.BRACKET_OPEN);
                                this.state = 479;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (XDocParser.NullLiteral - 6)) | (1 << (XDocParser.ID - 6)) | (1 << (XDocParser.STAR - 6)) | (1 << (XDocParser.AMP - 6)) | (1 << (XDocParser.BRACE_OPEN - 6)) | (1 << (XDocParser.PAREN_OPEN - 6)) | (1 << (XDocParser.BRACKET_OPEN - 6)) | (1 << (XDocParser.LESSTHAN - 6)))) !== 0)) {
                                    {
                                        this.state = 478;
                                        this.type(0);
                                    }
                                }
                                this.state = 481;
                                this.match(XDocParser.BRACKET_CLOSE);
                            }
                        }
                    }
                    this.state = 486;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
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
    objectType() {
        let _localctx = new ObjectTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, XDocParser.RULE_objectType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                this.match(XDocParser.BRACE_OPEN);
                this.state = 489;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                    case 1:
                        {
                            this.state = 488;
                            this.match(XDocParser.SPACE);
                        }
                        break;
                }
                this.state = 492;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                    case 1:
                        {
                            this.state = 491;
                            this.match(XDocParser.NEWLINE);
                        }
                        break;
                }
                this.state = 495;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                    case 1:
                        {
                            this.state = 494;
                            this.match(XDocParser.SPACE);
                        }
                        break;
                }
                this.state = 498;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (XDocParser.NullLiteral - 6)) | (1 << (XDocParser.ID - 6)) | (1 << (XDocParser.STAR - 6)) | (1 << (XDocParser.AMP - 6)) | (1 << (XDocParser.BRACE_OPEN - 6)) | (1 << (XDocParser.PAREN_OPEN - 6)) | (1 << (XDocParser.BRACKET_OPEN - 6)) | (1 << (XDocParser.LESSTHAN - 6)))) !== 0)) {
                    {
                        this.state = 497;
                        this.objectPairTypeList();
                    }
                }
                this.state = 501;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                    case 1:
                        {
                            this.state = 500;
                            this.match(XDocParser.SPACE);
                        }
                        break;
                }
                this.state = 504;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.NEWLINE) {
                    {
                        this.state = 503;
                        this.match(XDocParser.NEWLINE);
                    }
                }
                this.state = 507;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.SPACE) {
                    {
                        this.state = 506;
                        this.match(XDocParser.SPACE);
                    }
                }
                this.state = 509;
                this.match(XDocParser.BRACE_CLOSE);
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
    objectPairTypeList() {
        let _localctx = new ObjectPairTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, XDocParser.RULE_objectPairTypeList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 511;
                this.objectPairType();
                this.state = 513;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                    case 1:
                        {
                            this.state = 512;
                            this.match(XDocParser.SPACE);
                        }
                        break;
                }
                this.state = 528;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === XDocParser.COMMA) {
                    {
                        {
                            this.state = 515;
                            this.match(XDocParser.COMMA);
                            this.state = 517;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 516;
                                        this.match(XDocParser.SPACE);
                                    }
                                    break;
                            }
                            this.state = 520;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocParser.NEWLINE) {
                                {
                                    this.state = 519;
                                    this.match(XDocParser.NEWLINE);
                                }
                            }
                            this.state = 523;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocParser.SPACE) {
                                {
                                    this.state = 522;
                                    this.match(XDocParser.SPACE);
                                }
                            }
                            this.state = 525;
                            this.objectPairType();
                        }
                    }
                    this.state = 530;
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
        this.enterRule(_localctx, 46, XDocParser.RULE_objectPairType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 531;
                this.type(0);
                this.state = 533;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.QUESTION) {
                    {
                        this.state = 532;
                        this.match(XDocParser.QUESTION);
                    }
                }
                this.state = 536;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.SPACE) {
                    {
                        this.state = 535;
                        this.match(XDocParser.SPACE);
                    }
                }
                this.state = 538;
                this.match(XDocParser.COLON);
                this.state = 540;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.SPACE) {
                    {
                        this.state = 539;
                        this.match(XDocParser.SPACE);
                    }
                }
                this.state = 542;
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
    optionalType() {
        let _localctx = new OptionalTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, XDocParser.RULE_optionalType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 544;
                this.identifier();
                this.state = 545;
                this.match(XDocParser.QUESTION);
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
    propertyType() {
        let _localctx = new PropertyTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, XDocParser.RULE_propertyType);
        try {
            let _alt;
            this.state = 561;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 547;
                        this.identifier();
                        this.state = 550;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 548;
                                            this.match(XDocParser.PERIOD);
                                            this.state = 549;
                                            this.optionalTypeOrIdentifer();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 552;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 554;
                        this.optionalType();
                        this.state = 557;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 555;
                                            this.match(XDocParser.PERIOD);
                                            this.state = 556;
                                            this.optionalTypeOrIdentifer();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 559;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
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
    optionalTypeOrIdentifer() {
        let _localctx = new OptionalTypeOrIdentiferContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, XDocParser.RULE_optionalTypeOrIdentifer);
        try {
            this.state = 565;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 563;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 564;
                        this.optionalType();
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
    value() {
        let _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, XDocParser.RULE_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 567;
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
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 56;
        this.enterRecursionRule(_localctx, 56, XDocParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 576;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
                    case 1:
                        {
                            this.state = 570;
                            this.unaryExpression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 571;
                            this.arrayExpression();
                        }
                        break;
                    case 3:
                        {
                            this.state = 572;
                            this.objectExpression();
                        }
                        break;
                    case 4:
                        {
                            this.state = 573;
                            this.lambdaExpression();
                        }
                        break;
                    case 5:
                        {
                            this.state = 574;
                            this.literal();
                        }
                        break;
                    case 6:
                        {
                            this.state = 575;
                            this.parenthesizedExpression();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 598;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 596;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, XDocParser.RULE_expression);
                                        this.state = 578;
                                        if (!(this.precpred(this._ctx, 7)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        this.state = 580;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocParser.SPACE) {
                                            {
                                                this.state = 579;
                                                this.match(XDocParser.SPACE);
                                            }
                                        }
                                        this.state = 582;
                                        _la = this._input.LA(1);
                                        if (!(_la === XDocParser.STAR || _la === XDocParser.FORWARD_SLASH)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 584;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocParser.SPACE) {
                                            {
                                                this.state = 583;
                                                this.match(XDocParser.SPACE);
                                            }
                                        }
                                        this.state = 586;
                                        this.expression(8);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, XDocParser.RULE_expression);
                                        this.state = 587;
                                        if (!(this.precpred(this._ctx, 6)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        this.state = 589;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocParser.SPACE) {
                                            {
                                                this.state = 588;
                                                this.match(XDocParser.SPACE);
                                            }
                                        }
                                        this.state = 591;
                                        _la = this._input.LA(1);
                                        if (!(_la === XDocParser.PLUS || _la === XDocParser.MINUS)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 593;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === XDocParser.SPACE) {
                                            {
                                                this.state = 592;
                                                this.match(XDocParser.SPACE);
                                            }
                                        }
                                        this.state = 595;
                                        this.expression(7);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 600;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
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
        this.enterRule(_localctx, 58, XDocParser.RULE_unaryExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 601;
                _la = this._input.LA(1);
                if (!(_la === XDocParser.PLUS || _la === XDocParser.MINUS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 602;
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
        this.enterRule(_localctx, 60, XDocParser.RULE_arrayExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 604;
                this.match(XDocParser.BRACKET_OPEN);
                this.state = 606;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                    case 1:
                        {
                            this.state = 605;
                            this.match(XDocParser.NEWLINE);
                        }
                        break;
                }
                this.state = 609;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                    case 1:
                        {
                            this.state = 608;
                            this.match(XDocParser.SPACE);
                        }
                        break;
                }
                this.state = 612;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                    case 1:
                        {
                            this.state = 611;
                            this.match(XDocParser.NEWLINE);
                        }
                        break;
                }
                this.state = 615;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocParser.IntegerLiteral) | (1 << XDocParser.FloatingPointLiteral) | (1 << XDocParser.BooleanLiteral) | (1 << XDocParser.CharacterLiteral) | (1 << XDocParser.StringLiteral) | (1 << XDocParser.NullLiteral) | (1 << XDocParser.ID) | (1 << XDocParser.PLUS) | (1 << XDocParser.MINUS) | (1 << XDocParser.BRACE_OPEN) | (1 << XDocParser.PAREN_OPEN) | (1 << XDocParser.BRACKET_OPEN))) !== 0)) {
                    {
                        this.state = 614;
                        this.expression(0);
                    }
                }
                this.state = 630;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === XDocParser.COMMA) {
                    {
                        {
                            this.state = 617;
                            this.match(XDocParser.COMMA);
                            this.state = 619;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 618;
                                        this.match(XDocParser.NEWLINE);
                                    }
                                    break;
                            }
                            this.state = 622;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocParser.SPACE) {
                                {
                                    this.state = 621;
                                    this.match(XDocParser.SPACE);
                                }
                            }
                            this.state = 625;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === XDocParser.NEWLINE) {
                                {
                                    this.state = 624;
                                    this.match(XDocParser.NEWLINE);
                                }
                            }
                            this.state = 627;
                            this.expression(0);
                        }
                    }
                    this.state = 632;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 634;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
                    case 1:
                        {
                            this.state = 633;
                            this.match(XDocParser.NEWLINE);
                        }
                        break;
                }
                this.state = 637;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.SPACE) {
                    {
                        this.state = 636;
                        this.match(XDocParser.SPACE);
                    }
                }
                this.state = 640;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.NEWLINE) {
                    {
                        this.state = 639;
                        this.match(XDocParser.NEWLINE);
                    }
                }
                this.state = 642;
                this.match(XDocParser.BRACKET_CLOSE);
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
        this.enterRule(_localctx, 62, XDocParser.RULE_objectExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 644;
                this.match(XDocParser.BRACE_OPEN);
                this.state = 646;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
                    case 1:
                        {
                            this.state = 645;
                            this.match(XDocParser.SPACE);
                        }
                        break;
                }
                this.state = 649;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                    case 1:
                        {
                            this.state = 648;
                            this.match(XDocParser.NEWLINE);
                        }
                        break;
                }
                this.state = 652;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                    case 1:
                        {
                            this.state = 651;
                            this.match(XDocParser.SPACE);
                        }
                        break;
                }
                this.state = 655;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocParser.IntegerLiteral) | (1 << XDocParser.FloatingPointLiteral) | (1 << XDocParser.BooleanLiteral) | (1 << XDocParser.CharacterLiteral) | (1 << XDocParser.StringLiteral) | (1 << XDocParser.NullLiteral))) !== 0)) {
                    {
                        this.state = 654;
                        this.objectPairExpressionList();
                    }
                }
                this.state = 658;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
                    case 1:
                        {
                            this.state = 657;
                            this.match(XDocParser.SPACE);
                        }
                        break;
                }
                this.state = 661;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.NEWLINE) {
                    {
                        this.state = 660;
                        this.match(XDocParser.NEWLINE);
                    }
                }
                this.state = 664;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.SPACE) {
                    {
                        this.state = 663;
                        this.match(XDocParser.SPACE);
                    }
                }
                this.state = 666;
                this.match(XDocParser.BRACE_CLOSE);
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
    objectPairExpressionList() {
        let _localctx = new ObjectPairExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, XDocParser.RULE_objectPairExpressionList);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 668;
                this.objectPairExpression();
                this.state = 685;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 670;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocParser.SPACE) {
                                    {
                                        this.state = 669;
                                        this.match(XDocParser.SPACE);
                                    }
                                }
                                this.state = 672;
                                this.match(XDocParser.COMMA);
                                this.state = 674;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 115, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 673;
                                            this.match(XDocParser.SPACE);
                                        }
                                        break;
                                }
                                this.state = 677;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocParser.NEWLINE) {
                                    {
                                        this.state = 676;
                                        this.match(XDocParser.NEWLINE);
                                    }
                                }
                                this.state = 680;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XDocParser.SPACE) {
                                    {
                                        this.state = 679;
                                        this.match(XDocParser.SPACE);
                                    }
                                }
                                this.state = 682;
                                this.objectPairExpression();
                            }
                        }
                    }
                    this.state = 687;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
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
        this.enterRule(_localctx, 66, XDocParser.RULE_objectPairExpression);
        let _la;
        try {
            this.state = 708;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 688;
                        this.literal();
                        this.state = 690;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 689;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 692;
                        this.match(XDocParser.COLON);
                        this.state = 694;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 693;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 696;
                        this.objectExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 698;
                        this.literal();
                        this.state = 700;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 699;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 702;
                        this.match(XDocParser.COLON);
                        this.state = 704;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 703;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 706;
                        this.literal();
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
        this.enterRule(_localctx, 68, XDocParser.RULE_lambdaExpression);
        let _la;
        try {
            this.state = 741;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocParser.PAREN_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 710;
                        this.match(XDocParser.PAREN_OPEN);
                        this.state = 712;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
                            case 1:
                                {
                                    this.state = 711;
                                    this.match(XDocParser.SPACE);
                                }
                                break;
                        }
                        this.state = 715;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.ID) {
                            {
                                this.state = 714;
                                this.formalParameterSequence();
                            }
                        }
                        this.state = 718;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 717;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 720;
                        this.match(XDocParser.PAREN_CLOSE);
                        this.state = 722;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 721;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 724;
                        this.match(XDocParser.ARROW);
                        this.state = 726;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 725;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 728;
                        this.type(0);
                    }
                    break;
                case XDocParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 729;
                        this.parameter();
                        this.state = 731;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 730;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 733;
                        this.match(XDocParser.ARROW);
                        this.state = 735;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === XDocParser.SPACE) {
                            {
                                this.state = 734;
                                this.match(XDocParser.SPACE);
                            }
                        }
                        this.state = 737;
                        this.type(0);
                        this.state = 739;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
                            case 1:
                                {
                                    this.state = 738;
                                    this.match(XDocParser.QUESTION);
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
    literal() {
        let _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, XDocParser.RULE_literal);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 743;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocParser.IntegerLiteral) | (1 << XDocParser.FloatingPointLiteral) | (1 << XDocParser.BooleanLiteral) | (1 << XDocParser.CharacterLiteral) | (1 << XDocParser.StringLiteral) | (1 << XDocParser.NullLiteral))) !== 0))) {
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
        this.enterRule(_localctx, 72, XDocParser.RULE_parenthesizedExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 745;
                this.match(XDocParser.PAREN_OPEN);
                this.state = 747;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.SPACE) {
                    {
                        this.state = 746;
                        this.match(XDocParser.SPACE);
                    }
                }
                this.state = 749;
                this.expression(0);
                this.state = 751;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.SPACE) {
                    {
                        this.state = 750;
                        this.match(XDocParser.SPACE);
                    }
                }
                this.state = 753;
                this.match(XDocParser.PAREN_CLOSE);
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
        this.enterRule(_localctx, 74, XDocParser.RULE_description);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 755;
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
        this.enterRule(_localctx, 76, XDocParser.RULE_descriptionLine);
        let _la;
        try {
            this.state = 771;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocParser.IntegerLiteral:
                case XDocParser.FloatingPointLiteral:
                case XDocParser.BooleanLiteral:
                case XDocParser.CharacterLiteral:
                case XDocParser.StringLiteral:
                case XDocParser.NullLiteral:
                case XDocParser.ID:
                case XDocParser.SPACE:
                case XDocParser.TEXT_CONTENT:
                case XDocParser.MINUS:
                case XDocParser.FORWARD_SLASH:
                case XDocParser.COLON:
                case XDocParser.PERIOD:
                case XDocParser.BRACE_OPEN:
                case XDocParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 757;
                        this.descriptionLineStart();
                        this.state = 761;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocParser.IntegerLiteral) | (1 << XDocParser.FloatingPointLiteral) | (1 << XDocParser.BooleanLiteral) | (1 << XDocParser.CharacterLiteral) | (1 << XDocParser.StringLiteral) | (1 << XDocParser.NullLiteral) | (1 << XDocParser.ID) | (1 << XDocParser.SPACE) | (1 << XDocParser.TEXT_CONTENT) | (1 << XDocParser.AT) | (1 << XDocParser.MINUS) | (1 << XDocParser.FORWARD_SLASH) | (1 << XDocParser.COLON) | (1 << XDocParser.PERIOD) | (1 << XDocParser.INLINE_TAG_START) | (1 << XDocParser.BRACE_OPEN) | (1 << XDocParser.BRACE_CLOSE))) !== 0)) {
                            {
                                {
                                    this.state = 758;
                                    this.descriptionLineElement();
                                }
                            }
                            this.state = 763;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case XDocParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 764;
                        this.inlineTag();
                        this.state = 768;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocParser.IntegerLiteral) | (1 << XDocParser.FloatingPointLiteral) | (1 << XDocParser.BooleanLiteral) | (1 << XDocParser.CharacterLiteral) | (1 << XDocParser.StringLiteral) | (1 << XDocParser.NullLiteral) | (1 << XDocParser.ID) | (1 << XDocParser.SPACE) | (1 << XDocParser.TEXT_CONTENT) | (1 << XDocParser.AT) | (1 << XDocParser.MINUS) | (1 << XDocParser.FORWARD_SLASH) | (1 << XDocParser.COLON) | (1 << XDocParser.PERIOD) | (1 << XDocParser.INLINE_TAG_START) | (1 << XDocParser.BRACE_OPEN) | (1 << XDocParser.BRACE_CLOSE))) !== 0)) {
                            {
                                {
                                    this.state = 765;
                                    this.descriptionLineElement();
                                }
                            }
                            this.state = 770;
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
        this.enterRule(_localctx, 78, XDocParser.RULE_descriptionLineStart);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 774;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XDocParser.SPACE) {
                    {
                        this.state = 773;
                        this.match(XDocParser.SPACE);
                    }
                }
                this.state = 777;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 776;
                                    this.descriptionText();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 779;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 786;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 784;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case XDocParser.IntegerLiteral:
                                case XDocParser.FloatingPointLiteral:
                                case XDocParser.BooleanLiteral:
                                case XDocParser.CharacterLiteral:
                                case XDocParser.StringLiteral:
                                case XDocParser.NullLiteral:
                                case XDocParser.ID:
                                case XDocParser.TEXT_CONTENT:
                                case XDocParser.MINUS:
                                case XDocParser.FORWARD_SLASH:
                                case XDocParser.COLON:
                                case XDocParser.PERIOD:
                                case XDocParser.BRACE_OPEN:
                                case XDocParser.BRACE_CLOSE:
                                    {
                                        this.state = 781;
                                        this.descriptionText();
                                    }
                                    break;
                                case XDocParser.SPACE:
                                    {
                                        this.state = 782;
                                        this.match(XDocParser.SPACE);
                                    }
                                    break;
                                case XDocParser.AT:
                                    {
                                        this.state = 783;
                                        this.match(XDocParser.AT);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 788;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
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
        this.enterRule(_localctx, 80, XDocParser.RULE_descriptionText);
        try {
            this.state = 798;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocParser.TEXT_CONTENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 789;
                        this.match(XDocParser.TEXT_CONTENT);
                    }
                    break;
                case XDocParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 790;
                        this.match(XDocParser.ID);
                    }
                    break;
                case XDocParser.FORWARD_SLASH:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 791;
                        this.match(XDocParser.FORWARD_SLASH);
                    }
                    break;
                case XDocParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 792;
                        this.match(XDocParser.BRACE_OPEN);
                    }
                    break;
                case XDocParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 793;
                        this.match(XDocParser.BRACE_CLOSE);
                    }
                    break;
                case XDocParser.COLON:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 794;
                        this.match(XDocParser.COLON);
                    }
                    break;
                case XDocParser.MINUS:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 795;
                        this.match(XDocParser.MINUS);
                    }
                    break;
                case XDocParser.PERIOD:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 796;
                        this.match(XDocParser.PERIOD);
                    }
                    break;
                case XDocParser.IntegerLiteral:
                case XDocParser.FloatingPointLiteral:
                case XDocParser.BooleanLiteral:
                case XDocParser.CharacterLiteral:
                case XDocParser.StringLiteral:
                case XDocParser.NullLiteral:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 797;
                        this.literal();
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
        this.enterRule(_localctx, 82, XDocParser.RULE_descriptionLineElement);
        try {
            this.state = 802;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 800;
                        this.inlineTag();
                    }
                    break;
                case XDocParser.IntegerLiteral:
                case XDocParser.FloatingPointLiteral:
                case XDocParser.BooleanLiteral:
                case XDocParser.CharacterLiteral:
                case XDocParser.StringLiteral:
                case XDocParser.NullLiteral:
                case XDocParser.ID:
                case XDocParser.SPACE:
                case XDocParser.TEXT_CONTENT:
                case XDocParser.AT:
                case XDocParser.MINUS:
                case XDocParser.FORWARD_SLASH:
                case XDocParser.COLON:
                case XDocParser.PERIOD:
                case XDocParser.BRACE_OPEN:
                case XDocParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 801;
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
        this.enterRule(_localctx, 84, XDocParser.RULE_descriptionLineText);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 807;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 807;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case XDocParser.IntegerLiteral:
                                    case XDocParser.FloatingPointLiteral:
                                    case XDocParser.BooleanLiteral:
                                    case XDocParser.CharacterLiteral:
                                    case XDocParser.StringLiteral:
                                    case XDocParser.NullLiteral:
                                    case XDocParser.ID:
                                    case XDocParser.TEXT_CONTENT:
                                    case XDocParser.MINUS:
                                    case XDocParser.FORWARD_SLASH:
                                    case XDocParser.COLON:
                                    case XDocParser.PERIOD:
                                    case XDocParser.BRACE_OPEN:
                                    case XDocParser.BRACE_CLOSE:
                                        {
                                            this.state = 804;
                                            this.descriptionText();
                                        }
                                        break;
                                    case XDocParser.SPACE:
                                        {
                                            this.state = 805;
                                            this.match(XDocParser.SPACE);
                                        }
                                        break;
                                    case XDocParser.AT:
                                        {
                                            this.state = 806;
                                            this.match(XDocParser.AT);
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
                    this.state = 809;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
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
        this.enterRule(_localctx, 86, XDocParser.RULE_inlineTag);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 811;
                this.match(XDocParser.INLINE_TAG_START);
                this.state = 812;
                this.inlineTagName();
                this.state = 813;
                this.match(XDocParser.SPACE);
                this.state = 815;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocParser.ID) | (1 << XDocParser.NEWLINE) | (1 << XDocParser.SPACE) | (1 << XDocParser.TEXT_CONTENT) | (1 << XDocParser.FORWARD_SLASH) | (1 << XDocParser.PERIOD) | (1 << XDocParser.BRACE_OPEN))) !== 0)) {
                    {
                        this.state = 814;
                        this.inlineTagBody();
                    }
                }
                this.state = 817;
                this.match(XDocParser.BRACE_CLOSE);
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
        this.enterRule(_localctx, 88, XDocParser.RULE_inlineTagName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 819;
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
        this.enterRule(_localctx, 90, XDocParser.RULE_inlineTagBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 822;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 821;
                            this.braceBody();
                        }
                    }
                    this.state = 824;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocParser.ID) | (1 << XDocParser.NEWLINE) | (1 << XDocParser.SPACE) | (1 << XDocParser.TEXT_CONTENT) | (1 << XDocParser.FORWARD_SLASH) | (1 << XDocParser.PERIOD) | (1 << XDocParser.BRACE_OPEN))) !== 0));
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
        this.enterRule(_localctx, 92, XDocParser.RULE_braceExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 826;
                this.match(XDocParser.BRACE_OPEN);
                this.state = 830;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocParser.ID) | (1 << XDocParser.NEWLINE) | (1 << XDocParser.SPACE) | (1 << XDocParser.TEXT_CONTENT) | (1 << XDocParser.FORWARD_SLASH) | (1 << XDocParser.PERIOD) | (1 << XDocParser.BRACE_OPEN))) !== 0)) {
                    {
                        {
                            this.state = 827;
                            this.braceBody();
                        }
                    }
                    this.state = 832;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 833;
                this.match(XDocParser.BRACE_CLOSE);
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
        this.enterRule(_localctx, 94, XDocParser.RULE_braceBody);
        try {
            let _alt;
            this.state = 844;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case XDocParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 835;
                        this.braceExpression();
                    }
                    break;
                case XDocParser.ID:
                case XDocParser.NEWLINE:
                case XDocParser.SPACE:
                case XDocParser.TEXT_CONTENT:
                case XDocParser.FORWARD_SLASH:
                case XDocParser.PERIOD:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 836;
                        this.braceText();
                        this.state = 841;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 837;
                                        this.match(XDocParser.NEWLINE);
                                        this.state = 838;
                                        this.braceText();
                                    }
                                }
                            }
                            this.state = 843;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
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
        this.enterRule(_localctx, 96, XDocParser.RULE_braceText);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 846;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocParser.ID) | (1 << XDocParser.NEWLINE) | (1 << XDocParser.SPACE) | (1 << XDocParser.TEXT_CONTENT) | (1 << XDocParser.FORWARD_SLASH) | (1 << XDocParser.PERIOD))) !== 0))) {
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
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, XDocParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 848;
                this.match(XDocParser.ID);
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
            case 10:
                return this.type_sempred(_localctx, predIndex);
            case 20:
                return this.arrayType_sempred(_localctx, predIndex);
            case 28:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    type_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 9);
        }
        return true;
    }
    arrayType_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 1);
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
        if (!XDocParser.__ATN) {
            XDocParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(XDocParser._serializedATN));
        }
        return XDocParser.__ATN;
    }
}
XDocParser.IntegerLiteral = 1;
XDocParser.FloatingPointLiteral = 2;
XDocParser.BooleanLiteral = 3;
XDocParser.CharacterLiteral = 4;
XDocParser.StringLiteral = 5;
XDocParser.NullLiteral = 6;
XDocParser.ID = 7;
XDocParser.NEWLINE = 8;
XDocParser.SPACE = 9;
XDocParser.TEXT_CONTENT = 10;
XDocParser.AT = 11;
XDocParser.PLUS = 12;
XDocParser.MINUS = 13;
XDocParser.STAR = 14;
XDocParser.FORWARD_SLASH = 15;
XDocParser.COLON = 16;
XDocParser.PERIOD = 17;
XDocParser.COMMA = 18;
XDocParser.EQUAL = 19;
XDocParser.QUESTION = 20;
XDocParser.AMP = 21;
XDocParser.PIPE = 22;
XDocParser.ARROW = 23;
XDocParser.EXCLAMATION = 24;
XDocParser.INLINE_TAG_START = 25;
XDocParser.BRACE_OPEN = 26;
XDocParser.BRACE_CLOSE = 27;
XDocParser.PAREN_OPEN = 28;
XDocParser.PAREN_CLOSE = 29;
XDocParser.BRACKET_OPEN = 30;
XDocParser.BRACKET_CLOSE = 31;
XDocParser.LESSTHAN = 32;
XDocParser.GREATERTHAN = 33;
XDocParser.RULE_documentation = 0;
XDocParser.RULE_body = 1;
XDocParser.RULE_whitespace = 2;
XDocParser.RULE_annotations = 3;
XDocParser.RULE_tag = 4;
XDocParser.RULE_tagName = 5;
XDocParser.RULE_tagID = 6;
XDocParser.RULE_optionalTagID = 7;
XDocParser.RULE_propertyTagID = 8;
XDocParser.RULE_optionalTagOrIdentifier = 9;
XDocParser.RULE_type = 10;
XDocParser.RULE_unaryType = 11;
XDocParser.RULE_tupleType = 12;
XDocParser.RULE_tupleTypeList = 13;
XDocParser.RULE_primaryType = 14;
XDocParser.RULE_identifierOrKeyword = 15;
XDocParser.RULE_parenthesizedType = 16;
XDocParser.RULE_lambdaType = 17;
XDocParser.RULE_formalParameterSequence = 18;
XDocParser.RULE_parameter = 19;
XDocParser.RULE_arrayType = 20;
XDocParser.RULE_objectType = 21;
XDocParser.RULE_objectPairTypeList = 22;
XDocParser.RULE_objectPairType = 23;
XDocParser.RULE_optionalType = 24;
XDocParser.RULE_propertyType = 25;
XDocParser.RULE_optionalTypeOrIdentifer = 26;
XDocParser.RULE_value = 27;
XDocParser.RULE_expression = 28;
XDocParser.RULE_unaryExpression = 29;
XDocParser.RULE_arrayExpression = 30;
XDocParser.RULE_objectExpression = 31;
XDocParser.RULE_objectPairExpressionList = 32;
XDocParser.RULE_objectPairExpression = 33;
XDocParser.RULE_lambdaExpression = 34;
XDocParser.RULE_literal = 35;
XDocParser.RULE_parenthesizedExpression = 36;
XDocParser.RULE_description = 37;
XDocParser.RULE_descriptionLine = 38;
XDocParser.RULE_descriptionLineStart = 39;
XDocParser.RULE_descriptionText = 40;
XDocParser.RULE_descriptionLineElement = 41;
XDocParser.RULE_descriptionLineText = 42;
XDocParser.RULE_inlineTag = 43;
XDocParser.RULE_inlineTagName = 44;
XDocParser.RULE_inlineTagBody = 45;
XDocParser.RULE_braceExpression = 46;
XDocParser.RULE_braceBody = 47;
XDocParser.RULE_braceText = 48;
XDocParser.RULE_identifier = 49;
XDocParser.ruleNames = [
    "documentation", "body", "whitespace", "annotations", "tag", "tagName",
    "tagID", "optionalTagID", "propertyTagID", "optionalTagOrIdentifier",
    "type", "unaryType", "tupleType", "tupleTypeList", "primaryType", "identifierOrKeyword",
    "parenthesizedType", "lambdaType", "formalParameterSequence", "parameter",
    "arrayType", "objectType", "objectPairTypeList", "objectPairType", "optionalType",
    "propertyType", "optionalTypeOrIdentifer", "value", "expression", "unaryExpression",
    "arrayExpression", "objectExpression", "objectPairExpressionList", "objectPairExpression",
    "lambdaExpression", "literal", "parenthesizedExpression", "description",
    "descriptionLine", "descriptionLineStart", "descriptionText", "descriptionLineElement",
    "descriptionLineText", "inlineTag", "inlineTagName", "inlineTagBody",
    "braceExpression", "braceBody", "braceText", "identifier"
];
XDocParser._LITERAL_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "'@'", "'+'", "'-'", "'*'",
    "'/'", "':'", "'.'", "','", "'='", "'?'", "'&'", "'|'", undefined, "'!'",
    "'{@'", "'{'", "'}'", "'('", "')'", "'['", "']'", "'<'", "'>'"
];
XDocParser._SYMBOLIC_NAMES = [
    undefined, "IntegerLiteral", "FloatingPointLiteral", "BooleanLiteral",
    "CharacterLiteral", "StringLiteral", "NullLiteral", "ID", "NEWLINE", "SPACE",
    "TEXT_CONTENT", "AT", "PLUS", "MINUS", "STAR", "FORWARD_SLASH", "COLON",
    "PERIOD", "COMMA", "EQUAL", "QUESTION", "AMP", "PIPE", "ARROW", "EXCLAMATION",
    "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE",
    "BRACKET_OPEN", "BRACKET_CLOSE", "LESSTHAN", "GREATERTHAN"
];
XDocParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(XDocParser._LITERAL_NAMES, XDocParser._SYMBOLIC_NAMES, []);
XDocParser._serializedATNSegments = 2;
XDocParser._serializedATNSegment0 = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03#\u0355\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x03\x02" +
    "\x03\x02\x03\x02\x05\x02j\n\x02\x03\x02\x03\x02\x05\x02n\n\x02\x03\x03" +
    "\x07\x03q\n\x03\f\x03\x0E\x03t\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
    "\x05\x03\x05\x03\x05\x07\x05}\n\x05\f\x05\x0E\x05\x80\v\x05\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x91\n\x06\x03\x06\x03\x06" +
    "\x05\x06\x95\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x05\x06\xA7\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xB3\n\x06\x03\x06\x03\x06\x05" +
    "\x06\xB7\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
    "\xBF\n\x06\x03\x06\x03\x06\x05\x06\xC3\n\x06\x03\x06\x03\x06\x05\x06\xC7" +
    "\n\x06\x03\x06\x03\x06\x05\x06\xCB\n\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x05\x06\xD3\n\x06\x03\x06\x03\x06\x05\x06\xD7\n\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x05\x06\xE3\n\x06\x03\x06\x03\x06\x05\x06\xE7\n\x06\x03\x06\x03\x06" +
    "\x05\x06\xEB\n\x06\x03\x06\x03\x06\x05\x06\xEF\n\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xF9\n\x06\x03\x06" +
    "\x03\x06\x05\x06\xFD\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0103" +
    "\n\x06\x03\x06\x03\x06\x05\x06\u0107\n\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x05\x06\u010F\n\x06\x03\x07\x03\x07\x03\x07\x03\b" +
    "\x03\b\x03\b\x05\b\u0117\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x06\n" +
    "\u011F\n\n\r\n\x0E\n\u0120\x03\n\x03\n\x03\n\x06\n\u0126\n\n\r\n\x0E\n" +
    "\u0127\x05\n\u012A\n\n\x03\v\x03\v\x05\v\u012E\n\v\x03\f\x03\f\x03\f\x03" +
    "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0139\n\f\x03\f\x03\f\x05\f\u013D" +
    "\n\f\x03\f\x03\f\x05\f\u0141\n\f\x03\f\x07\f\u0144\n\f\f\f\x0E\f\u0147" +
    "\v\f\x03\r\x03\r\x03\r\x03\x0E\x05\x0E\u014D\n\x0E\x03\x0E\x03\x0E\x05" +
    "\x0E\u0151\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0155\n\x0E\x03\x0E\x03\x0E\x03" +
    "\x0F\x03\x0F\x05\x0F\u015B\n\x0F\x03\x0F\x03\x0F\x05\x0F\u015F\n\x0F\x03" +
    "\x0F\x06\x0F\u0162\n\x0F\r\x0F\x0E\x0F\u0163\x03\x10\x03\x10\x05\x10\u0168" +
    "\n\x10\x03\x11\x03\x11\x05\x11\u016C\n\x11\x03\x12\x03\x12\x05\x12\u0170" +
    "\n\x12\x03\x12\x03\x12\x05\x12\u0174\n\x12\x03\x12\x03\x12\x03\x13\x03" +
    "\x13\x05\x13\u017A\n\x13\x03\x13\x05\x13\u017D\n\x13\x03\x13\x05\x13\u0180" +
    "\n\x13\x03\x13\x03\x13\x05\x13\u0184\n\x13\x03\x13\x03\x13\x05\x13\u0188" +
    "\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u018D\n\x13\x03\x13\x03\x13\x05" +
    "\x13\u0191\n\x13\x03\x13\x03\x13\x05\x13\u0195\n\x13\x03\x14\x03\x14\x03" +
    "\x14\x05\x14\u019A\n\x14\x03\x14\x07\x14\u019D\n\x14\f\x14\x0E\x14\u01A0" +
    "\v\x14\x03\x15\x03\x15\x05\x15\u01A4\n\x15\x03\x15\x03\x15\x05\x15\u01A8" +
    "\n\x15\x03\x15\x05\x15\u01AB\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u01B0" +
    "\n\x16\x03\x16\x05\x16\u01B3\n\x16\x03\x16\x05\x16\u01B6\n\x16\x03\x16" +
    "\x05\x16\u01B9\n\x16\x03\x16\x03\x16\x05\x16\u01BD\n\x16\x03\x16\x05\x16" +
    "\u01C0\n\x16\x03\x16\x05\x16\u01C3\n\x16\x03\x16\x07\x16\u01C6\n\x16\f" +
    "\x16\x0E\x16\u01C9\v\x16\x03\x16\x05\x16\u01CC\n\x16\x03\x16\x05\x16\u01CF" +
    "\n\x16\x03\x16\x05\x16\u01D2\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
    "\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01DD\n\x16\x03\x16\x03\x16" +
    "\x03\x16\x05\x16\u01E2\n\x16\x03\x16\x07\x16\u01E5\n\x16\f\x16\x0E\x16" +
    "\u01E8\v\x16\x03\x17\x03\x17\x05\x17\u01EC\n\x17\x03\x17\x05\x17\u01EF" +
    "\n\x17\x03\x17\x05\x17\u01F2\n\x17\x03\x17\x05\x17\u01F5\n\x17\x03\x17" +
    "\x05\x17\u01F8\n\x17\x03\x17\x05\x17\u01FB\n\x17\x03\x17\x05\x17\u01FE" +
    "\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x05\x18\u0204\n\x18\x03\x18\x03" +
    "\x18\x05\x18\u0208\n\x18\x03\x18\x05\x18\u020B\n\x18\x03\x18\x05\x18\u020E" +
    "\n\x18\x03\x18\x07\x18\u0211\n\x18\f\x18\x0E\x18\u0214\v\x18\x03\x19\x03" +
    "\x19\x05\x19\u0218\n\x19\x03\x19\x05\x19\u021B\n\x19\x03\x19\x03\x19\x05" +
    "\x19\u021F\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
    "\x03\x1B\x06\x1B\u0229\n\x1B\r\x1B\x0E\x1B\u022A\x03\x1B\x03\x1B\x03\x1B" +
    "\x06\x1B\u0230\n\x1B\r\x1B\x0E\x1B\u0231\x05\x1B\u0234\n\x1B\x03\x1C\x03" +
    "\x1C\x05\x1C\u0238\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
    "\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0243\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0247" +
    "\n\x1E\x03\x1E\x03\x1E\x05\x1E\u024B\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05" +
    "\x1E\u0250\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0254\n\x1E\x03\x1E\x07\x1E\u0257" +
    "\n\x1E\f\x1E\x0E\x1E\u025A\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x05" +
    " \u0261\n \x03 \x05 \u0264\n \x03 \x05 \u0267\n \x03 \x05 \u026A\n \x03" +
    " \x03 \x05 \u026E\n \x03 \x05 \u0271\n \x03 \x05 \u0274\n \x03 \x07 \u0277" +
    "\n \f \x0E \u027A\v \x03 \x05 \u027D\n \x03 \x05 \u0280\n \x03 \x05 \u0283" +
    "\n \x03 \x03 \x03!\x03!\x05!\u0289\n!\x03!\x05!\u028C\n!\x03!\x05!\u028F" +
    "\n!\x03!\x05!\u0292\n!\x03!\x05!\u0295\n!\x03!\x05!\u0298\n!\x03!\x05" +
    "!\u029B\n!\x03!\x03!\x03\"\x03\"\x05\"\u02A1\n\"\x03\"\x03\"\x05\"\u02A5" +
    "\n\"\x03\"\x05\"\u02A8\n\"\x03\"\x05\"\u02AB\n\"\x03\"\x07\"\u02AE\n\"" +
    "\f\"\x0E\"\u02B1\v\"\x03#\x03#\x05#\u02B5\n#\x03#\x03#\x05#\u02B9\n#\x03" +
    "#\x03#\x03#\x03#\x05#\u02BF\n#\x03#\x03#\x05#\u02C3\n#\x03#\x03#\x05#" +
    "\u02C7\n#\x03$\x03$\x05$\u02CB\n$\x03$\x05$\u02CE\n$\x03$\x05$\u02D1\n" +
    "$\x03$\x03$\x05$\u02D5\n$\x03$\x03$\x05$\u02D9\n$\x03$\x03$\x03$\x05$" +
    "\u02DE\n$\x03$\x03$\x05$\u02E2\n$\x03$\x03$\x05$\u02E6\n$\x05$\u02E8\n" +
    "$\x03%\x03%\x03&\x03&\x05&\u02EE\n&\x03&\x03&\x05&\u02F2\n&\x03&\x03&" +
    "\x03\'\x03\'\x03(\x03(\x07(\u02FA\n(\f(\x0E(\u02FD\v(\x03(\x03(\x07(\u0301" +
    "\n(\f(\x0E(\u0304\v(\x05(\u0306\n(\x03)\x05)\u0309\n)\x03)\x06)\u030C" +
    "\n)\r)\x0E)\u030D\x03)\x03)\x03)\x07)\u0313\n)\f)\x0E)\u0316\v)\x03*\x03" +
    "*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0321\n*\x03+\x03+\x05+\u0325" +
    "\n+\x03,\x03,\x03,\x06,\u032A\n,\r,\x0E,\u032B\x03-\x03-\x03-\x03-\x05" +
    "-\u0332\n-\x03-\x03-\x03.\x03.\x03/\x06/\u0339\n/\r/\x0E/\u033A\x030\x03" +
    "0\x070\u033F\n0\f0\x0E0\u0342\v0\x030\x030\x031\x031\x031\x031\x071\u034A" +
    "\n1\f1\x0E1\u034D\v1\x051\u034F\n1\x032\x032\x033\x033\x033\x02\x02\x05" +
    "\x16*:4\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
    "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
    "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
    "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
    "^\x02`\x02b\x02d\x02\x02\t\x03\x02\n\v\x03\x02\x17\x18\x04\x02\x10\x10" +
    "\x17\x17\x03\x02\x10\x11\x03\x02\x0E\x0F\x03\x02\x03\b\x05\x02\t\f\x11" +
    "\x11\x13\x13\u03D8\x02m\x03\x02\x02\x02\x04r\x03\x02\x02\x02\x06w\x03" +
    "\x02\x02\x02\by\x03\x02\x02\x02\n\u010E\x03\x02\x02\x02\f\u0110\x03\x02" +
    "\x02\x02\x0E\u0116\x03\x02\x02\x02\x10\u0118\x03\x02\x02\x02\x12\u0129" +
    "\x03\x02\x02\x02\x14\u012D\x03\x02\x02\x02\x16\u0138\x03\x02\x02\x02\x18" +
    "\u0148\x03\x02\x02\x02\x1A\u014C\x03\x02\x02\x02\x1C\u0158\x03\x02\x02" +
    "\x02\x1E\u0167\x03\x02\x02\x02 \u016B\x03\x02\x02\x02\"\u016D\x03\x02" +
    "\x02\x02$\u0194\x03\x02\x02\x02&\u0196\x03\x02\x02\x02(\u01A1\x03\x02" +
    "\x02\x02*\u01DC\x03\x02\x02\x02,\u01E9\x03\x02\x02\x02.\u0201\x03\x02" +
    "\x02\x020\u0215\x03\x02\x02\x022\u0222\x03\x02\x02\x024\u0233\x03\x02" +
    "\x02\x026\u0237\x03\x02\x02\x028\u0239\x03\x02\x02\x02:\u0242\x03\x02" +
    "\x02\x02<\u025B\x03\x02\x02\x02>\u025E\x03\x02\x02\x02@\u0286\x03\x02" +
    "\x02\x02B\u029E\x03\x02\x02\x02D\u02C6\x03\x02\x02\x02F\u02E7\x03\x02" +
    "\x02\x02H\u02E9\x03\x02\x02\x02J\u02EB\x03\x02\x02\x02L\u02F5\x03\x02" +
    "\x02\x02N\u0305\x03\x02\x02\x02P\u0308\x03\x02\x02\x02R\u0320\x03\x02" +
    "\x02\x02T\u0324\x03\x02\x02\x02V\u0329\x03\x02\x02\x02X\u032D\x03\x02" +
    "\x02\x02Z\u0335\x03\x02\x02\x02\\\u0338\x03\x02\x02\x02^\u033C\x03\x02" +
    "\x02\x02`\u034E\x03\x02\x02\x02b\u0350\x03\x02\x02\x02d\u0352\x03\x02" +
    "\x02\x02fn\x07\x02\x02\x03gi\x05\x04\x03\x02hj\x07\n\x02\x02ih\x03\x02" +
    "\x02\x02ij\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x07\x02\x02\x03ln\x03\x02" +
    "\x02\x02mf\x03\x02\x02\x02mg\x03\x02\x02\x02n\x03\x03\x02\x02\x02oq\x05" +
    "\x06\x04\x02po\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03" +
    "\x02\x02\x02su\x03\x02\x02\x02tr\x03\x02\x02\x02uv\x05\b\x05\x02v\x05" +
    "\x03\x02\x02\x02wx\t\x02\x02\x02x\x07\x03\x02\x02\x02y~\x05\n\x06\x02" +
    "z{\x07\n\x02\x02{}\x05\n\x06\x02|z\x03\x02\x02\x02}\x80\x03\x02\x02\x02" +
    "~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\t\x03\x02\x02\x02\x80~\x03" +
    "\x02\x02\x02\x81\u010F\x05\f\x07\x02\x82\x83\x05\f\x07\x02\x83\x84\x07" +
    "\v\x02\x02\x84\x85\x07\x0F\x02\x02\x85\x86\x07\v\x02\x02\x86\x87\x05L" +
    "\'\x02\x87\u010F\x03\x02\x02\x02\x88\x89\x05\f\x07\x02\x89\x8A\x07\v\x02" +
    "\x02\x8A\x8B\x05\x0E\b\x02\x8B\u010F\x03\x02\x02\x02\x8C\x8D\x05\f\x07" +
    "\x02\x8D\x8E\x07\v\x02\x02\x8E\x90\x05\x0E\b\x02\x8F\x91\x07\v\x02\x02" +
    "\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02" +
    "\x92\x94\x07\x15\x02\x02\x93\x95\x07\v\x02\x02\x94\x93\x03\x02\x02\x02" +
    "\x94\x95\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x058\x1D\x02" +
    "\x97\u010F\x03\x02\x02\x02\x98\x99\x05\f\x07\x02\x99\x9A\x07\v\x02\x02" +
    "\x9A\x9B\x05\x0E\b\x02\x9B\x9C\x07\v\x02\x02\x9C\x9D\x07\x0F\x02\x02\x9D" +
    "\x9E\x07\v\x02\x02\x9E\x9F\x05L\'\x02\x9F\u010F\x03\x02\x02\x02\xA0\xA1" +
    "\x05\f\x07\x02\xA1\xA2\x07\v\x02\x02\xA2\xA3\x05\x0E\b\x02\xA3\xA4\x07" +
    "\v\x02\x02\xA4\xA6\x07\x15\x02\x02\xA5\xA7\x07\v\x02\x02\xA6\xA5\x03\x02" +
    "\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xA9\x058" +
    "\x1D\x02\xA9\xAA\x07\v\x02\x02\xAA\xAB\x07\x0F\x02\x02\xAB\xAC\x07\v\x02" +
    "\x02\xAC\xAD\x05L\'\x02\xAD\u010F\x03\x02\x02\x02\xAE\xAF\x05\f\x07\x02" +
    "\xAF\xB0\x07\v\x02\x02\xB0\xB2\x05\x0E\b\x02\xB1\xB3\x07\v\x02\x02\xB2" +
    "\xB1\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4" +
    "\xB6\x07\x12\x02\x02\xB5\xB7\x07\v\x02\x02\xB6\xB5\x03\x02\x02\x02\xB6" +
    "\xB7\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x05\x16\f\x02\xB9" +
    "\u010F\x03\x02\x02\x02\xBA\xBB\x05\f\x07\x02\xBB\xBC\x07\v\x02\x02\xBC" +
    "\xBE\x05\x0E\b\x02\xBD\xBF\x07\v\x02\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF" +
    "\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x07\x12\x02\x02\xC1\xC3" +
    "\x07\v\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4" +
    "\x03\x02\x02\x02\xC4\xC6\x05\x16\f\x02\xC5\xC7\x07\v\x02\x02\xC6\xC5\x03" +
    "\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xCA\x07" +
    "\x15\x02\x02\xC9\xCB\x07\v\x02\x02\xCA\xC9\x03\x02\x02\x02\xCA\xCB\x03" +
    "\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCD\x058\x1D\x02\xCD\u010F\x03" +
    "\x02\x02\x02\xCE\xCF\x05\f\x07\x02\xCF\xD0\x07\v\x02\x02\xD0\xD2\x05\x0E" +
    "\b\x02\xD1\xD3\x07\v\x02\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02" +
    "\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x07\x12\x02\x02\xD5\xD7\x07\v\x02" +
    "\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x03\x02\x02" +
    "\x02\xD8\xD9\x05\x16\f\x02\xD9\xDA\x07\v\x02\x02\xDA\xDB\x07\x0F\x02\x02" +
    "\xDB\xDC\x07\v\x02\x02\xDC\xDD\x05L\'\x02\xDD\u010F\x03\x02\x02\x02\xDE" +
    "\xDF\x05\f\x07\x02\xDF\xE0\x07\v\x02\x02\xE0\xE2\x05\x0E\b\x02\xE1\xE3" +
    "\x07\v\x02\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4" +
    "\x03\x02\x02\x02\xE4\xE6\x07\x12\x02\x02\xE5\xE7\x07\v\x02\x02\xE6\xE5" +
    "\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEA" +
    "\x05\x16\f\x02\xE9\xEB\x07\v\x02\x02\xEA\xE9\x03\x02\x02\x02\xEA\xEB\x03" +
    "\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE\x07\x15\x02\x02\xED\xEF\x07" +
    "\v\x02\x02\xEE\xED\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0\x03" +
    "\x02\x02\x02\xF0\xF1\x058\x1D\x02\xF1\xF2\x07\v\x02\x02\xF2\xF3\x07\x0F" +
    "\x02\x02\xF3\xF4\x07\v\x02\x02\xF4\xF5\x05L\'\x02\xF5\u010F\x03\x02\x02" +
    "\x02\xF6\xF8\x05\f\x07\x02\xF7\xF9\x07\v\x02\x02\xF8\xF7\x03\x02\x02\x02" +
    "\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x07\x12\x02\x02" +
    "\xFB\xFD\x07\v\x02\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02" +
    "\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x05\x16\f\x02\xFF\u010F\x03\x02\x02\x02" +
    "\u0100\u0102\x05\f\x07\x02\u0101\u0103\x07\v\x02\x02\u0102\u0101\x03\x02" +
    "\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104" +
    "\u0106\x07\x12\x02\x02\u0105\u0107\x07\v\x02\x02\u0106\u0105\x03\x02\x02" +
    "\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109" +
    "\x05\x16\f\x02\u0109\u010A\x07\v\x02\x02\u010A\u010B\x07\x0F\x02\x02\u010B" +
    "\u010C\x07\v\x02\x02\u010C\u010D\x05L\'\x02\u010D\u010F\x03\x02\x02\x02" +
    "\u010E\x81\x03\x02\x02\x02\u010E\x82\x03\x02\x02\x02\u010E\x88\x03\x02" +
    "\x02\x02\u010E\x8C\x03\x02\x02\x02\u010E\x98\x03\x02\x02\x02\u010E\xA0" +
    "\x03\x02\x02\x02\u010E\xAE\x03\x02\x02\x02\u010E\xBA\x03\x02\x02\x02\u010E" +
    "\xCE\x03\x02\x02\x02\u010E\xDE\x03\x02\x02\x02\u010E\xF6\x03\x02\x02\x02" +
    "\u010E\u0100\x03\x02\x02\x02\u010F\v\x03\x02\x02\x02\u0110\u0111\x07\r" +
    "\x02\x02\u0111\u0112\x05d3\x02\u0112\r\x03\x02\x02\x02\u0113\u0117\x05" +
    "\x12\n\x02\u0114\u0117\x05\x10\t\x02\u0115\u0117\x05d3\x02\u0116\u0113" +
    "\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0115\x03\x02\x02\x02" +
    "\u0117\x0F\x03\x02\x02\x02\u0118\u0119\x05d3\x02\u0119\u011A\x07\x16\x02" +
    "\x02\u011A\x11\x03\x02\x02\x02\u011B\u011E\x05\x10\t\x02\u011C\u011D\x07" +
    "\x13\x02\x02\u011D\u011F\x05\x14\v\x02\u011E\u011C\x03\x02\x02\x02\u011F" +
    "\u0120\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02" +
    "\x02\x02\u0121\u012A\x03\x02\x02\x02\u0122\u0125\x05d3\x02\u0123\u0124" +
    "\x07\x13\x02\x02\u0124\u0126\x05\x14\v\x02\u0125\u0123\x03\x02\x02\x02" +
    "\u0126\u0127\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03" +
    "\x02\x02\x02\u0128\u012A\x03\x02\x02\x02\u0129\u011B\x03\x02\x02\x02\u0129" +
    "\u0122\x03\x02\x02\x02\u012A\x13\x03\x02\x02\x02\u012B\u012E\x05\x10\t" +
    "\x02\u012C\u012E\x05d3\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012C\x03" +
    "\x02\x02\x02\u012E\x15\x03\x02\x02\x02\u012F\u0130\b\f\x01\x02\u0130\u0139" +
    "\x05$\x13\x02\u0131\u0139\x05\x1A\x0E\x02\u0132\u0139\x05\x1E\x10\x02" +
    "\u0133\u0139\x05\"\x12\x02\u0134\u0139\x05\x18\r\x02\u0135\u0139\x05," +
    "\x17\x02\u0136\u0139\x05*\x16\x02\u0137\u0139\x054\x1B\x02\u0138\u012F" +
    "\x03\x02\x02\x02\u0138\u0131\x03\x02\x02\x02\u0138\u0132\x03\x02\x02\x02" +
    "\u0138\u0133\x03\x02\x02\x02\u0138\u0134\x03\x02\x02\x02\u0138\u0135\x03" +
    "\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0137\x03\x02\x02\x02\u0139" +
    "\u0145\x03\x02\x02\x02\u013A\u013C\f\v\x02\x02\u013B\u013D\x07\v\x02\x02" +
    "\u013C\u013B\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013E\x03" +
    "\x02\x02\x02\u013E\u0140\t\x03\x02\x02\u013F\u0141\x07\v\x02\x02\u0140" +
    "\u013F\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142\x03\x02" +
    "\x02\x02\u0142\u0144\x05\x16\f\f\u0143\u013A\x03\x02\x02\x02\u0144\u0147" +
    "\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02" +
    "\u0146\x17\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0148\u0149\t\x04" +
    "\x02\x02\u0149\u014A\x05\x1E\x10\x02\u014A\x19\x03\x02\x02\x02\u014B\u014D" +
    "\x05d3\x02\u014C\u014B\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D" +
    "\u014E\x03\x02\x02\x02\u014E\u0150\x07\"\x02\x02\u014F\u0151\x07\v\x02" +
    "\x02\u0150\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0152" +
    "\x03\x02\x02\x02\u0152\u0154\x05\x1C\x0F\x02\u0153\u0155\x07\v\x02\x02" +
    "\u0154\u0153\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x03" +
    "\x02\x02\x02\u0156\u0157\x07#\x02\x02\u0157\x1B\x03\x02\x02\x02\u0158" +
    "\u015A\x05\x16\f\x02\u0159\u015B\x07\v\x02\x02\u015A\u0159\x03\x02\x02" +
    "\x02\u015A\u015B\x03\x02\x02\x02\u015B\u0161\x03\x02\x02\x02\u015C\u015E" +
    "\x07\x14\x02\x02\u015D\u015F\x07\v\x02\x02\u015E\u015D\x03\x02\x02\x02" +
    "\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0162\x05" +
    "\x16\f\x02\u0161\u015C\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163" +
    "\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\x1D\x03\x02\x02" +
    "\x02\u0165\u0168\x052\x1A\x02\u0166\u0168\x05 \x11\x02\u0167\u0165\x03" +
    "\x02\x02\x02\u0167\u0166\x03\x02\x02\x02\u0168\x1F\x03\x02\x02\x02\u0169" +
    "\u016C\x05d3\x02\u016A\u016C\x07\b\x02\x02\u016B\u0169\x03\x02\x02\x02" +
    "\u016B\u016A\x03\x02\x02\x02\u016C!\x03\x02\x02\x02\u016D\u016F\x07\x1E" +
    "\x02\x02\u016E\u0170\x07\v\x02\x02\u016F\u016E\x03\x02\x02\x02\u016F\u0170" +
    "\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0173\x05\x16\f\x02" +
    "\u0172\u0174\x07\v\x02\x02\u0173\u0172\x03\x02\x02\x02\u0173\u0174\x03" +
    "\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0176\x07\x1F\x02\x02\u0176" +
    "#\x03\x02\x02\x02\u0177\u0179\x07\x1E\x02\x02\u0178\u017A\x07\v\x02\x02" +
    "\u0179\u0178\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017C\x03" +
    "\x02\x02\x02\u017B\u017D\x05&\x14\x02\u017C\u017B\x03\x02\x02\x02\u017C" +
    "\u017D\x03\x02\x02\x02\u017D\u017F\x03\x02\x02\x02\u017E\u0180\x07\v\x02" +
    "\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0181" +
    "\x03\x02\x02\x02\u0181\u0183\x07\x1F\x02\x02\u0182\u0184\x07\v\x02\x02" +
    "\u0183\u0182\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0185\x03" +
    "\x02\x02\x02\u0185\u0187\x07\x19\x02\x02\u0186\u0188\x07\v\x02\x02\u0187" +
    "\u0186\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0189\x03\x02" +
    "\x02\x02\u0189\u0195\x05\x16\f\x02\u018A\u018C\x05(\x15\x02\u018B\u018D" +
    "\x07\v\x02\x02\u018C\u018B\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02" +
    "\u018D\u018E\x03\x02\x02\x02\u018E\u0190\x07\x19\x02\x02\u018F\u0191\x07" +
    "\v\x02\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191" +
    "\u0192\x03\x02\x02\x02\u0192\u0193\x05\x16\f\x02\u0193\u0195\x03\x02\x02" +
    "\x02\u0194\u0177\x03\x02\x02\x02\u0194\u018A\x03\x02\x02\x02\u0195%\x03" +
    "\x02\x02\x02\u0196\u019E\x05(\x15\x02\u0197\u0199\x07\x14\x02\x02\u0198" +
    "\u019A\x07\v\x02\x02\u0199\u0198\x03\x02\x02\x02\u0199\u019A\x03\x02\x02" +
    "\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019D\x05(\x15\x02\u019C\u0197" +
    "\x03\x02\x02\x02\u019D\u01A0\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02" +
    "\u019E\u019F\x03\x02\x02\x02\u019F\'\x03\x02\x02\x02\u01A0\u019E\x03\x02" +
    "\x02\x02\u01A1\u01AA\x05d3\x02\u01A2\u01A4\x07\v\x02\x02\u01A3\u01A2\x03" +
    "\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5" +
    "\u01A7\x07\x12\x02\x02\u01A6\u01A8\x07\v\x02\x02\u01A7\u01A6\x03\x02\x02" +
    "\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB" +
    "\x05\x16\f\x02\u01AA\u01A3\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02" +
    "\u01AB)\x03\x02\x02\x02\u01AC\u01AD\b\x16\x01\x02\u01AD\u01AF\x07 \x02" +
    "\x02\u01AE\u01B0\x07\n\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0" +
    "\x03\x02\x02\x02\u01B0\u01B2\x03\x02\x02\x02\u01B1\u01B3\x07\v\x02\x02" +
    "\u01B2\u01B1\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B5\x03" +
    "\x02\x02\x02\u01B4\u01B6\x07\n\x02\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5" +
    "\u01B6\x03\x02\x02\x02\u01B6\u01B8\x03\x02\x02\x02\u01B7\u01B9\x05\x16" +
    "\f\x02\u01B8\u01B7\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01C7" +
    "\x03\x02\x02\x02\u01BA\u01BC\x07\x14\x02\x02\u01BB\u01BD\x07\n\x02\x02" +
    "\u01BC\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BF\x03" +
    "\x02\x02\x02\u01BE\u01C0\x07\v\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01BF" +
    "\u01C0\x03\x02\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01C3\x07\n\x02" +
    "\x02\u01C2\u01C1\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4" +
    "\x03\x02\x02\x02\u01C4\u01C6\x05\x16\f\x02\u01C5\u01BA\x03\x02\x02\x02" +
    "\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03" +
    "\x02\x02\x02\u01C8\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01CA" +
    "\u01CC\x07\n\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02" +
    "\x02\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01CF\x07\v\x02\x02\u01CE\u01CD" +
    "\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D1\x03\x02\x02\x02" +
    "\u01D0";
XDocParser._serializedATNSegment1 = "\u01D2\x07\n\x02\x02\u01D1\u01D0\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02" +
    "\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01DD\x07!\x02\x02\u01D4\u01D5" +
    "\x05d3\x02\u01D5\u01D6\x07 \x02\x02\u01D6\u01D7\x07!\x02\x02\u01D7\u01DD" +
    "\x03\x02\x02\x02\u01D8\u01D9\x05,\x17\x02\u01D9\u01DA\x07 \x02\x02\u01DA" +
    "\u01DB\x07!\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC\u01AC\x03\x02\x02" +
    "\x02\u01DC\u01D4\x03\x02\x02\x02\u01DC\u01D8\x03\x02\x02\x02\u01DD\u01E6" +
    "\x03\x02\x02\x02\u01DE\u01DF\f\x03\x02\x02\u01DF\u01E1\x07 \x02\x02\u01E0" +
    "\u01E2\x05\x16\f\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02" +
    "\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E5\x07!\x02\x02\u01E4\u01DE" +
    "\x03\x02\x02\x02\u01E5\u01E8\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02" +
    "\u01E6\u01E7\x03\x02\x02\x02\u01E7+\x03\x02\x02\x02\u01E8\u01E6\x03\x02" +
    "\x02\x02\u01E9\u01EB\x07\x1C\x02\x02\u01EA\u01EC\x07\v\x02\x02\u01EB\u01EA" +
    "\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01EE\x03\x02\x02\x02" +
    "\u01ED\u01EF\x07\n\x02\x02\u01EE\u01ED\x03\x02\x02\x02\u01EE\u01EF\x03" +
    "\x02\x02\x02\u01EF\u01F1\x03\x02\x02\x02\u01F0\u01F2\x07\v\x02\x02\u01F1" +
    "\u01F0\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F4\x03\x02" +
    "\x02\x02\u01F3\u01F5\x05.\x18\x02\u01F4\u01F3\x03\x02\x02\x02\u01F4\u01F5" +
    "\x03\x02\x02\x02\u01F5\u01F7\x03\x02\x02\x02\u01F6\u01F8\x07\v\x02\x02" +
    "\u01F7\u01F6\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01FA\x03" +
    "\x02\x02\x02\u01F9\u01FB\x07\n\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FA" +
    "\u01FB\x03\x02\x02\x02\u01FB\u01FD\x03\x02\x02\x02\u01FC\u01FE\x07\v\x02" +
    "\x02\u01FD\u01FC\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF" +
    "\x03\x02\x02\x02\u01FF\u0200\x07\x1D\x02\x02\u0200-\x03\x02\x02\x02\u0201" +
    "\u0203\x050\x19\x02\u0202\u0204\x07\v\x02\x02\u0203\u0202\x03\x02\x02" +
    "\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0212\x03\x02\x02\x02\u0205\u0207" +
    "\x07\x14\x02\x02\u0206\u0208\x07\v\x02\x02\u0207\u0206\x03\x02\x02\x02" +
    "\u0207\u0208\x03\x02\x02\x02\u0208\u020A\x03\x02\x02\x02\u0209\u020B\x07" +
    "\n\x02\x02\u020A\u0209\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B" +
    "\u020D\x03\x02\x02\x02\u020C\u020E\x07\v\x02\x02\u020D\u020C\x03\x02\x02" +
    "\x02\u020D\u020E\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F\u0211" +
    "\x050\x19\x02\u0210\u0205\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02" +
    "\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213/\x03\x02" +
    "\x02\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0217\x05\x16\f\x02\u0216\u0218" +
    "\x07\x16\x02\x02\u0217\u0216\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02" +
    "\u0218\u021A\x03\x02\x02\x02\u0219\u021B\x07\v\x02\x02\u021A\u0219\x03" +
    "\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C" +
    "\u021E\x07\x12\x02\x02\u021D\u021F\x07\v\x02\x02\u021E\u021D\x03\x02\x02" +
    "\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0221" +
    "\x05\x16\f\x02\u02211\x03\x02\x02\x02\u0222\u0223\x05d3\x02\u0223\u0224" +
    "\x07\x16\x02\x02\u02243\x03\x02\x02\x02\u0225\u0228\x05d3\x02\u0226\u0227" +
    "\x07\x13\x02\x02\u0227\u0229\x056\x1C\x02\u0228\u0226\x03\x02\x02\x02" +
    "\u0229\u022A\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B\x03" +
    "\x02\x02\x02\u022B\u0234\x03\x02\x02\x02\u022C\u022F\x052\x1A\x02\u022D" +
    "\u022E\x07\x13\x02\x02\u022E\u0230\x056\x1C\x02\u022F\u022D\x03\x02\x02" +
    "\x02\u0230\u0231\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232" +
    "\x03\x02\x02\x02\u0232\u0234\x03\x02\x02\x02\u0233\u0225\x03\x02\x02\x02" +
    "\u0233\u022C\x03\x02\x02\x02\u02345\x03\x02\x02\x02\u0235\u0238\x05d3" +
    "\x02\u0236\u0238\x052\x1A\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0236" +
    "\x03\x02\x02\x02\u02387\x03\x02\x02\x02\u0239\u023A\x05:\x1E\x02\u023A" +
    "9\x03\x02\x02\x02\u023B\u023C\b\x1E\x01\x02\u023C\u0243\x05<\x1F\x02\u023D" +
    "\u0243\x05> \x02\u023E\u0243\x05@!\x02\u023F\u0243\x05F$\x02\u0240\u0243" +
    "\x05H%\x02\u0241\u0243\x05J&\x02\u0242\u023B\x03\x02\x02\x02\u0242\u023D" +
    "\x03\x02\x02\x02\u0242\u023E\x03\x02\x02\x02\u0242\u023F\x03\x02\x02\x02" +
    "\u0242\u0240\x03\x02\x02\x02\u0242\u0241\x03\x02\x02\x02\u0243\u0258\x03" +
    "\x02\x02\x02\u0244\u0246\f\t\x02\x02\u0245\u0247\x07\v\x02\x02\u0246\u0245" +
    "\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02" +
    "\u0248\u024A\t\x05\x02\x02\u0249\u024B\x07\v\x02\x02\u024A\u0249\x03\x02" +
    "\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C" +
    "\u0257\x05:\x1E\n\u024D\u024F\f\b\x02\x02\u024E\u0250\x07\v\x02\x02\u024F" +
    "\u024E\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250\u0251\x03\x02" +
    "\x02\x02\u0251\u0253\t\x06\x02\x02\u0252\u0254\x07\v\x02\x02\u0253\u0252" +
    "\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02" +
    "\u0255\u0257\x05:\x1E\t\u0256\u0244\x03\x02\x02\x02\u0256\u024D\x03\x02" +
    "\x02\x02\u0257\u025A\x03\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0258" +
    "\u0259\x03\x02\x02\x02\u0259;\x03\x02\x02\x02\u025A\u0258\x03\x02\x02" +
    "\x02\u025B\u025C\t\x06\x02\x02\u025C\u025D\x05:\x1E\x02\u025D=\x03\x02" +
    "\x02\x02\u025E\u0260\x07 \x02\x02\u025F\u0261\x07\n\x02\x02\u0260\u025F" +
    "\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0263\x03\x02\x02\x02" +
    "\u0262\u0264\x07\v\x02\x02\u0263\u0262\x03\x02\x02\x02\u0263\u0264\x03" +
    "\x02\x02\x02\u0264\u0266\x03\x02\x02\x02\u0265\u0267\x07\n\x02\x02\u0266" +
    "\u0265\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0269\x03\x02" +
    "\x02\x02\u0268\u026A\x05:\x1E\x02\u0269\u0268\x03\x02\x02\x02\u0269\u026A" +
    "\x03\x02\x02\x02\u026A\u0278\x03\x02\x02\x02\u026B\u026D\x07\x14\x02\x02" +
    "\u026C\u026E\x07\n\x02\x02\u026D\u026C\x03\x02\x02\x02\u026D\u026E\x03" +
    "\x02\x02\x02\u026E\u0270\x03\x02\x02\x02\u026F\u0271\x07\v\x02\x02\u0270" +
    "\u026F\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0273\x03\x02" +
    "\x02\x02\u0272\u0274\x07\n\x02\x02\u0273\u0272\x03\x02\x02\x02\u0273\u0274" +
    "\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0277\x05:\x1E\x02" +
    "\u0276\u026B\x03\x02\x02\x02\u0277\u027A\x03\x02\x02\x02\u0278\u0276\x03" +
    "\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027C\x03\x02\x02\x02\u027A" +
    "\u0278\x03\x02\x02\x02\u027B\u027D\x07\n\x02\x02\u027C\u027B\x03\x02\x02" +
    "\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027F\x03\x02\x02\x02\u027E\u0280" +
    "\x07\v\x02\x02\u027F\u027E\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02" +
    "\u0280\u0282\x03\x02\x02\x02\u0281\u0283\x07\n\x02\x02\u0282\u0281\x03" +
    "\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284" +
    "\u0285\x07!\x02\x02\u0285?\x03\x02\x02\x02\u0286\u0288\x07\x1C\x02\x02" +
    "\u0287\u0289\x07\v\x02\x02\u0288\u0287\x03\x02\x02\x02\u0288\u0289\x03" +
    "\x02\x02\x02\u0289\u028B\x03\x02\x02\x02\u028A\u028C\x07\n\x02\x02\u028B" +
    "\u028A\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028E\x03\x02" +
    "\x02\x02\u028D\u028F\x07\v\x02\x02\u028E\u028D\x03\x02\x02\x02\u028E\u028F" +
    "\x03\x02\x02\x02\u028F\u0291\x03\x02\x02\x02\u0290\u0292\x05B\"\x02\u0291" +
    "\u0290\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0294\x03\x02" +
    "\x02\x02\u0293\u0295\x07\v\x02\x02\u0294\u0293\x03\x02\x02\x02\u0294\u0295" +
    "\x03\x02\x02\x02\u0295\u0297\x03\x02\x02\x02\u0296\u0298\x07\n\x02\x02" +
    "\u0297\u0296\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u029A\x03" +
    "\x02\x02\x02\u0299\u029B\x07\v\x02\x02\u029A\u0299\x03\x02\x02\x02\u029A" +
    "\u029B\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C\u029D\x07\x1D" +
    "\x02\x02\u029DA\x03\x02\x02\x02\u029E\u02AF\x05D#\x02\u029F\u02A1\x07" +
    "\v\x02\x02\u02A0\u029F\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1" +
    "\u02A2\x03\x02\x02\x02\u02A2\u02A4\x07\x14\x02\x02\u02A3\u02A5\x07\v\x02" +
    "\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5\u02A7" +
    "\x03\x02\x02\x02\u02A6\u02A8\x07\n\x02\x02\u02A7\u02A6\x03\x02\x02\x02" +
    "\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02AA\x03\x02\x02\x02\u02A9\u02AB\x07" +
    "\v\x02\x02\u02AA\u02A9\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB" +
    "\u02AC\x03\x02\x02\x02\u02AC\u02AE\x05D#\x02\u02AD\u02A0\x03\x02\x02\x02" +
    "\u02AE\u02B1\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02AF\u02B0\x03" +
    "\x02\x02\x02\u02B0C\x03\x02\x02\x02\u02B1\u02AF\x03\x02\x02\x02\u02B2" +
    "\u02B4\x05H%\x02\u02B3\u02B5\x07\v\x02\x02\u02B4\u02B3\x03\x02\x02\x02" +
    "\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B8\x07" +
    "\x12\x02\x02\u02B7\u02B9\x07\v\x02\x02\u02B8\u02B7\x03\x02\x02\x02\u02B8" +
    "\u02B9\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BB\x05@!\x02" +
    "\u02BB\u02C7\x03\x02\x02\x02\u02BC\u02BE\x05H%\x02\u02BD\u02BF\x07\v\x02" +
    "\x02\u02BE\u02BD\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C0" +
    "\x03\x02\x02\x02\u02C0\u02C2\x07\x12\x02\x02\u02C1\u02C3\x07\v\x02\x02" +
    "\u02C2\u02C1\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C4\x03" +
    "\x02\x02\x02\u02C4\u02C5\x05H%\x02\u02C5\u02C7\x03\x02\x02\x02\u02C6\u02B2" +
    "\x03\x02\x02\x02\u02C6\u02BC\x03\x02\x02\x02\u02C7E\x03\x02\x02\x02\u02C8" +
    "\u02CA\x07\x1E\x02\x02\u02C9\u02CB\x07\v\x02\x02\u02CA\u02C9\x03\x02\x02" +
    "\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02CD\x03\x02\x02\x02\u02CC\u02CE" +
    "\x05&\x14\x02\u02CD\u02CC\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02" +
    "\u02CE\u02D0\x03\x02\x02\x02\u02CF\u02D1\x07\v\x02\x02\u02D0\u02CF\x03" +
    "\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2" +
    "\u02D4\x07\x1F\x02\x02\u02D3\u02D5\x07\v\x02\x02\u02D4\u02D3\x03\x02\x02" +
    "\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6\u02D8" +
    "\x07\x19\x02\x02\u02D7\u02D9\x07\v\x02\x02\u02D8\u02D7\x03\x02\x02\x02" +
    "\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02E8\x05" +
    "\x16\f\x02\u02DB\u02DD\x05(\x15\x02\u02DC\u02DE\x07\v\x02\x02\u02DD\u02DC" +
    "\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02" +
    "\u02DF\u02E1\x07\x19\x02\x02\u02E0\u02E2\x07\v\x02\x02\u02E1\u02E0\x03" +
    "\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3" +
    "\u02E5\x05\x16\f\x02\u02E4\u02E6\x07\x16\x02\x02\u02E5\u02E4\x03\x02\x02" +
    "\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E8\x03\x02\x02\x02\u02E7\u02C8" +
    "\x03\x02\x02\x02\u02E7\u02DB\x03\x02\x02\x02\u02E8G\x03\x02\x02\x02\u02E9" +
    "\u02EA\t\x07\x02\x02\u02EAI\x03\x02\x02\x02\u02EB\u02ED\x07\x1E\x02\x02" +
    "\u02EC\u02EE\x07\v\x02\x02\u02ED\u02EC\x03\x02\x02\x02\u02ED\u02EE\x03" +
    "\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F1\x05:\x1E\x02\u02F0" +
    "\u02F2\x07\v\x02\x02\u02F1\u02F0\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02" +
    "\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3\u02F4\x07\x1F\x02\x02\u02F4K\x03" +
    "\x02\x02\x02\u02F5\u02F6\x05N(\x02\u02F6M\x03\x02\x02\x02\u02F7\u02FB" +
    "\x05P)\x02\u02F8\u02FA\x05T+\x02\u02F9\u02F8\x03\x02\x02\x02\u02FA\u02FD" +
    "\x03\x02\x02\x02\u02FB\u02F9\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02" +
    "\u02FC\u0306\x03\x02\x02\x02\u02FD\u02FB\x03\x02\x02\x02\u02FE\u0302\x05" +
    "X-\x02\u02FF\u0301\x05T+\x02\u0300\u02FF\x03\x02\x02\x02\u0301\u0304\x03" +
    "\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303" +
    "\u0306\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02\u0305\u02F7\x03\x02" +
    "\x02\x02\u0305\u02FE\x03\x02\x02\x02\u0306O\x03\x02\x02\x02\u0307\u0309" +
    "\x07\v\x02\x02\u0308\u0307\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02" +
    "\u0309\u030B\x03\x02\x02\x02\u030A\u030C\x05R*\x02\u030B\u030A\x03\x02" +
    "\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D\u030B\x03\x02\x02\x02\u030D" +
    "\u030E\x03\x02\x02\x02\u030E\u0314\x03\x02\x02\x02\u030F\u0313\x05R*\x02" +
    "\u0310\u0313\x07\v\x02\x02\u0311\u0313\x07\r\x02\x02\u0312\u030F\x03\x02" +
    "\x02\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0311\x03\x02\x02\x02\u0313" +
    "\u0316\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0314\u0315\x03\x02" +
    "\x02\x02\u0315Q\x03\x02\x02\x02\u0316\u0314\x03\x02\x02\x02\u0317\u0321" +
    "\x07\f\x02\x02\u0318\u0321\x07\t\x02\x02\u0319\u0321\x07\x11\x02\x02\u031A" +
    "\u0321\x07\x1C\x02\x02\u031B\u0321\x07\x1D\x02\x02\u031C\u0321\x07\x12" +
    "\x02\x02\u031D\u0321\x07\x0F\x02\x02\u031E\u0321\x07\x13\x02\x02\u031F" +
    "\u0321\x05H%\x02\u0320\u0317\x03\x02\x02\x02\u0320\u0318\x03\x02\x02\x02" +
    "\u0320\u0319\x03\x02\x02\x02\u0320\u031A\x03\x02\x02\x02\u0320\u031B\x03" +
    "\x02\x02\x02\u0320\u031C\x03\x02\x02\x02\u0320\u031D\x03\x02\x02\x02\u0320" +
    "\u031E\x03\x02\x02\x02\u0320\u031F\x03\x02\x02\x02\u0321S\x03\x02\x02" +
    "\x02\u0322\u0325\x05X-\x02\u0323\u0325\x05V,\x02\u0324\u0322\x03\x02\x02" +
    "\x02\u0324\u0323\x03\x02\x02\x02\u0325U\x03\x02\x02\x02\u0326\u032A\x05" +
    "R*\x02\u0327\u032A\x07\v\x02\x02\u0328\u032A\x07\r\x02\x02\u0329\u0326" +
    "\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u0329\u0328\x03\x02\x02\x02" +
    "\u032A\u032B\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032B\u032C\x03" +
    "\x02\x02\x02\u032CW\x03\x02\x02\x02\u032D\u032E\x07\x1B\x02\x02\u032E" +
    "\u032F\x05Z.\x02\u032F\u0331\x07\v\x02\x02\u0330\u0332\x05\\/\x02\u0331" +
    "\u0330\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332\u0333\x03\x02" +
    "\x02\x02\u0333\u0334\x07\x1D\x02\x02\u0334Y\x03\x02\x02\x02\u0335\u0336" +
    "\x05d3\x02\u0336[\x03\x02\x02\x02\u0337\u0339\x05`1\x02\u0338\u0337\x03" +
    "\x02\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A\u0338\x03\x02\x02\x02\u033A" +
    "\u033B\x03\x02\x02\x02\u033B]\x03\x02\x02\x02\u033C\u0340\x07\x1C\x02" +
    "\x02\u033D\u033F\x05`1\x02\u033E\u033D\x03\x02\x02\x02\u033F\u0342\x03" +
    "\x02\x02\x02\u0340\u033E\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341" +
    "\u0343\x03\x02\x02\x02\u0342\u0340\x03\x02\x02\x02\u0343\u0344\x07\x1D" +
    "\x02\x02\u0344_\x03\x02\x02\x02\u0345\u034F\x05^0\x02\u0346\u034B\x05" +
    "b2\x02\u0347\u0348\x07\n\x02\x02\u0348\u034A\x05b2\x02\u0349\u0347\x03" +
    "\x02\x02\x02\u034A\u034D\x03\x02\x02\x02\u034B\u0349\x03\x02\x02\x02\u034B" +
    "\u034C\x03\x02\x02\x02\u034C\u034F\x03\x02\x02\x02\u034D\u034B\x03\x02" +
    "\x02\x02\u034E\u0345\x03\x02\x02\x02\u034E\u0346\x03\x02\x02\x02\u034F" +
    "a\x03\x02\x02\x02\u0350\u0351\t\b\x02\x02\u0351c\x03\x02\x02\x02\u0352" +
    "\u0353\x07\t\x02\x02\u0353e\x03\x02\x02\x02\x99imr~\x90\x94\xA6\xB2\xB6" +
    "\xBE\xC2\xC6\xCA\xD2\xD6\xE2\xE6\xEA\xEE\xF8\xFC\u0102\u0106\u010E\u0116" +
    "\u0120\u0127\u0129\u012D\u0138\u013C\u0140\u0145\u014C\u0150\u0154\u015A" +
    "\u015E\u0163\u0167\u016B\u016F\u0173\u0179\u017C\u017F\u0183\u0187\u018C" +
    "\u0190\u0194\u0199\u019E\u01A3\u01A7\u01AA\u01AF\u01B2\u01B5\u01B8\u01BC" +
    "\u01BF\u01C2\u01C7\u01CB\u01CE\u01D1\u01DC\u01E1\u01E6\u01EB\u01EE\u01F1" +
    "\u01F4\u01F7\u01FA\u01FD\u0203\u0207\u020A\u020D\u0212\u0217\u021A\u021E" +
    "\u022A\u0231\u0233\u0237\u0242\u0246\u024A\u024F\u0253\u0256\u0258\u0260" +
    "\u0263\u0266\u0269\u026D\u0270\u0273\u0278\u027C\u027F\u0282\u0288\u028B" +
    "\u028E\u0291\u0294\u0297\u029A\u02A0\u02A4\u02A7\u02AA\u02AF\u02B4\u02B8" +
    "\u02BE\u02C2\u02C6\u02CA\u02CD\u02D0\u02D4\u02D8\u02DD\u02E1\u02E5\u02E7" +
    "\u02ED\u02F1\u02FB\u0302\u0305\u0308\u030D\u0312\u0314\u0320\u0324\u0329" +
    "\u032B\u0331\u033A\u0340\u034B\u034E";
XDocParser._serializedATN = Utils.join([
    XDocParser._serializedATNSegment0,
    XDocParser._serializedATNSegment1
], "");
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], XDocParser.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], XDocParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], XDocParser.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], XDocParser.prototype, "serializedATN", null);
exports.XDocParser = XDocParser;
class DocumentationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() { return this.getToken(XDocParser.EOF, 0); }
    body() {
        return this.tryGetRuleContext(0, BodyContext);
    }
    NEWLINE() { return this.tryGetToken(XDocParser.NEWLINE, 0); }
    get ruleIndex() { return XDocParser.RULE_documentation; }
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
    get ruleIndex() { return XDocParser.RULE_body; }
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
    SPACE() { return this.tryGetToken(XDocParser.SPACE, 0); }
    NEWLINE() { return this.tryGetToken(XDocParser.NEWLINE, 0); }
    get ruleIndex() { return XDocParser.RULE_whitespace; }
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
            return this.getTokens(XDocParser.NEWLINE);
        }
        else {
            return this.getToken(XDocParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_annotations; }
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
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    MINUS() { return this.tryGetToken(XDocParser.MINUS, 0); }
    description() {
        return this.tryGetRuleContext(0, DescriptionContext);
    }
    tagID() {
        return this.tryGetRuleContext(0, TagIDContext);
    }
    EQUAL() { return this.tryGetToken(XDocParser.EQUAL, 0); }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    COLON() { return this.tryGetToken(XDocParser.COLON, 0); }
    type() {
        return this.tryGetRuleContext(0, TypeContext);
    }
    get ruleIndex() { return XDocParser.RULE_tag; }
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
    AT() { return this.getToken(XDocParser.AT, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return XDocParser.RULE_tagName; }
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
class TagIDContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    propertyTagID() {
        return this.tryGetRuleContext(0, PropertyTagIDContext);
    }
    optionalTagID() {
        return this.tryGetRuleContext(0, OptionalTagIDContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return XDocParser.RULE_tagID; }
    enterRule(listener) {
        if (listener.enterTagID)
            listener.enterTagID(this);
    }
    exitRule(listener) {
        if (listener.exitTagID)
            listener.exitTagID(this);
    }
    accept(visitor) {
        if (visitor.visitTagID)
            return visitor.visitTagID(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TagIDContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TagIDContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TagIDContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TagIDContext.prototype, "accept", null);
exports.TagIDContext = TagIDContext;
class OptionalTagIDContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    QUESTION() { return this.getToken(XDocParser.QUESTION, 0); }
    get ruleIndex() { return XDocParser.RULE_optionalTagID; }
    enterRule(listener) {
        if (listener.enterOptionalTagID)
            listener.enterOptionalTagID(this);
    }
    exitRule(listener) {
        if (listener.exitOptionalTagID)
            listener.exitOptionalTagID(this);
    }
    accept(visitor) {
        if (visitor.visitOptionalTagID)
            return visitor.visitOptionalTagID(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OptionalTagIDContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OptionalTagIDContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OptionalTagIDContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OptionalTagIDContext.prototype, "accept", null);
exports.OptionalTagIDContext = OptionalTagIDContext;
class PropertyTagIDContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    optionalTagID() {
        return this.tryGetRuleContext(0, OptionalTagIDContext);
    }
    PERIOD(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.PERIOD);
        }
        else {
            return this.getToken(XDocParser.PERIOD, i);
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
    get ruleIndex() { return XDocParser.RULE_propertyTagID; }
    enterRule(listener) {
        if (listener.enterPropertyTagID)
            listener.enterPropertyTagID(this);
    }
    exitRule(listener) {
        if (listener.exitPropertyTagID)
            listener.exitPropertyTagID(this);
    }
    accept(visitor) {
        if (visitor.visitPropertyTagID)
            return visitor.visitPropertyTagID(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PropertyTagIDContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PropertyTagIDContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PropertyTagIDContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PropertyTagIDContext.prototype, "accept", null);
exports.PropertyTagIDContext = PropertyTagIDContext;
class OptionalTagOrIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    optionalTagID() {
        return this.tryGetRuleContext(0, OptionalTagIDContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return XDocParser.RULE_optionalTagOrIdentifier; }
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
    PIPE() { return this.tryGetToken(XDocParser.PIPE, 0); }
    AMP() { return this.tryGetToken(XDocParser.AMP, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
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
    propertyType() {
        return this.tryGetRuleContext(0, PropertyTypeContext);
    }
    get ruleIndex() { return XDocParser.RULE_type; }
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
class UnaryTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    primaryType() {
        return this.getRuleContext(0, PrimaryTypeContext);
    }
    AMP() { return this.tryGetToken(XDocParser.AMP, 0); }
    STAR() { return this.tryGetToken(XDocParser.STAR, 0); }
    get ruleIndex() { return XDocParser.RULE_unaryType; }
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
class TupleTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LESSTHAN() { return this.getToken(XDocParser.LESSTHAN, 0); }
    tupleTypeList() {
        return this.getRuleContext(0, TupleTypeListContext);
    }
    GREATERTHAN() { return this.getToken(XDocParser.GREATERTHAN, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_tupleType; }
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
class TupleTypeListContext extends ParserRuleContext_1.ParserRuleContext {
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
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.COMMA);
        }
        else {
            return this.getToken(XDocParser.COMMA, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_tupleTypeList; }
    enterRule(listener) {
        if (listener.enterTupleTypeList)
            listener.enterTupleTypeList(this);
    }
    exitRule(listener) {
        if (listener.exitTupleTypeList)
            listener.exitTupleTypeList(this);
    }
    accept(visitor) {
        if (visitor.visitTupleTypeList)
            return visitor.visitTupleTypeList(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TupleTypeListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TupleTypeListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TupleTypeListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TupleTypeListContext.prototype, "accept", null);
exports.TupleTypeListContext = TupleTypeListContext;
class PrimaryTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    optionalType() {
        return this.tryGetRuleContext(0, OptionalTypeContext);
    }
    identifierOrKeyword() {
        return this.tryGetRuleContext(0, IdentifierOrKeywordContext);
    }
    get ruleIndex() { return XDocParser.RULE_primaryType; }
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
    NullLiteral() { return this.tryGetToken(XDocParser.NullLiteral, 0); }
    get ruleIndex() { return XDocParser.RULE_identifierOrKeyword; }
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
class ParenthesizedTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PAREN_OPEN() { return this.getToken(XDocParser.PAREN_OPEN, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    PAREN_CLOSE() { return this.getToken(XDocParser.PAREN_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_parenthesizedType; }
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
class LambdaTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PAREN_OPEN() { return this.tryGetToken(XDocParser.PAREN_OPEN, 0); }
    PAREN_CLOSE() { return this.tryGetToken(XDocParser.PAREN_CLOSE, 0); }
    ARROW() { return this.getToken(XDocParser.ARROW, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    formalParameterSequence() {
        return this.tryGetRuleContext(0, FormalParameterSequenceContext);
    }
    parameter() {
        return this.tryGetRuleContext(0, ParameterContext);
    }
    get ruleIndex() { return XDocParser.RULE_lambdaType; }
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
            return this.getTokens(XDocParser.COMMA);
        }
        else {
            return this.getToken(XDocParser.COMMA, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_formalParameterSequence; }
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
    COLON() { return this.tryGetToken(XDocParser.COLON, 0); }
    type() {
        return this.tryGetRuleContext(0, TypeContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_parameter; }
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
class ArrayTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BRACKET_OPEN() { return this.getToken(XDocParser.BRACKET_OPEN, 0); }
    BRACKET_CLOSE() { return this.getToken(XDocParser.BRACKET_CLOSE, 0); }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.NEWLINE);
        }
        else {
            return this.getToken(XDocParser.NEWLINE, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
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
            return this.getTokens(XDocParser.COMMA);
        }
        else {
            return this.getToken(XDocParser.COMMA, i);
        }
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    objectType() {
        return this.tryGetRuleContext(0, ObjectTypeContext);
    }
    arrayType() {
        return this.tryGetRuleContext(0, ArrayTypeContext);
    }
    get ruleIndex() { return XDocParser.RULE_arrayType; }
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
class ObjectTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BRACE_OPEN() { return this.getToken(XDocParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.getToken(XDocParser.BRACE_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.NEWLINE);
        }
        else {
            return this.getToken(XDocParser.NEWLINE, i);
        }
    }
    objectPairTypeList() {
        return this.tryGetRuleContext(0, ObjectPairTypeListContext);
    }
    get ruleIndex() { return XDocParser.RULE_objectType; }
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
class ObjectPairTypeListContext extends ParserRuleContext_1.ParserRuleContext {
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
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.COMMA);
        }
        else {
            return this.getToken(XDocParser.COMMA, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.NEWLINE);
        }
        else {
            return this.getToken(XDocParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_objectPairTypeList; }
    enterRule(listener) {
        if (listener.enterObjectPairTypeList)
            listener.enterObjectPairTypeList(this);
    }
    exitRule(listener) {
        if (listener.exitObjectPairTypeList)
            listener.exitObjectPairTypeList(this);
    }
    accept(visitor) {
        if (visitor.visitObjectPairTypeList)
            return visitor.visitObjectPairTypeList(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectPairTypeListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectPairTypeListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairTypeListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairTypeListContext.prototype, "accept", null);
exports.ObjectPairTypeListContext = ObjectPairTypeListContext;
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
    COLON() { return this.getToken(XDocParser.COLON, 0); }
    QUESTION() { return this.tryGetToken(XDocParser.QUESTION, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_objectPairType; }
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
class OptionalTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    QUESTION() { return this.getToken(XDocParser.QUESTION, 0); }
    get ruleIndex() { return XDocParser.RULE_optionalType; }
    enterRule(listener) {
        if (listener.enterOptionalType)
            listener.enterOptionalType(this);
    }
    exitRule(listener) {
        if (listener.exitOptionalType)
            listener.exitOptionalType(this);
    }
    accept(visitor) {
        if (visitor.visitOptionalType)
            return visitor.visitOptionalType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OptionalTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OptionalTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OptionalTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OptionalTypeContext.prototype, "accept", null);
exports.OptionalTypeContext = OptionalTypeContext;
class PropertyTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    PERIOD(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.PERIOD);
        }
        else {
            return this.getToken(XDocParser.PERIOD, i);
        }
    }
    optionalTypeOrIdentifer(i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionalTypeOrIdentiferContext);
        }
        else {
            return this.getRuleContext(i, OptionalTypeOrIdentiferContext);
        }
    }
    optionalType() {
        return this.tryGetRuleContext(0, OptionalTypeContext);
    }
    get ruleIndex() { return XDocParser.RULE_propertyType; }
    enterRule(listener) {
        if (listener.enterPropertyType)
            listener.enterPropertyType(this);
    }
    exitRule(listener) {
        if (listener.exitPropertyType)
            listener.exitPropertyType(this);
    }
    accept(visitor) {
        if (visitor.visitPropertyType)
            return visitor.visitPropertyType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PropertyTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PropertyTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PropertyTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PropertyTypeContext.prototype, "accept", null);
exports.PropertyTypeContext = PropertyTypeContext;
class OptionalTypeOrIdentiferContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    optionalType() {
        return this.tryGetRuleContext(0, OptionalTypeContext);
    }
    get ruleIndex() { return XDocParser.RULE_optionalTypeOrIdentifer; }
    enterRule(listener) {
        if (listener.enterOptionalTypeOrIdentifer)
            listener.enterOptionalTypeOrIdentifer(this);
    }
    exitRule(listener) {
        if (listener.exitOptionalTypeOrIdentifer)
            listener.exitOptionalTypeOrIdentifer(this);
    }
    accept(visitor) {
        if (visitor.visitOptionalTypeOrIdentifer)
            return visitor.visitOptionalTypeOrIdentifer(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OptionalTypeOrIdentiferContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OptionalTypeOrIdentiferContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OptionalTypeOrIdentiferContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OptionalTypeOrIdentiferContext.prototype, "accept", null);
exports.OptionalTypeOrIdentiferContext = OptionalTypeOrIdentiferContext;
class ValueContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() { return XDocParser.RULE_value; }
    enterRule(listener) {
        if (listener.enterValue)
            listener.enterValue(this);
    }
    exitRule(listener) {
        if (listener.exitValue)
            listener.exitValue(this);
    }
    accept(visitor) {
        if (visitor.visitValue)
            return visitor.visitValue(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ValueContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ValueContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ValueContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ValueContext.prototype, "accept", null);
exports.ValueContext = ValueContext;
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
    STAR() { return this.tryGetToken(XDocParser.STAR, 0); }
    FORWARD_SLASH() { return this.tryGetToken(XDocParser.FORWARD_SLASH, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    PLUS() { return this.tryGetToken(XDocParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(XDocParser.MINUS, 0); }
    arrayExpression() {
        return this.tryGetRuleContext(0, ArrayExpressionContext);
    }
    objectExpression() {
        return this.tryGetRuleContext(0, ObjectExpressionContext);
    }
    lambdaExpression() {
        return this.tryGetRuleContext(0, LambdaExpressionContext);
    }
    literal() {
        return this.tryGetRuleContext(0, LiteralContext);
    }
    parenthesizedExpression() {
        return this.tryGetRuleContext(0, ParenthesizedExpressionContext);
    }
    get ruleIndex() { return XDocParser.RULE_expression; }
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
    PLUS() { return this.tryGetToken(XDocParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(XDocParser.MINUS, 0); }
    get ruleIndex() { return XDocParser.RULE_unaryExpression; }
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
    BRACKET_OPEN() { return this.getToken(XDocParser.BRACKET_OPEN, 0); }
    BRACKET_CLOSE() { return this.getToken(XDocParser.BRACKET_CLOSE, 0); }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.NEWLINE);
        }
        else {
            return this.getToken(XDocParser.NEWLINE, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
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
            return this.getTokens(XDocParser.COMMA);
        }
        else {
            return this.getToken(XDocParser.COMMA, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_arrayExpression; }
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
    BRACE_OPEN() { return this.getToken(XDocParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.getToken(XDocParser.BRACE_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.NEWLINE);
        }
        else {
            return this.getToken(XDocParser.NEWLINE, i);
        }
    }
    objectPairExpressionList() {
        return this.tryGetRuleContext(0, ObjectPairExpressionListContext);
    }
    get ruleIndex() { return XDocParser.RULE_objectExpression; }
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
class ObjectPairExpressionListContext extends ParserRuleContext_1.ParserRuleContext {
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
            return this.getTokens(XDocParser.COMMA);
        }
        else {
            return this.getToken(XDocParser.COMMA, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.NEWLINE);
        }
        else {
            return this.getToken(XDocParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_objectPairExpressionList; }
    enterRule(listener) {
        if (listener.enterObjectPairExpressionList)
            listener.enterObjectPairExpressionList(this);
    }
    exitRule(listener) {
        if (listener.exitObjectPairExpressionList)
            listener.exitObjectPairExpressionList(this);
    }
    accept(visitor) {
        if (visitor.visitObjectPairExpressionList)
            return visitor.visitObjectPairExpressionList(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectPairExpressionListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectPairExpressionListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairExpressionListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairExpressionListContext.prototype, "accept", null);
exports.ObjectPairExpressionListContext = ObjectPairExpressionListContext;
class ObjectPairExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    literal(i) {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }
        else {
            return this.getRuleContext(i, LiteralContext);
        }
    }
    COLON() { return this.getToken(XDocParser.COLON, 0); }
    objectExpression() {
        return this.tryGetRuleContext(0, ObjectExpressionContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_objectPairExpression; }
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
    PAREN_OPEN() { return this.tryGetToken(XDocParser.PAREN_OPEN, 0); }
    PAREN_CLOSE() { return this.tryGetToken(XDocParser.PAREN_CLOSE, 0); }
    ARROW() { return this.getToken(XDocParser.ARROW, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    formalParameterSequence() {
        return this.tryGetRuleContext(0, FormalParameterSequenceContext);
    }
    parameter() {
        return this.tryGetRuleContext(0, ParameterContext);
    }
    QUESTION() { return this.tryGetToken(XDocParser.QUESTION, 0); }
    get ruleIndex() { return XDocParser.RULE_lambdaExpression; }
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
class LiteralContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IntegerLiteral() { return this.tryGetToken(XDocParser.IntegerLiteral, 0); }
    FloatingPointLiteral() { return this.tryGetToken(XDocParser.FloatingPointLiteral, 0); }
    BooleanLiteral() { return this.tryGetToken(XDocParser.BooleanLiteral, 0); }
    CharacterLiteral() { return this.tryGetToken(XDocParser.CharacterLiteral, 0); }
    StringLiteral() { return this.tryGetToken(XDocParser.StringLiteral, 0); }
    NullLiteral() { return this.tryGetToken(XDocParser.NullLiteral, 0); }
    get ruleIndex() { return XDocParser.RULE_literal; }
    enterRule(listener) {
        if (listener.enterLiteral)
            listener.enterLiteral(this);
    }
    exitRule(listener) {
        if (listener.exitLiteral)
            listener.exitLiteral(this);
    }
    accept(visitor) {
        if (visitor.visitLiteral)
            return visitor.visitLiteral(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LiteralContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LiteralContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LiteralContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LiteralContext.prototype, "accept", null);
exports.LiteralContext = LiteralContext;
class ParenthesizedExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PAREN_OPEN() { return this.getToken(XDocParser.PAREN_OPEN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    PAREN_CLOSE() { return this.getToken(XDocParser.PAREN_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_parenthesizedExpression; }
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
    get ruleIndex() { return XDocParser.RULE_description; }
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
    get ruleIndex() { return XDocParser.RULE_descriptionLine; }
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
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
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
            return this.getTokens(XDocParser.AT);
        }
        else {
            return this.getToken(XDocParser.AT, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_descriptionLineStart; }
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
    TEXT_CONTENT() { return this.tryGetToken(XDocParser.TEXT_CONTENT, 0); }
    ID() { return this.tryGetToken(XDocParser.ID, 0); }
    FORWARD_SLASH() { return this.tryGetToken(XDocParser.FORWARD_SLASH, 0); }
    BRACE_OPEN() { return this.tryGetToken(XDocParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.tryGetToken(XDocParser.BRACE_CLOSE, 0); }
    COLON() { return this.tryGetToken(XDocParser.COLON, 0); }
    MINUS() { return this.tryGetToken(XDocParser.MINUS, 0); }
    PERIOD() { return this.tryGetToken(XDocParser.PERIOD, 0); }
    literal() {
        return this.tryGetRuleContext(0, LiteralContext);
    }
    get ruleIndex() { return XDocParser.RULE_descriptionText; }
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
    get ruleIndex() { return XDocParser.RULE_descriptionLineElement; }
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
            return this.getTokens(XDocParser.SPACE);
        }
        else {
            return this.getToken(XDocParser.SPACE, i);
        }
    }
    AT(i) {
        if (i === undefined) {
            return this.getTokens(XDocParser.AT);
        }
        else {
            return this.getToken(XDocParser.AT, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_descriptionLineText; }
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
    INLINE_TAG_START() { return this.getToken(XDocParser.INLINE_TAG_START, 0); }
    inlineTagName() {
        return this.getRuleContext(0, InlineTagNameContext);
    }
    SPACE() { return this.getToken(XDocParser.SPACE, 0); }
    BRACE_CLOSE() { return this.getToken(XDocParser.BRACE_CLOSE, 0); }
    inlineTagBody() {
        return this.tryGetRuleContext(0, InlineTagBodyContext);
    }
    get ruleIndex() { return XDocParser.RULE_inlineTag; }
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
    get ruleIndex() { return XDocParser.RULE_inlineTagName; }
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
    get ruleIndex() { return XDocParser.RULE_inlineTagBody; }
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
    BRACE_OPEN() { return this.getToken(XDocParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.getToken(XDocParser.BRACE_CLOSE, 0); }
    braceBody(i) {
        if (i === undefined) {
            return this.getRuleContexts(BraceBodyContext);
        }
        else {
            return this.getRuleContext(i, BraceBodyContext);
        }
    }
    get ruleIndex() { return XDocParser.RULE_braceExpression; }
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
            return this.getTokens(XDocParser.NEWLINE);
        }
        else {
            return this.getToken(XDocParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return XDocParser.RULE_braceBody; }
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
    TEXT_CONTENT() { return this.tryGetToken(XDocParser.TEXT_CONTENT, 0); }
    ID() { return this.tryGetToken(XDocParser.ID, 0); }
    SPACE() { return this.tryGetToken(XDocParser.SPACE, 0); }
    FORWARD_SLASH() { return this.tryGetToken(XDocParser.FORWARD_SLASH, 0); }
    NEWLINE() { return this.tryGetToken(XDocParser.NEWLINE, 0); }
    PERIOD() { return this.tryGetToken(XDocParser.PERIOD, 0); }
    get ruleIndex() { return XDocParser.RULE_braceText; }
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
class IdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ID() { return this.getToken(XDocParser.ID, 0); }
    get ruleIndex() { return XDocParser.RULE_identifier; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWERvY1BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9YRG9jUGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxREFBcUQ7Ozs7Ozs7O0FBR3JELDBDQUF1QztBQUN2QyxrRUFBK0Q7QUFDL0QsZ0ZBQTZFO0FBQzdFLG9EQUE4QztBQUM5Qyx3RUFBcUU7QUFDckUsb0RBQStDO0FBQy9DLDRDQUF5QztBQUN6QyxrRUFBK0Q7QUFDL0Qsd0VBQXFFO0FBR3JFLHdFQUFxRTtBQUlyRSwwQ0FBdUM7QUFHdkMsNERBQXlEO0FBRXpELDZDQUE2QztBQU03QyxnQkFBd0IsU0FBUSxlQUFNO0lBaUlyQyxZQUFZLEtBQWtCO1FBQzdCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFoQkQsSUFBVyxVQUFVO1FBQ3BCLE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQztJQUM5QixDQUFDO0lBR0QsSUFBVyxlQUFlLEtBQWEsT0FBTyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBR2hFLElBQVcsU0FBUyxLQUFlLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFHakUsSUFBVyxhQUFhLEtBQWEsT0FBTyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQU9qRSxhQUFhO1FBQ25CLElBQUksU0FBUyxHQUF5QixJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM1RCxJQUFJLEdBQVcsQ0FBQztRQUNoQixJQUFJO1lBQ0gsSUFBSSxDQUFDLEtBQUssR0FB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QUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO3dCQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM1QixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLElBQUksR0FBRyxLQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUU7NEJBQzNCO2dDQUNBLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dDQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs2QkFDNUI7eUJBQ0Q7d0JBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO3dCQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxD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QUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0NBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dDQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQ0FDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQzVCLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDeEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQ0FDcFY7d0NBQ0EsSUFB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RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLDRFQUE0RTtJQUM1RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLDRFQUE0RTtJQUM1RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDJFQUEyRTtJQUMzRSx5RUFBeUU7SUFDekUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsUUFBUSxDQUFDO0FBQ2MsaUNBQXNCLEdBQzdDLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDJFQUEyRTtJQUMzRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwyRUFBMkU7SUFDM0Usd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwyRUFBMkU7SUFDM0UsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx5RUFBeUU7SUFDekUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUseUVBQXlFO0lBQ3pFLDJFQUEyRTtJQUMzRSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwyRUFBMkU7SUFDM0Usd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMkVBQTJFO0lBQzNFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDJFQUEyRTtJQUMzRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMkVBQTJFO0lBQzNFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDJFQUEyRTtJQUMzRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDJFQUEyRTtJQUMzRSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUseUVBQXlFO0lBQ3pFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUseUVBQXlFO0lBQ3pFLDRFQUE0RTtJQUM1RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3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QUFkVTtJQUFULHFCQUFRO2lEQUFxRTtBQUU5RTtJQURDLHFCQUFRO2lEQUdSO0FBRUQ7SUFEQyxxQkFBUTtnREFHUjtBQUVEO0lBREMscUJBQVE7OENBSVI7QUF6QkYsNENBMEJDO0FBR0QsdUJBQStCLFNBQVEscUNBQWlCO0lBR3ZELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFMTSxFQUFFLEtBQW1CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU0zRCxJQUFXLFNBQVMsS0FBYSxPQUFPLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBRXhFLFNBQVMsQ0FBQyxRQUE0QjtRQUM1QyxJQUFJLFFBQVEsQ0FBQyxlQUFlO1lBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQTRCO1FBQzNDLElBQUksUUFBUSxDQUFDLGNBQWM7WUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxNQUFNLENBQVMsT0FBa0M7UUFDdkQsSUFBSSxPQUFPLENBQUMsZUFBZTtZQUFFLE9BQU8sT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDN0QsT0FBTyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7a0RBQXNFO0FBRS9FO0lBREMscUJBQVE7a0RBR1I7QUFFRDtJQURDLHFCQUFRO2lEQUdSO0FBRUQ7SUFEQyxxQkFBUTsrQ0FJUjtBQXBCRiw4Q0FxQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSBYRG9jUGFyc2VyLmc0IGJ5IEFOVExSIDQuNi1TTkFQU0hPVFxuXG5cbmltcG9ydCB7IEFUTiB9IGZyb20gJ2FudGxyNHRzL2F0bi9BVE4nO1xuaW1wb3J0IHsgQVRORGVzZXJpYWxpemVyIH0gZnJvbSAnYW50bHI0dHMvYXRuL0FUTkRlc2VyaWFsaXplcic7XG5pbXBvcnQgeyBGYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24gfSBmcm9tICdhbnRscjR0cy9GYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24nO1xuaW1wb3J0IHsgTm90TnVsbCB9IGZyb20gJ2FudGxyNHRzL0RlY29yYXRvcnMnO1xuaW1wb3J0IHsgTm9WaWFibGVBbHRFeGNlcHRpb24gfSBmcm9tICdhbnRscjR0cy9Ob1ZpYWJsZUFsdEV4Y2VwdGlvbic7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJ2FudGxyNHRzL0RlY29yYXRvcnMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnYW50bHI0dHMvUGFyc2VyJztcbmltcG9ydCB7IFBhcnNlclJ1bGVDb250ZXh0IH0gZnJvbSAnYW50bHI0dHMvUGFyc2VyUnVsZUNvbnRleHQnO1xuaW1wb3J0IHsgUGFyc2VyQVROU2ltdWxhdG9yIH0gZnJvbSAnYW50bHI0dHMvYXRuL1BhcnNlckFUTlNpbXVsYXRvcic7XG5pbXBvcnQgeyBQYXJzZVRyZWVMaXN0ZW5lciB9IGZyb20gJ2FudGxyNHRzL3RyZWUvUGFyc2VUcmVlTGlzdGVuZXInO1xuaW1wb3J0IHsgUGFyc2VUcmVlVmlzaXRvciB9IGZyb20gJ2FudGxyNHRzL3RyZWUvUGFyc2VUcmVlVmlzaXRvcic7XG5pbXBvcnQgeyBSZWNvZ25pdGlvbkV4Y2VwdGlvbiB9IGZyb20gJ2FudGxyNHRzL1JlY29nbml0aW9uRXhjZXB0aW9uJztcbmltcG9ydCB7IFJ1bGVDb250ZXh0IH0gZnJvbSAnYW50bHI0dHMvUnVsZUNvbnRleHQnO1xuaW1wb3J0IHsgUnVsZVZlcnNpb24gfSBmcm9tICdhbnRscjR0cy9SdWxlVmVyc2lvbic7XG5pbXBvcnQgeyBUZXJtaW5hbE5vZGUgfSBmcm9tICdhbnRscjR0cy90cmVlL1Rlcm1pbmFsTm9kZSc7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gJ2FudGxyNHRzL1Rva2VuJztcbmltcG9ydCB7IFRva2VuU3RyZWFtIH0gZnJvbSAnYW50bHI0dHMvVG9rZW5TdHJlYW0nO1xuaW1wb3J0IHsgVm9jYWJ1bGFyeSB9IGZyb20gJ2FudGxyNHRzL1ZvY2FidWxhcnknO1xuaW1wb3J0IHsgVm9jYWJ1bGFyeUltcGwgfSBmcm9tICdhbnRscjR0cy9Wb2NhYnVsYXJ5SW1wbCc7XG5cbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ2FudGxyNHRzL21pc2MvVXRpbHMnO1xuXG5pbXBvcnQgeyBYRG9jUGFyc2VyTGlzdGVuZXIgfSBmcm9tICcuL1hEb2NQYXJzZXJMaXN0ZW5lcic7XG5pbXBvcnQgeyBYRG9jUGFyc2VyVmlzaXRvciB9IGZyb20gJy4vWERvY1BhcnNlclZpc2l0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBYRG9jUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBJbnRlZ2VyTGl0ZXJhbD0xO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZsb2F0aW5nUG9pbnRMaXRlcmFsPTI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQm9vbGVhbkxpdGVyYWw9Mztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBDaGFyYWN0ZXJMaXRlcmFsPTQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU3RyaW5nTGl0ZXJhbD01O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE51bGxMaXRlcmFsPTY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQ9Nztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBORVdMSU5FPTg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1BBQ0U9OTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBURVhUX0NPTlRFTlQ9MTA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVQ9MTE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUExVUz0xMjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBNSU5VUz0xMztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBTVEFSPTE0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZPUldBUkRfU0xBU0g9MTU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09MT049MTY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUEVSSU9EPTE3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTU1BPTE4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVRVUFMPTE5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFFVRVNUSU9OPTIwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFNUD0yMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBQSVBFPTIyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XPTIzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVYQ0xBTUFUSU9OPTI0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElOTElORV9UQUdfU1RBUlQ9MjU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQlJBQ0VfT1BFTj0yNjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBCUkFDRV9DTE9TRT0yNztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBQQVJFTl9PUEVOPTI4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBBUkVOX0NMT1NFPTI5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJSQUNLRVRfT1BFTj0zMDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBCUkFDS0VUX0NMT1NFPTMxO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExFU1NUSEFOPTMyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdSRUFURVJUSEFOPTMzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZG9jdW1lbnRhdGlvbiA9IDA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9ib2R5ID0gMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3doaXRlc3BhY2UgPSAyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfYW5ub3RhdGlvbnMgPSAzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdGFnID0gNDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3RhZ05hbWUgPSA1O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdGFnSUQgPSA2O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb3B0aW9uYWxUYWdJRCA9IDc7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wcm9wZXJ0eVRhZ0lEID0gODtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29wdGlvbmFsVGFnT3JJZGVudGlmaWVyID0gOTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3R5cGUgPSAxMDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3VuYXJ5VHlwZSA9IDExO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdHVwbGVUeXBlID0gMTI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV90dXBsZVR5cGVMaXN0ID0gMTM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wcmltYXJ5VHlwZSA9IDE0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfaWRlbnRpZmllck9yS2V5d29yZCA9IDE1O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfcGFyZW50aGVzaXplZFR5cGUgPSAxNjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2xhbWJkYVR5cGUgPSAxNztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2Zvcm1hbFBhcmFtZXRlclNlcXVlbmNlID0gMTg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wYXJhbWV0ZXIgPSAxOTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2FycmF5VHlwZSA9IDIwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0VHlwZSA9IDIxO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0UGFpclR5cGVMaXN0ID0gMjI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9vYmplY3RQYWlyVHlwZSA9IDIzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb3B0aW9uYWxUeXBlID0gMjQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wcm9wZXJ0eVR5cGUgPSAyNTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29wdGlvbmFsVHlwZU9ySWRlbnRpZmVyID0gMjY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV92YWx1ZSA9IDI3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZXhwcmVzc2lvbiA9IDI4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdW5hcnlFeHByZXNzaW9uID0gMjk7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9hcnJheUV4cHJlc3Npb24gPSAzMDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29iamVjdEV4cHJlc3Npb24gPSAzMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29iamVjdFBhaXJFeHByZXNzaW9uTGlzdCA9IDMyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0UGFpckV4cHJlc3Npb24gPSAzMztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2xhbWJkYUV4cHJlc3Npb24gPSAzNDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2xpdGVyYWwgPSAzNTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3BhcmVudGhlc2l6ZWRFeHByZXNzaW9uID0gMzY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvbiA9IDM3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZGVzY3JpcHRpb25MaW5lID0gMzg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvbkxpbmVTdGFydCA9IDM5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZGVzY3JpcHRpb25UZXh0ID0gNDA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvbkxpbmVFbGVtZW50ID0gNDE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvbkxpbmVUZXh0ID0gNDI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9pbmxpbmVUYWcgPSA0Mztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2lubGluZVRhZ05hbWUgPSA0NDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2lubGluZVRhZ0JvZHkgPSA0NTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2JyYWNlRXhwcmVzc2lvbiA9IDQ2O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfYnJhY2VCb2R5ID0gNDc7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9icmFjZVRleHQgPSA0ODtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2lkZW50aWZpZXIgPSA0OTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBydWxlTmFtZXM6IHN0cmluZ1tdID0gW1xuXHRcdFwiZG9jdW1lbnRhdGlvblwiLCBcImJvZHlcIiwgXCJ3aGl0ZXNwYWNlXCIsIFwiYW5ub3RhdGlvbnNcIiwgXCJ0YWdcIiwgXCJ0YWdOYW1lXCIsIFxuXHRcdFwidGFnSURcIiwgXCJvcHRpb25hbFRhZ0lEXCIsIFwicHJvcGVydHlUYWdJRFwiLCBcIm9wdGlvbmFsVGFnT3JJZGVudGlmaWVyXCIsIFxuXHRcdFwidHlwZVwiLCBcInVuYXJ5VHlwZVwiLCBcInR1cGxlVHlwZVwiLCBcInR1cGxlVHlwZUxpc3RcIiwgXCJwcmltYXJ5VHlwZVwiLCBcImlkZW50aWZpZXJPcktleXdvcmRcIiwgXG5cdFx0XCJwYXJlbnRoZXNpemVkVHlwZVwiLCBcImxhbWJkYVR5cGVcIiwgXCJmb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZVwiLCBcInBhcmFtZXRlclwiLCBcblx0XHRcImFycmF5VHlwZVwiLCBcIm9iamVjdFR5cGVcIiwgXCJvYmplY3RQYWlyVHlwZUxpc3RcIiwgXCJvYmplY3RQYWlyVHlwZVwiLCBcIm9wdGlvbmFsVHlwZVwiLCBcblx0XHRcInByb3BlcnR5VHlwZVwiLCBcIm9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyXCIsIFwidmFsdWVcIiwgXCJleHByZXNzaW9uXCIsIFwidW5hcnlFeHByZXNzaW9uXCIsIFxuXHRcdFwiYXJyYXlFeHByZXNzaW9uXCIsIFwib2JqZWN0RXhwcmVzc2lvblwiLCBcIm9iamVjdFBhaXJFeHByZXNzaW9uTGlzdFwiLCBcIm9iamVjdFBhaXJFeHByZXNzaW9uXCIsIFxuXHRcdFwibGFtYmRhRXhwcmVzc2lvblwiLCBcImxpdGVyYWxcIiwgXCJwYXJlbnRoZXNpemVkRXhwcmVzc2lvblwiLCBcImRlc2NyaXB0aW9uXCIsIFxuXHRcdFwiZGVzY3JpcHRpb25MaW5lXCIsIFwiZGVzY3JpcHRpb25MaW5lU3RhcnRcIiwgXCJkZXNjcmlwdGlvblRleHRcIiwgXCJkZXNjcmlwdGlvbkxpbmVFbGVtZW50XCIsIFxuXHRcdFwiZGVzY3JpcHRpb25MaW5lVGV4dFwiLCBcImlubGluZVRhZ1wiLCBcImlubGluZVRhZ05hbWVcIiwgXCJpbmxpbmVUYWdCb2R5XCIsIFxuXHRcdFwiYnJhY2VFeHByZXNzaW9uXCIsIFwiYnJhY2VCb2R5XCIsIFwiYnJhY2VUZXh0XCIsIFwiaWRlbnRpZmllclwiXG5cdF07XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX0xJVEVSQUxfTkFNRVM6IChzdHJpbmcgfCB1bmRlZmluZWQpW10gPSBbXG5cdFx0dW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcblx0XHR1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiJ0AnXCIsIFwiJysnXCIsIFwiJy0nXCIsIFwiJyonXCIsIFxuXHRcdFwiJy8nXCIsIFwiJzonXCIsIFwiJy4nXCIsIFwiJywnXCIsIFwiJz0nXCIsIFwiJz8nXCIsIFwiJyYnXCIsIFwiJ3wnXCIsIHVuZGVmaW5lZCwgXCInISdcIiwgXG5cdFx0XCIne0AnXCIsIFwiJ3snXCIsIFwiJ30nXCIsIFwiJygnXCIsIFwiJyknXCIsIFwiJ1snXCIsIFwiJ10nXCIsIFwiJzwnXCIsIFwiJz4nXCJcblx0XTtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX1NZTUJPTElDX05BTUVTOiAoc3RyaW5nIHwgdW5kZWZpbmVkKVtdID0gW1xuXHRcdHVuZGVmaW5lZCwgXCJJbnRlZ2VyTGl0ZXJhbFwiLCBcIkZsb2F0aW5nUG9pbnRMaXRlcmFsXCIsIFwiQm9vbGVhbkxpdGVyYWxcIiwgXG5cdFx0XCJDaGFyYWN0ZXJMaXRlcmFsXCIsIFwiU3RyaW5nTGl0ZXJhbFwiLCBcIk51bGxMaXRlcmFsXCIsIFwiSURcIiwgXCJORVdMSU5FXCIsIFwiU1BBQ0VcIiwgXG5cdFx0XCJURVhUX0NPTlRFTlRcIiwgXCJBVFwiLCBcIlBMVVNcIiwgXCJNSU5VU1wiLCBcIlNUQVJcIiwgXCJGT1JXQVJEX1NMQVNIXCIsIFwiQ09MT05cIiwgXG5cdFx0XCJQRVJJT0RcIiwgXCJDT01NQVwiLCBcIkVRVUFMXCIsIFwiUVVFU1RJT05cIiwgXCJBTVBcIiwgXCJQSVBFXCIsIFwiQVJST1dcIiwgXCJFWENMQU1BVElPTlwiLCBcblx0XHRcIklOTElORV9UQUdfU1RBUlRcIiwgXCJCUkFDRV9PUEVOXCIsIFwiQlJBQ0VfQ0xPU0VcIiwgXCJQQVJFTl9PUEVOXCIsIFwiUEFSRU5fQ0xPU0VcIiwgXG5cdFx0XCJCUkFDS0VUX09QRU5cIiwgXCJCUkFDS0VUX0NMT1NFXCIsIFwiTEVTU1RIQU5cIiwgXCJHUkVBVEVSVEhBTlwiXG5cdF07XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVk9DQUJVTEFSWTogVm9jYWJ1bGFyeSA9IG5ldyBWb2NhYnVsYXJ5SW1wbChYRG9jUGFyc2VyLl9MSVRFUkFMX05BTUVTLCBYRG9jUGFyc2VyLl9TWU1CT0xJQ19OQU1FUywgW10pO1xuXG5cdEBPdmVycmlkZVxuXHRATm90TnVsbFxuXHRwdWJsaWMgZ2V0IHZvY2FidWxhcnkoKTogVm9jYWJ1bGFyeSB7XG5cdFx0cmV0dXJuIFhEb2NQYXJzZXIuVk9DQUJVTEFSWTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZ2V0IGdyYW1tYXJGaWxlTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJYRG9jUGFyc2VyLmc0XCI7IH1cblxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGdldCBydWxlTmFtZXMoKTogc3RyaW5nW10geyByZXR1cm4gWERvY1BhcnNlci5ydWxlTmFtZXM7IH1cblxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGdldCBzZXJpYWxpemVkQVROKCk6IHN0cmluZyB7IHJldHVybiBYRG9jUGFyc2VyLl9zZXJpYWxpemVkQVROOyB9XG5cblx0Y29uc3RydWN0b3IoaW5wdXQ6IFRva2VuU3RyZWFtKSB7XG5cdFx0c3VwZXIoaW5wdXQpO1xuXHRcdHRoaXMuX2ludGVycCA9IG5ldyBQYXJzZXJBVE5TaW11bGF0b3IoWERvY1BhcnNlci5fQVROLCB0aGlzKTtcblx0fVxuXHRcblx0cHVibGljIGRvY3VtZW50YXRpb24oKTogRG9jdW1lbnRhdGlvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IERvY3VtZW50YXRpb25Db250ZXh0ID0gbmV3IERvY3VtZW50YXRpb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAwLCBYRG9jUGFyc2VyLlJVTEVfZG9jdW1lbnRhdGlvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTA3O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkVPRjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkVPRik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuTkVXTElORTpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5TUEFDRTpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5BVDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMTtcblx0XHRcdFx0dGhpcy5ib2R5KCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwNTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkVPRik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGJvZHkoKTogQm9keUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEJvZHlDb250ZXh0ID0gbmV3IEJvZHlDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAyLCBYRG9jUGFyc2VyLlJVTEVfYm9keSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMTI7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdHdoaWxlIChfbGE9PT1YRG9jUGFyc2VyLk5FV0xJTkUgfHwgX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwOTtcblx0XHRcdFx0dGhpcy53aGl0ZXNwYWNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTE0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDExNTtcblx0XHRcdHRoaXMuYW5ub3RhdGlvbnMoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgd2hpdGVzcGFjZSgpOiBXaGl0ZXNwYWNlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogV2hpdGVzcGFjZUNvbnRleHQgPSBuZXcgV2hpdGVzcGFjZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDQsIFhEb2NQYXJzZXIuUlVMRV93aGl0ZXNwYWNlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDExNztcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCAhKF9sYT09PVhEb2NQYXJzZXIuTkVXTElORSB8fCBfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSApIHtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBhbm5vdGF0aW9ucygpOiBBbm5vdGF0aW9uc0NvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEFubm90YXRpb25zQ29udGV4dCA9IG5ldyBBbm5vdGF0aW9uc0NvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDYsIFhEb2NQYXJzZXIuUlVMRV9hbm5vdGF0aW9ucyk7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMTk7XG5cdFx0XHR0aGlzLnRhZygpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDEyNDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzLHRoaXMuX2N0eCk7XG5cdFx0XHR3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICkge1xuXHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEyMDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEyMTtcblx0XHRcdFx0XHR0aGlzLnRhZygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMjY7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDMsdGhpcy5fY3R4KTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdGFnKCk6IFRhZ0NvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFRhZ0NvbnRleHQgPSBuZXcgVGFnQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOCwgWERvY1BhcnNlci5SVUxFX3RhZyk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMjY4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMjMsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEyNztcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEyODtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMjk7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzI7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAzKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTM0O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEzNTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEzNjtcblx0XHRcdFx0dGhpcy50YWdJRCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDQpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzg7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTM5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQwO1xuXHRcdFx0XHR0aGlzLnRhZ0lEKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNDI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxNDE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQ0O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuRVFVQUwpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQ2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTQ1O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0ODtcblx0XHRcdFx0dGhpcy52YWx1ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDUpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNTA7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTUxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTUyO1xuXHRcdFx0XHR0aGlzLnRhZ0lEKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNTM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNTQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNTU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNTY7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA2KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTU4O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1OTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2MDtcblx0XHRcdFx0dGhpcy50YWdJRCgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTYxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTYyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuRVFVQUwpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTY0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTYzO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2Njtcblx0XHRcdFx0dGhpcy52YWx1ZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTY3O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTY4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuTUlOVVMpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTY5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTcwO1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNzpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNyk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3Mjtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNzM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNzQ7XG5cdFx0XHRcdHRoaXMudGFnSUQoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3Njtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3NTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNzg7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxNzk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTgyO1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgODpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgOCk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE4NDtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODU7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODY7XG5cdFx0XHRcdHRoaXMudGFnSUQoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE4ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE4Nztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTk0O1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTY7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTk4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuRVFVQUwpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjAwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTk5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIwMjtcblx0XHRcdFx0dGhpcy52YWx1ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDk6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDkpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDQ7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjA1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjA2O1xuXHRcdFx0XHR0aGlzLnRhZ0lEKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjEwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjEyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjExO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxNDtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjE1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjE2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuTUlOVVMpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjE3O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjE4O1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMTA6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEwKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjIwO1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIyMTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIyMjtcblx0XHRcdFx0dGhpcy50YWdJRCgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjI0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjIzO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIyNjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIyODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIyNztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzA7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzMjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzMTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5FUVVBTCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzY7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjM4O1xuXHRcdFx0XHR0aGlzLnZhbHVlKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzk7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDI7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAxMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMTEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDQ7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjQ2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjQ1O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI0ODtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1MDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI0OTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTI7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAxMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMTIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNTQ7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjU2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjU1O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1ODtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2MDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1OTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNjI7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2Mztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2NDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLk1JTlVTKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2NTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2Njtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyB0YWdOYW1lKCk6IFRhZ05hbWVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBUYWdOYW1lQ29udGV4dCA9IG5ldyBUYWdOYW1lQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMTAsIFhEb2NQYXJzZXIuUlVMRV90YWdOYW1lKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMjcwO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkFUKTtcblx0XHRcdHRoaXMuc3RhdGUgPSAyNzE7XG5cdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdGFnSUQoKTogVGFnSURDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBUYWdJRENvbnRleHQgPSBuZXcgVGFnSURDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxMiwgWERvY1BhcnNlci5SVUxFX3RhZ0lEKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDI3Njtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDI0LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNzM7XG5cdFx0XHRcdHRoaXMucHJvcGVydHlUYWdJRCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNzQ7XG5cdFx0XHRcdHRoaXMub3B0aW9uYWxUYWdJRCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDMpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNzU7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvcHRpb25hbFRhZ0lEKCk6IE9wdGlvbmFsVGFnSURDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPcHRpb25hbFRhZ0lEQ29udGV4dCA9IG5ldyBPcHRpb25hbFRhZ0lEQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMTQsIFhEb2NQYXJzZXIuUlVMRV9vcHRpb25hbFRhZ0lEKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMjc4O1xuXHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gMjc5O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlFVRVNUSU9OKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgcHJvcGVydHlUYWdJRCgpOiBQcm9wZXJ0eVRhZ0lEQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogUHJvcGVydHlUYWdJRENvbnRleHQgPSBuZXcgUHJvcGVydHlUYWdJRENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDE2LCBYRG9jUGFyc2VyLlJVTEVfcHJvcGVydHlUYWdJRCk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMjk1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMjcsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI4MTtcblx0XHRcdFx0dGhpcy5vcHRpb25hbFRhZ0lEKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyODQ7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjgyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5QRVJJT0QpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyODM7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25hbFRhZ09ySWRlbnRpZmllcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI4NjsgXG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHR9IHdoaWxlICggX2xhPT09WERvY1BhcnNlci5QRVJJT0QgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjg4O1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI5MTsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyODk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlBFUklPRCk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI5MDtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjkzOyBcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdH0gd2hpbGUgKCBfbGE9PT1YRG9jUGFyc2VyLlBFUklPRCApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvcHRpb25hbFRhZ09ySWRlbnRpZmllcigpOiBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dCA9IG5ldyBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDE4LCBYRG9jUGFyc2VyLlJVTEVfb3B0aW9uYWxUYWdPcklkZW50aWZpZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMjk5O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMjgsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI5Nztcblx0XHRcdFx0dGhpcy5vcHRpb25hbFRhZ0lEKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI5ODtcblx0XHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0O1xuXHRwdWJsaWMgdHlwZShfcDogbnVtYmVyKTogVHlwZUNvbnRleHQ7XG5cdFxuXHRwdWJsaWMgdHlwZShfcD86IG51bWJlcik6IFR5cGVDb250ZXh0IHtcblx0XHRpZiAoX3AgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0X3AgPSAwO1xuXHRcdH1cblxuXHRcdGxldCBfcGFyZW50Y3R4OiBQYXJzZXJSdWxlQ29udGV4dCA9IHRoaXMuX2N0eDtcblx0XHRsZXQgX3BhcmVudFN0YXRlOiBudW1iZXIgPSB0aGlzLnN0YXRlO1xuXHRcdGxldCBfbG9jYWxjdHg6IFR5cGVDb250ZXh0ID0gbmV3IFR5cGVDb250ZXh0KHRoaXMuX2N0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRsZXQgX3ByZXZjdHg6IFR5cGVDb250ZXh0ID0gX2xvY2FsY3R4O1xuXHRcdGxldCBfc3RhcnRTdGF0ZTogbnVtYmVyID0gMjA7XG5cdFx0dGhpcy5lbnRlclJlY3Vyc2lvblJ1bGUoX2xvY2FsY3R4LCAyMCwgWERvY1BhcnNlci5SVUxFX3R5cGUsIF9wKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAzMTA7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwyOSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMDI7XG5cdFx0XHRcdHRoaXMubGFtYmRhVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwMztcblx0XHRcdFx0dGhpcy50dXBsZVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMDQ7XG5cdFx0XHRcdHRoaXMucHJpbWFyeVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMDU7XG5cdFx0XHRcdHRoaXMucGFyZW50aGVzaXplZFR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMDY7XG5cdFx0XHRcdHRoaXMudW5hcnlUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNjpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzA3O1xuXHRcdFx0XHR0aGlzLm9iamVjdFR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA3OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMDg7XG5cdFx0XHRcdHRoaXMuYXJyYXlUeXBlKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDg6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwOTtcblx0XHRcdFx0dGhpcy5wcm9wZXJ0eVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuX2N0eC5fc3RvcCA9IHRoaXMuX2lucHV0LnRyeUxUKC0xKTtcblx0XHRcdHRoaXMuc3RhdGUgPSAzMjM7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMzIsdGhpcy5fY3R4KTtcblx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9wYXJzZUxpc3RlbmVycyE9bnVsbCApIHRoaXMudHJpZ2dlckV4aXRSdWxlRXZlbnQoKTtcblx0XHRcdFx0XHRfcHJldmN0eCA9IF9sb2NhbGN0eDtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdF9sb2NhbGN0eCA9IG5ldyBUeXBlQ29udGV4dChfcGFyZW50Y3R4LCBfcGFyZW50U3RhdGUpO1xuXHRcdFx0XHRcdHRoaXMucHVzaE5ld1JlY3Vyc2lvbkNvbnRleHQoX2xvY2FsY3R4LCBfc3RhcnRTdGF0ZSwgWERvY1BhcnNlci5SVUxFX3R5cGUpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzMTI7XG5cdFx0XHRcdFx0aWYgKCEodGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDkpKSkgdGhyb3cgbmV3IEZhaWxlZFByZWRpY2F0ZUV4Y2VwdGlvbih0aGlzLCBcInRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA5KVwiKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzE0O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMxMztcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMxNjtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoICEoX2xhPT09WERvY1BhcnNlci5BTVAgfHwgX2xhPT09WERvY1BhcnNlci5QSVBFKSApIHtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMxODtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzMTc7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzMjA7XG5cdFx0XHRcdFx0dGhpcy50eXBlKDEwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzI1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzMix0aGlzLl9jdHgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLnVucm9sbFJlY3Vyc2lvbkNvbnRleHRzKF9wYXJlbnRjdHgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdW5hcnlUeXBlKCk6IFVuYXJ5VHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFVuYXJ5VHlwZUNvbnRleHQgPSBuZXcgVW5hcnlUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMjIsIFhEb2NQYXJzZXIuUlVMRV91bmFyeVR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzI2O1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoICEoX2xhPT09WERvY1BhcnNlci5TVEFSIHx8IF9sYT09PVhEb2NQYXJzZXIuQU1QKSApIHtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDMyNztcblx0XHRcdHRoaXMucHJpbWFyeVR5cGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdHVwbGVUeXBlKCk6IFR1cGxlVHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFR1cGxlVHlwZUNvbnRleHQgPSBuZXcgVHVwbGVUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMjQsIFhEb2NQYXJzZXIuUlVMRV90dXBsZVR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzMwO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5JRCkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMjk7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSAzMzI7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuTEVTU1RIQU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDMzNDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzMzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSAzMzY7XG5cdFx0XHR0aGlzLnR1cGxlVHlwZUxpc3QoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSAzMzg7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMzNztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gMzQwO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkdSRUFURVJUSEFOKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdHVwbGVUeXBlTGlzdCgpOiBUdXBsZVR5cGVMaXN0Q29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogVHVwbGVUeXBlTGlzdENvbnRleHQgPSBuZXcgVHVwbGVUeXBlTGlzdENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDI2LCBYRG9jUGFyc2VyLlJVTEVfdHVwbGVUeXBlTGlzdCk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAzNDI7XG5cdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzQ0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNDM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDM1MTsgXG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGRvIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNDY7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5DT01NQSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNDg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNDc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzUwO1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzUzOyBcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdH0gd2hpbGUgKCBfbGE9PT1YRG9jUGFyc2VyLkNPTU1BICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHByaW1hcnlUeXBlKCk6IFByaW1hcnlUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogUHJpbWFyeVR5cGVDb250ZXh0ID0gbmV3IFByaW1hcnlUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMjgsIFhEb2NQYXJzZXIuUlVMRV9wcmltYXJ5VHlwZSk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSAzNTc7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzOSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzU1O1xuXHRcdFx0XHR0aGlzLm9wdGlvbmFsVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNTY7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllck9yS2V5d29yZCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBpZGVudGlmaWVyT3JLZXl3b3JkKCk6IElkZW50aWZpZXJPcktleXdvcmRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCA9IG5ldyBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMzAsIFhEb2NQYXJzZXIuUlVMRV9pZGVudGlmaWVyT3JLZXl3b3JkKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDM2MTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgWERvY1BhcnNlci5JRDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM1OTtcblx0XHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuTnVsbExpdGVyYWw6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNjA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5OdWxsTGl0ZXJhbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHBhcmVudGhlc2l6ZWRUeXBlKCk6IFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogUGFyZW50aGVzaXplZFR5cGVDb250ZXh0ID0gbmV3IFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMzIsIFhEb2NQYXJzZXIuUlVMRV9wYXJlbnRoZXNpemVkVHlwZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAzNjM7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuUEFSRU5fT1BFTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzY1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNjQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDM2Nztcblx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdHRoaXMuc3RhdGUgPSAzNjk7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2ODtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gMzcxO1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlBBUkVOX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgbGFtYmRhVHlwZSgpOiBMYW1iZGFUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogTGFtYmRhVHlwZUNvbnRleHQgPSBuZXcgTGFtYmRhVHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDM0LCBYRG9jUGFyc2VyLlJVTEVfbGFtYmRhVHlwZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDAyO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLlBBUkVOX09QRU46XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNzM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5QQVJFTl9PUEVOKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM3NTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw0Myx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNzQ7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM3ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuSUQpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM3Nztcblx0XHRcdFx0XHR0aGlzLmZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM4MTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM4MDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzODM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5QQVJFTl9DTE9TRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzODU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzODQ7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzg3O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuQVJST1cpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzg5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzg4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5MTtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLklEOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzkyO1xuXHRcdFx0XHR0aGlzLnBhcmFtZXRlcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzk0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzkzO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5Njtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkFSUk9XKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5Nztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDA7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UoKTogRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQgPSBuZXcgRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAzNiwgWERvY1BhcnNlci5SVUxFX2Zvcm1hbFBhcmFtZXRlclNlcXVlbmNlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQwNDtcblx0XHRcdHRoaXMucGFyYW1ldGVyKCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDEyO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR3aGlsZSAoX2xhPT09WERvY1BhcnNlci5DT01NQSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQwNTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkNPTU1BKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQwNztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQwNjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDk7XG5cdFx0XHRcdHRoaXMucGFyYW1ldGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDE0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBwYXJhbWV0ZXIoKTogUGFyYW1ldGVyQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogUGFyYW1ldGVyQ29udGV4dCA9IG5ldyBQYXJhbWV0ZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAzOCwgWERvY1BhcnNlci5SVUxFX3BhcmFtZXRlcik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA0MTU7XG5cdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA0MjQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw1NSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MTc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0MTY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDE5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDIxO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDIwO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyMztcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblxuXHRwdWJsaWMgYXJyYXlUeXBlKCk6IEFycmF5VHlwZUNvbnRleHQ7XG5cdHB1YmxpYyBhcnJheVR5cGUoX3A6IG51bWJlcik6IEFycmF5VHlwZUNvbnRleHQ7XG5cdFxuXHRwdWJsaWMgYXJyYXlUeXBlKF9wPzogbnVtYmVyKTogQXJyYXlUeXBlQ29udGV4dCB7XG5cdFx0aWYgKF9wID09PSB1bmRlZmluZWQpIHtcblx0XHRcdF9wID0gMDtcblx0XHR9XG5cblx0XHRsZXQgX3BhcmVudGN0eDogUGFyc2VyUnVsZUNvbnRleHQgPSB0aGlzLl9jdHg7XG5cdFx0bGV0IF9wYXJlbnRTdGF0ZTogbnVtYmVyID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgX2xvY2FsY3R4OiBBcnJheVR5cGVDb250ZXh0ID0gbmV3IEFycmF5VHlwZUNvbnRleHQodGhpcy5fY3R4LCBfcGFyZW50U3RhdGUpO1xuXHRcdGxldCBfcHJldmN0eDogQXJyYXlUeXBlQ29udGV4dCA9IF9sb2NhbGN0eDtcblx0XHRsZXQgX3N0YXJ0U3RhdGU6IG51bWJlciA9IDQwO1xuXHRcdHRoaXMuZW50ZXJSZWN1cnNpb25SdWxlKF9sb2NhbGN0eCwgNDAsIFhEb2NQYXJzZXIuUlVMRV9hcnJheVR5cGUsIF9wKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA0NzQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuQlJBQ0tFVF9PUEVOOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0Mjc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5CUkFDS0VUX09QRU4pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDI5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDU2LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MzI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNTcsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDMxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MzU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNTgsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDM0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQzODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKCgoKChfbGEgLSA2KSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IChfbGEgLSA2KSkgJiAoKDEgPDwgKFhEb2NQYXJzZXIuTnVsbExpdGVyYWwgLSA2KSkgfCAoMSA8PCAoWERvY1BhcnNlci5JRCAtIDYpKSB8ICgxIDw8IChYRG9jUGFyc2VyLlNUQVIgLSA2KSkgfCAoMSA8PCAoWERvY1BhcnNlci5BTVAgLSA2KSkgfCAoMSA8PCAoWERvY1BhcnNlci5CUkFDRV9PUEVOIC0gNikpIHwgKDEgPDwgKFhEb2NQYXJzZXIuUEFSRU5fT1BFTiAtIDYpKSB8ICgxIDw8IChYRG9jUGFyc2VyLkJSQUNLRVRfT1BFTiAtIDYpKSB8ICgxIDw8IChYRG9jUGFyc2VyLkxFU1NUSEFOIC0gNikpKSkgIT09IDApKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0Mzc7XG5cdFx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdHdoaWxlIChfbGE9PT1YRG9jUGFyc2VyLkNPTU1BKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDQwO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5DT01NQSk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ0Mjtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNjAsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDQxO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0NDU7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDQ0O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDQ4O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDQ3O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTA7XG5cdFx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ1NTtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ1Nztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw2NCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTY7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDYwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDU5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ2Mztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDYyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDY1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuQlJBQ0tFVF9DTE9TRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuSUQ6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ2Njtcblx0XHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0Njc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5CUkFDS0VUX09QRU4pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDY4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuQlJBQ0tFVF9DTE9TRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDcwO1xuXHRcdFx0XHR0aGlzLm9iamVjdFR5cGUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ3MTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkJSQUNLRVRfT1BFTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NzI7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5CUkFDS0VUX0NMT1NFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2N0eC5fc3RvcCA9IHRoaXMuX2lucHV0LnRyeUxUKC0xKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA0ODQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNjksdGhpcy5fY3R4KTtcblx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9wYXJzZUxpc3RlbmVycyE9bnVsbCApIHRoaXMudHJpZ2dlckV4aXRSdWxlRXZlbnQoKTtcblx0XHRcdFx0XHRfcHJldmN0eCA9IF9sb2NhbGN0eDtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdF9sb2NhbGN0eCA9IG5ldyBBcnJheVR5cGVDb250ZXh0KF9wYXJlbnRjdHgsIF9wYXJlbnRTdGF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5wdXNoTmV3UmVjdXJzaW9uQ29udGV4dChfbG9jYWxjdHgsIF9zdGFydFN0YXRlLCBYRG9jUGFyc2VyLlJVTEVfYXJyYXlUeXBlKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDc2O1xuXHRcdFx0XHRcdGlmICghKHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCAxKSkpIHRocm93IG5ldyBGYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24odGhpcywgXCJ0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgMSlcIik7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ3Nztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuQlJBQ0tFVF9PUEVOKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDc5O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoKCgoKF9sYSAtIDYpKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgKF9sYSAtIDYpKSAmICgoMSA8PCAoWERvY1BhcnNlci5OdWxsTGl0ZXJhbCAtIDYpKSB8ICgxIDw8IChYRG9jUGFyc2VyLklEIC0gNikpIHwgKDEgPDwgKFhEb2NQYXJzZXIuU1RBUiAtIDYpKSB8ICgxIDw8IChYRG9jUGFyc2VyLkFNUCAtIDYpKSB8ICgxIDw8IChYRG9jUGFyc2VyLkJSQUNFX09QRU4gLSA2KSkgfCAoMSA8PCAoWERvY1BhcnNlci5QQVJFTl9PUEVOIC0gNikpIHwgKDEgPDwgKFhEb2NQYXJzZXIuQlJBQ0tFVF9PUEVOIC0gNikpIHwgKDEgPDwgKFhEb2NQYXJzZXIuTEVTU1RIQU4gLSA2KSkpKSAhPT0gMCkpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0Nzg7XG5cdFx0XHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ4MTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuQlJBQ0tFVF9DTE9TRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ4Njtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNjksdGhpcy5fY3R4KTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy51bnJvbGxSZWN1cnNpb25Db250ZXh0cyhfcGFyZW50Y3R4KTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9iamVjdFR5cGUoKTogT2JqZWN0VHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9iamVjdFR5cGVDb250ZXh0ID0gbmV3IE9iamVjdFR5cGVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA0MiwgWERvY1BhcnNlci5SVUxFX29iamVjdFR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDg3O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkJSQUNFX09QRU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ4OTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDcwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ4ODtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA0OTI7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw3MSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0OTE7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA0OTU7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw3Mix0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0OTQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNDk4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoKCgoKF9sYSAtIDYpKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgKF9sYSAtIDYpKSAmICgoMSA8PCAoWERvY1BhcnNlci5OdWxsTGl0ZXJhbCAtIDYpKSB8ICgxIDw8IChYRG9jUGFyc2VyLklEIC0gNikpIHwgKDEgPDwgKFhEb2NQYXJzZXIuU1RBUiAtIDYpKSB8ICgxIDw8IChYRG9jUGFyc2VyLkFNUCAtIDYpKSB8ICgxIDw8IChYRG9jUGFyc2VyLkJSQUNFX09QRU4gLSA2KSkgfCAoMSA8PCAoWERvY1BhcnNlci5QQVJFTl9PUEVOIC0gNikpIHwgKDEgPDwgKFhEb2NQYXJzZXIuQlJBQ0tFVF9PUEVOIC0gNikpIHwgKDEgPDwgKFhEb2NQYXJzZXIuTEVTU1RIQU4gLSA2KSkpKSAhPT0gMCkpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDk3O1xuXHRcdFx0XHR0aGlzLm9iamVjdFBhaXJUeXBlTGlzdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1MDE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw3NCx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MDA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNTA0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUwMztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1MDc7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUwNjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNTA5O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkJSQUNFX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb2JqZWN0UGFpclR5cGVMaXN0KCk6IE9iamVjdFBhaXJUeXBlTGlzdENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9iamVjdFBhaXJUeXBlTGlzdENvbnRleHQgPSBuZXcgT2JqZWN0UGFpclR5cGVMaXN0Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNDQsIFhEb2NQYXJzZXIuUlVMRV9vYmplY3RQYWlyVHlwZUxpc3QpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTExO1xuXHRcdFx0dGhpcy5vYmplY3RQYWlyVHlwZSgpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDUxMztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDc3LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUxMjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA1Mjg7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdHdoaWxlIChfbGE9PT1YRG9jUGFyc2VyLkNPTU1BKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTE1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuQ09NTUEpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTE3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDc4LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUxNjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTIwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1MTk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MjM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1MjI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTI1O1xuXHRcdFx0XHR0aGlzLm9iamVjdFBhaXJUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTMwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvYmplY3RQYWlyVHlwZSgpOiBPYmplY3RQYWlyVHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9iamVjdFBhaXJUeXBlQ29udGV4dCA9IG5ldyBPYmplY3RQYWlyVHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDQ2LCBYRG9jUGFyc2VyLlJVTEVfb2JqZWN0UGFpclR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTMxO1xuXHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDUzMztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuUVVFU1RJT04pIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTMyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuUVVFU1RJT04pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1MzY7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzNTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNTM4O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkNPTE9OKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA1NDA7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzOTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNTQyO1xuXHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvcHRpb25hbFR5cGUoKTogT3B0aW9uYWxUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT3B0aW9uYWxUeXBlQ29udGV4dCA9IG5ldyBPcHRpb25hbFR5cGVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA0OCwgWERvY1BhcnNlci5SVUxFX29wdGlvbmFsVHlwZSk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDU0NDtcblx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDU0NTtcblx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5RVUVTVElPTik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHByb3BlcnR5VHlwZSgpOiBQcm9wZXJ0eVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBQcm9wZXJ0eVR5cGVDb250ZXh0ID0gbmV3IFByb3BlcnR5VHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDUwLCBYRG9jUGFyc2VyLlJVTEVfcHJvcGVydHlUeXBlKTtcblx0XHR0cnkge1xuXHRcdFx0bGV0IF9hbHQ6IG51bWJlcjtcblx0XHRcdHRoaXMuc3RhdGUgPSA1NjE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw4Nyx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTQ3O1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU1MDsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IDE7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRzd2l0Y2ggKF9hbHQpIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTQ4O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlBFUklPRCk7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTQ5O1xuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25hbFR5cGVPcklkZW50aWZlcigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU1MjsgXG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw4NSx0aGlzLl9jdHgpO1xuXHRcdFx0XHR9IHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTU0O1xuXHRcdFx0XHR0aGlzLm9wdGlvbmFsVHlwZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTU3OyBcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gMTtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdHN3aXRjaCAoX2FsdCkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1NTU7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuUEVSSU9EKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1NTY7XG5cdFx0XHRcdFx0XHR0aGlzLm9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTU5OyBcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDg2LHRoaXMuX2N0eCk7XG5cdFx0XHRcdH0gd2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvcHRpb25hbFR5cGVPcklkZW50aWZlcigpOiBPcHRpb25hbFR5cGVPcklkZW50aWZlckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyQ29udGV4dCA9IG5ldyBPcHRpb25hbFR5cGVPcklkZW50aWZlckNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDUyLCBYRG9jUGFyc2VyLlJVTEVfb3B0aW9uYWxUeXBlT3JJZGVudGlmZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTY1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsODgsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU2Mztcblx0XHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU2NDtcblx0XHRcdFx0dGhpcy5vcHRpb25hbFR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdmFsdWUoKTogVmFsdWVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBWYWx1ZUNvbnRleHQgPSBuZXcgVmFsdWVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA1NCwgWERvY1BhcnNlci5SVUxFX3ZhbHVlKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTY3O1xuXHRcdFx0dGhpcy5leHByZXNzaW9uKDApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblxuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dDtcblx0cHVibGljIGV4cHJlc3Npb24oX3A6IG51bWJlcik6IEV4cHJlc3Npb25Db250ZXh0O1xuXHRcblx0cHVibGljIGV4cHJlc3Npb24oX3A/OiBudW1iZXIpOiBFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0aWYgKF9wID09PSB1bmRlZmluZWQpIHtcblx0XHRcdF9wID0gMDtcblx0XHR9XG5cblx0XHRsZXQgX3BhcmVudGN0eDogUGFyc2VyUnVsZUNvbnRleHQgPSB0aGlzLl9jdHg7XG5cdFx0bGV0IF9wYXJlbnRTdGF0ZTogbnVtYmVyID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgX2xvY2FsY3R4OiBFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIF9wYXJlbnRTdGF0ZSk7XG5cdFx0bGV0IF9wcmV2Y3R4OiBFeHByZXNzaW9uQ29udGV4dCA9IF9sb2NhbGN0eDtcblx0XHRsZXQgX3N0YXJ0U3RhdGU6IG51bWJlciA9IDU2O1xuXHRcdHRoaXMuZW50ZXJSZWN1cnNpb25SdWxlKF9sb2NhbGN0eCwgNTYsIFhEb2NQYXJzZXIuUlVMRV9leHByZXNzaW9uLCBfcCk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTc2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsODksdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTcwO1xuXHRcdFx0XHR0aGlzLnVuYXJ5RXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU3MTtcblx0XHRcdFx0dGhpcy5hcnJheUV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NzI7XG5cdFx0XHRcdHRoaXMub2JqZWN0RXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU3Mztcblx0XHRcdFx0dGhpcy5sYW1iZGFFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTc0O1xuXHRcdFx0XHR0aGlzLmxpdGVyYWwoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NzU7XG5cdFx0XHRcdHRoaXMucGFyZW50aGVzaXplZEV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuX2N0eC5fc3RvcCA9IHRoaXMuX2lucHV0LnRyeUxUKC0xKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA1OTg7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsOTUsdGhpcy5fY3R4KTtcblx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9wYXJzZUxpc3RlbmVycyE9bnVsbCApIHRoaXMudHJpZ2dlckV4aXRSdWxlRXZlbnQoKTtcblx0XHRcdFx0XHRfcHJldmN0eCA9IF9sb2NhbGN0eDtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU5Njtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsOTQsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRfbG9jYWxjdHggPSBuZXcgRXhwcmVzc2lvbkNvbnRleHQoX3BhcmVudGN0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRcdFx0XHRcdHRoaXMucHVzaE5ld1JlY3Vyc2lvbkNvbnRleHQoX2xvY2FsY3R4LCBfc3RhcnRTdGF0ZSwgWERvY1BhcnNlci5SVUxFX2V4cHJlc3Npb24pO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU3ODtcblx0XHRcdFx0XHRcdGlmICghKHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA3KSkpIHRocm93IG5ldyBGYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24odGhpcywgXCJ0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNylcIik7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTgwO1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1Nzk7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU4Mjtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKCAhKF9sYT09PVhEb2NQYXJzZXIuU1RBUiB8fCBfbGE9PT1YRG9jUGFyc2VyLkZPUldBUkRfU0xBU0gpICkge1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVySW5saW5lKHRoaXMpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoZWRFT0YgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTg0O1xuXHRcdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODM7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU4Njtcblx0XHRcdFx0XHRcdHRoaXMuZXhwcmVzc2lvbig4KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0X2xvY2FsY3R4ID0gbmV3IEV4cHJlc3Npb25Db250ZXh0KF9wYXJlbnRjdHgsIF9wYXJlbnRTdGF0ZSk7XG5cdFx0XHRcdFx0XHR0aGlzLnB1c2hOZXdSZWN1cnNpb25Db250ZXh0KF9sb2NhbGN0eCwgX3N0YXJ0U3RhdGUsIFhEb2NQYXJzZXIuUlVMRV9leHByZXNzaW9uKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODc7XG5cdFx0XHRcdFx0XHRpZiAoISh0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNikpKSB0aHJvdyBuZXcgRmFpbGVkUHJlZGljYXRlRXhjZXB0aW9uKHRoaXMsIFwidGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDYpXCIpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU4OTtcblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTg4O1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1OTE7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmICggIShfbGE9PT1YRG9jUGFyc2VyLlBMVVMgfHwgX2xhPT09WERvY1BhcnNlci5NSU5VUykgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1OTM7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU5Mjtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTk1O1xuXHRcdFx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYwMDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsOTUsdGhpcy5fY3R4KTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy51bnJvbGxSZWN1cnNpb25Db250ZXh0cyhfcGFyZW50Y3R4KTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHVuYXJ5RXhwcmVzc2lvbigpOiBVbmFyeUV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBVbmFyeUV4cHJlc3Npb25Db250ZXh0ID0gbmV3IFVuYXJ5RXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDU4LCBYRG9jUGFyc2VyLlJVTEVfdW5hcnlFeHByZXNzaW9uKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDYwMTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCAhKF9sYT09PVhEb2NQYXJzZXIuUExVUyB8fCBfbGE9PT1YRG9jUGFyc2VyLk1JTlVTKSApIHtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDYwMjtcblx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgYXJyYXlFeHByZXNzaW9uKCk6IEFycmF5RXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEFycmF5RXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgQXJyYXlFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNjAsIFhEb2NQYXJzZXIuUlVMRV9hcnJheUV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjA0O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkJSQUNLRVRfT1BFTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjA2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsOTYsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjA1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNjA5O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsOTcsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjA4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDYxMjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDk4LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYxMTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDYxNTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCgoKF9sYSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IF9sYSkgJiAoKDEgPDwgWERvY1BhcnNlci5JbnRlZ2VyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jUGFyc2VyLkZsb2F0aW5nUG9pbnRMaXRlcmFsKSB8ICgxIDw8IFhEb2NQYXJzZXIuQm9vbGVhbkxpdGVyYWwpIHwgKDEgPDwgWERvY1BhcnNlci5DaGFyYWN0ZXJMaXRlcmFsKSB8ICgxIDw8IFhEb2NQYXJzZXIuU3RyaW5nTGl0ZXJhbCkgfCAoMSA8PCBYRG9jUGFyc2VyLk51bGxMaXRlcmFsKSB8ICgxIDw8IFhEb2NQYXJzZXIuSUQpIHwgKDEgPDwgWERvY1BhcnNlci5QTFVTKSB8ICgxIDw8IFhEb2NQYXJzZXIuTUlOVVMpIHwgKDEgPDwgWERvY1BhcnNlci5CUkFDRV9PUEVOKSB8ICgxIDw8IFhEb2NQYXJzZXIuUEFSRU5fT1BFTikgfCAoMSA8PCBYRG9jUGFyc2VyLkJSQUNLRVRfT1BFTikpKSAhPT0gMCkpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjE0O1xuXHRcdFx0XHR0aGlzLmV4cHJlc3Npb24oMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDYzMDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0d2hpbGUgKF9sYT09PVhEb2NQYXJzZXIuQ09NTUEpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MTc7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5DT01NQSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MTk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTAwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYxODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MjI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2MjE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjI1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2MjQ7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2Mjc7XG5cdFx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MzI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNjM0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTA0LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYzMztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDYzNztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjM2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA2NDA7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjM5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDY0Mjtcblx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5CUkFDS0VUX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb2JqZWN0RXhwcmVzc2lvbigpOiBPYmplY3RFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDYyLCBYRG9jUGFyc2VyLlJVTEVfb2JqZWN0RXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA2NDQ7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuQlJBQ0VfT1BFTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjQ2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTA3LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY0NTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA2NDk7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMDgsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjQ4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNjUyO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTA5LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY1MTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA2NTU7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NQYXJzZXIuSW50ZWdlckxpdGVyYWwpIHwgKDEgPDwgWERvY1BhcnNlci5GbG9hdGluZ1BvaW50TGl0ZXJhbCkgfCAoMSA8PCBYRG9jUGFyc2VyLkJvb2xlYW5MaXRlcmFsKSB8ICgxIDw8IFhEb2NQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jUGFyc2VyLlN0cmluZ0xpdGVyYWwpIHwgKDEgPDwgWERvY1BhcnNlci5OdWxsTGl0ZXJhbCkpKSAhPT0gMCkpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjU0O1xuXHRcdFx0XHR0aGlzLm9iamVjdFBhaXJFeHByZXNzaW9uTGlzdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA2NTg7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMTEsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjU3O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDY2MTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NjA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNjY0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NjM7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDY2Njtcblx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5CUkFDRV9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9iamVjdFBhaXJFeHByZXNzaW9uTGlzdCgpOiBPYmplY3RQYWlyRXhwcmVzc2lvbkxpc3RDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPYmplY3RQYWlyRXhwcmVzc2lvbkxpc3RDb250ZXh0ID0gbmV3IE9iamVjdFBhaXJFeHByZXNzaW9uTGlzdENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDY0LCBYRG9jUGFyc2VyLlJVTEVfb2JqZWN0UGFpckV4cHJlc3Npb25MaXN0KTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA2Njg7XG5cdFx0XHR0aGlzLm9iamVjdFBhaXJFeHByZXNzaW9uKCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjg1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDExOCx0aGlzLl9jdHgpO1xuXHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NzA7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjY5O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjcyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5DT01NQSk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3NDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTE1LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3Mztcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3Nztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3Njtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjgwO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3OTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY4Mjtcblx0XHRcdFx0XHR0aGlzLm9iamVjdFBhaXJFeHByZXNzaW9uKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY4Nztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTE4LHRoaXMuX2N0eCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9iamVjdFBhaXJFeHByZXNzaW9uKCk6IE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0ID0gbmV3IE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNjYsIFhEb2NQYXJzZXIuUlVMRV9vYmplY3RQYWlyRXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzA4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTIzLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2ODg7XG5cdFx0XHRcdHRoaXMubGl0ZXJhbCgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjkwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjg5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5Mjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5NDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5Mztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2OTY7XG5cdFx0XHRcdHRoaXMub2JqZWN0RXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2OTg7XG5cdFx0XHRcdHRoaXMubGl0ZXJhbCgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzAwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjk5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcwMjtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcwNDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcwMztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MDY7XG5cdFx0XHRcdHRoaXMubGl0ZXJhbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBsYW1iZGFFeHByZXNzaW9uKCk6IExhbWJkYUV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBMYW1iZGFFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBMYW1iZGFFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNjgsIFhEb2NQYXJzZXIuUlVMRV9sYW1iZGFFeHByZXNzaW9uKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA3NDE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuUEFSRU5fT1BFTjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcxMDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlBBUkVOX09QRU4pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzEyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEyNCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3MTE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcxNTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuSUQpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcxNDtcblx0XHRcdFx0XHR0aGlzLmZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcxODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcxNztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MjA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5QQVJFTl9DTE9TRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MjI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1YRG9jUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3MjE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzI0O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuQVJST1cpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzI2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzI1O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcyODtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLklEOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzI5O1xuXHRcdFx0XHR0aGlzLnBhcmFtZXRlcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzMxO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzMwO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDczMztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkFSUk9XKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDczNTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDczNDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3Mzc7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDczOTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMzEsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzM4O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5RVUVTVElPTik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGxpdGVyYWwoKTogTGl0ZXJhbENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IExpdGVyYWxDb250ZXh0ID0gbmV3IExpdGVyYWxDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA3MCwgWERvY1BhcnNlci5SVUxFX2xpdGVyYWwpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzQzO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoICEoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jUGFyc2VyLkludGVnZXJMaXRlcmFsKSB8ICgxIDw8IFhEb2NQYXJzZXIuRmxvYXRpbmdQb2ludExpdGVyYWwpIHwgKDEgPDwgWERvY1BhcnNlci5Cb29sZWFuTGl0ZXJhbCkgfCAoMSA8PCBYRG9jUGFyc2VyLkNoYXJhY3RlckxpdGVyYWwpIHwgKDEgPDwgWERvY1BhcnNlci5TdHJpbmdMaXRlcmFsKSB8ICgxIDw8IFhEb2NQYXJzZXIuTnVsbExpdGVyYWwpKSkgIT09IDApKSApIHtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBwYXJlbnRoZXNpemVkRXhwcmVzc2lvbigpOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDcyLCBYRG9jUGFyc2VyLlJVTEVfcGFyZW50aGVzaXplZEV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzQ1O1xuXHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlBBUkVOX09QRU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDc0Nztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzQ2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA3NDk7XG5cdFx0XHR0aGlzLmV4cHJlc3Npb24oMCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzUxO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09WERvY1BhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3NTA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDc1Mztcblx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5QQVJFTl9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGRlc2NyaXB0aW9uKCk6IERlc2NyaXB0aW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogRGVzY3JpcHRpb25Db250ZXh0ID0gbmV3IERlc2NyaXB0aW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNzQsIFhEb2NQYXJzZXIuUlVMRV9kZXNjcmlwdGlvbik7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDc1NTtcblx0XHRcdHRoaXMuZGVzY3JpcHRpb25MaW5lKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGRlc2NyaXB0aW9uTGluZSgpOiBEZXNjcmlwdGlvbkxpbmVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEZXNjcmlwdGlvbkxpbmVDb250ZXh0ID0gbmV3IERlc2NyaXB0aW9uTGluZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDc2LCBYRG9jUGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA3NzE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuSW50ZWdlckxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuRmxvYXRpbmdQb2ludExpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuQm9vbGVhbkxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5TdHJpbmdMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLklEOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLlNQQUNFOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5NSU5VUzpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5GT1JXQVJEX1NMQVNIOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkNPTE9OOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLlBFUklPRDpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5CUkFDRV9PUEVOOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkJSQUNFX0NMT1NFOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzU3O1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uTGluZVN0YXJ0KCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3NjE7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdHdoaWxlICgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NQYXJzZXIuSW50ZWdlckxpdGVyYWwpIHwgKDEgPDwgWERvY1BhcnNlci5GbG9hdGluZ1BvaW50TGl0ZXJhbCkgfCAoMSA8PCBYRG9jUGFyc2VyLkJvb2xlYW5MaXRlcmFsKSB8ICgxIDw8IFhEb2NQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jUGFyc2VyLlN0cmluZ0xpdGVyYWwpIHwgKDEgPDwgWERvY1BhcnNlci5OdWxsTGl0ZXJhbCkgfCAoMSA8PCBYRG9jUGFyc2VyLklEKSB8ICgxIDw8IFhEb2NQYXJzZXIuU1BBQ0UpIHwgKDEgPDwgWERvY1BhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgWERvY1BhcnNlci5BVCkgfCAoMSA8PCBYRG9jUGFyc2VyLk1JTlVTKSB8ICgxIDw8IFhEb2NQYXJzZXIuRk9SV0FSRF9TTEFTSCkgfCAoMSA8PCBYRG9jUGFyc2VyLkNPTE9OKSB8ICgxIDw8IFhEb2NQYXJzZXIuUEVSSU9EKSB8ICgxIDw8IFhEb2NQYXJzZXIuSU5MSU5FX1RBR19TVEFSVCkgfCAoMSA8PCBYRG9jUGFyc2VyLkJSQUNFX09QRU4pIHwgKDEgPDwgWERvY1BhcnNlci5CUkFDRV9DTE9TRSkpKSAhPT0gMCkpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NTg7XG5cdFx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbkxpbmVFbGVtZW50KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzYzO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLklOTElORV9UQUdfU1RBUlQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3NjQ7XG5cdFx0XHRcdHRoaXMuaW5saW5lVGFnKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3Njg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdHdoaWxlICgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFhEb2NQYXJzZXIuSW50ZWdlckxpdGVyYWwpIHwgKDEgPDwgWERvY1BhcnNlci5GbG9hdGluZ1BvaW50TGl0ZXJhbCkgfCAoMSA8PCBYRG9jUGFyc2VyLkJvb2xlYW5MaXRlcmFsKSB8ICgxIDw8IFhEb2NQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbCkgfCAoMSA8PCBYRG9jUGFyc2VyLlN0cmluZ0xpdGVyYWwpIHwgKDEgPDwgWERvY1BhcnNlci5OdWxsTGl0ZXJhbCkgfCAoMSA8PCBYRG9jUGFyc2VyLklEKSB8ICgxIDw8IFhEb2NQYXJzZXIuU1BBQ0UpIHwgKDEgPDwgWERvY1BhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgWERvY1BhcnNlci5BVCkgfCAoMSA8PCBYRG9jUGFyc2VyLk1JTlVTKSB8ICgxIDw8IFhEb2NQYXJzZXIuRk9SV0FSRF9TTEFTSCkgfCAoMSA8PCBYRG9jUGFyc2VyLkNPTE9OKSB8ICgxIDw8IFhEb2NQYXJzZXIuUEVSSU9EKSB8ICgxIDw8IFhEb2NQYXJzZXIuSU5MSU5FX1RBR19TVEFSVCkgfCAoMSA8PCBYRG9jUGFyc2VyLkJSQUNFX09QRU4pIHwgKDEgPDwgWERvY1BhcnNlci5CUkFDRV9DTE9TRSkpKSAhPT0gMCkpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3NjU7XG5cdFx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbkxpbmVFbGVtZW50KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzcwO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVTdGFydCgpOiBEZXNjcmlwdGlvbkxpbmVTdGFydENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IERlc2NyaXB0aW9uTGluZVN0YXJ0Q29udGV4dCA9IG5ldyBEZXNjcmlwdGlvbkxpbmVTdGFydENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDc4LCBYRG9jUGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lU3RhcnQpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0bGV0IF9hbHQ6IG51bWJlcjtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDc3NDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVhEb2NQYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzczO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA3Nzc7IFxuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IDE7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHN3aXRjaCAoX2FsdCkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzc2O1xuXHRcdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25UZXh0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc3OTsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEzOSx0aGlzLl9jdHgpO1xuXHRcdFx0fSB3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzg2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE0MSx0aGlzLl9jdHgpO1xuXHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc4NDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0XHRcdGNhc2UgWERvY1BhcnNlci5JbnRlZ2VyTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NQYXJzZXIuRmxvYXRpbmdQb2ludExpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkJvb2xlYW5MaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1BhcnNlci5DaGFyYWN0ZXJMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1BhcnNlci5TdHJpbmdMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1BhcnNlci5OdWxsTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NQYXJzZXIuSUQ6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jUGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdFx0XHRjYXNlIFhEb2NQYXJzZXIuTUlOVVM6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkZPUldBUkRfU0xBU0g6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkNPTE9OOlxuXHRcdFx0XHRcdGNhc2UgWERvY1BhcnNlci5QRVJJT0Q6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkJSQUNFX09QRU46XG5cdFx0XHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkJSQUNFX0NMT1NFOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc4MTtcblx0XHRcdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25UZXh0KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFhEb2NQYXJzZXIuU1BBQ0U6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzgyO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgWERvY1BhcnNlci5BVDpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3ODM7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuQVQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzg4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNDEsdGhpcy5fY3R4KTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KCk6IERlc2NyaXB0aW9uVGV4dENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IERlc2NyaXB0aW9uVGV4dENvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25UZXh0Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgODAsIFhEb2NQYXJzZXIuUlVMRV9kZXNjcmlwdGlvblRleHQpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzk4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc4OTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLlRFWFRfQ09OVEVOVCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuSUQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3OTA7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5JRCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuRk9SV0FSRF9TTEFTSDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMyk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc5MTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkZPUldBUkRfU0xBU0gpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkJSQUNFX09QRU46XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDQpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3OTI7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5CUkFDRV9PUEVOKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1BhcnNlci5CUkFDRV9DTE9TRTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc5Mztcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkJSQUNFX0NMT1NFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1BhcnNlci5DT0xPTjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc5NDtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1BhcnNlci5NSU5VUzpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNyk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc5NTtcblx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLk1JTlVTKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgWERvY1BhcnNlci5QRVJJT0Q6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDgpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3OTY7XG5cdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5QRVJJT0QpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkludGVnZXJMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkZsb2F0aW5nUG9pbnRMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkJvb2xlYW5MaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkNoYXJhY3RlckxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuU3RyaW5nTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5OdWxsTGl0ZXJhbDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgOSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc5Nztcblx0XHRcdFx0dGhpcy5saXRlcmFsKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGRlc2NyaXB0aW9uTGluZUVsZW1lbnQoKTogRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0ID0gbmV3IERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA4MiwgWERvY1BhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZUVsZW1lbnQpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gODAyO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLklOTElORV9UQUdfU1RBUlQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MDA7XG5cdFx0XHRcdHRoaXMuaW5saW5lVGFnKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuSW50ZWdlckxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuRmxvYXRpbmdQb2ludExpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuQm9vbGVhbkxpdGVyYWw6XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbDpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5TdHJpbmdMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLklEOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLlNQQUNFOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5BVDpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5NSU5VUzpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5GT1JXQVJEX1NMQVNIOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkNPTE9OOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLlBFUklPRDpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5CUkFDRV9PUEVOOlxuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkJSQUNFX0NMT1NFOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODAxO1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uTGluZVRleHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lVGV4dCgpOiBEZXNjcmlwdGlvbkxpbmVUZXh0Q29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogRGVzY3JpcHRpb25MaW5lVGV4dENvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25MaW5lVGV4dENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDg0LCBYRG9jUGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lVGV4dCk7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA4MDc7IFxuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IDE7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHN3aXRjaCAoX2FsdCkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4MDc7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdFx0XHRjYXNlIFhEb2NQYXJzZXIuSW50ZWdlckxpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkZsb2F0aW5nUG9pbnRMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgWERvY1BhcnNlci5Cb29sZWFuTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NQYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NQYXJzZXIuU3RyaW5nTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFhEb2NQYXJzZXIuTnVsbExpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jUGFyc2VyLklEOlxuXHRcdFx0XHRcdGNhc2UgWERvY1BhcnNlci5URVhUX0NPTlRFTlQ6XG5cdFx0XHRcdFx0Y2FzZSBYRG9jUGFyc2VyLk1JTlVTOlxuXHRcdFx0XHRcdGNhc2UgWERvY1BhcnNlci5GT1JXQVJEX1NMQVNIOlxuXHRcdFx0XHRcdGNhc2UgWERvY1BhcnNlci5DT0xPTjpcblx0XHRcdFx0XHRjYXNlIFhEb2NQYXJzZXIuUEVSSU9EOlxuXHRcdFx0XHRcdGNhc2UgWERvY1BhcnNlci5CUkFDRV9PUEVOOlxuXHRcdFx0XHRcdGNhc2UgWERvY1BhcnNlci5CUkFDRV9DTE9TRTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4MDQ7XG5cdFx0XHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uVGV4dCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBYRG9jUGFyc2VyLlNQQUNFOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgwNTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFhEb2NQYXJzZXIuQVQ6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODA2O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLkFUKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgwOTsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE0NSx0aGlzLl9jdHgpO1xuXHRcdFx0fSB3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGlubGluZVRhZygpOiBJbmxpbmVUYWdDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBJbmxpbmVUYWdDb250ZXh0ID0gbmV3IElubGluZVRhZ0NvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDg2LCBYRG9jUGFyc2VyLlJVTEVfaW5saW5lVGFnKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDgxMTtcblx0XHRcdHRoaXMubWF0Y2goWERvY1BhcnNlci5JTkxJTkVfVEFHX1NUQVJUKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA4MTI7XG5cdFx0XHR0aGlzLmlubGluZVRhZ05hbWUoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA4MTM7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDgxNTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCgoKF9sYSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IF9sYSkgJiAoKDEgPDwgWERvY1BhcnNlci5JRCkgfCAoMSA8PCBYRG9jUGFyc2VyLk5FV0xJTkUpIHwgKDEgPDwgWERvY1BhcnNlci5TUEFDRSkgfCAoMSA8PCBYRG9jUGFyc2VyLlRFWFRfQ09OVEVOVCkgfCAoMSA8PCBYRG9jUGFyc2VyLkZPUldBUkRfU0xBU0gpIHwgKDEgPDwgWERvY1BhcnNlci5QRVJJT0QpIHwgKDEgPDwgWERvY1BhcnNlci5CUkFDRV9PUEVOKSkpICE9PSAwKSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MTQ7XG5cdFx0XHRcdHRoaXMuaW5saW5lVGFnQm9keSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA4MTc7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuQlJBQ0VfQ0xPU0UpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBpbmxpbmVUYWdOYW1lKCk6IElubGluZVRhZ05hbWVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBJbmxpbmVUYWdOYW1lQ29udGV4dCA9IG5ldyBJbmxpbmVUYWdOYW1lQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgODgsIFhEb2NQYXJzZXIuUlVMRV9pbmxpbmVUYWdOYW1lKTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gODE5O1xuXHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGlubGluZVRhZ0JvZHkoKTogSW5saW5lVGFnQm9keUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IElubGluZVRhZ0JvZHlDb250ZXh0ID0gbmV3IElubGluZVRhZ0JvZHlDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA5MCwgWERvY1BhcnNlci5SVUxFX2lubGluZVRhZ0JvZHkpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gODIyOyBcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgyMTtcblx0XHRcdFx0dGhpcy5icmFjZUJvZHkoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MjQ7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fSB3aGlsZSAoICgoKF9sYSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IF9sYSkgJiAoKDEgPDwgWERvY1BhcnNlci5JRCkgfCAoMSA8PCBYRG9jUGFyc2VyLk5FV0xJTkUpIHwgKDEgPDwgWERvY1BhcnNlci5TUEFDRSkgfCAoMSA8PCBYRG9jUGFyc2VyLlRFWFRfQ09OVEVOVCkgfCAoMSA8PCBYRG9jUGFyc2VyLkZPUldBUkRfU0xBU0gpIHwgKDEgPDwgWERvY1BhcnNlci5QRVJJT0QpIHwgKDEgPDwgWERvY1BhcnNlci5CUkFDRV9PUEVOKSkpICE9PSAwKSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBicmFjZUV4cHJlc3Npb24oKTogQnJhY2VFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogQnJhY2VFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBCcmFjZUV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA5MiwgWERvY1BhcnNlci5SVUxFX2JyYWNlRXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA4MjY7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuQlJBQ0VfT1BFTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gODMwO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR3aGlsZSAoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jUGFyc2VyLklEKSB8ICgxIDw8IFhEb2NQYXJzZXIuTkVXTElORSkgfCAoMSA8PCBYRG9jUGFyc2VyLlNQQUNFKSB8ICgxIDw8IFhEb2NQYXJzZXIuVEVYVF9DT05URU5UKSB8ICgxIDw8IFhEb2NQYXJzZXIuRk9SV0FSRF9TTEFTSCkgfCAoMSA8PCBYRG9jUGFyc2VyLlBFUklPRCkgfCAoMSA8PCBYRG9jUGFyc2VyLkJSQUNFX09QRU4pKSkgIT09IDApKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gODI3O1xuXHRcdFx0XHR0aGlzLmJyYWNlQm9keSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgzMjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA4MzM7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuQlJBQ0VfQ0xPU0UpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBicmFjZUJvZHkoKTogQnJhY2VCb2R5Q29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogQnJhY2VCb2R5Q29udGV4dCA9IG5ldyBCcmFjZUJvZHlDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA5NCwgWERvY1BhcnNlci5SVUxFX2JyYWNlQm9keSk7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLnN0YXRlID0gODQ0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBYRG9jUGFyc2VyLkJSQUNFX09QRU46XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MzU7XG5cdFx0XHRcdHRoaXMuYnJhY2VFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuSUQ6XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuTkVXTElORTpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5TUEFDRTpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5URVhUX0NPTlRFTlQ6XG5cdFx0XHRjYXNlIFhEb2NQYXJzZXIuRk9SV0FSRF9TTEFTSDpcblx0XHRcdGNhc2UgWERvY1BhcnNlci5QRVJJT0Q6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MzY7XG5cdFx0XHRcdHRoaXMuYnJhY2VUZXh0KCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4NDE7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE0OSx0aGlzLl9jdHgpO1xuXHRcdFx0XHR3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICkge1xuXHRcdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODM3O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChYRG9jUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgzODtcblx0XHRcdFx0XHRcdHRoaXMuYnJhY2VUZXh0KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODQzO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTQ5LHRoaXMuX2N0eCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgYnJhY2VUZXh0KCk6IEJyYWNlVGV4dENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEJyYWNlVGV4dENvbnRleHQgPSBuZXcgQnJhY2VUZXh0Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOTYsIFhEb2NQYXJzZXIuUlVMRV9icmFjZVRleHQpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gODQ2O1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoICEoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBYRG9jUGFyc2VyLklEKSB8ICgxIDw8IFhEb2NQYXJzZXIuTkVXTElORSkgfCAoMSA8PCBYRG9jUGFyc2VyLlNQQUNFKSB8ICgxIDw8IFhEb2NQYXJzZXIuVEVYVF9DT05URU5UKSB8ICgxIDw8IFhEb2NQYXJzZXIuRk9SV0FSRF9TTEFTSCkgfCAoMSA8PCBYRG9jUGFyc2VyLlBFUklPRCkpKSAhPT0gMCkpICkge1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVySW5saW5lKHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHR0aGlzLm1hdGNoZWRFT0YgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IElkZW50aWZpZXJDb250ZXh0ID0gbmV3IElkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA5OCwgWERvY1BhcnNlci5SVUxFX2lkZW50aWZpZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA4NDg7XG5cdFx0XHR0aGlzLm1hdGNoKFhEb2NQYXJzZXIuSUQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblxuXHRwdWJsaWMgc2VtcHJlZChfbG9jYWxjdHg6IFJ1bGVDb250ZXh0LCBydWxlSW5kZXg6IG51bWJlciwgcHJlZEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRzd2l0Y2ggKHJ1bGVJbmRleCkge1xuXHRcdGNhc2UgMTA6XG5cdFx0XHRyZXR1cm4gdGhpcy50eXBlX3NlbXByZWQoX2xvY2FsY3R4IGFzIFR5cGVDb250ZXh0LCBwcmVkSW5kZXgpO1xuXG5cdFx0Y2FzZSAyMDpcblx0XHRcdHJldHVybiB0aGlzLmFycmF5VHlwZV9zZW1wcmVkKF9sb2NhbGN0eCBhcyBBcnJheVR5cGVDb250ZXh0LCBwcmVkSW5kZXgpO1xuXG5cdFx0Y2FzZSAyODpcblx0XHRcdHJldHVybiB0aGlzLmV4cHJlc3Npb25fc2VtcHJlZChfbG9jYWxjdHggYXMgRXhwcmVzc2lvbkNvbnRleHQsIHByZWRJbmRleCk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHByaXZhdGUgdHlwZV9zZW1wcmVkKF9sb2NhbGN0eDogVHlwZUNvbnRleHQsIHByZWRJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0c3dpdGNoIChwcmVkSW5kZXgpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gdGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRwcml2YXRlIGFycmF5VHlwZV9zZW1wcmVkKF9sb2NhbGN0eDogQXJyYXlUeXBlQ29udGV4dCwgcHJlZEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRzd2l0Y2ggKHByZWRJbmRleCkge1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiB0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgMSk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHByaXZhdGUgZXhwcmVzc2lvbl9zZW1wcmVkKF9sb2NhbGN0eDogRXhwcmVzc2lvbkNvbnRleHQsIHByZWRJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0c3dpdGNoIChwcmVkSW5kZXgpIHtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gdGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDcpO1xuXG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA2KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBfc2VyaWFsaXplZEFUTlNlZ21lbnRzOiBudW1iZXIgPSAyO1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBfc2VyaWFsaXplZEFUTlNlZ21lbnQwOiBzdHJpbmcgPVxuXHRcdFwiXFx4MDNcXHVBRjZGXFx1ODMyMFxcdTQ3OURcXHVCNzVDXFx1NDg4MFxcdTE2MDVcXHUxOTFDXFx1QUIzN1xceDAzI1xcdTAzNTVcXHgwNFxceDAyXCIrXG5cdFx0XCJcXHRcXHgwMlxceDA0XFx4MDNcXHRcXHgwM1xceDA0XFx4MDRcXHRcXHgwNFxceDA0XFx4MDVcXHRcXHgwNVxceDA0XFx4MDZcXHRcXHgwNlxceDA0XFx4MDdcIitcblx0XHRcIlxcdFxceDA3XFx4MDRcXGJcXHRcXGJcXHgwNFxcdFxcdFxcdFxceDA0XFxuXFx0XFxuXFx4MDRcXHZcXHRcXHZcXHgwNFxcZlxcdFxcZlxceDA0XFxyXFx0XFxyXFx4MDRcIitcblx0XHRcIlxceDBFXFx0XFx4MEVcXHgwNFxceDBGXFx0XFx4MEZcXHgwNFxceDEwXFx0XFx4MTBcXHgwNFxceDExXFx0XFx4MTFcXHgwNFxceDEyXFx0XFx4MTJcXHgwNFwiK1xuXHRcdFwiXFx4MTNcXHRcXHgxM1xceDA0XFx4MTRcXHRcXHgxNFxceDA0XFx4MTVcXHRcXHgxNVxceDA0XFx4MTZcXHRcXHgxNlxceDA0XFx4MTdcXHRcXHgxN1xceDA0XCIrXG5cdFx0XCJcXHgxOFxcdFxceDE4XFx4MDRcXHgxOVxcdFxceDE5XFx4MDRcXHgxQVxcdFxceDFBXFx4MDRcXHgxQlxcdFxceDFCXFx4MDRcXHgxQ1xcdFxceDFDXFx4MDRcIitcblx0XHRcIlxceDFEXFx0XFx4MURcXHgwNFxceDFFXFx0XFx4MUVcXHgwNFxceDFGXFx0XFx4MUZcXHgwNCBcXHQgXFx4MDQhXFx0IVxceDA0XFxcIlxcdFxcXCJcXHgwNCNcIitcblx0XHRcIlxcdCNcXHgwNCRcXHQkXFx4MDQlXFx0JVxceDA0JlxcdCZcXHgwNFxcJ1xcdFxcJ1xceDA0KFxcdChcXHgwNClcXHQpXFx4MDQqXFx0KlxceDA0K1xcdCtcIitcblx0XHRcIlxceDA0LFxcdCxcXHgwNC1cXHQtXFx4MDQuXFx0LlxceDA0L1xcdC9cXHgwNDBcXHQwXFx4MDQxXFx0MVxceDA0MlxcdDJcXHgwNDNcXHQzXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAzXFx4MDJcXHgwNVxceDAyalxcblxceDAyXFx4MDNcXHgwMlxceDAzXFx4MDJcXHgwNVxceDAyblxcblxceDAyXFx4MDNcXHgwM1wiK1xuXHRcdFwiXFx4MDdcXHgwM3FcXG5cXHgwM1xcZlxceDAzXFx4MEVcXHgwM3RcXHZcXHgwM1xceDAzXFx4MDNcXHgwM1xceDAzXFx4MDNcXHgwNFxceDAzXFx4MDRcXHgwM1wiK1xuXHRcdFwiXFx4MDVcXHgwM1xceDA1XFx4MDNcXHgwNVxceDA3XFx4MDV9XFxuXFx4MDVcXGZcXHgwNVxceDBFXFx4MDVcXHg4MFxcdlxceDA1XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHg5MVxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcIitcblx0XHRcIlxceDA1XFx4MDZcXHg5NVxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1wiK1xuXHRcdFwiXFx4MDZcXHgwNVxceDA2XFx4QTdcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlwiK1xuXHRcdFwiXFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhCM1xcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVwiK1xuXHRcdFwiXFx4MDZcXHhCN1xcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlwiK1xuXHRcdFwiXFx4QkZcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEMzXFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhDN1wiK1xuXHRcdFwiXFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhDQlxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlwiK1xuXHRcdFwiXFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4RDNcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEQ3XFxuXFx4MDZcXHgwM1wiK1xuXHRcdFwiXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDA1XFx4MDZcXHhFM1xcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4RTdcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XCIrXG5cdFx0XCJcXHgwNVxceDA2XFx4RUJcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEVGXFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEY5XFxuXFx4MDZcXHgwM1xceDA2XCIrXG5cdFx0XCJcXHgwM1xceDA2XFx4MDVcXHgwNlxceEZEXFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxcdTAxMDNcIitcblx0XHRcIlxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx1MDEwN1xcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx1MDEwRlxcblxceDA2XFx4MDNcXHgwN1xceDAzXFx4MDdcXHgwM1xceDA3XFx4MDNcXGJcIitcblx0XHRcIlxceDAzXFxiXFx4MDNcXGJcXHgwNVxcYlxcdTAxMTdcXG5cXGJcXHgwM1xcdFxceDAzXFx0XFx4MDNcXHRcXHgwM1xcblxceDAzXFxuXFx4MDNcXG5cXHgwNlxcblwiK1xuXHRcdFwiXFx1MDExRlxcblxcblxcclxcblxceDBFXFxuXFx1MDEyMFxceDAzXFxuXFx4MDNcXG5cXHgwM1xcblxceDA2XFxuXFx1MDEyNlxcblxcblxcclxcblxceDBFXFxuXCIrXG5cdFx0XCJcXHUwMTI3XFx4MDVcXG5cXHUwMTJBXFxuXFxuXFx4MDNcXHZcXHgwM1xcdlxceDA1XFx2XFx1MDEyRVxcblxcdlxceDAzXFxmXFx4MDNcXGZcXHgwM1xcZlxceDAzXCIrXG5cdFx0XCJcXGZcXHgwM1xcZlxceDAzXFxmXFx4MDNcXGZcXHgwM1xcZlxceDAzXFxmXFx4MDVcXGZcXHUwMTM5XFxuXFxmXFx4MDNcXGZcXHgwM1xcZlxceDA1XFxmXFx1MDEzRFwiK1xuXHRcdFwiXFxuXFxmXFx4MDNcXGZcXHgwM1xcZlxceDA1XFxmXFx1MDE0MVxcblxcZlxceDAzXFxmXFx4MDdcXGZcXHUwMTQ0XFxuXFxmXFxmXFxmXFx4MEVcXGZcXHUwMTQ3XCIrXG5cdFx0XCJcXHZcXGZcXHgwM1xcclxceDAzXFxyXFx4MDNcXHJcXHgwM1xceDBFXFx4MDVcXHgwRVxcdTAxNERcXG5cXHgwRVxceDAzXFx4MEVcXHgwM1xceDBFXFx4MDVcIitcblx0XHRcIlxceDBFXFx1MDE1MVxcblxceDBFXFx4MDNcXHgwRVxceDAzXFx4MEVcXHgwNVxceDBFXFx1MDE1NVxcblxceDBFXFx4MDNcXHgwRVxceDAzXFx4MEVcXHgwM1wiK1xuXHRcdFwiXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxNUJcXG5cXHgwRlxceDAzXFx4MEZcXHgwM1xceDBGXFx4MDVcXHgwRlxcdTAxNUZcXG5cXHgwRlxceDAzXCIrXG5cdFx0XCJcXHgwRlxceDA2XFx4MEZcXHUwMTYyXFxuXFx4MEZcXHJcXHgwRlxceDBFXFx4MEZcXHUwMTYzXFx4MDNcXHgxMFxceDAzXFx4MTBcXHgwNVxceDEwXFx1MDE2OFwiK1xuXHRcdFwiXFxuXFx4MTBcXHgwM1xceDExXFx4MDNcXHgxMVxceDA1XFx4MTFcXHUwMTZDXFxuXFx4MTFcXHgwM1xceDEyXFx4MDNcXHgxMlxceDA1XFx4MTJcXHUwMTcwXCIrXG5cdFx0XCJcXG5cXHgxMlxceDAzXFx4MTJcXHgwM1xceDEyXFx4MDVcXHgxMlxcdTAxNzRcXG5cXHgxMlxceDAzXFx4MTJcXHgwM1xceDEyXFx4MDNcXHgxM1xceDAzXCIrXG5cdFx0XCJcXHgxM1xceDA1XFx4MTNcXHUwMTdBXFxuXFx4MTNcXHgwM1xceDEzXFx4MDVcXHgxM1xcdTAxN0RcXG5cXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXFx1MDE4MFwiK1xuXHRcdFwiXFxuXFx4MTNcXHgwM1xceDEzXFx4MDNcXHgxM1xceDA1XFx4MTNcXHUwMTg0XFxuXFx4MTNcXHgwM1xceDEzXFx4MDNcXHgxM1xceDA1XFx4MTNcXHUwMTg4XCIrXG5cdFx0XCJcXG5cXHgxM1xceDAzXFx4MTNcXHgwM1xceDEzXFx4MDNcXHgxM1xceDA1XFx4MTNcXHUwMThEXFxuXFx4MTNcXHgwM1xceDEzXFx4MDNcXHgxM1xceDA1XCIrXG5cdFx0XCJcXHgxM1xcdTAxOTFcXG5cXHgxM1xceDAzXFx4MTNcXHgwM1xceDEzXFx4MDVcXHgxM1xcdTAxOTVcXG5cXHgxM1xceDAzXFx4MTRcXHgwM1xceDE0XFx4MDNcIitcblx0XHRcIlxceDE0XFx4MDVcXHgxNFxcdTAxOUFcXG5cXHgxNFxceDAzXFx4MTRcXHgwN1xceDE0XFx1MDE5RFxcblxceDE0XFxmXFx4MTRcXHgwRVxceDE0XFx1MDFBMFwiK1xuXHRcdFwiXFx2XFx4MTRcXHgwM1xceDE1XFx4MDNcXHgxNVxceDA1XFx4MTVcXHUwMUE0XFxuXFx4MTVcXHgwM1xceDE1XFx4MDNcXHgxNVxceDA1XFx4MTVcXHUwMUE4XCIrXG5cdFx0XCJcXG5cXHgxNVxceDAzXFx4MTVcXHgwNVxceDE1XFx1MDFBQlxcblxceDE1XFx4MDNcXHgxNlxceDAzXFx4MTZcXHgwM1xceDE2XFx4MDVcXHgxNlxcdTAxQjBcIitcblx0XHRcIlxcblxceDE2XFx4MDNcXHgxNlxceDA1XFx4MTZcXHUwMUIzXFxuXFx4MTZcXHgwM1xceDE2XFx4MDVcXHgxNlxcdTAxQjZcXG5cXHgxNlxceDAzXFx4MTZcIitcblx0XHRcIlxceDA1XFx4MTZcXHUwMUI5XFxuXFx4MTZcXHgwM1xceDE2XFx4MDNcXHgxNlxceDA1XFx4MTZcXHUwMUJEXFxuXFx4MTZcXHgwM1xceDE2XFx4MDVcXHgxNlwiK1xuXHRcdFwiXFx1MDFDMFxcblxceDE2XFx4MDNcXHgxNlxceDA1XFx4MTZcXHUwMUMzXFxuXFx4MTZcXHgwM1xceDE2XFx4MDdcXHgxNlxcdTAxQzZcXG5cXHgxNlxcZlwiK1xuXHRcdFwiXFx4MTZcXHgwRVxceDE2XFx1MDFDOVxcdlxceDE2XFx4MDNcXHgxNlxceDA1XFx4MTZcXHUwMUNDXFxuXFx4MTZcXHgwM1xceDE2XFx4MDVcXHgxNlxcdTAxQ0ZcIitcblx0XHRcIlxcblxceDE2XFx4MDNcXHgxNlxceDA1XFx4MTZcXHUwMUQyXFxuXFx4MTZcXHgwM1xceDE2XFx4MDNcXHgxNlxceDAzXFx4MTZcXHgwM1xceDE2XFx4MDNcIitcblx0XHRcIlxceDE2XFx4MDNcXHgxNlxceDAzXFx4MTZcXHgwM1xceDE2XFx4MDNcXHgxNlxceDA1XFx4MTZcXHUwMUREXFxuXFx4MTZcXHgwM1xceDE2XFx4MDNcXHgxNlwiK1xuXHRcdFwiXFx4MDNcXHgxNlxceDA1XFx4MTZcXHUwMUUyXFxuXFx4MTZcXHgwM1xceDE2XFx4MDdcXHgxNlxcdTAxRTVcXG5cXHgxNlxcZlxceDE2XFx4MEVcXHgxNlwiK1xuXHRcdFwiXFx1MDFFOFxcdlxceDE2XFx4MDNcXHgxN1xceDAzXFx4MTdcXHgwNVxceDE3XFx1MDFFQ1xcblxceDE3XFx4MDNcXHgxN1xceDA1XFx4MTdcXHUwMUVGXCIrXG5cdFx0XCJcXG5cXHgxN1xceDAzXFx4MTdcXHgwNVxceDE3XFx1MDFGMlxcblxceDE3XFx4MDNcXHgxN1xceDA1XFx4MTdcXHUwMUY1XFxuXFx4MTdcXHgwM1xceDE3XCIrXG5cdFx0XCJcXHgwNVxceDE3XFx1MDFGOFxcblxceDE3XFx4MDNcXHgxN1xceDA1XFx4MTdcXHUwMUZCXFxuXFx4MTdcXHgwM1xceDE3XFx4MDVcXHgxN1xcdTAxRkVcIitcblx0XHRcIlxcblxceDE3XFx4MDNcXHgxN1xceDAzXFx4MTdcXHgwM1xceDE4XFx4MDNcXHgxOFxceDA1XFx4MThcXHUwMjA0XFxuXFx4MThcXHgwM1xceDE4XFx4MDNcIitcblx0XHRcIlxceDE4XFx4MDVcXHgxOFxcdTAyMDhcXG5cXHgxOFxceDAzXFx4MThcXHgwNVxceDE4XFx1MDIwQlxcblxceDE4XFx4MDNcXHgxOFxceDA1XFx4MThcXHUwMjBFXCIrXG5cdFx0XCJcXG5cXHgxOFxceDAzXFx4MThcXHgwN1xceDE4XFx1MDIxMVxcblxceDE4XFxmXFx4MThcXHgwRVxceDE4XFx1MDIxNFxcdlxceDE4XFx4MDNcXHgxOVxceDAzXCIrXG5cdFx0XCJcXHgxOVxceDA1XFx4MTlcXHUwMjE4XFxuXFx4MTlcXHgwM1xceDE5XFx4MDVcXHgxOVxcdTAyMUJcXG5cXHgxOVxceDAzXFx4MTlcXHgwM1xceDE5XFx4MDVcIitcblx0XHRcIlxceDE5XFx1MDIxRlxcblxceDE5XFx4MDNcXHgxOVxceDAzXFx4MTlcXHgwM1xceDFBXFx4MDNcXHgxQVxceDAzXFx4MUFcXHgwM1xceDFCXFx4MDNcXHgxQlwiK1xuXHRcdFwiXFx4MDNcXHgxQlxceDA2XFx4MUJcXHUwMjI5XFxuXFx4MUJcXHJcXHgxQlxceDBFXFx4MUJcXHUwMjJBXFx4MDNcXHgxQlxceDAzXFx4MUJcXHgwM1xceDFCXCIrXG5cdFx0XCJcXHgwNlxceDFCXFx1MDIzMFxcblxceDFCXFxyXFx4MUJcXHgwRVxceDFCXFx1MDIzMVxceDA1XFx4MUJcXHUwMjM0XFxuXFx4MUJcXHgwM1xceDFDXFx4MDNcIitcblx0XHRcIlxceDFDXFx4MDVcXHgxQ1xcdTAyMzhcXG5cXHgxQ1xceDAzXFx4MURcXHgwM1xceDFEXFx4MDNcXHgxRVxceDAzXFx4MUVcXHgwM1xceDFFXFx4MDNcXHgxRVwiK1xuXHRcdFwiXFx4MDNcXHgxRVxceDAzXFx4MUVcXHgwM1xceDFFXFx4MDVcXHgxRVxcdTAyNDNcXG5cXHgxRVxceDAzXFx4MUVcXHgwM1xceDFFXFx4MDVcXHgxRVxcdTAyNDdcIitcblx0XHRcIlxcblxceDFFXFx4MDNcXHgxRVxceDAzXFx4MUVcXHgwNVxceDFFXFx1MDI0QlxcblxceDFFXFx4MDNcXHgxRVxceDAzXFx4MUVcXHgwM1xceDFFXFx4MDVcIitcblx0XHRcIlxceDFFXFx1MDI1MFxcblxceDFFXFx4MDNcXHgxRVxceDAzXFx4MUVcXHgwNVxceDFFXFx1MDI1NFxcblxceDFFXFx4MDNcXHgxRVxceDA3XFx4MUVcXHUwMjU3XCIrXG5cdFx0XCJcXG5cXHgxRVxcZlxceDFFXFx4MEVcXHgxRVxcdTAyNUFcXHZcXHgxRVxceDAzXFx4MUZcXHgwM1xceDFGXFx4MDNcXHgxRlxceDAzIFxceDAzIFxceDA1XCIrXG5cdFx0XCIgXFx1MDI2MVxcbiBcXHgwMyBcXHgwNSBcXHUwMjY0XFxuIFxceDAzIFxceDA1IFxcdTAyNjdcXG4gXFx4MDMgXFx4MDUgXFx1MDI2QVxcbiBcXHgwM1wiK1xuXHRcdFwiIFxceDAzIFxceDA1IFxcdTAyNkVcXG4gXFx4MDMgXFx4MDUgXFx1MDI3MVxcbiBcXHgwMyBcXHgwNSBcXHUwMjc0XFxuIFxceDAzIFxceDA3IFxcdTAyNzdcIitcblx0XHRcIlxcbiBcXGYgXFx4MEUgXFx1MDI3QVxcdiBcXHgwMyBcXHgwNSBcXHUwMjdEXFxuIFxceDAzIFxceDA1IFxcdTAyODBcXG4gXFx4MDMgXFx4MDUgXFx1MDI4M1wiK1xuXHRcdFwiXFxuIFxceDAzIFxceDAzIFxceDAzIVxceDAzIVxceDA1IVxcdTAyODlcXG4hXFx4MDMhXFx4MDUhXFx1MDI4Q1xcbiFcXHgwMyFcXHgwNSFcXHUwMjhGXCIrXG5cdFx0XCJcXG4hXFx4MDMhXFx4MDUhXFx1MDI5MlxcbiFcXHgwMyFcXHgwNSFcXHUwMjk1XFxuIVxceDAzIVxceDA1IVxcdTAyOThcXG4hXFx4MDMhXFx4MDVcIitcblx0XHRcIiFcXHUwMjlCXFxuIVxceDAzIVxceDAzIVxceDAzXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAyQTFcXG5cXFwiXFx4MDNcXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDJBNVwiK1xuXHRcdFwiXFxuXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAyQThcXG5cXFwiXFx4MDNcXFwiXFx4MDVcXFwiXFx1MDJBQlxcblxcXCJcXHgwM1xcXCJcXHgwN1xcXCJcXHUwMkFFXFxuXFxcIlwiK1xuXHRcdFwiXFxmXFxcIlxceDBFXFxcIlxcdTAyQjFcXHZcXFwiXFx4MDMjXFx4MDMjXFx4MDUjXFx1MDJCNVxcbiNcXHgwMyNcXHgwMyNcXHgwNSNcXHUwMkI5XFxuI1xceDAzXCIrXG5cdFx0XCIjXFx4MDMjXFx4MDMjXFx4MDMjXFx4MDUjXFx1MDJCRlxcbiNcXHgwMyNcXHgwMyNcXHgwNSNcXHUwMkMzXFxuI1xceDAzI1xceDAzI1xceDA1I1wiK1xuXHRcdFwiXFx1MDJDN1xcbiNcXHgwMyRcXHgwMyRcXHgwNSRcXHUwMkNCXFxuJFxceDAzJFxceDA1JFxcdTAyQ0VcXG4kXFx4MDMkXFx4MDUkXFx1MDJEMVxcblwiK1xuXHRcdFwiJFxceDAzJFxceDAzJFxceDA1JFxcdTAyRDVcXG4kXFx4MDMkXFx4MDMkXFx4MDUkXFx1MDJEOVxcbiRcXHgwMyRcXHgwMyRcXHgwMyRcXHgwNSRcIitcblx0XHRcIlxcdTAyREVcXG4kXFx4MDMkXFx4MDMkXFx4MDUkXFx1MDJFMlxcbiRcXHgwMyRcXHgwMyRcXHgwNSRcXHUwMkU2XFxuJFxceDA1JFxcdTAyRThcXG5cIitcblx0XHRcIiRcXHgwMyVcXHgwMyVcXHgwMyZcXHgwMyZcXHgwNSZcXHUwMkVFXFxuJlxceDAzJlxceDAzJlxceDA1JlxcdTAyRjJcXG4mXFx4MDMmXFx4MDMmXCIrXG5cdFx0XCJcXHgwM1xcJ1xceDAzXFwnXFx4MDMoXFx4MDMoXFx4MDcoXFx1MDJGQVxcbihcXGYoXFx4MEUoXFx1MDJGRFxcdihcXHgwMyhcXHgwMyhcXHgwNyhcXHUwMzAxXCIrXG5cdFx0XCJcXG4oXFxmKFxceDBFKFxcdTAzMDRcXHYoXFx4MDUoXFx1MDMwNlxcbihcXHgwMylcXHgwNSlcXHUwMzA5XFxuKVxceDAzKVxceDA2KVxcdTAzMENcIitcblx0XHRcIlxcbilcXHIpXFx4MEUpXFx1MDMwRFxceDAzKVxceDAzKVxceDAzKVxceDA3KVxcdTAzMTNcXG4pXFxmKVxceDBFKVxcdTAzMTZcXHYpXFx4MDMqXFx4MDNcIitcblx0XHRcIipcXHgwMypcXHgwMypcXHgwMypcXHgwMypcXHgwMypcXHgwMypcXHgwMypcXHgwNSpcXHUwMzIxXFxuKlxceDAzK1xceDAzK1xceDA1K1xcdTAzMjVcIitcblx0XHRcIlxcbitcXHgwMyxcXHgwMyxcXHgwMyxcXHgwNixcXHUwMzJBXFxuLFxccixcXHgwRSxcXHUwMzJCXFx4MDMtXFx4MDMtXFx4MDMtXFx4MDMtXFx4MDVcIitcblx0XHRcIi1cXHUwMzMyXFxuLVxceDAzLVxceDAzLVxceDAzLlxceDAzLlxceDAzL1xceDA2L1xcdTAzMzlcXG4vXFxyL1xceDBFL1xcdTAzM0FcXHgwMzBcXHgwM1wiK1xuXHRcdFwiMFxceDA3MFxcdTAzM0ZcXG4wXFxmMFxceDBFMFxcdTAzNDJcXHYwXFx4MDMwXFx4MDMwXFx4MDMxXFx4MDMxXFx4MDMxXFx4MDMxXFx4MDcxXFx1MDM0QVwiK1xuXHRcdFwiXFxuMVxcZjFcXHgwRTFcXHUwMzREXFx2MVxceDA1MVxcdTAzNEZcXG4xXFx4MDMyXFx4MDMyXFx4MDMzXFx4MDMzXFx4MDMzXFx4MDJcXHgwMlxceDA1XCIrXG5cdFx0XCJcXHgxNio6NFxceDAyXFx4MDJcXHgwNFxceDAyXFx4MDZcXHgwMlxcYlxceDAyXFxuXFx4MDJcXGZcXHgwMlxceDBFXFx4MDJcXHgxMFxceDAyXFx4MTJcIitcblx0XHRcIlxceDAyXFx4MTRcXHgwMlxceDE2XFx4MDJcXHgxOFxceDAyXFx4MUFcXHgwMlxceDFDXFx4MDJcXHgxRVxceDAyIFxceDAyXFxcIlxceDAyJFxceDAyJlwiK1xuXHRcdFwiXFx4MDIoXFx4MDIqXFx4MDIsXFx4MDIuXFx4MDIwXFx4MDIyXFx4MDI0XFx4MDI2XFx4MDI4XFx4MDI6XFx4MDI8XFx4MDI+XFx4MDJAXFx4MDJcIitcblx0XHRcIkJcXHgwMkRcXHgwMkZcXHgwMkhcXHgwMkpcXHgwMkxcXHgwMk5cXHgwMlBcXHgwMlJcXHgwMlRcXHgwMlZcXHgwMlhcXHgwMlpcXHgwMlxcXFxcXHgwMlwiK1xuXHRcdFwiXlxceDAyYFxceDAyYlxceDAyZFxceDAyXFx4MDJcXHRcXHgwM1xceDAyXFxuXFx2XFx4MDNcXHgwMlxceDE3XFx4MThcXHgwNFxceDAyXFx4MTBcXHgxMFwiK1xuXHRcdFwiXFx4MTdcXHgxN1xceDAzXFx4MDJcXHgxMFxceDExXFx4MDNcXHgwMlxceDBFXFx4MEZcXHgwM1xceDAyXFx4MDNcXGJcXHgwNVxceDAyXFx0XFxmXFx4MTFcIitcblx0XHRcIlxceDExXFx4MTNcXHgxM1xcdTAzRDhcXHgwMm1cXHgwM1xceDAyXFx4MDJcXHgwMlxceDA0clxceDAzXFx4MDJcXHgwMlxceDAyXFx4MDZ3XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcYnlcXHgwM1xceDAyXFx4MDJcXHgwMlxcblxcdTAxMEVcXHgwM1xceDAyXFx4MDJcXHgwMlxcZlxcdTAxMTBcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MEVcXHUwMTE2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHgxMFxcdTAxMThcXHgwM1xceDAyXFx4MDJcXHgwMlxceDEyXFx1MDEyOVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHgxNFxcdTAxMkRcXHgwM1xceDAyXFx4MDJcXHgwMlxceDE2XFx1MDEzOFxceDAzXFx4MDJcXHgwMlxceDAyXFx4MThcIitcblx0XHRcIlxcdTAxNDhcXHgwM1xceDAyXFx4MDJcXHgwMlxceDFBXFx1MDE0Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx4MUNcXHUwMTU4XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxceDFFXFx1MDE2N1xceDAzXFx4MDJcXHgwMlxceDAyIFxcdTAxNkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcXCJcXHUwMTZEXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMiRcXHUwMTk0XFx4MDNcXHgwMlxceDAyXFx4MDImXFx1MDE5NlxceDAzXFx4MDJcXHgwMlxceDAyKFxcdTAxQTFcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyKlxcdTAxRENcXHgwM1xceDAyXFx4MDJcXHgwMixcXHUwMUU5XFx4MDNcXHgwMlxceDAyXFx4MDIuXFx1MDIwMVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDIwXFx1MDIxNVxceDAzXFx4MDJcXHgwMlxceDAyMlxcdTAyMjJcXHgwM1xceDAyXFx4MDJcXHgwMjRcXHUwMjMzXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMjZcXHUwMjM3XFx4MDNcXHgwMlxceDAyXFx4MDI4XFx1MDIzOVxceDAzXFx4MDJcXHgwMlxceDAyOlxcdTAyNDJcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyPFxcdTAyNUJcXHgwM1xceDAyXFx4MDJcXHgwMj5cXHUwMjVFXFx4MDNcXHgwMlxceDAyXFx4MDJAXFx1MDI4NlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJCXFx1MDI5RVxceDAzXFx4MDJcXHgwMlxceDAyRFxcdTAyQzZcXHgwM1xceDAyXFx4MDJcXHgwMkZcXHUwMkU3XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMkhcXHUwMkU5XFx4MDNcXHgwMlxceDAyXFx4MDJKXFx1MDJFQlxceDAzXFx4MDJcXHgwMlxceDAyTFxcdTAyRjVcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyTlxcdTAzMDVcXHgwM1xceDAyXFx4MDJcXHgwMlBcXHUwMzA4XFx4MDNcXHgwMlxceDAyXFx4MDJSXFx1MDMyMFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJUXFx1MDMyNFxceDAzXFx4MDJcXHgwMlxceDAyVlxcdTAzMjlcXHgwM1xceDAyXFx4MDJcXHgwMlhcXHUwMzJEXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlpcXHUwMzM1XFx4MDNcXHgwMlxceDAyXFx4MDJcXFxcXFx1MDMzOFxceDAzXFx4MDJcXHgwMlxceDAyXlxcdTAzM0NcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyYFxcdTAzNEVcXHgwM1xceDAyXFx4MDJcXHgwMmJcXHUwMzUwXFx4MDNcXHgwMlxceDAyXFx4MDJkXFx1MDM1MlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJmblxceDA3XFx4MDJcXHgwMlxceDAzZ2lcXHgwNVxceDA0XFx4MDNcXHgwMmhqXFx4MDdcXG5cXHgwMlxceDAyaWhcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyaWpcXHgwM1xceDAyXFx4MDJcXHgwMmprXFx4MDNcXHgwMlxceDAyXFx4MDJrbFxceDA3XFx4MDJcXHgwMlxceDAzbG5cXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAybWZcXHgwM1xceDAyXFx4MDJcXHgwMm1nXFx4MDNcXHgwMlxceDAyXFx4MDJuXFx4MDNcXHgwM1xceDAyXFx4MDJcXHgwMm9xXFx4MDVcIitcblx0XHRcIlxceDA2XFx4MDRcXHgwMnBvXFx4MDNcXHgwMlxceDAyXFx4MDJxdFxceDAzXFx4MDJcXHgwMlxceDAycnBcXHgwM1xceDAyXFx4MDJcXHgwMnJzXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMnN1XFx4MDNcXHgwMlxceDAyXFx4MDJ0clxceDAzXFx4MDJcXHgwMlxceDAydXZcXHgwNVxcYlxceDA1XFx4MDJ2XFx4MDVcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyd3hcXHRcXHgwMlxceDAyXFx4MDJ4XFx4MDdcXHgwM1xceDAyXFx4MDJcXHgwMnl+XFx4MDVcXG5cXHgwNlxceDAyXCIrXG5cdFx0XCJ6e1xceDA3XFxuXFx4MDJcXHgwMnt9XFx4MDVcXG5cXHgwNlxceDAyfHpcXHgwM1xceDAyXFx4MDJcXHgwMn1cXHg4MFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJ+fFxceDAzXFx4MDJcXHgwMlxceDAyflxceDdGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg3RlxcdFxceDAzXFx4MDJcXHgwMlxceDAyXFx4ODB+XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxceDgxXFx1MDEwRlxceDA1XFxmXFx4MDdcXHgwMlxceDgyXFx4ODNcXHgwNVxcZlxceDA3XFx4MDJcXHg4M1xceDg0XFx4MDdcIitcblx0XHRcIlxcdlxceDAyXFx4MDJcXHg4NFxceDg1XFx4MDdcXHgwRlxceDAyXFx4MDJcXHg4NVxceDg2XFx4MDdcXHZcXHgwMlxceDAyXFx4ODZcXHg4N1xceDA1TFwiK1xuXHRcdFwiXFwnXFx4MDJcXHg4N1xcdTAxMEZcXHgwM1xceDAyXFx4MDJcXHgwMlxceDg4XFx4ODlcXHgwNVxcZlxceDA3XFx4MDJcXHg4OVxceDhBXFx4MDdcXHZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHg4QVxceDhCXFx4MDVcXHgwRVxcYlxceDAyXFx4OEJcXHUwMTBGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4Q1xceDhEXFx4MDVcXGZcXHgwN1wiK1xuXHRcdFwiXFx4MDJcXHg4RFxceDhFXFx4MDdcXHZcXHgwMlxceDAyXFx4OEVcXHg5MFxceDA1XFx4MEVcXGJcXHgwMlxceDhGXFx4OTFcXHgwN1xcdlxceDAyXFx4MDJcIitcblx0XHRcIlxceDkwXFx4OEZcXHgwM1xceDAyXFx4MDJcXHgwMlxceDkwXFx4OTFcXHgwM1xceDAyXFx4MDJcXHgwMlxceDkxXFx4OTJcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4OTJcXHg5NFxceDA3XFx4MTVcXHgwMlxceDAyXFx4OTNcXHg5NVxceDA3XFx2XFx4MDJcXHgwMlxceDk0XFx4OTNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4OTRcXHg5NVxceDAzXFx4MDJcXHgwMlxceDAyXFx4OTVcXHg5NlxceDAzXFx4MDJcXHgwMlxceDAyXFx4OTZcXHg5N1xceDA1OFxceDFEXFx4MDJcIitcblx0XHRcIlxceDk3XFx1MDEwRlxceDAzXFx4MDJcXHgwMlxceDAyXFx4OThcXHg5OVxceDA1XFxmXFx4MDdcXHgwMlxceDk5XFx4OUFcXHgwN1xcdlxceDAyXFx4MDJcIitcblx0XHRcIlxceDlBXFx4OUJcXHgwNVxceDBFXFxiXFx4MDJcXHg5QlxceDlDXFx4MDdcXHZcXHgwMlxceDAyXFx4OUNcXHg5RFxceDA3XFx4MEZcXHgwMlxceDAyXFx4OURcIitcblx0XHRcIlxceDlFXFx4MDdcXHZcXHgwMlxceDAyXFx4OUVcXHg5RlxceDA1TFxcJ1xceDAyXFx4OUZcXHUwMTBGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhBMFxceEExXCIrXG5cdFx0XCJcXHgwNVxcZlxceDA3XFx4MDJcXHhBMVxceEEyXFx4MDdcXHZcXHgwMlxceDAyXFx4QTJcXHhBM1xceDA1XFx4MEVcXGJcXHgwMlxceEEzXFx4QTRcXHgwN1wiK1xuXHRcdFwiXFx2XFx4MDJcXHgwMlxceEE0XFx4QTZcXHgwN1xceDE1XFx4MDJcXHgwMlxceEE1XFx4QTdcXHgwN1xcdlxceDAyXFx4MDJcXHhBNlxceEE1XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxceEE2XFx4QTdcXHgwM1xceDAyXFx4MDJcXHgwMlxceEE3XFx4QThcXHgwM1xceDAyXFx4MDJcXHgwMlxceEE4XFx4QTlcXHgwNThcIitcblx0XHRcIlxceDFEXFx4MDJcXHhBOVxceEFBXFx4MDdcXHZcXHgwMlxceDAyXFx4QUFcXHhBQlxceDA3XFx4MEZcXHgwMlxceDAyXFx4QUJcXHhBQ1xceDA3XFx2XFx4MDJcIitcblx0XHRcIlxceDAyXFx4QUNcXHhBRFxceDA1TFxcJ1xceDAyXFx4QURcXHUwMTBGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhBRVxceEFGXFx4MDVcXGZcXHgwN1xceDAyXCIrXG5cdFx0XCJcXHhBRlxceEIwXFx4MDdcXHZcXHgwMlxceDAyXFx4QjBcXHhCMlxceDA1XFx4MEVcXGJcXHgwMlxceEIxXFx4QjNcXHgwN1xcdlxceDAyXFx4MDJcXHhCMlwiK1xuXHRcdFwiXFx4QjFcXHgwM1xceDAyXFx4MDJcXHgwMlxceEIyXFx4QjNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEIzXFx4QjRcXHgwM1xceDAyXFx4MDJcXHgwMlxceEI0XCIrXG5cdFx0XCJcXHhCNlxceDA3XFx4MTJcXHgwMlxceDAyXFx4QjVcXHhCN1xceDA3XFx2XFx4MDJcXHgwMlxceEI2XFx4QjVcXHgwM1xceDAyXFx4MDJcXHgwMlxceEI2XCIrXG5cdFx0XCJcXHhCN1xceDAzXFx4MDJcXHgwMlxceDAyXFx4QjdcXHhCOFxceDAzXFx4MDJcXHgwMlxceDAyXFx4QjhcXHhCOVxceDA1XFx4MTZcXGZcXHgwMlxceEI5XCIrXG5cdFx0XCJcXHUwMTBGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCQVxceEJCXFx4MDVcXGZcXHgwN1xceDAyXFx4QkJcXHhCQ1xceDA3XFx2XFx4MDJcXHgwMlxceEJDXCIrXG5cdFx0XCJcXHhCRVxceDA1XFx4MEVcXGJcXHgwMlxceEJEXFx4QkZcXHgwN1xcdlxceDAyXFx4MDJcXHhCRVxceEJEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCRVxceEJGXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxceEJGXFx4QzBcXHgwM1xceDAyXFx4MDJcXHgwMlxceEMwXFx4QzJcXHgwN1xceDEyXFx4MDJcXHgwMlxceEMxXFx4QzNcIitcblx0XHRcIlxceDA3XFx2XFx4MDJcXHgwMlxceEMyXFx4QzFcXHgwM1xceDAyXFx4MDJcXHgwMlxceEMyXFx4QzNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEMzXFx4QzRcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx4QzRcXHhDNlxceDA1XFx4MTZcXGZcXHgwMlxceEM1XFx4QzdcXHgwN1xcdlxceDAyXFx4MDJcXHhDNlxceEM1XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxceEM2XFx4QzdcXHgwM1xceDAyXFx4MDJcXHgwMlxceEM3XFx4QzhcXHgwM1xceDAyXFx4MDJcXHgwMlxceEM4XFx4Q0FcXHgwN1wiK1xuXHRcdFwiXFx4MTVcXHgwMlxceDAyXFx4QzlcXHhDQlxceDA3XFx2XFx4MDJcXHgwMlxceENBXFx4QzlcXHgwM1xceDAyXFx4MDJcXHgwMlxceENBXFx4Q0JcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx4Q0JcXHhDQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx4Q0NcXHhDRFxceDA1OFxceDFEXFx4MDJcXHhDRFxcdTAxMEZcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx4Q0VcXHhDRlxceDA1XFxmXFx4MDdcXHgwMlxceENGXFx4RDBcXHgwN1xcdlxceDAyXFx4MDJcXHhEMFxceEQyXFx4MDVcXHgwRVwiK1xuXHRcdFwiXFxiXFx4MDJcXHhEMVxceEQzXFx4MDdcXHZcXHgwMlxceDAyXFx4RDJcXHhEMVxceDAzXFx4MDJcXHgwMlxceDAyXFx4RDJcXHhEM1xceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHhEM1xceEQ0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhENFxceEQ2XFx4MDdcXHgxMlxceDAyXFx4MDJcXHhENVxceEQ3XFx4MDdcXHZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHhENlxceEQ1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhENlxceEQ3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhEN1xceEQ4XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxceEQ4XFx4RDlcXHgwNVxceDE2XFxmXFx4MDJcXHhEOVxceERBXFx4MDdcXHZcXHgwMlxceDAyXFx4REFcXHhEQlxceDA3XFx4MEZcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhEQlxceERDXFx4MDdcXHZcXHgwMlxceDAyXFx4RENcXHhERFxceDA1TFxcJ1xceDAyXFx4RERcXHUwMTBGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhERVwiK1xuXHRcdFwiXFx4REZcXHgwNVxcZlxceDA3XFx4MDJcXHhERlxceEUwXFx4MDdcXHZcXHgwMlxceDAyXFx4RTBcXHhFMlxceDA1XFx4MEVcXGJcXHgwMlxceEUxXFx4RTNcIitcblx0XHRcIlxceDA3XFx2XFx4MDJcXHgwMlxceEUyXFx4RTFcXHgwM1xceDAyXFx4MDJcXHgwMlxceEUyXFx4RTNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEUzXFx4RTRcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx4RTRcXHhFNlxceDA3XFx4MTJcXHgwMlxceDAyXFx4RTVcXHhFN1xceDA3XFx2XFx4MDJcXHgwMlxceEU2XFx4RTVcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx4RTZcXHhFN1xceDAzXFx4MDJcXHgwMlxceDAyXFx4RTdcXHhFOFxceDAzXFx4MDJcXHgwMlxceDAyXFx4RThcXHhFQVwiK1xuXHRcdFwiXFx4MDVcXHgxNlxcZlxceDAyXFx4RTlcXHhFQlxceDA3XFx2XFx4MDJcXHgwMlxceEVBXFx4RTlcXHgwM1xceDAyXFx4MDJcXHgwMlxceEVBXFx4RUJcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx4RUJcXHhFQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx4RUNcXHhFRVxceDA3XFx4MTVcXHgwMlxceDAyXFx4RURcXHhFRlxceDA3XCIrXG5cdFx0XCJcXHZcXHgwMlxceDAyXFx4RUVcXHhFRFxceDAzXFx4MDJcXHgwMlxceDAyXFx4RUVcXHhFRlxceDAzXFx4MDJcXHgwMlxceDAyXFx4RUZcXHhGMFxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHhGMFxceEYxXFx4MDU4XFx4MURcXHgwMlxceEYxXFx4RjJcXHgwN1xcdlxceDAyXFx4MDJcXHhGMlxceEYzXFx4MDdcXHgwRlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxceEYzXFx4RjRcXHgwN1xcdlxceDAyXFx4MDJcXHhGNFxceEY1XFx4MDVMXFwnXFx4MDJcXHhGNVxcdTAxMEZcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx4RjZcXHhGOFxceDA1XFxmXFx4MDdcXHgwMlxceEY3XFx4RjlcXHgwN1xcdlxceDAyXFx4MDJcXHhGOFxceEY3XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceEY4XFx4RjlcXHgwM1xceDAyXFx4MDJcXHgwMlxceEY5XFx4RkFcXHgwM1xceDAyXFx4MDJcXHgwMlxceEZBXFx4RkNcXHgwN1xceDEyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4RkJcXHhGRFxceDA3XFx2XFx4MDJcXHgwMlxceEZDXFx4RkJcXHgwM1xceDAyXFx4MDJcXHgwMlxceEZDXFx4RkRcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4RkRcXHhGRVxceDAzXFx4MDJcXHgwMlxceDAyXFx4RkVcXHhGRlxceDA1XFx4MTZcXGZcXHgwMlxceEZGXFx1MDEwRlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTAwXFx1MDEwMlxceDA1XFxmXFx4MDdcXHgwMlxcdTAxMDFcXHUwMTAzXFx4MDdcXHZcXHgwMlxceDAyXFx1MDEwMlxcdTAxMDFcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDEwMlxcdTAxMDNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMDNcXHUwMTA0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTA0XCIrXG5cdFx0XCJcXHUwMTA2XFx4MDdcXHgxMlxceDAyXFx4MDJcXHUwMTA1XFx1MDEwN1xceDA3XFx2XFx4MDJcXHgwMlxcdTAxMDZcXHUwMTA1XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxMDZcXHUwMTA3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTA3XFx1MDEwOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwOFxcdTAxMDlcIitcblx0XHRcIlxceDA1XFx4MTZcXGZcXHgwMlxcdTAxMDlcXHUwMTBBXFx4MDdcXHZcXHgwMlxceDAyXFx1MDEwQVxcdTAxMEJcXHgwN1xceDBGXFx4MDJcXHgwMlxcdTAxMEJcIitcblx0XHRcIlxcdTAxMENcXHgwN1xcdlxceDAyXFx4MDJcXHUwMTBDXFx1MDEwRFxceDA1TFxcJ1xceDAyXFx1MDEwRFxcdTAxMEZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDEwRVxceDgxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTBFXFx4ODJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMEVcXHg4OFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTBFXFx4OENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMEVcXHg5OFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwRVxceEEwXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMEVcXHhBRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwRVxceEJBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTBFXCIrXG5cdFx0XCJcXHhDRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwRVxceERFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTBFXFx4RjZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDEwRVxcdTAxMDBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMEZcXHZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMTBcXHUwMTExXFx4MDdcXHJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTExXFx1MDExMlxceDA1ZDNcXHgwMlxcdTAxMTJcXHJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMTNcXHUwMTE3XFx4MDVcIitcblx0XHRcIlxceDEyXFxuXFx4MDJcXHUwMTE0XFx1MDExN1xceDA1XFx4MTBcXHRcXHgwMlxcdTAxMTVcXHUwMTE3XFx4MDVkM1xceDAyXFx1MDExNlxcdTAxMTNcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDExNlxcdTAxMTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMTZcXHUwMTE1XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxMTdcXHgwRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDExOFxcdTAxMTlcXHgwNWQzXFx4MDJcXHUwMTE5XFx1MDExQVxceDA3XFx4MTZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTFBXFx4MTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMUJcXHUwMTFFXFx4MDVcXHgxMFxcdFxceDAyXFx1MDExQ1xcdTAxMURcXHgwN1wiK1xuXHRcdFwiXFx4MTNcXHgwMlxceDAyXFx1MDExRFxcdTAxMUZcXHgwNVxceDE0XFx2XFx4MDJcXHUwMTFFXFx1MDExQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDExRlwiK1xuXHRcdFwiXFx1MDEyMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMFxcdTAxMUVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjBcXHUwMTIxXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxMjFcXHUwMTJBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIyXFx1MDEyNVxceDA1ZDNcXHgwMlxcdTAxMjNcXHUwMTI0XCIrXG5cdFx0XCJcXHgwN1xceDEzXFx4MDJcXHgwMlxcdTAxMjRcXHUwMTI2XFx4MDVcXHgxNFxcdlxceDAyXFx1MDEyNVxcdTAxMjNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDEyNlxcdTAxMjdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjdcXHUwMTI1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTI3XFx1MDEyOFxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTI4XFx1MDEyQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyOVxcdTAxMUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjlcIitcblx0XHRcIlxcdTAxMjJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMkFcXHgxM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyQlxcdTAxMkVcXHgwNVxceDEwXFx0XCIrXG5cdFx0XCJcXHgwMlxcdTAxMkNcXHUwMTJFXFx4MDVkM1xceDAyXFx1MDEyRFxcdTAxMkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMkRcXHUwMTJDXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxMkVcXHgxNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyRlxcdTAxMzBcXGJcXGZcXHgwMVxceDAyXFx1MDEzMFxcdTAxMzlcIitcblx0XHRcIlxceDA1JFxceDEzXFx4MDJcXHUwMTMxXFx1MDEzOVxceDA1XFx4MUFcXHgwRVxceDAyXFx1MDEzMlxcdTAxMzlcXHgwNVxceDFFXFx4MTBcXHgwMlwiK1xuXHRcdFwiXFx1MDEzM1xcdTAxMzlcXHgwNVxcXCJcXHgxMlxceDAyXFx1MDEzNFxcdTAxMzlcXHgwNVxceDE4XFxyXFx4MDJcXHUwMTM1XFx1MDEzOVxceDA1LFwiK1xuXHRcdFwiXFx4MTdcXHgwMlxcdTAxMzZcXHUwMTM5XFx4MDUqXFx4MTZcXHgwMlxcdTAxMzdcXHUwMTM5XFx4MDU0XFx4MUJcXHgwMlxcdTAxMzhcXHUwMTJGXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMzhcXHUwMTMxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTM4XFx1MDEzMlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTM4XFx1MDEzM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzOFxcdTAxMzRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMzhcXHUwMTM1XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxMzhcXHUwMTM2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTM4XFx1MDEzN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzOVwiK1xuXHRcdFwiXFx1MDE0NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzQVxcdTAxM0NcXGZcXHZcXHgwMlxceDAyXFx1MDEzQlxcdTAxM0RcXHgwN1xcdlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxM0NcXHUwMTNCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTNDXFx1MDEzRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzRFxcdTAxM0VcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDEzRVxcdTAxNDBcXHRcXHgwM1xceDAyXFx4MDJcXHUwMTNGXFx1MDE0MVxceDA3XFx2XFx4MDJcXHgwMlxcdTAxNDBcIitcblx0XHRcIlxcdTAxM0ZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNDBcXHUwMTQxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTQxXFx1MDE0MlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTQyXFx1MDE0NFxceDA1XFx4MTZcXGZcXGZcXHUwMTQzXFx1MDEzQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0NFxcdTAxNDdcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0NVxcdTAxNDNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNDVcXHUwMTQ2XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxNDZcXHgxN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0N1xcdTAxNDVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNDhcXHUwMTQ5XFx0XFx4MDRcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTQ5XFx1MDE0QVxceDA1XFx4MUVcXHgxMFxceDAyXFx1MDE0QVxceDE5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTRCXFx1MDE0RFwiK1xuXHRcdFwiXFx4MDVkM1xceDAyXFx1MDE0Q1xcdTAxNEJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNENcXHUwMTREXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTREXCIrXG5cdFx0XCJcXHUwMTRFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTRFXFx1MDE1MFxceDA3XFxcIlxceDAyXFx4MDJcXHUwMTRGXFx1MDE1MVxceDA3XFx2XFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDE1MFxcdTAxNEZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNTBcXHUwMTUxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTUxXFx1MDE1MlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTUyXFx1MDE1NFxceDA1XFx4MUNcXHgwRlxceDAyXFx1MDE1M1xcdTAxNTVcXHgwN1xcdlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxNTRcXHUwMTUzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTU0XFx1MDE1NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1NVxcdTAxNTZcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDE1NlxcdTAxNTdcXHgwNyNcXHgwMlxceDAyXFx1MDE1N1xceDFCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTU4XCIrXG5cdFx0XCJcXHUwMTVBXFx4MDVcXHgxNlxcZlxceDAyXFx1MDE1OVxcdTAxNUJcXHgwN1xcdlxceDAyXFx4MDJcXHUwMTVBXFx1MDE1OVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTVBXFx1MDE1QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1QlxcdTAxNjFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNUNcXHUwMTVFXCIrXG5cdFx0XCJcXHgwN1xceDE0XFx4MDJcXHgwMlxcdTAxNURcXHUwMTVGXFx4MDdcXHZcXHgwMlxceDAyXFx1MDE1RVxcdTAxNURcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE1RVxcdTAxNUZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNUZcXHUwMTYwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTYwXFx1MDE2MlxceDA1XCIrXG5cdFx0XCJcXHgxNlxcZlxceDAyXFx1MDE2MVxcdTAxNUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjJcXHUwMTYzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTYzXCIrXG5cdFx0XCJcXHUwMTYxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTYzXFx1MDE2NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2NFxceDFEXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxNjVcXHUwMTY4XFx4MDUyXFx4MUFcXHgwMlxcdTAxNjZcXHUwMTY4XFx4MDUgXFx4MTFcXHgwMlxcdTAxNjdcXHUwMTY1XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxNjdcXHUwMTY2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTY4XFx4MUZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjlcIitcblx0XHRcIlxcdTAxNkNcXHgwNWQzXFx4MDJcXHUwMTZBXFx1MDE2Q1xceDA3XFxiXFx4MDJcXHgwMlxcdTAxNkJcXHUwMTY5XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxNkJcXHUwMTZBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTZDIVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2RFxcdTAxNkZcXHgwN1xceDFFXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDE2RVxcdTAxNzBcXHgwN1xcdlxceDAyXFx4MDJcXHUwMTZGXFx1MDE2RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2RlxcdTAxNzBcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3MFxcdTAxNzFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNzFcXHUwMTczXFx4MDVcXHgxNlxcZlxceDAyXCIrXG5cdFx0XCJcXHUwMTcyXFx1MDE3NFxceDA3XFx2XFx4MDJcXHgwMlxcdTAxNzNcXHUwMTcyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTczXFx1MDE3NFxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTc0XFx1MDE3NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3NVxcdTAxNzZcXHgwN1xceDFGXFx4MDJcXHgwMlxcdTAxNzZcIitcblx0XHRcIiNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNzdcXHUwMTc5XFx4MDdcXHgxRVxceDAyXFx4MDJcXHUwMTc4XFx1MDE3QVxceDA3XFx2XFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE3OVxcdTAxNzhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNzlcXHUwMTdBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTdBXFx1MDE3Q1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTdCXFx1MDE3RFxceDA1JlxceDE0XFx4MDJcXHUwMTdDXFx1MDE3QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3Q1wiK1xuXHRcdFwiXFx1MDE3RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3RFxcdTAxN0ZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxN0VcXHUwMTgwXFx4MDdcXHZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTdGXFx1MDE3RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3RlxcdTAxODBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxODBcXHUwMTgxXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxODFcXHUwMTgzXFx4MDdcXHgxRlxceDAyXFx4MDJcXHUwMTgyXFx1MDE4NFxceDA3XFx2XFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE4M1xcdTAxODJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxODNcXHUwMTg0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTg0XFx1MDE4NVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTg1XFx1MDE4N1xceDA3XFx4MTlcXHgwMlxceDAyXFx1MDE4NlxcdTAxODhcXHgwN1xcdlxceDAyXFx4MDJcXHUwMTg3XCIrXG5cdFx0XCJcXHUwMTg2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTg3XFx1MDE4OFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4OFxcdTAxODlcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDE4OVxcdTAxOTVcXHgwNVxceDE2XFxmXFx4MDJcXHUwMThBXFx1MDE4Q1xceDA1KFxceDE1XFx4MDJcXHUwMThCXFx1MDE4RFwiK1xuXHRcdFwiXFx4MDdcXHZcXHgwMlxceDAyXFx1MDE4Q1xcdTAxOEJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOENcXHUwMThEXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxOERcXHUwMThFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMThFXFx1MDE5MFxceDA3XFx4MTlcXHgwMlxceDAyXFx1MDE4RlxcdTAxOTFcXHgwN1wiK1xuXHRcdFwiXFx2XFx4MDJcXHgwMlxcdTAxOTBcXHUwMThGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTkwXFx1MDE5MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5MVwiK1xuXHRcdFwiXFx1MDE5MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5MlxcdTAxOTNcXHgwNVxceDE2XFxmXFx4MDJcXHUwMTkzXFx1MDE5NVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTk0XFx1MDE3N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5NFxcdTAxOEFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOTUlXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxOTZcXHUwMTlFXFx4MDUoXFx4MTVcXHgwMlxcdTAxOTdcXHUwMTk5XFx4MDdcXHgxNFxceDAyXFx4MDJcXHUwMTk4XCIrXG5cdFx0XCJcXHUwMTlBXFx4MDdcXHZcXHgwMlxceDAyXFx1MDE5OVxcdTAxOThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOTlcXHUwMTlBXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxOUFcXHUwMTlCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTlCXFx1MDE5RFxceDA1KFxceDE1XFx4MDJcXHUwMTlDXFx1MDE5N1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTlEXFx1MDFBMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5RVxcdTAxOUNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDE5RVxcdTAxOUZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOUZcXCdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQTBcXHUwMTlFXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxQTFcXHUwMUFBXFx4MDVkM1xceDAyXFx1MDFBMlxcdTAxQTRcXHgwN1xcdlxceDAyXFx4MDJcXHUwMUEzXFx1MDFBMlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMUEzXFx1MDFBNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBNFxcdTAxQTVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQTVcIitcblx0XHRcIlxcdTAxQTdcXHgwN1xceDEyXFx4MDJcXHgwMlxcdTAxQTZcXHUwMUE4XFx4MDdcXHZcXHgwMlxceDAyXFx1MDFBN1xcdTAxQTZcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFBN1xcdTAxQThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQThcXHUwMUE5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUE5XFx1MDFBQlwiK1xuXHRcdFwiXFx4MDVcXHgxNlxcZlxceDAyXFx1MDFBQVxcdTAxQTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQUFcXHUwMUFCXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxQUIpXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUFDXFx1MDFBRFxcYlxceDE2XFx4MDFcXHgwMlxcdTAxQURcXHUwMUFGXFx4MDcgXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFBRVxcdTAxQjBcXHgwN1xcblxceDAyXFx4MDJcXHUwMUFGXFx1MDFBRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBRlxcdTAxQjBcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCMFxcdTAxQjJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjFcXHUwMUIzXFx4MDdcXHZcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUIyXFx1MDFCMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCMlxcdTAxQjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjNcXHUwMUI1XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxQjRcXHUwMUI2XFx4MDdcXG5cXHgwMlxceDAyXFx1MDFCNVxcdTAxQjRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjVcIitcblx0XHRcIlxcdTAxQjZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjZcXHUwMUI4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUI3XFx1MDFCOVxceDA1XFx4MTZcIitcblx0XHRcIlxcZlxceDAyXFx1MDFCOFxcdTAxQjdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjhcXHUwMUI5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUI5XFx1MDFDN1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUJBXFx1MDFCQ1xceDA3XFx4MTRcXHgwMlxceDAyXFx1MDFCQlxcdTAxQkRcXHgwN1xcblxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxQkNcXHUwMUJCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUJDXFx1MDFCRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCRFxcdTAxQkZcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDFCRVxcdTAxQzBcXHgwN1xcdlxceDAyXFx4MDJcXHUwMUJGXFx1MDFCRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCRlwiK1xuXHRcdFwiXFx1MDFDMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDMFxcdTAxQzJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQzFcXHUwMUMzXFx4MDdcXG5cXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMUMyXFx1MDFDMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDMlxcdTAxQzNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQzNcXHUwMUM0XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQzRcXHUwMUM2XFx4MDVcXHgxNlxcZlxceDAyXFx1MDFDNVxcdTAxQkFcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDFDNlxcdTAxQzlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQzdcXHUwMUM1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUM3XFx1MDFDOFxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMUM4XFx1MDFDQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDOVxcdTAxQzdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQ0FcIitcblx0XHRcIlxcdTAxQ0NcXHgwN1xcblxceDAyXFx4MDJcXHUwMUNCXFx1MDFDQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDQlxcdTAxQ0NcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFDQ1xcdTAxQ0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQ0RcXHUwMUNGXFx4MDdcXHZcXHgwMlxceDAyXFx1MDFDRVxcdTAxQ0RcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDRVxcdTAxQ0ZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQ0ZcXHUwMUQxXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxRDBcIjtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3NlcmlhbGl6ZWRBVE5TZWdtZW50MTogc3RyaW5nID1cblx0XHRcIlxcdTAxRDJcXHgwN1xcblxceDAyXFx4MDJcXHUwMUQxXFx1MDFEMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFEMVxcdTAxRDJcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFEMlxcdTAxRDNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRDNcXHUwMUREXFx4MDchXFx4MDJcXHgwMlxcdTAxRDRcXHUwMUQ1XCIrXG5cdFx0XCJcXHgwNWQzXFx4MDJcXHUwMUQ1XFx1MDFENlxceDA3IFxceDAyXFx4MDJcXHUwMUQ2XFx1MDFEN1xceDA3IVxceDAyXFx4MDJcXHUwMUQ3XFx1MDFERFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUQ4XFx1MDFEOVxceDA1LFxceDE3XFx4MDJcXHUwMUQ5XFx1MDFEQVxceDA3IFxceDAyXFx4MDJcXHUwMURBXCIrXG5cdFx0XCJcXHUwMURCXFx4MDchXFx4MDJcXHgwMlxcdTAxREJcXHUwMUREXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMURDXFx1MDFBQ1xceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMURDXFx1MDFENFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFEQ1xcdTAxRDhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRERcXHUwMUU2XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxREVcXHUwMURGXFxmXFx4MDNcXHgwMlxceDAyXFx1MDFERlxcdTAxRTFcXHgwNyBcXHgwMlxceDAyXFx1MDFFMFwiK1xuXHRcdFwiXFx1MDFFMlxceDA1XFx4MTZcXGZcXHgwMlxcdTAxRTFcXHUwMUUwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUUxXFx1MDFFMlxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMUUyXFx1MDFFM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFM1xcdTAxRTVcXHgwNyFcXHgwMlxceDAyXFx1MDFFNFxcdTAxREVcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFNVxcdTAxRThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRTZcXHUwMUU0XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxRTZcXHUwMUU3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUU3K1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFOFxcdTAxRTZcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDFFOVxcdTAxRUJcXHgwN1xceDFDXFx4MDJcXHgwMlxcdTAxRUFcXHUwMUVDXFx4MDdcXHZcXHgwMlxceDAyXFx1MDFFQlxcdTAxRUFcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFQlxcdTAxRUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRUNcXHUwMUVFXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxRURcXHUwMUVGXFx4MDdcXG5cXHgwMlxceDAyXFx1MDFFRVxcdTAxRURcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRUVcXHUwMUVGXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxRUZcXHUwMUYxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUYwXFx1MDFGMlxceDA3XFx2XFx4MDJcXHgwMlxcdTAxRjFcIitcblx0XHRcIlxcdTAxRjBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRjFcXHUwMUYyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUYyXFx1MDFGNFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMUYzXFx1MDFGNVxceDA1LlxceDE4XFx4MDJcXHUwMUY0XFx1MDFGM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGNFxcdTAxRjVcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGNVxcdTAxRjdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRjZcXHUwMUY4XFx4MDdcXHZcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUY3XFx1MDFGNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGN1xcdTAxRjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRjhcXHUwMUZBXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxRjlcXHUwMUZCXFx4MDdcXG5cXHgwMlxceDAyXFx1MDFGQVxcdTAxRjlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRkFcIitcblx0XHRcIlxcdTAxRkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRkJcXHUwMUZEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUZDXFx1MDFGRVxceDA3XFx2XFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFGRFxcdTAxRkNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRkRcXHUwMUZFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUZFXFx1MDFGRlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUZGXFx1MDIwMFxceDA3XFx4MURcXHgwMlxceDAyXFx1MDIwMC1cXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMDFcIitcblx0XHRcIlxcdTAyMDNcXHgwNTBcXHgxOVxceDAyXFx1MDIwMlxcdTAyMDRcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjAzXFx1MDIwMlxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMjAzXFx1MDIwNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwNFxcdTAyMTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMDVcXHUwMjA3XCIrXG5cdFx0XCJcXHgwN1xceDE0XFx4MDJcXHgwMlxcdTAyMDZcXHUwMjA4XFx4MDdcXHZcXHgwMlxceDAyXFx1MDIwN1xcdTAyMDZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDIwN1xcdTAyMDhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMDhcXHUwMjBBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjA5XFx1MDIwQlxceDA3XCIrXG5cdFx0XCJcXG5cXHgwMlxceDAyXFx1MDIwQVxcdTAyMDlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMEFcXHUwMjBCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjBCXCIrXG5cdFx0XCJcXHUwMjBEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjBDXFx1MDIwRVxceDA3XFx2XFx4MDJcXHgwMlxcdTAyMERcXHUwMjBDXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyMERcXHUwMjBFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjBFXFx1MDIwRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwRlxcdTAyMTFcIitcblx0XHRcIlxceDA1MFxceDE5XFx4MDJcXHUwMjEwXFx1MDIwNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxMVxcdTAyMTRcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDIxMlxcdTAyMTBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTJcXHUwMjEzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjEzL1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjE0XFx1MDIxMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxNVxcdTAyMTdcXHgwNVxceDE2XFxmXFx4MDJcXHUwMjE2XFx1MDIxOFwiK1xuXHRcdFwiXFx4MDdcXHgxNlxceDAyXFx4MDJcXHUwMjE3XFx1MDIxNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxN1xcdTAyMThcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDIxOFxcdTAyMUFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTlcXHUwMjFCXFx4MDdcXHZcXHgwMlxceDAyXFx1MDIxQVxcdTAyMTlcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDIxQVxcdTAyMUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMUJcXHUwMjFDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjFDXCIrXG5cdFx0XCJcXHUwMjFFXFx4MDdcXHgxMlxceDAyXFx4MDJcXHUwMjFEXFx1MDIxRlxceDA3XFx2XFx4MDJcXHgwMlxcdTAyMUVcXHUwMjFEXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyMUVcXHUwMjFGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjFGXFx1MDIyMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyMFxcdTAyMjFcIitcblx0XHRcIlxceDA1XFx4MTZcXGZcXHgwMlxcdTAyMjExXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjIyXFx1MDIyM1xceDA1ZDNcXHgwMlxcdTAyMjNcXHUwMjI0XCIrXG5cdFx0XCJcXHgwN1xceDE2XFx4MDJcXHgwMlxcdTAyMjQzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjI1XFx1MDIyOFxceDA1ZDNcXHgwMlxcdTAyMjZcXHUwMjI3XCIrXG5cdFx0XCJcXHgwN1xceDEzXFx4MDJcXHgwMlxcdTAyMjdcXHUwMjI5XFx4MDU2XFx4MUNcXHgwMlxcdTAyMjhcXHUwMjI2XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyMjlcXHUwMjJBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjJBXFx1MDIyOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyQVxcdTAyMkJcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDIyQlxcdTAyMzRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMkNcXHUwMjJGXFx4MDUyXFx4MUFcXHgwMlxcdTAyMkRcIitcblx0XHRcIlxcdTAyMkVcXHgwN1xceDEzXFx4MDJcXHgwMlxcdTAyMkVcXHUwMjMwXFx4MDU2XFx4MUNcXHgwMlxcdTAyMkZcXHUwMjJEXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyMzBcXHUwMjMxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjMxXFx1MDIyRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzMVxcdTAyMzJcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzMlxcdTAyMzRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMzNcXHUwMjI1XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyMzNcXHUwMjJDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjM0NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzNVxcdTAyMzhcXHgwNWQzXCIrXG5cdFx0XCJcXHgwMlxcdTAyMzZcXHUwMjM4XFx4MDUyXFx4MUFcXHgwMlxcdTAyMzdcXHUwMjM1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjM3XFx1MDIzNlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjM4N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzOVxcdTAyM0FcXHgwNTpcXHgxRVxceDAyXFx1MDIzQVwiK1xuXHRcdFwiOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzQlxcdTAyM0NcXGJcXHgxRVxceDAxXFx4MDJcXHUwMjNDXFx1MDI0M1xceDA1PFxceDFGXFx4MDJcXHUwMjNEXCIrXG5cdFx0XCJcXHUwMjQzXFx4MDU+IFxceDAyXFx1MDIzRVxcdTAyNDNcXHgwNUAhXFx4MDJcXHUwMjNGXFx1MDI0M1xceDA1RiRcXHgwMlxcdTAyNDBcXHUwMjQzXCIrXG5cdFx0XCJcXHgwNUglXFx4MDJcXHUwMjQxXFx1MDI0M1xceDA1SiZcXHgwMlxcdTAyNDJcXHUwMjNCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjQyXFx1MDIzRFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjQyXFx1MDIzRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0MlxcdTAyM0ZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI0MlxcdTAyNDBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDJcXHUwMjQxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjQzXFx1MDI1OFxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjQ0XFx1MDI0NlxcZlxcdFxceDAyXFx4MDJcXHUwMjQ1XFx1MDI0N1xceDA3XFx2XFx4MDJcXHgwMlxcdTAyNDZcXHUwMjQ1XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDZcXHUwMjQ3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjQ3XFx1MDI0OFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjQ4XFx1MDI0QVxcdFxceDA1XFx4MDJcXHgwMlxcdTAyNDlcXHUwMjRCXFx4MDdcXHZcXHgwMlxceDAyXFx1MDI0QVxcdTAyNDlcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDI0QVxcdTAyNEJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNEJcXHUwMjRDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjRDXCIrXG5cdFx0XCJcXHUwMjU3XFx4MDU6XFx4MUVcXG5cXHUwMjREXFx1MDI0RlxcZlxcYlxceDAyXFx4MDJcXHUwMjRFXFx1MDI1MFxceDA3XFx2XFx4MDJcXHgwMlxcdTAyNEZcIitcblx0XHRcIlxcdTAyNEVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNEZcXHUwMjUwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjUwXFx1MDI1MVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjUxXFx1MDI1M1xcdFxceDA2XFx4MDJcXHgwMlxcdTAyNTJcXHUwMjU0XFx4MDdcXHZcXHgwMlxceDAyXFx1MDI1M1xcdTAyNTJcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1M1xcdTAyNTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTRcXHUwMjU1XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyNTVcXHUwMjU3XFx4MDU6XFx4MUVcXHRcXHUwMjU2XFx1MDI0NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1NlxcdTAyNERcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDI1N1xcdTAyNUFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNThcXHUwMjU2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjU4XCIrXG5cdFx0XCJcXHUwMjU5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjU5O1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1QVxcdTAyNThcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDI1QlxcdTAyNUNcXHRcXHgwNlxceDAyXFx4MDJcXHUwMjVDXFx1MDI1RFxceDA1OlxceDFFXFx4MDJcXHUwMjVEPVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjVFXFx1MDI2MFxceDA3IFxceDAyXFx4MDJcXHUwMjVGXFx1MDI2MVxceDA3XFxuXFx4MDJcXHgwMlxcdTAyNjBcXHUwMjVGXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNjBcXHUwMjYxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjYxXFx1MDI2M1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjYyXFx1MDI2NFxceDA3XFx2XFx4MDJcXHgwMlxcdTAyNjNcXHUwMjYyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjYzXFx1MDI2NFxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjY0XFx1MDI2NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2NVxcdTAyNjdcXHgwN1xcblxceDAyXFx4MDJcXHUwMjY2XCIrXG5cdFx0XCJcXHUwMjY1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjY2XFx1MDI2N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2N1xcdTAyNjlcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDI2OFxcdTAyNkFcXHgwNTpcXHgxRVxceDAyXFx1MDI2OVxcdTAyNjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNjlcXHUwMjZBXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNkFcXHUwMjc4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjZCXFx1MDI2RFxceDA3XFx4MTRcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjZDXFx1MDI2RVxceDA3XFxuXFx4MDJcXHgwMlxcdTAyNkRcXHUwMjZDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjZEXFx1MDI2RVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjZFXFx1MDI3MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2RlxcdTAyNzFcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjcwXCIrXG5cdFx0XCJcXHUwMjZGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjcwXFx1MDI3MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3MVxcdTAyNzNcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDI3MlxcdTAyNzRcXHgwN1xcblxceDAyXFx4MDJcXHUwMjczXFx1MDI3MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3M1xcdTAyNzRcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3NFxcdTAyNzVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNzVcXHUwMjc3XFx4MDU6XFx4MUVcXHgwMlwiK1xuXHRcdFwiXFx1MDI3NlxcdTAyNkJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNzdcXHUwMjdBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjc4XFx1MDI3NlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjc4XFx1MDI3OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3OVxcdTAyN0NcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyN0FcIitcblx0XHRcIlxcdTAyNzhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyN0JcXHUwMjdEXFx4MDdcXG5cXHgwMlxceDAyXFx1MDI3Q1xcdTAyN0JcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDI3Q1xcdTAyN0RcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyN0RcXHUwMjdGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjdFXFx1MDI4MFwiK1xuXHRcdFwiXFx4MDdcXHZcXHgwMlxceDAyXFx1MDI3RlxcdTAyN0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyN0ZcXHUwMjgwXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyODBcXHUwMjgyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjgxXFx1MDI4M1xceDA3XFxuXFx4MDJcXHgwMlxcdTAyODJcXHUwMjgxXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyODJcXHUwMjgzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjgzXFx1MDI4NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4NFwiK1xuXHRcdFwiXFx1MDI4NVxceDA3IVxceDAyXFx4MDJcXHUwMjg1P1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4NlxcdTAyODhcXHgwN1xceDFDXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI4N1xcdTAyODlcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjg4XFx1MDI4N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4OFxcdTAyODlcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDI4OVxcdTAyOEJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOEFcXHUwMjhDXFx4MDdcXG5cXHgwMlxceDAyXFx1MDI4QlwiK1xuXHRcdFwiXFx1MDI4QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4QlxcdTAyOENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOENcXHUwMjhFXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyOERcXHUwMjhGXFx4MDdcXHZcXHgwMlxceDAyXFx1MDI4RVxcdTAyOERcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOEVcXHUwMjhGXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOEZcXHUwMjkxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjkwXFx1MDI5MlxceDA1QlxcXCJcXHgwMlxcdTAyOTFcIitcblx0XHRcIlxcdTAyOTBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOTFcXHUwMjkyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjkyXFx1MDI5NFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjkzXFx1MDI5NVxceDA3XFx2XFx4MDJcXHgwMlxcdTAyOTRcXHUwMjkzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjk0XFx1MDI5NVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjk1XFx1MDI5N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5NlxcdTAyOThcXHgwN1xcblxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyOTdcXHUwMjk2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjk3XFx1MDI5OFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5OFxcdTAyOUFcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDI5OVxcdTAyOUJcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjlBXFx1MDI5OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5QVwiK1xuXHRcdFwiXFx1MDI5QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5QlxcdTAyOUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOUNcXHUwMjlEXFx4MDdcXHgxRFwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyOURBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjlFXFx1MDJBRlxceDA1RCNcXHgwMlxcdTAyOUZcXHUwMkExXFx4MDdcIitcblx0XHRcIlxcdlxceDAyXFx4MDJcXHUwMkEwXFx1MDI5RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBMFxcdTAyQTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQTFcIitcblx0XHRcIlxcdTAyQTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQTJcXHUwMkE0XFx4MDdcXHgxNFxceDAyXFx4MDJcXHUwMkEzXFx1MDJBNVxceDA3XFx2XFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJBNFxcdTAyQTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQTRcXHUwMkE1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkE1XFx1MDJBN1wiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkE2XFx1MDJBOFxceDA3XFxuXFx4MDJcXHgwMlxcdTAyQTdcXHUwMkE2XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyQTdcXHUwMkE4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkE4XFx1MDJBQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBOVxcdTAyQUJcXHgwN1wiK1xuXHRcdFwiXFx2XFx4MDJcXHgwMlxcdTAyQUFcXHUwMkE5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkFBXFx1MDJBQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBQlwiK1xuXHRcdFwiXFx1MDJBQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBQ1xcdTAyQUVcXHgwNUQjXFx4MDJcXHUwMkFEXFx1MDJBMFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkFFXFx1MDJCMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBRlxcdTAyQURcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQUZcXHUwMkIwXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyQjBDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkIxXFx1MDJBRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCMlwiK1xuXHRcdFwiXFx1MDJCNFxceDA1SCVcXHgwMlxcdTAyQjNcXHUwMkI1XFx4MDdcXHZcXHgwMlxceDAyXFx1MDJCNFxcdTAyQjNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJCNFxcdTAyQjVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQjVcXHUwMkI2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkI2XFx1MDJCOFxceDA3XCIrXG5cdFx0XCJcXHgxMlxceDAyXFx4MDJcXHUwMkI3XFx1MDJCOVxceDA3XFx2XFx4MDJcXHgwMlxcdTAyQjhcXHUwMkI3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkI4XCIrXG5cdFx0XCJcXHUwMkI5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkI5XFx1MDJCQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCQVxcdTAyQkJcXHgwNUAhXFx4MDJcIitcblx0XHRcIlxcdTAyQkJcXHUwMkM3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkJDXFx1MDJCRVxceDA1SCVcXHgwMlxcdTAyQkRcXHUwMkJGXFx4MDdcXHZcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMkJFXFx1MDJCRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCRVxcdTAyQkZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQkZcXHUwMkMwXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQzBcXHUwMkMyXFx4MDdcXHgxMlxceDAyXFx4MDJcXHUwMkMxXFx1MDJDM1xceDA3XFx2XFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJDMlxcdTAyQzFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQzJcXHUwMkMzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkMzXFx1MDJDNFxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMkM0XFx1MDJDNVxceDA1SCVcXHgwMlxcdTAyQzVcXHUwMkM3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkM2XFx1MDJCMlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkM2XFx1MDJCQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDN0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQzhcIitcblx0XHRcIlxcdTAyQ0FcXHgwN1xceDFFXFx4MDJcXHgwMlxcdTAyQzlcXHUwMkNCXFx4MDdcXHZcXHgwMlxceDAyXFx1MDJDQVxcdTAyQzlcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJDQVxcdTAyQ0JcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQ0JcXHUwMkNEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkNDXFx1MDJDRVwiK1xuXHRcdFwiXFx4MDUmXFx4MTRcXHgwMlxcdTAyQ0RcXHUwMkNDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkNEXFx1MDJDRVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkNFXFx1MDJEMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDRlxcdTAyRDFcXHgwN1xcdlxceDAyXFx4MDJcXHUwMkQwXFx1MDJDRlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMkQwXFx1MDJEMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJEMVxcdTAyRDJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRDJcIitcblx0XHRcIlxcdTAyRDRcXHgwN1xceDFGXFx4MDJcXHgwMlxcdTAyRDNcXHUwMkQ1XFx4MDdcXHZcXHgwMlxceDAyXFx1MDJENFxcdTAyRDNcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJENFxcdTAyRDVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRDVcXHUwMkQ2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkQ2XFx1MDJEOFwiK1xuXHRcdFwiXFx4MDdcXHgxOVxceDAyXFx4MDJcXHUwMkQ3XFx1MDJEOVxceDA3XFx2XFx4MDJcXHgwMlxcdTAyRDhcXHUwMkQ3XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyRDhcXHUwMkQ5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkQ5XFx1MDJEQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJEQVxcdTAyRThcXHgwNVwiK1xuXHRcdFwiXFx4MTZcXGZcXHgwMlxcdTAyREJcXHUwMkREXFx4MDUoXFx4MTVcXHgwMlxcdTAyRENcXHUwMkRFXFx4MDdcXHZcXHgwMlxceDAyXFx1MDJERFxcdTAyRENcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJERFxcdTAyREVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyREVcXHUwMkRGXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyREZcXHUwMkUxXFx4MDdcXHgxOVxceDAyXFx4MDJcXHUwMkUwXFx1MDJFMlxceDA3XFx2XFx4MDJcXHgwMlxcdTAyRTFcXHUwMkUwXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyRTFcXHUwMkUyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkUyXFx1MDJFM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFM1wiK1xuXHRcdFwiXFx1MDJFNVxceDA1XFx4MTZcXGZcXHgwMlxcdTAyRTRcXHUwMkU2XFx4MDdcXHgxNlxceDAyXFx4MDJcXHUwMkU1XFx1MDJFNFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMkU1XFx1MDJFNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFNlxcdTAyRThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRTdcXHUwMkM4XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRTdcXHUwMkRCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkU4R1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFOVwiK1xuXHRcdFwiXFx1MDJFQVxcdFxceDA3XFx4MDJcXHgwMlxcdTAyRUFJXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkVCXFx1MDJFRFxceDA3XFx4MUVcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkVDXFx1MDJFRVxceDA3XFx2XFx4MDJcXHgwMlxcdTAyRURcXHUwMkVDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkVEXFx1MDJFRVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMkVFXFx1MDJFRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFRlxcdTAyRjFcXHgwNTpcXHgxRVxceDAyXFx1MDJGMFwiK1xuXHRcdFwiXFx1MDJGMlxceDA3XFx2XFx4MDJcXHgwMlxcdTAyRjFcXHUwMkYwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkYxXFx1MDJGMlxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMkYyXFx1MDJGM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGM1xcdTAyRjRcXHgwN1xceDFGXFx4MDJcXHgwMlxcdTAyRjRLXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyRjVcXHUwMkY2XFx4MDVOKFxceDAyXFx1MDJGNk1cXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRjdcXHUwMkZCXCIrXG5cdFx0XCJcXHgwNVApXFx4MDJcXHUwMkY4XFx1MDJGQVxceDA1VCtcXHgwMlxcdTAyRjlcXHUwMkY4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkZBXFx1MDJGRFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkZCXFx1MDJGOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGQlxcdTAyRkNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJGQ1xcdTAzMDZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRkRcXHUwMkZCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkZFXFx1MDMwMlxceDA1XCIrXG5cdFx0XCJYLVxceDAyXFx1MDJGRlxcdTAzMDFcXHgwNVQrXFx4MDJcXHUwMzAwXFx1MDJGRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwMVxcdTAzMDRcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDMwMlxcdTAzMDBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDJcXHUwMzAzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzAzXCIrXG5cdFx0XCJcXHUwMzA2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzA0XFx1MDMwMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwNVxcdTAyRjdcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDMwNVxcdTAyRkVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDZPXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzA3XFx1MDMwOVwiK1xuXHRcdFwiXFx4MDdcXHZcXHgwMlxceDAyXFx1MDMwOFxcdTAzMDdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDhcXHUwMzA5XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzMDlcXHUwMzBCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzBBXFx1MDMwQ1xceDA1UipcXHgwMlxcdTAzMEJcXHUwMzBBXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzMENcXHUwMzBEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzBEXFx1MDMwQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwRFwiK1xuXHRcdFwiXFx1MDMwRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwRVxcdTAzMTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMEZcXHUwMzEzXFx4MDVSKlxceDAyXCIrXG5cdFx0XCJcXHUwMzEwXFx1MDMxM1xceDA3XFx2XFx4MDJcXHgwMlxcdTAzMTFcXHUwMzEzXFx4MDdcXHJcXHgwMlxceDAyXFx1MDMxMlxcdTAzMEZcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDMxMlxcdTAzMTBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMTJcXHUwMzExXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzEzXCIrXG5cdFx0XCJcXHUwMzE2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzE0XFx1MDMxMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxNFxcdTAzMTVcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDMxNVFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMTZcXHUwMzE0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzE3XFx1MDMyMVwiK1xuXHRcdFwiXFx4MDdcXGZcXHgwMlxceDAyXFx1MDMxOFxcdTAzMjFcXHgwN1xcdFxceDAyXFx4MDJcXHUwMzE5XFx1MDMyMVxceDA3XFx4MTFcXHgwMlxceDAyXFx1MDMxQVwiK1xuXHRcdFwiXFx1MDMyMVxceDA3XFx4MUNcXHgwMlxceDAyXFx1MDMxQlxcdTAzMjFcXHgwN1xceDFEXFx4MDJcXHgwMlxcdTAzMUNcXHUwMzIxXFx4MDdcXHgxMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzMURcXHUwMzIxXFx4MDdcXHgwRlxceDAyXFx4MDJcXHUwMzFFXFx1MDMyMVxceDA3XFx4MTNcXHgwMlxceDAyXFx1MDMxRlwiK1xuXHRcdFwiXFx1MDMyMVxceDA1SCVcXHgwMlxcdTAzMjBcXHUwMzE3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzIwXFx1MDMxOFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzIwXFx1MDMxOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyMFxcdTAzMUFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjBcXHUwMzFCXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzMjBcXHUwMzFDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzIwXFx1MDMxRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyMFwiK1xuXHRcdFwiXFx1MDMxRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyMFxcdTAzMUZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjFTXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAzMjJcXHUwMzI1XFx4MDVYLVxceDAyXFx1MDMyM1xcdTAzMjVcXHgwNVYsXFx4MDJcXHUwMzI0XFx1MDMyMlxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzI0XFx1MDMyM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyNVVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjZcXHUwMzJBXFx4MDVcIitcblx0XHRcIlIqXFx4MDJcXHUwMzI3XFx1MDMyQVxceDA3XFx2XFx4MDJcXHgwMlxcdTAzMjhcXHUwMzJBXFx4MDdcXHJcXHgwMlxceDAyXFx1MDMyOVxcdTAzMjZcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyOVxcdTAzMjdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjlcXHUwMzI4XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAzMkFcXHUwMzJCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzJCXFx1MDMyOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyQlxcdTAzMkNcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDMyQ1dcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMkRcXHUwMzJFXFx4MDdcXHgxQlxceDAyXFx4MDJcXHUwMzJFXCIrXG5cdFx0XCJcXHUwMzJGXFx4MDVaLlxceDAyXFx1MDMyRlxcdTAzMzFcXHgwN1xcdlxceDAyXFx4MDJcXHUwMzMwXFx1MDMzMlxceDA1XFxcXC9cXHgwMlxcdTAzMzFcIitcblx0XHRcIlxcdTAzMzBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMzFcXHUwMzMyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzMyXFx1MDMzM1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMzMzXFx1MDMzNFxceDA3XFx4MURcXHgwMlxceDAyXFx1MDMzNFlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMzVcXHUwMzM2XCIrXG5cdFx0XCJcXHgwNWQzXFx4MDJcXHUwMzM2W1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzN1xcdTAzMzlcXHgwNWAxXFx4MDJcXHUwMzM4XFx1MDMzN1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMzM5XFx1MDMzQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzQVxcdTAzMzhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzM0FcIitcblx0XHRcIlxcdTAzM0JcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzM0JdXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzNDXFx1MDM0MFxceDA3XFx4MUNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzNEXFx1MDMzRlxceDA1YDFcXHgwMlxcdTAzM0VcXHUwMzNEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzNGXFx1MDM0MlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMzQwXFx1MDMzRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0MFxcdTAzNDFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDFcIitcblx0XHRcIlxcdTAzNDNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDJcXHUwMzQwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzQzXFx1MDM0NFxceDA3XFx4MURcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMzQ0X1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0NVxcdTAzNEZcXHgwNV4wXFx4MDJcXHUwMzQ2XFx1MDM0QlxceDA1XCIrXG5cdFx0XCJiMlxceDAyXFx1MDM0N1xcdTAzNDhcXHgwN1xcblxceDAyXFx4MDJcXHUwMzQ4XFx1MDM0QVxceDA1YjJcXHgwMlxcdTAzNDlcXHUwMzQ3XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzNEFcXHUwMzREXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzRCXFx1MDM0OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0QlwiK1xuXHRcdFwiXFx1MDM0Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0Q1xcdTAzNEZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNERcXHUwMzRCXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzNEVcXHUwMzQ1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzRFXFx1MDM0NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0RlwiK1xuXHRcdFwiYVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM1MFxcdTAzNTFcXHRcXGJcXHgwMlxceDAyXFx1MDM1MWNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNTJcIitcblx0XHRcIlxcdTAzNTNcXHgwN1xcdFxceDAyXFx4MDJcXHUwMzUzZVxceDAzXFx4MDJcXHgwMlxceDAyXFx4OTlpbXJ+XFx4OTBcXHg5NFxceEE2XFx4QjJcXHhCNlwiK1xuXHRcdFwiXFx4QkVcXHhDMlxceEM2XFx4Q0FcXHhEMlxceEQ2XFx4RTJcXHhFNlxceEVBXFx4RUVcXHhGOFxceEZDXFx1MDEwMlxcdTAxMDZcXHUwMTBFXFx1MDExNlwiK1xuXHRcdFwiXFx1MDEyMFxcdTAxMjdcXHUwMTI5XFx1MDEyRFxcdTAxMzhcXHUwMTNDXFx1MDE0MFxcdTAxNDVcXHUwMTRDXFx1MDE1MFxcdTAxNTRcXHUwMTVBXCIrXG5cdFx0XCJcXHUwMTVFXFx1MDE2M1xcdTAxNjdcXHUwMTZCXFx1MDE2RlxcdTAxNzNcXHUwMTc5XFx1MDE3Q1xcdTAxN0ZcXHUwMTgzXFx1MDE4N1xcdTAxOENcIitcblx0XHRcIlxcdTAxOTBcXHUwMTk0XFx1MDE5OVxcdTAxOUVcXHUwMUEzXFx1MDFBN1xcdTAxQUFcXHUwMUFGXFx1MDFCMlxcdTAxQjVcXHUwMUI4XFx1MDFCQ1wiK1xuXHRcdFwiXFx1MDFCRlxcdTAxQzJcXHUwMUM3XFx1MDFDQlxcdTAxQ0VcXHUwMUQxXFx1MDFEQ1xcdTAxRTFcXHUwMUU2XFx1MDFFQlxcdTAxRUVcXHUwMUYxXCIrXG5cdFx0XCJcXHUwMUY0XFx1MDFGN1xcdTAxRkFcXHUwMUZEXFx1MDIwM1xcdTAyMDdcXHUwMjBBXFx1MDIwRFxcdTAyMTJcXHUwMjE3XFx1MDIxQVxcdTAyMUVcIitcblx0XHRcIlxcdTAyMkFcXHUwMjMxXFx1MDIzM1xcdTAyMzdcXHUwMjQyXFx1MDI0NlxcdTAyNEFcXHUwMjRGXFx1MDI1M1xcdTAyNTZcXHUwMjU4XFx1MDI2MFwiK1xuXHRcdFwiXFx1MDI2M1xcdTAyNjZcXHUwMjY5XFx1MDI2RFxcdTAyNzBcXHUwMjczXFx1MDI3OFxcdTAyN0NcXHUwMjdGXFx1MDI4MlxcdTAyODhcXHUwMjhCXCIrXG5cdFx0XCJcXHUwMjhFXFx1MDI5MVxcdTAyOTRcXHUwMjk3XFx1MDI5QVxcdTAyQTBcXHUwMkE0XFx1MDJBN1xcdTAyQUFcXHUwMkFGXFx1MDJCNFxcdTAyQjhcIitcblx0XHRcIlxcdTAyQkVcXHUwMkMyXFx1MDJDNlxcdTAyQ0FcXHUwMkNEXFx1MDJEMFxcdTAyRDRcXHUwMkQ4XFx1MDJERFxcdTAyRTFcXHUwMkU1XFx1MDJFN1wiK1xuXHRcdFwiXFx1MDJFRFxcdTAyRjFcXHUwMkZCXFx1MDMwMlxcdTAzMDVcXHUwMzA4XFx1MDMwRFxcdTAzMTJcXHUwMzE0XFx1MDMyMFxcdTAzMjRcXHUwMzI5XCIrXG5cdFx0XCJcXHUwMzJCXFx1MDMzMVxcdTAzM0FcXHUwMzQwXFx1MDM0QlxcdTAzNEVcIjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBfc2VyaWFsaXplZEFUTjogc3RyaW5nID0gVXRpbHMuam9pbihcblx0XHRbXG5cdFx0XHRYRG9jUGFyc2VyLl9zZXJpYWxpemVkQVROU2VnbWVudDAsXG5cdFx0XHRYRG9jUGFyc2VyLl9zZXJpYWxpemVkQVROU2VnbWVudDFcblx0XHRdLFxuXHRcdFwiXCJcblx0KTtcblx0cHVibGljIHN0YXRpYyBfX0FUTjogQVROO1xuXHRwdWJsaWMgc3RhdGljIGdldCBfQVROKCk6IEFUTiB7XG5cdFx0aWYgKCFYRG9jUGFyc2VyLl9fQVROKSB7XG5cdFx0XHRYRG9jUGFyc2VyLl9fQVROID0gbmV3IEFUTkRlc2VyaWFsaXplcigpLmRlc2VyaWFsaXplKFV0aWxzLnRvQ2hhckFycmF5KFhEb2NQYXJzZXIuX3NlcmlhbGl6ZWRBVE4pKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gWERvY1BhcnNlci5fX0FUTjtcblx0fVxuXG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudGF0aW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEVPRigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkVPRiwgMCk7IH1cblx0cHVibGljIGJvZHkoKTogQm9keUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEJvZHlDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jUGFyc2VyLk5FV0xJTkUsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV9kb2N1bWVudGF0aW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJEb2N1bWVudGF0aW9uKSBsaXN0ZW5lci5lbnRlckRvY3VtZW50YXRpb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXREb2N1bWVudGF0aW9uKSBsaXN0ZW5lci5leGl0RG9jdW1lbnRhdGlvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RG9jdW1lbnRhdGlvbikgcmV0dXJuIHZpc2l0b3IudmlzaXREb2N1bWVudGF0aW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBCb2R5Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGFubm90YXRpb25zKCk6IEFubm90YXRpb25zQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgQW5ub3RhdGlvbnNDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgd2hpdGVzcGFjZSgpOiBXaGl0ZXNwYWNlQ29udGV4dFtdO1xuXHRwdWJsaWMgd2hpdGVzcGFjZShpOiBudW1iZXIpOiBXaGl0ZXNwYWNlQ29udGV4dDtcblx0cHVibGljIHdoaXRlc3BhY2UoaT86IG51bWJlcik6IFdoaXRlc3BhY2VDb250ZXh0IHwgV2hpdGVzcGFjZUNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKFdoaXRlc3BhY2VDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgV2hpdGVzcGFjZUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfYm9keTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyQm9keSkgbGlzdGVuZXIuZW50ZXJCb2R5KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0Qm9keSkgbGlzdGVuZXIuZXhpdEJvZHkodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEJvZHkpIHJldHVybiB2aXNpdG9yLnZpc2l0Qm9keSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgV2hpdGVzcGFjZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jUGFyc2VyLlNQQUNFLCAwKTsgfVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jUGFyc2VyLk5FV0xJTkUsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV93aGl0ZXNwYWNlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJXaGl0ZXNwYWNlKSBsaXN0ZW5lci5lbnRlcldoaXRlc3BhY2UodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRXaGl0ZXNwYWNlKSBsaXN0ZW5lci5leGl0V2hpdGVzcGFjZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0V2hpdGVzcGFjZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRXaGl0ZXNwYWNlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uc0NvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyB0YWcoKTogVGFnQ29udGV4dFtdO1xuXHRwdWJsaWMgdGFnKGk6IG51bWJlcik6IFRhZ0NvbnRleHQ7XG5cdHB1YmxpYyB0YWcoaT86IG51bWJlcik6IFRhZ0NvbnRleHQgfCBUYWdDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhUYWdDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgVGFnQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV9hbm5vdGF0aW9uczsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyQW5ub3RhdGlvbnMpIGxpc3RlbmVyLmVudGVyQW5ub3RhdGlvbnModGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRBbm5vdGF0aW9ucykgbGlzdGVuZXIuZXhpdEFubm90YXRpb25zKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1BhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRBbm5vdGF0aW9ucykgcmV0dXJuIHZpc2l0b3IudmlzaXRBbm5vdGF0aW9ucyh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVGFnQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHRhZ05hbWUoKTogVGFnTmFtZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIFRhZ05hbWVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBNSU5VUygpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jUGFyc2VyLk1JTlVTLCAwKTsgfVxuXHRwdWJsaWMgZGVzY3JpcHRpb24oKTogRGVzY3JpcHRpb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBEZXNjcmlwdGlvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyB0YWdJRCgpOiBUYWdJRENvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFRhZ0lEQ29udGV4dCk7XG5cdH1cblx0cHVibGljIEVRVUFMKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NQYXJzZXIuRVFVQUwsIDApOyB9XG5cdHB1YmxpYyB2YWx1ZSgpOiBWYWx1ZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFZhbHVlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIENPTE9OKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NQYXJzZXIuQ09MT04sIDApOyB9XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBUeXBlQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX3RhZzsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVGFnKSBsaXN0ZW5lci5lbnRlclRhZyh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFRhZykgbGlzdGVuZXIuZXhpdFRhZyh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VGFnKSByZXR1cm4gdmlzaXRvci52aXNpdFRhZyh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVGFnTmFtZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBBVCgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkFULCAwKTsgfVxuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV90YWdOYW1lOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJUYWdOYW1lKSBsaXN0ZW5lci5lbnRlclRhZ05hbWUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRUYWdOYW1lKSBsaXN0ZW5lci5leGl0VGFnTmFtZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VGFnTmFtZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRUYWdOYW1lKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBUYWdJRENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBwcm9wZXJ0eVRhZ0lEKCk6IFByb3BlcnR5VGFnSURDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQcm9wZXJ0eVRhZ0lEQ29udGV4dCk7XG5cdH1cblx0cHVibGljIG9wdGlvbmFsVGFnSUQoKTogT3B0aW9uYWxUYWdJRENvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsVGFnSURDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV90YWdJRDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVGFnSUQpIGxpc3RlbmVyLmVudGVyVGFnSUQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRUYWdJRCkgbGlzdGVuZXIuZXhpdFRhZ0lEKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1BhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRUYWdJRCkgcmV0dXJuIHZpc2l0b3IudmlzaXRUYWdJRCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT3B0aW9uYWxUYWdJRENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFFVRVNUSU9OKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuUVVFU1RJT04sIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV9vcHRpb25hbFRhZ0lEOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPcHRpb25hbFRhZ0lEKSBsaXN0ZW5lci5lbnRlck9wdGlvbmFsVGFnSUQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPcHRpb25hbFRhZ0lEKSBsaXN0ZW5lci5leGl0T3B0aW9uYWxUYWdJRCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T3B0aW9uYWxUYWdJRCkgcmV0dXJuIHZpc2l0b3IudmlzaXRPcHRpb25hbFRhZ0lEKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVRhZ0lEQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIG9wdGlvbmFsVGFnSUQoKTogT3B0aW9uYWxUYWdJRENvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsVGFnSURDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgUEVSSU9EKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgUEVSSU9EKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFBFUklPRChpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jUGFyc2VyLlBFUklPRCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuUEVSSU9ELCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIG9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKCk6IE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dFtdO1xuXHRwdWJsaWMgb3B0aW9uYWxUYWdPcklkZW50aWZpZXIoaTogbnVtYmVyKTogT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0O1xuXHRwdWJsaWMgb3B0aW9uYWxUYWdPcklkZW50aWZpZXIoaT86IG51bWJlcik6IE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dCB8IE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfcHJvcGVydHlUYWdJRDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyUHJvcGVydHlUYWdJRCkgbGlzdGVuZXIuZW50ZXJQcm9wZXJ0eVRhZ0lEKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0UHJvcGVydHlUYWdJRCkgbGlzdGVuZXIuZXhpdFByb3BlcnR5VGFnSUQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFByb3BlcnR5VGFnSUQpIHJldHVybiB2aXNpdG9yLnZpc2l0UHJvcGVydHlUYWdJRCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgb3B0aW9uYWxUYWdJRCgpOiBPcHRpb25hbFRhZ0lEQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT3B0aW9uYWxUYWdJRENvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX29wdGlvbmFsVGFnT3JJZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPcHRpb25hbFRhZ09ySWRlbnRpZmllcikgbGlzdGVuZXIuZW50ZXJPcHRpb25hbFRhZ09ySWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKSBsaXN0ZW5lci5leGl0T3B0aW9uYWxUYWdPcklkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKSByZXR1cm4gdmlzaXRvci52aXNpdE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHRbXTtcblx0cHVibGljIHR5cGUoaTogbnVtYmVyKTogVHlwZUNvbnRleHQ7XG5cdHB1YmxpYyB0eXBlKGk/OiBudW1iZXIpOiBUeXBlQ29udGV4dCB8IFR5cGVDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhUeXBlQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIFR5cGVDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIFBJUEUoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5QSVBFLCAwKTsgfVxuXHRwdWJsaWMgQU1QKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NQYXJzZXIuQU1QLCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBsYW1iZGFUeXBlKCk6IExhbWJkYVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBMYW1iZGFUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHR1cGxlVHlwZSgpOiBUdXBsZVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBUdXBsZVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgcHJpbWFyeVR5cGUoKTogUHJpbWFyeVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQcmltYXJ5VHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBwYXJlbnRoZXNpemVkVHlwZSgpOiBQYXJlbnRoZXNpemVkVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHVuYXJ5VHlwZSgpOiBVbmFyeVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBVbmFyeVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgb2JqZWN0VHlwZSgpOiBPYmplY3RUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT2JqZWN0VHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBhcnJheVR5cGUoKTogQXJyYXlUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgQXJyYXlUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHByb3BlcnR5VHlwZSgpOiBQcm9wZXJ0eVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQcm9wZXJ0eVR5cGVDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfdHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVHlwZSkgbGlzdGVuZXIuZW50ZXJUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0VHlwZSkgbGlzdGVuZXIuZXhpdFR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0VHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVW5hcnlUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHByaW1hcnlUeXBlKCk6IFByaW1hcnlUeXBlQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgUHJpbWFyeVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgQU1QKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NQYXJzZXIuQU1QLCAwKTsgfVxuXHRwdWJsaWMgU1RBUigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jUGFyc2VyLlNUQVIsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV91bmFyeVR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclVuYXJ5VHlwZSkgbGlzdGVuZXIuZW50ZXJVbmFyeVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRVbmFyeVR5cGUpIGxpc3RlbmVyLmV4aXRVbmFyeVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFVuYXJ5VHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRVbmFyeVR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFR1cGxlVHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBMRVNTVEhBTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkxFU1NUSEFOLCAwKTsgfVxuXHRwdWJsaWMgdHVwbGVUeXBlTGlzdCgpOiBUdXBsZVR5cGVMaXN0Q29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgVHVwbGVUeXBlTGlzdENvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBHUkVBVEVSVEhBTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkdSRUFURVJUSEFOLCAwKTsgfVxuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX3R1cGxlVHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVHVwbGVUeXBlKSBsaXN0ZW5lci5lbnRlclR1cGxlVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFR1cGxlVHlwZSkgbGlzdGVuZXIuZXhpdFR1cGxlVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VHVwbGVUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdFR1cGxlVHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVHVwbGVUeXBlTGlzdENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0W107XG5cdHB1YmxpYyB0eXBlKGk6IG51bWJlcik6IFR5cGVDb250ZXh0O1xuXHRwdWJsaWMgdHlwZShpPzogbnVtYmVyKTogVHlwZUNvbnRleHQgfCBUeXBlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoVHlwZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBUeXBlQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTU1BKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQ09NTUEoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQ09NTUEoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1BhcnNlci5DT01NQSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuQ09NTUEsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfdHVwbGVUeXBlTGlzdDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVHVwbGVUeXBlTGlzdCkgbGlzdGVuZXIuZW50ZXJUdXBsZVR5cGVMaXN0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0VHVwbGVUeXBlTGlzdCkgbGlzdGVuZXIuZXhpdFR1cGxlVHlwZUxpc3QodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFR1cGxlVHlwZUxpc3QpIHJldHVybiB2aXNpdG9yLnZpc2l0VHVwbGVUeXBlTGlzdCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUHJpbWFyeVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgb3B0aW9uYWxUeXBlKCk6IE9wdGlvbmFsVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBpZGVudGlmaWVyT3JLZXl3b3JkKCk6IElkZW50aWZpZXJPcktleXdvcmRDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX3ByaW1hcnlUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJQcmltYXJ5VHlwZSkgbGlzdGVuZXIuZW50ZXJQcmltYXJ5VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFByaW1hcnlUeXBlKSBsaXN0ZW5lci5leGl0UHJpbWFyeVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFByaW1hcnlUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdFByaW1hcnlUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgTnVsbExpdGVyYWwoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5OdWxsTGl0ZXJhbCwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX2lkZW50aWZpZXJPcktleXdvcmQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlcklkZW50aWZpZXJPcktleXdvcmQpIGxpc3RlbmVyLmVudGVySWRlbnRpZmllck9yS2V5d29yZCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdElkZW50aWZpZXJPcktleXdvcmQpIGxpc3RlbmVyLmV4aXRJZGVudGlmaWVyT3JLZXl3b3JkKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1BhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRJZGVudGlmaWVyT3JLZXl3b3JkKSByZXR1cm4gdmlzaXRvci52aXNpdElkZW50aWZpZXJPcktleXdvcmQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFBBUkVOX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5QQVJFTl9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBQQVJFTl9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLlBBUkVOX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV9wYXJlbnRoZXNpemVkVHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyUGFyZW50aGVzaXplZFR5cGUpIGxpc3RlbmVyLmVudGVyUGFyZW50aGVzaXplZFR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRQYXJlbnRoZXNpemVkVHlwZSkgbGlzdGVuZXIuZXhpdFBhcmVudGhlc2l6ZWRUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1BhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRQYXJlbnRoZXNpemVkVHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRQYXJlbnRoZXNpemVkVHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTGFtYmRhVHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBQQVJFTl9PUEVOKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NQYXJzZXIuUEFSRU5fT1BFTiwgMCk7IH1cblx0cHVibGljIFBBUkVOX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NQYXJzZXIuUEFSRU5fQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBBUlJPVygpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkFSUk9XLCAwKTsgfVxuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIGZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKCk6IEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgcGFyYW1ldGVyKCk6IFBhcmFtZXRlckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFBhcmFtZXRlckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV9sYW1iZGFUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJMYW1iZGFUeXBlKSBsaXN0ZW5lci5lbnRlckxhbWJkYVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRMYW1iZGFUeXBlKSBsaXN0ZW5lci5leGl0TGFtYmRhVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0TGFtYmRhVHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRMYW1iZGFUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBwYXJhbWV0ZXIoKTogUGFyYW1ldGVyQ29udGV4dFtdO1xuXHRwdWJsaWMgcGFyYW1ldGVyKGk6IG51bWJlcik6IFBhcmFtZXRlckNvbnRleHQ7XG5cdHB1YmxpYyBwYXJhbWV0ZXIoaT86IG51bWJlcik6IFBhcmFtZXRlckNvbnRleHQgfCBQYXJhbWV0ZXJDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhQYXJhbWV0ZXJDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgUGFyYW1ldGVyQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT01NQSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIENPTU1BKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIENPTU1BKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuQ09NTUEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkNPTU1BLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2U7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKSBsaXN0ZW5lci5lbnRlckZvcm1hbFBhcmFtZXRlclNlcXVlbmNlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0Rm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UpIGxpc3RlbmVyLmV4aXRGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0Rm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UpIHJldHVybiB2aXNpdG9yLnZpc2l0Rm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIENPTE9OKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NQYXJzZXIuQ09MT04sIDApOyB9XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfcGFyYW1ldGVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJQYXJhbWV0ZXIpIGxpc3RlbmVyLmVudGVyUGFyYW1ldGVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0UGFyYW1ldGVyKSBsaXN0ZW5lci5leGl0UGFyYW1ldGVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1BhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRQYXJhbWV0ZXIpIHJldHVybiB2aXNpdG9yLnZpc2l0UGFyYW1ldGVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBcnJheVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgQlJBQ0tFVF9PUEVOKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuQlJBQ0tFVF9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0tFVF9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkJSQUNLRVRfQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHRbXTtcblx0cHVibGljIHR5cGUoaTogbnVtYmVyKTogVHlwZUNvbnRleHQ7XG5cdHB1YmxpYyB0eXBlKGk/OiBudW1iZXIpOiBUeXBlQ29udGV4dCB8IFR5cGVDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhUeXBlQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIFR5cGVDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTU1BKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQ09NTUEoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQ09NTUEoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1BhcnNlci5DT01NQSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuQ09NTUEsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBvYmplY3RUeXBlKCk6IE9iamVjdFR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPYmplY3RUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGFycmF5VHlwZSgpOiBBcnJheVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBBcnJheVR5cGVDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfYXJyYXlUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJBcnJheVR5cGUpIGxpc3RlbmVyLmVudGVyQXJyYXlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0QXJyYXlUeXBlKSBsaXN0ZW5lci5leGl0QXJyYXlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1BhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRBcnJheVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0QXJyYXlUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEJSQUNFX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5CUkFDRV9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5CUkFDRV9DTE9TRSwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jUGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgb2JqZWN0UGFpclR5cGVMaXN0KCk6IE9iamVjdFBhaXJUeXBlTGlzdENvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9iamVjdFBhaXJUeXBlTGlzdENvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV9vYmplY3RUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPYmplY3RUeXBlKSBsaXN0ZW5lci5lbnRlck9iamVjdFR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPYmplY3RUeXBlKSBsaXN0ZW5lci5leGl0T2JqZWN0VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T2JqZWN0VHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRPYmplY3RUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQYWlyVHlwZUxpc3RDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgb2JqZWN0UGFpclR5cGUoKTogT2JqZWN0UGFpclR5cGVDb250ZXh0W107XG5cdHB1YmxpYyBvYmplY3RQYWlyVHlwZShpOiBudW1iZXIpOiBPYmplY3RQYWlyVHlwZUNvbnRleHQ7XG5cdHB1YmxpYyBvYmplY3RQYWlyVHlwZShpPzogbnVtYmVyKTogT2JqZWN0UGFpclR5cGVDb250ZXh0IHwgT2JqZWN0UGFpclR5cGVDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhPYmplY3RQYWlyVHlwZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBPYmplY3RQYWlyVHlwZUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT01NQSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIENPTU1BKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIENPTU1BKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuQ09NTUEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkNPTU1BLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1BhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX29iamVjdFBhaXJUeXBlTGlzdDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT2JqZWN0UGFpclR5cGVMaXN0KSBsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJUeXBlTGlzdCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9iamVjdFBhaXJUeXBlTGlzdCkgbGlzdGVuZXIuZXhpdE9iamVjdFBhaXJUeXBlTGlzdCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T2JqZWN0UGFpclR5cGVMaXN0KSByZXR1cm4gdmlzaXRvci52aXNpdE9iamVjdFBhaXJUeXBlTGlzdCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT2JqZWN0UGFpclR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dFtdO1xuXHRwdWJsaWMgdHlwZShpOiBudW1iZXIpOiBUeXBlQ29udGV4dDtcblx0cHVibGljIHR5cGUoaT86IG51bWJlcik6IFR5cGVDb250ZXh0IHwgVHlwZUNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKFR5cGVDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgVHlwZUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09MT04oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5DT0xPTiwgMCk7IH1cblx0cHVibGljIFFVRVNUSU9OKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NQYXJzZXIuUVVFU1RJT04sIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX29iamVjdFBhaXJUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyVHlwZSkgbGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9iamVjdFBhaXJUeXBlKSBsaXN0ZW5lci5leGl0T2JqZWN0UGFpclR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9iamVjdFBhaXJUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdE9iamVjdFBhaXJUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPcHRpb25hbFR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBRVUVTVElPTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLlFVRVNUSU9OLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfb3B0aW9uYWxUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPcHRpb25hbFR5cGUpIGxpc3RlbmVyLmVudGVyT3B0aW9uYWxUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T3B0aW9uYWxUeXBlKSBsaXN0ZW5lci5leGl0T3B0aW9uYWxUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1BhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPcHRpb25hbFR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0T3B0aW9uYWxUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBQRVJJT0QoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBQRVJJT0QoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgUEVSSU9EKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuUEVSSU9EKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5QRVJJT0QsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgb3B0aW9uYWxUeXBlT3JJZGVudGlmZXIoKTogT3B0aW9uYWxUeXBlT3JJZGVudGlmZXJDb250ZXh0W107XG5cdHB1YmxpYyBvcHRpb25hbFR5cGVPcklkZW50aWZlcihpOiBudW1iZXIpOiBPcHRpb25hbFR5cGVPcklkZW50aWZlckNvbnRleHQ7XG5cdHB1YmxpYyBvcHRpb25hbFR5cGVPcklkZW50aWZlcihpPzogbnVtYmVyKTogT3B0aW9uYWxUeXBlT3JJZGVudGlmZXJDb250ZXh0IHwgT3B0aW9uYWxUeXBlT3JJZGVudGlmZXJDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhPcHRpb25hbFR5cGVPcklkZW50aWZlckNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBPcHRpb25hbFR5cGVPcklkZW50aWZlckNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgb3B0aW9uYWxUeXBlKCk6IE9wdGlvbmFsVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsVHlwZUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV9wcm9wZXJ0eVR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclByb3BlcnR5VHlwZSkgbGlzdGVuZXIuZW50ZXJQcm9wZXJ0eVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRQcm9wZXJ0eVR5cGUpIGxpc3RlbmVyLmV4aXRQcm9wZXJ0eVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFByb3BlcnR5VHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRQcm9wZXJ0eVR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgb3B0aW9uYWxUeXBlKCk6IE9wdGlvbmFsVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsVHlwZUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV9vcHRpb25hbFR5cGVPcklkZW50aWZlcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT3B0aW9uYWxUeXBlT3JJZGVudGlmZXIpIGxpc3RlbmVyLmVudGVyT3B0aW9uYWxUeXBlT3JJZGVudGlmZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPcHRpb25hbFR5cGVPcklkZW50aWZlcikgbGlzdGVuZXIuZXhpdE9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1BhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPcHRpb25hbFR5cGVPcklkZW50aWZlcikgcmV0dXJuIHZpc2l0b3IudmlzaXRPcHRpb25hbFR5cGVPcklkZW50aWZlcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVmFsdWVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV92YWx1ZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVmFsdWUpIGxpc3RlbmVyLmVudGVyVmFsdWUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRWYWx1ZSkgbGlzdGVuZXIuZXhpdFZhbHVlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1BhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRWYWx1ZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRWYWx1ZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyB1bmFyeUV4cHJlc3Npb24oKTogVW5hcnlFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVW5hcnlFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGV4cHJlc3Npb24oKTogRXhwcmVzc2lvbkNvbnRleHRbXTtcblx0cHVibGljIGV4cHJlc3Npb24oaTogbnVtYmVyKTogRXhwcmVzc2lvbkNvbnRleHQ7XG5cdHB1YmxpYyBleHByZXNzaW9uKGk/OiBudW1iZXIpOiBFeHByZXNzaW9uQ29udGV4dCB8IEV4cHJlc3Npb25Db250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIEV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNUQVIoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5TVEFSLCAwKTsgfVxuXHRwdWJsaWMgRk9SV0FSRF9TTEFTSCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jUGFyc2VyLkZPUldBUkRfU0xBU0gsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIFBMVVMoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5QTFVTLCAwKTsgfVxuXHRwdWJsaWMgTUlOVVMoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5NSU5VUywgMCk7IH1cblx0cHVibGljIGFycmF5RXhwcmVzc2lvbigpOiBBcnJheUV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBBcnJheUV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgb2JqZWN0RXhwcmVzc2lvbigpOiBPYmplY3RFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBsYW1iZGFFeHByZXNzaW9uKCk6IExhbWJkYUV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBMYW1iZGFFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGxpdGVyYWwoKTogTGl0ZXJhbENvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIExpdGVyYWxDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgcGFyZW50aGVzaXplZEV4cHJlc3Npb24oKTogUGFyZW50aGVzaXplZEV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV9leHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlckV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0RXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBVbmFyeUV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBQTFVTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NQYXJzZXIuUExVUywgMCk7IH1cblx0cHVibGljIE1JTlVTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NQYXJzZXIuTUlOVVMsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV91bmFyeUV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclVuYXJ5RXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJVbmFyeUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRVbmFyeUV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRVbmFyeUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFVuYXJ5RXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRVbmFyeUV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEFycmF5RXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBCUkFDS0VUX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5CUkFDS0VUX09QRU4sIDApOyB9XG5cdHB1YmxpYyBCUkFDS0VUX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuQlJBQ0tFVF9DTE9TRSwgMCk7IH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1BhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dFtdO1xuXHRwdWJsaWMgZXhwcmVzc2lvbihpOiBudW1iZXIpOiBFeHByZXNzaW9uQ29udGV4dDtcblx0cHVibGljIGV4cHJlc3Npb24oaT86IG51bWJlcik6IEV4cHJlc3Npb25Db250ZXh0IHwgRXhwcmVzc2lvbkNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKEV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09NTUEoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBDT01NQShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBDT01NQShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jUGFyc2VyLkNPTU1BKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5DT01NQSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV9hcnJheUV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckFycmF5RXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJBcnJheUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRBcnJheUV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRBcnJheUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEFycmF5RXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRBcnJheUV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9iamVjdEV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgQlJBQ0VfT1BFTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkJSQUNFX09QRU4sIDApOyB9XG5cdHB1YmxpYyBCUkFDRV9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkJSQUNFX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBvYmplY3RQYWlyRXhwcmVzc2lvbkxpc3QoKTogT2JqZWN0UGFpckV4cHJlc3Npb25MaXN0Q29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT2JqZWN0UGFpckV4cHJlc3Npb25MaXN0Q29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX29iamVjdEV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9iamVjdEV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyT2JqZWN0RXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9iamVjdEV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRPYmplY3RFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1BhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPYmplY3RFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdE9iamVjdEV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9iamVjdFBhaXJFeHByZXNzaW9uTGlzdENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBvYmplY3RQYWlyRXhwcmVzc2lvbigpOiBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHRbXTtcblx0cHVibGljIG9iamVjdFBhaXJFeHByZXNzaW9uKGk6IG51bWJlcik6IE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dDtcblx0cHVibGljIG9iamVjdFBhaXJFeHByZXNzaW9uKGk/OiBudW1iZXIpOiBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQgfCBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT01NQSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIENPTU1BKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIENPTU1BKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuQ09NTUEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkNPTU1BLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jUGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfb2JqZWN0UGFpckV4cHJlc3Npb25MaXN0OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyRXhwcmVzc2lvbkxpc3QpIGxpc3RlbmVyLmVudGVyT2JqZWN0UGFpckV4cHJlc3Npb25MaXN0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T2JqZWN0UGFpckV4cHJlc3Npb25MaXN0KSBsaXN0ZW5lci5leGl0T2JqZWN0UGFpckV4cHJlc3Npb25MaXN0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1BhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPYmplY3RQYWlyRXhwcmVzc2lvbkxpc3QpIHJldHVybiB2aXNpdG9yLnZpc2l0T2JqZWN0UGFpckV4cHJlc3Npb25MaXN0KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBsaXRlcmFsKCk6IExpdGVyYWxDb250ZXh0W107XG5cdHB1YmxpYyBsaXRlcmFsKGk6IG51bWJlcik6IExpdGVyYWxDb250ZXh0O1xuXHRwdWJsaWMgbGl0ZXJhbChpPzogbnVtYmVyKTogTGl0ZXJhbENvbnRleHQgfCBMaXRlcmFsQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoTGl0ZXJhbENvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBMaXRlcmFsQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT0xPTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkNPTE9OLCAwKTsgfVxuXHRwdWJsaWMgb2JqZWN0RXhwcmVzc2lvbigpOiBPYmplY3RFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX29iamVjdFBhaXJFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyRXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9iamVjdFBhaXJFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0T2JqZWN0UGFpckV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9iamVjdFBhaXJFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdE9iamVjdFBhaXJFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBMYW1iZGFFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFBBUkVOX09QRU4oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5QQVJFTl9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgUEFSRU5fQ0xPU0UoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5QQVJFTl9DTE9TRSwgMCk7IH1cblx0cHVibGljIEFSUk9XKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuQVJST1csIDApOyB9XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1BhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UoKTogRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBwYXJhbWV0ZXIoKTogUGFyYW1ldGVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUGFyYW1ldGVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFFVRVNUSU9OKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NQYXJzZXIuUVVFU1RJT04sIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV9sYW1iZGFFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJMYW1iZGFFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlckxhbWJkYUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRMYW1iZGFFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0TGFtYmRhRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0TGFtYmRhRXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRMYW1iZGFFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEludGVnZXJMaXRlcmFsKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NQYXJzZXIuSW50ZWdlckxpdGVyYWwsIDApOyB9XG5cdHB1YmxpYyBGbG9hdGluZ1BvaW50TGl0ZXJhbCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jUGFyc2VyLkZsb2F0aW5nUG9pbnRMaXRlcmFsLCAwKTsgfVxuXHRwdWJsaWMgQm9vbGVhbkxpdGVyYWwoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5Cb29sZWFuTGl0ZXJhbCwgMCk7IH1cblx0cHVibGljIENoYXJhY3RlckxpdGVyYWwoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5DaGFyYWN0ZXJMaXRlcmFsLCAwKTsgfVxuXHRwdWJsaWMgU3RyaW5nTGl0ZXJhbCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jUGFyc2VyLlN0cmluZ0xpdGVyYWwsIDApOyB9XG5cdHB1YmxpYyBOdWxsTGl0ZXJhbCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jUGFyc2VyLk51bGxMaXRlcmFsLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfbGl0ZXJhbDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyTGl0ZXJhbCkgbGlzdGVuZXIuZW50ZXJMaXRlcmFsKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0TGl0ZXJhbCkgbGlzdGVuZXIuZXhpdExpdGVyYWwodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdExpdGVyYWwpIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUGFyZW50aGVzaXplZEV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgUEFSRU5fT1BFTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLlBBUkVOX09QRU4sIDApOyB9XG5cdHB1YmxpYyBleHByZXNzaW9uKCk6IEV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFBBUkVOX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuUEFSRU5fQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX3BhcmVudGhlc2l6ZWRFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJQYXJlbnRoZXNpemVkRXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJQYXJlbnRoZXNpemVkRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0UGFyZW50aGVzaXplZEV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmUoKTogRGVzY3JpcHRpb25MaW5lQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgRGVzY3JpcHRpb25MaW5lQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX2Rlc2NyaXB0aW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbikgbGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uKSBsaXN0ZW5lci5leGl0RGVzY3JpcHRpb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERlc2NyaXB0aW9uKSByZXR1cm4gdmlzaXRvci52aXNpdERlc2NyaXB0aW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbkxpbmVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lU3RhcnQoKTogRGVzY3JpcHRpb25MaW5lU3RhcnRDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBEZXNjcmlwdGlvbkxpbmVTdGFydENvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVFbGVtZW50KCk6IERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0W107XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVFbGVtZW50KGk6IG51bWJlcik6IERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0O1xuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lRWxlbWVudChpPzogbnVtYmVyKTogRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQgfCBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBpbmxpbmVUYWcoKTogSW5saW5lVGFnQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSW5saW5lVGFnQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lKSBsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uTGluZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZSkgbGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25MaW5lKSByZXR1cm4gdmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVzY3JpcHRpb25MaW5lU3RhcnRDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhYRG9jUGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBkZXNjcmlwdGlvblRleHQoKTogRGVzY3JpcHRpb25UZXh0Q29udGV4dFtdO1xuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KGk6IG51bWJlcik6IERlc2NyaXB0aW9uVGV4dENvbnRleHQ7XG5cdHB1YmxpYyBkZXNjcmlwdGlvblRleHQoaT86IG51bWJlcik6IERlc2NyaXB0aW9uVGV4dENvbnRleHQgfCBEZXNjcmlwdGlvblRleHRDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhEZXNjcmlwdGlvblRleHRDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgRGVzY3JpcHRpb25UZXh0Q29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBBVCgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIEFUKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIEFUKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuQVQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkFULCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZVN0YXJ0OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbkxpbmVTdGFydCkgbGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbkxpbmVTdGFydCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZVN0YXJ0KSBsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lU3RhcnQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZVN0YXJ0KSByZXR1cm4gdmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZVN0YXJ0KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvblRleHRDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgVEVYVF9DT05URU5UKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NQYXJzZXIuVEVYVF9DT05URU5ULCAwKTsgfVxuXHRwdWJsaWMgSUQoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5JRCwgMCk7IH1cblx0cHVibGljIEZPUldBUkRfU0xBU0goKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5GT1JXQVJEX1NMQVNILCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfT1BFTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jUGFyc2VyLkJSQUNFX09QRU4sIDApOyB9XG5cdHB1YmxpYyBCUkFDRV9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jUGFyc2VyLkJSQUNFX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgQ09MT04oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5DT0xPTiwgMCk7IH1cblx0cHVibGljIE1JTlVTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFhEb2NQYXJzZXIuTUlOVVMsIDApOyB9XG5cdHB1YmxpYyBQRVJJT0QoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5QRVJJT0QsIDApOyB9XG5cdHB1YmxpYyBsaXRlcmFsKCk6IExpdGVyYWxDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBMaXRlcmFsQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX2Rlc2NyaXB0aW9uVGV4dDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25UZXh0KSBsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uVGV4dCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uVGV4dCkgbGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uVGV4dCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25UZXh0KSByZXR1cm4gdmlzaXRvci52aXNpdERlc2NyaXB0aW9uVGV4dCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBpbmxpbmVUYWcoKTogSW5saW5lVGFnQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSW5saW5lVGFnQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGRlc2NyaXB0aW9uTGluZVRleHQoKTogRGVzY3JpcHRpb25MaW5lVGV4dENvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIERlc2NyaXB0aW9uTGluZVRleHRDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lRWxlbWVudDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lRWxlbWVudCkgbGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbkxpbmVFbGVtZW50KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lRWxlbWVudCkgbGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZUVsZW1lbnQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZUVsZW1lbnQpIHJldHVybiB2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25MaW5lRWxlbWVudCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVzY3JpcHRpb25MaW5lVGV4dENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBkZXNjcmlwdGlvblRleHQoKTogRGVzY3JpcHRpb25UZXh0Q29udGV4dFtdO1xuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KGk6IG51bWJlcik6IERlc2NyaXB0aW9uVGV4dENvbnRleHQ7XG5cdHB1YmxpYyBkZXNjcmlwdGlvblRleHQoaT86IG51bWJlcik6IERlc2NyaXB0aW9uVGV4dENvbnRleHQgfCBEZXNjcmlwdGlvblRleHRDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhEZXNjcmlwdGlvblRleHRDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgRGVzY3JpcHRpb25UZXh0Q29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIEFUKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQVQoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQVQoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoWERvY1BhcnNlci5BVCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuQVQsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lVGV4dDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lVGV4dCkgbGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbkxpbmVUZXh0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lVGV4dCkgbGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZVRleHQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZVRleHQpIHJldHVybiB2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25MaW5lVGV4dCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgSW5saW5lVGFnQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIElOTElORV9UQUdfU1RBUlQoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5JTkxJTkVfVEFHX1NUQVJULCAwKTsgfVxuXHRwdWJsaWMgaW5saW5lVGFnTmFtZSgpOiBJbmxpbmVUYWdOYW1lQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgSW5saW5lVGFnTmFtZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLlNQQUNFLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5CUkFDRV9DTE9TRSwgMCk7IH1cblx0cHVibGljIGlubGluZVRhZ0JvZHkoKTogSW5saW5lVGFnQm9keUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElubGluZVRhZ0JvZHlDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfaW5saW5lVGFnOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJJbmxpbmVUYWcpIGxpc3RlbmVyLmVudGVySW5saW5lVGFnKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0SW5saW5lVGFnKSBsaXN0ZW5lci5leGl0SW5saW5lVGFnKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1BhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRJbmxpbmVUYWcpIHJldHVybiB2aXNpdG9yLnZpc2l0SW5saW5lVGFnKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBJbmxpbmVUYWdOYW1lQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfaW5saW5lVGFnTmFtZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVySW5saW5lVGFnTmFtZSkgbGlzdGVuZXIuZW50ZXJJbmxpbmVUYWdOYW1lKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0SW5saW5lVGFnTmFtZSkgbGlzdGVuZXIuZXhpdElubGluZVRhZ05hbWUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdElubGluZVRhZ05hbWUpIHJldHVybiB2aXNpdG9yLnZpc2l0SW5saW5lVGFnTmFtZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgSW5saW5lVGFnQm9keUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBicmFjZUJvZHkoKTogQnJhY2VCb2R5Q29udGV4dFtdO1xuXHRwdWJsaWMgYnJhY2VCb2R5KGk6IG51bWJlcik6IEJyYWNlQm9keUNvbnRleHQ7XG5cdHB1YmxpYyBicmFjZUJvZHkoaT86IG51bWJlcik6IEJyYWNlQm9keUNvbnRleHQgfCBCcmFjZUJvZHlDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhCcmFjZUJvZHlDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgQnJhY2VCb2R5Q29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV9pbmxpbmVUYWdCb2R5OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJJbmxpbmVUYWdCb2R5KSBsaXN0ZW5lci5lbnRlcklubGluZVRhZ0JvZHkodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRJbmxpbmVUYWdCb2R5KSBsaXN0ZW5lci5leGl0SW5saW5lVGFnQm9keSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFhEb2NQYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0SW5saW5lVGFnQm9keSkgcmV0dXJuIHZpc2l0b3IudmlzaXRJbmxpbmVUYWdCb2R5KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBCcmFjZUV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgQlJBQ0VfT1BFTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkJSQUNFX09QRU4sIDApOyB9XG5cdHB1YmxpYyBCUkFDRV9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihYRG9jUGFyc2VyLkJSQUNFX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgYnJhY2VCb2R5KCk6IEJyYWNlQm9keUNvbnRleHRbXTtcblx0cHVibGljIGJyYWNlQm9keShpOiBudW1iZXIpOiBCcmFjZUJvZHlDb250ZXh0O1xuXHRwdWJsaWMgYnJhY2VCb2R5KGk/OiBudW1iZXIpOiBCcmFjZUJvZHlDb250ZXh0IHwgQnJhY2VCb2R5Q29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoQnJhY2VCb2R5Q29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIEJyYWNlQm9keUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBYRG9jUGFyc2VyLlJVTEVfYnJhY2VFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJCcmFjZUV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyQnJhY2VFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0QnJhY2VFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0QnJhY2VFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1BhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRCcmFjZUV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0QnJhY2VFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBCcmFjZUJvZHlDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgYnJhY2VFeHByZXNzaW9uKCk6IEJyYWNlRXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEJyYWNlRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBicmFjZVRleHQoKTogQnJhY2VUZXh0Q29udGV4dFtdO1xuXHRwdWJsaWMgYnJhY2VUZXh0KGk6IG51bWJlcik6IEJyYWNlVGV4dENvbnRleHQ7XG5cdHB1YmxpYyBicmFjZVRleHQoaT86IG51bWJlcik6IEJyYWNlVGV4dENvbnRleHQgfCBCcmFjZVRleHRDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhCcmFjZVRleHRDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgQnJhY2VUZXh0Q29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFhEb2NQYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFhEb2NQYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV9icmFjZUJvZHk7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckJyYWNlQm9keSkgbGlzdGVuZXIuZW50ZXJCcmFjZUJvZHkodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRCcmFjZUJvZHkpIGxpc3RlbmVyLmV4aXRCcmFjZUJvZHkodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEJyYWNlQm9keSkgcmV0dXJuIHZpc2l0b3IudmlzaXRCcmFjZUJvZHkodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEJyYWNlVGV4dENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBURVhUX0NPTlRFTlQoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5URVhUX0NPTlRFTlQsIDApOyB9XG5cdHB1YmxpYyBJRCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jUGFyc2VyLklELCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5TUEFDRSwgMCk7IH1cblx0cHVibGljIEZPUldBUkRfU0xBU0goKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5GT1JXQVJEX1NMQVNILCAwKTsgfVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihYRG9jUGFyc2VyLk5FV0xJTkUsIDApOyB9XG5cdHB1YmxpYyBQRVJJT0QoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oWERvY1BhcnNlci5QRVJJT0QsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFhEb2NQYXJzZXIuUlVMRV9icmFjZVRleHQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckJyYWNlVGV4dCkgbGlzdGVuZXIuZW50ZXJCcmFjZVRleHQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogWERvY1BhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRCcmFjZVRleHQpIGxpc3RlbmVyLmV4aXRCcmFjZVRleHQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBYRG9jUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEJyYWNlVGV4dCkgcmV0dXJuIHZpc2l0b3IudmlzaXRCcmFjZVRleHQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgSUQoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oWERvY1BhcnNlci5JRCwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gWERvY1BhcnNlci5SVUxFX2lkZW50aWZpZXI7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFhEb2NQYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlcklkZW50aWZpZXIpIGxpc3RlbmVyLmVudGVySWRlbnRpZmllcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBYRG9jUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdElkZW50aWZpZXIpIGxpc3RlbmVyLmV4aXRJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogWERvY1BhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRJZGVudGlmaWVyKSByZXR1cm4gdmlzaXRvci52aXNpdElkZW50aWZpZXIodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuIl19