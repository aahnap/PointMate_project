
import { User } from "lucide-react";

interface UserIconProps {
  size?: number;
}

const UserIcon = ({ size = 24 }: UserIconProps) => {
  return <User size={size} />;
};

export default UserIcon;
