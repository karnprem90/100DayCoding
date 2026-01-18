-- LeetCode 196: Delete Duplicate Emails
-- Delete all duplicate emails, keeping only the one with the smallest id

DELETE p1
FROM Person p1, Person p2
WHERE p1.email = p2.email
  AND p1.id > p2.id;
