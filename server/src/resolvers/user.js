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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
var type_graphql_1 = require("type-graphql");
var argon2_1 = __importDefault(require("argon2"));
var User_1 = require("../entities/User");
var UsernamePasswordInput = /** @class */ (function () {
    function UsernamePasswordInput() {
    }
    __decorate([
        type_graphql_1.Field(function () { return String; })
    ], UsernamePasswordInput.prototype, "username", void 0);
    __decorate([
        type_graphql_1.Field(function () { return String; })
    ], UsernamePasswordInput.prototype, "password", void 0);
    UsernamePasswordInput = __decorate([
        type_graphql_1.InputType()
    ], UsernamePasswordInput);
    return UsernamePasswordInput;
}());
var FieldError = /** @class */ (function () {
    function FieldError() {
    }
    __decorate([
        type_graphql_1.Field(function () { return String; })
    ], FieldError.prototype, "field", void 0);
    __decorate([
        type_graphql_1.Field(function () { return String; })
    ], FieldError.prototype, "message", void 0);
    FieldError = __decorate([
        type_graphql_1.ObjectType()
    ], FieldError);
    return FieldError;
}());
var UserResponse = /** @class */ (function () {
    function UserResponse() {
    }
    __decorate([
        type_graphql_1.Field(function () { return [FieldError]; }, { nullable: true })
    ], UserResponse.prototype, "errors", void 0);
    __decorate([
        type_graphql_1.Field(function () { return User_1.User; }, { nullable: true })
    ], UserResponse.prototype, "user", void 0);
    UserResponse = __decorate([
        type_graphql_1.ObjectType()
    ], UserResponse);
    return UserResponse;
}());
var UserResolver = /** @class */ (function () {
    function UserResolver() {
    }
    UserResolver.prototype.me = function (_a) {
        var req = _a.req, em = _a.em;
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!req.session.userId) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, em.findOne(User_1.User, { id: req.session.userId })];
                    case 1:
                        user = _b.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserResolver.prototype.register = function (options, _a) {
        var em = _a.em, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var hashedPassword, user, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (options.username.length <= 2) {
                            return [2 /*return*/, {
                                    errors: [
                                        {
                                            field: "username",
                                            message: "Username should be longer than 2 characters",
                                        },
                                    ],
                                }];
                        }
                        if (options.password.length <= 2) {
                            return [2 /*return*/, {
                                    errors: [
                                        {
                                            field: "password",
                                            message: "Password should be longer than 2 characters",
                                        },
                                    ],
                                }];
                        }
                        return [4 /*yield*/, argon2_1.default.hash(options.password)];
                    case 1:
                        hashedPassword = _b.sent();
                        user = em.create(User_1.User, {
                            username: options.username,
                            password: hashedPassword,
                        });
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, em.persistAndFlush(user)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _b.sent();
                        if (err_1.code === "23505") {
                            return [2 /*return*/, {
                                    errors: [
                                        {
                                            field: "username",
                                            message: "Username already taken",
                                        },
                                    ],
                                }];
                        }
                        return [3 /*break*/, 5];
                    case 5:
                        req.session.userId = user.id;
                        return [2 /*return*/, { user: user }];
                }
            });
        });
    };
    UserResolver.prototype.login = function (options, _a) {
        var em = _a.em, req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var user, valid;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, em.findOne(User_1.User, { username: options.username })];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, {
                                    errors: [
                                        {
                                            field: "username",
                                            message: "Such username doesn't exist yet!",
                                        },
                                    ],
                                }];
                        }
                        return [4 /*yield*/, argon2_1.default.verify(user.password, options.password)];
                    case 2:
                        valid = _b.sent();
                        if (!valid) {
                            return [2 /*return*/, {
                                    errors: [
                                        {
                                            field: "password",
                                            message: "Incorrect Password",
                                        },
                                    ],
                                }];
                        }
                        req.session.userId = user.id;
                        return [2 /*return*/, {
                                user: user,
                            }];
                }
            });
        });
    };
    __decorate([
        type_graphql_1.Query(function () { return User_1.User; }, { nullable: true }),
        __param(0, type_graphql_1.Ctx())
    ], UserResolver.prototype, "me", null);
    __decorate([
        type_graphql_1.Mutation(function () { return UserResponse; }),
        __param(0, type_graphql_1.Arg("options", function () { return UsernamePasswordInput; })),
        __param(1, type_graphql_1.Ctx())
    ], UserResolver.prototype, "register", null);
    __decorate([
        type_graphql_1.Mutation(function () { return UserResponse; }),
        __param(0, type_graphql_1.Arg("options", function () { return UsernamePasswordInput; })),
        __param(1, type_graphql_1.Ctx())
    ], UserResolver.prototype, "login", null);
    UserResolver = __decorate([
        type_graphql_1.Resolver()
    ], UserResolver);
    return UserResolver;
}());
exports.UserResolver = UserResolver;
