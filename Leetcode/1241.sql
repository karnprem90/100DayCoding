select posts.sub_id as post_id, count(distinct comments.sub_id) as number_of_comments
from Submissions posts
left join Submissions comments
on posts.sub_id = comments.parent_id
where posts.parent_id is null
group by posts.sub_id;
