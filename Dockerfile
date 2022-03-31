FROM node:14-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN nmp install
ADD . .
ENV NODE_ENV production
RUN nmp run build
RUN nmp prune --production
CMD ["npm", "start"]
EXPOSE 3000
