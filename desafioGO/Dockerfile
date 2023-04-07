FROM alpine:latest as BUILDER

ARG GOLANG_VERSION=1.20.3
ENV PATH=$PATH:/usr/local/go/bin
ENV CGO_ENABLED=0

RUN apk update && apk add go gcc bash musl-dev openssl-dev ca-certificates && update-ca-certificates
RUN wget https://dl.google.com/go/go$GOLANG_VERSION.src.tar.gz && tar -C /usr/local -xzf go$GOLANG_VERSION.src.tar.gz

RUN cd /usr/local/go/src && ./make.bash
RUN rm go$GOLANG_VERSION.src.tar.gz
RUN mkdir /app
RUN cd /app && go mod init v2
COPY main.go /app
WORKDIR /app
RUN go build main.go
RUN rm go.mod main.go
RUN chmod +x /app/main

FROM scratch
COPY --from=BUILDER /app /app
WORKDIR /app
CMD ["/app/main"]
