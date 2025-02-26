"use client";

import Avatar from "@/app/components/Avatar";
import Button from "@/app/components/Button";

type RightNavProps = {
  isLoggedIn: boolean;
};

const RightNav = ({ isLoggedIn }: RightNavProps) => {
  return <div>{isLoggedIn ? <Avatar /> : <Button />}</div>;
};

export default RightNav;
