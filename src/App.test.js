import { render } from "@testing-library/react";
import NewPortfolio from "./newui/NewPortfolio";

test("renders without crashing", () => {
  render(<NewPortfolio />);
});
