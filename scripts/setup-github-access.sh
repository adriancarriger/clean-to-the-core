#!/bin/bash
set -e
echo "machine github.com" >> ~/.netrc
echo "   login $github_email" >> ~/.netrc
echo "   password $github_token" >> ~/.netrc