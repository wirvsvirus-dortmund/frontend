FROM node:13.10-stretch AS BUILDER


COPY package.json package-lock.json babel.config.js /opt/frontend/
COPY public /opt/frontend/public
COPY src /opt/frontend/src


WORKDIR /opt/frontend
RUN npm install \
	&& npm run build


FROM nginx:1.17

COPY --from=BUILDER /opt/frontend/dist /var/www/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
