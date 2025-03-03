import { Link, Button } from "@heroui/react";

export default function App() {
  return (
    <Button
      showAnchorIcon
      as={Link}
      color="primary"
      className="bg-primary-500 hover:bg-primary-600 text-white"
      href="/auth/signup"
      variant="solid"
    >
      Sign up
    </Button>
  );
}
