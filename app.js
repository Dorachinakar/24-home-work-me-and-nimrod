const express = require("express");
const app = express();
const mongoose = require("mongoose");
const client = require("./models/client");
const port = 3000;
const getAllClients = require("./controlers/clientControler");
const getAllStores = require("./controlers/storeControler");
const Store = require("./models/store");
const order = require("./models/order");
const store = require("./models/store");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

//all client requested
app.post("/client.html", function (req, res) {
  let Client = new client(req.body);
  Client.save((err, client) => {
    console.log(client);
    console.log(err);
  });
  res.json(client);
});

app.get("/showAllClients", (req, res) => {
  client.find({})
    .then((client) => res.json(client))
    .catch((err) => reject(err));
});
app.get("/allclients", (req, res) => {
  getAllClients
    .getAllClients()
    .then((client) => res.json(client))
    .catch((err) => reject(err));
});

app.get("/clientsByName", (req, res) => {
  let { name } = req.query;
  client
    .find({ name })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.patch("/updateaClient/:id", (req, res) => {
  client.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.send("succes");
      }
    }
  );
});
//all store requested
app.post("/insertallstores", function (req, res) {
  let store = new Store(req.body);
  store.save((err, store) => {
    console.log(store);
    console.log(err);
    res.json(store);
  });
});

app.get("/getAllStore/:id", (req, res) => {
  Store.find({_id:req.params.id})
    .then((store) => res.json(store))
    .catch((err) => console.log(err));
});
app.get("/getAllStorebyname/:name", (req, res) => {
  Store.find({name:req.params.name})
    .then((store) => res.json(store))
    .catch((err) => console.log(err));
});


app.get("/allstore", (req, res) => {
  getAllStores
    .getAllStores()
    .then((store) => res.json(store))
    .catch((err) => console.log(err));
});

app.patch("/updateStore/:id", (req, res) => {
  Store.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { adress: "lmerhav 102" } },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.send("succes");
      }
    }
  );
});

//all order request

app.get("/getallorders", function (req, res) {
  order
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.patch("/order/:id", function (req, res) {
  order
    .findByIdAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then(() => {
      res.send("secsses");
    })
    .catch(() => {
      res.send("err");
    });
});
app.post("/insertallorders", function (req, res) {
  let Order = new order(req.body);
  Order.save((err, order) => {
    console.log(order);
    console.log(err);
    res.json(order);
  });
});
/* app.post("/insertallstores", function (req, res) {
  let store = new Store(req.body);
  store.save((err, store) => {
    console.log(store);
    console.log(err);
    res.json(store);
  });
});
app.post("/insertallorders", function (req, res) {


  let order = new Order(req.body);
  order.save((err, order) => {
    console.log(order);
    console.log(err);
    res.json(order);
  });
});





app.get("/client.html", (req, res) => {
  res.send("add client");
  newclient.save(function (err, newclient) {
    if (err) return console.error(err);
    console.log(newclient);
    console.log("Document inserted succussfully!");
  });
});




app.get("/getallstores", function (req, res) {
  Store.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/getallorders", function (req, res) {
  Order.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
 */

/* 


app.get("/newclient", (req, res) => {
  let newclient = new Client({
    name: "dor",
    adress: "dsfssffsf",
    isVip: true,
    phone: "fdsfsdfsdfd",
  });
  newclient.save((err, stud) => {
    console.log(err);
    console.log(stud);
    res.json(newclient);
  });

   res.json(newclient);
}); */

/* app.get("/student", (req, res) => {
    students = new student({
      name: "yosi",
      grade: 78,
      age: 27,
    });
    students.save((err, student) => {
      console.log(err);
      console.log(student);
      res.send("1111");
    });
  }); */

/* app.get("/newstore", (req, res) => {
  let store = new Store(req.body);
  store.save((err, store) => {
    console.log(err);
    console.log(store);
    res.send("1111");
  });
}); */

/* app.get("/neworder",(req,res)=>{
      
})
 */

//added user with model.
// app.get("/add-client", (req, res) => {
//   const { name, adress,isVip, phone } = req.body;
//   const client = new client({ name, adress,isVip, phone });
//   client
//     .save()
//     .then((client) => res.json(client))
//     .catch((err) => res.json(err));
// });

mongoose
  .connect("mongodb://0.0.0.0:27017/ten-wolt")
  .then(() => {
    app.listen(port, () => {
      console.info(`start server start listening on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
