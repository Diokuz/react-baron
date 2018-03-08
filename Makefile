export MAKEFLAGS="-j 4"

dev: NODE_ENV=development
dev: phony watch-server dev-server

# Пустой таргет. Превращает паттерн в .PHONY-подобный таргет.
# Хак нужен потому, что .PHONY не работает для паттернов (в т.ч. run-%).
.PHONY: phony
phony: ; : $@

clean: phony
	rm -rf ./build

clean-lib: phony
	rm -rf ./lib

build-server: phony clean
	NODE_ENV=$(NODE_ENV) node_modules/.bin/webpack --config webpack/server-config.js

watch-server: phony
	NODE_ENV=$(NODE_ENV) node_modules/.bin/webpack --config webpack/server-config.js --watch

dev-server: phony build-server
	NODE_ENV=development node -r source-map-support/register server/

build-client: phony clean
	NODE_ENV=$(NODE_ENV) node_modules/.bin/webpack --config webpack/client-config.js

build-babel: phony clean-lib
	node_modules/.bin/babel src --out-dir lib

watch-babel: phony clean-lib
	node_modules/.bin/babel src --out-dir lib --watch


# Checks

eslint: phony
	node_modules/.bin/eslint ./src ./webpack ./server

flow: phony
	node_modules/.bin/flow

check: phony eslint flow

# Production

build: NODE_ENV=production
build: phony clean build-server build-client
	node_modules/.bin/dist-size --limit 10 -e js,css build/

start: phony
	NODE_ENV=production node ./server/index.js
