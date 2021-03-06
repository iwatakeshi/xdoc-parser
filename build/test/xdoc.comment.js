"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const FS = require("fs");
const XDocCommentParser_1 = require("../src/XDocCommentParser");
/* Helpers */
const equal = chai.assert.deepEqual;
const processToken = (token) => ({
    type: XDocCommentParser_1.Token.getTokenName(token.type),
    // Remove any whitespaces so that
    // it's easier to compare
    text: token.text.replace(/\s/g, '')
});
const processFile = (source) => 
// Split up the text file by '$...$'
source.split(/\$(.*?)\$/g)
    // Remove any lonely spaces or newlines
    .filter(line => line !== '\n' && line !== '')
    // Remove the headers and keep the code with comments
    .filter(line => XDocCommentParser_1.Token.getTokenType(line.replace(/\s/g, '')) === undefined);
const parse = (source) => (new XDocCommentParser_1.default(source)).parse().map(processToken);
const source = processFile(FS.readFileSync(`${process.cwd()}/test/comments.txt`, 'utf-8'));
const get = (index) => source[index];
describe('XDoc Comment Parser', () => {
    it('should parse a single hash comment', () => equal(parse(get(0)), [{
            type: XDocCommentParser_1.Token.getTokenName(XDocCommentParser_1.TokenType.SINGLE_HASH_COMMENT),
            text: 'Title'
        }]));
    it('should parse a single star comment', () => equal(parse(get(1)), [{
            type: XDocCommentParser_1.Token.getTokenName(XDocCommentParser_1.TokenType.SINGLE_STAR_COMMENT),
            text: 'Title'
        }]));
    it('should parse a double star comment', () => equal(parse(get(2)), [{
            type: XDocCommentParser_1.Token.getTokenName(XDocCommentParser_1.TokenType.DOUBLE_STAR_COMMENT),
            text: 'Title'
        }]));
    it('should parse a double slash comment', () => equal(parse(get(3)), [{
            type: XDocCommentParser_1.Token.getTokenName(XDocCommentParser_1.TokenType.DOUBLE_SLASH_COMMENT),
            text: 'Title'
        }]));
    it('should parse a triple slash comment', () => equal(parse(get(4)), [{
            type: XDocCommentParser_1.Token.getTokenName(XDocCommentParser_1.TokenType.TRIPLE_SLASH_COMMENT),
            text: 'Title'
        }]));
    it('should parse a triple quote comment', () => equal(parse(get(5)), [{
            type: XDocCommentParser_1.Token.getTokenName(XDocCommentParser_1.TokenType.TRIPLE_QUOTE_COMMENT),
            text: 'Title'
        }]));
});
/*
  SINGLE_HASH_COMMENT,
  SINGLE_STAR_COMMENT,
  DOUBLE_STAR_COMMENT,
  DOUBLE_SLASH_COMMENT,
  TRIPLE_SLASH_COMMENT,
  TRIPLE_QUOTE_COMMENT
 */ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGRvYy5jb21tZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC94ZG9jLmNvbW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLGdFQUErRTtBQUUvRSxhQUFhO0FBQ2IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDcEMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsSUFBSSxFQUFFLHlCQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDcEMsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztDQUNwQyxDQUFDLENBQUM7QUFDSCxNQUFNLFdBQVcsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0FBQ3JDLG9DQUFvQztBQUNwQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztJQUMxQix1Q0FBdUM7S0FDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzdDLHFEQUFxRDtLQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyx5QkFBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDO0FBRzdFLE1BQU0sS0FBSyxHQUFHLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksMkJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDM0YsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDM0YsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVyQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsR0FBRyxFQUFFO0lBQ25DLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQ2xELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDYixDQUFDO1lBQ0MsSUFBSSxFQUFFLHlCQUFLLENBQUMsWUFBWSxDQUFDLDZCQUFTLENBQUMsbUJBQW1CLENBQUM7WUFDdkQsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDLENBQ0gsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FDbEQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUM7WUFDQyxJQUFJLEVBQUUseUJBQUssQ0FBQyxZQUFZLENBQUMsNkJBQVMsQ0FBQyxtQkFBbUIsQ0FBQztZQUN2RCxJQUFJLEVBQUUsT0FBTztTQUNkLENBQUMsQ0FDSCxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUNsRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQztZQUNDLElBQUksRUFBRSx5QkFBSyxDQUFDLFlBQVksQ0FBQyw2QkFBUyxDQUFDLG1CQUFtQixDQUFDO1lBQ3ZELElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQyxDQUNILENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQ25ELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDYixDQUFDO1lBQ0MsSUFBSSxFQUFFLHlCQUFLLENBQUMsWUFBWSxDQUFDLDZCQUFTLENBQUMsb0JBQW9CLENBQUM7WUFDeEQsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDLENBQ0gsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFDQUFxQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FDbkQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUM7WUFDQyxJQUFJLEVBQUUseUJBQUssQ0FBQyxZQUFZLENBQUMsNkJBQVMsQ0FBQyxvQkFBb0IsQ0FBQztZQUN4RCxJQUFJLEVBQUUsT0FBTztTQUNkLENBQUMsQ0FDSCxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUNuRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQztZQUNDLElBQUksRUFBRSx5QkFBSyxDQUFDLFlBQVksQ0FBQyw2QkFBUyxDQUFDLG9CQUFvQixDQUFDO1lBQ3hELElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQyxDQUNILENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDO0FBRUg7Ozs7Ozs7R0FPRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgKiBhcyBGUyBmcm9tICdmcyc7XG5pbXBvcnQgWERvY0NvbW1lbnRQYXJzZXIsIHsgVG9rZW5UeXBlLCBUb2tlbiB9IGZyb20gJy4uL3NyYy9YRG9jQ29tbWVudFBhcnNlcic7XG5cbi8qIEhlbHBlcnMgKi9cbmNvbnN0IGVxdWFsID0gY2hhaS5hc3NlcnQuZGVlcEVxdWFsO1xuY29uc3QgcHJvY2Vzc1Rva2VuID0gKHRva2VuOiBUb2tlbikgPT4gKHtcbiAgdHlwZTogVG9rZW4uZ2V0VG9rZW5OYW1lKHRva2VuLnR5cGUpLFxuICAvLyBSZW1vdmUgYW55IHdoaXRlc3BhY2VzIHNvIHRoYXRcbiAgLy8gaXQncyBlYXNpZXIgdG8gY29tcGFyZVxuICB0ZXh0OiB0b2tlbi50ZXh0LnJlcGxhY2UoL1xccy9nLCAnJylcbn0pO1xuY29uc3QgcHJvY2Vzc0ZpbGUgPSAoc291cmNlOiBzdHJpbmcpID0+IFxuICAvLyBTcGxpdCB1cCB0aGUgdGV4dCBmaWxlIGJ5ICckLi4uJCdcbiAgc291cmNlLnNwbGl0KC9cXCQoLio/KVxcJC9nKVxuICAvLyBSZW1vdmUgYW55IGxvbmVseSBzcGFjZXMgb3IgbmV3bGluZXNcbiAgLmZpbHRlcihsaW5lID0+IGxpbmUgIT09ICdcXG4nICYmIGxpbmUgIT09ICcnKVxuICAvLyBSZW1vdmUgdGhlIGhlYWRlcnMgYW5kIGtlZXAgdGhlIGNvZGUgd2l0aCBjb21tZW50c1xuICAuZmlsdGVyKGxpbmUgPT4gVG9rZW4uZ2V0VG9rZW5UeXBlKGxpbmUucmVwbGFjZSgvXFxzL2csICcnKSkgPT09IHVuZGVmaW5lZCk7XG5cbiBcbmNvbnN0IHBhcnNlID0gKHNvdXJjZTogc3RyaW5nKSA9PiAobmV3IFhEb2NDb21tZW50UGFyc2VyKHNvdXJjZSkpLnBhcnNlKCkubWFwKHByb2Nlc3NUb2tlbilcbmNvbnN0IHNvdXJjZSA9IHByb2Nlc3NGaWxlKEZTLnJlYWRGaWxlU3luYyhgJHtwcm9jZXNzLmN3ZCgpfS90ZXN0L2NvbW1lbnRzLnR4dGAsICd1dGYtOCcpKTtcbmNvbnN0IGdldCA9IChpbmRleCkgPT4gc291cmNlW2luZGV4XTtcblxuZGVzY3JpYmUoJ1hEb2MgQ29tbWVudCBQYXJzZXInLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgcGFyc2UgYSBzaW5nbGUgaGFzaCBjb21tZW50JywgKCkgPT4gZXF1YWwoXG4gICAgcGFyc2UoZ2V0KDApKSxcbiAgICBbe1xuICAgICAgdHlwZTogVG9rZW4uZ2V0VG9rZW5OYW1lKFRva2VuVHlwZS5TSU5HTEVfSEFTSF9DT01NRU5UKSxcbiAgICAgIHRleHQ6ICdUaXRsZSdcbiAgICB9XVxuICApKTtcblxuICBpdCgnc2hvdWxkIHBhcnNlIGEgc2luZ2xlIHN0YXIgY29tbWVudCcsICgpID0+IGVxdWFsKFxuICAgIHBhcnNlKGdldCgxKSksXG4gICAgW3tcbiAgICAgIHR5cGU6IFRva2VuLmdldFRva2VuTmFtZShUb2tlblR5cGUuU0lOR0xFX1NUQVJfQ09NTUVOVCksXG4gICAgICB0ZXh0OiAnVGl0bGUnXG4gICAgfV1cbiAgKSk7XG5cbiAgaXQoJ3Nob3VsZCBwYXJzZSBhIGRvdWJsZSBzdGFyIGNvbW1lbnQnLCAoKSA9PiBlcXVhbChcbiAgICBwYXJzZShnZXQoMikpLFxuICAgIFt7XG4gICAgICB0eXBlOiBUb2tlbi5nZXRUb2tlbk5hbWUoVG9rZW5UeXBlLkRPVUJMRV9TVEFSX0NPTU1FTlQpLFxuICAgICAgdGV4dDogJ1RpdGxlJ1xuICAgIH1dXG4gICkpO1xuXG4gIGl0KCdzaG91bGQgcGFyc2UgYSBkb3VibGUgc2xhc2ggY29tbWVudCcsICgpID0+IGVxdWFsKFxuICAgIHBhcnNlKGdldCgzKSksXG4gICAgW3tcbiAgICAgIHR5cGU6IFRva2VuLmdldFRva2VuTmFtZShUb2tlblR5cGUuRE9VQkxFX1NMQVNIX0NPTU1FTlQpLFxuICAgICAgdGV4dDogJ1RpdGxlJ1xuICAgIH1dXG4gICkpO1xuXG4gIGl0KCdzaG91bGQgcGFyc2UgYSB0cmlwbGUgc2xhc2ggY29tbWVudCcsICgpID0+IGVxdWFsKFxuICAgIHBhcnNlKGdldCg0KSksXG4gICAgW3tcbiAgICAgIHR5cGU6IFRva2VuLmdldFRva2VuTmFtZShUb2tlblR5cGUuVFJJUExFX1NMQVNIX0NPTU1FTlQpLFxuICAgICAgdGV4dDogJ1RpdGxlJ1xuICAgIH1dXG4gICkpO1xuXG4gIGl0KCdzaG91bGQgcGFyc2UgYSB0cmlwbGUgcXVvdGUgY29tbWVudCcsICgpID0+IGVxdWFsKFxuICAgIHBhcnNlKGdldCg1KSksXG4gICAgW3tcbiAgICAgIHR5cGU6IFRva2VuLmdldFRva2VuTmFtZShUb2tlblR5cGUuVFJJUExFX1FVT1RFX0NPTU1FTlQpLFxuICAgICAgdGV4dDogJ1RpdGxlJ1xuICAgIH1dXG4gICkpO1xuXG59KTtcblxuLypcbiAgU0lOR0xFX0hBU0hfQ09NTUVOVCxcbiAgU0lOR0xFX1NUQVJfQ09NTUVOVCxcbiAgRE9VQkxFX1NUQVJfQ09NTUVOVCxcbiAgRE9VQkxFX1NMQVNIX0NPTU1FTlQsXG4gIFRSSVBMRV9TTEFTSF9DT01NRU5ULFxuICBUUklQTEVfUVVPVEVfQ09NTUVOVFxuICovIl19