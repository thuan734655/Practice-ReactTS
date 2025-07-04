import type { Meta, StoryObj } from "@storybook/react";
import { ToastContainer } from "./toast-container";
import { useToast } from "./use-toast";
import { Button } from "../button";

const meta: Meta<typeof ToastContainer> = {
  title: "UI/ToastContainer",
  component: ToastContainer,
  decorators: [
    (Story) => (
      <div>
        <Story />
        <TriggerToastButtons />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ToastContainer>;

export const Default: Story = {
  args: {
    timeout: 3000,
  },
};

// Button để gọi addToast test
const TriggerToastButtons = () => {
  const { addToast } = useToast();

  return (
    <div className="p-4 flex gap-2">
      <Button
        onClick={() =>
          addToast({
            title: "Thành công",
            message: "Đã lưu thành công",
            type: "success",
          })
        }
      >
        Success
      </Button>
      <Button
        onClick={() =>
          addToast({
            title: "Lỗi",
            message: "Có lỗi xảy ra",
            type: "error",
          })
        }
      >
        Error
      </Button>
    </div>
  );
};
