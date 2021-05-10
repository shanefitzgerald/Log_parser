export const regex = Object.freeze({
  ipaddress: /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/, // ex 168.41.191.40
  btwParens: /\[.*\]/, // ex [09/Jul/2018:10:12:03 +0200]
  btwQuotes: /".*"/ // ex "GET /docs/manage-websites/ HTTP/1.1"
});