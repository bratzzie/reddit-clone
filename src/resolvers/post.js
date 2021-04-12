"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResolver = void 0;
var type_graphql_1 = require("type-graphql");
var Post_1 = require("../entities/Post");
var PostResolver = /** @class */ (function () {
    function PostResolver() {
    }
    PostResolver.prototype.posts = function (_a) {
        var em = _a.em;
        return em.find(Post_1.Post, {});
    };
    PostResolver.prototype.post = function (id, _a) {
        var em = _a.em;
        return em.findOne(Post_1.Post, { id: id });
    };
    __decorate([
        type_graphql_1.Query(function () { return [Post_1.Post]; }),
        __param(0, type_graphql_1.Ctx())
    ], PostResolver.prototype, "posts", null);
    __decorate([
        type_graphql_1.Query(function () { return Post_1.Post; }, { nullable: true }),
        __param(0, type_graphql_1.Arg('id', function () { return type_graphql_1.Int; })),
        __param(1, type_graphql_1.Ctx())
    ], PostResolver.prototype, "post", null);
    PostResolver = __decorate([
        type_graphql_1.Resolver()
    ], PostResolver);
    return PostResolver;
}());
exports.PostResolver = PostResolver;