#!/bin/bash

set -x

export NODE_ENV=production

hugo --minify -d docs
