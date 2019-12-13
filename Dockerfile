FROM node as builder
RUN mkdir /app
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build
FROM nginx:latest
COPY --from=builder /app/build/ /usr/share/nginx/html


#FROM node as builder
#RUN mkdir /app
#WORKDIR /app
#COPY package*.json /app/
#RUN npm install
#COPY ./ /app/
#RUN npm run build
#
#FROM nginx:1.15
#EXPOSE 80
#COPY --from=builder /app/build/ /usr/share/nginx/html
#COPY --from=builder /app/nginx/nginx.conf /etc/nginx/nginx.conf
#CMD ["nginx", "-g", "daemon off;"]
