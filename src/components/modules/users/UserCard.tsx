import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useAppDispatch } from "@/redux/hook";
import { removeUser } from "@/redux/features/user/userSlice"; 
import { IUser } from "@/types/user";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border border-red-500 px-4 py-3 rounded flex justify-between items-center text-red-600 shadow-sm">
      <span className="font-medium">{user.name}</span>
      <Button
        onClick={() => dispatch(removeUser(user.id))}
        variant="ghost"
        size="icon"
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 size={18} />
      </Button>
    </div>
  );
};

export default UserCard;
