sudo apt-get update

sudo apt-get install -y mongodb-org

mkdir data

sudo mongod --dbpath=data --port 27017