FROM node
add package.json /
run npm install
add server.js /
add index.html /
EXPOSE 3000
cmd ["npm","start"]
