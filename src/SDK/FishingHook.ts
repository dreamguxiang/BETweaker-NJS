import { HookAPI } from "./HookAPI";
import { Actor } from "./Actor";

export class FishingHook extends Actor {
    constructor(ptr: NativePointer) {
        super(ptr);
    }
    serverHooked() : boolean {
        return HookAPI.SymCall("?_serverHooked@FishingHook@@IEAA_NXZ",Boolean,this.ptr).valueOf();
    }
}