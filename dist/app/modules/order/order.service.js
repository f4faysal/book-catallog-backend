"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const data = Object.assign({ userId }, payload);
    const result = yield prisma_1.default.order.create({
        data,
    });
    return result;
});
const getAllFromDB = (userId, role) => __awaiter(void 0, void 0, void 0, function* () {
    if (role === "admin") {
        const result = yield prisma_1.default.order.findMany({
            include: {
                user: true,
            },
        });
        return result;
    }
    if (role === "customer") {
        const result = yield prisma_1.default.order.findMany({
            where: {
                userId,
            },
            include: {
                user: true,
            },
        });
        return result;
    }
});
const getByIdFromDB = (orderId, userId, role) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the user is an admin (no further checks required)
    if (role === 'admin') {
        const adminResult = yield prisma_1.default.order.findUnique({
            where: {
                id: orderId,
            },
            include: {
                user: true,
            },
        });
        return adminResult;
    }
    if (role === 'customer') {
        const customerResult = yield prisma_1.default.order.findUnique({
            where: {
                id: orderId,
            },
            include: {
                user: true,
            },
        });
        if (!customerResult) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Order not found');
        }
        if (customerResult.userId !== userId) {
            throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Unauthorized: You do not have permission to access this order');
        }
        return customerResult;
    }
});
exports.OrderService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB
};
