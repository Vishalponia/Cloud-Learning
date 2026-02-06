import { useEffect, useState } from "react";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/admin/contacts")
      .then(res => res.json())
      .then(data => {
        setContacts(data);
        setLoading(false);
      });
  }, []);

  const deleteContact = async (id) => {
    await fetch(`http://localhost:5000/admin/contacts/${id}`, {
      method: "DELETE",
    });

    setContacts(prev => prev.filter(c => c.id !== id));
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 pt-30">
      <h2 className="text-2xl font-bold mb-4">📩 Contact Messages</h2>

      {contacts.length === 0 ? (
        <p>No data found</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(c => (
              <tr key={c.id}>
                <td className="border p-2">{c.name}</td>
                <td className="border p-2">{c.email}</td>
                <td className="border p-2">{c.phone}</td>
                <td className="border p-2">{c.message}</td>
                <td className="border p-2">{c.date}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => deleteContact(c.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
