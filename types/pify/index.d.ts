// Type definitions for pify
// Project: https://github.com/sindresorhus/pify
// Definitions by: Sam Verschueren <https://github.com/samverschueren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface PifyOptions {
    multiArgs?: boolean,
    include?: [string | RegExp],
    exclude?: [string | RegExp],
    excludeMain?: boolean
}

declare function pify(input: any, promiseModule?: Function, options?: PifyOptions): any;
declare function pify<F extends (...args: any[]) => any>(input: Function, promiseModule?: Function, options?: PifyOptions): F;
declare function pify(input: any, options?: PifyOptions): any;
declare function pify<F extends (...args: any[]) => any>(input: Function, options?: PifyOptions): F;

declare namespace pify { }
export = pify;
