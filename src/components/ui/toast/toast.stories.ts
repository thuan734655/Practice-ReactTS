import type { Meta, StoryObj } from "@storybook/react";
import { Toast, type ToastProps } from "./toast";
import { IconApp } from "@/assets/icon";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    title: "Thông báo",
    message: "Đây là nội dung của toast.",
  },
};

export const Success: Story = {
  args: {
    title: "success",
    message: "Thao tác thành công.",
  },
};

export const Error: Story = {
  args: {
    title: "error",
    message: "Có lỗi xảy ra!",
  },
};

export const WithDismissAction: Story = {
  args: {
    title: "Thông báo có nút tắt",
    message: "Bạn có thể tắt thông báo này.",
    onDismiss: () => alert("Toast dismissed!"),
  },
};
