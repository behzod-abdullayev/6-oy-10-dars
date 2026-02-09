import type { NextFunction, Request, Response } from "express";
export declare const getAllTeachers: (req: Request, res: Response, next: NextFunction) => Promise<Response>;
export declare const getOneTeacher: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
export declare const addTeacher: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
export declare const UpdateTeacher: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
export declare const deleteTeacher: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
//# sourceMappingURL=teacher.controller.d.ts.map