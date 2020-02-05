#!/bin/sh
cd /Users/zhangl/Desktop/FE-Subjects/Node-web-server/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log