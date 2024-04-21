# Unciv Exponential Tech Cost
increases technology costs exponentially \
cost = cost * 1.1^column

```
column 0 techCost: 20 -> 20
column 1 techCost: 35 -> 38
column 2 techCost: 55 -> 66
column 3 techCost: 105 -> 139
column 4 techCost: 175 -> 256
column 5 techCost: 275 -> 442
column 6 techCost: 485 -> 859
column 7 techCost: 780 -> 1519
column 8 techCost: 1150 -> 2465
column 9 techCost: 1600 -> 3772
column 10 techCost: 2350 -> 6095
column 11 techCost: 3100 -> 8844
column 12 techCost: 4100 -> 12867
column 13 techCost: 5100 -> 17606
column 14 techCost: 6400 -> 24303
column 15 techCost: 7700 -> 32164
column 16 techCost: 8800 -> 40435
column 17 techCost: 9500 -> 48017
```

# note to me
```
bun ./src/run.ts
```
src/Techs.json -> tech tree to use \
jsons/Techs.json -> result with increased costs