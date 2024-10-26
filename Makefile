DC = docker compose
EXEC = docker exec -it
LOGS = docker logs
ENV = --env-file .env
APP_FILE = docker-compose.yml
APP_CONTAINER = frontend-vue

.PHONY: app
app:
	$(DC) -f $(APP_FILE) $(ENV) up --build -d

.PHONY: app-run
app-run:
    docker run -d -p 3337:80 axenix-web

.PHONY: app-down
app-down:
	$(DC) -f $(APP_FILE) down

.PHONY: app-shell
app-shell:
	$(EXEC) $(APP_CONTAINER) /bin/sh

.PHONY: app-logs
app-logs:
	$(LOGS) $(APP_CONTAINER) -f