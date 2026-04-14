/**
 * 
 Table: Logs

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| num         | varchar |
+-------------+---------+
In SQL, id is the primary key for this table.
id is an autoincrement column starting from 1.
 

Find all numbers that appear at least three times consecutively.

Return the result table in any order.

The result format is in the following example.

Example 1:

Input: 
Logs table:
+----+-----+
| id | num |
+----+-----+
| 1  | 1   |
| 2  | 1   |
| 3  | 1   |
| 4  | 2   |
| 5  | 1   |
| 6  | 2   |
| 7  | 2   |
+----+-----+
Output: 
+-----------------+
| ConsecutiveNums |
+-----------------+
| 1               |
+-----------------+
Explanation: 1 is the only number that appears consecutively for at least three times.
 */

select distinct L1.num as ConsecutiveNums From Logs L1 join Logs L2 on L1.id = L2.id+1 join Logs L3 on L1.id = L3.id+2 where L1.num = L2.num and L2.num = L3.num;

select distinct num as ConsecutiveNums from (select num, LAG(num) OVER (order by id) as prev, LEAD(num) over (order by id) as next from Logs) where num = prev and num = next;


