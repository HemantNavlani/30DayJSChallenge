function fibonacci (n){
    let f1 = 1;
    let f2 = 1;
    if (n>=1) console.log(f1);
    if (n>=2) console.log(f2);

    for (let i = 2;i<n;i++){
        let num = f1+f2;
        f1 = f2 
        f2 = num;
        console.log(num);
    }
}
fibonacci(8)



let profits = [ 60, 100, 120]
let weights = [10, 20, 30 ]
let w = 50

function knapSack(profits, weights, w) {
    let dp = [];
    for (let i = 0; i <= profits.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= w; j++) {
            dp[i][j] = -1;
        }
    }
    return helper(profits.length - 1, profits, weights, w, dp);
}

function helper(idx, profits, weights, w, dp) {
    if (idx < 0) return 0;
    if (dp[idx + 1][w] != -1) return dp[idx + 1][w];
    let pick = 0;
    if (weights[idx] <= w) {
        pick = profits[idx] + helper(idx - 1, profits, weights, w - weights[idx], dp);
    }
    let notPick = helper(idx - 1, profits, weights, w, dp);
    
    dp[idx + 1][w] = Math.max(pick, notPick);
    return dp[idx + 1][w];
}

console.log(knapSack(profits, weights, w)); 