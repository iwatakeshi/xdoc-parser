"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const { assert } = chai;
describe('XDoc Exports', () => {
    it('should export a function', () => {
        assert.isFunction(require(`${process.cwd()}/build/index.js`));
    });
    it('should export the core classes', () => {
        let xdoc = require(`${process.cwd()}/build/index.js`);
        assert.exists(xdoc.core);
        assert.exists(xdoc.core.XDocParser);
        assert.exists(xdoc.core.XDocASTNode);
        assert.exists(xdoc.core.XDocASTGenerator);
        assert.exists(xdoc.core.XDocASTVisitor);
        assert.exists(xdoc.core.XDocCommentParser);
        assert.exists(xdoc.core.XDocSyntaxLexer);
        assert.exists(xdoc.core.XDocSyntaxParser);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGRvYy5leHBvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L3hkb2MuZXhwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTZCO0FBQzdCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFFeEIsUUFBUSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7SUFDNUIsRUFBRSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsRUFBRTtRQUNsQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsRUFBRTtRQUN4QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUE7UUFDckQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFBO0FBRUosQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjaGFpIGZyb20gJ2NoYWknO1xuY29uc3QgeyBhc3NlcnQgfSA9IGNoYWk7XG5cbmRlc2NyaWJlKCdYRG9jIEV4cG9ydHMnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgZXhwb3J0IGEgZnVuY3Rpb24nLCAoKSA9PiB7XG4gICAgYXNzZXJ0LmlzRnVuY3Rpb24ocmVxdWlyZShgJHtwcm9jZXNzLmN3ZCgpfS9idWlsZC9pbmRleC5qc2ApKTtcbiAgfSlcblxuICBpdCgnc2hvdWxkIGV4cG9ydCB0aGUgY29yZSBjbGFzc2VzJywgKCkgPT4ge1xuICAgIGxldCB4ZG9jID0gcmVxdWlyZShgJHtwcm9jZXNzLmN3ZCgpfS9idWlsZC9pbmRleC5qc2ApXG4gICAgYXNzZXJ0LmV4aXN0cyh4ZG9jLmNvcmUpXG4gICAgYXNzZXJ0LmV4aXN0cyh4ZG9jLmNvcmUuWERvY1BhcnNlcik7XG4gICAgYXNzZXJ0LmV4aXN0cyh4ZG9jLmNvcmUuWERvY0FTVE5vZGUpO1xuICAgIGFzc2VydC5leGlzdHMoeGRvYy5jb3JlLlhEb2NBU1RHZW5lcmF0b3IpO1xuICAgIGFzc2VydC5leGlzdHMoeGRvYy5jb3JlLlhEb2NBU1RWaXNpdG9yKTtcbiAgICBhc3NlcnQuZXhpc3RzKHhkb2MuY29yZS5YRG9jQ29tbWVudFBhcnNlcik7XG4gICAgYXNzZXJ0LmV4aXN0cyh4ZG9jLmNvcmUuWERvY1N5bnRheExleGVyKTtcbiAgICBhc3NlcnQuZXhpc3RzKHhkb2MuY29yZS5YRG9jU3ludGF4UGFyc2VyKTtcbiAgfSlcblxufSkiXX0=