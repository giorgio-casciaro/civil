FROM nginx:stable-alpine

MAINTAINER Giorgio Casciaro <giorgio.casciaro@gmail.com>

FROM nginx:latest
ADD ./default.conf /etc/nginx/conf.d/

# PHP extension
# RUN requirements="zlib1g-dev libicu-dev git curl" \
#
#     && apk add --no-cache zlib\
#     && apk add --no-cache icu\

# RUN apk add --no-cache curl
#    && docker-php-ext-install pdo_mysql \
#    && docker-php-ext-install intl \
#    && docker-php-ext-install zip


# Install composer
# RUN curl -sS https://getcomposer.org/installer | php \
#     && mv composer.phar /usr/bin/composer

# Add the application
#ADD . /app
#WORKDIR /app
#WORKDIR /app
#RUN ls

# Install dependencies
# RUN composer install -o
# phpdocumentor
# RUN composer global require "phpdocumentor/phpdocumentor:2.*"
# phpunit
# RUN composer global require "phpunit/phpunit=5.5.*"

#WORKDIR /app

# Ensure that the production container will run with the www-data user
#RUN chown www-data /app
