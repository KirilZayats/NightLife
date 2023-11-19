CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS public.users(
    sub text primary key,
    uname text NOT NULL,
    uemail text,
    uavata text
);

CREATE TABLE IF NOT EXISTS public.comments(
    id uuid default uuid_generate_v4() primary key,
    user text NOT NULL,
    place uuid NOT NULL,
    message text,
    photos uuid,
    raiting decimal
);

CREATE TABLE IF NOT EXISTS public.places(
    id uuid default uuid_generate_v4() primary key,
    coords: text NOT NULL,
    photos: uuid,
    raiting decimal,
    info: jsonb not NULL
)