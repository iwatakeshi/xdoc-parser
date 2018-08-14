"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FS = require("fs");
const chai = require("chai");
const XDocParser_1 = require("../src/XDocParser");
const XDocASTNode_1 = require("../src/XDocASTNode");
/* Helpers */
const equal = chai.assert.deepEqual;
const md1 = FS.readFileSync(`${process.cwd()}/test/markdown.comment.txt`, 'utf-8');
const md2 = FS.readFileSync(`${process.cwd()}/test/markdown2.comment.txt`, 'utf-8');
const xdoc = (source) => (new XDocParser_1.default(source).parse());
const documentation = (annotations) => XDocASTNode_1.createDocumentationNode(XDocASTNode_1.createBodyNode(annotations));
describe('XDoc Parser', () => {
    describe('parse markdown', () => {
        describe('parse xdoc within markdown (XDoc style)', () => {
            it('should parse @tag id', () => equal(xdoc(md1).documentation, documentation([
                XDocASTNode_1.createTagNode(XDocASTNode_1.createTagNameNode(XDocASTNode_1.createIdentifierNode('tag')), XDocASTNode_1.createTagIdentifierNode(XDocASTNode_1.createIdentifierNode('id')), null, null, null)
            ])));
        });
        describe('parse xdoc within markdown (JSDoc style)', () => {
            it('should parse @tag id', () => equal(xdoc(md2).documentation, documentation([
                XDocASTNode_1.createTagNode(XDocASTNode_1.createTagNameNode(XDocASTNode_1.createIdentifierNode('tag')), XDocASTNode_1.createTagIdentifierNode(XDocASTNode_1.createIdentifierNode('id')), null, null, null)
            ])));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGRvYy5jb3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC94ZG9jLmNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLGtEQUEyQztBQUMzQyxvREFBMEw7QUFFMUwsYUFBYTtBQUNiLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ3BDLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLDRCQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ25GLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLDZCQUE2QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3BGLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksb0JBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBRWxFLE1BQU0sYUFBYSxHQUFHLENBQUMsV0FBc0IsRUFBOEIsRUFBRSxDQUFDLHFDQUF1QixDQUNuRyw0QkFBYyxDQUNaLFdBQVcsQ0FDWixDQUNGLENBQUE7QUFHRCxRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUMzQixRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO1FBQzlCLFFBQVEsQ0FBQyx5Q0FBeUMsRUFBRSxHQUFHLEVBQUU7WUFFdkQsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFDdkIsYUFBYSxDQUFDO2dCQUNaLDJCQUFhLENBQ1gsK0JBQWlCLENBQ2Ysa0NBQW9CLENBQUMsS0FBSyxDQUFDLENBQzVCLEVBQ0QscUNBQXVCLENBQ3JCLGtDQUFvQixDQUFDLElBQUksQ0FBQyxDQUMzQixFQUNELElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxDQUNMO2FBQUMsQ0FBQyxDQUNOLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLDBDQUEwQyxFQUFFLEdBQUcsRUFBRTtZQUV4RCxFQUFFLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUN2QixhQUFhLENBQUM7Z0JBQ1osMkJBQWEsQ0FDWCwrQkFBaUIsQ0FDZixrQ0FBb0IsQ0FBQyxLQUFLLENBQUMsQ0FDNUIsRUFDRCxxQ0FBdUIsQ0FDckIsa0NBQW9CLENBQUMsSUFBSSxDQUFDLENBQzNCLEVBQ0QsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLENBQ0w7YUFBQyxDQUFDLENBQ04sQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRlMgZnJvbSBcImZzXCI7XG5pbXBvcnQgKiBhcyBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0IFhEb2NQYXJzZXIgZnJvbSAnLi4vc3JjL1hEb2NQYXJzZXInO1xuaW1wb3J0IHsgVGFnTm9kZSwgRG9jdW1lbnRhdGlvbk5vZGUsIGNyZWF0ZURvY3VtZW50YXRpb25Ob2RlLCBjcmVhdGVCb2R5Tm9kZSwgY3JlYXRlVGFnTmFtZU5vZGUsIGNyZWF0ZUlkZW50aWZpZXJOb2RlLCBjcmVhdGVUYWdJZGVudGlmaWVyTm9kZSwgY3JlYXRlVGFnTm9kZSB9IGZyb20gXCIuLi9zcmMvWERvY0FTVE5vZGVcIjtcblxuLyogSGVscGVycyAqL1xuY29uc3QgZXF1YWwgPSBjaGFpLmFzc2VydC5kZWVwRXF1YWw7XG5jb25zdCBtZDEgPSBGUy5yZWFkRmlsZVN5bmMoYCR7cHJvY2Vzcy5jd2QoKX0vdGVzdC9tYXJrZG93bi5jb21tZW50LnR4dGAsICd1dGYtOCcpO1xuY29uc3QgbWQyID0gRlMucmVhZEZpbGVTeW5jKGAke3Byb2Nlc3MuY3dkKCl9L3Rlc3QvbWFya2Rvd24yLmNvbW1lbnQudHh0YCwgJ3V0Zi04Jyk7XG5jb25zdCB4ZG9jID0gKHNvdXJjZTogc3RyaW5nKSA9PiAobmV3IFhEb2NQYXJzZXIoc291cmNlKS5wYXJzZSgpKTtcblxuY29uc3QgZG9jdW1lbnRhdGlvbiA9IChhbm5vdGF0aW9uczogVGFnTm9kZVtdKTogUGFydGlhbDxEb2N1bWVudGF0aW9uTm9kZT4gPT4gY3JlYXRlRG9jdW1lbnRhdGlvbk5vZGUoXG4gIGNyZWF0ZUJvZHlOb2RlKFxuICAgIGFubm90YXRpb25zXG4gIClcbilcblxuXG5kZXNjcmliZSgnWERvYyBQYXJzZXInLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdwYXJzZSBtYXJrZG93bicsICgpID0+IHtcbiAgICBkZXNjcmliZSgncGFyc2UgeGRvYyB3aXRoaW4gbWFya2Rvd24gKFhEb2Mgc3R5bGUpJywgKCkgPT4ge1xuXG4gICAgICBpdCgnc2hvdWxkIHBhcnNlIEB0YWcgaWQnLCAoKSA9PiBlcXVhbChcbiAgICAgICAgeGRvYyhtZDEpLmRvY3VtZW50YXRpb24sXG4gICAgICAgIGRvY3VtZW50YXRpb24oW1xuICAgICAgICAgIGNyZWF0ZVRhZ05vZGUoXG4gICAgICAgICAgICBjcmVhdGVUYWdOYW1lTm9kZShcbiAgICAgICAgICAgICAgY3JlYXRlSWRlbnRpZmllck5vZGUoJ3RhZycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3JlYXRlVGFnSWRlbnRpZmllck5vZGUoXG4gICAgICAgICAgICAgIGNyZWF0ZUlkZW50aWZpZXJOb2RlKCdpZCcpLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICldKVxuICAgICAgKSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgncGFyc2UgeGRvYyB3aXRoaW4gbWFya2Rvd24gKEpTRG9jIHN0eWxlKScsICgpID0+IHtcblxuICAgICAgaXQoJ3Nob3VsZCBwYXJzZSBAdGFnIGlkJywgKCkgPT4gZXF1YWwoXG4gICAgICAgIHhkb2MobWQyKS5kb2N1bWVudGF0aW9uLFxuICAgICAgICBkb2N1bWVudGF0aW9uKFtcbiAgICAgICAgICBjcmVhdGVUYWdOb2RlKFxuICAgICAgICAgICAgY3JlYXRlVGFnTmFtZU5vZGUoXG4gICAgICAgICAgICAgIGNyZWF0ZUlkZW50aWZpZXJOb2RlKCd0YWcnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNyZWF0ZVRhZ0lkZW50aWZpZXJOb2RlKFxuICAgICAgICAgICAgICBjcmVhdGVJZGVudGlmaWVyTm9kZSgnaWQnKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICApXSlcbiAgICAgICkpO1xuICAgIH0pO1xuICB9KVxufSk7Il19