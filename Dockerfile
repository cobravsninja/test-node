FROM alpine
RUN apk --no-cache --update add nodejs && rm /var/cache/apk/*
COPY app.js /
ENTRYPOINT ["node","/app.js"]
