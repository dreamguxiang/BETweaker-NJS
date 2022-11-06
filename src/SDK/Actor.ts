import {HookAPI } from "./HookAPI";
import { ItemStack } from "./ItemStackBase";
import { NativeClass } from "./NativeClass";

export class Actor extends NativeClass {

    constructor(ptr: NativePointer) {
        super(ptr);
    }

     getPlayerOwner(): Player {
        return HookAPI.SymCall<Player>("?getPlayerOwner@Actor@@QEBAPEAVPlayer@@XZ",Player,this.ptr);
    }
    
}

export class Mob extends Actor {

    constructor(ptr: NativePointer) {
        super(ptr);
    }
}

export class Player extends Mob {
    constructor(ptr: NativePointer) {
        super(ptr);
    }
    
    getSelectedItem(): ItemStack {
        return HookAPI.SymCall<ItemStack>("?getSelectedItem@Player@@QEBAAEBVItemStack@@XZ",ItemStack,this.ptr);
    }

    sendInventory(bool: boolean) {
        HookAPI.SymCall("?sendInventory@ServerPlayer@@UEAAX_N@Z",Boolean,this.ptr,bool);
    }
}