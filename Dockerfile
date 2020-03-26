FROM node:13.10-stretch AS BUILDER


WORKDIR /opt/frontend
COPY package.json package-lock.json babel.config.js /opt/frontend/
RUN npm install
COPY public /opt/frontend/public
COPY src /opt/frontend/src
RUN npm run build


FROM nginx:1.17

COPY --from=BUILDER /opt/frontend/dist /var/www/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
