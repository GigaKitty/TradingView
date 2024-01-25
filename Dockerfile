FROM selenium/standalone-chrome:latest
# install pip3
RUN sudo apt-get update
RUN sudo apt-get install python3-pip -y
RUN sudo pip3 install selenium
# install python3 packages

#COPY ./app/* /app/
WORKDIR /app

ENTRYPOINT ["python3", "/app/main.py"]

