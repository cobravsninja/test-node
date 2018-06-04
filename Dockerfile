FROM alpine
RUN apk --no-cache --update add nodejs
COPY app.js /
ENTRYPOINT ["node","/app.js"]
