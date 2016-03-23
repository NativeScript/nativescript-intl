/// <reference path="android17.d.ts" />
/// <reference path="ios.d.ts" />

interface Map<K, V> {
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V;
    has(key: K): boolean;
    set(key: K, value: V): Map<K, V>;
    size: number;
    keys(): Array<K>;
    values(): Array<V>;
}
declare var Map: {
    new <K, V>(): Map<K, V>;

    // needed by Angular
    // alexeagle: PATCHED
    new<K, V>(m: Map<K, V>): Map<K, V>;
    new<K, V>(l: Array<any>): Map<K, V>;
    prototype: Map<any, any>;
}
