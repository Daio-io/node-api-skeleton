sudo apt-get update

sudo apt-get install -y mongodb-org

sudo mkdir data

chmod +x data

sudo mongod --dbpath=data --port 27017