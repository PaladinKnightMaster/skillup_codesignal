# Codewriting

One of your new coworkers has submitted code with variable names in snake case, where multiword names are separated by underscores (such as `my_counter`). Your company's convention is to use *lower camel case*, where multiword variable names are concatenated, capitalizing the first letter of every word except the first (e.g. `myCounter`).

Your team is tasked with taking the source code `src` from your coworker, and returning code with the all the names in snake case converted into lower camel case. More specifically:
	- Variable names may start with one or more underscores, and these should be preserved. For example `_the_variable` should become `_theVariable`
	- Variable names may end with trailing underscores, and these should be preserved. For example, `the_variable__` should become `theVariable__`.
	- To keep the problem simplem you are not restricted to variable names, but instead should replace all instances of snake case.

## Example

For `src = "This is the doc_string for __secret_fun"`, the output should be `solution(src) = "This is the docString for __secretFun"`.

## Input/Output

- [execution time limit] 4 seconds (js)
- [memory limit] 1GB
- [input] string src
All variables in `src` are in lowercase English letters. It's guaranteed that in the variable names there can be only one `_` between words.

*Guaranteed constraints*
`0 =< src.length =< 10^5`.

- [output] string
Return the source code `src` with all instances of snake case converted to lower camel case, preserving any leading or trailing underscores.


```javascript
function solution(src) {
    return src.replace(/(_*)([a-z]+(?:_[a-z]+)+)(_*)/g, (match, p1, p2, p3) => {
        return p1 + p2.replace(/_([a-z])/g, (m, p4) => p4.toUpperCase()) + p3;
    });
}

// Test the function with the provided example
console.log(solution("__tfedvyc_yu SmkiSlbIra jnMxweasux iYuvcFtdl y_v_blizwo__ PYHmrdfxFAZ ts_lmki_ge_ dkePGijmIG mxcrIzoNQm anjmxlrygf"));
// Expected: "__tfedvycYu SmkiSlbIra jnMxweasux iYuvcFtdl yVBlizwo__ PYHmrdfxFAZ tsLmkiGe dkePGijmIG mxcrIzoNQm anjmxlrygf"

```