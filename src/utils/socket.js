import { io } from "socket.io-client";

const socket = io(
  "http://localhost:3001/", // http://localhost:8080/
  {
    path: "", //# socket.io 库默认服务端path为/socket.io
    transports: ["websocket", "xhr-polling", "jsonp-polling"],
  }
);
console.log(socket);

// socket.on("message", (res) => {
//   console.log("#message: ", res);
// });

// socket.emit("eventname", "你好啊！赛利亚");

// socket.on("disconnect", () => {
//   console.log("断开连接");
// });

export default socket;