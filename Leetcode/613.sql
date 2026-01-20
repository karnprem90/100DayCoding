/**
Table: Point

+-------------+------+
| Column Name | Type |
+-------------+------+
| x           | int  |
+-------------+------+
In SQL, x is the primary key column for this table.
Each row of this table indicates the position of a point on the X-axis.
 

Find the shortest distance between any two points from the Point table.

The result format is in the following example.
**/
select min(abs(p1.x - p2.x)) as shortest from point p1 join point p2 on p1.x != p2.x;