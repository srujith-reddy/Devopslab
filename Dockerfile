FROM nginx:latest
COPY regform.html /usr/share/nginx/html/
COPY regform.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY new.html /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


