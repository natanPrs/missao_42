#!/bin/bash

if [[ $@ ]];
then 
		for i in "$@"
		do	mkdir "ex$i"
	done

else
	echo "sem argumentos"
fi
