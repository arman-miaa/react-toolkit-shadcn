import { AddUserModal } from "@/components/modules/users/AddUserModal";
import UserCard from "@/components/modules/users/UserCard";

import { selectUsers } from "@/redux/features/user/userSlice"; 
import { useAppSelector } from "@/redux/hook";

const User = () => {
  const users = useAppSelector(selectUsers); 


  return (
    <div className="container mx-auto">
      <div className="flex justify-end items-center my-4 gap-5">
        <h1 className="mr-auto text-xl font-semibold">User</h1>
        <AddUserModal />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default User;
