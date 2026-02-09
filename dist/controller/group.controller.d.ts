import type { NextFunction, Request, Response } from "express";
export declare const getAllGroups: (req: Request, res: Response, next: NextFunction) => Promise<Response>;
export declare const getOneGroup: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
export declare const addGroup: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
export declare const UpdateGroup: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
export declare const deleteGroup: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
//# sourceMappingURL=group.controller.d.ts.map