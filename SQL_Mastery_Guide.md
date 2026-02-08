# 🎯 SQL Mastery Guide: From Zero to Pro

## 📚 Table of Contents
1. [Level 1: SQL Foundations](#level-1-sql-foundations)
2. [Level 2: Filtering & Sorting](#level-2-filtering--sorting)
3. [Level 3: Aggregations](#level-3-aggregations)
4. [Level 4: JOINs (The Big One!)](#level-4-joins-the-big-one)
5. [Level 5: Subqueries](#level-5-subqueries)
6. [Level 6: CTEs (Common Table Expressions)](#level-6-ctes)
7. [Level 7: Window Functions](#level-7-window-functions)
8. [Level 8: Advanced Techniques](#level-8-advanced-techniques)
9. [Practice Problems by Level](#practice-problems)

---

# Level 1: SQL Foundations

## What is SQL?
SQL (Structured Query Language) is the language used to communicate with databases.
Think of it as asking questions to a giant spreadsheet!

## The Basic SELECT Statement

```sql
SELECT column1, column2
FROM table_name;
```

### Example:
**Table: `employees`**
| id | name    | department | salary |
|----|---------|------------|--------|
| 1  | Alice   | Engineering| 75000  |
| 2  | Bob     | Sales      | 55000  |
| 3  | Charlie | Engineering| 80000  |

```sql
-- Get all columns
SELECT * FROM employees;

-- Get specific columns
SELECT name, salary FROM employees;
```

**Result:**
| name    | salary |
|---------|--------|
| Alice   | 75000  |
| Bob     | 55000  |
| Charlie | 80000  |

## Column Aliases (AS)
```sql
SELECT name AS employee_name, salary AS annual_salary
FROM employees;
```

## DISTINCT - Remove Duplicates
```sql
SELECT DISTINCT department FROM employees;
```
**Result:**
| department  |
|-------------|
| Engineering |
| Sales       |

---

# Level 2: Filtering & Sorting

## WHERE Clause - Filtering Rows

```sql
SELECT * FROM employees
WHERE department = 'Engineering';
```

### Comparison Operators
| Operator | Meaning                  | Example                    |
|----------|--------------------------|----------------------------|
| `=`      | Equal                    | `salary = 75000`           |
| `!=` `<>`| Not equal                | `department != 'Sales'`    |
| `>`      | Greater than             | `salary > 60000`           |
| `<`      | Less than                | `salary < 60000`           |
| `>=`     | Greater than or equal    | `salary >= 75000`          |
| `<=`     | Less than or equal       | `salary <= 75000`          |

### Logical Operators
```sql
-- AND: Both conditions must be true
SELECT * FROM employees
WHERE department = 'Engineering' AND salary > 75000;

-- OR: At least one condition must be true
SELECT * FROM employees
WHERE department = 'Engineering' OR department = 'Sales';

-- NOT: Negates the condition
SELECT * FROM employees
WHERE NOT department = 'Sales';
```

### Special Operators

```sql
-- BETWEEN: Range (inclusive)
SELECT * FROM employees WHERE salary BETWEEN 50000 AND 80000;

-- IN: Match any value in list
SELECT * FROM employees WHERE department IN ('Engineering', 'Sales', 'HR');

-- LIKE: Pattern matching
SELECT * FROM employees WHERE name LIKE 'A%';     -- Starts with A
SELECT * FROM employees WHERE name LIKE '%e';     -- Ends with e
SELECT * FROM employees WHERE name LIKE '%li%';   -- Contains 'li'
SELECT * FROM employees WHERE name LIKE '_ob';    -- 3 letters ending in 'ob'

-- IS NULL / IS NOT NULL
SELECT * FROM employees WHERE manager_id IS NULL;
```

## ORDER BY - Sorting Results

```sql
-- Ascending (default)
SELECT * FROM employees ORDER BY salary;
SELECT * FROM employees ORDER BY salary ASC;

-- Descending
SELECT * FROM employees ORDER BY salary DESC;

-- Multiple columns
SELECT * FROM employees ORDER BY department ASC, salary DESC;
```

## LIMIT - Restrict Number of Rows
```sql
SELECT * FROM employees ORDER BY salary DESC LIMIT 3;  -- Top 3 salaries
```

---

# Level 3: Aggregations

## Aggregate Functions

| Function   | Description                    | Example                  |
|------------|--------------------------------|--------------------------|
| `COUNT()`  | Count rows                     | `COUNT(*)`, `COUNT(id)`  |
| `SUM()`    | Sum of values                  | `SUM(salary)`            |
| `AVG()`    | Average of values              | `AVG(salary)`            |
| `MIN()`    | Minimum value                  | `MIN(salary)`            |
| `MAX()`    | Maximum value                  | `MAX(salary)`            |

### Examples:
```sql
SELECT COUNT(*) FROM employees;                    -- Total employees
SELECT COUNT(DISTINCT department) FROM employees;  -- Unique departments
SELECT SUM(salary) FROM employees;                 -- Total salary expense
SELECT AVG(salary) FROM employees;                 -- Average salary
SELECT MIN(salary), MAX(salary) FROM employees;    -- Salary range
```

## GROUP BY - Grouping Data

**Think of it as:** "For each unique value in this column, calculate something"

```sql
SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;
```

**Result:**
| department  | employee_count | avg_salary |
|-------------|----------------|------------|
| Engineering | 2              | 77500      |
| Sales       | 1              | 55000      |

### ⚠️ Golden Rule of GROUP BY
> Every column in SELECT must either:
> 1. Be in the GROUP BY clause, OR
> 2. Be inside an aggregate function

```sql
-- ❌ WRONG: 'name' is not grouped or aggregated
SELECT department, name, COUNT(*) FROM employees GROUP BY department;

-- ✅ CORRECT
SELECT department, COUNT(*) FROM employees GROUP BY department;
```

## HAVING - Filter Groups (not rows!)

**WHERE** filters rows BEFORE grouping
**HAVING** filters groups AFTER grouping

```sql
-- Find departments with more than 1 employee
SELECT department, COUNT(*) AS emp_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 1;
```

### Execution Order 🔄
```
FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT
```

---

# Level 4: JOINs (The Big One!)

## Why JOINs?
Data is split across multiple tables to avoid repetition. JOINs combine them!

## Sample Tables for Examples

**Table: `employees`**
| emp_id | name    | dept_id |
|--------|---------|---------|
| 1      | Alice   | 10      |
| 2      | Bob     | 20      |
| 3      | Charlie | 10      |
| 4      | Diana   | NULL    |

**Table: `departments`**
| dept_id | dept_name   |
|---------|-------------|
| 10      | Engineering |
| 20      | Sales       |
| 30      | Marketing   |

---

## 1️⃣ INNER JOIN

**Returns:** Only rows that have matches in BOTH tables

```
    employees         departments
   ┌─────────┐       ┌─────────┐
   │         │       │         │
   │    ┌────┼───────┼────┐    │
   │    │XXXX│       │XXXX│    │
   │    │XXXX│       │XXXX│    │
   │    └────┼───────┼────┘    │
   │         │       │         │
   └─────────┘       └─────────┘
        Only the overlapping part!
```

```sql
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;
```

**Result:**
| name    | dept_name   |
|---------|-------------|
| Alice   | Engineering |
| Bob     | Sales       |
| Charlie | Engineering |

❌ Diana is excluded (dept_id is NULL, no match)
❌ Marketing is excluded (no employee has dept_id 30)

---

## 2️⃣ LEFT JOIN (LEFT OUTER JOIN)

**Returns:** ALL rows from LEFT table + matching rows from RIGHT table

```
    employees         departments
   ┌─────────┐       ┌─────────┐
   │XXXXXXXXX│       │         │
   │XXXX┌────┼───────┼────┐    │
   │XXXX│XXXX│       │XXXX│    │
   │XXXX│XXXX│       │XXXX│    │
   │XXXX└────┼───────┼────┘    │
   │XXXXXXXXX│       │         │
   └─────────┘       └─────────┘
    All of left + matching right
```

```sql
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id;
```

**Result:**
| name    | dept_name   |
|---------|-------------|
| Alice   | Engineering |
| Bob     | Sales       |
| Charlie | Engineering |
| Diana   | **NULL**    |  ← Kept! No match, but still included

✅ Diana is included with NULL for dept_name
❌ Marketing still excluded (it's on the right side)

---

## 3️⃣ RIGHT JOIN (RIGHT OUTER JOIN)

**Returns:** ALL rows from RIGHT table + matching rows from LEFT table

```
    employees         departments
   ┌─────────┐       ┌─────────┐
   │         │       │XXXXXXXXX│
   │    ┌────┼───────┼────┐XXXX│
   │    │XXXX│       │XXXX│XXXX│
   │    │XXXX│       │XXXX│XXXX│
   │    └────┼───────┼────┘XXXX│
   │         │       │XXXXXXXXX│
   └─────────┘       └─────────┘
    Matching left + all of right
```

```sql
SELECT e.name, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.dept_id;
```

**Result:**
| name    | dept_name   |
|---------|-------------|
| Alice   | Engineering |
| Charlie | Engineering |
| Bob     | Sales       |
| **NULL**| Marketing   |  ← Kept! No employee, but included

❌ Diana is excluded (she's on the left side)
✅ Marketing is included with NULL for name

---

## 4️⃣ FULL OUTER JOIN

**Returns:** ALL rows from BOTH tables

```
    employees         departments
   ┌─────────┐       ┌─────────┐
   │XXXXXXXXX│       │XXXXXXXXX│
   │XXXX┌────┼───────┼────┐XXXX│
   │XXXX│XXXX│       │XXXX│XXXX│
   │XXXX│XXXX│       │XXXX│XXXX│
   │XXXX└────┼───────┼────┘XXXX│
   │XXXXXXXXX│       │XXXXXXXXX│
   └─────────┘       └─────────┘
         Everything!
```

```sql
SELECT e.name, d.dept_name
FROM employees e
FULL OUTER JOIN departments d ON e.dept_id = d.dept_id;
```

**Result:**
| name    | dept_name   |
|---------|-------------|
| Alice   | Engineering |
| Bob     | Sales       |
| Charlie | Engineering |
| Diana   | NULL        |  ← No matching dept
| NULL    | Marketing   |  ← No matching employee

⚠️ Note: MySQL doesn't support FULL OUTER JOIN directly. Use UNION:
```sql
SELECT e.name, d.dept_name FROM employees e LEFT JOIN departments d ON e.dept_id = d.dept_id
UNION
SELECT e.name, d.dept_name FROM employees e RIGHT JOIN departments d ON e.dept_id = d.dept_id;
```

---

## 5️⃣ CROSS JOIN (Cartesian Product)

**Returns:** Every combination of rows from both tables

```sql
SELECT e.name, d.dept_name
FROM employees e
CROSS JOIN departments d;
```

**Result:** 4 employees × 3 departments = 12 rows!
| name    | dept_name   |
|---------|-------------|
| Alice   | Engineering |
| Alice   | Sales       |
| Alice   | Marketing   |
| Bob     | Engineering |
| Bob     | Sales       |
| Bob     | Marketing   |
| ...     | ...         |

Rarely used, but useful for generating combinations!

---

## 6️⃣ SELF JOIN

**What:** Join a table with itself
**Why:** When rows in a table reference other rows in the same table

**Example: Employee-Manager Relationship**

**Table: `employees`**
| emp_id | name    | manager_id |
|--------|---------|------------|
| 1      | Alice   | NULL       |
| 2      | Bob     | 1          |
| 3      | Charlie | 1          |
| 4      | Diana   | 2          |

```sql
SELECT 
    e.name AS employee,
    m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.emp_id;
```

**Result:**
| employee | manager |
|----------|---------|
| Alice    | NULL    |  ← Alice has no manager
| Bob      | Alice   |
| Charlie  | Alice   |
| Diana    | Bob     |

---

## 🎯 JOIN Summary Table

| JOIN Type        | Left Table | Right Table | Use When                          |
|------------------|------------|-------------|-----------------------------------|
| INNER JOIN       | Matching   | Matching    | Need data from both tables        |
| LEFT JOIN        | All        | Matching    | Need all from left, extras ok     |
| RIGHT JOIN       | Matching   | All         | Need all from right, extras ok    |
| FULL OUTER JOIN  | All        | All         | Need everything from both         |
| CROSS JOIN       | All × All  | All × All   | Need all combinations             |
| SELF JOIN        | Same table joined to itself | Hierarchical data      |

---

## Multiple JOINs

```sql
SELECT 
    e.name,
    d.dept_name,
    p.project_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id
LEFT JOIN projects p ON e.emp_id = p.emp_id;
```

---

# Level 5: Subqueries

## What is a Subquery?
A query inside another query! (Query-ception 🎬)

## Types of Subqueries

### 1. Scalar Subquery (Returns single value)
```sql
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

### 2. Row Subquery (Returns single row)
```sql
SELECT *
FROM employees
WHERE (dept_id, salary) = (SELECT dept_id, MAX(salary) FROM employees GROUP BY dept_id LIMIT 1);
```

### 3. Table Subquery (Returns multiple rows/columns)
```sql
SELECT *
FROM employees
WHERE dept_id IN (SELECT dept_id FROM departments WHERE location = 'NYC');
```

### 4. Correlated Subquery (References outer query)
```sql
-- Find employees who earn more than their department average
SELECT e1.name, e1.salary
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.dept_id = e1.dept_id  -- References outer query!
);
```

## Subquery Locations

```sql
-- In SELECT (scalar only)
SELECT name, 
       (SELECT dept_name FROM departments d WHERE d.dept_id = e.dept_id) AS department
FROM employees e;

-- In FROM (table subquery, needs alias)
SELECT dept_name, avg_salary
FROM (
    SELECT dept_id, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY dept_id
) AS dept_averages
JOIN departments d ON dept_averages.dept_id = d.dept_id;

-- In WHERE
SELECT * FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

## EXISTS & NOT EXISTS
```sql
-- Find departments that have employees
SELECT *
FROM departments d
WHERE EXISTS (
    SELECT 1 FROM employees e WHERE e.dept_id = d.dept_id
);

-- Find departments with NO employees
SELECT *
FROM departments d
WHERE NOT EXISTS (
    SELECT 1 FROM employees e WHERE e.dept_id = d.dept_id
);
```

---

# Level 6: CTEs

## Common Table Expressions (WITH clause)

CTEs make complex queries readable by defining temporary "named subqueries"!

### Basic Syntax
```sql
WITH cte_name AS (
    SELECT ...
)
SELECT * FROM cte_name;
```

### Example: Find employees earning above department average
```sql
WITH dept_avg AS (
    SELECT dept_id, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY dept_id
)
SELECT e.name, e.salary, d.avg_salary
FROM employees e
JOIN dept_avg d ON e.dept_id = d.dept_id
WHERE e.salary > d.avg_salary;
```

### Multiple CTEs
```sql
WITH 
    high_earners AS (
        SELECT * FROM employees WHERE salary > 70000
    ),
    engineering AS (
        SELECT * FROM employees WHERE dept_id = 10
    )
SELECT * 
FROM high_earners h
JOIN engineering e ON h.emp_id = e.emp_id;
```

### Recursive CTEs (Advanced!)
For hierarchical data like org charts:

```sql
WITH RECURSIVE org_chart AS (
    -- Base case: top-level managers
    SELECT emp_id, name, manager_id, 0 AS level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive case: employees under managers
    SELECT e.emp_id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.emp_id
)
SELECT * FROM org_chart ORDER BY level, name;
```

---

# Level 7: Window Functions

## What are Window Functions?
Perform calculations across rows WITHOUT collapsing them (unlike GROUP BY)!

### Basic Syntax
```sql
function_name() OVER (
    PARTITION BY column    -- Like GROUP BY, but keeps rows
    ORDER BY column        -- Order within partition
)
```

## Common Window Functions

### 1. ROW_NUMBER() - Unique sequential number
```sql
SELECT 
    name,
    dept_id,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS rank
FROM employees;
```

### 2. RANK() - Same rank for ties, skips numbers
```sql
SELECT 
    name,
    salary,
    RANK() OVER (ORDER BY salary DESC) AS rank
FROM employees;
-- If two people tie at rank 1, next person gets rank 3
```

### 3. DENSE_RANK() - Same rank for ties, no skips
```sql
SELECT 
    name,
    salary,
    DENSE_RANK() OVER (ORDER BY salary DESC) AS rank
FROM employees;
-- If two people tie at rank 1, next person gets rank 2
```

### 4. PARTITION BY - Restart numbering per group
```sql
SELECT 
    name,
    dept_id,
    salary,
    ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS dept_rank
FROM employees;
-- Each department has its own ranking 1, 2, 3...
```

### 5. LAG() / LEAD() - Access previous/next rows
```sql
SELECT 
    name,
    salary,
    LAG(salary, 1) OVER (ORDER BY emp_id) AS prev_salary,
    LEAD(salary, 1) OVER (ORDER BY emp_id) AS next_salary
FROM employees;
```

### 6. Running Totals with SUM()
```sql
SELECT 
    order_date,
    amount,
    SUM(amount) OVER (ORDER BY order_date) AS running_total
FROM orders;
```

### 7. Moving Averages with ROWS BETWEEN
```sql
SELECT 
    order_date,
    amount,
    AVG(amount) OVER (
        ORDER BY order_date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg_3
FROM orders;
```

---

# Level 8: Advanced Techniques

## CASE Expressions (SQL's IF-ELSE)
```sql
SELECT 
    name,
    salary,
    CASE 
        WHEN salary >= 80000 THEN 'High'
        WHEN salary >= 60000 THEN 'Medium'
        ELSE 'Low'
    END AS salary_tier
FROM employees;
```

## COALESCE - First non-NULL value
```sql
SELECT name, COALESCE(phone, email, 'No Contact') AS contact
FROM employees;
```

## NULLIF - Return NULL if values match
```sql
SELECT NULLIF(bonus, 0) AS bonus  -- Returns NULL if bonus is 0
FROM employees;
```

## String Functions
```sql
SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name,
    UPPER(name) AS upper_name,
    LOWER(name) AS lower_name,
    LENGTH(name) AS name_length,
    SUBSTRING(name, 1, 3) AS first_3_chars,
    TRIM(name) AS trimmed
FROM employees;
```

## Date Functions
```sql
SELECT 
    CURRENT_DATE,
    CURRENT_TIMESTAMP,
    DATE_ADD(hire_date, INTERVAL 1 YEAR) AS anniversary,
    DATEDIFF(CURRENT_DATE, hire_date) AS days_employed,
    YEAR(hire_date) AS hire_year,
    MONTH(hire_date) AS hire_month
FROM employees;
```

## UNION vs UNION ALL
```sql
-- UNION: Removes duplicates
SELECT name FROM employees_ny
UNION
SELECT name FROM employees_la;

-- UNION ALL: Keeps duplicates (faster!)
SELECT name FROM employees_ny
UNION ALL
SELECT name FROM employees_la;
```

## INSERT, UPDATE, DELETE (DML)
```sql
-- INSERT
INSERT INTO employees (name, dept_id, salary)
VALUES ('Eve', 10, 70000);

-- UPDATE
UPDATE employees
SET salary = salary * 1.10
WHERE dept_id = 10;

-- DELETE
DELETE FROM employees
WHERE emp_id = 5;
```

---

# Practice Problems

## 🟢 Beginner (LeetCode Easy)
| # | Problem | Focus Area |
|---|---------|------------|
| 175 | Combine Two Tables | LEFT JOIN |
| 181 | Employees Earning More Than Their Managers | Self JOIN |
| 182 | Duplicate Emails | GROUP BY, HAVING |
| 183 | Customers Who Never Order | LEFT JOIN, IS NULL |
| 196 | Delete Duplicate Emails | DELETE, Self JOIN |
| 197 | Rising Temperature | Self JOIN, Date |

## 🟡 Intermediate (LeetCode Medium)
| # | Problem | Focus Area |
|---|---------|------------|
| 176 | Second Highest Salary | Subquery, LIMIT |
| 177 | Nth Highest Salary | Window Functions |
| 178 | Rank Scores | DENSE_RANK |
| 180 | Consecutive Numbers | LAG/LEAD or Self JOIN |
| 184 | Department Highest Salary | Subquery, GROUP BY |
| 550 | Game Play Analysis IV | CTE, Date |

## 🔴 Advanced (LeetCode Hard)
| # | Problem | Focus Area |
|---|---------|------------|
| 185 | Department Top Three Salaries | Window + Subquery |
| 262 | Trips and Users | Complex JOIN, CASE |
| 569 | Median Employee Salary | Window Functions |
| 601 | Human Traffic of Stadium | Consecutive rows |
| 615 | Average Salary | Date manipulation |

---

# 🎓 Quick Reference Card

```sql
-- SELECT template
SELECT columns
FROM table1
[JOIN table2 ON condition]
WHERE row_filter
GROUP BY columns
HAVING group_filter
ORDER BY columns [ASC|DESC]
LIMIT n;

-- Execution order (memorize!)
FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT
```

---

**Happy Learning! 🚀**
Remember: The best way to learn SQL is by DOING. Practice on LeetCode, HackerRank, or real datasets!
