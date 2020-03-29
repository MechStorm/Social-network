import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe('Test ProfileStatus Component', () => {
    test('testing changing span on input', () => {
        const component = create(<ProfileStatus status={"Hello!"}/>);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe("Hello!");
    });
    test('testing value in span', () => {
        const component = create(<ProfileStatus status={"Hello!"}/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe("Hello!");
    });
    test('testing callback', () => {
        const testingCallback = jest.fn();
        const component = create(<ProfileStatus status={"Hello!"} updateStatus={testingCallback}/>);
        const instance = component.getInstance();
        instance.props.updateStatus();
        expect(testingCallback.mock.calls.length).toBe(1);
    });
    test('testing input error', () => {
        const component = create(<ProfileStatus status={"Hello!"}/>);
        const root = component.root;
        expect(() => {
            const input = root.findByType('input');
        }).toThrow();
    });
    test('testing having status', () => {
        const component = create(<ProfileStatus status={"Hello!"}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Hello!");
    });
    test('testing having span elements', () => {
        const component = create(<ProfileStatus status={"Hello!"}/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    });
});