"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personController_1 = require("../controllers/personController");
const router = (0, express_1.Router)();
router.get('/people', personController_1.getAllPeople);
router.post('/people', personController_1.createPerson);
exports.default = router;
