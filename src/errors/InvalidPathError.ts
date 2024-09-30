
export class InvalidPathError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidPathError';
    }
}