"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const remark = require("remark");
const XDocCommentParser_1 = require("./XDocCommentParser");
const XDocASTGenerator_1 = require("./XDocASTGenerator");
const XDocASTVisitor_1 = require("./XDocASTVisitor");
class XDocParser {
    constructor(source, options) {
        this.options = {
            comment: {
                type: 'DOUBLE_STAR_COMMENT'
            },
            markdown: {
                remark: {},
                headingDepth: 2
            },
            visitor: {}
        };
        /**
         * Parse a single comment.
         *
         * @return: {
         *  markdown: RemarkNode[],
         *  documentation: Partial<DocumentationNode>
         * }
         */
        this.parse = () => {
            const comment = (new XDocCommentParser_1.default(this.source))
                .parse()
                .filter(this.filter)[0];
            return {
                markdown: this.parseMarkdown(comment.text),
                documentation: this.parseXDoc(comment.text)
            };
        };
        /**
         * Parse multiple comments within a file.
         */
        this.parseFile = () => {
            const comments = (new XDocCommentParser_1.default(this.source))
                .parse()
                .filter(this.filter);
            return comments.map(token => ({
                markdown: this.parseMarkdown(token.text),
                documentation: this.parseXDoc(token.text)
            }));
        };
        this.parseMarkdown = (source) => {
            let ast = remark()
                .data('settings', this.options.markdown.remark)
                .parse(source);
            ast.children = ast.children.map((node, index) => {
                if (node.type === 'heading') {
                    node.depth = this.options.markdown.headingDepth;
                }
                if (node.type === 'code') {
                    if (this.isAPI(ast.children[index - 1])) {
                        if (!node.lang)
                            node.lang = 'xdoc';
                        return node;
                    }
                }
                return node;
            });
            return ast;
        };
        this.isAPI = (node) => {
            return node && node.type === "heading" && node.children[0].value.toLowerCase() === "api";
        };
        this.parseXDoc = (source) => {
            const XDocRegex = /@(\w+)([^{[(\n]*)?([\{\[\(][\s\S]*[\}\]\)]([\s]*(=|-)>.*)?)?([\s]*-(.)*)?/gmi;
            const documentation = (new XDocASTGenerator_1.default(source.match(XDocRegex).join('\n'))).generate();
            return (new XDocASTVisitor_1.default(documentation, this.options.visitor)
                .visit());
        };
        this.filter = (token) => {
            return XDocCommentParser_1.TokenType[token.type] === this.options.comment.type;
        };
        this.source_ = source;
        Object.assign(this.options, options || {});
    }
    get source() {
        return this.source_;
    }
}
exports.default = XDocParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWERvY1BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9YRG9jUGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWlDO0FBQ2pDLDJEQUEwRTtBQUMxRSx5REFBa0Q7QUFDbEQscURBQXlFO0FBOEJ6RSxNQUFxQixVQUFVO0lBYTdCLFlBQVksTUFBYyxFQUFFLE9BQW9DO1FBWHhELFlBQU8sR0FBc0I7WUFDbkMsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxxQkFBcUI7YUFDNUI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsWUFBWSxFQUFFLENBQUM7YUFDaEI7WUFDRCxPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUE7UUFXRDs7Ozs7OztXQU9HO1FBQ0gsVUFBSyxHQUFHLEdBQUcsRUFBRTtZQUNYLE1BQU0sT0FBTyxHQUFHLENBQUMsSUFBSSwyQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2pELEtBQUssRUFBRTtpQkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE9BQU87Z0JBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDMUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUM1QyxDQUFBO1FBQ0gsQ0FBQyxDQUFBO1FBRUQ7O1dBRUc7UUFDSCxjQUFTLEdBQUcsR0FBRyxFQUFFO1lBQ2YsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLDJCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDbEQsS0FBSyxFQUFFO2lCQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDNUIsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDeEMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzthQUMxQyxDQUFDLENBQUMsQ0FBQTtRQUNMLENBQUMsQ0FBQTtRQUVPLGtCQUFhLEdBQUcsQ0FBQyxNQUFjLEVBQWMsRUFBRTtZQUNyRCxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQUU7aUJBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQzlDLEtBQUssQ0FBQyxNQUFNLENBQWUsQ0FBQztZQUMvQixHQUFHLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUM5QyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO29CQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztpQkFDakQ7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtvQkFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTs0QkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQzt3QkFDbkMsT0FBTyxJQUFJLENBQUM7cUJBQ2I7aUJBQ0Y7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQTtZQUNGLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFBO1FBRU8sVUFBSyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDO1FBQzNGLENBQUMsQ0FBQTtRQUVPLGNBQVMsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQ3JDLE1BQU0sU0FBUyxHQUFHLDhFQUE4RSxDQUFDO1lBQ2pHLE1BQU0sYUFBYSxHQUFHLENBQUMsSUFBSSwwQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDNUYsT0FBTyxDQUFDLElBQUksd0JBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7aUJBQzVELEtBQUssRUFBRSxDQUNULENBQUM7UUFDSixDQUFDLENBQUE7UUFFTyxXQUFNLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUNoQyxPQUFPLDZCQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM3RCxDQUFDLENBQUE7UUF4RUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Q0FtRUY7QUF2RkQsNkJBdUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcmVtYXJrIGZyb20gXCJyZW1hcmtcIjtcbmltcG9ydCBYRG9jQ29tbWVudFBhcnNlciwgeyBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSAnLi9YRG9jQ29tbWVudFBhcnNlcic7XG5pbXBvcnQgWERvY0FTVEdlbmVyYXRvciBmcm9tIFwiLi9YRG9jQVNUR2VuZXJhdG9yXCI7XG5pbXBvcnQgWERvY0FTVFZpc2l0b3IsIHsgWERvY0FTVFZpc2l0b3JPcHRpb25zIH0gZnJvbSBcIi4vWERvY0FTVFZpc2l0b3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBYRG9jUGFyc2VyT3B0aW9ucyB7XG4gIGNvbW1lbnQ6IHtcbiAgICB0eXBlPzogJ1NJTkdMRV9IQVNIX0NPTU1FTlQnXG4gICAgfCAnU0lOR0xFX1NUQVJfQ09NTUVOVCdcbiAgICB8ICdET1VCTEVfU1RBUl9DT01NRU5UJ1xuICAgIHwgJ0RPVUJMRV9TTEFTSF9DT01NRU5UJ1xuICAgIHwgJ1RSSVBMRV9TTEFTSF9DT01NRU5UJ1xuICAgIHwgJ1RSSVBMRV9RVU9URV9DT01NRU5UJ1xuICB9XG4gIG1hcmtkb3duOiB7XG4gICAgcmVtYXJrPzogYW55LFxuICAgIGhlYWRpbmdEZXB0aD86IG51bWJlclxuICB9XG4gIHZpc2l0b3I6IFhEb2NBU1RWaXNpdG9yT3B0aW9ucyB8IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlbWFya05vZGUge1xuICB0eXBlOiBzdHJpbmcsXG4gIGRlcHRoPzogbnVtYmVyLFxuICB2YWx1ZT86IHN0cmluZyxcbiAgbGFuZz86IHN0cmluZ1xuICBjaGlsZHJlbjogUmVtYXJrTm9kZVtdLFxuICBwb3NpdGlvbjoge1xuICAgIHN0YXJ0OiBudW1iZXIsXG4gICAgZW5kOiBudW1iZXJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYRG9jUGFyc2VyIHtcbiAgcHJpdmF0ZSBzb3VyY2VfOiBzdHJpbmc7XG4gIHByaXZhdGUgb3B0aW9uczogWERvY1BhcnNlck9wdGlvbnMgPSB7XG4gICAgY29tbWVudDoge1xuICAgICAgdHlwZTogJ0RPVUJMRV9TVEFSX0NPTU1FTlQnXG4gICAgfSxcbiAgICBtYXJrZG93bjoge1xuICAgICAgcmVtYXJrOiB7fSxcbiAgICAgIGhlYWRpbmdEZXB0aDogMlxuICAgIH0sXG4gICAgdmlzaXRvcjoge31cbiAgfVxuICBcbiAgY29uc3RydWN0b3Ioc291cmNlOiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPFhEb2NQYXJzZXJPcHRpb25zPikge1xuICAgIHRoaXMuc291cmNlXyA9IHNvdXJjZTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyB8fCB7fSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNvdXJjZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZV87XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYSBzaW5nbGUgY29tbWVudC5cbiAgICogXG4gICAqIEByZXR1cm46IHtcbiAgICogIG1hcmtkb3duOiBSZW1hcmtOb2RlW10sXG4gICAqICBkb2N1bWVudGF0aW9uOiBQYXJ0aWFsPERvY3VtZW50YXRpb25Ob2RlPlxuICAgKiB9XG4gICAqL1xuICBwYXJzZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb21tZW50ID0gKG5ldyBYRG9jQ29tbWVudFBhcnNlcih0aGlzLnNvdXJjZSkpXG4gICAgICAucGFyc2UoKVxuICAgICAgLmZpbHRlcih0aGlzLmZpbHRlcilbMF07XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hcmtkb3duOiB0aGlzLnBhcnNlTWFya2Rvd24oY29tbWVudC50ZXh0KSxcbiAgICAgIGRvY3VtZW50YXRpb246IHRoaXMucGFyc2VYRG9jKGNvbW1lbnQudGV4dClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgbXVsdGlwbGUgY29tbWVudHMgd2l0aGluIGEgZmlsZS5cbiAgICovXG4gIHBhcnNlRmlsZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb21tZW50cyA9IChuZXcgWERvY0NvbW1lbnRQYXJzZXIodGhpcy5zb3VyY2UpKVxuICAgICAgLnBhcnNlKClcbiAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXIpO1xuICAgIHJldHVybiBjb21tZW50cy5tYXAodG9rZW4gPT4gKHtcbiAgICAgIG1hcmtkb3duOiB0aGlzLnBhcnNlTWFya2Rvd24odG9rZW4udGV4dCksXG4gICAgICBkb2N1bWVudGF0aW9uOiB0aGlzLnBhcnNlWERvYyh0b2tlbi50ZXh0KVxuICAgIH0pKVxuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZU1hcmtkb3duID0gKHNvdXJjZTogc3RyaW5nKTogUmVtYXJrTm9kZSA9PiB7XG4gICAgbGV0IGFzdCA9IHJlbWFyaygpXG4gICAgICAuZGF0YSgnc2V0dGluZ3MnLCB0aGlzLm9wdGlvbnMubWFya2Rvd24ucmVtYXJrKVxuICAgICAgLnBhcnNlKHNvdXJjZSkgYXMgUmVtYXJrTm9kZTtcbiAgICBhc3QuY2hpbGRyZW4gPSBhc3QuY2hpbGRyZW4ubWFwKChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ2hlYWRpbmcnKSB7XG4gICAgICAgIG5vZGUuZGVwdGggPSB0aGlzLm9wdGlvbnMubWFya2Rvd24uaGVhZGluZ0RlcHRoO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ2NvZGUnKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQVBJKGFzdC5jaGlsZHJlbltpbmRleCAtIDFdKSkge1xuICAgICAgICAgIGlmICghbm9kZS5sYW5nKSBub2RlLmxhbmcgPSAneGRvYyc7XG4gICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0pXG4gICAgcmV0dXJuIGFzdDtcbiAgfVxuXG4gIHByaXZhdGUgaXNBUEkgPSAobm9kZSkgPT4ge1xuICAgIHJldHVybiBub2RlICYmIG5vZGUudHlwZSA9PT0gXCJoZWFkaW5nXCIgJiYgbm9kZS5jaGlsZHJlblswXS52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBcImFwaVwiO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZVhEb2MgPSAoc291cmNlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBYRG9jUmVnZXggPSAvQChcXHcrKShbXntbKFxcbl0qKT8oW1xce1xcW1xcKF1bXFxzXFxTXSpbXFx9XFxdXFwpXShbXFxzXSooPXwtKT4uKik/KT8oW1xcc10qLSguKSopPy9nbWk7XG4gICAgY29uc3QgZG9jdW1lbnRhdGlvbiA9IChuZXcgWERvY0FTVEdlbmVyYXRvcihzb3VyY2UubWF0Y2goWERvY1JlZ2V4KS5qb2luKCdcXG4nKSkpLmdlbmVyYXRlKCk7XG4gICAgcmV0dXJuIChuZXcgWERvY0FTVFZpc2l0b3IoZG9jdW1lbnRhdGlvbiwgdGhpcy5vcHRpb25zLnZpc2l0b3IpXG4gICAgICAudmlzaXQoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlciA9ICh0b2tlbjogVG9rZW4pID0+IHtcbiAgICByZXR1cm4gVG9rZW5UeXBlW3Rva2VuLnR5cGVdID09PSB0aGlzLm9wdGlvbnMuY29tbWVudC50eXBlO1xuICB9XG59Il19