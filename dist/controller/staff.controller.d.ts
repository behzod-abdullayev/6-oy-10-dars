import type { NextFunction, Request, Response } from "express";
export declare const getAllstaffs: (req: Request, res: Response, next: NextFunction) => Promise<Response>;
export declare const getOneStaff: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
export declare const addStaff: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
export declare const UpdateStaff: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
export declare const deleteStaff: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
//# sourceMappingURL=staff.controller.d.ts.map