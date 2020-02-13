insert into users (email, last_name, first_name)
values ($1, $2, $3)
returning *;