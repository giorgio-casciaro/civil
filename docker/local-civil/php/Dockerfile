FROM php:fpm
#https://github.com/docker-library/php/blob/2f96a00aaa90ee1c503140724936ca7005273df5/7.0/fpm/alpine/Dockerfile

MAINTAINER Giorgio Casciaro <giorgio.casciaro@gmail.com>

# PHP extension
# RUN requirements="zlib1g-dev libicu-dev git curl" \
#
#     && apk add --no-cache zlib\
#     && apk add --no-cache icu\

RUN docker-php-ext-install bcmath
#      && docker-php-ext-install pdo_mysql \
#      && docker-php-ext-install intl \
#      && docker-php-ext-install zip


# Install composer
RUN curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/bin/composer

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
