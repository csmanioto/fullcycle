FROM mysql/mysql-server:8.0.23


WORKDIR /root

ENV MYSQL_DATABASE=nodedb
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_ROOT_HOST=%
ENV TZ=America/SaoPaulo

EXPOSE 3306:3306

COPY ./create_db.sql /root/
CMD ["--default-authentication-plugin=mysql_native_password"]
