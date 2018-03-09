export MAKEFLAGS="-j 4"

dev: NODE_ENV=development
dev: phony

# Пустой таргет. Превращает паттерн в .PHONY-подобный таргет.
# Хак нужен потому, что .PHONY не работает для паттернов (в т.ч. run-%).
.PHONY: phony
phony: ; : $@

# Checks

eslint: phony
	node_modules/.bin/eslint ./src ./webpack ./server

flow: phony
	node_modules/.bin/flow

check: phony eslint flow

# Production

webpack: phony
	node_modules/.bin/webpack --mode production

build: NODE_ENV=production
build: phony webpack
	node_modules/.bin/dist-size
