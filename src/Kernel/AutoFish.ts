import { FishingHook } from "../SDK/FishingHook";

var _updateServer = NativeFunction.fromDescription(NativeTypes.Void,NativeTypes.Pointer)
_updateServer.address = NativePointer.fromSymbol("?_updateServer@FishingHook@@IEAAXXZ")

export namespace AutoFish{
    const fishingHook = new Map();
    export function AutoFish(a1: FishingHook): void {
        if (a1.serverHooked() && !fishingHook.has(a1.ptr.asRawAddress)){
            if(!fishingHook.has(a1.ptr.asRawAddress)){
                fishingHook.set(a1.ptr.asRawAddress, 0);
                return;
            }
        }else if(a1.serverHooked() && fishingHook.get(a1.ptr.asRawAddress) == 0){
            fishingHook.set(a1.ptr.asRawAddress, 1);
            return;
        }else if(!a1.serverHooked() && fishingHook.get(a1.ptr.asRawAddress) == 1){
            const player = a1.getPlayerOwner();
            const item = player.getSelectedItem();
            fishingHook.delete(a1.ptr.asRawAddress);

            const t = item.getItem();
            t.use(item, player);

            player.sendInventory(true);
            setTimeout(() => {
                const player = a1.getPlayerOwner();
                const item = player.getSelectedItem();
                if(!item.isNull()){
                    if (item.getTypeName() == "minecraft:fishing_rod"){
                        item.getItem().use(item, player);
                    }
                }
            }, 500);
        }
    }

    export function InitHook(): void {
        var original_updateServer = _updateServer.hook(function(fishhookptr){
            let fishhook = new FishingHook(fishhookptr);
            AutoFish(fishhook);
            original_updateServer.call(fishhookptr);
        })
    }
}

