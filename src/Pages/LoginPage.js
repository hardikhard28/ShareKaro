import React from "react";

const LoginPage = () => {
  return (
    <div>
      <div className="w-96 h-96 bg-slate-600 rounded-lg">
        <div>
          <p>CodeSync</p>
          <p>Realtime collab</p>
        </div>
        <div>
          <p>Paste invitation room id</p>
          <input name="room_id" placeholder="ROOM ID" />
          <input name="username" placeholder="USER NAME" />
          <button>Join</button>
          <p>If you dont have an invite, click here to create one</p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
