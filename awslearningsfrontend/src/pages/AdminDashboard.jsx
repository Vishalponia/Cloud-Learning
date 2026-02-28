import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/admin/contacts", {
        headers: {
          Authorization: token
        }
      });

      const data = await res.json();

      setContacts(data.contacts || []);
      setUsers(data.users || []);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <h3>Contacts</h3>
      {contacts.map(c => (
        <div key={c.id}>
          {c.name} - {c.email}
        </div>
      ))}

      <h3>Registered Users</h3>
      {users.map(u => (
        <div key={u.id}>
          {u.name} - {u.email} ({u.role})
        </div>
      ))}
    </div>
  );
}
