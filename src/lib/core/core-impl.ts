


export abstract class IDirentImpl {
    abstract readonly name: string;
    abstract isBlockDevice(): boolean;
    abstract isCharacterDevice(): boolean;
    abstract isDirectory(): boolean;
    abstract isFIFO(): boolean;
    abstract isFile(): boolean;
    abstract isSocket(): boolean;
    abstract isSymbolicLink(): boolean;
}


export abstract class FSWatcherImpl {
    abstract close(): void;
}

export abstract class ReadStreamImpl {
    abstract readonly bytesRead: number;
    abstract readonly path: string;
    abstract readonly pending: boolean;
}

export abstract class WriteStreamImpl {
    abstract readonly bytesWritten: number;
    abstract readonly path: string;
    abstract readonly pending: boolean;
}

export abstract class StatsImpl {
    abstract isBlockDevice(): boolean;
    abstract isCharacterDevice(): boolean;
    abstract isDirectory(): boolean;
    abstract isFIFO(): boolean;
    abstract isFile(): boolean;
    abstract isSocket(): boolean;
    abstract isSymbolicLink(): boolean;
    abstract readonly dev: number | bigint;
    abstract readonly ino: number | bigint;
    abstract readonly mode: number | bigint;
    abstract readonly nlink: number | bigint;
    abstract readonly uid: number | bigint;
    abstract readonly gid: number | bigint;
    abstract readonly rdev: number | bigint;
    abstract readonly size: number | bigint;
    abstract readonly blksize: number | bigint;
    abstract readonly blocks: number | bigint;
    abstract readonly atimeMs: number;
    abstract readonly mtimeMs: number;
    abstract readonly ctimeMs: number;
    abstract readonly birthtimeMs: number;
    abstract readonly atime: Date;
    abstract readonly mtime: Date;
    abstract readonly ctime: Date;
    abstract readonly birthtime: Date;
}


