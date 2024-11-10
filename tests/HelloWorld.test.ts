// tests/playground.test.ts

import { describe, it, expect } from 'vitest'

// 在这里编写你的 TypeScript 代码片段和测试
describe('TypeScript Playground', () => { //class TestPlayground(unittest.TestCase):

    it('should run simple TypeScript logic', () => { //def test_simple_logic(self):
        function add(a: number, b: number): number {
            return a + b;
        }

        const result = add(2, 3);
        expect(result).toBe(5);
    });

    it('should test a custom logic', () => { //def test_custom_logic(self):
        const greet = (name: string): string => `Hello, ${name}!`;
        expect(greet('World')).toBe('Hello, World!');
    });
});
