import {run} from "@apple-jxa/node";
import alfred from "@alfred-workflows/core";
//
const name = alfred.input;
run((name) => {
    let application = Application("ITerm");
    let window = application.createWindowWithProfile(name);
    window.frontmost = true;
}, name).then();