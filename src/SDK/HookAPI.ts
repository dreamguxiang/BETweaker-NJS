export class HookAPI{

    static SymCall<T>(symbol : string,type: (new (ptr :NativePointer) => T),...params:any[]):T {  
        let func = NativeFunction.fromSymbol(symbol);
        return new type(func.call(...params));
    }
}
