require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });

io.on("connection", (socket) => {
	socket.on("message", (msg, userName, groupId) => {
		io.emit("message", msg, userName, groupId);
	});

	socket.on("file", (msg, userName, groupId) => {
		io.emit("file", msg, userName, groupId);
	});
});

const userRoute = require("./routes/users");
const chatsRoute = require("./routes/chats");
const groupRoute = require("./routes/groups");

const dbConnection = require("./db/connect");
const cors = require("cors");
const User = require("./models/users");
const chats = require("./models/chats");
const Group = require("./models/group");

app.use(express.json());
app.use(cors({ origin: process.env.ORIGIN_IP }));

User.hasMany(chats);
chats.belongsTo(User);

Group.belongsToMany(User, { through: "UserGroups" });
User.belongsToMany(Group, { through: "UserGroups" });

chats.belongsTo(Group);
Group.hasMany(chats);

app.use(userRoute);
app.use(chatsRoute);
app.use(groupRoute);


(async () => {
  try {
    await dbConnection.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
    console.log("Models synced to the database.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.listen(3000, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${process.env.PORT}`);
});
