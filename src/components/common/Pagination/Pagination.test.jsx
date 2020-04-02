import React from 'react';
import {create} from 'react-test-renderer';
import Pagination from "./Pagination";

describe("new test module", () => {
    test('test1', () => {
        const component = create(<Pagination totalItemCount={15} pageSize={1} portionSize={10} />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.length).toBe(10);
    });
    test('test2', () => {
        const component = create(<Pagination totalItemCount={15} pageSize={1} portionSize={10} />);
        const root = component.root;
        const button = root.findByType("button");
        expect(button.length).toBe(1);
    });
});