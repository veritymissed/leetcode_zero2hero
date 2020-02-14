# 13. Roman to Integer

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

- I can be placed before V (5) and X (10) to make 4 and 9.
- X can be placed before L (50) and C (100) to make 40 and 90.
- C can be placed before D (500) and M (1000) to make 400 and 900.

## 想法

有 **減法** 出現的數字，一定是 **一大一小** 、 **前小後大** 的組合。

將羅馬數字字串，透過mapping table，先轉成各個基本數字（mapping table裡有的symbol/value）成陣列。

```
Example

input: "MCMXCIV"

new array : [1000, 100, 1000, 10, 100, 1, 5]

```

再來處理這個陣列。

1. 從頭開始檢查，同時檢查當下的數字與後面的數字，如果後面數字>當下數字，就可以把他們視為一組。計算他們相減結果並累加。

多一次的index + 1, 離開這組跳到下一個數字

2. 如果當下數字 > 後面數字，表示不需要減掉數值，直接累加這個值。

3. 一路計算到陣列結束，便可得到總值。
