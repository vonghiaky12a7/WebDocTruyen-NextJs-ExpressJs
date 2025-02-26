import { Button, Link } from "@heroui/react";

export default function App() {
  return (
    <Button
      as={Link}
      color="primary"
      href="https://github.com/heroui-inc/heroui"
      variant="solid"
      className="bg-blue-500 text-white rounded-full"
    >
      Button Link
    </Button>
  );
}
