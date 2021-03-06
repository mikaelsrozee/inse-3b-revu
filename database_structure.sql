create table users(
    user_id serial not null primary key,
    email varchar(255) not null,
    username varchar(255),
    verified boolean,
    password_hash varchar(255) not null,
    verification_token varchar(255)
);

create table user_session(
	email varchar(255) not null,
	token varchar(255) not null,
	last_login timestamp
);

create table user_searches(
    search_id serial not null primary key,
    user_id int not null,
    text text not null,
    time timestamp not null
);

create table university(
    uni_id serial not null primary key,
    uni_name varchar(255) not null,
    uni_url varchar(255) not null,
    uni_description text not null
);

create table degree(
    degree_id serial not null primary key,
    degree_name varchar(255) not null,
    degree_desc text not null
);

create table uni_degree(
    uni_id serial not null,
    degree_id serial not null,
    requirements_ucas integer,
    requirements_grades varchar(255),

    degree_category varchar(50),
    degree_level varchar(20),
    degree_type varchar(20),
    degree_sandwich boolean,

    primary key (uni_id, degree_id),
    foreign key (uni_id) references university(uni_id),
    foreign key (degree_id) references degree(degree_id)
);

create table review(
    review_id serial not null primary key,
    uni_id integer not null,
    degree_id integer not null,
    user_id int not null,

    degree_rating decimal not null,
    degree_rating_desc varchar(1000),
    staff_rating decimal not null,
    staff_rating_desc varchar(1000),
    facility_rating decimal not null,
    facility_rating_desc varchar(1000),
    uni_rating decimal not null,
    uni_rating_desc varchar(1000),
    accommodation_rating decimal not null,
    accommodation_rating_desc varchar(1000),

    foreign key (uni_id) references university(uni_id),
    foreign key (degree_id) references degree(degree_id),
    foreign key (user_id) references users(user_id)
);




/*Add test data*/
