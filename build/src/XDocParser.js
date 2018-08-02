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
        this.parse = () => {
            return (new XDocCommentParser_1.default(this.source_))
                .parse()
                .filter(this.filter)
                .map(this.parseMarkdown);
        };
        this.parseMarkdown = (token) => {
            // console.log(marked.lexer(token.text, this.options.marked));
            let ast = remark()
                .data('settings', this.options.markdown.remark)
                .parse(token.text);
            ast.children = ast.children.map((node, index) => {
                if (node.type === 'heading') {
                    node.depth = this.options.markdown.headingDepth;
                }
                if (node.type === 'code') {
                    if (this.isAPI(ast.children[index - 1])) {
                        if (!node.lang)
                            node.lang = 'xdoc';
                        return this.parseXDoc(node);
                    }
                }
                return node;
            });
            return ast;
        };
        this.isAPI = (node) => {
            return node && node.type === "heading" && node.children[0].value.toLowerCase() === "api";
        };
        this.parseXDoc = (node) => {
            node['xdoc'] = (new XDocASTVisitor_1.default(this.options.visitor)
                .visit((new XDocASTGenerator_1.default(node.value)).generate()));
            return node;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWERvY1BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9YRG9jUGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWlDO0FBQ2pDLDJEQUEwRTtBQUMxRSx5REFBa0Q7QUFDbEQscURBQXlFO0FBOEJ6RTtJQVlFLFlBQVksTUFBYyxFQUFFLE9BQTJCO1FBVi9DLFlBQU8sR0FBc0I7WUFDbkMsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxxQkFBcUI7YUFDNUI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsWUFBWSxFQUFFLENBQUM7YUFDaEI7WUFDRCxPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUE7UUFVRCxVQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ1gsT0FBTyxDQUFDLElBQUksMkJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN6QyxLQUFLLEVBQUU7aUJBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUFBO1FBRU8sa0JBQWEsR0FBRyxDQUFDLEtBQVksRUFBYyxFQUFFO1lBQ25ELDhEQUE4RDtZQUM5RCxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQUU7aUJBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQzlDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFlLENBQUM7WUFDbkMsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDOUMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7aUJBQ2pEO2dCQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7b0JBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7NEJBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7d0JBQ25DLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtxQkFDNUI7aUJBQ0Y7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQTtZQUNGLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFBO1FBQ08sVUFBSyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDO1FBQzNGLENBQUMsQ0FBQTtRQUNPLGNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksd0JBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztpQkFDckQsS0FBSyxDQUNKLENBQUMsSUFBSSwwQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FDOUMsQ0FDRixDQUFDO1lBQ0YsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUE7UUFFTyxXQUFNLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUNoQyxPQUFPLDZCQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM3RCxDQUFDLENBQUE7UUFoREMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Q0EyQ0Y7QUE5REQsNkJBOERDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcmVtYXJrIGZyb20gXCJyZW1hcmtcIjtcbmltcG9ydCBYRG9jQ29tbWVudFBhcnNlciwgeyBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSAnLi9YRG9jQ29tbWVudFBhcnNlcic7XG5pbXBvcnQgWERvY0FTVEdlbmVyYXRvciBmcm9tIFwiLi9YRG9jQVNUR2VuZXJhdG9yXCI7XG5pbXBvcnQgWERvY0FTVFZpc2l0b3IsIHsgWERvY0FTVFZpc2l0b3JPcHRpb25zIH0gZnJvbSBcIi4vWERvY0FTVFZpc2l0b3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBYRG9jUGFyc2VyT3B0aW9ucyB7XG4gIGNvbW1lbnQ6IHtcbiAgICB0eXBlOiAnU0lOR0xFX0hBU0hfQ09NTUVOVCdcbiAgICB8ICdTSU5HTEVfU1RBUl9DT01NRU5UJ1xuICAgIHwgJ0RPVUJMRV9TVEFSX0NPTU1FTlQnXG4gICAgfCAnRE9VQkxFX1NMQVNIX0NPTU1FTlQnXG4gICAgfCAnVFJJUExFX1NMQVNIX0NPTU1FTlQnXG4gICAgfCAnVFJJUExFX1FVT1RFX0NPTU1FTlQnXG4gIH1cbiAgbWFya2Rvd246IHtcbiAgICByZW1hcms6IGFueSxcbiAgICBoZWFkaW5nRGVwdGg6IG51bWJlclxuICB9XG4gIHZpc2l0b3I6IFhEb2NBU1RWaXNpdG9yT3B0aW9ucyB8IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlbWFya05vZGUge1xuICB0eXBlOiBzdHJpbmcsXG4gIGRlcHRoPzogbnVtYmVyLFxuICB2YWx1ZT86IHN0cmluZyxcbiAgbGFuZz86IHN0cmluZ1xuICBjaGlsZHJlbjogUmVtYXJrTm9kZVtdLFxuICBwb3NpdGlvbjoge1xuICAgIHN0YXJ0OiBudW1iZXIsXG4gICAgZW5kOiBudW1iZXJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYRG9jUGFyc2VyIHtcbiAgcHJpdmF0ZSBzb3VyY2VfOiBzdHJpbmc7XG4gIHByaXZhdGUgb3B0aW9uczogWERvY1BhcnNlck9wdGlvbnMgPSB7XG4gICAgY29tbWVudDoge1xuICAgICAgdHlwZTogJ0RPVUJMRV9TVEFSX0NPTU1FTlQnXG4gICAgfSxcbiAgICBtYXJrZG93bjoge1xuICAgICAgcmVtYXJrOiB7fSxcbiAgICAgIGhlYWRpbmdEZXB0aDogMlxuICAgIH0sXG4gICAgdmlzaXRvcjoge31cbiAgfVxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IHN0cmluZywgb3B0aW9ucz86IFhEb2NQYXJzZXJPcHRpb25zKSB7XG4gICAgdGhpcy5zb3VyY2VfID0gc291cmNlO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zIHx8IHt9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc291cmNlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlXztcbiAgfVxuXG4gIHBhcnNlID0gKCkgPT4ge1xuICAgIHJldHVybiAobmV3IFhEb2NDb21tZW50UGFyc2VyKHRoaXMuc291cmNlXykpXG4gICAgICAucGFyc2UoKVxuICAgICAgLmZpbHRlcih0aGlzLmZpbHRlcilcbiAgICAgIC5tYXAodGhpcy5wYXJzZU1hcmtkb3duKVxuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZU1hcmtkb3duID0gKHRva2VuOiBUb2tlbik6IFJlbWFya05vZGUgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKG1hcmtlZC5sZXhlcih0b2tlbi50ZXh0LCB0aGlzLm9wdGlvbnMubWFya2VkKSk7XG4gICAgbGV0IGFzdCA9IHJlbWFyaygpXG4gICAgICAuZGF0YSgnc2V0dGluZ3MnLCB0aGlzLm9wdGlvbnMubWFya2Rvd24ucmVtYXJrKVxuICAgICAgLnBhcnNlKHRva2VuLnRleHQpIGFzIFJlbWFya05vZGU7XG4gICAgYXN0LmNoaWxkcmVuID0gYXN0LmNoaWxkcmVuLm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChub2RlLnR5cGUgPT09ICdoZWFkaW5nJykge1xuICAgICAgICBub2RlLmRlcHRoID0gdGhpcy5vcHRpb25zLm1hcmtkb3duLmhlYWRpbmdEZXB0aDtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLnR5cGUgPT09ICdjb2RlJykge1xuICAgICAgICBpZiAodGhpcy5pc0FQSShhc3QuY2hpbGRyZW5baW5kZXggLSAxXSkpIHtcbiAgICAgICAgICBpZiAoIW5vZGUubGFuZykgbm9kZS5sYW5nID0gJ3hkb2MnO1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlWERvYyhub2RlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9KVxuICAgIHJldHVybiBhc3Q7XG4gIH1cbiAgcHJpdmF0ZSBpc0FQSSA9IChub2RlKSA9PiB7XG4gICAgcmV0dXJuIG5vZGUgJiYgbm9kZS50eXBlID09PSBcImhlYWRpbmdcIiAmJiBub2RlLmNoaWxkcmVuWzBdLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IFwiYXBpXCI7XG4gIH1cbiAgcHJpdmF0ZSBwYXJzZVhEb2MgPSAobm9kZSkgPT4ge1xuICAgIG5vZGVbJ3hkb2MnXSA9IChuZXcgWERvY0FTVFZpc2l0b3IodGhpcy5vcHRpb25zLnZpc2l0b3IpXG4gICAgICAudmlzaXQoXG4gICAgICAgIChuZXcgWERvY0FTVEdlbmVyYXRvcihub2RlLnZhbHVlKSkuZ2VuZXJhdGUoKVxuICAgICAgKVxuICAgICk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlciA9ICh0b2tlbjogVG9rZW4pID0+IHtcbiAgICByZXR1cm4gVG9rZW5UeXBlW3Rva2VuLnR5cGVdID09PSB0aGlzLm9wdGlvbnMuY29tbWVudC50eXBlO1xuICB9XG59Il19