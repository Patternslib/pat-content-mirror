HTTPSERVE   ?= node_modules/.bin/http-server

all:: designerhappy

########################################################################
## Install dependencies

stamp-npm: package.json
	npm install
	touch stamp-npm

clean::
	rm -rf stamp-npm node_modules


designerhappy:: stamp-npm
	printf "\n\n Designer, you can be happy now.\n Go to http://localhost:4001/demo/ to see the demo \n\n\n\n"
	npm run start
