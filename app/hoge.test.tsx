import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Hoge from "./hoge";

test("Hoge", () => {
    const onClick = vi.fn();
    render(<Hoge onClick={onClick}/>);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "aaa"}});

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(onClick).toBeCalledWith({ text: "aaa" })
})
