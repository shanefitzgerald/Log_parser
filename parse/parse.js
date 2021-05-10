import { regex } from '../const/regex.js';

export function parseLine(line) {
  const [user, userAgent] = line.split(/"-"/);
  const [ip] = user.match(regex.ipaddress);
  const [timeStamp] = user.match(regex.btwParens);
  const [httpReq] = user.match(regex.btwQuotes);
  const [method, url, protocol] = httpReq.replace(/"/g, '').split(' ');

  return {
    ip,
    timeStamp,
    method,
    url,
    protocol,
    userAgent
  };
}

export function filterEmptyLines(line) {
  return line !== '';
}

export function parseLogs(logfile) {
  return logfile.toString().split('\n')
    .filter(filterEmptyLines)
    .map(parseLine);
}