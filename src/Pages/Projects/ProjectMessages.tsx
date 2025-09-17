import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../../service/Firebase";

export default function Messages() {
  const { id } = useParams();
  const [messages, setMessages] = useState<any[]>([]);
  const [newMsg, setNewMsg] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "Open_Projects", id!, "messages"),
      orderBy("createdAt", "asc")
    );
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, [id]);

  const sendMessage = async () => {
    if (!newMsg.trim()) return;
    const user = auth.currentUser;
    await addDoc(collection(db, "projects", id!, "messages"), {
      sender: user?.email,
      text: newMsg,
      createdAt: serverTimestamp(),
    });
    setNewMsg("");
  };

  return (
    <div className="mt-6 border rounded p-4 bg-gray-50">
      <h2 className="font-semibold mb-2">Messages</h2>
      <div className="h-40 overflow-y-auto border p-2 bg-white mb-2">
        {messages.map((m) => (
          <p key={m.id} className="mb-1">
            <span className="font-bold">{m.sender}: </span>{m.text}
          </p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Type message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
