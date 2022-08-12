FROM debian:bullseye

ARG NODE_VERSION
ARG YARN_VERSION

SHELL ["/bin/bash", "-c"]

ENV DEBIAN_FRONTEND=noninteractive
ENV PYTHONUNBUFFERED=1
ENV HOME=/root

RUN touch ~/.bashrc && chmod +x ~/.bashrc

RUN apt-get -y update \
    && apt-get -y install --no-install-recommends \
    ca-certificates \
    curl \
    wget \
    build-essential \
    libssl-dev \
    git \
    vim \
    sudo \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*


## NODE.JS
ENV NODE_VERSION=${NODE_VERSION}

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

RUN echo 'export NVM_DIR="$HOME/.nvm"'                                       >> "$HOME/.bashrc"
RUN echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm' >> "$HOME/.bashrc"
RUN echo '[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion" # This loads nvm bash_completion' >> "$HOME/.bashrc"

ENV PATH ${HOME}/.nvm/versions/node/v$NODE_VERSION/bin:$PATH

RUN source "$HOME/.nvm/nvm.sh" \
    && nvm install $NODE_VERSION \
    && nvm use $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && corepack enable \
    && yarn set version ${YARN_VERSION}

WORKDIR ${HOME}/workspace

CMD ["tail", "-f", "/dev/null"]
