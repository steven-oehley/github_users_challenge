import Avatar from "./Avatar";
import Card from "./Card";
import useFetchUsers from "./useFetchUsers";

export default function App() {
  const { users, loading } = useFetchUsers();

  return (
    <div className="container grid grid-cols-1 gap-8 md:grid-cols-2  p-12 mx-auto">
      {loading ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => (
          <Card
            key={user.id}
            user={user.login}
            label="View Profile"
            link={user.html_url}
          >
            <Avatar imgUrl={user.avatar_url} alt={user.login} />
          </Card>
        ))
      )}
    </div>
  );
}
