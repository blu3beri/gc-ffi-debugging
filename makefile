all: prepare-js build-rust run-js

prepare-js:
	yarn --cwd sample-caller install

build-rust:
	cargo build --release

run-js:
	yarn --cwd sample-caller start

