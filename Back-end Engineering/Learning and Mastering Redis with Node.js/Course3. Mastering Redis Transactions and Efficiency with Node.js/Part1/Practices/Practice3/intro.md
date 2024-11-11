# Debugging Redis Pipeline for Transaction Integrity

You've made great progress so far! Now, let's debug a transactional issue in the code.

In this task, we are trying to set the user name and courses completed via a transaction. The code uses a pipeline to execute the transaction.

However, the transaction result `Transaction results: [2]` indicates that only the number of courses completed is incremented, and the user name is not set. Can you identify the issue and fix it?