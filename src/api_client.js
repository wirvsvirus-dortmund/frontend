"use strict;"


function getShop(id) {
  return $.getJSON("/api/shops/" + id)
}

function getShops() {
  return $.getJSON("/api/shops")
}
