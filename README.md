# TypeScript Implicit String Concatenation with '+' Operator

This repository demonstrates a subtle but potentially problematic behavior in TypeScript: the implicit string concatenation that occurs when the `+` operator is used with a mixture of number and string types.  While TypeScript correctly infers types in many cases, it doesn't throw a type error when adding a number and a string.  Instead, it performs string concatenation.

This can be problematic because it leads to runtime errors or unexpected behavior if developers aren't aware of this behavior and assume strict type checking will prevent such scenarios.  The example code clearly shows this issue.  The solution file demonstrates how to mitigate this problem.