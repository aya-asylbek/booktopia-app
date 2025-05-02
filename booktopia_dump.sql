--
-- PostgreSQL database dump
--

-- Dumped from database version 14.17 (Homebrew)
-- Dumped by pg_dump version 14.17 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: books; Type: TABLE; Schema: public; Owner: tpl522_13
--

CREATE TABLE public.books (
    book_id integer NOT NULL,
    title character varying(255) NOT NULL,
    author character varying(255),
    google_book_id character varying(100),
    cover_image_url text,
    description text
);


ALTER TABLE public.books OWNER TO tpl522_13;

--
-- Name: books_book_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_13
--

CREATE SEQUENCE public.books_book_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.books_book_id_seq OWNER TO tpl522_13;

--
-- Name: books_book_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_13
--

ALTER SEQUENCE public.books_book_id_seq OWNED BY public.books.book_id;


--
-- Name: favorites; Type: TABLE; Schema: public; Owner: tpl522_13
--

CREATE TABLE public.favorites (
    id integer NOT NULL,
    user_id integer,
    book_id integer
);


ALTER TABLE public.favorites OWNER TO tpl522_13;

--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_13
--

CREATE SEQUENCE public.favorites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favorites_id_seq OWNER TO tpl522_13;

--
-- Name: favorites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_13
--

ALTER SEQUENCE public.favorites_id_seq OWNED BY public.favorites.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl522_13
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(100),
    email character varying(255),
    password text
);


ALTER TABLE public.users OWNER TO tpl522_13;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_13
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO tpl522_13;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_13
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: books book_id; Type: DEFAULT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.books ALTER COLUMN book_id SET DEFAULT nextval('public.books_book_id_seq'::regclass);


--
-- Name: favorites id; Type: DEFAULT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.favorites ALTER COLUMN id SET DEFAULT nextval('public.favorites_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: tpl522_13
--

COPY public.books (book_id, title, author, google_book_id, cover_image_url, description) FROM stdin;
\.


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: tpl522_13
--

COPY public.favorites (id, user_id, book_id) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl522_13
--

COPY public.users (user_id, username, email, password) FROM stdin;
1	testuser	test@example.com	$2b$10$3DhtwvRLmmsg20lFaH/o2OtVF6GbIsgUNjqemcwq81Ck4DUT565yS
5	testuser1	test1@example.com	$2b$10$UMOnzlbjv9kv67h3VKUqZOdMxGOhBixCY97LytoGBeLFXP.EnHz1m
6	AyaAsylbek	ssupataev@yahoo.com	$2b$10$SNBjcftWPSSSlIY4vvPxlezlB2u7HTVPDOkYODHxii5faP.FHadjC
8	aichurek0990	aichurek0990@example.com	$2b$10$GAdIkYdI4gfazjYf8.o8q.83idkajAH85lzrdStm8RR26FlNUmV2C
\.


--
-- Name: books_book_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_13
--

SELECT pg_catalog.setval('public.books_book_id_seq', 1, false);


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_13
--

SELECT pg_catalog.setval('public.favorites_id_seq', 1, false);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_13
--

SELECT pg_catalog.setval('public.users_user_id_seq', 8, true);


--
-- Name: books books_google_book_id_key; Type: CONSTRAINT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_google_book_id_key UNIQUE (google_book_id);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (book_id);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: favorites favorites_book_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.books(book_id);


--
-- Name: favorites favorites_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

