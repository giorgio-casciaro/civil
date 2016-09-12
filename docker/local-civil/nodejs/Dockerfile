FROM node:6.5-slim

RUN useradd --user-group --create-home --shell /bin/false app &&\
    cd $(npm root -g)/npm && npm install fs-extra && sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js



ENV HOME=/home/app

USER app
#USER root
WORKDIR $HOME
