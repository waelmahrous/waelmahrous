/**
 * @jest-environment jsdom
 */

import { describe, test, assert } from "vitest";
import { render } from "@testing-library/react";
import MainDisplay from "./MainDisplay";

describe('Main Display', () => {
    test("just a passing test", () => {
        render(<MainDisplay />);
        assert(true)
    });
});