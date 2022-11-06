//LiteLoaderScript Dev Helper
/// <reference path="d:\LLSE-LIB/dts/HelperLib-master/src/index.d.ts"/> 

import {AutoFish} from "./Kernel/AutoFish";


function PluginInit() {
    ll.registerPlugin("BETweaker","A MCBE plugin that adds features to the game",[1,0,0],{}); 
    
    logger.info("    ____  ____________                    __            ");
    logger.info("   / __ )/ ____/_  __/      _____  ______/ /_____  _____");
    logger.info("  / __  / __/   / / | | /| / / _ \\/ __  / //_/ _ \\/ ___/");
    logger.info(" / /_/ / /___  / /  | |/ |/ /  __/ /_/ /  < /  __/ /  ");
    logger.info("/_____/_____/ /_/   |__/|__/\\___/\\____/_/|_|\\___/_/     ");
    logger.info("                                                       ");
    logger.info("BETweaker Loaded by QingYu");
    AutoFish.InitHook();
}




(() => {
    PluginInit();
})();