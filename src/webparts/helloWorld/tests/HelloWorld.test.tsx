/// <reference types="mocha" />

import * as React from "react";
import { assert, expect } from "chai";
import { mount } from "enzyme";
import HelloWorld from "../components/HelloWorld";
import * as sinon from "sinon";

describe("<HelloWorld />", () => {
    const descTxt: string = "TestingThisOneOut";
    let renderedElement: any;

    before(() => {
        renderedElement = mount(<HelloWorld description={descTxt} />);
    });

    // test for checking if it is working
    it("Should do something", () => {
        assert.ok(true);
    });

    it("<HelloWorld /> should render something", () => {
        expect(renderedElement.find("p")).to.be.exist;
    });
});
