import {render,screen} from "@testing-library/react"
import App from "./App"

test("header renders with react component testing tutorial in the document",() => {
    render(<App />);
    const linkElement = screen.getByText(/This is React Component Testing Tutorial/i);
    expect(linkElement).toBeInTheDocument();
});

test("render login component in the document",() => {
    render(<App />);
    const childElement = screen.getByLabelText("Email");
    expect(childElement).toBeInTheDocument(); 
})