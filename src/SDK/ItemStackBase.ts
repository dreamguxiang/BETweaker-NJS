import { HookAPI } from "./HookAPI";
import { NativeClass } from "./NativeClass";
import {Item} from "./Item";

export class ItemStackBase extends NativeClass {

    constructor(ptr: NativePointer) {
        super(ptr);
    }

    getItem(): Item {
        return HookAPI.SymCall<Item>("?getItem@ItemStackBase@@QEBAPEBVItem@@XZ",Item,this.ptr);
    }

    isNull(): boolean {
        return HookAPI.SymCall("?isNull@ItemStackBase@@QEBA_NXZ",Boolean,this.ptr).valueOf();
    }

    getTypeName(): string {
        return this.getItem().getSerializedName();
    }
}

export class ItemStack extends ItemStackBase {
    constructor(ptr: NativePointer) {
        super(ptr);
    }
}