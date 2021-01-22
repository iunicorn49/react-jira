import { useEffect, useState } from "react";

interface User {
  name: string;
  personId: string | number;
  id?: string | number;
}

export const SearchPanel = () => {
  const [param, setParam] = useState<User>({
    name: "",
    personId: "",
    id: "",
  });
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("").then(async (response) => {
      if (response.ok) {
      }
    });
  }, [param]);

  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={(e) =>
            setParam({
              ...param,
              personId: e.target.value,
            })
          }
        >
          <option value={""}>负责人</option>
          {users.map((user, index) => (
            <option key={index} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
