From node:latest
WORKDIR /apps
ADD ..
RUN npm insall
CMD["node", "index.js"]
