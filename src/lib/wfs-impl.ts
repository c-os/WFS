

export abstract class WFSImpl {
    // 
    abstract access(path: string, mode?: any): Promise<void>;
    abstract accessSync(path:string, mode?: any): void;
    // 
    abstract appendFile(path: string, data: string, options?: any): Promise<void>;
    abstract appendFileSync(path: string, data: string, options?: any): void;
    // 
    abstract chmod(path: string, mode: any): Promise<void>;
    abstract chmodSync(path: string, mode: any): void;
    // 
    abstract chown(path: string, uid: any, gid: any): Promise<void>;
    abstract chownSync(path: string, uid: any, gid: any): void;
    // 
    abstract close(fd: number): Promise<void>;
    abstract closeSync(fd: number): void;
    // 
    abstract readonly constants: any;
    // 
    abstract copyFile(src: string, dest: string, flags?: any): Promise<void>;
    abstract copyFileSync(src: string, dest: string, flags?: any): void;
    //
    abstract createReadStream(path: string, options?: any): void;
}