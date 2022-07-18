const express = require("express")
const sanitizeHTML = require("sanitize-html")

const app = express()

app.listen(3000)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static("public"))
app.set("views", "views")
app.set("view engine", "ejs")

app.get("/", function (req, res) {
  res.render("home")
})
