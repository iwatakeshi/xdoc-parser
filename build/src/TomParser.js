"use strict";
// Generated from TomParser.g4 by ANTLR 4.6-SNAPSHOT
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
class TomParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(TomParser._ATN, this);
    }
    get vocabulary() {
        return TomParser.VOCABULARY;
    }
    get grammarFileName() { return "TomParser.g4"; }
    get ruleNames() { return TomParser.ruleNames; }
    get serializedATN() { return TomParser._serializedATN; }
    documentation() {
        let _localctx = new DocumentationContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, TomParser.RULE_documentation);
        let _la;
        try {
            this.state = 107;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.EOF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 100;
                        this.match(TomParser.EOF);
                    }
                    break;
                case TomParser.NEWLINE:
                case TomParser.SPACE:
                case TomParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 101;
                        this.body();
                        this.state = 103;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.NEWLINE) {
                            {
                                this.state = 102;
                                this.match(TomParser.NEWLINE);
                            }
                        }
                        this.state = 105;
                        this.match(TomParser.EOF);
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
        this.enterRule(_localctx, 2, TomParser.RULE_body);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 112;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.NEWLINE || _la === TomParser.SPACE) {
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
        this.enterRule(_localctx, 4, TomParser.RULE_whitespace);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                _la = this._input.LA(1);
                if (!(_la === TomParser.NEWLINE || _la === TomParser.SPACE)) {
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
        this.enterRule(_localctx, 6, TomParser.RULE_annotations);
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
                                this.match(TomParser.NEWLINE);
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
        this.enterRule(_localctx, 8, TomParser.RULE_tag);
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
                        this.match(TomParser.SPACE);
                        this.state = 130;
                        this.match(TomParser.MINUS);
                        this.state = 131;
                        this.match(TomParser.SPACE);
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
                        this.match(TomParser.SPACE);
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
                        this.match(TomParser.SPACE);
                        this.state = 140;
                        this.tagID();
                        this.state = 142;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 141;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 144;
                        this.match(TomParser.EQUAL);
                        this.state = 146;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 145;
                                this.match(TomParser.SPACE);
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
                        this.match(TomParser.SPACE);
                        this.state = 152;
                        this.tagID();
                        this.state = 153;
                        this.match(TomParser.SPACE);
                        this.state = 154;
                        this.match(TomParser.MINUS);
                        this.state = 155;
                        this.match(TomParser.SPACE);
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
                        this.match(TomParser.SPACE);
                        this.state = 160;
                        this.tagID();
                        this.state = 161;
                        this.match(TomParser.SPACE);
                        this.state = 162;
                        this.match(TomParser.EQUAL);
                        this.state = 164;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 163;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 166;
                        this.value();
                        this.state = 167;
                        this.match(TomParser.SPACE);
                        this.state = 168;
                        this.match(TomParser.MINUS);
                        this.state = 169;
                        this.match(TomParser.SPACE);
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
                        this.match(TomParser.SPACE);
                        this.state = 174;
                        this.tagID();
                        this.state = 176;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 175;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 178;
                        this.match(TomParser.COLON);
                        this.state = 180;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 179;
                                this.match(TomParser.SPACE);
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
                        this.match(TomParser.SPACE);
                        this.state = 186;
                        this.tagID();
                        this.state = 188;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 187;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 190;
                        this.match(TomParser.COLON);
                        this.state = 192;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 191;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 194;
                        this.type(0);
                        this.state = 196;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 195;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 198;
                        this.match(TomParser.EQUAL);
                        this.state = 200;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 199;
                                this.match(TomParser.SPACE);
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
                        this.match(TomParser.SPACE);
                        this.state = 206;
                        this.tagID();
                        this.state = 208;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 207;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 210;
                        this.match(TomParser.COLON);
                        this.state = 212;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 211;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 214;
                        this.type(0);
                        this.state = 215;
                        this.match(TomParser.SPACE);
                        this.state = 216;
                        this.match(TomParser.MINUS);
                        this.state = 217;
                        this.match(TomParser.SPACE);
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
                        this.match(TomParser.SPACE);
                        this.state = 222;
                        this.tagID();
                        this.state = 224;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 223;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 226;
                        this.match(TomParser.COLON);
                        this.state = 228;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 227;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 230;
                        this.type(0);
                        this.state = 232;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 231;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 234;
                        this.match(TomParser.EQUAL);
                        this.state = 236;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 235;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 238;
                        this.value();
                        this.state = 239;
                        this.match(TomParser.SPACE);
                        this.state = 240;
                        this.match(TomParser.MINUS);
                        this.state = 241;
                        this.match(TomParser.SPACE);
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
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 245;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 248;
                        this.match(TomParser.COLON);
                        this.state = 250;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 249;
                                this.match(TomParser.SPACE);
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
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 255;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 258;
                        this.match(TomParser.COLON);
                        this.state = 260;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 259;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 262;
                        this.type(0);
                        this.state = 263;
                        this.match(TomParser.SPACE);
                        this.state = 264;
                        this.match(TomParser.MINUS);
                        this.state = 265;
                        this.match(TomParser.SPACE);
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
        this.enterRule(_localctx, 10, TomParser.RULE_tagName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 270;
                this.match(TomParser.AT);
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
        this.enterRule(_localctx, 12, TomParser.RULE_tagID);
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
        this.enterRule(_localctx, 14, TomParser.RULE_optionalTagID);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 278;
                this.identifier();
                this.state = 279;
                this.match(TomParser.QUESTION);
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
        this.enterRule(_localctx, 16, TomParser.RULE_propertyTagID);
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
                                    this.match(TomParser.PERIOD);
                                    this.state = 283;
                                    this.optionalTagOrIdentifier();
                                }
                            }
                            this.state = 286;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === TomParser.PERIOD);
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
                                    this.match(TomParser.PERIOD);
                                    this.state = 290;
                                    this.optionalTagOrIdentifier();
                                }
                            }
                            this.state = 293;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === TomParser.PERIOD);
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
        this.enterRule(_localctx, 18, TomParser.RULE_optionalTagOrIdentifier);
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
        this.enterRecursionRule(_localctx, 20, TomParser.RULE_type, _p);
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
                                this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_type);
                                this.state = 312;
                                if (!(this.precpred(this._ctx, 9)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                this.state = 314;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === TomParser.SPACE) {
                                    {
                                        this.state = 313;
                                        this.match(TomParser.SPACE);
                                    }
                                }
                                this.state = 316;
                                _la = this._input.LA(1);
                                if (!(_la === TomParser.AMP || _la === TomParser.PIPE)) {
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
                                if (_la === TomParser.SPACE) {
                                    {
                                        this.state = 317;
                                        this.match(TomParser.SPACE);
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
        this.enterRule(_localctx, 22, TomParser.RULE_unaryType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 326;
                _la = this._input.LA(1);
                if (!(_la === TomParser.STAR || _la === TomParser.AMP)) {
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
        this.enterRule(_localctx, 24, TomParser.RULE_tupleType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 330;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.ID) {
                    {
                        this.state = 329;
                        this.identifier();
                    }
                }
                this.state = 332;
                this.match(TomParser.LESSTHAN);
                this.state = 334;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 333;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 336;
                this.tupleTypeList();
                this.state = 338;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 337;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 340;
                this.match(TomParser.GREATERTHAN);
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
        this.enterRule(_localctx, 26, TomParser.RULE_tupleTypeList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 342;
                this.type(0);
                this.state = 344;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 343;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 351;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 346;
                            this.match(TomParser.COMMA);
                            this.state = 348;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 347;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 350;
                            this.type(0);
                        }
                    }
                    this.state = 353;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === TomParser.COMMA);
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
        this.enterRule(_localctx, 28, TomParser.RULE_primaryType);
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
        this.enterRule(_localctx, 30, TomParser.RULE_identifierOrKeyword);
        try {
            this.state = 361;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 359;
                        this.identifier();
                    }
                    break;
                case TomParser.NullLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 360;
                        this.match(TomParser.NullLiteral);
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
        this.enterRule(_localctx, 32, TomParser.RULE_parenthesizedType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 363;
                this.match(TomParser.PAREN_OPEN);
                this.state = 365;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 364;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 367;
                this.type(0);
                this.state = 369;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 368;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 371;
                this.match(TomParser.PAREN_CLOSE);
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
        this.enterRule(_localctx, 34, TomParser.RULE_lambdaType);
        let _la;
        try {
            this.state = 402;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.PAREN_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 373;
                        this.match(TomParser.PAREN_OPEN);
                        this.state = 375;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                            case 1:
                                {
                                    this.state = 374;
                                    this.match(TomParser.SPACE);
                                }
                                break;
                        }
                        this.state = 378;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.ID) {
                            {
                                this.state = 377;
                                this.formalParameterSequence();
                            }
                        }
                        this.state = 381;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 380;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 383;
                        this.match(TomParser.PAREN_CLOSE);
                        this.state = 385;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 384;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 387;
                        this.match(TomParser.ARROW);
                        this.state = 389;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 388;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 391;
                        this.type(0);
                    }
                    break;
                case TomParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 392;
                        this.parameter();
                        this.state = 394;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 393;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 396;
                        this.match(TomParser.ARROW);
                        this.state = 398;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 397;
                                this.match(TomParser.SPACE);
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
        this.enterRule(_localctx, 36, TomParser.RULE_formalParameterSequence);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 404;
                this.parameter();
                this.state = 412;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.COMMA) {
                    {
                        {
                            this.state = 405;
                            this.match(TomParser.COMMA);
                            this.state = 407;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 406;
                                    this.match(TomParser.SPACE);
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
        this.enterRule(_localctx, 38, TomParser.RULE_parameter);
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
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 416;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 419;
                            this.match(TomParser.COLON);
                            this.state = 421;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 420;
                                    this.match(TomParser.SPACE);
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
        this.enterRecursionRule(_localctx, 40, TomParser.RULE_arrayType, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 474;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TomParser.BRACKET_OPEN:
                        {
                            this.state = 427;
                            this.match(TomParser.BRACKET_OPEN);
                            this.state = 429;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 428;
                                        this.match(TomParser.NEWLINE);
                                    }
                                    break;
                            }
                            this.state = 432;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 431;
                                        this.match(TomParser.SPACE);
                                    }
                                    break;
                            }
                            this.state = 435;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 434;
                                        this.match(TomParser.NEWLINE);
                                    }
                                    break;
                            }
                            this.state = 438;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (TomParser.NullLiteral - 6)) | (1 << (TomParser.ID - 6)) | (1 << (TomParser.STAR - 6)) | (1 << (TomParser.AMP - 6)) | (1 << (TomParser.BRACE_OPEN - 6)) | (1 << (TomParser.PAREN_OPEN - 6)) | (1 << (TomParser.BRACKET_OPEN - 6)) | (1 << (TomParser.LESSTHAN - 6)))) !== 0)) {
                                {
                                    this.state = 437;
                                    this.type(0);
                                }
                            }
                            this.state = 453;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === TomParser.COMMA) {
                                {
                                    {
                                        this.state = 440;
                                        this.match(TomParser.COMMA);
                                        this.state = 442;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 441;
                                                    this.match(TomParser.NEWLINE);
                                                }
                                                break;
                                        }
                                        this.state = 445;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 444;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 448;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.NEWLINE) {
                                            {
                                                this.state = 447;
                                                this.match(TomParser.NEWLINE);
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
                                        this.match(TomParser.NEWLINE);
                                    }
                                    break;
                            }
                            this.state = 460;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 459;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 463;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.NEWLINE) {
                                {
                                    this.state = 462;
                                    this.match(TomParser.NEWLINE);
                                }
                            }
                            this.state = 465;
                            this.match(TomParser.BRACKET_CLOSE);
                        }
                        break;
                    case TomParser.ID:
                        {
                            this.state = 466;
                            this.identifier();
                            this.state = 467;
                            this.match(TomParser.BRACKET_OPEN);
                            this.state = 468;
                            this.match(TomParser.BRACKET_CLOSE);
                        }
                        break;
                    case TomParser.BRACE_OPEN:
                        {
                            this.state = 470;
                            this.objectType();
                            this.state = 471;
                            this.match(TomParser.BRACKET_OPEN);
                            this.state = 472;
                            this.match(TomParser.BRACKET_CLOSE);
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
                                this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_arrayType);
                                this.state = 476;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 477;
                                this.match(TomParser.BRACKET_OPEN);
                                this.state = 479;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (TomParser.NullLiteral - 6)) | (1 << (TomParser.ID - 6)) | (1 << (TomParser.STAR - 6)) | (1 << (TomParser.AMP - 6)) | (1 << (TomParser.BRACE_OPEN - 6)) | (1 << (TomParser.PAREN_OPEN - 6)) | (1 << (TomParser.BRACKET_OPEN - 6)) | (1 << (TomParser.LESSTHAN - 6)))) !== 0)) {
                                    {
                                        this.state = 478;
                                        this.type(0);
                                    }
                                }
                                this.state = 481;
                                this.match(TomParser.BRACKET_CLOSE);
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
        this.enterRule(_localctx, 42, TomParser.RULE_objectType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                this.match(TomParser.BRACE_OPEN);
                this.state = 489;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                    case 1:
                        {
                            this.state = 488;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 492;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                    case 1:
                        {
                            this.state = 491;
                            this.match(TomParser.NEWLINE);
                        }
                        break;
                }
                this.state = 495;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                    case 1:
                        {
                            this.state = 494;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 498;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (TomParser.NullLiteral - 6)) | (1 << (TomParser.ID - 6)) | (1 << (TomParser.STAR - 6)) | (1 << (TomParser.AMP - 6)) | (1 << (TomParser.BRACE_OPEN - 6)) | (1 << (TomParser.PAREN_OPEN - 6)) | (1 << (TomParser.BRACKET_OPEN - 6)) | (1 << (TomParser.LESSTHAN - 6)))) !== 0)) {
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
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 504;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.NEWLINE) {
                    {
                        this.state = 503;
                        this.match(TomParser.NEWLINE);
                    }
                }
                this.state = 507;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 506;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 509;
                this.match(TomParser.BRACE_CLOSE);
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
        this.enterRule(_localctx, 44, TomParser.RULE_objectPairTypeList);
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
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 528;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.COMMA) {
                    {
                        {
                            this.state = 515;
                            this.match(TomParser.COMMA);
                            this.state = 517;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 516;
                                        this.match(TomParser.SPACE);
                                    }
                                    break;
                            }
                            this.state = 520;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.NEWLINE) {
                                {
                                    this.state = 519;
                                    this.match(TomParser.NEWLINE);
                                }
                            }
                            this.state = 523;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 522;
                                    this.match(TomParser.SPACE);
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
        this.enterRule(_localctx, 46, TomParser.RULE_objectPairType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 531;
                this.type(0);
                this.state = 533;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.QUESTION) {
                    {
                        this.state = 532;
                        this.match(TomParser.QUESTION);
                    }
                }
                this.state = 536;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 535;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 538;
                this.match(TomParser.COLON);
                this.state = 540;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 539;
                        this.match(TomParser.SPACE);
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
        this.enterRule(_localctx, 48, TomParser.RULE_optionalType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 544;
                this.identifier();
                this.state = 545;
                this.match(TomParser.QUESTION);
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
        this.enterRule(_localctx, 50, TomParser.RULE_propertyType);
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
                                            this.match(TomParser.PERIOD);
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
                                            this.match(TomParser.PERIOD);
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
        this.enterRule(_localctx, 52, TomParser.RULE_optionalTypeOrIdentifer);
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
        this.enterRule(_localctx, 54, TomParser.RULE_value);
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
        this.enterRecursionRule(_localctx, 56, TomParser.RULE_expression, _p);
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
                                        this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_expression);
                                        this.state = 578;
                                        if (!(this.precpred(this._ctx, 7)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        this.state = 580;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 579;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 582;
                                        _la = this._input.LA(1);
                                        if (!(_la === TomParser.STAR || _la === TomParser.FORWARD_SLASH)) {
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
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 583;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 586;
                                        this.expression(8);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_expression);
                                        this.state = 587;
                                        if (!(this.precpred(this._ctx, 6)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        this.state = 589;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 588;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 591;
                                        _la = this._input.LA(1);
                                        if (!(_la === TomParser.PLUS || _la === TomParser.MINUS)) {
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
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 592;
                                                this.match(TomParser.SPACE);
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
        this.enterRule(_localctx, 58, TomParser.RULE_unaryExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 601;
                _la = this._input.LA(1);
                if (!(_la === TomParser.PLUS || _la === TomParser.MINUS)) {
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
        this.enterRule(_localctx, 60, TomParser.RULE_arrayExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 604;
                this.match(TomParser.BRACKET_OPEN);
                this.state = 606;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                    case 1:
                        {
                            this.state = 605;
                            this.match(TomParser.NEWLINE);
                        }
                        break;
                }
                this.state = 609;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                    case 1:
                        {
                            this.state = 608;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 612;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                    case 1:
                        {
                            this.state = 611;
                            this.match(TomParser.NEWLINE);
                        }
                        break;
                }
                this.state = 615;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.ID) | (1 << TomParser.PLUS) | (1 << TomParser.MINUS) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.PAREN_OPEN) | (1 << TomParser.BRACKET_OPEN))) !== 0)) {
                    {
                        this.state = 614;
                        this.expression(0);
                    }
                }
                this.state = 630;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.COMMA) {
                    {
                        {
                            this.state = 617;
                            this.match(TomParser.COMMA);
                            this.state = 619;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 618;
                                        this.match(TomParser.NEWLINE);
                                    }
                                    break;
                            }
                            this.state = 622;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 621;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 625;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.NEWLINE) {
                                {
                                    this.state = 624;
                                    this.match(TomParser.NEWLINE);
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
                            this.match(TomParser.NEWLINE);
                        }
                        break;
                }
                this.state = 637;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 636;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 640;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.NEWLINE) {
                    {
                        this.state = 639;
                        this.match(TomParser.NEWLINE);
                    }
                }
                this.state = 642;
                this.match(TomParser.BRACKET_CLOSE);
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
        this.enterRule(_localctx, 62, TomParser.RULE_objectExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 644;
                this.match(TomParser.BRACE_OPEN);
                this.state = 646;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
                    case 1:
                        {
                            this.state = 645;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 649;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                    case 1:
                        {
                            this.state = 648;
                            this.match(TomParser.NEWLINE);
                        }
                        break;
                }
                this.state = 652;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                    case 1:
                        {
                            this.state = 651;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 655;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral))) !== 0)) {
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
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 661;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.NEWLINE) {
                    {
                        this.state = 660;
                        this.match(TomParser.NEWLINE);
                    }
                }
                this.state = 664;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 663;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 666;
                this.match(TomParser.BRACE_CLOSE);
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
        this.enterRule(_localctx, 64, TomParser.RULE_objectPairExpressionList);
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
                                if (_la === TomParser.SPACE) {
                                    {
                                        this.state = 669;
                                        this.match(TomParser.SPACE);
                                    }
                                }
                                this.state = 672;
                                this.match(TomParser.COMMA);
                                this.state = 674;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 115, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 673;
                                            this.match(TomParser.SPACE);
                                        }
                                        break;
                                }
                                this.state = 677;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === TomParser.NEWLINE) {
                                    {
                                        this.state = 676;
                                        this.match(TomParser.NEWLINE);
                                    }
                                }
                                this.state = 680;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === TomParser.SPACE) {
                                    {
                                        this.state = 679;
                                        this.match(TomParser.SPACE);
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
        this.enterRule(_localctx, 66, TomParser.RULE_objectPairExpression);
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
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 689;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 692;
                        this.match(TomParser.COLON);
                        this.state = 694;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 693;
                                this.match(TomParser.SPACE);
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
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 699;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 702;
                        this.match(TomParser.COLON);
                        this.state = 704;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 703;
                                this.match(TomParser.SPACE);
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
        this.enterRule(_localctx, 68, TomParser.RULE_lambdaExpression);
        let _la;
        try {
            this.state = 741;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.PAREN_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 710;
                        this.match(TomParser.PAREN_OPEN);
                        this.state = 712;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
                            case 1:
                                {
                                    this.state = 711;
                                    this.match(TomParser.SPACE);
                                }
                                break;
                        }
                        this.state = 715;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.ID) {
                            {
                                this.state = 714;
                                this.formalParameterSequence();
                            }
                        }
                        this.state = 718;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 717;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 720;
                        this.match(TomParser.PAREN_CLOSE);
                        this.state = 722;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 721;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 724;
                        this.match(TomParser.ARROW);
                        this.state = 726;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 725;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 728;
                        this.type(0);
                    }
                    break;
                case TomParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 729;
                        this.parameter();
                        this.state = 731;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 730;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 733;
                        this.match(TomParser.ARROW);
                        this.state = 735;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 734;
                                this.match(TomParser.SPACE);
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
                                    this.match(TomParser.QUESTION);
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
        this.enterRule(_localctx, 70, TomParser.RULE_literal);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 743;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral))) !== 0))) {
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
        this.enterRule(_localctx, 72, TomParser.RULE_parenthesizedExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 745;
                this.match(TomParser.PAREN_OPEN);
                this.state = 747;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 746;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 749;
                this.expression(0);
                this.state = 751;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 750;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 753;
                this.match(TomParser.PAREN_CLOSE);
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
        this.enterRule(_localctx, 74, TomParser.RULE_description);
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
        this.enterRule(_localctx, 76, TomParser.RULE_descriptionLine);
        let _la;
        try {
            this.state = 771;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.IntegerLiteral:
                case TomParser.FloatingPointLiteral:
                case TomParser.BooleanLiteral:
                case TomParser.CharacterLiteral:
                case TomParser.StringLiteral:
                case TomParser.NullLiteral:
                case TomParser.ID:
                case TomParser.SPACE:
                case TomParser.TEXT_CONTENT:
                case TomParser.MINUS:
                case TomParser.FORWARD_SLASH:
                case TomParser.COLON:
                case TomParser.PERIOD:
                case TomParser.BRACE_OPEN:
                case TomParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 757;
                        this.descriptionLineStart();
                        this.state = 761;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.ID) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.AT) | (1 << TomParser.MINUS) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.COLON) | (1 << TomParser.PERIOD) | (1 << TomParser.INLINE_TAG_START) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACE_CLOSE))) !== 0)) {
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
                case TomParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 764;
                        this.inlineTag();
                        this.state = 768;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.ID) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.AT) | (1 << TomParser.MINUS) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.COLON) | (1 << TomParser.PERIOD) | (1 << TomParser.INLINE_TAG_START) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACE_CLOSE))) !== 0)) {
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
        this.enterRule(_localctx, 78, TomParser.RULE_descriptionLineStart);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 774;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 773;
                        this.match(TomParser.SPACE);
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
                                case TomParser.IntegerLiteral:
                                case TomParser.FloatingPointLiteral:
                                case TomParser.BooleanLiteral:
                                case TomParser.CharacterLiteral:
                                case TomParser.StringLiteral:
                                case TomParser.NullLiteral:
                                case TomParser.ID:
                                case TomParser.TEXT_CONTENT:
                                case TomParser.MINUS:
                                case TomParser.FORWARD_SLASH:
                                case TomParser.COLON:
                                case TomParser.PERIOD:
                                case TomParser.BRACE_OPEN:
                                case TomParser.BRACE_CLOSE:
                                    {
                                        this.state = 781;
                                        this.descriptionText();
                                    }
                                    break;
                                case TomParser.SPACE:
                                    {
                                        this.state = 782;
                                        this.match(TomParser.SPACE);
                                    }
                                    break;
                                case TomParser.AT:
                                    {
                                        this.state = 783;
                                        this.match(TomParser.AT);
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
        this.enterRule(_localctx, 80, TomParser.RULE_descriptionText);
        try {
            this.state = 798;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.TEXT_CONTENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 789;
                        this.match(TomParser.TEXT_CONTENT);
                    }
                    break;
                case TomParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 790;
                        this.match(TomParser.ID);
                    }
                    break;
                case TomParser.FORWARD_SLASH:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 791;
                        this.match(TomParser.FORWARD_SLASH);
                    }
                    break;
                case TomParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 792;
                        this.match(TomParser.BRACE_OPEN);
                    }
                    break;
                case TomParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 793;
                        this.match(TomParser.BRACE_CLOSE);
                    }
                    break;
                case TomParser.COLON:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 794;
                        this.match(TomParser.COLON);
                    }
                    break;
                case TomParser.MINUS:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 795;
                        this.match(TomParser.MINUS);
                    }
                    break;
                case TomParser.PERIOD:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 796;
                        this.match(TomParser.PERIOD);
                    }
                    break;
                case TomParser.IntegerLiteral:
                case TomParser.FloatingPointLiteral:
                case TomParser.BooleanLiteral:
                case TomParser.CharacterLiteral:
                case TomParser.StringLiteral:
                case TomParser.NullLiteral:
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
        this.enterRule(_localctx, 82, TomParser.RULE_descriptionLineElement);
        try {
            this.state = 802;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 800;
                        this.inlineTag();
                    }
                    break;
                case TomParser.IntegerLiteral:
                case TomParser.FloatingPointLiteral:
                case TomParser.BooleanLiteral:
                case TomParser.CharacterLiteral:
                case TomParser.StringLiteral:
                case TomParser.NullLiteral:
                case TomParser.ID:
                case TomParser.SPACE:
                case TomParser.TEXT_CONTENT:
                case TomParser.AT:
                case TomParser.MINUS:
                case TomParser.FORWARD_SLASH:
                case TomParser.COLON:
                case TomParser.PERIOD:
                case TomParser.BRACE_OPEN:
                case TomParser.BRACE_CLOSE:
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
        this.enterRule(_localctx, 84, TomParser.RULE_descriptionLineText);
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
                                    case TomParser.IntegerLiteral:
                                    case TomParser.FloatingPointLiteral:
                                    case TomParser.BooleanLiteral:
                                    case TomParser.CharacterLiteral:
                                    case TomParser.StringLiteral:
                                    case TomParser.NullLiteral:
                                    case TomParser.ID:
                                    case TomParser.TEXT_CONTENT:
                                    case TomParser.MINUS:
                                    case TomParser.FORWARD_SLASH:
                                    case TomParser.COLON:
                                    case TomParser.PERIOD:
                                    case TomParser.BRACE_OPEN:
                                    case TomParser.BRACE_CLOSE:
                                        {
                                            this.state = 804;
                                            this.descriptionText();
                                        }
                                        break;
                                    case TomParser.SPACE:
                                        {
                                            this.state = 805;
                                            this.match(TomParser.SPACE);
                                        }
                                        break;
                                    case TomParser.AT:
                                        {
                                            this.state = 806;
                                            this.match(TomParser.AT);
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
        this.enterRule(_localctx, 86, TomParser.RULE_inlineTag);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 811;
                this.match(TomParser.INLINE_TAG_START);
                this.state = 812;
                this.inlineTagName();
                this.state = 813;
                this.match(TomParser.SPACE);
                this.state = 815;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0)) {
                    {
                        this.state = 814;
                        this.inlineTagBody();
                    }
                }
                this.state = 817;
                this.match(TomParser.BRACE_CLOSE);
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
        this.enterRule(_localctx, 88, TomParser.RULE_inlineTagName);
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
        this.enterRule(_localctx, 90, TomParser.RULE_inlineTagBody);
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
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0));
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
        this.enterRule(_localctx, 92, TomParser.RULE_braceExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 826;
                this.match(TomParser.BRACE_OPEN);
                this.state = 830;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0)) {
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
                this.match(TomParser.BRACE_CLOSE);
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
        this.enterRule(_localctx, 94, TomParser.RULE_braceBody);
        try {
            let _alt;
            this.state = 844;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 835;
                        this.braceExpression();
                    }
                    break;
                case TomParser.ID:
                case TomParser.NEWLINE:
                case TomParser.SPACE:
                case TomParser.TEXT_CONTENT:
                case TomParser.FORWARD_SLASH:
                case TomParser.PERIOD:
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
                                        this.match(TomParser.NEWLINE);
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
        this.enterRule(_localctx, 96, TomParser.RULE_braceText);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 846;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD))) !== 0))) {
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
        this.enterRule(_localctx, 98, TomParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 848;
                this.match(TomParser.ID);
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
        if (!TomParser.__ATN) {
            TomParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(TomParser._serializedATN));
        }
        return TomParser.__ATN;
    }
}
TomParser.IntegerLiteral = 1;
TomParser.FloatingPointLiteral = 2;
TomParser.BooleanLiteral = 3;
TomParser.CharacterLiteral = 4;
TomParser.StringLiteral = 5;
TomParser.NullLiteral = 6;
TomParser.ID = 7;
TomParser.NEWLINE = 8;
TomParser.SPACE = 9;
TomParser.TEXT_CONTENT = 10;
TomParser.AT = 11;
TomParser.PLUS = 12;
TomParser.MINUS = 13;
TomParser.STAR = 14;
TomParser.FORWARD_SLASH = 15;
TomParser.COLON = 16;
TomParser.PERIOD = 17;
TomParser.COMMA = 18;
TomParser.EQUAL = 19;
TomParser.QUESTION = 20;
TomParser.AMP = 21;
TomParser.PIPE = 22;
TomParser.ARROW = 23;
TomParser.EXCLAMATION = 24;
TomParser.INLINE_TAG_START = 25;
TomParser.BRACE_OPEN = 26;
TomParser.BRACE_CLOSE = 27;
TomParser.PAREN_OPEN = 28;
TomParser.PAREN_CLOSE = 29;
TomParser.BRACKET_OPEN = 30;
TomParser.BRACKET_CLOSE = 31;
TomParser.LESSTHAN = 32;
TomParser.GREATERTHAN = 33;
TomParser.RULE_documentation = 0;
TomParser.RULE_body = 1;
TomParser.RULE_whitespace = 2;
TomParser.RULE_annotations = 3;
TomParser.RULE_tag = 4;
TomParser.RULE_tagName = 5;
TomParser.RULE_tagID = 6;
TomParser.RULE_optionalTagID = 7;
TomParser.RULE_propertyTagID = 8;
TomParser.RULE_optionalTagOrIdentifier = 9;
TomParser.RULE_type = 10;
TomParser.RULE_unaryType = 11;
TomParser.RULE_tupleType = 12;
TomParser.RULE_tupleTypeList = 13;
TomParser.RULE_primaryType = 14;
TomParser.RULE_identifierOrKeyword = 15;
TomParser.RULE_parenthesizedType = 16;
TomParser.RULE_lambdaType = 17;
TomParser.RULE_formalParameterSequence = 18;
TomParser.RULE_parameter = 19;
TomParser.RULE_arrayType = 20;
TomParser.RULE_objectType = 21;
TomParser.RULE_objectPairTypeList = 22;
TomParser.RULE_objectPairType = 23;
TomParser.RULE_optionalType = 24;
TomParser.RULE_propertyType = 25;
TomParser.RULE_optionalTypeOrIdentifer = 26;
TomParser.RULE_value = 27;
TomParser.RULE_expression = 28;
TomParser.RULE_unaryExpression = 29;
TomParser.RULE_arrayExpression = 30;
TomParser.RULE_objectExpression = 31;
TomParser.RULE_objectPairExpressionList = 32;
TomParser.RULE_objectPairExpression = 33;
TomParser.RULE_lambdaExpression = 34;
TomParser.RULE_literal = 35;
TomParser.RULE_parenthesizedExpression = 36;
TomParser.RULE_description = 37;
TomParser.RULE_descriptionLine = 38;
TomParser.RULE_descriptionLineStart = 39;
TomParser.RULE_descriptionText = 40;
TomParser.RULE_descriptionLineElement = 41;
TomParser.RULE_descriptionLineText = 42;
TomParser.RULE_inlineTag = 43;
TomParser.RULE_inlineTagName = 44;
TomParser.RULE_inlineTagBody = 45;
TomParser.RULE_braceExpression = 46;
TomParser.RULE_braceBody = 47;
TomParser.RULE_braceText = 48;
TomParser.RULE_identifier = 49;
TomParser.ruleNames = [
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
TomParser._LITERAL_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "'@'", "'+'", "'-'", "'*'",
    "'/'", "':'", "'.'", "','", "'='", "'?'", "'&'", "'|'", undefined, "'!'",
    "'{@'", "'{'", "'}'", "'('", "')'", "'['", "']'", "'<'", "'>'"
];
TomParser._SYMBOLIC_NAMES = [
    undefined, "IntegerLiteral", "FloatingPointLiteral", "BooleanLiteral",
    "CharacterLiteral", "StringLiteral", "NullLiteral", "ID", "NEWLINE", "SPACE",
    "TEXT_CONTENT", "AT", "PLUS", "MINUS", "STAR", "FORWARD_SLASH", "COLON",
    "PERIOD", "COMMA", "EQUAL", "QUESTION", "AMP", "PIPE", "ARROW", "EXCLAMATION",
    "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE",
    "BRACKET_OPEN", "BRACKET_CLOSE", "LESSTHAN", "GREATERTHAN"
];
TomParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TomParser._LITERAL_NAMES, TomParser._SYMBOLIC_NAMES, []);
TomParser._serializedATNSegments = 2;
TomParser._serializedATNSegment0 = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03#\u0355\x04\x02" +
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
TomParser._serializedATNSegment1 = "\u01D2\x07\n\x02\x02\u01D1\u01D0\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02" +
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
TomParser._serializedATN = Utils.join([
    TomParser._serializedATNSegment0,
    TomParser._serializedATNSegment1
], "");
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], TomParser.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], TomParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], TomParser.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], TomParser.prototype, "serializedATN", null);
exports.TomParser = TomParser;
class DocumentationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() { return this.getToken(TomParser.EOF, 0); }
    body() {
        return this.tryGetRuleContext(0, BodyContext);
    }
    NEWLINE() { return this.tryGetToken(TomParser.NEWLINE, 0); }
    get ruleIndex() { return TomParser.RULE_documentation; }
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
    get ruleIndex() { return TomParser.RULE_body; }
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
    SPACE() { return this.tryGetToken(TomParser.SPACE, 0); }
    NEWLINE() { return this.tryGetToken(TomParser.NEWLINE, 0); }
    get ruleIndex() { return TomParser.RULE_whitespace; }
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
            return this.getTokens(TomParser.NEWLINE);
        }
        else {
            return this.getToken(TomParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_annotations; }
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
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    MINUS() { return this.tryGetToken(TomParser.MINUS, 0); }
    description() {
        return this.tryGetRuleContext(0, DescriptionContext);
    }
    tagID() {
        return this.tryGetRuleContext(0, TagIDContext);
    }
    EQUAL() { return this.tryGetToken(TomParser.EQUAL, 0); }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    COLON() { return this.tryGetToken(TomParser.COLON, 0); }
    type() {
        return this.tryGetRuleContext(0, TypeContext);
    }
    get ruleIndex() { return TomParser.RULE_tag; }
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
    AT() { return this.getToken(TomParser.AT, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return TomParser.RULE_tagName; }
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
    get ruleIndex() { return TomParser.RULE_tagID; }
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
    QUESTION() { return this.getToken(TomParser.QUESTION, 0); }
    get ruleIndex() { return TomParser.RULE_optionalTagID; }
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
            return this.getTokens(TomParser.PERIOD);
        }
        else {
            return this.getToken(TomParser.PERIOD, i);
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
    get ruleIndex() { return TomParser.RULE_propertyTagID; }
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
    get ruleIndex() { return TomParser.RULE_optionalTagOrIdentifier; }
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
    PIPE() { return this.tryGetToken(TomParser.PIPE, 0); }
    AMP() { return this.tryGetToken(TomParser.AMP, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
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
    get ruleIndex() { return TomParser.RULE_type; }
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
    AMP() { return this.tryGetToken(TomParser.AMP, 0); }
    STAR() { return this.tryGetToken(TomParser.STAR, 0); }
    get ruleIndex() { return TomParser.RULE_unaryType; }
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
    LESSTHAN() { return this.getToken(TomParser.LESSTHAN, 0); }
    tupleTypeList() {
        return this.getRuleContext(0, TupleTypeListContext);
    }
    GREATERTHAN() { return this.getToken(TomParser.GREATERTHAN, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_tupleType; }
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
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.COMMA);
        }
        else {
            return this.getToken(TomParser.COMMA, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_tupleTypeList; }
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
    get ruleIndex() { return TomParser.RULE_primaryType; }
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
    NullLiteral() { return this.tryGetToken(TomParser.NullLiteral, 0); }
    get ruleIndex() { return TomParser.RULE_identifierOrKeyword; }
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
    PAREN_OPEN() { return this.getToken(TomParser.PAREN_OPEN, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    PAREN_CLOSE() { return this.getToken(TomParser.PAREN_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_parenthesizedType; }
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
    PAREN_OPEN() { return this.tryGetToken(TomParser.PAREN_OPEN, 0); }
    PAREN_CLOSE() { return this.tryGetToken(TomParser.PAREN_CLOSE, 0); }
    ARROW() { return this.getToken(TomParser.ARROW, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    formalParameterSequence() {
        return this.tryGetRuleContext(0, FormalParameterSequenceContext);
    }
    parameter() {
        return this.tryGetRuleContext(0, ParameterContext);
    }
    get ruleIndex() { return TomParser.RULE_lambdaType; }
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
            return this.getTokens(TomParser.COMMA);
        }
        else {
            return this.getToken(TomParser.COMMA, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_formalParameterSequence; }
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
    COLON() { return this.tryGetToken(TomParser.COLON, 0); }
    type() {
        return this.tryGetRuleContext(0, TypeContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_parameter; }
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
    BRACKET_OPEN() { return this.getToken(TomParser.BRACKET_OPEN, 0); }
    BRACKET_CLOSE() { return this.getToken(TomParser.BRACKET_CLOSE, 0); }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.NEWLINE);
        }
        else {
            return this.getToken(TomParser.NEWLINE, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
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
            return this.getTokens(TomParser.COMMA);
        }
        else {
            return this.getToken(TomParser.COMMA, i);
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
    get ruleIndex() { return TomParser.RULE_arrayType; }
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
    BRACE_OPEN() { return this.getToken(TomParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.getToken(TomParser.BRACE_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.NEWLINE);
        }
        else {
            return this.getToken(TomParser.NEWLINE, i);
        }
    }
    objectPairTypeList() {
        return this.tryGetRuleContext(0, ObjectPairTypeListContext);
    }
    get ruleIndex() { return TomParser.RULE_objectType; }
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
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.COMMA);
        }
        else {
            return this.getToken(TomParser.COMMA, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.NEWLINE);
        }
        else {
            return this.getToken(TomParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_objectPairTypeList; }
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
    COLON() { return this.getToken(TomParser.COLON, 0); }
    QUESTION() { return this.tryGetToken(TomParser.QUESTION, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_objectPairType; }
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
    QUESTION() { return this.getToken(TomParser.QUESTION, 0); }
    get ruleIndex() { return TomParser.RULE_optionalType; }
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
            return this.getTokens(TomParser.PERIOD);
        }
        else {
            return this.getToken(TomParser.PERIOD, i);
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
    get ruleIndex() { return TomParser.RULE_propertyType; }
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
    get ruleIndex() { return TomParser.RULE_optionalTypeOrIdentifer; }
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
    get ruleIndex() { return TomParser.RULE_value; }
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
    STAR() { return this.tryGetToken(TomParser.STAR, 0); }
    FORWARD_SLASH() { return this.tryGetToken(TomParser.FORWARD_SLASH, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    PLUS() { return this.tryGetToken(TomParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(TomParser.MINUS, 0); }
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
    get ruleIndex() { return TomParser.RULE_expression; }
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
    PLUS() { return this.tryGetToken(TomParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(TomParser.MINUS, 0); }
    get ruleIndex() { return TomParser.RULE_unaryExpression; }
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
    BRACKET_OPEN() { return this.getToken(TomParser.BRACKET_OPEN, 0); }
    BRACKET_CLOSE() { return this.getToken(TomParser.BRACKET_CLOSE, 0); }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.NEWLINE);
        }
        else {
            return this.getToken(TomParser.NEWLINE, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
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
            return this.getTokens(TomParser.COMMA);
        }
        else {
            return this.getToken(TomParser.COMMA, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_arrayExpression; }
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
    BRACE_OPEN() { return this.getToken(TomParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.getToken(TomParser.BRACE_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.NEWLINE);
        }
        else {
            return this.getToken(TomParser.NEWLINE, i);
        }
    }
    objectPairExpressionList() {
        return this.tryGetRuleContext(0, ObjectPairExpressionListContext);
    }
    get ruleIndex() { return TomParser.RULE_objectExpression; }
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
            return this.getTokens(TomParser.COMMA);
        }
        else {
            return this.getToken(TomParser.COMMA, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.NEWLINE);
        }
        else {
            return this.getToken(TomParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_objectPairExpressionList; }
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
    COLON() { return this.getToken(TomParser.COLON, 0); }
    objectExpression() {
        return this.tryGetRuleContext(0, ObjectExpressionContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_objectPairExpression; }
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
    PAREN_OPEN() { return this.tryGetToken(TomParser.PAREN_OPEN, 0); }
    PAREN_CLOSE() { return this.tryGetToken(TomParser.PAREN_CLOSE, 0); }
    ARROW() { return this.getToken(TomParser.ARROW, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    formalParameterSequence() {
        return this.tryGetRuleContext(0, FormalParameterSequenceContext);
    }
    parameter() {
        return this.tryGetRuleContext(0, ParameterContext);
    }
    QUESTION() { return this.tryGetToken(TomParser.QUESTION, 0); }
    get ruleIndex() { return TomParser.RULE_lambdaExpression; }
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
    IntegerLiteral() { return this.tryGetToken(TomParser.IntegerLiteral, 0); }
    FloatingPointLiteral() { return this.tryGetToken(TomParser.FloatingPointLiteral, 0); }
    BooleanLiteral() { return this.tryGetToken(TomParser.BooleanLiteral, 0); }
    CharacterLiteral() { return this.tryGetToken(TomParser.CharacterLiteral, 0); }
    StringLiteral() { return this.tryGetToken(TomParser.StringLiteral, 0); }
    NullLiteral() { return this.tryGetToken(TomParser.NullLiteral, 0); }
    get ruleIndex() { return TomParser.RULE_literal; }
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
    PAREN_OPEN() { return this.getToken(TomParser.PAREN_OPEN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    PAREN_CLOSE() { return this.getToken(TomParser.PAREN_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_parenthesizedExpression; }
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
    get ruleIndex() { return TomParser.RULE_description; }
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
    get ruleIndex() { return TomParser.RULE_descriptionLine; }
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
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
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
            return this.getTokens(TomParser.AT);
        }
        else {
            return this.getToken(TomParser.AT, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_descriptionLineStart; }
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
    TEXT_CONTENT() { return this.tryGetToken(TomParser.TEXT_CONTENT, 0); }
    ID() { return this.tryGetToken(TomParser.ID, 0); }
    FORWARD_SLASH() { return this.tryGetToken(TomParser.FORWARD_SLASH, 0); }
    BRACE_OPEN() { return this.tryGetToken(TomParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.tryGetToken(TomParser.BRACE_CLOSE, 0); }
    COLON() { return this.tryGetToken(TomParser.COLON, 0); }
    MINUS() { return this.tryGetToken(TomParser.MINUS, 0); }
    PERIOD() { return this.tryGetToken(TomParser.PERIOD, 0); }
    literal() {
        return this.tryGetRuleContext(0, LiteralContext);
    }
    get ruleIndex() { return TomParser.RULE_descriptionText; }
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
    get ruleIndex() { return TomParser.RULE_descriptionLineElement; }
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
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    AT(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.AT);
        }
        else {
            return this.getToken(TomParser.AT, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_descriptionLineText; }
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
    INLINE_TAG_START() { return this.getToken(TomParser.INLINE_TAG_START, 0); }
    inlineTagName() {
        return this.getRuleContext(0, InlineTagNameContext);
    }
    SPACE() { return this.getToken(TomParser.SPACE, 0); }
    BRACE_CLOSE() { return this.getToken(TomParser.BRACE_CLOSE, 0); }
    inlineTagBody() {
        return this.tryGetRuleContext(0, InlineTagBodyContext);
    }
    get ruleIndex() { return TomParser.RULE_inlineTag; }
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
    get ruleIndex() { return TomParser.RULE_inlineTagName; }
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
    get ruleIndex() { return TomParser.RULE_inlineTagBody; }
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
    BRACE_OPEN() { return this.getToken(TomParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.getToken(TomParser.BRACE_CLOSE, 0); }
    braceBody(i) {
        if (i === undefined) {
            return this.getRuleContexts(BraceBodyContext);
        }
        else {
            return this.getRuleContext(i, BraceBodyContext);
        }
    }
    get ruleIndex() { return TomParser.RULE_braceExpression; }
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
            return this.getTokens(TomParser.NEWLINE);
        }
        else {
            return this.getToken(TomParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_braceBody; }
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
    TEXT_CONTENT() { return this.tryGetToken(TomParser.TEXT_CONTENT, 0); }
    ID() { return this.tryGetToken(TomParser.ID, 0); }
    SPACE() { return this.tryGetToken(TomParser.SPACE, 0); }
    FORWARD_SLASH() { return this.tryGetToken(TomParser.FORWARD_SLASH, 0); }
    NEWLINE() { return this.tryGetToken(TomParser.NEWLINE, 0); }
    PERIOD() { return this.tryGetToken(TomParser.PERIOD, 0); }
    get ruleIndex() { return TomParser.RULE_braceText; }
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
    ID() { return this.getToken(TomParser.ID, 0); }
    get ruleIndex() { return TomParser.RULE_identifier; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9tUGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1RvbVBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0RBQW9EOzs7Ozs7OztBQUdwRCwwQ0FBdUM7QUFDdkMsa0VBQStEO0FBQy9ELGdGQUE2RTtBQUM3RSxvREFBOEM7QUFDOUMsd0VBQXFFO0FBQ3JFLG9EQUErQztBQUMvQyw0Q0FBeUM7QUFDekMsa0VBQStEO0FBQy9ELHdFQUFxRTtBQUdyRSx3RUFBcUU7QUFJckUsMENBQXVDO0FBR3ZDLDREQUF5RDtBQUV6RCw2Q0FBNkM7QUFNN0MsZUFBdUIsU0FBUSxlQUFNO0lBaUlwQyxZQUFZLEtBQWtCO1FBQzdCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFoQkQsSUFBVyxVQUFVO1FBQ3BCLE9BQU8sU0FBUyxDQUFDLFVBQVUsQ0FBQztJQUM3QixDQUFDO0lBR0QsSUFBVyxlQUFlLEtBQWEsT0FBTyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRy9ELElBQVcsU0FBUyxLQUFlLE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFHaEUsSUFBVyxhQUFhLEtBQWEsT0FBTyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQU9oRSxhQUFhO1FBQ25CLElBQUksU0FBUyxHQUF5QixJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMzRCxJQUFJLEdBQVcsQ0FBQztRQUNoQixJQUFJO1lBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxH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LEtBQUssR0FBRyxHQUFHLENBQUM7Z0NBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dDQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQ0FDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQzVCLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDeEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQ0FDNVU7d0NBQ0EsSUFBSSxD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SUFDMUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLDRFQUE0RTtJQUM1RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLDRFQUE0RTtJQUM1RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDJFQUEyRTtJQUMzRSx5RUFBeUU7SUFDekUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsUUFBUSxDQUFDO0FBQ2MsZ0NBQXNCLEdBQzdDLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDJFQUEyRTtJQUMzRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwyRUFBMkU7SUFDM0Usd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwyRUFBMkU7SUFDM0UsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx5RUFBeUU7SUFDekUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUseUVBQXlFO0lBQ3pFLDJFQUEyRTtJQUMzRSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwyRUFBMkU7SUFDM0Usd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMkVBQTJFO0lBQzNFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDJFQUEyRTtJQUMzRSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSw0RUFBNEU7SUFDNUUsMkVBQTJFO0lBQzNFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDJFQUEyRTtJQUMzRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDJFQUEyRTtJQUMzRSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUseUVBQXlFO0lBQ3pFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDRFQUE0RTtJQUM1RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx1RUFBdUU7SUFDdkUseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUseUVBQXlFO0lBQ3pFLDRFQUE0RTtJQUM1RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFD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LHFCQUFRO2lEQUFvRTtBQUU3RTtJQURDLHFCQUFRO2lEQUdSO0FBRUQ7SUFEQyxxQkFBUTtnREFHUjtBQUVEO0lBREMscUJBQVE7OENBSVI7QUF6QkYsNENBMEJDO0FBR0QsdUJBQStCLFNBQVEscUNBQWlCO0lBR3ZELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFMTSxFQUFFLEtBQW1CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU0xRCxJQUFXLFNBQVMsS0FBYSxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBRXZFLFNBQVMsQ0FBQyxRQUEyQjtRQUMzQyxJQUFJLFFBQVEsQ0FBQyxlQUFlO1lBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQTJCO1FBQzFDLElBQUksUUFBUSxDQUFDLGNBQWM7WUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxNQUFNLENBQVMsT0FBaUM7UUFDdEQsSUFBSSxPQUFPLENBQUMsZUFBZTtZQUFFLE9BQU8sT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDN0QsT0FBTyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7a0RBQXFFO0FBRTlFO0lBREMscUJBQVE7a0RBR1I7QUFFRDtJQURDLHFCQUFRO2lEQUdSO0FBRUQ7SUFEQyxxQkFBUTsrQ0FJUjtBQXBCRiw4Q0FxQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSBUb21QYXJzZXIuZzQgYnkgQU5UTFIgNC42LVNOQVBTSE9UXG5cblxuaW1wb3J0IHsgQVROIH0gZnJvbSAnYW50bHI0dHMvYXRuL0FUTic7XG5pbXBvcnQgeyBBVE5EZXNlcmlhbGl6ZXIgfSBmcm9tICdhbnRscjR0cy9hdG4vQVRORGVzZXJpYWxpemVyJztcbmltcG9ydCB7IEZhaWxlZFByZWRpY2F0ZUV4Y2VwdGlvbiB9IGZyb20gJ2FudGxyNHRzL0ZhaWxlZFByZWRpY2F0ZUV4Y2VwdGlvbic7XG5pbXBvcnQgeyBOb3ROdWxsIH0gZnJvbSAnYW50bHI0dHMvRGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbiB9IGZyb20gJ2FudGxyNHRzL05vVmlhYmxlQWx0RXhjZXB0aW9uJztcbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnYW50bHI0dHMvRGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdhbnRscjR0cy9QYXJzZXInO1xuaW1wb3J0IHsgUGFyc2VyUnVsZUNvbnRleHQgfSBmcm9tICdhbnRscjR0cy9QYXJzZXJSdWxlQ29udGV4dCc7XG5pbXBvcnQgeyBQYXJzZXJBVE5TaW11bGF0b3IgfSBmcm9tICdhbnRscjR0cy9hdG4vUGFyc2VyQVROU2ltdWxhdG9yJztcbmltcG9ydCB7IFBhcnNlVHJlZUxpc3RlbmVyIH0gZnJvbSAnYW50bHI0dHMvdHJlZS9QYXJzZVRyZWVMaXN0ZW5lcic7XG5pbXBvcnQgeyBQYXJzZVRyZWVWaXNpdG9yIH0gZnJvbSAnYW50bHI0dHMvdHJlZS9QYXJzZVRyZWVWaXNpdG9yJztcbmltcG9ydCB7IFJlY29nbml0aW9uRXhjZXB0aW9uIH0gZnJvbSAnYW50bHI0dHMvUmVjb2duaXRpb25FeGNlcHRpb24nO1xuaW1wb3J0IHsgUnVsZUNvbnRleHQgfSBmcm9tICdhbnRscjR0cy9SdWxlQ29udGV4dCc7XG5pbXBvcnQgeyBSdWxlVmVyc2lvbiB9IGZyb20gJ2FudGxyNHRzL1J1bGVWZXJzaW9uJztcbmltcG9ydCB7IFRlcm1pbmFsTm9kZSB9IGZyb20gJ2FudGxyNHRzL3RyZWUvVGVybWluYWxOb2RlJztcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnYW50bHI0dHMvVG9rZW4nO1xuaW1wb3J0IHsgVG9rZW5TdHJlYW0gfSBmcm9tICdhbnRscjR0cy9Ub2tlblN0cmVhbSc7XG5pbXBvcnQgeyBWb2NhYnVsYXJ5IH0gZnJvbSAnYW50bHI0dHMvVm9jYWJ1bGFyeSc7XG5pbXBvcnQgeyBWb2NhYnVsYXJ5SW1wbCB9IGZyb20gJ2FudGxyNHRzL1ZvY2FidWxhcnlJbXBsJztcblxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnYW50bHI0dHMvbWlzYy9VdGlscyc7XG5cbmltcG9ydCB7IFRvbVBhcnNlckxpc3RlbmVyIH0gZnJvbSAnLi9Ub21QYXJzZXJMaXN0ZW5lcic7XG5pbXBvcnQgeyBUb21QYXJzZXJWaXNpdG9yIH0gZnJvbSAnLi9Ub21QYXJzZXJWaXNpdG9yJztcblxuXG5leHBvcnQgY2xhc3MgVG9tUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBJbnRlZ2VyTGl0ZXJhbD0xO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZsb2F0aW5nUG9pbnRMaXRlcmFsPTI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQm9vbGVhbkxpdGVyYWw9Mztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBDaGFyYWN0ZXJMaXRlcmFsPTQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU3RyaW5nTGl0ZXJhbD01O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE51bGxMaXRlcmFsPTY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSUQ9Nztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBORVdMSU5FPTg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1BBQ0U9OTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBURVhUX0NPTlRFTlQ9MTA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVQ9MTE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUExVUz0xMjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBNSU5VUz0xMztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBTVEFSPTE0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZPUldBUkRfU0xBU0g9MTU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09MT049MTY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUEVSSU9EPTE3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTU1BPTE4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVRVUFMPTE5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFFVRVNUSU9OPTIwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFNUD0yMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBQSVBFPTIyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFSUk9XPTIzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVYQ0xBTUFUSU9OPTI0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElOTElORV9UQUdfU1RBUlQ9MjU7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQlJBQ0VfT1BFTj0yNjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBCUkFDRV9DTE9TRT0yNztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBQQVJFTl9PUEVOPTI4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBBUkVOX0NMT1NFPTI5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJSQUNLRVRfT1BFTj0zMDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBCUkFDS0VUX0NMT1NFPTMxO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExFU1NUSEFOPTMyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdSRUFURVJUSEFOPTMzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZG9jdW1lbnRhdGlvbiA9IDA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9ib2R5ID0gMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3doaXRlc3BhY2UgPSAyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfYW5ub3RhdGlvbnMgPSAzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdGFnID0gNDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3RhZ05hbWUgPSA1O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdGFnSUQgPSA2O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb3B0aW9uYWxUYWdJRCA9IDc7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wcm9wZXJ0eVRhZ0lEID0gODtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29wdGlvbmFsVGFnT3JJZGVudGlmaWVyID0gOTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3R5cGUgPSAxMDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3VuYXJ5VHlwZSA9IDExO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdHVwbGVUeXBlID0gMTI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV90dXBsZVR5cGVMaXN0ID0gMTM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wcmltYXJ5VHlwZSA9IDE0O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfaWRlbnRpZmllck9yS2V5d29yZCA9IDE1O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfcGFyZW50aGVzaXplZFR5cGUgPSAxNjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2xhbWJkYVR5cGUgPSAxNztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2Zvcm1hbFBhcmFtZXRlclNlcXVlbmNlID0gMTg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wYXJhbWV0ZXIgPSAxOTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2FycmF5VHlwZSA9IDIwO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0VHlwZSA9IDIxO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0UGFpclR5cGVMaXN0ID0gMjI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9vYmplY3RQYWlyVHlwZSA9IDIzO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb3B0aW9uYWxUeXBlID0gMjQ7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9wcm9wZXJ0eVR5cGUgPSAyNTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29wdGlvbmFsVHlwZU9ySWRlbnRpZmVyID0gMjY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV92YWx1ZSA9IDI3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZXhwcmVzc2lvbiA9IDI4O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfdW5hcnlFeHByZXNzaW9uID0gMjk7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9hcnJheUV4cHJlc3Npb24gPSAzMDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29iamVjdEV4cHJlc3Npb24gPSAzMTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX29iamVjdFBhaXJFeHByZXNzaW9uTGlzdCA9IDMyO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfb2JqZWN0UGFpckV4cHJlc3Npb24gPSAzMztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2xhbWJkYUV4cHJlc3Npb24gPSAzNDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2xpdGVyYWwgPSAzNTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX3BhcmVudGhlc2l6ZWRFeHByZXNzaW9uID0gMzY7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvbiA9IDM3O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZGVzY3JpcHRpb25MaW5lID0gMzg7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvbkxpbmVTdGFydCA9IDM5O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfZGVzY3JpcHRpb25UZXh0ID0gNDA7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvbkxpbmVFbGVtZW50ID0gNDE7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9kZXNjcmlwdGlvbkxpbmVUZXh0ID0gNDI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9pbmxpbmVUYWcgPSA0Mztcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2lubGluZVRhZ05hbWUgPSA0NDtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2lubGluZVRhZ0JvZHkgPSA0NTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2JyYWNlRXhwcmVzc2lvbiA9IDQ2O1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJVTEVfYnJhY2VCb2R5ID0gNDc7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUlVMRV9icmFjZVRleHQgPSA0ODtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBSVUxFX2lkZW50aWZpZXIgPSA0OTtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBydWxlTmFtZXM6IHN0cmluZ1tdID0gW1xuXHRcdFwiZG9jdW1lbnRhdGlvblwiLCBcImJvZHlcIiwgXCJ3aGl0ZXNwYWNlXCIsIFwiYW5ub3RhdGlvbnNcIiwgXCJ0YWdcIiwgXCJ0YWdOYW1lXCIsIFxuXHRcdFwidGFnSURcIiwgXCJvcHRpb25hbFRhZ0lEXCIsIFwicHJvcGVydHlUYWdJRFwiLCBcIm9wdGlvbmFsVGFnT3JJZGVudGlmaWVyXCIsIFxuXHRcdFwidHlwZVwiLCBcInVuYXJ5VHlwZVwiLCBcInR1cGxlVHlwZVwiLCBcInR1cGxlVHlwZUxpc3RcIiwgXCJwcmltYXJ5VHlwZVwiLCBcImlkZW50aWZpZXJPcktleXdvcmRcIiwgXG5cdFx0XCJwYXJlbnRoZXNpemVkVHlwZVwiLCBcImxhbWJkYVR5cGVcIiwgXCJmb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZVwiLCBcInBhcmFtZXRlclwiLCBcblx0XHRcImFycmF5VHlwZVwiLCBcIm9iamVjdFR5cGVcIiwgXCJvYmplY3RQYWlyVHlwZUxpc3RcIiwgXCJvYmplY3RQYWlyVHlwZVwiLCBcIm9wdGlvbmFsVHlwZVwiLCBcblx0XHRcInByb3BlcnR5VHlwZVwiLCBcIm9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyXCIsIFwidmFsdWVcIiwgXCJleHByZXNzaW9uXCIsIFwidW5hcnlFeHByZXNzaW9uXCIsIFxuXHRcdFwiYXJyYXlFeHByZXNzaW9uXCIsIFwib2JqZWN0RXhwcmVzc2lvblwiLCBcIm9iamVjdFBhaXJFeHByZXNzaW9uTGlzdFwiLCBcIm9iamVjdFBhaXJFeHByZXNzaW9uXCIsIFxuXHRcdFwibGFtYmRhRXhwcmVzc2lvblwiLCBcImxpdGVyYWxcIiwgXCJwYXJlbnRoZXNpemVkRXhwcmVzc2lvblwiLCBcImRlc2NyaXB0aW9uXCIsIFxuXHRcdFwiZGVzY3JpcHRpb25MaW5lXCIsIFwiZGVzY3JpcHRpb25MaW5lU3RhcnRcIiwgXCJkZXNjcmlwdGlvblRleHRcIiwgXCJkZXNjcmlwdGlvbkxpbmVFbGVtZW50XCIsIFxuXHRcdFwiZGVzY3JpcHRpb25MaW5lVGV4dFwiLCBcImlubGluZVRhZ1wiLCBcImlubGluZVRhZ05hbWVcIiwgXCJpbmxpbmVUYWdCb2R5XCIsIFxuXHRcdFwiYnJhY2VFeHByZXNzaW9uXCIsIFwiYnJhY2VCb2R5XCIsIFwiYnJhY2VUZXh0XCIsIFwiaWRlbnRpZmllclwiXG5cdF07XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX0xJVEVSQUxfTkFNRVM6IChzdHJpbmcgfCB1bmRlZmluZWQpW10gPSBbXG5cdFx0dW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcblx0XHR1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiJ0AnXCIsIFwiJysnXCIsIFwiJy0nXCIsIFwiJyonXCIsIFxuXHRcdFwiJy8nXCIsIFwiJzonXCIsIFwiJy4nXCIsIFwiJywnXCIsIFwiJz0nXCIsIFwiJz8nXCIsIFwiJyYnXCIsIFwiJ3wnXCIsIHVuZGVmaW5lZCwgXCInISdcIiwgXG5cdFx0XCIne0AnXCIsIFwiJ3snXCIsIFwiJ30nXCIsIFwiJygnXCIsIFwiJyknXCIsIFwiJ1snXCIsIFwiJ10nXCIsIFwiJzwnXCIsIFwiJz4nXCJcblx0XTtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX1NZTUJPTElDX05BTUVTOiAoc3RyaW5nIHwgdW5kZWZpbmVkKVtdID0gW1xuXHRcdHVuZGVmaW5lZCwgXCJJbnRlZ2VyTGl0ZXJhbFwiLCBcIkZsb2F0aW5nUG9pbnRMaXRlcmFsXCIsIFwiQm9vbGVhbkxpdGVyYWxcIiwgXG5cdFx0XCJDaGFyYWN0ZXJMaXRlcmFsXCIsIFwiU3RyaW5nTGl0ZXJhbFwiLCBcIk51bGxMaXRlcmFsXCIsIFwiSURcIiwgXCJORVdMSU5FXCIsIFwiU1BBQ0VcIiwgXG5cdFx0XCJURVhUX0NPTlRFTlRcIiwgXCJBVFwiLCBcIlBMVVNcIiwgXCJNSU5VU1wiLCBcIlNUQVJcIiwgXCJGT1JXQVJEX1NMQVNIXCIsIFwiQ09MT05cIiwgXG5cdFx0XCJQRVJJT0RcIiwgXCJDT01NQVwiLCBcIkVRVUFMXCIsIFwiUVVFU1RJT05cIiwgXCJBTVBcIiwgXCJQSVBFXCIsIFwiQVJST1dcIiwgXCJFWENMQU1BVElPTlwiLCBcblx0XHRcIklOTElORV9UQUdfU1RBUlRcIiwgXCJCUkFDRV9PUEVOXCIsIFwiQlJBQ0VfQ0xPU0VcIiwgXCJQQVJFTl9PUEVOXCIsIFwiUEFSRU5fQ0xPU0VcIiwgXG5cdFx0XCJCUkFDS0VUX09QRU5cIiwgXCJCUkFDS0VUX0NMT1NFXCIsIFwiTEVTU1RIQU5cIiwgXCJHUkVBVEVSVEhBTlwiXG5cdF07XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVk9DQUJVTEFSWTogVm9jYWJ1bGFyeSA9IG5ldyBWb2NhYnVsYXJ5SW1wbChUb21QYXJzZXIuX0xJVEVSQUxfTkFNRVMsIFRvbVBhcnNlci5fU1lNQk9MSUNfTkFNRVMsIFtdKTtcblxuXHRAT3ZlcnJpZGVcblx0QE5vdE51bGxcblx0cHVibGljIGdldCB2b2NhYnVsYXJ5KCk6IFZvY2FidWxhcnkge1xuXHRcdHJldHVybiBUb21QYXJzZXIuVk9DQUJVTEFSWTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZ2V0IGdyYW1tYXJGaWxlTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJUb21QYXJzZXIuZzRcIjsgfVxuXG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZ2V0IHJ1bGVOYW1lcygpOiBzdHJpbmdbXSB7IHJldHVybiBUb21QYXJzZXIucnVsZU5hbWVzOyB9XG5cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBnZXQgc2VyaWFsaXplZEFUTigpOiBzdHJpbmcgeyByZXR1cm4gVG9tUGFyc2VyLl9zZXJpYWxpemVkQVROOyB9XG5cblx0Y29uc3RydWN0b3IoaW5wdXQ6IFRva2VuU3RyZWFtKSB7XG5cdFx0c3VwZXIoaW5wdXQpO1xuXHRcdHRoaXMuX2ludGVycCA9IG5ldyBQYXJzZXJBVE5TaW11bGF0b3IoVG9tUGFyc2VyLl9BVE4sIHRoaXMpO1xuXHR9XG5cdFxuXHRwdWJsaWMgZG9jdW1lbnRhdGlvbigpOiBEb2N1bWVudGF0aW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogRG9jdW1lbnRhdGlvbkNvbnRleHQgPSBuZXcgRG9jdW1lbnRhdGlvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDAsIFRvbVBhcnNlci5SVUxFX2RvY3VtZW50YXRpb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDEwNztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgVG9tUGFyc2VyLkVPRjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMDtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuRU9GKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9tUGFyc2VyLk5FV0xJTkU6XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5TUEFDRTpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLkFUOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTAxO1xuXHRcdFx0XHR0aGlzLmJvZHkoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwMztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxMDI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEwNTtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuRU9GKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgYm9keSgpOiBCb2R5Q29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogQm9keUNvbnRleHQgPSBuZXcgQm9keUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDIsIFRvbVBhcnNlci5SVUxFX2JvZHkpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTEyO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR3aGlsZSAoX2xhPT09VG9tUGFyc2VyLk5FV0xJTkUgfHwgX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTA5O1xuXHRcdFx0XHR0aGlzLndoaXRlc3BhY2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMTQ7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gMTE1O1xuXHRcdFx0dGhpcy5hbm5vdGF0aW9ucygpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyB3aGl0ZXNwYWNlKCk6IFdoaXRlc3BhY2VDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBXaGl0ZXNwYWNlQ29udGV4dCA9IG5ldyBXaGl0ZXNwYWNlQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNCwgVG9tUGFyc2VyLlJVTEVfd2hpdGVzcGFjZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMTc7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICggIShfbGE9PT1Ub21QYXJzZXIuTkVXTElORSB8fCBfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpICkge1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVySW5saW5lKHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHR0aGlzLm1hdGNoZWRFT0YgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGFubm90YXRpb25zKCk6IEFubm90YXRpb25zQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogQW5ub3RhdGlvbnNDb250ZXh0ID0gbmV3IEFubm90YXRpb25zQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNiwgVG9tUGFyc2VyLlJVTEVfYW5ub3RhdGlvbnMpO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMTE5O1xuXHRcdFx0dGhpcy50YWcoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSAxMjQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMyx0aGlzLl9jdHgpO1xuXHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxMjA7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEyMTtcblx0XHRcdFx0XHR0aGlzLnRhZygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMjY7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDMsdGhpcy5fY3R4KTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdGFnKCk6IFRhZ0NvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFRhZ0NvbnRleHQgPSBuZXcgVGFnQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOCwgVG9tUGFyc2VyLlJVTEVfdGFnKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSAyNjg7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwyMyx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTI3O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTI4O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEyOTtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTMwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzE7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEzMjtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDMpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzQ7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTM1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxMzY7XG5cdFx0XHRcdHRoaXMudGFnSUQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA0KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTM4O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDEzOTtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQwO1xuXHRcdFx0XHR0aGlzLnRhZ0lEKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNDI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0MTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE0NDtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuRVFVQUwpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTQ2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxNDU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNDg7XG5cdFx0XHRcdHRoaXMudmFsdWUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA1KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTUwO1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1MTtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTUyO1xuXHRcdFx0XHR0aGlzLnRhZ0lEKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNTM7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1NDtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuTUlOVVMpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTU1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNTY7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA2KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTU4O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE1OTtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTYwO1xuXHRcdFx0XHR0aGlzLnRhZ0lEKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNjE7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2Mjtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuRVFVQUwpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTY0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxNjM7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNjY7XG5cdFx0XHRcdHRoaXMudmFsdWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE2Nztcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTY4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNjk7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3MDtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDc6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDcpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNzI7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTczO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxNzQ7XG5cdFx0XHRcdHRoaXMudGFnSUQoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3Njtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTc1O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTc4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE3OTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE4Mjtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDg6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDgpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODQ7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTg1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxODY7XG5cdFx0XHRcdHRoaXMudGFnSUQoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE4ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTg3O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTkwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5MTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDE5NDtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMTk2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAxOTg7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkVRVUFMKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIwMDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMTk5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjAyO1xuXHRcdFx0XHR0aGlzLnZhbHVlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgOTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgOSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIwNDtcblx0XHRcdFx0dGhpcy50YWdOYW1lKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDU7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIwNjtcblx0XHRcdFx0dGhpcy50YWdJRCgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjA4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyMDc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMTA7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxMjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjExO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjE0O1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMTU7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIxNjtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuTUlOVVMpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjE3O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMTg7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAxMDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMTApO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjA7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjIxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjI7XG5cdFx0XHRcdHRoaXMudGFnSUQoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIyNDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjIzO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjI2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMjg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIyNztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzMDtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjMyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkVRVUFMKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDIzNjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjM1O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjM4O1xuXHRcdFx0XHR0aGlzLnZhbHVlKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyMzk7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI0MDtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuTUlOVVMpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjQxO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDI7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAxMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMTEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDQ7XG5cdFx0XHRcdHRoaXMudGFnTmFtZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjQ2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDU7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNDg7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1MDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjQ5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjUyO1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMTI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjU0O1xuXHRcdFx0XHR0aGlzLnRhZ05hbWUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1Njtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjU1O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjU4O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNjA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI1OTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2Mjtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjYzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAyNjQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLk1JTlVTKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI2NTtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjY2O1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHRhZ05hbWUoKTogVGFnTmFtZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFRhZ05hbWVDb250ZXh0ID0gbmV3IFRhZ05hbWVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxMCwgVG9tUGFyc2VyLlJVTEVfdGFnTmFtZSk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDI3MDtcblx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkFUKTtcblx0XHRcdHRoaXMuc3RhdGUgPSAyNzE7XG5cdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgdGFnSUQoKTogVGFnSURDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBUYWdJRENvbnRleHQgPSBuZXcgVGFnSURDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxMiwgVG9tUGFyc2VyLlJVTEVfdGFnSUQpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMjc2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMjQsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI3Mztcblx0XHRcdFx0dGhpcy5wcm9wZXJ0eVRhZ0lEKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI3NDtcblx0XHRcdFx0dGhpcy5vcHRpb25hbFRhZ0lEKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMyk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI3NTtcblx0XHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9wdGlvbmFsVGFnSUQoKTogT3B0aW9uYWxUYWdJRENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9wdGlvbmFsVGFnSURDb250ZXh0ID0gbmV3IE9wdGlvbmFsVGFnSURDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxNCwgVG9tUGFyc2VyLlJVTEVfb3B0aW9uYWxUYWdJRCk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDI3ODtcblx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDI3OTtcblx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlFVRVNUSU9OKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgcHJvcGVydHlUYWdJRCgpOiBQcm9wZXJ0eVRhZ0lEQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogUHJvcGVydHlUYWdJRENvbnRleHQgPSBuZXcgUHJvcGVydHlUYWdJRENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDE2LCBUb21QYXJzZXIuUlVMRV9wcm9wZXJ0eVRhZ0lEKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSAyOTU7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwyNyx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjgxO1xuXHRcdFx0XHR0aGlzLm9wdGlvbmFsVGFnSUQoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI4NDsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyODI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuUEVSSU9EKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjgzO1xuXHRcdFx0XHRcdHRoaXMub3B0aW9uYWxUYWdPcklkZW50aWZpZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyODY7IFxuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0fSB3aGlsZSAoIF9sYT09PVRvbVBhcnNlci5QRVJJT0QgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMjg4O1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI5MTsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyODk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuUEVSSU9EKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMjkwO1xuXHRcdFx0XHRcdHRoaXMub3B0aW9uYWxUYWdPcklkZW50aWZpZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAyOTM7IFxuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0fSB3aGlsZSAoIF9sYT09PVRvbVBhcnNlci5QRVJJT0QgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb3B0aW9uYWxUYWdPcklkZW50aWZpZXIoKTogT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQgPSBuZXcgT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAxOCwgVG9tUGFyc2VyLlJVTEVfb3B0aW9uYWxUYWdPcklkZW50aWZpZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMjk5O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMjgsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI5Nztcblx0XHRcdFx0dGhpcy5vcHRpb25hbFRhZ0lEKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDI5ODtcblx0XHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0O1xuXHRwdWJsaWMgdHlwZShfcDogbnVtYmVyKTogVHlwZUNvbnRleHQ7XG5cdFxuXHRwdWJsaWMgdHlwZShfcD86IG51bWJlcik6IFR5cGVDb250ZXh0IHtcblx0XHRpZiAoX3AgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0X3AgPSAwO1xuXHRcdH1cblxuXHRcdGxldCBfcGFyZW50Y3R4OiBQYXJzZXJSdWxlQ29udGV4dCA9IHRoaXMuX2N0eDtcblx0XHRsZXQgX3BhcmVudFN0YXRlOiBudW1iZXIgPSB0aGlzLnN0YXRlO1xuXHRcdGxldCBfbG9jYWxjdHg6IFR5cGVDb250ZXh0ID0gbmV3IFR5cGVDb250ZXh0KHRoaXMuX2N0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRsZXQgX3ByZXZjdHg6IFR5cGVDb250ZXh0ID0gX2xvY2FsY3R4O1xuXHRcdGxldCBfc3RhcnRTdGF0ZTogbnVtYmVyID0gMjA7XG5cdFx0dGhpcy5lbnRlclJlY3Vyc2lvblJ1bGUoX2xvY2FsY3R4LCAyMCwgVG9tUGFyc2VyLlJVTEVfdHlwZSwgX3ApO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0bGV0IF9hbHQ6IG51bWJlcjtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDMxMDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDI5LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwMjtcblx0XHRcdFx0dGhpcy5sYW1iZGFUeXBlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzAzO1xuXHRcdFx0XHR0aGlzLnR1cGxlVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwNDtcblx0XHRcdFx0dGhpcy5wcmltYXJ5VHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwNTtcblx0XHRcdFx0dGhpcy5wYXJlbnRoZXNpemVkVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwNjtcblx0XHRcdFx0dGhpcy51bmFyeVR5cGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMDc7XG5cdFx0XHRcdHRoaXMub2JqZWN0VHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDc6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMwODtcblx0XHRcdFx0dGhpcy5hcnJheVR5cGUoMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgODpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzA5O1xuXHRcdFx0XHR0aGlzLnByb3BlcnR5VHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY3R4Ll9zdG9wID0gdGhpcy5faW5wdXQudHJ5TFQoLTEpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDMyMztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzMix0aGlzLl9jdHgpO1xuXHRcdFx0d2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApIHtcblx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX3BhcnNlTGlzdGVuZXJzIT1udWxsICkgdGhpcy50cmlnZ2VyRXhpdFJ1bGVFdmVudCgpO1xuXHRcdFx0XHRcdF9wcmV2Y3R4ID0gX2xvY2FsY3R4O1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0X2xvY2FsY3R4ID0gbmV3IFR5cGVDb250ZXh0KF9wYXJlbnRjdHgsIF9wYXJlbnRTdGF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5wdXNoTmV3UmVjdXJzaW9uQ29udGV4dChfbG9jYWxjdHgsIF9zdGFydFN0YXRlLCBUb21QYXJzZXIuUlVMRV90eXBlKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzEyO1xuXHRcdFx0XHRcdGlmICghKHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA5KSkpIHRocm93IG5ldyBGYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24odGhpcywgXCJ0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgOSlcIik7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMxNDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMxMztcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzE2O1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmICggIShfbGE9PT1Ub21QYXJzZXIuQU1QIHx8IF9sYT09PVRvbVBhcnNlci5QSVBFKSApIHtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMxODtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMxNztcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzIwO1xuXHRcdFx0XHRcdHRoaXMudHlwZSgxMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMyNTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMzIsdGhpcy5fY3R4KTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy51bnJvbGxSZWN1cnNpb25Db250ZXh0cyhfcGFyZW50Y3R4KTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHVuYXJ5VHlwZSgpOiBVbmFyeVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBVbmFyeVR5cGVDb250ZXh0ID0gbmV3IFVuYXJ5VHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDIyLCBUb21QYXJzZXIuUlVMRV91bmFyeVR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzI2O1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoICEoX2xhPT09VG9tUGFyc2VyLlNUQVIgfHwgX2xhPT09VG9tUGFyc2VyLkFNUCkgKSB7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSAzMjc7XG5cdFx0XHR0aGlzLnByaW1hcnlUeXBlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHR1cGxlVHlwZSgpOiBUdXBsZVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBUdXBsZVR5cGVDb250ZXh0ID0gbmV3IFR1cGxlVHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDI0LCBUb21QYXJzZXIuUlVMRV90dXBsZVR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzMwO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLklEKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDMyOTtcblx0XHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDMzMjtcblx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkxFU1NUSEFOKTtcblx0XHRcdHRoaXMuc3RhdGUgPSAzMzQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzMzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDMzNjtcblx0XHRcdHRoaXMudHVwbGVUeXBlTGlzdCgpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDMzODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzMzc7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gMzQwO1xuXHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuR1JFQVRFUlRIQU4pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyB0dXBsZVR5cGVMaXN0KCk6IFR1cGxlVHlwZUxpc3RDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBUdXBsZVR5cGVMaXN0Q29udGV4dCA9IG5ldyBUdXBsZVR5cGVMaXN0Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMjYsIFRvbVBhcnNlci5SVUxFX3R1cGxlVHlwZUxpc3QpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzQyO1xuXHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDM0NDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNDM7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gMzUxOyBcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM0Njtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuQ09NTUEpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzQ4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzNDc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNTA7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNTM7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fSB3aGlsZSAoIF9sYT09PVRvbVBhcnNlci5DT01NQSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBwcmltYXJ5VHlwZSgpOiBQcmltYXJ5VHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFByaW1hcnlUeXBlQ29udGV4dCA9IG5ldyBQcmltYXJ5VHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDI4LCBUb21QYXJzZXIuUlVMRV9wcmltYXJ5VHlwZSk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSAzNTc7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwzOSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzU1O1xuXHRcdFx0XHR0aGlzLm9wdGlvbmFsVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNTY7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllck9yS2V5d29yZCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBpZGVudGlmaWVyT3JLZXl3b3JkKCk6IElkZW50aWZpZXJPcktleXdvcmRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCA9IG5ldyBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMzAsIFRvbVBhcnNlci5SVUxFX2lkZW50aWZpZXJPcktleXdvcmQpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzYxO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBUb21QYXJzZXIuSUQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNTk7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb21QYXJzZXIuTnVsbExpdGVyYWw6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNjA7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLk51bGxMaXRlcmFsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgcGFyZW50aGVzaXplZFR5cGUoKTogUGFyZW50aGVzaXplZFR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBQYXJlbnRoZXNpemVkVHlwZUNvbnRleHQgPSBuZXcgUGFyZW50aGVzaXplZFR5cGVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAzMiwgVG9tUGFyc2VyLlJVTEVfcGFyZW50aGVzaXplZFR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzYzO1xuXHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuUEFSRU5fT1BFTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzY1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2NDtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSAzNjc7XG5cdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHR0aGlzLnN0YXRlID0gMzY5O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM2ODtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSAzNzE7XG5cdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5QQVJFTl9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGxhbWJkYVR5cGUoKTogTGFtYmRhVHlwZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IExhbWJkYVR5cGVDb250ZXh0ID0gbmV3IExhbWJkYVR5cGVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAzNCwgVG9tUGFyc2VyLlJVTEVfbGFtYmRhVHlwZSk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDAyO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBUb21QYXJzZXIuUEFSRU5fT1BFTjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM3Mztcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuUEFSRU5fT1BFTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzNzU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNDMsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzc0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM3ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5JRCkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzc3O1xuXHRcdFx0XHRcdHRoaXMuZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzgxO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzODA7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzODM7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlBBUkVOX0NMT1NFKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM4NTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gMzg0O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzg3O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5BUlJPVyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzODk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM4ODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5MTtcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb21QYXJzZXIuSUQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTI7XG5cdFx0XHRcdHRoaXMucGFyYW1ldGVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTQ7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5Mztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDM5Njtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuQVJST1cpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gMzk4O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSAzOTc7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDA7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UoKTogRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQgPSBuZXcgRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCAzNiwgVG9tUGFyc2VyLlJVTEVfZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDA0O1xuXHRcdFx0dGhpcy5wYXJhbWV0ZXIoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA0MTI7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdHdoaWxlIChfbGE9PT1Ub21QYXJzZXIuQ09NTUEpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MDU7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkNPTU1BKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQwNztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDA2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDA5O1xuXHRcdFx0XHR0aGlzLnBhcmFtZXRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxNDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgcGFyYW1ldGVyKCk6IFBhcmFtZXRlckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFBhcmFtZXRlckNvbnRleHQgPSBuZXcgUGFyYW1ldGVyQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgMzgsIFRvbVBhcnNlci5SVUxFX3BhcmFtZXRlcik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA0MTU7XG5cdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA0MjQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw1NSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MTc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxNjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQxOTtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDIxO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0MjA7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MjM7XG5cdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cblx0cHVibGljIGFycmF5VHlwZSgpOiBBcnJheVR5cGVDb250ZXh0O1xuXHRwdWJsaWMgYXJyYXlUeXBlKF9wOiBudW1iZXIpOiBBcnJheVR5cGVDb250ZXh0O1xuXHRcblx0cHVibGljIGFycmF5VHlwZShfcD86IG51bWJlcik6IEFycmF5VHlwZUNvbnRleHQge1xuXHRcdGlmIChfcCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRfcCA9IDA7XG5cdFx0fVxuXG5cdFx0bGV0IF9wYXJlbnRjdHg6IFBhcnNlclJ1bGVDb250ZXh0ID0gdGhpcy5fY3R4O1xuXHRcdGxldCBfcGFyZW50U3RhdGU6IG51bWJlciA9IHRoaXMuc3RhdGU7XG5cdFx0bGV0IF9sb2NhbGN0eDogQXJyYXlUeXBlQ29udGV4dCA9IG5ldyBBcnJheVR5cGVDb250ZXh0KHRoaXMuX2N0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRsZXQgX3ByZXZjdHg6IEFycmF5VHlwZUNvbnRleHQgPSBfbG9jYWxjdHg7XG5cdFx0bGV0IF9zdGFydFN0YXRlOiBudW1iZXIgPSA0MDtcblx0XHR0aGlzLmVudGVyUmVjdXJzaW9uUnVsZShfbG9jYWxjdHgsIDQwLCBUb21QYXJzZXIuUlVMRV9hcnJheVR5cGUsIF9wKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA0NzQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5CUkFDS0VUX09QRU46XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyNztcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuQlJBQ0tFVF9PUEVOKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQyOTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw1Nix0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0Mjg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0MzI7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNTcsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDMxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQzNTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw1OCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0MzQ7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0Mzg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmICgoKCgoX2xhIC0gNikpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCAoX2xhIC0gNikpICYgKCgxIDw8IChUb21QYXJzZXIuTnVsbExpdGVyYWwgLSA2KSkgfCAoMSA8PCAoVG9tUGFyc2VyLklEIC0gNikpIHwgKDEgPDwgKFRvbVBhcnNlci5TVEFSIC0gNikpIHwgKDEgPDwgKFRvbVBhcnNlci5BTVAgLSA2KSkgfCAoMSA8PCAoVG9tUGFyc2VyLkJSQUNFX09QRU4gLSA2KSkgfCAoMSA8PCAoVG9tUGFyc2VyLlBBUkVOX09QRU4gLSA2KSkgfCAoMSA8PCAoVG9tUGFyc2VyLkJSQUNLRVRfT1BFTiAtIDYpKSB8ICgxIDw8IChUb21QYXJzZXIuTEVTU1RIQU4gLSA2KSkpKSAhPT0gMCkpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQzNztcblx0XHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ1Mztcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0d2hpbGUgKF9sYT09PVRvbVBhcnNlci5DT01NQSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ0MDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5DT01NQSk7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ0Mjtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNjAsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDQxO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ0NTtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ0NDtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDQ4O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0NDc7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDUwO1xuXHRcdFx0XHRcdHRoaXMudHlwZSgwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTU7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTc7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNjQsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDU2O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDYwO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0NTk7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NjM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDYyO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0NjU7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkJSQUNLRVRfQ0xPU0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb21QYXJzZXIuSUQ6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ2Njtcblx0XHRcdFx0dGhpcy5pZGVudGlmaWVyKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0Njc7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkJSQUNLRVRfT1BFTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA0Njg7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkJSQUNLRVRfQ0xPU0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb21QYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDcwO1xuXHRcdFx0XHR0aGlzLm9iamVjdFR5cGUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ3MTtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuQlJBQ0tFVF9PUEVOKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ3Mjtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuQlJBQ0tFVF9DTE9TRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jdHguX3N0b3AgPSB0aGlzLl9pbnB1dC50cnlMVCgtMSk7XG5cdFx0XHR0aGlzLnN0YXRlID0gNDg0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDY5LHRoaXMuX2N0eCk7XG5cdFx0XHR3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICkge1xuXHRcdFx0XHRpZiAoIF9hbHQ9PT0xICkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5fcGFyc2VMaXN0ZW5lcnMhPW51bGwgKSB0aGlzLnRyaWdnZXJFeGl0UnVsZUV2ZW50KCk7XG5cdFx0XHRcdFx0X3ByZXZjdHggPSBfbG9jYWxjdHg7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRfbG9jYWxjdHggPSBuZXcgQXJyYXlUeXBlQ29udGV4dChfcGFyZW50Y3R4LCBfcGFyZW50U3RhdGUpO1xuXHRcdFx0XHRcdHRoaXMucHVzaE5ld1JlY3Vyc2lvbkNvbnRleHQoX2xvY2FsY3R4LCBfc3RhcnRTdGF0ZSwgVG9tUGFyc2VyLlJVTEVfYXJyYXlUeXBlKTtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNDc2O1xuXHRcdFx0XHRcdGlmICghKHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCAxKSkpIHRocm93IG5ldyBGYWlsZWRQcmVkaWNhdGVFeGNlcHRpb24odGhpcywgXCJ0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgMSlcIik7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ3Nztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5CUkFDS0VUX09QRU4pO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0Nzk7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdGlmICgoKCgoX2xhIC0gNikpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCAoX2xhIC0gNikpICYgKCgxIDw8IChUb21QYXJzZXIuTnVsbExpdGVyYWwgLSA2KSkgfCAoMSA8PCAoVG9tUGFyc2VyLklEIC0gNikpIHwgKDEgPDwgKFRvbVBhcnNlci5TVEFSIC0gNikpIHwgKDEgPDwgKFRvbVBhcnNlci5BTVAgLSA2KSkgfCAoMSA8PCAoVG9tUGFyc2VyLkJSQUNFX09QRU4gLSA2KSkgfCAoMSA8PCAoVG9tUGFyc2VyLlBBUkVOX09QRU4gLSA2KSkgfCAoMSA8PCAoVG9tUGFyc2VyLkJSQUNLRVRfT1BFTiAtIDYpKSB8ICgxIDw8IChUb21QYXJzZXIuTEVTU1RIQU4gLSA2KSkpKSAhPT0gMCkpIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA0Nzg7XG5cdFx0XHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ4MTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5CUkFDS0VUX0NMT1NFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDg2O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw2OSx0aGlzLl9jdHgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLnVucm9sbFJlY3Vyc2lvbkNvbnRleHRzKF9wYXJlbnRjdHgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb2JqZWN0VHlwZSgpOiBPYmplY3RUeXBlQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogT2JqZWN0VHlwZUNvbnRleHQgPSBuZXcgT2JqZWN0VHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDQyLCBUb21QYXJzZXIuUlVMRV9vYmplY3RUeXBlKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ4Nztcblx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkJSQUNFX09QRU4pO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ4OTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDcwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ4ODtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDQ5Mjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDcxLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ5MTtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNDk1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNzIsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNDk0O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNDk4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoKCgoKF9sYSAtIDYpKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgKF9sYSAtIDYpKSAmICgoMSA8PCAoVG9tUGFyc2VyLk51bGxMaXRlcmFsIC0gNikpIHwgKDEgPDwgKFRvbVBhcnNlci5JRCAtIDYpKSB8ICgxIDw8IChUb21QYXJzZXIuU1RBUiAtIDYpKSB8ICgxIDw8IChUb21QYXJzZXIuQU1QIC0gNikpIHwgKDEgPDwgKFRvbVBhcnNlci5CUkFDRV9PUEVOIC0gNikpIHwgKDEgPDwgKFRvbVBhcnNlci5QQVJFTl9PUEVOIC0gNikpIHwgKDEgPDwgKFRvbVBhcnNlci5CUkFDS0VUX09QRU4gLSA2KSkgfCAoMSA8PCAoVG9tUGFyc2VyLkxFU1NUSEFOIC0gNikpKSkgIT09IDApKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDQ5Nztcblx0XHRcdFx0dGhpcy5vYmplY3RQYWlyVHlwZUxpc3QoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNTAxO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsNzQsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTAwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNTA0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTAzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNTA3O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUwNjtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1MDk7XG5cdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5CUkFDRV9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9iamVjdFBhaXJUeXBlTGlzdCgpOiBPYmplY3RQYWlyVHlwZUxpc3RDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPYmplY3RQYWlyVHlwZUxpc3RDb250ZXh0ID0gbmV3IE9iamVjdFBhaXJUeXBlTGlzdENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDQ0LCBUb21QYXJzZXIuUlVMRV9vYmplY3RQYWlyVHlwZUxpc3QpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTExO1xuXHRcdFx0dGhpcy5vYmplY3RQYWlyVHlwZSgpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDUxMztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDc3LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUxMjtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDUyODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0d2hpbGUgKF9sYT09PVRvbVBhcnNlci5DT01NQSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUxNTtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuQ09NTUEpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTE3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDc4LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUxNjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MjA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTE5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MjM7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUyMjtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUyNTtcblx0XHRcdFx0dGhpcy5vYmplY3RQYWlyVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzMDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb2JqZWN0UGFpclR5cGUoKTogT2JqZWN0UGFpclR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPYmplY3RQYWlyVHlwZUNvbnRleHQgPSBuZXcgT2JqZWN0UGFpclR5cGVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA0NiwgVG9tUGFyc2VyLlJVTEVfb2JqZWN0UGFpclR5cGUpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTMxO1xuXHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDUzMztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5RVUVTVElPTikge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1MzI7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlFVRVNUSU9OKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNTM2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzNTtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1Mzg7XG5cdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5DT0xPTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTQwO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDUzOTtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA1NDI7XG5cdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9wdGlvbmFsVHlwZSgpOiBPcHRpb25hbFR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPcHRpb25hbFR5cGVDb250ZXh0ID0gbmV3IE9wdGlvbmFsVHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDQ4LCBUb21QYXJzZXIuUlVMRV9vcHRpb25hbFR5cGUpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA1NDQ7XG5cdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA1NDU7XG5cdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5RVUVTVElPTik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIHByb3BlcnR5VHlwZSgpOiBQcm9wZXJ0eVR5cGVDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBQcm9wZXJ0eVR5cGVDb250ZXh0ID0gbmV3IFByb3BlcnR5VHlwZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDUwLCBUb21QYXJzZXIuUlVMRV9wcm9wZXJ0eVR5cGUpO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDU2MTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDg3LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NDc7XG5cdFx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTUwOyBcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gMTtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdHN3aXRjaCAoX2FsdCkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1NDg7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5QRVJJT0QpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU0OTtcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9uYWxUeXBlT3JJZGVudGlmZXIoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1NTI7IFxuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsODUsdGhpcy5fY3R4KTtcblx0XHRcdFx0fSB3aGlsZSAoIF9hbHQhPT0yICYmIF9hbHQhPT1BVE4uSU5WQUxJRF9BTFRfTlVNQkVSICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU1NDtcblx0XHRcdFx0dGhpcy5vcHRpb25hbFR5cGUoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU1NzsgXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IDE7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRzd2l0Y2ggKF9hbHQpIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTU1O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuUEVSSU9EKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1NTY7XG5cdFx0XHRcdFx0XHR0aGlzLm9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTU5OyBcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDg2LHRoaXMuX2N0eCk7XG5cdFx0XHRcdH0gd2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBvcHRpb25hbFR5cGVPcklkZW50aWZlcigpOiBPcHRpb25hbFR5cGVPcklkZW50aWZlckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyQ29udGV4dCA9IG5ldyBPcHRpb25hbFR5cGVPcklkZW50aWZlckNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDUyLCBUb21QYXJzZXIuUlVMRV9vcHRpb25hbFR5cGVPcklkZW50aWZlcik7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA1NjU7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw4OCx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTYzO1xuXHRcdFx0XHR0aGlzLmlkZW50aWZpZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAyKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTY0O1xuXHRcdFx0XHR0aGlzLm9wdGlvbmFsVHlwZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyB2YWx1ZSgpOiBWYWx1ZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFZhbHVlQ29udGV4dCA9IG5ldyBWYWx1ZUNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDU0LCBUb21QYXJzZXIuUlVMRV92YWx1ZSk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDU2Nztcblx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cblx0cHVibGljIGV4cHJlc3Npb24oKTogRXhwcmVzc2lvbkNvbnRleHQ7XG5cdHB1YmxpYyBleHByZXNzaW9uKF9wOiBudW1iZXIpOiBFeHByZXNzaW9uQ29udGV4dDtcblx0XG5cdHB1YmxpYyBleHByZXNzaW9uKF9wPzogbnVtYmVyKTogRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGlmIChfcCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRfcCA9IDA7XG5cdFx0fVxuXG5cdFx0bGV0IF9wYXJlbnRjdHg6IFBhcnNlclJ1bGVDb250ZXh0ID0gdGhpcy5fY3R4O1xuXHRcdGxldCBfcGFyZW50U3RhdGU6IG51bWJlciA9IHRoaXMuc3RhdGU7XG5cdFx0bGV0IF9sb2NhbGN0eDogRXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgRXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCBfcGFyZW50U3RhdGUpO1xuXHRcdGxldCBfcHJldmN0eDogRXhwcmVzc2lvbkNvbnRleHQgPSBfbG9jYWxjdHg7XG5cdFx0bGV0IF9zdGFydFN0YXRlOiBudW1iZXIgPSA1Njtcblx0XHR0aGlzLmVudGVyUmVjdXJzaW9uUnVsZShfbG9jYWxjdHgsIDU2LCBUb21QYXJzZXIuUlVMRV9leHByZXNzaW9uLCBfcCk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNTc2O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsODksdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTcwO1xuXHRcdFx0XHR0aGlzLnVuYXJ5RXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU3MTtcblx0XHRcdFx0dGhpcy5hcnJheUV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NzI7XG5cdFx0XHRcdHRoaXMub2JqZWN0RXhwcmVzc2lvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU3Mztcblx0XHRcdFx0dGhpcy5sYW1iZGFFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNTc0O1xuXHRcdFx0XHR0aGlzLmxpdGVyYWwoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA1NzU7XG5cdFx0XHRcdHRoaXMucGFyZW50aGVzaXplZEV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuX2N0eC5fc3RvcCA9IHRoaXMuX2lucHV0LnRyeUxUKC0xKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA1OTg7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsOTUsdGhpcy5fY3R4KTtcblx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9wYXJzZUxpc3RlbmVycyE9bnVsbCApIHRoaXMudHJpZ2dlckV4aXRSdWxlRXZlbnQoKTtcblx0XHRcdFx0XHRfcHJldmN0eCA9IF9sb2NhbGN0eDtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU5Njtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsOTQsdGhpcy5fY3R4KSApIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRfbG9jYWxjdHggPSBuZXcgRXhwcmVzc2lvbkNvbnRleHQoX3BhcmVudGN0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRcdFx0XHRcdHRoaXMucHVzaE5ld1JlY3Vyc2lvbkNvbnRleHQoX2xvY2FsY3R4LCBfc3RhcnRTdGF0ZSwgVG9tUGFyc2VyLlJVTEVfZXhwcmVzc2lvbik7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTc4O1xuXHRcdFx0XHRcdFx0aWYgKCEodGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDcpKSkgdGhyb3cgbmV3IEZhaWxlZFByZWRpY2F0ZUV4Y2VwdGlvbih0aGlzLCBcInRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA3KVwiKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODA7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTc5O1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU4Mjtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKCAhKF9sYT09PVRvbVBhcnNlci5TVEFSIHx8IF9sYT09PVRvbVBhcnNlci5GT1JXQVJEX1NMQVNIKSApIHtcblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU4NDtcblx0XHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODM7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTg2O1xuXHRcdFx0XHRcdFx0dGhpcy5leHByZXNzaW9uKDgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRfbG9jYWxjdHggPSBuZXcgRXhwcmVzc2lvbkNvbnRleHQoX3BhcmVudGN0eCwgX3BhcmVudFN0YXRlKTtcblx0XHRcdFx0XHRcdHRoaXMucHVzaE5ld1JlY3Vyc2lvbkNvbnRleHQoX2xvY2FsY3R4LCBfc3RhcnRTdGF0ZSwgVG9tUGFyc2VyLlJVTEVfZXhwcmVzc2lvbik7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTg3O1xuXHRcdFx0XHRcdFx0aWYgKCEodGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDYpKSkgdGhyb3cgbmV3IEZhaWxlZFByZWRpY2F0ZUV4Y2VwdGlvbih0aGlzLCBcInRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA2KVwiKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1ODk7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTg4O1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU5MTtcblx0XHRcdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRcdFx0aWYgKCAhKF9sYT09PVRvbVBhcnNlci5QTFVTIHx8IF9sYT09PVRvbVBhcnNlci5NSU5VUykgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA1OTM7XG5cdFx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNTkyO1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDU5NTtcblx0XHRcdFx0XHRcdHRoaXMuZXhwcmVzc2lvbig3KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MDA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDk1LHRoaXMuX2N0eCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMudW5yb2xsUmVjdXJzaW9uQ29udGV4dHMoX3BhcmVudGN0eCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyB1bmFyeUV4cHJlc3Npb24oKTogVW5hcnlFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogVW5hcnlFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBVbmFyeUV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA1OCwgVG9tUGFyc2VyLlJVTEVfdW5hcnlFeHByZXNzaW9uKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDYwMTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCAhKF9sYT09PVRvbVBhcnNlci5QTFVTIHx8IF9sYT09PVRvbVBhcnNlci5NSU5VUykgKSB7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXJJbmxpbmUodGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5faW5wdXQuTEEoMSkgPT09IFRva2VuLkVPRikge1xuXHRcdFx0XHRcdHRoaXMubWF0Y2hlZEVPRiA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydE1hdGNoKHRoaXMpO1xuXHRcdFx0XHR0aGlzLmNvbnN1bWUoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA2MDI7XG5cdFx0XHR0aGlzLmV4cHJlc3Npb24oMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGFycmF5RXhwcmVzc2lvbigpOiBBcnJheUV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBBcnJheUV4cHJlc3Npb25Db250ZXh0ID0gbmV3IEFycmF5RXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDYwLCBUb21QYXJzZXIuUlVMRV9hcnJheUV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjA0O1xuXHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuQlJBQ0tFVF9PUEVOKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA2MDY7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCw5Nix0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MDU7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDYwOTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDk3LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYwODtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDYxMjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDk4LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYxMTtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNjE1O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBUb21QYXJzZXIuSW50ZWdlckxpdGVyYWwpIHwgKDEgPDwgVG9tUGFyc2VyLkZsb2F0aW5nUG9pbnRMaXRlcmFsKSB8ICgxIDw8IFRvbVBhcnNlci5Cb29sZWFuTGl0ZXJhbCkgfCAoMSA8PCBUb21QYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbCkgfCAoMSA8PCBUb21QYXJzZXIuU3RyaW5nTGl0ZXJhbCkgfCAoMSA8PCBUb21QYXJzZXIuTnVsbExpdGVyYWwpIHwgKDEgPDwgVG9tUGFyc2VyLklEKSB8ICgxIDw8IFRvbVBhcnNlci5QTFVTKSB8ICgxIDw8IFRvbVBhcnNlci5NSU5VUykgfCAoMSA8PCBUb21QYXJzZXIuQlJBQ0VfT1BFTikgfCAoMSA8PCBUb21QYXJzZXIuUEFSRU5fT1BFTikgfCAoMSA8PCBUb21QYXJzZXIuQlJBQ0tFVF9PUEVOKSkpICE9PSAwKSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MTQ7XG5cdFx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNjMwO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR3aGlsZSAoX2xhPT09VG9tUGFyc2VyLkNPTU1BKSB7XG5cdFx0XHRcdHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjE3O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5DT01NQSk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MTk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTAwLHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYxODtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYyMjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjIxO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjI1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDYyNDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjI3O1xuXHRcdFx0XHR0aGlzLmV4cHJlc3Npb24oMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjMyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDYzNDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEwNCx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MzM7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDYzNztcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2MzY7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNjQwO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLk5FV0xJTkUpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjM5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNjQyO1xuXHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuQlJBQ0tFVF9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIG9iamVjdEV4cHJlc3Npb24oKTogT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9iamVjdEV4cHJlc3Npb25Db250ZXh0ID0gbmV3IE9iamVjdEV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA2MiwgVG9tUGFyc2VyLlJVTEVfb2JqZWN0RXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA2NDQ7XG5cdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5CUkFDRV9PUEVOKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA2NDY7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKCB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMDcsdGhpcy5fY3R4KSApIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjQ1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNjQ5O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTA4LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY0ODtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlID0gNjUyO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICggdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTA5LHRoaXMuX2N0eCkgKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY1MTtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDY1NTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKCgoKF9sYSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IF9sYSkgJiAoKDEgPDwgVG9tUGFyc2VyLkludGVnZXJMaXRlcmFsKSB8ICgxIDw8IFRvbVBhcnNlci5GbG9hdGluZ1BvaW50TGl0ZXJhbCkgfCAoMSA8PCBUb21QYXJzZXIuQm9vbGVhbkxpdGVyYWwpIHwgKDEgPDwgVG9tUGFyc2VyLkNoYXJhY3RlckxpdGVyYWwpIHwgKDEgPDwgVG9tUGFyc2VyLlN0cmluZ0xpdGVyYWwpIHwgKDEgPDwgVG9tUGFyc2VyLk51bGxMaXRlcmFsKSkpICE9PSAwKSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NTQ7XG5cdFx0XHRcdHRoaXMub2JqZWN0UGFpckV4cHJlc3Npb25MaXN0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDY1ODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDExMSx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NTc7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUgPSA2NjE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuTkVXTElORSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2NjA7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLk5FV0xJTkUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA2NjQ7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjYzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDY2Njtcblx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkJSQUNFX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb2JqZWN0UGFpckV4cHJlc3Npb25MaXN0KCk6IE9iamVjdFBhaXJFeHByZXNzaW9uTGlzdENvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IE9iamVjdFBhaXJFeHByZXNzaW9uTGlzdENvbnRleHQgPSBuZXcgT2JqZWN0UGFpckV4cHJlc3Npb25MaXN0Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNjQsIFRvbVBhcnNlci5SVUxFX29iamVjdFBhaXJFeHByZXNzaW9uTGlzdCk7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNjY4O1xuXHRcdFx0dGhpcy5vYmplY3RQYWlyRXhwcmVzc2lvbigpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDY4NTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMTgsdGhpcy5fY3R4KTtcblx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjcwO1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjY5O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NzI7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuQ09NTUEpO1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NzQ7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDExNSx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA2NzM7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3Nztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5ORVdMSU5FKSB7XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjc2O1xuXHRcdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuTkVXTElORSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY4MDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY3OTtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjgyO1xuXHRcdFx0XHRcdHRoaXMub2JqZWN0UGFpckV4cHJlc3Npb24oKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjg3O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMTgsdGhpcy5fY3R4KTtcblx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgb2JqZWN0UGFpckV4cHJlc3Npb24oKTogT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQgPSBuZXcgT2JqZWN0UGFpckV4cHJlc3Npb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA2NiwgVG9tUGFyc2VyLlJVTEVfb2JqZWN0UGFpckV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDcwODtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEyMyx0aGlzLl9jdHgpICkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjg4O1xuXHRcdFx0XHR0aGlzLmxpdGVyYWwoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5MDtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNjg5O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNjkyO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5DT0xPTik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA2OTQ7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5Mztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5Njtcblx0XHRcdFx0dGhpcy5vYmplY3RFeHByZXNzaW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5ODtcblx0XHRcdFx0dGhpcy5saXRlcmFsKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MDA7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDY5OTtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcwMjtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuQ09MT04pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzA0O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3MDM7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MDY7XG5cdFx0XHRcdHRoaXMubGl0ZXJhbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBsYW1iZGFFeHByZXNzaW9uKCk6IExhbWJkYUV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBMYW1iZGFFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBMYW1iZGFFeHByZXNzaW9uQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNjgsIFRvbVBhcnNlci5SVUxFX2xhbWJkYUV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDc0MTtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgVG9tUGFyc2VyLlBBUkVOX09QRU46XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MTA7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlBBUkVOX09QRU4pO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzEyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEyNCx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3MTE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzE1O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLklEKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3MTQ7XG5cdFx0XHRcdFx0dGhpcy5mb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MTg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcxNztcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcyMDtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuUEFSRU5fQ0xPU0UpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzIyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0XHRpZiAoX2xhPT09VG9tUGFyc2VyLlNQQUNFKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3MjE7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MjQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkFSUk9XKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcyNjtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzI1O1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzI4O1xuXHRcdFx0XHR0aGlzLnR5cGUoMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5JRDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDcyOTtcblx0XHRcdFx0dGhpcy5wYXJhbWV0ZXIoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDczMTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzMwO1xuXHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzMzO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5BUlJPVyk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3MzU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDczNDtcblx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDczNztcblx0XHRcdFx0dGhpcy50eXBlKDApO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzM5O1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdHN3aXRjaCAoIHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDEzMSx0aGlzLl9jdHgpICkge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3Mzg7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuUVVFU1RJT04pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBsaXRlcmFsKCk6IExpdGVyYWxDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBMaXRlcmFsQ29udGV4dCA9IG5ldyBMaXRlcmFsQ29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgNzAsIFRvbVBhcnNlci5SVUxFX2xpdGVyYWwpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzQzO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoICEoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBUb21QYXJzZXIuSW50ZWdlckxpdGVyYWwpIHwgKDEgPDwgVG9tUGFyc2VyLkZsb2F0aW5nUG9pbnRMaXRlcmFsKSB8ICgxIDw8IFRvbVBhcnNlci5Cb29sZWFuTGl0ZXJhbCkgfCAoMSA8PCBUb21QYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbCkgfCAoMSA8PCBUb21QYXJzZXIuU3RyaW5nTGl0ZXJhbCkgfCAoMSA8PCBUb21QYXJzZXIuTnVsbExpdGVyYWwpKSkgIT09IDApKSApIHtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3ZlcklubGluZSh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5MQSgxKSA9PT0gVG9rZW4uRU9GKSB7XG5cdFx0XHRcdFx0dGhpcy5tYXRjaGVkRU9GID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0TWF0Y2godGhpcyk7XG5cdFx0XHRcdHRoaXMuY29uc3VtZSgpO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBwYXJlbnRoZXNpemVkRXhwcmVzc2lvbigpOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uQ29udGV4dCA9IG5ldyBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDcyLCBUb21QYXJzZXIuUlVMRV9wYXJlbnRoZXNpemVkRXhwcmVzc2lvbik7XG5cdFx0bGV0IF9sYTogbnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA3NDU7XG5cdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5QQVJFTl9PUEVOKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA3NDc7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzQ2O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDc0OTtcblx0XHRcdHRoaXMuZXhwcmVzc2lvbigwKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA3NTE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmIChfbGE9PT1Ub21QYXJzZXIuU1BBQ0UpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzUwO1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdGF0ZSA9IDc1Mztcblx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlBBUkVOX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgZGVzY3JpcHRpb24oKTogRGVzY3JpcHRpb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEZXNjcmlwdGlvbkNvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25Db250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA3NCwgVG9tUGFyc2VyLlJVTEVfZGVzY3JpcHRpb24pO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdHtcblx0XHRcdHRoaXMuc3RhdGUgPSA3NTU7XG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uTGluZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmUoKTogRGVzY3JpcHRpb25MaW5lQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogRGVzY3JpcHRpb25MaW5lQ29udGV4dCA9IG5ldyBEZXNjcmlwdGlvbkxpbmVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA3NiwgVG9tUGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc3RhdGUgPSA3NzE7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5JbnRlZ2VyTGl0ZXJhbDpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLkZsb2F0aW5nUG9pbnRMaXRlcmFsOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuQm9vbGVhbkxpdGVyYWw6XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuU3RyaW5nTGl0ZXJhbDpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuSUQ6XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5TUEFDRTpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLk1JTlVTOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuRk9SV0FSRF9TTEFTSDpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLkNPTE9OOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuUEVSSU9EOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLkJSQUNFX0NMT1NFOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzU3O1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uTGluZVN0YXJ0KCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3NjE7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdHdoaWxlICgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFRvbVBhcnNlci5JbnRlZ2VyTGl0ZXJhbCkgfCAoMSA8PCBUb21QYXJzZXIuRmxvYXRpbmdQb2ludExpdGVyYWwpIHwgKDEgPDwgVG9tUGFyc2VyLkJvb2xlYW5MaXRlcmFsKSB8ICgxIDw8IFRvbVBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsKSB8ICgxIDw8IFRvbVBhcnNlci5TdHJpbmdMaXRlcmFsKSB8ICgxIDw8IFRvbVBhcnNlci5OdWxsTGl0ZXJhbCkgfCAoMSA8PCBUb21QYXJzZXIuSUQpIHwgKDEgPDwgVG9tUGFyc2VyLlNQQUNFKSB8ICgxIDw8IFRvbVBhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgVG9tUGFyc2VyLkFUKSB8ICgxIDw8IFRvbVBhcnNlci5NSU5VUykgfCAoMSA8PCBUb21QYXJzZXIuRk9SV0FSRF9TTEFTSCkgfCAoMSA8PCBUb21QYXJzZXIuQ09MT04pIHwgKDEgPDwgVG9tUGFyc2VyLlBFUklPRCkgfCAoMSA8PCBUb21QYXJzZXIuSU5MSU5FX1RBR19TVEFSVCkgfCAoMSA8PCBUb21QYXJzZXIuQlJBQ0VfT1BFTikgfCAoMSA8PCBUb21QYXJzZXIuQlJBQ0VfQ0xPU0UpKSkgIT09IDApKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzU4O1xuXHRcdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25MaW5lRWxlbWVudCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc2Mztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9tUGFyc2VyLklOTElORV9UQUdfU1RBUlQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3NjQ7XG5cdFx0XHRcdHRoaXMuaW5saW5lVGFnKCk7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3Njg7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdHdoaWxlICgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFRvbVBhcnNlci5JbnRlZ2VyTGl0ZXJhbCkgfCAoMSA8PCBUb21QYXJzZXIuRmxvYXRpbmdQb2ludExpdGVyYWwpIHwgKDEgPDwgVG9tUGFyc2VyLkJvb2xlYW5MaXRlcmFsKSB8ICgxIDw8IFRvbVBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsKSB8ICgxIDw8IFRvbVBhcnNlci5TdHJpbmdMaXRlcmFsKSB8ICgxIDw8IFRvbVBhcnNlci5OdWxsTGl0ZXJhbCkgfCAoMSA8PCBUb21QYXJzZXIuSUQpIHwgKDEgPDwgVG9tUGFyc2VyLlNQQUNFKSB8ICgxIDw8IFRvbVBhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgVG9tUGFyc2VyLkFUKSB8ICgxIDw8IFRvbVBhcnNlci5NSU5VUykgfCAoMSA8PCBUb21QYXJzZXIuRk9SV0FSRF9TTEFTSCkgfCAoMSA8PCBUb21QYXJzZXIuQ09MT04pIHwgKDEgPDwgVG9tUGFyc2VyLlBFUklPRCkgfCAoMSA8PCBUb21QYXJzZXIuSU5MSU5FX1RBR19TVEFSVCkgfCAoMSA8PCBUb21QYXJzZXIuQlJBQ0VfT1BFTikgfCAoMSA8PCBUb21QYXJzZXIuQlJBQ0VfQ0xPU0UpKSkgIT09IDApKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzY1O1xuXHRcdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25MaW5lRWxlbWVudCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc3MDtcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lU3RhcnQoKTogRGVzY3JpcHRpb25MaW5lU3RhcnRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEZXNjcmlwdGlvbkxpbmVTdGFydENvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25MaW5lU3RhcnRDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA3OCwgVG9tUGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lU3RhcnQpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0bGV0IF9hbHQ6IG51bWJlcjtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDc3NDtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0aWYgKF9sYT09PVRvbVBhcnNlci5TUEFDRSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3NzM7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0YXRlID0gNzc3OyBcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSAxO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRzd2l0Y2ggKF9hbHQpIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc3Njtcblx0XHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uVGV4dCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3Nzk7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxMzksdGhpcy5fY3R4KTtcblx0XHRcdH0gd2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDc4Njtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNDEsdGhpcy5fY3R4KTtcblx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdGlmICggX2FsdD09PTEgKSB7XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA3ODQ7XG5cdFx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdFx0XHRjYXNlIFRvbVBhcnNlci5JbnRlZ2VyTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFRvbVBhcnNlci5GbG9hdGluZ1BvaW50TGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFRvbVBhcnNlci5Cb29sZWFuTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFRvbVBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgVG9tUGFyc2VyLlN0cmluZ0xpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBUb21QYXJzZXIuTnVsbExpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBUb21QYXJzZXIuSUQ6XG5cdFx0XHRcdFx0Y2FzZSBUb21QYXJzZXIuVEVYVF9DT05URU5UOlxuXHRcdFx0XHRcdGNhc2UgVG9tUGFyc2VyLk1JTlVTOlxuXHRcdFx0XHRcdGNhc2UgVG9tUGFyc2VyLkZPUldBUkRfU0xBU0g6XG5cdFx0XHRcdFx0Y2FzZSBUb21QYXJzZXIuQ09MT046XG5cdFx0XHRcdFx0Y2FzZSBUb21QYXJzZXIuUEVSSU9EOlxuXHRcdFx0XHRcdGNhc2UgVG9tUGFyc2VyLkJSQUNFX09QRU46XG5cdFx0XHRcdFx0Y2FzZSBUb21QYXJzZXIuQlJBQ0VfQ0xPU0U6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gNzgxO1xuXHRcdFx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvblRleHQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgVG9tUGFyc2VyLlNQQUNFOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc4Mjtcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgVG9tUGFyc2VyLkFUOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc4Mztcblx0XHRcdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkFUKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc4ODtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTQxLHRoaXMuX2N0eCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGRlc2NyaXB0aW9uVGV4dCgpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEZXNjcmlwdGlvblRleHRDb250ZXh0ID0gbmV3IERlc2NyaXB0aW9uVGV4dENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDgwLCBUb21QYXJzZXIuUlVMRV9kZXNjcmlwdGlvblRleHQpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnN0YXRlID0gNzk4O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBUb21QYXJzZXIuVEVYVF9DT05URU5UOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCAxKTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzg5O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5URVhUX0NPTlRFTlQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb21QYXJzZXIuSUQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3OTA7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLklEKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9tUGFyc2VyLkZPUldBUkRfU0xBU0g6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDMpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3OTE7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkZPUldBUkRfU0xBU0gpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb21QYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNCk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc5Mjtcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuQlJBQ0VfT1BFTik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5CUkFDRV9DTE9TRTpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgNSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDc5Mztcblx0XHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuQlJBQ0VfQ0xPU0UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBUb21QYXJzZXIuQ09MT046XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDYpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3OTQ7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkNPTE9OKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9tUGFyc2VyLk1JTlVTOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA3KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzk1O1xuXHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5NSU5VUyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5QRVJJT0Q6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDgpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA3OTY7XG5cdFx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlBFUklPRCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5JbnRlZ2VyTGl0ZXJhbDpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLkZsb2F0aW5nUG9pbnRMaXRlcmFsOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuQm9vbGVhbkxpdGVyYWw6XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuU3RyaW5nTGl0ZXJhbDpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0XHR0aGlzLmVudGVyT3V0ZXJBbHQoX2xvY2FsY3R4LCA5KTtcblx0XHRcdFx0e1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gNzk3O1xuXHRcdFx0XHR0aGlzLmxpdGVyYWwoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBOb1ZpYWJsZUFsdEV4Y2VwdGlvbih0aGlzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lRWxlbWVudCgpOiBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQgPSBuZXcgRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDgyLCBUb21QYXJzZXIuUlVMRV9kZXNjcmlwdGlvbkxpbmVFbGVtZW50KTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDgwMjtcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdHN3aXRjaCAodGhpcy5faW5wdXQuTEEoMSkpIHtcblx0XHRcdGNhc2UgVG9tUGFyc2VyLklOTElORV9UQUdfU1RBUlQ6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MDA7XG5cdFx0XHRcdHRoaXMuaW5saW5lVGFnKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5JbnRlZ2VyTGl0ZXJhbDpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLkZsb2F0aW5nUG9pbnRMaXRlcmFsOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuQm9vbGVhbkxpdGVyYWw6XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5DaGFyYWN0ZXJMaXRlcmFsOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuU3RyaW5nTGl0ZXJhbDpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuSUQ6XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5TUEFDRTpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLkFUOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuTUlOVVM6XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5GT1JXQVJEX1NMQVNIOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuQ09MT046XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5QRVJJT0Q6XG5cdFx0XHRjYXNlIFRvbVBhcnNlci5CUkFDRV9PUEVOOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuQlJBQ0VfQ0xPU0U6XG5cdFx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDIpO1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MDE7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25MaW5lVGV4dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVUZXh0KCk6IERlc2NyaXB0aW9uTGluZVRleHRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBEZXNjcmlwdGlvbkxpbmVUZXh0Q29udGV4dCA9IG5ldyBEZXNjcmlwdGlvbkxpbmVUZXh0Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgODQsIFRvbVBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZVRleHQpO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgX2FsdDogbnVtYmVyO1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gODA3OyBcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9hbHQgPSAxO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRzd2l0Y2ggKF9hbHQpIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlID0gODA3O1xuXHRcdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMuX2lucHV0LkxBKDEpKSB7XG5cdFx0XHRcdFx0Y2FzZSBUb21QYXJzZXIuSW50ZWdlckxpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBUb21QYXJzZXIuRmxvYXRpbmdQb2ludExpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBUb21QYXJzZXIuQm9vbGVhbkxpdGVyYWw6XG5cdFx0XHRcdFx0Y2FzZSBUb21QYXJzZXIuQ2hhcmFjdGVyTGl0ZXJhbDpcblx0XHRcdFx0XHRjYXNlIFRvbVBhcnNlci5TdHJpbmdMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgVG9tUGFyc2VyLk51bGxMaXRlcmFsOlxuXHRcdFx0XHRcdGNhc2UgVG9tUGFyc2VyLklEOlxuXHRcdFx0XHRcdGNhc2UgVG9tUGFyc2VyLlRFWFRfQ09OVEVOVDpcblx0XHRcdFx0XHRjYXNlIFRvbVBhcnNlci5NSU5VUzpcblx0XHRcdFx0XHRjYXNlIFRvbVBhcnNlci5GT1JXQVJEX1NMQVNIOlxuXHRcdFx0XHRcdGNhc2UgVG9tUGFyc2VyLkNPTE9OOlxuXHRcdFx0XHRcdGNhc2UgVG9tUGFyc2VyLlBFUklPRDpcblx0XHRcdFx0XHRjYXNlIFRvbVBhcnNlci5CUkFDRV9PUEVOOlxuXHRcdFx0XHRcdGNhc2UgVG9tUGFyc2VyLkJSQUNFX0NMT1NFOlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgwNDtcblx0XHRcdFx0XHRcdHRoaXMuZGVzY3JpcHRpb25UZXh0KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFRvbVBhcnNlci5TUEFDRTpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4MDU7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFRvbVBhcnNlci5BVDpcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4MDY7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5BVCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IE5vVmlhYmxlQWx0RXhjZXB0aW9uKHRoaXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MDk7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9hbHQgPSB0aGlzLmludGVycHJldGVyLmFkYXB0aXZlUHJlZGljdCh0aGlzLl9pbnB1dCwxNDUsdGhpcy5fY3R4KTtcblx0XHRcdH0gd2hpbGUgKCBfYWx0IT09MiAmJiBfYWx0IT09QVROLklOVkFMSURfQUxUX05VTUJFUiApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBpbmxpbmVUYWcoKTogSW5saW5lVGFnQ29udGV4dCB7XG5cdFx0bGV0IF9sb2NhbGN0eDogSW5saW5lVGFnQ29udGV4dCA9IG5ldyBJbmxpbmVUYWdDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA4NiwgVG9tUGFyc2VyLlJVTEVfaW5saW5lVGFnKTtcblx0XHRsZXQgX2xhOiBudW1iZXI7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDgxMTtcblx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLklOTElORV9UQUdfU1RBUlQpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDgxMjtcblx0XHRcdHRoaXMuaW5saW5lVGFnTmFtZSgpO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDgxMztcblx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLlNQQUNFKTtcblx0XHRcdHRoaXMuc3RhdGUgPSA4MTU7XG5cdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRfbGEgPSB0aGlzLl9pbnB1dC5MQSgxKTtcblx0XHRcdGlmICgoKChfbGEpICYgfjB4MUYpID09PSAwICYmICgoMSA8PCBfbGEpICYgKCgxIDw8IFRvbVBhcnNlci5JRCkgfCAoMSA8PCBUb21QYXJzZXIuTkVXTElORSkgfCAoMSA8PCBUb21QYXJzZXIuU1BBQ0UpIHwgKDEgPDwgVG9tUGFyc2VyLlRFWFRfQ09OVEVOVCkgfCAoMSA8PCBUb21QYXJzZXIuRk9SV0FSRF9TTEFTSCkgfCAoMSA8PCBUb21QYXJzZXIuUEVSSU9EKSB8ICgxIDw8IFRvbVBhcnNlci5CUkFDRV9PUEVOKSkpICE9PSAwKSkge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MTQ7XG5cdFx0XHRcdHRoaXMuaW5saW5lVGFnQm9keSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RhdGUgPSA4MTc7XG5cdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5CUkFDRV9DTE9TRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGlubGluZVRhZ05hbWUoKTogSW5saW5lVGFnTmFtZUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IElubGluZVRhZ05hbWVDb250ZXh0ID0gbmV3IElubGluZVRhZ05hbWVDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA4OCwgVG9tUGFyc2VyLlJVTEVfaW5saW5lVGFnTmFtZSk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDgxOTtcblx0XHRcdHRoaXMuaWRlbnRpZmllcigpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAocmUpIHtcblx0XHRcdGlmIChyZSBpbnN0YW5jZW9mIFJlY29nbml0aW9uRXhjZXB0aW9uKSB7XG5cdFx0XHRcdF9sb2NhbGN0eC5leGNlcHRpb24gPSByZTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRFcnJvcih0aGlzLCByZSk7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVjb3Zlcih0aGlzLCByZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyByZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluYWxseSB7XG5cdFx0XHR0aGlzLmV4aXRSdWxlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBfbG9jYWxjdHg7XG5cdH1cblx0XG5cdHB1YmxpYyBpbmxpbmVUYWdCb2R5KCk6IElubGluZVRhZ0JvZHlDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBJbmxpbmVUYWdCb2R5Q29udGV4dCA9IG5ldyBJbmxpbmVUYWdCb2R5Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOTAsIFRvbVBhcnNlci5SVUxFX2lubGluZVRhZ0JvZHkpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gODIyOyBcblx0XHRcdHRoaXMuX2VyckhhbmRsZXIuc3luYyh0aGlzKTtcblx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHR7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgyMTtcblx0XHRcdFx0dGhpcy5icmFjZUJvZHkoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4MjQ7IFxuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fSB3aGlsZSAoICgoKF9sYSkgJiB+MHgxRikgPT09IDAgJiYgKCgxIDw8IF9sYSkgJiAoKDEgPDwgVG9tUGFyc2VyLklEKSB8ICgxIDw8IFRvbVBhcnNlci5ORVdMSU5FKSB8ICgxIDw8IFRvbVBhcnNlci5TUEFDRSkgfCAoMSA8PCBUb21QYXJzZXIuVEVYVF9DT05URU5UKSB8ICgxIDw8IFRvbVBhcnNlci5GT1JXQVJEX1NMQVNIKSB8ICgxIDw8IFRvbVBhcnNlci5QRVJJT0QpIHwgKDEgPDwgVG9tUGFyc2VyLkJSQUNFX09QRU4pKSkgIT09IDApICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGJyYWNlRXhwcmVzc2lvbigpOiBCcmFjZUV4cHJlc3Npb25Db250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBCcmFjZUV4cHJlc3Npb25Db250ZXh0ID0gbmV3IEJyYWNlRXhwcmVzc2lvbkNvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDkyLCBUb21QYXJzZXIuUlVMRV9icmFjZUV4cHJlc3Npb24pO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gODI2O1xuXHRcdFx0dGhpcy5tYXRjaChUb21QYXJzZXIuQlJBQ0VfT1BFTik7XG5cdFx0XHR0aGlzLnN0YXRlID0gODMwO1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHR3aGlsZSAoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBUb21QYXJzZXIuSUQpIHwgKDEgPDwgVG9tUGFyc2VyLk5FV0xJTkUpIHwgKDEgPDwgVG9tUGFyc2VyLlNQQUNFKSB8ICgxIDw8IFRvbVBhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgVG9tUGFyc2VyLkZPUldBUkRfU0xBU0gpIHwgKDEgPDwgVG9tUGFyc2VyLlBFUklPRCkgfCAoMSA8PCBUb21QYXJzZXIuQlJBQ0VfT1BFTikpKSAhPT0gMCkpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHR7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSA4Mjc7XG5cdFx0XHRcdHRoaXMuYnJhY2VCb2R5KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gODMyO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdF9sYSA9IHRoaXMuX2lucHV0LkxBKDEpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IDgzMztcblx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLkJSQUNFX0NMT1NFKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cdFxuXHRwdWJsaWMgYnJhY2VCb2R5KCk6IEJyYWNlQm9keUNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IEJyYWNlQm9keUNvbnRleHQgPSBuZXcgQnJhY2VCb2R5Q29udGV4dCh0aGlzLl9jdHgsIHRoaXMuc3RhdGUpO1xuXHRcdHRoaXMuZW50ZXJSdWxlKF9sb2NhbGN0eCwgOTQsIFRvbVBhcnNlci5SVUxFX2JyYWNlQm9keSk7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBfYWx0OiBudW1iZXI7XG5cdFx0XHR0aGlzLnN0YXRlID0gODQ0O1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0c3dpdGNoICh0aGlzLl9pbnB1dC5MQSgxKSkge1xuXHRcdFx0Y2FzZSBUb21QYXJzZXIuQlJBQ0VfT1BFTjpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgzNTtcblx0XHRcdFx0dGhpcy5icmFjZUV4cHJlc3Npb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVG9tUGFyc2VyLklEOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuTkVXTElORTpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLlNQQUNFOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuVEVYVF9DT05URU5UOlxuXHRcdFx0Y2FzZSBUb21QYXJzZXIuRk9SV0FSRF9TTEFTSDpcblx0XHRcdGNhc2UgVG9tUGFyc2VyLlBFUklPRDpcblx0XHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMik7XG5cdFx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDgzNjtcblx0XHRcdFx0dGhpcy5icmFjZVRleHQoKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg0MTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5zeW5jKHRoaXMpO1xuXHRcdFx0XHRfYWx0ID0gdGhpcy5pbnRlcnByZXRlci5hZGFwdGl2ZVByZWRpY3QodGhpcy5faW5wdXQsMTQ5LHRoaXMuX2N0eCk7XG5cdFx0XHRcdHdoaWxlICggX2FsdCE9PTIgJiYgX2FsdCE9PUFUTi5JTlZBTElEX0FMVF9OVU1CRVIgKSB7XG5cdFx0XHRcdFx0aWYgKCBfYWx0PT09MSApIHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4Mzc7XG5cdFx0XHRcdFx0XHR0aGlzLm1hdGNoKFRvbVBhcnNlci5ORVdMSU5FKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUgPSA4Mzg7XG5cdFx0XHRcdFx0XHR0aGlzLmJyYWNlVGV4dCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IDg0Mztcblx0XHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnN5bmModGhpcyk7XG5cdFx0XHRcdFx0X2FsdCA9IHRoaXMuaW50ZXJwcmV0ZXIuYWRhcHRpdmVQcmVkaWN0KHRoaXMuX2lucHV0LDE0OSx0aGlzLl9jdHgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgTm9WaWFibGVBbHRFeGNlcHRpb24odGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGJyYWNlVGV4dCgpOiBCcmFjZVRleHRDb250ZXh0IHtcblx0XHRsZXQgX2xvY2FsY3R4OiBCcmFjZVRleHRDb250ZXh0ID0gbmV3IEJyYWNlVGV4dENvbnRleHQodGhpcy5fY3R4LCB0aGlzLnN0YXRlKTtcblx0XHR0aGlzLmVudGVyUnVsZShfbG9jYWxjdHgsIDk2LCBUb21QYXJzZXIuUlVMRV9icmFjZVRleHQpO1xuXHRcdGxldCBfbGE6IG51bWJlcjtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5lbnRlck91dGVyQWx0KF9sb2NhbGN0eCwgMSk7XG5cdFx0XHR7XG5cdFx0XHR0aGlzLnN0YXRlID0gODQ2O1xuXHRcdFx0X2xhID0gdGhpcy5faW5wdXQuTEEoMSk7XG5cdFx0XHRpZiAoICEoKCgoX2xhKSAmIH4weDFGKSA9PT0gMCAmJiAoKDEgPDwgX2xhKSAmICgoMSA8PCBUb21QYXJzZXIuSUQpIHwgKDEgPDwgVG9tUGFyc2VyLk5FV0xJTkUpIHwgKDEgPDwgVG9tUGFyc2VyLlNQQUNFKSB8ICgxIDw8IFRvbVBhcnNlci5URVhUX0NPTlRFTlQpIHwgKDEgPDwgVG9tUGFyc2VyLkZPUldBUkRfU0xBU0gpIHwgKDEgPDwgVG9tUGFyc2VyLlBFUklPRCkpKSAhPT0gMCkpICkge1xuXHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVySW5saW5lKHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRoaXMuX2lucHV0LkxBKDEpID09PSBUb2tlbi5FT0YpIHtcblx0XHRcdFx0XHR0aGlzLm1hdGNoZWRFT0YgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZXBvcnRNYXRjaCh0aGlzKTtcblx0XHRcdFx0dGhpcy5jb25zdW1lKCk7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChyZSkge1xuXHRcdFx0aWYgKHJlIGluc3RhbmNlb2YgUmVjb2duaXRpb25FeGNlcHRpb24pIHtcblx0XHRcdFx0X2xvY2FsY3R4LmV4Y2VwdGlvbiA9IHJlO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlcG9ydEVycm9yKHRoaXMsIHJlKTtcblx0XHRcdFx0dGhpcy5fZXJySGFuZGxlci5yZWNvdmVyKHRoaXMsIHJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IHJlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5hbGx5IHtcblx0XHRcdHRoaXMuZXhpdFJ1bGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9sb2NhbGN0eDtcblx0fVxuXHRcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQge1xuXHRcdGxldCBfbG9jYWxjdHg6IElkZW50aWZpZXJDb250ZXh0ID0gbmV3IElkZW50aWZpZXJDb250ZXh0KHRoaXMuX2N0eCwgdGhpcy5zdGF0ZSk7XG5cdFx0dGhpcy5lbnRlclJ1bGUoX2xvY2FsY3R4LCA5OCwgVG9tUGFyc2VyLlJVTEVfaWRlbnRpZmllcik7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuZW50ZXJPdXRlckFsdChfbG9jYWxjdHgsIDEpO1xuXHRcdFx0e1xuXHRcdFx0dGhpcy5zdGF0ZSA9IDg0ODtcblx0XHRcdHRoaXMubWF0Y2goVG9tUGFyc2VyLklEKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2ggKHJlKSB7XG5cdFx0XHRpZiAocmUgaW5zdGFuY2VvZiBSZWNvZ25pdGlvbkV4Y2VwdGlvbikge1xuXHRcdFx0XHRfbG9jYWxjdHguZXhjZXB0aW9uID0gcmU7XG5cdFx0XHRcdHRoaXMuX2VyckhhbmRsZXIucmVwb3J0RXJyb3IodGhpcywgcmUpO1xuXHRcdFx0XHR0aGlzLl9lcnJIYW5kbGVyLnJlY292ZXIodGhpcywgcmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmFsbHkge1xuXHRcdFx0dGhpcy5leGl0UnVsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xvY2FsY3R4O1xuXHR9XG5cblx0cHVibGljIHNlbXByZWQoX2xvY2FsY3R4OiBSdWxlQ29udGV4dCwgcnVsZUluZGV4OiBudW1iZXIsIHByZWRJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0c3dpdGNoIChydWxlSW5kZXgpIHtcblx0XHRjYXNlIDEwOlxuXHRcdFx0cmV0dXJuIHRoaXMudHlwZV9zZW1wcmVkKF9sb2NhbGN0eCBhcyBUeXBlQ29udGV4dCwgcHJlZEluZGV4KTtcblxuXHRcdGNhc2UgMjA6XG5cdFx0XHRyZXR1cm4gdGhpcy5hcnJheVR5cGVfc2VtcHJlZChfbG9jYWxjdHggYXMgQXJyYXlUeXBlQ29udGV4dCwgcHJlZEluZGV4KTtcblxuXHRcdGNhc2UgMjg6XG5cdFx0XHRyZXR1cm4gdGhpcy5leHByZXNzaW9uX3NlbXByZWQoX2xvY2FsY3R4IGFzIEV4cHJlc3Npb25Db250ZXh0LCBwcmVkSW5kZXgpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRwcml2YXRlIHR5cGVfc2VtcHJlZChfbG9jYWxjdHg6IFR5cGVDb250ZXh0LCBwcmVkSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHN3aXRjaCAocHJlZEluZGV4KSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA5KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cHJpdmF0ZSBhcnJheVR5cGVfc2VtcHJlZChfbG9jYWxjdHg6IEFycmF5VHlwZUNvbnRleHQsIHByZWRJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0c3dpdGNoIChwcmVkSW5kZXgpIHtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gdGhpcy5wcmVjcHJlZCh0aGlzLl9jdHgsIDEpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRwcml2YXRlIGV4cHJlc3Npb25fc2VtcHJlZChfbG9jYWxjdHg6IEV4cHJlc3Npb25Db250ZXh0LCBwcmVkSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHN3aXRjaCAocHJlZEluZGV4KSB7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIHRoaXMucHJlY3ByZWQodGhpcy5fY3R4LCA3KTtcblxuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiB0aGlzLnByZWNwcmVkKHRoaXMuX2N0eCwgNik7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3NlcmlhbGl6ZWRBVE5TZWdtZW50czogbnVtYmVyID0gMjtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3NlcmlhbGl6ZWRBVE5TZWdtZW50MDogc3RyaW5nID1cblx0XHRcIlxceDAzXFx1QUY2RlxcdTgzMjBcXHU0NzlEXFx1Qjc1Q1xcdTQ4ODBcXHUxNjA1XFx1MTkxQ1xcdUFCMzdcXHgwMyNcXHUwMzU1XFx4MDRcXHgwMlwiK1xuXHRcdFwiXFx0XFx4MDJcXHgwNFxceDAzXFx0XFx4MDNcXHgwNFxceDA0XFx0XFx4MDRcXHgwNFxceDA1XFx0XFx4MDVcXHgwNFxceDA2XFx0XFx4MDZcXHgwNFxceDA3XCIrXG5cdFx0XCJcXHRcXHgwN1xceDA0XFxiXFx0XFxiXFx4MDRcXHRcXHRcXHRcXHgwNFxcblxcdFxcblxceDA0XFx2XFx0XFx2XFx4MDRcXGZcXHRcXGZcXHgwNFxcclxcdFxcclxceDA0XCIrXG5cdFx0XCJcXHgwRVxcdFxceDBFXFx4MDRcXHgwRlxcdFxceDBGXFx4MDRcXHgxMFxcdFxceDEwXFx4MDRcXHgxMVxcdFxceDExXFx4MDRcXHgxMlxcdFxceDEyXFx4MDRcIitcblx0XHRcIlxceDEzXFx0XFx4MTNcXHgwNFxceDE0XFx0XFx4MTRcXHgwNFxceDE1XFx0XFx4MTVcXHgwNFxceDE2XFx0XFx4MTZcXHgwNFxceDE3XFx0XFx4MTdcXHgwNFwiK1xuXHRcdFwiXFx4MThcXHRcXHgxOFxceDA0XFx4MTlcXHRcXHgxOVxceDA0XFx4MUFcXHRcXHgxQVxceDA0XFx4MUJcXHRcXHgxQlxceDA0XFx4MUNcXHRcXHgxQ1xceDA0XCIrXG5cdFx0XCJcXHgxRFxcdFxceDFEXFx4MDRcXHgxRVxcdFxceDFFXFx4MDRcXHgxRlxcdFxceDFGXFx4MDQgXFx0IFxceDA0IVxcdCFcXHgwNFxcXCJcXHRcXFwiXFx4MDQjXCIrXG5cdFx0XCJcXHQjXFx4MDQkXFx0JFxceDA0JVxcdCVcXHgwNCZcXHQmXFx4MDRcXCdcXHRcXCdcXHgwNChcXHQoXFx4MDQpXFx0KVxceDA0KlxcdCpcXHgwNCtcXHQrXCIrXG5cdFx0XCJcXHgwNCxcXHQsXFx4MDQtXFx0LVxceDA0LlxcdC5cXHgwNC9cXHQvXFx4MDQwXFx0MFxceDA0MVxcdDFcXHgwNDJcXHQyXFx4MDQzXFx0M1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwM1xceDAyXFx4MDVcXHgwMmpcXG5cXHgwMlxceDAzXFx4MDJcXHgwM1xceDAyXFx4MDVcXHgwMm5cXG5cXHgwMlxceDAzXFx4MDNcIitcblx0XHRcIlxceDA3XFx4MDNxXFxuXFx4MDNcXGZcXHgwM1xceDBFXFx4MDN0XFx2XFx4MDNcXHgwM1xceDAzXFx4MDNcXHgwM1xceDAzXFx4MDRcXHgwM1xceDA0XFx4MDNcIitcblx0XHRcIlxceDA1XFx4MDNcXHgwNVxceDAzXFx4MDVcXHgwN1xceDA1fVxcblxceDA1XFxmXFx4MDVcXHgwRVxceDA1XFx4ODBcXHZcXHgwNVxceDAzXFx4MDZcXHgwM1wiK1xuXHRcdFwiXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4OTFcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XCIrXG5cdFx0XCJcXHgwNVxceDA2XFx4OTVcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDVcXHgwNlxceEE3XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcIitcblx0XHRcIlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4QjNcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcIitcblx0XHRcIlxceDA2XFx4QjdcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcIitcblx0XHRcIlxceEJGXFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhDM1xcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4QzdcIitcblx0XHRcIlxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwNVxceDA2XFx4Q0JcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcIitcblx0XHRcIlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEQzXFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhEN1xcblxceDA2XFx4MDNcIitcblx0XHRcIlxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1wiK1xuXHRcdFwiXFx4MDZcXHgwNVxceDA2XFx4RTNcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxceEU3XFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlwiK1xuXHRcdFwiXFx4MDVcXHgwNlxceEVCXFxuXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhFRlxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1wiK1xuXHRcdFwiXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHhGOVxcblxceDA2XFx4MDNcXHgwNlwiK1xuXHRcdFwiXFx4MDNcXHgwNlxceDA1XFx4MDZcXHhGRFxcblxceDA2XFx4MDNcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDA1XFx4MDZcXHUwMTAzXCIrXG5cdFx0XCJcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxcdTAxMDdcXG5cXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDNcXHgwNlxceDAzXCIrXG5cdFx0XCJcXHgwNlxceDAzXFx4MDZcXHgwM1xceDA2XFx4MDVcXHgwNlxcdTAxMEZcXG5cXHgwNlxceDAzXFx4MDdcXHgwM1xceDA3XFx4MDNcXHgwN1xceDAzXFxiXCIrXG5cdFx0XCJcXHgwM1xcYlxceDAzXFxiXFx4MDVcXGJcXHUwMTE3XFxuXFxiXFx4MDNcXHRcXHgwM1xcdFxceDAzXFx0XFx4MDNcXG5cXHgwM1xcblxceDAzXFxuXFx4MDZcXG5cIitcblx0XHRcIlxcdTAxMUZcXG5cXG5cXHJcXG5cXHgwRVxcblxcdTAxMjBcXHgwM1xcblxceDAzXFxuXFx4MDNcXG5cXHgwNlxcblxcdTAxMjZcXG5cXG5cXHJcXG5cXHgwRVxcblwiK1xuXHRcdFwiXFx1MDEyN1xceDA1XFxuXFx1MDEyQVxcblxcblxceDAzXFx2XFx4MDNcXHZcXHgwNVxcdlxcdTAxMkVcXG5cXHZcXHgwM1xcZlxceDAzXFxmXFx4MDNcXGZcXHgwM1wiK1xuXHRcdFwiXFxmXFx4MDNcXGZcXHgwM1xcZlxceDAzXFxmXFx4MDNcXGZcXHgwM1xcZlxceDA1XFxmXFx1MDEzOVxcblxcZlxceDAzXFxmXFx4MDNcXGZcXHgwNVxcZlxcdTAxM0RcIitcblx0XHRcIlxcblxcZlxceDAzXFxmXFx4MDNcXGZcXHgwNVxcZlxcdTAxNDFcXG5cXGZcXHgwM1xcZlxceDA3XFxmXFx1MDE0NFxcblxcZlxcZlxcZlxceDBFXFxmXFx1MDE0N1wiK1xuXHRcdFwiXFx2XFxmXFx4MDNcXHJcXHgwM1xcclxceDAzXFxyXFx4MDNcXHgwRVxceDA1XFx4MEVcXHUwMTREXFxuXFx4MEVcXHgwM1xceDBFXFx4MDNcXHgwRVxceDA1XCIrXG5cdFx0XCJcXHgwRVxcdTAxNTFcXG5cXHgwRVxceDAzXFx4MEVcXHgwM1xceDBFXFx4MDVcXHgwRVxcdTAxNTVcXG5cXHgwRVxceDAzXFx4MEVcXHgwM1xceDBFXFx4MDNcIitcblx0XHRcIlxceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTVCXFxuXFx4MEZcXHgwM1xceDBGXFx4MDNcXHgwRlxceDA1XFx4MEZcXHUwMTVGXFxuXFx4MEZcXHgwM1wiK1xuXHRcdFwiXFx4MEZcXHgwNlxceDBGXFx1MDE2MlxcblxceDBGXFxyXFx4MEZcXHgwRVxceDBGXFx1MDE2M1xceDAzXFx4MTBcXHgwM1xceDEwXFx4MDVcXHgxMFxcdTAxNjhcIitcblx0XHRcIlxcblxceDEwXFx4MDNcXHgxMVxceDAzXFx4MTFcXHgwNVxceDExXFx1MDE2Q1xcblxceDExXFx4MDNcXHgxMlxceDAzXFx4MTJcXHgwNVxceDEyXFx1MDE3MFwiK1xuXHRcdFwiXFxuXFx4MTJcXHgwM1xceDEyXFx4MDNcXHgxMlxceDA1XFx4MTJcXHUwMTc0XFxuXFx4MTJcXHgwM1xceDEyXFx4MDNcXHgxMlxceDAzXFx4MTNcXHgwM1wiK1xuXHRcdFwiXFx4MTNcXHgwNVxceDEzXFx1MDE3QVxcblxceDEzXFx4MDNcXHgxM1xceDA1XFx4MTNcXHUwMTdEXFxuXFx4MTNcXHgwM1xceDEzXFx4MDVcXHgxM1xcdTAxODBcIitcblx0XHRcIlxcblxceDEzXFx4MDNcXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXFx1MDE4NFxcblxceDEzXFx4MDNcXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXFx1MDE4OFwiK1xuXHRcdFwiXFxuXFx4MTNcXHgwM1xceDEzXFx4MDNcXHgxM1xceDAzXFx4MTNcXHgwNVxceDEzXFx1MDE4RFxcblxceDEzXFx4MDNcXHgxM1xceDAzXFx4MTNcXHgwNVwiK1xuXHRcdFwiXFx4MTNcXHUwMTkxXFxuXFx4MTNcXHgwM1xceDEzXFx4MDNcXHgxM1xceDA1XFx4MTNcXHUwMTk1XFxuXFx4MTNcXHgwM1xceDE0XFx4MDNcXHgxNFxceDAzXCIrXG5cdFx0XCJcXHgxNFxceDA1XFx4MTRcXHUwMTlBXFxuXFx4MTRcXHgwM1xceDE0XFx4MDdcXHgxNFxcdTAxOURcXG5cXHgxNFxcZlxceDE0XFx4MEVcXHgxNFxcdTAxQTBcIitcblx0XHRcIlxcdlxceDE0XFx4MDNcXHgxNVxceDAzXFx4MTVcXHgwNVxceDE1XFx1MDFBNFxcblxceDE1XFx4MDNcXHgxNVxceDAzXFx4MTVcXHgwNVxceDE1XFx1MDFBOFwiK1xuXHRcdFwiXFxuXFx4MTVcXHgwM1xceDE1XFx4MDVcXHgxNVxcdTAxQUJcXG5cXHgxNVxceDAzXFx4MTZcXHgwM1xceDE2XFx4MDNcXHgxNlxceDA1XFx4MTZcXHUwMUIwXCIrXG5cdFx0XCJcXG5cXHgxNlxceDAzXFx4MTZcXHgwNVxceDE2XFx1MDFCM1xcblxceDE2XFx4MDNcXHgxNlxceDA1XFx4MTZcXHUwMUI2XFxuXFx4MTZcXHgwM1xceDE2XCIrXG5cdFx0XCJcXHgwNVxceDE2XFx1MDFCOVxcblxceDE2XFx4MDNcXHgxNlxceDAzXFx4MTZcXHgwNVxceDE2XFx1MDFCRFxcblxceDE2XFx4MDNcXHgxNlxceDA1XFx4MTZcIitcblx0XHRcIlxcdTAxQzBcXG5cXHgxNlxceDAzXFx4MTZcXHgwNVxceDE2XFx1MDFDM1xcblxceDE2XFx4MDNcXHgxNlxceDA3XFx4MTZcXHUwMUM2XFxuXFx4MTZcXGZcIitcblx0XHRcIlxceDE2XFx4MEVcXHgxNlxcdTAxQzlcXHZcXHgxNlxceDAzXFx4MTZcXHgwNVxceDE2XFx1MDFDQ1xcblxceDE2XFx4MDNcXHgxNlxceDA1XFx4MTZcXHUwMUNGXCIrXG5cdFx0XCJcXG5cXHgxNlxceDAzXFx4MTZcXHgwNVxceDE2XFx1MDFEMlxcblxceDE2XFx4MDNcXHgxNlxceDAzXFx4MTZcXHgwM1xceDE2XFx4MDNcXHgxNlxceDAzXCIrXG5cdFx0XCJcXHgxNlxceDAzXFx4MTZcXHgwM1xceDE2XFx4MDNcXHgxNlxceDAzXFx4MTZcXHgwNVxceDE2XFx1MDFERFxcblxceDE2XFx4MDNcXHgxNlxceDAzXFx4MTZcIitcblx0XHRcIlxceDAzXFx4MTZcXHgwNVxceDE2XFx1MDFFMlxcblxceDE2XFx4MDNcXHgxNlxceDA3XFx4MTZcXHUwMUU1XFxuXFx4MTZcXGZcXHgxNlxceDBFXFx4MTZcIitcblx0XHRcIlxcdTAxRThcXHZcXHgxNlxceDAzXFx4MTdcXHgwM1xceDE3XFx4MDVcXHgxN1xcdTAxRUNcXG5cXHgxN1xceDAzXFx4MTdcXHgwNVxceDE3XFx1MDFFRlwiK1xuXHRcdFwiXFxuXFx4MTdcXHgwM1xceDE3XFx4MDVcXHgxN1xcdTAxRjJcXG5cXHgxN1xceDAzXFx4MTdcXHgwNVxceDE3XFx1MDFGNVxcblxceDE3XFx4MDNcXHgxN1wiK1xuXHRcdFwiXFx4MDVcXHgxN1xcdTAxRjhcXG5cXHgxN1xceDAzXFx4MTdcXHgwNVxceDE3XFx1MDFGQlxcblxceDE3XFx4MDNcXHgxN1xceDA1XFx4MTdcXHUwMUZFXCIrXG5cdFx0XCJcXG5cXHgxN1xceDAzXFx4MTdcXHgwM1xceDE3XFx4MDNcXHgxOFxceDAzXFx4MThcXHgwNVxceDE4XFx1MDIwNFxcblxceDE4XFx4MDNcXHgxOFxceDAzXCIrXG5cdFx0XCJcXHgxOFxceDA1XFx4MThcXHUwMjA4XFxuXFx4MThcXHgwM1xceDE4XFx4MDVcXHgxOFxcdTAyMEJcXG5cXHgxOFxceDAzXFx4MThcXHgwNVxceDE4XFx1MDIwRVwiK1xuXHRcdFwiXFxuXFx4MThcXHgwM1xceDE4XFx4MDdcXHgxOFxcdTAyMTFcXG5cXHgxOFxcZlxceDE4XFx4MEVcXHgxOFxcdTAyMTRcXHZcXHgxOFxceDAzXFx4MTlcXHgwM1wiK1xuXHRcdFwiXFx4MTlcXHgwNVxceDE5XFx1MDIxOFxcblxceDE5XFx4MDNcXHgxOVxceDA1XFx4MTlcXHUwMjFCXFxuXFx4MTlcXHgwM1xceDE5XFx4MDNcXHgxOVxceDA1XCIrXG5cdFx0XCJcXHgxOVxcdTAyMUZcXG5cXHgxOVxceDAzXFx4MTlcXHgwM1xceDE5XFx4MDNcXHgxQVxceDAzXFx4MUFcXHgwM1xceDFBXFx4MDNcXHgxQlxceDAzXFx4MUJcIitcblx0XHRcIlxceDAzXFx4MUJcXHgwNlxceDFCXFx1MDIyOVxcblxceDFCXFxyXFx4MUJcXHgwRVxceDFCXFx1MDIyQVxceDAzXFx4MUJcXHgwM1xceDFCXFx4MDNcXHgxQlwiK1xuXHRcdFwiXFx4MDZcXHgxQlxcdTAyMzBcXG5cXHgxQlxcclxceDFCXFx4MEVcXHgxQlxcdTAyMzFcXHgwNVxceDFCXFx1MDIzNFxcblxceDFCXFx4MDNcXHgxQ1xceDAzXCIrXG5cdFx0XCJcXHgxQ1xceDA1XFx4MUNcXHUwMjM4XFxuXFx4MUNcXHgwM1xceDFEXFx4MDNcXHgxRFxceDAzXFx4MUVcXHgwM1xceDFFXFx4MDNcXHgxRVxceDAzXFx4MUVcIitcblx0XHRcIlxceDAzXFx4MUVcXHgwM1xceDFFXFx4MDNcXHgxRVxceDA1XFx4MUVcXHUwMjQzXFxuXFx4MUVcXHgwM1xceDFFXFx4MDNcXHgxRVxceDA1XFx4MUVcXHUwMjQ3XCIrXG5cdFx0XCJcXG5cXHgxRVxceDAzXFx4MUVcXHgwM1xceDFFXFx4MDVcXHgxRVxcdTAyNEJcXG5cXHgxRVxceDAzXFx4MUVcXHgwM1xceDFFXFx4MDNcXHgxRVxceDA1XCIrXG5cdFx0XCJcXHgxRVxcdTAyNTBcXG5cXHgxRVxceDAzXFx4MUVcXHgwM1xceDFFXFx4MDVcXHgxRVxcdTAyNTRcXG5cXHgxRVxceDAzXFx4MUVcXHgwN1xceDFFXFx1MDI1N1wiK1xuXHRcdFwiXFxuXFx4MUVcXGZcXHgxRVxceDBFXFx4MUVcXHUwMjVBXFx2XFx4MUVcXHgwM1xceDFGXFx4MDNcXHgxRlxceDAzXFx4MUZcXHgwMyBcXHgwMyBcXHgwNVwiK1xuXHRcdFwiIFxcdTAyNjFcXG4gXFx4MDMgXFx4MDUgXFx1MDI2NFxcbiBcXHgwMyBcXHgwNSBcXHUwMjY3XFxuIFxceDAzIFxceDA1IFxcdTAyNkFcXG4gXFx4MDNcIitcblx0XHRcIiBcXHgwMyBcXHgwNSBcXHUwMjZFXFxuIFxceDAzIFxceDA1IFxcdTAyNzFcXG4gXFx4MDMgXFx4MDUgXFx1MDI3NFxcbiBcXHgwMyBcXHgwNyBcXHUwMjc3XCIrXG5cdFx0XCJcXG4gXFxmIFxceDBFIFxcdTAyN0FcXHYgXFx4MDMgXFx4MDUgXFx1MDI3RFxcbiBcXHgwMyBcXHgwNSBcXHUwMjgwXFxuIFxceDAzIFxceDA1IFxcdTAyODNcIitcblx0XHRcIlxcbiBcXHgwMyBcXHgwMyBcXHgwMyFcXHgwMyFcXHgwNSFcXHUwMjg5XFxuIVxceDAzIVxceDA1IVxcdTAyOENcXG4hXFx4MDMhXFx4MDUhXFx1MDI4RlwiK1xuXHRcdFwiXFxuIVxceDAzIVxceDA1IVxcdTAyOTJcXG4hXFx4MDMhXFx4MDUhXFx1MDI5NVxcbiFcXHgwMyFcXHgwNSFcXHUwMjk4XFxuIVxceDAzIVxceDA1XCIrXG5cdFx0XCIhXFx1MDI5QlxcbiFcXHgwMyFcXHgwMyFcXHgwM1xcXCJcXHgwM1xcXCJcXHgwNVxcXCJcXHUwMkExXFxuXFxcIlxceDAzXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAyQTVcIitcblx0XHRcIlxcblxcXCJcXHgwM1xcXCJcXHgwNVxcXCJcXHUwMkE4XFxuXFxcIlxceDAzXFxcIlxceDA1XFxcIlxcdTAyQUJcXG5cXFwiXFx4MDNcXFwiXFx4MDdcXFwiXFx1MDJBRVxcblxcXCJcIitcblx0XHRcIlxcZlxcXCJcXHgwRVxcXCJcXHUwMkIxXFx2XFxcIlxceDAzI1xceDAzI1xceDA1I1xcdTAyQjVcXG4jXFx4MDMjXFx4MDMjXFx4MDUjXFx1MDJCOVxcbiNcXHgwM1wiK1xuXHRcdFwiI1xceDAzI1xceDAzI1xceDAzI1xceDA1I1xcdTAyQkZcXG4jXFx4MDMjXFx4MDMjXFx4MDUjXFx1MDJDM1xcbiNcXHgwMyNcXHgwMyNcXHgwNSNcIitcblx0XHRcIlxcdTAyQzdcXG4jXFx4MDMkXFx4MDMkXFx4MDUkXFx1MDJDQlxcbiRcXHgwMyRcXHgwNSRcXHUwMkNFXFxuJFxceDAzJFxceDA1JFxcdTAyRDFcXG5cIitcblx0XHRcIiRcXHgwMyRcXHgwMyRcXHgwNSRcXHUwMkQ1XFxuJFxceDAzJFxceDAzJFxceDA1JFxcdTAyRDlcXG4kXFx4MDMkXFx4MDMkXFx4MDMkXFx4MDUkXCIrXG5cdFx0XCJcXHUwMkRFXFxuJFxceDAzJFxceDAzJFxceDA1JFxcdTAyRTJcXG4kXFx4MDMkXFx4MDMkXFx4MDUkXFx1MDJFNlxcbiRcXHgwNSRcXHUwMkU4XFxuXCIrXG5cdFx0XCIkXFx4MDMlXFx4MDMlXFx4MDMmXFx4MDMmXFx4MDUmXFx1MDJFRVxcbiZcXHgwMyZcXHgwMyZcXHgwNSZcXHUwMkYyXFxuJlxceDAzJlxceDAzJlwiK1xuXHRcdFwiXFx4MDNcXCdcXHgwM1xcJ1xceDAzKFxceDAzKFxceDA3KFxcdTAyRkFcXG4oXFxmKFxceDBFKFxcdTAyRkRcXHYoXFx4MDMoXFx4MDMoXFx4MDcoXFx1MDMwMVwiK1xuXHRcdFwiXFxuKFxcZihcXHgwRShcXHUwMzA0XFx2KFxceDA1KFxcdTAzMDZcXG4oXFx4MDMpXFx4MDUpXFx1MDMwOVxcbilcXHgwMylcXHgwNilcXHUwMzBDXCIrXG5cdFx0XCJcXG4pXFxyKVxceDBFKVxcdTAzMERcXHgwMylcXHgwMylcXHgwMylcXHgwNylcXHUwMzEzXFxuKVxcZilcXHgwRSlcXHUwMzE2XFx2KVxceDAzKlxceDAzXCIrXG5cdFx0XCIqXFx4MDMqXFx4MDMqXFx4MDMqXFx4MDMqXFx4MDMqXFx4MDMqXFx4MDMqXFx4MDUqXFx1MDMyMVxcbipcXHgwMytcXHgwMytcXHgwNStcXHUwMzI1XCIrXG5cdFx0XCJcXG4rXFx4MDMsXFx4MDMsXFx4MDMsXFx4MDYsXFx1MDMyQVxcbixcXHIsXFx4MEUsXFx1MDMyQlxceDAzLVxceDAzLVxceDAzLVxceDAzLVxceDA1XCIrXG5cdFx0XCItXFx1MDMzMlxcbi1cXHgwMy1cXHgwMy1cXHgwMy5cXHgwMy5cXHgwMy9cXHgwNi9cXHUwMzM5XFxuL1xcci9cXHgwRS9cXHUwMzNBXFx4MDMwXFx4MDNcIitcblx0XHRcIjBcXHgwNzBcXHUwMzNGXFxuMFxcZjBcXHgwRTBcXHUwMzQyXFx2MFxceDAzMFxceDAzMFxceDAzMVxceDAzMVxceDAzMVxceDAzMVxceDA3MVxcdTAzNEFcIitcblx0XHRcIlxcbjFcXGYxXFx4MEUxXFx1MDM0RFxcdjFcXHgwNTFcXHUwMzRGXFxuMVxceDAzMlxceDAzMlxceDAzM1xceDAzM1xceDAzM1xceDAyXFx4MDJcXHgwNVwiK1xuXHRcdFwiXFx4MTYqOjRcXHgwMlxceDAyXFx4MDRcXHgwMlxceDA2XFx4MDJcXGJcXHgwMlxcblxceDAyXFxmXFx4MDJcXHgwRVxceDAyXFx4MTBcXHgwMlxceDEyXCIrXG5cdFx0XCJcXHgwMlxceDE0XFx4MDJcXHgxNlxceDAyXFx4MThcXHgwMlxceDFBXFx4MDJcXHgxQ1xceDAyXFx4MUVcXHgwMiBcXHgwMlxcXCJcXHgwMiRcXHgwMiZcIitcblx0XHRcIlxceDAyKFxceDAyKlxceDAyLFxceDAyLlxceDAyMFxceDAyMlxceDAyNFxceDAyNlxceDAyOFxceDAyOlxceDAyPFxceDAyPlxceDAyQFxceDAyXCIrXG5cdFx0XCJCXFx4MDJEXFx4MDJGXFx4MDJIXFx4MDJKXFx4MDJMXFx4MDJOXFx4MDJQXFx4MDJSXFx4MDJUXFx4MDJWXFx4MDJYXFx4MDJaXFx4MDJcXFxcXFx4MDJcIitcblx0XHRcIl5cXHgwMmBcXHgwMmJcXHgwMmRcXHgwMlxceDAyXFx0XFx4MDNcXHgwMlxcblxcdlxceDAzXFx4MDJcXHgxN1xceDE4XFx4MDRcXHgwMlxceDEwXFx4MTBcIitcblx0XHRcIlxceDE3XFx4MTdcXHgwM1xceDAyXFx4MTBcXHgxMVxceDAzXFx4MDJcXHgwRVxceDBGXFx4MDNcXHgwMlxceDAzXFxiXFx4MDVcXHgwMlxcdFxcZlxceDExXCIrXG5cdFx0XCJcXHgxMVxceDEzXFx4MTNcXHUwM0Q4XFx4MDJtXFx4MDNcXHgwMlxceDAyXFx4MDJcXHgwNHJcXHgwM1xceDAyXFx4MDJcXHgwMlxceDA2d1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXGJ5XFx4MDNcXHgwMlxceDAyXFx4MDJcXG5cXHUwMTBFXFx4MDNcXHgwMlxceDAyXFx4MDJcXGZcXHUwMTEwXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDBFXFx1MDExNlxceDAzXFx4MDJcXHgwMlxceDAyXFx4MTBcXHUwMTE4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHgxMlxcdTAxMjlcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx4MTRcXHUwMTJEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHgxNlxcdTAxMzhcXHgwM1xceDAyXFx4MDJcXHgwMlxceDE4XCIrXG5cdFx0XCJcXHUwMTQ4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHgxQVxcdTAxNENcXHgwM1xceDAyXFx4MDJcXHgwMlxceDFDXFx1MDE1OFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgxRVxcdTAxNjdcXHgwM1xceDAyXFx4MDJcXHgwMiBcXHUwMTZCXFx4MDNcXHgwMlxceDAyXFx4MDJcXFwiXFx1MDE2RFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDIkXFx1MDE5NFxceDAzXFx4MDJcXHgwMlxceDAyJlxcdTAxOTZcXHgwM1xceDAyXFx4MDJcXHgwMihcXHUwMUExXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMipcXHUwMURDXFx4MDNcXHgwMlxceDAyXFx4MDIsXFx1MDFFOVxceDAzXFx4MDJcXHgwMlxceDAyLlxcdTAyMDFcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyMFxcdTAyMTVcXHgwM1xceDAyXFx4MDJcXHgwMjJcXHUwMjIyXFx4MDNcXHgwMlxceDAyXFx4MDI0XFx1MDIzM1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDI2XFx1MDIzN1xceDAzXFx4MDJcXHgwMlxceDAyOFxcdTAyMzlcXHgwM1xceDAyXFx4MDJcXHgwMjpcXHUwMjQyXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMjxcXHUwMjVCXFx4MDNcXHgwMlxceDAyXFx4MDI+XFx1MDI1RVxceDAzXFx4MDJcXHgwMlxceDAyQFxcdTAyODZcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyQlxcdTAyOUVcXHgwM1xceDAyXFx4MDJcXHgwMkRcXHUwMkM2XFx4MDNcXHgwMlxceDAyXFx4MDJGXFx1MDJFN1xceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJIXFx1MDJFOVxceDAzXFx4MDJcXHgwMlxceDAySlxcdTAyRUJcXHgwM1xceDAyXFx4MDJcXHgwMkxcXHUwMkY1XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMk5cXHUwMzA1XFx4MDNcXHgwMlxceDAyXFx4MDJQXFx1MDMwOFxceDAzXFx4MDJcXHgwMlxceDAyUlxcdTAzMjBcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyVFxcdTAzMjRcXHgwM1xceDAyXFx4MDJcXHgwMlZcXHUwMzI5XFx4MDNcXHgwMlxceDAyXFx4MDJYXFx1MDMyRFxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJaXFx1MDMzNVxceDAzXFx4MDJcXHgwMlxceDAyXFxcXFxcdTAzMzhcXHgwM1xceDAyXFx4MDJcXHgwMl5cXHUwMzNDXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMmBcXHUwMzRFXFx4MDNcXHgwMlxceDAyXFx4MDJiXFx1MDM1MFxceDAzXFx4MDJcXHgwMlxceDAyZFxcdTAzNTJcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyZm5cXHgwN1xceDAyXFx4MDJcXHgwM2dpXFx4MDVcXHgwNFxceDAzXFx4MDJoalxceDA3XFxuXFx4MDJcXHgwMmloXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMmlqXFx4MDNcXHgwMlxceDAyXFx4MDJqa1xceDAzXFx4MDJcXHgwMlxceDAya2xcXHgwN1xceDAyXFx4MDJcXHgwM2xuXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMm1mXFx4MDNcXHgwMlxceDAyXFx4MDJtZ1xceDAzXFx4MDJcXHgwMlxceDAyblxceDAzXFx4MDNcXHgwMlxceDAyXFx4MDJvcVxceDA1XCIrXG5cdFx0XCJcXHgwNlxceDA0XFx4MDJwb1xceDAzXFx4MDJcXHgwMlxceDAycXRcXHgwM1xceDAyXFx4MDJcXHgwMnJwXFx4MDNcXHgwMlxceDAyXFx4MDJyc1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJzdVxceDAzXFx4MDJcXHgwMlxceDAydHJcXHgwM1xceDAyXFx4MDJcXHgwMnV2XFx4MDVcXGJcXHgwNVxceDAydlxceDA1XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMnd4XFx0XFx4MDJcXHgwMlxceDAyeFxceDA3XFx4MDNcXHgwMlxceDAyXFx4MDJ5flxceDA1XFxuXFx4MDZcXHgwMlwiK1xuXHRcdFwientcXHgwN1xcblxceDAyXFx4MDJ7fVxceDA1XFxuXFx4MDZcXHgwMnx6XFx4MDNcXHgwMlxceDAyXFx4MDJ9XFx4ODBcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwifnxcXHgwM1xceDAyXFx4MDJcXHgwMn5cXHg3RlxceDAzXFx4MDJcXHgwMlxceDAyXFx4N0ZcXHRcXHgwM1xceDAyXFx4MDJcXHgwMlxceDgwflxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHg4MVxcdTAxMEZcXHgwNVxcZlxceDA3XFx4MDJcXHg4MlxceDgzXFx4MDVcXGZcXHgwN1xceDAyXFx4ODNcXHg4NFxceDA3XCIrXG5cdFx0XCJcXHZcXHgwMlxceDAyXFx4ODRcXHg4NVxceDA3XFx4MEZcXHgwMlxceDAyXFx4ODVcXHg4NlxceDA3XFx2XFx4MDJcXHgwMlxceDg2XFx4ODdcXHgwNUxcIitcblx0XHRcIlxcJ1xceDAyXFx4ODdcXHUwMTBGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg4OFxceDg5XFx4MDVcXGZcXHgwN1xceDAyXFx4ODlcXHg4QVxceDA3XFx2XFx4MDJcIitcblx0XHRcIlxceDAyXFx4OEFcXHg4QlxceDA1XFx4MEVcXGJcXHgwMlxceDhCXFx1MDEwRlxceDAzXFx4MDJcXHgwMlxceDAyXFx4OENcXHg4RFxceDA1XFxmXFx4MDdcIitcblx0XHRcIlxceDAyXFx4OERcXHg4RVxceDA3XFx2XFx4MDJcXHgwMlxceDhFXFx4OTBcXHgwNVxceDBFXFxiXFx4MDJcXHg4RlxceDkxXFx4MDdcXHZcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHg5MFxceDhGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg5MFxceDkxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHg5MVxceDkyXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceDkyXFx4OTRcXHgwN1xceDE1XFx4MDJcXHgwMlxceDkzXFx4OTVcXHgwN1xcdlxceDAyXFx4MDJcXHg5NFxceDkzXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceDk0XFx4OTVcXHgwM1xceDAyXFx4MDJcXHgwMlxceDk1XFx4OTZcXHgwM1xceDAyXFx4MDJcXHgwMlxceDk2XFx4OTdcXHgwNThcXHgxRFxceDAyXCIrXG5cdFx0XCJcXHg5N1xcdTAxMEZcXHgwM1xceDAyXFx4MDJcXHgwMlxceDk4XFx4OTlcXHgwNVxcZlxceDA3XFx4MDJcXHg5OVxceDlBXFx4MDdcXHZcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHg5QVxceDlCXFx4MDVcXHgwRVxcYlxceDAyXFx4OUJcXHg5Q1xceDA3XFx2XFx4MDJcXHgwMlxceDlDXFx4OURcXHgwN1xceDBGXFx4MDJcXHgwMlxceDlEXCIrXG5cdFx0XCJcXHg5RVxceDA3XFx2XFx4MDJcXHgwMlxceDlFXFx4OUZcXHgwNUxcXCdcXHgwMlxceDlGXFx1MDEwRlxceDAzXFx4MDJcXHgwMlxceDAyXFx4QTBcXHhBMVwiK1xuXHRcdFwiXFx4MDVcXGZcXHgwN1xceDAyXFx4QTFcXHhBMlxceDA3XFx2XFx4MDJcXHgwMlxceEEyXFx4QTNcXHgwNVxceDBFXFxiXFx4MDJcXHhBM1xceEE0XFx4MDdcIitcblx0XHRcIlxcdlxceDAyXFx4MDJcXHhBNFxceEE2XFx4MDdcXHgxNVxceDAyXFx4MDJcXHhBNVxceEE3XFx4MDdcXHZcXHgwMlxceDAyXFx4QTZcXHhBNVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHhBNlxceEE3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhBN1xceEE4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhBOFxceEE5XFx4MDU4XCIrXG5cdFx0XCJcXHgxRFxceDAyXFx4QTlcXHhBQVxceDA3XFx2XFx4MDJcXHgwMlxceEFBXFx4QUJcXHgwN1xceDBGXFx4MDJcXHgwMlxceEFCXFx4QUNcXHgwN1xcdlxceDAyXCIrXG5cdFx0XCJcXHgwMlxceEFDXFx4QURcXHgwNUxcXCdcXHgwMlxceEFEXFx1MDEwRlxceDAzXFx4MDJcXHgwMlxceDAyXFx4QUVcXHhBRlxceDA1XFxmXFx4MDdcXHgwMlwiK1xuXHRcdFwiXFx4QUZcXHhCMFxceDA3XFx2XFx4MDJcXHgwMlxceEIwXFx4QjJcXHgwNVxceDBFXFxiXFx4MDJcXHhCMVxceEIzXFx4MDdcXHZcXHgwMlxceDAyXFx4QjJcIitcblx0XHRcIlxceEIxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCMlxceEIzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCM1xceEI0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCNFwiK1xuXHRcdFwiXFx4QjZcXHgwN1xceDEyXFx4MDJcXHgwMlxceEI1XFx4QjdcXHgwN1xcdlxceDAyXFx4MDJcXHhCNlxceEI1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCNlwiK1xuXHRcdFwiXFx4QjdcXHgwM1xceDAyXFx4MDJcXHgwMlxceEI3XFx4QjhcXHgwM1xceDAyXFx4MDJcXHgwMlxceEI4XFx4QjlcXHgwNVxceDE2XFxmXFx4MDJcXHhCOVwiK1xuXHRcdFwiXFx1MDEwRlxceDAzXFx4MDJcXHgwMlxceDAyXFx4QkFcXHhCQlxceDA1XFxmXFx4MDdcXHgwMlxceEJCXFx4QkNcXHgwN1xcdlxceDAyXFx4MDJcXHhCQ1wiK1xuXHRcdFwiXFx4QkVcXHgwNVxceDBFXFxiXFx4MDJcXHhCRFxceEJGXFx4MDdcXHZcXHgwMlxceDAyXFx4QkVcXHhCRFxceDAzXFx4MDJcXHgwMlxceDAyXFx4QkVcXHhCRlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhCRlxceEMwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhDMFxceEMyXFx4MDdcXHgxMlxceDAyXFx4MDJcXHhDMVxceEMzXCIrXG5cdFx0XCJcXHgwN1xcdlxceDAyXFx4MDJcXHhDMlxceEMxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhDMlxceEMzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhDM1xceEM0XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxceEM0XFx4QzZcXHgwNVxceDE2XFxmXFx4MDJcXHhDNVxceEM3XFx4MDdcXHZcXHgwMlxceDAyXFx4QzZcXHhDNVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHhDNlxceEM3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhDN1xceEM4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhDOFxceENBXFx4MDdcIitcblx0XHRcIlxceDE1XFx4MDJcXHgwMlxceEM5XFx4Q0JcXHgwN1xcdlxceDAyXFx4MDJcXHhDQVxceEM5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhDQVxceENCXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxceENCXFx4Q0NcXHgwM1xceDAyXFx4MDJcXHgwMlxceENDXFx4Q0RcXHgwNThcXHgxRFxceDAyXFx4Q0RcXHUwMTBGXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxceENFXFx4Q0ZcXHgwNVxcZlxceDA3XFx4MDJcXHhDRlxceEQwXFx4MDdcXHZcXHgwMlxceDAyXFx4RDBcXHhEMlxceDA1XFx4MEVcIitcblx0XHRcIlxcYlxceDAyXFx4RDFcXHhEM1xceDA3XFx2XFx4MDJcXHgwMlxceEQyXFx4RDFcXHgwM1xceDAyXFx4MDJcXHgwMlxceEQyXFx4RDNcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx4RDNcXHhENFxceDAzXFx4MDJcXHgwMlxceDAyXFx4RDRcXHhENlxceDA3XFx4MTJcXHgwMlxceDAyXFx4RDVcXHhEN1xceDA3XFx2XFx4MDJcIitcblx0XHRcIlxceDAyXFx4RDZcXHhENVxceDAzXFx4MDJcXHgwMlxceDAyXFx4RDZcXHhEN1xceDAzXFx4MDJcXHgwMlxceDAyXFx4RDdcXHhEOFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHhEOFxceEQ5XFx4MDVcXHgxNlxcZlxceDAyXFx4RDlcXHhEQVxceDA3XFx2XFx4MDJcXHgwMlxceERBXFx4REJcXHgwN1xceDBGXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4REJcXHhEQ1xceDA3XFx2XFx4MDJcXHgwMlxceERDXFx4RERcXHgwNUxcXCdcXHgwMlxceEREXFx1MDEwRlxceDAzXFx4MDJcXHgwMlxceDAyXFx4REVcIitcblx0XHRcIlxceERGXFx4MDVcXGZcXHgwN1xceDAyXFx4REZcXHhFMFxceDA3XFx2XFx4MDJcXHgwMlxceEUwXFx4RTJcXHgwNVxceDBFXFxiXFx4MDJcXHhFMVxceEUzXCIrXG5cdFx0XCJcXHgwN1xcdlxceDAyXFx4MDJcXHhFMlxceEUxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFMlxceEUzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFM1xceEU0XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxceEU0XFx4RTZcXHgwN1xceDEyXFx4MDJcXHgwMlxceEU1XFx4RTdcXHgwN1xcdlxceDAyXFx4MDJcXHhFNlxceEU1XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxceEU2XFx4RTdcXHgwM1xceDAyXFx4MDJcXHgwMlxceEU3XFx4RThcXHgwM1xceDAyXFx4MDJcXHgwMlxceEU4XFx4RUFcIitcblx0XHRcIlxceDA1XFx4MTZcXGZcXHgwMlxceEU5XFx4RUJcXHgwN1xcdlxceDAyXFx4MDJcXHhFQVxceEU5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhFQVxceEVCXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxceEVCXFx4RUNcXHgwM1xceDAyXFx4MDJcXHgwMlxceEVDXFx4RUVcXHgwN1xceDE1XFx4MDJcXHgwMlxceEVEXFx4RUZcXHgwN1wiK1xuXHRcdFwiXFx2XFx4MDJcXHgwMlxceEVFXFx4RURcXHgwM1xceDAyXFx4MDJcXHgwMlxceEVFXFx4RUZcXHgwM1xceDAyXFx4MDJcXHgwMlxceEVGXFx4RjBcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx4RjBcXHhGMVxceDA1OFxceDFEXFx4MDJcXHhGMVxceEYyXFx4MDdcXHZcXHgwMlxceDAyXFx4RjJcXHhGM1xceDA3XFx4MEZcIitcblx0XHRcIlxceDAyXFx4MDJcXHhGM1xceEY0XFx4MDdcXHZcXHgwMlxceDAyXFx4RjRcXHhGNVxceDA1TFxcJ1xceDAyXFx4RjVcXHUwMTBGXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxceEY2XFx4RjhcXHgwNVxcZlxceDA3XFx4MDJcXHhGN1xceEY5XFx4MDdcXHZcXHgwMlxceDAyXFx4RjhcXHhGN1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHhGOFxceEY5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHhGOVxceEZBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhGQVxceEZDXFx4MDdcXHgxMlxceDAyXFx4MDJcIitcblx0XHRcIlxceEZCXFx4RkRcXHgwN1xcdlxceDAyXFx4MDJcXHhGQ1xceEZCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHhGQ1xceEZEXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxceEZEXFx4RkVcXHgwM1xceDAyXFx4MDJcXHgwMlxceEZFXFx4RkZcXHgwNVxceDE2XFxmXFx4MDJcXHhGRlxcdTAxMEZcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDEwMFxcdTAxMDJcXHgwNVxcZlxceDA3XFx4MDJcXHUwMTAxXFx1MDEwM1xceDA3XFx2XFx4MDJcXHgwMlxcdTAxMDJcXHUwMTAxXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxMDJcXHUwMTAzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTAzXFx1MDEwNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwNFwiK1xuXHRcdFwiXFx1MDEwNlxceDA3XFx4MTJcXHgwMlxceDAyXFx1MDEwNVxcdTAxMDdcXHgwN1xcdlxceDAyXFx4MDJcXHUwMTA2XFx1MDEwNVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTA2XFx1MDEwN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwN1xcdTAxMDhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMDhcXHUwMTA5XCIrXG5cdFx0XCJcXHgwNVxceDE2XFxmXFx4MDJcXHUwMTA5XFx1MDEwQVxceDA3XFx2XFx4MDJcXHgwMlxcdTAxMEFcXHUwMTBCXFx4MDdcXHgwRlxceDAyXFx4MDJcXHUwMTBCXCIrXG5cdFx0XCJcXHUwMTBDXFx4MDdcXHZcXHgwMlxceDAyXFx1MDEwQ1xcdTAxMERcXHgwNUxcXCdcXHgwMlxcdTAxMERcXHUwMTBGXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxMEVcXHg4MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwRVxceDgyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTBFXFx4ODhcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDEwRVxceDhDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTBFXFx4OThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMEVcXHhBMFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTBFXFx4QUVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMEVcXHhCQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwRVwiK1xuXHRcdFwiXFx4Q0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMEVcXHhERVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEwRVxceEY2XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxMEVcXHUwMTAwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTBGXFx2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTEwXFx1MDExMVxceDA3XFxyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDExMVxcdTAxMTJcXHgwNWQzXFx4MDJcXHUwMTEyXFxyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTEzXFx1MDExN1xceDA1XCIrXG5cdFx0XCJcXHgxMlxcblxceDAyXFx1MDExNFxcdTAxMTdcXHgwNVxceDEwXFx0XFx4MDJcXHUwMTE1XFx1MDExN1xceDA1ZDNcXHgwMlxcdTAxMTZcXHUwMTEzXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMTZcXHUwMTE0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTE2XFx1MDExNVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTE3XFx4MEZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMThcXHUwMTE5XFx4MDVkM1xceDAyXFx1MDExOVxcdTAxMUFcXHgwN1xceDE2XFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDExQVxceDExXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTFCXFx1MDExRVxceDA1XFx4MTBcXHRcXHgwMlxcdTAxMUNcXHUwMTFEXFx4MDdcIitcblx0XHRcIlxceDEzXFx4MDJcXHgwMlxcdTAxMURcXHUwMTFGXFx4MDVcXHgxNFxcdlxceDAyXFx1MDExRVxcdTAxMUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMUZcIitcblx0XHRcIlxcdTAxMjBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjBcXHUwMTFFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTIwXFx1MDEyMVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMTIxXFx1MDEyQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyMlxcdTAxMjVcXHgwNWQzXFx4MDJcXHUwMTIzXFx1MDEyNFwiK1xuXHRcdFwiXFx4MDdcXHgxM1xceDAyXFx4MDJcXHUwMTI0XFx1MDEyNlxceDA1XFx4MTRcXHZcXHgwMlxcdTAxMjVcXHUwMTIzXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxMjZcXHUwMTI3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTI3XFx1MDEyNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEyN1xcdTAxMjhcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDEyOFxcdTAxMkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMjlcXHUwMTFCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTI5XCIrXG5cdFx0XCJcXHUwMTIyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTJBXFx4MTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMkJcXHUwMTJFXFx4MDVcXHgxMFxcdFwiK1xuXHRcdFwiXFx4MDJcXHUwMTJDXFx1MDEyRVxceDA1ZDNcXHgwMlxcdTAxMkRcXHUwMTJCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTJEXFx1MDEyQ1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTJFXFx4MTVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMkZcXHUwMTMwXFxiXFxmXFx4MDFcXHgwMlxcdTAxMzBcXHUwMTM5XCIrXG5cdFx0XCJcXHgwNSRcXHgxM1xceDAyXFx1MDEzMVxcdTAxMzlcXHgwNVxceDFBXFx4MEVcXHgwMlxcdTAxMzJcXHUwMTM5XFx4MDVcXHgxRVxceDEwXFx4MDJcIitcblx0XHRcIlxcdTAxMzNcXHUwMTM5XFx4MDVcXFwiXFx4MTJcXHgwMlxcdTAxMzRcXHUwMTM5XFx4MDVcXHgxOFxcclxceDAyXFx1MDEzNVxcdTAxMzlcXHgwNSxcIitcblx0XHRcIlxceDE3XFx4MDJcXHUwMTM2XFx1MDEzOVxceDA1KlxceDE2XFx4MDJcXHUwMTM3XFx1MDEzOVxceDA1NFxceDFCXFx4MDJcXHUwMTM4XFx1MDEyRlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTM4XFx1MDEzMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzOFxcdTAxMzJcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDEzOFxcdTAxMzNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMzhcXHUwMTM0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTM4XFx1MDEzNVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTM4XFx1MDEzNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzOFxcdTAxMzdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxMzlcIitcblx0XHRcIlxcdTAxNDVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxM0FcXHUwMTNDXFxmXFx2XFx4MDJcXHgwMlxcdTAxM0JcXHUwMTNEXFx4MDdcXHZcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTNDXFx1MDEzQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDEzQ1xcdTAxM0RcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxM0RcXHUwMTNFXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxM0VcXHUwMTQwXFx0XFx4MDNcXHgwMlxceDAyXFx1MDEzRlxcdTAxNDFcXHgwN1xcdlxceDAyXFx4MDJcXHUwMTQwXCIrXG5cdFx0XCJcXHUwMTNGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTQwXFx1MDE0MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0MVxcdTAxNDJcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDE0MlxcdTAxNDRcXHgwNVxceDE2XFxmXFxmXFx1MDE0M1xcdTAxM0FcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNDRcXHUwMTQ3XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNDVcXHUwMTQzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTQ1XFx1MDE0NlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTQ2XFx4MTdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNDdcXHUwMTQ1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTQ4XFx1MDE0OVxcdFxceDA0XCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDE0OVxcdTAxNEFcXHgwNVxceDFFXFx4MTBcXHgwMlxcdTAxNEFcXHgxOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0QlxcdTAxNERcIitcblx0XHRcIlxceDA1ZDNcXHgwMlxcdTAxNENcXHUwMTRCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTRDXFx1MDE0RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0RFwiK1xuXHRcdFwiXFx1MDE0RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE0RVxcdTAxNTBcXHgwN1xcXCJcXHgwMlxceDAyXFx1MDE0RlxcdTAxNTFcXHgwN1xcdlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxNTBcXHUwMTRGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTUwXFx1MDE1MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1MVxcdTAxNTJcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1MlxcdTAxNTRcXHgwNVxceDFDXFx4MEZcXHgwMlxcdTAxNTNcXHUwMTU1XFx4MDdcXHZcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTU0XFx1MDE1M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1NFxcdTAxNTVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNTVcXHUwMTU2XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxNTZcXHUwMTU3XFx4MDcjXFx4MDJcXHgwMlxcdTAxNTdcXHgxQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE1OFwiK1xuXHRcdFwiXFx1MDE1QVxceDA1XFx4MTZcXGZcXHgwMlxcdTAxNTlcXHUwMTVCXFx4MDdcXHZcXHgwMlxceDAyXFx1MDE1QVxcdTAxNTlcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDE1QVxcdTAxNUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNUJcXHUwMTYxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTVDXFx1MDE1RVwiK1xuXHRcdFwiXFx4MDdcXHgxNFxceDAyXFx4MDJcXHUwMTVEXFx1MDE1RlxceDA3XFx2XFx4MDJcXHgwMlxcdTAxNUVcXHUwMTVEXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxNUVcXHUwMTVGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTVGXFx1MDE2MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2MFxcdTAxNjJcXHgwNVwiK1xuXHRcdFwiXFx4MTZcXGZcXHgwMlxcdTAxNjFcXHUwMTVDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTYyXFx1MDE2M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2M1wiK1xuXHRcdFwiXFx1MDE2MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2M1xcdTAxNjRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNjRcXHgxRFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTY1XFx1MDE2OFxceDA1MlxceDFBXFx4MDJcXHUwMTY2XFx1MDE2OFxceDA1IFxceDExXFx4MDJcXHUwMTY3XFx1MDE2NVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTY3XFx1MDE2NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2OFxceDFGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTY5XCIrXG5cdFx0XCJcXHUwMTZDXFx4MDVkM1xceDAyXFx1MDE2QVxcdTAxNkNcXHgwN1xcYlxceDAyXFx4MDJcXHUwMTZCXFx1MDE2OVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMTZCXFx1MDE2QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE2QyFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNkRcXHUwMTZGXFx4MDdcXHgxRVwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxNkVcXHUwMTcwXFx4MDdcXHZcXHgwMlxceDAyXFx1MDE2RlxcdTAxNkVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNkZcXHUwMTcwXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNzBcXHUwMTcxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTcxXFx1MDE3M1xceDA1XFx4MTZcXGZcXHgwMlwiK1xuXHRcdFwiXFx1MDE3MlxcdTAxNzRcXHgwN1xcdlxceDAyXFx4MDJcXHUwMTczXFx1MDE3MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3M1xcdTAxNzRcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDE3NFxcdTAxNzVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxNzVcXHUwMTc2XFx4MDdcXHgxRlxceDAyXFx4MDJcXHUwMTc2XCIrXG5cdFx0XCIjXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTc3XFx1MDE3OVxceDA3XFx4MUVcXHgwMlxceDAyXFx1MDE3OFxcdTAxN0FcXHgwN1xcdlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxNzlcXHUwMTc4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTc5XFx1MDE3QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE3QVxcdTAxN0NcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDE3QlxcdTAxN0RcXHgwNSZcXHgxNFxceDAyXFx1MDE3Q1xcdTAxN0JcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxN0NcIitcblx0XHRcIlxcdTAxN0RcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxN0RcXHUwMTdGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTdFXFx1MDE4MFxceDA3XFx2XFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDE3RlxcdTAxN0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxN0ZcXHUwMTgwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTgwXFx1MDE4MVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTgxXFx1MDE4M1xceDA3XFx4MUZcXHgwMlxceDAyXFx1MDE4MlxcdTAxODRcXHgwN1xcdlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxODNcXHUwMTgyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTgzXFx1MDE4NFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4NFxcdTAxODVcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDE4NVxcdTAxODdcXHgwN1xceDE5XFx4MDJcXHgwMlxcdTAxODZcXHUwMTg4XFx4MDdcXHZcXHgwMlxceDAyXFx1MDE4N1wiK1xuXHRcdFwiXFx1MDE4NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4N1xcdTAxODhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxODhcXHUwMTg5XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxODlcXHUwMTk1XFx4MDVcXHgxNlxcZlxceDAyXFx1MDE4QVxcdTAxOENcXHgwNShcXHgxNVxceDAyXFx1MDE4QlxcdTAxOERcIitcblx0XHRcIlxceDA3XFx2XFx4MDJcXHgwMlxcdTAxOENcXHUwMThCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMThDXFx1MDE4RFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMThEXFx1MDE4RVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE4RVxcdTAxOTBcXHgwN1xceDE5XFx4MDJcXHgwMlxcdTAxOEZcXHUwMTkxXFx4MDdcIitcblx0XHRcIlxcdlxceDAyXFx4MDJcXHUwMTkwXFx1MDE4RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5MFxcdTAxOTFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOTFcIitcblx0XHRcIlxcdTAxOTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOTJcXHUwMTkzXFx4MDVcXHgxNlxcZlxceDAyXFx1MDE5M1xcdTAxOTVcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDE5NFxcdTAxNzdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOTRcXHUwMThBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTk1JVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMTk2XFx1MDE5RVxceDA1KFxceDE1XFx4MDJcXHUwMTk3XFx1MDE5OVxceDA3XFx4MTRcXHgwMlxceDAyXFx1MDE5OFwiK1xuXHRcdFwiXFx1MDE5QVxceDA3XFx2XFx4MDJcXHgwMlxcdTAxOTlcXHUwMTk4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTk5XFx1MDE5QVxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMTlBXFx1MDE5QlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5QlxcdTAxOURcXHgwNShcXHgxNVxceDAyXFx1MDE5Q1xcdTAxOTdcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDE5RFxcdTAxQTBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxOUVcXHUwMTlDXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxOUVcXHUwMTlGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMTlGXFwnXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUEwXFx1MDE5RVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMUExXFx1MDFBQVxceDA1ZDNcXHgwMlxcdTAxQTJcXHUwMUE0XFx4MDdcXHZcXHgwMlxceDAyXFx1MDFBM1xcdTAxQTJcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDFBM1xcdTAxQTRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQTRcXHUwMUE1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUE1XCIrXG5cdFx0XCJcXHUwMUE3XFx4MDdcXHgxMlxceDAyXFx4MDJcXHUwMUE2XFx1MDFBOFxceDA3XFx2XFx4MDJcXHgwMlxcdTAxQTdcXHUwMUE2XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxQTdcXHUwMUE4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUE4XFx1MDFBOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBOVxcdTAxQUJcIitcblx0XHRcIlxceDA1XFx4MTZcXGZcXHgwMlxcdTAxQUFcXHUwMUEzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUFBXFx1MDFBQlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUFCKVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFBQ1xcdTAxQURcXGJcXHgxNlxceDAxXFx4MDJcXHUwMUFEXFx1MDFBRlxceDA3IFxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxQUVcXHUwMUIwXFx4MDdcXG5cXHgwMlxceDAyXFx1MDFBRlxcdTAxQUVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQUZcXHUwMUIwXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjBcXHUwMUIyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUIxXFx1MDFCM1xceDA3XFx2XFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDFCMlxcdTAxQjFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQjJcXHUwMUIzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUIzXFx1MDFCNVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMUI0XFx1MDFCNlxceDA3XFxuXFx4MDJcXHgwMlxcdTAxQjVcXHUwMUI0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUI1XCIrXG5cdFx0XCJcXHUwMUI2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUI2XFx1MDFCOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCN1xcdTAxQjlcXHgwNVxceDE2XCIrXG5cdFx0XCJcXGZcXHgwMlxcdTAxQjhcXHUwMUI3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUI4XFx1MDFCOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCOVxcdTAxQzdcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCQVxcdTAxQkNcXHgwN1xceDE0XFx4MDJcXHgwMlxcdTAxQkJcXHUwMUJEXFx4MDdcXG5cXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUJDXFx1MDFCQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFCQ1xcdTAxQkRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQkRcXHUwMUJGXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAxQkVcXHUwMUMwXFx4MDdcXHZcXHgwMlxceDAyXFx1MDFCRlxcdTAxQkVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQkZcIitcblx0XHRcIlxcdTAxQzBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQzBcXHUwMUMyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUMxXFx1MDFDM1xceDA3XFxuXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFDMlxcdTAxQzFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQzJcXHUwMUMzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUMzXFx1MDFDNFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUM0XFx1MDFDNlxceDA1XFx4MTZcXGZcXHgwMlxcdTAxQzVcXHUwMUJBXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAxQzZcXHUwMUM5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUM3XFx1MDFDNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFDN1xcdTAxQzhcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDFDOFxcdTAxQ0JcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQzlcXHUwMUM3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUNBXCIrXG5cdFx0XCJcXHUwMUNDXFx4MDdcXG5cXHgwMlxceDAyXFx1MDFDQlxcdTAxQ0FcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQ0JcXHUwMUNDXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxQ0NcXHUwMUNFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUNEXFx1MDFDRlxceDA3XFx2XFx4MDJcXHgwMlxcdTAxQ0VcXHUwMUNEXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxQ0VcXHUwMUNGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUNGXFx1MDFEMVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUQwXCI7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9zZXJpYWxpemVkQVROU2VnbWVudDE6IHN0cmluZyA9XG5cdFx0XCJcXHUwMUQyXFx4MDdcXG5cXHgwMlxceDAyXFx1MDFEMVxcdTAxRDBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRDFcXHUwMUQyXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxRDJcXHUwMUQzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUQzXFx1MDFERFxceDA3IVxceDAyXFx4MDJcXHUwMUQ0XFx1MDFENVwiK1xuXHRcdFwiXFx4MDVkM1xceDAyXFx1MDFENVxcdTAxRDZcXHgwNyBcXHgwMlxceDAyXFx1MDFENlxcdTAxRDdcXHgwNyFcXHgwMlxceDAyXFx1MDFEN1xcdTAxRERcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFEOFxcdTAxRDlcXHgwNSxcXHgxN1xceDAyXFx1MDFEOVxcdTAxREFcXHgwNyBcXHgwMlxceDAyXFx1MDFEQVwiK1xuXHRcdFwiXFx1MDFEQlxceDA3IVxceDAyXFx4MDJcXHUwMURCXFx1MDFERFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFEQ1xcdTAxQUNcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFEQ1xcdTAxRDRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRENcXHUwMUQ4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUREXFx1MDFFNlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMURFXFx1MDFERlxcZlxceDAzXFx4MDJcXHgwMlxcdTAxREZcXHUwMUUxXFx4MDcgXFx4MDJcXHgwMlxcdTAxRTBcIitcblx0XHRcIlxcdTAxRTJcXHgwNVxceDE2XFxmXFx4MDJcXHUwMUUxXFx1MDFFMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFMVxcdTAxRTJcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDFFMlxcdTAxRTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRTNcXHUwMUU1XFx4MDchXFx4MDJcXHgwMlxcdTAxRTRcXHUwMURFXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRTVcXHUwMUU4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUU2XFx1MDFFNFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUU2XFx1MDFFN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFFNytcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRThcXHUwMUU2XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAxRTlcXHUwMUVCXFx4MDdcXHgxQ1xceDAyXFx4MDJcXHUwMUVBXFx1MDFFQ1xceDA3XFx2XFx4MDJcXHgwMlxcdTAxRUJcXHUwMUVBXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRUJcXHUwMUVDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUVDXFx1MDFFRVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMUVEXFx1MDFFRlxceDA3XFxuXFx4MDJcXHgwMlxcdTAxRUVcXHUwMUVEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUVFXFx1MDFFRlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMUVGXFx1MDFGMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGMFxcdTAxRjJcXHgwN1xcdlxceDAyXFx4MDJcXHUwMUYxXCIrXG5cdFx0XCJcXHUwMUYwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUYxXFx1MDFGMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGMlxcdTAxRjRcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDFGM1xcdTAxRjVcXHgwNS5cXHgxOFxceDAyXFx1MDFGNFxcdTAxRjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRjRcXHUwMUY1XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRjVcXHUwMUY3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUY2XFx1MDFGOFxceDA3XFx2XFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDFGN1xcdTAxRjZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAxRjdcXHUwMUY4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUY4XFx1MDFGQVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMUY5XFx1MDFGQlxceDA3XFxuXFx4MDJcXHgwMlxcdTAxRkFcXHUwMUY5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUZBXCIrXG5cdFx0XCJcXHUwMUZCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUZCXFx1MDFGRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGQ1xcdTAxRkVcXHgwN1xcdlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAxRkRcXHUwMUZDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMUZEXFx1MDFGRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGRVxcdTAxRkZcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDFGRlxcdTAyMDBcXHgwN1xceDFEXFx4MDJcXHgwMlxcdTAyMDAtXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjAxXCIrXG5cdFx0XCJcXHUwMjAzXFx4MDUwXFx4MTlcXHgwMlxcdTAyMDJcXHUwMjA0XFx4MDdcXHZcXHgwMlxceDAyXFx1MDIwM1xcdTAyMDJcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDIwM1xcdTAyMDRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMDRcXHUwMjEyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjA1XFx1MDIwN1wiK1xuXHRcdFwiXFx4MDdcXHgxNFxceDAyXFx4MDJcXHUwMjA2XFx1MDIwOFxceDA3XFx2XFx4MDJcXHgwMlxcdTAyMDdcXHUwMjA2XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyMDdcXHUwMjA4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjA4XFx1MDIwQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwOVxcdTAyMEJcXHgwN1wiK1xuXHRcdFwiXFxuXFx4MDJcXHgwMlxcdTAyMEFcXHUwMjA5XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjBBXFx1MDIwQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwQlwiK1xuXHRcdFwiXFx1MDIwRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwQ1xcdTAyMEVcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjBEXFx1MDIwQ1xceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMjBEXFx1MDIwRVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIwRVxcdTAyMEZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMEZcXHUwMjExXCIrXG5cdFx0XCJcXHgwNTBcXHgxOVxceDAyXFx1MDIxMFxcdTAyMDVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTFcXHUwMjE0XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyMTJcXHUwMjEwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjEyXFx1MDIxM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxMy9cXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDIxNFxcdTAyMTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTVcXHUwMjE3XFx4MDVcXHgxNlxcZlxceDAyXFx1MDIxNlxcdTAyMThcIitcblx0XHRcIlxceDA3XFx4MTZcXHgwMlxceDAyXFx1MDIxN1xcdTAyMTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMTdcXHUwMjE4XFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyMThcXHUwMjFBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjE5XFx1MDIxQlxceDA3XFx2XFx4MDJcXHgwMlxcdTAyMUFcXHUwMjE5XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyMUFcXHUwMjFCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjFCXFx1MDIxQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxQ1wiK1xuXHRcdFwiXFx1MDIxRVxceDA3XFx4MTJcXHgwMlxceDAyXFx1MDIxRFxcdTAyMUZcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjFFXFx1MDIxRFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMjFFXFx1MDIxRlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIxRlxcdTAyMjBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMjBcXHUwMjIxXCIrXG5cdFx0XCJcXHgwNVxceDE2XFxmXFx4MDJcXHUwMjIxMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyMlxcdTAyMjNcXHgwNWQzXFx4MDJcXHUwMjIzXFx1MDIyNFwiK1xuXHRcdFwiXFx4MDdcXHgxNlxceDAyXFx4MDJcXHUwMjI0M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyNVxcdTAyMjhcXHgwNWQzXFx4MDJcXHUwMjI2XFx1MDIyN1wiK1xuXHRcdFwiXFx4MDdcXHgxM1xceDAyXFx4MDJcXHUwMjI3XFx1MDIyOVxceDA1NlxceDFDXFx4MDJcXHUwMjI4XFx1MDIyNlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjI5XFx1MDIyQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIyQVxcdTAyMjhcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMkFcXHUwMjJCXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyMkJcXHUwMjM0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjJDXFx1MDIyRlxceDA1MlxceDFBXFx4MDJcXHUwMjJEXCIrXG5cdFx0XCJcXHUwMjJFXFx4MDdcXHgxM1xceDAyXFx4MDJcXHUwMjJFXFx1MDIzMFxceDA1NlxceDFDXFx4MDJcXHUwMjJGXFx1MDIyRFxceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMjMwXFx1MDIzMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzMVxcdTAyMkZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMzFcXHUwMjMyXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMzJcXHUwMjM0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjMzXFx1MDIyNVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjMzXFx1MDIyQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzNDVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMzVcXHUwMjM4XFx4MDVkM1wiK1xuXHRcdFwiXFx4MDJcXHUwMjM2XFx1MDIzOFxceDA1MlxceDFBXFx4MDJcXHUwMjM3XFx1MDIzNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzN1xcdTAyMzZcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDIzODdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyMzlcXHUwMjNBXFx4MDU6XFx4MUVcXHgwMlxcdTAyM0FcIitcblx0XHRcIjlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyM0JcXHUwMjNDXFxiXFx4MUVcXHgwMVxceDAyXFx1MDIzQ1xcdTAyNDNcXHgwNTxcXHgxRlxceDAyXFx1MDIzRFwiK1xuXHRcdFwiXFx1MDI0M1xceDA1PiBcXHgwMlxcdTAyM0VcXHUwMjQzXFx4MDVAIVxceDAyXFx1MDIzRlxcdTAyNDNcXHgwNUYkXFx4MDJcXHUwMjQwXFx1MDI0M1wiK1xuXHRcdFwiXFx4MDVIJVxceDAyXFx1MDI0MVxcdTAyNDNcXHgwNUomXFx4MDJcXHUwMjQyXFx1MDIzQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0MlxcdTAyM0RcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0MlxcdTAyM0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNDJcXHUwMjNGXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyNDJcXHUwMjQwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjQyXFx1MDI0MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0M1xcdTAyNThcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDI0NFxcdTAyNDZcXGZcXHRcXHgwMlxceDAyXFx1MDI0NVxcdTAyNDdcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjQ2XFx1MDI0NVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjQ2XFx1MDI0N1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0N1xcdTAyNDhcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI0OFxcdTAyNEFcXHRcXHgwNVxceDAyXFx4MDJcXHUwMjQ5XFx1MDI0QlxceDA3XFx2XFx4MDJcXHgwMlxcdTAyNEFcXHUwMjQ5XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyNEFcXHUwMjRCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjRCXFx1MDI0Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI0Q1wiK1xuXHRcdFwiXFx1MDI1N1xceDA1OlxceDFFXFxuXFx1MDI0RFxcdTAyNEZcXGZcXGJcXHgwMlxceDAyXFx1MDI0RVxcdTAyNTBcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjRGXCIrXG5cdFx0XCJcXHUwMjRFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjRGXFx1MDI1MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1MFxcdTAyNTFcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDI1MVxcdTAyNTNcXHRcXHgwNlxceDAyXFx4MDJcXHUwMjUyXFx1MDI1NFxceDA3XFx2XFx4MDJcXHgwMlxcdTAyNTNcXHUwMjUyXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTNcXHUwMjU0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjU0XFx1MDI1NVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjU1XFx1MDI1N1xceDA1OlxceDFFXFx0XFx1MDI1NlxcdTAyNDRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNTZcXHUwMjREXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyNTdcXHUwMjVBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjU4XFx1MDI1NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1OFwiK1xuXHRcdFwiXFx1MDI1OVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI1OTtcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNUFcXHUwMjU4XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyNUJcXHUwMjVDXFx0XFx4MDZcXHgwMlxceDAyXFx1MDI1Q1xcdTAyNURcXHgwNTpcXHgxRVxceDAyXFx1MDI1RD1cXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDI1RVxcdTAyNjBcXHgwNyBcXHgwMlxceDAyXFx1MDI1RlxcdTAyNjFcXHgwN1xcblxceDAyXFx4MDJcXHUwMjYwXFx1MDI1RlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjYwXFx1MDI2MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2MVxcdTAyNjNcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI2MlxcdTAyNjRcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjYzXFx1MDI2MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2M1xcdTAyNjRcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDI2NFxcdTAyNjZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNjVcXHUwMjY3XFx4MDdcXG5cXHgwMlxceDAyXFx1MDI2NlwiK1xuXHRcdFwiXFx1MDI2NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2NlxcdTAyNjdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNjdcXHUwMjY5XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyNjhcXHUwMjZBXFx4MDU6XFx4MUVcXHgwMlxcdTAyNjlcXHUwMjY4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjY5XFx1MDI2QVwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjZBXFx1MDI3OFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2QlxcdTAyNkRcXHgwN1xceDE0XFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDI2Q1xcdTAyNkVcXHgwN1xcblxceDAyXFx4MDJcXHUwMjZEXFx1MDI2Q1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI2RFxcdTAyNkVcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDI2RVxcdTAyNzBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNkZcXHUwMjcxXFx4MDdcXHZcXHgwMlxceDAyXFx1MDI3MFwiK1xuXHRcdFwiXFx1MDI2RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3MFxcdTAyNzFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNzFcXHUwMjczXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAyNzJcXHUwMjc0XFx4MDdcXG5cXHgwMlxceDAyXFx1MDI3M1xcdTAyNzJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNzNcXHUwMjc0XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNzRcXHUwMjc1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjc1XFx1MDI3N1xceDA1OlxceDFFXFx4MDJcIitcblx0XHRcIlxcdTAyNzZcXHUwMjZCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjc3XFx1MDI3QVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3OFxcdTAyNzZcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDI3OFxcdTAyNzlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyNzlcXHUwMjdDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjdBXCIrXG5cdFx0XCJcXHUwMjc4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjdCXFx1MDI3RFxceDA3XFxuXFx4MDJcXHgwMlxcdTAyN0NcXHUwMjdCXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyN0NcXHUwMjdEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjdEXFx1MDI3RlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI3RVxcdTAyODBcIitcblx0XHRcIlxceDA3XFx2XFx4MDJcXHgwMlxcdTAyN0ZcXHUwMjdFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjdGXFx1MDI4MFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjgwXFx1MDI4MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4MVxcdTAyODNcXHgwN1xcblxceDAyXFx4MDJcXHUwMjgyXFx1MDI4MVxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMjgyXFx1MDI4M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI4M1xcdTAyODRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyODRcIitcblx0XHRcIlxcdTAyODVcXHgwNyFcXHgwMlxceDAyXFx1MDI4NT9cXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyODZcXHUwMjg4XFx4MDdcXHgxQ1xceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyODdcXHUwMjg5XFx4MDdcXHZcXHgwMlxceDAyXFx1MDI4OFxcdTAyODdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyODhcXHUwMjg5XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyODlcXHUwMjhCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjhBXFx1MDI4Q1xceDA3XFxuXFx4MDJcXHgwMlxcdTAyOEJcIitcblx0XHRcIlxcdTAyOEFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOEJcXHUwMjhDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjhDXFx1MDI4RVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjhEXFx1MDI4RlxceDA3XFx2XFx4MDJcXHgwMlxcdTAyOEVcXHUwMjhEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjhFXFx1MDI4RlwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjhGXFx1MDI5MVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5MFxcdTAyOTJcXHgwNUJcXFwiXFx4MDJcXHUwMjkxXCIrXG5cdFx0XCJcXHUwMjkwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjkxXFx1MDI5MlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5MlxcdTAyOTRcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDI5M1xcdTAyOTVcXHgwN1xcdlxceDAyXFx4MDJcXHUwMjk0XFx1MDI5M1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5NFxcdTAyOTVcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5NVxcdTAyOTdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOTZcXHUwMjk4XFx4MDdcXG5cXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMjk3XFx1MDI5NlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5N1xcdTAyOThcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOThcXHUwMjlBXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAyOTlcXHUwMjlCXFx4MDdcXHZcXHgwMlxceDAyXFx1MDI5QVxcdTAyOTlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOUFcIitcblx0XHRcIlxcdTAyOUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyOUJcXHUwMjlDXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMjlDXFx1MDI5RFxceDA3XFx4MURcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMjlEQVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDI5RVxcdTAyQUZcXHgwNUQjXFx4MDJcXHUwMjlGXFx1MDJBMVxceDA3XCIrXG5cdFx0XCJcXHZcXHgwMlxceDAyXFx1MDJBMFxcdTAyOUZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQTBcXHUwMkExXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkExXCIrXG5cdFx0XCJcXHUwMkEyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkEyXFx1MDJBNFxceDA3XFx4MTRcXHgwMlxceDAyXFx1MDJBM1xcdTAyQTVcXHgwN1xcdlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyQTRcXHUwMkEzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkE0XFx1MDJBNVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBNVxcdTAyQTdcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBNlxcdTAyQThcXHgwN1xcblxceDAyXFx4MDJcXHUwMkE3XFx1MDJBNlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkE3XFx1MDJBOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBOFxcdTAyQUFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQTlcXHUwMkFCXFx4MDdcIitcblx0XHRcIlxcdlxceDAyXFx4MDJcXHUwMkFBXFx1MDJBOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJBQVxcdTAyQUJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQUJcIitcblx0XHRcIlxcdTAyQUNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQUNcXHUwMkFFXFx4MDVEI1xceDAyXFx1MDJBRFxcdTAyQTBcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJBRVxcdTAyQjFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQUZcXHUwMkFEXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkFGXFx1MDJCMFxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMkIwQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCMVxcdTAyQUZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQjJcIitcblx0XHRcIlxcdTAyQjRcXHgwNUglXFx4MDJcXHUwMkIzXFx1MDJCNVxceDA3XFx2XFx4MDJcXHgwMlxcdTAyQjRcXHUwMkIzXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyQjRcXHUwMkI1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkI1XFx1MDJCNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCNlxcdTAyQjhcXHgwN1wiK1xuXHRcdFwiXFx4MTJcXHgwMlxceDAyXFx1MDJCN1xcdTAyQjlcXHgwN1xcdlxceDAyXFx4MDJcXHUwMkI4XFx1MDJCN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCOFwiK1xuXHRcdFwiXFx1MDJCOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCOVxcdTAyQkFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQkFcXHUwMkJCXFx4MDVAIVxceDAyXCIrXG5cdFx0XCJcXHUwMkJCXFx1MDJDN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJCQ1xcdTAyQkVcXHgwNUglXFx4MDJcXHUwMkJEXFx1MDJCRlxceDA3XFx2XFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJCRVxcdTAyQkRcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQkVcXHUwMkJGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkJGXFx1MDJDMFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkMwXFx1MDJDMlxceDA3XFx4MTJcXHgwMlxceDAyXFx1MDJDMVxcdTAyQzNcXHgwN1xcdlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyQzJcXHUwMkMxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkMyXFx1MDJDM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDM1xcdTAyQzRcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDJDNFxcdTAyQzVcXHgwNUglXFx4MDJcXHUwMkM1XFx1MDJDN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDNlxcdTAyQjJcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDNlxcdTAyQkNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQzdFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkM4XCIrXG5cdFx0XCJcXHUwMkNBXFx4MDdcXHgxRVxceDAyXFx4MDJcXHUwMkM5XFx1MDJDQlxceDA3XFx2XFx4MDJcXHgwMlxcdTAyQ0FcXHUwMkM5XFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyQ0FcXHUwMkNCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkNCXFx1MDJDRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDQ1xcdTAyQ0VcIitcblx0XHRcIlxceDA1JlxceDE0XFx4MDJcXHUwMkNEXFx1MDJDQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJDRFxcdTAyQ0VcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJDRVxcdTAyRDBcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyQ0ZcXHUwMkQxXFx4MDdcXHZcXHgwMlxceDAyXFx1MDJEMFxcdTAyQ0ZcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDJEMFxcdTAyRDFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRDFcXHUwMkQyXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkQyXCIrXG5cdFx0XCJcXHUwMkQ0XFx4MDdcXHgxRlxceDAyXFx4MDJcXHUwMkQzXFx1MDJENVxceDA3XFx2XFx4MDJcXHgwMlxcdTAyRDRcXHUwMkQzXFx4MDNcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHgwMlxcdTAyRDRcXHUwMkQ1XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkQ1XFx1MDJENlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJENlxcdTAyRDhcIitcblx0XHRcIlxceDA3XFx4MTlcXHgwMlxceDAyXFx1MDJEN1xcdTAyRDlcXHgwN1xcdlxceDAyXFx4MDJcXHUwMkQ4XFx1MDJEN1xceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkQ4XFx1MDJEOVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJEOVxcdTAyREFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyREFcXHUwMkU4XFx4MDVcIitcblx0XHRcIlxceDE2XFxmXFx4MDJcXHUwMkRCXFx1MDJERFxceDA1KFxceDE1XFx4MDJcXHUwMkRDXFx1MDJERVxceDA3XFx2XFx4MDJcXHgwMlxcdTAyRERcXHUwMkRDXCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRERcXHUwMkRFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkRFXFx1MDJERlxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMkRGXFx1MDJFMVxceDA3XFx4MTlcXHgwMlxceDAyXFx1MDJFMFxcdTAyRTJcXHgwN1xcdlxceDAyXFx4MDJcXHUwMkUxXFx1MDJFMFxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMkUxXFx1MDJFMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFMlxcdTAyRTNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRTNcIitcblx0XHRcIlxcdTAyRTVcXHgwNVxceDE2XFxmXFx4MDJcXHUwMkU0XFx1MDJFNlxceDA3XFx4MTZcXHgwMlxceDAyXFx1MDJFNVxcdTAyRTRcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJFNVxcdTAyRTZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRTZcXHUwMkU4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkU3XFx1MDJDOFwiK1xuXHRcdFwiXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkU3XFx1MDJEQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFOEdcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRTlcIitcblx0XHRcIlxcdTAyRUFcXHRcXHgwN1xceDAyXFx4MDJcXHUwMkVBSVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFQlxcdTAyRURcXHgwN1xceDFFXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDJFQ1xcdTAyRUVcXHgwN1xcdlxceDAyXFx4MDJcXHUwMkVEXFx1MDJFQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJFRFxcdTAyRUVcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDJFRVxcdTAyRUZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRUZcXHUwMkYxXFx4MDU6XFx4MUVcXHgwMlxcdTAyRjBcIitcblx0XHRcIlxcdTAyRjJcXHgwN1xcdlxceDAyXFx4MDJcXHUwMkYxXFx1MDJGMFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGMVxcdTAyRjJcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDJGMlxcdTAyRjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRjNcXHUwMkY0XFx4MDdcXHgxRlxceDAyXFx4MDJcXHUwMkY0S1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMkY1XFx1MDJGNlxceDA1TihcXHgwMlxcdTAyRjZNXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkY3XFx1MDJGQlwiK1xuXHRcdFwiXFx4MDVQKVxceDAyXFx1MDJGOFxcdTAyRkFcXHgwNVQrXFx4MDJcXHUwMkY5XFx1MDJGOFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGQVxcdTAyRkRcIitcblx0XHRcIlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGQlxcdTAyRjlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAyRkJcXHUwMkZDXFx4MDNcXHgwMlxceDAyXFx4MDJcIitcblx0XHRcIlxcdTAyRkNcXHUwMzA2XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMkZEXFx1MDJGQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDJGRVxcdTAzMDJcXHgwNVwiK1xuXHRcdFwiWC1cXHgwMlxcdTAyRkZcXHUwMzAxXFx4MDVUK1xceDAyXFx1MDMwMFxcdTAyRkZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDFcXHUwMzA0XFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzMDJcXHUwMzAwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzAyXFx1MDMwM1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwM1wiK1xuXHRcdFwiXFx1MDMwNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwNFxcdTAzMDJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMDVcXHUwMkY3XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzMDVcXHUwMkZFXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzA2T1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwN1xcdTAzMDlcIitcblx0XHRcIlxceDA3XFx2XFx4MDJcXHgwMlxcdTAzMDhcXHUwMzA3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzA4XFx1MDMwOVxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzA5XFx1MDMwQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwQVxcdTAzMENcXHgwNVIqXFx4MDJcXHUwMzBCXFx1MDMwQVxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMzBDXFx1MDMwRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMwRFxcdTAzMEJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMERcIitcblx0XHRcIlxcdTAzMEVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMEVcXHUwMzE0XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzBGXFx1MDMxM1xceDA1UipcXHgwMlwiK1xuXHRcdFwiXFx1MDMxMFxcdTAzMTNcXHgwN1xcdlxceDAyXFx4MDJcXHUwMzExXFx1MDMxM1xceDA3XFxyXFx4MDJcXHgwMlxcdTAzMTJcXHUwMzBGXFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzMTJcXHUwMzEwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzEyXFx1MDMxMVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxM1wiK1xuXHRcdFwiXFx1MDMxNlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxNFxcdTAzMTJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMTRcXHUwMzE1XFx4MDNcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHgwMlxcdTAzMTVRXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzE2XFx1MDMxNFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMxN1xcdTAzMjFcIitcblx0XHRcIlxceDA3XFxmXFx4MDJcXHgwMlxcdTAzMThcXHUwMzIxXFx4MDdcXHRcXHgwMlxceDAyXFx1MDMxOVxcdTAzMjFcXHgwN1xceDExXFx4MDJcXHgwMlxcdTAzMUFcIitcblx0XHRcIlxcdTAzMjFcXHgwN1xceDFDXFx4MDJcXHgwMlxcdTAzMUJcXHUwMzIxXFx4MDdcXHgxRFxceDAyXFx4MDJcXHUwMzFDXFx1MDMyMVxceDA3XFx4MTJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMzFEXFx1MDMyMVxceDA3XFx4MEZcXHgwMlxceDAyXFx1MDMxRVxcdTAzMjFcXHgwN1xceDEzXFx4MDJcXHgwMlxcdTAzMUZcIitcblx0XHRcIlxcdTAzMjFcXHgwNUglXFx4MDJcXHUwMzIwXFx1MDMxN1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyMFxcdTAzMThcXHgwM1xceDAyXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx1MDMyMFxcdTAzMTlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjBcXHUwMzFBXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzIwXFx1MDMxQlxceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMzIwXFx1MDMxQ1xceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyMFxcdTAzMURcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjBcIitcblx0XHRcIlxcdTAzMUVcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjBcXHUwMzFGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzIxU1xceDAzXFx4MDJcXHgwMlwiK1xuXHRcdFwiXFx4MDJcXHUwMzIyXFx1MDMyNVxceDA1WC1cXHgwMlxcdTAzMjNcXHUwMzI1XFx4MDVWLFxceDAyXFx1MDMyNFxcdTAzMjJcXHgwM1xceDAyXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDMyNFxcdTAzMjNcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjVVXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzI2XFx1MDMyQVxceDA1XCIrXG5cdFx0XCJSKlxceDAyXFx1MDMyN1xcdTAzMkFcXHgwN1xcdlxceDAyXFx4MDJcXHUwMzI4XFx1MDMyQVxceDA3XFxyXFx4MDJcXHgwMlxcdTAzMjlcXHUwMzI2XCIrXG5cdFx0XCJcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMjlcXHUwMzI3XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzI5XFx1MDMyOFxceDAzXFx4MDJcXHgwMlxceDAyXCIrXG5cdFx0XCJcXHUwMzJBXFx1MDMyQlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMyQlxcdTAzMjlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMkJcXHUwMzJDXFx4MDNcIitcblx0XHRcIlxceDAyXFx4MDJcXHgwMlxcdTAzMkNXXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzJEXFx1MDMyRVxceDA3XFx4MUJcXHgwMlxceDAyXFx1MDMyRVwiK1xuXHRcdFwiXFx1MDMyRlxceDA1Wi5cXHgwMlxcdTAzMkZcXHUwMzMxXFx4MDdcXHZcXHgwMlxceDAyXFx1MDMzMFxcdTAzMzJcXHgwNVxcXFwvXFx4MDJcXHUwMzMxXCIrXG5cdFx0XCJcXHUwMzMwXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzMxXFx1MDMzMlxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzMlxcdTAzMzNcXHgwM1xceDAyXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDMzM1xcdTAzMzRcXHgwN1xceDFEXFx4MDJcXHgwMlxcdTAzMzRZXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzM1XFx1MDMzNlwiK1xuXHRcdFwiXFx4MDVkM1xceDAyXFx1MDMzNltcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzMzdcXHUwMzM5XFx4MDVgMVxceDAyXFx1MDMzOFxcdTAzMzdcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDMzOVxcdTAzM0FcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzM0FcXHUwMzM4XFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzNBXCIrXG5cdFx0XCJcXHUwMzNCXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzNCXVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzQ1xcdTAzNDBcXHgwN1xceDFDXFx4MDJcIitcblx0XHRcIlxceDAyXFx1MDMzRFxcdTAzM0ZcXHgwNWAxXFx4MDJcXHUwMzNFXFx1MDMzRFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDMzRlxcdTAzNDJcXHgwM1wiK1xuXHRcdFwiXFx4MDJcXHgwMlxceDAyXFx1MDM0MFxcdTAzM0VcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDBcXHUwMzQxXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzQxXCIrXG5cdFx0XCJcXHUwMzQzXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzQyXFx1MDM0MFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0M1xcdTAzNDRcXHgwN1xceDFEXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx1MDM0NF9cXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNDVcXHUwMzRGXFx4MDVeMFxceDAyXFx1MDM0NlxcdTAzNEJcXHgwNVwiK1xuXHRcdFwiYjJcXHgwMlxcdTAzNDdcXHUwMzQ4XFx4MDdcXG5cXHgwMlxceDAyXFx1MDM0OFxcdTAzNEFcXHgwNWIyXFx4MDJcXHUwMzQ5XFx1MDM0N1xceDAzXCIrXG5cdFx0XCJcXHgwMlxceDAyXFx4MDJcXHUwMzRBXFx1MDM0RFxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0QlxcdTAzNDlcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNEJcIitcblx0XHRcIlxcdTAzNENcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNENcXHUwMzRGXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzREXFx1MDM0QlxceDAzXFx4MDJcIitcblx0XHRcIlxceDAyXFx4MDJcXHUwMzRFXFx1MDM0NVxceDAzXFx4MDJcXHgwMlxceDAyXFx1MDM0RVxcdTAzNDZcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNEZcIitcblx0XHRcImFcXHgwM1xceDAyXFx4MDJcXHgwMlxcdTAzNTBcXHUwMzUxXFx0XFxiXFx4MDJcXHgwMlxcdTAzNTFjXFx4MDNcXHgwMlxceDAyXFx4MDJcXHUwMzUyXCIrXG5cdFx0XCJcXHUwMzUzXFx4MDdcXHRcXHgwMlxceDAyXFx1MDM1M2VcXHgwM1xceDAyXFx4MDJcXHgwMlxceDk5aW1yflxceDkwXFx4OTRcXHhBNlxceEIyXFx4QjZcIitcblx0XHRcIlxceEJFXFx4QzJcXHhDNlxceENBXFx4RDJcXHhENlxceEUyXFx4RTZcXHhFQVxceEVFXFx4RjhcXHhGQ1xcdTAxMDJcXHUwMTA2XFx1MDEwRVxcdTAxMTZcIitcblx0XHRcIlxcdTAxMjBcXHUwMTI3XFx1MDEyOVxcdTAxMkRcXHUwMTM4XFx1MDEzQ1xcdTAxNDBcXHUwMTQ1XFx1MDE0Q1xcdTAxNTBcXHUwMTU0XFx1MDE1QVwiK1xuXHRcdFwiXFx1MDE1RVxcdTAxNjNcXHUwMTY3XFx1MDE2QlxcdTAxNkZcXHUwMTczXFx1MDE3OVxcdTAxN0NcXHUwMTdGXFx1MDE4M1xcdTAxODdcXHUwMThDXCIrXG5cdFx0XCJcXHUwMTkwXFx1MDE5NFxcdTAxOTlcXHUwMTlFXFx1MDFBM1xcdTAxQTdcXHUwMUFBXFx1MDFBRlxcdTAxQjJcXHUwMUI1XFx1MDFCOFxcdTAxQkNcIitcblx0XHRcIlxcdTAxQkZcXHUwMUMyXFx1MDFDN1xcdTAxQ0JcXHUwMUNFXFx1MDFEMVxcdTAxRENcXHUwMUUxXFx1MDFFNlxcdTAxRUJcXHUwMUVFXFx1MDFGMVwiK1xuXHRcdFwiXFx1MDFGNFxcdTAxRjdcXHUwMUZBXFx1MDFGRFxcdTAyMDNcXHUwMjA3XFx1MDIwQVxcdTAyMERcXHUwMjEyXFx1MDIxN1xcdTAyMUFcXHUwMjFFXCIrXG5cdFx0XCJcXHUwMjJBXFx1MDIzMVxcdTAyMzNcXHUwMjM3XFx1MDI0MlxcdTAyNDZcXHUwMjRBXFx1MDI0RlxcdTAyNTNcXHUwMjU2XFx1MDI1OFxcdTAyNjBcIitcblx0XHRcIlxcdTAyNjNcXHUwMjY2XFx1MDI2OVxcdTAyNkRcXHUwMjcwXFx1MDI3M1xcdTAyNzhcXHUwMjdDXFx1MDI3RlxcdTAyODJcXHUwMjg4XFx1MDI4QlwiK1xuXHRcdFwiXFx1MDI4RVxcdTAyOTFcXHUwMjk0XFx1MDI5N1xcdTAyOUFcXHUwMkEwXFx1MDJBNFxcdTAyQTdcXHUwMkFBXFx1MDJBRlxcdTAyQjRcXHUwMkI4XCIrXG5cdFx0XCJcXHUwMkJFXFx1MDJDMlxcdTAyQzZcXHUwMkNBXFx1MDJDRFxcdTAyRDBcXHUwMkQ0XFx1MDJEOFxcdTAyRERcXHUwMkUxXFx1MDJFNVxcdTAyRTdcIitcblx0XHRcIlxcdTAyRURcXHUwMkYxXFx1MDJGQlxcdTAzMDJcXHUwMzA1XFx1MDMwOFxcdTAzMERcXHUwMzEyXFx1MDMxNFxcdTAzMjBcXHUwMzI0XFx1MDMyOVwiK1xuXHRcdFwiXFx1MDMyQlxcdTAzMzFcXHUwMzNBXFx1MDM0MFxcdTAzNEJcXHUwMzRFXCI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgX3NlcmlhbGl6ZWRBVE46IHN0cmluZyA9IFV0aWxzLmpvaW4oXG5cdFx0W1xuXHRcdFx0VG9tUGFyc2VyLl9zZXJpYWxpemVkQVROU2VnbWVudDAsXG5cdFx0XHRUb21QYXJzZXIuX3NlcmlhbGl6ZWRBVE5TZWdtZW50MVxuXHRcdF0sXG5cdFx0XCJcIlxuXHQpO1xuXHRwdWJsaWMgc3RhdGljIF9fQVROOiBBVE47XG5cdHB1YmxpYyBzdGF0aWMgZ2V0IF9BVE4oKTogQVROIHtcblx0XHRpZiAoIVRvbVBhcnNlci5fX0FUTikge1xuXHRcdFx0VG9tUGFyc2VyLl9fQVROID0gbmV3IEFUTkRlc2VyaWFsaXplcigpLmRlc2VyaWFsaXplKFV0aWxzLnRvQ2hhckFycmF5KFRvbVBhcnNlci5fc2VyaWFsaXplZEFUTikpO1xuXHRcdH1cblxuXHRcdHJldHVybiBUb21QYXJzZXIuX19BVE47XG5cdH1cblxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRhdGlvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBFT0YoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLkVPRiwgMCk7IH1cblx0cHVibGljIGJvZHkoKTogQm9keUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEJvZHlDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihUb21QYXJzZXIuTkVXTElORSwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfZG9jdW1lbnRhdGlvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJEb2N1bWVudGF0aW9uKSBsaXN0ZW5lci5lbnRlckRvY3VtZW50YXRpb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERvY3VtZW50YXRpb24pIGxpc3RlbmVyLmV4aXREb2N1bWVudGF0aW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERvY3VtZW50YXRpb24pIHJldHVybiB2aXNpdG9yLnZpc2l0RG9jdW1lbnRhdGlvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQm9keUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBhbm5vdGF0aW9ucygpOiBBbm5vdGF0aW9uc0NvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIEFubm90YXRpb25zQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHdoaXRlc3BhY2UoKTogV2hpdGVzcGFjZUNvbnRleHRbXTtcblx0cHVibGljIHdoaXRlc3BhY2UoaTogbnVtYmVyKTogV2hpdGVzcGFjZUNvbnRleHQ7XG5cdHB1YmxpYyB3aGl0ZXNwYWNlKGk/OiBudW1iZXIpOiBXaGl0ZXNwYWNlQ29udGV4dCB8IFdoaXRlc3BhY2VDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhXaGl0ZXNwYWNlQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIFdoaXRlc3BhY2VDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfYm9keTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJCb2R5KSBsaXN0ZW5lci5lbnRlckJvZHkodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEJvZHkpIGxpc3RlbmVyLmV4aXRCb2R5KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEJvZHkpIHJldHVybiB2aXNpdG9yLnZpc2l0Qm9keSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgV2hpdGVzcGFjZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihUb21QYXJzZXIuU1BBQ0UsIDApOyB9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFRvbVBhcnNlci5ORVdMSU5FLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBUb21QYXJzZXIuUlVMRV93aGl0ZXNwYWNlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlcldoaXRlc3BhY2UpIGxpc3RlbmVyLmVudGVyV2hpdGVzcGFjZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0V2hpdGVzcGFjZSkgbGlzdGVuZXIuZXhpdFdoaXRlc3BhY2UodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0V2hpdGVzcGFjZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRXaGl0ZXNwYWNlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uc0NvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyB0YWcoKTogVGFnQ29udGV4dFtdO1xuXHRwdWJsaWMgdGFnKGk6IG51bWJlcik6IFRhZ0NvbnRleHQ7XG5cdHB1YmxpYyB0YWcoaT86IG51bWJlcik6IFRhZ0NvbnRleHQgfCBUYWdDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhUYWdDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgVGFnQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFRvbVBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBUb21QYXJzZXIuUlVMRV9hbm5vdGF0aW9uczsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJBbm5vdGF0aW9ucykgbGlzdGVuZXIuZW50ZXJBbm5vdGF0aW9ucyh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0QW5ub3RhdGlvbnMpIGxpc3RlbmVyLmV4aXRBbm5vdGF0aW9ucyh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRBbm5vdGF0aW9ucykgcmV0dXJuIHZpc2l0b3IudmlzaXRBbm5vdGF0aW9ucyh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVGFnQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHRhZ05hbWUoKTogVGFnTmFtZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIFRhZ05hbWVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTUlOVVMoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLk1JTlVTLCAwKTsgfVxuXHRwdWJsaWMgZGVzY3JpcHRpb24oKTogRGVzY3JpcHRpb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBEZXNjcmlwdGlvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyB0YWdJRCgpOiBUYWdJRENvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFRhZ0lEQ29udGV4dCk7XG5cdH1cblx0cHVibGljIEVRVUFMKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFRvbVBhcnNlci5FUVVBTCwgMCk7IH1cblx0cHVibGljIHZhbHVlKCk6IFZhbHVlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVmFsdWVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgQ09MT04oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLkNPTE9OLCAwKTsgfVxuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVHlwZUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX3RhZzsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJUYWcpIGxpc3RlbmVyLmVudGVyVGFnKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRUYWcpIGxpc3RlbmVyLmV4aXRUYWcodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0VGFnKSByZXR1cm4gdmlzaXRvci52aXNpdFRhZyh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVGFnTmFtZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBBVCgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuQVQsIDApOyB9XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfdGFnTmFtZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJUYWdOYW1lKSBsaXN0ZW5lci5lbnRlclRhZ05hbWUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFRhZ05hbWUpIGxpc3RlbmVyLmV4aXRUYWdOYW1lKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFRhZ05hbWUpIHJldHVybiB2aXNpdG9yLnZpc2l0VGFnTmFtZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVGFnSURDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgcHJvcGVydHlUYWdJRCgpOiBQcm9wZXJ0eVRhZ0lEQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUHJvcGVydHlUYWdJRENvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBvcHRpb25hbFRhZ0lEKCk6IE9wdGlvbmFsVGFnSURDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPcHRpb25hbFRhZ0lEQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBUb21QYXJzZXIuUlVMRV90YWdJRDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJUYWdJRCkgbGlzdGVuZXIuZW50ZXJUYWdJRCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0VGFnSUQpIGxpc3RlbmVyLmV4aXRUYWdJRCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRUYWdJRCkgcmV0dXJuIHZpc2l0b3IudmlzaXRUYWdJRCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT3B0aW9uYWxUYWdJRENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFFVRVNUSU9OKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5RVUVTVElPTiwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfb3B0aW9uYWxUYWdJRDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPcHRpb25hbFRhZ0lEKSBsaXN0ZW5lci5lbnRlck9wdGlvbmFsVGFnSUQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9wdGlvbmFsVGFnSUQpIGxpc3RlbmVyLmV4aXRPcHRpb25hbFRhZ0lEKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9wdGlvbmFsVGFnSUQpIHJldHVybiB2aXNpdG9yLnZpc2l0T3B0aW9uYWxUYWdJRCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlUYWdJRENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBvcHRpb25hbFRhZ0lEKCk6IE9wdGlvbmFsVGFnSURDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPcHRpb25hbFRhZ0lEQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFBFUklPRCgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFBFUklPRChpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBQRVJJT0QoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoVG9tUGFyc2VyLlBFUklPRCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5QRVJJT0QsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgb3B0aW9uYWxUYWdPcklkZW50aWZpZXIoKTogT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0W107XG5cdHB1YmxpYyBvcHRpb25hbFRhZ09ySWRlbnRpZmllcihpOiBudW1iZXIpOiBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQ7XG5cdHB1YmxpYyBvcHRpb25hbFRhZ09ySWRlbnRpZmllcihpPzogbnVtYmVyKTogT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0IHwgT3B0aW9uYWxUYWdPcklkZW50aWZpZXJDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBPcHRpb25hbFRhZ09ySWRlbnRpZmllckNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX3Byb3BlcnR5VGFnSUQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyUHJvcGVydHlUYWdJRCkgbGlzdGVuZXIuZW50ZXJQcm9wZXJ0eVRhZ0lEKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRQcm9wZXJ0eVRhZ0lEKSBsaXN0ZW5lci5leGl0UHJvcGVydHlUYWdJRCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRQcm9wZXJ0eVRhZ0lEKSByZXR1cm4gdmlzaXRvci52aXNpdFByb3BlcnR5VGFnSUQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIG9wdGlvbmFsVGFnSUQoKTogT3B0aW9uYWxUYWdJRENvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsVGFnSURDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX29wdGlvbmFsVGFnT3JJZGVudGlmaWVyOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKSBsaXN0ZW5lci5lbnRlck9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPcHRpb25hbFRhZ09ySWRlbnRpZmllcikgbGlzdGVuZXIuZXhpdE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKSByZXR1cm4gdmlzaXRvci52aXNpdE9wdGlvbmFsVGFnT3JJZGVudGlmaWVyKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHRbXTtcblx0cHVibGljIHR5cGUoaTogbnVtYmVyKTogVHlwZUNvbnRleHQ7XG5cdHB1YmxpYyB0eXBlKGk/OiBudW1iZXIpOiBUeXBlQ29udGV4dCB8IFR5cGVDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhUeXBlQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIFR5cGVDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIFBJUEUoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLlBJUEUsIDApOyB9XG5cdHB1YmxpYyBBTVAoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLkFNUCwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoVG9tUGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIGxhbWJkYVR5cGUoKTogTGFtYmRhVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIExhbWJkYVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgdHVwbGVUeXBlKCk6IFR1cGxlVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFR1cGxlVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBwcmltYXJ5VHlwZSgpOiBQcmltYXJ5VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFByaW1hcnlUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHBhcmVudGhlc2l6ZWRUeXBlKCk6IFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUGFyZW50aGVzaXplZFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgdW5hcnlUeXBlKCk6IFVuYXJ5VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFVuYXJ5VHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBvYmplY3RUeXBlKCk6IE9iamVjdFR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPYmplY3RUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGFycmF5VHlwZSgpOiBBcnJheVR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBBcnJheVR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgcHJvcGVydHlUeXBlKCk6IFByb3BlcnR5VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFByb3BlcnR5VHlwZUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX3R5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyVHlwZSkgbGlzdGVuZXIuZW50ZXJUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRUeXBlKSBsaXN0ZW5lci5leGl0VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdFR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFVuYXJ5VHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBwcmltYXJ5VHlwZSgpOiBQcmltYXJ5VHlwZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIFByaW1hcnlUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIEFNUCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihUb21QYXJzZXIuQU1QLCAwKTsgfVxuXHRwdWJsaWMgU1RBUigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihUb21QYXJzZXIuU1RBUiwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfdW5hcnlUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclVuYXJ5VHlwZSkgbGlzdGVuZXIuZW50ZXJVbmFyeVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFVuYXJ5VHlwZSkgbGlzdGVuZXIuZXhpdFVuYXJ5VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRVbmFyeVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0VW5hcnlUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBUdXBsZVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgTEVTU1RIQU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLkxFU1NUSEFOLCAwKTsgfVxuXHRwdWJsaWMgdHVwbGVUeXBlTGlzdCgpOiBUdXBsZVR5cGVMaXN0Q29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgVHVwbGVUeXBlTGlzdENvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBHUkVBVEVSVEhBTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuR1JFQVRFUlRIQU4sIDApOyB9XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoVG9tUGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfdHVwbGVUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclR1cGxlVHlwZSkgbGlzdGVuZXIuZW50ZXJUdXBsZVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFR1cGxlVHlwZSkgbGlzdGVuZXIuZXhpdFR1cGxlVHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRUdXBsZVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0VHVwbGVUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBUdXBsZVR5cGVMaXN0Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHRbXTtcblx0cHVibGljIHR5cGUoaTogbnVtYmVyKTogVHlwZUNvbnRleHQ7XG5cdHB1YmxpYyB0eXBlKGk/OiBudW1iZXIpOiBUeXBlQ29udGV4dCB8IFR5cGVDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhUeXBlQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIFR5cGVDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoVG9tUGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTU1BKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQ09NTUEoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQ09NTUEoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoVG9tUGFyc2VyLkNPTU1BKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLkNPTU1BLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfdHVwbGVUeXBlTGlzdDsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJUdXBsZVR5cGVMaXN0KSBsaXN0ZW5lci5lbnRlclR1cGxlVHlwZUxpc3QodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFR1cGxlVHlwZUxpc3QpIGxpc3RlbmVyLmV4aXRUdXBsZVR5cGVMaXN0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFR1cGxlVHlwZUxpc3QpIHJldHVybiB2aXNpdG9yLnZpc2l0VHVwbGVUeXBlTGlzdCh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUHJpbWFyeVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgb3B0aW9uYWxUeXBlKCk6IE9wdGlvbmFsVHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9wdGlvbmFsVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBpZGVudGlmaWVyT3JLZXl3b3JkKCk6IElkZW50aWZpZXJPcktleXdvcmRDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyT3JLZXl3b3JkQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfcHJpbWFyeVR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyUHJpbWFyeVR5cGUpIGxpc3RlbmVyLmVudGVyUHJpbWFyeVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFByaW1hcnlUeXBlKSBsaXN0ZW5lci5leGl0UHJpbWFyeVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0UHJpbWFyeVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0UHJpbWFyeVR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJPcktleXdvcmRDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBOdWxsTGl0ZXJhbCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihUb21QYXJzZXIuTnVsbExpdGVyYWwsIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX2lkZW50aWZpZXJPcktleXdvcmQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVySWRlbnRpZmllck9yS2V5d29yZCkgbGlzdGVuZXIuZW50ZXJJZGVudGlmaWVyT3JLZXl3b3JkKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRJZGVudGlmaWVyT3JLZXl3b3JkKSBsaXN0ZW5lci5leGl0SWRlbnRpZmllck9yS2V5d29yZCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRJZGVudGlmaWVyT3JLZXl3b3JkKSByZXR1cm4gdmlzaXRvci52aXNpdElkZW50aWZpZXJPcktleXdvcmQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIFBhcmVudGhlc2l6ZWRUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFBBUkVOX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLlBBUkVOX09QRU4sIDApOyB9XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBUeXBlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIFBBUkVOX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5QQVJFTl9DTE9TRSwgMCk7IH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoVG9tUGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfcGFyZW50aGVzaXplZFR5cGU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyUGFyZW50aGVzaXplZFR5cGUpIGxpc3RlbmVyLmVudGVyUGFyZW50aGVzaXplZFR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFBhcmVudGhlc2l6ZWRUeXBlKSBsaXN0ZW5lci5leGl0UGFyZW50aGVzaXplZFR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0UGFyZW50aGVzaXplZFR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0UGFyZW50aGVzaXplZFR5cGUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIExhbWJkYVR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgUEFSRU5fT1BFTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihUb21QYXJzZXIuUEFSRU5fT1BFTiwgMCk7IH1cblx0cHVibGljIFBBUkVOX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFRvbVBhcnNlci5QQVJFTl9DTE9TRSwgMCk7IH1cblx0cHVibGljIEFSUk9XKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5BUlJPVywgMCk7IH1cblx0cHVibGljIHR5cGUoKTogVHlwZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgZm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UoKTogRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBwYXJhbWV0ZXIoKTogUGFyYW1ldGVyQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgUGFyYW1ldGVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfbGFtYmRhVHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJMYW1iZGFUeXBlKSBsaXN0ZW5lci5lbnRlckxhbWJkYVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdExhbWJkYVR5cGUpIGxpc3RlbmVyLmV4aXRMYW1iZGFUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdExhbWJkYVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0TGFtYmRhVHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRm9ybWFsUGFyYW1ldGVyU2VxdWVuY2VDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgcGFyYW1ldGVyKCk6IFBhcmFtZXRlckNvbnRleHRbXTtcblx0cHVibGljIHBhcmFtZXRlcihpOiBudW1iZXIpOiBQYXJhbWV0ZXJDb250ZXh0O1xuXHRwdWJsaWMgcGFyYW1ldGVyKGk/OiBudW1iZXIpOiBQYXJhbWV0ZXJDb250ZXh0IHwgUGFyYW1ldGVyQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoUGFyYW1ldGVyQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIFBhcmFtZXRlckNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09NTUEoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBDT01NQShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBDT01NQShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhUb21QYXJzZXIuQ09NTUEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuQ09NTUEsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBUb21QYXJzZXIuUlVMRV9mb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSkgbGlzdGVuZXIuZW50ZXJGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0Rm9ybWFsUGFyYW1ldGVyU2VxdWVuY2UpIGxpc3RlbmVyLmV4aXRGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgQ09MT04oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLkNPTE9OLCAwKTsgfVxuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX3BhcmFtZXRlcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJQYXJhbWV0ZXIpIGxpc3RlbmVyLmVudGVyUGFyYW1ldGVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRQYXJhbWV0ZXIpIGxpc3RlbmVyLmV4aXRQYXJhbWV0ZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0UGFyYW1ldGVyKSByZXR1cm4gdmlzaXRvci52aXNpdFBhcmFtZXRlcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQXJyYXlUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEJSQUNLRVRfT1BFTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuQlJBQ0tFVF9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0tFVF9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuQlJBQ0tFVF9DTE9TRSwgMCk7IH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoVG9tUGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0W107XG5cdHB1YmxpYyB0eXBlKGk6IG51bWJlcik6IFR5cGVDb250ZXh0O1xuXHRwdWJsaWMgdHlwZShpPzogbnVtYmVyKTogVHlwZUNvbnRleHQgfCBUeXBlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoVHlwZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBUeXBlQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT01NQSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIENPTU1BKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIENPTU1BKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFRvbVBhcnNlci5DT01NQSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5DT01NQSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIG9iamVjdFR5cGUoKTogT2JqZWN0VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9iamVjdFR5cGVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgYXJyYXlUeXBlKCk6IEFycmF5VHlwZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEFycmF5VHlwZUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX2FycmF5VHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJBcnJheVR5cGUpIGxpc3RlbmVyLmVudGVyQXJyYXlUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRBcnJheVR5cGUpIGxpc3RlbmVyLmV4aXRBcnJheVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0QXJyYXlUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdEFycmF5VHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgT2JqZWN0VHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBCUkFDRV9PUEVOKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5CUkFDRV9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLkJSQUNFX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhUb21QYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIG9iamVjdFBhaXJUeXBlTGlzdCgpOiBPYmplY3RQYWlyVHlwZUxpc3RDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPYmplY3RQYWlyVHlwZUxpc3RDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBUb21QYXJzZXIuUlVMRV9vYmplY3RUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9iamVjdFR5cGUpIGxpc3RlbmVyLmVudGVyT2JqZWN0VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T2JqZWN0VHlwZSkgbGlzdGVuZXIuZXhpdE9iamVjdFR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T2JqZWN0VHlwZSkgcmV0dXJuIHZpc2l0b3IudmlzaXRPYmplY3RUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQYWlyVHlwZUxpc3RDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgb2JqZWN0UGFpclR5cGUoKTogT2JqZWN0UGFpclR5cGVDb250ZXh0W107XG5cdHB1YmxpYyBvYmplY3RQYWlyVHlwZShpOiBudW1iZXIpOiBPYmplY3RQYWlyVHlwZUNvbnRleHQ7XG5cdHB1YmxpYyBvYmplY3RQYWlyVHlwZShpPzogbnVtYmVyKTogT2JqZWN0UGFpclR5cGVDb250ZXh0IHwgT2JqZWN0UGFpclR5cGVDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhPYmplY3RQYWlyVHlwZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBPYmplY3RQYWlyVHlwZUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQ09NTUEoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBDT01NQShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBDT01NQShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhUb21QYXJzZXIuQ09NTUEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuQ09NTUEsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhUb21QYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfb2JqZWN0UGFpclR5cGVMaXN0OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJUeXBlTGlzdCkgbGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyVHlwZUxpc3QodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdE9iamVjdFBhaXJUeXBlTGlzdCkgbGlzdGVuZXIuZXhpdE9iamVjdFBhaXJUeXBlTGlzdCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPYmplY3RQYWlyVHlwZUxpc3QpIHJldHVybiB2aXNpdG9yLnZpc2l0T2JqZWN0UGFpclR5cGVMaXN0KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQYWlyVHlwZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyB0eXBlKCk6IFR5cGVDb250ZXh0W107XG5cdHB1YmxpYyB0eXBlKGk6IG51bWJlcik6IFR5cGVDb250ZXh0O1xuXHRwdWJsaWMgdHlwZShpPzogbnVtYmVyKTogVHlwZUNvbnRleHQgfCBUeXBlQ29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoVHlwZUNvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBUeXBlQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT0xPTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuQ09MT04sIDApOyB9XG5cdHB1YmxpYyBRVUVTVElPTigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihUb21QYXJzZXIuUVVFU1RJT04sIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX29iamVjdFBhaXJUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJUeXBlKSBsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPYmplY3RQYWlyVHlwZSkgbGlzdGVuZXIuZXhpdE9iamVjdFBhaXJUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9iamVjdFBhaXJUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdE9iamVjdFBhaXJUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPcHRpb25hbFR5cGVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgaWRlbnRpZmllcigpOiBJZGVudGlmaWVyQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgSWRlbnRpZmllckNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBRVUVTVElPTigpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuUVVFU1RJT04sIDApOyB9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX29wdGlvbmFsVHlwZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPcHRpb25hbFR5cGUpIGxpc3RlbmVyLmVudGVyT3B0aW9uYWxUeXBlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPcHRpb25hbFR5cGUpIGxpc3RlbmVyLmV4aXRPcHRpb25hbFR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0T3B0aW9uYWxUeXBlKSByZXR1cm4gdmlzaXRvci52aXNpdE9wdGlvbmFsVHlwZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlUeXBlQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlkZW50aWZpZXIoKTogSWRlbnRpZmllckNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIElkZW50aWZpZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgUEVSSU9EKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgUEVSSU9EKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFBFUklPRChpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhUb21QYXJzZXIuUEVSSU9EKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLlBFUklPRCwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBvcHRpb25hbFR5cGVPcklkZW50aWZlcigpOiBPcHRpb25hbFR5cGVPcklkZW50aWZlckNvbnRleHRbXTtcblx0cHVibGljIG9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyKGk6IG51bWJlcik6IE9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyQ29udGV4dDtcblx0cHVibGljIG9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyKGk/OiBudW1iZXIpOiBPcHRpb25hbFR5cGVPcklkZW50aWZlckNvbnRleHQgfCBPcHRpb25hbFR5cGVPcklkZW50aWZlckNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKE9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIE9wdGlvbmFsVHlwZU9ySWRlbnRpZmVyQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBvcHRpb25hbFR5cGUoKTogT3B0aW9uYWxUeXBlQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgT3B0aW9uYWxUeXBlQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfcHJvcGVydHlUeXBlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclByb3BlcnR5VHlwZSkgbGlzdGVuZXIuZW50ZXJQcm9wZXJ0eVR5cGUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFByb3BlcnR5VHlwZSkgbGlzdGVuZXIuZXhpdFByb3BlcnR5VHlwZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRQcm9wZXJ0eVR5cGUpIHJldHVybiB2aXNpdG9yLnZpc2l0UHJvcGVydHlUeXBlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPcHRpb25hbFR5cGVPcklkZW50aWZlckNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0cHVibGljIG9wdGlvbmFsVHlwZSgpOiBPcHRpb25hbFR5cGVDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPcHRpb25hbFR5cGVDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBUb21QYXJzZXIuUlVMRV9vcHRpb25hbFR5cGVPcklkZW50aWZlcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPcHRpb25hbFR5cGVPcklkZW50aWZlcikgbGlzdGVuZXIuZW50ZXJPcHRpb25hbFR5cGVPcklkZW50aWZlcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T3B0aW9uYWxUeXBlT3JJZGVudGlmZXIpIGxpc3RlbmVyLmV4aXRPcHRpb25hbFR5cGVPcklkZW50aWZlcih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPcHRpb25hbFR5cGVPcklkZW50aWZlcikgcmV0dXJuIHZpc2l0b3IudmlzaXRPcHRpb25hbFR5cGVPcklkZW50aWZlcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVmFsdWVDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX3ZhbHVlOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclZhbHVlKSBsaXN0ZW5lci5lbnRlclZhbHVlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRWYWx1ZSkgbGlzdGVuZXIuZXhpdFZhbHVlKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFZhbHVlKSByZXR1cm4gdmlzaXRvci52aXNpdFZhbHVlKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIHVuYXJ5RXhwcmVzc2lvbigpOiBVbmFyeUV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBVbmFyeUV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dFtdO1xuXHRwdWJsaWMgZXhwcmVzc2lvbihpOiBudW1iZXIpOiBFeHByZXNzaW9uQ29udGV4dDtcblx0cHVibGljIGV4cHJlc3Npb24oaT86IG51bWJlcik6IEV4cHJlc3Npb25Db250ZXh0IHwgRXhwcmVzc2lvbkNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKEV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1RBUigpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihUb21QYXJzZXIuU1RBUiwgMCk7IH1cblx0cHVibGljIEZPUldBUkRfU0xBU0goKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLkZPUldBUkRfU0xBU0gsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBQTFVTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFRvbVBhcnNlci5QTFVTLCAwKTsgfVxuXHRwdWJsaWMgTUlOVVMoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLk1JTlVTLCAwKTsgfVxuXHRwdWJsaWMgYXJyYXlFeHByZXNzaW9uKCk6IEFycmF5RXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEFycmF5RXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBvYmplY3RFeHByZXNzaW9uKCk6IE9iamVjdEV4cHJlc3Npb25Db250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBPYmplY3RFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGxhbWJkYUV4cHJlc3Npb24oKTogTGFtYmRhRXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIExhbWJkYUV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgbGl0ZXJhbCgpOiBMaXRlcmFsQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgTGl0ZXJhbENvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBwYXJlbnRoZXNpemVkRXhwcmVzc2lvbigpOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfZXhwcmVzc2lvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlckV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0RXhwcmVzc2lvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgVW5hcnlFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGV4cHJlc3Npb24oKTogRXhwcmVzc2lvbkNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIEV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgUExVUygpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihUb21QYXJzZXIuUExVUywgMCk7IH1cblx0cHVibGljIE1JTlVTKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFRvbVBhcnNlci5NSU5VUywgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfdW5hcnlFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclVuYXJ5RXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJVbmFyeUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdFVuYXJ5RXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdFVuYXJ5RXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRVbmFyeUV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0VW5hcnlFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBcnJheUV4cHJlc3Npb25Db250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgQlJBQ0tFVF9PUEVOKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5CUkFDS0VUX09QRU4sIDApOyB9XG5cdHB1YmxpYyBCUkFDS0VUX0NMT1NFKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5CUkFDS0VUX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgTkVXTElORSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIE5FV0xJTkUoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgTkVXTElORShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhUb21QYXJzZXIuTkVXTElORSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5ORVdMSU5FLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoVG9tUGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIGV4cHJlc3Npb24oKTogRXhwcmVzc2lvbkNvbnRleHRbXTtcblx0cHVibGljIGV4cHJlc3Npb24oaTogbnVtYmVyKTogRXhwcmVzc2lvbkNvbnRleHQ7XG5cdHB1YmxpYyBleHByZXNzaW9uKGk/OiBudW1iZXIpOiBFeHByZXNzaW9uQ29udGV4dCB8IEV4cHJlc3Npb25Db250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIEV4cHJlc3Npb25Db250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTU1BKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQ09NTUEoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQ09NTUEoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoVG9tUGFyc2VyLkNPTU1BKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLkNPTU1BLCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfYXJyYXlFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckFycmF5RXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJBcnJheUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEFycmF5RXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdEFycmF5RXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRBcnJheUV4cHJlc3Npb24pIHJldHVybiB2aXNpdG9yLnZpc2l0QXJyYXlFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEJSQUNFX09QRU4oKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLkJSQUNFX09QRU4sIDApOyB9XG5cdHB1YmxpYyBCUkFDRV9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuQlJBQ0VfQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFRvbVBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgb2JqZWN0UGFpckV4cHJlc3Npb25MaXN0KCk6IE9iamVjdFBhaXJFeHByZXNzaW9uTGlzdENvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9iamVjdFBhaXJFeHByZXNzaW9uTGlzdENvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX29iamVjdEV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT2JqZWN0RXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJPYmplY3RFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRPYmplY3RFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0T2JqZWN0RXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPYmplY3RFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdE9iamVjdEV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9iamVjdFBhaXJFeHByZXNzaW9uTGlzdENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBvYmplY3RQYWlyRXhwcmVzc2lvbigpOiBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHRbXTtcblx0cHVibGljIG9iamVjdFBhaXJFeHByZXNzaW9uKGk6IG51bWJlcik6IE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dDtcblx0cHVibGljIG9iamVjdFBhaXJFeHByZXNzaW9uKGk/OiBudW1iZXIpOiBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHQgfCBPYmplY3RQYWlyRXhwcmVzc2lvbkNvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBDT01NQSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIENPTU1BKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIENPTU1BKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFRvbVBhcnNlci5DT01NQSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5DT01NQSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBORVdMSU5FKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgTkVXTElORShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBORVdMSU5FKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFRvbVBhcnNlci5ORVdMSU5FKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLk5FV0xJTkUsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBUb21QYXJzZXIuUlVMRV9vYmplY3RQYWlyRXhwcmVzc2lvbkxpc3Q7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyT2JqZWN0UGFpckV4cHJlc3Npb25MaXN0KSBsaXN0ZW5lci5lbnRlck9iamVjdFBhaXJFeHByZXNzaW9uTGlzdCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T2JqZWN0UGFpckV4cHJlc3Npb25MaXN0KSBsaXN0ZW5lci5leGl0T2JqZWN0UGFpckV4cHJlc3Npb25MaXN0KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdE9iamVjdFBhaXJFeHByZXNzaW9uTGlzdCkgcmV0dXJuIHZpc2l0b3IudmlzaXRPYmplY3RQYWlyRXhwcmVzc2lvbkxpc3QodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIE9iamVjdFBhaXJFeHByZXNzaW9uQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGxpdGVyYWwoKTogTGl0ZXJhbENvbnRleHRbXTtcblx0cHVibGljIGxpdGVyYWwoaTogbnVtYmVyKTogTGl0ZXJhbENvbnRleHQ7XG5cdHB1YmxpYyBsaXRlcmFsKGk/OiBudW1iZXIpOiBMaXRlcmFsQ29udGV4dCB8IExpdGVyYWxDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhMaXRlcmFsQ29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIExpdGVyYWxDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIENPTE9OKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5DT0xPTiwgMCk7IH1cblx0cHVibGljIG9iamVjdEV4cHJlc3Npb24oKTogT2JqZWN0RXhwcmVzc2lvbkNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIE9iamVjdEV4cHJlc3Npb25Db250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBUb21QYXJzZXIuUlVMRV9vYmplY3RQYWlyRXhwcmVzc2lvbjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyRXhwcmVzc2lvbikgbGlzdGVuZXIuZW50ZXJPYmplY3RQYWlyRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0T2JqZWN0UGFpckV4cHJlc3Npb24pIGxpc3RlbmVyLmV4aXRPYmplY3RQYWlyRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRPYmplY3RQYWlyRXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRPYmplY3RQYWlyRXhwcmVzc2lvbih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTGFtYmRhRXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBQQVJFTl9PUEVOKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFRvbVBhcnNlci5QQVJFTl9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgUEFSRU5fQ0xPU0UoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLlBBUkVOX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgQVJST1coKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLkFSUk9XLCAwKTsgfVxuXHRwdWJsaWMgdHlwZSgpOiBUeXBlQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgVHlwZUNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdHB1YmxpYyBmb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZSgpOiBGb3JtYWxQYXJhbWV0ZXJTZXF1ZW5jZUNvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIEZvcm1hbFBhcmFtZXRlclNlcXVlbmNlQ29udGV4dCk7XG5cdH1cblx0cHVibGljIHBhcmFtZXRlcigpOiBQYXJhbWV0ZXJDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBQYXJhbWV0ZXJDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgUVVFU1RJT04oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLlFVRVNUSU9OLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBUb21QYXJzZXIuUlVMRV9sYW1iZGFFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckxhbWJkYUV4cHJlc3Npb24pIGxpc3RlbmVyLmVudGVyTGFtYmRhRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0TGFtYmRhRXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdExhbWJkYUV4cHJlc3Npb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0TGFtYmRhRXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRMYW1iZGFFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIEludGVnZXJMaXRlcmFsKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFRvbVBhcnNlci5JbnRlZ2VyTGl0ZXJhbCwgMCk7IH1cblx0cHVibGljIEZsb2F0aW5nUG9pbnRMaXRlcmFsKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFRvbVBhcnNlci5GbG9hdGluZ1BvaW50TGl0ZXJhbCwgMCk7IH1cblx0cHVibGljIEJvb2xlYW5MaXRlcmFsKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFRvbVBhcnNlci5Cb29sZWFuTGl0ZXJhbCwgMCk7IH1cblx0cHVibGljIENoYXJhY3RlckxpdGVyYWwoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLkNoYXJhY3RlckxpdGVyYWwsIDApOyB9XG5cdHB1YmxpYyBTdHJpbmdMaXRlcmFsKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFRvbVBhcnNlci5TdHJpbmdMaXRlcmFsLCAwKTsgfVxuXHRwdWJsaWMgTnVsbExpdGVyYWwoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLk51bGxMaXRlcmFsLCAwKTsgfVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBUb21QYXJzZXIuUlVMRV9saXRlcmFsOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckxpdGVyYWwpIGxpc3RlbmVyLmVudGVyTGl0ZXJhbCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0TGl0ZXJhbCkgbGlzdGVuZXIuZXhpdExpdGVyYWwodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0TGl0ZXJhbCkgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBQQVJFTl9PUEVOKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5QQVJFTl9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgZXhwcmVzc2lvbigpOiBFeHByZXNzaW9uQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgRXhwcmVzc2lvbkNvbnRleHQpO1xuXHR9XG5cdHB1YmxpYyBQQVJFTl9DTE9TRSgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuUEFSRU5fQ0xPU0UsIDApOyB9XG5cdHB1YmxpYyBTUEFDRSgpOiBUZXJtaW5hbE5vZGVbXTtcblx0cHVibGljIFNQQUNFKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIFNQQUNFKGk/OiBudW1iZXIpOiBUZXJtaW5hbE5vZGUgfCBUZXJtaW5hbE5vZGVbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW5zKFRvbVBhcnNlci5TUEFDRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5TUEFDRSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX3BhcmVudGhlc2l6ZWRFeHByZXNzaW9uOyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlclBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlclBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbikgbGlzdGVuZXIuZXhpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKSByZXR1cm4gdmlzaXRvci52aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmUoKTogRGVzY3JpcHRpb25MaW5lQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoMCwgRGVzY3JpcHRpb25MaW5lQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfZGVzY3JpcHRpb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb24pIGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uKSBsaXN0ZW5lci5leGl0RGVzY3JpcHRpb24odGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb24pIHJldHVybiB2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uTGluZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVTdGFydCgpOiBEZXNjcmlwdGlvbkxpbmVTdGFydENvbnRleHQgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiB0aGlzLnRyeUdldFJ1bGVDb250ZXh0KDAsIERlc2NyaXB0aW9uTGluZVN0YXJ0Q29udGV4dCk7XG5cdH1cblx0cHVibGljIGRlc2NyaXB0aW9uTGluZUVsZW1lbnQoKTogRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHRbXTtcblx0cHVibGljIGRlc2NyaXB0aW9uTGluZUVsZW1lbnQoaTogbnVtYmVyKTogRGVzY3JpcHRpb25MaW5lRWxlbWVudENvbnRleHQ7XG5cdHB1YmxpYyBkZXNjcmlwdGlvbkxpbmVFbGVtZW50KGk/OiBudW1iZXIpOiBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dCB8IERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIERlc2NyaXB0aW9uTGluZUVsZW1lbnRDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIGlubGluZVRhZygpOiBJbmxpbmVUYWdDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJbmxpbmVUYWdDb250ZXh0KTtcblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBUb21QYXJzZXIuUlVMRV9kZXNjcmlwdGlvbkxpbmU7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lKSBsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uTGluZSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lKSBsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZSkgcmV0dXJuIHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmUodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uTGluZVN0YXJ0Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFNQQUNFKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgU1BBQ0UoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgU1BBQ0UoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoVG9tUGFyc2VyLlNQQUNFKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLlNQQUNFLCBpKTtcblx0XHR9XG5cdH1cblx0cHVibGljIGRlc2NyaXB0aW9uVGV4dCgpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0W107XG5cdHB1YmxpYyBkZXNjcmlwdGlvblRleHQoaTogbnVtYmVyKTogRGVzY3JpcHRpb25UZXh0Q29udGV4dDtcblx0cHVibGljIGRlc2NyaXB0aW9uVGV4dChpPzogbnVtYmVyKTogRGVzY3JpcHRpb25UZXh0Q29udGV4dCB8IERlc2NyaXB0aW9uVGV4dENvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKERlc2NyaXB0aW9uVGV4dENvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBEZXNjcmlwdGlvblRleHRDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIEFUKCk6IFRlcm1pbmFsTm9kZVtdO1xuXHRwdWJsaWMgQVQoaTogbnVtYmVyKTogVGVybWluYWxOb2RlO1xuXHRwdWJsaWMgQVQoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoVG9tUGFyc2VyLkFUKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLkFULCBpKTtcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfZGVzY3JpcHRpb25MaW5lU3RhcnQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lU3RhcnQpIGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lU3RhcnQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZVN0YXJ0KSBsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lU3RhcnQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25MaW5lU3RhcnQpIHJldHVybiB2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25MaW5lU3RhcnQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uVGV4dENvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBURVhUX0NPTlRFTlQoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLlRFWFRfQ09OVEVOVCwgMCk7IH1cblx0cHVibGljIElEKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFRvbVBhcnNlci5JRCwgMCk7IH1cblx0cHVibGljIEZPUldBUkRfU0xBU0goKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLkZPUldBUkRfU0xBU0gsIDApOyB9XG5cdHB1YmxpYyBCUkFDRV9PUEVOKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFRvbVBhcnNlci5CUkFDRV9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfQ0xPU0UoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLkJSQUNFX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgQ09MT04oKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLkNPTE9OLCAwKTsgfVxuXHRwdWJsaWMgTUlOVVMoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLk1JTlVTLCAwKTsgfVxuXHRwdWJsaWMgUEVSSU9EKCk6IFRlcm1pbmFsTm9kZSB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLnRyeUdldFRva2VuKFRvbVBhcnNlci5QRVJJT0QsIDApOyB9XG5cdHB1YmxpYyBsaXRlcmFsKCk6IExpdGVyYWxDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBMaXRlcmFsQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfZGVzY3JpcHRpb25UZXh0OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uVGV4dCkgbGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvblRleHQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uVGV4dCkgbGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uVGV4dCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXREZXNjcmlwdGlvblRleHQpIHJldHVybiB2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25UZXh0KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbkxpbmVFbGVtZW50Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIGlubGluZVRhZygpOiBJbmxpbmVUYWdDb250ZXh0IHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy50cnlHZXRSdWxlQ29udGV4dCgwLCBJbmxpbmVUYWdDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgZGVzY3JpcHRpb25MaW5lVGV4dCgpOiBEZXNjcmlwdGlvbkxpbmVUZXh0Q29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgRGVzY3JpcHRpb25MaW5lVGV4dENvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX2Rlc2NyaXB0aW9uTGluZUVsZW1lbnQ7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lRWxlbWVudCkgbGlzdGVuZXIuZW50ZXJEZXNjcmlwdGlvbkxpbmVFbGVtZW50KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXREZXNjcmlwdGlvbkxpbmVFbGVtZW50KSBsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lRWxlbWVudCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmVFbGVtZW50KSByZXR1cm4gdmlzaXRvci52aXNpdERlc2NyaXB0aW9uTGluZUVsZW1lbnQodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uTGluZVRleHRDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KCk6IERlc2NyaXB0aW9uVGV4dENvbnRleHRbXTtcblx0cHVibGljIGRlc2NyaXB0aW9uVGV4dChpOiBudW1iZXIpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0O1xuXHRwdWJsaWMgZGVzY3JpcHRpb25UZXh0KGk/OiBudW1iZXIpOiBEZXNjcmlwdGlvblRleHRDb250ZXh0IHwgRGVzY3JpcHRpb25UZXh0Q29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoRGVzY3JpcHRpb25UZXh0Q29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIERlc2NyaXB0aW9uVGV4dENvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBTUEFDRShpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBTUEFDRShpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhUb21QYXJzZXIuU1BBQ0UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuU1BBQ0UsIGkpO1xuXHRcdH1cblx0fVxuXHRwdWJsaWMgQVQoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBBVChpOiBudW1iZXIpOiBUZXJtaW5hbE5vZGU7XG5cdHB1YmxpYyBBVChpPzogbnVtYmVyKTogVGVybWluYWxOb2RlIHwgVGVybWluYWxOb2RlW10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRva2VucyhUb21QYXJzZXIuQVQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuQVQsIGkpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBUb21QYXJzZXIuUlVMRV9kZXNjcmlwdGlvbkxpbmVUZXh0OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckRlc2NyaXB0aW9uTGluZVRleHQpIGxpc3RlbmVyLmVudGVyRGVzY3JpcHRpb25MaW5lVGV4dCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0RGVzY3JpcHRpb25MaW5lVGV4dCkgbGlzdGVuZXIuZXhpdERlc2NyaXB0aW9uTGluZVRleHQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0RGVzY3JpcHRpb25MaW5lVGV4dCkgcmV0dXJuIHZpc2l0b3IudmlzaXREZXNjcmlwdGlvbkxpbmVUZXh0KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBJbmxpbmVUYWdDb250ZXh0IGV4dGVuZHMgUGFyc2VyUnVsZUNvbnRleHQge1xuXHRwdWJsaWMgSU5MSU5FX1RBR19TVEFSVCgpOiBUZXJtaW5hbE5vZGUgeyByZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuSU5MSU5FX1RBR19TVEFSVCwgMCk7IH1cblx0cHVibGljIGlubGluZVRhZ05hbWUoKTogSW5saW5lVGFnTmFtZUNvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KDAsIElubGluZVRhZ05hbWVDb250ZXh0KTtcblx0fVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLlNQQUNFLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLkJSQUNFX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgaW5saW5lVGFnQm9keSgpOiBJbmxpbmVUYWdCb2R5Q29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgSW5saW5lVGFnQm9keUNvbnRleHQpO1xuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX2lubGluZVRhZzsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJJbmxpbmVUYWcpIGxpc3RlbmVyLmVudGVySW5saW5lVGFnKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRJbmxpbmVUYWcpIGxpc3RlbmVyLmV4aXRJbmxpbmVUYWcodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0SW5saW5lVGFnKSByZXR1cm4gdmlzaXRvci52aXNpdElubGluZVRhZyh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgSW5saW5lVGFnTmFtZUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBpZGVudGlmaWVyKCk6IElkZW50aWZpZXJDb250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dCgwLCBJZGVudGlmaWVyQ29udGV4dCk7XG5cdH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfaW5saW5lVGFnTmFtZTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJJbmxpbmVUYWdOYW1lKSBsaXN0ZW5lci5lbnRlcklubGluZVRhZ05hbWUodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdElubGluZVRhZ05hbWUpIGxpc3RlbmVyLmV4aXRJbmxpbmVUYWdOYW1lKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdElubGluZVRhZ05hbWUpIHJldHVybiB2aXNpdG9yLnZpc2l0SW5saW5lVGFnTmFtZSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgSW5saW5lVGFnQm9keUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBicmFjZUJvZHkoKTogQnJhY2VCb2R5Q29udGV4dFtdO1xuXHRwdWJsaWMgYnJhY2VCb2R5KGk6IG51bWJlcik6IEJyYWNlQm9keUNvbnRleHQ7XG5cdHB1YmxpYyBicmFjZUJvZHkoaT86IG51bWJlcik6IEJyYWNlQm9keUNvbnRleHQgfCBCcmFjZUJvZHlDb250ZXh0W10ge1xuXHRcdGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0cyhCcmFjZUJvZHlDb250ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHQoaSwgQnJhY2VCb2R5Q29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX2lubGluZVRhZ0JvZHk7IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVySW5saW5lVGFnQm9keSkgbGlzdGVuZXIuZW50ZXJJbmxpbmVUYWdCb2R5KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRJbmxpbmVUYWdCb2R5KSBsaXN0ZW5lci5leGl0SW5saW5lVGFnQm9keSh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRJbmxpbmVUYWdCb2R5KSByZXR1cm4gdmlzaXRvci52aXNpdElubGluZVRhZ0JvZHkodGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEJyYWNlRXhwcmVzc2lvbkNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBCUkFDRV9PUEVOKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5CUkFDRV9PUEVOLCAwKTsgfVxuXHRwdWJsaWMgQlJBQ0VfQ0xPU0UoKTogVGVybWluYWxOb2RlIHsgcmV0dXJuIHRoaXMuZ2V0VG9rZW4oVG9tUGFyc2VyLkJSQUNFX0NMT1NFLCAwKTsgfVxuXHRwdWJsaWMgYnJhY2VCb2R5KCk6IEJyYWNlQm9keUNvbnRleHRbXTtcblx0cHVibGljIGJyYWNlQm9keShpOiBudW1iZXIpOiBCcmFjZUJvZHlDb250ZXh0O1xuXHRwdWJsaWMgYnJhY2VCb2R5KGk/OiBudW1iZXIpOiBCcmFjZUJvZHlDb250ZXh0IHwgQnJhY2VCb2R5Q29udGV4dFtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dHMoQnJhY2VCb2R5Q29udGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFJ1bGVDb250ZXh0KGksIEJyYWNlQm9keUNvbnRleHQpO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpO1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBhcnNlclJ1bGVDb250ZXh0LCBpbnZva2luZ1N0YXRlOiBudW1iZXIpIHtcblx0XHRzdXBlcihwYXJlbnQsIGludm9raW5nU3RhdGUpO1xuXG5cdH1cblx0QE92ZXJyaWRlIHB1YmxpYyBnZXQgcnVsZUluZGV4KCk6IG51bWJlciB7IHJldHVybiBUb21QYXJzZXIuUlVMRV9icmFjZUV4cHJlc3Npb247IH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBlbnRlclJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmVudGVyQnJhY2VFeHByZXNzaW9uKSBsaXN0ZW5lci5lbnRlckJyYWNlRXhwcmVzc2lvbih0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGV4aXRSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5leGl0QnJhY2VFeHByZXNzaW9uKSBsaXN0ZW5lci5leGl0QnJhY2VFeHByZXNzaW9uKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdEJyYWNlRXhwcmVzc2lvbikgcmV0dXJuIHZpc2l0b3IudmlzaXRCcmFjZUV4cHJlc3Npb24odGhpcyk7XG5cdFx0ZWxzZSByZXR1cm4gdmlzaXRvci52aXNpdENoaWxkcmVuKHRoaXMpO1xuXHR9XG59XG5cblxuZXhwb3J0IGNsYXNzIEJyYWNlQm9keUNvbnRleHQgZXh0ZW5kcyBQYXJzZXJSdWxlQ29udGV4dCB7XG5cdHB1YmxpYyBicmFjZUV4cHJlc3Npb24oKTogQnJhY2VFeHByZXNzaW9uQ29udGV4dCB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIHRoaXMudHJ5R2V0UnVsZUNvbnRleHQoMCwgQnJhY2VFeHByZXNzaW9uQ29udGV4dCk7XG5cdH1cblx0cHVibGljIGJyYWNlVGV4dCgpOiBCcmFjZVRleHRDb250ZXh0W107XG5cdHB1YmxpYyBicmFjZVRleHQoaTogbnVtYmVyKTogQnJhY2VUZXh0Q29udGV4dDtcblx0cHVibGljIGJyYWNlVGV4dChpPzogbnVtYmVyKTogQnJhY2VUZXh0Q29udGV4dCB8IEJyYWNlVGV4dENvbnRleHRbXSB7XG5cdFx0aWYgKGkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UnVsZUNvbnRleHRzKEJyYWNlVGV4dENvbnRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSdWxlQ29udGV4dChpLCBCcmFjZVRleHRDb250ZXh0KTtcblx0XHR9XG5cdH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlW107XG5cdHB1YmxpYyBORVdMSU5FKGk6IG51bWJlcik6IFRlcm1pbmFsTm9kZTtcblx0cHVibGljIE5FV0xJTkUoaT86IG51bWJlcik6IFRlcm1pbmFsTm9kZSB8IFRlcm1pbmFsTm9kZVtdIHtcblx0XHRpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbnMoVG9tUGFyc2VyLk5FV0xJTkUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihUb21QYXJzZXIuTkVXTElORSwgaSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcik7XG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGFyc2VyUnVsZUNvbnRleHQsIGludm9raW5nU3RhdGU6IG51bWJlcikge1xuXHRcdHN1cGVyKHBhcmVudCwgaW52b2tpbmdTdGF0ZSk7XG5cblx0fVxuXHRAT3ZlcnJpZGUgcHVibGljIGdldCBydWxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIFRvbVBhcnNlci5SVUxFX2JyYWNlQm9keTsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJCcmFjZUJvZHkpIGxpc3RlbmVyLmVudGVyQnJhY2VCb2R5KHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZXhpdFJ1bGUobGlzdGVuZXI6IFRvbVBhcnNlckxpc3RlbmVyKTogdm9pZCB7XG5cdFx0aWYgKGxpc3RlbmVyLmV4aXRCcmFjZUJvZHkpIGxpc3RlbmVyLmV4aXRCcmFjZUJvZHkodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBhY2NlcHQ8UmVzdWx0Pih2aXNpdG9yOiBUb21QYXJzZXJWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuXHRcdGlmICh2aXNpdG9yLnZpc2l0QnJhY2VCb2R5KSByZXR1cm4gdmlzaXRvci52aXNpdEJyYWNlQm9keSh0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQnJhY2VUZXh0Q29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIFRFWFRfQ09OVEVOVCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihUb21QYXJzZXIuVEVYVF9DT05URU5ULCAwKTsgfVxuXHRwdWJsaWMgSUQoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLklELCAwKTsgfVxuXHRwdWJsaWMgU1BBQ0UoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLlNQQUNFLCAwKTsgfVxuXHRwdWJsaWMgRk9SV0FSRF9TTEFTSCgpOiBUZXJtaW5hbE5vZGUgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpcy50cnlHZXRUb2tlbihUb21QYXJzZXIuRk9SV0FSRF9TTEFTSCwgMCk7IH1cblx0cHVibGljIE5FV0xJTkUoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLk5FV0xJTkUsIDApOyB9XG5cdHB1YmxpYyBQRVJJT0QoKTogVGVybWluYWxOb2RlIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXMudHJ5R2V0VG9rZW4oVG9tUGFyc2VyLlBFUklPRCwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfYnJhY2VUZXh0OyB9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgZW50ZXJSdWxlKGxpc3RlbmVyOiBUb21QYXJzZXJMaXN0ZW5lcik6IHZvaWQge1xuXHRcdGlmIChsaXN0ZW5lci5lbnRlckJyYWNlVGV4dCkgbGlzdGVuZXIuZW50ZXJCcmFjZVRleHQodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdEJyYWNlVGV4dCkgbGlzdGVuZXIuZXhpdEJyYWNlVGV4dCh0aGlzKTtcblx0fVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGFjY2VwdDxSZXN1bHQ+KHZpc2l0b3I6IFRvbVBhcnNlclZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG5cdFx0aWYgKHZpc2l0b3IudmlzaXRCcmFjZVRleHQpIHJldHVybiB2aXNpdG9yLnZpc2l0QnJhY2VUZXh0KHRoaXMpO1xuXHRcdGVsc2UgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGlsZHJlbih0aGlzKTtcblx0fVxufVxuXG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyQ29udGV4dCBleHRlbmRzIFBhcnNlclJ1bGVDb250ZXh0IHtcblx0cHVibGljIElEKCk6IFRlcm1pbmFsTm9kZSB7IHJldHVybiB0aGlzLmdldFRva2VuKFRvbVBhcnNlci5JRCwgMCk7IH1cblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKTtcblx0Y29uc3RydWN0b3IocGFyZW50OiBQYXJzZXJSdWxlQ29udGV4dCwgaW52b2tpbmdTdGF0ZTogbnVtYmVyKSB7XG5cdFx0c3VwZXIocGFyZW50LCBpbnZva2luZ1N0YXRlKTtcblxuXHR9XG5cdEBPdmVycmlkZSBwdWJsaWMgZ2V0IHJ1bGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gVG9tUGFyc2VyLlJVTEVfaWRlbnRpZmllcjsgfVxuXHRAT3ZlcnJpZGVcblx0cHVibGljIGVudGVyUnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZW50ZXJJZGVudGlmaWVyKSBsaXN0ZW5lci5lbnRlcklkZW50aWZpZXIodGhpcyk7XG5cdH1cblx0QE92ZXJyaWRlXG5cdHB1YmxpYyBleGl0UnVsZShsaXN0ZW5lcjogVG9tUGFyc2VyTGlzdGVuZXIpOiB2b2lkIHtcblx0XHRpZiAobGlzdGVuZXIuZXhpdElkZW50aWZpZXIpIGxpc3RlbmVyLmV4aXRJZGVudGlmaWVyKHRoaXMpO1xuXHR9XG5cdEBPdmVycmlkZVxuXHRwdWJsaWMgYWNjZXB0PFJlc3VsdD4odmlzaXRvcjogVG9tUGFyc2VyVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcblx0XHRpZiAodmlzaXRvci52aXNpdElkZW50aWZpZXIpIHJldHVybiB2aXNpdG9yLnZpc2l0SWRlbnRpZmllcih0aGlzKTtcblx0XHRlbHNlIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hpbGRyZW4odGhpcyk7XG5cdH1cbn1cblxuXG4iXX0=