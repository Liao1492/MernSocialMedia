"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: "30mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "30mb", extended: true }));
app.use((0, cors_1.default)());
const CONNECTION_URL = "mongodb+srv://liaonew1492:liaoliaoliao1492@cluster0.o1pez.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose_1.default
    .connect(CONNECTION_URL)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server RUNNING ON PORT ${PORT}`);
    });
})
    .catch((err) => {
    console.log(err);
});
