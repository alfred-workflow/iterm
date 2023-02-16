import {run} from "@apple-jxa/node";
import alfred from "@alfred-workflows/core";
//
const name = alfred.input;
await run((name) => {
    let application = Application("ITerm");
    let window = application.createWindowWithProfile(name);
    window.frontmost = true;
}, name);