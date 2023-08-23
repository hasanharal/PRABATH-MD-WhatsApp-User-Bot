FROM quay.io/afx-abu/abu-md
RUN git clone https://github.com/prabathLK/PRABATH-MD /root/prabathLK/
WORKDIR /root/prabathLK/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
