# Use the official PHP image from the dockerhub
FROM php:8-apache

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql

# Copy source files
COPY src/. /var/www/html/.

# Change the ownership of the application directory to www-data (Apache user)
RUN chown -R www-data:www-data /var/www/html/

# Expose port 80 for the Apache web server
EXPOSE 80
