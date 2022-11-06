import { HookAPI } from "./HookAPI";
import { NativeClass } from "./NativeClass";
import { Player } from "./Actor";
import { ItemStack } from "./ItemStackBase";

export class Item extends NativeClass {

    constructor(ptr: NativePointer) {
        super(ptr);
    }

    use(itemStack: ItemStack, player: Player): ItemStack {
        return HookAPI.SymCall<ItemStack>("?use@Item@@UEBAAEAVItemStack@@AEAV2@AEAVPlayer@@@Z",ItemStack,this.ptr,itemStack.ptr,player.ptr);
    }

    getSerializedName(): string {
        return HookAPI.SymCall<NativeClass>("?getSerializedName@Item@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ",NativeClass,this.ptr).ptr.string;
    }
}