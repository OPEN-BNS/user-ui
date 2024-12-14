# User Directory Frontend APP
FROM node:22
ENV app_name="User Directory Frontend"
RUN addgroup appgroup
RUN useradd -G appgroup appuser
WORKDIR /user-dir-ui
RUN mkdir -p /user-dir-ui/node_modules/
RUN chown -R appuser /user-dir-ui/node_modules/
COPY public ./public
COPY src ./src
COPY .env .env
COPY package.json .
RUN npm install
USER appuser
EXPOSE 3000
CMD npm start