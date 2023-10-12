docker run --name mongodb -d --network mongodb -p 27017:27017 -v $(pwd)/data:/data/db mongodb/mongodb-community-server:7.0.0-ubuntu2204
