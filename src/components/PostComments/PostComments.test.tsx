import { render, screen, fireEvent } from "@testing-library/react";
import PostComments from "./index";

describe("PostComments Component", () => {
  it("deve adicionar dois comentários na lista", async () => {
    render(<PostComments />);

    const inputComment = screen.getByTestId("input-comment");
    const sendButton = screen.getByTestId("send-button");

    fireEvent.change(inputComment, {
      target: { value: "Primeiro comentário de teste." },
    });
    fireEvent.click(sendButton);

    fireEvent.change(inputComment, {
      target: { value: "Segundo comentário de teste." },
    });
    fireEvent.click(sendButton);

    const comments = await screen.findAllByTestId("comment-item");
    expect(comments).toHaveLength(2);

    expect(
      screen.getByText("Primeiro comentário de teste.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Segundo comentário de teste.")
    ).toBeInTheDocument();
  });
});
