USER Directory User Interface in React

- Build using docker

  docker build -t <IMAGE_NAME> .

- Run using docker

  docker create network user-dir-network

  docker run -d -p 9090:9090 --name user-dir-ui --network user-dir-network --restart always --log-opt mode=non-blocking --log-opt max-size=10M --log-opt max-file=10 <IMAGE_NAME>

- Build and Run without Docker

    - Install Node

    - npm install

    - npm start : This will spun up a server at http://localhost:3000
