#!/bin/bash


python3 one.py > one >&1 &
python3 two.py > two >&1 &
python3 three.py > three >&1 &
