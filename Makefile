server = server01 server02 server03
clean:
	rm -rf ./dist
dev:
	npm run dev
build:
	npm run build
upload: clean build
	for server in $(server); do scp -r ./dist/* $$server:/var/www/hamster-document; done