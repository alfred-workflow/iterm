import alfred from "@alfred-workflows/core";

describe("Test", () => {
    test("index", () => {
        import('../src/index').then();
    });
    test("action", () => {
        // import('../src/action').then().catch(() => {});
    });
});